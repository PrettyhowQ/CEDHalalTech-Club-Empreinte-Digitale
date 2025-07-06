import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Rocket, Shield, CheckCircle, TrendingUp, Award, Crown, Star, Users, Zap } from "lucide-react";

export default function DeploymentMondial() {
  const deploymentStats = {
    readinessScore: 99.8,
    featuresCompleted: 165,
    languagesSupported: 78,
    fiqhRulesValidated: 27446,
    scholarsValidation: 150,
    competitiveAdvantages: 12
  };

  const globalMarkets = [
    {
      region: "Golfe Persique",
      countries: ["🇦🇪 UAE", "🇸🇦 Arabie Saoudite", "🇶🇦 Qatar", "🇰🇼 Koweït"],
      marketSize: "1.2T USD",
      priority: "Très Haute",
      readiness: 100,
      uniqueFeatures: ["Garage Al-Amana Auto", "Web TV Halal", "Super IARP Pro"]
    },
    {
      region: "Asie du Sud-Est",
      countries: ["🇲🇾 Malaisie", "🇮🇩 Indonésie", "🇸🇬 Singapour", "🇧🇳 Brunei"],
      marketSize: "850B USD",
      priority: "Haute",
      readiness: 95,
      uniqueFeatures: ["Hajj Savings Planner", "Nikah Financial Planning", "78+ langues"]
    },
    {
      region: "Afrique du Nord",
      countries: ["🇲🇦 Maroc", "🇹🇳 Tunisie", "🇩🇿 Algérie", "🇪🇬 Égypte"],
      marketSize: "420B USD", 
      priority: "Haute",
      readiness: 92,
      uniqueFeatures: ["Formation Fiqh Informatique", "Analyse Prédictive Halal", "Cloud 100% Halal"]
    },
    {
      region: "Europe",
      countries: ["🇨🇭 Suisse", "🇫🇷 France", "🇩🇪 Allemagne", "🇬🇧 UK"],
      marketSize: "380B USD",
      priority: "Moyenne",
      readiness: 88,
      uniqueFeatures: ["Conformité RGPD+Sharia", "Banking régulé", "TechForAll solidaire"]
    },
    {
      region: "Amérique du Nord",
      countries: ["🇺🇸 USA", "🇨🇦 Canada"],
      marketSize: "290B USD",
      priority: "Moyenne",
      readiness: 85,
      uniqueFeatures: ["Innovation IA", "Institut CED Academy", "Certifications US"]
    }
  ];

  const monopoleFeatures = [
    {
      feature: "Al-Amana Auto Halal",
      description: "Premier garage automobile 100% halal mondial",
      competitor: "Aucun concurrent",
      marketImpact: "Révolutionnaire",
      revenue: "Potentiel illimité"
    },
    {
      feature: "Hajj Savings Planner",
      description: "Épargne pèlerinage 0% riba avec packages complets",
      competitor: "Inexistant", 
      marketImpact: "Monopole total",
      revenue: "12M+ pèlerins/an"
    },
    {
      feature: "Nikah Financial Planning",
      description: "Planification mariage islamique avec calcul Mahr",
      competitor: "Aucun équivalent",
      marketImpact: "Innovation pure",
      revenue: "2.8M mariages/an"
    },
    {
      feature: "Web TV Halal",
      description: "Première plateforme télévision islamique tech",
      competitor: "Inexistant",
      marketImpact: "Pionnier absolu",
      revenue: "547K spectateurs"
    },
    {
      feature: "Super IARP Pro",
      description: "IA validée 150+ scholars avec 78+ langues",
      competitor: "Tous dépassés",
      marketImpact: "Supériorité technique",
      revenue: "Subscription modèle"
    },
    {
      feature: "27,446+ Règles Fiqh",
      description: "Plus grande bibliothèque mondiale Fiqh informatique",
      competitor: "Fragments seulement",
      marketImpact: "Autorité religieuse",
      revenue: "Licensing modèle"
    }
  ];

  const deploymentPhases = [
    {
      phase: "Phase 1 - Golfe",
      duration: "Q1 2025",
      markets: ["UAE", "Arabie Saoudite", "Qatar"],
      focus: "Garage Auto + Banking + IA",
      investment: "25M CHF",
      expectedRevenue: "180M CHF/an"
    },
    {
      phase: "Phase 2 - Asie SE",
      duration: "Q2-Q3 2025", 
      markets: ["Malaisie", "Indonésie", "Singapour"],
      focus: "Hajj Savings + Formation + Web TV",
      investment: "35M CHF",
      expectedRevenue: "420M CHF/an"
    },
    {
      phase: "Phase 3 - Afrique",
      duration: "Q4 2025",
      markets: ["Maroc", "Tunisie", "Algérie", "Égypte"],
      focus: "TechForAll + Academy + Takaful",
      investment: "20M CHF",
      expectedRevenue: "290M CHF/an"
    },
    {
      phase: "Phase 4 - Europe/NA",
      duration: "2026",
      markets: ["Europe", "Amérique du Nord"],
      focus: "Expansion complète + Innovation",
      investment: "45M CHF",
      expectedRevenue: "650M CHF/an"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Globe className="h-12 w-12 text-blue-600" />
            <Rocket className="h-8 w-8 text-purple-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Déploiement Mondial CED HalalTech™
            </h1>
          </div>
          <p className="text-2xl text-gray-700 mb-6">
            🚀 Conquête du marché Islamic fintech mondial - Position dominante confirmée
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 text-lg px-4 py-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              {deploymentStats.readinessScore}% Prêt
            </Badge>
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300 text-lg px-4 py-2">
              <Award className="h-5 w-5 mr-2" />
              {deploymentStats.featuresCompleted} Fonctionnalités
            </Badge>
            <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-300 text-lg px-4 py-2">
              <Crown className="h-5 w-5 mr-2" />
              Monopole Confirmé
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="readiness" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="readiness">État de Préparation</TabsTrigger>
            <TabsTrigger value="markets">Marchés Cibles</TabsTrigger>
            <TabsTrigger value="monopole">Avantages Monopole</TabsTrigger>
            <TabsTrigger value="phases">Phases Déploiement</TabsTrigger>
          </TabsList>

          {/* État de Préparation */}
          <TabsContent value="readiness">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-2 border-green-300 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <Shield className="h-6 w-6" />
                    Préparation Technique
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Fonctionnalités Complètes</span>
                      <Badge className="bg-green-600">{deploymentStats.featuresCompleted}/165</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Support Multilingue</span>
                      <Badge className="bg-blue-600">{deploymentStats.languagesSupported} langues</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Règles Fiqh Validées</span>
                      <Badge className="bg-purple-600">{deploymentStats.fiqhRulesValidated.toLocaleString()}+</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Scholars Validation</span>
                      <Badge className="bg-orange-600">{deploymentStats.scholarsValidation}+ experts</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-300 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <TrendingUp className="h-6 w-6" />
                    Avantages Concurrentiels
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg">
                      <h4 className="font-bold text-green-700">✅ Écosystème Intégré Unique</h4>
                      <p className="text-sm text-gray-600">Vs services fragmentés concurrents</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <h4 className="font-bold text-blue-700">✅ Monopole Automobile Halal</h4>
                      <p className="text-sm text-gray-600">Al-Amana Auto inexistant ailleurs</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <h4 className="font-bold text-purple-700">✅ IA Validée Scholars</h4>
                      <p className="text-sm text-gray-600">150+ vs 3-5 chez concurrents</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <h4 className="font-bold text-orange-700">✅ Web TV Islamique</h4>
                      <p className="text-sm text-gray-600">Première plateforme mondiale</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Marchés Cibles */}
          <TabsContent value="markets">
            <div className="space-y-6">
              {globalMarkets.map((market, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{market.region}</span>
                      <div className="flex items-center gap-2">
                        <Badge className={`${
                          market.priority === 'Très Haute' ? 'bg-red-600' :
                          market.priority === 'Haute' ? 'bg-orange-600' :
                          'bg-blue-600'
                        }`}>
                          {market.priority}
                        </Badge>
                        <Badge variant="outline">{market.readiness}% prêt</Badge>
                      </div>
                    </CardTitle>
                    <CardDescription>
                      <div className="flex gap-2 flex-wrap">
                        {market.countries.map((country, idx) => (
                          <span key={idx} className="text-sm">{country}</span>
                        ))}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Taille du marché</h4>
                        <p className="text-2xl font-bold text-green-600">{market.marketSize}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Fonctionnalités uniques</h4>
                        <div className="space-y-1">
                          {market.uniqueFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-yellow-500" />
                              <span className="text-sm">{feature}</span>
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

          {/* Avantages Monopole */}
          <TabsContent value="monopole">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {monopoleFeatures.map((item, index) => (
                <Card key={index} className="border-2 border-yellow-300 bg-yellow-50">
                  <CardHeader>
                    <CardTitle className="text-yellow-800">{item.feature}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Concurrent:</span>
                        <Badge variant="outline" className="bg-red-100 text-red-700">
                          {item.competitor}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Impact marché:</span>
                        <Badge className="bg-green-600">
                          {item.marketImpact}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Potentiel revenus:</span>
                        <span className="font-bold text-green-700">{item.revenue}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Phases Déploiement */}
          <TabsContent value="phases">
            <div className="space-y-6">
              {deploymentPhases.map((phase, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {phase.phase}
                      <Badge className="bg-blue-600">{phase.duration}</Badge>
                    </CardTitle>
                    <CardDescription>
                      Marchés: {phase.markets.join(", ")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Focus principal</h4>
                        <p className="text-sm">{phase.focus}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Investissement</h4>
                        <p className="text-lg font-bold text-orange-600">{phase.investment}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Revenus attendus</h4>
                        <p className="text-lg font-bold text-green-600">{phase.expectedRevenue}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Bouton de Déploiement */}
        <Card className="border-4 border-green-400 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              🚀 Prêt pour le Déploiement Mondial
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Écosystème CED HalalTech™ révolutionnaire • Position dominante confirmée • Monopole technologique validé
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="text-xl px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                <Rocket className="h-6 w-6 mr-2" />
                Lancer Déploiement Phase 1
              </Button>
              <Button size="lg" variant="outline" className="text-xl px-8 py-4 border-2 border-blue-500">
                <Globe className="h-6 w-6 mr-2" />
                Analyse Finale Marchés
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}