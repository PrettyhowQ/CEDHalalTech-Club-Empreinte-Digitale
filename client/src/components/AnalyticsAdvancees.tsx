import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3,
  TrendingUp,
  PieChart,
  Activity,
  Users,
  DollarSign,
  Globe,
  Shield,
  Zap,
  Clock,
  Target,
  AlertTriangle,
  CheckCircle,
  Calendar,
  MapPin,
  Smartphone,
  CreditCard,
  Eye,
  Download,
  Filter,
  RefreshCw,
  Settings
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CEDFooter } from './CEDFooter';

interface RealTimeMetrics {
  activeUsers: number;
  transactionsPerSecond: number;
  apiResponseTime: number;
  systemLoad: number;
  fraudDetectionRate: number;
  complianceScore: number;
  revenueToday: number;
  conversionRate: number;
}

interface UserBehaviorAnalytics {
  totalUsers: number;
  activeUsersLast24h: number;
  averageSessionDuration: number;
  topFeatures: Array<{feature: string; usage: number}>;
  deviceBreakdown: Array<{device: string; percentage: number}>;
  geographicDistribution: Array<{country: string; users: number}>;
  retentionRate: {
    day1: number;
    day7: number;
    day30: number;
  };
}

interface FinancialAnalytics {
  totalRevenue: number;
  monthlyGrowth: number;
  transactionVolume: number;
  averageTransactionValue: number;
  topRevenueSources: Array<{source: string; amount: number}>;
  costStructure: Array<{category: string; amount: number}>;
  profitability: {
    gross: number;
    net: number;
    ebitda: number;
  };
}

interface RiskAnalytics {
  fraudDetected: number;
  falsePositives: number;
  riskScore: number;
  complianceViolations: number;
  securityIncidents: number;
  dataBreaches: number;
  uptime: number;
  backupStatus: string;
}

interface PredictiveInsights {
  userGrowthPrediction: Array<{month: string; predicted: number; actual?: number}>;
  churnRiskUsers: number;
  revenueForcast: Array<{month: string; predicted: number}>;
  capacityPlanning: {
    serversNeeded: number;
    storageRequired: number;
    bandwidthProjected: number;
  };
  marketTrends: Array<{trend: string; impact: 'positive' | 'negative' | 'neutral'}>;
}

const realTimeMetrics: RealTimeMetrics = {
  activeUsers: 2847,
  transactionsPerSecond: 47.3,
  apiResponseTime: 127,
  systemLoad: 34.7,
  fraudDetectionRate: 99.2,
  complianceScore: 97.8,
  revenueToday: 89650,
  conversionRate: 12.4
};

const userBehaviorAnalytics: UserBehaviorAnalytics = {
  totalUsers: 71011,
  activeUsersLast24h: 8934,
  averageSessionDuration: 847,
  topFeatures: [
    { feature: 'Virements SWIFT', usage: 78.4 },
    { feature: 'Consultation Soldes', usage: 92.1 },
    { feature: 'Cartes Virtuelles', usage: 65.7 },
    { feature: 'Investissements Halal', usage: 43.2 },
    { feature: 'Calculateur Zakat', usage: 56.8 }
  ],
  deviceBreakdown: [
    { device: 'Mobile iOS', percentage: 45.2 },
    { device: 'Mobile Android', percentage: 38.7 },
    { device: 'Desktop', percentage: 12.1 },
    { device: 'Tablet', percentage: 4.0 }
  ],
  geographicDistribution: [
    { country: 'Suisse', users: 28450 },
    { country: 'UAE', users: 15678 },
    { country: 'France', users: 12340 },
    { country: 'Allemagne', users: 8765 },
    { country: 'Arabie Saoudite', users: 5778 }
  ],
  retentionRate: {
    day1: 89.4,
    day7: 72.6,
    day30: 56.8
  }
};

const financialAnalytics: FinancialAnalytics = {
  totalRevenue: 2847650,
  monthlyGrowth: 18.7,
  transactionVolume: 45678900,
  averageTransactionValue: 3245,
  topRevenueSources: [
    { source: 'Frais de Virements', amount: 1234567 },
    { source: 'Commissions Cartes', amount: 876543 },
    { source: 'Investissements', amount: 654321 },
    { source: 'Assurance Takaful', amount: 432190 }
  ],
  costStructure: [
    { category: 'Infrastructure', amount: 345678 },
    { category: 'Personnel', amount: 567890 },
    { category: 'Compliance', amount: 123456 },
    { category: 'Marketing', amount: 234567 }
  ],
  profitability: {
    gross: 78.5,
    net: 23.4,
    ebitda: 34.7
  }
};

const riskAnalytics: RiskAnalytics = {
  fraudDetected: 47,
  falsePositives: 12,
  riskScore: 15.2,
  complianceViolations: 0,
  securityIncidents: 2,
  dataBreaches: 0,
  uptime: 99.97,
  backupStatus: 'OK'
};

const predictiveInsights: PredictiveInsights = {
  userGrowthPrediction: [
    { month: 'Jan 2025', predicted: 85000, actual: 71011 },
    { month: 'Fév 2025', predicted: 92000 },
    { month: 'Mar 2025', predicted: 99000 },
    { month: 'Avr 2025', predicted: 107000 },
    { month: 'Mai 2025', predicted: 115000 },
    { month: 'Juin 2025', predicted: 124000 }
  ],
  churnRiskUsers: 1247,
  revenueForcast: [
    { month: 'Jan 2025', predicted: 3200000 },
    { month: 'Fév 2025', predicted: 3520000 },
    { month: 'Mar 2025', predicted: 3870000 },
    { month: 'Avr 2025', predicted: 4250000 },
    { month: 'Mai 2025', predicted: 4680000 },
    { month: 'Juin 2025', predicted: 5150000 }
  ],
  capacityPlanning: {
    serversNeeded: 24,
    storageRequired: 15.7,
    bandwidthProjected: 890
  },
  marketTrends: [
    { trend: 'Finance Islamique en croissance', impact: 'positive' },
    { trend: 'Réglementation renforcée', impact: 'neutral' },
    { trend: 'Digitalisation bancaire', impact: 'positive' },
    { trend: 'Concurrence néobanques', impact: 'negative' }
  ]
};

export function AnalyticsAdvancees() {
  const [selectedTab, setSelectedTab] = useState<'realtime' | 'users' | 'financial' | 'risk' | 'predictive'>('realtime');
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [refreshInterval, setRefreshInterval] = useState(30);

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(() => {
        // Simulation mise à jour données temps réel
        console.log('Données mises à jour');
      }, refreshInterval * 1000);
      return () => clearInterval(interval);
    }
  }, [autoRefresh, refreshInterval]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-CH', {
      style: 'currency',
      currency: 'CHF'
    }).format(amount);
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

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
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Analytics Avancées CED Bank
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Intelligence artificielle pour insights métier en temps réel
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-slate-100 text-slate-800">
              <Activity className="h-3 w-3 mr-1" />
              Temps Réel
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <BarChart3 className="h-3 w-3 mr-1" />
              ML Prédictif
            </Badge>
            <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
              <Shield className="h-3 w-3 mr-1" />
              Risk Analytics
            </Badge>
          </div>
        </motion.div>

        {/* Contrôles */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <RefreshCw className={`h-4 w-4 ${autoRefresh ? 'animate-spin text-green-600' : 'text-gray-400'}`} />
                    <span className="text-sm font-medium">
                      {autoRefresh ? 'Actualisation auto' : 'Manuel'}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAutoRefresh(!autoRefresh)}
                  >
                    {autoRefresh ? 'Désactiver' : 'Activer'}
                  </Button>
                </div>
                
                <div className="flex items-center gap-4">
                  <select
                    value={refreshInterval}
                    onChange={(e) => setRefreshInterval(Number(e.target.value))}
                    className="px-3 py-1 border border-gray-300 rounded text-sm"
                    disabled={!autoRefresh}
                  >
                    <option value={10}>10 secondes</option>
                    <option value={30}>30 secondes</option>
                    <option value={60}>1 minute</option>
                    <option value={300}>5 minutes</option>
                  </select>
                  
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Exporter
                  </Button>
                  
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700">
            {[
              { id: 'realtime', name: 'Temps Réel', icon: Activity },
              { id: 'users', name: 'Comportement Users', icon: Users },
              { id: 'financial', name: 'Analytics Financier', icon: DollarSign },
              { id: 'risk', name: 'Gestion Risques', icon: Shield },
              { id: 'predictive', name: 'IA Prédictive', icon: TrendingUp }
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={selectedTab === tab.id ? "default" : "ghost"}
                onClick={() => setSelectedTab(tab.id as any)}
                className={selectedTab === tab.id ? "bg-slate-600 hover:bg-slate-700" : ""}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.name}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Métriques Temps Réel */}
        {selectedTab === 'realtime' && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-2 border-green-200 dark:border-green-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Utilisateurs Actifs</p>
                      <p className="text-3xl font-bold text-green-600">{realTimeMetrics.activeUsers.toLocaleString()}</p>
                    </div>
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center text-xs text-green-600">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +12.5% vs hier
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Transactions/sec</p>
                      <p className="text-3xl font-bold text-blue-600">{realTimeMetrics.transactionsPerSecond}</p>
                    </div>
                    <Zap className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="mt-4">
                    <Progress value={realTimeMetrics.transactionsPerSecond} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 dark:border-purple-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Revenus Aujourd'hui</p>
                      <p className="text-3xl font-bold text-purple-600">{formatCurrency(realTimeMetrics.revenueToday)}</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center text-xs text-purple-600">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +8.3% vs moyenne
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 dark:border-orange-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Score Conformité</p>
                      <p className="text-3xl font-bold text-orange-600">{realTimeMetrics.complianceScore}%</p>
                    </div>
                    <Shield className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="mt-4">
                    <Progress value={realTimeMetrics.complianceScore} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Système */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    Performance Système
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Temps Réponse API</span>
                      <span className="font-bold">{realTimeMetrics.apiResponseTime}ms</span>
                    </div>
                    <Progress value={(500 - realTimeMetrics.apiResponseTime) / 5} className="h-2" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Charge Système</span>
                      <span className="font-bold">{realTimeMetrics.systemLoad}%</span>
                    </div>
                    <Progress value={realTimeMetrics.systemLoad} className="h-2" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Détection Fraude</span>
                      <span className="font-bold text-green-600">{realTimeMetrics.fraudDetectionRate}%</span>
                    </div>
                    <Progress value={realTimeMetrics.fraudDetectionRate} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-600" />
                    KPIs Métier
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: 'Taux Conversion', value: `${realTimeMetrics.conversionRate}%`, target: 15, current: realTimeMetrics.conversionRate },
                    { label: 'Satisfaction Client', value: '4.8/5', target: 5, current: 4.8 * 20 },
                    { label: 'Rétention 30j', value: '89.2%', target: 100, current: 89.2 },
                    { label: 'NPS Score', value: '+67', target: 100, current: 67 }
                  ].map((kpi, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{kpi.label}</span>
                        <span className="font-bold">{kpi.value}</span>
                      </div>
                      <Progress value={kpi.current} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </motion.section>
        )}

        {/* Analytics Comportement Utilisateurs */}
        {selectedTab === 'users' && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Utilisateurs Totaux</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {userBehaviorAnalytics.totalUsers.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">
                    +{userBehaviorAnalytics.activeUsersLast24h.toLocaleString()} actifs 24h
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Session Moyenne</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {formatDuration(userBehaviorAnalytics.averageSessionDuration)}
                  </div>
                  <div className="text-sm text-gray-600">
                    +15% vs mois dernier
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Rétention 30j</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {userBehaviorAnalytics.retentionRate.day30}%
                  </div>
                  <div className="text-sm text-gray-600">
                    Objectif: 60%
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    Fonctionnalités Populaires
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userBehaviorAnalytics.topFeatures.map((feature, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{feature.feature}</span>
                          <span className="font-bold">{feature.usage}%</span>
                        </div>
                        <Progress value={feature.usage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-green-600" />
                    Répartition Appareils
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userBehaviorAnalytics.deviceBreakdown.map((device, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="font-medium">{device.device}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold">{device.percentage}%</span>
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-600 h-2 rounded-full" 
                              style={{ width: `${device.percentage}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>
        )}

        {/* Analytics Financier */}
        {selectedTab === 'financial' && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {formatCurrency(financialAnalytics.totalRevenue)}
                  </div>
                  <p className="text-sm text-gray-600">Revenus Totaux</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    +{financialAnalytics.monthlyGrowth}%
                  </div>
                  <p className="text-sm text-gray-600">Croissance Mensuelle</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {formatCurrency(financialAnalytics.averageTransactionValue)}
                  </div>
                  <p className="text-sm text-gray-600">Panier Moyen</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    {financialAnalytics.profitability.net}%
                  </div>
                  <p className="text-sm text-gray-600">Marge Nette</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Sources de Revenus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {financialAnalytics.topRevenueSources.map((source, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{source.source}</span>
                        <span className="font-bold">{formatCurrency(source.amount)}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-red-600" />
                    Structure des Coûts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {financialAnalytics.costStructure.map((cost, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{cost.category}</span>
                        <span className="font-bold text-red-600">{formatCurrency(cost.amount)}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>
        )}

        {/* Gestion des Risques */}
        {selectedTab === 'risk' && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className={`border-2 ${riskAnalytics.fraudDetected > 0 ? 'border-red-200' : 'border-green-200'}`}>
                <CardContent className="p-6 text-center">
                  <div className={`text-2xl font-bold mb-1 ${riskAnalytics.fraudDetected > 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {riskAnalytics.fraudDetected}
                  </div>
                  <p className="text-sm text-gray-600">Fraudes Détectées</p>
                  <AlertTriangle className={`h-6 w-6 mx-auto mt-2 ${riskAnalytics.fraudDetected > 0 ? 'text-red-600' : 'text-green-600'}`} />
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {riskAnalytics.riskScore}
                  </div>
                  <p className="text-sm text-gray-600">Score Risque Global</p>
                  <Shield className="h-6 w-6 text-blue-600 mx-auto mt-2" />
                </CardContent>
              </Card>

              <Card className={`border-2 ${riskAnalytics.uptime >= 99.9 ? 'border-green-200' : 'border-yellow-200'}`}>
                <CardContent className="p-6 text-center">
                  <div className={`text-2xl font-bold mb-1 ${riskAnalytics.uptime >= 99.9 ? 'text-green-600' : 'text-yellow-600'}`}>
                    {riskAnalytics.uptime}%
                  </div>
                  <p className="text-sm text-gray-600">Disponibilité</p>
                  <Activity className={`h-6 w-6 mx-auto mt-2 ${riskAnalytics.uptime >= 99.9 ? 'text-green-600' : 'text-yellow-600'}`} />
                </CardContent>
              </Card>

              <Card className={`border-2 ${riskAnalytics.complianceViolations === 0 ? 'border-green-200' : 'border-red-200'}`}>
                <CardContent className="p-6 text-center">
                  <div className={`text-2xl font-bold mb-1 ${riskAnalytics.complianceViolations === 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {riskAnalytics.complianceViolations}
                  </div>
                  <p className="text-sm text-gray-600">Violations Conformité</p>
                  <CheckCircle className={`h-6 w-6 mx-auto mt-2 ${riskAnalytics.complianceViolations === 0 ? 'text-green-600' : 'text-red-600'}`} />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-red-600" />
                    Incidents Sécurité
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="font-medium">Violations Données</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800">0 incident</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="h-5 w-5 text-yellow-600" />
                        <span className="font-medium">Incidents Mineurs</span>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">{riskAnalytics.securityIncidents} incidents</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Activity className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">Faux Positifs</span>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">{riskAnalytics.falsePositives} détections</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-green-600" />
                    Surveillance Continue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { service: 'Monitoring Fraude', status: 'Actif', uptime: 99.9 },
                      { service: 'Backup Automatique', status: riskAnalytics.backupStatus, uptime: 100 },
                      { service: 'Audit Trail', status: 'Actif', uptime: 99.8 },
                      { service: 'Compliance Check', status: 'Actif', uptime: 99.7 }
                    ].map((service, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{service.service}</span>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-100 text-green-800">{service.status}</Badge>
                          <span className="text-xs text-gray-500">{service.uptime}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>
        )}

        {/* IA Prédictive */}
        {selectedTab === 'predictive' && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                  Prédictions Croissance Utilisateurs
                </CardTitle>
                <CardDescription>
                  Modèle ML basé sur 24 mois de données historiques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {predictiveInsights.userGrowthPrediction.map((prediction, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                      <span className="font-medium">{prediction.month}</span>
                      <div className="flex items-center gap-4">
                        {prediction.actual && (
                          <div className="text-sm">
                            <span className="text-gray-500">Réel: </span>
                            <span className="font-bold text-green-600">{prediction.actual.toLocaleString()}</span>
                          </div>
                        )}
                        <div className="text-sm">
                          <span className="text-gray-500">Prédit: </span>
                          <span className="font-bold text-blue-600">{prediction.predicted.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-orange-600" />
                    Analyse Churn Risk
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      {predictiveInsights.churnRiskUsers.toLocaleString()}
                    </div>
                    <p className="text-sm text-gray-600">Utilisateurs à risque de churn</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Risque Élevé</span>
                        <span className="font-bold text-red-600">347 users</span>
                      </div>
                    </div>
                    <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Risque Moyen</span>
                        <span className="font-bold text-yellow-600">623 users</span>
                      </div>
                    </div>
                    <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Risque Faible</span>
                        <span className="font-bold text-orange-600">277 users</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-indigo-600" />
                    Tendances Marché
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {predictiveInsights.marketTrends.map((trend, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                        <span className="text-sm font-medium">{trend.trend}</span>
                        <Badge className={
                          trend.impact === 'positive' ? 'bg-green-100 text-green-800' :
                          trend.impact === 'negative' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }>
                          {trend.impact === 'positive' ? 'Positif' :
                           trend.impact === 'negative' ? 'Négatif' :
                           'Neutre'}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>
        )}
      </div>
      
      <CEDFooter />
    </div>
  );
}