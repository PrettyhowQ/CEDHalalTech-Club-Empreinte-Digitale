import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { 
  Key,
  Settings,
  Globe,
  Zap,
  Activity,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  Download,
  Upload,
  Database,
  Shield,
  Eye,
  EyeOff,
  Copy,
  Plus,
  Trash2,
  Edit,
  Search,
  Filter,
  BarChart3,
  Calendar,
  MapPin,
  Smartphone
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CEDFooter } from './CEDFooter';

interface APIEndpoint {
  id: string;
  name: string;
  category: 'banking' | 'ai' | 'prayer' | 'currency' | 'payment' | 'notification' | 'security';
  description: string;
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  status: 'active' | 'inactive' | 'maintenance' | 'deprecated';
  version: string;
  lastUpdated: Date;
  requestsToday: number;
  responseTime: number;
  successRate: number;
  requiresAuth: boolean;
  rateLimited: boolean;
  documentation: string;
}

interface APIKey {
  id: string;
  name: string;
  type: 'production' | 'development' | 'testing';
  key: string;
  permissions: string[];
  createdAt: Date;
  lastUsed: Date;
  expiresAt: Date;
  requestCount: number;
  isActive: boolean;
  ipWhitelist: string[];
}

interface APIMetrics {
  totalRequests: number;
  successfulRequests: number;
  failedRequests: number;
  averageResponseTime: number;
  uptime: number;
  topEndpoints: Array<{endpoint: string; requests: number}>;
  hourlyTraffic: Array<{hour: number; requests: number}>;
}

const apiEndpoints: APIEndpoint[] = [
  {
    id: 'openai-chat',
    name: 'Super IARP Pro Chat',
    category: 'ai',
    description: 'Interface OpenAI GPT-4o pour assistant intelligent multilingue',
    url: '/api/chat/iarp',
    method: 'POST',
    status: 'inactive',
    version: 'v1.0',
    lastUpdated: new Date('2024-12-24T10:00:00'),
    requestsToday: 0,
    responseTime: 0,
    successRate: 0,
    requiresAuth: true,
    rateLimited: true,
    documentation: '/docs/api/iarp-chat'
  },
  {
    id: 'swift-transfer',
    name: 'Virements SWIFT Internationaux',
    category: 'banking',
    description: 'API pour virements internationaux conformes Sharia via réseau SWIFT',
    url: '/api/banking/swift-transfer',
    method: 'POST',
    status: 'active',
    version: 'v2.1',
    lastUpdated: new Date('2024-12-24T09:30:00'),
    requestsToday: 47,
    responseTime: 850,
    successRate: 98.2,
    requiresAuth: true,
    rateLimited: true,
    documentation: '/docs/api/swift-transfers'
  },
  {
    id: 'prayer-times',
    name: 'Horaires de Prière Automatiques',
    category: 'prayer',
    description: 'Calcul automatique des horaires de prière selon géolocalisation',
    url: '/api/islamic/prayer-times',
    method: 'GET',
    status: 'active',
    version: 'v1.5',
    lastUpdated: new Date('2024-12-24T08:00:00'),
    requestsToday: 1247,
    responseTime: 120,
    successRate: 99.8,
    requiresAuth: false,
    rateLimited: false,
    documentation: '/docs/api/prayer-times'
  },
  {
    id: 'currency-rates',
    name: 'Taux de Change Temps Réel',
    category: 'currency',
    description: 'Taux de change CHF/AED/USD/EUR en temps réel pour transactions',
    url: '/api/currency/rates',
    method: 'GET',
    status: 'active',
    version: 'v3.0',
    lastUpdated: new Date('2024-12-24T09:45:00'),
    requestsToday: 892,
    responseTime: 95,
    successRate: 99.5,
    requiresAuth: true,
    rateLimited: true,
    documentation: '/docs/api/currency-rates'
  },
  {
    id: 'halal-screening',
    name: 'Filtrage Investissements Halal',
    category: 'banking',
    description: 'Vérification automatique conformité Sharia des investissements',
    url: '/api/screening/halal-investment',
    method: 'POST',
    status: 'active',
    version: 'v1.8',
    lastUpdated: new Date('2024-12-24T07:15:00'),
    requestsToday: 156,
    responseTime: 340,
    successRate: 97.8,
    requiresAuth: true,
    rateLimited: true,
    documentation: '/docs/api/halal-screening'
  },
  {
    id: 'fraud-detection',
    name: 'Détection Fraude IA',
    category: 'security',
    description: 'Analyse IA en temps réel pour détecter transactions frauduleuses',
    url: '/api/security/fraud-detection',
    method: 'POST',
    status: 'active',
    version: 'v2.3',
    lastUpdated: new Date('2024-12-24T09:00:00'),
    requestsToday: 2156,
    responseTime: 45,
    successRate: 99.9,
    requiresAuth: true,
    rateLimited: false,
    documentation: '/docs/api/fraud-detection'
  },
  {
    id: 'zakat-calculator',
    name: 'Calculateur Zakat Automatique',
    category: 'banking',
    description: 'Calcul automatique de la Zakat selon patrimoine et revenus',
    url: '/api/islamic/zakat-calculator',
    method: 'POST',
    status: 'active',
    version: 'v1.2',
    lastUpdated: new Date('2024-12-23T16:30:00'),
    requestsToday: 234,
    responseTime: 180,
    successRate: 99.1,
    requiresAuth: true,
    rateLimited: true,
    documentation: '/docs/api/zakat-calculator'
  },
  {
    id: 'sms-notifications',
    name: 'Notifications SMS Sécurisées',
    category: 'notification',
    description: 'Envoi SMS chiffrés pour codes 2FA et alertes transactions',
    url: '/api/notifications/sms',
    method: 'POST',
    status: 'active',
    version: 'v1.4',
    lastUpdated: new Date('2024-12-24T08:45:00'),
    requestsToday: 445,
    responseTime: 1200,
    successRate: 98.7,
    requiresAuth: true,
    rateLimited: true,
    documentation: '/docs/api/sms-notifications'
  }
];

const apiKeys: APIKey[] = [
  {
    id: 'prod-main',
    name: 'Production CED Bank',
    type: 'production',
    key: 'ced_live_sk_1a2b3c4d5e6f7g8h9i0j',
    permissions: ['banking', 'transfers', 'cards', 'investments'],
    createdAt: new Date('2024-11-01'),
    lastUsed: new Date('2024-12-24T09:45:00'),
    expiresAt: new Date('2025-11-01'),
    requestCount: 156789,
    isActive: true,
    ipWhitelist: ['85.218.*.*, 185.224.*.*']
  },
  {
    id: 'dev-testing',
    name: 'Development Environment',
    type: 'development',
    key: 'ced_test_sk_9z8y7x6w5v4u3t2s1r0q',
    permissions: ['all'],
    createdAt: new Date('2024-10-15'),
    lastUsed: new Date('2024-12-24T10:15:00'),
    expiresAt: new Date('2025-10-15'),
    requestCount: 45623,
    isActive: true,
    ipWhitelist: ['127.0.0.1', '192.168.*.*']
  },
  {
    id: 'openai-inactive',
    name: 'OpenAI API Key',
    type: 'production',
    key: 'sk-proj-XXXXXXXXXXXXXXXXXX',
    permissions: ['ai', 'chat', 'translations'],
    createdAt: new Date('2024-09-01'),
    lastUsed: new Date('2024-12-20T14:30:00'),
    expiresAt: new Date('2025-09-01'),
    requestCount: 0,
    isActive: false,
    ipWhitelist: ['*']
  }
];

const apiMetrics: APIMetrics = {
  totalRequests: 125467,
  successfulRequests: 123890,
  failedRequests: 1577,
  averageResponseTime: 245,
  uptime: 99.97,
  topEndpoints: [
    { endpoint: 'fraud-detection', requests: 2156 },
    { endpoint: 'prayer-times', requests: 1247 },
    { endpoint: 'currency-rates', requests: 892 },
    { endpoint: 'sms-notifications', requests: 445 },
    { endpoint: 'zakat-calculator', requests: 234 }
  ],
  hourlyTraffic: [
    { hour: 0, requests: 45 }, { hour: 1, requests: 32 }, { hour: 2, requests: 28 },
    { hour: 3, requests: 31 }, { hour: 4, requests: 42 }, { hour: 5, requests: 67 },
    { hour: 6, requests: 123 }, { hour: 7, requests: 234 }, { hour: 8, requests: 456 },
    { hour: 9, requests: 789 }, { hour: 10, requests: 623 }, { hour: 11, requests: 534 }
  ]
};

export function APIManagement() {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'endpoints' | 'keys' | 'docs'>('overview');
  const [showApiKey, setShowApiKey] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'inactive': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'deprecated': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'banking': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'ai': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'prayer': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'currency': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'payment': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
      case 'notification': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      case 'security': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const toggleApiKeyVisibility = (keyId: string) => {
    setShowApiKey(prev => ({
      ...prev,
      [keyId]: !prev[keyId]
    }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copié dans le presse-papiers');
  };

  const filteredEndpoints = apiEndpoints.filter(endpoint => {
    const matchesSearch = endpoint.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         endpoint.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || endpoint.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Gestion APIs CED Bank
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Monitoring et configuration de toutes les APIs essentielles
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
              <Activity className="h-3 w-3 mr-1" />
              {apiMetrics.uptime}% Uptime
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              <Zap className="h-3 w-3 mr-1" />
              {apiMetrics.averageResponseTime}ms Réponse
            </Badge>
            <Badge variant="secondary" className="bg-pink-100 text-pink-800">
              <TrendingUp className="h-3 w-3 mr-1" />
              {apiMetrics.totalRequests.toLocaleString()} Requêtes
            </Badge>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700">
            {[
              { id: 'overview', name: 'Vue d\'ensemble', icon: BarChart3 },
              { id: 'endpoints', name: 'Points de Terminaison', icon: Globe },
              { id: 'keys', name: 'Clés API', icon: Key },
              { id: 'docs', name: 'Documentation', icon: Database }
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={selectedTab === tab.id ? "default" : "ghost"}
                onClick={() => setSelectedTab(tab.id as any)}
                className={selectedTab === tab.id ? "bg-indigo-600 hover:bg-indigo-700" : ""}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.name}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Vue d'ensemble */}
        {selectedTab === 'overview' && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Métriques Globales */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-2 border-indigo-200 dark:border-indigo-800">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">
                    {apiMetrics.totalRequests.toLocaleString()}
                  </div>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300">Requêtes Totales</p>
                  <Progress value={85} className="mt-2" />
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 dark:border-green-800">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {((apiMetrics.successfulRequests / apiMetrics.totalRequests) * 100).toFixed(1)}%
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300">Taux de Succès</p>
                  <Progress value={(apiMetrics.successfulRequests / apiMetrics.totalRequests) * 100} className="mt-2" />
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 dark:border-purple-800">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {apiMetrics.averageResponseTime}ms
                  </div>
                  <p className="text-sm text-purple-700 dark:text-purple-300">Temps Réponse Moyen</p>
                  <Progress value={75} className="mt-2" />
                </CardContent>
              </Card>

              <Card className="border-2 border-pink-200 dark:border-pink-800">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">
                    {apiMetrics.uptime}%
                  </div>
                  <p className="text-sm text-pink-700 dark:text-pink-300">Disponibilité</p>
                  <Progress value={apiMetrics.uptime} className="mt-2" />
                </CardContent>
              </Card>
            </div>

            {/* Endpoints les Plus Utilisés */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-indigo-600" />
                    Endpoints les Plus Utilisés
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {apiMetrics.topEndpoints.map((endpoint, i) => {
                      const apiInfo = apiEndpoints.find(api => api.id === endpoint.endpoint);
                      return (
                        <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div>
                            <p className="font-medium">{apiInfo?.name || endpoint.endpoint}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{apiInfo?.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-indigo-600">{endpoint.requests}</div>
                            <p className="text-xs text-gray-500">requêtes</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Statut des APIs Critiques */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-green-600" />
                    Statut APIs Critiques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {apiEndpoints.filter(api => ['swift-transfer', 'fraud-detection', 'openai-chat', 'prayer-times'].includes(api.id)).map((api, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${
                            api.status === 'active' ? 'bg-green-500' :
                            api.status === 'inactive' ? 'bg-red-500' :
                            'bg-yellow-500'
                          }`} />
                          <div>
                            <p className="font-medium">{api.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{api.version}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(api.status)}>
                            {api.status === 'active' ? 'Actif' :
                             api.status === 'inactive' ? 'Inactif' :
                             api.status === 'maintenance' ? 'Maintenance' :
                             'Déprécié'}
                          </Badge>
                          {api.status === 'active' && (
                            <p className="text-xs text-gray-500 mt-1">{api.responseTime}ms</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>
        )}

        {/* Points de Terminaison */}
        {selectedTab === 'endpoints' && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Filtres et Recherche */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Rechercher un endpoint..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <select
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-800"
                    >
                      <option value="all">Toutes catégories</option>
                      <option value="banking">Bancaire</option>
                      <option value="ai">IA</option>
                      <option value="prayer">Prière</option>
                      <option value="currency">Devises</option>
                      <option value="security">Sécurité</option>
                      <option value="notification">Notifications</option>
                    </select>
                    <Button variant="outline">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Liste des Endpoints */}
            <div className="space-y-4">
              {filteredEndpoints.map((endpoint, index) => (
                <motion.div
                  key={endpoint.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="border-l-4 border-l-indigo-500">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-bold text-lg">{endpoint.name}</h3>
                            <Badge className={getStatusColor(endpoint.status)}>
                              {endpoint.status === 'active' ? 'Actif' :
                               endpoint.status === 'inactive' ? 'Inactif' :
                               endpoint.status === 'maintenance' ? 'Maintenance' :
                               'Déprécié'}
                            </Badge>
                            <Badge className={getCategoryColor(endpoint.category)} variant="outline">
                              {endpoint.category}
                            </Badge>
                            <Badge variant="outline" className={`${
                              endpoint.method === 'GET' ? 'text-green-600' :
                              endpoint.method === 'POST' ? 'text-blue-600' :
                              endpoint.method === 'PUT' ? 'text-yellow-600' :
                              endpoint.method === 'DELETE' ? 'text-red-600' :
                              'text-purple-600'
                            }`}>
                              {endpoint.method}
                            </Badge>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mb-3">{endpoint.description}</p>
                          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
                            {endpoint.url}
                          </code>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Settings className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500 font-medium">Version</p>
                          <p className="font-bold">{endpoint.version}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 font-medium">Requêtes/jour</p>
                          <p className="font-bold">{endpoint.requestsToday.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 font-medium">Temps réponse</p>
                          <p className="font-bold">{endpoint.responseTime}ms</p>
                        </div>
                        <div>
                          <p className="text-gray-500 font-medium">Taux succès</p>
                          <p className="font-bold">{endpoint.successRate}%</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Shield className="h-3 w-3" />
                          {endpoint.requiresAuth ? 'Authentification requise' : 'Accès libre'}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {endpoint.rateLimited ? 'Rate limiting actif' : 'Pas de limitation'}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Mis à jour: {endpoint.lastUpdated.toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Clés API */}
        {selectedTab === 'keys' && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Gestion des Clés API</h2>
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                <Plus className="h-4 w-4 mr-2" />
                Nouvelle Clé
              </Button>
            </div>

            <div className="space-y-4">
              {apiKeys.map((apiKey, index) => (
                <motion.div
                  key={apiKey.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className={`border-2 ${apiKey.isActive ? 'border-green-200' : 'border-red-200'}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-bold text-lg">{apiKey.name}</h3>
                            <Badge className={apiKey.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                              {apiKey.isActive ? 'Active' : 'Inactive'}
                            </Badge>
                            <Badge variant="outline" className={
                              apiKey.type === 'production' ? 'border-red-300 text-red-600' :
                              apiKey.type === 'development' ? 'border-blue-300 text-blue-600' :
                              'border-yellow-300 text-yellow-600'
                            }>
                              {apiKey.type}
                            </Badge>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">Clé API:</span>
                              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">
                                {showApiKey[apiKey.id] ? apiKey.key : '••••••••••••••••••••'}
                              </code>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => toggleApiKeyVisibility(apiKey.id)}
                              >
                                {showApiKey[apiKey.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(apiKey.key)}
                              >
                                <Copy className="h-4 w-4" />
                              </Button>
                            </div>
                            
                            <div>
                              <span className="text-sm font-medium">Permissions:</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {apiKey.permissions.map((permission, i) => (
                                  <Badge key={i} variant="secondary" className="text-xs">
                                    {permission}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <span className="text-sm font-medium">IPs autorisées:</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {apiKey.ipWhitelist.map((ip, i) => (
                                  <code key={i} className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                                    {ip}
                                  </code>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm pt-4 border-t">
                        <div>
                          <p className="text-gray-500 font-medium">Créée le</p>
                          <p className="font-bold">{apiKey.createdAt.toLocaleDateString('fr-FR')}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 font-medium">Dernière utilisation</p>
                          <p className="font-bold">{apiKey.lastUsed.toLocaleDateString('fr-FR')}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 font-medium">Expire le</p>
                          <p className="font-bold">{apiKey.expiresAt.toLocaleDateString('fr-FR')}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 font-medium">Requêtes totales</p>
                          <p className="font-bold">{apiKey.requestCount.toLocaleString()}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Documentation */}
        {selectedTab === 'docs' && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-purple-600" />
                  Documentation API CED Bank
                </CardTitle>
                <CardDescription>
                  Guides complets pour intégrer toutes nos APIs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Guide de Démarrage Rapide', description: 'Authentification et premières requêtes', time: '10 min' },
                    { title: 'API Banking Core', description: 'Virements, comptes, et cartes', time: '30 min' },
                    { title: 'Intégration Super IARP Pro', description: 'Assistant IA multilingue', time: '20 min' },
                    { title: 'APIs Islamiques', description: 'Prières, Zakat, et conformité Sharia', time: '25 min' },
                    { title: 'Sécurité & Authentification', description: '2FA, fraude, et cryptage', time: '35 min' },
                    { title: 'SDKs & Bibliothèques', description: 'JavaScript, Python, PHP, et plus', time: '15 min' }
                  ].map((doc, i) => (
                    <Card key={i} className="cursor-pointer hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-bold mb-2">{doc.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{doc.description}</p>
                            <Badge variant="outline" className="text-xs">
                              <Clock className="h-3 w-3 mr-1" />
                              {doc.time}
                            </Badge>
                          </div>
                          <Download className="h-5 w-5 text-gray-400" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Besoin d'aide supplémentaire ?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="justify-start">
                      <Smartphone className="h-4 w-4 mr-2" />
                      Support 24/7
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Globe className="h-4 w-4 mr-2" />
                      Communauté
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Settings className="h-4 w-4 mr-2" />
                      Sandbox
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        )}
      </div>
      
      <CEDFooter />
    </div>
  );
}