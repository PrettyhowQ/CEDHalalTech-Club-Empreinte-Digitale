import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building, 
  Shield, 
  CreditCard, 
  Smartphone, 
  Globe, 
  TrendingUp,
  Users,
  Star,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Banknote,
  Home,
  Car,
  Plane,
  GraduationCap,
  Heart,
  Calculator,
  PiggyBank,
  Zap,
  Trophy,
  Target
} from "lucide-react";

interface IslamicBank {
  id: string;
  name: string;
  arabicName: string;
  country: string;
  city: string;
  founded: number;
  assets: number; // en milliards USD
  branches: number;
  customers: number; // en millions
  marketShare: number; // en %
  sharaCompliance: number; // score sur 100
  digitalScore: number; // score sur 100
  innovationRank: number;
  rating: string;
  specialties: string[];
  uniqueFeatures: string[];
  missingInCED: string[];
  logo?: string;
  color: string;
}

interface BankingFeature {
  id: string;
  name: string;
  category: 'digital' | 'islamic' | 'investment' | 'personal' | 'business' | 'innovation';
  description: string;
  availableIn: string[];
  importance: 'high' | 'medium' | 'low';
  implementationCost: 'low' | 'medium' | 'high';
  cedStatus: 'available' | 'partial' | 'missing' | 'planned';
}

export function IslamicBankingComparison() {
  const [selectedBank, setSelectedBank] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const islamicBanks: IslamicBank[] = [
    {
      id: 'alrajhi',
      name: 'Al Rajhi Bank',
      arabicName: 'مصرف الراجحي',
      country: 'Saudi Arabia',
      city: 'Riyadh',
      founded: 1957,
      assets: 220,
      branches: 600,
      customers: 12.5,
      marketShare: 35,
      sharaCompliance: 98,
      digitalScore: 92,
      innovationRank: 1,
      rating: 'A+',
      specialties: ['Retail Banking', 'SME Financing', 'Real Estate', 'Digital Innovation'],
      uniqueFeatures: [
        'Al Rajhi FinTech Hub',
        'Blockchain-based Trade Finance',
        'AI-powered Sharia Advisory',
        'Digital Nomad Banking',
        'Quantum-secured Transactions',
        'IoT Payment Solutions',
        'Metaverse Banking Branch',
        'Carbon Neutral Banking',
        'Robo-Advisory Halal Investments',
        'Biometric Islamic Authentication'
      ],
      missingInCED: [
        'FinTech Hub écosystème',
        'Blockchain Trade Finance',
        'IA Conseil Sharia temps réel',
        'Banking Nomade Digital',
        'Sécurité Quantique'
      ],
      color: 'bg-green-500'
    },
    {
      id: 'alinma',
      name: 'Alinma Bank',
      arabicName: 'بنك الإنماء',
      country: 'Saudi Arabia',
      city: 'Riyadh',
      founded: 2006,
      assets: 85,
      branches: 145,
      customers: 4.2,
      marketShare: 12,
      sharaCompliance: 97,
      digitalScore: 88,
      innovationRank: 3,
      rating: 'A',
      specialties: ['Corporate Banking', 'Treasury', 'Investment Banking'],
      uniqueFeatures: [
        'Smart Sharia Compliance Engine',
        'Corporate Sukuk Platform',
        'ESG Islamic Investments',
        'Supply Chain Finance Halal',
        'Multi-currency Zakat Calculator',
        'Islamic Derivatives Trading',
        'Hajj & Umrah Finance Solutions',
        'Women-only Banking Branches',
        'Youth Islamic Banking Program',
        'Green Sukuk Issuance Platform'
      ],
      missingInCED: [
        'Moteur Conformité Sharia Intelligent',
        'Plateforme Sukuk Corporate',
        'Investissements ESG Islamiques',
        'Finance Chaîne Approvisionnement',
        'Calculateur Zakat Multi-devises'
      ],
      color: 'bg-blue-500'
    },
    {
      id: 'alnational',
      name: 'Al National Bank',
      arabicName: 'البنك الأهلي السعودي',
      country: 'Saudi Arabia',
      city: 'Riyadh',
      founded: 1953,
      assets: 240,
      branches: 420,
      customers: 8.5,
      marketShare: 28,
      sharaCompliance: 96,
      digitalScore: 90,
      innovationRank: 2,
      rating: 'AA-',
      specialties: ['Universal Banking', 'International Trade', 'Private Banking'],
      uniqueFeatures: [
        'Vision 2030 Investment Platform',
        'NEOM Smart City Banking',
        'Red Sea Project Financing',
        'Giga Projects Islamic Funding',
        'Sovereign Wealth Fund Integration',
        'Cross-border Islamic Payments',
        'Luxury Islamic Private Banking',
        'Space Economy Islamic Finance',
        'Renewable Energy Sukuk',
        'Smart City Infrastructure Finance'
      ],
      missingInCED: [
        'Plateforme Investissement Vision 2030',
        'Banking Smart City',
        'Financement Méga-projets',
        'Intégration Fonds Souverain',
        'Private Banking Luxe Islamique'
      ],
      color: 'bg-purple-500'
    },
    {
      id: 'dib',
      name: 'Dubai Islamic Bank',
      arabicName: 'بنك دبي الإسلامي',
      country: 'UAE',
      city: 'Dubai',
      founded: 1975,
      assets: 75,
      branches: 90,
      customers: 2.8,
      marketShare: 15,
      sharaCompliance: 99,
      digitalScore: 94,
      innovationRank: 1,
      rating: 'A+',
      specialties: ['Islamic Banking Pioneer', 'Digital Innovation', 'Wealth Management'],
      uniqueFeatures: [
        'First Islamic Bank Globally',
        'Crypto-Sharia Compliance Engine',
        'DeFi Islamic Protocols',
        'NFT Halal Marketplace',
        'Metaverse Islamic Banking',
        'AI Fatwa Advisory System',
        'Quantum Islamic Cryptography',
        'Space Tourism Islamic Finance',
        'Virtual Reality Hajj Financing',
        'Sustainable Islamic Real Estate'
      ],
      missingInCED: [
        'Moteur Conformité Crypto-Sharia',
        'Protocoles DeFi Islamiques',
        'Marketplace NFT Halal',
        'Banking Metaverse Islamique',
        'Système IA Fatwa Consultatif'
      ],
      color: 'bg-gold-500'
    },
    {
      id: 'adcb',
      name: 'Abu Dhabi Commercial Bank',
      arabicName: 'بنك أبوظبي التجاري',
      country: 'UAE',
      city: 'Abu Dhabi',
      founded: 1985,
      assets: 180,
      branches: 55,
      customers: 1.2,
      marketShare: 18,
      sharaCompliance: 95,
      digitalScore: 91,
      innovationRank: 2,
      rating: 'AA',
      specialties: ['Commercial Banking', 'Islamic Finance', 'Global Trade'],
      uniqueFeatures: [
        'Sovereign Wealth Fund Banking',
        'Oil & Gas Islamic Finance',
        'International Islamic Corridors',
        'Multi-jurisdictional Compliance',
        'Islamic Trade Finance Hub',
        'Cross-border Sukuk Platform',
        'Energy Transition Islamic Finance',
        'Logistics Islamic Banking',
        'Maritime Islamic Finance',
        'Aviation Islamic Leasing'
      ],
      missingInCED: [
        'Banking Fonds Souverain',
        'Finance Islamique Pétrole & Gaz',
        'Corridors Islamiques Internationaux',
        'Conformité Multi-juridictionnelle',
        'Hub Finance Commerce Islamique'
      ],
      color: 'bg-teal-500'
    },
    {
      id: 'emiratesnbd',
      name: 'Emirates NBD Islamic',
      arabicName: 'بنك الإمارات دبي الوطني الإسلامي',
      country: 'UAE',
      city: 'Dubai',
      founded: 2008,
      assets: 65,
      branches: 35,
      customers: 0.8,
      marketShare: 8,
      sharaCompliance: 97,
      digitalScore: 96,
      innovationRank: 1,
      rating: 'A+',
      specialties: ['Digital Banking', 'Innovation', 'Future Banking'],
      uniqueFeatures: [
        'First Biometric Islamic Bank',
        'Voice Banking in Arabic',
        'Predictive Islamic Banking',
        'Emotion AI for Customer Service',
        'Holographic Banking Advisors',
        'Augmented Reality Islamic Education',
        'Drone Delivery Banking Services',
        'Satellite Islamic Banking',
        'Neural Network Sharia Compliance',
        'Quantum Computing Risk Management'
      ],
      missingInCED: [
        'Banking Biométrique Islamique',
        'Banking Vocal en Arabe',
        'Banking Prédictif Islamique',
        'IA Émotionnelle Service Client',
        'Conseillers Banking Holographiques'
      ],
      color: 'bg-red-500'
    }
  ];

  const bankingFeatures: BankingFeature[] = [
    {
      id: 'fintech-hub',
      name: 'FinTech Hub Écosystème',
      category: 'innovation',
      description: 'Plateforme d\'incubation pour startups fintech islamiques avec APIs ouvertes',
      availableIn: ['Al Rajhi Bank'],
      importance: 'high',
      implementationCost: 'high',
      cedStatus: 'missing'
    },
    {
      id: 'blockchain-trade',
      name: 'Blockchain Trade Finance',
      category: 'digital',
      description: 'Finance commerciale basée sur blockchain avec smart contracts halal',
      availableIn: ['Al Rajhi Bank', 'Al National Bank'],
      importance: 'high',
      implementationCost: 'high',
      cedStatus: 'missing'
    },
    {
      id: 'ai-sharia-advisor',
      name: 'IA Conseil Sharia Temps Réel',
      category: 'islamic',
      description: 'Système IA pour validation conformité Sharia instantanée',
      availableIn: ['Al Rajhi Bank', 'Dubai Islamic Bank'],
      importance: 'high',
      implementationCost: 'medium',
      cedStatus: 'partial'
    },
    {
      id: 'crypto-sharia-engine',
      name: 'Moteur Conformité Crypto-Sharia',
      category: 'islamic',
      description: 'Validation automatique conformité Sharia pour cryptomonnaies',
      availableIn: ['Dubai Islamic Bank'],
      importance: 'high',
      implementationCost: 'high',
      cedStatus: 'missing'
    },
    {
      id: 'defi-islamic',
      name: 'Protocoles DeFi Islamiques',
      category: 'innovation',
      description: 'Finance décentralisée conforme aux principes islamiques',
      availableIn: ['Dubai Islamic Bank'],
      importance: 'medium',
      implementationCost: 'high',
      cedStatus: 'missing'
    },
    {
      id: 'nft-halal-marketplace',
      name: 'Marketplace NFT Halal',
      category: 'digital',
      description: 'Plateforme NFT certifiée conforme Sharia',
      availableIn: ['Dubai Islamic Bank'],
      importance: 'medium',
      implementationCost: 'medium',
      cedStatus: 'missing'
    },
    {
      id: 'metaverse-banking',
      name: 'Banking Metaverse Islamique',
      category: 'innovation',
      description: 'Services bancaires dans environnements virtuels 3D',
      availableIn: ['Al Rajhi Bank', 'Dubai Islamic Bank'],
      importance: 'medium',
      implementationCost: 'high',
      cedStatus: 'missing'
    },
    {
      id: 'quantum-security',
      name: 'Sécurité Quantique',
      category: 'digital',
      description: 'Cryptographie quantique pour sécurité ultime',
      availableIn: ['Al Rajhi Bank', 'Emirates NBD'],
      importance: 'high',
      implementationCost: 'high',
      cedStatus: 'missing'
    },
    {
      id: 'voice-banking-arabic',
      name: 'Banking Vocal Arabe',
      category: 'digital',
      description: 'Interface vocale en arabe avec reconnaissance dialectes',
      availableIn: ['Emirates NBD'],
      importance: 'high',
      implementationCost: 'medium',
      cedStatus: 'missing'
    },
    {
      id: 'biometric-islamic',
      name: 'Authentification Biométrique Islamique',
      category: 'digital',
      description: 'Biométrie respectant contraintes religieuses islamiques',
      availableIn: ['Al Rajhi Bank', 'Emirates NBD'],
      importance: 'high',
      implementationCost: 'medium',
      cedStatus: 'partial'
    },
    {
      id: 'sukuk-platform',
      name: 'Plateforme Sukuk Corporate',
      category: 'investment',
      description: 'Émission et trading de sukuk pour entreprises',
      availableIn: ['Alinma Bank', 'ADCB'],
      importance: 'high',
      implementationCost: 'high',
      cedStatus: 'missing'
    },
    {
      id: 'esg-islamic',
      name: 'Investissements ESG Islamiques',
      category: 'investment',
      description: 'Fonds d\'investissement ESG conformes Sharia',
      availableIn: ['Alinma Bank'],
      importance: 'high',
      implementationCost: 'medium',
      cedStatus: 'partial'
    },
    {
      id: 'multi-currency-zakat',
      name: 'Calculateur Zakat Multi-devises',
      category: 'islamic',
      description: 'Calcul automatique Zakat pour portefeuilles multi-devises',
      availableIn: ['Alinma Bank'],
      importance: 'high',
      implementationCost: 'low',
      cedStatus: 'missing'
    },
    {
      id: 'hajj-umrah-finance',
      name: 'Solutions Finance Hajj & Umrah',
      category: 'islamic',
      description: 'Financement spécialisé pour pèlerinages religieux',
      availableIn: ['Alinma Bank'],
      importance: 'medium',
      implementationCost: 'low',
      cedStatus: 'missing'
    },
    {
      id: 'women-only-branches',
      name: 'Agences Femmes Uniquement',
      category: 'islamic',
      description: 'Agences bancaires dédiées exclusivement aux femmes',
      availableIn: ['Alinma Bank'],
      importance: 'medium',
      implementationCost: 'medium',
      cedStatus: 'missing'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'partial': return 'bg-yellow-100 text-yellow-800';
      case 'missing': return 'bg-red-100 text-red-800';
      case 'planned': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getCostColor = (cost: string) => {
    switch (cost) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const filteredFeatures = selectedCategory === 'all' 
    ? bankingFeatures 
    : bankingFeatures.filter(feature => feature.category === selectedCategory);

  const missingFeatures = bankingFeatures.filter(feature => 
    feature.cedStatus === 'missing' || feature.cedStatus === 'partial'
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">
            Analyse Concurrentielle Banking Islamique
          </h1>
          <p className="text-lg text-gray-600">
            Comparaison CED Bank vs Banques Islamiques Leaders - Arabie Saoudite & Émirats
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <Badge className="bg-green-500 text-white">Arabie Saoudite: 3 banques</Badge>
            <Badge className="bg-blue-500 text-white">Émirats: 3 banques</Badge>
            <Badge className="bg-red-500 text-white">{missingFeatures.length} fonctionnalités manquantes</Badge>
          </div>
        </div>

        <Tabs defaultValue="banks" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="banks">Banques Concurrentes</TabsTrigger>
            <TabsTrigger value="features">Fonctionnalités Manquantes</TabsTrigger>
            <TabsTrigger value="analysis">Analyse Détaillée</TabsTrigger>
            <TabsTrigger value="recommendations">Recommandations</TabsTrigger>
          </TabsList>

          {/* Banques Concurrentes */}
          <TabsContent value="banks" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {islamicBanks.map((bank) => (
                <Card key={bank.id} className="overflow-hidden">
                  <CardHeader className={`${bank.color} bg-opacity-10`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{bank.name}</CardTitle>
                        <p className="text-sm text-gray-600">{bank.arabicName}</p>
                        <p className="text-sm font-medium">{bank.city}, {bank.country}</p>
                      </div>
                      <div className="text-right">
                        <Badge className="mb-2">{bank.rating}</Badge>
                        <p className="text-xs">Rang Innovation: #{bank.innovationRank}</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500">Actifs:</span>
                        <div className="font-medium">${bank.assets}B</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Clients:</span>
                        <div className="font-medium">{bank.customers}M</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Conformité Sharia:</span>
                        <div className="font-medium text-green-600">{bank.sharaCompliance}%</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Score Digital:</span>
                        <div className="font-medium text-blue-600">{bank.digitalScore}%</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Fonctionnalités Uniques</h4>
                      <div className="space-y-1">
                        {bank.uniqueFeatures.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <Star className="h-3 w-3 text-yellow-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {bank.uniqueFeatures.length > 3 && (
                          <p className="text-xs text-gray-500">+{bank.uniqueFeatures.length - 3} autres</p>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-red-600">Manque dans CED Bank</h4>
                      <div className="space-y-1">
                        {bank.missingInCED.map((missing, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <XCircle className="h-3 w-3 text-red-500" />
                            <span>{missing}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => setSelectedBank(bank.id)}
                    >
                      Analyser en Détail
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Fonctionnalités Manquantes */}
          <TabsContent value="features" className="space-y-6">
            <div className="flex gap-4 mb-6">
              <Button 
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory('all')}
              >
                Toutes
              </Button>
              <Button 
                variant={selectedCategory === 'digital' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory('digital')}
              >
                Digital
              </Button>
              <Button 
                variant={selectedCategory === 'islamic' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory('islamic')}
              >
                Islamique
              </Button>
              <Button 
                variant={selectedCategory === 'innovation' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory('innovation')}
              >
                Innovation
              </Button>
              <Button 
                variant={selectedCategory === 'investment' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory('investment')}
              >
                Investissement
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredFeatures.map((feature) => (
                <Card key={feature.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{feature.name}</CardTitle>
                      <div className="flex gap-2">
                        <Badge className={getImportanceColor(feature.importance)} variant="secondary">
                          {feature.importance}
                        </Badge>
                        <Badge className={getStatusColor(feature.cedStatus)}>
                          {feature.cedStatus}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Coût implémentation:</span>
                        <span className={`font-medium ${getCostColor(feature.implementationCost)}`}>
                          {feature.implementationCost}
                        </span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-500">Disponible chez:</span>
                        <div className="mt-1">
                          {feature.availableIn.map((bank, index) => (
                            <Badge key={index} variant="outline" className="mr-1 mb-1 text-xs">
                              {bank}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {(feature.cedStatus === 'missing' || feature.cedStatus === 'partial') && (
                      <Button size="sm" className="w-full">
                        Planifier Implémentation
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analyse Détaillée */}
          <TabsContent value="analysis" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Forces CED Bank
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Écosystème intégré unique</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Assurance Takaful intégrée</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">IA éthique IARP Pro</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Support 78+ langues</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">TechForAll solidarité</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Gaps Critiques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-500" />
                      <span className="text-sm">Blockchain Trade Finance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-500" />
                      <span className="text-sm">Crypto-Sharia Compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-500" />
                      <span className="text-sm">FinTech Hub Écosystème</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-500" />
                      <span className="text-sm">Banking Vocal Arabe</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-500" />
                      <span className="text-sm">Sukuk Corporate Platform</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-500" />
                    Opportunités
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Leadership IA Éthique</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Innovation Metaverse Halal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Expansion Internationale</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Partenariats FinTech</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">ESG Islamic Leadership</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Recommandations */}
          <TabsContent value="recommendations" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-gold-500" />
                    Priorités Immédiates (Q1 2025)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">1. Banking Vocal Arabe</h4>
                      <p className="text-sm text-red-600">Interface vocale en arabe dialectal avec reconnaissance NLP islamique</p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="destructive">Priorité 1</Badge>
                        <Badge variant="outline">Coût: Moyen</Badge>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">2. Calculateur Zakat Multi-devises</h4>
                      <p className="text-sm text-yellow-600">Calcul automatique Zakat pour portefeuilles complexes</p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="secondary">Priorité 2</Badge>
                        <Badge variant="outline">Coût: Faible</Badge>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">3. IA Conseil Sharia Temps Réel</h4>
                      <p className="text-sm text-blue-600">Amélioration système existant avec ML avancé</p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="secondary">Priorité 3</Badge>
                        <Badge variant="outline">Coût: Moyen</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-purple-500" />
                    Innovations Futures (Q2-Q4 2025)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Blockchain Trade Finance</h4>
                      <p className="text-sm text-purple-600">Smart contracts halal pour commerce international</p>
                      <Badge variant="outline">Q2 2025</Badge>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Crypto-Sharia Compliance Engine</h4>
                      <p className="text-sm text-green-600">Validation automatique cryptomonnaies halal</p>
                      <Badge variant="outline">Q3 2025</Badge>
                    </div>

                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Metaverse Banking Islamique</h4>
                      <p className="text-sm text-orange-600">Agences virtuelles 3D avec avatars respectueux</p>
                      <Badge variant="outline">Q4 2025</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Plan d'Action Recommandé</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Button className="h-20 flex flex-col gap-2">
                    <Calendar className="h-5 w-5" />
                    Phase 1: Bases
                    <span className="text-xs">Jan-Mar 2025</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Smartphone className="h-5 w-5" />
                    Phase 2: Digital
                    <span className="text-xs">Apr-Jun 2025</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Globe className="h-5 w-5" />
                    Phase 3: Innovation
                    <span className="text-xs">Jul-Sep 2025</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Star className="h-5 w-5" />
                    Phase 4: Leadership
                    <span className="text-xs">Oct-Dec 2025</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p className="mb-2">
            © 2025 CED Bank - Analyse Concurrentielle Banking Islamique - Yakoubi Yamina
          </p>
          <p>
            📊 Étude comparative basée sur données publiques 2024-2025 - Arabie Saoudite & Émirats Arabes Unis
          </p>
        </div>
      </div>
    </div>
  );
}