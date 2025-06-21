import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Crown,
  Star,
  Shield,
  TrendingUp,
  DollarSign,
  CreditCard,
  Brain,
  Gift,
  Building2,
  Globe,
  Code,
  Calculator,
  GraduationCap,
  Zap,
  ArrowRight,
  Eye,
  Settings,
  Plus
} from 'lucide-react';

interface PremiumFeature {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  route: string;
  status: 'available' | 'coming_soon' | 'beta';
  tier: 'standard' | 'premium' | 'elite';
}

export function PremiumBankingDashboard() {
  const [premiumFeatures] = useState<PremiumFeature[]>([
    {
      id: '1',
      title: 'Cartes Virtuelles Instantanées',
      description: 'Générez des cartes virtuelles avec contrôles granulaires pour donations crypto et investissements halal',
      icon: CreditCard,
      color: 'from-blue-500 to-blue-600',
      route: '/virtual-cards',
      status: 'available',
      tier: 'premium'
    },
    {
      id: '2',
      title: 'Assistant IA Financier',
      description: 'Conseils personnalisés conformes Charia avec prédictions IA et optimisation portfolio',
      icon: Brain,
      color: 'from-purple-500 to-purple-600',
      route: '/ai-advisor',
      status: 'available',
      tier: 'elite'
    },
    {
      id: '3',
      title: 'Cashback Halal & Fidélité',
      description: 'Remboursements redistribués en dons automatiques avec points convertibles en Zakat',
      icon: Gift,
      color: 'from-green-500 to-green-600',
      route: '/halal-cashback',
      status: 'available',
      tier: 'premium'
    },
    {
      id: '4',
      title: 'Marketplace Investissements',
      description: 'Sukuk, actions halal, crowdfunding immobilier et fonds conformes Charia',
      icon: Building2,
      color: 'from-orange-500 to-orange-600',
      route: '/islamic-investments',
      status: 'available',
      tier: 'elite'
    },
    {
      id: '5',
      title: 'Métaverse & NFT Halal',
      description: 'Propriétés virtuelles, NFT certifiés et expériences VR conformes principes islamiques',
      icon: Globe,
      color: 'from-pink-500 to-pink-600',
      route: '/metaverse-nft',
      status: 'beta',
      tier: 'elite'
    },
    {
      id: '6',
      title: 'API Banking Développeurs',
      description: 'SDK complet, webhooks et intégrations tierces pour applications fintech halal',
      icon: Code,
      color: 'from-gray-600 to-gray-700',
      route: '/developer-api',
      status: 'available',
      tier: 'elite'
    },
    {
      id: '7',
      title: 'Donations Crypto Dubai',
      description: 'Système avancé de donations Bitcoin depuis les plus grosses fortunes de Dubai',
      icon: Star,
      color: 'from-yellow-500 to-yellow-600',
      route: '/crypto-donations',
      status: 'available',
      tier: 'elite'
    },
    {
      id: '8',
      title: 'Convertisseur Instantané',
      description: 'Conversion temps réel avec animations fluides, 16+ devises halal et taux interbancaires',
      icon: Calculator,
      color: 'from-purple-500 to-indigo-600',
      route: '/convertisseur-instantane',
      status: 'available',
      tier: 'premium'
    },
    {
      id: '9',
      title: 'Système de Paiement Formations',
      description: 'Inscription et paiement direct sur compte bancaire professionnel pour toutes les formations',
      icon: GraduationCap,
      color: 'from-teal-500 to-cyan-600',
      route: '/formations-paiement',
      status: 'available',
      tier: 'premium'
    }
  ]);

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'standard': return 'bg-gray-100 text-gray-800';
      case 'premium': return 'bg-blue-100 text-blue-800';
      case 'elite': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'coming_soon': return 'bg-orange-100 text-orange-800';
      case 'beta': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return 'Disponible';
      case 'coming_soon': return 'Bientôt';
      case 'beta': return 'Beta';
      default: return '';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl">
            <Crown className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              CED Bank Premium
            </h1>
            <p className="text-gray-600 text-lg">
              Les 7 fonctionnalités exclusives qui attirent les plus grosses fortunes de Dubai
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-4">
          <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
            <Shield className="h-4 w-4 mr-2" />
            100% Conforme Charia
          </Badge>
          <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
            <Star className="h-4 w-4 mr-2" />
            Banking Premium
          </Badge>
          <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
            <TrendingUp className="h-4 w-4 mr-2" />
            IA Avancée
          </Badge>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-green-700">Portfolio Total</p>
                <p className="text-2xl font-bold text-green-800">$2.8M</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-blue-50 to-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-blue-700">Rendement YTD</p>
                <p className="text-2xl font-bold text-blue-800">+12.7%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-purple-50 border-purple-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-purple-700">Points Fidélité</p>
                <p className="text-2xl font-bold text-purple-800">8,450</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-orange-50 to-orange-50 border-orange-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Gift className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-orange-700">Donations Crypto</p>
                <p className="text-2xl font-bold text-orange-800">$1.4K</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Premium Features Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Fonctionnalités Exclusives CED Bank
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {premiumFeatures.map((feature) => (
            <Card 
              key={feature.id} 
              className="hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden"
              onClick={() => window.location.href = feature.route}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color}`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Badge className={getTierColor(feature.tier)}>
                      {feature.tier.charAt(0).toUpperCase() + feature.tier.slice(1)}
                    </Badge>
                    <Badge className={getStatusColor(feature.status)}>
                      {getStatusText(feature.status)}
                    </Badge>
                  </div>
                </div>
                
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="group-hover:bg-blue-50 group-hover:border-blue-300 transition-colors"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Explorer
                  </Button>
                  
                  <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
                    Accéder
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center">
            <Zap className="h-6 w-6 mr-3 text-yellow-400" />
            Actions Rapides Premium
          </CardTitle>
          <CardDescription className="text-gray-300">
            Accès direct aux fonctionnalités les plus utilisées par les fortunés de Dubai
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Nouvelle Carte Virtuelle', route: '/virtual-cards', icon: CreditCard },
              { label: 'Conseiller IA', route: '/ai-advisor', icon: Brain },
              { label: 'Investir Sukuk', route: '/islamic-investments', icon: Building2 },
              { label: 'Donation Bitcoin', route: '/crypto-donations', icon: Star }
            ].map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-16 flex flex-col space-y-2 bg-white/5 border-white/20 hover:bg-white/10 text-white"
                onClick={() => window.location.href = action.route}
              >
                <action.icon className="h-5 w-5" />
                <span className="text-sm">{action.label}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Crown className="h-8 w-8 text-yellow-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Banking d'Exception pour Fortunes d'Exception
              </h3>
            </div>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              CED Bank révolutionne la finance islamique avec des technologies de pointe, 
              des services sur mesure et une conformité Charia absolue. 
              Rejoignez l'élite financière de Dubai.
            </p>
            
            <div className="flex items-center justify-center space-x-4">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white">
                <Crown className="h-5 w-5 mr-2" />
                Devenir Client Elite
              </Button>
              
              <Button size="lg" variant="outline" className="border-yellow-600 text-yellow-700 hover:bg-yellow-50">
                <Settings className="h-5 w-5 mr-2" />
                Personnaliser Services
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}