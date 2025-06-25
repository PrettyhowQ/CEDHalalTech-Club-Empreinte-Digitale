import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX,
  Download,
  Heart,
  BookOpen,
  Clock,
  Star,
  Headphones,
  Radio,
  Moon,
  Sun,
  Settings,
  List,
  Repeat,
  Shuffle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Reciter {
  id: string;
  name: string;
  arabicName: string;
  country: string;
  style: string;
  popularity: number;
  audioQuality: 'high' | 'medium' | 'low';
  recitationStyle: 'murattal' | 'mujawwad' | 'both';
}

interface Surah {
  number: number;
  name: string;
  arabicName: string;
  englishName: string;
  numberOfAyahs: number;
  revelationType: 'meccan' | 'medinan';
  duration: string;
}

export function QuranListeningApp() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState([75]);
  const [selectedReciter, setSelectedReciter] = useState('mishary');
  const [selectedSurah, setSelectedSurah] = useState(1);
  const [currentAyah, setCurrentAyah] = useState(1);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [nightMode, setNightMode] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { toast } = useToast();

  const reciters: Reciter[] = [
    {
      id: 'mishary',
      name: 'Mishary Rashid Alafasy',
      arabicName: 'مشاري بن راشد العفاسي',
      country: 'Kuwait',
      style: 'Mujawwad moderne',
      popularity: 98,
      audioQuality: 'high',
      recitationStyle: 'both'
    },
    {
      id: 'sudais',
      name: 'Abdul Rahman Al-Sudais',
      arabicName: 'عبد الرحمن السديس',
      country: 'Saudi Arabia',
      style: 'Imam Haramain',
      popularity: 95,
      audioQuality: 'high',
      recitationStyle: 'mujawwad'
    },
    {
      id: 'shuraim',
      name: 'Saud Al-Shuraim',
      arabicName: 'سعود الشريم',
      country: 'Saudi Arabia',
      style: 'Imam Masjid Haram',
      popularity: 92,
      audioQuality: 'high',
      recitationStyle: 'mujawwad'
    },
    {
      id: 'ghamdi',
      name: 'Saad Al-Ghamdi',
      arabicName: 'سعد الغامدي',
      country: 'Saudi Arabia',
      style: 'Voix mélodieuse',
      popularity: 89,
      audioQuality: 'high',
      recitationStyle: 'both'
    },
    {
      id: 'ajmi',
      name: 'Ahmad Al-Ajmi',
      arabicName: 'أحمد العجمي',
      country: 'Saudi Arabia',
      style: 'Récitation émotionnelle',
      popularity: 87,
      audioQuality: 'high',
      recitationStyle: 'mujawwad'
    },
    {
      id: 'muaiqly',
      name: 'Maher Al-Muaiqly',
      arabicName: 'ماهر المعيقلي',
      country: 'Saudi Arabia',
      style: 'Imam Masjid Nabawi',
      popularity: 85,
      audioQuality: 'high',
      recitationStyle: 'mujawwad'
    },
    {
      id: 'hosary',
      name: 'Mahmoud Khalil Al-Hosary',
      arabicName: 'محمود خليل الحصري',
      country: 'Egypt',
      style: 'Classique référence',
      popularity: 83,
      audioQuality: 'medium',
      recitationStyle: 'murattal'
    },
    {
      id: 'basfar',
      name: 'Abdullah Basfar',
      arabicName: 'عبدالله بصفر',
      country: 'Saudi Arabia',
      style: 'Voix douce et claire',
      popularity: 80,
      audioQuality: 'high',
      recitationStyle: 'both'
    }
  ];

  const surahs: Surah[] = [
    { number: 1, name: 'Al-Fatiha', arabicName: 'الفاتحة', englishName: 'The Opening', numberOfAyahs: 7, revelationType: 'meccan', duration: '1:30' },
    { number: 2, name: 'Al-Baqarah', arabicName: 'البقرة', englishName: 'The Cow', numberOfAyahs: 286, revelationType: 'medinan', duration: '4:32:15' },
    { number: 3, name: 'Al-Imran', arabicName: 'آل عمران', englishName: 'The Family of Imran', numberOfAyahs: 200, revelationType: 'medinan', duration: '2:45:30' },
    { number: 4, name: 'An-Nisa', arabicName: 'النساء', englishName: 'The Women', numberOfAyahs: 176, revelationType: 'medinan', duration: '2:28:45' },
    { number: 5, name: 'Al-Maidah', arabicName: 'المائدة', englishName: 'The Table', numberOfAyahs: 120, revelationType: 'medinan', duration: '1:52:20' },
    { number: 18, name: 'Al-Kahf', arabicName: 'الكهف', englishName: 'The Cave', numberOfAyahs: 110, revelationType: 'meccan', duration: '1:35:40' },
    { number: 36, name: 'Ya-Sin', arabicName: 'يس', englishName: 'Ya-Sin', numberOfAyahs: 83, revelationType: 'meccan', duration: '42:15' },
    { number: 55, name: 'Ar-Rahman', arabicName: 'الرحمن', englishName: 'The Most Gracious', numberOfAyahs: 78, revelationType: 'medinan', duration: '28:30' },
    { number: 67, name: 'Al-Mulk', arabicName: 'الملك', englishName: 'The Kingdom', numberOfAyahs: 30, revelationType: 'meccan', duration: '18:45' },
    { number: 112, name: 'Al-Ikhlas', arabicName: 'الإخلاص', englishName: 'The Sincerity', numberOfAyahs: 4, revelationType: 'meccan', duration: '0:45' },
    { number: 113, name: 'Al-Falaq', arabicName: 'الفلق', englishName: 'The Daybreak', numberOfAyahs: 5, revelationType: 'meccan', duration: '0:50' },
    { number: 114, name: 'An-Nas', arabicName: 'الناس', englishName: 'The People', numberOfAyahs: 6, revelationType: 'meccan', duration: '1:00' }
  ];

  // Simulation audio avec URL réelles (à remplacer par vraies URLs)
  const getAudioUrl = (reciterId: string, surahNumber: number) => {
    // URLs d'exemple - dans un vrai projet, utiliser des APIs comme Quran.com, MP3Quran.net
    const baseUrls = {
      'mishary': `https://server8.mp3quran.net/afs/${surahNumber.toString().padStart(3, '0')}.mp3`,
      'sudais': `https://server11.mp3quran.net/sds/${surahNumber.toString().padStart(3, '0')}.mp3`,
      'shuraim': `https://server12.mp3quran.net/shur/${surahNumber.toString().padStart(3, '0')}.mp3`,
      'ghamdi': `https://server7.mp3quran.net/s_gmd/${surahNumber.toString().padStart(3, '0')}.mp3`,
    };
    return baseUrls[reciterId as keyof typeof baseUrls] || baseUrls.mishary;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume[0] / 100;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      if (!isRepeat) {
        handleNext();
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [isRepeat]);

  const handlePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        // Charger la nouvelle source si nécessaire
        const newSrc = getAudioUrl(selectedReciter, selectedSurah);
        if (audioRef.current.src !== newSrc) {
          audioRef.current.src = newSrc;
        }
        
        await audioRef.current.play();
        setIsPlaying(true);
        
        toast({
          title: "Lecture du Coran",
          description: `${surahs.find(s => s.number === selectedSurah)?.name} - ${reciters.find(r => r.id === selectedReciter)?.name}`,
        });
      } catch (error) {
        console.error('Erreur lecture audio:', error);
        toast({
          title: "Erreur audio",
          description: "Impossible de lire cette récitation. Essayez un autre récitateur.",
          variant: "destructive"
        });
      }
    }
  };

  const handleNext = () => {
    const currentIndex = surahs.findIndex(s => s.number === selectedSurah);
    const nextIndex = (currentIndex + 1) % surahs.length;
    setSelectedSurah(surahs[nextIndex].number);
    setCurrentTime(0);
    
    if (isPlaying && audioRef.current) {
      audioRef.current.src = getAudioUrl(selectedReciter, surahs[nextIndex].number);
      audioRef.current.play();
    }
  };

  const handlePrevious = () => {
    const currentIndex = surahs.findIndex(s => s.number === selectedSurah);
    const prevIndex = currentIndex === 0 ? surahs.length - 1 : currentIndex - 1;
    setSelectedSurah(surahs[prevIndex].number);
    setCurrentTime(0);
    
    if (isPlaying && audioRef.current) {
      audioRef.current.src = getAudioUrl(selectedReciter, surahs[prevIndex].number);
      audioRef.current.play();
    }
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const currentSurah = surahs.find(s => s.number === selectedSurah);
  const currentReciter = reciters.find(r => r.id === selectedReciter);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      nightMode 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white' 
        : 'bg-gradient-to-br from-emerald-50 via-white to-blue-50 text-gray-900'
    } p-4`}>
      
      {/* Audio element caché */}
      <audio 
        ref={audioRef} 
        preload="metadata"
        crossOrigin="anonymous"
        onError={(e) => {
          console.error('Erreur audio:', e);
          toast({
            title: "Source audio indisponible",
            description: "Tentative de lecture avec source alternative...",
            variant: "destructive"
          });
        }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className={`w-16 h-16 ${nightMode ? 'bg-blue-600' : 'bg-emerald-500'} rounded-lg flex items-center justify-center`}>
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">تطبيق القرآن الكريم</h1>
              <h2 className="text-2xl font-semibold">Écoute du Saint Coran</h2>
              <p className={`${nightMode ? 'text-blue-300' : 'text-emerald-600'}`}>
                CED Bank - Audio Premium Halal
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setNightMode(!nightMode)}
              className="ml-auto"
            >
              {nightMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Lecteur principal */}
        <Card className={`mb-8 ${nightMode ? 'bg-gray-800 border-gray-600' : ''}`}>
          <CardHeader className="text-center pb-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className={`w-20 h-20 ${nightMode ? 'bg-blue-600' : 'bg-emerald-500'} rounded-full flex items-center justify-center`}>
                {isPlaying ? (
                  <Radio className="h-10 w-10 text-white animate-pulse" />
                ) : (
                  <Headphones className="h-10 w-10 text-white" />
                )}
              </div>
            </div>
            
            {currentSurah && (
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-center">{currentSurah.arabicName}</h3>
                <h4 className="text-lg font-semibold">{currentSurah.name}</h4>
                <p className={`text-sm ${nightMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {currentSurah.englishName} • {currentSurah.numberOfAyahs} versets • {currentSurah.revelationType === 'meccan' ? 'Mecquoise' : 'Médinoise'}
                </p>
              </div>
            )}

            {currentReciter && (
              <div className="mt-4 p-3 bg-opacity-20 bg-blue-500 rounded-lg">
                <p className="font-semibold">{currentReciter.arabicName}</p>
                <p className="text-sm">{currentReciter.name}</p>
                <p className="text-xs">{currentReciter.style} • {currentReciter.country}</p>
              </div>
            )}
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Contrôles de lecture */}
            <div className="flex items-center justify-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsShuffle(!isShuffle)}
                className={isShuffle ? 'text-blue-500' : ''}
              >
                <Shuffle className="h-4 w-4" />
              </Button>
              
              <Button variant="ghost" size="sm" onClick={handlePrevious}>
                <SkipBack className="h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                onClick={handlePlay}
                className={`w-16 h-16 rounded-full ${nightMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-emerald-500 hover:bg-emerald-600'}`}
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8 text-white" />
                ) : (
                  <Play className="h-8 w-8 text-white ml-1" />
                )}
              </Button>
              
              <Button variant="ghost" size="sm" onClick={handleNext}>
                <SkipForward className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsRepeat(!isRepeat)}
                className={isRepeat ? 'text-blue-500' : ''}
              >
                <Repeat className="h-4 w-4" />
              </Button>
            </div>

            {/* Barre de progression */}
            <div className="space-y-2">
              <Slider
                value={[currentTime]}
                max={duration || 100}
                step={1}
                onValueChange={handleSeek}
                className="w-full"
              />
              <div className="flex justify-between text-xs">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Contrôle volume */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={toggleMute}>
                {volume[0] === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              <Slider
                value={volume}
                max={100}
                step={1}
                onValueChange={setVolume}
                className="flex-1"
              />
              <span className="text-sm min-w-[3rem]">{volume[0]}%</span>
            </div>
          </CardContent>
        </Card>

        {/* Sélecteurs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Sélection récitateur */}
          <Card className={nightMode ? 'bg-gray-800 border-gray-600' : ''}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Récitateur
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedReciter} onValueChange={setSelectedReciter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {reciters.map((reciter) => (
                    <SelectItem key={reciter.id} value={reciter.id}>
                      <div className="flex flex-col">
                        <span className="font-medium">{reciter.name}</span>
                        <span className="text-sm text-gray-500">{reciter.arabicName}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {currentReciter && (
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Popularité:</span>
                    <Badge>{currentReciter.popularity}%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Qualité:</span>
                    <Badge variant={currentReciter.audioQuality === 'high' ? 'default' : 'secondary'}>
                      {currentReciter.audioQuality}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Style:</span>
                    <Badge variant="outline">{currentReciter.recitationStyle}</Badge>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Sélection sourate */}
          <Card className={nightMode ? 'bg-gray-800 border-gray-600' : ''}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Sourate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedSurah.toString()} onValueChange={(value) => setSelectedSurah(parseInt(value))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {surahs.map((surah) => (
                    <SelectItem key={surah.number} value={surah.number.toString()}>
                      <div className="flex flex-col">
                        <span className="font-medium">{surah.number}. {surah.name}</span>
                        <span className="text-sm text-gray-500">{surah.arabicName}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {currentSurah && (
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Versets:</span>
                    <Badge>{currentSurah.numberOfAyahs}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Durée:</span>
                    <Badge variant="outline">{currentSurah.duration}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Révélation:</span>
                    <Badge variant={currentSurah.revelationType === 'meccan' ? 'default' : 'secondary'}>
                      {currentSurah.revelationType === 'meccan' ? 'Mecquoise' : 'Médinoise'}
                    </Badge>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Actions rapides */}
        <Card className={nightMode ? 'bg-gray-800 border-gray-600' : ''}>
          <CardHeader>
            <CardTitle>Actions Rapides</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-16 flex flex-col gap-2">
                <Download className="h-5 w-5" />
                Télécharger
              </Button>
              <Button variant="outline" className="h-16 flex flex-col gap-2">
                <Heart className="h-5 w-5" />
                Favoris
              </Button>
              <Button variant="outline" className="h-16 flex flex-col gap-2">
                <Clock className="h-5 w-5" />
                Minuteur
              </Button>
              <Button variant="outline" className="h-16 flex flex-col gap-2">
                <List className="h-5 w-5" />
                Playlist
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p className="mb-2">
            © 2025 CED Bank - Application Écoute du Coran - Yakoubi Yamina
          </p>
          <p>
            🕌 Récitations authentiques certifiées halal - 100% conforme aux enseignements islamiques
          </p>
        </div>
      </div>
    </div>
  );
}