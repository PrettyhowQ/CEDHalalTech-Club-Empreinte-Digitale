import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Shield, DollarSign, Building, Leaf, Globe, Star, AlertTriangle, Phone, Mail } from "lucide-react";

export default function InvestissementsHalal() {
  const produitsInvestissement = [
    {
      nom: "Sukuk Souverains",
      type: "Obligations islamiques",
      rendement: "4.5% - 6.2%",
      risque: "Faible",
      minimum: "1'000 CHF",
      duree: "2-10 ans",
      description: "Obligations conformes Sharia émises par gouvernements musulmans",
      icone: Shield,
      couleur: "text-green-500",
      populaire: true
    },
    {
      nom: "Fonds Immobilier Halal",
      type: "REIT Islamique", 
      rendement: "6.8% - 9.1%",
      risque: "Modéré",
      minimum: "5'000 CHF",
      duree: "5-15 ans",
      description: "Investissement immobilier commercial conforme Sharia",
      icone: Building,
      couleur: "text-blue-500",
      populaire: false
    },
    {
      nom: "Actions Halal Global",
      type: "Portefeuille diversifié",
      rendement: "8.2% - 12.4%",
      risque: "Modéré-Élevé", 
      minimum: "2'000 CHF",
      duree: "3-20 ans",
      description: "Actions d'entreprises conformes aux critères islamiques",
      icone: TrendingUp,
      couleur: "text-purple-500",
      populaire: true
    },
    {
      nom: "Green Sukuk ESG",
      type: "Obligations vertes",
      rendement: "3.8% - 5.5%",
      risque: "Faible-Modéré",
      minimum: "10'000 CHF", 
      duree: "5-12 ans",
      description: "Obligations islamiques pour projets environnementaux",
      icone: Leaf,
      couleur: "text-emerald-500",
      populaire: false
    },
    {
      nom: "Private Equity Halal",
      type: "Capital investissement",
      rendement: "12% - 18%",
      risque: "Élevé",
      minimum: "50'000 CHF",
      duree: "7-12 ans", 
      description: "Participation dans startups et PME islamiques",
      icone: Star,
      couleur: "text-orange-500",
      populaire: false
    },
    {
      nom: "Matières Premières",
      type: "Commodités Halal",
      rendement: "5.5% - 11.2%",
      risque: "Modéré-Élevé",
      minimum: "3'000 CHF",
      duree: "6 mois-5 ans",
      description: "Or, argent, pétrole et produits agricoles halal",
      icone: Globe,
      couleur: "text-yellow-500",
      populaire: false
    }
  ];

  const criteresShariaCompliance = [
    {
      critere: "Secteurs interdits",
      details: "Alcool, porc, jeux, finance conventionnelle, armement",
      status: "Exclu totalement"
    },
    {
      critere: "Ratio d'endettement",
      details: "Dette/Capitalisation < 33%",
      status: "Contrôlé en permanence"
    },
    {
      critere: "Revenus non-halal",
      details: "< 5% du chiffre d'affaires total",
      status: "Purifié si nécessaire"
    },
    {
      critere: "Liquidités/CA",
      details: "< 33% pour éviter spéculation",
      status: "Surveillé mensuellement"
    }
  ];

  const performancesFonds = [
    { periode: "1 mois", performance: "+2.1%" },
    { periode: "3 mois", performance: "+5.8%" },
    { periode: "6 mois", performance: "+11.4%" },
    { periode: "1 an", performance: "+18.6%" },
    { periode: "3 ans", performance: "+7.2% p.a." },
    { periode: "5 ans", performance: "+9.8% p.a." }
  ];

  const avantagesInvestissement = [
    "Conformité Sharia certifiée par comité religieux",
    "Diversification géographique 67 pays",
    "Purification automatique des revenus mixtes",
    "Reporting ESG intégré",
    "Gestion professionnelle par experts islamiques",
    "Fiscalité optimisée Suisse"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-amber-100 dark:bg-amber-900 p-4 rounded-full mr-4">
              <TrendingUp className="h-12 w-12 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Investissements Halal CED
              </h1>
              <p className="text-xl text-amber-600 dark:text-amber-400 mt-2">
                Finance Islamique & Gestion d'Actifs 📈
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Faites fructifier votre patrimoine selon les principes islamiques avec notre gamme complète 
            de produits d'investissement certifiés Sharia et supervisés par des scholars reconnus.
          </p>
        </div>

        {/* Performances du portefeuille */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="border-amber-200 dark:border-amber-700">
            <CardHeader className="bg-amber-50 dark:bg-amber-900/20">
              <CardTitle className="text-amber-800 dark:text-amber-200">
                Performances Historiques
              </CardTitle>
              <CardDescription>
                Rendements des fonds CED Halal Investment
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {performancesFonds.map((perf, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">{perf.periode}</span>
                    <span className={`font-bold ${
                      parseFloat(perf.performance) > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {perf.performance}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center text-sm text-green-700 dark:text-green-300">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Surperformance vs indices conventionnels: +2.4%
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">
                Répartition des Actifs
              </CardTitle>
              <CardDescription>
                Allocation stratégique du portefeuille halal
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Actions Halal</span>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Sukuk</span>
                    <span className="text-sm font-medium">30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Immobilier</span>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <Progress value={15} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Matières Premières</span>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                  <Progress value={10} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Produits d'investissement */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {produitsInvestissement.map((produit, index) => (
            <Card key={index} className={`relative overflow-hidden ${
              produit.populaire ? 'border-amber-300 dark:border-amber-600 scale-105' : 
              'border-gray-200 dark:border-gray-700'
            }`}>
              {produit.populaire && (
                <Badge className="absolute top-4 right-4 bg-amber-500 z-10">
                  Populaire
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <produit.icone className={`h-8 w-8 ${produit.couleur}`} />
                </div>
                <CardTitle className="text-lg text-gray-900 dark:text-white">
                  {produit.nom}
                </CardTitle>
                <CardDescription className="text-sm">
                  {produit.type}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Rendement:</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      {produit.rendement}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Risque:</span>
                    <span className={`font-medium ${
                      produit.risque === 'Faible' ? 'text-green-500' :
                      produit.risque === 'Modéré' ? 'text-yellow-500' :
                      'text-red-500'
                    }`}>
                      {produit.risque}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Minimum:</span>
                    <span className="font-medium">{produit.minimum}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Durée:</span>
                    <span className="font-medium">{produit.duree}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-300 mb-4">
                  {produit.description}
                </p>

                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-sm">
                  Investir maintenant
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Critères Sharia Compliance */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-gray-900 dark:text-white">
              <Shield className="mr-3 h-6 w-6 text-green-500" />
              Critères de Conformité Sharia
            </CardTitle>
            <CardDescription>
              Standards rigoureux appliqués à tous nos investissements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {criteresShariaCompliance.map((critere, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {critere.critere}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {critere.details}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {critere.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Avantages */}
        <Card className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-700">
          <CardHeader>
            <CardTitle className="text-green-800 dark:text-green-200">
              Pourquoi Investir avec CED Halal Investment ?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {avantagesInvestissement.map((avantage, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{avantage}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Avertissements */}
        <Card className="mb-8 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700">
          <CardHeader>
            <CardTitle className="flex items-center text-orange-800 dark:text-orange-200">
              <AlertTriangle className="mr-3 h-6 w-6" />
              Avertissements Importants
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-orange-700 dark:text-orange-300">
              <p>• Les investissements comportent des risques de pertes en capital</p>
              <p>• Les performances passées ne garantissent pas les résultats futurs</p>
              <p>• Diversifiez toujours vos investissements pour réduire les risques</p>
              <p>• Consultez un conseiller financier avant tout investissement important</p>
              <p>• La conformité Sharia est vérifiée mais peut évoluer selon les interprétations</p>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700">
          <CardHeader className="text-center">
            <CardTitle className="text-amber-800 dark:text-amber-200">
              Conseil en Investissement Halal
            </CardTitle>
            <CardDescription className="text-amber-600 dark:text-amber-400">
              Nos experts en finance islamique à votre service
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button className="flex items-center bg-amber-600 hover:bg-amber-700">
                <Phone className="mr-2 h-4 w-4" />
                +41 22 123 45 72
              </Button>
              <Button variant="outline" className="flex items-center border-amber-300 text-amber-700 hover:bg-amber-50 dark:border-amber-600 dark:text-amber-300">
                <Mail className="mr-2 h-4 w-4" />
                investissement@ced-bank.com
              </Button>
            </div>
            <p className="text-sm text-amber-600 dark:text-amber-400 mt-4">
              Consultation gratuite • Portefeuille personnalisé • Gestion professionnelle
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}