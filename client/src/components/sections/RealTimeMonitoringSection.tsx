import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Activity, 
  Users, 
  Globe, 
  TrendingUp, 
  Eye, 
  Clock,
  Zap,
  BarChart3,
  Monitor,
  Wifi,
  Database,
  AlertTriangle,
  CheckCircle,
  MapPin,
  Smartphone,
  Laptop
} from 'lucide-react';

interface RealTimeMetrics {
  activeUsers: number;
  totalSessions: number;
  avgSessionDuration: string;
  bounceRate: number;
  pageViews: number;
  conversions: number;
  revenue: number;
  errorRate: number;
  loadTime: number;
  serverStatus: 'healthy' | 'warning' | 'critical';
}

interface UserActivity {
  id: string;
  userId: string;
  action: string;
  section: string;
  timestamp: Date;
  location: string;
  device: 'mobile' | 'desktop' | 'tablet';
}

interface GeographicData {
  country: string;
  users: number;
  sessions: number;
  flag: string;
  percentage: number;
}

export function RealTimeMonitoringSection() {
  const [metrics, setMetrics] = useState<RealTimeMetrics>({
    activeUsers: 342,
    totalSessions: 1247,
    avgSessionDuration: '4m 32s',
    bounceRate: 23.4,
    pageViews: 8934,
    conversions: 127,
    revenue: 15420,
    errorRate: 0.12,
    loadTime: 1.2,
    serverStatus: 'healthy'
  });

  const [recentActivity, setRecentActivity] = useState<UserActivity[]>([
    {
      id: '1',
      userId: 'user_8743',
      action: 'Inscription formation IA',
      section: 'Académie',
      timestamp: new Date(),
      location: 'Paris, France',
      device: 'desktop'
    },
    {
      id: '2',
      userId: 'user_9152',
      action: 'Chat avec IARP',
      section: 'Assistant IA',
      timestamp: new Date(Date.now() - 30000),
      location: 'Lyon, France',
      device: 'mobile'
    },
    {
      id: '3',
      userId: 'user_7429',
      action: 'Téléchargement certificat',
      section: 'Portfolio',
      timestamp: new Date(Date.now() - 45000),
      location: 'Montréal, Canada',
      device: 'desktop'
    },
    {
      id: '4',
      userId: 'user_6381',
      action: 'Consultation nutrition',
      section: 'Espace Santé',
      timestamp: new Date(Date.now() - 60000),
      location: 'Casablanca, Maroc',
      device: 'mobile'
    },
    {
      id: '5',
      userId: 'user_5247',
      action: 'Test BTS Diététique',
      section: 'Simulateur',
      timestamp: new Date(Date.now() - 90000),
      location: 'Bruxelles, Belgique',
      device: 'tablet'
    }
  ]);

  const [geographicData] = useState<GeographicData[]>([
    { country: 'France', users: 1247, sessions: 3421, flag: '🇫🇷', percentage: 45.2 },
    { country: 'Canada', users: 423, sessions: 1156, flag: '🇨🇦', percentage: 15.3 },
    { country: 'Maroc', users: 312, sessions: 876, flag: '🇲🇦', percentage: 11.3 },
    { country: 'Belgique', users: 298, sessions: 798, flag: '🇧🇪', percentage: 10.8 },
    { country: 'Suisse', users: 234, sessions: 645, flag: '🇨🇭', percentage: 8.5 },
    { country: 'Sénégal', users: 189, sessions: 432, flag: '🇸🇳', percentage: 6.8 },
    { country: 'Autres', users: 97, sessions: 234, flag: '🌍', percentage: 2.1 }
  ]);

  // Simulation de mise à jour en temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10 - 5),
        pageViews: prev.pageViews + Math.floor(Math.random() * 20),
        totalSessions: prev.totalSessions + Math.floor(Math.random() * 5)
      }));

      // Ajouter une nouvelle activité occasionnellement
      if (Math.random() < 0.3) {
        const actions = [
          'Nouvelle inscription',
          'Completion de cours',
          'Chat avec IARP',
          'Téléchargement ressource',
          'Partage sur réseau social',
          'Consultation expert'
        ];
        
        const sections = [
          'Académie',
          'Assistant IA',
          'Portfolio',
          'Espace Santé',
          'Automatisation',
          'Formations'
        ];

        const locations = [
          'Paris, France',
          'Lyon, France',
          'Montréal, Canada',
          'Casablanca, Maroc',
          'Bruxelles, Belgique',
          'Genève, Suisse'
        ];

        const devices: ('mobile' | 'desktop' | 'tablet')[] = ['mobile', 'desktop', 'tablet'];

        const newActivity: UserActivity = {
          id: Date.now().toString(),
          userId: `user_${Math.floor(Math.random() * 10000)}`,
          action: actions[Math.floor(Math.random() * actions.length)],
          section: sections[Math.floor(Math.random() * sections.length)],
          timestamp: new Date(),
          location: locations[Math.floor(Math.random() * locations.length)],
          device: devices[Math.floor(Math.random() * devices.length)]
        };

        setRecentActivity(prev => [newActivity, ...prev.slice(0, 9)]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getDeviceIcon = (device: string) => {
    switch (device) {
      case 'mobile': return <Smartphone className="h-4 w-4" />;
      case 'tablet': return <Smartphone className="h-4 w-4" />;
      case 'desktop': return <Laptop className="h-4 w-4" />;
      default: return <Monitor className="h-4 w-4" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <Activity className="inline-block h-12 w-12 text-blue-600 mr-4" />
            Monitoring Temps Réel
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Surveillance complète de votre écosystème digital avec analytics avancés, 
            géolocalisation des utilisateurs et monitoring de performance en continu.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Système opérationnel</span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="h-4 w-4 text-green-500" />
              <span className="text-sm">Temps réel activé</span>
            </div>
          </div>
        </motion.div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Vue d'ensemble
            </TabsTrigger>
            <TabsTrigger value="activity" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Activité Live
            </TabsTrigger>
            <TabsTrigger value="geographic" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Géographie
            </TabsTrigger>
            <TabsTrigger value="performance" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Performance
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Métriques principales */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Utilisateurs actifs</p>
                      <p className="text-2xl font-bold text-green-600">{metrics.activeUsers}</p>
                    </div>
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Sessions totales</p>
                      <p className="text-2xl font-bold text-blue-600">{metrics.totalSessions}</p>
                    </div>
                    <Eye className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Durée moyenne</p>
                      <p className="text-2xl font-bold text-purple-600">{metrics.avgSessionDuration}</p>
                    </div>
                    <Clock className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Conversions</p>
                      <p className="text-2xl font-bold text-orange-600">{metrics.conversions}</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Graphiques en temps réel */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Trafic en temps réel</CardTitle>
                  <CardDescription>Pages vues et sessions actives</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Pages vues</span>
                        <span>{metrics.pageViews.toLocaleString()}</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Taux de rebond</span>
                        <span>{metrics.bounceRate}%</span>
                      </div>
                      <Progress value={metrics.bounceRate} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenus</CardTitle>
                  <CardDescription>Performance financière en direct</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {metrics.revenue.toLocaleString()}€
                  </div>
                  <p className="text-sm text-gray-600">+12.5% vs hier</p>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Objectif mensuel</span>
                      <span>68%</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Activité utilisateur en direct</CardTitle>
                <CardDescription>Actions en temps réel sur la plateforme</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {recentActivity.map((activity) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        {getDeviceIcon(activity.device)}
                        <div>
                          <div className="font-medium">{activity.action}</div>
                          <div className="text-sm text-gray-600">
                            {activity.section} • {activity.userId}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {activity.location}
                        </div>
                        <div className="text-xs text-gray-500">
                          {activity.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="geographic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Répartition géographique</CardTitle>
                <CardDescription>Utilisateurs par pays en temps réel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {geographicData.map((country, index) => (
                    <div key={country.country} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{country.flag}</span>
                        <div>
                          <div className="font-medium">{country.country}</div>
                          <div className="text-sm text-gray-600">
                            {country.users} utilisateurs • {country.sessions} sessions
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{country.percentage}%</div>
                        <div className="w-20">
                          <Progress value={country.percentage} className="h-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    Serveur
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Statut</span>
                      <Badge className={getStatusColor(metrics.serverStatus)}>
                        {metrics.serverStatus === 'healthy' && <CheckCircle className="h-3 w-3 mr-1" />}
                        {metrics.serverStatus === 'warning' && <AlertTriangle className="h-3 w-3 mr-1" />}
                        {metrics.serverStatus}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Temps de charge</span>
                      <span>{metrics.loadTime}s</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Taux d'erreur</span>
                      <span>{metrics.errorRate}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alertes système</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">Base de données OK</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">API fonctionnelle</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">CDN opérationnel</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Uptime</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">99.98%</div>
                    <p className="text-sm text-gray-600">30 derniers jours</p>
                    <div className="mt-4">
                      <Progress value={99.98} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}