import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Target, Zap, Apple, Activity, Heart, TrendingUp, Clock, Star } from 'lucide-react';

interface Recommendation {
  id: string;
  type: 'nutrition' | 'sport' | 'wellness' | 'learning';
  title: string;
  description: string;
  confidence: number;
  priority: 'high' | 'medium' | 'low';
  action: string;
  reasoning: string;
  estimatedImpact: string;
  timeframe: string;
}

interface PersonalizedInsight {
  category: string;
  insight: string;
  trend: 'positive' | 'negative' | 'stable';
  score: number;
}

export function AIRecommendations({ userId }: { userId: string }) {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [insights, setInsights] = useState<PersonalizedInsight[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState<string>('all');

  useEffect(() => {
    // Simulation de l'analyse IA basée sur les données utilisateur
    setTimeout(() => {
      setRecommendations([
        {
          id: '1',
          type: 'nutrition',
          title: 'Augmenter les protéines au petit-déjeuner',
          description: 'Votre analyse montre une carence en protéines matinales qui impacte votre énergie.',
          confidence: 87,
          priority: 'high',
          action: 'Ajouter 25g de protéines (œufs, yaourt grec, protein shake)',
          reasoning: 'Basé sur vos habitudes alimentaires et votre niveau d\'énergie rapporté',
          estimatedImpact: '+15% d\'énergie matinale',
          timeframe: '7-10 jours'
        },
        {
          id: '2',
          type: 'sport',
          title: 'Intégrer du HIIT 2x/semaine',
          description: 'Pour accélérer votre perte de poids et améliorer votre condition cardiovasculaire.',
          confidence: 92,
          priority: 'high',
          action: 'Remplacer 2 séances cardio par du HIIT de 20 minutes',
          reasoning: 'Votre progression actuelle peut être optimisée avec plus d\'intensité',
          estimatedImpact: '+30% efficacité brûlage calories',
          timeframe: '2-3 semaines'
        },
        {
          id: '3',
          type: 'wellness',
          title: 'Optimiser votre récupération',
          description: 'Vos données de stress suggèrent un besoin d\'améliorer la récupération.',
          confidence: 79,
          priority: 'medium',
          action: 'Ajouter 10 minutes de méditation post-entraînement',
          reasoning: 'Corrélation entre vos séances intenses et niveau de stress',
          estimatedImpact: '-25% stress, +20% qualité sommeil',
          timeframe: '1-2 semaines'
        },
        {
          id: '4',
          type: 'learning',
          title: 'Formation "Nutrition Comportementale IA"',
          description: 'Basé sur vos objectifs, cette formation vous aiderait à mieux comprendre vos habitudes.',
          confidence: 84,
          priority: 'medium',
          action: 'S\'inscrire au module avancé avec Souheila',
          reasoning: 'Vos questions fréquentes sur la nutrition émotionnelle',
          estimatedImpact: 'Meilleure adhérence long terme',
          timeframe: '4-6 semaines'
        },
        {
          id: '5',
          type: 'nutrition',
          title: 'Hydratation intelligente',
          description: 'Votre consommation d\'eau est irrégulière et affecte vos performances.',
          confidence: 76,
          priority: 'low',
          action: 'Boire 500ml d\'eau 30min avant chaque repas',
          reasoning: 'Analyse de vos journaux alimentaires et performances sportives',
          estimatedImpact: '+10% performance, meilleure satiété',
          timeframe: '3-5 jours'
        }
      ]);

      setInsights([
        {
          category: 'Performance Sportive',
          insight: 'Votre constance s\'améliore (+20% ce mois)',
          trend: 'positive',
          score: 87
        },
        {
          category: 'Habitudes Nutritionnelles',
          insight: 'Excellente progression sur les protéines',
          trend: 'positive',
          score: 92
        },
        {
          category: 'Récupération',
          insight: 'Attention au surmenagement en fin de semaine',
          trend: 'negative',
          score: 68
        },
        {
          category: 'Motivation',
          insight: 'Niveau de motivation stable et élevé',
          trend: 'stable',
          score: 85
        }
      ]);

      setLoading(false);
    }, 2000);
  }, [userId]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'nutrition': return <Apple className="h-4 w-4" />;
      case 'sport': return <Activity className="h-4 w-4" />;
      case 'wellness': return <Heart className="h-4 w-4" />;
      case 'learning': return <Brain className="h-4 w-4" />;
      default: return <Target className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'nutrition': return 'bg-green-100 text-green-800';
      case 'sport': return 'bg-blue-100 text-blue-800';
      case 'wellness': return 'bg-purple-100 text-purple-800';
      case 'learning': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'positive': return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'negative': return <TrendingUp className="h-4 w-4 text-red-600 rotate-180" />;
      case 'stable': return <TrendingUp className="h-4 w-4 text-gray-600 rotate-90" />;
      default: return <TrendingUp className="h-4 w-4 text-gray-600" />;
    }
  };

  const filteredRecommendations = selectedType === 'all' 
    ? recommendations 
    : recommendations.filter(r => r.type === selectedType);

  if (loading) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">IA en cours d'analyse de vos données...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Recommandations IA Personnalisées</h2>
        </div>
        <Badge className="px-3 py-1 bg-blue-100 text-blue-800">
          <Zap className="h-4 w-4 mr-1" />
          Analyse en temps réel
        </Badge>
      </div>

      {/* Insights rapides */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {insights.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">{insight.category}</span>
                  {getTrendIcon(insight.trend)}
                </div>
                <p className="text-sm text-gray-800">{insight.insight}</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${insight.score}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-medium">{insight.score}%</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Filtres */}
      <div className="flex gap-2 flex-wrap">
        <Button
          variant={selectedType === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedType('all')}
        >
          Toutes
        </Button>
        <Button
          variant={selectedType === 'nutrition' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedType('nutrition')}
          className="flex items-center gap-1"
        >
          <Apple className="h-3 w-3" />
          Nutrition
        </Button>
        <Button
          variant={selectedType === 'sport' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedType('sport')}
          className="flex items-center gap-1"
        >
          <Activity className="h-3 w-3" />
          Sport
        </Button>
        <Button
          variant={selectedType === 'wellness' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedType('wellness')}
          className="flex items-center gap-1"
        >
          <Heart className="h-3 w-3" />
          Bien-être
        </Button>
        <Button
          variant={selectedType === 'learning' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedType('learning')}
          className="flex items-center gap-1"
        >
          <Brain className="h-3 w-3" />
          Formation
        </Button>
      </div>

      {/* Recommandations */}
      <div className="space-y-4">
        <AnimatePresence>
          {filteredRecommendations.map((rec, index) => (
            <motion.div
              key={rec.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${getTypeColor(rec.type)}`}>
                        {getTypeIcon(rec.type)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{rec.title}</h3>
                        <p className="text-gray-600">{rec.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getPriorityColor(rec.priority)}>
                        {rec.priority === 'high' ? 'Priorité haute' : 
                         rec.priority === 'medium' ? 'Priorité moyenne' : 'Priorité basse'}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium">{rec.confidence}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-medium text-sm mb-1">Action recommandée</h4>
                      <p className="text-sm text-gray-700">{rec.action}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-medium text-sm mb-1">Impact estimé</h4>
                      <p className="text-sm text-gray-700">{rec.estimatedImpact}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-medium text-sm mb-1 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Délai
                      </h4>
                      <p className="text-sm text-gray-700">{rec.timeframe}</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg mb-4">
                    <h4 className="font-medium text-sm mb-1 text-blue-800">Analyse IA</h4>
                    <p className="text-sm text-blue-700">{rec.reasoning}</p>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1">
                      Appliquer cette recommandation
                    </Button>
                    <Button variant="outline">
                      En savoir plus
                    </Button>
                    <Button variant="ghost" size="sm">
                      Ignorer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredRecommendations.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <Brain className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="font-medium text-gray-900 mb-2">Aucune recommandation</h3>
            <p className="text-gray-600">
              L'IA n'a pas de suggestions spécifiques pour cette catégorie actuellement.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Call to action PrettyhowQ */}
      <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Analyse Approfondie avec PrettyhowQ</h3>
                <p className="text-gray-600">
                  Obtenez des recommandations encore plus précises avec notre IA conversationnelle
                </p>
              </div>
            </div>
            <Button>
              <Brain className="h-4 w-4 mr-2" />
              Discuter avec l'IA
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}