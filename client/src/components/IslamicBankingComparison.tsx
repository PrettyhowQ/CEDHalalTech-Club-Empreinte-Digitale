import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2,
  TrendingUp,
  Users,
  Globe,
  Star,
  CheckCircle,
  X,
  Award,
  Shield,
  Banknote,
  CreditCard,
  Clock,
  Target,
  Zap,
  Eye,
  Crown
} from "lucide-react";

interface BankComparison {
  id: string;
  name: string;
  country: string;
  logo: string;
  assets: number; // en milliards USD
  branches: number;
  countries: number;
  customers: number; // en millions
  shariaCompliance: number; // pourcentage
  digitalScore: number; // /100
  services: {
    retail: boolean;
    corporate: boolean;
    investment: boolean;
    takaful: boolean;
    realEstate: boolean;
    trading: boolean;
    sukuk: boolean;
    hajjFinance: boolean;
  };
  products: {
    currentAccount: boolean;
    savingsAccount: boolean;
    homeFinance: boolean;
    carFinance: boolean;
    personalFinance: boolean;
    businessFinance: boolean;
    creditCards: boolean;
    debitCards: boolean;
  };
  technology: {
    mobileApp: boolean;
    onlineBanking: boolean;
    api: boolean;
    blockchain: boolean;
    ai: boolean;
    biometrics: boolean;
    realTimePayments: boolean;
    multiCurrency: boolean;
  };
  specialFeatures: string[];
  strengths: string[];
  weaknesses: string[];
  rating: number; // /5
  fees: {
    accountMaintenance: number;
    internationalTransfer: number;
    atmWithdrawal: number;
    cardAnnual: number;
  };
}

export default function IslamicBankingComparison() {
  const [selectedCategory, setSelectedCategory] = useState('overview');

  const banks: BankComparison[] = [
    {
      id: 'ced',
      name: 'CED Bank',
      country: 'Suisse',
      logo: '🏦',
      assets: 12.5,
      branches: 25,
      countries: 3,
      customers: 0.15,
      shariaCompliance: 100,
      digitalScore: 98,
      services: {
        retail: true,
        corporate: true,
        investment: true,
        takaful: true,
        realEstate: true,
        trading: true,
        sukuk: true,
        hajjFinance: true
      },
      products: {
        currentAccount: true,
        savingsAccount: true,
        homeFinance: true,
        carFinance: true,
        personalFinance: true,
        businessFinance: true,
        creditCards: true,
        debitCards: true
      },
      technology: {
        mobileApp: true,
        onlineBanking: true,
        api: true,
        blockchain: true,
        ai: true,
        biometrics: true,
        realTimePayments: true,
        multiCurrency: true
      },
      specialFeatures: [
        'Synchronisation prière satellitaire GPS/GLONASS/Galileo/BeiDou',
        'Conseil Sharia permanent 5 scholars AAOIFI',
        'Banking vocal arabe avec IA',
        'Calculateur Zakat automatique multi-devises',
        'Écoute Coran intégrée 8+ récitateurs',
        'TechForAll donation écologique',
        'Al-Aman Takaful intégré'
      ],
      strengths: [
        'Innovation technologique de pointe',
        'Conformité Sharia 100% certifiée',
        'Excellence Swiss Banking',
        'Services écosystème complet',
        'IA éthique intégrée'
      ],
      weaknesses: [
        'Nouvelle banque (moins d\'historique)',
        'Réseau physique en développement'
      ],
      rating: 5.0,
      fees: {
        accountMaintenance: 0,
        internationalTransfer: 0,
        atmWithdrawal: 0,
        cardAnnual: 0
      }
    },
    {
      id: 'alinma',
      name: 'Alinma Bank',
      country: 'Arabie Saoudite',
      logo: '🇸🇦',
      assets: 85.2,
      branches: 170,
      countries: 1,
      customers: 2.8,
      shariaCompliance: 95,
      digitalScore: 82,
      services: {
        retail: true,
        corporate: true,
        investment: true,
        takaful: false,
        realEstate: true,
        trading: true,
        sukuk: true,
        hajjFinance: true
      },
      products: {
        currentAccount: true,
        savingsAccount: true,
        homeFinance: true,
        carFinance: true,
        personalFinance: true,
        businessFinance: true,
        creditCards: true,
        debitCards: true
      },
      technology: {
        mobileApp: true,
        onlineBanking: true,
        api: false,
        blockchain: false,
        ai: false,
        biometrics: true,
        realTimePayments: true,
        multiCurrency: false
      },
      specialFeatures: [
        'Financing solutions for women',
        'Youth banking programs',
        'Hajj and Umrah services',
        'Real estate financing'
      ],
      strengths: [
        'Forte présence locale Arabie',
        'Expertise Hajj/Umrah',
        'Produits diversifiés'
      ],
      weaknesses: [
        'Limité géographiquement',
        'Innovation technologique modérée',
        'Pas de Takaful intégré'
      ],
      rating: 4.2,
      fees: {
        accountMaintenance: 25,
        internationalTransfer: 15,
        atmWithdrawal: 2,
        cardAnnual: 120
      }
    },
    {
      id: 'dib',
      name: 'Dubai Islamic Bank',
      country: 'EAU',
      logo: '🇦🇪',
      assets: 78.9,
      branches: 90,
      countries: 5,
      customers: 1.9,
      shariaCompliance: 98,
      digitalScore: 85,
      services: {
        retail: true,
        corporate: true,
        investment: true,
        takaful: true,
        realEstate: true,
        trading: true,
        sukuk: true,
        hajjFinance: true
      },
      products: {
        currentAccount: true,
        savingsAccount: true,
        homeFinance: true,
        carFinance: true,
        personalFinance: true,
        businessFinance: true,
        creditCards: true,
        debitCards: true
      },
      technology: {
        mobileApp: true,
        onlineBanking: true,
        api: true,
        blockchain: false,
        ai: false,
        biometrics: true,
        realTimePayments: true,
        multiCurrency: true
      },
      specialFeatures: [
        'Premier banque islamique mondiale',
        'Sukuk issuance leader',
        'Corporate banking expertise',
        'Regional presence strong'
      ],
      strengths: [
        'Leader historique banking islamique',
        'Forte expertise corporate',
        'Présence régionale solide'
      ],
      weaknesses: [
        'Innovation limitée',
        'Frais élevés',
        'Service client perfectible'
      ],
      rating: 4.1,
      fees: {
        accountMaintenance: 35,
        internationalTransfer: 25,
        atmWithdrawal: 3,
        cardAnnual: 150
      }
    },
    {
      id: 'maybank',
      name: 'Maybank Islamic',
      country: 'Malaisie',
      logo: '🇲🇾',
      assets: 92.1,
      branches: 75,
      countries: 8,
      customers: 3.2,
      shariaCompliance: 96,
      digitalScore: 88,
      services: {
        retail: true,
        corporate: true,
        investment: true,
        takaful: true,
        realEstate: true,
        trading: true,
        sukuk: true,
        hajjFinance: false
      },
      products: {
        currentAccount: true,
        savingsAccount: true,
        homeFinance: true,
        carFinance: true,
        personalFinance: true,
        businessFinance: true,
        creditCards: true,
        debitCards: true
      },
      technology: {
        mobileApp: true,
        onlineBanking: true,
        api: true,
        blockchain: false,
        ai: true,
        biometrics: true,
        realTimePayments: true,
        multiCurrency: true
      },
      specialFeatures: [
        'Southeast Asia leader',
        'Digital innovation focus',
        'Takaful integration',
        'SME financing expertise'
      ],
      strengths: [
        'Leadership Asie du Sud-Est',
        'Innovation digitale',
        'Takaful intégré'
      ],
      weaknesses: [
        'Présence limitée Moyen-Orient',
        'Pas de services Hajj'
      ],
      rating: 4.3,
      fees: {
        accountMaintenance: 20,
        internationalTransfer: 18,
        atmWithdrawal: 1.5,
        cardAnnual: 100
      }
    },
    {
      id: 'adcb',
      name: 'ADCB Islamic',
      country: 'EAU',
      logo: '🇦🇪',
      assets: 67.3,
      branches: 65,
      countries: 2,
      customers: 1.1,
      shariaCompliance: 94,
      digitalScore: 79,
      services: {
        retail: true,
        corporate: true,
        investment: true,
        takaful: false,
        realEstate: true,
        trading: false,
        sukuk: true,
        hajjFinance: false
      },
      products: {
        currentAccount: true,
        savingsAccount: true,
        homeFinance: true,
        carFinance: true,
        personalFinance: true,
        businessFinance: true,
        creditCards: true,
        debitCards: true
      },
      technology: {
        mobileApp: true,
        onlineBanking: true,
        api: false,
        blockchain: false,
        ai: false,
        biometrics: false,
        realTimePayments: true,
        multiCurrency: false
      },
      specialFeatures: [
        'Abu Dhabi focus',
        'Government relationships',
        'Corporate expertise',
        'Local market knowledge'
      ],
      strengths: [
        'Forte position Abu Dhabi',
        'Relations gouvernementales',
        'Expertise corporate'
      ],
      weaknesses: [
        'Innovation technologique limitée',
        'Services digitaux basiques',
        'Pas de Takaful'
      ],
      rating: 3.8,
      fees: {
        accountMaintenance: 40,
        internationalTransfer: 30,
        atmWithdrawal: 4,
        cardAnnual: 180
      }
    }
  ];

  const categories = [
    { id: 'overview', name: 'Vue d\'ensemble', icon: Eye },
    { id: 'services', name: 'Services', icon: Building2 },
    { id: 'technology', name: 'Technologie', icon: Zap },
    { id: 'fees', name: 'Frais', icon: Banknote },
    { id: 'sharia', name: 'Conformité', icon: Award }
  ];

  const getComplianceColor = (score: number) => {
    if (score >= 98) return 'text-green-600 bg-green-100';
    if (score >= 95) return 'text-blue-600 bg-blue-100';
    if (score >= 90) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && <Star className="h-4 w-4 fill-yellow-200 text-yellow-400" />}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <Star key={i + fullStars} className="h-4 w-4 text-gray-300" />
        ))}
        <span className="ml-2 font-semibold">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
              <Building2 className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">مقارنة البنوك الإسلامية العالمية</h1>
              <h2 className="text-2xl text-blue-600">Comparaison Banques Islamiques Mondiales</h2>
              <p className="text-gray-600">CED Bank vs Leaders mondiaux du banking islamique</p>
            </div>
          </div>
        </div>

        {/* Statistiques globales */}
        <Card className="mb-8 bg-gradient-to-r from-blue-500 to-green-500 text-white">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">{banks.length}</div>
                <div className="text-sm opacity-90">Banques Comparées</div>
              </div>
              <div>
                <div className="text-3xl font-bold">
                  {banks.reduce((sum, bank) => sum + bank.assets, 0).toFixed(0)}B$
                </div>
                <div className="text-sm opacity-90">Actifs Totaux</div>
              </div>
              <div>
                <div className="text-3xl font-bold">
                  {banks.reduce((sum, bank) => sum + bank.customers, 0).toFixed(1)}M
                </div>
                <div className="text-sm opacity-90">Clients Totaux</div>
              </div>
              <div>
                <div className="text-3xl font-bold">
                  {banks.reduce((sum, bank) => sum + bank.countries, 0)}
                </div>
                <div className="text-sm opacity-90">Pays Couverts</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                <category.icon className="h-4 w-4" />
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {banks.map((bank) => (
                <Card key={bank.id} className={`${bank.id === 'ced' ? 'border-2 border-blue-500 bg-blue-50' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{bank.logo}</div>
                        <div>
                          <CardTitle className="text-lg">{bank.name}</CardTitle>
                          <p className="text-sm text-gray-600">{bank.country}</p>
                        </div>
                      </div>
                      {bank.id === 'ced' && (
                        <Badge className="bg-blue-100 text-blue-800">
                          <Crown className="h-3 w-3 mr-1" />
                          Leader Tech
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Actifs:</span>
                          <div className="font-semibold">{bank.assets.toFixed(1)}B USD</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Clients:</span>
                          <div className="font-semibold">{bank.customers.toFixed(1)}M</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Agences:</span>
                          <div className="font-semibold">{bank.branches}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Pays:</span>
                          <div className="font-semibold">{bank.countries}</div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Conformité Sharia</span>
                          <span className="font-semibold">{bank.shariaCompliance}%</span>
                        </div>
                        <Progress value={bank.shariaCompliance} className="mb-2" />
                        <Badge className={getComplianceColor(bank.shariaCompliance)}>
                          {bank.shariaCompliance >= 98 ? 'Excellent' :
                           bank.shariaCompliance >= 95 ? 'Très Bon' :
                           bank.shariaCompliance >= 90 ? 'Bon' : 'Moyen'}
                        </Badge>
                      </div>

                      <div>
                        <div className="text-sm text-gray-600 mb-1">Évaluation:</div>
                        {getRatingStars(bank.rating)}
                      </div>

                      <div>
                        <div className="text-sm font-medium mb-2">Points forts:</div>
                        <div className="space-y-1">
                          {bank.strengths.slice(0, 2).map((strength, index) => (
                            <div key={index} className="text-xs text-green-700 flex items-center gap-1">
                              <CheckCircle className="h-3 w-3" />
                              <span>{strength}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Services */}
          <TabsContent value="services" className="space-y-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Banque</th>
                    <th className="text-center p-2">Retail</th>
                    <th className="text-center p-2">Corporate</th>
                    <th className="text-center p-2">Investment</th>
                    <th className="text-center p-2">Takaful</th>
                    <th className="text-center p-2">Real Estate</th>
                    <th className="text-center p-2">Trading</th>
                    <th className="text-center p-2">Sukuk</th>
                    <th className="text-center p-2">Hajj Finance</th>
                  </tr>
                </thead>
                <tbody>
                  {banks.map((bank) => (
                    <tr key={bank.id} className={`border-b ${bank.id === 'ced' ? 'bg-blue-50' : ''}`}>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{bank.logo}</span>
                          <span className="font-medium">{bank.name}</span>
                        </div>
                      </td>
                      <td className="text-center p-2">
                        {bank.services.retail ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                      <td className="text-center p-2">
                        {bank.services.corporate ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                      <td className="text-center p-2">
                        {bank.services.investment ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                      <td className="text-center p-2">
                        {bank.services.takaful ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                      <td className="text-center p-2">
                        {bank.services.realEstate ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                      <td className="text-center p-2">
                        {bank.services.trading ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                      <td className="text-center p-2">
                        {bank.services.sukuk ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                      <td className="text-center p-2">
                        {bank.services.hajjFinance ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Technologie */}
          <TabsContent value="technology" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {banks.map((bank) => (
                <Card key={bank.id} className={`${bank.id === 'ced' ? 'border-2 border-blue-500 bg-blue-50' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{bank.logo}</span>
                        <div>
                          <CardTitle>{bank.name}</CardTitle>
                          <p className="text-sm text-gray-600">Score Digital: {bank.digitalScore}/100</p>
                        </div>
                      </div>
                      <Progress value={bank.digitalScore} className="w-20" />
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      {Object.entries(bank.technology).map(([tech, available]) => (
                        <div key={tech} className="flex items-center gap-2">
                          {available ? 
                            <CheckCircle className="h-4 w-4 text-green-500" /> : 
                            <X className="h-4 w-4 text-red-500" />
                          }
                          <span className={available ? 'text-green-700' : 'text-red-700'}>
                            {tech.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </span>
                        </div>
                      ))}
                    </div>

                    {bank.id === 'ced' && (
                      <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                        <div className="text-sm font-semibold text-blue-800 mb-2">Innovations exclusives:</div>
                        <div className="space-y-1 text-xs">
                          {bank.specialFeatures.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center gap-1">
                              <Star className="h-3 w-3 text-blue-600" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Frais */}
          <TabsContent value="fees" className="space-y-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Banque</th>
                    <th className="text-center p-2">Tenue compte (CHF/an)</th>
                    <th className="text-center p-2">Virement international (CHF)</th>
                    <th className="text-center p-2">Retrait ATM (CHF)</th>
                    <th className="text-center p-2">Carte annuelle (CHF)</th>
                    <th className="text-center p-2">Total annuel (CHF)</th>
                  </tr>
                </thead>
                <tbody>
                  {banks.map((bank) => {
                    const totalAnnual = bank.fees.accountMaintenance + bank.fees.cardAnnual + (bank.fees.internationalTransfer * 12) + (bank.fees.atmWithdrawal * 24);
                    return (
                      <tr key={bank.id} className={`border-b ${bank.id === 'ced' ? 'bg-green-50' : ''}`}>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{bank.logo}</span>
                            <span className="font-medium">{bank.name}</span>
                          </div>
                        </td>
                        <td className="text-center p-2 font-medium">
                          {bank.fees.accountMaintenance === 0 ? 
                            <span className="text-green-600 font-bold">GRATUIT</span> : 
                            bank.fees.accountMaintenance
                          }
                        </td>
                        <td className="text-center p-2 font-medium">
                          {bank.fees.internationalTransfer === 0 ? 
                            <span className="text-green-600 font-bold">GRATUIT</span> : 
                            bank.fees.internationalTransfer
                          }
                        </td>
                        <td className="text-center p-2 font-medium">
                          {bank.fees.atmWithdrawal === 0 ? 
                            <span className="text-green-600 font-bold">GRATUIT</span> : 
                            bank.fees.atmWithdrawal
                          }
                        </td>
                        <td className="text-center p-2 font-medium">
                          {bank.fees.cardAnnual === 0 ? 
                            <span className="text-green-600 font-bold">GRATUIT</span> : 
                            bank.fees.cardAnnual
                          }
                        </td>
                        <td className="text-center p-2 font-bold">
                          {totalAnnual === 0 ? 
                            <span className="text-green-600 text-lg">0 CHF</span> : 
                            <span className="text-red-600">{totalAnnual.toFixed(0)} CHF</span>
                          }
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                  <h3 className="text-xl font-bold text-green-800">Avantage CED Bank</h3>
                </div>
                <p className="text-green-700 text-lg font-semibold">
                  CED Bank offre TOUS les services GRATUITEMENT alors que les concurrents facturent jusqu'à 600+ CHF par an !
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Conformité Sharia */}
          <TabsContent value="sharia" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {banks.map((bank) => (
                <Card key={bank.id} className={`${bank.id === 'ced' ? 'border-2 border-green-500 bg-green-50' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{bank.logo}</span>
                        <div>
                          <CardTitle>{bank.name}</CardTitle>
                          <p className="text-sm text-gray-600">{bank.country}</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{bank.shariaCompliance}%</div>
                        <div className="text-xs text-gray-600">Conformité</div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <Progress value={bank.shariaCompliance} className="mb-2" />
                      
                      {bank.id === 'ced' && (
                        <div className="bg-green-100 p-4 rounded-lg">
                          <div className="text-sm font-semibold text-green-800 mb-2">Système Sharia CED Bank:</div>
                          <div className="space-y-1 text-xs text-green-700">
                            <div className="flex items-center gap-1">
                              <CheckCircle className="h-3 w-3" />
                              <span>5 Scholars résidents AAOIFI permanents</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <CheckCircle className="h-3 w-3" />
                              <span>Surveillance temps réel 24/7</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <CheckCircle className="h-3 w-3" />
                              <span>Purification automatique des revenus</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <CheckCircle className="h-3 w-3" />
                              <span>Suspension prières satellite GPS</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <CheckCircle className="h-3 w-3" />
                              <span>Zakat calculation automatique</span>
                            </div>
                          </div>
                        </div>
                      )}

                      <div>
                        <div className="text-sm font-medium mb-2">Certifications:</div>
                        <div className="flex flex-wrap gap-1">
                          <Badge className="bg-blue-100 text-blue-800 text-xs">AAOIFI</Badge>
                          {bank.shariaCompliance >= 95 && (
                            <Badge className="bg-green-100 text-green-800 text-xs">IFSB</Badge>
                          )}
                          {bank.id === 'ced' && (
                            <>
                              <Badge className="bg-purple-100 text-purple-800 text-xs">Al-Azhar</Badge>
                              <Badge className="bg-gold-100 text-gold-800 text-xs">OIC</Badge>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p className="mb-2">
            © 2025 CED Bank - Analyse comparative banking islamique mondial - Yakoubi Yamina
          </p>
          <p>
            🏆 Leadership technologique - Excellence Swiss Banking - Conformité Sharia 100%
          </p>
        </div>
      </div>
    </div>
  );
}