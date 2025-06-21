import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Target, Calendar, Award, Heart, Activity, Brain, Apple } from 'lucide-react';
import { motion } from 'framer-motion';

interface HealthMetric {
  date: string;
  weight: number;
  bodyFat: number;
  muscle: number;
  energy: number;
  mood: number;
  stress: number;
}

interface WorkoutMetric {
  date: string;
  duration: number;
  calories: number;
  heartRate: number;
  intensity: number;
  performance: number;
}

interface NutritionMetric {
  date: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  water: number;
  score: number;
}

interface Goal {
  id: string;
  title: string;
  target: number;
  current: number;
  unit: string;
  category: 'nutrition' | 'sport' | 'wellness';
  deadline: string;
  status: 'on-track' | 'at-risk' | 'completed';
}

export function ProgressTracker({ userId }: { userId: string }) {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Données de santé globale (derniers 30 jours)
  const healthData: HealthMetric[] = [
    { date: '2025-05-25', weight: 75.2, bodyFat: 18.5, muscle: 42.3, energy: 7, mood: 8, stress: 4 },
    { date: '2025-05-30', weight: 74.8, bodyFat: 18.2, muscle: 42.6, energy: 8, mood: 8, stress: 3 },
    { date: '2025-06-05', weight: 74.3, bodyFat: 17.9, muscle: 43.1, energy: 8, mood: 9, stress: 2 },
    { date: '2025-06-10', weight: 73.9, bodyFat: 17.6, muscle: 43.4, energy: 9, mood: 9, stress: 2 },
    { date: '2025-06-15', weight: 73.5, bodyFat: 17.3, muscle: 43.8, energy: 9, mood: 9, stress: 1 },
    { date: '2025-06-20', weight: 73.1, bodyFat: 17.0, muscle: 44.2, energy: 9, mood: 9, stress: 1 }
  ];

  // Données d'entraînement (dernières 4 semaines)
  const workoutData: WorkoutMetric[] = [
    { date: '2025-05-25', duration: 45, calories: 380, heartRate: 145, intensity: 7, performance: 75 },
    { date: '2025-05-28', duration: 50, calories: 420, heartRate: 150, intensity: 8, performance: 78 },
    { date: '2025-06-01', duration: 55, calories: 450, heartRate: 148, intensity: 8, performance: 82 },
    { date: '2025-06-05', duration: 60, calories: 480, heartRate: 152, intensity: 9, performance: 85 },
    { date: '2025-06-08', duration: 55, calories: 465, heartRate: 149, intensity: 8, performance: 87 },
    { date: '2025-06-12', duration: 65, calories: 520, heartRate: 155, intensity: 9, performance: 90 },
    { date: '2025-06-15', duration: 60, calories: 495, heartRate: 151, intensity: 8, performance: 92 },
    { date: '2025-06-18', duration: 70, calories: 550, heartRate: 157, intensity: 9, performance: 95 }
  ];

  // Données nutrition (dernière semaine)
  const nutritionData: NutritionMetric[] = [
    { date: '2025-06-15', calories: 2100, protein: 150, carbs: 200, fat: 70, water: 2.8, score: 85 },
    { date: '2025-06-16', calories: 2050, protein: 145, carbs: 190, fat: 75, water: 3.2, score: 88 },
    { date: '2025-06-17', calories: 2150, protein: 155, carbs: 210, fat: 65, water: 3.0, score: 90 },
    { date: '2025-06-18', calories: 2080, protein: 148, carbs: 195, fat: 72, water: 3.5, score: 92 },
    { date: '2025-06-19', calories: 2120, protein: 152, carbs: 205, fat: 68, water: 3.1, score: 89 },
    { date: '2025-06-20', calories: 2090, protein: 149, carbs: 198, fat: 70, water: 3.4, score: 91 },
    { date: '2025-06-21', calories: 2110, protein: 153, carbs: 202, fat: 69, water: 3.3, score: 93 }
  ];

  // Objectifs actuels
  const goals: Goal[] = [
    {
      id: '1',
      title: 'Perdre 5kg',
      target: 70,
      current: 73.1,
      unit: 'kg',
      category: 'nutrition',
      deadline: '2025-08-01',
      status: 'on-track'
    },
    {
      id: '2',
      title: 'Courir 10km',
      target: 10,
      current: 7.5,
      unit: 'km',
      category: 'sport',
      deadline: '2025-07-15',
      status: 'on-track'
    },
    {
      id: '3',
      title: 'Méditation quotidienne',
      target: 30,
      current: 22,
      unit: 'jours',
      category: 'wellness',
      deadline: '2025-06-30',
      status: 'at-risk'
    },
    {
      id: '4',
      title: 'Masse musculaire +2kg',
      target: 46,
      current: 44.2,
      unit: 'kg',
      category: 'sport',
      deadline: '2025-09-01',
      status: 'on-track'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'on-track': return 'text-blue-600 bg-blue-100';
      case 'at-risk': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Terminé';
      case 'on-track': return 'En cours';
      case 'at-risk': return 'À risque';
      default: return 'En attente';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'nutrition': return <Apple className="h-4 w-4" />;
      case 'sport': return <Activity className="h-4 w-4" />;
      case 'wellness': return <Heart className="h-4 w-4" />;
      default: return <Target className="h-4 w-4" />;
    }
  };

  // Calculs de progression
  const latestHealth = healthData[healthData.length - 1];
  const weightProgress = ((75.2 - latestHealth.weight) / (75.2 - 70)) * 100;
  const avgPerformance = workoutData.reduce((sum, w) => sum + w.performance, 0) / workoutData.length;
  const avgNutritionScore = nutritionData.reduce((sum, n) => sum + n.score, 0) / nutritionData.length;

  const pieData = [
    { name: 'Protéines', value: 25, color: '#8884d8' },
    { name: 'Glucides', value: 45, color: '#82ca9d' },
    { name: 'Lipides', value: 30, color: '#ffc658' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Suivi de Progression</h2>
          <p className="text-gray-600">Votre évolution personnalisée avec l'IA</p>
        </div>
        <Badge className="px-3 py-1">
          <Brain className="h-4 w-4 mr-1" />
          IA Analyse Active
        </Badge>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="health">Santé</TabsTrigger>
          <TabsTrigger value="sport">Sport</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Métriques principales */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="text-sm font-medium">Poids</span>
                </div>
                <div className="text-2xl font-bold">{latestHealth.weight}kg</div>
                <div className="text-sm text-green-600">-2.1kg ce mois</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium">Performance</span>
                </div>
                <div className="text-2xl font-bold">{Math.round(avgPerformance)}%</div>
                <div className="text-sm text-green-600">+20% ce mois</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Apple className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">Nutrition</span>
                </div>
                <div className="text-2xl font-bold">{Math.round(avgNutritionScore)}%</div>
                <div className="text-sm text-green-600">+7% cette semaine</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-5 w-5 text-purple-500" />
                  <span className="text-sm font-medium">Objectifs</span>
                </div>
                <div className="text-2xl font-bold">3/4</div>
                <div className="text-sm text-green-600">En cours</div>
              </CardContent>
            </Card>
          </div>

          {/* Objectifs actuels */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Objectifs en Cours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {goals.map((goal) => (
                  <motion.div
                    key={goal.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 border rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(goal.category)}
                        <span className="font-medium">{goal.title}</span>
                      </div>
                      <Badge className={getStatusColor(goal.status)}>
                        {getStatusLabel(goal.status)}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progression</span>
                        <span>{goal.current} / {goal.target} {goal.unit}</span>
                      </div>
                      <Progress 
                        value={(goal.current / goal.target) * 100} 
                        className="h-2"
                      />
                      <div className="text-xs text-gray-500">
                        Échéance: {new Date(goal.deadline).toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Évolution globale */}
          <Card>
            <CardHeader>
              <CardTitle>Évolution Globale (30 derniers jours)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={healthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="energy" stackId="1" stroke="#8884d8" fill="#8884d8" name="Énergie" />
                  <Area type="monotone" dataKey="mood" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="Humeur" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="health" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Évolution du Poids</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={healthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={['dataMin - 1', 'dataMax + 1']} />
                    <Tooltip />
                    <Line type="monotone" dataKey="weight" stroke="#8884d8" strokeWidth={2} name="Poids (kg)" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Composition Corporelle</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={healthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="bodyFat" stroke="#ff7300" strokeWidth={2} name="Masse grasse %" />
                    <Line type="monotone" dataKey="muscle" stroke="#387908" strokeWidth={2} name="Masse musculaire kg" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Bien-être Mental</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={healthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 10]} />
                  <Tooltip />
                  <Area type="monotone" dataKey="mood" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="Humeur /10" />
                  <Area type="monotone" dataKey="stress" stackId="2" stroke="#ff7300" fill="#ff7300" name="Stress /10" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sport" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance d'Entraînement</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={workoutData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="performance" stroke="#8884d8" strokeWidth={2} name="Performance %" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Durée & Calories</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={workoutData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="duration" fill="#8884d8" name="Durée (min)" />
                    <Bar dataKey="calories" fill="#82ca9d" name="Calories" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Fréquence Cardiaque & Intensité</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={workoutData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="heartRate" stroke="#ff7300" strokeWidth={2} name="FC moyenne" />
                  <Line type="monotone" dataKey="intensity" stroke="#387908" strokeWidth={2} name="Intensité /10" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nutrition" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Score Nutrition Quotidien</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={nutritionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={2} name="Score %" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Répartition Macronutriments</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Apports Nutritionnels (7 derniers jours)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={nutritionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="protein" fill="#8884d8" name="Protéines (g)" />
                  <Bar dataKey="carbs" fill="#82ca9d" name="Glucides (g)" />
                  <Bar dataKey="fat" fill="#ffc658" name="Lipides (g)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}