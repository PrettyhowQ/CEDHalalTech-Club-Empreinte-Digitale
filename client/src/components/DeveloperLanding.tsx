import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Code2, 
  Rocket, 
  Globe, 
  TrendingUp,
  Users,
  DollarSign,
  Shield,
  Zap,
  Building,
  Star,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Smartphone,
  Coins,
  Crown,
  Target,
  Clock
} from 'lucide-react';

export function DeveloperLanding() {
  const [email, setEmail] = useState('');
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { value: '2.1B', label: 'Musulmans utilisateurs potentiels', growth: '+12%' },
    { value: '850M€', label: 'Marché fintech islamique 2025', growth: '+34%' },
    { value: '156', label: 'Pays avec populations musulmanes', growth: 'Stable' },
    { value: '73%', label: 'Demande services financiers halal', growth: '+18%' }
  ];

  const marketOpportunities = [
    {
      region: 'Moyen-Orient',
      market: '450M€',
      growth: '+45%',
      population: '180M musulmans',
      countries: ['EAU', 'Arabie Saoudite', 'Qatar', 'Koweït'],
      icon: Crown,
      color: 'from-amber-500 to-yellow-600'
    },
    {
      region: 'Asie-Pacifique',
      market: '1.2B€',
      growth: '+67%',
      population: '1.1B musulmans',
      countries: ['Indonésie', 'Malaisie', 'Pakistan', 'Bangladesh'],
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600'
    },
    {
      region: 'Europe',
      market: '280M€',
      growth: '+23%',
      population: '44M musulmans',
      countries: ['France', 'Allemagne', 'Royaume-Uni', 'Pays-Bas'],
      icon: Building,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      region: 'Afrique',
      market: '650M€',
      growth: '+89%',
      population: '678M musulmans',
      countries: ['Nigeria', 'Égypte', 'Maroc', 'Algérie'],
      icon: Globe,
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  const investmentHighlights = [
    {
      title: 'Marché Inexploité',
      value: '73%',
      description: 'des musulmans n\'ont pas accès à des services financiers conformes',
      impact: 'Opportunité de capture massive'
    },
    {
      title: 'Croissance Explosive',
      value: '+156%',
      description: 'croissance annuelle fintech islamique vs +23% fintech traditionnelle',
      impact: 'Secteur le plus dynamique'
    },
    {
      title: 'Barrières Élevées',
      value: '3 acteurs',
      description: 'seulement dans le monde offrent API Banking Halal complète',
      impact: 'Position dominante assurée'
    },
    {
      title: 'Revenus Récurrents',
      value: '94%',
      description: 'des clients fintech restent fidèles > 3 ans vs 67% banques',
      impact: 'Modèle économique solide'
    }
  ];

  const successStories = [
    {
      company: 'Tabby (Arabie Saoudite)',
      sector: 'Buy Now Pay Later Halal',
      funding: '200M$ Série D',
      growth: '15x en 18 mois',
      description: 'Paiements différés conformes Charia'
    },
    {
      company: 'Rain (EAU)',
      sector: 'Crypto Trading Halal',
      funding: '110M$ Série B',
      growth: '890% utilisateurs',
      description: 'Trading cryptomonnaies certifiées halal'
    },
    {
      company: 'Tamara (Arabie Saoudite)',
      sector: 'E-commerce Financing',
      funding: '340M$ Série C',
      growth: '1M+ marchands',
      description: 'Financement e-commerce sans intérêt'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-green-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl flex items-center justify-center">
                <Code2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  CED Banking API
                </h1>
                <p className="text-xl text-blue-200">La Révolution Fintech Islamique</p>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              L'API qui transforme <span className="text-green-400">2,1 milliards</span> de vies
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Première API Banking Halal mondiale permettant aux développeurs de créer 
              des services financiers conformes Charia pour le marché inexploité de 
              <span className="text-green-400 font-bold"> 850M€ </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4">
                <Rocket className="mr-2 h-5 w-5" />
                Démarrer Maintenant
              </Button>
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4">
                <BarChart3 className="mr-2 h-5 w-5" />
                Voir les Projections
              </Button>
            </div>

            {/* Métriques dynamiques */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    scale: activeMetric === index ? 1.05 : 1,
                    boxShadow: activeMetric === index ? '0 0 30px rgba(34, 197, 94, 0.3)' : 'none'
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20"
                >
                  <div className="text-3xl font-bold text-green-400 mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-300 mb-1">{metric.label}</div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    {metric.growth}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Opportunités de Marché */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Opportunités de Marché Mondiales</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              4 régions stratégiques représentant 2,4 milliards d'euros d'opportunités 
              dans la fintech islamique d'ici 2027
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketOpportunities.map((market, index) => (
              <motion.div
                key={market.region}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className={`w-12 h-12 bg-gradient-to-r ${market.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <market.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-center text-white">{market.region}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <div className="text-2xl font-bold text-green-400">{market.market}</div>
                    <Badge className="bg-green-500/20 text-green-400">{market.growth}</Badge>
                    <div className="text-gray-300">{market.population}</div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {market.countries.map((country) => (
                        <Badge key={country} variant="outline" className="text-xs border-white/20 text-white/70">
                          {country}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Arguments Investisseurs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Pourquoi Investir Maintenant ?</h2>
            <p className="text-xl text-gray-300">Arguments décisifs pour les investisseurs du Golfe</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-blue-900/30 to-green-900/30 border-blue-500/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-4xl font-bold text-green-400">{highlight.value}</div>
                    <p className="text-gray-300 text-sm">{highlight.description}</p>
                    <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                      <div className="text-green-400 font-medium text-sm">{highlight.impact}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Success Stories Fintech Islamique</h2>
            <p className="text-xl text-gray-300">Licornes du Golfe qui prouvent le potentiel du secteur</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                        <Crown className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white">{story.company}</CardTitle>
                        <p className="text-gray-400 text-sm">{story.sector}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-green-500/10 rounded-lg">
                        <div className="text-green-400 font-bold">{story.funding}</div>
                        <div className="text-gray-400 text-xs">Financement</div>
                      </div>
                      <div className="text-center p-3 bg-blue-500/10 rounded-lg">
                        <div className="text-blue-400 font-bold">{story.growth}</div>
                        <div className="text-gray-400 text-xs">Croissance</div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">{story.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projection ROI */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Projections ROI CED Banking API</h2>
            <p className="text-xl text-gray-300">Modèle économique démontré et projections conservatrices</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-white text-xl">Revenus Projetés (3 ans)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                    <span className="text-gray-300">2025 (MVP)</span>
                    <span className="text-green-400 font-bold text-xl">2.8M€</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                    <span className="text-gray-300">2026 (Expansion)</span>
                    <span className="text-green-400 font-bold text-xl">12.5M€</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg border border-green-500/30">
                    <span className="text-white font-medium">2027 (Dominance)</span>
                    <span className="text-green-400 font-bold text-2xl">34.2M€</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">ROI 1,240%</div>
                    <div className="text-gray-300">Sur investissement initial 900K€</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-white text-xl">Métriques Clés 2027</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">2.5K+</div>
                    <div className="text-gray-400 text-sm">Développeurs actifs</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">150M+</div>
                    <div className="text-gray-400 text-sm">Appels API/mois</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">85%</div>
                    <div className="text-gray-400 text-sm">Part marché API</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-amber-400">12 pays</div>
                    <div className="text-gray-400 text-sm">Présence mondiale</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Marge brute</span>
                    <span className="text-green-400 font-bold">89%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Coût acquisition</span>
                    <span className="text-blue-400 font-bold">45€</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">LTV/CAC ratio</span>
                    <span className="text-purple-400 font-bold">28:1</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Rejoignez la Révolution Fintech Islamique</h2>
          <p className="text-xl text-gray-300 mb-8">
            Opportunité unique d'investir dans la première API Banking Halal mondiale 
            avant l'explosion du marché de 850M€
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-3 justify-center">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <span className="text-white">Marché inexploité 73%</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <span className="text-white">Croissance +156% annuelle</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <span className="text-white">ROI projeté 1,240%</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-12 py-4">
              <Target className="mr-2 h-5 w-5" />
              Investir Maintenant
            </Button>
            <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-12 py-4">
              <Clock className="mr-2 h-5 w-5" />
              Planifier Rendez-vous
            </Button>
          </div>

          <div className="mt-8 text-gray-400">
            <p>Contact investisseurs : investors@ced-bank.com | +971-4-XXX-XXXX Dubai</p>
          </div>
        </div>
      </section>
    </div>
  );
}