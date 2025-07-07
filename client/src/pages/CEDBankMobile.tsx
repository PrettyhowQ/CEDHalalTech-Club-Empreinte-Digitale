import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2,
  Smartphone,
  DollarSign,
  Globe,
  Shield,
  Target,
  Clock,
  TrendingUp,
  Eye,
  EyeOff,
  ArrowUpRight,
  ArrowDownLeft,
  Plus,
  Send,
  Compass,
  BookOpen,
  Headphones
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function CEDBankMobile() {
  const [showBalance, setShowBalance] = useState(true);
  const [activeCard, setActiveCard] = useState('essential');

  const accounts = [
    { name: 'Compte Courant Halal', balance: '12,847.50', currency: 'CHF', type: 'main' },
    { name: 'Épargne Sadaqah', balance: '5,230.00', currency: 'CHF', type: 'savings' },
    { name: 'Compte AED Business', balance: '18,650.75', currency: 'AED', type: 'business' }
  ];

  const cards = [
    {
      id: 'essential',
      name: 'CED Essential',
      type: 'Débit',
      limit: '2,000 CHF/mois',
      benefits: ['Transactions halal', 'Mode prière', 'Qibla Compass'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'premium',
      name: 'CED Premium',
      type: 'Crédit Murabaha',
      limit: '10,000 CHF/mois',
      benefits: ['Cashback halal 2%', 'Assurance voyage', 'Accès lounges'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'royal',
      name: 'CED Royal',
      type: 'Elite Musharaka',
      limit: 'Illimité',
      benefits: ['Conseiller personnel', 'Investissements Sukuk', 'Conciergerie'],
      color: 'from-purple-500 to-violet-600'
    }
  ];

  const transactions = [
    { id: 1, type: 'received', desc: 'Virement Al-Amana Takaful', amount: '+1,200.00', time: '14:30', currency: 'CHF' },
    { id: 2, type: 'sent', desc: 'Zakat automatique', amount: '-95.50', time: '13:15', currency: 'CHF' },
    { id: 3, type: 'received', desc: 'Dividende Sukuk', amount: '+250.00', time: '12:00', currency: 'CHF' },
    { id: 4, type: 'sent', desc: 'TechForAll donation', amount: '-50.00', time: '11:45', currency: 'CHF' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        
        {/* Header Mobile */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center"
            >
              <Building2 className="h-6 w-6 text-white" />
            </motion.div>
            <h1 className="text-2xl font-bold text-gray-800">CED Bank Mobile</h1>
          </div>
          
          <div className="flex justify-center gap-2">
            <Badge className="bg-green-500 text-white">🇨🇭 Suisse</Badge>
            <Badge className="bg-blue-500 text-white">0% Riba</Badge>
            <Badge className="bg-purple-500 text-white">100% Halal</Badge>
          </div>
        </motion.div>

        {/* Balance Card */}
        <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-green-100 text-sm">Solde Total</p>
                <div className="flex items-center gap-2">
                  <p className="text-3xl font-bold">
                    {showBalance ? '36,728.25' : '••••••'}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowBalance(!showBalance)}
                    className="text-white hover:bg-white/20"
                  >
                    {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-green-100 text-sm">CHF Suisse</p>
              </div>
              <Smartphone className="h-8 w-8 text-green-100" />
            </div>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-4 gap-3 mt-6">
              <Button variant="ghost" className="flex flex-col items-center gap-1 text-white hover:bg-white/20 h-16">
                <Send className="h-5 w-5" />
                <span className="text-xs">Virer</span>
              </Button>
              <Button variant="ghost" className="flex flex-col items-center gap-1 text-white hover:bg-white/20 h-16">
                <Plus className="h-5 w-5" />
                <span className="text-xs">Dépôt</span>
              </Button>
              <Button variant="ghost" className="flex flex-col items-center gap-1 text-white hover:bg-white/20 h-16">
                <Compass className="h-5 w-5" />
                <span className="text-xs">Qibla</span>
              </Button>
              <Button variant="ghost" className="flex flex-col items-center gap-1 text-white hover:bg-white/20 h-16">
                <Clock className="h-5 w-5" />
                <span className="text-xs">Prières</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Interface */}
        <Tabs defaultValue="accounts" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="accounts">Comptes</TabsTrigger>
            <TabsTrigger value="cards">Cartes</TabsTrigger>
            <TabsTrigger value="transactions">Historique</TabsTrigger>
            <TabsTrigger value="islamic">Islamic</TabsTrigger>
          </TabsList>

          {/* Comptes */}
          <TabsContent value="accounts" className="space-y-4">
            {accounts.map((account, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-gray-800">{account.name}</h4>
                      <p className="text-2xl font-bold text-green-600">
                        {showBalance ? `${account.balance} ${account.currency}` : '•••••••'}
                      </p>
                      <Badge variant="outline" className="mt-1">
                        {account.type === 'main' ? 'Principal' : 
                         account.type === 'savings' ? 'Épargne' : 'Business'}
                      </Badge>
                    </div>
                    <TrendingUp className="h-6 w-6 text-green-500" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Cartes */}
          <TabsContent value="cards" className="space-y-4">
            {cards.map((card) => (
              <Card 
                key={card.id} 
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  activeCard === card.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveCard(card.id)}
              >
                <CardContent className="p-4">
                  <div className={`h-48 rounded-lg bg-gradient-to-r ${card.color} p-6 text-white mb-4`}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{card.name}</h3>
                        <p className="text-sm opacity-90">{card.type}</p>
                      </div>
                      <Building2 className="h-8 w-8" />
                    </div>
                    
                    <div className="mt-auto">
                      <p className="text-sm opacity-75">Limite mensuelle</p>
                      <p className="text-lg font-semibold">{card.limit}</p>
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-lg font-mono">•••• •••• •••• 1234</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Avantages</h4>
                    {card.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Transactions */}
          <TabsContent value="transactions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Transactions Récentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === 'received' ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {transaction.type === 'received' ? 
                          <ArrowDownLeft className="h-5 w-5 text-green-600" /> :
                          <ArrowUpRight className="h-5 w-5 text-red-600" />
                        }
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{transaction.desc}</p>
                        <p className="text-xs text-gray-500">{transaction.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${
                        transaction.type === 'received' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.amount} {transaction.currency}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section Islamique */}
          <TabsContent value="islamic" className="space-y-4">
            <Card className="bg-gradient-to-r from-purple-50 to-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-purple-600" />
                  Fonctionnalités Islamiques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Compass className="h-6 w-6 text-purple-600" />
                    <span className="text-sm">Qibla Compass</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Clock className="h-6 w-6 text-purple-600" />
                    <span className="text-sm">Horaires Prières</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                    <span className="text-sm">Calculateur Zakat</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                    <span className="text-sm">Lecture Coran</span>
                  </Button>
                </div>
                
                <Card className="bg-white">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Headphones className="h-4 w-4" />
                      Récitateurs Authentiques
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p>• Sheikh Abd Al-Basit Abd As-Samad</p>
                      <p>• Sheikh Maher Al-Mueaqly</p>
                      <p>• Sheikh Mishary Rashid Al-Afasy</p>
                      <p>• Sheikh Saad Al-Ghamidi</p>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Mode Prière Status */}
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="font-semibold text-sm">Mode Prière Actif</p>
                  <p className="text-xs text-gray-600">Prochaine prière: Maghrib dans 2h30</p>
                </div>
              </div>
              <Clock className="h-5 w-5 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        {/* Download Section */}
        <Card className="text-center">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-3">Télécharger CED Bank Mobile</h3>
            <div className="flex justify-center gap-4">
              <Button className="bg-black text-white">
                <span className="text-sm">App Store</span>
              </Button>
              <Button className="bg-green-600 text-white">
                <span className="text-sm">Google Play</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}