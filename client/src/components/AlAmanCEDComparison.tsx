import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Star,
  Globe,
  Building2,
  DollarSign,
  CheckCircle,
  X,
  TrendingUp,
  Users,
  Phone,
  Mail,
  MapPin,
  Award,
  Clock,
  Target
} from 'lucide-react';

interface InsuranceCompany {
  id: string;
  name: string;
  type: 'conventional' | 'takaful' | 'hybrid';
  headquarters: string;
  founded: number;
  assets: number; // en millions USD
  marketShare: number; // en %
  rating: number;
  customers: number;
  products: string[];
  strengths: string[];
  weaknesses: string[];
  islamicCompliance: boolean;
  globalPresence: string[];
  digitalFeatures: string[];
  color: string;
  logo?: string;
}

export function AlAmanCEDComparison() {
  const [selectedTab, setSelectedTab] = useState('dubai-market');

  const dubaiInsuranceMarket: InsuranceCompany[] = [
    {
      id: 'alaman-ced',
      name: 'Al-Aman CED Takaful International',
      type: 'takaful',
      headquarters: 'Genève, Suisse / Hub Dubai',
      founded: 2025,
      assets: 2500, // millions USD
      marketShare: 0.1, // nouveau entrant
      rating: 4.9,
      customers: 847293,
      products: [
        'Auto Protection Takaful',
        'Home Secure Takaful', 
        'Health Family Takaful',
        'Travel & Hajj Protection',
        'Business Halal Pro',
        'Life Family Protection'
      ],
      strengths: [
        'Écosystème intégré CED Bank + Formation',
        'Takaful 100% conforme Charia',
        'Technologie blockchain avancée',
        'Support multilingue 8 langues',
        'Paiement 0% intérêt CED Bank',
        'IA éthique pour évaluation risques',
        'Réseau TechForAll solidaire'
      ],
      weaknesses: [
        'Nouveau sur marché Dubai',
        'Base clients à développer localement',
        'Besoin reconnaissance autorités locales'
      ],
      islamicCompliance: true,
      globalPresence: ['Suisse', 'UAE', 'France', 'Allemagne', 'Espagne'],
      digitalFeatures: [
        'App mobile CED Bank intégrée',
        'IA prédictive sinistres',
        'Blockchain pour transparence',
        'Mode prière automatique',
        'Qibla compass intégré'
      ],
      color: 'from-green-500 to-blue-600'
    },
    {
      id: 'salama-insurance',
      name: 'Salama Islamic Arab Insurance',
      type: 'takaful',
      headquarters: 'Dubai, UAE',
      founded: 1979,
      assets: 1200,
      marketShare: 8.5,
      rating: 4.3,
      customers: 2500000,
      products: [
        'Motor Takaful',
        'Property Insurance',
        'Marine Insurance',
        'Engineering Insurance',
        'Health Insurance'
      ],
      strengths: [
        '45+ ans expérience marché',
        'Leader assurance islamique UAE',
        'Réseau distribution étendu',
        'Reconnaissance autorités locales',
        'Expertise secteur maritime'
      ],
      weaknesses: [
        'Technologie moins avancée',
        'Écosystème services limité',
        'Support multilingue restreint',
        'Pas d\'intégration bancaire',
        'Interface utilisateur datée'
      ],
      islamicCompliance: true,
      globalPresence: ['UAE', 'Oman', 'Qatar', 'Kuwait'],
      digitalFeatures: [
        'Site web basique',
        'App mobile simple',
        'E-policy delivery'
      ],
      color: 'from-blue-500 to-teal-600'
    },
    {
      id: 'axa-gulf',
      name: 'AXA Gulf Insurance',
      type: 'conventional',
      headquarters: 'Dubai, UAE',
      founded: 1980,
      assets: 3500,
      marketShare: 12.3,
      rating: 4.1,
      customers: 3200000,
      products: [
        'Motor Insurance',
        'Health Insurance',
        'Travel Insurance',
        'Property Insurance',
        'Life Insurance'
      ],
      strengths: [
        'Marque internationale reconnue',
        'Large gamme produits',
        'Réseau global AXA',
        'Capacité financière élevée',
        'Expertise actuarielle'
      ],
      weaknesses: [
        'Non conforme Charia',
        'Approche conventionnelle',
        'Pas de produits Takaful',
        'Frais et intérêts appliqués',
        'Moins adapté clientèle musulmane'
      ],
      islamicCompliance: false,
      globalPresence: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain'],
      digitalFeatures: [
        'App mobile complète',
        'Portail client online',
        'Chat support',
        'E-claims'
      ],
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'dubai-insurance',
      name: 'Dubai Insurance Company',
      type: 'hybrid',
      headquarters: 'Dubai, UAE',
      founded: 1970,
      assets: 2800,
      marketShare: 15.7,
      rating: 4.2,
      customers: 1800000,
      products: [
        'Motor Insurance',
        'Medical Insurance', 
        'Property Insurance',
        'Marine Insurance',
        'Takaful Products'
      ],
      strengths: [
        'Leader historique marché UAE',
        'Forte présence locale',
        'Produits conventionnels + Takaful',
        'Partenariats gouvernementaux',
        'Connaissance marché local'
      ],
      weaknesses: [
        'Approche hybride moins pure',
        'Technologie à moderniser',
        'Processus parfois lents',
        'Conformité Charia partielle',
        'Écosystème services inexistant'
      ],
      islamicCompliance: true,
      globalPresence: ['UAE', 'Oman'],
      digitalFeatures: [
        'Site web standard',
        'App mobile basique',
        'Online quotes'
      ],
      color: 'from-orange-500 to-amber-600'
    },
    {
      id: 'abu-dhabi-national',
      name: 'Abu Dhabi National Takaful',
      type: 'takaful',
      headquarters: 'Abu Dhabi, UAE',
      founded: 2006,
      assets: 800,
      marketShare: 5.2,
      rating: 4.0,
      customers: 950000,
      products: [
        'Family Takaful',
        'General Takaful',
        'Motor Takaful',
        'Health Takaful',
        'Travel Takaful'
      ],
      strengths: [
        'Spécialisation Takaful pure',
        'Support gouvernement Abu Dhabi',
        'Croissance rapide',
        'Innovation produits islamiques',
        'Équipe Charia dédiée'
      ],
      weaknesses: [
        'Taille encore limitée',
        'Présence régionale restreinte',
        'Technologie en développement',
        'Gamme produits à étendre',
        'Notoriété à construire'
      ],
      islamicCompliance: true,
      globalPresence: ['UAE'],
      digitalFeatures: [
        'App mobile récente',
        'Portal client',
        'Digital onboarding'
      ],
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount * 1000000);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const getComplianceIcon = (compliant: boolean) => {
    return compliant ? 
      <CheckCircle className="h-5 w-5 text-green-500" /> : 
      <X className="h-5 w-5 text-red-500" />;
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'takaful': return 'bg-green-100 text-green-800';
      case 'conventional': return 'bg-red-100 text-red-800';
      case 'hybrid': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="flex justify-center items-center gap-4">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 flex items-center justify-center"
            >
              <Target className="h-10 w-10 text-white" />
            </motion.div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
                Analyse Concurrentielle
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700">
                Al-Aman CED vs Marché Assurance Dubai
              </h2>
            </div>
          </div>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Positionnement d'Al-Aman CED face aux principaux acteurs du marché de l'assurance Takaful 
            et conventionnelle aux Émirats Arabes Unis
          </p>
        </motion.div>

        {/* Navigation */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="dubai-market">Marché Dubai</TabsTrigger>
            <TabsTrigger value="competitive-matrix">Matrice Concurrentielle</TabsTrigger>
            <TabsTrigger value="positioning">Positionnement</TabsTrigger>
          </TabsList>

          {/* Vue marché Dubai */}
          <TabsContent value="dubai-market" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {dubaiInsuranceMarket.map((company, index) => (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`h-full hover:shadow-xl transition-all duration-300 ${company.id === 'alaman-ced' ? 'ring-2 ring-green-500' : ''}`}>
                    <CardHeader>
                      <div className={`w-16 h-16 bg-gradient-to-r ${company.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <Building2 className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-center text-lg h-12">
                        {company.name}
                      </CardTitle>
                      <div className="flex justify-center gap-2">
                        <Badge className={getTypeColor(company.type)}>
                          {company.type}
                        </Badge>
                        {company.id === 'alaman-ced' && (
                          <Badge className="bg-yellow-100 text-yellow-800">
                            NOTRE SOLUTION
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center p-2 bg-blue-50 rounded">
                          <div className="font-bold text-blue-700">{company.rating}</div>
                          <div className="text-xs text-blue-600">Note</div>
                        </div>
                        <div className="text-center p-2 bg-green-50 rounded">
                          <div className="font-bold text-green-700">{company.marketShare}%</div>
                          <div className="text-xs text-green-600">Part marché</div>
                        </div>
                        <div className="text-center p-2 bg-purple-50 rounded">
                          <div className="font-bold text-purple-700">{formatNumber(company.customers)}</div>
                          <div className="text-xs text-purple-600">Clients</div>
                        </div>
                        <div className="text-center p-2 bg-amber-50 rounded">
                          <div className="font-bold text-amber-700">{formatCurrency(company.assets / 1000000)}</div>
                          <div className="text-xs text-amber-600">Actifs</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Forces
                        </h4>
                        <div className="space-y-1">
                          {company.strengths.slice(0, 3).map((strength, idx) => (
                            <div key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                              <div className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              <span>{strength}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                          <X className="h-4 w-4 text-red-500" />
                          Défis
                        </h4>
                        <div className="space-y-1">
                          {company.weaknesses.slice(0, 2).map((weakness, idx) => (
                            <div key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                              <div className="w-1 h-1 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              <span>{weakness}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="flex items-center gap-1">
                          {getComplianceIcon(company.islamicCompliance)}
                          <span className="text-xs">Charia</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          Depuis {company.founded}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Matrice concurrentielle */}
          <TabsContent value="competitive-matrix" className="space-y-6">
            
            {/* Comparaison spécifique assurances 100% Halal Dubai */}
            <Card className="bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-center text-2xl">
                  Comparaison Assurances 100% Halal - Marché Dubai
                </CardTitle>
                <p className="text-center text-gray-600">
                  Focus sur les acteurs Takaful purs conformes Charia
                </p>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-green-50">
                        <th className="border p-3 text-left font-bold">Critères Comparatifs</th>
                        <th className="border p-3 text-center font-bold bg-green-100">
                          🏆 Al-Aman CED
                          <div className="text-xs font-normal text-green-700">NOTRE SOLUTION</div>
                        </th>
                        <th className="border p-3 text-center font-bold">
                          Salama Islamic
                          <div className="text-xs font-normal text-gray-600">Leader historique</div>
                        </th>
                        <th className="border p-3 text-center font-bold">
                          AD National Takaful
                          <div className="text-xs font-normal text-gray-600">Spécialiste pur</div>
                        </th>
                        <th className="border p-3 text-center font-bold">
                          Emirates Takaful
                          <div className="text-xs font-normal text-gray-600">Émergent</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-3 font-medium bg-blue-50">Conformité Charia (Certification)</td>
                        <td className="border p-3 text-center bg-green-50">
                          <div className="font-bold text-green-700">100% Certifié</div>
                          <div className="text-xs">Conseil Charia Suisse + UAE</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-green-600">100% Certifié</div>
                          <div className="text-xs">Conseil Charia UAE</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-green-600">100% Certifié</div>
                          <div className="text-xs">Conseil Charia local</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-green-600">100% Certifié</div>
                          <div className="text-xs">Certification standard</div>
                        </td>
                      </tr>
                      
                      <tr>
                        <td className="border p-3 font-medium bg-blue-50">Écosystème Intégré</td>
                        <td className="border p-3 text-center bg-green-50">
                          <div className="font-bold text-green-700">Complet</div>
                          <div className="text-xs">Banque + Formation + Assurance</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-gray-600">Limité</div>
                          <div className="text-xs">Assurance uniquement</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-gray-600">Basique</div>
                          <div className="text-xs">Quelques partenariats</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-gray-600">Inexistant</div>
                          <div className="text-xs">Services isolés</div>
                        </td>
                      </tr>

                      <tr>
                        <td className="border p-3 font-medium bg-blue-50">Innovation Technologique</td>
                        <td className="border p-3 text-center bg-green-50">
                          <div className="font-bold text-green-700">Révolutionnaire</div>
                          <div className="text-xs">IA + Blockchain + App unifiée</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-orange-600">Standard</div>
                          <div className="text-xs">Systèmes traditionnels</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-orange-600">Moderne</div>
                          <div className="text-xs">Digitalisation récente</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-orange-600">Basique</div>
                          <div className="text-xs">En développement</div>
                        </td>
                      </tr>

                      <tr>
                        <td className="border p-3 font-medium bg-blue-50">Options de Paiement</td>
                        <td className="border p-3 text-center bg-green-50">
                          <div className="font-bold text-green-700">0% Intérêt</div>
                          <div className="text-xs">CED Bank Gold Yakoubi</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-orange-600">Standard</div>
                          <div className="text-xs">Paiement traditionnel</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-orange-600">Standard</div>
                          <div className="text-xs">Options limitées</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-orange-600">Basique</div>
                          <div className="text-xs">Paiement comptant/mensuel</div>
                        </td>
                      </tr>

                      <tr>
                        <td className="border p-3 font-medium bg-blue-50">Couverture Géographique</td>
                        <td className="border p-3 text-center bg-green-50">
                          <div className="font-bold text-green-700">Mondiale</div>
                          <div className="text-xs">Suisse + UAE + Europe</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-blue-600">Régionale</div>
                          <div className="text-xs">GCC + quelques pays</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-orange-600">Locale</div>
                          <div className="text-xs">UAE principalement</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-orange-600">Locale</div>
                          <div className="text-xs">UAE + Oman</div>
                        </td>
                      </tr>

                      <tr>
                        <td className="border p-3 font-medium bg-blue-50">Support Multilingue</td>
                        <td className="border p-3 text-center bg-green-50">
                          <div className="font-bold text-green-700">8 Langues</div>
                          <div className="text-xs">AR, EN, FR, DE, ES, IT, TR, UR</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-blue-600">3 Langues</div>
                          <div className="text-xs">Arabe, Anglais, Hindi</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-orange-600">2 Langues</div>
                          <div className="text-xs">Arabe, Anglais</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-orange-600">2 Langues</div>
                          <div className="text-xs">Arabe, Anglais</div>
                        </td>
                      </tr>

                      <tr>
                        <td className="border p-3 font-medium bg-blue-50">Produits Spécialisés</td>
                        <td className="border p-3 text-center bg-green-50">
                          <div className="font-bold text-green-700">Innovation</div>
                          <div className="text-xs">Hajj, Crypto halal, TechForAll</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-blue-600">Classiques</div>
                          <div className="text-xs">Auto, Santé, Habitation</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-blue-600">Standards</div>
                          <div className="text-xs">Gamme traditionnelle</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-orange-600">Limités</div>
                          <div className="text-xs">Produits de base</div>
                        </td>
                      </tr>

                      <tr>
                        <td className="border p-3 font-medium bg-blue-50">Avantages Clients Fidèles</td>
                        <td className="border p-3 text-center bg-green-50">
                          <div className="font-bold text-green-700">Exceptionnels</div>
                          <div className="text-xs">-25% CED Bank, -40% formation</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-blue-600">Standards</div>
                          <div className="text-xs">Remises classiques</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-orange-600">Basiques</div>
                          <div className="text-xs">Programme simple</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-orange-600">Inexistants</div>
                          <div className="text-xs">Pas de programme</div>
                        </td>
                      </tr>

                      <tr>
                        <td className="border p-3 font-medium bg-blue-50">Transparence & Gouvernance</td>
                        <td className="border p-3 text-center bg-green-50">
                          <div className="font-bold text-green-700">Blockchain</div>
                          <div className="text-xs">Transparence totale</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-blue-600">Rapports</div>
                          <div className="text-xs">Audit annuel</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-blue-600">Standard</div>
                          <div className="text-xs">Conformité réglementaire</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="font-bold text-orange-600">Basique</div>
                          <div className="text-xs">Minimum requis</div>
                        </td>
                      </tr>

                      <tr className="bg-yellow-50">
                        <td className="border p-3 font-bold">Score Global (/100)</td>
                        <td className="border p-3 text-center bg-green-100">
                          <div className="text-2xl font-bold text-green-700">95/100</div>
                          <div className="text-xs">Leader innovation</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="text-xl font-bold text-blue-600">78/100</div>
                          <div className="text-xs">Expérience solide</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="text-xl font-bold text-orange-600">72/100</div>
                          <div className="text-xs">Spécialiste local</div>
                        </td>
                        <td className="border p-3 text-center">
                          <div className="text-xl font-bold text-orange-600">65/100</div>
                          <div className="text-xs">En développement</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Valeur ajoutée unique Al-Aman CED */}
            <Card className="bg-gradient-to-r from-yellow-100 to-green-100 border-2 border-yellow-300">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-yellow-800">
                  🚀 Valeur Ajoutée Unique Al-Aman CED
                </CardTitle>
                <p className="text-center text-yellow-700 font-medium">
                  Ce qui nous distingue radicalement de la concurrence Dubai
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  <Card className="bg-white border-2 border-green-200">
                    <CardHeader className="pb-3">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                        <Building2 className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-center text-green-800">Écosystème 360°</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>CED Bank intégrée (156K+ clients)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Formation éthique (12K+ étudiants)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>TechForAll solidaire (8K+ membres)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Une app = tous les services</span>
                        </div>
                      </div>
                      <div className="mt-3 p-2 bg-green-50 rounded text-xs text-green-700 font-medium text-center">
                        Aucun concurrent n'offre cette intégration
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-2 border-blue-200">
                    <CardHeader className="pb-3">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-center text-blue-800">Innovation Technologique</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span>IA éthique prédictive sinistres</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span>Blockchain transparence totale</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span>Mode prière automatique</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span>Interface adaptative multilingue</span>
                        </div>
                      </div>
                      <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-700 font-medium text-center">
                        Technologie 5 ans d'avance
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-2 border-purple-200">
                    <CardHeader className="pb-3">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                        <DollarSign className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-center text-purple-800">Financement 0% Intérêt</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-purple-500" />
                          <span>Cartes CED Bank Gold Yakoubi</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-purple-500" />
                          <span>Facilités de paiement halal</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-purple-500" />
                          <span>Pas de frais bancaires cachés</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-purple-500" />
                          <span>Conformité Charia garantie</span>
                        </div>
                      </div>
                      <div className="mt-3 p-2 bg-purple-50 rounded text-xs text-purple-700 font-medium text-center">
                        Seul sur le marché UAE
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-2 border-amber-200">
                    <CardHeader className="pb-3">
                      <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-center text-amber-800">Portée Internationale</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-amber-500" />
                          <span>Siège Genève (neutralité suisse)</span>
                        </div>
                        <div className="flex items-centers gap-2">
                          <CheckCircle className="h-4 w-4 text-amber-500" />
                          <span>Hub Dubai (pont Moyen-Orient)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-amber-500" />
                          <span>Couverture Europe + GCC</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-amber-500" />
                          <span>Standards suisses + local UAE</span>
                        </div>
                      </div>
                      <div className="mt-3 p-2 bg-amber-50 rounded text-xs text-amber-700 font-medium text-center">
                        Vision globale unique
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-2 border-red-200">
                    <CardHeader className="pb-3">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-center text-red-800">Impact Solidaire</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-red-500" />
                          <span>TechForAll couverture gratuite</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-red-500" />
                          <span>Formations -40% étudiants</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-red-500" />
                          <span>Dons équipements protégés</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-red-500" />
                          <span>Impact social mesurable</span>
                        </div>
                      </div>
                      <div className="mt-3 p-2 bg-red-50 rounded text-xs text-red-700 font-medium text-center">
                        Dimension sociale inégalée
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-2 border-indigo-200">
                    <CardHeader className="pb-3">
                      <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-center text-indigo-800">Excellence Certifiée</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-indigo-500" />
                          <span>Double certification Charia</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-indigo-500" />
                          <span>Standards suisses qualité</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-indigo-500" />
                          <span>Support 24/7 expert</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-indigo-500" />
                          <span>SLA garantie 99.9%</span>
                        </div>
                      </div>
                      <div className="mt-3 p-2 bg-indigo-50 rounded text-xs text-indigo-700 font-medium text-center">
                        Qualité premium garantie
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Résumé de la valeur ajoutée */}
                <div className="mt-8 p-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl text-white">
                  <h3 className="text-2xl font-bold text-center mb-4">
                    🎯 Résumé de Notre Avantage Concurrentiel Unique
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold">847K+</div>
                      <div className="text-sm">Base clients existante</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">0%</div>
                      <div className="text-sm">Intérêt paiements</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">100%</div>
                      <div className="text-sm">Conformité Charia</div>
                    </div>
                  </div>
                  <p className="text-center mt-4 text-lg">
                    <span className="font-bold">Al-Aman CED n'est pas juste une assurance Takaful,</span><br/>
                    c'est le premier écosystème financier islamique intégré au monde.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Matrice Comparative Détaillée</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">Critères</th>
                        <th className="text-center p-3 bg-green-50">Al-Aman CED</th>
                        <th className="text-center p-3">Salama Insurance</th>
                        <th className="text-center p-3">AXA Gulf</th>
                        <th className="text-center p-3">Dubai Insurance</th>
                        <th className="text-center p-3">AD National Takaful</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Conformité Charia</td>
                        <td className="text-center p-3 bg-green-50">✅ 100%</td>
                        <td className="text-center p-3">✅ 100%</td>
                        <td className="text-center p-3">❌ 0%</td>
                        <td className="text-center p-3">⚠️ 50%</td>
                        <td className="text-center p-3">✅ 100%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Innovation Technologique</td>
                        <td className="text-center p-3 bg-green-50">⭐⭐⭐⭐⭐</td>
                        <td className="text-center p-3">⭐⭐</td>
                        <td className="text-center p-3">⭐⭐⭐⭐</td>
                        <td className="text-center p-3">⭐⭐</td>
                        <td className="text-center p-3">⭐⭐⭐</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Écosystème Intégré</td>
                        <td className="text-center p-3 bg-green-50">⭐⭐⭐⭐⭐</td>
                        <td className="text-center p-3">⭐</td>
                        <td className="text-center p-3">⭐⭐</td>
                        <td className="text-center p-3">⭐</td>
                        <td className="text-center p-3">⭐</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Présence Locale UAE</td>
                        <td className="text-center p-3 bg-green-50">⭐⭐</td>
                        <td className="text-center p-3">⭐⭐⭐⭐⭐</td>
                        <td className="text-center p-3">⭐⭐⭐⭐</td>
                        <td className="text-center p-3">⭐⭐⭐⭐⭐</td>
                        <td className="text-center p-3">⭐⭐⭐⭐</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Support Multilingue</td>
                        <td className="text-center p-3 bg-green-50">⭐⭐⭐⭐⭐</td>
                        <td className="text-center p-3">⭐⭐</td>
                        <td className="text-center p-3">⭐⭐⭐</td>
                        <td className="text-center p-3">⭐⭐</td>
                        <td className="text-center p-3">⭐⭐</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Capacité Financière</td>
                        <td className="text-center p-3 bg-green-50">⭐⭐⭐</td>
                        <td className="text-center p-3">⭐⭐⭐</td>
                        <td className="text-center p-3">⭐⭐⭐⭐⭐</td>
                        <td className="text-center p-3">⭐⭐⭐⭐</td>
                        <td className="text-center p-3">⭐⭐</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Expérience Client</td>
                        <td className="text-center p-3 bg-green-50">⭐⭐⭐⭐⭐</td>
                        <td className="text-center p-3">⭐⭐⭐</td>
                        <td className="text-center p-3">⭐⭐⭐⭐</td>
                        <td className="text-center p-3">⭐⭐⭐</td>
                        <td className="text-center p-3">⭐⭐⭐</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Avantages concurrentiels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Avantages Concurrentiels Al-Aman CED</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-bold">Écosystème Unique</div>
                        <div className="text-sm text-gray-600">Intégration CED Bank + Formation + TechForAll</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-bold">Innovation Technologique</div>
                        <div className="text-sm text-gray-600">IA éthique, blockchain, app intégrée</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-bold">Paiement 0% Intérêt</div>
                        <div className="text-sm text-gray-600">Via cartes CED Bank Gold Yakoubi</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-bold">Base Client Globale</div>
                        <div className="text-sm text-gray-600">847K+ utilisateurs existants</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">Défis à Relever</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="font-bold">Reconnaissance Locale</div>
                        <div className="text-sm text-gray-600">Obtenir licences et partenariats UAE</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="font-bold">Réseau Distribution</div>
                        <div className="text-sm text-gray-600">Développer présence physique Dubai</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="font-bold">Concurrence Établie</div>
                        <div className="text-sm text-gray-600">Différenciation face aux leaders</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Positionnement stratégique */}
          <TabsContent value="positioning" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              <Card>
                <CardHeader>
                  <CardTitle>Identité Digitale Al-Aman CED</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Globe className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-bold">Domaine Principal</div>
                        <div className="text-sm text-gray-600">www.alaman-ced.ch</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Globe className="h-5 w-5 text-amber-600" />
                      <div>
                        <div className="font-bold">Domaine Dubai</div>
                        <div className="text-sm text-gray-600">www.alaman-ced.ae</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Mail className="h-5 w-5 text-green-600" />
                      <div>
                        <div className="font-bold">Email Support</div>
                        <div className="text-sm text-gray-600">contact@alaman-ced.ch</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Mail className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="font-bold">Email Dubai</div>
                        <div className="text-sm text-gray-600">dubai@alaman-ced.ae</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <MapPin className="h-5 w-5 text-red-600" />
                      <div>
                        <div className="font-bold">Siège Genève</div>
                        <div className="text-sm text-gray-600">Rue du Rhône 118, 1204 Genève</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <MapPin className="h-5 w-5 text-orange-600" />
                      <div>
                        <div className="font-bold">Hub Dubai</div>
                        <div className="text-sm text-gray-600">DIFC, Gate Village 3, Dubai</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Stratégie d'Entrée Marché Dubai</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-bold text-blue-700">Phase 1 - Établissement (6 mois)</h4>
                      <ul className="text-sm text-gray-600 mt-2 space-y-1">
                        <li>• Licence assurance UAE</li>
                        <li>• Bureau DIFC Dubai</li>
                        <li>• Partenariats locaux</li>
                        <li>• Équipe bilingue</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-bold text-green-700">Phase 2 - Lancement (12 mois)</h4>
                      <ul className="text-sm text-gray-600 mt-2 space-y-1">
                        <li>• Produits Takaful certifiés</li>
                        <li>• Intégration CED Bank</li>
                        <li>• Marketing ciblé</li>
                        <li>• Support 24/7</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-bold text-purple-700">Phase 3 - Expansion (18 mois)</h4>
                      <ul className="text-sm text-gray-600 mt-2 space-y-1">
                        <li>• 50K+ clients UAE</li>
                        <li>• 5% part marché Takaful</li>
                        <li>• Expansion GCC</li>
                        <li>• Innovation continue</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Objectifs chiffrés */}
            <Card className="bg-gradient-to-r from-green-100 to-blue-100">
              <CardHeader>
                <CardTitle>Objectifs 3 Ans - Marché UAE</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-green-700 mb-2">250K</div>
                    <div className="text-sm text-green-600">Clients UAE</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-blue-700 mb-2">8.5%</div>
                    <div className="text-sm text-blue-600">Part Marché</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-purple-700 mb-2">1.2B</div>
                    <div className="text-sm text-purple-600">AED Primes</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-amber-700 mb-2">4.8+</div>
                    <div className="text-sm text-amber-600">Rating Cible</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}