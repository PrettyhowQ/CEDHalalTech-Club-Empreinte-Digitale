import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Smartphone,
  Download,
  Users,
  Star,
  Apple,
  PlayIcon,
  Shield,
  Zap,
  Globe,
  Calendar,
  MapPin,
  Book,
  CreditCard,
  Heart,
  Settings,
  TrendingUp,
  Eye,
  Clock
} from 'lucide-react';

// Données des applications natives CED
const nativeApps = [
  {
    id: 'ced-bank-mobile',
    name: 'CED Bank Mobile',
    category: 'Banking',
    description: 'Application bancaire islamique complète avec gestion multi-devises',
    icon: CreditCard,
    platforms: ['iOS', 'Android'],
    version: '3.2.1',
    downloads: 156000,
    rating: 4.9,
    features: ['Transferts SWIFT', 'Mode Prière', 'Qibla Compass', 'Zakat Calculator'],
    status: 'published',
    lastUpdate: '2025-01-15',
    size: '45.2 MB'
  },
  {
    id: 'institut-ced-academy',
    name: 'Institut CED Academy',
    category: 'Education',
    description: 'Plateforme éducative islamique avec formations certifiées Fiqh',
    icon: Book,
    platforms: ['iOS', 'Android'],
    version: '2.8.3',
    downloads: 89000,
    rating: 4.8,
    features: ['78 Langues', 'Certification Fiqh', 'Cours Interactifs', 'Progression Tracking'],
    status: 'published',
    lastUpdate: '2025-01-10',
    size: '67.8 MB'
  },
  {
    id: 'quran-reader-tajweed',
    name: 'Lecteur Coran Tajweed',
    category: 'Religious',
    description: 'Lecture du Saint Coran avec règles Tajweed et traductions',
    icon: Book,
    platforms: ['iOS', 'Android'],
    version: '1.9.2',
    downloads: 234000,
    rating: 4.9,
    features: ['Règles Tajweed', 'Audio Sync', 'Traductions', 'Mode Nuit'],
    status: 'published',
    lastUpdate: '2025-01-12',
    size: '125.4 MB'
  },
  {
    id: 'prayer-times-compass',
    name: 'Prayer Times & Compass',
    category: 'Religious',
    description: 'Horaires de prière précis et boussole Qibla GPS',
    icon: MapPin,
    platforms: ['iOS', 'Android'],
    version: '2.1.5',
    downloads: 187000,
    rating: 4.7,
    features: ['GPS Précis', 'Notifications', 'Calendrier Islamique', 'Adhan'],
    status: 'published',
    lastUpdate: '2025-01-08',
    size: '23.1 MB'
  },
  {
    id: 'al-aman-takaful',
    name: 'Al-Aman CED Takaful',
    category: 'Insurance',
    description: 'Assurance islamique conforme aux principes Takaful',
    icon: Shield,
    platforms: ['iOS', 'Android'],
    version: '1.4.7',
    downloads: 45000,
    rating: 4.6,
    features: ['Takaful Compliant', 'Claims Management', 'Family Coverage', 'Halal Investment'],
    status: 'published',
    lastUpdate: '2025-01-05',
    size: '34.7 MB'
  },
  {
    id: 'techforall-donations',
    name: 'TechForAll Donations',
    category: 'Social',
    description: 'Plateforme de dons technologiques et construction écologique',
    icon: Heart,
    platforms: ['iOS', 'Android'],
    version: '1.2.3',
    downloads: 28000,
    rating: 4.5,
    features: ['Eco Construction', 'Tech Donations', 'Impact Tracking', 'Community'],
    status: 'beta',
    lastUpdate: '2025-01-03',
    size: '56.3 MB'
  }
];

const appStats = {
  totalDownloads: 739000,
  averageRating: 4.7,
  totalApps: 6,
  publishedApps: 5,
  betaApps: 1,
  monthlyActiveUsers: 425000
};

const platformStats = {
  ios: { downloads: 445000, percentage: 60.2 },
  android: { downloads: 294000, percentage: 39.8 }
};

export function MobileNativeAppsSimple() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedApp, setSelectedApp] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'beta': return 'bg-orange-100 text-orange-800';
      case 'development': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Banking': return 'bg-blue-100 text-blue-800';
      case 'Education': return 'bg-purple-100 text-purple-800';
      case 'Religious': return 'bg-green-100 text-green-800';
      case 'Insurance': return 'bg-orange-100 text-orange-800';
      case 'Social': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Applications Natives CED
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Écosystème mobile complet pour services bancaires et éducatifs islamiques
          </p>
          <div className="flex justify-center gap-4">
            <Badge className="bg-purple-100 text-purple-800">
              <Smartphone className="h-3 w-3 mr-1" />
              {appStats.totalApps} Apps
            </Badge>
            <Badge className="bg-blue-100 text-blue-800">
              <Download className="h-3 w-3 mr-1" />
              {formatNumber(appStats.totalDownloads)} Téléchargements
            </Badge>
            <Badge className="bg-green-100 text-green-800">
              <Star className="h-3 w-3 mr-1" />
              {appStats.averageRating}/5 Note
            </Badge>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Vue d'ensemble
            </TabsTrigger>
            <TabsTrigger value="apps" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              Applications
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="deployment" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Déploiement
            </TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {formatNumber(appStats.totalDownloads)}
                  </div>
                  <p className="text-sm text-gray-600">Téléchargements Totaux</p>
                  <Progress value={85} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {formatNumber(appStats.monthlyActiveUsers)}
                  </div>
                  <p className="text-sm text-gray-600">Utilisateurs Actifs</p>
                  <Progress value={78} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {appStats.averageRating}
                  </div>
                  <p className="text-sm text-gray-600">Note Moyenne</p>
                  <Progress value={94} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">
                    {appStats.publishedApps}
                  </div>
                  <p className="text-sm text-gray-600">Apps Publiées</p>
                  <Progress value={83} className="mt-2" />
                </CardContent>
              </Card>
            </div>

            {/* Distribution par plateforme */}
            <Card>
              <CardHeader>
                <CardTitle>Distribution par Plateforme</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <Apple className="h-8 w-8 text-gray-800" />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">iOS App Store</span>
                        <span className="text-sm text-gray-600">{platformStats.ios.percentage}%</span>
                      </div>
                      <Progress value={platformStats.ios.percentage} className="mb-1" />
                      <p className="text-sm text-gray-500">{formatNumber(platformStats.ios.downloads)} téléchargements</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <PlayIcon className="h-8 w-8 text-green-600" />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Google Play Store</span>
                        <span className="text-sm text-gray-600">{platformStats.android.percentage}%</span>
                      </div>
                      <Progress value={platformStats.android.percentage} className="mb-1" />
                      <p className="text-sm text-gray-500">{formatNumber(platformStats.android.downloads)} téléchargements</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Applications */}
            <Card>
              <CardHeader>
                <CardTitle>Applications les Plus Populaires</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nativeApps.slice(0, 3).map((app) => (
                    <div key={app.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <app.icon className="h-10 w-10 text-blue-600" />
                        <div>
                          <p className="font-medium">{app.name}</p>
                          <p className="text-sm text-gray-600">{app.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600">{formatNumber(app.downloads)}</div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className="text-sm">{app.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Applications */}
          <TabsContent value="apps" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nativeApps.map((app) => (
                <Card key={app.id} className="cursor-pointer hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <app.icon className="h-12 w-12 text-blue-600" />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{app.name}</h3>
                        <p className="text-sm text-gray-600">v{app.version}</p>
                      </div>
                      <Badge className={getStatusColor(app.status)}>
                        {app.status === 'published' ? 'Publié' : app.status === 'beta' ? 'Beta' : 'Dev'}
                      </Badge>
                    </div>

                    <p className="text-gray-600 mb-4">{app.description}</p>

                    <div className="flex items-center gap-2 mb-4">
                      <Badge className={getCategoryColor(app.category)}>
                        {app.category}
                      </Badge>
                      {app.platforms.includes('iOS') && (
                        <Apple className="h-4 w-4 text-gray-600" />
                      )}
                      {app.platforms.includes('Android') && (
                        <PlayIcon className="h-4 w-4 text-green-600" />
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <p className="text-gray-500">Téléchargements</p>
                        <p className="font-bold">{formatNumber(app.downloads)}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Note</p>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className="font-bold">{app.rating}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-500">Taille</p>
                        <p className="font-bold">{app.size}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Mise à jour</p>
                        <p className="font-bold">{new Date(app.lastUpdate).toLocaleDateString()}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Fonctionnalités:</p>
                      <div className="flex flex-wrap gap-1">
                        {app.features.map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Métriques de Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">+23%</div>
                    <p className="text-sm text-gray-600">Croissance mensuelle</p>
                    <Progress value={23} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">4.7</div>
                    <p className="text-sm text-gray-600">Note moyenne stores</p>
                    <Progress value={94} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">89%</div>
                    <p className="text-sm text-gray-600">Rétention 30 jours</p>
                    <Progress value={89} className="mt-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Évolution des Téléchargements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nativeApps.map((app) => (
                    <div key={app.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <app.icon className="h-8 w-8 text-blue-600" />
                        <span className="font-medium">{app.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="font-bold">{formatNumber(app.downloads)}</div>
                          <div className="text-xs text-green-600">+12% ce mois</div>
                        </div>
                        <Progress value={(app.downloads / 250000) * 100} className="w-24" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Déploiement */}
          <TabsContent value="deployment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configuration des Stores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-4">
                        <Apple className="h-8 w-8 text-gray-800" />
                        <div>
                          <h3 className="font-bold">iOS App Store</h3>
                          <p className="text-sm text-gray-600">Configuration Apple</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Certificate</span>
                          <Badge className="bg-green-100 text-green-800">Valide</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Provisioning</span>
                          <Badge className="bg-green-100 text-green-800">Actif</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">App Store Connect</span>
                          <Badge className="bg-green-100 text-green-800">Connecté</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-4">
                        <PlayIcon className="h-8 w-8 text-green-600" />
                        <div>
                          <h3 className="font-bold">Google Play Store</h3>
                          <p className="text-sm text-gray-600">Configuration Android</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Keystore</span>
                          <Badge className="bg-green-100 text-green-800">Valide</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">API Key</span>
                          <Badge className="bg-green-100 text-green-800">Actif</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Console Access</span>
                          <Badge className="bg-green-100 text-green-800">Connecté</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pipeline CI/CD</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-medium">Build & Test</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Succès</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="font-medium">Code Signing</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">En cours</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <span className="font-medium">Store Upload</span>
                    </div>
                    <Badge className="bg-gray-100 text-gray-800">En attente</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 mt-12 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Badge className="bg-green-100 text-green-800">100% Halal</Badge>
            <Badge className="bg-blue-100 text-blue-800">Multi-Platform</Badge>
            <Badge className="bg-purple-100 text-purple-800">Native Performance</Badge>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            © 2025 CED Native Apps - Club Empreinte Digitale
          </p>
          <p className="text-xs text-gray-500">
            Yakoubi Yamina - Protection Propriété Intellectuelle Complète
          </p>
        </div>
      </div>
    </div>
  );
}