import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Smartphone,
  Download,
  Star,
  Shield,
  Zap,
  Globe,
  Bell,
  Fingerprint,
  Wifi,
  WifiOff,
  QrCode,
  Camera,
  MapPin,
  Calendar,
  CreditCard,
  HeadphonesIcon,
  Settings,
  Users,
  TrendingUp,
  Clock,
  Eye,
  Play,
  Pause,
  Volume2,
  Languages,
  Compass,
  BookOpen
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CEDFooter } from './CEDFooter';

interface MobileApp {
  id: string;
  name: string;
  category: 'banking' | 'insurance' | 'education' | 'spiritual' | 'business';
  description: string;
  icon: string;
  version: string;
  size: string;
  rating: number;
  downloads: number;
  platforms: ('ios' | 'android')[];
  features: string[];
  screenshots: string[];
  releaseDate: Date;
  updateDate: Date;
  isNative: boolean;
  offlineCapable: boolean;
  biometricAuth: boolean;
  pushNotifications: boolean;
  languages: string[];
  minOSVersion: {
    ios?: string;
    android?: string;
  };
}

interface AppFeature {
  id: string;
  name: string;
  description: string;
  icon: any;
  category: 'security' | 'offline' | 'sync' | 'biometric' | 'notification' | 'spiritual';
  isImplemented: boolean;
}

const mobileApps: MobileApp[] = [
  {
    id: 'ced-bank-native',
    name: 'CED Bank Mobile',
    category: 'banking',
    description: 'Application bancaire native iOS/Android avec authentification biométrique et synchronisation temps réel',
    icon: '/api/placeholder/128/128',
    version: '3.4.0',
    size: '125 MB',
    rating: 4.9,
    downloads: 52847,
    platforms: ['ios', 'android'],
    features: [
      'Face ID / Touch ID / Empreinte digitale',
      'Virements SWIFT instantanés',
      'Cartes virtuelles temps réel',
      'Notifications push chiffrées',
      'Mode hors ligne complet',
      'Géolocalisation sécurisée',
      'Scanner QR codes',
      'Support 78 langues',
      'Mode sombre adaptatif',
      'Widget iOS/Android'
    ],
    screenshots: ['/api/placeholder/300/600', '/api/placeholder/300/600', '/api/placeholder/300/600'],
    releaseDate: new Date('2024-09-15'),
    updateDate: new Date('2024-12-20'),
    isNative: true,
    offlineCapable: true,
    biometricAuth: true,
    pushNotifications: true,
    languages: ['fr', 'ar', 'en', 'de', 'es', 'zh'],
    minOSVersion: { ios: '16.0', android: '10.0' }
  },
  {
    id: 'al-aman-takaful-native',
    name: 'Al-Aman CED Takaful',
    category: 'insurance',
    description: 'Assurance Takaful mobile avec déclarations instantanées et support client 24/7',
    icon: '/api/placeholder/128/128',
    version: '2.1.5',
    size: '89 MB',
    rating: 4.7,
    downloads: 34521,
    platforms: ['ios', 'android'],
    features: [
      'Déclaration sinistre photo/vidéo',
      'Géolocalisation accident',
      'Chat expert Takaful',
      'Documents numériques',
      'Estimation dommages IA',
      'Réseau partenaires',
      'Assistance routière GPS',
      'Paiements mobiles',
      'Mode urgence SOS',
      'Historique complet'
    ],
    screenshots: ['/api/placeholder/300/600', '/api/placeholder/300/600', '/api/placeholder/300/600'],
    releaseDate: new Date('2024-10-01'),
    updateDate: new Date('2024-12-18'),
    isNative: true,
    offlineCapable: true,
    biometricAuth: true,
    pushNotifications: true,
    languages: ['fr', 'ar', 'en'],
    minOSVersion: { ios: '15.0', android: '9.0' }
  },
  {
    id: 'citadelle-musulman-native',
    name: 'La Citadelle du Musulman',
    category: 'spiritual',
    description: 'Compagnon spirituel avec Coran audio, prières, et boussole Qibla avancée',
    icon: '/api/placeholder/128/128',
    version: '4.2.1',
    size: '156 MB',
    rating: 4.8,
    downloads: 87456,
    platforms: ['ios', 'android'],
    features: [
      'Coran complet audio offline',
      '15+ récitateurs renommés',
      'Boussole Qibla GPS précise',
      'Horaires prières automatiques',
      'Invocations authentifiées',
      'Calendrier hégirien',
      'Mode nuit spirituel',
      'Rappels personnalisés',
      'Compteur Tasbih',
      'Noms d\'Allah 99'
    ],
    screenshots: ['/api/placeholder/300/600', '/api/placeholder/300/600', '/api/placeholder/300/600'],
    releaseDate: new Date('2024-08-20'),
    updateDate: new Date('2024-12-22'),
    isNative: true,
    offlineCapable: true,
    biometricAuth: false,
    pushNotifications: true,
    languages: ['ar', 'fr', 'en', 'ur', 'tr', 'id'],
    minOSVersion: { ios: '14.0', android: '8.0' }
  },
  {
    id: 'super-iarp-mobile',
    name: 'Super IARP Pro Mobile',
    category: 'education',
    description: 'Assistant IA éducatif avec support vocal avancé et apprentissage adaptatif',
    icon: '/api/placeholder/128/128',
    version: '1.8.3',
    size: '67 MB',
    rating: 4.6,
    downloads: 45123,
    platforms: ['ios', 'android'],
    features: [
      'Chat vocal multilingue',
      'Reconnaissance image OCR',
      'Mode hors ligne limité',
      'Synthèse vocale naturelle',
      'Apprentissage adaptatif',
      'Partage instantané',
      'Export formats multiples',
      'Thèmes personnalisables',
      'Raccourcis Siri/Assistant',
      'Widget réponses rapides'
    ],
    screenshots: ['/api/placeholder/300/600', '/api/placeholder/300/600', '/api/placeholder/300/600'],
    releaseDate: new Date('2024-11-10'),
    updateDate: new Date('2024-12-15'),
    isNative: true,
    offlineCapable: false,
    biometricAuth: true,
    pushNotifications: true,
    languages: ['fr', 'en', 'ar', 'es', 'de', 'zh', 'ja'],
    minOSVersion: { ios: '16.0', android: '11.0' }
  },
  {
    id: 'ced-business-suite',
    name: 'CED Business Suite',
    category: 'business',
    description: 'Suite professionnelle complète pour gestion équipe, paie, et logistique mobile',
    icon: '/api/placeholder/128/128',
    version: '2.0.7',
    size: '198 MB',
    rating: 4.5,
    downloads: 12678,
    platforms: ['ios', 'android'],
    features: [
      'Gestion équipe temps réel',
      'Fiches de paie sécurisées',
      'Planning automatisé',
      'Géolocalisation employés',
      'Rapports dynamiques',
      'Chat équipe chiffré',
      'Approbations mobiles',
      'Scanner documents',
      'Signature électronique',
      'Dashboard direction'
    ],
    screenshots: ['/api/placeholder/300/600', '/api/placeholder/300/600', '/api/placeholder/300/600'],
    releaseDate: new Date('2024-12-01'),
    updateDate: new Date('2024-12-23'),
    isNative: true,
    offlineCapable: true,
    biometricAuth: true,
    pushNotifications: true,
    languages: ['fr', 'en', 'ar'],
    minOSVersion: { ios: '15.0', android: '10.0' }
  }
];

const appFeatures: AppFeature[] = [
  {
    id: 'biometric-auth',
    name: 'Authentification Biométrique',
    description: 'Face ID, Touch ID, empreinte digitale selon l\'appareil',
    icon: Fingerprint,
    category: 'biometric',
    isImplemented: true
  },
  {
    id: 'offline-sync',
    name: 'Synchronisation Hors Ligne',
    description: 'Données accessibles sans connexion, sync automatique',
    icon: WifiOff,
    category: 'offline',
    isImplemented: true
  },
  {
    id: 'push-notifications',
    name: 'Notifications Push Chiffrées',
    description: 'Alertes sécurisées temps réel avec chiffrement E2E',
    icon: Bell,
    category: 'notification',
    isImplemented: true
  },
  {
    id: 'real-time-sync',
    name: 'Synchronisation Temps Réel',
    description: 'Mise à jour instantanée sur tous les appareils',
    icon: Zap,
    category: 'sync',
    isImplemented: true
  },
  {
    id: 'advanced-security',
    name: 'Sécurité Bancaire Avancée',
    description: 'Cryptage AES-256, détection fraude, session timeout',
    icon: Shield,
    category: 'security',
    isImplemented: true
  },
  {
    id: 'prayer-integration',
    name: 'Intégration Spirituelle',
    description: 'Pause automatique pendant prières, boussole Qibla',
    icon: Compass,
    category: 'spiritual',
    isImplemented: true
  }
];

export function MobileNativeApps() {
  const [selectedApp, setSelectedApp] = useState<MobileApp | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'banking': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'insurance': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'education': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'spiritual': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
      case 'business': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const filteredApps = selectedCategory === 'all' 
    ? mobileApps 
    : mobileApps.filter(app => app.category === selectedCategory);

  const totalDownloads = mobileApps.reduce((acc, app) => acc + app.downloads, 0);
  const averageRating = mobileApps.reduce((acc, app) => acc + app.rating, 0) / mobileApps.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Applications Mobiles Natives CED
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Écosystème mobile complet iOS/Android avec fonctionnalités avancées
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Smartphone className="h-3 w-3 mr-1" />
              {mobileApps.length} Apps Natives
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              <Download className="h-3 w-3 mr-1" />
              {totalDownloads.toLocaleString()} Téléchargements
            </Badge>
            <Badge variant="secondary" className="bg-pink-100 text-pink-800">
              <Star className="h-3 w-3 mr-1" />
              {averageRating.toFixed(1)} Moyenne
            </Badge>
          </div>
        </motion.div>

        {/* Statistiques Globales */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="border-2 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-blue-800 dark:text-blue-200">
                <TrendingUp className="h-6 w-6" />
                Performance Écosystème Mobile
              </CardTitle>
              <CardDescription>
                Métriques en temps réel de toutes nos applications natives
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="p-4 bg-blue-50 dark:bg-blue-900/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {totalDownloads.toLocaleString()}
                    </div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Téléchargements Totaux</p>
                    <Progress value={85} className="mt-2" />
                  </div>
                </Card>

                <Card className="p-4 bg-purple-50 dark:bg-purple-900/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {averageRating.toFixed(1)}
                    </div>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Note Moyenne</p>
                    <div className="flex justify-center mt-2">
                      {[1,2,3,4,5].map(star => (
                        <Star key={star} className={`h-4 w-4 ${star <= averageRating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-green-50 dark:bg-green-900/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {mobileApps.filter(app => app.isNative).length}
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">Apps Natives</p>
                  </div>
                </Card>

                <Card className="p-4 bg-pink-50 dark:bg-pink-900/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 mb-2">78+</div>
                    <p className="text-sm text-pink-700 dark:text-pink-300">Langues Supportées</p>
                  </div>
                </Card>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Filtres */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {['all', 'banking', 'insurance', 'education', 'spiritual', 'business'].map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              {category === 'all' ? 'Toutes Apps' : 
               category === 'banking' ? 'Bancaire' :
               category === 'insurance' ? 'Assurance' :
               category === 'education' ? 'Éducation' :
               category === 'spiritual' ? 'Spirituel' :
               'Business'}
            </Button>
          ))}
        </motion.div>

        {/* Applications Mobiles */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        >
          {filteredApps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-700">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <img 
                      src={app.icon} 
                      alt={app.name}
                      className="w-16 h-16 rounded-xl object-cover border-2 border-gray-200 dark:border-gray-700"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg">{app.name}</h3>
                        <Badge className={getCategoryColor(app.category)} variant="outline">
                          {app.category}
                        </Badge>
                        {app.isNative && (
                          <Badge className="bg-green-100 text-green-800">Native</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{app.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="font-medium">{app.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="h-4 w-4 text-blue-500" />
                          <span>{app.downloads.toLocaleString()}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          v{app.version}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    {app.platforms.includes('ios') && (
                      <Badge variant="outline" className="text-xs bg-gray-100">
                        📱 iOS {app.minOSVersion.ios}+
                      </Badge>
                    )}
                    {app.platforms.includes('android') && (
                      <Badge variant="outline" className="text-xs bg-green-100">
                        🤖 Android {app.minOSVersion.android}+
                      </Badge>
                    )}
                    <Badge variant="outline" className="text-xs">
                      {app.size}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Fonctionnalités clés</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {app.features.slice(0, 6).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {app.features.length > 6 && (
                        <div className="text-sm text-gray-500">
                          +{app.features.length - 6} autres fonctionnalités
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    {app.biometricAuth && <Fingerprint className="h-4 w-4 text-green-600" title="Biométrie" />}
                    {app.offlineCapable && <WifiOff className="h-4 w-4 text-blue-600" title="Mode hors ligne" />}
                    {app.pushNotifications && <Bell className="h-4 w-4 text-orange-600" title="Notifications push" />}
                    <Languages className="h-4 w-4 text-purple-600" title={`${app.languages.length} langues`} />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => setSelectedApp(app)}
                      className="flex-1"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      Détails
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Installer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Fonctionnalités Techniques */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Settings className="h-6 w-6 text-blue-600" />
                Fonctionnalités Techniques Avancées
              </CardTitle>
              <CardDescription>
                Technologies natives intégrées dans tous nos apps
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {appFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card className={`h-full ${feature.isImplemented ? 'border-green-200 bg-green-50 dark:bg-green-900/10' : 'border-gray-200'}`}>
                      <CardContent className="p-6 text-center">
                        <div className={`p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center ${
                          feature.isImplemented ? 'bg-green-100 dark:bg-green-900/30' : 'bg-gray-100 dark:bg-gray-800'
                        }`}>
                          <feature.icon className={`h-8 w-8 ${feature.isImplemented ? 'text-green-600' : 'text-gray-500'}`} />
                        </div>
                        <h3 className="font-bold mb-2">{feature.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{feature.description}</p>
                        <Badge className={feature.isImplemented ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                          {feature.isImplemented ? 'Implémenté' : 'En développement'}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Store Links */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-8"
        >
          <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-blue-800 dark:text-blue-200">
                <Download className="h-6 w-6" />
                Télécharger sur les Stores
              </CardTitle>
              <CardDescription className="text-lg">
                Toutes nos applications sont disponibles sur iOS App Store et Google Play Store
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-4">iOS App Store</h3>
                  <div className="space-y-3">
                    {mobileApps.filter(app => app.platforms.includes('ios')).map((app) => (
                      <Button key={app.id} variant="outline" className="w-full justify-between">
                        <span>{app.name}</span>
                        <Badge>📱 iOS</Badge>
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-4">Google Play Store</h3>
                  <div className="space-y-3">
                    {mobileApps.filter(app => app.platforms.includes('android')).map((app) => (
                      <Button key={app.id} variant="outline" className="w-full justify-between">
                        <span>{app.name}</span>
                        <Badge>🤖 Android</Badge>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Toutes les applications sont certifiées et respectent les standards de sécurité les plus élevés
                </p>
                <div className="flex justify-center gap-4">
                  <Badge className="bg-blue-100 text-blue-800">✓ Apple App Store Review</Badge>
                  <Badge className="bg-green-100 text-green-800">✓ Google Play Protect</Badge>
                  <Badge className="bg-purple-100 text-purple-800">✓ Sécurité Bancaire</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Modal Détails App */}
        {selectedApp && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedApp(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img 
                    src={selectedApp.icon} 
                    alt={selectedApp.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold">{selectedApp.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{selectedApp.description}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setSelectedApp(null)}>
                  ✕
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3">📊 Informations</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Version:</span>
                      <span className="font-semibold">{selectedApp.version}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taille:</span>
                      <span className="font-semibold">{selectedApp.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Note:</span>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold">{selectedApp.rating}</span>
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Téléchargements:</span>
                      <span className="font-semibold">{selectedApp.downloads.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dernière MAJ:</span>
                      <span className="font-semibold">{selectedApp.updateDate.toLocaleDateString('fr-FR')}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-3">🔧 Compatibilité</h4>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {selectedApp.platforms.map((platform) => (
                        <Badge key={platform} variant="outline">
                          {platform === 'ios' ? '📱 iOS' : '🤖 Android'} {selectedApp.minOSVersion[platform]}+
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedApp.languages.map((lang) => (
                        <Badge key={lang} variant="secondary" className="text-xs">
                          {lang.toUpperCase()}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-bold mb-3">✨ Toutes les Fonctionnalités</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedApp.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6 mt-6 border-t">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger App
                </Button>
                <Button variant="outline" className="flex-1">
                  <QrCode className="h-4 w-4 mr-2" />
                  QR Code
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
      
      <CEDFooter />
    </div>
  );
}