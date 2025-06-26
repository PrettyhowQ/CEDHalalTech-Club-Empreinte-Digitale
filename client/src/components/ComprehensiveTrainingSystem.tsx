import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  GraduationCap, 
  Brain, 
  Globe, 
  Code, 
  Shield, 
  DollarSign, 
  Users,
  Star,
  Clock,
  Award,
  BookOpen,
  Video,
  FileText,
  CheckCircle,
  PlayCircle,
  Download,
  MessageSquare,
  Target,
  TrendingUp,
  Database,
  Smartphone,
  Zap,
  Building2,
  Heart,
  Calculator,
  Briefcase,
  Settings,
  Lock,
  Search,
  Filter,
  Calendar,
  Trophy,
  Headphones,
  Languages,
  Map,
  Camera,
  Mic,
  AlertTriangle
} from 'lucide-react';

interface TrainingModule {
  id: string;
  title: string;
  category: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  duration: string;
  participants: number;
  rating: number;
  price: number;
  currency: string;
  instructor: string;
  language: string[];
  description: string;
  objectives: string[];
  prerequisites: string[];
  syllabus: {
    module: string;
    duration: string;
    topics: string[];
  }[];
  certifications: string[];
  tools: string[];
  practicalProjects: string[];
  assessment: {
    type: string;
    duration: string;
    passingScore: number;
  };
  support: string[];
  materials: string[];
  schedule: {
    format: 'Live' | 'Self-paced' | 'Hybrid';
    startDate: string;
    endDate: string;
    weeklyHours: number;
  };
}

export function ComprehensiveTrainingSystem() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const trainingModules: TrainingModule[] = [
    {
      id: 'iarp-pro-advanced',
      title: 'Super IARP Pro - Intelligence Artificielle Éthique Avancée',
      category: 'IA Éthique',
      level: 'Avancé',
      duration: '180 heures (6 mois)',
      participants: 2847,
      rating: 4.9,
      price: 2499,
      currency: 'EUR',
      instructor: 'Dr. Yakoubi Yamina + Équipe Experts IA',
      language: ['Français', 'Arabe', 'Anglais', 'Espagnol', 'Allemand'],
      description: 'Formation complète sur l\'intelligence artificielle éthique avec conformité Sharia, développement de modèles responsables, et applications pratiques dans le secteur financier islamique.',
      objectives: [
        'Maîtriser les principes fondamentaux de l\'IA éthique',
        'Développer des modèles IA conformes aux principes islamiques',
        'Implémenter des systèmes de détection de biais',
        'Créer des algorithmes transparents et explicables',
        'Gérer les aspects légaux et réglementaires de l\'IA',
        'Construire des solutions IA pour la finance islamique'
      ],
      prerequisites: [
        'Connaissances de base en programmation (Python/JavaScript)',
        'Notions mathématiques (algèbre linéaire, statistiques)',
        'Compréhension des principes islamiques de base',
        'Expérience avec les bases de données'
      ],
      syllabus: [
        {
          module: 'Module 1: Fondements IA Éthique (30h)',
          duration: '30 heures',
          topics: [
            'Histoire et évolution de l\'IA éthique',
            'Principes islamiques appliqués à la technologie',
            'Biais algorithmiques et détection',
            'Transparence et explicabilité',
            'Gouvernance de l\'IA',
            'Cadres réglementaires internationaux'
          ]
        },
        {
          module: 'Module 2: Développement Pratique (45h)',
          duration: '45 heures',
          topics: [
            'Architecture de modèles éthiques',
            'Preprocessing des données halal',
            'Algorithmes d\'apprentissage responsable',
            'Tests et validation éthique',
            'Monitoring en production',
            'Métriques de fairness'
          ]
        },
        {
          module: 'Module 3: Finance Islamique & IA (45h)',
          duration: '45 heures',
          topics: [
            'Principes Sharia en finance',
            'Modèles de risque halal',
            'Détection fraude conforme',
            'Scoring crédit éthique',
            'Robo-advisors islamiques',
            'Blockchain et DeFi halal'
          ]
        },
        {
          module: 'Module 4: Projet Final (60h)',
          duration: '60 heures',
          topics: [
            'Conception système complet',
            'Développement en équipe',
            'Tests utilisateurs réels',
            'Documentation technique',
            'Présentation publique',
            'Déploiement production'
          ]
        }
      ],
      certifications: [
        'Certificat CED Academy - IA Éthique Avancée',
        'Certification internationale AAOIFI Tech',
        'Badge MIT Professional Education',
        'Reconnaissance Al-Azhar University',
        'Certification Stanford AI Ethics'
      ],
      tools: [
        'Python (TensorFlow, PyTorch)',
        'Jupyter Notebooks',
        'Docker & Kubernetes',
        'MongoDB & PostgreSQL',
        'Git & GitHub',
        'MLflow & Weights & Biases',
        'Streamlit & FastAPI',
        'AWS/Azure ML Services'
      ],
      practicalProjects: [
        'Système de détection de transactions suspectes halal',
        'Chatbot conseil financier islamique',
        'Modèle d\'évaluation risque Sharia-compliant',
        'Plateforme recommendation investissements halal',
        'Dashboard analytics éthique temps réel'
      ],
      assessment: {
        type: 'Projet final + Examen théorique + Soutenance orale',
        duration: '4 heures',
        passingScore: 80
      },
      support: [
        'Mentorat individuel hebdomadaire',
        'Forum communautaire 24/7',
        'Sessions Q&A en direct',
        'Support technique prioritaire',
        'Accès bibliothèque recherche',
        'Networking événements'
      ],
      materials: [
        'Cours vidéo HD (180h)',
        'Ebooks et ressources PDF',
        'Datasets d\'entraînement',
        'Code templates et boilerplates',
        'Outils d\'évaluation automatique',
        'Accès laboratoire cloud'
      ],
      schedule: {
        format: 'Hybrid',
        startDate: '2025-07-01',
        endDate: '2025-12-31',
        weeklyHours: 8
      }
    },
    {
      id: 'banking-halal-complete',
      title: 'Banking Halal Complet - Fintech Islamique Professionnelle',
      category: 'Fintech Islamique',
      level: 'Expert',
      duration: '240 heures (8 mois)',
      participants: 1456,
      rating: 4.8,
      price: 3499,
      currency: 'EUR',
      instructor: 'Équipe CED Bank + Scholars Internationaux',
      language: ['Arabe', 'Français', 'Anglais'],
      description: 'Formation complète sur le développement de systèmes bancaires conformes à la Sharia, couvrant tous les aspects techniques, réglementaires et théologiques.',
      objectives: [
        'Maîtriser les principes fondamentaux de la finance islamique',
        'Développer des systèmes bancaires 100% halal',
        'Comprendre les réglementations internationales',
        'Implémenter des solutions de conformité Sharia',
        'Gérer les aspects sécuritaires bancaires',
        'Créer des produits financiers innovants halal'
      ],
      prerequisites: [
        'Expérience développement logiciel (2+ ans)',
        'Connaissances finance traditionnelle',
        'Bases théologiques islamiques solides',
        'Maîtrise sécurité informatique'
      ],
      syllabus: [
        {
          module: 'Module 1: Fondements Finance Islamique (40h)',
          duration: '40 heures',
          topics: [
            'Principes Coran et Sunna en finance',
            'Interdiction Riba (intérêt)',
            'Contrats islamiques (Murabaha, Ijara, etc.)',
            'Système Takaful (assurance islamique)',
            'Zakat et redistribution',
            'Marchés financiers islamiques'
          ]
        },
        {
          module: 'Module 2: Architecture Technique (60h)',
          duration: '60 heures',
          topics: [
            'Microservices bancaires',
            'APIs RESTful sécurisées',
            'Bases de données distribuées',
            'Blockchain pour transparence',
            'Chiffrement end-to-end',
            'Tests automatisés complets'
          ]
        },
        {
          module: 'Module 3: Conformité Réglementaire (60h)',
          duration: '60 heures',
          topics: [
            'Standards AAOIFI complets',
            'Réglementations IFSB',
            'KYC/AML islamique',
            'Reporting réglementaire',
            'Audit Sharia Board',
            'Gouvernance risques'
          ]
        },
        {
          module: 'Module 4: Développement Plateforme (80h)',
          duration: '80 heures',
          topics: [
            'Frontend responsive complet',
            'Backend haute performance',
            'Intégrations tiers (SWIFT, etc.)',
            'Mobile apps natives',
            'Analytics temps réel',
            'Déploiement production'
          ]
        }
      ],
      certifications: [
        'Certification CED Bank Professional',
        'AAOIFI Sharia Finance Technology',
        'IFSB Islamic Banking Systems',
        'CAMS Anti-Money Laundering',
        'AWS Certified Solutions Architect'
      ],
      tools: [
        'Java Spring Boot / Node.js',
        'React / Angular',
        'PostgreSQL / MongoDB',
        'Docker / Kubernetes',
        'SWIFT Network APIs',
        'Blockchain (Ethereum, Hyperledger)',
        'Monitoring (Prometheus, Grafana)',
        'Security (OAuth2, JWT, HSM)'
      ],
      practicalProjects: [
        'Plateforme banking complète multi-devises',
        'Système conformité Sharia automatisé',
        'Mobile banking app native',
        'Dashboard analytics directeur',
        'API marketplace produits halal'
      ],
      assessment: {
        type: 'Portfolio projets + Certification externe + Audit code',
        duration: '8 heures réparties',
        passingScore: 85
      },
      support: [
        'Mentorat expert senior',
        'Code reviews personnalisées',
        'Accès sandbox bancaire',
        'Sessions scholars théologie',
        'Networking professionnels',
        'Placement emploi garanti'
      ],
      materials: [
        'Cours magistraux HD (240h)',
        'Documentation technique complète',
        'Code source exemples réels',
        'Simulateurs bancaires',
        'Bibliothèque réglementaire',
        'Accès environnements test'
      ],
      schedule: {
        format: 'Live',
        startDate: '2025-08-01',
        endDate: '2026-04-30',
        weeklyHours: 10
      }
    },
    {
      id: 'mobile-development-complete',
      title: 'Développement Mobile Complet - Apps Natives Professionnelles',
      category: 'Développement Mobile',
      level: 'Intermédiaire',
      duration: '120 heures (4 mois)',
      participants: 3241,
      rating: 4.7,
      price: 1899,
      currency: 'EUR',
      instructor: 'Équipe Mobile CED + Google Developers',
      language: ['Français', 'Anglais', 'Arabe'],
      description: 'Formation complète développement d\'applications mobiles natives iOS et Android, avec focus sur les apps financières et éducatives conformes aux standards internationaux.',
      objectives: [
        'Maîtriser React Native et Flutter',
        'Développer apps iOS et Android natives',
        'Implémenter sécurité mobile avancée',
        'Intégrer APIs et services cloud',
        'Optimiser performance et UX',
        'Publier sur App Store et Google Play'
      ],
      prerequisites: [
        'Bases programmation (JavaScript/Dart)',
        'Compréhension concepts mobile',
        'Expérience APIs REST',
        'Notions design UI/UX'
      ],
      syllabus: [
        {
          module: 'Module 1: Fondamentaux Mobile (30h)',
          duration: '30 heures',
          topics: [
            'Architecture applications mobiles',
            'React Native vs Flutter',
            'Navigation et routing',
            'State management avancé',
            'Composants réutilisables',
            'Responsive design mobile'
          ]
        },
        {
          module: 'Module 2: Fonctionnalités Avancées (30h)',
          duration: '30 heures',
          topics: [
            'Authentification biométrique',
            'Push notifications',
            'Stockage local sécurisé',
            'Caméra et géolocalisation',
            'Payments intégrés',
            'Offline-first architecture'
          ]
        },
        {
          module: 'Module 3: Backend & APIs (30h)',
          duration: '30 heures',
          topics: [
            'Intégrations RESTful',
            'GraphQL pour mobile',
            'Authentification JWT',
            'Sync données temps réel',
            'Gestion erreurs réseau',
            'Cache et optimisations'
          ]
        },
        {
          module: 'Module 4: Publication & Distribution (30h)',
          duration: '30 heures',
          topics: [
            'Préparation App Store',
            'Google Play Console',
            'Tests automatisés mobile',
            'CI/CD pour mobile',
            'Analytics et crashlytics',
            'Maintenance post-lancement'
          ]
        }
      ],
      certifications: [
        'Certificat CED Mobile Developer',
        'Google Associate Android Developer',
        'Apple iOS App Development',
        'React Native Certified',
        'Flutter Certified Developer'
      ],
      tools: [
        'React Native / Flutter',
        'Xcode / Android Studio',
        'Firebase / AWS Amplify',
        'Fastlane / CodePush',
        'Flipper / React DevTools',
        'Jest / Detox testing',
        'Figma / Sketch',
        'Git / GitHub Actions'
      ],
      practicalProjects: [
        'App banking mobile complète',
        'Application e-learning interactive',
        'Marketplace mobile avec paiements',
        'App social networking',
        'Jeu mobile avec monetization'
      ],
      assessment: {
        type: 'Apps portfolio + Code review + Soutenance',
        duration: '3 heures',
        passingScore: 75
      },
      support: [
        'Code reviews hebdomadaires',
        'Sessions debugging assistées',
        'Accès devices test',
        'Mentorat développeurs senior',
        'Forum communauté active',
        'Aide publication stores'
      ],
      materials: [
        'Cours vidéo pratiques (120h)',
        'Templates apps starter',
        'Design systems complets',
        'Guides publication détaillés',
        'Outils développement inclus',
        'Accès beta testing'
      ],
      schedule: {
        format: 'Hybrid',
        startDate: '2025-09-01',
        endDate: '2025-12-31',
        weeklyHours: 8
      }
    },
    {
      id: 'blockchain-halal-advanced',
      title: 'Blockchain Halal & DeFi Islamique - Technologies Distribuées',
      category: 'Blockchain',
      level: 'Expert',
      duration: '160 heures (5 mois)',
      participants: 876,
      rating: 4.9,
      price: 2899,
      currency: 'EUR',
      instructor: 'Experts Blockchain + Scholars Sharia',
      language: ['Français', 'Anglais', 'Arabe'],
      description: 'Formation experte sur les technologies blockchain appliquées aux principes islamiques, développement de smart contracts halal et création d\'écosystèmes DeFi conformes Sharia.',
      objectives: [
        'Maîtriser les technologies blockchain avancées',
        'Développer smart contracts conformes Sharia',
        'Créer protocoles DeFi islamiques',
        'Implémenter gouvernance décentralisée halal',
        'Gérer tokenomics éthiques',
        'Auditer sécurité blockchain'
      ],
      prerequisites: [
        'Programmation Solidity/Rust',
        'Connaissances cryptographie',
        'Principes finance islamique',
        'Expérience systèmes distribués'
      ],
      syllabus: [
        {
          module: 'Module 1: Blockchain Fundamentals (40h)',
          duration: '40 heures',
          topics: [
            'Architecture blockchain avancée',
            'Consensus mechanisms halal',
            'Cryptographie et hachage',
            'Réseaux peer-to-peer',
            'Scalabilité et performance',
            'Interopérabilité chaînes'
          ]
        },
        {
          module: 'Module 2: Smart Contracts Halal (40h)',
          duration: '40 heures',
          topics: [
            'Solidity avancé conforme Sharia',
            'Patterns contracts islamiques',
            'Oracles et prix halal',
            'Tests automatisés complets',
            'Optimisation gas fees',
            'Sécurité et audits'
          ]
        },
        {
          module: 'Module 3: DeFi Islamique (40h)',
          duration: '40 heures',
          topics: [
            'Protocoles lending sans intérêt',
            'AMM et liquidity pools halal',
            'Yield farming éthique',
            'Staking et governance tokens',
            'Insurance décentralisée Takaful',
            'Cross-chain bridges sécurisés'
          ]
        },
        {
          module: 'Module 4: Déploiement Production (40h)',
          duration: '40 heures',
          topics: [
            'Mainnet deployment strategies',
            'Monitoring et maintenance',
            'Governance on-chain',
            'Tokenomics et distribution',
            'Conformité réglementaire',
            'Community building'
          ]
        }
      ],
      certifications: [
        'CED Blockchain Halal Expert',
        'Ethereum Developer Certification',
        'Hyperledger Fabric Certified',
        'Chainlink Developer Expert',
        'Islamic Finance Technology'
      ],
      tools: [
        'Solidity / Rust',
        'Hardhat / Foundry',
        'Web3.js / Ethers.js',
        'IPFS / Arweave',
        'The Graph Protocol',
        'OpenZeppelin Contracts',
        'Chainlink Oracles',
        'MetaMask / WalletConnect'
      ],
      practicalProjects: [
        'Protocole lending islamique complet',
        'DEX halal avec AMM',
        'DAO governance Sharia-compliant',
        'NFT marketplace éthique',
        'Stablecoin backed by commodities'
      ],
      assessment: {
        type: 'Protocole live + Code audit + Technical whitepaper',
        duration: '6 heures',
        passingScore: 85
      },
      support: [
        'Mentoring blockchain experts',
        'Code reviews sécurité',
        'Testnet credits inclus',
        'Smart contract audits',
        'Venture capital introductions',
        'Ecosystem partnerships'
      ],
      materials: [
        'Cours techniques approfondis',
        'Smart contracts templates',
        'Security audit checklists',
        'Regulatory compliance guides',
        'Testnet environments',
        'Developer tool access'
      ],
      schedule: {
        format: 'Live',
        startDate: '2025-09-15',
        endDate: '2026-02-15',
        weeklyHours: 8
      }
    },
    {
      id: 'cybersecurity-islamic-finance',
      title: 'Cybersécurité Finance Islamique - Protection Systèmes Critiques',
      category: 'Sécurité',
      level: 'Expert',
      duration: '200 heures (6 mois)',
      participants: 987,
      rating: 4.8,
      price: 2799,
      currency: 'EUR',
      instructor: 'Experts Cybersécurité Internationaux',
      language: ['Français', 'Anglais', 'Arabe'],
      description: 'Formation experte en cybersécurité spécialement conçue pour les institutions financières islamiques, couvrant protection des actifs numériques halal et conformité réglementaire.',
      objectives: [
        'Sécuriser systèmes bancaires islamiques',
        'Implémenter défense multicouche',
        'Gérer incidents sécurité critiques',
        'Auditer conformité Sharia tech',
        'Protéger données clients confidentielles',
        'Mettre en place threat intelligence'
      ],
      prerequisites: [
        'Expérience cybersécurité (3+ ans)',
        'Connaissances systèmes bancaires',
        'Bases réglementations financières',
        'Compréhension principes islamiques'
      ],
      syllabus: [
        {
          module: 'Module 1: Sécurité Banking Islamique (50h)',
          duration: '50 heures',
          topics: [
            'Threat landscape finance islamique',
            'SWIFT network security',
            'PCI DSS pour institutions halal',
            'Fraud detection algorithms',
            'Anti-money laundering systems',
            'Digital forensics bancaires'
          ]
        },
        {
          module: 'Module 2: Infrastructure Security (50h)',
          duration: '50 heures',
          topics: [
            'Network segmentation avancée',
            'Zero trust architecture',
            'Cloud security (AWS/Azure)',
            'Container security (Docker/K8s)',
            'API gateway protection',
            'Database encryption at rest'
          ]
        },
        {
          module: 'Module 3: Application Security (50h)',
          duration: '50 heures',
          topics: [
            'Secure coding practices',
            'Penetration testing mobile apps',
            'Web application firewalls',
            'OAuth2 & JWT security',
            'Session management secure',
            'Input validation & sanitization'
          ]
        },
        {
          module: 'Module 4: Compliance & Governance (50h)',
          duration: '50 heures',
          topics: [
            'ISO 27001 pour fintech islamique',
            'GDPR et données personnelles',
            'CISA cybersecurity framework',
            'Risk assessment méthodologies',
            'Business continuity planning',
            'Incident response procedures'
          ]
        }
      ],
      certifications: [
        'CISSP (Certified Information Systems Security Professional)',
        'CISM (Certified Information Security Manager)',
        'CEH (Certified Ethical Hacker)',
        'GCIH (GIAC Certified Incident Handler)',
        'Islamic Finance Cybersecurity Specialist'
      ],
      tools: [
        'Kali Linux / Parrot OS',
        'Wireshark / Nmap',
        'Metasploit Framework',
        'Burp Suite Professional',
        'Splunk Enterprise Security',
        'QRadar SIEM',
        'Nessus Professional',
        'OWASP ZAP'
      ],
      practicalProjects: [
        'Audit sécurité banque islamique complète',
        'Implémentation SOC 24/7',
        'Penetration testing apps mobiles',
        'Plan réponse incidents critiques',
        'Framework conformité multi-juridictions'
      ],
      assessment: {
        type: 'Certifications externes + Projets réels + Audit technique',
        duration: '12 heures réparties',
        passingScore: 85
      },
      support: [
        'Mentoring experts CISSP/CISM',
        'Labs virtuels haute fidélité',
        'Simulations cyberattaques réelles',
        'Career coaching sécurité',
        'Networking événements exclusifs',
        'Certification vouchers inclus'
      ],
      materials: [
        'Cours magistraux experts (200h)',
        'Labs pratiques immersifs',
        'Documentation standards à jour',
        'Outils sécurité professionnels',
        'Environments simulation réalistes',
        'Exam preparation materials'
      ],
      schedule: {
        format: 'Live',
        startDate: '2025-08-15',
        endDate: '2026-02-15',
        weeklyHours: 8
      }
    },
    {
      id: 'data-science-islamic-advanced',
      title: 'Data Science Islamique Avancée - ML & Analytics Éthiques',
      category: 'Data Science',
      level: 'Avancé',
      duration: '180 heures (6 mois)',
      participants: 1876,
      rating: 4.9,
      price: 2399,
      currency: 'EUR',
      instructor: 'Data Scientists PhD + Scholars Islamiques',
      language: ['Français', 'Anglais', 'Arabe'],
      description: 'Formation avancée en science des données avec focus sur l\'éthique islamique, algorithmes transparents, et applications pratiques pour secteurs financiers et éducatifs halal.',
      objectives: [
        'Développer modèles ML éthiques avancés',
        'Implémenter fairness algorithms',
        'Créer systèmes recommandation halal',
        'Maîtriser deep learning responsable',
        'Analyser big data avec conformité Sharia',
        'Déployer solutions ML en production'
      ],
      prerequisites: [
        'Python avancé et statistiques',
        'Machine learning fondamentaux',
        'Algèbre linéaire et calcul',
        'Connaissances principes islamiques'
      ],
      syllabus: [
        {
          module: 'Module 1: ML Avancé Éthique (45h)',
          duration: '45 heures',
          topics: [
            'Deep learning architectures éthiques',
            'Transformer models explicables',
            'Bias detection & mitigation',
            'Fairness metrics avancées',
            'Adversarial machine learning',
            'Federated learning privacy-preserving'
          ]
        },
        {
          module: 'Module 2: NLP & Computer Vision (45h)',
          duration: '45 heures',
          topics: [
            'BERT/GPT pour textes arabes',
            'Sentiment analysis multilingue',
            'Named entity recognition Islamic',
            'Computer vision halal content',
            'Speech recognition Arabic dialects',
            'Multimodal learning applications'
          ]
        },
        {
          module: 'Module 3: Finance & Business Analytics (45h)',
          duration: '45 heures',
          topics: [
            'Algorithmic trading halal strategies',
            'Risk modeling Sharia-compliant',
            'Customer lifetime value Islamic',
            'Fraud detection advanced techniques',
            'Portfolio optimization ethical',
            'Real-time streaming analytics'
          ]
        },
        {
          module: 'Module 4: MLOps & Production (45h)',
          duration: '45 heures',
          topics: [
            'ML pipelines automation',
            'Model monitoring & drift detection',
            'A/B testing ethical frameworks',
            'Kubernetes ML deployments',
            'CI/CD for machine learning',
            'Scalable inference systems'
          ]
        }
      ],
      certifications: [
        'CED Advanced Data Scientist',
        'TensorFlow Developer Certification',
        'AWS Machine Learning Specialty',
        'Google Cloud ML Engineer',
        'Microsoft Azure AI Engineer'
      ],
      tools: [
        'Python (TensorFlow, PyTorch, Scikit-learn)',
        'R / Julia',
        'Apache Spark / Dask',
        'Kubernetes / Docker',
        'MLflow / Weights & Biases',
        'Apache Airflow',
        'Elasticsearch / Kibana',
        'Tableau / PowerBI'
      ],
      practicalProjects: [
        'Système crédit scoring islamique ML',
        'Chatbot support multilingue arabe',
        'Recommandation investissements halal',
        'Détection fraude temps réel',
        'Analytics prédictive business intelligence'
      ],
      assessment: {
        type: 'Portfolio ML + Kaggle competition + Research paper',
        duration: '6 heures',
        passingScore: 80
      },
      support: [
        'Mentoring PhD data scientists',
        'Code reviews ML spécialisées',
        'Computing credits cloud illimités',
        'Datasets premium access',
        'Research collaboration opportunities',
        'Industry placement garanteed'
      ],
      materials: [
        'Cours vidéo HD (180h)',
        'Jupyter notebooks interactifs',
        'Real-world datasets',
        'Research papers library',
        'Cloud environments pre-configured',
        'Professional tools licenses'
      ],
      schedule: {
        format: 'Hybrid',
        startDate: '2025-07-15',
        endDate: '2026-01-15',
        weeklyHours: 8
      }
    }
  ];

  const categories = ['all', 'IA Éthique', 'Fintech Islamique', 'Développement Mobile', 'Blockchain', 'Sécurité', 'Data Science'];
  const levels = ['all', 'Débutant', 'Intermédiaire', 'Avancé', 'Expert'];

  const filteredModules = trainingModules.filter(module => {
    const matchesCategory = selectedCategory === 'all' || module.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || module.level === selectedLevel;
    const matchesSearch = module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         module.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CED Academy - Formations Approfondies
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            Formations professionnelles de niveau international avec certifications reconnues
          </p>
          <div className="flex items-center justify-center gap-4">
            <Badge variant="outline" className="text-blue-700 border-blue-300">
              78+ Langues Supportées
            </Badge>
            <Badge variant="outline" className="text-green-700 border-green-300">
              100% Conformité Sharia
            </Badge>
            <Badge variant="outline" className="text-purple-700 border-purple-300">
              Certifications Internationales
            </Badge>
          </div>
        </div>

        {/* Statistiques Globales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-blue-600">34,222</p>
                  <p className="text-sm text-gray-600">Apprenants Actifs</p>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-green-600">95%</p>
                  <p className="text-sm text-gray-600">Taux Réussite</p>
                </div>
                <Trophy className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-purple-600">156</p>
                  <p className="text-sm text-gray-600">Formations Disponibles</p>
                </div>
                <BookOpen className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-orange-600">4.8/5</p>
                  <p className="text-sm text-gray-600">Satisfaction Moyenne</p>
                </div>
                <Star className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filtres et Recherche */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Rechercher une formation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-3 py-2 border rounded-lg w-64"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border rounded-lg"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat === 'all' ? 'Toutes Catégories' : cat}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-gray-500" />
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-3 py-2 border rounded-lg"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>
                      {level === 'all' ? 'Tous Niveaux' : level}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Liste des Formations Détaillées */}
        <div className="space-y-8">
          {filteredModules.map((module) => (
            <Card key={module.id} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{module.title}</CardTitle>
                    <CardDescription className="text-base mb-4">{module.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">{module.category}</Badge>
                      <Badge variant="outline">{module.level}</Badge>
                      <Badge variant="outline">{module.duration}</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm">{module.rating}</span>
                        <span className="text-sm text-gray-500">({module.participants} participants)</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {module.language.map((lang, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">{lang}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-blue-600">{module.price}€</p>
                    <p className="text-sm text-gray-600">Instructeur:</p>
                    <p className="text-sm font-medium">{module.instructor}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <Tabs defaultValue="overview" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-6">
                    <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
                    <TabsTrigger value="syllabus">Programme</TabsTrigger>
                    <TabsTrigger value="projects">Projets</TabsTrigger>
                    <TabsTrigger value="certifications">Certifications</TabsTrigger>
                    <TabsTrigger value="support">Support</TabsTrigger>
                    <TabsTrigger value="schedule">Planning</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Target className="h-4 w-4 text-green-600" />
                          Objectifs d'Apprentissage
                        </h4>
                        <ul className="space-y-2">
                          {module.objectives.map((obj, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {obj}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-600" />
                          Prérequis
                        </h4>
                        <ul className="space-y-2">
                          {module.prerequisites.map((prereq, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              {prereq}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Settings className="h-4 w-4 text-purple-600" />
                        Outils et Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {module.tools.map((tool, index) => (
                          <Badge key={index} variant="secondary">{tool}</Badge>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="syllabus" className="space-y-4">
                    {module.syllabus.map((syllabusModule, index) => (
                      <Card key={index} className="border-l-4 border-l-blue-500">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-blue-600" />
                            {syllabusModule.module}
                          </CardTitle>
                          <CardDescription>
                            <Clock className="h-4 w-4 inline mr-1" />
                            Durée: {syllabusModule.duration}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {syllabusModule.topics.map((topic, topicIndex) => (
                              <div key={topicIndex} className="flex items-center gap-2">
                                <PlayCircle className="h-4 w-4 text-green-500" />
                                <span className="text-sm">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="projects" className="space-y-4">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Code className="h-4 w-4 text-purple-600" />
                      Projets Pratiques Professionnels
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {module.practicalProjects.map((project, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                          <CardContent className="pt-4">
                            <div className="flex items-start gap-3">
                              <Building2 className="h-5 w-5 text-purple-500 mt-1" />
                              <div>
                                <h5 className="font-medium mb-2">{project}</h5>
                                <p className="text-sm text-gray-600">
                                  Projet avec code source complet, tests, documentation et déploiement production
                                </p>
                                <div className="flex gap-2 mt-2">
                                  <Badge variant="outline" className="text-xs">Code Source</Badge>
                                  <Badge variant="outline" className="text-xs">Documentation</Badge>
                                  <Badge variant="outline" className="text-xs">Tests</Badge>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="certifications" className="space-y-4">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4 text-yellow-600" />
                      Certifications Internationales
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {module.certifications.map((cert, index) => (
                        <Card key={index} className="border-l-4 border-l-yellow-500">
                          <CardContent className="pt-4">
                            <div className="flex items-center gap-3">
                              <Trophy className="h-5 w-5 text-yellow-500" />
                              <div>
                                <h5 className="font-medium">{cert}</h5>
                                <p className="text-sm text-gray-600">Certification reconnue internationalement</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
                      <CardContent className="pt-4">
                        <div className="flex items-center gap-3">
                          <Award className="h-6 w-6 text-blue-600" />
                          <div>
                            <h5 className="font-semibold text-blue-800">Évaluation Finale</h5>
                            <p className="text-sm text-blue-700">{module.assessment.type}</p>
                            <div className="flex items-center gap-4 mt-2">
                              <span className="text-sm text-blue-600">
                                <Clock className="h-4 w-4 inline mr-1" />
                                Durée: {module.assessment.duration}
                              </span>
                              <span className="text-sm text-blue-600">
                                <Target className="h-4 w-4 inline mr-1" />
                                Score minimum: {module.assessment.passingScore}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="support" className="space-y-4">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Headphones className="h-4 w-4 text-green-600" />
                      Support et Accompagnement
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {module.support.map((supportItem, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                          <MessageSquare className="h-5 w-5 text-green-500" />
                          <span className="text-sm">{supportItem}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <FileText className="h-4 w-4 text-blue-600" />
                        Matériaux Pédagogiques
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {module.materials.map((material, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                            <Download className="h-5 w-5 text-blue-500" />
                            <span className="text-sm">{material}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="schedule" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-indigo-600" />
                            Planning Général
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span>Format:</span>
                            <Badge className="bg-indigo-100 text-indigo-800">{module.schedule.format}</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Début:</span>
                            <span className="font-semibold">{new Date(module.schedule.startDate).toLocaleDateString('fr-FR')}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Fin:</span>
                            <span className="font-semibold">{new Date(module.schedule.endDate).toLocaleDateString('fr-FR')}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Heures/semaine:</span>
                            <span className="font-semibold">{module.schedule.weeklyHours}h</span>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Languages className="h-5 w-5 text-green-600" />
                            Langues & Instructeur
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <span className="font-medium">Langues disponibles:</span>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {module.language.map((lang, index) => (
                                <Badge key={index} variant="outline">{lang}</Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <span className="font-medium">Instructeur principal:</span>
                            <p className="text-sm text-gray-600 mt-1">{module.instructor}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white flex-1 min-w-0">
                    <PlayCircle className="h-4 w-4 mr-2" />
                    S'inscrire Maintenant - {module.price}€
                  </Button>
                  <Button variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Brochure PDF
                  </Button>
                  <Button variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Conseiller Pédagogique
                  </Button>
                  <Button variant="outline">
                    <Video className="h-4 w-4 mr-2" />
                    Démo Gratuite
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Formations */}
        <Card className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="pt-8 pb-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                Prêt à transformer votre carrière avec nos formations d'excellence ?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Rejoignez plus de 34,000 professionnels qui ont fait confiance à CED Academy
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" variant="secondary">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Conseil Gratuit
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  Calendrier Formations
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}