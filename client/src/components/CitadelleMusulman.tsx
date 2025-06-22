import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Clock,
  Compass,
  Calendar,
  Home,
  Car,
  Plane,
  Shield,
  Heart,
  Star,
  MapPin,
  Bell,
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Moon,
  Sun,
  Navigation,
  Phone,
  Briefcase,
  Utensils,
  Bed,
  DoorOpen,
  DoorClosed
} from 'lucide-react';

interface Douaa {
  id: string;
  category: 'voyage' | 'maison' | 'travail' | 'quotidien' | 'assurance' | 'urgence';
  title: string;
  arabic: string;
  transliteration: string;
  french: string;
  context: string;
  benefits: string[];
  insuranceLink?: string;
  audioUrl?: string;
}

interface PrayerTime {
  name: string;
  time: string;
  arabic: string;
  status: 'completed' | 'current' | 'upcoming';
}

interface IslamicDate {
  hijri: string;
  gregorian: string;
  islamicMonth: string;
  islamicYear: number;
  specialDay?: string;
}

export function CitadelleMusulman() {
  const [activeTab, setActiveTab] = useState('douaas');
  const [selectedCategory, setSelectedCategory] = useState('quotidien');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [qiblaDirection, setQiblaDirection] = useState(45); // En degrés depuis le nord
  const [currentTime, setCurrentTime] = useState(new Date());
  const [prayerNotifications, setPrayerNotifications] = useState(true);
  const [isJummaMode, setIsJummaMode] = useState(false);

  // Mise à jour de l'heure
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Vérification du mode Jumma (vendredi)
  useEffect(() => {
    const isFriday = currentTime.getDay() === 5;
    const jummaTime = currentTime.getHours() >= 11 && currentTime.getHours() <= 14;
    setIsJummaMode(isFriday && jummaTime);
  }, [currentTime]);

  const douaas: Douaa[] = [
    {
      id: 'voyage-depart',
      category: 'voyage',
      title: 'Douaa du départ en voyage',
      arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ',
      transliteration: 'Subhana alladhi sakhkhara lana hadha wa ma kunna lahu muqrineen wa inna ila rabbina lamunqaliboon',
      french: 'Gloire à Celui qui a mis ceci à notre service alors que nous n\'étions pas capables de les dominer. Et c\'est vers notre Seigneur que nous retournerons.',
      context: 'À réciter lors du départ en voyage, particulièrement pour Hajj et Omra',
      benefits: [
        'Protection divine pendant le voyage',
        'Voyage béni et sécurisé',
        'Rappel de la destination finale'
      ],
      insuranceLink: 'Al-Aman CED Voyage & Hajj Protection vous accompagne spirituellement et matériellement'
    },
    {
      id: 'entrer-maison',
      category: 'maison',
      title: 'Douaa en entrant chez soi',
      arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلَجِ وَخَيْرَ الْمَخْرَجِ بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا',
      transliteration: 'Allahumma inni as\'aluka khayral-mawlaji wa khayral-makhraji bismillahi walajna wa bismillahi kharajna wa \'ala Allahi rabbina tawakkalna',
      french: 'Ô Allah, je Te demande le meilleur de l\'entrée et le meilleur de la sortie. Au nom d\'Allah nous entrons, au nom d\'Allah nous sortons, et en Allah notre Seigneur nous plaçons notre confiance.',
      context: 'À réciter en entrant dans sa maison',
      benefits: [
        'Bénédiction sur le foyer',
        'Protection de la maison',
        'Paix familiale'
      ],
      insuranceLink: 'Al-Aman CED Home Secure Takaful protège votre foyer béni'
    },
    {
      id: 'sortir-maison',
      category: 'maison',
      title: 'Douaa en sortant de chez soi',
      arabic: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
      transliteration: 'Bismillahi tawakkaltu \'ala Allah wa la hawla wa la quwwata illa billah',
      french: 'Au nom d\'Allah, je place ma confiance en Allah, et il n\'y a de force ni de puissance qu\'en Allah.',
      context: 'À réciter en sortant de chez soi',
      benefits: [
        'Protection pendant les déplacements',
        'Guidance divine',
        'Préservation du mal'
      ],
      insuranceLink: 'Al-Aman CED vous protège dès que vous sortez de chez vous'
    },
    {
      id: 'entrer-toilettes',
      category: 'quotidien',
      title: 'Douaa avant d\'entrer aux toilettes',
      arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
      transliteration: 'Allahumma inni a\'oodhu bika minal-khubthi wal-khaba\'ith',
      french: 'Ô Allah, je cherche protection auprès de Toi contre les démons mâles et femelles.',
      context: 'À réciter avant d\'entrer aux toilettes',
      benefits: [
        'Protection contre les démons',
        'Purification spirituelle',
        'Respect de l\'étiquette islamique'
      ]
    },
    {
      id: 'sortir-toilettes',
      category: 'quotidien',
      title: 'Douaa en sortant des toilettes',
      arabic: 'غُفْرَانَكَ',
      transliteration: 'Ghufranaka',
      french: 'Je demande Ton pardon.',
      context: 'À réciter en sortant des toilettes',
      benefits: [
        'Demande de pardon',
        'Purification spirituelle',
        'Remerciement à Allah'
      ]
    },
    {
      id: 'aller-travail',
      category: 'travail',
      title: 'Douaa avant d\'aller au travail',
      arabic: 'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ',
      transliteration: 'Allahumma barik lana fima razaqtana wa qina \'adhab an-nar',
      french: 'Ô Allah, bénis-nous dans ce que Tu nous as accordé et préserve-nous du châtiment du Feu.',
      context: 'À réciter avant de se rendre au travail',
      benefits: [
        'Bénédiction dans le travail',
        'Revenus halal et bénis',
        'Protection divine'
      ],
      insuranceLink: 'Al-Aman CED Business Halal Pro protège votre activité professionnelle'
    },
    {
      id: 'conduire-voiture',
      category: 'voyage',
      title: 'Douaa en conduisant',
      arabic: 'اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَٰذَا الْبِرَّ وَالتَّقْوَىٰ وَمِنَ الْعَمَلِ مَا تَرْضَىٰ',
      transliteration: 'Allahumma inna nas\'aluka fi safarina hadha al-birra wat-taqwa wa minal-\'amali ma tardha',
      french: 'Ô Allah, nous Te demandons dans ce voyage la piété, la crainte révérencielle et des œuvres qui Te satisfont.',
      context: 'À réciter en conduisant ou lors d\'un trajet',
      benefits: [
        'Voyage sécurisé',
        'Protection sur la route',
        'Conduite responsable'
      ],
      insuranceLink: 'Al-Aman CED Auto Protection Takaful vous couvre sur toutes les routes'
    },
    {
      id: 'coucher',
      category: 'quotidien',
      title: 'Douaa avant de dormir',
      arabic: 'اللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا',
      transliteration: 'Allahumma bismika amootu wa ahya',
      french: 'Ô Allah, c\'est en Ton nom que je meurs et que je vis.',
      context: 'À réciter avant de se coucher',
      benefits: [
        'Sommeil paisible',
        'Protection nocturne',
        'Préparation à l\'au-delà'
      ]
    },
    {
      id: 'reveil',
      category: 'quotidien',
      title: 'Douaa au réveil',
      arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
      transliteration: 'Al-hamdu lillahi alladhi ahyana ba\'da ma amatana wa ilayhin-nushoor',
      french: 'Louange à Allah qui nous a rendu la vie après nous avoir fait mourir et c\'est vers Lui que se fera la résurrection.',
      context: 'À réciter au réveil',
      benefits: [
        'Gratitude pour un nouveau jour',
        'Rappel de la résurrection',
        'Début béni de la journée'
      ]
    }
  ];

  const prayerTimes: PrayerTime[] = [
    { name: 'Fajr', time: '05:12', arabic: 'الفجر', status: 'completed' },
    { name: 'Dhuhr', time: '12:18', arabic: 'الظهر', status: 'completed' },
    { name: 'Asr', time: '15:42', arabic: 'العصر', status: 'current' },
    { name: 'Maghrib', time: '18:05', arabic: 'المغرب', status: 'upcoming' },
    { name: 'Isha', time: '19:35', arabic: 'العشاء', status: 'upcoming' }
  ];

  const islamicDate: IslamicDate = {
    hijri: '15 Jumada Al-Thani 1446',
    gregorian: '22 Décembre 2024',
    islamicMonth: 'Jumada Al-Thani',
    islamicYear: 1446,
    specialDay: undefined
  };

  const categoryIcons = {
    quotidien: <Clock className="h-4 w-4" />,
    maison: <Home className="h-4 w-4" />,
    voyage: <Plane className="h-4 w-4" />,
    travail: <Briefcase className="h-4 w-4" />,
    assurance: <Shield className="h-4 w-4" />,
    urgence: <Heart className="h-4 w-4" />
  };

  const categoryColors = {
    quotidien: 'bg-blue-100 text-blue-800',
    maison: 'bg-green-100 text-green-800',
    voyage: 'bg-purple-100 text-purple-800',
    travail: 'bg-orange-100 text-orange-800',
    assurance: 'bg-indigo-100 text-indigo-800',
    urgence: 'bg-red-100 text-red-800'
  };

  const filteredDouaas = douaas.filter(douaa => douaa.category === selectedCategory);

  const toggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
    // Ici on pourrait implémenter la lecture audio réelle
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getPrayerStatus = (time: string) => {
    const now = currentTime;
    const [hours, minutes] = time.split(':').map(Number);
    const prayerTime = new Date(now);
    prayerTime.setHours(hours, minutes, 0, 0);
    
    if (prayerTime < now) return 'completed';
    if (Math.abs(prayerTime.getTime() - now.getTime()) < 30 * 60 * 1000) return 'current';
    return 'upcoming';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header avec mode Jumma */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          {isJummaMode && (
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold">🕌 Mode Jumma Activé</h3>
              <p>Votre téléphone est en mode silencieux pour la prière du vendredi</p>
              <div className="text-sm mt-2">Prochaine prière: Jumma à 12:30</div>
            </motion.div>
          )}

          <div className="flex justify-center items-center gap-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 flex items-center justify-center"
            >
              <BookOpen className="h-10 w-10 text-white" />
            </motion.div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
                La Citadelle du Musulman
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700">
                Al-Aman CED - Spiritualité & Protection
              </h2>
            </div>
          </div>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Votre compagnon spirituel quotidien intégré à votre assurance Takaful. 
            Douaas, prières, Qibla et calendrier islamique pour une vie bénie et protégée.
          </p>
        </motion.div>

        {/* Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="douaas">Douaas & Invocations</TabsTrigger>
            <TabsTrigger value="prayers">Horaires Prières</TabsTrigger>
            <TabsTrigger value="qibla">Boussole Qibla</TabsTrigger>
            <TabsTrigger value="calendar">Calendrier Islamique</TabsTrigger>
          </TabsList>

          {/* Douaas et Invocations */}
          <TabsContent value="douaas" className="space-y-6">
            
            {/* Sélecteur de catégories */}
            <Card>
              <CardHeader>
                <CardTitle>Catégories d'Invocations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {Object.entries(categoryIcons).map(([category, icon]) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category as any)}
                      className="flex items-center gap-2 h-auto p-3"
                    >
                      {icon}
                      <span className="capitalize">{category}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Liste des douaas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredDouaas.map((douaa, index) => (
                <motion.div
                  key={douaa.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge className={categoryColors[douaa.category]}>
                          {categoryIcons[douaa.category]}
                          <span className="ml-1 capitalize">{douaa.category}</span>
                        </Badge>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={toggleAudio}
                          >
                            {isAudioPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                          </Button>
                          <Button size="sm" variant="outline">
                            <RotateCcw className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{douaa.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Texte arabe */}
                      <div className="p-4 bg-green-50 rounded-lg border-r-4 border-green-500">
                        <div className="text-right text-xl leading-relaxed" dir="rtl" style={{ fontFamily: 'Amiri, serif' }}>
                          {douaa.arabic}
                        </div>
                      </div>

                      {/* Translittération */}
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="text-sm font-medium text-blue-800 mb-1">Translittération:</div>
                        <div className="italic text-blue-700">{douaa.transliteration}</div>
                      </div>

                      {/* Traduction française */}
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm font-medium text-gray-800 mb-1">Traduction:</div>
                        <div className="text-gray-700">{douaa.french}</div>
                      </div>

                      {/* Contexte */}
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Contexte: </span>
                        {douaa.context}
                      </div>

                      {/* Bénéfices */}
                      <div>
                        <div className="text-sm font-medium text-gray-800 mb-2">Bénéfices:</div>
                        <div className="space-y-1">
                          {douaa.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs">
                              <Star className="h-3 w-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Lien assurance */}
                      {douaa.insuranceLink && (
                        <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                          <div className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-purple-600 mt-0.5" />
                            <div className="text-xs text-purple-700">
                              <span className="font-medium">Protection Al-Aman CED: </span>
                              {douaa.insuranceLink}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Horaires des prières */}
          <TabsContent value="prayers" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Heure actuelle */}
              <Card className="bg-gradient-to-r from-blue-100 to-green-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Heure Actuelle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-700">
                      {formatTime(currentTime)}
                    </div>
                    <div className="text-lg text-gray-600 mt-2">
                      {currentTime.toLocaleDateString('fr-FR', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    {isJummaMode && (
                      <Badge className="bg-green-100 text-green-800 mt-2">
                        Mode Jumma Actif
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Prochaine prière */}
              <Card className="bg-gradient-to-r from-purple-100 to-pink-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Prochaine Prière
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-700">Asr</div>
                    <div className="text-xl text-purple-600 mt-1">15:42</div>
                    <div className="text-lg arabic-text mt-2" dir="rtl">العصر</div>
                    <div className="text-sm text-gray-600 mt-2">
                      Dans 23 minutes
                    </div>
                    <Button 
                      className="mt-4" 
                      size="sm"
                      onClick={() => setPrayerNotifications(!prayerNotifications)}
                    >
                      {prayerNotifications ? <Volume2 className="h-4 w-4 mr-2" /> : <VolumeX className="h-4 w-4 mr-2" />}
                      {prayerNotifications ? 'Notifications ON' : 'Notifications OFF'}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Horaires du jour */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Horaires des Prières - Dubai
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {prayerTimes.map((prayer, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg text-center transition-all duration-300 ${
                          prayer.status === 'current' 
                            ? 'bg-green-100 border-2 border-green-500 shadow-lg' 
                            : prayer.status === 'completed'
                            ? 'bg-gray-100 opacity-75'
                            : 'bg-blue-50 border border-blue-200'
                        }`}
                      >
                        <div className="text-lg font-bold">{prayer.name}</div>
                        <div className="text-xl font-bold text-blue-700">{prayer.time}</div>
                        <div className="text-sm arabic-text mt-1" dir="rtl">{prayer.arabic}</div>
                        {prayer.status === 'current' && (
                          <Badge className="bg-green-500 text-white mt-2">
                            En cours
                          </Badge>
                        )}
                        {prayer.status === 'completed' && (
                          <Badge className="bg-gray-500 text-white mt-2">
                            Accomplie
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Gestion du temps autour des prières */}
            <Card className="bg-gradient-to-r from-amber-100 to-orange-100">
              <CardHeader>
                <CardTitle>Gestion du Temps Islamique</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Moon className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                    <h3 className="font-bold">Temps de Repos</h3>
                    <p className="text-sm text-gray-600">Entre Maghrib et Isha: temps familial recommandé</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Sun className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                    <h3 className="font-bold">Temps Productif</h3>
                    <p className="text-sm text-gray-600">Après Fajr: moment idéal pour le travail et l'étude</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <h3 className="font-bold">Temps Spirituel</h3>
                    <p className="text-sm text-gray-600">Avant chaque prière: préparation et dhikr</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Boussole Qibla */}
          <TabsContent value="qibla" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Boussole */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Compass className="h-5 w-5" />
                    Direction de la Qibla
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <div className="relative w-64 h-64">
                      {/* Boussole de base */}
                      <div className="w-full h-full rounded-full border-4 border-gray-300 bg-gradient-to-br from-blue-50 to-green-50 relative">
                        
                        {/* Aiguille Nord */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                          <div className="w-1 h-8 bg-red-500 rounded-full"></div>
                          <div className="text-xs text-center mt-1 font-bold">N</div>
                        </div>
                        
                        {/* Directions cardinales */}
                        <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                          <div className="text-xs font-bold">E</div>
                        </div>
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                          <div className="text-xs font-bold">S</div>
                        </div>
                        <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                          <div className="text-xs font-bold">W</div>
                        </div>
                        
                        {/* Aiguille Qibla */}
                        <div 
                          className="absolute top-1/2 left-1/2 origin-bottom"
                          style={{ 
                            transform: `translate(-50%, -100%) rotate(${qiblaDirection}deg)`,
                            height: '80px'
                          }}
                        >
                          <div className="w-2 h-full bg-green-500 rounded-full relative">
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                              <Navigation className="h-4 w-4 text-green-600" />
                            </div>
                          </div>
                        </div>
                        
                        {/* Centre */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-700 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-4 space-y-2">
                    <div className="text-2xl font-bold text-green-700">{qiblaDirection}°</div>
                    <div className="text-sm text-gray-600">Direction de la Kaaba depuis Dubai</div>
                    <Button className="mt-4" onClick={() => setQiblaDirection(qiblaDirection + 1)}>
                      Recalibrer
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Informations Qibla */}
              <Card>
                <CardHeader>
                  <CardTitle>Informations Qibla</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="font-bold text-green-800">Kaaba - Masjid al-Haram</h3>
                    <p className="text-sm text-green-700 mt-1">
                      La direction de prière pour tous les musulmans du monde
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded">
                      <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                      <div className="text-sm font-bold">Distance</div>
                      <div className="text-lg text-blue-700">2,145 km</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded">
                      <Compass className="h-6 w-6 text-purple-600 mx-auto mb-1" />
                      <div className="text-sm font-bold">Bearing</div>
                      <div className="text-lg text-purple-700">285° NW</div>
                    </div>
                  </div>

                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <h4 className="font-bold text-amber-800 mb-2">Conseil pour la prière</h4>
                    <p className="text-sm text-amber-700">
                      Assurez-vous d'être face à cette direction lors de vos prières. 
                      Utilisez cette boussole comme guide, mais vérifiez avec votre 
                      mosquée locale pour plus de précision.
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Shield className="h-4 w-4 text-purple-600 mt-0.5" />
                      <div className="text-xs text-purple-700">
                        <span className="font-medium">Al-Aman CED Travel Protection: </span>
                        Où que vous soyez dans le monde, trouvez toujours la Qibla 
                        et les mosquées proches avec notre app.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Calendrier Islamique */}
          <TabsContent value="calendar" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Date islamique */}
              <Card className="bg-gradient-to-r from-green-100 to-blue-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Date Islamique (Hijri)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-3">
                    <div className="text-3xl font-bold text-green-700">
                      {islamicDate.hijri}
                    </div>
                    <div className="text-lg text-gray-700">
                      {islamicDate.islamicMonth} {islamicDate.islamicYear}
                    </div>
                    <div className="text-sm text-gray-600">
                      Correspond au: {islamicDate.gregorian}
                    </div>
                    {islamicDate.specialDay && (
                      <Badge className="bg-yellow-100 text-yellow-800">
                        {islamicDate.specialDay}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Prochains événements */}
              <Card>
                <CardHeader>
                  <CardTitle>Prochains Événements Islamiques</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { event: 'Jumma', date: 'Demain', importance: 'hebdomadaire', color: 'bg-green-100 text-green-800' },
                      { event: 'Laylat al-Qadr', date: '15 jours', importance: 'majeur', color: 'bg-purple-100 text-purple-800' },
                      { event: 'Eid al-Fitr', date: '28 jours', importance: 'majeur', color: 'bg-yellow-100 text-yellow-800' },
                      { event: 'Hajj 2025', date: '186 jours', importance: 'majeur', color: 'bg-blue-100 text-blue-800' }
                    ].map((event, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">{event.event}</div>
                          <div className="text-sm text-gray-600">Dans {event.date}</div>
                        </div>
                        <Badge className={event.color}>
                          {event.importance}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Mois islamiques */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Calendrier des Mois Islamiques</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {[
                      'Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani',
                      'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Sha\'ban',
                      'Ramadan', 'Shawwal', 'Dhul-Qi\'dah', 'Dhul-Hijjah'
                    ].map((month, idx) => (
                      <div
                        key={idx}
                        className={`p-3 text-center rounded-lg border transition-all duration-300 ${
                          month === islamicDate.islamicMonth
                            ? 'bg-green-100 border-green-500 text-green-800'
                            : 'bg-gray-50 border-gray-200 hover:bg-blue-50'
                        }`}
                      >
                        <div className="font-medium text-sm">{month}</div>
                        <div className="text-xs text-gray-600 mt-1">
                          {idx + 1}/{islamicDate.islamicYear}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Intégration assurance pour événements spéciaux */}
            <Card className="bg-gradient-to-r from-purple-100 to-pink-100">
              <CardHeader>
                <CardTitle>Protection Al-Aman CED pour Événements Islamiques</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Plane className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-bold">Hajj & Omra</h3>
                    <p className="text-sm text-gray-600">Assurance voyage spécialisée avec guide spirituel inclus</p>
                    <Button size="sm" className="mt-2">En savoir plus</Button>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Home className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-bold">Ramadan à la maison</h3>
                    <p className="text-sm text-gray-600">Protection renforcée du foyer pendant le mois sacré</p>
                    <Button size="sm" className="mt-2">En savoir plus</Button>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <h3 className="font-bold">Événements familiaux</h3>
                    <p className="text-sm text-gray-600">Couverture pour mariages, naissances et célébrations</p>
                    <Button size="sm" className="mt-2">En savoir plus</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}