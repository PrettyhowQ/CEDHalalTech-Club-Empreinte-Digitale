import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  Target,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  Building2,
  Globe,
  Shield,
  Award,
  Zap,
  CheckCircle,
  Clock,
  Phone,
  Mail,
  MapPin,
  Star,
  Briefcase,
  Heart,
  Rocket,
  BarChart3,
  PieChart,
  LineChart
} from 'lucide-react';

interface LaunchPhase {
  id: string;
  name: string;
  duration: string;
  startDate: string;
  objectives: string[];
  kpis: { metric: string; target: string; current: number }[];
  budget: number;
  team: string[];
  risks: string[];
  milestones: { name: string; date: string; status: 'pending' | 'progress' | 'completed' }[];
}

interface MarketSegment {
  id: string;
  name: string;
  size: number;
  potential: number;
  priority: 'high' | 'medium' | 'low';
  characteristics: string[];
  approach: string;
  timeline: string;
  expectedRevenue: number;
}

interface Channel {
  id: string;
  name: string;
  type: 'digital' | 'physical' | 'partnership' | 'direct';
  cost: number;
  reach: number;
  conversion: number;
  roi: number;
  timeline: string;
  description: string;
}

export function AlAmanCEDLaunchStrategy() {
  const [activeTab, setActiveTab] = useState('market-entry');
  const [selectedPhase, setSelectedPhase] = useState('phase-1');

  const launchPhases: LaunchPhase[] = [
    {
      id: 'phase-1',
      name: 'Phase 1: Établissement Réglementaire',
      duration: '6 mois',
      startDate: '2025-07-01',
      objectives: [
        'Obtenir licence assurance UAE',
        'Établir bureau DIFC Dubai',
        'Certification Charia locale',
        'Équipe core team sur place',
        'Partenariats stratégiques initiaux'
      ],
      kpis: [
        { metric: 'Licence obtenue', target: '100%', current: 0 },
        { metric: 'Bureau opérationnel', target: '100%', current: 0 },
        { metric: 'Équipe recrutée', target: '12 personnes', current: 0 },
        { metric: 'Partenariats signés', target: '5 accords', current: 0 },
        { metric: 'Budget utilisé', target: '2.5M AED', current: 0 }
      ],
      budget: 2500000,
      team: [
        'Directeur Général UAE',
        'Responsable Conformité',
        'Directeur Commercial',
        'Chef Technique',
        'Responsable Charia',
        'Équipe Support Client'
      ],
      risks: [
        'Délais licence plus longs',
        'Recrutement talent local',
        'Exigences réglementaires changeantes',
        'Concurrence établie'
      ],
      milestones: [
        { name: 'Dépôt dossier licence', date: '2025-07-15', status: 'pending' },
        { name: 'Location bureau DIFC', date: '2025-08-01', status: 'pending' },
        { name: 'Recrutement équipe', date: '2025-09-15', status: 'pending' },
        { name: 'Certification Charia', date: '2025-10-01', status: 'pending' },
        { name: 'Partenariats initiaux', date: '2025-11-15', status: 'pending' },
        { name: 'Licence approuvée', date: '2025-12-31', status: 'pending' }
      ]
    },
    {
      id: 'phase-2',
      name: 'Phase 2: Lancement Commercial',
      duration: '12 mois',
      startDate: '2026-01-01',
      objectives: [
        'Lancement produits Takaful certifiés',
        'Intégration complète CED Bank',
        'Campagne marketing ciblée',
        'Acquisition 10K premiers clients',
        'Support 24/7 opérationnel'
      ],
      kpis: [
        { metric: 'Clients acquis', target: '10,000', current: 0 },
        { metric: 'Primes collectées', target: '15M AED', current: 0 },
        { metric: 'Taux satisfaction', target: '95%', current: 0 },
        { metric: 'Part marché', target: '0.8%', current: 0 },
        { metric: 'ROI marketing', target: '300%', current: 0 }
      ],
      budget: 8000000,
      team: [
        'Équipe Ventes (15 pers.)',
        'Marketing Digital (8 pers.)',
        'Support Client (12 pers.)',
        'Actuaires (5 pers.)',
        'IT/Tech (10 pers.)'
      ],
      risks: [
        'Adoption plus lente que prévue',
        'Concurrence prix agressive',
        'Défis techniques intégration',
        'Réglementation évolutive'
      ],
      milestones: [
        { name: 'Lancement produits', date: '2026-01-15', status: 'pending' },
        { name: 'Campagne marketing', date: '2026-02-01', status: 'pending' },
        { name: '1000 premiers clients', date: '2026-03-31', status: 'pending' },
        { name: '5000 clients', date: '2026-06-30', status: 'pending' },
        { name: '10000 clients', date: '2026-09-30', status: 'pending' },
        { name: 'Break-even opérationnel', date: '2026-12-31', status: 'pending' }
      ]
    },
    {
      id: 'phase-3',
      name: 'Phase 3: Expansion & Leadership',
      duration: '18 mois',
      startDate: '2027-01-01',
      objectives: [
        'Atteindre 50K clients UAE',
        'Expansion autres émirats',
        'Innovation produits avancés',
        'Leadership Takaful UAE',
        'Préparation expansion GCC'
      ],
      kpis: [
        { metric: 'Clients total', target: '50,000', current: 0 },
        { metric: 'Primes annuelles', target: '85M AED', current: 0 },
        { metric: 'Part marché Takaful', target: '8.5%', current: 0 },
        { metric: 'Rentabilité', target: '25% marge', current: 0 },
        { metric: 'NPS Score', target: '70+', current: 0 }
      ],
      budget: 15000000,
      team: [
        'Équipe élargie (100+ pers.)',
        'Centres régionaux',
        'R&D Innovation',
        'Expansion team',
        'Académie formation'
      ],
      risks: [
        'Saturation marché local',
        'Nouveaux entrants',
        'Évolution réglementaire',
        'Complexité opérationnelle'
      ],
      milestones: [
        { name: '20K clients', date: '2027-03-31', status: 'pending' },
        { name: 'Expansion Abu Dhabi', date: '2027-06-30', status: 'pending' },
        { name: '35K clients', date: '2027-09-30', status: 'pending' },
        { name: 'Leadership position', date: '2027-12-31', status: 'pending' },
        { name: '50K clients', date: '2028-06-30', status: 'pending' }
      ]
    }
  ];

  const marketSegments: MarketSegment[] = [
    {
      id: 'ced-ecosystem',
      name: 'Écosystème CED Existant',
      size: 847293,
      potential: 70,
      priority: 'high',
      characteristics: [
        'Déjà clients CED Bank',
        'Utilisateurs formations CED',
        'Membres TechForAll',
        'Fidélité élevée',
        'Confiance établie'
      ],
      approach: 'Marketing direct intégré, offres préférentielles, communication in-app',
      timeline: 'Mois 1-6',
      expectedRevenue: 25000000
    },
    {
      id: 'muslim-professionals',
      name: 'Professionnels Musulmans Dubai',
      size: 450000,
      potential: 35,
      priority: 'high',
      characteristics: [
        'Revenus moyens/élevés',
        'Sensibles conformité Charia',
        'Expatriés éduqués',
        'Famille avec enfants',
        'Technologie-friendly'
      ],
      approach: 'LinkedIn, événements business, partenariats mosquées, influenceurs',
      timeline: 'Mois 3-12',
      expectedRevenue: 18000000
    },
    {
      id: 'local-families',
      name: 'Familles Émiriennes',
      size: 280000,
      potential: 55,
      priority: 'medium',
      characteristics: [
        'Valeurs traditionnelles',
        'Conformité religieuse importante',
        'Patrimoine familial',
        'Réseaux communautaires',
        'Bouche-à-oreille efficace'
      ],
      approach: 'Partenariats communautaires, événements culturels, ambassadeurs locaux',
      timeline: 'Mois 6-18',
      expectedRevenue: 22000000
    },
    {
      id: 'young-generation',
      name: 'Jeune Génération Musulmane',
      size: 320000,
      potential: 25,
      priority: 'medium',
      characteristics: [
        '25-35 ans',
        'Digital natives',
        'Premiers achats assurance',
        'Sensibles innovation',
        'Valeurs islamiques modernes'
      ],
      approach: 'Réseaux sociaux, marketing digital, gamification, influenceurs',
      timeline: 'Mois 9-24',
      expectedRevenue: 12000000
    },
    {
      id: 'businesses',
      name: 'Entreprises Halal',
      size: 25000,
      potential: 80,
      priority: 'high',
      characteristics: [
        'PME/ETI conformes Charia',
        'Secteurs halal',
        'Besoins spécialisés',
        'Contrats volumineux',
        'Relation B2B long-terme'
      ],
      approach: 'Vente directe, événements sectoriels, partenariats chambres commerce',
      timeline: 'Mois 12-36',
      expectedRevenue: 35000000
    }
  ];

  const channels: Channel[] = [
    {
      id: 'ced-ecosystem',
      name: 'Écosystème CED Intégré',
      type: 'digital',
      cost: 500000,
      reach: 847293,
      conversion: 25,
      roi: 650,
      timeline: 'Immédiat',
      description: 'Marketing in-app CED Bank, formations, notifications push ciblées'
    },
    {
      id: 'digital-marketing',
      name: 'Marketing Digital',
      type: 'digital',
      cost: 2000000,
      reach: 1200000,
      conversion: 8,
      roi: 320,
      timeline: '3-6 mois',
      description: 'Google Ads, Facebook/Instagram, LinkedIn, YouTube, SEO'
    },
    {
      id: 'partnerships',
      name: 'Partenariats Stratégiques',
      type: 'partnership',
      cost: 1200000,
      reach: 500000,
      conversion: 15,
      roi: 450,
      timeline: '6-12 mois',
      description: 'Mosquées, centres islamiques, associations professionnelles'
    },
    {
      id: 'direct-sales',
      name: 'Vente Directe B2B',
      type: 'direct',
      cost: 1800000,
      reach: 50000,
      conversion: 35,
      roi: 580,
      timeline: '12-18 mois',
      description: 'Équipe commerciale dédiée, événements business, salons'
    },
    {
      id: 'retail-presence',
      name: 'Présence Physique',
      type: 'physical',
      cost: 3000000,
      reach: 800000,
      conversion: 12,
      roi: 280,
      timeline: '18-24 mois',
      description: 'Centres commerciaux, agences partenaires, kiosques'
    },
    {
      id: 'referral-program',
      name: 'Programme Parrainage',
      type: 'digital',
      cost: 800000,
      reach: 300000,
      conversion: 22,
      roi: 520,
      timeline: '6-9 mois',
      description: 'Incitations clients existants, système de récompenses'
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-orange-100 text-orange-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getChannelTypeIcon = (type: string) => {
    switch (type) {
      case 'digital': return <Globe className="h-4 w-4" />;
      case 'physical': return <Building2 className="h-4 w-4" />;
      case 'partnership': return <Users className="h-4 w-4" />;
      case 'direct': return <Briefcase className="h-4 w-4" />;
      default: return <Target className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="flex justify-center items-center gap-4">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 flex items-center justify-center"
            >
              <Rocket className="h-10 w-10 text-white" />
            </motion.div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Stratégie de Lancement
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700">
                Al-Aman CED - Marché Dubai UAE
              </h2>
            </div>
          </div>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Plan go-to-market complet pour positionner Al-Aman CED comme leader du Takaful 
            aux Émirats Arabes Unis avec objectif 50K clients en 3 ans
          </p>
        </motion.div>

        {/* Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="market-entry">Phases de Lancement</TabsTrigger>
            <TabsTrigger value="segments">Segments Marché</TabsTrigger>
            <TabsTrigger value="channels">Canaux Distribution</TabsTrigger>
            <TabsTrigger value="projections">Projections Financières</TabsTrigger>
          </TabsList>

          {/* Phases de lancement */}
          <TabsContent value="market-entry" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {launchPhases.map((phase, index) => (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      selectedPhase === phase.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                    }`}
                    onClick={() => setSelectedPhase(phase.id)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                          index === 0 ? 'bg-green-500' : index === 1 ? 'bg-blue-500' : 'bg-purple-500'
                        }`}>
                          {index + 1}
                        </div>
                        <Badge variant="outline">{phase.duration}</Badge>
                      </div>
                      <CardTitle className="text-lg">{phase.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-sm text-gray-600">
                          Début: {new Date(phase.startDate).toLocaleDateString('fr-FR')}
                        </div>
                        <div className="text-sm">
                          Budget: <span className="font-bold text-green-600">{formatCurrency(phase.budget)}</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium mb-1">Objectifs clés:</div>
                          <ul className="text-xs space-y-1">
                            {phase.objectives.slice(0, 3).map((obj, idx) => (
                              <li key={idx} className="flex items-start gap-1">
                                <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <span>{obj}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Détail phase sélectionnée */}
            {selectedPhase && (
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {launchPhases.find(p => p.id === selectedPhase)?.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {(() => {
                    const phase = launchPhases.find(p => p.id === selectedPhase);
                    if (!phase) return null;

                    return (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        
                        {/* KPIs */}
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <BarChart3 className="h-5 w-5" />
                              Indicateurs Clés (KPIs)
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              {phase.kpis.map((kpi, idx) => (
                                <div key={idx}>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span>{kpi.metric}</span>
                                    <span className="font-bold">{kpi.target}</span>
                                  </div>
                                  <Progress 
                                    value={kpi.current} 
                                    className="h-2"
                                  />
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>

                        {/* Milestones */}
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <Calendar className="h-5 w-5" />
                              Jalons Importants
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {phase.milestones.map((milestone, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-2 rounded border">
                                  <div className={`w-3 h-3 rounded-full ${
                                    milestone.status === 'completed' ? 'bg-green-500' :
                                    milestone.status === 'progress' ? 'bg-yellow-500' : 'bg-gray-300'
                                  }`}></div>
                                  <div className="flex-1">
                                    <div className="text-sm font-medium">{milestone.name}</div>
                                    <div className="text-xs text-gray-600">{milestone.date}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>

                        {/* Équipe */}
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <Users className="h-5 w-5" />
                              Équipe Requise
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              {phase.team.map((role, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  <span>{role}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>

                        {/* Risques */}
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <Shield className="h-5 w-5" />
                              Risques Identifiés
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              {phase.risks.map((risk, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-sm">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{risk}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })()}
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Segments de marché */}
          <TabsContent value="segments" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {marketSegments.map((segment, index) => (
                <motion.div
                  key={segment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge className={getPriorityColor(segment.priority)}>
                          {segment.priority}
                        </Badge>
                        <div className="text-right">
                          <div className="text-lg font-bold">{formatNumber(segment.size)}</div>
                          <div className="text-xs text-gray-600">taille marché</div>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{segment.name}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Potentiel conversion</span>
                          <span className="font-bold">{segment.potential}%</span>
                        </div>
                        <Progress value={segment.potential} className="h-2" />
                      </div>

                      <div>
                        <h4 className="font-medium text-sm mb-2">Caractéristiques:</h4>
                        <div className="space-y-1">
                          {segment.characteristics.slice(0, 4).map((char, idx) => (
                            <div key={idx} className="text-xs flex items-start gap-1">
                              <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              <span>{char}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm mb-1">Approche:</h4>
                        <p className="text-xs text-gray-600">{segment.approach}</p>
                      </div>

                      <div className="flex justify-between items-center pt-2 border-t">
                        <div className="text-xs text-gray-500">{segment.timeline}</div>
                        <div className="text-sm font-bold text-green-600">
                          {formatCurrency(segment.expectedRevenue)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Résumé segments */}
            <Card className="bg-gradient-to-r from-blue-100 to-green-100">
              <CardHeader>
                <CardTitle>Résumé Marché Total Addressable</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-700">
                      {formatNumber(marketSegments.reduce((sum, seg) => sum + seg.size, 0))}
                    </div>
                    <div className="text-sm text-blue-600">Total Prospects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-700">
                      {formatCurrency(marketSegments.reduce((sum, seg) => sum + seg.expectedRevenue, 0))}
                    </div>
                    <div className="text-sm text-green-600">Revenus Potentiels</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-700">
                      {Math.round(marketSegments.reduce((sum, seg) => sum + (seg.size * seg.potential / 100), 0) / 1000)}K
                    </div>
                    <div className="text-sm text-purple-600">Clients Potentiels</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-700">36M</div>
                    <div className="text-sm text-amber-600">ROI 3 ans</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Canaux de distribution */}
          <TabsContent value="channels" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {channels.map((channel, index) => (
                <motion.div
                  key={channel.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {getChannelTypeIcon(channel.type)}
                          <CardTitle className="text-lg">{channel.name}</CardTitle>
                        </div>
                        <Badge variant="outline">{channel.timeline}</Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-sm text-gray-600">{channel.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-blue-50 rounded">
                          <div className="text-lg font-bold text-blue-700">{formatNumber(channel.reach)}</div>
                          <div className="text-xs text-blue-600">Portée</div>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded">
                          <div className="text-lg font-bold text-green-700">{channel.conversion}%</div>
                          <div className="text-xs text-green-600">Conversion</div>
                        </div>
                        <div className="text-center p-3 bg-purple-50 rounded">
                          <div className="text-lg font-bold text-purple-700">{formatCurrency(channel.cost)}</div>
                          <div className="text-xs text-purple-600">Coût</div>
                        </div>
                        <div className="text-center p-3 bg-amber-50 rounded">
                          <div className="text-lg font-bold text-amber-700">{channel.roi}%</div>
                          <div className="text-xs text-amber-600">ROI</div>
                        </div>
                      </div>

                      <div className="pt-2 border-t">
                        <div className="flex justify-between text-sm">
                          <span>Clients potentiels</span>
                          <span className="font-bold">
                            {formatNumber(Math.round(channel.reach * channel.conversion / 100))}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Mix optimal canaux */}
            <Card className="bg-gradient-to-r from-purple-100 to-blue-100">
              <CardHeader>
                <CardTitle>Mix Optimal des Canaux - ROI Maximisé</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-bold text-purple-800">Phase 1-6 mois</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Écosystème CED</span>
                        <span className="font-bold">60%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Digital Marketing</span>
                        <span className="font-bold">30%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Partenariats</span>
                        <span className="font-bold">10%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-bold text-blue-800">Phase 2-12 mois</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Digital Marketing</span>
                        <span className="font-bold">40%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Écosystème CED</span>
                        <span className="font-bold">25%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Partenariats</span>
                        <span className="font-bold">25%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Vente Directe</span>
                        <span className="font-bold">10%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-bold text-green-800">Phase 3-18+ mois</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Vente Directe B2B</span>
                        <span className="font-bold">30%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Parrainage</span>
                        <span className="font-bold">25%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Présence Physique</span>
                        <span className="font-bold">20%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Digital</span>
                        <span className="font-bold">25%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projections financières */}
          <TabsContent value="projections" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Revenus projetés */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="h-5 w-5" />
                    Projections Revenus (AED)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { year: 'Année 1', clients: 10000, prime: 1200, total: 12000000 },
                      { year: 'Année 2', clients: 25000, prime: 1350, total: 33750000 },
                      { year: 'Année 3', clients: 50000, prime: 1500, total: 75000000 }
                    ].map((proj, idx) => (
                      <div key={idx} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-bold text-lg">{proj.year}</h4>
                          <div className="text-xl font-bold text-green-600">
                            {formatCurrency(proj.total)}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Clients: </span>
                            <span className="font-medium">{formatNumber(proj.clients)}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Prime moy: </span>
                            <span className="font-medium">{formatCurrency(proj.prime)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Coûts et rentabilité */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5" />
                    Structure Coûts Année 2
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { categorie: 'Sinistres payés', montant: 20250000, pourcentage: 60 },
                      { categorie: 'Frais généraux', montant: 6750000, pourcentage: 20 },
                      { categorie: 'Marketing/Acquisition', montant: 3375000, pourcentage: 10 },
                      { categorie: 'Commission agents', montant: 2025000, pourcentage: 6 },
                      { categorie: 'Marge brute', montant: 1350000, pourcentage: 4 }
                    ].map((cost, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{cost.categorie}</span>
                          <span className="font-bold">{formatCurrency(cost.montant)}</span>
                        </div>
                        <Progress value={cost.pourcentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Métriques clés */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Métriques Clés de Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-700">8.5%</div>
                      <div className="text-sm text-blue-600">Part marché Takaful</div>
                      <div className="text-xs text-gray-500">Objectif année 3</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-700">25%</div>
                      <div className="text-sm text-green-600">Marge nette</div>
                      <div className="text-xs text-gray-500">Régime croisière</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-700">450%</div>
                      <div className="text-sm text-purple-600">ROI 3 ans</div>
                      <div className="text-xs text-gray-500">Sur investissement</div>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-lg">
                      <div className="text-2xl font-bold text-amber-700">18M</div>
                      <div className="text-sm text-amber-600">Break-even</div>
                      <div className="text-xs text-gray-500">Mois pour rentabilité</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sensibilité et scénarios */}
            <Card className="bg-gradient-to-r from-gray-100 to-blue-100">
              <CardHeader>
                <CardTitle>Analyse de Sensibilité - Scénarios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-green-50 rounded border-2 border-green-200">
                    <h3 className="font-bold text-green-800 mb-2">Scénario Optimiste</h3>
                    <div className="space-y-2 text-sm">
                      <div>Clients An 3: <span className="font-bold">75K</span></div>
                      <div>Revenus: <span className="font-bold">112M AED</span></div>
                      <div>Part marché: <span className="font-bold">12%</span></div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded border-2 border-blue-200">
                    <h3 className="font-bold text-blue-800 mb-2">Scénario Réaliste</h3>
                    <div className="space-y-2 text-sm">
                      <div>Clients An 3: <span className="font-bold">50K</span></div>
                      <div>Revenus: <span className="font-bold">75M AED</span></div>
                      <div>Part marché: <span className="font-bold">8.5%</span></div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded border-2 border-orange-200">
                    <h3 className="font-bold text-orange-800 mb-2">Scénario Conservateur</h3>
                    <div className="space-y-2 text-sm">
                      <div>Clients An 3: <span className="font-bold">35K</span></div>
                      <div>Revenus: <span className="font-bold">52M AED</span></div>
                      <div>Part marché: <span className="font-bold">6%</span></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-lg font-medium text-gray-700">
                    Même dans le scénario conservateur, Al-Aman CED atteint la rentabilité 
                    et devient un acteur significatif du marché Takaful UAE
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}