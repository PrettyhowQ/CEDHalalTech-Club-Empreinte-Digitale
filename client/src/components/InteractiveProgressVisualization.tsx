import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, BookOpen, Heart, Award, Gift, Home } from 'lucide-react';

interface UserProgress {
  level: number;
  xp: number;
  totalXp: number;
  completedModules: string[];
  badges: string[];
  streakDays: number;
  spiritualMilestones: string[];
}

interface MilestoneProps {
  milestone: string;
  isCompleted: boolean;
  culturalIcon: React.ReactNode;
}

const Milestone = ({ milestone, isCompleted, culturalIcon }: MilestoneProps) => (
  <div className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
    isCompleted ? 'bg-green-100 text-green-800 scale-105' : 'bg-gray-100 text-gray-600'
  }`}>
    <div className={`text-2xl ${isCompleted ? 'animate-pulse' : 'opacity-50'}`}>
      {culturalIcon}
    </div>
    <span className="font-medium">{milestone}</span>
    {isCompleted && <Star className="h-5 w-5 text-yellow-500 animate-spin" />}
  </div>
);

export default function InteractiveProgressVisualization() {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    level: 7,
    xp: 2850,
    totalXp: 3500,
    completedModules: [
      'CED Bank Fondamentaux',
      'Fiqh Informatique Niveau 1',
      'Institut Academy Initiation',
      'Al-Aman Takaful Principes',
      'Écologie Islamique CED'
    ],
    badges: [
      '🕌 Premier Pas dans l\'Islam Tech',
      '📚 Étudiant Assidu CED',
      '🌱 Protecteur Environnemental',
      '💰 Expert Banking Halal',
      '🎓 Diplômé Institut CED'
    ],
    streakDays: 23,
    spiritualMilestones: [
      'Première formation complétée',
      '5 jours consécutifs d\'apprentissage',
      'Certification Fiqh Informatique',
      'Don TechForAll effectué',
      'Parrainage nouvel utilisateur'
    ]
  });

  const [animatedXp, setAnimatedXp] = useState(0);
  const progressPercentage = Math.round((userProgress.xp / userProgress.totalXp) * 100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedXp(userProgress.xp);
    }, 500);
    return () => clearTimeout(timer);
  }, [userProgress.xp]);

  const culturalMilestones = [
    { milestone: 'Première formation complétée', icon: <BookOpen className="h-6 w-6" />, completed: true },
    { milestone: '5 jours consécutifs d\'apprentissage', icon: <Heart className="h-6 w-6" />, completed: true },
    { milestone: 'Certification Fiqh Informatique', icon: <Award className="h-6 w-6" />, completed: true },
    { milestone: 'Don TechForAll effectué', icon: <Gift className="h-6 w-6" />, completed: true },
    { milestone: 'Parrainage nouvel utilisateur', icon: <Home className="h-6 w-6" />, completed: false }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <Card className="border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-cyan-50">
        <CardHeader className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Home className="h-8 w-8" />
            Visualisation Interactive de Progression CED
            <Star className="h-8 w-8 text-yellow-300" />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          
          {/* Section Niveau et XP */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="border border-green-300">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-6 w-6" />
                  Niveau et Expérience
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-emerald-600 mb-2">
                    {userProgress.level}
                  </div>
                  <div className="text-gray-600 text-lg">Niveau Actuel</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Progression XP</span>
                    <span className="font-bold">{animatedXp} / {userProgress.totalXp}</span>
                  </div>
                  <Progress 
                    value={progressPercentage} 
                    className="h-4 bg-gray-200"
                  />
                  <div className="text-center text-sm text-emerald-600 font-medium">
                    {progressPercentage}% vers niveau {userProgress.level + 1}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-blue-300">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6" />
                  Engagement Spirituel
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {userProgress.streakDays}
                    </div>
                    <div className="text-sm text-gray-600">Jours consécutifs</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-1">
                      {userProgress.completedModules.length}
                    </div>
                    <div className="text-sm text-gray-600">Modules complétés</div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="text-center text-sm font-medium text-yellow-800">
                    🕌 "Barakallahu fik pour votre assiduité"
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Jalons Culturels Islamiques */}
          <Card className="border border-purple-300 mb-6">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6" />
                Jalons Spirituels et Culturels
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {culturalMilestones.map((item, index) => (
                  <Milestone
                    key={index}
                    milestone={item.milestone}
                    isCompleted={item.completed}
                    culturalIcon={item.icon}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Badges et Récompenses */}
          <Card className="border border-orange-300">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-6 w-6" />
                Badges et Récompenses Islamiques
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {userProgress.badges.map((badge, index) => (
                  <Badge 
                    key={index}
                    className="p-3 text-center bg-gradient-to-r from-yellow-400 to-orange-400 text-white hover:scale-105 transition-transform cursor-pointer"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-3">
                  <Award className="h-5 w-5 mr-2" />
                  Voir tous les badges disponibles
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Citation Motivationnelle Islamique */}
          <div className="mt-8 p-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl border-2 border-indigo-300">
            <div className="text-center">
              <div className="text-lg font-semibold text-indigo-800 mb-2">
                "وَمَن جَاهَدَ فَإِنَّمَا يُجَاهِدُ لِنَفْسِهِ"
              </div>
              <div className="text-sm text-indigo-600 italic">
                "Et quiconque lutte ne lutte que pour lui-même" - Coran 29:6
              </div>
              <div className="text-xs text-gray-600 mt-2">
                Votre progression dans l'apprentissage islamique est une forme de Jihad personnel
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}