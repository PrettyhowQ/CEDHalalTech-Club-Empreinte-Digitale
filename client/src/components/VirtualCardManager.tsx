import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  CreditCard,
  Plus,
  Eye,
  EyeOff,
  Copy,
  Settings,
  Shield,
  Clock,
  DollarSign,
  Zap,
  Globe,
  Lock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface VirtualCard {
  id: string;
  name: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  balance: number;
  spentToday: number;
  dailyLimit: number;
  monthlyLimit: number;
  isActive: boolean;
  isTemporary: boolean;
  expiresIn?: Date;
  category: 'donation' | 'investment' | 'personal' | 'business';
  restrictions: string[];
  transactions: number;
  createdAt: Date;
}

export function VirtualCardManager() {
  const [showCardDetails, setShowCardDetails] = useState<{ [key: string]: boolean }>({});
  const [newCardName, setNewCardName] = useState('');
  const [newCardLimit, setNewCardLimit] = useState('1000');
  
  const [virtualCards] = useState<VirtualCard[]>([
    {
      id: '1',
      name: 'Donations Crypto Card',
      cardNumber: '4532 1234 5678 9012',
      expiryDate: '12/27',
      cvv: '123',
      balance: 50000,
      spentToday: 2500,
      dailyLimit: 10000,
      monthlyLimit: 100000,
      isActive: true,
      isTemporary: false,
      category: 'donation',
      restrictions: ['Crypto exchanges only', 'Halal merchants'],
      transactions: 156,
      createdAt: new Date('2025-01-15')
    },
    {
      id: '2',
      name: 'Dubai Real Estate',
      cardNumber: '5678 9012 3456 7890',
      expiryDate: '10/26',
      cvv: '456',
      balance: 500000,
      spentToday: 25000,
      dailyLimit: 100000,
      monthlyLimit: 1000000,
      isActive: true,
      isTemporary: true,
      expiresIn: new Date('2025-07-21'),
      category: 'investment',
      restrictions: ['Real estate only', 'Dubai merchants'],
      transactions: 43,
      createdAt: new Date('2025-06-15')
    },
    {
      id: '3',
      name: 'Business Premium',
      cardNumber: '9876 5432 1098 7654',
      expiryDate: '03/28',
      cvv: '789',
      balance: 250000,
      spentToday: 5800,
      dailyLimit: 50000,
      monthlyLimit: 500000,
      isActive: true,
      isTemporary: false,
      category: 'business',
      restrictions: ['Business expenses', 'No gambling'],
      transactions: 287,
      createdAt: new Date('2024-12-01')
    }
  ]);

  const toggleCardVisibility = (cardId: string) => {
    setShowCardDetails(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'donation': return 'bg-green-100 text-green-800 border-green-300';
      case 'investment': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'business': return 'bg-purple-100 text-purple-800 border-purple-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'donation': return <DollarSign className="h-4 w-4" />;
      case 'investment': return <Globe className="h-4 w-4" />;
      case 'business': return <Shield className="h-4 w-4" />;
      default: return <CreditCard className="h-4 w-4" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Cartes Virtuelles</h2>
          <p className="text-gray-600 mt-2">Gérez vos cartes virtuelles instantanées avec contrôles granulaires</p>
        </div>
        <div className="flex gap-3">
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Plus className="h-4 w-4 mr-2" />
            Nouvelle Carte
          </Button>
        </div>
      </div>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Cartes Actives</p>
                <p className="text-2xl font-bold">{virtualCards.filter(c => c.isActive).length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Balance Totale</p>
                <p className="text-2xl font-bold">${virtualCards.reduce((acc, card) => acc + card.balance, 0).toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-yellow-600" />
              <div>
                <p className="text-sm text-gray-600">Dépenses Aujourd'hui</p>
                <p className="text-2xl font-bold">${virtualCards.reduce((acc, card) => acc + card.spentToday, 0).toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Transactions Sécurisées</p>
                <p className="text-2xl font-bold">{virtualCards.reduce((acc, card) => acc + card.transactions, 0)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Virtual Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {virtualCards.map((card) => (
          <Card key={card.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
            <div className={`absolute top-0 left-0 right-0 h-1 ${
              card.category === 'donation' ? 'bg-green-500' :
              card.category === 'investment' ? 'bg-blue-500' :
              card.category === 'business' ? 'bg-purple-500' : 'bg-gray-500'
            }`} />
            
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{card.name}</CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge className={getCategoryColor(card.category)}>
                    {getCategoryIcon(card.category)}
                    <span className="ml-1 capitalize">{card.category}</span>
                  </Badge>
                  {card.isActive ? (
                    <Badge className="bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Active
                    </Badge>
                  ) : (
                    <Badge variant="secondary">Inactive</Badge>
                  )}
                </div>
              </div>
              
              {card.isTemporary && card.expiresIn && (
                <div className="flex items-center text-orange-600 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  Expire le {card.expiresIn.toLocaleDateString('fr-FR')}
                </div>
              )}
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Card Visual */}
              <div className={`p-4 rounded-lg bg-gradient-to-br ${
                card.category === 'donation' ? 'from-green-500 to-green-600' :
                card.category === 'investment' ? 'from-blue-500 to-blue-600' :
                card.category === 'business' ? 'from-purple-500 to-purple-600' : 'from-gray-500 to-gray-600'
              } text-white relative`}>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-xs opacity-75">CED BANK</p>
                    <p className="text-xs opacity-75">VIRTUAL CARD</p>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-6 h-4 bg-white bg-opacity-30 rounded-sm"></div>
                    <div className="w-6 h-4 bg-white bg-opacity-50 rounded-sm"></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="font-mono text-lg tracking-wider">
                    {showCardDetails[card.id] ? card.cardNumber : '•••• •••• •••• ' + card.cardNumber.slice(-4)}
                  </p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs opacity-75">EXPIRE FIN</p>
                      <p className="font-mono">
                        {showCardDetails[card.id] ? card.expiryDate : '••/••'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs opacity-75">CVV</p>
                      <p className="font-mono">
                        {showCardDetails[card.id] ? card.cvv : '•••'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Controls */}
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleCardVisibility(card.id)}
                  className="flex-1"
                >
                  {showCardDetails[card.id] ? (
                    <>
                      <EyeOff className="h-4 w-4 mr-1" />
                      Masquer
                    </>
                  ) : (
                    <>
                      <Eye className="h-4 w-4 mr-1" />
                      Afficher
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(card.cardNumber)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                >
                  <Settings className="h-4 w-4" />
                </Button>
              </div>

              {/* Balance and Limits */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Balance</span>
                  <span className="font-semibold">${card.balance.toLocaleString()}</span>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Limite quotidienne</span>
                    <span>${card.spentToday.toLocaleString()} / ${card.dailyLimit.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        (card.spentToday / card.dailyLimit) > 0.8 ? 'bg-red-500' :
                        (card.spentToday / card.dailyLimit) > 0.6 ? 'bg-orange-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${Math.min((card.spentToday / card.dailyLimit) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Restrictions */}
                <div>
                  <p className="text-sm text-gray-600 mb-2">Restrictions:</p>
                  <div className="flex flex-wrap gap-1">
                    {card.restrictions.map((restriction, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        <Lock className="h-3 w-3 mr-1" />
                        {restriction}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="flex justify-between text-sm text-gray-600 pt-2 border-t">
                  <span>{card.transactions} transactions</span>
                  <span>Créée le {card.createdAt.toLocaleDateString('fr-FR')}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Create Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Plus className="h-5 w-5 mr-2" />
            Créer une Nouvelle Carte Virtuelle
          </CardTitle>
          <CardDescription>
            Générez instantanément une carte virtuelle avec des contrôles personnalisés
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="cardName">Nom de la carte</Label>
              <Input
                id="cardName"
                placeholder="Ex: Dubai Investment Card"
                value={newCardName}
                onChange={(e) => setNewCardName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="dailyLimit">Limite quotidienne ($)</Label>
              <Input
                id="dailyLimit"
                type="number"
                placeholder="1000"
                value={newCardLimit}
                onChange={(e) => setNewCardLimit(e.target.value)}
              />
            </div>
            <div className="flex items-end">
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                <Zap className="h-4 w-4 mr-2" />
                Créer Instantanément
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}