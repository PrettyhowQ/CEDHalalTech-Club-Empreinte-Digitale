import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { GraduationCap, FileText, Calculator, Users, Award, Clock, Target, BookOpen } from 'lucide-react';

interface BTSModule {
  id: string;
  name: string;
  code: string;
  credits: number;
  coefficient: number;
  duration: string;
  description: string;
  competencies: string[];
  evaluations: Evaluation[];
  prerequisite?: string;
  status: 'Non commencé' | 'En cours' | 'Terminé' | 'Validé';
}

interface Evaluation {
  id: string;
  type: 'Examen écrit' | 'Projet pratique' | 'Soutenance orale' | 'Contrôle continu' | 'Stage';
  name: string;
  date: string;
  duration: number;
  coefficient: number;
  note?: number;
  maxNote: number;
  status: 'À venir' | 'En cours' | 'Terminé' | 'Noté';
}

interface StudentProfile {
  id: string;
  name: string;
  specialization: 'Diététique Clinique' | 'Nutrition Sportive' | 'Santé Publique' | 'Recherche Nutritionnelle';
  year: 1 | 2;
  startDate: string;
  modules: BTSModule[];
  averageGrade: number;
  totalCredits: number;
  completedCredits: number;
  internships: Internship[];
  objectives: string[];
}

interface Internship {
  id: string;
  name: string;
  location: string;
  supervisor: string;
  duration: number;
  startDate: string;
  endDate: string;
  specialization: string;
  objectives: string[];
  skills: string[];
  evaluation?: number;
  status: 'Planifié' | 'En cours' | 'Terminé' | 'Validé';
}

const btsModules: BTSModule[] = [
  {
    id: 'biochimie-nutrition',
    name: 'Biochimie et Physiologie de la Nutrition',
    code: 'BPN101',
    credits: 8,
    coefficient: 3,
    duration: '120h',
    description: 'Étude des processus biochimiques et physiologiques de la nutrition humaine',
    competencies: [
      'Maîtriser les métabolismes énergétiques',
      'Comprendre la digestion et absorption',
      'Analyser les besoins nutritionnels',
      'Évaluer les carences et excès'
    ],
    evaluations: [
      {
        id: 'exam-1',
        type: 'Examen écrit',
        name: 'Métabolismes énergétiques',
        date: '2025-10-15',
        duration: 180,
        coefficient: 2,
        note: 16.5,
        maxNote: 20,
        status: 'Noté'
      },
      {
        id: 'projet-1',
        type: 'Projet pratique',
        name: 'Analyse nutritionnelle',
        date: '2025-11-20',
        duration: 240,
        coefficient: 1,
        maxNote: 20,
        status: 'À venir'
      }
    ],
    status: 'En cours'
  },
  {
    id: 'dietetique-therapeutique',
    name: 'Diététique Thérapeutique',
    code: 'DT201',
    credits: 10,
    coefficient: 4,
    duration: '150h',
    description: 'Application de la nutrition dans le traitement et la prévention des pathologies',
    competencies: [
      'Établir des régimes thérapeutiques',
      'Adapter l\'alimentation aux pathologies',
      'Conseiller les patients',
      'Collaborer avec équipes médicales'
    ],
    evaluations: [
      {
        id: 'exam-2',
        type: 'Examen écrit',
        name: 'Pathologies nutritionnelles',
        date: '2025-12-10',
        duration: 240,
        coefficient: 2,
        maxNote: 20,
        status: 'À venir'
      },
      {
        id: 'soutenance-1',
        type: 'Soutenance orale',
        name: 'Cas clinique',
        date: '2025-12-15',
        duration: 30,
        coefficient: 2,
        maxNote: 20,
        status: 'À venir'
      }
    ],
    prerequisite: 'biochimie-nutrition',
    status: 'Non commencé'
  },
  {
    id: 'techniques-culinaires',
    name: 'Techniques Culinaires et Technologie Alimentaire',
    code: 'TC102',
    credits: 6,
    coefficient: 2,
    duration: '100h',
    description: 'Maîtrise des techniques culinaires et transformation des aliments',
    competencies: [
      'Maîtriser les techniques de cuisson',
      'Comprendre les transformations alimentaires',
      'Adapter textures et goûts',
      'Gérer la sécurité alimentaire'
    ],
    evaluations: [
      {
        id: 'pratique-1',
        type: 'Projet pratique',
        name: 'Atelier culinaire adapté',
        date: '2025-09-25',
        duration: 480,
        coefficient: 3,
        note: 18,
        maxNote: 20,
        status: 'Noté'
      }
    ],
    status: 'Validé'
  },
  {
    id: 'economie-gestion',
    name: 'Économie et Gestion',
    code: 'EG103',
    credits: 4,
    coefficient: 1,
    duration: '60h',
    description: 'Bases économiques et gestion des structures de restauration collective',
    competencies: [
      'Gérer les coûts alimentaires',
      'Organiser la production',
      'Manager une équipe',
      'Respecter la réglementation'
    ],
    evaluations: [
      {
        id: 'controle-1',
        type: 'Contrôle continu',
        name: 'Gestion de projet',
        date: '2025-11-05',
        duration: 120,
        coefficient: 1,
        maxNote: 20,
        status: 'À venir'
      }
    ],
    status: 'En cours'
  },
  {
    id: 'stage-professionnel',
    name: 'Stage Professionnel',
    code: 'SP301',
    credits: 12,
    coefficient: 4,
    duration: '20 semaines',
    description: 'Immersion professionnelle en milieu hospitalier, collectivité ou libéral',
    competencies: [
      'Appliquer les connaissances théoriques',
      'Développer les compétences pratiques',
      'S\'intégrer en équipe pluridisciplinaire',
      'Conduire des consultations'
    ],
    evaluations: [
      {
        id: 'stage-eval',
        type: 'Stage',
        name: 'Évaluation stage',
        date: '2025-06-30',
        duration: 0,
        coefficient: 4,
        maxNote: 20,
        status: 'À venir'
      }
    ],
    status: 'Non commencé'
  }
];

const internships: Internship[] = [
  {
    id: 'stage-hopital',
    name: 'Service Nutrition - CHU Montpellier',
    location: 'Montpellier, France',
    supervisor: 'Dr. Sophie Martin',
    duration: 8,
    startDate: '2025-03-01',
    endDate: '2025-04-26',
    specialization: 'Nutrition Clinique',
    objectives: [
      'Réaliser des bilans nutritionnels',
      'Participer aux consultations',
      'Élaborer des plans alimentaires',
      'Suivre l\'évolution des patients'
    ],
    skills: [
      'Consultation nutritionnelle',
      'Évaluation anthropométrique',
      'Calculs nutritionnels',
      'Travail en équipe médicale'
    ],
    status: 'Planifié'
  },
  {
    id: 'stage-collectivite',
    name: 'Restaurant Scolaire - Ville de Lyon',
    location: 'Lyon, France',
    supervisor: 'Marie Dubois',
    duration: 6,
    startDate: '2025-05-01',
    endDate: '2025-06-12',
    specialization: 'Restauration Collective',
    objectives: [
      'Gérer les menus collectifs',
      'Contrôler la qualité nutritionnelle',
      'Former le personnel',
      'Optimiser les coûts'
    ],
    skills: [
      'Gestion de production',
      'Contrôle qualité',
      'Formation équipes',
      'Respect réglementation'
    ],
    status: 'Planifié'
  },
  {
    id: 'stage-liberal',
    name: 'Cabinet Diététique - Souheila Benali',
    location: 'Paris, France',
    supervisor: 'Souheila Benali',
    duration: 6,
    startDate: '2025-06-15',
    endDate: '2025-07-26',
    specialization: 'Pratique Libérale',
    objectives: [
      'Conduire des consultations individuelles',
      'Développer des programmes personnalisés',
      'Gérer la relation client',
      'Utiliser les outils numériques'
    ],
    skills: [
      'Consultation individuelle',
      'Programmes personnalisés',
      'Communication thérapeutique',
      'Outils digitaux'
    ],
    status: 'Planifié'
  }
];

const studentProfile: StudentProfile = {
  id: 'student-amina',
  name: 'Amina El Karouri',
  specialization: 'Diététique Clinique',
  year: 2,
  startDate: '2024-09-01',
  modules: btsModules,
  averageGrade: 15.8,
  totalCredits: 120,
  completedCredits: 28,
  internships: internships,
  objectives: [
    'Obtenir le BTS Diététique avec mention',
    'Se spécialiser en nutrition clinique',
    'Intégrer un service hospitalier',
    'Poursuivre en licence professionnelle'
  ]
};

export function SimulateurBTSSection() {
  const [selectedModule, setSelectedModule] = useState<BTSModule | null>(null);
  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);

  const progressPercentage = (studentProfile.completedCredits / studentProfile.totalCredits) * 100;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Validé': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'En cours': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'À venir': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Non commencé': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getEvaluationStatusColor = (status: string) => {
    switch (status) {
      case 'Noté': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Terminé': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'En cours': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'À venir': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="simulateur-bts" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900 dark:to-teal-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4 rounded-full">
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Simulateur BTS Diététique
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Plateforme de simulation complète pour la formation en diététique et nutrition clinique
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Users className="h-5 w-5 text-emerald-500" />
              <span className="font-semibold">1,200+ étudiants</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <BookOpen className="h-5 w-5 text-teal-500" />
              <span className="font-semibold">Partenariat universités</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Award className="h-5 w-5 text-cyan-500" />
              <span className="font-semibold">Certification officielle</span>
            </div>
          </div>
        </motion.div>

        <Tabs defaultValue="profil" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="profil" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Mon Profil
            </TabsTrigger>
            <TabsTrigger value="modules" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Modules
            </TabsTrigger>
            <TabsTrigger value="evaluations" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Évaluations
            </TabsTrigger>
            <TabsTrigger value="stages" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Stages
            </TabsTrigger>
            <TabsTrigger value="resultats" className="flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              Résultats
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profil" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">{studentProfile.name}</CardTitle>
                    <CardDescription className="text-lg">
                      BTS Diététique - Spécialisation {studentProfile.specialization} - Année {studentProfile.year}
                    </CardDescription>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-800 text-lg px-3 py-1">
                    Moyenne: {studentProfile.averageGrade}/20
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Progression Générale</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Crédits obtenus</span>
                        <span>{studentProfile.completedCredits}/{studentProfile.totalCredits} ECTS</span>
                      </div>
                      <Progress value={progressPercentage} className="h-3" />
                      <div className="text-sm text-gray-600">
                        {progressPercentage.toFixed(1)}% du cursus validé
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Informations Cursus</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Date de début:</span>
                        <span>{studentProfile.startDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Spécialisation:</span>
                        <span>{studentProfile.specialization}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Année actuelle:</span>
                        <span>{studentProfile.year}/2</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Stages prévus:</span>
                        <span>{studentProfile.internships.length}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Objectifs Personnels</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {studentProfile.objectives.map((objective, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-3 bg-emerald-50 dark:bg-emerald-900 rounded-lg">
                        <Target className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="modules" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {studentProfile.modules.map((module, index) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex gap-2">
                          <Badge className={getStatusColor(module.status)}>
                            {module.status}
                          </Badge>
                          <Badge variant="outline">{module.code}</Badge>
                        </div>
                        <div className="text-right text-sm">
                          <div className="font-bold">{module.credits} ECTS</div>
                          <div className="text-gray-500">Coef. {module.coefficient}</div>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{module.name}</CardTitle>
                      <CardDescription>{module.description}</CardDescription>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span>{module.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText className="h-4 w-4 text-gray-500" />
                          <span>{module.evaluations.length} évaluations</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Compétences visées :</h4>
                        <ul className="space-y-1">
                          {module.competencies.map((competency, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                              <span>{competency}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {module.prerequisite && (
                        <div className="text-sm">
                          <span className="font-semibold">Prérequis :</span> {
                            studentProfile.modules.find(m => m.id === module.prerequisite)?.name
                          }
                        </div>
                      )}

                      <Button 
                        className="w-full" 
                        onClick={() => setSelectedModule(module)}
                        disabled={module.status === 'Non commencé' && module.prerequisite ? 
                          !(studentProfile.modules.find(m => m.id === module.prerequisite)?.status === 'Validé') : false}
                      >
                        Voir détails
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="evaluations" className="space-y-6">
            <div className="space-y-4">
              {studentProfile.modules.map((module) => (
                <Card key={module.id}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      {module.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {module.evaluations.map((evaluation) => (
                        <Card key={evaluation.id} className="border-l-4 border-l-emerald-500">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="font-semibold text-sm">{evaluation.name}</h5>
                              <Badge className={getEvaluationStatusColor(evaluation.status)}>
                                {evaluation.status}
                              </Badge>
                            </div>
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between">
                                <span>Type:</span>
                                <span>{evaluation.type}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Date:</span>
                                <span>{evaluation.date}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Durée:</span>
                                <span>{evaluation.duration > 0 ? `${evaluation.duration}min` : 'Variable'}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Coefficient:</span>
                                <span>{evaluation.coefficient}</span>
                              </div>
                              {evaluation.note && (
                                <div className="flex justify-between font-semibold text-emerald-600">
                                  <span>Note:</span>
                                  <span>{evaluation.note}/{evaluation.maxNote}</span>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stages" className="space-y-6">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {studentProfile.internships.map((internship, index) => (
                <motion.div
                  key={internship.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className={getStatusColor(internship.status)}>
                          {internship.status}
                        </Badge>
                        <div className="text-right text-sm">
                          <div className="font-bold">{internship.duration} semaines</div>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{internship.name}</CardTitle>
                      <CardDescription>{internship.specialization}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="font-semibold">Lieu:</span>
                          <span>{internship.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Superviseur:</span>
                          <span>{internship.supervisor}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Période:</span>
                          <span>{internship.startDate} → {internship.endDate}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Objectifs :</h4>
                        <ul className="space-y-1">
                          {internship.objectives.slice(0, 3).map((objective, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Target className="h-3 w-3 text-emerald-500 mt-1 flex-shrink-0" />
                              <span>{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Compétences :</h4>
                        <div className="flex flex-wrap gap-1">
                          {internship.skills.slice(0, 3).map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {internship.evaluation && (
                        <div className="pt-2 border-t">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-sm">Évaluation:</span>
                            <span className="font-bold text-emerald-600">{internship.evaluation}/20</span>
                          </div>
                        </div>
                      )}

                      <Button 
                        className="w-full" 
                        onClick={() => setSelectedInternship(internship)}
                      >
                        Voir détails
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resultats" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">
                    {studentProfile.averageGrade}/20
                  </div>
                  <div className="text-sm text-gray-600">Moyenne générale</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-teal-600 mb-2">
                    {studentProfile.completedCredits}
                  </div>
                  <div className="text-sm text-gray-600">Crédits validés</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">
                    {studentProfile.modules.filter(m => m.status === 'Validé').length}
                  </div>
                  <div className="text-sm text-gray-600">Modules validés</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {progressPercentage.toFixed(0)}%
                  </div>
                  <div className="text-sm text-gray-600">Progression</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Détail des Notes par Module</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentProfile.modules.map((module) => (
                    <div key={module.id} className="border-b pb-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">{module.name}</h4>
                        <Badge className={getStatusColor(module.status)}>
                          {module.status}
                        </Badge>
                      </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {module.evaluations.map((evaluation) => (
                          <div key={evaluation.id} className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">{evaluation.name}</span>
                              {evaluation.note ? (
                                <span className="font-bold text-emerald-600">
                                  {evaluation.note}/{evaluation.maxNote}
                                </span>
                              ) : (
                                <span className="text-gray-500 text-sm">En attente</span>
                              )}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              Coef. {evaluation.coefficient} • {evaluation.type}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-8">
            <h3 className="text-2xl font-bold mb-4">
              Réussissez votre BTS Diététique avec notre simulateur
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Suivi personnalisé, simulations réalistes et accompagnement professionnel
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary">
                Commencer la simulation
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-600">
                Contacter un conseiller
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}