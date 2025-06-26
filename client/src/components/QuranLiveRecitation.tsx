import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  Radio,
  MapPin,
  Clock,
  BookOpen,
  Settings,
  Download,
  Share2,
  Heart,
  Globe,
  Wifi,
  Circle,
  Square,
  Eye,
  EyeOff,
  RotateCcw,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Star,
  Moon,
  Sun,
  Languages,
  Headphones
} from 'lucide-react';

interface Reciter {
  id: string;
  name: string;
  nameArabic: string;
  country: string;
  style: string;
  audioUrl: string;
  image: string;
  popularity: number;
  speciality: string;
}

interface LiveStream {
  id: string;
  name: string;
  nameArabic: string;
  location: string;
  timezone: string;
  streamUrl: string;
  status: 'live' | 'scheduled' | 'offline';
  nextPrayer?: string;
  currentSurah?: string;
  currentVerse?: number;
  viewers: number;
  quality: '720p' | '1080p' | '4K';
}

interface Verse {
  id: number;
  arabic: string;
  transliteration: string;
  translation: string;
  audioTimestamp: number;
}

interface Surah {
  id: number;
  name: string;
  nameArabic: string;
  revelationPlace: 'Mecque' | 'Médine';
  versesCount: number;
  verses: Verse[];
}

export function QuranLiveRecitation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentReciter, setCurrentReciter] = useState<string>('mishary');
  const [currentSurah, setCurrentSurah] = useState<number>(1);
  const [currentVerse, setCurrentVerse] = useState<number>(1);
  const [volume, setVolume] = useState([75]);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiveMode, setIsLiveMode] = useState(false);
  const [selectedStream, setSelectedStream] = useState<string>('kaaba');
  const [showArabic, setShowArabic] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);
  const [showTransliteration, setShowTransliteration] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);
  const [repeatMode, setRepeatMode] = useState<'none' | 'verse' | 'surah'>('none');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userLocation, setUserLocation] = useState<{country: string, timezone: string}>({
    country: 'France',
    timezone: 'Europe/Paris'
  });

  const audioRef = useRef<HTMLAudioElement>(null);

  const reciters: Reciter[] = [
    {
      id: 'mishary',
      name: 'Mishary Rashid Al-Afasy',
      nameArabic: 'مشاري راشد العفاسي',
      country: 'Koweït',
      style: 'Hafs',
      audioUrl: 'https://server8.mp3quran.net/afs/',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400',
      popularity: 98,
      speciality: 'Voix mélodieuse et émouvante'
    },
    {
      id: 'sudais',
      name: 'Abdul Rahman Al-Sudais',
      nameArabic: 'عبد الرحمن السديس',
      country: 'Arabie Saoudite',
      style: 'Hafs',
      audioUrl: 'https://server11.mp3quran.net/sudais/',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      popularity: 96,
      speciality: 'Imam de la Grande Mosquée'
    },
    {
      id: 'ghamidi',
      name: 'Saad Al-Ghamidi',
      nameArabic: 'سعد الغامدي',
      country: 'Arabie Saoudite',
      style: 'Hafs',
      audioUrl: 'https://server7.mp3quran.net/s_gmd/',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      popularity: 94,
      speciality: 'Récitation claire et précise'
    },
    {
      id: 'shuraim',
      name: 'Saud Al-Shuraim',
      nameArabic: 'سعود الشريم',
      country: 'Arabie Saoudite',
      style: 'Hafs',
      audioUrl: 'https://server8.mp3quran.net/shur/',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      popularity: 92,
      speciality: 'Imam de La Mecque'
    },
    {
      id: 'maher',
      name: 'Maher Al-Muaiqly',
      nameArabic: 'ماهر المعيقلي',
      country: 'Arabie Saoudite',
      style: 'Hafs',
      audioUrl: 'https://server12.mp3quran.net/maher/',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400',
      popularity: 90,
      speciality: 'Imam de Médine'
    },
    {
      id: 'husary',
      name: 'Mahmoud Khalil Al-Husary',
      nameArabic: 'محمود خليل الحصري',
      country: 'Égypte',
      style: 'Hafs',
      audioUrl: 'https://server13.mp3quran.net/husr/',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400',
      popularity: 88,
      speciality: 'Récitateur légendaire'
    },
    {
      id: 'ajmi',
      name: 'Ahmad Al-Ajmi',
      nameArabic: 'أحمد العجمي',
      country: 'Arabie Saoudite',
      style: 'Hafs',
      audioUrl: 'https://server10.mp3quran.net/ajm/',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400',
      popularity: 86,
      speciality: 'Style unique et captivant'
    },
    {
      id: 'minshawi',
      name: 'Mohamed Siddiq Al-Minshawi',
      nameArabic: 'محمد صديق المنشاوي',
      country: 'Égypte',
      style: 'Hafs',
      audioUrl: 'https://server14.mp3quran.net/minsh/',
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400',
      popularity: 85,
      speciality: 'Maître de la psalmodie'
    }
  ];

  const liveStreams: LiveStream[] = [
    {
      id: 'kaaba',
      name: 'Mosquée de La Mecque',
      nameArabic: 'المسجد الحرام',
      location: 'La Mecque, Arabie Saoudite',
      timezone: 'Asia/Riyadh',
      streamUrl: 'https://live-hls-web-aje.getaj.net/AJE/01.m3u8',
      status: 'live',
      nextPrayer: 'Maghrib',
      currentSurah: 'Al-Fatiha',
      currentVerse: 7,
      viewers: 45692,
      quality: '4K'
    },
    {
      id: 'medina',
      name: 'Mosquée du Prophète',
      nameArabic: 'المسجد النبوي',
      location: 'Médine, Arabie Saoudite',
      timezone: 'Asia/Riyadh',
      streamUrl: 'https://live-hls-web-aje.getaj.net/AJE/02.m3u8',
      status: 'live',
      nextPrayer: 'Isha',
      currentSurah: 'Al-Baqarah',
      currentVerse: 255,
      viewers: 32841,
      quality: '1080p'
    },
    {
      id: 'jerusalem',
      name: 'Mosquée Al-Aqsa',
      nameArabic: 'المسجد الأقصى',
      location: 'Jérusalem, Palestine',
      timezone: 'Asia/Jerusalem',
      streamUrl: 'https://live-hls-web-aje.getaj.net/AJE/03.m3u8',
      status: 'scheduled',
      nextPrayer: 'Fajr',
      viewers: 18653,
      quality: '720p'
    }
  ];

  const surahs: Surah[] = [
    {
      id: 1,
      name: 'Al-Fatiha',
      nameArabic: 'الفاتحة',
      revelationPlace: 'Mecque',
      versesCount: 7,
      verses: [
        {
          id: 1,
          arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
          transliteration: 'Bismillahi rahmani raheem',
          translation: 'Au nom d\'Allah, le Tout Miséricordieux, le Très Miséricordieux',
          audioTimestamp: 0
        },
        {
          id: 2,
          arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
          transliteration: 'Alhamdu lillahi rabbil alameen',
          translation: 'Louange à Allah, Seigneur de l\'univers',
          audioTimestamp: 3.5
        },
        {
          id: 3,
          arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
          transliteration: 'Ar-rahmani raheem',
          translation: 'Le Tout Miséricordieux, le Très Miséricordieux',
          audioTimestamp: 7.2
        },
        {
          id: 4,
          arabic: 'مَالِكِ يَوْمِ الدِّينِ',
          transliteration: 'Maliki yawmid deen',
          translation: 'Maître du Jour de la rétribution',
          audioTimestamp: 10.8
        },
        {
          id: 5,
          arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
          transliteration: 'Iyyaka na\'budu wa iyyaka nasta\'een',
          translation: 'C\'est Toi [Seul] que nous adorons, et c\'est Toi [Seul] dont nous implorons secours',
          audioTimestamp: 14.5
        },
        {
          id: 6,
          arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
          transliteration: 'Ihdinassiratal mustaqeem',
          translation: 'Guide-nous dans le droit chemin',
          audioTimestamp: 19.2
        },
        {
          id: 7,
          arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
          transliteration: 'Siratal ladheena an\'amta alayhim ghayril maghdoobi alayhim walad dalleen',
          translation: 'le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés',
          audioTimestamp: 23.8
        }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Détecter la localisation de l'utilisateur
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // Ici vous pourriez utiliser une API de géolocalisation pour déterminer le pays et fuseau horaire
        fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=API_KEY&format=json&by=position&lat=${position.coords.latitude}&lng=${position.coords.longitude}`)
          .then(response => response.json())
          .then(data => {
            setUserLocation({
              country: data.countryName || 'France',
              timezone: data.zoneName || 'Europe/Paris'
            });
          })
          .catch(() => {
            // Utiliser les valeurs par défaut en cas d'erreur
          });
      });
    }

    return () => clearInterval(timer);
  }, []);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume[0] / 100;
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const getCurrentStream = () => {
    return liveStreams.find(stream => stream.id === selectedStream) || liveStreams[0];
  };

  const getCurrentReciter = () => {
    return reciters.find(reciter => reciter.id === currentReciter) || reciters[0];
  };

  const getCurrentSurah = () => {
    return surahs.find(surah => surah.id === currentSurah) || surahs[0];
  };

  const getLocalTime = (timezone: string) => {
    return new Intl.DateTimeFormat('fr-FR', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(currentTime);
  };

  const getPrayerTimes = () => {
    // Simulation des heures de prière pour l'utilisateur
    return {
      fajr: '05:30',
      dhuhr: '12:15',
      asr: '15:45',
      maghrib: '18:20',
      isha: '19:45'
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header avec statut en direct */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Radio className="h-6 w-6 text-red-500 animate-pulse" />
            <Badge className="bg-red-600 text-white">
              <Circle className="h-3 w-3 mr-2 fill-current animate-pulse" />
              EN DIRECT
            </Badge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Récitation du Saint Coran
          </h1>
          <p className="text-xl text-gray-600">
            Diffusion en direct des Lieux Saints • Récitateurs renommés • Suivi synchronisé
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Colonne principale - Lecteur et texte */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Contrôles de mode */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Mode d'écoute
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Récitation</span>
                    <Switch
                      checked={isLiveMode}
                      onCheckedChange={setIsLiveMode}
                    />
                    <span className="text-sm">Direct</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {isLiveMode ? (
                  <div className="space-y-4">
                    <h3 className="font-semibold">Diffusions en direct disponibles</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {liveStreams.map((stream) => (
                        <div
                          key={stream.id}
                          className={`p-4 rounded-lg border cursor-pointer transition-all ${
                            selectedStream === stream.id
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-200 hover:border-green-300'
                          }`}
                          onClick={() => setSelectedStream(stream.id)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">{stream.name}</h4>
                            <Badge className={`${
                              stream.status === 'live' ? 'bg-red-600' : 
                              stream.status === 'scheduled' ? 'bg-yellow-600' : 'bg-gray-600'
                            } text-white`}>
                              {stream.status === 'live' ? 'LIVE' : 
                               stream.status === 'scheduled' ? 'PRÉVU' : 'HORS LIGNE'}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{stream.nameArabic}</p>
                          <p className="text-xs text-gray-500">{stream.location}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-gray-500">
                              {stream.viewers.toLocaleString()} spectateurs
                            </span>
                            <span className="text-xs font-medium text-green-600">
                              {stream.quality}
                            </span>
                          </div>
                          {stream.status === 'live' && (
                            <div className="mt-2 text-xs text-gray-600">
                              🕐 {getLocalTime(stream.timezone)} • {stream.currentSurah} v.{stream.currentVerse}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    {/* Info diffusion actuelle */}
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-4 w-4 text-green-600" />
                        <span className="font-medium">{getCurrentStream().name}</span>
                        <Circle className="h-2 w-2 text-red-500 fill-current animate-pulse" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Heure locale : {getLocalTime(getCurrentStream().timezone)} • 
                        Prochaine prière : {getCurrentStream().nextPrayer}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="font-semibold">Récitateurs disponibles</h3>
                    <div className="grid md:grid-cols-2 gap-4 max-h-64 overflow-y-auto">
                      {reciters.map((reciter) => (
                        <div
                          key={reciter.id}
                          className={`p-3 rounded-lg border cursor-pointer transition-all ${
                            currentReciter === reciter.id
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-300'
                          }`}
                          onClick={() => setCurrentReciter(reciter.id)}
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={reciter.image}
                              alt={reciter.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium text-sm">{reciter.name}</h4>
                              <p className="text-xs text-gray-600">{reciter.nameArabic}</p>
                              <p className="text-xs text-gray-500">{reciter.country}</p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                                <span className="text-xs">{reciter.popularity}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Lecteur audio/vidéo */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {isLiveMode ? <Radio className="h-5 w-5" /> : <Headphones className="h-5 w-5" />}
                  {isLiveMode ? 'Diffusion en direct' : 'Récitation audio'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  
                  {/* Info récitateur/diffusion */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg">
                    {isLiveMode ? (
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                          <Radio className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{getCurrentStream().name}</h3>
                          <p className="text-gray-600">{getCurrentStream().nameArabic}</p>
                          <p className="text-sm text-gray-500">{getCurrentStream().location}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-4">
                        <img
                          src={getCurrentReciter().image}
                          alt={getCurrentReciter().name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-bold text-lg">{getCurrentReciter().name}</h3>
                          <p className="text-gray-600">{getCurrentReciter().nameArabic}</p>
                          <p className="text-sm text-gray-500">{getCurrentReciter().speciality}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Contrôles de lecture */}
                  <div className="flex items-center justify-center gap-4">
                    <Button variant="outline" size="sm">
                      <SkipBack className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={handlePlayPause}
                      size="lg"
                      className="w-16 h-16 rounded-full"
                    >
                      {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
                    </Button>
                    <Button variant="outline" size="sm">
                      <SkipForward className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Contrôles volume */}
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" onClick={toggleMute}>
                      {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </Button>
                    <Slider
                      value={volume}
                      onValueChange={handleVolumeChange}
                      max={100}
                      step={1}
                      className="flex-1"
                    />
                    <span className="text-sm text-gray-500 w-8">{volume[0]}%</span>
                  </div>

                  {/* Options d'affichage */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Texte arabe</span>
                      <Switch checked={showArabic} onCheckedChange={setShowArabic} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Traduction</span>
                      <Switch checked={showTranslation} onCheckedChange={setShowTranslation} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Translittération</span>
                      <Switch checked={showTransliteration} onCheckedChange={setShowTransliteration} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Défilement auto</span>
                      <Switch checked={autoScroll} onCheckedChange={setAutoScroll} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Texte du Coran avec suivi */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    {getCurrentSurah().name} - {getCurrentSurah().nameArabic}
                  </CardTitle>
                  <Badge variant="outline">
                    Verset {currentVerse}/{getCurrentSurah().versesCount}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 max-h-96 overflow-y-auto">
                  {getCurrentSurah().verses.map((verse) => (
                    <div
                      key={verse.id}
                      className={`p-4 rounded-lg transition-all ${
                        verse.id === currentVerse
                          ? 'bg-blue-50 border-2 border-blue-200 shadow-md'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          verse.id === currentVerse
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {verse.id}
                        </div>
                        <div className="flex-1 space-y-3">
                          {showArabic && (
                            <p className="text-2xl text-right font-arabic leading-relaxed text-gray-800">
                              {verse.arabic}
                            </p>
                          )}
                          {showTransliteration && (
                            <p className="text-lg italic text-gray-600">
                              {verse.transliteration}
                            </p>
                          )}
                          {showTranslation && (
                            <p className="text-base text-gray-700 leading-relaxed">
                              {verse.translation}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Colonne latérale - Informations et contrôles */}
          <div className="space-y-6">
            
            {/* Heures de prière locales */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Heures de Prière
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">📍 {userLocation.country}</span>
                    <span className="text-sm text-gray-500">
                      {getLocalTime(userLocation.timezone)}
                    </span>
                  </div>
                  {Object.entries(getPrayerTimes()).map(([prayer, time]) => (
                    <div key={prayer} className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="capitalize">{prayer}</span>
                      <span className="font-mono font-medium">{time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Statistiques en direct */}
            {isLiveMode && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wifi className="h-5 w-5" />
                    Diffusion en direct
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Circle className="h-3 w-3 text-red-500 fill-current animate-pulse" />
                      <span className="text-sm font-medium">Connexion stable</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-600">
                          {getCurrentStream().viewers.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">Spectateurs</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">
                          {getCurrentStream().quality}
                        </div>
                        <div className="text-xs text-gray-500">Qualité</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 p-3 rounded-lg">
                      <p className="text-sm font-medium mb-1">Diffusion actuelle</p>
                      <p className="text-xs text-gray-600">
                        {getCurrentStream().currentSurah} - Verset {getCurrentStream().currentVerse}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Actions rapides */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Télécharger
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    Partager
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    Favoris
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Languages className="h-4 w-4" />
                    Langues
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Mode répétition */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Repeat className="h-5 w-5" />
                  Répétition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['none', 'verse', 'surah'].map((mode) => (
                    <div
                      key={mode}
                      className={`p-3 rounded-lg border cursor-pointer transition-all ${
                        repeatMode === mode
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => setRepeatMode(mode as typeof repeatMode)}
                    >
                      <span className="capitalize">
                        {mode === 'none' ? 'Aucune' : 
                         mode === 'verse' ? 'Verset' : 'Sourate'}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Audio element */}
        <audio
          ref={audioRef}
          src={`${getCurrentReciter().audioUrl}001.mp3`}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onLoadedData={() => {
            if (audioRef.current) {
              audioRef.current.volume = volume[0] / 100;
            }
          }}
        />
      </div>
    </div>
  );
}

export default QuranLiveRecitation;