import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Zap,
  Globe,
  Building,
  TrendingUp,
  Users,
  DollarSign,
  Shield,
  Activity,
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  AlertTriangle,
  Settings,
  Download,
  Upload,
  RefreshCw,
  Eye,
  Link,
  Smartphone,
  CreditCard,
  Database,
  Cloud,
  Code,
  Coins
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CEDFooter } from './CEDFooter';

interface StrategicPartner {
  id: string;
  name: string;
  type: 'bank' | 'tech' | 'fintech' | 'government' | 'islamic' | 'education';
  logo: string;
  country: string;
  partnership: 'active' | 'planned' | 'negotiation' | 'pilot';
  services: string[];
  integrationStatus: number;
  revenue: number;
  customers: number;
  startDate: Date;
  nextMilestone: string;
  riskLevel: 'low' | 'medium' | 'high';
  strategicValue: 'critical' | 'high' | 'medium' | 'low';
}

interface APIIntegration {
  id: string;
  name: string;
  provider: string;
  category: 'payment' | 'banking' | 'compliance' | 'data' | 'ai' | 'identity';
  status: 'active' | 'testing' | 'development' | 'planned';
  uptime: number;
  responseTime: number;
  requestsToday: number;
  lastUpdate: Date;
  documentation: string;
  cost: number;
  businessValue: number;
}

interface RegionalExpansion {
  id: string;
  region: string;
  country: string;
  market: string;
  timeline: string;
  status: 'launched' | 'in-progress' | 'planned' | 'research';
  population: number;
  marketPotential: number;
  competition: 'low' | 'medium' | 'high';
  regulatoryComplexity: 'low' | 'medium' | 'high';
  localPartners: string[];
  estimatedRevenue: number;
  requiredInvestment: number;
}

const strategicPartners: StrategicPartner[] = [
  {
    id: 'emirates-nbd',
    name: 'Emirates NBD',
    type: 'bank',
    logo: '/api/placeholder/80/80',
    country: 'UAE',
    partnership: 'active',
    services: ['SWIFT Transfers', 'Corporate Banking', 'Trade Finance'],
    integrationStatus: 95,
    revenue: 2340000,
    customers: 15678,
    startDate: new Date('2024-03-15'),
    nextMilestone: 'Digital Wallet Integration Q1 2025',
    riskLevel: 'low',
    strategicValue: 'critical'
  },
  {
    id: 'al-baraka-banking',
    name: 'Al Baraka Banking Group',
    type: 'islamic',
    logo: '/api/placeholder/80/80',
    country: 'Bahrain',
    partnership: 'active',
    services: ['Islamic Banking', 'Takaful Insurance', 'Sukuk'],
    integrationStatus: 87,
    revenue: 1890000,
    customers: 12450,
    startDate: new Date('2024-06-01'),
    nextMilestone: 'Takaful Cross-selling Q2 2025',
    riskLevel: 'low',
    strategicValue: 'critical'
  },
  {
    id: 'microsoft-azure',
    name: 'Microsoft Azure',
    type: 'tech',
    logo: '/api/placeholder/80/80',
    country: 'USA',
    partnership: 'active',
    services: ['Cloud Infrastructure', 'AI Services', 'Security'],
    integrationStatus: 92,
    revenue: 890000,
    customers: 71011,
    startDate: new Date('2024-01-10'),
    nextMilestone: 'AI Copilot Integration Q1 2025',
    riskLevel: 'low',
    strategicValue: 'high'
  },
  {
    id: 'stripe',
    name: 'Stripe',
    type: 'fintech',
    logo: '/api/placeholder/80/80',
    country: 'USA',
    partnership: 'active',
    services: ['Payment Processing', 'Multi-currency', 'APIs'],
    integrationStatus: 98,
    revenue: 567000,
    customers: 34500,
    startDate: new Date('2024-02-20'),
    nextMilestone: 'BNPL Integration Q2 2025',
    riskLevel: 'low',
    strategicValue: 'high'
  },
  {
    id: 'finma-switzerland',
    name: 'FINMA',
    type: 'government',
    logo: '/api/placeholder/80/80',
    country: 'Switzerland',
    partnership: 'negotiation',
    services: ['Banking License', 'Compliance', 'Regulatory'],
    integrationStatus: 65,
    revenue: 0,
    customers: 0,
    startDate: new Date('2024-09-01'),
    nextMilestone: 'Final License Approval Q2 2025',
    riskLevel: 'medium',
    strategicValue: 'critical'
  },
  {
    id: 'al-azhar-university',
    name: 'Al-Azhar University',
    type: 'education',
    logo: '/api/placeholder/80/80',
    country: 'Egypt',
    partnership: 'planned',
    services: ['Sharia Advisory', 'Education', 'Certification'],
    integrationStatus: 25,
    revenue: 0,
    customers: 0,
    startDate: new Date('2025-01-01'),
    nextMilestone: 'Partnership Agreement Q1 2025',
    riskLevel: 'low',
    strategicValue: 'medium'
  }
];

const apiIntegrations: APIIntegration[] = [
  {
    id: 'swift-network',
    name: 'SWIFT Network',
    provider: 'SWIFT',
    category: 'banking',
    status: 'active',
    uptime: 99.8,
    responseTime: 850,
    requestsToday: 1247,
    lastUpdate: new Date('2024-12-20'),
    documentation: '/docs/swift-integration',
    cost: 45000,
    businessValue: 2340000
  },
  {
    id: 'openai-gpt4',
    name: 'OpenAI GPT-4o',
    provider: 'OpenAI',
    category: 'ai',
    status: 'testing',
    uptime: 0,
    responseTime: 0,
    requestsToday: 0,
    lastUpdate: new Date('2024-12-15'),
    documentation: '/docs/openai-integration',
    cost: 15000,
    businessValue: 500000
  },
  {
    id: 'twilio-sms',
    name: 'Twilio SMS',
    provider: 'Twilio',
    category: 'identity',
    status: 'active',
    uptime: 99.9,
    responseTime: 1200,
    requestsToday: 445,
    lastUpdate: new Date('2024-12-22'),
    documentation: '/docs/twilio-sms',
    cost: 8900,
    businessValue: 150000
  },
  {
    id: 'jumio-kyc',
    name: 'Jumio KYC',
    provider: 'Jumio',
    category: 'compliance',
    status: 'active',
    uptime: 99.5,
    responseTime: 2340,
    requestsToday: 167,
    lastUpdate: new Date('2024-12-18'),
    documentation: '/docs/jumio-kyc',
    cost: 23400,
    businessValue: 890000
  },
  {
    id: 'currencylayer',
    name: 'Currency Layer',
    provider: 'APILayer',
    category: 'data',
    status: 'active',
    uptime: 99.7,
    responseTime: 95,
    requestsToday: 2156,
    lastUpdate: new Date('2024-12-23'),
    documentation: '/docs/currency-api',
    cost: 2400,
    businessValue: 450000
  },
  {
    id: 'aws-compliance',
    name: 'AWS Compliance',
    provider: 'Amazon Web Services',
    category: 'compliance',
    status: 'development',
    uptime: 95,
    responseTime: 340,
    requestsToday: 78,
    lastUpdate: new Date('2024-12-10'),
    documentation: '/docs/aws-compliance',
    cost: 12000,
    businessValue: 1200000
  }
];

const regionalExpansions: RegionalExpansion[] = [
  {
    id: 'gcc-expansion',
    region: 'GCC',
    country: 'UAE',
    market: 'Dubai Financial District',
    timeline: 'Q1 2025',
    status: 'in-progress',
    population: 9900000,
    marketPotential: 89,
    competition: 'high',
    regulatoryComplexity: 'medium',
    localPartners: ['Emirates NBD', 'ADIB', 'DIB'],
    estimatedRevenue: 15600000,
    requiredInvestment: 4500000
  },
  {
    id: 'mena-expansion',
    region: 'MENA',
    country: 'Saudi Arabia',
    market: 'Riyadh Financial Center',
    timeline: 'Q3 2025',
    status: 'planned',
    population: 35000000,
    marketPotential: 92,
    competition: 'medium',
    regulatoryComplexity: 'high',
    localPartners: ['Al Rajhi Bank', 'SNB', 'Alinma Bank'],
    estimatedRevenue: 28900000,
    requiredInvestment: 8700000
  },
  {
    id: 'europe-expansion',
    region: 'Europe',
    country: 'France',
    market: 'Paris La Défense',
    timeline: 'Q4 2025',
    status: 'research',
    population: 67000000,
    marketPotential: 76,
    competition: 'high',
    regulatoryComplexity: 'high',
    localPartners: ['BNP Paribas', 'Société Générale'],
    estimatedRevenue: 12400000,
    requiredInvestment: 6200000
  },
  {
    id: 'africa-expansion',
    region: 'Africa',
    country: 'Morocco',
    market: 'Casablanca Finance City',
    timeline: 'Q2 2026',
    status: 'research',
    population: 37000000,
    marketPotential: 68,
    competition: 'low',
    regulatoryComplexity: 'medium',
    localPartners: ['Attijariwafa Bank', 'BMCE Bank'],
    estimatedRevenue: 8900000,
    requiredInvestment: 3400000
  }
];

export function IntegrationsStrategiques() {
  const [selectedTab, setSelectedTab] = useState<'partners' | 'apis' | 'expansion' | 'roadmap'>('partners');

  const getPartnershipColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'negotiation': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'planned': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'pilot': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': case 'launched': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'testing': case 'in-progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'development': case 'planned': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'research': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-CH', {
      style: 'currency',
      currency: 'CHF',
      notation: 'compact'
    }).format(amount);
  };

  const totalPartnerRevenue = strategicPartners.reduce((acc, partner) => acc + partner.revenue, 0);
  const activePartnerships = strategicPartners.filter(p => p.partnership === 'active').length;
  const totalAPICost = apiIntegrations.reduce((acc, api) => acc + api.cost, 0);
  const totalAPIValue = apiIntegrations.reduce((acc, api) => acc + api.businessValue, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Intégrations Stratégiques
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Écosystème de partenaires, APIs, et expansion internationale
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
              <Building className="h-3 w-3 mr-1" />
              {activePartnerships} Partenaires Actifs
            </Badge>
            <Badge variant="secondary" className="bg-teal-100 text-teal-800">
              <Zap className="h-3 w-3 mr-1" />
              {apiIntegrations.filter(api => api.status === 'active').length} APIs Live
            </Badge>
            <Badge variant="secondary" className="bg-cyan-100 text-cyan-800">
              <Globe className="h-3 w-3 mr-1" />
              {regionalExpansions.length} Marchés Ciblés
            </Badge>
          </div>
        </motion.div>

        {/* Métriques Globales */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-2 border-emerald-200 dark:border-emerald-800">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  {formatCurrency(totalPartnerRevenue)}
                </div>
                <p className="text-sm text-emerald-700 dark:text-emerald-300">Revenus Partenaires</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-200 dark:border-teal-800">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">
                  {Math.round((totalAPIValue / totalAPICost) * 100) / 100}x
                </div>
                <p className="text-sm text-teal-700 dark:text-teal-300">ROI APIs</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-cyan-200 dark:border-cyan-800">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">
                  {regionalExpansions.filter(r => r.status === 'in-progress' || r.status === 'launched').length}
                </div>
                <p className="text-sm text-cyan-700 dark:text-cyan-300">Marchés Actifs</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {Math.round(apiIntegrations.filter(api => api.status === 'active').reduce((acc, api) => acc + api.uptime, 0) / apiIntegrations.filter(api => api.status === 'active').length * 10) / 10}%
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-300">Disponibilité APIs</p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Navigation Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700">
            {[
              { id: 'partners', name: 'Partenaires Stratégiques', icon: Building },
              { id: 'apis', name: 'Intégrations APIs', icon: Code },
              { id: 'expansion', name: 'Expansion Régionale', icon: Globe },
              { id: 'roadmap', name: 'Roadmap 2025', icon: Calendar }
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={selectedTab === tab.id ? "default" : "ghost"}
                onClick={() => setSelectedTab(tab.id as any)}
                className={selectedTab === tab.id ? "bg-emerald-600 hover:bg-emerald-700" : ""}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.name}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Partenaires Stratégiques */}
        {selectedTab === 'partners' && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {strategicPartners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="w-16 h-16 rounded-lg object-cover border-2 border-gray-200"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold text-lg">{partner.name}</h3>
                            <Badge className={getPartnershipColor(partner.partnership)}>
                              {partner.partnership === 'active' ? 'Actif' :
                               partner.partnership === 'negotiation' ? 'Négociation' :
                               partner.partnership === 'planned' ? 'Planifié' :
                               'Pilote'}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {partner.country}
                            </span>
                            <Badge variant="outline" className="text-xs">
                              {partner.type}
                            </Badge>
                            <Badge className={`text-xs ${partner.strategicValue === 'critical' ? 'bg-red-100 text-red-800' : 
                                                        partner.strategicValue === 'high' ? 'bg-orange-100 text-orange-800' : 
                                                        'bg-gray-100 text-gray-800'}`}>
                              {partner.strategicValue}
                            </Badge>
                          </div>
                          
                          <div className="space-y-2">
                            <div>
                              <span className="text-sm font-medium">Services:</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {partner.services.map((service, i) => (
                                  <Badge key={i} variant="secondary" className="text-xs">
                                    {service}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Intégration</span>
                            <span className="font-bold">{partner.integrationStatus}%</span>
                          </div>
                          <Progress value={partner.integrationStatus} className="h-2" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Revenus générés</span>
                            <p className="font-bold text-emerald-600">{formatCurrency(partner.revenue)}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Clients</span>
                            <p className="font-bold">{partner.customers.toLocaleString()}</p>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <Clock className="h-4 w-4 text-blue-600" />
                            <span className="text-sm font-medium">Prochain jalon</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{partner.nextMilestone}</p>
                        </div>
                        
                        <div className="flex items-center justify-between pt-2">
                          <Badge className={getRiskColor(partner.riskLevel)} variant="outline">
                            Risque {partner.riskLevel}
                          </Badge>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Settings className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Intégrations APIs */}
        {selectedTab === 'apis' && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {apiIntegrations.map((api, index) => (
                <motion.div
                  key={api.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-lg">{api.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{api.provider}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(api.status)}>
                            {api.status === 'active' ? 'Actif' :
                             api.status === 'testing' ? 'Test' :
                             api.status === 'development' ? 'Développement' :
                             'Planifié'}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">{api.category}</p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        {api.status === 'active' && (
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <div className={`text-2xl font-bold ${api.uptime >= 99.5 ? 'text-green-600' : 'text-yellow-600'}`}>
                                {api.uptime}%
                              </div>
                              <p className="text-xs text-gray-500">Uptime</p>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-blue-600">
                                {api.responseTime}ms
                              </div>
                              <p className="text-xs text-gray-500">Réponse</p>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-purple-600">
                                {api.requestsToday.toLocaleString()}
                              </div>
                              <p className="text-xs text-gray-500">Requêtes/jour</p>
                            </div>
                          </div>
                        )}
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Coût mensuel</span>
                            <p className="font-bold text-red-600">{formatCurrency(api.cost)}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Valeur business</span>
                            <p className="font-bold text-green-600">{formatCurrency(api.businessValue)}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">ROI</span>
                            <span className="font-bold text-emerald-600">
                              {Math.round((api.businessValue / api.cost) * 100) / 100}x
                            </span>
                          </div>
                          <Progress value={Math.min((api.businessValue / api.cost) * 10, 100)} className="h-2" />
                        </div>
                        
                        <div className="flex items-center justify-between pt-2 border-t">
                          <span className="text-xs text-gray-500">
                            Mis à jour: {api.lastUpdate.toLocaleDateString('fr-FR')}
                          </span>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Link className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Database className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Expansion Régionale */}
        {selectedTab === 'expansion' && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {regionalExpansions.map((expansion, index) => (
                <motion.div
                  key={expansion.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-lg">{expansion.region}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{expansion.country}</p>
                          <p className="text-xs text-gray-500">{expansion.market}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(expansion.status)}>
                            {expansion.status === 'launched' ? 'Lancé' :
                             expansion.status === 'in-progress' ? 'En cours' :
                             expansion.status === 'planned' ? 'Planifié' :
                             'Recherche'}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">{expansion.timeline}</p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Population</span>
                            <p className="font-bold">{expansion.population.toLocaleString()}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Potentiel marché</span>
                            <p className="font-bold text-blue-600">{expansion.marketPotential}/100</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Potentiel de marché</span>
                            <span className="font-bold">{expansion.marketPotential}%</span>
                          </div>
                          <Progress value={expansion.marketPotential} className="h-2" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Revenus estimés</span>
                            <p className="font-bold text-green-600">{formatCurrency(expansion.estimatedRevenue)}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Investissement requis</span>
                            <p className="font-bold text-red-600">{formatCurrency(expansion.requiredInvestment)}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <span className="text-xs text-gray-500">Concurrence</span>
                            <Badge className={getRiskColor(expansion.competition)} variant="outline">
                              {expansion.competition}
                            </Badge>
                          </div>
                          <div>
                            <span className="text-xs text-gray-500">Réglementation</span>
                            <Badge className={getRiskColor(expansion.regulatoryComplexity)} variant="outline">
                              {expansion.regulatoryComplexity}
                            </Badge>
                          </div>
                        </div>
                        
                        <div>
                          <span className="text-sm font-medium">Partenaires locaux</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {expansion.localPartners.map((partner, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {partner}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg">
                          <div className="text-sm font-medium text-emerald-800 dark:text-emerald-200 mb-1">
                            ROI Projeté
                          </div>
                          <div className="text-2xl font-bold text-emerald-600">
                            {Math.round((expansion.estimatedRevenue / expansion.requiredInvestment) * 100) / 100}x
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Roadmap 2025 */}
        {selectedTab === 'roadmap' && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Calendar className="h-6 w-6 text-emerald-600" />
                  Roadmap Intégrations 2025
                </CardTitle>
                <CardDescription>
                  Planification stratégique des partenariats et expansions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {[
                    {
                      quarter: 'Q1 2025',
                      milestones: [
                        'Finalisation licence bancaire FINMA Suisse',
                        'Lancement UAE avec Emirates NBD',
                        'Intégration OpenAI GPT-4o complète',
                        'Partenariat Al-Azhar University signé'
                      ],
                      color: 'emerald'
                    },
                    {
                      quarter: 'Q2 2025',
                      milestones: [
                        'Expansion Arabie Saoudite (SAMA)',
                        'Cross-selling Takaful Al Baraka',
                        'API Buy Now Pay Later Stripe',
                        'Lancement Wallet Digital UAE'
                      ],
                      color: 'blue'
                    },
                    {
                      quarter: 'Q3 2025',
                      milestones: [
                        'Ouverture bureau Riyadh',
                        'Partenariat technologique AWS',
                        'Intégration complète Microsoft Copilot',
                        'Certification Sharia internationale'
                      ],
                      color: 'purple'
                    },
                    {
                      quarter: 'Q4 2025',
                      milestones: [
                        'Expansion France (Paris La Défense)',
                        'IPO préparation documentation',
                        'Acquisition fintech régionale',
                        'Plateforme blockchain Zakat'
                      ],
                      color: 'orange'
                    }
                  ].map((quarter, i) => (
                    <div key={i} className="border-l-4 border-l-emerald-500 pl-6">
                      <h3 className="text-xl font-bold mb-4 text-emerald-800 dark:text-emerald-200">
                        {quarter.quarter}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {quarter.milestones.map((milestone, j) => (
                          <div key={j} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium">{milestone}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Investissements Prévus */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  Investissements Stratégiques 2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      CHF 27.1M
                    </div>
                    <p className="text-sm text-gray-600">Investissement Total</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      CHF 89.4M
                    </div>
                    <p className="text-sm text-gray-600">Revenus Projetés</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      3.3x
                    </div>
                    <p className="text-sm text-gray-600">ROI Attendu</p>
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