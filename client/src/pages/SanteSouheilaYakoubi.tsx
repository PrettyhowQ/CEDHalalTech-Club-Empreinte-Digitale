import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Heart, Leaf, Star, BookOpen, Clock, Users, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function SanteSouheilaYakoubi() {
  const specialites = [
    {
      titre: "Diététique Islamique",
      description: "Nutrition selon les principes prophétiques et les bienfaits halal",
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      expertise: 95,
      certifications: ["Nutritionniste Certifiée", "Médecine Prophétique", "Alimentation Halal"]
    },
    {
      titre: "Santé Naturelle",
      description: "Remèdes naturels et phytothérapie selon la Sunna authentique",
      icon: <Heart className="h-8 w-8 text-red-500" />,
      expertise: 92,
      certifications: ["Phytothérapie", "Aromathérapie", "Naturopathie"]
    },
    {
      titre: "Médecine Prophétique",
      description: "At-Tibb An-Nabawi - Science médicale du Prophète ﷺ",
      icon: <Star className="h-8 w-8 text-yellow-600" />,
      expertise: 98,
      certifications: ["Tibb Nabawi", "Hijama", "Ruqyah Thérapeutique"]
    },
    {
      titre: "Coaching Santé Féminine",
      description: "Accompagnement spécialisé santé des femmes musulmanes",
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      expertise: 94,
      certifications: ["Coach Santé", "Psychologie Positive", "Thérapie Holistique"]
    }
  ];

  const remedes = [
    {
      nom: "Miel de Sidr Yéménite",
      usage: "Immunité, digestion, cicatrisation",
      hadith: "« Le miel est un remède pour toute maladie » - Sahih Bukhari",
      dosage: "1 cuillère à café à jeun",
      prix: "89 CHF"
    },
    {
      nom: "Huile de Nigelle (Habba Sawda)",
      usage: "Anti-inflammatoire, allergies, système immunitaire",
      hadith: "« Dans la graine noire il y a guérison de toute maladie sauf la mort » - Sahih Bukhari",
      dosage: "1 cuillère à café matin et soir",
      prix: "25 CHF"
    },
    {
      nom: "Dattes Ajwa de Médine",
      usage: "Énergie, protection spirituelle, santé cardiaque",
      hadith: "« Celui qui mange 7 dattes Ajwa le matin ne sera atteint ni par poison ni par sorcellerie » - Sahih Bukhari",
      dosage: "7 dattes le matin à jeun",
      prix: "45 CHF/kg"
    },
    {
      nom: "Eau de Zamzam",
      usage: "Purification, hydratation bénie, santé générale",
      hadith: "« L'eau de Zamzam est bonne pour ce pour quoi on la boit » - Sahih Muslim",
      dosage: "Selon besoin avec intention",
      prix: "15 CHF/litre"
    }
  ];

  const consultations = [
    {
      type: "Consultation Diététique Complète",
      duree: "90 minutes",
      prix: "150 CHF",
      inclut: ["Bilan nutritionnel", "Plan alimentaire halal", "Suivi 1 mois", "Recettes prophétiques"]
    },
    {
      type: "Bilan Santé Naturelle",
      duree: "120 minutes", 
      prix: "180 CHF",
      inclut: ["Diagnostic holistique", "Remèdes naturels", "Programme détox", "Lifestyle islamique"]
    },
    {
      type: "Séance Médecine Prophétique",
      duree: "60 minutes",
      prix: "120 CHF",
      inclut: ["At-Tibb An-Nabawi", "Hijama si nécessaire", "Invocations thérapeutiques", "Plan de guérison"]
    },
    {
      type: "Coaching Transformation Santé",
      duree: "3 mois",
      prix: "890 CHF",
      inclut: ["12 séances", "Plan complet", "Suivi WhatsApp", "Groupe soutien sœurs"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-16 w-16 text-red-500 mr-4" />
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Espace Santé & Bien-être
              </h1>
              <h2 className="text-3xl font-semibold text-gray-700 mt-2">
                Souheila-iness Yakoubi-Ozel
              </h2>
              <p className="text-xl text-gray-600 mt-2 max-w-3xl mx-auto">
                🌿 Diététicienne & Naturopathe Spécialisée | 💚 Médecine Prophétique Authentique | 🍯 Santé Naturelle 100% Halal
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Star className="h-5 w-5 mr-2" />
              Certifiée At-Tibb An-Nabawi
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Heart className="h-5 w-5 mr-2" />
              Nutritionniste Agréée Suisse
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Leaf className="h-5 w-5 mr-2" />
              Phytothérapeute Certifiée
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Shield className="h-5 w-5 mr-2" />
              Coach Santé Holistique
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="specialites" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-4">
            <TabsTrigger value="specialites">Spécialités</TabsTrigger>
            <TabsTrigger value="remedes">Remèdes Prophétiques</TabsTrigger>
            <TabsTrigger value="consultations">Consultations</TabsTrigger>
            <TabsTrigger value="formation">Formation Continue</TabsTrigger>
          </TabsList>

          {/* Spécialités */}
          <TabsContent value="specialites">
            <div className="grid md:grid-cols-2 gap-6">
              {specialites.map((specialite, index) => (
                <Card key={index} className="border-2 border-green-200 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {specialite.icon}
                      <div>
                        <CardTitle className="text-xl text-green-700">{specialite.titre}</CardTitle>
                        <CardDescription className="text-gray-600">{specialite.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Niveau d'expertise</span>
                          <span className="font-semibold">{specialite.expertise}%</span>
                        </div>
                        <Progress value={specialite.expertise} className="h-2" />
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Certifications :</h4>
                        <div className="flex flex-wrap gap-2">
                          {specialite.certifications.map((cert, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Remèdes Prophétiques */}
          <TabsContent value="remedes">
            <div className="grid md:grid-cols-2 gap-6">
              {remedes.map((remede, index) => (
                <Card key={index} className="border-2 border-yellow-200 hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl text-yellow-700 flex items-center">
                      <Star className="h-6 w-6 mr-2" />
                      {remede.nom}
                    </CardTitle>
                    <CardDescription className="text-gray-600 font-medium">
                      {remede.usage}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <h4 className="font-semibold text-yellow-800 mb-2">📖 Hadith Authentique :</h4>
                        <p className="text-yellow-700 italic text-sm">{remede.hadith}</p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-gray-700">Posologie :</h4>
                          <p className="text-gray-600 text-sm">{remede.dosage}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-green-600">{remede.prix}</p>
                          <Button size="sm" className="mt-2">Commander</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Consultations */}
          <TabsContent value="consultations">
            <div className="grid md:grid-cols-2 gap-6">
              {consultations.map((consultation, index) => (
                <Card key={index} className="border-2 border-blue-200 hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-700">{consultation.type}</CardTitle>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {consultation.duree}
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        {consultation.prix}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-700">Cette consultation inclut :</h4>
                      <ul className="space-y-1">
                        {consultation.inclut.map((item, i) => (
                          <li key={i} className="flex items-center text-gray-600">
                            <span className="text-green-500 mr-2">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                        Réserver cette consultation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-8 border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-2xl text-green-700 flex items-center">
                  <Users className="h-8 w-8 mr-3" />
                  Contactez Souheila-iness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">📧 Email Professionnel</h3>
                    <p className="text-gray-600">souheila.sante@ced-halaltech.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">📱 WhatsApp Consultations</h3>
                    <p className="text-gray-600">+41 76 xxx xx xx</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">🏥 Cabinet - Genève</h3>
                    <p className="text-gray-600">Rue de la Santé 15, 1201 Genève</p>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                    Prendre Rendez-vous Maintenant
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Formation Continue */}
          <TabsContent value="formation">
            <div className="grid md:grid-cols-1 gap-6">
              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-700 flex items-center">
                    <BookOpen className="h-8 w-8 mr-3" />
                    Formation Continue & Recherche
                  </CardTitle>
                  <CardDescription>
                    Souheila-iness continue sa formation dans les meilleures institutions pour offrir les soins les plus authentiques et efficaces
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-3">🎓 Formations Actuelles (2025)</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Master en Médecine Prophétique - Université Islamique de Médine</li>
                        <li>• Certification Hijama Thérapeutique - Institut Ibn Sina</li>
                        <li>• Phytothérapie Avancée - École Suisse de Naturopathie</li>
                        <li>• Nutrition Sportive Halal - Academic Sport Nutrition</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-3">🔬 Recherches & Publications</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• "Bienfaits du Miel de Sidr dans la Nutrition Moderne"</li>
                        <li>• "Hijama et Système Immunitaire - Étude Clinique"</li>
                        <li>• "Alimentation Prophétique et Prévention Maladies"</li>
                        <li>• "Guide Complet Santé Féminine en Islam"</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-700 mb-2">🌟 Vision Souheila-iness :</h3>
                    <p className="text-purple-600 italic">
                      "Allier la sagesse prophétique millénaire aux découvertes scientifiques modernes pour offrir 
                      une santé holistique authentique à chaque musulman(e). La guérison vient d'Allah, 
                      nous ne sommes que des instruments de Sa miséricorde."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 text-center">
          <Link href="/ced-halal-home">
            <Button variant="outline" size="lg" className="mr-4">
              ← Retour Écosystème CED
            </Button>
          </Link>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Découvrir Sports de Haut Niveau →
          </Button>
        </div>
      </div>

      {/* Copyright Protection */}
      <div className="mt-16 py-8 border-t-2 border-green-200 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Yakoubi Yamina - CED HalalTech™ | Espace Santé Souheila-iness Yakoubi-Ozel
            <br />
            🇨🇭 Données hébergées en Suisse • Conforme RGPD & LPD • Usage exclusivement halal
          </p>
        </div>
      </div>
    </div>
  );
}