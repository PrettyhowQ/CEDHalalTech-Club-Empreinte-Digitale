import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, 
  Anchor,
  Ship,
  Package,
  TrendingUp,
  Users,
  Settings,
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
  Waves,
  Navigation,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  Download,
  Scan,
  QrCode,
  Bell,
  Activity,
  Timer,
  Radio,
  Satellite,
  Route
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

interface DonationTracking {
  id: string;
  donorName: string;
  itemType: string;
  quantity: number;
  currentLocation: string;
  status: 'collecté' | 'en_transit' | 'arrivé_costa_del_sol' | 'traité_brahim' | 'redistribué';
  estimatedArrival: Date;
  trackingCode: string;
  route: string[];
  lastUpdate: Date;
  category?: 'informatique' | 'climatisation' | 'materiel_construction' | 'autres';
  technicalSpecs?: string[];
  targetBeneficiary?: string;
}

interface ClimateEquipment {
  id: string;
  brand: string;
  model: string;
  type: 'split' | 'central' | 'portable' | 'industriel';
  capacity: string; // en BTU
  energyClass: string;
  technology: string[];
  year: number;
  condition: 'neuf' | 'excellent' | 'bon' | 'reconditionné';
  donorCompany: string;
  destinationSite: string;
  installationRequired: boolean;
  warranty: number; // en mois
}

interface RealTimeNotification {
  id: string;
  type: 'donation' | 'logistics' | 'delivery' | 'urgent';
  message: string;
  timestamp: Date;
  priority: 'low' | 'medium' | 'high' | 'urgent';
}

interface MobileAppFeature {
  name: string;
  description: string;
  icon: any;
  available: boolean;
  category: 'tracking' | 'donation' | 'logistics' | 'brahim';
}

export function CostaDelSolBankAccount() {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [notifications, setNotifications] = useState<RealTimeNotification[]>([]);
  const [activeDonations, setActiveDonations] = useState<DonationTracking[]>([]);
  const [isLiveTracking, setIsLiveTracking] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulation du suivi en temps réel
  useEffect(() => {
    if (!isLiveTracking) return;

    const interval = setInterval(() => {
      // Générer de nouvelles notifications
      const newNotification: RealTimeNotification = {
        id: Date.now().toString(),
        type: ['donation', 'logistics', 'delivery'][Math.floor(Math.random() * 3)] as any,
        message: getRandomNotificationMessage(),
        timestamp: new Date(),
        priority: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as any
      };

      setNotifications(prev => [newNotification, ...prev.slice(0, 4)]);

      // Mettre à jour les dons actifs
      setActiveDonations(prev => 
        prev.map(donation => ({
          ...donation,
          lastUpdate: new Date(),
          status: getNextStatus(donation.status) as DonationTracking['status']
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isLiveTracking]);

  const getRandomNotificationMessage = () => {
    const messages = [
      "📦 Nouveau don de matériel informatique collecté à Paris",
      "🚛 Convoi logistique en route vers Costa del Sol",
      "✅ Livraison réceptionnée par Yakoubi Brahim",
      "🔄 Redistribution équipement vers bénéficiaires",
      "⚡ Mise à jour GPS temps réel disponible",
      "📱 Nouvelle commande boutique TechForAll",
      "❄️ Don climatiseurs haute performance reçu de constructeur",
      "🏗️ Équipements climatisation industrielle en transit",
      "🌡️ Installation climatiseurs dernière génération programmée",
      "⚙️ Maintenance préventive climatiseurs Costa del Sol"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const getNextStatus = (currentStatus: DonationTracking['status']): DonationTracking['status'] => {
    const statusFlow: Record<DonationTracking['status'], DonationTracking['status']> = {
      'collecté': 'en_transit',
      'en_transit': 'arrivé_costa_del_sol',
      'arrivé_costa_del_sol': 'traité_brahim',
      'traité_brahim': 'redistribué',
      'redistribué': 'redistribué'
    };
    return Math.random() > 0.7 ? statusFlow[currentStatus] || currentStatus : currentStatus;
  };

  // Initialiser les données de suivi
  useEffect(() => {
    const initialDonations: DonationTracking[] = [
      {
        id: 'DON-2025-001',
        donorName: 'TechForAll Paris',
        itemType: 'Ordinateurs portables reconditionnés',
        quantity: 25,
        currentLocation: 'Entrepôt Marseille',
        status: 'en_transit',
        estimatedArrival: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        trackingCode: 'TFA-ML-001',
        route: ['Paris', 'Lyon', 'Marseille', 'Costa del Sol'],
        lastUpdate: new Date(),
        category: 'informatique',
        technicalSpecs: ['Intel i5', '8GB RAM', 'SSD 256GB'],
        targetBeneficiary: 'Écoles locales'
      },
      {
        id: 'DON-2025-002',
        donorName: 'Association Solidarité Numérique',
        itemType: 'Tablettes éducatives',
        quantity: 40,
        currentLocation: 'Costa del Sol - Bureau Yakoubi Brahim',
        status: 'traité_brahim',
        estimatedArrival: new Date(),
        trackingCode: 'ASN-TB-002',
        route: ['Toulouse', 'Barcelone', 'Costa del Sol'],
        lastUpdate: new Date(),
        category: 'informatique',
        technicalSpecs: ['Android 12', '4GB RAM', 'Écran 10"'],
        targetBeneficiary: 'Centres formation'
      },
      {
        id: 'DON-2025-003',
        donorName: 'Entreprise TechRecycle',
        itemType: 'Smartphones reconditionnés',
        quantity: 60,
        currentLocation: 'En cours de collecte',
        status: 'collecté',
        estimatedArrival: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
        trackingCode: 'TR-SP-003',
        route: ['Nice', 'Monaco', 'Costa del Sol'],
        lastUpdate: new Date(),
        category: 'informatique',
        technicalSpecs: ['iOS/Android', 'Reconditionné grade A'],
        targetBeneficiary: 'Familles précaires'
      },
      {
        id: 'DON-2025-004',
        donorName: 'Daikin Constructeur Pro',
        itemType: 'Climatiseurs Split Inverter dernière génération',
        quantity: 8,
        currentLocation: 'Usine Barcelone',
        status: 'collecté',
        estimatedArrival: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
        trackingCode: 'DKN-CLI-004',
        route: ['Barcelone', 'Costa del Sol'],
        lastUpdate: new Date(),
        category: 'climatisation',
        technicalSpecs: ['18000 BTU', 'Classe A+++', 'R32 écologique', 'WiFi intégré'],
        targetBeneficiary: 'Chantiers construction'
      },
      {
        id: 'DON-2025-005',
        donorName: 'Mitsubishi Electric Espagne',
        itemType: 'Systèmes climatisation centrale industrielle',
        quantity: 3,
        currentLocation: 'En transit Madrid-Costa del Sol',
        status: 'en_transit',
        estimatedArrival: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        trackingCode: 'MTE-IND-005',
        route: ['Madrid', 'Valence', 'Alicante', 'Costa del Sol'],
        lastUpdate: new Date(),
        category: 'climatisation',
        technicalSpecs: ['100000 BTU', 'Contrôle intelligent', 'Maintenance prédictive'],
        targetBeneficiary: 'Bâtiments publics'
      },
      {
        id: 'DON-2025-006',
        donorName: 'Carrier Climate Solutions',
        itemType: 'Pompes à chaleur haute efficacité',
        quantity: 12,
        currentLocation: 'Costa del Sol - Inspection Yakoubi Brahim',
        status: 'traité_brahim',
        estimatedArrival: new Date(),
        trackingCode: 'CAR-PAC-006',
        route: ['Toulouse', 'Perpignan', 'Costa del Sol'],
        lastUpdate: new Date(),
        category: 'climatisation',
        technicalSpecs: ['Technologie inverter', 'COP 4.5', 'Réfrigérant R290'],
        targetBeneficiary: 'Projets habitat social'
      }
    ];
    setActiveDonations(initialDonations);
  }, []);

  const mobileAppFeatures: MobileAppFeature[] = [
    {
      name: 'Suivi GPS Temps Réel',
      description: 'Localisation précise des dons en transit vers Yakoubi Brahim',
      icon: Navigation,
      available: true,
      category: 'tracking'
    },
    {
      name: 'Notifications Push',
      description: 'Alertes instantanées pour chaque étape du processus',
      icon: Bell,
      available: true,
      category: 'tracking'
    },
    {
      name: 'Scanner QR Dons',
      description: 'Scan et enregistrement immédiat des nouveaux dons',
      icon: QrCode,
      available: true,
      category: 'donation'
    },
    {
      name: 'Logistique Brahim',
      description: 'Interface dédiée pour Yakoubi Brahim - Gestion Costa del Sol',
      icon: User,
      available: true,
      category: 'brahim'
    },
    {
      name: 'Routage Automatique',
      description: 'Calcul optimal des itinéraires de livraison',
      icon: Route,
      available: true,
      category: 'logistics'
    },
    {
      name: 'Statut Temps Réel',
      description: 'Mise à jour instantanée des statuts de traitement',
      icon: Activity,
      available: true,
      category: 'tracking'
    }
  ];

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
      name: 'TechForAll - Révolution Solidaire',
      category: 'solidarity',
      totalRevenue: 2567890,
      monthlyAverage: 213991,
      clientsCount: 3456,
      growth: 125,
      description: 'Association unique anti-gaspillage tech universelle Yakoubi Yamina'
    },
    {
      id: 'equipment-repair',
      name: 'Réparation & Maintenance Spécialisée',
      category: 'equipment',
      totalRevenue: 823570,
      monthlyAverage: 68631,
      clientsCount: 456,
      growth: 45,
      description: 'Services réparation équipements marins, tech et climatisation'
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
      case 'equipment': return <Settings className="h-5 w-5" />;
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
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="tracking">Suivi Temps Réel</TabsTrigger>
          <TabsTrigger value="business">Activités</TabsTrigger>
          <TabsTrigger value="marine">Services Marins</TabsTrigger>
          <TabsTrigger value="logistics">Logistique</TabsTrigger>
          <TabsTrigger value="mobile">App Mobile</TabsTrigger>
          <TabsTrigger value="account">Compte</TabsTrigger>
        </TabsList>

        <TabsContent value="tracking" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Notifications en temps réel */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-6 w-6 text-orange-600" />
                    Notifications Temps Réel
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${isLiveTracking ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsLiveTracking(!isLiveTracking)}
                    >
                      <RefreshCw className={`h-4 w-4 ${isLiveTracking ? 'animate-spin' : ''}`} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <AnimatePresence>
                    {notifications.map((notification) => (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500"
                      >
                        <div className="flex justify-between items-start">
                          <p className="text-sm text-gray-800">{notification.message}</p>
                          <Badge 
                            className={
                              notification.priority === 'urgent' ? 'bg-red-100 text-red-800' :
                              notification.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                              'bg-blue-100 text-blue-800'
                            }
                          >
                            {notification.priority}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {notification.timestamp.toLocaleTimeString('fr-FR')}
                        </p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  {notifications.length === 0 && (
                    <div className="text-center py-4 text-gray-500">
                      <Activity className="h-8 w-8 mx-auto mb-2 opacity-50" />
                      <p>En attente de nouvelles notifications...</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Suivi des dons actifs */}
            <Card className="bg-white shadow-lg lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-6 w-6 text-purple-600" />
                  Dons en Transit vers Yakoubi Brahim
                </CardTitle>
                <p className="text-gray-600">Suivi GPS temps réel - Costa del Sol</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeDonations.map((donation) => (
                    <motion.div
                      key={donation.id}
                      layout
                      className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-gray-800">{donation.donorName}</h4>
                            {donation.category === 'climatisation' && (
                              <Badge className="bg-cyan-100 text-cyan-800 text-xs">❄️ CLIM</Badge>
                            )}
                            {donation.category === 'informatique' && (
                              <Badge className="bg-purple-100 text-purple-800 text-xs">💻 IT</Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{donation.itemType} (x{donation.quantity})</p>
                          {donation.targetBeneficiary && (
                            <p className="text-xs text-gray-500">→ {donation.targetBeneficiary}</p>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-blue-100 text-blue-800">{donation.trackingCode}</Badge>
                          <Badge 
                            className={
                              donation.status === 'traité_brahim' ? 'bg-green-100 text-green-800' :
                              donation.status === 'arrivé_costa_del_sol' ? 'bg-orange-100 text-orange-800' :
                              donation.status === 'en_transit' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }
                          >
                            {donation.status.replace('_', ' ').toUpperCase()}
                          </Badge>
                        </div>
                      </div>

                      {donation.technicalSpecs && (
                        <div className="mb-3">
                          <p className="text-xs text-gray-600 mb-1">Spécifications:</p>
                          <div className="flex flex-wrap gap-1">
                            {donation.technicalSpecs.map((spec, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {spec}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-700">{donation.currentLocation}</span>
                      </div>

                      {/* Barre de progression du trajet */}
                      <div className="mb-3">
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span>Progression</span>
                          <span>{Math.round((donation.route.indexOf(donation.currentLocation.split(' ')[0]) + 1) / donation.route.length * 100)}%</span>
                        </div>
                        <Progress 
                          value={(donation.route.indexOf(donation.currentLocation.split(' ')[0]) + 1) / donation.route.length * 100} 
                          className="h-2"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          {donation.route.map((city, index) => (
                            <span key={index} className={index <= donation.route.indexOf(donation.currentLocation.split(' ')[0]) ? 'text-blue-600 font-medium' : ''}>
                              {city}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>Dernière mise à jour: {donation.lastUpdate.toLocaleTimeString('fr-FR')}</span>
                        <span>Arrivée prévue: {donation.estimatedArrival.toLocaleDateString('fr-FR')}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Statistiques temps réel par catégorie */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mt-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-4 text-center">
                <Truck className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <h3 className="font-bold text-sm text-gray-800">Transit Global</h3>
                <p className="text-xl font-bold text-blue-600">{activeDonations.filter(d => d.status === 'en_transit').length}</p>
                <p className="text-xs text-gray-600">Total en route</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-4 text-center">
                <Package className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <h3 className="font-bold text-sm text-gray-800">IT en Transit</h3>
                <p className="text-xl font-bold text-purple-600">{activeDonations.filter(d => d.category === 'informatique' && d.status === 'en_transit').length}</p>
                <p className="text-xs text-gray-600">💻 Informatique</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100">
              <CardContent className="p-4 text-center">
                <Settings className="h-6 w-6 text-cyan-600 mx-auto mb-2" />
                <h3 className="font-bold text-sm text-gray-800">Clim en Transit</h3>
                <p className="text-xl font-bold text-cyan-600">{activeDonations.filter(d => d.category === 'climatisation' && d.status === 'en_transit').length}</p>
                <p className="text-xs text-gray-600">❄️ Climatisation</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100">
              <CardContent className="p-4 text-center">
                <MapPin className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <h3 className="font-bold text-sm text-gray-800">Arrivés Total</h3>
                <p className="text-xl font-bold text-orange-600">{activeDonations.filter(d => d.status === 'arrivé_costa_del_sol').length}</p>
                <p className="text-xs text-gray-600">Costa del Sol</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-4 text-center">
                <CheckCircle2 className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <h3 className="font-bold text-sm text-gray-800">Traités Brahim</h3>
                <p className="text-xl font-bold text-green-600">{activeDonations.filter(d => d.status === 'traité_brahim').length}</p>
                <p className="text-xs text-gray-600">Gestion effectuée</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100">
              <CardContent className="p-4 text-center">
                <Gift className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                <h3 className="font-bold text-sm text-gray-800">Redistribués</h3>
                <p className="text-xl font-bold text-yellow-600">{activeDonations.filter(d => d.status === 'redistribué').length}</p>
                <p className="text-xs text-gray-600">Mission accomplie</p>
              </CardContent>
            </Card>
          </div>

          {/* Analyse par type d'équipement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 shadow-lg border border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-6 w-6 text-purple-600" />
                  TechForAll - Révolution Anti-Gaspillage
                </CardTitle>
                <p className="text-purple-700 font-medium">Association unique universelle Yakoubi Yamina</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4 p-3 bg-purple-100 rounded-lg border border-purple-300">
                  <h4 className="font-bold text-purple-800 mb-2">🌟 Modèle Révolutionnaire</h4>
                  <p className="text-sm text-purple-700">
                    Première association anti-gaspillage éthique universelle jamais vue ailleurs. 
                    Innovation Yakoubi Yamina pour inclusion numérique mondiale.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center p-2 bg-white rounded border">
                    <p className="text-lg font-bold text-purple-600">3,456</p>
                    <p className="text-xs text-gray-600">Bénéficiaires</p>
                  </div>
                  <div className="text-center p-2 bg-white rounded border">
                    <p className="text-lg font-bold text-green-600">+125%</p>
                    <p className="text-xs text-gray-600">Croissance</p>
                  </div>
                  <div className="text-center p-2 bg-white rounded border">
                    <p className="text-lg font-bold text-blue-600">125</p>
                    <p className="text-xs text-gray-600">Unités actives</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {activeDonations.filter(d => d.category === 'informatique').map((donation) => (
                    <div key={donation.id} className="flex items-center justify-between p-3 bg-white rounded-lg border border-purple-200 shadow-sm">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <p className="font-medium text-gray-800">{donation.itemType}</p>
                        </div>
                        <p className="text-sm text-gray-600">{donation.donorName} • x{donation.quantity}</p>
                        <p className="text-xs text-purple-600">→ {donation.targetBeneficiary}</p>
                      </div>
                      <div className="text-right">
                        <Badge className={
                          donation.status === 'traité_brahim' ? 'bg-green-100 text-green-800' :
                          donation.status === 'en_transit' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }>
                          {donation.status.replace('_', ' ')}
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">{donation.trackingCode}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg border border-purple-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-4 w-4 text-purple-600" />
                    <span className="font-bold text-purple-800">Innovation Yakoubi Yamina</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="text-center p-2 bg-white/70 rounded">
                      <p className="text-sm font-bold text-purple-600">2.5M€</p>
                      <p className="text-xs text-gray-600">CA TechForAll</p>
                    </div>
                    <div className="text-center p-2 bg-white/70 rounded">
                      <p className="text-sm font-bold text-green-600">0 déchet</p>
                      <p className="text-xs text-gray-600">Objectif 2025</p>
                    </div>
                  </div>
                  <p className="text-xs text-purple-700">
                    Modèle éthique intelligent révolutionnaire : inclusion numérique universelle, 
                    anti-gaspillage technologique, impact social mesurable. Unique au monde.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-6 w-6 text-cyan-600" />
                  Flux Climatisation Constructeurs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {activeDonations.filter(d => d.category === 'climatisation').map((donation) => (
                    <div key={donation.id} className="flex items-center justify-between p-3 bg-cyan-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">{donation.itemType}</p>
                        <p className="text-sm text-gray-600">{donation.donorName} • x{donation.quantity}</p>
                        {donation.technicalSpecs && (
                          <p className="text-xs text-cyan-700">{donation.technicalSpecs[0]}</p>
                        )}
                      </div>
                      <Badge className={
                        donation.status === 'traité_brahim' ? 'bg-green-100 text-green-800' :
                        donation.status === 'en_transit' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }>
                        {donation.status.replace('_', ' ')}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

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

            <Card className="bg-gradient-to-br from-green-50 to-blue-50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-6 w-6 text-green-600" />
                  Système Unifié IT + Climatisation
                </CardTitle>
                <p className="text-gray-600">Vue consolidée des deux flux principaux</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-4 bg-purple-100 rounded-lg">
                    <Package className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-lg font-bold text-purple-600">
                      {activeDonations.filter(d => d.category === 'informatique').length}
                    </p>
                    <p className="text-sm text-gray-700">Dons IT actifs</p>
                  </div>
                  <div className="text-center p-4 bg-cyan-100 rounded-lg">
                    <Settings className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
                    <p className="text-lg font-bold text-cyan-600">
                      {activeDonations.filter(d => d.category === 'climatisation').length}
                    </p>
                    <p className="text-sm text-gray-700">Dons Climatisation</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium">TechForAll (IT)</span>
                    </div>
                    <span className="text-sm text-gray-600">
                      {activeDonations.filter(d => d.category === 'informatique').reduce((sum, d) => sum + d.quantity, 0)} unités
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                      <span className="text-sm font-medium">Constructeurs (Clim)</span>
                    </div>
                    <span className="text-sm text-gray-600">
                      {activeDonations.filter(d => d.category === 'climatisation').reduce((sum, d) => sum + d.quantity, 0)} unités
                    </span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm font-bold text-yellow-800">Convergence Costa del Sol</span>
                  </div>
                  <p className="text-xs text-yellow-700">
                    Les deux flux (informatique et climatisation) convergent vers Yakoubi Brahim 
                    pour traitement unifié et redistribution optimisée.
                  </p>
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

        <TabsContent value="mobile" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Téléchargement App Mobile */}
            <Card className="bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Smartphone className="h-6 w-6" />
                  Application Mobile TechForAll
                </CardTitle>
                <p className="text-purple-100">Suivi temps réel pour Yakoubi Brahim - Costa del Sol</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-white/10 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">🚛 Logistique Costa del Sol</h3>
                    <p className="text-sm text-purple-100 mb-3">
                      Interface dédiée à Yakoubi Brahim pour gérer tous les flux logistiques, 
                      dons et acheminements vers Costa del Sol en temps réel.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4" />
                      <span>GPS temps réel des livraisons</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4" />
                      <span>Notifications push instantanées</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4" />
                      <span>Scanner QR pour réception dons</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button className="bg-black hover:bg-gray-800 text-white">
                      <Download className="h-4 w-4 mr-2" />
                      App Store
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      <Download className="h-4 w-4 mr-2" />
                      Play Store
                    </Button>
                  </div>

                  <div className="text-center">
                    <QrCode className="h-16 w-16 mx-auto mb-2 opacity-80" />
                    <p className="text-xs text-purple-200">Scanner pour télécharger</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fonctionnalités App */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-yellow-600" />
                  Fonctionnalités Exclusives
                </CardTitle>
                <p className="text-gray-600">Application mobile spécialisée Costa del Sol</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mobileAppFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className={`p-2 rounded-lg ${
                        feature.category === 'tracking' ? 'bg-blue-100' :
                        feature.category === 'brahim' ? 'bg-green-100' :
                        feature.category === 'donation' ? 'bg-purple-100' :
                        'bg-orange-100'
                      }`}>
                        <feature.icon className={`h-5 w-5 ${
                          feature.category === 'tracking' ? 'text-blue-600' :
                          feature.category === 'brahim' ? 'text-green-600' :
                          feature.category === 'donation' ? 'text-purple-600' :
                          'text-orange-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800">{feature.name}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                      <Badge className={feature.available ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                        {feature.available ? 'Actif' : 'Bientôt'}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interface Brahim Spécialisée */}
          <div className="mt-6">
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-6 w-6 text-green-600" />
                  Interface Dédiée Yakoubi Brahim
                </CardTitle>
                <p className="text-gray-600">Tableau de bord mobile optimisé pour la gestion Costa del Sol</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <Satellite className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold text-lg text-gray-800 mb-2">Suivi GPS Live</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Localisation en temps réel de tous les dons en transit vers Costa del Sol
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-green-600">
                      <Radio className="h-4 w-4" />
                      <span>Signal actif</span>
                    </div>
                  </div>

                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <Scan className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-bold text-lg text-gray-800 mb-2">Réception QR</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Scanner et validation instantanée des dons reçus à Costa del Sol
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Prêt à scanner</span>
                    </div>
                  </div>

                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <Route className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="font-bold text-lg text-gray-800 mb-2">Redistribution</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Gestion des livraisons finales aux bénéficiaires depuis Costa del Sol
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-green-600">
                      <Timer className="h-4 w-4" />
                      <span>En cours</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <span className="font-bold text-blue-800">Accès Sécurisé Yakoubi Brahim</span>
                  </div>
                  <p className="text-sm text-blue-700">
                    Interface mobile avec authentification biométrique dédiée exclusivement à la gestion 
                    logistique Costa del Sol sous supervision Yakoubi Yamina.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
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