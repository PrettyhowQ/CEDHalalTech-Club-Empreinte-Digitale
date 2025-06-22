import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Heart,
  Car,
  Home,
  Plane,
  Briefcase,
  Users,
  CheckCircle,
  AlertTriangle,
  Star,
  Calculator,
  Phone,
  Mail,
  MapPin,
  Clock,
  TrendingUp,
  Award,
  Zap,
  Globe,
  Building2,
  DollarSign
} from 'lucide-react';

interface InsuranceProduct {
  id: string;
  name: string;
  category: 'auto' | 'home' | 'health' | 'travel' | 'business' | 'life';
  description: string;
  monthlyPremium: number;
  coverage: number;
  halalFeatures: string[];
  benefits: string[];
  exclusions: string[];
  icon: any;
  color: string;
  popularity: number;
  rating: number;
  claimsProcessed: number;
}

interface InsuranceClaim {
  id: string;
  type: string;
  amount: number;
  status: 'pending' | 'investigating' | 'approved' | 'settled' | 'rejected';
  submitDate: Date;
  settlementDate?: Date;
  description: string;
}

export function CEDInsuranceHalal() {
  const [activeTab, setActiveTab] = useState('products');
  const [selectedProduct, setSelectedProduct] = useState<string>('auto-protection');

  const insuranceProducts: InsuranceProduct[] = [
    {
      id: 'auto-protection',
      name: 'Al-Aman Auto Protection Takaful',
      category: 'auto',
      description: 'Assurance automobile complète conforme Charia sans intérêts ni spéculation',
      monthlyPremium: 89,
      coverage: 500000,
      halalFeatures: [
        'Aucun intérêt (Riba) dans les calculs',
        'Pas de spéculation (Gharar)',
        'Mutualisation islamique (Takaful)',
        'Réparations chez garagistes halal certifiés',
        'Véhicules de remplacement conformes'
      ],
      benefits: [
        'Couverture dommages tous accidents',
        'Vol et incendie inclus',
        'Assistance 24/7 Europe',
        'Véhicule de remplacement',
        'Protection juridique',
        'Dommages corporels illimités'
      ],
      exclusions: [
        'Conduite sous influence',
        'Courses automobiles',
        'Transport marchandises haram',
        'Usage commercial non déclaré'
      ],
      icon: Car,
      color: 'from-blue-500 to-cyan-600',
      popularity: 95,
      rating: 4.8,
      claimsProcessed: 2847
    },
    {
      id: 'home-secure',
      name: 'Al-Aman Home Secure Takaful',
      category: 'home',
      description: 'Protection habitation familiale selon principes islamiques',
      monthlyPremium: 67,
      coverage: 750000,
      halalFeatures: [
        'Contrat Takaful participatif',
        'Réparations par artisans musulmans',
        'Exclusion activités haram',
        'Bénédiction imam pour nouveau logement',
        'Respect orientation Qibla'
      ],
      benefits: [
        'Incendie et dégâts des eaux',
        'Vol et vandalisme',
        'Catastrophes naturelles',
        'Responsabilité civile famille',
        'Biens mobiliers inclus',
        'Hébergement temporaire'
      ],
      exclusions: [
        'Stockage alcool/porc',
        'Activités non-halal',
        'Jeux de hasard',
        'Négligence manifeste'
      ],
      icon: Home,
      color: 'from-green-500 to-emerald-600',
      popularity: 88,
      rating: 4.9,
      claimsProcessed: 1653
    },
    {
      id: 'health-family',
      name: 'Al-Aman Health Family Takaful',
      category: 'health',
      description: 'Assurance santé familiale respectant éthique islamique',
      monthlyPremium: 156,
      coverage: 1000000,
      halalFeatures: [
        'Médecins musulmans prioritaires',
        'Hôpitaux halal certifiés',
        'Traitement médical conforme Charia',
        'Pas de couverture contraception',
        'Soutien spirituel inclus'
      ],
      benefits: [
        'Consultations spécialistes',
        'Hospitalisation monde entier',
        'Médecines alternatives halal',
        'Urgences 24/7',
        'Maternité complète',
        'Soins dentaires premium'
      ],
      exclusions: [
        'Chirurgie esthétique non-médicale',
        'Traitements alcoolisme',
        'Contraception non-naturelle',
        'Thérapies non-conformes'
      ],
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      popularity: 92,
      rating: 4.7,
      claimsProcessed: 5284
    },
    {
      id: 'travel-hajj',
      name: 'Al-Aman Travel & Hajj Protection',
      category: 'travel',
      description: 'Assurance voyage spécialisée pèlerinage et voyages halal',
      monthlyPremium: 34,
      coverage: 250000,
      halalFeatures: [
        'Spécialisation Hajj/Omra',
        'Guides spirituels en cas urgence',
        'Hôtels halal certifiés uniquement',
        'Assistance religieuse 24/7',
        'Rapatriement selon rites islamiques'
      ],
      benefits: [
        'Annulation voyage toute cause',
        'Assistance médicale mondiale',
        'Perte bagages et documents',
        'Retard transport',
        'Responsabilité civile',
        'Sports et loisirs halal'
      ],
      exclusions: [
        'Activités haram pendant voyage',
        'Consommation alcool',
        'Sports extrêmes',
        'Zones de guerre'
      ],
      icon: Plane,
      color: 'from-purple-500 to-indigo-600',
      popularity: 76,
      rating: 4.6,
      claimsProcessed: 892
    },
    {
      id: 'business-halal',
      name: 'CED Business Halal Pro',
      category: 'business',
      description: 'Protection entreprise conforme finance islamique',
      monthlyPremium: 234,
      coverage: 2000000,
      halalFeatures: [
        'Audit conformité Charia inclus',
        'Exclusion secteurs haram',
        'Conseil juridique islamique',
        'Certification halal business',
        'Formation équipes éthique'
      ],
      benefits: [
        'Responsabilité civile pro',
        'Protection cyber-attaques',
        'Perte exploitation',
        'Défense recours',
        'Biens professionnels',
        'Voyages d\'affaires'
      ],
      exclusions: [
        'Secteurs interdits Islam',
        'Corruption et fraude',
        'Activités spéculatives',
        'Contrats usuraires'
      ],
      icon: Briefcase,
      color: 'from-orange-500 to-amber-600',
      popularity: 84,
      rating: 4.5,
      claimsProcessed: 456
    },
    {
      id: 'life-family',
      name: 'CED Life Family Protection',
      category: 'life',
      description: 'Assurance vie familiale selon tradition islamique',
      monthlyPremium: 123,
      coverage: 500000,
      halalFeatures: [
        'Contrat Takaful pur',
        'Pas de spéculation vie humaine',
        'Héritage selon Charia',
        'Consultation imam incluse',
        'Soutien spirituel famille'
      ],
      benefits: [
        'Capital décès garanti',
        'Rente éducation enfants',
        'Invalidité permanente',
        'Maladies graves',
        'Assistance funéraire halal',
        'Soutien psychologique'
      ],
      exclusions: [
        'Suicide première année',
        'Sports extrêmes',
        'Guerre et émeutes',
        'Activités illégales'
      ],
      icon: Users,
      color: 'from-teal-500 to-cyan-600',
      popularity: 79,
      rating: 4.8,
      claimsProcessed: 234
    }
  ];

  const recentClaims: InsuranceClaim[] = [
    {
      id: 'CLM001',
      type: 'Dommages auto collision',
      amount: 8500,
      status: 'settled',
      submitDate: new Date('2024-12-18'),
      settlementDate: new Date('2024-12-20'),
      description: 'Collision avec sanglier - Réparations complètes'
    },
    {
      id: 'CLM002', 
      type: 'Vol domicile',
      amount: 12000,
      status: 'investigating',
      submitDate: new Date('2024-12-19'),
      description: 'Cambriolage résidence - Électronique et bijoux'
    },
    {
      id: 'CLM003',
      type: 'Hospitalisation urgence',
      amount: 4500,
      status: 'approved',
      submitDate: new Date('2024-12-21'),
      description: 'Intervention chirurgicale d\'urgence'
    }
  ];

  const selectedProductData = insuranceProducts.find(p => p.id === selectedProduct);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', { 
      style: 'currency', 
      currency: 'EUR',
      minimumFractionDigits: 0 
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'settled': return 'bg-green-500';
      case 'approved': return 'bg-blue-500';
      case 'investigating': return 'bg-yellow-500';
      case 'pending': return 'bg-gray-500';
      case 'rejected': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'settled': return 'Réglé';
      case 'approved': return 'Approuvé';
      case 'investigating': return 'Enquête';
      case 'pending': return 'En attente';
      case 'rejected': return 'Refusé';
      default: return status;
    }
  };

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
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 flex items-center justify-center"
            >
              <Shield className="h-10 w-10 text-white" />
            </motion.div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
              Al-Aman CED
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700">
              Assurance Takaful Internationale
            </h2>
          </div>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            La première assurance Takaful internationale basée à Genève, 100% conforme à la Charia avec système 
            <span className="font-bold text-green-600"> Takaful participatif</span>, zéro spéculation et protection éthique complète
          </p>
          
          <div className="flex justify-center gap-3 flex-wrap">
            <Badge className="bg-green-500 text-white px-4 py-2 text-lg">
              🕌 100% Halal Certifié
            </Badge>
            <Badge className="bg-blue-500 text-white px-4 py-2 text-lg">
              🛡️ Takaful Authentique
            </Badge>
            <Badge className="bg-purple-500 text-white px-4 py-2 text-lg">
              🚫 Zéro Riba/Gharar
            </Badge>
            <Badge className="bg-amber-500 text-white px-4 py-2 text-lg">
              ⭐ 847K+ Assurés
            </Badge>
          </div>
        </motion.div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-r from-green-100 to-green-200">
            <CardContent className="p-4 text-center">
              <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-800">847,293</div>
              <div className="text-sm text-green-600">Assurés actifs</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-blue-100 to-blue-200">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-800">98.7%</div>
              <div className="text-sm text-blue-600">Satisfaction client</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-purple-100 to-purple-200">
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-800">2.3h</div>
              <div className="text-sm text-purple-600">Temps traitement</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-amber-100 to-amber-200">
            <CardContent className="p-4 text-center">
              <DollarSign className="h-8 w-8 text-amber-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-amber-800">284M€</div>
              <div className="text-sm text-amber-600">Sinistres réglés</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="products">Produits Halal</TabsTrigger>
            <TabsTrigger value="claims">Sinistres</TabsTrigger>
            <TabsTrigger value="calculator">Simulateur</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>

          {/* Produits d'assurance */}
          <TabsContent value="products" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insuranceProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`cursor-pointer ${selectedProduct === product.id ? 'ring-2 ring-blue-500' : ''}`}
                  onClick={() => setSelectedProduct(product.id)}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                    <CardHeader>
                      <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <product.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-center text-xl text-gray-900">
                        {product.name}
                      </CardTitle>
                      <div className="flex justify-between items-center">
                        <Badge className="bg-green-100 text-green-800">
                          {formatCurrency(product.monthlyPremium)}/mois
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-bold">{product.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 text-sm text-center">
                        {product.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Couverture</span>
                          <span className="font-bold">{formatCurrency(product.coverage)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Popularité</span>
                          <span className="font-bold">{product.popularity}%</span>
                        </div>
                        <Progress value={product.popularity} className="h-2" />
                      </div>
                      
                      <Button 
                        className={`w-full bg-gradient-to-r ${product.color} hover:opacity-90 text-white`}
                        onClick={() => setSelectedProduct(product.id)}
                      >
                        Découvrir
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Détails produit sélectionné */}
            {selectedProductData && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <selectedProductData.icon className="h-6 w-6" />
                    {selectedProductData.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* Fonctionnalités halal */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg text-green-800">
                          ✅ Conformité Charia
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {selectedProductData.halalFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Avantages */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg text-blue-800">
                          🎯 Avantages Inclus
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {selectedProductData.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Exclusions */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg text-red-800">
                          ⚠️ Exclusions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {selectedProductData.exclusions.map((exclusion, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{exclusion}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex justify-center gap-4 mt-6">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      Souscrire maintenant
                    </Button>
                    <Button variant="outline" size="lg">
                      Demander devis
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Gestion sinistres */}
          <TabsContent value="claims" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Déclaration sinistre */}
              <Card>
                <CardHeader>
                  <CardTitle>Déclarer un Sinistre</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="bg-red-600 hover:bg-red-700">
                      <Car className="h-4 w-4 mr-2" />
                      Accident Auto
                    </Button>
                    <Button className="bg-orange-600 hover:bg-orange-700">
                      <Home className="h-4 w-4 mr-2" />
                      Dommages Domicile
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Heart className="h-4 w-4 mr-2" />
                      Frais Médicaux
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Plane className="h-4 w-4 mr-2" />
                      Voyage/Hajj
                    </Button>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-bold text-green-800 mb-2">Assistance 24/7</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-green-600" />
                        <span>+33 1 76 39 14 25</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-green-600" />
                        <span>sinistres@ced-insurance.com</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Suivi sinistres */}
              <Card>
                <CardHeader>
                  <CardTitle>Suivi de vos Sinistres</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentClaims.map(claim => (
                      <div key={claim.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-bold">{claim.type}</h4>
                            <p className="text-sm text-gray-600">{claim.description}</p>
                          </div>
                          <Badge className={`${getStatusColor(claim.status)} text-white`}>
                            {getStatusText(claim.status)}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Montant: <strong>{formatCurrency(claim.amount)}</strong></span>
                          <span className="text-gray-500">
                            {claim.submitDate.toLocaleDateString('fr-FR')}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Simulateur de cotisation */}
          <TabsContent value="calculator" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-6 w-6" />
                  Simulateur de Cotisation Halal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Type d'assurance</label>
                      <select className="w-full p-3 border rounded-lg">
                        <option>Auto Protection Halal</option>
                        <option>Home Secure Halal</option>
                        <option>Health Family Halal</option>
                        <option>Travel & Hajj</option>
                        <option>Business Halal Pro</option>
                        <option>Life Family Protection</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Votre âge</label>
                      <input type="number" placeholder="35" className="w-full p-3 border rounded-lg" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Couverture souhaitée</label>
                      <input type="number" placeholder="500000" className="w-full p-3 border rounded-lg" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Situation familiale</label>
                      <select className="w-full p-3 border rounded-lg">
                        <option>Célibataire</option>
                        <option>Marié(e) sans enfant</option>
                        <option>Marié(e) avec enfants</option>
                        <option>Famille nombreuse (4+ enfants)</option>
                      </select>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Calculer ma Cotisation
                    </Button>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Estimation Cotisation</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Cotisation mensuelle</span>
                        <span className="text-2xl font-bold text-green-600">89€</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Couverture totale</span>
                        <span className="font-bold">500,000€</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bonus fidélité</span>
                        <span className="text-green-600 font-bold">-15%</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-white rounded-lg">
                      <h4 className="font-bold mb-2">Avantages inclus:</h4>
                      <ul className="text-sm space-y-1">
                        <li>✓ Conformité Charia 100%</li>
                        <li>✓ Assistance 24/7</li>
                        <li>✓ Franchise réduite</li>
                        <li>✓ Règlement express</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Support et contact */}
          <TabsContent value="support" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Contact rapide */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Rapide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Phone className="h-4 w-4 mr-2" />
                      Appel Direct
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Phone className="h-5 w-5 text-green-600" />
                      <div>
                        <div className="font-bold">Assistance 24/7</div>
                        <div className="text-sm text-gray-600">+33 1 76 39 14 25</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-bold">Support Email</div>
                        <div className="text-sm text-gray-600">support@ced-insurance.com</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <MapPin className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="font-bold">Siège Social</div>
                        <div className="text-sm text-gray-600">Rue du Rhône 118, 1204 Genève, Suisse</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Rapide */}
              <Card>
                <CardHeader>
                  <CardTitle>Questions Fréquentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-bold text-sm">Qu'est-ce que le Takaful ?</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Système d'assurance islamique basé sur la mutualisation des risques conforme à la Charia.
                      </p>
                    </div>

                    <div className="p-3 border rounded-lg">
                      <h4 className="font-bold text-sm">Délai de règlement sinistre ?</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        48h pour les dossiers complets, 2.3h en moyenne pour l'assistance d'urgence.
                      </p>
                    </div>

                    <div className="p-3 border rounded-lg">
                      <h4 className="font-bold text-sm">Couverture internationale ?</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Oui, couverture mondiale avec réseau partenaires certifiés halal.
                      </p>
                    </div>

                    <Button variant="outline" className="w-full">
                      Voir toutes les FAQ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer CTA */}
        <Card className="bg-gradient-to-r from-green-100 to-blue-100 border border-green-200">
          <CardContent className="p-6 text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-bold text-green-800">Protection Halal Garantie</h3>
            </div>
            <p className="text-green-700 mb-4">
              Rejoignez 847,293 musulmans qui font confiance à CED Insurance pour leur protection familiale.
              100% conforme Charia, 0% Riba, certifié par les autorités religieuses.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-green-600 hover:bg-green-700">
                <Calculator className="h-4 w-4 mr-2" />
                Simuler ma Cotisation
              </Button>
              <Button variant="outline" className="border-green-300 text-green-700">
                <Phone className="h-4 w-4 mr-2" />
                Être Rappelé
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}