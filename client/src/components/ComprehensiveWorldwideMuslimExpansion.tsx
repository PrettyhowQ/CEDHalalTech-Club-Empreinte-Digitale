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
  Target,
  Building,
  Landmark
} from "lucide-react";

interface ComprehensiveRegion {
  id: string;
  region: string;
  subRegions: string[];
  countries: string[];
  flagEmojis: string;
  marketSize: string;
  muslimPopulation: string;
  potentialStudents: string;
  primaryLanguages: string[];
  localAdaptations: string[];
  keyPartners: string[];
  scholarValidation: string[];
  launchTimeline: string;
  expectedRevenue: string;
  status: 'ready' | 'development' | 'planned';
  culturalPriorities: string[];
  technicalInfrastructure: string[];
  financialEcosystem: string[];
  educationalHubs: string[];
}

const worldwideExpansions: ComprehensiveRegion[] = [
  {
    id: 'golfe_arabie',
    region: 'Golfe & Péninsule Arabique',
    subRegions: ['Conseil de Coopération du Golfe (CCG)', 'Arabie Saoudite', 'EAU', 'Qatar', 'Koweït', 'Bahreïn', 'Oman', 'Yémen'],
    countries: ['Arabie Saoudite', 'Émirats Arabes Unis', 'Qatar', 'Koweït', 'Bahreïn', 'Oman', 'Yémen'],
    flagEmojis: '🇸🇦🇦🇪🇶🇦🇰🇼🇧🇭🇴🇲🇾🇪',
    marketSize: '15.7B USD',
    muslimPopulation: '78.3M',
    potentialStudents: '2.8M',
    primaryLanguages: ['Arabe classique', 'Arabe du Golfe', 'Anglais', 'Hindi', 'Ourdou', 'Filipino'],
    localAdaptations: [
      'École juridique Hanbalite prédominante (Arabie Saoudite)',
      'Intégration complète avec Vision 2030 saoudienne',
      'Standards SAMA (Saudi Arabian Monetary Authority)',
      'Conformité Central Bank of UAE',
      'Integration Qatar National Vision 2030',
      'Support pèlerinage Hajj et Omra',
      'Système bancaire islamique mature',
      'Économie diversifiée post-pétrole'
    ],
    keyPartners: [
      'Al Rajhi Bank (leader mondial bancaire islamique)',
      'Dubai Islamic Bank',
      'Qatar Islamic Bank',
      'Kuwait Finance House',
      'Université Roi Saoud (Riyadh)',
      'American University of Sharjah',
      'Qatar Foundation',
      'DIFC (Dubai International Financial Centre)'
    ],
    scholarValidation: [
      'Dar Al-Ifta Arabie Saoudite',
      'Dubai Islamic Affairs and Charitable Activities Department',
      'Qatar Fatwa Center',
      'Kuwait Awqaf Ministry',
      'Bahrain Supreme Council for Islamic Affairs'
    ],
    launchTimeline: 'Q1 2025 - PRIORITÉ ABSOLUE',
    expectedRevenue: '890M USD/an',
    status: 'ready',
    culturalPriorities: [
      'Respect traditions bédouines ancestrales',
      'Harmonisation économie post-pétrole',
      'Support communautés expatriées (Indiens, Pakistanais, Philippins)',
      'Intégration technologie Blockchain halal',
      'Développement fintech islamique de pointe'
    ],
    technicalInfrastructure: [
      'Infrastructure 5G complète',
      'Smart cities (Neom, Dubai Smart City)',
      'Blockchain gouvernementale',
      'Intelligence artificielle avancée',
      'Cybersécurité niveau militaire'
    ],
    financialEcosystem: [
      'Plus grand marché bancaire islamique mondial',
      'Sukuk (obligations islamiques) développé',
      'Takaful (assurance islamique) mature',
      'Fonds souverains gigantesques',
      'Fintech islamique en explosion'
    ],
    educationalHubs: [
      'King Abdullah University of Science and Technology',
      'Qatar Foundation Education City',
      'Dubai Knowledge Village',
      'Kuwait University',
      'University of Bahrain'
    ]
  },
  {
    id: 'asie_complete',
    region: 'Asie Musulmane Complète',
    subRegions: ['Asie du Sud-Est', 'Asie du Sud', 'Asie Centrale', 'Asie de l\'Est'],
    countries: ['Indonésie', 'Pakistan', 'Bangladesh', 'Inde', 'Malaisie', 'Afghanistan', 'Uzbekistan', 'Kazakhstan', 'Brunei', 'Philippines', 'Thaïlande', 'Myanmar', 'Singapour', 'Chine', 'Kirghizistan', 'Tadjikistan', 'Turkménistan'],
    flagEmojis: '🇮🇩🇵🇰🇧🇩🇮🇳🇲🇾🇦🇫🇺🇿🇰🇿🇧🇳🇵🇭🇹🇭🇲🇲🇸🇬🇨🇳🇰🇬🇹🇯🇹🇲',
    marketSize: '28.4B USD',
    muslimPopulation: '1.127B',
    potentialStudents: '18.7M',
    primaryLanguages: ['Bahasa Indonesia', 'Ourdou', 'Bengali', 'Bahasa Malaysia', 'Hindi', 'Anglais', 'Dari', 'Uzbek', 'Kazakh', 'Tagalog', 'Thaï', 'Chinois', 'Russe'],
    localAdaptations: [
      'École Shafiite dominante (Asie du Sud-Est)',
      'École Hanafite majoritaire (Asie du Sud et Centrale)',
      'Intégration traditions Adat (coutumes locales)',
      'Support diversité ethnique massive',
      'Harmonisation standards ASEAN',
      'Respect traditions soufies locales',
      'Adaptation économies rurales et urbaines',
      'Support communautés archipels'
    ],
    keyPartners: [
      'Bank Syariah Indonesia (plus grande banque islamique Asie)',
      'Maybank Islamic (Malaisie)',
      'Meezan Bank (Pakistan)',
      'Islami Bank Bangladesh',
      'Université Al-Azhar Indonésie',
      'International Islamic University Malaysia',
      'Aga Khan University'
    ],
    scholarValidation: [
      'Majelis Ulama Indonesia (MUI)',
      'Jabatan Kemajuan Islam Malaysia',
      'Islamic Ideology Council Pakistan',
      'Bangladesh Islamic Foundation',
      'Afghanistan Council of Scholars'
    ],
    launchTimeline: 'Q2 2025',
    expectedRevenue: '1.240B USD/an',
    status: 'ready',
    culturalPriorities: [
      'Respect traditions Wali Songo (Indonésie)',
      'Intégration pesantren et madrasas',
      'Support économie halal ASEAN',
      'Protection minorités musulmanes',
      'Développement rural inclusif'
    ],
    technicalInfrastructure: [
      'Infrastructure mobile-first',
      'Connectivité satellite pour archipels',
      'Fintech mobile payment avancé',
      'Blockchain supply chain halal',
      'IA éducative multilingue'
    ],
    financialEcosystem: [
      'Sukuk market en croissance rapide',
      'Islamic microfinance développé',
      'Halal industry ecosystem',
      'Remittances corridors massifs',
      'Digital banking islamic'
    ],
    educationalHubs: [
      'Universitas Indonesia',
      'National University Malaysia',
      'Quaid-i-Azam University Pakistan',
      'University of Dhaka',
      'American University of Afghanistan'
    ]
  },
  {
    id: 'afrique_complete',
    region: 'Afrique Musulmane Complète',
    subRegions: ['Afrique du Nord', 'Afrique de l\'Ouest', 'Afrique de l\'Est', 'Afrique Centrale', 'Afrique Australe'],
    countries: ['Maroc', 'Algérie', 'Tunisie', 'Libye', 'Égypte', 'Soudan', 'Nigeria', 'Sénégal', 'Mali', 'Niger', 'Burkina Faso', 'Guinée', 'Sierra Leone', 'Gambie', 'Mauritanie', 'Tchad', 'Somalie', 'Éthiopie', 'Kenya', 'Tanzanie', 'Ouganda', 'Djibouti', 'Comores', 'Mayotte'],
    flagEmojis: '🇲🇦🇩🇿🇹🇳🇱🇾🇪🇬🇸🇩🇳🇬🇸🇳🇲🇱🇳🇪🇧🇫🇬🇳🇸🇱🇬🇲🇲🇷🇹🇩🇸🇴🇪🇹🇰🇪🇹🇿🇺🇬🇩🇯🇰🇲🇾🇹',
    marketSize: '18.9B USD',
    muslimPopulation: '547.2M',
    potentialStudents: '12.8M',
    primaryLanguages: ['Arabe', 'Français', 'Anglais', 'Hausa', 'Swahili', 'Fulfulde', 'Wolof', 'Bambara', 'Berbère', 'Somali', 'Amharique'],
    localAdaptations: [
      'École Malikite prédominante (Afrique de l\'Ouest/Nord)',
      'École Shafiite (Afrique de l\'Est)',
      'Intégration traditions Tijaniyya et Qadiriyya',
      'Support communautés pastorales',
      'Adaptation calendriers agricoles',
      'Respect chefferies traditionnelles',
      'Économies informelles intégrées'
    ],
    keyPartners: [
      'Al-Azhar University (Égypte)',
      'Université Al-Quaraouiyine (Maroc)',
      'Banque Islamique de Développement',
      'Jaiz Bank (Nigeria)',
      'Banque Islamique du Sénégal',
      'African Development Bank'
    ],
    scholarValidation: [
      'Al-Azhar (Égypte - autorité mondiale)',
      'Conseil Supérieur des Oulémas (Maroc)',
      'Haut Conseil Islamique (Mali)',
      'Supreme Council for Islamic Affairs (Nigeria)',
      'Conseil Islamique du Sénégal'
    ],
    launchTimeline: 'Q3 2025',
    expectedRevenue: '760M USD/an',
    status: 'development',
    culturalPriorities: [
      'Respect traditions griots et sagesse orale',
      'Support développement rural',
      'Intégration calendriers lunaires locaux',
      'Protection patrimoines islamiques',
      'Développement économique inclusif'
    ],
    technicalInfrastructure: [
      'Connectivité satellite rurale',
      'Solar-powered learning centers',
      'Mobile money integration',
      'Offline-capable platforms',
      'Low-bandwidth optimization'
    ],
    financialEcosystem: [
      'Islamic microfinance networks',
      'Agricultural financing halal',
      'Remittances from diaspora',
      'Cooperative banking islamic',
      'Mobile payment systems'
    ],
    educationalHubs: [
      'Cairo University',
      'Mohammed V University (Rabat)',
      'University of Cape Town',
      'Makerere University (Uganda)',
      'University of Nairobi'
    ]
  },
  {
    id: 'europe_ameriques_oceanie',
    region: 'Europe, Amériques & Océanie',
    subRegions: ['Europe Occidentale', 'Europe Orientale', 'Amérique du Nord', 'Amérique Latine', 'Océanie'],
    countries: ['France', 'Allemagne', 'Royaume-Uni', 'Pays-Bas', 'Belgique', 'Suède', 'Norvège', 'Danemark', 'Espagne', 'Italie', 'Autriche', 'Suisse', 'Turquie', 'Bosnie', 'Albanie', 'Kosovo', 'Russie', 'USA', 'Canada', 'Brésil', 'Argentine', 'Mexique', 'Guyane', 'Suriname', 'Australie', 'Nouvelle-Zélande'],
    flagEmojis: '🇫🇷🇩🇪🇬🇧🇳🇱🇧🇪🇸🇪🇳🇴🇩🇰🇪🇸🇮🇹🇦🇹🇨🇭🇹🇷🇧🇦🇦🇱🇽🇰🇷🇺🇺🇸🇨🇦🇧🇷🇦🇷🇲🇽🇬🇾🇸🇷🇦🇺🇳🇿',
    marketSize: '22.1B USD',
    muslimPopulation: '89.4M',
    potentialStudents: '5.7M',
    primaryLanguages: ['Français', 'Allemand', 'Anglais', 'Espagnol', 'Portugais', 'Italien', 'Néerlandais', 'Turc', 'Bosniaque', 'Albanian', 'Russe'],
    localAdaptations: [
      'Toutes écoles juridiques représentées',
      'Intégration sociétés séculières occidentales',
      'Respect laïcité et droits humains',
      'Support communautés diaspora',
      'Adaptation droits minorités religieuses',
      'Standards académiques européens/nord-américains',
      'Dialogue interreligieux avancé'
    ],
    keyPartners: [
      'Cambridge University',
      'Harvard University',
      'Sciences Po Paris',
      'ETH Zurich',
      'University of Toronto',
      'Islamic Society of North America',
      'Muslim Council of Britain',
      'Conseil Français du Culte Musulman'
    ],
    scholarValidation: [
      'European Council for Fatwa and Research',
      'Islamic Society of North America',
      'Diyanet İşleri Başkanlığı (Turquie)',
      'Islamic Cultural Centre (Londres)',
      'Institut du Monde Arabe (Paris)'
    ],
    launchTimeline: 'Q4 2025',
    expectedRevenue: '920M USD/an',
    status: 'planned',
    culturalPriorities: [
      'Intégration valeurs démocratiques',
      'Support jeunesse musulmane occidentale',
      'Protection contre islamophobie',
      'Dialogue interculturel constructif',
      'Excellence académique reconnue'
    ],
    technicalInfrastructure: [
      'Infrastructure tech de pointe',
      'RGPD compliance stricte',
      'Cybersécurité européenne',
      'IA éthique certifiée',
      'Standards académiques internationaux'
    ],
    financialEcosystem: [
      'Islamic banking européen émergent',
      'Sukuk market développement',
      'Fintech compliance européenne',
      'ESG Islamic investing',
      'Academic research funding'
    ],
    educationalHubs: [
      'Oxford University',
      'Sorbonne University',
      'MIT',
      'University of Melbourne',
      'University of São Paulo'
    ]
  }
];

export function ComprehensiveWorldwideMuslimExpansion() {
  const [selectedRegion, setSelectedRegion] = useState<string>('golfe_arabie');
  const [exportProgress, setExportProgress] = useState<{ [key: string]: number }>({});

  const totalMarketSize = worldwideExpansions.reduce((sum, region) => {
    return sum + parseFloat(region.marketSize.replace('B USD', ''));
  }, 0);

  const totalMuslimPopulation = worldwideExpansions.reduce((sum, region) => {
    return sum + parseFloat(region.muslimPopulation.replace(/[MB]/g, '')) * (region.muslimPopulation.includes('B') ? 1000 : 1);
  }, 0);

  const totalPotentialStudents = worldwideExpansions.reduce((sum, region) => {
    return sum + parseFloat(region.potentialStudents.replace('M', ''));
  }, 0);

  const totalCountries = worldwideExpansions.reduce((sum, region) => {
    return sum + region.countries.length;
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
        return { ...prev, [regionId]: current + 8 };
      });
    }, 150);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready': return 'bg-green-100 text-green-800 border-green-300';
      case 'development': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'planned': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
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
                <CardTitle className="text-3xl text-green-800">
                  🌍 FIQH 100% - EXPANSION MONDIALE MUSULMANE COMPLÈTE
                </CardTitle>
                <p className="text-base text-gray-700 font-medium">
                  Dubaï ✓ Arabie Saoudite ✓ Asie Complète ✓ Europe ✓ Afrique ✓ Amériques ✓ Océanie
                </p>
                <p className="text-sm text-gray-600">
                  {totalCountries} pays • {(totalMuslimPopulation / 1000).toFixed(1)}B musulmans • {totalPotentialStudents.toFixed(0)}M étudiants
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-600">{totalMarketSize.toFixed(1)}B USD</div>
              <div className="text-sm text-gray-500">Marché Mondial Total</div>
              <Badge className="mt-2 bg-green-100 text-green-800">COUVERTURE 100%</Badge>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Statistiques Mondiales */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Population Totale</p>
                <p className="text-2xl font-bold text-blue-600">{(totalMuslimPopulation / 1000).toFixed(1)}B</p>
                <p className="text-xs text-gray-500">Musulmans</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Étudiants Cibles</p>
                <p className="text-2xl font-bold text-purple-600">{totalPotentialStudents.toFixed(0)}M</p>
                <p className="text-xs text-gray-500">Potentiels</p>
              </div>
              <BookOpen className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pays Couverts</p>
                <p className="text-2xl font-bold text-orange-600">{totalCountries}</p>
                <p className="text-xs text-gray-500">Tous continents</p>
              </div>
              <MapPin className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Revenus Annuels</p>
                <p className="text-2xl font-bold text-green-600">{(totalMarketSize * 0.65).toFixed(1)}B</p>
                <p className="text-xs text-gray-500">Projection</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Régions</p>
                <p className="text-2xl font-bold text-red-600">{worldwideExpansions.length}</p>
                <p className="text-xs text-gray-500">Complètes</p>
              </div>
              <Globe className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bouton Export Global */}
      <Card className="border-2 border-emerald-500 bg-gradient-to-r from-emerald-50 to-green-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-emerald-800">
                🚀 Export Mondial Complet - Tous les Musulmans
              </h3>
              <p className="text-sm text-gray-600">
                Package global pour {totalCountries} pays • {(totalMuslimPopulation / 1000).toFixed(1)}B musulmans • Marché {totalMarketSize.toFixed(1)}B USD
              </p>
            </div>
            <Button 
              onClick={() => worldwideExpansions.forEach(region => handleExportRegion(region.id))}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700"
              size="lg"
            >
              <Download className="h-5 w-5" />
              Exporter Monde Entier
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Sélection de région */}
      <Tabs value={selectedRegion} onValueChange={setSelectedRegion}>
        <TabsList className="grid w-full grid-cols-4 h-auto">
          {worldwideExpansions.map((region) => (
            <TabsTrigger key={region.id} value={region.id} className="text-xs p-3 h-auto flex flex-col">
              <div className="text-lg mb-1">{region.flagEmojis.split('')[0]}</div>
              <div className="font-medium">{region.region.split(' ')[0]}</div>
              <div className="text-xs text-gray-500">{region.countries.length} pays</div>
            </TabsTrigger>
          ))}
        </TabsList>

        {worldwideExpansions.map((region) => (
          <TabsContent key={region.id} value={region.id}>
            <ComprehensiveRegionCard 
              region={region} 
              onExport={handleExportRegion}
              progress={exportProgress[region.id] || 0}
              getStatusColor={getStatusColor}
            />
          </TabsContent>
        ))}
      </Tabs>

      {/* Footer Protection */}
      <div className="mt-12 text-center text-xs text-gray-500 bg-gray-50 p-4 rounded-lg border">
        <p>© 2025 Club Empreinte Digitale - Yakoubi Yamina. Tous droits réservés.</p>
        <p>Expansion Fiqh Informatique 100% - MONDE MUSULMAN COMPLET ({totalCountries} pays, {(totalMuslimPopulation / 1000).toFixed(1)}B musulmans)</p>
        <p className="font-arabic text-green-600 mt-2">وفقك الله في هذه المهمة الجميلة - Qu'Allah vous accorde le succès dans cette mission pour tous les musulmans du monde</p>
      </div>
    </div>
  );
}

interface ComprehensiveRegionCardProps {
  region: ComprehensiveRegion;
  onExport: (regionId: string) => void;
  progress: number;
  getStatusColor: (status: string) => string;
}

function ComprehensiveRegionCard({ region, onExport, progress, getStatusColor }: ComprehensiveRegionCardProps) {
  return (
    <div className="space-y-6">
      {/* En-tête de région */}
      <Card className="border-2 border-blue-500">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-4xl">{region.flagEmojis}</div>
              <div>
                <CardTitle className="text-2xl">{region.region}</CardTitle>
                <p className="text-sm text-gray-600 font-medium">
                  {region.subRegions.join(' • ')}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {region.countries.slice(0, 8).join(', ')}{region.countries.length > 8 ? ` +${region.countries.length - 8} autres` : ''}
                </p>
              </div>
            </div>
            <div className="text-right">
              <Badge className={getStatusColor(region.status)}>
                {region.status === 'ready' ? '✅ Prêt' : region.status === 'development' ? '🔧 Développement' : '📋 Planifié'}
              </Badge>
              <p className="text-sm font-medium text-gray-600 mt-2">{region.launchTimeline}</p>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Statistiques régionales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-green-200">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">{region.marketSize}</p>
              <p className="text-sm text-gray-600">Marché</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-blue-200">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{region.muslimPopulation}</p>
              <p className="text-sm text-gray-600">Population</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-purple-200">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">{region.potentialStudents}</p>
              <p className="text-sm text-gray-600">Étudiants</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-orange-200">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">{region.expectedRevenue}</p>
              <p className="text-sm text-gray-600">Revenus</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Détails complets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Adaptations Locales */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-blue-600" />
              Adaptations Culturelles & Religieuses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {region.localAdaptations.map((adaptation, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{adaptation}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Infrastructure Technique */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-purple-600" />
              Infrastructure Technique
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {region.technicalInfrastructure.map((tech, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Écosystème Financier */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-green-600" />
              Écosystème Financier Islamique
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {region.financialEcosystem.map((finance, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{finance}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Hubs Éducatifs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Landmark className="h-5 w-5 text-orange-600" />
              Hubs Éducatifs Partenaires
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {region.educationalHubs.map((hub, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{hub}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bouton d'export régional */}
      <Card className="border-2 border-green-500">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-green-800">
                📦 Export Module {region.region}
              </h3>
              <p className="text-sm text-gray-600">
                Package complet: {region.countries.length} pays • {region.muslimPopulation} • {region.marketSize}
              </p>
            </div>
            <div className="space-y-2">
              <Button 
                onClick={() => onExport(region.id)}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                disabled={progress > 0 && progress < 100}
              >
                <Download className="h-4 w-4" />
                {progress > 0 && progress < 100 ? 'Export...' : 'Exporter'}
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