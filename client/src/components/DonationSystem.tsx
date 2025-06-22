import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  Anchor,
  Laptop,
  Heart,
  MapPin,
  Phone,
  Mail,
  Euro,
  Calendar,
  Truck,
  FileText,
  CheckCircle,
  Package,
  Users,
  Camera,
  Upload,
  Send,
  Gift,
  Settings,
  Wrench,
  Hammer,
  Monitor,
  Smartphone,
  HardDrive,
  Cpu,
  Headphones
} from 'lucide-react';

interface DonationItem {
  id: string;
  category: 'marine' | 'computer' | 'tools' | 'electronics' | 'hvac';
  name: string;
  brand: string;
  model: string;
  condition: 'excellent' | 'good' | 'fair' | 'poor';
  estimatedValue: number;
  workingCondition: boolean;
  specifications: string;
  photos: string[];
}

interface DonationRequest {
  id: string;
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  donorLocation: string;
  items: DonationItem[];
  totalEstimatedValue: number;
  pickupPreferred: boolean;
  dropoffLocation?: string;
  notes: string;
  submissionDate: Date;
  status: 'pending' | 'approved' | 'collected' | 'distributed';
}

export function DonationSystem() {
  const [activeTab, setActiveTab] = useState('donate');
  const [donationForm, setDonationForm] = useState({
    donorName: '',
    donorEmail: '',
    donorPhone: '',
    donorLocation: '',
    category: '',
    itemName: '',
    brand: '',
    model: '',
    condition: '',
    estimatedValue: '',
    workingCondition: true,
    specifications: '',
    pickupPreferred: true,
    notes: ''
  });

  const donationCategories = [
    {
      id: 'marine',
      name: 'Équipement Marin',
      icon: Anchor,
      color: 'from-blue-500 to-cyan-600',
      items: [
        'Moteurs hors-bord',
        'GPS marins',
        'Sondes de pêche',
        'Radars nautiques',
        'VHF marines',
        'Compas électroniques',
        'Équipement de sécurité',
        'Matériel de pêche professionnel'
      ]
    },
    {
      id: 'computer',
      name: 'Matériel Informatique',
      icon: Laptop,
      color: 'from-green-500 to-emerald-600',
      items: [
        'MacBook Pro / Air',
        'PC portables professionnels',
        'Ordinateurs de bureau',
        'Écrans 4K / Ultra-wide',
        'Imprimantes professionnelles',
        'Serveurs / NAS',
        'Équipement réseau',
        'Composants informatiques'
      ]
    },
    {
      id: 'tools',
      name: 'Outillage Professionnel',
      icon: Wrench,
      color: 'from-orange-500 to-red-600',
      items: [
        'Outils électroportatifs',
        'Machines-outils',
        'Équipement de soudure',
        'Outillage de précision',
        'Équipement de mesure',
        'Matériel de construction',
        'Outils de jardin pro',
        'Équipement automobile'
      ]
    },
    {
      id: 'electronics',
      name: 'Électronique',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-600',
      items: [
        'Smartphones professionnels',
        'Tablettes graphiques',
        'Appareils photo pro',
        'Équipement audio/vidéo',
        'Matériel de télécommunication',
        'Équipement médical',
        'Instruments de mesure',
        'Électronique industrielle'
      ]
    },
    {
      id: 'hvac',
      name: 'Climatisation Professionnelle',
      icon: Settings,
      color: 'from-cyan-500 to-blue-600',
      items: [
        'Climatiseurs split système pro',
        'Unités de toiture RTU',
        'Pompes à chaleur réversibles',
        'Systèmes VRV/VRF',
        'Climatiseurs cassettes plafond',
        'Unités murales haute puissance',
        'Systèmes gainables professionnels',
        'Régulation et thermostats pro',
        'Équipement frigorifique',
        'Ventilation mécanique contrôlée'
      ]
    }
  ];

  const handleSubmitDonation = () => {
    // Logique de soumission de donation
    console.log('Donation submitted:', donationForm);
    alert('Votre donation a été soumise avec succès ! Nous vous contacterons dans les 24h.');
  };

  const recentDonations: DonationRequest[] = [
    {
      id: 'DON001',
      donorName: 'Jean-Pierre Martinet',
      donorEmail: 'jp.martinet@gmail.com',
      donorPhone: '+33 6 12 34 56 78',
      donorLocation: 'Cannes, France',
      items: [
        {
          id: 'ITEM001',
          category: 'marine',
          name: 'Moteur hors-bord Yamaha',
          brand: 'Yamaha',
          model: 'F40FETL',
          condition: 'excellent',
          estimatedValue: 4500,
          workingCondition: true,
          specifications: '40CV, 4 temps, injection directe, peu d\'heures',
          photos: ['yamaha-f40-1.jpg']
        }
      ],
      totalEstimatedValue: 4500,
      pickupPreferred: true,
      notes: 'Moteur entretenu régulièrement, factures disponibles',
      submissionDate: new Date('2024-12-20'),
      status: 'approved'
    },
    {
      id: 'DON002',
      donorName: 'Tech Solutions SARL',
      donorEmail: 'donations@techsolutions.fr',
      donorPhone: '+33 1 45 67 89 10',
      donorLocation: 'Paris, France',
      items: [
        {
          id: 'ITEM002',
          category: 'computer',
          name: 'MacBook Pro 16"',
          brand: 'Apple',
          model: 'MacBook Pro M3 Max',
          condition: 'excellent',
          estimatedValue: 3200,
          workingCondition: true,
          specifications: 'M3 Max, 36Go RAM, 1To SSD, état neuf',
          photos: ['macbook-m3-1.jpg']
        }
      ],
      totalEstimatedValue: 3200,
      pickupPreferred: false,
      dropoffLocation: 'Bureau Costa del Sol',
      notes: 'Ordinateur d\'entreprise, peu utilisé',
      submissionDate: new Date('2024-12-19'),
      status: 'collected'
    },
    {
      id: 'DON003',
      donorName: 'Construcciones Mediterráneo SA',
      donorEmail: 'donate@construcciones-med.es',
      donorPhone: '+34 952 77 88 99',
      donorLocation: 'Málaga, Espagne',
      items: [
        {
          id: 'ITEM003',
          category: 'hvac',
          name: 'Climatiseur Split Mitsubishi Electric',
          brand: 'Mitsubishi Electric',
          model: 'MSZ-LN35VG',
          condition: 'excellent',
          estimatedValue: 1800,
          workingCondition: true,
          specifications: '12000 BTU/h, Inverter, A+++, technologie Hyper Heating, installation récente',
          photos: ['mitsubishi-split-1.jpg']
        },
        {
          id: 'ITEM004',
          category: 'hvac',
          name: 'Unité extérieure Mitsubishi',
          brand: 'Mitsubishi Electric',
          model: 'MUZ-LN35VG',
          condition: 'excellent',
          estimatedValue: 1200,
          workingCondition: true,
          specifications: 'Unité extérieure correspondante, compresseur Inverter DC',
          photos: ['mitsubishi-outdoor-1.jpg']
        }
      ],
      totalEstimatedValue: 3000,
      pickupPreferred: true,
      notes: 'Système complet de climatisation, fin de chantier résidence expatriés. Installation professionnelle disponible.',
      submissionDate: new Date('2024-12-21'),
      status: 'pending'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="flex justify-center items-center gap-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-20 h-20 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl flex items-center justify-center"
            >
              <Heart className="h-10 w-10 text-white" />
            </motion.div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
              Système de Donation TechForAll
            </h1>
          </div>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Système automatisé pour les donations de matériel professionnel : moteurs marins, équipement informatique, climatisation pro pour expatriés, outillage et électronique
          </p>
        </motion.div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card className="bg-gradient-to-r from-blue-100 to-blue-200">
            <CardContent className="p-6 text-center">
              <Anchor className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-800">127</div>
              <div className="text-sm text-blue-600">Moteurs marins donnés</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-green-100 to-green-200">
            <CardContent className="p-6 text-center">
              <Laptop className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-800">2,847</div>
              <div className="text-sm text-green-600">Ordinateurs redistribués</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-orange-100 to-orange-200">
            <CardContent className="p-6 text-center">
              <Wrench className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-800">1,563</div>
              <div className="text-sm text-orange-600">Outils professionnels</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-purple-100 to-purple-200">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-800">8,492</div>
              <div className="text-sm text-purple-600">Bénéficiaires aidés</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-cyan-100 to-cyan-200">
            <CardContent className="p-6 text-center">
              <Settings className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-cyan-800">284</div>
              <div className="text-sm text-cyan-600">Climatiseurs pro installés</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="donate">Faire une Donation</TabsTrigger>
            <TabsTrigger value="categories">Catégories Acceptées</TabsTrigger>
            <TabsTrigger value="tracking">Suivi des Donations</TabsTrigger>
          </TabsList>

          {/* Formulaire de Donation */}
          <TabsContent value="donate" className="space-y-6">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-green-800">
                  Formulaire de Donation Automatisé
                </CardTitle>
                <p className="text-center text-gray-600">
                  Remplissez ce formulaire pour proposer votre matériel professionnel
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Informations du donateur */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-800">Informations du Donateur</h3>
                    <Input
                      placeholder="Nom complet ou entreprise"
                      value={donationForm.donorName}
                      onChange={(e) => setDonationForm({...donationForm, donorName: e.target.value})}
                    />
                    <Input
                      type="email"
                      placeholder="Email de contact"
                      value={donationForm.donorEmail}
                      onChange={(e) => setDonationForm({...donationForm, donorEmail: e.target.value})}
                    />
                    <Input
                      placeholder="Téléphone"
                      value={donationForm.donorPhone}
                      onChange={(e) => setDonationForm({...donationForm, donorPhone: e.target.value})}
                    />
                    <Input
                      placeholder="Localisation (ville, pays)"
                      value={donationForm.donorLocation}
                      onChange={(e) => setDonationForm({...donationForm, donorLocation: e.target.value})}
                    />
                  </div>

                  {/* Informations de l'équipement */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-800">Équipement à Donner</h3>
                    <Select value={donationForm.category} onValueChange={(value) => setDonationForm({...donationForm, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Catégorie d'équipement" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="marine">Équipement Marin</SelectItem>
                        <SelectItem value="computer">Matériel Informatique</SelectItem>
                        <SelectItem value="tools">Outillage Professionnel</SelectItem>
                        <SelectItem value="electronics">Électronique</SelectItem>
                        <SelectItem value="hvac">Climatisation Professionnelle</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="Nom de l'équipement"
                      value={donationForm.itemName}
                      onChange={(e) => setDonationForm({...donationForm, itemName: e.target.value})}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="Marque"
                        value={donationForm.brand}
                        onChange={(e) => setDonationForm({...donationForm, brand: e.target.value})}
                      />
                      <Input
                        placeholder="Modèle"
                        value={donationForm.model}
                        onChange={(e) => setDonationForm({...donationForm, model: e.target.value})}
                      />
                    </div>
                    <Select value={donationForm.condition} onValueChange={(value) => setDonationForm({...donationForm, condition: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="État de l'équipement" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent - Comme neuf</SelectItem>
                        <SelectItem value="good">Bon - Quelques traces d'usage</SelectItem>
                        <SelectItem value="fair">Correct - Usage visible</SelectItem>
                        <SelectItem value="poor">Mauvais - Pour pièces</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      type="number"
                      placeholder="Valeur estimée (€)"
                      value={donationForm.estimatedValue}
                      onChange={(e) => setDonationForm({...donationForm, estimatedValue: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Textarea
                    placeholder="Spécifications techniques détaillées"
                    value={donationForm.specifications}
                    onChange={(e) => setDonationForm({...donationForm, specifications: e.target.value})}
                    rows={3}
                  />
                  <Textarea
                    placeholder="Notes additionnelles (état, accessoires inclus, historique...)"
                    value={donationForm.notes}
                    onChange={(e) => setDonationForm({...donationForm, notes: e.target.value})}
                    rows={3}
                  />
                </div>

                <div className="flex justify-center">
                  <Button 
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 px-8 py-3 text-lg"
                    onClick={handleSubmitDonation}
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Soumettre la Donation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Catégories Acceptées */}
          <TabsContent value="categories" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {donationCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all">
                    <CardHeader>
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <category.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-center text-xl">
                        {category.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {category.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Suivi des Donations */}
          <TabsContent value="tracking" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Donations Récentes</CardTitle>
                <p className="text-gray-600">Suivi en temps réel des donations soumises</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDonations.map((donation) => (
                    <Card key={donation.id} className="border-l-4 border-l-green-500">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div className="space-y-2">
                            <div className="flex items-center gap-4">
                              <Badge className={
                                donation.status === 'approved' ? 'bg-green-500' :
                                donation.status === 'collected' ? 'bg-blue-500' :
                                donation.status === 'distributed' ? 'bg-purple-500' :
                                'bg-yellow-500'
                              }>
                                {donation.status === 'approved' ? 'Approuvée' :
                                 donation.status === 'collected' ? 'Collectée' :
                                 donation.status === 'distributed' ? 'Distribuée' :
                                 'En attente'}
                              </Badge>
                              <span className="text-sm text-gray-500">
                                #{donation.id}
                              </span>
                            </div>
                            <h3 className="font-bold">{donation.donorName}</h3>
                            <p className="text-gray-600">
                              {donation.items[0].name} - {donation.items[0].brand} {donation.items[0].model}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {donation.donorLocation}
                              </span>
                              <span className="flex items-center gap-1">
                                <Euro className="h-4 w-4" />
                                {donation.totalEstimatedValue}€
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {donation.submissionDate.toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-1" />
                            Détails
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Contact et Support */}
        <Card className="bg-gradient-to-r from-blue-100 to-green-100">
          <CardHeader>
            <CardTitle className="text-center text-xl">Contact Donation TechForAll</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-bold">Téléphone</h3>
                <p className="text-gray-600">+33 4 93 99 77 55</p>
                <p className="text-sm text-gray-500">Lun-Ven 9h-18h</p>
              </div>
              <div>
                <Mail className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-bold">Email</h3>
                <p className="text-gray-600">donations@techforall.org</p>
                <p className="text-sm text-gray-500">Réponse sous 24h</p>
              </div>
              <div>
                <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-bold">Centre de Collecte</h3>
                <p className="text-gray-600">Costa del Sol, Espagne</p>
                <p className="text-sm text-gray-500">Géré par B. Yakoubi</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}