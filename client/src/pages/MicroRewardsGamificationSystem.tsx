import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Gift, Star, Crown, Zap, Heart, Trophy, Coins, Award } from 'lucide-react';

const MicroRewardsGamificationSystem = () => {
  const [userPoints, setUserPoints] = useState(2847);
  const [userLevel, setUserLevel] = useState(5);
  const [recentActions, setRecentActions] = useState<Array<{
    id: string;
    action: string;
    points: number;
    timestamp: Date;
    category: string;
  }>>([]);
  const [availableRewards, setAvailableRewards] = useState<Array<{
    id: string;
    title: string;
    cost: number;
    category: string;
    claimed: boolean;
  }>>([]);

  // Système de micro-récompenses basé sur les actions halal
  const microActions = {
    spiritual: {
      title: "Actions Spirituelles",
      icon: <Heart className="w-5 h-5" />,
      color: "bg-purple-500",
      actions: [
        { id: 'fajr-prayer', title: 'Prière Fajr à l\'heure', points: 25, frequency: 'daily' },
        { id: 'quran-verse', title: 'Lecture 5 versets Coran', points: 15, frequency: 'daily' },
        { id: 'dhikr-session', title: 'Session Dhikr 10 min', points: 10, frequency: 'multiple' },
        { id: 'dua-learning', title: 'Apprendre nouvelle Dua', points: 20, frequency: 'weekly' },
        { id: 'islamic-study', title: 'Étude islamique 30 min', points: 30, frequency: 'daily' }
      ]
    },
    community: {
      title: "Actions Communautaires",
      icon: <Crown className="w-5 h-5" />,
      color: "bg-blue-500",
      actions: [
        { id: 'help-neighbor', title: 'Aider un voisin', points: 50, frequency: 'weekly' },
        { id: 'charity-act', title: 'Acte de charité', points: 40, frequency: 'weekly' },
        { id: 'visit-sick', title: 'Visite à un malade', points: 60, frequency: 'monthly' },
        { id: 'share-knowledge', title: 'Partager connaissance', points: 35, frequency: 'weekly' },
        { id: 'community-service', title: 'Service communautaire', points: 80, frequency: 'monthly' }
      ]
    },
    personal: {
      title: "Développement Personnel",
      icon: <Star className="w-5 h-5" />,
      color: "bg-green-500",
      actions: [
        { id: 'healthy-meal', title: 'Repas sain halal', points: 5, frequency: 'multiple' },
        { id: 'exercise-halal', title: 'Exercice physique', points: 15, frequency: 'daily' },
        { id: 'no-waste', title: 'Journée zéro gaspillage', points: 20, frequency: 'daily' },
        { id: 'skill-learning', title: 'Apprentissage compétence', points: 25, frequency: 'weekly' },
        { id: 'mindful-gratitude', title: 'Gratitude consciente', points: 10, frequency: 'daily' }
      ]
    },
    environmental: {
      title: "Actions Écologiques",
      icon: <Zap className="w-5 h-5" />,
      color: "bg-emerald-500",
      actions: [
        { id: 'water-conservation', title: 'Économie d\'eau', points: 10, frequency: 'daily' },
        { id: 'plastic-reduction', title: 'Réduction plastique', points: 15, frequency: 'daily' },
        { id: 'plant-care', title: 'Soin des plantes', points: 8, frequency: 'daily' },
        { id: 'public-transport', title: 'Transport en commun', points: 12, frequency: 'daily' },
        { id: 'energy-saving', title: 'Économie d\'énergie', points: 18, frequency: 'weekly' }
      ]
    }
  };

  // Système de récompenses à débloquer
  const rewardSystem = {
    daily: [
      { id: 'morning-dua', title: 'Collection Dua Matinale', cost: 50, category: 'spiritual' },
      { id: 'hadith-wisdom', title: 'Sagesse Hadith Quotidien', cost: 75, category: 'knowledge' },
      { id: 'health-tip', title: 'Conseil Santé Prophétique', cost: 40, category: 'wellness' }
    ],
    weekly: [
      { id: 'quran-tafsir', title: 'Accès Tafsir Premium', cost: 200, category: 'spiritual' },
      { id: 'community-badge', title: 'Badge Communautaire', cost: 150, category: 'social' },
      { id: 'eco-challenge', title: 'Défi Écologique Spécial', cost: 180, category: 'environment' }
    ],
    monthly: [
      { id: 'scholarship-course', title: 'Cours avec Scholar', cost: 500, category: 'education' },
      { id: 'charity-fund', title: 'Contribution Fonds Charité', cost: 800, category: 'charity' },
      { id: 'premium-features', title: 'Fonctionnalités Premium', cost: 600, category: 'technology' }
    ],
    special: [
      { id: 'hajj-savings', title: 'Contribution Épargne Hajj', cost: 1000, category: 'pilgrimage' },
      { id: 'family-package', title: 'Package Familial Complet', cost: 1500, category: 'family' },
      { id: 'mentorship', title: 'Mentorat Personnalisé', cost: 2000, category: 'growth' }
    ]
  };

  // Badges et achievements
  const achievements = [
    { id: 'first-prayer', title: 'Première Prière', icon: '🕌', earned: true, rarity: 'common' },
    { id: 'consistent-reader', title: 'Lecteur Assidu', icon: '📖', earned: true, rarity: 'rare' },
    { id: 'community-helper', title: 'Aide Communautaire', icon: '🤝', earned: false, rarity: 'epic' },
    { id: 'eco-warrior', title: 'Guerrier Écologique', icon: '🌱', earned: true, rarity: 'rare' },
    { id: 'knowledge-seeker', title: 'Chercheur de Savoir', icon: '🎓', earned: false, rarity: 'legendary' },
    { id: 'charity-champion', title: 'Champion Charité', icon: '💝', earned: false, rarity: 'epic' }
  ];

  const completeAction = (categoryKey: string, actionId: string, points: number, title: string) => {
    const newAction = {
      id: Date.now().toString(),
      action: title,
      points: points,
      timestamp: new Date(),
      category: categoryKey
    };
    
    setRecentActions(prev => [newAction, ...prev.slice(0, 9)]);
    setUserPoints(prev => prev + points);
    
    // Animation de notification
    setTimeout(() => {
      // Ici on pourrait ajouter une notification toast
    }, 100);
  };

  const claimReward = (rewardId: string, cost: number) => {
    if (userPoints >= cost) {
      setUserPoints(prev => prev - cost);
      setAvailableRewards(prev => 
        prev.map(reward => 
          reward.id === rewardId ? { ...reward, claimed: true } : reward
        )
      );
    }
  };

  const calculateLevelProgress = () => {
    const baseXP = userLevel * 1000;
    const nextLevelXP = (userLevel + 1) * 1000;
    const currentProgress = ((userPoints - baseXP) / (nextLevelXP - baseXP)) * 100;
    return Math.max(0, Math.min(100, currentProgress));
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-100 text-gray-800';
      case 'rare': return 'bg-blue-100 text-blue-800';
      case 'epic': return 'bg-purple-100 text-purple-800';
      case 'legendary': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Initialiser les récompenses disponibles
  useEffect(() => {
    const allRewards = [
      ...rewardSystem.daily.map(r => ({ ...r, claimed: false })),
      ...rewardSystem.weekly.map(r => ({ ...r, claimed: false })),
      ...rewardSystem.monthly.map(r => ({ ...r, claimed: false })),
      ...rewardSystem.special.map(r => ({ ...r, claimed: false }))
    ];
    setAvailableRewards(allRewards);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            🎁 Micro-Rewards Gamification System
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Système de micro-récompenses pour encourager les bonnes actions halal
          </p>
          <p className="text-sm text-gray-500">
            "مَنْ عَمِلَ صَالِحًا فَلِنَفْسِهِ" - "Quiconque fait une bonne œuvre, c'est pour son propre bien"
          </p>
        </div>

        {/* User Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg">
            <CardContent className="p-4 text-center">
              <Coins className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">{userPoints.toLocaleString()}</div>
              <div className="text-sm opacity-90">Points Barakah</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-400 to-violet-500 text-white shadow-lg">
            <CardContent className="p-4 text-center">
              <Crown className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">Niveau {userLevel}</div>
              <div className="text-sm opacity-90">Servant Dévoué</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg">
            <CardContent className="p-4 text-center">
              <Trophy className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">{achievements.filter(a => a.earned).length}</div>
              <div className="text-sm opacity-90">Badges Gagnés</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-400 to-cyan-500 text-white shadow-lg">
            <CardContent className="p-4 text-center">
              <Gift className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">{recentActions.length}</div>
              <div className="text-sm opacity-90">Actions Récentes</div>
            </CardContent>
          </Card>
        </div>

        {/* Level Progress */}
        <Card className="mb-8 bg-white shadow-lg border-2 border-yellow-200">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-yellow-700">Progression Niveau {userLevel}</h3>
              <Badge className="bg-yellow-100 text-yellow-800">
                {Math.round(calculateLevelProgress())}% vers Niveau {userLevel + 1}
              </Badge>
            </div>
            <Progress value={calculateLevelProgress()} className="h-4" />
            <p className="text-sm text-gray-600 mt-2">
              {1000 - (userPoints % 1000)} points restants pour le niveau suivant
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Actions Categories */}
          <div className="lg:col-span-2 space-y-6">
            {Object.entries(microActions).map(([categoryKey, category]) => (
              <Card key={categoryKey} className="shadow-lg border-2 border-gray-200 hover:border-orange-300 transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.color} text-white`}>
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {category.actions.map((action) => (
                      <div key={action.id} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex justify-between items-center mb-2">
                          <h5 className="font-medium text-sm">{action.title}</h5>
                          <Badge className="bg-orange-100 text-orange-800">
                            +{action.points}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500 capitalize">{action.frequency}</span>
                          <Button
                            size="sm"
                            onClick={() => completeAction(categoryKey, action.id, action.points, action.title)}
                            className={`${category.color} hover:opacity-90 text-white text-xs`}
                          >
                            Accomplir
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar with Recent Actions and Rewards */}
          <div className="space-y-6">
            {/* Recent Actions */}
            <Card className="shadow-lg border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Actions Récentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {recentActions.length > 0 ? (
                    recentActions.map((action) => (
                      <div key={action.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                        <div>
                          <div className="text-sm font-medium">{action.action}</div>
                          <div className="text-xs text-gray-500">
                            {action.timestamp.toLocaleTimeString()}
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">
                          +{action.points}
                        </Badge>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500 text-center py-4">
                      Aucune action récente
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Available Rewards */}
            <Card className="shadow-lg border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Gift className="w-5 h-5" />
                  Récompenses Disponibles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {availableRewards.slice(0, 6).map((reward) => (
                    <div key={reward.id} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="font-medium text-sm">{reward.title}</h5>
                        <Badge className="bg-purple-100 text-purple-800">
                          {reward.cost} pts
                        </Badge>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => claimReward(reward.id, reward.cost)}
                        disabled={userPoints < reward.cost || reward.claimed}
                        className={`w-full text-xs ${
                          reward.claimed ? 'bg-gray-400' : 
                          userPoints >= reward.cost ? 'bg-purple-500 hover:bg-purple-600' : 'bg-gray-300'
                        }`}
                      >
                        {reward.claimed ? '✅ Réclamé' : 'Réclamer'}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievement Showcase */}
            <Card className="shadow-lg border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Collection Badges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`text-center p-2 rounded-lg border transition-all ${
                        achievement.earned ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50 opacity-60'
                      }`}
                    >
                      <div className="text-2xl mb-1">{achievement.icon}</div>
                      <div className="text-xs font-medium mb-1">{achievement.title}</div>
                      <Badge className={getRarityColor(achievement.rarity)}>
                        {achievement.rarity}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Motivational Quote */}
        <Card className="mt-8 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-4">🌟</div>
            <p className="text-lg font-medium mb-2">
              "وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ"
            </p>
            <p className="text-sm opacity-90 mb-4">
              "Et le bien que vous préparez pour vos âmes, vous le trouverez auprès d'Allah" - Sourate 2:110
            </p>
            <p className="text-xs opacity-75">
              Chaque bonne action est une graine plantée pour l'au-delà
            </p>
          </CardContent>
        </Card>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>© 2025 Club Empreinte Digitale - Yakoubi Yamina | CED HalalTech™</p>
          <p>Micro-Rewards Gamification System - 100% Conforme Coran & Sunna</p>
        </div>
      </div>
    </div>
  );
};

export default MicroRewardsGamificationSystem;