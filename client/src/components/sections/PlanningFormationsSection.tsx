import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, Users, MapPin, Video, BookOpen, Award, Target } from 'lucide-react';

interface Formation {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  startDate: string;
  endDate: string;
  schedule: string;
  format: 'En ligne' | 'Présentiel' | 'Hybride';
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  category: 'IA Éthique' | 'Développement' | 'Marketing Digital' | 'Entrepreneuriat' | 'Santé & Nutrition';
  price: number;
  currency: string;
  maxStudents: number;
  currentStudents: number;
  location?: string;
  objectives: string[];
  prerequisites: string[];
  certification: boolean;
  modules: Module[];
}

interface Module {
  id: string;
  title: string;
  duration: number;
  description: string;
  date: string;
  time: string;
  type: 'Cours' | 'Atelier' | 'Projet' | 'Évaluation';
}

interface StudentSchedule {
  studentId: string;
  studentName: string;
  formations: Formation[];
  personalSchedule: PersonalEvent[];
}

interface PersonalEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: number;
  type: 'Personnel' | 'Professionnel' | 'Révision' | 'Projet';
}

const formations: Formation[] = [
  {
    id: 'ia-ethique-fondamentaux',
    title: 'Fondamentaux IA Éthique & Responsable',
    description: 'Formation complète sur les principes éthiques de l\'intelligence artificielle',
    instructor: 'Dr. Yakoubi Yamina',
    duration: '8 semaines',
    startDate: '2025-07-01',
    endDate: '2025-08-26',
    schedule: 'Mardi & Jeudi 18h-20h',
    format: 'Hybride',
    level: 'Débutant',
    category: 'IA Éthique',
    price: 497,
    currency: 'EUR',
    maxStudents: 25,
    currentStudents: 18,
    location: 'Campus Paris + En ligne',
    objectives: [
      'Comprendre les enjeux éthiques de l\'IA',
      'Maîtriser les frameworks éthiques',
      'Développer une IA responsable',
      'Évaluer l\'impact sociétal'
    ],
    prerequisites: [
      'Notions de base en informatique',
      'Intérêt pour l\'éthique technologique'
    ],
    certification: true,
    modules: [
      {
        id: 'module-1',
        title: 'Introduction à l\'IA Éthique',
        duration: 120,
        description: 'Concepts fondamentaux et enjeux actuels',
        date: '2025-07-01',
        time: '18:00',
        type: 'Cours'
      },
      {
        id: 'module-2',
        title: 'Frameworks Éthiques',
        duration: 120,
        description: 'Principales approches éthiques appliquées à l\'IA',
        date: '2025-07-03',
        time: '18:00',
        type: 'Cours'
      },
      {
        id: 'module-3',
        title: 'Atelier Pratique',
        duration: 180,
        description: 'Analyse de cas concrets d\'IA éthique',
        date: '2025-07-08',
        time: '18:00',
        type: 'Atelier'
      }
    ]
  },
  {
    id: 'nutrition-entrepreneuriat',
    title: 'Entrepreneuriat en Nutrition & Santé',
    description: 'Créer et développer son activité dans le secteur santé-nutrition',
    instructor: 'Souheila Yakoubi-Ozel',
    duration: '6 semaines',
    startDate: '2025-07-15',
    endDate: '2025-08-26',
    schedule: 'Lundi & Mercredi 19h-21h',
    format: 'En ligne',
    level: 'Intermédiaire',
    category: 'Santé & Nutrition',
    price: 397,
    currency: 'EUR',
    maxStudents: 20,
    currentStudents: 12,
    objectives: [
      'Développer son business model nutrition',
      'Maîtriser le marketing santé',
      'Créer des programmes personnalisés',
      'Construire sa clientèle'
    ],
    prerequisites: [
      'Formation en nutrition/diététique',
      'Projet entrepreneurial défini'
    ],
    certification: true,
    modules: [
      {
        id: 'module-1',
        title: 'Business Model Canvas Nutrition',
        duration: 120,
        description: 'Définir son modèle économique',
        date: '2025-07-15',
        time: '19:00',
        type: 'Atelier'
      },
      {
        id: 'module-2',
        title: 'Marketing Digital Santé',
        duration: 120,
        description: 'Stratégies marketing conformes santé',
        date: '2025-07-17',
        time: '19:00',
        type: 'Cours'
      }
    ]
  },
  {
    id: 'dev-ia-applications',
    title: 'Développement d\'Applications IA',
    description: 'Créer des applications intelligentes avec Python et TensorFlow',
    instructor: 'Ahmed Ben Salah',
    duration: '12 semaines',
    startDate: '2025-08-01',
    endDate: '2025-10-24',
    schedule: 'Samedi 9h-17h (intensif)',
    format: 'Présentiel',
    level: 'Avancé',
    category: 'Développement',
    price: 1297,
    currency: 'EUR',
    maxStudents: 15,
    currentStudents: 8,
    location: 'Lab IA - Campus Lyon',
    objectives: [
      'Maîtriser Python pour l\'IA',
      'Développer des modèles ML/DL',
      'Créer des APIs intelligentes',
      'Déployer en production'
    ],
    prerequisites: [
      'Programmation Python intermédiaire',
      'Mathématiques niveau bac+2',
      'Concepts ML de base'
    ],
    certification: true,
    modules: [
      {
        id: 'module-1',
        title: 'Python pour l\'IA',
        duration: 480,
        description: 'NumPy, Pandas, Scikit-learn',
        date: '2025-08-01',
        time: '09:00',
        type: 'Cours'
      }
    ]
  },
  {
    id: 'marketing-digital-ia',
    title: 'Marketing Digital avec IA',
    description: 'Révolutionner ses campagnes marketing grâce à l\'intelligence artificielle',
    instructor: 'Sara El Amrani',
    duration: '4 semaines',
    startDate: '2025-07-08',
    endDate: '2025-08-02',
    schedule: 'Mardi & Vendredi 20h-22h',
    format: 'En ligne',
    level: 'Intermédiaire',
    category: 'Marketing Digital',
    price: 297,
    currency: 'EUR',
    maxStudents: 30,
    currentStudents: 24,
    objectives: [
      'Automatiser les campagnes marketing',
      'Personnaliser à grande échelle',
      'Analyser les données clients',
      'Optimiser le ROI'
    ],
    prerequisites: [
      'Bases du marketing digital',
      'Utilisation des réseaux sociaux pro'
    ],
    certification: true,
    modules: [
      {
        id: 'module-1',
        title: 'IA pour Personnalisation',
        duration: 120,
        description: 'Techniques de personnalisation intelligente',
        date: '2025-07-08',
        time: '20:00',
        type: 'Cours'
      }
    ]
  }
];

const studentSchedules: StudentSchedule[] = [
  {
    studentId: 'student-1',
    studentName: 'Amina Chakir',
    formations: [formations[0], formations[3]],
    personalSchedule: [
      {
        id: 'personal-1',
        title: 'Révision IA Éthique',
        date: '2025-07-02',
        time: '20:30',
        duration: 60,
        type: 'Révision'
      },
      {
        id: 'personal-2',
        title: 'Projet personnel',
        date: '2025-07-05',
        time: '14:00',
        duration: 180,
        type: 'Projet'
      }
    ]
  },
  {
    studentId: 'student-2',
    studentName: 'Karim Benzema',
    formations: [formations[2]],
    personalSchedule: [
      {
        id: 'personal-3',
        title: 'Coding session',
        date: '2025-08-02',
        time: '19:00',
        duration: 120,
        type: 'Projet'
      }
    ]
  }
];

export function PlanningFormationsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');
  const [selectedStudent, setSelectedStudent] = useState<string>(studentSchedules[0].studentId);

  const categories = ['all', 'IA Éthique', 'Développement', 'Marketing Digital', 'Entrepreneuriat', 'Santé & Nutrition'];
  const formats = ['all', 'En ligne', 'Présentiel', 'Hybride'];
  
  const filteredFormations = formations.filter(formation => {
    const categoryMatch = selectedCategory === 'all' || formation.category === selectedCategory;
    const formatMatch = selectedFormat === 'all' || formation.format === selectedFormat;
    return categoryMatch && formatMatch;
  });

  const currentStudent = studentSchedules.find(s => s.studentId === selectedStudent);

  const getFormatColor = (format: string) => {
    switch (format) {
      case 'En ligne': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Présentiel': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Hybride': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Débutant': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Avancé': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Expert': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="planning-formations" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-full">
              <Calendar className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Planning Formations Étudiants
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Organisez votre apprentissage avec nos formations spécialisées et outils de planification intelligents
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <BookOpen className="h-5 w-5 text-blue-500" />
              <span className="font-semibold">{formations.length} formations actives</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Users className="h-5 w-5 text-indigo-500" />
              <span className="font-semibold">340+ étudiants inscrits</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Award className="h-5 w-5 text-purple-500" />
              <span className="font-semibold">97% réussite certifications</span>
            </div>
          </div>
        </motion.div>

        <Tabs defaultValue="formations" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="formations" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Formations
            </TabsTrigger>
            <TabsTrigger value="planning" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Mon Planning
            </TabsTrigger>
            <TabsTrigger value="calendrier" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Calendrier
            </TabsTrigger>
            <TabsTrigger value="outils" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Outils Planning
            </TabsTrigger>
          </TabsList>

          <TabsContent value="formations" className="space-y-8">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <div className="mb-4">
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      onClick={() => setSelectedCategory(category)}
                      size="sm"
                    >
                      {category === 'all' ? 'Toutes catégories' : category}
                    </Button>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {formats.map((format) => (
                    <Button
                      key={format}
                      variant={selectedFormat === format ? 'secondary' : 'outline'}
                      onClick={() => setSelectedFormat(format)}
                      size="sm"
                    >
                      {format === 'all' ? 'Tous formats' : format}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {filteredFormations.map((formation, index) => (
                <motion.div
                  key={formation.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex gap-2">
                          <Badge className={getFormatColor(formation.format)}>
                            {formation.format}
                          </Badge>
                          <Badge className={getLevelColor(formation.level)}>
                            {formation.level}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">
                            {formation.price}€
                          </div>
                          <div className="text-sm text-gray-500">{formation.duration}</div>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{formation.title}</CardTitle>
                      <CardDescription className="text-base">
                        {formation.description}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span>{formation.currentStudents}/{formation.maxStudents}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span>{formation.schedule}</span>
                        </div>
                        {formation.certification && (
                          <Badge variant="outline" className="text-xs">
                            <Award className="h-3 w-3 mr-1" />
                            Certification
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Instructeur :</h4>
                          <p className="text-sm text-blue-600">{formation.instructor}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Dates :</h4>
                          <p className="text-sm">{formation.startDate} → {formation.endDate}</p>
                        </div>
                      </div>

                      {formation.location && (
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span>{formation.location}</span>
                        </div>
                      )}

                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Objectifs :</h4>
                        <ul className="space-y-1">
                          {formation.objectives.slice(0, 3).map((objective, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Target className="h-3 w-3 text-blue-500 mt-1 flex-shrink-0" />
                              <span>{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t flex justify-between items-center">
                        <div className="text-sm">
                          <span className="font-semibold">Catégorie :</span> {formation.category}
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          S'inscrire
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="planning" className="space-y-6">
            <div className="flex justify-center mb-6">
              <select 
                value={selectedStudent} 
                onChange={(e) => setSelectedStudent(e.target.value)}
                className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-800"
              >
                {studentSchedules.map((student) => (
                  <option key={student.studentId} value={student.studentId}>
                    {student.studentName}
                  </option>
                ))}
              </select>
            </div>

            {currentStudent && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Planning de {currentStudent.studentName}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Formations inscrites :</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {currentStudent.formations.map((formation) => (
                          <Card key={formation.id} className="border-l-4 border-l-blue-500">
                            <CardContent className="p-4">
                              <h5 className="font-semibold mb-2">{formation.title}</h5>
                              <div className="space-y-1 text-sm">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-3 w-3" />
                                  <span>{formation.schedule}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock className="h-3 w-3" />
                                  <span>{formation.startDate} → {formation.endDate}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Video className="h-3 w-3" />
                                  <span>{formation.format}</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Événements personnels :</h4>
                      <div className="space-y-2">
                        {currentStudent.personalSchedule.map((event) => (
                          <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <div>
                              <div className="font-medium">{event.title}</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                {event.date} à {event.time} ({event.duration}min)
                              </div>
                            </div>
                            <Badge variant="outline">{event.type}</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          <TabsContent value="calendrier" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Vue Calendrier - Juillet 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day) => (
                    <div key={day} className="text-center font-semibold py-2">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                    <div key={day} className="min-h-[80px] p-1 border rounded hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div className="font-semibold text-sm mb-1">{day}</div>
                      {day === 1 && (
                        <div className="text-xs bg-blue-100 text-blue-800 p-1 rounded mb-1">
                          IA Éthique 18h
                        </div>
                      )}
                      {day === 3 && (
                        <div className="text-xs bg-blue-100 text-blue-800 p-1 rounded mb-1">
                          IA Éthique 18h
                        </div>
                      )}
                      {day === 8 && (
                        <div className="text-xs bg-green-100 text-green-800 p-1 rounded mb-1">
                          Marketing IA 20h
                        </div>
                      )}
                      {day === 15 && (
                        <div className="text-xs bg-purple-100 text-purple-800 p-1 rounded mb-1">
                          Nutrition 19h
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="outils" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    Générateur Planning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Créez automatiquement votre planning optimal basé sur vos préférences et contraintes.
                  </p>
                  <Button className="w-full">Générer mon planning</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-green-500" />
                    Optimisation Temps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Analysez et optimisez votre emploi du temps pour maximiser votre apprentissage.
                  </p>
                  <Button className="w-full">Optimiser</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-purple-500" />
                    Objectifs d'Apprentissage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Définissez et suivez vos objectifs d'apprentissage avec des métriques personnalisées.
                  </p>
                  <Button className="w-full">Définir objectifs</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-orange-500" />
                    Planning Groupe
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Coordonnez les plannings de groupe pour les projets collaboratifs.
                  </p>
                  <Button className="w-full">Créer groupe</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-red-500" />
                    Révisions Intelligentes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Planifiez vos révisions avec l'algorithme de répétition espacée.
                  </p>
                  <Button className="w-full">Programmer révisions</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    Suivi Progression
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Visualisez votre progression et recevez des recommandations personnalisées.
                  </p>
                  <Button className="w-full">Voir progression</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8">
            <h3 className="text-2xl font-bold mb-4">
              Optimisez votre apprentissage avec nos outils de planning
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Planification intelligente, suivi personnalisé et outils collaboratifs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary">
                Commencer maintenant
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                Découvrir les outils
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}