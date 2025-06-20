import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  AlertTriangle, 
  Lightbulb, 
  Target,
  Calendar,
  Users,
  Euro,
  BarChart3,
  Zap,
  Clock
} from 'lucide-react';

interface MarketInsight {
  id: string;
  title: string;
  category: string;
  demandScore: number;
  marketPotential: number;
  urgency: 'high' | 'medium' | 'low';
  trend: 'rising' | 'stable' | 'declining';
  recommendedAction: string;
  estimatedROI: number;
  timeToMarket: string;
  targetAudience: string[];
  competitionLevel: 'low' | 'medium' | 'high';
}

export function MarketDemandWidget() {
  const [insights, setInsights] = useState<MarketInsight[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all');

  useEffect(() => {
    // Simulation de données d'étude de marché en temps réel
    const generateMarketInsights = () => {
      const mockInsights: MarketInsight[] = [
        {
          id: 'ia-ethique-boom',
          title: 'IA Éthique - Demande Explosive',
          category: 'Intelligence Artificielle',
          demandScore: 97,
          marketPotential: 4200000,
          urgency: 'high',
          trend: 'rising',
          recommendedAction: 'Lancement immédiat recommandé - Marché en explosion',
          estimatedROI: 340,
          timeToMarket: '6-8 semaines',
          targetAudience: ['Entreprises Tech', 'Startups', 'Institutions'],
          competitionLevel: 'medium'
        },
        {
          id: 'cybersecurite-entreprise',
          title: 'Cybersécurité Entreprise - Forte Croissance',
          category: 'Sécurité Informatique',
          demandScore: 94,
          marketPotential: 3800000,
          urgency: 'high',
          trend: 'rising',
          recommendedAction: 'Priorité absolue - Demande non satisfaite',
          estimatedROI: 285,
          timeToMarket: '10-12 semaines',
          targetAudience: ['PME', 'Grandes Entreprises', 'Institutions'],
          competitionLevel: 'high'
        },
        {
          id: 'leadership-digital',
          title: 'Leadership Digital - Tendance Stable',
          category: 'Management',
          demandScore: 91,
          marketPotential: 2700000,
          urgency: 'medium',
          trend: 'stable',
          recommendedAction: 'Développement progressif - Marché mature',
          estimatedROI: 220,
          timeToMarket: '12-16 semaines',
          targetAudience: ['Cadres dirigeants', 'Managers', 'Entrepreneurs'],
          competitionLevel: 'high'
        },
        {
          id: 'nutrition-digitale',
          title: 'Nutrition Digitale - Émergence Prometteuse',
          category: 'Santé & Bien-être',
          demandScore: 91,
          marketPotential: 2900000,
          urgency: 'medium',
          trend: 'rising',
          recommendedAction: 'Opportunité à saisir - Marché en développement',
          estimatedROI: 195,
          timeToMarket: '8-10 semaines',
          targetAudience: ['Particuliers', 'Professionnels santé', 'Coachs'],
          competitionLevel: 'low'
        },
        {
          id: 'marketing-responsable',
          title: 'Marketing Responsable - Forte Demande',
          category: 'Marketing',
          demandScore: 93,
          marketPotential: 3100000,
          urgency: 'high',
          trend: 'rising',
          recommendedAction: 'Lancement prioritaire - Tendance RSE forte',
          estimatedROI: 260,
          timeToMarket: '6-8 semaines',
          targetAudience: ['PME', 'Agences', 'Freelances'],
          competitionLevel: 'medium'
        },
        {
          id: 'freelancing-ethique',
          title: 'Freelancing Éthique - Explosion Prévue',
          category: 'Entrepreneuriat',
          demandScore: 90,
          marketPotential: 2600000,
          urgency: 'medium',
          trend: 'rising',
          recommendedAction: 'Préparation recommandée - Boom attendu',
          estimatedROI: 180,
          timeToMarket: '4-6 semaines',
          targetAudience: ['Freelances', 'Indépendants', 'Étudiants'],
          competitionLevel: 'low'
        }
      ];
      setInsights(mockInsights);
    };

    generateMarketInsights();
    
    // Mise à jour périodique des insights
    const interval = setInterval(generateMarketInsights, 30000);
    return () => clearInterval(interval);
  }, []);

  const filteredInsights = insights.filter(insight => 
    selectedFilter === 'all' || insight.urgency === selectedFilter
  );

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'text-red-600 border-red-200 bg-red-50';
      case 'medium': return 'text-yellow-600 border-yellow-200 bg-yellow-50';
      case 'low': return 'text-green-600 border-green-200 bg-green-50';
      default: return 'text-gray-600 border-gray-200 bg-gray-50';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'rising': return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'declining': return <TrendingUp className="h-4 w-4 text-red-600 transform rotate-180" />;
      default: return <BarChart3 className="h-4 w-4 text-blue-600" />;
    }
  };

  return (
    <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-purple-600" />
          Analyse de Marché Temps Réel
          <Badge variant="outline" className="text-purple-600 border-purple-200">
            <Zap className="h-3 w-3 mr-1" />
            Live Data
          </Badge>
        </CardTitle>
        <p className="text-sm text-gray-600">
          Insights automatisés pour orienter vos décisions de création de formations
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Filtres */}
        <div className="flex gap-2">
          <Button
            variant={selectedFilter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedFilter('all')}
          >
            Toutes les priorités
          </Button>
          <Button
            variant={selectedFilter === 'high' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedFilter('high')}
            className="text-red-600"
          >
            Urgent
          </Button>
          <Button
            variant={selectedFilter === 'medium' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedFilter('medium')}
            className="text-yellow-600"
          >
            Modéré
          </Button>
          <Button
            variant={selectedFilter === 'low' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedFilter('low')}
            className="text-green-600"
          >
            Bas
          </Button>
        </div>

        {/* Métriques globales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-blue-200">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <p className="text-xl font-bold text-blue-600">
                {insights.filter(i => i.trend === 'rising').length}
              </p>
              <p className="text-xs text-gray-600">Tendances Haussières</p>
            </CardContent>
          </Card>
          <Card className="border-green-200">
            <CardContent className="p-4 text-center">
              <Euro className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <p className="text-xl font-bold text-green-600">
                {Math.round(insights.reduce((sum, i) => sum + i.marketPotential, 0) / 1000000)}M€
              </p>
              <p className="text-xs text-gray-600">Potentiel Total</p>
            </CardContent>
          </Card>
          <Card className="border-orange-200">
            <CardContent className="p-4 text-center">
              <AlertTriangle className="h-6 w-6 text-orange-600 mx-auto mb-2" />
              <p className="text-xl font-bold text-orange-600">
                {insights.filter(i => i.urgency === 'high').length}
              </p>
              <p className="text-xs text-gray-600">Actions Urgentes</p>
            </CardContent>
          </Card>
        </div>

        {/* Liste des insights */}
        <div className="space-y-4">
          {filteredInsights.map((insight) => (
            <motion.div
              key={insight.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {getTrendIcon(insight.trend)}
                    <h3 className="font-semibold text-gray-900">{insight.title}</h3>
                  </div>
                  <Badge className={getUrgencyColor(insight.urgency)}>
                    {insight.urgency === 'high' ? 'URGENT' : 
                     insight.urgency === 'medium' ? 'Modéré' : 'Bas'}
                  </Badge>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-purple-600">{insight.demandScore}/100</p>
                  <p className="text-xs text-gray-500">Score Demande</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Euro className="h-4 w-4 text-green-600" />
                    <span className="font-medium">Potentiel:</span>
                    <span>{(insight.marketPotential / 1000000).toFixed(1)}M€</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BarChart3 className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">ROI Estimé:</span>
                    <span className="text-green-600">+{insight.estimatedROI}%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-orange-600" />
                    <span className="font-medium">Time to Market:</span>
                    <span>{insight.timeToMarket}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-purple-600" />
                    <span className="font-medium">Audiences:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {insight.targetAudience.map(audience => (
                      <Badge key={audience} variant="secondary" className="text-xs">
                        {audience}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Target className="h-4 w-4 text-red-600" />
                    <span className="font-medium">Concurrence:</span>
                    <Badge 
                      variant="outline" 
                      className={
                        insight.competitionLevel === 'high' ? 'text-red-600 border-red-200' :
                        insight.competitionLevel === 'medium' ? 'text-yellow-600 border-yellow-200' :
                        'text-green-600 border-green-200'
                      }
                    >
                      {insight.competitionLevel === 'high' ? 'Élevée' :
                       insight.competitionLevel === 'medium' ? 'Modérée' : 'Faible'}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-start gap-2">
                  <Lightbulb className="h-4 w-4 text-purple-600 mt-1" />
                  <div>
                    <p className="font-medium text-purple-800 text-sm">Recommandation Stratégique:</p>
                    <p className="text-purple-700 text-sm">{insight.recommendedAction}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <Button size="sm" className="flex-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  Planifier Développement
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <BarChart3 className="h-3 w-3 mr-1" />
                  Étude Approfondie
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredInsights.length === 0 && (
          <div className="text-center py-8">
            <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Aucun insight pour ce filtre
            </h3>
            <p className="text-gray-600">
              Essayez de modifier vos critères de priorité
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}