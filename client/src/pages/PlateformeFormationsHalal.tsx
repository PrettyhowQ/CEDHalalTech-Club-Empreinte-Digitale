import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Play, 
  Download, 
  Award, 
  Users, 
  Clock, 
  Star,
  CheckCircle,
  Globe,
  Brain,
  Heart,
  Shield,
  FileText,
  Video,
  Headphones,
  MessageSquare,
  TrendingUp,
  Target,
  Zap
} from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  duration: string;
  price: number;
  originalPrice?: number;
  rating: number;
  students: number;
  instructor: string;
  isHalalCertified: boolean;
  topics: string[];
  format: 'Video' | 'PDF' | 'Interactive' | 'Live' | 'Mixed';
  language: string[];
  thumbnail: string;
  isNew?: boolean;
  isBestseller?: boolean;
  lastUpdated: string;
  exercises: number;
  quizzes: number;
  certificate: boolean;
}

interface Instructor {
  id: string;
  name: string;
  title: string;
  experience: string;
  specialization: string[];
  rating: number;
  students: number;
  courses: number;
  biography: string;
}

export default function PlateformeFormationsHalal() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [userProgress, setUserProgress] = useState<Record<string, number>>({});

  const categories = [
    { id: 'all', name: 'Toutes les formations', count: 28, icon: Globe },
    { id: 'ia-responsable', name: 'IA Responsable', count: 8, icon: Brain },
    { id: 'metiers-coeur', name: 'Métiers du Cœur', count: 6, icon: Heart },
    { id: 'pudeur-numerique', name: 'Pudeur Numérique', count: 4, icon: Shield },
    { id: 'fiqh-informatique', name: 'Fiqh Informatique', count: 10, icon: BookOpen }
  ];

  const instructors: Instructor[] = [
    {
      id: 'dr-ahmed-al-rashid',
      name: 'Dr. Ahmed Al-Rashid',
      title: 'Expert en IA Éthique Islamique',
      experience: '15 ans',
      specialization: ['Intelligence Artificielle', 'Éthique Islamique', 'Fiqh Informatique'],
      rating: 4.9,
      students: 12500,
      courses: 8,
      biography: 'Docteur en Informatique de Stanford et scholar en sciences islamiques. Pioneer dans le développement d\'IA conforme aux principes islamiques.'
    },
    {
      id: 'prof-fatima-al-zahra',
      name: 'Prof. Fatima Al-Zahra',
      title: 'Spécialiste Métiers du Cœur',
      experience: '12 ans',
      specialization: ['Entrepreneuriat Social', 'Tech for Good', 'Impact Social'],
      rating: 4.8,
      students: 8900,
      courses: 6,
      biography: 'Professeure en entrepreneuriat social et consultante internationale pour l\'ONU sur l\'impact technologique positif.'
    },
    {
      id: 'yakoubi-yamina',
      name: 'Prof. Yakoubi Yamina',
      title: 'Fondatrice PrettyhowQ HalalTech™',
      experience: '20 ans',
      specialization: ['Pudeur Numérique', 'RGPD Islamique', 'Leadership Tech'],
      rating: 5.0,
      students: 15600,
      courses: 12,
      biography: 'Pionnière du concept de pudeur numérique et créatrice du framework HalalTech™. Expert en conformité technologique islamique.'
    }
  ];

  const courses: Course[] = [
    {
      id: 'ai-ethics-islamic-complete',
      title: 'IA Responsable et Éthique Islamique - Formation Complète',
      description: 'Maîtrisez le développement d\'intelligence artificielle conforme aux principes islamiques. Formation certifiante reconnue internationalement.',
      category: 'ia-responsable',
      level: 'Intermédiaire',
      duration: '12 semaines',
      price: 399,
      originalPrice: 599,
      rating: 4.9,
      students: 3420,
      instructor: 'Dr. Ahmed Al-Rashid',
      isHalalCertified: true,
      topics: ['Fiqh Informatique', 'Machine Learning Éthique', 'Algorithmes Transparents', 'Bias Mitigation'],
      format: 'Mixed',
      language: ['Français', 'Arabe', 'Anglais'],
      thumbnail: '/api/placeholder/320/180',
      isNew: true,
      isBestseller: true,
      lastUpdated: '2025-01-01',
      exercises: 45,
      quizzes: 12,
      certificate: true
    },
    {
      id: 'digital-modesty-masterclass',
      title: 'Pudeur Numérique et Protection des Données Islamique',
      description: 'Apprenez à protéger votre vie privée et celle de vos utilisateurs selon les principes islamiques de pudeur et confidentialité.',
      category: 'pudeur-numerique',
      level: 'Avancé',
      duration: '8 semaines',
      price: 299,
      originalPrice: 449,
      rating: 4.8,
      students: 2156,
      instructor: 'Prof. Yakoubi Yamina',
      isHalalCertified: true,
      topics: ['RGPD Islamique', 'Cybersécurité Halal', 'Confidentialité', 'Amanah Numérique'],
      format: 'Interactive',
      language: ['Français', 'Arabe'],
      thumbnail: '/api/placeholder/320/180',
      isNew: false,
      isBestseller: true,
      lastUpdated: '2024-12-15',
      exercises: 32,
      quizzes: 8,
      certificate: true
    },
    {
      id: 'tech-for-good-entrepreneurship',
      title: 'Entrepreneuriat Tech for Good - Créer un Impact Positif',
      description: 'Lancez votre startup technologique à impact social positif en respectant les valeurs islamiques d\'entraide et de justice.',
      category: 'metiers-coeur',
      level: 'Débutant',
      duration: '10 semaines',
      price: 249,
      rating: 4.7,
      students: 1890,
      instructor: 'Prof. Fatima Al-Zahra',
      isHalalCertified: true,
      topics: ['Business Model Social', 'Financement Éthique', 'Impact Measurement', 'Lean Startup Halal'],
      format: 'Video',
      language: ['Français', 'Anglais'],
      thumbnail: '/api/placeholder/320/180',
      isNew: true,
      isBestseller: false,
      lastUpdated: '2025-01-01',
      exercises: 28,
      quizzes: 6,
      certificate: true
    },
    {
      id: 'fiqh-informatique-foundations',
      title: 'Fondements du Fiqh Informatique - Guide Essentiel',
      description: 'Base solide en jurisprudence islamique appliquée à la technologie. Référence indispensable pour tout développeur musulman.',
      category: 'fiqh-informatique',
      level: 'Débutant',
      duration: '6 semaines',
      price: 199,
      rating: 4.9,
      students: 4820,
      instructor: 'Dr. Ahmed Al-Rashid',
      isHalalCertified: true,
      topics: ['Sources Islamiques', 'Halal/Haram Tech', 'Méthodologie Fiqh', 'Cas Pratiques'],
      format: 'Mixed',
      language: ['Français', 'Arabe', 'Anglais'],
      thumbnail: '/api/placeholder/320/180',
      isNew: false,
      isBestseller: true,
      lastUpdated: '2024-11-20',
      exercises: 24,
      quizzes: 10,
      certificate: true
    },
    {
      id: 'halal-prompt-engineering',
      title: 'Prompt Engineering Fiqh-Compliant - Générateur IA Éthique',
      description: 'Créez des prompts IA respectueux des valeurs islamiques. Maîtrisez l\'art de communiquer avec l\'IA de manière éthique.',
      category: 'ia-responsable',
      level: 'Intermédiaire',
      duration: '4 semaines',
      price: 149,
      rating: 4.6,
      students: 2840,
      instructor: 'Équipe PrettyhowQ',
      isHalalCertified: true,
      topics: ['Prompt Design', 'Filtrage Halal', 'Optimisation', 'Cas d\'Usage'],
      format: 'Interactive',
      language: ['Français', 'Arabe'],
      thumbnail: '/api/placeholder/320/180',
      isNew: true,
      isBestseller: false,
      lastUpdated: '2025-01-01',
      exercises: 35,
      quizzes: 5,
      certificate: true
    },
    {
      id: 'sustainable-tech-islam',
      title: 'Technologie Durable et Écologie Islamique',
      description: 'Développez une technologie respectueuse de l\'environnement selon les enseignements islamiques de préservation de la nature.',
      category: 'metiers-coeur',
      level: 'Intermédiaire',
      duration: '7 semaines',
      price: 279,
      rating: 4.5,
      students: 1456,
      instructor: 'Prof. Fatima Al-Zahra',
      isHalalCertified: true,
      topics: ['Green Computing', 'Éco-conception', 'Carbon Footprint', 'Stewardship'],
      format: 'Video',
      language: ['Français', 'Anglais'],
      thumbnail: '/api/placeholder/320/180',
      isNew: false,
      isBestseller: false,
      lastUpdated: '2024-10-30',
      exercises: 21,
      quizzes: 7,
      certificate: true
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      case 'popularity':
      default:
        return b.students - a.students;
    }
  });

  // Simulation du progrès utilisateur
  useEffect(() => {
    const mockProgress = {
      'ai-ethics-islamic-complete': 75,
      'digital-modesty-masterclass': 100,
      'fiqh-informatique-foundations': 45
    };
    setUserProgress(mockProgress);
  }, []);

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'Video': return <Video className="h-4 w-4" />;
      case 'PDF': return <FileText className="h-4 w-4" />;
      case 'Interactive': return <Zap className="h-4 w-4" />;
      case 'Live': return <MessageSquare className="h-4 w-4" />;
      case 'Mixed': return <BookOpen className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">
                📚 Plateforme Formations Halal & IA
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Certification PrettyhowQ HalalTech™
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge variant="outline">
                {courses.length} formations certifiées
              </Badge>
              <Badge variant="outline">
                78+ langues supportées
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Formations Tech Halal
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Apprenez les technologies du futur en respectant vos valeurs islamiques. 
            Formations certifiées par des scholars et experts internationaux.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">25,000+</div>
              <div className="text-sm text-muted-foreground">Étudiants formés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-muted-foreground">Halal certifié</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">4.8/5</div>
              <div className="text-sm text-muted-foreground">Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">95%</div>
              <div className="text-sm text-muted-foreground">Taux de réussite</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Tabs defaultValue="courses" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">📚 Cours</TabsTrigger>
            <TabsTrigger value="instructors">👨‍🏫 Instructeurs</TabsTrigger>
            <TabsTrigger value="certifications">🏆 Certifications</TabsTrigger>
            <TabsTrigger value="progress">📊 Mon Progrès</TabsTrigger>
          </TabsList>

          {/* Cours */}
          <TabsContent value="courses" className="space-y-8">
            {/* Filtres et recherche */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Input
                    placeholder="Rechercher une formation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name} ({cat.count})
                      </option>
                    ))}
                  </select>
                  
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">Tous les niveaux</option>
                    <option value="Débutant">Débutant</option>
                    <option value="Intermédiaire">Intermédiaire</option>
                    <option value="Avancé">Avancé</option>
                    <option value="Expert">Expert</option>
                  </select>
                  
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="popularity">Plus populaires</option>
                    <option value="rating">Mieux notés</option>
                    <option value="newest">Plus récents</option>
                    <option value="price-low">Prix croissant</option>
                    <option value="price-high">Prix décroissant</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Liste des formations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="relative">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-40 object-cover rounded-lg mb-3"
                      />
                      <div className="absolute top-2 left-2 flex flex-col gap-1">
                        {course.isNew && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            Nouveau
                          </Badge>
                        )}
                        {course.isBestseller && (
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                            Bestseller
                          </Badge>
                        )}
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          🌙 Halal Certifié
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{course.level}</Badge>
                        <div className="flex items-center space-x-1">
                          {getFormatIcon(course.format)}
                          <span className="text-xs">{course.format}</span>
                        </div>
                      </div>
                      
                      <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {course.description}
                      </p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {course.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {course.students.toLocaleString()}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Par {course.instructor}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {course.topics.slice(0, 3).map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="border-t pt-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            {course.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                {course.originalPrice} CHF
                              </span>
                            )}
                            <span className="text-lg font-bold text-emerald-600">
                              {course.price} CHF
                            </span>
                          </div>
                          {course.originalPrice && (
                            <Badge variant="destructive">
                              -{Math.round((1 - course.price / course.originalPrice) * 100)}%
                            </Badge>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2">
                          <Button size="sm" className="text-xs">
                            <Play className="h-3 w-3 mr-1" />
                            Commencer
                          </Button>
                          <Button variant="outline" size="sm" className="text-xs">
                            <BookOpen className="h-3 w-3 mr-1" />
                            Détails
                          </Button>
                        </div>
                        
                        {userProgress[course.id] && (
                          <div className="mt-3">
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span>Progrès</span>
                              <span>{userProgress[course.id]}%</span>
                            </div>
                            <Progress value={userProgress[course.id]} className="h-2" />
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Instructeurs */}
          <TabsContent value="instructors" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {instructors.map((instructor) => (
                <Card key={instructor.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                      {instructor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <CardTitle className="text-lg">{instructor.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{instructor.title}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4 text-center text-sm">
                        <div>
                          <div className="font-bold text-emerald-600">{instructor.experience}</div>
                          <div className="text-muted-foreground">Expérience</div>
                        </div>
                        <div>
                          <div className="font-bold text-blue-600">{instructor.students.toLocaleString()}</div>
                          <div className="text-muted-foreground">Étudiants</div>
                        </div>
                        <div>
                          <div className="font-bold text-purple-600">{instructor.rating}</div>
                          <div className="text-muted-foreground">Note</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Spécialisations</h4>
                        <div className="flex flex-wrap gap-1">
                          {instructor.specialization.map((spec) => (
                            <Badge key={spec} variant="secondary" className="text-xs">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Biographie</h4>
                        <p className="text-sm text-muted-foreground">
                          {instructor.biography}
                        </p>
                      </div>
                      
                      <Button className="w-full">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Voir les cours
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Certifications */}
          <TabsContent value="certifications" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Certification PrettyhowQ HalalTech™ Fondamental',
                  description: 'Certification de base en technologie éthique et développement conforme aux principes islamiques.',
                  requirements: ['Compléter 3 cours de base', 'Examen théorique (80%)', 'Projet pratique'],
                  duration: '3 mois',
                  recognition: 'Reconnue par AAOIFI et institutions islamiques mondiales',
                  badge: '🌙',
                  level: 'Fondamental'
                },
                {
                  name: 'Expert IA Éthique Islamique',
                  description: 'Certification avancée pour spécialistes en intelligence artificielle responsable et conforme à la Sharia.',
                  requirements: ['Certification Fondamental', '2 ans d\'expérience', 'Thèse sur IA éthique', 'Validation par 3 scholars'],
                  duration: '6 mois',
                  recognition: 'Certification professionnelle internationale - Standard IEEE',
                  badge: '🏆',
                  level: 'Expert'
                },
                {
                  name: 'Consultant Fiqh Informatique Certifié',
                  description: 'Formation complète pour devenir consultant en conformité technologique islamique.',
                  requirements: ['Master informatique ou équivalent', 'Études islamiques validées', 'Stage pratique 6 mois', 'Examen final scholars'],
                  duration: '12 mois',
                  recognition: 'Agrément scholars internationaux et reconnaissance OCI',
                  badge: '⭐',
                  level: 'Consultant'
                }
              ].map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{cert.badge}</div>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <Badge variant="outline">{cert.level}</Badge>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                      
                      <div>
                        <h4 className="font-medium text-sm mb-2">Prérequis :</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {cert.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-3 w-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Durée :</span>
                          <div className="text-muted-foreground">{cert.duration}</div>
                        </div>
                        <div>
                          <span className="font-medium">Niveau :</span>
                          <div className="text-muted-foreground">{cert.level}</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-sm mb-1">Reconnaissance :</h4>
                        <p className="text-xs text-muted-foreground">{cert.recognition}</p>
                      </div>
                      
                      <Button className="w-full">
                        <Award className="h-4 w-4 mr-2" />
                        S'inscrire à la certification
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Mon Progrès */}
          <TabsContent value="progress" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Mes Formations en Cours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(userProgress).map(([courseId, progress]) => {
                        const course = courses.find(c => c.id === courseId);
                        if (!course) return null;
                        
                        return (
                          <div key={courseId} className="border rounded-lg p-4">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="font-medium">{course.title}</h3>
                                <p className="text-sm text-muted-foreground">Par {course.instructor}</p>
                              </div>
                              <Badge variant={progress === 100 ? "default" : "secondary"}>
                                {progress === 100 ? 'Terminé' : 'En cours'}
                              </Badge>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span>Progrès</span>
                                <span>{progress}%</span>
                              </div>
                              <Progress value={progress} className="h-3" />
                            </div>
                            
                            <div className="flex items-center justify-between mt-3">
                              <Button size="sm" variant="outline">
                                <Play className="h-3 w-3 mr-1" />
                                Continuer
                              </Button>
                              {progress === 100 && (
                                <Button size="sm">
                                  <Download className="h-3 w-3 mr-1" />
                                  Certificat
                                </Button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Statistiques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Formations complétées</span>
                        <span className="font-bold text-emerald-600">1</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Formations en cours</span>
                        <span className="font-bold text-blue-600">2</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Heures d'étude</span>
                        <span className="font-bold text-purple-600">45h</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Certificats obtenus</span>
                        <span className="font-bold text-orange-600">1</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recommandations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm">
                        <div className="font-medium mb-1">Prochaine étape suggérée</div>
                        <p className="text-muted-foreground">
                          Terminez "IA Responsable et Éthique Islamique" pour débloquer le niveau Expert.
                        </p>
                      </div>
                      <Button size="sm" className="w-full">
                        <Target className="h-3 w-3 mr-1" />
                        Voir la formation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
              <Badge variant="outline">Certification PrettyhowQ HalalTech™</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}