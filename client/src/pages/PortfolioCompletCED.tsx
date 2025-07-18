import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Trophy, 
  Star, 
  Zap, 
  Globe, 
  Shield, 
  Heart, 
  BookOpen, 
  Sparkles, 
  Target, 
  Users, 
  Rocket, 
  Brain,
  Search,
  ExternalLink,
  CheckCircle,
  Clock
} from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: 'fonctionnalites' | 'ia' | 'finance' | 'education' | 'mobile' | 'api' | 'securite' | 'culture';
  status: 'completed' | 'in-progress' | 'planned';
  technologies: string[];
  features: string[];
  route: string;
  screenshot?: string;
  priority: 'high' | 'medium' | 'low';
  halal: boolean;
  sharia: boolean;
}

const portfolioItems: PortfolioItem[] = [
  // Nouvelles fonctionnalités avancées
  {
    id: 'tooltips-culturels',
    title: 'Tooltips Culturels Islamiques Interactifs',
    description: 'Apprentissage culturel immersif avec des tooltips intelligents qui s\'adaptent à votre niveau de connaissance',
    category: 'culture',
    status: 'completed',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: ['Tooltips interactifs', 'Apprentissage progressif', 'Catégories culturelles', 'Suivi de progression'],
    route: '/interactive-islamic-cultural-tooltips',
    priority: 'high',
    halal: true,
    sharia: true
  },
  {
    id: 'motivation-spirituelle',
    title: 'Widget de Motivation Spirituelle Quotidienne',
    description: 'Système de motivation personnalisé basé sur les versets coraniques, hadiths et sagesse islamique',
    category: 'culture',
    status: 'completed',
    technologies: ['React', 'TypeScript', 'AI personnalisée', 'Scheduling'],
    features: ['Motivation personnalisée', 'Contenus authentiques', 'Suivi spiritual', 'Rappels quotidiens'],
    route: '/personalized-daily-spiritual-motivation',
    priority: 'high',
    halal: true,
    sharia: true
  },
  {
    id: 'animations-multilingues',
    title: 'Animations de Transition Multilingues Adaptatives',
    description: 'Transitions fluides et culturellement appropriées pour une expérience utilisateur immersive',
    category: 'fonctionnalites',
    status: 'completed',
    technologies: ['React', 'CSS Animations', 'Framer Motion', 'i18n'],
    features: ['8 langues supportées', 'Animations adaptatives', 'Direction RTL/LTR', 'Transitions fluides'],
    route: '/adaptive-multilingual-transition-animations',
    priority: 'high',
    halal: true,
    sharia: true
  },
  {
    id: 'ia-insights-culturels',
    title: 'Générateur d\'Insights Culturels IA Éthique',
    description: 'Intelligence artificielle respectueuse des valeurs islamiques pour des insights culturels authentiques',
    category: 'ia',
    status: 'completed',
    technologies: ['AI éthique', 'Validation Sharia', 'NLP', 'Knowledge Base'],
    features: ['IA certifiée Halal', 'Validation par savants', 'Insights personnalisés', 'Sources authentiques'],
    route: '/ethical-ai-cultural-insight-generator',
    priority: 'high',
    halal: true,
    sharia: true
  },
  {
    id: 'micro-challenges',
    title: 'Micro-Défis Gamifiés de Connaissance Islamique',
    description: 'Système de gamification pour l\'apprentissage ludique de l\'Islam avec récompenses et progression',
    category: 'education',
    status: 'completed',
    technologies: ['React', 'Gamification', 'Progress Tracking', 'Rewards System'],
    features: ['Défis interactifs', 'Système de points', 'Badges de réussite', 'Progression par niveaux'],
    route: '/gamified-islamic-knowledge-micro-challenges',
    priority: 'high',
    halal: true,
    sharia: true
  },
  {
    id: 'visualisation-3d',
    title: 'Visualisation 3D Islamique',
    description: 'Exploration immersive de l\'art et de l\'architecture islamique en 3D avec géométrie sacrée',
    category: 'fonctionnalites',
    status: 'completed',
    technologies: ['Three.js', 'WebGL', 'React', '3D Modeling'],
    features: ['Géométrie sacrée', 'Architecture islamique', 'Interactions 3D', 'Réalité virtuelle'],
    route: '/islamic-3d-visualization',
    priority: 'high',
    halal: true,
    sharia: true
  },
  {
    id: 'pwa-hybrid',
    title: 'Application Web Progressive (PWA)',
    description: 'Application hybride mobile/web avec installation native et fonctionnalités offline',
    category: 'mobile',
    status: 'completed',
    technologies: ['PWA', 'Service Workers', 'Offline Support', 'Push Notifications'],
    features: ['Installation native', 'Mode offline', 'Notifications push', 'Synchronisation'],
    route: '/',
    priority: 'high',
    halal: true,
    sharia: true
  },
  // Fonctionnalités bancaires
  {
    id: 'banque-digitale',
    title: 'Banque Digitale Halal CED',
    description: 'Système bancaire 100% conforme à la Charia avec services financiers éthiques',
    category: 'finance',
    status: 'completed',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Blockchain'],
    features: ['Conformité Sharia', 'Transactions halal', 'Investissements éthiques', 'Audit permanent'],
    route: '/banque-digitale',
    priority: 'high',
    halal: true,
    sharia: true
  },
  {
    id: 'app-bancaire-mobile',
    title: 'Application Bancaire Mobile',
    description: 'Interface mobile native pour la gestion bancaire avec biométrie et sécurité avancée',
    category: 'mobile',
    status: 'completed',
    technologies: ['React Native', 'Biometric Auth', 'Push Notifications', 'Offline Support'],
    features: ['Authentification biométrique', 'Virements instantanés', 'Notifications temps réel', 'Mode offline'],
    route: '/app-bancaire-mobile',
    priority: 'high',
    halal: true,
    sharia: true
  },
  // Formations et éducation
  {
    id: 'formations-halal',
    title: 'Plateforme de Formations Halal',
    description: 'Système complet de formations certifiées conformes aux principes islamiques',
    category: 'education',
    status: 'completed',
    technologies: ['React', 'Video Streaming', 'Progress Tracking', 'Certification System'],
    features: ['Certifications halal', 'Suivi progression', 'Contenus authentiques', 'Évaluations'],
    route: '/formations',
    priority: 'high',
    halal: true,
    sharia: true
  },
  {
    id: 'coaching-mobile',
    title: 'Coaching Mobile Personnalisé',
    description: 'Application de coaching avec IA pour accompagnement spirituel et professionnel',
    category: 'mobile',
    status: 'completed',
    technologies: ['React Native', 'AI Coaching', 'Real-time Analytics', 'Push Notifications'],
    features: ['Coaching IA', 'Suivi personnalisé', 'Rappels spirituels', 'Analyse comportementale'],
    route: '/coaching-mobile',
    priority: 'high',
    halal: true,
    sharia: true
  },
  // API et développement
  {
    id: 'api-bancaire',
    title: 'API Bancaire CED',
    description: 'API REST complète pour l\'intégration bancaire avec authentification OAuth2',
    category: 'api',
    status: 'completed',
    technologies: ['Node.js', 'Express', 'OAuth2', 'JWT', 'PostgreSQL'],
    features: ['API REST', 'Authentification OAuth2', 'Rate limiting', 'Documentation Swagger'],
    route: '/api-management',
    priority: 'high',
    halal: true,
    sharia: true
  },
  {
    id: 'developpeur-api',
    title: 'Portail Développeur',
    description: 'Plateforme complète pour les développeurs avec documentation et outils',
    category: 'api',
    status: 'completed',
    technologies: ['React', 'API Documentation', 'Code Playground', 'Analytics'],
    features: ['Documentation interactive', 'Playground de code', 'Analytiques d\'usage', 'Support technique'],
    route: '/developer-api',
    priority: 'high',
    halal: true,
    sharia: true
  },
  // Sécurité et conformité
  {
    id: 'securite-bancaire',
    title: 'Système de Sécurité Bancaire',
    description: 'Infrastructure de sécurité multi-niveaux avec chiffrement et audit',
    category: 'securite',
    status: 'completed',
    technologies: ['AES-256', 'Multi-factor Auth', 'Blockchain', 'Audit Logs'],
    features: ['Chiffrement AES-256', 'Authentification multi-facteurs', 'Audit en temps réel', 'Détection fraude'],
    route: '/banking-security',
    priority: 'high',
    halal: true,
    sharia: true
  },
  {
    id: 'conformite-sharia',
    title: 'Système de Conformité Sharia',
    description: 'Validation automatique et permanente de la conformité aux principes islamiques',
    category: 'securite',
    status: 'completed',
    technologies: ['AI Validation', 'Sharia Rules Engine', 'Audit System', 'Reporting'],
    features: ['Validation automatique', 'Règles Sharia', 'Audit permanent', 'Rapports détaillés'],
    route: '/sharia-governance',
    priority: 'high',
    halal: true,
    sharia: true
  }
];

const categories = [
  { id: 'all', name: 'Tous', icon: Globe, count: portfolioItems.length },
  { id: 'fonctionnalites', name: 'Fonctionnalités', icon: Sparkles, count: portfolioItems.filter(i => i.category === 'fonctionnalites').length },
  { id: 'ia', name: 'Intelligence Artificielle', icon: Brain, count: portfolioItems.filter(i => i.category === 'ia').length },
  { id: 'finance', name: 'Finance', icon: Target, count: portfolioItems.filter(i => i.category === 'finance').length },
  { id: 'education', name: 'Éducation', icon: BookOpen, count: portfolioItems.filter(i => i.category === 'education').length },
  { id: 'mobile', name: 'Mobile', icon: Rocket, count: portfolioItems.filter(i => i.category === 'mobile').length },
  { id: 'api', name: 'API', icon: Zap, count: portfolioItems.filter(i => i.category === 'api').length },
  { id: 'securite', name: 'Sécurité', icon: Shield, count: portfolioItems.filter(i => i.category === 'securite').length },
  { id: 'culture', name: 'Culture', icon: Heart, count: portfolioItems.filter(i => i.category === 'culture').length }
];

export default function PortfolioCompletCED() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredItems = portfolioItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus;
    return matchesCategory && matchesSearch && matchesStatus;
  });

  const completedCount = portfolioItems.filter(item => item.status === 'completed').length;
  const inProgressCount = portfolioItems.filter(item => item.status === 'in-progress').length;
  const halalCount = portfolioItems.filter(item => item.halal).length;
  const shariaCount = portfolioItems.filter(item => item.sharia).length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-600';
      case 'in-progress': return 'bg-yellow-600';
      case 'planned': return 'bg-blue-600';
      default: return 'bg-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Terminé';
      case 'in-progress': return 'En cours';
      case 'planned': return 'Planifié';
      default: return 'Inconnu';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 text-white">
      {/* En-tête Hero */}
      <div className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            🏆 Portfolio Complet CED - Écosystème Islamique
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Découvrez toutes les fonctionnalités avancées développées pour l'écosystème technologique islamique le plus complet au monde
          </p>
          <div className="text-lg text-gray-400 mb-12">
            100% Halal • Certifié Sharia • Technologie Éthique • Innovation Responsable
          </div>
          
          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">{completedCount}</div>
              <div className="text-sm text-gray-300">Fonctionnalités Terminées</div>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">{inProgressCount}</div>
              <div className="text-sm text-gray-300">En Développement</div>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">{halalCount}</div>
              <div className="text-sm text-gray-300">Certifiées Halal</div>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">{shariaCount}</div>
              <div className="text-sm text-gray-300">Conformes Sharia</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        {/* Filtres et recherche */}
        <Card className="mb-8 bg-slate-800/40 backdrop-blur-sm border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Filtres et Recherche</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Barre de recherche */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Rechercher une fonctionnalité..."
                className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filtres par statut */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedStatus === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedStatus('all')}
                className={selectedStatus === 'all' ? 'bg-green-600' : 'bg-slate-700 hover:bg-slate-600'}
              >
                Tous ({portfolioItems.length})
              </Button>
              <Button
                variant={selectedStatus === 'completed' ? 'default' : 'outline'}
                onClick={() => setSelectedStatus('completed')}
                className={selectedStatus === 'completed' ? 'bg-green-600' : 'bg-slate-700 hover:bg-slate-600'}
              >
                ✓ Terminé ({completedCount})
              </Button>
              <Button
                variant={selectedStatus === 'in-progress' ? 'default' : 'outline'}
                onClick={() => setSelectedStatus('in-progress')}
                className={selectedStatus === 'in-progress' ? 'bg-yellow-600' : 'bg-slate-700 hover:bg-slate-600'}
              >
                ⏳ En cours ({inProgressCount})
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Catégories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {categories.map(category => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className={`h-auto p-4 flex flex-col items-center space-y-2 ${
                  selectedCategory === category.id 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-slate-800/40 hover:bg-slate-700/60 text-gray-300'
                }`}
              >
                <IconComponent className="h-6 w-6" />
                <span className="text-sm font-medium">{category.name}</span>
                <span className="text-xs opacity-75">({category.count})</span>
              </Button>
            );
          })}
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <Card key={item.id} className="bg-slate-800/40 backdrop-blur-sm border-slate-700 hover:border-green-600/50 transition-all duration-200 group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-white text-lg mb-2 group-hover:text-green-400 transition-colors">
                    {item.title}
                  </CardTitle>
                  <div className="flex items-center space-x-1">
                    {item.halal && <Badge className="bg-green-600 text-white text-xs">Halal</Badge>}
                    {item.sharia && <Badge className="bg-blue-600 text-white text-xs">Sharia</Badge>}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge className={`${getStatusColor(item.status)} text-white`}>
                    {getStatusText(item.status)}
                  </Badge>
                  <Star className={`h-4 w-4 ${getPriorityColor(item.priority)}`} />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </CardDescription>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {item.technologies.map(tech => (
                      <Badge key={tech} variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Fonctionnalités */}
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Fonctionnalités</h4>
                  <div className="space-y-1">
                    {item.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                        <span className="text-xs text-gray-300">{feature}</span>
                      </div>
                    ))}
                    {item.features.length > 3 && (
                      <div className="text-xs text-gray-400">
                        +{item.features.length - 3} autres fonctionnalités
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2 pt-4">
                  <Button
                    asChild
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  >
                    <a href={item.route} className="flex items-center justify-center space-x-2">
                      <ExternalLink className="h-4 w-4" />
                      <span>Voir le projet</span>
                    </a>
                  </Button>
                  {item.status === 'completed' && (
                    <Button
                      variant="outline"
                      className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white"
                    >
                      <Trophy className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Message si aucun résultat */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">Aucun projet trouvé</h3>
            <p className="text-gray-400">Essayez de modifier vos filtres ou votre recherche</p>
          </div>
        )}

        {/* Récapitulatif */}
        <Card className="mt-12 bg-gradient-to-r from-green-900/40 to-emerald-900/40 border-green-600/50">
          <CardHeader>
            <CardTitle className="text-white text-center text-2xl">
              🎯 Récapitulatif de l'Écosystème CED
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              Cet écosystème technologique islamique représente le summum de l'innovation éthique, 
              combinant technologie de pointe et respect des valeurs islamiques pour créer 
              une expérience utilisateur exceptionnelle et spirituellement enrichissante.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800/40 rounded-lg p-6">
                <Shield className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">100% Halal</h3>
                <p className="text-gray-300 text-sm">Toutes les fonctionnalités sont certifiées conformes aux principes islamiques</p>
              </div>
              <div className="bg-slate-800/40 rounded-lg p-6">
                <Heart className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Éthique Avancée</h3>
                <p className="text-gray-300 text-sm">Intelligence artificielle et technologie au service de l'humanité</p>
              </div>
              <div className="bg-slate-800/40 rounded-lg p-6">
                <Sparkles className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Innovation Continue</h3>
                <p className="text-gray-300 text-sm">Développement constant de nouvelles fonctionnalités révolutionnaires</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}