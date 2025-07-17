import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import {
  Box,
  Globe,
  Shield,
  Star,
  Eye,
  Heart,
  Zap,
  Building2,
  Image,
  Play,
  Users,
  Calendar,
  DollarSign,
  CheckCircle,
  Award,
  Gamepad2,
  Camera,
  Palette,
  Music,
  ShoppingBag,
  Sparkles,
  Lock,
  Unlock,
  TrendingUp
} from 'lucide-react';

interface HalalNFT {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: 'ETH' | 'MATIC' | 'BNB' | 'ISLAMIC';
  creator: string;
  category: 'art' | 'virtual_property' | 'utility' | 'collectible' | 'domain' | 'avatar';
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  shariahCertified: boolean;
  certificationBody: string;
  blockchain: string;
  royalty: number;
  totalSupply: number;
  currentSupply: number;
  lastSale: number;
  highestBid?: number;
  imageUrl: string;
  properties: { trait: string; value: string; rarity: number }[];
  unlockableContent: boolean;
  hasUtility: boolean;
  utility?: string;
  createdAt: Date;
  listed: boolean;
}

interface VirtualProperty {
  id: string;
  name: string;
  description: string;
  platform: 'Decentraland' | 'The Sandbox' | 'Somnium Space' | 'Horizon Worlds' | 'Islamic Metaverse';
  coordinates: string;
  size: string;
  price: number;
  currency: string;
  owner: string;
  development: 'undeveloped' | 'partial' | 'complete';
  buildings: string[];
  neighbors: string[];
  traffic: number;
  revenue: number;
  shariahCompliant: boolean;
  religiousFeatures: string[];
  imageUrl: string;
  monthlyVisitors: number;
  forSale: boolean;
  forRent: boolean;
  rentPrice?: number;
}

interface MetaverseExperience {
  id: string;
  title: string;
  description: string;
  platform: string;
  category: 'education' | 'worship' | 'commerce' | 'entertainment' | 'social';
  participants: number;
  maxParticipants: number;
  duration: string;
  language: string[];
  price: number;
  rating: number;
  reviews: number;
  nextSession: Date;
  instructor: string;
  halalCertified: boolean;
  features: string[];
  requirements: string[];
}

export function MetaverseHalalNFT() {
  const [activeTab, setActiveTab] = useState<'nfts' | 'properties' | 'experiences' | 'marketplace'>('nfts');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'art' | 'virtual_property' | 'utility' | 'collectible'>('all');

  const [halalNFTs] = useState<HalalNFT[]>([
    {
      id: '1',
      name: 'Masjid Al-Haram Digital Twin',
      description: 'Réplique virtuelle haute fidélité de la Grande Mosquée de La Mecque pour expériences spirituelles immersives',
      price: 5.8,
      currency: 'ETH',
      creator: 'Islamic Digital Arts',
      category: 'virtual_property',
      rarity: 'legendary',
      shariahCertified: true,
      certificationBody: 'Global Islamic Finance Council',
      blockchain: 'Polygon',
      royalty: 7.5,
      totalSupply: 1,
      currentSupply: 1,
      lastSale: 4.2,
      highestBid: 6.1,
      imageUrl: '/nft-masjid.jpg',
      properties: [
        { trait: 'Architecture', value: 'Ottoman', rarity: 95 },
        { trait: 'Interactive Elements', value: 'Prayer Times', rarity: 88 },
        { trait: 'Audio', value: 'Adhan & Quran', rarity: 92 }
      ],
      unlockableContent: true,
      hasUtility: true,
      utility: 'Accès VIP aux événements spirituels virtuels',
      createdAt: new Date('2025-03-15'),
      listed: true
    },
    {
      id: '2',
      name: 'Calligraphy Genesis Collection',
      description: 'Collection unique de calligraphies arabes animées avec versets coraniques, créée par des maîtres calligraphes',
      price: 1.2,
      currency: 'ISLAMIC',
      creator: 'Master Calligrapher Ahmad',
      category: 'art',
      rarity: 'epic',
      shariahCertified: true,
      certificationBody: 'Islamic Arts Council',
      blockchain: 'Islamic Coin Network',
      royalty: 10,
      totalSupply: 99,
      currentSupply: 67,
      lastSale: 0.95,
      imageUrl: '/nft-calligraphy.jpg',
      properties: [
        { trait: 'Script Style', value: 'Thuluth', rarity: 78 },
        { trait: 'Animation', value: 'Golden Glow', rarity: 85 },
        { trait: 'Verse', value: 'Ayat al-Kursi', rarity: 90 }
      ],
      unlockableContent: true,
      hasUtility: false,
      createdAt: new Date('2025-04-01'),
      listed: true
    },
    {
      id: '3',
      name: 'Dubai Halal Commerce Hub',
      description: 'Espace commercial virtuel dans le métaverse dédié aux entreprises halal certifiées avec boutiques 3D',
      price: 12.5,
      currency: 'ETH',
      creator: 'Dubai Digital Economy',
      category: 'virtual_property',
      rarity: 'legendary',
      shariahCertified: true,
      certificationBody: 'Dubai Islamic Economy Council',
      blockchain: 'Ethereum',
      royalty: 5,
      totalSupply: 25,
      currentSupply: 18,
      lastSale: 11.8,
      highestBid: 13.2,
      imageUrl: '/nft-commerce-hub.jpg',
      properties: [
        { trait: 'Location', value: 'Prime District', rarity: 96 },
        { trait: 'Shops', value: '50 Units', rarity: 89 },
        { trait: 'Traffic', value: 'High Volume', rarity: 92 }
      ],
      unlockableContent: true,
      hasUtility: true,
      utility: 'Revenus locatifs des boutiques virtuelles',
      createdAt: new Date('2025-02-28'),
      listed: true
    },
    {
      id: '4',
      name: 'Islamic Education Avatar',
      description: 'Avatar 3D premium avec vêtements traditionnels islamiques et accessoires pour environnements éducatifs',
      price: 0.45,
      currency: 'MATIC',
      creator: 'Virtual Islamic Academy',
      category: 'avatar',
      rarity: 'rare',
      shariahCertified: true,
      certificationBody: 'Islamic Education Authority',
      blockchain: 'Polygon',
      royalty: 8,
      totalSupply: 500,
      currentSupply: 342,
      lastSale: 0.38,
      imageUrl: '/nft-avatar.jpg',
      properties: [
        { trait: 'Clothing', value: 'Traditional Thobe', rarity: 72 },
        { trait: 'Accessories', value: 'Prayer Beads', rarity: 65 },
        { trait: 'Expression', value: 'Peaceful', rarity: 80 }
      ],
      unlockableContent: false,
      hasUtility: true,
      utility: 'Accès exclusif aux cours dans le métaverse',
      createdAt: new Date('2025-05-10'),
      listed: true
    }
  ]);

  const [virtualProperties] = useState<VirtualProperty[]>([
    {
      id: '1',
      name: 'Islamic Cultural Center',
      description: 'Centre culturel islamique virtuel avec mosquée, bibliothèque et espaces éducatifs dans Decentraland',
      platform: 'Islamic Metaverse',
      coordinates: 'Islamic District (125, 78)',
      size: '4x4 parcels (64x64m)',
      price: 25000,
      currency: 'ISLAMIC',
      owner: 'Dubai Islamic Foundation',
      development: 'complete',
      buildings: ['Mosquée principale', 'Bibliothèque', 'Salle de conférences', 'Café halal'],
      neighbors: ['Islamic University', 'Halal Shopping Mall', 'Cultural Museum'],
      traffic: 2847,
      revenue: 1250,
      shariahCompliant: true,
      religiousFeatures: ['Orientation Qibla', 'Heures de prière', 'Espaces séparés'],
      imageUrl: '/property-cultural-center.jpg',
      monthlyVisitors: 12500,
      forSale: false,
      forRent: true,
      rentPrice: 500
    },
    {
      id: '2',
      name: 'Halal Commerce Plaza',
      description: 'Centre commercial virtuel exclusivement dédié aux produits et services halal certifiés',
      platform: 'The Sandbox',
      coordinates: 'Commerce Zone (89, 156)',
      size: '6x6 parcels (96x96m)',
      price: 45000,
      currency: 'SAND',
      owner: 'Halal Digital Ventures',
      development: 'partial',
      buildings: ['Mall principal', 'Food court halal', 'Bureaux admin'],
      neighbors: ['Fashion District', 'Tech Hub', 'Entertainment Zone'],
      traffic: 5234,
      revenue: 2890,
      shariahCompliant: true,
      religiousFeatures: ['Certification halal visible', 'Pas de produits haram', 'Espaces de prière'],
      imageUrl: '/property-commerce-plaza.jpg',
      monthlyVisitors: 18750,
      forSale: true,
      forRent: false
    },
    {
      id: '3',
      name: 'Virtual Madrasa Campus',
      description: 'Campus éducatif islamique avec salles de classe virtuelles et espaces de récitation du Coran',
      platform: 'Horizon Worlds',
      coordinates: 'Education Sector (45, 92)',
      size: '8x8 parcels (128x128m)',
      price: 35000,
      currency: 'ETH',
      owner: 'Islamic Education Consortium',
      development: 'complete',
      buildings: ['Classes principales', 'Salle mémorisation Coran', 'Bibliothèque digitale', 'Auditorium'],
      neighbors: ['Tech University', 'Research Labs', 'Student Housing'],
      traffic: 1876,
      revenue: 980,
      shariahCompliant: true,
      religiousFeatures: ['Horaires prière respectés', 'Séparation genres', 'Contenu islamique'],
      imageUrl: '/property-madrasa.jpg',
      monthlyVisitors: 8950,
      forSale: false,
      forRent: true,
      rentPrice: 750
    }
  ]);

  const [experiences] = useState<MetaverseExperience[]>([
    {
      id: '1',
      title: 'Hajj Virtuel Immersif',
      description: 'Expérience complète du pèlerinage à La Mecque en réalité virtuelle avec guide spirituel',
      platform: 'Islamic Metaverse VR',
      category: 'worship',
      participants: 156,
      maxParticipants: 200,
      duration: '3 heures',
      language: ['Arabe', 'Français', 'Anglais'],
      price: 25,
      rating: 4.9,
      reviews: 284,
      nextSession: new Date('2025-06-25T15:00:00'),
      instructor: 'Sheikh Abdullah Al-Makki',
      halalCertified: true,
      features: ['Guide audio', 'Interaction 3D', 'Groupe prière', 'Certificat participation'],
      requirements: ['Casque VR', 'Connexion stable', 'Tenue appropriée']
    },
    {
      id: '2',
      title: 'Cours Finance Islamique Avancée',
      description: 'Formation interactive sur les instruments financiers conformes à la Charia dans un environnement 3D',
      platform: 'Virtual Islamic Academy',
      category: 'education',
      participants: 78,
      maxParticipants: 100,
      duration: '2 heures',
      language: ['Français', 'Arabe'],
      price: 50,
      rating: 4.7,
      reviews: 156,
      nextSession: new Date('2025-06-23T19:00:00'),
      instructor: 'Dr. Fatima Al-Zahra',
      halalCertified: true,
      features: ['Cas pratiques', 'Simulations trading', 'Certification', 'Support PDF'],
      requirements: ['Niveau intermédiaire', 'Ordinateur', 'Microphone']
    },
    {
      id: '3',
      title: 'Marché Virtuel Halal Dubai',
      description: 'Exploration immersive des souks traditionnels de Dubai avec commerces halal authentiques',
      platform: 'Dubai Virtual Worlds',
      category: 'commerce',
      participants: 234,
      maxParticipants: 500,
      duration: '1.5 heure',
      language: ['Français', 'Arabe', 'Anglais'],
      price: 15,
      rating: 4.6,
      reviews: 467,
      nextSession: new Date('2025-06-22T17:30:00'),
      instructor: 'Guide Ahmad Ibn Khalil',
      halalCertified: true,
      features: ['Shopping virtuel', 'Négociation', 'Livraison réelle', 'Culture locale'],
      requirements: ['Carte de paiement', 'Adresse livraison', 'Internet stable']
    }
  ]);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-100 text-gray-800';
      case 'rare': return 'bg-blue-100 text-blue-800';
      case 'epic': return 'bg-purple-100 text-purple-800';
      case 'legendary': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'art': return <Palette className="h-4 w-4" />;
      case 'virtual_property': return <Building2 className="h-4 w-4" />;
      case 'utility': return <Zap className="h-4 w-4" />;
      case 'collectible': return <Star className="h-4 w-4" />;
      case 'avatar': return <Users className="h-4 w-4" />;
      case 'domain': return <Globe className="h-4 w-4" />;
      default: return <Image className="h-4 w-4" />;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'Decentraland': return 'bg-red-100 text-red-800';
      case 'The Sandbox': return 'bg-blue-100 text-blue-800';
      case 'Somnium Space': return 'bg-green-100 text-green-800';
      case 'Horizon Worlds': return 'bg-purple-100 text-purple-800';
      case 'Islamic Metaverse': return 'bg-emerald-100 text-emerald-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
            <Box className="h-8 w-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Métaverse & NFT Halal</h2>
            <p className="text-gray-600">Propriétés virtuelles, NFT certifiés et expériences immersives conformes Charia</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Badge className="bg-green-100 text-green-800">
            <Shield className="h-4 w-4 mr-1" />
            Certifié Halal
          </Badge>
          <Badge className="bg-purple-100 text-purple-800">
            <Sparkles className="h-4 w-4 mr-1" />
            Métaverse VR
          </Badge>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {[
          { id: 'nfts', label: 'NFT Halal', icon: Image },
          { id: 'properties', label: 'Propriétés Virtuelles', icon: Building2 },
          { id: 'experiences', label: 'Expériences VR', icon: Play },
          { id: 'marketplace', label: 'Marketplace', icon: ShoppingBag }
        ].map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? 'default' : 'ghost'}
            className={`flex-1 ${activeTab === tab.id ? 'bg-white shadow-sm' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <tab.icon className="h-4 w-4 mr-2" />
            {tab.label}
          </Button>
        ))}
      </div>

      {/* NFT Halal Tab */}
      {activeTab === 'nfts' && (
        <div className="space-y-6">
          {/* Search and Filters */}
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Input
                placeholder="Rechercher des NFT halal..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as any)}
              className="px-4 py-2 border rounded-lg bg-white"
            >
              <option value="all">Toutes catégories</option>
              <option value="art">Art</option>
              <option value="virtual_property">Propriétés virtuelles</option>
              <option value="utility">Utilitaires</option>
              <option value="collectible">Collectibles</option>
            </select>
          </div>

          {/* NFT Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {halalNFTs.map((nft) => (
              <Card key={nft.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <Image className="h-24 w-24 text-purple-400" />
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{nft.name}</CardTitle>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge className={getRarityColor(nft.rarity)}>
                          <Crown className="h-3 w-3 mr-1" />
                          {nft.rarity.toUpperCase()}
                        </Badge>
                        <Badge className="bg-gray-100 text-gray-800">
                          {getCategoryIcon(nft.category)}
                          <span className="ml-1">{nft.category.replace('_', ' ')}</span>
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600 line-clamp-2">{nft.description}</p>

                  {/* Price and Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Prix Actuel</p>
                      <p className="text-xl font-bold">{nft.price} {nft.currency}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Dernière Vente</p>
                      <p className="text-lg font-semibold text-green-600">{nft.lastSale} {nft.currency}</p>
                    </div>
                  </div>

                  {/* Supply Info */}
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Disponibilité</span>
                      <span>{nft.currentSupply} / {nft.totalSupply}</span>
                    </div>
                    <Progress 
                      value={(nft.currentSupply / nft.totalSupply) * 100} 
                      className="h-2"
                    />
                  </div>

                  {/* Certification */}
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Certifié Halal
                    </Badge>
                    {nft.hasUtility && (
                      <Badge className="bg-blue-100 text-blue-800">
                        <Zap className="h-3 w-3 mr-1" />
                        Utilitaire
                      </Badge>
                    )}
                  </div>

                  {/* Properties Preview */}
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Propriétés rares:</p>
                    <div className="flex flex-wrap gap-1">
                      {nft.properties.slice(0, 2).map((prop, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {prop.trait}: {prop.value}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Acheter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Virtual Properties Tab */}
      {activeTab === 'properties' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {virtualProperties.map((property) => (
              <Card key={property.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <Building2 className="h-16 w-16 text-blue-500" />
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl">{property.name}</CardTitle>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge className={getPlatformColor(property.platform)}>
                          <Globe className="h-3 w-3 mr-1" />
                          {property.platform}
                        </Badge>
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Halal
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      {property.forSale && (
                        <Badge className="bg-blue-100 text-blue-800">À Vendre</Badge>
                      )}
                      {property.forRent && (
                        <Badge className="bg-orange-100 text-orange-800">À Louer</Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600">{property.description}</p>

                  {/* Key Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Prix</p>
                      <p className="text-xl font-bold">
                        {property.price.toLocaleString()} {property.currency}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Revenus Mensuels</p>
                      <p className="text-lg font-semibold text-green-600">
                        ${property.revenue.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Location and Size */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Coordonnées</span>
                      <span className="font-medium">{property.coordinates}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Taille</span>
                      <span className="font-medium">{property.size}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Visiteurs/mois</span>
                      <span className="font-medium">{property.monthlyVisitors.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Development Status */}
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Développement</span>
                      <span className="font-medium">
                        {property.development === 'complete' ? 'Complet' :
                         property.development === 'partial' ? 'Partiel' : 'Non développé'}
                      </span>
                    </div>
                    <Progress 
                      value={property.development === 'complete' ? 100 : 
                            property.development === 'partial' ? 60 : 20} 
                      className="h-2"
                    />
                  </div>

                  {/* Buildings */}
                  <div>
                    <p className="text-sm font-medium mb-2">Bâtiments:</p>
                    <div className="flex flex-wrap gap-1">
                      {property.buildings.map((building, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {building}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Religious Features */}
                  <div>
                    <p className="text-sm font-medium mb-2">Caractéristiques religieuses:</p>
                    <div className="flex flex-wrap gap-1">
                      {property.religiousFeatures.map((feature, index) => (
                        <Badge key={index} className="bg-green-100 text-green-800 text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    {property.forSale && (
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <DollarSign className="h-4 w-4 mr-2" />
                        Acheter
                      </Button>
                    )}
                    {property.forRent && (
                      <Button variant="outline" className="flex-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        Louer
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* VR Experiences Tab */}
      {activeTab === 'experiences' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {experiences.map((experience) => (
              <Card key={experience.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{experience.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge className={`${
                          experience.category === 'education' ? 'bg-blue-100 text-blue-800' :
                          experience.category === 'worship' ? 'bg-green-100 text-green-800' :
                          experience.category === 'commerce' ? 'bg-purple-100 text-purple-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {experience.category.charAt(0).toUpperCase() + experience.category.slice(1)}
                        </Badge>
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Halal
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="font-semibold">{experience.rating}</span>
                        <span className="text-sm text-gray-600 ml-1">({experience.reviews})</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">{experience.description}</p>

                  {/* Key Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Prix</p>
                      <p className="text-xl font-bold">${experience.price}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Durée</p>
                      <p className="text-lg font-semibold">{experience.duration}</p>
                    </div>
                  </div>

                  {/* Participants */}
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Participants</span>
                      <span>{experience.participants} / {experience.maxParticipants}</span>
                    </div>
                    <Progress 
                      value={(experience.participants / experience.maxParticipants) * 100} 
                      className="h-2"
                    />
                  </div>

                  {/* Next Session */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Prochaine session</span>
                    <span className="font-medium">
                      {experience.nextSession.toLocaleDateString('fr-FR')} à {experience.nextSession.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>

                  {/* Instructor */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Instructeur</span>
                    <span className="font-medium">{experience.instructor}</span>
                  </div>

                  {/* Languages */}
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Langues disponibles:</p>
                    <div className="flex flex-wrap gap-1">
                      {experience.language.map((lang, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Inclus:</p>
                    <div className="flex flex-wrap gap-1">
                      {experience.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} className="bg-blue-100 text-blue-800 text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Play className="h-4 w-4 mr-2" />
                    Réserver Session
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Marketplace Tab */}
      {activeTab === 'marketplace' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Image className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-600">NFT Halal</p>
                    <p className="text-2xl font-bold">1,247</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Propriétés</p>
                    <p className="text-2xl font-bold">89</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Volume 24h</p>
                    <p className="text-2xl font-bold">$2.4M</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="text-sm text-gray-600">Utilisateurs Actifs</p>
                    <p className="text-2xl font-bold">12.5K</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Tendances du Marché</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold">NFT Art Islamique</p>
                      <p className="text-sm text-gray-600">+15.7% cette semaine</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Tendance</Badge>
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Building2 className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Propriétés Métaverse</p>
                      <p className="text-sm text-gray-600">+8.3% ce mois</p>
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Stable</Badge>
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Play className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Expériences VR</p>
                      <p className="text-sm text-gray-600">+23.4% ce mois</p>
                    </div>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800">En croissance</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}