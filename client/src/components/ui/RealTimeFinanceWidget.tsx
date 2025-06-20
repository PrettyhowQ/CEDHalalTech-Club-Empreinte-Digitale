import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Coins, TrendingUp, TrendingDown, DollarSign, Euro, RefreshCw, Zap, Clock } from 'lucide-react';

interface FinanceData {
  timestamp: Date;
  totalRevenue: number;
  monthlyGrowth: number;
  activeStudents: number;
  conversionRate: number;
  avgRevenuePerUser: number;
  projectedMonthly: number;
}

interface LiveMetric {
  id: string;
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
  icon: React.ReactNode;
  color: string;
}

export function RealTimeFinanceWidget({ variant = 'full' }: { variant?: 'full' | 'compact' }) {
  const [isLive, setIsLive] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [financeData, setFinanceData] = useState<FinanceData>({
    timestamp: new Date(),
    totalRevenue: 8570000,
    monthlyGrowth: 12.8,
    activeStudents: 34221,
    conversionRate: 23.4,
    avgRevenuePerUser: 250.75,
    projectedMonthly: 714167
  });

  const [liveMetrics, setLiveMetrics] = useState<LiveMetric[]>([
    {
      id: 'revenue',
      label: 'CA Temps Réel',
      value: '8.57M€',
      change: 12.8,
      trend: 'up',
      icon: <Euro className="h-4 w-4" />,
      color: 'text-green-600'
    },
    {
      id: 'students',
      label: 'Apprenants Actifs',
      value: '34,221',
      change: 5.2,
      trend: 'up',
      icon: <TrendingUp className="h-4 w-4" />,
      color: 'text-blue-600'
    },
    {
      id: 'conversion',
      label: 'Taux Conversion',
      value: '23.4%',
      change: 2.1,
      trend: 'up',
      icon: <Zap className="h-4 w-4" />,
      color: 'text-purple-600'
    },
    {
      id: 'arpu',
      label: 'ARPU Mensuel',
      value: '250.75€',
      change: 8.9,
      trend: 'up',
      icon: <DollarSign className="h-4 w-4" />,
      color: 'text-orange-600'
    }
  ]);

  // Simulation de données en temps réel
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setFinanceData(prev => ({
        ...prev,
        timestamp: new Date(),
        totalRevenue: prev.totalRevenue + Math.random() * 1000 - 500,
        monthlyGrowth: prev.monthlyGrowth + (Math.random() - 0.5) * 0.1,
        activeStudents: prev.activeStudents + Math.floor(Math.random() * 10 - 5),
        conversionRate: Math.max(0, prev.conversionRate + (Math.random() - 0.5) * 0.2),
        avgRevenuePerUser: prev.avgRevenuePerUser + (Math.random() - 0.5) * 2,
        projectedMonthly: prev.projectedMonthly + Math.random() * 5000 - 2500
      }));

      setLiveMetrics(prev => prev.map(metric => ({
        ...metric,
        change: metric.change + (Math.random() - 0.5) * 0.5,
        trend: Math.random() > 0.7 ? (Math.random() > 0.5 ? 'up' : 'down') : metric.trend
      })));

      setLastUpdate(new Date());
    }, 3000);

    return () => clearInterval(interval);
  }, [isLive]);

  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(2)}M€`;
    }
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('fr-FR').format(Math.round(value));
  };

  if (variant === 'compact') {
    return (
      <motion.div
        drag
        dragMomentum={false}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed top-32 right-4 z-40 cursor-grab active:cursor-grabbing"
      >
        <Card className="glass-effect hover-lift border-2 border-yellow-200/30 shadow-xl w-64">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Coins className="h-4 w-4 text-yellow-600" />
              <span className="text-white drop-shadow-lg">Finance Live</span>
              {isLive && (
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 space-y-2">
            {liveMetrics.slice(0, 2).map((metric) => (
              <div key={metric.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={metric.color}>
                    {metric.icon}
                  </div>
                  <span className="text-xs text-white/80 drop-shadow-lg">{metric.label}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-white drop-shadow-lg">{metric.value}</div>
                  <div className={`text-xs flex items-center gap-1 ${
                    metric.trend === 'up' ? 'text-green-400' : 
                    metric.trend === 'down' ? 'text-red-400' : 'text-gray-400'
                  }`}>
                    {metric.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : 
                     metric.trend === 'down' ? <TrendingDown className="h-3 w-3" /> : null}
                    {metric.change > 0 ? '+' : ''}{metric.change.toFixed(1)}%
                  </div>
                </div>
              </div>
            ))}
            
            <div className="pt-2 border-t border-white/20">
              <div className="flex items-center justify-between text-xs">
                <span className="text-white/70 drop-shadow-lg flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Mis à jour
                </span>
                <span className="text-white/80 drop-shadow-lg">
                  {lastUpdate.toLocaleTimeString('fr-FR', { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    second: '2-digit'
                  })}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <Card className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Coins className="h-5 w-5 text-yellow-600" />
            Tableau de Bord Financier Temps Réel
            {isLive && (
              <Badge variant="outline" className="text-red-600 border-red-200">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-1"></div>
                LIVE
              </Badge>
            )}
          </CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsLive(!isLive)}
            className="text-xs"
          >
            <RefreshCw className={`h-3 w-3 mr-1 ${isLive ? 'animate-spin' : ''}`} />
            {isLive ? 'Pause' : 'Reprendre'}
          </Button>
        </div>
        <p className="text-sm text-gray-600">
          Dernière mise à jour: {lastUpdate.toLocaleString('fr-FR')}
        </p>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {liveMetrics.map((metric) => (
            <motion.div
              key={metric.id}
              layout
              className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg bg-gray-50 ${metric.color}`}>
                  {metric.icon}
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  metric.trend === 'up' ? 'text-green-600' : 
                  metric.trend === 'down' ? 'text-red-600' : 'text-gray-500'
                }`}>
                  {metric.trend === 'up' ? <TrendingUp className="h-4 w-4" /> : 
                   metric.trend === 'down' ? <TrendingDown className="h-4 w-4" /> : null}
                  {metric.change > 0 ? '+' : ''}{metric.change.toFixed(1)}%
                </div>
              </div>
              
              <div>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                <p className="text-sm text-gray-600">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projections temps réel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-green-200">
            <CardContent className="p-4">
              <h3 className="font-semibold text-green-800 mb-2">Objectif Mensuel</h3>
              <p className="text-2xl font-bold text-green-600">{formatCurrency(financeData.projectedMonthly)}</p>
              <p className="text-sm text-green-700">
                Progression: {((financeData.projectedMonthly / 850000) * 100).toFixed(1)}%
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardContent className="p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Croissance Mensuelle</h3>
              <p className="text-2xl font-bold text-blue-600">+{financeData.monthlyGrowth.toFixed(1)}%</p>
              <p className="text-sm text-blue-700">
                vs mois précédent
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200">
            <CardContent className="p-4">
              <h3 className="font-semibold text-purple-800 mb-2">Projection Annuelle</h3>
              <p className="text-2xl font-bold text-purple-600">
                {formatCurrency(financeData.projectedMonthly * 12)}
              </p>
              <p className="text-sm text-purple-700">
                Basé sur tendance actuelle
              </p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}