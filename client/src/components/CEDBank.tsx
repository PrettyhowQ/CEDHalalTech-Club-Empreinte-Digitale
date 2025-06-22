import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Shield, 
  Globe, 
  Smartphone, 
  Users, 
  Star,
  DollarSign,
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  Wallet,
  CreditCard,
  Target,
  TrendingUp,
  Lock,
  Zap,
  Award,
  Phone,
  Mail,
  Calendar,
  FileText,
  Download,
  Compass,
  Heart,
  Settings,
  Activity,
  Laptop,
  Recycle,
  Monitor,
  Camera,
  BookOpen,
  Moon,
  Sun,
  Navigation,
  Car,
  Home,
  Plane,
  Briefcase,
  Bell
} from 'lucide-react';

interface BankingService {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: any;
  color: string;
  premium: boolean;
  url: string;
}

interface IslamicFeature {
  name: string;
  description: string;
  icon: any;
  status: 'active' | 'coming' | 'premium';
}

export function CEDBank() {
  const [activeTab, setActiveTab] = useState('services');

  const bankingServices: BankingService[] = [
    {
      id: 'web-banking',
      title: 'Interface Web Banking',
      description: 'Plateforme complète de gestion bancaire en ligne',
      features: [
        'Comptes multi-devises CHF, AED, USD',
        'Transferts internationaux gratuits',
        'Protection anti-découvert totale',
        'Historique détaillé des transactions',
        'Alertes en temps réel',
        'Support 24/7'
      ],
      icon: Globe,
      color: 'from-green-500 to-emerald-600',
      premium: false,
      url: '/banque'
    },
    {
      id: 'mobile-app',
      title: 'Application Mobile CED Bank',
      description: 'App iOS/Android avec fonctionnalités islamiques',
      features: [
        'Mode prière automatique',
        'Boussole Qibla GPS intégrée',
        'Notifications halal uniquement',
        'Biométrie sécurisée',
        'Transactions vocales',
        'Mode hors ligne'
      ],
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-600',
      premium: false,
      url: '/app-bancaire'
    },
    {
      id: 'virtual-cards',
      title: 'Cartes Virtuelles CED',
      description: 'Cartes de paiement virtuelles sécurisées',
      features: [
        'Génération instantanée',
        'Limites personnalisables',
        'Utilisation temporaire',
        'Blocage secteurs haram',
        'Cashback halal',
        'Multi-devises'
      ],
      icon: CreditCard,
      color: 'from-purple-500 to-pink-600',
      premium: true,
      url: '/cartes-virtuelles'
    },
    {
      id: 'investment',
      title: 'Investissements Dubaï',
      description: 'Placements immobiliers conformes à la Charia',
      features: [
        'Projets immobiliers Dubaï',
        'Investissements halal certifiés',
        'Rendements conformes Charia',
        'Gestion de portefeuille',
        'Reporting détaillé',
        'Conseil expert'
      ],
      icon: TrendingUp,
      color: 'from-amber-500 to-orange-600',
      premium: true,
      url: '/investissements-dubai'
    },
    {
      id: 'ai-advisor',
      title: 'Conseiller IA Financier',
      description: 'Intelligence artificielle pour conseils financiers',
      features: [
        'Analyse personnalisée',
        'Recommandations halal',
        'Optimisation budget',
        'Prédictions marché',
        'Chat en temps réel',
        'Rapports automatiques'
      ],
      icon: Target,
      color: 'from-indigo-500 to-purple-600',
      premium: true,
      url: '/ia-financiere'
    },
    {
      id: 'premium-dashboard',
      title: 'Dashboard Premium',
      description: 'Interface exclusive pour grosses fortunes',
      features: [
        'Vue 360° patrimoine',
        'Analyses avancées',
        'Accès privilégié',
        'Support dédié',
        'Fonctionnalités exclusives',
        'Métaverse banking'
      ],
      icon: Award,
      color: 'from-yellow-500 to-amber-600',
      premium: true,
      url: '/premium-dashboard'
    }
  ];

  const islamicFeatures: IslamicFeature[] = [
    {
      name: 'Mode Prière Automatique',
      description: 'Pause toutes les transactions pendant les 5 prières quotidiennes',
      icon: Clock,
      status: 'active'
    },
    {
      name: 'Boussole Qibla GPS',
      description: 'Direction précise vers La Mecque depuis n\'importe où',
      icon: Compass,
      status: 'active'
    },
    {
      name: 'Blocage Secteurs Haram',
      description: 'Empêche automatiquement les transactions non-conformes',
      icon: Shield,
      status: 'active'
    },
    {
      name: 'Calcul Zakat Automatique',
      description: 'Calcul et suggestion de versement de la Zakat',
      icon: Heart,
      status: 'active'
    },
    {
      name: 'Certification Charia',
      description: 'Audit mensuel par les autorités religieuses des EAU',
      icon: Award,
      status: 'active'
    },
    {
      name: 'Calendrier Islamique',
      description: 'Dates importantes et événements religieux intégrés',
      icon: Calendar,
      status: 'coming'
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
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 flex items-center justify-center"
            >
              <Building2 className="h-10 w-10 text-white" />
            </motion.div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
              CED Bank International
            </h1>
          </div>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            La première banque digitale mondiale respectant les principes islamiques avec 
            <span className="font-bold text-green-600"> 0% d'intérêts</span>, mode prière automatique et boussole Qibla intégrée
          </p>
          
          <div className="flex justify-center gap-3 flex-wrap">
            <Badge className="bg-green-500 text-white px-4 py-2 text-lg">
              🇨🇭 Siège Suisse
            </Badge>
            <Badge className="bg-blue-500 text-white px-4 py-2 text-lg">
              🇦🇪 Hub Dubaï
            </Badge>
            <Badge className="bg-purple-500 text-white px-4 py-2 text-lg">
              ✅ Halal Certifié
            </Badge>
            <Badge className="bg-amber-500 text-white px-4 py-2 text-lg">
              🏆 5M+ Utilisateurs
            </Badge>
          </div>
        </motion.div>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="services">Services Bancaires</TabsTrigger>
            <TabsTrigger value="insurance">Assurance Takaful</TabsTrigger>
            <TabsTrigger value="islamic">Spiritualité</TabsTrigger>
            <TabsTrigger value="download">Téléchargements</TabsTrigger>
            <TabsTrigger value="contact">Contact & Support</TabsTrigger>
          </TabsList>

          {/* Services Bancaires */}
          <TabsContent value="services" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bankingServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                    {service.premium && (
                      <Badge className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white">
                        Premium
                      </Badge>
                    )}
                    
                    <CardHeader>
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-center text-xl text-gray-900">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 text-center">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button 
                        className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white`}
                        onClick={() => window.location.href = service.url}
                      >
                        Découvrir
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Assurance Takaful intégrée */}
          <TabsContent value="insurance" className="space-y-6">
            <Card className="bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-300">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-green-800">
                  Al-Aman CED - Assurance Takaful Internationale
                </CardTitle>
                <p className="text-center text-lg text-gray-700 italic mt-2">
                  L'assurance solidaire, éthique et 100% halal pour les générations futures
                </p>
                <div className="flex justify-center gap-3 mt-4">
                  <Badge className="bg-green-500 text-white px-3 py-1">100% Halal</Badge>
                  <Badge className="bg-blue-500 text-white px-3 py-1">Certifié Charia</Badge>
                  <Badge className="bg-purple-500 text-white px-3 py-1">Standards Suisses</Badge>
                </div>
              </CardHeader>
            </Card>

            {/* Produits d'assurance */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 'auto-takaful',
                  name: 'Auto Protection Takaful',
                  description: 'Assurance automobile 100% conforme Charia',
                  price: '285 AED/mois',
                  discount: '-25% clients CED Bank',
                  features: ['Couverture tous accidents', 'Réparations garagistes halal', 'Véhicule remplacement', 'Protection juridique'],
                  icon: Car,
                  color: 'from-blue-500 to-cyan-600'
                },
                {
                  id: 'home-takaful',
                  name: 'Home Secure Takaful',
                  description: 'Protection habitation selon principes islamiques',
                  price: '225 AED/mois',
                  discount: '-30% écosystème CED',
                  features: ['Incendie et dégâts eaux', 'Vol et vandalisme', 'Responsabilité civile', 'Hébergement temporaire'],
                  icon: Home,
                  color: 'from-green-500 to-emerald-600'
                },
                {
                  id: 'health-takaful',
                  name: 'Health Family Takaful',
                  description: 'Santé famille avec médecine halal',
                  price: '850 AED/mois',
                  discount: 'Paiement 0% CED Bank',
                  features: ['Couverture famille 4 pers', 'Réseau médical halal', 'Hospitalisation complète', 'Médecines douces'],
                  icon: Heart,
                  color: 'from-red-500 to-pink-600'
                },
                {
                  id: 'travel-hajj',
                  name: 'Travel & Hajj Protection',
                  description: 'Voyage et pèlerinage spécialisé',
                  price: '180 AED/voyage',
                  discount: 'Guide spirituel inclus',
                  features: ['Couverture mondiale', 'Assistance Hajj/Omra', 'Annulation voyage', 'Bagages perdus'],
                  icon: Plane,
                  color: 'from-purple-500 to-indigo-600'
                },
                {
                  id: 'business-takaful',
                  name: 'Business Halal Pro',
                  description: 'Protection entreprise conforme Charia',
                  price: 'Sur devis',
                  discount: 'Consultation gratuite',
                  features: ['Responsabilité pro', 'Perte exploitation', 'Cyber-sécurité', 'Audit conformité'],
                  icon: Briefcase,
                  color: 'from-amber-500 to-orange-600'
                },
                {
                  id: 'life-takaful',
                  name: 'Life Family Protection',
                  description: 'Protection vie selon Takaful participatif',
                  price: '320 AED/mois',
                  discount: 'Membres TechForAll gratuit',
                  features: ['Capital décès halal', 'Rente éducation', 'Invalidité totale', 'Assistance famille'],
                  icon: Users,
                  color: 'from-teal-500 to-cyan-600'
                }
              ].map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
                    <CardHeader>
                      <div className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <product.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-center text-lg">{product.name}</CardTitle>
                      <p className="text-center text-sm text-gray-600">{product.description}</p>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-700">{product.price}</div>
                        <Badge className="bg-green-100 text-green-800 mt-1">{product.discount}</Badge>
                      </div>

                      <div className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          Souscrire maintenant
                        </Button>
                        <Button variant="outline" className="w-full">
                          Devis gratuit
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Avantages écosystème */}
            <Card className="bg-gradient-to-r from-purple-100 to-pink-100">
              <CardHeader>
                <CardTitle className="text-center text-xl">Avantages Exclusifs Clients CED Bank</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-bold">Paiement 0% Intérêt</h3>
                    <p className="text-sm text-gray-600">Facilités via cartes Gold Yakoubi</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-bold">Gestion Unifiée</h3>
                    <p className="text-sm text-gray-600">Une app pour banque + assurance</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-bold">Points Fidélité</h3>
                    <p className="text-sm text-gray-600">Cumul sur tous les services</p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <div className="text-2xl font-bold text-purple-700 mb-2">Jusqu'à 30% d'économies</div>
                  <p className="text-purple-600">vs assurances traditionnelles Dubai</p>
                </div>
              </CardContent>
            </Card>

            {/* Comparaison concurrentielle */}
            <Card>
              <CardHeader>
                <CardTitle>Pourquoi choisir Al-Aman CED vs concurrents Dubai ?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">Critères</th>
                        <th className="text-center p-3 bg-green-50">Al-Aman CED</th>
                        <th className="text-center p-3">Salama Insurance</th>
                        <th className="text-center p-3">Dubai Insurance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Conformité Charia</td>
                        <td className="text-center p-3 bg-green-50">✅ 100%</td>
                        <td className="text-center p-3">✅ 100%</td>
                        <td className="text-center p-3">⚠️ 50%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Paiement 0% intérêt</td>
                        <td className="text-center p-3 bg-green-50">✅ Unique</td>
                        <td className="text-center p-3">❌ Non</td>
                        <td className="text-center p-3">❌ Non</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">App intégrée banque</td>
                        <td className="text-center p-3 bg-green-50">✅ Oui</td>
                        <td className="text-center p-3">❌ Non</td>
                        <td className="text-center p-3">❌ Non</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Support multilingue</td>
                        <td className="text-center p-3 bg-green-50">8 langues</td>
                        <td className="text-center p-3">3 langues</td>
                        <td className="text-center p-3">2 langues</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Spiritualité (La Citadelle du Musulman) */}
          <TabsContent value="islamic" className="space-y-6">
            <Card className="bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-300">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-green-800">
                  La Citadelle du Musulman - Intégrée à CED Bank
                </CardTitle>
                <p className="text-center text-gray-700">
                  Votre compagnon spirituel quotidien directement dans votre application bancaire.
                  Douaas, prières, Qibla et calendrier islamique pour une vie bénie et protégée.
                </p>
              </CardHeader>
            </Card>

            {/* Fonctionnalités spirituelles principales */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: 'Douaas Contextuelles',
                  description: 'Invocations adaptées à vos transactions bancaires',
                  icon: BookOpen,
                  features: ['Douaa avant transaction', 'Invocation voyage Hajj', 'Protection maison', 'Travail halal'],
                  color: 'from-green-500 to-emerald-600'
                },
                {
                  name: 'Horaires Prières',
                  description: 'Mode automatique pendant les 5 prières quotidiennes',
                  icon: Clock,
                  features: ['Notifications silencieuses', 'Mode Jumma vendredi', 'Rappels personnalisés', 'Gestion temps'],
                  color: 'from-blue-500 to-cyan-600'
                },
                {
                  name: 'Boussole Qibla',
                  description: 'Direction précise de la Mecque avec GPS intégré',
                  icon: Compass,
                  features: ['GPS haute précision', 'Direction 285° NW', '2,145 km Mecque', 'Calibrage auto'],
                  color: 'from-purple-500 to-indigo-600'
                },
                {
                  name: 'Calendrier Islamique',
                  description: 'Dates Hijri et événements religieux importants',
                  icon: Calendar,
                  features: ['15 Jumada Al-Thani 1446', 'Événements à venir', 'Hajj dans 186 jours', 'Rappels auto'],
                  color: 'from-amber-500 to-orange-600'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-center text-lg">{feature.name}</CardTitle>
                      <p className="text-center text-sm text-gray-600">{feature.description}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-2">
                        {feature.features.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Exemple de douaa intégrée */}
            <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  Douaa avant Transaction Bancaire
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <div className="p-4 bg-green-50 rounded-lg border-r-4 border-green-500 mb-3">
                      <div className="text-right text-lg leading-relaxed arabic-text" dir="rtl">
                        اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ
                      </div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg mb-3">
                      <div className="text-sm font-medium text-blue-800 mb-1">Translittération:</div>
                      <div className="italic text-blue-700">Allahumma barik lana fima razaqtana wa qina adhab an-nar</div>
                    </div>
                  </div>
                  <div>
                    <div className="p-3 bg-gray-50 rounded-lg mb-3">
                      <div className="text-sm font-medium text-gray-800 mb-1">Traduction:</div>
                      <div className="text-gray-700">Ô Allah, bénis-nous dans ce que Tu nous as accordé et préserve-nous du châtiment du Feu.</div>
                    </div>
                    <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Shield className="h-4 w-4 text-purple-600 mt-0.5" />
                        <div className="text-xs text-purple-700">
                          <span className="font-medium">Intégration CED Bank: </span>
                          Cette douaa s'affiche automatiquement avant vos transactions importantes pour bénir vos finances.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mode prière en action */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-r from-purple-100 to-blue-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Moon className="h-5 w-5" />
                    Mode Prière Automatique
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg">
                      <div className="font-medium">Prochaine prière: Asr</div>
                      <div className="text-2xl font-bold text-blue-700">15:42</div>
                      <div className="text-sm text-gray-600">Dans 23 minutes</div>
                    </div>
                    <div className="text-sm text-gray-600">
                      L'application passera automatiquement en mode silencieux et affichera 
                      la direction de la Qibla pendant la période de prière.
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      <Bell className="mr-2 h-4 w-4" />
                      Configurer rappels
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-amber-100 to-yellow-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Navigation className="h-5 w-5" />
                    Qibla Finder Intégré
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-3">
                    <div className="w-24 h-24 mx-auto relative">
                      <div className="w-full h-full rounded-full border-4 border-gray-300 bg-gradient-to-br from-blue-50 to-green-50 relative">
                        <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
                          <div className="w-1 h-6 bg-red-500 rounded-full"></div>
                        </div>
                        <div 
                          className="absolute top-1/2 left-1/2 origin-bottom"
                          style={{ 
                            transform: `translate(-50%, -100%) rotate(285deg)`,
                            height: '32px'
                          }}
                        >
                          <div className="w-1 h-full bg-green-500 rounded-full relative">
                            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                              <Navigation className="h-3 w-3 text-green-600" />
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-700 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-green-700">285° NW</div>
                      <div className="text-sm text-gray-600">Direction Kaaba</div>
                      <div className="text-xs text-gray-500">2,145 km de Dubai</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {islamicFeatures.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-center text-lg">
                        {feature.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center mb-4">
                        {feature.description}
                      </p>
                      <div className="text-center">
                        <Badge 
                          className={
                            feature.status === 'active' ? 'bg-green-500 text-white' :
                            feature.status === 'premium' ? 'bg-amber-500 text-white' :
                            'bg-gray-500 text-white'
                          }
                        >
                          {feature.status === 'active' ? 'Actif' :
                           feature.status === 'premium' ? 'Premium' : 'Bientôt'}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Statistiques Islamiques */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-center text-xl">Statistiques Conformité Charia</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-3xl font-bold text-green-700 mb-2">0%</div>
                    <div className="text-sm text-green-600">Taux d'intérêt</div>
                    <div className="text-xs text-gray-500 mt-1">Interdit par l'Islam</div>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-3xl font-bold text-blue-700 mb-2">5x</div>
                    <div className="text-sm text-blue-600">Prières/jour</div>
                    <div className="text-xs text-gray-500 mt-1">Mode automatique</div>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="text-3xl font-bold text-purple-700 mb-2">GPS</div>
                    <div className="text-sm text-purple-600">Qibla précise</div>
                    <div className="text-xs text-gray-500 mt-1">Direction Mecque</div>
                  </div>
                  
                  <div className="text-center p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="text-3xl font-bold text-amber-700 mb-2">100%</div>
                    <div className="text-sm text-amber-600">Halal Certifié</div>
                    <div className="text-xs text-gray-500 mt-1">Audit mensuel</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Téléchargements */}
          <TabsContent value="download" className="space-y-6">
            <Card className="bg-gradient-to-r from-blue-100 to-purple-100">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Applications CED Bank</CardTitle>
                <p className="text-center text-gray-700">
                  Téléchargez l'application CED Bank sur tous vos appareils
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* iOS */}
                  <div className="text-center p-6 bg-white rounded-xl shadow-md">
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">iOS App</h3>
                    <p className="text-gray-600 mb-4">iPhone et iPad - iOS 15+</p>
                    <Button className="w-full bg-black hover:bg-gray-800 text-white">
                      <Download className="h-4 w-4 mr-2" />
                      App Store
                    </Button>
                  </div>

                  {/* Android */}
                  <div className="text-center p-6 bg-white rounded-xl shadow-md">
                    <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Android App</h3>
                    <p className="text-gray-600 mb-4">Android 10+ et Harmony OS</p>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <Download className="h-4 w-4 mr-2" />
                      Google Play
                    </Button>
                  </div>
                </div>

                {/* Web Banking */}
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Interface Web</h3>
                  <p className="text-gray-600 mb-4">Accès depuis n'importe quel navigateur</p>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.location.href = '/banque'}
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    Accéder en ligne
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact & Support */}
          <TabsContent value="contact" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Support 24/7 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-green-600" />
                    Support 24/7
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span>+41 22 123 4567 (Suisse)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span>+971 4 123 4567 (Dubaï)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span>support@cedbank.com</span>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Contacter le Support
                  </Button>
                </CardContent>
              </Card>

              {/* Bureaux */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Nos Bureaux
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium">🇨🇭 Siège Suisse</div>
                      <div className="text-sm text-gray-600">Genève, Avenue de la Paix</div>
                    </div>
                    <div>
                      <div className="font-medium">🇦🇪 Hub Dubaï</div>
                      <div className="text-sm text-gray-600">DIFC, Emirates Towers</div>
                    </div>
                    <div>
                      <div className="font-medium">🇪🇸 Bureau Costa del Sol</div>
                      <div className="text-sm text-gray-600">Marbella, Puerto Banús</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Horaires et Langues */}
            <Card>
              <CardHeader>
                <CardTitle>Informations Pratiques</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Horaires Support</h4>
                    <div className="text-sm text-gray-600">
                      <div>Lun-Ven: 8h00 - 20h00</div>
                      <div>Sam-Dim: 9h00 - 17h00</div>
                      <div className="text-green-600 font-medium">Support 24/7 Premium</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Langues Supportées</h4>
                    <div className="text-sm text-gray-600">
                      <div>🇫🇷 Français</div>
                      <div>🇬🇧 English</div>
                      <div>🇸🇦 العربية</div>
                      <div>🇩🇪 Deutsch</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Certifications</h4>
                    <div className="text-sm text-gray-600">
                      <div>✅ Licence Bancaire Suisse</div>
                      <div>✅ Agrément FINMA</div>
                      <div>✅ Certification Charia EAU</div>
                      <div>✅ ISO 27001</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Section TechForAll - Partenariat CED Bank */}
        <Card className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 border-2 border-green-300">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-green-800">
              Partenariat CED Bank × TechForAll
            </CardTitle>
            <p className="text-center text-gray-700">
              Association d'aide aux expatriés par la donation technologique solidaire
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* TechForAll Association */}
              <Card className="border-2 border-green-200 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center text-green-800">
                    TechForAll Association
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-gray-600">
                    Aide aux expatriés et personnes éloignées de l'emploi avec matériel professionnel reconditionné
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Laptop className="h-4 w-4 text-green-600" />
                      <span>MacBook Pro, PC, tablettes</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Smartphone className="h-4 w-4 text-green-600" />
                      <span>Smartphones reconditionnés</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Users className="h-4 w-4 text-green-600" />
                      <span>2,500+ équipements donnés</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => window.location.href = '/techforall'}
                  >
                    Découvrir TechForAll
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Financement CED Bank */}
              <Card className="border-2 border-blue-200 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center text-blue-800">
                    Financement CED Bank
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-gray-600">
                    CED Bank finance les projets TechForAll avec des solutions bancaires halal
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <DollarSign className="h-4 w-4 text-blue-600" />
                      <span>Financement 0% intérêt</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Shield className="h-4 w-4 text-blue-600" />
                      <span>Conformité Charia garantie</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Target className="h-4 w-4 text-blue-600" />
                      <span>Impact social mesuré</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.location.href = '/financement-solidaire'}
                  >
                    Financer un Projet
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Costa del Sol Hub */}
              <Card className="border-2 border-orange-200 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center text-orange-800">
                    Hub Costa del Sol
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-gray-600">
                    Centre de reconditionnement et distribution géré par B. Yakoubi
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Recycle className="h-4 w-4 text-orange-600" />
                      <span>1,240+ équipements traités</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Globe className="h-4 w-4 text-orange-600" />
                      <span>Suivi GPS temps réel</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4 text-orange-600" />
                      <span>App logistique mobile</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    onClick={() => window.location.href = '/costa-del-sol'}
                  >
                    App Logistique
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Boutique Solidaire */}
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="text-center text-xl text-purple-800">
                  Boutique Solidaire TechForAll - Accès Direct
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-purple-800">Équipements Disponibles</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Laptop className="h-4 w-4 text-purple-600" />
                        <span>MacBook Pro M4 Max 48Go - 3,699€</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Monitor className="h-4 w-4 text-purple-600" />
                        <span>Dell UltraSharp 32" 4K - 899€</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-purple-600" />
                        <span>iPhone 15 Pro Max reconditionné - 1,299€</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Camera className="h-4 w-4 text-purple-600" />
                        <span>Sony A7R V professionnel - 3,199€</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-purple-800">Avantages CED Bank</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Paiement en plusieurs fois 0% intérêt</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Garantie étendue incluse</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Livraison gratuite Costa del Sol</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Support technique dédié</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-4 mt-6">
                  <Button 
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700"
                    onClick={() => window.location.href = '/boutique-solidaire'}
                  >
                    <Heart className="h-5 w-5 mr-2" />
                    Boutique Solidaire
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-purple-300 text-purple-700 hover:bg-purple-50"
                    onClick={() => window.location.href = '/yakoubi-store'}
                  >
                    <Star className="h-5 w-5 mr-2" />
                    Boutique Yakoubi
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Navigation vers autres services */}
        <Card className="bg-gradient-to-r from-gray-100 to-gray-200">
          <CardHeader>
            <CardTitle className="text-center">Services Bancaires Complémentaires</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/premium-dashboard'}
                className="h-20 flex flex-col items-center justify-center"
              >
                <Award className="h-6 w-6 mb-2" />
                Dashboard Premium
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/ced-bank-cards'}
                className="h-20 flex flex-col items-center justify-center"
              >
                <CreditCard className="h-6 w-6 mb-2" />
                Cartes CED
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/dubai-investments'}
                className="h-20 flex flex-col items-center justify-center"
              >
                <TrendingUp className="h-6 w-6 mb-2" />
                Investissements
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/ia-financiere'}
                className="h-20 flex flex-col items-center justify-center"
              >
                <Target className="h-6 w-6 mb-2" />
                IA Financière
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}