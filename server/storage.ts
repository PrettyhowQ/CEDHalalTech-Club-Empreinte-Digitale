import {
  users,
  courses,
  testimonials,
  chatConversations,
  products,
  userCourseProgress,
  analyticsEvents,
  accessCodes,
  visitors,
  type User,
  type UpsertUser,
  type Course,
  type Testimonial,
  type ChatConversation,
  type Product,
  type UserCourseProgress,
  type AnalyticsEvent,
  type AccessCode,
  type Visitor,
  type InsertVisitor,
  type InsertCourse,
  type InsertTestimonial,
  type InsertChatConversation,
  type InsertProduct,
  type InsertAnalyticsEvent,
  type InsertAccessCode,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and, count, sql, gte } from "drizzle-orm";

export interface IStorage {
  // User operations (mandatory for Replit Auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Course operations
  getCourses(limit?: number): Promise<Course[]>;
  getCoursesByCategory(category: string): Promise<Course[]>;
  getCourse(id: number): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;
  
  // User progress operations
  getUserProgress(userId: string): Promise<UserCourseProgress[]>;
  updateUserProgress(userId: string, courseId: number, progress: number): Promise<UserCourseProgress>;
  completeUserCourse(userId: string, courseId: number): Promise<void>;
  
  // Testimonials operations
  getPublishedTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // Chat operations
  getChatConversation(id: string): Promise<ChatConversation | undefined>;
  createChatConversation(conversation: InsertChatConversation): Promise<ChatConversation>;
  updateChatConversation(id: string, messages: any[]): Promise<ChatConversation>;
  
  // Products operations
  getProducts(category?: string): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Analytics operations
  createAnalyticsEvent(event: InsertAnalyticsEvent): Promise<AnalyticsEvent>;
  getUserAnalytics(userId: string): Promise<any>;
  getGlobalMetrics(): Promise<any>;
  
  // Access codes operations
  verifyAccessCode(code: string): Promise<boolean>;
  updateAccessCodeUsage(code: string): Promise<void>;
  createAccessCode(accessCode: InsertAccessCode): Promise<AccessCode>;
  
  // Visitor tracking operations
  trackVisitor(visitor: InsertVisitor): Promise<Visitor>;
  updateVisitor(sessionId: string, updates: Partial<InsertVisitor>): Promise<void>;
  getVisitors(limit?: number): Promise<Visitor[]>;
  getVisitorStats(): Promise<{
    totalVisitors: number;
    todayVisitors: number;
    weeklyVisitors: number;
    topCountries: { country: string; count: number }[];
    topPages: { page: string; count: number }[];
    deviceStats: { device: string; count: number }[];
    accessLevelStats: { level: string; count: number }[];
  }>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Course operations
  async getCourses(limit = 50): Promise<Course[]> {
    return await db
      .select()
      .from(courses)
      .where(eq(courses.isPublished, true))
      .orderBy(desc(courses.createdAt))
      .limit(limit);
  }

  async getCoursesByCategory(category: string): Promise<Course[]> {
    return await db
      .select()
      .from(courses)
      .where(and(eq(courses.category, category), eq(courses.isPublished, true)))
      .orderBy(desc(courses.createdAt));
  }

  async getCourse(id: number): Promise<Course | undefined> {
    const [course] = await db.select().from(courses).where(eq(courses.id, id));
    return course;
  }

  async createCourse(courseData: InsertCourse): Promise<Course> {
    const [course] = await db.insert(courses).values(courseData).returning();
    return course;
  }

  // User progress operations
  async getUserProgress(userId: string): Promise<UserCourseProgress[]> {
    return await db
      .select()
      .from(userCourseProgress)
      .where(eq(userCourseProgress.userId, userId))
      .orderBy(desc(userCourseProgress.updatedAt));
  }

  async updateUserProgress(userId: string, courseId: number, progress: number): Promise<UserCourseProgress> {
    const [existingProgress] = await db
      .select()
      .from(userCourseProgress)
      .where(and(eq(userCourseProgress.userId, userId), eq(userCourseProgress.courseId, courseId)));

    if (existingProgress) {
      const [updated] = await db
        .update(userCourseProgress)
        .set({ progress, updatedAt: new Date() })
        .where(eq(userCourseProgress.id, existingProgress.id))
        .returning();
      return updated;
    } else {
      const [created] = await db
        .insert(userCourseProgress)
        .values({ userId, courseId, progress })
        .returning();
      return created;
    }
  }

  async completeUserCourse(userId: string, courseId: number): Promise<void> {
    await db
      .update(userCourseProgress)
      .set({ 
        completed: true, 
        completedAt: new Date(), 
        progress: 100,
        updatedAt: new Date() 
      })
      .where(and(eq(userCourseProgress.userId, userId), eq(userCourseProgress.courseId, courseId)));

    // Update user stats
    await db
      .update(users)
      .set({ 
        completedCourses: db.select({ count: count() }).from(userCourseProgress).where(and(eq(userCourseProgress.userId, userId), eq(userCourseProgress.completed, true))),
        updatedAt: new Date() 
      })
      .where(eq(users.id, userId));
  }

  // Testimonials operations
  async getPublishedTestimonials(): Promise<Testimonial[]> {
    return await db
      .select()
      .from(testimonials)
      .where(eq(testimonials.isPublished, true))
      .orderBy(desc(testimonials.createdAt));
  }

  async createTestimonial(testimonialData: InsertTestimonial): Promise<Testimonial> {
    const [testimonial] = await db.insert(testimonials).values(testimonialData).returning();
    return testimonial;
  }

  // Chat operations
  async getChatConversation(id: string): Promise<ChatConversation | undefined> {
    const [conversation] = await db.select().from(chatConversations).where(eq(chatConversations.id, id));
    return conversation;
  }

  async createChatConversation(conversationData: InsertChatConversation): Promise<ChatConversation> {
    const [conversation] = await db.insert(chatConversations).values(conversationData).returning();
    return conversation;
  }

  async updateChatConversation(id: string, messages: any[]): Promise<ChatConversation> {
    const [updated] = await db
      .update(chatConversations)
      .set({ messages, updatedAt: new Date() })
      .where(eq(chatConversations.id, id))
      .returning();
    return updated;
  }

  // Products operations
  async getProducts(category?: string): Promise<Product[]> {
    const query = db.select().from(products).where(eq(products.isAvailable, true));
    
    if (category) {
      return await query.where(and(eq(products.category, category), eq(products.isAvailable, true)));
    }
    
    return await query.orderBy(desc(products.createdAt));
  }

  async getProduct(id: number): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product;
  }

  async createProduct(productData: InsertProduct): Promise<Product> {
    const [product] = await db.insert(products).values(productData).returning();
    return product;
  }

  // Analytics operations
  async createAnalyticsEvent(eventData: InsertAnalyticsEvent): Promise<AnalyticsEvent> {
    const [event] = await db.insert(analyticsEvents).values(eventData).returning();
    return event;
  }

  async getUserAnalytics(userId: string): Promise<any> {
    const user = await this.getUser(userId);
    const progress = await this.getUserProgress(userId);
    
    return {
      user,
      totalCourses: progress.length,
      completedCourses: progress.filter(p => p.completed).length,
      totalXP: user?.xpPoints || 0,
      level: user?.level || 1,
      learningHours: user?.learningHours || 0,
      certifications: user?.certifications || 0,
    };
  }

  async getGlobalMetrics(): Promise<any> {
    const [totalUsers] = await db.select({ count: count() }).from(users);
    const [totalCourses] = await db.select({ count: count() }).from(courses).where(eq(courses.isPublished, true));
    const [totalTestimonials] = await db.select({ count: count() }).from(testimonials).where(eq(testimonials.isPublished, true));
    
    return {
      totalLearners: totalUsers.count,
      totalCourses: totalCourses.count,
      partnerCompanies: 240, // Static value as mentioned in docs
      ecoRating: 4.8, // Static value as mentioned in docs
      visuallyImpairedLearners: 2340, // Static value as mentioned in docs
      languages: 78, // Static value as mentioned in docs
    };
  }

  // Access codes operations
  async verifyAccessCode(code: string): Promise<boolean> {
    try {
      const [accessCode] = await db
        .select()
        .from(accessCodes)
        .where(
          and(
            eq(accessCodes.code, code),
            eq(accessCodes.isActive, true)
          )
        );

      if (!accessCode) {
        return false;
      }

      // Check if code has expired
      if (accessCode.expiresAt && new Date() > accessCode.expiresAt) {
        return false;
      }

      return true;
    } catch (error) {
      console.error("Error verifying access code:", error);
      return false;
    }
  }

  async updateAccessCodeUsage(code: string): Promise<void> {
    try {
      await db
        .update(accessCodes)
        .set({
          lastUsedAt: new Date(),
          usageCount: sql`${accessCodes.usageCount} + 1`,
        })
        .where(eq(accessCodes.code, code));
    } catch (error) {
      console.error("Error updating access code usage:", error);
    }
  }

  async createAccessCode(accessCodeData: InsertAccessCode): Promise<AccessCode> {
    const [accessCode] = await db
      .insert(accessCodes)
      .values(accessCodeData)
      .returning();
    return accessCode;
  }

  // Visitor tracking operations
  async trackVisitor(visitorData: InsertVisitor): Promise<Visitor> {
    try {
      const [visitor] = await db
        .insert(visitors)
        .values(visitorData)
        .returning();
      return visitor;
    } catch (error) {
      console.error("Error tracking visitor:", error);
      throw error;
    }
  }

  async updateVisitor(sessionId: string, updates: Partial<InsertVisitor>): Promise<void> {
    try {
      await db
        .update(visitors)
        .set({
          ...updates,
          lastSeen: new Date()
        })
        .where(eq(visitors.sessionId, sessionId));
    } catch (error) {
      console.error("Error updating visitor:", error);
      throw error;
    }
  }

  async getVisitors(limit = 100): Promise<Visitor[]> {
    try {
      return await db
        .select()
        .from(visitors)
        .orderBy(desc(visitors.firstSeen))
        .limit(limit);
    } catch (error) {
      console.error("Error getting visitors:", error);
      return [];
    }
  }

  async getVisitorStats(): Promise<{
    totalVisitors: number;
    todayVisitors: number;
    weeklyVisitors: number;
    topCountries: { country: string; count: number }[];
    topPages: { page: string; count: number }[];
    deviceStats: { device: string; count: number }[];
    accessLevelStats: { level: string; count: number }[];
  }> {
    try {
      const now = new Date();
      const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const weekStart = new Date(todayStart.getTime() - 7 * 24 * 60 * 60 * 1000);

      // Total visitors
      const [totalVisitorsResult] = await db.select({ count: count() }).from(visitors);
      const totalVisitors = totalVisitorsResult?.count || 0;

      // Today's visitors
      const [todayVisitorsResult] = await db
        .select({ count: count() })
        .from(visitors)
        .where(gte(visitors.firstSeen, todayStart));
      const todayVisitors = todayVisitorsResult?.count || 0;

      // Weekly visitors
      const [weeklyVisitorsResult] = await db
        .select({ count: count() })
        .from(visitors)
        .where(gte(visitors.firstSeen, weekStart));
      const weeklyVisitors = weeklyVisitorsResult?.count || 0;

      // Top countries
      const topCountriesRaw = await db
        .select({
          country: visitors.country,
          count: count()
        })
        .from(visitors)
        .where(sql`${visitors.country} IS NOT NULL`)
        .groupBy(visitors.country)
        .orderBy(desc(count()))
        .limit(10);
      
      const topCountries = topCountriesRaw.map(item => ({
        country: item.country || 'Unknown',
        count: item.count || 0
      }));

      // Top pages
      const topPagesRaw = await db
        .select({
          page: visitors.currentPage,
          count: count()
        })
        .from(visitors)
        .where(sql`${visitors.currentPage} IS NOT NULL`)
        .groupBy(visitors.currentPage)
        .orderBy(desc(count()))
        .limit(10);
      
      const topPages = topPagesRaw.map(item => ({
        page: item.page || '/',
        count: item.count || 0
      }));

      // Device stats
      const deviceStatsRaw = await db
        .select({
          device: visitors.deviceType,
          count: count()
        })
        .from(visitors)
        .where(sql`${visitors.deviceType} IS NOT NULL`)
        .groupBy(visitors.deviceType)
        .orderBy(desc(count()));
      
      const deviceStats = deviceStatsRaw.map(item => ({
        device: item.device || 'Unknown',
        count: item.count || 0
      }));

      // Access level stats
      const accessLevelStatsRaw = await db
        .select({
          level: visitors.accessLevel,
          count: count()
        })
        .from(visitors)
        .where(sql`${visitors.accessLevel} IS NOT NULL`)
        .groupBy(visitors.accessLevel)
        .orderBy(desc(count()));
      
      const accessLevelStats = accessLevelStatsRaw.map(item => ({
        level: item.level || 'guest',
        count: item.count || 0
      }));

      return {
        totalVisitors,
        todayVisitors,
        weeklyVisitors,
        topCountries,
        topPages,
        deviceStats,
        accessLevelStats,
      };
    } catch (error) {
      console.error("Error getting visitor stats:", error);
      return {
        totalVisitors: 0,
        todayVisitors: 0,
        weeklyVisitors: 0,
        topCountries: [],
        topPages: [],
        deviceStats: [],
        accessLevelStats: [],
      };
    }
  }
}

export const storage = new DatabaseStorage();
