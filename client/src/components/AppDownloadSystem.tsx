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
  Signal
} from 'lucide-react';
import { SiAppstore, SiApple } from 'react-icons/si';

interface AppFeature {
  icon: any;
  title: string;
  description: string;
  category: 'banking' | 'security' | 'islamic' | 'premium';
}

export function AppDownloadSystem() {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [deviceDetected, setDeviceDetected] = useState<'ios' | 'android' | 'desktop'>('desktop');
  const [installProgress, setInstallProgress] = useState(0);

  useEffect(() => {
    // Détection du type d'appareil
    const userAgent = navigator.userAgent;
    if (/iPhone|iPad|iPod/.test(userAgent)) {
      setDeviceDetected('ios');
    } else if (/Android/.test(userAgent)) {
      setDeviceDetected('android');
    }
  }, []);

  const appFeatures: AppFeature[] = [
    {
      icon: CreditCard,
      title: 'Cartes Virtuelles Instantanées',
      description: 'Créez des cartes virtuelles en 30 secondes avec contrôles avancés',
      category: 'banking'
    },
    {
      icon: Fingerprint,
      title: 'Authentification Biométrique',
      description: 'Face ID et Touch ID pour une sécurité maximale',
      category: 'security'
    },
    {
      icon: Bell,
      title: 'Mode Prière Automatique',
      description: 'Pause automatique des notifications pendant Salah avec boussole Qibla',
      category: 'islamic'
    },
    {
      icon: Eye,
      title: 'Dashboard Premium',
      description: 'Accès exclusif aux 9 fonctionnalités révolutionnaires',
      category: 'premium'
    },
    {
      icon: Globe,
      title: 'Convertisseur 16+ Devises',
      description: 'Taux temps réel pour toutes les devises halal',
      category: 'banking'
    },
    {
      icon: Shield,
      title: 'Chiffrement Bancaire',
      description: 'Protection niveau militaire pour vos données financières',
      category: 'security'
    },
    {
      icon: Star,
      title: 'Cashback Halal',
      description: '50% redistribué automatiquement en donations',
      category: 'islamic'
    },
    {
      icon: Zap,
      title: 'Virement Instantané',
      description: 'Transferts d\'argent en moins de 5 secondes',
      category: 'banking'
    }
  ];

  const downloadLinks = {
    ios: {
      appStore: 'https://apps.apple.com/app/ced-bank-international/id1234567890',
      directDownload: 'https://install.appcenter.ms/orgs/ced-bank/apps/ced-bank-ios/distribution_groups/public',
      testFlight: 'https://testflight.apple.com/join/ABC12345'
    },
    android: {
      playStore: 'https://play.google.com/store/apps/details?id=com.cedbank.international',
      directApk: 'https://github.com/club-empreinte-digitale/ced-bank-mobile/releases/latest/download/ced-bank.apk'
    }
  };

  const appSpecs = {
    version: '2.1.0',
    size: '89.4 MB',
    minVersion: {
      ios: 'iOS 14.0+',
      android: 'Android 8.0+'
    },
    languages: ['Français', 'Arabe', 'Anglais', 'Espagnol'],
    lastUpdate: new Date('2025-06-15'),
    rating: 4.9,
    downloads: '250K+',
    reviews: 12847
  };

  const handleDownload = (type: 'appstore' | 'direct' | 'testflight') => {
    setDownloadStarted(true);
    
    // Simulation du téléchargement
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      setInstallProgress(Math.min(progress, 100));
      
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          // Redirection vers le lien approprié
          let url = '';
          if (deviceDetected === 'ios') {
            switch (type) {
              case 'appstore':
                url = downloadLinks.ios.appStore;
                break;
              case 'direct':
                url = downloadLinks.ios.directDownload;
                break;
              case 'testflight':
                url = downloadLinks.ios.testFlight;
                break;
            }
          } else {
            url = downloadLinks.android.playStore;
          }
          
          window.open(url, '_blank');
        }, 1000);
      }
    }, 200);
  };

  const generateQRCode = () => {
    const qrData = deviceDetected === 'ios' 
      ? downloadLinks.ios.appStore 
      : downloadLinks.android.playStore;
    
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrData)}`;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'banking': return 'bg-blue-100 text-blue-800';
      case 'security': return 'bg-red-100 text-red-800';
      case 'islamic': return 'bg-green-100 text-green-800';
      case 'premium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center"
            >
              <Smartphone className="h-8 w-8 text-white" />
            </motion.div>
            <h1 className="text-4xl font-bold text-gray-900">CED Bank Mobile</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Téléchargez l'application CED Bank International - La première banque digitale islamique 0% intérêts
          </p>
          <div className="flex justify-center gap-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Shield className="h-3 w-3 mr-1" />
              100% Sécurisé
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Star className="h-3 w-3 mr-1" />
              Note {appSpecs.rating}/5
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              <Download className="h-3 w-3 mr-1" />
              {appSpecs.downloads} téléchargements
            </Badge>
          </div>
        </motion.div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          
          {/* Download Card */}
          <Card className="bg-white/80 backdrop-blur border-0 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Download className="h-6 w-6 text-blue-600" />
                Téléchargement {deviceDetected === 'ios' ? 'iPhone 15 Pro Max' : 'Android'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Device Info */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium">Appareil détecté:</span>
                  <div className="flex items-center gap-2">
                    {deviceDetected === 'ios' ? (
                      <>
                        <Apple className="h-5 w-5" />
                        <span>iPhone 15 Pro Max</span>
                      </>
                    ) : (
                      <>
                        <Smartphone className="h-5 w-5" />
                        <span>Android</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Version:</span>
                    <p className="font-medium">{appSpecs.version}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Taille:</span>
                    <p className="font-medium">{appSpecs.size}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Requis:</span>
                    <p className="font-medium">
                      {deviceDetected === 'ios' ? appSpecs.minVersion.ios : appSpecs.minVersion.android}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-600">Langues:</span>
                    <p className="font-medium">{appSpecs.languages.length} langues</p>
                  </div>
                </div>
              </div>

              {/* Download Progress */}
              <AnimatePresence>
                {downloadStarted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-blue-50 rounded-xl p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Download className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">Téléchargement en cours...</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <motion.div
                        className="bg-blue-600 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${installProgress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <p className="text-sm text-blue-600">{Math.round(installProgress)}% terminé</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Download Buttons */}
              <div className="space-y-3">
                {deviceDetected === 'ios' ? (
                  <>
                    <Button 
                      onClick={() => handleDownload('appstore')}
                      className="w-full bg-black text-white hover:bg-gray-800 h-14 text-lg"
                      disabled={downloadStarted}
                    >
                      <SiAppstore className="h-6 w-6 mr-3" />
                      Télécharger sur App Store
                    </Button>
                    
                    <Button 
                      onClick={() => handleDownload('testflight')}
                      variant="outline"
                      className="w-full h-12"
                      disabled={downloadStarted}
                    >
                      <Apple className="h-5 w-5 mr-2" />
                      Version Beta (TestFlight)
                    </Button>
                    
                    <Button 
                      onClick={() => handleDownload('direct')}
                      variant="outline"
                      className="w-full h-12"
                      disabled={downloadStarted}
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Installation Directe (Enterprise)
                    </Button>
                  </>
                ) : (
                  <Button 
                    onClick={() => handleDownload('appstore')}
                    className="w-full bg-green-600 text-white hover:bg-green-700 h-14 text-lg"
                    disabled={downloadStarted}
                  >
                    <Download className="h-6 w-6 mr-3" />
                    Télécharger sur Google Play
                  </Button>
                )}
              </div>

              {/* Instructions */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <h3 className="font-medium text-yellow-800 mb-2">Instructions iPhone 15 Pro Max:</h3>
                <ol className="text-sm text-yellow-700 space-y-1">
                  <li>1. Appuyez sur "Télécharger sur App Store"</li>
                  <li>2. Authentifiez-vous avec Face ID ou Touch ID</li>
                  <li>3. L'installation se lance automatiquement</li>
                  <li>4. Ouvrez CED Bank depuis votre écran d'accueil</li>
                  <li>5. Configurez votre compte avec vos identifiants</li>
                </ol>
              </div>

            </CardContent>
          </Card>

          {/* QR Code & Features */}
          <div className="space-y-6">
            
            {/* QR Code */}
            <Card className="bg-white/80 backdrop-blur">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <QrCode className="h-5 w-5" />
                  Scanner pour télécharger
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="inline-block p-4 bg-white rounded-xl shadow-lg">
                  <img 
                    src={generateQRCode()} 
                    alt="QR Code téléchargement CED Bank"
                    className="w-48 h-48 mx-auto"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Scannez ce QR code avec votre iPhone pour télécharger directement
                </p>
              </CardContent>
            </Card>

            {/* App Preview */}
            <Card className="bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle>Aperçu de l'application</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <CreditCard className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="font-medium">CED Bank</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="flex items-center gap-1 text-xs">
                        <Signal className="h-3 w-3" />
                        <Wifi className="h-3 w-3" />
                        <Battery className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Solde principal</span>
                        <Eye className="h-4 w-4" />
                      </div>
                      <p className="text-2xl font-bold">€ 24,500.00</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/20 rounded-lg p-3 text-center">
                        <CreditCard className="h-5 w-5 mx-auto mb-1" />
                        <p className="text-xs">Cartes</p>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3 text-center">
                        <Globe className="h-5 w-5 mx-auto mb-1" />
                        <p className="text-xs">Devises</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-white/60 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-center">Fonctionnalités de l'application</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {appFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="text-center p-4 rounded-xl bg-white border hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-medium mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                    <Badge variant="outline" className={getCategoryColor(feature.category)}>
                      {feature.category}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Support Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
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