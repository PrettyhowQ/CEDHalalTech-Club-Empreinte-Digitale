import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Users, Globe, Shield, Star, CheckCircle, AlertTriangle, Plus } from "lucide-react";

export default function AnalyseConcurrentielle() {
  const concurrents = [
    {
      nom: "CED HalalTech™",
      type: "Écosystème Complet",
      pays: "Suisse",
      modules: 55,
      utilisateurs: "739K+",
      conformite: 100,
      innovations: [
        "55 modules intégrés",
        "27,446+ règles Fiqh",
        "150+ scholars validation",
        "78 langues support",
        "Super IARP Pro IA",
        "Banking quantique halal",
        "Voie Halal 52 étapes"
      ],
      points_forts: [
        "Écosystème le plus complet au monde",
        "Intégration spirituelle authentique",
        "Protection juridique totale",
        "Innovation technologique avancée"
      ],
      score: 98
    },
    {
      nom: "Zoya Finance",
      type: "Investment App",
      pays: "USA",
      modules: 3,
      utilisateurs: "20K+",
      conformite: 85,
      innovations: [
        "Screening halal automatique",
        "120K+ stocks analysés",
        "$250M actifs gérés"
      ],
      points_forts: [
        "Forte présence US",
        "Partenariats bancaires établis"
      ],
      score: 72
    },
    {
      nom: "Musaffa",
      type: "Trading Platform",
      pays: "New York",
      modules: 4,
      utilisateurs: "317K+",
      conformite: 80,
      innovations: [
        "Stock screening global",
        "Portfolio tracking",
        "Purification automatique"
      ],
      points_forts: [
        "Base utilisateur établie",
        "Interface moderne"
      ],
      score: 75
    },
    {
      nom: "Wahed",
      type: "Robo-Advisory",
      pays: "Global",
      modules: 5,
      utilisateurs: "50K+",
      conformite: 82,
      innovations: [
        "Robo-advisor halal",
        "$50M Series B funding",
        "Gestion automatisée"
      ],
      points_forts: [
        "Technologie robo-advisor avancée",
        "Financement solide"
      ],
      score: 78
    },
    {
      nom: "ALAMI",
      type: "Digital Banking",
      pays: "Indonésie",
      modules: 6,
      utilisateurs: "100K+",
      conformite: 75,
      innovations: [
        "Banking license digitale",
        "Financement SME",
        "Mobile-first approach"
      ],
      points_forts: [
        "Licence bancaire officielle",
        "Focus marché indonésien"
      ],
      score: 70
    }
  ];

  const fonctionnalitesManquantes = [
    {
      categorie: "IA & Automatisation",
      elements: [
        "Assistant vocal masculin alternatif",
        "Traduction Coran temps réel",
        "Analyse comportementale spirituelle",
        "Recommandations investissement IA"
      ],
      priorite: "Haute",
      couleur: "red"
    },
    {
      categorie: "Blockchain & Crypto",
      elements: [
        "CED Coin (cryptomonnaie propre)",
        "NFT islamiques éducatifs",
        "Smart contracts Murabaha",
        "DeFi halal marketplace"
      ],
      priorite: "Moyenne",
      couleur: "orange"
    },
    {
      categorie: "Social & Communauté",
      elements: [
        "Réseau social musulman",
        "Forums discussions scholars",
        "Groupes d'étude virtuels",
        "Événements communautaires"
      ],
      priorite: "Moyenne",
      couleur: "blue"
    },
    {
      categorie: "E-commerce & Marketplace",
      elements: [
        "Marketplace produits halal",
        "Certification produits alimentaires",
        "Livraison dernière minute",
        "Comparateur prix halal"
      ],
      priorite: "Basse",
      couleur: "green"
    }
  ];

  const avantagesConcurrentiels = [
    {
      titre: "Écosystème Intégré Unique",
      description: "55 modules vs 3-6 chez concurrents",
      impact: "95%"
    },
    {
      titre: "Validation Religieuse Complète",
      description: "150+ scholars vs 0-10 chez concurrents",
      impact: "90%"
    },
    {
      titre: "Support Multilingue",
      description: "78 langues vs 3-5 chez concurrents",
      impact: "85%"
    },
    {
      titre: "Innovation Technologique",
      description: "IA, Quantum, Blockchain intégrés",
      impact: "88%"
    },
    {
      titre: "Conformité Sharia",
      description: "27,446+ règles vs 800-2,400",
      impact: "92%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📊 Analyse Concurrentielle CED HalalTech™
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comparaison détaillée avec les leaders mondiaux de la technologie islamique
          </p>
        </div>

        {/* Statistiques du marché */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">$128B</h3>
              <p className="text-green-100">Marché Islamic Fintech 2025</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">2B+</h3>
              <p className="text-blue-100">Musulmans dans le monde</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
            <CardContent className="p-6 text-center">
              <Globe className="h-8 w-8 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">21%</h3>
              <p className="text-purple-100">Croissance annuelle</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
            <CardContent className="p-6 text-center">
              <Shield className="h-8 w-8 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">400M+</h3>
              <p className="text-orange-100">Non-bancarisés musulmans</p>
            </CardContent>
          </Card>
        </div>

        {/* Comparaison concurrents */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              🏆 Comparaison avec les Leaders Mondiaux
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-bold">Plateforme</th>
                    <th className="text-left p-3 font-bold">Type</th>
                    <th className="text-left p-3 font-bold">Modules</th>
                    <th className="text-left p-3 font-bold">Utilisateurs</th>
                    <th className="text-left p-3 font-bold">Conformité</th>
                    <th className="text-left p-3 font-bold">Score Global</th>
                  </tr>
                </thead>
                <tbody>
                  {concurrents.map((concurrent, index) => (
                    <tr key={index} className={`border-b ${index === 0 ? 'bg-green-50' : ''}`}>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          {index === 0 && <Star className="h-4 w-4 text-yellow-500" />}
                          <span className="font-semibold">{concurrent.nom}</span>
                          {index === 0 && <Badge className="bg-green-100 text-green-800">Leader</Badge>}
                        </div>
                        <div className="text-sm text-gray-500">{concurrent.pays}</div>
                      </td>
                      <td className="p-3">{concurrent.type}</td>
                      <td className="p-3">
                        <Badge variant={index === 0 ? "default" : "secondary"}>
                          {concurrent.modules}
                        </Badge>
                      </td>
                      <td className="p-3">{concurrent.utilisateurs}</td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <Progress value={concurrent.conformite} className="w-16" />
                          <span className="text-sm">{concurrent.conformite}%</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <span className={`text-lg font-bold ${index === 0 ? 'text-green-600' : 'text-gray-700'}`}>
                            {concurrent.score}/100
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Avantages concurrentiels */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              🚀 Avantages Concurrentiels CED HalalTech™
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {avantagesConcurrentiels.map((avantage, index) => (
                <Card key={index} className="border-2 border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <h3 className="font-bold text-green-800">{avantage.titre}</h3>
                    </div>
                    <p className="text-gray-600 mb-3">{avantage.description}</p>
                    <div className="flex items-center gap-2">
                      <Progress value={parseInt(avantage.impact)} className="flex-1" />
                      <span className="text-sm font-semibold text-green-600">{avantage.impact}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fonctionnalités manquantes */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Plus className="h-6 w-6" />
              Fonctionnalités à Développer (Roadmap 2025-2027)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fonctionnalitesManquantes.map((categorie, index) => (
                <Card key={index} className={`border-2 border-${categorie.couleur}-200`}>
                  <CardHeader className={`bg-${categorie.couleur}-50`}>
                    <CardTitle className="flex items-center justify-between">
                      <span>{categorie.categorie}</span>
                      <Badge 
                        variant={categorie.priorite === 'Haute' ? 'destructive' : 
                                categorie.priorite === 'Moyenne' ? 'default' : 'secondary'}
                      >
                        {categorie.priorite}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <ul className="space-y-2">
                      {categorie.elements.map((element, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <AlertTriangle className={`h-4 w-4 text-${categorie.couleur}-500`} />
                          <span className="text-sm">{element}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800">
              🎯 Position Concurrentielle
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge className="bg-green-100 text-green-800">Position #1 Mondial</Badge>
                <span className="text-green-700">Leader incontesté de la technologie islamique</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-white rounded-lg">
                  <h3 className="text-2xl font-bold text-green-600">55</h3>
                  <p className="text-sm text-gray-600">Modules vs 3-6 concurrents</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-600">27,446+</h3>
                  <p className="text-sm text-gray-600">Règles Fiqh vs 800-2,400</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h3 className="text-2xl font-bold text-purple-600">98/100</h3>
                  <p className="text-sm text-gray-600">Score vs 70-78 autres</p>
                </div>
              </div>

              <p className="text-green-700 mt-4">
                <strong>Recommandation :</strong> CED HalalTech™ maintient une avance technologique significative. 
                Focus recommandé sur l'expansion internationale et l'ajout des fonctionnalités IA avancées 
                pour consolider la position de leader mondial.
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}