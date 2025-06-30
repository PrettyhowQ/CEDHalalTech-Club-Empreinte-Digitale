import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Play, 
  Pause, 
  Volume2, 
  Settings, 
  Calendar, 
  Clock, 
  Users, 
  Eye, 
  ThumbsUp, 
  Share2,
  Download,
  Upload,
  Zap,
  Brain,
  Heart,
  Star,
  TrendingUp,
  Globe,
  Youtube,
  Mic,
  Video,
  Edit,
  Save,
  RefreshCw,
  CheckCircle,
  BookOpen
} from 'lucide-react';

interface VideoContent {
  id: string;
  title: string;
  description: string;
  category: 'motivation' | 'tech-ethics' | 'spiritual' | 'education';
  status: 'published' | 'scheduled' | 'draft' | 'processing';
  views: number;
  likes: number;
  duration: string;
  publishDate: string;
  thumbnail: string;
  tags: string[];
  isHalalCertified: boolean;
  aiGenerated: boolean;
  language: string;
}

interface ScheduleItem {
  id: string;
  title: string;
  type: 'video' | 'live' | 'premiere';
  scheduledTime: string;
  duration: string;
  category: string;
  status: 'pending' | 'ready' | 'published';
}

export default function WebTVPrettyhowQ() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<VideoContent | null>(null);

  const categories = [
    { id: 'all', name: 'Tout', count: 156, icon: Globe },
    { id: 'motivation', name: 'Motivation', count: 45, icon: Heart },
    { id: 'tech-ethics', name: 'Éthique Tech', count: 38, icon: Brain },
    { id: 'spiritual', name: 'Spiritualité', count: 42, icon: Star },
    { id: 'education', name: 'Éducation', count: 31, icon: BookOpen }
  ];

  const videoContent: VideoContent[] = [
    {
      id: 'v1',
      title: 'La Réussite selon les Principes Islamiques - Motivation Quotidienne',
      description: 'Découvrez comment atteindre vos objectifs en respectant les valeurs islamiques. Une approche équilibrée entre ambition et spiritualité.',
      category: 'motivation',
      status: 'published',
      views: 12500,
      likes: 890,
      duration: '8:45',
      publishDate: '2025-01-01',
      thumbnail: '/api/placeholder/320/180',
      tags: ['motivation', 'islam', 'réussite', 'spiritualité'],
      isHalalCertified: true,
      aiGenerated: true,
      language: 'Français'
    },
    {
      id: 'v2',
      title: 'IA Éthique : Développer des Algorithmes Justes et Transparents',
      description: 'Apprenez à créer des systèmes IA qui respectent les principes de justice et de transparence selon les valeurs islamiques.',
      category: 'tech-ethics',
      status: 'published',
      views: 8900,
      likes: 654,
      duration: '15:20',
      publishDate: '2024-12-28',
      thumbnail: '/api/placeholder/320/180',
      tags: ['ia', 'éthique', 'algorithmique', 'justice'],
      isHalalCertified: true,
      aiGenerated: true,
      language: 'Français'
    },
    {
      id: 'v3',
      title: 'Les Noms d\'Allah et la Technologie : Méditation Matinale',
      description: 'Une réflexion spirituelle sur comment les 99 Noms d\'Allah peuvent nous inspirer dans notre travail technologique quotidien.',
      category: 'spiritual',
      status: 'scheduled',
      views: 0,
      likes: 0,
      duration: '12:30',
      publishDate: '2025-01-02',
      thumbnail: '/api/placeholder/320/180',
      tags: ['spiritualité', 'méditation', 'noms Allah', 'tech'],
      isHalalCertified: true,
      aiGenerated: true,
      language: 'Français'
    },
    {
      id: 'v4',
      title: 'Créer une Startup Tech Halal : Guide Complet 2025',
      description: 'Toutes les étapes pour lancer votre entreprise technologique en respectant les principes islamiques de commerce équitable.',
      category: 'education',
      status: 'draft',
      views: 0,
      likes: 0,
      duration: '22:15',
      publishDate: '2025-01-05',
      thumbnail: '/api/placeholder/320/180',
      tags: ['startup', 'entrepreneuriat', 'halal', 'business'],
      isHalalCertified: true,
      aiGenerated: true,
      language: 'Français'
    }
  ];

  const schedule: ScheduleItem[] = [
    {
      id: 's1',
      title: 'Motivation du Matin : Commencer la Journée avec Intention',
      type: 'video',
      scheduledTime: '2025-01-02T06:00:00',
      duration: '5:00',
      category: 'motivation',
      status: 'ready'
    },
    {
      id: 's2',
      title: 'Live Q&A : Éthique IA et Développement Halal',
      type: 'live',
      scheduledTime: '2025-01-02T20:00:00',
      duration: '60:00',
      category: 'tech-ethics',
      status: 'pending'
    },
    {
      id: 's3',
      title: 'Première : Série Fiqh Informatique Episode 1',
      type: 'premiere',
      scheduledTime: '2025-01-03T19:00:00',
      duration: '25:00',
      category: 'education',
      status: 'ready'
    }
  ];

  const filteredContent = videoContent.filter(video => 
    selectedCategory === 'all' || video.category === selectedCategory
  );

  const handleGenerateContent = async () => {
    setIsGenerating(true);
    setGenerationProgress(0);
    
    // Simulation du processus de génération
    const steps = [
      'Analyse du sujet et recherche...',
      'Génération du script conforme Fiqh...',
      'Création des visuels éthiques...',
      'Synthèse vocale naturelle...',
      'Assemblage et optimisation...',
      'Vérification conformité halal...',
      'Publication automatique...'
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setGenerationProgress(((i + 1) / steps.length) * 100);
    }

    setIsGenerating(false);
    setGenerationProgress(0);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'motivation': return <Heart className="h-4 w-4" />;
      case 'tech-ethics': return <Brain className="h-4 w-4" />;
      case 'spiritual': return <Star className="h-4 w-4" />;
      case 'education': return <BookOpen className="h-4 w-4" />;
      default: return <Globe className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                📺 WebTV IA PrettyhowQ
              </div>
              <Badge variant="secondary" className="bg-red-100 text-red-800">
                <Youtube className="h-3 w-3 mr-1" />
                Chaîne Automatisée
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge variant="outline">
                156 vidéos publiées
              </Badge>
              <Badge variant="outline">
                250K+ abonnés
              </Badge>
              <Button onClick={handleGenerateContent} disabled={isGenerating}>
                {isGenerating ? (
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Zap className="h-4 w-4 mr-2" />
                )}
                Générer Contenu IA
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Processus de génération */}
      {isGenerating && (
        <div className="bg-yellow-50 border-b border-yellow-200 p-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Génération de contenu en cours...</span>
              <span className="text-sm">{Math.round(generationProgress)}%</span>
            </div>
            <Progress value={generationProgress} className="h-2" />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            WebTV IA Automatisée
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Programmation YouTube entièrement automatisée avec IA éthique. 
            Contenu motivant, éducatif et spirituel généré selon les principes islamiques.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">250K+</div>
              <div className="text-sm text-muted-foreground">Abonnés YouTube</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">2.5M+</div>
              <div className="text-sm text-muted-foreground">Vues totales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">156</div>
              <div className="text-sm text-muted-foreground">Vidéos publiées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-sm text-muted-foreground">Halal certifié</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Tabs defaultValue="content" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="content">📹 Contenu</TabsTrigger>
            <TabsTrigger value="schedule">📅 Programmation</TabsTrigger>
            <TabsTrigger value="analytics">📊 Analytics</TabsTrigger>
            <TabsTrigger value="settings">⚙️ Configuration</TabsTrigger>
          </TabsList>

          {/* Contenu */}
          <TabsContent value="content" className="space-y-8">
            {/* Filtres */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name} ({cat.count})
                      </option>
                    ))}
                  </select>
                  
                  <Button variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Importer Script
                  </Button>
                  
                  <Button variant="outline">
                    <Edit className="h-4 w-4 mr-2" />
                    Créer Manuellement
                  </Button>
                  
                  <Button>
                    <Zap className="h-4 w-4 mr-2" />
                    Génération IA
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Liste des vidéos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContent.map((video) => (
                <Card key={video.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedVideo(video)}>
                  <CardHeader className="pb-4">
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-40 object-cover rounded-lg mb-3"
                      />
                      <div className="absolute top-2 left-2 flex flex-col gap-1">
                        <Badge variant="secondary" className={getStatusColor(video.status)}>
                          {video.status === 'published' ? 'Publié' : 
                           video.status === 'scheduled' ? 'Programmé' :
                           video.status === 'draft' ? 'Brouillon' : 'En cours'}
                        </Badge>
                        {video.isHalalCertified && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            🌙 Halal
                          </Badge>
                        )}
                        {video.aiGenerated && (
                          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                            🤖 IA
                          </Badge>
                        )}
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                        {video.duration}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          {getCategoryIcon(video.category)}
                          <span className="text-xs capitalize">{video.category}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">{video.language}</Badge>
                      </div>
                      
                      <CardTitle className="text-lg line-clamp-2">{video.title}</CardTitle>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {video.description}
                      </p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {video.views.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {video.likes.toLocaleString()}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {video.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="border-t pt-4">
                        <div className="grid grid-cols-2 gap-2">
                          <Button size="sm" className="text-xs">
                            <Play className="h-3 w-3 mr-1" />
                            Lire
                          </Button>
                          <Button variant="outline" size="sm" className="text-xs">
                            <Share2 className="h-3 w-3 mr-1" />
                            Partager
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Programmation */}
          <TabsContent value="schedule" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Planning de Publication Automatique</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {schedule.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {item.type === 'video' ? '📹 Vidéo' : 
                               item.type === 'live' ? '🔴 Live' : '🎬 Première'}
                            </Badge>
                            <Badge variant="secondary" className={
                              item.status === 'ready' ? 'bg-green-100 text-green-800' :
                              item.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'
                            }>
                              {item.status === 'ready' ? 'Prêt' : 
                               item.status === 'pending' ? 'En attente' : 'Publié'}
                            </Badge>
                          </div>
                          
                          <h3 className="font-medium mb-1">{item.title}</h3>
                          
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(item.scheduledTime).toLocaleDateString('fr-FR')}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {new Date(item.scheduledTime).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                            </span>
                            <span>Durée: {item.duration}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-3 w-3 mr-1" />
                            Modifier
                          </Button>
                          {item.status === 'ready' && (
                            <Button size="sm">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Publier
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <Youtube className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-2xl font-bold">250,432</p>
                      <p className="text-sm text-muted-foreground">Abonnés</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Eye className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-2xl font-bold">2.5M</p>
                      <p className="text-sm text-muted-foreground">Vues totales</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-2xl font-bold">+15%</p>
                      <p className="text-sm text-muted-foreground">Croissance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-2xl font-bold">8:45</p>
                      <p className="text-sm text-muted-foreground">Durée moy.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Configuration */}
          <TabsContent value="settings" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Paramètres de Génération IA</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Fréquence de publication</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>Quotidienne</option>
                      <option>3x par semaine</option>
                      <option>Hebdomadaire</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Longueur préférée</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>Courte (5-10 min)</option>
                      <option>Moyenne (10-20 min)</option>
                      <option>Longue (20+ min)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Style de voix</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>Naturelle et chaleureuse</option>
                      <option>Professionnelle</option>
                      <option>Énergique et motivante</option>
                    </select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Conformité Halal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Filtrage automatique du contenu</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Activé</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Vérification par scholars</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Activé</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Respect des horaires de prière</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Activé</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Contenu adapté famille</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Activé</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © Yakoubi Yamina – Tous droits réservés | All rights reserved | جميع الحقوق محفوظة
            </p>
            <div className="flex justify-center space-x-4 text-xs">
              <Badge variant="secondary">100% Halal Certifié</Badge>
              <Badge variant="outline">IA Éthique</Badge>
              <Badge variant="outline">Contenu Automatisé</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}