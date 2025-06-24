import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Smartphone,
  Download,
  CreditCard,
  FileText,
  Shield,
  Car,
  Home,
  Building2,
  Heart,
  Calendar,
  Bell,
  Settings,
  Lock,
  Wifi,
  Battery,
  Signal,
  QrCode,
  Camera,
  Fingerprint,
  CheckCircle,
  Star,
  Crown,
  Zap,
  Globe,
  Users as Family,
  Gift
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CEDFooter } from './CEDFooter';

interface MobileApp {
  id: string;
  name: string;
  category: 'banking' | 'payroll' | 'insurance' | 'training' | 'health' | 'logistics' | 'productivity';
  description: string;
  icon: any;
  features: string[];
  downloadSize: string;
  version: string;
  rating: number;
  downloads: number;
  offlineCapable: boolean;
  securityLevel: 'high' | 'maximum';
  biometricAuth: boolean;
  familyAccess: boolean;
  employeeOnly: boolean;
}

interface PhoneSpecification {
  brand: string;
  model: string;
  storage: string;
  ram: string;
  processor: string;
  camera: string;
  battery: string;
  display: string;
  security: string[];
  connectivity: string[];
  price: number;
  included: string[];
}

const professionalApps: MobileApp[] = [
  {
    id: 'ced-bank-mobile',
    name: 'CED Bank Mobile',
    category: 'banking',
    description: 'Accès complet aux services bancaires halal CED Bank avec gestion de comptes professionnels et personnels',
    icon: Building2,
    features: [
      'Consultation soldes temps réel',
      'Virements internationaux instantanés',
      'Gestion cartes et limites',
      'Investissements Sharia conformes',
      'Notifications sécurisées',
      'Support multidevises'
    ],
    downloadSize: '89 MB',
    version: '3.2.1',
    rating: 4.9,
    downloads: 50000,
    offlineCapable: true,
    securityLevel: 'maximum',
    biometricAuth: true,
    familyAccess: false,
    employeeOnly: true
  },
  {
    id: 'payslip-pro',
    name: 'Fiches de Paie CED',
    category: 'payroll',
    description: 'Réception et gestion des fiches de paie suisses avec calculs automatiques et archivage sécurisé',
    icon: FileText,
    features: [
      'Réception automatique fiches de paie',
      'Calculs conformes loi suisse',
      'Archivage sécurisé 10 ans',
      'Export PDF et Excel',
      'Notifications nouvelles fiches',
      'Historique complet'
    ],
    downloadSize: '45 MB',
    version: '2.1.8',
    rating: 4.8,
    downloads: 12000,
    offlineCapable: true,
    securityLevel: 'high',
    biometricAuth: true,
    familyAccess: false,
    employeeOnly: true
  },
  {
    id: 'al-aman-insurance',
    name: 'Al-Aman Takaful',
    category: 'insurance',
    description: 'Gestion complète des assurances Takaful : auto, habitation, santé avec sinistres en ligne',
    icon: Shield,
    features: [
      'Polices d\'assurance digitales',
      'Déclaration sinistres photo',
      'Suivi remboursements temps réel',
      'Assistance d\'urgence 24/7',
      'Documents dématérialisés',
      'Renouvellement automatique'
    ],
    downloadSize: '67 MB',
    version: '1.9.3',
    rating: 4.7,
    downloads: 8500,
    offlineCapable: true,
    securityLevel: 'maximum',
    biometricAuth: true,
    familyAccess: true,
    employeeOnly: false
  },
  {
    id: 'souheila-health',
    name: 'Souheila Santé Pro',
    category: 'health',
    description: 'Application santé complète de Souheila Yakoubi Ozel avec suivi familial et nutrition halal',
    icon: Heart,
    features: [
      'Consultations vidéo personnalisées',
      'Plans nutrition halal famille',
      'Suivi santé temps réel',
      'Rappels médicaments et RDV',
      'Analyses de laboratoire',
      'Coaching bien-être'
    ],
    downloadSize: '123 MB',
    version: '4.5.2',
    rating: 5.0,
    downloads: 75000,
    offlineCapable: false,
    securityLevel: 'maximum',
    biometricAuth: true,
    familyAccess: true,
    employeeOnly: false
  },
  {
    id: 'logistics-pro',
    name: 'CED Logistics Pro',
    category: 'logistics',
    description: 'Gestion logistique avancée avec tracking GPS, scanner QR et optimisation itinéraires',
    icon: QrCode,
    features: [
      'Scanner QR codes avancé',
      'Tracking GPS temps réel',
      'Optimisation itinéraires',
      'Gestion stocks mobile',
      'Rapports automatiques',
      'Communication équipe'
    ],
    downloadSize: '78 MB',
    version: '2.8.1',
    rating: 4.6,
    downloads: 3200,
    offlineCapable: true,
    securityLevel: 'high',
    biometricAuth: true,
    familyAccess: false,
    employeeOnly: true
  },
  {
    id: 'ced-training',
    name: 'Formation CED',
    category: 'training',
    description: 'Plateforme de formation continue avec cours vidéo, certifications et suivi progression',
    icon: Star,
    features: [
      'Cours vidéo HD hors ligne',
      'Exercices interactifs',
      'Examens et certifications',
      'Suivi progression détaillé',
      'Forums discussion',
      'Calendrier formations'
    ],
    downloadSize: '156 MB',
    version: '1.4.7',
    rating: 4.8,
    downloads: 15600,
    offlineCapable: true,
    securityLevel: 'high',
    biometricAuth: false,
    familyAccess: true,
    employeeOnly: false
  }
];

const phoneSpecifications: PhoneSpecification[] = [
  {
    brand: 'Apple',
    model: 'iPhone 15 Pro Max',
    storage: '1TB',
    ram: '8GB',
    processor: 'A17 Pro Bionic',
    camera: '48MP ProRAW + LiDAR',
    battery: '4441 mAh (29h vidéo)',
    display: '6.7" Super Retina XDR ProMotion',
    security: ['Face ID', 'Touch ID', 'Secure Enclave', 'Cryptage AES-256'],
    connectivity: ['5G', 'WiFi 6E', 'Bluetooth 5.3', 'NFC', 'USB-C'],
    price: 1899,
    included: [
      'Étui cuir premium CED',
      'Chargeur MagSafe sans fil',
      'Écouteurs AirPods Pro 2',
      'Protection écran saphir',
      'Assurance casse 3 ans',
      'Support technique 24/7'
    ]
  }
];

export function MobileProfessionalSuite() {
  const [selectedApp, setSelectedApp] = useState<MobileApp | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'banking': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'payroll': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'insurance': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'training': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'health': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      case 'logistics': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
      case 'productivity': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getSecurityColor = (level: string) => {
    switch (level) {
      case 'maximum': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const filteredApps = selectedCategory === 'all' 
    ? professionalApps 
    : professionalApps.filter(app => app.category === selectedCategory);

  const downloadApp = (appId: string) => {
    const app = professionalApps.find(a => a.id === appId);
    alert(`Installation ${app?.name} !\n\n📱 Téléchargement en cours...\n✅ Installation automatique\n🔐 Configuration sécurité\n📋 Synchronisation données employé\n\nL'application sera prête en 2 minutes.`);
  };

  const setupPhone = () => {
    alert(`Configuration iPhone Pro Max 1TB !\n\n📱 Préparation du dispositif professionnel\n📲 Installation applications CED\n🔐 Configuration sécurité maximale\n📧 Synchronisation comptes employé\n📋 Transfert fiches de paie et assurances\n🎓 Accès formations personnalisées\n\n✅ Téléphone prêt pour remise employé`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Suite Mobile Professionnelle
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            iPhone Pro Max 1TB avec écosystème CED intégré
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary" className="bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200">
              📱 iPhone Pro Max 1TB
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              🔐 Sécurité Maximale
            </Badge>
            <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              📲 Apps Professionnelles
            </Badge>
          </div>
        </motion.div>

        {/* Spécifications iPhone */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {phoneSpecifications.map((phone, index) => (
            <Card key={index} className="border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/50 dark:to-blue-900/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-900/30">
                      <Smartphone className="h-8 w-8 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-slate-800 dark:text-slate-200">
                        {phone.brand} {phone.model}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        Configuration professionnelle CED - {phone.storage}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200 text-lg px-4 py-2">
                    CHF {phone.price.toLocaleString()}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Performance
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-500">Processeur:</span>
                        <p className="font-semibold">{phone.processor}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">RAM:</span>
                        <p className="font-semibold">{phone.ram}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Stockage:</span>
                        <p className="font-semibold text-blue-600">{phone.storage}</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Lock className="h-4 w-4" />
                      Sécurité
                    </h4>
                    <div className="space-y-1 text-sm">
                      {phone.security.map((security, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>{security}</span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Gift className="h-4 w-4" />
                      Inclus
                    </h4>
                    <div className="space-y-1 text-sm">
                      {phone.included.slice(0, 4).map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-blue-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={setupPhone}
                    className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-3 text-lg"
                  >
                    <Settings className="h-5 w-5 mr-2" />
                    Configurer pour Employé
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-3 text-lg"
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    Fiche Technique Complète
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.section>

        {/* Filtres Applications */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {['all', 'banking', 'payroll', 'insurance', 'health', 'logistics', 'training'].map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-slate-600 hover:bg-slate-700" : ""}
            >
              {category === 'all' ? 'Toutes' : 
               category === 'banking' ? 'Banking' :
               category === 'payroll' ? 'Paie' :
               category === 'insurance' ? 'Assurance' :
               category === 'health' ? 'Santé' :
               category === 'logistics' ? 'Logistique' :
               'Formation'}
            </Button>
          ))}
        </motion.div>

        {/* Applications Professionnelles */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        >
          {filteredApps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-slate-200 dark:hover:border-slate-700">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-slate-100 to-blue-100 dark:from-slate-900 dark:to-blue-900">
                        <app.icon className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg leading-tight">
                          {app.name}
                        </CardTitle>
                        <div className="flex gap-2 mt-2">
                          <Badge className={getCategoryColor(app.category)} variant="outline">
                            {app.category}
                          </Badge>
                          <Badge className={getSecurityColor(app.securityLevel)} variant="outline">
                            {app.securityLevel}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-semibold">{app.rating}</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {app.downloads.toLocaleString()} téléchargements
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {app.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Taille:</span>
                      <p className="font-semibold">{app.downloadSize}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Version:</span>
                      <p className="font-semibold">{app.version}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Fonctionnalités principales:</h4>
                    <div className="space-y-1">
                      {app.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    {app.offlineCapable && (
                      <Badge variant="outline" className="text-green-600">
                        <Wifi className="h-3 w-3 mr-1" />
                        Hors ligne
                      </Badge>
                    )}
                    {app.biometricAuth && (
                      <Badge variant="outline" className="text-purple-600">
                        <Fingerprint className="h-3 w-3 mr-1" />
                        Biométrie
                      </Badge>
                    )}
                    {app.familyAccess && (
                      <Badge variant="outline" className="text-blue-600">
                        <Heart className="h-3 w-3 mr-1" />
                        Famille
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => setSelectedApp(app)}
                      className="flex-1"
                    >
                      <Smartphone className="h-4 w-4 mr-1" />
                      Détails
                    </Button>
                    <Button 
                      size="sm"
                      onClick={() => downloadApp(app.id)}
                      className="flex-1 bg-slate-600 hover:bg-slate-700"
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

        {/* Avantages Suite Mobile */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Crown className="h-6 w-6 text-yellow-600" />
                Suite Mobile Professionnelle CED
              </CardTitle>
              <CardDescription>
                Écosystème mobile intégré pour productivité maximale
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="p-4 rounded-full bg-slate-100 dark:bg-slate-900 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Smartphone className="h-8 w-8 text-slate-600 dark:text-slate-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Tout-en-Un Mobile</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Toutes les fonctions professionnelles dans un seul appareil
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Sécurité Maximale</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Cryptage AES-256 et authentification biométrique
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 rounded-full bg-indigo-100 dark:bg-indigo-900 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Synchronisation Cloud</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Données synchronisées en temps réel sur tous appareils
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4 text-center">
                  📱 Applications Intégrées Employés CED
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-slate-600" />
                      <span className="font-medium">Fonctions Bancaires</span>
                    </div>
                    <ul className="ml-6 space-y-1 text-gray-600 dark:text-gray-300">
                      <li>• Accès comptes CED Bank complets</li>
                      <li>• Virements automatiques salaires</li>
                      <li>• Gestion cartes et limites</li>
                      <li>• Investissements Sharia conformes</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-green-600" />
                      <span className="font-medium">Documents & Assurances</span>
                    </div>
                    <ul className="ml-6 space-y-1 text-gray-600 dark:text-gray-300">
                      <li>• Fiches de paie téléchargeables</li>
                      <li>• Polices Al-Aman accessibles</li>
                      <li>• Assurances auto, maison, santé</li>
                      <li>• Déclarations sinistres simplifiées</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Modal Détails Application */}
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
              className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <selectedApp.icon className="h-6 w-6 text-slate-600" />
                  {selectedApp.name}
                </h3>
                <Button variant="ghost" size="sm" onClick={() => setSelectedApp(null)}>
                  ✕
                </Button>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-3">
                  <Badge className={getCategoryColor(selectedApp.category)} variant="outline">
                    {selectedApp.category}
                  </Badge>
                  <Badge className={getSecurityColor(selectedApp.securityLevel)} variant="outline">
                    Sécurité {selectedApp.securityLevel}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-semibold">{selectedApp.rating}</span>
                  </div>
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {selectedApp.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">📱 Informations App</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Taille:</span>
                        <span className="font-semibold">{selectedApp.downloadSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Version:</span>
                        <span className="font-semibold">{selectedApp.version}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Téléchargements:</span>
                        <span className="font-semibold">{selectedApp.downloads.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Hors ligne:</span>
                        <span className="font-semibold">{selectedApp.offlineCapable ? 'Oui' : 'Non'}</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">🔐 Sécurité & Accès</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        {selectedApp.biometricAuth ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <span className="h-4 w-4" />
                        )}
                        <span>Authentification biométrique</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {selectedApp.familyAccess ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <span className="h-4 w-4" />
                        )}
                        <span>Accès famille</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {selectedApp.employeeOnly ? (
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                        ) : (
                          <span className="h-4 w-4" />
                        )}
                        <span>Réservé employés CED</span>
                      </div>
                    </div>
                  </Card>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">✨ Fonctionnalités Complètes</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedApp.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    className="flex-1 bg-slate-600 hover:bg-slate-700"
                    onClick={() => downloadApp(selectedApp.id)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Installer Maintenant
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Smartphone className="h-4 w-4 mr-2" />
                    Guide Utilisation
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
      
      <CEDFooter />
    </div>
  );
}