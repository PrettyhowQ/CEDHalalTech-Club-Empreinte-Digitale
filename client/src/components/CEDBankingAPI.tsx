import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  Code, 
  Zap, 
  Shield, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Download,
  Key,
  Webhook,
  Database,
  Lock,
  Users,
  Briefcase,
  Star,
  Terminal,
  FileCode,
  Copy,
  Eye,
  EyeOff
} from 'lucide-react';

export function CEDBankingAPI() {
  const [activeTab, setActiveTab] = useState('overview');
  const [apiKeyVisible, setApiKeyVisible] = useState(false);
  const [selectedEndpoint, setSelectedEndpoint] = useState('accounts');

  const apiFeatures = [
    {
      icon: Code,
      title: 'SDK Complet Multi-Langages',
      description: 'Intégration rapide avec JavaScript, Python, PHP, Java',
      benefits: ['Documentation complète', 'Exemples prêts à utiliser', 'Support technique 24/7'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Webhooks Temps Réel',
      description: 'Notifications instantanées transactions, virements, alertes',
      benefits: ['Latence < 50ms', 'Retry automatique', 'Signature sécurisée'],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Database,
      title: 'Connexion Banques Partenaires',
      description: 'Accès direct aux banques conformes Charia via API unifiée',
      benefits: ['15 banques islamiques', 'Format standardisé', 'Agrégation automatique'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Shield,
      title: 'Conformité Charia Garantie',
      description: 'Respect strict principes islamiques : zéro riba, transparence',
      benefits: ['Audit automatique', 'Secteurs haram bloqués', 'Certification continue'],
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  const useCases = [
    {
      icon: Briefcase,
      title: 'Fintechs Islamiques',
      description: 'Applications financières conformes Charia',
      examples: ['Néobanques halal', 'Apps investissement', 'Portefeuilles numériques'],
      clients: '25+ fintechs'
    },
    {
      icon: Globe,
      title: 'Plateformes Paiement Éthiques',
      description: 'Solutions de paiement sans intérêt',
      examples: ['E-commerce halal', 'Marketplaces', 'Systèmes POS'],
      clients: '150+ marchands'
    },
    {
      icon: Star,
      title: 'Start-ups Engagées',
      description: 'Innovation technologique responsable',
      examples: ['Impact social', 'Économie circulaire', 'Tech for good'],
      clients: '75+ startups'
    }
  ];

  const endpoints: Record<string, {
    name: string;
    description: string;
    methods: { method: string; endpoint: string; description: string; }[];
  }> = {
    accounts: {
      name: 'Comptes',
      description: 'Gestion comptes bancaires halal',
      methods: [
        { method: 'GET', endpoint: '/api/v1/accounts', description: 'Liste comptes utilisateur' },
        { method: 'GET', endpoint: '/api/v1/accounts/{id}', description: 'Détails compte spécifique' },
        { method: 'POST', endpoint: '/api/v1/accounts', description: 'Création nouveau compte' },
        { method: 'GET', endpoint: '/api/v1/accounts/{id}/balance', description: 'Solde en temps réel' }
      ]
    },
    transactions: {
      name: 'Transactions',
      description: 'Historique et virements conformes',
      methods: [
        { method: 'GET', endpoint: '/api/v1/transactions', description: 'Historique transactions' },
        { method: 'POST', endpoint: '/api/v1/transfers', description: 'Virement halal (0% frais)' },
        { method: 'GET', endpoint: '/api/v1/transactions/{id}', description: 'Détails transaction' },
        { method: 'POST', endpoint: '/api/v1/payments', description: 'Paiement marchand' }
      ]
    },
    compliance: {
      name: 'Conformité Charia',
      description: 'Validation et audit automatique',
      methods: [
        { method: 'POST', endpoint: '/api/v1/validate/transaction', description: 'Validation conformité' },
        { method: 'GET', endpoint: '/api/v1/haram-sectors', description: 'Liste secteurs interdits' },
        { method: 'GET', endpoint: '/api/v1/halal-status/{merchant}', description: 'Statut marchand' },
        { method: 'POST', endpoint: '/api/v1/audit/report', description: 'Rapport audit Charia' }
      ]
    },
    webhooks: {
      name: 'Webhooks',
      description: 'Notifications temps réel',
      methods: [
        { method: 'POST', endpoint: '/api/v1/webhooks', description: 'Configuration webhook' },
        { method: 'GET', endpoint: '/api/v1/webhooks', description: 'Liste webhooks actifs' },
        { method: 'DELETE', endpoint: '/api/v1/webhooks/{id}', description: 'Suppression webhook' },
        { method: 'POST', endpoint: '/api/v1/webhooks/test', description: 'Test webhook' }
      ]
    }
  };

  const codeExample = `// SDK JavaScript CED Banking API
import { CEDBankingAPI } from '@ced-bank/sdk';

// Initialisation avec clé API
const api = new CEDBankingAPI({
  apiKey: 'ced_live_...',
  environment: 'production',
  halalMode: true // Conformité Charia activée
});

// Création virement halal (0% frais)
const transfer = await api.transfers.create({
  from_account: 'acc_yakoubi_gold_123',
  to_account: 'acc_beneficiary_456',
  amount: 1000,
  currency: 'AED',
  description: 'Paiement facture halal',
  compliance_check: true
});

// Webhook notification temps réel
api.webhooks.on('transaction.created', (transaction) => {
  if (transaction.halal_status === 'approved') {
    console.log('✅ Transaction halal validée');
    processPayment(transaction);
  }
});

// Validation conformité Charia
const validation = await api.compliance.validate({
  merchant_id: 'merchant_123',
  sector: 'technology',
  transaction_type: 'payment'
});

console.log('Statut halal:', validation.halal_compliant);`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              CED Banking API Halal
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            API Banking révolutionnaire pour développeurs : services financiers éthiques et conformes à la Charia
          </p>
          <div className="flex justify-center gap-3 mt-4">
            <Badge className="bg-green-500 text-white px-3 py-1">100% Halal</Badge>
            <Badge className="bg-blue-500 text-white px-3 py-1">0% Riba</Badge>
            <Badge className="bg-purple-500 text-white px-3 py-1">Temps Réel</Badge>
            <Badge className="bg-amber-500 text-white px-3 py-1">RESTful API</Badge>
          </div>
        </motion.div>

        {/* Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="features">Fonctionnalités</TabsTrigger>
            <TabsTrigger value="documentation">Documentation</TabsTrigger>
            <TabsTrigger value="pricing">Tarification</TabsTrigger>
            <TabsTrigger value="get-started">Commencer</TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview" className="space-y-6">
            {/* Proposition de valeur */}
            <Card className="bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-300">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-green-800">
                  🧠 API Banking Halal pour Développeurs
                </CardTitle>
                <p className="text-center text-gray-700 text-lg">
                  Proposez des services financiers éthiques et conformes à la Charia grâce à notre API Banking Halal
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg border border-green-200">
                    <Code className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-bold">SDK Complet</h3>
                    <p className="text-sm text-gray-600">Intégration rapide</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
                    <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-bold">Webhooks Temps Réel</h3>
                    <p className="text-sm text-gray-600">Notifications instantanées</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-purple-200">
                    <Database className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-bold">Banques Partenaires</h3>
                    <p className="text-sm text-gray-600">Connexion conformes Charia</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-amber-200">
                    <Shield className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                    <h3 className="font-bold">Conformité Garantie</h3>
                    <p className="text-sm text-gray-600">Zéro intérêt, transparence</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cas d'usage */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <useCase.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-center text-lg">{useCase.title}</CardTitle>
                      <p className="text-center text-sm text-gray-600">{useCase.description}</p>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        {useCase.examples.map((example, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span>{example}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="text-center pt-4 border-t">
                        <Badge className="bg-blue-100 text-blue-800">{useCase.clients}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Statistiques API */}
            <Card className="bg-gradient-to-r from-blue-100 to-purple-100">
              <CardHeader>
                <CardTitle className="text-center">Métriques API Banking Halal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-green-700 mb-2">250+</div>
                    <div className="text-sm text-green-600">Développeurs actifs</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-blue-700 mb-2">15M+</div>
                    <div className="text-sm text-blue-600">Appels API/mois</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-purple-700 mb-2">99.9%</div>
                    <div className="text-sm text-purple-600">Uptime garanti</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-amber-700 mb-2">50ms</div>
                    <div className="text-sm text-amber-600">Latence moyenne</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Fonctionnalités */}
          <TabsContent value="features" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-center text-lg">{feature.title}</CardTitle>
                      <p className="text-center text-sm text-gray-600">{feature.description}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Conformité Charia détaillée */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  Conformité Charia Garantie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-green-800 mb-3">Principes Respectés ✅</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Zéro intérêt (Riba) sur toutes transactions</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Transparence totale des frais</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Partage équitable des risques</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Investissements éthiques uniquement</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-800 mb-3">Secteurs Exclus ❌</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></span>
                        <span>Alcool et substances</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></span>
                        <span>Jeux d'argent et paris</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></span>
                        <span>Porc et produits dérivés</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></span>
                        <span>Armement et défense</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documentation */}
          <TabsContent value="documentation" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Navigation endpoints */}
              <Card>
                <CardHeader>
                  <CardTitle>Endpoints API</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.entries(endpoints).map(([key, endpoint]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedEndpoint(key)}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          selectedEndpoint === key 
                            ? 'bg-green-100 border border-green-300' 
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="font-medium">{endpoint.name}</div>
                        <div className="text-sm text-gray-600">{endpoint.description}</div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Documentation endpoint sélectionné */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>{endpoints[selectedEndpoint].name}</CardTitle>
                  <p className="text-gray-600">{endpoints[selectedEndpoint].description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {endpoints[selectedEndpoint].methods.map((method, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge 
                            className={
                              method.method === 'GET' ? 'bg-blue-500 text-white' :
                              method.method === 'POST' ? 'bg-green-500 text-white' :
                              'bg-red-500 text-white'
                            }
                          >
                            {method.method}
                          </Badge>
                          <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                            {method.endpoint}
                          </code>
                        </div>
                        <p className="text-sm text-gray-600">{method.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Exemple de code */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCode className="h-5 w-5" />
                  Exemple d'Intégration SDK
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{codeExample}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute top-4 right-4"
                    onClick={() => navigator.clipboard.writeText(codeExample)}
                  >
                    <Copy className="h-4 w-4 mr-1" />
                    Copier
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tarification */}
          <TabsContent value="pricing" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Starter',
                  price: 'Gratuit',
                  requests: '1,000 appels/mois',
                  features: ['SDK de base', 'Documentation', 'Support communauté'],
                  color: 'border-gray-300'
                },
                {
                  name: 'Professional',
                  price: '99€/mois',
                  requests: '100,000 appels/mois',
                  features: ['SDK complet', 'Webhooks', 'Support prioritaire', 'Audit Charia'],
                  color: 'border-blue-500',
                  popular: true
                },
                {
                  name: 'Enterprise',
                  price: 'Sur devis',
                  requests: 'Illimité',
                  features: ['API dédiée', 'SLA 99.99%', 'Support 24/7', 'Conformité sur-mesure'],
                  color: 'border-purple-500'
                }
              ].map((plan, index) => (
                <Card key={plan.name} className={`relative ${plan.color} border-2`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                      Plus populaire
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="text-center">{plan.name}</CardTitle>
                    <div className="text-center">
                      <div className="text-3xl font-bold">{plan.price}</div>
                      <div className="text-sm text-gray-600">{plan.requests}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      Commencer
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-amber-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-center">Avantages Exclusifs Écosystème CED</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-bold">Clients CED Bank</h3>
                    <p className="text-sm text-gray-600">-20% sur tous les plans</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Star className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-bold">Fintechs Partenaires</h3>
                    <p className="text-sm text-gray-600">Tarifs préférentiels négociés</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-bold">Certification Halal</h3>
                    <p className="text-sm text-gray-600">Audit conformité inclus</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Commencer */}
          <TabsContent value="get-started" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Créer votre compte développeur</CardTitle>
                  <p className="text-gray-600">Accès gratuit à l'API CED Banking Halal</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <div className="font-medium">Inscription développeur</div>
                        <div className="text-sm text-gray-600">Compte gratuit en 2 minutes</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <div className="font-medium">Clés API générées</div>
                        <div className="text-sm text-gray-600">Test et production disponibles</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <div className="font-medium">Première intégration</div>
                        <div className="text-sm text-gray-600">SDK et documentation complète</div>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Key className="mr-2 h-4 w-4" />
                    Créer compte développeur
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ressources développeurs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Télécharger SDK JavaScript
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileCode className="mr-2 h-4 w-4" />
                      Documentation API complète
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Terminal className="mr-2 h-4 w-4" />
                      Exemples code GitHub
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="mr-2 h-4 w-4" />
                      Communauté Discord
                    </Button>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-bold mb-2">Support technique</h4>
                    <div className="text-sm text-gray-600">
                      <div>📧 api-support@ced-bank.com</div>
                      <div>💬 Chat 24/7 sur notre dashboard</div>
                      <div>📞 +971-4-XXX-XXXX (Dubai)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Exemple d'implémentation rapide */}
            <Card>
              <CardHeader>
                <CardTitle>Implémentation en 5 minutes</CardTitle>
                <p className="text-gray-600">Exemple complet pour votre première transaction halal</p>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                  <code className="text-sm">
                    {`// Installation
npm install @ced-bank/sdk

// Configuration
const api = new CEDBankingAPI({
  apiKey: process.env.CED_API_KEY,
  halalMode: true
});

// Premier virement halal
const result = await api.transfers.create({
  amount: 1000,
  currency: 'AED',
  description: 'Paiement halal',
  compliance_check: true
});

console.log('Transaction ID:', result.id);
console.log('Statut halal:', result.halal_compliant);`}
                  </code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}