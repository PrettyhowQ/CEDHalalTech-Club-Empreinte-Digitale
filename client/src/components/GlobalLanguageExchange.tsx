import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { 
  MessageCircle, 
  Users, 
  Globe, 
  VideoIcon as Video, 
  Mic,
  Heart,
  Star,
  Calendar,
  Clock,
  MapPin,
  Languages,
  BookOpen,
  Award,
  Headphones,
  Coffee,
  UserPlus,
  Send,
  Search,
  Filter,
  Zap
} from "lucide-react";

interface LanguagePartner {
  id: string;
  name: string;
  country: string;
  flag: string;
  nativeLanguage: string;
  learningLanguage: string;
  level: string;
  interests: string[];
  timeZone: string;
  availableHours: string[];
  rating: number;
  completedSessions: number;
  bio: string;
  preferredTopics: string[];
  culturalBackground: string;
  religiousContext?: string;
  status: 'online' | 'offline' | 'busy';
  lastActive: string;
  matchScore: number;
  commonInterests: string[];
}

interface CommunityGroup {
  id: string;
  name: string;
  description: string;
  languages: string[];
  members: number;
  level: string;
  region: string;
  topics: string[];
  meetingTime: string;
  moderator: string;
  activity: 'high' | 'medium' | 'low';
  culturalFocus: string;
  religiousGuidance: boolean;
}

interface ExchangeSession {
  id: string;
  title: string;
  participants: string[];
  language1: string;
  language2: string;
  scheduledTime: string;
  duration: string;
  topic: string;
  type: 'conversation' | 'lesson' | 'cultural_exchange' | 'religious_discussion';
  level: string;
  status: 'upcoming' | 'live' | 'completed';
}

const languagePartners: LanguagePartner[] = [
  {
    id: 'fatima_001',
    name: 'Fatima Al-Zahra',
    country: 'Maroc',
    flag: '🇲🇦',
    nativeLanguage: 'Arabe (Maroc)',
    learningLanguage: 'Anglais',
    level: 'Intermédiaire',
    interests: ['Culture islamique', 'Littérature', 'Cuisine', 'Voyages'],
    timeZone: 'GMT+1',
    availableHours: ['19:00-22:00', '14:00-16:00 (weekend)'],
    rating: 4.9,
    completedSessions: 67,
    bio: 'Professeure de littérature arabe passionnée par l\'échange culturel. J\'aimerais améliorer mon anglais pour enseigner à l\'international.',
    preferredTopics: ['Éducation', 'Islam', 'Culture maghrébine', 'Littérature'],
    culturalBackground: 'Berbère amazigh, culture andalouse',
    religiousContext: 'École malikite, traditions soufies',
    status: 'online',
    lastActive: '2 min',
    matchScore: 95,
    commonInterests: ['Culture islamique', 'Littérature']
  },
  {
    id: 'ahmad_002',
    name: 'Ahmad Ibn Rashid',
    country: 'Arabie Saoudite',
    flag: '🇸🇦',
    nativeLanguage: 'Arabe classique',
    learningLanguage: 'Italien',
    level: 'Débutant',
    interests: ['Business', 'Finance islamique', 'Architecture', 'Histoire'],
    timeZone: 'GMT+3',
    availableHours: ['20:00-23:00', 'Vendredi 15:00-18:00'],
    rating: 4.8,
    completedSessions: 23,
    bio: 'Entrepreneur dans la finance islamique. Je veux apprendre l\'italien pour développer des partenariats business en Europe.',
    preferredTopics: ['Business halal', 'Finance', 'Architecture islamique'],
    culturalBackground: 'Tradition bédouine, Najd',
    religiousContext: 'École hanbalite, guidance salafiste',
    status: 'online',
    lastActive: '5 min',
    matchScore: 87,
    commonInterests: ['Business', 'Finance islamique']
  },
  {
    id: 'aminah_003',
    name: 'Aminah binti Hassan',
    country: 'Malaisie',
    flag: '🇲🇾',
    nativeLanguage: 'Bahasa Malaysia',
    learningLanguage: 'Français',
    level: 'Avancé',
    interests: ['Sciences', 'Médecine', 'Recherche', 'Voyages'],
    timeZone: 'GMT+8',
    availableHours: ['21:00-23:00', 'Weekend matin'],
    rating: 4.7,
    completedSessions: 89,
    bio: 'Chercheuse en médecine. Je souhaite perfectionner mon français pour collaborer avec des équipes francophones.',
    preferredTopics: ['Sciences', 'Médecine', 'Recherche', 'Culture malaise'],
    culturalBackground: 'Malaise traditionnelle, influence Adat',
    religiousContext: 'École shafiite, traditions locales',
    status: 'offline',
    lastActive: '2h',
    matchScore: 82,
    commonInterests: ['Sciences', 'Voyages']
  },
  {
    id: 'omar_004',
    name: 'Omar Al-Mansouri',
    country: 'EAU',
    flag: '🇦🇪',
    nativeLanguage: 'Arabe (Golfe)',
    learningLanguage: 'Chinois',
    level: 'Intermédiaire',
    interests: ['Commerce international', 'Tech', 'Innovation', 'Sports'],
    timeZone: 'GMT+4',
    availableHours: ['19:30-22:00', 'Jeudi-Vendredi après-midi'],
    rating: 4.6,
    completedSessions: 45,
    bio: 'Directeur commercial spécialisé Asie. J\'apprends le mandarin pour mieux négocier avec nos partenaires chinois.',
    preferredTopics: ['Business international', 'Technologie', 'Innovation'],
    culturalBackground: 'Émirati traditionnel, influence internationale',
    religiousContext: 'École hanafite, ouverture moderne',
    status: 'busy',
    lastActive: '30 min',
    matchScore: 79,
    commonInterests: ['Commerce international', 'Tech']
  }
];

const communityGroups: CommunityGroup[] = [
  {
    id: 'arabic_global',
    name: 'Arabe pour Tous 🌍',
    description: 'Communauté mondiale pour apprendre l\'arabe classique ensemble',
    languages: ['Arabe classique', 'Arabe dialectal'],
    members: 3456,
    level: 'Tous niveaux',
    region: 'Mondial',
    topics: ['Coran', 'Hadith', 'Littérature', 'Culture'],
    meetingTime: 'Samedi 20:00 GMT',
    moderator: 'Sheikh Dr. Abdullah Al-Azhari',
    activity: 'high',
    culturalFocus: 'Culture islamique authentique',
    religiousGuidance: true
  },
  {
    id: 'business_languages',
    name: 'Business Multilingue 💼',
    description: 'Échange linguistique pour professionnels musulmans',
    languages: ['Anglais', 'Arabe', 'Français', 'Chinois'],
    members: 1876,
    level: 'Intermédiaire-Avancé',
    region: 'International',
    topics: ['Finance halal', 'Commerce', 'Négociation', 'Leadership'],
    meetingTime: 'Mercredi 19:00 GMT',
    moderator: 'Fatima Al-Tijani (MBA Harvard)',
    activity: 'high',
    culturalFocus: 'Business islamique moderne',
    religiousGuidance: false
  },
  {
    id: 'sisters_circle',
    name: 'Cercle des Sœurs 👩‍🎓',
    description: 'Échange linguistique exclusivement féminin',
    languages: ['Toutes langues'],
    members: 2234,
    level: 'Tous niveaux',
    region: 'Mondial',
    topics: ['Éducation', 'Famille', 'Développement personnel', 'Spiritualité'],
    meetingTime: 'Dimanche 15:00 GMT',
    moderator: 'Dr. Khadija Benali',
    activity: 'medium',
    culturalFocus: 'Empowerment féminin islamique',
    religiousGuidance: true
  },
  {
    id: 'youth_exchange',
    name: 'Jeunesse Musulmane 🎓',
    description: 'Étudiants musulmans du monde entier',
    languages: ['Anglais', 'Français', 'Arabe', 'Espagnol'],
    members: 4567,
    level: 'Débutant-Intermédiaire',
    region: 'Mondial',
    topics: ['Études', 'Carrière', 'Culture pop', 'Sports'],
    meetingTime: 'Vendredi 21:00 GMT',
    moderator: 'Ahmed Al-Sharif (MIT)',
    activity: 'high',
    culturalFocus: 'Culture jeune musulmane moderne',
    religiousGuidance: false
  }
];

const upcomingSessions: ExchangeSession[] = [
  {
    id: 'session_001',
    title: 'Conversation Arabe-Anglais: Culture du Hajj',
    participants: ['Fatima Al-Zahra', 'Sarah Johnson'],
    language1: 'Arabe',
    language2: 'Anglais',
    scheduledTime: '2025-06-26 19:00',
    duration: '1h',
    topic: 'Traditions du pèlerinage',
    type: 'cultural_exchange',
    level: 'Intermédiaire',
    status: 'upcoming'
  },
  {
    id: 'session_002',
    title: 'Business Meeting Simulation: Finance islamique',
    participants: ['Ahmad Ibn Rashid', 'Marco Bianchi'],
    language1: 'Arabe',
    language2: 'Italien',
    scheduledTime: '2025-06-26 20:30',
    duration: '45min',
    topic: 'Négociation commerciale halal',
    type: 'lesson',
    level: 'Débutant',
    status: 'upcoming'
  }
];

export function GlobalLanguageExchange() {
  const [selectedTab, setSelectedTab] = useState('partners');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [connectionProgress, setConnectionProgress] = useState<{ [key: string]: number }>({});

  const handleConnect = (partnerId: string) => {
    setConnectionProgress(prev => ({ ...prev, [partnerId]: 0 }));
    const interval = setInterval(() => {
      setConnectionProgress(prev => {
        const current = prev[partnerId] || 0;
        if (current >= 100) {
          clearInterval(interval);
          return prev;
        }
        return { ...prev, [partnerId]: current + 20 };
      });
    }, 300);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'busy': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getActivityColor = (activity: string) => {
    switch (activity) {
      case 'high': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <Card className="border-2 border-purple-500 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageCircle className="h-8 w-8 text-purple-600" />
              <div>
                <CardTitle className="text-2xl text-purple-800">
                  🌍 Échange Linguistique Global CED
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Connectez-vous avec des musulmans du monde entier pour apprendre ensemble
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">
                {languagePartners.length + communityGroups.reduce((sum, group) => sum + group.members, 0)}
              </div>
              <div className="text-sm text-gray-500">Membres Actifs</div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Statistiques communautaires */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Partenaires Actifs</p>
                <p className="text-2xl font-bold text-blue-600">{languagePartners.length}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Groupes Communautaires</p>
                <p className="text-2xl font-bold text-purple-600">{communityGroups.length}</p>
              </div>
              <MessageCircle className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Sessions Cette Semaine</p>
                <p className="text-2xl font-bold text-green-600">156</p>
              </div>
              <Video className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Langues Enseignées</p>
                <p className="text-2xl font-bold text-orange-600">12</p>
              </div>
              <Languages className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation principale */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="partners" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Partenaires
          </TabsTrigger>
          <TabsTrigger value="groups" className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            Groupes
          </TabsTrigger>
          <TabsTrigger value="sessions" className="flex items-center gap-2">
            <Video className="h-4 w-4" />
            Sessions
          </TabsTrigger>
          <TabsTrigger value="matching" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            Matching IA
          </TabsTrigger>
        </TabsList>

        {/* Recherche et filtres */}
        <div className="flex gap-4 mt-6">
          <div className="flex-1">
            <Input
              placeholder="Rechercher partenaires, groupes ou sujets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filtres
          </Button>
        </div>

        {/* Contenu des onglets */}
        <TabsContent value="partners" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-6 w-6 text-blue-600" />
                Partenaires d'Échange Recommandés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {languagePartners.map((partner) => (
                  <PartnerCard 
                    key={partner.id}
                    partner={partner}
                    onConnect={handleConnect}
                    progress={connectionProgress[partner.id] || 0}
                    getStatusColor={getStatusColor}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="groups" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-purple-600" />
                Groupes Communautaires Actifs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {communityGroups.map((group) => (
                  <GroupCard 
                    key={group.id}
                    group={group}
                    getActivityColor={getActivityColor}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sessions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Video className="h-6 w-6 text-green-600" />
                Sessions d'Échange Programmées
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <SessionCard key={session.id} session={session} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="matching" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Zap className="h-6 w-6 text-yellow-600" />
                Matching IA Intelligent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Zap className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Matching Automatique</h3>
                <p className="text-gray-600 mb-6">
                  Notre IA analyse vos préférences, niveau, horaires et centres d'intérêt pour vous connecter 
                  avec les partenaires les plus compatibles.
                </p>
                <Button className="bg-yellow-600 hover:bg-yellow-700">
                  Activer le Matching IA
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Footer Protection */}
      <div className="mt-12 text-center text-xs text-gray-500 bg-gray-50 p-4 rounded-lg border">
        <p>© 2025 Club Empreinte Digitale - Yakoubi Yamina. Tous droits réservés.</p>
        <p>Échange Linguistique Global CED - Connexion Mondiale Musulmane</p>
        <p className="font-arabic text-purple-600 mt-2">وفقك الله في التواصل العالمي - Qu'Allah vous aide dans la communication mondiale</p>
      </div>
    </div>
  );
}

interface PartnerCardProps {
  partner: LanguagePartner;
  onConnect: (partnerId: string) => void;
  progress: number;
  getStatusColor: (status: string) => string;
}

function PartnerCard({ partner, onConnect, progress, getStatusColor }: PartnerCardProps) {
  return (
    <Card className="border hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-xl">
                {partner.flag}
              </div>
              <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(partner.status)} rounded-full border-2 border-white`}></div>
            </div>
            <div>
              <h3 className="font-semibold">{partner.name}</h3>
              <p className="text-sm text-gray-500">{partner.country}</p>
              <div className="flex items-center gap-1 mt-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">{partner.rating}</span>
                <span className="text-xs text-gray-500">({partner.completedSessions} sessions)</span>
              </div>
            </div>
          </div>
          <Badge variant="outline" className="bg-green-50 text-green-700">
            {partner.matchScore}% compatible
          </Badge>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Enseigne:</span>
            <span className="font-medium">{partner.nativeLanguage}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Apprend:</span>
            <span className="font-medium">{partner.learningLanguage}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Niveau:</span>
            <span className="font-medium">{partner.level}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Fuseau:</span>
            <span className="font-medium">{partner.timeZone}</span>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-700 line-clamp-3">{partner.bio}</p>
        </div>

        <div className="mt-4">
          <div className="flex flex-wrap gap-1">
            {partner.commonInterests.map((interest, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {interest}
              </Badge>
            ))}
          </div>
        </div>

        {partner.religiousContext && (
          <div className="mt-3 p-2 bg-green-50 rounded text-xs text-green-700">
            <strong>Contexte religieux:</strong> {partner.religiousContext}
          </div>
        )}

        <div className="mt-4 space-y-2">
          <Button 
            onClick={() => onConnect(partner.id)}
            className="w-full flex items-center gap-2"
            disabled={progress > 0 && progress < 100}
          >
            {progress > 0 && progress < 100 ? (
              <>
                <Clock className="h-4 w-4 animate-spin" />
                Connexion...
              </>
            ) : (
              <>
                <UserPlus className="h-4 w-4" />
                Se connecter
              </>
            )}
          </Button>
          {progress > 0 && (
            <Progress value={progress} className="h-2" />
          )}
        </div>
      </CardContent>
    </Card>
  );
}

interface GroupCardProps {
  group: CommunityGroup;
  getActivityColor: (activity: string) => string;
}

function GroupCard({ group, getActivityColor }: GroupCardProps) {
  return (
    <Card className="border hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-semibold text-lg">{group.name}</h3>
            <p className="text-sm text-gray-600">{group.description}</p>
          </div>
          <Badge className={getActivityColor(group.activity)}>
            {group.activity} activité
          </Badge>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Membres:</span>
            <span className="font-medium">{group.members.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Niveau:</span>
            <span className="font-medium">{group.level}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Région:</span>
            <span className="font-medium">{group.region}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Réunion:</span>
            <span className="font-medium">{group.meetingTime}</span>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-2">Langues:</p>
          <div className="flex flex-wrap gap-1">
            {group.languages.map((language, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {language}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-2">Sujets:</p>
          <div className="flex flex-wrap gap-1">
            {group.topics.slice(0, 3).map((topic, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {topic}
              </Badge>
            ))}
            {group.topics.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{group.topics.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {group.religiousGuidance && (
          <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-700">
            ✨ Guidance religieuse incluse
          </div>
        )}

        <div className="mt-4">
          <Button className="w-full flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            Rejoindre le Groupe
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

interface SessionCardProps {
  session: ExchangeSession;
}

function SessionCard({ session }: SessionCardProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'conversation': return <MessageCircle className="h-4 w-4 text-blue-500" />;
      case 'lesson': return <BookOpen className="h-4 w-4 text-green-500" />;
      case 'cultural_exchange': return <Globe className="h-4 w-4 text-purple-500" />;
      case 'religious_discussion': return <Award className="h-4 w-4 text-orange-500" />;
      default: return <MessageCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <Card className="border hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {getTypeIcon(session.type)}
              <h3 className="font-semibold">{session.title}</h3>
            </div>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Languages className="h-4 w-4" />
                <span>{session.language1} ↔ {session.language2}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{session.participants.join(' & ')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{session.scheduledTime} ({session.duration})</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>{session.topic} - Niveau {session.level}</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Badge variant="outline" className="bg-green-50 text-green-700">
              {session.status === 'upcoming' ? 'À venir' : session.status === 'live' ? 'En cours' : 'Terminé'}
            </Badge>
            <Button size="sm" className="w-full">
              <Video className="h-4 w-4 mr-2" />
              Rejoindre
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}