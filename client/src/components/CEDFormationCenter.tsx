import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen,
  Users,
  Award,
  Star,
  Clock,
  DollarSign,
  CheckCircle,
  PlayCircle,
  Download,
  MessageCircle,
  Calendar,
  Trophy,
  Target,
  Brain,
  Code,
  Briefcase,
  Heart,
  Shield,
  Globe,
  Zap,
  TrendingUp,
  Building2,
  Smartphone,
  Video,
  FileText,
  Headphones
} from 'lucide-react';

interface Course {
  id: string;
  title: string;
  category: 'ia-ethique' | 'finance-islamique' | 'tech-halal' | 'business-ethique' | 'developpement' | 'leadership';
  description: string;
  instructor: string;
  duration: number; // en heures
  price: number;
  originalPrice: number;
  level: 'debutant' | 'intermediaire' | 'avance' | 'expert';
  rating: number;
  studentsCount: number;
  lessonsCount: number;
  certificationType: 'participation' | 'competence' | 'expertise' | 'master';
  halalFeatures: string[];
  learningObjectives: string[];
  prerequisites: string[];
  syllabus: string[];
  icon: any;
  color: string;
  featured: boolean;
  newCourse: boolean;
  bestseller: boolean;
}

interface Instructor {
  id: string;
  name: string;
  title: string;
  expertise: string[];
  rating: number;
  studentsCount: number;
  coursesCount: number;
  bio: string;
  certifications: string[];
  avatar: string;
}

interface LearningPath {
  id: string;
  name: string;
  description: string;
  courses: string[];
  duration: number;
  price: number;
  discount: number;
  level: string;
  certification: string;
  icon: any;
  color: string;
}

export function CEDFormationCenter() {
  const [activeTab, setActiveTab] = useState('courses');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const courses: Course[] = [
    {
      id: 'ia-ethique-fondamentaux',
      title: 'IA Éthique : Fondamentaux et Pratiques',
      category: 'ia-ethique',
      description: 'Maîtrisez l\'intelligence artificielle éthique conforme aux valeurs islamiques',
      instructor: 'Dr. Yakoubi Yamina',
      duration: 24,
      price: 497,
      originalPrice: 697,
      level: 'debutant',
      rating: 4.9,
      studentsCount: 2847,
      lessonsCount: 42,
      certificationType: 'competence',
      halalFeatures: [
        'Approche éthique islamique de l\'IA',
        'Cas d\'usage halal uniquement',
        'Respect des principes Charia',
        'Formation certifiée par autorités religieuses'
      ],
      learningObjectives: [
        'Comprendre les principes de l\'IA éthique',
        'Implémenter des solutions IA conformes',
        'Éviter les biais algorithmiques',
        'Développer une pensée critique technologique'
      ],
      prerequisites: [
        'Bases en informatique',
        'Connaissance élémentaire programmation',
        'Engagement éthique personnel'
      ],
      syllabus: [
        'Introduction IA éthique (6h)',
        'Algorithmes et biais (4h)', 
        'IA et finance islamique (6h)',
        'Projets pratiques (8h)'
      ],
      icon: Brain,
      color: 'from-blue-500 to-indigo-600',
      featured: true,
      newCourse: false,
      bestseller: true
    },
    {
      id: 'finance-islamique-digitale',
      title: 'Finance Islamique Digitale Moderne',
      category: 'finance-islamique',
      description: 'Formation complète fintech halal et banque digitale éthique',
      instructor: 'Prof. Ahmed Al-Mahmoud',
      duration: 32,
      price: 697,
      originalPrice: 997,
      level: 'intermediaire',
      rating: 4.8,
      studentsCount: 1653,
      lessonsCount: 56,
      certificationType: 'expertise',
      halalFeatures: [
        'Conformité Charia validée',
        'Cas d\'études banques islamiques',
        'Certification autorités religieuses',
        'Modules Takaful et Sukuk'
      ],
      learningObjectives: [
        'Maîtriser principes finance islamique',
        'Concevoir produits bancaires halal',
        'Comprendre réglementation internationale',
        'Implémenter solutions fintech éthiques'
      ],
      prerequisites: [
        'Bases finance traditionnelle',
        'Connaissances Charia recommandées',
        'Expérience secteur bancaire'
      ],
      syllabus: [
        'Principes finance islamique (8h)',
        'Produits bancaires halal (8h)',
        'Fintech et innovation (8h)',
        'Réglementation mondiale (8h)'
      ],
      icon: Building2,
      color: 'from-green-500 to-emerald-600',
      featured: true,
      newCourse: false,
      bestseller: false
    },
    {
      id: 'blockchain-halal',
      title: 'Blockchain et Crypto Halal',
      category: 'tech-halal',
      description: 'Développez des solutions blockchain conformes aux principes islamiques',
      instructor: 'Ing. Khalid Rahman',
      duration: 28,
      price: 597,
      originalPrice: 797,
      level: 'avance',
      rating: 4.7,
      studentsCount: 892,
      lessonsCount: 38,
      certificationType: 'expertise',
      halalFeatures: [
        'Smart contracts conformes Charia',
        'Crypto-monnaies halal validées',
        'DeFi éthique et responsable',
        'Audit conformité religieuse'
      ],
      learningObjectives: [
        'Développer smart contracts éthiques',
        'Comprendre DeFi halal',
        'Créer tokens conformes',
        'Auditer projets blockchain'
      ],
      prerequisites: [
        'Programmation Solidity',
        'Bases cryptographie',
        'Connaissance finance islamique'
      ],
      syllabus: [
        'Blockchain et Islam (6h)',
        'Smart contracts halal (8h)',
        'DeFi éthique (8h)',
        'Projets pratiques (6h)'
      ],
      icon: Code,
      color: 'from-purple-500 to-pink-600',
      featured: false,
      newCourse: true,
      bestseller: false
    },
    {
      id: 'leadership-ethique',
      title: 'Leadership Éthique et Management Islamique',
      category: 'leadership',
      description: 'Développez vos compétences de leader selon les valeurs islamiques',
      instructor: 'Dr. Fatima Al-Zahra',
      duration: 20,
      price: 397,
      originalPrice: 597,
      level: 'intermediaire',
      rating: 4.9,
      studentsCount: 1247,
      lessonsCount: 28,
      certificationType: 'competence',
      halalFeatures: [
        'Principes leadership islamique',
        'Éthique des affaires halal',
        'Gestion équipe multiculturelle',
        'Résolution conflits selon Sunna'
      ],
      learningObjectives: [
        'Développer leadership authentique',
        'Appliquer principes islamiques',
        'Gérer équipes diverses',
        'Prendre décisions éthiques'
      ],
      prerequisites: [
        'Expérience management 2+ ans',
        'Bases culture islamique',
        'Motivation développement personnel'
      ],
      syllabus: [
        'Leadership prophétique (5h)',
        'Management éthique (5h)',
        'Communication islamique (5h)',
        'Cas pratiques (5h)'
      ],
      icon: Users,
      color: 'from-amber-500 to-orange-600',
      featured: false,
      newCourse: false,
      bestseller: true
    },
    {
      id: 'entrepreneuriat-halal',
      title: 'Entrepreneuriat et Business Halal',
      category: 'business-ethique',
      description: 'Créez et développez votre entreprise selon les principes islamiques',
      instructor: 'Ent. Yakoubi Aziz',
      duration: 36,
      price: 797,
      originalPrice: 1197,
      level: 'intermediaire',
      rating: 4.8,
      studentsCount: 956,
      lessonsCount: 48,
      certificationType: 'expertise',
      halalFeatures: [
        'Business model halal',
        'Financement islamique',
        'Marketing éthique',
        'Comptabilité conforme Charia'
      ],
      learningObjectives: [
        'Concevoir business model halal',
        'Lever fonds conformes',
        'Développer stratégie marketing éthique',
        'Gérer comptabilité islamique'
      ],
      prerequisites: [
        'Projet entrepreneurial',
        'Bases gestion entreprise',
        'Engagement éthique fort'
      ],
      syllabus: [
        'Business model halal (9h)',
        'Financement islamique (9h)',
        'Marketing éthique (9h)',
        'Accompagnement projet (9h)'
      ],
      icon: Briefcase,
      color: 'from-teal-500 to-cyan-600',
      featured: true,
      newCourse: false,
      bestseller: false
    },
    {
      id: 'dev-web-ethique',
      title: 'Développement Web Éthique et Responsable',
      category: 'developpement',
      description: 'Créez des applications web respectueuses des utilisateurs et de l\'éthique',
      instructor: 'Dev. Omar Benali',
      duration: 42,
      price: 697,
      originalPrice: 997,
      level: 'intermediaire',
      rating: 4.7,
      studentsCount: 1543,
      lessonsCount: 64,
      certificationType: 'competence',
      halalFeatures: [
        'Code propre et éthique',
        'Respect vie privée utilisateurs',
        'Accessibilité universelle',
        'Performance optimisée'
      ],
      learningObjectives: [
        'Développer applications éthiques',
        'Implémenter sécurité robuste',
        'Optimiser performance',
        'Respecter standards accessibilité'
      ],
      prerequisites: [
        'HTML/CSS/JavaScript',
        'Framework moderne (React/Vue)',
        'Bases développement web'
      ],
      syllabus: [
        'Éthique développement (8h)',
        'Sécurité applications (12h)',
        'Performance optimisation (12h)',
        'Projets pratiques (10h)'
      ],
      icon: Smartphone,
      color: 'from-indigo-500 to-purple-600',
      featured: false,
      newCourse: true,
      bestseller: false
    }
  ];

  const instructors: Instructor[] = [
    {
      id: 'yakoubi-yamina',
      name: 'Dr. Yakoubi Yamina',
      title: 'Experte IA Éthique & Fondatrice CED',
      expertise: ['Intelligence Artificielle', 'Éthique Technologique', 'Finance Islamique'],
      rating: 4.9,
      studentsCount: 12847,
      coursesCount: 8,
      bio: 'Docteure en IA avec 15+ ans d\'expérience. Pionnière de l\'IA éthique islamique.',
      certifications: ['PhD Computer Science', 'Certificat Charia Board', 'AWS Solutions Architect'],
      avatar: '/instructors/yakoubi-yamina.jpg'
    },
    {
      id: 'ahmed-mahmoud',
      name: 'Prof. Ahmed Al-Mahmoud',
      title: 'Professeur Finance Islamique',
      expertise: ['Finance Islamique', 'Banque Digitale', 'Réglementation'],
      rating: 4.8,
      studentsCount: 8934,
      coursesCount: 6,
      bio: 'Professeur université Al-Azhar, expert finance islamique moderne.',
      certifications: ['PhD Islamic Finance', 'CIFE Certification', 'AAOIFI Expert'],
      avatar: '/instructors/ahmed-mahmoud.jpg'
    }
  ];

  const learningPaths: LearningPath[] = [
    {
      id: 'fintech-halal-expert',
      name: 'Expert Fintech Halal',
      description: 'Parcours complet pour devenir expert en technologies financières islamiques',
      courses: ['ia-ethique-fondamentaux', 'finance-islamique-digitale', 'blockchain-halal'],
      duration: 84,
      price: 1497,
      discount: 25,
      level: 'Intermédiaire à Expert',
      certification: 'Certificat Expert Fintech Halal',
      icon: TrendingUp,
      color: 'from-green-500 to-blue-600'
    },
    {
      id: 'leader-ethique',
      name: 'Leader Éthique Moderne',
      description: 'Formation leadership et entrepreneuriat selon valeurs islamiques',
      courses: ['leadership-ethique', 'entrepreneuriat-halal', 'ia-ethique-fondamentaux'],
      duration: 76,
      price: 1297,
      discount: 20,
      level: 'Intermédiaire',
      certification: 'Certificat Leader Éthique',
      icon: Trophy,
      color: 'from-amber-500 to-red-600'
    }
  ];

  const categories = [
    { id: 'all', name: 'Toutes les formations', count: courses.length },
    { id: 'ia-ethique', name: 'IA Éthique', count: courses.filter(c => c.category === 'ia-ethique').length },
    { id: 'finance-islamique', name: 'Finance Islamique', count: courses.filter(c => c.category === 'finance-islamique').length },
    { id: 'tech-halal', name: 'Tech Halal', count: courses.filter(c => c.category === 'tech-halal').length },
    { id: 'business-ethique', name: 'Business Éthique', count: courses.filter(c => c.category === 'business-ethique').length },
    { id: 'developpement', name: 'Développement', count: courses.filter(c => c.category === 'developpement').length },
    { id: 'leadership', name: 'Leadership', count: courses.filter(c => c.category === 'leadership').length }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', { 
      style: 'currency', 
      currency: 'EUR',
      minimumFractionDigits: 0 
    }).format(price);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'debutant': return 'bg-green-100 text-green-800';
      case 'intermediaire': return 'bg-blue-100 text-blue-800';
      case 'avance': return 'bg-orange-100 text-orange-800';
      case 'expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="flex justify-center items-center gap-4">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 flex items-center justify-center"
            >
              <GraduationCap className="h-10 w-10 text-white" />
            </motion.div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
              CED Formation Center
            </h1>
          </div>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Centre de formation premium spécialisé en 
            <span className="font-bold text-green-600"> technologies éthiques</span>, finance islamique et leadership responsable
          </p>
          
          <div className="flex justify-center gap-3 flex-wrap">
            <Badge className="bg-green-500 text-white px-4 py-2 text-lg">
              🎓 12,847+ Diplômés
            </Badge>
            <Badge className="bg-blue-500 text-white px-4 py-2 text-lg">
              ✅ Certifié Halal
            </Badge>
            <Badge className="bg-purple-500 text-white px-4 py-2 text-lg">
              🏆 Note 4.8/5
            </Badge>
            <Badge className="bg-amber-500 text-white px-4 py-2 text-lg">
              💼 89% Employabilité
            </Badge>
          </div>
        </motion.div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-r from-green-100 to-green-200">
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-800">12,847</div>
              <div className="text-sm text-green-600">Étudiants actifs</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-blue-100 to-blue-200">
            <CardContent className="p-4 text-center">
              <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-800">47</div>
              <div className="text-sm text-blue-600">Formations premium</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-purple-100 to-purple-200">
            <CardContent className="p-4 text-center">
              <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-800">8,934</div>
              <div className="text-sm text-purple-600">Certifiés</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-amber-100 to-amber-200">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 text-amber-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-amber-800">89%</div>
              <div className="text-sm text-amber-600">Taux emploi</div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation principale */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="courses">Formations</TabsTrigger>
            <TabsTrigger value="paths">Parcours</TabsTrigger>
            <TabsTrigger value="instructors">Formateurs</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>

          {/* Catalogue formations */}
          <TabsContent value="courses" className="space-y-6">
            
            {/* Filtres par catégorie */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-sm"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>

            {/* Grid formations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                    
                    {/* Badges */}
                    <div className="absolute top-4 right-4 z-10 space-y-1">
                      {course.featured && (
                        <Badge className="bg-yellow-500 text-white text-xs">
                          ⭐ Vedette
                        </Badge>
                      )}
                      {course.bestseller && (
                        <Badge className="bg-red-500 text-white text-xs">
                          🔥 Bestseller
                        </Badge>
                      )}
                      {course.newCourse && (
                        <Badge className="bg-green-500 text-white text-xs">
                          🆕 Nouveau
                        </Badge>
                      )}
                    </div>
                    
                    <CardHeader>
                      <div className={`w-16 h-16 bg-gradient-to-r ${course.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <course.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-center text-lg text-gray-900 h-12">
                        {course.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 text-sm text-center h-12">
                        {course.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Badge className={getLevelColor(course.level)}>
                            {course.level}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-bold">{course.rating}</span>
                            <span className="text-xs text-gray-500">({course.studentsCount})</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {course.duration}h
                          </span>
                          <span className="flex items-center gap-1">
                            <PlayCircle className="h-4 w-4" />
                            {course.lessonsCount} leçons
                          </span>
                        </div>
                        
                        <div className="text-center space-y-1">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-2xl font-bold text-green-600">
                              {formatPrice(course.price)}
                            </span>
                            <span className="text-sm text-gray-500 line-through">
                              {formatPrice(course.originalPrice)}
                            </span>
                          </div>
                          <div className="text-xs text-green-600 font-medium">
                            Économie: {formatPrice(course.originalPrice - course.price)}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Button 
                          className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90 text-white`}
                          onClick={() => setSelectedCourse(course.id)}
                        >
                          Voir détails
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full text-green-600 border-green-300"
                        >
                          Payer avec CED Bank 0%
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Détails cours sélectionné */}
            {selectedCourse && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Détails de la Formation</CardTitle>
                </CardHeader>
                <CardContent>
                  {(() => {
                    const course = courses.find(c => c.id === selectedCourse);
                    if (!course) return null;
                    
                    return (
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        
                        {/* Fonctionnalités halal */}
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg text-green-800">
                              ✅ Conformité Éthique
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              {course.halalFeatures.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>

                        {/* Objectifs pédagogiques */}
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg text-blue-800">
                              🎯 Objectifs d'Apprentissage
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              {course.learningObjectives.map((objective, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <Target className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{objective}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>

                        {/* Programme détaillé */}
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg text-purple-800">
                              📚 Programme Détaillé
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              {course.syllabus.map((module, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <BookOpen className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{module}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })()}
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Parcours de formation */}
          <TabsContent value="paths" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {learningPaths.map((path, index) => (
                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className={`w-16 h-16 bg-gradient-to-r ${path.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <path.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-center text-xl">
                        {path.name}
                      </CardTitle>
                      <p className="text-gray-600 text-center">
                        {path.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-gray-800">{path.duration}h</div>
                          <div className="text-sm text-gray-600">Durée totale</div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-gray-800">{path.courses.length}</div>
                          <div className="text-sm text-gray-600">Formations</div>
                        </div>
                      </div>
                      
                      <div className="text-center space-y-2">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-2xl font-bold text-green-600">
                            {formatPrice(Math.round(path.price * (1 - path.discount / 100)))}
                          </span>
                          <span className="text-lg text-gray-500 line-through">
                            {formatPrice(path.price)}
                          </span>
                        </div>
                        <Badge className="bg-red-100 text-red-800">
                          Économie {path.discount}% - {formatPrice(Math.round(path.price * path.discount / 100))}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm text-gray-600">
                          <strong>Niveau:</strong> {path.level}
                        </div>
                        <div className="text-sm text-gray-600">
                          <strong>Certification:</strong> {path.certification}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Button className={`w-full bg-gradient-to-r ${path.color} hover:opacity-90 text-white`}>
                          Commencer le Parcours
                        </Button>
                        <Button variant="outline" className="w-full">
                          Financement CED Bank
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Équipe formateurs */}
          <TabsContent value="instructors" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {instructors.map((instructor, index) => (
                <motion.div
                  key={instructor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xl">
                            {instructor.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <CardTitle className="text-lg">{instructor.name}</CardTitle>
                          <p className="text-gray-600">{instructor.title}</p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">{instructor.bio}</p>
                      
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-2 bg-blue-50 rounded">
                          <div className="font-bold text-blue-700">{instructor.rating}</div>
                          <div className="text-xs text-blue-600">Note moyenne</div>
                        </div>
                        <div className="p-2 bg-green-50 rounded">
                          <div className="font-bold text-green-700">{instructor.studentsCount.toLocaleString()}</div>
                          <div className="text-xs text-green-600">Étudiants</div>
                        </div>
                        <div className="p-2 bg-purple-50 rounded">
                          <div className="font-bold text-purple-700">{instructor.coursesCount}</div>
                          <div className="text-xs text-purple-600">Formations</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-bold mb-2">Expertises:</h4>
                        <div className="flex flex-wrap gap-1">
                          {instructor.expertise.map((skill, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-bold mb-2">Certifications:</h4>
                        <div className="space-y-1">
                          {instructor.certifications.map((cert, idx) => (
                            <div key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                              <Award className="h-3 w-3 text-amber-500" />
                              {cert}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full">
                        Voir les formations
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Certifications */}
          <TabsContent value="certifications" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-amber-500" />
                    Certifications Disponibles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-bold text-green-700">Certificat de Participation</h4>
                      <p className="text-sm text-gray-600">Attestation de suivi de formation</p>
                      <Badge className="bg-green-100 text-green-800 mt-1">Gratuit</Badge>
                    </div>
                    
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-bold text-blue-700">Certificat de Compétence</h4>
                      <p className="text-sm text-gray-600">Validation des compétences acquises</p>
                      <Badge className="bg-blue-100 text-blue-800 mt-1">Examen requis</Badge>
                    </div>
                    
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-bold text-purple-700">Certificat d'Expertise</h4>
                      <p className="text-sm text-gray-600">Niveau expert avec projet final</p>
                      <Badge className="bg-purple-100 text-purple-800 mt-1">Projet + Examen</Badge>
                    </div>
                    
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-bold text-amber-700">Master Certificate</h4>
                      <p className="text-sm text-gray-600">Certification master niveau international</p>
                      <Badge className="bg-amber-100 text-amber-800 mt-1">Parcours complet</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-green-500" />
                    Reconnaissance et Partenaires
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <div>
                        <div className="font-bold">Charia Board Certified</div>
                        <div className="text-sm text-gray-600">Validé par autorités religieuses</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Globe className="h-6 w-6 text-blue-600" />
                      <div>
                        <div className="font-bold">Reconnaissance Internationale</div>
                        <div className="text-sm text-gray-600">Accepté dans 47 pays</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <Building2 className="h-6 w-6 text-purple-600" />
                      <div>
                        <div className="font-bold">Partenaires Entreprises</div>
                        <div className="text-sm text-gray-600">284+ entreprises partenaires</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-amber-600" />
                      <div>
                        <div className="font-bold">Taux d'Employabilité</div>
                        <div className="text-sm text-gray-600">89% dans les 6 mois</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA final */}
        <Card className="bg-gradient-to-r from-green-100 to-blue-100 border border-green-200">
          <CardContent className="p-6 text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <GraduationCap className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-bold text-green-800">Commencez Votre Formation Aujourd'hui</h3>
            </div>
            <p className="text-green-700 mb-4">
              Rejoignez 12,847+ professionnels qui ont choisi CED Formation Center pour développer leurs compétences
              en technologies éthiques et finance islamique.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-green-600 hover:bg-green-700">
                <BookOpen className="h-4 w-4 mr-2" />
                Parcourir les Formations
              </Button>
              <Button variant="outline" className="border-green-300 text-green-700">
                <DollarSign className="h-4 w-4 mr-2" />
                Financement CED Bank 0%
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}