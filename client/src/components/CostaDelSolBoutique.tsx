import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingCart,
  Building2,
  Star,
  Euro,
  Truck,
  Shield,
  Recycle,
  Heart,
  Search,
  Filter,
  Eye,
  Plus,
  Minus,
  MapPin,
  Phone,
  Mail,
  Award,
  CheckCircle,
  Package,
  CreditCard
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: 'tech' | 'construction' | 'vehicles' | 'irrigation' | 'nautical';
  brand: string;
  model: string;
  originalValue: number;
  salePrice: number;
  discount: number;
  condition: 'excellent' | 'good' | 'fair';
  description: string;
  images: string[];
  specifications: Record<string, string>;
  warranty: number; // mois
  stock: number;
  soldCount: number;
  rating: number;
  reviews: number;
  origin: string; // Source TechForAll
  reconditionedBy: string;
  tags: string[];
  featured: boolean;
  ecoImpact: {
    co2Saved: number;
    wasteAvoided: number;
  };
}

interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}

export default function CostaDelSolBoutique() {
  const [selectedTab, setSelectedTab] = useState('catalog');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);

  const products: Product[] = [
    {
      id: 'cds-001',
      name: 'MacBook Pro M3 16" Reconditionné',
      category: 'tech',
      brand: 'Apple',
      model: 'MacBook Pro M3 16"',
      originalValue: 3200,
      salePrice: 2240,
      discount: 30,
      condition: 'excellent',
      description: 'MacBook Pro M3 16" reconditionné par nos experts. Don TechForAll Genève. État exceptionnel, emballage d\'origine conservé.',
      images: ['macbook-pro-m3.jpg', 'macbook-detail.jpg'],
      specifications: {
        'Processeur': 'Apple M3 Pro 12 cœurs',
        'Mémoire': '18 GB RAM unifiée',
        'Stockage': '512 GB SSD',
        'Écran': '16" Liquid Retina XDR',
        'Autonomie': '22 heures',
        'État': 'Excellent - traces d\'usage minimales'
      },
      warranty: 12,
      stock: 1,
      soldCount: 0,
      rating: 4.9,
      reviews: 127,
      origin: 'Don TechForAll - Entreprise TechCorp SA, Genève',
      reconditionedBy: 'Costa del Sol - Équipe technique certifiée',
      tags: ['Apple', 'Professionnel', 'Haute performance', 'Écologique'],
      featured: true,
      ecoImpact: {
        co2Saved: 75,
        wasteAvoided: 2.1
      }
    },
    {
      id: 'cds-002',
      name: 'Excavatrice Caterpillar 320D2',
      category: 'construction',
      brand: 'Caterpillar',
      model: '320D2',
      originalValue: 85000,
      salePrice: 59500,
      discount: 30,
      condition: 'good',
      description: 'Excavatrice Caterpillar 320D2 reconditionnée. Don TechForAll Berne. Révision complète effectuée par nos mécaniciens spécialisés.',
      images: ['cat-320d2-1.jpg', 'cat-320d2-2.jpg', 'cat-interior.jpg'],
      specifications: {
        'Puissance': '122 kW (164 ch)',
        'Poids': '20 500 kg',
        'Portée': '9,7 m',
        'Profondeur': '6,7 m',
        'Heures': '4 200 h',
        'Révision': 'Complète - Décembre 2024'
      },
      warranty: 6,
      stock: 1,
      soldCount: 0,
      rating: 4.7,
      reviews: 43,
      origin: 'Don TechForAll - Construction Helvetica AG, Berne',
      reconditionedBy: 'Costa del Sol - Atelier mécanique agréé',
      tags: ['Caterpillar', 'Construction', 'Révisée', 'Professionnelle'],
      featured: true,
      ecoImpact: {
        co2Saved: 1250,
        wasteAvoided: 18.5
      }
    },
    {
      id: 'cds-003',
      name: 'Camping-car Mercedes Hymer',
      category: 'vehicles',
      brand: 'Mercedes',
      model: 'Sprinter Hymer 2021',
      originalValue: 95000,
      salePrice: 66500,
      discount: 30,
      condition: 'excellent',
      description: 'Camping-car Mercedes Sprinter Hymer 2021. Don TechForAll Lyon. Équipement complet, entretien suivi, prêt pour vos aventures.',
      images: ['hymer-ext.jpg', 'hymer-int.jpg', 'hymer-kitchen.jpg'],
      specifications: {
        'Moteur': 'Mercedes 2.1 CDI 163 ch',
        'Kilométrage': '25 000 km',
        'Couchages': '4 personnes',
        'Longueur': '7,35 m',
        'Équipements': 'Cuisine, douche, WC, chauffage',
        'Contrôle': 'Technique OK - Janvier 2025'
      },
      warranty: 6,
      stock: 1,
      soldCount: 0,
      rating: 4.8,
      reviews: 89,
      origin: 'Don TechForAll - Famille Dubois, Lyon',
      reconditionedBy: 'Costa del Sol - Atelier camping-car spécialisé',
      tags: ['Mercedes', 'Hymer', 'Voyage', 'Familial', 'Équipé'],
      featured: true,
      ecoImpact: {
        co2Saved: 2100,
        wasteAvoided: 8.2
      }
    },
    {
      id: 'cds-004',
      name: 'Jet Ski Yamaha VX Cruiser',
      category: 'nautical',
      brand: 'Yamaha',
      model: 'VX Cruiser 2022',
      originalValue: 12500,
      salePrice: 8750,
      discount: 30,
      condition: 'good',
      description: 'Jet ski Yamaha VX Cruiser 2022. Don TechForAll Nice. Révision moteur récente, prêt pour la saison nautique.',
      images: ['yamaha-vx.jpg', 'yamaha-detail.jpg'],
      specifications: {
        'Moteur': '1812 cm³ 4 temps',
        'Puissance': '110 ch',
        'Heures': '150 h',
        'Places': '3 personnes',
        'Réservoir': '70 litres',
        'Révision': 'Moteur - Novembre 2024'
      },
      warranty: 3,
      stock: 1,
      soldCount: 0,
      rating: 4.6,
      reviews: 56,
      origin: 'Don TechForAll - Marina Costa Azzurra, Nice',
      reconditionedBy: 'Costa del Sol - Mécanicien nautique certifié',
      tags: ['Yamaha', 'Nautique', 'Loisir', 'Mer', 'Révisé'],
      featured: false,
      ecoImpact: {
        co2Saved: 180,
        wasteAvoided: 0.8
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous', icon: ShoppingCart, count: products.length },
    { id: 'tech', name: 'Technologies', icon: Building2, count: 1 },
    { id: 'construction', name: 'Construction', icon: Award, count: 1 },
    { id: 'vehicles', name: 'Véhicules', icon: Truck, count: 1 },
    { id: 'nautical', name: 'Nautique', icon: Shield, count: 1 },
    { id: 'irrigation', name: 'Irrigation', icon: Recycle, count: 0 }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'excellent': return 'bg-green-100 text-green-800';
      case 'good': return 'bg-blue-100 text-blue-800';
      case 'fair': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const addToCart = (productId: string, price: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.productId === productId);
      if (existing) {
        return prev.map(item => 
          item.productId === productId 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { productId, quantity: 1, price }];
    });
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
              <ShoppingCart className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Costa del Sol</h1>
              <h2 className="text-2xl text-orange-600">Boutique En Ligne Solidaire</h2>
              <p className="text-gray-600">Vente exclusive des matériels collectés par TechForAll - Circuit solidaire</p>
            </div>
          </div>
        </div>

        {/* Stats boutique */}
        <Card className="mb-8 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">{products.length}</div>
                <div className="text-sm opacity-90">Produits disponibles</div>
              </div>
              <div>
                <div className="text-2xl font-bold">30-70%</div>
                <div className="text-sm opacity-90">Réduction moyenne</div>
              </div>
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-90">Circuit solidaire</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{getCartItemCount()}</div>
                <div className="text-sm opacity-90">Articles panier</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="catalog" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Catalogue
            </TabsTrigger>
            <TabsTrigger value="cart" className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Panier ({getCartItemCount()})
            </TabsTrigger>
            <TabsTrigger value="about" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Circuit Solidaire
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Contact
            </TabsTrigger>
          </TabsList>

          {/* Catalogue */}
          <TabsContent value="catalog" className="space-y-6">
            {/* Recherche et filtres */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher un produit..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    <category.icon className="h-4 w-4" />
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>
            </div>

            {/* Produits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className={`${product.featured ? 'border-2 border-orange-500 bg-orange-50' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <p className="text-sm text-gray-600">{product.brand} {product.model}</p>
                        {product.featured && (
                          <Badge className="bg-orange-100 text-orange-800 mt-1">
                            <Star className="h-3 w-3 mr-1" />
                            Coup de cœur
                          </Badge>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">
                          {product.salePrice.toLocaleString()} €
                        </div>
                        <div className="text-sm text-gray-500 line-through">
                          {product.originalValue.toLocaleString()} €
                        </div>
                        <Badge className="bg-red-100 text-red-800">
                          -{product.discount}%
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">{product.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <Badge className={getConditionColor(product.condition)}>
                          {product.condition.charAt(0).toUpperCase() + product.condition.slice(1)}
                        </Badge>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                          <span className="text-xs ml-1">{product.rating} ({product.reviews})</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-gray-600">Stock:</span>
                          <div className="font-semibold">{product.stock} disponible</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Garantie:</span>
                          <div className="font-semibold">{product.warranty} mois</div>
                        </div>
                      </div>

                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-xs font-semibold text-green-800 mb-1">Impact écologique:</div>
                        <div className="flex justify-between text-xs text-green-700">
                          <span>CO2 évité: {product.ecoImpact.co2Saved} kg</span>
                          <span>Déchets évités: {product.ecoImpact.wasteAvoided} kg</span>
                        </div>
                      </div>

                      <div className="text-xs text-gray-600">
                        <div><strong>Origine:</strong> {product.origin}</div>
                        <div><strong>Reconditionné par:</strong> {product.reconditionedBy}</div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {product.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          className="flex-1"
                          onClick={() => addToCart(product.id, product.salePrice)}
                          disabled={product.stock === 0}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Ajouter au panier
                        </Button>
                        <Button variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Panier */}
          <TabsContent value="cart" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-6 w-6 text-orange-600" />
                  Votre Panier Costa del Sol
                </CardTitle>
              </CardHeader>
              <CardContent>
                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingCart className="h-24 w-24 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Panier vide</h3>
                    <p className="text-gray-600 mb-4">
                      Découvrez nos produits reconditionnés du circuit solidaire TechForAll
                    </p>
                    <Button onClick={() => setSelectedTab('catalog')}>
                      Voir le catalogue
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item) => {
                      const product = products.find(p => p.id === item.productId);
                      if (!product) return null;
                      
                      return (
                        <div key={item.productId} className="flex items-center gap-4 p-4 border rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-semibold">{product.name}</h4>
                            <p className="text-sm text-gray-600">{product.brand} {product.model}</p>
                            <p className="text-sm text-green-600">
                              {product.salePrice.toLocaleString()} € × {item.quantity}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="mx-2">{item.quantity}</span>
                            <Button variant="outline" size="sm">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">
                              {(item.price * item.quantity).toLocaleString()} €
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xl font-semibold">Total:</span>
                        <span className="text-2xl font-bold text-green-600">
                          {getCartTotal().toLocaleString()} €
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Button variant="outline" className="w-full">
                          Continuer les achats
                        </Button>
                        <Button className="w-full">
                          <CreditCard className="h-4 w-4 mr-2" />
                          Procéder au paiement
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Circuit solidaire */}
          <TabsContent value="about" className="space-y-6">
            <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
              <CardContent className="p-8">
                <div className="text-center">
                  <Heart className="h-16 w-16 mx-auto mb-4 text-white" />
                  <h2 className="text-3xl font-bold mb-4">Circuit Solidaire Costa del Sol</h2>
                  <p className="text-lg opacity-90 mb-6">
                    100% des équipements vendus proviennent des dons TechForAll avec impact social garanti
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-6 w-6 text-green-600" />
                    1. Don TechForAll
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>• Collecte gratuite Europe</div>
                    <div>• Avantages fiscaux 75%</div>
                    <div>• Reçu fiscal automatique</div>
                    <div>• Traçabilité complète</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Recycle className="h-6 w-6 text-blue-600" />
                    2. Reconditionnement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>• Experts certifiés</div>
                    <div>• Tests qualité stricts</div>
                    <div>• Pièces d'origine</div>
                    <div>• Garantie incluse</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-6 w-6 text-orange-600" />
                    3. Vente Solidaire
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>• Prix solidaires -30 à -70%</div>
                    <div>• Qualité garantie</div>
                    <div>• Livraison Europe</div>
                    <div>• Service client dédié</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-6 w-6 text-purple-600" />
                    4. Impact Social
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>• Projets humanitaires</div>
                    <div>• Économie circulaire</div>
                    <div>• Emplois solidaires</div>
                    <div>• Réduction CO2</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Avantages Costa del Sol</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Pour les Acheteurs</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Prix solidaires exceptionnels</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Qualité professionnelle garantie</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Impact écologique positif</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Contribution projets solidaires</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Garanties Incluses</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-blue-500" />
                        <span>Garantie reconditionnement</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-blue-500" />
                        <span>Service après-vente</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-blue-500" />
                        <span>Retour 30 jours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-blue-500" />
                        <span>Livraison assurée</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Gestion Brahim</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-purple-500" />
                        <span>Direction opérationnelle</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-purple-500" />
                        <span>Supervision Yakoubi Yamina</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-purple-500" />
                        <span>Équipe Costa del Sol</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-purple-500" />
                        <span>Secrétariat Kadjouf Hanane</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact */}
          <TabsContent value="contact" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-6 w-6 text-orange-600" />
                    Costa del Sol
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Direction</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-purple-500" />
                          <span>Brahim Yakoubi - Directeur opérationnel</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-blue-500" />
                          <span>Kadjouf Hanane - Secrétaire</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-green-500" />
                          <span>Supervision: Yakoubi Yamina</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Contact Boutique</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <span>+34 952 123 456 (Costa del Sol)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-gray-500" />
                          <span>boutique@costadelsol-solidaire.es</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span>Costa del Sol, Espagne</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-6 w-6 text-green-600" />
                    TechForAll Association
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Siège Social</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span>Genève, Suisse</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <span>+41 22 555 TECH (8324)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-gray-500" />
                          <span>contact@techforall.ch</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Services</h4>
                      <div className="space-y-2 text-sm">
                        <div>• Collecte gratuite Europe</div>
                        <div>• Évaluation équipements</div>
                        <div>• Reçus fiscaux automatiques</div>
                        <div>• Suivi projets solidaires</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Horaires et Disponibilité</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Boutique En Ligne</h4>
                    <div className="text-sm">
                      <div>• 24h/24 - 7j/7</div>
                      <div>• Commandes automatisées</div>
                      <div>• Support client digital</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Service Client</h4>
                    <div className="text-sm">
                      <div>• Lun-Ven: 9h-18h (CET)</div>
                      <div>• Support multilingue</div>
                      <div>• Réponse sous 24h</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Livraisons</h4>
                    <div className="text-sm">
                      <div>• Europe: 3-7 jours</div>
                      <div>• Suisse: 1-3 jours</div>
                      <div>• Transport sécurisé</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer protection intellectuelle */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <div className="mb-4 p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-700 mb-2">
              Yakoubi Yamina – Tous droits réservés | All rights reserved | جميع الحقوق محفوظة | 版权所有
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-2">
              <span>🇪🇺 Conforme RGPD</span>
              <span>🇨🇭 LPD Suisse</span>
              <span>🔒 Hébergement sécurisé Suisse</span>
              <span>🛡️ Données confidentielles protégées</span>
            </div>
            <p className="text-xs text-gray-600 mb-2">
              Projet confidentiel – Traçabilité numérique activée – Usage exclusif réservé à l'écosystème CED & PrettyhowQ
            </p>
            <p className="text-xs text-gray-600">
              Ce projet, son contenu, son code, ses idées, ses visuels, ses textes et sa structure sont la propriété exclusive de Yakoubi Yamina. 
              Toute reproduction, diffusion, extraction, adaptation, modification ou exploitation – totale ou partielle – sans autorisation écrite préalable 
              est strictement interdite et fera l'objet de poursuites judiciaires conformément au Code de la propriété intellectuelle (France / Europe / International).
            </p>
          </div>
          <p className="mb-2">
            © 2025 Costa del Sol - Boutique solidaire TechForAll - Direction Brahim Yakoubi - Supervision Yakoubi Yamina
          </p>
          <p className="mb-2">
            🛍️ Circuit solidaire complet - Reconditionnement professionnel - Impact écologique positif
          </p>
          <p className="font-semibold text-orange-600">
            📌 Version complète – Écosystème en production 📎
          </p>
        </div>
      </div>
    </div>
  );
}