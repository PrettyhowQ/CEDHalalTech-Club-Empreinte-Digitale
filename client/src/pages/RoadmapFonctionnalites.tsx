import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Smartphone, 
  Palette, 
  Globe, 
  Users, 
  Trophy, 
  GraduationCap,
  BookOpen,
  Clock,
  Calculator,
  MessageSquare,
  Bell,
  Shield,
  Eye,
  Brain,
  Calendar,
  Award,
  CheckCircle,
  ArrowRight,
  Zap,
  Heart,
  Star,
  Target,
  Sparkles
} from 'lucide-react';

const RoadmapFonctionnalites = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const fonctionnalites = [
    // Interface Utilisateur & Accessibilité
    {
      id: 1,
      category: 'Interface Utilisateur',
      title: 'Interactive onboarding tour avec apprentissage technologique islamique',
      description: 'Parcours d\'introduction guidé intégrant les principes islamiques dans l\'apprentissage technologique',
      icon: <Smartphone className="w-5 h-5" />,
      status: 'planned',
      priority: 'high',
      timeline: 'Q1 2025',
      progress: 15,
      halal_compliance: 100
    },
    {
      id: 2,
      category: 'Interface Utilisateur',
      title: 'Micro-animations inspirées de motifs géométriques islamiques',
      description: 'Animations fluides basées sur l\'art islamique traditionnel pour une expérience utilisateur authentique',
      icon: <Palette className="w-5 h-5" />,
      status: 'in_progress',
      priority: 'medium',
      timeline: 'Q1 2025',
      progress: 65,
      halal_compliance: 100
    },
    {
      id: 3,
      category: 'Interface Utilisateur',
      title: 'Mode sombre & clair personnalisable',
      description: 'Thèmes adaptatifs avec couleurs islamiques authentiques',
      icon: <Eye className="w-5 h-5" />,
      status: 'completed',
      priority: 'medium',
      timeline: 'Completed',
      progress: 100,
      halal_compliance: 100
    },
    
    // Accessibilité
    {
      id: 4,
      category: 'Accessibilité',
      title: 'Générateur de profil d\'accessibilité dynamique',
      description: 'Adaptation automatique pour malvoyants, autistes, daltoniens avec respect des valeurs islamiques',
      icon: <Users className="w-5 h-5" />,
      status: 'in_progress',
      priority: 'high',
      timeline: 'Q1 2025',
      progress: 45,
      halal_compliance: 100
    },
    {
      id: 5,
      category: 'Accessibilité',
      title: 'Support vocal IA PrettyhowQ',
      description: 'Lecture automatique et commande vocale avec voix féminine validée par scholars',
      icon: <Bell className="w-5 h-5" />,
      status: 'completed',
      priority: 'high',
      timeline: 'Completed',
      progress: 100,
      halal_compliance: 100
    },
    
    // Multilingue
    {
      id: 6,
      category: 'Multilingue',
      title: 'Sélecteur de langue contextuel',
      description: 'Adaptation culturelle complète (FR/EN/AR/CN) avec support RTL',
      icon: <Globe className="w-5 h-5" />,
      status: 'completed',
      priority: 'high',
      timeline: 'Completed',
      progress: 100,
      halal_compliance: 100
    },
    
    // Gamification
    {
      id: 7,
      category: 'Gamification',
      title: 'Système de badges et niveaux HalalTech',
      description: 'Progression spirituelle et technique (Débutant → Maître HalalTech)',
      icon: <Trophy className="w-5 h-5" />,
      status: 'in_progress',
      priority: 'medium',
      timeline: 'Q1 2025',
      progress: 70,
      halal_compliance: 100
    },
    {
      id: 8,
      category: 'Gamification',
      title: 'Récompenses IA et défis hebdomadaires',
      description: 'Quêtes techniques conformes aux valeurs islamiques',
      icon: <Target className="w-5 h-5" />,
      status: 'planned',
      priority: 'medium',
      timeline: 'Q2 2025',
      progress: 25,
      halal_compliance: 100
    },
    {
      id: 9,
      category: 'Gamification',
      title: 'Certificats interactifs + diplôme IA officiel',
      description: 'Certifications par filière avec validation Fiqh informatique',
      icon: <Award className="w-5 h-5" />,
      status: 'completed',
      priority: 'high',
      timeline: 'Completed',
      progress: 100,
      halal_compliance: 100
    },
    
    // Éducation
    {
      id: 10,
      category: 'Éducation',
      title: 'Catalogue de formations par niveau',
      description: 'Filtre métiers avec formations certifiées Fiqh informatique',
      icon: <BookOpen className="w-5 h-5" />,
      status: 'completed',
      priority: 'high',
      timeline: 'Completed',
      progress: 100,
      halal_compliance: 100
    },
    {
      id: 11,
      category: 'Éducation',
      title: 'Tableau de progression personnalisé (IA)',
      description: 'Suivi adaptatif avec recommandations islamiques',
      icon: <GraduationCap className="w-5 h-5" />,
      status: 'in_progress',
      priority: 'high',
      timeline: 'Q1 2025',
      progress: 80,
      halal_compliance: 100
    },
    {
      id: 12,
      category: 'Éducation',
      title: 'Simulateurs IA de coaching',
      description: 'Coaching technique, santé, finance, parentalité selon valeurs islamiques',
      icon: <Brain className="w-5 h-5" />,
      status: 'in_progress',
      priority: 'medium',
      timeline: 'Q2 2025',
      progress: 60,
      halal_compliance: 100
    },
    
    // Modules Islamiques
    {
      id: 13,
      category: 'Modules Islamiques',
      title: 'Horaires de prière + boussole Qibla',
      description: 'Intégration GPS avec horaires précis et direction Mecque',
      icon: <Clock className="w-5 h-5" />,
      status: 'completed',
      priority: 'high',
      timeline: 'Completed',
      progress: 100,
      halal_compliance: 100
    },
    {
      id: 14,
      category: 'Modules Islamiques',
      title: 'Zakat calculateur et contrats halal',
      description: 'Calculs automatisés conformes 4 écoles juridiques + marketplace éthique',
      icon: <Calculator className="w-5 h-5" />,
      status: 'completed',
      priority: 'high',
      timeline: 'Completed',
      progress: 100,
      halal_compliance: 100
    },
    {
      id: 15,
      category: 'Modules Islamiques',
      title: 'Charte éthique islamique interactive',
      description: 'Signature numérique avec validation scholars',
      icon: <Heart className="w-5 h-5" />,
      status: 'completed',
      priority: 'high',
      timeline: 'Completed',
      progress: 100,
      halal_compliance: 100
    },
    
    // Communication
    {
      id: 16,
      category: 'Communication',
      title: 'Messagerie privée entre membres',
      description: 'Système de modération IA avec filtres islamiques',
      icon: <MessageSquare className="w-5 h-5" />,
      status: 'planned',
      priority: 'medium',
      timeline: 'Q2 2025',
      progress: 20,
      halal_compliance: 100
    },
    {
      id: 17,
      category: 'Communication',
      title: 'Notifications IA personnalisées',
      description: 'Selon profil et objectifs avec rappels spirituels',
      icon: <Bell className="w-5 h-5" />,
      status: 'in_progress',
      priority: 'medium',
      timeline: 'Q1 2025',
      progress: 55,
      halal_compliance: 100
    },
    
    // Protection des données
    {
      id: 18,
      category: 'Protection des données',
      title: 'Données hébergées en Suisse',
      description: 'Conformité RGPD & LPD avec principes islamiques',
      icon: <Shield className="w-5 h-5" />,
      status: 'completed',
      priority: 'high',
      timeline: 'Completed',
      progress: 100,
      halal_compliance: 100
    },
    {
      id: 19,
      category: 'Protection des données',
      title: 'Mode navigation privée',
      description: 'Profil invisible et anonymisation avec respect Amanah',
      icon: <Eye className="w-5 h-5" />,
      status: 'planned',
      priority: 'medium',
      timeline: 'Q2 2025',
      progress: 30,
      halal_compliance: 100
    },
    
    // IA & Automatisation
    {
      id: 20,
      category: 'IA Intégrée',
      title: 'PrettyhowQ - IA éthique vocale & visuelle',
      description: 'IA complète conforme Fiqh informatique avec supervision scholars',
      icon: <Brain className="w-5 h-5" />,
      status: 'completed',
      priority: 'high',
      timeline: 'Completed',
      progress: 100,
      halal_compliance: 100
    },
    {
      id: 21,
      category: 'IA Intégrée',
      title: 'Générateurs automatisés',
      description: 'Plannings, vCards, diplômes, profils personnalisés',
      icon: <Calendar className="w-5 h-5" />,
      status: 'in_progress',
      priority: 'medium',
      timeline: 'Q1 2025',
      progress: 75,
      halal_compliance: 100
    },
    {
      id: 22,
      category: 'IA Intégrée',
      title: 'IA prédictive pour recommandations',
      description: 'Orientation personnalisée avec guidance spirituelle',
      icon: <Sparkles className="w-5 h-5" />,
      status: 'in_progress',
      priority: 'high',
      timeline: 'Q2 2025',
      progress: 40,
      halal_compliance: 100
    }
  ];

  const categories = [
    { id: 'all', label: 'Toutes les catégories', count: fonctionnalites.length },
    { id: 'Interface Utilisateur', label: 'Interface UI', count: fonctionnalites.filter(f => f.category === 'Interface Utilisateur').length },
    { id: 'Accessibilité', label: 'Accessibilité', count: fonctionnalites.filter(f => f.category === 'Accessibilité').length },
    { id: 'Multilingue', label: 'Multilingue', count: fonctionnalites.filter(f => f.category === 'Multilingue').length },
    { id: 'Gamification', label: 'Gamification', count: fonctionnalites.filter(f => f.category === 'Gamification').length },
    { id: 'Éducation', label: 'Éducation', count: fonctionnalites.filter(f => f.category === 'Éducation').length },
    { id: 'Modules Islamiques', label: 'Modules Islamiques', count: fonctionnalites.filter(f => f.category === 'Modules Islamiques').length },
    { id: 'Communication', label: 'Communication', count: fonctionnalites.filter(f => f.category === 'Communication').length },
    { id: 'Protection des données', label: 'Protection Données', count: fonctionnalites.filter(f => f.category === 'Protection des données').length },
    { id: 'IA Intégrée', label: 'IA Intégrée', count: fonctionnalites.filter(f => f.category === 'IA Intégrée').length }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in_progress': return 'bg-blue-500';
      case 'planned': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Terminé';
      case 'in_progress': return 'En cours';
      case 'planned': return 'Planifié';
      default: return 'À venir';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filteredFonctionnalites = selectedCategory === 'all' 
    ? fonctionnalites 
    : fonctionnalites.filter(f => f.category === selectedCategory);

  const overallProgress = Math.round(
    fonctionnalites.reduce((sum, f) => sum + f.progress, 0) / fonctionnalites.length
  );

  const completedCount = fonctionnalites.filter(f => f.status === 'completed').length;
  const inProgressCount = fonctionnalites.filter(f => f.status === 'in_progress').length;
  const plannedCount = fonctionnalites.filter(f => f.status === 'planned').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            🚀 Roadmap Complète CED HalalTech™
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Intégration complète de 22 fonctionnalités révolutionnaires pour l'écosystème 
            Club Empreinte Digitale - Innovation technologique 100% conforme aux valeurs islamiques
          </p>
        </div>

        {/* Statistiques globales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Progression Globale</p>
                  <p className="text-2xl font-bold text-green-600">{overallProgress}%</p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <Progress value={overallProgress} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Terminées</p>
                  <p className="text-2xl font-bold text-blue-600">{completedCount}</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">En cours</p>
                  <p className="text-2xl font-bold text-yellow-600">{inProgressCount}</p>
                </div>
                <div className="p-3 bg-yellow-100 rounded-full">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Planifiées</p>
                  <p className="text-2xl font-bold text-purple-600">{plannedCount}</p>
                </div>
                <div className="p-3 bg-purple-100 rounded-full">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filtres par catégorie */}
        <Card className="mb-8 bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Catégories de Fonctionnalités
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-1"
                >
                  {category.label}
                  <Badge variant="secondary" className="ml-1">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Liste des fonctionnalités */}
        <div className="space-y-4">
          {filteredFonctionnalites.map((fonctionnalite) => (
            <Card key={fonctionnalite.id} className="bg-white/80 backdrop-blur border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Icône et titre */}
                  <div className="lg:col-span-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-100 rounded-full flex-shrink-0">
                        {fonctionnalite.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">
                          {fonctionnalite.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                          {fonctionnalite.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            {fonctionnalite.category}
                          </Badge>
                          <Badge className={`text-xs ${getPriorityColor(fonctionnalite.priority)}`}>
                            Priorité {fonctionnalite.priority}
                          </Badge>
                          <Badge className="text-xs bg-green-100 text-green-800">
                            🕌 Halal {fonctionnalite.halal_compliance}%
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progression et statut */}
                  <div className="lg:col-span-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Progression</span>
                        <span className="text-sm text-gray-600">{fonctionnalite.progress}%</span>
                      </div>
                      <Progress value={fonctionnalite.progress} className="h-2" />
                      
                      <div className="flex justify-between items-center">
                        <Badge className={`text-xs ${getStatusColor(fonctionnalite.status)} text-white`}>
                          {getStatusLabel(fonctionnalite.status)}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {fonctionnalite.timeline}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline de développement */}
        <Card className="mt-8 bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Timeline de Développement 2025
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <h4 className="font-semibold">Q1 2025 - Bases Techniques</h4>
                  <p className="text-sm text-gray-600">
                    Interface utilisateur, accessibilité, progression personnalisée IA
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div>
                  <h4 className="font-semibold">Q2 2025 - Fonctionnalités Avancées</h4>
                  <p className="text-sm text-gray-600">
                    Communication, IA prédictive, simulateurs coaching
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <div>
                  <h4 className="font-semibold">Q3-Q4 2025 - Optimisation</h4>
                  <p className="text-sm text-gray-600">
                    Perfectionnement, intégration complète, déploiement global
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 p-4 border rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 CED HalalTech™ - Roadmap Complète Intégration Fonctionnalités
            <br />
            <span className="text-xs">
              22 fonctionnalités révolutionnaires pour l'écosystème islamique technologique le plus avancé au monde
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoadmapFonctionnalites;