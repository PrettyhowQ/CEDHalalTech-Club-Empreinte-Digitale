import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { chatWithIARP } from "./openai";
import { insertChatConversationSchema, insertAnalyticsEventSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Courses routes
  app.get('/api/courses', async (req, res) => {
    try {
      const { category, limit } = req.query;
      let courses;
      
      if (category && typeof category === 'string') {
        courses = await storage.getCoursesByCategory(category);
      } else {
        courses = await storage.getCourses(limit ? parseInt(limit as string) : undefined);
      }
      
      res.json(courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ message: "Failed to fetch courses" });
    }
  });

  app.get('/api/courses/:id', async (req, res) => {
    try {
      const courseId = parseInt(req.params.id);
      const course = await storage.getCourse(courseId);
      
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      
      res.json(course);
    } catch (error) {
      console.error("Error fetching course:", error);
      res.status(500).json({ message: "Failed to fetch course" });
    }
  });

  // User progress routes
  app.get('/api/user/progress', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const progress = await storage.getUserProgress(userId);
      res.json(progress);
    } catch (error) {
      console.error("Error fetching user progress:", error);
      res.status(500).json({ message: "Failed to fetch user progress" });
    }
  });

  app.post('/api/user/progress', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { courseId, progress } = req.body;
      
      const updatedProgress = await storage.updateUserProgress(userId, courseId, progress);
      
      // Track analytics event
      await storage.createAnalyticsEvent({
        userId,
        eventType: 'progress_updated',
        eventData: { courseId, progress },
      });
      
      res.json(updatedProgress);
    } catch (error) {
      console.error("Error updating user progress:", error);
      res.status(500).json({ message: "Failed to update user progress" });
    }
  });

  app.post('/api/user/complete-course', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { courseId } = req.body;
      
      await storage.completeUserCourse(userId, courseId);
      
      // Track analytics event
      await storage.createAnalyticsEvent({
        userId,
        eventType: 'course_completed',
        eventData: { courseId },
      });
      
      res.json({ success: true });
    } catch (error) {
      console.error("Error completing course:", error);
      res.status(500).json({ message: "Failed to complete course" });
    }
  });

  // Testimonials routes
  app.get('/api/testimonials', async (req, res) => {
    try {
      const testimonials = await storage.getPublishedTestimonials();
      res.json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  // Calendar sync routes
  app.post("/api/calendar/sync", async (req, res) => {
    try {
      const { events, timezone } = req.body;
      
      // Simulation de synchronisation Google Calendar
      // En production, ici vous intégreriez l'API Google Calendar
      const syncResult = {
        success: true,
        synced: events.length,
        timezone: timezone,
        message: "Événements synchronisés avec Google Calendar"
      };
      
      console.log(`Calendar sync: ${events.length} events for timezone ${timezone}`);
      res.json(syncResult);
    } catch (error: any) {
      console.error("Error syncing calendar:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Chat IARP routes
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, language = 'fr', conversationId, isVoiceEnabled = false } = req.body;
      const userId = req.user?.claims?.sub || null;
      
      if (!message) {
        return res.status(400).json({ message: "Message is required" });
      }

      let conversation;
      
      if (conversationId) {
        conversation = await storage.getChatConversation(conversationId);
        if (!conversation) {
          return res.status(404).json({ message: "Conversation not found" });
        }
      } else {
        // Create new conversation
        conversation = await storage.createChatConversation({
          userId,
          language,
          messages: [],
          isVoiceEnabled,
        });
      }

      // Get AI response
      const aiResponse = await chatWithIARP(message, language, conversation.messages as any[]);
      
      // Update conversation with new messages
      const updatedMessages = [
        ...(conversation.messages as any[]),
        { role: 'user', content: message, timestamp: new Date().toISOString() },
        { role: 'assistant', content: aiResponse, timestamp: new Date().toISOString() },
      ];
      
      const updatedConversation = await storage.updateChatConversation(
        conversation.id,
        updatedMessages
      );

      // Track analytics event
      if (userId) {
        await storage.createAnalyticsEvent({
          userId,
          eventType: 'chat_interaction',
          eventData: { language, isVoiceEnabled },
        });
      }

      res.json({
        response: aiResponse,
        conversationId: updatedConversation.id,
      });
    } catch (error) {
      console.error("Error in chat:", error);
      res.status(500).json({ message: "Failed to process chat message" });
    }
  });

  app.get('/api/chat/:id', async (req, res) => {
    try {
      const conversationId = req.params.id;
      const conversation = await storage.getChatConversation(conversationId);
      
      if (!conversation) {
        return res.status(404).json({ message: "Conversation not found" });
      }
      
      res.json(conversation);
    } catch (error) {
      console.error("Error fetching conversation:", error);
      res.status(500).json({ message: "Failed to fetch conversation" });
    }
  });

  // Products routes (Boutique solidaire)
  app.get('/api/products', async (req, res) => {
    try {
      const { category } = req.query;
      const products = await storage.getProducts(category as string);
      res.json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });

  app.get('/api/products/:id', async (req, res) => {
    try {
      const productId = parseInt(req.params.id);
      const product = await storage.getProduct(productId);
      
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      
      res.json(product);
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });

  // Analytics routes
  app.get('/api/analytics/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const analytics = await storage.getUserAnalytics(userId);
      res.json(analytics);
    } catch (error) {
      console.error("Error fetching user analytics:", error);
      res.status(500).json({ message: "Failed to fetch user analytics" });
    }
  });

  app.get('/api/analytics/global', async (req, res) => {
    try {
      const metrics = await storage.getGlobalMetrics();
      res.json(metrics);
    } catch (error) {
      console.error("Error fetching global metrics:", error);
      res.status(500).json({ message: "Failed to fetch global metrics" });
    }
  });

  // Analytics event tracking
  app.post('/api/analytics/track', async (req, res) => {
    try {
      const { eventType, eventData } = req.body;
      const userId = req.user?.claims?.sub || null;
      
      await storage.createAnalyticsEvent({
        userId,
        eventType,
        eventData,
      });
      
      res.json({ success: true });
    } catch (error) {
      console.error("Error tracking event:", error);
      res.status(500).json({ message: "Failed to track event" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
