import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, Globe, MessageCircle, Calendar, BookOpen, Heart, Star, Award } from "lucide-react";
import { useState, useEffect } from "react";
import ProtectionFooter from "@/components/ProtectionFooter";

export default function GestionCommunautaireMusulmane() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [memberStats, setMemberStats] = useState({
    totalMembers: 12847,
    activeToday: 2847,
    onlineNow: 347,
    newToday: 89
  });

  const [communityData, setCommunityData] = useState({
    discussions: 2456,
    scholars: 89,
    events: 156,
    countries: 67
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setMemberStats(prev => ({
        totalMembers: prev.totalMembers + Math.floor(Math.random() * 3),
        activeToday: prev.activeToday + Math.floor(Math.random() * 5) - 2,
        onlineNow: Math.max(200, prev.onlineNow + Math.floor(Math.random() * 20) - 10),
        newToday: prev.newToday + Math.floor(Math.random() * 2)
      }));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const regions = [
    { name: "🇸🇦 Moyen-Orient", members: 3247, active: "🟢", speciality: "Fiqh & Hadith" },
    { name: "🇲🇾 Asie Sud-Est", members: 2891, active: "🟢", speciality: "Commerce Halal" },
    { name: "🇪🇬 Afrique du Nord", members: 2156, active: "🟢", speciality: "Tafsir & Histoire" },
    { name: "🇫🇷 Europe", members: 1789, active: "🟡", speciality: "Dialogue Interreligieux" },
    { name: "🇳🇬 Afrique Sub-Saharienne", members: 1456, active: "🟢", speciality: "Développement Social" },
    { name: "🇺🇸 Amériques", members: 987, active: "🟡", speciality: "Innovation Tech" },
    { name: "🇦🇺 Océanie", members: 321, active: "🟢", speciality: "Intégration Communautaire" }
  ];

  const scholars = [
    {
      name: "Sheikh Dr. Ahmad Al-Maliki",
      expertise: "Fiqh Maliki & Finance Islamique",
      country: "🇲🇦 Maroc",
      students: 2847,
      rating: 4.9,
      online: true,
      specializations: ["Banking Halal", "Zakat", "Murabaha"]
    },
    {
      name: "Dr. Fatima As-Shafi'i",
      expertise: "Fiqh Féminin & Éducation",
      country: "🇪🇬 Égypte",
      students: 1956,
      rating: 4.8,
      online: true,
      specializations: ["Famille", "Éducation", "Hadith"]
    },
    {
      name: "Sheikh Muhammad Al-Hanafi",
      expertise: "Jurisprudence & Technology",
      country: "🇹🇷 Turquie",
      students: 1678,
      rating: 4.9,
      online: false,
      specializations: ["Fiqh Informatique", "IA Éthique", "Blockchain"]
    },
    {
      name: "Dr. Omar Ibn Hanbali",
      expertise: "Aqida & Purification Spirituelle",
      country: "🇸🇦 Arabie Saoudite",
      students: 3421,
      rating: 5.0,
      online: true,
      specializations: ["Tawhid", "Dhikr", "Spiritualité"]
    }
  ];

  const events = [
    {
      title: "Conférence Fiqh Informatique Mondial",
      date: "15 Jan 2025",
      time: "14:00 UTC",
      participants: 1247,
      category: "Éducation",
      host: "Institut CED Academy",
      language: "🇫🇷🇸🇦 Bilingue"
    },
    {
      title: "Cercle d'Étude Sahih Bukhari",
      date: "18 Jan 2025",
      time: "19:00 UTC",
      participants: 856,
      category: "Hadith",
      host: "Dr. Fatima As-Shafi'i",
      language: "🇸🇦 Arabe"
    },
    {
      title: "Workshop Banking Islamique Pratique",
      date: "22 Jan 2025",
      time: "16:00 UTC",
      participants: 567,
      category: "Finance",
      host: "CED Bank Academy",
      language: "🇫🇷 Français"
    },
    {
      title: "Dialogue Communautaire Ta'awun",
      date: "25 Jan 2025",
      time: "20:00 UTC",
      participants: 2134,
      category: "Social",
      host: "Communauté Globale",
      language: "🌍 Multilingue"
    }
  ];

  const discussions = [
    {
      title: "Halal vs Haram dans les investissements crypto",
      author: "Ahmad_Finance",
      country: "🇦🇪",
      replies: 47,
      views: 1247,
      category: "Finance",
      lastActivity: "Il y a 2h",
      trending: true
    },
    {
      title: "Comment calculer la Zakat sur les actions ?",
      author: "Fatima_Zakat",
      country: "🇸🇦",
      replies: 23,
      views: 567,
      category: "Fiqh",
      lastActivity: "Il y a 45min",
      trending: false
    },
    {
      title: "Intégration IA dans l'éducation islamique",
      author: "TechMuslim",
      country: "🇫🇷",
      replies: 89,
      views: 2134,
      category: "Innovation",
      lastActivity: "Il y a 1h",
      trending: true
    },
    {
      title: "Règles Fiqh pour le travail à distance",
      author: "RemoteWorker",
      country: "🇹🇷",
      replies: 34,
      views: 891,
      category: "Fiqh Moderne",
      lastActivity: "Il y a 3h",
      trending: false
    }
  ];

  const values = [
    { arabic: "أُخُوَّة", transliteration: "Ukhuwah", translation: "Fraternité Islamique", description: "Liens spirituels entre croyants" },
    { arabic: "عِلْم", transliteration: "Ilm", translation: "Recherche de Connaissance", description: "Apprentissage permanent selon Islam" },
    { arabic: "تَعَاوُن", transliteration: "Ta'awun", translation: "Coopération Mutuelle", description: "Entraide et solidarité communautaire" },
    { arabic: "نَصِيحَة", transliteration: "Nasiha", translation: "Conseil Sincère", description: "Guidance bienveillante entre frères" },
    { arabic: "حِكْمَة", transliteration: "Hikmah", translation: "Sagesse", description: "Discernement dans les décisions" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-6">🤝</div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Gestion Communautaire Musulmane Globale
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            12,847 Membres Actifs • 67 Pays • Valeurs Ukhuwah, Ilm & Ta'awun
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-blue-100 text-blue-700 text-lg px-6 py-3">
              <Users className="w-5 h-5 mr-2" />
              {memberStats.totalMembers.toLocaleString()} Membres
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 text-lg px-6 py-3">
              <Globe className="w-5 h-5 mr-2" />
              {communityData.countries} Pays Connectés
            </Badge>
            <Badge className="bg-pink-100 text-pink-700 text-lg px-6 py-3">
              <BookOpen className="w-5 h-5 mr-2" />
              {communityData.scholars} Scholars Actifs
            </Badge>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg border-2 border-blue-300 mb-8">
            <p className="text-lg font-bold text-blue-700">
              🌍 Communauté active en temps réel • {memberStats.onlineNow} membres en ligne maintenant
            </p>
          </div>
        </div>

        <Tabs defaultValue="communaute-globale" className="w-full">
          
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
            <TabsTrigger value="communaute-globale">🌍 Communauté Globale</TabsTrigger>
            <TabsTrigger value="scholars-mentorat">👨‍🏫 Scholars & Mentorat</TabsTrigger>
            <TabsTrigger value="evenements-virtuels">📅 Événements Virtuels</TabsTrigger>
            <TabsTrigger value="valeurs-islamiques">🕌 Valeurs Islamiques</TabsTrigger>
          </TabsList>

          {/* Communauté Globale */}
          <TabsContent value="communaute-globale">
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              
              {/* Statistiques Communauté */}
              <Card className="border-4 border-blue-400 bg-gradient-to-br from-blue-50 to-purple-50 shadow-2xl">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <CardTitle className="text-3xl font-bold text-blue-700">
                    Statistiques Communauté Temps Réel
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center p-6 bg-white rounded-lg border-2 border-blue-200">
                      <div className="text-4xl font-bold text-blue-600 mb-2">
                        {memberStats.totalMembers.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Membres Total</div>
                      <div className="text-xs text-green-600 mt-1">+{memberStats.newToday} aujourd'hui</div>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-lg border-2 border-green-200">
                      <div className="text-4xl font-bold text-green-600 mb-2">{memberStats.onlineNow}</div>
                      <div className="text-sm text-gray-600">En Ligne Maintenant</div>
                      <div className="text-xs text-blue-600 mt-1">Peak: 892 (21h UTC)</div>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-lg border-2 border-purple-200">
                      <div className="text-4xl font-bold text-purple-600 mb-2">{communityData.discussions}</div>
                      <div className="text-sm text-gray-600">Discussions Actives</div>
                      <div className="text-xs text-purple-600 mt-1">+47 cette semaine</div>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-lg border-2 border-orange-200">
                      <div className="text-4xl font-bold text-orange-600 mb-2">{communityData.events}</div>
                      <div className="text-sm text-gray-600">Événements Programmés</div>
                      <div className="text-xs text-orange-600 mt-1">+12 ce mois</div>
                    </div>
                  </div>

                  {/* Régions Actives */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-4">🌍 Présence Régionale</h3>
                    <div className="space-y-3">
                      {regions.slice(0, 4).map((region, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white rounded border-2 border-blue-100">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{region.active}</span>
                            <div>
                              <div className="font-bold text-blue-800">{region.name}</div>
                              <div className="text-xs text-gray-600">{region.speciality}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-blue-600">{region.members.toLocaleString()}</div>
                            <div className="text-xs text-gray-500">membres</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Discussions Tendance */}
              <Card className="border-4 border-purple-400 bg-gradient-to-br from-purple-50 to-pink-50 shadow-2xl">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">💬</div>
                  <CardTitle className="text-3xl font-bold text-purple-700">
                    Discussions Communautaires
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  
                  <div className="space-y-4">
                    {discussions.map((discussion, index) => (
                      <div key={index} className="p-4 bg-white rounded-lg border-2 border-purple-200 hover:shadow-lg transition-all cursor-pointer">
                        
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-bold text-purple-800 text-sm">{discussion.title}</h4>
                              {discussion.trending && (
                                <Badge className="bg-red-100 text-red-700 text-xs">🔥 Trending</Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-3 text-xs text-gray-600">
                              <span className="flex items-center gap-1">
                                <span>{discussion.country}</span>
                                <span>{discussion.author}</span>
                              </span>
                              <Badge className="bg-purple-100 text-purple-700 text-xs">{discussion.category}</Badge>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <div className="flex gap-4">
                            <span className="flex items-center gap-1">
                              <MessageCircle className="w-3 h-3" />
                              {discussion.replies} réponses
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {discussion.views} vues
                            </span>
                          </div>
                          <span>{discussion.lastActivity}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Button className="w-full text-lg py-4 bg-purple-600 hover:bg-purple-700 text-white">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Rejoindre les Discussions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Scholars & Mentorat */}
          <TabsContent value="scholars-mentorat">
            <Card className="border-4 border-emerald-400 bg-gradient-to-br from-emerald-50 to-blue-50 shadow-2xl">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">👨‍🏫</div>
                <CardTitle className="text-4xl font-bold text-emerald-700">
                  Réseau Scholars & Mentorat Islamique
                </CardTitle>
                <p className="text-xl text-gray-600 mt-4">
                  89 Scholars Qualifiés • 4 Madhabs • Mentorat Personnalisé
                </p>
              </CardHeader>
              <CardContent>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  
                  {/* Profils Scholars */}
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-700 mb-6">📚 Scholars Actifs</h3>
                    
                    <div className="space-y-6">
                      {scholars.map((scholar, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg border-2 border-emerald-200 hover:shadow-lg transition-all">
                          
                          <div className="flex items-start gap-4 mb-4">
                            <Avatar className="w-16 h-16">
                              <AvatarImage src={`/api/placeholder/64/64`} alt={scholar.name} />
                              <AvatarFallback className="bg-emerald-100 text-emerald-700 text-lg font-bold">
                                {scholar.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-bold text-emerald-800">{scholar.name}</h4>
                                {scholar.online && <div className="w-3 h-3 bg-green-500 rounded-full"></div>}
                              </div>
                              <p className="text-sm text-gray-600 mb-1">{scholar.expertise}</p>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span>{scholar.country}</span>
                                <span>•</span>
                                <span>{scholar.students.toLocaleString()} étudiants</span>
                                <span>•</span>
                                <div className="flex items-center gap-1">
                                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                  <span>{scholar.rating}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mb-4">
                            <div className="text-sm font-semibold text-gray-700 mb-2">Spécialisations:</div>
                            <div className="flex flex-wrap gap-2">
                              {scholar.specializations.map((spec, i) => (
                                <Badge key={i} className="bg-emerald-100 text-emerald-700 text-xs">
                                  {spec}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
                              📚 Cours
                            </Button>
                            <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                              💬 Contact
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Programmes Mentorat */}
                  <div>
                    <h3 className="text-2xl font-bold text-blue-700 mb-6">🎯 Programmes Mentorat</h3>
                    
                    <div className="space-y-6">
                      
                      {/* Fiqh & Jurisprudence */}
                      <div className="p-6 bg-white rounded-lg border-2 border-blue-200">
                        <h4 className="font-bold text-blue-800 mb-3">📖 Fiqh & Jurisprudence</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span>Étudiants actifs:</span>
                            <span className="font-bold text-blue-600">1,247</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sessions cette semaine:</span>
                            <span className="font-bold text-green-600">89</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Satisfaction moyenne:</span>
                            <span className="font-bold text-yellow-600">4.8/5 ⭐</span>
                          </div>
                        </div>
                        <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                          Rejoindre Programme
                        </Button>
                      </div>

                      {/* Coran & Hadith */}
                      <div className="p-6 bg-white rounded-lg border-2 border-green-200">
                        <h4 className="font-bold text-green-800 mb-3">📚 Coran & Hadith</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span>Cercles d'étude:</span>
                            <span className="font-bold text-green-600">34</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Mémorisation Coran:</span>
                            <span className="font-bold text-blue-600">567 hafiz</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Étudiants Hadith:</span>
                            <span className="font-bold text-purple-600">891</span>
                          </div>
                        </div>
                        <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
                          Commencer Études
                        </Button>
                      </div>

                      {/* Finance Islamique */}
                      <div className="p-6 bg-white rounded-lg border-2 border-purple-200">
                        <h4 className="font-bold text-purple-800 mb-3">💰 Finance Islamique</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span>Cours Banking Halal:</span>
                            <span className="font-bold text-purple-600">156</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Certification Zakat:</span>
                            <span className="font-bold text-green-600">234 certifiés</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Workshops Murabaha:</span>
                            <span className="font-bold text-blue-600">12/mois</span>
                          </div>
                        </div>
                        <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                          Apprendre Finance
                        </Button>
                      </div>

                      {/* Spiritualité & Développement */}
                      <div className="p-6 bg-white rounded-lg border-2 border-orange-200">
                        <h4 className="font-bold text-orange-800 mb-3">🌟 Spiritualité & Développement</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span>Guidance personnelle:</span>
                            <span className="font-bold text-orange-600">24/7</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Séances Dhikr collectives:</span>
                            <span className="font-bold text-green-600">5/semaine</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Développement personnel:</span>
                            <span className="font-bold text-blue-600">678 parcours</span>
                          </div>
                        </div>
                        <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white">
                          Guidance Spirituelle
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Événements Virtuels */}
          <TabsContent value="evenements-virtuels">
            <Card className="border-4 border-pink-400 bg-gradient-to-br from-pink-50 to-purple-50 shadow-2xl">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">📅</div>
                <CardTitle className="text-4xl font-bold text-pink-700">
                  Événements Virtuels & Rassemblements
                </CardTitle>
                <p className="text-xl text-gray-600 mt-4">
                  156 Événements Programmés • Conférences • Workshops • Discussions
                </p>
              </CardHeader>
              <CardContent>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  
                  {/* Événements à Venir */}
                  <div>
                    <h3 className="text-2xl font-bold text-pink-700 mb-6">🗓️ Événements à Venir</h3>
                    
                    <div className="space-y-6">
                      {events.map((event, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg border-2 border-pink-200 hover:shadow-lg transition-all">
                          
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                              <h4 className="font-bold text-pink-800 mb-2">{event.title}</h4>
                              <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {event.date}
                                </span>
                                <span>{event.time}</span>
                                <span>{event.language}</span>
                              </div>
                              <div className="flex items-center gap-2 mb-3">
                                <Badge className="bg-pink-100 text-pink-700 text-xs">{event.category}</Badge>
                                <span className="text-xs text-gray-500">Animé par {event.host}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Users className="w-4 h-4" />
                              <span>{event.participants} participants inscrits</span>
                            </div>
                            <Button size="sm" className="bg-pink-600 hover:bg-pink-700 text-white">
                              S'inscrire
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Types d'Événements & Statistiques */}
                  <div>
                    <h3 className="text-2xl font-bold text-purple-700 mb-6">📊 Types & Statistiques</h3>
                    
                    <div className="space-y-6">
                      
                      {/* Catégories Populaires */}
                      <div className="p-6 bg-white rounded-lg border-2 border-purple-200">
                        <h4 className="font-bold text-purple-800 mb-4">🎯 Catégories Populaires</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-blue-600" />
                              <span>Éducation & Fiqh</span>
                            </span>
                            <span className="font-bold text-blue-600">67 événements</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="flex items-center gap-2">
                              <Heart className="w-4 h-4 text-pink-600" />
                              <span>Spiritualité & Dhikr</span>
                            </span>
                            <span className="font-bold text-pink-600">34 événements</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-green-600" />
                              <span>Communauté & Social</span>
                            </span>
                            <span className="font-bold text-green-600">28 événements</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="flex items-center gap-2">
                              <Award className="w-4 h-4 text-orange-600" />
                              <span>Finance & Business</span>
                            </span>
                            <span className="font-bold text-orange-600">27 événements</span>
                          </div>
                        </div>
                      </div>

                      {/* Métriques Participation */}
                      <div className="p-6 bg-white rounded-lg border-2 border-green-200">
                        <h4 className="font-bold text-green-800 mb-4">📈 Participation & Engagement</h4>
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div className="p-3 bg-green-50 rounded">
                            <div className="text-2xl font-bold text-green-600">89%</div>
                            <div className="text-xs text-gray-600">Taux participation</div>
                          </div>
                          <div className="p-3 bg-blue-50 rounded">
                            <div className="text-2xl font-bold text-blue-600">4.7</div>
                            <div className="text-xs text-gray-600">Note satisfaction</div>
                          </div>
                          <div className="p-3 bg-purple-50 rounded">
                            <div className="text-2xl font-bold text-purple-600">156</div>
                            <div className="text-xs text-gray-600">Événements/mois</div>
                          </div>
                          <div className="p-3 bg-orange-50 rounded">
                            <div className="text-2xl font-bold text-orange-600">78</div>
                            <div className="text-xs text-gray-600">Langues supportées</div>
                          </div>
                        </div>
                      </div>

                      {/* Prochains Highlights */}
                      <div className="p-6 bg-white rounded-lg border-2 border-amber-200">
                        <h4 className="font-bold text-amber-800 mb-4">⭐ Événements Phares</h4>
                        <div className="space-y-3 text-sm">
                          <div className="p-3 bg-amber-50 rounded border-l-4 border-amber-500">
                            <div className="font-semibold text-amber-800">Congrès Mondial Fiqh Informatique</div>
                            <div className="text-amber-700">28-30 Janvier 2025 • 67 pays participants</div>
                          </div>
                          <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                            <div className="font-semibold text-blue-800">Sommet Islamic FinTech Global</div>
                            <div className="text-blue-700">15-17 Février 2025 • Leaders industrie</div>
                          </div>
                          <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                            <div className="font-semibold text-green-800">Festival Ramadan Communautaire</div>
                            <div className="text-green-700">Mars 2025 • 30 jours d'activités</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Créer Événement */}
                <div className="mt-8 p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg border-2 border-pink-400">
                  <h3 className="text-2xl font-bold text-pink-700 mb-4 text-center">
                    🎪 Organiser Votre Événement
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Input placeholder="Titre de l'événement" className="mb-3" />
                      <Input placeholder="Date et heure" className="mb-3" />
                      <Input placeholder="Catégorie" className="mb-3" />
                    </div>
                    <div>
                      <Textarea placeholder="Description de l'événement" className="h-24 mb-3" />
                      <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        Créer Événement
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Valeurs Islamiques */}
          <TabsContent value="valeurs-islamiques">
            <Card className="border-4 border-emerald-400 bg-gradient-to-br from-emerald-50 to-blue-50 shadow-2xl">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">🕌</div>
                <CardTitle className="text-4xl font-bold text-emerald-700">
                  Valeurs Islamiques Fondamentales
                </CardTitle>
                <p className="text-xl text-gray-600 mt-4">
                  Fondements Communautaires • Principes Coraniques • Guidance Prophétique
                </p>
              </CardHeader>
              <CardContent>
                
                {/* Valeurs Principales */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  
                  {/* Valeurs Fondamentales */}
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-700 mb-6">🌟 Valeurs Fondamentales</h3>
                    
                    <div className="space-y-6">
                      {values.map((value, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg border-2 border-emerald-200 hover:shadow-lg transition-all">
                          
                          <div className="text-center mb-4">
                            <div className="text-3xl font-bold text-emerald-800 mb-2">{value.arabic}</div>
                            <div className="text-lg font-semibold text-blue-700 mb-1">{value.transliteration}</div>
                            <div className="text-base font-medium text-purple-600">{value.translation}</div>
                          </div>

                          <p className="text-sm text-gray-700 text-center italic">
                            {value.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Application Pratique */}
                  <div>
                    <h3 className="text-2xl font-bold text-blue-700 mb-6">🎯 Application Pratique</h3>
                    
                    <div className="space-y-6">
                      
                      {/* Ukhuwah en Action */}
                      <div className="p-6 bg-white rounded-lg border-2 border-blue-200">
                        <h4 className="font-bold text-blue-800 mb-3">🤝 Ukhuwah en Action</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Entraide financière: 1,247 membres aidés cette année</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Support psychologique: 24/7 disponible</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span>Réseau professionnel: 567 connexions réalisées</span>
                          </div>
                        </div>
                      </div>

                      {/* Ilm & Apprentissage */}
                      <div className="p-6 bg-white rounded-lg border-2 border-green-200">
                        <h4 className="font-bold text-green-800 mb-3">📚 Ilm & Apprentissage</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Bibliothèque numérique: 12,456 ressources authentiques</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Cours quotidiens: 89 sessions par jour</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span>Mentorat: 234 relations actives</span>
                          </div>
                        </div>
                      </div>

                      {/* Ta'awun & Solidarité */}
                      <div className="p-6 bg-white rounded-lg border-2 border-purple-200">
                        <h4 className="font-bold text-purple-800 mb-3">🤲 Ta'awun & Solidarité</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span>Projets communautaires: 67 initiatives actives</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Fonds d'urgence: 890K CHF disponibles</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Volontariat: 456 bénévoles actifs</span>
                          </div>
                        </div>
                      </div>

                      {/* Nasiha & Guidance */}
                      <div className="p-6 bg-white rounded-lg border-2 border-orange-200">
                        <h4 className="font-bold text-orange-800 mb-3">💡 Nasiha & Guidance</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span>Consultations spirituelles: 1,890 sessions/mois</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Cercles de Nasiha: 34 groupes réguliers</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Guidance anonyme: Service 24/7</span>
                          </div>
                        </div>
                      </div>

                      {/* Hikmah & Discernement */}
                      <div className="p-6 bg-white rounded-lg border-2 border-amber-200">
                        <h4 className="font-bold text-amber-800 mb-3">🧠 Hikmah & Discernement</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                            <span>Études de cas Fiqh: 156 analyses détaillées</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Décisions communautaires: Consensus participatif</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Formation leadership: 67 leaders formés</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Charte Communautaire */}
                <div className="bg-gradient-to-r from-emerald-100 to-blue-100 p-6 rounded-lg border-2 border-emerald-400">
                  <h3 className="text-2xl font-bold text-emerald-700 mb-4 text-center">
                    📜 Charte Communautaire CED HalalTech™
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 text-center">
                    <div className="space-y-4">
                      <div className="p-4 bg-white rounded">
                        <h4 className="font-bold text-emerald-800">🤝 Nos Engagements</h4>
                        <p className="text-sm text-gray-700">
                          Respecter les valeurs islamiques authentiques dans tous nos échanges et collaborations
                        </p>
                      </div>
                      <div className="p-4 bg-white rounded">
                        <h4 className="font-bold text-blue-800">🌍 Notre Mission</h4>
                        <p className="text-sm text-gray-700">
                          Créer une Oummah technologique unie, basée sur l'entraide et la recherche de connaissance
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-white rounded">
                        <h4 className="font-bold text-purple-800">📚 Notre Approche</h4>
                        <p className="text-sm text-gray-700">
                          Allier science moderne et sagesse islamique pour un développement technologique éthique
                        </p>
                      </div>
                      <div className="p-4 bg-white rounded">
                        <h4 className="font-bold text-orange-800">🎯 Notre Vision</h4>
                        <p className="text-sm text-gray-700">
                          Être la référence mondiale de la technologie islamique conforme Sharia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

      </div>
      
      <ProtectionFooter />
    </div>
  );
}