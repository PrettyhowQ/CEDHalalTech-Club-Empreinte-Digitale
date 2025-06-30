import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, Calendar, Clock, Users, TrendingUp, Camera, Mic, Film, Settings } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

interface VideoContent {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  viewers: number;
  likes: number;
  thumbnail: string;
  publishedAt: string;
  tags: string[];
  status: 'live' | 'scheduled' | 'published' | 'draft';
}

interface AutomationStats {
  videosGenerated: number;
  totalViews: number;
  engagement: number;
  subscribers: number;
  dailyUploads: number;
}

export default function WebTVPrettyhowQ() {
  const [isLive, setIsLive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('motivation');
  const [automationStats, setAutomationStats] = useState<AutomationStats>({
    videosGenerated: 1247,
    totalViews: 2840000,
    engagement: 94.7,
    subscribers: 156000,
    dailyUploads: 3
  });

  const categories = [
    { id: 'motivation', name: 'Motivation Islamique', icon: '💪', color: 'bg-green-500' },
    { id: 'ethics', name: 'Éthique Tech', icon: '🤖', color: 'bg-blue-500' },
    { id: 'halal-careers', name: 'Métiers Halal', icon: '💼', color: 'bg-purple-500' },
    { id: 'spirituality', name: 'Spiritualité Numérique', icon: '🕌', color: 'bg-indigo-500' },
    { id: 'education', name: 'Éducation IA', icon: '📚', color: 'bg-orange-500' },
    { id: 'live-shows', name: 'Émissions Live', icon: '📺', color: 'bg-red-500' }
  ];

  const upcomingVideos: VideoContent[] = [
    {
      id: 'vid-001',
      title: 'IA et Islam : Comment Développer une Tech Éthique en 2025',
      description: 'Découvrez les principes islamiques pour créer une intelligence artificielle respectueuse des valeurs halal.',
      category: 'ethics',
      duration: '12:34',
      viewers: 24680,
      likes: 1890,
      thumbnail: '/api/placeholder/320/180',
      publishedAt: '2025-01-01T10:00:00Z',
      tags: ['IA', 'Islam', 'Éthique', 'Technologie', 'Halal'],
      status: 'scheduled'
    },
    {
      id: 'vid-002',
      title: 'Métiers du Futur Conformes à la Sharia : Guide Complet',
      description: 'Les carrières technologiques les plus prometteuses qui respectent les principes islamiques.',
      category: 'halal-careers',
      duration: '18:22',
      viewers: 31245,
      likes: 2156,
      thumbnail: '/api/placeholder/320/180',
      publishedAt: '2025-01-01T15:00:00Z',
      tags: ['Carrière', 'Sharia', 'Technologie', 'Emploi', 'Halal'],
      status: 'scheduled'
    },
    {
      id: 'vid-003',
      title: 'Motivation Matinale : Les Leçons du Prophète pour Entrepreneurs',
      description: 'Comment appliquer les enseignements prophétiques dans l\'entrepreneuriat moderne.',
      category: 'motivation',
      duration: '8:45',
      viewers: 45123,
      likes: 3420,
      thumbnail: '/api/placeholder/320/180',
      publishedAt: '2025-01-02T06:00:00Z',
      tags: ['Motivation', 'Prophète', 'Entrepreneur', 'Spiritualité'],
      status: 'scheduled'
    }
  ];

  const liveShows = [
    {
      id: 'live-001',
      title: 'Émission Spéciale : Fintech Islamique en Direct',
      description: 'Discussion en direct sur l\'avenir de la banque islamique digitale avec des experts internationaux.',
      scheduledTime: '19:00',
      duration: '60 min',
      guests: ['Dr. Ahmed Al-Rashid', 'Prof. Fatima Al-Zahra', 'Yakoubi Yamina'],
      topics: ['Banque Islamique', 'DeFi Halal', 'Régulation Sharia']
    },
    {
      id: 'live-002',
      title: 'Questions-Réponses : IA Éthique et Islam',
      description: 'Séance interactive où les viewers peuvent poser leurs questions sur l\'IA responsable.',
      scheduledTime: '21:00',
      duration: '45 min',
      guests: ['Équipe Super IARP Pro'],
      topics: ['IA Responsable', 'Fiqh Informatique', 'Tech Halal']
    }
  ];

  const automationFeatures = [
    {
      icon: <Camera className="h-6 w-6" />,
      title: 'Génération Vidéo IA',
      description: 'Création automatique de contenus visuels respectueux avec IA générative',
      status: 'Actif',
      efficiency: 96
    },
    {
      icon: <Mic className="h-6 w-6" />,
      title: 'Voix Naturelle IA',
      description: 'Narration automatique avec voix masculine/féminine selon contexte islamique',
      status: 'Actif',
      efficiency: 94
    },
    {
      icon: <Film className="h-6 w-6" />,
      title: 'Montage Automatique',
      description: 'Édition clean sans musique haram, transitions fluides respectueuses',
      status: 'Actif',
      efficiency: 98
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Optimisation SEO',
      description: 'Titres, descriptions et hashtags générés automatiquement pour maximiser portée',
      status: 'Actif',
      efficiency: 92
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header avec indicateur live */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                📺 WebTV IA PrettyhowQ
              </div>
              {isLive && (
                <Badge variant="destructive" className="animate-pulse">
                  🔴 EN DIRECT
                </Badge>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                100% Halal Certifié
              </Badge>
              <Badge variant="outline">
                {automationStats.subscribers.toLocaleString()} abonnés
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">Tableau de Bord</TabsTrigger>
            <TabsTrigger value="programming">Programmation</TabsTrigger>
            <TabsTrigger value="automation">Automatisation</TabsTrigger>
            <TabsTrigger value="live">Émissions Live</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Tableau de Bord */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats principales */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Vidéos Générées</CardTitle>
                  <Film className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{automationStats.videosGenerated.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">+{automationStats.dailyUploads} aujourd'hui</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Vues Totales</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{(automationStats.totalViews / 1000000).toFixed(1)}M</div>
                  <p className="text-xs text-muted-foreground">+15.3% ce mois</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Engagement</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{automationStats.engagement}%</div>
                  <p className="text-xs text-muted-foreground">Taux excellent</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Abonnés</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{(automationStats.subscribers / 1000).toFixed(0)}K</div>
                  <p className="text-xs text-muted-foreground">+2.1K cette semaine</p>
                </CardContent>
              </Card>
            </div>

            {/* Vidéos récentes */}
            <Card>
              <CardHeader>
                <CardTitle>Dernières Vidéos Publiées</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {upcomingVideos.map((video) => (
                    <div key={video.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-32 object-cover rounded mb-3"
                      />
                      <h3 className="font-semibold text-sm mb-2 line-clamp-2">{video.title}</h3>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {video.duration}
                        </span>
                        <span>{video.viewers.toLocaleString()} vues</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {video.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Programmation */}
          <TabsContent value="programming" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Catégories de Contenu</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {categories.map((category) => (
                    <Card
                      key={category.id}
                      className={`cursor-pointer transition-all hover:scale-105 ${
                        selectedCategory === category.id ? 'ring-2 ring-blue-500' : ''
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <CardContent className="p-4 text-center">
                        <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center text-white text-xl mx-auto mb-2`}>
                          {category.icon}
                        </div>
                        <h3 className="font-medium text-sm">{category.name}</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Programmation Automatique</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingVideos.map((video) => (
                    <div key={video.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <h3 className="font-medium">{video.title}</h3>
                          <p className="text-sm text-muted-foreground">{video.description}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline">{video.category}</Badge>
                            <span className="text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3 inline mr-1" />
                              {new Date(video.publishedAt).toLocaleDateString('fr-FR')}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Badge
                        variant={video.status === 'scheduled' ? 'secondary' : 'default'}
                      >
                        {video.status === 'scheduled' ? 'Programmé' : 'Publié'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Automatisation */}
          <TabsContent value="automation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pipeline d'Automatisation IA</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {automationFeatures.map((feature, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                            {feature.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className="bg-green-50 text-green-700">
                                {feature.status}
                              </Badge>
                              <span className="text-sm font-medium">{feature.efficiency}%</span>
                            </div>
                            <Progress value={feature.efficiency} className="mt-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Intégrations Externes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { name: 'Zapier', status: 'Connecté', icon: '🔄' },
                    { name: 'Notion', status: 'Connecté', icon: '📝' },
                    { name: 'Google Drive', status: 'Connecté', icon: '💾' },
                    { name: 'YouTube API', status: 'Connecté', icon: '📺' }
                  ].map((integration) => (
                    <Card key={integration.name}>
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl mb-2">{integration.icon}</div>
                        <h3 className="font-medium">{integration.name}</h3>
                        <Badge variant="outline" className="mt-2 bg-green-50 text-green-700">
                          {integration.status}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Émissions Live */}
          <TabsContent value="live" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>Émissions en Direct</span>
                  <Button
                    onClick={() => setIsLive(!isLive)}
                    variant={isLive ? "destructive" : "default"}
                    size="sm"
                  >
                    {isLive ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                    {isLive ? 'Arrêter' : 'Démarrer'} Live
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {liveShows.map((show) => (
                    <Card key={show.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">{show.title}</h3>
                            <p className="text-muted-foreground mb-4">{show.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <span className="font-medium">Horaire:</span> {show.scheduledTime}
                              </div>
                              <div>
                                <span className="font-medium">Durée:</span> {show.duration}
                              </div>
                              <div>
                                <span className="font-medium">Invités:</span> {show.guests.join(', ')}
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {show.topics.map((topic) => (
                                <Badge key={topic} variant="secondary">
                                  {topic}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-red-50 text-red-700">
                            Programmé
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance par Catégorie</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {categories.map((category, index) => (
                      <div key={category.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 ${category.color} rounded-full flex items-center justify-center text-white text-sm`}>
                            {category.icon}
                          </div>
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{(85 + index * 2).toFixed(1)}%</div>
                          <div className="text-xs text-muted-foreground">engagement</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Audience Mondiale</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { country: 'France', percentage: 28, views: '680K' },
                      { country: 'Maroc', percentage: 22, views: '530K' },
                      { country: 'Algérie', percentage: 18, views: '430K' },
                      { country: 'Tunisie', percentage: 12, views: '290K' },
                      { country: 'Suisse', percentage: 8, views: '190K' },
                      { country: 'Canada', percentage: 7, views: '170K' },
                      { country: 'Autres', percentage: 5, views: '120K' }
                    ].map((country) => (
                      <div key={country.country} className="flex items-center justify-between">
                        <span className="font-medium">{country.country}</span>
                        <div className="flex items-center space-x-3">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${country.percentage}%` }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground w-12 text-right">
                            {country.views}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer avec mentions légales */}
      <div className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © Yakoubi Yamina – Tous droits réservés | All rights reserved | جميع الحقوق محفوظة | 版权所有
            </p>
            <p className="text-xs text-muted-foreground">
              Respect du RGPD | Hébergement suisse | Confidentialité des données | Respect total du Fiqh
            </p>
            <div className="flex justify-center space-x-4 text-xs">
              <Badge variant="secondary">100% Halal Certifié</Badge>
              <Badge variant="outline">Conforme AAOIFI</Badge>
              <Badge variant="outline">IA Éthique Responsable</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}