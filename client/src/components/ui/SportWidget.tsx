import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Activity, Target, Trophy, Heart, Zap, Clock, Users } from 'lucide-react';

interface SportMetric {
  label: string;
  value: string;
  change: number;
  color: string;
}

interface WorkoutSuggestion {
  name: string;
  duration: string;
  intensity: string;
  calories: string;
}

export function SportWidget({ variant = 'full' }: { variant?: 'full' | 'compact' }) {
  const [sportData, setSportData] = useState<SportMetric[]>([
    {
      label: 'Utilisateurs Actifs',
      value: '10.2K',
      change: 18.5,
      color: 'text-blue-600'
    },
    {
      label: 'Séances Complétées',
      value: '42.8K',
      change: 25.3,
      color: 'text-green-600'
    },
    {
      label: 'Objectifs Atteints',
      value: '95%',
      change: 8.2,
      color: 'text-purple-600'
    }
  ]);

  const [todayWorkout, setTodayWorkout] = useState<WorkoutSuggestion>({
    name: '',
    duration: '',
    intensity: '',
    calories: ''
  });

  useEffect(() => {
    const workouts: WorkoutSuggestion[] = [
      {
        name: '🏃‍♂️ Cardio HIIT Intelligent',
        duration: '25 min',
        intensity: 'Élevée',
        calories: '320 kcal'
      },
      {
        name: '💪 Renforcement Adaptatif',
        duration: '35 min',
        intensity: 'Modérée',
        calories: '280 kcal'
      },
      {
        name: '🧘‍♀️ Yoga Recovery IA',
        duration: '20 min',
        intensity: 'Faible',
        calories: '150 kcal'
      },
      {
        name: '🚴‍♂️ Cycling Performance',
        duration: '45 min',
        intensity: 'Élevée',
        calories: '450 kcal'
      },
      {
        name: '🏋️‍♂️ Force Progressive',
        duration: '40 min',
        intensity: 'Élevée',
        calories: '380 kcal'
      }
    ];
    
    setTodayWorkout(workouts[Math.floor(Math.random() * workouts.length)]);
  }, []);

  if (variant === 'compact') {
    return (
      <motion.div
        drag
        dragMomentum={false}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-4 right-4 z-40 cursor-grab active:cursor-grabbing"
      >
        <Card className="glass-effect hover-lift border-2 border-blue-200/30 shadow-xl w-72">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-lg">
                🏃‍♂️
              </div>
              <div className="flex-1">
                <span className="text-white drop-shadow-lg">Coaching Sport IA</span>
                <p className="text-xs text-white/70 drop-shadow-lg">Coach personnel intelligent</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 space-y-3">
            {/* Métriques rapides */}
            <div className="grid grid-cols-3 gap-2">
              {sportData.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm font-bold text-white drop-shadow-lg">{metric.value}</div>
                  <div className="text-xs text-white/80 drop-shadow-lg">{metric.label.split(' ')[0]}</div>
                </div>
              ))}
            </div>

            {/* Séance suggérée */}
            <div className="p-2 bg-white/10 rounded border border-white/20">
              <p className="text-xs text-white/90 drop-shadow-lg font-medium">
                Séance du jour
              </p>
              <p className="text-xs text-white/80 drop-shadow-lg mt-1">
                {todayWorkout.name}
              </p>
              <div className="flex justify-between text-xs text-white/70 drop-shadow-lg mt-1">
                <span>{todayWorkout.duration}</span>
                <span>{todayWorkout.calories}</span>
              </div>
            </div>

            {/* Actions rapides */}
            <div className="grid grid-cols-2 gap-2">
              <Button size="sm" className="text-xs">
                <Activity className="h-3 w-3 mr-1" />
                Commencer
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                <Target className="h-3 w-3 mr-1" />
                Programmes
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-2xl">
            🏃‍♂️
          </div>
          <div>
            <span>Coaching Sport Digital IA</span>
            <p className="text-sm text-gray-600">Coach personnel intelligent avec IA adaptive</p>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Métriques de performance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sportData.map((metric, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
              <div className={`text-xs flex items-center justify-center gap-1 mt-1 ${
                metric.change > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                <Activity className="h-3 w-3" />
                +{metric.change}%
              </div>
            </div>
          ))}
        </div>

        {/* Sports populaires */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-800">Sports & Activités Populaires</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🏃‍♂️</div>
              <h4 className="font-medium text-sm">Running</h4>
              <Badge variant="secondary" className="text-xs mt-1">2.1K actifs</Badge>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">💪</div>
              <h4 className="font-medium text-sm">Musculation</h4>
              <Badge variant="secondary" className="text-xs mt-1">1.8K actifs</Badge>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🧘‍♀️</div>
              <h4 className="font-medium text-sm">Yoga</h4>
              <Badge variant="secondary" className="text-xs mt-1">1.5K actifs</Badge>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🚴‍♂️</div>
              <h4 className="font-medium text-sm">Cycling</h4>
              <Badge variant="secondary" className="text-xs mt-1">1.2K actifs</Badge>
            </div>
          </div>
        </div>

        {/* Séance recommandée */}
        <div className="p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
            <Zap className="h-4 w-4" />
            Séance Recommandée Aujourd'hui
          </h4>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-700 font-medium">{todayWorkout.name}</p>
              <div className="flex gap-4 text-sm text-blue-600 mt-1">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {todayWorkout.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Target className="h-3 w-3" />
                  {todayWorkout.intensity}
                </span>
                <span className="flex items-center gap-1">
                  <Trophy className="h-3 w-3" />
                  {todayWorkout.calories}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button className="flex-1">
            <Activity className="h-4 w-4 mr-2" />
            Commencer Séance
          </Button>
          <Button variant="outline" className="flex-1">
            <Users className="h-4 w-4 mr-2" />
            Voir App Complète
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}