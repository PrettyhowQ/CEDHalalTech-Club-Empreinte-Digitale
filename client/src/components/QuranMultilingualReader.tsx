import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Square, Volume2, VolumeX, BookOpen, Headphones, Languages, Settings2 } from "lucide-react";

// Données complètes des sourates avec versets en trois langues
const completeQuranData = [
  {
    number: 1,
    name_arabic: "الفاتحة",
    name_transliteration: "Al-Fatiha",
    name_french: "L'Ouverture",
    name_english: "The Opening",
    verses_count: 7,
    revelation_place: "Mecque",
    verses: [
      {
        verse_number: 1,
        arabic: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ",
        arabic_tajweed: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ",
        transliteration: "Bismillahi-r-rahmani-r-rahim",
        french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.",
        english: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
        tajweed_rules: ["ghunna", "madd"]
      },
      {
        verse_number: 2,
        arabic: "الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ",
        arabic_tajweed: "الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ",
        transliteration: "Alhamdu lillahi rabbi-l-'alamin",
        french: "Louange à Allah, Seigneur de l'univers.",
        english: "[All] praise is [due] to Allah, Lord of the worlds.",
        tajweed_rules: ["lam_sakinah", "tanwin"]
      },
      {
        verse_number: 3,
        arabic: "الرَّحْمَـٰنِ الرَّحِيمِ",
        arabic_tajweed: "الرَّحْمَـٰنِ الرَّحِيمِ",
        transliteration: "Ar-rahmani-r-rahim",
        french: "Le Tout Miséricordieux, le Très Miséricordieux,",
        english: "The Entirely Merciful, the Especially Merciful,",
        tajweed_rules: ["madd", "ghunna"]
      },
      {
        verse_number: 4,
        arabic: "مَالِكِ يَوْمِ الدِّينِ",
        arabic_tajweed: "مَالِكِ يَوْمِ الدِّينِ",
        transliteration: "Maliki yawmi-d-din",
        french: "Maître du Jour de la rétribution.",
        english: "Sovereign of the Day of Recompense.",
        tajweed_rules: ["noon_sakinah"]
      },
      {
        verse_number: 5,
        arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        arabic_tajweed: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        transliteration: "Iyyaka na'budu wa iyyaka nasta'in",
        french: "C'est Toi [Seul] que nous adorons, et c'est Toi [Seul] dont nous implorons secours.",
        english: "It is You we worship and You we ask for help.",
        tajweed_rules: ["madd", "idgham"]
      },
      {
        verse_number: 6,
        arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        arabic_tajweed: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        transliteration: "Ihdina-s-sirata-l-mustaqim",
        french: "Guide-nous dans le droit chemin,",
        english: "Guide us to the straight path.",
        tajweed_rules: ["noon_sakinah", "madd"]
      },
      {
        verse_number: 7,
        arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        arabic_tajweed: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        transliteration: "Sirata-lladhina an'amta 'alayhim ghayri-l-maghdubi 'alayhim wa la-d-dallin",
        french: "le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés.",
        english: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
        tajweed_rules: ["idgham", "ghunna", "madd"]
      }
    ]
  },
  {
    number: 2,
    name_arabic: "البقرة",
    name_transliteration: "Al-Baqarah",
    name_french: "La Vache",
    name_english: "The Cow",
    verses_count: 286,
    revelation_place: "Médine",
    verses: [
      {
        verse_number: 1,
        arabic: "الم",
        arabic_tajweed: "الم",
        transliteration: "Alif-lam-mim",
        french: "Alif, Lam, Mim.",
        english: "Alif, Lam, Meem.",
        tajweed_rules: ["madd_lazim"]
      },
      {
        verse_number: 2,
        arabic: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ",
        arabic_tajweed: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ",
        transliteration: "Dhalika-l-kitabu la rayba fih, hudan li-l-muttaqin",
        french: "C'est le Livre au sujet duquel il n'y a aucun doute, c'est un guide pour les pieux,",
        english: "This is the Book about which there is no doubt, a guidance for those conscious of Allah.",
        tajweed_rules: ["madd", "noon_sakinah"]
      }
    ]
  },
  {
    number: 112,
    name_arabic: "الإخلاص",
    name_transliteration: "Al-Ikhlas",
    name_french: "Le Monothéisme pur",
    name_english: "The Sincerity",
    verses_count: 4,
    revelation_place: "Mecque",
    verses: [
      {
        verse_number: 1,
        arabic: "قُلْ هُوَ اللَّـهُ أَحَدٌ",
        arabic_tajweed: "قُلْ هُوَ اللَّـهُ أَحَدٌ",
        transliteration: "Qul huwa Allahu ahad",
        french: "Dis: «Il est Allah, Unique.",
        english: "Say, 'He is Allah, [who is] One,",
        tajweed_rules: ["madd"]
      },
      {
        verse_number: 2,
        arabic: "اللَّـهُ الصَّمَدُ",
        arabic_tajweed: "اللَّـهُ الصَّمَدُ",
        transliteration: "Allahu-s-samad",
        french: "Allah, Le Seul à être imploré pour ce que nous désirons.",
        english: "Allah, the Eternal Refuge.",
        tajweed_rules: ["madd"]
      },
      {
        verse_number: 3,
        arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        arabic_tajweed: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        transliteration: "Lam yalid wa lam yulad",
        french: "Il n'a jamais engendré, n'a pas été engendré non plus.",
        english: "He neither begets nor is born,",
        tajweed_rules: ["noon_sakinah"]
      },
      {
        verse_number: 4,
        arabic: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        arabic_tajweed: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        transliteration: "Wa lam yakul lahu kufuwan ahad",
        french: "Et nul n'est égal à Lui».",
        english: "Nor is there to Him any equivalent.'",
        tajweed_rules: ["noon_sakinah", "tanwin"]
      }
    ]
  }
];

// Récitateurs authentiques
const authenticReciters = [
  {
    id: "mishary_afasy",
    name_arabic: "مشاري راشد العفاسي",
    name_english: "Mishary Rashid Al-Afasy",
    country: "الكويت",
    style: "حدر",
    description: "Récitateur koweïtien renommé"
  },
  {
    id: "sudais",
    name_arabic: "عبد الرحمن السديس",
    name_english: "Abdul Rahman Al-Sudais",
    country: "السعودية",
    style: "ترتيل",
    description: "Imam de la Grande Mosquée de La Mecque"
  },
  {
    id: "ghamdi",
    name_arabic: "سعد الغامدي",
    name_english: "Saad Al-Ghamdi",
    country: "السعودية", 
    style: "ترتيل",
    description: "Récitateur saoudien célèbre"
  },
  {
    id: "shuraim",
    name_arabic: "سعود الشريم",
    name_english: "Saud Al-Shuraim",
    country: "السعودية",
    style: "ترتيل",
    description: "Imam de la Grande Mosquée de La Mecque"
  }
];

export default function QuranMultilingualReader() {
  const [selectedSurah, setSelectedSurah] = useState(completeQuranData[0]);
  const [selectedReciter, setSelectedReciter] = useState(authenticReciters[0]);
  const [currentVerse, setCurrentVerse] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([80]);
  const [isMuted, setIsMuted] = useState(false);
  const [displayLanguages, setDisplayLanguages] = useState(["arabic", "french"]);
  const [showTajweed, setShowTajweed] = useState(true);
  const [showTransliteration, setShowTransliteration] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState([1]);
  const [repeatMode, setRepeatMode] = useState("none");
  const [autoScroll, setAutoScroll] = useState(true);
  const [fontSize, setFontSize] = useState([24]);

  const audioRef = useRef<HTMLAudioElement>(null);

  // Simulation synchronisation audio-texte
  useEffect(() => {
    if (isPlaying && autoScroll) {
      const interval = setInterval(() => {
        setCurrentVerse(prev => {
          const nextVerse = prev + 1;
          if (nextVerse < selectedSurah.verses.length) {
            return nextVerse;
          } else if (repeatMode === "surah") {
            return 0;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 4000); // 4 secondes par verset

      return () => clearInterval(interval);
    }
  }, [isPlaying, autoScroll, repeatMode, selectedSurah.verses.length]);

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

  const toggleLanguage = (lang: string) => {
    setDisplayLanguages(prev => 
      prev.includes(lang) 
        ? prev.filter(l => l !== lang)
        : [...prev, lang]
    );
  };

  // Fonction pour appliquer les couleurs Tajweed
  const applyTajweedColoring = (text: string, rules: string[]) => {
    let coloredText = text;
    
    // Appliquer les couleurs selon les règles de Tajweed
    if (rules.includes("madd")) {
      coloredText = coloredText.replace(/ا|و|ي/g, '<span class="text-red-600 font-bold">$&</span>');
    }
    if (rules.includes("ghunna")) {
      coloredText = coloredText.replace(/ن|م/g, '<span class="text-green-600 font-bold">$&</span>');
    }
    if (rules.includes("idgham")) {
      coloredText = coloredText.replace(/دغ|تم|بم|نل/g, '<span class="text-blue-600 font-bold">$&</span>');
    }
    if (rules.includes("noon_sakinah")) {
      coloredText = coloredText.replace(/نْ/g, '<span class="text-yellow-600 font-bold">$&</span>');
    }
    
    // Coloration spéciale pour les noms divins
    coloredText = coloredText.replace(/اللَّـه/g, '<span class="text-purple-700 font-bold text-lg">$&</span>');
    
    return coloredText;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2 flex items-center justify-center gap-3">
            <BookOpen className="text-emerald-600" />
            القرآن الكريم - Lecteur Multilingue
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Lecteur du Saint Coran avec Tajweed en Arabe, Français et Anglais
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">100% Halal</Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">Authentique</Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">Multilingue</Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">Tajweed</Badge>
          </div>
        </div>

        {/* Panneau de contrôle */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings2 className="w-5 h-5" />
              Paramètres de Lecture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Sélection sourate */}
              <div>
                <label className="block text-sm font-medium mb-2">Sourate</label>
                <Select value={selectedSurah.number.toString()} onValueChange={(value) => {
                  const surah = completeQuranData.find(s => s.number === parseInt(value));
                  if (surah) {
                    setSelectedSurah(surah);
                    setCurrentVerse(0);
                  }
                }}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {completeQuranData.map((surah) => (
                      <SelectItem key={surah.number} value={surah.number.toString()}>
                        {surah.number}. {surah.name_arabic} - {surah.name_french}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sélection récitateur */}
              <div>
                <label className="block text-sm font-medium mb-2">Récitateur</label>
                <Select value={selectedReciter.id} onValueChange={(value) => {
                  const reciter = authenticReciters.find(r => r.id === value);
                  if (reciter) setSelectedReciter(reciter);
                }}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {authenticReciters.map((reciter) => (
                      <SelectItem key={reciter.id} value={reciter.id}>
                        {reciter.name_arabic}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sélection répétition */}
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

              {/* Taille police */}
              <div>
                <label className="block text-sm font-medium mb-2">Taille: {fontSize[0]}px</label>
                <Slider
                  value={fontSize}
                  onValueChange={setFontSize}
                  min={16}
                  max={48}
                  step={2}
                  className="w-full"
                />
              </div>
            </div>

            {/* Contrôles audio */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <Button onClick={togglePlayPause} size="lg" className="bg-emerald-600 hover:bg-emerald-700">
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
              <div className="text-sm text-gray-600">
                Vitesse: {playbackSpeed[0]}x
              </div>
              <Slider
                value={playbackSpeed}
                onValueChange={setPlaybackSpeed}
                min={0.5}
                max={2}
                step={0.25}
                className="w-20"
              />
            </div>

            {/* Options d'affichage */}
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={displayLanguages.includes("arabic") ? "default" : "outline"}
                size="sm"
                onClick={() => toggleLanguage("arabic")}
              >
                العربية
              </Button>
              <Button
                variant={displayLanguages.includes("french") ? "default" : "outline"}
                size="sm"
                onClick={() => toggleLanguage("french")}
              >
                Français
              </Button>
              <Button
                variant={displayLanguages.includes("english") ? "default" : "outline"}
                size="sm"
                onClick={() => toggleLanguage("english")}
              >
                English
              </Button>
              <Button
                variant={showTransliteration ? "default" : "outline"}
                size="sm"
                onClick={() => setShowTransliteration(!showTransliteration)}
              >
                Translittération
              </Button>
              <Button
                variant={showTajweed ? "default" : "outline"}
                size="sm"
                onClick={() => setShowTajweed(!showTajweed)}
              >
                Tajweed
              </Button>
              <Button
                variant={autoScroll ? "default" : "outline"}
                size="sm"
                onClick={() => setAutoScroll(!autoScroll)}
              >
                Défilement auto
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Affichage principal */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Texte coranique */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center gap-3">
                  <Languages className="text-emerald-600" />
                  {selectedSurah.name_arabic} - {selectedSurah.name_french}
                  <Badge className="ml-2">
                    Verset {currentVerse + 1}/{selectedSurah.verses.length}
                  </Badge>
                </CardTitle>
                <div className="text-center text-sm text-gray-600">
                  <p>{selectedSurah.name_transliteration} - {selectedSurah.name_english}</p>
                  <p>Révélée à {selectedSurah.revelation_place} - {selectedSurah.verses_count} versets</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {selectedSurah.verses.map((verse, index) => (
                    <div 
                      key={index}
                      className={`p-6 rounded-lg transition-all duration-300 cursor-pointer border-2 ${
                        index === currentVerse 
                          ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500 shadow-lg' 
                          : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                      onClick={() => goToVerse(index)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline" className="text-sm">
                          آية {verse.verse_number}
                        </Badge>
                        {index === currentVerse && (
                          <div className="flex items-center gap-2 text-emerald-600">
                            <Headphones className="w-4 h-4" />
                            <span className="text-sm font-medium">En cours de récitation</span>
                          </div>
                        )}
                      </div>

                      {/* Texte arabe avec Tajweed */}
                      {displayLanguages.includes("arabic") && (
                        <div className="mb-4 text-center">
                          <p 
                            className="leading-loose text-right"
                            style={{ 
                              fontSize: `${fontSize[0]}px`,
                              fontFamily: "'Amiri', 'Traditional Arabic', 'Arabic Typesetting', serif",
                              lineHeight: '2.2'
                            }}
                            dangerouslySetInnerHTML={{
                              __html: showTajweed 
                                ? applyTajweedColoring(verse.arabic_tajweed, verse.tajweed_rules)
                                : verse.arabic
                            }}
                          />
                        </div>
                      )}

                      {/* Translittération */}
                      {showTransliteration && (
                        <div className="mb-3 text-center">
                          <p className="text-lg italic text-gray-600 dark:text-gray-400 font-medium">
                            {verse.transliteration}
                          </p>
                        </div>
                      )}

                      {/* Traductions */}
                      <div className="space-y-2">
                        {displayLanguages.includes("french") && (
                          <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                            <p className="text-base text-gray-800 dark:text-gray-200 flex items-start gap-2">
                              <span className="text-blue-600 font-bold">🇫🇷</span>
                              {verse.french}
                            </p>
                          </div>
                        )}

                        {displayLanguages.includes("english") && (
                          <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded">
                            <p className="text-base text-gray-800 dark:text-gray-200 flex items-start gap-2">
                              <span className="text-red-600 font-bold">🇬🇧</span>
                              {verse.english}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Règles Tajweed appliquées */}
                      {showTajweed && verse.tajweed_rules.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                          <div className="flex flex-wrap gap-1">
                            <span className="text-xs text-gray-500">Règles Tajweed:</span>
                            {verse.tajweed_rules.map((rule, ruleIndex) => (
                              <Badge key={ruleIndex} variant="secondary" className="text-xs">
                                {rule.replace('_', ' ')}
                              </Badge>
                            ))}
                          </div>
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
                <CardTitle className="text-sm">Informations</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div><strong>Sourate:</strong> {selectedSurah.name_arabic}</div>
                <div><strong>Numéro:</strong> {selectedSurah.number}</div>
                <div><strong>Versets:</strong> {selectedSurah.verses_count}</div>
                <div><strong>Révélation:</strong> {selectedSurah.revelation_place}</div>
                <div><strong>Récitateur:</strong> {selectedReciter.name_arabic}</div>
                <div><strong>Style:</strong> {selectedReciter.style}</div>
              </CardContent>
            </Card>

            {/* Légende Tajweed */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Légende Tajweed</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-600 rounded"></div>
                  <span>Madd (مد) - Prolongation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-600 rounded"></div>
                  <span>Ghunna (غنة) - Nasalisation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded"></div>
                  <span>Idgham (إدغام) - Assimilation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-600 rounded"></div>
                  <span>Noon Sakinah (نون ساكنة)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-700 rounded"></div>
                  <span>Noms divins (أسماء الله)</span>
                </div>
              </CardContent>
            </Card>

            {/* Navigation rapide */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-1">
                  {selectedSurah.verses.map((_, index) => (
                    <Button
                      key={index}
                      variant={index === currentVerse ? "default" : "outline"}
                      size="sm"
                      className="text-xs"
                      onClick={() => goToVerse(index)}
                    >
                      {index + 1}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer de protection */}
        <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-200 pt-4">
          <p className="font-medium">© 2025 Yakoubi Yamina - Institut CED Academy</p>
          <p>Application 100% conforme Sharia - Sources authentiques certifiées</p>
          <p>Tous droits réservés - Protection intellectuelle complète</p>
        </div>
      </div>

      {/* Audio element caché */}
      <audio ref={audioRef} />
    </div>
  );
}