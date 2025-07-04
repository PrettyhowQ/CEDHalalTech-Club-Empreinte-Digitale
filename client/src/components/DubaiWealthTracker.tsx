import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import { 
  Crown,
  Building2,
  TrendingUp,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  Users,
  MapPin,
  Star,
  CheckCircle,
  Clock,
  AlertTriangle,
  Target,
  BarChart3,
  Handshake,
  Eye
} from 'lucide-react';

interface WealthyIndividual {
  id: string;
  rank: number;
  name: string;
  fortune: {
    min: number;
    max: number;
    currency: string;
  };
  sectors: string[];
  location: string;
  projects: string[];
  contactStatus: 'none' | 'initial' | 'active' | 'donor' | 'partner';
  potential: 'low' | 'medium' | 'high' | 'very_high';
  lastContact: Date | null;
  donations: {
    total: number;
    projects: number;
    lastDonation: Date | null;
  };
  influence: {
    localImpact: number;
    internationalReach: number;
    mediaPresence: number;
  };
  preferences: {
    causes: string[];
    communicationStyle: string;
    timezone: string;
  };
  notes: string[];
}

export function DubaiWealthTracker() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('fortune');
  const [showDetails, setShowDetails] = useState<string | null>(null);

  const wealthyIndividuals: WealthyIndividual[] = [
    {
      id: 'pavel-durov',
      rank: 1,
      name: 'Pavel Durov',
      fortune: { min: 15.5, max: 17, currency: 'USD' },
      sectors: ['Technologie', 'Telegram', 'Crypto', 'Innovation'],
      location: 'Dubaï Business Bay',
      projects: ['Résidence privée', 'Investissements crypto', 'Tech startups'],
      contactStatus: 'none',
      potential: 'very_high',
      lastContact: null,
      donations: { total: 0, projects: 0, lastDonation: null },
      influence: { localImpact: 85, internationalReach: 95, mediaPresence: 90 },
      preferences: {
        causes: ['Innovation technologique', 'Liberté d\'expression', 'Crypto éducation'],
        communicationStyle: 'Direct, orienté tech',
        timezone: 'GMT+4'
      },
      notes: [
        'Forte influence internationale via Telegram',
        'Intérêt pour projets tech disruptifs',
        'Approche via écosystème crypto recommandée'
      ]
    },
    {
      id: 'hussain-sajwani',
      rank: 2,
      name: 'Hussain Sajwani',
      fortune: { min: 10.2, max: 10.2, currency: 'USD' },
      sectors: ['Immobilier', 'DAMAC Properties', 'Luxury development'],
      location: 'Dubaï Marina',
      projects: ['DAMAC Hills', 'Aykon City', 'Luxury towers'],
      contactStatus: 'initial',
      potential: 'very_high',
      lastContact: new Date('2024-12-15'),
      donations: { total: 0, projects: 0, lastDonation: null },
      influence: { localImpact: 95, internationalReach: 75, mediaPresence: 80 },
      preferences: {
        causes: ['Développement urbain', 'Logement social', 'Architecture durable'],
        communicationStyle: 'Formel, focus business',
        timezone: 'GMT+4'
      },
      notes: [
        'Contact initial établi via réseau immobilier',
        'Intérêt confirmé pour projets de logement social',
        'Possible partenariat DAMAC x CED'
      ]
    },
    {
      id: 'majid-al-futtaim',
      rank: 3,
      name: 'Majid Al Futtaim',
      fortune: { min: 4, max: 6.2, currency: 'USD' },
      sectors: ['Retail', 'Centres commerciaux', 'Hôtellerie'],
      location: 'Dubaï Hills',
      projects: ['Mall of the Emirates', 'Carrefour ME', 'Hôtels premium'],
      contactStatus: 'none',
      potential: 'high',
      lastContact: null,
      donations: { total: 0, projects: 0, lastDonation: null },
      influence: { localImpact: 90, internationalReach: 70, mediaPresence: 75 },
      preferences: {
        causes: ['Commerce éthique', 'Communautés locales', 'Durabilité'],
        communicationStyle: 'Traditionnel, approche familiale',
        timezone: 'GMT+4'
      },
      notes: [
        'Réseau retail considérable aux EAU',
        'Approche via responsabilité sociale corporate',
        'Focus sur impact communautaire'
      ]
    },
    {
      id: 'yusuf-ali',
      rank: 4,
      name: 'Yusuf Ali M.A.',
      fortune: { min: 5.5, max: 6.6, currency: 'USD' },
      sectors: ['Retail', 'LuLu Group', 'Distribution'],
      location: 'Abu Dhabi / Dubaï',
      projects: ['LuLu Hypermarkets', 'Logistique', 'Hôtellerie'],
      contactStatus: 'active',
      potential: 'high',
      lastContact: new Date('2024-12-20'),
      donations: { total: 0, projects: 0, lastDonation: null },
      influence: { localImpact: 85, internationalReach: 65, mediaPresence: 60 },
      preferences: {
        causes: ['Sécurité alimentaire', 'Logistique humanitaire', 'Commerce équitable'],
        communicationStyle: 'Pragmatique, orienté résultats',
        timezone: 'GMT+4'
      },
      notes: [
        'Contact initié via réseau Abu Dhabi',
        'Intérêt pour projets logistique sociale',
        'Potentiel partenariat distribution'
      ]
    },
    {
      id: 'micky-jagtiani',
      rank: 5,
      name: 'Micky Jagtiani',
      fortune: { min: 4, max: 5.2, currency: 'USD' },
      sectors: ['Retail', 'Landmark Group', 'Fashion'],
      location: 'Dubaï Downtown',
      projects: ['Lifestyle Holdings', 'Max Fashion', 'Hôtels'],
      contactStatus: 'none',
      potential: 'medium',
      lastContact: null,
      donations: { total: 0, projects: 0, lastDonation: null },
      influence: { localImpact: 75, internationalReach: 60, mediaPresence: 55 },
      preferences: {
        causes: ['Mode éthique', 'Emploi féminin', 'Microfinance'],
        communicationStyle: 'Informel, focus social',
        timezone: 'GMT+4'
      },
      notes: [
        'Réseau retail mode et lifestyle',
        'Approche via responsabilité sociale',
        'Potentiel diversification secteurs'
      ]
    },
    {
      id: 'abdulla-al-futtaim',
      rank: 6,
      name: 'Abdulla Al Futtaim',
      fortune: { min: 3.3, max: 4.7, currency: 'USD' },
      sectors: ['Automobile', 'Immobilier', 'Services'],
      location: 'Dubaï Business District',
      projects: ['Al-Futtaim Motors', 'Centres commerciaux', 'Services'],
      contactStatus: 'donor',
      potential: 'very_high',
      lastContact: new Date('2024-12-18'),
      donations: { total: 250000, projects: 1, lastDonation: new Date('2024-12-18') },
      influence: { localImpact: 90, internationalReach: 65, mediaPresence: 70 },
      preferences: {
        causes: ['Mobilité durable', 'Infrastructure', 'Éducation technique'],
        communicationStyle: 'Professionnel, orienté impact',
        timezone: 'GMT+4'
      },
      notes: [
        'Premier don reçu - 250k USD',
        'Relation établie et positive',
        'Potentiel pour donations récurrentes'
      ]
    },
    {
      id: 'sunny-varkey',
      rank: 7,
      name: 'Sunny Varkey',
      fortune: { min: 3.8, max: 4, currency: 'USD' },
      sectors: ['Éducation', 'GEMS Education', 'Philanthropie'],
      location: 'Dubaï Knowledge Village',
      projects: ['Écoles GEMS', 'Campus privés', 'Formations'],
      contactStatus: 'partner',
      potential: 'very_high',
      lastContact: new Date('2024-12-22'),
      donations: { total: 500000, projects: 3, lastDonation: new Date('2024-12-20') },
      influence: { localImpact: 80, internationalReach: 85, mediaPresence: 75 },
      preferences: {
        causes: ['Éducation', 'Logement étudiant', 'Formation professionnelle'],
        communicationStyle: 'Éducatif, orienté impact social',
        timezone: 'GMT+4'
      },
      notes: [
        'Mécène actif - 500k USD total',
        'Partenaire stratégique confirmé',
        'Focus sur projets éducation/logement'
      ]
    }
  ];

  const formatFortune = (fortune: { min: number; max: number; currency: string }) => {
    if (fortune.min === fortune.max) {
      return `${fortune.min} Mds ${fortune.currency}`;
    }
    return `${fortune.min} - ${fortune.max} Mds ${fortune.currency}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'none': return 'bg-gray-100 text-gray-800';
      case 'initial': return 'bg-yellow-100 text-yellow-800';
      case 'active': return 'bg-blue-100 text-blue-800';
      case 'donor': return 'bg-green-100 text-green-800';
      case 'partner': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'none': return AlertTriangle;
      case 'initial': return Clock;
      case 'active': return Phone;
      case 'donor': return CheckCircle;
      case 'partner': return Handshake;
      default: return AlertTriangle;
    }
  };

  const getPotentialColor = (potential: string) => {
    switch (potential) {
      case 'low': return 'text-gray-500';
      case 'medium': return 'text-yellow-600';
      case 'high': return 'text-blue-600';
      case 'very_high': return 'text-green-600';
      default: return 'text-gray-500';
    }
  };

  const filteredIndividuals = wealthyIndividuals.filter(individual => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'prospects') return individual.contactStatus === 'none';
    if (selectedFilter === 'active') return ['initial', 'active'].includes(individual.contactStatus);
    if (selectedFilter === 'donors') return ['donor', 'partner'].includes(individual.contactStatus);
    return true;
  });

  const sortedIndividuals = [...filteredIndividuals].sort((a, b) => {
    switch (sortBy) {
      case 'fortune':
        return b.fortune.max - a.fortune.max;
      case 'potential':
        const potentialOrder = { 'very_high': 4, 'high': 3, 'medium': 2, 'low': 1 };
        return potentialOrder[b.potential] - potentialOrder[a.potential];
      case 'status':
        const statusOrder = { 'partner': 5, 'donor': 4, 'active': 3, 'initial': 2, 'none': 1 };
        return statusOrder[b.contactStatus] - statusOrder[a.contactStatus];
      default:
        return a.rank - b.rank;
    }
  });

  const totalFortune = wealthyIndividuals.reduce((sum, individual) => sum + individual.fortune.max, 0);
  const totalDonations = wealthyIndividuals.reduce((sum, individual) => sum + individual.donations.total, 0);
  const activeContacts = wealthyIndividuals.filter(i => i.contactStatus !== 'none').length;

  return (
    <div className="space-y-6">
      {/* Statistiques générales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Crown className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Fortune Totale</p>
                <p className="text-2xl font-bold">{totalFortune.toFixed(1)} Mds USD</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Donations Reçues</p>
                <p className="text-2xl font-bold">${(totalDonations / 1000).toFixed(0)}K</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Contacts Actifs</p>
                <p className="text-2xl font-bold">{activeContacts}/{wealthyIndividuals.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Taux Conversion</p>
                <p className="text-2xl font-bold">{((activeContacts / wealthyIndividuals.length) * 100).toFixed(0)}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filtres et tri */}
      <div className="flex flex-wrap gap-4 items-center">
        <Select value={selectedFilter} onValueChange={setSelectedFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filtrer par statut" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les contacts</SelectItem>
            <SelectItem value="prospects">À prospecter</SelectItem>
            <SelectItem value="active">Contacts actifs</SelectItem>
            <SelectItem value="donors">Donateurs/Partenaires</SelectItem>
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Trier par" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fortune">Fortune</SelectItem>
            <SelectItem value="potential">Potentiel</SelectItem>
            <SelectItem value="status">Statut contact</SelectItem>
            <SelectItem value="rank">Rang</SelectItem>
          </SelectContent>
        </Select>

        <Badge className="bg-blue-100 text-blue-800">
          {sortedIndividuals.length} profils
        </Badge>
      </div>

      {/* Liste des fortunés */}
      <div className="space-y-4">
        {sortedIndividuals.map((individual) => {
          const StatusIcon = getStatusIcon(individual.contactStatus);
          return (
            <motion.div
              key={individual.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Rang */}
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                        {individual.rank}
                      </div>

                      {/* Informations principales */}
                      <div>
                        <h3 className="text-xl font-bold">{individual.name}</h3>
                        <p className="text-lg text-green-600 font-semibold">
                          {formatFortune(individual.fortune)}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{individual.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Statut de contact */}
                      <div className="text-center">
                        <Badge className={getStatusColor(individual.contactStatus)}>
                          <StatusIcon className="h-4 w-4 mr-1" />
                          {individual.contactStatus === 'none' ? 'À prospecter' :
                           individual.contactStatus === 'initial' ? 'Contact initial' :
                           individual.contactStatus === 'active' ? 'Contact actif' :
                           individual.contactStatus === 'donor' ? 'Donateur' : 'Partenaire'}
                        </Badge>
                        {individual.lastContact && (
                          <p className="text-xs text-gray-500 mt-1">
                            Dernier contact: {individual.lastContact.toLocaleDateString('fr-FR')}
                          </p>
                        )}
                      </div>

                      {/* Potentiel */}
                      <div className="text-center">
                        <div className={`flex items-center gap-1 ${getPotentialColor(individual.potential)}`}>
                          <Target className="h-4 w-4" />
                          <span className="font-medium">
                            {individual.potential === 'very_high' ? 'Très élevé' :
                             individual.potential === 'high' ? 'Élevé' :
                             individual.potential === 'medium' ? 'Moyen' : 'Faible'}
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowDetails(showDetails === individual.id ? null : individual.id)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Détails
                      </Button>
                    </div>
                  </div>

                  {/* Secteurs */}
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {individual.sectors.map((sector, index) => (
                        <Badge key={index} variant="secondary">
                          {sector}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Donations si applicable */}
                  {individual.donations.total > 0 && (
                    <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-green-700">
                          Total donations: ${individual.donations.total.toLocaleString()}
                        </span>
                        <span className="text-sm text-green-700">
                          {individual.donations.projects} projet(s) financé(s)
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Détails expandables */}
                  {showDetails === individual.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t"
                    >
                      <Tabs defaultValue="projects" className="space-y-4">
                        <TabsList>
                          <TabsTrigger value="projects">Projets</TabsTrigger>
                          <TabsTrigger value="influence">Influence</TabsTrigger>
                          <TabsTrigger value="preferences">Préférences</TabsTrigger>
                          <TabsTrigger value="notes">Notes</TabsTrigger>
                        </TabsList>

                        <TabsContent value="projects">
                          <div className="space-y-2">
                            {individual.projects.map((project, index) => (
                              <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                                <Building2 className="h-4 w-4 text-blue-600" />
                                <span>{project}</span>
                              </div>
                            ))}
                          </div>
                        </TabsContent>

                        <TabsContent value="influence">
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm">Impact Local</span>
                                <span className="text-sm font-medium">{individual.influence.localImpact}%</span>
                              </div>
                              <Progress value={individual.influence.localImpact} />
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm">Portée Internationale</span>
                                <span className="text-sm font-medium">{individual.influence.internationalReach}%</span>
                              </div>
                              <Progress value={individual.influence.internationalReach} />
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm">Présence Médiatique</span>
                                <span className="text-sm font-medium">{individual.influence.mediaPresence}%</span>
                              </div>
                              <Progress value={individual.influence.mediaPresence} />
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="preferences">
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium mb-2">Causes préférées</h4>
                              <div className="flex flex-wrap gap-2">
                                {individual.preferences.causes.map((cause, index) => (
                                  <Badge key={index} className="bg-blue-100 text-blue-800">
                                    {cause}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Style de communication</h4>
                              <p className="text-sm text-gray-600">{individual.preferences.communicationStyle}</p>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Fuseau horaire</h4>
                              <p className="text-sm text-gray-600">{individual.preferences.timezone}</p>
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="notes">
                          <div className="space-y-2">
                            {individual.notes.map((note, index) => (
                              <div key={index} className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                                <p className="text-sm">{note}</p>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                      </Tabs>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}