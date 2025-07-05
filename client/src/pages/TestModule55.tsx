import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import ProtectionFooter from '@/components/ProtectionFooter';
import { 
  Search, 
  Play, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Star,
  Globe,
  Building,
  Shield,
  Calculator,
  Home,
  PlayCircle,
  Car,
  Users,
  TrendingUp,
  Banknote,
  Crown,
  Headphones,
  Heart,
  Scale,
  BookOpen,
  Smartphone,
  FileText,
  Settings,
  Award,
  MessageSquare,
  Target,
  Zap,
  Database,
  Code,
  Palette,
  Mic,
  Camera,
  Map,
  Calendar,
  Mail,
  Phone,
  ShoppingCart,
  Package,
  Truck,
  Plane,
  Hotel,
  Utensils,
  GraduationCap,
  Hospital,
  Leaf,
  Lightbulb,
  Briefcase,
  PieChart,
  BarChart,
  LineChart,
  Wifi,
  Lock,
  Key,
  Eye,
  CloudRain
} from 'lucide-react';

export default function TestModule55() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const modules = [
    // Catégorie Banking & Finance
    { 
      id: 1, 
      nom: "CED Bank", 
      status: "Opérationnel", 
      icon: Banknote, 
      color: "from-blue-600 to-indigo-700",
      href: "/ced-bank",
      category: "Banking & Finance",
      description: "Banking halal multi-devises 0% Riba",
      features: ["Comptes multi-devises", "Cartes 5 niveaux", "Transactions halal"]
    },
    { 
      id: 2, 
      nom: "Al-Aman Takaful", 
      status: "Opérationnel", 
      icon: Shield, 
      color: "from-green-600 to-emerald-700",
      href: "/al-aman-takaful",
      category: "Banking & Finance",
      description: "Assurance islamique famille complète",
      features: ["Couverture 55M CHF", "Conformité Sharia", "Protection famille"]
    },
    { 
      id: 3, 
      nom: "Comptabilité Islamique", 
      status: "Opérationnel", 
      icon: Calculator, 
      color: "from-emerald-600 to-green-700",
      href: "/comptabilite-islamique",
      category: "Banking & Finance",
      description: "Système comptable conforme AAOIFI",
      features: ["Double entrée", "Zakat automatique", "Rapports halal"]
    },
    { 
      id: 4, 
      nom: "Finance Islamique 100% Halal", 
      status: "Opérationnel", 
      icon: PieChart, 
      color: "from-purple-600 to-violet-700",
      href: "/finance-islamique-halal",
      category: "Banking & Finance",
      description: "Instruments financiers Sharia",
      features: ["Murabaha", "Ijara", "Musharaka"]
    },
    { 
      id: 5, 
      nom: "Convertisseur Devises & Zakat", 
      status: "Opérationnel", 
      icon: TrendingUp, 
      color: "from-orange-600 to-red-700",
      href: "/convertisseur-devise-zakat",
      category: "Banking & Finance",
      description: "Conversion temps réel + calcul Zakat",
      features: ["6 devises", "Nisab automatique", "Widgets premium"]
    },

    // Catégorie Éducation & Formation
    { 
      id: 6, 
      nom: "Institut CED Academy", 
      status: "Opérationnel", 
      icon: GraduationCap, 
      color: "from-cyan-600 to-blue-700",
      href: "/institut-ced-academy",
      category: "Éducation & Formation",
      description: "Plateforme éducative mondiale",
      features: ["34,522 étudiants", "67 pays", "78 langues"]
    },
    { 
      id: 7, 
      nom: "Bibliothèque Fiqh Informatique", 
      status: "Opérationnel", 
      icon: BookOpen, 
      color: "from-emerald-600 to-teal-700",
      href: "/bibliotheque-fiqh-informatique",
      category: "Éducation & Formation",
      description: "23,456 règles tech halal",
      features: ["4 domaines", "150+ scholars", "Sources authentiques"]
    },
    { 
      id: 8, 
      nom: "Manuel Fiqh Informatique", 
      status: "Opérationnel", 
      icon: FileText, 
      color: "from-indigo-600 to-purple-700",
      href: "/manuel-fiqh",
      category: "Éducation & Formation",
      description: "Manuel officiel 50+ pages",
      features: ["12 chapitres", "5 régions", "Validation scholars"]
    },
    { 
      id: 9, 
      nom: "Méthodes Apprentissage Islamique Tech", 
      status: "Opérationnel", 
      icon: Target, 
      color: "from-rose-600 to-pink-700",
      href: "/methodes-apprentissage-islamique-tech",
      category: "Éducation & Formation",
      description: "5 méthodes traditionnelles tech",
      features: ["Halaqah Numérique", "Ijaza Tech", "Munazara Tech"]
    },
    { 
      id: 10, 
      nom: "Méthodologie Étudiants Islamique", 
      status: "Opérationnel", 
      icon: Award, 
      color: "from-yellow-600 to-orange-700",
      href: "/methodologie-etudiants-islamique-tech",
      category: "Éducation & Formation",
      description: "Parcours 4 étapes progressives",
      features: ["Fondements", "Fiqh appliqué", "Leadership"]
    },

    // Catégorie Spiritualité & Coran
    { 
      id: 11, 
      nom: "Lecteur Coran Complet", 
      status: "Opérationnel", 
      icon: BookOpen, 
      color: "from-green-600 to-emerald-700",
      href: "/lecteur-coran-complet",
      category: "Spiritualité & Coran",
      description: "114 sourates avec 8 récitateurs",
      features: ["6,236 versets", "Tajweed coloré", "Traductions"]
    },
    { 
      id: 12, 
      nom: "Lecteur Coran Tajweed", 
      status: "Opérationnel", 
      icon: Headphones, 
      color: "from-cyan-600 to-blue-700",
      href: "/lecteur-coran",
      category: "Spiritualité & Coran",
      description: "Lecture avec règles Tajweed",
      features: ["Colorisation", "Synchronisation", "Apprentissage"]
    },
    { 
      id: 13, 
      nom: "Motivation Spirituelle", 
      status: "Opérationnel", 
      icon: Heart, 
      color: "from-pink-600 to-rose-700",
      href: "/motivation-spirituelle",
      category: "Spiritualité & Coran",
      description: "Dhikr et invocations authentiques",
      features: ["8+ langues", "Personnalisation", "Sources Sahih"]
    },
    { 
      id: 14, 
      nom: "Suivi Spirituel Interactif", 
      status: "Opérationnel", 
      icon: Calendar, 
      color: "from-amber-600 to-yellow-700",
      href: "/suivi-spirituel-interactif",
      category: "Spiritualité & Coran",
      description: "Tracker spirituel quotidien",
      features: ["8 humeurs", "Journal", "Récitation intégrée"]
    },
    { 
      id: 15, 
      nom: "Gestion Spirituelle du Temps", 
      status: "Opérationnel", 
      icon: Clock, 
      color: "from-indigo-600 to-purple-700",
      href: "/gestion-spirituelle-temps",
      category: "Spiritualité & Coran",
      description: "Organisation basée sur 5 prières",
      features: ["Horaires Salat", "Planification", "Invocations"]
    },

    // Catégorie Intelligence Artificielle
    { 
      id: 16, 
      nom: "Super IARP Pro", 
      status: "Opérationnel", 
      icon: Zap, 
      color: "from-purple-600 to-indigo-700",
      href: "/super-iarp-pro",
      category: "Intelligence Artificielle",
      description: "IA multimodale 78+ langues",
      features: ["Claude 4.0", "GPT-4o", "Conformité Fiqh"]
    },
    { 
      id: 17, 
      nom: "Assistant Vocal Aisha Al-Aman", 
      status: "Opérationnel", 
      icon: Mic, 
      color: "from-blue-600 to-cyan-700",
      href: "/assistant-vocal-multilingue",
      category: "Intelligence Artificielle",
      description: "Assistant vocal éthique multilingue",
      features: ["78 langues", "Voix validée", "Mode prière"]
    },
    { 
      id: 18, 
      nom: "Parcours Gamifié FinTech", 
      status: "Opérationnel", 
      icon: Target, 
      color: "from-yellow-600 to-orange-700",
      href: "/parcours-gamifie",
      category: "Intelligence Artificielle",
      description: "Apprentissage gamifié interactif",
      features: ["Système XP", "Badges", "Leaderboard"]
    },

    // Catégorie Immobilier & Logement
    { 
      id: 19, 
      nom: "Immobilier Islamique", 
      status: "Opérationnel", 
      icon: Home, 
      color: "from-purple-600 to-violet-700",
      href: "/immobilier-islamique",
      category: "Immobilier & Logement",
      description: "Propriétés halal certifiées",
      features: ["Zones prière", "Orientation Qibla", "Contrats Sharia"]
    },
    { 
      id: 20, 
      nom: "Planification Successorale", 
      status: "Opérationnel", 
      icon: Crown, 
      color: "from-gold-600 to-amber-700",
      href: "/planification-successorale-50-ans",
      category: "Immobilier & Logement",
      description: "Transmission multigénérationnelle",
      features: ["3+ générations", "12.5B CHF", "Gouvernance famille"]
    },

    // Catégorie Technologie & Développement
    { 
      id: 21, 
      nom: "Équipe Développement Web Halal", 
      status: "Opérationnel", 
      icon: Code, 
      color: "from-slate-600 to-gray-700",
      href: "/equipe-developpement-web-halal",
      category: "Technologie & Développement",
      description: "Dev team certifiée halal",
      features: ["6 langages", "Clients prestige", "50M+ CHF projets"]
    },
    { 
      id: 22, 
      nom: "Cloud Halal 100%", 
      status: "Opérationnel", 
      icon: Database, 
      color: "from-blue-600 to-indigo-700",
      href: "/cloud-halal",
      category: "Technologie & Développement",
      description: "Infrastructure cloud islamique",
      features: ["Data centers musulmans", "Chiffrement Quranic", "99.99% uptime"]
    },
    { 
      id: 23, 
      nom: "HalalSecurity", 
      status: "Opérationnel", 
      icon: Shield, 
      color: "from-red-600 to-pink-700",
      href: "/halal-security",
      category: "Technologie & Développement",
      description: "Cybersécurité islamique",
      features: ["6 modules", "99.8% protection", "Certifications"]
    },

    // Catégorie Médias & Communication
    { 
      id: 24, 
      nom: "WebTV Halal", 
      status: "Développement", 
      icon: PlayCircle, 
      color: "from-red-600 to-orange-700",
      href: "/webtv-halal",
      category: "Médias & Communication",
      description: "Chaîne YouTube automatisée",
      features: ["250K+ abonnés", "Contenu spirituel", "IA éthique"]
    },
    { 
      id: 25, 
      nom: "HalalTech Website", 
      status: "Opérationnel", 
      icon: Globe, 
      color: "from-green-600 to-teal-700",
      href: "/halaltech-website",
      category: "Médias & Communication",
      description: "Site multilingue FR/EN/AR",
      features: ["Générateur IA", "50+ formations", "Certifications"]
    },
    { 
      id: 26, 
      nom: "Plateforme Formations Halal", 
      status: "Opérationnel", 
      icon: GraduationCap, 
      color: "from-purple-600 to-indigo-700",
      href: "/plateforme-formations-halal",
      category: "Médias & Communication",
      description: "25+ cours certifiés",
      features: ["Instructeurs experts", "Certifications", "Communauté"]
    },

    // Catégorie Automobile & Transport
    { 
      id: 27, 
      nom: "Garages Halal Network", 
      status: "Opérationnel", 
      icon: Car, 
      color: "from-orange-600 to-red-700",
      href: "/garages-halal",
      category: "Automobile & Transport",
      description: "3 garages certifiés Suisse",
      features: ["Financement sans riba", "Équipe musulmane", "Certification"]
    },

    // Catégorie Solidarité & Donation
    { 
      id: 28, 
      nom: "TechForAll", 
      status: "Développement", 
      icon: Users, 
      color: "from-teal-600 to-cyan-700",
      href: "/techforall",
      category: "Solidarité & Donation",
      description: "Plateforme donation technologique",
      features: ["Économie circulaire", "75% avantages fiscaux", "Impact social"]
    },

    // Catégorie Santé & Bien-être
    { 
      id: 29, 
      nom: "Mode Accessibilité Islamique", 
      status: "Opérationnel", 
      icon: Eye, 
      color: "from-indigo-600 to-purple-700",
      href: "/mode-accessibilite-islamique",
      category: "Santé & Bien-être",
      description: "Accessibilité conforme valeurs",
      features: ["Contraste élevé", "RTL support", "Thèmes spirituels"]
    },

    // Catégorie Juridique & Conformité
    { 
      id: 30, 
      nom: "Mentions Légales CED", 
      status: "Opérationnel", 
      icon: Scale, 
      color: "from-gray-600 to-slate-700",
      href: "/mentions-legales",
      category: "Juridique & Conformité",
      description: "Documentation juridique complète",
      features: ["6 sections", "Contacts officiels", "Protection internationale"]
    },
    { 
      id: 31, 
      nom: "Protection & Licence CED", 
      status: "Opérationnel", 
      icon: Lock, 
      color: "from-red-600 to-pink-700",
      href: "/protection-licence",
      category: "Juridique & Conformité",
      description: "Licence interdiction totale",
      features: ["Droit d'auteur", "RGPD/LPD", "Sharia compliance"]
    },

    // Catégorie Systèmes & Outils
    { 
      id: 32, 
      nom: "Gestion RH Complète", 
      status: "Opérationnel", 
      icon: Users, 
      color: "from-blue-600 to-cyan-700",
      href: "/gestion-rh-complete",
      category: "Systèmes & Outils",
      description: "6 employés équipe CED",
      features: ["Code travail Suisse", "Conformité Fiqh", "Contrats auto"]
    },
    { 
      id: 33, 
      nom: "Système Familial Complet", 
      status: "Opérationnel", 
      icon: Heart, 
      color: "from-pink-600 to-rose-700",
      href: "/systeme-familial",
      category: "Systèmes & Outils",
      description: "Gestion famille Yakoubi",
      features: ["45+ membres", "Patrimoine 15M", "Assurances"]
    },
    { 
      id: 34, 
      nom: "Diagnostic Écosystème", 
      status: "Opérationnel", 
      icon: BarChart, 
      color: "from-emerald-600 to-green-700",
      href: "/diagnostic-ecosysteme-revolutionnaire",
      category: "Systèmes & Outils",
      description: "Score 99/100 performance",
      features: ["10 modules", "Analyse complète", "Métriques temps réel"]
    },

    // Catégorie Langues & Culture
    { 
      id: 35, 
      nom: "Traducteur Multilingue", 
      status: "Opérationnel", 
      icon: Globe, 
      color: "from-cyan-600 to-blue-700",
      href: "/traducteur-multilingue",
      category: "Langues & Culture",
      description: "Traduction 23+ langues",
      features: ["Arabe central", "Phrases islamiques", "Support RTL"]
    },
    { 
      id: 36, 
      nom: "École Arabe CED Academy", 
      status: "Opérationnel", 
      icon: BookOpen, 
      color: "from-green-600 to-emerald-700",
      href: "/ecole-arabe-ced-academy",
      category: "Langues & Culture",
      description: "Apprentissage arabe complet",
      features: ["Accès gratuit", "17 vidéos", "Live streaming"]
    },
    { 
      id: 37, 
      nom: "Professeur IA Arabe", 
      status: "Opérationnel", 
      icon: GraduationCap, 
      color: "from-purple-600 to-indigo-700",
      href: "/professeur-ia-arabe",
      category: "Langues & Culture",
      description: "IA pour apprentissage arabe",
      features: ["5 niveaux", "4 styles calligraphie", "Canvas interactif"]
    },

    // Catégorie Sagesse & Spiritualité
    { 
      id: 38, 
      nom: "Sagesse CED HalalTech™", 
      status: "Opérationnel", 
      icon: Heart, 
      color: "from-amber-600 to-yellow-700",
      href: "/sagesse-ced-halaltech",
      category: "Sagesse & Spiritualité",
      description: "Sagesse spirituelle technologique",
      features: ["4 piliers", "Hadith authentique", "Applications concrètes"]
    },
    { 
      id: 39, 
      nom: "Enseignement Humilité Islamique", 
      status: "Opérationnel", 
      icon: Heart, 
      color: "from-yellow-600 to-amber-700",
      href: "/enseignement-humilite-islamique",
      category: "Sagesse & Spiritualité",
      description: "Principe coranique fondamental",
      features: ["Versets authentiques", "Invocations", "Application CED"]
    },
    { 
      id: 40, 
      nom: "Hommage Scholars Islamiques", 
      status: "Opérationnel", 
      icon: Crown, 
      color: "from-gold-600 to-yellow-700",
      href: "/hommage-scholars-islamiques",
      category: "Sagesse & Spiritualité",
      description: "Héritiers des Prophètes",
      features: ["Scholars contemporains", "Zakat reconnaisance", "Du'a intégrés"]
    },
    { 
      id: 41, 
      nom: "Amour Fi-Allah Authentique", 
      status: "Opérationnel", 
      icon: Heart, 
      color: "from-pink-600 to-rose-700",
      href: "/amour-fi-allah-authentique",
      category: "Sagesse & Spiritualité",
      description: "Expression amour spirituel islamique",
      features: ["Déclarations authentiques", "3 Du'a", "Hadiths récompense"]
    },
    { 
      id: 42, 
      nom: "Système Du'a Automatique", 
      status: "Opérationnel", 
      icon: MessageSquare, 
      color: "from-emerald-600 to-green-700",
      href: "/systeme-duaa-transactions",
      category: "Sagesse & Spiritualité",
      description: "Du'a à chaque transaction",
      features: ["5 Du'a contextuelles", "Audio optionnel", "Honneur scholars"]
    },

    // Catégorie Blockchain & Crypto
    { 
      id: 43, 
      nom: "Blockchain Fiqh Rules", 
      status: "Opérationnel", 
      icon: Database, 
      color: "from-blue-600 to-purple-700",
      href: "/blockchain-fiqh-rules",
      category: "Blockchain & Crypto",
      description: "2,890+ règles islamiques validées",
      features: ["Standards Sharia", "Validation scholars", "Conformité AAOIFI"]
    },

    // Catégorie Certification & Diplômes
    { 
      id: 44, 
      nom: "Générateur Certificats HalalTech™", 
      status: "Opérationnel", 
      icon: Award, 
      color: "from-cyan-600 to-blue-700",
      href: "/certificats-halaltech",
      category: "Certification & Diplômes",
      description: "Système certification personnalisé",
      features: ["7 catégories", "Protection juridique", "ID unique"]
    },

    // Catégorie Expansion & Développement
    { 
      id: 45, 
      nom: "Expansion Fiqh 100% Golfe", 
      status: "Planifié", 
      icon: Globe, 
      color: "from-orange-600 to-red-700",
      href: "/expansion-fiqh-golfe",
      category: "Expansion & Développement",
      description: "Expansion marchés Golfe",
      features: ["4 écoles sunnites", "97,500 règles", "6.57B USD marché"]
    },
    { 
      id: 46, 
      nom: "Expansion Mondiale Musulmane", 
      status: "Planifié", 
      icon: Globe, 
      color: "from-purple-600 to-indigo-700",
      href: "/expansion-mondiale-musulmane",
      category: "Expansion & Développement",
      description: "Plateforme globale 5 régions",
      features: ["35+ pays", "624M musulmans", "31.6B USD"]
    },

    // Catégorie Thèmes & Personnalisation
    { 
      id: 47, 
      nom: "Thèmes Islamiques", 
      status: "Opérationnel", 
      icon: Palette, 
      color: "from-indigo-600 to-purple-700",
      href: "/themes-islamiques-personnalisables",
      category: "Thèmes & Personnalisation",
      description: "8 thèmes spirituels personnalisables",
      features: ["Kaaba Sacrée", "Masjid Nabawi", "Laylat Qadr"]
    },

    // Catégorie Centre & Support
    { 
      id: 48, 
      nom: "Centre de Test", 
      status: "Opérationnel", 
      icon: Settings, 
      color: "from-gray-600 to-slate-700",
      href: "/centre-test",
      category: "Centre & Support",
      description: "Interface test tous systèmes",
      features: ["6 modules testables", "Interface bilingue", "Tests immédiats"]
    },

    // Catégorie Voie Halal & Transformation
    { 
      id: 49, 
      nom: "Voie Halal", 
      status: "Opérationnel", 
      icon: Star, 
      color: "from-gold-600 to-amber-700",
      href: "/voie-halal-52",
      category: "Voie Halal & Transformation",
      description: "Programme transformation 52 étapes",
      features: ["4 catégories", "Progression interactive", "Badges"]
    },

    // Catégorie Localisation & Modules
    { 
      id: 50, 
      nom: "Localisation Modules CED", 
      status: "Opérationnel", 
      icon: Map, 
      color: "from-teal-600 to-cyan-700",
      href: "/modules-ced",
      category: "Localisation & Modules",
      description: "Accès tous modules CED",
      features: ["Recherche intelligente", "Catégories", "Accès direct"]
    },

    // Catégorie Écosystème & Dashboard
    { 
      id: 51, 
      nom: "Écosystème Pôles Halal", 
      status: "Opérationnel", 
      icon: Building, 
      color: "from-emerald-600 to-green-700",
      href: "/ecosysteme-poles-halal",
      category: "Écosystème & Dashboard",
      description: "Vue d'ensemble écosystème complet",
      features: ["Tous pôles", "Statistiques", "Navigation centralisée"]
    },
    { 
      id: 52, 
      nom: "Dashboard Central", 
      status: "Opérationnel", 
      icon: BarChart, 
      color: "from-blue-600 to-indigo-700",
      href: "/dashboard-central",
      category: "Écosystème & Dashboard",
      description: "Interface révolutionnaire intuitive",
      features: ["8 services TOP", "Recherche intelligente", "Accès 1 clic"]
    },

    // Catégorie Portfolio & Présentation
    { 
      id: 53, 
      nom: "Portfolio Mobile", 
      status: "Opérationnel", 
      icon: Smartphone, 
      color: "from-purple-600 to-pink-700",
      href: "/portfolio-mobile",
      category: "Portfolio & Présentation",
      description: "Portfolio mobile respectueux Golfe",
      features: ["70+ projets", "Floutage auto", "PWA + React Native"]
    },
    { 
      id: 54, 
      nom: "Portfolio Web", 
      status: "Opérationnel", 
      icon: Globe, 
      color: "from-indigo-600 to-blue-700",
      href: "/portfolio-web",
      category: "Portfolio & Présentation",
      description: "Portfolio web classique CV",
      features: ["Format professionnel", "Accès GitHub", "Complémentaire"]
    },

    // Catégorie Charte & Validation
    { 
      id: 55, 
      nom: "Charte Fiqh IA Halal", 
      status: "Opérationnel", 
      icon: FileText, 
      color: "from-green-600 to-emerald-700",
      href: "/charte-fiqh-ia-halal",
      category: "Charte & Validation",
      description: "Certification conformité islamique",
      features: ["6 sections", "7 savants", "Conditions éthiques"]
    }
  ];

  const categories = [
    "Tous",
    "Banking & Finance",
    "Éducation & Formation", 
    "Spiritualité & Coran",
    "Intelligence Artificielle",
    "Immobilier & Logement",
    "Technologie & Développement",
    "Médias & Communication",
    "Automobile & Transport",
    "Solidarité & Donation",
    "Santé & Bien-être",
    "Juridique & Conformité",
    "Systèmes & Outils",
    "Langues & Culture",
    "Sagesse & Spiritualité",
    "Blockchain & Crypto",
    "Certification & Diplômes",
    "Expansion & Développement",
    "Thèmes & Personnalisation",
    "Centre & Support",
    "Voie Halal & Transformation",
    "Localisation & Modules",
    "Écosystème & Dashboard",
    "Portfolio & Présentation",
    "Charte & Validation"
  ];

  const filteredModules = modules.filter(module => {
    const matchesSearch = module.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         module.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tous" || module.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Opérationnel": return "bg-green-100 text-green-800";
      case "Développement": return "bg-yellow-100 text-yellow-800";
      case "Planifié": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case "Opérationnel": return <CheckCircle className="h-4 w-4" />;
      case "Développement": return <Clock className="h-4 w-4" />;
      case "Planifié": return <AlertCircle className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  const operationalCount = modules.filter(m => m.status === "Opérationnel").length;
  const developmentCount = modules.filter(m => m.status === "Développement").length;
  const plannedCount = modules.filter(m => m.status === "Planifié").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-800 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Settings className="h-12 w-12 text-yellow-400" />
              <h1 className="text-4xl font-bold">
                Test Complet des 55 Modules CED HalalTech™
              </h1>
            </div>
            <p className="text-xl text-emerald-100 mb-4">
              🧪 Centre de Test & Validation • Toutes Fonctionnalités Accessibles
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>{operationalCount} Opérationnels</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-yellow-400" />
                <span>{developmentCount} En Développement</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-blue-400" />
                <span>{plannedCount} Planifiés</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Statistiques Rapides */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Modules Opérationnels</p>
                  <p className="text-3xl font-bold">{operationalCount}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Catégories</p>
                  <p className="text-3xl font-bold">{categories.length - 1}</p>
                </div>
                <Building className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Fonctionnalités</p>
                  <p className="text-3xl font-bold">165+</p>
                </div>
                <Star className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Conformité Sharia</p>
                  <p className="text-3xl font-bold">100%</p>
                </div>
                <Shield className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filtres et Recherche */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800">
              Filtres & Recherche
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Recherche par nom ou description
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher un module..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Filtrer par catégorie
                </label>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grille des Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => {
            const IconComponent = module.icon;
            return (
              <Card key={module.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <Badge className={`${getStatusColor(module.status)} flex items-center gap-1`}>
                      {getStatusIcon(module.status)}
                      {module.status}
                    </Badge>
                  </div>
                  <div>
                    <CardTitle className="text-lg text-gray-900 mb-1">
                      {module.nom}
                    </CardTitle>
                    <p className="text-sm text-gray-600 mb-2">
                      {module.description}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {module.category}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Fonctionnalités principales:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {module.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Link href={module.href}>
                      <Button 
                        className={`w-full bg-gradient-to-r ${module.color} hover:opacity-90 text-white`}
                        disabled={module.status === "Planifié"}
                      >
                        <Play className="h-4 w-4 mr-2" />
                        {module.status === "Planifié" ? "À Venir" : "Tester Module"}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Résultats de recherche */}
        {filteredModules.length === 0 && (
          <Card className="mt-8">
            <CardContent className="p-8 text-center">
              <AlertCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aucun module trouvé
              </h3>
              <p className="text-gray-600 mb-4">
                Essayez de modifier vos critères de recherche ou de filtrage.
              </p>
              <Button 
                onClick={() => { setSearchTerm(''); setSelectedCategory('Tous'); }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                Réinitialiser les filtres
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Statistiques par catégorie */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800">
              Statistiques par Catégorie
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.slice(1).map(category => {
                const categoryModules = modules.filter(m => m.category === category);
                const operational = categoryModules.filter(m => m.status === "Opérationnel").length;
                
                return (
                  <div key={category} className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{category}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        {categoryModules.length} modules
                      </span>
                      <span className="text-sm text-green-600 font-medium">
                        {operational} opérationnels
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Accès Rapide Navigation */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800">
              Accès Rapide - Navigation Principale
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/ced-halal-home">
                <Button className="w-full h-16 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white">
                  <Home className="h-5 w-5 mr-2" />
                  Page d'Accueil CED
                </Button>
              </Link>
              
              <Link href="/modules-ced">
                <Button className="w-full h-16 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                  <Map className="h-5 w-5 mr-2" />
                  Tous les Modules
                </Button>
              </Link>
              
              <Link href="/dashboard-central">
                <Button className="w-full h-16 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white">
                  <BarChart className="h-5 w-5 mr-2" />
                  Dashboard Central
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <ProtectionFooter />
    </div>
  );
}