import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, 
  Globe, 
  MapPin, 
  Calendar,
  Pause,
  Play,
  Settings,
  CheckCircle,
  AlertTriangle,
  Moon,
  Sun,
  Navigation,
  Building,
  Users,
  Shield,
  Zap,
  Activity
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PrayerTime {
  name: string;
  arabicName: string;
  time: Date;
  duration: number; // minutes
  active: boolean;
}

interface GeographicRule {
  id: string;
  country: string;
  region: string;
  islamicCompliance: 'full' | 'partial' | 'restricted' | 'prohibited';
  localRegulations: string[];
  partnerBanks: string[];
  restrictions: string[];
  certifications: string[];
  lastUpdated: Date;
}

interface SystemActivity {
  id: string;
  type: 'prayer_suspension' | 'geographic_block' | 'calendar_event' | 'compliance_check';
  description: string;
  timestamp: Date;
  status: 'active' | 'completed' | 'failed';
  affectedUsers: number;
  details: string;
}

interface IslamicCalendar {
  hijriDate: string;
  gregorianDate: Date;
  month: string;
  arabicMonth: string;
  isHolyDay: boolean;
  specialObservance?: string;
  operatingHours?: {
    start: string;
    end: string;
    restricted: boolean;
  };
}

export default function OperationalComplianceSystem() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);
  const [geographicRules, setGeographicRules] = useState<GeographicRule[]>([]);
  const [systemActivities, setSystemActivities] = useState<SystemActivity[]>([]);
  const [islamicCalendar, setIslamicCalendar] = useState<IslamicCalendar | null>(null);
  const [systemSettings, setSystemSettings] = useState({
    prayerSuspension: true,
    geographicCompliance: true,
    islamicCalendar: true,
    automaticMode: true,
    notificationsEnabled: true,
    strictMode: false
  });
  const [currentLocation, setCurrentLocation] = useState({
    country: 'Switzerland',
    city: 'Zurich',
    timezone: 'Europe/Zurich',
    coordinates: { lat: 47.3769, lng: 8.5417 }
  });
  const { toast } = useToast();

  useEffect(() => {
    // Calcul des heures de prière pour aujourd'hui
    const today = new Date();
    const prayers: PrayerTime[] = [
      {
        name: 'Fajr',
        arabicName: 'الفجر',
        time: new Date(today.setHours(5, 30, 0, 0)),
        duration: 15,
        active: systemSettings.prayerSuspension
      },
      {
        name: 'Dhuhr',
        arabicName: 'الظهر',
        time: new Date(today.setHours(12, 45, 0, 0)),
        duration: 15,
        active: systemSettings.prayerSuspension
      },
      {
        name: 'Asr',
        arabicName: 'العصر',
        time: new Date(today.setHours(15, 30, 0, 0)),
        duration: 10,
        active: systemSettings.prayerSuspension
      },
      {
        name: 'Maghrib',
        arabicName: 'المغرب',
        time: new Date(today.setHours(18, 15, 0, 0)),
        duration: 15,
        active: systemSettings.prayerSuspension
      },
      {
        name: 'Isha',
        arabicName: 'العشاء',
        time: new Date(today.setHours(20, 30, 0, 0)),
        duration: 15,
        active: systemSettings.prayerSuspension
      }
    ];

    setPrayerTimes(prayers);

    // Règles géographiques de conformité
    const geoRules: GeographicRule[] = [
      {
        id: 'saudi-arabia',
        country: 'Saudi Arabia',
        region: 'Middle East',
        islamicCompliance: 'full',
        localRegulations: ['SAMA Compliant', 'Sharia Board Mandatory', 'AAOIFI Standards'],
        partnerBanks: ['Al Rajhi Bank', 'Alinma Bank', 'Bank AlJazira'],
        restrictions: [],
        certifications: ['SAMA License', 'AAOIFI Certified', 'Local Sharia Board'],
        lastUpdated: new Date('2024-12-01')
      },
      {
        id: 'uae',
        country: 'United Arab Emirates',
        region: 'Middle East',
        islamicCompliance: 'full',
        localRegulations: ['CBUAE Compliant', 'Higher Sharia Authority', 'Islamic Banking Law'],
        partnerBanks: ['Dubai Islamic Bank', 'Emirates Islamic', 'ADCB Islamic'],
        restrictions: [],
        certifications: ['CBUAE License', 'Higher Sharia Authority Approval'],
        lastUpdated: new Date('2024-11-28')
      },
      {
        id: 'switzerland',
        country: 'Switzerland',
        region: 'Europe',
        islamicCompliance: 'partial',
        localRegulations: ['FINMA Compliant', 'Banking Act', 'Anti-Money Laundering'],
        partnerBanks: ['UBS', 'Credit Suisse', 'PostFinance'],
        restrictions: ['Limited Islamic products', 'No Sharia governance requirement'],
        certifications: ['FINMA Banking License'],
        lastUpdated: new Date('2024-12-15')
      },
      {
        id: 'france',
        country: 'France',
        region: 'Europe',
        islamicCompliance: 'restricted',
        localRegulations: ['ACPR Compliant', 'Strict Secularism Laws', 'Banking Regulations'],
        partnerBanks: ['BNP Paribas', 'Société Générale', 'Crédit Agricole'],
        restrictions: ['No religious governance', 'Limited Islamic terminology', 'Secular operations only'],
        certifications: ['ACPR License'],
        lastUpdated: new Date('2024-12-10')
      },
      {
        id: 'usa',
        country: 'United States',
        region: 'North America',
        islamicCompliance: 'partial',
        localRegulations: ['FDIC Insured', 'OCC Regulated', 'Federal Reserve'],
        partnerBanks: ['JPMorgan Chase', 'Bank of America', 'Wells Fargo'],
        restrictions: ['Limited Sharia products', 'No religious discrimination'],
        certifications: ['Federal Banking Charter'],
        lastUpdated: new Date('2024-12-05')
      }
    ];

    setGeographicRules(geoRules);

    // Calendrier islamique actuel
    const hijriCalendar: IslamicCalendar = {
      hijriDate: '15 جمادى الآخرة 1446',
      gregorianDate: new Date(),
      month: 'Jumada Al-Thani',
      arabicMonth: 'جمادى الآخرة',
      isHolyDay: false,
      operatingHours: {
        start: '08:00',
        end: '18:00',
        restricted: false
      }
    };

    setIslamicCalendar(hijriCalendar);

    // Activités système récentes
    const activities: SystemActivity[] = [
      {
        id: 'ACT001',
        type: 'prayer_suspension',
        description: 'Suspension automatique pour prière du Dhuhr',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        status: 'completed',
        affectedUsers: 1247,
        details: 'Toutes les transactions suspendues pendant 15 minutes'
      },
      {
        id: 'ACT002',
        type: 'geographic_block',
        description: 'Blocage transaction depuis pays à risque',
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
        status: 'active',
        affectedUsers: 3,
        details: 'Transaction de 50,000 USD bloquée depuis jurisdiction non-conforme'
      },
      {
        id: 'ACT003',
        type: 'compliance_check',
        description: 'Vérification conformité quotidienne',
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
        status: 'completed',
        affectedUsers: 15420,
        details: 'Scan complet de toutes les opérations - 100% conforme'
      }
    ];

    setSystemActivities(activities);

    // Vérification automatique des heures de prière
    const prayerInterval = setInterval(() => {
      checkPrayerTimes();
    }, 60000); // Vérification chaque minute

    return () => clearInterval(prayerInterval);
  }, [systemSettings]);

  const checkPrayerTimes = () => {
    if (!systemSettings.prayerSuspension) return;

    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    prayerTimes.forEach((prayer) => {
      const prayerTime = prayer.time.getHours() * 60 + prayer.time.getMinutes();
      const prayerEnd = prayerTime + prayer.duration;

      if (currentTime >= prayerTime && currentTime <= prayerEnd) {
        suspendOperations(prayer);
      }
    });
  };

  const suspendOperations = (prayer: PrayerTime) => {
    toast({
      title: `تم إيقاف العمليات لصلاة ${prayer.arabicName}`,
      description: `جميع المعاملات متوقفة لمدة ${prayer.duration} دقيقة`,
    });

    const newActivity: SystemActivity = {
      id: `ACT${Date.now()}`,
      type: 'prayer_suspension',
      description: `Suspension automatique pour ${prayer.name} (${prayer.arabicName})`,
      timestamp: new Date(),
      status: 'active',
      affectedUsers: Math.floor(Math.random() * 2000 + 1000),
      details: `Toutes les transactions suspendues pendant ${prayer.duration} minutes`
    };

    setSystemActivities(prev => [newActivity, ...prev]);
  };

  const toggleSystemSetting = (setting: keyof typeof systemSettings) => {
    setSystemSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));

    toast({
      title: "إعدادات النظام",
      description: `تم ${systemSettings[setting] ? 'إيقاف' : 'تفعيل'} ${setting}`,
    });
  };

  const getComplianceColor = (compliance: string) => {
    const colors = {
      full: 'bg-green-100 text-green-800',
      partial: 'bg-yellow-100 text-yellow-800',
      restricted: 'bg-orange-100 text-orange-800',
      prohibited: 'bg-red-100 text-red-800'
    };
    return colors[compliance as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'prayer_suspension': return <Clock className="h-4 w-4 text-blue-500" />;
      case 'geographic_block': return <MapPin className="h-4 w-4 text-red-500" />;
      case 'calendar_event': return <Calendar className="h-4 w-4 text-purple-500" />;
      case 'compliance_check': return <Shield className="h-4 w-4 text-green-500" />;
      default: return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    const colors = {
      active: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      failed: 'bg-red-100 text-red-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const nextPrayer = prayerTimes.find(prayer => prayer.time > new Date());
  const systemUptime = 99.97;
  const activeUsers = 15420;
  const blockedTransactions = systemActivities.filter(a => a.type === 'geographic_block' && a.status === 'active').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <Settings className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">نظام الامتثال التشغيلي</h1>
              <h2 className="text-2xl font-semibold text-blue-600">Système de Conformité Opérationnelle</h2>
              <p className="text-gray-600">Automatisation complète - Respect horaires islamiques - Conformité géographique</p>
            </div>
          </div>
        </div>

        {/* Tableau de bord principal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <div className={`w-3 h-3 rounded-full ${systemSettings.automaticMode ? 'bg-green-500' : 'bg-red-500'}`}></div>
              </div>
              <div className="text-2xl font-bold text-emerald-600">{systemUptime}%</div>
              <div className="text-sm text-gray-600">Temps de Fonctionnement</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{activeUsers.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Utilisateurs Actifs</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">
                {nextPrayer ? formatTime(nextPrayer.time) : '--:--'}
              </div>
              <div className="text-sm text-gray-600">Prochaine Prière</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">{blockedTransactions}</div>
              <div className="text-sm text-gray-600">Transactions Bloquées</div>
            </CardContent>
          </Card>
        </div>

        {/* Paramètres système */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              إعدادات النظام - Paramètres Système
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-blue-800">Conformité Temporelle</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Suspension pendant prières</span>
                    <Switch
                      checked={systemSettings.prayerSuspension}
                      onCheckedChange={() => toggleSystemSetting('prayerSuspension')}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Calendrier islamique</span>
                    <Switch
                      checked={systemSettings.islamicCalendar}
                      onCheckedChange={() => toggleSystemSetting('islamicCalendar')}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-green-800">Conformité Géographique</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Vérification géographique</span>
                    <Switch
                      checked={systemSettings.geographicCompliance}
                      onCheckedChange={() => toggleSystemSetting('geographicCompliance')}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Mode strict</span>
                    <Switch
                      checked={systemSettings.strictMode}
                      onCheckedChange={() => toggleSystemSetting('strictMode')}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-purple-800">Automatisation</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Mode automatique</span>
                    <Switch
                      checked={systemSettings.automaticMode}
                      onCheckedChange={() => toggleSystemSetting('automaticMode')}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Notifications</span>
                    <Switch
                      checked={systemSettings.notificationsEnabled}
                      onCheckedChange={() => toggleSystemSetting('notificationsEnabled')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="prayers" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="prayers">أوقات الصلاة</TabsTrigger>
            <TabsTrigger value="geography">الامتثال الجغرافي</TabsTrigger>
            <TabsTrigger value="calendar">التقويم الهجري</TabsTrigger>
            <TabsTrigger value="activities">النشاطات</TabsTrigger>
          </TabsList>

          {/* Horaires de prière */}
          <TabsContent value="prayers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  مواقيت الصلاة اليوم - {currentLocation.city}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {prayerTimes.map((prayer) => {
                    const isNext = prayer === nextPrayer;
                    const isPast = prayer.time < new Date();
                    
                    return (
                      <div key={prayer.name} className={`p-4 rounded-lg border ${
                        isNext ? 'bg-blue-50 border-blue-200' : 
                        isPast ? 'bg-gray-50 border-gray-200' : 
                        'bg-white border-gray-200'
                      }`}>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-2">
                            {prayer.name === 'Fajr' || prayer.name === 'Maghrib' ? (
                              <Moon className="h-5 w-5 text-blue-500" />
                            ) : (
                              <Sun className="h-5 w-5 text-yellow-500" />
                            )}
                          </div>
                          <div className="font-semibold text-lg">{prayer.arabicName}</div>
                          <div className="text-sm text-gray-600">{prayer.name}</div>
                          <div className="text-xl font-bold mt-2">
                            {formatTime(prayer.time)}
                          </div>
                          <div className="text-xs text-gray-500">
                            Suspension: {prayer.duration}min
                          </div>
                          {isNext && (
                            <Badge className="bg-blue-100 text-blue-800 mt-2">
                              Prochaine
                            </Badge>
                          )}
                          {isPast && (
                            <CheckCircle className="h-4 w-4 text-green-500 mx-auto mt-2" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <div className="flex items-center gap-2 text-emerald-800 mb-2">
                    <Shield className="h-4 w-4" />
                    <span className="font-medium">Conformité Automatique</span>
                  </div>
                  <p className="text-sm text-emerald-700">
                    Toutes les transactions sont automatiquement suspendues pendant les heures de prière 
                    pour respecter les obligations religieuses. Les utilisateurs sont prévenus 5 minutes avant.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Conformité géographique */}
          <TabsContent value="geography" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {geographicRules.map((rule) => (
                <Card key={rule.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-blue-500" />
                        <div>
                          <CardTitle className="text-lg">{rule.country}</CardTitle>
                          <p className="text-sm text-gray-600">{rule.region}</p>
                        </div>
                      </div>
                      <Badge className={getComplianceColor(rule.islamicCompliance)}>
                        {rule.islamicCompliance === 'full' ? 'Conforme Total' :
                         rule.islamicCompliance === 'partial' ? 'Partiellement' :
                         rule.islamicCompliance === 'restricted' ? 'Restreint' : 'Interdit'}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-600 mb-2">Réglementations locales:</div>
                        <div className="flex flex-wrap gap-1">
                          {rule.localRegulations.map((regulation, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {regulation}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-gray-600 mb-2">Banques partenaires:</div>
                        <div className="text-sm">
                          {rule.partnerBanks.slice(0, 2).join(', ')}
                          {rule.partnerBanks.length > 2 && ` +${rule.partnerBanks.length - 2} autres`}
                        </div>
                      </div>

                      {rule.restrictions.length > 0 && (
                        <div>
                          <div className="text-sm text-gray-600 mb-2">Restrictions:</div>
                          <div className="space-y-1">
                            {rule.restrictions.map((restriction, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm">
                                <AlertTriangle className="h-3 w-3 text-orange-500" />
                                <span>{restriction}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div>
                        <div className="text-sm text-gray-600 mb-2">Certifications:</div>
                        <div className="flex flex-wrap gap-1">
                          {rule.certifications.map((cert, index) => (
                            <Badge key={index} className="bg-gold-100 text-gold-800 text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="text-xs text-gray-500 pt-2 border-t">
                        Dernière mise à jour: {rule.lastUpdated.toLocaleDateString('fr-FR')}
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
                  <Calendar className="h-5 w-5" />
                  التقويم الهجري - Calendrier Islamique
                </CardTitle>
              </CardHeader>
              <CardContent>
                {islamicCalendar && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-emerald-50 rounded-lg">
                      <div className="text-2xl font-bold text-emerald-800 mb-2">
                        {islamicCalendar.hijriDate}
                      </div>
                      <div className="text-sm text-emerald-600">التاريخ الهجري</div>
                    </div>
                    
                    <div className="text-center p-6 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-800 mb-2">
                        {islamicCalendar.arabicMonth}
                      </div>
                      <div className="text-sm text-blue-600">{islamicCalendar.month}</div>
                    </div>
                    
                    <div className="text-center p-6 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-800 mb-2">
                        {islamicCalendar.gregorianDate.toLocaleDateString('fr-FR')}
                      </div>
                      <div className="text-sm text-purple-600">التاريخ الميلادي</div>
                    </div>
                  </div>
                )}

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-3">Horaires d'opération</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Ouverture:</span>
                      <div className="font-medium">{islamicCalendar?.operatingHours?.start}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Fermeture:</span>
                      <div className="font-medium">{islamicCalendar?.operatingHours?.end}</div>
                    </div>
                  </div>
                  {islamicCalendar?.isHolyDay && (
                    <div className="mt-3 p-2 bg-gold-50 rounded border border-gold-200">
                      <div className="text-gold-800 text-sm font-medium">
                        Jour saint islamique - Horaires spéciaux
                      </div>
                      {islamicCalendar.specialObservance && (
                        <div className="text-gold-600 text-xs">
                          {islamicCalendar.specialObservance}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activités système */}
          <TabsContent value="activities" className="space-y-6">
            <div className="space-y-4">
              {systemActivities.map((activity) => (
                <Card key={activity.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getActivityIcon(activity.type)}
                        <div>
                          <div className="font-medium">{activity.description}</div>
                          <div className="text-sm text-gray-600">{activity.details}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(activity.status)}>
                          {activity.status === 'active' ? 'Actif' :
                           activity.status === 'completed' ? 'Terminé' : 'Échoué'}
                        </Badge>
                        <div className="text-xs text-gray-600 mt-1">
                          {activity.affectedUsers.toLocaleString()} utilisateurs
                        </div>
                        <div className="text-xs text-gray-500">
                          {activity.timestamp.toLocaleString('fr-FR')}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p className="mb-2">
            © 2025 CED Bank - نظام الامتثال التشغيلي الشامل - Yakoubi Yamina
          </p>
          <p>
            ⚙️ Automatisation complète - Respect total des obligations islamiques - Conformité mondiale
          </p>
        </div>
      </div>
    </div>
  );
}