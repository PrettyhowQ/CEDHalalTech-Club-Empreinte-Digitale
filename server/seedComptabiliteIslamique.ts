import { db } from "./db";
import { 
  entreprises, 
  planComptable, 
  transactionsComptables, 
  ecrituresComptables,
  calculZakat,
  contratsIslamiques,
  auditSharia,
  proprietesImmobilieres,
  transactionsImmobilieres,
  evaluationsImmobilieres,
  maintenanceImmobiliere
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

    // 3. Propriétés immobilières exemples
    const proprietesData = [
      {
        reference: "IMM-2025-001",
        entrepriseId: 1, // Halal Market Geneva
        typePropriete: "villa" as const,
        adresseComplete: "Chemin des Roses 15, 1201 Genève, Suisse",
        ville: "Genève",
        codePostal: "1201",
        pays: "Suisse",
        superficie: "450.00",
        nombrePieces: 8,
        nombreChambres: 5,
        nombreSallesBains: 3,
        anneeConstruction: 2015,
        prixAchat: "2850000.00",
        prixVente: "3200000.00",
        loyerMensuel: "8500.00",
        chargesMensuelles: "450.00",
        devise: "CHF" as const,
        statutPropriete: "a_vendre" as const,
        conformiteIslamique: true,
        certificationHalal: true,
        zonePriere: true,
        orientationQibla: true,
        proximiteMosquee: true,
        proximiteEcoleIslamique: true,
        typeContratPrevu: "murabaha" as const,
        pourcentageFinancement: "80.00",
        dureeFinancement: 240, // 20 ans
        tauxMarge: "3.5000", // 3.5%
        zakatApplicable: true,
        dateAcquisition: new Date("2023-06-15"),
        vendeur: "Famille Schmidt",
        notaire: "Étude Dubois & Associés",
        numeroTitreFoncier: "GE-001-2023-15678",
        valeurCadastre: "2650000.00",
        taxesFoncieres: "12500.00",
        assuranceBien: "4800.00",
        fraisNotaire: "85500.00",
        commissionsAgence: "96000.00",
        description: "Villa familiale de standing avec jardin paysager",
        descriptifIslamique: "Propriété avec espace prière orienté Qibla, proximité mosquée Petit-Saconnex (5min), école islamique Al-Hidaya (10min), environnement halal, matériaux de construction conformes"
      },
      {
        reference: "IMM-2025-002",
        entrepriseId: 2, // Islamic Finance Consulting
        typePropriete: "appartement" as const,
        adresseComplete: "Avenue du Lac 42, 1000 Lausanne, Suisse",
        ville: "Lausanne",
        codePostal: "1000",
        pays: "Suisse",
        superficie: "120.00",
        nombrePieces: 4,
        nombreChambres: 2,
        nombreSallesBains: 2,
        anneeConstruction: 2018,
        prixAchat: "1250000.00",
        prixVente: "1400000.00",
        loyerMensuel: "4500.00",
        chargesMensuelles: "280.00",
        devise: "CHF" as const,
        statutPropriete: "loue" as const,
        conformiteIslamique: true,
        certificationHalal: false,
        zonePriere: false,
        orientationQibla: false,
        proximiteMosquee: false,
        proximiteEcoleIslamique: false,
        typeContratPrevu: "ijara" as const,
        pourcentageFinancement: "0.00",
        dureeFinancement: 0,
        tauxMarge: "0.0000",
        zakatApplicable: true,
        dateAcquisition: new Date("2024-03-20"),
        acheteur: "M. Ahmed Zouari",
        notaire: "SCP Moreau & Partenaires",
        numeroTitreFoncier: "VD-042-2024-98765",
        valeurCadastre: "1180000.00",
        taxesFoncieres: "8400.00",
        assuranceBien: "2400.00",
        fraisNotaire: "37500.00",
        commissionsAgence: "37500.00",
        description: "Appartement moderne avec vue lac",
        descriptifIslamique: "Bien immobilier acquis sans financement ribawi, contrat Ijara pour location conforme Sharia, revenus locatifs halal"
      },
      {
        reference: "IMM-2025-003",
        entrepriseId: 3, // CED Academy
        typePropriete: "bureau" as const,
        adresseComplete: "Rue du Commerce 28, 1204 Genève, Suisse",
        ville: "Genève",
        codePostal: "1204",
        pays: "Suisse",
        superficie: "280.00",
        nombrePieces: 8,
        nombreChambres: 0,
        nombreSallesBains: 2,
        anneeConstruction: 2020,
        prixAchat: "1850000.00",
        prixVente: "2100000.00",
        loyerMensuel: "6800.00",
        chargesMensuelles: "520.00",
        devise: "CHF" as const,
        statutPropriete: "a_louer" as const,
        conformiteIslamique: true,
        certificationHalal: true,
        zonePriere: true,
        orientationQibla: true,
        proximiteMosquee: true,
        proximiteEcoleIslamique: false,
        typeContratPrevu: "ijara" as const,
        pourcentageFinancement: "70.00",
        dureeFinancement: 180, // 15 ans
        tauxMarge: "3.0000", // 3%
        zakatApplicable: true,
        dateAcquisition: new Date("2024-09-10"),
        vendeur: "SCI Plateau Commercial",
        notaire: "Étude Maître Rossier",
        numeroTitreFoncier: "GE-028-2024-11223",
        valeurCadastre: "1750000.00",
        taxesFoncieres: "15200.00",
        assuranceBien: "3600.00",
        fraisNotaire: "55500.00",
        commissionsAgence: "55500.00",
        description: "Bureaux modernes dans quartier d'affaires",
        descriptifIslamique: "Espace professionnel avec salle de prière aménagée, orientation Qibla vérifiée, activités commerciales halal uniquement, contrat Ijara pour futurs locataires musulmans"
      }
    ];

    for (const propriete of proprietesData) {
      await db.insert(proprietesImmobilieres).values(propriete).onConflictDoNothing();
      console.log(`✅ Propriété ajoutée: ${propriete.reference} - ${propriete.typePropriete} à ${propriete.ville}`);
    }

    // 4. Transactions immobilières exemples
    const transactionsImmobilieresData = [
      {
        numeroTransaction: "TXN-IMM-2025-001",
        proprieteId: 1,
        entrepriseId: 1,
        typeTransaction: "achat",
        typeContratIslamique: "murabaha" as const,
        contrepartie: "Famille Schmidt",
        montantTransaction: "2850000.00",
        acompteVerse: "570000.00", // 20%
        soldeRestant: "2280000.00",
        devise: "CHF" as const,
        dureeContrat: 240, // 20 ans
        tauxMarge: "3.5000",
        dateTransaction: new Date("2023-06-15"),
        dateSignature: new Date("2023-06-15"),
        dateDebutContrat: new Date("2023-07-01"),
        dateFinContrat: new Date("2043-07-01"),
        conformiteIslamique: true,
        validationSharia: true,
        savantValidateur: "Sheikh Dr. Ahmad Al-Khalifi",
        referenceFatwa: "FATWA-MURABAHA-IMM-2023-15",
        temoinsTransaction: ["Maître Dubois", "M. Hassan Benali"],
        conditionsSpeciales: "Financement Murabaha avec marge fixe 3.5%, pas d'intérêt ribawi",
        clausesIslamiques: "Conformité totale aux principes de la finance islamique, validation comité Sharia",
        garanties: ["Hypothèque légale", "Assurance décès halal", "Caution personnelle"],
        statutTransaction: "execute",
        documentsLegaux: ["Acte de vente", "Contrat Murabaha", "Certificat conformité Sharia"],
        justificationIslamique: "Transaction conforme aux principes Murabaha selon Coran 2:275 et consensus scholars AAOIFI"
      }
    ];

    for (const transaction of transactionsImmobilieresData) {
      await db.insert(transactionsImmobilieres).values(transaction).onConflictDoNothing();
      console.log(`✅ Transaction immobilière ajoutée: ${transaction.numeroTransaction}`);
    }

    console.log("🎉 Système complet comptabilité + immobilier islamique ajouté avec succès!");
    console.log("📊 Total comptes créés:", planComptableData.length);
    console.log("🏢 Total entreprises créées:", entreprisesData.length);
    console.log("🏠 Total propriétés créées:", proprietesData.length);
    console.log("💼 Total transactions immobilières:", transactionsImmobilieresData.length);
    console.log("💡 Fonctionnalités disponibles:");
    console.log("   ✓ Plan comptable conforme Sharia");
    console.log("   ✓ Gestion entreprises clients");
    console.log("   ✓ Gestion propriétés immobilières");
    console.log("   ✓ Transactions immobilières (Murabaha, Ijara)");
    console.log("   ✓ Calcul automatique Zakat");
    console.log("   ✓ Contrats islamiques complets");
    console.log("   ✓ Audit conformité AAOIFI/IFSB");
    console.log("   ✓ Double entrée comptable islamique");
    console.log("   ✓ Évaluations et maintenance immobilière");

  } catch (error) {
    console.error("❌ Erreur lors du seeding comptabilité islamique:", error);
  }
}