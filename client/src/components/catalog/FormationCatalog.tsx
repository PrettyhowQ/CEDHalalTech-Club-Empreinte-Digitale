import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Search, 
  Users, 
  Building2, 
  GraduationCap, 
  TrendingUp, 
  Star,
  Clock,
  Euro,
  Target,
  BarChart3,
  BookOpen,
  Award,
  Zap,
  Shield,
  Brain,
  Code,
  Calculator,
  Globe,
  Heart,
  Briefcase,
  Smartphone,
  Camera,
  Palette,
  Music,
  Plane,
  Home,
  Car,
  Leaf,
  Coffee
} from 'lucide-react';

interface Formation {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  description: string;
  targetAudience: ('entreprise' | 'etudiant' | 'particulier')[];
  duration: string;
  price: number;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  demandScore: number; // Score de demande potentielle (1-100)
  marketPotential: number; // Potentiel de marché en €
  skills: string[];
  icon: React.ReactNode;
  trending: boolean;
  certification: boolean;
  prerequisites?: string[];
  learningPath?: string[];
}

const formationsCatalog: Formation[] = [
  // IA & Technologie
  {
    id: 'ia-ethique-fondamentaux',
    title: 'Fondamentaux IA Éthique',
    category: 'Intelligence Artificielle',
    subcategory: 'Éthique & Responsabilité',
    description: 'Introduction complète aux principes éthiques de l\'IA, biais algorithmiques et développement responsable',
    targetAudience: ['entreprise', 'etudiant', 'particulier'],
    duration: '40h',
    price: 599,
    level: 'Débutant',
    demandScore: 95,
    marketPotential: 2800000,
    skills: ['Éthique IA', 'Biais algorithmiques', 'Gouvernance IA', 'Audit algorithmes'],
    icon: <Brain className="h-5 w-5" />,
    trending: true,
    certification: true,
    learningPath: ['Introduction éthique', 'Cas pratiques', 'Certification finale']
  },
  {
    id: 'machine-learning-responsable',
    title: 'Machine Learning Responsable',
    category: 'Intelligence Artificielle',
    subcategory: 'Développement',
    description: 'Développement de modèles ML éthiques avec transparence, explicabilité et fairness',
    targetAudience: ['entreprise', 'etudiant'],
    duration: '60h',
    price: 899,
    level: 'Intermédiaire',
    demandScore: 88,
    marketPotential: 1950000,
    skills: ['Python', 'TensorFlow', 'Fairness ML', 'Explainable AI'],
    icon: <Code className="h-5 w-5" />,
    trending: true,
    certification: true,
    prerequisites: ['Programmation Python', 'Statistiques de base']
  },
  {
    id: 'chatgpt-business-ethique',
    title: 'ChatGPT & IA Générative pour Business',
    category: 'Intelligence Artificielle',
    subcategory: 'Applications Business',
    description: 'Utilisation éthique des IA génératives en entreprise, prompts professionnels et gouvernance',
    targetAudience: ['entreprise', 'particulier'],
    duration: '25h',
    price: 399,
    level: 'Débutant',
    demandScore: 92,
    marketPotential: 3200000,
    skills: ['Prompt Engineering', 'IA Générative', 'Productivité', 'Éthique usage'],
    icon: <Zap className="h-5 w-5" />,
    trending: true,
    certification: true
  },

  // Cybersécurité
  {
    id: 'cybersecurite-entreprise',
    title: 'Spécialiste Cybersécurité Entreprise',
    category: 'Sécurité Informatique',
    subcategory: 'Protection Entreprise',
    description: 'Formation complète en cybersécurité pour protéger les infrastructures d\'entreprise',
    targetAudience: ['entreprise', 'etudiant'],
    duration: '80h',
    price: 1299,
    level: 'Avancé',
    demandScore: 94,
    marketPotential: 4500000,
    skills: ['Pentesting', 'SOC', 'Incident Response', 'Forensics', 'Compliance'],
    icon: <Shield className="h-5 w-5" />,
    trending: true,
    certification: true,
    prerequisites: ['Réseaux informatiques', 'Systèmes Linux/Windows']
  },
  {
    id: 'securite-donnees-rgpd',
    title: 'Sécurité des Données & RGPD',
    category: 'Sécurité Informatique',
    subcategory: 'Protection Données',
    description: 'Conformité RGPD, protection des données personnelles et cybersécurité appliquée',
    targetAudience: ['entreprise', 'particulier'],
    duration: '35h',
    price: 549,
    level: 'Intermédiaire',
    demandScore: 87,
    marketPotential: 2100000,
    skills: ['RGPD', 'DPO', 'Audit sécurité', 'Chiffrement'],
    icon: <Shield className="h-5 w-5" />,
    trending: true,
    certification: true
  },

  // Comptabilité & Finance Digitale
  {
    id: 'expert-comptable-digital',
    title: 'Expert-Comptable Digital',
    category: 'Finance & Comptabilité',
    subcategory: 'Transformation Digitale',
    description: 'Modernisation des pratiques comptables avec outils digitaux et IA responsable',
    targetAudience: ['entreprise', 'particulier'],
    duration: '70h',
    price: 1199,
    level: 'Expert',
    demandScore: 89,
    marketPotential: 3800000,
    skills: ['Sage Cloud', 'Excel Avancé', 'BI Finance', 'Audit Digital', 'Compliance'],
    icon: <Calculator className="h-5 w-5" />,
    trending: true,
    certification: true,
    prerequisites: ['Comptabilité générale', 'Fiscalité de base']
  },
  {
    id: 'fintech-blockchain',
    title: 'FinTech & Blockchain Responsable',
    category: 'Finance & Comptabilité',
    subcategory: 'Innovation Financière',
    description: 'Technologies financières émergentes avec focus sur durabilité et éthique',
    targetAudience: ['entreprise', 'etudiant'],
    duration: '50h',
    price: 799,
    level: 'Avancé',
    demandScore: 78,
    marketPotential: 1650000,
    skills: ['Blockchain', 'DeFi', 'Smart Contracts', 'RegTech'],
    icon: <TrendingUp className="h-5 w-5" />,
    trending: false,
    certification: true
  },

  // Management & Leadership
  {
    id: 'leadership-digital-ethique',
    title: 'Leadership Digital Éthique',
    category: 'Management',
    subcategory: 'Leadership',
    description: 'Formation au leadership responsable dans l\'ère numérique avec gouvernance éthique',
    targetAudience: ['entreprise'],
    duration: '45h',
    price: 899,
    level: 'Avancé',
    demandScore: 91,
    marketPotential: 2700000,
    skills: ['Leadership agile', 'Transformation digitale', 'Éthique business', 'Change management'],
    icon: <Users className="h-5 w-5" />,
    trending: true,
    certification: true
  },
  {
    id: 'gestion-equipe-hybride',
    title: 'Gestion d\'Équipe Hybride',
    category: 'Management',
    subcategory: 'Ressources Humaines',
    description: 'Management des équipes distantes et hybrides avec outils collaboratifs éthiques',
    targetAudience: ['entreprise', 'particulier'],
    duration: '30h',
    price: 459,
    level: 'Intermédiaire',
    demandScore: 86,
    marketPotential: 2200000,
    skills: ['Management remote', 'Outils collaboratifs', 'Well-being équipe', 'Performance'],
    icon: <Building2 className="h-5 w-5" />,
    trending: true,
    certification: true
  },

  // Marketing Digital Éthique
  {
    id: 'marketing-digital-responsable',
    title: 'Marketing Digital Responsable',
    category: 'Marketing',
    subcategory: 'Marketing Éthique',
    description: 'Stratégies marketing digitales respectueuses des utilisateurs et de l\'environnement',
    targetAudience: ['entreprise', 'etudiant', 'particulier'],
    duration: '40h',
    price: 649,
    level: 'Intermédiaire',
    demandScore: 93,
    marketPotential: 3100000,
    skills: ['SEO éthique', 'Social Media responsable', 'Analytics privacy-first', 'Content marketing'],
    icon: <Target className="h-5 w-5" />,
    trending: true,
    certification: true
  },
  {
    id: 'social-media-authentique',
    title: 'Social Media Authentique',
    category: 'Marketing',
    subcategory: 'Réseaux Sociaux',
    description: 'Création de contenu authentique et engagement respectueux sur les réseaux sociaux',
    targetAudience: ['entreprise', 'particulier'],
    duration: '25h',
    price: 379,
    level: 'Débutant',
    demandScore: 89,
    marketPotential: 1900000,
    skills: ['Instagram Business', 'LinkedIn Pro', 'TikTok B2B', 'Influence marketing'],
    icon: <Globe className="h-5 w-5" />,
    trending: true,
    certification: true
  },

  // Développement Web & Mobile
  {
    id: 'developpement-web-accessible',
    title: 'Développement Web Accessible',
    category: 'Développement',
    subcategory: 'Web Development',
    description: 'Création de sites web inclusifs et accessibles selon les standards WCAG',
    targetAudience: ['entreprise', 'etudiant'],
    duration: '55h',
    price: 799,
    level: 'Intermédiaire',
    demandScore: 84,
    marketPotential: 2400000,
    skills: ['HTML5/CSS3', 'JavaScript ES6+', 'React/Vue', 'Accessibilité WCAG'],
    icon: <Code className="h-5 w-5" />,
    trending: true,
    certification: true,
    prerequisites: ['HTML/CSS de base', 'JavaScript fondamentaux']
  },
  {
    id: 'applications-mobiles-ethiques',
    title: 'Applications Mobiles Éthiques',
    category: 'Développement',
    subcategory: 'Mobile Development',
    description: 'Développement d\'apps mobiles respectueuses de la vie privée et durables',
    targetAudience: ['entreprise', 'etudiant'],
    duration: '65h',
    price: 999,
    level: 'Avancé',
    demandScore: 82,
    marketPotential: 2800000,
    skills: ['React Native', 'Flutter', 'Privacy by design', 'Green coding'],
    icon: <Smartphone className="h-5 w-5" />,
    trending: true,
    certification: true,
    prerequisites: ['Programmation mobile', 'UX/UI de base']
  },

  // Design & UX/UI
  {
    id: 'ux-design-inclusif',
    title: 'UX Design Inclusif',
    category: 'Design',
    subcategory: 'User Experience',
    description: 'Design d\'expériences utilisateur inclusives et accessibles pour tous',
    targetAudience: ['entreprise', 'etudiant', 'particulier'],
    duration: '45h',
    price: 699,
    level: 'Intermédiaire',
    demandScore: 88,
    marketPotential: 2600000,
    skills: ['Design thinking', 'Figma/Adobe XD', 'Accessibilité', 'Tests utilisateurs'],
    icon: <Palette className="h-5 w-5" />,
    trending: true,
    certification: true
  },
  {
    id: 'design-graphique-durable',
    title: 'Design Graphique Durable',
    category: 'Design',
    subcategory: 'Graphisme',
    description: 'Création visuelle éco-responsable et communication durable',
    targetAudience: ['entreprise', 'particulier'],
    duration: '35h',
    price: 529,
    level: 'Débutant',
    demandScore: 76,
    marketPotential: 1400000,
    skills: ['Adobe Creative Suite', 'Éco-design', 'Brand identity', 'Print durable'],
    icon: <Camera className="h-5 w-5" />,
    trending: false,
    certification: true
  },

  // Santé & Bien-être Digital
  {
    id: 'nutrition-digitale-souheila',
    title: 'Nutrition Digitale avec Souheila Yakoubi-Ozel',
    category: 'Santé & Bien-être',
    subcategory: 'Nutrition',
    description: 'Programme nutritionnel personnalisé avec suivi digital et IA santé responsable',
    targetAudience: ['particulier'],
    duration: '30h',
    price: 399,
    level: 'Débutant',
    demandScore: 91,
    marketPotential: 2900000,
    skills: ['Nutrition personnalisée', 'Apps santé', 'Suivi digital', 'Bien-être'],
    icon: <Heart className="h-5 w-5" />,
    trending: true,
    certification: true
  },
  {
    id: 'coach-wellness-digital',
    title: 'Coach Wellness Digital',
    category: 'Santé & Bien-être',
    subcategory: 'Coaching',
    description: 'Formation au coaching bien-être avec outils digitaux et approche holistique',
    targetAudience: ['entreprise', 'particulier'],
    duration: '50h',
    price: 749,
    level: 'Intermédiaire',
    demandScore: 85,
    marketPotential: 2100000,
    skills: ['Coaching bien-être', 'Apps fitness', 'Motivation digitale', 'Psychologie positive'],
    icon: <Heart className="h-5 w-5" />,
    trending: true,
    certification: true
  },

  // E-commerce & Business
  {
    id: 'ecommerce-responsable',
    title: 'E-commerce Responsable',
    category: 'E-commerce',
    subcategory: 'Commerce Éthique',
    description: 'Création et gestion de boutiques en ligne éthiques et durables',
    targetAudience: ['entreprise', 'particulier'],
    duration: '40h',
    price: 599,
    level: 'Intermédiaire',
    demandScore: 87,
    marketPotential: 2500000,
    skills: ['Shopify/WooCommerce', 'E-commerce éthique', 'Logistique verte', 'Customer care'],
    icon: <Briefcase className="h-5 w-5" />,
    trending: true,
    certification: true
  },
  {
    id: 'marketplace-creation',
    title: 'Création de Marketplace',
    category: 'E-commerce',
    subcategory: 'Plateformes',
    description: 'Développement de plateformes marketplace avec modèles économiques durables',
    targetAudience: ['entreprise'],
    duration: '75h',
    price: 1399,
    level: 'Expert',
    demandScore: 79,
    marketPotential: 1800000,
    skills: ['Architecture marketplace', 'Modèles économiques', 'Scaling', 'Monétisation'],
    icon: <Building2 className="h-5 w-5" />,
    trending: false,
    certification: true,
    prerequisites: ['E-commerce avancé', 'Gestion de projet']
  },

  // Durabilité & RSE
  {
    id: 'rse-digitale',
    title: 'RSE & Numérique Responsable',
    category: 'Durabilité',
    subcategory: 'Responsabilité Sociale',
    description: 'Intégration de la RSE dans la transformation digitale des entreprises',
    targetAudience: ['entreprise'],
    duration: '35h',
    price: 549,
    level: 'Intermédiaire',
    demandScore: 83,
    marketPotential: 1900000,
    skills: ['RSE digitale', 'Green IT', 'Reporting durabilité', 'Impact measurement'],
    icon: <Leaf className="h-5 w-5" />,
    trending: true,
    certification: true
  },
  {
    id: 'economie-circulaire-digitale',
    title: 'Économie Circulaire Digitale',
    category: 'Durabilité',
    subcategory: 'Économie Circulaire',
    description: 'Modèles économiques circulaires appliqués au secteur numérique',
    targetAudience: ['entreprise', 'etudiant'],
    duration: '45h',
    price: 679,
    level: 'Avancé',
    demandScore: 74,
    marketPotential: 1300000,
    skills: ['Économie circulaire', 'Modèles business durables', 'Lifecycle assessment', 'Innovation'],
    icon: <Leaf className="h-5 w-5" />,
    trending: false,
    certification: true
  },

  // Entrepreneuriat
  {
    id: 'startup-tech-ethique',
    title: 'Startup Tech Éthique',
    category: 'Entrepreneuriat',
    subcategory: 'Création d\'entreprise',
    description: 'Lancement de startups technologiques avec impact social et environnemental positif',
    targetAudience: ['etudiant', 'particulier'],
    duration: '60h',
    price: 899,
    level: 'Avancé',
    demandScore: 86,
    marketPotential: 2200000,
    skills: ['Business model canvas', 'Lean startup', 'Impact investing', 'Pitch deck'],
    icon: <TrendingUp className="h-5 w-5" />,
    trending: true,
    certification: true
  },
  {
    id: 'freelancing-digital-ethique',
    title: 'Freelancing Digital Éthique',
    category: 'Entrepreneuriat',
    subcategory: 'Travail Indépendant',
    description: 'Développement d\'une activité freelance éthique et durable dans le digital',
    targetAudience: ['particulier'],
    duration: '30h',
    price: 449,
    level: 'Débutant',
    demandScore: 90,
    marketPotential: 2600000,
    skills: ['Personal branding', 'Pricing éthique', 'Client relations', 'Productivité'],
    icon: <Coffee className="h-5 w-5" />,
    trending: true,
    certification: true
  }
];

export function FormationCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAudience, setSelectedAudience] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [showTrendingOnly, setShowTrendingOnly] = useState(false);
  const [sortBy, setSortBy] = useState('demand'); // demand, price, title
  const [marketResearch, setMarketResearch] = useState<{[key: string]: any}>({});

  // Calcul des catégories uniques
  const categories = Array.from(new Set(formationsCatalog.map(f => f.category)));
  const audiences = ['entreprise', 'etudiant', 'particulier'];
  const levels = ['Débutant', 'Intermédiaire', 'Avancé', 'Expert'];

  // Filtrage des formations
  const filteredFormations = formationsCatalog
    .filter(formation => {
      const matchesSearch = formation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          formation.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          formation.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || formation.category === selectedCategory;
      const matchesAudience = selectedAudience === 'all' || formation.targetAudience.includes(selectedAudience as any);
      const matchesLevel = selectedLevel === 'all' || formation.level === selectedLevel;
      const matchesTrending = !showTrendingOnly || formation.trending;

      return matchesSearch && matchesCategory && matchesAudience && matchesLevel && matchesTrending;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'demand':
          return b.demandScore - a.demandScore;
        case 'price':
          return a.price - b.price;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  // Simulation d'étude de marché
  const generateMarketResearch = (formation: Formation) => {
    const research = {
      demandAnalysis: {
        currentDemand: formation.demandScore,
        projectedGrowth: '+' + (12 + Math.random() * 25).toFixed(1) + '%',
        competitionLevel: formation.demandScore > 85 ? 'Élevée' : formation.demandScore > 70 ? 'Modérée' : 'Faible',
        marketSize: formation.marketPotential.toLocaleString('fr-FR') + '€'
      },
      targetSegments: formation.targetAudience.map(audience => ({
        segment: audience,
        potential: Math.floor(Math.random() * 1000) + 500,
        avgBudget: formation.price + (Math.random() * 200 - 100)
      })),
      recommendations: [
        formation.demandScore > 90 ? 'Lancement prioritaire recommandé' : 'Potentiel à explorer',
        formation.trending ? 'Tendance forte identifiée' : 'Marché de niche stable',
        formation.certification ? 'Certification valorisée par le marché' : 'Ajouter certification recommandé'
      ],
      launchTimeline: formation.demandScore > 85 ? '2-3 mois' : '4-6 mois',
      investmentRequired: Math.floor(formation.price * 0.3) + 'h de développement'
    };
    
    setMarketResearch(prev => ({ ...prev, [formation.id]: research }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Catalogue Formations Club Empreinte Digitale Éthique
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Découvrez notre écosystème complet de formations pour une transformation digitale éthique et responsable
        </p>
      </div>

      {/* Filtres de recherche */}
      <Card className="border-indigo-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-indigo-600" />
            Recherche & Filtres Avancés
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Barre de recherche */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Rechercher par titre, description ou compétences..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filtres */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Catégorie</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="all">Toutes catégories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Public cible</label>
              <select 
                value={selectedAudience}
                onChange={(e) => setSelectedAudience(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="all">Tous publics</option>
                {audiences.map(audience => (
                  <option key={audience} value={audience}>
                    {audience === 'entreprise' ? 'Entreprises' : 
                     audience === 'etudiant' ? 'Étudiants' : 'Particuliers'}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Niveau</label>
              <select 
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="all">Tous niveaux</option>
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Trier par</label>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="demand">Demande du marché</option>
                <option value="price">Prix</option>
                <option value="title">Nom de formation</option>
              </select>
            </div>

            <div className="flex items-end">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showTrendingOnly}
                  onChange={(e) => setShowTrendingOnly(e.target.checked)}
                />
                <span className="text-sm">Tendances uniquement</span>
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-green-200">
          <CardContent className="p-4 text-center">
            <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-green-600">{filteredFormations.length}</p>
            <p className="text-sm text-gray-600">Formations disponibles</p>
          </CardContent>
        </Card>
        <Card className="border-blue-200">
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-600">
              {filteredFormations.filter(f => f.trending).length}
            </p>
            <p className="text-sm text-gray-600">Formations tendances</p>
          </CardContent>
        </Card>
        <Card className="border-purple-200">
          <CardContent className="p-4 text-center">
            <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-600">
              {filteredFormations.filter(f => f.certification).length}
            </p>
            <p className="text-sm text-gray-600">Avec certification</p>
          </CardContent>
        </Card>
        <Card className="border-orange-200">
          <CardContent className="p-4 text-center">
            <Euro className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-orange-600">
              {Math.round(filteredFormations.reduce((sum, f) => sum + f.marketPotential, 0) / 1000000)}M€
            </p>
            <p className="text-sm text-gray-600">Potentiel de marché</p>
          </CardContent>
        </Card>
      </div>

      {/* Catalogue des formations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFormations.map((formation) => (
          <motion.div
            key={formation.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow border-gray-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                      {formation.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{formation.title}</CardTitle>
                      <p className="text-sm text-gray-600">{formation.category}</p>
                    </div>
                  </div>
                  {formation.trending && (
                    <Badge variant="outline" className="text-red-600 border-red-200">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Tendance
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-gray-700">{formation.description}</p>

                {/* Métriques clés */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <BarChart3 className="h-4 w-4 text-green-600 mx-auto mb-1" />
                    <p className="text-sm font-bold text-green-600">{formation.demandScore}/100</p>
                    <p className="text-xs text-gray-600">Demande</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <Euro className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                    <p className="text-sm font-bold text-blue-600">{formation.price}€</p>
                    <p className="text-xs text-gray-600">Prix standard</p>
                  </div>
                </div>

                {/* Tarifs par public */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-800">Tarifs spéciaux :</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {formation.targetAudience.includes('etudiant') && (
                      <div className="flex items-center justify-between p-2 bg-blue-50 rounded border border-blue-200">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-medium text-blue-800">Étudiants</span>
                        </div>
                        <span className="text-sm font-bold text-blue-700">
                          {Math.round(formation.price * 0.4)}€/mois
                        </span>
                      </div>
                    )}
                    {formation.targetAudience.includes('entreprise') && (
                      <div className="flex items-center justify-between p-2 bg-purple-50 rounded border border-purple-200">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-purple-600" />
                          <span className="text-sm font-medium text-purple-800">Entreprises</span>
                        </div>
                        <span className="text-sm font-bold text-purple-700">
                          {Math.round(formation.price * 1.8)}€/employé
                        </span>
                      </div>
                    )}
                    {formation.targetAudience.includes('particulier') && (
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded border border-green-200">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium text-green-800">Particuliers</span>
                        </div>
                        <span className="text-sm font-bold text-green-700">
                          {formation.price}€ unique
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Détails */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>{formation.duration}</span>
                    <Badge variant="outline">{formation.level}</Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span>
                      {formation.targetAudience.map(aud => 
                        aud === 'entreprise' ? 'Entreprises' : 
                        aud === 'etudiant' ? 'Étudiants' : 'Particuliers'
                      ).join(', ')}
                    </span>
                  </div>

                  {formation.certification && (
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <Award className="h-4 w-4" />
                      <span>Certification incluse</span>
                    </div>
                  )}
                </div>

                {/* Compétences */}
                <div>
                  <p className="text-sm font-medium mb-2">Compétences acquises:</p>
                  <div className="flex flex-wrap gap-1">
                    {formation.skills.slice(0, 3).map(skill => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {formation.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{formation.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button 
                    className="flex-1"
                    onClick={() => generateMarketResearch(formation)}
                  >
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Étude Marché
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Star className="h-4 w-4 mr-2" />
                    Détails
                  </Button>
                </div>

                {/* Étude de marché */}
                {marketResearch[formation.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200"
                  >
                    <h4 className="font-semibold text-blue-800 mb-2">📊 Analyse de Marché</h4>
                    <div className="space-y-2 text-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="font-medium">Croissance:</span>
                          <p className="text-green-600">{marketResearch[formation.id].demandAnalysis.projectedGrowth}</p>
                        </div>
                        <div>
                          <span className="font-medium">Concurrence:</span>
                          <p className="text-gray-700">{marketResearch[formation.id].demandAnalysis.competitionLevel}</p>
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">Recommandation:</span>
                        <p className="text-indigo-700">{marketResearch[formation.id].recommendations[0]}</p>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-blue-200">
                        <span className="font-medium text-blue-800">Lancement suggéré:</span>
                        <span className="text-blue-600">{marketResearch[formation.id].launchTimeline}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredFormations.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucune formation trouvée</h3>
          <p className="text-gray-600">Essayez de modifier vos critères de recherche</p>
        </div>
      )}
    </div>
  );
}