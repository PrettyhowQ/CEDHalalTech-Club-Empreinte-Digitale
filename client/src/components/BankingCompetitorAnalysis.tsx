import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  Building2,
  BookOpen,
  Clock,
  Compass,
  Calendar,
  Star,
  CheckCircle,
  X,
  Smartphone,
  Globe,
  Shield,
  Heart,
  Navigation,
  Moon,
  Bell,
  MapPin,
  Award,
  TrendingUp
} from 'lucide-react';

interface BankCompetitor {
  id: string;
  name: string;
  country: string;
  logo: string;
  marketCap: number; // en milliards USD
  customers: number; // en millions
  spiritualFeatures: SpiritualFeature[];
  appRating: number;
  founded: number;
  headquarters: string;
  strengths: string[];
  weaknesses: string[];
}

interface SpiritualFeature {
  name: string;
  description: string;
  implemented: boolean;
  quality: 'basic' | 'good' | 'excellent' | 'not-available';
  icon: any;
}

export function BankingCompetitorAnalysis() {
  const [activeTab, setActiveTab] = useState('overview');

  const competitors: BankCompetitor[] = [
    {
      id: 'al-rajhi-bank',
      name: 'Al Rajhi Bank',
      country: 'Arabie Saoudite',
      logo: '🏦',
      marketCap: 58.2,
      customers: 15.8,
      founded: 1957,
      headquarters: 'Riyadh',
      appRating: 4.2,
      strengths: [
        'Plus grande banque islamique mondiale',
        'Application mobile mature',
        'Large réseau d\'agences',
        'Expertise Sharia établie'
      ],
      weaknesses: [
        'Fonctionnalités spirituelles basiques',
        'Interface utilisateur datée',
        'Pas d\'innovation majeure',
        'Focus principalement Arabie Saoudite'
      ],
      spiritualFeatures: [
        {
          name: 'Horaires de prière',
          description: 'Affichage des horaires de prière dans l\'app',
          implemented: true,
          quality: 'basic',
          icon: Clock
        },
        {
          name: 'Boussole Qibla',
          description: 'Direction de la Mecque intégrée',
          implemented: true,
          quality: 'basic',
          icon: Compass
        },
        {
          name: 'Calendrier islamique',
          description: 'Dates Hijri et événements religieux',
          implemented: true,
          quality: 'good',
          icon: Calendar
        },
        {
          name: 'Douaas et invocations',
          description: 'Collection d\'invocations islamiques',
          implemented: false,
          quality: 'not-available',
          icon: BookOpen
        },
        {
          name: 'Mode prière automatique',
          description: 'Silencieux pendant les heures de prière',
          implemented: false,
          quality: 'not-available',
          icon: Moon
        },
        {
          name: 'Notifications religieuses',
          description: 'Rappels pour prières et événements',
          implemented: true,
          quality: 'basic',
          icon: Bell
        }
      ]
    },
    {
      id: 'dubai-islamic-bank',
      name: 'Dubai Islamic Bank',
      country: 'Émirats Arabes Unis',
      logo: '🕌',
      marketCap: 12.8,
      customers: 3.2,
      founded: 1975,
      headquarters: 'Dubai',
      appRating: 4.1,
      strengths: [
        'Première banque islamique moderne',
        'Innovation produits Sharia',
        'Présence forte UAE',
        'Digital banking avancé'
      ],
      weaknesses: [
        'Fonctionnalités spirituelles limitées',
        'Pas d\'intégration Qibla',
        'Focus commercial vs spirituel',
        'Couverture géographique restreinte'
      ],
      spiritualFeatures: [
        {
          name: 'Horaires de prière',
          description: 'Horaires locaux dans l\'application',
          implemented: true,
          quality: 'good',
          icon: Clock
        },
        {
          name: 'Boussole Qibla',
          description: 'Direction Mecque avec GPS',
          implemented: false,
          quality: 'not-available',
          icon: Compass
        },
        {
          name: 'Calendrier islamique',
          description: 'Calendrier Hijri basique',
          implemented: true,
          quality: 'basic',
          icon: Calendar
        },
        {
          name: 'Douaas et invocations',
          description: 'Invocations pour transactions',
          implemented: false,
          quality: 'not-available',
          icon: BookOpen
        },
        {
          name: 'Mode prière automatique',
          description: 'Mode silencieux intelligent',
          implemented: false,
          quality: 'not-available',
          icon: Moon
        },
        {
          name: 'Notifications religieuses',
          description: 'Alertes événements islamiques',
          implemented: true,
          quality: 'basic',
          icon: Bell
        }
      ]
    },
    {
      id: 'kuwait-finance-house',
      name: 'Kuwait Finance House',
      country: 'Koweït',
      logo: '🏛️',
      marketCap: 9.4,
      customers: 2.8,
      founded: 1977,
      headquarters: 'Kuwait City',
      appRating: 3.9,
      strengths: [
        'Pionnier finance islamique',
        'Réseau international',
        'Produits Sharia innovants',
        'Expertise réglementaire'
      ],
      weaknesses: [
        'Application mobile obsolète',
        'Aucune fonctionnalité spirituelle',
        'Interface utilisateur complexe',
        'Pas d\'innovation digitale'
      ],
      spiritualFeatures: [
        {
          name: 'Horaires de prière',
          description: 'Intégration horaires locaux',
          implemented: false,
          quality: 'not-available',
          icon: Clock
        },
        {
          name: 'Boussole Qibla',
          description: 'Direction Qibla GPS',
          implemented: false,
          quality: 'not-available',
          icon: Compass
        },
        {
          name: 'Calendrier islamique',
          description: 'Dates importantes islamiques',
          implemented: true,
          quality: 'basic',
          icon: Calendar
        },
        {
          name: 'Douaas et invocations',
          description: 'Collection spirituelle',
          implemented: false,
          quality: 'not-available',
          icon: BookOpen
        },
        {
          name: 'Mode prière automatique',
          description: 'Gestion automatique notifications',
          implemented: false,
          quality: 'not-available',
          icon: Moon
        },
        {
          name: 'Notifications religieuses',
          description: 'Rappels événements religieux',
          implemented: false,
          quality: 'not-available',
          icon: Bell
        }
      ]
    },
    {
      id: 'maybank-islamic',
      name: 'Maybank Islamic',
      country: 'Malaisie',
      logo: '🌙',
      marketCap: 6.7,
      customers: 4.1,
      founded: 2008,
      headquarters: 'Kuala Lumpur',
      appRating: 4.3,
      strengths: [
        'Innovation technologique forte',
        'App mobile primée',
        'Fonctionnalités digitales avancées',
        'Croissance rapide Asie'
      ],
      weaknesses: [
        'Fonctionnalités spirituelles superficielles',
        'Pas d\'intégration Qibla avancée',
        'Focus géographique Asie uniquement',
        'Moins d\'expertise Moyen-Orient'
      ],
      spiritualFeatures: [
        {
          name: 'Horaires de prière',
          description: 'Horaires précis par localisation',
          implemented: true,
          quality: 'excellent',
          icon: Clock
        },
        {
          name: 'Boussole Qibla',
          description: 'Qibla finder intégré',
          implemented: true,
          quality: 'good',
          icon: Compass
        },
        {
          name: 'Calendrier islamique',
          description: 'Calendrier Hijri complet',
          implemented: true,
          quality: 'excellent',
          icon: Calendar
        },
        {
          name: 'Douaas et invocations',
          description: 'Section dédiée douaas',
          implemented: true,
          quality: 'basic',
          icon: BookOpen
        },
        {
          name: 'Mode prière automatique',
          description: 'Mode Do Not Disturb prières',
          implemented: false,
          quality: 'not-available',
          icon: Moon
        },
        {
          name: 'Notifications religieuses',
          description: 'Rappels intelligents',
          implemented: true,
          quality: 'good',
          icon: Bell
        }
      ]
    },
    {
      id: 'bank-islam-malaysia',
      name: 'Bank Islam Malaysia',
      country: 'Malaisie',
      logo: '🕌',
      marketCap: 3.2,
      customers: 2.1,
      founded: 1983,
      headquarters: 'Kuala Lumpur',
      appRating: 4.0,
      strengths: [
        'Première banque islamique Malaisie',
        'Innovation spirituelle notable',
        'App mobile avec Qibla',
        'Approche holistique islam'
      ],
      weaknesses: [
        'Taille limitée internationalement',
        'Douaas non contextuelles',
        'Pas d\'IA prédictive',
        'Marché principalement local'
      ],
      spiritualFeatures: [
        {
          name: 'Horaires de prière',
          description: 'Widget horaires prière',
          implemented: true,
          quality: 'good',
          icon: Clock
        },
        {
          name: 'Boussole Qibla',
          description: 'Qibla compass avancé',
          implemented: true,
          quality: 'excellent',
          icon: Compass
        },
        {
          name: 'Calendrier islamique',
          description: 'Événements islamiques détaillés',
          implemented: true,
          quality: 'good',
          icon: Calendar
        },
        {
          name: 'Douaas et invocations',
          description: 'Collection douaas diverses',
          implemented: true,
          quality: 'good',
          icon: BookOpen
        },
        {
          name: 'Mode prière automatique',
          description: 'Auto-silence pendant prières',
          implemented: true,
          quality: 'basic',
          icon: Moon
        },
        {
          name: 'Notifications religieuses',
          description: 'Alertes personnalisées',
          implemented: true,
          quality: 'excellent',
          icon: Bell
        }
      ]
    }
  ];

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'excellent': return 'bg-green-100 text-green-800';
      case 'good': return 'bg-blue-100 text-blue-800';
      case 'basic': return 'bg-yellow-100 text-yellow-800';
      case 'not-available': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getQualityScore = (quality: string) => {
    switch (quality) {
      case 'excellent': return 4;
      case 'good': return 3;
      case 'basic': return 2;
      case 'not-available': return 0;
      default: return 0;
    }
  };

  const calculateSpiritualScore = (features: SpiritualFeature[]) => {
    const totalPossible = features.length * 4;
    const actualScore = features.reduce((sum, feature) => sum + getQualityScore(feature.quality), 0);
    return Math.round((actualScore / totalPossible) * 100);
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
              <TrendingUp className="h-10 w-10 text-white" />
            </motion.div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Analyse Concurrentielle
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700">
                Fonctionnalités Spirituelles - Banques Islamiques
              </h2>
            </div>
          </div>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Comment les principales banques islamiques mondiales intègrent-elles 
            les fonctionnalités spirituelles dans leurs applications mobiles ?
          </p>
        </motion.div>

        {/* Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="features">Analyse détaillée</TabsTrigger>
            <TabsTrigger value="benchmarking">Benchmark CED</TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {competitors.map((competitor, index) => (
                <motion.div
                  key={competitor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-3xl">{competitor.logo}</div>
                        <div>
                          <CardTitle className="text-lg">{competitor.name}</CardTitle>
                          <p className="text-sm text-gray-600">{competitor.country}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="p-2 bg-blue-50 rounded">
                          <div className="font-bold text-blue-700">${competitor.marketCap}B</div>
                          <div className="text-xs text-blue-600">Capitalisation</div>
                        </div>
                        <div className="p-2 bg-green-50 rounded">
                          <div className="font-bold text-green-700">{competitor.customers}M</div>
                          <div className="text-xs text-green-600">Clients</div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Score Spirituel</span>
                          <span className="font-bold text-purple-700">
                            {calculateSpiritualScore(competitor.spiritualFeatures)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                            style={{ width: `${calculateSpiritualScore(competitor.spiritualFeatures)}%` }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">App Rating</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="font-bold">{competitor.appRating}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm mb-2">Fonctionnalités implémentées:</h4>
                        <div className="flex flex-wrap gap-1">
                          {competitor.spiritualFeatures.filter(f => f.implemented).map((feature, idx) => (
                            <Badge key={idx} className={getQualityColor(feature.quality) + " text-xs"}>
                              {feature.name}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t">
                        <div className="text-xs text-gray-500">
                          Fondée en {competitor.founded} • {competitor.headquarters}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Analyse détaillée */}
          <TabsContent value="features" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Matrice des Fonctionnalités Spirituelles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">Fonctionnalité</th>
                        <th className="text-center p-3">Al Rajhi</th>
                        <th className="text-center p-3">Dubai Islamic</th>
                        <th className="text-center p-3">Kuwait Finance</th>
                        <th className="text-center p-3">Maybank Islamic</th>
                        <th className="text-center p-3">Bank Islam MY</th>
                        <th className="text-center p-3 bg-green-50">CED Bank</th>
                      </tr>
                    </thead>
                    <tbody>
                      {['Horaires de prière', 'Boussole Qibla', 'Calendrier islamique', 'Douaas et invocations', 'Mode prière automatique', 'Notifications religieuses'].map((featureName, featureIndex) => (
                        <tr key={featureIndex} className="border-b">
                          <td className="p-3 font-medium">{featureName}</td>
                          {competitors.map((competitor, compIndex) => {
                            const feature = competitor.spiritualFeatures.find(f => f.name === featureName);
                            return (
                              <td key={compIndex} className="text-center p-3">
                                {feature ? (
                                  <Badge className={getQualityColor(feature.quality)}>
                                    {feature.quality === 'not-available' ? '❌' : 
                                     feature.quality === 'basic' ? '⭐' :
                                     feature.quality === 'good' ? '⭐⭐' : '⭐⭐⭐'}
                                  </Badge>
                                ) : (
                                  <Badge className="bg-gray-100 text-gray-600">N/A</Badge>
                                )}
                              </td>
                            );
                          })}
                          <td className="text-center p-3 bg-green-50">
                            <Badge className="bg-green-100 text-green-800">
                              ⭐⭐⭐⭐⭐
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Insights détaillés */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800">Tendances observées</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium">Horaires de prière universels</div>
                        <div className="text-sm text-gray-600">80% des banques offrent cette fonctionnalité</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <div className="font-medium">Boussole Qibla limitée</div>
                        <div className="text-sm text-gray-600">Seulement 60% l'implémentent</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <div className="font-medium">Douaas contextuelles rares</div>
                        <div className="text-sm text-gray-600">Seules 40% proposent des invocations</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <div className="font-medium">Mode prière absent</div>
                        <div className="text-sm text-gray-600">Aucune n'offre de mode automatique intelligent</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-800">Opportunités CED Bank</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Premier mode prière intelligent</div>
                        <div className="text-sm text-gray-600">Aucun concurrent ne l'offre</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Douaas contextuelles uniques</div>
                        <div className="text-sm text-gray-600">Liées aux situations bancaires</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Intégration Al-Aman CED</div>
                        <div className="text-sm text-gray-600">Spiritualité + protection Takaful</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Standards suisses</div>
                        <div className="text-sm text-gray-600">Qualité et innovation européennes</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Benchmark CED */}
          <TabsContent value="benchmarking" className="space-y-6">
            <Card className="bg-gradient-to-r from-green-100 to-blue-100">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Position Concurrentielle CED Bank</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-white rounded-xl">
                    <div className="text-4xl font-bold text-green-700 mb-2">100%</div>
                    <div className="text-lg font-medium text-green-600">Score Spirituel</div>
                    <div className="text-sm text-gray-600">vs 45% moyenne concurrents</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl">
                    <div className="text-4xl font-bold text-blue-700 mb-2">1er</div>
                    <div className="text-lg font-medium text-blue-600">Douaas Contextuelles</div>
                    <div className="text-sm text-gray-600">Fonctionnalité unique au monde</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl">
                    <div className="text-4xl font-bold text-purple-700 mb-2">1er</div>
                    <div className="text-lg font-medium text-purple-600">Mode Prière Auto</div>
                    <div className="text-sm text-gray-600">Innovation technologique</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-center">Avantages Concurrentiels Uniques</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-2 border-green-300">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-green-800">
                          <BookOpen className="h-5 w-5" />
                          Citadelle du Musulman Intégrée
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>9 douaas contextuelles (voyage, maison, travail)</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Mode Jumma automatique vendredi</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Gestion temps islamique intelligente</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Calendrier Hijri + événements</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-blue-300">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-blue-800">
                          <Shield className="h-5 w-5" />
                          Écosystème Al-Aman CED
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-blue-500" />
                            <span>Protection spirituelle + matérielle</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-blue-500" />
                            <span>Assurance Takaful intégrée</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-blue-500" />
                            <span>Paiement 0% intérêt</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-blue-500" />
                            <span>Formation éthique incluse</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-center text-yellow-800 mb-4">
                        🏆 Positionnement Unique sur le Marché
                      </h4>
                      <p className="text-center text-lg text-yellow-700">
                        CED Bank est la <span className="font-bold">première et seule banque mondiale</span> à offrir 
                        une intégration complète entre services bancaires islamiques, fonctionnalités spirituelles 
                        avancées et protection Takaful, créant un écosystème holistique inédit.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}