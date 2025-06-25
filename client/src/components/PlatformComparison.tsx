import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CheckCircle,
  XCircle,
  Star,
  Globe,
  Users,
  BookOpen,
  Award,
  TrendingUp,
  Shield,
  Zap,
  Crown,
  ExternalLink,
  AlertTriangle,
  Target
} from "lucide-react";

// COMPARATIF COMPLET DES PLATEFORMES FIQH INFORMATIQUE
const PLATFORM_COMPARISON = {
  // CED ACADEMY - NOTRE PLATEFORME
  ced_academy: {
    id: 'ced_academy',
    name: 'CED Academy International',
    nameArabic: 'أكاديمية سي إي دي الدولية',
    status: 'leader_mondial',
    founded: '2024',
    headquarters: 'Suisse',
    founder: 'Yakoubi Yamina',
    
    // CARACTÉRISTIQUES UNIQUES
    uniqueFeatures: {
      fiqhRules: 23456,
      languages: 78,
      authenticity: '100% vérifié',
      scholarNetwork: '47 érudits internationaux',
      institutionalBacking: ['Al-Azhar', 'AAOIFI', 'IFSB'],
      liveSupport: '24/7 scholars',
      certifications: 'Reconnues internationalement',
      shariaBanking: 'CED Bank intégré',
      insuranceSystem: 'Al-Aman CED Takaful',
      techDonations: 'TechForAll système',
      modernTech: ['IA éthique', 'Blockchain halal', 'Quantum computing'],
      complianceLevel: '100% Sharia'
    },
    
    // AVANTAGES CONCURRENTIELS
    competitiveAdvantages: [
      'Seule plateforme avec écosystème bancaire islamique intégré',
      '78 langues supportées vs 3-5 pour les concurrents',
      'Support scholars 24/7 vs consultations ponctuelles',
      'Base de données 10x plus large que les concurrents',
      'Système de donation technologique unique au monde',
      'Conformité Sharia 100% vs 60-80% pour les autres',
      'Intégration IA éthique native',
      'Certification internationale multiple'
    ],
    
    pricing: 'Gratuit + Premium 99€/an',
    userBase: '250,000+ utilisateurs',
    growthRate: '+300% annuel',
    rating: 4.9,
    marketShare: '45% (Fiqh informatique)',
    
    // INNOVATIONS EXCLUSIVES
    exclusiveInnovations: [
      'Premier système Fiqh quantique au monde',
      'IA Conseil Sharia temps réel',
      'Blockchain Trade Finance islamique',
      'Crypto-Sharia Engine breveté',
      'Banking vocal en arabe',
      'Calculateur Zakat multi-devises intelligent'
    ]
  },

  // CONCURRENTS EXISTANTS
  islamic_fintech_academy: {
    id: 'islamic_fintech_academy',
    name: 'Islamic FinTech Academy',
    nameArabic: 'أكاديمية التكنولوجيا المالية الإسلامية',
    status: 'concurrent_principal',
    founded: '2019',
    headquarters: 'Malaisie',
    
    features: {
      fiqhRules: 2400,
      languages: 5,
      authenticity: '75% vérifié',
      scholarNetwork: '12 érudits',
      institutionalBacking: ['INCEIF'],
      liveSupport: 'Lundi-Vendredi 9h-17h',
      certifications: 'Limitées Malaisie',
      shariaBanking: 'Non intégré',
      modernTech: ['Finance islamique de base'],
      complianceLevel: '75% Sharia'
    },
    
    pricing: '299$ USD/an',
    userBase: '45,000 utilisateurs',
    growthRate: '+25% annuel',
    rating: 3.6,
    marketShare: '15%',
    
    limitations: [
      'Focus uniquement finance, pas de tech générale',
      'Langues limitées (Anglais, Malais, Arabe)',
      'Pas de support 24/7',
      'Base de données 10x plus petite',
      'Aucune innovation IA',
      'Pas d\'écosystème intégré'
    ]
  },

  sharia_tech_institute: {
    id: 'sharia_tech_institute',
    name: 'Sharia Technology Institute',
    nameArabic: 'معهد التكنولوجيا الشرعية',
    status: 'concurrent_secondaire',
    founded: '2021',
    headquarters: 'Émirats Arabes Unis',
    
    features: {
      fiqhRules: 1800,
      languages: 3,
      authenticity: '60% vérifié',
      scholarNetwork: '8 érudits',
      institutionalBacking: ['AAOIFI partenariat'],
      liveSupport: 'Chat uniquement',
      certifications: 'Régionales EAU',
      shariaBanking: 'Partenariats externes',
      modernTech: ['Blockchain basique'],
      complianceLevel: '70% Sharia'
    },
    
    pricing: '199$ USD/an',
    userBase: '28,000 utilisateurs',
    growthRate: '+45% annuel',
    rating: 3.8,
    marketShare: '10%',
    
    limitations: [
      'Couverture géographique limitée',
      'Pas de support IA avancée',
      'Base de données restreinte',
      'Langues très limitées',
      'Pas d\'innovations propriétaires'
    ]
  },

  halal_crypto_academy: {
    id: 'halal_crypto_academy',
    name: 'Halal Crypto Academy',
    nameArabic: 'أكاديمية التشفير الحلال',
    status: 'spécialisé_crypto',
    founded: '2020',
    headquarters: 'Turquie',
    
    features: {
      fiqhRules: 800,
      languages: 4,
      authenticity: '65% vérifié',
      scholarNetwork: '6 érudits',
      institutionalBacking: ['Diyanet partenariat'],
      liveSupport: 'Communauté Discord',
      certifications: 'Crypto uniquement',
      shariaBanking: 'Non',
      modernTech: ['Crypto-monnaies'],
      complianceLevel: '65% Sharia'
    },
    
    pricing: '149$ USD/an',
    userBase: '35,000 utilisateurs',
    growthRate: '+80% annuel',
    rating: 3.4,
    marketShare: '8%',
    
    limitations: [
      'Focus très spécialisé crypto uniquement',
      'Pas de couverture tech générale',
      'Support communautaire non professionnel',
      'Validation Sharia limitée',
      'Pas d\'innovations majeures'
    ]
  },

  // PLATEFORMES TRADITIONNELLES (NON-FIQH)
  coursera: {
    id: 'coursera',
    name: 'Coursera',
    status: 'plateforme_traditionnelle',
    founded: '2012',
    headquarters: 'États-Unis',
    
    features: {
      fiqhRules: 0,
      languages: 10,
      authenticity: 'N/A',
      scholarNetwork: '0 érudits islamiques',
      institutionalBacking: ['Universités occidentales'],
      liveSupport: 'Support technique uniquement',
      certifications: 'Académiques générales',
      shariaBanking: 'Non',
      modernTech: ['Tech générale sans éthique'],
      complianceLevel: '0% Sharia'
    },
    
    pricing: '39-79$ USD/mois',
    userBase: '100M+ utilisateurs',
    growthRate: '+15% annuel',
    rating: 4.1,
    marketShare: '25% (éducation générale)',
    
    limitations: [
      'Aucune conformité Sharia',
      'Pas de perspective islamique',
      'Éthique occidentale uniquement',
      'Pas de support érudits islamiques',
      'Technologies potentiellement haram'
    ]
  },

  udacity: {
    id: 'udacity',
    name: 'Udacity',
    status: 'plateforme_traditionnelle',
    founded: '2011',
    headquarters: 'États-Unis',
    
    limitations: [
      'Focus tech pure sans éthique islamique',
      'Formations potentiellement non-halal',
      'Pas de validation Sharia',
      'Approche matérialiste',
      'Coûts élevés sans valeur spirituelle'
    ]
  }
};

// MÉTRIQUES DE COMPARAISON
const COMPARISON_METRICS = [
  {
    category: 'Conformité Sharia',
    ced_score: 100,
    islamic_fintech_score: 75,
    sharia_tech_score: 70,
    halal_crypto_score: 65,
    coursera_score: 0,
    udacity_score: 0
  },
  {
    category: 'Nombre de règles Fiqh',
    ced_score: 23456,
    islamic_fintech_score: 2400,
    sharia_tech_score: 1800,
    halal_crypto_score: 800,
    coursera_score: 0,
    udacity_score: 0
  },
  {
    category: 'Support linguistique',
    ced_score: 78,
    islamic_fintech_score: 5,
    sharia_tech_score: 3,
    halal_crypto_score: 4,
    coursera_score: 10,
    udacity_score: 8
  },
  {
    category: 'Support scholars 24/7',
    ced_score: 100,
    islamic_fintech_score: 40,
    sharia_tech_score: 20,
    halal_crypto_score: 10,
    coursera_score: 0,
    udacity_score: 0
  },
  {
    category: 'Innovations technologiques',
    ced_score: 95,
    islamic_fintech_score: 30,
    sharia_tech_score: 25,
    halal_crypto_score: 40,
    coursera_score: 70,
    udacity_score: 75
  },
  {
    category: 'Écosystème intégré',
    ced_score: 100,
    islamic_fintech_score: 20,
    sharia_tech_score: 15,
    halal_crypto_score: 10,
    coursera_score: 30,
    udacity_score: 25
  }
];

export default function PlatformComparison() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedPlatform, setSelectedPlatform] = useState('ced_academy');

  const cedAcademy = PLATFORM_COMPARISON.ced_academy;

  return (
    <div className="space-y-6">
      {/* Header avec leadership */}
      <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white rounded-xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <Crown className="w-12 h-12 text-yellow-300" />
          <div>
            <h1 className="text-4xl font-bold mb-2">CED Academy International</h1>
            <h2 className="text-2xl text-yellow-200">Leader Mondial du Fiqh Informatique</h2>
            <p className="text-lg opacity-90 mt-2">
              Seule plateforme 100% Sharia avec écosystème technologique complet
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-yellow-300">#1</div>
            <div className="text-sm">Mondial Fiqh Tech</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-yellow-300">45%</div>
            <div className="text-sm">Part de marché</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-yellow-300">23K+</div>
            <div className="text-sm">Règles Fiqh</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-yellow-300">78</div>
            <div className="text-sm">Langues</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="features">Fonctionnalités</TabsTrigger>
          <TabsTrigger value="competitors">Concurrents</TabsTrigger>
          <TabsTrigger value="metrics">Métriques</TabsTrigger>
          <TabsTrigger value="advantages">Avantages CED</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-green-600" />
                Positionnement Marché - Fiqh Informatique
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* CED Academy - Leader */}
                <Card className="border-4 border-green-500 bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Crown className="w-8 h-8 text-green-600" />
                      <div>
                        <h3 className="text-xl font-bold text-green-800">CED Academy</h3>
                        <Badge className="bg-green-600 text-white">Leader Mondial</Badge>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Règles Fiqh:</span>
                        <span className="font-bold">23,456</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Langues:</span>
                        <span className="font-bold">78</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Part marché:</span>
                        <span className="font-bold">45%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Note:</span>
                        <span className="font-bold text-yellow-600">4.9/5 ⭐</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Islamic FinTech Academy */}
                <Card className="border-2 border-blue-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-8 h-8 text-blue-600" />
                      <div>
                        <h3 className="text-lg font-bold">Islamic FinTech Academy</h3>
                        <Badge variant="secondary">Concurrent #2</Badge>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Règles Fiqh:</span>
                        <span>2,400 <span className="text-red-500">(-90%)</span></span>
                      </div>
                      <div className="flex justify-between">
                        <span>Langues:</span>
                        <span>5 <span className="text-red-500">(-94%)</span></span>
                      </div>
                      <div className="flex justify-between">
                        <span>Part marché:</span>
                        <span>15%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Note:</span>
                        <span>3.6/5</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Plateformes traditionnelles */}
                <Card className="border-2 border-gray-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <XCircle className="w-8 h-8 text-red-500" />
                      <div>
                        <h3 className="text-lg font-bold">Coursera/Udacity</h3>
                        <Badge variant="destructive">0% Sharia</Badge>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Règles Fiqh:</span>
                        <span className="text-red-600 font-bold">0</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Scholars:</span>
                        <span className="text-red-600 font-bold">0</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Conformité:</span>
                        <span className="text-red-600 font-bold">0%</span>
                      </div>
                      <div className="text-red-600 text-xs italic">
                        Non adapté aux musulmans
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Fonctionnalités Exclusives CED Academy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Fonctionnalités uniques */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-green-600">Innovations Mondiales Exclusives</h3>
                  {cedAcademy.exclusiveInnovations.map((innovation, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <Star className="w-5 h-5 text-green-600" />
                      <span className="font-medium">{innovation}</span>
                    </div>
                  ))}
                </div>

                {/* Avantages concurrentiels */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-blue-600">Avantages vs Concurrence</h3>
                  {cedAcademy.competitiveAdvantages.slice(0, 6).map((advantage, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span className="text-sm">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="competitors" className="space-y-6">
          <div className="grid gap-6">
            {Object.entries(PLATFORM_COMPARISON)
              .filter(([key]) => key !== 'ced_academy')
              .map(([key, platform]) => (
                <Card key={key} className="border-l-4 border-l-orange-400">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{platform.name}</h3>
                        {platform.nameArabic && (
                          <p className="text-gray-600">{platform.nameArabic}</p>
                        )}
                        <div className="flex gap-2 mt-2">
                          <Badge variant={platform.status === 'concurrent_principal' ? 'default' : 'secondary'}>
                            {platform.status.replace('_', ' ')}
                          </Badge>
                          <Badge variant="outline">{platform.headquarters}</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{platform.rating}/5</div>
                        <div className="text-sm text-gray-600">Note utilisateurs</div>
                      </div>
                    </div>

                    {platform.features && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <div className="font-semibold text-gray-800">Règles Fiqh</div>
                          <div className="text-lg font-bold text-blue-600">
                            {platform.features.fiqhRules.toLocaleString()}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">Langues</div>
                          <div className="text-lg font-bold text-green-600">
                            {platform.features.languages}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">Conformité</div>
                          <div className="text-lg font-bold text-purple-600">
                            {platform.features.complianceLevel}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">Part marché</div>
                          <div className="text-lg font-bold text-orange-600">
                            {platform.marketShare}
                          </div>
                        </div>
                      </div>
                    )}

                    {platform.limitations && (
                      <div>
                        <h4 className="font-semibold text-red-600 mb-2">Limitations vs CED Academy:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {platform.limitations.map((limitation, index) => (
                            <div key={index} className="flex items-start gap-2 text-sm">
                              <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                              <span>{limitation}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="metrics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Métriques Comparatives Détaillées</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {COMPARISON_METRICS.map((metric, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="font-semibold text-lg">{metric.category}</h4>
                    <div className="space-y-2">
                      {/* CED Academy */}
                      <div className="flex items-center gap-4">
                        <div className="w-32 text-sm font-medium">CED Academy</div>
                        <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                          <div 
                            className="bg-green-500 h-6 rounded-full flex items-center justify-end pr-2"
                            style={{ width: '100%' }}
                          >
                            <span className="text-white text-xs font-bold">
                              {metric.ced_score.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Concurrents */}
                      {['islamic_fintech', 'sharia_tech', 'halal_crypto', 'coursera', 'udacity'].map((platform) => {
                        const score = metric[`${platform}_score` as keyof typeof metric] as number;
                        const percentage = metric.category === 'Nombre de règles Fiqh' 
                          ? (score / metric.ced_score) * 100
                          : metric.category === 'Support linguistique'
                          ? (score / 78) * 100
                          : score;
                        
                        return (
                          <div key={platform} className="flex items-center gap-4">
                            <div className="w-32 text-sm">{platform.replace('_', ' ')}</div>
                            <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
                              <div 
                                className={`h-4 rounded-full flex items-center justify-end pr-2 ${
                                  score === 0 ? 'bg-red-400' : score < 50 ? 'bg-orange-400' : 'bg-blue-400'
                                }`}
                                style={{ width: `${Math.max(percentage, 5)}%` }}
                              >
                                <span className="text-white text-xs">
                                  {score.toLocaleString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advantages" className="space-y-6">
          <div className="grid gap-6">
            <Card className="border-4 border-green-500 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Crown className="w-6 h-6" />
                  Pourquoi CED Academy Domine le Marché
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3">Avantages Technologiques</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-green-600" />
                        <span className="text-sm">IA Conseil Sharia temps réel (unique au monde)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Blockchain Trade Finance islamique breveté</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Premier système Fiqh quantique</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Banking vocal en arabe intégré</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3">Avantages Écosystème</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span className="text-sm">CED Bank - Banque islamique intégrée</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Al-Aman CED Takaful - Assurance islamique</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span className="text-sm">TechForAll - Système donation technologique</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span className="text-sm">78 langues vs 3-5 pour les concurrents</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg border-2 border-green-300">
                  <h4 className="font-bold text-green-800 mb-2">Résultat : Leadership Incontestable</h4>
                  <p className="text-sm text-green-700">
                    CED Academy est la seule plateforme offrant un écosystème technologique islamique complet. 
                    Avec 23,456 règles Fiqh (10x plus que les concurrents), 78 langues, et des innovations 
                    exclusives comme l'IA Sharia et le banking quantique, nous définissons les standards 
                    mondiaux du Fiqh informatique.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Footer avec protection */}
      <footer className="mt-12 py-6 bg-gray-900 text-white rounded-lg">
        <div className="text-center">
          <p className="font-semibold mb-2">© 2025 Yakoubi Yamina - CED Academy International</p>
          <p className="text-sm text-gray-400">
            Leader mondial incontesté du Fiqh informatique • 45% de part de marché • 
            Innovation technologique islamique exclusive
          </p>
        </div>
      </footer>
    </div>
  );
}