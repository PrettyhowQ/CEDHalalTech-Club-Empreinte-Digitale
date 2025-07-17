import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  BookOpen, 
  Heart, 
  Shield, 
  Sparkles, 
  Trophy, 
  Target, 
  Zap,
  Award,
  Gift,
  Compass,
  Sun,
  Moon,
  TrendingUp,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  Volume2
} from 'lucide-react';

interface SpiritualLevel {
  id: string;
  level: number;
  title: string;
  arabic: string;
  description: string;
  xpRequired: number;
  color: string;
  icon: React.ReactNode;
  benefits: string[];
  islamicMeaning: string;
  verse: string;
  reference: string;
}

interface LearningPath {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  totalSteps: number;
  completedSteps: number;
  currentStep: string;
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé';
  estimatedTime: string;
  color: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  unlocked: boolean;
  date?: Date;
  xpReward: number;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  category: string;
}

const ProgressVisualizationDemo = () => {
  const [currentXP, setCurrentXP] = useState(2847);
  const [currentLevel, setCurrentLevel] = useState(7);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedPath, setSelectedPath] = useState('fiqh');
  const [showAchievements, setShowAchievements] = useState(false);

  const spiritualLevels: SpiritualLevel[] = [
    {
      id: 'seeking',
      level: 1,
      title: 'Chercheur de Vérité',
      arabic: 'طالب الحق',
      description: 'Début du voyage spirituel et technologique',
      xpRequired: 100,
      color: 'from-green-400 to-green-600',
      icon: <BookOpen className="h-5 w-5" />,
      benefits: ['Accès formations de base', 'Support communautaire'],
      islamicMeaning: 'Le début de la quête du savoir bénéfique',
      verse: 'Et dis : Seigneur, accroît mes connaissances',
      reference: 'Sourate Ta-Ha 20:114'
    },
    {
      id: 'student',
      level: 2,
      title: 'Étudiant Dévoué',
      arabic: 'طالب مخلص',
      description: 'Approfondissement des connaissances islamiques',
      xpRequired: 300,
      color: 'from-blue-400 to-blue-600',
      icon: <Heart className="h-5 w-5" />,
      benefits: ['Accès cours avancés', 'Mentorat personnalisé'],
      islamicMeaning: 'L\'engagement sincère dans l\'apprentissage',
      verse: 'Et ceux qui luttent pour Notre cause, Nous les guiderons',
      reference: 'Sourate Al-Ankabut 29:69'
    },
    {
      id: 'practitioner',
      level: 3,
      title: 'Praticien Éclairé',
      arabic: 'ممارس مستنير',
      description: 'Application des principes dans la technologie',
      xpRequired: 600,
      color: 'from-purple-400 to-purple-600',
      icon: <Target className="h-5 w-5" />,
      benefits: ['Projets pratiques', 'Certification intermédiaire'],
      islamicMeaning: 'La mise en pratique du savoir acquis',
      verse: 'Ceux qui croient et accomplissent les bonnes œuvres',
      reference: 'Sourate Al-Baqarah 2:62'
    },
    {
      id: 'developer',
      level: 4,
      title: 'Développeur Conscient',
      arabic: 'مطور واعي',
      description: 'Création de solutions technologiques éthiques',
      xpRequired: 1000,
      color: 'from-cyan-400 to-cyan-600',
      icon: <Zap className="h-5 w-5" />,
      benefits: ['API access', 'Projets clients', 'Revenue sharing'],
      islamicMeaning: 'La responsabilité dans la création',
      verse: 'Et que l\'homme n\'obtient que ce qu\'il accomplit',
      reference: 'Sourate An-Najm 53:39'
    },
    {
      id: 'expert',
      level: 5,
      title: 'Expert Spirituel',
      arabic: 'خبير روحاني',
      description: 'Maîtrise des principes islamiques en tech',
      xpRequired: 1500,
      color: 'from-orange-400 to-orange-600',
      icon: <Shield className="h-5 w-5" />,
      benefits: ['Mentorat juniors', 'Projets avancés', 'Certification expert'],
      islamicMeaning: 'La sagesse guidant l\'innovation',
      verse: 'Et Au-dessus de tout détenteur de science, il y a un plus savant',
      reference: 'Sourate Yusuf 12:76'
    },
    {
      id: 'master',
      level: 6,
      title: 'Maître Innovateur',
      arabic: 'أستاذ مبتكر',
      description: 'Leadership dans l\'innovation éthique',
      xpRequired: 2200,
      color: 'from-red-400 to-red-600',
      icon: <Trophy className="h-5 w-5" />,
      benefits: ['Équipe dédiée', 'Revenus premium', 'Projets internationaux'],
      islamicMeaning: 'La leadership par l\'exemple',
      verse: 'Et Nous avons fait d\'eux des dirigeants qui guident',
      reference: 'Sourate As-Sajdah 32:24'
    },
    {
      id: 'sage',
      level: 7,
      title: 'Sage Technologique',
      arabic: 'حكيم تقني',
      description: 'Sagesse et guidance pour la communauté',
      xpRequired: 3000,
      color: 'from-yellow-400 to-yellow-600',
      icon: <Star className="h-5 w-5" />,
      benefits: ['Conseil stratégique', 'Participation bénéfices', 'Statut VIP'],
      islamicMeaning: 'La sagesse au service de l\'humanité',
      verse: 'Et quiconque reçoit la sagesse a reçu un bien immense',
      reference: 'Sourate Al-Baqarah 2:269'
    },
    {
      id: 'guardian',
      level: 8,
      title: 'Gardien des Valeurs',
      arabic: 'حارس القيم',
      description: 'Protection et transmission des principes',
      xpRequired: 4000,
      color: 'from-emerald-400 to-emerald-600',
      icon: <Compass className="h-5 w-5" />,
      benefits: ['Gouvernance plateforme', 'Validation projets', 'Reconnaissance mondiale'],
      islamicMeaning: 'La responsabilité de préserver et transmettre',
      verse: 'Les héritiers des prophètes sont les savants',
      reference: 'Hadith Authentique'
    }
  ];

  const learningPaths: LearningPath[] = [
    {
      id: 'fiqh',
      title: 'Fiqh Informatique',
      description: 'Maîtrise des règles islamiques appliquées à la technologie',
      icon: <BookOpen className="h-5 w-5" />,
      totalSteps: 12,
      completedSteps: 8,
      currentStep: 'Blockchain et contrats halal',
      difficulty: 'Avancé',
      estimatedTime: '3 mois',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'ia',
      title: 'IA Éthique',
      description: 'Intelligence artificielle conforme aux valeurs islamiques',
      icon: <Zap className="h-5 w-5" />,
      totalSteps: 10,
      completedSteps: 5,
      currentStep: 'Algorithmes de recommandation halal',
      difficulty: 'Intermédiaire',
      estimatedTime: '2 mois',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'finance',
      title: 'FinTech Islamique',
      description: 'Technologies financières respectant la Charia',
      icon: <Shield className="h-5 w-5" />,
      totalSteps: 15,
      completedSteps: 11,
      currentStep: 'Systèmes de paiement sans riba',
      difficulty: 'Avancé',
      estimatedTime: '4 mois',
      color: 'from-purple-500 to-violet-600'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersécurité Halal',
      description: 'Protection des données selon les principes islamiques',
      icon: <Target className="h-5 w-5" />,
      totalSteps: 8,
      completedSteps: 3,
      currentStep: 'Chiffrement respectueux vie privée',
      difficulty: 'Intermédiaire',
      estimatedTime: '1.5 mois',
      color: 'from-red-500 to-pink-600'
    }
  ];

  const achievements: Achievement[] = [
    {
      id: 'first_course',
      title: 'Premier Pas',
      description: 'Première formation complétée',
      icon: <BookOpen className="h-4 w-4" />,
      unlocked: true,
      date: new Date('2024-01-15'),
      xpReward: 50,
      rarity: 'Common',
      category: 'Éducation'
    },
    {
      id: 'fiqh_expert',
      title: 'Expert Fiqh',
      description: 'Maîtrise du Fiqh informatique',
      icon: <Star className="h-4 w-4" />,
      unlocked: true,
      date: new Date('2024-02-20'),
      xpReward: 200,
      rarity: 'Rare',
      category: 'Expertise'
    },
    {
      id: 'community_helper',
      title: 'Aide Communautaire',
      description: 'Aidé 50+ membres de la communauté',
      icon: <Heart className="h-4 w-4" />,
      unlocked: true,
      date: new Date('2024-03-10'),
      xpReward: 150,
      rarity: 'Epic',
      category: 'Communauté'
    },
    {
      id: 'innovation_leader',
      title: 'Leader Innovation',
      description: 'Projet innovant validé par scholars',
      icon: <Trophy className="h-4 w-4" />,
      unlocked: false,
      xpReward: 500,
      rarity: 'Legendary',
      category: 'Innovation'
    }
  ];

  const currentLevelData = spiritualLevels[currentLevel - 1];
  const nextLevelData = spiritualLevels[currentLevel];
  const progressToNext = nextLevelData ? ((currentXP - currentLevelData.xpRequired) / (nextLevelData.xpRequired - currentLevelData.xpRequired)) * 100 : 100;

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'text-gray-600 bg-gray-100';
      case 'Rare': return 'text-blue-600 bg-blue-100';
      case 'Epic': return 'text-purple-600 bg-purple-100';
      case 'Legendary': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const simulateProgress = () => {
    setIsAnimating(true);
    const increment = 50;
    
    setTimeout(() => {
      setCurrentXP(prev => prev + increment);
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Visualisation Progression Spirituelle
            </h1>
            <p className="text-gray-600">
              Système gamifié d'apprentissage avec niveaux spirituels authentiques
            </p>
          </div>
        </div>
      </div>

      {/* Current Level Display */}
      <Card className="bg-gradient-to-br from-amber-50 to-orange-100 border-amber-200">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 bg-gradient-to-br ${currentLevelData.color} rounded-full flex items-center justify-center`}>
                {currentLevelData.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{currentLevelData.title}</h2>
                <p className="text-lg text-amber-700" dir="rtl">{currentLevelData.arabic}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-amber-600">Niveau {currentLevel}</div>
              <div className="text-sm text-amber-700">{currentXP} XP</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">{currentLevelData.description}</p>
          
          <div className="bg-white rounded-lg p-4 border border-amber-200">
            <h3 className="font-semibold text-amber-800 mb-2">Signification Islamique</h3>
            <p className="text-sm text-gray-700 mb-2">{currentLevelData.islamicMeaning}</p>
            <div className="text-sm text-amber-700 italic">
              "{currentLevelData.verse}" — {currentLevelData.reference}
            </div>
          </div>

          {nextLevelData && (
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Progression vers {nextLevelData.title}</span>
                <span className="text-sm text-gray-500">{Math.round(progressToNext)}%</span>
              </div>
              <Progress value={progressToNext} className="h-3" />
              <div className="flex justify-between text-xs text-gray-500">
                <span>{currentXP} XP</span>
                <span>{nextLevelData.xpRequired} XP</span>
              </div>
            </div>
          )}

          <div className="flex gap-2 flex-wrap">
            {currentLevelData.benefits.map((benefit, index) => (
              <Badge key={index} variant="secondary" className="bg-amber-100 text-amber-800">
                {benefit}
              </Badge>
            ))}
          </div>

          <Button 
            onClick={simulateProgress}
            disabled={isAnimating}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
          >
            {isAnimating ? (
              <>
                <Sparkles className="h-4 w-4 mr-2 animate-spin" />
                Progression en cours...
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2" />
                Simuler Progression (+50 XP)
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Learning Paths */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Parcours d'Apprentissage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {learningPaths.map((path) => (
              <div key={path.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${path.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    {path.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{path.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{path.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Progression</span>
                        <span>{path.completedSteps}/{path.totalSteps} étapes</span>
                      </div>
                      <Progress value={(path.completedSteps / path.totalSteps) * 100} className="h-2" />
                      
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>Étape actuelle: {path.currentStep}</span>
                        <Badge variant="outline" className="text-xs">
                          {path.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Récompenses Spirituelles
            </div>
            <Button
              variant="outline"
              onClick={() => setShowAchievements(!showAchievements)}
              className="flex items-center gap-2"
            >
              <Trophy className="h-4 w-4" />
              {showAchievements ? 'Masquer' : 'Voir tout'}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.slice(0, showAchievements ? achievements.length : 4).map((achievement) => (
              <div 
                key={achievement.id} 
                className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  achievement.unlocked 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-gray-50 border-gray-200 opacity-60'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    achievement.unlocked ? 'bg-green-500 text-white' : 'bg-gray-400 text-gray-200'
                  }`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{achievement.title}</h3>
                    <p className="text-xs text-gray-600 mb-2">{achievement.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <Badge className={`text-xs ${getRarityColor(achievement.rarity)}`}>
                        {achievement.rarity}
                      </Badge>
                      <span className="text-xs text-gray-500">+{achievement.xpReward} XP</span>
                    </div>
                    
                    {achievement.unlocked && achievement.date && (
                      <div className="text-xs text-green-600 mt-1">
                        Débloqué le {achievement.date.toLocaleDateString()}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* All Spiritual Levels */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            Tous les Niveaux Spirituels
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {spiritualLevels.map((level) => (
              <div 
                key={level.id} 
                className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  level.level <= currentLevel 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${level.color} rounded-full flex items-center justify-center`}>
                    {level.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">Niveau {level.level}: {level.title}</h3>
                      <span className="text-sm text-gray-600" dir="rtl">{level.arabic}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{level.description}</p>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="text-xs">
                        {level.xpRequired} XP requis
                      </Badge>
                      {level.level <= currentLevel && (
                        <span className="text-xs text-green-600 font-medium">✓ Débloqué</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-4 py-2">
          🌟 Innovation CED HalalTech™ - Progression Spirituelle Gamifiée
        </Badge>
      </div>
    </div>
  );
};

export default ProgressVisualizationDemo;