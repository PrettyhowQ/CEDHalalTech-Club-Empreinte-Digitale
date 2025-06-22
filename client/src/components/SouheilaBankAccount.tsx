import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Heart,
  Apple,
  Activity,
  TrendingUp,
  Users,
  Book,
  Smartphone,
  CheckCircle,
  Star,
  Trophy,
  Target,
  Clock,
  DollarSign
} from 'lucide-react';

interface TrainingProgram {
  id: string;
  name: string;
  category: 'nutrition' | 'dietetics' | 'sports' | 'wellness';
  price: number;
  duration: string;
  students: number;
  rating: number;
  earnings: number;
  description: string;
}

interface SportsApp {
  feature: string;
  users: number;
  revenue: number;
  growth: number;
}

export function SouheilaBankAccount() {
  const [activeTab, setActiveTab] = useState('overview');

  const trainingPrograms: TrainingProgram[] = [
    {
      id: 'nutrition-pro',
      name: 'Formation Nutrition Professionnelle',
      category: 'nutrition',
      price: 1200,
      duration: '12 semaines',
      students: 156,
      rating: 4.9,
      earnings: 187200,
      description: 'Programme complet de nutrition thérapeutique et préventive'
    },
    {
      id: 'diet-expert',
      name: 'Certification Diététicienne Expert',
      category: 'dietetics',
      price: 1800,
      duration: '16 semaines',
      students: 89,
      rating: 4.8,
      earnings: 160200,
      description: 'Formation avancée en diététique clinique et sportive'
    },
    {
      id: 'sports-nutrition',
      name: 'Nutrition Sportive Performance',
      category: 'sports',
      price: 900,
      duration: '8 semaines',
      students: 203,
      rating: 4.9,
      earnings: 182700,
      description: 'Optimisation nutritionnelle pour athlètes et sportifs'
    },
    {
      id: 'wellness-coach',
      name: 'Coach Bien-être Holistique',
      category: 'wellness',
      price: 1500,
      duration: '14 semaines',
      students: 124,
      rating: 4.7,
      earnings: 186000,
      description: 'Accompagnement global en nutrition et style de vie'
    },
    {
      id: 'therapeutic-diet',
      name: 'Diététique Thérapeutique',
      category: 'dietetics',
      price: 2000,
      duration: '20 semaines',
      students: 67,
      rating: 4.9,
      earnings: 134000,
      description: 'Prise en charge nutritionnelle des pathologies'
    }
  ];

  const sportsAppFeatures: SportsApp[] = [
    {
      feature: 'Plans alimentaires personnalisés',
      users: 15420,
      revenue: 92520,
      growth: 23
    },
    {
      feature: 'Suivi sportif intégré',
      users: 12890,
      revenue: 77340,
      growth: 18
    },
    {
      feature: 'Consultations virtuelles',
      users: 8760,
      revenue: 131400,
      growth: 31
    },
    {
      feature: 'Recettes santé premium',
      users: 22150,
      revenue: 66450,
      growth: 15
    }
  ];

  const totalEarnings = trainingPrograms.reduce((sum, program) => sum + program.earnings, 0);
  const totalAppRevenue = sportsAppFeatures.reduce((sum, feature) => sum + feature.revenue, 0);
  const totalStudents = trainingPrograms.reduce((sum, program) => sum + program.students, 0);
  const totalAppUsers = sportsAppFeatures.reduce((sum, feature) => sum + feature.users, 0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'CHF'
    }).format(amount);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'nutrition': return <Apple className="h-5 w-5" />;
      case 'dietetics': return <Heart className="h-5 w-5" />;
      case 'sports': return <Activity className="h-5 w-5" />;
      case 'wellness': return <Target className="h-5 w-5" />;
      default: return <Book className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'nutrition': return 'bg-green-100 text-green-800';
      case 'dietetics': return 'bg-red-100 text-red-800';
      case 'sports': return 'bg-blue-100 text-blue-800';
      case 'wellness': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Compte CED Bank</h1>
                <h2 className="text-xl">Souheila Yakoubi-Ozel</h2>
                <p className="text-green-100">Spécialiste Nutrition • Diététique • Sport</p>
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
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-gray-800">Revenus Formations</h3>
              <p className="text-2xl font-bold text-green-600">{formatCurrency(totalEarnings)}</p>
              <p className="text-sm text-gray-600">Total généré</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6 text-center">
              <Smartphone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-gray-800">Revenus App Sport</h3>
              <p className="text-2xl font-bold text-blue-600">{formatCurrency(totalAppRevenue)}</p>
              <p className="text-sm text-gray-600">Application mobile</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-gray-800">Étudiants Formés</h3>
              <p className="text-2xl font-bold text-purple-600">{totalStudents.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Toutes formations</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6 text-center">
              <Activity className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-gray-800">Utilisateurs App</h3>
              <p className="text-2xl font-bold text-orange-600">{totalAppUsers.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Actifs mensuels</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Tabs Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="formations">Formations</TabsTrigger>
          <TabsTrigger value="app">App Sport</TabsTrigger>
          <TabsTrigger value="account">Compte CED</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-6 w-6 text-green-600" />
                  Formations les Plus Rentables
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trainingPrograms
                    .sort((a, b) => b.earnings - a.earnings)
                    .slice(0, 3)
                    .map((program) => (
                    <div key={program.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        {getCategoryIcon(program.category)}
                        <div>
                          <p className="font-medium text-gray-800">{program.name}</p>
                          <p className="text-sm text-gray-600">{program.students} étudiants</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">{formatCurrency(program.earnings)}</p>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm text-gray-600">{program.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                  Performance App Sport
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sportsAppFeatures.map((feature, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium text-gray-800">{feature.feature}</p>
                        <Badge className="bg-green-100 text-green-800">+{feature.growth}%</Badge>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{feature.users.toLocaleString()} utilisateurs</span>
                        <span className="font-medium text-blue-600">{formatCurrency(feature.revenue)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="formations" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPrograms.map((program) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="bg-white shadow-lg h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge className={getCategoryColor(program.category)}>
                        {program.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium">{program.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{program.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Prix:</span>
                        <span className="font-bold text-green-600">{formatCurrency(program.price)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Durée:</span>
                        <span className="font-medium">{program.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Étudiants:</span>
                        <span className="font-medium">{program.students}</span>
                      </div>
                      <div className="flex justify-between border-t pt-3">
                        <span className="text-gray-600">Revenus totaux:</span>
                        <span className="font-bold text-blue-600">{formatCurrency(program.earnings)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="app" className="mt-6">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-6 w-6 text-blue-600" />
                Application Sport Souheila Yakoubi
              </CardTitle>
              <p className="text-gray-600">Plateforme intégrée nutrition et performance sportive</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-4">Fonctionnalités Premium</h3>
                  <div className="space-y-4">
                    {sportsAppFeatures.map((feature, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-gray-800">{feature.feature}</h4>
                          <Badge className="bg-blue-100 text-blue-800">+{feature.growth}%</Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">{feature.users.toLocaleString()} utilisateurs</span>
                          <span className="font-bold text-green-600">{formatCurrency(feature.revenue)}</span>
                        </div>
                        <Progress value={(feature.revenue / 150000) * 100} className="mt-2" />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-4">Revenus Mensuels</h3>
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                    <div className="text-center mb-4">
                      <p className="text-3xl font-bold text-blue-600">{formatCurrency(totalAppRevenue)}</p>
                      <p className="text-gray-600">Revenus totaux app</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Abonnements Premium:</span>
                        <span className="font-medium">{formatCurrency(156800)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Consultations:</span>
                        <span className="font-medium">{formatCurrency(131400)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Plans personnalisés:</span>
                        <span className="font-medium">{formatCurrency(92520)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Autres services:</span>
                        <span className="font-medium">{formatCurrency(77340)}</span>
                      </div>
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
                <CreditCard className="h-6 w-6 text-green-600" />
                Compte CED Bank - Souheila Yakoubi-Ozel
              </CardTitle>
              <p className="text-gray-600">Compte professionnel spécialisé santé et nutrition</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-4">Informations Compte</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="font-medium">Compte Certifié</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Compte professionnel certifié pour activités de formation et consultations santé
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Titulaire:</span>
                        <span className="font-medium">Souheila Yakoubi-Ozel</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Secteur:</span>
                        <span className="font-medium">Santé • Nutrition • Sport</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Type compte:</span>
                        <span className="font-medium">Professionnel Premium</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Devise principale:</span>
                        <span className="font-medium">CHF (Franc Suisse)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4">Résumé Financier</h3>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                    <div className="space-y-4">
                      <div className="text-center border-b pb-4">
                        <p className="text-2xl font-bold text-green-600">
                          {formatCurrency(totalEarnings + totalAppRevenue)}
                        </p>
                        <p className="text-gray-600">Revenus totaux cumulés</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Formations:</span>
                          <span className="font-bold text-green-600">{formatCurrency(totalEarnings)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Application:</span>
                          <span className="font-bold text-blue-600">{formatCurrency(totalAppRevenue)}</span>
                        </div>
                        <div className="flex justify-between border-t pt-3">
                          <span>Croissance mensuelle:</span>
                          <span className="font-bold text-purple-600">+18.5%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="h-5 w-5 text-yellow-600" />
                      <span className="font-bold text-yellow-800">Statut Expert</span>
                    </div>
                    <p className="text-sm text-yellow-700">
                      Compte bénéficiant des tarifs préférentiels CED Bank pour professionnels de santé certifiés.
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