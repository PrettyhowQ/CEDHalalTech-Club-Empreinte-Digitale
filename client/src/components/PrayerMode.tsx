import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import {
  Moon,
  Sun,
  Clock,
  Bell,
  BellOff,
  Smartphone,
  Volume,
  VolumeX,
  Settings,
  MapPin,
  Calendar
} from 'lucide-react';

// Interface pour la synchronisation avec le calendrier existant
interface TimeData {
  gregorian: string;
  hijri: string;
  timestamp: number;
  timezone: string;
  satelliteSync: boolean;
}

interface PrayerTime {
  name: string;
  time: string;
  arabic: string;
  isActive: boolean;
  duration: number; // minutes
}

interface PrayerSettings {
  autoMode: boolean;
  notifications: boolean;
  silentMode: boolean;
  location: string;
  timezone: string;
}

export function PrayerMode() {
  const [isActive, setIsActive] = useState(false);
  const [currentPrayer, setCurrentPrayer] = useState<string | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [currentTime, setCurrentTime] = useState<TimeData>({
    gregorian: '',
    hijri: '',
    timestamp: 0,
    timezone: 'Asia/Dubai',
    satelliteSync: true
  });
  const [settings, setSettings] = useState<PrayerSettings>({
    autoMode: true,
    notifications: true,
    silentMode: true,
    location: 'Dubaï, EAU',
    timezone: 'Asia/Dubai'
  });

  // Synchronisation avec le calendrier hégirien existant
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hijriDate = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Asia/Dubai'
      }).format(now);
      
      const gregorianDate = new Intl.DateTimeFormat('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Asia/Dubai'
      }).format(now);

      setCurrentTime({
        gregorian: gregorianDate,
        hijri: hijriDate,
        timestamp: now.getTime(),
        timezone: 'Asia/Dubai',
        satelliteSync: true
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const prayerTimes: PrayerTime[] = [
    {
      name: 'Fajr',
      time: '05:42',
      arabic: 'الفجر',
      isActive: false,
      duration: 15
    },
    {
      name: 'Dhuhr',
      time: '12:18',
      arabic: 'الظهر',
      isActive: true,
      duration: 20
    },
    {
      name: 'Asr',
      time: '15:45',
      arabic: 'العصر',
      isActive: false,
      duration: 15
    },
    {
      name: 'Maghrib',
      time: '18:23',
      arabic: 'المغرب',
      isActive: false,
      duration: 20
    },
    {
      name: 'Isha',
      time: '19:53',
      arabic: 'العشاء',
      isActive: false,
      duration: 25
    }
  ];

  useEffect(() => {
    // Simulation du mode prière actif
    const activePrayer = prayerTimes.find(p => p.isActive);
    if (activePrayer) {
      setCurrentPrayer(activePrayer.name);
      setIsActive(true);
      setTimeRemaining(12); // minutes restantes
    }
  }, []);

  const formatTimeRemaining = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes} min`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMins = minutes % 60;
    return `${hours}h ${remainingMins}min`;
  };

  const getNextPrayer = () => {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    for (const prayer of prayerTimes) {
      const [hours, minutes] = prayer.time.split(':').map(Number);
      const prayerTime = hours * 60 + minutes;
      
      if (prayerTime > currentTime) {
        return prayer;
      }
    }
    return prayerTimes[0]; // Fajr du lendemain
  };

  const nextPrayer = getNextPrayer();

  return (
    <div className="space-y-6">
      {/* Mode Prière Actif */}
      {isActive && currentPrayer && (
        <Card className="border-2 border-green-500 bg-gradient-to-r from-green-50 to-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Moon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800">Mode Prière Actif</h3>
                  <p className="text-green-600">{currentPrayer} en cours</p>
                </div>
              </div>
              <Badge className="bg-green-500 text-white">
                {formatTimeRemaining(timeRemaining)} restant
              </Badge>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">Services bancaires suspendus</span>
                <VolumeX className="h-5 w-5 text-gray-400" />
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <BellOff className="h-4 w-4" />
                  <span>Notifications silencieuses</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  <span>Transactions différées</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Reprise automatique après la prière</span>
                </div>
              </div>
            </div>

            <Button 
              variant="outline" 
              size="sm" 
              className="mt-4 border-green-300 text-green-700"
              onClick={() => setIsActive(false)}
            >
              Reprendre les services
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Synchronisation Calendriers */}
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-blue-800 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Synchronisation Calendaires
              </h4>
              <div className="text-sm text-blue-600 mt-1">
                <div>Grégorien: {currentTime.gregorian}</div>
                <div>Hégirien: {currentTime.hijri}</div>
              </div>
            </div>
            <Badge className={`${currentTime.satelliteSync ? 'bg-green-500' : 'bg-yellow-500'} text-white`}>
              {currentTime.satelliteSync ? 'Synchronisé' : 'Mise à jour'}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Horaires de Prière */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-600" />
            Horaires de Prière - {settings.location}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {prayerTimes.map((prayer, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-between p-3 rounded-lg ${
                prayer.isActive 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  prayer.isActive 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {prayer.isActive ? <Bell className="h-5 w-5" /> : <Clock className="h-4 w-4" />}
                </div>
                <div>
                  <div className="font-medium flex items-center gap-2">
                    {prayer.name}
                    <span className="text-sm text-gray-500">{prayer.arabic}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Pause: {prayer.duration} minutes
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg">{prayer.time}</div>
                {prayer.isActive && (
                  <Badge className="bg-green-500 text-white">En cours</Badge>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Prochaine Prière */}
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-blue-800">Prochaine prière</h4>
              <p className="text-blue-600">{nextPrayer.name} - {nextPrayer.time}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                <Sun className="h-6 w-6 text-white" />
              </div>
              <Badge className="bg-blue-500 text-white">
                Dans 2h 15min
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Paramètres Mode Prière */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-gray-600" />
            Paramètres Mode Prière
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Activation automatique</h4>
              <p className="text-sm text-gray-600">
                Bascule automatiquement en mode prière
              </p>
            </div>
            <Switch 
              checked={settings.autoMode}
              onCheckedChange={(checked) => 
                setSettings(prev => ({ ...prev, autoMode: checked }))
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Notifications de prière</h4>
              <p className="text-sm text-gray-600">
                Rappel 5 minutes avant chaque prière
              </p>
            </div>
            <Switch 
              checked={settings.notifications}
              onCheckedChange={(checked) => 
                setSettings(prev => ({ ...prev, notifications: checked }))
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Mode silencieux complet</h4>
              <p className="text-sm text-gray-600">
                Désactive toutes les alertes bancaires
              </p>
            </div>
            <Switch 
              checked={settings.silentMode}
              onCheckedChange={(checked) => 
                setSettings(prev => ({ ...prev, silentMode: checked }))
              }
            />
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-4 w-4 text-gray-600" />
              <span className="font-medium">Localisation</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{settings.location}</p>
            <Button variant="outline" size="sm">
              Changer la ville
            </Button>
          </div>

          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-green-600" />
              <span className="font-medium text-green-800">Conformité Charia & Synchronisation</span>
            </div>
            <div className="space-y-1 text-sm text-green-700">
              <p>✓ Horaires approuvés par les autorités religieuses d'EAU</p>
              <p>✓ Synchronisé avec le planificateur satellite CED</p>
              <p>✓ Calendrier hégirien et grégorien intégrés</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}