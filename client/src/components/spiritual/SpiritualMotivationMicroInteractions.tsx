import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Heart, 
  Star, 
  Sparkles,
  Award,
  Building,
  Globe,
  Users,
  Zap,
  Moon,
  Sun,
  Compass,
  Flame,
  Waves,
  Wind,
  Target,
  TrendingUp,
  Gift,
  RefreshCw,
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  Timer,
  Calendar,
  Bell,
  MessageCircle,
  Eye,
  Coffee,
  BookOpen,
  Lightbulb
} from 'lucide-react';

interface SpiritualMotivation {
  id: string;
  type: 'dhikr' | 'dua' | 'wisdom' | 'encouragement' | 'reflection';
  textFr: string;
  textAr: string;
  textEn: string;
  textDe: string;
  transliteration: string;
  meaning: string;
  source: string;
  sourceRef: string;
  benefit: string;
  timing: 'morning' | 'afternoon' | 'evening' | 'any';
  mood: 'peaceful' | 'energetic' | 'reflective' | 'grateful' | 'focused';
  category: 'worship' | 'work' | 'learning' | 'gratitude' | 'guidance';
  duration: number; // en secondes
  animation: 'pulse' | 'glow' | 'float' | 'rotate' | 'wave';
  color: string;
  soundEnabled: boolean;
}

interface MicroInteraction {
  id: string;
  trigger: 'click' | 'hover' | 'scroll' | 'time' | 'completion';
  effect: 'sparkle' | 'ripple' | 'bounce' | 'shine' | 'breathe';
  motivation: string;
  visual: string;
  sound?: string;
  duration: number;
}

const spiritualMotivations: SpiritualMotivation[] = [
  {
    id: 'sm-001',
    type: 'dhikr',
    textFr: 'Gloire à Allah et louange à Allah',
    textAr: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
    textEn: 'Glory be to Allah and praise to Allah',
    textDe: 'Ehre sei Allah und Lob sei Allah',
    transliteration: 'Subhana Allahi wa bihamdihi',
    meaning: 'Cette invocation efface tous les péchés même s\'ils sont comme l\'écume de la mer',
    source: 'Sahih Bukhari',
    sourceRef: 'Hadith 6405',
    benefit: 'Purification spirituelle et paix intérieure',
    timing: 'any',
    mood: 'peaceful',
    category: 'worship',
    duration: 15,
    animation: 'pulse',
    color: 'from-green-400 to-emerald-600',
    soundEnabled: true
  },
  {
    id: 'sm-002',
    type: 'dua',
    textFr: 'Mon Seigneur, augmente-moi en science',
    textAr: 'رَبِّ زِدْنِي عِلْمًا',
    textEn: 'My Lord, increase me in knowledge',
    textDe: 'Mein Herr, mehre mein Wissen',
    transliteration: 'Rabbi zidni \'ilman',
    meaning: 'Invocation pour demander l\'augmentation du savoir bénéfique',
    source: 'Coran',
    sourceRef: 'Sourate 20:114',
    benefit: 'Développement intellectuel et spirituel',
    timing: 'any',
    mood: 'focused',
    category: 'learning',
    duration: 10,
    animation: 'glow',
    color: 'from-blue-400 to-indigo-600',
    soundEnabled: true
  },
  {
    id: 'sm-003',
    type: 'encouragement',
    textFr: 'Avec la difficulté vient la facilité',
    textAr: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',
    textEn: 'Indeed, with hardship comes ease',
    textDe: 'Wahrlich, mit der Schwierigkeit kommt die Erleichterung',
    transliteration: 'Fa inna ma\'a al-\'usri yusran',
    meaning: 'Rappel qu\'Allah facilite toujours après l\'épreuve',
    source: 'Coran',
    sourceRef: 'Sourate 94:6',
    benefit: 'Motivation et persévérance dans les défis',
    timing: 'any',
    mood: 'energetic',
    category: 'guidance',
    duration: 12,
    animation: 'float',
    color: 'from-orange-400 to-red-500',
    soundEnabled: true
  },
  {
    id: 'sm-004',
    type: 'wisdom',
    textFr: 'Allah perfectionne Sa lumière',
    textAr: 'وَاللَّهُ مُتِمُّ نُورِهِ',
    textEn: 'And Allah will perfect His light',
    textDe: 'Und Allah wird Sein Licht vollenden',
    transliteration: 'Wa Allahu mutimmu nurihi',
    meaning: 'La guidance divine finira toujours par triompher',
    source: 'Coran',
    sourceRef: 'Sourate 61:8',
    benefit: 'Espoir et confiance en Allah',
    timing: 'evening',
    mood: 'reflective',
    category: 'guidance',
    duration: 18,
    animation: 'wave',
    color: 'from-purple-400 to-violet-600',
    soundEnabled: true
  },
  {
    id: 'sm-005',
    type: 'reflection',
    textFr: 'Louange à Allah, Seigneur des mondes',
    textAr: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
    textEn: 'Praise to Allah, Lord of the worlds',
    textDe: 'Lob sei Allah, dem Herrn der Welten',
    transliteration: 'Alhamdu lillahi rabbi al-\'alamin',
    meaning: 'Expression de gratitude universelle envers le Créateur',
    source: 'Coran',
    sourceRef: 'Sourate 1:2',
    benefit: 'Reconnaissance et humilité',
    timing: 'morning',
    mood: 'grateful',
    category: 'gratitude',
    duration: 20,
    animation: 'rotate',
    color: 'from-yellow-400 to-orange-500',
    soundEnabled: true
  }
];

const microInteractions: MicroInteraction[] = [
  {
    id: 'mi-001',
    trigger: 'click',
    effect: 'sparkle',
    motivation: 'بارك الله فيك - Qu\'Allah te bénisse!',
    visual: '✨🌟✨',
    sound: 'gentle-chime',
    duration: 2000
  },
  {
    id: 'mi-002',
    trigger: 'hover',
    effect: 'ripple',
    motivation: 'اللهم بارك - Qu\'Allah facilite!',
    visual: '🔵💫🔵',
    duration: 1500
  },
  {
    id: 'mi-003',
    trigger: 'completion',
    effect: 'bounce',
    motivation: 'ماشاء الله - Excellent travail!',
    visual: '🎉⭐🎉',
    sound: 'success-chime',
    duration: 3000
  }
];

const languages = [
  { code: 'fr-ar', name: 'Français / العربية', flag: '🇫🇷🇸🇦' },
  { code: 'en-ar', name: 'English / العربية', flag: '🇺🇸🇸🇦' },
  { code: 'de-ar', name: 'Deutsch / العربية', flag: '🇩🇪🇸🇦' },
  { code: 'es-ar', name: 'Español / العربية', flag: '🇪🇸🇸🇦' },
  { code: 'it-ar', name: 'Italiano / العربية', flag: '🇮🇹🇸🇦' },
  { code: 'tr-ar', name: 'Türkçe / العربية', flag: '🇹🇷🇸🇦' },
  { code: 'ur-ar', name: 'اردو / العربية', flag: '🇵🇰🇸🇦' },
  { code: 'id-ar', name: 'Indonesia / العربية', flag: '🇮🇩🇸🇦' }
];

export function SpiritualMotivationMicroInteractions() {
  const [selectedLanguage, setSelectedLanguage] = useState('fr-ar');
  const [currentMotivation, setCurrentMotivation] = useState(spiritualMotivations[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(0);
  const [selectedMood, setSelectedMood] = useState<string>('any');
  const [selectedTiming, setSelectedTiming] = useState<string>('any');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeEffects, setActiveEffects] = useState<MicroInteraction[]>([]);
  const [completedActions, setCompletedActions] = useState(0);
  const [dailyGoal, setDailyGoal] = useState(10);
  const [streakCount, setStreakCount] = useState(7);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const motivationRef = useRef<HTMLDivElement>(null);

  const getCurrentTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 17) return 'afternoon';
    return 'evening';
  };

  const getLanguageText = (motivation: SpiritualMotivation) => {
    const langCode = selectedLanguage.split('-')[0];
    switch (langCode) {
      case 'en': return motivation.textEn;
      case 'de': return motivation.textDe;
      case 'ar': return motivation.textAr;
      default: return motivation.textFr;
    }
  };

  const getRandomMotivation = () => {
    const timeOfDay = getCurrentTimeOfDay();
    let filtered = spiritualMotivations;

    if (selectedTiming !== 'any') {
      filtered = filtered.filter(m => m.timing === selectedTiming || m.timing === 'any');
    } else {
      filtered = filtered.filter(m => m.timing === timeOfDay || m.timing === 'any');
    }

    if (selectedMood !== 'any') {
      filtered = filtered.filter(m => m.mood === selectedMood);
    }

    return filtered[Math.floor(Math.random() * filtered.length)] || spiritualMotivations[0];
  };

  const startMotivationTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    setIsPlaying(true);
    setTimer(currentMotivation.duration);
    
    timerRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          setIsPlaying(false);
          setCompletedActions(c => c + 1);
          triggerMicroInteraction('completion');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopMotivationTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsPlaying(false);
    setTimer(0);
  };

  const triggerMicroInteraction = (trigger: MicroInteraction['trigger']) => {
    const interactions = microInteractions.filter(mi => mi.trigger === trigger);
    if (interactions.length > 0) {
      const randomInteraction = interactions[Math.floor(Math.random() * interactions.length)];
      setActiveEffects(prev => [...prev, randomInteraction]);
      
      setTimeout(() => {
        setActiveEffects(prev => prev.filter(effect => effect.id !== randomInteraction.id));
      }, randomInteraction.duration);
    }
  };

  const handleMotivationClick = () => {
    triggerMicroInteraction('click');
    setCompletedActions(c => c + 1);
  };

  const nextMotivation = () => {
    setCurrentMotivation(getRandomMotivation());
    stopMotivationTimer();
  };

  const getAnimationClass = (animation: string) => {
    switch (animation) {
      case 'pulse': return 'animate-pulse';
      case 'glow': return 'animate-ping';
      case 'float': return 'animate-bounce';
      case 'rotate': return 'animate-spin';
      case 'wave': return 'animate-pulse';
      default: return '';
    }
  };

  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case 'peaceful': return <Moon className="h-5 w-5" />;
      case 'energetic': return <Zap className="h-5 w-5" />;
      case 'reflective': return <Eye className="h-5 w-5" />;
      case 'grateful': return <Heart className="h-5 w-5" />;
      case 'focused': return <Target className="h-5 w-5" />;
      default: return <Star className="h-5 w-5" />;
    }
  };

  const getTimingIcon = (timing: string) => {
    switch (timing) {
      case 'morning': return <Sun className="h-5 w-5" />;
      case 'afternoon': return <Coffee className="h-5 w-5" />;
      case 'evening': return <Moon className="h-5 w-5" />;
      default: return <Calendar className="h-5 w-5" />;
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* En-tête avec sélecteur de langue */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Heart className="h-12 w-12 text-pink-600 animate-pulse" />
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Spiritual Motivation Micro-Interactions
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-arabic text-right">
                  التفاعلات الدقيقة للدافع الروحي - تجربة تكنولوجية روحية
                </p>
              </div>
            </div>

            {/* Sélecteur de langue */}
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-purple-600" />
              <select 
                value={selectedLanguage} 
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-4 py-2 border border-purple-300 rounded-lg bg-white dark:bg-gray-800 text-purple-800 dark:text-purple-200 font-semibold"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Statistiques spirituelles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0">
              <CardContent className="p-4 text-center">
                <Heart className="h-8 w-8 mx-auto mb-2 animate-pulse" />
                <div className="text-2xl font-bold">{completedActions}</div>
                <div className="text-sm opacity-90">Actions Spirituelles</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-0">
              <CardContent className="p-4 text-center">
                <Flame className="h-8 w-8 mx-auto mb-2 animate-bounce" />
                <div className="text-2xl font-bold">{streakCount}</div>
                <div className="text-sm opacity-90">Jours Consécutifs</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white border-0">
              <CardContent className="p-4 text-center">
                <Target className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">{Math.round((completedActions / dailyGoal) * 100)}%</div>
                <div className="text-sm opacity-90">Objectif Quotidien</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
              <CardContent className="p-4 text-center">
                <Award className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm opacity-90">Récompenses Gagnées</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contrôles et personnalisation */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-white to-purple-50 dark:from-gray-800 dark:to-purple-900 border-2 border-purple-200">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800 dark:text-purple-200 flex items-center gap-3">
                <Sparkles className="h-8 w-8" />
                Personnalisation Spirituelle
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="font-semibold text-purple-800 dark:text-purple-200 mb-2 block">
                    Humeur Spirituelle
                  </label>
                  <select 
                    value={selectedMood}
                    onChange={(e) => setSelectedMood(e.target.value)}
                    className="w-full px-4 py-2 border border-purple-300 rounded-lg bg-white dark:bg-gray-800"
                  >
                    <option value="any">Toutes humeurs</option>
                    <option value="peaceful">Paisible 🌙</option>
                    <option value="energetic">Énergique ⚡</option>
                    <option value="reflective">Réflexif 👁️</option>
                    <option value="grateful">Reconnaissant ❤️</option>
                    <option value="focused">Concentré 🎯</option>
                  </select>
                </div>
                
                <div>
                  <label className="font-semibold text-purple-800 dark:text-purple-200 mb-2 block">
                    Moment de la Journée
                  </label>
                  <select 
                    value={selectedTiming}
                    onChange={(e) => setSelectedTiming(e.target.value)}
                    className="w-full px-4 py-2 border border-purple-300 rounded-lg bg-white dark:bg-gray-800"
                  >
                    <option value="any">Automatique</option>
                    <option value="morning">Matin ☀️</option>
                    <option value="afternoon">Après-midi ☕</option>
                    <option value="evening">Soir 🌙</option>
                  </select>
                </div>
                
                <div>
                  <label className="font-semibold text-purple-800 dark:text-purple-200 mb-2 block">
                    Objectif Quotidien
                  </label>
                  <select 
                    value={dailyGoal}
                    onChange={(e) => setDailyGoal(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-purple-300 rounded-lg bg-white dark:bg-gray-800"
                  >
                    <option value={5}>5 motivations</option>
                    <option value={10}>10 motivations</option>
                    <option value={15}>15 motivations</option>
                    <option value={20}>20 motivations</option>
                  </select>
                </div>
                
                <div className="flex items-end gap-3">
                  <Button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                    Son {soundEnabled ? 'Activé' : 'Désactivé'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Widget de motivation principal */}
        <div className="mb-8">
          <Card 
            ref={motivationRef}
            className={`relative overflow-hidden bg-gradient-to-r ${currentMotivation.color} text-white border-0 shadow-2xl transform transition-all duration-500 hover:scale-105 cursor-pointer ${getAnimationClass(currentMotivation.animation)}`}
            onClick={handleMotivationClick}
            onMouseEnter={() => triggerMicroInteraction('hover')}
          >
            {/* Effets visuels actifs */}
            <div className="absolute inset-0 pointer-events-none">
              {activeEffects.map((effect, index) => (
                <div key={effect.id} className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl animate-ping opacity-75`}>
                  {effect.visual}
                </div>
              ))}
            </div>
            
            <CardContent className="p-8 text-center relative z-10">
              <div className="mb-6">
                <div className="text-5xl font-bold font-arabic mb-4 leading-loose">
                  {currentMotivation.textAr}
                </div>
                <div className="text-2xl font-semibold mb-2">
                  {getLanguageText(currentMotivation)}
                </div>
                <div className="text-lg italic opacity-90 mb-4">
                  {currentMotivation.transliteration}
                </div>
              </div>
              
              <div className="bg-white/20 rounded-lg p-4 mb-6">
                <p className="text-lg font-medium mb-2">{currentMotivation.meaning}</p>
                <p className="text-sm opacity-80">
                  Source: {currentMotivation.source} - {currentMotivation.sourceRef}
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  {getMoodIcon(currentMotivation.mood)}
                  <span className="capitalize">{currentMotivation.mood}</span>
                </div>
                <div className="flex items-center gap-2">
                  {getTimingIcon(currentMotivation.timing)}
                  <span className="capitalize">{currentMotivation.timing}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Timer className="h-5 w-5" />
                  <span>{currentMotivation.duration}s</span>
                </div>
              </div>
              
              {/* Timer et contrôles */}
              {isPlaying && (
                <div className="mb-6">
                  <div className="text-3xl font-bold mb-2">{timer}s</div>
                  <Progress value={(timer / currentMotivation.duration) * 100} className="h-3" />
                </div>
              )}
              
              <div className="flex items-center justify-center gap-4">
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    isPlaying ? stopMotivationTimer() : startMotivationTimer();
                  }}
                  variant="secondary"
                  size="lg"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  {isPlaying ? <Pause className="h-5 w-5 mr-2" /> : <Play className="h-5 w-5 mr-2" />}
                  {isPlaying ? 'Pause' : 'Méditer'}
                </Button>
                
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextMotivation();
                  }}
                  variant="secondary"
                  size="lg"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  <RefreshCw className="h-5 w-5 mr-2" />
                  Suivant
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progression quotidienne */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800 dark:text-purple-200 flex items-center gap-3">
                <TrendingUp className="h-8 w-8" />
                Progression Spirituelle Quotidienne
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Objectif du jour: {completedActions}/{dailyGoal}</span>
                    <span className="text-2xl font-bold text-purple-600">{Math.round((completedActions / dailyGoal) * 100)}%</span>
                  </div>
                  <Progress value={(completedActions / dailyGoal) * 100} className="h-4" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">{streakCount}</div>
                    <div className="text-sm text-green-600">Jours consécutifs</div>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">{completedActions * 5}</div>
                    <div className="text-sm text-blue-600">Points spirituels</div>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">
                      {Math.floor(completedActions / 5)}
                    </div>
                    <div className="text-sm text-purple-600">Niveaux débloqués</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Onglets des fonctionnalités */}
        <Tabs defaultValue="library" className="w-full">
          <TabsList className="grid w-full grid-cols-4 h-14 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
            <TabsTrigger value="library" className="text-base font-semibold">
              📚 Bibliothèque
            </TabsTrigger>
            <TabsTrigger value="effects" className="text-base font-semibold">
              ✨ Effets
            </TabsTrigger>
            <TabsTrigger value="achievements" className="text-base font-semibold">
              🏆 Récompenses
            </TabsTrigger>
            <TabsTrigger value="settings" className="text-base font-semibold">
              ⚙️ Paramètres
            </TabsTrigger>
          </TabsList>

          {/* Onglet Bibliothèque */}
          <TabsContent value="library" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spiritualMotivations.map((motivation) => (
                <Card 
                  key={motivation.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl bg-gradient-to-r ${motivation.color} text-white border-0 ${currentMotivation.id === motivation.id ? 'ring-4 ring-yellow-400' : ''}`}
                  onClick={() => setCurrentMotivation(motivation)}
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="text-2xl font-bold font-arabic mb-2 leading-relaxed">
                        {motivation.textAr}
                      </div>
                      <div className="text-lg font-semibold">
                        {getLanguageText(motivation)}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm opacity-90">
                      <div className="flex items-center gap-2">
                        {getMoodIcon(motivation.mood)}
                        <span>{motivation.mood}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Timer className="h-4 w-4" />
                        <span>{motivation.duration}s</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-xs opacity-75">
                      {motivation.source} - {motivation.sourceRef}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet Effets */}
          <TabsContent value="effects" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-purple-800 dark:text-purple-200">
                  Micro-Interactions Disponibles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {microInteractions.map((interaction) => (
                    <div key={interaction.id} className="p-4 border border-purple-200 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                      <div className="text-center mb-3">
                        <div className="text-3xl mb-2">{interaction.visual}</div>
                        <div className="font-semibold capitalize">{interaction.trigger}</div>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        {interaction.motivation}
                      </div>
                      <div className="text-xs text-gray-500">
                        Effet: {interaction.effect} ({interaction.duration}ms)
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Récompenses */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-800 dark:text-purple-200">
                    🏆 Récompenses Débloquées
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'Premier Dhikr', icon: '🌟', description: 'Première motivation spirituelle accomplie' },
                      { name: 'Séries de 7', icon: '🔥', description: '7 jours consécutifs de motivation' },
                      { name: 'Explorateur Spirituel', icon: '🧭', description: 'Testé toutes les catégories' },
                      { name: 'Méditant Assidu', icon: '🧘', description: '50 sessions de méditation' }
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <div className="text-3xl">{achievement.icon}</div>
                        <div>
                          <div className="font-semibold text-purple-800 dark:text-purple-200">
                            {achievement.name}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            {achievement.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-800 dark:text-purple-200">
                    🎯 Objectifs à Venir
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'Maître du Dhikr', progress: 60, target: 100, icon: '🏅' },
                      { name: 'Série de 30 jours', progress: 23, target: 30, icon: '📅' },
                      { name: 'Sage Numérique', progress: 15, target: 25, icon: '👑' }
                    ].map((goal, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{goal.icon}</span>
                            <span className="font-semibold">{goal.name}</span>
                          </div>
                          <span className="text-sm text-gray-500">
                            {goal.progress}/{goal.target}
                          </span>
                        </div>
                        <Progress value={(goal.progress / goal.target) * 100} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Onglet Paramètres */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-purple-800 dark:text-purple-200">
                  ⚙️ Paramètres Avancés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-4">Notifications Spirituelles</h3>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span>Rappels quotidiens</span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span>Motivation aux heures de prière</span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input type="checkbox" className="rounded" />
                          <span>Célébration des récompenses</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-4">Préférences Visuelles</h3>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span>Animations fluides</span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span>Effets de particules</span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input type="checkbox" className="rounded" />
                          <span>Mode sombre automatique</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-4">Statistiques et Données</h3>
                    <div className="flex gap-4">
                      <Button variant="outline">
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Réinitialiser Progression
                      </Button>
                      <Button variant="outline">
                        <Gift className="h-4 w-4 mr-2" />
                        Exporter Données
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t-2 border-purple-300">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="h-8 w-8 text-pink-600 animate-pulse" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Spiritual Micro-Interactions - CED
              </h2>
              <Sparkles className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              © 2024 Yakoubi Yamina - Technologie Spirituelle Interactive
            </p>
            <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold font-arabic">
              بسم الله - Innovation spirituelle guidée - وبالله التوفيق
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpiritualMotivationMicroInteractions;