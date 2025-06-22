import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Shield, 
  Crown, 
  Star,
  Globe,
  Zap,
  Lock,
  Smartphone,
  Plane,
  Gem,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface BankCard {
  id: string;
  name: string;
  type: 'virtual' | 'physical' | 'premium' | 'elite';
  tier: 'standard' | 'gold' | 'platinum' | 'diamond' | 'royal';
  dailyLimit: number;
  monthlyLimit: number;
  withdrawalLimit: number;
  currency: string[];
  fees: {
    annual: number;
    foreign: number;
    withdrawal: number;
    replacement: number;
  };
  benefits: string[];
  islamicFeatures: string[];
  securityFeatures: string[];
  eligibility: {
    minDeposit: number;
    minMonthlyIncome: number;
    approvalRequired: boolean;
  };
  color: string;
  gradient: string;
}

export function CEDBankCards() {
  const [selectedCard, setSelectedCard] = useState<string>('yakoubi-essential');

  const cedBankCards: BankCard[] = [
    {
      id: 'yakoubi-essential',
      name: 'CED Yakoubi Essential',
      type: 'virtual',
      tier: 'standard',
      dailyLimit: 10000,
      monthlyLimit: 100000,
      withdrawalLimit: 5000,
      currency: ['AED', 'CHF', 'USD'],
      fees: {
        annual: 0,
        foreign: 0,
        withdrawal: 0,
        replacement: 0
      },
      benefits: [
        'Carte principale - Yakoubi Yamina',
        'Directives personnalisées selon vos souhaits',
        'Contrôle total quand et comme vous voulez',
        'Mode prière automatique',
        'Boussole Qibla intégrée',
        'Notifications en temps réel',
        'Support 24/7 prioritaire',
        'Transferts gratuits illimités'
      ],
      islamicFeatures: [
        'Aucun intérêt débiteur',
        'Transactions halal uniquement',
        'Blocage automatique secteurs haram',
        'Audit Charia mensuel',
        'Certification Yakoubi Yamina'
      ],
      securityFeatures: [
        'Chiffrement E2E renforcé',
        'Biométrie Yakoubi Yamina',
        'Géolocalisation avancée',
        'Contrôle total décisionnaire'
      ],
      eligibility: {
        minDeposit: 0,
        minMonthlyIncome: 0,
        approvalRequired: false
      },
      color: 'from-emerald-500 to-teal-600',
      gradient: 'bg-gradient-to-br from-emerald-500 to-teal-600'
    },
    {
      id: 'yakoubi-gold',
      name: 'CED Yakoubi Gold Sécurisée',
      type: 'physical',
      tier: 'gold',
      dailyLimit: 50000,
      monthlyLimit: 600000,
      withdrawalLimit: 25000,
      currency: ['AED', 'CHF', 'USD', 'EUR', 'GBP'],
      fees: {
        annual: 0,
        foreign: 0,
        withdrawal: 0,
        replacement: 0
      },
      benefits: [
        'Carte sécurisée - Yakoubi Yamina',
        'Directives flexibles selon vos besoins',
        'Contrôle total établissement CED',
        'Gestion autonome quand vous voulez',
        'Concierge services premium',
        'Accès salons aéroports VIP',
        'Assurance voyage internationale',
        'Cash back 3% TechForAll',
        'Priority banking exclusif'
      ],
      islamicFeatures: [
        'Investissements Sukuk privilégiés',
        'Consultation scholars islamiques dédiés',
        'Hajj/Umrah financing premium',
        'Zakat calculation automatique avancée',
        'Certification Yakoubi Yamina exclusive'
      ],
      securityFeatures: [
        'Carte à puce EMV renforcée',
        'Contactless Yakoubi Yamina sécurisé',
        'Authentification 3D biométrique',
        'Monitoring anti-fraude IA avancée',
        'Alerte temps réel Yakoubi Yamina'
      ],
      eligibility: {
        minDeposit: 0,
        minMonthlyIncome: 0,
        approvalRequired: false
      },
      color: 'from-yellow-500 to-amber-600',
      gradient: 'bg-gradient-to-br from-yellow-500 to-amber-600'
    },
    {
      id: 'yakoubi-platinum',
      name: 'CED Yakoubi Platinum Directrice',
      type: 'premium',
      tier: 'platinum',
      dailyLimit: 200000,
      monthlyLimit: 2400000,
      withdrawalLimit: 100000,
      currency: ['AED', 'CHF', 'USD', 'EUR', 'GBP', 'JPY', 'CAD'],
      fees: {
        annual: 0,
        foreign: 0,
        withdrawal: 0,
        replacement: 0
      },
      benefits: [
        'Carte Directrice - Yakoubi Yamina',
        'Directives illimitées selon votre volonté',
        'Contrôle absolu établissement CED',
        'Gestion Costa del Sol autorisée',
        'Instructions personnalisées à tout moment',
        'Gestionnaire privé dédié 24/7',
        'Accès worldwide lounges premium',
        'Assurance premium globale illimitée',
        'Cash back 5% sur tous achats',
        'Private banking access exclusif',
        'Investment advisory personnel',
        'Family office services complets'
      ],
      islamicFeatures: [
        'Portfolio Sharia-compliant personnalisé',
        'Accès exclusif Islamic real estate funds',
        'Private Sukuk investments privilégiés',
        'Halal luxury marketplace VIP',
        'Conseil Charia personnel Yakoubi Yamina'
      ],
      securityFeatures: [
        'Carte métal Yakoubi Yamina signature',
        'Biométrie digitale renforcée',
        'Tokenisation avancée exclusive',
        'Protection identité maximale',
        'Contrôle décisionnaire total'
      ],
      eligibility: {
        minDeposit: 0,
        minMonthlyIncome: 0,
        approvalRequired: false
      },
      color: 'from-slate-400 to-slate-600',
      gradient: 'bg-gradient-to-br from-slate-400 to-slate-600'
    },
    {
      id: 'diamond',
      name: 'CED Diamond',
      type: 'elite',
      tier: 'diamond',
      dailyLimit: 500000,
      monthlyLimit: 6000000,
      withdrawalLimit: 200000,
      currency: ['Toutes devises majeures', 'Cryptos halal'],
      fees: {
        annual: 0,
        foreign: 0,
        withdrawal: 0,
        replacement: 0
      },
      benefits: [
        'Toutes fonctionnalités Platinum',
        'Concierge personnel 24/7',
        'Private jet booking',
        'Yacht club memberships',
        'Cash back 5%',
        'Unlimited airport transfers',
        'Personal shopping services',
        'Art investment advisory'
      ],
      islamicFeatures: [
        'Islamic family office complete',
        'Waqf (endowment) establishment',
        'Philanthropic impact tracking',
        'Direct access to Islamic scholars'
      ],
      securityFeatures: [
        'Carte diamant gravée',
        'Sécurité militaire grade',
        'Protection patrimoine',
        'Surveillance personnalisée'
      ],
      eligibility: {
        minDeposit: 2000000,
        minMonthlyIncome: 200000,
        approvalRequired: true
      },
      color: 'from-blue-600 to-purple-700',
      gradient: 'bg-gradient-to-br from-blue-600 to-purple-700'
    },
    {
      id: 'royal',
      name: 'CED Royal',
      type: 'elite',
      tier: 'royal',
      dailyLimit: 2000000,
      monthlyLimit: 24000000,
      withdrawalLimit: 1000000,
      currency: ['Illimitées'],
      fees: {
        annual: 0,
        foreign: 0,
        withdrawal: 0,
        replacement: 0
      },
      benefits: [
        'Accès illimité tous services',
        'Validation Yakoubi Yamina directe',
        'Influence décisions philanthropiques',
        'Naming rights projets',
        'Cash back 7%',
        'Royal treatment worldwide',
        'Legacy building program',
        'Historical founder status'
      ],
      islamicFeatures: [
        'Sharia board advisory participation',
        'Mega-waqf establishment',
        'Islamic university sponsoring',
        'Hajj/Umrah organization for community'
      ],
      securityFeatures: [
        'Carte royale sur mesure',
        'Sécurité état niveau',
        'Protection familiale',
        'Anonymat complet'
      ],
      eligibility: {
        minDeposit: 10000000,
        minMonthlyIncome: 1000000,
        approvalRequired: true
      },
      color: 'from-purple-800 to-pink-900',
      gradient: 'bg-gradient-to-br from-purple-800 to-pink-900'
    }
  ];

  const formatCurrency = (amount: number, currency = 'AED') => {
    return new Intl.NumberFormat('fr-FR', { 
      style: 'currency', 
      currency: currency,
      minimumFractionDigits: 0 
    }).format(amount);
  };

  const getCardIcon = (tier: string) => {
    switch (tier) {
      case 'standard': return CreditCard;
      case 'gold': return Star;
      case 'platinum': return Crown;
      case 'diamond': return Gem;
      case 'royal': return Crown;
      default: return CreditCard;
    }
  };

  const selectedCardData = cedBankCards.find(card => card.id === selectedCard);

  return (
    <div className="space-y-8">
      {/* Sélecteur de cartes */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {cedBankCards.map((card) => {
          const IconComponent = getCardIcon(card.tier);
          return (
            <motion.div
              key={card.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`cursor-pointer ${selectedCard === card.id ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => setSelectedCard(card.id)}
            >
              <Card className={`h-40 ${card.gradient} text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <CardContent className="relative z-10 p-4 h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <IconComponent className="h-6 w-6" />
                    <Badge className="bg-white/20 text-white border-white/30">
                      {card.tier.toUpperCase()}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{card.name}</h3>
                    <p className="text-sm opacity-90">
                      Limite: {formatCurrency(card.dailyLimit)}/jour
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Détails de la carte sélectionnée */}
      {selectedCardData && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Carte virtuelle */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className={`h-64 ${selectedCardData.gradient} text-white relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10" />
              <CardContent className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedCardData.name}</h2>
                    <p className="opacity-90">CED Bank International</p>
                  </div>
                  <div className="text-right">
                    <Smartphone className="h-8 w-8 mb-2" />
                    <Badge className="bg-white/20 border-white/30">
                      {selectedCardData.type}
                    </Badge>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm opacity-80 mb-1">Numéro de carte</p>
                  <p className="text-xl font-mono tracking-wider">**** **** **** 8429</p>
                </div>
                
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs opacity-80">Valide jusqu'à</p>
                    <p className="font-mono">12/28</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    <span className="text-sm">CED Secured</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Informations détaillées */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Limites & Conditions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Limites */}
                <div>
                  <h4 className="font-bold mb-3">Limites de Transaction</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-600">Limite Quotidienne</p>
                      <p className="text-xl font-bold text-blue-800">
                        {formatCurrency(selectedCardData.dailyLimit)}
                      </p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-600">Limite Mensuelle</p>
                      <p className="text-xl font-bold text-green-800">
                        {formatCurrency(selectedCardData.monthlyLimit)}
                      </p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="text-sm text-purple-600">Retrait ATM</p>
                      <p className="text-xl font-bold text-purple-800">
                        {formatCurrency(selectedCardData.withdrawalLimit)}
                      </p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <p className="text-sm text-orange-600">Frais Annuels</p>
                      <p className="text-xl font-bold text-orange-800">
                        {selectedCardData.fees.annual === 0 ? 'GRATUIT' : formatCurrency(selectedCardData.fees.annual)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Devises supportées */}
                <div>
                  <h4 className="font-bold mb-3">Devises Supportées</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCardData.currency.map((curr, index) => (
                      <Badge key={index} className="bg-gray-100 text-gray-800">
                        {curr}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Éligibilité */}
                <div>
                  <h4 className="font-bold mb-3">Conditions d'Éligibilité</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Dépôt minimum:</span>
                      <span className="font-bold">{formatCurrency(selectedCardData.eligibility.minDeposit)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Revenus mensuels min:</span>
                      <span className="font-bold">{formatCurrency(selectedCardData.eligibility.minMonthlyIncome)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Validation direction:</span>
                      <span className="font-bold text-green-600">
                        {selectedCardData.eligibility.approvalRequired ? 'Requise' : 'Automatique'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Onglets détaillés */}
      {selectedCardData && (
        <Tabs defaultValue="benefits" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="benefits">Avantages</TabsTrigger>
            <TabsTrigger value="islamic">Finance Islamique</TabsTrigger>
            <TabsTrigger value="security">Sécurité</TabsTrigger>
            <TabsTrigger value="fees">Frais</TabsTrigger>
          </TabsList>

          <TabsContent value="benefits" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Avantages Exclusifs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedCardData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="islamic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-green-600" />
                  Conformité Finance Islamique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {selectedCardData.islamicFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  Fonctionnalités Sécurité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {selectedCardData.securityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <Lock className="h-5 w-5 text-blue-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fees" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Structure Tarifaire</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm text-green-600">Frais Annuels</p>
                    <p className="text-2xl font-bold text-green-800">
                      {selectedCardData.fees.annual === 0 ? 'GRATUIT' : formatCurrency(selectedCardData.fees.annual)}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-600">Frais Change</p>
                    <p className="text-2xl font-bold text-blue-800">
                      {selectedCardData.fees.foreign === 0 ? 'GRATUIT' : `${selectedCardData.fees.foreign}%`}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-sm text-purple-600">Retrait ATM</p>
                    <p className="text-2xl font-bold text-purple-800">
                      {selectedCardData.fees.withdrawal === 0 ? 'GRATUIT' : formatCurrency(selectedCardData.fees.withdrawal)}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-sm text-orange-600">Remplacement</p>
                    <p className="text-2xl font-bold text-orange-800">
                      {selectedCardData.fees.replacement === 0 ? 'GRATUIT' : formatCurrency(selectedCardData.fees.replacement)}
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    <span className="font-bold text-yellow-800">Politique CED Bank</span>
                  </div>
                  <p className="text-sm text-yellow-700">
                    Conformément aux principes islamiques, CED Bank ne génère aucun revenu via les intérêts. 
                    Tous nos services sont financés par des frais transparents et des partenariats éthiques.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}