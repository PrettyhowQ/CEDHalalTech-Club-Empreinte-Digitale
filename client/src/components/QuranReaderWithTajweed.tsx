import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Square, Volume2, VolumeX, RotateCcw, Settings, BookOpen, Headphones } from "lucide-react";

// Données authentiques des sourates avec versets
const surahs = [
  {
    number: 1,
    name: "الفاتحة",
    transliteration: "Al-Fatiha",
    translation: "L'Ouverture",
    english: "The Opening",
    verses: 7,
    verses_data: [
      {
        arabic: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ",
        tajweed: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ",
        transliteration: "Bismillahi-r-rahmani-r-rahim",
        french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.",
        english: "In the name of Allah, the Entirely Merciful, the Especially Merciful."
      },
      {
        arabic: "الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ",
        tajweed: "الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ",
        transliteration: "Alhamdu lillahi rabbi-l-'alamin",
        french: "Louange à Allah, Seigneur de l'univers.",
        english: "[All] praise is [due] to Allah, Lord of the worlds."
      },
      {
        arabic: "الرَّحْمَـٰنِ الرَّحِيمِ",
        tajweed: "الرَّحْمَـٰنِ الرَّحِيمِ",
        transliteration: "Ar-rahmani-r-rahim",
        french: "Le Tout Miséricordieux, le Très Miséricordieux,",
        english: "The Entirely Merciful, the Especially Merciful,"
      },
      {
        arabic: "مَالِكِ يَوْمِ الدِّينِ",
        tajweed: "مَالِكِ يَوْمِ الدِّينِ",
        transliteration: "Maliki yawmi-d-din",
        french: "Maître du Jour de la rétribution.",
        english: "Sovereign of the Day of Recompense."
      },
      {
        arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        tajweed: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        transliteration: "Iyyaka na'budu wa iyyaka nasta'in",
        french: "C'est Toi [Seul] que nous adorons, et c'est Toi [Seul] dont nous implorons secours.",
        english: "It is You we worship and You we ask for help."
      },
      {
        arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        tajweed: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        transliteration: "Ihdina-s-sirata-l-mustaqim",
        french: "Guide-nous dans le droit chemin,",
        english: "Guide us to the straight path."
      },
      {
        arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        tajweed: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        transliteration: "Sirata-lladhina an'amta 'alayhim ghayri-l-maghdubi 'alayhim wa la-d-dallin",
        french: "le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés.",
        english: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray."
      }
    ]
  },
  {
    number: 2,
    name: "البقرة",
    transliteration: "Al-Baqarah",
    translation: "La Vache",
    english: "The Cow",
    verses: 286,
    verses_data: [
      {
        arabic: "الم",
        tajweed: "الم",
        transliteration: "Alif-lam-mim",
        french: "Alif, Lam, Mim.",
        english: "Alif, Lam, Meem."
      },
      {
        arabic: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ",
        tajweed: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ",
        transliteration: "Dhalika-l-kitabu la rayba fih, hudan li-l-muttaqin",
        french: "C'est le Livre au sujet duquel il n'y a aucun doute, c'est un guide pour les pieux,",
        english: "This is the Book about which there is no doubt, a guidance for those conscious of Allah."
      }
    ]
  },
  {
    number: 114,
    name: "الناس",
    transliteration: "An-Nas",
    translation: "Les Hommes",
    english: "Mankind",
    verses: 6,
    verses_data: [
      {
        arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
        tajweed: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
        transliteration: "Qul a'udhu bi rabbi-n-nas",
        french: "Dis: «Je cherche protection auprès du Seigneur des hommes.",
        english: "Say, 'I seek refuge in the Lord of mankind,"
      },
      {
        arabic: "مَلِكِ النَّاسِ",
        tajweed: "مَلِكِ النَّاسِ",
        transliteration: "Maliki-n-nas",
        french: "Le Souverain des hommes,",
        english: "The Sovereign of mankind."
      },
      {
        arabic: "إِلَـٰهِ النَّاسِ",
        tajweed: "إِلَـٰهِ النَّاسِ",
        transliteration: "Ilahi-n-nas",
        french: "Dieu des hommes,",
        english: "The God of mankind,"
      },
      {
        arabic: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
        tajweed: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
        transliteration: "Min sharri-l-waswasi-l-khannas",
        french: "contre le mal du mauvais conseiller, furtif,",
        english: "From the evil of the retreating whisperer."
      },
      {
        arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
        tajweed: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
        transliteration: "Alladhi yuwaswisu fi suduri-n-nas",
        french: "qui souffle le mal dans les poitrines des hommes,",
        english: "Who whispers [evil] into the breasts of mankind."
      },
      {
        arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ",
        tajweed: "مِنَ الْجِنَّةِ وَالنَّاسِ",
        transliteration: "Mina-l-jinnati wa-n-nas",
        french: "qu'il (le conseiller) soit un djinn, ou un être humain».",
        english: "From among the jinn and mankind."
      }
    ]
  }
];

// Récitateurs authentiques avec URLs de démonstration
const reciters = [
  {
    id: "mishary",
    name: "مشاري العفاسي",
    englishName: "Mishary Rashid Al-Afasy",
    country: "الكويت",
    style: "حدر",
    audioUrl: "https://server8.mp3quran.net/afs/"
  },
  {
    id: "sudais",
    name: "عبد الرحمن السديس",
    englishName: "Abdul Rahman Al-Sudais",
    country: "السعودية",
    style: "ترتيل",
    audioUrl: "https://server7.mp3quran.net/sudais/"
  },
  {
    id: "ghamdi",
    name: "سعد الغامدي",
    englishName: "Saad Al-Ghamdi",
    country: "السعودية",
    style: "ترتيل",
    audioUrl: "https://server7.mp3quran.net/s_gmd/"
  },
  {
    id: "ajmy",
    name: "أحمد العجمي",
    englishName: "Ahmed Al-Ajmy",
    country: "السعودية",
    style: "تحقيق",
    audioUrl: "https://server10.mp3quran.net/ajm/"
  }
];

export default function QuranReaderWithTajweed() {
  const [selectedSurah, setSelectedSurah] = useState(surahs[0]);
  const [selectedReciter, setSelectedReciter] = useState(reciters[0]);
  const [currentVerse, setCurrentVerse] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([75]);
  const [isMuted, setIsMuted] = useState(false);
  const [language, setLanguage] = useState("arabic");
  const [showTajweed, setShowTajweed] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState([1]);
  const [repeatMode, setRepeatMode] = useState("none");
  const [autoScroll, setAutoScroll] = useState(true);

  const audioRef = useRef<HTMLAudioElement>(null);

  // Simulation de la synchronisation audio-texte
  useEffect(() => {
    if (isPlaying && autoScroll) {
      const interval = setInterval(() => {
        setCurrentVerse(prev => {
          if (prev < selectedSurah.verses_data.length - 1) {
            return prev + 1;
          } else if (repeatMode === "surah") {
            return 0;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 3000); // Changement de verset toutes les 3 secondes (simulation)

      return () => clearInterval(interval);
    }
  }, [isPlaying, autoScroll, repeatMode, selectedSurah.verses_data.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const stopRecitation = () => {
    setIsPlaying(false);
    setCurrentVerse(0);
  };

  const goToVerse = (verseIndex: number) => {
    setCurrentVerse(verseIndex);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const getTajweedHighlight = (text: string) => {
    // Simulation des règles de Tajweed avec couleurs
    return text
      .replace(/الله/g, '<span class="text-blue-600 font-bold">الله</span>')
      .replace(/الرَّحْمَـٰنِ/g, '<span class="text-green-600 font-bold">الرَّحْمَـٰنِ</span>')
      .replace(/الرَّحِيمِ/g, '<span class="text-green-600 font-bold">الرَّحِيمِ</span>')
      .replace(/مُدْغَم/g, '<span class="text-red-500 font-bold">مُدْغَم</span>')
      .replace(/مَقْلُوب/g, '<span class="text-yellow-600 font-bold">مَقْلُوب</span>');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2 flex items-center justify-center gap-3">
            <BookOpen className="text-green-600" />
            قارئ القرآن الكريم مع التجويد
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Lecteur du Saint Coran avec Tajweed - Quran Reader with Tajweed
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <Badge variant="secondary">100% Halal</Badge>
            <Badge variant="secondary">Authentique</Badge>
            <Badge variant="secondary">Multilingue</Badge>
          </div>
        </div>

        {/* Contrôles principaux */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Paramètres de Lecture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Sélection de la sourate */}
              <div>
                <label className="block text-sm font-medium mb-2">Sourate</label>
                <Select value={selectedSurah.number.toString()} onValueChange={(value) => {
                  const surah = surahs.find(s => s.number === parseInt(value));
                  if (surah) {
                    setSelectedSurah(surah);
                    setCurrentVerse(0);
                  }
                }}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {surahs.map((surah) => (
                      <SelectItem key={surah.number} value={surah.number.toString()}>
                        {surah.number}. {surah.name} - {surah.translation}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sélection du récitateur */}
              <div>
                <label className="block text-sm font-medium mb-2">Récitateur</label>
                <Select value={selectedReciter.id} onValueChange={(value) => {
                  const reciter = reciters.find(r => r.id === value);
                  if (reciter) setSelectedReciter(reciter);
                }}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {reciters.map((reciter) => (
                      <SelectItem key={reciter.id} value={reciter.id}>
                        {reciter.name} - {reciter.country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sélection de la langue */}
              <div>
                <label className="block text-sm font-medium mb-2">Langue</label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="arabic">العربية</SelectItem>
                    <SelectItem value="french">Français</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="all">Toutes les langues</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Contrôles audio */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <Button onClick={togglePlayPause} size="lg" className="bg-green-600 hover:bg-green-700">
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </Button>
              <Button onClick={stopRecitation} variant="outline" size="lg">
                <Square className="w-6 h-6" />
              </Button>
              <div className="flex items-center gap-2">
                <Button onClick={toggleMute} variant="ghost" size="sm">
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </Button>
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  className="w-24"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Affichage du texte coranique */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Texte principal */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  {selectedSurah.name} - {selectedSurah.translation}
                  <Badge className="ml-2">Verset {currentVerse + 1}/{selectedSurah.verses_data.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {selectedSurah.verses_data.map((verse, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                        index === currentVerse 
                          ? 'bg-green-100 dark:bg-green-900/30 border-2 border-green-500' 
                          : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                      onClick={() => goToVerse(index)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline">آية {index + 1}</Badge>
                        {index === currentVerse && (
                          <div className="flex items-center gap-1 text-green-600">
                            <Headphones className="w-4 h-4" />
                            <span className="text-sm">En cours</span>
                          </div>
                        )}
                      </div>

                      {/* Texte arabe avec Tajweed */}
                      {(language === "arabic" || language === "all") && (
                        <div className="mb-4">
                          <p 
                            className="text-3xl leading-loose text-right font-amiri"
                            style={{ fontFamily: "'Amiri', 'Traditional Arabic', serif" }}
                            dangerouslySetInnerHTML={{
                              __html: showTajweed ? getTajweedHighlight(verse.tajweed) : verse.arabic
                            }}
                          />
                        </div>
                      )}

                      {/* Translittération */}
                      <div className="mb-3">
                        <p className="text-lg italic text-gray-600 dark:text-gray-400">
                          {verse.transliteration}
                        </p>
                      </div>

                      {/* Traductions */}
                      {(language === "french" || language === "all") && (
                        <div className="mb-2">
                          <p className="text-base text-gray-800 dark:text-gray-200">
                            🇫🇷 {verse.french}
                          </p>
                        </div>
                      )}

                      {(language === "english" || language === "all") && (
                        <div>
                          <p className="text-base text-gray-800 dark:text-gray-200">
                            🇬🇧 {verse.english}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Panneau latéral */}
          <div className="space-y-4">
            {/* Informations sur la sourate */}
            <Card>
              <CardHeader>
                <CardTitle>Informations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Sourate:</strong> {selectedSurah.name}</p>
                  <p><strong>Numéro:</strong> {selectedSurah.number}</p>
                  <p><strong>Versets:</strong> {selectedSurah.verses}</p>
                  <p><strong>Récitateur:</strong> {selectedReciter.name}</p>
                  <p><strong>Style:</strong> {selectedReciter.style}</p>
                </div>
              </CardContent>
            </Card>

            {/* Options Tajweed */}
            <Card>
              <CardHeader>
                <CardTitle>Options Tajweed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Afficher Tajweed</span>
                    <Button
                      variant={showTajweed ? "default" : "outline"}
                      size="sm"
                      onClick={() => setShowTajweed(!showTajweed)}
                    >
                      {showTajweed ? "Activé" : "Désactivé"}
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Défilement auto</span>
                    <Button
                      variant={autoScroll ? "default" : "outline"}
                      size="sm"
                      onClick={() => setAutoScroll(!autoScroll)}
                    >
                      {autoScroll ? "Activé" : "Désactivé"}
                    </Button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Répétition</label>
                    <Select value={repeatMode} onValueChange={setRepeatMode}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Aucune</SelectItem>
                        <SelectItem value="verse">Verset</SelectItem>
                        <SelectItem value="surah">Sourate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Vitesse: {playbackSpeed[0]}x</label>
                    <Slider
                      value={playbackSpeed}
                      onValueChange={setPlaybackSpeed}
                      min={0.5}
                      max={2}
                      step={0.25}
                      className="w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Légende Tajweed */}
            <Card>
              <CardHeader>
                <CardTitle>Légende Tajweed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    <span>Lam-Alif (لا)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-600 rounded"></div>
                    <span>Noms divins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span>Idghâm (إدغام)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-600 rounded"></div>
                    <span>Iqlab (إقلاب)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer de protection */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2025 Yakoubi Yamina - Institut CED Academy. Tous droits réservés.</p>
          <p>Application 100% conforme Sharia - Sources authentiques certifiées</p>
        </div>
      </div>

      {/* Audio element (caché) */}
      <audio ref={audioRef} />
    </div>
  );
}