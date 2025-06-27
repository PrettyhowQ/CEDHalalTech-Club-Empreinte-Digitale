import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import {
  CreditCard,
  Smartphone,
  Download,
  Shield,
  Fingerprint,
  QrCode,
  Send,
  Receipt,
  Bell,
  Settings,
  Eye,
  EyeOff,
  ArrowUpRight,
  ArrowDownLeft,
  Apple,
  Globe,
  Lock,
  Star,
  Users,
  TrendingUp,
  Wallet,

  Target,
  Zap
} from 'lucide-react';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';

interface AppFeature {
  icon: any;
  title: string;
  description: string;
  category: 'security' | 'banking' | 'islamic' | 'convenience';
}

export default function AppBancaireMobile() {
  const [showBalance, setShowBalance] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [downloadStarted, setDownloadStarted] = useState(false);

  const appFeatures: AppFeature[] = [
    {
      icon: Fingerprint,
      title: 'Authentification Biométrique',
      description: 'Connexion sécurisée par empreinte digitale et reconnaissance faciale',
      category: 'security'
    },
    {
      icon: QrCode,
      title: 'Paiements QR Code',
      description: 'Payez instantanément en scannant un code QR partout dans le monde',
      category: 'convenience'
    },
    {
      icon: Globe,
      title: 'Multi-Devises Temps Réel',
      description: 'CHF, AED, USD, EUR avec taux de change en temps réel',
      category: 'banking'
    },
    {
      icon: Shield,
      title: 'Finance Islamique Certifiée',
      description: 'Services conformes à la Charia validés par des experts religieux',
      category: 'islamic'
    },
    {
      icon: Bell,
      title: 'Mode Prière Automatique',
      description: 'Pause intelligente des services durant les 5 prières quotidiennes',
      category: 'islamic'
    },
    {
      icon: Zap,
      title: 'Virements Instantanés',
      description: 'Transferts immédiats 24h/24 sans frais entre comptes CED',
      category: 'banking'
    },
    {
      icon: Bell,
      title: 'Notifications Intelligentes',
      description: 'Alertes personnalisées pour chaque transaction et opportunité',
      category: 'convenience'
    },
    {
      icon: Star,
      title: 'Investissements Sukuk',
      description: 'Obligations islamiques technologiques avec rendements éthiques',
      category: 'islamic'
    },
    {
      icon: Lock,
      title: 'Chiffrement E2E',
      description: 'Toutes vos données protégées par un chiffrement militaire',
      category: 'security'
    }
  ];

  const downloadStats = {
    totalDownloads: 156780,
    rating: 4.9,
    reviews: 12430,
    countries: 67
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'security': return '🔐';
      case 'banking': return '💳';
      case 'islamic': return '☪️';
      case 'convenience': return '⚡';
      default: return '🏦';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Hero Section App Mobile */}
        <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Smartphone className="h-8 w-8" />
                  <Badge className="bg-white/20 text-white border-white/30">
                    Nouveauté 2025
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  CED Bank Mobile
                </h1>
                <p className="text-xl text-green-100 mb-2">
                  L'application bancaire révolutionnaire
                </p>
                <p className="text-lg text-blue-100 mb-6">
                  Finance islamique • 0% intérêts • Yakoubi Yamina
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">{downloadStats.totalDownloads.toLocaleString()}</div>
                    <div className="text-sm text-green-100">Téléchargements</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">{downloadStats.rating}/5</div>
                    <div className="text-sm text-green-100">Note moyenne</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-black text-white hover:bg-gray-800 flex items-center gap-2 px-6 py-3"
                    onClick={() => setDownloadStarted(true)}
                  >
                    <SiAppstore className="h-5 w-5" />
                    {downloadStarted ? 'Téléchargement...' : 'Télécharger iOS'}
                  </Button>
                  <Button 
                    className="bg-green-600 text-white hover:bg-green-700 flex items-center gap-2 px-6 py-3"
                    onClick={() => setDownloadStarted(true)}
                  >
                    <SiGoogleplay className="h-5 w-5" />
                    {downloadStarted ? 'Téléchargement...' : 'Télécharger Android'}
                  </Button>
                </div>
                
                <div className="mt-4 text-sm text-green-100">
                  <p>✨ Gratuit • Compatible iOS 15+ et Android 10+</p>
                  <p>🌍 Disponible dans 67 pays • Mode hors ligne</p>
                </div>
              </div>

              {/* Mockup téléphone */}
              <div className="relative">
                <div className="w-64 h-[500px] mx-auto bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 rounded-[2.5rem] relative overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-full"></div>
                    
                    {/* Interface app */}
                    <div className="pt-10 p-4 text-white">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-lg font-bold">CED Bank</h3>
                          <p className="text-sm opacity-80">Bonjour Yamina</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Bell className="h-5 w-5" />
                          <Settings className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="bg-white/20 rounded-xl p-4 mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm">Solde Total</span>
                          <Eye className="h-4 w-4" />
                        </div>
                        <div className="text-2xl font-bold">20,618 CHF</div>
                        <div className="text-sm opacity-80">+8.7% ce mois</div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-white/10 rounded-lg p-3 text-center">
                          <Send className="h-6 w-6 mx-auto mb-2" />
                          <div className="text-xs">Virer</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 text-center">
                          <QrCode className="h-6 w-6 mx-auto mb-2" />
                          <div className="text-xs">Scanner</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <ArrowDownLeft className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="text-xs font-medium">Formation IA</div>
                              <div className="text-xs opacity-70">+299 CHF</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                              <ArrowUpRight className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="text-xs font-medium">Sukuk Tech</div>
                              <div className="text-xs opacity-70">-1,500 CHF</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Éléments décoratifs */}
          <div className="absolute top-20 right-10 w-20 h-20 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/5 rounded-full"></div>
        </div>

        {/* Fonctionnalités de l'app */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Fonctionnalités Révolutionnaires
            </h2>
            <p className="text-lg text-gray-600">
              Une expérience bancaire mobile sans précédent avec respect des valeurs islamiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-gray-100">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="mb-2 text-2xl">{getCategoryIcon(feature.category)}</div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Section téléchargement avec SMS */}
        <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-green-50">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Recevez le lien par SMS
                </h3>
                <p className="text-gray-600 mb-6">
                  Entrez votre numéro de téléphone pour recevoir instantanément 
                  le lien de téléchargement de l'application CED Bank.
                </p>
                
                <div className="flex gap-4 mb-6">
                  <Input
                    type="tel"
                    placeholder="+33 6 12 34 56 78"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-1"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Send className="h-4 w-4 mr-2" />
                    Envoyer
                  </Button>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4 text-green-600" />
                    Sécurisé
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="h-4 w-4 text-blue-600" />
                    Instantané
                  </div>
                  <div className="flex items-center gap-1">
                    <Lock className="h-4 w-4 text-purple-600" />
                    Privé
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-green-600">{downloadStats.countries}</div>
                    <div className="text-sm text-gray-600">Pays</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-blue-600">{downloadStats.reviews.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Avis clients</div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex justify-center items-center gap-1 mb-2">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 font-bold">{downloadStats.rating}/5</span>
                  </div>
                  <p className="text-sm text-gray-600">Application la mieux notée</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sécurité et conformité */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="font-bold text-lg mb-2">Sécurité Bancaire</h3>
              <p className="text-sm text-gray-600">
                Certifiée par les autorités suisses et émiraties
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6 text-center">
              <Globe className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-bold text-lg mb-2">Conformité Charia</h3>
              <p className="text-sm text-gray-600">
                Validée par le conseil de supervision islamique
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardContent className="p-6 text-center">
              <Lock className="h-12 w-12 mx-auto mb-4 text-purple-600" />
              <h3 className="font-bold text-lg mb-2">Protection Données</h3>
              <p className="text-sm text-gray-600">
                RGPD compliant avec chiffrement de niveau militaire
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to action final */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Rejoignez la Révolution Bancaire
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Plus de 156,000 utilisateurs nous font déjà confiance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Download className="h-5 w-5 mr-2" />
              Télécharger Maintenant
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              En Savoir Plus
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}