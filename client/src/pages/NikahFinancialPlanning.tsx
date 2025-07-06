import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Heart, Users, Home, Gift, Shield, Calculator, Calendar, TrendingUp, CheckCircle, DollarSign } from "lucide-react";

export default function NikahFinancialPlanning() {
  const weddingPackages = [
    {
      type: "Nikah Simple",
      price: 15000,
      guests: "50-80",
      includes: ["Salle mosquée", "Imam certifié", "Repas halal", "Photos/vidéos", "Décoration simple"],
      mahr: { min: 2000, max: 5000 },
      timeframe: "3-6 mois"
    },
    {
      type: "Nikah Traditionnel",
      price: 35000,
      guests: "100-150", 
      includes: ["Salle prestige", "Imam + scholars", "Banquet complet", "Équipe photo/vidéo", "Décoration luxe", "Transport invités"],
      mahr: { min: 5000, max: 15000 },
      timeframe: "6-12 mois"
    },
    {
      type: "Nikah Royal",
      price: 75000,
      guests: "200-300",
      includes: ["Palais/château", "Comité scholars", "Cuisine gastronomique", "Équipe complète", "Décoration exclusive", "Hébergement VIP"],
      mahr: { min: 15000, max: 50000 },
      timeframe: "12-18 mois"
    }
  ];

  const islamicRequirements = [
    {
      category: "Mahr (Dot islamique)",
      icon: Gift,
      requirements: [
        "Montant fixé avant contrat",
        "Payable immédiatement ou différé",
        "Propriété exclusive épouse",
        "Enregistrement légal requis"
      ],
      calculator: true
    },
    {
      category: "Walima (Banquet)",
      icon: Users,
      requirements: [
        "Nourriture 100% halal certifiée",
        "Séparation hommes/femmes si demandée",
        "Absence alcool et musique haram",
        "Invocation avant repas"
      ],
      calculator: false
    },
    {
      category: "Logement Conjugal",
      icon: Home,
      requirements: [
        "Logement décent selon moyens",
        "Intimité et sécurité garanties",
        "Proche famille épouse si possible",
        "Financement halal uniquement"
      ],
      calculator: true
    },
    {
      category: "Assurance Famille",
      icon: Shield,
      requirements: [
        "Couverture santé Takaful",
        "Assurance vie islamique",
        "Protection revenus halal",
        "Héritage selon Sharia"
      ],
      calculator: false
    }
  ];

  const savingsProgress = {
    totalTarget: 50000,
    currentSaved: 22500,
    progress: 45,
    monthlyContribution: 2500,
    remainingMonths: 11,
    breakdown: {
      nikah: { target: 35000, saved: 15000, progress: 43 },
      mahr: { target: 10000, saved: 5000, progress: 50 },
      logement: { target: 5000, saved: 2500, progress: 50 }
    }
  };

  const islamicPrinciples = [
    {
      principle: "Modération (Wasatiyyah)",
      description: "Éviter l'extravagance et le gaspillage dans les dépenses",
      verse: "وَلَا تُسْرِفُوا إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ",
      translation: "Et ne gaspillez pas, car Il n'aime pas les gaspilleurs",
      reference: "Sourate Al-A'raf 7:31"
    },
    {
      principle: "Justice (Adl)",
      description: "Équité dans les dépenses et droits de chaque époux",
      verse: "وَأَوْفُوا بِالْعُقُودِ",
      translation: "Et respectez vos engagements",
      reference: "Sourate Al-Ma'ida 5:1"
    },
    {
      principle: "Facilité (Yusr)",
      description: "Simplifier le mariage et éviter les difficultés",
      verse: "يُرِيدُ اللَّهُ بِكُمُ الْيُسْرَ وَلَا يُرِيدُ بِكُمُ الْعُسْرَ",
      translation: "Allah veut pour vous la facilité, Il ne veut pas la difficulté",
      reference: "Sourate Al-Baqara 2:185"
    }
  ];

  const timelineSteps = [
    { month: 1, task: "Définition budget global", status: "completed" },
    { month: 2, task: "Calcul et accord Mahr", status: "completed" },
    { month: 3, task: "Recherche salle halal", status: "current" },
    { month: 4, task: "Sélection traiteur certifié", status: "pending" },
    { month: 5, task: "Réservations & confirmations", status: "pending" },
    { month: 6, task: "Finalisation détails", status: "pending" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Heart className="h-8 w-8 text-rose-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Nikah Financial Planning
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            💍 Planification financière mariage islamique - 100% conforme Sharia
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="outline" className="bg-rose-100 text-rose-800 border-rose-300">
              <Gift className="h-4 w-4 mr-1" />
              Mahr Calculator
            </Badge>
            <Badge variant="outline" className="bg-pink-100 text-pink-800 border-pink-300">
              <Shield className="h-4 w-4 mr-1" />
              Takaful intégré
            </Badge>
            <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-300">
              <CheckCircle className="h-4 w-4 mr-1" />
              Halal certifié
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="planning" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="planning">Planification</TabsTrigger>
            <TabsTrigger value="packages">Packages Nikah</TabsTrigger>
            <TabsTrigger value="requirements">Exigences</TabsTrigger>
            <TabsTrigger value="principles">Principes</TabsTrigger>
            <TabsTrigger value="timeline">Chronologie</TabsTrigger>
          </TabsList>

          {/* Planification Financière */}
          <TabsContent value="planning">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Progression générale */}
              <Card className="border-2 border-rose-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-rose-600" />
                    Progression Épargne Globale
                  </CardTitle>
                  <CardDescription>
                    Objectif total: {savingsProgress.totalTarget.toLocaleString()} CHF
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progression</span>
                        <span>{savingsProgress.progress}%</span>
                      </div>
                      <Progress value={savingsProgress.progress} className="h-3" />
                      <div className="text-sm text-gray-600">
                        {savingsProgress.currentSaved.toLocaleString()} CHF / {savingsProgress.totalTarget.toLocaleString()} CHF
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-1">
                        <div className="text-gray-600">Épargne mensuelle</div>
                        <div className="font-bold text-rose-600">{savingsProgress.monthlyContribution.toLocaleString()} CHF</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-gray-600">Mois restants</div>
                        <div className="font-bold text-blue-600">{savingsProgress.remainingMonths} mois</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Répartition budget */}
              <Card className="border-2 border-pink-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-pink-600" />
                    Répartition Budget
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(savingsProgress.breakdown).map(([key, value]) => (
                      <div key={key} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="capitalize">{key === 'nikah' ? 'Cérémonie' : key === 'mahr' ? 'Mahr (Dot)' : 'Logement'}</span>
                          <span>{value.progress}%</span>
                        </div>
                        <Progress value={value.progress} className="h-2" />
                        <div className="text-xs text-gray-600">
                          {value.saved.toLocaleString()} CHF / {value.target.toLocaleString()} CHF
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Packages Nikah */}
          <TabsContent value="packages">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {weddingPackages.map((pkg, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-rose-200">
                  <CardHeader>
                    <CardTitle className="text-center">{pkg.type}</CardTitle>
                    <CardDescription className="text-center">
                      {pkg.guests} invités • {pkg.timeframe}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Prix */}
                      <div className="text-center p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg">
                        <div className="text-2xl font-bold text-rose-800">
                          {pkg.price.toLocaleString()} CHF
                        </div>
                        <div className="text-sm text-rose-600">Package complet</div>
                      </div>

                      {/* Mahr suggéré */}
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-sm text-purple-700">Mahr suggéré</div>
                        <div className="font-bold text-purple-800">
                          {pkg.mahr.min.toLocaleString()} - {pkg.mahr.max.toLocaleString()} CHF
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

                      <Button className="w-full bg-rose-600 hover:bg-rose-700">
                        <Heart className="h-4 w-4 mr-1" />
                        Choisir ce package
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Exigences Islamiques */}
          <TabsContent value="requirements">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {islamicRequirements.map((req, index) => (
                <Card key={index} className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <req.icon className="h-6 w-6 text-blue-600" />
                      {req.category}
                      {req.calculator && (
                        <Badge className="ml-auto bg-green-600">
                          <Calculator className="h-3 w-3 mr-1" />
                          Calculateur
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {req.requirements.map((requirement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                    {req.calculator && (
                      <Button size="sm" className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                        <Calculator className="h-4 w-4 mr-1" />
                        Ouvrir calculateur
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Principes Islamiques */}
          <TabsContent value="principles">
            <div className="space-y-6">
              {islamicPrinciples.map((principle, index) => (
                <Card key={index} className="border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-50">
                  <CardHeader>
                    <CardTitle className="text-emerald-800">{principle.principle}</CardTitle>
                    <CardDescription>{principle.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-center p-4 bg-white rounded-lg border border-emerald-200">
                        <div className="text-lg arabic-text text-emerald-800 mb-2">
                          {principle.verse}
                        </div>
                        <div className="text-sm text-emerald-700 mb-1">
                          "{principle.translation}"
                        </div>
                        <div className="text-xs text-emerald-600">
                          {principle.reference}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Chronologie */}
          <TabsContent value="timeline">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-purple-600" />
                  Chronologie Préparation Nikah
                </CardTitle>
                <CardDescription>Plan étape par étape pour votre mariage islamique</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {timelineSteps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        step.status === 'completed' ? 'bg-green-600 text-white' :
                        step.status === 'current' ? 'bg-blue-600 text-white' :
                        'bg-gray-300 text-gray-600'
                      }`}>
                        {step.month}
                      </div>
                      <div className="flex-1">
                        <div className={`font-medium ${
                          step.status === 'completed' ? 'text-green-800' :
                          step.status === 'current' ? 'text-blue-800' :
                          'text-gray-600'
                        }`}>
                          {step.task}
                        </div>
                      </div>
                      <div>
                        {step.status === 'completed' && <CheckCircle className="h-5 w-5 text-green-600" />}
                        {step.status === 'current' && <Calendar className="h-5 w-5 text-blue-600" />}
                        {step.status === 'pending' && <div className="h-5 w-5 border-2 border-gray-300 rounded-full" />}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}