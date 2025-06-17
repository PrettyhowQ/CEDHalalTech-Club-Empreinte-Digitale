import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Globe, Users, MessageSquare, Calendar, MapPin, Clock, Award, Zap, Heart, TrendingUp, Star } from 'lucide-react';

interface CommunityMember {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  avatar: string;
  level: 'Débutant' | 'Intermédiaire' | 'Expert' | 'Leader';
  specialties: string[];
  contributions: number;
  reputation: number;
  joinDate: string;
  lastActive: string;
  bio: string;
  badges: string[];
}

interface CommunityEvent {
  id: string;
  title: string;
  description: string;
  type: 'Webinaire' | 'Workshop' | 'Conférence' | 'Networking' | 'Hackathon';
  date: string;
  duration: number;
  timezone: string;
  speakers: string[];
  attendees: number;
  maxAttendees: number;
  language: string;
  level: 'Tous niveaux' | 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  price: number;
  status: 'À venir' | 'En cours' | 'Terminé' | 'Annulé';
  tags: string[];
  location: 'En ligne' | 'Hybride' | string;
  recording: boolean;
}

interface Discussion {
  id: string;
  title: string;
  author: string;
  authorAvatar: string;
  category: string;
  replies: number;
  views: number;
  lastReply: string;
  tags: string[];
  solved: boolean;
  pinned: boolean;
  content: string;
  upvotes: number;
}

const communityMembers: CommunityMember[] = [
  {
    id: 'member-yamina',
    name: 'Dr. Yakoubi Yamina',
    title: 'Fondatrice & CEO',
    company: 'Club Empreinte Digitale',
    location: 'Genève, Suisse',
    avatar: '/api/placeholder/64/64',
    level: 'Leader',
    specialties: ['IA Éthique', 'Leadership', 'Innovation'],
    contributions: 2847,
    reputation: 98500,
    joinDate: '2020-01-15',
    lastActive: '2 heures',
    bio: 'Pionnière de l\'IA éthique, passionnée par l\'impact positif de la technologie sur la société.',
    badges: ['Fondatrice', 'Expert IA', 'Mentor Elite', 'Conférencière Internationale']
  },
  {
    id: 'member-sophie',
    name: 'Sophie Chen',
    title: 'Senior AI Researcher',
    company: 'DeepMind',
    location: 'Londres, UK',
    avatar: '/api/placeholder/64/64',
    level: 'Expert',
    specialties: ['Machine Learning', 'Recherche IA', 'Publications'],
    contributions: 1523,
    reputation: 67800,
    joinDate: '2021-03-20',
    lastActive: '1 jour',
    bio: 'Chercheuse en IA avec focus sur l\'alignement et la sécurité des systèmes intelligents.',
    badges: ['Expert Recherche', 'Top Contributor', 'Peer Reviewer']
  },
  {
    id: 'member-marcus',
    name: 'Marcus Johnson',
    title: 'AI Product Manager',
    company: 'Microsoft',
    location: 'Seattle, USA',
    avatar: '/api/placeholder/64/64',
    level: 'Expert',
    specialties: ['Product Management', 'Stratégie IA', 'Innovation'],
    contributions: 934,
    reputation: 45200,
    joinDate: '2021-07-12',
    lastActive: '3 heures',
    bio: 'Spécialisé dans le développement de produits IA éthiques et leur mise sur le marché.',
    badges: ['Product Expert', 'Innovation Leader', 'Community Helper']
  },
  {
    id: 'member-aisha',
    name: 'Aisha Patel',
    title: 'AI Ethics Consultant',
    company: 'Independent',
    location: 'Mumbai, Inde',
    avatar: '/api/placeholder/64/64',
    level: 'Intermédiaire',
    specialties: ['Éthique IA', 'Compliance', 'Formation'],
    contributions: 567,
    reputation: 28900,
    joinDate: '2022-01-08',
    lastActive: '5 heures',
    bio: 'Consultante indépendante aidant les entreprises à implémenter l\'IA de manière éthique.',
    badges: ['Rising Star', 'Ethics Advocate', 'Workshop Leader']
  }
];

const upcomingEvents: CommunityEvent[] = [
  {
    id: 'event-001',
    title: 'Sommet Mondial IA Éthique 2025',
    description: 'Le plus grand rassemblement international sur l\'IA éthique avec 200+ experts de 50 pays.',
    type: 'Conférence',
    date: '2025-09-15',
    duration: 480,
    timezone: 'CET',
    speakers: ['Dr. Yakoubi Yamina', 'Prof. Yoshua Bengio', 'Dr. Timnit Gebru', 'Prof. Stuart Russell'],
    attendees: 5643,
    maxAttendees: 8000,
    language: 'Multilingue',
    level: 'Tous niveaux',
    price: 0,
    status: 'À venir',
    tags: ['Conférence', 'International', 'Gratuit', 'Certification'],
    location: 'Hybride (Genève + En ligne)',
    recording: true
  },
  {
    id: 'event-002',
    title: 'Workshop: Algorithmes de Recommandation Équitables',
    description: 'Session pratique sur l\'implémentation d\'algorithmes de recommandation sans biais.',
    type: 'Workshop',
    date: '2025-07-22',
    duration: 180,
    timezone: 'CET',
    speakers: ['Prof. Chen Wei', 'Dr. Sarah Johnson'],
    attendees: 89,
    maxAttendees: 150,
    language: 'Français/Anglais',
    level: 'Intermédiaire',
    price: 97,
    status: 'À venir',
    tags: ['Technique', 'Pratique', 'Fairness', 'Code'],
    location: 'En ligne',
    recording: true
  },
  {
    id: 'event-003',
    title: 'Hackathon: IA pour le Climat',
    description: 'Développez des solutions IA innovantes pour les défis climatiques en 48h.',
    type: 'Hackathon',
    date: '2025-08-05',
    duration: 2880,
    timezone: 'UTC',
    speakers: ['Dr. Ahmed Hassan', 'Prof. Maria Rodriguez'],
    attendees: 234,
    maxAttendees: 500,
    language: 'Multilingue',
    level: 'Tous niveaux',
    price: 25,
    status: 'À venir',
    tags: ['Climat', 'Innovation', 'Competition', 'Prix'],
    location: 'Hybride (Multiple villes)',
    recording: false
  },
  {
    id: 'event-004',
    title: 'Networking: Leaders IA Éthique MENA',
    description: 'Rencontre exclusive pour les leaders de l\'IA éthique au Moyen-Orient et Afrique du Nord.',
    type: 'Networking',
    date: '2025-07-30',
    duration: 120,
    timezone: 'CEST',
    speakers: ['Dr. Yakoubi Yamina', 'Leaders régionaux'],
    attendees: 45,
    maxAttendees: 80,
    language: 'Arabe/Français/Anglais',
    level: 'Expert',
    price: 150,
    status: 'À venir',
    tags: ['MENA', 'Leadership', 'Exclusif', 'Networking'],
    location: 'Dubai, UAE',
    recording: false
  }
];

const discussions: Discussion[] = [
  {
    id: 'discuss-001',
    title: 'Comment mesurer efficacement les biais dans les modèles de langage ?',
    author: 'Sophie Chen',
    authorAvatar: '/api/placeholder/32/32',
    category: 'Technique',
    replies: 23,
    views: 1847,
    lastReply: '2 heures',
    tags: ['Biais', 'LLM', 'Métriques', 'Évaluation'],
    solved: false,
    pinned: true,
    content: 'Je travaille sur l\'évaluation des biais dans les grands modèles de langage. Quelles métriques recommandez-vous ?',
    upvotes: 47
  },
  {
    id: 'discuss-002',
    title: 'Retour d\'expérience: Implémentation RGPD + IA dans une fintech',
    author: 'Marcus Johnson',
    authorAvatar: '/api/placeholder/32/32',
    category: 'Compliance',
    replies: 15,
    views: 923,
    lastReply: '5 heures',
    tags: ['RGPD', 'Fintech', 'Compliance', 'REX'],
    solved: true,
    pinned: false,
    content: 'Voici notre approche pour concilier innovation IA et conformité RGPD dans le secteur financier...',
    upvotes: 32
  },
  {
    id: 'discuss-003',
    title: 'Ressources pour débuter en IA éthique - Recommandations 2025',
    author: 'Aisha Patel',
    authorAvatar: '/api/placeholder/32/32',
    category: 'Éducation',
    replies: 41,
    views: 2156,
    lastReply: '1 jour',
    tags: ['Débutant', 'Ressources', 'Formation', 'Guides'],
    solved: false,
    pinned: true,
    content: 'Compilation des meilleures ressources pour commencer en IA éthique en 2025...',
    upvotes: 89
  }
];

const communityStats = {
  totalMembers: 34221,
  activeMembers: 12847,
  discussions: 8934,
  events: 156,
  countries: 89,
  languages: 32,
  dailyMessages: 2341,
  monthlyEvents: 24
};

export function CommunauteSection() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const levels = ['all', 'Débutant', 'Intermédiaire', 'Expert', 'Leader'];
  
  const filteredMembers = selectedLevel === 'all' 
    ? communityMembers 
    : communityMembers.filter(m => m.level === selectedLevel);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Débutant': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermédiaire': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Expert': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Leader': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Webinaire': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Workshop': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Conférence': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Networking': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Hackathon': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="communaute" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-teal-900 dark:to-cyan-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4 rounded-full">
              <Globe className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Communauté Mondiale IA Éthique
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Rejoignez 34,221+ professionnels passionnés par l'IA responsable dans 89 pays
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Users className="h-5 w-5 text-emerald-500" />
              <span className="font-semibold">34,221+ membres</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <MessageSquare className="h-5 w-5 text-teal-500" />
              <span className="font-semibold">2,341 messages/jour</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Calendar className="h-5 w-5 text-blue-500" />
              <span className="font-semibold">24 événements/mois</span>
            </div>
          </div>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Vue d'ensemble
            </TabsTrigger>
            <TabsTrigger value="members" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Membres
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Événements
            </TabsTrigger>
            <TabsTrigger value="discussions" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Discussions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              <Card className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900 dark:to-emerald-800">
                <Users className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-emerald-600 mb-2">{communityStats.totalMembers.toLocaleString()}</div>
                <div className="text-gray-600 dark:text-gray-300">Membres totaux</div>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900 dark:to-teal-800">
                <Zap className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-teal-600 mb-2">{communityStats.activeMembers.toLocaleString()}</div>
                <div className="text-gray-600 dark:text-gray-300">Membres actifs</div>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
                <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-blue-600 mb-2">{communityStats.countries}</div>
                <div className="text-gray-600 dark:text-gray-300">Pays représentés</div>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800">
                <MessageSquare className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-purple-600 mb-2">{communityStats.discussions.toLocaleString()}</div>
                <div className="text-gray-600 dark:text-gray-300">Discussions actives</div>
              </Card>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Heart className="h-6 w-6 text-red-500" />
                  Engagement Communautaire
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Messages quotidiens</span>
                    <span className="font-bold text-emerald-600">{communityStats.dailyMessages.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Événements mensuels</span>
                    <span className="font-bold text-teal-600">{communityStats.monthlyEvents}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Langues supportées</span>
                    <span className="font-bold text-blue-600">{communityStats.languages}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Taux de participation</span>
                    <span className="font-bold text-purple-600">87%</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Award className="h-6 w-6 text-yellow-500" />
                  Réalisations Récentes
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">50,000ème membre accueilli</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Croissance de 300% en 2024</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">1000+ projets collaboratifs</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Initiatives communautaires lancées</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Prix Communauté de l'Année</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">AI Ethics Awards 2024</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Impact documenté</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">2000+ innovations responsables créées</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="members" className="space-y-8">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {levels.map((level) => (
                <Button
                  key={level}
                  variant={selectedLevel === level ? 'default' : 'outline'}
                  onClick={() => setSelectedLevel(level)}
                  size="sm"
                >
                  {level === 'all' ? 'Tous les niveaux' : level}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="mb-2">
                        <Badge className={getLevelColor(member.level)}>
                          {member.level}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription>
                        <div className="font-semibold">{member.title}</div>
                        <div className="text-sm text-gray-500">{member.company}</div>
                        <div className="flex items-center justify-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" />
                          <span className="text-xs">{member.location}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {member.bio}
                      </p>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center">
                          <div className="font-bold text-emerald-600">{member.contributions.toLocaleString()}</div>
                          <div className="text-xs text-gray-500">Contributions</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-teal-600">{member.reputation.toLocaleString()}</div>
                          <div className="text-xs text-gray-500">Réputation</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">Spécialités :</h4>
                        <div className="flex flex-wrap gap-1">
                          {member.specialties.slice(0, 3).map((specialty, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">Badges :</h4>
                        <div className="flex flex-wrap gap-1">
                          {member.badges.slice(0, 2).map((badge, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t text-xs text-gray-500">
                        <span>Actif il y a {member.lastActive}</span>
                        <span>Membre depuis {new Date(member.joinDate).getFullYear()}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-2">
                        <Badge className={getEventTypeColor(event.type)}>
                          {event.type}
                        </Badge>
                        <Badge variant="outline">{event.level}</Badge>
                        {event.price === 0 && <Badge className="bg-green-100 text-green-800">Gratuit</Badge>}
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">{event.price === 0 ? 'Gratuit' : `${event.price}€`}</div>
                        <div className="text-sm text-gray-500">{event.attendees}/{event.maxAttendees} participants</div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{event.description}</p>

                    <div className="grid md:grid-cols-3 gap-4 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-500" />
                        <span>{new Date(event.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-green-500" />
                        <span>{event.duration} min</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-purple-500" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Intervenants :</h4>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {event.speakers.join(', ')}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {event.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        Langue: {event.language} • {event.recording ? 'Enregistré' : 'Non enregistré'}
                      </div>
                      <Button className="bg-gradient-to-r from-emerald-500 to-teal-600">
                        S'inscrire
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="discussions" className="space-y-6">
            {discussions.map((discussion, index) => (
              <motion.div
                key={discussion.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-2">
                        <Badge variant="outline">{discussion.category}</Badge>
                        {discussion.solved && <Badge className="bg-green-100 text-green-800">Résolu</Badge>}
                        {discussion.pinned && <Badge className="bg-yellow-100 text-yellow-800">Épinglé</Badge>}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-semibold">{discussion.upvotes}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold mb-3">{discussion.title}</h3>
                    
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={discussion.authorAvatar} alt={discussion.author} />
                        <AvatarFallback>{discussion.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="text-sm">
                        <span className="font-semibold">{discussion.author}</span>
                        <span className="text-gray-500 ml-2">il y a {discussion.lastReply}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {discussion.content}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {discussion.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <div className="flex gap-4">
                        <span>{discussion.replies} réponses</span>
                        <span>{discussion.views.toLocaleString()} vues</span>
                      </div>
                      <Button size="sm" variant="outline">
                        Participer
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Rejoignez la communauté mondiale IA éthique
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Connectez-vous, apprenez et innovez avec les meilleurs experts mondiaux
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary">
                Rejoindre la communauté
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-600">
                Organiser un événement
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}