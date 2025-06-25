import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart,
  MapPin,
  Truck,
  Recycle,
  Home,
  Wrench,
  Car,
  Droplets,
  Ship,
  Building2,
  Euro,
  Users,
  CheckCircle,
  Plus,
  Edit,
  Eye,
  Upload,
  Flag,
  Award,
  Globe,
  Phone,
  Mail,
  FileText
} from "lucide-react";

interface DonationItem {
  id: string;
  category: 'tech' | 'construction' | 'vehicles' | 'irrigation' | 'nautical' | 'land';
  type: string;
  brand: string;
  model: string;
  year?: number;
  condition: 'excellent' | 'good' | 'fair' | 'for-parts';
  estimatedValue: number;
  location: string;
  postalCode: string;
  country: string;
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  description: string;
  images: string[];
  taxBenefit: number; // Percentage
  status: 'pending' | 'approved' | 'collected' | 'sold' | 'distributed';
  createdAt: Date;
  collectionDate?: Date;
}

interface AssociationStats {
  totalDonations: number;
  activeMembers: number;
  countriesCovered: number;
  totalValueCollected: number;
  beneficiariesHelped: number;
  taxSavingsGenerated: number;
  carbonFootprintReduced: number;
}

export default function TechForAllAssociation() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newDonation, setNewDonation] = useState<Partial<DonationItem>>({});

  const stats: AssociationStats = {
    totalDonations: 12847,
    activeMembers: 3521,
    countriesCovered: 25,
    totalValueCollected: 2850000, // CHF
    beneficiariesHelped: 8934,
    taxSavingsGenerated: 2137500, // CHF (75% of value)
    carbonFootprintReduced: 1250 // tonnes CO2
  };

  const recentDonations: DonationItem[] = [
    {
      id: 'don-001',
      category: 'tech',
      type: 'Ordinateur portable',
      brand: 'MacBook Pro',
      model: 'M3 16"',
      year: 2024,
      condition: 'excellent',
      estimatedValue: 3200,
      location: 'Genève',
      postalCode: '1201',
      country: 'Suisse',
      donorName: 'Entreprise TechCorp SA',
      donorEmail: 'dons@techcorp.ch',
      donorPhone: '+41 22 123 4567',
      description: 'MacBook Pro M3 16" neuf, emballage d\'origine, utilisé 2 mois pour projet pilote',
      images: ['macbook1.jpg', 'macbook2.jpg'],
      taxBenefit: 75,
      status: 'approved',
      createdAt: new Date('2025-06-20'),
      collectionDate: new Date('2025-06-25')
    },
    {
      id: 'don-002',
      category: 'construction',
      type: 'Excavatrice',
      brand: 'Caterpillar',
      model: '320D2',
      year: 2019,
      condition: 'good',
      estimatedValue: 85000,
      location: 'Berne',
      postalCode: '3000',
      country: 'Suisse',
      donorName: 'Construction Helvetica AG',
      donorEmail: 'admin@helvetica.ch',
      donorPhone: '+41 31 987 6543',
      description: 'Excavatrice Caterpillar 320D2, 4200h d\'utilisation, révision complète effectuée',
      images: ['cat1.jpg', 'cat2.jpg', 'cat3.jpg'],
      taxBenefit: 75,
      status: 'pending',
      createdAt: new Date('2025-06-18')
    },
    {
      id: 'don-003',
      category: 'vehicles',
      type: 'Camping-car',
      brand: 'Mercedes',
      model: 'Sprinter Hymer',
      year: 2021,
      condition: 'excellent',
      estimatedValue: 95000,
      location: 'Lyon',
      postalCode: '69000',
      country: 'France',
      donorName: 'Famille Dubois',
      donorEmail: 'pierre.dubois@gmail.com',
      donorPhone: '+33 6 12 34 56 78',
      description: 'Camping-car Mercedes Sprinter Hymer 2021, 25000km, équipement complet',
      images: ['camper1.jpg', 'camper2.jpg'],
      taxBenefit: 66, // France tax benefit
      status: 'approved',
      createdAt: new Date('2025-06-15'),
      collectionDate: new Date('2025-06-22')
    },
    {
      id: 'don-004',
      category: 'nautical',
      type: 'Jet ski',
      brand: 'Yamaha',
      model: 'VX Cruiser',
      year: 2022,
      condition: 'good',
      estimatedValue: 12500,
      location: 'Nice',
      postalCode: '06000',
      country: 'France',
      donorName: 'Marina Costa Azzurra',
      donorEmail: 'info@marina-ca.fr',
      donorPhone: '+33 4 93 12 34 56',
      description: 'Jet ski Yamaha VX Cruiser 2022, 150h d\'utilisation, révision récente',
      images: ['jetski1.jpg'],
      taxBenefit: 66,
      status: 'collected',
      createdAt: new Date('2025-06-10'),
      collectionDate: new Date('2025-06-20')
    }
  ];

  const categories = [
    { id: 'all', name: 'Toutes', icon: Heart, count: recentDonations.length },
    { id: 'tech', name: 'Technologies', icon: Building2, count: 1 },
    { id: 'construction', name: 'Construction', icon: Home, count: 1 },
    { id: 'vehicles', name: 'Véhicules', icon: Car, count: 1 },
    { id: 'irrigation', name: 'Irrigation', icon: Droplets, count: 0 },
    { id: 'nautical', name: 'Nautique', icon: Ship, count: 1 },
    { id: 'land', name: 'Terrains', icon: MapPin, count: 0 }
  ];

  const countries = [
    { code: 'CH', name: 'Suisse', flag: '🇨🇭', taxBenefit: 75, members: 1250 },
    { code: 'FR', name: 'France', flag: '🇫🇷', taxBenefit: 66, members: 890 },
    { code: 'DE', name: 'Allemagne', flag: '🇩🇪', taxBenefit: 60, members: 654 },
    { code: 'IT', name: 'Italie', flag: '🇮🇹', taxBenefit: 65, members: 432 },
    { code: 'AT', name: 'Autriche', flag: '🇦🇹', taxBenefit: 50, members: 295 },
    { code: 'ES', name: 'Espagne', flag: '🇪🇸', taxBenefit: 35, members: 187 }
  ];

  const filteredDonations = selectedCategory === 'all' 
    ? recentDonations 
    : recentDonations.filter(item => item.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-blue-100 text-blue-800';
      case 'collected': return 'bg-green-100 text-green-800';
      case 'sold': return 'bg-purple-100 text-purple-800';
      case 'distributed': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'excellent': return 'bg-green-100 text-green-800';
      case 'good': return 'bg-blue-100 text-blue-800';
      case 'fair': return 'bg-yellow-100 text-yellow-800';
      case 'for-parts': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">TechForAll Association</h1>
              <h2 className="text-2xl text-green-600">Solidarité Technologique Européenne</h2>
              <p className="text-gray-600">Siège social Suisse - Extension européenne pour expatriés</p>
            </div>
          </div>
        </div>

        {/* Stats globales */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.totalDonations.toLocaleString()}</div>
              <div className="text-xs text-gray-600">Dons collectés</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{stats.activeMembers.toLocaleString()}</div>
              <div className="text-xs text-gray-600">Membres actifs</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{stats.countriesCovered}</div>
              <div className="text-xs text-gray-600">Pays couverts</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">{(stats.totalValueCollected / 1000000).toFixed(1)}M</div>
              <div className="text-xs text-gray-600">CHF collectés</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{stats.beneficiariesHelped.toLocaleString()}</div>
              <div className="text-xs text-gray-600">Bénéficiaires</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">{(stats.taxSavingsGenerated / 1000000).toFixed(1)}M</div>
              <div className="text-xs text-gray-600">CHF économisés</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-700">{stats.carbonFootprintReduced}T</div>
              <div className="text-xs text-gray-600">CO2 évité</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Vue d'ensemble
            </TabsTrigger>
            <TabsTrigger value="donations" className="flex items-center gap-2">
              <Recycle className="h-4 w-4" />
              Dons actifs
            </TabsTrigger>
            <TabsTrigger value="add-donation" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Faire un don
            </TabsTrigger>
            <TabsTrigger value="countries" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Couverture
            </TabsTrigger>
            <TabsTrigger value="costa-del-sol" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Costa del Sol
            </TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview" className="space-y-6">
            <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
              <CardContent className="p-8">
                <div className="text-center">
                  <Heart className="h-16 w-16 mx-auto mb-4 text-white" />
                  <h2 className="text-3xl font-bold mb-4">Mission TechForAll</h2>
                  <p className="text-lg opacity-90 mb-6">
                    Donner une seconde vie aux équipements en Europe avec avantages fiscaux exceptionnels
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">75%</div>
                      <div className="text-sm opacity-90">Réduction fiscale Suisse</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">66%</div>
                      <div className="text-sm opacity-90">Réduction fiscale France</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm opacity-90">Traçabilité dons</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-6 w-6 text-blue-600" />
                    Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm">• Ordinateurs & serveurs</div>
                    <div className="text-sm">• Équipements réseau</div>
                    <div className="text-sm">• Smartphones & tablettes</div>
                    <div className="text-sm">• Matériel audio/vidéo</div>
                    <div className="text-sm">• Instruments de mesure</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-6 w-6 text-green-600" />
                    Construction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm">• Excavatrices & engins</div>
                    <div className="text-sm">• Matériaux écologiques</div>
                    <div className="text-sm">• Outillage professionnel</div>
                    <div className="text-sm">• Échafaudages & grues</div>
                    <div className="text-sm">• Logements sociaux 75% déduction</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-6 w-6 text-purple-600" />
                    Véhicules
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm">• Camping-cars & caravanes</div>
                    <div className="text-sm">• Camions & utilitaires</div>
                    <div className="text-sm">• Véhicules de chantier</div>
                    <div className="text-sm">• Remorques spécialisées</div>
                    <div className="text-sm">• Véhicules électriques</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="h-6 w-6 text-blue-500" />
                    Irrigation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm">• Systèmes d'arrosage</div>
                    <div className="text-sm">• Pompes & filtres</div>
                    <div className="text-sm">• Tuyauterie & raccords</div>
                    <div className="text-sm">• Capteurs humidité</div>
                    <div className="text-sm">• Agriculture durable</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Ship className="h-6 w-6 text-teal-600" />
                    Nautique
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm">• Jet skis & scooters</div>
                    <div className="text-sm">• Équipements sécurité</div>
                    <div className="text-sm">• Moteurs hors-bord</div>
                    <div className="text-sm">• Combinaisons & gilets</div>
                    <div className="text-sm">• Matériel plongée</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-orange-600" />
                    Terrains
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm">• Terrains constructibles</div>
                    <div className="text-sm">• Parcelles agricoles</div>
                    <div className="text-sm">• Zones industrielles</div>
                    <div className="text-sm">• Espaces verts urbains</div>
                    <div className="text-sm">• Projets solidaires 75%</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Dons actifs */}
          <TabsContent value="donations" className="space-y-6">
            {/* Filtres par catégorie */}
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

            {/* Liste des dons */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredDonations.map((donation) => (
                <Card key={donation.id} className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{donation.brand} {donation.model}</CardTitle>
                        <p className="text-sm text-gray-600">{donation.type} {donation.year && `(${donation.year})`}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge className={getStatusColor(donation.status)}>
                          {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                        </Badge>
                        <Badge className={getConditionColor(donation.condition)}>
                          {donation.condition.charAt(0).toUpperCase() + donation.condition.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">{donation.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Valeur estimée:</span>
                          <div className="font-semibold text-green-600">{donation.estimatedValue.toLocaleString()} CHF</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Avantage fiscal:</span>
                          <div className="font-semibold text-blue-600">{donation.taxBenefit}% = {Math.round(donation.estimatedValue * donation.taxBenefit / 100).toLocaleString()} CHF</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span>{donation.location}, {donation.country}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-gray-500" />
                          <span>{donation.donorName}</span>
                        </div>
                      </div>

                      {donation.collectionDate && (
                        <div className="flex items-center gap-2 text-sm">
                          <Truck className="h-4 w-4 text-blue-500" />
                          <span>Collecte prévue: {donation.collectionDate.toLocaleDateString('fr-FR')}</span>
                        </div>
                      )}

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          Détails
                        </Button>
                        <Button variant="outline" size="sm">
                          <Phone className="h-4 w-4 mr-2" />
                          Contact
                        </Button>
                        {donation.status === 'approved' && (
                          <Button size="sm">
                            <Truck className="h-4 w-4 mr-2" />
                            Programmer collecte
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Faire un don */}
          <TabsContent value="add-donation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-6 w-6 text-green-600" />
                  Faire un don à TechForAll
                </CardTitle>
                <p className="text-gray-600">Donnez une seconde vie à vos équipements tout en bénéficiant d'avantages fiscaux</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Catégorie d'équipement</label>
                      <select className="w-full mt-1 p-2 border rounded-md">
                        <option value="">Sélectionner une catégorie</option>
                        <option value="tech">Technologies</option>
                        <option value="construction">Construction</option>
                        <option value="vehicles">Véhicules</option>
                        <option value="irrigation">Irrigation</option>
                        <option value="nautical">Nautique</option>
                        <option value="land">Terrains</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium">Type d'équipement</label>
                      <Input placeholder="Ex: Ordinateur portable, Excavatrice, Camping-car..." />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Marque</label>
                        <Input placeholder="Ex: Apple, Caterpillar..." />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Modèle</label>
                        <Input placeholder="Ex: MacBook Pro M3" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Année</label>
                        <Input type="number" placeholder="2024" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">État</label>
                        <select className="w-full p-2 border rounded-md">
                          <option value="excellent">Excellent</option>
                          <option value="good">Bon</option>
                          <option value="fair">Correct</option>
                          <option value="for-parts">Pour pièces</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium">Valeur estimée (CHF)</label>
                      <Input type="number" placeholder="1500" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Nom/Entreprise</label>
                      <Input placeholder="Votre nom ou raison sociale" />
                    </div>

                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="contact@exemple.com" />
                    </div>

                    <div>
                      <label className="text-sm font-medium">Téléphone</label>
                      <Input placeholder="+41 XX XXX XX XX" />
                    </div>

                    <div>
                      <label className="text-sm font-medium">Localisation</label>
                      <Input placeholder="Ville" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Code postal</label>
                        <Input placeholder="1200" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Pays</label>
                        <select className="w-full p-2 border rounded-md">
                          <option value="CH">🇨🇭 Suisse (75%)</option>
                          <option value="FR">🇫🇷 France (66%)</option>
                          <option value="DE">🇩🇪 Allemagne (60%)</option>
                          <option value="IT">🇮🇹 Italie (65%)</option>
                          <option value="AT">🇦🇹 Autriche (50%)</option>
                          <option value="ES">🇪🇸 Espagne (35%)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium">Description détaillée</label>
                      <textarea 
                        className="w-full mt-1 p-2 border rounded-md" 
                        rows={3}
                        placeholder="Décrivez l'état, les accessoires inclus, l'historique..."
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Avantages de votre don :</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Réduction fiscale jusqu'à 75%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Collecte gratuite à domicile</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Reçu fiscal automatique</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Impact écologique positif</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Aide aux projets solidaires</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Traçabilité complète</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <Button className="flex-1" onClick={() => window.location.href = '/documents-legaux'}>
                    <Upload className="h-4 w-4 mr-2" />
                    Soumettre le don avec documents automatiques
                  </Button>
                  <Button variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    Nous contacter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Couverture pays */}
          <TabsContent value="countries" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countries.map((country) => (
                <Card key={country.code} className="border-2 hover:border-blue-500 transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{country.flag}</span>
                        <div>
                          <CardTitle>{country.name}</CardTitle>
                          <p className="text-sm text-gray-600">Code: {country.code}</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        {country.taxBenefit}% déduction
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Membres actifs:</span>
                          <div className="font-semibold text-blue-600">{country.members.toLocaleString()}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Avantage fiscal:</span>
                          <div className="font-semibold text-green-600">{country.taxBenefit}%</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-sm font-medium">Spécificités fiscales:</div>
                        {country.code === 'CH' && (
                          <div className="text-xs text-gray-600">
                            • Réduction fiscale fédérale et cantonale<br/>
                            • Logement social: 75% de déduction<br/>
                            • Siège social association
                          </div>
                        )}
                        {country.code === 'FR' && (
                          <div className="text-xs text-gray-600">
                            • Réduction d'impôt 66% du don<br/>
                            • Plafond 20% du revenu imposable<br/>
                            • Extension automatique pour expatriés
                          </div>
                        )}
                        {country.code === 'DE' && (
                          <div className="text-xs text-gray-600">
                            • Sonderausgaben selon §10b EStG<br/>
                            • Jusqu'à 20% du revenu<br/>
                            • Reconnaissance EU
                          </div>
                        )}
                      </div>

                      <Button variant="outline" className="w-full">
                        <Flag className="h-4 w-4 mr-2" />
                        Détails fiscaux {country.name}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Costa del Sol */}
          <TabsContent value="costa-del-sol" className="space-y-6">
            <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
              <CardContent className="p-8">
                <div className="text-center">
                  <Building2 className="h-16 w-16 mx-auto mb-4 text-white" />
                  <h2 className="text-3xl font-bold mb-4">Costa del Sol</h2>
                  <h3 className="text-xl mb-2">Boutique En Ligne Solidaire</h3>
                  <p className="text-lg opacity-90 mb-6">
                    Vente exclusive des matériels collectés par TechForAll - Circuit solidaire complet
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100" onClick={() => window.location.href = '/costa-del-sol'}>
                      <Building2 className="h-4 w-4 mr-2" />
                      Accéder à la boutique Costa del Sol
                    </Button>
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600" onClick={() => window.location.href = '/documents-legaux'}>
                      <Award className="h-4 w-4 mr-2" />
                      Documents légaux automatiques
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Recycle className="h-6 w-6 text-green-600" />
                    Circuit Solidaire
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Collecte TechForAll gratuite</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Reconditionnement professionnel</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Vente Costa del Sol solidaire</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Bénéfices redistribués projets</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-blue-600" />
                    Avantages Acheteurs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span>Prix solidaires (-30 à -70%)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span>Garantie reconditionnement</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span>Livraison Europe incluse</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span>Impact écologique positif</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Produits Disponibles Costa del Sol</CardTitle>
                <p className="text-gray-600">Aperçu des derniers équipements reconditionnés disponibles</p>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Building2 className="h-24 w-24 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Boutique Costa del Sol</h3>
                  <p className="text-gray-600 mb-4">
                    La boutique en ligne sera accessible via un lien dédié<br/>
                    Vente exclusive des matériels collectés par TechForAll
                  </p>
                  <Button>
                    <Building2 className="h-4 w-4 mr-2" />
                    Ouvrir Costa del Sol
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Contact et informations légales */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">TechForAll Association</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Siège social: Genève, Suisse</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>+41 22 555 TECH (8324)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>contact@techforall.ch</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Couverture Europe</h4>
                <div className="text-sm text-gray-600">
                  <div>• Extension automatique expatriés</div>
                  <div>• 25+ pays européens couverts</div>
                  <div>• Avantages fiscaux locaux</div>
                  <div>• Collecte transfrontalière</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Costa del Sol</h4>
                <div className="text-sm text-gray-600">
                  <div>• Boutique solidaire exclusive</div>
                  <div>• Vente matériels TechForAll</div>
                  <div>• Circuit économie circulaire</div>
                  <div>• Gestion Brahim Yakoubi</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
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
            © 2025 TechForAll Association - Solidarité technologique européenne - Yakoubi Yamina
          </p>
          <p className="mb-2">
            ♻️ Économie circulaire - Avantages fiscaux maximaux - Impact écologique positif
          </p>
          <p className="font-semibold text-blue-600">
            📌 Version complète – Écosystème en production 📎
          </p>
        </div>
      </div>
    </div>
  );
}