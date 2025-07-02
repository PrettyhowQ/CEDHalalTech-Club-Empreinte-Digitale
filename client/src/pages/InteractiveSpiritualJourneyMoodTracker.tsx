import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Calendar } from '@/components/ui/calendar';
import { 
  Heart, 
  Moon, 
  Sun, 
  Star, 
  Sparkles, 
  TreePine, 
  Waves, 
  Cloud, 
  Zap, 
  Flower,
  Eye,
  Brain,
  Compass,
  Book,
  Music,
  Smile,
  Frown,
  Meh,
  TrendingUp,
  Calendar as CalendarIcon,
  Save,
  Share2,
  Download,
  Shield,
  Target,
  Users,
  Award,
  Clock
} from 'lucide-react';

interface MoodEntry {
  id: string;
  date: Date;
  mood: string;
  intensity: number;
  spiritualState: string;
  prayerCompletion: number;
  dhikrMinutes: number;
  gratitude: string[];
  challenges: string;
  blessings: string;
  dua: string;
  reflection: string;
  tags: string[];
}

interface SpiritualMood {
  id: string;
  name: string;
  nameArabic: string;
  icon: React.ElementType;
  color: string;
  description: string;
  spiritualBenefit: string;
}

const spiritualMoods: SpiritualMood[] = [
  {
    id: 'peaceful',
    name: 'Paisible',
    nameArabic: 'سكينة',
    icon: Moon,
    color: 'bg-blue-100 text-blue-700 border-blue-200',
    description: 'Calme intérieur et sérénité spirituelle',
    spiritualBenefit: 'État de Sakina - Tranquillité divine'
  },
  {
    id: 'grateful',
    name: 'Reconnaissant',
    nameArabic: 'شاكر',
    icon: Heart,
    color: 'bg-pink-100 text-pink-700 border-pink-200',
    description: 'Gratitude profonde envers Allah',
    spiritualBenefit: 'Développe la reconnaissance - Shukr'
  },
  {
    id: 'energized',
    name: 'Énergique',
    nameArabic: 'نشيط',
    icon: Zap,
    color: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    description: 'Énergie spirituelle et motivation',
    spiritualBenefit: 'Enthousiasme dans l\'adoration'
  },
  {
    id: 'contemplative',
    name: 'Contemplatif',
    nameArabic: 'متأمل',
    icon: Eye,
    color: 'bg-purple-100 text-purple-700 border-purple-200',
    description: 'Réflexion profonde et méditation',
    spiritualBenefit: 'Tafakkur - Contemplation divine'
  },
  {
    id: 'hopeful',
    name: 'Plein d\'espoir',
    nameArabic: 'مُتفائل',
    icon: Star,
    color: 'bg-green-100 text-green-700 border-green-200',
    description: 'Optimisme et confiance en Allah',
    spiritualBenefit: 'Husn Al-Dhann - Bonne opinion d\'Allah'
  },
  {
    id: 'seeking',
    name: 'En quête',
    nameArabic: 'طالب',
    icon: Compass,
    color: 'bg-orange-100 text-orange-700 border-orange-200',
    description: 'Recherche de guidance spirituelle',
    spiritualBenefit: 'Talab Al-Hidaya - Quête de guidance'
  },
  {
    id: 'focused',
    name: 'Concentré',
    nameArabic: 'مُركز',
    icon: Target,
    color: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    description: 'Focus sur l\'adoration et le dhikr',
    spiritualBenefit: 'Khushoo\' - Humilité concentrée'
  },
  {
    id: 'challenged',
    name: 'Éprouvé',
    nameArabic: 'مُبتلى',
    icon: Cloud,
    color: 'bg-gray-100 text-gray-700 border-gray-200',
    description: 'Traversant une épreuve avec patience',
    spiritualBenefit: 'Sabr - Patience dans l\'épreuve'
  }
];

const dhikrSuggestions = [
  { arabic: 'سُبْحَانَ اللهِ', transliteration: 'SubhanAllah', meaning: 'Gloire à Allah', count: 33 },
  { arabic: 'الْحَمْدُ للهِ', transliteration: 'AlhamdulillAh', meaning: 'Louange à Allah', count: 33 },
  { arabic: 'اللهُ أَكْبَرُ', transliteration: 'Allahu Akbar', meaning: 'Allah est le Plus Grand', count: 34 },
  { arabic: 'لَا إِلَهَ إِلَّا اللهُ', transliteration: 'La ilaha illa Allah', meaning: 'Il n\'y a de divinité qu\'Allah', count: 100 },
  { arabic: 'أَسْتَغْفِرُ اللهَ', transliteration: 'Astaghfirullah', meaning: 'Je demande pardon à Allah', count: 100 }
];

const ayatKursiData = {
  arabic: `اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ`,
  transliteration: `Allahu la ilaha illa Huwa, Al-Hayyu Al-Qayyumu, la ta'khudhuhuu sinatun wa la nawm, lahu ma fi as-samawati wa ma fi al-ard, man dhal-ladhii yashfa'u 'indahu illa bi-idhnih, ya'lamu ma bayna aydiihim wa ma khalfahum, wa la yuhiituuna bi-shay'in min 'ilmihi illa bima sha'a, wasi'a kursiyyuhu as-samawati wa al-ard, wa la ya'uuduhuu hifdhuhuma, wa Huwa Al-'Aliyu Al-'Adhiim`,
  translation: `Allah - il n'y a de divinité que Lui, le Vivant, Celui qui subsiste par lui-même. Ni somnolence ni sommeil ne Le saisissent. A Lui appartient tout ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission ? Il connaît leur passé et leur futur. Et, de Sa science, ils n'embrassent que ce qu'Il veut. Son Trône déborde les cieux et la terre, dont la garde ne Lui coûte aucune peine. Et Il est le Très Haut, le Très Grand.`,
  reference: 'Sourate Al-Baqarah (2:255)',
  benefits: [
    'Protection contre le mal',
    'Bénédictions et baraka',
    'Paix intérieure',
    'Connexion spirituelle renforcée'
  ]
};

const recitateurs = [
  { name: 'Sheikh Abd Al-Basit', nameArabic: 'عبد الباسط عبد الصمد', style: 'Mujawwad' },
  { name: 'Sheikh Al-Minshawi', nameArabic: 'محمد صديق المنشاوي', style: 'Mujawwad' },
  { name: 'Sheikh Maher Al-Mueaqly', nameArabic: 'ماهر المعيقلي', style: 'Murattal' },
  { name: 'Sheikh Mishary Rashid', nameArabic: 'مشاري راشد العفاسي', style: 'Murattal' },
  { name: 'Sheikh Al-Husary', nameArabic: 'محمود خليل الحصري', style: 'Muallim' }
];

const versetsImportants = [
  {
    name: 'Ayat Al-Kursi',
    nameArabic: 'آية الكرسي',
    reference: 'Al-Baqarah 2:255',
    description: 'Le verset du Trône - Protection suprême',
    data: ayatKursiData
  },
  {
    name: 'Al-Fatiha',
    nameArabic: 'الفاتحة',
    reference: 'Al-Fatiha 1:1-7',
    description: 'L\'ouverture - Mère du Livre',
    data: {
      arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ * الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ * الرَّحْمَٰنِ الرَّحِيمِ * مَالِكِ يَوْمِ الدِّينِ * إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ * اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ * صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
      translation: 'Au nom d\'Allah, le Clément, le Miséricordieux. Louange à Allah, Seigneur des mondes. Le Clément, le Miséricordieux. Maître du Jour de la rétribution. C\'est Toi que nous adorons, et c\'est Toi dont nous implorons secours. Guide-nous dans le droit chemin, le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés.',
      benefits: ['Récitée dans chaque prière', 'Guérison spirituelle', 'Guide vers le droit chemin']
    }
  },
  {
    name: 'Les 3 dernières sourates',
    nameArabic: 'المعوذات',
    reference: 'Al-Ikhlas, Al-Falaq, An-Nas',
    description: 'Protection contre tous les maux',
    data: {
      arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ * اللَّهُ الصَّمَدُ * لَمْ يَلِدْ وَلَمْ يُولَدْ * وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
      translation: 'Dis: Il est Allah, Unique. Allah, le Seul à être imploré pour ce que nous désirons. Il n\'a jamais engendré, n\'a pas été engendré non plus. Et nul n\'est égal à Lui.',
      benefits: ['Protection matin/soir', 'Purification du cœur', 'Éloignement du mal']
    }
  }
];

const InteractiveSpiritualJourneyMoodTracker: React.FC = () => {
  const [currentMood, setCurrentMood] = useState<string>('');
  const [moodIntensity, setMoodIntensity] = useState<number>(5);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [entries, setEntries] = useState<MoodEntry[]>([]);
  const [currentEntry, setCurrentEntry] = useState<Partial<MoodEntry>>({
    gratitude: [],
    tags: []
  });
  const [showJournal, setShowJournal] = useState(false);
  const [weeklyProgress, setWeeklyProgress] = useState(0);
  const [prayerStreak, setPrayerStreak] = useState(7);
  const [dhikrTotal, setDhikrTotal] = useState(1247);
  const [selectedVerset, setSelectedVerset] = useState(0);
  const [selectedRecitateur, setSelectedRecitateur] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Calcul du progrès hebdomadaire
    const thisWeekEntries = entries.filter(entry => {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return entry.date >= weekAgo;
    });
    setWeeklyProgress((thisWeekEntries.length / 7) * 100);
  }, [entries]);

  const saveMoodEntry = () => {
    const newEntry: MoodEntry = {
      id: Date.now().toString(),
      date: selectedDate,
      mood: currentMood,
      intensity: moodIntensity,
      spiritualState: currentEntry.spiritualState || '',
      prayerCompletion: currentEntry.prayerCompletion || 0,
      dhikrMinutes: currentEntry.dhikrMinutes || 0,
      gratitude: currentEntry.gratitude || [],
      challenges: currentEntry.challenges || '',
      blessings: currentEntry.blessings || '',
      dua: currentEntry.dua || '',
      reflection: currentEntry.reflection || '',
      tags: currentEntry.tags || []
    };

    setEntries(prev => [...prev, newEntry]);
    setCurrentEntry({ gratitude: [], tags: [] });
    setCurrentMood('');
    setMoodIntensity(5);
  };

  const getMoodIcon = (moodId: string) => {
    const mood = spiritualMoods.find(m => m.id === moodId);
    return mood ? mood.icon : Smile;
  };

  const getMoodColor = (moodId: string) => {
    const mood = spiritualMoods.find(m => m.id === moodId);
    return mood ? mood.color : 'bg-gray-100 text-gray-700';
  };

  const addGratitude = (gratitudeText: string) => {
    if (gratitudeText.trim()) {
      setCurrentEntry(prev => ({
        ...prev,
        gratitude: [...(prev.gratitude || []), gratitudeText.trim()]
      }));
    }
  };

  const playRecitation = (versetIndex: number, recitateurIndex: number) => {
    // Arrêter l'audio actuel si en cours
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Simuler une URL audio (en production, utiliser de vraies URLs de récitation)
    const audioUrl = `https://audio.quran.com/${recitateurIndex + 1}/${versetIndex === 0 ? '002255' : versetIndex === 1 ? '001001' : '112001'}.mp3`;
    
    const audio = new Audio();
    // En mode développement, utiliser un fichier audio de démonstration
    audio.src = '/api/audio/demo-recitation.mp3'; // URL de démonstration
    
    audio.onloadstart = () => setIsPlaying(true);
    audio.onended = () => setIsPlaying(false);
    audio.onerror = () => {
      setIsPlaying(false);
      // Fallback: notification que l'audio n'est pas disponible
      console.log('Audio non disponible - nécessite intégration avec service de récitation Coran');
    };
    
    setCurrentAudio(audio);
    audio.play().catch(() => {
      setIsPlaying(false);
      // Notification silencieuse que l'audio nécessite interaction utilisateur
    });
  };

  const stopRecitation = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
              <Heart className="h-8 w-8 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Suivi Spirituel Interactif
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Votre compagnon spirituel pour suivre votre humeur, vos progrès dans l'adoration et votre cheminement vers Allah
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Badge variant="secondary" className="bg-purple-100 text-purple-700">
              <Star className="h-4 w-4 mr-1" />
              Spiritualité Islamique
            </Badge>
            <Badge variant="secondary" className="bg-pink-100 text-pink-700">
              <Heart className="h-4 w-4 mr-1" />
              Suivi Doux
            </Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
              <Target className="h-4 w-4 mr-1" />
              Progrès Personnel
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sélection d'humeur principale */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-purple-600" />
                Comment vous sentez-vous spirituellement aujourd'hui ?
              </CardTitle>
              <CardDescription>
                Choisissez votre état spirituel actuel avec bienveillance envers vous-même
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {spiritualMoods.map((mood) => (
                  <Button
                    key={mood.id}
                    variant={currentMood === mood.id ? "default" : "outline"}
                    className={`h-auto p-4 flex flex-col items-center gap-2 transition-all hover:scale-105 ${
                      currentMood === mood.id ? mood.color : 'hover:' + mood.color
                    }`}
                    onClick={() => setCurrentMood(mood.id)}
                  >
                    <mood.icon className="h-6 w-6" />
                    <div className="text-center">
                      <div className="font-medium text-xs">{mood.name}</div>
                      <div className="text-xs opacity-70">{mood.nameArabic}</div>
                    </div>
                  </Button>
                ))}
              </div>

              {currentMood && (
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      {React.createElement(getMoodIcon(currentMood), { className: "h-5 w-5 text-purple-600" })}
                      <span className="font-medium">
                        {spiritualMoods.find(m => m.id === currentMood)?.spiritualBenefit}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {spiritualMoods.find(m => m.id === currentMood)?.description}
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Intensité de ce sentiment (1-10): {moodIntensity}
                    </label>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Léger</span>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={moodIntensity}
                        onChange={(e) => setMoodIntensity(Number(e.target.value))}
                        className="flex-1 h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="text-sm">Intense</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Journal spirituel détaillé */}
          {currentMood && (
            <Card className="border-purple-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5 text-purple-600" />
                  Journal Spirituel du Jour
                </CardTitle>
                <CardDescription>
                  Prenez un moment pour réfléchir sur votre journée avec Allah
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Prières accomplies aujourd'hui
                    </label>
                    <div className="flex gap-2">
                      {['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map((prayer) => (
                        <Button
                          key={prayer}
                          variant="outline"
                          size="sm"
                          className="text-xs"
                          onClick={() => {
                            // Toggle prayer
                          }}
                        >
                          {prayer}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Minutes de dhikr/Coran
                    </label>
                    <input
                      type="number"
                      value={currentEntry.dhikrMinutes || 0}
                      onChange={(e) => setCurrentEntry(prev => ({
                        ...prev,
                        dhikrMinutes: Number(e.target.value)
                      }))}
                      className="w-full p-2 border rounded-lg"
                      placeholder="0"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Gratitudes du jour (3 choses pour lesquelles vous êtes reconnaissant)
                  </label>
                  <div className="space-y-2">
                    {[0, 1, 2].map((index) => (
                      <input
                        key={index}
                        type="text"
                        placeholder={`Gratitude ${index + 1}...`}
                        className="w-full p-2 border rounded-lg"
                        onBlur={(e) => {
                          if (e.target.value.trim()) {
                            addGratitude(e.target.value);
                            e.target.value = '';
                          }
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Défis rencontrés aujourd'hui
                    </label>
                    <Textarea
                      value={currentEntry.challenges || ''}
                      onChange={(e) => setCurrentEntry(prev => ({
                        ...prev,
                        challenges: e.target.value
                      }))}
                      placeholder="Quelles difficultés avez-vous rencontrées ?"
                      className="min-h-[80px]"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Bénédictions reçues
                    </label>
                    <Textarea
                      value={currentEntry.blessings || ''}
                      onChange={(e) => setCurrentEntry(prev => ({
                        ...prev,
                        blessings: e.target.value
                      }))}
                      placeholder="Quelles bénédictions avez-vous remarquées ?"
                      className="min-h-[80px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Dua/Invocation du jour
                  </label>
                  <Textarea
                    value={currentEntry.dua || ''}
                    onChange={(e) => setCurrentEntry(prev => ({
                      ...prev,
                      dua: e.target.value
                    }))}
                    placeholder="Quelle invocation souhaitez-vous faire ?"
                    className="min-h-[60px]"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Réflexion libre
                  </label>
                  <Textarea
                    value={currentEntry.reflection || ''}
                    onChange={(e) => setCurrentEntry(prev => ({
                      ...prev,
                      reflection: e.target.value
                    }))}
                    placeholder="Vos pensées, apprentissages, ou réflexions du jour..."
                    className="min-h-[100px]"
                  />
                </div>

                <Button 
                  onClick={saveMoodEntry}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Sauvegarder votre journée spirituelle
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar avec statistiques et outils */}
        <div className="space-y-6">
          {/* Progrès de la semaine */}
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                Progrès Spirituel
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Suivi hebdomadaire</span>
                  <span className="text-sm text-purple-600">{Math.round(weeklyProgress)}%</span>
                </div>
                <Progress value={weeklyProgress} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-lg font-bold text-green-600">{prayerStreak}</div>
                  <div className="text-xs text-green-600">Jours de prières</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-lg font-bold text-blue-600">{dhikrTotal}</div>
                  <div className="text-xs text-blue-600">Dhikr ce mois</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>🕌 Prières</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    5/5 aujourd'hui
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>📖 Lecture Coran</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    15 min
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>🤲 Dhikr</span>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    187 fois
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lecteur de Récitation Coranique */}
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Music className="h-5 w-5 text-purple-600" />
                🎵 Récitation Coranique
              </CardTitle>
              <CardDescription>
                Écoutez les versets les plus importants avec des récitateurs authentiques
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Sélection du verset */}
              <div>
                <label className="text-sm font-medium mb-2 block">Choisir un verset:</label>
                <div className="grid gap-2">
                  {versetsImportants.map((verset, index) => (
                    <Button
                      key={index}
                      variant={selectedVerset === index ? "default" : "outline"}
                      className={`text-left h-auto p-3 ${
                        selectedVerset === index 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-emerald-50 hover:bg-emerald-100'
                      }`}
                      onClick={() => setSelectedVerset(index)}
                    >
                      <div className="flex-1">
                        <div className="font-medium text-sm">{verset.nameArabic} - {verset.name}</div>
                        <div className="text-xs opacity-70">{verset.reference}</div>
                        <div className="text-xs opacity-60">{verset.description}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Sélection du récitateur */}
              <div>
                <label className="text-sm font-medium mb-2 block">Récitateur:</label>
                <div className="grid grid-cols-1 gap-2">
                  {recitateurs.slice(0, 3).map((recitateur, index) => (
                    <Button
                      key={index}
                      variant={selectedRecitateur === index ? "default" : "outline"}
                      className={`text-left h-auto p-2 text-xs ${
                        selectedRecitateur === index 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-purple-50 hover:bg-purple-100'
                      }`}
                      onClick={() => setSelectedRecitateur(index)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">{recitateur.name}</div>
                          <div className="text-xs opacity-70">{recitateur.nameArabic}</div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {recitateur.style}
                        </Badge>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Affichage du verset sélectionné */}
              <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
                <div className="text-center mb-3">
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 mb-2">
                    {versetsImportants[selectedVerset].reference}
                  </Badge>
                </div>
                
                <div className="font-arabic text-base text-emerald-800 mb-3 leading-relaxed text-right">
                  {versetsImportants[selectedVerset].data.arabic}
                </div>
                
                <div className="text-sm text-gray-700 mb-3">
                  {versetsImportants[selectedVerset].data.translation}
                </div>
                
                <div>
                  <div className="text-xs font-medium text-purple-600 mb-2">Bienfaits spirituels:</div>
                  <div className="grid grid-cols-1 gap-1">
                    {versetsImportants[selectedVerset].data.benefits.map((benefit, index) => (
                      <div key={index} className="text-xs text-gray-600 flex items-center gap-1">
                        <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contrôles audio */}
              <div className="flex gap-2">
                <Button 
                  className={`flex-1 ${isPlaying ? 'bg-red-600 hover:bg-red-700' : 'bg-emerald-600 hover:bg-emerald-700'}`}
                  onClick={() => isPlaying ? stopRecitation() : playRecitation(selectedVerset, selectedRecitateur)}
                >
                  {isPlaying ? (
                    <>🛑 Arrêter</>
                  ) : (
                    <>🎵 Écouter la récitation</>
                  )}
                </Button>
              </div>

              {/* Note technique */}
              <div className="text-xs text-gray-500 p-2 bg-gray-50 rounded border">
                💡 <strong>Note:</strong> Intégration avec services de récitation Coran authentiques en cours de développement.
                Les récitateurs sélectionnés sont des références mondiales en récitation coranique.
              </div>
            </CardContent>
          </Card>

          {/* Dhikr suggéré */}
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-purple-600" />
                Dhikr Suggéré
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {dhikrSuggestions.slice(0, 3).map((dhikr, index) => (
                <div key={index} className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <div className="text-center">
                    <div className="font-arabic text-lg text-purple-700 mb-1">{dhikr.arabic}</div>
                    <div className="text-xs text-gray-600 mb-1">{dhikr.transliteration}</div>
                    <div className="text-xs text-gray-500">{dhikr.meaning}</div>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {dhikr.count}x recommandé
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Calendrier */}
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-purple-600" />
                Calendrier Spirituel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                selected={selectedDate}
                onSelect={(date: Date | undefined) => date && setSelectedDate(date)}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          {/* Actions rapides */}
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-purple-600" />
                Actions Rapides
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Exporter Journal
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <Share2 className="h-4 w-4 mr-2" />
                Partager Progrès
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Communauté
              </Button>

              <Button variant="outline" className="w-full justify-start">
                <Award className="h-4 w-4 mr-2" />
                Objectifs Spirituels
              </Button>
            </CardContent>
          </Card>

          {/* Inspiration du jour */}
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-purple-600" />
                Inspiration du Jour
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                <div className="text-sm text-purple-700 mb-2 font-arabic">
                  وَبَشِّرِ الصَّابِرِينَ
                </div>
                <div className="text-xs text-gray-600 mb-2">
                  "Et annonce la bonne nouvelle aux patients"
                </div>
                <div className="text-xs text-gray-500">
                  Sourate Al-Baqarah, verset 155
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Historique des entrées */}
      {entries.length > 0 && (
        <div className="max-w-7xl mx-auto mt-8">
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-purple-600" />
                Historique de votre Cheminement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {entries.slice(-5).reverse().map((entry) => (
                  <div key={entry.id} className="p-4 border rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {React.createElement(getMoodIcon(entry.mood), { 
                          className: "h-5 w-5 text-purple-600" 
                        })}
                        <span className="font-medium">
                          {spiritualMoods.find(m => m.id === entry.mood)?.name}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          Intensité {entry.intensity}/10
                        </Badge>
                      </div>
                      <span className="text-sm text-gray-500">
                        {entry.date.toLocaleDateString()}
                      </span>
                    </div>
                    {entry.reflection && (
                      <p className="text-sm text-gray-600 mt-2">{entry.reflection}</p>
                    )}
                    {entry.gratitude.length > 0 && (
                      <div className="mt-2">
                        <span className="text-xs font-medium text-purple-600">Gratitudes: </span>
                        <span className="text-xs text-gray-600">
                          {entry.gratitude.join(', ')}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Footer de protection */}
      <div className="mt-12 text-center text-sm text-gray-500 border-t pt-6">
        <div className="flex items-center justify-center gap-2">
          <Shield className="h-4 w-4" />
          <span>© 2025 Yakoubi Yamina - Suivi Spirituel Interactif CED - Tous droits réservés</span>
        </div>
        <div className="mt-2 flex items-center justify-center gap-4 text-xs">
          <span>🕌 Guidance Spirituelle Islamique</span>
          <span>💜 Suivi Bienveillant</span>
          <span>📊 Progrès Personnel</span>
        </div>
      </div>

      {/* CSS pour les polices arabes */}
      <style>{`
        .font-arabic {
          font-family: 'Amiri', 'Traditional Arabic', serif;
          font-size: 1.2em;
          line-height: 1.8;
        }
      `}</style>
    </div>
  );
};

export default InteractiveSpiritualJourneyMoodTracker;