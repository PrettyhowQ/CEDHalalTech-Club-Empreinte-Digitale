import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { 
  Globe, 
  MessageCircle, 
  Volume2, 
  Compass, 
  Clock,
  Book,
  Users,
  Settings,
  Moon,
  Sun,
  Calendar,
  MapPin,
  Heart,
  Star
} from 'lucide-react';

interface Language {
  code: string;
  name: string;
  native_name: string;
  flag: string;
  rtl: boolean;
  cultural_context: {
    greeting: string;
    time_format: '12h' | '24h';
    date_format: string;
    currency_position: 'before' | 'after';
    islamic_calendar: boolean;
    prayer_times: boolean;
    ramadan_mode: boolean;
    hijab_mode: boolean;
  };
  regions: string[];
  islamic_majority: boolean;
  local_customs: string[];
}

interface CulturalAdaptation {
  theme: 'standard' | 'islamic' | 'cultural';
  layout: 'ltr' | 'rtl';
  colors: string[];
  fonts: string[];
  symbols: string[];
  notifications: boolean;
  voice_assistant: boolean;
  local_services: boolean;
}

const ContextualLanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('fr');
  const [culturalAdaptation, setCulturalAdaptation] = useState<CulturalAdaptation>({
    theme: 'islamic',
    layout: 'ltr',
    colors: ['#059669', '#0ea5e9', '#8b5cf6'],
    fonts: ['Inter', 'Noto Sans Arabic'],
    symbols: ['🕌', '☪️', '⭐'],
    notifications: true,
    voice_assistant: true,
    local_services: true
  });
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const languages: Language[] = [
    {
      code: 'fr',
      name: 'Français',
      native_name: 'Français',
      flag: '🇫🇷',
      rtl: false,
      cultural_context: {
        greeting: 'Bonjour',
        time_format: '24h',
        date_format: 'DD/MM/YYYY',
        currency_position: 'after',
        islamic_calendar: false,
        prayer_times: true,
        ramadan_mode: true,
        hijab_mode: false
      },
      regions: ['France', 'Suisse', 'Belgique', 'Canada'],
      islamic_majority: false,
      local_customs: ['Respect des horaires', 'Politesse formelle', 'Laïcité']
    },
    {
      code: 'ar',
      name: 'العربية',
      native_name: 'العربية',
      flag: '🇸🇦',
      rtl: true,
      cultural_context: {
        greeting: 'السلام عليكم',
        time_format: '12h',
        date_format: 'DD/MM/YYYY هـ',
        currency_position: 'before',
        islamic_calendar: true,
        prayer_times: true,
        ramadan_mode: true,
        hijab_mode: true
      },
      regions: ['Arabie Saoudite', 'Émirats', 'Égypte', 'Maroc'],
      islamic_majority: true,
      local_customs: ['Hospitalité', 'Respect des aînés', 'Valeurs familiales']
    },
    {
      code: 'en',
      name: 'English',
      native_name: 'English',
      flag: '🇬🇧',
      rtl: false,
      cultural_context: {
        greeting: 'Hello',
        time_format: '12h',
        date_format: 'MM/DD/YYYY',
        currency_position: 'before',
        islamic_calendar: false,
        prayer_times: true,
        ramadan_mode: true,
        hijab_mode: false
      },
      regions: ['UK', 'USA', 'Canada', 'Australia'],
      islamic_majority: false,
      local_customs: ['Punctuality', 'Queue culture', 'Privacy respect']
    },
    {
      code: 'zh',
      name: '中文',
      native_name: '中文',
      flag: '🇨🇳',
      rtl: false,
      cultural_context: {
        greeting: '您好',
        time_format: '24h',
        date_format: 'YYYY/MM/DD',
        currency_position: 'before',
        islamic_calendar: false,
        prayer_times: true,
        ramadan_mode: true,
        hijab_mode: false
      },
      regions: ['Chine', 'Taïwan', 'Singapour', 'Malaisie'],
      islamic_majority: false,
      local_customs: ['Respect hiérarchique', 'Harmonie sociale', 'Guanxi']
    },
    {
      code: 'ur',
      name: 'اردو',
      native_name: 'اردو',
      flag: '🇵🇰',
      rtl: true,
      cultural_context: {
        greeting: 'آداب',
        time_format: '12h',
        date_format: 'DD/MM/YYYY',
        currency_position: 'after',
        islamic_calendar: true,
        prayer_times: true,
        ramadan_mode: true,
        hijab_mode: true
      },
      regions: ['Pakistan', 'Inde', 'Bangladesh'],
      islamic_majority: true,
      local_customs: ['Adab', 'Hospitalité', 'Respect des traditions']
    },
    {
      code: 'tr',
      name: 'Türkçe',
      native_name: 'Türkçe',
      flag: '🇹🇷',
      rtl: false,
      cultural_context: {
        greeting: 'Merhaba',
        time_format: '24h',
        date_format: 'DD.MM.YYYY',
        currency_position: 'after',
        islamic_calendar: false,
        prayer_times: true,
        ramadan_mode: true,
        hijab_mode: false
      },
      regions: ['Turquie', 'Chypre'],
      islamic_majority: true,
      local_customs: ['Hospitalité turque', 'Respect des aînés', 'Modernité']
    },
    {
      code: 'id',
      name: 'Bahasa Indonesia',
      native_name: 'Bahasa Indonesia',
      flag: '🇮🇩',
      rtl: false,
      cultural_context: {
        greeting: 'Assalamualaikum',
        time_format: '24h',
        date_format: 'DD/MM/YYYY',
        currency_position: 'before',
        islamic_calendar: false,
        prayer_times: true,
        ramadan_mode: true,
        hijab_mode: true
      },
      regions: ['Indonésie', 'Malaisie', 'Brunei'],
      islamic_majority: true,
      local_customs: ['Bapakisme', 'Gotong royong', 'Respect communautaire']
    },
    {
      code: 'fa',
      name: 'فارسی',
      native_name: 'فارسی',
      flag: '🇮🇷',
      rtl: true,
      cultural_context: {
        greeting: 'سلام',
        time_format: '24h',
        date_format: 'YYYY/MM/DD',
        currency_position: 'after',
        islamic_calendar: true,
        prayer_times: true,
        ramadan_mode: true,
        hijab_mode: true
      },
      regions: ['Iran', 'Afghanistan', 'Tadjikistan'],
      islamic_majority: true,
      local_customs: ['Taarof', 'Poésie', 'Hospitalité persane']
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === selectedLanguage) || languages[0];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    const newLanguage = languages.find(lang => lang.code === langCode);
    if (newLanguage) {
      setSelectedLanguage(langCode);
      setCulturalAdaptation(prev => ({
        ...prev,
        layout: newLanguage.rtl ? 'rtl' : 'ltr',
        theme: newLanguage.islamic_majority ? 'islamic' : 'cultural'
      }));
    }
  };

  const formatTime = (time: Date, format: '12h' | '24h') => {
    return format === '12h' 
      ? time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      : time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date, format: string) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    
    switch (format) {
      case 'DD/MM/YYYY':
        return `${day}/${month}/${year}`;
      case 'MM/DD/YYYY':
        return `${month}/${day}/${year}`;
      case 'YYYY/MM/DD':
        return `${year}/${month}/${day}`;
      case 'DD.MM.YYYY':
        return `${day}.${month}.${year}`;
      default:
        return `${day}/${month}/${year}`;
    }
  };

  const getPrayerTimes = () => {
    // Simplified prayer times for demo
    return [
      { name: 'Fajr', time: '05:30', arabic: 'الفجر' },
      { name: 'Dhuhr', time: '12:15', arabic: 'الظهر' },
      { name: 'Asr', time: '15:45', arabic: 'العصر' },
      { name: 'Maghrib', time: '18:20', arabic: 'المغرب' },
      { name: 'Isha', time: '20:00', arabic: 'العشاء' }
    ];
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Language Selector */}
        <div className="lg:col-span-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Sélecteur de Langue
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Langue Principale
                </label>
                <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map(lang => (
                      <SelectItem key={lang.code} value={lang.code}>
                        <div className="flex items-center gap-2">
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                          <span className="text-xs text-gray-500">({lang.native_name})</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Adaptation culturelle</span>
                  <Switch
                    checked={culturalAdaptation.theme === 'islamic'}
                    onCheckedChange={(checked) =>
                      setCulturalAdaptation(prev => ({
                        ...prev,
                        theme: checked ? 'islamic' : 'standard'
                      }))
                    }
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Assistant vocal</span>
                  <Switch
                    checked={culturalAdaptation.voice_assistant}
                    onCheckedChange={(checked) =>
                      setCulturalAdaptation(prev => ({
                        ...prev,
                        voice_assistant: checked
                      }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Services locaux</span>
                  <Switch
                    checked={culturalAdaptation.local_services}
                    onCheckedChange={(checked) =>
                      setCulturalAdaptation(prev => ({
                        ...prev,
                        local_services: checked
                      }))
                    }
                  />
                </div>
              </div>

              <Button
                variant="outline"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="w-full flex items-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Paramètres avancés
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Cultural Context Display */}
        <div className="lg:col-span-2">
          <Card className={`h-full ${currentLanguage.rtl ? 'rtl' : 'ltr'}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Contexte Culturel - {currentLanguage.name}
              </CardTitle>
              <div className="flex gap-2">
                <Badge variant={currentLanguage.islamic_majority ? "default" : "secondary"}>
                  {currentLanguage.islamic_majority ? '🕌 Majorité Islamique' : '🌍 Minorité Islamique'}
                </Badge>
                <Badge variant="outline">
                  {currentLanguage.rtl ? '➡️ RTL' : '⬅️ LTR'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Greeting and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    Salutation
                  </h3>
                  <p className="text-lg text-green-700 dark:text-green-300">
                    {currentLanguage.cultural_context.greeting}
                  </p>
                </div>
                
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Heure Locale
                  </h3>
                  <p className="text-lg text-blue-700 dark:text-blue-300">
                    {formatTime(currentTime, currentLanguage.cultural_context.time_format)}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    {formatDate(currentTime, currentLanguage.cultural_context.date_format)}
                  </p>
                </div>
              </div>

              {/* Prayer Times (if Islamic context) */}
              {currentLanguage.cultural_context.prayer_times && (
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-3 flex items-center gap-2">
                    <Compass className="w-4 h-4" />
                    Horaires de Prière
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {getPrayerTimes().map(prayer => (
                      <div key={prayer.name} className="text-center">
                        <p className="text-sm font-medium text-purple-700 dark:text-purple-300">
                          {prayer.name}
                        </p>
                        <p className="text-xs text-purple-600 dark:text-purple-400">
                          {prayer.arabic}
                        </p>
                        <p className="text-lg text-purple-800 dark:text-purple-200">
                          {prayer.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Regional Context */}
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Contexte Régional
                </h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium text-orange-700 dark:text-orange-300">
                      Régions principales:
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {currentLanguage.regions.map(region => (
                        <Badge key={region} variant="outline" className="text-xs">
                          {region}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-orange-700 dark:text-orange-300">
                      Coutumes locales:
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {currentLanguage.local_customs.map(custom => (
                        <Badge key={custom} variant="secondary" className="text-xs">
                          {custom}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Advanced Settings */}
              {showAdvanced && (
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Paramètres Avancés
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Calendrier islamique</span>
                        <Switch
                          checked={currentLanguage.cultural_context.islamic_calendar}
                          disabled
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Mode Ramadan</span>
                        <Switch
                          checked={currentLanguage.cultural_context.ramadan_mode}
                          disabled
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Mode Hijab</span>
                        <Switch
                          checked={currentLanguage.cultural_context.hijab_mode}
                          disabled
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium">Format de devise</label>
                        <p className="text-xs text-gray-600">
                          {currentLanguage.cultural_context.currency_position === 'before' ? 'Avant' : 'Après'} le montant
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Thème adaptatif</label>
                        <p className="text-xs text-gray-600">
                          {culturalAdaptation.theme === 'islamic' ? 'Islamique' : 'Standard'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Preview Section */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5" />
            Aperçu d'Interface Adaptée
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className={`p-6 border rounded-lg ${currentLanguage.rtl ? 'text-right' : 'text-left'}`}>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{currentLanguage.flag}</span>
                <h2 className="text-xl font-bold">
                  {currentLanguage.name === 'العربية' ? 'نادي البصمة الرقمية' : 
                   currentLanguage.name === 'اردو' ? 'کلب ایمپرنٹ ڈیجیٹل' :
                   currentLanguage.name === 'فارسی' ? 'باشگاه اثر انگشت دیجیتال' :
                   currentLanguage.name === '中文' ? '数字足迹俱乐部' :
                   'Club Empreinte Digitale'}
                </h2>
              </div>
              
              <p className="text-gray-600">
                {currentLanguage.cultural_context.greeting}! Bienvenue dans l'écosystème CED HalalTech™
              </p>
              
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>🕐 {formatTime(currentTime, currentLanguage.cultural_context.time_format)}</span>
                <span>📅 {formatDate(currentTime, currentLanguage.cultural_context.date_format)}</span>
                {currentLanguage.cultural_context.prayer_times && (
                  <span>🕌 Prochaine prière: Dhuhr 12:15</span>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center mt-8 p-4 border rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2025 CED HalalTech™ - Sélecteur de Langue Contextuel
          <br />
          <span className="text-xs">
            Adaptation culturelle intelligente pour une expérience utilisateur authentique
          </span>
        </p>
      </div>
    </div>
  );
};

export default ContextualLanguageSwitcher;