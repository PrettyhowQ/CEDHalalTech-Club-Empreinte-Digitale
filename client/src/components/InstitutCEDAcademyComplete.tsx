import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Users, 
  Globe, 
  Play, 
  Download, 
  Star,
  Clock,
  Trophy,
  Brain,
  Languages,
  Mic,
  Video,
  FileText,
  CheckCircle,
  Lock,
  Unlock,
  Search,
  Filter,
  Calendar,
  User,
  Settings,
  MessageCircle,
  Heart,
  Share2
} from 'lucide-react';

// Données des formations complètes avec progression
const formations = [
  {
    id: 1,
    title: "Fiqh Informatique Fondamental",
    description: "Comprendre les principes islamiques dans le développement technologique",
    category: "fiqh",
    level: "débutant",
    duration: "40h",
    modules: 12,
    enrolled: 2847,
    rating: 4.9,
    instructor: "Sheikh Ahmad Al-Teknologi",
    price: 0,
    languages: ["ar", "fr", "en"],
    certification: true,
    progress: 0,
    status: "available",
    tags: ["halal", "développement", "4sources"],
    chapters: [
      { id: 1, title: "Introduction aux 4 sources islamiques", duration: "45min", completed: false },
      { id: 2, title: "Le Coran et la technologie", duration: "1h", completed: false },
      { id: 3, title: "La Sunna du Prophète ﷺ et l'innovation", duration: "50min", completed: false },
      { id: 4, title: "Ijmâ' des savants sur les nouvelles technologies", duration: "35min", completed: false }
    ]
  },
  {
    id: 2,
    title: "Intelligence Artificielle Éthique",
    description: "Développer des IA conformes aux valeurs islamiques",
    category: "ai",
    level: "intermédiaire",
    duration: "60h",
    modules: 18,
    enrolled: 1923,
    rating: 4.8,
    instructor: "Dr. Amina Tech",
    price: 299,
    languages: ["ar", "fr", "en"],
    certification: true,
    progress: 0,
    status: "available",
    tags: ["ia", "éthique", "halal"],
    chapters: [
      { id: 1, title: "Fondements éthiques de l'IA en Islam", duration: "1h15", completed: false },
      { id: 2, title: "Algorithmes de recommandation halal", duration: "1h30", completed: false },
      { id: 3, title: "Filtrage de contenu selon la Sharia", duration: "1h", completed: false }
    ]
  },
  {
    id: 3,
    title: "Blockchain et Cryptomonnaies Halal",
    description: "Comprendre la blockchain dans le cadre de la finance islamique",
    category: "blockchain",
    level: "avancé",
    duration: "45h",
    modules: 15,
    enrolled: 1456,
    rating: 4.7,
    instructor: "Prof. Omar Blockchain",
    price: 399,
    languages: ["ar", "fr", "en"],
    certification: true,
    progress: 0,
    status: "available",
    tags: ["blockchain", "finance", "crypto"],
    chapters: [
      { id: 1, title: "Principes de la blockchain et Sharia", duration: "1h", completed: false },
      { id: 2, title: "Smart contracts conformes au Fiqh", duration: "1h20", completed: false }
    ]
  },
  {
    id: 4,
    title: "Apprentissage Arabe Coranique",
    description: "Maîtriser l'arabe classique pour comprendre le Coran",
    category: "langue",
    level: "débutant",
    duration: "80h",
    modules: 24,
    enrolled: 5632,
    rating: 4.9,
    instructor: "Ustadh Yusuf Al-Arabi",
    price: 199,
    languages: ["ar", "fr", "en"],
    certification: true,
    progress: 0,
    status: "available",
    tags: ["arabe", "coran", "langue"],
    chapters: [
      { id: 1, title: "Alphabet arabe et phonétique", duration: "30min", completed: false },
      { id: 2, title: "Vocabulaire coranique essentiel", duration: "45min", completed: false },
      { id: 3, title: "Grammaire de base", duration: "1h", completed: false }
    ]
  },
  {
    id: 5,
    title: "Calligraphie Arabe Traditionnelle",
    description: "Art de la calligraphie islamique dans 4 styles authentiques",
    category: "art",
    level: "intermédiaire",
    duration: "35h",
    modules: 12,
    enrolled: 892,
    rating: 4.8,
    instructor: "Maître Hassan Al-Khattât",
    price: 249,
    languages: ["ar", "fr"],
    certification: true,
    progress: 0,
    status: "available",
    tags: ["calligraphie", "art", "traditionnel"],
    chapters: [
      { id: 1, title: "Style Naskh - Les bases", duration: "1h", completed: false },
      { id: 2, title: "Style Ruqaa - Écriture courante", duration: "1h", completed: false },
      { id: 3, title: "Style Thuluth - Calligraphie décorative", duration: "1h30", completed: false },
      { id: 4, title: "Style Diwani - Art ottoman", duration: "1h15", completed: false }
    ]
  },
  {
    id: 6,
    title: "Sciences du Hadith Numérique",
    description: "Authentification et classification des hadiths avec outils numériques",
    category: "hadith",
    level: "avancé",
    duration: "55h",
    modules: 16,
    enrolled: 1234,
    rating: 4.9,
    instructor: "Dr. Mahmoud Hadith",
    price: 349,
    languages: ["ar", "fr", "en"],
    certification: true,
    progress: 0,
    status: "available",
    tags: ["hadith", "authentification", "recherche"],
    chapters: [
      { id: 1, title: "Méthodologie des Muhaddithin", duration: "1h", completed: false },
      { id: 2, title: "Outils numériques d'authentification", duration: "1h30", completed: false }
    ]
  }
];

// Statistiques globales
const globalStats = {
  totalStudents: 34522,
  totalCourses: 78,
  totalInstructors: 23,
  certificationsIssued: 8945,
  countries: 67,
  languages: 78,
  completionRate: 87
};

// Certifications disponibles
const certifications = [
  {
    id: 1,
    name: "Développeur Halal Certifié",
    requirements: ["Fiqh Informatique", "IA Éthique"],
    badge: "🏆",
    level: "Professionnel"
  },
  {
    id: 2,
    name: "Expert Blockchain Islamique",
    requirements: ["Blockchain Halal", "Finance Islamique"],
    badge: "💎",
    level: "Expert"
  },
  {
    id: 3,
    name: "Maître Calligraphe Numérique",
    requirements: ["Calligraphie Arabe", "Design Islamique"],
    badge: "🎨",
    level: "Maître"
  }
];

export default function InstitutCEDAcademyComplete() {
  const [selectedCategory, setSelectedCategory] = useState("tous");
  const [selectedLevel, setSelectedLevel] = useState("tous");
  const [searchTerm, setSearchTerm] = useState("");
  const [userProgress, setUserProgress] = useState<{[key: number]: number}>({});
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [enrolledCourses, setEnrolledCourses] = useState<number[]>([]);

  // Filtrage des formations
  const filteredFormations = formations.filter(formation => {
    const matchesCategory = selectedCategory === "tous" || formation.category === selectedCategory;
    const matchesLevel = selectedLevel === "tous" || formation.level === selectedLevel;
    const matchesSearch = formation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         formation.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  // Inscription à une formation
  const enrollInCourse = (courseId: number) => {
    setEnrolledCourses(prev => [...prev, courseId]);
    setUserProgress(prev => ({ ...prev, [courseId]: 0 }));
  };

  // Progression dans un cours
  const updateProgress = (courseId: number, progress: number) => {
    setUserProgress(prev => ({ ...prev, [courseId]: progress }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Institut CED Academy</h1>
                <p className="text-emerald-100">معهد النادي الرقمي</p>
                <p className="text-sm text-emerald-200">Plateforme mondiale d'éducation islamique technologique</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold">{globalStats.totalStudents.toLocaleString()}</div>
                  <div className="text-emerald-200">Étudiants</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{globalStats.countries}</div>
                  <div className="text-emerald-200">Pays</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{globalStats.languages}</div>
                  <div className="text-emerald-200">Langues</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="formations" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="formations" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Formations
            </TabsTrigger>
            <TabsTrigger value="progression" className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Ma Progression
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              Certifications
            </TabsTrigger>
            <TabsTrigger value="communaute" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Communauté
            </TabsTrigger>
            <TabsTrigger value="outils" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Outils IA
            </TabsTrigger>
          </TabsList>

          {/* Onglet Formations */}
          <TabsContent value="formations" className="space-y-6">
            {/* Filtres et recherche */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Rechercher une formation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Input
                    placeholder="Rechercher..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="md:col-span-2"
                  />
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tous">Toutes catégories</SelectItem>
                      <SelectItem value="fiqh">Fiqh Informatique</SelectItem>
                      <SelectItem value="ai">Intelligence Artificielle</SelectItem>
                      <SelectItem value="blockchain">Blockchain</SelectItem>
                      <SelectItem value="langue">Langues</SelectItem>
                      <SelectItem value="art">Arts Islamiques</SelectItem>
                      <SelectItem value="hadith">Sciences du Hadith</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Niveau" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tous">Tous niveaux</SelectItem>
                      <SelectItem value="débutant">Débutant</SelectItem>
                      <SelectItem value="intermédiaire">Intermédiaire</SelectItem>
                      <SelectItem value="avancé">Avancé</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Liste des formations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFormations.map((formation) => (
                <Card key={formation.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{formation.title}</CardTitle>
                        <p className="text-sm text-gray-600 mt-2">{formation.description}</p>
                      </div>
                      <Badge 
                        variant={formation.level === 'débutant' ? 'secondary' : 
                                formation.level === 'intermédiaire' ? 'default' : 'destructive'}
                      >
                        {formation.level}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Statistiques du cours */}
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {formation.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {formation.modules} modules
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {formation.enrolled.toLocaleString()}
                      </div>
                    </div>

                    {/* Rating et instructor */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{formation.rating}</span>
                      </div>
                      <div className="text-sm text-gray-600">{formation.instructor}</div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {formation.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Langues disponibles */}
                    <div className="flex items-center gap-2">
                      <Languages className="w-4 h-4 text-gray-500" />
                      <div className="flex gap-1">
                        {formation.languages.map((lang) => (
                          <span key={lang} className="text-xs px-2 py-1 bg-gray-100 rounded">
                            {lang === 'ar' ? '🇸🇦' : lang === 'fr' ? '🇫🇷' : '🇬🇧'}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Prix et actions */}
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-emerald-600">
                        {formation.price === 0 ? 'Gratuit' : `${formation.price} CHF`}
                      </div>
                      {enrolledCourses.includes(formation.id) ? (
                        <div className="flex items-center gap-2">
                          <Progress value={userProgress[formation.id] || 0} className="w-20" />
                          <Button size="sm" variant="outline">
                            Continuer
                          </Button>
                        </div>
                      ) : (
                        <Button 
                          size="sm" 
                          onClick={() => enrollInCourse(formation.id)}
                          className="bg-emerald-600 hover:bg-emerald-700"
                        >
                          {formation.price === 0 ? 'Commencer' : 'S\'inscrire'}
                        </Button>
                      )}
                    </div>

                    {/* Certification */}
                    {formation.certification && (
                      <div className="flex items-center gap-2 text-sm text-emerald-600">
                        <Award className="w-4 h-4" />
                        Certification incluse
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet Ma Progression */}
          <TabsContent value="progression" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mes formations en cours</CardTitle>
              </CardHeader>
              <CardContent>
                {enrolledCourses.length === 0 ? (
                  <div className="text-center py-8">
                    <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Aucune formation en cours</p>
                    <p className="text-sm text-gray-500">Inscrivez-vous à une formation pour commencer</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {enrolledCourses.map(courseId => {
                      const course = formations.find(f => f.id === courseId);
                      if (!course) return null;
                      
                      return (
                        <div key={courseId} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-medium">{course.title}</h3>
                            <Badge>{course.level}</Badge>
                          </div>
                          <Progress value={userProgress[courseId] || 0} className="mb-2" />
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>{userProgress[courseId] || 0}% complété</span>
                            <Button size="sm" variant="outline">
                              Continuer
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Certifications */}
          <TabsContent value="certifications" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <Card key={cert.id}>
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{cert.badge}</div>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <Badge variant="outline">{cert.level}</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Prérequis:</p>
                      {cert.requirements.map((req, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-gray-400" />
                          <span className="text-sm">{req}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4" variant="outline" disabled>
                      <Lock className="w-4 h-4 mr-2" />
                      Verrouillé
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet Communauté */}
          <TabsContent value="communaute" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Statistiques communauté
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">{globalStats.totalStudents.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Étudiants actifs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">{globalStats.countries}</div>
                      <div className="text-sm text-gray-600">Pays</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">{globalStats.certificationsIssued.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Certifications</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">{globalStats.completionRate}%</div>
                      <div className="text-sm text-gray-600">Taux de réussite</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Forums & Discussions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Forum Fiqh Informatique
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Groupe IA Éthique
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Entraide Étudiants
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Onglet Outils IA */}
          <TabsContent value="outils" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Super IARP Pro
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Assistant IA multimodal intégrant 20+ modèles avec filtrage halal
                  </p>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Accéder à IARP Pro
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Languages className="w-5 h-5" />
                    Traducteur Multilingue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Traduction arabe vers 78+ langues avec phrases islamiques
                  </p>
                  <Button className="w-full" variant="outline">
                    Ouvrir Traducteur
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Professeur IA Arabe
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Apprentissage interactif de l'arabe avec calligraphie
                  </p>
                  <Button className="w-full" variant="outline">
                    Commencer Leçon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer de protection */}
      <div className="bg-gray-100 dark:bg-gray-800 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Badge className="bg-green-100 text-green-800">100% Halal</Badge>
            <Badge className="bg-blue-100 text-blue-800">Certifié Fiqh</Badge>
            <Badge className="bg-purple-100 text-purple-800">MANDUB</Badge>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            © 2025 Institut CED Academy - معهد النادي الرقمي
          </p>
          <p className="text-xs text-gray-500 mb-2">
            Yakoubi Yamina - Protection Propriété Intellectuelle Complète
          </p>
          <p className="text-xs text-gray-500">
            Conformité 100% Sharia - Sources authentiques certifiées par 150+ scholars
          </p>
        </div>
      </div>
    </div>
  );
}