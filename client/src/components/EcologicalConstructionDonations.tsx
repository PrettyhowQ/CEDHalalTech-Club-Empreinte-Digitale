import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Building2,
  Home,
  Truck,
  Settings,
  Droplets,
  Waves,
  Map,
  Euro,
  Heart,
  Target,
  TrendingUp,
  Users,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  Leaf,
  Recycle,
  TreePine,
  Hammer,
  Wrench,
  Car,
  Tractor,
  Ship,
  Gift,
  Calculator,
  FileText,
  Download,
  Eye,
  Plus
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CEDFooter } from './CEDFooter';

interface EcologicalProject {
  id: string;
  name: string;
  description: string;
  category: 'materials' | 'land' | 'vehicles' | 'equipment' | 'housing' | 'irrigation' | 'nautical';
  targetAmount: number;
  currentAmount: number;
  donorsCount: number;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  location: string;
  estimatedImpact: string;
  icon: any;
  color: string;
  taxBenefit: {
    country: string;
    percentage: number;
    description: string;
    maxDeduction: number;
  };
  specifications: string[];
  benefits: string[];
  timeline: string;
  certification: string[];
}

interface DonationType {
  id: string;
  name: string;
  description: string;
  examples: string[];
  estimatedValue: string;
  taxAdvantage: string;
  icon: any;
}

const ecologicalProjects: EcologicalProject[] = [
  {
    id: 'social-housing',
    name: 'Logements Sociaux Écologiques',
    description: 'Construction d\'appartements sociaux écologiques pour reloger des personnes en difficulté avec matériaux durables',
    category: 'housing',
    targetAmount: 850000,
    currentAmount: 245000,
    donorsCount: 189,
    urgency: 'critical',
    location: 'France - Région Île-de-France',
    estimatedImpact: '120 familles relogées durablement',
    icon: Building2,
    color: 'emerald',
    taxBenefit: {
      country: 'France',
      percentage: 75,
      description: 'Réduction d\'impôt exceptionnelle de 75% pour logements sociaux écologiques',
      maxDeduction: 100000
    },
    specifications: [
      'Isolation thermique renforcée BBC',
      'Panneaux solaires et géothermie',
      'Matériaux biosourcés certifiés',
      'Récupération eaux de pluie',
      'Espaces verts partagés'
    ],
    benefits: [
      'Réduction 80% consommation énergétique',
      'Empreinte carbone négative',
      'Intégration sociale renforcée',
      'Coûts de chauffage divisés par 4'
    ],
    timeline: '18 mois de construction',
    certification: ['HQE', 'BBC', 'BREEAM Excellent', 'Cradle to Cradle']
  },
  {
    id: 'eco-materials',
    name: 'Matériaux Construction Écologique',
    description: 'Collecte de matériaux écologiques : bois certifié, isolants naturels, briques en terre crue',
    category: 'materials',
    targetAmount: 320000,
    currentAmount: 125000,
    donorsCount: 276,
    urgency: 'high',
    location: 'France & Suisse',
    estimatedImpact: '75 constructions écologiques',
    icon: Hammer,
    color: 'green',
    taxBenefit: {
      country: 'France',
      percentage: 75,
      description: 'Déduction fiscale de 75% pour dons de matériaux écologiques',
      maxDeduction: 50000
    },
    specifications: [
      'Bois certifié FSC/PEFC',
      'Isolants chanvre, ouate, liège',
      'Briques terre crue locales',
      'Enduits naturels à la chaux',
      'Toitures végétalisées'
    ],
    benefits: [
      'Matériaux 100% recyclables',
      'Émissions CO2 réduites de 60%',
      'Qualité de l\'air intérieur optimale',
      'Durabilité 100+ années'
    ],
    timeline: 'Livraison selon projets',
    certification: ['Cradle to Cradle', 'Nature Plus', 'Ecolabel EU']
  },
  {
    id: 'constructible-land',
    name: 'Terrains Constructibles',
    description: 'Dons de terrains pour projets de logements sociaux écologiques et éco-quartiers durables',
    category: 'land',
    targetAmount: 1200000,
    currentAmount: 380000,
    donorsCount: 67,
    urgency: 'high',
    location: 'France - Zones périurbaines',
    estimatedImpact: '25 projets de logements sociaux',
    icon: Map,
    color: 'blue',
    taxBenefit: {
      country: 'France',
      percentage: 75,
      description: 'Avantage fiscal exceptionnel de 75% pour dons de terrain constructible',
      maxDeduction: 200000
    },
    specifications: [
      'Terrains viabilisés ou viabilisables',
      'Superficie minimum 1000m²',
      'Accès transports en commun',
      'Zonage constructible validé',
      'Étude de sol favorable'
    ],
    benefits: [
      'Projets immobiliers sociaux garantis',
      'Valorisation territoriale durable',
      'Création emplois locaux',
      'Mixité sociale renforcée'
    ],
    timeline: 'Utilisation immédiate possible',
    certification: ['PLU validé', 'Étude environnementale']
  },
  {
    id: 'transport-vehicles',
    name: 'Véhicules de Transport',
    description: 'Camping-cars, fourgons et véhicules utilitaires pour transport de matériaux et logistique chantiers',
    category: 'vehicles',
    targetAmount: 180000,
    currentAmount: 67500,
    donorsCount: 95,
    urgency: 'medium',
    location: 'Europe',
    estimatedImpact: '30 véhicules logistiques opérationnels',
    icon: Truck,
    color: 'orange',
    taxBenefit: {
      country: 'France',
      percentage: 75,
      description: 'Réduction d\'impôt de 75% pour véhicules utilitaires',
      maxDeduction: 30000
    },
    specifications: [
      'Fourgons grand volume (15-35m³)',
      'Camping-cars autonomes',
      'Véhicules électriques prioritaires',
      'Équipements de levage intégrés',
      'GPS et tracking inclus'
    ],
    benefits: [
      'Logistique chantiers optimisée',
      'Réduction coûts transport 40%',
      'Autonomie énergétique mobile',
      'Flexibilité géographique'
    ],
    timeline: 'Utilisation immédiate',
    certification: ['Contrôle technique OK', 'Assurance professionnelle']
  },
  {
    id: 'construction-equipment',
    name: 'Matériel de Construction',
    description: 'Tractopelles, mini-pelles, grues et équipements lourds pour chantiers de construction écologique',
    category: 'equipment',
    targetAmount: 450000,
    currentAmount: 189000,
    donorsCount: 134,
    urgency: 'medium',
    location: 'France & Europe',
    estimatedImpact: '20 chantiers équipés simultanément',
    icon: Settings,
    color: 'yellow',
    taxBenefit: {
      country: 'France',
      percentage: 75,
      description: 'Déduction fiscale de 75% pour équipements de construction',
      maxDeduction: 75000
    },
    specifications: [
      'Tractopelles 8-20 tonnes',
      'Mini-pelles électriques',
      'Grues mobiles jusqu\'à 50T',
      'Équipements de terrassement',
      'Outils spécialisés éco-construction'
    ],
    benefits: [
      'Productivité chantiers +60%',
      'Réduction temps construction',
      'Sécurité renforcée',
      'Précision technique optimale'
    ],
    timeline: 'Déploiement selon besoins',
    certification: ['CACES obligatoires', 'Maintenance préventive']
  },
  {
    id: 'irrigation-equipment',
    name: 'Matériel d\'Irrigation Écologique',
    description: 'Systèmes d\'irrigation goutte-à-goutte, pompes solaires pour maraîchage et agriculture durable',
    category: 'irrigation',
    targetAmount: 165000,
    currentAmount: 78000,
    donorsCount: 198,
    urgency: 'medium',
    location: 'Afrique & Méditerranée',
    estimatedImpact: '500 hectares irrigués durablement',
    icon: Droplets,
    color: 'cyan',
    taxBenefit: {
      country: 'France',
      percentage: 75,
      description: 'Avantage fiscal de 75% pour équipements agricoles durables',
      maxDeduction: 25000
    },
    specifications: [
      'Systèmes goutte-à-goutte programmables',
      'Pompes solaires autonomes',
      'Capteurs d\'humidité sol',
      'Récupération eaux pluviales',
      'Serres bioclimatiques'
    ],
    benefits: [
      'Économie d\'eau 70%',
      'Rendements agricoles +40%',
      'Autonomie énergétique complète',
      'Cultures toute l\'année'
    ],
    timeline: 'Installation 2-4 semaines',
    certification: ['Conformité CE', 'Garantie 10 ans']
  },
  {
    id: 'nautical-equipment',
    name: 'Équipements Nautiques',
    description: 'Jets skis et embarcations pour surveillance côtière, sauvetage et protection environnementale marine',
    category: 'nautical',
    targetAmount: 95000,
    currentAmount: 42000,
    donorsCount: 73,
    urgency: 'low',
    location: 'Côtes Méditerranéennes',
    estimatedImpact: '15 points de surveillance marine',
    icon: Waves,
    color: 'blue',
    taxBenefit: {
      country: 'France',
      percentage: 75,
      description: 'Réduction d\'impôt de 75% pour équipements de sécurité maritime',
      maxDeduction: 15000
    },
    specifications: [
      'Jets skis 4 temps écologiques',
      'Embarcations pneumatiques',
      'Équipements de sauvetage',
      'Matériel anti-pollution',
      'Sonars de surveillance'
    ],
    benefits: [
      'Surveillance côtière 24/7',
      'Intervention rapide sauvetage',
      'Protection écosystèmes marins',
      'Lutte contre pollution'
    ],
    timeline: 'Déploiement saisonnier',
    certification: ['Homologation maritime', 'Formation pilotes']
  }
];

const donationTypes: DonationType[] = [
  {
    id: 'materials',
    name: 'Matériaux de Construction',
    description: 'Dons en nature de matériaux écologiques',
    examples: ['Bois certifié FSC', 'Isolants naturels', 'Briques terre crue', 'Panneaux solaires'],
    estimatedValue: '€500 - €50,000',
    taxAdvantage: '75% de réduction d\'impôt',
    icon: Hammer
  },
  {
    id: 'monetary',
    name: 'Dons Pécuniaires',
    description: 'Contributions financières pour achats de matériaux',
    examples: ['Virements bancaires', 'Dons en ligne', 'Chèques', 'Cryptomonnaies'],
    estimatedValue: '€50 - €100,000',
    taxAdvantage: '75% de réduction d\'impôt',
    icon: Euro
  },
  {
    id: 'land',
    name: 'Terrains Constructibles',
    description: 'Dons de terrains pour constructions sociales',
    examples: ['Terrains viabilisés', 'Parcelles urbaines', 'Zones périurbaines', 'Terrains agricoles'],
    estimatedValue: '€10,000 - €500,000',
    taxAdvantage: '75% de réduction d\'impôt',
    icon: Map
  },
  {
    id: 'vehicles',
    name: 'Véhicules Utilitaires',
    description: 'Dons de véhicules pour transport et logistique',
    examples: ['Camping-cars', 'Fourgons', 'Camions', 'Véhicules électriques'],
    estimatedValue: '€5,000 - €80,000',
    taxAdvantage: '75% de réduction d\'impôt',
    icon: Car
  },
  {
    id: 'equipment',
    name: 'Équipements Lourds',
    description: 'Matériel de construction et agriculture',
    examples: ['Tractopelles', 'Mini-pelles', 'Grues', 'Matériel irrigation'],
    estimatedValue: '€10,000 - €200,000',
    taxAdvantage: '75% de réduction d\'impôt',
    icon: Tractor
  }
];

export function EcologicalConstructionDonations() {
  const [selectedProject, setSelectedProject] = useState<EcologicalProject | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [donationAmount, setDonationAmount] = useState<number>(1000);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'materials': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'land': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'vehicles': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'equipment': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'housing': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
      case 'irrigation': return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200';
      case 'nautical': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const filteredProjects = selectedCategory === 'all' 
    ? ecologicalProjects 
    : ecologicalProjects.filter(p => p.category === selectedCategory);

  const calculateTaxReduction = (amount: number, percentage: number, maxDeduction: number): number => {
    const reduction = amount * (percentage / 100);
    return Math.min(reduction, maxDeduction);
  };

  const makeDonation = (projectId: string, amount?: number) => {
    const project = ecologicalProjects.find(p => p.id === projectId);
    const donAmount = amount || donationAmount;
    const taxReduction = calculateTaxReduction(donAmount, project?.taxBenefit.percentage || 75, project?.taxBenefit.maxDeduction || 50000);
    
    alert(`Simulation de donation\n\nPlateforme en développement\n\nProjet: ${project?.name}\nMontant simulé: €${donAmount.toLocaleString()}\nRéduction d'impôt estimée: €${taxReduction.toLocaleString()} (${project?.taxBenefit.percentage}%)\nCoût réel estimé: €${(donAmount - taxReduction).toLocaleString()}\n\nNote: Aucune transaction réelle n'est encore possible.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
            TechForAll Construction Écologique
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Plateforme en développement - Logements sociaux écologiques avec 75% de réduction d'impôt
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              🏠 Logements Sociaux
            </Badge>
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
              🌱 Construction Écologique
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              💰 75% Réduction Impôt
            </Badge>
          </div>
        </motion.div>

        {/* Calculateur Avantage Fiscal */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-green-800 dark:text-green-200">
                <Calculator className="h-6 w-6" />
                Calculateur Avantage Fiscal France
              </CardTitle>
              <CardDescription className="text-lg">
                Réduction d'impôt exceptionnelle de 75% pour constructions écologiques
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-4">
                  <h4 className="font-semibold mb-3 text-center">Votre Don</h4>
                  <div className="text-center">
                    <input
                      type="number"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(parseInt(e.target.value) || 0)}
                      className="w-full text-2xl font-bold text-center border-2 border-green-300 rounded-lg p-3 mb-2"
                      min="50"
                      max="200000"
                      step="100"
                    />
                    <p className="text-sm text-gray-600">€ (minimum 50€)</p>
                  </div>
                </Card>

                <Card className="p-4 bg-green-100 dark:bg-green-900/30">
                  <h4 className="font-semibold mb-3 text-center">Réduction d'Impôt</h4>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      €{calculateTaxReduction(donationAmount, 75, 100000).toLocaleString()}
                    </div>
                    <p className="text-sm text-green-700">75% de réduction</p>
                  </div>
                </Card>

                <Card className="p-4 bg-blue-100 dark:bg-blue-900/30">
                  <h4 className="font-semibold mb-3 text-center">Coût Réel</h4>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      €{(donationAmount - calculateTaxReduction(donationAmount, 75, 100000)).toLocaleString()}
                    </div>
                    <p className="text-sm text-blue-700">Après déduction fiscale</p>
                  </div>
                </Card>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold mb-2 text-amber-800 dark:text-amber-200">
                  💡 Exemple Concret
                </h4>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  Pour un don de €10,000 : vous bénéficiez de €7,500 de réduction d'impôt, 
                  soit un coût réel de seulement €2,500 pour contribuer aux logements sociaux écologiques.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Filtres Projets */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {['all', 'housing', 'materials', 'land', 'vehicles', 'equipment', 'irrigation', 'nautical'].map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-green-600 hover:bg-green-700" : ""}
            >
              {category === 'all' ? 'Tous Projets' : 
               category === 'housing' ? 'Logements' :
               category === 'materials' ? 'Matériaux' :
               category === 'land' ? 'Terrains' :
               category === 'vehicles' ? 'Véhicules' :
               category === 'equipment' ? 'Équipements' :
               category === 'irrigation' ? 'Irrigation' :
               'Nautique'}
            </Button>
          ))}
        </motion.div>

        {/* Projets Écologiques */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200 dark:hover:border-green-700">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900">
                        <project.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg leading-tight">
                          {project.name}
                        </CardTitle>
                        <div className="flex gap-2 mt-2">
                          <Badge className={getCategoryColor(project.category)} variant="outline">
                            {project.category}
                          </Badge>
                          <Badge className={getUrgencyColor(project.urgency)} variant="outline">
                            {project.urgency}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-green-600 mb-1">
                        {project.taxBenefit.percentage}% déduction
                      </div>
                      <Badge className="bg-green-100 text-green-800 text-xs">
                        {project.taxBenefit.country}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progression</span>
                      <span className="font-semibold">
                        €{project.currentAmount.toLocaleString()} / €{project.targetAmount.toLocaleString()}
                      </span>
                    </div>
                    <Progress value={(project.currentAmount / project.targetAmount) * 100} className="h-2" />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{Math.round((project.currentAmount / project.targetAmount) * 100)}% collecté</span>
                      <span>{project.donorsCount} donateurs</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Impact:</span>
                      <p className="font-semibold">{project.estimatedImpact}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Localisation:</span>
                      <p className="font-semibold">{project.location}</p>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2 text-green-800 dark:text-green-200">
                      🎯 Avantage Fiscal
                    </h4>
                    <p className="text-xs text-green-700 dark:text-green-300">
                      {project.taxBenefit.description}
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                      Maximum: €{project.taxBenefit.maxDeduction.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => setSelectedProject(project)}
                      className="flex-1"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      Détails
                    </Button>
                    <Button 
                      size="sm"
                      onClick={() => makeDonation(project.id)}
                      className="flex-1 bg-amber-600 hover:bg-amber-700"
                      variant="outline"
                    >
                      <Calculator className="h-4 w-4 mr-1" />
                      Simuler
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Types de Dons */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Gift className="h-6 w-6 text-green-600" />
                Types de Dons Acceptés
              </CardTitle>
              <CardDescription>
                Toutes les formes de contribution bénéficient de 75% de réduction d'impôt
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {donationTypes.slice(0, 3).map((type, index) => (
                  <motion.div
                    key={type.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="text-center"
                  >
                    <div className="p-4 rounded-full bg-green-100 dark:bg-green-900 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <type.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="font-semibold mb-2">{type.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {type.description}
                    </p>
                    <div className="space-y-1">
                      {type.examples.slice(0, 2).map((example, i) => (
                        <div key={i} className="text-xs text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">
                          {example}
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <Badge className="bg-green-100 text-green-800">
                        {type.estimatedValue}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-lg mb-4 text-center text-amber-800 dark:text-amber-200">
                  ⚠️ Plateforme en Développement
                </h4>
                <div className="text-center space-y-3">
                  <p className="text-amber-700 dark:text-amber-300">
                    Cette plateforme de collecte de dons pour la construction écologique est actuellement en phase de développement.
                  </p>
                  <p className="text-amber-600 dark:text-amber-400 text-sm">
                    Aucune collecte de matériaux de construction n'est encore opérationnelle. 
                    Les fonctionnalités présentées sont des prototypes en cours de finalisation.
                  </p>
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded text-amber-800 dark:text-amber-200 text-sm">
                    Phase actuelle : Conception et validation des processus de collecte
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Modal Détails Projet */}
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <selectedProject.icon className="h-6 w-6 text-green-600" />
                  {selectedProject.name}
                </h3>
                <Button variant="ghost" size="sm" onClick={() => setSelectedProject(null)}>
                  ✕
                </Button>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">📊 Informations Projet</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Objectif:</span>
                        <span className="font-semibold">€{selectedProject.targetAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Collecté:</span>
                        <span className="font-semibold text-green-600">€{selectedProject.currentAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Donateurs:</span>
                        <span className="font-semibold">{selectedProject.donorsCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Délai:</span>
                        <span className="font-semibold">{selectedProject.timeline}</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">💰 Avantage Fiscal</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Réduction:</span>
                        <span className="font-semibold text-green-600">{selectedProject.taxBenefit.percentage}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pays:</span>
                        <span className="font-semibold">{selectedProject.taxBenefit.country}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Maximum:</span>
                        <span className="font-semibold">€{selectedProject.taxBenefit.maxDeduction.toLocaleString()}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      {selectedProject.taxBenefit.description}
                    </p>
                  </Card>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-700">🔧 Spécifications Techniques</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.specifications.map((spec, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">🌟 Bénéfices Environnementaux</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <Leaf className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-purple-700">🏆 Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.certification.map((cert, i) => (
                      <Badge key={i} variant="outline" className="text-purple-600">
                        <Star className="h-3 w-3 mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    className="flex-1 bg-amber-600 hover:bg-amber-700"
                    variant="outline"
                    onClick={() => makeDonation(selectedProject.id)}
                  >
                    <Calculator className="h-4 w-4 mr-2" />
                    Simuler Don
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Dossier Complet
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
      
      <CEDFooter />
    </div>
  );
}