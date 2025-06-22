import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  Anchor,
  Waves,
  Zap,
  Settings,
  Fish,
  Truck,
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
  Shield
} from 'lucide-react';

interface MarineEquipment {
  id: string;
  name: string;
  category: 'moteur' | 'electronique' | 'hydraulique' | 'peche';
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
}

export function MarineEquipmentCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredEquipment, setFilteredEquipment] = useState<MarineEquipment[]>([]);

  const marineEquipment: MarineEquipment[] = [
    {
      id: 'ME001',
      name: 'Moteur Yamaha 25CV 4 temps',
      category: 'moteur',
      brand: 'Yamaha',
      model: 'F25DMHS',
      year: 2019,
      condition: 'excellent',
      price: 3200,
      originalPrice: 5800,
      location: 'Costa del Sol, Espagne',
      description: 'Moteur hors-bord 4 temps, très peu servi, entretien régulier. Parfait pour barques de pêche côtière.',
      specifications: [
        'Puissance: 25 CV',
        'Cylindrée: 432cc',
        'Poids: 61kg',
        'Démarrage électrique',
        'Inclinaison électrique',
        'Carburant: Essence sans plomb'
      ],
      images: ['yamaha-f25-1.jpg', 'yamaha-f25-2.jpg'],
      seller: {
        name: 'Coopérative de Pêcheurs Costa del Sol',
        type: 'association',
        rating: 4.8,
        location: 'Málaga, Espagne'
      },
      available: true,
      reserved: false
    },
    {
      id: 'ME002',
      name: 'GPS Ploteur Garmin GPSMAP 942xs',
      category: 'electronique',
      brand: 'Garmin',
      model: 'GPSMAP 942xs',
      year: 2020,
      condition: 'bon',
      price: 890,
      originalPrice: 1599,
      location: 'Costa del Sol, Espagne',
      description: 'Écran tactile 9 pouces, sondeur intégré, cartographie préchargée Méditerranée.',
      specifications: [
        'Écran: 9 pouces tactile',
        'Résolution: 1280x720',
        'Sondeur CHIRP intégré',
        'WiFi et Bluetooth',
        'Cartes BlueChart g3',
        'Étanche IPX7'
      ],
      images: ['garmin-942xs-1.jpg'],
      seller: {
        name: 'Marine Electronics Marbella',
        type: 'professionnel',
        rating: 4.6,
        location: 'Marbella, Espagne'
      },
      available: true,
      reserved: false
    },
    {
      id: 'ME003',
      name: 'Pompe hydraulique 12V haute pression',
      category: 'hydraulique',
      brand: 'Seaflo',
      model: 'SFDP1-055-055-41',
      year: 2021,
      condition: 'excellent',
      price: 245,
      originalPrice: 450,
      location: 'Costa del Sol, Espagne',
      description: 'Pompe à membrane haute pression pour systèmes hydrauliques de bord. Idéale pour vérins et équipements de pont.',
      specifications: [
        'Tension: 12V DC',
        'Pression max: 55 PSI',
        'Débit: 5.5 L/min',
        'Autoclave intégré',
        'Protection surchauffe',
        'Montage facile'
      ],
      images: ['seaflo-pump-1.jpg'],
      seller: {
        name: 'TechForAll Costa del Sol',
        type: 'association',
        rating: 5.0,
        location: 'Costa del Sol, Espagne'
      },
      available: true,
      reserved: false
    },
    {
      id: 'ME004',
      name: 'Filet de pêche tramail 100m',
      category: 'peche',
      brand: 'Nylon Pro',
      model: 'Tramail Med',
      year: 2022,
      condition: 'bon',
      price: 180,
      originalPrice: 350,
      location: 'Costa del Sol, Espagne',
      description: 'Filet tramail 3 nappes pour pêche côtière méditerranéenne. Maillage adapté aux espèces locales.',
      specifications: [
        'Longueur: 100 mètres',
        'Hauteur: 2.5 mètres',
        'Maille intérieure: 80mm',
        'Maille extérieure: 250mm',
        'Fil nylon multifilament',
        'Plombs et flotteurs inclus'
      ],
      images: ['tramail-net-1.jpg'],
      seller: {
        name: 'Pescadores Unidos Fuengirola',
        type: 'association',
        rating: 4.7,
        location: 'Fuengirola, Espagne'
      },
      available: true,
      reserved: true
    },
    {
      id: 'ME005',
      name: 'Générateur diesel marin 5kW',
      category: 'moteur',
      brand: 'Kohler',
      model: '5EKOZD',
      year: 2018,
      condition: 'bon',
      price: 2800,
      originalPrice: 5200,
      location: 'Costa del Sol, Espagne',
      description: 'Générateur marin refroidi par eau de mer, insonorisation renforcée. Parfait pour bateaux de pêche professionnels.',
      specifications: [
        'Puissance: 5 kW continu',
        'Moteur diesel Kohler',
        'Refroidissement eau de mer',
        'Niveau sonore: 65 dB(A)',
        'Régulation électronique',
        'Protection IP44'
      ],
      images: ['kohler-gen-1.jpg', 'kohler-gen-2.jpg'],
      seller: {
        name: 'Pedro Martinez - Mécanicien Marine',
        type: 'professionnel',
        rating: 4.9,
        location: 'Estepona, Espagne'
      },
      available: true,
      reserved: false
    },
    {
      id: 'ME006',
      name: 'Treuil électrique 1000kg 12V',
      category: 'hydraulique',
      brand: 'Warn',
      model: 'VR EVO 4500',
      year: 2020,
      condition: 'excellent',
      price: 420,
      originalPrice: 780,
      location: 'Costa del Sol, Espagne',
      description: 'Treuil électrique étanche pour manipulation de filets et équipements lourds. Télécommande sans fil incluse.',
      specifications: [
        'Capacité: 1000 kg',
        'Câble: 15m acier galvanisé',
        'Moteur 12V étanche',
        'Télécommande sans fil',
        'Frein automatique',
        'Montage universel'
      ],
      images: ['warn-winch-1.jpg'],
      seller: {
        name: 'TechForAll Costa del Sol',
        type: 'association',
        rating: 5.0,
        location: 'Costa del Sol, Espagne'
      },
      available: true,
      reserved: false
    }
  ];

  useEffect(() => {
    let filtered = marineEquipment;
    
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
      case 'moteur': return Settings;
      case 'electronique': return Zap;
      case 'hydraulique': return Waves;
      case 'peche': return Fish;
      default: return Anchor;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'moteur': return 'bg-blue-100 text-blue-800';
      case 'electronique': return 'bg-green-100 text-green-800';
      case 'hydraulique': return 'bg-purple-100 text-purple-800';
      case 'peche': return 'bg-orange-100 text-orange-800';
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-green-50 p-4">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 rounded-2xl flex items-center justify-center"
          >
            <Anchor className="h-8 w-8 text-white" />
          </motion.div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Matériel Marin TechForAll
            </h1>
            <p className="text-xl text-gray-700">Équipements reconditionnés pour pêcheurs et artisans</p>
          </div>
        </div>
        
        <div className="flex justify-center gap-2 flex-wrap">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            <Shield className="h-3 w-3 mr-1" />
            Garantie 2 ans
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            <Award className="h-3 w-3 mr-1" />
            Anti-gaspillage
          </Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            <Heart className="h-3 w-3 mr-1" />
            Prix solidaires
          </Badge>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Rechercher du matériel
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
                  <SelectItem value="moteur">Moteurs & Générateurs</SelectItem>
                  <SelectItem value="electronique">Électronique marine</SelectItem>
                  <SelectItem value="hydraulique">Hydraulique & Mécanique</SelectItem>
                  <SelectItem value="peche">Équipement de pêche</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 text-sm text-gray-600">
            <span>{filteredEquipment.length} équipements disponibles</span>
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
                  {savings > 30 && (
                    <Badge className="bg-green-500 text-white">-{savings}%</Badge>
                  )}
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CategoryIcon className="h-5 w-5 text-blue-600" />
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
                    <Badge variant="outline" className={getConditionColor(equipment.condition)}>
                      {equipment.condition}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600">{equipment.description}</p>

                  {/* Key specifications */}
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium">Caractéristiques principales:</h4>
                    <ul className="text-xs text-gray-600">
                      {equipment.specifications.slice(0, 3).map((spec, idx) => (
                        <li key={idx}>• {spec}</li>
                      ))}
                      {equipment.specifications.length > 3 && (
                        <li className="text-blue-600">+ {equipment.specifications.length - 3} autres...</li>
                      )}
                    </ul>
                  </div>

                  {/* Seller info */}
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
                    <span className="text-gray-500">{equipment.seller.type}</span>
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
                      Contacter
                    </Button>
                    <Button 
                      size="sm"
                      disabled={!equipment.available || equipment.reserved}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Calendar className="h-4 w-4 mr-1" />
                      Réserver
                    </Button>
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Info footer */}
      <Card className="mt-12 bg-gradient-to-r from-blue-100 to-green-100 border border-blue-200">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Anchor className="h-6 w-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-blue-800">Solidarité Maritime</h3>
          </div>
          <p className="text-blue-700 mb-6 text-lg">
            TechForAll reconditionne et redistribue du matériel marin pour soutenir les pêcheurs et artisans en difficulté. 
            Chaque achat évite le gaspillage et finance des formations techniques pour l'emploi local.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">450+</div>
              <div className="text-sm text-gray-600">Moteurs reconditionnés</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600">120</div>
              <div className="text-sm text-gray-600">Familles équipées</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-purple-600">85%</div>
              <div className="text-sm text-gray-600">Économie moyenne</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-orange-600">2 ans</div>
              <div className="text-sm text-gray-600">Garantie incluse</div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button 
              onClick={() => window.location.href = '/generateurs-ia'}
              variant="outline"
              className="border-blue-300 text-blue-700"
            >
              <Settings className="h-4 w-4 mr-2" />
              Faire un don
            </Button>
            <Button 
              onClick={() => window.location.href = '/costa-del-sol'}
              variant="outline"
              className="border-green-300 text-green-700"
            >
              <Truck className="h-4 w-4 mr-2" />
              Logistique
            </Button>
            <Button 
              onClick={() => window.location.href = '/compte-yakoubi'}
              variant="outline"
              className="border-purple-300 text-purple-700"
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