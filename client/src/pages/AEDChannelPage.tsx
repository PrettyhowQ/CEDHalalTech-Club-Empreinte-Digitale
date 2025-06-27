import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Utensils, 
  ShoppingCart, 
  MapPin, 
  Star, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Leaf,
  Heart,
  Shield,
  TrendingUp,
  Globe,
  CreditCard,
  Smartphone,
  Calendar,
  Users,
  BookOpen,
  Scale
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface HalalFood {
  id: string;
  name: string;
  nameArabic: string;
  category: 'meat' | 'dairy' | 'grains' | 'fruits' | 'vegetables' | 'beverages' | 'snacks';
  price: number;
  currency: 'AED';
  certification: string;
  supplier: string;
  location: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  fiqhRuling: 'halal' | 'haram' | 'makruh' | 'mubah';
  sources: string[];
  scholar: string;
  image: string;
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

interface AEDTransaction {
  id: string;
  amount: number;
  currency: 'AED';
  merchant: string;
  category: string;
  timestamp: Date;
  status: 'completed' | 'pending' | 'failed';
  fiqhCompliant: boolean;
  zakatApplicable: boolean;
}

export default function AEDChannelPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFood, setSelectedFood] = useState<HalalFood | null>(null);
  const [aedBalance, setAedBalance] = useState(15750.50);
  const [monthlyBudget, setMonthlyBudget] = useState(3000);
  const [transactions, setTransactions] = useState<AEDTransaction[]>([]);
  const { toast } = useToast();

  const halalFoods: HalalFood[] = [
    {
      id: '1',
      name: 'Agneau Halal Premium',
      nameArabic: 'لحم الخروف الحلال الفاخر',
      category: 'meat',
      price: 85.00,
      currency: 'AED',
      certification: 'UAE Islamic Affairs Certified',
      supplier: 'Al-Tayyib Meat Company',
      location: 'Dubai, UAE',
      rating: 4.9,
      reviews: 234,
      inStock: true,
      fiqhRuling: 'halal',
      sources: ['Quran 5:3', 'Sahih Muslim 1978'],
      scholar: 'Dr. Ahmed Al-Mahmoud',
      image: '/api/placeholder/300/200',
      nutritionalInfo: {
        calories: 250,
        protein: 25,
        carbs: 0,
        fat: 16
      }
    },
    {
      id: '2',
      name: 'Dattes Medjool Bio',
      nameArabic: 'تمر المدجول العضوي',
      category: 'fruits',
      price: 45.00,
      currency: 'AED',
      certification: 'Organic UAE Certified',
      supplier: 'Emirates Date Farm',
      location: 'Al Ain, UAE',
      rating: 4.8,
      reviews: 156,
      inStock: true,
      fiqhRuling: 'mubah',
      sources: ['Sahih Bukhari 5445', 'Quran 16:11'],
      scholar: 'Sheikh Omar Ibn Rashid',
      image: '/api/placeholder/300/200',
      nutritionalInfo: {
        calories: 66,
        protein: 0.4,
        carbs: 18,
        fat: 0.1
      }
    },
    {
      id: '3',
      name: 'Lait de Chamelle Frais',
      nameArabic: 'لبن الناقة الطازج',
      category: 'dairy',
      price: 25.00,
      currency: 'AED',
      certification: 'UAE Health Authority',
      supplier: 'Desert Gold Camel Farm',
      location: 'Abu Dhabi, UAE',
      rating: 4.7,
      reviews: 89,
      inStock: true,
      fiqhRuling: 'halal',
      sources: ['Sahih Bukhari 233', 'Abu Dawood 67'],
      scholar: 'Prof. Fatima Al-Zahra',
      image: '/api/placeholder/300/200',
      nutritionalInfo: {
        calories: 50,
        protein: 3,
        carbs: 5,
        fat: 3
      }
    }
  ];

  const categories = [
    { id: 'meat', name: 'اللحوم', nameEn: 'Viandes', icon: Utensils, count: 12 },
    { id: 'dairy', name: 'الألبان', nameEn: 'Produits Laitiers', icon: Heart, count: 8 },
    { id: 'fruits', name: 'الفواكه', nameEn: 'Fruits', icon: Leaf, count: 15 },
    { id: 'vegetables', name: 'الخضروات', nameEn: 'Légumes', icon: Leaf, count: 20 },
    { id: 'grains', name: 'الحبوب', nameEn: 'Céréales', icon: Users, count: 10 },
    { id: 'beverages', name: 'المشروبات', nameEn: 'Boissons', icon: Users, count: 6 }
  ];

  const fiqhRules = [
    {
      title: 'Commerce Alimentaire Halal',
      titleArabic: 'تجارة الطعام الحلال',
      ruling: 'MANDUB (Fortement Recommandé)',
      description: 'Le commerce d\'aliments halal certifiés est encouragé et récompensé selon les principes islamiques.',
      sources: ['Coran 2:168', 'Sahih Bukhari 2059', 'AAOIFI Standard 24'],
      scholar: 'Consensus des 4 écoles sunnites'
    },
    {
      title: 'Paiement en Monnaie Locale',
      titleArabic: 'الدفع بالعملة المحلية',
      ruling: 'MUBAH (Permis)',
      description: 'L\'utilisation du Dirham des EAU pour les transactions alimentaires est permise selon le Fiqh.',
      sources: ['Ibn Taymiyyah Majmu\' 29/467', 'Fiqh Academy Resolution 53'],
      scholar: 'Dr. Ahmed Al-Mahmoud'
    },
    {
      title: 'Certification Halal Obligatoire',
      titleArabic: 'شهادة الحلال الإجبارية',
      ruling: 'WAJIB (Obligatoire)',
      description: 'Vérifier la certification halal est obligatoire pour éviter le haram.',
      sources: ['Coran 2:173', 'Sahih Muslim 1599'],
      scholar: 'Consensus unanime des scholars'
    }
  ];

  const getRulingColor = (ruling: string) => {
    switch (ruling) {
      case 'halal': return 'bg-green-100 text-green-800 border-green-200';
      case 'haram': return 'bg-red-100 text-red-800 border-red-200';
      case 'makruh': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'mubah': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRulingArabic = (ruling: string) => {
    switch (ruling) {
      case 'halal': return 'حلال';
      case 'haram': return 'حرام';
      case 'makruh': return 'مكروه';
      case 'mubah': return 'مباح';
      default: return 'غير محدد';
    }
  };

  const filteredFoods = halalFoods.filter(food => 
    food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    food.nameArabic.includes(searchQuery) ||
    food.category === selectedCategory
  );

  const handlePurchase = (food: HalalFood) => {
    if (aedBalance >= food.price) {
      const newTransaction: AEDTransaction = {
        id: Date.now().toString(),
        amount: food.price,
        currency: 'AED',
        merchant: food.supplier,
        category: food.category,
        timestamp: new Date(),
        status: 'completed',
        fiqhCompliant: food.fiqhRuling === 'halal' || food.fiqhRuling === 'mubah',
        zakatApplicable: food.category === 'grains' || food.category === 'fruits'
      };

      setTransactions(prev => [newTransaction, ...prev]);
      setAedBalance(prev => prev - food.price);
      
      toast({
        title: "Achat réalisé ✅",
        description: `${food.name} - ${food.price} AED débité`,
      });
    } else {
      toast({
        title: "Solde insuffisant",
        description: "Veuillez recharger votre compte AED",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <Utensils className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">قناة الدرهم الإماراتي للأغذية</h1>
              <h2 className="text-2xl font-semibold text-orange-600">Canal AED Alimentation Halal</h2>
              <p className="text-gray-600">Commerce alimentaire 100% Sharia - Fiqh informatique certifié</p>
            </div>
          </div>
          
          {/* Solde AED */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-6 mb-6 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-sm opacity-90 mb-1">Solde disponible</div>
              <div className="text-3xl font-bold">{aedBalance.toFixed(2)} AED</div>
              <div className="text-sm opacity-90 mt-1">Dirham des Émirats arabes unis</div>
            </div>
          </div>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-6">
          <TabsList className="grid grid-cols-4 lg:grid-cols-6 w-full">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="products">Produits</TabsTrigger>
            <TabsTrigger value="fiqh">Fiqh</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="budget">Budget</TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Solde AED</p>
                      <p className="text-2xl font-bold">{aedBalance.toFixed(2)}</p>
                    </div>
                    <CreditCard className="h-8 w-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Produits Halal</p>
                      <p className="text-2xl font-bold">{halalFoods.length}</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Budget Mensuel</p>
                      <p className="text-2xl font-bold">{monthlyBudget}</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Transactions</p>
                      <p className="text-2xl font-bold">{transactions.length}</p>
                    </div>
                    <Smartphone className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Règles Fiqh informatique */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5" />
                  Règles Fiqh Informatique - Commerce Alimentaire AED
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {fiqhRules.map((rule, index) => (
                    <div key={index} className="p-4 border rounded-lg bg-gray-50">
                      <h4 className="font-semibold text-green-800 mb-2">{rule.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{rule.titleArabic}</p>
                      <Badge className="mb-3 bg-green-100 text-green-800">{rule.ruling}</Badge>
                      <p className="text-sm mb-3">{rule.description}</p>
                      <div className="text-xs text-gray-500">
                        <div className="font-medium">Sources:</div>
                        <ul className="list-disc list-inside">
                          {rule.sources.map((source, i) => (
                            <li key={i}>{source}</li>
                          ))}
                        </ul>
                        <div className="mt-2 font-medium">Scholar: {rule.scholar}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Produits */}
          <TabsContent value="products" className="space-y-6">
            {/* Recherche et filtres */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Rechercher des produits halal..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex flex-col items-center p-2 h-auto"
                  >
                    <category.icon className="h-4 w-4 mb-1" />
                    <span className="text-xs">{category.nameEn}</span>
                    <Badge variant="secondary" className="text-xs mt-1">{category.count}</Badge>
                  </Button>
                ))}
              </div>
            </div>

            {/* Liste des produits */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFoods.map((food) => (
                <Card key={food.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={food.image} 
                      alt={food.name}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className={`absolute top-2 right-2 ${getRulingColor(food.fiqhRuling)}`}>
                      {getRulingArabic(food.fiqhRuling)}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{food.name}</h3>
                      <p className="text-sm text-gray-600">{food.nameArabic}</p>
                      
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(food.rating) 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({food.reviews})</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{food.location}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-orange-600">
                          {food.price} AED
                        </div>
                        <Badge variant={food.inStock ? "default" : "secondary"}>
                          {food.inStock ? 'En stock' : 'Rupture'}
                        </Badge>
                      </div>
                      
                      <div className="text-xs text-gray-500">
                        <div>Certifié: {food.certification}</div>
                        <div>Fournisseur: {food.supplier}</div>
                        <div>Scholar: {food.scholar}</div>
                      </div>
                      
                      <Button 
                        className="w-full"
                        onClick={() => handlePurchase(food)}
                        disabled={!food.inStock || aedBalance < food.price}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Acheter avec AED
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Transactions */}
          <TabsContent value="transactions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Historique des Transactions AED</CardTitle>
              </CardHeader>
              <CardContent>
                {transactions.length === 0 ? (
                  <div className="text-center py-8">
                    <CreditCard className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500">Aucune transaction pour le moment</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {transactions.map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${transaction.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                          <div>
                            <div className="font-medium">{transaction.merchant}</div>
                            <div className="text-sm text-gray-600">{transaction.timestamp.toLocaleString()}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">-{transaction.amount} AED</div>
                          <div className="flex gap-2">
                            {transaction.fiqhCompliant && (
                              <Badge className="bg-green-100 text-green-800">Halal</Badge>
                            )}
                            {transaction.zakatApplicable && (
                              <Badge className="bg-blue-100 text-blue-800">Zakat</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Statut À venir */}
          <TabsContent value="fiqh" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">🚧 EN DÉVELOPPEMENT 🚧</CardTitle>
              </CardHeader>
              <CardContent className="text-center py-8">
                <AlertCircle className="h-16 w-16 mx-auto text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Canal AED Alimentation - À venir</h3>
                <p className="text-gray-600 mb-4">
                  Cette section sera développée selon les besoins de l'écosystème CED
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>✓ Base Fiqh informatique établie</p>
                  <p>✓ Règles commerce alimentaire validées</p>
                  <p>✓ Certification halal intégrée</p>
                  <p>🔄 Interface utilisateur en cours...</p>
                  <p>🔄 Intégration paiements AED...</p>
                  <p>🔄 Système de livraison...</p>
                </div>
                <Button className="mt-6" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Notifications de mise à jour
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}