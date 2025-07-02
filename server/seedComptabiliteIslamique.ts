import { db } from "./db";
import { 
  entreprises, 
  planComptable, 
  transactionsComptables, 
  ecrituresComptables,
  calculZakat,
  contratsIslamiques,
  auditSharia
} from "@shared/schema";

export async function seedComptabiliteIslamique() {
  console.log("🏦 Début de l'ajout du système de comptabilité islamique...");

  try {
    // 1. Plan comptable islamique standard
    const planComptableData = [
      // ACTIFS
      {
        codeCompte: "1000",
        nomCompte: "Immobilisations Corporelles",
        nomArabe: "الأصول الثابتة المادية",
        typeCompte: "actif" as const,
        categorieIslamique: "halal_income" as const,
        niveau: 1,
        zakatApplicable: false,
        statutIslamique: "halal" as const,
        justificationFiqh: "Les biens immobiliers sont permis selon le Coran et la Sunna",
        description: "Terrains, bâtiments, équipements conformes Sharia"
      },
      {
        codeCompte: "1100",
        nomCompte: "Liquidités et Équivalents",
        nomArabe: "النقد وما في حكمه",
        typeCompte: "actif" as const,
        categorieIslamique: "halal_income" as const,
        niveau: 1,
        zakatApplicable: true,
        tauxZakat: "0.0250",
        statutIslamique: "halal" as const,
        justificationFiqh: "Zakat Al-Mal obligatoire sur les liquidités selon hadith",
        description: "Comptes bancaires, caisse, placements halal"
      },
      {
        codeCompte: "1200",
        nomCompte: "Créances Commerciales Halal",
        nomArabe: "الذمم التجارية الحلال",
        typeCompte: "actif" as const,
        categorieIslamique: "murabaha" as const,
        niveau: 1,
        zakatApplicable: true,
        tauxZakat: "0.0250",
        statutIslamique: "halal" as const,
        justificationFiqh: "Créances issues de contrats Murabaha conformes",
        description: "Créances clients, avances, cautions halal"
      },
      {
        codeCompte: "1300",
        nomCompte: "Stocks Merchandises Halal",
        nomArabe: "المخزون التجاري الحلال",
        typeCompte: "actif" as const,
        categorieIslamique: "halal_income" as const,
        niveau: 1,
        zakatApplicable: true,
        tauxZakat: "0.0250",
        statutIslamique: "halal" as const,
        justificationFiqh: "Zakat Tijara sur marchandises selon consensus scholars",
        description: "Produits halal, matières premières licites"
      },

      // PASSIFS
      {
        codeCompte: "2000",
        nomCompte: "Dettes Sans Intérêt",
        nomArabe: "الديون بدون فوائد",
        typeCompte: "passif" as const,
        categorieIslamique: "qard_hassan" as const,
        niveau: 1,
        zakatApplicable: false,
        statutIslamique: "halal" as const,
        justificationFiqh: "Qard Hassan permis selon Coran 2:245",
        description: "Prêts sans intérêt, dettes commerciales"
      },
      {
        codeCompte: "2100",
        nomCompte: "Provisions Takaful",
        nomArabe: "مخصصات التكافل",
        typeCompte: "passif" as const,
        categorieIslamique: "takaful" as const,
        niveau: 1,
        zakatApplicable: false,
        statutIslamique: "halal" as const,
        justificationFiqh: "Assurance mutuelle conforme principes islamiques",
        description: "Réserves assurance islamique"
      },

      // CAPITAUX PROPRES
      {
        codeCompte: "3000",
        nomCompte: "Capital Social Halal",
        nomArabe: "رأس المال الحلال",
        typeCompte: "capitaux_propres" as const,
        categorieIslamique: "musharaka" as const,
        niveau: 1,
        zakatApplicable: false,
        statutIslamique: "halal" as const,
        justificationFiqh: "Partenariat d'affaires selon principes Musharaka",
        description: "Apports en capital, réserves"
      },
      {
        codeCompte: "3100",
        nomCompte: "Fonds Zakat",
        nomArabe: "صندوق الزكاة",
        typeCompte: "capitaux_propres" as const,
        categorieIslamique: "zakat_fund" as const,
        niveau: 1,
        zakatApplicable: false,
        statutIslamique: "mandub" as const,
        justificationFiqh: "Obligation religieuse selon Coran 9:103",
        description: "Fonds dédiés au paiement de la Zakat"
      },

      // PRODUITS (REVENUS)
      {
        codeCompte: "4000",
        nomCompte: "Ventes Produits Halal",
        nomArabe: "مبيعات المنتجات الحلال",
        typeCompte: "produits" as const,
        categorieIslamique: "halal_income" as const,
        niveau: 1,
        zakatApplicable: true,
        tauxZakat: "0.0250",
        statutIslamique: "halal" as const,
        justificationFiqh: "Commerce licite selon Coran 2:275",
        description: "Revenus vente produits certifiés halal"
      },
      {
        codeCompte: "4100",
        nomCompte: "Profits Murabaha",
        nomArabe: "أرباح المرابحة",
        typeCompte: "produits" as const,
        categorieIslamique: "murabaha" as const,
        niveau: 1,
        zakatApplicable: true,
        tauxZakat: "0.0250",
        statutIslamique: "halal" as const,
        justificationFiqh: "Marge bénéficiaire transparente conforme Fiqh",
        description: "Revenus contrats Murabaha"
      },
      {
        codeCompte: "4200",
        nomCompte: "Revenus Ijara",
        nomArabe: "إيرادات الإجارة",
        typeCompte: "produits" as const,
        categorieIslamique: "ijara" as const,
        niveau: 1,
        zakatApplicable: true,
        tauxZakat: "0.0250",
        statutIslamique: "halal" as const,
        justificationFiqh: "Location conforme principes islamiques",
        description: "Revenus de location conformes Sharia"
      },

      // CHARGES
      {
        codeCompte: "5000",
        nomCompte: "Achats Matières Halal",
        nomArabe: "مشتريات المواد الحلال",
        typeCompte: "charges" as const,
        categorieIslamique: "halal_income" as const,
        niveau: 1,
        zakatApplicable: false,
        statutIslamique: "halal" as const,
        justificationFiqh: "Approvisionnement en produits licites uniquement",
        description: "Achats produits certifiés halal"
      },
      {
        codeCompte: "5100",
        nomCompte: "Frais Certification Halal",
        nomArabe: "رسوم الشهادة الحلال",
        typeCompte: "charges" as const,
        categorieIslamique: "halal_income" as const,
        niveau: 1,
        zakatApplicable: false,
        statutIslamique: "mandub" as const,
        justificationFiqh: "Certification nécessaire pour conformité Sharia",
        description: "Coûts certification organismes islamiques"
      },
      {
        codeCompte: "5200",
        nomCompte: "Paiements Zakat",
        nomArabe: "مدفوعات الزكاة",
        typeCompte: "charges" as const,
        categorieIslamique: "zakat_fund" as const,
        niveau: 1,
        zakatApplicable: false,
        statutIslamique: "mandub" as const,
        justificationFiqh: "Obligation religieuse pilier de l'Islam",
        description: "Versements Zakat aux bénéficiaires"
      }
    ];

    for (const compte of planComptableData) {
      await db.insert(planComptable).values(compte).onConflictDoNothing();
      console.log(`✅ Compte ajouté: ${compte.codeCompte} - ${compte.nomCompte}`);
    }

    // 2. Entreprises exemples
    const entreprisesData = [
      {
        nom: "Halal Market Geneva SA",
        nomArabe: "السوق الحلال جنيف",
        typeActivite: "alimentation_halal",
        numeroRegistre: "CHE-123.456.789",
        numeroTva: "CHE-123.456.789 TVA",
        adresse: "Rue du Commerce 15, 1201 Genève, Suisse",
        ville: "Genève",
        pays: "Suisse",
        telephone: "+41 22 123 45 67",
        email: "contact@halalmarket-geneva.ch",
        conformiteIslamique: true,
        zakatApplicable: true,
        devise: "CHF" as const,
        debutAnneFiscale: new Date("2025-01-01"),
        statutShahadah: "confirme",
        certificationMetier: "certifie_halal",
        notes: "Entreprise spécialisée dans l'alimentation halal certifiée"
      },
      {
        nom: "Islamic Finance Consulting Sàrl",
        nomArabe: "استشارات التمويل الإسلامي",
        typeActivite: "finance_islamique",
        numeroRegistre: "CHE-987.654.321",
        numeroTva: "CHE-987.654.321 TVA",
        adresse: "Avenue de la Paix 10, 1202 Genève, Suisse",
        ville: "Genève",
        pays: "Suisse",
        telephone: "+41 22 987 65 43",
        email: "info@islamic-finance.ch",
        conformiteIslamique: true,
        zakatApplicable: true,
        devise: "CHF" as const,
        debutAnneFiscale: new Date("2025-01-01"),
        statutShahadah: "confirme",
        certificationMetier: "conforme_sharia",
        notes: "Cabinet de conseil en finance islamique AAOIFI"
      },
      {
        nom: "CED Academy Formation",
        nomArabe: "أكاديمية سي إي دي للتكوين",
        typeActivite: "education",
        numeroRegistre: "CHE-555.777.999",
        numeroTva: "CHE-555.777.999 TVA",
        adresse: "Chemin des Écoliers 5, 1203 Genève, Suisse",
        ville: "Genève",
        pays: "Suisse",
        telephone: "+41 22 555 77 99",
        email: "contact@ced-academy.ch",
        conformiteIslamique: true,
        zakatApplicable: true,
        devise: "CHF" as const,
        debutAnneFiscale: new Date("2025-01-01"),
        statutShahadah: "confirme",
        certificationMetier: "conforme_sharia",
        notes: "Institut de formation islamique certifié"
      }
    ];

    for (const entreprise of entreprisesData) {
      await db.insert(entreprises).values(entreprise).onConflictDoNothing();
      console.log(`✅ Entreprise ajoutée: ${entreprise.nom}`);
    }

    console.log("🎉 Système de comptabilité islamique ajouté avec succès!");
    console.log("📊 Total comptes créés:", planComptableData.length);
    console.log("🏢 Total entreprises créées:", entreprisesData.length);
    console.log("💡 Fonctionnalités disponibles:");
    console.log("   ✓ Plan comptable conforme Sharia");
    console.log("   ✓ Gestion entreprises clients");
    console.log("   ✓ Calcul automatique Zakat");
    console.log("   ✓ Contrats islamiques (Murabaha, Ijara, Musharaka)");
    console.log("   ✓ Audit conformité AAOIFI/IFSB");
    console.log("   ✓ Double entrée comptable islamique");

  } catch (error) {
    console.error("❌ Erreur lors du seeding comptabilité islamique:", error);
  }
}