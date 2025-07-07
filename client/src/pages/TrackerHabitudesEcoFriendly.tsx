import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import ProtectionFooter from '@/components/ProtectionFooter';
import { CheckCircle, Calendar, TrendingUp, Target, Heart, Zap, Droplets, Recycle } from 'lucide-react';

interface EcoHabit {
  id: number;
  title: string;
  description: string;
  islamicMotivation: string;
  hadithReference?: string;
  category: 'water' | 'energy' | 'waste' | 'transport' | 'consumption';
  targetFrequency: 'daily' | 'weekly' | 'monthly';
  completed: boolean[];
  currentStreak: number;
  bestStreak: number;
  totalCompleted: number;
  co2Saved: number;
  spiritualReward: string;
}

interface DailyMotivation {
  date: string;
  ayah: string;
  translation: string;
  reference: string;
  ecoMessage: string;
}

export default function TrackerHabitudesEcoFriendly() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(0);
  const [todayMotivation, setTodayMotivation] = useState<DailyMotivation>();

  const [habits, setHabits] = useState<EcoHabit[]>([
    {
      id: 1,
      title: "Économie d'Eau lors des Ablutions",
      description: "Utiliser le minimum d'eau nécessaire pour wudu",
      islamicMotivation: "Suivre la Sunna du Prophète ﷺ qui économisait l'eau même au bord d'une rivière",
      hadithReference: "Sunan Ibn Majah",
      category: 'water',
      targetFrequency: 'daily',
      completed: [true, true, false, true, true, true, false], // 7 derniers jours
      currentStreak: 4,
      bestStreak: 12,
      totalCompleted: 157,
      co2Saved: 15.7,
      spiritualReward: "Baraka dans les ablutions"
    },
    {
      id: 2,
      title: "Transport Écologique",
      description: "Marche, vélo ou transport public au lieu de voiture",
      islamicMotivation: "Préserver la création d'Allah de la pollution",
      category: 'transport',
      targetFrequency: 'daily',
      completed: [false, true, true, true, false, true, true],
      currentStreak: 2,
      bestStreak: 8,
      totalCompleted: 98,
      co2Saved: 245.0,
      spiritualReward: "Méditation en marchant"
    },
    {
      id: 3,
      title: "Zéro Gaspillage Alimentaire",
      description: "Finir complètement tous les repas",
      islamicMotivation: "L'interdiction absolue du gaspillage (Israf) dans l'Islam",
      hadithReference: "Sourate Al-A'raf (7:31)",
      category: 'waste',
      targetFrequency: 'daily',
      completed: [true, true, true, false, true, true, true],
      currentStreak: 5,
      bestStreak: 21,
      totalCompleted: 203,
      co2Saved: 81.2,
      spiritualReward: "Gratitude pour les bienfaits"
    },
    {
      id: 4,
      title: "Éteindre Appareils Inutiles",
      description: "Débrancher tous les appareils non utilisés",
      islamicMotivation: "Gestion responsable des ressources confiées par Allah",
      category: 'energy',
      targetFrequency: 'daily',
      completed: [true, false, true, true, true, false, true],
      currentStreak: 1,
      bestStreak: 15,
      totalCompleted: 134,
      co2Saved: 67.0,
      spiritualReward: "Simplicité et modération"
    },
    {
      id: 5,
      title: "Achat Local et Responsable",
      description: "Privilégier produits locaux et biologiques",
      islamicMotivation: "Soutenir la communauté locale (Ukhuwah)",
      category: 'consumption',
      targetFrequency: 'weekly',
      completed: [true, true, false, true, true, true, true],
      currentStreak: 3,
      bestStreak: 7,
      totalCompleted: 45,
      co2Saved: 135.0,
      spiritualReward: "Support communauté musulmane"
    },
    {
      id: 6,
      title: "Recyclage Quotidien",
      description: "Trier et recycler tous les déchets appropriés",
      islamicMotivation: "Préservation de la terre selon l'Amanah",
      category: 'waste',
      targetFrequency: 'daily',
      completed: [true, true, true, true, false, true, true],
      currentStreak: 3,
      bestStreak: 18,
      totalCompleted: 189,
      co2Saved: 94.5,
      spiritualReward: "Responsabilité Khalifah"
    }
  ]);

  const dailyMotivations: DailyMotivation[] = [
    {
      date: "2025-01-06",
      ayah: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ",
      translation: "Et Nous avons fait de l'eau toute chose vivante",
      reference: "Sourate Al-Anbiya (21:30)",
      ecoMessage: "L'eau est source de vie, économisons-la avec conscience"
    },
    {
      date: "2025-01-05",
      ayah: "وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا",
      translation: "Et ne semez pas la corruption sur la terre après qu'elle ait été réformée",
      reference: "Sourate Al-A'raf (7:56)",
      ecoMessage: "Préservons l'équilibre de la Terre créée par Allah"
    }
  ];

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const motivation = dailyMotivations.find(m => m.date === today) || dailyMotivations[0];
    setTodayMotivation(motivation);
  }, []);

  const toggleHabitCompletion = (habitId: number, dayIndex: number) => {
    setHabits(habits.map(habit => {
      if (habit.id === habitId) {
        const newCompleted = [...habit.completed];
        newCompleted[dayIndex] = !newCompleted[dayIndex];
        
        // Recalculer la streak actuelle
        let currentStreak = 0;
        for (let i = newCompleted.length - 1; i >= 0; i--) {
          if (newCompleted[i]) {
            currentStreak++;
          } else {
            break;
          }
        }

        return {
          ...habit,
          completed: newCompleted,
          currentStreak,
          bestStreak: Math.max(habit.bestStreak, currentStreak),
          totalCompleted: newCompleted.filter(Boolean).length
        };
      }
      return habit;
    }));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'water': return <Droplets className="h-5 w-5 text-blue-500" />;
      case 'energy': return <Zap className="h-5 w-5 text-yellow-500" />;
      case 'waste': return <Recycle className="h-5 w-5 text-green-500" />;
      case 'transport': return '🚲';
      case 'consumption': return '🛒';
      default: return '🌱';
    }
  };

  const getWeekDays = () => {
    const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    return days;
  };

  const getTotalStats = () => {
    const totalCO2Saved = habits.reduce((sum, habit) => sum + habit.co2Saved, 0);
    const totalCompleted = habits.reduce((sum, habit) => sum + habit.totalCompleted, 0);
    const averageStreak = habits.reduce((sum, habit) => sum + habit.currentStreak, 0) / habits.length;
    
    return { totalCO2Saved, totalCompleted, averageStreak };
  };

  const getCompletionRate = () => {
    const today = new Date().getDay();
    const todayIndex = today === 0 ? 6 : today - 1; // Adjust for Monday start
    const todayCompleted = habits.filter(habit => habit.completed[todayIndex]).length;
    return (todayCompleted / habits.length) * 100;
  };

  const stats = getTotalStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header avec Motivation Spirituelle */}
        <Card className="mb-8 border-green-500 border-2 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <CardTitle className="text-3xl text-center flex items-center justify-center gap-3">
              <Target className="h-10 w-10" />
              Tracker Habitudes Éco-Friendly avec Motivation Spirituelle
              <Heart className="h-10 w-10" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            
            {/* Motivation Quotidienne */}
            {todayMotivation && (
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">
                  🌅 Motivation Spirituelle du Jour
                </h3>
                <div className="text-center">
                  <p className="text-2xl text-blue-900 font-arabic mb-3">{todayMotivation.ayah}</p>
                  <p className="text-lg text-blue-800 italic mb-2">"{todayMotivation.translation}"</p>
                  <p className="text-sm text-blue-600 mb-4">{todayMotivation.reference}</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-800 font-semibold">
                      🌱 {todayMotivation.ecoMessage}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Statistiques Générales */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-800">{Math.round(stats.totalCO2Saved)} kg</div>
                  <p className="text-sm text-blue-600">CO2 Économisé</p>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-800">{stats.totalCompleted}</div>
                  <p className="text-sm text-green-600">Actions Complétées</p>
                </CardContent>
              </Card>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-4 text-center">
                  <Zap className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-yellow-800">{Math.round(stats.averageStreak)}</div>
                  <p className="text-sm text-yellow-600">Streak Moyenne</p>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-4 text-center">
                  <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-800">{Math.round(getCompletionRate())}%</div>
                  <p className="text-sm text-purple-600">Complétion Aujourd'hui</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Tracker des Habitudes */}
        <Card className="border-emerald-500 border-2">
          <CardHeader className="bg-gradient-to-r from-emerald-600 to-green-600 text-white">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-6 w-6" />
              Suivi Hebdomadaire des Habitudes Écologiques
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            
            {/* En-tête des jours */}
            <div className="grid grid-cols-8 gap-2 mb-4">
              <div className="text-sm font-semibold text-gray-600">Habitude</div>
              {getWeekDays().map((day, index) => (
                <div key={index} className="text-center text-sm font-semibold text-gray-600">
                  {day}
                </div>
              ))}
            </div>

            {/* Liste des Habitudes */}
            <div className="space-y-4">
              {habits.map((habit) => (
                <Card key={habit.id} className="border-gray-200 hover:border-green-300 transition-colors">
                  <CardContent className="p-4">
                    
                    {/* Informations de l'habitude */}
                    <div className="grid grid-cols-8 gap-2 items-center mb-3">
                      <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-1">
                          {getCategoryIcon(habit.category)}
                          <h3 className="font-semibold text-sm text-gray-800">{habit.title}</h3>
                        </div>
                        <p className="text-xs text-gray-600">{habit.description}</p>
                      </div>
                      
                      {/* Cases de complétion pour chaque jour */}
                      {habit.completed.map((completed, dayIndex) => (
                        <div key={dayIndex} className="flex justify-center">
                          <button
                            onClick={() => toggleHabitCompletion(habit.id, dayIndex)}
                            className={`w-8 h-8 rounded-full border-2 transition-all ${
                              completed
                                ? 'bg-green-500 border-green-500 text-white'
                                : 'border-gray-300 hover:border-green-400 hover:bg-green-50'
                            }`}
                          >
                            {completed && <CheckCircle className="h-5 w-5" />}
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Motivation Islamique */}
                    <div className="bg-blue-50 p-3 rounded-lg mb-3">
                      <p className="text-sm text-blue-800">
                        <strong>🕌 Motivation:</strong> {habit.islamicMotivation}
                      </p>
                      {habit.hadithReference && (
                        <p className="text-xs text-blue-600 mt-1">
                          <strong>Source:</strong> {habit.hadithReference}
                        </p>
                      )}
                    </div>

                    {/* Statistiques de l'habitude */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="bg-green-50 p-2 rounded">
                        <p className="text-green-800">
                          <strong>Streak Actuelle:</strong> {habit.currentStreak} jours
                        </p>
                      </div>
                      <div className="bg-yellow-50 p-2 rounded">
                        <p className="text-yellow-800">
                          <strong>Meilleure Streak:</strong> {habit.bestStreak} jours
                        </p>
                      </div>
                      <div className="bg-blue-50 p-2 rounded">
                        <p className="text-blue-800">
                          <strong>CO2 Économisé:</strong> {habit.co2Saved} kg
                        </p>
                      </div>
                      <div className="bg-purple-50 p-2 rounded">
                        <p className="text-purple-800">
                          <strong>Récompense:</strong> {habit.spiritualReward}
                        </p>
                      </div>
                    </div>

                    {/* Barre de progression de la semaine */}
                    <div className="mt-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progression cette semaine</span>
                        <span>{habit.completed.filter(Boolean).length}/7</span>
                      </div>
                      <Progress 
                        value={(habit.completed.filter(Boolean).length / 7) * 100} 
                        className="h-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Récompenses et Encouragements */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Récompenses Spirituelles */}
              <Card className="border-yellow-300 bg-yellow-50">
                <CardContent className="p-4">
                  <h3 className="font-bold text-yellow-800 mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Récompenses Spirituelles Gagnées
                  </h3>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        🌳 <strong>Sadaqah Jariyah:</strong> Chaque action écologique = aumône continue
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        💧 <strong>Baraka Ablutions:</strong> Économie d'eau selon la Sunna
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        🤲 <strong>Amanah Respectée:</strong> Gérance responsable de la création
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Prochains Objectifs */}
              <Card className="border-green-300 bg-green-50">
                <CardContent className="p-4">
                  <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Prochains Objectifs
                  </h3>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-sm text-green-800">
                        🎯 <strong>7 jours parfaits:</strong> Compléter toutes les habitudes une semaine
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-sm text-green-800">
                        🏆 <strong>100 kg CO2:</strong> Économiser 100 kg de CO2 au total
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-sm text-green-800">
                        ✨ <strong>Streak 30 jours:</strong> Une habitude pendant 30 jours consécutifs
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
      <ProtectionFooter />
    </div>
  );
}