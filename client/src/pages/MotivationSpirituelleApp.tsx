import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, Moon, Zap, Eye, Target, Volume2, 
  Settings, Globe, Star, BookOpen, Clock,
  Sun, Coffee, Calendar, Bell, Play, Pause,
  Sparkles, Award, Users, Download, Share2,
  ChevronDown, ChevronUp, RotateCcw, Check
} from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/Footer";

// Types pour l'application
interface MotivationQuote {
  id: string;
  arabic: string;
  french: string;
  english: string;
  source: string;
  category: 'dhikr' | 'dua' | 'hadith' | 'quran' | 'wisdom';
  mood: string[];
  timeOfDay: string[];
}

interface UserSettings {
  language: string;
  dailyGoal: number;
  timeOfDay: 'automatic' | 'morning' | 'afternoon' | 'evening';
  mood: string;
  soundEnabled: boolean;
  notificationsEnabled: boolean;
}

const MotivationSpirituelleApp: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState<MotivationQuote | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [dailyProgress, setDailyProgress] = useState(0);
  const [userSettings, setUserSettings] = useState<UserSettings>({
    language: 'français',
    dailyGoal: 10,
    timeOfDay: 'automatic',
    mood: 'reconnaissant',
    soundEnabled: true,
    notificationsEnabled: true
  });
  const [showSettings, setShowSettings] = useState(false);
  const [completedToday, setCompletedToday] = useState(0);

  // Langues supportées
  const supportedLanguages = [
    { code: 'français', name: 'Français / العربية', flag: '🇫🇷', direction: 'ltr' },
    { code: 'english', name: 'English / العربية', flag: '🇺🇸', direction: 'ltr' },
    { code: 'deutsch', name: 'Deutsch / العربية', flag: '🇩🇪', direction: 'ltr' },
    { code: 'español', name: 'Español / العربية', flag: '🇪🇸', direction: 'ltr' },
    { code: 'italiano', name: 'Italiano / العربية', flag: '🇮🇹', direction: 'ltr' },
    { code: 'türkçe', name: 'Türkçe / العربية', flag: '🇹🇷', direction: 'ltr' },
    { code: 'اردو', name: 'اردو / العربية', flag: '🇵🇰', direction: 'rtl' },
    { code: 'indonesia', name: 'Indonesia / العربية', flag: '🇮🇩', direction: 'ltr' }
  ];

  // États d'humeur spirituelle
  const spiritualMoods = [
    { id: 'paisible', name: 'Paisible', icon: '🌙', color: 'bg-blue-100 text-blue-800' },
    { id: 'énergique', name: 'Énergique', icon: '⚡', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'réflexif', name: 'Réflexif', icon: '👁', color: 'bg-purple-100 text-purple-800' },
    { id: 'reconnaissant', name: 'Reconnaissant', icon: '❤️', color: 'bg-red-100 text-red-800' },
    { id: 'concentré', name: 'Concentré', icon: '🎯', color: 'bg-green-100 text-green-800' }
  ];

  // Collection de motivations spirituelles authentiques
  const motivationQuotes: MotivationQuote[] = [
    {
      id: 'dhikr-001',
      arabic: 'سُبْحَانَ اللهِ وَبِحَمْدِهِ',
      french: 'Gloire à Allah et louange à Allah',
      english: 'Glory be to Allah and praise be to Allah',
      source: 'Sahih Bukhari - Hadith 6405',
      category: 'dhikr',
      mood: ['paisible', 'reconnaissant', 'réflexif'],
      timeOfDay: ['morning', 'afternoon', 'evening']
    },
    {
      id: 'dhikr-002',
      arabic: 'لَا إِلَٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ',
      french: 'Il n\'y a de divinité qu\'Allah, Seul, sans associé',
      english: 'There is no deity except Allah, alone, without partner',
      source: 'Sahih Muslim - Hadith 2691',
      category: 'dhikr',
      mood: ['concentré', 'paisible'],
      timeOfDay: ['morning', 'afternoon', 'evening']
    },
    {
      id: 'dua-001',
      arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً',
      french: 'Notre Seigneur, donne-nous du bien dans ce monde et du bien dans l\'au-delà',
      english: 'Our Lord, give us good in this world and good in the next world',
      source: 'Coran - Sourate 2:201',
      category: 'dua',
      mood: ['reconnaissant', 'énergique'],
      timeOfDay: ['morning', 'afternoon']
    },
    {
      id: 'hadith-001',
      arabic: 'مَنْ قَالَ سُبْحَانَ اللهِ وَبِحَمْدِهِ مِائَةَ مَرَّةٍ',
      french: 'Celui qui dit "Gloire à Allah et louange à Lui" cent fois...',
      english: 'Whoever says "Glory be to Allah and praise be to Him" one hundred times...',
      source: 'Sahih Bukhari - Hadith 6405',
      category: 'hadith',
      mood: ['paisible', 'concentré'],
      timeOfDay: ['morning', 'evening']
    },
    {
      id: 'quran-001',
      arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
      french: 'Et quiconque place sa confiance en Allah, Il lui suffit',
      english: 'And whoever relies upon Allah - then He is sufficient for him',
      source: 'Coran - Sourate 65:3',
      category: 'quran',
      mood: ['énergique', 'concentré', 'paisible'],
      timeOfDay: ['morning', 'afternoon', 'evening']
    },
    {
      id: 'wisdom-001',
      arabic: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
      french: 'Ô Allah, aide-moi à T\'invoquer, Te remercier et T\'adorer de la meilleure façon',
      english: 'O Allah, help me to remember You, thank You, and worship You in the best way',
      source: 'Sunan Abu Dawud - Hadith 1522',
      category: 'dua',
      mood: ['reconnaissant', 'concentré'],
      timeOfDay: ['morning', 'afternoon', 'evening']
    }
  ];

  // Filtrer les citations selon les préférences
  const getFilteredQuotes = () => {
    return motivationQuotes.filter(quote => {
      const moodMatch = quote.mood.includes(userSettings.mood);
      const timeMatch = userSettings.timeOfDay === 'automatic' || 
                       quote.timeOfDay.includes(userSettings.timeOfDay);
      return moodMatch && timeMatch;
    });
  };

  // Obtenir une citation aléatoire
  const getRandomQuote = () => {
    const filteredQuotes = getFilteredQuotes();
    if (filteredQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
      setCurrentQuote(filteredQuotes[randomIndex]);
    }
  };

  // Jouer une motivation
  const playMotivation = () => {
    if (!currentQuote) getRandomQuote();
    setIsPlaying(true);
    setCompletedToday(prev => Math.min(prev + 1, userSettings.dailyGoal));
    
    // Simulation lecture audio
    setTimeout(() => {
      setIsPlaying(false);
    }, 3000);
  };

  // Calculer le progrès quotidien
  useEffect(() => {
    const progress = Math.round((completedToday / userSettings.dailyGoal) * 100);
    setDailyProgress(progress);
  }, [completedToday, userSettings.dailyGoal]);

  // Initialiser avec une citation
  useEffect(() => {
    getRandomQuote();
  }, [userSettings.mood, userSettings.timeOfDay]);

  // Obtenir le texte selon la langue
  const getQuoteText = (quote: MotivationQuote) => {
    switch (userSettings.language) {
      case 'english':
        return quote.english;
      case 'français':
      default:
        return quote.french;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Motivation Spirituelle</h1>
              <p className="text-purple-100">Micro-Interactions Divines • 100% Authentique</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{completedToday}/{userSettings.dailyGoal}</div>
              <div className="text-sm text-purple-200">Motivations quotidiennes</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="quotidien" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="quotidien">Quotidien</TabsTrigger>
            <TabsTrigger value="gagnées">Gagnées</TabsTrigger>
          </TabsList>

          <TabsContent value="quotidien" className="space-y-6">
            {/* Citation Principale */}
            <Card className="text-center">
              <CardContent className="p-8">
                {currentQuote && (
                  <div className="space-y-6">
                    {/* Texte Arabe */}
                    <div className="text-3xl font-arabic text-emerald-800 leading-relaxed" dir="rtl">
                      {currentQuote.arabic}
                    </div>
                    
                    {/* Traduction */}
                    <div className="text-lg text-gray-700 italic max-w-2xl mx-auto">
                      {getQuoteText(currentQuote)}
                    </div>
                    
                    {/* Source */}
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <BookOpen className="h-4 w-4" />
                      {currentQuote.source}
                    </div>

                    {/* Explication selon hadith */}
                    {currentQuote.id === 'dhikr-001' && (
                      <div className="bg-emerald-50 p-4 rounded-lg text-sm text-emerald-800">
                        Cette invocation efface tous les péchés même s'ils sont comme l'écume de la mer
                      </div>
                    )}
                    
                    {/* Boutons d'action */}
                    <div className="flex items-center justify-center gap-4">
                      <Button
                        onClick={playMotivation}
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                        disabled={isPlaying}
                        size="lg"
                      >
                        {isPlaying ? (
                          <>
                            <Pause className="h-5 w-5 mr-2" />
                            En cours...
                          </>
                        ) : (
                          <>
                            <Play className="h-5 w-5 mr-2" />
                            Écouter
                          </>
                        )}
                      </Button>
                      
                      <Button variant="outline" onClick={getRandomQuote}>
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Nouvelle
                      </Button>
                      
                      {userSettings.soundEnabled && (
                        <Button variant="ghost" size="sm">
                          <Volume2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Progrès Quotidien */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Progrès Quotidien</h3>
                  <Badge className="bg-purple-100 text-purple-800">
                    {dailyProgress}% Complété
                  </Badge>
                </div>
                <Progress value={dailyProgress} className="mb-2" />
                <div className="text-sm text-gray-600 text-center">
                  {completedToday} sur {userSettings.dailyGoal} motivations
                </div>
              </CardContent>
            </Card>

            {/* Personnalisation Spirituelle */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-600" />
                  Personnalisation Spirituelle
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Sélecteur de Langue */}
                <div>
                  <label className="block text-sm font-medium mb-2">Langue d'Interface</label>
                  <div className="relative">
                    <Button
                      variant="outline"
                      className="w-full justify-between"
                      onClick={() => setShowSettings(!showSettings)}
                    >
                      <span className="flex items-center gap-2">
                        {supportedLanguages.find(l => l.code === userSettings.language)?.flag}
                        {supportedLanguages.find(l => l.code === userSettings.language)?.name}
                      </span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                    
                    {showSettings && (
                      <div className="absolute top-full left-0 right-0 z-10 bg-white border rounded-md shadow-lg mt-1">
                        {supportedLanguages.map((lang) => (
                          <button
                            key={lang.code}
                            className="w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center gap-2"
                            onClick={() => {
                              setUserSettings(prev => ({ ...prev, language: lang.code }));
                              setShowSettings(false);
                            }}
                          >
                            <span>{lang.flag}</span>
                            <span>{lang.name}</span>
                            {userSettings.language === lang.code && <Check className="h-4 w-4 ml-auto text-green-600" />}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Humeur Spirituelle */}
                <div>
                  <label className="block text-sm font-medium mb-2">Humeur Spirituelle</label>
                  <div className="grid grid-cols-1 gap-2">
                    {spiritualMoods.map((mood) => (
                      <button
                        key={mood.id}
                        className={`p-3 rounded-lg border text-left transition-colors ${
                          userSettings.mood === mood.id 
                            ? 'border-purple-500 bg-purple-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setUserSettings(prev => ({ ...prev, mood: mood.id }))}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{mood.icon}</span>
                          <span className="font-medium">{mood.name}</span>
                          {userSettings.mood === mood.id && <Check className="h-4 w-4 ml-auto text-purple-600" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Moment de la Journée */}
                <div>
                  <label className="block text-sm font-medium mb-2">Moment de la Journée</label>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { id: 'automatic', name: 'Automatique', icon: '🤖' },
                      { id: 'morning', name: 'Matin', icon: '☀️' },
                      { id: 'afternoon', name: 'Après-midi', icon: '☕' },
                      { id: 'evening', name: 'Soir', icon: '🌙' }
                    ].map((time) => (
                      <button
                        key={time.id}
                        className={`p-3 rounded-lg border text-left transition-colors ${
                          userSettings.timeOfDay === time.id 
                            ? 'border-purple-500 bg-purple-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setUserSettings(prev => ({ ...prev, timeOfDay: time.id as any }))}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{time.icon}</span>
                          <span className="font-medium">{time.name}</span>
                          {userSettings.timeOfDay === time.id && <Check className="h-4 w-4 ml-auto text-purple-600" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Objectif Quotidien */}
                <div>
                  <label className="block text-sm font-medium mb-2">Objectif Quotidien</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[5, 10, 15, 20].map((goal) => (
                      <button
                        key={goal}
                        className={`p-3 rounded-lg border text-center transition-colors ${
                          userSettings.dailyGoal === goal 
                            ? 'border-purple-500 bg-purple-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setUserSettings(prev => ({ ...prev, dailyGoal: goal }))}
                      >
                        <div className="font-bold text-lg">{goal}</div>
                        <div className="text-sm text-gray-600">motivations</div>
                        {userSettings.dailyGoal === goal && <Check className="h-3 w-3 mx-auto mt-1 text-purple-600" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Options Audio */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Son Activé</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setUserSettings(prev => ({ ...prev, soundEnabled: !prev.soundEnabled }))}
                    className={userSettings.soundEnabled ? 'bg-green-50 text-green-700' : ''}
                  >
                    <Volume2 className="h-4 w-4 mr-2" />
                    {userSettings.soundEnabled ? 'Activé' : 'Désactivé'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gagnées" className="space-y-6">
            {/* Statistiques Gagnées */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-yellow-600">{completedToday}</div>
                  <div className="text-sm text-gray-600">Aujourd'hui</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Star className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">127</div>
                  <div className="text-sm text-gray-600">Cette semaine</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-600">1,243</div>
                  <div className="text-sm text-gray-600">Total</div>
                </CardContent>
              </Card>
            </div>

            {/* Historique des Motivations */}
            <Card>
              <CardHeader>
                <CardTitle>Historique des Motivations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {motivationQuotes.slice(0, 3).map((quote, index) => (
                    <div key={quote.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{getQuoteText(quote)}</div>
                        <div className="text-xs text-gray-500">{quote.source}</div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Complété
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Actions Globales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Link href="/bibliotheque-fiqh-informatique">
            <Button className="w-full h-16 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white">
              <BookOpen className="h-5 w-5 mr-2" />
              Bibliothèque Fiqh
            </Button>
          </Link>
          
          <Link href="/assistant-vocal-multilingue">
            <Button className="w-full h-16 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
              <Volume2 className="h-5 w-5 mr-2" />
              Assistant Vocal Aisha
            </Button>
          </Link>
          
          <Link href="/52-modules">
            <Button className="w-full h-16 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
              <Star className="h-5 w-5 mr-2" />
              Empire 52 Modules
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MotivationSpirituelleApp;