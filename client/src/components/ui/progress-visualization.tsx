import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Trophy, Star, Heart, Book, Target, CheckCircle2, Zap, Crown } from 'lucide-react';

interface LearningMilestone {
  id: string;
  title: string;
  description: string;
  category: 'fiqh' | 'technical' | 'spiritual' | 'practical';
  progress: number; // 0-100
  completed: boolean;
  points: number;
  badge?: string;
  islamicReference?: string;
  arabicText?: string;
}

interface ProgressLevel {
  level: number;
  title: string;
  titleArabic: string;
  minPoints: number;
  color: string;
  icon: React.ReactNode;
  description: string;
}

const progressLevels: ProgressLevel[] = [
  {
    level: 1,
    title: "Étudiant Débutant",
    titleArabic: "طالب مبتدئ",
    minPoints: 0,
    color: "from-emerald-400 to-emerald-600",
    icon: <Book className="w-6 h-6" />,
    description: "Premiers pas dans l'apprentissage"
  },
  {
    level: 2,
    title: "Chercheur Assidu",
    titleArabic: "باحث مجتهد",
    minPoints: 500,
    color: "from-blue-400 to-blue-600",
    icon: <Target className="w-6 h-6" />,
    description: "Progression constante et déterminée"
  },
  {
    level: 3,
    title: "Savant en Formation",
    titleArabic: "عالم في التكوين",
    minPoints: 1500,
    color: "from-purple-400 to-purple-600",
    icon: <Star className="w-6 h-6" />,
    description: "Maîtrise grandissante des concepts"
  },
  {
    level: 4,
    title: "Expert Certifié",
    titleArabic: "خبير معتمد",
    minPoints: 3000,
    color: "from-amber-400 to-amber-600",
    icon: <Trophy className="w-6 h-6" />,
    description: "Excellence reconnue dans le domaine"
  },
  {
    level: 5,
    title: "Maître Spirituel",
    titleArabic: "أستاذ روحاني",
    minPoints: 5000,
    color: "from-rose-400 to-rose-600",
    icon: <Crown className="w-6 h-6" />,
    description: "Sagesse et maîtrise exemplaires"
  }
];

interface ProgressVisualizationProps {
  milestones: LearningMilestone[];
  totalPoints: number;
  className?: string;
}

export function ProgressVisualization({ 
  milestones, 
  totalPoints, 
  className 
}: ProgressVisualizationProps) {
  const [animatedPoints, setAnimatedPoints] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(progressLevels[0]);

  useEffect(() => {
    // Animate points counter
    const duration = 2000;
    const steps = 60;
    const increment = totalPoints / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= totalPoints) {
        setAnimatedPoints(totalPoints);
        clearInterval(timer);
      } else {
        setAnimatedPoints(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [totalPoints]);

  useEffect(() => {
    // Determine current level
    const level = progressLevels
      .slice()
      .reverse()
      .find(level => totalPoints >= level.minPoints) || progressLevels[0];
    setCurrentLevel(level);
  }, [totalPoints]);

  const nextLevel = progressLevels.find(level => level.minPoints > totalPoints);
  const progressToNextLevel = nextLevel 
    ? ((totalPoints - currentLevel.minPoints) / (nextLevel.minPoints - currentLevel.minPoints)) * 100
    : 100;

  const categorizedMilestones = {
    fiqh: milestones.filter(m => m.category === 'fiqh'),
    technical: milestones.filter(m => m.category === 'technical'),
    spiritual: milestones.filter(m => m.category === 'spiritual'),
    practical: milestones.filter(m => m.category === 'practical')
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'fiqh': return <Book className="w-5 h-5 text-emerald-600" />;
      case 'technical': return <Zap className="w-5 h-5 text-blue-600" />;
      case 'spiritual': return <Heart className="w-5 h-5 text-purple-600" />;
      case 'practical': return <Target className="w-5 h-5 text-amber-600" />;
      default: return <Star className="w-5 h-5 text-gray-600" />;
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'fiqh': return 'Fiqh Informatique';
      case 'technical': return 'Compétences Techniques';
      case 'spiritual': return 'Développement Spirituel';
      case 'practical': return 'Applications Pratiques';
      default: return 'Général';
    }
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* Current Level and Progress */}
      <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={cn("p-3 rounded-full bg-gradient-to-br text-white", currentLevel.color)}>
              {currentLevel.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                {currentLevel.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-arabic" dir="rtl">
                {currentLevel.titleArabic}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {animatedPoints.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">points</p>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {currentLevel.description}
        </p>

        {nextLevel && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">
                Progression vers {nextLevel.title}
              </span>
              <span className="font-medium">
                {Math.round(progressToNextLevel)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div 
                className={cn("h-3 rounded-full bg-gradient-to-r transition-all duration-1000 ease-out", currentLevel.color)}
                style={{ width: `${progressToNextLevel}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {nextLevel.minPoints - totalPoints} points restants
            </p>
          </div>
        )}
      </div>

      {/* Milestones by Category */}
      <div className="space-y-6">
        {Object.entries(categorizedMilestones).map(([category, categoryMilestones]) => (
          <div key={category} className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center gap-2 mb-4">
              {getCategoryIcon(category)}
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {getCategoryTitle(category)}
              </h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                ({categoryMilestones.length} étapes)
              </span>
            </div>

            <div className="grid gap-3">
              {categoryMilestones.map((milestone) => (
                <div
                  key={milestone.id}
                  className={cn(
                    "relative p-4 rounded-lg border transition-all duration-300",
                    milestone.completed
                      ? "bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800"
                      : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                      milestone.completed
                        ? "bg-emerald-500 text-white"
                        : "bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300"
                    )}>
                      {milestone.completed ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <span className="text-sm font-bold">{milestone.progress}%</span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-gray-900 dark:text-white">
                          {milestone.title}
                        </h5>
                        <div className="flex items-center gap-2">
                          {milestone.badge && (
                            <span className="text-xs px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full">
                              {milestone.badge}
                            </span>
                          )}
                          <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                            +{milestone.points} pts
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {milestone.description}
                      </p>

                      {!milestone.completed && (
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
                          <div 
                            className="h-2 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-300"
                            style={{ width: `${milestone.progress}%` }}
                          />
                        </div>
                      )}

                      {milestone.islamicReference && (
                        <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-950 rounded-md border-l-4 border-blue-400">
                          <p className="text-xs text-blue-800 dark:text-blue-200 font-medium mb-1">
                            📚 Référence islamique
                          </p>
                          <p className="text-xs text-blue-700 dark:text-blue-300">
                            {milestone.islamicReference}
                          </p>
                          {milestone.arabicText && (
                            <p className="text-sm font-arabic text-blue-600 dark:text-blue-400 mt-2 text-right" dir="rtl">
                              {milestone.arabicText}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Achievement Summary */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 rounded-lg border border-amber-200 dark:border-amber-800 p-4">
        <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3 flex items-center gap-2">
          <Trophy className="w-5 h-5" />
          Résumé des Accomplissements
        </h4>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-amber-800 dark:text-amber-200">
              {milestones.filter(m => m.completed).length}
            </p>
            <p className="text-xs text-amber-600 dark:text-amber-400">
              Étapes Complétées
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-amber-800 dark:text-amber-200">
              {currentLevel.level}
            </p>
            <p className="text-xs text-amber-600 dark:text-amber-400">
              Niveau Actuel
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-amber-800 dark:text-amber-200">
              {Math.round(milestones.reduce((acc, m) => acc + m.progress, 0) / milestones.length)}%
            </p>
            <p className="text-xs text-amber-600 dark:text-amber-400">
              Progression Globale
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-amber-800 dark:text-amber-200">
              {milestones.filter(m => m.badge).length}
            </p>
            <p className="text-xs text-amber-600 dark:text-amber-400">
              Badges Obtenus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Example usage component
export function LearningProgressDemo() {
  const sampleMilestones: LearningMilestone[] = [
    {
      id: '1',
      title: 'Principes Banking Halal',
      description: 'Maîtriser les fondements du banking sans Riba',
      category: 'fiqh',
      progress: 100,
      completed: true,
      points: 200,
      badge: 'Expert Fiqh',
      islamicReference: 'Le Coran interdit le Riba (2:275)',
      arabicText: 'وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا'
    },
    {
      id: '2',
      title: 'Développement React Avancé',
      description: 'Créer des applications web modernes',
      category: 'technical',
      progress: 75,
      completed: false,
      points: 300,
      islamicReference: 'Acquérir la science est une obligation',
      arabicText: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ'
    },
    {
      id: '3',
      title: 'Méditation et Dhikr',
      description: 'Développer sa spiritualité quotidienne',
      category: 'spiritual',
      progress: 90,
      completed: false,
      points: 150,
      islamicReference: 'Le rappel d\'Allah apaise les cœurs',
      arabicText: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ'
    },
    {
      id: '4',
      title: 'Mise en Production',
      description: 'Déployer son application CED',
      category: 'practical',
      progress: 50,
      completed: false,
      points: 250
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Visualisation Interactive des Progrès d'Apprentissage
      </h2>
      <ProgressVisualization 
        milestones={sampleMilestones}
        totalPoints={1250}
      />
    </div>
  );
}