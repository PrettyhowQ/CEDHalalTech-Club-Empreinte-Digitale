import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Heart, Utensils, Activity, Calendar, Users, Star, Clock, Award, Smartphone, Zap, MapPin, Bell, Target, TrendingUp, CheckCircle } from 'lucide-react';

interface NutritionProgram {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  currency: string;
  rating: number;
  students: number;
  modules: string[];
  objectives: string[];
  nutritionist: string;
  category: 'Perte de poids' | 'Prise de masse' | 'Équilibre' | 'Thérapeutique' | 'Sport';
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
}

interface HealthConsultation {
  id: string;
  type: 'Consultation individuelle' | 'Suivi personnalisé' | 'Bilan nutritionnel' | 'Coaching groupe';
  duration: number;
  price: number;
  description: string;
  benefits: string[];
  included: string[];
}

interface Testimonial {
  id: string;
  name: string;
  age: number;
  program: string;
  result: string;
  rating: number;
  comment: string;
  beforeAfter: {
    weight: { before: number; after: number };
    duration: string;
  };
}

const nutritionPrograms: NutritionProgram[] = [
  {
    id: 'nutrition-football',
    name: 'Nutrition Footballeur Performance',
    description: 'Programme spécialisé pour optimiser les performances sur le terrain',
    duration: '8 semaines',
    price: 327,
    currency: 'EUR',
    rating: 4.9,
    students: 184,
    modules: [
      'Nutrition pré-match optimale',
      'Récupération post-entraînement',
      'Hydratation stratégique',
      'Gestion des voyages et déplacements',
      'Supplémentation légale et efficace'
    ],
    objectives: [
      'Augmenter endurance et vitesse',
      'Accélérer la récupération',
      'Maintenir le poids de forme',
      'Prévenir les blessures'
    ],
    nutritionist: 'Souheila Yakoubi-Ozel',
    category: 'Sport',
    level: 'Expert'
  },
  {
    id: 'nutrition-tennis',
    name: 'Nutrition Tennis Elite',
    description: 'Stratégies nutritionnelles pour les tournois et compétitions',
    duration: '6 semaines',
    price: 297,
    currency: 'EUR',
    rating: 4.8,
    students: 156,
    modules: [
      'Endurance sur terre battue',
      'Récupération entre sets',
      'Nutrition en tournoi',
      'Gestion de la chaleur',
      'Mental et alimentation'
    ],
    objectives: [
      'Maintenir concentration',
      'Optimiser la puissance',
      'Gérer les longs matchs',
      'Récupération rapide'
    ],
    nutritionist: 'Souheila Yakoubi-Ozel',
    category: 'Sport',
    level: 'Expert'
  },
  {
    id: 'nutrition-musculation',
    name: 'Nutrition Musculation & Force',
    description: 'Développer masse musculaire et force avec une nutrition adaptée',
    duration: '10 semaines',
    price: 247,
    currency: 'EUR',
    rating: 4.7,
    students: 892,
    modules: [
      'Protéines et synthèse musculaire',
      'Timing nutritionnel optimal',
      'Supplémentation naturelle',
      'Nutrition en sèche/prise de masse',
      'Récupération et sommeil'
    ],
    objectives: [
      'Développer la masse musculaire',
      'Augmenter la force',
      'Optimiser la récupération',
      'Réduire la graisse corporelle'
    ],
    nutritionist: 'Souheila Yakoubi-Ozel',
    category: 'Sport',
    level: 'Intermédiaire'
  },
  {
    id: 'perte-poids-naturelle',
    name: 'Perte de Poids Naturelle',
    description: 'Programme holistique pour une perte de poids durable et saine',
    duration: '12 semaines',
    price: 297,
    currency: 'EUR',
    rating: 4.9,
    students: 2456,
    modules: [
      'Équilibre nutritionnel personnalisé',
      'Recettes minceur gourmandes',
      'Gestion des émotions alimentaires',
      'Activité physique adaptée',
      'Suivi hebdomadaire avec Souheila'
    ],
    objectives: [
      'Perdre 5-15kg sainement',
      'Rééquilibrer le métabolisme',
      'Adopter de nouvelles habitudes',
      'Maintenir les résultats long terme'
    ],
    nutritionist: 'Souheila Yakoubi-Ozel',
    category: 'Perte de poids',
    level: 'Débutant'
  },
  {
    id: 'alimentation-anti-inflammatoire',
    name: 'Alimentation Anti-Inflammatoire',
    description: 'Réduire l\'inflammation chronique par l\'alimentation thérapeutique',
    duration: '8 semaines',
    price: 197,
    currency: 'EUR',
    rating: 4.8,
    students: 1234,
    modules: [
      'Aliments anti-inflammatoires',
      'Protocoles thérapeutiques',
      'Supplémentation naturelle',
      'Gestion du stress nutritionnel',
      'Suivi médical intégratif'
    ],
    objectives: [
      'Réduire l\'inflammation',
      'Améliorer l\'énergie',
      'Soulager les douleurs',
      'Prévenir les maladies chroniques'
    ],
    nutritionist: 'Souheila Yakoubi-Ozel',
    category: 'Thérapeutique',
    level: 'Intermédiaire'
  },
  {
    id: 'nutrition-sportive',
    name: 'Nutrition Sportive Performance',
    description: 'Optimiser les performances sportives par l\'alimentation',
    duration: '6 semaines',
    price: 247,
    currency: 'EUR',
    rating: 4.9,
    students: 892,
    modules: [
      'Nutrition pré/post entraînement',
      'Hydratation optimale',
      'Supplémentation sportive',
      'Récupération nutritionnelle',
      'Plans alimentaires personnalisés'
    ],
    objectives: [
      'Augmenter les performances',
      'Améliorer la récupération',
      'Optimiser la composition corporelle',
      'Prévenir les blessures'
    ],
    nutritionist: 'Souheila Yakoubi-Ozel',
    category: 'Sport',
    level: 'Avancé'
  },
  {
    id: 'equilibre-hormonal',
    name: 'Équilibre Hormonal Féminin',
    description: 'Rééquilibrer les hormones naturellement par l\'alimentation',
    duration: '10 semaines',
    price: 347,
    currency: 'EUR',
    rating: 4.9,
    students: 1567,
    modules: [
      'Hormones et nutrition',
      'Cycle menstruel et alimentation',
      'Ménopause et phytonutrition',
      'Gestion du SOPK naturellement',
      'Fertilité et nutrition'
    ],
    objectives: [
      'Réguler les cycles',
      'Réduire les symptômes PMS',
      'Améliorer la fertilité',
      'Soutenir la ménopause'
    ],
    nutritionist: 'Souheila Yakoubi-Ozel',
    category: 'Thérapeutique',
    level: 'Intermédiaire'
  }
];

const consultations: HealthConsultation[] = [
  {
    id: 'consultation-individuelle',
    type: 'Consultation individuelle',
    duration: 60,
    price: 87,
    description: 'Bilan nutritionnel complet et plan personnalisé avec Souheila',
    benefits: [
      'Analyse détaillée de vos habitudes',
      'Plan nutritionnel sur mesure',
      'Recommandations supplémentation',
      'Suivi personnalisé 4 semaines'
    ],
    included: [
      'Questionnaire santé approfondi',
      'Plan alimentaire personnalisé',
      'Liste de courses adaptée',
      'Recettes exclusives'
    ]
  },
  {
    id: 'suivi-personnalise',
    type: 'Suivi personnalisé',
    duration: 30,
    price: 47,
    description: 'Séances de suivi pour ajuster votre programme',
    benefits: [
      'Ajustements du plan nutritionnel',
      'Motivation et accompagnement',
      'Résolution des difficultés',
      'Optimisation des résultats'
    ],
    included: [
      'Analyse des progrès',
      'Ajustements personnalisés',
      'Nouvelles recettes',
      'Support entre séances'
    ]
  },
  {
    id: 'bilan-nutritionnel',
    type: 'Bilan nutritionnel',
    duration: 90,
    price: 127,
    description: 'Évaluation complète avec tests et recommandations',
    benefits: [
      'Tests de carences nutritionnelles',
      'Analyse de la composition corporelle',
      'Identification des intolérances',
      'Plan d\'action détaillé'
    ],
    included: [
      'Tests biologiques',
      'Rapport complet',
      'Plan de supplémentation',
      'Suivi 6 semaines'
    ]
  }
];

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Fatima El Mansouri',
    age: 34,
    program: 'Perte de Poids Naturelle',
    result: 'Objectif atteint et dépassé',
    rating: 5,
    comment: 'Souheila m\'a accompagnée avec bienveillance. J\'ai perdu 12kg en 3 mois et surtout j\'ai retrouvé confiance en moi.',
    beforeAfter: {
      weight: { before: 78, after: 66 },
      duration: '3 mois'
    }
  },
  {
    id: '2',
    name: 'Amira Benzid',
    age: 28,
    program: 'Équilibre Hormonal Féminin',
    result: 'Cycles réguliers retrouvés',
    rating: 5,
    comment: 'Après des années de cycles irréguliers, le programme de Souheila a révolutionné ma santé féminine.',
    beforeAfter: {
      weight: { before: 65, after: 63 },
      duration: '2 mois'
    }
  },
  {
    id: '3',
    name: 'Karim Alaoui',
    age: 31,
    program: 'Nutrition Sportive Performance',
    result: 'Performances sportives améliorées',
    rating: 5,
    comment: 'Mes performances en course à pied ont explosé grâce aux conseils nutrition de Souheila.',
    beforeAfter: {
      weight: { before: 72, after: 70 },
      duration: '6 semaines'
    }
  }
];

const healthStats = {
  totalClients: 4523,
  successRate: 94,
  avgWeightLoss: 8.5,
  satisfactionRate: 98,
  consultationsDone: 12456,
  programsCompleted: 3789
};

export function EspaceSanteSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProgram, setSelectedProgram] = useState<NutritionProgram | null>(null);

  const categories = ['all', 'Perte de poids', 'Thérapeutique', 'Sport', 'Équilibre'];
  
  const filteredPrograms = nutritionPrograms.filter(program => 
    selectedCategory === 'all' || program.category === selectedCategory
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Perte de poids': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Thérapeutique': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Sport': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Équilibre': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="espace-sante" className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-900 dark:to-emerald-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-full">
              <Heart className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Espace Santé & Nutrition
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Accompagnement nutritionnel personnalisé avec Souheila Yakoubi-Ozel, diététicienne-nutritionniste certifiée
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Users className="h-5 w-5 text-green-500" />
              <span className="font-semibold">{healthStats.totalClients}+ clients accompagnés</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Award className="h-5 w-5 text-emerald-500" />
              <span className="font-semibold">{healthStats.successRate}% de réussite</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="font-semibold">{healthStats.satisfactionRate}% satisfaction</span>
            </div>
          </div>
        </motion.div>

        {/* Section Application Mobile - À venir */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 md:p-12">
            <div className="absolute top-4 right-4">
              <span className="bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                Bientôt Disponible
              </span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="h-8 w-8 text-green-600" />
                  <h2 className="text-3xl font-bold">Mon Coach Sportif</h2>
                </div>
                <p className="text-xl text-green-600 font-semibold mb-4">
                  À emporter partout - En salle de sport, tous les sports
                </p>
                <p className="text-gray-700 mb-6">
                  L'application mobile révolutionnaire de coaching personnalisé avec Souheila Yakoubi-Ozel. 
                  Votre coach nutrition et sport dans votre poche pour une santé mentale et physique optimale.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    <span className="text-sm">Santé mentale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm">Performance physique</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-500" />
                    <span className="text-sm">Partout avec vous</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-500" />
                    <span className="text-sm">Coaching personnalisé</span>
                  </div>
                </div>

                {/* Formules de prix par niveau */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-lg font-semibold">Formules adaptées à votre niveau :</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                      <div>
                        <span className="font-semibold text-green-600">Débutant</span>
                        <p className="text-sm text-gray-600">Bases nutrition + exercices adaptés</p>
                      </div>
                      <span className="text-lg font-bold">19€/mois</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                      <div>
                        <span className="font-semibold text-blue-600">Intermédiaire</span>
                        <p className="text-sm text-gray-600">Programmes avancés + suivi personnalisé</p>
                      </div>
                      <span className="text-lg font-bold">39€/mois</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-amber-200">
                      <div>
                        <span className="font-semibold text-amber-600">Expert/Athlète</span>
                        <p className="text-sm text-gray-600">Coaching intensif + analyse performance</p>
                      </div>
                      <span className="text-lg font-bold">79€/mois</span>
                    </div>
                  </div>
                </div>

                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Bell className="h-4 w-4 mr-2" />
                  Me notifier du lancement
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Avis des testeurs exclusifs :</h3>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold text-sm">Thomas M. - Coach personnel</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    "Incroyable ! L'app me suit en temps réel pendant mes séances. Les conseils de Souheila sont parfaitement adaptés à chaque exercice."
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold text-sm">Lisa R. - Athlète professionnelle</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    "L'aspect santé mentale est révolutionnaire. Je me sens plus motivée et équilibrée dans ma préparation. Formule Expert parfaite !"
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold text-sm">Marc D. - Débutant</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    "Parfait pour débuter ! L'app s'adapte à mon niveau et Souheila m'encourage à chaque étape. 19€/mois, c'est donné !"
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold text-sm">Sarah L. - Niveau intermédiaire</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    "Le suivi personnalisé de la formule Intermédiaire m'a permis de dépasser mes objectifs. Excellent rapport qualité-prix !"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="programmes" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="programmes" className="flex items-center gap-2">
              <Utensils className="h-4 w-4" />
              Programmes
            </TabsTrigger>
            <TabsTrigger value="consultations" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Consultations
            </TabsTrigger>
            <TabsTrigger value="temoignages" className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              Témoignages
            </TabsTrigger>
            <TabsTrigger value="souheila" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              À propos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="programmes" className="space-y-8">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  {category === 'all' ? 'Tous les programmes' : category}
                </Button>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className={getCategoryColor(program.category)}>
                          {program.category}
                        </Badge>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">
                            {program.price}€
                          </div>
                          <div className="text-sm text-gray-500">{program.duration}</div>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{program.name}</CardTitle>
                      <CardDescription className="text-base">
                        {program.description}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="font-semibold">{program.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span>{program.students} étudiants</span>
                        </div>
                        <Badge variant="outline">{program.level}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Modules inclus :</h4>
                        <ul className="space-y-1">
                          {program.modules.map((module, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                              <span>{module}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Objectifs :</h4>
                        <ul className="space-y-1">
                          {program.objectives.map((objective, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Activity className="h-3 w-3 text-emerald-500 mt-1 flex-shrink-0" />
                              <span>{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t">
                        <div className="flex items-center justify-between">
                          <div className="text-sm">
                            <span className="font-semibold">Nutritionniste :</span> {program.nutritionist}
                          </div>
                          <Button className="bg-green-600 hover:bg-green-700">
                            S'inscrire
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="consultations" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {consultations.map((consultation, index) => (
                <motion.div
                  key={consultation.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="text-center">
                      <CardTitle className="text-lg">{consultation.type}</CardTitle>
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {consultation.price}€
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{consultation.duration} minutes</span>
                      </div>
                      <CardDescription>{consultation.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Bénéfices :</h4>
                        <ul className="space-y-1">
                          {consultation.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Heart className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Inclus :</h4>
                        <ul className="space-y-1">
                          {consultation.included.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Réserver maintenant
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="temoignages" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                        "{testimonial.comment}"
                      </p>
                      
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-semibold">{testimonial.name}</div>
                            <div className="text-sm text-gray-500">{testimonial.age} ans</div>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {testimonial.result}
                          </Badge>
                        </div>
                        
                        <div className="text-sm text-gray-600 space-y-1">
                          <div>Programme : {testimonial.program}</div>
                          <div className="font-semibold text-green-600">
                            {testimonial.beforeAfter.weight.before}kg → {testimonial.beforeAfter.weight.after}kg 
                            <span className="text-gray-500 ml-2">en {testimonial.beforeAfter.duration}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="souheila" className="space-y-8">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Heart className="h-16 w-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Souheila Yakoubi-Ozel</h3>
                    <p className="text-green-600 font-semibold mb-4">Diététicienne-Nutritionniste</p>
                    <div className="space-y-2 text-sm">
                      <div>🎓 Master en Nutrition Clinique</div>
                      <div>🏆 8 ans d'expérience</div>
                      <div>📜 Certifiée micronutrition</div>
                      <div>🌿 Spécialiste nutrition holistique</div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-xl font-bold mb-3">Mon Approche</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Passionnée par la nutrition thérapeutique et préventive, j'accompagne mes patients 
                        vers un mieux-être durable en respectant leur unicité et leurs besoins spécifiques.
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Mon approche holistique combine nutrition clinique, micronutrition et gestion 
                        du stress pour des résultats durables et un équilibre global.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Spécialisations</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-sm">Perte de poids durable</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                          <span className="text-sm">Troubles hormonaux</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full" />
                          <span className="text-sm">Nutrition sportive</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full" />
                          <span className="text-sm">Maladies inflammatoires</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                          <span className="text-sm">Fertilité & grossesse</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-teal-600 rounded-full" />
                          <span className="text-sm">Troubles digestifs</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{healthStats.totalClients}+</div>
                        <div className="text-sm text-gray-600">Patients accompagnés</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">{healthStats.successRate}%</div>
                        <div className="text-sm text-gray-600">Taux de réussite</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-teal-600">{healthStats.avgWeightLoss}kg</div>
                        <div className="text-sm text-gray-600">Perte moyenne</div>
                      </div>
                    </div>
                  </div>
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
          <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8">
            <h3 className="text-2xl font-bold mb-4">
              Transformez votre santé avec Souheila
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Découvrez une approche personnalisée de la nutrition pour des résultats durables
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary">
                Consultation gratuite
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-green-600">
                Voir les programmes
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}