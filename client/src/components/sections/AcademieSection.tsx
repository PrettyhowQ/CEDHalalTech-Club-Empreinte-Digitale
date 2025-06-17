import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap, Award, Globe, Users, Calendar, BookOpen, Trophy, Star } from 'lucide-react';

interface CertificationProgram {
  id: string;
  title: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  duration: string;
  price: number;
  currency: string;
  description: string;
  modules: string[];
  certification: string;
  prerequisites: string[];
  language: string[];
  nextSession: string;
  enrolled: number;
  rating: number;
  instructor: string;
  category: 'technique' | 'ethique' | 'business' | 'recherche';
}

const certificationPrograms: CertificationProgram[] = [
  {
    id: 'cert-ia-ethique-fondamentale',
    title: 'Certification IA Éthique Fondamentale',
    level: 'Débutant',
    duration: '8 semaines',
    price: 497,
    currency: 'EUR',
    description: 'Programme de certification reconnu internationalement sur les fondements de l\'IA éthique et responsable.',
    modules: [
      'Principes fondamentaux de l\'IA éthique',
      'Biais algorithmiques et fairness',
      'Transparence et explicabilité',
      'Privacy by design',
      'Gouvernance IA responsable',
      'Projet capstone personnalisé'
    ],
    certification: 'Certificat IA Éthique - Niveau Fondamental (CEE-F)',
    prerequisites: ['Aucun prérequis technique'],
    language: ['Français', 'Anglais', 'Arabe', 'Espagnol'],
    nextSession: '15 juillet 2025',
    enrolled: 2847,
    rating: 4.9,
    instructor: 'Dr. Yakoubi Yamina',
    category: 'ethique'
  },
  {
    id: 'cert-super-iarp-pro',
    title: 'Certification Super IARP Pro Spécialiste',
    level: 'Intermédiaire',
    duration: '12 semaines',
    price: 897,
    currency: 'EUR',
    description: 'Maîtrisez tous les modules Super IARP Pro pour devenir un spécialiste certifié.',
    modules: [
      'IA d\'écriture et traduction avancée',
      'Éducation et tutorat adaptatif',
      'Analyse environnementale et société',
      'Productivité et business intelligence',
      'Programmation assistée par IA',
      'Recherche et analyse de données',
      'Coaching lifestyle intelligent',
      'Éthique IA appliquée'
    ],
    certification: 'Spécialiste Super IARP Pro Certifié (SSPC)',
    prerequisites: ['Bases en IA', 'Expérience professionnelle 2+ ans'],
    language: ['Français', 'Anglais', 'Allemand', 'Chinois'],
    nextSession: '1er août 2025',
    enrolled: 1923,
    rating: 4.8,
    instructor: 'Équipe PrettyhowQ',
    category: 'technique'
  },
  {
    id: 'cert-leader-ia-ethique',
    title: 'Leadership IA Éthique Exécutif',
    level: 'Expert',
    duration: '16 semaines',
    price: 2497,
    currency: 'EUR',
    description: 'Programme exécutif pour dirigeants souhaitant implémenter l\'IA éthique dans leur organisation.',
    modules: [
      'Stratégie IA éthique d\'entreprise',
      'Transformation digitale responsable',
      'Gouvernance et compliance IA',
      'ROI et métriques d\'impact',
      'Change management IA',
      'Partenariats écosystème',
      'Communication et stakeholders',
      'Projet transformation réel'
    ],
    certification: 'Leader IA Éthique Certifié (LIEC)',
    prerequisites: ['Position de leadership', '5+ ans expérience', 'Entretien de sélection'],
    language: ['Français', 'Anglais', 'Japonais'],
    nextSession: '15 septembre 2025',
    enrolled: 342,
    rating: 5.0,
    instructor: 'Dr. Yakoubi Yamina + Experts internationaux',
    category: 'business'
  },
  {
    id: 'cert-recherche-ia-ethique',
    title: 'Chercheur IA Éthique Avancé',
    level: 'Expert',
    duration: '20 semaines',
    price: 1897,
    currency: 'EUR',
    description: 'Programme de recherche avancée pour contribuer à l\'état de l\'art en IA éthique.',
    modules: [
      'Méthodologies de recherche en IA éthique',
      'Publication académique et peer-review',
      'Frameworks théoriques avancés',
      'Expérimentation et validation',
      'Collaboration internationale',
      'Présentation conférences',
      'Thèse de recherche originale'
    ],
    certification: 'Chercheur IA Éthique Avancé (CIEA)',
    prerequisites: ['Master/PhD', 'Publications académiques', 'Projet de recherche'],
    language: ['Anglais', 'Français'],
    nextSession: '1er octobre 2025',
    enrolled: 156,
    rating: 4.9,
    instructor: 'Réseau académique international',
    category: 'recherche'
  }
];

const academicPartners = [
  { name: 'Stanford University', country: 'USA', logo: '🇺🇸', speciality: 'AI Ethics Research' },
  { name: 'ETH Zurich', country: 'Suisse', logo: '🇨🇭', speciality: 'Responsible AI' },
  { name: 'Sorbonne Université', country: 'France', logo: '🇫🇷', speciality: 'IA et Société' },
  { name: 'University of Oxford', country: 'UK', logo: '🇬🇧', speciality: 'AI Governance' },
  { name: 'MIT', country: 'USA', logo: '🇺🇸', speciality: 'AI Safety' },
  { name: 'Tsinghua University', country: 'Chine', logo: '🇨🇳', speciality: 'AI Ethics Framework' },
  { name: 'University of Tokyo', country: 'Japon', logo: '🇯🇵', speciality: 'Human-AI Interaction' },
  { name: 'TU Munich', country: 'Allemagne', logo: '🇩🇪', speciality: 'Trustworthy AI' }
];

export function AcademieSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredPrograms = selectedCategory === 'all' 
    ? certificationPrograms 
    : certificationPrograms.filter(p => p.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Débutant': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermédiaire': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Avancé': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Expert': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="academie" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full">
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Académie Mondiale IA Éthique
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Formations certifiantes reconnues internationalement par 34,221+ professionnels
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Globe className="h-5 w-5 text-blue-500" />
              <span className="font-semibold">78 langues supportées</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Award className="h-5 w-5 text-purple-500" />
              <span className="font-semibold">Certifications reconnues</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Users className="h-5 w-5 text-green-500" />
              <span className="font-semibold">5,368+ diplômés</span>
            </div>
          </div>
        </motion.div>

        <Tabs defaultValue="programmes" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3 mb-8">
            <TabsTrigger value="programmes" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Programmes
            </TabsTrigger>
            <TabsTrigger value="partenaires" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Partenaires
            </TabsTrigger>
            <TabsTrigger value="statistiques" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              Statistiques
            </TabsTrigger>
          </TabsList>

          <TabsContent value="programmes" className="space-y-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                className="flex items-center gap-2"
              >
                Tous les programmes
              </Button>
              <Button
                variant={selectedCategory === 'ethique' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('ethique')}
                className="flex items-center gap-2"
              >
                IA Éthique
              </Button>
              <Button
                variant={selectedCategory === 'technique' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('technique')}
                className="flex items-center gap-2"
              >
                Technique
              </Button>
              <Button
                variant={selectedCategory === 'business' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('business')}
                className="flex items-center gap-2"
              >
                Business
              </Button>
              <Button
                variant={selectedCategory === 'recherche' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('recherche')}
                className="flex items-center gap-2"
              >
                Recherche
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredCard(program.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <Card className={`h-full transition-all duration-300 ${
                    hoveredCard === program.id ? 'shadow-2xl scale-105' : 'shadow-lg'
                  }`}>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className={getLevelColor(program.level)}>
                          {program.level}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-semibold">{program.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                      <CardDescription className="text-base">
                        {program.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-blue-500" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-green-500" />
                          <span>{program.enrolled.toLocaleString()} inscrits</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-purple-500" />
                          <span>{program.language.length} langues</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-orange-500" />
                          <span>Certifiant</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Modules inclus :</h4>
                        <ul className="text-sm space-y-1">
                          {program.modules.slice(0, 3).map((module, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                              <span>{module}</span>
                            </li>
                          ))}
                          {program.modules.length > 3 && (
                            <li className="text-gray-500 text-xs">
                              +{program.modules.length - 3} autres modules
                            </li>
                          )}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="text-2xl font-bold text-blue-600">
                          {program.price} {program.currency}
                        </div>
                        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                          S'inscrire
                        </Button>
                      </div>

                      <div className="text-xs text-gray-500">
                        Prochaine session : {program.nextSession}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="partenaires" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold mb-4">Partenaires Académiques Internationaux</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Collaboration avec les meilleures universités mondiales
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {academicPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4">{partner.logo}</div>
                      <h4 className="font-bold text-lg mb-2">{partner.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {partner.country}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {partner.speciality}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="statistiques" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">5,368+</div>
                <div className="text-gray-600 dark:text-gray-400">Diplômés certifiés</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">96.8%</div>
                <div className="text-gray-600 dark:text-gray-400">Taux de réussite</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">148</div>
                <div className="text-gray-600 dark:text-gray-400">Pays représentés</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">4.9/5</div>
                <div className="text-gray-600 dark:text-gray-400">Satisfaction moyenne</div>
              </Card>
            </motion.div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Impact Carrière</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">+47%</div>
                  <div className="text-gray-600 dark:text-gray-400">Augmentation salaire moyenne</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600 mb-2">89%</div>
                  <div className="text-gray-600 dark:text-gray-400">Promotion dans les 12 mois</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">94%</div>
                  <div className="text-gray-600 dark:text-gray-400">Recommandent la formation</div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8">
            <h3 className="text-2xl font-bold mb-4">
              Rejoignez l'élite mondiale de l'IA éthique
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Programmes personnalisés pour professionnels, chercheurs et dirigeants
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary">
                Découvrir les programmes
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                Demander une démonstration
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}