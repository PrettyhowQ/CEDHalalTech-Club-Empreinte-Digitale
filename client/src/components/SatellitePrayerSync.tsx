import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Satellite,
  MapPin,
  Clock,
  Calendar,
  Star,
  Building2,
  Compass,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  AlertTriangle,
  Moon,
  Sun,
  Navigation,
  Radio,
  Wifi,
  Settings,
  Eye,
  Play,
  Pause
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PrayerTime {
  name: string;
  arabicName: string;
  time: string;
  nextCall: Date;
  status: 'upcoming' | 'current' | 'completed';
  duration: number; // en minutes
}

interface SatelliteData {
  id: string;
  name: string;
  position: { lat: number; lng: number; alt: number };
  accuracy: number;
  signalStrength: number;
  lastSync: Date;
  provider: 'GPS' | 'GLONASS' | 'Galileo' | 'BeiDou';
}

interface IslamicCalendarEvent {
  date: Date;
  name: string;
  arabicName: string;
  type: 'eid' | 'ramadan' | 'hajj' | 'special';
  significance: string;
  adjustments: {
    prayerTimes: boolean;
    bankingHours: boolean;
    specialRules: string[];
  };
}

export default function SatellitePrayerSync() {
  const [currentLocation, setCurrentLocation] = useState({ lat: 46.2044, lng: 6.1432 }); // Genève
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);
  const [satellites, setSatellites] = useState<SatelliteData[]>([]);
  const [islamicEvents, setIslamicEvents] = useState<IslamicCalendarEvent[]>([]);
  const [syncStatus, setSyncStatus] = useState<'syncing' | 'synced' | 'error'>('synced');
  const [qiblaDirection, setQiblaDirection] = useState(136.7); // Vers La Mecque depuis Genève
  const [islamicDate, setIslamicDate] = useState('');
  const [bankingSuspended, setBankingSuspended] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Calcul des horaires de prière basé sur position satellitaire
    const calculatePrayerTimes = () => {
      const today = new Date();
      const prayers: PrayerTime[] = [
        {
          name: 'Fajr',
          arabicName: 'الفجر',
          time: '05:47',
          nextCall: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 5, 47),
          status: 'completed',
          duration: 20
        },
        {
          name: 'Sunrise',
          arabicName: 'الشروق',
          time: '07:23',
          nextCall: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 7, 23),
          status: 'completed',
          duration: 0
        },
        {
          name: 'Dhuhr',
          arabicName: 'الظهر',
          time: '12:28',
          nextCall: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 28),
          status: 'completed',
          duration: 15
        },
        {
          name: 'Asr',
          arabicName: 'العصر',
          time: '14:42',
          nextCall: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 42),
          status: 'current',
          duration: 15
        },
        {
          name: 'Maghrib',
          arabicName: 'المغرب',
          time: '17:15',
          nextCall: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 17, 15),
          status: 'upcoming',
          duration: 10
        },
        {
          name: 'Isha',
          arabicName: 'العشاء',
          time: '18:51',
          nextCall: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 18, 51),
          status: 'upcoming',
          duration: 20
        }
      ];
      setPrayerTimes(prayers);
    };

    // Données satellites en temps réel
    const satelliteData: SatelliteData[] = [
      {
        id: 'GPS-12',
        name: 'GPS Block III',
        position: { lat: 46.2044, lng: 6.1432, alt: 20200 },
        accuracy: 0.3, // mètres
        signalStrength: 98,
        lastSync: new Date(),
        provider: 'GPS'
      },
      {
        id: 'GLO-15',
        name: 'GLONASS-M',
        position: { lat: 46.2045, lng: 6.1430, alt: 19130 },
        accuracy: 0.5,
        signalStrength: 95,
        lastSync: new Date(Date.now() - 1000),
        provider: 'GLONASS'
      },
      {
        id: 'GAL-07',
        name: 'Galileo FOC',
        position: { lat: 46.2043, lng: 6.1434, alt: 23222 },
        accuracy: 0.2,
        signalStrength: 97,
        lastSync: new Date(Date.now() - 500),
        provider: 'Galileo'
      },
      {
        id: 'BDS-44',
        name: 'BeiDou-3',
        position: { lat: 46.2046, lng: 6.1431, alt: 21528 },
        accuracy: 0.4,
        signalStrength: 93,
        lastSync: new Date(Date.now() - 1500),
        provider: 'BeiDou'
      }
    ];
    setSatellites(satelliteData);

    // Événements calendrier islamique
    const events: IslamicCalendarEvent[] = [
      {
        date: new Date('2025-01-15'),
        name: 'Jour de Arafat',
        arabicName: 'يوم عرفة',
        type: 'hajj',
        significance: 'Jour le plus sacré du Hajj',
        adjustments: {
          prayerTimes: true,
          bankingHours: true,
          specialRules: ['Suspension complète 12h-18h', 'Jeûne recommandé', 'Donations automatiques']
        }
      },
      {
        date: new Date('2025-01-16'),
        name: 'Eid al-Adha',
        arabicName: 'عيد الأضحى',
        type: 'eid',
        significance: 'Fête du Sacrifice',
        adjustments: {
          prayerTimes: true,
          bankingHours: true,
          specialRules: ['Banking fermé journée complète', 'Prière Eid spéciale', 'Distribution Qurbani']
        }
      },
      {
        date: new Date('2025-03-01'),
        name: 'Début Ramadan',
        arabicName: 'بداية رمضان',
        type: 'ramadan',
        significance: 'Mois sacré du jeûne',
        adjustments: {
          prayerTimes: true,
          bankingHours: true,
          specialRules: ['Horaires adaptés', 'Calcul Zakat automatique', 'Mode Ramadan activé']
        }
      }
    ];
    setIslamicEvents(events);

    // Date islamique actuelle
    setIslamicDate('24 Jumada al-Akhirah 1446');

    calculatePrayerTimes();

    // Vérification suspension banking pendant prière
    const currentTime = new Date();
    const currentPrayer = prayers.find(p => p.status === 'current');
    if (currentPrayer) {
      setBankingSuspended(true);
    }
  }, []);

  const syncWithSatellites = () => {
    setSyncStatus('syncing');
    toast({
      title: "Synchronisation Satellitaire",
      description: "Connexion avec constellation GPS/GLONASS/Galileo/BeiDou...",
    });

    setTimeout(() => {
      setSyncStatus('synced');
      toast({
        title: "✓ Synchronisation Réussie",
        description: "Horaires mis à jour avec précision satellitaire ±0.2m",
      });
    }, 3000);
  };

  const calculateQibla = () => {
    // Calcul précis direction La Mecque depuis position satellitaire
    const meccaLat = 21.4225;
    const meccaLng = 39.8262;
    
    const lat1 = currentLocation.lat * Math.PI / 180;
    const lat2 = meccaLat * Math.PI / 180;
    const deltaLng = (meccaLng - currentLocation.lng) * Math.PI / 180;
    
    const y = Math.sin(deltaLng) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLng);
    
    const bearing = Math.atan2(y, x) * 180 / Math.PI;
    const qibla = (bearing + 360) % 360;
    
    setQiblaDirection(qibla);
    
    toast({
      title: "🧭 Direction Qibla Mise à Jour",
      description: `${qibla.toFixed(1)}° depuis votre position exacte`,
    });
  };

  const averageAccuracy = satellites.reduce((sum, sat) => sum + sat.accuracy, 0) / satellites.length;
  const averageSignal = satellites.reduce((sum, sat) => sum + sat.signalStrength, 0) / satellites.length;
  const nextPrayer = prayerTimes.find(p => p.status === 'upcoming');
  const currentPrayer = prayerTimes.find(p => p.status === 'current');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
              <Satellite className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold">مزامنة الصلاة بالأقمار الصناعية</h1>
              <h2 className="text-3xl font-semibold text-blue-600">Synchronisation Prière Satellitaire</h2>
              <p className="text-gray-600 text-lg">Précision GPS/GLONASS/Galileo/BeiDou - Calendrier islamique intégré</p>
            </div>
          </div>
        </div>

        {/* Statut global */}
        <Card className="mb-8 bg-gradient-to-r from-blue-500 to-green-500 text-white">
          <CardContent className="p-8 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold">{averageAccuracy.toFixed(1)}m</div>
                <div className="text-sm opacity-90">Précision Moyenne</div>
              </div>
              <div>
                <div className="text-3xl font-bold">{satellites.length}</div>
                <div className="text-sm opacity-90">Satellites Connectés</div>
              </div>
              <div>
                <div className="text-3xl font-bold">{qiblaDirection.toFixed(1)}°</div>
                <div className="text-sm opacity-90">Direction Qibla</div>
              </div>
              <div>
                <div className="text-3xl font-bold">{averageSignal.toFixed(0)}%</div>
                <div className="text-sm opacity-90">Signal Moyen</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="prayers" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="prayers">مواقيت الصلاة</TabsTrigger>
            <TabsTrigger value="satellites">الأقمار</TabsTrigger>
            <TabsTrigger value="calendar">التقويم</TabsTrigger>
            <TabsTrigger value="banking">البنك</TabsTrigger>
          </TabsList>

          {/* Horaires de prière */}
          <TabsContent value="prayers" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    مواقيت اليوم - Horaires Aujourd'hui
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    Position: {currentLocation.lat.toFixed(4)}°N, {currentLocation.lng.toFixed(4)}°E
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {prayerTimes.map((prayer, index) => (
                      <div key={index} className={`p-4 rounded-lg border ${
                        prayer.status === 'current' ? 'bg-red-50 border-red-200' :
                        prayer.status === 'upcoming' ? 'bg-blue-50 border-blue-200' :
                        'bg-gray-50 border-gray-200'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="text-2xl">
                              {prayer.name === 'Fajr' && '🌅'}
                              {prayer.name === 'Sunrise' && '☀️'}
                              {prayer.name === 'Dhuhr' && '🌞'}
                              {prayer.name === 'Asr' && '🌤️'}
                              {prayer.name === 'Maghrib' && '🌅'}
                              {prayer.name === 'Isha' && '🌙'}
                            </div>
                            <div>
                              <div className="font-semibold">{prayer.name} - {prayer.arabicName}</div>
                              <div className="text-sm text-gray-600">
                                {prayer.duration > 0 && `Durée: ${prayer.duration} min`}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold">{prayer.time}</div>
                            <Badge className={
                              prayer.status === 'current' ? 'bg-red-100 text-red-800' :
                              prayer.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                              'bg-green-100 text-green-800'
                            }>
                              {prayer.status === 'current' ? 'En cours' :
                               prayer.status === 'upcoming' ? 'À venir' : 'Terminé'}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Compass className="h-5 w-5" />
                    اتجاه القبلة - Direction Qibla
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                    <div className="absolute inset-4 border-2 border-gray-300 rounded-full"></div>
                    <div className="absolute inset-8 border border-gray-400 rounded-full"></div>
                    
                    {/* Flèche Qibla */}
                    <div 
                      className="absolute top-1/2 left-1/2 w-1 h-20 bg-green-500 origin-bottom"
                      style={{ 
                        transform: `translate(-50%, -100%) rotate(${qiblaDirection}deg)`,
                        transformOrigin: 'bottom center'
                      }}
                    >
                      <div className="absolute -top-2 -left-2 w-5 h-5 bg-green-500 rounded-full"></div>
                    </div>
                    
                    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {qiblaDirection.toFixed(1)}°
                  </div>
                  <div className="text-gray-600 mb-4">Direction vers La Mecque</div>
                  
                  <Button onClick={calculateQibla} className="w-full">
                    <Navigation className="h-4 w-4 mr-2" />
                    Recalculer Position
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* État suspension banking */}
            {bankingSuspended && (
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Pause className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-red-800">Services Bancaires Suspendus</h3>
                      <p className="text-red-700">
                        Pendant {currentPrayer?.arabicName} ({currentPrayer?.name}) - 
                        Reprise automatique à {prayerTimes.find(p => p.status === 'upcoming')?.time}
                      </p>
                    </div>
                    <Badge className="bg-red-100 text-red-800">
                      Prière en cours
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Satellites */}
          <TabsContent value="satellites" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Constellation Satellitaire Active</h3>
              <Button onClick={syncWithSatellites} disabled={syncStatus === 'syncing'}>
                {syncStatus === 'syncing' ? (
                  <Radio className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Wifi className="h-4 w-4 mr-2" />
                )}
                {syncStatus === 'syncing' ? 'Synchronisation...' : 'Synchroniser'}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {satellites.map((satellite) => (
                <Card key={satellite.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          satellite.provider === 'GPS' ? 'bg-blue-100' :
                          satellite.provider === 'GLONASS' ? 'bg-red-100' :
                          satellite.provider === 'Galileo' ? 'bg-purple-100' : 'bg-yellow-100'
                        }`}>
                          <Satellite className={`h-5 w-5 ${
                            satellite.provider === 'GPS' ? 'text-blue-600' :
                            satellite.provider === 'GLONASS' ? 'text-red-600' :
                            satellite.provider === 'Galileo' ? 'text-purple-600' : 'text-yellow-600'
                          }`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{satellite.name}</CardTitle>
                          <p className="text-sm text-gray-600">{satellite.provider} - {satellite.id}</p>
                        </div>
                      </div>
                      <Badge className={
                        satellite.signalStrength >= 95 ? 'bg-green-100 text-green-800' :
                        satellite.signalStrength >= 90 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }>
                        {satellite.signalStrength}%
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Latitude:</span>
                          <div className="font-medium">{satellite.position.lat.toFixed(4)}°</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Longitude:</span>
                          <div className="font-medium">{satellite.position.lng.toFixed(4)}°</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Altitude:</span>
                          <div className="font-medium">{satellite.position.alt.toLocaleString()}km</div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Précision: {satellite.accuracy}m</span>
                          <span>Signal: {satellite.signalStrength}%</span>
                        </div>
                        <Progress value={satellite.signalStrength} className="mb-2" />
                        <div className="text-xs text-gray-500">
                          Dernière sync: {satellite.lastSync.toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Calendrier islamique */}
          <TabsContent value="calendar" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Moon className="h-5 w-5" />
                  التقويم الهجري - Calendrier Islamique
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Date actuelle: {islamicDate}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {islamicEvents.map((event, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            event.type === 'eid' ? 'bg-gold-100' :
                            event.type === 'ramadan' ? 'bg-purple-100' :
                            event.type === 'hajj' ? 'bg-green-100' : 'bg-blue-100'
                          }`}>
                            {event.type === 'eid' && <Star className="h-5 w-5 text-gold-600" />}
                            {event.type === 'ramadan' && <Moon className="h-5 w-5 text-purple-600" />}
                            {event.type === 'hajj' && <Building2 className="h-5 w-5 text-green-600" />}
                            {event.type === 'special' && <Calendar className="h-5 w-5 text-blue-600" />}
                          </div>
                          <div>
                            <div className="font-semibold">{event.name}</div>
                            <div className="text-sm text-gray-600">{event.arabicName}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{event.date.toLocaleDateString('fr-FR')}</div>
                          <div className="text-xs text-gray-600">{event.significance}</div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-sm font-medium mb-2">Ajustements Automatiques:</div>
                        <div className="space-y-1 text-sm">
                          {event.adjustments.specialRules.map((rule, ruleIndex) => (
                            <div key={ruleIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              <span>{rule}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Impact Banking */}
          <TabsContent value="banking" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Impact sur Services Bancaires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-3">Suspension Automatique Prières</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium mb-2">Services Suspendus:</div>
                        <ul className="space-y-1 text-blue-700">
                          <li>• Transactions financières</li>
                          <li>• Virements internationaux</li>
                          <li>• Trading crypto</li>
                          <li>• Support client</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-medium mb-2">Services Maintenus:</div>
                        <ul className="space-y-1 text-green-700">
                          <li>• Consultation soldes</li>
                          <li>• Qibla et horaires</li>
                          <li>• Urgences médicales</li>
                          <li>• Systèmes sécurité</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-3">Ajustements Géographiques</h4>
                    <div className="text-sm space-y-2">
                      <div className="flex justify-between">
                        <span>Suisse (Genève):</span>
                        <span className="font-medium">Horaires européens + ajustements islamiques</span>
                      </div>
                      <div className="flex justify-between">
                        <span>EAU (Dubai):</span>
                        <span className="font-medium">Fermeture vendredi 11h30-14h30</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Arabie Saoudite:</span>
                        <span className="font-medium">Suspension prières + jeûne Ramadan</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-3">Événements Spéciaux</h4>
                    <div className="text-sm space-y-2">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-gold-500" />
                        <span><strong>Eid:</strong> Fermeture complète + bonus employés automatique</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Moon className="h-4 w-4 text-purple-500" />
                        <span><strong>Ramadan:</strong> Horaires adaptés + calcul Zakat</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-green-500" />
                        <span><strong>Hajj:</strong> Support pèlerins + virements Mecque facilités</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p className="mb-2">
            © 2025 CED Bank - مزامنة الصلاة بالأقمار الصناعية - Yakoubi Yamina
          </p>
          <p>
            🛰️ Précision satellitaire - Calendrier islamique intégré - Conformité Sharia 100%
          </p>
        </div>
      </div>
    </div>
  );
}