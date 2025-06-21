import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Gift,
  Heart,
  Star,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Zap,
  Target,
  Award,
  Coffee,
  Fuel,
  Utensils,
  Plane,
  Home,
  BookOpen,
  Stethoscope,
  CheckCircle,
  Clock,
  ArrowRight
} from 'lucide-react';

interface CashbackCategory {
  id: string;
  name: string;
  rate: number;
  icon: any;
  color: string;
  description: string;
  monthlySpent: number;
  monthlyEarned: number;
  maxMonthly: number;
  isHalal: boolean;
  examples: string[];
}

interface CashbackTransaction {
  id: string;
  merchant: string;
  category: string;
  amount: number;
  cashback: number;
  rate: number;
  timestamp: Date;
  donationImpact: number;
  status: 'confirmed' | 'pending';
}

interface LoyaltyReward {
  id: string;
  title: string;
  description: string;
  pointsRequired: number;
  category: 'zakat' | 'charity' | 'education' | 'travel' | 'premium';
  icon: any;
  available: boolean;
  claimed: boolean;
}

export function HalalCashbackSystem() {
  const [activeTab, setActiveTab] = useState<'overview' | 'categories' | 'rewards' | 'impact'>('overview');
  const [userPoints] = useState(8450);
  const [totalCashback] = useState(2847);
  const [donationsGenerated] = useState(1423);

  const [categories] = useState<CashbackCategory[]>([
    {
      id: '1',
      name: 'Restaurants Halal',
      rate: 5,
      icon: Utensils,
      color: 'bg-green-100 text-green-800',
      description: 'Restaurants certifiés halal uniquement',
      monthlySpent: 3200,
      monthlyEarned: 160,
      maxMonthly: 200,
      isHalal: true,
      examples: ['Al Haramain Dubai', 'Maison Bagatelle', 'Reem Al Bawadi']
    },
    {
      id: '2',
      name: 'Carburant & Transport',
      rate: 3,
      icon: Fuel,
      color: 'bg-blue-100 text-blue-800',
      description: 'Stations-service et transport public',
      monthlySpent: 1800,
      monthlyEarned: 54,
      maxMonthly: 150,
      isHalal: true,
      examples: ['ADNOC', 'ENOC', 'Emirates Taxi']
    },
    {
      id: '3',
      name: 'Éducation Islamique',
      rate: 8,
      icon: BookOpen,
      color: 'bg-purple-100 text-purple-800',
      description: 'Livres, cours et formation islamiques',
      monthlySpent: 950,
      monthlyEarned: 76,
      maxMonthly: 400,
      isHalal: true,
      examples: ['Islamic University', 'Dar Al Fikr', 'Madrasa Online']
    },
    {
      id: '4',
      name: 'Santé & Médical',
      rate: 4,
      icon: Stethoscope,
      color: 'bg-red-100 text-red-800',
      description: 'Soins médicaux et pharmacies',
      monthlySpent: 2100,
      monthlyEarned: 84,
      maxMonthly: 300,
      isHalal: true,
      examples: ['Dubai Hospital', 'Aster Pharmacy', 'Mediclinic']
    },
    {
      id: '5',
      name: 'Voyages Halal',
      rate: 2,
      icon: Plane,
      color: 'bg-orange-100 text-orange-800',
      description: 'Voyages vers destinations halal-friendly',
      monthlySpent: 5400,
      monthlyEarned: 108,
      maxMonthly: 250,
      isHalal: true,
      examples: ['Emirates', 'Etihad', 'Halal Tourism']
    },
    {
      id: '6',
      name: 'Immobilier Halal',
      rate: 1.5,
      icon: Home,
      color: 'bg-yellow-100 text-yellow-800',
      description: 'Investissements immobiliers conformes',
      monthlySpent: 15000,
      monthlyEarned: 225,
      maxMonthly: 500,
      isHalal: true,
      examples: ['Emaar', 'Damac Properties', 'Dubai Properties']
    }
  ]);

  const [recentTransactions] = useState<CashbackTransaction[]>([
    {
      id: '1',
      merchant: 'Al Haramain Restaurant',
      category: 'Restaurants Halal',
      amount: 85,
      cashback: 4.25,
      rate: 5,
      timestamp: new Date('2025-06-21T19:30:00'),
      donationImpact: 2.12,
      status: 'confirmed'
    },
    {
      id: '2',
      merchant: 'ADNOC Station',
      category: 'Carburant',
      amount: 120,
      cashback: 3.60,
      rate: 3,
      timestamp: new Date('2025-06-21T14:15:00'),
      donationImpact: 1.80,
      status: 'confirmed'
    },
    {
      id: '3',
      merchant: 'Islamic University Dubai',
      category: 'Éducation',
      amount: 450,
      cashback: 36,
      rate: 8,
      timestamp: new Date('2025-06-21T10:00:00'),
      donationImpact: 18,
      status: 'pending'
    },
    {
      id: '4',
      merchant: 'Dubai Hospital',
      category: 'Santé',
      amount: 280,
      cashback: 11.20,
      rate: 4,
      timestamp: new Date('2025-06-20T16:45:00'),
      donationImpact: 5.60,
      status: 'confirmed'
    }
  ]);

  const [loyaltyRewards] = useState<LoyaltyReward[]>([
    {
      id: '1',
      title: 'Don Automatique Zakat',
      description: 'Calcul et don automatique de votre Zakat annuelle',
      pointsRequired: 5000,
      category: 'zakat',
      icon: Heart,
      available: true,
      claimed: false
    },
    {
      id: '2',
      title: 'Formation Finance Islamique',
      description: 'Cours gratuit sur les principes de la finance islamique',
      pointsRequired: 3000,
      category: 'education',
      icon: BookOpen,
      available: true,
      claimed: true
    },
    {
      id: '3',
      title: 'Omra Premium Package',
      description: 'Voyage Omra tout inclus pour 2 personnes',
      pointsRequired: 50000,
      category: 'travel',
      icon: Plane,
      available: false,
      claimed: false
    },
    {
      id: '4',
      title: 'Consultation Financière Premium',
      description: 'Session 1h avec expert finance islamique',
      pointsRequired: 8000,
      category: 'premium',
      icon: Star,
      available: true,
      claimed: false
    }
  ]);

  const getCategoryProgress = (category: CashbackCategory) => {
    return (category.monthlyEarned / category.maxMonthly) * 100;
  };

  const getRewardCategoryColor = (category: string) => {
    switch (category) {
      case 'zakat': return 'bg-green-100 text-green-800';
      case 'charity': return 'bg-blue-100 text-blue-800';
      case 'education': return 'bg-purple-100 text-purple-800';
      case 'travel': return 'bg-orange-100 text-orange-800';
      case 'premium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
            <Gift className="h-8 w-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Cashback Halal & Fidélité</h2>
            <p className="text-gray-600">Remboursements redistribués en dons automatiques</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
            <Star className="h-4 w-4 mr-1" />
            {userPoints.toLocaleString()} Points
          </Badge>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {[
          { id: 'overview', label: 'Vue d\'ensemble', icon: TrendingUp },
          { id: 'categories', label: 'Catégories', icon: Target },
          { id: 'rewards', label: 'Récompenses', icon: Award },
          { id: 'impact', label: 'Impact Social', icon: Heart }
        ].map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? 'default' : 'ghost'}
            className={`flex-1 ${activeTab === tab.id ? 'bg-white shadow-sm' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <tab.icon className="h-4 w-4 mr-2" />
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Cashback Total</p>
                    <p className="text-2xl font-bold">${totalCashback}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="text-sm text-gray-600">Donations Générées</p>
                    <p className="text-2xl font-bold">${donationsGenerated}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-600" />
                  <div>
                    <p className="text-sm text-gray-600">Points Fidélité</p>
                    <p className="text-2xl font-bold">{userPoints.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <ShoppingCart className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Transactions Mois</p>
                    <p className="text-2xl font-bold">127</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Transactions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Transactions Récentes avec Cashback
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        transaction.status === 'confirmed' ? 'bg-green-100' : 'bg-yellow-100'
                      }`}>
                        {transaction.status === 'confirmed' ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <Clock className="h-4 w-4 text-yellow-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold">{transaction.merchant}</p>
                        <p className="text-sm text-gray-600">{transaction.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${transaction.amount}</p>
                      <p className="text-sm text-green-600">+${transaction.cashback} cashback</p>
                      <p className="text-xs text-gray-500">${transaction.donationImpact} → donation</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Categories Tab */}
      {activeTab === 'categories' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 text-lg px-3 py-1">
                    {category.rate}% cashback
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Progress towards monthly limit */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Cashback ce mois</span>
                    <span>${category.monthlyEarned} / ${category.maxMonthly}</span>
                  </div>
                  <Progress value={getCategoryProgress(category)} className="h-2" />
                </div>

                {/* Monthly spending */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Dépenses mensuelles</span>
                  <span className="font-semibold">${category.monthlySpent.toLocaleString()}</span>
                </div>

                {/* Examples */}
                <div>
                  <p className="text-sm text-gray-600 mb-2">Marchands populaires:</p>
                  <div className="flex flex-wrap gap-1">
                    {category.examples.map((example, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Halal certification */}
                <div className="flex items-center justify-between pt-2 border-t">
                  <Badge className="bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    100% Halal
                  </Badge>
                  <Button variant="outline" size="sm">
                    <ArrowRight className="h-4 w-4 mr-1" />
                    Voir Marchands
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Rewards Tab */}
      {activeTab === 'rewards' && (
        <div className="space-y-6">
          <div className="text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Vous avez {userPoints.toLocaleString()} points de fidélité
            </h3>
            <p className="text-gray-600">
              Échangez vos points contre des récompenses halal ou des donations automatiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loyaltyRewards.map((reward) => (
              <Card key={reward.id} className={`
                relative overflow-hidden
                ${!reward.available ? 'opacity-60' : ''}
                ${reward.claimed ? 'border-green-300 bg-green-50' : ''}
              `}>
                {reward.claimed && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600 text-white">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Réclamé
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className={`p-3 rounded-lg ${getRewardCategoryColor(reward.category)}`}>
                      <reward.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{reward.title}</CardTitle>
                      <CardDescription className="mt-2">{reward.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Points requis</span>
                      <span className="font-bold text-lg">{reward.pointsRequired.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Vos points</span>
                      <span className={`font-semibold ${
                        userPoints >= reward.pointsRequired ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {userPoints.toLocaleString()}
                      </span>
                    </div>

                    {userPoints >= reward.pointsRequired && (
                      <Progress 
                        value={100} 
                        className="h-2"
                      />
                    )}

                    <Badge className={getRewardCategoryColor(reward.category)}>
                      {reward.category.charAt(0).toUpperCase() + reward.category.slice(1)}
                    </Badge>

                    <Button 
                      className={`w-full ${
                        reward.claimed ? 'bg-green-600' :
                        !reward.available || userPoints < reward.pointsRequired ? 'bg-gray-400' : 'bg-blue-600'
                      }`}
                      disabled={!reward.available || userPoints < reward.pointsRequired || reward.claimed}
                    >
                      {reward.claimed ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Déjà réclamé
                        </>
                      ) : userPoints >= reward.pointsRequired ? (
                        <>
                          <Zap className="h-4 w-4 mr-2" />
                          Réclamer maintenant
                        </>
                      ) : (
                        <>
                          <Clock className="h-4 w-4 mr-2" />
                          Points insuffisants
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Impact Tab */}
      {activeTab === 'impact' && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="h-5 w-5 mr-2 text-red-600" />
                Impact Social de vos Cashbacks
              </CardTitle>
              <CardDescription>
                50% de vos cashbacks sont automatiquement redistribués en donations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="p-4 bg-green-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <DollarSign className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600">${donationsGenerated}</h3>
                  <p className="text-gray-600">Total Donations</p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-blue-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Home className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600">47</h3>
                  <p className="text-gray-600">Familles Aidées</p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-purple-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="h-10 w-10 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-600">23</h3>
                  <p className="text-gray-600">Bourses Éducation</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Répartition des Donations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Logement d'urgence</span>
                    <span className="font-semibold">$568 (40%)</span>
                  </div>
                  <Progress value={40} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Éducation</span>
                    <span className="font-semibold">$426 (30%)</span>
                  </div>
                  <Progress value={30} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Soins médicaux</span>
                    <span className="font-semibold">$284 (20%)</span>
                  </div>
                  <Progress value={20} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Aide alimentaire</span>
                    <span className="font-semibold">$145 (10%)</span>
                  </div>
                  <Progress value={10} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Projets Financés</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    { name: 'Centre Éducatif Al-Noor', funded: 85, goal: 100 },
                    { name: 'Logements Sociaux Dubai', funded: 67, goal: 100 },
                    { name: 'Clinique Mobile', funded: 92, goal: 100 },
                    { name: 'Bourses Universitaires', funded: 34, goal: 100 }
                  ].map((project, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{project.name}</span>
                        <span className="text-sm text-gray-600">{project.funded}%</span>
                      </div>
                      <Progress value={project.funded} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}