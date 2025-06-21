import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Code,
  Zap,
  Shield,
  Globe,
  Key,
  Activity,
  Database,
  Cloud,
  Settings,
  Users,
  BarChart3,
  Copy,
  Download,
  Play,
  CheckCircle,
  AlertCircle,
  Clock,
  Terminal,
  FileText,
  Webhook,
  Lock,
  Eye,
  EyeOff
} from 'lucide-react';

interface APIEndpoint {
  id: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  description: string;
  authentication: 'required' | 'optional' | 'none';
  rateLimit: number;
  category: 'accounts' | 'transactions' | 'payments' | 'investments' | 'analytics' | 'webhooks';
  parameters: { name: string; type: string; required: boolean; description: string }[];
  response: string;
  shariahCompliant: boolean;
  status: 'stable' | 'beta' | 'deprecated';
}

interface APIKey {
  id: string;
  name: string;
  key: string;
  permissions: string[];
  lastUsed: Date;
  requestsToday: number;
  monthlyLimit: number;
  environment: 'production' | 'sandbox' | 'development';
  status: 'active' | 'revoked' | 'expired';
  createdAt: Date;
  expiresAt?: Date;
}

interface WebhookEndpoint {
  id: string;
  url: string;
  events: string[];
  status: 'active' | 'inactive' | 'failed';
  lastDelivery?: Date;
  successRate: number;
  retryCount: number;
  secret: string;
  description: string;
}

export function DeveloperAPI() {
  const [activeTab, setActiveTab] = useState<'overview' | 'endpoints' | 'keys' | 'webhooks' | 'docs'>('overview');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'accounts' | 'transactions' | 'payments' | 'investments'>('all');
  const [showApiKey, setShowApiKey] = useState<{ [key: string]: boolean }>({});

  const [apiEndpoints] = useState<APIEndpoint[]>([
    {
      id: '1',
      method: 'GET',
      path: '/api/v1/accounts/balance',
      description: 'Récupère le solde du compte utilisateur avec détails par devise',
      authentication: 'required',
      rateLimit: 100,
      category: 'accounts',
      parameters: [
        { name: 'currency', type: 'string', required: false, description: 'Code devise (USD, EUR, AED)' },
        { name: 'include_pending', type: 'boolean', required: false, description: 'Inclure transactions en attente' }
      ],
      response: '{ "balance": 125000.50, "currency": "USD", "pending": 2500.00, "available": 122500.50 }',
      shariahCompliant: true,
      status: 'stable'
    },
    {
      id: '2',
      method: 'POST',
      path: '/api/v1/payments/halal/transfer',
      description: 'Effectue un virement conforme Charia avec vérification halal automatique',
      authentication: 'required',
      rateLimit: 10,
      category: 'payments',
      parameters: [
        { name: 'recipient_iban', type: 'string', required: true, description: 'IBAN du bénéficiaire' },
        { name: 'amount', type: 'number', required: true, description: 'Montant en devise de base' },
        { name: 'currency', type: 'string', required: true, description: 'Code devise' },
        { name: 'purpose', type: 'string', required: true, description: 'Objet du virement' },
        { name: 'halal_check', type: 'boolean', required: false, description: 'Vérification halal (défaut: true)' }
      ],
      response: '{ "transaction_id": "tx_abc123", "status": "pending", "halal_verified": true, "estimated_completion": "2025-06-22T10:00:00Z" }',
      shariahCompliant: true,
      status: 'stable'
    },
    {
      id: '3',
      method: 'GET',
      path: '/api/v1/investments/sukuk',
      description: 'Liste des opportunités d\'investissement sukuk disponibles',
      authentication: 'required',
      rateLimit: 50,
      category: 'investments',
      parameters: [
        { name: 'min_amount', type: 'number', required: false, description: 'Investissement minimum' },
        { name: 'risk_level', type: 'string', required: false, description: 'Niveau de risque (low, medium, high)' },
        { name: 'location', type: 'string', required: false, description: 'Zone géographique' }
      ],
      response: '{ "sukuk": [{"id": "sk_001", "name": "Dubai Marina Sukuk", "min_investment": 50000, "expected_return": 7.5}] }',
      shariahCompliant: true,
      status: 'stable'
    },
    {
      id: '4',
      method: 'POST',
      path: '/api/v1/analytics/compliance/report',
      description: 'Génère un rapport de conformité Charia pour le portfolio',
      authentication: 'required',
      rateLimit: 5,
      category: 'analytics',
      parameters: [
        { name: 'period', type: 'string', required: false, description: 'Période (monthly, quarterly, yearly)' },
        { name: 'format', type: 'string', required: false, description: 'Format de sortie (json, pdf)' }
      ],
      response: '{ "compliance_score": 98, "violations": [], "recommendations": ["Diversify sukuk holdings"], "report_url": "..." }',
      shariahCompliant: true,
      status: 'stable'
    },
    {
      id: '5',
      method: 'POST',
      path: '/api/v1/webhooks/subscribe',
      description: 'S\'abonne aux événements webhook pour notifications en temps réel',
      authentication: 'required',
      rateLimit: 20,
      category: 'webhooks',
      parameters: [
        { name: 'endpoint_url', type: 'string', required: true, description: 'URL de destination' },
        { name: 'events', type: 'array', required: true, description: 'Liste des événements' },
        { name: 'secret', type: 'string', required: false, description: 'Secret pour signature' }
      ],
      response: '{ "webhook_id": "wh_xyz789", "status": "active", "events": ["transaction.completed", "payment.failed"] }',
      shariahCompliant: true,
      status: 'beta'
    }
  ]);

  const [apiKeys] = useState<APIKey[]>([
    {
      id: '1',
      name: 'Production Main API',
      key: 'ced_live_sk_1234567890abcdef1234567890abcdef',
      permissions: ['read:accounts', 'write:payments', 'read:investments', 'write:analytics'],
      lastUsed: new Date('2025-06-21T15:30:00'),
      requestsToday: 2847,
      monthlyLimit: 100000,
      environment: 'production',
      status: 'active',
      createdAt: new Date('2025-01-15'),
      expiresAt: new Date('2025-12-31')
    },
    {
      id: '2',
      name: 'Sandbox Testing',
      key: 'ced_test_sk_abcdef1234567890abcdef1234567890',
      permissions: ['read:accounts', 'write:payments', 'read:transactions'],
      lastUsed: new Date('2025-06-20T09:15:00'),
      requestsToday: 156,
      monthlyLimit: 10000,
      environment: 'sandbox',
      status: 'active',
      createdAt: new Date('2025-03-01')
    },
    {
      id: '3',
      name: 'Mobile App Integration',
      key: 'ced_live_sk_xyz789abc123def456ghi789jkl012mno',
      permissions: ['read:accounts', 'read:transactions', 'read:analytics'],
      lastUsed: new Date('2025-06-21T18:45:00'),
      requestsToday: 5632,
      monthlyLimit: 500000,
      environment: 'production',
      status: 'active',
      createdAt: new Date('2025-02-10')
    }
  ]);

  const [webhookEndpoints] = useState<WebhookEndpoint[]>([
    {
      id: '1',
      url: 'https://myapp.com/webhooks/ced-bank',
      events: ['transaction.completed', 'payment.failed', 'investment.matured'],
      status: 'active',
      lastDelivery: new Date('2025-06-21T19:30:00'),
      successRate: 98.5,
      retryCount: 2,
      secret: 'whsec_1234567890abcdef',
      description: 'Production app notifications'
    },
    {
      id: '2',
      url: 'https://analytics.company.com/ced-events',
      events: ['user.created', 'account.updated', 'compliance.report'],
      status: 'active',
      lastDelivery: new Date('2025-06-21T17:15:00'),
      successRate: 95.2,
      retryCount: 1,
      secret: 'whsec_abcdef1234567890',
      description: 'Analytics platform integration'
    },
    {
      id: '3',
      url: 'https://backup.myapp.com/webhooks',
      events: ['transaction.completed'],
      status: 'failed',
      lastDelivery: new Date('2025-06-20T14:20:00'),
      successRate: 67.8,
      retryCount: 5,
      secret: 'whsec_xyz789abc123def',
      description: 'Backup notification endpoint'
    }
  ]);

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-blue-100 text-blue-800';
      case 'POST': return 'bg-green-100 text-green-800';
      case 'PUT': return 'bg-orange-100 text-orange-800';
      case 'DELETE': return 'bg-red-100 text-red-800';
      case 'PATCH': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable': return 'bg-green-100 text-green-800';
      case 'beta': return 'bg-yellow-100 text-yellow-800';
      case 'deprecated': return 'bg-red-100 text-red-800';
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const toggleApiKeyVisibility = (keyId: string) => {
    setShowApiKey(prev => ({ ...prev, [keyId]: !prev[keyId] }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const filteredEndpoints = apiEndpoints.filter(endpoint => 
    selectedCategory === 'all' || endpoint.category === selectedCategory
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl">
            <Code className="h-8 w-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">API Banking pour Développeurs</h2>
            <p className="text-gray-600">SDK, webhooks et intégrations banking conformes Charia</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Badge className="bg-green-100 text-green-800">
            <Shield className="h-4 w-4 mr-1" />
            Conforme Charia
          </Badge>
          <Badge className="bg-blue-100 text-blue-800">
            <Zap className="h-4 w-4 mr-1" />
            API v1.0
          </Badge>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {[
          { id: 'overview', label: 'Vue d\'ensemble', icon: BarChart3 },
          { id: 'endpoints', label: 'Endpoints API', icon: Globe },
          { id: 'keys', label: 'Clés API', icon: Key },
          { id: 'webhooks', label: 'Webhooks', icon: Webhook },
          { id: 'docs', label: 'Documentation', icon: FileText }
        ].map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? 'default' : 'ghost'}
            className={`flex-1 ${activeTab === tab.id ? 'bg-white shadow-sm' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <tab.icon className="h-4 w-4 mr-2" />
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Requêtes Aujourd'hui</p>
                    <p className="text-2xl font-bold">8,635</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Temps Réponse Moyen</p>
                    <p className="text-2xl font-bold">89ms</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Uptime</p>
                    <p className="text-2xl font-bold">99.9%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-600">Intégrations Actives</p>
                    <p className="text-2xl font-bold">47</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Start */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                Démarrage Rapide
              </CardTitle>
              <CardDescription>
                Intégrez CED Bank API en quelques minutes avec notre SDK
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="space-y-2">
                  <div><span className="text-blue-400"># Installation</span></div>
                  <div>npm install @ced-bank/api-sdk</div>
                  <div className="mt-4"><span className="text-blue-400"># Configuration</span></div>
                  <div>const cedBank = new CEDBank(&#123;</div>
                  <div className="ml-4">apiKey: 'your_api_key_here',</div>
                  <div className="ml-4">environment: 'sandbox', // ou 'production'</div>
                  <div className="ml-4">halalMode: true // Vérifications Charia automatiques</div>
                  <div>&#125;);</div>
                  <div className="mt-4"><span className="text-blue-400"># Premier appel API</span></div>
                  <div>const balance = await cedBank.accounts.getBalance();</div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Copy className="h-4 w-4 mr-2" />
                  Copier le Code
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger SDK
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Play className="h-4 w-4 mr-2" />
                  Tester en Sandbox
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* API Endpoints Tab */}
      {activeTab === 'endpoints' && (
        <div className="space-y-6">
          {/* Category Filter */}
          <div className="flex space-x-2">
            {['all', 'accounts', 'transactions', 'payments', 'investments', 'analytics'].map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category as any)}
              >
                {category === 'all' ? 'Tous' : category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>

          {/* Endpoints List */}
          <div className="space-y-4">
            {filteredEndpoints.map((endpoint) => (
              <Card key={endpoint.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Badge className={getMethodColor(endpoint.method)}>
                        {endpoint.method}
                      </Badge>
                      <code className="text-lg font-mono bg-gray-100 px-2 py-1 rounded">
                        {endpoint.path}
                      </code>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(endpoint.status)}>
                        {endpoint.status}
                      </Badge>
                      {endpoint.shariahCompliant && (
                        <Badge className="bg-green-100 text-green-800">
                          <Shield className="h-3 w-3 mr-1" />
                          Halal
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardDescription>{endpoint.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Rate Limit & Auth */}
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Authentification:</span>
                      <span className={`ml-2 font-medium ${
                        endpoint.authentication === 'required' ? 'text-red-600' :
                        endpoint.authentication === 'optional' ? 'text-orange-600' : 'text-green-600'
                      }`}>
                        {endpoint.authentication === 'required' ? 'Requise' :
                         endpoint.authentication === 'optional' ? 'Optionnelle' : 'Aucune'}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Limite:</span>
                      <span className="ml-2 font-medium">{endpoint.rateLimit}/min</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Catégorie:</span>
                      <span className="ml-2 font-medium capitalize">{endpoint.category}</span>
                    </div>
                  </div>

                  {/* Parameters */}
                  {endpoint.parameters.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-2">Paramètres:</h4>
                      <div className="space-y-2">
                        {endpoint.parameters.map((param, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <div className="flex items-center space-x-2">
                              <code className="text-sm bg-white px-2 py-1 rounded">{param.name}</code>
                              <span className="text-sm text-gray-600">{param.type}</span>
                              {param.required && (
                                <Badge variant="outline" className="text-xs">Requis</Badge>
                              )}
                            </div>
                            <span className="text-sm text-gray-600">{param.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Response Example */}
                  <div>
                    <h4 className="font-medium mb-2">Exemple de réponse:</h4>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm overflow-x-auto">
                      {endpoint.response}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      Tester
                    </Button>
                    <Button variant="outline" size="sm">
                      <Copy className="h-4 w-4 mr-2" />
                      Copier
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      Documentation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* API Keys Tab */}
      {activeTab === 'keys' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Gestion des Clés API</h3>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Key className="h-4 w-4 mr-2" />
              Nouvelle Clé
            </Button>
          </div>

          <div className="space-y-4">
            {apiKeys.map((apiKey) => (
              <Card key={apiKey.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{apiKey.name}</CardTitle>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge className={`${
                          apiKey.environment === 'production' ? 'bg-red-100 text-red-800' :
                          apiKey.environment === 'sandbox' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {apiKey.environment.charAt(0).toUpperCase() + apiKey.environment.slice(1)}
                        </Badge>
                        <Badge className={getStatusColor(apiKey.status)}>
                          {apiKey.status.charAt(0).toUpperCase() + apiKey.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Créée le</p>
                      <p className="font-medium">{apiKey.createdAt.toLocaleDateString('fr-FR')}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* API Key Display */}
                  <div>
                    <Label className="text-sm font-medium">Clé API:</Label>
                    <div className="flex items-center space-x-2 mt-1">
                      <code className="flex-1 bg-gray-100 p-2 rounded font-mono text-sm">
                        {showApiKey[apiKey.id] ? apiKey.key : apiKey.key.replace(/(.{8}).*(.{8})/, '$1••••••••••••••••••••••••••••••••••••••••$2')}
                      </code>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleApiKeyVisibility(apiKey.id)}
                      >
                        {showApiKey[apiKey.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(apiKey.key)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Usage Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Requêtes Aujourd'hui</p>
                      <p className="text-xl font-bold">{apiKey.requestsToday.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Limite Mensuelle</p>
                      <p className="text-xl font-bold">{apiKey.monthlyLimit.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Dernière Utilisation</p>
                      <p className="text-lg font-semibold">
                        {apiKey.lastUsed.toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                  </div>

                  {/* Usage Progress */}
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Utilisation mensuelle</span>
                      <span>{Math.round((apiKey.requestsToday * 30 / apiKey.monthlyLimit) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${Math.min((apiKey.requestsToday * 30 / apiKey.monthlyLimit) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Permissions */}
                  <div>
                    <p className="text-sm font-medium mb-2">Permissions:</p>
                    <div className="flex flex-wrap gap-1">
                      {apiKey.permissions.map((permission, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {permission}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2 border-t">
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4 mr-2" />
                      Modifier
                    </Button>
                    <Button variant="outline" size="sm">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Analytics
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      <Lock className="h-4 w-4 mr-2" />
                      Révoquer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Webhooks Tab */}
      {activeTab === 'webhooks' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Endpoints Webhook</h3>
            <Button className="bg-green-600 hover:bg-green-700">
              <Webhook className="h-4 w-4 mr-2" />
              Nouveau Webhook
            </Button>
          </div>

          <div className="space-y-4">
            {webhookEndpoints.map((webhook) => (
              <Card key={webhook.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{webhook.description}</CardTitle>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded mt-2 inline-block">
                        {webhook.url}
                      </code>
                    </div>
                    <Badge className={getStatusColor(webhook.status)}>
                      {webhook.status.charAt(0).toUpperCase() + webhook.status.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Taux de Succès</p>
                      <p className="text-xl font-bold text-green-600">{webhook.successRate}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Tentatives</p>
                      <p className="text-xl font-bold">{webhook.retryCount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Dernière Livraison</p>
                      <p className="text-lg font-semibold">
                        {webhook.lastDelivery?.toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                  </div>

                  {/* Events */}
                  <div>
                    <p className="text-sm font-medium mb-2">Événements écoutés:</p>
                    <div className="flex flex-wrap gap-1">
                      {webhook.events.map((event, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {event}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Secret */}
                  <div>
                    <Label className="text-sm font-medium">Secret de signature:</Label>
                    <code className="block bg-gray-100 p-2 rounded font-mono text-sm mt-1">
                      {webhook.secret}
                    </code>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2 border-t">
                    <Button variant="outline" size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      Tester
                    </Button>
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4 mr-2" />
                      Configurer
                    </Button>
                    <Button variant="outline" size="sm">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Logs
                    </Button>
                    {webhook.status === 'failed' && (
                      <Button variant="outline" size="sm" className="text-orange-600">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        Diagnostiquer
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Documentation Tab */}
      {activeTab === 'docs' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Guide de Démarrage',
                description: 'Intégration complète en 10 minutes',
                icon: Zap,
                color: 'bg-blue-100 text-blue-800'
              },
              {
                title: 'Référence API',
                description: 'Documentation complète des endpoints',
                icon: FileText,
                color: 'bg-green-100 text-green-800'
              },
              {
                title: 'SDK et Librairies',
                description: 'Outils pour tous les langages',
                icon: Code,
                color: 'bg-purple-100 text-purple-800'
              },
              {
                title: 'Webhooks Guide',
                description: 'Notifications temps réel',
                icon: Webhook,
                color: 'bg-orange-100 text-orange-800'
              },
              {
                title: 'Conformité Charia',
                description: 'Guide finance islamique',
                icon: Shield,
                color: 'bg-emerald-100 text-emerald-800'
              },
              {
                title: 'Exemples de Code',
                description: 'Cas d\'usage pratiques',
                icon: Terminal,
                color: 'bg-gray-100 text-gray-800'
              }
            ].map((doc, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className={`p-3 rounded-lg ${doc.color} w-fit`}>
                    <doc.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{doc.title}</CardTitle>
                  <CardDescription>{doc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    Voir Documentation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}