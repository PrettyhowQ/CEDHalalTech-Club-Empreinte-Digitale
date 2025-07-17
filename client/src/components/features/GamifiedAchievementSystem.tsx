import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, 
  Star, 
  Code, 
  Database, 
  Shield, 
  Brain,
  Award,
  Target,
  Zap,
  Medal,
  Lock,
  CheckCircle,
  TrendingUp,
  BookOpen,
  Users,
  Heart,
  Sparkles,
  Hexagon
} from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  islamic_value: string;
  category: string;
  points: number;
  icon: React.ReactNode;
  color: string;
  unlocked: boolean;
  progress: number;
  maxProgress: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  date_unlocked?: string;
}

interface Level {
  level: number;
  title: string;
  arabic_title: string;
  min_points: number;
  max_points: number;
  color: string;
  benefits: string[];
}

const GamifiedAchievementSystem = () => {
  const [userLevel, setUserLevel] = useState(3);
  const [userPoints, setUserPoints] = useState(2450);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showUnlockedOnly, setShowUnlockedOnly] = useState(false);

  const levels: Level[] = [
    {
      level: 1,
      title: "Débutant",
      arabic_title: "مبتدئ (Mubtadi')",
      min_points: 0,
      max_points: 499,
      color: "from-gray-400 to-gray-600",
      benefits: ["Accès formations de base", "Support communautaire"]
    },
    {
      level: 2,
      title: "Apprenti",
      arabic_title: "متعلم (Muta'alim)",
      min_points: 500,
      max_points: 1499,
      color: "from-bronze-400 to-bronze-600",
      benefits: ["Formations intermédiaires", "Badges Bronze", "Mentorat débutant"]
    },
    {
      level: 3,
      title: "Pratiquant",
      arabic_title: "ممارس (Mumaaris)",
      min_points: 1500,
      max_points: 3499,
      color: "from-blue-400 to-blue-600",
      benefits: ["Projets pratiques", "Badges Argent", "Accès API avancée"]
    },
    {
      level: 4,
      title: "Expert",
      arabic_title: "خبير (Khabir)",
      min_points: 3500,
      max_points: 7499,
      color: "from-purple-400 to-purple-600",
      benefits: ["Formations expertes", "Badges Or", "Mentorat avancé"]
    },
    {
      level: 5,
      title: "Maître HalalTech",
      arabic_title: "أستاذ تقني حلال (Ustadh Taqni Halal)",
      min_points: 7500,
      max_points: 15000,
      color: "from-gold-400 to-gold-600",
      benefits: ["Toutes formations", "Badges Platine", "Certificats officiels"]
    },
    {
      level: 6,
      title: "Sage du Code",
      arabic_title: "حكيم الكود (Hakim al-Code)",
      min_points: 15000,
      max_points: 25000,
      color: "from-emerald-400 to-emerald-600",
      benefits: ["Formations exclusives", "Mentorat communautaire", "Projets open-source"]
    },
    {
      level: 7,
      title: "Gardien de l'Éthique",
      arabic_title: "حارس الأخلاق (Haris al-Akhlaq)",
      min_points: 25000,
      max_points: 50000,
      color: "from-diamond-400 to-diamond-600",
      benefits: ["Influence sur roadmap", "Formations privées", "Reconnaissance globale"]
    }
  ];

  const achievements: Achievement[] = [
    // Programmation
    {
      id: 'first_code',
      title: 'Premier Code',
      description: 'Écrivez votre première ligne de code conforme aux principes islamiques',
      islamic_value: 'بداية الطريق (Bidayat at-Tariq) - Le début du chemin',
      category: 'programming',
      points: 50,
      icon: <Code className="w-5 h-5" />,
      color: 'from-blue-400 to-blue-600',
      unlocked: true,
      progress: 1,
      maxProgress: 1,
      rarity: 'common',
      date_unlocked: '2025-01-10'
    },
    {
      id: 'python_master',
      title: 'Maître Python Halal',
      description: 'Complétez 10 projets Python en respectant les principes éthiques',
      islamic_value: 'الإتقان (Al-Itqan) - La perfection dans l\'action',
      category: 'programming',
      points: 300,
      icon: <Trophy className="w-5 h-5" />,
      color: 'from-green-400 to-green-600',
      unlocked: true,
      progress: 10,
      maxProgress: 10,
      rarity: 'rare',
      date_unlocked: '2025-01-15'
    },
    {
      id: 'react_innovator',
      title: 'Innovateur React',
      description: 'Créez 5 composants React respectant l\'accessibilité islamique',
      islamic_value: 'الإبداع (Al-Ibda) - L\'innovation bénéfique',
      category: 'programming',
      points: 250,
      icon: <Sparkles className="w-5 h-5" />,
      color: 'from-cyan-400 to-cyan-600',
      unlocked: true,
      progress: 5,
      maxProgress: 5,
      rarity: 'rare',
      date_unlocked: '2025-01-17'
    },
    
    // IA & Machine Learning
    {
      id: 'ai_ethics',
      title: 'Éthique IA',
      description: 'Développez une IA conforme aux principes du Fiqh informatique',
      islamic_value: 'الحكمة (Al-Hikmah) - La sagesse dans l\'innovation',
      category: 'ai',
      points: 400,
      icon: <Brain className="w-5 h-5" />,
      color: 'from-purple-400 to-purple-600',
      unlocked: false,
      progress: 2,
      maxProgress: 5,
      rarity: 'epic',
    },
    {
      id: 'ml_halal',
      title: 'Machine Learning Halal',
      description: 'Implémentez des algorithmes ML respectant les données privées',
      islamic_value: 'الأمانة (Al-Amanah) - La confiance et la responsabilité',
      category: 'ai',
      points: 500,
      icon: <Shield className="w-5 h-5" />,
      color: 'from-indigo-400 to-indigo-600',
      unlocked: false,
      progress: 1,
      maxProgress: 3,
      rarity: 'epic',
    },
    
    // Base de données
    {
      id: 'database_guardian',
      title: 'Gardien des Données',
      description: 'Sécurisez 100 transactions selon les principes islamiques',
      islamic_value: 'الحفظ (Al-Hifz) - La protection et la préservation',
      category: 'database',
      points: 200,
      icon: <Database className="w-5 h-5" />,
      color: 'from-orange-400 to-orange-600',
      unlocked: true,
      progress: 100,
      maxProgress: 100,
      rarity: 'rare',
      date_unlocked: '2025-01-12'
    },
    
    // Éducation
    {
      id: 'knowledge_seeker',
      title: 'Chercheur de Savoir',
      description: 'Complétez 20 formations certifiées CED Academy',
      islamic_value: 'طلب العلم (Talab al-Ilm) - La quête du savoir',
      category: 'education',
      points: 600,
      icon: <BookOpen className="w-5 h-5" />,
      color: 'from-emerald-400 to-emerald-600',
      unlocked: false,
      progress: 15,
      maxProgress: 20,
      rarity: 'epic',
    },
    {
      id: 'mentor_status',
      title: 'Statut de Mentor',
      description: 'Aidez 50 étudiants dans leur parcours technologique',
      islamic_value: 'التعليم (At-Ta\'lim) - L\'enseignement bénéfique',
      category: 'education',
      points: 800,
      icon: <Users className="w-5 h-5" />,
      color: 'from-teal-400 to-teal-600',
      unlocked: false,
      progress: 12,
      maxProgress: 50,
      rarity: 'legendary',
    },
    
    // Spiritualité
    {
      id: 'spiritual_coder',
      title: 'Codeur Spirituel',
      description: 'Intégrez 100 invocations (du\'a) dans vos projets',
      islamic_value: 'الذكر (Adh-Dhikr) - Le rappel constant d\'Allah',
      category: 'spirituality',
      points: 300,
      icon: <Heart className="w-5 h-5" />,
      color: 'from-rose-400 to-rose-600',
      unlocked: false,
      progress: 45,
      maxProgress: 100,
      rarity: 'rare',
    },
    {
      id: 'halal_validator',
      title: 'Validateur Halal',
      description: 'Certifiez 1000 lignes de code conformes Sharia',
      islamic_value: 'التحقق (At-Tahaqquq) - La vérification scrupuleuse',
      category: 'spirituality',
      points: 1000,
      icon: <CheckCircle className="w-5 h-5" />,
      color: 'from-gold-400 to-gold-600',
      unlocked: false,
      progress: 567,
      maxProgress: 1000,
      rarity: 'legendary',
    }
  ];

  const categories = [
    { id: 'all', label: 'Toutes', icon: <Trophy className="w-4 h-4" /> },
    { id: 'programming', label: 'Programmation', icon: <Code className="w-4 h-4" /> },
    { id: 'ai', label: 'IA & ML', icon: <Brain className="w-4 h-4" /> },
    { id: 'database', label: 'Base de données', icon: <Database className="w-4 h-4" /> },
    { id: 'education', label: 'Éducation', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'spirituality', label: 'Spiritualité', icon: <Heart className="w-4 h-4" /> }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-300 bg-gray-50';
      case 'rare': return 'border-blue-300 bg-blue-50';
      case 'epic': return 'border-purple-300 bg-purple-50';
      case 'legendary': return 'border-gold-300 bg-gold-50';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  const getRarityIcon = (rarity: string) => {
    switch (rarity) {
      case 'common': return <Star className="w-4 h-4 text-gray-500" />;
      case 'rare': return <Medal className="w-4 h-4 text-blue-500" />;
      case 'epic': return <Hexagon className="w-4 h-4 text-purple-500" />;
      case 'legendary': return <Star className="w-4 h-4 text-gold-500 fill-current" />;
      default: return <Star className="w-4 h-4 text-gray-500" />;
    }
  };

  const filteredAchievements = achievements.filter(achievement => {
    const categoryMatch = selectedCategory === 'all' || achievement.category === selectedCategory;
    const unlockedMatch = !showUnlockedOnly || achievement.unlocked;
    return categoryMatch && unlockedMatch;
  });

  const currentLevelInfo = levels.find(level => 
    userPoints >= level.min_points && userPoints <= level.max_points
  ) || levels[0];

  const nextLevel = levels.find(level => level.level === currentLevelInfo.level + 1);
  const progressToNextLevel = nextLevel 
    ? ((userPoints - currentLevelInfo.min_points) / (nextLevel.min_points - currentLevelInfo.min_points)) * 100
    : 100;

  const totalAchievements = achievements.length;
  const unlockedAchievements = achievements.filter(a => a.unlocked).length;
  const totalPoints = achievements.reduce((sum, a) => sum + (a.unlocked ? a.points : 0), 0);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-r ${currentLevelInfo.color} opacity-10`} />
          <CardContent className="p-4 relative">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full bg-gradient-to-r ${currentLevelInfo.color}`}>
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Niveau Actuel</p>
                <p className="font-bold">{currentLevelInfo.title}</p>
                <p className="text-xs text-gray-500">{currentLevelInfo.arabic_title}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-full">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Points</p>
                <p className="font-bold text-blue-600">{userPoints.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-full">
                <Trophy className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Succès</p>
                <p className="font-bold text-green-600">{unlockedAchievements}/{totalAchievements}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-full">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Progression</p>
                <p className="font-bold text-purple-600">{Math.round(progressToNextLevel)}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Level Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5" />
            Progression vers le niveau supérieur
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">
                {currentLevelInfo.title} → {nextLevel?.title || 'Niveau Max'}
              </span>
              <span className="text-sm text-gray-600">
                {userPoints} / {nextLevel?.min_points || currentLevelInfo.max_points} points
              </span>
            </div>
            <Progress value={progressToNextLevel} className="h-3" />
            
            {nextLevel && (
              <div className="text-sm text-gray-600">
                <span className="font-medium">{nextLevel.min_points - userPoints} points</span> restants pour atteindre{' '}
                <span className="font-medium">{nextLevel.title}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            Système de Badges & Récompenses
          </CardTitle>
          <div className="flex gap-2 flex-wrap">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-1"
              >
                {category.icon}
                {category.label}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowUnlockedOnly(!showUnlockedOnly)}
            >
              {showUnlockedOnly ? 'Voir tous' : 'Débloqués uniquement'}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAchievements.map(achievement => (
              <Card 
                key={achievement.id} 
                className={`relative ${getRarityColor(achievement.rarity)} ${
                  achievement.unlocked ? 'border-green-300' : 'border-gray-300'
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-full bg-gradient-to-r ${achievement.color} ${
                      achievement.unlocked ? 'opacity-100' : 'opacity-50'
                    }`}>
                      {achievement.unlocked ? achievement.icon : <Lock className="w-5 h-5" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`font-semibold ${achievement.unlocked ? 'text-gray-900' : 'text-gray-500'}`}>
                          {achievement.title}
                        </h3>
                        {getRarityIcon(achievement.rarity)}
                      </div>
                      <p className={`text-sm mb-2 ${achievement.unlocked ? 'text-gray-600' : 'text-gray-400'}`}>
                        {achievement.description}
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs text-green-800 mb-2">
                        {achievement.islamic_value}
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant={achievement.unlocked ? "default" : "secondary"}>
                          {achievement.points} pts
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {achievement.progress}/{achievement.maxProgress}
                        </span>
                      </div>
                      {achievement.progress < achievement.maxProgress && (
                        <Progress 
                          value={(achievement.progress / achievement.maxProgress) * 100} 
                          className="h-1 mt-2" 
                        />
                      )}
                      {achievement.date_unlocked && (
                        <p className="text-xs text-green-600 mt-1">
                          Débloqué le {achievement.date_unlocked}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Levels Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5" />
            Niveaux de Maîtrise HalalTech
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {levels.map(level => (
              <Card 
                key={level.level} 
                className={`relative ${level.level <= userLevel ? 'border-green-300 bg-green-50' : 'border-gray-300'}`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${level.color}`} />
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-full bg-gradient-to-r ${level.color}`}>
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{level.title}</h3>
                      <p className="text-sm text-gray-600">{level.arabic_title}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-3">
                    {level.min_points} - {level.max_points} points
                  </div>
                  <div className="space-y-1">
                    {level.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GamifiedAchievementSystem;