import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Satellite, 
  Timer,
  Calendar,
  MapPin,
  Wifi,
  Settings,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

interface LiveClockProps {
  variant?: 'desktop' | 'mobile';
  showPomodoro?: boolean;
  userId?: string;
}

interface PomodoroState {
  isActive: boolean;
  timeLeft: number; // en secondes
  duration: number; // en minutes
  type: 'work' | 'shortBreak' | 'longBreak';
  completedCycles: number;
}

export function LiveClock({ variant = 'desktop', showPomodoro = false, userId }: LiveClockProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState({ city: 'Paris', country: 'France', timezone: 'Europe/Paris' });
  const [satelliteConnected, setSatelliteConnected] = useState(true);
  const [pomodoroState, setPomodoroState] = useState<PomodoroState>({
    isActive: false,
    timeLeft: 25 * 60, // 25 minutes en secondes
    duration: 25,
    type: 'work',
    completedCycles: 0
  });

  // Mise à jour du temps en temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Détection automatique de la localisation (simulation satellite)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Simulation de détection de ville basée sur géolocalisation
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          setLocation({
            city: getCityFromTimezone(timezone),
            country: getCountryFromTimezone(timezone),
            timezone
          });
          setSatelliteConnected(true);
        },
        () => {
          // Fallback si géolocalisation refusée
          setSatelliteConnected(false);
        }
      );
    }
  }, []);

  // Timer Pomodoro personnalisé par utilisateur
  useEffect(() => {
    if (showPomodoro && userId) {
      // Charger l'état Pomodoro sauvegardé pour cet utilisateur
      const savedState = localStorage.getItem(`pomodoro_${userId}`);
      if (savedState) {
        setPomodoroState(JSON.parse(savedState));
      }
    }
  }, [showPomodoro, userId]);

  // Gestion du timer Pomodoro
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (pomodoroState.isActive && pomodoroState.timeLeft > 0) {
      interval = setInterval(() => {
        setPomodoroState(prev => {
          const newState = { ...prev, timeLeft: prev.timeLeft - 1 };
          
          // Sauvegarder l'état pour cet utilisateur
          if (userId) {
            localStorage.setItem(`pomodoro_${userId}`, JSON.stringify(newState));
          }
          
          return newState;
        });
      }, 1000);
    } else if (pomodoroState.timeLeft === 0 && pomodoroState.isActive) {
      // Session terminée - passer au type suivant
      handlePomodoroComplete();
    }

    return () => clearInterval(interval);
  }, [pomodoroState.isActive, pomodoroState.timeLeft, userId]);

  const getCityFromTimezone = (timezone: string): string => {
    const cityMap: { [key: string]: string } = {
      'Europe/Paris': 'Paris',
      'Europe/London': 'Londres',
      'America/New_York': 'New York',
      'Asia/Tokyo': 'Tokyo',
      'Australia/Sydney': 'Sydney',
      'America/Los_Angeles': 'Los Angeles'
    };
    return cityMap[timezone] || 'Votre ville';
  };

  const getCountryFromTimezone = (timezone: string): string => {
    const countryMap: { [key: string]: string } = {
      'Europe/Paris': 'France',
      'Europe/London': 'Royaume-Uni',
      'America/New_York': 'États-Unis',
      'Asia/Tokyo': 'Japon',
      'Australia/Sydney': 'Australie',
      'America/Los_Angeles': 'États-Unis'
    };
    return countryMap[timezone] || 'Votre pays';
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      second: variant === 'desktop' ? '2-digit' : undefined
    });
  };

  const formatDate = (date: Date): string => {
    if (variant === 'desktop') {
      return date.toLocaleDateString('fr-FR', {
        weekday: 'short',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    } else {
      return date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
      });
    }
  };

  const formatPomodoroTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startPomodoro = () => {
    setPomodoroState(prev => ({ ...prev, isActive: true }));
  };

  const pausePomodoro = () => {
    setPomodoroState(prev => ({ ...prev, isActive: false }));
  };

  const resetPomodoro = () => {
    setPomodoroState(prev => ({
      ...prev,
      isActive: false,
      timeLeft: prev.duration * 60
    }));
  };

  const handlePomodoroComplete = () => {
    setPomodoroState(prev => {
      const newCycles = prev.completedCycles + 1;
      let nextType: 'work' | 'shortBreak' | 'longBreak' = 'work';
      let nextDuration = 25;

      if (prev.type === 'work') {
        if (newCycles % 4 === 0) {
          nextType = 'longBreak';
          nextDuration = 15;
        } else {
          nextType = 'shortBreak';
          nextDuration = 5;
        }
      } else {
        nextType = 'work';
        nextDuration = 25;
      }

      const newState = {
        type: nextType,
        duration: nextDuration,
        timeLeft: nextDuration * 60,
        isActive: false,
        completedCycles: newCycles
      };

      // Notification et vibration
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Pomodoro terminé !', {
          body: `Session ${prev.type === 'work' ? 'de travail' : 'de pause'} terminée. Prêt pour ${nextType === 'work' ? 'le travail' : 'une pause'} ?`,
          icon: '/favicon.ico'
        });
      }

      if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200, 100, 200]);
      }

      return newState;
    });
  };

  const getPomodoroTypeLabel = (type: string): string => {
    switch (type) {
      case 'work': return 'Travail';
      case 'shortBreak': return 'Pause courte';
      case 'longBreak': return 'Pause longue';
      default: return 'Session';
    }
  };

  if (variant === 'desktop') {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-24 right-4 z-40"
      >
        <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg">
          <CardContent className="p-3">
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="font-mono text-lg font-bold text-gray-900">
                  {formatTime(currentTime)}
                </div>
                <div className="text-xs text-gray-600">
                  {formatDate(currentTime)}
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1">
                  <Satellite className="h-3 w-3 text-blue-600" />
                  {satelliteConnected && (
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  )}
                </div>
                <div className="text-xs text-gray-500 text-center">
                  <MapPin className="h-3 w-3 inline mr-1" />
                  {location.city}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  // Version mobile avec Pomodoro intégré
  return (
    <div className="space-y-4">
      {/* Horloge principale */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardContent className="pt-6 pb-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Satellite className="h-5 w-5" />
              <span className="text-sm">Synchronisé par satellite</span>
              {satelliteConnected && (
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              )}
            </div>
            
            <div className="text-4xl font-mono font-bold mb-2">
              {formatTime(currentTime)}
            </div>
            
            <div className="text-lg mb-2">
              {formatDate(currentTime)}
            </div>
            
            <div className="flex items-center justify-center gap-2 text-sm opacity-90">
              <MapPin className="h-4 w-4" />
              <span>{location.city}, {location.country}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timer Pomodoro personnalisé */}
      {showPomodoro && (
        <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
          <CardContent className="pt-6 pb-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Timer className="h-5 w-5 text-red-600" />
                <h3 className="font-semibold text-red-800">
                  Pomodoro - {getPomodoroTypeLabel(pomodoroState.type)}
                </h3>
              </div>
              
              <div className="text-3xl font-mono font-bold text-red-600 mb-2">
                {formatPomodoroTime(pomodoroState.timeLeft)}
              </div>
              
              <div className="text-sm text-gray-600 mb-4">
                Cycle {pomodoroState.completedCycles + 1} • {pomodoroState.duration} minutes
              </div>
              
              <div className="flex items-center justify-center gap-2 mb-4">
                <Button
                  variant={pomodoroState.isActive ? "secondary" : "default"}
                  size="sm"
                  onClick={pomodoroState.isActive ? pausePomodoro : startPomodoro}
                  className="flex items-center gap-1"
                >
                  {pomodoroState.isActive ? (
                    <>
                      <Pause className="h-4 w-4" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      <span>Start</span>
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetPomodoro}
                  className="flex items-center gap-1"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Reset</span>
                </Button>
              </div>
              
              <div className="bg-white rounded-lg p-3">
                <div className="flex justify-between text-xs mb-2">
                  <span>Progression</span>
                  <span>{Math.round(((pomodoroState.duration * 60 - pomodoroState.timeLeft) / (pomodoroState.duration * 60)) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full transition-all duration-1000"
                    style={{ 
                      width: `${((pomodoroState.duration * 60 - pomodoroState.timeLeft) / (pomodoroState.duration * 60)) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
              
              {userId && (
                <Badge variant="secondary" className="mt-3">
                  Personnalisé pour vous
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}