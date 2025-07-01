import {
  pgTable,
  text,
  varchar,
  timestamp,
  jsonb,
  index,
  serial,
  integer,
  boolean,
  decimal,
  uuid,
  pgEnum,
  real,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Enums pour les formations
export const niveauEnum = pgEnum("niveau", ["Débutant", "Intermédiaire", "Avancé", "Expert"]);
export const typeLeconEnum = pgEnum("type_lecon", ["video", "texte", "quiz", "audio", "pdf"]);
export const roleEnum = pgEnum("role", ["étudiant", "formateur", "admin"]);
export const statutInscriptionEnum = pgEnum("statut_inscription", ["en_cours", "terminé", "abandonné", "suspendu"]);
export const deviseEnum = pgEnum("devise", ["CHF", "EUR", "USD", "AED"]);

// Session storage table for Replit Auth
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User storage table for Replit Auth
export const users = pgTable("users", {
  id: varchar("id").primaryKey().notNull(),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  preferredLanguage: varchar("preferred_language").default("fr"),
  xpPoints: integer("xp_points").default(0),
  level: integer("level").default(1),
  completedCourses: integer("completed_courses").default(0),
  certifications: integer("certifications").default(0),
  learningHours: integer("learning_hours").default(0),
  isVisuallyImpaired: boolean("is_visually_impaired").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Courses table
export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  category: varchar("category").notNull(), // 'programmation', 'dietetique', 'ia-domains', 'certifications'
  language: varchar("language").default("fr"),
  difficulty: varchar("difficulty").default("beginner"), // 'beginner', 'intermediate', 'advanced'
  duration: integer("duration"), // in minutes
  xpReward: integer("xp_reward").default(10),
  thumbnailUrl: text("thumbnail_url"),
  videoUrl: text("video_url"),
  content: text("content"),
  isPublished: boolean("is_published").default(false),
  // Prix par type d'utilisateur
  priceStudent: integer("price_student"), // Prix pour étudiants en euros
  priceBusiness: integer("price_business"), // Prix pour entreprises en euros
  priceIndividual: integer("price_individual"), // Prix pour particuliers en euros
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// User course progress
export const userCourseProgress = pgTable("user_course_progress", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").references(() => users.id).notNull(),
  courseId: integer("course_id").references(() => courses.id).notNull(),
  progress: integer("progress").default(0), // 0-100
  completed: boolean("completed").default(false),
  completedAt: timestamp("completed_at"),
  timeSpent: integer("time_spent").default(0), // in minutes
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Testimonials
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role"),
  content: text("content").notNull(),
  rating: integer("rating").default(5),
  imageUrl: text("image_url"),
  isPublished: boolean("is_published").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

// Chat IARP conversations
export const chatConversations = pgTable("chat_conversations", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: varchar("user_id").references(() => users.id),
  language: varchar("language").default("fr"),
  messages: jsonb("messages").notNull(), // Array of {role, content, timestamp}
  isVoiceEnabled: boolean("is_voice_enabled").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Boutique solidaire products
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  category: varchar("category").notNull(), // 'informatique', 'electromenager', 'marin', 'construction', 'professionnel', 'maison-jardin'
  price: decimal("price", { precision: 10, scale: 2 }),
  imageUrl: text("image_url"),
  isReconditioned: boolean("is_reconditioned").default(true),
  stock: integer("stock").default(0),
  isAvailable: boolean("is_available").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Analytics events
export const analyticsEvents = pgTable("analytics_events", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").references(() => users.id),
  eventType: varchar("event_type").notNull(), // 'course_started', 'course_completed', 'chat_interaction', etc.
  eventData: jsonb("event_data"),
  timestamp: timestamp("timestamp").defaultNow(),
});

// Create insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  id: true,
  email: true,
  firstName: true,
  lastName: true,
  profileImageUrl: true,
  preferredLanguage: true,
});

export const insertCourseSchema = createInsertSchema(courses).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
  createdAt: true,
});

export const insertChatConversationSchema = createInsertSchema(chatConversations).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertAnalyticsEventSchema = createInsertSchema(analyticsEvents).omit({
  id: true,
  timestamp: true,
});

// Types
export type UpsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Course = typeof courses.$inferSelect;
export type UserCourseProgress = typeof userCourseProgress.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
export type ChatConversation = typeof chatConversations.$inferSelect;
export type Product = typeof products.$inferSelect;
export type AnalyticsEvent = typeof analyticsEvents.$inferSelect;
export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type InsertChatConversation = z.infer<typeof insertChatConversationSchema>;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type InsertAnalyticsEvent = z.infer<typeof insertAnalyticsEventSchema>;

// ==========================================
// FORMATIONS SYSTEM - CED ACADEMY
// ==========================================

// Table des formations
export const formations = pgTable("formations", {
  id: serial("id").primaryKey(),
  titre: varchar("titre", { length: 255 }).notNull(),
  description: text("description").notNull(),
  instructeur: varchar("instructeur", { length: 255 }).notNull(),
  duree: varchar("duree", { length: 100 }),
  niveau: niveauEnum("niveau").default("Débutant"),
  prix: decimal("prix", { precision: 10, scale: 2 }).default("0"),
  devise: deviseEnum("devise").default("CHF"),
  categorie: varchar("categorie", { length: 100 }),
  langue: text("langue").array(), // Array de langues supportées
  tags: text("tags").array(),
  participants: integer("participants").default(0),
  note: real("note").default(0),
  avis: integer("avis").default(0),
  image: varchar("image", { length: 500 }),
  certifie: boolean("certifie").default(false),
  halal: boolean("halal").default(true),
  video: boolean("video").default(false),
  audio: boolean("audio").default(false),
  pdf: boolean("pdf").default(false),
  quiz: boolean("quiz").default(false),
  certification: boolean("certification").default(false),
  dateDebut: timestamp("date_debut"),
  dateFin: timestamp("date_fin"),
  places: integer("places").default(0),
  placesRestantes: integer("places_restantes").default(0),
  savantValidateur: varchar("savant_validateur", { length: 255 }),
  sourcesFiqh: text("sources_fiqh").array(),
  prerequis: text("prerequis").array(),
  objectifs: text("objectifs").array(),
  programme: text("programme").array(),
  dateCreation: timestamp("date_creation").defaultNow(),
  dateMiseAJour: timestamp("date_mise_a_jour").defaultNow(),
});

// Table des modules (chapitres d'une formation)
export const modules = pgTable("modules", {
  id: serial("id").primaryKey(),
  formationId: integer("formation_id").notNull().references(() => formations.id, { onDelete: "cascade" }),
  titre: varchar("titre", { length: 255 }).notNull(),
  description: text("description"),
  ordre: integer("ordre").default(1),
  dureeEstimee: integer("duree_estimee"), // en minutes
  prerequis: text("prerequis").array(),
  objectifs: text("objectifs").array(),
  dateCreation: timestamp("date_creation").defaultNow(),
  dateMiseAJour: timestamp("date_mise_a_jour").defaultNow(),
});

// Table des leçons (contenu pédagogique)
export const lecons = pgTable("lecons", {
  id: serial("id").primaryKey(),
  moduleId: integer("module_id").notNull().references(() => modules.id, { onDelete: "cascade" }),
  titre: varchar("titre", { length: 255 }).notNull(),
  type: typeLeconEnum("type").default("texte"),
  contenu: text("contenu"), // URL video, texte, JSON quiz, etc.
  contenuJson: jsonb("contenu_json"), // Contenu structuré (quiz, exercices)
  duree: integer("duree"), // durée en minutes
  ordre: integer("ordre").default(1),
  urlVideo: varchar("url_video", { length: 500 }),
  urlAudio: varchar("url_audio", { length: 500 }),
  urlPdf: varchar("url_pdf", { length: 500 }),
  transcription: text("transcription"),
  soustitres: text("soustitres").array(),
  languesDisponibles: text("langues_disponibles").array(),
  noteMinimale: integer("note_minimale").default(0), // pour valider la leçon
  tempsPause: text("temps_pause").array(), // timestamps pour pauses
  exercices: jsonb("exercices"), // Exercices interactifs
  ressources: jsonb("ressources"), // Ressources complémentaires
  dateCreation: timestamp("date_creation").defaultNow(),
  dateMiseAJour: timestamp("date_mise_a_jour").defaultNow(),
});

// Table utilisateurs formations (extension de users existant)
export const utilisateursFormations = pgTable("utilisateurs_formations", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  nom: varchar("nom", { length: 100 }),
  prenom: varchar("prenom", { length: 100 }),
  telephone: varchar("telephone", { length: 20 }),
  pays: varchar("pays", { length: 100 }),
  niveauArabe: varchar("niveau_arabe", { length: 50 }),
  motivation: text("motivation"),
  role: roleEnum("role").default("étudiant"),
  newsletter: boolean("newsletter").default(false),
  dateInscription: timestamp("date_inscription").defaultNow(),
  dernierAcces: timestamp("dernier_acces"),
});

// Table des inscriptions aux formations
export const inscriptions = pgTable("inscriptions", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  formationId: integer("formation_id").notNull().references(() => formations.id, { onDelete: "cascade" }),
  dateInscription: timestamp("date_inscription").defaultNow(),
  statut: statutInscriptionEnum("statut").default("en_cours"),
  progression: integer("progression").default(0), // pourcentage 0-100
  noteFinale: real("note_finale"),
  certificatEmis: boolean("certificat_emis").default(false),
  dateCertificat: timestamp("date_certificat"),
  urlCertificat: varchar("url_certificat", { length: 500 }),
  commentaireInstructeur: text("commentaire_instructeur"),
  evaluationFormation: integer("evaluation_formation"), // note 1-5
  commentaireEvaluation: text("commentaire_evaluation"),
  tempsPasse: integer("temps_passe").default(0), // en minutes
  dernierAcces: timestamp("dernier_acces"),
  dateCompletion: timestamp("date_completion"),
});

// Table de progression par leçon
export const progressionLecons = pgTable("progression_lecons", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  leconId: integer("lecon_id").notNull().references(() => lecons.id, { onDelete: "cascade" }),
  statut: varchar("statut", { length: 50 }).default("non_commence"), // non_commence, en_cours, termine, valide
  progression: integer("progression").default(0), // pourcentage 0-100
  tempsVisionne: integer("temps_visionne").default(0), // en secondes
  note: real("note"),
  tentatives: integer("tentatives").default(0),
  reponses: jsonb("reponses"), // Réponses aux quiz/exercices
  marqueSignets: text("marque_signets").array(), // timestamps favoris
  commentaires: text("commentaires"),
  dateDerniereVisite: timestamp("date_derniere_visite"),
  dateValidation: timestamp("date_validation"),
});

// Table des quiz et évaluations
export const quiz = pgTable("quiz", {
  id: serial("id").primaryKey(),
  leconId: integer("lecon_id").references(() => lecons.id, { onDelete: "cascade" }),
  formationId: integer("formation_id").references(() => formations.id, { onDelete: "cascade" }),
  titre: varchar("titre", { length: 255 }).notNull(),
  description: text("description"),
  questions: jsonb("questions").notNull(), // Questions structurées JSON
  dureeMax: integer("duree_max"), // en minutes
  noteMinimale: real("note_minimale").default(60), // pourcentage pour valider
  nombreTentatives: integer("nombre_tentatives").default(3),
  melanger: boolean("melanger").default(true), // mélanger questions
  afficherCorrection: boolean("afficher_correction").default(true),
  ponderation: real("ponderation").default(1), // coefficient dans note finale
  dateCreation: timestamp("date_creation").defaultNow(),
  dateMiseAJour: timestamp("date_mise_a_jour").defaultNow(),
});

// Table des résultats de quiz
export const resultatsQuiz = pgTable("resultats_quiz", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  quizId: integer("quiz_id").notNull().references(() => quiz.id, { onDelete: "cascade" }),
  reponses: jsonb("reponses").notNull(), // Réponses de l'utilisateur
  note: real("note").notNull(),
  pourcentage: real("pourcentage").notNull(),
  tempsEcoule: integer("temps_ecoule"), // en secondes
  valide: boolean("valide").default(false),
  tentative: integer("tentative").default(1),
  commentaires: text("commentaires"),
  correctionDetaillee: jsonb("correction_detaillee"),
  dateDebut: timestamp("date_debut").defaultNow(),
  dateFin: timestamp("date_fin"),
});

// Table des certificats
export const certificats = pgTable("certificats", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  formationId: integer("formation_id").notNull().references(() => formations.id, { onDelete: "cascade" }),
  numeroCertificat: varchar("numero_certificat", { length: 100 }).unique().notNull(),
  titre: varchar("titre", { length: 255 }).notNull(),
  noteFinale: real("note_finale").notNull(),
  mention: varchar("mention", { length: 100 }), // Excellence, Bien, Passable
  validePar: varchar("valide_par", { length: 255 }), // Savant validateur
  signatureNumerique: text("signature_numerique"),
  hashVerification: varchar("hash_verification", { length: 128 }),
  urlPublique: varchar("url_publique", { length: 500 }),
  metadata: jsonb("metadata"), // Informations complémentaires
  dateEmission: timestamp("date_emission").defaultNow(),
  dateExpiration: timestamp("date_expiration"),
  revoque: boolean("revoque").default(false),
  dateRevocation: timestamp("date_revocation"),
  raisonRevocation: text("raison_revocation"),
});

// Relations
export const formationsRelations = relations(formations, ({ many }) => ({
  modules: many(modules),
  inscriptions: many(inscriptions),
  quiz: many(quiz),
  certificats: many(certificats),
}));

export const modulesRelations = relations(modules, ({ one, many }) => ({
  formation: one(formations, {
    fields: [modules.formationId],
    references: [formations.id],
  }),
  lecons: many(lecons),
}));

export const leconsRelations = relations(lecons, ({ one, many }) => ({
  module: one(modules, {
    fields: [lecons.moduleId],
    references: [modules.id],
  }),
  progressions: many(progressionLecons),
  quiz: many(quiz),
}));

export const inscriptionsRelations = relations(inscriptions, ({ one }) => ({
  user: one(users, {
    fields: [inscriptions.userId],
    references: [users.id],
  }),
  formation: one(formations, {
    fields: [inscriptions.formationId],
    references: [formations.id],
  }),
}));

export const progressionLeconsRelations = relations(progressionLecons, ({ one }) => ({
  user: one(users, {
    fields: [progressionLecons.userId],
    references: [users.id],
  }),
  lecon: one(lecons, {
    fields: [progressionLecons.leconId],
    references: [lecons.id],
  }),
}));

export const quizRelations = relations(quiz, ({ one, many }) => ({
  lecon: one(lecons, {
    fields: [quiz.leconId],
    references: [lecons.id],
  }),
  formation: one(formations, {
    fields: [quiz.formationId],
    references: [formations.id],
  }),
  resultats: many(resultatsQuiz),
}));

export const resultatsQuizRelations = relations(resultatsQuiz, ({ one }) => ({
  user: one(users, {
    fields: [resultatsQuiz.userId],
    references: [users.id],
  }),
  quiz: one(quiz, {
    fields: [resultatsQuiz.quizId],
    references: [quiz.id],
  }),
}));

export const certificatsRelations = relations(certificats, ({ one }) => ({
  user: one(users, {
    fields: [certificats.userId],
    references: [users.id],
  }),
  formation: one(formations, {
    fields: [certificats.formationId],
    references: [formations.id],
  }),
}));

// Schemas Zod pour validation
export const insertFormationSchema = createInsertSchema(formations);
export const insertModuleSchema = createInsertSchema(modules);
export const insertLeconSchema = createInsertSchema(lecons);
export const insertInscriptionSchema = createInsertSchema(inscriptions);
export const insertProgressionLeconSchema = createInsertSchema(progressionLecons);
export const insertQuizSchema = createInsertSchema(quiz);
export const insertResultatQuizSchema = createInsertSchema(resultatsQuiz);
export const insertCertificatSchema = createInsertSchema(certificats);

// Types TypeScript
export type Formation = typeof formations.$inferSelect;
export type Module = typeof modules.$inferSelect;
export type Lecon = typeof lecons.$inferSelect;
export type Inscription = typeof inscriptions.$inferSelect;
export type ProgressionLecon = typeof progressionLecons.$inferSelect;
export type Quiz = typeof quiz.$inferSelect;
export type ResultatQuiz = typeof resultatsQuiz.$inferSelect;
export type Certificat = typeof certificats.$inferSelect;

export type InsertFormation = z.infer<typeof insertFormationSchema>;
export type InsertModule = z.infer<typeof insertModuleSchema>;
export type InsertLecon = z.infer<typeof insertLeconSchema>;
export type InsertInscription = z.infer<typeof insertInscriptionSchema>;
export type InsertProgressionLecon = z.infer<typeof insertProgressionLeconSchema>;
export type InsertQuiz = z.infer<typeof insertQuizSchema>;
export type InsertResultatQuiz = z.infer<typeof insertResultatQuizSchema>;
export type InsertCertificat = z.infer<typeof insertCertificatSchema>;
