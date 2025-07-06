import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { MapPin, Plane, Calendar, DollarSign, Users, Target, TrendingUp, Shield, Star, CheckCircle } from "lucide-react";

export default function HajjSavingsPlanner() {
  const hajjPackages = [
    {
      country: "Arabie Saoudite",
      city: "La Mecque",
      duration: "14 jours",
      type: "Standard",
      price: 8500,
      currency: "CHF",
      includes: ["Vol aller-retour", "Hébergement Mina/Arafat", "Transport local", "Guide spirituel"],
      rating: 4.8,
      availability: "Disponible"
    },
    {
      country: "Arabie Saoudite", 
      city: "La Mecque + Médine",
      duration: "21 jours",
      type: "Premium",
      price: 15000,
      currency: "CHF",
      includes: ["Vol business", "Hôtel 5 étoiles", "Transport VIP", "Guide scholar certifié"],
      rating: 4.9,
      availability: "Places limitées"
    },
    {
      country: "Arabie Saoudite",
      city: "Programme Famille",
      duration: "18 jours",
      type: "Familial",
      price: 25000,
      currency: "CHF",
      includes: ["4 personnes", "Appartement familial", "Accompagnement enfants", "Programme éducatif"],
      rating: 4.7,
      availability: "Sur demande"
    }
  ];

  const savingsPlans = [
    {
      id: 1,
      targetAmount: 8500,
      currentAmount: 3200,
      monthlyTarget: 420,
      remainingMonths: 12,
      progress: 37,
      nextHajj: "2026",
      planType: "Standard"
    },
    {
      id: 2,
      targetAmount: 15000,
      currentAmount: 7500,
      monthlyTarget: 625,
      remainingMonths: 12,
      progress: 50,
      nextHajj: "2026",
      planType: "Premium"
    },
    {
      id: 3,
      targetAmount: 25000,
      currentAmount: 5000,
      monthlyTarget: 1000,
      remainingMonths: 20,
      progress: 20,
      nextHajj: "2027",
      planType: "Famille"
    }
  ];

  const islamicFeatures = [
    {
      title: "Épargne Halal 100%",
      description: "Aucun intérêt Riba - Conformité Sharia complète",
      icon: Shield,
      benefits: ["0% intérêt", "Profit-sharing Mudaraba", "Supervision scholars"]
    },
    {
      title: "Du'a Automatique",
      description: "Invocation pour faciliter le pèlerinage à chaque versement",
      icon: Star,
      benefits: ["Du'a authentique", "Rappel spirituel", "Baraka préservée"]
    },
    {
      title: "Calendrier Islamique",
      description: "Planification selon calendrier hijri et mois sacrés",
      icon: Calendar,
      benefits: ["Dates hijri", "Mois Dhul Hijjah", "Événements religieux"]
    },
    {
      title: "Assurance Al-Aman",
      description: "Protection voyage Takaful pour pèlerinage sécurisé",
      icon: Users,
      benefits: ["Couverture médicale", "Annulation voyage", "Assistance 24/7"]
    }
  ];

  const milestones = [
    { percentage: 25, reward: "Badge Bronze Hajj", unlocked: true },
    { percentage: 50, reward: "Guide préparation spirituelle", unlocked: true },
    { percentage: 75, reward: "Réduction assurance Al-Aman", unlocked: false },
    { percentage: 100, reward: "Accompagnement VIP complet", unlocked: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="h-8 w-8 text-emerald-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Hajj Savings Planner
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            🕋 Planificateur d'épargne pour le pèlerinage - 100% conforme Sharia
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="outline" className="bg-emerald-100 text-emerald-800 border-emerald-300">
              <Shield className="h-4 w-4 mr-1" />
              0% Riba garanti
            </Badge>
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
              <Star className="h-4 w-4 mr-1" />
              Du'a intégrées
            </Badge>
            <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-300">
              <Calendar className="h-4 w-4 mr-1" />
              Calendrier Hijri
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="planner" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="planner">Mon Plan</TabsTrigger>
            <TabsTrigger value="packages">Packages Hajj</TabsTrigger>
            <TabsTrigger value="features">Caractéristiques</TabsTrigger>
            <TabsTrigger value="progress">Progression</TabsTrigger>
          </TabsList>

          {/* Planificateur */}
          <TabsContent value="planner">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {savingsPlans.map((plan) => (
                <Card key={plan.id} className="border-2 border-emerald-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Plan {plan.planType}
                      <Badge className="bg-emerald-600">
                        Hajj {plan.nextHajj}
                      </Badge>
                    </CardTitle>
                    <CardDescription>
                      Objectif: {plan.targetAmount.toLocaleString()} CHF
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Progression */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progression</span>
                          <span>{plan.progress}%</span>
                        </div>
                        <Progress value={plan.progress} className="h-3" />
                        <div className="text-sm text-gray-600">
                          {plan.currentAmount.toLocaleString()} CHF / {plan.targetAmount.toLocaleString()} CHF
                        </div>
                      </div>

                      {/* Détails épargne */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="space-y-1">
                          <div className="text-gray-600">Épargne mensuelle</div>
                          <div className="font-bold text-emerald-600">{plan.monthlyTarget} CHF</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-gray-600">Mois restants</div>
                          <div className="font-bold text-blue-600">{plan.remainingMonths} mois</div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="space-y-2">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                          <DollarSign className="h-4 w-4 mr-1" />
                          Effectuer versement
                        </Button>
                        <Button variant="outline" className="w-full">
                          <Target className="h-4 w-4 mr-1" />
                          Ajuster objectif
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Packages Hajj */}
          <TabsContent value="packages">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {hajjPackages.map((pkg, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {pkg.type}
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">{pkg.rating}</span>
                      </div>
                    </CardTitle>
                    <CardDescription>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {pkg.city}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {pkg.duration}
                        </div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Prix */}
                      <div className="text-center p-4 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-lg">
                        <div className="text-2xl font-bold text-emerald-800">
                          {pkg.price.toLocaleString()} {pkg.currency}
                        </div>
                        <div className="text-sm text-emerald-600">
                          {pkg.type === "Familial" ? "pour 4 personnes" : "par personne"}
                        </div>
                      </div>

                      {/* Inclus */}
                      <div>
                        <h4 className="font-medium mb-2">Inclus dans le package</h4>
                        <ul className="space-y-1 text-sm">
                          {pkg.includes.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Disponibilité */}
                      <div className="flex items-center justify-between">
                        <Badge variant={pkg.availability === "Disponible" ? "default" : "secondary"}>
                          {pkg.availability}
                        </Badge>
                        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                          <Plane className="h-4 w-4 mr-1" />
                          Réserver
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Caractéristiques Islamiques */}
          <TabsContent value="features">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {islamicFeatures.map((feature, index) => (
                <Card key={index} className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                      {feature.title}
                    </CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Progression & Récompenses */}
          <TabsContent value="progress">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>🏆 Étapes & Récompenses Spirituelles</CardTitle>
                  <CardDescription>Débloquez des avantages à chaque palier atteint</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {milestones.map((milestone, index) => (
                      <Card key={index} className={`text-center p-4 ${
                        milestone.unlocked ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                      }`}>
                        <div className="space-y-2">
                          <div className={`text-2xl font-bold ${
                            milestone.unlocked ? 'text-green-600' : 'text-gray-400'
                          }`}>
                            {milestone.percentage}%
                          </div>
                          <div className="text-sm font-medium">{milestone.reward}</div>
                          <div className="flex justify-center">
                            {milestone.unlocked ? (
                              <CheckCircle className="h-6 w-6 text-green-600" />
                            ) : (
                              <Target className="h-6 w-6 text-gray-400" />
                            )}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Section Du'a */}
              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-800">🤲 Du'a pour le Hajj</CardTitle>
                  <CardDescription>Invocation récitée à chaque versement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-lg arabic-text text-purple-800">
                      اللَّهُمَّ بَلِّغْنِي بَيْتَكَ الْحَرَامَ
                    </div>
                    <div className="text-sm text-purple-700">
                      "Ô Allah, fais-moi parvenir à Ta Maison Sacrée"
                    </div>
                    <Button variant="outline" className="border-purple-300 text-purple-700">
                      <Star className="h-4 w-4 mr-1" />
                      Écouter récitation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}