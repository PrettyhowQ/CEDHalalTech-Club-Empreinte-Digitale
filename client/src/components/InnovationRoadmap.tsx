import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Lightbulb,
  Rocket,
  Shield,
  Brain,
  Globe,
  Zap,
  Users,
  Heart,
  Leaf,
  Star,
  Crown,
  Building2,
  Smartphone,
  Car,
  Home,
  Briefcase,
  GraduationCap,
  Target,
  TrendingUp,
  CheckCircle,
  Clock,
  ArrowRight,
  Plus,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CEDFooter } from './CEDFooter';

interface InnovationFeature {
  id: string;
  category: 'fintech' | 'ai' | 'social' | 'sustainability' | 'governance' | 'expansion';
  title: string;
  description: string;
  impact: 'revolutionary' | 'high' | 'medium';
  complexity: 'simple' | 'medium' | 'complex';
  timeline: string;
  investment: number;
  roi: number;
  status: 'concept' | 'development' | 'testing' | 'deployment' | 'active';
  dependencies: string[];
  benefits: string[];
  keyMetrics: { metric: string; target: string }[];
}

const innovationFeatures: InnovationFeature[] = [
  {
    id: 'quantum-halal-trading',
    category: 'fintech',
    title: 'Quantum Halal Trading Platform',
    description: 'Plateforme de trading quantique 100% conforme Sharia avec IA prédictive et exécution nanoseconde',
    impact: 'revolutionary',
    complexity: 'complex',
    timeline: 'Q2 2025',
    investment: 2500000,
    roi: 850,
    status: 'concept',
    dependencies: ['Quantum Computing Infrastructure', 'Sharia Board Certification', 'RegTech Compliance'],
    benefits: [
      'Premier trading quantique halal mondial',
      'Avantage concurrentiel inégalé',
      'Rendements optimisés sans ribā',
      'Transparence blockchain complète'
    ],
    keyMetrics: [
      { metric: 'Volume quotidien', target: 'CHF 500M' },
      { metric: 'Latence exécution', target: '<1ms' },
      { metric: 'Conformité Sharia', target: '100%' }
    ]
  },
  {
    id: 'neural-islamic-banking',
    category: 'ai',
    title: 'Neural Islamic Banking Assistant',
    description: 'Assistant bancaire neuronal multimodal comprenant Coran, Hadith et jurisprudence financière islamique',
    impact: 'revolutionary',
    complexity: 'complex',
    timeline: 'Q1 2025',
    investment: 1800000,
    roi: 320,
    status: 'development',
    dependencies: ['Islamic Jurisprudence Database', 'Neural Language Models', 'Voice Recognition'],
    benefits: [
      'Conseil financier islamique 24/7',
      'Analyse conformité temps réel',
      'Support 78 langues + dialectes',
      'Fatwa financière instantanée'
    ],
    keyMetrics: [
      { metric: 'Précision fatwa', target: '99.9%' },
      { metric: 'Langues supportées', target: '78+' },
      { metric: 'Temps réponse', target: '<2s' }
    ]
  },
  {
    id: 'metaverse-hajj',
    category: 'social',
    title: 'Metaverse Hajj & Umrah Virtuel',
    description: 'Pèlerinage virtuel immersif en réalité mixte avec bénédictions spirituelles et impact carbone zéro',
    impact: 'revolutionary',
    complexity: 'complex',
    timeline: 'Q3 2025',
    investment: 3200000,
    roi: 450,
    status: 'concept',
    dependencies: ['VR/AR Infrastructure', 'Islamic Authority Approval', 'Spatial Computing'],
    benefits: [
      'Accessibilité universelle au Hajj',
      'Impact environnemental nul',
      'Formation préparatoire immersive',
      'Communauté mondiale connectée'
    ],
    keyMetrics: [
      { metric: 'Pèlerins virtuels', target: '1M/an' },
      { metric: 'Réduction CO2', target: '95%' },
      { metric: 'Satisfaction spirituelle', target: '90%+' }
    ]
  },
  {
    id: 'blockchain-zakat',
    category: 'governance',
    title: 'Blockchain Zakat Transparent',
    description: 'Système décentralisé de collecte et distribution Zakat avec traçabilité complète et impact mesurable',
    impact: 'high',
    complexity: 'medium',
    timeline: 'Q4 2024',
    investment: 850000,
    roi: 280,
    status: 'testing',
    dependencies: ['Smart Contracts', 'KYC/AML Integration', 'NGO Partnerships'],
    benefits: [
      'Transparence totale des dons',
      'Distribution automatisée équitable',
      'Réduction coûts administratifs',
      'Impact social mesurable'
    ],
    keyMetrics: [
      { metric: 'Fonds collectés', target: 'CHF 50M/an' },
      { metric: 'Transparence', target: '100%' },
      { metric: 'Coûts admin', target: '<3%' }
    ]
  },
  {
    id: 'carbon-negative-banking',
    category: 'sustainability',
    title: 'Carbon Negative Banking',
    description: 'Première banque carbone négatif avec reforestation automatique et compensation écologique intelligente',
    impact: 'revolutionary',
    complexity: 'medium',
    timeline: 'Q1 2025',
    investment: 1200000,
    roi: 200,
    status: 'development',
    dependencies: ['Carbon Tracking Tech', 'Reforestation Partners', 'ESG Certification'],
    benefits: [
      'Impact environnemental positif',
      'Différenciation concurrentielle',
      'Conformité ESG avancée',
      'Attraction clientèle consciente'
    ],
    keyMetrics: [
      { metric: 'CO2 compensé', target: '150% des émissions' },
      { metric: 'Arbres plantés', target: '1M/an' },
      { metric: 'Certification ESG', target: 'AAA' }
    ]
  },
  {
    id: 'space-islamic-finance',
    category: 'expansion',
    title: 'Space Islamic Finance Hub',
    description: 'Premier centre financier islamique spatial pour colonies lunaires et martiennes futures',
    impact: 'revolutionary',
    complexity: 'complex',
    timeline: 'Q4 2027',
    investment: 15000000,
    roi: 2000,
    status: 'concept',
    dependencies: ['Space Technology', 'Interplanetary Law', 'Quantum Communication'],
    benefits: [
      'Leadership finance spatiale',
      'Nouveau marché exclusif',
      'Vision futuriste inspirante',
      'Partenariats technologiques'
    ],
    keyMetrics: [
      { metric: 'Colonies desservies', target: '5+' },
      { metric: 'Volume spatial', target: 'CHF 10B' },
      { metric: 'Délai transaction', target: '<20min' }
    ]
  },
  {
    id: 'emotion-ai-wellbeing',
    category: 'ai',
    title: 'Emotion AI Islamic Wellbeing',
    description: 'IA émotionnelle pour bien-être spirituel avec guidance Coran personnalisée et thérapie halal',
    impact: 'high',
    complexity: 'medium',
    timeline: 'Q2 2025',
    investment: 950000,
    roi: 340,
    status: 'development',
    dependencies: ['Emotion Recognition', 'Islamic Psychology', 'Privacy Protection'],
    benefits: [
      'Santé mentale islamique innovante',
      'Prévention burnout employés',
      'Guidance spirituelle personnalisée',
      'Thérapie accessible 24/7'
    ],
    keyMetrics: [
      { metric: 'Bien-être score', target: '+40%' },
      { metric: 'Réduction stress', target: '60%' },
      { metric: 'Satisfaction spirituelle', target: '95%' }
    ]
  },
  {
    id: 'quantum-supply-chain',
    category: 'governance',
    title: 'Quantum Halal Supply Chain',
    description: 'Traçabilité quantique de la chaîne halal de la ferme à l\'assiette avec certification instantanée',
    impact: 'high',
    complexity: 'complex',
    timeline: 'Q3 2025',
    investment: 1600000,
    roi: 290,
    status: 'concept',
    dependencies: ['Quantum Sensors', 'IoT Integration', 'Halal Certification Bodies'],
    benefits: [
      'Garantie halal infaillible',
      'Confiance consommateur maximale',
      'Réduction fraudes alimentaires',
      'Standard industrie mondial'
    ],
    keyMetrics: [
      { metric: 'Produits tracés', target: '10M/jour' },
      { metric: 'Précision halal', target: '99.99%' },
      { metric: 'Adoption industrie', target: '70%' }
    ]
  }
];

const ecosystemMetrics = {
  totalInvestment: innovationFeatures.reduce((sum, feature) => sum + feature.investment, 0),
  expectedROI: innovationFeatures.reduce((sum, feature) => sum + (feature.investment * feature.roi / 100), 0),
  revolutionaryFeatures: innovationFeatures.filter(f => f.impact === 'revolutionary').length,
  activeProjects: innovationFeatures.filter(f => f.status === 'development' || f.status === 'testing').length
};

export function InnovationRoadmap() {
  const [selectedFeature, setSelectedFeature] = useState<InnovationFeature | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'fintech': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'ai': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'social': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'sustainability': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
      case 'governance': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'expansion': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'revolutionary': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'deployment': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'testing': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'development': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'concept': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const filteredFeatures = selectedCategory === 'all' 
    ? innovationFeatures 
    : innovationFeatures.filter(f => f.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Innovation Roadmap CED
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Technologies révolutionnaires pour un écosystème irréprochable
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              🚀 Innovation Disruptive
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              🧠 IA Quantique
            </Badge>
            <Badge variant="secondary" className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200">
              🌟 Vision Futuriste
            </Badge>
          </div>
        </motion.div>

        {/* Métriques Écosystème */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Investissement Total</CardTitle>
              <Rocket className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                CHF {(ecosystemMetrics.totalInvestment / 1000000).toFixed(1)}M
              </div>
              <p className="text-xs text-indigo-100">Technologies avancées</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">ROI Projeté</CardTitle>
              <TrendingUp className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                CHF {(ecosystemMetrics.expectedROI / 1000000).toFixed(1)}M
              </div>
              <p className="text-xs text-purple-100">Retour 5 ans</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-500 to-pink-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Innovations Révolutionnaires</CardTitle>
              <Sparkles className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{ecosystemMetrics.revolutionaryFeatures}</div>
              <p className="text-xs text-pink-100">Premières mondiales</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Projets Actifs</CardTitle>
              <Zap className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{ecosystemMetrics.activeProjects}</div>
              <p className="text-xs text-emerald-100">En développement</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Filtres Catégories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {['all', 'fintech', 'ai', 'social', 'sustainability', 'governance', 'expansion'].map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-indigo-600 hover:bg-indigo-700" : ""}
            >
              {category === 'all' ? 'Toutes' : 
               category === 'fintech' ? 'FinTech' :
               category === 'ai' ? 'Intelligence Artificielle' :
               category === 'social' ? 'Social & Spirituel' :
               category === 'sustainability' ? 'Durabilité' :
               category === 'governance' ? 'Gouvernance' :
               'Expansion'}
            </Button>
          ))}
        </motion.div>

        {/* Innovations */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        >
          {filteredFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-indigo-200 dark:hover:border-indigo-800">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900">
                        {feature.impact === 'revolutionary' ? 
                          <Sparkles className="h-6 w-6 text-indigo-600 dark:text-indigo-400" /> :
                          <Lightbulb className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                        }
                      </div>
                      <div>
                        <CardTitle className="text-lg leading-tight">
                          {feature.title}
                        </CardTitle>
                        <div className="flex gap-2 mt-2">
                          <Badge className={getCategoryColor(feature.category)} variant="outline">
                            {feature.category}
                          </Badge>
                          <Badge className={getImpactColor(feature.impact)} variant="outline">
                            {feature.impact}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Badge className={getStatusColor(feature.status)}>
                      {feature.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                    {feature.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Investissement:</span>
                      <p className="font-semibold text-indigo-600">
                        CHF {(feature.investment / 1000000).toFixed(1)}M
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">ROI Projeté:</span>
                      <p className="font-semibold text-green-600">{feature.roi}%</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Timeline:</span>
                      <p className="font-semibold">{feature.timeline}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Complexité:</span>
                      <p className="font-semibold capitalize">{feature.complexity}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Bénéfices Clés:</h4>
                    <div className="space-y-1">
                      {feature.benefits.slice(0, 2).map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => setSelectedFeature(feature)}
                      className="flex-1"
                    >
                      <Lightbulb className="h-4 w-4 mr-1" />
                      Détails Complets
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700"
                    >
                      <Rocket className="h-4 w-4 mr-1" />
                      Lancer Projet
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision Stratégique */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <Card className="border-2 border-gradient-to-r from-indigo-200 to-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Crown className="h-6 w-6 text-yellow-600" />
                Vision Stratégique 2025-2030
              </CardTitle>
              <CardDescription>
                Positionnement Club Empreinte Digitale comme leader mondial innovation islamique
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="p-4 rounded-full bg-indigo-100 dark:bg-indigo-900 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Intelligence Augmentée</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    IA quantique pour services financiers islamiques révolutionnaires
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 rounded-full bg-purple-100 dark:bg-purple-900 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Expansion Galactique</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Premier écosystème financier islamique interplanétaire
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 rounded-full bg-pink-100 dark:bg-pink-900 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Impact Spirituel</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Technologies au service du bien-être spirituel et social
                  </p>
                </div>
              </div>

              <Separator />

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4 text-center">
                  🌟 Avantages Concurrentiels Uniques
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-indigo-600" />
                      <span className="font-medium">Innovation Mondiale</span>
                    </div>
                    <ul className="ml-6 space-y-1 text-gray-600 dark:text-gray-300">
                      <li>• Première banque quantique halal</li>
                      <li>• IA spirituelle brevetée</li>
                      <li>• Blockchain Zakat transparente</li>
                      <li>• Metaverse pèlerinage virtuel</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-purple-600" />
                      <span className="font-medium">Protection Exclusive</span>
                    </div>
                    <ul className="ml-6 space-y-1 text-gray-600 dark:text-gray-300">
                      <li>• Brevets technologiques globaux</li>
                      <li>• Certification Sharia exclusive</li>
                      <li>• Partenariats institutionnels</li>
                      <li>• Propriété intellectuelle Yakoubi Yamina</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Modal Détails Innovation */}
        {selectedFeature && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-indigo-600" />
                  {selectedFeature.title}
                </h3>
                <Button variant="ghost" size="sm" onClick={() => setSelectedFeature(null)}>
                  ✕
                </Button>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-3">
                  <Badge className={getCategoryColor(selectedFeature.category)} variant="outline">
                    {selectedFeature.category}
                  </Badge>
                  <Badge className={getImpactColor(selectedFeature.impact)} variant="outline">
                    Impact {selectedFeature.impact}
                  </Badge>
                  <Badge className={getStatusColor(selectedFeature.status)} variant="outline">
                    {selectedFeature.status}
                  </Badge>
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {selectedFeature.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">📊 Métriques Financières</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Investissement:</span>
                        <span className="font-semibold">CHF {selectedFeature.investment.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ROI projeté:</span>
                        <span className="font-semibold text-green-600">{selectedFeature.roi}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Timeline:</span>
                        <span className="font-semibold">{selectedFeature.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Complexité:</span>
                        <span className="font-semibold capitalize">{selectedFeature.complexity}</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">🎯 KPIs Objectifs</h4>
                    <div className="space-y-2 text-sm">
                      {selectedFeature.keyMetrics.map((metric, i) => (
                        <div key={i} className="flex justify-between">
                          <span>{metric.metric}:</span>
                          <span className="font-semibold text-blue-600">{metric.target}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700">✅ Bénéfices Attendus</h4>
                    <div className="space-y-2">
                      {selectedFeature.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-orange-700">🔗 Dépendances</h4>
                    <div className="space-y-2">
                      {selectedFeature.dependencies.map((dependency, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <ArrowRight className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>{dependency}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                    <Rocket className="h-4 w-4 mr-2" />
                    Approuver le Projet
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Target className="h-4 w-4 mr-2" />
                    Analyser Faisabilité
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
      
      <CEDFooter />
    </div>
  );
}