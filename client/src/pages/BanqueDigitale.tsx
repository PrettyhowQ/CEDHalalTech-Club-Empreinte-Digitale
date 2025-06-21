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
  Star,
  Smartphone
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
        name: 'Compte Courant Suisse',
        balance: 2847.50,
        currency: 'CHF',
        iban: 'CH93 0076 2011 6238 5295 7',
        status: 'active'
      },
      {
        id: '2',
        type: 'savings',
        name: 'Épargne Dubaï',
        balance: 5420.00,
        currency: 'AED',
        iban: 'AE07 0331 2345 6789 0123 456',
        status: 'active'
      },
      {
        id: '3',
        type: 'investment',
        name: 'Investissement International',
        balance: 12350.75,
        currency: 'USD',
        iban: 'US64 SVBK USA6 1234 5678 90',
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

  const formatCurrency = (amount: number, currency = 'EUR') => {
    const localeMap = {
      'CHF': 'de-CH',
      'AED': 'ar-AE', 
      'USD': 'en-US',
      'EUR': 'fr-FR'
    };
    
    return new Intl.NumberFormat(localeMap[currency as keyof typeof localeMap] || 'fr-FR', {
      style: 'currency',
      currency: currency
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
              <h1 className="text-3xl font-bold mb-2">CED Bank International</h1>
              <p className="text-green-100">Siège Suisse • Expansion Dubaï</p>
              <p className="text-sm text-green-200 mt-1">Yakoubi Yamina - Finance Islamique & Services 0%</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge className="bg-white/20 text-white border-white/30">
                  🇨🇭 Siège Suisse
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  🇦🇪 Finance Islamique
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  0% Intérêts
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

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.location.href = '/app-bancaire'}>
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-blue-600" />
              </div>
              <p className="font-medium">App Mobile</p>
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
                          {showBalance ? formatCurrency(account.balance, account.currency) : '***'}
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
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-green-600" />
                  Finance Islamique CED
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-white rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-800">Financement Halal 0%</h4>
                  <p className="text-sm text-green-600">Conforme à la Charia - Sans intérêts</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-800">Murabaha Formation</h4>
                  <p className="text-sm text-blue-600">Financement participatif éthique</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-purple-200">
                  <h4 className="font-medium text-purple-800">Sukuk Investissement</h4>
                  <p className="text-sm text-purple-600">Obligations islamiques technologiques</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-orange-200">
                  <h4 className="font-medium text-orange-800">Takaful Protection</h4>
                  <p className="text-sm text-orange-600">Assurance participative islamique</p>
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

            {/* Réseau Donateurs Dubaï */}
            <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-amber-600" />
                  Réseau Dubaï
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-700">🇦🇪</div>
                    <p className="text-sm font-medium text-amber-800">Hub Philanthropique</p>
                    <p className="text-xs text-amber-600">Investisseurs & Donateurs</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-amber-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Projets stratégiques</span>
                      <Badge className="bg-amber-100 text-amber-800">En développement</Badge>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Financement éthique selon la Charia
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full border-amber-300 text-amber-700 hover:bg-amber-50">
                    Accès Investisseurs
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section Parrainage Intégrée */}
        <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-green-50">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Programme de Parrainage CED Bank
                </h3>
                <p className="text-gray-600 mb-4">
                  Invitez vos proches à rejoindre la révolution bancaire islamique et gagnez des récompenses exclusives.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-lg font-bold text-green-600">50 CHF</div>
                    <div className="text-xs text-gray-600">Par parrainage</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-lg font-bold text-blue-600">0%</div>
                    <div className="text-xs text-gray-600">Frais réseau</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-lg font-bold text-purple-600">✓</div>
                    <div className="text-xs text-gray-600">Halal certifié</div>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => window.location.href = '/parrainage'}>
                  Commencer le Parrainage
                </Button>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mb-4">
                  <div className="text-white text-4xl font-bold">🤝</div>
                </div>
                <p className="text-sm text-gray-600">
                  Rejoignez plus de 23 ambassadeurs CED Bank qui ont déjà parrainé 156+ nouveaux membres
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}