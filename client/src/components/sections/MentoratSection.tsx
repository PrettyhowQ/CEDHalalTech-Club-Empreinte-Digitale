import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Heart, Globe, Star, MessageCircle, Calendar, Award, TrendingUp, Clock, Languages } from 'lucide-react';

interface Mentor {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  specialties: string[];
  languages: string[];
  experience: number;
  mentees: number;
  rating: number;
  sessions: number;
  location: string;
  timezone: string;
  bio: string;
  achievements: string[];
  availability: 'Disponible' | 'Occupé' | 'Bientôt disponible';
  pricePerHour: number;
  responseTime: string;
}

interface MentoringSession {
  id: string;
  mentorName: string;
  menteeName: string;
  topic: string;
  duration: number;
  date: string;
  type: 'Individuel' | 'Groupe' | 'Workshop';
  rating: number;
  feedback: string;
  outcomes: string[];
}

const mentors: Mentor[] = [
  {
    id: 'mentor-yamina',
    name: 'Dr. Yakoubi Yamina',
    title: 'Fondatrice & CEO',
    company: 'Club Empreinte Digitale',
    avatar: '/api/placeholder/128/128',
    specialties: ['IA Éthique', 'Leadership Tech', 'Entrepreneuriat', 'Innovation Responsable'],
    languages: ['Français', 'Anglais', 'Arabe', 'Espagnol'],
    experience: 15,
    mentees: 847,
    rating: 5.0,
    sessions: 2341,
    location: 'Genève, Suisse',
    timezone: 'CET',
    bio: 'Pionnière de l\'IA éthique avec 15+ ans d\'expérience. Auteure de 89 publications académiques et mentor de 847+ professionnels.',
    achievements: ['Prix UNESCO IA Éthique 2024', 'Forbes 30 Under 30', 'ACM SIGAI Award'],
    availability: 'Bientôt disponible',
    pricePerHour: 350,
    responseTime: '< 2h'
  },
  {
    id: 'mentor-chen-wei',
    name: 'Prof. Chen Wei',
    title: 'Directeur de Recherche',
    company: 'Stanford AI Lab',
    avatar: '/api/placeholder/128/128',
    specialties: ['Machine Learning', 'Algorithmes Éthiques', 'Recherche IA'],
    languages: ['Anglais', 'Chinois', 'Français'],
    experience: 12,
    mentees: 423,
    rating: 4.9,
    sessions: 1567,
    location: 'Stanford, USA',
    timezone: 'PST',
    bio: 'Expert en algorithmes éthiques et co-auteur de 156 publications. Ancien de Google AI et consultant ONU.',
    achievements: ['ICML Best Paper 2023', 'MIT Technology Review Innovator', 'Google Faculty Award'],
    availability: 'Disponible',
    pricePerHour: 280,
    responseTime: '< 4h'
  },
  {
    id: 'mentor-sarah-johnson',
    name: 'Dr. Sarah Johnson',
    title: 'Head of AI Ethics',
    company: 'Microsoft Research',
    avatar: '/api/placeholder/128/128',
    specialties: ['Gouvernance IA', 'Compliance', 'Transformation Digitale'],
    languages: ['Anglais', 'Français', 'Allemand'],
    experience: 10,
    mentees: 612,
    rating: 4.8,
    sessions: 1890,
    location: 'Seattle, USA',
    timezone: 'PST',
    bio: 'Spécialiste en gouvernance IA chez Microsoft. Conseillère pour l\'Union Européenne sur l\'AI Act.',
    achievements: ['EU AI Excellence Award', 'ACM Distinguished Scientist', 'IEEE Fellow'],
    availability: 'Disponible',
    pricePerHour: 320,
    responseTime: '< 3h'
  },
  {
    id: 'mentor-ahmed-hassan',
    name: 'Dr. Ahmed Hassan',
    title: 'CTO & Co-fondateur',
    company: 'AI for Good Initiative',
    avatar: '/api/placeholder/128/128',
    specialties: ['IA pour le Développement', 'Impact Social', 'Innovation Africaine'],
    languages: ['Arabe', 'Anglais', 'Français'],
    experience: 8,
    mentees: 289,
    rating: 4.9,
    sessions: 934,
    location: 'Le Caire, Égypte',
    timezone: 'EET',
    bio: 'Pionnier de l\'IA pour le développement en Afrique. Expert en solutions IA pour les défis sociétaux.',
    achievements: ['UN AI for SDGs Award', 'MIT Technology Review Arab Innovator', 'African Innovation Prize'],
    availability: 'Occupé',
    pricePerHour: 180,
    responseTime: '< 6h'
  },
  {
    id: 'mentor-maria-rodriguez',
    name: 'Prof. Maria Rodriguez',
    title: 'Professeure d\'IA Éthique',
    company: 'Universidad Autónoma de Madrid',
    avatar: '/api/placeholder/128/128',
    specialties: ['Éthique Appliquée', 'Formation IA', 'Recherche Interdisciplinaire'],
    languages: ['Espagnol', 'Anglais', 'Français', 'Portugais'],
    experience: 14,
    mentees: 356,
    rating: 4.8,
    sessions: 1245,
    location: 'Madrid, Espagne',
    timezone: 'CET',
    bio: 'Professeure reconnue en éthique IA avec focus sur l\'application pratique. Auteure de 3 livres de référence.',
    achievements: ['European Research Council Grant', 'Spanish National Research Award', 'IEEE Ethics Award'],
    availability: 'Disponible',
    pricePerHour: 220,
    responseTime: '< 4h'
  },
  {
    id: 'mentor-takeshi-yamamoto',
    name: 'Dr. Takeshi Yamamoto',
    title: 'Senior Research Scientist',
    company: 'Sony AI',
    avatar: '/api/placeholder/128/128',
    specialties: ['IA Créative', 'Innovation Produit', 'Entrepreneuriat Tech'],
    languages: ['Japonais', 'Anglais', 'Français'],
    experience: 11,
    mentees: 234,
    rating: 4.9,
    sessions: 876,
    location: 'Tokyo, Japon',
    timezone: 'JST',
    bio: 'Expert en IA créative et innovation produit. Ancien entrepreneur avec 2 exits réussis dans la tech.',
    achievements: ['Japan AI Society Award', 'Sony Innovation Excellence', 'Forbes Japan Tech Leader'],
    availability: 'Disponible',
    pricePerHour: 260,
    responseTime: '< 5h'
  }
];

const recentSessions: MentoringSession[] = [
  {
    id: 'session-001',
    mentorName: 'Dr. Yakoubi Yamina',
    menteeName: 'Sophie Martin',
    topic: 'Transition vers Leadership IA Éthique',
    duration: 90,
    date: '2025-06-12',
    type: 'Individuel',
    rating: 5,
    feedback: 'Session exceptionnelle ! Les conseils de Dr. Yamina m\'ont donné une vision claire pour développer mon expertise en IA éthique.',
    outcomes: ['Plan de carrière défini', 'Roadmap formation', 'Réseau professionnel élargi']
  },
  {
    id: 'session-002',
    mentorName: 'Prof. Chen Wei',
    menteeName: 'Marcus Thompson',
    topic: 'Algorithmes de Recommandation Éthiques',
    duration: 60,
    date: '2025-06-11',
    type: 'Individuel',
    rating: 5,
    feedback: 'Expertise technique impressionnante. Les explications étaient claires et directement applicables.',
    outcomes: ['Implémentation réussie', 'Métriques fairness définies', 'Code review approfondie']
  },
  {
    id: 'session-003',
    mentorName: 'Dr. Sarah Johnson',
    menteeName: 'Anna Kowalski',
    topic: 'Compliance RGPD et IA',
    duration: 75,
    date: '2025-06-10',
    type: 'Groupe',
    rating: 4,
    feedback: 'Session très informative sur les aspects légaux. Parfait pour comprendre les enjeux compliance.',
    outcomes: ['Framework compliance créé', 'Checklist RGPD', 'Documentation juridique']
  }
];

const mentoringStats = {
  totalMentors: 156,
  totalMentees: 4523,
  totalSessions: 12847,
  averageRating: 4.8,
  successRate: 94,
  countries: 48,
  languages: 28,
  specialties: 24
};

export function MentoratSection() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');
  const [hoveredMentor, setHoveredMentor] = useState<string | null>(null);

  const specialties = Array.from(new Set(mentors.flatMap(m => m.specialties)));
  
  const filteredMentors = selectedSpecialty === 'all' 
    ? mentors 
    : mentors.filter(m => m.specialties.includes(selectedSpecialty));

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Disponible': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Occupé': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'Bientôt disponible': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="mentorat" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4 rounded-full">
              <Users className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Mentorat Mondial IA Éthique
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Connectez-vous avec 156+ experts internationaux pour accélérer votre carrière
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Heart className="h-5 w-5 text-red-500" />
              <span className="font-semibold">4,523+ mentorés</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="font-semibold">4.8/5 satisfaction</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Globe className="h-5 w-5 text-blue-500" />
              <span className="font-semibold">48 pays</span>
            </div>
          </div>
        </motion.div>

        <Tabs defaultValue="mentors" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="mentors" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Nos Mentors
            </TabsTrigger>
            <TabsTrigger value="sessions" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Sessions Récentes
            </TabsTrigger>
            <TabsTrigger value="impact" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Impact Global
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mentors" className="space-y-8">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Button
                variant={selectedSpecialty === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedSpecialty('all')}
                size="sm"
              >
                Toutes spécialités
              </Button>
              {specialties.slice(0, 8).map((specialty) => (
                <Button
                  key={specialty}
                  variant={selectedSpecialty === specialty ? 'default' : 'outline'}
                  onClick={() => setSelectedSpecialty(specialty)}
                  size="sm"
                >
                  {specialty}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMentors.map((mentor, index) => (
                <motion.div
                  key={mentor.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredMentor(mentor.id)}
                  onHoverEnd={() => setHoveredMentor(null)}
                >
                  <Card className={`h-full transition-all duration-300 ${
                    hoveredMentor === mentor.id ? 'shadow-2xl scale-105' : 'shadow-lg'
                  }`}>
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-4">
                        <Avatar className="h-20 w-20">
                          <AvatarImage src={mentor.avatar} alt={mentor.name} />
                          <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="mb-2">
                        <Badge className={getAvailabilityColor(mentor.availability)}>
                          {mentor.availability}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{mentor.name}</CardTitle>
                      <CardDescription className="text-sm">
                        <div className="font-semibold">{mentor.title}</div>
                        <div className="text-xs text-gray-500">{mentor.company}</div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                        {mentor.bio}
                      </p>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-blue-500" />
                          <span>{mentor.experience} ans</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-green-500" />
                          <span>{mentor.mentees} mentorés</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{mentor.rating}/5</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4 text-purple-500" />
                          <span>{mentor.sessions} sessions</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">Spécialités :</h4>
                        <div className="flex flex-wrap gap-1">
                          {mentor.specialties.slice(0, 3).map((specialty, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">Langues :</h4>
                        <div className="flex items-center gap-1">
                          <Languages className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">{mentor.languages.join(', ')}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="text-lg font-bold text-purple-600">
                          {mentor.pricePerHour}€/h
                        </div>
                        <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-600">
                          Réserver
                        </Button>
                      </div>

                      <div className="text-xs text-gray-500 text-center">
                        Répond en {mentor.responseTime} • {mentor.location}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            {recentSessions.map((session, index) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold mb-1">{session.topic}</h3>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Mentor: {session.mentorName} • Mentoré: {session.menteeName}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{session.type}</Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-semibold">{session.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-500" />
                        <span>{new Date(session.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-green-500" />
                        <span>{session.duration} min</span>
                      </div>
                    </div>

                    <blockquote className="italic text-gray-700 dark:text-gray-300 mb-4 border-l-4 border-purple-500 pl-4">
                      "{session.feedback}"
                    </blockquote>

                    <div>
                      <h4 className="font-semibold mb-2">Résultats obtenus :</h4>
                      <ul className="space-y-1">
                        {session.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="impact" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-purple-600 mb-2">{mentoringStats.totalMentors}</div>
                <div className="text-gray-600 dark:text-gray-300">Mentors actifs</div>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900 dark:to-pink-800">
                <Heart className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-pink-600 mb-2">{mentoringStats.totalMentees.toLocaleString()}</div>
                <div className="text-gray-600 dark:text-gray-300">Mentorés accompagnés</div>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
                <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-blue-600 mb-2">{mentoringStats.totalSessions.toLocaleString()}</div>
                <div className="text-gray-600 dark:text-gray-300">Sessions réalisées</div>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800">
                <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-green-600 mb-2">{mentoringStats.successRate}%</div>
                <div className="text-gray-600 dark:text-gray-300">Taux de réussite</div>
              </Card>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Globe className="h-6 w-6 text-purple-600" />
                  Portée Mondiale
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Pays représentés</span>
                    <span className="font-bold text-purple-600">{mentoringStats.countries}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Langues supportées</span>
                    <span className="font-bold text-blue-600">{mentoringStats.languages}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Spécialités couvertes</span>
                    <span className="font-bold text-green-600">{mentoringStats.specialties}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Note moyenne</span>
                    <span className="font-bold text-yellow-600">{mentoringStats.averageRating}/5</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Award className="h-6 w-6 text-orange-600" />
                  Succès de nos Mentorés
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">+73% d'augmentation salariale</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Moyenne après 6 mois de mentorat</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">92% obtiennent une promotion</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Dans les 12 mois suivant le programme</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">847 startups créées</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Par nos mentorés entrepreneurs</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">98% recommandent</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Le programme à leurs collègues</div>
                    </div>
                  </div>
                </div>
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
          <Card className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-8">
            <h3 className="text-2xl font-bold mb-4">
              Trouvez votre mentor IA éthique idéal
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Accélérez votre carrière avec les meilleurs experts mondiaux
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary">
                Parcourir les mentors
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
                Devenir mentor
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}