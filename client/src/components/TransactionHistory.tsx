import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  Download,
  Eye,
  EyeOff,
  ArrowUpRight,
  ArrowDownLeft,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Calendar,
  CreditCard,
  Banknote,
  Building2,
  User,
  MapPin
} from 'lucide-react';

interface Transaction {
  id: string;
  date: Date;
  amount: number;
  currency: string;
  type: 'debit' | 'credit' | 'transfer' | 'donation' | 'investment';
  status: 'completed' | 'pending' | 'failed' | 'cancelled';
  description: string;
  category: string;
  recipient?: string;
  location?: string;
  reference: string;
  isHalal: boolean;
  fees: number;
  balance: number;
}

export function TransactionHistory() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showAmounts, setShowAmounts] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState('30');

  // Données de démonstration réalistes
  useEffect(() => {
    const demoTransactions: Transaction[] = [
      {
        id: 'TXN001',
        date: new Date(2025, 5, 20),
        amount: -2500,
        currency: 'CHF',
        type: 'donation',
        status: 'completed',
        description: 'Don Dubai Social Housing Project',
        category: 'Philanthropie',
        recipient: 'Dubai Housing Foundation',
        location: 'Dubai, UAE',
        reference: 'DON-2025-001',
        isHalal: true,
        fees: 0,
        balance: 45250
      },
      {
        id: 'TXN002',
        date: new Date(2025, 5, 19),
        amount: 15000,
        currency: 'CHF',
        type: 'credit',
        status: 'completed',
        description: 'Virement entrant - Salaire',
        category: 'Revenus',
        location: 'Genève, CH',
        reference: 'SAL-2025-06',
        isHalal: true,
        fees: 0,
        balance: 47750
      },
      {
        id: 'TXN003',
        date: new Date(2025, 5, 18),
        amount: -850,
        currency: 'AED',
        type: 'debit',
        status: 'completed',
        description: 'Achat Gold Souk Dubai',
        category: 'Shopping',
        location: 'Dubai, UAE',
        reference: 'POS-2025-156',
        isHalal: true,
        fees: 0,
        balance: 32750
      },
      {
        id: 'TXN004',
        date: new Date(2025, 5, 17),
        amount: -5000,
        currency: 'USD',
        type: 'investment',
        status: 'pending',
        description: 'Sukuk Tech Investment Fund',
        category: 'Investissement',
        recipient: 'Islamic Tech Sukuk',
        location: 'Londres, UK',
        reference: 'INV-2025-045',
        isHalal: true,
        fees: 25,
        balance: 33600
      },
      {
        id: 'TXN005',
        date: new Date(2025, 5, 16),
        amount: -1200,
        currency: 'EUR',
        type: 'transfer',
        status: 'completed',
        description: 'Virement famille - Zakat',
        category: 'Zakat',
        recipient: 'Mosquée Al-Nour',
        location: 'Paris, FR',
        reference: 'ZAK-2025-012',
        isHalal: true,
        fees: 0,
        balance: 38600
      },
      {
        id: 'TXN006',
        date: new Date(2025, 5, 15),
        amount: 750,
        currency: 'CHF',
        type: 'credit',
        status: 'completed',
        description: 'Remboursement frais voyage',
        category: 'Remboursement',
        location: 'Zurich, CH',
        reference: 'REM-2025-023',
        isHalal: true,
        fees: 0,
        balance: 39800
      }
    ];
    setTransactions(demoTransactions);
    setFilteredTransactions(demoTransactions);
  }, []);

  useEffect(() => {
    let filtered = transactions;
    
    if (searchTerm) {
      filtered = filtered.filter(t => 
        t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.reference.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedFilter !== 'all') {
      filtered = filtered.filter(t => t.type === selectedFilter);
    }
    
    setFilteredTransactions(filtered);
  }, [searchTerm, selectedFilter, transactions]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'pending': return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'failed': return <XCircle className="h-4 w-4 text-red-600" />;
      case 'cancelled': return <AlertCircle className="h-4 w-4 text-gray-600" />;
      default: return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'debit': return <ArrowUpRight className="h-4 w-4 text-red-600" />;
      case 'credit': return <ArrowDownLeft className="h-4 w-4 text-green-600" />;
      case 'transfer': return <ArrowUpRight className="h-4 w-4 text-blue-600" />;
      case 'donation': return <ArrowUpRight className="h-4 w-4 text-purple-600" />;
      case 'investment': return <ArrowUpRight className="h-4 w-4 text-orange-600" />;
      default: return <CreditCard className="h-4 w-4 text-gray-600" />;
    }
  };

  const formatAmount = (amount: number, currency: string) => {
    if (!showAmounts) return '****';
    return `${amount > 0 ? '+' : ''}${amount.toLocaleString()} ${currency}`;
  };

  const getFilterLabel = (filter: string) => {
    switch (filter) {
      case 'all': return 'Toutes';
      case 'credit': return 'Crédits';
      case 'debit': return 'Débits';
      case 'transfer': return 'Virements';
      case 'donation': return 'Dons';
      case 'investment': return 'Investissements';
      default: return 'Toutes';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Historique des Transactions</h2>
          <p className="text-gray-600">Suivi complet de vos opérations bancaires</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAmounts(!showAmounts)}
            className="flex items-center gap-2"
          >
            {showAmounts ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            {showAmounts ? 'Masquer' : 'Afficher'}
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Exporter
          </Button>
        </div>
      </motion.div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Rechercher transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Type Filter */}
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
            >
              <option value="all">Tous les types</option>
              <option value="credit">Crédits</option>
              <option value="debit">Débits</option>
              <option value="transfer">Virements</option>
              <option value="donation">Dons</option>
              <option value="investment">Investissements</option>
            </select>
            
            {/* Period Filter */}
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
            >
              <option value="7">7 derniers jours</option>
              <option value="30">30 derniers jours</option>
              <option value="90">3 derniers mois</option>
              <option value="365">Année en cours</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Transactions List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            {filteredTransactions.length} transaction(s) trouvée(s)
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <AnimatePresence>
            {filteredTransactions.map((transaction, index) => (
              <motion.div
                key={transaction.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-gray-100 p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      {getTypeIcon(transaction.type)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-gray-900">{transaction.description}</h4>
                        {transaction.isHalal && (
                          <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                            Halal
                          </Badge>
                        )}
                        {getStatusIcon(transaction.status)}
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {transaction.date.toLocaleDateString('fr-FR')}
                        </span>
                        <span className="flex items-center gap-1">
                          <Building2 className="h-3 w-3" />
                          {transaction.category}
                        </span>
                        {transaction.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {transaction.location}
                          </span>
                        )}
                      </div>
                      
                      <div className="text-xs text-gray-400 mt-1">
                        Réf: {transaction.reference}
                        {transaction.recipient && ` • ${transaction.recipient}`}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className={`text-lg font-bold ${
                      transaction.amount > 0 ? 'text-green-600' : 'text-gray-900'
                    }`}>
                      {formatAmount(transaction.amount, transaction.currency)}
                    </div>
                    
                    {transaction.fees > 0 && (
                      <div className="text-xs text-gray-500">
                        Frais: {transaction.fees} {transaction.currency}
                      </div>
                    )}
                    
                    <div className="text-sm text-gray-500">
                      Solde: {showAmounts ? `${transaction.balance.toLocaleString()} CHF` : '****'}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredTransactions.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune transaction trouvée</h3>
              <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Crédits', value: '15,750 CHF', color: 'text-green-600', icon: ArrowDownLeft },
          { label: 'Total Débits', value: '-9,550 CHF', color: 'text-red-600', icon: ArrowUpRight },
          { label: 'Dons Philanthropiques', value: '3,700 CHF', color: 'text-purple-600', icon: ArrowUpRight },
          { label: 'Frais Totaux', value: '25 CHF', color: 'text-orange-600', icon: CreditCard }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className={`text-lg font-bold ${stat.color}`}>
                      {showAmounts ? stat.value : '****'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}