import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Euro, 
  Users, 
  Target,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  CreditCard,
  Wallet,
  PieChart,
  BarChart3,
  Activity,
  Zap,
  Globe,
  Building2,
  GraduationCap,
  Crown,
  Star,
  Rocket
} from 'lucide-react';

interface RevenueMetrics {
  totalRevenue: number;
  monthlyGrowth: number;
  dailyRevenue: number;
  weeklyRevenue: number;
  subscriptions: {
    students: number;
    businesses: number;
    individuals: number;
  };
  revenueByCategory: {
    [key: string]: number;
  };
  projectedRevenue: number;
  conversionRate: number;
  averageOrderValue: number;
  // Nouvelles métriques avancées
  arpu: number; // Average Revenue Per User
  cac: number; // Customer Acquisition Cost
  ltv: number; // Lifetime Value
  retentionRate: number;
  churnRate: number;
  conversionByChannel: {
    [key: string]: number;
  };
  revenuePerLearner: number;
  monthlyRecurringRevenue: number;
  alerts: {
    type: 'success' | 'warning' | 'danger';
    message: string;
  }[];
}

export function RevenueAnalytics() {
  const [metrics, setMetrics] = useState<RevenueMetrics>({
    totalRevenue: 0,
    monthlyGrowth: 0,
    dailyRevenue: 0,
    weeklyRevenue: 0,
    subscriptions: {
      students: 0,
      businesses: 0,
      individuals: 0
    },
    revenueByCategory: {},
    projectedRevenue: 0,
    conversionRate: 0,
    averageOrderValue: 0,
    arpu: 0,
    cac: 0,
    ltv: 0,
    retentionRate: 0,
    churnRate: 0,
    conversionByChannel: {},
    revenuePerLearner: 0,
    monthlyRecurringRevenue: 0,
    alerts: []
  });

  const [isRealTime, setIsRealTime] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Simulation temps réel des revenus
  useEffect(() => {
    if (!isRealTime) return;

    const interval = setInterval(() => {
      setMetrics(prev => {
        const baseRevenue = 2847629; // Base revenue CED
        const growthRate = 1 + (Math.random() * 0.02 - 0.01); // -1% à +1% de variation
        const currentHour = new Date().getHours();
        const peakHours = currentHour >= 9 && currentHour <= 18;
        const activityMultiplier = peakHours ? 1.5 : 0.8;
        
        // Nouveaux revenus générés (simulation réaliste)
        const newRevenue = Math.floor(Math.random() * 500 * activityMultiplier) + 50;
        const totalRevenue = Math.floor(baseRevenue * growthRate) + newRevenue;
        
        // Growth calculation
        const monthlyGrowth = ((totalRevenue - baseRevenue) / baseRevenue) * 100;
        
        // Daily and weekly calculations
        const dailyRevenue = Math.floor(totalRevenue / 30) + Math.floor(Math.random() * 1000);
        const weeklyRevenue = dailyRevenue * 7;
        
        // Subscriptions en temps réel
        const students = 15420 + Math.floor(Math.random() * 50);
        const businesses = 847 + Math.floor(Math.random() * 5);
        const individuals = 18955 + Math.floor(Math.random() * 30);
        
        // Revenue by category (simulation)
        const revenueByCategory = {
          'IA & Technologie': Math.floor(totalRevenue * 0.35),
          'Management': Math.floor(totalRevenue * 0.20),
          'Marketing Digital': Math.floor(totalRevenue * 0.18),
          'Développement': Math.floor(totalRevenue * 0.15),
          'Design & UX': Math.floor(totalRevenue * 0.12)
        };

        // Métriques avancées
        const totalUsers = students + businesses + individuals;
        const arpu = Math.floor(totalRevenue / totalUsers);
        const cac = 45 + Math.floor(Math.random() * 15); // Customer Acquisition Cost
        const ltv = arpu * 24; // Lifetime Value (2 ans)
        const retentionRate = 94.2 + (Math.random() * 2 - 1);
        const churnRate = 100 - retentionRate;
        const revenuePerLearner = Math.floor(totalRevenue / 34221);
        const monthlyRecurringRevenue = Math.floor(totalRevenue * 0.85); // 85% récurrent

        // Conversion par canal
        const conversionByChannel = {
          'Recherche Organique': 15.8 + (Math.random() * 2 - 1),
          'Réseaux Sociaux': 8.3 + (Math.random() * 2 - 1),
          'Email Marketing': 22.1 + (Math.random() * 2 - 1),
          'Partenariats': 31.7 + (Math.random() * 2 - 1),
          'Publicité Payante': 12.4 + (Math.random() * 2 - 1)
        };

        // Alertes intelligentes
        const alerts = [];
        if (monthlyGrowth > 50) {
          alerts.push({
            type: 'success' as const,
            message: 'Croissance exceptionnelle détectée ! Opportunité d\'expansion'
          });
        }
        if (churnRate > 7) {
          alerts.push({
            type: 'warning' as const,
            message: 'Taux de désabonnement en hausse - Action recommandée'
          });
        }
        if (cac > ltv * 0.3) {
          alerts.push({
            type: 'danger' as const,
            message: 'Coût acquisition élevé par rapport à la LTV'
          });
        }
        
        return {
          totalRevenue,
          monthlyGrowth,
          dailyRevenue,
          weeklyRevenue,
          subscriptions: { students, businesses, individuals },
          revenueByCategory,
          projectedRevenue: Math.floor(totalRevenue * 1.25),
          conversionRate: 12.5 + (Math.random() * 2 - 1),
          averageOrderValue: 147 + Math.floor(Math.random() * 20),
          arpu,
          cac,
          ltv,
          retentionRate,
          churnRate,
          conversionByChannel,
          revenuePerLearner,
          monthlyRecurringRevenue,
          alerts
        };
      });
      
      setLastUpdate(new Date());
    }, 2000); // Mise à jour toutes les 2 secondes

    return () => clearInterval(interval);
  }, [isRealTime]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('fr-FR').format(num);
  };

  const getGrowthColor = (growth: number) => {
    if (growth > 0) return 'text-green-600';
    if (growth < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const getGrowthIcon = (growth: number) => {
    if (growth > 0) return <ArrowUpRight className="h-4 w-4" />;
    if (growth < 0) return <ArrowDownRight className="h-4 w-4" />;
    return <Activity className="h-4 w-4" />;
  };

  return (
    <div className="space-y-6">
      {/* Header avec contrôles */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Tableau de Bord Financier
          </h2>
          <p className="text-gray-600">
            Club Empreinte Digitale - Revenus en temps réel
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Badge 
            variant={isRealTime ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setIsRealTime(!isRealTime)}
          >
            <Activity className="h-3 w-3 mr-1" />
            {isRealTime ? 'Temps Réel' : 'Pause'}
          </Badge>
          <p className="text-sm text-gray-500">
            Dernière MAJ: {lastUpdate.toLocaleTimeString('fr-FR')}
          </p>
        </div>
      </div>

      {/* Métriques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          animate={{ scale: isRealTime ? [1, 1.02, 1] : 1 }}
          transition={{ duration: 2, repeat: isRealTime ? Infinity : 0 }}
        >
          <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600">Chiffre d'Affaires Total</p>
                  <p className="text-3xl font-bold text-green-700">
                    {formatCurrency(metrics.totalRevenue)}
                  </p>
                  <div className={`flex items-center text-sm ${getGrowthColor(metrics.monthlyGrowth)}`}>
                    {getGrowthIcon(metrics.monthlyGrowth)}
                    <span className="ml-1">{metrics.monthlyGrowth.toFixed(2)}% ce mois</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Euro className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Revenus Journaliers</p>
                <p className="text-2xl font-bold text-blue-700">
                  {formatCurrency(metrics.dailyRevenue)}
                </p>
                <p className="text-sm text-blue-600">
                  Semaine: {formatCurrency(metrics.weeklyRevenue)}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Abonnés Actifs</p>
                <p className="text-2xl font-bold text-purple-700">
                  {formatNumber(
                    metrics.subscriptions.students + 
                    metrics.subscriptions.businesses + 
                    metrics.subscriptions.individuals
                  )}
                </p>
                <p className="text-sm text-purple-600">
                  Taux conversion: {metrics.conversionRate.toFixed(1)}%
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">MRR & Projection</p>
                <p className="text-2xl font-bold text-orange-700">
                  {formatCurrency(metrics.monthlyRecurringRevenue)}
                </p>
                <p className="text-sm text-orange-600">
                  Projection: {formatCurrency(metrics.projectedRevenue * 12)}
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alertes et métriques avancées */}
      {metrics.alerts.length > 0 && (
        <Card className="border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-yellow-600" />
              Alertes Intelligentes Temps Réel
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {metrics.alerts.map((alert, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border ${
                  alert.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' :
                  alert.type === 'warning' ? 'bg-yellow-50 border-yellow-200 text-yellow-800' :
                  'bg-red-50 border-red-200 text-red-800'
                }`}
              >
                <p className="text-sm font-medium">{alert.message}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Métriques avancées KPI */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-indigo-200 bg-indigo-50">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-indigo-100 rounded-full flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-indigo-600" />
            </div>
            <p className="text-lg font-bold text-indigo-700">{formatCurrency(metrics.arpu)}</p>
            <p className="text-xs text-gray-600">ARPU (Revenu/Utilisateur)</p>
          </CardContent>
        </Card>

        <Card className="border-pink-200 bg-pink-50">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-pink-100 rounded-full flex items-center justify-center">
              <Target className="h-6 w-6 text-pink-600" />
            </div>
            <p className="text-lg font-bold text-pink-700">{formatCurrency(metrics.cac)}</p>
            <p className="text-xs text-gray-600">CAC (Coût Acquisition)</p>
          </CardContent>
        </Card>

        <Card className="border-emerald-200 bg-emerald-50">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-emerald-100 rounded-full flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-emerald-600" />
            </div>
            <p className="text-lg font-bold text-emerald-700">{formatCurrency(metrics.ltv)}</p>
            <p className="text-xs text-gray-600">LTV (Valeur à Vie)</p>
          </CardContent>
        </Card>

        <Card className="border-violet-200 bg-violet-50">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-violet-100 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-violet-600" />
            </div>
            <p className="text-lg font-bold text-violet-700">{metrics.retentionRate.toFixed(1)}%</p>
            <p className="text-xs text-gray-600">Taux Rétention</p>
          </CardContent>
        </Card>
      </div>

      {/* Répartition par type d'abonnés et canaux */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              Répartition des Abonnés
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium">Étudiants</span>
                </div>
                <span className="text-sm font-bold">{formatNumber(metrics.subscriptions.students)}</span>
              </div>
              <Progress value={65} className="h-2" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium">Entreprises</span>
                </div>
                <span className="text-sm font-bold">{formatNumber(metrics.subscriptions.businesses)}</span>
              </div>
              <Progress value={15} className="h-2" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Particuliers</span>
                </div>
                <span className="text-sm font-bold">{formatNumber(metrics.subscriptions.individuals)}</span>
              </div>
              <Progress value={20} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-green-600" />
              Revenus par Catégorie
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {Object.entries(metrics.revenueByCategory).map(([category, revenue], index) => (
              <div key={category} className="flex items-center justify-between">
                <span className="text-sm font-medium">{category}</span>
                <span className="text-sm font-bold text-green-600">
                  {formatCurrency(revenue)}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-purple-600" />
              Conversion par Canal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(metrics.conversionByChannel).map(([channel, rate]) => (
              <div key={channel} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{channel}</span>
                  <span className="text-sm font-bold text-purple-600">{rate.toFixed(1)}%</span>
                </div>
                <Progress value={rate} className="h-2" />
              </div>
            ))}
            <div className="pt-3 border-t">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-800">Conversion moyenne</span>
                <span className="text-sm font-bold text-purple-700">
                  {Object.values(metrics.conversionByChannel).reduce((a, b) => a + b, 0) / Object.values(metrics.conversionByChannel).length}%
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Métriques avancées */}
      <Card className="border-2 border-gold-200 bg-gradient-to-r from-yellow-50 to-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-yellow-600" />
            Performance Exceptionnelle CED
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900">Croissance Record</h4>
              <p className="text-2xl font-bold text-green-600">+847%</p>
              <p className="text-sm text-gray-600">Croissance annuelle</p>
            </div>

            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900">Satisfaction Client</h4>
              <p className="text-2xl font-bold text-blue-600">98.7%</p>
              <p className="text-sm text-gray-600">Note de satisfaction</p>
            </div>

            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                <Rocket className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900">Innovation Leader</h4>
              <p className="text-2xl font-bold text-purple-600">#1</p>
              <p className="text-sm text-gray-600">IA éthique France</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}