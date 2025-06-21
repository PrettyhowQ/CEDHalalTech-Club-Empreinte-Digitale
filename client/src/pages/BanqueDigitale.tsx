import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  CreditCard,
  Wallet,
  TrendingUp,
  Shield,
  PiggyBank,
  Send,
  Receipt,
  Target,
  Banknote,
  ArrowUpRight,
  ArrowDownLeft,
  Eye,
  EyeOff,
  Plus,
  Settings,
  Bell,
  Star
} from 'lucide-react';

interface BankAccount {
  id: string;
  type: 'checking' | 'savings' | 'investment';
  name: string;
  balance: number;
  currency: string;
  iban: string;
  status: 'active' | 'blocked' | 'pending';
}

interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  category: string;
  date: Date;
  status: 'completed' | 'pending' | 'failed';
}

interface CreditCard {
  id: string;
  number: string;
  type: 'virtual' | 'physical';
  name: string;
  limit: number;
  used: number;
  expiryDate: string;
  status: 'active' | 'blocked' | 'pending';
}

export default function BanqueDigitale() {
  const [accounts, setAccounts] = useState<BankAccount[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [cards, setCards] = useState<CreditCard[]>([]);
  const [showBalance, setShowBalance] = useState(true);
  const [selectedAccount, setSelectedAccount] = useState<string>('');

  useEffect(() => {
    // Simulation des données bancaires
    const mockAccounts: BankAccount[] = [
      {
        id: '1',
        type: 'checking',
        name: 'Compte Courant CED',
        balance: 2847.50,
        currency: 'EUR',
        iban: 'FR76 3000 3000 0000 0000 0000 123',
        status: 'active'
      },
      {
        id: '2',
        type: 'savings',
        name: 'Épargne Formation',
        balance: 5420.00,
        currency: 'EUR',
        iban: 'FR76 3000 3000 0000 0000 0000 456',
        status: 'active'
      },
      {
        id: '3',
        type: 'investment',
        name: 'Investissement IA',
        balance: 12350.75,
        currency: 'EUR',
        iban: 'FR76 3000 3000 0000 0000 0000 789',
        status: 'active'
      }
    ];

    const mockTransactions: Transaction[] = [
      {
        id: '1',
        type: 'credit',
        amount: 299.00,
        description: 'Formation IA Avancée - Remboursement',
        category: 'Education',
        date: new Date(Date.now() - 1000 * 60 * 60 * 2),
        status: 'completed'
      },
      {
        id: '2',
        type: 'debit',
        amount: 149.00,
        description: 'Formation Marketing Digital',
        category: 'Education',
        date: new Date(Date.now() - 1000 * 60 * 60 * 24),
        status: 'completed'
      },
      {
        id: '3',
        type: 'credit',
        amount: 50.00,
        description: 'Cashback Parrainage',
        category: 'Rewards',
        date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
        status: 'completed'
      }
    ];

    const mockCards: CreditCard[] = [
      {
        id: '1',
        number: '**** **** **** 1234',
        type: 'virtual',
        name: 'CED Card Virtual',
        limit: 5000,
        used: 1247,
        expiryDate: '12/27',
        status: 'active'
      },
      {
        id: '2',
        number: '**** **** **** 5678',
        type: 'physical',
        name: 'CED Card Premium',
        limit: 10000,
        used: 3421,
        expiryDate: '06/28',
        status: 'active'
      }
    ];

    setAccounts(mockAccounts);
    setTransactions(mockTransactions);
    setCards(mockCards);
    setSelectedAccount(mockAccounts[0].id);
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  const getAccountTypeIcon = (type: string) => {
    switch (type) {
      case 'checking': return <Wallet className="h-5 w-5" />;
      case 'savings': return <PiggyBank className="h-5 w-5" />;
      case 'investment': return <TrendingUp className="h-5 w-5" />;
      default: return <Wallet className="h-5 w-5" />;
    }
  };

  const getTotalBalance = () => {
    return accounts.reduce((total, account) => total + account.balance, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* En-tête */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">CED Bank 0%</h1>
              <p className="text-green-100">Banque Digitale 100% Gratuite</p>
              <p className="text-sm text-green-200 mt-1">Yakoubi Yamina - Révolution Bancaire à 0%</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge className="bg-white/20 text-white border-white/30">
                  0% Frais
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  0% Commission
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  100% Gratuit
                </Badge>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm">Solde Total</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowBalance(!showBalance)}
                  className="text-white hover:bg-white/20"
                >
                  {showBalance ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                </Button>
              </div>
              <p className="text-2xl font-bold">
                {showBalance ? formatCurrency(getTotalBalance()) : '***,***€'}
              </p>
            </div>
          </div>
        </div>

        {/* Actions rapides */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
                <Send className="h-6 w-6 text-green-600" />
              </div>
              <p className="font-medium">Virement</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                <Receipt className="h-6 w-6 text-blue-600" />
              </div>
              <p className="font-medium">Paiements</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-purple-600" />
              </div>
              <p className="font-medium">Cartes</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-orange-100 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-orange-600" />
              </div>
              <p className="font-medium">Objectifs</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Comptes bancaires */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Banknote className="h-5 w-5 text-blue-600" />
                  Mes Comptes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {accounts.map((account) => (
                  <div
                    key={account.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedAccount === account.id 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedAccount(account.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          account.type === 'checking' ? 'bg-blue-100 text-blue-600' :
                          account.type === 'savings' ? 'bg-green-100 text-green-600' :
                          'bg-purple-100 text-purple-600'
                        }`}>
                          {getAccountTypeIcon(account.type)}
                        </div>
                        <div>
                          <h3 className="font-medium">{account.name}</h3>
                          <p className="text-sm text-gray-500">{account.iban}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">
                          {showBalance ? formatCurrency(account.balance) : '***€'}
                        </p>
                        <Badge variant={account.status === 'active' ? 'default' : 'secondary'}>
                          {account.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Transactions récentes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Receipt className="h-5 w-5 text-gray-600" />
                  Transactions Récentes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === 'credit' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-red-100 text-red-600'
                      }`}>
                        {transaction.type === 'credit' ? 
                          <ArrowDownLeft className="h-5 w-5" /> : 
                          <ArrowUpRight className="h-5 w-5" />
                        }
                      </div>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-gray-500">
                          {transaction.date.toLocaleDateString('fr-FR')} • {transaction.category}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${
                        transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.type === 'credit' ? '+' : '-'}{formatCurrency(transaction.amount)}
                      </p>
                      <Badge variant={
                        transaction.status === 'completed' ? 'default' :
                        transaction.status === 'pending' ? 'secondary' : 'destructive'
                      }>
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Cartes et services */}
          <div className="space-y-6">
            {/* Cartes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-purple-600" />
                  Mes Cartes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cards.map((card) => (
                  <div key={card.id} className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl text-white">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-sm opacity-80">{card.name}</p>
                        <p className="text-lg font-mono">{card.number}</p>
                      </div>
                      <Badge variant="secondary" className="bg-white/20 text-white">
                        {card.type}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs opacity-60">Limite</p>
                        <p className="font-bold">{formatCurrency(card.limit)}</p>
                      </div>
                      <div>
                        <p className="text-xs opacity-60">Exp.</p>
                        <p className="font-mono">{card.expiryDate}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Utilisé</span>
                        <span>{formatCurrency(card.used)} / {formatCurrency(card.limit)}</span>
                      </div>
                      <Progress value={(card.used / card.limit) * 100} className="h-2" />
                    </div>
                  </div>
                ))}
                <Button className="w-full" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Nouvelle Carte
                </Button>
              </CardContent>
            </Card>

            {/* Services exclusifs */}
            <Card className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-600" />
                  Services Exclusifs CED
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-white rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-800">Prêts Formation 0%</h4>
                  <p className="text-sm text-green-600">Aucun taux d'intérêt - 100% gratuit</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-yellow-200">
                  <h4 className="font-medium text-yellow-800">Épargne IA</h4>
                  <p className="text-sm text-yellow-600">Investissement automatisé dans l'IA</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-yellow-200">
                  <h4 className="font-medium text-yellow-800">Cashback Formations</h4>
                  <p className="text-sm text-yellow-600">5% sur toutes les formations CED</p>
                </div>
              </CardContent>
            </Card>

            {/* Sécurité */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  Sécurité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Authentification 2FA</span>
                    <Badge variant="default" className="bg-green-500">Activé</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Chiffrement E2E</span>
                    <Badge variant="default" className="bg-green-500">Actif</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Notifications SMS</span>
                    <Badge variant="default" className="bg-green-500">Activé</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}