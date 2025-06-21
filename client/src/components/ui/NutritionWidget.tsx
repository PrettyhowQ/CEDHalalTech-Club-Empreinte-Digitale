import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Heart, Apple, Target, Clock, TrendingUp, Zap } from 'lucide-react';

interface NutritionMetric {
  label: string;
  value: string;
  change: number;
  color: string;
}

export function NutritionWidget({ variant = 'full' }: { variant?: 'full' | 'compact' }) {
  const [nutritionData, setNutritionData] = useState<NutritionMetric[]>([
    {
      label: 'Clients Actifs',
      value: '847',
      change: 12.3,
      color: 'text-green-600'
    },
    {
      label: 'Satisfaction',
      value: '98%',
      change: 2.1,
      color: 'text-blue-600'
    },
    {
      label: 'Objectifs Atteints',
      value: '94%',
      change: 5.7,
      color: 'text-purple-600'
    }
  ]);

  const [todayTip, setTodayTip] = useState('');

  useEffect(() => {
    const tips = [
      "💧 Hydratation optimale : 8 verres d'eau par jour",
      "🥗 Privilégiez les légumes verts pour l'énergie",
      "🍎 Une pomme par jour pour la concentration",
      "🥑 Les oméga-3 boostent les performances cognitives",
      "🌰 Les noix améliorent la mémoire",
      "🫐 Les antioxydants protègent votre cerveau"
    ];
    
    setTodayTip(tips[Math.floor(Math.random() * tips.length)]);
  }, []);

  if (variant === 'compact') {
    return (
      <motion.div
        drag
        dragMomentum={false}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-32 right-4 z-40 cursor-grab active:cursor-grabbing"
      >
        <Card className="glass-effect hover-lift border-2 border-pink-200/30 shadow-xl w-72">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center text-lg">
                👩‍⚕️
              </div>
              <div className="flex-1">
                <span className="text-white drop-shadow-lg">Nutrition Souheila</span>
                <p className="text-xs text-white/70 drop-shadow-lg">Expert en nutrition digitale</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 space-y-3">
            {/* Métriques rapides */}
            <div className="grid grid-cols-3 gap-2">
              {nutritionData.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm font-bold text-white drop-shadow-lg">{metric.value}</div>
                  <div className="text-xs text-white/80 drop-shadow-lg">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Conseil du jour */}
            <div className="p-2 bg-white/10 rounded border border-white/20">
              <p className="text-xs text-white/90 drop-shadow-lg font-medium">
                Conseil du jour
              </p>
              <p className="text-xs text-white/80 drop-shadow-lg mt-1">
                {todayTip}
              </p>
            </div>

            {/* Actions rapides */}
            <div className="grid grid-cols-2 gap-2">
              <Button size="sm" className="text-xs">
                <Apple className="h-3 w-3 mr-1" />
                Consultation
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                <Heart className="h-3 w-3 mr-1" />
                Programme
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <Card className="border-pink-200 bg-gradient-to-br from-pink-50 to-purple-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center text-2xl">
            👩‍⚕️
          </div>
          <div>
            <span>Nutrition avec Souheila Yakoubi-Ozel</span>
            <p className="text-sm text-gray-600">Expert en nutrition comportementale & IA santé</p>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Métriques de performance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {nutritionData.map((metric, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
              <div className={`text-xs flex items-center justify-center gap-1 mt-1 ${
                metric.change > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                <TrendingUp className="h-3 w-3" />
                +{metric.change}%
              </div>
            </div>
          ))}
        </div>

        {/* Programmes disponibles */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-800">Programmes Nutrition IA</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-sm">Équilibre Digital</h4>
              <p className="text-xs text-gray-600 mt-1">3 mois • 299€</p>
              <Badge variant="secondary" className="text-xs mt-2">IA Prédictive</Badge>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-sm">Performance Cognitive</h4>
              <p className="text-xs text-gray-600 mt-1">6 mois • 499€</p>
              <Badge variant="secondary" className="text-xs mt-2">Neuro-nutrition</Badge>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-sm">Transformation Complète</h4>
              <p className="text-xs text-gray-600 mt-1">12 mois • 899€</p>
              <Badge variant="secondary" className="text-xs mt-2">Holistique</Badge>
            </div>
          </div>
        </div>

        {/* Conseil du jour */}
        <div className="p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg border border-pink-200">
          <h4 className="font-semibold text-pink-800 mb-2 flex items-center gap-2">
            <Zap className="h-4 w-4" />
            Conseil Nutrition du Jour
          </h4>
          <p className="text-pink-700 text-sm">{todayTip}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button className="flex-1">
            <Heart className="h-4 w-4 mr-2" />
            Consultation Gratuite
          </Button>
          <Button variant="outline" className="flex-1">
            <Target className="h-4 w-4 mr-2" />
            Voir Programmes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}