import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Shield, 
  Heart, 
  Globe, 
  BookOpen, 
  Award, 
  Users, 
  CheckCircle, 
  Star,
  Download,
  MessageSquare,
  Search,
  Filter,
  Play,
  FileText,
  Code,
  Zap,
  Clock
} from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  duration: string;
  price: number;
  rating: number;
  students: number;
  instructor: string;
  isHalalCertified: boolean;
  topics: string[];
  format: 'Vidéo' | 'PDF' | 'Interactif' | 'Live';
}

interface Certification {
  id: string;
  name: string;
  description: string;
  requirements: string[];
  duration: string;
  recognition: string;
  badge: string;
}

export default function HalalTechWebsite() {
  const [selectedLanguage, setSelectedLanguage] = useState('fr');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [chatInput, setChatInput] = useState('');

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];

  const courses: Course[] = [
    {
      id: 'course-001',
      title: 'IA Responsable et Éthique Islamique',
      description: 'Apprenez à développer une intelligence artificielle conforme aux principes islamiques et aux valeurs éthiques.',
      category: 'ia-ethique',
      level: 'Intermédiaire',
      duration: '8 semaines',
      price: 299,
      rating: 4.9,
      students: 3420,
      instructor: 'Dr. Ahmed Al-Rashid',
      isHalalCertified: true,
      topics: ['Fiqh Informatique', 'IA Éthique', 'Développement Responsable', 'Conformité Sharia'],
      format: 'Interactif'
    },
    {
      id: 'course-002',
      title: 'Métiers du Cœur et Technologie',
      description: 'Découvrez comment allier passion, technologie et impact social positif dans votre carrière.',
      category: 'metiers-coeur',
      level: 'Débutant',
      duration: '6 semaines',
      price: 199,
      rating: 4.8,
      students: 2156,
      instructor: 'Fatima Al-Zahra',
      isHalalCertified: true,
      topics: ['Impact Social', 'Entrepreneuriat Éthique', 'Tech for Good', 'Développement Durable'],
      format: 'Vidéo'
    },
    {
      id: 'course-003',
      title: 'Pudeur Numérique et Vie Privée',
      description: 'Maîtrisez la protection des données personnelles selon les principes islamiques de pudeur et confidentialité.',
      category: 'pudeur-numerique',
      level: 'Avancé',
      duration: '4 semaines',
      price: 249,
      rating: 4.9,
      students: 1890,
      instructor: 'Prof. Yakoubi Yamina',
      isHalalCertified: true,
      topics: ['RGPD Islamique', 'Cybersécurité', 'Éthique Données', 'Confidentialité'],
      format: 'Live'
    },
    {
      id: 'course-004',
      title: 'Générateur de Prompts Fiqh-Compliant',
      description: 'Créez des prompts IA respectueux des valeurs islamiques pour tous vos projets technologiques.',
      category: 'outils-ia',
      level: 'Intermédiaire',
      duration: '3 semaines',
      price: 149,
      rating: 4.7,
      students: 2840,
      instructor: 'Équipe PrettyhowQ',
      isHalalCertified: true,
      topics: ['Prompt Engineering', 'IA Générative', 'Filtrage Halal', 'Optimisation'],
      format: 'Interactif'
    }
  ];

  const certifications: Certification[] = [
    {
      id: 'cert-001',
      name: 'PrettyhowQ HalalTech™ Fondamental',
      description: 'Certification de base en technologie éthique et développement conforme aux principes islamiques.',
      requirements: ['Compléter 3 cours de base', 'Examen théorique', 'Projet pratique'],
      duration: '3 mois',
      recognition: 'Reconnue par AAOIFI et institutions islamiques',
      badge: '🌙'
    },
    {
      id: 'cert-002',
      name: 'Expert IA Éthique Islamique',
      description: 'Certification avancée pour spécialistes en intelligence artificielle responsable.',
      requirements: ['Certification Fondamental', '2 ans d\'expérience', 'Thèse sur IA éthique'],
      duration: '6 mois',
      recognition: 'Certification professionnelle internationale',
      badge: '🏆'
    },
    {
      id: 'cert-003',
      name: 'Consultant Fiqh Informatique',
      description: 'Formation complète pour devenir consultant en conformité technologique islamique.',
      requirements: ['Master informatique ou équivalent', 'Études islamiques', 'Stage pratique'],
      duration: '12 mois',
      recognition: 'Agrément scholars internationaux',
      badge: '⭐'
    }
  ];

  const categories = [
    { id: 'all', name: 'Toutes les catégories', icon: Globe, count: courses.length },
    { id: 'ia-ethique', name: 'IA Éthique', icon: Brain, count: 8 },
    { id: 'metiers-coeur', name: 'Métiers du Cœur', icon: Heart, count: 6 },
    { id: 'pudeur-numerique', name: 'Pudeur Numérique', icon: Shield, count: 4 },
    { id: 'outils-ia', name: 'Outils IA', icon: Code, count: 12 }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getContent = (key: string) => {
    const content: Record<string, Record<string, string>> = {
      fr: {
        title: 'HalalTech™ - Plateforme de Formation IA Éthique',
        subtitle: 'Apprenez la technologie du futur en respectant vos valeurs islamiques',
        mission: 'Notre Mission',
        missionText: 'Former la prochaine génération de développeurs et entrepreneurs tech qui placent l\'éthique islamique au cœur de l\'innovation technologique.',
        charte: 'Charte Fiqh Numérique',
        formations: 'Formations Certifiées',
        generator: 'Générateur IA PrettyhowQ',
        contact: 'Nous Contacter'
      },
      en: {
        title: 'HalalTech™ - Ethical AI Training Platform',
        subtitle: 'Learn future technology while respecting your Islamic values',
        mission: 'Our Mission',
        missionText: 'Training the next generation of developers and tech entrepreneurs who place Islamic ethics at the heart of technological innovation.',
        charte: 'Digital Fiqh Charter',
        formations: 'Certified Training',
        generator: 'PrettyhowQ AI Generator',
        contact: 'Contact Us'
      },
      ar: {
        title: 'هلال تك™ - منصة التدريب على الذكاء الاصطناعي الأخلاقي',
        subtitle: 'تعلم تكنولوجيا المستقبل مع احترام قيمك الإسلامية',
        mission: 'مهمتنا',
        missionText: 'تدريب الجيل القادم من المطورين ورجال الأعمال التقنيين الذين يضعون الأخلاق الإسلامية في قلب الابتكار التكنولوجي.',
        charte: 'ميثاق الفقه الرقمي',
        formations: 'التدريب المعتمد',
        generator: 'مولد الذكاء الاصطناعي بريتي هاو كيو',
        contact: 'اتصل بنا'
      }
    };
    return content[selectedLanguage]?.[key] || content.fr[key];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header multilingue */}
      <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                HalalTech™
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Certifié Fiqh Informatique
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Sélecteur de langue */}
              <div className="flex items-center space-x-2">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant={selectedLanguage === lang.code ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedLanguage(lang.code)}
                    className="text-xs"
                  >
                    {lang.flag} {lang.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            {getContent('title')}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {getContent('subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
              <BookOpen className="mr-2 h-5 w-5" />
              Découvrir les Formations
            </Button>
            <Button size="lg" variant="outline">
              <Brain className="mr-2 h-5 w-5" />
              Essayer l'IA PrettyhowQ
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="home" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="home">🏠 Accueil</TabsTrigger>
            <TabsTrigger value="mission">📖 Mission</TabsTrigger>
            <TabsTrigger value="formations">🎓 Formations</TabsTrigger>
            <TabsTrigger value="generator">🤖 Générateur IA</TabsTrigger>
            <TabsTrigger value="certifications">🏆 Certifications</TabsTrigger>
          </TabsList>

          {/* Page d'accueil */}
          <TabsContent value="home" className="space-y-12">
            {/* Statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">50,000+</div>
                  <div className="text-sm text-muted-foreground">Étudiants Formés</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">25</div>
                  <div className="text-sm text-muted-foreground">Formations Certifiées</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Taux de Satisfaction</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">78</div>
                  <div className="text-sm text-muted-foreground">Langues Supportées</div>
                </CardContent>
              </Card>
            </div>

            {/* Valeurs fondamentales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle>Conformité Islamique</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tous nos contenus respectent les principes du Fiqh informatique et sont validés par des scholars reconnus.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>IA Éthique</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Développez une expertise en intelligence artificielle responsable qui respecte la dignité humaine.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Impact Positif</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Créez une technologie qui serve l'humanité et contribue au bien-être de la société.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Mission et Charte */}
          <TabsContent value="mission" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{getContent('mission')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-6">{getContent('missionText')}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      Nos Engagements
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Formation 100% conforme au Fiqh informatique</li>
                      <li>• Contenu filtré sans éléments haram</li>
                      <li>• Respect de la pudeur numérique</li>
                      <li>• Transparence et responsabilité</li>
                      <li>• Protection des données selon les principes islamiques</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 text-blue-600 mr-2" />
                      Certifications
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Validé par l'AAOIFI (Accounting and Auditing Organization for Islamic Financial Institutions)</li>
                      <li>• Approuvé par des scholars internationaux</li>
                      <li>• Conforme RGPD avec principes islamiques</li>
                      <li>• Hébergement sécurisé en Suisse</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Charte Fiqh Numérique</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <h4 className="font-semibold mb-3">Principes Fondamentaux</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <h5 className="font-medium text-emerald-600 mb-2">1. Licéité du Contenu (Halal)</h5>
                      <p className="text-muted-foreground mb-4">
                        Aucun contenu illicite selon la Sharia : pas de nudité, violence gratuite, ou musique haram.
                      </p>
                      
                      <h5 className="font-medium text-blue-600 mb-2">2. Respect et Pudeur</h5>
                      <p className="text-muted-foreground mb-4">
                        Filtres visuels automatiques, respect de la pudeur masculine et féminine.
                      </p>
                      
                      <h5 className="font-medium text-purple-600 mb-2">3. Transparence (Amanah)</h5>
                      <p className="text-muted-foreground">
                        Sources explicites, traçabilité des données, responsabilité claire.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-orange-600 mb-2">4. Protection des Données</h5>
                      <p className="text-muted-foreground mb-4">
                        RGPD renforcé par les principes islamiques de confidentialité et Amanah.
                      </p>
                      
                      <h5 className="font-medium text-red-600 mb-2">5. Utilité (Maslaha)</h5>
                      <p className="text-muted-foreground mb-4">
                        Focus sur l'éducation, la santé, la spiritualité et le bien-être social.
                      </p>
                      
                      <h5 className="font-medium text-indigo-600 mb-2">6. Spiritualité Intégrée</h5>
                      <p className="text-muted-foreground">
                        Rappels du Tawhîd, développement personnel spirituel, éthique islamique.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Formations */}
          <TabsContent value="formations" className="space-y-8">
            {/* Filtres et recherche */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        placeholder="Rechercher une formation..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Button
                          key={category.id}
                          variant={selectedCategory === category.id ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedCategory(category.id)}
                          className="text-xs"
                        >
                          <category.icon className="h-3 w-3 mr-1" />
                          {category.name} ({category.count})
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Liste des formations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge
                        variant={course.isHalalCertified ? "secondary" : "outline"}
                        className={course.isHalalCertified ? "bg-green-100 text-green-800" : ""}
                      >
                        {course.isHalalCertified ? "🌙 Halal Certifié" : "En Validation"}
                      </Badge>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {course.description}
                    </p>
                    
                    <div className="space-y-3">
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
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Par {course.instructor}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {course.topics.slice(0, 3).map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold text-emerald-600">
                          {course.price} CHF
                        </div>
                        <Button size="sm">
                          <Play className="h-4 w-4 mr-1" />
                          Commencer
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Générateur IA */}
          <TabsContent value="generator" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-6 w-6 mr-2" />
                  Générateur IA PrettyhowQ - Assistant Fiqh-Compliant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">Créez des prompts respectueux</h3>
                    <div className="space-y-4">
                      <Textarea
                        placeholder="Décrivez votre projet ou besoin en IA..."
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        className="min-h-32"
                      />
                      <div className="flex gap-2">
                        <Button className="flex-1">
                          <Zap className="h-4 w-4 mr-2" />
                          Générer Prompt Halal
                        </Button>
                        <Button variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Télécharger
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-4">Fonctionnalités Éthiques</h3>
                    <div className="space-y-3">
                      {[
                        {
                          title: 'Filtrage Automatique',
                          description: 'Suppression automatique du contenu non-conforme à la Sharia'
                        },
                        {
                          title: 'Validation Fiqh',
                          description: 'Vérification selon les 4 sources islamiques authentiques'
                        },
                        {
                          title: 'Respect Culturel',
                          description: 'Adaptation aux sensibilités religieuses et culturelles'
                        },
                        {
                          title: 'Transparence Sources',
                          description: 'Traçabilité complète des références et citations'
                        }
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <div className="font-medium text-sm">{feature.title}</div>
                            <div className="text-xs text-muted-foreground">{feature.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Exemples de Prompts Générés</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      category: 'Éducation',
                      prompt: 'Créez un tutoriel sur le machine learning qui respecte les principes islamiques d\'apprentissage, en évitant tout contenu contraire à la Sharia et en incluant des rappels spirituels appropriés.',
                      tags: ['Education', 'ML', 'Halal']
                    },
                    {
                      category: 'Business',
                      prompt: 'Développez une stratégie marketing éthique pour une fintech islamique qui respecte la pudeur numérique et les principes de transparence (Amanah).',
                      tags: ['Marketing', 'Fintech', 'Éthique']
                    }
                  ].map((example, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <Badge variant="secondary" className="mb-2">{example.category}</Badge>
                        <p className="text-sm mb-3">{example.prompt}</p>
                        <div className="flex flex-wrap gap-1">
                          {example.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Certifications */}
          <TabsContent value="certifications" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <Card key={cert.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-center">
                      <div className="text-4xl mb-2">{cert.badge}</div>
                      <CardTitle className="text-lg">{cert.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Prérequis:</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {cert.requirements.map((req, index) => (
                            <li key={index}>• {req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Durée:</span>
                        <span>{cert.duration}</span>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-sm mb-1">Reconnaissance:</h4>
                        <p className="text-xs text-muted-foreground">{cert.recognition}</p>
                      </div>
                      
                      <Button className="w-full mt-4">
                        <Award className="h-4 w-4 mr-2" />
                        S'inscrire
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer avec mentions légales complètes */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">HalalTech™</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Plateforme leader en formation technologique éthique conforme aux principes islamiques.
              </p>
              <div className="flex space-x-2">
                <Badge variant="secondary">100% Halal</Badge>
                <Badge variant="outline">AAOIFI</Badge>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Formations</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>IA Éthique</li>
                <li>Métiers du Cœur</li>
                <li>Pudeur Numérique</li>
                <li>Fiqh Informatique</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Ressources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Générateur IA</li>
                <li>Charte Fiqh</li>
                <li>Certifications</li>
                <li>Support 24/7</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>support@halaltech.ch</li>
                <li>+41 22 123 45 67</li>
                <li>Genève, Suisse</li>
                <li>Certifié ISO 27001</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              © Yakoubi Yamina – Tous droits réservés | All rights reserved | جميع الحقوق محفوظة | 版权所有
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <span>Respect du RGPD</span>
              <span>•</span>
              <span>Hébergement suisse</span>
              <span>•</span>
              <span>Confidentialité des données</span>
              <span>•</span>
              <span>Respect total du Fiqh</span>
            </div>
            <div className="flex justify-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                🌙 100% Halal Certifié
              </Badge>
              <Badge variant="outline">
                🏛️ Conforme AAOIFI
              </Badge>
              <Badge variant="outline">
                🤖 IA Éthique Responsable
              </Badge>
              <Badge variant="outline">
                🔒 Sécurité Suisse
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}