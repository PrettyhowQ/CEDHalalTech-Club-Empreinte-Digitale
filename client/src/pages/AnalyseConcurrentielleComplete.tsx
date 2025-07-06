import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Crown, Shield, TrendingUp, Globe, Users, Zap, Star, Target, Award, Banknote, Smartphone } from "lucide-react";

export default function AnalyseConcurrentielleComplete() {
  const competitors = [
    {
      name: "Wahed Invest",
      market: "Global",
      assets: "250M USD",
      users: "20K+",
      strengths: ["Robo-advisor", "Automated portfolios", "Shar'iah board"],
      weaknesses: ["Minimum $100", "Limited services", "No banking"],
      rating: 7.5
    },
    {
      name: "Zoya",
      market: "USA/Global", 
      assets: "250M USD",
      users: "Monthly 20K+",
      strengths: ["Halal stock screening", "Investment research", "API B2B"],
      weaknesses: ["Investment only", "No banking", "No insurance"],
      rating: 8.0
    },
    {
      name: "Musaffa",
      market: "180+ countries",
      assets: "Non divulgué",
      users: "Global",
      strengths: ["Stock screening", "Purification calc", "Zakat automation"],
      weaknesses: ["$60-120/year", "Trading focus", "No ecosystem"],
      rating: 7.8
    },
    {
      name: "ila Bank",
      market: "Bahrain",
      assets: "500M+ USD",
      users: "50K+", 
      strengths: ["Prize savings", "Group savings", "Fatema AI"],
      weaknesses: ["Regional only", "Limited tech", "No prestige services"],
      rating: 7.2
    },
    {
      name: "Sarwa",
      market: "UAE",
      assets: "100M+ USD",
      users: "15K+",
      strengths: ["7 risk levels", "Sharia ETFs", "Robo-advisor"],
      weaknesses: ["$500 minimum", "Regional", "No complete ecosystem"],
      rating: 7.6
    }
  ];

  const cedAdvantages = [
    {
      category: "Écosystème Complet",
      icon: Crown,
      features: [
        "Bank CED + Al-Aman Takaful + Garage Al-Amana intégrés",
        "78+ langues vs 2-3 chez concurrents",
        "Super IARP Pro IA vs aucune IA complète",
        "Web TV Halal vs aucune plateforme média",
        "TechForAll économie solidaire unique"
      ],
      advantage: "RÉVOLUTIONNAIRE"
    },
    {
      category: "Services Financiers",
      icon: Banknote,
      features: [
        "0% minimum vs $100-500 concurrents",
        "27,446+ règles Fiqh vs screening basique",
        "150+ scholars validation vs 3-5",
        "Voitures prestige + financement halal unique",
        "Multi-devises CHF/AED/USD/EUR vs 1-2"
      ],
      advantage: "SUPÉRIEUR"
    },
    {
      category: "Innovation Technologique", 
      icon: Zap,
      features: [
        "Quantum Halal Trading prévu vs technologies classiques",
        "Blockchain Zakat vs calcul manuel",
        "Mode prière automatique vs inexistant",
        "Cloud Halal 100% vs infrastructure mixte",
        "Assistant vocal féminin validé scholars unique"
      ],
      advantage: "AVANT-GARDISTE"
    },
    {
      category: "Conformité Religieuse",
      icon: Shield,
      features: [
        "4 sources authentiques (Coran/Sunna/Ijmâ'/Qiyâs)",
        "Supervision 24/7 comité Sharia vs consultations ponctuelles",
        "Clause 'IA Non-Mufti' protection juridique unique", 
        "Certification AAOIFI/IFSB vs certifications locales",
        "Validation 4 écoles juridiques vs 1-2"
      ],
      advantage: "AUTHENTIQUE"
    }
  ];

  const marketGaps = [
    {
      gap: "Écosystème Intégré",
      competitor: "Tous",
      solution: "CED unifie banque + assurance + garage + média + IA",
      impact: "Révolutionnaire"
    },
    {
      gap: "Services Automobile Halal",
      competitor: "Aucun concurrent",
      solution: "Al-Amana Auto Halal - Yakoubi Farid unique au monde",
      impact: "Monopole"
    },
    {
      gap: "Formation Tech Islamique",
      competitor: "Inexistant",
      solution: "Institut CED Academy avec 10 formations certifiées",
      impact: "Leadership"
    },
    {
      gap: "IA Éthique Validée Scholars",
      competitor: "Tous",
      solution: "Super IARP Pro avec 150+ scholars validation",
      impact: "Innovation"
    },
    {
      gap: "Multilingue 78+ Langues",
      competitor: "Tous limités 2-3",
      solution: "Support complet communauté musulmane mondiale",
      impact: "Global"
    },
    {
      gap: "Web TV Islamique",
      competitor: "Inexistant",
      solution: "Plateforme complète avec 6 chaînes spécialisées", 
      impact: "Pionnier"
    }
  ];

  const newFeatures = [
    {
      name: "Hajj Savings Planner",
      description: "Épargne automatique pour pèlerinage avec calcul coûts pays",
      competitor: "Aucun",
      implementation: "Q2 2025"
    },
    {
      name: "Nikah Financial Planning",
      description: "Planification financière mariage islamique complète",
      competitor: "Inexistant",
      implementation: "Q2 2025"
    },
    {
      name: "Mahr Calculator & Management",
      description: "Calcul et gestion dot islamique selon traditions",
      competitor: "Aucun",
      implementation: "Q3 2025"
    },
    {
      name: "Waqf Digital Management",
      description: "Gestion donations religieuses avec blockchain transparence",
      competitor: "Basique seulement",
      implementation: "Q3 2025"
    },
    {
      name: "Islamic Estate Planning",
      description: "Héritage selon lois islamiques avec calcul parts",
      competitor: "Très limité",
      implementation: "Q4 2025"
    },
    {
      name: "Quran Recitation Rewards",
      description: "Points de fidélité pour lecture Coran convertibles avantages",
      competitor: "Inexistant",
      implementation: "Q1 2026"
    },
    {
      name: "Halal Business Directory",
      description: "Annuaire entreprises certifiées halal avec évaluations",
      competitor: "Fragmenté",
      implementation: "Q1 2026"
    },
    {
      name: "Islamic Carbon Credits",
      description: "Crédits carbone conformes Sharia pour compensation écologique",
      competitor: "Aucun",
      implementation: "Q2 2026"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Crown className="h-8 w-8 text-yellow-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
              Analyse Concurrentielle Complète
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            🏆 CED HalalTech™ vs Concurrents Mondiaux - Domination Totale du Marché
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
              <TrendingUp className="h-4 w-4 mr-1" />
              Marché $5.9T prévu 2026
            </Badge>
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
              <Globe className="h-4 w-4 mr-1" />
              1.9B musulmans mondiaux
            </Badge>
            <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-300">
              <Users className="h-4 w-4 mr-1" />
              Croissance 21% vs 15%
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="competitors" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="competitors">Concurrents</TabsTrigger>
            <TabsTrigger value="advantages">Nos Avantages</TabsTrigger>
            <TabsTrigger value="gaps">Opportunités</TabsTrigger>
            <TabsTrigger value="roadmap">Innovations Futures</TabsTrigger>
          </TabsList>

          {/* Analyse Concurrents */}
          <TabsContent value="competitors">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {competitors.map((competitor, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {competitor.name}
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">{competitor.rating}/10</span>
                      </div>
                    </CardTitle>
                    <CardDescription>
                      <div className="space-y-1">
                        <div>🌍 {competitor.market}</div>
                        <div>💰 {competitor.assets}</div>
                        <div>👥 {competitor.users}</div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-green-700 mb-2">✅ Forces</h4>
                        <ul className="space-y-1 text-sm">
                          {competitor.strengths.map((strength, idx) => (
                            <li key={idx} className="text-green-600">• {strength}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-red-700 mb-2">❌ Faiblesses</h4>
                        <ul className="space-y-1 text-sm">
                          {competitor.weaknesses.map((weakness, idx) => (
                            <li key={idx} className="text-red-600">• {weakness}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Nos Avantages */}
          <TabsContent value="advantages">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {cedAdvantages.map((advantage, index) => (
                <Card key={index} className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-amber-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <advantage.icon className="h-6 w-6 text-yellow-600" />
                      {advantage.category}
                      <Badge className={`ml-auto ${
                        advantage.advantage === 'RÉVOLUTIONNAIRE' ? 'bg-red-600' :
                        advantage.advantage === 'SUPÉRIEUR' ? 'bg-green-600' :
                        advantage.advantage === 'AVANT-GARDISTE' ? 'bg-purple-600' :
                        'bg-blue-600'
                      }`}>
                        {advantage.advantage}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {advantage.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Opportunités Marché */}
          <TabsContent value="gaps">
            <div className="space-y-6">
              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-800">🎯 Opportunités Marché Identifiées</CardTitle>
                  <CardDescription>Lacunes concurrentielles que CED exploite</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {marketGaps.map((gap, index) => (
                      <Card key={index} className="bg-white">
                        <CardContent className="p-4">
                          <div className="space-y-2">
                            <h4 className="font-bold text-emerald-700">{gap.gap}</h4>
                            <p className="text-xs text-gray-600">Concurrent: {gap.competitor}</p>
                            <p className="text-sm text-emerald-800">{gap.solution}</p>
                            <Badge variant="outline" className={`text-xs ${
                              gap.impact === 'Révolutionnaire' ? 'border-red-300 text-red-700' :
                              gap.impact === 'Monopole' ? 'border-purple-300 text-purple-700' :
                              gap.impact === 'Leadership' ? 'border-blue-300 text-blue-700' :
                              gap.impact === 'Innovation' ? 'border-green-300 text-green-700' :
                              gap.impact === 'Global' ? 'border-yellow-300 text-yellow-700' :
                              'border-cyan-300 text-cyan-700'
                            }`}>
                              {gap.impact}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Roadmap Innovations */}
          <TabsContent value="roadmap">
            <div className="space-y-6">
              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-800">🚀 Roadmap Innovations Futures</CardTitle>
                  <CardDescription>Fonctionnalités révolutionnaires en développement</CardDescription>
                </CardHeader>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {newFeatures.map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between text-lg">
                        {feature.name}
                        <Badge variant="outline" className="bg-purple-100 text-purple-800">
                          {feature.implementation}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="text-sm">
                        <div className="space-y-2">
                          <p>{feature.description}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs">Concurrent:</span>
                            <Badge variant="secondary" className={`text-xs ${
                              feature.competitor === 'Aucun' || feature.competitor === 'Inexistant' ? 
                              'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {feature.competitor}
                            </Badge>
                          </div>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                        <Target className="h-4 w-4 mr-1" />
                        Priorité Développement
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Conclusion */}
        <Card className="border-2 border-yellow-400 bg-gradient-to-r from-yellow-50 to-amber-50">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-yellow-800">
              🏆 CED HalalTech™ - Position Dominante Confirmée
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <Award className="h-12 w-12 text-yellow-600 mx-auto" />
                <h3 className="font-bold text-yellow-800">Leader Incontesté</h3>
                <p className="text-sm text-yellow-700">Seul écosystème complet intégré</p>
              </div>
              <div className="space-y-2">
                <Smartphone className="h-12 w-12 text-yellow-600 mx-auto" />
                <h3 className="font-bold text-yellow-800">Innovation Technologique</h3>
                <p className="text-sm text-yellow-700">IA + Blockchain + Web TV unique</p>
              </div>
              <div className="space-y-2">
                <Globe className="h-12 w-12 text-yellow-600 mx-auto" />
                <h3 className="font-bold text-yellow-800">Expansion Mondiale</h3>
                <p className="text-sm text-yellow-700">78+ langues vs 2-3 concurrents</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}