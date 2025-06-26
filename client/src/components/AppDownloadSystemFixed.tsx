import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Download, 
  QrCode, 
  Apple, 
  Shield, 
  Star,
  CheckCircle,
  Clock,
  Zap,
  Globe,
  Lock,
  CreditCard,
  User,
  Bell,
  Settings,
  Eye,
  Fingerprint,
  Wifi,
  Battery,
  Signal,
  Wallet,
  Tablet,
  Watch,
  Monitor,
  Gamepad2,
  Car,
  Tv,
  Laptop
} from 'lucide-react';
import { SiAppstore, SiApple, SiGoogleplay, SiAndroid, SiSamsung, SiHuawei, SiXiaomi } from 'react-icons/si';

interface AppFeature {
  icon: any;
  title: string;
  description: string;
  category: 'banking' | 'security' | 'islamic' | 'premium';
}

interface DeviceSupport {
  id: string;
  name: string;
  icon: any;
  versions: string[];
  downloadMethods: DownloadMethod[];
  walletSupport: boolean;
  futureReady: boolean;
  marketShare: number;
}

interface DownloadMethod {
  type: 'store' | 'direct' | 'beta' | 'enterprise' | 'wallet' | 'sideload';
  name: string;
  url: string;
  description: string;
  icon: any;
  secure: boolean;
}

export function AppDownloadSystem() {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [deviceDetected, setDeviceDetected] = useState<'ios' | 'android' | 'desktop'>('desktop');
  const [selectedDevice, setSelectedDevice] = useState<string>('auto');
  const [installProgress, setInstallProgress] = useState(0);
  const [showAllDevices, setShowAllDevices] = useState(false);

  const appFeatures: AppFeature[] = [
    {
      icon: CreditCard,
      title: "Banking Islamique",
      description: "Comptes conformes Sharia avec cartes CED Bank",
      category: 'banking'
    },
    {
      icon: Shield,
      title: "Sécurité Avancée",
      description: "Authentification biométrique et chiffrement",
      category: 'security'
    },
    {
      icon: Globe,
      title: "Multi-devises",
      description: "CHF, EUR, USD, AED support complet",
      category: 'banking'
    },
    {
      icon: Bell,
      title: "Notifications Prière",
      description: "Alertes heures de prière personnalisées",
      category: 'islamic'
    }
  ];

  const deviceSupport: DeviceSupport[] = [
    {
      id: 'iphone',
      name: 'iPhone',
      icon: SiApple,
      versions: ['iOS 15+', 'iPhone 12 Pro Max optimisé'],
      downloadMethods: [
        {
          type: 'store',
          name: 'App Store',
          url: 'https://apps.apple.com/ced-bank',
          description: 'Installation officielle sécurisée',
          icon: SiAppstore,
          secure: true
        }
      ],
      walletSupport: true,
      futureReady: true,
      marketShare: 45
    },
    {
      id: 'android',
      name: 'Android',
      icon: SiAndroid,
      versions: ['Android 8+', 'Optimisé Samsung'],
      downloadMethods: [
        {
          type: 'store',
          name: 'Google Play',
          url: 'https://play.google.com/ced-bank',
          description: 'Installation via Google Play Store',
          icon: SiGoogleplay,
          secure: true
        }
      ],
      walletSupport: true,
      futureReady: true,
      marketShare: 55
    }
  ];

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
      setDeviceDetected('ios');
      setSelectedDevice('iphone');
    } else if (userAgent.includes('android')) {
      setDeviceDetected('android');
      setSelectedDevice('android');
    }
  }, []);

  const handleDownload = (method: DownloadMethod) => {
    setDownloadStarted(true);
    setInstallProgress(0);
    
    const interval = setInterval(() => {
      setInstallProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    window.open(method.url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge className="bg-blue-600 text-white mb-4">
            <Download className="h-4 w-4 mr-2" />
            Apps Mobiles CED Bank
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Téléchargez l'App CED Bank
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Banking islamique moderne avec conformité Sharia complète. 
            Disponible sur tous vos appareils préférés.
          </p>
        </motion.div>

        {/* Main Download Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {deviceSupport.map((device, index) => (
            <motion.div
              key={device.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden border-2 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50"></div>
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-blue-600 rounded-full">
                        <device.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{device.name}</CardTitle>
                        <p className="text-gray-600">{device.versions.join(' • ')}</p>
                      </div>
                    </div>
                    <Badge className="bg-green-600 text-white">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Compatible
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  {device.downloadMethods.map((method, methodIndex) => (
                    <div key={methodIndex} className="mb-6">
                      <Button
                        onClick={() => handleDownload(method)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 mb-3"
                        disabled={downloadStarted}
                      >
                        <method.icon className="mr-3 h-6 w-6" />
                        {downloadStarted ? `Installation ${installProgress}%` : `Télécharger sur ${method.name}`}
                      </Button>
                      <p className="text-sm text-gray-600 text-center">
                        {method.description}
                      </p>
                    </div>
                  ))}
                  
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <Shield className="h-5 w-5 text-green-600 mx-auto mb-1" />
                      <span className="text-xs text-gray-600">Sécurisé</span>
                    </div>
                    <div>
                      <Zap className="h-5 w-5 text-yellow-600 mx-auto mb-1" />
                      <span className="text-xs text-gray-600">Rapide</span>
                    </div>
                    <div>
                      <Star className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                      <span className="text-xs text-gray-600">Premium</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Fonctionnalités Principales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center bg-blue-50 rounded-xl p-6"
        >
          <h3 className="font-bold text-blue-800 mb-2">Besoin d'aide ?</h3>
          <p className="text-blue-700 mb-4">
            Notre équipe support est disponible 24h/7j pour vous accompagner dans l'installation
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="border-blue-200 text-blue-700">
              Chat en direct
            </Button>
            <Button variant="outline" className="border-blue-200 text-blue-700">
              Guide d'installation
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default AppDownloadSystem;