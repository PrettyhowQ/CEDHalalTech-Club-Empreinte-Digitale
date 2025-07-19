import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Shield, Heart, CheckCircle, Star, Phone, Mail, Lock, Flame, Droplets } from "lucide-react";

export default function AssuranceHabitation() {
  const formules = [
    {
      name: "Al-Aman Locataire",
      prix: "35 CHF/mois",
      coverage: "Protection locataire + RC",
      features: ["Mobilier jusqu'à 50'000 CHF", "Responsabilité civile", "Frais de relogement", "Protection juridique"]
    },
    {
      name: "Al-Aman Propriétaire", 
      prix: "89 CHF/mois",
      coverage: "Protection complète propriétaire",
      features: ["Tout Locataire +", "Bâtiment jusqu'à 500'000 CHF", "Dégâts des eaux", "Vol/cambriolage", "Bris de glaces"]
    },
    {
      name: "Al-Aman Villa Premium",
      prix: "149 CHF/mois", 
      coverage: "Villa + Terrain + Services VIP",
      features: ["Tout Propriétaire +", "Bâtiment jusqu'à 1'500'000 CHF", "Jardin/piscine", "Objets précieux", "Conciergerie 24/7"]
    }
  ];

  const risques = [
    { icon: Flame, name: "Incendie", description: "Feu, explosion, foudre" },
    { icon: Droplets, name: "Dégâts des eaux", description: "Fuite, rupture canalisation" },
    { icon: Lock, name: "Vol/Cambriolage", description: "Effraction, vol à domicile" },
    { icon: Shield, name: "Catastrophes naturelles", description: "Tempête, grêle, inondation" }
  ];

  const avantages = [
    "Expertise halal des sinistres",
    "Réparateurs de confiance musulmans",
    "Respect intimité familiale",
    "Horaires compatibles prières",
    "Gestion transparente des fonds"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full mr-4">
              <Home className="h-12 w-12 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Al-Aman Takaful Habitation
              </h1>
              <p className="text-xl text-purple-600 dark:text-purple-400 mt-2">
                Assurance Habitation Islamique 🏠
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Protection habitation conforme Sharia avec respect de l'intimité familiale et gestion transparente selon les principes islamiques.
          </p>
        </div>

        {/* Risques couverts */}
        <Card className="mb-8 border-purple-200 dark:border-purple-700">
          <CardHeader className="bg-purple-50 dark:bg-purple-900/20">
            <CardTitle className="flex items-center text-purple-800 dark:text-purple-200">
              <Shield className="mr-3 h-6 w-6" />
              Risques Couverts par Al-Aman
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {risques.map((risque, index) => (
                <div key={index} className="text-center">
                  <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <risque.icon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{risque.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{risque.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Formules d'assurance */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {formules.map((formule, index) => (
            <Card key={index} className={`relative overflow-hidden ${
              index === 1 ? 'border-purple-300 dark:border-purple-600 scale-105' : 'border-gray-200 dark:border-gray-700'
            }`}>
              {index === 1 && (
                <Badge className="absolute top-4 right-4 bg-purple-500">
                  Recommandé
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  {formule.name}
                </CardTitle>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {formule.prix}
                </div>
                <CardDescription className="text-sm">
                  {formule.coverage}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {formule.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Obtenir un Devis
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Spécificités islamiques */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center text-gray-900 dark:text-white">
              Approche Islamique de l'Assurance Habitation
            </CardTitle>
            <CardDescription className="text-center">
              Services respectueux des valeurs familiales musulmanes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Respect de l'Intimité</h3>
                <ul className="space-y-2">
                  {avantages.slice(0, 3).map((avantage, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Heart className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{avantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Gestion Transparente</h3>
                <ul className="space-y-2">
                  {avantages.slice(3).map((avantage, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Star className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{avantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Processus de sinistre */}
        <Card className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-indigo-200 dark:border-indigo-700">
          <CardHeader>
            <CardTitle className="text-indigo-800 dark:text-indigo-200">
              Processus de Déclaration de Sinistre
            </CardTitle>
            <CardDescription className="text-indigo-600 dark:text-indigo-400">
              Gestion rapide et respectueuse des sinistres
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <div className="bg-indigo-100 dark:bg-indigo-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Déclaration 24/7</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">Hotline multilingue</p>
              </div>
              <div className="p-4">
                <div className="bg-indigo-100 dark:bg-indigo-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Expertise Halal</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">Expert musulman dédié</p>
              </div>
              <div className="p-4">
                <div className="bg-indigo-100 dark:bg-indigo-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Réparation</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">Artisans de confiance</p>
              </div>
              <div className="p-4">
                <div className="bg-indigo-100 dark:bg-indigo-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Indemnisation</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">Paiement rapide et halal</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700">
          <CardHeader className="text-center">
            <CardTitle className="text-purple-800 dark:text-purple-200">
              Protégez Votre Foyer avec Al-Aman
            </CardTitle>
            <CardDescription className="text-purple-600 dark:text-purple-400">
              Conseillers spécialisés assurance habitation islamique
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button className="flex items-center bg-purple-600 hover:bg-purple-700">
                <Phone className="mr-2 h-4 w-4" />
                +41 22 123 45 69
              </Button>
              <Button variant="outline" className="flex items-center border-purple-300 text-purple-700 hover:bg-purple-50 dark:border-purple-600 dark:text-purple-300">
                <Mail className="mr-2 h-4 w-4" />
                habitation@al-aman-takaful.ch
              </Button>
            </div>
            <p className="text-sm text-purple-600 dark:text-purple-400 mt-4">
              Évaluation gratuite de votre logement • Devis personnalisé • Souscription sécurisée
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}