import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PiggyBank,
  Target,
  TrendingUp,
  AlertTriangle,
  Plus,
  Edit2,
  Trash2,
  Calendar,
  DollarSign,
  Percent,
  CheckCircle,
  Clock,
  Star,
  Home,
  Car,
  Utensils,
  Heart,
  GraduationCap,
  Plane
} from 'lucide-react';

interface BudgetCategory {
  id: string;
  name: string;
  allocated: number;
  spent: number;
  icon: any;
  color: string;
  isHalal: boolean;
  priority: 'high' | 'medium' | 'low';
}

interface FinancialGoal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  deadline: Date;
  category: string;
  isHalal: boolean;
  priority: 'high' | 'medium' | 'low';
}

export function BudgetPlanner() {
  const [monthlyIncome, setMonthlyIncome] = useState(15000);
  const [categories, setCategories] = useState<BudgetCategory[]>([]);
  const [goals, setGoals] = useState<FinancialGoal[]>([]);
  const [zakatAmount, setZakatAmount] = useState(0);

  useEffect(() => {
    const budgetCategories: BudgetCategory[] = [
      {
        id: 'housing',
        name: 'Logement',
        allocated: 4500,
        spent: 4200,
        icon: Home,
        color: 'bg-blue-500',
        isHalal: true,
        priority: 'high'
      },
      {
        id: 'food',
        name: 'Alimentation Halal',
        allocated: 1200,
        spent: 980,
        icon: Utensils,
        color: 'bg-green-500',
        isHalal: true,
        priority: 'high'
      },
      {
        id: 'transport',
        name: 'Transport',
        allocated: 800,
        spent: 650,
        icon: Car,
        color: 'bg-purple-500',
        isHalal: true,
        priority: 'medium'
      },
      {
        id: 'education',
        name: 'Éducation Islamic',
        allocated: 600,
        spent: 450,
        icon: GraduationCap,
        color: 'bg-orange-500',
        isHalal: true,
        priority: 'medium'
      },
      {
        id: 'charity',
        name: 'Zakat & Sadaqah',
        allocated: 1500,
        spent: 1200,
        icon: Heart,
        color: 'bg-pink-500',
        isHalal: true,
        priority: 'high'
      },
      {
        id: 'savings',
        name: 'Épargne Halal',
        allocated: 3000,
        spent: 2800,
        icon: PiggyBank,
        color: 'bg-indigo-500',
        isHalal: true,
        priority: 'high'
      },
      {
        id: 'travel',
        name: 'Hajj & Voyages',
        allocated: 2000,
        spent: 500,
        icon: Plane,
        color: 'bg-teal-500',
        isHalal: true,
        priority: 'low'
      }
    ];

    const financialGoals: FinancialGoal[] = [
      {
        id: 'hajj',
        title: 'Hajj 2026',
        targetAmount: 25000,
        currentAmount: 18500,
        deadline: new Date(2026, 5, 1),
        category: 'Religieux',
        isHalal: true,
        priority: 'high'
      },
      {
        id: 'house',
        title: 'Achat Maison (Murabaha)',
        targetAmount: 150000,
        currentAmount: 45000,
        deadline: new Date(2027, 11, 31),
        category: 'Immobilier',
        isHalal: true,
        priority: 'high'
      },
      {
        id: 'emergency',
        title: 'Fonds d\'urgence',
        targetAmount: 30000,
        currentAmount: 22000,
        deadline: new Date(2025, 11, 31),
        category: 'Sécurité',
        isHalal: true,
        priority: 'medium'
      },
      {
        id: 'education',
        title: 'Éducation enfants',
        targetAmount: 50000,
        currentAmount: 12000,
        deadline: new Date(2030, 8, 1),
        category: 'Famille',
        isHalal: true,
        priority: 'medium'
      }
    ];

    setCategories(budgetCategories);
    setGoals(financialGoals);
    
    // Calcul Zakat (2.5% des économies)
    const totalSavings = 45000; // Économies totales
    setZakatAmount(totalSavings * 0.025);
  }, []);

  const totalAllocated = categories.reduce((sum, cat) => sum + cat.allocated, 0);
  const totalSpent = categories.reduce((sum, cat) => sum + cat.spent, 0);
  const remainingBudget = monthlyIncome - totalAllocated;

  const getProgressColor = (spent: number, allocated: number) => {
    const percentage = (spent / allocated) * 100;
    if (percentage > 90) return 'bg-red-500';
    if (percentage > 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getGoalProgress = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const getDaysToDeadline = (deadline: Date) => {
    const today = new Date();
    const timeDiff = deadline.getTime() - today.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
            <PiggyBank className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Planificateur Budget Islamic</h2>
            <p className="text-gray-600">Gestion financière conforme à la Charia</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge className="bg-green-100 text-green-800">
            <Star className="h-3 w-3 mr-1" />
            Halal Certifié
          </Badge>
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Ajouter
          </Button>
        </div>
      </motion.div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            title: 'Revenus Mensuels',
            value: `${monthlyIncome.toLocaleString()} CHF`,
            icon: DollarSign,
            color: 'text-green-600',
            bgColor: 'bg-green-50'
          },
          {
            title: 'Budget Alloué',
            value: `${totalAllocated.toLocaleString()} CHF`,
            icon: Target,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50'
          },
          {
            title: 'Dépensé ce mois',
            value: `${totalSpent.toLocaleString()} CHF`,
            icon: TrendingUp,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50'
          },
          {
            title: 'Zakat Annuelle',
            value: `${zakatAmount.toLocaleString()} CHF`,
            icon: Heart,
            color: 'text-pink-600',
            bgColor: 'bg-pink-50'
          }
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${card.bgColor} rounded-lg flex items-center justify-center`}>
                    <card.icon className={`h-6 w-6 ${card.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{card.title}</p>
                    <p className={`text-xl font-bold ${card.color}`}>{card.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Budget Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Catégories de Budget
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}>
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{category.name}</h3>
                      <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                        Halal
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-sm text-gray-600">
                      {category.spent.toLocaleString()} / {category.allocated.toLocaleString()} CHF
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progression</span>
                    <span>{Math.round((category.spent / category.allocated) * 100)}%</span>
                  </div>
                  
                  <Progress 
                    value={(category.spent / category.allocated) * 100}
                    className="h-2"
                  />
                  
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Restant: {(category.allocated - category.spent).toLocaleString()} CHF</span>
                    {category.spent > category.allocated * 0.9 && (
                      <Badge variant="outline" className="text-red-600 border-red-200">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        Limite proche
                      </Badge>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Financial Goals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Objectifs Financiers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{goal.title}</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {goal.category}
                      </Badge>
                      {goal.isHalal && (
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          Halal
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">
                      {Math.round(getGoalProgress(goal.currentAmount, goal.targetAmount))}%
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Progress 
                    value={getGoalProgress(goal.currentAmount, goal.targetAmount)}
                    className="h-3"
                  />
                  
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{goal.currentAmount.toLocaleString()} CHF</span>
                    <span>{goal.targetAmount.toLocaleString()} CHF</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {getDaysToDeadline(goal.deadline)} jours restants
                      </span>
                    </div>
                    
                    <div className="text-sm">
                      <span className="text-gray-500">Manquant: </span>
                      <span className="font-semibold">
                        {(goal.targetAmount - goal.currentAmount).toLocaleString()} CHF
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Plus className="h-3 w-3 mr-1" />
                      Alimenter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Islamic Finance Guidelines */}
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Star className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-green-900 mb-2">Principes de Gestion Financière Islamique</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-800">
                <div>
                  <h4 className="font-medium mb-2">Obligations (Fard):</h4>
                  <ul className="space-y-1">
                    <li>• Zakat: 2.5% des économies annuelles</li>
                    <li>• Éviter le Riba (intérêts usuraires)</li>
                    <li>• Investissements Halal uniquement</li>
                    <li>• Transparence totale des transactions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Recommandations (Mustahabb):</h4>
                  <ul className="space-y-1">
                    <li>• Sadaqah régulières (charité volontaire)</li>
                    <li>• Épargne pour le Hajj</li>
                    <li>• Support des projets communautaires</li>
                    <li>• Planification familiale responsable</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}