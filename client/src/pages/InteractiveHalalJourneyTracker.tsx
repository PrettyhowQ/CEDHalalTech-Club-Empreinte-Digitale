import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Star, Calendar, Trophy, Heart, Book, Sun, Moon, CheckCircle } from 'lucide-react';

const InteractiveHalalJourneyTracker = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [totalXP, setTotalXP] = useState(0);
  const [completedMilestones, setCompletedMilestones] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('spirituel');

  // Milestones par catégorie
  const milestoneCategories = {
    spirituel: {
      title: "Cheminement Spirituel",
      icon: <Heart className="w-5 h-5" />,
      color: "bg-pink-500",
      milestones: [
        { id: 'salat-reguliere', title: 'Prières Régulières', description: 'Accomplir les 5 prières quotidiennes pendant 7 jours', xp: 150, hadith: 'Sahih Bukhari 528' },
        { id: 'lecture-coran', title: 'Lecture Coranique', description: 'Lire 1 page du Coran chaque jour pendant 30 jours', xp: 300, verset: 'Sourate 17:9' },
        { id: 'dhikr-matin', title: 'Dhikr Matinal', description: 'Réciter les invocations du matin 14 jours consécutifs', xp: 200, hadith: 'Sahih Muslim 2723' },
        { id: 'istighfar-100', title: 'Istighfar Quotidien', description: 'Réciter 100 fois Astaghfirullah par jour', xp: 250, hadith: 'Sahih Bukhari 6307' }
      ]
    },
    apprentissage: {
      title: "Apprentissage Islamique",
      icon: <Book className="w-5 h-5" />,
      color: "bg-blue-500",
      milestones: [
        { id: 'hadith-etude', title: 'Étude des Hadiths', description: 'Apprendre 10 hadiths authentiques avec leurs chaînes', xp: 400, source: 'Sahih Bukhari & Muslim' },
        { id: 'fiqh-basics', title: 'Fiqh Fondamental', description: 'Maîtriser les bases du Fiqh selon les 4 écoles', xp: 500, reference: '4 Madhabs' },
        { id: 'arabe-coranique', title: 'Arabe Coranique', description: 'Comprendre 50 racines arabes du Coran', xp: 600, objectif: 'Compréhension directe' },
        { id: 'sira-prophete', title: 'Sira du Prophète ﷺ', description: 'Étudier la biographie complète du Prophète ﷺ', xp: 700, source: 'Ibn Hisham' }
      ]
    },
    communautaire: {
      title: "Engagement Communautaire",
      icon: <Trophy className="w-5 h-5" />,
      color: "bg-green-500",
      milestones: [
        { id: 'aide-voisins', title: 'Aide aux Voisins', description: 'Aider 3 voisins différents selon la Sunna', xp: 300, hadith: 'Sahih Bukhari 6014' },
        { id: 'visite-malades', title: 'Visite aux Malades', description: 'Rendre visite à 5 malades pour Allah', xp: 400, hadith: 'Sahih Muslim 2568' },
        { id: 'enseignement-islam', title: 'Enseignement', description: 'Enseigner 1 aspect de l\'Islam à 10 personnes', xp: 500, hadith: 'Tirmidhi 2685' },
        { id: 'reconciliation', title: 'Réconciliation', description: 'Réconcilier 2 musulmans en conflit', xp: 600, verset: 'Sourate 49:10' }
      ]
    },
    ethique: {
      title: "Éthique & Comportement",
      icon: <Sun className="w-5 h-5" />,
      color: "bg-yellow-500",
      milestones: [
        { id: 'veracite', title: 'Véracité Totale', description: 'Dire uniquement la vérité pendant 30 jours', xp: 800, hadith: 'Sahih Bukhari 6094' },
        { id: 'patience', title: 'Patience & Sabr', description: 'Pratiquer la patience dans 10 situations difficiles', xp: 700, verset: 'Sourate 2:155' },
        { id: 'generosity', title: 'Générosité', description: 'Faire 20 actes de générosité sans ostentation', xp: 600, hadith: 'Sahih Bukhari 1423' },
        { id: 'humilite', title: 'Humilité', description: 'Pratiquer l\'humilité dans toutes les interactions', xp: 900, hadith: 'Sahih Muslim 2588' }
      ]
    }
  };

  const currentMilestones = milestoneCategories[selectedCategory as keyof typeof milestoneCategories];

  const calculateLevel = (xp: number) => {
    return Math.floor(xp / 1000) + 1;
  };

  const getProgressToNextLevel = (xp: number) => {
    const currentLevelXP = (calculateLevel(xp) - 1) * 1000;
    const nextLevelXP = calculateLevel(xp) * 1000;
    return ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
  };

  const completeMilestone = (milestoneId: string, xp: number) => {
    if (!completedMilestones.includes(milestoneId)) {
      setCompletedMilestones([...completedMilestones, milestoneId]);
      setTotalXP(totalXP + xp);
      setCurrentLevel(calculateLevel(totalXP + xp));
    }
  };

  const getTotalCompletedMilestones = () => {
    return completedMilestones.length;
  };

  const getTotalAvailableMilestones = () => {
    return Object.values(milestoneCategories).reduce((total, category) => total + category.milestones.length, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            🌟 Interactive Halal Journey Milestone Tracker
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Suivez votre progression spirituelle selon le Coran et la Sunna authentique
          </p>
          <p className="text-sm text-gray-500">
            "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا" - "Et quiconque craint Allah, Il lui donnera une issue"
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white shadow-lg border-2 border-green-200">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{currentLevel}</div>
              <div className="text-sm text-gray-600">Niveau Spirituel</div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg border-2 border-blue-200">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{totalXP.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Points Baraka</div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg border-2 border-purple-200">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{getTotalCompletedMilestones()}</div>
              <div className="text-sm text-gray-600">Objectifs Accomplis</div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg border-2 border-orange-200">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {Math.round((getTotalCompletedMilestones() / getTotalAvailableMilestones()) * 100)}%
              </div>
              <div className="text-sm text-gray-600">Progression Totale</div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Bar */}
        <Card className="mb-8 bg-white shadow-lg border-2 border-emerald-200">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-emerald-700">Progression vers le Niveau {currentLevel + 1}</h3>
              <Badge className="bg-emerald-100 text-emerald-800">
                {totalXP % 1000}/1000 XP
              </Badge>
            </div>
            <Progress value={getProgressToNextLevel(totalXP)} className="h-3" />
          </CardContent>
        </Card>

        {/* Category Selector */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {Object.entries(milestoneCategories).map(([key, category]) => (
            <Button
              key={key}
              variant={selectedCategory === key ? "default" : "outline"}
              onClick={() => setSelectedCategory(key)}
              className={`flex items-center gap-2 ${selectedCategory === key ? category.color + ' text-white' : ''}`}
            >
              {category.icon}
              {category.title}
            </Button>
          ))}
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentMilestones.milestones.map((milestone) => {
            const isCompleted = completedMilestones.includes(milestone.id);
            return (
              <Card key={milestone.id} className={`shadow-lg border-2 transition-all duration-300 ${
                isCompleted ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-white hover:border-emerald-300'
              }`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <div className={`w-6 h-6 rounded-full ${currentMilestones.color}`} />
                      )}
                      {milestone.title}
                    </CardTitle>
                    <Badge className={`${currentMilestones.color} text-white`}>
                      +{milestone.xp} XP
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{milestone.description}</p>
                  
                  {/* Sources islamiques */}
                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="text-sm text-gray-700">
                      {milestone.hadith && (
                        <div className="flex items-center gap-2 mb-1">
                          <Book className="w-4 h-4 text-blue-500" />
                          <span className="font-medium">Hadith:</span> {milestone.hadith}
                        </div>
                      )}
                      {milestone.verset && (
                        <div className="flex items-center gap-2 mb-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="font-medium">Verset:</span> {milestone.verset}
                        </div>
                      )}
                      {milestone.source && (
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-4 h-4 text-green-500" />
                          <span className="font-medium">Source:</span> {milestone.source}
                        </div>
                      )}
                    </div>
                  </div>

                  <Button
                    onClick={() => completeMilestone(milestone.id, milestone.xp)}
                    disabled={isCompleted}
                    className={`w-full ${isCompleted ? 'bg-green-500 hover:bg-green-600' : currentMilestones.color + ' hover:opacity-90'}`}
                  >
                    {isCompleted ? '✅ Objectif Accompli - Alhamdulillah' : 'Marquer comme Accompli'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Inspirational Quote */}
        <Card className="mt-8 bg-gradient-to-r from-emerald-500 to-green-500 text-white">
          <CardContent className="p-6 text-center">
            <div className="text-2xl mb-2">🤲</div>
            <p className="text-lg font-medium mb-2">
              "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ"
            </p>
            <p className="text-sm opacity-90">
              "Allah ne change pas l'état d'un peuple tant qu'ils ne changent pas ce qui est en eux-mêmes" - Sourate 13:11
            </p>
          </CardContent>
        </Card>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>© 2025 Club Empreinte Digitale - Yakoubi Yamina | CED HalalTech™</p>
          <p>Interactive Halal Journey Milestone Tracker - 100% Conforme Coran & Sunna</p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveHalalJourneyTracker;