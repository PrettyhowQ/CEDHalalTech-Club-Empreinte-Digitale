import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Star, 
  Users, 
  BookOpen, 
  MessageCircle, 
  Sparkles, 
  Target, 
  Award, 
  Coffee,
  HandHeart,
  Compass,
  Sunrise,
  Moon,
  TreePine,
  Flower2,
  CloudRain,
  Sun,
  Mountain,
  Waves,
  Wind,
  Crown,
  Shield,
  Gift,
  Lightbulb,
  Music,
  Globe,
  Clock,
  CheckCircle,
  ArrowRight,
  Send,
  Eye,
  Flag,
  Feather,
  Leaf,
  Bird,
  Rainbow,
  Zap
} from 'lucide-react';
import { CEDFooter } from '@/components/CEDFooter';

interface SpiritualProgram {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  participants: number;
  benefits: string[];
  practices: string[];
  icon: React.ReactNode;
  color: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
}

interface SpiritualMoment {
  id: string;
  time: string;
  title: string;
  description: string;
  action: string;
  dua: string;
  icon: React.ReactNode;
}

interface CommunityStory {
  id: string;
  name: string;
  story: string;
  transformation: string;
  lesson: string;
  country: string;
}

export default function EcosystemeSpirituel() {
  const [selectedProgram, setSelectedProgram] = useState<string>('serenite-quotidienne');
  const [currentMoment, setCurrentMoment] = useState<string>('');
  const [spiritualLevel, setSpiritualLevel] = useState(0);

  const spiritualPrograms: SpiritualProgram[] = [
    {
      id: 'serenite-quotidienne',
      title: 'Sérénité Quotidienne',
      subtitle: 'طمأنينة يومية',
      description: 'Programme de développement spirituel quotidien pour cultiver la paix intérieure et la bienveillance',
      duration: '40 jours',
      participants: 12847,
      level: 'Débutant',
      color: 'from-blue-400 to-cyan-500',
      icon: <Sunrise className="h-6 w-6" />,
      benefits: [
        'Paix intérieure durable',
        'Réduction du stress et anxiété',
        'Amélioration des relations',
        'Connexion spirituelle renforcée',
        'Joie et contentement authentiques'
      ],
      practices: [
        'Dhikr du matin et soir',
        'Méditation sur les noms d\'Allah',
        'Lecture quotidienne du Coran',
        'Actes de bienveillance',
        'Gratitude et reconnaissance'
      ]
    },
    {
      id: 'bienveillance-active',
      title: 'Bienveillance Active',
      subtitle: 'عمل الخير النشط',
      description: 'Développer une attitude de service et de compassion envers autrui',
      duration: '30 jours',
      participants: 8923,
      level: 'Intermédiaire',
      color: 'from-emerald-400 to-green-500',
      icon: <HandHeart className="h-6 w-6" />,
      benefits: [
        'Empathie développée',
        'Impact positif sur la communauté',
        'Satisfaction spirituelle profonde',
        'Liens sociaux renforcés',
        'Bénédictions multipliées'
      ],
      practices: [
        'Actes de charité quotidiens',
        'Écoute bienveillante',
        'Service communautaire',
        'Soutien aux nécessiteux',
        'Paroles encourageantes'
      ]
    },
    {
      id: 'elevation-spirituelle',
      title: 'Élévation Spirituelle',
      subtitle: 'الارتقاء الروحي',
      description: 'Parcours avancé pour atteindre les plus hauts degrés de spiritualité islamique',
      duration: '90 jours',
      participants: 5642,
      level: 'Avancé',
      color: 'from-purple-400 to-indigo-500',
      icon: <Mountain className="h-6 w-6" />,
      benefits: [
        'Proximité divine (Qurb)',
        'Purification de l\'âme',
        'Sagesse et discernement',
        'Leadership spirituel',
        'Influence positive rayonnante'
      ],
      practices: [
        'Qiyam al-layl régulier',
        'Jeûnes surérogatoires',
        'Étude approfondie des sciences islamiques',
        'Dhikr intensif',
        'Mentoring spirituel'
      ]
    },
    {
      id: 'harmonie-familiale',
      title: 'Harmonie Familiale',
      subtitle: 'وئام عائلي',
      description: 'Créer un foyer de paix et d\'amour selon les enseignements islamiques',
      duration: '60 jours',
      participants: 7234,
      level: 'Intermédiaire',
      color: 'from-pink-400 to-rose-500',
      icon: <Heart className="h-6 w-6" />,
      benefits: [
        'Relations familiales apaisées',
        'Communication bienveillante',
        'Éducation spirituelle des enfants',
        'Foyer barakah',
        'Modèle familial islamique'
      ],
      practices: [
        'Prières familiales',
        'Moments de partage spirituel',
        'Histoires des Prophètes',
        'Résolution pacifique des conflits',
        'Gratitude partagée'
      ]
    }
  ];

  const dailyMoments: SpiritualMoment[] = [
    {
      id: 'fajr',
      time: '05:30',
      title: 'Réveil en Douceur',
      description: 'Commencez votre journée dans la gratitude et la sérénité',
      action: 'Dhikr du matin après Fajr',
      dua: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ',
      icon: <Sunrise className="h-5 w-5" />
    },
    {
      id: 'morning',
      time: '08:00',
      title: 'Élan Positif',
      description: 'Programmez votre esprit pour une journée bénie',
      action: 'Lecture inspirante + intention positive',
      dua: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
      icon: <Sun className="h-5 w-5" />
    },
    {
      id: 'midday',
      time: '12:30',
      title: 'Pause Bénédiction',
      description: 'Moment de recueillement et de gratitude',
      action: 'Dhikr silencieux + remerciements',
      dua: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً',
      icon: <Star className="h-5 w-5" />
    },
    {
      id: 'afternoon',
      time: '15:45',
      title: 'Acte de Bienveillance',
      description: 'Semez du bien autour de vous',
      action: 'Geste gentil + parole encourageante',
      dua: 'اللَّهُمَّ اجْعَلْنِي مِنَ الْمُحْسِنِينَ',
      icon: <HandHeart className="h-5 w-5" />
    },
    {
      id: 'evening',
      time: '19:00',
      title: 'Réflexion Sereine',
      description: 'Bilan positif de votre journée',
      action: 'Gratitude + leçons apprises',
      dua: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ',
      icon: <Moon className="h-5 w-5" />
    },
    {
      id: 'night',
      time: '22:00',
      title: 'Paix Nocturne',
      description: 'Préparez votre cœur pour le repos',
      action: 'Istighfar + dhikr apaisant',
      dua: 'اللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا',
      icon: <Star className="h-5 w-5" />
    }
  ];

  const communityStories: CommunityStory[] = [
    {
      id: '1',
      name: 'Amina B.',
      country: 'Maroc',
      story: 'J\'étais toujours stressée et impatiente avec mes enfants. Le programme "Sérénité Quotidienne" m\'a appris à retrouver ma paix intérieure.',
      transformation: 'Maintenant, je commence chaque journée par le dhikr du matin. Ma famille remarque que je suis plus calme et bienveillante.',
      lesson: 'La paix intérieure se cultive chaque jour par petites pratiques spirituelles.'
    },
    {
      id: '2',
      name: 'Omar K.',
      country: 'France',
      story: 'Mon travail me rendait dur et distant. J\'ai découvert la "Bienveillance Active" qui a transformé ma façon d\'interagir.',
      transformation: 'Je prends maintenant le temps d\'écouter mes collègues et d\'aider mes voisins. Cela a créé une atmosphère positive autour de moi.',
      lesson: 'Donner du bien nous rend plus heureux que recevoir.'
    },
    {
      id: '3',
      name: 'Fatima S.',
      country: 'Algérie',
      story: 'Après des difficultés familiales, j\'avais perdu confiance. Le programme "Harmonie Familiale" nous a réconciliés.',
      transformation: 'Nous faisons maintenant des prières familiales et partageons nos gratitudes. L\'amour et la compréhension sont revenus.',
      lesson: 'La spiritualité partagée unit les cœurs et guérit les blessures.'
    },
    {
      id: '4',
      name: 'Ahmed T.',
      country: 'Tunisie',
      story: 'Je cherchais un sens plus profond à ma vie. "Élévation Spirituelle" m\'a ouvert des horizons que je n\'imaginais pas.',
      transformation: 'Le qiyam al-layl et l\'étude approfondie ont développé ma proximité avec Allah. Je ressens une paix indescriptible.',
      lesson: 'La vraie élévation vient de la sincérité dans l\'adoration et la recherche de la connaissance.'
    }
  ];

  useEffect(() => {
    // Simuler progression spirituelle
    const timer = setInterval(() => {
      setSpiritualLevel(prev => Math.min(prev + 1, 100));
    }, 50);
    
    setTimeout(() => clearInterval(timer), 5000);
    
    return () => clearInterval(timer);
  }, []);

  const selectedProgramData = spiritualPrograms.find(p => p.id === selectedProgram);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Spirituel */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Heart className="h-10 w-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold mb-4">
              🌟 Écosystème Spirituel CED
            </h1>
            
            <p className="text-2xl mb-6 opacity-90">
              نِعْمَ الْعَبْدُ إِنَّهُ أَوَّابٌ
            </p>
            
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Un environnement béni pour nourrir votre âme, développer votre sérénité 
              et rayonner la bienveillance autour de vous. Ensemble, élevons-nous 
              spirituellement pour le bonheur de tous. إن شاء الله، بحول الله
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-white/20 text-white px-6 py-3 text-lg">
                <Users className="h-5 w-5 mr-2" />
                27,646+ Âmes Sereines
              </Badge>
              <Badge className="bg-white/20 text-white px-6 py-3 text-lg">
                <Heart className="h-5 w-5 mr-2" />
                156,789 Actes de Bonté
              </Badge>
              <Badge className="bg-white/20 text-white px-6 py-3 text-lg">
                <Star className="h-5 w-5 mr-2" />
                4.9/5 Satisfaction Spirituelle
              </Badge>
            </div>

            <div className="max-w-md mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Votre Progression Spirituelle</span>
                  <span className="text-sm font-bold">{spiritualLevel}%</span>
                </div>
                <Progress value={spiritualLevel} className="h-3 bg-white/20" />
                <p className="text-xs mt-2 opacity-80">
                  Chaque jour est une opportunité de grandir spirituellement
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-12">
        <Tabs defaultValue="programmes" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="programmes">Programmes Spirituels</TabsTrigger>
            <TabsTrigger value="moments">Moments Quotidiens</TabsTrigger>
            <TabsTrigger value="communaute">Témoignages</TabsTrigger>
            <TabsTrigger value="ressources">Ressources</TabsTrigger>
          </TabsList>

          {/* Programmes Spirituels */}
          <TabsContent value="programmes">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Sidebar programmes */}
              <div className="space-y-4">
                {spiritualPrograms.map((program, index) => (
                  <motion.div
                    key={program.id}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedProgram === program.id 
                        ? 'border-purple-500 bg-purple-50 shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedProgram(program.id)}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${program.color} flex items-center justify-center mb-3`}>
                      {program.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{program.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{program.subtitle}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <Badge variant="outline">{program.level}</Badge>
                      <span>{program.participants.toLocaleString()} participants</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Détail programme sélectionné */}
              <div className="lg:col-span-2">
                {selectedProgramData && (
                  <motion.div
                    key={selectedProgram}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <Card>
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${selectedProgramData.color} flex items-center justify-center`}>
                            {selectedProgramData.icon}
                          </div>
                          <div>
                            <CardTitle className="text-2xl">{selectedProgramData.title}</CardTitle>
                            <p className="text-lg text-gray-600">{selectedProgramData.subtitle}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {selectedProgramData.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center">
                              <Target className="h-5 w-5 mr-2 text-emerald-600" />
                              Bienfaits Spirituels
                            </h4>
                            <ul className="space-y-2">
                              {selectedProgramData.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start">
                                  <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                                  <span className="text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center">
                              <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                              Pratiques Quotidiennes
                            </h4>
                            <ul className="space-y-2">
                              {selectedProgramData.practices.map((practice, index) => (
                                <li key={index} className="flex items-start">
                                  <Star className="h-4 w-4 mr-2 mt-0.5 text-yellow-500" />
                                  <span className="text-sm">{practice}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-8 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <Users className="h-5 w-5 text-emerald-600" />
                              <span className="font-medium">
                                {selectedProgramData.participants.toLocaleString()} participants actifs
                              </span>
                            </div>
                            <Badge className="bg-emerald-100 text-emerald-800">
                              {selectedProgramData.duration}
                            </Badge>
                          </div>
                          
                          <Button className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600">
                            <Heart className="h-5 w-5 mr-2" />
                            Rejoindre ce parcours spirituel
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </div>
            </div>
          </TabsContent>

          {/* Moments Quotidiens */}
          <TabsContent value="moments">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  🌅 Moments Spirituels de la Journée
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Ponctuez votre journée de moments bénis pour cultiver la sérénité 
                  et la connexion divine. Chaque instant devient une opportunité d'élévation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dailyMoments.map((moment, index) => (
                  <motion.div
                    key={moment.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              {moment.icon}
                            </div>
                            <div>
                              <CardTitle className="text-lg">{moment.title}</CardTitle>
                              <p className="text-sm text-gray-600">{moment.time}</p>
                            </div>
                          </div>
                          <Clock className="h-5 w-5 text-gray-400" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">{moment.description}</p>
                        
                        <div className="space-y-3">
                          <div className="p-3 bg-emerald-50 rounded-lg">
                            <h5 className="font-medium text-emerald-800 mb-1">Action:</h5>
                            <p className="text-sm text-emerald-700">{moment.action}</p>
                          </div>
                          
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <h5 className="font-medium text-blue-800 mb-1">Duʿā:</h5>
                            <p className="text-sm text-blue-700 font-arabic text-right">
                              {moment.dua}
                            </p>
                          </div>
                        </div>

                        <Button variant="outline" className="w-full mt-4">
                          <Send className="h-4 w-4 mr-2" />
                          Programmer ce moment
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Témoignages Communauté */}
          <TabsContent value="communaute">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">
                  💫 Transformations Inspirantes
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Découvrez comment nos frères et sœurs ont trouvé la sérénité et 
                  répandent maintenant la bienveillance autour d'eux. Leurs histoires 
                  illuminent le chemin vers l'élévation spirituelle.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {communityStories.map((story, index) => (
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                            <Heart className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{story.name}</h3>
                            <p className="text-sm text-gray-600 flex items-center">
                              <Globe className="h-4 w-4 mr-1" />
                              {story.country}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h5 className="font-medium text-gray-800 mb-2">Histoire :</h5>
                          <p className="text-sm text-gray-700 italic">"{story.story}"</p>
                        </div>
                        
                        <div className="p-4 bg-emerald-50 rounded-lg">
                          <h5 className="font-medium text-emerald-800 mb-2">Transformation :</h5>
                          <p className="text-sm text-emerald-700">"{story.transformation}"</p>
                        </div>
                        
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h5 className="font-medium text-blue-800 mb-2 flex items-center">
                            <Lightbulb className="h-4 w-4 mr-1" />
                            Leçon retenue :
                          </h5>
                          <p className="text-sm text-blue-700 font-medium">"{story.lesson}"</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <Card className="max-w-2xl mx-auto">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">
                      Partagez Votre Transformation
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Votre histoire peut inspirer et rassurer d'autres âmes en quête de sérénité. 
                      Ensemble, créons un cercle de bienveillance qui s'étend à travers le monde.
                    </p>
                    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Partager mon témoignage
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Ressources Spirituelles */}
          <TabsContent value="ressources">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Bibliothèque Spirituelle',
                  description: 'Livres et textes islamiques pour nourrir l\'âme',
                  icon: <BookOpen className="h-6 w-6" />,
                  color: 'from-blue-500 to-cyan-500',
                  items: '2,847 ressources'
                },
                {
                  title: 'Audio Spirituel',
                  description: 'Récitations, nasheeds et rappels apaisants',
                  icon: <Music className="h-6 w-6" />,
                  color: 'from-green-500 to-emerald-500',
                  items: '1,234 audios'
                },
                {
                  title: 'Communauté Bienveillante',
                  description: 'Groupes de soutien et d\'entraide spirituelle',
                  icon: <Users className="h-6 w-6" />,
                  color: 'from-purple-500 to-indigo-500',
                  items: '156 groupes actifs'
                },
                {
                  title: 'Calendrier Spirituel',
                  description: 'Événements et moments spirituels importants',
                  icon: <Clock className="h-6 w-6" />,
                  color: 'from-orange-500 to-red-500',
                  items: '365 jours bénis'
                },
                {
                  title: 'Guides Pratiques',
                  description: 'Tutoriels pour développer votre spiritualité',
                  icon: <Compass className="h-6 w-6" />,
                  color: 'from-teal-500 to-blue-500',
                  items: '89 guides'
                },
                {
                  title: 'Méditation Islamique',
                  description: 'Techniques de dhikr et contemplation',
                  icon: <Star className="h-6 w-6" />,
                  color: 'from-pink-500 to-purple-500',
                  items: '76 sessions guidées'
                }
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-all cursor-pointer">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${resource.color} flex items-center justify-center mb-4`}>
                        {resource.icon}
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{resource.items}</Badge>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <CEDFooter />
    </div>
  );
}