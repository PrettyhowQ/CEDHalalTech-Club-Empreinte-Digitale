import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plane, Shield, Heart, CheckCircle, Star, Phone, Mail, Globe, MapPin } from "lucide-react";

export default function AssuranceVoyage() {
  const formules = [
    {
      name: "Al-Aman Voyage Essential",
      prix: "25 CHF/voyage",
      coverage: "Europe + Assistance médicale",
      features: ["Frais médicaux 100'000 CHF", "Rapatriement sanitaire", "Responsabilité civile", "Assistance 24/7"]
    },
    {
      name: "Al-Aman Voyage Mondial", 
      prix: "45 CHF/voyage",
      coverage: "Monde entier + Services premium",
      features: ["Tout Essential +", "Frais médicaux 250'000 CHF", "Annulation voyage", "Bagages/effets personnels", "Sports d'hiver"]
    },
    {
      name: "Al-Aman Hajj & Umrah",
      prix: "89 CHF/pèlerinage", 
      coverage: "Pèlerinage spécialisé + Services sacrés",
      features: ["Tout Mondial +", "Assistance spirituelle", "Guide religieux 24/7", "Zam Zam premium", "Transport Haram"]
    }
  ];

  const destinations = [
    { region: "Europe", couverture: "46 pays", populaire: true },
    { region: "Moyen-Orient", couverture: "Arabie Saoudite, UAE, Qatar, Jordanie", populaire: true },
    { region: "Afrique du Nord", couverture: "Maroc, Tunisie, Égypte, Algérie", populaire: false },
    { region: "Asie", couverture: "Turquie, Malaisie, Indonésie, Inde", populaire: false },
    { region: "Monde entier", couverture: "195+ pays", populaire: false }
  ];

  const avantages = [
    "Assistance en arabe, français, anglais",
    "Respect des horaires de prière",
    "Orientation halal des soins médicaux", 
    "Support spirituel pendant l'urgence",
    "Réseau de partenaires musulmans"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mr-4">
              <Plane className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Al-Aman Takaful Voyage
              </h1>
              <p className="text-xl text-blue-600 dark:text-blue-400 mt-2">
                Assurance Voyage Islamique ✈️
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Protection voyage conforme Sharia avec assistance spirituelle et médicale adaptée aux besoins des musulmans voyageurs.
          </p>
        </div>

        {/* Destinations populaires */}
        <Card className="mb-8 border-blue-200 dark:border-blue-700">
          <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
            <CardTitle className="flex items-center text-blue-800 dark:text-blue-200">
              <Globe className="mr-3 h-6 w-6" />
              Destinations Couvertes
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              {destinations.map((dest, index) => (
                <div key={index} className={`p-4 rounded-lg border ${
                  dest.populaire 
                    ? 'border-blue-300 bg-blue-50 dark:border-blue-600 dark:bg-blue-900/20' 
                    : 'border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{dest.region}</h3>
                    {dest.populaire && (
                      <Badge className="bg-blue-500 text-xs">Populaire</Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{dest.couverture}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Formules d'assurance */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {formules.map((formule, index) => (
            <Card key={index} className={`relative overflow-hidden ${
              index === 2 ? 'border-blue-300 dark:border-blue-600 scale-105' : 'border-gray-200 dark:border-gray-700'
            }`}>
              {index === 2 && (
                <Badge className="absolute top-4 right-4 bg-blue-500">
                  Hajj & Umrah
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  {formule.name}
                </CardTitle>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
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
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Souscrire Maintenant
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Avantages spécialisés */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center text-gray-900 dark:text-white">
              Spécialisation Islamique
            </CardTitle>
            <CardDescription className="text-center">
              Services adaptés aux valeurs et besoins musulmans
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {avantages.map((avantage, index) => (
                <div key={index} className="flex items-center">
                  <Star className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{avantage}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Services Hajj & Umrah */}
        <Card className="mb-8 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-amber-200 dark:border-amber-700">
          <CardHeader>
            <CardTitle className="flex items-center text-amber-800 dark:text-amber-200">
              <MapPin className="mr-3 h-6 w-6" />
              Services Hajj & Umrah Spécialisés
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Assistance Spirituelle</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">Guide religieux multilingue 24/7</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">Rappels horaires de prière Mecque/Médine</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">Support rituels Hajj et Umrah</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Services Premium</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">Transport prioritaire Haram</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">Accès eau Zam Zam premium</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">Coordination avec autorités saoudiennes</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700">
          <CardHeader className="text-center">
            <CardTitle className="text-blue-800 dark:text-blue-200">
              Préparez Votre Voyage Sereinement
            </CardTitle>
            <CardDescription className="text-blue-600 dark:text-blue-400">
              Équipe spécialisée voyage islamique à votre service
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button className="flex items-center bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 h-4 w-4" />
                +41 22 123 45 68
              </Button>
              <Button variant="outline" className="flex items-center border-blue-300 text-blue-700 hover:bg-blue-50 dark:border-blue-600 dark:text-blue-300">
                <Mail className="mr-2 h-4 w-4" />
                voyage@al-aman-takaful.ch
              </Button>
            </div>
            <p className="text-sm text-blue-600 dark:text-blue-400 mt-4">
              Devis immédiat • Souscription en ligne • Support multilingue AR/FR/EN
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}