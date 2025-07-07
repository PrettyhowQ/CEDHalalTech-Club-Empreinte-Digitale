import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Heart, Zap, Shield, Star, Gift, Crown, Moon, Sun, Book } from 'lucide-react';

const SpiritualWellnessGamification = () => {
  const [userStats, setUserStats] = useState({
    spiritualLevel: 3,
    wellnessPoints: 2450,
    streakDays: 15,
    totalBadges: 8,
    dailyGoals: {
      fajr: true,
      dhikr: false,
      quran: true,
      dua: false,
      istighfar: true
    }
  });

  const [selectedChallenge, setSelectedChallenge] = useState('daily');

  // Défis spirituels gamifiés
  const challenges = {
    daily: {
      title: "Défis Quotidiens",
      icon: <Sun className="w-5 h-5" />,
      color: "bg-yellow-500",
      items: [
        {
          id: 'fajr-prayer',
          title: 'Prière Fajr à l\'heure',
          description: 'Accomplir Fajr dans les temps prescrits',
          reward: 50,
          streak: 7,
          hadith: 'Sahih Bukhari 574',
          completed: true
        },
        {
          id: 'morning-dhikr',
          title: 'Adhkar du matin',
          description: 'Réciter les invocations matinales complètes',
          reward: 30,
          streak: 3,
          source: 'Hisnul Muslim',
          completed: false
        },
        {
          id: 'quran-daily',
          title: 'Lecture Coranique',
          description: 'Lire au minimum 1 page du Saint Coran',
          reward: 40,
          streak: 12,
          verset: 'Sourate 17:9',
          completed: true
        },
        {
          id: 'evening-dua',
          title: 'Dua du soir',
          description: 'Invocations de protection avant le coucher',
          reward: 25,
          streak: 5,
          hadith: 'Sahih Muslim 2714',
          completed: false
        }
      ]
    },
    weekly: {
      title: "Défis Hebdomadaires",
      icon: <Crown className="w-5 h-5" />,
      color: "bg-purple-500",
      items: [
        {
          id: 'jumu-attendance',
          title: 'Présence Jumu\'ah',
          description: 'Assister à la prière du vendredi à la mosquée',
          reward: 200,
          progress: 75,
          hadith: 'Sahih Bukhari 893',
          special: true
        },
        {
          id: 'quran-reflection',
          title: 'Méditation Coranique',
          description: 'Étudier et méditer sur 5 versets avec Tafsir',
          reward: 150,
          progress: 40,
          source: 'Tafsir Ibn Kathir',
          special: false
        },
        {
          id: 'family-islamic-time',
          title: 'Temps Familial Islamique',
          description: 'Organiser 2 sessions d\'apprentissage familial',
          reward: 180,
          progress: 50,
          hadith: 'Tirmidhi 2685',
          special: false
        }
      ]
    },
    monthly: {
      title: "Défis Mensuels",
      icon: <Star className="w-5 h-5" />,
      color: "bg-indigo-500",
      items: [
        {
          id: 'charity-goal',
          title: 'Objectif Sadaqah',
          description: 'Donner en aumône selon ses moyens 10 fois',
          reward: 500,
          progress: 60,
          verset: 'Sourate 2:261',
          epic: true
        },
        {
          id: 'knowledge-seeking',
          title: 'Quête de Savoir',
          description: 'Apprendre 20 nouveaux Hadiths authentiques',
          reward: 400,
          progress: 35,
          hadith: 'Sahih Muslim 2699',
          epic: true
        },
        {
          id: 'community-service',
          title: 'Service Communautaire',
          description: 'Participer à 3 activités caritatives',
          reward: 600,
          progress: 66,
          principle: 'Ta\'awun',
          epic: true
        }
      ]
    }
  };

  // Système de badges spirituels
  const badges = [
    {
      id: 'early-riser',
      title: 'Lève-tôt Spirituel',
      description: 'Fajr accomplie 30 jours consécutifs',
      icon: <Sun className="w-8 h-8" />,
      color: 'text-yellow-500',
      earned: true,
      rarity: 'Rare'
    },
    {
      id: 'quran-lover',
      title: 'Amoureux du Coran',
      description: 'Lecture quotidienne pendant 60 jours',
      icon: <Book className="w-8 h-8" />,
      color: 'text-green-500',
      earned: true,
      rarity: 'Épique'
    },
    {
      id: 'dhikr-master',
      title: 'Maître du Dhikr',
      description: '10,000 invocations accomplies',
      icon: <Heart className="w-8 h-8" />,
      color: 'text-pink-500',
      earned: false,
      rarity: 'Légendaire'
    },
    {
      id: 'knowledge-seeker',
      title: 'Chercheur de Savoir',
      description: '100 Hadiths mémorisés',
      icon: <Star className="w-8 h-8" />,
      color: 'text-purple-500',
      earned: true,
      rarity: 'Rare'
    },
    {
      id: 'charitable-heart',
      title: 'Cœur Charitable',
      description: '50 actes de charité accomplis',
      icon: <Gift className="w-8 h-8" />,
      color: 'text-blue-500',
      earned: false,
      rarity: 'Épique'
    },
    {
      id: 'night-warrior',
      title: 'Guerrier de la Nuit',
      description: 'Qiyam al-Layl 20 nuits',
      icon: <Moon className="w-8 h-8" />,
      color: 'text-indigo-500',
      earned: true,
      rarity: 'Légendaire'
    }
  ];

  const currentChallenges = challenges[selectedChallenge as keyof typeof challenges];

  const calculateProgress = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Commun': return 'bg-gray-100 text-gray-800';
      case 'Rare': return 'bg-blue-100 text-blue-800';
      case 'Épique': return 'bg-purple-100 text-purple-800';
      case 'Légendaire': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            🎮 Spiritual Wellness Motivation Gamification
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Transformez votre cheminement spirituel en aventure gamifiée halal
          </p>
          <p className="text-sm text-gray-500">
            "وَاعْبُدْ رَبَّكَ حَتَّىٰ يَأْتِيَكَ الْيَقِينُ" - "Et adore ton Seigneur jusqu'à ce que te vienne la certitude"
          </p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg">
            <CardContent className="p-6 text-center">
              <Zap className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">{userStats.spiritualLevel}</div>
              <div className="text-sm opacity-90">Niveau Spirituel</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-400 to-cyan-500 text-white shadow-lg">
            <CardContent className="p-6 text-center">
              <Star className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">{userStats.wellnessPoints.toLocaleString()}</div>
              <div className="text-sm opacity-90">Points Barakah</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-lg">
            <CardContent className="p-6 text-center">
              <Shield className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">{userStats.streakDays}</div>
              <div className="text-sm opacity-90">Jours Consécutifs</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-400 to-pink-500 text-white shadow-lg">
            <CardContent className="p-6 text-center">
              <Crown className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">{userStats.totalBadges}</div>
              <div className="text-sm opacity-90">Badges Gagnés</div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8 bg-white shadow-lg border-2 border-purple-200">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-700 flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Progression Quotidienne
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {Object.entries(userStats.dailyGoals).map(([goal, completed]) => (
                <div key={goal} className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 ${
                    completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {completed ? '✅' : '⏳'}
                  </div>
                  <div className="text-sm font-medium capitalize">{goal}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Challenge Selector */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {Object.entries(challenges).map(([key, challenge]) => (
            <Button
              key={key}
              variant={selectedChallenge === key ? "default" : "outline"}
              onClick={() => setSelectedChallenge(key)}
              className={`flex items-center gap-2 ${
                selectedChallenge === key ? challenge.color + ' text-white' : ''
              }`}
            >
              {challenge.icon}
              {challenge.title}
            </Button>
          ))}
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentChallenges.items.map((challenge) => (
            <Card key={challenge.id} className={`shadow-lg border-2 transition-all duration-300 ${
              challenge.completed ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-white hover:border-purple-300'
            }`}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{challenge.title}</CardTitle>
                  <Badge className={`${currentChallenges.color} text-white`}>
                    +{challenge.reward} Points
                  </Badge>
                </div>
                {(challenge as any).epic && (
                  <Badge className="bg-yellow-100 text-yellow-800 w-fit">⭐ ÉPIQUE</Badge>
                )}
                {(challenge as any).special && (
                  <Badge className="bg-purple-100 text-purple-800 w-fit">✨ SPÉCIAL</Badge>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                
                {/* Progress Bar pour défis en cours */}
                {(challenge as any).progress !== undefined && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progression</span>
                      <span>{(challenge as any).progress}%</span>
                    </div>
                    <Progress value={(challenge as any).progress} className="h-2" />
                  </div>
                )}

                {/* Streak pour défis quotidiens */}
                {challenge.streak && (
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-orange-600 font-medium">
                      Série: {challenge.streak} jours
                    </span>
                  </div>
                )}
                
                {/* Sources islamiques */}
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <div className="text-sm text-gray-700">
                    {challenge.hadith && (
                      <div className="flex items-center gap-2 mb-1">
                        <Book className="w-4 h-4 text-blue-500" />
                        <span className="font-medium">Hadith:</span> {challenge.hadith}
                      </div>
                    )}
                    {(challenge as any).verset && (
                      <div className="flex items-center gap-2 mb-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="font-medium">Verset:</span> {(challenge as any).verset}
                      </div>
                    )}
                    {(challenge as any).source && (
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-green-500" />
                        <span className="font-medium">Source:</span> {(challenge as any).source}
                      </div>
                    )}
                  </div>
                </div>

                <Button
                  className={`w-full ${
                    challenge.completed ? 'bg-green-500 hover:bg-green-600' : currentChallenges.color + ' hover:opacity-90'
                  }`}
                  disabled={challenge.completed}
                >
                  {challenge.completed ? '✅ Complété - Barakallahu feek' : 'Commencer le Défi'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Badges Collection */}
        <Card className="bg-white shadow-lg border-2 border-indigo-200 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-indigo-700 flex items-center gap-2">
              <Crown className="w-6 h-6" />
              Collection de Badges Spirituels
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {badges.map((badge) => (
                <div
                  key={badge.id}
                  className={`text-center p-4 rounded-lg border-2 transition-all ${
                    badge.earned 
                      ? 'border-green-300 bg-green-50 hover:bg-green-100' 
                      : 'border-gray-200 bg-gray-50 opacity-60'
                  }`}
                >
                  <div className={`mb-2 ${badge.earned ? badge.color : 'text-gray-400'}`}>
                    {badge.icon}
                  </div>
                  <h4 className="font-medium text-sm mb-1">{badge.title}</h4>
                  <p className="text-xs text-gray-600 mb-2">{badge.description}</p>
                  <Badge className={getRarityColor(badge.rarity)}>
                    {badge.rarity}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Motivational Quote */}
        <Card className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-4">🌟</div>
            <p className="text-lg font-medium mb-2">
              "وَمَن جَاهَدَ فَإِنَّمَا يُجَاهِدُ لِنَفْسِهِ"
            </p>
            <p className="text-sm opacity-90">
              "Et quiconque lutte, ne lutte que pour lui-même" - Sourate 29:6
            </p>
            <p className="text-xs opacity-75 mt-4">
              Chaque effort spirituel est une victoire sur soi-même
            </p>
          </CardContent>
        </Card>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>© 2025 Club Empreinte Digitale - Yakoubi Yamina | CED HalalTech™</p>
          <p>Spiritual Wellness Motivation Gamification - 100% Conforme Coran & Sunna</p>
        </div>
      </div>
    </div>
  );
};

export default SpiritualWellnessGamification;