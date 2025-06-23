import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Key,
  BarChart3,
  Zap,
  Shield,
  AlertCircle,
  CheckCircle,
  Activity,
  Clock,
  Users,
  DollarSign,
  TrendingUp,
  Globe,
  Code,
  Database,
  Webhook,
  Eye,
  EyeOff,
  Copy,
  RefreshCw,
  Settings,
  Download,
  FileText,
  Terminal
} from 'lucide-react';

export function DeveloperDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [apiKeysVisible, setApiKeysVisible] = useState({ test: false, live: false });
  const [realTimeData, setRealTimeData] = useState({
    totalRequests: 45382,
    successRate: 99.7,
    avgLatency: 47,
    activeWebhooks: 12
  });

  // Simulation données temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        totalRequests: prev.totalRequests + Math.floor(Math.random() * 5),
        successRate: 99.5 + Math.random() * 0.5,
        avgLatency: 40 + Math.random() * 20,
        activeWebhooks: prev.activeWebhooks + (Math.random() > 0.8 ? 1 : 0)
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const apiMetrics = [
    {
      title: 'Requêtes Totales',
      value: realTimeData.totalRequests.toLocaleString(),
      change: '+12.5%',
      trend: 'up',
      icon: BarChart3,
      color: 'text-blue-600'
    },
    {
      title: 'Taux de Succès',
      value: `${realTimeData.successRate.toFixed(1)}%`,
      change: '+0.3%',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      title: 'Latence Moyenne',
      value: `${Math.round(realTimeData.avgLatency)}ms`,
      change: '-8ms',
      trend: 'down',
      icon: Zap,
      color: 'text-amber-600'
    },
    {
      title: 'Webhooks Actifs',
      value: realTimeData.activeWebhooks.toString(),
      change: '+2',
      trend: 'up',
      icon: Webhook,
      color: 'text-purple-600'
    }
  ];

  const recentTransactions = [
    {
      id: 'tx_1234567890',
      type: 'Virement Halal',
      amount: '2,500 AED',
      status: 'Validé',
      timestamp: '2025-01-23 14:32:15',
      compliance: 'Conforme'
    },
    {
      id: 'tx_1234567891',
      type: 'Paiement Marchand',
      amount: '890 AED',
      status: 'En cours',
      timestamp: '2025-01-23 14:31:42',
      compliance: 'Vérification'
    },
    {
      id: 'tx_1234567892',
      type: 'Ouverture Compte',
      amount: '5,000 AED',
      status: 'Validé',
      timestamp: '2025-01-23 14:30:18',
      compliance: 'Conforme'
    }
  ];

  const webhookEvents = [
    {
      event: 'transaction.created',
      endpoint: 'https://your-app.com/webhooks/transactions',
      status: 'Actif',
      lastTrigger: '2 minutes ago',
      deliveryRate: '100%'
    },
    {
      event: 'account.updated',
      endpoint: 'https://your-app.com/webhooks/accounts',
      status: 'Actif',
      lastTrigger: '5 minutes ago',
      deliveryRate: '99.8%'
    },
    {
      event: 'compliance.alert',
      endpoint: 'https://your-app.com/webhooks/alerts',
      status: 'En pause',
      lastTrigger: '1 hour ago',
      deliveryRate: '95.2%'
    }
  ];

  const toggleApiKeyVisibility = (type: 'test' | 'live') => {
    setApiKeysVisible(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard Développeur CED Banking API</h1>
            <p className="text-gray-600 mt-2">Gérez votre intégration API Banking Halal en temps réel</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="bg-green-100 text-green-800 px-3 py-1">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              API Opérationnelle
            </Badge>
            <Button>
              <Settings className="mr-2 h-4 w-4" />
              Paramètres
            </Button>
          </div>
        </div>

        {/* Métriques en temps réel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {apiMetrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                      <p className={`text-xs ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {metric.change} vs hier
                      </p>
                    </div>
                    <div className={`p-3 rounded-full bg-gray-100`}>
                      <metric.icon className={`h-6 w-6 ${metric.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Navigation principale */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="api-keys">Clés API</TabsTrigger>
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="docs">Documentation</TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Activité récente */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Transactions Récentes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentTransactions.map((tx) => (
                      <div key={tx.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium text-sm">{tx.type}</div>
                          <div className="text-xs text-gray-500">{tx.id}</div>
                          <div className="text-xs text-gray-500">{tx.timestamp}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">{tx.amount}</div>
                          <div className="flex gap-2">
                            <Badge 
                              className={
                                tx.status === 'Validé' ? 'bg-green-100 text-green-800' :
                                tx.status === 'En cours' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }
                            >
                              {tx.status}
                            </Badge>
                            <Badge 
                              className={
                                tx.compliance === 'Conforme' ? 'bg-blue-100 text-blue-800' :
                                'bg-orange-100 text-orange-800'
                              }
                            >
                              {tx.compliance}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Graphique utilisation */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Utilisation API (7 derniers jours)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end justify-between gap-2">
                    {[65, 78, 82, 71, 89, 95, 88].map((height, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-gradient-to-t from-green-500 to-green-300 rounded-t"
                          style={{ height: `${height}%` }}
                        ></div>
                        <div className="text-xs text-gray-500 mt-2">
                          J-{6-index}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center text-sm text-gray-600">
                    Pic d'utilisation : Vendredi (+23% vs moyenne)
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Statut services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Statut Services CED Banking API
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <div className="font-medium">API Core</div>
                      <div className="text-sm text-gray-500">99.9% uptime</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <div className="font-medium">Webhooks</div>
                      <div className="text-sm text-gray-500">Opérationnel</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <div className="font-medium">Conformité Charia</div>
                      <div className="text-sm text-gray-500">Audit OK</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Clés API */}
          <TabsContent value="api-keys" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Clé de test */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5" />
                    Clé API Test
                  </CardTitle>
                  <Badge className="bg-yellow-100 text-yellow-800">Environnement Test</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Input 
                      type={apiKeysVisible.test ? "text" : "password"}
                      value="ced_test_sk_1a2b3c4d5e6f7g8h9i0j"
                      readOnly
                      className="font-mono text-sm"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleApiKeyVisibility('test')}
                    >
                      {apiKeysVisible.test ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard('ced_test_sk_1a2b3c4d5e6f7g8h9i0j')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Créée le:</span>
                      <span>15 janvier 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dernière utilisation:</span>
                      <span>Il y a 2 heures</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Limite mensuelle:</span>
                      <span>100,000 requêtes</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Régénérer Clé
                  </Button>
                </CardContent>
              </Card>

              {/* Clé de production */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5" />
                    Clé API Production
                  </CardTitle>
                  <Badge className="bg-green-100 text-green-800">Environnement Live</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Input 
                      type={apiKeysVisible.live ? "text" : "password"}
                      value="ced_live_sk_9z8y7x6w5v4u3t2s1r0q"
                      readOnly
                      className="font-mono text-sm"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleApiKeyVisibility('live')}
                    >
                      {apiKeysVisible.live ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard('ced_live_sk_9z8y7x6w5v4u3t2s1r0q')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Créée le:</span>
                      <span>10 janvier 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dernière utilisation:</span>
                      <span>Il y a 3 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Limite mensuelle:</span>
                      <span>Illimitée</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Régénérer Clé
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Utilisation mensuelle */}
            <Card>
              <CardHeader>
                <CardTitle>Utilisation Mensuelle - Janvier 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700">45,382</div>
                    <div className="text-sm text-blue-600">Requêtes utilisées</div>
                    <div className="text-xs text-gray-500">sur 100,000 (Test)</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-700">Illimitées</div>
                    <div className="text-sm text-green-600">Production</div>
                    <div className="text-xs text-gray-500">Plan Professional</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-700">89€</div>
                    <div className="text-sm text-purple-600">Coût estimé</div>
                    <div className="text-xs text-gray-500">Facture février</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Webhooks */}
          <TabsContent value="webhooks" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Webhook className="h-5 w-5" />
                    Configuration Webhooks
                  </span>
                  <Button>
                    Ajouter Webhook
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {webhookEvents.map((webhook, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className="bg-blue-100 text-blue-800">{webhook.event}</Badge>
                          <Badge 
                            className={
                              webhook.status === 'Actif' ? 'bg-green-100 text-green-800' :
                              'bg-yellow-100 text-yellow-800'
                            }
                          >
                            {webhook.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600 font-mono">{webhook.endpoint}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          Dernier déclenchement: {webhook.lastTrigger} | Taux de livraison: {webhook.deliveryRate}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Tester</Button>
                        <Button size="sm" variant="outline">Modifier</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Logs webhooks */}
            <Card>
              <CardHeader>
                <CardTitle>Logs Webhooks Récents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { time: '14:32:15', event: 'transaction.created', status: 'Livré', response: '200 OK' },
                    { time: '14:31:42', event: 'account.updated', status: 'Livré', response: '200 OK' },
                    { time: '14:30:18', event: 'compliance.alert', status: 'Échec', response: '500 Error' },
                    { time: '14:28:55', event: 'transaction.created', status: 'Livré', response: '200 OK' }
                  ].map((log, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded text-sm">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-gray-500">{log.time}</span>
                        <Badge variant="outline">{log.event}</Badge>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge 
                          className={
                            log.status === 'Livré' ? 'bg-green-100 text-green-800' :
                            'bg-red-100 text-red-800'
                          }
                        >
                          {log.status}
                        </Badge>
                        <span className="text-gray-600">{log.response}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Endpoints les Plus Utilisés</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { endpoint: '/api/v1/accounts', requests: 18500, percentage: 45 },
                      { endpoint: '/api/v1/transactions', requests: 12300, percentage: 30 },
                      { endpoint: '/api/v1/transfers', requests: 6150, percentage: 15 },
                      { endpoint: '/api/v1/compliance/validate', requests: 4100, percentage: 10 }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-mono">{item.endpoint}</span>
                          <span className="font-medium">{item.requests.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Géolocalisation des Requêtes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { country: 'Émirats Arabes Unis', requests: 15840, flag: '🇦🇪' },
                      { country: 'Arabie Saoudite', requests: 12650, flag: '🇸🇦' },
                      { country: 'France', requests: 8920, flag: '🇫🇷' },
                      { country: 'Malaisie', requests: 4560, flag: '🇲🇾' },
                      { country: 'Allemagne', requests: 3412, flag: '🇩🇪' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{item.flag}</span>
                          <span className="font-medium">{item.country}</span>
                        </div>
                        <span className="font-bold">{item.requests.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Métriques avancées */}
            <Card>
              <CardHeader>
                <CardTitle>Métriques Performance Avancées</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700">P95: 89ms</div>
                    <div className="text-sm text-blue-600">95e percentile latence</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-700">99.97%</div>
                    <div className="text-sm text-green-600">Disponibilité API</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-700">2.4K/min</div>
                    <div className="text-sm text-purple-600">Pic de trafic</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-700">100%</div>
                    <div className="text-sm text-amber-600">Conformité Charia</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documentation */}
          <TabsContent value="docs" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Documentation API
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Code className="mr-2 h-4 w-4" />
                      Guide de Démarrage Rapide
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Database className="mr-2 h-4 w-4" />
                      Référence API Complète
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Shield className="mr-2 h-4 w-4" />
                      Guide Conformité Charia
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Webhook className="mr-2 h-4 w-4" />
                      Configuration Webhooks
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    SDKs et Outils
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Terminal className="mr-2 h-4 w-4" />
                      SDK JavaScript/TypeScript
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Terminal className="mr-2 h-4 w-4" />
                      SDK Python
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Terminal className="mr-2 h-4 w-4" />
                      SDK PHP
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Terminal className="mr-2 h-4 w-4" />
                      Collection Postman
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle>Support Développeur</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-blue-600 font-bold mb-2">Chat en Direct</div>
                    <div className="text-sm text-gray-600 mb-3">Support technique 24/7</div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Ouvrir Chat
                    </Button>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-green-600 font-bold mb-2">Documentation</div>
                    <div className="text-sm text-gray-600 mb-3">Guides et exemples</div>
                    <Button size="sm" variant="outline">
                      Consulter
                    </Button>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-purple-600 font-bold mb-2">Communauté</div>
                    <div className="text-sm text-gray-600 mb-3">Discord développeurs</div>
                    <Button size="sm" variant="outline">
                      Rejoindre
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}