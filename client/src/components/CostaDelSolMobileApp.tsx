import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone,
  Download,
  QrCode,
  MapPin,
  Truck,
  Package,
  Users,
  Calendar,
  Clock,
  Building2,
  Phone,
  Mail,
  Navigation,
  Camera,
  FileText,
  CheckCircle,
  AlertCircle,
  Star,
  Globe,
  Wifi,
  Battery,
  Signal,
  Sun,
  Anchor,
  Heart,
  Euro,
  Gift,
  Zap
} from 'lucide-react';
import { SiAppstore, SiGoogleplay, SiAndroid, SiApple } from 'react-icons/si';

interface LogisticsCenter {
  id: string;
  name: string;
  type: 'warehouse' | 'collection_point' | 'distribution_center' | 'repair_shop';
  address: string;
  coordinates: { lat: number; lng: number };
  manager: string;
  phone: string;
  email: string;
  capacity: number;
  currentStock: number;
  specialties: string[];
  operatingHours: string;
  status: 'active' | 'maintenance' | 'full';
}

interface DonorInstitution {
  id: string;
  name: string;
  type: 'company' | 'school' | 'hospital' | 'government' | 'ngo';
  contactPerson: string;
  phone: string;
  email: string;
  address: string;
  preferredPickupTimes: string[];
  donationFrequency: 'weekly' | 'monthly' | 'quarterly' | 'as_needed';
  totalDonated: number;
  lastDonation: Date;
  status: 'active' | 'pending' | 'inactive';
  accessCredentials: {
    hasAccount: boolean;
    lastLogin: Date | null;
    permissions: string[];
  };
}

interface MobileFeature {
  id: string;
  icon: any;
  title: string;
  description: string;
  category: 'logistics' | 'donors' | 'management' | 'communication';
  targetUsers: string[];
}

export function CostaDelSolMobileApp() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedDevice, setSelectedDevice] = useState<'ios' | 'android'>('ios');
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [installProgress, setInstallProgress] = useState(0);

  const logisticsCenters: LogisticsCenter[] = [
    {
      id: 'CDS001',
      name: 'Entrepôt Principal Marbella',
      type: 'warehouse',
      address: 'Polígono Industrial de Marbella, Málaga',
      coordinates: { lat: 36.5108, lng: -4.8844 },
      manager: 'B. Yakoubi',
      phone: '+34 952 123 456',
      email: 'marbella@techforall.org',
      capacity: 500,
      currentStock: 347,
      specialties: ['Électronique', 'Moteurs marins', 'Outils BTP'],
      operatingHours: 'Lun-Ven 8h-18h, Sam 9h-13h',
      status: 'active'
    },
    {
      id: 'CDS002',
      name: 'Centre Tri Fuengirola',
      type: 'collection_point',
      address: 'Av. Jesús Santos Rein, Fuengirola',
      coordinates: { lat: 36.5397, lng: -4.6262 },
      manager: 'Carlos Martinez',
      phone: '+34 952 234 567',
      email: 'fuengirola@techforall.org',
      capacity: 200,
      currentStock: 89,
      specialties: ['Informatique', 'Électroménager'],
      operatingHours: 'Lun-Sam 9h-17h',
      status: 'active'
    },
    {
      id: 'CDS003',
      name: 'Atelier Reconditionnement Estepona',
      type: 'repair_shop',
      address: 'Calle Real, Estepona',
      coordinates: { lat: 36.4285, lng: -5.1457 },
      manager: 'Ana Rodriguez',
      phone: '+34 952 345 678',
      email: 'estepona@techforall.org',
      capacity: 100,
      currentStock: 156,
      specialties: ['Moteurs', 'Mécanique', 'Électronique'],
      operatingHours: 'Mar-Sam 8h-16h',
      status: 'active'
    }
  ];

  const donorInstitutions: DonorInstitution[] = [
    {
      id: 'DI001',
      name: 'Málaga TechCorp',
      type: 'company',
      contactPerson: 'Dr. Elena Vásquez',
      phone: '+34 951 123 789',
      email: 'elena.vasquez@malagacorp.es',
      address: 'Parque Tecnológico de Andalucía, Málaga',
      preferredPickupTimes: ['Mardi 14h-16h', 'Vendredi 10h-12h'],
      donationFrequency: 'monthly',
      totalDonated: 45000,
      lastDonation: new Date('2024-05-20'),
      status: 'active',
      accessCredentials: {
        hasAccount: true,
        lastLogin: new Date('2024-06-10'),
        permissions: ['schedule_pickup', 'track_donations', 'generate_reports']
      }
    },
    {
      id: 'DI002',
      name: 'Universidad de Málaga',
      type: 'school',
      contactPerson: 'Prof. Miguel Santos',
      phone: '+34 952 134 567',
      email: 'miguel.santos@uma.es',
      address: 'Campus de Teatinos, Málaga',
      preferredPickupTimes: ['Lundi 9h-11h', 'Mercredi 15h-17h'],
      donationFrequency: 'quarterly',
      totalDonated: 28000,
      lastDonation: new Date('2024-04-15'),
      status: 'active',
      accessCredentials: {
        hasAccount: true,
        lastLogin: new Date('2024-06-05'),
        permissions: ['schedule_pickup', 'track_donations']
      }
    },
    {
      id: 'DI003',
      name: 'Hospital Costa del Sol',
      type: 'hospital',
      contactPerson: 'Dr. Carmen López',
      phone: '+34 951 976 669',
      email: 'carmen.lopez@hcs.es',
      address: 'Autovía A-7, Km 187, Marbella',
      preferredPickupTimes: ['Jeudi 11h-13h'],
      donationFrequency: 'as_needed',
      totalDonated: 12500,
      lastDonation: new Date('2024-06-01'),
      status: 'active',
      accessCredentials: {
        hasAccount: false,
        lastLogin: null,
        permissions: []
      }
    }
  ];

  const mobileFeatures: MobileFeature[] = [
    {
      id: 'geolocation',
      icon: Navigation,
      title: 'Géolocalisation Temps Réel',
      description: 'Localisation automatique des centres de collecte et navigation GPS intégrée',
      category: 'logistics',
      targetUsers: ['Chauffeurs', 'Responsables logistique']
    },
    {
      id: 'scheduling',
      icon: Calendar,
      title: 'Planification Collectes',
      description: 'Interface pour établissements donateurs - programmation enlèvements',
      category: 'donors',
      targetUsers: ['Responsables établissements', 'Coordinateurs']
    },
    {
      id: 'inventory',
      icon: Package,
      title: 'Gestion Stock Mobile',
      description: 'Scan codes-barres, ajout inventaire, suivi réparations en temps réel',
      category: 'management',
      targetUsers: ['B. Yakoubi', 'Équipe entrepôt']
    },
    {
      id: 'photos',
      icon: Camera,
      title: 'Documentation Photo',
      description: 'Photos automatiques des dons, état matériel, preuves livraison',
      category: 'management',
      targetUsers: ['Tous utilisateurs']
    },
    {
      id: 'communication',
      icon: Phone,
      title: 'Communication Intégrée',
      description: 'Chat en temps réel, notifications push, appels directs',
      category: 'communication',
      targetUsers: ['Tous utilisateurs']
    },
    {
      id: 'reports',
      icon: FileText,
      title: 'Rapports Instantanés',
      description: 'Génération reçus fiscaux, rapports activité, statistiques',
      category: 'management',
      targetUsers: ['Responsables établissements', 'B. Yakoubi']
    },
    {
      id: 'offline',
      icon: Wifi,
      title: 'Mode Hors-Ligne',
      description: 'Fonctionnement sans internet, synchronisation automatique',
      category: 'logistics',
      targetUsers: ['Équipe terrain']
    },
    {
      id: 'multilingual',
      icon: Globe,
      title: 'Multi-langues',
      description: 'Interface Español/Français/English pour expatriés',
      category: 'communication',
      targetUsers: ['Tous utilisateurs']
    }
  ];

  const handleDownload = (platform: 'ios' | 'android') => {
    setSelectedDevice(platform);
    setDownloadStarted(true);
    
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 10;
      setInstallProgress(Math.min(progress, 100));
      
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          const url = platform === 'ios' 
            ? 'https://apps.apple.com/es/app/costa-del-sol-techforall/id1234567890'
            : 'https://play.google.com/store/apps/details?id=com.techforall.costadelsol';
          window.open(url, '_blank');
        }, 1000);
      }
    }, 200);
  };

  const generateQRCode = (platform: string) => {
    const url = platform === 'ios'
      ? 'https://apps.apple.com/es/app/costa-del-sol-techforall/id1234567890'
      : 'https://play.google.com/store/apps/details?id=com.techforall.costadelsol';
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'logistics': return 'bg-blue-100 text-blue-800';
      case 'donors': return 'bg-green-100 text-green-800';
      case 'management': return 'bg-purple-100 text-purple-800';
      case 'communication': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Costa del Sol */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-2xl flex items-center justify-center"
            >
              <Sun className="h-8 w-8 text-white" />
            </motion.div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Costa del Sol TechForAll
            </h1>
          </div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Application mobile logistique - Gestion collectes, inventaire et communication établissements donateurs
          </p>
          <div className="flex justify-center gap-2">
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              <Anchor className="h-3 w-3 mr-1" />
              Costa del Sol
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Truck className="h-3 w-3 mr-1" />
              Logistique Mobile
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Building2 className="h-3 w-3 mr-1" />
              Établissements
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              <Smartphone className="h-3 w-3 mr-1" />
              Responsive
            </Badge>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="download">Téléchargement</TabsTrigger>
            <TabsTrigger value="logistics">Centres Logistique</TabsTrigger>
            <TabsTrigger value="donors">Établissements</TabsTrigger>
            <TabsTrigger value="features">Fonctionnalités</TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <Card className="bg-gradient-to-br from-orange-100 to-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-800 text-sm font-medium">Centres Actifs</p>
                      <p className="text-3xl font-bold text-orange-900">
                        {logisticsCenters.filter(c => c.status === 'active').length}
                      </p>
                    </div>
                    <MapPin className="h-12 w-12 text-orange-600" />
                  </div>
                  <p className="text-orange-700 text-sm mt-2">Costa del Sol</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-100 to-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-800 text-sm font-medium">Établissements</p>
                      <p className="text-3xl font-bold text-green-900">
                        {donorInstitutions.filter(d => d.status === 'active').length}
                      </p>
                    </div>
                    <Building2 className="h-12 w-12 text-green-600" />
                  </div>
                  <p className="text-green-700 text-sm mt-2">Donateurs actifs</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-100 to-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-800 text-sm font-medium">Capacité Stock</p>
                      <p className="text-3xl font-bold text-blue-900">
                        {logisticsCenters.reduce((sum, c) => sum + c.capacity, 0)}
                      </p>
                    </div>
                    <Package className="h-12 w-12 text-blue-600" />
                  </div>
                  <p className="text-blue-700 text-sm mt-2">Articles totaux</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-100 to-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-800 text-sm font-medium">App Mobile</p>
                      <p className="text-3xl font-bold text-purple-900">100%</p>
                    </div>
                    <Smartphone className="h-12 w-12 text-purple-600" />
                  </div>
                  <p className="text-purple-700 text-sm mt-2">Responsive</p>
                </CardContent>
              </Card>

            </div>

            {/* Responsable Costa del Sol */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sun className="h-5 w-5 text-orange-600" />
                  Responsable Costa del Sol
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <Anchor className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">B. Yakoubi</h3>
                      <p className="text-gray-600">Responsable Logistique Costa del Sol</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Coordination centres Marbella, Fuengirola, Estepona - Gestion mobile complète
                      </p>
                    </div>
                    <div className="text-right">
                      <Button variant="outline" className="mb-2 border-orange-300">
                        <Phone className="h-4 w-4 mr-2" />
                        +34 952 123 456
                      </Button>
                      <p className="text-sm text-gray-500">
                        marbella@techforall.org
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-white rounded-lg border border-orange-200">
                      <Package className="h-6 w-6 mx-auto mb-2 text-orange-600" />
                      <p className="text-sm font-medium">Entrepôt Principal</p>
                      <p className="text-xs text-gray-600">Marbella - 500 articles</p>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg border border-orange-200">
                      <Truck className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                      <p className="text-sm font-medium">Collectes Programmées</p>
                      <p className="text-xs text-gray-600">3 établissements/semaine</p>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg border border-orange-200">
                      <Smartphone className="h-6 w-6 mx-auto mb-2 text-green-600" />
                      <p className="text-sm font-medium">Gestion Mobile</p>
                      <p className="text-xs text-gray-600">iOS + Android</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </TabsContent>

          {/* Téléchargement App */}
          <TabsContent value="download">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Téléchargement */}
              <Card className="bg-white/90 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="h-6 w-6 text-orange-600" />
                    Costa del Sol App Mobile
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  {/* Progress */}
                  <AnimatePresence>
                    {downloadStarted && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-orange-50 border border-orange-200 rounded-xl p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Download className="h-4 w-4 text-orange-600" />
                          <span className="font-medium">Téléchargement en cours...</span>
                        </div>
                        <div className="w-full bg-orange-200 rounded-full h-3 mb-2">
                          <motion.div
                            className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${installProgress}%` }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                        <p className="text-sm text-orange-700">{Math.round(installProgress)}% - Installation logistique</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Download Buttons */}
                  <div className="space-y-3">
                    <Button 
                      onClick={() => handleDownload('ios')}
                      className="w-full bg-black text-white hover:bg-gray-800 h-14 text-lg"
                      disabled={downloadStarted}
                    >
                      <SiAppstore className="h-6 w-6 mr-3" />
                      Télécharger sur App Store
                    </Button>
                    
                    <Button 
                      onClick={() => handleDownload('android')}
                      className="w-full bg-green-600 text-white hover:bg-green-700 h-14 text-lg"
                      disabled={downloadStarted}
                    >
                      <SiGoogleplay className="h-6 w-6 mr-3" />
                      Télécharger sur Google Play
                    </Button>
                  </div>

                  {/* App Info */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-medium mb-3">Informations Application</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Version:</span>
                        <p className="font-medium">3.2.1</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Taille:</span>
                        <p className="font-medium">156 MB</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Compatibilité:</span>
                        <p className="font-medium">iOS 13+ / Android 8+</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Langues:</span>
                        <p className="font-medium">ES, FR, EN</p>
                      </div>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <h3 className="font-medium text-blue-800 mb-2">Accès Établissements Donateurs:</h3>
                    <ol className="text-sm text-blue-700 space-y-1">
                      <li>1. Téléchargez l'application mobile</li>
                      <li>2. Demandez vos codes d'accès à B. Yakoubi</li>
                      <li>3. Planifiez vos collectes directement</li>
                      <li>4. Suivez vos dons en temps réel</li>
                      <li>5. Générez vos reçus fiscaux instantanément</li>
                    </ol>
                  </div>

                </CardContent>
              </Card>

              {/* QR Codes & Preview */}
              <div className="space-y-6">
                
                {/* QR Codes */}
                <Card className="bg-white/90 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <QrCode className="h-5 w-5 text-orange-600" />
                      QR Codes Téléchargement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="inline-block p-3 bg-white rounded-xl shadow-lg border">
                          <img 
                            src={generateQRCode('ios')} 
                            alt="QR Code iOS"
                            className="w-32 h-32 mx-auto"
                          />
                        </div>
                        <div className="mt-2 flex items-center justify-center gap-1">
                          <SiApple className="h-4 w-4" />
                          <span className="text-sm font-medium">iOS</span>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="inline-block p-3 bg-white rounded-xl shadow-lg border">
                          <img 
                            src={generateQRCode('android')} 
                            alt="QR Code Android"
                            className="w-32 h-32 mx-auto"
                          />
                        </div>
                        <div className="mt-2 flex items-center justify-center gap-1">
                          <SiAndroid className="h-4 w-4" />
                          <span className="text-sm font-medium">Android</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* App Preview */}
                <Card className="bg-white/90 backdrop-blur">
                  <CardHeader>
                    <CardTitle>Aperçu Interface Mobile</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                            <Sun className="h-4 w-4 text-orange-600" />
                          </div>
                          <span className="font-medium">Costa del Sol</span>
                        </div>
                        <div className="flex gap-1">
                          <Signal className="h-4 w-4" />
                          <Wifi className="h-4 w-4" />
                          <Battery className="h-4 w-4" />
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Centre Marbella</span>
                            <MapPin className="h-4 w-4" />
                          </div>
                          <p className="text-lg font-bold">347/500 articles</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white/20 rounded-lg p-3 text-center">
                            <Truck className="h-5 w-5 mx-auto mb-1" />
                            <p className="text-xs">Collectes</p>
                          </div>
                          <div className="bg-white/20 rounded-lg p-3 text-center">
                            <Camera className="h-5 w-5 mx-auto mb-1" />
                            <p className="text-xs">Photos</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </TabsContent>

          {/* Centres Logistique */}
          <TabsContent value="logistics">
            <div className="space-y-6">
              {logisticsCenters.map((center) => (
                <Card key={center.id} className="hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{center.name}</h3>
                        <p className="text-gray-600 flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {center.address}
                        </p>
                      </div>
                      <Badge variant={center.status === 'active' ? 'default' : 'secondary'}>
                        {center.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Responsable</h4>
                        <div className="space-y-1 text-sm">
                          <p className="font-medium">{center.manager}</p>
                          <p className="text-gray-600 flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {center.phone}
                          </p>
                          <p className="text-gray-600 flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {center.email}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Capacité & Stock</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Stock actuel:</span>
                            <span className="font-bold text-blue-600">{center.currentStock}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Capacité max:</span>
                            <span className="font-medium">{center.capacity}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${(center.currentStock / center.capacity) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Spécialités</h4>
                        <div className="flex flex-wrap gap-1">
                          {center.specialties.map((specialty, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-600 flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {center.operatingHours}
                          </p>
                        </div>
                      </div>
                    </div>

                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Établissements Donateurs */}
          <TabsContent value="donors">
            <div className="space-y-6">
              {donorInstitutions.map((institution) => (
                <Card key={institution.id} className="hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{institution.name}</h3>
                        <p className="text-gray-600 capitalize">{institution.type}</p>
                        <p className="text-gray-500 text-sm">{institution.address}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={institution.status === 'active' ? 'default' : 'secondary'}>
                          {institution.status}
                        </Badge>
                        {institution.accessCredentials.hasAccount && (
                          <Badge variant="outline" className="ml-2 bg-green-50 text-green-700">
                            <Smartphone className="h-3 w-3 mr-1" />
                            App Mobile
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Contact</h4>
                        <div className="space-y-1 text-sm">
                          <p className="font-medium">{institution.contactPerson}</p>
                          <p className="text-gray-600 flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {institution.phone}
                          </p>
                          <p className="text-gray-600 flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {institution.email}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Collectes</h4>
                        <div className="space-y-1 text-sm">
                          <p>
                            <span className="text-gray-600">Fréquence:</span>
                            <span className="ml-1 font-medium">{institution.donationFrequency}</span>
                          </p>
                          <p>
                            <span className="text-gray-600">Dernier don:</span>
                            <span className="ml-1">{institution.lastDonation.toLocaleDateString('fr-FR')}</span>
                          </p>
                          <div className="mt-2">
                            {institution.preferredPickupTimes.map((time, index) => (
                              <Badge key={index} variant="outline" className="text-xs mr-1 mb-1">
                                {time}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Contributions</h4>
                        <div className="space-y-1 text-sm">
                          <p className="text-2xl font-bold text-green-600">
                            {institution.totalDonated.toLocaleString()}€
                          </p>
                          <p className="text-gray-600">Total donné</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Accès Mobile</h4>
                        {institution.accessCredentials.hasAccount ? (
                          <div className="space-y-1 text-sm">
                            <div className="flex items-center gap-1">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Compte actif</span>
                            </div>
                            <p className="text-gray-600">
                              Dernière connexion: {institution.accessCredentials.lastLogin?.toLocaleDateString('fr-FR')}
                            </p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {institution.accessCredentials.permissions.map((perm, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {perm}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="text-sm">
                            <div className="flex items-center gap-1">
                              <AlertCircle className="h-4 w-4 text-orange-600" />
                              <span>Pas de compte</span>
                            </div>
                            <Button variant="outline" size="sm" className="mt-2">
                              <Users className="h-3 w-3 mr-1" />
                              Créer accès
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>

                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Fonctionnalités */}
          <TabsContent value="features">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mobileFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className="h-full hover:shadow-lg transition-all">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <h3 className="font-bold mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                      <Badge variant="outline" className={getCategoryColor(feature.category)}>
                        {feature.category}
                      </Badge>
                      <div className="mt-3">
                        <p className="text-xs text-gray-500">
                          Pour: {feature.targetUsers.join(', ')}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

        </Tabs>

        {/* Footer Costa del Sol */}
        <Card className="bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200">
          <CardContent className="p-6 text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Sun className="h-6 w-6 text-orange-600" />
              <h3 className="text-xl font-bold text-orange-800">Costa del Sol - Plateforme Mobile Complète</h3>
            </div>
            <p className="text-orange-700 mb-4">
              Facilitation logistique pour expatriés, établissements donateurs et équipes terrain. 
              Gestion temps réel, communication intégrée, documentation automatique.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Download className="h-4 w-4 mr-2" />
                Télécharger iOS
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                <Download className="h-4 w-4 mr-2" />
                Télécharger Android
              </Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}