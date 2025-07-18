import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, Sunrise, Moon, Star, Sparkles, RefreshCw, BookOpen, Zap } from "lucide-react";

interface SpiritualMotivation {
  id: string;
  type: 'verse' | 'hadith' | 'dhikr' | 'dua' | 'wisdom';
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night' | 'any';
  mood: 'motivation' | 'gratitude' | 'peace' | 'strength' | 'guidance';
  arabic: string;
  translation: string;
  reference: string;
  reflection: string;
  personalizedMessage: string;
  action: string;
}

const motivationalContent: SpiritualMotivation[] = [
  {
    id: '1',
    type: 'verse',
    timeOfDay: 'morning',
    mood: 'motivation',
    arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
    translation: 'Et quiconque place sa confiance en Allah, Il lui suffit.',
    reference: 'Coran 65:3',
    reflection: 'Commencez votre journée avec la confiance totale en Allah. Il est votre soutien.',
    personalizedMessage: 'Votre travail aujourd\'hui est une forme d\'adoration. Allah vous guide.',
    action: 'Récitez cette ayah avant de commencer votre travail'
  },
  {
    id: '2',
    type: 'hadith',
    timeOfDay: 'morning',
    mood: 'motivation',
    arabic: 'إن الله يحب إذا عمل أحدكم عملاً أن يتقنه',
    translation: 'Allah aime que lorsque l\'un de vous fait un travail, qu\'il le fasse avec excellence.',
    reference: 'Rapporté par At-Tabarani',
    reflection: 'L\'excellence dans le travail est une adoration. Chaque ligne de code peut être un acte de foi.',
    personalizedMessage: 'Votre expertise technique est un amanah (dépôt) d\'Allah. Utilisez-la avec sagesse.',
    action: 'Fixez-vous un objectif d\'excellence pour aujourd\'hui'
  },
  {
    id: '3',
    type: 'dhikr',
    timeOfDay: 'afternoon',
    mood: 'peace',
    arabic: 'لا إله إلا الله وحده لا شريك له',
    translation: 'Il n\'y a de divinité qu\'Allah, Seul et sans associé.',
    reference: 'Dhikr authentique',
    reflection: 'Quand le stress monte, rappelez-vous l\'unicité d\'Allah. Il apaise le cœur.',
    personalizedMessage: 'Prenez une pause spirituelle. Votre âme a besoin de ce rappel.',
    action: 'Répétez 10 fois pendant votre pause'
  },
  {
    id: '4',
    type: 'dua',
    timeOfDay: 'evening',
    mood: 'gratitude',
    arabic: 'اللهم لك الحمد كما ينبغي لجلال وجهك وعظيم سلطانك',
    translation: 'Ô Allah, à Toi appartient la louange comme il convient à la majesté de Ton visage et à la grandeur de Ton pouvoir.',
    reference: 'Dua authentique',
    reflection: 'Terminez votre journée productive en remerciant Allah pour Ses bienfaits.',
    personalizedMessage: 'Vos accomplissements d\'aujourd\'hui sont des bénédictions d\'Allah.',
    action: 'Réfléchissez aux bénédictions reçues aujourd\'hui'
  },
  {
    id: '5',
    type: 'wisdom',
    timeOfDay: 'night',
    mood: 'guidance',
    arabic: 'من طلب العلم فقد طلب رفيع الدرجات',
    translation: 'Celui qui cherche la science recherche les hauts degrés.',
    reference: 'Sagesse islamique',
    reflection: 'Votre apprentissage constant vous élève spirituellement et professionnellement.',
    personalizedMessage: 'Chaque nouvelle compétence acquise vous rapproche d\'Allah.',
    action: 'Planifiez votre apprentissage de demain'
  }
];

const timeBasedGreetings = {
  morning: {
    greeting: 'Bonjour et As-salamu alaykum',
    arabic: 'صباح الخير والسلام عليكم',
    icon: Sunrise,
    color: 'text-yellow-400'
  },
  afternoon: {
    greeting: 'Bon après-midi',
    arabic: 'مساء الخير',
    icon: Star,
    color: 'text-blue-400'
  },
  evening: {
    greeting: 'Bonsoir',
    arabic: 'مساء الخير',
    icon: Moon,
    color: 'text-purple-400'
  },
  night: {
    greeting: 'Bonne nuit',
    arabic: 'ليلة سعيدة',
    icon: Moon,
    color: 'text-indigo-400'
  }
};

export default function PersonalizedDailySpiritualMotivation() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedMood, setSelectedMood] = useState<string>('motivation');
  const [dailyMotivation, setDailyMotivation] = useState<SpiritualMotivation | null>(null);
  const [userProgress, setUserProgress] = useState({
    streak: 7,
    completedActions: 23,
    favoriteType: 'verse'
  });

  // Déterminer le moment de la journée
  const getTimeOfDay = () => {
    const hour = currentTime.getHours();
    if (hour >= 6 && hour < 12) return 'morning';
    if (hour >= 12 && hour < 17) return 'afternoon';
    if (hour >= 17 && hour < 21) return 'evening';
    return 'night';
  };

  // Obtenir la motivation personnalisée
  const getPersonalizedMotivation = () => {
    const timeOfDay = getTimeOfDay();
    const filtered = motivationalContent.filter(
      content => content.timeOfDay === timeOfDay || content.timeOfDay === 'any'
    );
    
    const moodFiltered = filtered.filter(content => content.mood === selectedMood);
    const finalContent = moodFiltered.length > 0 ? moodFiltered : filtered;
    
    return finalContent[Math.floor(Math.random() * finalContent.length)];
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    setDailyMotivation(getPersonalizedMotivation());

    return () => clearInterval(timer);
  }, [selectedMood]);

  const refreshMotivation = () => {
    setDailyMotivation(getPersonalizedMotivation());
  };

  const markActionCompleted = () => {
    setUserProgress(prev => ({
      ...prev,
      completedActions: prev.completedActions + 1
    }));
  };

  const timeOfDay = getTimeOfDay();
  const greeting = timeBasedGreetings[timeOfDay];
  const GreetingIcon = greeting.icon;

  const moods = [
    { id: 'motivation', name: 'Motivation', icon: Zap, color: 'bg-yellow-600' },
    { id: 'gratitude', name: 'Gratitude', icon: Heart, color: 'bg-red-600' },
    { id: 'peace', name: 'Paix', icon: Moon, color: 'bg-blue-600' },
    { id: 'strength', name: 'Force', icon: Star, color: 'bg-green-600' },
    { id: 'guidance', name: 'Guidance', icon: BookOpen, color: 'bg-purple-600' }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'verse': return BookOpen;
      case 'hadith': return Star;
      case 'dhikr': return Heart;
      case 'dua': return Sparkles;
      case 'wisdom': return Zap;
      default: return BookOpen;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'verse': return 'bg-green-600';
      case 'hadith': return 'bg-blue-600';
      case 'dhikr': return 'bg-red-600';
      case 'dua': return 'bg-purple-600';
      case 'wisdom': return 'bg-yellow-600';
      default: return 'bg-gray-600';
    }
  };

  if (!dailyMotivation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 flex items-center justify-center">
        <div className="text-center text-white">
          <Sparkles className="h-12 w-12 mx-auto mb-4 animate-spin" />
          <p>Préparation de votre motivation spirituelle...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* En-tête avec salutation */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <GreetingIcon className={`h-8 w-8 ${greeting.color}`} />
            <h1 className="text-3xl font-bold">{greeting.greeting}</h1>
          </div>
          <p className="text-xl text-gray-300 font-arabic">{greeting.arabic}</p>
          <p className="text-sm text-gray-400 mt-2">
            {currentTime.toLocaleDateString('fr-FR', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Sélecteur d'humeur */}
        <Card className="mb-8 bg-slate-800/40 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Comment vous sentez-vous aujourd'hui ?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {moods.map(mood => {
                const MoodIcon = mood.icon;
                return (
                  <Button
                    key={mood.id}
                    variant={selectedMood === mood.id ? "default" : "outline"}
                    className={`${
                      selectedMood === mood.id 
                        ? `${mood.color} text-white` 
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                    onClick={() => setSelectedMood(mood.id)}
                  >
                    <MoodIcon className="h-4 w-4 mr-2" />
                    {mood.name}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Motivation principale */}
        <Card className="mb-8 bg-gradient-to-r from-green-900/40 to-emerald-900/40 border-green-600/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white flex items-center space-x-2">
                {(() => {
                  const TypeIcon = getTypeIcon(dailyMotivation.type);
                  return <TypeIcon className="h-6 w-6 text-green-400" />;
                })()}
                <span>Votre Motivation Spirituelle</span>
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Badge className={`${getTypeColor(dailyMotivation.type)} text-white`}>
                  {dailyMotivation.type}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={refreshMotivation}
                  className="text-gray-400 hover:text-white"
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Texte arabe */}
            <div className="text-center">
              <p className="text-2xl font-arabic text-green-300 mb-4 leading-relaxed">
                {dailyMotivation.arabic}
              </p>
              <Separator className="bg-green-600/30" />
            </div>

            {/* Traduction */}
            <div>
              <h3 className="font-semibold text-green-400 mb-2">Traduction</h3>
              <p className="text-gray-300 text-lg italic">"{dailyMotivation.translation}"</p>
              <p className="text-sm text-gray-400 mt-2">— {dailyMotivation.reference}</p>
            </div>

            {/* Réflexion */}
            <div>
              <h3 className="font-semibold text-blue-400 mb-2">Réflexion</h3>
              <p className="text-gray-300">{dailyMotivation.reflection}</p>
            </div>

            {/* Message personnalisé */}
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-400 mb-2">Message Personnel</h3>
              <p className="text-gray-300">{dailyMotivation.personalizedMessage}</p>
            </div>

            {/* Action suggérée */}
            <div className="bg-green-900/30 p-4 rounded-lg">
              <h3 className="font-semibold text-green-400 mb-2">Action Suggérée</h3>
              <p className="text-gray-300 mb-3">{dailyMotivation.action}</p>
              <Button
                onClick={markActionCompleted}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                ✓ J'ai accompli cette action
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Progression personnelle */}
        <Card className="bg-slate-800/40 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Votre Progression Spirituelle</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-900/30 rounded-lg">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  {userProgress.streak}
                </div>
                <div className="text-sm text-gray-300">Jours consécutifs</div>
              </div>
              <div className="text-center p-4 bg-blue-900/30 rounded-lg">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  {userProgress.completedActions}
                </div>
                <div className="text-sm text-gray-300">Actions accomplies</div>
              </div>
              <div className="text-center p-4 bg-purple-900/30 rounded-lg">
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  {userProgress.favoriteType}
                </div>
                <div className="text-sm text-gray-300">Type préféré</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Citation inspirante */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 italic">
            "Et c'est dans le rappel d'Allah que les cœurs trouvent leur tranquillité."
          </p>
          <p className="text-sm text-gray-500 mt-1">— Coran 13:28</p>
        </div>
      </div>
    </div>
  );
}