import { useQuery } from '@tanstack/react-query';
import { useRoute, Link } from 'wouter';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { VoiceAssistant } from '@/components/voice/VoiceAssistant';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { Code, Apple, Brain, Award, Clock, Users, Star, Play, ChevronRight, BookOpen, Video, Target, Shield, CheckCircle } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/context/LanguageContext';
import { FiqhValidationCertificate } from '@/components/FiqhValidationCertificate';

const categoryIcons = {
  'programmation': Code,
  'dietetique': Apple,
  'ia-domains': Brain,
  'certifications': Award,
  'coran-tajweed': BookOpen,
  'sahaba-stories': Users,
  'hadith-studies': Star,
  'islamic-sciences': Target,
  'arabic-learning': Video,
};

const categoryColors = {
  'programmation': {
    bg: 'bg-primary-100',
    text: 'text-primary-600',
    hover: 'group-hover:bg-primary-200',
    gradient: 'from-primary-50 to-primary-100',
  },
  'dietetique': {
    bg: 'bg-green-100',
    text: 'text-green-600',
    hover: 'group-hover:bg-green-200',
    gradient: 'from-green-50 to-green-100',
  },
  'ia-domains': {
    bg: 'bg-secondary-100',
    text: 'text-secondary-600',
    hover: 'group-hover:bg-secondary-200',
    gradient: 'from-secondary-50 to-secondary-100',
  },
  'certifications': {
    bg: 'bg-accent-100',
    text: 'text-accent-600',
    hover: 'group-hover:bg-accent-200',
    gradient: 'from-accent-50 to-accent-100',
  },
  'coran-tajweed': {
    bg: 'bg-emerald-100',
    text: 'text-emerald-600',
    hover: 'group-hover:bg-emerald-200',
    gradient: 'from-emerald-50 to-emerald-100',
  },
  'sahaba-stories': {
    bg: 'bg-amber-100',
    text: 'text-amber-600',
    hover: 'group-hover:bg-amber-200',
    gradient: 'from-amber-50 to-amber-100',
  },
  'hadith-studies': {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    hover: 'group-hover:bg-blue-200',
    gradient: 'from-blue-50 to-blue-100',
  },
  'islamic-sciences': {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
    hover: 'group-hover:bg-purple-200',
    gradient: 'from-purple-50 to-purple-100',
  },
  'arabic-learning': {
    bg: 'bg-rose-100',
    text: 'text-rose-600',
    hover: 'group-hover:bg-rose-200',
    gradient: 'from-rose-50 to-rose-100',
  },
};

const categoryTitles = {
  'programmation': 'Programmation',
  'dietetique': 'Diététique',
  'ia-domains': '10 Domaines IA',
  'certifications': 'Certifications',
  'coran-tajweed': 'Coran & Tajweed',
  'sahaba-stories': 'Histoires des Sahaba',
  'hadith-studies': 'Études Hadith',
  'islamic-sciences': 'Sciences Islamiques',
  'arabic-learning': 'Apprentissage Arabe',
};

const categoryDescriptions = {
  'programmation': 'Maîtrisez les langages de programmation modernes avec une approche éthique et durable. Apprenez Python, JavaScript, et les frameworks responsables.',
  'dietetique': 'Nutrition responsable et alimentation durable pour un mode de vie équilibré. Découvrez les principes d\'une diététique éthique et écologique.',
  'ia-domains': 'Explorez les applications de l\'IA dans 10 domaines professionnels différents : santé, finance, éducation, agriculture, et plus encore.',
  'certifications': 'Obtenez des certifications reconnues en IA éthique et technologies responsables. Validez vos compétences avec nos partenaires universitaires.',
  'coran-tajweed': 'Apprenez la récitation du Coran avec les règles du Tajweed. Formations complètes avec récitateurs authentiques et méthodes traditionnelles.',
  'sahaba-stories': 'Découvrez les histoires inspirantes des Compagnons du Prophète (PBSL). Leçons de vie et exemples de foi authentique.',
  'hadith-studies': 'Étudiez les hadiths authentiques (Sahih Bukhari, Muslim) avec méthodologie scientifique et chaînes de transmission vérifiées.',
  'islamic-sciences': 'Sciences islamiques complètes : Fiqh, Aqida, Sira, Tafsir. Enseignement selon les 4 écoles sunnites authentiques.',
  'arabic-learning': 'Maîtrisez l\'arabe littéraire et la calligraphie traditionnelle. Méthodes éprouvées et IA éducative conforme Fiqh.',
};

function CourseCard({ course, userProgress }: { course: any; userProgress?: any }) {
  const { isAuthenticated } = useAuth();
  const colors = categoryColors[course.category as keyof typeof categoryColors];
  const Icon = categoryIcons[course.category as keyof typeof categoryIcons];
  
  const progress = userProgress?.find((p: any) => p.courseId === course.id);
  const progressPercentage = progress?.progress || 0;
  const isCompleted = progress?.completed || false;
  
  // Vérifier si c'est une formation islamique
  const isIslamicCourse = ['coran-tajweed', 'sahaba-stories', 'hadith-studies', 'islamic-sciences', 'arabic-learning'].includes(course.category);

  return (
    <div className="space-y-4">
      {/* Certificat Fiqh pour formations islamiques */}
      {isIslamicCourse && (
        <div className="border-2 border-green-500 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="h-6 w-6 text-green-600" />
            <div>
              <h3 className="text-green-800 font-bold">🕌 Formation 100% HALAL Certifiée</h3>
              <p className="text-green-700 text-sm">Conforme Fiqh Informatique CED Academy</p>
            </div>
            <Badge className="bg-blue-100 text-blue-800 text-sm px-3 py-1 ml-auto">
              🔵 MANDUB
            </Badge>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-green-800">Sources: Coran + Sunna</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-green-800">Ijmâ' + Qiyâs validés</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-green-800">Méthodologie Salaf</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-green-800">4 Écoles conformes</span>
            </div>
          </div>
        </div>
      )}
      
      <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-100 overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${colors.gradient}`} />
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4 transition-colors ${colors.hover}`}>
              <Icon className={`h-6 w-6 ${colors.text}`} />
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="text-xs">
                {course.difficulty}
              </Badge>
              {isCompleted && (
                <Badge className="bg-green-100 text-green-600 text-xs">
                  Terminé
                </Badge>
              )}
            </div>
          </div>
          <CardTitle className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {course.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {course.description}
          </p>
          
          {progressPercentage > 0 && (
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Progression</span>
                <span className="text-sm text-gray-500">{progressPercentage}%</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
          )}

          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                <span>{course.duration}h</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-1 h-4 w-4" />
                <span>{course.modules} modules</span>
              </div>
            </div>
            <div className="flex items-center">
              <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>4.8</span>
            </div>
          </div>

          <Button 
            className={`w-full ${isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-primary-600 hover:bg-primary-700'} text-white`}
            size="sm"
          >
            {isCompleted ? (
              <>
                <BookOpen className="mr-2 h-4 w-4" />
                Réviser
              </>
            ) : progressPercentage > 0 ? (
              <>
                <Play className="mr-2 h-4 w-4" />
                Continuer
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                Commencer
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function CategorySection({ category, courses, userProgress }: { category: string; courses: any[]; userProgress?: any[] }) {
  const colors = categoryColors[category as keyof typeof categoryColors];
  const title = categoryTitles[category as keyof typeof categoryTitles];
  const description = categoryDescriptions[category as keyof typeof categoryDescriptions];
  const Icon = categoryIcons[category as keyof typeof categoryIcons];

  const completedCourses = courses.filter(course => {
    const progress = userProgress?.find(p => p.courseId === course.id);
    return progress?.completed;
  }).length;

  const totalHours = courses.reduce((acc, course) => acc + (course.duration || 0), 0);
  const totalModules = courses.reduce((acc, course) => acc + (course.modules || 0), 0);

  return (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mr-4`}>
          <Icon className={`h-8 w-8 ${colors.text}`} />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600 mb-3">{description}</p>
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <span>{courses.length} formations</span>
            <span>{totalHours}h de contenu</span>
            <span>{totalModules} modules</span>
            <span>{completedCourses} terminées</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} userProgress={userProgress} />
        ))}
      </div>
    </div>
  );
}

export default function Formations() {
  const { currentLanguage } = useLanguage();
  
  const { data: courses = [], isLoading: coursesLoading } = useQuery({
    queryKey: ['/api/courses'],
  });

  const { data: userProgress = [] } = useQuery({
    queryKey: ['/api/user/progress'],
  });

  if (coursesLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-2 bg-gray-200" />
                <CardHeader>
                  <Skeleton className="h-12 w-12 rounded-xl" />
                  <Skeleton className="h-6 w-3/4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Grouper les cours par catégorie
  const coursesByCategory = courses.reduce((acc: any, course: any) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});

  const categories = Object.keys(coursesByCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      <VoiceAssistant />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Accueil</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Formations</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Catalogue de Formations CED Academy
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Formations éthiques et responsables pour un avenir durable
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">{courses.length}</div>
              <div className="text-sm text-gray-500">Formations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">78</div>
              <div className="text-sm text-gray-500">Langues</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">95%</div>
              <div className="text-sm text-gray-500">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">24/7</div>
              <div className="text-sm text-gray-500">Support</div>
            </div>
          </div>
        </div>

        {/* Affichage par catégorie */}
        {categories.map((category) => (
          <CategorySection
            key={category}
            category={category}
            courses={coursesByCategory[category]}
            userProgress={userProgress}
          />
        ))}
      </div>
      
      <Footer />
    </div>
  );
}