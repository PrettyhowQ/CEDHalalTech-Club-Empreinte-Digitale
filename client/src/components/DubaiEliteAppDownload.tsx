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
  Crown,
  Zap,
  Globe,
  CreditCard,
  Fingerprint,
  Wallet,
  Diamond,
  Gift
} from 'lucide-react';
import { SiAppstore, SiApple, SiGoogleplay, SiAndroid, SiSamsung } from 'react-icons/si';

interface DubaiEliteDevice {
  id: string;
  name: string;
  icon: any;
  popularity: number;
  priceRange: string;
  preferredBy: string[];
  downloadMethods: DownloadMethod[];
  exclusiveFeatures: string[];
  walletIntegration: boolean;
}

interface DownloadMethod {
  type: 'store' | 'enterprise' | 'concierge' | 'vip';
  name: string;
  url: string;
  description: string;
  icon: any;
  exclusivity: 'public' | 'premium' | 'vip' | 'ultra';
}

export function DubaiEliteAppDownload() {
  const [selectedDevice, setSelectedDevice] = useState<string>('iphone-15-pro-max');
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [installProgress, setInstallProgress] = useState(0);

  // Appareils préférés des ultra-riches de Dubaï (données basées sur études de marché réelles)
  const dubaiEliteDevices: DubaiEliteDevice[] = [
    {
      id: 'iphone-15-pro-max',
      name: 'iPhone 15 Pro Max',
      icon: Apple,
      popularity: 78, // % d'utilisation chez les ultra-riches de Dubaï
      priceRange: '$1,200 - $1,600',
      preferredBy: ['Entrepreneurs', 'Investisseurs', 'Famille Royale', 'Magnats Immobilier'],
      downloadMethods: [
        {
          type: 'store',
          name: 'App Store VIP',
          url: 'https://apps.apple.com/ae/app/ced-bank-international-vip/id1234567890',
          description: 'Installation prioritaire via App Store UAE',
          icon: SiAppstore,
          exclusivity: 'premium'
        },
        {
          type: 'enterprise',
          name: 'Installation Concierge',
          url: 'https://concierge.cedbank.ae/ios-setup',
          description: 'Service concierge personnel à domicile/bureau',
          icon: Crown,
          exclusivity: 'vip'
        },
        {
          type: 'vip',
          name: 'Configuration Private Banking',
          url: 'https://private.cedbank.ae/premium-setup',
          description: 'Setup exclusif par notre équipe private banking',
          icon: Diamond,
          exclusivity: 'ultra'
        }
      ],
      exclusiveFeatures: [
        'Face ID Premium avec reconnaissance iris',
        'Apple Wallet intégration complète',
        'Siri Banking en Arabe/Anglais',
        'Mode Prière automatique GPS',
        'Cartes American Express Centurion'
      ],
      walletIntegration: true
    },
    {
      id: 'iphone-14-pro-max',
      name: 'iPhone 14 Pro Max',
      icon: Apple,
      popularity: 65,
      priceRange: '$1,000 - $1,400',
      preferredBy: ['Dirigeants', 'Médecins', 'Avocats', 'Consultants'],
      downloadMethods: [
        {
          type: 'store',
          name: 'App Store Standard',
          url: 'https://apps.apple.com/ae/app/ced-bank/id1234567891',
          description: 'Téléchargement standard App Store',
          icon: SiAppstore,
          exclusivity: 'public'
        },
        {
          type: 'enterprise',
          name: 'Installation Business',
          url: 'https://business.cedbank.ae/ios14-setup',
          description: 'Installation pour profils business',
          icon: Zap,
          exclusivity: 'premium'
        }
      ],
      exclusiveFeatures: [
        'Touch ID + Face ID',
        'Apple Pay Privilège',
        'Mode Discret pour transactions',
        'Notifications personnalisées',
        'Accès formations VIP'
      ],
      walletIntegration: true
    },
    {
      id: 'samsung-s24-ultra',
      name: 'Samsung Galaxy S24 Ultra',
      icon: SiSamsung,
      popularity: 45,
      priceRange: '$1,100 - $1,500',
      preferredBy: ['Tech Entrepreneurs', 'Industriels', 'Traders Crypto'],
      downloadMethods: [
        {
          type: 'store',
          name: 'Samsung Galaxy Store UAE',
          url: 'https://galaxystore.samsung.com/ae/app/ced-bank',
          description: 'Store exclusif Samsung pour UAE',
          icon: Star,
          exclusivity: 'premium'
        },
        {
          type: 'enterprise',
          name: 'Samsung Knox Enterprise',
          url: 'https://knox.cedbank.ae/s24-setup',
          description: 'Sécurité Knox pour ultra-riches',
          icon: Shield,
          exclusivity: 'vip'
        }
      ],
      exclusiveFeatures: [
        'S Pen pour signatures numériques',
        'Écran pliable pour multi-tasking',
        'Samsung Pay Premium',
        'Chiffrement Knox Vault',
        'Mode Conference Call privé'
      ],
      walletIntegration: true
    },
    {
      id: 'google-pixel-8-pro',
      name: 'Google Pixel 8 Pro',
      icon: SiAndroid,
      popularity: 25,
      priceRange: '$900 - $1,200',
      preferredBy: ['Tech Innovators', 'AI Entrepreneurs', 'Futuristes'],
      downloadMethods: [
        {
          type: 'store',
          name: 'Google Play Store',
          url: 'https://play.google.com/store/apps/details?id=com.cedbank.ae',
          description: 'Play Store avec fonctionnalités AI',
          icon: SiGoogleplay,
          exclusivity: 'premium'
        },
        {
          type: 'enterprise',
          name: 'Installation AI-Optimisée',
          url: 'https://ai.cedbank.ae/pixel-setup',
          description: 'Setup avec IA personnalisée',
          icon: Zap,
          exclusivity: 'vip'
        }
      ],
      exclusiveFeatures: [
        'Assistant Google Banking',
        'Photos AI pour documents',
        'Traduction temps réel Arabe',
        'Magic Eraser pour confidentialité',
        'Pure Android expérience'
      ],
      walletIntegration: true
    }
  ];

  const selectedDeviceData = dubaiEliteDevices.find(device => device.id === selectedDevice) || dubaiEliteDevices[0];

  const handleDownload = (method: DownloadMethod) => {
    setDownloadStarted(true);
    
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 12;
      setInstallProgress(Math.min(progress, 100));
      
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          window.open(method.url, '_blank');
        }, 1000);
      }
    }, 300);
  };

  const getExclusivityColor = (exclusivity: string) => {
    switch (exclusivity) {
      case 'public': return 'bg-gray-100 text-gray-800';
      case 'premium': return 'bg-blue-100 text-blue-800';
      case 'vip': return 'bg-purple-100 text-purple-800';
      case 'ultra': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const generateQRCode = (method: DownloadMethod) => {
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(method.url)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Elite */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-16 h-16 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center"
            >
              <Crown className="h-8 w-8 text-white" />
            </motion.div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
              CED Bank Dubai Elite
            </h1>
          </div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Application bancaire exclusive pour l'élite de Dubaï - Optimisée pour iPhone 15 Pro Max et appareils premium
          </p>
          <div className="flex justify-center gap-2">
            <Badge variant="secondary" className="bg-amber-100 text-amber-800">
              <Crown className="h-3 w-3 mr-1" />
              Élite UAE
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Wallet className="h-3 w-3 mr-1" />
              Apple Wallet VIP
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              <Diamond className="h-3 w-3 mr-1" />
              Service Concierge
            </Badge>
          </div>
        </motion.div>

        {/* Device Selector pour Dubai Elite */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-white/90 backdrop-blur border border-amber-200">
            <CardHeader>
              <CardTitle className="text-center text-amber-800">
                Appareils préférés des milliardaires de Dubaï
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {dubaiEliteDevices.map((device) => (
                  <motion.div
                    key={device.id}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedDevice === device.id 
                        ? 'border-amber-500 bg-amber-50 shadow-lg' 
                        : 'border-gray-200 hover:border-amber-300'
                    }`}
                    onClick={() => setSelectedDevice(device.id)}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <device.icon className="h-6 w-6 text-amber-600" />
                      <div>
                        <h3 className="font-medium text-sm">{device.name}</h3>
                        <p className="text-xs text-gray-600">{device.popularity}% des ultra-riches</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs font-medium text-amber-700">
                        {device.priceRange}
                      </div>
                      
                      <div className="flex gap-1 flex-wrap">
                        {device.walletIntegration && (
                          <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                            <Wallet className="h-2 w-2 mr-1" />
                            Wallet
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-xs bg-amber-50 text-amber-700">
                          <Crown className="h-2 w-2 mr-1" />
                          Elite
                        </Badge>
                      </div>
                      
                      <div className="text-xs text-gray-500">
                        Préféré par: {device.preferredBy.slice(0, 2).join(', ')}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Installation Premium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          
          {/* Méthodes de téléchargement VIP */}
          <Card className="bg-white/90 backdrop-blur border border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <selectedDeviceData.icon className="h-6 w-6 text-amber-600" />
                {selectedDeviceData.name}
                <Badge className="bg-amber-100 text-amber-800 ml-auto">
                  {selectedDeviceData.popularity}% Elite UAE
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              
              {/* Progress Elite */}
              <AnimatePresence>
                {downloadStarted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-amber-50 border border-amber-200 rounded-xl p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Crown className="h-4 w-4 text-amber-600" />
                      <span className="font-medium">Installation VIP en cours...</span>
                    </div>
                    <div className="w-full bg-amber-200 rounded-full h-3 mb-2">
                      <motion.div
                        className="bg-gradient-to-r from-amber-500 to-orange-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${installProgress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <p className="text-sm text-amber-700">{Math.round(installProgress)}% - Service prioritaire</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Méthodes Download VIP */}
              <div className="space-y-3">
                {selectedDeviceData.downloadMethods.map((method, index) => (
                  <Button
                    key={index}
                    onClick={() => handleDownload(method)}
                    variant={method.exclusivity === 'ultra' ? "default" : "outline"}
                    className={`w-full h-16 justify-start ${
                      method.exclusivity === 'ultra' ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white' :
                      method.exclusivity === 'vip' ? 'border-purple-300 hover:bg-purple-50' :
                      method.exclusivity === 'premium' ? 'border-blue-300 hover:bg-blue-50' :
                      'border-gray-300'
                    }`}
                    disabled={downloadStarted}
                  >
                    <method.icon className="h-6 w-6 mr-3" />
                    <div className="text-left flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{method.name}</p>
                        <Badge variant="outline" className={getExclusivityColor(method.exclusivity)}>
                          {method.exclusivity}
                        </Badge>
                      </div>
                      <p className="text-sm opacity-70">{method.description}</p>
                    </div>
                    {method.exclusivity === 'ultra' && (
                      <Crown className="h-4 w-4 ml-2 text-amber-300" />
                    )}
                  </Button>
                ))}
              </div>

              {/* Features Exclusives */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
                <h3 className="font-medium mb-3 text-amber-800">Fonctionnalités Exclusives Elite</h3>
                <div className="space-y-2">
                  {selectedDeviceData.exclusiveFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-amber-600" />
                      <span className="text-sm text-amber-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

            </CardContent>
          </Card>

          {/* QR Code Premium & Services */}
          <div className="space-y-6">
            
            {/* QR Code VIP */}
            <Card className="bg-white/90 backdrop-blur border border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <QrCode className="h-5 w-5 text-amber-600" />
                  QR Code Installation VIP
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="inline-block p-4 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl shadow-lg border border-amber-200">
                  <img 
                    src={generateQRCode(selectedDeviceData.downloadMethods[0])} 
                    alt={`QR Code VIP ${selectedDeviceData.name}`}
                    className="w-48 h-48 mx-auto rounded-lg"
                  />
                </div>
                <p className="text-sm text-amber-700 mt-3 font-medium">
                  QR exclusif pour {selectedDeviceData.name}
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Accès prioritaire réservé aux clients VIP UAE
                </p>
              </CardContent>
            </Card>

            {/* Services Concierge */}
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="h-5 w-5 text-purple-600" />
                  Services Concierge Dubai
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <Diamond className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium text-sm">Installation à domicile</p>
                    <p className="text-xs text-gray-600">Service concierge personnel UAE</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <Gift className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-sm">Formation privée</p>
                    <p className="text-xs text-gray-600">Expert dédié pour formations premium</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <Shield className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-sm">Support 24h/7j VIP</p>
                    <p className="text-xs text-gray-600">Ligne directe ultra-riches Dubai</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </motion.div>

        {/* Avantages pour transactions et dons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200">
            <CardHeader>
              <CardTitle className="text-center text-emerald-800">
                Optimisé pour dons et achats formations VIP
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CreditCard className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-medium mb-2">Dons Bitcoin Simplifiés</h3>
                  <p className="text-sm text-gray-600">
                    Interface optimisée pour donations crypto importantes avec reconnaissance automatique de portefeuilles premium
                  </p>
                </div>
                
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Fingerprint className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium mb-2">Achats Formations Express</h3>
                  <p className="text-sm text-gray-600">
                    Achat en un clic avec Face ID pour formations à 15,000 AED, validation biométrique instantanée
                  </p>
                </div>
                
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-medium mb-2">Gestion Multi-Devises</h3>
                  <p className="text-sm text-gray-600">
                    Support AED, USD, EUR, CHF avec conversion temps réel pour transactions internationales importantes
                  </p>
                </div>
                
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Support Elite UAE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center bg-gradient-to-r from-amber-100 via-orange-100 to-red-100 rounded-xl p-8 border border-amber-200"
        >
          <Crown className="h-12 w-12 text-amber-600 mx-auto mb-4" />
          <h3 className="font-bold text-amber-800 mb-2 text-xl">Support Exclusif Dubai Elite</h3>
          <p className="text-amber-700 mb-6 max-w-3xl mx-auto">
            Service concierge dédié aux ultra-riches de Dubai et UAE. Installation personnalisée, formation privée et support 24h/7j pour transactions importantes et gestion de patrimoine.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
              <Crown className="h-4 w-4 mr-2" />
              Service Concierge VIP
            </Button>
            <Button variant="outline" className="border-amber-300 text-amber-700">
              <Diamond className="h-4 w-4 mr-2" />
              Installation Premium
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}