import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CreditCard, Star, Shield, Gift, Zap, Crown, Phone, Mail, Wallet, TrendingUp } from "lucide-react";

export default function CartesYakoubi() {
  const cartes = [
    {
      nom: "Yakoubi Essential",
      type: "Débit Mastercard",
      couleur: "from-green-400 to-green-600",
      prix: "Gratuite",
      plafond: "2'000 CHF/jour",
      cashback: "0.5%",
      avantages: ["Retraits ATM gratuits", "Paiements sans contact", "App mobile CED", "Support 24/7"],
      icone: Shield
    },
    {
      nom: "Yakoubi Business",
      type: "Business Mastercard",
      couleur: "from-blue-400 to-blue-600", 
      prix: "15 CHF/mois",
      plafond: "10'000 CHF/jour",
      cashback: "1.5%",
      avantages: ["Comptabilité intégrée", "Frais professionnels", "Assurance voyage", "Concierge business"],
      icone: TrendingUp,
      populaire: true
    },
    {
      nom: "Yakoubi Premium",
      type: "World Elite Mastercard",
      couleur: "from-purple-400 to-purple-600",
      prix: "50 CHF/mois", 
      plafond: "25'000 CHF/jour",
      cashback: "2.5%",
      avantages: ["Salon VIP aéroports", "Conciergerie premium", "Assurance voyage premium", "Points voyage"],
      icone: Star
    },
    {
      nom: "Yakoubi Royal",
      type: "Black Card Exclusive",
      couleur: "from-gray-700 to-black",
      prix: "200 CHF/mois",
      plafond: "Illimité",
      cashback: "5%", 
      avantages: ["Accès exclusif Majlis", "Conseiller dédié", "Limousine service", "Investment advisory"],
      icone: Crown,
      exclusive: true
    }
  ];

  const benefices = [
    {
      titre: "Cashback Halal",
      description: "Jusqu'à 5% de cashback sur tous vos achats, redistribué selon principes islamiques",
      icone: Gift,
      couleur: "text-green-500"
    },
    {
      titre: "Paiements Instantanés",
      description: "Technologie contactless et Apple/Google Pay pour des paiements ultra-rapides",
      icone: Zap,
      couleur: "text-blue-500"
    },
    {
      titre: "Sécurité Maximale",
      description: "Protection 3D Secure, notifications temps réel et blocage/déblocage instantané",
      icone: Shield,
      couleur: "text-purple-500"
    },
    {
      titre: "Gestion Mobile",
      description: "Application CED Bank pour gérer vos cartes, limites et dépenses en temps réel",
      icone: Wallet,
      couleur: "text-orange-500"
    }
  ];

  const statistiques = [
    { label: "Cartes actives", valeur: "47,892", progress: 85 },
    { label: "Satisfaction client", valeur: "98.7%", progress: 99 },
    { label: "Cashback versé", valeur: "2.4M CHF", progress: 75 },
    { label: "Pays acceptés", valeur: "195+", progress: 95 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-indigo-100 dark:bg-indigo-900 p-4 rounded-full mr-4">
              <CreditCard className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Cartes Yakoubi CED Bank
              </h1>
              <p className="text-xl text-indigo-600 dark:text-indigo-400 mt-2">
                Cartes Bancaires Islamiques Premium 💳
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez notre gamme exclusive de cartes bancaires conformes Sharia, 
            conçues par la famille Yakoubi pour répondre aux besoins de la communauté musulmane mondiale.
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {statistiques.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  {stat.valeur}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {stat.label}
                </div>
                <Progress value={stat.progress} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cartes disponibles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cartes.map((carte, index) => (
            <Card key={index} className={`relative overflow-hidden ${
              carte.populaire ? 'border-indigo-300 dark:border-indigo-600 scale-105' : 
              carte.exclusive ? 'border-gray-800 dark:border-gray-400' : 
              'border-gray-200 dark:border-gray-700'
            }`}>
              {carte.populaire && (
                <Badge className="absolute top-4 right-4 bg-indigo-500 z-10">
                  Plus Populaire
                </Badge>
              )}
              {carte.exclusive && (
                <Badge className="absolute top-4 right-4 bg-black text-white z-10">
                  Exclusive
                </Badge>
              )}
              
              {/* Carte visuelle */}
              <div className={`h-32 bg-gradient-to-r ${carte.couleur} m-4 rounded-lg relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative p-4 h-full flex flex-col justify-between text-white">
                  <div className="flex justify-between items-start">
                    <carte.icone className="h-6 w-6" />
                    <span className="text-xs">CED Bank</span>
                  </div>
                  <div>
                    <div className="text-xs opacity-80">{carte.type}</div>
                    <div className="font-bold">{carte.nom}</div>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    {carte.prix}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Plafond: {carte.plafond}
                  </div>
                  <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                    Cashback {carte.cashback}
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {carte.avantages.map((avantage, idx) => (
                    <li key={idx} className="flex items-center text-xs">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">{avantage}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-sm">
                  Commander la carte
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bénéfices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center text-gray-900 dark:text-white">
              Pourquoi Choisir les Cartes Yakoubi ?
            </CardTitle>
            <CardDescription className="text-center">
              Des avantages uniques pour la communauté musulmane
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefices.map((benefice, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefice.icone className={`h-8 w-8 ${benefice.couleur}`} />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    {benefice.titre}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {benefice.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fonctionnalités spéciales */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="border-green-200 dark:border-green-700">
            <CardHeader className="bg-green-50 dark:bg-green-900/20">
              <CardTitle className="text-green-800 dark:text-green-200">
                Mode Prière Intelligent
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Vos cartes Yakoubi se mettent automatiquement en pause pendant les heures de prière 
                pour respecter vos obligations spirituelles.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Blocage automatique 15min avant l'Adhan
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Réactivation post-prière automatique
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Géolocalisation Qibla intégrée
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200 dark:border-purple-700">
            <CardHeader className="bg-purple-50 dark:bg-purple-900/20">
              <CardTitle className="text-purple-800 dark:text-purple-200">
                Zakat Automatique
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Calcul et prélèvement automatique de la Zakat selon vos transactions 
                et vos avoirs, redistribués à des œuvres caritatives certifiées.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Calcul selon l'année lunaire Hijri
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Associations caritatives vérifiées
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Certificat Zakat annuel
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Contact pour cartes */}
        <Card className="bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-700">
          <CardHeader className="text-center">
            <CardTitle className="text-indigo-800 dark:text-indigo-200">
              Commandez Votre Carte Yakoubi
            </CardTitle>
            <CardDescription className="text-indigo-600 dark:text-indigo-400">
              Conseillers spécialisés cartes bancaires islamiques
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button className="flex items-center bg-indigo-600 hover:bg-indigo-700">
                <Phone className="mr-2 h-4 w-4" />
                +41 22 123 45 71
              </Button>
              <Button variant="outline" className="flex items-center border-indigo-300 text-indigo-700 hover:bg-indigo-50 dark:border-indigo-600 dark:text-indigo-300">
                <Mail className="mr-2 h-4 w-4" />
                cartes@ced-bank.com
              </Button>
            </div>
            <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-4">
              Réception en 3-5 jours • Activation instantanée • Support multilingue
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}