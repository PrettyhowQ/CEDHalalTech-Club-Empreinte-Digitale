import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Satellite, 
  Clock, 
  MapPin, 
  Wifi, 
  Download,
  Calendar,
  Timer,
  Play,
  Pause,
  RotateCcw,
  Settings,
  Volume2,
  VolumeX
} from 'lucide-react';

interface TimeZoneData {
  city: string;
  country: string;
  timezone: string;
  offset: string;
  time: string;
  date: string;
  flag: string;
  satellite: boolean;
}

interface PomodoroSession {
  id: string;
  type: 'work' | 'shortBreak' | 'longBreak';
  duration: number; // en minutes
  timeLeft: number; // en secondes
  isActive: boolean;
  completedCycles: number;
}

export function WorldClock() {
  const [currentLocation, setCurrentLocation] = useState<TimeZoneData | null>(null);
  const [worldTimes, setWorldTimes] = useState<TimeZoneData[]>([]);
  const [satelliteConnected, setSatelliteConnected] = useState(true);
  const [lastSync, setLastSync] = useState<Date>(new Date());
  const [pomodoroSession, setPomodoroSession] = useState<PomodoroSession>({
    id: Date.now().toString(),
    type: 'work',
    duration: 25,
    timeLeft: 25 * 60,
    isActive: false,
    completedCycles: 0
  });
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Détection automatique de la localisation et synchronisation satellite
  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            updateLocationTime(latitude, longitude);
          },
          (error) => {
            console.log('Geolocation error:', error);
            // Fallback à Paris
            setDefaultLocation();
          }
        );
      } else {
        setDefaultLocation();
      }
    };

    const updateLocationTime = (lat: number, lon: number) => {
      // Simulation de la synchronisation satellite
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const now = new Date();
      
      const locationData: TimeZoneData = {
        city: getCityFromCoords(lat, lon),
        country: getCountryFromCoords(lat, lon),
        timezone: timezone,
        offset: getTimezoneOffset(now),
        time: now.toLocaleTimeString('fr-FR', { 
          hour: '2-digit', 
          minute: '2-digit', 
          second: '2-digit' 
        }),
        date: now.toLocaleDateString('fr-FR', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        flag: getFlagFromCoords(lat, lon),
        satellite: true
      };
      
      setCurrentLocation(locationData);
      setLastSync(new Date());
    };

    const setDefaultLocation = () => {
      const now = new Date();
      const parisTime: TimeZoneData = {
        city: 'Paris',
        country: 'France',
        timezone: 'Europe/Paris',
        offset: getTimezoneOffset(now),
        time: now.toLocaleTimeString('fr-FR', { 
          hour: '2-digit', 
          minute: '2-digit', 
          second: '2-digit' 
        }),
        date: now.toLocaleDateString('fr-FR', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        flag: '🇫🇷',
        satellite: true
      };
      setCurrentLocation(parisTime);
    };

    getUserLocation();
    initializeWorldTimes();
  }, []);

  // Mise à jour en temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLocation) {
        const now = new Date();
        setCurrentLocation(prev => prev ? {
          ...prev,
          time: now.toLocaleTimeString('fr-FR', { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
          }),
          date: now.toLocaleDateString('fr-FR', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })
        } : null);
      }
      
      // Mise à jour des horaires mondiaux
      updateWorldTimes();
    }, 1000);

    return () => clearInterval(interval);
  }, [currentLocation]);

  // Timer Pomodoro
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (pomodoroSession.isActive && pomodoroSession.timeLeft > 0) {
      interval = setInterval(() => {
        setPomodoroSession(prev => ({
          ...prev,
          timeLeft: prev.timeLeft - 1
        }));
      }, 1000);
    } else if (pomodoroSession.timeLeft === 0 && pomodoroSession.isActive) {
      // Session terminée
      if (soundEnabled) {
        playNotificationSound();
      }
      handlePomodoroComplete();
    }

    return () => clearInterval(interval);
  }, [pomodoroSession.isActive, pomodoroSession.timeLeft, soundEnabled]);

  const initializeWorldTimes = () => {
    const zones: TimeZoneData[] = [
      createTimeZone('New York', 'États-Unis', 'America/New_York', '🇺🇸'),
      createTimeZone('Londres', 'Royaume-Uni', 'Europe/London', '🇬🇧'),
      createTimeZone('Tokyo', 'Japon', 'Asia/Tokyo', '🇯🇵'),
      createTimeZone('Sydney', 'Australie', 'Australia/Sydney', '🇦🇺'),
      createTimeZone('Dubaï', 'Émirats Arabes Unis', 'Asia/Dubai', '🇦🇪'),
      createTimeZone('São Paulo', 'Brésil', 'America/Sao_Paulo', '🇧🇷')
    ];
    setWorldTimes(zones);
  };

  const createTimeZone = (city: string, country: string, timezone: string, flag: string): TimeZoneData => {
    const now = new Date();
    return {
      city,
      country,
      timezone,
      offset: getTimezoneOffsetForZone(timezone),
      time: now.toLocaleTimeString('fr-FR', { 
        timeZone: timezone,
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      }),
      date: now.toLocaleDateString('fr-FR', { 
        timeZone: timezone,
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      }),
      flag,
      satellite: true
    };
  };

  const updateWorldTimes = () => {
    setWorldTimes(prev => prev.map(zone => ({
      ...zone,
      time: new Date().toLocaleTimeString('fr-FR', { 
        timeZone: zone.timezone,
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      }),
      date: new Date().toLocaleDateString('fr-FR', { 
        timeZone: zone.timezone,
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      })
    })));
  };

  const getCityFromCoords = (lat: number, lon: number): string => {
    // Simulation - dans une vraie app, utiliser une API de géocodage
    return 'Votre position';
  };

  const getCountryFromCoords = (lat: number, lon: number): string => {
    return 'Détectée automatiquement';
  };

  const getFlagFromCoords = (lat: number, lon: number): string => {
    return '📍';
  };

  const getTimezoneOffset = (date: Date): string => {
    const offset = -date.getTimezoneOffset();
    const hours = Math.floor(Math.abs(offset) / 60);
    const minutes = Math.abs(offset) % 60;
    const sign = offset >= 0 ? '+' : '-';
    return `UTC${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  const getTimezoneOffsetForZone = (timezone: string): string => {
    const now = new Date();
    const utc = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));
    const targetTime = new Date(utc.toLocaleString('en-US', { timeZone: timezone }));
    const offset = (targetTime.getTime() - utc.getTime()) / (1000 * 60 * 60);
    const sign = offset >= 0 ? '+' : '-';
    const hours = Math.floor(Math.abs(offset));
    const minutes = (Math.abs(offset) % 1) * 60;
    return `UTC${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  // Fonctions Pomodoro
  const startPomodoro = () => {
    setPomodoroSession(prev => ({ ...prev, isActive: true }));
  };

  const pausePomodoro = () => {
    setPomodoroSession(prev => ({ ...prev, isActive: false }));
  };

  const resetPomodoro = () => {
    setPomodoroSession(prev => ({
      ...prev,
      isActive: false,
      timeLeft: prev.duration * 60
    }));
  };

  const handlePomodoroComplete = () => {
    setPomodoroSession(prev => {
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

      return {
        ...prev,
        type: nextType,
        duration: nextDuration,
        timeLeft: nextDuration * 60,
        isActive: false,
        completedCycles: newCycles
      };
    });
  };

  const playNotificationSound = () => {
    // Simulation du son - dans une vraie app, jouer un fichier audio
    if ('vibrate' in navigator) {
      navigator.vibrate([200, 100, 200]);
    }
  };

  const formatPomodoroTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getPomodoroTypeLabel = (type: string): string => {
    switch (type) {
      case 'work': return 'Travail';
      case 'shortBreak': return 'Pause courte';
      case 'longBreak': return 'Pause longue';
      default: return 'Session';
    }
  };

  const downloadTimeData = () => {
    const data = {
      currentLocation,
      worldTimes,
      timestamp: new Date().toISOString(),
      satelliteSync: satelliteConnected
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `horloge-mondiale-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-2 sm:p-4">
      {/* Header avec synchronisation satellite */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <Satellite className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold">Horloge Mondiale</h1>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
              <Wifi className="h-3 w-3" />
              <span>Synchronisé par satellite</span>
              {satelliteConnected && (
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-1 sm:gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={downloadTimeData}
            className="h-8 w-8 sm:h-9 sm:w-auto sm:px-3"
          >
            <Download className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8 sm:h-9 sm:w-auto sm:px-3">
            <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>

      {/* Horloge principale - Votre localisation */}
      {currentLocation && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6"
        >
          <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{currentLocation.flag}</span>
                  <div>
                    <CardTitle className="text-white text-lg">
                      {currentLocation.city}
                    </CardTitle>
                    <CardDescription className="text-blue-100 text-sm">
                      {currentLocation.country} • {currentLocation.offset}
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  Votre zone
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="text-center mb-4">
                <div className="text-3xl sm:text-4xl font-mono font-bold mb-1">
                  {currentLocation.time}
                </div>
                <div className="text-sm sm:text-base opacity-90">
                  {currentLocation.date}
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-xs opacity-75">
                <Satellite className="h-3 w-3" />
                <span>Dernière sync: {lastSync.toLocaleTimeString('fr-FR', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Timer Pomodoro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Timer className="h-5 w-5 text-red-600" />
                Pomodoro - {getPomodoroTypeLabel(pomodoroSession.type)}
              </CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="h-8 w-8"
              >
                {soundEnabled ? <Volume2 className="h-3 w-3" /> : <VolumeX className="h-3 w-3" />}
              </Button>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="text-center mb-4">
              <div className="text-3xl font-mono font-bold text-red-600 mb-2">
                {formatPomodoroTime(pomodoroSession.timeLeft)}
              </div>
              <div className="text-sm text-gray-600">
                Cycle {pomodoroSession.completedCycles + 1} • {pomodoroSession.duration} minutes
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <Button
                variant={pomodoroSession.isActive ? "secondary" : "default"}
                size="sm"
                onClick={pomodoroSession.isActive ? pausePomodoro : startPomodoro}
                className="flex items-center gap-1"
              >
                {pomodoroSession.isActive ? (
                  <>
                    <Pause className="h-3 w-3" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3 w-3" />
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
                <RotateCcw className="h-3 w-3" />
                <span>Reset</span>
              </Button>
            </div>
            
            <div className="bg-white rounded-lg p-2">
              <div className="flex justify-between text-xs mb-1">
                <span>Progression</span>
                <span>{Math.round(((pomodoroSession.duration * 60 - pomodoroSession.timeLeft) / (pomodoroSession.duration * 60)) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-red-500 h-2 rounded-full transition-all duration-1000"
                  style={{ 
                    width: `${((pomodoroSession.duration * 60 - pomodoroSession.timeLeft) / (pomodoroSession.duration * 60)) * 100}%` 
                  }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Horloges mondiales */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <Globe className="h-5 w-5" />
          Fuseaux Horaires Mondiaux
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {worldTimes.map((zone, index) => (
            <motion.div
              key={zone.timezone}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{zone.flag}</span>
                      <div>
                        <h3 className="font-semibold text-sm">{zone.city}</h3>
                        <p className="text-xs text-gray-600">{zone.country}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-sm">
                        {zone.time}
                      </div>
                      <div className="text-xs text-gray-500">
                        {zone.date}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{zone.offset}</span>
                    <div className="flex items-center gap-1">
                      <Satellite className="h-3 w-3" />
                      <span>Sync</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}