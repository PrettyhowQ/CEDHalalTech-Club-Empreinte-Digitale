import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart,
  Package,
  Star,
  MapPin,
  Phone,
  Mail,
  User,
  Sun,
  Moon,
  Home,
  Grid3x3,
  Heart,
  Truck,
  Shield,
  Award,
  Clock,
  Euro,
  Gift
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  status: 'available' | 'coming_soon' | 'out_of_stock';
  description: string;
  origin: 'europe' | 'local';
  condition: 'new' | 'refurbished' | 'very_good';
}

interface Category {
  id: string;
  name: string;
  icon: any;
  itemCount: number;
  status: 'active' | 'coming_soon';
}

export function YakoubiSolidaryStore() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cart, setCart] = useState<string[]>([]);

  const categories: Category[] = [
    { id: 'furniture', name: 'Meubles', icon: Home, itemCount: 15, status: 'active' },
    { id: 'appliances', name: 'Électroménager', icon: Package, itemCount: 8, status: 'active' },
    { id: 'beauty', name: 'Beauté', icon: Star, itemCount: 12, status: 'active' },
    { id: 'fashion', name: 'Mode', icon: Heart, itemCount: 25, status: 'active' },
    { id: 'sports', name: 'Sport', icon: Award, itemCount: 6, status: 'active' },
    { id: 'tech', name: 'High-Tech', icon: Grid3x3, itemCount: 0, status: 'coming_soon' }
  ];

  const products: Product[] = [
    {
      id: 'p1',
      name: 'Canapé 3 places Premium',
      category: 'furniture',
      price: 450,
      image: '/api/placeholder/300/300',
      status: 'coming_soon',
      description: 'Canapé confortable, livraison depuis entrepôt européen',
      origin: 'europe',
      condition: 'new'
    },
    {
      id: 'p2',
      name: 'Mixeur Pro 1200W',
      category: 'appliances',
      price: 89,
      image: '/api/placeholder/300/300',
      status: 'coming_soon',
      description: 'Mixeur professionnel, garantie 2 ans',
      origin: 'europe',
      condition: 'new'
    },
    {
      id: 'p3',
      name: 'Sèche-cheveux Compact',
      category: 'beauty',
      price: 35,
      image: '/api/placeholder/300/300',
      status: 'available',
      description: 'Sèche-cheveux de voyage, technologie ionique',
      origin: 'europe',
      condition: 'refurbished'
    },
    {
      id: 'p4',
      name: 'MacBook Pro Reconditionné',
      category: 'tech',
      price: 650,
      image: '/api/placeholder/300/300',
      status: 'available',
      description: 'MacBook Pro 2019, reconditionné par B. Yakoubi',
      origin: 'local',
      condition: 'refurbished'
    },
    {
      id: 'p5',
      name: 'Kit Outils Hilti',
      category: 'tech',
      price: 850,
      image: '/api/placeholder/300/300',
      status: 'available',
      description: 'Outils professionnels reconditionnés',
      origin: 'local',
      condition: 'very_good'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (productId: string) => {
    setCart(prev => [...prev, productId]);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'coming_soon': return 'bg-orange-100 text-orange-800';
      case 'out_of_stock': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'refurbished': return 'bg-purple-100 text-purple-800';
      case 'very_good': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      alert("Contenu protégé © Yakoubi Yamina");
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && ['u','s','c','x'].includes(e.key.toLowerCase())) || e.key === "F12") {
        e.preventDefault();
        alert("Copie et inspection interdites © Yakoubi Yamina");
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      darkMode 
        ? 'bg-gray-900 text-gray-100' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors"
      >
        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>

      {/* Header */}
      <header className={`${
        darkMode ? 'bg-gray-800' : 'bg-gray-800'
      } text-white shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold"
            >
              Boutique Solidaire Yakoubi
            </motion.h1>
            <nav className="flex gap-3">
              <Button variant="secondary" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                <Home className="h-4 w-4 mr-2" />
                Accueil
              </Button>
              <Button variant="secondary" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                <Grid3x3 className="h-4 w-4 mr-2" />
                Catégories
              </Button>
              <Button variant="secondary" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Panier ({cart.length})
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Banner */}
      <section className="relative">
        <div className="w-full h-40 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-2">Costa del Sol - TechForAll</h2>
            <p className="text-lg">Matériel professionnel reconditionné par B. Yakoubi</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Categories */}
        <section className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-8"
          >
            Catégories
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="h-20 flex flex-col items-center justify-center"
            >
              <Package className="h-6 w-6 mb-1" />
              <span className="text-sm">Tout</span>
            </Button>
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className={`cursor-pointer transition-all hover:shadow-lg ${
                  darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
                } ${selectedCategory === category.id ? 'ring-2 ring-blue-500' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardContent className="p-4 text-center">
                    <category.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <h3 className="font-medium text-sm">{category.name}</h3>
                    <div className="flex justify-center gap-1 mt-2">
                      <Badge variant="outline" className="text-xs">
                        {category.itemCount}
                      </Badge>
                      {category.status === 'coming_soon' && (
                        <Badge variant="outline" className="text-xs bg-orange-100 text-orange-800">
                          À venir
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-8"
          >
            {selectedCategory === 'all' ? 'Tous les Produits' : 'Produits Sélectionnés'}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className={`hover:shadow-xl transition-all ${
                    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
                  }`}>
                    <CardContent className="p-4">
                      <div className="relative mb-4">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="absolute top-2 left-2 flex gap-1">
                          <Badge variant="outline" className={getStatusColor(product.status)}>
                            {product.status === 'available' ? 'Disponible' : 
                             product.status === 'coming_soon' ? 'À venir' : 'Rupture'}
                          </Badge>
                          {product.origin === 'local' && (
                            <Badge variant="outline" className="bg-blue-100 text-blue-800">
                              <MapPin className="h-3 w-3 mr-1" />
                              Local
                            </Badge>
                          )}
                        </div>
                        <div className="absolute top-2 right-2">
                          <Badge variant="outline" className={getConditionColor(product.condition)}>
                            {product.condition === 'new' ? 'Neuf' :
                             product.condition === 'refurbished' ? 'Reconditionné' : 'Très bon état'}
                          </Badge>
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                      
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold text-green-600">
                          {product.price}€
                        </span>
                        {product.origin === 'europe' && (
                          <div className="flex items-center text-xs text-blue-600">
                            <Truck className="h-3 w-3 mr-1" />
                            Livraison EU
                          </div>
                        )}
                      </div>

                      <Button 
                        onClick={() => addToCart(product.id)}
                        disabled={product.status !== 'available'}
                        className="w-full"
                        variant={product.status === 'available' ? 'default' : 'outline'}
                      >
                        {product.status === 'available' ? (
                          <>
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Ajouter au panier
                          </>
                        ) : (
                          <>
                            <Clock className="h-4 w-4 mr-2" />
                            {product.status === 'coming_soon' ? 'À venir' : 'Indisponible'}
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-12">
          <Card className={`max-w-4xl mx-auto ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
          }`}>
            <CardHeader>
              <CardTitle className="text-center text-2xl">À propos de nous</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-lg leading-relaxed">
                La Boutique Solidaire Yakoubi, gérée par <strong>B. Yakoubi</strong>, vous propose des produits 
                livrés depuis l'Europe et du matériel professionnel reconditionné localement à Costa del Sol. 
                Nous travaillons avec des fournisseurs fiables et une logistique européenne de qualité.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center justify-center gap-2">
                    <User className="h-5 w-5" />
                    Responsable Costa del Sol
                  </h3>
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg">
                    <p className="font-bold text-lg">B. Yakoubi</p>
                    <p className="text-gray-600">Expert reconditionnement</p>
                    <p className="text-sm">PC Pro, MacBook, moteurs marins, outils BTP</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    Contact
                  </h3>
                  <div className="space-y-2 text-left">
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      contact@yakoubi-store.com
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      +34 952 123 456
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Costa del Sol, Espagne
                    </p>
                    <p className="text-sm text-gray-600">
                      Stockage européen + Reconditionnement local
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <h4 className="font-medium">Qualité Garantie</h4>
                  <p className="text-sm text-gray-600">Contrôle qualité systématique</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Truck className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <h4 className="font-medium">Livraison Europe</h4>
                  <p className="text-sm text-gray-600">Logistique européenne fiable</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Heart className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <h4 className="font-medium">Mission Solidaire</h4>
                  <p className="text-sm text-gray-600">Aide aux expatriés et demandeurs d'emploi</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button 
                  onClick={() => window.location.href = '/costa-del-sol'}
                  variant="outline"
                  className="border-orange-300 hover:bg-orange-50"
                >
                  App Logistique Costa del Sol
                </Button>
                <Button 
                  onClick={() => window.location.href = '/costa-del-sol-website'}
                  variant="outline"
                  className="border-blue-300 hover:bg-blue-50"
                >
                  Site Web Costa del Sol
                </Button>
              </div>

            </CardContent>
          </Card>
        </section>

      </div>

      {/* Footer */}
      <footer className={`${
        darkMode ? 'bg-gray-800' : 'bg-gray-800'
      } text-white py-8 mt-12`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-medium">
            © 2025 Boutique Solidaire Yakoubi | Gérée par B. Yakoubi
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Costa del Sol - TechForAll | Matériel professionnel reconditionné
          </p>
          <div className="mt-4 text-xs text-gray-500">
            Copyright © Yakoubi Yamina - Reproduction interdite
          </div>
        </div>
      </footer>

    </div>
  );
}