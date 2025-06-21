import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wallet,
  Send,
  Download,
  QrCode,
  Copy,
  Eye,
  EyeOff,
  TrendingUp,
  TrendingDown,
  RefreshCw,
  Plus,
  ArrowUpRight,
  ArrowDownLeft,
  Shield,
  Star,
  AlertTriangle,
  Clock,
  ChevronRight
} from 'lucide-react';

interface CryptoAsset {
  symbol: string;
  name: string;
  balance: number;
  value: number;
  change24h: number;
  price: number;
  isHalal: boolean;
  network: string;
  icon: string;
  address: string;
}

interface WalletTransaction {
  id: string;
  type: 'send' | 'receive' | 'swap' | 'stake';
  asset: string;
  amount: number;
  value: number;
  to?: string;
  from?: string;
  timestamp: Date;
  status: 'completed' | 'pending' | 'failed';
  hash: string;
  fees: number;
}

export function CryptoWallet() {
  const [assets, setAssets] = useState<CryptoAsset[]>([]);
  const [transactions, setTransactions] = useState<WalletTransaction[]>([]);
  const [totalValue, setTotalValue] = useState(0);
  const [showBalances, setShowBalances] = useState(true);
  const [selectedAsset, setSelectedAsset] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Cryptomonnaies conformes à la finance islamique
    const halalCryptos: CryptoAsset[] = [
      {
        symbol: 'BTC',
        name: 'Bitcoin',
        balance: 0.45782,
        value: 28450.32,
        change24h: 2.34,
        price: 62150.00,
        isHalal: true, // Considéré halal par certains érudits
        network: 'Bitcoin',
        icon: '₿',
        address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh'
      },
      {
        symbol: 'ETH',
        name: 'Ethereum',
        balance: 8.92341,
        value: 21847.65,
        change24h: -1.23,
        price: 2448.90,
        isHalal: true, // Plateforme pour contrats intelligents
        network: 'Ethereum',
        icon: 'Ξ',
        address: '0x742c2d8b9e9f8c7a6d8f9e0c1a2b3c4d5e6f7a8b'
      },
      {
        symbol: 'USDC',
        name: 'USD Coin',
        balance: 15420.00,
        value: 15420.00,
        change24h: 0.01,
        price: 1.00,
        isHalal: true, // Stablecoin adossé au dollar
        network: 'Ethereum',
        icon: '$',
        address: '0x742c2d8b9e9f8c7a6d8f9e0c1a2b3c4d5e6f7a8b'
      },
      {
        symbol: 'GOLD',
        name: 'PAX Gold',
        balance: 12.5,
        value: 25875.00,
        change24h: 0.87,
        price: 2070.00,
        isHalal: true, // Adossé à l'or physique
        network: 'Ethereum',
        icon: '🏅',
        address: '0x742c2d8b9e9f8c7a6d8f9e0c1a2b3c4d5e6f7a8b'
      },
      {
        symbol: 'HAQQ',
        name: 'Islamic Coin',
        balance: 50000,
        value: 8750.00,
        change24h: 5.67,
        price: 0.175,
        isHalal: true, // Crypto islamique native
        network: 'HAQQ Network',
        icon: '☪️',
        address: 'haqq1xyz2abc3def4ghi5jkl6mno7pqr8stu9vwx0yz1'
      },
      {
        symbol: 'MRHB',
        name: 'MarhabaDeFi',
        balance: 25000,
        value: 3750.00,
        change24h: -2.45,
        price: 0.15,
        isHalal: true, // DeFi islamique
        network: 'Polygon',
        icon: '🌙',
        address: '0x8b7a9c2d1e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b'
      }
    ];

    setAssets(halalCryptos);
    setTotalValue(halalCryptos.reduce((sum, asset) => sum + asset.value, 0));

    // Transactions de démonstration
    const demoTransactions: WalletTransaction[] = [
      {
        id: 'tx001',
        type: 'receive',
        asset: 'BTC',
        amount: 0.1,
        value: 6215.00,
        from: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        status: 'completed',
        hash: '4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b',
        fees: 0.00015
      },
      {
        id: 'tx002',
        type: 'send',
        asset: 'USDC',
        amount: 2500,
        value: 2500.00,
        to: '0x8ba1f109551bD432803012645Hac136c22C20376',
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
        status: 'completed',
        hash: '5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c',
        fees: 2.50
      },
      {
        id: 'tx003',
        type: 'swap',
        asset: 'ETH',
        amount: 2.0,
        value: 4897.80,
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
        status: 'completed',
        hash: '6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d',
        fees: 15.75
      }
    ];

    setTransactions(demoTransactions);
  }, []);

  const refreshPrices = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
  };

  const formatValue = (value: number) => {
    if (!showBalances) return '****';
    return value.toLocaleString('fr-CH', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const formatCrypto = (amount: number, symbol: string) => {
    if (!showBalances) return '****';
    return `${amount.toLocaleString('fr-CH', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 8
    })} ${symbol}`;
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center">
            <Wallet className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Wallet Crypto Halal</h2>
            <p className="text-gray-600">Cryptomonnaies conformes à la finance islamique</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge className="bg-green-100 text-green-800">
            <Shield className="h-3 w-3 mr-1" />
            Halal Certifié
          </Badge>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowBalances(!showBalances)}
          >
            {showBalances ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={refreshPrices}
            disabled={isLoading}
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          </Button>
        </div>
      </motion.div>

      {/* Portfolio Overview */}
      <Card className="bg-gradient-to-r from-orange-50 to-purple-50 border-orange-200">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600 mb-1">Valeur Totale du Portfolio</p>
              <p className="text-3xl font-bold text-gray-900">
                {formatValue(totalValue)} CHF
              </p>
              <p className="text-sm text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +8.45% (24h)
              </p>
            </div>
            
            <div className="flex justify-center gap-4">
              <Button className="bg-orange-600 text-white hover:bg-orange-700 flex items-center gap-2">
                <Send className="h-4 w-4" />
                Envoyer
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Recevoir
              </Button>
            </div>
            
            <div className="text-center md:text-right">
              <Button variant="outline" className="w-full md:w-auto flex items-center gap-2">
                <QrCode className="h-4 w-4" />
                QR Code
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Assets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {assets.map((asset, index) => (
            <motion.div
              key={asset.symbol}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                        {asset.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{asset.symbol}</h3>
                        <p className="text-sm text-gray-600">{asset.name}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      {asset.isHalal && (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 mb-1">
                          Halal
                        </Badge>
                      )}
                      <div className={`flex items-center gap-1 text-sm ${
                        asset.change24h > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {asset.change24h > 0 ? (
                          <TrendingUp className="h-3 w-3" />
                        ) : (
                          <TrendingDown className="h-3 w-3" />
                        )}
                        {Math.abs(asset.change24h)}%
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div>
                      <p className="text-lg font-bold">
                        {formatValue(asset.value)} CHF
                      </p>
                      <p className="text-sm text-gray-600">
                        {formatCrypto(asset.balance, asset.symbol)}
                      </p>
                    </div>
                    
                    <div className="text-xs text-gray-500">
                      <p>Prix: {asset.price.toLocaleString()} CHF</p>
                      <p>Réseau: {asset.network}</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Send className="h-3 w-3 mr-1" />
                        Envoyer
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Download className="h-3 w-3 mr-1" />
                        Recevoir
                      </Button>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Input
                        value={asset.address}
                        readOnly
                        className="text-xs font-mono"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyAddress(asset.address)}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Transactions Récentes
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {transactions.map((tx, index) => (
            <motion.div
              key={tx.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-gray-100 p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    tx.type === 'receive' ? 'bg-green-100' : 
                    tx.type === 'send' ? 'bg-red-100' : 'bg-blue-100'
                  }`}>
                    {tx.type === 'receive' ? (
                      <ArrowDownLeft className="h-4 w-4 text-green-600" />
                    ) : tx.type === 'send' ? (
                      <ArrowUpRight className="h-4 w-4 text-red-600" />
                    ) : (
                      <RefreshCw className="h-4 w-4 text-blue-600" />
                    )}
                  </div>
                  
                  <div>
                    <p className="font-medium">
                      {tx.type === 'receive' ? 'Reçu' : 
                       tx.type === 'send' ? 'Envoyé' : 'Échangé'} {tx.asset}
                    </p>
                    <p className="text-sm text-gray-600">
                      {tx.timestamp.toLocaleString('fr-FR')}
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      {tx.hash.slice(0, 16)}...
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className={`font-bold ${
                    tx.type === 'receive' ? 'text-green-600' : 'text-gray-900'
                  }`}>
                    {tx.type === 'receive' ? '+' : '-'}{formatCrypto(tx.amount, tx.asset)}
                  </p>
                  <p className="text-sm text-gray-600">
                    {formatValue(tx.value)} CHF
                  </p>
                  <p className="text-xs text-gray-500">
                    Frais: {tx.fees} CHF
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      {/* Islamic Finance Info */}
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Shield className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-green-900 mb-2">Finance Islamique & Crypto</h3>
              <p className="text-sm text-green-800 mb-3">
                Toutes les cryptomonnaies de ce wallet ont été sélectionnées selon les principes de la Charia :
              </p>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Aucun intérêt (Riba) ni spéculation excessive</li>
                <li>• Actifs adossés à des biens tangibles (or, immobilier)</li>
                <li>• Projets conformes aux valeurs islamiques</li>
                <li>• Transparence totale des transactions</li>
                <li>• Certification par des érudits islamiques</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}