import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wallet,
  Bitcoin,
  Heart,
  TrendingUp,
  Users,
  Building2,
  Gift,
  Star,
  Copy,
  QrCode,
  ArrowUpRight,
  CheckCircle,
  Clock,
  AlertCircle,
  Globe,
  Shield
} from 'lucide-react';

interface CryptoDonor {
  id: string;
  name: string;
  fortune: number;
  cryptoHoldings: {
    bitcoin: number;
    ethereum: number;
    other: number;
  };
  totalDonated: number;
  lastDonation: Date | null;
  preferredCrypto: string;
  walletAddress: string;
  donationHistory: CryptoDonation[];
  status: 'active' | 'potential' | 'contacted';
}

interface CryptoDonation {
  id: string;
  donorName: string;
  amount: number;
  cryptocurrency: string;
  valueUSD: number;
  valueCHF: number;
  project: string;
  timestamp: Date;
  txHash: string;
  status: 'confirmed' | 'pending' | 'failed';
}

interface DonationProject {
  id: string;
  name: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  cryptoReceived: number;
  walletAddress: string;
  qrCode: string;
  acceptedCryptos: string[];
  location: string;
  completedUnits: number;
  totalUnits: number;
}

export function CryptoDonationSystem() {
  const [cryptoDonors, setCryptoDonors] = useState<CryptoDonor[]>([]);
  const [donations, setDonations] = useState<CryptoDonation[]>([]);
  const [projects, setProjects] = useState<DonationProject[]>([]);
  const [totalCryptoReceived, setTotalCryptoReceived] = useState(0);
  const [activeDonors, setActiveDonors] = useState(0);

  useEffect(() => {
    // Fortunés de Dubai avec leurs portefeuilles crypto
    const dubaiCryptoDonors: CryptoDonor[] = [
      {
        id: 'donor001',
        name: 'Pavel Durov',
        fortune: 17000000000,
        cryptoHoldings: {
          bitcoin: 15000, // BTC
          ethereum: 85000, // ETH
          other: 50000000 // USD value
        },
        totalDonated: 2500000,
        lastDonation: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        preferredCrypto: 'Bitcoin',
        walletAddress: 'bc1qdurov2345abcdef67890klmnopqr123456789xyz',
        donationHistory: [],
        status: 'active'
      },
      {
        id: 'donor002',
        name: 'Hussain Sajwani',
        fortune: 10200000000,
        cryptoHoldings: {
          bitcoin: 8500,
          ethereum: 45000,
          other: 25000000
        },
        totalDonated: 1800000,
        lastDonation: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000),
        preferredCrypto: 'Ethereum',
        walletAddress: '0xsajwani742d8b9e9f8c7a6d8f9e0c1a2b3c4d5e6f',
        donationHistory: [],
        status: 'active'
      },
      {
        id: 'donor003',
        name: 'Majid Al Futtaim',
        fortune: 8500000000,
        cryptoHoldings: {
          bitcoin: 6200,
          ethereum: 32000,
          other: 18000000
        },
        totalDonated: 950000,
        lastDonation: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
        preferredCrypto: 'Bitcoin',
        walletAddress: 'bc1qalfuttaim456789abcdef123456789xyz987654',
        donationHistory: [],
        status: 'active'
      },
      {
        id: 'donor004',
        name: 'Abdulla Al Ghurair',
        fortune: 7800000000,
        cryptoHoldings: {
          bitcoin: 5800,
          ethereum: 28000,
          other: 15000000
        },
        totalDonated: 0,
        lastDonation: null,
        preferredCrypto: 'Bitcoin',
        walletAddress: 'bc1qalghurair789abc123def456ghi789jkl012mno',
        donationHistory: [],
        status: 'potential'
      },
      {
        id: 'donor005',
        name: 'Saif Al Ghurair',
        fortune: 6900000000,
        cryptoHoldings: {
          bitcoin: 4200,
          ethereum: 22000,
          other: 12000000
        },
        totalDonated: 650000,
        lastDonation: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000),
        preferredCrypto: 'Ethereum',
        walletAddress: '0xsaifghurair1234567890abcdef123456789abc',
        donationHistory: [],
        status: 'contacted'
      }
    ];

    // Donations crypto récentes
    const recentCryptoDonations: CryptoDonation[] = [
      {
        id: 'crypto001',
        donorName: 'Pavel Durov',
        amount: 5.5,
        cryptocurrency: 'Bitcoin',
        valueUSD: 341750,
        valueCHF: 314012,
        project: 'Dubai Marina Social Housing',
        timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        txHash: '4f2a8b3c9d1e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a',
        status: 'confirmed'
      },
      {
        id: 'crypto002',
        donorName: 'Hussain Sajwani',
        amount: 85.2,
        cryptocurrency: 'Ethereum',
        valueUSD: 208644,
        valueCHF: 191952,
        project: 'Al Barsha Family Housing',
        timestamp: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000),
        txHash: '3e1d4c7b8a9f0e2d5c6b7a8e9f0d1c2b3a4e5f6d7c8b9a0e1f2d3c4b5a6e7f8d',
        status: 'confirmed'
      },
      {
        id: 'crypto003',
        donorName: 'Majid Al Futtaim',
        amount: 3.2,
        cryptocurrency: 'Bitcoin',
        valueUSD: 198800,
        valueCHF: 182796,
        project: 'Dubai South Community Center',
        timestamp: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
        txHash: '2d0c3b6a5e8f1d4c7b0a9e2d5c6b3a8e1f4d7c0b9a2e5f8d1c4b7a0e3f6d9c2b',
        status: 'confirmed'
      },
      {
        id: 'crypto004',
        donorName: 'Saif Al Ghurair',
        amount: 12.8,
        cryptocurrency: 'Ethereum',
        valueUSD: 31347,
        valueCHF: 28839,
        project: 'Jumeirah Educational Complex',
        timestamp: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000),
        txHash: '1c9b2a5e4d7c0b3a6e9f2d5c8b1a4e7d0c3b6a9e2f5d8c1b4a7e0d3c6b9a2e5f',
        status: 'confirmed'
      }
    ];

    // Projets acceptant les cryptomonnaies
    const cryptoProjects: DonationProject[] = [
      {
        id: 'proj001',
        name: 'Dubai Marina Social Housing',
        description: 'Logements sociaux pour 500 familles à Dubai Marina',
        targetAmount: 50000000,
        currentAmount: 28500000,
        cryptoReceived: 5200000,
        walletAddress: 'bc1qmarina123456789abcdef123456789xyz987654321',
        qrCode: 'QR_MARINA_WALLET',
        acceptedCryptos: ['Bitcoin', 'Ethereum', 'USDC'],
        location: 'Dubai Marina, UAE',
        completedUnits: 125,
        totalUnits: 500
      },
      {
        id: 'proj002',
        name: 'Al Barsha Educational Hub',
        description: 'Centre éducatif islamique moderne avec école et mosquée',
        targetAmount: 35000000,
        currentAmount: 18200000,
        cryptoReceived: 3850000,
        walletAddress: '0xalbarsha742d8b9e9f8c7a6d8f9e0c1a2b3c4d5e6f7a8b',
        qrCode: 'QR_BARSHA_WALLET',
        acceptedCryptos: ['Ethereum', 'USDC', 'Islamic Coin'],
        location: 'Al Barsha, Dubai',
        completedUnits: 60,
        totalUnits: 100
      },
      {
        id: 'proj003',
        name: 'Dubai South Community Complex',
        description: 'Centre communautaire avec clinique et centre sportif',
        targetAmount: 25000000,
        currentAmount: 12800000,
        cryptoReceived: 2150000,
        walletAddress: 'bc1qsouth987654321abcdef987654321xyz123456789',
        qrCode: 'QR_SOUTH_WALLET',
        acceptedCryptos: ['Bitcoin', 'PAX Gold', 'USDC'],
        location: 'Dubai South, UAE',
        completedUnits: 30,
        totalUnits: 75
      }
    ];

    setCryptoDonors(dubaiCryptoDonors);
    setDonations(recentCryptoDonations);
    setProjects(cryptoProjects);
    
    setTotalCryptoReceived(recentCryptoDonations.reduce((sum, donation) => sum + donation.valueCHF, 0));
    setActiveDonors(dubaiCryptoDonors.filter(donor => donor.status === 'active').length);
  }, []);

  const copyWalletAddress = (address: string) => {
    navigator.clipboard.writeText(address);
  };

  const formatCrypto = (amount: number, symbol: string) => {
    return `${amount.toLocaleString('fr-CH', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 8 
    })} ${symbol}`;
  };

  const getCryptoIcon = (crypto: string) => {
    switch (crypto.toLowerCase()) {
      case 'bitcoin': return '₿';
      case 'ethereum': return 'Ξ';
      case 'usdc': return '$';
      case 'pax gold': return '🏅';
      case 'islamic coin': return '☪️';
      default: return '🪙';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'potential': return 'bg-yellow-100 text-yellow-800';
      case 'contacted': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center">
            <Bitcoin className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Donations Crypto Dubai</h2>
            <p className="text-gray-600">Philanthropie blockchain des fortunés de Dubai</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge className="bg-orange-100 text-orange-800">
            <Bitcoin className="h-3 w-3 mr-1" />
            Crypto Accepté
          </Badge>
          <Badge className="bg-green-100 text-green-800">
            <Shield className="h-3 w-3 mr-1" />
            Halal Certifié
          </Badge>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            title: 'Total Crypto Reçu',
            value: `${totalCryptoReceived.toLocaleString()} CHF`,
            icon: Wallet,
            color: 'text-orange-600',
            bgColor: 'bg-orange-50'
          },
          {
            title: 'Donateurs Actifs',
            value: `${activeDonors} milliardaires`,
            icon: Users,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50'
          },
          {
            title: 'Bitcoin Holdings',
            value: '45,200 BTC',
            icon: Bitcoin,
            color: 'text-yellow-600',
            bgColor: 'bg-yellow-50'
          },
          {
            title: 'Projets Financés',
            value: `${projects.length} actifs`,
            icon: Building2,
            color: 'text-green-600',
            bgColor: 'bg-green-50'
          }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Crypto Donors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Donateurs Crypto Dubai
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {cryptoDonors.map((donor, index) => (
              <motion.div
                key={donor.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{donor.name}</h3>
                    <p className="text-sm text-gray-600">
                      Fortune: {(donor.fortune / 1000000000).toFixed(1)}B USD
                    </p>
                    <Badge className={`mt-2 ${getStatusColor(donor.status)}`}>
                      {donor.status === 'active' ? 'Donateur Actif' : 
                       donor.status === 'potential' ? 'Potentiel' : 'Contacté'}
                    </Badge>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-2xl">₿</p>
                    <p className="text-xs text-gray-500">{donor.preferredCrypto}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h4 className="text-sm font-medium mb-2">Holdings Crypto</h4>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center">
                        <p className="font-bold text-orange-600">{donor.cryptoHoldings.bitcoin.toLocaleString()}</p>
                        <p className="text-gray-600">BTC</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-blue-600">{donor.cryptoHoldings.ethereum.toLocaleString()}</p>
                        <p className="text-gray-600">ETH</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-green-600">${(donor.cryptoHoldings.other / 1000000).toFixed(1)}M</p>
                        <p className="text-gray-600">Autres</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Total donné</p>
                      <p className="font-bold text-green-600">
                        ${donor.totalDonated.toLocaleString()}
                      </p>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Dernière donation</p>
                      <p className="text-xs text-gray-500">
                        {donor.lastDonation ? donor.lastDonation.toLocaleDateString('fr-FR') : 'Jamais'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Heart className="h-3 w-3 mr-1" />
                      Solliciter Don
                    </Button>
                    <Button variant="outline" size="sm">
                      <ArrowUpRight className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Crypto Donations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5" />
            Donations Crypto Récentes
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {donations.map((donation, index) => (
            <motion.div
              key={donation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-gray-100 p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-xl">
                    {getCryptoIcon(donation.cryptocurrency)}
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">{donation.donorName}</h4>
                    <p className="text-sm text-gray-600">{donation.project}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {donation.cryptocurrency}
                      </Badge>
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-green-600">Confirmé</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-lg font-bold text-orange-600">
                    {formatCrypto(donation.amount, donation.cryptocurrency === 'Bitcoin' ? 'BTC' : 'ETH')}
                  </p>
                  <p className="text-sm text-gray-600">
                    {donation.valueCHF.toLocaleString()} CHF
                  </p>
                  <p className="text-xs text-gray-500">
                    {donation.timestamp.toLocaleDateString('fr-FR')}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyWalletAddress(donation.txHash)}
                    className="text-xs mt-1"
                  >
                    <Copy className="h-3 w-3 mr-1" />
                    TX Hash
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      {/* Projects Accepting Crypto */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Projets Acceptant les Cryptomonnaies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Globe className="h-3 w-3" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progression</span>
                      <span>{Math.round((project.currentAmount / project.targetAmount) * 100)}%</span>
                    </div>
                    <Progress value={(project.currentAmount / project.targetAmount) * 100} className="h-2" />
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>{project.currentAmount.toLocaleString()} CHF</span>
                      <span>{project.targetAmount.toLocaleString()} CHF</span>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Crypto reçu</span>
                      <span className="text-sm font-bold text-orange-600">
                        {project.cryptoReceived.toLocaleString()} CHF
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.acceptedCryptos.map(crypto => (
                        <Badge key={crypto} variant="outline" className="text-xs">
                          {getCryptoIcon(crypto)} {crypto}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Input
                      value={project.walletAddress}
                      readOnly
                      className="text-xs font-mono"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyWalletAddress(project.walletAddress)}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <QrCode className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Crypto Integration Info */}
      <Card className="bg-gradient-to-r from-orange-50 to-purple-50 border-orange-200">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Bitcoin className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-orange-900 mb-2">Intégration Crypto Halal</h3>
              <p className="text-sm text-orange-800 mb-3">
                Les fortunés de Dubai possèdent des portefeuilles crypto considérables. Notre plateforme facilite leurs donations philanthropiques via blockchain :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-orange-700">
                <div>
                  <h4 className="font-medium mb-2">Avantages Crypto:</h4>
                  <ul className="space-y-1">
                    <li>• Transparence blockchain complète</li>
                    <li>• Transactions instantanées 24/7</li>
                    <li>• Frais réduits vs virements traditionnels</li>
                    <li>• Traçabilité totale des fonds</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Cryptos Acceptées:</h4>
                  <ul className="space-y-1">
                    <li>• Bitcoin (₿) - Réserve de valeur</li>
                    <li>• Ethereum (Ξ) - Contrats intelligents</li>
                    <li>• USDC ($) - Stablecoin transparent</li>
                    <li>• Islamic Coin (☪️) - 100% Halal</li>
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