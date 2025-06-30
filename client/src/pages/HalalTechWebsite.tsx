import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Globe,
  Brain,
  Shield,
  Heart,
  Star,
  BookOpen,
  Users,
  Award,
  TrendingUp,
  MessageCircle,
  FileText,
  Video,
  Headphones,
  Download,
  CheckCircle,
  Clock,
  Languages,
  Zap,
  Target,
  Lightbulb,
  Code,
  Database,
  Cpu,
  Lock
} from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  duration: string;
  language: string[];
  isHalalCertified: boolean;
  rating: number;
  students: number;
  price: number;
  topics: string[];
}

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: any;
  category: string;
  isNew?: boolean;
}

export default function HalalTechWebsite() {
  const [selectedLanguage, setSelectedLanguage] = useState<'fr' | 'en' | 'ar'>('fr');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('overview');

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];

  const translations = {
    fr: {
      title: 'HalalTech™ - Plateforme de Formation IA Éthique',
      subtitle: 'La première plateforme mondiale de formation en technologie halal et IA responsable',
      getStarted: 'Commencer maintenant',
      learnMore: 'En savoir plus',
      features: 'Fonctionnalités',
      courses: 'Formations',
      pricing: 'Tarifs',
      about: 'À propos'
    },
    en: {
      title: 'HalalTech™ - Ethical AI Training Platform',
      subtitle: 'The world\'s first halal technology and responsible AI training platform',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      features: 'Features',
      courses: 'Courses',
      pricing: 'Pricing',
      about: 'About'
    },
    ar: {
      title: 'هلال تك™ - منصة التدريب على الذكاء الاصطناعي الأخلاقي',
      subtitle: 'أول منصة عالمية للتدريب على التكنولوجيا الحلال والذكاء الاصطناعي المسؤول',
      getStarted: 'ابدأ الآن',
      learnMore: 'اعرف المزيد',
      features: 'المميزات',
      courses: 'الدورات',
      pricing: 'الأسعار',
      about: 'حول'
    }
  };

  const features: Feature[] = [
    {
      id: 'ai-generator',
      title: 'Générateur IA Éthique',
      description: 'Créez du contenu conforme aux principes islamiques avec notre IA avancée',
      icon: Brain,
      category: 'ai',
      isNew: true
    },
    {
      id: 'halal-compliance',
      title: 'Conformité Halal 100%',
      description: 'Toutes nos formations sont certifiées par des scholars islamiques',
      icon: Shield,
      category: 'certification'
    },
    {
      id: 'multilingual',
      title: 'Support Multilingue',
      description: 'Formations disponibles en français, anglais et arabe',
      icon: Languages,
      category: 'accessibility'
    },
    {
      id: 'interactive-learning',
      title: 'Apprentissage Interactif',
      description: 'Exercices pratiques, quizzes et projets réels',
      icon: Target,
      category: 'education'
    },
    {
      id: 'expert-instructors',
      title: 'Instructeurs Experts',
      description: 'Apprenez avec des professionnels reconnus dans le domaine',
      icon: Users,
      category: 'education'
    },
    {
      id: 'certification',
      title: 'Certifications Reconnues',
      description: 'Obtenez des certificats valides internationalement',
      icon: Award,
      category: 'certification'
    }
  ];

  const courses: Course[] = [
    {
      id: 'ai-ethics-foundation',
      title: 'Fondements de l\'IA Éthique Islamique',
      description: 'Apprenez les bases de l\'intelligence artificielle conforme aux principes islamiques',
      category: 'ia-ethique',
      level: 'Débutant',
      duration: '8 semaines',
      language: ['fr', 'en', 'ar'],
      isHalalCertified: true,
      rating: 4.9,
      students: 2340,
      price: 299,
      topics: ['Fiqh Informatique', 'Machine Learning', 'Éthique IA', 'Conformité Sharia']
    },
    {
      id: 'halal-programming',
      title: 'Programmation Halal Avancée',
      description: 'Développez des applications respectueuses des valeurs islamiques',
      category: 'programmation',
      level: 'Intermédiaire',
      duration: '12 semaines',
      language: ['fr', 'en'],
      isHalalCertified: true,
      rating: 4.8,
      students: 1890,
      price: 399,
      topics: ['Clean Code', 'Architecture Éthique', 'Sécurité', 'RGPD Islamique']
    },
    {
      id: 'blockchain-halal',
      title: 'Blockchain et Finance Islamique',
      description: 'Maîtrisez la blockchain dans le contexte de la finance halal',
      category: 'blockchain',
      level: 'Avancé',
      duration: '10 semaines',
      language: ['fr', 'en', 'ar'],
      isHalalCertified: true,
      rating: 4.7,
      students: 1456,
      price: 499,
      topics: ['DeFi Halal', 'Smart Contracts', 'Tokenisation', 'Sukuk Numérique']
    }
  ];

  const currentTranslation = translations[selectedLanguage];

  const filteredCourses = courses.filter(course => 
    selectedCategory === 'all' || course.category === selectedCategory
  );

  const generateContent = async (prompt: string) => {
    // Simulation de la génération de contenu
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Contenu généré éthiquement pour: ${prompt}`);
      }, 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header avec sélecteur de langue */}
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                🌙 HalalTech™
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                IA Éthique Certifiée
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Sélecteur de langue */}
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value as 'fr' | 'en' | 'ar')}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
              
              <Button size="sm">
                {currentTranslation.getStarted}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            {currentTranslation.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {currentTranslation.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Zap className="h-5 w-5 mr-2" />
              {currentTranslation.getStarted}
            </Button>
            <Button size="lg" variant="outline">
              <BookOpen className="h-5 w-5 mr-2" />
              {currentTranslation.learnMore}
            </Button>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">15,000+</div>
              <div className="text-sm text-muted-foreground">Étudiants formés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-muted-foreground">Formations certifiées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">25</div>
              <div className="text-sm text-muted-foreground">Instructeurs experts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">100%</div>
              <div className="text-sm text-muted-foreground">Halal certifié</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">🏠 Accueil</TabsTrigger>
            <TabsTrigger value="features">⭐ {currentTranslation.features}</TabsTrigger>
            <TabsTrigger value="courses">📚 {currentTranslation.courses}</TabsTrigger>
            <TabsTrigger value="ai-generator">🤖 Générateur IA</TabsTrigger>
            <TabsTrigger value="pricing">💰 {currentTranslation.pricing}</TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview" className="space-y-8">
            <div className="text-center py-12">
              <h2 className="text-3xl font-bold mb-6">Plateforme de Formation Technologique Halal</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Développez vos compétences technologiques tout en respectant vos valeurs islamiques. 
                Notre plateforme offre des formations certifiées en IA éthique, programmation halal, 
                et technologies émergentes conformes à la Sharia.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <Brain className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                    <CardTitle>IA Éthique</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Apprenez à développer des systèmes d'IA responsables et conformes aux principes islamiques.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Sécurité Halal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Maîtrisez la cybersécurité et la protection des données selon les valeurs islamiques.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <Database className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <CardTitle>Blockchain Islamique</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Explorez la blockchain et les cryptomonnaies dans le contexte de la finance islamique.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Fonctionnalités */}
          <TabsContent value="features" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <Card key={feature.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <feature.icon className="h-8 w-8 text-emerald-600" />
                      {feature.isNew && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Nouveau
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Formations */}
          <TabsContent value="courses" className="space-y-8">
            {/* Filtres */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="all">Toutes les catégories</option>
                    <option value="ia-ethique">IA Éthique</option>
                    <option value="programmation">Programmation</option>
                    <option value="blockchain">Blockchain</option>
                  </select>
                  
                  <Badge variant="outline">
                    {filteredCourses.length} formation(s) trouvée(s)
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Liste des formations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{course.level}</Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm">{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {course.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {course.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {course.students}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {course.topics.slice(0, 2).map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          {course.isHalalCertified && (
                            <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                              🌙 Halal
                            </Badge>
                          )}
                        </div>
                        <div className="text-lg font-bold text-emerald-600">
                          {course.price} CHF
                        </div>
                      </div>
                      
                      <Button className="w-full">
                        <BookOpen className="h-4 w-4 mr-2" />
                        S'inscrire
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Générateur IA */}
          <TabsContent value="ai-generator" className="space-y-8">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Générateur IA Éthique</CardTitle>
                <p className="text-muted-foreground">
                  Créez du contenu conforme aux principes islamiques avec notre IA avancée
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="max-w-2xl mx-auto">
                  <label className="block text-sm font-medium mb-2">
                    Décrivez ce que vous souhaitez générer
                  </label>
                  <Input
                    placeholder="Ex: Un article sur l'éthique en IA selon les principes islamiques..."
                    className="mb-4"
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <select className="px-3 py-2 border border-gray-300 rounded-md">
                      <option>Type de contenu</option>
                      <option>Article</option>
                      <option>Présentation</option>
                      <option>Code</option>
                      <option>Exercice</option>
                    </select>
                    
                    <select className="px-3 py-2 border border-gray-300 rounded-md">
                      <option>Langue</option>
                      <option>Français</option>
                      <option>English</option>
                      <option>العربية</option>
                    </select>
                    
                    <select className="px-3 py-2 border border-gray-300 rounded-md">
                      <option>Niveau</option>
                      <option>Débutant</option>
                      <option>Intermédiaire</option>
                      <option>Avancé</option>
                    </select>
                  </div>
                  
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Brain className="h-4 w-4 mr-2" />
                    Générer avec IA Éthique
                  </Button>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-medium text-green-800">Conformité Halal Garantie</span>
                    </div>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Contenu filtré selon les principes islamiques</li>
                      <li>• Vérification automatique par nos algorithmes éthiques</li>
                      <li>• Validation par des scholars certifiés</li>
                      <li>• Respect de la pudeur numérique</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tarifs */}
          <TabsContent value="pricing" className="space-y-8">
            <div className="text-center py-8">
              <h2 className="text-3xl font-bold mb-4">Plans de Formation</h2>
              <p className="text-muted-foreground mb-8">
                Choisissez le plan qui correspond à vos besoins de formation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-200">
                <CardHeader className="text-center">
                  <CardTitle>Essentiel</CardTitle>
                  <div className="text-3xl font-bold text-emerald-600">99 CHF</div>
                  <div className="text-sm text-muted-foreground">par mois</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Accès à 10 formations de base
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Certificats de completion
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Support communautaire
                    </li>
                  </ul>
                  <Button className="w-full">Choisir Essentiel</Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-emerald-500 relative">
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-emerald-600">
                  Populaire
                </Badge>
                <CardHeader className="text-center">
                  <CardTitle>Professionnel</CardTitle>
                  <div className="text-3xl font-bold text-emerald-600">199 CHF</div>
                  <div className="text-sm text-muted-foreground">par mois</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Accès à toutes les formations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Certifications professionnelles
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Générateur IA éthique illimité
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Support prioritaire
                    </li>
                  </ul>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Choisir Professionnel
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardHeader className="text-center">
                  <CardTitle>Enterprise</CardTitle>
                  <div className="text-3xl font-bold text-emerald-600">499 CHF</div>
                  <div className="text-sm text-muted-foreground">par mois</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Formation d'équipe (jusqu'à 50 personnes)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Formations personnalisées
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Support dédié
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Intégration API
                    </li>
                  </ul>
                  <Button className="w-full">Contacter les ventes</Button>
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
              <Badge variant="outline">Formation Multilingue</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}