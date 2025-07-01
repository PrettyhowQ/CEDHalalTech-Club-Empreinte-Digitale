import { Router } from "express";
import { db } from "../db";
import { 
  formations, 
  modules, 
  lecons, 
  inscriptions, 
  progressionLecons, 
  quiz, 
  resultatsQuiz, 
  certificats,
  insertFormationSchema,
  insertModuleSchema,
  insertLeconSchema,
  insertInscriptionSchema,
  insertProgressionLeconSchema,
  insertQuizSchema,
  insertResultatQuizSchema,
  insertCertificatSchema
} from "@shared/schema";
import { eq, desc, asc, and, or, like, count, sql } from "drizzle-orm";
import { z } from "zod";

const router = Router();

// ==========================================
// FORMATIONS CRUD
// ==========================================

// GET /api/formations - Obtenir toutes les formations avec filtres
router.get("/", async (req, res) => {
  try {
    const { 
      search, 
      categorie, 
      niveau, 
      langue, 
      instructeur, 
      prix_min, 
      prix_max,
      halal_only = 'true',
      certifie_only = 'false',
      limit = '50',
      offset = '0'
    } = req.query;

    let query = db.select().from(formations);
    let conditions = [];

    // Filtres
    if (search) {
      const searchTerm = `%${search}%`;
      conditions.push(
        or(
          like(formations.titre, searchTerm),
          like(formations.description, searchTerm),
          like(formations.instructeur, searchTerm)
        )
      );
    }

    if (categorie && categorie !== 'all') {
      conditions.push(eq(formations.categorie, categorie as string));
    }

    if (niveau && niveau !== 'all') {
      conditions.push(eq(formations.niveau, niveau as any));
    }

    if (instructeur && instructeur !== 'all') {
      conditions.push(eq(formations.instructeur, instructeur as string));
    }

    if (prix_min) {
      conditions.push(sql`${formations.prix}::numeric >= ${Number(prix_min)}`);
    }

    if (prix_max) {
      conditions.push(sql`${formations.prix}::numeric <= ${Number(prix_max)}`);
    }

    if (halal_only === 'true') {
      conditions.push(eq(formations.halal, true));
    }

    if (certifie_only === 'true') {
      conditions.push(eq(formations.certifie, true));
    }

    // Appliquer les conditions
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    // Tri et pagination
    const formationsData = await query
      .orderBy(desc(formations.dateCreation))
      .limit(Number(limit))
      .offset(Number(offset));

    // Compter le total pour la pagination
    let countQuery = db.select({ count: count() }).from(formations);
    if (conditions.length > 0) {
      countQuery = countQuery.where(and(...conditions));
    }
    const [{ count: total }] = await countQuery;

    res.json({
      formations: formationsData,
      pagination: {
        total,
        limit: Number(limit),
        offset: Number(offset),
        hasMore: Number(offset) + formationsData.length < total
      }
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des formations:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// POST /api/formations/seed - Insérer des données d'exemple
router.post("/seed", async (req, res) => {
  try {
    // Formations d'exemple conformes aux valeurs islamiques
    const formationsExemple = [
      {
        titre: "Introduction au Fiqh de l'Informatique",
        description: "Les bases du fiqh appliqué aux technologies modernes selon les 4 sources islamiques authentiques.",
        instructeur: "Dr. Yusuf Al-Dimashqi",
        duree: "8 semaines",
        niveau: "Débutant" as const,
        prix: "299.00",
        devise: "CHF" as const,
        categorie: "Fiqh & Informatique",
        langue: ["français", "arabe"],
        tags: ["fiqh", "informatique", "halal", "technologie"],
        participants: 0,
        note: 0,
        avis: 0,
        image: "/api/placeholder/400/300",
        certifie: true,
        halal: true,
        video: true,
        audio: true,
        pdf: true,
        quiz: true,
        certification: true,
        dateDebut: new Date("2025-08-01"),
        dateFin: new Date("2025-09-26"),
        places: 100,
        placesRestantes: 100,
        savantValidateur: "Comité CED (7 savants)",
        sourcesFiqh: ["Coran", "Sunna", "Ijmâ'", "Qiyâs"],
        prerequis: ["Bases informatique", "Notions Fiqh général"],
        objectifs: [
          "Maîtriser les règles Fiqh informatique",
          "Développer applications halal",
          "Obtenir certification expertise"
        ],
        programme: [
          "Fondements théoriques",
          "Applications pratiques",
          "Projets concrets"
        ]
      },
      {
        titre: "Développement Web Halal & Sécurisé",
        description: "Apprendre à développer des sites web conformes aux valeurs islamiques avec sécurité renforcée.",
        instructeur: "Sheikh Mohammad Al-Qarni",
        duree: "12 semaines", 
        niveau: "Intermédiaire" as const,
        prix: "599.00",
        devise: "CHF" as const,
        categorie: "Développement",
        langue: ["français", "anglais"],
        tags: ["web", "halal", "sécurité", "développement"],
        participants: 0,
        note: 0,
        avis: 0,
        image: "/api/placeholder/400/300",
        certifie: true,
        halal: true,
        video: true,
        audio: false,
        pdf: true,
        quiz: true,
        certification: true,
        dateDebut: new Date("2025-08-15"),
        dateFin: new Date("2025-11-07"),
        places: 50,
        placesRestantes: 50,
        savantValidateur: "Dr. Ahmed Al-Mansouri",
        sourcesFiqh: ["Standards AAOIFI", "Fiqh moderne"],
        prerequis: ["HTML/CSS", "JavaScript basique"],
        objectifs: [
          "Développer sites conformes Islam",
          "Implémenter sécurité avancée", 
          "Certification développeur halal"
        ],
        programme: [
          "Architecture web islamique",
          "Sécurité et conformité",
          "Déploiement et maintenance"
        ]
      }
    ];

    const insertedFormations = await db.insert(formations)
      .values(formationsExemple)
      .returning();

    res.status(201).json({
      message: "Données d'exemple insérées avec succès",
      formations: insertedFormations
    });
  } catch (error) {
    console.error("Erreur lors de l'insertion des données d'exemple:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;