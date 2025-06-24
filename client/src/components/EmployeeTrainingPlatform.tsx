import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  GraduationCap,
  BookOpen,
  Award,
  Users,
  Heart,
  Building2,
  Smartphone,
  Download,
  Play,
  CheckCircle,
  Clock,
  Star,
  Target,
  TrendingUp,
  Shield,
  Briefcase,
  Globe,
  Zap,
  Crown,
  Users as Family,
  Gift
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CEDFooter } from './CEDFooter';

interface TrainingCourse {
  id: string;
  title: string;
  description: string;
  category: 'banking' | 'logistics' | 'health' | 'management' | 'technology' | 'spiritual' | 'family';
  targetRole: string[];
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  duration: string;
  price: number;
  originalPrice: number;
  discount: number;
  instructor: string;
  rating: number;
  studentsEnrolled: number;
  modules: number;
  certificates: boolean;
  familyAccess: boolean;
  mobileApp: boolean;
  prerequisites: string[];
  learningObjectives: string[];
  status: 'available' | 'coming_soon' | 'premium_only';
}

interface EmployeeProfile {
  id: string;
  nom: string;
  prenom: string;
  fonction: string;
  department: string;
  trainingBudget: number;
  completedCourses: number;
  inProgressCourses: number;
  certificates: number;
  familyMembers: number;
  preferredLanguage: string;
  specializations: string[];
}

const employeeProfiles: EmployeeProfile[] = [
  {
    id: 'CED-002',
    nom: 'Yakoubi',
    prenom: 'Brahim',
    fonction: 'Gérant Association',
    department: 'Management',
    trainingBudget: 15000,
    completedCourses: 8,
    inProgressCourses: 3,
    certificates: 5,
    familyMembers: 4,
    preferredLanguage: 'Français',
    specializations: ['Leadership', 'Finance Islamique', 'Gestion Équipe']
  },
  {
    id: 'CED-003',
    nom: 'Yakoubi Ozel',
    prenom: 'Souheila',
    fonction: 'Responsable Santé',
    department: 'Santé & Bien-être',
    trainingBudget: 18000,
    completedCourses: 12,
    inProgressCourses: 2,
    certificates: 8,
    familyMembers: 3,
    preferredLanguage: 'Français',
    specializations: ['Santé Digitale', 'Nutrition Halal', 'Bien-être Mental']
  },
  {
    id: 'CED-004',
    nom: 'Kadjouf',
    prenom: 'Hanane',
    fonction: 'Secrétaire Direction',
    department: 'Administration',
    trainingBudget: 8000,
    completedCourses: 6,
    inProgressCourses: 4,
    certificates: 4,
    familyMembers: 2,
    preferredLanguage: 'Français',
    specializations: ['Administration', 'Communication', 'Secrétariat Exécutif']
  },
  {
    id: 'CED-005',
    nom: '',
    prenom: 'Aziz',
    fonction: 'Logistique Suisse',
    department: 'Logistique',
    trainingBudget: 10000,
    completedCourses: 5,
    inProgressCourses: 3,
    certificates: 3,
    familyMembers: 5,
    preferredLanguage: 'Français',
    specializations: ['Supply Chain', 'Transport Suisse', 'Douanes']
  },
  {
    id: 'CED-006',
    nom: '',
    prenom: 'Abdelkarim',
    fonction: 'Logistique Europe',
    department: 'Logistique',
    trainingBudget: 12000,
    completedCourses: 7,
    inProgressCourses: 2,
    certificates: 5,
    familyMembers: 4,
    preferredLanguage: 'Français',
    specializations: ['Logistique Internationale', 'E-commerce', 'Réglementation UE']
  }
];

const trainingCourses: TrainingCourse[] = [
  {
    id: 'BANK-101',
    title: 'CED Bank: Maîtrise Complète',
    description: 'Formation approfondie sur tous les services bancaires halal CED Bank, procédures et outils internes',
    category: 'banking',
    targetRole: ['Gérant Association', 'Secrétaire Direction'],
    level: 'intermediate',
    duration: '6 semaines',
    price: 2500,
    originalPrice: 3500,
    discount: 30,
    instructor: 'Expert CED Bank',
    rating: 4.9,
    studentsEnrolled: 156,
    modules: 12,
    certificates: true,
    familyAccess: true,
    mobileApp: true,
    prerequisites: ['Connaissance finance de base'],
    learningObjectives: [
      'Maîtriser toutes les fonctionnalités CED Bank',
      'Gérer les comptes clients professionnels',
      'Comprendre la conformité Sharia',
      'Optimiser les processus bancaires'
    ],
    status: 'available'
  },
  {
    id: 'HEALTH-201',
    title: 'Application Souheila Yakoubi Ozel - Expert',
    description: 'Formation exclusive sur l\'application santé de Souheila, nutrition halal, bien-être familial et coaching personnel',
    category: 'health',
    targetRole: ['Responsable Santé', 'Toute l\'équipe'],
    level: 'beginner',
    duration: '4 semaines',
    price: 1800,
    originalPrice: 2800,
    discount: 35,
    instructor: 'Souheila Yakoubi Ozel',
    rating: 5.0,
    studentsEnrolled: 324,
    modules: 8,
    certificates: true,
    familyAccess: true,
    mobileApp: true,
    prerequisites: [],
    learningObjectives: [
      'Utiliser toutes les fonctionnalités de l\'app',
      'Optimiser la nutrition familiale halal',
      'Coaching bien-être personnalisé',
      'Suivi santé digital complet'
    ],
    status: 'available'
  },
  {
    id: 'LOG-301',
    title: 'Logistique Moderne & Supply Chain',
    description: 'Techniques avancées de logistique moderne, gestion supply chain, outils digitaux et optimisation',
    category: 'logistics',
    targetRole: ['Logistique Suisse', 'Logistique Europe'],
    level: 'advanced',
    duration: '8 semaines',
    price: 3200,
    originalPrice: 4500,
    discount: 30,
    instructor: 'Expert Logistique International',
    rating: 4.8,
    studentsEnrolled: 89,
    modules: 16,
    certificates: true,
    familyAccess: false,
    mobileApp: true,
    prerequisites: ['Expérience logistique 2+ ans'],
    learningObjectives: [
      'Optimiser les chaînes d\'approvisionnement',
      'Maîtriser les outils logistiques digitaux',
      'Gérer les réglementations internationales',
      'Améliorer l\'efficacité opérationnelle'
    ],
    status: 'available'
  },
  {
    id: 'MGMT-401',
    title: 'Leadership Islamique & Management',
    description: 'Principes de leadership selon les valeurs islamiques, gestion d\'équipe et développement organisationnel',
    category: 'management',
    targetRole: ['Gérant Association', 'Responsable Santé'],
    level: 'advanced',
    duration: '10 semaines',
    price: 4500,
    originalPrice: 6000,
    discount: 25,
    instructor: 'Dr. Ahmed Al-Mansouri',
    rating: 4.9,
    studentsEnrolled: 67,
    modules: 20,
    certificates: true,
    familyAccess: true,
    mobileApp: true,
    prerequisites: ['Expérience management 3+ ans'],
    learningObjectives: [
      'Appliquer les principes de leadership islamique',
      'Développer une vision organisationnelle',
      'Motiver et inspirer les équipes',
      'Créer une culture d\'entreprise positive'
    ],
    status: 'available'
  },
  {
    id: 'TECH-501',
    title: 'Transformation Digitale CED',
    description: 'Maîtrise complète de l\'écosystème technologique CED, IA, applications mobiles et outils collaboratifs',
    category: 'technology',
    targetRole: ['Toute l\'équipe'],
    level: 'intermediate',
    duration: '6 semaines',
    price: 2800,
    originalPrice: 3800,
    discount: 25,
    instructor: 'Équipe Technique CED',
    rating: 4.7,
    studentsEnrolled: 234,
    modules: 14,
    certificates: true,
    familyAccess: true,
    mobileApp: true,
    prerequisites: ['Utilisation informatique de base'],
    learningObjectives: [
      'Maîtriser tous les outils CED',
      'Optimiser la productivité digitale',
      'Utiliser l\'IA pour l\'efficacité',
      'Collaborer efficacement à distance'
    ],
    status: 'available'
  },
  {
    id: 'FAMILY-601',
    title: 'Bien-être Familial Islamique',
    description: 'Programme complet pour améliorer la vie familiale selon les principes islamiques, santé et harmonie',
    category: 'family',
    targetRole: ['Toute l\'équipe + Familles'],
    level: 'beginner',
    duration: '5 semaines',
    price: 1200,
    originalPrice: 2000,
    discount: 40,
    instructor: 'Famille Yakoubi & Experts',
    rating: 4.9,
    studentsEnrolled: 456,
    modules: 10,
    certificates: true,
    familyAccess: true,
    mobileApp: true,
    prerequisites: [],
    learningObjectives: [
      'Créer une harmonie familiale durable',
      'Éduquer les enfants selon l\'Islam',
      'Gérer l\'équilibre vie-travail',
      'Développer des relations saines'
    ],
    status: 'available'
  },
  {
    id: 'SPIRIT-701',
    title: 'Développement Spirituel & Professionnel',
    description: 'Intégration des valeurs spirituelles dans la vie professionnelle, croissance personnelle et épanouissement',
    category: 'spiritual',
    targetRole: ['Toute l\'équipe + Familles'],
    level: 'beginner',
    duration: '8 semaines',
    price: 1500,
    originalPrice: 2500,
    discount: 40,
    instructor: 'Sheikh Omar Al-Fatihi',
    rating: 5.0,
    studentsEnrolled: 789,
    modules: 16,
    certificates: true,
    familyAccess: true,
    mobileApp: true,
    prerequisites: [],
    learningObjectives: [
      'Développer la spiritualité au travail',
      'Trouver l\'équilibre vie spirituelle-professionnelle',
      'Appliquer l\'éthique islamique',
      'Croître personnellement et spirituellement'
    ],
    status: 'available'
  }
];

export function EmployeeTrainingPlatform() {
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeProfile | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<TrainingCourse | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'banking': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'health': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'logistics': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'management': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'technology': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
      case 'family': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      case 'spiritual': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'advanced': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'expert': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const filteredCourses = selectedCategory === 'all' 
    ? trainingCourses 
    : trainingCourses.filter(c => c.category === selectedCategory);

  const enrollInCourse = (courseId: string, employeeId?: string) => {
    const course = trainingCourses.find(c => c.id === courseId);
    const employee = employeeId ? employeeProfiles.find(e => e.id === employeeId) : null;
    
    alert(`Inscription confirmée !\n\nCours: ${course?.title}\n${employee ? `Employé: ${employee.prenom} ${employee.nom}\n` : ''}Accès immédiat à la plateforme\n${course?.familyAccess ? 'Accès famille inclus' : ''}\n${course?.mobileApp ? 'Application mobile disponible' : ''}`);
  };

  const downloadSouheilaApp = () => {
    alert(`Téléchargement Application Souheila Yakoubi Ozel !\n\n📱 Disponible sur :\n• App Store iOS\n• Google Play Store\n• Huawei AppGallery\n\n🎁 Avantages employés CED :\n• Accès premium gratuit\n• Consultations personnalisées\n• Plans nutrition famille\n• Suivi santé avancé\n\nCode employé : CED2024`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Formation Continue CED
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Excellence professionnelle et bien-être familial
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              🎓 Formation Continue
            </Badge>
            <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              👨‍👩‍👧‍👦 Accès Famille
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              📱 Apps Mobiles
            </Badge>
          </div>
        </motion.div>

        {/* Application Souheila Spotlight */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30">
                    <Heart className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-green-800 dark:text-green-200">
                      Application Souheila Yakoubi Ozel
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Bien-être, nutrition halal et santé familiale
                    </CardDescription>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-lg px-4 py-2">
                  Gratuit Employés
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Smartphone className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Application Mobile</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Accès complet aux fonctionnalités santé et bien-être
                  </p>
                </div>
                <div className="text-center">
                  <Family className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Accès Famille</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Tous les membres de la famille peuvent bénéficier
                  </p>
                </div>
                <div className="text-center">
                  <Gift className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Avantages Premium</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Consultations personnalisées et plans nutrition
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={downloadSouheilaApp}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Télécharger l'Application
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setSelectedCourse(trainingCourses.find(c => c.id === 'HEALTH-201') || null)}
                  className="border-green-300 text-green-700 hover:bg-green-100 px-8 py-3 text-lg"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Formation Utilisation
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Profils Employés */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Users className="h-6 w-6 text-blue-600" />
            Profils Formation Employés
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {employeeProfiles.map((employee, index) => (
              <motion.div
                key={employee.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                        <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {employee.prenom} {employee.nom}
                        </CardTitle>
                        <CardDescription>
                          {employee.fonction}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Budget formation:</span>
                        <p className="font-semibold text-green-600">CHF {employee.trainingBudget.toLocaleString()}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Famille:</span>
                        <p className="font-semibold">{employee.familyMembers} membres</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Cours terminés:</span>
                        <p className="font-semibold">{employee.completedCourses}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Certificats:</span>
                        <p className="font-semibold">{employee.certificates}</p>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-gray-500 text-sm">Spécialisations:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {employee.specializations.map((spec, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => setSelectedEmployee(employee)}
                      className="w-full"
                    >
                      <Target className="h-4 w-4 mr-1" />
                      Voir Formations Recommandées
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Filtres Formations */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {['all', 'banking', 'health', 'logistics', 'management', 'technology', 'family', 'spiritual'].map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              {category === 'all' ? 'Toutes' : 
               category === 'banking' ? 'Banking' :
               category === 'health' ? 'Santé' :
               category === 'logistics' ? 'Logistique' :
               category === 'management' ? 'Management' :
               category === 'technology' ? 'Technologie' :
               category === 'family' ? 'Famille' :
               'Spirituel'}
            </Button>
          ))}
        </motion.div>

        {/* Catalogue Formations */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg leading-tight mb-2">
                        {course.title}
                      </CardTitle>
                      <div className="flex gap-2 mb-2">
                        <Badge className={getCategoryColor(course.category)} variant="outline">
                          {course.category}
                        </Badge>
                        <Badge className={getLevelColor(course.level)} variant="outline">
                          {course.level}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-semibold">{course.rating}</span>
                        <span className="text-gray-500">({course.studentsEnrolled} étudiants)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">
                        CHF {course.price}
                      </div>
                      {course.discount > 0 && (
                        <div className="text-sm text-gray-500 line-through">
                          CHF {course.originalPrice}
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {course.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Durée:</span>
                      <p className="font-semibold">{course.duration}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Modules:</span>
                      <p className="font-semibold">{course.modules}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Instructeur:</span>
                      <p className="font-semibold">{course.instructor}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Certificat:</span>
                      <p className="font-semibold">{course.certificates ? 'Oui' : 'Non'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    {course.familyAccess && (
                      <Badge variant="outline" className="text-green-600">
                        <Family className="h-3 w-3 mr-1" />
                        Famille
                      </Badge>
                    )}
                    {course.mobileApp && (
                      <Badge variant="outline" className="text-blue-600">
                        <Smartphone className="h-3 w-3 mr-1" />
                        Mobile
                      </Badge>
                    )}
                    {course.certificates && (
                      <Badge variant="outline" className="text-purple-600">
                        <Award className="h-3 w-3 mr-1" />
                        Certificat
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => setSelectedCourse(course)}
                      className="flex-1"
                    >
                      <BookOpen className="h-4 w-4 mr-1" />
                      Détails
                    </Button>
                    <Button 
                      size="sm"
                      onClick={() => enrollInCourse(course.id)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      S'inscrire
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Avantages Formation */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Crown className="h-6 w-6 text-yellow-600" />
                Avantages Formation Employés CED
              </CardTitle>
              <CardDescription>
                Programme de formation continue pour excellence professionnelle
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Formation Continue</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Budget formation généreux pour maintenir l'excellence
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 rounded-full bg-green-100 dark:bg-green-900 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Family className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Accès Famille</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Formations disponibles pour tous les membres de la famille
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 rounded-full bg-purple-100 dark:bg-purple-900 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Certifications</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Certificats reconnus pour développement professionnel
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4 text-center">
                  🌟 Conditions Exceptionnelles Employés CED
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">Budgets Formation Généreux</span>
                    </div>
                    <ul className="ml-6 space-y-1 text-gray-600 dark:text-gray-300">
                      <li>• CHF 8,000 à CHF 18,000 par employé</li>
                      <li>• Remboursement 100% formations approuvées</li>
                      <li>• Temps de formation payé</li>
                      <li>• Bonus performance certification</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Gift className="h-4 w-4 text-green-600" />
                      <span className="font-medium">Avantages Familiaux</span>
                    </div>
                    <ul className="ml-6 space-y-1 text-gray-600 dark:text-gray-300">
                      <li>• Accès gratuit App Souheila pour famille</li>
                      <li>• Formations bien-être familial incluses</li>
                      <li>• Consultations santé personnalisées</li>
                      <li>• Plans nutrition halal sur mesure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Modal Détails Formation */}
        {selectedCourse && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">{selectedCourse.title}</h3>
                <Button variant="ghost" size="sm" onClick={() => setSelectedCourse(null)}>
                  ✕
                </Button>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-3">
                  <Badge className={getCategoryColor(selectedCourse.category)} variant="outline">
                    {selectedCourse.category}
                  </Badge>
                  <Badge className={getLevelColor(selectedCourse.level)} variant="outline">
                    {selectedCourse.level}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-semibold">{selectedCourse.rating}</span>
                  </div>
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {selectedCourse.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">📊 Informations Cours</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Prix:</span>
                        <span className="font-semibold text-green-600">CHF {selectedCourse.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Durée:</span>
                        <span className="font-semibold">{selectedCourse.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Modules:</span>
                        <span className="font-semibold">{selectedCourse.modules}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Instructeur:</span>
                        <span className="font-semibold">{selectedCourse.instructor}</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">🎁 Inclus</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        {selectedCourse.certificates ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <span className="h-4 w-4" />
                        )}
                        <span>Certificat de réussite</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {selectedCourse.familyAccess ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <span className="h-4 w-4" />
                        )}
                        <span>Accès famille</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {selectedCourse.mobileApp ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <span className="h-4 w-4" />
                        )}
                        <span>Application mobile</span>
                      </div>
                    </div>
                  </Card>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">🎯 Objectifs d'Apprentissage</h4>
                  <div className="space-y-2">
                    {selectedCourse.learningObjectives.map((objective, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <Target className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    onClick={() => enrollInCourse(selectedCourse.id)}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    S'inscrire Maintenant
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Programme Détaillé
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
      
      <CEDFooter />
    </div>
  );
}