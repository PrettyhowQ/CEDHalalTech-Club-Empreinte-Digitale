import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  Laptop,
  Smartphone,
  Monitor,
  HardDrive,
  Cpu,
  Camera,
  Headphones,
  Tablet,
  Heart,
  Euro,
  MapPin,
  Phone,
  Calendar,
  CheckCircle,
  Search,
  Filter,
  Star,
  Award,
  Shield,
  Recycle,
  Users,
  TrendingDown
} from 'lucide-react';

interface ITEquipment {
  id: string;
  name: string;
  category: 'ordinateur' | 'smartphone' | 'tablette' | 'peripherique' | 'composant';
  brand: string;
  model: string;
  year: number;
  condition: 'excellent' | 'bon' | 'correct' | 'pieces';
  price: number;
  originalPrice: number;
  location: string;
  description: string;
  specifications: string[];
  images: string[];
  seller: {
    name: string;
    type: 'particulier' | 'professionnel' | 'association';
    rating: number;
    location: string;
  };
  available: boolean;
  reserved: boolean;
  certification: boolean;
  warranty: number; // en mois
  energyRating?: string;
}

export function BoutiqueSolidaireTechForAll() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredEquipment, setFilteredEquipment] = useState<ITEquipment[]>([]);

  const itEquipment: ITEquipment[] = [
    {
      id: 'IT001',
      name: 'MacBook Pro 16" M4 Max',
      category: 'ordinateur',
      brand: 'Apple',
      model: 'MacBook Pro 16" M4 Max 48Go CPU16 GPU40',
      year: 2024,
      condition: 'excellent',
      price: 3699,
      originalPrice: 4699,
      location: 'TechForAll Costa del Sol',
      description: 'MacBook Pro 16 pouces avec puce M4 Max, 48Go de RAM unifiée, CPU 16 cœurs, GPU 40 cœurs. Parfait état, utilisé 2 mois.',
      specifications: [
        'Puce Apple M4 Max',
        'CPU 16 cœurs',
        'GPU 40 cœurs',
        'Mémoire unifiée 48 Go',
        'Stockage SSD 1 To',
        'Écran Liquid Retina XDR 16"',
        'Autonomie jusqu\'à 22h',
        'Thunderbolt 5, MagSafe 3'
      ],
      images: ['macbook-m4-max-1.jpg', 'macbook-m4-max-2.jpg'],
      seller: {
        name: 'TechForAll Costa del Sol',
        type: 'association',
        rating: 5.0,
        location: 'Costa del Sol, Espagne'
      },
      available: true,
      reserved: false,
      certification: true,
      warranty: 24,
      energyRating: 'A+++'
    },
    {
      id: 'IT002',
      name: 'MacBook Pro 14" M4 Pro',
      category: 'ordinateur',
      brand: 'Apple',
      model: 'MacBook Pro 14" M4 Pro 32Go',
      year: 2024,
      condition: 'excellent',
      price: 2899,
      originalPrice: 3699,
      location: 'TechForAll Costa del Sol',
      description: 'MacBook Pro 14 pouces M4 Pro, idéal pour développement, design et montage vidéo. Garantie Apple restante.',
      specifications: [
        'Puce Apple M4 Pro',
        'CPU 12 cœurs',
        'GPU 20 cœurs',
        'Mémoire unifiée 32 Go',
        'Stockage SSD 512 Go',
        'Écran Liquid Retina XDR 14"',
        'Autonomie jusqu\'à 18h',
        'Caméra 12MP Center Stage'
      ],
      images: ['macbook-m4-pro-1.jpg'],
      seller: {
        name: 'TechForAll Costa del Sol',
        type: 'association',
        rating: 5.0,
        location: 'Costa del Sol, Espagne'
      },
      available: true,
      reserved: false,
      certification: true,
      warranty: 18,
      energyRating: 'A+++'
    },
    {
      id: 'IT003',
      name: 'ThinkPad X1 Carbon Gen 11',
      category: 'ordinateur',
      brand: 'Lenovo',
      model: 'ThinkPad X1 Carbon',
      year: 2023,
      condition: 'bon',
      price: 1299,
      originalPrice: 2199,
      location: 'TechForAll Costa del Sol',
      description: 'Ultrabook professionnel léger, processeur Intel Core i7, parfait pour la mobilité et le télétravail.',
      specifications: [
        'Intel Core i7-1355U',
        'RAM 16 Go LPDDR5',
        'SSD 512 Go PCIe',
        'Écran 14" WUXGA IPS',
        'Poids: 1.12 kg',
        'Clavier rétroéclairé',
        'Lecteur d\'empreintes',
        'WiFi 6E, 5G ready'
      ],
      images: ['thinkpad-x1-1.jpg'],
      seller: {
        name: 'Bureau Solidaire TechForAll',
        type: 'association',
        rating: 4.9,
        location: 'Costa del Sol, Espagne'
      },
      available: true,
      reserved: false,
      certification: true,
      warranty: 12,
      energyRating: 'A++'
    },
    {
      id: 'IT004',
      name: 'Dell XPS 13 Plus Developer Edition',
      category: 'ordinateur',
      brand: 'Dell',
      model: 'XPS 13 Plus 9320',
      year: 2023,
      condition: 'excellent',
      price: 1099,
      originalPrice: 1799,
      location: 'TechForAll Costa del Sol',
      description: 'Ultrabook premium avec Ubuntu préinstallé, parfait pour développeurs et étudiants en informatique.',
      specifications: [
        'Intel Core i7-1260P',
        'RAM 16 Go LPDDR5',
        'SSD 512 Go NVMe',
        'Écran 13.4" OLED 3.5K',
        'Ubuntu 22.04 LTS',
        'Clavier tactile capacitif',
        'Thunderbolt 4',
        'Autonomie 12h'
      ],
      images: ['dell-xps-13-1.jpg'],
      seller: {
        name: 'Dev Community TechForAll',
        type: 'association',
        rating: 4.8,
        location: 'Costa del Sol, Espagne'
      },
      available: true,
      reserved: true,
      certification: true,
      warranty: 15,
      energyRating: 'A++'
    },
    {
      id: 'IT005',
      name: 'iPad Pro 12.9" M2 Wi-Fi + Cellular',
      category: 'tablette',
      brand: 'Apple',
      model: 'iPad Pro 12.9" M2 256Go',
      year: 2023,
      condition: 'bon',
      price: 899,
      originalPrice: 1469,
      location: 'TechForAll Costa del Sol',
      description: 'Tablette professionnelle avec Apple Pencil 2 et Smart Keyboard inclus. Idéale pour design et présentation.',
      specifications: [
        'Puce Apple M2',
        'Stockage 256 Go',
        'Écran Liquid Retina XDR 12.9"',
        'Caméra Pro 12MP + LiDAR',
        'Wi-Fi 6E + 5G',
        'Apple Pencil 2 inclus',
        'Smart Keyboard inclus',
        'Autonomie 10h'
      ],
      images: ['ipad-pro-m2-1.jpg'],
      seller: {
        name: 'Creative Hub TechForAll',
        type: 'association',
        rating: 4.9,
        location: 'Costa del Sol, Espagne'
      },
      available: true,
      reserved: false,
      certification: true,
      warranty: 12,
      energyRating: 'A+++'
    },
    {
      id: 'IT006',
      name: 'iPhone 15 Pro Max 256Go',
      category: 'smartphone',
      brand: 'Apple',
      model: 'iPhone 15 Pro Max',
      year: 2024,
      condition: 'excellent',
      price: 1199,
      originalPrice: 1479,
      location: 'TechForAll Costa del Sol',
      description: 'Smartphone haut de gamme avec châssis titanium, système de caméras Pro et port USB-C.',
      specifications: [
        'Puce A17 Pro',
        'Stockage 256 Go',
        'Écran Super Retina XDR 6.7"',
        'Système de caméras Pro',
        'Châssis en titanium',
        'Port USB-C',
        'MagSafe et Qi2',
        'iOS 17'
      ],
      images: ['iphone-15-pro-max-1.jpg'],
      seller: {
        name: 'Mobile Center TechForAll',
        type: 'association',
        rating: 5.0,
        location: 'Costa del Sol, Espagne'
      },
      available: true,
      reserved: false,
      certification: true,
      warranty: 18,
      energyRating: 'A+++'
    }
  ];

  useEffect(() => {
    let filtered = itEquipment;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredEquipment(filtered);
  }, [searchTerm, selectedCategory]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ordinateur': return Laptop;
      case 'smartphone': return Smartphone;
      case 'tablette': return Tablet;
      case 'peripherique': return Headphones;
      case 'composant': return Cpu;
      default: return Monitor;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ordinateur': return 'bg-blue-100 text-blue-800';
      case 'smartphone': return 'bg-green-100 text-green-800';
      case 'tablette': return 'bg-purple-100 text-purple-800';
      case 'peripherique': return 'bg-orange-100 text-orange-800';
      case 'composant': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'excellent': return 'bg-green-100 text-green-800';
      case 'bon': return 'bg-blue-100 text-blue-800';
      case 'correct': return 'bg-yellow-100 text-yellow-800';
      case 'pieces': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const calculateSavings = (price: number, originalPrice: number) => {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center"
          >
            <Laptop className="h-8 w-8 text-white" />
          </motion.div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Boutique Solidaire TechForAll
            </h1>
            <p className="text-xl text-gray-700">Matériel informatique reconditionné certifié</p>
          </div>
        </div>
        
        <div className="flex justify-center gap-2 flex-wrap">
          <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
            <Shield className="h-3 w-3 mr-1" />
            Certifié & Garanti
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            <Recycle className="h-3 w-3 mr-1" />
            Économie circulaire
          </Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            <Heart className="h-3 w-3 mr-1" />
            Prix solidaires
          </Badge>
          <Badge variant="secondary" className="bg-pink-100 text-pink-800">
            <Users className="h-3 w-3 mr-1" />
            Association TechForAll
          </Badge>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Rechercher du matériel informatique
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                placeholder="Rechercher par nom, marque ou description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Toutes catégories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes catégories</SelectItem>
                  <SelectItem value="ordinateur">Ordinateurs portables</SelectItem>
                  <SelectItem value="smartphone">Smartphones</SelectItem>
                  <SelectItem value="tablette">Tablettes</SelectItem>
                  <SelectItem value="peripherique">Périphériques</SelectItem>
                  <SelectItem value="composant">Composants</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 text-sm text-gray-600">
            <span>{filteredEquipment.length} produits disponibles</span>
            <span>•</span>
            <span>{filteredEquipment.filter(e => e.available && !e.reserved).length} immédiatement disponibles</span>
            <span>•</span>
            <span>Économie moyenne: {Math.round(filteredEquipment.reduce((acc, item) => acc + calculateSavings(item.price, item.originalPrice), 0) / filteredEquipment.length)}%</span>
          </div>
        </CardContent>
      </Card>

      {/* Equipment Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEquipment.map((equipment, index) => {
          const CategoryIcon = getCategoryIcon(equipment.category);
          const savings = calculateSavings(equipment.price, equipment.originalPrice);
          
          return (
            <motion.div
              key={equipment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`${!equipment.available || equipment.reserved ? 'opacity-75' : ''}`}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                
                {/* Status badges */}
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                  {equipment.reserved && (
                    <Badge className="bg-orange-500 text-white">Réservé</Badge>
                  )}
                  {!equipment.available && (
                    <Badge className="bg-red-500 text-white">Vendu</Badge>
                  )}
                  {savings > 20 && (
                    <Badge className="bg-green-500 text-white">-{savings}%</Badge>
                  )}
                  {equipment.certification && (
                    <Badge className="bg-blue-500 text-white">
                      <Shield className="h-3 w-3 mr-1" />
                      Certifié
                    </Badge>
                  )}
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CategoryIcon className="h-5 w-5 text-indigo-600" />
                        <Badge variant="outline" className={getCategoryColor(equipment.category)}>
                          {equipment.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight">{equipment.name}</CardTitle>
                      <p className="text-sm text-gray-600">{equipment.brand} {equipment.model} ({equipment.year})</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  
                  {/* Price and condition */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-green-600">{equipment.price}€</div>
                      <div className="text-sm text-gray-500 line-through">{equipment.originalPrice}€</div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className={getConditionColor(equipment.condition)}>
                        {equipment.condition}
                      </Badge>
                      {equipment.energyRating && (
                        <div className="text-xs text-green-600 mt-1">{equipment.energyRating}</div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600">{equipment.description}</p>

                  {/* Key specifications */}
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium">Caractéristiques principales:</h4>
                    <ul className="text-xs text-gray-600">
                      {equipment.specifications.slice(0, 4).map((spec, idx) => (
                        <li key={idx}>• {spec}</li>
                      ))}
                      {equipment.specifications.length > 4 && (
                        <li className="text-indigo-600">+ {equipment.specifications.length - 4} autres...</li>
                      )}
                    </ul>
                  </div>

                  {/* Warranty and seller info */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${i < Math.floor(equipment.seller.rating) ? 'fill-current' : ''}`} 
                          />
                        ))}
                      </div>
                      <span className="text-gray-600">{equipment.seller.rating}</span>
                    </div>
                    <span className="text-green-600 font-medium">Garantie {equipment.warranty} mois</span>
                  </div>

                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <MapPin className="h-3 w-3" />
                    <span>{equipment.location}</span>
                  </div>

                  {/* Action buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      disabled={!equipment.available || equipment.reserved}
                    >
                      <Phone className="h-4 w-4 mr-1" />
                      Contact
                    </Button>
                    <Button 
                      size="sm"
                      disabled={!equipment.available || equipment.reserved}
                      className="bg-indigo-600 hover:bg-indigo-700"
                    >
                      <Calendar className="h-4 w-4 mr-1" />
                      Commander
                    </Button>
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Info footer */}
      <Card className="mt-12 bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Laptop className="h-6 w-6 text-indigo-600" />
            <h3 className="text-2xl font-bold text-indigo-800">TechForAll - Boutique Solidaire</h3>
          </div>
          <p className="text-indigo-700 mb-6 text-lg">
            Association à but non lucratif qui reconditionne et redistribue du matériel informatique professionnel. 
            Chaque achat évite le gaspillage électronique et finance des formations numériques pour l'inclusion sociale.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-indigo-600">2,500+</div>
              <div className="text-sm text-gray-600">Équipements reconditionnés</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600">450+</div>
              <div className="text-sm text-gray-600">Familles équipées</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-purple-600">75%</div>
              <div className="text-sm text-gray-600">Économie moyenne</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-orange-600">24 mois</div>
              <div className="text-sm text-gray-600">Garantie max</div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button 
              onClick={() => window.location.href = '/generateurs-ia'}
              variant="outline"
              className="border-indigo-300 text-indigo-700"
            >
              <Heart className="h-4 w-4 mr-2" />
              Faire un don
            </Button>
            <Button 
              onClick={() => window.location.href = '/materiel-marin'}
              variant="outline"
              className="border-purple-300 text-purple-700"
            >
              <Recycle className="h-4 w-4 mr-2" />
              Matériel marin
            </Button>
            <Button 
              onClick={() => window.location.href = '/compte-yakoubi'}
              variant="outline"
              className="border-pink-300 text-pink-700"
            >
              <Euro className="h-4 w-4 mr-2" />
              Financement
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}