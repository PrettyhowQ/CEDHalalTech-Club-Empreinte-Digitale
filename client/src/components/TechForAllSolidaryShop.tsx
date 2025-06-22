import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart,
  Package,
  Users,
  Mail,
  MapPin,
  Euro,
  Gift,
  Truck,
  FileText,
  Phone,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Globe,
  Zap,
  Archive,
  UserCheck,
  Building,
  Send,
  Download,
  Upload,
  CreditCard,
  HandHeart,
  ShoppingCart,
  Smartphone
} from 'lucide-react';

interface Donor {
  id: string;
  name: string;
  type: 'individual' | 'company' | 'foundation';
  country: 'CH' | 'FR' | 'DE' | 'IT' | 'ES' | 'AT' | 'NL' | 'BE';
  email: string;
  phone: string;
  totalDonated: number;
  lastDonation: Date;
  preferredDonationType: 'financial' | 'material' | 'both';
  communicationPrefs: {
    email: boolean;
    sms: boolean;
    postal: boolean;
    frequency: 'weekly' | 'monthly' | 'quarterly';
  };
  status: 'active' | 'inactive' | 'vip';
  notes: string;
}

interface MaterialDonation {
  id: string;
  donorId: string;
  donorName: string;
  category: 'computers_pro' | 'marine_equipment' | 'construction_tools' | 'mechanical_equipment' | 'tech_accessories' | 'professional_other';
  items: DonationItem[];
  status: 'pending' | 'approved' | 'collected' | 'distributed' | 'completed';
  submissionDate: Date;
  collectionDate?: Date;
  distributionDate?: Date;
  location: string;
  estimatedValue: number;
  recipient?: string;
  recipientProfile: 'expatriate' | 'unemployed' | 'fisherman' | 'construction_worker' | 'mechanic' | 'entrepreneur';
  documentation: {
    photos: string[];
    certificates: string[];
    receiptGenerated: boolean;
  };
}

interface DonationItem {
  name: string;
  brand: string;
  model: string;
  condition: 'like_new' | 'excellent' | 'good' | 'fair' | 'poor';
  estimatedValue: number;
  serialNumber?: string;
  specifications: string;
  workingCondition: boolean;
}

interface FinancialDonation {
  id: string;
  donorId: string;
  donorName: string;
  amount: number;
  currency: 'EUR' | 'CHF' | 'USD';
  method: 'bank_transfer' | 'credit_card' | 'paypal' | 'crypto';
  purpose: 'general' | 'equipment' | 'education' | 'emergency';
  date: Date;
  status: 'pending' | 'confirmed' | 'allocated' | 'used';
  taxReceiptGenerated: boolean;
  projectAllocation?: string;
}

interface ShopItem {
  id: string;
  name: string;
  category: 'professional_computers' | 'marine_motors' | 'construction_tools' | 'mechanical_equipment' | 'tech_accessories';
  originalDonation: string;
  refurbishedBy: string;
  condition: 'like_new' | 'excellent' | 'good';
  price: number;
  originalValue: number;
  specifications: string;
  photos: string[];
  warranty: number; // months
  available: boolean;
  soldDate?: Date;
  buyer?: string;
  targetProfile: 'expatriate' | 'unemployed' | 'fisherman' | 'construction_worker' | 'mechanic' | 'entrepreneur';
}

export function TechForAllSolidaryShop() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [emailCampaign, setEmailCampaign] = useState<string>('');

  // Données simulées pour la démo
  const donors: Donor[] = [
    {
      id: '1',
      name: 'Swiss Tech Foundation',
      type: 'foundation',
      country: 'CH',
      email: 'contact@swisstech.foundation',
      phone: '+41 22 123 4567',
      totalDonated: 125000,
      lastDonation: new Date('2024-05-15'),
      preferredDonationType: 'both',
      communicationPrefs: {
        email: true,
        sms: false,
        postal: true,
        frequency: 'monthly'
      },
      status: 'vip',
      notes: 'Donateur principal - Contact privilégié'
    },
    {
      id: '2',
      name: 'Marie Dubois',
      type: 'individual',
      country: 'FR',
      email: 'marie.dubois@email.fr',
      phone: '+33 1 23 45 67 89',
      totalDonated: 5200,
      lastDonation: new Date('2024-06-01'),
      preferredDonationType: 'material',
      communicationPrefs: {
        email: true,
        sms: true,
        postal: false,
        frequency: 'monthly'
      },
      status: 'active',
      notes: 'Enseignante - Dons réguliers de matériel informatique'
    },
    {
      id: '3',
      name: 'TechCorp Germany',
      type: 'company',
      country: 'DE',
      email: 'donations@techcorp.de',
      phone: '+49 30 12345678',
      totalDonated: 85000,
      lastDonation: new Date('2024-05-20'),
      preferredDonationType: 'both',
      communicationPrefs: {
        email: true,
        sms: false,
        postal: true,
        frequency: 'quarterly'
      },
      status: 'vip',
      notes: 'Partenariat entreprise - Dons trimestriels importants'
    }
  ];

  const materialDonations: MaterialDonation[] = [
    {
      id: 'MD001',
      donorId: '2',
      donorName: 'Marie Dubois',
      category: 'computers_pro',
      items: [
        {
          name: 'MacBook Pro Professionnel',
          brand: 'Apple',
          model: '2019 13"',
          condition: 'good',
          estimatedValue: 800,
          serialNumber: 'C02XD0AAJG5H',
          specifications: '8GB RAM, 256GB SSD, Intel i5 - Configuration développeur',
          workingCondition: true
        },
        {
          name: 'Écran Dell Professionnel',
          brand: 'Dell',
          model: 'U2419H',
          condition: 'excellent',
          estimatedValue: 200,
          specifications: '24" Full HD, USB-C, calibrage couleur',
          workingCondition: true
        }
      ],
      status: 'collected',
      submissionDate: new Date('2024-05-28'),
      collectionDate: new Date('2024-06-02'),
      location: 'Paris 15ème',
      estimatedValue: 1000,
      recipient: 'Jean Martinez - Développeur expatrié',
      recipientProfile: 'expatriate',
      documentation: {
        photos: ['photo1.jpg', 'photo2.jpg'],
        certificates: ['certificate_md001.pdf'],
        receiptGenerated: true
      }
    },
    {
      id: 'MD002',
      donorId: '3',
      donorName: 'TechCorp Germany',
      category: 'marine_equipment',
      items: [
        {
          name: 'Moteur Hors-Bord Yamaha',
          brand: 'Yamaha',
          model: 'F25DMHS',
          condition: 'excellent',
          estimatedValue: 4500,
          serialNumber: 'YAM25-2023-8457',
          specifications: '25CV, 4 temps, démarrage électrique, très peu utilisé',
          workingCondition: true
        }
      ],
      status: 'approved',
      submissionDate: new Date('2024-06-10'),
      location: 'Marseille Port',
      estimatedValue: 4500,
      recipient: 'Carlos Rodriguez - Pêcheur Costa del Sol',
      recipientProfile: 'fisherman',
      documentation: {
        photos: ['yamaha_motor1.jpg', 'yamaha_motor2.jpg'],
        certificates: ['marine_certificate.pdf'],
        receiptGenerated: false
      }
    },
    {
      id: 'MD003',
      donorId: '1',
      donorName: 'Swiss Tech Foundation',
      category: 'construction_tools',
      items: [
        {
          name: 'Perceuse Hilti Professional',
          brand: 'Hilti',
          model: 'TE 6-A36',
          condition: 'excellent',
          estimatedValue: 650,
          specifications: 'Batterie 36V, perforateur SDS-plus, coffret complet',
          workingCondition: true
        },
        {
          name: 'Niveau Laser Bosch',
          brand: 'Bosch',
          model: 'GLL 3-80 CG',
          condition: 'excellent',
          estimatedValue: 400,
          specifications: 'Laser vert, portée 30m, support magnétique',
          workingCondition: true
        }
      ],
      status: 'pending',
      submissionDate: new Date('2024-06-15'),
      location: 'Genève',
      estimatedValue: 1050,
      recipientProfile: 'construction_worker',
      documentation: {
        photos: ['tools1.jpg', 'tools2.jpg'],
        certificates: [],
        receiptGenerated: false
      }
    }
  ];

  const financialDonations: FinancialDonation[] = [
    {
      id: 'FD001',
      donorId: '1',
      donorName: 'Swiss Tech Foundation',
      amount: 25000,
      currency: 'CHF',
      method: 'bank_transfer',
      purpose: 'equipment',
      date: new Date('2024-05-15'),
      status: 'allocated',
      taxReceiptGenerated: true,
      projectAllocation: 'Équipement écoles rurales Suisse'
    }
  ];

  const shopItems: ShopItem[] = [
    {
      id: 'SI001',
      name: 'MacBook Pro Reconditionné',
      category: 'professional_computers',
      originalDonation: 'MD001',
      refurbishedBy: 'B. Yakoubi',
      condition: 'like_new',
      price: 650,
      originalValue: 800,
      specifications: '8GB RAM, 256GB SSD, Reconditionné par TechForAll',
      photos: ['macbook1.jpg', 'macbook2.jpg'],
      warranty: 12,
      available: true,
      targetProfile: 'expatriate'
    },
    {
      id: 'SI002',
      name: 'Moteur Yamaha 25CV',
      category: 'marine_motors',
      originalDonation: 'MD002',
      refurbishedBy: 'B. Yakoubi',
      condition: 'excellent',
      price: 3200,
      originalValue: 4500,
      specifications: '25CV, 4 temps, démarrage électrique, révision complète',
      photos: ['yamaha1.jpg', 'yamaha2.jpg'],
      warranty: 6,
      available: true,
      targetProfile: 'fisherman'
    },
    {
      id: 'SI003',
      name: 'Kit Outils Hilti Pro',
      category: 'construction_tools',
      originalDonation: 'MD003',
      refurbishedBy: 'B. Yakoubi',
      condition: 'like_new',
      price: 850,
      originalValue: 1050,
      specifications: 'Perceuse + Niveau laser, batteries neuves, coffret complet',
      photos: ['hilti1.jpg', 'hilti2.jpg'],
      warranty: 12,
      available: false,
      targetProfile: 'construction_worker'
    }
  ];

  const countries = [
    { code: 'CH', name: 'Suisse', flag: '🇨🇭' },
    { code: 'FR', name: 'France', flag: '🇫🇷' },
    { code: 'DE', name: 'Allemagne', flag: '🇩🇪' },
    { code: 'IT', name: 'Italie', flag: '🇮🇹' },
    { code: 'ES', name: 'Espagne', flag: '🇪🇸' },
    { code: 'AT', name: 'Autriche', flag: '🇦🇹' },
    { code: 'NL', name: 'Pays-Bas', flag: '🇳🇱' },
    { code: 'BE', name: 'Belgique', flag: '🇧🇪' }
  ];

  const emailTemplates = {
    welcome: `Cher donateur,

Bienvenue dans TechForAll ! Votre soutien aide concrètement les expatriés et personnes éloignées de l'emploi.

Nous collectons et reconditionnons :
- PC Pro et MacBook pour développeurs expatriés
- Moteurs marins pour pêcheurs en difficulté
- Outils BTP professionnels pour artisans
- Équipement mécanique proche du neuf

Responsable reconditionnement: B. Yakoubi
Boutique solidaire Costa del Sol & Europe

Merci pour votre générosité !`,

    thankyou: `Merci pour votre don professionnel !

Votre matériel professionnel va directement aider nos bénéficiaires à retrouver une activité.

Détails de votre don :
- Valeur estimée: {amount}€
- Date réception: {date}
- Reçu fiscal: En cours de génération
- Attribution: Expatrié/Demandeur d'emploi qualifié

Suivi reconditionnement disponible.

Cordialement,
B. Yakoubi - TechForAll`,

    monthly_update: `TechForAll - Actualités {month}

Cher donateur,

Ce mois-ci grâce à vos dons :
✓ {computers} PC/Mac Pro reconditionnés → Développeurs expatriés
✓ {motors} moteurs marins révisés → Pêcheurs Costa del Sol  
✓ {tools} kits outils BTP → Artisans en reconversion
✓ {mechanics} équipements mécaniques → Garages solidaires

Prochaine collecte matériel: {next_date}
Boutique Costa del Sol: www.techforall.solidaire

B. Yakoubi - Expert reconditionnement professionnel`
  };

  const generateEmail = (template: string, donor: Donor) => {
    const today = new Date();
    return emailTemplates[template as keyof typeof emailTemplates]
      .replace('{amount}', donor.totalDonated.toLocaleString())
      .replace('{date}', today.toLocaleDateString('fr-FR'))
      .replace('{month}', today.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' }))
      .replace('{computers}', '47')
      .replace('{beneficiaries}', '156')
      .replace('{schools}', '12')
      .replace('{next_date}', new Date(Date.now() + 7*24*60*60*1000).toLocaleDateString('fr-FR'));
  };

  const getCountryFlag = (countryCode: string) => {
    const country = countries.find(c => c.code === countryCode);
    return country ? country.flag : '🌍';
  };

  const filteredDonors = selectedCountry === 'all' 
    ? donors 
    : donors.filter(d => d.country === selectedCountry);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header TechForAll */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-16 h-16 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl flex items-center justify-center"
            >
              <Heart className="h-8 w-8 text-white" />
            </motion.div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
              TechForAll Boutique Solidaire
            </h1>
          </div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Association d'aide aux expatriés et personnes éloignées de l'emploi - Matériel professionnel proche du neuf
          </p>
          <div className="flex justify-center gap-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Users className="h-3 w-3 mr-1" />
              Aide Expatriés
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <MapPin className="h-3 w-3 mr-1" />
              Costa del Sol + Europe
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              <Package className="h-3 w-3 mr-1" />
              Matériel Professionnel
            </Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              <Truck className="h-3 w-3 mr-1" />
              Moteurs Bateaux
            </Badge>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="donors">Donateurs</TabsTrigger>
            <TabsTrigger value="material">Dons Matériels</TabsTrigger>
            <TabsTrigger value="financial">Dons Financiers</TabsTrigger>
            <TabsTrigger value="shop">Boutique</TabsTrigger>
            <TabsTrigger value="emails">Emails Auto</TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Métriques principales */}
              <Card className="bg-gradient-to-br from-green-100 to-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-800 text-sm font-medium">Donateurs Actifs</p>
                      <p className="text-3xl font-bold text-green-900">{donors.filter(d => d.status === 'active' || d.status === 'vip').length}</p>
                    </div>
                    <Users className="h-12 w-12 text-green-600" />
                  </div>
                  <p className="text-green-700 text-sm mt-2">Suisse + Europe</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-100 to-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-800 text-sm font-medium">Dons Collectés</p>
                      <p className="text-3xl font-bold text-blue-900">
                        {donors.reduce((sum, d) => sum + d.totalDonated, 0).toLocaleString()} €
                      </p>
                    </div>
                    <Euro className="h-12 w-12 text-blue-600" />
                  </div>
                  <p className="text-blue-700 text-sm mt-2">Total cumulé</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-100 to-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-800 text-sm font-medium">Matériel Reçu</p>
                      <p className="text-3xl font-bold text-purple-900">{materialDonations.length}</p>
                    </div>
                    <Package className="h-12 w-12 text-purple-600" />
                  </div>
                  <p className="text-purple-700 text-sm mt-2">En cours traitement</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-100 to-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-800 text-sm font-medium">Boutique</p>
                      <p className="text-3xl font-bold text-orange-900">{shopItems.filter(i => i.available).length}</p>
                    </div>
                    <ShoppingCart className="h-12 w-12 text-orange-600" />
                  </div>
                  <p className="text-orange-700 text-sm mt-2">Articles disponibles</p>
                </CardContent>
              </Card>

            </div>

            {/* Responsable & Contact */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5" />
                  Responsable Boutique Solidaire
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <UserCheck className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">B. Yakoubi</h3>
                      <p className="text-gray-600">Responsable TechForAll - Boutique Solidaire</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Spécialiste reconditionnement: PC Pro, MacBook, moteurs marins, outils BTP, équipement mécanique
                      </p>
                    </div>
                    <div className="text-right">
                      <Button variant="outline" className="mb-2">
                        <Phone className="h-4 w-4 mr-2" />
                        Contacter
                      </Button>
                      <p className="text-sm text-gray-500">
                        Expert matériel professionnel
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-white rounded-lg">
                      <Smartphone className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                      <p className="text-xs font-medium">PC & MacBook Pro</p>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <Truck className="h-6 w-6 mx-auto mb-2 text-green-600" />
                      <p className="text-xs font-medium">Moteurs Marins</p>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <Building className="h-6 w-6 mx-auto mb-2 text-orange-600" />
                      <p className="text-xs font-medium">Outils BTP</p>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <Zap className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                      <p className="text-xs font-medium">Équip. Mécanique</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </TabsContent>

          {/* Gestion Donateurs */}
          <TabsContent value="donors">
            <div className="space-y-6">
              
              {/* Filtres pays */}
              <Card>
                <CardHeader>
                  <CardTitle>Filtrer par pays</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={selectedCountry === 'all' ? 'default' : 'outline'}
                      onClick={() => setSelectedCountry('all')}
                      size="sm"
                    >
                      Tous les pays
                    </Button>
                    {countries.map(country => (
                      <Button
                        key={country.code}
                        variant={selectedCountry === country.code ? 'default' : 'outline'}
                        onClick={() => setSelectedCountry(country.code)}
                        size="sm"
                      >
                        {country.flag} {country.name}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Liste donateurs */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDonors.map((donor) => (
                  <motion.div
                    key={donor.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="group"
                  >
                    <Card className="hover:shadow-lg transition-all">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{getCountryFlag(donor.country)}</span>
                            <div>
                              <CardTitle className="text-lg">{donor.name}</CardTitle>
                              <p className="text-sm text-gray-600 capitalize">{donor.type}</p>
                            </div>
                          </div>
                          <Badge variant={donor.status === 'vip' ? 'default' : 'secondary'}>
                            {donor.status === 'vip' ? <Star className="h-3 w-3 mr-1" /> : null}
                            {donor.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Total donné</p>
                            <p className="font-bold text-green-600">
                              {donor.totalDonated.toLocaleString()} €
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-600">Dernier don</p>
                            <p className="font-medium">
                              {donor.lastDonation.toLocaleDateString('fr-FR')}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-1 flex-wrap">
                          {donor.preferredDonationType === 'both' && (
                            <>
                              <Badge variant="outline" className="text-xs">
                                <Euro className="h-2 w-2 mr-1" />
                                Financier
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                <Package className="h-2 w-2 mr-1" />
                                Matériel
                              </Badge>
                            </>
                          )}
                          {donor.preferredDonationType === 'financial' && (
                            <Badge variant="outline" className="text-xs">
                              <Euro className="h-2 w-2 mr-1" />
                              Financier
                            </Badge>
                          )}
                          {donor.preferredDonationType === 'material' && (
                            <Badge variant="outline" className="text-xs">
                              <Package className="h-2 w-2 mr-1" />
                              Matériel
                            </Badge>
                          )}
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Mail className="h-3 w-3 mr-1" />
                            Email
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Phone className="h-3 w-3 mr-1" />
                            Appeler
                          </Button>
                        </div>

                        {donor.notes && (
                          <div className="bg-gray-50 p-2 rounded text-xs">
                            <p className="text-gray-600">{donor.notes}</p>
                          </div>
                        )}

                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

            </div>
          </TabsContent>

          {/* Dons Matériels */}
          <TabsContent value="material">
            <div className="space-y-6">
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Gestion des Dons Matériels
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">
                        {materialDonations.filter(d => d.status === 'pending').length}
                      </p>
                      <p className="text-sm text-blue-800">En attente</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <p className="text-2xl font-bold text-orange-600">
                        {materialDonations.filter(d => d.status === 'approved').length}
                      </p>
                      <p className="text-sm text-orange-800">Approuvés</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">
                        {materialDonations.filter(d => d.status === 'collected').length}
                      </p>
                      <p className="text-sm text-green-800">Collectés</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">
                        {materialDonations.filter(d => d.status === 'completed').length}
                      </p>
                      <p className="text-sm text-purple-800">Complétés</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Liste des dons matériels */}
              <div className="space-y-4">
                {materialDonations.map((donation) => (
                  <Card key={donation.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-lg">{donation.donorName}</h3>
                          <p className="text-gray-600">ID: {donation.id}</p>
                          <p className="text-sm text-gray-500 flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {donation.location}
                          </p>
                        </div>
                        <Badge variant={
                          donation.status === 'pending' ? 'secondary' :
                          donation.status === 'approved' ? 'default' :
                          donation.status === 'collected' ? 'default' :
                          'default'
                        }>
                          {donation.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-2">Articles donnés</h4>
                          <div className="space-y-2">
                            {donation.items.map((item, index) => (
                              <div key={index} className="bg-gray-50 p-3 rounded-lg">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-gray-600">{item.brand} {item.model}</p>
                                    <p className="text-xs text-gray-500">{item.specifications}</p>
                                  </div>
                                  <div className="text-right">
                                    <p className="font-bold text-green-600">{item.estimatedValue}€</p>
                                    <Badge variant="outline" className="text-xs">
                                      {item.condition}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Informations</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Valeur totale:</span>
                              <span className="font-bold">{donation.estimatedValue}€</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Date soumission:</span>
                              <span>{donation.submissionDate.toLocaleDateString('fr-FR')}</span>
                            </div>
                            {donation.collectionDate && (
                              <div className="flex justify-between">
                                <span className="text-gray-600">Date collecte:</span>
                                <span>{donation.collectionDate.toLocaleDateString('fr-FR')}</span>
                              </div>
                            )}
                            {donation.recipient && (
                              <div className="flex justify-between">
                                <span className="text-gray-600">Bénéficiaire:</span>
                                <span>{donation.recipient}</span>
                              </div>
                            )}
                          </div>

                          <div className="mt-4 flex gap-2">
                            <Button variant="outline" size="sm">
                              <FileText className="h-3 w-3 mr-1" />
                              Générer reçu
                            </Button>
                            <Button variant="outline" size="sm">
                              <Truck className="h-3 w-3 mr-1" />
                              Planifier collecte
                            </Button>
                          </div>
                        </div>
                      </div>

                    </CardContent>
                  </Card>
                ))}
              </div>

            </div>
          </TabsContent>

          {/* Dons Financiers */}
          <TabsContent value="financial">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Euro className="h-5 w-5" />
                  Dons Financiers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {financialDonations.map((donation) => (
                    <div key={donation.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold">{donation.donorName}</h3>
                          <p className="text-gray-600">ID: {donation.id}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-green-600">
                            {donation.amount.toLocaleString()} {donation.currency}
                          </p>
                          <Badge variant="default">{donation.status}</Badge>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                        <div>
                          <p className="text-gray-600">Méthode</p>
                          <p className="font-medium">{donation.method}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Objectif</p>
                          <p className="font-medium">{donation.purpose}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Date</p>
                          <p className="font-medium">{donation.date.toLocaleDateString('fr-FR')}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Reçu fiscal</p>
                          <p className="font-medium">
                            {donation.taxReceiptGenerated ? 
                              <CheckCircle className="h-4 w-4 text-green-600" /> : 
                              <AlertCircle className="h-4 w-4 text-orange-600" />
                            }
                          </p>
                        </div>
                      </div>

                      {donation.projectAllocation && (
                        <div className="mt-3 p-2 bg-blue-50 rounded">
                          <p className="text-sm"><strong>Allocation:</strong> {donation.projectAllocation}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Boutique Solidaire */}
          <TabsContent value="shop">
            <div className="space-y-6">
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Boutique Solidaire - Gestion B. Yakoubi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {shopItems.map((item) => (
                      <Card key={item.id} className="hover:shadow-lg transition-all">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <Badge variant="outline" className="text-xs">
                              {item.condition}
                            </Badge>
                            <Badge variant={item.available ? 'default' : 'secondary'}>
                              {item.available ? 'Disponible' : 'Vendu'}
                            </Badge>
                          </div>
                          
                          <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                          <p className="text-sm text-gray-600 mb-3">{item.specifications}</p>
                          
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Prix solidaire:</span>
                              <span className="font-bold text-green-600">{item.price}€</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Valeur originale:</span>
                              <span className="text-gray-500 line-through">{item.originalValue}€</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Garantie:</span>
                              <span>{item.warranty} mois</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Reconditionné par:</span>
                              <span className="font-medium">{item.refurbishedBy}</span>
                            </div>
                          </div>

                          <div className="mt-4 flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              <FileText className="h-3 w-3 mr-1" />
                              Détails
                            </Button>
                            {item.available && (
                              <Button size="sm" className="flex-1">
                                <ShoppingCart className="h-3 w-3 mr-1" />
                                Réserver
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

            </div>
          </TabsContent>

          {/* Générateur d'emails automatiques */}
          <TabsContent value="emails">
            <div className="space-y-6">
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Générateur d'Emails Automatiques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Templates */}
                    <div>
                      <h3 className="font-medium mb-3">Templates disponibles</h3>
                      <div className="space-y-2">
                        {Object.keys(emailTemplates).map((template) => (
                          <Button
                            key={template}
                            variant={emailCampaign === template ? 'default' : 'outline'}
                            onClick={() => setEmailCampaign(template)}
                            className="w-full justify-start"
                            size="sm"
                          >
                            <Mail className="h-3 w-3 mr-2" />
                            {template === 'welcome' && 'Bienvenue donateur'}
                            {template === 'thankyou' && 'Remerciement don'}
                            {template === 'monthly_update' && 'Actualités mensuelles'}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Aperçu */}
                    <div className="md:col-span-2">
                      <h3 className="font-medium mb-3">Aperçu de l'email</h3>
                      {emailCampaign && (
                        <div className="bg-gray-50 p-4 rounded-lg border">
                          <div className="bg-white p-4 rounded shadow-sm">
                            <div className="border-b pb-2 mb-3">
                              <p className="font-medium">TechForAll - Association</p>
                              <p className="text-sm text-gray-600">contact@techforall.org</p>
                            </div>
                            <pre className="text-sm whitespace-pre-wrap font-sans">
                              {generateEmail(emailCampaign, donors[0])}
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Actions d'envoi */}
                  {emailCampaign && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium mb-3">Envoyer la campagne</h4>
                      <div className="flex gap-4 items-center">
                        <div className="flex gap-2">
                          {countries.map(country => (
                            <Badge key={country.code} variant="outline" className="cursor-pointer">
                              {country.flag} {donors.filter(d => d.country === country.code).length}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2 ml-auto">
                          <Button variant="outline" size="sm">
                            <Download className="h-3 w-3 mr-1" />
                            Exporter liste
                          </Button>
                          <Button size="sm">
                            <Send className="h-3 w-3 mr-1" />
                            Envoyer ({donors.length} destinataires)
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                </CardContent>
              </Card>

            </div>
          </TabsContent>

        </Tabs>

        {/* Liaison Costa del Sol */}
        <Card className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-orange-600" />
              Liaison Costa del Sol
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Boutique Physique</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Boutique solidaire TechForAll située en Costa del Sol, gérée par B. Yakoubi pour la vente d'équipements reconditionnés et l'accueil des donateurs européens.
                </p>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.location.href = '/costa-del-sol'}
                  >
                    <Building className="h-3 w-3 mr-1" />
                    App Logistique
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.location.href = '/boutique-yakoubi'}
                  >
                    <ShoppingCart className="h-3 w-3 mr-1" />
                    Boutique Solidaire
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Synchronisation</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Inventaire synchronisé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Commandes en temps réel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-orange-600" />
                    <span>Dernière sync: il y a 5 min</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}