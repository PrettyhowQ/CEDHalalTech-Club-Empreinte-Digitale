import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Crown, 
  Star, 
  Shield, 
  TrendingUp,
  Globe,
  Users,
  Award,
  Zap,
  CheckCircle,
  XCircle,
  Gem,
  Plane,
  Home,
  Car,
  DollarSign
} from 'lucide-react';

interface BankComparison {
  name: string;
  logo: string;
  positioning: string;
  minDeposit: number;
  assets: number;
  premiumServices: string[];
  islamicCompliant: boolean;
  privateWealth: boolean;
  exclusivePerks: string[];
  weaknesses: string[];
  marketShare: number;
}

export function CompetitiveAnalysis() {
  const dubaiEliteBanks: BankComparison[] = [
    {
      name: "Emirates NBD Private Banking",
      logo: "🏛️",
      positioning: "Banque de référence UAE",
      minDeposit: 1000000,
      assets: 156000000000,
      premiumServices: [
        "Gestionnaire dédié 24/7",
        "Accès salons aéroports",
        "Concierge services",
        "Investment advisory",
        "Real estate financing"
      ],
      islamicCompliant: true,
      privateWealth: true,
      exclusivePerks: [
        "Emirates Skywards privilèges",
        "Événements exclusifs Dubai",
        "Accès golf clubs premium"
      ],
      weaknesses: [
        "Frais élevés",
        "Bureaucratie traditionnelle",
        "Pas de mode prière automatique"
      ],
      marketShare: 23.5
    },
    {
      name: "ADCB Private Banking",
      logo: "🏦",
      positioning: "Wealth management leader",
      minDeposit: 500000,
      assets: 89000000000,
      premiumServices: [
        "Family office services",
        "Art investment advisory",
        "Yacht financing",
        "Private jet financing",
        "Luxury real estate"
      ],
      islamicCompliant: false,
      privateWealth: true,
      exclusivePerks: [
        "Formula 1 Abu Dhabi accès",
        "Louvre Abu Dhabi privilèges",
        "Etihad Airways benefits"
      ],
      weaknesses: [
        "Non conforme Islam",
        "Frais cachés",
        "Service client limité"
      ],
      marketShare: 18.2
    },
    {
      name: "Dubai Islamic Bank Private",
      logo: "🕌",
      positioning: "Sharia-compliant leader",
      minDeposit: 250000,
      assets: 67000000000,
      premiumServices: [
        "Sharia advisory board",
        "Hajj/Umrah financing",
        "Halal investment funds",
        "Islamic real estate",
        "Sukuk investments"
      ],
      islamicCompliant: true,
      privateWealth: true,
      exclusivePerks: [
        "Mecca/Medina VIP packages",
        "Islamic art collection access",
        "Halal luxury experiences"
      ],
      weaknesses: [
        "Technologie limitée",
        "Pas d'innovation digitale",
        "Services internationaux restreints"
      ],
      marketShare: 15.8
    },
    {
      name: "HSBC Premier UAE",
      logo: "🌐",
      positioning: "Global private banking",
      minDeposit: 750000,
      assets: 295000000000,
      premiumServices: [
        "Global account access",
        "International transfers",
        "Multi-currency accounts",
        "Premier relationship manager",
        "Investment platforms"
      ],
      islamicCompliant: false,
      privateWealth: true,
      exclusivePerks: [
        "Worldwide HSBC Premier",
        "Priority airport services",
        "Global concierge"
      ],
      weaknesses: [
        "Non conforme Islam",
        "Frais internationaux élevés",
        "Service local limité"
      ],
      marketShare: 12.1
    }
  ];

  const cedBankAdvantages = [
    {
      feature: "Taux d'intérêt 0%",
      icon: DollarSign,
      uniqueness: "100% unique",
      description: "Aucune banque à Dubaï n'offre 0% d'intérêts de manière systématique"
    },
    {
      feature: "Mode prière automatique",
      icon: Crown,
      uniqueness: "Révolutionnaire",
      description: "Première banque mondiale avec pause automatique pendant les prières"
    },
    {
      feature: "Boussole Qibla intégrée",
      icon: Star,
      uniqueness: "Innovation unique",
      description: "GPS précis vers La Mecque dans l'app bancaire"
    },
    {
      feature: "Protection anti-découvert totale",
      icon: Shield,
      uniqueness: "Approche éthique",
      description: "Impossible d'avoir un solde négatif - protection absolue"
    },
    {
      feature: "Validation personnelle direction",
      icon: Users,
      uniqueness: "Service ultra-premium",
      description: "Chaque client approuvé personnellement par Yakoubi Yamina"
    },
    {
      feature: "Investissement social Dubaï",
      icon: Home,
      uniqueness: "Impact philanthropique",
      description: "Dons transformés en logements sociaux avec ROI éthique"
    }
  ];

  const premiumServicesForWealthy = [
    {
      category: "Services Exclusifs Ultra-High Net Worth",
      icon: Crown,
      services: [
        {
          name: "CED Royal Concierge 24/7",
          description: "Service personnel dédié pour tous besoins lifestyle",
          price: "Inclus dès 5M AED"
        },
        {
          name: "Private Jet Banking",
          description: "Gestionnaire de compte disponible dans votre jet privé",
          price: "Service premium"
        },
        {
          name: "Yacht Club Membership",
          description: "Accès exclusif aux yacht clubs les plus prestigieux de Dubaï",
          price: "Partenariat exclusif"
        },
        {
          name: "Art & Luxury Advisory",
          description: "Expertise en investissement art islamique et objets de luxe",
          price: "Conseil personnalisé"
        }
      ]
    },
    {
      category: "Investissements Philanthropiques Premium",
      icon: Gem,
      services: [
        {
          name: "Donor Hall of Fame",
          description: "Reconnaissance publique dans projets immobiliers",
          price: "Dès 1M AED de don"
        },
        {
          name: "Naming Rights Projects",
          description: "Possibilité de nommer une résidence ou mosquée",
          price: "Selon projet"
        },
        {
          name: "Impact Investment Board",
          description: "Participation aux décisions stratégiques philanthropiques",
          price: "Invitation exclusive"
        },
        {
          name: "Legacy Building Program",
          description: "Création de fondations familiales pour impact durable",
          price: "Sur mesure"
        }
      ]
    },
    {
      category: "Avantages Lifestyle & Spiritualité",
      icon: Star,
      services: [
        {
          name: "Hajj/Umrah VIP Packages",
          description: "Pèlerinages organisés avec accompagnement personnalisé",
          price: "Financement privilégié"
        },
        {
          name: "Islamic Scholar Access",
          description: "Consultations privées avec érudits islamiques reconnus",
          price: "Service exclusif"
        },
        {
          name: "Private Mosque Access",
          description: "Réservation espaces de prière privés dans Dubaï",
          price: "Partenariat exclusif"
        },
        {
          name: "Halal Luxury Experiences",
          description: "Voyages, restaurants, événements 100% conformes",
          price: "Curation premium"
        }
      ]
    },
    {
      category: "Innovation Technologique Premium",
      icon: Zap,
      services: [
        {
          name: "AI Personal Banker",
          description: "Assistant IA personnalisé connaissant vos préférences",
          price: "Développement exclusif"
        },
        {
          name: "Blockchain Sukuk Trading",
          description: "Plateforme exclusive trading sukuk via blockchain",
          price: "Accès privilégié"
        },
        {
          name: "Biometric Security Suite",
          description: "Sécurité biométrique avancée pour toutes transactions",
          price: "Technologie de pointe"
        },
        {
          name: "Family Office Dashboard",
          description: "Gestion patrimoine familial multi-générationnel",
          price: "Solution complète"
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Analyse comparative */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-blue-600" />
            Analyse Concurrentielle - Banques Premium Dubaï
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {dubaiEliteBanks.map((bank, index) => (
              <motion.div
                key={bank.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{bank.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold">{bank.name}</h3>
                      <p className="text-gray-600">{bank.positioning}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Dépôt minimum</p>
                    <p className="text-2xl font-bold text-green-600">
                      {(bank.minDeposit / 1000000).toFixed(1)}M AED
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Part de marché</p>
                    <Progress value={bank.marketShare} className="mt-1" />
                    <p className="text-xs mt-1">{bank.marketShare}%</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Actifs gérés</p>
                    <p className="font-bold">{(bank.assets / 1000000000).toFixed(0)}B AED</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Conformité</p>
                    <div className="flex items-center gap-2 mt-1">
                      {bank.islamicCompliant ? (
                        <Badge className="bg-green-500 text-white">Halal ✓</Badge>
                      ) : (
                        <Badge className="bg-red-500 text-white">Non-Halal ✗</Badge>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-green-800 mb-2">Services Premium</h4>
                    <div className="space-y-1">
                      {bank.premiumServices.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-red-800 mb-2">Faiblesses Identifiées</h4>
                    <div className="space-y-1">
                      {bank.weaknesses.map((weakness, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <XCircle className="h-4 w-4 text-red-600" />
                          <span>{weakness}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Avantages compétitifs CED Bank */}
      <Card className="border-2 border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <Crown className="h-6 w-6" />
            Avantages Compétitifs Uniques - CED Bank International
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cedBankAdvantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <motion.div
                  key={advantage.feature}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-white rounded-lg border border-green-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-green-800">{advantage.feature}</h4>
                      <Badge className="bg-yellow-500 text-white mt-1">{advantage.uniqueness}</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">{advantage.description}</p>
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Services premium pour clients fortunés */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gem className="h-6 w-6 text-purple-600" />
            Services Premium pour Ultra-High Net Worth Individuals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="exclusive" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="exclusive">Services Exclusifs</TabsTrigger>
              <TabsTrigger value="philanthropy">Philanthropie</TabsTrigger>
              <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
              <TabsTrigger value="innovation">Innovation</TabsTrigger>
            </TabsList>

            {premiumServicesForWealthy.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <TabsContent 
                  key={categoryIndex}
                  value={categoryIndex === 0 ? "exclusive" : 
                         categoryIndex === 1 ? "philanthropy" :
                         categoryIndex === 2 ? "lifestyle" : "innovation"}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-purple-800">{category.category}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={serviceIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: serviceIndex * 0.1 }}
                        className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                      >
                        <h4 className="font-bold text-purple-800 mb-2">{service.name}</h4>
                        <p className="text-sm text-gray-700 mb-3">{service.description}</p>
                        <Badge className="bg-purple-100 text-purple-800">{service.price}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </CardContent>
      </Card>

      {/* Stratégie d'attraction */}
      <Card className="border-2 border-yellow-200 bg-yellow-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-yellow-800">
            <TrendingUp className="h-6 w-6" />
            Stratégie d'Attraction Clients Fortunés
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-yellow-800 mb-4">Approche Différentielle</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-medium">Éthique avant Profit</p>
                    <p className="text-gray-600">Positionnement unique sur les valeurs plutôt que sur les rendements</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-medium">Impact Philanthropique Mesurable</p>
                    <p className="text-gray-600">Chaque don génère un impact social quantifiable et durable</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-medium">Innovation Technologique Spirituelle</p>
                    <p className="text-gray-600">Première banque intégrant la technologie aux pratiques religieuses</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-yellow-800 mb-4">Avantages Exclusifs</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-600" />
                  <span>Accès direct à Yakoubi Yamina (validation personnelle)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Crown className="h-4 w-4 text-yellow-600" />
                  <span>Statut de fondateur historique de la finance islamique digitale</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gem className="h-4 w-4 text-yellow-600" />
                  <span>Portfolio d'investissements 100% halal certifiés</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-yellow-600" />
                  <span>Réseau philanthropique exclusif Dubai-Suisse</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-yellow-600" />
                  <span>Recognition publique dans projets d'impact social</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}