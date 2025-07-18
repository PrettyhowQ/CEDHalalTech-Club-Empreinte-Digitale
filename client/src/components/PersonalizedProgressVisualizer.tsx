import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, Target, BookOpen, Heart, Award, Zap, Crown } from 'lucide-react';

interface UserProgress {
  level: number;
  experience: number;
  experienceToNext: number;
  spiritualRank: string;
  achievements: Achievement[];
  currentGoals: Goal[];
  weeklyProgress: DailyProgress[];
  totalCompletedTasks: number;
  streakDays: number;
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  islamicSignificance: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlockedAt: Date;
  reward: string;
}

interface Goal {
  id: string;
  title: string;
  description: string;
  progress: number;
  target: number;
  category: 'spiritual' | 'learning' | 'social' | 'charitable';
  deadline: Date;
  islamicReward: string;
}

interface DailyProgress {
  date: string;
  prayers: number;
  learning: number;
  charity: number;
  dhikr: number;
  overallScore: number;
}

const PersonalizedProgressVisualizer: React.FC = () => {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    level: 42,
    experience: 15750,
    experienceToNext: 2250,
    spiritualRank: "Chercheur de Lumière (طالب النور)",
    achievements: [
      {
        id: "first-quran-reading",
        name: "Premier Coran Complet",
        description: "Lecture complète du Saint Coran",
        islamicSignificance: "Le Prophète ﷺ a dit: 'Celui qui lit une lettre du Coran aura une hassanah (bonne action)'",
        icon: "📖",
        rarity: "epic",
        unlockedAt: new Date('2025-01-10'),
        reward: "500 XP Spirituel + Titre 'Récitateur'"
      },
      {
        id: "charity-streak",
        name: "Généreux Constant",
        description: "30 jours consécutifs de Sadaqah",
        islamicSignificance: "Allah dit: 'Ceux qui dépensent leurs biens dans le sentier d'Allah' (Al-Baqarah 261)",
        icon: "🤲",
        rarity: "rare",
        unlockedAt: new Date('2025-01-05'),
        reward: "300 XP Charité + Badge Bénédiction"
      },
      {
        id: "fiqh-master",
        name: "Maître du Fiqh",
        description: "Complétion de 100 règles Fiqh informatique",
        islamicSignificance: "Le savoir religieux est obligatoire pour chaque musulman",
        icon: "⚖️",
        rarity: "legendary",
        unlockedAt: new Date('2025-01-15'),
        reward: "1000 XP Sagesse + Certification Scholar"
      }
    ],
    currentGoals: [
      {
        id: "hajj-savings",
        title: "Épargne Hajj 2026",
        description: "Économiser 8000 CHF pour le pèlerinage",
        progress: 3200,
        target: 8000,
        category: "spiritual",
        deadline: new Date('2026-06-01'),
        islamicReward: "Barakah dans les finances + Du'a acceptée"
      },
      {
        id: "arabic-fluency",
        title: "Maîtrise Arabe Coranique",
        description: "Comprendre 500 versets sans traduction",
        progress: 187,
        target: 500,
        category: "learning",
        deadline: new Date('2025-12-31'),
        islamicReward: "Compréhension directe de la Parole d'Allah"
      },
      {
        id: "community-help",
        title: "Aide Communautaire",
        description: "Aider 50 familles via TechForAll",
        progress: 23,
        target: 50,
        category: "charitable",
        deadline: new Date('2025-06-30'),
        islamicReward: "Sadaqah Jariyah + Baraka familiale"
      }
    ],
    weeklyProgress: [
      { date: "2025-01-12", prayers: 5, learning: 3, charity: 2, dhikr: 4, overallScore: 85 },
      { date: "2025-01-13", prayers: 5, learning: 4, charity: 1, dhikr: 5, overallScore: 90 },
      { date: "2025-01-14", prayers: 5, learning: 2, charity: 3, dhikr: 4, overallScore: 80 },
      { date: "2025-01-15", prayers: 5, learning: 5, charity: 2, dhikr: 3, overallScore: 95 },
      { date: "2025-01-16", prayers: 4, learning: 3, charity: 4, dhikr: 5, overallScore: 88 },
      { date: "2025-01-17", prayers: 5, learning: 4, charity: 1, dhikr: 4, overallScore: 82 },
      { date: "2025-01-18", prayers: 5, learning: 5, charity: 3, dhikr: 5, overallScore: 100 }
    ],
    totalCompletedTasks: 847,
    streakDays: 23
  });

  const [selectedTab, setSelectedTab] = useState<'overview' | 'achievements' | 'goals' | 'analytics'>('overview');

  // Calcul du pourcentage d'expérience
  const experiencePercentage = (userProgress.experience / (userProgress.experience + userProgress.experienceToNext)) * 100;

  // Couleurs par rareté
  const rarityColors = {
    common: 'from-gray-400 to-gray-600',
    rare: 'from-blue-400 to-blue-600',
    epic: 'from-purple-400 to-purple-600',
    legendary: 'from-yellow-400 to-orange-500'
  };

  // Icônes par catégorie
  const categoryIcons = {
    spiritual: <Heart className="w-5 h-5" />,
    learning: <BookOpen className="w-5 h-5" />,
    social: <Star className="w-5 h-5" />,
    charitable: <Trophy className="w-5 h-5" />
  };

  const AchievementCard: React.FC<{ achievement: Achievement; index: number }> = ({ achievement, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`bg-gradient-to-r ${rarityColors[achievement.rarity]} rounded-lg p-4 text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="text-3xl">{achievement.icon}</div>
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
          achievement.rarity === 'legendary' ? 'bg-yellow-200 text-yellow-900' :
          achievement.rarity === 'epic' ? 'bg-purple-200 text-purple-900' :
          achievement.rarity === 'rare' ? 'bg-blue-200 text-blue-900' :
          'bg-gray-200 text-gray-900'
        }`}>
          {achievement.rarity.toUpperCase()}
        </div>
      </div>
      
      <h3 className="font-bold text-lg mb-2">{achievement.name}</h3>
      <p className="text-sm opacity-90 mb-3">{achievement.description}</p>
      
      <div className="bg-white bg-opacity-20 rounded-lg p-3 text-sm">
        <p className="font-medium mb-1">🕌 Sagesse Islamique:</p>
        <p className="text-xs opacity-95">{achievement.islamicSignificance}</p>
      </div>
      
      <div className="mt-3 flex justify-between items-center text-sm">
        <span>🎁 {achievement.reward}</span>
        <span className="opacity-75">
          {achievement.unlockedAt.toLocaleDateString('fr-FR')}
        </span>
      </div>
    </motion.div>
  );

  const GoalProgress: React.FC<{ goal: Goal; index: number }> = ({ goal, index }) => {
    const progressPercentage = (goal.progress / goal.target) * 100;
    
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-emerald-600 dark:text-emerald-400">
              {categoryIcons[goal.category]}
            </div>
            <div>
              <h3 className="font-bold text-emerald-800 dark:text-emerald-200">
                {goal.title}
              </h3>
              <p className="text-sm text-emerald-600 dark:text-emerald-400">
                {goal.description}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-emerald-700 dark:text-emerald-300">
              {Math.round(progressPercentage)}%
            </div>
            <div className="text-xs text-emerald-600 dark:text-emerald-400">
              {goal.progress}/{goal.target}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="w-full bg-emerald-100 dark:bg-emerald-900 rounded-full h-3">
            <motion.div
              className="bg-gradient-to-r from-emerald-500 to-blue-500 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1, delay: index * 0.2 }}
            />
          </div>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-950 rounded-lg p-3">
          <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200 mb-1">
            🎯 Récompense Islamique:
          </p>
          <p className="text-xs text-emerald-700 dark:text-emerald-300">
            {goal.islamicReward}
          </p>
        </div>

        <div className="mt-3 text-xs text-emerald-600 dark:text-emerald-400">
          Échéance: {goal.deadline.toLocaleDateString('fr-FR')}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-yellow-50 dark:from-emerald-950 dark:via-blue-950 dark:to-yellow-950 p-8">
      <div className="max-w-7xl mx-auto">
        {/* En-tête avec niveau et expérience */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-emerald-800 dark:text-emerald-200 mb-4">
            📊 Visualiseur de Progression Personnalisé Utilisateur
          </h1>
          <p className="text-emerald-600 dark:text-emerald-400 max-w-2xl mx-auto mb-6">
            Suivi spirituel et éducatif personnalisé selon les valeurs islamiques authentiques
          </p>

          {/* Carte de niveau */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 text-white rounded-xl p-6 max-w-2xl mx-auto shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-left">
                <h2 className="text-2xl font-bold">Niveau {userProgress.level}</h2>
                <p className="text-lg opacity-90">{userProgress.spiritualRank}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl mb-2">👤</div>
                <div className="text-sm opacity-75">
                  🔥 {userProgress.streakDays} jours de suite
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Expérience: {userProgress.experience.toLocaleString()}</span>
                <span>Prochain niveau: {userProgress.experienceToNext.toLocaleString()}</span>
              </div>
              <div className="w-full bg-white bg-opacity-20 rounded-full h-4">
                <motion.div
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${experiencePercentage}%` }}
                  transition={{ duration: 2 }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">{userProgress.totalCompletedTasks}</div>
                <div className="text-xs opacity-75">Tâches Accomplies</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{userProgress.achievements.length}</div>
                <div className="text-xs opacity-75">Succès Débloqués</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{userProgress.currentGoals.length}</div>
                <div className="text-xs opacity-75">Objectifs Actifs</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation par onglets */}
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
            {[
              { key: 'overview', label: '📋 Vue d\'ensemble', icon: <Target className="w-4 h-4" /> },
              { key: 'achievements', label: '🏆 Succès', icon: <Award className="w-4 h-4" /> },
              { key: 'goals', label: '🎯 Objectifs', icon: <Target className="w-4 h-4" /> },
              { key: 'analytics', label: '📈 Analyses', icon: <Zap className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedTab(tab.key as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedTab === tab.key
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Contenu des onglets */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {selectedTab === 'overview' && (
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-200 mb-4">
                    📊 Progression Hebdomadaire
                  </h3>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                    <div className="space-y-4">
                      {userProgress.weeklyProgress.map((day, index) => (
                        <div key={day.date} className="flex items-center gap-4">
                          <div className="text-sm font-medium text-emerald-700 dark:text-emerald-300 w-20">
                            {new Date(day.date).toLocaleDateString('fr-FR', { weekday: 'short' })}
                          </div>
                          <div className="flex-1 bg-emerald-100 dark:bg-emerald-900 rounded-full h-3">
                            <motion.div
                              className="bg-gradient-to-r from-emerald-500 to-blue-500 h-3 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${day.overallScore}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                            />
                          </div>
                          <div className="text-sm font-bold text-emerald-700 dark:text-emerald-300 w-12">
                            {day.overallScore}%
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-200 mb-4">
                    📿 Activités Spirituelles Récentes
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: "🕌", action: "Prière Fajr accomplie", time: "Il y a 2h", reward: "+50 XP" },
                      { icon: "📖", action: "Lecture Sourate Al-Kahf", time: "Hier", reward: "+100 XP" },
                      { icon: "🤲", action: "Sadaqah donnée", time: "Hier", reward: "+75 XP" },
                      { icon: "📚", action: "Règle Fiqh étudiée", time: "Il y a 3h", reward: "+25 XP" }
                    ].map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg flex items-center gap-4"
                      >
                        <div className="text-2xl">{activity.icon}</div>
                        <div className="flex-1">
                          <p className="font-medium text-emerald-800 dark:text-emerald-200">
                            {activity.action}
                          </p>
                          <p className="text-sm text-emerald-600 dark:text-emerald-400">
                            {activity.time}
                          </p>
                        </div>
                        <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                          {activity.reward}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'achievements' && (
              <div>
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-200 mb-6">
                  🏆 Succès Débloqués ({userProgress.achievements.length})
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userProgress.achievements.map((achievement, index) => (
                    <AchievementCard key={achievement.id} achievement={achievement} index={index} />
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'goals' && (
              <div>
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-200 mb-6">
                  🎯 Objectifs Spirituels Actifs ({userProgress.currentGoals.length})
                </h3>
                <div className="grid lg:grid-cols-2 gap-6">
                  {userProgress.currentGoals.map((goal, index) => (
                    <GoalProgress key={goal.id} goal={goal} index={index} />
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'analytics' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-200 mb-4">
                    📈 Statistiques Spirituelles
                  </h3>
                  <div className="space-y-4">
                    {[
                      { label: "Prières à l'heure", value: "96%", color: "emerald" },
                      { label: "Lecture Coran quotidienne", value: "87%", color: "blue" },
                      { label: "Dhikr régulier", value: "92%", color: "purple" },
                      { label: "Actes de charité", value: "78%", color: "yellow" }
                    ].map((stat, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-emerald-700 dark:text-emerald-300">{stat.label}</span>
                          <span className="font-bold text-emerald-800 dark:text-emerald-200">{stat.value}</span>
                        </div>
                        <div className={`w-full bg-${stat.color}-100 dark:bg-${stat.color}-900 rounded-full h-2`}>
                          <div 
                            className={`bg-${stat.color}-500 h-2 rounded-full`} 
                            style={{ width: stat.value }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-200 mb-4">
                    🎖️ Rang dans la Communauté
                  </h3>
                  <div className="text-center">
                    <div className="text-6xl mb-4">👑</div>
                    <h4 className="text-2xl font-bold text-emerald-800 dark:text-emerald-200 mb-2">
                      Top 15%
                    </h4>
                    <p className="text-emerald-600 dark:text-emerald-400 mb-4">
                      Parmi 12,847 membres CED
                    </p>
                    <div className="bg-emerald-50 dark:bg-emerald-950 rounded-lg p-4">
                      <p className="text-sm text-emerald-700 dark:text-emerald-300">
                        "Celui qui guide vers une bonne action aura la même récompense que celui qui la fait" - Prophète ﷺ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PersonalizedProgressVisualizer;