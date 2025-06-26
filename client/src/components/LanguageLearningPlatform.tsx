import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Languages, 
  BookOpen, 
  Play, 
  Award, 
  Star,
  Clock,
  Users,
  Headphones,
  Mic,
  FileText,
  Video,
  Target,
  Globe,
  Volume2,
  Bookmark,
  CheckCircle,
  TrendingUp
} from "lucide-react";

interface LanguageCourse {
  id: string;
  language: string;
  nativeName: string;
  flag: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Natif';
  duration: string;
  lessons: number;
  enrolledStudents: number;
  rating: number;
  price: string;
  description: string;
  culturalContext: string;
  religiousRelevance?: string;
  keyFeatures: string[];
  learningPath: string[];
  certificationPartner: string;
  instructors: string[];
  practicalApplications: string[];
  status: 'available' | 'coming_soon' | 'beta';
  difficulty: number; // 1-5
  priority: 'high' | 'medium' | 'low';
}

const languageCourses: LanguageCourse[] = [
  {
    id: 'arabic_classical',
    language: 'Arabe Littéraire',
    nativeName: 'العربية الفصحى',
    flag: '🇸🇦',
    level: 'Débutant',
    duration: '18 mois',
    lessons: 144,
    enrolledStudents: 15420,
    rating: 4.9,
    price: 'Gratuit',
    description: 'Apprentissage complet de l\'arabe classique pour comprendre le Coran et la littérature islamique',
    culturalContext: 'Langue du Coran et de la tradition islamique mondiale',
    religiousRelevance: 'Essentiel pour comprendre les sources islamiques authentiques (Coran, Hadith, Fiqh)',
    keyFeatures: [
      'Méthode progressive adaptée aux musulmans',
      'Focus sur vocabulaire coranique et religieux',
      'Calligraphie arabe intégrée',
      'Récitation et Tajwid inclus',
      'Grammaire simplifiée (Nahw et Sarf)',
      'Exercices pratiques avec versets coraniques'
    ],
    learningPath: [
      'Alphabet et phonétique (4 semaines)',
      'Vocabulaire coranique de base (8 semaines)',
      'Grammaire fondamentale (12 semaines)',
      'Lecture de textes simples (16 semaines)',
      'Compréhension du Coran (20 semaines)',
      'Expression écrite et orale (24 semaines)'
    ],
    certificationPartner: 'Al-Azhar University (Égypte)',
    instructors: ['Dr. Ahmad Al-Qari (Al-Azhar)', 'Prof. Fatima Al-Zahra (Université Médine)', 'Sheikh Omar Al-Baghdadi'],
    practicalApplications: [
      'Lecture directe du Coran en arabe',
      'Compréhension des sermons du vendredi',
      'Études islamiques approfondies',
      'Communication avec scholars arabes',
      'Pèlerinage Hajj/Omra facilité'
    ],
    status: 'available',
    difficulty: 4,
    priority: 'high'
  },
  {
    id: 'english_business',
    language: 'Anglais International',
    nativeName: 'English',
    flag: '🇬🇧',
    level: 'Débutant',
    duration: '12 mois',
    lessons: 96,
    enrolledStudents: 23150,
    rating: 4.8,
    price: '299 CHF',
    description: 'Anglais international pour business, études et communication globale',
    culturalContext: 'Langue mondiale des affaires et de la technologie',
    keyFeatures: [
      'Anglais business et professionnel',
      'Préparation TOEFL/IELTS',
      'Communication interculturelle',
      'Vocabulaire technique/finance',
      'Accent britannique et américain',
      'Simulations professionnelles'
    ],
    learningPath: [
      'Bases grammaticales (6 semaines)',
      'Vocabulaire professionnel (8 semaines)',
      'Communication orale (10 semaines)',
      'Rédaction business (12 semaines)',
      'Présentations et meetings (16 semaines)',
      'Négociation et leadership (20 semaines)'
    ],
    certificationPartner: 'Cambridge University',
    instructors: ['Prof. Sarah Johnson (Cambridge)', 'Dr. Michael Thompson (Oxford)', 'Ms. Emma Williams (IELTS)'],
    practicalApplications: [
      'Meetings internationaux',
      'Négociations commerciales',
      'Études universitaires à l\'étranger',
      'Carrière multinationale',
      'Communication tech globale'
    ],
    status: 'available',
    difficulty: 2,
    priority: 'high'
  },
  {
    id: 'italian_culture',
    language: 'Italien',
    nativeName: 'Italiano',
    flag: '🇮🇹',
    level: 'Débutant',
    duration: '10 mois',
    lessons: 80,
    enrolledStudents: 8750,
    rating: 4.7,
    price: '199 CHF',
    description: 'Italien moderne avec immersion culturelle et business',
    culturalContext: 'Langue de la Renaissance, art, mode et gastronomie',
    keyFeatures: [
      'Italien conversationnel fluide',
      'Culture italienne authentique',
      'Business en Italie',
      'Art et histoire italienne',
      'Gastronomie et lifestyle',
      'Dialectes régionaux (optionnel)'
    ],
    learningPath: [
      'Prononciation et bases (4 semaines)',
      'Conversation quotidienne (8 semaines)',
      'Grammaire progressive (12 semaines)',
      'Culture et traditions (16 semaines)',
      'Italien professionnel (20 semaines)',
      'Maîtrise complète (24 semaines)'
    ],
    certificationPartner: 'Università Bocconi (Milan)',
    instructors: ['Prof. Marco Rossi (Bocconi)', 'Dr. Giulia Bianchi (Rome)', 'Maestro Antonio Verde'],
    practicalApplications: [
      'Voyages en Italie',
      'Business avec entreprises italiennes',
      'Études en Italie',
      'Appréciation culturelle',
      'Mode et design italien'
    ],
    status: 'available',
    difficulty: 2,
    priority: 'medium'
  },
  {
    id: 'french_diplomacy',
    language: 'Français',
    nativeName: 'Français',
    flag: '🇫🇷',
    level: 'Débutant',
    duration: '12 mois',
    lessons: 90,
    enrolledStudents: 12340,
    rating: 4.6,
    price: '249 CHF',
    description: 'Français international et diplomatique',
    culturalContext: 'Langue de la diplomatie et de la francophonie',
    keyFeatures: [
      'Français diplomatie internationale',
      'Culture francophone mondiale',
      'Business France/Afrique',
      'Littérature française',
      'Français juridique',
      'Accent parisien authentique'
    ],
    learningPath: [
      'Fondamentaux (6 semaines)',
      'Expression orale (10 semaines)',
      'Grammaire avancée (14 semaines)',
      'Culture francophone (18 semaines)',
      'Français professionnel (22 semaines)',
      'Maîtrise diplomatique (26 semaines)'
    ],
    certificationPartner: 'Sorbonne Université',
    instructors: ['Prof. Marie Dubois (Sorbonne)', 'Dr. Pierre Martin (Sciences Po)', 'Mme. Claire Laurent'],
    practicalApplications: [
      'Diplomatie internationale',
      'Business Afrique francophone',
      'Études en France',
      'ONG internationales',
      'Culture française'
    ],
    status: 'available',
    difficulty: 3,
    priority: 'medium'
  },
  {
    id: 'mandarin_business',
    language: 'Chinois Mandarin',
    nativeName: '中文',
    flag: '🇨🇳',
    level: 'Débutant',
    duration: '15 mois',
    lessons: 120,
    enrolledStudents: 6890,
    rating: 4.5,
    price: '349 CHF',
    description: 'Mandarin business pour le marché chinois',
    culturalContext: 'Première langue mondiale par nombre de locuteurs',
    keyFeatures: [
      'Caractères simplifiés et traditionnels',
      'Business en Chine',
      'Culture chinoise moderne',
      'Tons et prononciation',
      'Calligraphie chinoise',
      'Étiquette des affaires'
    ],
    learningPath: [
      'Pinyin et tons (8 semaines)',
      'Caractères de base (12 semaines)',
      'Conversation simple (16 semaines)',
      'Business mandarin (20 semaines)',
      'Culture d\'entreprise (24 semaines)',
      'Négociation avancée (28 semaines)'
    ],
    certificationPartner: 'Peking University',
    instructors: ['Prof. Li Wei (Pékin)', 'Dr. Zhang Ming (Tsinghua)', 'Ms. Wang Ling (HSK)'],
    practicalApplications: [
      'Business en Chine',
      'Import/Export chinois',
      'Technologie chinoise',
      'Voyage en Chine',
      'Relations sino-musulmanes'
    ],
    status: 'available',
    difficulty: 5,
    priority: 'medium'
  },
  {
    id: 'spanish_latam',
    language: 'Espagnol',
    nativeName: 'Español',
    flag: '🇪🇸',
    level: 'Débutant',
    duration: '10 mois',
    lessons: 75,
    enrolledStudents: 9670,
    rating: 4.8,
    price: '179 CHF',
    description: 'Espagnol international (Espagne et Amérique Latine)',
    culturalContext: 'Deuxième langue mondiale, 21 pays hispanophones',
    keyFeatures: [
      'Espagnol universel',
      'Variantes régionales',
      'Business Amérique Latine',
      'Culture hispanique',
      'Espagnol médical/juridique',
      'Communication interculturelle'
    ],
    learningPath: [
      'Bases grammaticales (5 semaines)',
      'Conversation courante (8 semaines)',
      'Cultures hispanophones (12 semaines)',
      'Espagnol professionnel (16 semaines)',
      'Variantes régionales (20 semaines)',
      'Maîtrise complète (22 semaines)'
    ],
    certificationPartner: 'Instituto Cervantes',
    instructors: ['Prof. Carlos Mendez (Cervantes)', 'Dra. Ana Rodriguez (UNAM)', 'Sr. Pablo Jimenez'],
    practicalApplications: [
      'Business Amérique Latine',
      'Voyages hispanophones',
      'Études en Espagne',
      'ONG Amérique du Sud',
      'Communication globale'
    ],
    status: 'available',
    difficulty: 2,
    priority: 'low'
  },
  {
    id: 'german_engineering',
    language: 'Allemand',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    level: 'Débutant',
    duration: '14 mois',
    lessons: 105,
    enrolledStudents: 5430,
    rating: 4.4,
    price: '279 CHF',
    description: 'Allemand technique et business',
    culturalContext: 'Langue de l\'ingénierie et de l\'innovation européenne',
    keyFeatures: [
      'Allemand technique/ingénierie',
      'Business en Allemagne',
      'Culture germanique',
      'Industrie 4.0',
      'Allemand académique',
      'Certification Goethe'
    ],
    learningPath: [
      'Grammaire allemande (8 semaines)',
      'Vocabulaire technique (12 semaines)',
      'Communication business (16 semaines)',
      'Culture allemande (20 semaines)',
      'Industrie/Innovation (24 semaines)',
      'Certification finale (28 semaines)'
    ],
    certificationPartner: 'Goethe Institut',
    instructors: ['Prof. Hans Mueller (Goethe)', 'Dr. Ingrid Schmidt (TU Munich)', 'Herr Klaus Weber'],
    practicalApplications: [
      'Ingénierie en Allemagne',
      'Industrie automobile',
      'Technologie allemande',
      'Études en Allemagne',
      'Innovation européenne'
    ],
    status: 'coming_soon',
    difficulty: 4,
    priority: 'low'
  }
];

export function LanguageLearningPlatform() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('arabic_classical');
  const [enrollmentProgress, setEnrollmentProgress] = useState<{ [key: string]: number }>({});

  const currentCourse = languageCourses.find(course => course.id === selectedLanguage);

  const handleEnrollment = (courseId: string) => {
    setEnrollmentProgress(prev => ({ ...prev, [courseId]: 0 }));
    const interval = setInterval(() => {
      setEnrollmentProgress(prev => {
        const current = prev[courseId] || 0;
        if (current >= 100) {
          clearInterval(interval);
          return prev;
        }
        return { ...prev, [courseId]: current + 10 };
      });
    }, 200);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'low': return 'bg-green-100 text-green-800 border-green-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'coming_soon': return 'bg-blue-100 text-blue-800';
      case 'beta': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyStars = (difficulty: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < difficulty ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <Card className="border-2 border-blue-500 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Languages className="h-8 w-8 text-blue-600" />
              <div>
                <CardTitle className="text-2xl text-blue-800">
                  🌍 École de Langues CED Academy
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Arabe Littéraire • Anglais • Italien • Français • Chinois • Espagnol • Allemand
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{languageCourses.length}</div>
              <div className="text-sm text-gray-500">Langues Disponibles</div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Étudiants Actifs</p>
                <p className="text-2xl font-bold text-blue-600">
                  {languageCourses.reduce((sum, course) => sum + course.enrolledStudents, 0).toLocaleString()}
                </p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Cours Totaux</p>
                <p className="text-2xl font-bold text-purple-600">
                  {languageCourses.reduce((sum, course) => sum + course.lessons, 0)}
                </p>
              </div>
              <BookOpen className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Note Moyenne</p>
                <p className="text-2xl font-bold text-green-600">
                  {(languageCourses.reduce((sum, course) => sum + course.rating, 0) / languageCourses.length).toFixed(1)}
                </p>
              </div>
              <Star className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Certificats</p>
                <p className="text-2xl font-bold text-orange-600">7</p>
              </div>
              <Award className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sélection de langue */}
      <Tabs value={selectedLanguage} onValueChange={setSelectedLanguage}>
        <TabsList className="grid w-full grid-cols-7 h-auto">
          {languageCourses.map((course) => (
            <TabsTrigger key={course.id} value={course.id} className="text-xs p-3 h-auto flex flex-col">
              <div className="text-lg mb-1">{course.flag}</div>
              <div className="font-medium">{course.language.split(' ')[0]}</div>
              <div className="text-xs text-gray-500">{course.enrolledStudents.toLocaleString()}</div>
            </TabsTrigger>
          ))}
        </TabsList>

        {languageCourses.map((course) => (
          <TabsContent key={course.id} value={course.id}>
            <LanguageCourseDetail 
              course={course} 
              onEnroll={handleEnrollment}
              progress={enrollmentProgress[course.id] || 0}
              getPriorityColor={getPriorityColor}
              getStatusColor={getStatusColor}
              getDifficultyStars={getDifficultyStars}
            />
          </TabsContent>
        ))}
      </Tabs>

      {/* Vue d'ensemble des cours */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Globe className="h-6 w-6 text-blue-600" />
            Catalogue Complet des Langues
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {languageCourses.map((course) => (
              <Card key={course.id} className="border hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{course.flag}</span>
                      <div>
                        <h3 className="font-semibold">{course.language}</h3>
                        <p className="text-xs text-gray-500">{course.nativeName}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(course.status)}>
                      {course.status === 'available' ? 'Disponible' : course.status === 'coming_soon' ? 'Bientôt' : 'Beta'}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Durée:</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cours:</span>
                      <span className="font-medium">{course.lessons} leçons</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Prix:</span>
                      <span className="font-medium text-green-600">{course.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Difficulté:</span>
                      <div className="flex gap-1">
                        {getDifficultyStars(course.difficulty)}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Note:</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-medium">{course.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Badge variant="outline" className={`mt-3 ${getPriorityColor(course.priority)}`}>
                    Priorité {course.priority}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Footer Protection */}
      <div className="mt-12 text-center text-xs text-gray-500 bg-gray-50 p-4 rounded-lg border">
        <p>© 2025 Club Empreinte Digitale - Yakoubi Yamina. Tous droits réservés.</p>
        <p>École de Langues CED Academy - Formation Linguistique Internationale</p>
        <p className="font-arabic text-blue-600 mt-2">وفقك الله في تعلم اللغات - Qu'Allah vous aide dans l'apprentissage des langues</p>
      </div>
    </div>
  );
}

interface LanguageCourseDetailProps {
  course: LanguageCourse;
  onEnroll: (courseId: string) => void;
  progress: number;
  getPriorityColor: (priority: string) => string;
  getStatusColor: (status: string) => string;
  getDifficultyStars: (difficulty: number) => JSX.Element[];
}

function LanguageCourseDetail({ course, onEnroll, progress, getPriorityColor, getStatusColor, getDifficultyStars }: LanguageCourseDetailProps) {
  return (
    <div className="space-y-6">
      {/* En-tête du cours */}
      <Card className="border-2 border-blue-500">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-4xl">{course.flag}</div>
              <div>
                <CardTitle className="text-2xl">{course.language}</CardTitle>
                <p className="text-lg text-gray-600 font-medium">{course.nativeName}</p>
                <p className="text-sm text-gray-500">{course.description}</p>
              </div>
            </div>
            <div className="text-right space-y-2">
              <Badge className={getStatusColor(course.status)}>
                {course.status === 'available' ? '✅ Disponible' : course.status === 'coming_soon' ? '🔜 Bientôt' : '🔬 Beta'}
              </Badge>
              <Badge variant="outline" className={getPriorityColor(course.priority)}>
                Priorité {course.priority}
              </Badge>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Statistiques du cours */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">{course.price}</p>
              <p className="text-sm text-gray-600">Prix</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{course.duration}</p>
              <p className="text-sm text-gray-600">Durée</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">{course.lessons}</p>
              <p className="text-sm text-gray-600">Leçons</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">{course.enrolledStudents.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Étudiants</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="flex justify-center items-center gap-1 mb-1">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <p className="text-2xl font-bold text-yellow-600">{course.rating}</p>
              </div>
              <p className="text-sm text-gray-600">Note</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Détails du cours */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Caractéristiques */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-blue-600" />
              Caractéristiques Clés
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {course.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Parcours d'apprentissage */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-purple-600" />
              Parcours d'Apprentissage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {course.learningPath.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-sm">{step}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Applications pratiques */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Applications Pratiques
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {course.practicalApplications.map((application, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{application}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Instructeurs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-orange-600" />
              Instructeurs Experts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {course.instructors.map((instructor, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-orange-600" />
                  </div>
                  <span className="text-sm font-medium">{instructor}</span>
                </div>
              ))}
              <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-600">
                  <strong>Certification partenaire:</strong> {course.certificationPartner}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contexte culturel */}
      {course.culturalContext && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-indigo-600" />
              Contexte Culturel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700">{course.culturalContext}</p>
            {course.religiousRelevance && (
              <div className="mt-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h4 className="font-medium text-green-800 mb-1">Pertinence Religieuse</h4>
                <p className="text-sm text-green-700">{course.religiousRelevance}</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Difficulté et inscription */}
      <Card className="border-2 border-green-500">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                🎯 Commencer l'Apprentissage - {course.language}
              </h3>
              <div className="flex items-center gap-4 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Difficulté:</span>
                  <div className="flex gap-1">
                    {getDifficultyStars(course.difficulty)}
                  </div>
                </div>
                <Badge variant="outline">Niveau {course.level}</Badge>
              </div>
              <p className="text-sm text-gray-600">
                Rejoignez {course.enrolledStudents.toLocaleString()} étudiants • Certification {course.certificationPartner}
              </p>
            </div>
            <div className="space-y-2">
              <Button 
                onClick={() => onEnroll(course.id)}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                disabled={progress > 0 && progress < 100 || course.status !== 'available'}
              >
                {course.status !== 'available' ? (
                  <>
                    <Clock className="h-4 w-4" />
                    {course.status === 'coming_soon' ? 'Bientôt Disponible' : 'Beta Fermée'}
                  </>
                ) : progress > 0 && progress < 100 ? (
                  <>
                    <Clock className="h-4 w-4 animate-spin" />
                    Inscription...
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4" />
                    S'inscrire ({course.price})
                  </>
                )}
              </Button>
              {progress > 0 && (
                <div className="w-48">
                  <Progress value={progress} className="h-2" />
                  <p className="text-xs text-center text-gray-500 mt-1">
                    {progress}% inscription
                  </p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}