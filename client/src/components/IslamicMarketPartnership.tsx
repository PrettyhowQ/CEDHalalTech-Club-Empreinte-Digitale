import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Crown,
  Handshake,
  TrendingUp,
  Globe,
  Building,
  Users,
  DollarSign,
  Star,
  Target,
  Rocket,
  Shield,
  Award,
  Zap,
  Heart,
  CheckCircle,
  ArrowRight,
  Plus,
  Gem,
  Trophy,
  MapPin,
  Clock
} from 'lucide-react';

export function IslamicMarketPartnership() {
  const [activeTab, setActiveTab] = useState('ecosystem');
  const [partnershipMetrics, setPartnershipMetrics] = useState({
    totalPartners: 0,
    combinedMarketCap: 0,
    globalReach: 0
  });

  // Animation métriques partenariat
  useEffect(() => {
    const interval = setInterval(() => {
      setPartnershipMetrics(prev => ({
        totalPartners: Math.min(prev.totalPartners + 1, 47),
        combinedMarketCap: Math.min(prev.combinedMarketCap + 2.5, 285),
        globalReach: Math.min(prev.globalReach + 1, 156)
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const strategicPartners = [
    {
      category: 'Banques Islamiques Mondiales',
      color: 'from-green-500 to-emerald-600',
      icon: Building,
      partners: [
        {
          name: 'Islamic Development Bank',
          country: 'Arabie Saoudite',
          marketCap: '45B€',
          customers: '57 pays membres',
          partnershipValue: 'Infrastructure globale + financement développement',
          flag: '🇸🇦',
          status: 'Priorité 1'
        },
        {
          name: 'Dubai Islamic Bank',
          country: 'EAU',
          marketCap: '12.8B€',
          customers: '5.2M',
          partnershipValue: 'Leadership MENA + innovation digitale',
          flag: '🇦🇪',
          status: 'Négociation'
        },
        {
          name: 'Al Rajhi Bank',
          country: 'Arabie Saoudite',
          marketCap: '35B€',
          customers: '8.5M',
          partnershipValue: 'Plus grande banque islamique + distribution',
          flag: '🇸🇦',
          status: 'Contact établi'
        },
        {
          name: 'Kuwait Finance House',
          country: 'Koweït',
          marketCap: '18.5B€',
          customers: '3.8M',
          partnershipValue: 'Innovation fintech + expertise Takaful',
          flag: '🇰🇼',
          status: 'Intérêt confirmé'
        }
      ]
    },
    {
      category: 'Compagnies Takaful Leaders',
      color: 'from-blue-500 to-cyan-600',
      icon: Shield,
      partners: [
        {
          name: 'Islamic Insurance Co',
          country: 'Arabie Saoudite',
          marketCap: '8.2B€',
          customers: '2.1M',
          partnershipValue: 'Expertise Takaful + réseau distribution',
          flag: '🇸🇦',
          status: 'Proposition envoyée'
        },
        {
          name: 'Takaful Emarat',
          country: 'EAU',
          marketCap: '1.8B€',
          customers: '850K',
          partnershipValue: 'Innovation assurance + digitalisation',
          flag: '🇦🇪',
          status: 'Rendez-vous programmé'
        },
        {
          name: 'Malaysia Takaful',
          country: 'Malaisie',
          marketCap: '3.5B€',
          customers: '1.5M',
          partnershipValue: 'Expertise Asie + certification Charia',
          flag: '🇲🇾',
          status: 'Intérêt mutuel'
        }
      ]
    },
    {
      category: 'Fonds Souverains & Investisseurs',
      color: 'from-amber-500 to-yellow-600',
      icon: Crown,
      partners: [
        {
          name: 'Public Investment Fund',
          country: 'Arabie Saoudite',
          marketCap: '925B€',
          customers: 'Fonds souverain',
          partnershipValue: 'Financement massif + Vision 2030',
          flag: '🇸🇦',
          status: 'Approche directe'
        },
        {
          name: 'Abu Dhabi Investment Authority',
          country: 'EAU',
          marketCap: '650B€',
          customers: 'Fonds souverain',
          partnershipValue: 'Capital patient + réseau mondial',
          flag: '🇦🇪',
          status: 'Présentation prévue'
        },
        {
          name: 'Qatar Investment Authority',
          country: 'Qatar',
          marketCap: '450B€',
          customers: 'Fonds souverain',
          partnershipValue: 'Diversification + innovation tech',
          flag: '🇶🇦',
          status: 'Contact initial'
        }
      ]
    },
    {
      category: 'Conglomérats & Holdings',
      color: 'from-purple-500 to-indigo-600',
      icon: Building,
      partners: [
        {
          name: 'Dar Al Arkan',
          country: 'Arabie Saoudite',
          marketCap: '4.2B€',
          customers: 'Real Estate',
          partnershipValue: 'Financement immobilier halal + clients VIP',
          flag: '🇸🇦',
          status: 'Synergies identifiées'
        },
        {
          name: 'Emaar Properties',
          country: 'EAU',
          marketCap: '12.8B€',
          customers: 'Développement',
          partnershipValue: 'Écosystème lifestyle + financement projets',
          flag: '🇦🇪',
          status: 'Discussions avancées'
        },
        {
          name: 'Genting Malaysia',
          country: 'Malaisie',
          marketCap: '6.5B€',
          customers: 'Diversifié',
          partnershipValue: 'Expansion Asie + services halal',
          flag: '🇲🇾',
          status: 'Évaluation mutuelle'
        }
      ]
    }
  ];

  const partnershipModels = [
    {
      title: 'Alliance Stratégique Premium',
      description: 'Partenariat exclusif avec revenus partagés',
      benefits: [
        'Intégration API complète',
        'Co-branding produits',
        'Partage revenus 30/70',
        'Support technique dédié',
        'Formation équipes incluse'
      ],
      investment: '0€ - Revenus partagés',
      duration: '5 ans renouvelable',
      exclusivity: 'Territoire exclusif',
      icon: Crown,
      color: 'from-amber-500 to-yellow-600',
      cta: 'Devenir Partenaire Premium'
    },
    {
      title: 'Partenariat Technologique',
      description: 'Intégration API avec support complet',
      benefits: [
        'Licence API préférentielle',
        'SDK personnalisé',
        'Formation développeurs',
        'Support prioritaire',
        'Marketing conjoint'
      ],
      investment: 'Licence réduite -50%',
      duration: '3 ans',
      exclusivity: 'Non-exclusif',
      icon: Zap,
      color: 'from-blue-500 to-cyan-600',
      cta: 'Intégrer API CED'
    },
    {
      title: 'Consortium Halal',
      description: 'Alliance multiple acteurs pour domination marché',
      benefits: [
        'Gouvernance partagée',
        'Standards communs',
        'Mutualisation R&D',
        'Lobbying réglementaire',
        'Expansion coordonnée'
      ],
      investment: 'Quote-part selon taille',
      duration: '10 ans',
      exclusivity: 'Membres seulement',
      icon: Users,
      color: 'from-green-500 to-emerald-600',
      cta: 'Rejoindre Consortium'
    }
  ];

  const ecosystemBenefits = [
    {
      title: 'Soutien Financier Mutuel',
      description: 'Financement croisé et garanties bancaires solidaires',
      metrics: [
        { label: 'Fonds de garantie consortium', value: '500M€' },
        { label: 'Lignes de crédit partagées', value: '2B€' },
        { label: 'Assurance crédit Al-Aman CED', value: '100% couverture' }
      ],
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Protection Sécurité Collective',
      description: 'Cybersécurité mutualisée et protection des données',
      metrics: [
        { label: 'SOC partagé 24/7', value: 'Dubai + Riyadh' },
        { label: 'Assurance cyber Al-Aman', value: '1B€ couverture' },
        { label: 'Certification sécurité', value: 'ISO 27001 groupe' }
      ],
      icon: Shield,
      color: 'text-blue-600'
    },
    {
      title: 'Confiance Institutionnelle',
      description: 'Crédibilité renforcée par l\'union des leaders islamiques',
      metrics: [
        { label: 'Certification Charia collective', value: 'Consensus oulémas' },
        { label: 'Caution morale partagée', value: 'Réputation solidaire' },
        { label: 'Audit conformité mutualisé', value: 'Standards unifiés' }
      ],
      icon: Heart,
      color: 'text-purple-600'
    },
    {
      title: 'Innovation Technologique Partagée',
      description: 'R&D mutualisée pour dominer la fintech islamique',
      metrics: [
        { label: 'Budget R&D combiné', value: '150M€/an' },
        { label: 'Développeurs mobilisés', value: '2,500+' },
        { label: 'Brevets déposés', value: '50+/an' }
      ],
      icon: Rocket,
      color: 'text-amber-600'
    }
  ];

  const callToAction = {
    title: 'Rejoignez la Révolution Banking Halal',
    subtitle: 'Ensemble, dominons le marché de 2,1 milliards de musulmans',
    urgency: 'Fenêtre d\'opportunité : 18 mois avant saturation',
    nextSteps: [
      'Rendez-vous CEO dans 48h',
      'Due diligence accélérée',
      'Signature partenariat J+30',
      'Déploiement T1 2025'
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-green-400 rounded-2xl flex items-center justify-center">
                <Handshake className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-green-400 bg-clip-text text-transparent">
                  Alliance Islamique CED
                </h1>
                <p className="text-xl text-green-200">Unissons-nous pour dominer le marché halal mondial</p>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Que tout le marché islamique se batte pour être <span className="text-amber-400">à nos côtés</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Plutôt que de nous concurrencer, rejoignez l'écosystème CED Banking API protégé par 
              <span className="text-green-400 font-bold">CED Bank (soutien financier)</span> + 
              <span className="text-blue-400 font-bold">Al-Aman CED (protection sécurité)</span> + 
              <span className="text-purple-400 font-bold">Confiance collective</span>
            </p>

            {/* Avantages protection immédiate */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-5xl mx-auto">
              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30 text-center">
                <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <h3 className="text-green-400 font-bold">Support Financier</h3>
                <p className="text-green-300 text-sm">Garanties CED Bank + lignes crédit solidaires</p>
              </div>
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30 text-center">
                <Shield className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <h3 className="text-blue-400 font-bold">Protection Sécurité</h3>
                <p className="text-blue-300 text-sm">Al-Aman CED cyber + SOC 24/7</p>
              </div>
              <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30 text-center">
                <Heart className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <h3 className="text-purple-400 font-bold">Confiance Mutuelle</h3>
                <p className="text-purple-300 text-sm">Réputation solidaire + certification Charia</p>
              </div>
            </div>

            {/* Métriques partenariat temps réel */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20"
              >
                <div className="text-3xl font-bold text-amber-400 mb-2">{partnershipMetrics.totalPartners}</div>
                <div className="text-sm text-gray-300">Partenaires Stratégiques Identifiés</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20"
              >
                <div className="text-3xl font-bold text-green-400 mb-2">{partnershipMetrics.combinedMarketCap}B€</div>
                <div className="text-sm text-gray-300">Capitalisation Combinée</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">{partnershipMetrics.globalReach}</div>
                <div className="text-sm text-gray-300">Pays de Présence Combinée</div>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4">
                <Crown className="mr-2 h-5 w-5" />
                Devenir Partenaire Premium
              </Button>
              <Button size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4">
                <Handshake className="mr-2 h-5 w-5" />
                Rejoindre l'Alliance
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/10">
            <TabsTrigger value="ecosystem" className="text-white">Écosystème Partenaires</TabsTrigger>
            <TabsTrigger value="models" className="text-white">Modèles Partenariat</TabsTrigger>
            <TabsTrigger value="benefits" className="text-white">Bénéfices Mutuels</TabsTrigger>
            <TabsTrigger value="action" className="text-white">Plan d'Action</TabsTrigger>
          </TabsList>

          {/* Écosystème Partenaires */}
          <TabsContent value="ecosystem" className="space-y-8">
            {strategicPartners.map((category, categoryIndex) => (
              <div key={category.category} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.partners.map((partner, index) => (
                    <motion.div
                      key={partner.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                    >
                      <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <span className="text-3xl">{partner.flag}</span>
                              <div>
                                <CardTitle className="text-white">{partner.name}</CardTitle>
                                <p className="text-gray-400 text-sm">{partner.country}</p>
                              </div>
                            </div>
                            <Badge 
                              className={
                                partner.status === 'Priorité 1' ? 'bg-red-500 text-white' :
                                partner.status === 'Négociation' ? 'bg-amber-500 text-white' :
                                partner.status === 'Contact établi' ? 'bg-blue-500 text-white' :
                                'bg-green-500 text-white'
                              }
                            >
                              {partner.status}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-gray-400">Capitalisation</div>
                              <div className="text-white font-bold">{partner.marketCap}</div>
                            </div>
                            <div>
                              <div className="text-gray-400">Clients/Portée</div>
                              <div className="text-white font-bold">{partner.customers}</div>
                            </div>
                          </div>
                          
                          <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                            <div className="text-blue-400 font-medium text-sm mb-1">Valeur Partenariat:</div>
                            <div className="text-blue-300 text-sm">{partner.partnershipValue}</div>
                          </div>
                          
                          <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                            <Handshake className="mr-2 h-4 w-4" />
                            Initier Partenariat
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Modèles Partenariat */}
          <TabsContent value="models" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {partnershipModels.map((model, index) => (
                <motion.div
                  key={model.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                    <CardHeader>
                      <div className={`w-12 h-12 bg-gradient-to-r ${model.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <model.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-center text-white text-xl">{model.title}</CardTitle>
                      <p className="text-center text-gray-300">{model.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        {model.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="space-y-2 pt-4 border-t border-white/10">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Investissement:</span>
                          <span className="text-white font-medium">{model.investment}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Durée:</span>
                          <span className="text-white font-medium">{model.duration}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Exclusivité:</span>
                          <span className="text-white font-medium">{model.exclusivity}</span>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        {model.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Proposition de valeur consortium avec sécurité CED */}
            <Card className="bg-gradient-to-r from-amber-900/30 to-green-900/30 border-amber-500/30">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-amber-400">
                  Consortium Banking Halal Mondial - Protection CED
                </CardTitle>
                <p className="text-center text-gray-300">
                  Créons ensemble le premier consortium fintech islamique sécurisé par l'écosystème CED
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-2" />
                    <h4 className="text-green-400 font-bold">Soutien Financier CED</h4>
                    <p className="text-gray-300 text-sm">Garanties bancaires + lignes crédit solidaires</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <Shield className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <h4 className="text-blue-400 font-bold">Protection Al-Aman CED</h4>
                    <p className="text-gray-300 text-sm">Assurance cyber + sécurité mutualisée</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <Heart className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <h4 className="text-purple-400 font-bold">Confiance Collective</h4>
                    <p className="text-gray-300 text-sm">Réputation solidaire + certification Charia</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <Gem className="h-8 w-8 text-amber-400 mx-auto mb-2" />
                    <h4 className="text-amber-400 font-bold">Innovation Mutualisée</h4>
                    <p className="text-gray-300 text-sm">R&D partagée + brevets collectifs</p>
                  </div>
                </div>

                {/* Avantages sécurité spécifiques */}
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-900/30 to-green-900/30 rounded-lg border border-blue-500/30">
                  <h4 className="text-center text-lg font-bold text-blue-400 mb-4">Écosystème de Protection CED Bank + Al-Aman CED</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-white text-sm">Fonds de garantie consortium 500M€</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-white text-sm">Assurance cyber 1B€ couverture Al-Aman</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-white text-sm">SOC sécurité 24/7 Dubai + Riyadh</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-white text-sm">Certification Charia collective consensus</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-white text-sm">Réputation solidaire mutuelle</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-white text-sm">Standards conformité unifiés</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bénéfices Mutuels */}
          <TabsContent value="benefits" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {ecosystemBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white/5 border-white/10 h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                      </div>
                      <CardTitle className="text-center text-white">{benefit.title}</CardTitle>
                      <p className="text-center text-gray-300 text-sm">{benefit.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {benefit.metrics.map((metric, idx) => (
                          <div key={idx} className="flex justify-between items-center p-2 bg-white/5 rounded">
                            <span className="text-gray-400 text-sm">{metric.label}</span>
                            <span className="text-white font-bold text-sm">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Simulation ROI collectif */}
            <Card className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-green-400">
                  Simulation ROI Collectif 2025-2027
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-white/5 rounded-lg">
                    <div className="text-4xl font-bold text-green-400 mb-2">12.5X</div>
                    <div className="text-green-300 font-medium">Multiplicateur Revenus</div>
                    <div className="text-gray-400 text-sm mt-2">vs croissance isolée</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-lg">
                    <div className="text-4xl font-bold text-blue-400 mb-2">75%</div>
                    <div className="text-blue-300 font-medium">Part Marché Collective</div>
                    <div className="text-gray-400 text-sm mt-2">Domination garantie</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-lg">
                    <div className="text-4xl font-bold text-amber-400 mb-2">2.4B€</div>
                    <div className="text-amber-300 font-medium">Marché Total 2027</div>
                    <div className="text-gray-400 text-sm mt-2">Expansion naturelle</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Plan d'Action */}
          <TabsContent value="action" className="space-y-6">
            <Card className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-red-400">
                  {callToAction.title}
                </CardTitle>
                <p className="text-center text-xl text-orange-300">
                  {callToAction.subtitle}
                </p>
                <div className="text-center">
                  <Badge className="bg-red-500 text-white px-4 py-2">
                    <Clock className="mr-2 h-4 w-4" />
                    {callToAction.urgency}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {callToAction.nextSteps.map((step, index) => (
                    <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                        {index + 1}
                      </div>
                      <div className="text-white font-medium">{step}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contacts prioritaires */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Contacts CEO Prioritaires</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: 'Mohammed Al-Shaikh', role: 'CEO Al Rajhi Bank', priority: 'Immédiat', phone: '+966-11-XXX-XXXX' },
                    { name: 'Dr. Adnan Ahmad Yousif', role: 'President Al Baraka', priority: 'Cette semaine', phone: '+973-17-XXX-XXX' },
                    { name: 'Abdul Aziz Al Ghurair', role: 'CEO Mashreq Bank', priority: 'Ce mois', phone: '+971-4-XXX-XXXX' }
                  ].map((contact, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <div>
                        <div className="text-white font-medium">{contact.name}</div>
                        <div className="text-gray-400 text-sm">{contact.role}</div>
                        <div className="text-gray-500 text-xs">{contact.phone}</div>
                      </div>
                      <Badge className={
                        contact.priority === 'Immédiat' ? 'bg-red-500 text-white' :
                        contact.priority === 'Cette semaine' ? 'bg-amber-500 text-white' :
                        'bg-green-500 text-white'
                      }>
                        {contact.priority}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Proposition de Valeur Unifiée CED</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                      <h4 className="text-green-400 font-bold mb-2">Pour les Banques - Support Financier CED</h4>
                      <p className="text-green-300 text-sm">
                        • API Banking prête + 25+ langages + clients développeurs<br/>
                        • <strong>Garanties bancaires CED + lignes crédit mutuelles</strong><br/>
                        • Revenus partagés 30/70 sans investissement initial
                      </p>
                    </div>
                    <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <h4 className="text-blue-400 font-bold mb-2">Pour les Assureurs - Protection Al-Aman CED</h4>
                      <p className="text-blue-300 text-sm">
                        • Distribution bancaire + produits intégrés + conformité auto<br/>
                        • <strong>Assurance cyber 1B€ + SOC sécurité 24/7</strong><br/>
                        • Mutualisation risques + expansion mondiale sécurisée
                      </p>
                    </div>
                    <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
                      <h4 className="text-amber-400 font-bold mb-2">Pour les Investisseurs - Confiance CED</h4>
                      <p className="text-amber-300 text-sm">
                        • ROI 12.5X + marché vierge + position dominante<br/>
                        • <strong>Certification Charia collective + réputation solidaire</strong><br/>
                        • Fonds garantie 500M€ + audit conformité mutualisé
                      </p>
                    </div>
                    <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <h4 className="text-purple-400 font-bold mb-2">Protection Écosystème Complète</h4>
                      <p className="text-purple-300 text-sm">
                        • <strong>Soutien financier:</strong> CED Bank garanties + crédit solidaire<br/>
                        • <strong>Sécurité:</strong> Al-Aman CED cyber + protection données<br/>
                        • <strong>Confiance:</strong> Réputation mutuelle + standards unifiés
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Boutons d'action finals */}
            <div className="text-center space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white py-6">
                  <Crown className="mr-2 h-6 w-6" />
                  Devenir Partenaire Fondateur
                  <Badge className="ml-2 bg-yellow-500 text-black px-2 py-1">Exclusif</Badge>
                </Button>
                <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6">
                  <Handshake className="mr-2 h-6 w-6" />
                  Rejoindre le Consortium
                  <Badge className="ml-2 bg-green-500 text-white px-2 py-1">Ouvert</Badge>
                </Button>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
                <h3 className="text-xl font-bold text-purple-400 mb-2">Contact Direct CEO</h3>
                <p className="text-purple-300 mb-4">
                  Yakoubi Yamina - Fondatrice CED Banking Ecosystem
                </p>
                <div className="flex justify-center gap-4">
                  <span className="text-white">📧 partnerships@ced-bank.com</span>
                  <span className="text-white">📱 +971-50-XXX-XXXX</span>
                  <span className="text-white">🏢 Dubai, EAU</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}