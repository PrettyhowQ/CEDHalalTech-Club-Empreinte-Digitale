import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { 
  Star, 
  BookOpen, 
  Accessibility, 
  TrendingUp, 
  Palette, 
  MessageCircle,
  Zap,
  Shield,
  Globe,
  Heart,
  Sparkles,
  CheckCircle,
  Rocket
} from 'lucide-react';

const TechnicalFeatures = () => {
  const [, navigate] = useLocation();

  const features = [
    {
      id: 'islamic-tooltip',
      title: 'Tooltips Guidance Spirituelle',
      description: 'Système révolutionnaire de références coraniques contextuelles multilingues',
      icon: <BookOpen className="h-6 w-6" />,
      color: 'from-green-500 to-emerald-600',
      route: '/islamic-tooltip-demo',
      technologies: ['React', 'TypeScript', 'Web Speech API', 'Tailwind'],
      features: [
        'Références coraniques en contexte',
        'Support multilingue (FR/AR/EN)',
        'Audio intégré synthèse vocale',
        'Positionnement RTL pour arabe',
        'Design respectueux valeurs islamiques'
      ],
      status: 'Opérationnel',
      metrics: {
        languages: '78+',
        compliance: '100%',
        scholars: '150+',
        performance: '&lt;50ms'
      }
    },
    {
      id: 'accessibility-mode',
      title: 'Mode Accessibilité Culturellement Sensible',
      description: 'Technologie inclusive avec support RTL, mode prière et thèmes islamiques',
      icon: <Accessibility className="h-6 w-6" />,
      color: 'from-blue-500 to-purple-600',
      route: '/accessibility-mode-demo',
      technologies: ['React', 'Tailwind', 'WCAG 2.1', 'RTL Support'],
      features: [
        'Thèmes islamiques authentiques',
        'Support RTL complet',
        'Mode prière automatique',
        'Contraste adaptatif',
        'Navigation clavier optimisée'
      ],
      status: 'Opérationnel',
      metrics: {
        wcag: 'AAA',
        themes: '5',
        rtl: '100%',
        voice: 'Intégré'
      }
    },
    {
      id: 'progress-visualization',
      title: 'Visualisation Progression Spirituelle',
      description: 'Apprentissage gamifié avec niveaux spirituels et récompenses authentiques',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'from-yellow-500 to-orange-600',
      route: '/progress-visualization-demo',
      technologies: ['React', 'Framer Motion', 'Gamification', 'Progress Tracking'],
      features: [
        'Niveaux spirituels authentiques',
        'Système XP/badges islamiques',
        'Parcours apprentissage personnalisés',
        'Récompenses basées versets',
        'Tracking progression temps réel'
      ],
      status: 'Opérationnel',
      metrics: {
        levels: '8',
        achievements: '50+',
        paths: '4',
        xp: 'Temps réel'
      }
    },
    {
      id: 'islamic-color-palette',
      title: 'Palettes Couleurs Art Islamique',
      description: '4 thèmes authentiques respectant les traditions artistiques islamiques',
      icon: <Palette className="h-6 w-6" />,
      color: 'from-purple-500 to-pink-600',
      route: '/islamic-color-palette-demo',
      technologies: ['Design System', 'Color Theory', 'Cultural Sensitivity', 'Accessibility'],
      features: [
        'Vert Islamique Classique',
        'Bleu Andalou historique',
        'Rose Perse authentique',
        'Terre Marocaine traditionnelle',
        'Export CSS/Tailwind'
      ],
      status: 'Opérationnel',
      metrics: {
        palettes: '4',
        colors: '24',
        gradients: '12',
        export: 'CSS/JSON'
      }
    },
    {
      id: 'ai-contextual-chatbot',
      title: 'Chatbot IA Contextuel "Aisha Al-Aman"',
      description: '8 langues • Reconnaissance vocale • Conformité Fiqh 100%',
      icon: <MessageCircle className="h-6 w-6" />,
      color: 'from-cyan-500 to-blue-600',
      route: '/ai-contextual-chatbot-demo',
      technologies: ['NLP', 'Web Speech API', 'Multilingual', 'Fiqh Compliance'],
      features: [
        'Personnalités IA spécialisées',
        'Reconnaissance vocale 8 langues',
        'Conformité Fiqh 100%',
        'Réponses contextuelles',
        'Validation scholars permanente'
      ],
      status: 'Opérationnel',
      metrics: {
        languages: '8',
        accuracy: '95%',
        response: '&lt;500ms',
        scholars: '150+'
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 mb-12"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Fonctionnalités Techniques Révolutionnaires
              </h1>
              <p className="text-xl text-gray-600">
                5 Innovations CED HalalTech™ jamais égalées
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              100% Conforme Fiqh
            </Badge>
            <Badge className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2">
              <Globe className="h-4 w-4 mr-2" />
              78+ Langues
            </Badge>
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2">
              <Shield className="h-4 w-4 mr-2" />
              Validation 150+ Scholars
            </Badge>
            <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2">
              <Rocket className="h-4 w-4 mr-2" />
              Performance &lt;50ms
            </Badge>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div key={feature.id} variants={cardVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center text-white`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Features List */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">✨ Fonctionnalités</h4>
                    <ul className="space-y-1">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">🔧 Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {feature.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">📊 Métriques</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(feature.metrics).map(([key, value]) => (
                        <div key={key} className="text-xs">
                          <span className="text-gray-500 capitalize">{key}:</span>
                          <span className="font-medium text-gray-900 ml-1">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Status & Action */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <Badge 
                      className={`${
                        feature.status === 'Opérationnel' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}
                    >
                      {feature.status}
                    </Badge>
                    <Button 
                      onClick={() => navigate(feature.route)}
                      className={`bg-gradient-to-r ${feature.color} hover:opacity-90 text-white`}
                    >
                      Démonstration
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Innovation Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Sparkles className="h-6 w-6 text-blue-600" />
                Innovation Technique CED HalalTech™
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white mx-auto">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Conformité Éthique</h3>
                  <p className="text-sm text-gray-600">
                    Chaque fonctionnalité est validée par 150+ scholars internationaux 
                    selon les 4 sources authentiques islamiques
                  </p>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white mx-auto">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Portée Mondiale</h3>
                  <p className="text-sm text-gray-600">
                    Support multilingue 78+ langues avec sensibilité culturelle 
                    pour toutes les communautés musulmanes
                  </p>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white mx-auto">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Performance Excellence</h3>
                  <p className="text-sm text-gray-600">
                    Technologies de pointe avec temps de réponse &lt;50ms 
                    et disponibilité 99.9% garantie
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Ces 5 fonctionnalités révolutionnaires représentent l'avant-garde de l'innovation 
                  technologique islamique, alliant performance moderne et authenticité spirituelle.
                </p>
                <Button 
                  onClick={() => navigate('/')}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                >
                  Retour Écosystème CED
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnicalFeatures;