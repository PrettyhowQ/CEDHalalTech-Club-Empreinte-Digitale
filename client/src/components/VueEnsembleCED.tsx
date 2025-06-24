import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Building2, 
  Shield, 
  Cloud, 
  GraduationCap, 
  Code2, 
  Heart, 
  Users, 
  TrendingUp, 
  Globe, 
  Zap,
  CreditCard,
  Smartphone,
  Database,
  Lock,
  Award,
  Target,
  DollarSign,
  BarChart3,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Briefcase,
  PieChart,
  Activity
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CEDFooter } from './CEDFooter';

interface EcosystemMetrics {
  totalUsers: number;
  monthlyRevenue: number;
  uptime: number;
  countries: number;
  languages: number;
  transactions: number;
  growth: number;
}

interface PlatformDetail {
  id: string;
  name: string;
  description: string;
  users: number;
  revenue: number;
  growth: number;
  status: 'active' | 'beta' | 'planned' | 'development';
  features: string[];
  metrics: {
    satisfaction: number;
    adoption: number;
    performance: number;
  };
  regions: string[];
  icon: any;
  color: string;
}

const ecosystemMetrics: EcosystemMetrics = {
  totalUsers: 71011,
  monthlyRevenue: 127000,
  uptime: 99.97,
  countries: 165,
  languages: 78,
  transactions: 2840000,
  growth: 42
};

const platformsData: PlatformDetail[] = [
  {
    id: 'ced-bank',
    name: 'CED Bank',
    description: 'Banque islamique digitale 0% intérêt avec API Banking Halal',
    users: 15847,
    revenue: 45000,
    growth: 38,
    status: 'active',
    features: [
      'Transactions 0% intérêt',
      'API Banking 25+ langages',
      'Cartes Gold Yakoubi 6 niveaux',
      'Prayer Mode automatique',
      'Conformité Charia AAOIFI'
    ],
    metrics: {
      satisfaction: 4.8,
      adoption: 87,
      performance: 99.5
    },
    regions: ['Suisse', 'EAU', 'Arabie Saoudite', 'Malaisie'],
    icon: Building2,
    color: 'bg-blue-500'
  },
  {
    id: 'al-aman-ced',
    name: 'Al-Aman CED Takaful',
    description: 'Assurance islamique avec gouvernance AAOIFI/IFSB',
    users: 12450,
    revenue: 38000,
    growth: 45,
    status: 'active',
    features: [
      'Gouvernance AAOIFI/IFSB',
      'Sharia Board 5 experts',
      'Intégration Banking unique',
      'Compliance 3 pays',
      'Documentation trilingue'
    ],
    metrics: {
      satisfaction: 4.7,
      adoption: 78,
      performance: 98.8
    },
    regions: ['Suisse', 'EAU', 'Arabie Saoudite'],
    icon: Shield,
    color: 'bg-green-500'
  },
  {
    id: 'ced-cloud',
    name: 'CED Cloud Platform',
    description: 'Plateforme de déploiement style Replit pour écosystème complet',
    users: 8934,
    revenue: 22000,
    growth: 67,
    status: 'active',
    features: [
      'Templates 1-click',
      'Infrastructure 4 régions',
      'Plans €49-€299/mois',
      'Analytics temps réel',
      'Solutions Enterprise'
    ],
    metrics: {
      satisfaction: 4.9,
      adoption: 92,
      performance: 99.8
    },
    regions: ['Europe', 'Moyen-Orient', 'Asie', 'Amérique'],
    icon: Cloud,
    color: 'bg-purple-500'
  },
  {
    id: 'formations-ia',
    name: 'Formations IA Éthique',
    description: 'Plateforme d\'apprentissage avec assistant IARP multilingue',
    users: 34222,
    revenue: 18000,
    growth: 28,
    status: 'active',
    features: [
      '12 formations spécialisées',
      'Chat IARP 25+ langues',
      'Certifications reconnues',
      'Simulateur BTS IA',
      'Communauté mondiale'
    ],
    metrics: {
      satisfaction: 4.6,
      adoption: 85,
      performance: 97.2
    },
    regions: ['Mondial'],
    icon: GraduationCap,
    color: 'bg-orange-500'
  },
  {
    id: 'ced-code',
    name: 'CED Code Platform',
    description: 'Plateforme développement et formations tech (2026-2027)',
    users: 0,
    revenue: 0,
    growth: 0,
    status: 'planned',
    features: [
      'IDE intégré cloud',
      'Formations développement',
      'Projets collaboratifs',
      'Mentoring experts',
      'Placement emploi'
    ],
    metrics: {
      satisfaction: 0,
      adoption: 0,
      performance: 0
    },
    regions: ['Mondial'],
    icon: Code2,
    color: 'bg-indigo-500'
  },
  {
    id: 'techforall',
    name: 'TechForAll Association',
    description: 'Plateforme solidaire d\'équipements technologiques reconditionnés',
    users: 8492,
    revenue: 4000,
    growth: 52,
    status: 'active',
    features: [
      'Équipements reconditionnés',
      'Centre Costa del Sol',
      'Avantages fiscaux EU',
      'Impact environnemental',
      'Solidarité numérique'
    ],
    metrics: {
      satisfaction: 4.9,
      adoption: 95,
      performance: 96.8
    },
    regions: ['Europe', 'Espagne', 'France'],
    icon: Heart,
    color: 'bg-red-500'
  }
];

export function VueEnsembleCED() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('overview');
  const [animatedMetrics, setAnimatedMetrics] = useState({
    users: 0,
    revenue: 0,
    uptime: 0,
    growth: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedMetrics({
        users: ecosystemMetrics.totalUsers,
        revenue: ecosystemMetrics.monthlyRevenue,
        uptime: ecosystemMetrics.uptime,
        growth: ecosystemMetrics.growth
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const activePlatforms = platformsData.filter(p => p.status === 'active');
  const totalActiveUsers = activePlatforms.reduce((sum, p) => sum + p.users, 0);
  const totalActiveRevenue = activePlatforms.reduce((sum, p) => sum + p.revenue, 0);

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
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
            Club Empreinte Digitale
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Écosystème Fintech Islamique Complet
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              🏆 Leader Mondial Fintech Halal
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              ✅ Conformité Charia AAOIFI
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              🌍 {ecosystemMetrics.countries} Pays
            </Badge>
          </div>
        </motion.div>

        {/* Métriques Globales */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Utilisateurs Total</CardTitle>
              <Users className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {animatedMetrics.users.toLocaleString()}
              </div>
              <p className="text-xs text-blue-100">
                +{ecosystemMetrics.growth}% ce mois
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenus Mensuels</CardTitle>
              <DollarSign className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                €{(animatedMetrics.revenue / 1000).toFixed(0)}K
              </div>
              <p className="text-xs text-green-100">
                Croissance soutenue
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Uptime</CardTitle>
              <Activity className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {animatedMetrics.uptime.toFixed(2)}%
              </div>
              <p className="text-xs text-purple-100">
                Production stable
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Transactions</CardTitle>
              <TrendingUp className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {(ecosystemMetrics.transactions / 1000000).toFixed(1)}M
              </div>
              <p className="text-xs text-orange-100">
                Volume mensuel
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tabs Navigation */}
        <Tabs value={selectedPlatform} onValueChange={setSelectedPlatform} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Vue d'ensemble
            </TabsTrigger>
            {platformsData.map((platform) => (
              <TabsTrigger key={platform.id} value={platform.id} className="flex items-center gap-2">
                <platform.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{platform.name.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Plateformes Actives */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Plateformes Actives
                  </CardTitle>
                  <CardDescription>
                    {activePlatforms.length} plateformes en production
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {activePlatforms.map((platform) => (
                    <div key={platform.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${platform.color} bg-opacity-20`}>
                          <platform.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">{platform.name}</p>
                          <p className="text-sm text-gray-500">{platform.users.toLocaleString()} utilisateurs</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">€{(platform.revenue / 1000).toFixed(0)}K</p>
                        <p className="text-sm text-gray-500">+{platform.growth}%</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Répartition Géographique */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-blue-500" />
                    Expansion Mondiale
                  </CardTitle>
                  <CardDescription>
                    Stratégie déploiement 4 phases
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-sm">Phase 1 - Suisse</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Actif
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm">Phase 2 - EAU/Golfe</span>
                      </div>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        Q2 2025
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                        <span className="text-sm">Phase 3 - Arabie Saoudite</span>
                      </div>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                        Q3 2025
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                        <span className="text-sm">Phase 4 - Asie Sud-Est</span>
                      </div>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                        Q4 2025
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Technologies Clés */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  Stack Technologique
                </CardTitle>
                <CardDescription>
                  Technologies modernes et performantes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Frontend</h4>
                    <div className="space-y-1">
                      <Badge variant="outline">React 18 + TypeScript</Badge>
                      <Badge variant="outline">Vite + Tailwind CSS</Badge>
                      <Badge variant="outline">Framer Motion</Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Backend</h4>
                    <div className="space-y-1">
                      <Badge variant="outline">Node.js 20 + Express</Badge>
                      <Badge variant="outline">PostgreSQL + Drizzle</Badge>
                      <Badge variant="outline">WebSocket</Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">IA & Analytics</h4>
                    <div className="space-y-1">
                      <Badge variant="outline">OpenAI GPT-4</Badge>
                      <Badge variant="outline">ML Prédictions</Badge>
                      <Badge variant="outline">Analytics Temps Réel</Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Sécurité</h4>
                    <div className="space-y-1">
                      <Badge variant="outline">Cryptage E2E</Badge>
                      <Badge variant="outline">2FA Obligatoire</Badge>
                      <Badge variant="outline">GDPR Compliant</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Détails Plateformes */}
          {platformsData.map((platform) => (
            <TabsContent key={platform.id} value={platform.id} className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${platform.color} bg-opacity-20`}>
                        <platform.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{platform.name}</CardTitle>
                        <CardDescription className="text-base">
                          {platform.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge 
                      variant={platform.status === 'active' ? 'default' : 'secondary'}
                      className={
                        platform.status === 'active' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                          : platform.status === 'planned'
                          ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }
                    >
                      {platform.status === 'active' ? 'Actif' : 
                       platform.status === 'planned' ? 'Planifié' : 'Développement'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm text-gray-500">Utilisateurs</h4>
                      <p className="text-2xl font-bold">{platform.users.toLocaleString()}</p>
                      {platform.status === 'active' && (
                        <div className="flex items-center gap-1 text-green-600 text-sm">
                          <TrendingUp className="h-3 w-3" />
                          +{platform.growth}% croissance
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm text-gray-500">Revenus Mensuels</h4>
                      <p className="text-2xl font-bold">€{(platform.revenue / 1000).toFixed(0)}K</p>
                      {platform.status === 'active' && (
                        <div className="flex items-center gap-1 text-blue-600 text-sm">
                          <DollarSign className="h-3 w-3" />
                          Récurrent
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm text-gray-500">Satisfaction</h4>
                      <div className="flex items-center gap-2">
                        <p className="text-2xl font-bold">
                          {platform.status === 'active' ? platform.metrics.satisfaction.toFixed(1) : '--'}
                        </p>
                        {platform.status === 'active' && (
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-gray-500">/5</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {platform.status === 'active' && (
                    <div className="space-y-4 mb-6">
                      <h4 className="font-medium">Métriques Performance</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Adoption</span>
                            <span>{platform.metrics.adoption}%</span>
                          </div>
                          <Progress value={platform.metrics.adoption} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Performance</span>
                            <span>{platform.metrics.performance}%</span>
                          </div>
                          <Progress value={platform.metrics.performance} className="h-2" />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    <h4 className="font-medium">Fonctionnalités Clés</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {platform.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-4">
                    <h4 className="font-medium">Couverture Géographique</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.regions.map((region, index) => (
                        <Badge key={index} variant="outline" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {region}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Investissement & Partenariats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-purple-500" />
                Opportunité Investissement
              </CardTitle>
              <CardDescription>
                Série A €450K - ROI 12.5X projeté
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Marché Total Adressable</span>
                  <span className="font-bold text-purple-600">€850M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Utilisateurs Potentiels</span>
                  <span className="font-bold text-blue-600">2.1B Musulmans</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Concurrence API Banking Halal</span>
                  <span className="font-bold text-green-600">0%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Avance Technologique</span>
                  <span className="font-bold text-orange-600">3-5 ans</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-blue-500" />
                Partenariats Stratégiques
              </CardTitle>
              <CardDescription>
                Institutions cibles par région
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-sm mb-2">🇨🇭 Suisse</h5>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">UBS</Badge>
                    <Badge variant="outline" className="text-xs">Credit Suisse</Badge>
                    <Badge variant="outline" className="text-xs">Julius Baer</Badge>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-sm mb-2">🇦🇪 EAU</h5>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">ADIB</Badge>
                    <Badge variant="outline" className="text-xs">Dubai Islamic Bank</Badge>
                    <Badge variant="outline" className="text-xs">Emirates NBD</Badge>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-sm mb-2">🇸🇦 Arabie Saoudite</h5>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Al Rajhi Bank</Badge>
                    <Badge variant="outline" className="text-xs">Saudi National Bank</Badge>
                    <Badge variant="outline" className="text-xs">PIF</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <CEDFooter />
    </div>
  );
}