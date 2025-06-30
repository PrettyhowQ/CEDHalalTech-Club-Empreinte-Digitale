import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Smartphone, 
  Download, 
  Star, 
  Users, 
  TrendingUp, 
  Shield,
  Apple,
  PlayCircle,
  BarChart3,
  Zap,
  Globe,
  CheckCircle
} from 'lucide-react';

export function MobileNativeAppsRobust() {
  const apps = [
    {
      id: 1,
      name: "CED Bank Mobile",
      description: "Application bancaire islamique complète",
      platform: "iOS/Android",
      downloads: "245,678",
      rating: 4.9,
      version: "3.2.1",
      size: "47.2 MB",
      category: "Finance",
      status: "Production",
      growth: "+23%",
      icon: "🏦"
    },
    {
      id: 2,
      name: "Institut CED Academy",
      description: "Plateforme d'apprentissage islamique",
      platform: "iOS/Android",
      downloads: "189,234",
      rating: 4.8,
      version: "2.8.0",
      size: "52.1 MB",
      category: "Éducation",
      status: "Production",
      growth: "+31%",
      icon: "🎓"
    },
    {
      id: 3,
      name: "Al-Aman Takaful",
      description: "Assurance islamique digitale",
      platform: "iOS/Android",
      downloads: "134,567",
      rating: 4.7,
      version: "1.9.5",
      size: "39.8 MB",
      category: "Assurance",
      status: "Production",
      growth: "+18%",
      icon: "🛡️"
    },
    {
      id: 4,
      name: "TechForAll Marketplace",
      description: "Boutique solidaire technologique",
      platform: "iOS/Android",
      downloads: "98,432",
      rating: 4.6,
      version: "1.5.2",
      size: "41.3 MB",
      category: "Commerce",
      status: "Production",
      growth: "+27%",
      icon: "🛒"
    },
    {
      id: 5,
      name: "Lecteur Coran CED",
      description: "Récitation et apprentissage Tajweed",
      platform: "iOS/Android",
      downloads: "87,654",
      rating: 4.9,
      version: "2.1.0",
      size: "156.7 MB",
      category: "Religion",
      status: "Production",
      growth: "+42%",
      icon: "📖"
    },
    {
      id: 6,
      name: "Super IARP Pro",
      description: "Assistant IA multimodal éthique",
      platform: "iOS/Android",
      downloads: "76,543",
      rating: 4.8,
      version: "1.3.1",
      size: "28.9 MB",
      category: "Productivité",
      status: "Beta",
      growth: "+65%",
      icon: "🤖"
    }
  ];

  const totalDownloads = apps.reduce((sum, app) => sum + parseInt(app.downloads.replace(/,/g, '')), 0);
  const averageRating = apps.reduce((sum, app) => sum + app.rating, 0) / apps.length;

  const platformStats = {
    ios: { downloads: "421,567", marketShare: 57, revenue: "€89,234" },
    android: { downloads: "318,432", marketShare: 43, revenue: "€67,891" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* En-tête */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Apps Natives CED
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Écosystème mobile complet d'applications natives iOS et Android pour tous les services Club Empreinte Digitale
          </p>
        </div>

        {/* Métriques globales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Total Téléchargements</p>
                  <p className="text-3xl font-bold">{totalDownloads.toLocaleString()}</p>
                </div>
                <Download className="h-12 w-12 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-100">Note Moyenne</p>
                  <p className="text-3xl font-bold">{averageRating.toFixed(1)}/5</p>
                </div>
                <Star className="h-12 w-12 text-yellow-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Applications</p>
                  <p className="text-3xl font-bold">{apps.length}</p>
                </div>
                <Smartphone className="h-12 w-12 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Utilisateurs Actifs</p>
                  <p className="text-3xl font-bold">127K</p>
                </div>
                <Users className="h-12 w-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Onglets principaux */}
        <Tabs defaultValue="apps" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="apps">Applications</TabsTrigger>
            <TabsTrigger value="platforms">Plateformes</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="deployment">Déploiement</TabsTrigger>
          </TabsList>

          <TabsContent value="apps" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {apps.map((app) => (
                <Card key={app.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{app.icon}</span>
                        <div>
                          <CardTitle className="text-lg">{app.name}</CardTitle>
                          <Badge variant={app.status === 'Production' ? 'default' : 'secondary'}>
                            {app.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{app.rating}</span>
                        </div>
                        <p className="text-sm text-gray-500">v{app.version}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{app.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Téléchargements</span>
                        <span className="font-semibold">{app.downloads}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Taille</span>
                        <span>{app.size}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Croissance</span>
                        <span className="text-green-600 font-semibold">{app.growth}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Apple className="h-4 w-4 mr-1" />
                        iOS
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <PlayCircle className="h-4 w-4 mr-1" />
                        Android
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="platforms" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Apple className="h-6 w-6" />
                    iOS App Store
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Téléchargements</span>
                      <span className="font-semibold">{platformStats.ios.downloads}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Part de marché</span>
                      <span className="font-semibold">{platformStats.ios.marketShare}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Revenus</span>
                      <span className="font-semibold">{platformStats.ios.revenue}</span>
                    </div>
                  </div>
                  <Progress value={platformStats.ios.marketShare} className="h-2" />
                  <Button className="w-full">
                    <Apple className="h-4 w-4 mr-2" />
                    Gérer App Store Connect
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PlayCircle className="h-6 w-6" />
                    Google Play Store
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Téléchargements</span>
                      <span className="font-semibold">{platformStats.android.downloads}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Part de marché</span>
                      <span className="font-semibold">{platformStats.android.marketShare}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Revenus</span>
                      <span className="font-semibold">{platformStats.android.revenue}</span>
                    </div>
                  </div>
                  <Progress value={platformStats.android.marketShare} className="h-2" />
                  <Button className="w-full" variant="outline">
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Gérer Play Console
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Temps de démarrage</span>
                      <span className="font-semibold">1.2s</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Crashes</span>
                      <span className="font-semibold text-green-600">0.03%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taux de rétention</span>
                      <span className="font-semibold">87%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Engagement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Sessions/jour</span>
                      <span className="font-semibold">2.4</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Durée session</span>
                      <span className="font-semibold">8m 32s</span>
                    </div>
                    <div className="flex justify-between">
                      <span>DAU/MAU</span>
                      <span className="font-semibold">34%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Sécurité
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Chiffrement</span>
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex justify-between">
                      <span>Auth 2FA</span>
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex justify-between">
                      <span>Conformité RGPD</span>
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="deployment" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Pipeline CI/CD
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Build automatique</span>
                      <Badge variant="default">Actif</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Tests unitaires</span>
                      <Badge variant="default">97% coverage</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Déploiement</span>
                      <Badge variant="default">Automatique</Badge>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Zap className="h-4 w-4 mr-2" />
                    Déclencher Build
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>App Store</span>
                      <Badge variant="default">En ligne</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Play Store</span>
                      <Badge variant="default">En ligne</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Distribution interne</span>
                      <Badge variant="secondary">TestFlight</Badge>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Globe className="h-4 w-4 mr-2" />
                    Gérer Distribution
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 border-t pt-6">
          <p>© 2025 Club Empreinte Digitale - Développé par PrettyhowQ | Propriété de Yakoubi Yamina</p>
        </div>
      </div>
    </div>
  );
}