import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Key,
  Settings,
  Globe,
  Zap,
  Activity,
  TrendingUp,
  CheckCircle,
  Database,
  Shield,
  Eye,
  EyeOff,
  Copy,
  Search,
  BarChart3
} from 'lucide-react';

// Données des APIs CED Bank
const apiEndpoints = [
  {
    id: 'swift-transfer',
    name: 'Transferts SWIFT Internationaux',
    category: 'banking',
    description: 'API sécurisée pour transferts bancaires internationaux conformes Sharia',
    url: '/api/banking/swift-transfer',
    method: 'POST',
    status: 'active',
    version: 'v2.1',
    requestsToday: 1247,
    responseTime: 320,
    successRate: 99.8
  },
  {
    id: 'prayer-times',
    name: 'Horaires de Prière GPS',
    category: 'prayer',
    description: 'Calcul précis des horaires de prière selon localisation GPS',
    url: '/api/islamic/prayer-times',
    method: 'GET',
    status: 'active',
    version: 'v1.5',
    requestsToday: 2156,
    responseTime: 85,
    successRate: 99.9
  },
  {
    id: 'currency-rates',
    name: 'Taux de Change Temps Réel',
    category: 'currency',
    description: 'Taux CHF/AED/USD/EUR en temps réel',
    url: '/api/currency/rates',
    method: 'GET',
    status: 'active',
    version: 'v3.0',
    requestsToday: 892,
    responseTime: 95,
    successRate: 99.5
  },
  {
    id: 'fraud-detection',
    name: 'Détection Fraude IA',
    category: 'security',
    description: 'Analyse IA temps réel pour détecter transactions frauduleuses',
    url: '/api/security/fraud-detection',
    method: 'POST',
    status: 'active',
    version: 'v2.3',
    requestsToday: 445,
    responseTime: 45,
    successRate: 99.9
  },
  {
    id: 'zakat-calculator',
    name: 'Calculateur Zakat',
    category: 'banking',
    description: 'Calcul automatique Zakat selon patrimoine',
    url: '/api/islamic/zakat-calculator',
    method: 'POST',
    status: 'active',
    version: 'v1.2',
    requestsToday: 234,
    responseTime: 180,
    successRate: 99.1
  },
  {
    id: 'openai-chat',
    name: 'Super IARP Pro IA',
    category: 'ai',
    description: 'Assistant IA multimodal avec filtrage halal',
    url: '/api/ai/chat',
    method: 'POST',
    status: 'active',
    version: 'v4.0',
    requestsToday: 1567,
    responseTime: 650,
    successRate: 98.5
  }
];

const apiKeys = [
  {
    id: '1',
    name: 'CED Bank Production',
    keyPreview: 'ced_live_pk_...',
    environment: 'Production',
    permissions: ['banking', 'transfers'],
    lastUsed: '2 heures',
    status: 'active'
  },
  {
    id: '2',
    name: 'Prayer Times API',
    keyPreview: 'prayer_api_...',
    environment: 'Production',
    permissions: ['prayer', 'location'],
    lastUsed: '5 minutes',
    status: 'active'
  },
  {
    id: '3',
    name: 'Development Sandbox',
    keyPreview: 'ced_test_pk_...',
    environment: 'Test',
    permissions: ['all'],
    lastUsed: '1 jour',
    status: 'active'
  }
];

const metrics = {
  totalRequests: 125467,
  successfulRequests: 123890,
  failedRequests: 1577,
  averageResponseTime: 245,
  uptime: 99.97
};

export function APIManagementSimple() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [showApiKey, setShowApiKey] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'banking': return 'bg-blue-100 text-blue-800';
      case 'ai': return 'bg-purple-100 text-purple-800';
      case 'prayer': return 'bg-green-100 text-green-800';
      case 'currency': return 'bg-orange-100 text-orange-800';
      case 'security': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const toggleApiKeyVisibility = (keyId: string) => {
    setShowApiKey(prev => ({
      ...prev,
      [keyId]: !prev[keyId]
    }));
  };

  const filteredEndpoints = apiEndpoints.filter(endpoint => 
    endpoint.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    endpoint.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Gestion APIs CED Bank
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Monitoring et configuration de toutes les APIs essentielles
          </p>
          <div className="flex justify-center gap-4">
            <Badge className="bg-green-100 text-green-800">
              <Activity className="h-3 w-3 mr-1" />
              {metrics.uptime}% Uptime
            </Badge>
            <Badge className="bg-blue-100 text-blue-800">
              <Zap className="h-3 w-3 mr-1" />
              {metrics.averageResponseTime}ms Réponse
            </Badge>
            <Badge className="bg-purple-100 text-purple-800">
              <TrendingUp className="h-3 w-3 mr-1" />
              {metrics.totalRequests.toLocaleString()} Requêtes
            </Badge>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Vue d'ensemble
            </TabsTrigger>
            <TabsTrigger value="endpoints" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              APIs
            </TabsTrigger>
            <TabsTrigger value="keys" className="flex items-center gap-2">
              <Key className="h-4 w-4" />
              Clés API
            </TabsTrigger>
            <TabsTrigger value="docs" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              Documentation
            </TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {metrics.totalRequests.toLocaleString()}
                  </div>
                  <p className="text-sm text-gray-600">Requêtes Totales</p>
                  <Progress value={85} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {((metrics.successfulRequests / metrics.totalRequests) * 100).toFixed(1)}%
                  </div>
                  <p className="text-sm text-gray-600">Taux de Succès</p>
                  <Progress value={(metrics.successfulRequests / metrics.totalRequests) * 100} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {metrics.averageResponseTime}ms
                  </div>
                  <p className="text-sm text-gray-600">Temps Réponse</p>
                  <Progress value={75} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">
                    {metrics.uptime}%
                  </div>
                  <p className="text-sm text-gray-600">Disponibilité</p>
                  <Progress value={metrics.uptime} className="mt-2" />
                </CardContent>
              </Card>
            </div>

            {/* APIs les plus utilisées */}
            <Card>
              <CardHeader>
                <CardTitle>APIs les Plus Utilisées</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {apiEndpoints.slice(0, 5).map((api) => (
                    <div key={api.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{api.name}</p>
                        <p className="text-sm text-gray-600">{api.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600">{api.requestsToday}</div>
                        <p className="text-xs text-gray-500">requêtes</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Points de terminaison */}
          <TabsContent value="endpoints" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Rechercher une API</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher une API..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {filteredEndpoints.map((endpoint) => (
                <Card key={endpoint.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-lg">{endpoint.name}</h3>
                          <Badge className={getStatusColor(endpoint.status)}>
                            {endpoint.status === 'active' ? 'Actif' : 'Inactif'}
                          </Badge>
                          <Badge className={getCategoryColor(endpoint.category)}>
                            {endpoint.category}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{endpoint.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                            {endpoint.method} {endpoint.url}
                          </span>
                          <span>Version {endpoint.version}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{endpoint.requestsToday}</div>
                        <p className="text-xs text-gray-500">Requêtes aujourd'hui</p>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">{endpoint.responseTime}ms</div>
                        <p className="text-xs text-gray-500">Temps réponse</p>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">{endpoint.successRate}%</div>
                        <p className="text-xs text-gray-500">Taux succès</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Clés API */}
          <TabsContent value="keys" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Clés API</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {apiKeys.map((key) => (
                    <div key={key.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-medium">{key.name}</h3>
                          <p className="text-sm text-gray-600">Dernière utilisation: {key.lastUsed}</p>
                        </div>
                        <Badge className={getStatusColor(key.status)}>
                          {key.status === 'active' ? 'Active' : 'Inactive'}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                          {showApiKey[key.id] ? 'ced_live_pk_1234567890abcdef...' : key.keyPreview}
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => toggleApiKeyVisibility(key.id)}
                        >
                          {showApiKey[key.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                        <Button size="sm" variant="outline">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {key.permissions.map((permission) => (
                          <Badge key={permission} variant="outline" className="text-xs">
                            {permission}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documentation */}
          <TabsContent value="docs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Documentation API</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="cursor-pointer hover:shadow-lg transition-all">
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-2">Guide de Démarrage</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Documentation complète pour intégrer les APIs CED Bank
                      </p>
                      <Badge variant="outline">5 min de lecture</Badge>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-lg transition-all">
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-2">Authentification</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Sécuriser vos requêtes avec les clés API
                      </p>
                      <Badge variant="outline">3 min de lecture</Badge>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-lg transition-all">
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-2">Gestion des Erreurs</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Codes d'erreur et meilleures pratiques
                      </p>
                      <Badge variant="outline">4 min de lecture</Badge>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-lg transition-all">
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-2">Conformité Sharia</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        APIs conformes aux principes islamiques
                      </p>
                      <Badge variant="outline">6 min de lecture</Badge>
                    </CardContent>
                  </Card>
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
            <Badge className="bg-blue-100 text-blue-800">Sécurisé</Badge>
            <Badge className="bg-purple-100 text-purple-800">24/7</Badge>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            © 2025 CED Bank API Management - Club Empreinte Digitale
          </p>
          <p className="text-xs text-gray-500">
            Yakoubi Yamina - Protection Propriété Intellectuelle Complète
          </p>
        </div>
      </div>
    </div>
  );
}