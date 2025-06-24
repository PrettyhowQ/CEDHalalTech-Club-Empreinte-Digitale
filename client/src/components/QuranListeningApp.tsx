import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Repeat,
  Shuffle,
  Download,
  Heart,
  Star,
  Clock,
  BookOpen,
  Compass,
  Moon,
  Sun,
  Headphones,
  Settings,
  List,
  Search,
  Filter,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CEDFooter } from './CEDFooter';

interface Recitator {
  id: string;
  name: string;
  arabicName: string;
  country: string;
  style: 'melodious' | 'traditional' | 'fast' | 'slow' | 'emotional';
  language: string;
  totalSurahs: number;
  rating: number;
  followers: number;
  description: string;
  avatar: string;
  verified: boolean;
  featured: boolean;
}

interface Surah {
  id: number;
  name: string;
  arabicName: string;
  englishName: string;
  revelationType: 'meccan' | 'medinan';
  totalVerses: number;
  duration: string;
  meaning: string;
  downloadUrl: string;
  isDownloaded: boolean;
  isFavorite: boolean;
}

interface PlaylistSurah {
  surahId: number;
  recitatorId: string;
  duration: string;
  playCount: number;
  lastPlayed?: Date;
}

const recitators: Recitator[] = [
  {
    id: 'abdul-rahman-al-sudais',
    name: 'Abdul Rahman Al-Sudais',
    arabicName: 'عبد الرحمن السديس',
    country: 'Arabie Saoudite',
    style: 'melodious',
    language: 'Arabe',
    totalSurahs: 114,
    rating: 4.9,
    followers: 2500000,
    description: 'Imam de la Grande Mosquée de La Mecque, voix mélodieuse et émouvante',
    avatar: '/api/placeholder/64/64',
    verified: true,
    featured: true
  },
  {
    id: 'mishary-rashid-alafasy',
    name: 'Mishary Rashid Alafasy',
    arabicName: 'مشاري راشد العفاسي',
    country: 'Koweït',
    style: 'melodious',
    language: 'Arabe',
    totalSurahs: 114,
    rating: 4.8,
    followers: 1800000,
    description: 'Récitateur koweïtien renommé avec une voix exceptionnellement belle',
    avatar: '/api/placeholder/64/64',
    verified: true,
    featured: true
  },
  {
    id: 'saad-al-ghamdi',
    name: 'Saad Al-Ghamdi',
    arabicName: 'سعد الغامدي',
    country: 'Arabie Saoudite',
    style: 'emotional',
    language: 'Arabe',
    totalSurahs: 114,
    rating: 4.8,
    followers: 1600000,
    description: 'Récitation émouvante qui touche le cœur des fidèles',
    avatar: '/api/placeholder/64/64',
    verified: true,
    featured: true
  },
  {
    id: 'maher-al-mueaqly',
    name: 'Maher Al-Mueaqly',
    arabicName: 'ماهر المعيقلي',
    country: 'Arabie Saoudite',
    style: 'traditional',
    language: 'Arabe',
    totalSurahs: 114,
    rating: 4.7,
    followers: 1400000,
    description: 'Imam de la Mosquée du Prophète à Médine, style traditionnel',
    avatar: '/api/placeholder/64/64',
    verified: true,
    featured: false
  },
  {
    id: 'ahmed-al-ajmi',
    name: 'Ahmed Al-Ajmi',
    arabicName: 'أحمد العجمي',
    country: 'Arabie Saoudite',
    style: 'fast',
    language: 'Arabe',
    totalSurahs: 114,
    rating: 4.6,
    followers: 950000,
    description: 'Récitation claire et rythmée, parfaite pour la mémorisation',
    avatar: '/api/placeholder/64/64',
    verified: true,
    featured: false
  },
  {
    id: 'abdulbasit-abdulsamad',
    name: 'Abdul Basit Abdul Samad',
    arabicName: 'عبد الباسط عبد الصمد',
    country: 'Égypte',
    style: 'melodious',
    language: 'Arabe',
    totalSurahs: 114,
    rating: 4.9,
    followers: 3200000,
    description: 'Légende de la récitation coranique, voix d\'or de l\'Égypte',
    avatar: '/api/placeholder/64/64',
    verified: true,
    featured: true
  },
  {
    id: 'muhammad-jibreel',
    name: 'Muhammad Jibreel',
    arabicName: 'محمد جبريل',
    country: 'Égypte',
    style: 'emotional',
    language: 'Arabe',
    totalSurahs: 114,
    rating: 4.8,
    followers: 1100000,
    description: 'Récitation profondément spirituelle et émouvante',
    avatar: '/api/placeholder/64/64',
    verified: true,
    featured: false
  },
  {
    id: 'nasser-al-qatami',
    name: 'Nasser Al-Qatami',
    arabicName: 'ناصر القطامي',
    country: 'Arabie Saoudite',
    style: 'slow',
    language: 'Arabe',
    totalSurahs: 114,
    rating: 4.6,
    followers: 800000,
    description: 'Récitation lente et contemplative, idéale pour la méditation',
    avatar: '/api/placeholder/64/64',
    verified: true,
    featured: false
  }
];

const surahs: Surah[] = [
  { id: 1, name: 'Al-Fatiha', arabicName: 'الفاتحة', englishName: 'The Opening', revelationType: 'meccan', totalVerses: 7, duration: '1:30', meaning: 'L\'Ouverture', downloadUrl: '', isDownloaded: true, isFavorite: true },
  { id: 2, name: 'Al-Baqarah', arabicName: 'البقرة', englishName: 'The Cow', revelationType: 'medinan', totalVerses: 286, duration: '2:30:00', meaning: 'La Vache', downloadUrl: '', isDownloaded: false, isFavorite: false },
  { id: 3, name: 'Al-Imran', arabicName: 'آل عمران', englishName: 'The Family of Imran', revelationType: 'medinan', totalVerses: 200, duration: '1:45:00', meaning: 'La Famille d\'Imran', downloadUrl: '', isDownloaded: false, isFavorite: true },
  { id: 36, name: 'Ya-Sin', arabicName: 'يس', englishName: 'Ya-Sin', revelationType: 'meccan', totalVerses: 83, duration: '25:00', meaning: 'Ya-Sin', downloadUrl: '', isDownloaded: true, isFavorite: true },
  { id: 55, name: 'Ar-Rahman', arabicName: 'الرحمن', englishName: 'The Most Merciful', revelationType: 'medinan', totalVerses: 78, duration: '18:00', meaning: 'Le Tout Miséricordieux', downloadUrl: '', isDownloaded: true, isFavorite: true },
  { id: 67, name: 'Al-Mulk', arabicName: 'الملك', englishName: 'The Kingdom', revelationType: 'meccan', totalVerses: 30, duration: '12:00', meaning: 'La Royauté', downloadUrl: '', isDownloaded: true, isFavorite: false },
  { id: 112, name: 'Al-Ikhlas', arabicName: 'الإخلاص', englishName: 'The Sincerity', revelationType: 'meccan', totalVerses: 4, duration: '0:30', meaning: 'Le Monothéisme Pur', downloadUrl: '', isDownloaded: true, isFavorite: true },
  { id: 113, name: 'Al-Falaq', arabicName: 'الفلق', englishName: 'The Daybreak', revelationType: 'meccan', totalVerses: 5, duration: '0:45', meaning: 'L\'Aube Naissante', downloadUrl: '', isDownloaded: true, isFavorite: false },
  { id: 114, name: 'An-Nas', arabicName: 'الناس', englishName: 'The Mankind', revelationType: 'meccan', totalVerses: 6, duration: '0:50', meaning: 'Les Hommes', downloadUrl: '', isDownloaded: true, isFavorite: false }
];

export function QuranListeningApp() {
  const [selectedRecitator, setSelectedRecitator] = useState<Recitator>(recitators[0]);
  const [selectedSurah, setSelectedSurah] = useState<Surah>(surahs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(90);
  const [volume, setVolume] = useState(75);
  const [isMuted, setIsMuted] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [showRecitators, setShowRecitators] = useState(false);
  const [showSurahs, setShowSurahs] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [nightMode, setNightMode] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying && currentTime < duration) {
        setCurrentTime(prev => prev + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, currentTime, duration]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const selectRecitator = (recitator: Recitator) => {
    setSelectedRecitator(recitator);
    setShowRecitators(false);
  };

  const selectSurah = (surah: Surah) => {
    setSelectedSurah(surah);
    setCurrentTime(0);
    const durationInSeconds = parseDuration(surah.duration);
    setDuration(durationInSeconds);
  };

  const parseDuration = (durationStr: string): number => {
    const parts = durationStr.split(':');
    if (parts.length === 2) {
      return parseInt(parts[0]) * 60 + parseInt(parts[1]);
    } else if (parts.length === 3) {
      return parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
    }
    return 90; // default
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getStyleColor = (style: string) => {
    switch (style) {
      case 'melodious': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'traditional': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'emotional': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'fast': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'slow': return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const filteredSurahs = surahs.filter(surah => 
    surah.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    surah.arabicName.includes(searchTerm) ||
    surah.englishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${nightMode ? 'bg-slate-900' : 'bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50'}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                <BookOpen className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="text-left">
                <h1 className="text-3xl font-bold text-emerald-800 dark:text-emerald-200">
                  Écoute du Saint Coran
                </h1>
                <p className="text-emerald-600 dark:text-emerald-300">
                  Intégré dans CED Bank Mobile
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setNightMode(!nightMode)}
                className="border-emerald-300"
              >
                {nightMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="outline" size="sm" className="border-emerald-300">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
              📖 {recitators.length} Récitateurs
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              🕌 114 Sourates
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              🎧 Qualité HD
            </Badge>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Lecteur Principal */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Headphones className="h-5 w-5 text-emerald-600" />
                      Lecture en cours
                    </CardTitle>
                    <CardDescription>
                      {selectedSurah.name} ({selectedSurah.arabicName})
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-emerald-100 text-emerald-800 mb-1">
                      {selectedSurah.revelationType === 'meccan' ? 'Mecquoise' : 'Médinoise'}
                    </Badge>
                    <p className="text-sm text-gray-500">{selectedSurah.totalVerses} versets</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Récitateur Actuel */}
                <div className="flex items-center gap-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                  <img 
                    src={selectedRecitator.avatar} 
                    alt={selectedRecitator.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{selectedRecitator.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {selectedRecitator.arabicName} • {selectedRecitator.country}
                    </p>
                  </div>
                  <Badge className={getStyleColor(selectedRecitator.style)}>
                    {selectedRecitator.style}
                  </Badge>
                </div>

                {/* Barre de Progression */}
                <div className="space-y-2">
                  <Progress value={(currentTime / duration) * 100} className="h-2" />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Contrôles */}
                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsShuffling(!isShuffling)}
                    className={isShuffling ? "text-emerald-600" : ""}
                  >
                    <Shuffle className="h-4 w-4" />
                  </Button>
                  
                  <Button variant="ghost" size="sm">
                    <SkipBack className="h-5 w-5" />
                  </Button>
                  
                  <Button
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700"
                  >
                    {isPlaying ? (
                      <Pause className="h-6 w-6 text-white" />
                    ) : (
                      <Play className="h-6 w-6 text-white ml-1" />
                    )}
                  </Button>
                  
                  <Button variant="ghost" size="sm">
                    <SkipForward className="h-5 w-5" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsRepeating(!isRepeating)}
                    className={isRepeating ? "text-emerald-600" : ""}
                  >
                    <Repeat className="h-4 w-4" />
                  </Button>
                </div>

                {/* Volume */}
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleMute}
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </Button>
                  <div className="flex-1">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={isMuted ? 0 : volume}
                      onChange={(e) => handleVolumeChange(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <span className="text-sm text-gray-500 w-8">{isMuted ? 0 : volume}</span>
                </div>
              </CardContent>
            </Card>

            {/* Récitateurs */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-600" />
                    Récitateurs ({recitators.length})
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowRecitators(!showRecitators)}
                  >
                    {showRecitators ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </div>
              </CardHeader>
              {showRecitators && (
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recitators.filter(r => r.featured).map((recitator) => (
                      <motion.div
                        key={recitator.id}
                        whileHover={{ scale: 1.02 }}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          selectedRecitator.id === recitator.id 
                            ? 'border-emerald-300 bg-emerald-50 dark:bg-emerald-900/20' 
                            : 'border-gray-200 hover:border-emerald-200'
                        }`}
                        onClick={() => selectRecitator(recitator)}
                      >
                        <div className="flex items-center gap-3">
                          <img 
                            src={recitator.avatar} 
                            alt={recitator.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-sm">{recitator.name}</h4>
                              {recitator.verified && (
                                <Badge variant="outline" className="text-xs">
                                  ✓
                                </Badge>
                              )}
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-300">
                              {recitator.country}
                            </p>
                            <div className="flex items-center gap-1 mt-1">
                              <Star className="h-3 w-3 text-yellow-500 fill-current" />
                              <span className="text-xs">{recitator.rating}</span>
                              <span className="text-xs text-gray-500">
                                ({recitator.followers.toLocaleString()})
                              </span>
                            </div>
                          </div>
                          <Badge className={getStyleColor(recitator.style)} variant="outline">
                            {recitator.style}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-4 text-center">
                    <Button variant="outline" size="sm" className="border-emerald-300">
                      <List className="h-4 w-4 mr-2" />
                      Voir tous les récitateurs
                    </Button>
                  </div>
                </CardContent>
              )}
            </Card>
          </motion.div>

          {/* Sourates */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-emerald-600" />
                    Sourates
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowSurahs(!showSurahs)}
                  >
                    {showSurahs ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </div>
                {showSurahs && (
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Rechercher une sourate..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardHeader>
              {showSurahs && (
                <CardContent>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {filteredSurahs.map((surah) => (
                      <motion.div
                        key={surah.id}
                        whileHover={{ scale: 1.01 }}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          selectedSurah.id === surah.id 
                            ? 'border-emerald-300 bg-emerald-50 dark:bg-emerald-900/20' 
                            : 'border-gray-200 hover:border-emerald-200'
                        }`}
                        onClick={() => selectSurah(surah)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-sm font-semibold text-emerald-600">
                              {surah.id}
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">{surah.name}</h4>
                              <p className="text-xs text-gray-600 dark:text-gray-300">
                                {surah.arabicName}
                              </p>
                              <p className="text-xs text-gray-500">
                                {surah.totalVerses} versets • {surah.duration}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            {surah.isFavorite && (
                              <Heart className="h-4 w-4 text-red-500 fill-current" />
                            )}
                            {surah.isDownloaded && (
                              <Download className="h-4 w-4 text-green-500" />
                            )}
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${
                                surah.revelationType === 'meccan' 
                                  ? 'border-orange-300 text-orange-600' 
                                  : 'border-blue-300 text-blue-600'
                              }`}
                            >
                              {surah.revelationType === 'meccan' ? 'M' : 'Md'}
                            </Badge>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          </motion.div>
        </div>

        {/* Fonctionnalités Supplémentaires */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Compass className="h-5 w-5 text-emerald-600" />
                Fonctionnalités Spirituelles CED Bank
              </CardTitle>
              <CardDescription>
                Intégration complète avec votre expérience bancaire islamique
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="p-4 rounded-full bg-emerald-100 dark:bg-emerald-900 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Mode Prière</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Pause automatique pendant les heures de prière avec rappel Qibla
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Download className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Écoute Hors Ligne</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Téléchargement des sourates favorites pour écoute sans connexion
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 rounded-full bg-purple-100 dark:bg-purple-900 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Minuteur Spirituel</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Programmation d'écoute quotidienne avec rappels personnalisés
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <audio ref={audioRef} />
      </div>
      
      <CEDFooter />
    </div>
  );
}