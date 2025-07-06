import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Users, Calendar, Globe, Mic, Video, Radio, BookOpen, Star, Eye, Clock, TrendingUp } from "lucide-react";

export default function WebTVHalal() {
  const channels = [
    {
      id: 1,
      name: "CED Islamic Tech",
      category: "Technologie",
      subscribers: "127K",
      description: "Formation technologique conforme aux principes islamiques",
      language: "Français/Arabe",
      status: "live",
      viewers: "2.3K",
      thumbnail: "/api/placeholder/320/180"
    },
    {
      id: 2,
      name: "Fiqh Informatique TV",
      category: "Éducation",
      subscribers: "89K",
      description: "Règles islamiques appliquées aux nouvelles technologies",
      language: "Arabe/Français",
      status: "scheduled",
      nextShow: "14:30",
      thumbnail: "/api/placeholder/320/180"
    },
    {
      id: 3,
      name: "CED Business Halal",
      category: "Finance",
      subscribers: "156K",
      description: "Entrepreneuriat et finance islamique moderne",
      language: "Français/Anglais",
      status: "live",
      viewers: "4.1K",
      thumbnail: "/api/placeholder/320/180"
    },
    {
      id: 4,
      name: "Al-Amana Auto TV",
      category: "Automobile",
      subscribers: "45K",
      description: "Garage Yakoubi Farid - Voitures de prestige et services halal",
      language: "Français/Arabe",
      status: "live",
      viewers: "890",
      thumbnail: "/api/placeholder/320/180"
    },
    {
      id: 5,
      name: "Bank CED Live",
      category: "Finance",
      subscribers: "234K",
      description: "Services bancaires islamiques et consultation financière halal",
      language: "Multilingue",
      status: "scheduled",
      nextShow: "16:00",
      thumbnail: "/api/placeholder/320/180"
    },
    {
      id: 6,
      name: "Al-Aman Takaful TV",
      category: "Assurance",
      subscribers: "78K",
      description: "Assurance islamique conforme Sharia - Protection complète",
      language: "Français/Arabe",
      status: "live",
      viewers: "1.2K",
      thumbnail: "/api/placeholder/320/180"
    }
  ];

  const programs = [
    {
      time: "06:00",
      title: "Fajr Tech Talk",
      duration: "30 min",
      category: "Spiritualité & Tech",
      description: "Méditations technologiques matinales conformes à l'islam"
    },
    {
      time: "09:00",
      title: "CED Academy Live",
      duration: "60 min",
      category: "Formation",
      description: "Cours en direct de programmation halal et IA éthique"
    },
    {
      time: "10:30",
      title: "Al-Amana Auto Show",
      duration: "45 min",
      category: "Automobile",
      description: "Yakoubi Farid présente les voitures de prestige et services garage halal"
    },
    {
      time: "11:30",
      title: "Bank CED Conseil",
      duration: "30 min",
      category: "Finance",
      description: "Consultation financière islamique et ouverture compte direct"
    },
    {
      time: "12:00",
      title: "Al-Aman Takaful Info",
      duration: "30 min",
      category: "Assurance",
      description: "Tout savoir sur l'assurance islamique et couverture complète"
    },
    {
      time: "13:00",
      title: "Dhuhr Business Hour",
      duration: "45 min",
      category: "Entrepreneuriat",
      description: "Stratégies business islamiques et success stories"
    },
    {
      time: "16:00",
      title: "Asr Innovation Lab",
      duration: "90 min",
      category: "Innovation",
      description: "Laboratoire d'innovations technologiques halal"
    },
    {
      time: "19:00",
      title: "Maghrib Community",
      duration: "60 min",
      category: "Communauté",
      description: "Débats et témoignages de la communauté tech musulmane"
    },
    {
      time: "21:00",
      title: "Isha Tech Review",
      duration: "40 min",
      category: "Actualités",
      description: "Revue des actualités tech du point de vue islamique"
    }
  ];

  const podcasts = [
    {
      id: 1,
      title: "Scholars & Tech",
      host: "Sheikh Dr. Muhammad Al-Jazairi",
      episodes: 47,
      rating: 4.9,
      category: "Fiqh Informatique",
      description: "Discussions approfondies sur l'intersection entre islam et technologie"
    },
    {
      id: 2,
      title: "Halal Startup Stories",
      host: "Yakoubi Yamina",
      episodes: 23,
      rating: 4.8,
      category: "Entrepreneuriat",
      description: "Récits inspirants d'entrepreneurs musulmans dans la tech"
    },
    {
      id: 3,
      title: "AI Ethics & Islam",
      host: "Dr. Amina Hassan",
      episodes: 31,
      rating: 4.7,
      category: "IA Éthique",
      description: "Exploration de l'intelligence artificielle selon les valeurs islamiques"
    }
  ];

  const stats = {
    totalViewers: "547K",
    liveChannels: 12,
    monthlyContent: "240h",
    countries: 67,
    languages: 15,
    satisfaction: "98%"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Video className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Web TV Halal
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            📺 Première plateforme de diffusion islamique dédiée à la technologie éthique et l'innovation halal
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-300">
              <Play className="h-4 w-4 mr-1" />
              12 Chaînes Live
            </Badge>
            <Badge variant="outline" className="bg-pink-100 text-pink-800 border-pink-300">
              <Users className="h-4 w-4 mr-1" />
              547K Spectateurs
            </Badge>
            <Badge variant="outline" className="bg-red-100 text-red-800 border-red-300">
              <Globe className="h-4 w-4 mr-1" />
              67 Pays
            </Badge>
          </div>
        </div>

        {/* Statistiques en temps réel */}
        <Card className="mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <CardHeader>
            <CardTitle className="text-center text-white">Statistiques Temps Réel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">{stats.totalViewers}</div>
                <div className="text-sm opacity-90">Spectateurs Totaux</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.liveChannels}</div>
                <div className="text-sm opacity-90">Chaînes Live</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.monthlyContent}</div>
                <div className="text-sm opacity-90">Contenu/Mois</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.countries}</div>
                <div className="text-sm opacity-90">Pays</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.languages}</div>
                <div className="text-sm opacity-90">Langues</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.satisfaction}</div>
                <div className="text-sm opacity-90">Satisfaction</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="live" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="live">🔴 En Direct</TabsTrigger>
            <TabsTrigger value="programs">📅 Programmes</TabsTrigger>
            <TabsTrigger value="podcasts">🎙️ Podcasts</TabsTrigger>
            <TabsTrigger value="about">ℹ️ À Propos</TabsTrigger>
          </TabsList>

          {/* Onglet En Direct */}
          <TabsContent value="live">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {channels.map((channel) => (
                <Card key={channel.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                      <Video className="h-16 w-16 text-white" />
                    </div>
                    {channel.status === 'live' && (
                      <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                        🔴 LIVE
                      </Badge>
                    )}
                    {channel.status === 'scheduled' && (
                      <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                        📅 {channel.nextShow}
                      </Badge>
                    )}
                    <Badge className="absolute top-4 right-4 bg-black/50 text-white">
                      {channel.status === 'live' ? `👁️ ${channel.viewers}` : channel.lastShow}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {channel.name}
                      <Badge variant="outline">{channel.category}</Badge>
                    </CardTitle>
                    <CardDescription>
                      <div className="mb-2">{channel.description}</div>
                      <div className="flex items-center justify-between text-sm">
                        <span>👥 {channel.subscribers} abonnés</span>
                        <span>🌍 {channel.language}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1" 
                        variant={channel.status === 'live' ? 'default' : 'secondary'}
                      >
                        <Play className="h-4 w-4 mr-2" />
                        {channel.status === 'live' ? 'Regarder' : 'Programmer'}
                      </Button>
                      <Button variant="outline" size="sm">
                        <Star className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet Programmes */}
          <TabsContent value="programs">
            <Card>
              <CardHeader>
                <CardTitle>Programme du Jour - {new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</CardTitle>
                <CardDescription>
                  Grille de programmation conforme aux horaires de prière islamiques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {programs.map((program, index) => (
                    <div key={index} className="flex gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Clock className="h-6 w-6 text-purple-600" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-lg">{program.title}</h3>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{program.category}</Badge>
                            <span className="text-sm text-gray-500">{program.duration}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-2">{program.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>🕐 {program.time}</span>
                          <span>⏱️ {program.duration}</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <Button size="sm" variant="outline">
                          <Calendar className="h-4 w-4 mr-1" />
                          Rappel
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Podcasts */}
          <TabsContent value="podcasts">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {podcasts.map((podcast) => (
                <Card key={podcast.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-center h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg mb-4">
                      <Mic className="h-12 w-12 text-white" />
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      {podcast.title}
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">{podcast.rating}</span>
                      </div>
                    </CardTitle>
                    <CardDescription>
                      <div className="mb-2">
                        <strong>Animateur:</strong> {podcast.host}
                      </div>
                      <div className="mb-2">{podcast.description}</div>
                      <Badge variant="secondary">{podcast.category}</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600">{podcast.episodes} épisodes</span>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">Populaire</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <Play className="h-4 w-4 mr-2" />
                        Écouter
                      </Button>
                      <Button variant="outline" size="sm">
                        <BookOpen className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet À Propos */}
          <TabsContent value="about">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Mission */}
              <Card>
                <CardHeader>
                  <CardTitle>Notre Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Web TV Halal révolutionne la diffusion de contenu islamique en se concentrant sur 
                    l'intersection entre technologie moderne et valeurs islamiques authentiques.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Éduquer sur les technologies conformes à l'islam</li>
                    <li>• Promouvoir l'entrepreneuriat halal</li>
                    <li>• Connecter la communauté musulmane mondiale</li>
                    <li>• Fournir des formations certifiées Fiqh informatique</li>
                    <li>• Développer l'innovation éthique</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Conformité Islamique */}
              <Card>
                <CardHeader>
                  <CardTitle>Conformité Islamique</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Supervision Religieuse</h4>
                      <p className="text-sm text-gray-600">
                        Tout contenu supervisé par un comité de 150+ scholars internationaux 
                        pour garantir la conformité Sharia.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Contenu Halal Exclusif</h4>
                      <p className="text-sm text-gray-600">
                        Aucun contenu inapproprié, musique non-islamique ou image contraire 
                        aux valeurs islamiques.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Respect des Prières</h4>
                      <p className="text-sm text-gray-600">
                        Programmation adaptée aux 5 prières quotidiennes avec rappels 
                        automatiques pour les spectateurs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Expansion */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Expansion Mondiale 2025</CardTitle>
                  <CardDescription>
                    Objectifs de croissance et nouvelles fonctionnalités
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold">1M+</div>
                      <div className="text-sm text-gray-600">Spectateurs visés</div>
                    </div>
                    <div className="text-center">
                      <Globe className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold">100+</div>
                      <div className="text-sm text-gray-600">Pays couverts</div>
                    </div>
                    <div className="text-center">
                      <Video className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-sm text-gray-600">Chaînes prévues</div>
                    </div>
                    <div className="text-center">
                      <Mic className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold">25</div>
                      <div className="text-sm text-gray-600">Langues diffusion</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}