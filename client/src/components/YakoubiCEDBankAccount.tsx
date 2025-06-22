import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard,
  Euro,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign,
  Wallet,
  Building,
  User,
  Phone,
  Mail,
  MapPin,
  Award,
  Gift,
  Package,
  ShoppingCart,
  Truck,
  Heart,
  Star,
  Shield,
  Zap,
  Calendar,
  BarChart3,
  Receipt,
  Target
} from 'lucide-react';

interface Transaction {
  id: string;
  type: 'donation' | 'sale' | 'commission' | 'salary';
  amount: number;
  currency: 'EUR' | 'USD' | 'CHF';
  description: string;
  source: string;
  date: Date;
  status: 'completed' | 'pending' | 'processing';
  commission?: number;
}

interface SalaryCalculation {
  baseSalary: number;
  donationCommission: number;
  saleCommission: number;
  bonusTarget: number;
  totalEarnings: number;
  taxDeduction: number;
  netSalary: number;
}

export function YakoubiCEDBankAccount() {
  const [activeTab, setActiveTab] = useState('account');
  const [totalBalance, setTotalBalance] = useState(2456.75);
  const [monthlyEarnings, setMonthlyEarnings] = useState(0);

  // Informations compte B. Yakoubi
  const accountInfo = {
    accountNumber: 'CED-YAK-2025-0001',
    iban: 'FR76 3000 3035 1200 0372 8944 517',
    bic: 'CEDBFR2A',
    holder: 'YAKOUBI Brahim',
    accountType: 'Compte Professionnel TechForAll',
    openingDate: new Date('2025-01-01'),
    status: 'active',
    creditLimit: 5000,
    interestRate: 0 // Banque islamique 0%
  };

  // Transactions récentes
  const transactions: Transaction[] = [
    {
      id: 'T001',
      type: 'commission',
      amount: 45.50,
      currency: 'EUR',
      description: 'Commission vente MacBook Pro reconditionné',
      source: 'Boutique Costa del Sol',
      date: new Date('2025-01-20'),
      status: 'completed',
      commission: 15 // 15% commission
    },
    {
      id: 'T002',
      type: 'donation',
      amount: 25.00,
      currency: 'EUR',
      description: 'Commission don matériel Swiss Tech Foundation',
      source: 'TechForAll Suisse',
      date: new Date('2025-01-19'),
      status: 'completed',
      commission: 10 // 10% commission
    },
    {
      id: 'T003',
      type: 'salary',
      amount: 800.00,
      currency: 'EUR',
      description: 'Salaire mensuel responsable Costa del Sol',
      source: 'TechForAll Association',
      date: new Date('2025-01-15'),
      status: 'completed'
    },
    {
      id: 'T004',
      type: 'commission',
      amount: 127.50,
      currency: 'EUR',
      description: 'Commission vente Kit Outils Hilti',
      source: 'Boutique Costa del Sol',
      date: new Date('2025-01-18'),
      status: 'completed',
      commission: 15
    },
    {
      id: 'T005',
      type: 'sale',
      amount: 320.00,
      currency: 'EUR',
      description: 'Vente moteur Yamaha 25CV reconditionné',
      source: 'Costa del Sol',
      date: new Date('2025-01-17'),
      status: 'pending',
      commission: 20 // 20% pour équipement marin
    }
  ];

  // Calcul salaire
  const salaryCalculation: SalaryCalculation = {
    baseSalary: 800.00, // Salaire de base mensuel
    donationCommission: transactions.filter(t => t.type === 'donation').reduce((sum, t) => sum + (t.amount || 0), 0),
    saleCommission: transactions.filter(t => t.type === 'commission').reduce((sum, t) => sum + (t.amount || 0), 0),
    bonusTarget: 1500, // Objectif mensuel pour bonus
    totalEarnings: 0,
    taxDeduction: 0,
    netSalary: 0
  };

  salaryCalculation.totalEarnings = salaryCalculation.baseSalary + salaryCalculation.donationCommission + salaryCalculation.saleCommission;
  salaryCalculation.taxDeduction = salaryCalculation.totalEarnings * 0.12; // 12% charges sociales
  salaryCalculation.netSalary = salaryCalculation.totalEarnings - salaryCalculation.taxDeduction;

  useEffect(() => {
    setMonthlyEarnings(salaryCalculation.netSalary);
  }, []);

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'donation': return Gift;
      case 'sale': return ShoppingCart;
      case 'commission': return Star;
      case 'salary': return Building;
      default: return Euro;
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'donation': return 'text-green-600';
      case 'sale': return 'text-blue-600';
      case 'commission': return 'text-purple-600';
      case 'salary': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-orange-100 text-orange-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Compte */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 rounded-2xl flex items-center justify-center"
            >
              <CreditCard className="h-8 w-8 text-white" />
            </motion.div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Compte CED Bank - B. Yakoubi
            </h1>
          </div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Compte professionnel TechForAll avec rémunération basée sur les ventes et dons solidaires
          </p>
          <div className="flex justify-center gap-2">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Building className="h-3 w-3 mr-1" />
              Compte Professionnel
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Shield className="h-3 w-3 mr-1" />
              Banque Islamique 0%
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              <Award className="h-3 w-3 mr-1" />
              Rémunération Variable
            </Badge>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="account">Compte</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="salary">Rémunération</TabsTrigger>
            <TabsTrigger value="commissions">Commissions</TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
          </TabsList>

          {/* Informations Compte */}
          <TabsContent value="account">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Solde et infos principales */}
              <Card className="bg-gradient-to-br from-blue-100 to-green-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="h-6 w-6 text-blue-600" />
                    Solde du Compte
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="text-5xl font-bold text-blue-600 mb-2"
                    >
                      {totalBalance.toLocaleString('fr-FR')} €
                    </motion.div>
                    <p className="text-gray-600">Solde disponible</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-600" />
                      <p className="text-2xl font-bold text-green-600">+{monthlyEarnings.toFixed(2)}€</p>
                      <p className="text-sm text-gray-600">Ce mois</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <Target className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                      <p className="text-2xl font-bold text-purple-600">{((monthlyEarnings / 1500) * 100).toFixed(0)}%</p>
                      <p className="text-sm text-gray-600">Objectif atteint</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Informations compte */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-6 w-6 text-purple-600" />
                    Informations Compte
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Titulaire:</span>
                      <span className="font-medium">{accountInfo.holder}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">N° Compte:</span>
                      <span className="font-medium">{accountInfo.accountNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">IBAN:</span>
                      <span className="font-medium">{accountInfo.iban}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">BIC/SWIFT:</span>
                      <span className="font-medium">{accountInfo.bic}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-medium">{accountInfo.accountType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ouverture:</span>
                      <span className="font-medium">{accountInfo.openingDate.toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Taux d'intérêt:</span>
                      <span className="font-medium text-green-600">{accountInfo.interestRate}% (Halal)</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-medium text-green-800">Compte Actif</span>
                    </div>
                    <p className="text-sm text-green-700">
                      Compte professionnel conforme aux principes de la finance islamique
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </TabsContent>

          {/* Transactions */}
          <TabsContent value="transactions">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Receipt className="h-6 w-6" />
                  Historique des Transactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => {
                    const IconComponent = getTransactionIcon(transaction.type);
                    return (
                      <motion.div
                        key={transaction.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gray-100`}>
                            <IconComponent className={`h-6 w-6 ${getTransactionColor(transaction.type)}`} />
                          </div>
                          <div>
                            <h3 className="font-medium">{transaction.description}</h3>
                            <p className="text-sm text-gray-600">{transaction.source}</p>
                            <p className="text-xs text-gray-500">{transaction.date.toLocaleDateString('fr-FR')}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-green-600">
                            +{transaction.amount.toFixed(2)} {transaction.currency}
                          </p>
                          <Badge variant="outline" className={getStatusColor(transaction.status)}>
                            {transaction.status}
                          </Badge>
                          {transaction.commission && (
                            <p className="text-xs text-purple-600 mt-1">
                              Commission: {transaction.commission}%
                            </p>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Rémunération */}
          <TabsContent value="salary">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Calcul salaire */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-6 w-6 text-green-600" />
                    Calcul Rémunération Mensuelle
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Salaire de base:</span>
                      <span className="font-bold text-blue-600">{salaryCalculation.baseSalary.toFixed(2)} €</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Commissions dons:</span>
                      <span className="font-bold text-green-600">+{salaryCalculation.donationCommission.toFixed(2)} €</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Commissions ventes:</span>
                      <span className="font-bold text-purple-600">+{salaryCalculation.saleCommission.toFixed(2)} €</span>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Total brut:</span>
                      <span className="font-bold text-lg">{salaryCalculation.totalEarnings.toFixed(2)} €</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Charges sociales (12%):</span>
                      <span className="text-red-600">-{salaryCalculation.taxDeduction.toFixed(2)} €</span>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <span className="font-bold text-green-800">SALAIRE NET:</span>
                      <span className="font-bold text-2xl text-green-600">{salaryCalculation.netSalary.toFixed(2)} €</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Objectifs et bonus */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-6 w-6 text-orange-600" />
                    Objectifs & Bonus
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Objectif mensuel:</span>
                      <span className="font-bold">{salaryCalculation.bonusTarget} €</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min((salaryCalculation.totalEarnings / salaryCalculation.bonusTarget) * 100, 100)}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {((salaryCalculation.totalEarnings / salaryCalculation.bonusTarget) * 100).toFixed(1)}% atteint
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">Bonus disponibles:</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• 100€ si objectif atteint</li>
                        <li>• 200€ si dépassement +20%</li>
                        <li>• 500€ bonus trimestre exceptionnel</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-800 mb-2">Avantages TechForAll:</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Formation IA gratuite</li>
                        <li>• Matériel reconditionné à prix réduit</li>
                        <li>• Participation aux bénéfices annuels</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </TabsContent>

          {/* Commissions */}
          <TabsContent value="commissions">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-purple-600" />
                  Barème des Commissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-purple-800">Commissions Ventes</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                        <span>PC/MacBook reconditionnés</span>
                        <Badge className="bg-purple-600">15%</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                        <span>Moteurs marins</span>
                        <Badge className="bg-purple-600">20%</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                        <span>Outils BTP</span>
                        <Badge className="bg-purple-600">15%</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                        <span>Équipement mécanique</span>
                        <Badge className="bg-purple-600">18%</Badge>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-green-800">Commissions Dons</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span>Dons matériels traités</span>
                        <Badge className="bg-green-600">10%</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span>Dons financiers facilités</span>
                        <Badge className="bg-green-600">5%</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span>Nouveaux donateurs</span>
                        <Badge className="bg-green-600">50€/donateur</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span>Partenariats entreprises</span>
                        <Badge className="bg-green-600">200€/partenariat</Badge>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4 text-center">Performance Actuelle</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <ShoppingCart className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <p className="text-2xl font-bold text-blue-600">
                        {transactions.filter(t => t.type === 'sale').length}
                      </p>
                      <p className="text-sm text-gray-600">Ventes ce mois</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <Gift className="h-8 w-8 mx-auto mb-2 text-green-600" />
                      <p className="text-2xl font-bold text-green-600">
                        {transactions.filter(t => t.type === 'donation').length}
                      </p>
                      <p className="text-sm text-gray-600">Dons traités</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <Euro className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                      <p className="text-2xl font-bold text-purple-600">
                        {(salaryCalculation.donationCommission + salaryCalculation.saleCommission).toFixed(0)}€
                      </p>
                      <p className="text-sm text-gray-600">Commissions totales</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Paramètres */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-6 w-6" />
                  Paramètres du Compte
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Informations personnelles */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Informations Personnelles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-600">Nom complet</label>
                      <div className="p-3 bg-gray-50 rounded-lg border">
                        YAKOUBI Brahim
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-600">Fonction</label>
                      <div className="p-3 bg-gray-50 rounded-lg border">
                        Responsable Costa del Sol
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-600">Email</label>
                      <div className="p-3 bg-gray-50 rounded-lg border">
                        brahim.yakoubi@techforall.org
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-600">Téléphone</label>
                      <div className="p-3 bg-gray-50 rounded-lg border">
                        +34 952 123 456
                      </div>
                    </div>
                  </div>
                </div>

                {/* Préférences de paiement */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Préférences de Paiement</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span>Virement mensuel automatique</span>
                      <Badge className="bg-green-600">Activé</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span>Notifications de commission</span>
                      <Badge className="bg-blue-600">SMS + Email</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span>Rapport mensuel</span>
                      <Badge className="bg-purple-600">PDF + Dashboard</Badge>
                    </div>
                  </div>
                </div>

                {/* Actions rapides */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Actions Rapides</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
                      <Receipt className="h-6 w-6 mb-2" />
                      Télécharger relevé
                    </Button>
                    <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
                      <Mail className="h-6 w-6 mb-2" />
                      Contacter support
                    </Button>
                    <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
                      <Calendar className="h-6 w-6 mb-2" />
                      Planifier RDV
                    </Button>
                    <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
                      <Building className="h-6 w-6 mb-2" />
                      Voir agences CED
                    </Button>
                  </div>
                </div>

              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>

        {/* Footer Message */}
        <Card className="bg-gradient-to-r from-green-100 to-blue-100 border border-green-200">
          <CardContent className="p-6 text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-bold text-green-800">Emploi Stable & Rémunération Équitable</h3>
            </div>
            <p className="text-green-700 mb-4">
              Ce compte CED Bank permet à B. Yakoubi d'avoir un emploi décent pour subvenir aux besoins de sa famille 
              tout en contribuant à la mission solidaire de TechForAll.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                onClick={() => window.location.href = '/techforall'}
                variant="outline"
                className="border-green-300 text-green-700"
              >
                <Building className="h-4 w-4 mr-2" />
                Association TechForAll
              </Button>
              <Button 
                onClick={() => window.location.href = '/costa-del-sol'}
                variant="outline"
                className="border-blue-300 text-blue-700"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Costa del Sol
              </Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}