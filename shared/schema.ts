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

// ==========================================
// SYSTÈME COMPTABILITÉ ISLAMIQUE 
// ==========================================

// Enums pour comptabilité islamique
export const typeCompteEnum = pgEnum("type_compte", ["actif", "passif", "capitaux_propres", "produits", "charges"]);
export const categorieIslamisueEnum = pgEnum("categorie_islamique", ["halal_income", "zakat_fund", "qard_hassan", "murabaha", "ijara", "musharaka", "mudaraba", "takaful", "immobilier", "istisna", "bay_salam"]);
export const statutConformiteEnum = pgEnum("statut_conformite", ["halal", "haram", "makruh", "mandub", "mubah"]);
export const typeContratEnum = pgEnum("type_contrat", ["murabaha", "ijara", "musharaka", "mudaraba", "qard_hassan", "bay_salam", "istisna", "takaful", "immobilier_murabaha", "immobilier_ijara"]);
export const niveauGhararEnum = pgEnum("niveau_gharar", ["bas", "moyen", "eleve", "interdit"]);
export const typeZakatEnum = pgEnum("type_zakat", ["mal", "fitr", "ushr", "rikaz", "tijara"]);
export const typeProprietEnum = pgEnum("type_propriete", ["terrain", "appartement", "villa", "bureau", "commercial", "industriel", "agricole"]);
export const statutProprietEnum = pgEnum("statut_propriete", ["a_vendre", "vendu", "a_louer", "loue", "en_construction", "en_renovation"]);

// Entreprises / Clients
export const entreprises = pgTable("entreprises", {
  id: serial("id").primaryKey(),
  nom: varchar("nom", { length: 255 }).notNull(),
  nomArabe: varchar("nom_arabe", { length: 255 }),
  typeActivite: varchar("type_activite", { length: 100 }).notNull(), // 'alimentation_halal', 'finance_islamique', 'education', etc.
  numeroRegistre: varchar("numero_registre", { length: 100 }),
  numeroTva: varchar("numero_tva", { length: 100 }),
  adresse: text("adresse"),
  ville: varchar("ville", { length: 100 }),
  pays: varchar("pays", { length: 100 }),
  telephone: varchar("telephone", { length: 50 }),
  email: varchar("email", { length: 255 }),
  conformiteIslamique: boolean("conformite_islamique").notNull().default(true),
  zakatApplicable: boolean("zakat_applicable").notNull().default(true),
  devise: deviseEnum("devise").default("CHF"),
  debutAnneFiscale: timestamp("debut_annee_fiscale").notNull(),
  statutShahadah: varchar("statut_shahadah", { length: 50 }).notNull().default('confirme'), // 'confirme', 'en_attente', 'non_musulman'
  certificationMetier: varchar("certification_metier", { length: 100 }), // 'certifie_halal', 'conforme_sharia', etc.
  notes: text("notes"),
  dateCreation: timestamp("date_creation").notNull().defaultNow(),
  dateMiseAJour: timestamp("date_mise_a_jour").notNull().defaultNow(),
});

// Plan comptable islamique
export const planComptable = pgTable("plan_comptable", {
  id: serial("id").primaryKey(),
  codeCompte: varchar("code_compte", { length: 20 }).notNull().unique(),
  nomCompte: varchar("nom_compte", { length: 255 }).notNull(),
  nomArabe: varchar("nom_arabe", { length: 255 }),
  typeCompte: typeCompteEnum("type_compte").notNull(),
  categorieIslamique: categorieIslamisueEnum("categorie_islamique").notNull(),
  compteParentId: integer("compte_parent_id"),
  niveau: integer("niveau").notNull().default(1),
  actif: boolean("actif").notNull().default(true),
  zakatApplicable: boolean("zakat_applicable").notNull().default(false),
  tauxZakat: decimal("taux_zakat", { precision: 5, scale: 4 }).default('0.0250'), // 2.5% par défaut
  statutIslamique: statutConformiteEnum("statut_islamique").notNull().default('halal'),
  justificationFiqh: text("justification_fiqh"), // Justification selon le Fiqh
  description: text("description"),
  dateCreation: timestamp("date_creation").notNull().defaultNow(),
  dateMiseAJour: timestamp("date_mise_a_jour").notNull().defaultNow(),
});

// Transactions comptables islamiques
export const transactionsComptables = pgTable("transactions_comptables", {
  id: serial("id").primaryKey(),
  numeroTransaction: varchar("numero_transaction", { length: 50 }).notNull().unique(),
  entrepriseId: integer("entreprise_id").notNull(),
  dateTransaction: timestamp("date_transaction").notNull(),
  description: text("description").notNull(),
  descriptionArabe: text("description_arabe"),
  reference: varchar("reference", { length: 100 }),
  montantTotal: decimal("montant_total", { precision: 15, scale: 2 }).notNull(),
  devise: deviseEnum("devise").default("CHF"),
  typeTransaction: varchar("type_transaction", { length: 50 }).notNull(), // 'vente', 'achat', 'paiement', 'recette', 'ecriture'
  typeContratIslamique: typeContratEnum("type_contrat_islamique"),
  conformiteIslamique: boolean("conformite_islamique").notNull().default(true),
  statutRiba: varchar("statut_riba", { length: 20 }).notNull().default('sans_riba'), // 'sans_riba', 'contient_riba', 'douteux'
  niveauGharar: niveauGhararEnum("niveau_gharar").default('bas'),
  impactZakat: boolean("impact_zakat").notNull().default(false),
  montantSadaqah: decimal("montant_sadaqah", { precision: 15, scale: 2 }).default('0.00'),
  conformitePriere: boolean("conformite_priere").notNull().default(true), // Transaction faite en dehors des heures de prière
  bismillahRecite: boolean("bismillah_recite").notNull().default(true),
  temoinRequis: boolean("temoin_requis").notNull().default(false),
  nomsTemoin: text("noms_temoin"),
  approuvePar: varchar("approuve_par", { length: 255 }),
  savantIslamique: varchar("savant_islamique", { length: 255 }), // Savant ayant validé si nécessaire
  notes: text("notes"),
  dateCreation: timestamp("date_creation").notNull().defaultNow(),
  dateMiseAJour: timestamp("date_mise_a_jour").notNull().defaultNow(),
});

// Écritures comptables (double entrée islamique)
export const ecrituresComptables = pgTable("ecritures_comptables", {
  id: serial("id").primaryKey(),
  transactionId: integer("transaction_id").notNull(),
  compteId: integer("compte_id").notNull(),
  montantDebit: decimal("montant_debit", { precision: 15, scale: 2 }).default('0.00'),
  montantCredit: decimal("montant_credit", { precision: 15, scale: 2 }).default('0.00'),
  description: text("description"),
  justificationIslamique: text("justification_islamique"), // Justification selon les principes islamiques
  zakatable: boolean("zakatable").notNull().default(false),
  dateCreation: timestamp("date_creation").notNull().defaultNow(),
});

// Calculs de Zakat
export const calculZakat = pgTable("calcul_zakat", {
  id: serial("id").primaryKey(),
  entrepriseId: integer("entreprise_id").notNull(),
  dateCalcul: timestamp("date_calcul").notNull(),
  dateHijri: varchar("date_hijri", { length: 50 }), // Date du calendrier Hijri
  typeZakat: typeZakatEnum("type_zakat").notNull(),
  biensSoumisZakat: decimal("biens_soumis_zakat", { precision: 15, scale: 2 }).notNull(),
  montantNisab: decimal("montant_nisab", { precision: 15, scale: 2 }).notNull(),
  tauxZakat: decimal("taux_zakat", { precision: 5, scale: 4 }).notNull().default('0.0250'),
  zakatDue: decimal("zakat_due", { precision: 15, scale: 2 }).notNull(),
  zakatVersee: decimal("zakat_versee", { precision: 15, scale: 2 }).default('0.00'),
  soldeZakat: decimal("solde_zakat", { precision: 15, scale: 2 }).notNull(),
  statutPaiement: varchar("statut_paiement", { length: 20 }).notNull().default('en_attente'), // 'en_attente', 'paye', 'partiel'
  organisationBeneficiaire: varchar("organisation_beneficiaire", { length: 255 }),
  justificationIslamique: text("justification_islamique"),
  approbationSavant: varchar("approbation_savant", { length: 255 }),
  notes: text("notes"),
  dateCreation: timestamp("date_creation").notNull().defaultNow(),
  dateMiseAJour: timestamp("date_mise_a_jour").notNull().defaultNow(),
});

// Contrats islamiques
export const contratsIslamiques = pgTable("contrats_islamiques", {
  id: serial("id").primaryKey(),
  numeroContrat: varchar("numero_contrat", { length: 50 }).notNull().unique(),
  entrepriseId: integer("entreprise_id").notNull(),
  nomContrePartie: varchar("nom_contre_partie", { length: 255 }).notNull(),
  typeContrat: typeContratEnum("type_contrat").notNull(),
  montantContrat: decimal("montant_contrat", { precision: 15, scale: 2 }).notNull(),
  devise: deviseEnum("devise").default("CHF"),
  dateDebut: timestamp("date_debut").notNull(),
  dateFin: timestamp("date_fin"),
  ratioPartageProfit: varchar("ratio_partage_profit", { length: 50 }), // Pour Musharaka/Mudaraba
  montantLoyer: decimal("montant_loyer", { precision: 15, scale: 2 }), // Pour Ijara
  tauxMarge: decimal("taux_marge", { precision: 5, scale: 4 }), // Pour Murabaha
  conformiteIslamique: boolean("conformite_islamique").notNull().default(true),
  comiteSharia: varchar("comite_sharia", { length: 255 }),
  referenceFatwa: varchar("reference_fatwa", { length: 255 }),
  nomsTemoin: text("noms_temoin"),
  statutContrat: varchar("statut_contrat", { length: 20 }).notNull().default('actif'), // 'actif', 'termine', 'annule'
  notes: text("notes"),
  dateCreation: timestamp("date_creation").notNull().defaultNow(),
  dateMiseAJour: timestamp("date_mise_a_jour").notNull().defaultNow(),
});

// Audit et conformité Sharia
export const auditSharia = pgTable("audit_sharia", {
  id: serial("id").primaryKey(),
  entrepriseId: integer("entreprise_id").notNull(),
  dateAudit: timestamp("date_audit").notNull(),
  periodeAuditDu: timestamp("periode_audit_du").notNull(),
  periodeAuditAu: timestamp("periode_audit_au").notNull(),
  nomAuditeur: varchar("nom_auditeur", { length: 255 }).notNull(),
  qualificationAuditeur: varchar("qualification_auditeur", { length: 255 }),
  scoreConformite: integer("score_conformite"), // Score sur 100
  transactionsNonConformes: integer("transactions_non_conformes").default(0),
  incidentsRiba: integer("incidents_riba").default(0),
  incidentsGharar: integer("incidents_gharar").default(0),
  recommandations: text("recommandations"),
  actionsCorrectives: text("actions_correctives"),
  statutAudit: varchar("statut_audit", { length: 20 }).notNull().default('termine'), // 'en_cours', 'termine', 'suivi_requis'
  certificationEmise: boolean("certification_emise").notNull().default(false),
  prochaineAudit: timestamp("prochaine_audit"),
  notes: text("notes"),
  dateCreation: timestamp("date_creation").notNull().defaultNow(),
  dateMiseAJour: timestamp("date_mise_a_jour").notNull().defaultNow(),
});

// Relations pour comptabilité islamique
export const entreprisesRelations = relations(entreprises, ({ many }) => ({
  transactions: many(transactionsComptables),
  calculZakat: many(calculZakat),
  contrats: many(contratsIslamiques),
  audits: many(auditSharia),
}));

export const transactionsComptablesRelations = relations(transactionsComptables, ({ one, many }) => ({
  entreprise: one(entreprises, {
    fields: [transactionsComptables.entrepriseId],
    references: [entreprises.id],
  }),
  ecritures: many(ecrituresComptables),
}));

export const ecrituresComptablesRelations = relations(ecrituresComptables, ({ one }) => ({
  transaction: one(transactionsComptables, {
    fields: [ecrituresComptables.transactionId],
    references: [transactionsComptables.id],
  }),
  compte: one(planComptable, {
    fields: [ecrituresComptables.compteId],
    references: [planComptable.id],
  }),
}));

export const planComptableRelations = relations(planComptable, ({ one, many }) => ({
  compteParent: one(planComptable, {
    fields: [planComptable.compteParentId],
    references: [planComptable.id],
  }),
  sousComptes: many(planComptable),
  ecritures: many(ecrituresComptables),
}));

export const calculZakatRelations = relations(calculZakat, ({ one }) => ({
  entreprise: one(entreprises, {
    fields: [calculZakat.entrepriseId],
    references: [entreprises.id],
  }),
}));

export const contratsIslamiquesRelations = relations(contratsIslamiques, ({ one }) => ({
  entreprise: one(entreprises, {
    fields: [contratsIslamiques.entrepriseId],
    references: [entreprises.id],
  }),
}));

export const auditShariaRelations = relations(auditSharia, ({ one }) => ({
  entreprise: one(entreprises, {
    fields: [auditSharia.entrepriseId],
    references: [entreprises.id],
  }),
}));

// Schémas d'insertion pour comptabilité islamique
export const insertEntrepriseSchema = createInsertSchema(entreprises).omit({ id: true });
export const insertPlanComptableSchema = createInsertSchema(planComptable).omit({ id: true });
export const insertTransactionComptableSchema = createInsertSchema(transactionsComptables).omit({ id: true });
export const insertEcritureComptableSchema = createInsertSchema(ecrituresComptables).omit({ id: true });
export const insertCalculZakatSchema = createInsertSchema(calculZakat).omit({ id: true });
export const insertContratIslamisueSchema = createInsertSchema(contratsIslamiques).omit({ id: true });
export const insertAuditShariaSchema = createInsertSchema(auditSharia).omit({ id: true });

// Types d'insertion comptabilité islamique
export type InsertEntreprise = z.infer<typeof insertEntrepriseSchema>;
export type InsertPlanComptable = z.infer<typeof insertPlanComptableSchema>;
export type InsertTransactionComptable = z.infer<typeof insertTransactionComptableSchema>;
export type InsertEcritureComptable = z.infer<typeof insertEcritureComptableSchema>;
export type InsertCalculZakat = z.infer<typeof insertCalculZakatSchema>;
export type InsertContratIslamique = z.infer<typeof insertContratIslamisueSchema>;
export type InsertAuditSharia = z.infer<typeof insertAuditShariaSchema>;

// Types de sélection comptabilité islamique
export type Entreprise = typeof entreprises.$inferSelect;
export type PlanComptable = typeof planComptable.$inferSelect;
export type TransactionComptable = typeof transactionsComptables.$inferSelect;
export type EcritureComptable = typeof ecrituresComptables.$inferSelect;
export type CalculZakat = typeof calculZakat.$inferSelect;
export type ContratIslamique = typeof contratsIslamiques.$inferSelect;
export type AuditSharia = typeof auditSharia.$inferSelect;

// ==========================================
// SYSTÈME IMMOBILIER ISLAMIQUE 
// ==========================================

// Propriétés immobilières
export const proprietesImmobilieres = pgTable("proprietes_immobilieres", {
  id: serial("id").primaryKey(),
  reference: varchar("reference", { length: 50 }).notNull().unique(),
  entrepriseId: integer("entreprise_id").notNull(),
  typePropriete: typeProprietEnum("type_propriete").notNull(),
  adresseComplete: text("adresse_complete").notNull(),
  ville: varchar("ville", { length: 100 }).notNull(),
  codePostal: varchar("code_postal", { length: 20 }),
  pays: varchar("pays", { length: 100 }).notNull().default('Suisse'),
  superficie: decimal("superficie", { precision: 10, scale: 2 }), // m²
  nombrePieces: integer("nombre_pieces"),
  nombreChambres: integer("nombre_chambres"),
  nombreSallesBains: integer("nombre_salles_bains"),
  anneeConstruction: integer("annee_construction"),
  prixAchat: decimal("prix_achat", { precision: 15, scale: 2 }).notNull(),
  prixVente: decimal("prix_vente", { precision: 15, scale: 2 }),
  loyerMensuel: decimal("loyer_mensuel", { precision: 15, scale: 2 }),
  chargesMensuelles: decimal("charges_mensuelles", { precision: 15, scale: 2 }).default('0.00'),
  devise: deviseEnum("devise").default("CHF"),
  statutPropriete: statutProprietEnum("statut_propriete").default('a_vendre'),
  conformiteIslamique: boolean("conformite_islamique").notNull().default(true),
  certificationHalal: boolean("certification_halal").notNull().default(false),
  zonePriere: boolean("zone_priere").notNull().default(false), // Espace prière dans le bien
  orientationQibla: boolean("orientation_qibla").notNull().default(false),
  proximiteMosquee: boolean("proximite_mosquee").notNull().default(false),
  proximiteEcoleIslamique: boolean("proximite_ecole_islamique").notNull().default(false),
  typeContratPrevu: typeContratEnum("type_contrat_prevu"), // Murabaha, Ijara, etc.
  pourcentageFinancement: decimal("pourcentage_financement", { precision: 5, scale: 2 }).default('0.00'),
  dureeFinancement: integer("duree_financement"), // en mois
  tauxMarge: decimal("taux_marge", { precision: 5, scale: 4 }).default('0.0000'),
  zakatApplicable: boolean("zakat_applicable").notNull().default(true),
  dateAcquisition: timestamp("date_acquisition"),
  dateVente: timestamp("date_vente"),
  vendeur: varchar("vendeur", { length: 255 }),
  acheteur: varchar("acheteur", { length: 255 }),
  notaire: varchar("notaire", { length: 255 }),
  numeroTitreFoncier: varchar("numero_titre_foncier", { length: 100 }),
  valeurCadastre: decimal("valeur_cadastre", { precision: 15, scale: 2 }),
  taxesFoncieres: decimal("taxes_foncieres", { precision: 15, scale: 2 }).default('0.00'),
  assuranceBien: decimal("assurance_bien", { precision: 15, scale: 2 }).default('0.00'),
  fraisNotaire: decimal("frais_notaire", { precision: 15, scale: 2 }).default('0.00'),
  commissionsAgence: decimal("commissions_agence", { precision: 15, scale: 2 }).default('0.00'),
  description: text("description"),
  descriptifIslamique: text("descriptif_islamique"), // Aspects conformes à l'Islam
  photos: text("photos").array(),
  documentsLegaux: text("documents_legaux").array(),
  contratsAssocies: text("contrats_associes").array(),
  notes: text("notes"),
  dateCreation: timestamp("date_creation").notNull().defaultNow(),
  dateMiseAJour: timestamp("date_mise_a_jour").notNull().defaultNow(),
});

// Transactions immobilières
export const transactionsImmobilieres = pgTable("transactions_immobilieres", {
  id: serial("id").primaryKey(),
  numeroTransaction: varchar("numero_transaction", { length: 50 }).notNull().unique(),
  proprieteId: integer("propriete_id").notNull(),
  entrepriseId: integer("entreprise_id").notNull(),
  typeTransaction: varchar("type_transaction", { length: 50 }).notNull(), // 'achat', 'vente', 'location', 'renovation'
  typeContratIslamique: typeContratEnum("type_contrat_islamique").notNull(),
  contrepartie: varchar("contrepartie", { length: 255 }).notNull(), // Nom acheteur/vendeur/locataire
  montantTransaction: decimal("montant_transaction", { precision: 15, scale: 2 }).notNull(),
  acompteVerse: decimal("acompte_verse", { precision: 15, scale: 2 }).default('0.00'),
  soldeRestant: decimal("solde_restant", { precision: 15, scale: 2 }).default('0.00'),
  devise: deviseEnum("devise").default("CHF"),
  dureeContrat: integer("duree_contrat"), // en mois pour Ijara
  tauxMarge: decimal("taux_marge", { precision: 5, scale: 4 }).default('0.0000'), // Pour Murabaha
  loyerMensuel: decimal("loyer_mensuel", { precision: 15, scale: 2 }), // Pour Ijara
  caution: decimal("caution", { precision: 15, scale: 2 }).default('0.00'),
  dateTransaction: timestamp("date_transaction").notNull(),
  dateSignature: timestamp("date_signature"),
  dateDebutContrat: timestamp("date_debut_contrat"),
  dateFinContrat: timestamp("date_fin_contrat"),
  conformiteIslamique: boolean("conformite_islamique").notNull().default(true),
  validationSharia: boolean("validation_sharia").notNull().default(false),
  savantValidateur: varchar("savant_validateur", { length: 255 }),
  referenceFatwa: varchar("reference_fatwa", { length: 255 }),
  temoinsTransaction: text("temoins_transaction").array(),
  conditionsSpeciales: text("conditions_speciales"),
  clausesIslamiques: text("clauses_islamiques"),
  garanties: text("garanties").array(),
  penalitesRetard: decimal("penalites_retard", { precision: 5, scale: 4 }).default('0.0000'),
  fraisGestion: decimal("frais_gestion", { precision: 15, scale: 2 }).default('0.00'),
  commissionsVente: decimal("commissions_vente", { precision: 15, scale: 2 }).default('0.00'),
  taxesTransaction: decimal("taxes_transaction", { precision: 15, scale: 2 }).default('0.00'),
  statutTransaction: varchar("statut_transaction", { length: 50 }).notNull().default('en_cours'), // 'en_cours', 'signe', 'execute', 'annule'
  documentsLegaux: text("documents_legaux").array(),
  justificationIslamique: text("justification_islamique"),
  notes: text("notes"),
  dateCreation: timestamp("date_creation").notNull().defaultNow(),
  dateMiseAJour: timestamp("date_mise_a_jour").notNull().defaultNow(),
});

// Évaluations immobilières
export const evaluationsImmobilieres = pgTable("evaluations_immobilieres", {
  id: serial("id").primaryKey(),
  proprieteId: integer("propriete_id").notNull(),
  dateEvaluation: timestamp("date_evaluation").notNull(),
  typeEvaluation: varchar("type_evaluation", { length: 50 }).notNull(), // 'expertise', 'estimation', 'controle'
  evaluateur: varchar("evaluateur", { length: 255 }).notNull(),
  qualificationEvaluateur: varchar("qualification_evaluateur", { length: 255 }),
  valeurEstimee: decimal("valeur_estimee", { precision: 15, scale: 2 }).notNull(),
  valeurMinimale: decimal("valeur_minimale", { precision: 15, scale: 2 }),
  valeurMaximale: decimal("valeur_maximale", { precision: 15, scale: 2 }),
  devise: deviseEnum("devise").default("CHF"),
  methodologie: varchar("methodologie", { length: 100 }), // 'comparaison', 'cout_remplacement', 'revenus'
  facteursPrix: text("facteurs_prix").array(),
  pointsForts: text("points_forts").array(),
  pointsFaibles: text("points_faibles").array(),
  conformiteIslamique: boolean("conformite_islamique").notNull().default(true),
  criteresIslamiques: text("criteres_islamiques").array(),
  recommandations: text("recommandations"),
  rapportComplet: text("rapport_complet"),
  photos: text("photos").array(),
  validiteEvaluation: integer("validite_evaluation").default(6), // en mois
  dateExpiration: timestamp("date_expiration"),
  certifiee: boolean("certifiee").notNull().default(false),
  numeroRapport: varchar("numero_rapport", { length: 100 }),
  notes: text("notes"),
  dateCreation: timestamp("date_creation").notNull().defaultNow(),
});

// Planning entretien et rénovations
export const maintenanceImmobiliere = pgTable("maintenance_immobiliere", {
  id: serial("id").primaryKey(),
  proprieteId: integer("propriete_id").notNull(),
  typeMaintenance: varchar("type_maintenance", { length: 50 }).notNull(), // 'entretien', 'reparation', 'renovation', 'amelioration'
  description: text("description").notNull(),
  priorite: varchar("priorite", { length: 20 }).notNull().default('moyenne'), // 'faible', 'moyenne', 'haute', 'urgente'
  coutEstime: decimal("cout_estime", { precision: 15, scale: 2 }).notNull(),
  coutReel: decimal("cout_reel", { precision: 15, scale: 2 }),
  devise: deviseEnum("devise").default("CHF"),
  datePrevue: timestamp("date_prevue"),
  dateRealisation: timestamp("date_realisation"),
  entrepriseIntervenante: varchar("entreprise_intervenante", { length: 255 }),
  contactIntervenant: varchar("contact_intervenant", { length: 255 }),
  conformiteIslamique: boolean("conformite_islamique").notNull().default(true),
  certificationHalal: boolean("certification_halal").notNull().default(false),
  materiaux: text("materiaux").array(),
  materiauxHalal: boolean("materiaux_halal").notNull().default(true),
  mainOeuvreMusulmane: boolean("main_oeuvre_musulmane").notNull().default(false),
  respectHeuresPriere: boolean("respect_heures_priere").notNull().default(true),
  statutMaintenance: varchar("statut_maintenance", { length: 50 }).notNull().default('planifie'), // 'planifie', 'en_cours', 'termine', 'annule'
  facturesAssociees: text("factures_associees").array(),
  garantieTravaux: integer("garantie_travaux"), // en mois
  photosAvant: text("photos_avant").array(),
  photosApres: text("photos_apres").array(),
  notes: text("notes"),
  dateCreation: timestamp("date_creation").notNull().defaultNow(),
  dateMiseAJour: timestamp("date_mise_a_jour").notNull().defaultNow(),
});

// Relations immobilier
export const proprietesImmobilieresRelations = relations(proprietesImmobilieres, ({ one, many }) => ({
  entreprise: one(entreprises, {
    fields: [proprietesImmobilieres.entrepriseId],
    references: [entreprises.id],
  }),
  transactions: many(transactionsImmobilieres),
  evaluations: many(evaluationsImmobilieres),
  maintenances: many(maintenanceImmobiliere),
}));

export const transactionsImmobilieresRelations = relations(transactionsImmobilieres, ({ one }) => ({
  propriete: one(proprietesImmobilieres, {
    fields: [transactionsImmobilieres.proprieteId],
    references: [proprietesImmobilieres.id],
  }),
  entreprise: one(entreprises, {
    fields: [transactionsImmobilieres.entrepriseId],
    references: [entreprises.id],
  }),
}));

export const evaluationsImmobilieresRelations = relations(evaluationsImmobilieres, ({ one }) => ({
  propriete: one(proprietesImmobilieres, {
    fields: [evaluationsImmobilieres.proprieteId],
    references: [proprietesImmobilieres.id],
  }),
}));

export const maintenanceImmobilieresRelations = relations(maintenanceImmobiliere, ({ one }) => ({
  propriete: one(proprietesImmobilieres, {
    fields: [maintenanceImmobiliere.proprieteId],
    references: [proprietesImmobilieres.id],
  }),
}));

// Schémas d'insertion immobilier
export const insertProprieteImmobiliereSchema = createInsertSchema(proprietesImmobilieres).omit({ id: true });
export const insertTransactionImmobiliereSchema = createInsertSchema(transactionsImmobilieres).omit({ id: true });
export const insertEvaluationImmobiliereSchema = createInsertSchema(evaluationsImmobilieres).omit({ id: true });
export const insertMaintenanceImmobiliereSchema = createInsertSchema(maintenanceImmobiliere).omit({ id: true });

// Types d'insertion immobilier
export type InsertProprieteImmobiliere = z.infer<typeof insertProprieteImmobiliereSchema>;
export type InsertTransactionImmobiliere = z.infer<typeof insertTransactionImmobiliereSchema>;
export type InsertEvaluationImmobiliere = z.infer<typeof insertEvaluationImmobiliereSchema>;
export type InsertMaintenanceImmobiliere = z.infer<typeof insertMaintenanceImmobiliereSchema>;

// Types de sélection immobilier
export type ProprieteImmobiliere = typeof proprietesImmobilieres.$inferSelect;
export type TransactionImmobiliere = typeof transactionsImmobilieres.$inferSelect;
export type EvaluationImmobiliere = typeof evaluationsImmobilieres.$inferSelect;
export type MaintenanceImmobiliere = typeof maintenanceImmobiliere.$inferSelect;
