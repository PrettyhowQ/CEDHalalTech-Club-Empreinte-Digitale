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
    averageOrderValue: 0
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
        
        return {
          totalRevenue,
          monthlyGrowth,
          dailyRevenue,
          weeklyRevenue,
          subscriptions: { students, businesses, individuals },
          revenueByCategory,
          projectedRevenue: Math.floor(totalRevenue * 1.25),
          conversionRate: 12.5 + (Math.random() * 2 - 1),
          averageOrderValue: 147 + Math.floor(Math.random() * 20)
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
                <p className="text-sm font-medium text-orange-600">Projection Annuelle</p>
                <p className="text-2xl font-bold text-orange-700">
                  {formatCurrency(metrics.projectedRevenue * 12)}
                </p>
                <p className="text-sm text-orange-600">
                  Panier moyen: {formatCurrency(metrics.averageOrderValue)}
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Répartition par type d'abonnés */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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