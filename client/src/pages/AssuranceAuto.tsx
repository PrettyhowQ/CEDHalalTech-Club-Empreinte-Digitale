import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, Shield, Heart, CheckCircle, Star, Phone, Mail } from "lucide-react";

export default function AssuranceAuto() {
  const formules = [
    {
      name: "Al-Aman Essential",
      prix: "89 CHF/mois",
      coverage: "Responsabilité civile + Protection juridique",
      features: ["Couverture RC obligatoire", "Assistance 24/7", "Protection juridique", "Remboursement Takaful"]
    },
    {
      name: "Al-Aman Comfort", 
      prix: "149 CHF/mois",
      coverage: "Casco partielle + Services premium",
      features: ["Tout Essential +", "Casco partielle", "Vol/incendie", "Bris de glaces", "Véhicule de remplacement"]
    },
    {
      name: "Al-Aman Premium",
      prix: "219 CHF/mois", 
      coverage: "Casco complète + Services VIP",
      features: ["Tout Comfort +", "Casco complète", "Valeur à neuf 3 ans", "Dépannage Europe", "Conciergerie auto"]
    }
  ];

  const avantages = [
    "0% Riba - Conforme Sharia à 100%",
    "Supervision par comité religieux",
    "Transparence totale des contributions",
    "Redistribution équitable des surplus",
    "Entraide communautaire (Ta'awun)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-emerald-100 dark:bg-emerald-900 p-4 rounded-full mr-4">
              <Car className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Al-Aman Takaful Auto
              </h1>
              <p className="text-xl text-emerald-600 dark:text-emerald-400 mt-2">
                Assurance Automobile Islamique 🚗
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Protection automobile conforme aux principes islamiques avec système de solidarité mutuelle (Ta'awun)
            et supervision religieuse complète.
          </p>
        </div>

        {/* Avantages Al-Aman */}
        <Card className="mb-8 border-emerald-200 dark:border-emerald-700">
          <CardHeader className="bg-emerald-50 dark:bg-emerald-900/20">
            <CardTitle className="flex items-center text-emerald-800 dark:text-emerald-200">
              <Shield className="mr-3 h-6 w-6" />
              Pourquoi Choisir Al-Aman Takaful Auto ?
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {avantages.map((avantage, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{avantage}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Formules d'assurance */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {formules.map((formule, index) => (
            <Card key={index} className={`relative overflow-hidden ${
              index === 1 ? 'border-emerald-300 dark:border-emerald-600 scale-105' : 'border-gray-200 dark:border-gray-700'
            }`}>
              {index === 1 && (
                <Badge className="absolute top-4 right-4 bg-emerald-500">
                  Plus Populaire
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  {formule.name}
                </CardTitle>
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
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
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Demander un Devis
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Processus Takaful */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center text-gray-900 dark:text-white">
              Comment Fonctionne Al-Aman Takaful ?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="bg-emerald-100 dark:bg-emerald-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Contribution</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Versement dans le fonds commun de solidarité
                </p>
              </div>
              <div>
                <div className="bg-emerald-100 dark:bg-emerald-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Protection</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Couverture selon les principes de Ta'awun
                </p>
              </div>
              <div>
                <div className="bg-emerald-100 dark:bg-emerald-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Surplus</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Redistribution équitable des bénéfices
                </p>
              </div>
              <div>
                <div className="bg-emerald-100 dark:bg-emerald-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Transparence</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Gestion transparente et supervision religieuse
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-700">
          <CardHeader className="text-center">
            <CardTitle className="text-emerald-800 dark:text-emerald-200">
              Contactez Al-Aman Takaful
            </CardTitle>
            <CardDescription className="text-emerald-600 dark:text-emerald-400">
              Nos conseillers islamiques sont à votre disposition
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button className="flex items-center bg-emerald-600 hover:bg-emerald-700">
                <Phone className="mr-2 h-4 w-4" />
                +41 22 123 45 67
              </Button>
              <Button variant="outline" className="flex items-center border-emerald-300 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-600 dark:text-emerald-300">
                <Mail className="mr-2 h-4 w-4" />
                auto@al-aman-takaful.ch
              </Button>
            </div>
            <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-4">
              Devis gratuit en 24h • Souscription 100% en ligne • Support multilingue
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}