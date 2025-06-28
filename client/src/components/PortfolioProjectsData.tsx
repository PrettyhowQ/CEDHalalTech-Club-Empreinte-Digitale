// Portfolio Projects Data - Complete CED Ecosystem Projects
// Tous les projets de l'écosystème Club Empreinte Digitale pour le portfolio mobile

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  category: 'banking' | 'education' | 'insurance' | 'solidarity' | 'ai' | 'compliance' | 'health' | 'legal' | 'innovation';
  status: 'production' | 'development' | 'planning' | 'completed';
  technologies: string[];
  features: string[];
  metrics?: {
    users?: number;
    revenue?: string;
    countries?: number;
    languages?: number;
    certifications?: number;
  };
  timeline: string;
  team: string[];
  compliance: {
    sharia: boolean;
    rgpd: boolean;
    aaoifi?: boolean;
    finma?: boolean;
  };
  urls?: {
    demo?: string;
    documentation?: string;
    app?: string;
    github?: string;
  };
  achievements: string[];
  impact: string;
  imageUrl?: string;
  priority: 'high' | 'medium' | 'low';
  region: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  // CED BANK ECOSYSTEM
  {
    id: 'ced-bank-core',
    title: 'CED Bank - Banking Digital Halal',
    description: 'Première banque digitale 100% conforme Sharia avec fonctionnalités spirituelles intégrées',
    category: 'banking',
    status: 'production',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Drizzle ORM', 'Express'],
    features: [
      'Comptes multi-devises (CHF, AED, USD, EUR)',
      'Cartes virtuelles 5 niveaux (Essential → Royal)',
      'Mode prière avec suspension automatique',
      'Boussole Qibla GPS précise',
      'Écoute Coran (8+ récitateurs)',
      'Horaires prières intelligents',
      'Calendrier islamique intégré',
      'Transactions 0% intérêt'
    ],
    metrics: {
      users: 12847,
      revenue: 'CHF 2.34M',
      countries: 25,
      languages: 78
    },
    timeline: '2024-2027',
    team: ['Yakoubi Yamina', 'Yakoubi Aziz', 'Yakoubi Karim'],
    compliance: {
      sharia: true,
      rgpd: true,
      aaoifi: true,
      finma: true
    },
    urls: {
      demo: '/ced-bank',
      documentation: '/api-docs/banking'
    },
    achievements: [
      'Premier banking vocal en arabe',
      'Certification AAOIFI complète',
      'Conformité FINMA Suisse',
      'Innovation prière intégrée'
    ],
    impact: 'Révolutionner la finance islamique digitale mondiale',
    priority: 'high',
    region: ['Suisse', 'UAE', 'France', 'Arabie Saoudite']
  },
  
  {
    id: 'ced-premium-banking',
    title: 'CED Premium Banking Dashboard',
    description: 'Interface premium pour clients fortunés avec gestion patrimoine avancée',
    category: 'banking',
    status: 'production',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Framer Motion'],
    features: [
      'Gestion patrimoine temps réel',
      'Analyse portfolio avancée',
      'Conseil financier personnalisé',
      'Accès marchés internationaux',
      'Reporting fiscal automatique'
    ],
    timeline: '2024-2025',
    team: ['Yakoubi Yamina'],
    compliance: {
      sharia: true,
      rgpd: true,
      finma: true
    },
    achievements: [
      'Interface ultra-premium',
      'Analytics temps réel',
      'Multi-devises avancé'
    ],
    impact: 'Service bancaire haut de gamme conforme Sharia',
    priority: 'high',
    region: ['Suisse', 'UAE', 'Luxembourg']
  },

  {
    id: 'zakat-calculator',
    title: 'Calculateur Zakat Multi-devises',
    description: 'Calculateur Zakat intelligent avec support 15+ devises et règles Fiqh authentiques',
    category: 'banking',
    status: 'production',
    technologies: ['React', 'TypeScript', 'API Exchange Rates'],
    features: [
      'Support 15+ devises mondiales',
      'Calculs conformes 4 écoles sunnites',
      'Historique annuel Zakat',
      'Rappels automatiques',
      'Export PDF détaillé'
    ],
    timeline: '2024',
    team: ['Yakoubi Yamina'],
    compliance: {
      sharia: true,
      rgpd: true
    },
    achievements: [
      'Validation scholars internationaux',
      'Précision calculs 99.9%',
      'Interface multilingue'
    ],
    impact: 'Faciliter obligation religieuse Zakat pour musulmans mondiaux',
    priority: 'high',
    region: ['Mondial']
  },

  // INSTITUT CED ACADEMY
  {
    id: 'institut-ced-academy',
    title: 'Institut CED Academy',
    description: 'Plateforme éducative mondiale IA éthique avec 78 langues et certifications internationales',
    category: 'education',
    status: 'production',
    technologies: ['React', 'TypeScript', 'OpenAI GPT-4o', 'Claude 4.0', 'WebRTC'],
    features: [
      'Formations IA éthique 78 langues',
      'Certifications MIT/Stanford/Al-Azhar',
      'Classes virtuelles temps réel',
      'Fiqh informatique intégré',
      'Traducteur IA multilingue',
      'École arabe premium',
      'Calligraphie interactive'
    ],
    metrics: {
      users: 41343,
      countries: 78,
      languages: 78,
      certifications: 156
    },
    timeline: '2024-2027',
    team: ['Yakoubi Yamina', 'Équipe internationale'],
    compliance: {
      sharia: true,
      rgpd: true
    },
    urls: {
      demo: '/institut-ced',
      documentation: '/academy-docs'
    },
    achievements: [
      'Leader mondial Fiqh informatique',
      '45% part marché vs concurrents',
      '23456 règles tech halal validées',
      'Expansion 5 régions mondiales'
    ],
    impact: 'Former nouvelle génération développeurs éthiques musulmans',
    priority: 'high',
    region: ['Mondial', 'Golfe', 'Maghreb', 'Asie', 'Europe']
  },

  {
    id: 'super-iarp-pro',
    title: 'Super IARP Pro with HeardPower',
    description: 'IA responsable unifiée intégrant Claude 4.0, GPT-4o, Gemini Ultra avec filtrage halal',
    category: 'ai',
    status: 'production',
    technologies: ['Claude 4.0', 'GPT-4o', 'Gemini Ultra', 'LLaMA 3', 'DALL-E 3', 'Midjourney'],
    features: [
      'Intégration 20+ modèles IA',
      'Filtrage halal automatique',
      'Mode prière intégré',
      'Support 78+ langues',
      'Interface unifiée',
      'Conformité Fiqh informatique'
    ],
    timeline: '2024-2025',
    team: ['Yakoubi Yamina'],
    compliance: {
      sharia: true,
      rgpd: true
    },
    urls: {
      demo: '/super-iarp-pro'
    },
    achievements: [
      'Premier agrégateur IA halal',
      'Validation 150+ scholars',
      'Innovation mondiale unique'
    ],
    impact: 'Démocratiser IA éthique pour communauté musulmane mondiale',
    priority: 'high',
    region: ['Mondial']
  },

  {
    id: 'manuel-fiqh-informatique',
    title: 'Manuel Fiqh Informatique Complet',
    description: 'Manuel officiel 50+ pages pour étudiants musulmans mondiaux avec validation scholars',
    category: 'compliance',
    status: 'production',
    technologies: ['React', 'TypeScript', 'PDF Generation', 'Multi-language'],
    features: [
      '12 chapitres détaillés',
      '4 sources islamiques complètes',
      'Validation 150+ scholars',
      'Couverture 5 régions mondiales',
      'Téléchargement PDF',
      'Interface moderne'
    ],
    metrics: {
      users: 12800000,
      countries: 35
    },
    timeline: '2024',
    team: ['Yakoubi Yamina', 'Scholars internationaux'],
    compliance: {
      sharia: true,
      rgpd: true
    },
    urls: {
      demo: '/manuel-fiqh'
    },
    achievements: [
      'Premier manuel technique islamique',
      'Validation 4 écoles sunnites',
      'Méthodologie Salaf respectée'
    ],
    impact: 'Guider développeurs musulmans selon sources authentiques',
    priority: 'high',
    region: ['Golfe', 'Maghreb', 'Asie', 'Europe', 'Amériques']
  },

  // AL-AMAN CED TAKAFUL
  {
    id: 'al-aman-ced-takaful',
    title: 'Al-Aman CED Takaful',
    description: 'Système assurance islamique complet conforme principes Takaful',
    category: 'insurance',
    status: 'production',
    technologies: ['React', 'TypeScript', 'PostgreSQL', 'API Integration'],
    features: [
      'Principes Takaful authentiques',
      'Intégration banking seamless',
      'Gouvernance AAOIFI/IFSB',
      'Multi-région opérationnel',
      'Couverture famille complète'
    ],
    metrics: {
      users: 3247,
      revenue: 'CHF 850K'
    },
    timeline: '2024-2026',
    team: ['Yakoubi Yamina', 'Équipe Takaful'],
    compliance: {
      sharia: true,
      rgpd: true,
      aaoifi: true
    },
    achievements: [
      'Conformité Takaful 100%',
      'Intégration CED Bank',
      'Standards internationaux'
    ],
    impact: 'Assurance halal accessible communauté musulmane',
    priority: 'high',
    region: ['Suisse', 'UAE', 'Arabie Saoudite']
  },

  // TECHFORALL SOLIDARITÉ
  {
    id: 'techforall-association',
    title: 'TechForAll Association Suisse',
    description: 'Plateforme dons technologiques et construction écologique avec avantages fiscaux 75%',
    category: 'solidarity',
    status: 'development',
    technologies: ['React', 'TypeScript', 'Blockchain', 'IoT', 'GPS Tracking'],
    features: [
      'Dons technologiques refurb',
      'Construction écologique sociale',
      'Avantages fiscaux 75%',
      'Tracking transparent',
      'Marketplace solidaire',
      'Logistique temps réel'
    ],
    metrics: {
      users: 8492,
      countries: 25
    },
    timeline: '2024-2027',
    team: ['Brahim', 'Yakoubi Aziz', 'Yakoubi Karim', 'Souheila'],
    compliance: {
      sharia: true,
      rgpd: true
    },
    achievements: [
      'Association suisse constituée',
      'Partenariats internationaux',
      'Impact social mesurable'
    ],
    impact: 'Réduire fracture numérique par économie circulaire',
    priority: 'medium',
    region: ['Suisse', 'Europe', 'Afrique']
  },

  {
    id: 'costa-del-sol-boutique',
    title: 'Costa del Sol Boutique Solidaire',
    description: 'Boutique solidaire Espagne pour équipements technologiques reconditionnés',
    category: 'solidarity',
    status: 'development',
    technologies: ['React', 'E-commerce', 'Inventory Management'],
    features: [
      'Vente équipements reconditionnés',
      'Circuit économie circulaire',
      'Prix solidaires',
      'Garantie qualité',
      'Livraison Europe'
    ],
    timeline: '2025',
    team: ['Brahim', 'Hanane Kadjouf'],
    compliance: {
      sharia: true,
      rgpd: true
    },
    achievements: [
      'Modèle économique viable',
      'Partenariat fabricants',
      'Impact environnemental positif'
    ],
    impact: 'Démocratiser accès technologie via solidarité',
    priority: 'medium',
    region: ['Espagne', 'Europe']
  },

  // SANTÉ & JURIDIQUE
  {
    id: 'espace-sante-souheila',
    title: 'Espace Santé Souheila',
    description: 'Plateforme santé digitale avec Souheila Yakoubi-Ozel pour services médicaux éthiques',
    category: 'health',
    status: 'planning',
    technologies: ['React', 'TypeScript', 'Telemedicine', 'FHIR'],
    features: [
      'Télémédecine éthique',
      'Dossiers patients sécurisés',
      'Consultations multilingues',
      'Conformité médicale internationale'
    ],
    timeline: '2026-2027',
    team: ['Souheila Yakoubi-Ozel', 'Yakoubi Yamina'],
    compliance: {
      sharia: true,
      rgpd: true
    },
    achievements: [
      'Collaboration mère-fille établie',
      'Vision santé éthique'
    ],
    impact: 'Santé accessible conforme valeurs islamiques',
    priority: 'medium',
    region: ['Suisse', 'France', 'Golfe']
  },

  {
    id: 'juridique-hanae-denise',
    title: 'Juridique Hanaé-Denise',
    description: 'Services juridiques spécialisés avec Hanaé-Denise Ozel pour conformité internationale',
    category: 'legal',
    status: 'planning',
    technologies: ['React', 'Document Management', 'Legal Tech'],
    features: [
      'Conseil juridique spécialisé',
      'Conformité internationale',
      'Gestion contrats automatisée',
      'Veille réglementaire'
    ],
    timeline: '2026-2027',
    team: ['Hanaé-Denise Ozel', 'Yakoubi Yamina'],
    compliance: {
      sharia: true,
      rgpd: true
    },
    achievements: [
      'Expertise juridique famille',
      'Succession planifiée'
    ],
    impact: 'Sécuriser juridiquement écosystème CED',
    priority: 'medium',
    region: ['Europe', 'Suisse', 'International']
  },

  // INNOVATIONS FUTURES
  {
    id: 'quantum-halal-trading',
    title: 'Quantum Halal Trading',
    description: 'Premier système trading quantique conforme Sharia avec IA prédictive',
    category: 'innovation',
    status: 'planning',
    technologies: ['Quantum Computing', 'AI/ML', 'Blockchain', 'Real-time Analytics'],
    features: [
      'Algorithmes quantiques halal',
      'Prédiction marchés éthiques',
      'Conformité Sharia temps réel',
      'Zero-latency trading'
    ],
    timeline: '2027-2030',
    team: ['Yakoubi Yamina', 'Équipe Quantum'],
    compliance: {
      sharia: true,
      rgpd: true
    },
    achievements: [
      'Recherche quantique avancée',
      'Partenariats technologiques'
    ],
    impact: 'Révolutionner trading avec technologie quantique halal',
    priority: 'low',
    region: ['Mondial']
  },

  {
    id: 'neural-islamic-banking',
    title: 'Neural Islamic Banking',
    description: 'IA spirituelle pour conseil financier personnalisé conforme Sharia',
    category: 'innovation',
    status: 'planning',
    technologies: ['Neural Networks', 'NLP', 'Spiritual AI', 'Islamic Finance'],
    features: [
      'Conseil financier IA spirituelle',
      'Personnalisation selon Fiqh',
      'Apprentissage préférences religieuses',
      'Guidance investissement halal'
    ],
    timeline: '2027-2029',
    team: ['Yakoubi Yamina', 'Équipe IA'],
    compliance: {
      sharia: true,
      rgpd: true
    },
    achievements: [
      'Prototype IA spirituelle',
      'Validation scholars'
    ],
    impact: 'Banking intelligent guidé par valeurs islamiques',
    priority: 'low',
    region: ['Mondial']
  },

  {
    id: 'metaverse-hajj',
    title: 'Metaverse Hajj Experience',
    description: 'Pèlerinage virtuel immersif pour préparation et éducation Hajj',
    category: 'innovation',
    status: 'planning',
    technologies: ['VR/AR', 'Metaverse', '3D Modeling', 'Spatial Audio'],
    features: [
      'Kaaba virtuelle réaliste',
      'Rituels Hajj guidés',
      'Préparation spirituelle',
      'Éducation multilingue'
    ],
    timeline: '2028-2030',
    team: ['Yakoubi Yamina', 'Équipe VR'],
    compliance: {
      sharia: true,
      rgpd: true
    },
    achievements: [
      'Vision métaverse islamique',
      'Partenariats Arabie Saoudite'
    ],
    impact: 'Démocratiser préparation Hajj via technologie immersive',
    priority: 'low',
    region: ['Mondial', 'Arabie Saoudite']
  }
];

export const getProjectsByCategory = (category: PortfolioProject['category']) => {
  return portfolioProjects.filter(project => project.category === category);
};

export const getProjectsByStatus = (status: PortfolioProject['status']) => {
  return portfolioProjects.filter(project => project.status === status);
};

export const getProjectsByPriority = (priority: PortfolioProject['priority']) => {
  return portfolioProjects.filter(project => project.priority === priority);
};

export const getPortfolioStats = () => {
  const totalProjects = portfolioProjects.length;
  const productionProjects = portfolioProjects.filter(p => p.status === 'production').length;
  const totalUsers = portfolioProjects.reduce((sum, p) => sum + (p.metrics?.users || 0), 0);
  const totalCountries = Math.max(...portfolioProjects.map(p => p.metrics?.countries || 0));
  const totalLanguages = Math.max(...portfolioProjects.map(p => p.metrics?.languages || 0));
  
  const uniqueCategories = Array.from(new Set(portfolioProjects.map(p => p.category)));
  const categoriesCount = uniqueCategories.length;
  
  return {
    totalProjects,
    productionProjects,
    totalUsers,
    totalCountries,
    totalLanguages,
    categoriesCount,
    shariaCompliant: portfolioProjects.filter(p => p.compliance.sharia).length
  };
};