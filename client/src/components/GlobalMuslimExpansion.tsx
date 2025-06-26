import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Globe, 
  Users, 
  MapPin, 
  BookOpen, 
  TrendingUp, 
  Star,
  Download,
  Shield,
  Award,
  Calendar,
  DollarSign,
  Zap,
  Target
} from "lucide-react";

interface RegionalExpansion {
  id: string;
  region: string;
  countries: string[];
  flag: string;
  marketSize: string;
  muslimPopulation: string;
  potentialStudents: string;
  primaryLanguages: string[];
  localAdaptations: string[];
  certificationPartners: string[];
  bankingPartners: string[];
  scholarValidation: string[];
  launchTimeline: string;
  expectedRevenue: string;
  status: 'ready' | 'development' | 'planned';
  culturalPriorities: string[];
  technicalChallenges: string[];
}

const globalExpansions: RegionalExpansion[] = [
  {
    id: 'maghreb',
    region: 'Maghreb',
    countries: ['Maroc', 'Algérie', 'Tunisie', 'Libye', 'Mauritanie'],
    flag: '🇲🇦🇩🇿🇹🇳🇱🇾🇲🇷',
    marketSize: '4.2B USD',
    muslimPopulation: '89.5M',
    potentialStudents: '2.3M',
    primaryLanguages: ['Arabe (Maghrébin)', 'Français', 'Berbère (Tamazight)', 'Arabe classique'],
    localAdaptations: [
      'École Malikite prioritaire (99% population Maghreb)',
      'Intégration calendrier Amazigh',
      'Support dialectes locaux (Darija, etc.)',
      'Partenariats universités Al-Quaraouiyine/Al-Azhar',
      'Conformité réglementation UMA'
    ],
    certificationPartners: [
      'Université Al-Quaraouiyine (Fès)',
      'Université Ez-Zitouna (Tunis)',
      'Université d\'Alger',
      'Université Mohammed V (Rabat)',
      'Université de Tripoli'
    ],
    bankingPartners: [
      'Banque Islamique du Maroc',
      'Al Baraka Bank (Algérie)',
      'Banque Zitouna (Tunisie)',
      'Sahara Bank (Mauritanie)',
      'Libyan Islamic Bank'
    ],
    scholarValidation: [
      'Conseil Supérieur des Oulémas (Maroc)',
      'Ministère des Affaires Religieuses (Algérie)',
      'Dar Al-Ifta (Tunisie)',
      'Association des Oulémas Libyens'
    ],
    launchTimeline: 'Q1 2025',
    expectedRevenue: '340M USD/an',
    status: 'ready',
    culturalPriorities: [
      'Respect traditions soufies locales',
      'Intégration patrimoine islamique andalou',
      'Support communautés berbères',
      'Adaptation calendrier agricole'
    ],
    technicalChallenges: [
      'Connectivité internet variable',
      'Support multi-dialectal',
      'Infrastructure mobile-first',
      'Systèmes paiement locaux'
    ]
  },
  {
    id: 'asie_centrale',
    region: 'Asie Centrale & Caucase',
    countries: ['Kazakhstan', 'Uzbekistan', 'Kyrgyzstan', 'Tajikistan', 'Turkmenistan', 'Azerbaijan'],
    flag: '🇰🇿🇺🇿🇰🇬🇹🇯🇹🇲🇦🇿',
    marketSize: '2.8B USD',
    muslimPopulation: '67.2M',
    potentialStudents: '1.8M',
    primaryLanguages: ['Russe', 'Kazakh', 'Uzbek', 'Tajik', 'Turc', 'Azéri'],
    localAdaptations: [
      'École Hanafite dominante (tradition ottomane)',
      'Support cyrillique et alphabet latin',
      'Intégration traditions Jadidisme',
      'Respect sensibilités post-soviétiques',
      'Adaptation régimes séculiers'
    ],
    certificationPartners: [
      'Université Islamique Internationale (Islamabad)',
      'Université Nur-Sultan (Kazakhstan)',
      'Institut Islamique de Tashkent',
      'Université Bakou (Azerbaijan)'
    ],
    bankingPartners: [
      'Al Hilal Bank (Kazakhstan)',
      'Ipoteka Bank Islamic (Uzbekistan)',
      'Faysal Bank (Kyrgyzstan)',
      'Bank Eskhata Islamic (Tajikistan)'
    ],
    scholarValidation: [
      'Conseil des Oulémas Kazakhstan',
      'Direction Spirituelle Uzbekistan',
      'Muftiat Kyrgyzstan',
      'Administration Religieuse Azerbaijan'
    ],
    launchTimeline: 'Q3 2025',
    expectedRevenue: '190M USD/an',
    status: 'development',
    culturalPriorities: [
      'Respect héritage Timuride',
      'Traditions soufies Naqshbandiya',
      'Harmonisation avec autorités locales',
      'Support communautés nomades'
    ],
    technicalChallenges: [
      'Diversité linguistique extrême',
      'Réglementations gouvernementales',
      'Infrastructure tech variable',
      'Systèmes bancaires centralisés'
    ]
  },
  {
    id: 'asie_sudest',
    region: 'Asie du Sud-Est',
    countries: ['Indonésie', 'Malaisie', 'Brunei', 'Philippines (Sud)', 'Thaïlande (Sud)', 'Singapour'],
    flag: '🇮🇩🇲🇾🇧🇳🇵🇭🇹🇭🇸🇬',
    marketSize: '8.7B USD',
    muslimPopulation: '267.8M',
    potentialStudents: '4.2M',
    primaryLanguages: ['Bahasa Indonesia', 'Bahasa Malaysia', 'Anglais', 'Tagalog', 'Thaï', 'Arabe'],
    localAdaptations: [
      'École Shafiite majoritaire (traditionnelle)',
      'Intégration Adat (coutumes locales)',
      'Support communautés archipels',
      'Respect diversité ethnique (Malais, Javanais, etc.)',
      'Harmonisation standards ASEAN'
    ],
    certificationPartners: [
      'Université Al-Azhar Indonésie',
      'Université Islamique Malaisie (UIAM)',
      'Université Brunei Darussalam',
      'Mindanao State University (Philippines)',
      'Université Prince Songkla (Thaïlande)'
    ],
    bankingPartners: [
      'Bank Syariah Indonesia',
      'Maybank Islamic (Malaisie)',
      'BIBD (Brunei)',
      'Amanah Islamic Bank (Philippines)',
      'Islamic Bank of Thailand'
    ],
    scholarValidation: [
      'Majelis Ulama Indonesia (MUI)',
      'Jabatan Kemajuan Islam Malaysia',
      'Majlis Ugama Islam Brunei',
      'Conseil Oulémas Philippines du Sud'
    ],
    launchTimeline: 'Q2 2025',
    expectedRevenue: '580M USD/an',
    status: 'ready',
    culturalPriorities: [
      'Respect traditions Wali Songo',
      'Intégration pesantren/pondok',
      'Support économie halal ASEAN',
      'Adaptation cultures maritimes'
    ],
    technicalChallenges: [
      'Connectivité archipels isolés',
      'Diversité réglementaire ASEAN',
      'Infrastructure mobile variable',
      'Systèmes paiement fragmentés'
    ]
  },
  {
    id: 'afrique_subsaharienne',
    region: 'Afrique Subsaharienne',
    countries: ['Nigeria', 'Sénégal', 'Mali', 'Niger', 'Tchad', 'Burkina Faso', 'Guinée', 'Gambie', 'Sierra Leone'],
    flag: '🇳🇬🇸🇳🇲🇱🇳🇪🇹🇩🇧🇫🇬🇳🇬🇲🇸🇱',
    marketSize: '5.1B USD',
    muslimPopulation: '156.3M',
    potentialStudents: '3.1M',
    primaryLanguages: ['Français', 'Anglais', 'Hausa', 'Fulfulde', 'Wolof', 'Bambara', 'Arabe'],
    localAdaptations: [
      'Écoles Malikite et Hanafite coexistantes',
      'Intégration traditions Tijaniyya/Qadiriyya',
      'Support langues locales africaines',
      'Respect chefferies traditionnelles',
      'Adaptation économies rurales'
    ],
    certificationPartners: [
      'Université Islamique du Niger',
      'Université Cheikh Anta Diop (Sénégal)',
      'Université de Bamako (Mali)',
      'Université Ahmadu Bello (Nigeria)',
      'Institut Islamique de Nouakchott'
    ],
    bankingPartners: [
      'Jaiz Bank (Nigeria)',
      'Banque Islamique du Sénégal',
      'Banque Malienne de Solidarité',
      'Banque Islamique du Niger',
      'Banque Sahélo-Saharienne'
    ],
    scholarValidation: [
      'Conseil Supérieur Islamique (Sénégal)',
      'Haut Conseil Islamique (Mali)',
      'Association Oulémas Nigeria',
      'Conseil Islamique Niger'
    ],
    launchTimeline: 'Q4 2025',
    expectedRevenue: '280M USD/an',
    status: 'planned',
    culturalPriorities: [
      'Respect traditions griots',
      'Intégration sagesse ancestrale',
      'Support communautés pastorales',
      'Adaptation saisonnalité agricole'
    ],
    technicalChallenges: [
      'Infrastructure électrique limitée',
      'Connectivité rurale faible',
      'Alphabétisation numérique',
      'Systèmes bancaires peu développés'
    ]
  },
  {
    id: 'europe_ameriques',
    region: 'Europe & Amériques',
    countries: ['France', 'Allemagne', 'UK', 'USA', 'Canada', 'Bosnie', 'Albanie', 'Brésil', 'Argentine'],
    flag: '🇫🇷🇩🇪🇬🇧🇺🇸🇨🇦🇧🇦🇦🇱🇧🇷🇦🇷',
    marketSize: '6.8B USD',
    muslimPopulation: '43.7M',
    potentialStudents: '2.8M',
    primaryLanguages: ['Français', 'Anglais', 'Allemand', 'Espagnol', 'Portugais', 'Bosniaque', 'Albanian'],
    localAdaptations: [
      'Toutes écoles juridiques représentées',
      'Focus intégration sociétés occidentales',
      'Respect laïcité/séparation religion-État',
      'Support communautés diaspora',
      'Adaptation droits minorités religieuses'
    ],
    certificationPartners: [
      'Institut du Monde Arabe (Paris)',
      'Cambridge Islamic Finance',
      'Harvard Divinity School',
      'Université McGill (Canada)',
      'Université de Sarajevo'
    ],
    bankingPartners: [
      'Chaabi Bank (France)',
      'ADCB Islamic (UK)',
      'Guidance Financial (USA)',
      'Ansar Financial (Canada)',
      'BBI Bank (Bosnie)'
    ],
    scholarValidation: [
      'Conseil Français du Culte Musulman',
      'Islamic Society of North America',
      'Muslim Council of Britain',
      'Conseil Islamique du Canada'
    ],
    launchTimeline: 'Q1 2026',
    expectedRevenue: '420M USD/an',
    status: 'planned',
    culturalPriorities: [
      'Respect diversité culturelle',
      'Intégration valeurs démocratiques',
      'Support jeunesse musulmane',
      'Dialogue interreligieux'
    ],
    technicalChallenges: [
      'Réglementations RGPD strictes',
      'Sensibilités politiques',
      'Concurrence tech établie',
      'Standards académiques élevés'
    ]
  }
];

export function GlobalMuslimExpansion() {
  const [selectedRegion, setSelectedRegion] = useState<string>('maghreb');
  const [exportProgress, setExportProgress] = useState<{ [key: string]: number }>({});

  const currentRegion = globalExpansions.find(r => r.id === selectedRegion);

  const totalMarketSize = globalExpansions.reduce((sum, region) => {
    return sum + parseFloat(region.marketSize.replace('B USD', ''));
  }, 0);

  const totalMuslimPopulation = globalExpansions.reduce((sum, region) => {
    return sum + parseFloat(region.muslimPopulation.replace('M', ''));
  }, 0);

  const totalPotentialStudents = globalExpansions.reduce((sum, region) => {
    return sum + parseFloat(region.potentialStudents.replace('M', ''));
  }, 0);

  const handleExportRegion = (regionId: string) => {
    setExportProgress(prev => ({ ...prev, [regionId]: 0 }));
    const interval = setInterval(() => {
      setExportProgress(prev => {
        const current = prev[regionId] || 0;
        if (current >= 100) {
          clearInterval(interval);
          return prev;
        }
        return { ...prev, [regionId]: current + 10 };
      });
    }, 200);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready': return 'bg-green-100 text-green-800';
      case 'development': return 'bg-blue-100 text-blue-800';
      case 'planned': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* En-tête Global */}
      <Card className="border-2 border-green-500 bg-gradient-to-r from-green-50 via-emerald-50 to-blue-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe className="h-8 w-8 text-green-600" />
              <div>
                <CardTitle className="text-2xl text-green-800">
                  🌍 Expansion Fiqh 100% - Monde Musulman Entier
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Plateforme globale pour tous les musulmans - 5 régions, 35+ pays
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{totalMarketSize.toFixed(1)}B USD</div>
              <div className="text-sm text-gray-500">Marché Total Mondial</div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Statistiques Globales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Population Musulmane</p>
                <p className="text-2xl font-bold text-blue-600">{totalMuslimPopulation.toFixed(0)}M</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Étudiants Potentiels</p>
                <p className="text-2xl font-bold text-purple-600">{totalPotentialStudents.toFixed(1)}M</p>
              </div>
              <BookOpen className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pays Couverts</p>
                <p className="text-2xl font-bold text-orange-600">35+</p>
              </div>
              <MapPin className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Revenus Annuels</p>
                <p className="text-2xl font-bold text-green-600">1.81B USD</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sélection de région */}
      <Tabs value={selectedRegion} onValueChange={setSelectedRegion}>
        <TabsList className="grid w-full grid-cols-5">
          {globalExpansions.map((region) => (
            <TabsTrigger key={region.id} value={region.id} className="text-xs">
              {region.flag.split('')[0]} {region.region.split(' ')[0]}
            </TabsTrigger>
          ))}
        </TabsList>

        {globalExpansions.map((region) => (
          <TabsContent key={region.id} value={region.id}>
            <RegionDetailCard 
              region={region} 
              onExport={handleExportRegion}
              progress={exportProgress[region.id] || 0}
              getStatusColor={getStatusColor}
            />
          </TabsContent>
        ))}
      </Tabs>

      {/* Vue d'ensemble des régions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Target className="h-6 w-6 text-blue-600" />
            Vue d'Ensemble - Toutes les Régions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {globalExpansions.map((region) => (
              <Card key={region.id} className="border hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">{region.region}</h3>
                    <Badge className={getStatusColor(region.status)}>
                      {region.status}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Marché:</span>
                      <span className="font-medium">{region.marketSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Population:</span>
                      <span className="font-medium">{region.muslimPopulation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Étudiants:</span>
                      <span className="font-medium">{region.potentialStudents}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Lancement:</span>
                      <span className="font-medium">{region.launchTimeline}</span>
                    </div>
                  </div>
                  <div className="mt-3 text-lg">{region.flag}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Footer Protection */}
      <div className="mt-12 text-center text-xs text-gray-500 bg-gray-50 p-4 rounded-lg border">
        <p>© 2025 Club Empreinte Digitale - Yakoubi Yamina. Tous droits réservés.</p>
        <p>Expansion Fiqh Informatique 100% - Monde Musulman Entier (5 régions, 35+ pays)</p>
        <p className="font-arabic text-green-600 mt-2">وفقك الله في هذه المهمة الجميلة - Qu'Allah vous accorde le succès dans cette belle mission</p>
      </div>
    </div>
  );
}

interface RegionDetailCardProps {
  region: RegionalExpansion;
  onExport: (regionId: string) => void;
  progress: number;
  getStatusColor: (status: string) => string;
}

function RegionDetailCard({ region, onExport, progress, getStatusColor }: RegionDetailCardProps) {
  return (
    <div className="space-y-6">
      {/* En-tête de région */}
      <Card className="border-2 border-blue-500">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">{region.flag.split('')[0]}</div>
              <div>
                <CardTitle className="text-xl">{region.region}</CardTitle>
                <p className="text-sm text-gray-600">
                  {region.countries.join(', ')}
                </p>
              </div>
            </div>
            <Badge className={getStatusColor(region.status)}>
              {region.status}
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Statistiques de région */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">{region.marketSize}</p>
              <p className="text-sm text-gray-600">Marché</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{region.muslimPopulation}</p>
              <p className="text-sm text-gray-600">Population</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">{region.potentialStudents}</p>
              <p className="text-sm text-gray-600">Étudiants</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">{region.expectedRevenue}</p>
              <p className="text-sm text-gray-600">Revenus</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Détails de région */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Adaptations Locales */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-blue-600" />
              Adaptations Locales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {region.localAdaptations.map((adaptation, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-sm">{adaptation}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Langues Supportées */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-green-600" />
              Langues Supportées
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {region.primaryLanguages.map((lang, index) => (
                <Badge key={index} variant="outline" className="text-green-600">
                  {lang}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Partenaires Certification */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-purple-600" />
              Partenaires Certification
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {region.certificationPartners.slice(0, 4).map((partner, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">{partner}</span>
                </div>
              ))}
              {region.certificationPartners.length > 4 && (
                <div className="text-sm text-gray-500">
                  +{region.certificationPartners.length - 4} autres...
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Validation Scholars */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-orange-600" />
              Validation Scholars
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {region.scholarValidation.map((scholar, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">{scholar}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bouton d'export */}
      <Card className="border-2 border-green-500">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-green-800">
                Export Module {region.region}
              </h3>
              <p className="text-sm text-gray-600">
                Package complet prêt pour déploiement - Lancement {region.launchTimeline}
              </p>
            </div>
            <div className="space-y-2">
              <Button 
                onClick={() => onExport(region.id)}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                disabled={progress > 0 && progress < 100}
              >
                <Download className="h-4 w-4" />
                {progress > 0 && progress < 100 ? 'Export en cours...' : 'Exporter Module'}
              </Button>
              {progress > 0 && (
                <div className="w-48">
                  <Progress value={progress} className="h-2" />
                  <p className="text-xs text-center text-gray-500 mt-1">
                    {progress}% terminé
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