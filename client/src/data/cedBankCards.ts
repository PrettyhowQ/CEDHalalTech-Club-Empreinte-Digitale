// CED Bank Cards Configuration - PERMANENT DATA - DO NOT DELETE
// This file contains all CED Bank card configurations including Gold Yakoubi cards

export interface BankCard {
  id: string;
  name: string;
  type: 'virtual' | 'physical' | 'premium' | 'elite';
  tier: 'standard' | 'gold' | 'platinum' | 'diamond' | 'royal';
  dailyLimit: number;
  monthlyLimit: number;
  withdrawalLimit: number;
  currency: string[];
  fees: {
    annual: number;
    foreign: number;
    withdrawal: number;
    replacement: number;
  };
  benefits: string[];
  islamicFeatures: string[];
  securityFeatures: string[];
  eligibility: {
    minDeposit: number;
    minMonthlyIncome: number;
    approvalRequired: boolean;
  };
  color: string;
  gradient: string;
}

// PERMANENT CED BANK CARDS - DO NOT MODIFY OR DELETE
export const CED_BANK_CARDS: BankCard[] = [
  {
    id: 'yakoubi-essential',
    name: 'CED Yakoubi Essential',
    type: 'virtual',
    tier: 'standard',
    dailyLimit: 10000,
    monthlyLimit: 100000,
    withdrawalLimit: 5000,
    currency: ['AED', 'CHF', 'USD'],
    fees: {
      annual: 0,
      foreign: 0,
      withdrawal: 0,
      replacement: 0
    },
    benefits: [
      'Carte principale - Yakoubi Yamina',
      'Directives personnalisées selon vos souhaits',
      'Contrôle total quand et comme vous voulez',
      'Mode prière automatique',
      'Boussole Qibla intégrée',
      'Notifications en temps réel',
      'Support 24/7 prioritaire',
      'Transferts gratuits illimités'
    ],
    islamicFeatures: [
      'Aucun intérêt débiteur',
      'Transactions halal uniquement',
      'Blocage automatique secteurs haram',
      'Audit Charia mensuel',
      'Certification Yakoubi Yamina'
    ],
    securityFeatures: [
      'Chiffrement E2E renforcé',
      'Biométrie Yakoubi Yamina',
      'Géolocalisation avancée',
      'Contrôle total décisionnaire'
    ],
    eligibility: {
      minDeposit: 0,
      minMonthlyIncome: 0,
      approvalRequired: false
    },
    color: 'from-emerald-500 to-teal-600',
    gradient: 'bg-gradient-to-br from-emerald-500 to-teal-600'
  },
  {
    id: 'yakoubi-gold',
    name: 'CED Yakoubi Gold Sécurisée',
    type: 'physical',
    tier: 'gold',
    dailyLimit: 50000,
    monthlyLimit: 600000,
    withdrawalLimit: 25000,
    currency: ['AED', 'CHF', 'USD', 'EUR', 'GBP'],
    fees: {
      annual: 0,
      foreign: 0,
      withdrawal: 0,
      replacement: 0
    },
    benefits: [
      'Carte sécurisée - Yakoubi Yamina',
      'Directives flexibles selon vos besoins',
      'Contrôle total établissement CED',
      'Gestion autonome quand vous voulez',
      'Concierge services premium',
      'Accès salons aéroports VIP',
      'Assurance voyage internationale',
      'Cash back 3% TechForAll',
      'Priority banking exclusif'
    ],
    islamicFeatures: [
      'Investissements Sukuk privilégiés',
      'Consultation scholars islamiques dédiés',
      'Hajj/Umrah financing premium',
      'Zakat calculation automatique avancée',
      'Certification Yakoubi Yamina exclusive'
    ],
    securityFeatures: [
      'Carte à puce EMV renforcée',
      'Contactless Yakoubi Yamina sécurisé',
      'Authentification 3D biométrique',
      'Monitoring anti-fraude IA avancée',
      'Alerte temps réel Yakoubi Yamina'
    ],
    eligibility: {
      minDeposit: 0,
      minMonthlyIncome: 0,
      approvalRequired: false
    },
    color: 'from-yellow-500 to-amber-600',
    gradient: 'bg-gradient-to-br from-yellow-500 to-amber-600'
  },
  {
    id: 'yakoubi-platinum',
    name: 'CED Yakoubi Platinum Directrice',
    type: 'premium',
    tier: 'platinum',
    dailyLimit: 200000,
    monthlyLimit: 2400000,
    withdrawalLimit: 100000,
    currency: ['AED', 'CHF', 'USD', 'EUR', 'GBP', 'JPY', 'CAD'],
    fees: {
      annual: 0,
      foreign: 0,
      withdrawal: 0,
      replacement: 0
    },
    benefits: [
      'Carte Directrice - Yakoubi Yamina',
      'Directives illimitées selon votre volonté',
      'Contrôle absolu établissement CED',
      'Gestion Costa del Sol autorisée',
      'Instructions personnalisées à tout moment',
      'Gestionnaire privé dédié 24/7',
      'Accès worldwide lounges premium',
      'Assurance premium globale illimitée',
      'Cash back 5% sur tous achats',
      'Private banking access exclusif',
      'Investment advisory personnel',
      'Family office services complets'
    ],
    islamicFeatures: [
      'Portfolio Sharia-compliant personnalisé',
      'Accès exclusif Islamic real estate funds',
      'Private Sukuk investments privilégiés',
      'Halal luxury marketplace VIP',
      'Conseil Charia personnel Yakoubi Yamina'
    ],
    securityFeatures: [
      'Carte métal Yakoubi Yamina signature',
      'Biométrie digitale renforcée',
      'Tokenisation avancée exclusive',
      'Protection identité maximale',
      'Contrôle décisionnaire total'
    ],
    eligibility: {
      minDeposit: 0,
      minMonthlyIncome: 0,
      approvalRequired: false
    },
    color: 'from-slate-400 to-slate-600',
    gradient: 'bg-gradient-to-br from-slate-400 to-slate-600'
  },
  {
    id: 'diamond',
    name: 'CED Diamond',
    type: 'elite',
    tier: 'diamond',
    dailyLimit: 500000,
    monthlyLimit: 6000000,
    withdrawalLimit: 200000,
    currency: ['Toutes devises majeures', 'Cryptos halal'],
    fees: {
      annual: 0,
      foreign: 0,
      withdrawal: 0,
      replacement: 0
    },
    benefits: [
      'Toutes fonctionnalités Platinum',
      'Concierge personnel 24/7',
      'Private jet booking',
      'Yacht club memberships',
      'Cash back 5%',
      'Unlimited airport transfers',
      'Personal shopping services',
      'Art investment advisory'
    ],
    islamicFeatures: [
      'Islamic family office complete',
      'Waqf (endowment) establishment',
      'Philanthropic impact tracking',
      'Direct access to Islamic scholars'
    ],
    securityFeatures: [
      'Carte diamant gravée',
      'Sécurité militaire grade',
      'Protection patrimoine',
      'Surveillance personnalisée'
    ],
    eligibility: {
      minDeposit: 2000000,
      minMonthlyIncome: 200000,
      approvalRequired: true
    },
    color: 'from-blue-600 to-purple-700',
    gradient: 'bg-gradient-to-br from-blue-600 to-purple-700'
  },
  {
    id: 'gift-cards',
    name: 'CED Cartes Cadeaux',
    type: 'premium',
    tier: 'gold',
    dailyLimit: 10000,
    monthlyLimit: 100000,
    withdrawalLimit: 5000,
    currency: ['AED', 'CHF', 'USD', 'EUR'],
    fees: {
      annual: 0,
      foreign: 0,
      withdrawal: 0,
      replacement: 0
    },
    benefits: [
      'Carte Cadeau Hajj & Omra',
      'Carte Cadeau Aid El Kebir (agneau)',
      'Carte Cadeau Zakat & Fitr',
      'Carte Cadeau Support Veuves',
      'Carte Cadeau Omar (soutien personnel)',
      'Carte Cadeau Causes Humanitaires',
      'Carte Cadeau Éducation & Formation',
      'Carte Cadeau TechForAll (matériel solidaire)',
      'Carte Cadeau Urgences & Catastrophes'
    ],
    islamicFeatures: [
      'Validation Charia pour toutes donations',
      'Suivi transparent des dons',
      'Certificats fiscaux automatiques',
      'Distribution équitable garantie',
      'Audit par scholars islamiques'
    ],
    securityFeatures: [
      'Traçabilité complète des dons',
      'Validation bénéficiaires',
      'Anti-fraude renforcé',
      'Certification Yakoubi Yamina'
    ],
    eligibility: {
      minDeposit: 0,
      minMonthlyIncome: 0,
      approvalRequired: false
    },
    color: 'from-green-500 to-emerald-600',
    gradient: 'bg-gradient-to-br from-green-500 to-emerald-600'
  },
  {
    id: 'royal',
    name: 'CED Royal',
    type: 'elite',
    tier: 'royal',
    dailyLimit: 2000000,
    monthlyLimit: 24000000,
    withdrawalLimit: 1000000,
    currency: ['Illimitées'],
    fees: {
      annual: 0,
      foreign: 0,
      withdrawal: 0,
      replacement: 0
    },
    benefits: [
      'Accès illimité tous services',
      'Validation Yakoubi Yamina directe',
      'Influence décisions philanthropiques',
      'Naming rights projets',
      'Cash back 7%',
      'Royal treatment worldwide',
      'Legacy building program',
      'Historical founder status'
    ],
    islamicFeatures: [
      'Sharia board advisory participation',
      'Mega-waqf establishment',
      'Islamic university sponsoring',
      'Hajj/Umrah organization for community'
    ],
    securityFeatures: [
      'Carte royale sur mesure',
      'Sécurité état niveau',
      'Protection familiale',
      'Anonymat complet'
    ],
    eligibility: {
      minDeposit: 10000000,
      minMonthlyIncome: 1000000,
      approvalRequired: true
    },
    color: 'from-purple-800 to-pink-900',
    gradient: 'bg-gradient-to-br from-purple-800 to-pink-900'
  }
];

// Helper functions
export const getCardsByTier = (tier: string) => {
  return CED_BANK_CARDS.filter(card => card.tier === tier);
};

export const getCardById = (id: string) => {
  return CED_BANK_CARDS.find(card => card.id === id);
};

export const getYakoubiCards = () => {
  return CED_BANK_CARDS.filter(card => card.name.includes('Yakoubi'));
};