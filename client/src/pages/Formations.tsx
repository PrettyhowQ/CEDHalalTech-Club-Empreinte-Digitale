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
import { Code, Apple, Brain, Award, Clock, Users, Star, Play, ChevronRight, BookOpen, Video, Target } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/context/LanguageContext';

const categoryIcons = {
  'programmation': Code,
  'dietetique': Apple,
  'ia-domains': Brain,
  'certifications': Award,
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
};

const categoryTitles = {
  'programmation': 'Programmation',
  'dietetique': 'Diététique',
  'ia-domains': '10 Domaines IA',
  'certifications': 'Certifications',
};

const categoryDescriptions = {
  'programmation': 'Maîtrisez les langages de programmation modernes avec une approche éthique et durable. Apprenez Python, JavaScript, et les frameworks responsables.',
  'dietetique': 'Nutrition responsable et alimentation durable pour un mode de vie équilibré. Découvrez les principes d\'une diététique éthique et écologique.',
  'ia-domains': 'Explorez les applications de l\'IA dans 10 domaines professionnels différents : santé, finance, éducation, agriculture, et plus encore.',
  'certifications': 'Obtenez des certifications reconnues en IA éthique et technologies responsables. Validez vos compétences avec nos partenaires universitaires.',
};

function CourseCard({ course, userProgress }: { course: any; userProgress?: any }) {
  const { isAuthenticated } = useAuth();
  const colors = categoryColors[course.category as keyof typeof categoryColors];
  const Icon = categoryIcons[course.category as keyof typeof categoryIcons];
  
  const progress = userProgress?.find((p: any) => p.courseId === course.id);
  const progressPercentage = progress?.progress || 0;
  const isCompleted = progress?.completed || false;

  return (
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
        
        {isAuthenticated && progressPercentage > 0 && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Progression</span>
              <span className="text-sm font-medium text-gray-900">{progressPercentage}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        )}
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration || 45} min</span>
            </div>
            <div className="flex items-center space-x-1">
              <Target className="h-4 w-4" />
              <span>{course.xpReward || 10} XP</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-current text-accent-500" />
            <span>4.8</span>
          </div>
        </div>

        {/* Prix des formations */}
        <div className="mb-4 space-y-2">
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div>
              <p className="text-sm font-medium text-blue-800">Étudiants</p>
              <p className="text-xs text-blue-600">Tarif préférentiel</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-blue-700">{course.priceStudent || '29'}€</p>
              <p className="text-xs text-blue-600">par mois</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div>
              <p className="text-sm font-medium text-purple-800">Entreprises</p>
              <p className="text-xs text-purple-600">Formation professionnelle</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-purple-700">{course.priceBusiness || '149'}€</p>
              <p className="text-xs text-purple-600">par employé/mois</p>
            </div>
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
  );
}

function CategorySection({ category, courses, userProgress }: { category: string; courses: any[]; userProgress?: any[] }) {
  const colors = categoryColors[category as keyof typeof categoryColors];
  const Icon = categoryIcons[category as keyof typeof categoryIcons];
  const title = categoryTitles[category as keyof typeof categoryTitles];
  const description = categoryDescriptions[category as keyof typeof categoryDescriptions];
  
  const completedCourses = userProgress?.filter(p => 
    p.completed && courses.some(c => c.id === p.courseId)
  ).length || 0;

  return (
    <section className="mb-16">
      <div className={`bg-gradient-to-br ${colors.gradient} rounded-2xl p-8 mb-8`}>
        <div className="flex items-center mb-4">
          <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mr-6 ${colors.hover} transition-colors`}>
            <Icon className={`h-8 w-8 ${colors.text}`} />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-lg text-gray-600">{description}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className={`text-2xl font-bold ${colors.text}`}>
              {courses.length}
            </div>
            <div className="text-sm text-gray-600">Cours disponibles</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${colors.text}`}>
              {completedCourses}
            </div>
            <div className="text-sm text-gray-600">Terminés</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${colors.text}`}>
              {Math.round(courses.reduce((acc, course) => acc + (course.duration || 45), 0) / 60)}h
            </div>
            <div className="text-sm text-gray-600">Durée totale</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${colors.text}`}>
              {courses.reduce((acc, course) => acc + (course.xpReward || 10), 0)}
            </div>
            <div className="text-sm text-gray-600">XP total</div>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard 
            key={course.id} 
            course={course} 
            userProgress={userProgress}
          />
        ))}
      </div>
    </section>
  );
}

export default function Formations() {
  const [match, params] = useRoute('/formations/:category');
  const { isAuthenticated } = useAuth();
  const { currentLanguage } = useLanguage();
  
  const selectedCategory = params?.category;

  const { data: courses, isLoading: coursesLoading } = useQuery({
    queryKey: ['/api/courses', selectedCategory],
    queryFn: async () => {
      const url = selectedCategory 
        ? `/api/courses?category=${selectedCategory}`
        : '/api/courses';
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch courses');
      return response.json();
    },
  });

  const { data: userProgress } = useQuery({
    queryKey: ['/api/user/progress'],
    enabled: isAuthenticated,
  });

  // Group courses by category
  const coursesByCategory = courses?.reduce((acc: Record<string, any[]>, course: any) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {}) || {};

  const categories = ['programmation', 'dietetique', 'ia-domains', 'certifications'];

  if (coursesLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Skeleton className="h-8 w-64 mb-4" />
              <Skeleton className="h-4 w-96" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-80 rounded-xl" />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Accueil</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/formations">Formations</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {selectedCategory && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>
                      {categoryTitles[selectedCategory as keyof typeof categoryTitles]}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {selectedCategory 
                ? categoryTitles[selectedCategory as keyof typeof categoryTitles]
                : 'Nos Formations'
              }
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {selectedCategory 
                ? categoryDescriptions[selectedCategory as keyof typeof categoryDescriptions]
                : 'Développez vos compétences avec nos formations certifiantes en IA responsable, programmation éthique et technologies durables.'
              }
            </p>
          </div>

          {/* Category Navigation */}
          {!selectedCategory && (
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 rounded-xl p-2 flex space-x-2 overflow-x-auto">
                {categories.map((category) => {
                  const Icon = categoryIcons[category as keyof typeof categoryIcons];
                  const title = categoryTitles[category as keyof typeof categoryTitles];
                  const colors = categoryColors[category as keyof typeof categoryColors];
                  const coursesCount = coursesByCategory[category]?.length || 0;
                  
                  return (
                    <Link key={category} href={`/formations/${category}`}>
                      <Button
                        variant="ghost"
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap hover:bg-white transition-colors"
                      >
                        <Icon className={`h-4 w-4 ${colors.text}`} />
                        <span>{title}</span>
                        <Badge variant="secondary" className="text-xs">
                          {coursesCount}
                        </Badge>
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Courses Content */}
          {selectedCategory ? (
            // Single category view
            coursesByCategory[selectedCategory] ? (
              <CategorySection 
                category={selectedCategory}
                courses={coursesByCategory[selectedCategory]}
                userProgress={userProgress}
              />
            ) : (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Aucun cours disponible
                </h3>
                <p className="text-gray-600 mb-6">
                  Les cours de cette catégorie seront bientôt disponibles.
                </p>
                <Link href="/formations">
                  <Button>
                    Voir toutes les formations
                  </Button>
                </Link>
              </div>
            )
          ) : (
            // All categories view
            <div>
              {categories.map((category) => {
                const coursesInCategory = coursesByCategory[category];
                if (!coursesInCategory || coursesInCategory.length === 0) return null;
                
                return (
                  <CategorySection 
                    key={category}
                    category={category}
                    courses={coursesInCategory}
                    userProgress={userProgress}
                  />
                );
              })}
              
              {Object.keys(coursesByCategory).length === 0 && (
                <div className="text-center py-20">
                  <BookOpen className="h-20 w-20 text-gray-300 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Aucune formation disponible
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Nos formations seront bientôt disponibles. Inscrivez-vous pour être notifié du lancement.
                  </p>
                  {!isAuthenticated && (
                    <a href="/api/login">
                      <Button size="lg">
                        S'inscrire aux notifications
                      </Button>
                    </a>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Call to Action */}
          {!isAuthenticated && courses && courses.length > 0 && (
            <div className="mt-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">
                Prêt à commencer votre apprentissage ?
              </h3>
              <p className="text-primary-100 mb-6">
                Connectez-vous pour suivre vos progrès et débloquer des fonctionnalités exclusives.
              </p>
              <a href="/api/login">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-50">
                  Commencer gratuitement
                </Button>
              </a>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <VoiceAssistant />
    </div>
  );
}
