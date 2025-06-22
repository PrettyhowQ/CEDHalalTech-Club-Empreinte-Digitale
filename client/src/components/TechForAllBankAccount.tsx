import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Heart,
  Recycle,
  Globe,
  TrendingUp,
  Users,
  Package,
  Smartphone,
  CheckCircle,
  Star,
  Trophy,
  Target,
  Clock,
  DollarSign,
  Building,
  Shield,
  Zap,
  Gift,
  Leaf,
  Award,
  PiggyBank
} from 'lucide-react';

interface DonationStream {
  id: string;
  name: string;
  category: 'equipment' | 'financial' | 'services' | 'educational';
  totalReceived: number;
  monthlyAverage: number;
  donorsCount: number;
  impact: string;
  description: string;
}

interface SolidarityProject {
  id: string;
  name: string;
  beneficiaries: number;
  budget: number;
  completion: number;
  impact: string;
  description: string;
  fundingSource: string;
}

interface EnvironmentalImpact {
  metric: string;
  value: number;
  unit: string;
  description: string;
  trend: number;
}

export function TechForAllBankAccount() {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const donationStreams: DonationStream[] = [
    {
      id: 'tech-donations',
      name: 'Dons Matériel Informatique',
      category: 'equipment',
      totalReceived: 2847500,
      monthlyAverage: 237290,
      donorsCount: 1247,
      impact: '15,420 équipements reconditionnés',
      description: 'Dons d\'ordinateurs, smartphones, tablettes pour reconditionnement'
    },
    {
      id: 'financial-support',
      name: 'Soutien Financier Direct',
      category: 'financial',
      totalReceived: 1892340,
      monthlyAverage: 157695,
      donorsCount: 834,
      impact: '5,680 familles aidées',
      description: 'Donations financières pour achats d\'équipements neufs'
    },
    {
      id: 'educational-funding',
      name: 'Formation & Éducation',
      category: 'educational',
      totalReceived: 956780,
      monthlyAverage: 79732,
      donorsCount: 456,
      impact: '2,340 personnes formées',
      description: 'Financement formations numériques et reconversion professionnelle'
    },
    {
      id: 'professional-services',
      name: 'Services Professionnels',
      category: 'services',
      totalReceived: 734220,
      monthlyAverage: 61185,
      donorsCount: 189,
      impact: '890 heures de conseil',
      description: 'Dons de services de développement, design, consulting'
    }
  ];

  const solidarityProjects: SolidarityProject[] = [
    {
      id: 'digital-inclusion',
      name: 'Inclusion Numérique Universelle',
      beneficiaries: 12450,
      budget: 1856000,
      completion: 78,
      impact: 'Accès internet et équipements pour familles précaires',
      description: 'Programme d\'équipement et formation numérique pour tous',
      fundingSource: 'Dons matériel + soutien financier'
    },
    {
      id: 'youth-coding',
      name: 'Coding School Solidaire',
      beneficiaries: 3240,
      budget: 567800,
      completion: 65,
      impact: 'Formation développement web gratuite',
      description: 'École de programmation pour jeunes sans emploi',
      fundingSource: 'Services professionnels + donations'
    },
    {
      id: 'senior-tech',
      name: 'Seniors & Technologies',
      beneficiaries: 8960,
      budget: 423500,
      completion: 82,
      impact: 'Accompagnement numérique personnalisé',
      description: 'Formations et support technique pour personnes âgées',
      fundingSource: 'Bénévolat + équipements reconditionnés'
    },
    {
      id: 'refugee-support',
      name: 'Tech for Refugees',
      beneficiaries: 2180,
      budget: 789400,
      completion: 71,
      impact: 'Intégration professionnelle par le numérique',
      description: 'Formation et équipement pour réfugiés et demandeurs d\'asile',
      fundingSource: 'Partenariats internationaux + dons'
    }
  ];

  const environmentalImpacts: EnvironmentalImpact[] = [
    {
      metric: 'CO₂ évité',
      value: 847.3,
      unit: 'tonnes',
      description: 'Réduction émissions grâce au reconditionnement',
      trend: 23
    },
    {
      metric: 'Déchets électroniques évités',
      value: 125.8,
      unit: 'tonnes',
      description: 'Équipements sauvés de la décharge',
      trend: 18
    },
    {
      metric: 'Emplois verts créés',
      value: 347,
      unit: 'postes',
      description: 'Emplois dans l\'économie circulaire',
      trend: 31
    },
    {
      metric: 'Familles équipées',
      value: 15420,
      unit: 'foyers',
      description: 'Familles ayant accès au numérique',
      trend: 27
    }
  ];

  const totalDonations = donationStreams.reduce((sum, stream) => sum + stream.totalReceived, 0);
  const totalDonors = donationStreams.reduce((sum, stream) => sum + stream.donorsCount, 0);
  const totalBeneficiaries = solidarityProjects.reduce((sum, project) => sum + project.beneficiaries, 0);
  const totalBudget = solidarityProjects.reduce((sum, project) => sum + project.budget, 0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'CHF'
    }).format(amount);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'equipment': return <Package className="h-5 w-5" />;
      case 'financial': return <DollarSign className="h-5 w-5" />;
      case 'educational': return <Target className="h-5 w-5" />;
      case 'services': return <Users className="h-5 w-5" />;
      default: return <Gift className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'equipment': return 'bg-blue-100 text-blue-800';
      case 'financial': return 'bg-green-100 text-green-800';
      case 'educational': return 'bg-purple-100 text-purple-800';
      case 'services': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 p-4">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <CardHeader>
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
              >
                <Globe className="h-8 w-8 text-emerald-600" />
              </motion.div>
              <div>
                <h1 className="text-3xl font-bold">Compte CED Bank TechForAll</h1>
                <h2 className="text-xl">Association Révolutionnaire Anti-Gaspillage</h2>
                <p className="text-emerald-100">Unique • Universelle • Indépendante • Intelligente</p>
                <p className="text-sm text-emerald-200">Fondée par Yakoubi Yamina © 2025</p>
              </div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6 text-center">
              <Heart className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-gray-800">Total Donations</h3>
              <p className="text-2xl font-bold text-emerald-600">{formatCurrency(totalDonations)}</p>
              <p className="text-sm text-gray-600">Depuis création</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-teal-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-gray-800">Donateurs Actifs</h3>
              <p className="text-2xl font-bold text-teal-600">{totalDonors.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Communauté engagée</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6 text-center">
              <Target className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-gray-800">Bénéficiaires</h3>
              <p className="text-2xl font-bold text-blue-600">{totalBeneficiaries.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Vies transformées</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6 text-center">
              <Leaf className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-gray-800">Impact CO₂</h3>
              <p className="text-2xl font-bold text-green-600">847 tonnes</p>
              <p className="text-sm text-gray-600">Émissions évitées</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Tabs Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="donations">Donations</TabsTrigger>
          <TabsTrigger value="projects">Projets</TabsTrigger>
          <TabsTrigger value="impact">Impact</TabsTrigger>
          <TabsTrigger value="account">Compte</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-emerald-600" />
                  Flux de Donations Principaux
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {donationStreams
                    .sort((a, b) => b.totalReceived - a.totalReceived)
                    .slice(0, 3)
                    .map((stream) => (
                    <div key={stream.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        {getCategoryIcon(stream.category)}
                        <div>
                          <p className="font-medium text-gray-800">{stream.name}</p>
                          <p className="text-sm text-gray-600">{stream.donorsCount} donateurs</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-emerald-600">{formatCurrency(stream.totalReceived)}</p>
                        <p className="text-sm text-gray-600">{stream.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Recycle className="h-6 w-6 text-teal-600" />
                  Impact Environnemental
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {environmentalImpacts.map((impact, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium text-gray-800">{impact.metric}</p>
                        <Badge className="bg-green-100 text-green-800">+{impact.trend}%</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-2xl font-bold text-teal-600">{impact.value.toLocaleString()} {impact.unit}</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">{impact.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="donations" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {donationStreams.map((stream) => (
              <motion.div
                key={stream.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="bg-white shadow-lg h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge className={getCategoryColor(stream.category)}>
                        {stream.category}
                      </Badge>
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(stream.category)}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{stream.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{stream.description}</p>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total reçu:</span>
                        <span className="font-bold text-emerald-600">{formatCurrency(stream.totalReceived)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Moyenne mensuelle:</span>
                        <span className="font-medium">{formatCurrency(stream.monthlyAverage)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Donateurs:</span>
                        <span className="font-medium">{stream.donorsCount}</span>
                      </div>
                      <div className="flex justify-between border-t pt-3">
                        <span className="text-gray-600">Impact:</span>
                        <span className="font-bold text-teal-600">{stream.impact}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="projects" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solidarityProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="bg-white shadow-lg h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <p className="text-gray-600">{project.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bénéficiaires:</span>
                        <span className="font-bold text-blue-600">{project.beneficiaries.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Budget:</span>
                        <span className="font-medium">{formatCurrency(project.budget)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Financement:</span>
                        <span className="text-sm font-medium text-gray-700">{project.fundingSource}</span>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Progression:</span>
                          <span className="font-medium">{project.completion}%</span>
                        </div>
                        <Progress value={project.completion} className="mb-2" />
                      </div>
                      <div className="border-t pt-3">
                        <span className="text-sm font-bold text-green-600">{project.impact}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="impact" className="mt-6">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-emerald-600" />
                Impact Mondial TechForAll
              </CardTitle>
              <p className="text-gray-600">Révolution de l'économie circulaire technologique</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {environmentalImpacts.map((impact, index) => (
                  <div key={index} className="text-center p-4 border rounded-lg">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">
                      {impact.value.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600 mb-1">{impact.unit}</div>
                    <div className="font-medium text-gray-800 mb-2">{impact.metric}</div>
                    <Badge className="bg-green-100 text-green-800 mb-2">+{impact.trend}%</Badge>
                    <p className="text-xs text-gray-600">{impact.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Notre Révolution Unique</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="font-medium">0% surconsommation encouragée</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="font-medium">100% financement éthique CED Bank</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="font-medium">Indépendance totale industrie tech</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-600" />
                      <span className="font-medium">Transparence radicale des fonds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-600" />
                      <span className="font-medium">Intelligence collective éthique</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-600" />
                      <span className="font-medium">Modèle universellement reproductible</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="mt-6">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-6 w-6 text-emerald-600" />
                Compte CED Bank TechForAll
              </CardTitle>
              <p className="text-gray-600">Association révolutionnaire anti-gaspillage</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-4">Informations Compte</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-5 w-5 text-emerald-600" />
                        <span className="font-medium">Compte Certifié Association</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Compte officiel de l'association TechForAll, certifié CED Bank pour impact social
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Association:</span>
                        <span className="font-medium">TechForAll</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Fondatrice:</span>
                        <span className="font-medium">Yakoubi Yamina</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Statut:</span>
                        <span className="font-medium">Association Révolutionnaire</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Devise principale:</span>
                        <span className="font-medium">CHF (Franc Suisse)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Banque:</span>
                        <span className="font-medium">CED Bank International</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4">Résumé Financier</h3>
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg">
                    <div className="space-y-4">
                      <div className="text-center border-b pb-4">
                        <p className="text-3xl font-bold text-emerald-600">
                          {formatCurrency(totalDonations)}
                        </p>
                        <p className="text-gray-600">Total donations reçues</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Projets financés:</span>
                          <span className="font-bold text-teal-600">{formatCurrency(totalBudget)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Bénéficiaires aidés:</span>
                          <span className="font-bold text-blue-600">{totalBeneficiaries.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t pt-3">
                          <span>Croissance mensuelle:</span>
                          <span className="font-bold text-purple-600">+24.7%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="h-5 w-5 text-yellow-600" />
                      <span className="font-bold text-yellow-800">Association Pionnière</span>
                    </div>
                    <p className="text-sm text-yellow-700">
                      Première association mondiale 100% anti-gaspillage avec financement éthique CED Bank.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}