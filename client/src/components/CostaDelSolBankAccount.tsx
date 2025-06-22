import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Anchor,
  Ship,
  Package,
  TrendingUp,
  Users,
  Wrench,
  Smartphone,
  CheckCircle,
  Star,
  Trophy,
  Target,
  Clock,
  DollarSign,
  Building,
  Shield,
  Zap,
  Gift,
  Truck,
  Award,
  PiggyBank,
  MapPin,
  Phone,
  User,
  Waves
} from 'lucide-react';

interface BusinessStream {
  id: string;
  name: string;
  category: 'logistics' | 'marine' | 'equipment' | 'solidarity';
  totalRevenue: number;
  monthlyAverage: number;
  clientsCount: number;
  growth: number;
  description: string;
}

interface MarineService {
  id: string;
  name: string;
  clientsServed: number;
  revenue: number;
  completion: number;
  description: string;
  equipment: string[];
}

interface LogisticsOperation {
  metric: string;
  value: number;
  unit: string;
  description: string;
  trend: number;
}

export function CostaDelSolBankAccount() {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const businessStreams: BusinessStream[] = [
    {
      id: 'marine-equipment',
      name: 'Équipement Marin Professionnel',
      category: 'marine',
      totalRevenue: 1847500,
      monthlyAverage: 153958,
      clientsCount: 342,
      growth: 28,
      description: 'Vente et location d\'équipements de pêche et navigation'
    },
    {
      id: 'logistics-transport',
      name: 'Logistique & Transport',
      category: 'logistics',
      totalRevenue: 1234680,
      monthlyAverage: 102890,
      clientsCount: 187,
      growth: 22,
      description: 'Services de transport maritime et terrestre'
    },
    {
      id: 'solidarity-boutique',
      name: 'Boutique Solidaire TechForAll',
      category: 'solidarity',
      totalRevenue: 567890,
      monthlyAverage: 47324,
      clientsCount: 1456,
      growth: 35,
      description: 'Vente matériel informatique reconditionné'
    },
    {
      id: 'equipment-repair',
      name: 'Réparation & Maintenance',
      category: 'equipment',
      totalRevenue: 423570,
      monthlyAverage: 35298,
      clientsCount: 234,
      growth: 18,
      description: 'Services de réparation équipements marins et tech'
    }
  ];

  const marineServices: MarineService[] = [
    {
      id: 'fishing-fleet',
      name: 'Services Flotte de Pêche',
      clientsServed: 89,
      revenue: 678900,
      completion: 92,
      description: 'Équipement et maintenance pour flotte de pêche professionnelle',
      equipment: ['Filets professionnels', 'Sonars', 'GPS marine', 'Treuils hydrauliques']
    },
    {
      id: 'yacht-services',
      name: 'Services Yachting',
      clientsServed: 156,
      revenue: 892340,
      completion: 85,
      description: 'Équipement et services pour yachts de plaisance',
      equipment: ['Électronique marine', 'Ancres haute performance', 'Systèmes navigation']
    },
    {
      id: 'commercial-marine',
      name: 'Marine Commerciale',
      clientsServed: 67,
      revenue: 1245600,
      completion: 78,
      description: 'Équipements pour navires commerciaux et cargo',
      equipment: ['Grues portuaires', 'Systèmes manutention', 'Équipements sécurité']
    },
    {
      id: 'rescue-equipment',
      name: 'Équipements Sauvetage',
      clientsServed: 43,
      revenue: 456780,
      completion: 95,
      description: 'Matériel de sauvetage et sécurité maritime',
      equipment: ['Canots de sauvetage', 'Balises détresse', 'Équipements survie']
    }
  ];

  const logisticsOperations: LogisticsOperation[] = [
    {
      metric: 'Conteneurs traités',
      value: 12847,
      unit: 'unités',
      description: 'Transport maritime et terrestre',
      trend: 24
    },
    {
      metric: 'Distance parcourue',
      value: 487.2,
      unit: 'milliers km',
      description: 'Livraisons effectuées',
      trend: 19
    },
    {
      metric: 'Clients satisfaits',
      value: 98.7,
      unit: '%',
      description: 'Taux de satisfaction service',
      trend: 12
    },
    {
      metric: 'Emplois créés',
      value: 127,
      unit: 'postes',
      description: 'Équipe Costa del Sol',
      trend: 31
    }
  ];

  const totalRevenue = businessStreams.reduce((sum, stream) => sum + stream.totalRevenue, 0);
  const totalClients = businessStreams.reduce((sum, stream) => sum + stream.clientsCount, 0);
  const totalMarineClients = marineServices.reduce((sum, service) => sum + service.clientsServed, 0);
  const totalMarineRevenue = marineServices.reduce((sum, service) => sum + service.revenue, 0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'marine': return <Anchor className="h-5 w-5" />;
      case 'logistics': return <Truck className="h-5 w-5" />;
      case 'solidarity': return <Gift className="h-5 w-5" />;
      case 'equipment': return <Wrench className="h-5 w-5" />;
      default: return <Package className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'marine': return 'bg-blue-100 text-blue-800';
      case 'logistics': return 'bg-green-100 text-green-800';
      case 'solidarity': return 'bg-purple-100 text-purple-800';
      case 'equipment': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <CardHeader>
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
              >
                <Ship className="h-8 w-8 text-blue-600" />
              </motion.div>
              <div>
                <h1 className="text-3xl font-bold">Compte CED Bank Costa del Sol</h1>
                <h2 className="text-xl">Gestionnaire : Yakoubi Brahim</h2>
                <p className="text-blue-100">Logistique Marine • Association TechForAll • Boutique Solidaire</p>
                <p className="text-sm text-blue-200">Sous supervision Yakoubi Yamina</p>
              </div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6 text-center">
              <Ship className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-gray-800">Chiffre d'Affaires</h3>
              <p className="text-2xl font-bold text-blue-600">{formatCurrency(totalRevenue)}</p>
              <p className="text-sm text-gray-600">Total généré</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-gray-800">Clients Actifs</h3>
              <p className="text-2xl font-bold text-cyan-600">{totalClients.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Tous secteurs</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6 text-center">
              <Anchor className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-gray-800">Services Marins</h3>
              <p className="text-2xl font-bold text-green-600">{formatCurrency(totalMarineRevenue)}</p>
              <p className="text-sm text-gray-600">Secteur principal</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6 text-center">
              <Gift className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-gray-800">TechForAll</h3>
              <p className="text-2xl font-bold text-purple-600">{formatCurrency(567890)}</p>
              <p className="text-sm text-gray-600">Boutique solidaire</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Tabs Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="business">Activités</TabsTrigger>
          <TabsTrigger value="marine">Services Marins</TabsTrigger>
          <TabsTrigger value="logistics">Logistique</TabsTrigger>
          <TabsTrigger value="account">Compte</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  Secteurs d'Activité Principaux
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {businessStreams
                    .sort((a, b) => b.totalRevenue - a.totalRevenue)
                    .map((stream) => (
                    <div key={stream.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        {getCategoryIcon(stream.category)}
                        <div>
                          <p className="font-medium text-gray-800">{stream.name}</p>
                          <p className="text-sm text-gray-600">{stream.clientsCount} clients</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-blue-600">{formatCurrency(stream.totalRevenue)}</p>
                        <Badge className="bg-green-100 text-green-800">+{stream.growth}%</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Waves className="h-6 w-6 text-cyan-600" />
                  Performance Opérationnelle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {logisticsOperations.map((operation, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium text-gray-800">{operation.metric}</p>
                        <Badge className="bg-blue-100 text-blue-800">+{operation.trend}%</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-2xl font-bold text-cyan-600">{operation.value.toLocaleString()} {operation.unit}</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">{operation.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="business" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessStreams.map((stream) => (
              <motion.div
                key={stream.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="bg-white shadow-lg h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge className={getCategoryColor(stream.category)}>
                        {stream.category}
                      </Badge>
                      <Badge className="bg-green-100 text-green-800">+{stream.growth}%</Badge>
                    </div>
                    <CardTitle className="text-lg">{stream.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{stream.description}</p>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Chiffre d'affaires:</span>
                        <span className="font-bold text-blue-600">{formatCurrency(stream.totalRevenue)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Moyenne mensuelle:</span>
                        <span className="font-medium">{formatCurrency(stream.monthlyAverage)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Clients actifs:</span>
                        <span className="font-medium">{stream.clientsCount}</span>
                      </div>
                      <div className="flex justify-between border-t pt-3">
                        <span className="text-gray-600">Croissance:</span>
                        <span className="font-bold text-green-600">+{stream.growth}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="marine" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marineServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="bg-white shadow-lg h-full">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Anchor className="h-5 w-5 text-blue-600" />
                      {service.name}
                    </CardTitle>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Clients servis:</span>
                        <span className="font-bold text-blue-600">{service.clientsServed}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Revenus:</span>
                        <span className="font-medium">{formatCurrency(service.revenue)}</span>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Taux de service:</span>
                          <span className="font-medium">{service.completion}%</span>
                        </div>
                        <Progress value={service.completion} className="mb-4" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Équipements fournis:</h4>
                        <div className="flex flex-wrap gap-1">
                          {service.equipment.map((item, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="logistics" className="mt-6">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-6 w-6 text-green-600" />
                Operations Logistiques Costa del Sol
              </CardTitle>
              <p className="text-gray-600">Transport maritime et terrestre sous gestion Yakoubi Brahim</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {logisticsOperations.map((operation, index) => (
                  <div key={index} className="text-center p-4 border rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {operation.value.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600 mb-1">{operation.unit}</div>
                    <div className="font-medium text-gray-800 mb-2">{operation.metric}</div>
                    <Badge className="bg-green-100 text-green-800 mb-2">+{operation.trend}%</Badge>
                    <p className="text-xs text-gray-600">{operation.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Services Transport</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>Transport maritime conteneurs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>Logistique terrestre Europe</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>Stockage et manutention</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>Services douaniers</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-green-50 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Zones Couvertes</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Méditerranée:</span>
                      <span className="font-medium">100% couverture</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Europe Ouest:</span>
                      <span className="font-medium">85% couverture</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Afrique Nord:</span>
                      <span className="font-medium">70% couverture</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Moyen-Orient:</span>
                      <span className="font-medium">45% couverture</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="mt-6">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-6 w-6 text-blue-600" />
                Compte CED Bank Costa del Sol
              </CardTitle>
              <p className="text-gray-600">Compte professionnel géré par Yakoubi Brahim pour TechForAll</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-4">Informations Gestionnaire</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <User className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">Gestionnaire Autorisé</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Yakoubi Brahim, gestionnaire officiel sous supervision de Yakoubi Yamina
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Gestionnaire:</span>
                        <span className="font-medium">Yakoubi Brahim</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Superviseur:</span>
                        <span className="font-medium">Yakoubi Yamina</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Association:</span>
                        <span className="font-medium">TechForAll</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Secteur:</span>
                        <span className="font-medium">Logistique Marine</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Devise:</span>
                        <span className="font-medium">EUR (Euro)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4">Performance Financière</h3>
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
                    <div className="space-y-4">
                      <div className="text-center border-b pb-4">
                        <p className="text-3xl font-bold text-blue-600">
                          {formatCurrency(totalRevenue)}
                        </p>
                        <p className="text-gray-600">Chiffre d'affaires total</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Services marins:</span>
                          <span className="font-bold text-blue-600">{formatCurrency(totalMarineRevenue)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Boutique TechForAll:</span>
                          <span className="font-bold text-purple-600">{formatCurrency(567890)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Logistique:</span>
                          <span className="font-bold text-green-600">{formatCurrency(1234680)}</span>
                        </div>
                        <div className="flex justify-between border-t pt-3">
                          <span>Croissance moyenne:</span>
                          <span className="font-bold text-orange-600">+25.8%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Ship className="h-5 w-5 text-yellow-600" />
                      <span className="font-bold text-yellow-800">Spécialiste Maritime</span>
                    </div>
                    <p className="text-sm text-yellow-700">
                      Compte spécialisé dans les services maritimes et logistiques avec connexion directe à la boutique solidaire TechForAll.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}