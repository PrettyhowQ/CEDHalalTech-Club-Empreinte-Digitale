import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Globe, 
  DollarSign,
  Target,
  Activity,
  Zap,
  Shield,
  Clock,
  Award,
  Smartphone
} from 'lucide-react';

export function ComprehensiveAnalytics() {
  const platformMetrics = {
    totalUsers: "127,849",
    activeUsers: "89,234",
    revenue: "€12.4M",
    growth: "+34.2%",
    satisfaction: 96.8,
    retention: 94.3
  };

  const applicationStats = [
    {
      name: "CED Bank Mobile",
      users: "45,678",
      transactions: "€8.2M",
      growth: "+28%",
      rating: 4.9,
      uptime: "99.98%"
    },
    {
      name: "Institut CED Academy",
      users: "34,222",
      courses: "2,156",
      growth: "+42%",
      rating: 4.8,
      completion: "87%"
    },
    {
      name: "Al-Aman Takaful",
      users: "23,456",
      policies: "€3.4M",
      growth: "+19%",
      rating: 4.7,
      claims: "98.2%"
    },
    {
      name: "TechForAll",
      users: "18,934",
      donations: "€890K",
      growth: "+56%",
      rating: 4.9,
      impact: "12,847"
    },
    {
      name: "Super IARP Pro",
      users: "15,567",
      queries: "234K",
      growth: "+67%",
      rating: 4.8,
      accuracy: "96.4%"
    },
    {
      name: "Lecteur Coran",
      users: "67,890",
      sessions: "1.2M",
      growth: "+38%",
      rating: 4.9,
      engagement: "8.4min"
    }
  ];

  const geographicData = [
    { region: "Suisse", users: "28,934", revenue: "€4.2M", growth: "+23%" },
    { region: "France", users: "24,567", revenue: "€3.1M", growth: "+31%" },
    { region: "EAU", users: "18,234", revenue: "€2.8M", growth: "+45%" },
    { region: "Arabie Saoudite", users: "15,678", revenue: "€1.9M", growth: "+38%" },
    { region: "Maroc", users: "12,456", revenue: "€0.4M", growth: "+52%" },
    { region: "Autres", users: "27,980", revenue: "€0.9M", growth: "+29%" }
  ];

  const technicalMetrics = {
    apiCalls: "2.4M",
    avgResponse: "127ms",
    errorRate: "0.03%",
    dataProcessed: "847TB",
    securityScore: 98.7,
    codeQuality: 96.2
  };

  const businessKPIs = [
    { metric: "CAC (Coût d'Acquisition)", value: "€23", target: "€25", status: "excellent" },
    { metric: "LTV (Valeur Vie Client)", value: "€1,247", target: "€1,000", status: "excellent" },
    { metric: "Churn Rate", value: "2.4%", target: "< 5%", status: "excellent" },
    { metric: "NPS Score", value: "78", target: "> 50", status: "excellent" },
    { metric: "ROI Marketing", value: "340%", target: "> 200%", status: "excellent" },
    { metric: "Temps de Support", value: "1.2h", target: "< 2h", status: "excellent" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* En-tête */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Analytics Avancées CED
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Intelligence artificielle et analytiques temps réel pour l'écosystème Club Empreinte Digitale
          </p>
        </div>

        {/* Métriques principales */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Utilisateurs Total</p>
                  <p className="text-3xl font-bold">{platformMetrics.totalUsers}</p>
                </div>
                <Users className="h-12 w-12 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Utilisateurs Actifs</p>
                  <p className="text-3xl font-bold">{platformMetrics.activeUsers}</p>
                </div>
                <Activity className="h-12 w-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-100">Revenus</p>
                  <p className="text-3xl font-bold">{platformMetrics.revenue}</p>
                </div>
                <DollarSign className="h-12 w-12 text-yellow-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Croissance</p>
                  <p className="text-3xl font-bold">{platformMetrics.growth}</p>
                </div>
                <TrendingUp className="h-12 w-12 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-500 to-pink-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-100">Satisfaction</p>
                  <p className="text-3xl font-bold">{platformMetrics.satisfaction}%</p>
                </div>
                <Award className="h-12 w-12 text-red-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-100">Rétention</p>
                  <p className="text-3xl font-bold">{platformMetrics.retention}%</p>
                </div>
                <Target className="h-12 w-12 text-indigo-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Onglets d'analyse */}
        <Tabs defaultValue="applications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="geographic">Géographie</TabsTrigger>
            <TabsTrigger value="technical">Technique</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
            <TabsTrigger value="ai">IA & Prédictions</TabsTrigger>
          </TabsList>

          <TabsContent value="applications" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applicationStats.map((app, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Smartphone className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{app.name}</CardTitle>
                          <Badge variant="default">Note {app.rating}/5</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Utilisateurs</span>
                        <span className="font-semibold">{app.users}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Croissance</span>
                        <span className="font-semibold text-green-600">{app.growth}</span>
                      </div>
                      {app.transactions && (
                        <div className="flex justify-between text-sm">
                          <span>Transactions</span>
                          <span className="font-semibold">{app.transactions}</span>
                        </div>
                      )}
                      {app.courses && (
                        <div className="flex justify-between text-sm">
                          <span>Cours</span>
                          <span className="font-semibold">{app.courses}</span>
                        </div>
                      )}
                      {app.uptime && (
                        <div className="flex justify-between text-sm">
                          <span>Uptime</span>
                          <span className="font-semibold text-green-600">{app.uptime}</span>
                        </div>
                      )}
                    </div>
                    <Button size="sm" className="w-full">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Analyse Détaillée
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="geographic" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {geographicData.map((region, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Globe className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{region.region}</CardTitle>
                          <Badge variant="outline">Croissance {region.growth}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Utilisateurs</span>
                        <span className="font-semibold">{region.users}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Revenus</span>
                        <span className="font-semibold text-green-600">{region.revenue}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Croissance</span>
                        <span className="font-semibold">{region.growth}</span>
                      </div>
                    </div>
                    <Progress 
                      value={parseInt(region.growth.replace('+', '').replace('%', ''))} 
                      className="h-2" 
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="technical" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Performance API
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Appels API/jour</span>
                      <span className="font-semibold">{technicalMetrics.apiCalls}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Temps réponse moyen</span>
                      <span className="font-semibold text-green-600">{technicalMetrics.avgResponse}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taux d'erreur</span>
                      <span className="font-semibold text-green-600">{technicalMetrics.errorRate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Sécurité & Qualité
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Score sécurité</span>
                      <span className="font-semibold">{technicalMetrics.securityScore}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Qualité code</span>
                      <span className="font-semibold">{technicalMetrics.codeQuality}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Données traitées</span>
                      <span className="font-semibold">{technicalMetrics.dataProcessed}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Monitoring Temps Réel
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Statut système</span>
                      <Badge variant="default">Opérationnel</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Dernière maintenance</span>
                      <span className="text-sm">Il y a 2h</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Prochaine mise à jour</span>
                      <span className="text-sm">Dans 6h</span>
                    </div>
                  </div>
                  <Button size="sm" className="w-full">
                    <Activity className="h-4 w-4 mr-2" />
                    Tableau de Bord Live
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="business" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessKPIs.map((kpi, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{kpi.metric}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">{kpi.value}</span>
                      <Badge variant={kpi.status === 'excellent' ? 'default' : 'secondary'}>
                        {kpi.status === 'excellent' ? 'Excellent' : 'Bon'}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600">
                      Objectif: {kpi.target}
                    </div>
                    <Progress value={95} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ai" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6" />
                    Prédictions IA
                  </CardTitle>
                  <CardDescription>
                    Analyses prédictives basées sur l'IA pour les prochains mois
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800">Croissance Prévue</h4>
                      <p className="text-green-600">+47% d'utilisateurs d'ici Q2 2025</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800">Revenus Optimisés</h4>
                      <p className="text-blue-600">€18.7M prévus avec optimisations IA</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-800">Nouveaux Marchés</h4>
                      <p className="text-purple-600">Expansion recommandée vers Asie du Sud-Est</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-6 w-6" />
                    Recommandations IA
                  </CardTitle>
                  <CardDescription>
                    Actions recommandées par l'intelligence artificielle
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <h4 className="font-semibold text-yellow-800">Optimisation UX</h4>
                      <p className="text-yellow-600">Améliorer onboarding mobile (+23% conversion)</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-800">Rétention Client</h4>
                      <p className="text-red-600">Programme fidélité recommandé (+12% LTV)</p>
                    </div>
                    <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                      <h4 className="font-semibold text-indigo-800">Innovation Produit</h4>
                      <p className="text-indigo-600">Fonctionnalité AR/VR très demandée</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 border-t pt-6">
          <p>© 2025 Club Empreinte Digitale - Analytics Avancées IA | Propriété de Yakoubi Yamina</p>
        </div>
      </div>
    </div>
  );
}