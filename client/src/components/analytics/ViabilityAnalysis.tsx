import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  XCircle,
  Target,
  Euro,
  BarChart3,
  Lightbulb,
  ArrowUp,
  ArrowDown,
  Minus,
  Clock,
  Users,
  Award,
  Zap
} from 'lucide-react';

interface ViabilityScore {
  formationId: string;
  title: string;
  category: string;
  currentScore: number;
  potentialScore: number;
  demandTrend: 'rising' | 'stable' | 'declining';
  competitionLevel: 'low' | 'medium' | 'high';
  marketPotential: number;
  currentROI: number;
  projectedROI: number;
  timeToBreakeven: string;
  recommendation: 'prioritize' | 'optimize' | 'maintain' | 'reconsider';
  adjustments: string[];
  threats: string[];
  opportunities: string[];
  strategicValue: number; // 1-100
}

interface EmergingOpportunity {
  id: string;
  domain: string;
  description: string;
  marketSize: number;
  growthRate: number;
  competitionGap: number;
  urgency: 'immediate' | 'short-term' | 'medium-term';
  investmentRequired: number;
  expectedROI: number;
  riskLevel: 'low' | 'medium' | 'high';
  synergies: string[];
  targetLaunch: string;
}

export function ViabilityAnalysis() {
  const [viabilityData, setViabilityData] = useState<ViabilityScore[]>([]);
  const [emergingOpportunities, setEmergingOpportunities] = useState<EmergingOpportunity[]>([]);
  const [selectedView, setSelectedView] = useState<'current' | 'opportunities'>('current');

  useEffect(() => {
    // Analyse de viabilité des formations actuelles
    const currentAnalysis: ViabilityScore[] = [
      {
        formationId: 'ia-ethique-fondamentaux',
        title: 'Fondamentaux IA Éthique',
        category: 'Intelligence Artificielle',
        currentScore: 95,
        potentialScore: 98,
        demandTrend: 'rising',
        competitionLevel: 'medium',
        marketPotential: 2800000,
        currentROI: 285,
        projectedROI: 340,
        timeToBreakeven: '4-6 mois',
        recommendation: 'prioritize',
        adjustments: [
          'Ajouter module "IA Générative Responsable"',
          'Intégrer cas d\'usage sectoriels (santé, finance)',
          'Développer certification professionnelle reconnue'
        ],
        threats: ['Concurrence croissante des GAFAM', 'Évolution rapide des réglementations'],
        opportunities: ['Partenariats entreprises', 'Expansion internationale', 'Modules sectoriels'],
        strategicValue: 97
      },
      {
        formationId: 'cybersecurite-entreprise',
        title: 'Spécialiste Cybersécurité Entreprise',
        category: 'Sécurité Informatique',
        currentScore: 94,
        potentialScore: 96,
        demandTrend: 'rising',
        competitionLevel: 'high',
        marketPotential: 4500000,
        currentROI: 260,
        projectedROI: 290,
        timeToBreakeven: '6-8 mois',
        recommendation: 'prioritize',
        adjustments: [
          'Spécialisation par secteur (santé, finance, industrie)',
          'Ajout module "Cyber Threat Intelligence"',
          'Partenariat avec éditeurs sécurité'
        ],
        threats: ['Forte concurrence établie', 'Évolution technologique rapide'],
        opportunities: ['Pénurie de talents', 'Réglementation renforcée', 'Cloud security'],
        strategicValue: 93
      },
      {
        formationId: 'marketing-digital-responsable',
        title: 'Marketing Digital Responsable',
        category: 'Marketing',
        currentScore: 93,
        potentialScore: 95,
        demandTrend: 'rising',
        competitionLevel: 'medium',
        marketPotential: 3100000,
        currentROI: 240,
        projectedROI: 275,
        timeToBreakeven: '5-7 mois',
        recommendation: 'optimize',
        adjustments: [
          'Intégrer outils d\'analyse éthique',
          'Module "Green Marketing & Communication"',
          'Certification RSE marketing'
        ],
        threats: ['Saturation marché formation marketing', 'Changements algorithmes'],
        opportunities: ['Transition RSE entreprises', 'Nouvelles réglementations pub'],
        strategicValue: 89
      },
      {
        formationId: 'nutrition-digitale-souheila',
        title: 'Nutrition Digitale avec Souheila Yakoubi-Ozel',
        category: 'Santé & Bien-être',
        currentScore: 91,
        potentialScore: 94,
        demandTrend: 'rising',
        competitionLevel: 'low',
        marketPotential: 2900000,
        currentROI: 195,
        projectedROI: 245,
        timeToBreakeven: '3-5 mois',
        recommendation: 'prioritize',
        adjustments: [
          'Développer app mobile dédiée',
          'Intégrer IA prédictive nutrition',
          'Partenariats mutuelles/entreprises'
        ],
        threats: ['Réglementation santé stricte', 'Concurrence apps nutrition'],
        opportunities: ['Marché bien-être en croissance', 'Télémédecine', 'Prévention santé'],
        strategicValue: 92
      },
      {
        formationId: 'leadership-digital-ethique',
        title: 'Leadership Digital Éthique',
        category: 'Management',
        currentScore: 91,
        potentialScore: 93,
        demandTrend: 'stable',
        competitionLevel: 'high',
        marketPotential: 2700000,
        currentROI: 220,
        projectedROI: 250,
        timeToBreakeven: '8-10 mois',
        recommendation: 'optimize',
        adjustments: [
          'Focus sur transformation digitale post-COVID',
          'Module "Management hybride et remote"',
          'Certification leadership responsable'
        ],
        threats: ['Marché saturé leadership', 'Concurrence business schools'],
        opportunities: ['Transformation digitale accélérée', 'ESG management'],
        strategicValue: 85
      },
      {
        formationId: 'freelancing-digital-ethique',
        title: 'Freelancing Digital Éthique',
        category: 'Entrepreneuriat',
        currentScore: 90,
        potentialScore: 92,
        demandTrend: 'rising',
        competitionLevel: 'low',
        marketPotential: 2600000,
        currentROI: 180,
        projectedROI: 210,
        timeToBreakeven: '2-4 mois',
        recommendation: 'prioritize',
        adjustments: [
          'Communauté freelances éthiques',
          'Outils de pricing transparent',
          'Réseau de clients responsables'
        ],
        threats: ['Précarisation freelance', 'Évolution statuts juridiques'],
        opportunities: ['Boom économie freelance', 'Recherche talents éthiques'],
        strategicValue: 88
      }
    ];

    // Opportunités émergentes identifiées
    const opportunities: EmergingOpportunity[] = [
      {
        id: 'data-governance-ai',
        domain: 'Gouvernance des Données & IA',
        description: 'Formation spécialisée en gouvernance et éthique des données avec focus IA responsable',
        marketSize: 5200000,
        growthRate: 85,
        competitionGap: 78,
        urgency: 'immediate',
        investmentRequired: 120000,
        expectedROI: 420,
        riskLevel: 'low',
        synergies: ['IA Éthique', 'Cybersécurité', 'Compliance RGPD'],
        targetLaunch: 'Q2 2025'
      },
      {
        id: 'sustainability-tech',
        domain: 'Technologies Durables & GreenTech',
        description: 'Écosystème complet autour des technologies vertes et de l\'impact environnemental du numérique',
        marketSize: 3800000,
        growthRate: 67,
        competitionGap: 85,
        urgency: 'short-term',
        investmentRequired: 95000,
        expectedROI: 315,
        riskLevel: 'medium',
        synergies: ['RSE Digitale', 'Économie Circulaire', 'Green IT'],
        targetLaunch: 'Q3 2025'
      },
      {
        id: 'metaverse-ethics',
        domain: 'Métaverse & Réalités Virtuelles Éthiques',
        description: 'Formation aux enjeux éthiques et opportunités business du métaverse responsable',
        marketSize: 2900000,
        growthRate: 125,
        competitionGap: 92,
        urgency: 'medium-term',
        investmentRequired: 150000,
        expectedROI: 380,
        riskLevel: 'high',
        synergies: ['IA Éthique', 'UX Design', 'Business Innovation'],
        targetLaunch: 'Q4 2025'
      },
      {
        id: 'quantum-computing-intro',
        domain: 'Informatique Quantique Appliquée',
        description: 'Introduction pratique à l\'informatique quantique pour business et applications éthiques',
        marketSize: 1800000,
        growthRate: 156,
        competitionGap: 95,
        urgency: 'medium-term',
        investmentRequired: 180000,
        expectedROI: 275,
        riskLevel: 'high',
        synergies: ['IA Avancée', 'Cryptographie', 'Innovation Tech'],
        targetLaunch: 'Q1 2026'
      },
      {
        id: 'neurotech-ethics',
        domain: 'Neurotechnologies & Éthique Cognitive',
        description: 'Exploration des neurotechnologies avec focus sur les implications éthiques et sociétales',
        marketSize: 1200000,
        growthRate: 89,
        competitionGap: 88,
        urgency: 'medium-term',
        investmentRequired: 110000,
        expectedROI: 240,
        riskLevel: 'medium',
        synergies: ['IA Éthique', 'Santé Digitale', 'Innovation Responsable'],
        targetLaunch: 'Q2 2026'
      },
      {
        id: 'blockchain-social-impact',
        domain: 'Blockchain & Impact Social',
        description: 'Applications blockchain pour l\'impact social, la transparence et la gouvernance démocratique',
        marketSize: 2100000,
        growthRate: 45,
        competitionGap: 65,
        urgency: 'short-term',
        investmentRequired: 85000,
        expectedROI: 195,
        riskLevel: 'medium',
        synergies: ['FinTech Responsable', 'RSE', 'Gouvernance'],
        targetLaunch: 'Q3 2025'
      }
    ];

    setViabilityData(currentAnalysis);
    setEmergingOpportunities(opportunities);
  }, []);

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case 'prioritize': return 'text-green-600 bg-green-50 border-green-200';
      case 'optimize': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'maintain': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'reconsider': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getRecommendationIcon = (recommendation: string) => {
    switch (recommendation) {
      case 'prioritize': return <ArrowUp className="h-4 w-4" />;
      case 'optimize': return <Target className="h-4 w-4" />;
      case 'maintain': return <Minus className="h-4 w-4" />;
      case 'reconsider': return <ArrowDown className="h-4 w-4" />;
      default: return <BarChart3 className="h-4 w-4" />;
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'immediate': return 'text-red-600 bg-red-50 border-red-200';
      case 'short-term': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'medium-term': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-600 border-green-200';
      case 'medium': return 'text-yellow-600 border-yellow-200';
      case 'high': return 'text-red-600 border-red-200';
      default: return 'text-gray-600 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header avec navigation */}
      <Card className="border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Analyse Stratégique CED & IA PrettyhowQ
          </CardTitle>
          <p className="text-center text-gray-600">
            Synthèse des scores de viabilité et opportunités émergentes
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Button
              variant={selectedView === 'current' ? 'default' : 'outline'}
              onClick={() => setSelectedView('current')}
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Formations Actuelles
            </Button>
            <Button
              variant={selectedView === 'opportunities' ? 'default' : 'outline'}
              onClick={() => setSelectedView('opportunities')}
            >
              <Lightbulb className="h-4 w-4 mr-2" />
              Opportunités Émergentes
            </Button>
          </div>
        </CardHeader>
      </Card>

      {selectedView === 'current' ? (
        <div className="space-y-6">
          {/* Synthèse globale */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="border-green-200">
              <CardContent className="p-4 text-center">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">
                  {viabilityData.filter(f => f.recommendation === 'prioritize').length}
                </p>
                <p className="text-sm text-gray-600">À Prioriser</p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-4 text-center">
                <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">
                  {viabilityData.filter(f => f.recommendation === 'optimize').length}
                </p>
                <p className="text-sm text-gray-600">À Optimiser</p>
              </CardContent>
            </Card>
            <Card className="border-purple-200">
              <CardContent className="p-4 text-center">
                <Euro className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-purple-600">
                  {Math.round(viabilityData.reduce((sum, f) => sum + f.marketPotential, 0) / 1000000)}M€
                </p>
                <p className="text-sm text-gray-600">Potentiel Total</p>
              </CardContent>
            </Card>
            <Card className="border-orange-200">
              <CardContent className="p-4 text-center">
                <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-orange-600">
                  {Math.round(viabilityData.reduce((sum, f) => sum + f.projectedROI, 0) / viabilityData.length)}%
                </p>
                <p className="text-sm text-gray-600">ROI Moyen</p>
              </CardContent>
            </Card>
          </div>

          {/* Analyse détaillée par formation */}
          <div className="space-y-4">
            {viabilityData
              .sort((a, b) => b.strategicValue - a.strategicValue)
              .map((formation) => (
                <motion.div
                  key={formation.formationId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{formation.title}</h3>
                      <p className="text-gray-600">{formation.category}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getRecommendationColor(formation.recommendation)}>
                        {getRecommendationIcon(formation.recommendation)}
                        <span className="ml-1">
                          {formation.recommendation === 'prioritize' ? 'PRIORITÉ' :
                           formation.recommendation === 'optimize' ? 'OPTIMISER' :
                           formation.recommendation === 'maintain' ? 'MAINTENIR' : 'RECONSIDÉRER'}
                        </span>
                      </Badge>
                      <Badge variant="outline" className="text-purple-600 border-purple-200">
                        Score: {formation.strategicValue}/100
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Métriques actuelles */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Performance Actuelle</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Score Viabilité:</span>
                          <span className="text-sm font-medium">{formation.currentScore}/100</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">ROI Actuel:</span>
                          <span className="text-sm font-medium text-green-600">+{formation.currentROI}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Potentiel Marché:</span>
                          <span className="text-sm font-medium">{(formation.marketPotential / 1000000).toFixed(1)}M€</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Break-even:</span>
                          <span className="text-sm font-medium">{formation.timeToBreakeven}</span>
                        </div>
                      </div>
                    </div>

                    {/* Projections */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Potentiel d'Amélioration</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Score Potentiel:</span>
                          <span className="text-sm font-medium text-blue-600">{formation.potentialScore}/100</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">ROI Projeté:</span>
                          <span className="text-sm font-medium text-green-600">+{formation.projectedROI}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Tendance:</span>
                          <Badge variant="outline" className={
                            formation.demandTrend === 'rising' ? 'text-green-600 border-green-200' :
                            formation.demandTrend === 'stable' ? 'text-blue-600 border-blue-200' :
                            'text-red-600 border-red-200'
                          }>
                            {formation.demandTrend === 'rising' ? '↗ Croissance' :
                             formation.demandTrend === 'stable' ? '→ Stable' : '↘ Déclin'}
                          </Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Concurrence:</span>
                          <Badge variant="outline" className={
                            formation.competitionLevel === 'low' ? 'text-green-600 border-green-200' :
                            formation.competitionLevel === 'medium' ? 'text-yellow-600 border-yellow-200' :
                            'text-red-600 border-red-200'
                          }>
                            {formation.competitionLevel === 'low' ? 'Faible' :
                             formation.competitionLevel === 'medium' ? 'Modérée' : 'Élevée'}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Recommandations */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Ajustements Recommandés</h4>
                      <div className="space-y-2">
                        {formation.adjustments.map((adjustment, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{adjustment}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Opportunités et menaces */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200">
                    <div>
                      <h5 className="font-medium text-green-800 mb-2 flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        Opportunités
                      </h5>
                      <ul className="space-y-1">
                        {formation.opportunities.map((opp, index) => (
                          <li key={index} className="text-sm text-green-700">• {opp}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-red-800 mb-2 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        Menaces
                      </h5>
                      <ul className="space-y-1">
                        {formation.threats.map((threat, index) => (
                          <li key={index} className="text-sm text-red-700">• {threat}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Métriques opportunités */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="border-purple-200">
              <CardContent className="p-4 text-center">
                <Lightbulb className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-purple-600">{emergingOpportunities.length}</p>
                <p className="text-sm text-gray-600">Opportunités Identifiées</p>
              </CardContent>
            </Card>
            <Card className="border-red-200">
              <CardContent className="p-4 text-center">
                <Zap className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-red-600">
                  {emergingOpportunities.filter(o => o.urgency === 'immediate').length}
                </p>
                <p className="text-sm text-gray-600">Actions Immédiates</p>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardContent className="p-4 text-center">
                <Euro className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">
                  {Math.round(emergingOpportunities.reduce((sum, o) => sum + o.marketSize, 0) / 1000000)}M€
                </p>
                <p className="text-sm text-gray-600">Marché Potentiel</p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-4 text-center">
                <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">
                  {Math.round(emergingOpportunities.reduce((sum, o) => sum + o.expectedROI, 0) / emergingOpportunities.length)}%
                </p>
                <p className="text-sm text-gray-600">ROI Moyen Attendu</p>
              </CardContent>
            </Card>
          </div>

          {/* Opportunités détaillées */}
          <div className="space-y-4">
            {emergingOpportunities
              .sort((a, b) => {
                const urgencyScore = { immediate: 3, 'short-term': 2, 'medium-term': 1 };
                return urgencyScore[b.urgency] - urgencyScore[a.urgency];
              })
              .map((opportunity) => (
                <motion.div
                  key={opportunity.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{opportunity.domain}</h3>
                      <p className="text-gray-600 mt-1">{opportunity.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getUrgencyColor(opportunity.urgency)}>
                        <Clock className="h-3 w-3 mr-1" />
                        {opportunity.urgency === 'immediate' ? 'IMMÉDIAT' :
                         opportunity.urgency === 'short-term' ? 'COURT TERME' : 'MOYEN TERME'}
                      </Badge>
                      <Badge variant="outline" className={getRiskColor(opportunity.riskLevel)}>
                        Risque: {opportunity.riskLevel === 'low' ? 'Faible' :
                                opportunity.riskLevel === 'medium' ? 'Modéré' : 'Élevé'}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Métriques de marché */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Analyse de Marché</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Taille Marché:</span>
                          <span className="text-sm font-medium">{(opportunity.marketSize / 1000000).toFixed(1)}M€</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Croissance:</span>
                          <span className="text-sm font-medium text-green-600">+{opportunity.growthRate}%/an</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Gap Concurrence:</span>
                          <span className="text-sm font-medium text-blue-600">{opportunity.competitionGap}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Lancement Cible:</span>
                          <span className="text-sm font-medium">{opportunity.targetLaunch}</span>
                        </div>
                      </div>
                    </div>

                    {/* Projections financières */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Projections Financières</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Investissement:</span>
                          <span className="text-sm font-medium">{opportunity.investmentRequired.toLocaleString()}€</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">ROI Attendu:</span>
                          <span className="text-sm font-medium text-green-600">+{opportunity.expectedROI}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Break-even:</span>
                          <span className="text-sm font-medium">
                            {opportunity.urgency === 'immediate' ? '6-9 mois' :
                             opportunity.urgency === 'short-term' ? '9-12 mois' : '12-18 mois'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Synergies */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Synergies Existantes</h4>
                      <div className="flex flex-wrap gap-1">
                        {opportunity.synergies.map((synergy, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {synergy}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-4 pt-4 border-t border-gray-200">
                    <Button className="flex-1">
                      <Target className="h-4 w-4 mr-2" />
                      Lancer Étude Faisabilité
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Users className="h-4 w-4 mr-2" />
                      Identifier Partenaires
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Analyser Concurrence
                    </Button>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}