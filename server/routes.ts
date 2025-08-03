import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { chatWithIARP } from "./openai";

// Authentification simplifiée pour déploiement externe
const isAuthenticated = (req: any, res: any, next: any) => {
  console.log("🌐 Mode déploiement externe - accès libre");
  next();
};

const setupAuth = (app: Express) => {
  console.log("⚠️ Authentification Replit désactivée pour déploiement externe");
};

function generateDemoResponseSafe(message: string, language: string): string {
  const lowerMessage = message.toLowerCase();

  const demoResponses: Record<string, string[]> = {
    fr: [
      "⚠️ [MODE DÉMO] Assalamu alaykum ! Je suis Super IARP Pro en mode démonstration. Vos crédits OpenAI sont épuisés, mais je peux vous renseigner sur l'écosystème CED HalalTech™.",
      "🎯 [MODE DÉMO] Wa alaykum assalam ! Bienvenue dans l'écosystème CED HalalTech™. Mode démo activé - ajoutez des crédits OpenAI pour l'expérience complète.",
      "🕌 [MODE DÉMO] Marhaban ! Je suis IARP, conforme aux principes islamiques. En mode démo, je peux vous parler de nos 10 formations islamiques certifiées Fiqh.",
      "📚 [MODE DÉMO] Nos formations disponibles : Tajweed, Mémorisation Coranique, Sahaba, Hadith, Fiqh Hanafi, Aqida, Arabe, Calligraphie. Laquelle vous intéresse ?",
      "💳 [MODE DÉMO] L'écosystème CED Bank propose des services bancaires 100% halal. Pour activer le chat complet, ajoutez des crédits sur platform.openai.com/billing",
    ],
    en: [
      "⚠️ [DEMO MODE] Assalamu alaykum! I'm Super IARP Pro in demonstration mode. Your OpenAI credits are exhausted, but I can tell you about CED HalalTech™ ecosystem.",
      "🎯 [DEMO MODE] Welcome to CED HalalTech™! Demo mode active - add OpenAI credits for the complete experience.",
      "🕌 [DEMO MODE] Marhaban! I'm IARP, compliant with Islamic principles. In demo mode, I can tell you about our 10 certified Islamic Fiqh trainings.",
    ],
  };

  const responses = demoResponses[language] || demoResponses["fr"];
  return responses[Math.floor(Math.random() * responses.length)];
}
import {
  insertChatConversationSchema,
  insertAnalyticsEventSchema,
  insertVisitorSchema,
} from "@shared/schema";

import { seedIslamicCourses } from "./seedIslamicCourses";
import formationsRoutes from "./routes/formations";
import aiRoutes from "./routes/ai";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint for Render
  app.get("/api/health", (req, res) => {
    res.status(200).json({
      status: "healthy",
      timestamp: new Date().toISOString(),
      service: "CED HalalTech Ecosystem",
      version: "1.0.0",
    });
  });

  // Auth middleware
  setupAuth(app);

  // Seed Islamic courses on startup
  await seedIslamicCourses();

  // Private access verification route
  app.post("/api/verify-access", async (req, res) => {
    try {
      const { code } = req.body;

      if (!code) {
        return res.status(400).json({ message: "Code d'accès requis" });
      }

      // Check if code exists and is valid
      const isValid = await storage.verifyAccessCode(code);

      if (isValid) {
        // Update usage statistics
        await storage.updateAccessCodeUsage(code);
        res.json({ success: true, message: "Accès autorisé" });
      } else {
        res.status(401).json({ message: "Code d'accès invalide ou expiré" });
      }
    } catch (error) {
      console.error("Error verifying access:", error);
      res.status(500).json({ message: "Erreur lors de la vérification" });
    }
  });

  // Auth routes
  app.get("/api/auth/user", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user?.claims?.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Courses routes
  app.get("/api/courses", async (req, res) => {
    try {
      const { category, limit } = req.query;
      let courses;

      if (category && typeof category === "string") {
        courses = await storage.getCoursesByCategory(category);
      } else {
        courses = await storage.getCourses(
          limit ? parseInt(limit as string) : undefined
        );
      }

      res.json(courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ message: "Failed to fetch courses" });
    }
  });

  app.get("/api/courses/:id", async (req, res) => {
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
  app.get("/api/user/progress", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user?.claims?.sub;
      const progress = await storage.getUserProgress(userId);
      res.json(progress);
    } catch (error) {
      console.error("Error fetching user progress:", error);
      res.status(500).json({ message: "Failed to fetch user progress" });
    }
  });

  app.post("/api/user/progress", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user?.claims?.sub;
      const { courseId, progress } = req.body;

      const updatedProgress = await storage.updateUserProgress(
        userId,
        courseId,
        progress
      );

      // Track analytics event
      await storage.createAnalyticsEvent({
        userId,
        eventType: "progress_updated",
        eventData: { courseId, progress },
      });

      res.json(updatedProgress);
    } catch (error) {
      console.error("Error updating user progress:", error);
      res.status(500).json({ message: "Failed to update user progress" });
    }
  });

  app.post(
    "/api/user/complete-course",
    isAuthenticated,
    async (req: any, res) => {
      try {
        const userId = req.user?.claims?.sub;
        const { courseId } = req.body;

        await storage.completeUserCourse(userId, courseId);

        // Track analytics event
        await storage.createAnalyticsEvent({
          userId,
          eventType: "course_completed",
          eventData: { courseId },
        });

        res.json({ success: true });
      } catch (error) {
        console.error("Error completing course:", error);
        res.status(500).json({ message: "Failed to complete course" });
      }
    }
  );

  // Testimonials routes
  app.get("/api/testimonials", async (req, res) => {
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
        message: "Événements synchronisés avec Google Calendar",
      };

      console.log(
        `Calendar sync: ${events.length} events for timezone ${timezone}`
      );
      res.json(syncResult);
    } catch (error: any) {
      console.error("Error syncing calendar:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Chat IARP routes
  app.post("/api/chat", async (req, res) => {
    try {
      const {
        message,
        language = "fr",
        conversationId,
        isVoiceEnabled = false,
      } = req.body;
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
      let aiResponse: string;
      try {
        aiResponse = await chatWithIARP(
          message,
          language,
          conversation.messages as any[]
        );
      } catch (error: any) {
        // Fallback sur mode démo si erreur OpenAI
        console.log(
          "🎯 Fallback vers mode démo IARP suite à erreur:",
          error?.message
        );
        aiResponse = generateDemoResponseSafe(message, language);
      }

      // Update conversation with new messages
      const updatedMessages = [
        ...(conversation.messages as any[]),
        { role: "user", content: message, timestamp: new Date().toISOString() },
        {
          role: "assistant",
          content: aiResponse,
          timestamp: new Date().toISOString(),
        },
      ];

      const updatedConversation = await storage.updateChatConversation(
        conversation.id,
        updatedMessages
      );

      // Track analytics event
      if (userId) {
        await storage.createAnalyticsEvent({
          userId,
          eventType: "chat_interaction",
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

  app.get("/api/chat/:id", async (req, res) => {
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
  app.get("/api/products", async (req, res) => {
    try {
      const { category } = req.query;
      const products = await storage.getProducts(category as string);
      res.json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });

  app.get("/api/products/:id", async (req, res) => {
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
  app.get("/api/analytics/user", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user?.claims?.sub;
      const analytics = await storage.getUserAnalytics(userId);
      res.json(analytics);
    } catch (error) {
      console.error("Error fetching user analytics:", error);
      res.status(500).json({ message: "Failed to fetch user analytics" });
    }
  });

  app.get("/api/analytics/global", async (req, res) => {
    try {
      const metrics = await storage.getGlobalMetrics();
      res.json(metrics);
    } catch (error) {
      console.error("Error fetching global metrics:", error);
      res.status(500).json({ message: "Failed to fetch global metrics" });
    }
  });

  // Analytics event tracking
  app.post("/api/analytics/track", async (req, res) => {
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

  // Formations routes - Système CED Academy
  app.use("/api/formations", formationsRoutes);

  // IA routes - Super IARP Pro et générateurs halal
  app.use("/api/ai", aiRoutes);

  // Visitor tracking routes
  app.post("/api/track-visitor", async (req, res) => {
    try {
      const visitorData = req.body;

      // Add IP address and timestamp if not provided
      if (!visitorData.ipAddress) {
        visitorData.ipAddress = req.ip || req.connection.remoteAddress;
      }
      if (!visitorData.firstSeen) {
        visitorData.firstSeen = new Date();
      }
      if (!visitorData.lastSeen) {
        visitorData.lastSeen = new Date();
      }

      const visitor = await storage.trackVisitor(visitorData);
      res.json({ success: true, visitor });
    } catch (error) {
      console.error("Error tracking visitor:", error);
      res
        .status(500)
        .json({ message: "Erreur lors de l'enregistrement du visiteur" });
    }
  });

  app.put("/api/update-visitor/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const updates = req.body;

      await storage.updateVisitor(sessionId, updates);
      res.json({ success: true });
    } catch (error) {
      console.error("Error updating visitor:", error);
      res
        .status(500)
        .json({ message: "Erreur lors de la mise à jour du visiteur" });
    }
  });

  app.get("/api/visitors", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 100;
      const visitors = await storage.getVisitors(limit);
      res.json(visitors);
    } catch (error) {
      console.error("Error getting visitors:", error);
      res
        .status(500)
        .json({ message: "Erreur lors de la récupération des visiteurs" });
    }
  });

  app.get("/api/visitor-stats", async (req, res) => {
    try {
      const stats = await storage.getVisitorStats();
      res.json(stats);
    } catch (error) {
      console.error("Error getting visitor stats:", error);
      res
        .status(500)
        .json({ message: "Erreur lors de la récupération des statistiques" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
