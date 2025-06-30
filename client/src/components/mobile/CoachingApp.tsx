import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Play, 
  Pause, 
  Square, 
  Heart, 
  Zap, 
  MapPin, 
  Timer, 
  Target,
  Mic,
  MicOff,
  Settings,
  Trophy,
  Activity,
  Users,
  Calendar,
  Bell,
  Smartphone,
  Globe,
  Volume2,
  VolumeX,
  RotateCcw,
  TrendingUp,
  Award,
  Star,
  Clock,
  Sparkles,
  BarChart3
} from 'lucide-react';

import { WorldClock } from './WorldClock';
import { LiveClock } from '@/components/ui/LiveClock';
import { useAuth } from '@/hooks/useAuth';

interface WorkoutSession {
  id: string;
  sport: string;
  duration: number; // en secondes
  calories: number;
  heartRate: number;
  distance?: number;
  intensity: 'low' | 'medium' | 'high' | 'extreme';
  tips: string[];
  nutritionAdvice: string;
}

interface SportActivity {
  id: string;
  name: string;
  category: string;
  icon: string;
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  duration: string;
  calories: string;
  equipment: string[];
  description: string;
}

const globalSports: SportActivity[] = [
  // Sports populaires
  {
    id: 'running',
    name: 'Course à pied',
    category: 'Cardio',
    icon: '🏃‍♂️',
    difficulty: 'Débutant',
    duration: '20-60 min',
    calories: '300-600 kcal/h',
    equipment: ['Chaussures de course'],
    description: 'Améliore l\'endurance cardiovasculaire et brûle efficacement les calories'
  },
  {
    id: 'football',
    name: 'Football',
    category: 'Sport d\'équipe',
    icon: '⚽',
    difficulty: 'Intermédiaire',
    duration: '45-90 min',
    calories: '400-700 kcal/h',
    equipment: ['Ballon', 'Crampons'],
    description: 'Développe coordination, endurance et esprit d\'équipe'
  },
  {
    id: 'swimming',
    name: 'Natation',
    category: 'Aquatique',
    icon: '🏊‍♀️',
    difficulty: 'Débutant',
    duration: '30-60 min',
    calories: '400-700 kcal/h',
    equipment: ['Maillot', 'Lunettes'],
    description: 'Sport complet sollicitant tous les groupes musculaires'
  },
  {
    id: 'tennis',
    name: 'Tennis',
    category: 'Raquette',
    icon: '🎾',
    difficulty: 'Intermédiaire',
    duration: '60-120 min',
    calories: '350-500 kcal/h',
    equipment: ['Raquette', 'Balles'],
    description: 'Améliore réflexes, coordination et agilité'
  },
  {
    id: 'cycling',
    name: 'Cyclisme',
    category: 'Endurance',
    icon: '🚴‍♂️',
    difficulty: 'Débutant',
    duration: '30-120 min',
    calories: '400-800 kcal/h',
    equipment: ['Vélo', 'Casque'],
    description: 'Renforce les jambes et améliore le système cardiovasculaire'
  },
  {
    id: 'boxing',
    name: 'Boxe',
    category: 'Combat',
    icon: '🥊',
    difficulty: 'Avancé',
    duration: '45-60 min',
    calories: '500-800 kcal/h',
    equipment: ['Gants', 'Bandages'],
    description: 'Développe force, endurance et confiance en soi'
  },
  {
    id: 'dhikr-meditation',
    name: 'Méditation Dhikr',
    category: 'Spiritualité',
    icon: '🕌',
    difficulty: 'Débutant',
    duration: '15-60 min',
    calories: '50-100 kcal/h',
    equipment: ['Tapis de prière', 'Tasbih'],
    description: 'Récitation spirituelle pour paix intérieure et rappel d\'Allah'
  },
  {
    id: 'basketball',
    name: 'Basketball',
    category: 'Sport d\'équipe',
    icon: '🏀',
    difficulty: 'Intermédiaire',
    duration: '45-60 min',
    calories: '400-600 kcal/h',
    equipment: ['Ballon', 'Chaussures'],
    description: 'Développe coordination, saut vertical et esprit tactique'
  }
];

export function CoachingApp() {
  const { user } = useAuth();
  const [isWorkoutActive, setIsWorkoutActive] = useState(false);
  const [currentWorkout, setCurrentWorkout] = useState<WorkoutSession | null>(null);
  const [selectedSport, setSelectedSport] = useState<SportActivity | null>(null);
  const [workoutTime, setWorkoutTime] = useState(0);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);
  const [currentTab, setCurrentTab] = useState('sports');

  // Simulation temps réel pendant l'entraînement
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isWorkoutActive && currentWorkout) {
      interval = setInterval(() => {
        setWorkoutTime(prev => prev + 1);
        
        // Mise à jour des métriques en temps réel
        setCurrentWorkout(prev => prev ? {
          ...prev,
          duration: workoutTime,
          calories: Math.floor(workoutTime * 8.5), // Simulation calories
          heartRate: 120 + Math.floor(Math.random() * 40) // Simulation BPM
        } : null);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isWorkoutActive, workoutTime]);

  const startWorkout = (sport: SportActivity) => {
    const newWorkout: WorkoutSession = {
      id: Date.now().toString(),
      sport: sport.name,
      duration: 0,
      calories: 0,
      heartRate: 80,
      intensity: 'low',
      tips: [
        `Échauffez-vous 5 minutes avant de commencer le ${sport.name}`,
        'Hydratez-vous régulièrement pendant l\'effort',
        'Écoutez votre corps et adaptez l\'intensité'
      ],
      nutritionAdvice: `Pour le ${sport.name}, privilégiez des glucides complexes 2h avant l'effort`
    };
    
    setCurrentWorkout(newWorkout);
    setSelectedSport(sport);
    setIsWorkoutActive(true);
    setWorkoutTime(0);
  };

  const pauseWorkout = () => {
    setIsWorkoutActive(!isWorkoutActive);
  };

  const stopWorkout = () => {
    setIsWorkoutActive(false);
    setCurrentWorkout(null);
    setWorkoutTime(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Débutant': return 'bg-green-100 text-green-800';
      case 'Intermédiaire': return 'bg-blue-100 text-blue-800';
      case 'Avancé': return 'bg-orange-100 text-orange-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-2 sm:p-4">
      {/* Header mobile */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center">
            <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold">Mon Coach Sportif</h1>
            <p className="text-xs sm:text-sm text-gray-600">avec Souheila Yakoubi-Ozel</p>
          </div>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
            className="h-8 w-8 sm:h-9 sm:w-auto sm:px-3"
          >
            {isVoiceEnabled ? <Volume2 className="h-3 w-3 sm:h-4 sm:w-4" /> : <VolumeX className="h-3 w-3 sm:h-4 sm:w-4" />}
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8 sm:h-9 sm:w-auto sm:px-3">
            <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>

      {/* Session active */}
      <AnimatePresence>
        {currentWorkout && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-4 sm:mb-6"
          >
            <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white text-base sm:text-lg">
                      {selectedSport?.icon} {currentWorkout.sport}
                    </CardTitle>
                    <CardDescription className="text-green-100 text-xs sm:text-sm">
                      Session en cours
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-xl sm:text-2xl font-bold">{formatTime(workoutTime)}</div>
                    <div className="text-xs sm:text-sm opacity-90">Temps écoulé</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3 sm:space-y-4">
                {/* Métriques temps réel */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  <div className="text-center">
                    <div className="text-base sm:text-lg font-bold">{currentWorkout.calories}</div>
                    <div className="text-xs opacity-90">Calories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-base sm:text-lg font-bold flex items-center justify-center gap-1">
                      <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                      {currentWorkout.heartRate}
                    </div>
                    <div className="text-xs opacity-90">BPM</div>
                  </div>
                  <div className="text-center">
                    <div className="text-base sm:text-lg font-bold">{Math.floor(workoutTime / 60)}</div>
                    <div className="text-xs opacity-90">Minutes</div>
                  </div>
                </div>

                {/* Conseils en temps réel */}
                <div className="bg-white/20 rounded-lg p-2 sm:p-3">
                  <div className="text-xs sm:text-sm font-medium mb-1">💡 Conseil de Souheila :</div>
                  <div className="text-xs sm:text-sm opacity-90">
                    {currentWorkout.tips[Math.floor(workoutTime / 30) % currentWorkout.tips.length]}
                  </div>
                </div>

                {/* Contrôles */}
                <div className="flex items-center justify-center gap-2 sm:gap-4">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={pauseWorkout}
                    className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
                  >
                    {isWorkoutActive ? <Pause className="h-3 w-3 sm:h-4 sm:w-4" /> : <Play className="h-3 w-3 sm:h-4 sm:w-4" />}
                    {isWorkoutActive ? 'Pause' : 'Reprendre'}
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={stopWorkout}
                    className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
                  >
                    <Square className="h-3 w-3 sm:h-4 sm:w-4" />
                    Arrêter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation principale */}
      <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-4 sm:mb-6 h-auto">
          <TabsTrigger value="sports" className="flex flex-col items-center gap-1 py-2 sm:py-3 text-xs">
            <Activity className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Sports</span>
          </TabsTrigger>
          <TabsTrigger value="progress" className="flex flex-col items-center gap-1 py-2 sm:py-3 text-xs">
            <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Progrès</span>
          </TabsTrigger>
          <TabsTrigger value="nutrition" className="flex flex-col items-center gap-1 py-2 sm:py-3 text-xs">
            <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Nutrition</span>
          </TabsTrigger>
          <TabsTrigger value="time" className="flex flex-col items-center gap-1 py-2 sm:py-3 text-xs">
            <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Horaires</span>
          </TabsTrigger>
          <TabsTrigger value="community" className="flex flex-col items-center gap-1 py-2 sm:py-3 text-xs">
            <Users className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Équipe</span>
          </TabsTrigger>
        </TabsList>

        {/* Section Sports */}
        <TabsContent value="sports" className="space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h2 className="text-lg sm:text-xl font-bold">Choisir un sport</h2>
            <Badge variant="secondary" className="flex items-center gap-1 text-xs">
              <Globe className="h-3 w-3" />
              70+ sports
            </Badge>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {globalSports.map((sport, index) => (
              <motion.div
                key={sport.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-xl sm:text-2xl">{sport.icon}</span>
                        <div>
                          <h3 className="font-semibold text-sm sm:text-base">{sport.name}</h3>
                          <p className="text-xs sm:text-sm text-gray-600">{sport.category}</p>
                        </div>
                      </div>
                      <Badge className={`${getDifficultyColor(sport.difficulty)} text-xs`}>
                        {sport.difficulty}
                      </Badge>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-gray-700 mb-2 sm:mb-3">{sport.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-3 sm:mb-4 text-xs sm:text-sm">
                      <div className="flex items-center gap-1">
                        <Timer className="h-3 w-3 text-gray-500" />
                        <span>{sport.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Sparkles className="h-3 w-3 text-orange-500" />
                        <span>{sport.calories}</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full text-xs sm:text-sm h-8 sm:h-9"
                      onClick={() => startWorkout(sport)}
                      disabled={isWorkoutActive}
                    >
                      <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      Commencer l'entraînement
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Section Progrès */}
        <TabsContent value="progress" className="space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Mes Statistiques</h2>
          
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
            <Card>
              <CardContent className="p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-green-600">127</div>
                <div className="text-xs sm:text-sm text-gray-600">Séances</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">89h</div>
                <div className="text-xs sm:text-sm text-gray-600">Temps total</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg">Progression hebdomadaire</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs sm:text-sm mb-1">
                    <span>Cardio</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-1.5 sm:h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-xs sm:text-sm mb-1">
                    <span>Force</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} className="h-1.5 sm:h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-xs sm:text-sm mb-1">
                    <span>Flexibilité</span>
                    <span>40%</span>
                  </div>
                  <Progress value={40} className="h-1.5 sm:h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Section Nutrition */}
        <TabsContent value="nutrition" className="space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Conseils Nutrition</h2>
          
          <Card className="bg-gradient-to-r from-green-50 to-blue-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <span className="text-xl sm:text-2xl">👩‍⚕️</span>
                Message de Souheila
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs sm:text-sm mb-3">
                "Pour optimiser vos performances, hydratez-vous 2h avant l'effort et consommez 
                des glucides complexes. Après l'entraînement, privilégiez les protéines pour la récupération."
              </p>
              <Badge variant="secondary" className="text-xs">Conseil personnalisé</Badge>
            </CardContent>
          </Card>

          <div className="space-y-3">
            <Card>
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <span className="text-lg sm:text-xl">🥤</span>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Hydratation</h4>
                    <p className="text-xs sm:text-sm text-gray-600">2.5L aujourd'hui</p>
                  </div>
                </div>
                <Progress value={65} className="h-1.5 sm:h-2" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <span className="text-lg sm:text-xl">🍎</span>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Fruits & Légumes</h4>
                    <p className="text-xs sm:text-sm text-gray-600">3/5 portions</p>
                  </div>
                </div>
                <Progress value={60} className="h-1.5 sm:h-2" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Section Horaires Mondiaux */}
        <TabsContent value="time" className="space-y-3 sm:space-y-4">
          <div className="mb-4">
            <LiveClock 
              variant="mobile" 
              showPomodoro={true} 
              userId="guest" 
            />
          </div>
          <WorldClock />
        </TabsContent>

        {/* Section Communauté */}
        <TabsContent value="community" className="space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Communauté Mondiale</h2>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg">Défis actifs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-2 sm:p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600" />
                  <div>
                    <div className="font-medium text-xs sm:text-sm">Course du mois</div>
                    <div className="text-xs text-gray-600">50km en juin</div>
                  </div>
                </div>
                <Badge className="text-xs">34/50km</Badge>
              </div>
              
              <div className="flex items-center justify-between p-2 sm:p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-xs sm:text-sm">Équipe France</div>
                    <div className="text-xs text-gray-600">1,247 membres</div>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">#5</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg">Utilisateurs en ligne</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium">1,847 actifs maintenant</span>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span>🇫🇷 France</span>
                  <span>642 utilisateurs</span>
                </div>
                <div className="flex justify-between">
                  <span>🇨🇦 Canada</span>
                  <span>234 utilisateurs</span>
                </div>
                <div className="flex justify-between">
                  <span>🇲🇦 Maroc</span>
                  <span>187 utilisateurs</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}