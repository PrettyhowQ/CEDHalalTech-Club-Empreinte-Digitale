import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import ProtectionFooter from '@/components/ProtectionFooter';
import { Leaf, Star, Trophy, Target, Zap, Heart, CheckCircle, Gift } from 'lucide-react';

interface Challenge {
  id: number;
  title: string;
  description: string;
  islamicPrinciple: string;
  ayahReference?: string;
  xpReward: number;
  duration: string;
  category: 'energy' | 'water' | 'waste' | 'transport' | 'consumption';
  difficulty: 'easy' | 'medium' | 'hard';
  completed: boolean;
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  islamicTitle: string;
  icon: string;
  unlocked: boolean;
  requirement: string;
}

export default function GamificationStyleVieEcologique() {
  const [userLevel, setUserLevel] = useState(3);
  const [currentXP, setCurrentXP] = useState(750);
  const [totalXP, setTotalXP] = useState(2150);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([1, 3, 5]);

  const challenges: Challenge[] = [
    {
      id: 1,
      title: "Économie d'Eau Prophétique",
      description: "Réduire sa consommation d'eau de 30% cette semaine",
      islamicPrinciple: "Suivre l'exemple du Prophète ﷺ qui économisait l'eau même au bord d'une rivière",
      ayahReference: "Sunan Ibn Majah",
      xpReward: 150,
      duration: "7 jours",
      category: 'water',
      difficulty: 'medium',
      completed: true
    },
    {
      id: 2,
      title: "Zéro Gaspillage Alimentaire",
      description: "Finir tous ses repas sans rien jeter pendant 5 jours",
      islamicPrinciple: "L'interdiction de l'Israf (gaspillage) mentionnée dans le Coran",
      ayahReference: "Sourate Al-A'raf (7:31)",
      xpReward: 200,
      duration: "5 jours",
      category: 'waste',
      difficulty: 'medium',
      completed: false
    },
    {
      id: 3,
      title: "Transport Vert Quotidien",
      description: "Utiliser vélo/marche/transport public au lieu de voiture",
      islamicPrinciple: "Préservation de la création d'Allah et réduction de la pollution",
      xpReward: 100,
      duration: "3 jours",
      category: 'transport',
      difficulty: 'easy',
      completed: true
    },
    {
      id: 4,
      title: "Énergie Renouvelable Maison",
      description: "Installer panneaux solaires ou passer à l'électricité verte",
      islamicPrinciple: "Utilisation responsable des ressources naturelles créées par Allah",
      xpReward: 500,
      duration: "30 jours",
      category: 'energy',
      difficulty: 'hard',
      completed: false
    },
    {
      id: 5,
      title: "Plantation d'Arbres Sadaqah",
      description: "Planter 3 arbres ce mois-ci",
      islamicPrinciple: "Chaque fruit mangé de l'arbre planté compte comme une Sadaqah",
      ayahReference: "Sahih Muslim",
      xpReward: 300,
      duration: "30 jours",
      category: 'consumption',
      difficulty: 'medium',
      completed: true
    },
    {
      id: 6,
      title: "Consommation Consciente",
      description: "Acheter uniquement le nécessaire pendant 2 semaines",
      islamicPrinciple: "Modération dans la consommation selon l'Islam",
      ayahReference: "Sourate Al-Furqan (25:67)",
      xpReward: 250,
      duration: "14 jours",
      category: 'consumption',
      difficulty: 'medium',
      completed: false
    }
  ];

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Gardien de l'Eau",
      description: "Économiser 1000L d'eau",
      islamicTitle: "حافظ الماء",
      icon: "💧",
      unlocked: true,
      requirement: "Compléter 5 défis d'économie d'eau"
    },
    {
      id: 2,
      title: "Planteur de Sadaqah",
      description: "Planter 10 arbres",
      islamicTitle: "غارس الصدقة",
      icon: "🌳",
      unlocked: true,
      requirement: "Planter au moins 10 arbres"
    },
    {
      id: 3,
      title: "Champion Anti-Gaspillage",
      description: "30 jours sans gaspillage",
      islamicTitle: "بطل ضد الإسراف",
      icon: "♻️",
      unlocked: false,
      requirement: "0% gaspillage pendant 30 jours"
    },
    {
      id: 4,
      title: "Éco-Khalifah",
      description: "Level 10 atteint",
      islamicTitle: "خليفة بيئي",
      icon: "👑",
      unlocked: false,
      requirement: "Atteindre le niveau 10"
    }
  ];

  const levelRequirements = [0, 100, 300, 600, 1000, 1500, 2100, 2800, 3600, 4500, 5500];
  const nextLevelXP = levelRequirements[userLevel] || 6000;
  const progressToNextLevel = ((currentXP - (levelRequirements[userLevel - 1] || 0)) / 
    (nextLevelXP - (levelRequirements[userLevel - 1] || 0))) * 100;

  const handleCompleteChallenge = (challengeId: number) => {
    if (!completedChallenges.includes(challengeId)) {
      const challenge = challenges.find(c => c.id === challengeId);
      if (challenge) {
        setCompletedChallenges([...completedChallenges, challengeId]);
        setCurrentXP(currentXP + challenge.xpReward);
        setTotalXP(totalXP + challenge.xpReward);
        
        // Check level up
        if (currentXP + challenge.xpReward >= nextLevelXP) {
          setUserLevel(userLevel + 1);
        }
      }
    }
  };

  const filteredChallenges = selectedCategory === 'all' 
    ? challenges 
    : challenges.filter(c => c.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'water': return '💧';
      case 'energy': return '⚡';
      case 'waste': return '♻️';
      case 'transport': return '🚲';
      case 'consumption': return '🛒';
      default: return '🌱';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getIslamicRank = (level: number) => {
    if (level >= 10) return "خليفة البيئة (Khalifah Environnemental)";
    if (level >= 7) return "حامي الطبيعة (Protecteur de la Nature)";
    if (level >= 5) return "صديق الأرض (Ami de la Terre)";
    if (level >= 3) return "طالب البيئة (Étudiant Environnemental)";
    return "مبتدئ أخضر (Débutant Vert)";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header avec Profil Utilisateur */}
        <Card className="mb-8 border-emerald-500 border-2 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-emerald-600 to-green-600 text-white">
            <CardTitle className="text-3xl text-center flex items-center justify-center gap-3">
              <Leaf className="h-10 w-10" />
              Gamification Style de Vie Écologique Islamique
              <Trophy className="h-10 w-10" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Profil et Niveau */}
              <Card className="border-green-200">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">🕌</div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Niveau {userLevel}</h3>
                  <p className="text-emerald-600 font-semibold mb-4">{getIslamicRank(userLevel)}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>XP Actuel: {currentXP}</span>
                      <span>Prochain: {nextLevelXP}</span>
                    </div>
                    <Progress value={progressToNextLevel} className="h-3" />
                  </div>
                  
                  <Badge className="bg-emerald-100 text-emerald-800">
                    {nextLevelXP - currentXP} XP jusqu'au prochain niveau
                  </Badge>
                </CardContent>
              </Card>

              {/* Statistiques */}
              <Card className="border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">
                    📊 Statistiques
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Total XP:</span>
                      <Badge className="bg-blue-100 text-blue-800">{totalXP}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Défis Complétés:</span>
                      <Badge className="bg-green-100 text-green-800">{completedChallenges.length}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Succès Débloqués:</span>
                      <Badge className="bg-purple-100 text-purple-800">
                        {achievements.filter(a => a.unlocked).length}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Rang Global:</span>
                      <Badge className="bg-yellow-100 text-yellow-800">#47</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Motivation Spirituelle */}
              <Card className="border-purple-200">
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-purple-800 mb-3">Motivation Islamique</h3>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-700 italic mb-2">
                      "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ"
                    </p>
                    <p className="text-xs text-purple-600">
                      "Et Nous avons fait de l'eau toute chose vivante"
                    </p>
                    <p className="text-xs text-purple-600 mt-2">
                      Sourate Al-Anbiya (21:30)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Défis Écologiques */}
          <div className="lg:col-span-2">
            <Card className="border-green-500 border-2">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6" />
                  Défis Écologiques Islamiques
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                
                {/* Filtres par Catégorie */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={selectedCategory === 'all' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory('all')}
                      className="text-xs"
                    >
                      🌱 Tous
                    </Button>
                    {['water', 'energy', 'waste', 'transport', 'consumption'].map(category => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className="text-xs"
                      >
                        {getCategoryIcon(category)} {category}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Liste des Défis */}
                <div className="space-y-4">
                  {filteredChallenges.map((challenge) => (
                    <Card key={challenge.id} className={`border-2 ${
                      completedChallenges.includes(challenge.id) 
                        ? 'border-green-300 bg-green-50' 
                        : 'border-gray-200 hover:border-green-300'
                    }`}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-bold text-gray-800">{challenge.title}</h3>
                              {completedChallenges.includes(challenge.id) && (
                                <CheckCircle className="h-5 w-5 text-green-600" />
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{challenge.description}</p>
                            
                            {/* Principe Islamique */}
                            <div className="bg-blue-50 p-3 rounded-lg mb-3">
                              <p className="text-sm text-blue-800">
                                <strong>Principe Islamique:</strong> {challenge.islamicPrinciple}
                              </p>
                              {challenge.ayahReference && (
                                <p className="text-xs text-blue-600 mt-1">
                                  <strong>Référence:</strong> {challenge.ayahReference}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge className={getDifficultyColor(challenge.difficulty)}>
                              {challenge.difficulty}
                            </Badge>
                            <Badge variant="outline">{challenge.duration}</Badge>
                            <Badge className="bg-yellow-100 text-yellow-800">
                              +{challenge.xpReward} XP
                            </Badge>
                          </div>
                          
                          {!completedChallenges.includes(challenge.id) ? (
                            <Button
                              size="sm"
                              onClick={() => handleCompleteChallenge(challenge.id)}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <Zap className="h-4 w-4 mr-1" />
                              Commencer
                            </Button>
                          ) : (
                            <Badge className="bg-green-100 text-green-800">
                              ✓ Complété
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Succès et Récompenses */}
          <div>
            <Card className="border-purple-500 border-2 mb-6">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-6 w-6" />
                  Succès Islamiques
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  {achievements.map((achievement) => (
                    <Card key={achievement.id} className={`border ${
                      achievement.unlocked ? 'border-gold bg-yellow-50' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <CardContent className="p-3">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{achievement.icon}</div>
                          <div className="flex-1">
                            <h4 className={`font-semibold ${
                              achievement.unlocked ? 'text-yellow-800' : 'text-gray-500'
                            }`}>
                              {achievement.title}
                            </h4>
                            <p className="text-xs text-gray-600 mb-1">
                              {achievement.islamicTitle}
                            </p>
                            <p className="text-xs text-gray-500">
                              {achievement.requirement}
                            </p>
                          </div>
                          {achievement.unlocked && (
                            <Star className="h-5 w-5 text-yellow-500" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Récompenses Spirituelles */}
            <Card className="border-green-500 border-2">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-6 w-6" />
                  Récompenses Spirituelles
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">🌳 Sadaqah Jariyah</h4>
                    <p className="text-sm text-green-700">
                      Chaque arbre planté = aumône continue
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">💧 Préservation Sunna</h4>
                    <p className="text-sm text-blue-700">
                      Économie d'eau = suivre l'exemple prophétique
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">🤲 Amanah Respectée</h4>
                    <p className="text-sm text-purple-700">
                      Gérance responsable de la Terre
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <ProtectionFooter />
    </div>
  );
}