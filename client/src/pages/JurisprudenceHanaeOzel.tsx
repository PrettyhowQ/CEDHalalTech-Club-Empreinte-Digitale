import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { BookOpen, Scale, DollarSign, Heart, Users, Star, Clock, MapPin } from "lucide-react";

export default function JurisprudenceHanaeOzel() {
  const specialites = [
    {
      nom: "Jurisprudence Islamique",
      icone: <Scale className="w-8 h-8" />,
      couleur: "bg-blue-600",
      description: "Maîtrise complète du Fiqh selon les 4 écoles juridiques",
      domaines: ["Fiqh des Transactions", "Droit Familial Islamique", "Jurisprudence Contemporaine", "Fatwas et Consultation"]
    },
    {
      nom: "Finance Islamique",
      icone: <DollarSign className="w-8 h-8" />,
      couleur: "bg-green-600", 
      description: "Expertise en instruments financiers conformes à la Sharia",
      domaines: ["Banking Islamique", "Sukuk et Investissements", "Takaful et Assurances", "Fintech Halal"]
    },
    {
      nom: "Psychologie Islamique Halal",
      icone: <Heart className="w-8 h-8" />,
      couleur: "bg-purple-600",
      description: "Spécialisée pour les femmes - Collaboration avec Souheila pour accompagnement spirituel complet",
      domaines: ["Thérapie Islamique Féminine", "Développement Personnel Femmes", "Conseil Familial Halal", "Soutien Spirituel Sœurs"]
    }
  ];

  const formations = [
    {
      titre: "Fiqh des Transactions Commerciales",
      duree: "3 mois",
      prix: "450 CHF",
      niveau: "Intermédiaire",
      participants: 234
    },
    {
      titre: "Finance Islamique Moderne",
      duree: "4 mois", 
      prix: "650 CHF",
      niveau: "Avancé",
      participants: 156
    },
    {
      titre: "Psychologie Islamique Féminine (avec Souheila)",
      duree: "6 mois",
      prix: "850 CHF", 
      niveau: "Expert - Spécialisé Femmes",
      participants: 89
    },
    {
      titre: "Consultation Juridique Islamique",
      duree: "2 mois",
      prix: "350 CHF",
      niveau: "Débutant",
      participants: 312
    }
  ];

  const consultations = [
    {
      type: "Consultation Jurisprudence",
      duree: "1h",
      prix: "120 CHF",
      description: "Conseil personnalisé en Fiqh et droit islamique"
    },
    {
      type: "Analyse Finance Islamique", 
      duree: "1h30",
      prix: "180 CHF",
      description: "Évaluation conformité Sharia de vos investissements"
    },
    {
      type: "Thérapie Islamique Féminine (avec Souheila)",
      duree: "2h",
      prix: "250 CHF",
      description: "Accompagnement psycho-spirituel exclusivement pour femmes en binôme spécialisé"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Principal */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mb-6">
            <Scale className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
            Hanaé-Dénise Ozel
          </h1>
          <p className="text-2xl text-gray-600 mb-4">
            Jurisprudence Islamique • Finance Islamique • Psychologie Halal pour Femmes
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <Badge className="bg-blue-100 text-blue-700 text-lg px-4 py-2">
              <BookOpen className="w-5 h-5 mr-2" />
              Experte en Fiqh
            </Badge>
            <Badge className="bg-green-100 text-green-700 text-lg px-4 py-2">
              <DollarSign className="w-5 h-5 mr-2" />
              Finance Sharia
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 text-lg px-4 py-2">
              <Heart className="w-5 h-5 mr-2" />
              Thérapie Islamique
            </Badge>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            <strong>Collaboration privilégiée avec Souheila Yakoubi-Ozel</strong> pour un accompagnement holistique 
            alliant jurisprudence islamique, finance halal et bien-être psycho-spirituel selon les valeurs authentiques de l'Islam.
          </p>
        </div>

        <Tabs defaultValue="specialites" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="specialites">🎯 Spécialités</TabsTrigger>
            <TabsTrigger value="formations">📚 Formations</TabsTrigger>
            <TabsTrigger value="consultations">💼 Consultations</TabsTrigger>
            <TabsTrigger value="collaboration">👭 Collaboration Sœurs</TabsTrigger>
          </TabsList>

          {/* Onglet Spécialités */}
          <TabsContent value="specialites">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {specialites.map((specialite, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${specialite.couleur} rounded-full mb-4 mx-auto`}>
                      <div className="text-white">{specialite.icone}</div>
                    </div>
                    <CardTitle className="text-xl text-gray-800">{specialite.nom}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{specialite.description}</p>
                    <div className="space-y-2">
                      {specialite.domaines.map((domaine, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2" />
                          {domaine}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet Formations */}
          <TabsContent value="formations">
            <div className="grid md:grid-cols-2 gap-6">
              {formations.map((formation, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500 hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-700">{formation.titre}</CardTitle>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {formation.duree}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {formation.niveau}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <Users className="w-3 h-3 mr-1" />
                        {formation.participants} participants
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-green-600">{formation.prix}</span>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        S'inscrire
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet Consultations */}
          <TabsContent value="consultations">
            <div className="grid md:grid-cols-3 gap-6">
              {consultations.map((consultation, index) => (
                <Card key={index} className="border-2 border-purple-200 hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg text-purple-700">{consultation.type}</CardTitle>
                    <div className="text-3xl font-bold text-purple-600">{consultation.prix}</div>
                    <div className="text-sm text-gray-600">({consultation.duree})</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center mb-4">{consultation.description}</p>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Réserver Consultation
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-center text-green-700">
                  📍 Cabinet de Consultation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-700 font-medium">Genève, Suisse 🇨🇭</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Consultations en personne et en ligne disponibles
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Contact :</strong> hanae.juridique@ced-halaltech.com
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Collaboration Sœurs */}
          <TabsContent value="collaboration">
            <Card className="border-2 border-pink-200 bg-pink-50">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-pink-700">
                  👭 Collaboration Privilégiée : Hanaé-Dénise & Souheila
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white rounded-lg border border-pink-200">
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">
                      🏛️ Hanaé-Dénise Ozel
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Jurisprudence Islamique</strong> : Expertise Fiqh 4 écoles</li>
                      <li>• <strong>Finance Islamique</strong> : Banking et investissements halal</li>
                      <li>• <strong>Droit Islamique</strong> : Consultation juridique Sharia</li>
                      <li>• <strong>Formation Academic</strong> : Certification jurisprudence</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-white rounded-lg border border-pink-200">
                    <h3 className="text-xl font-semibold text-green-700 mb-4">
                      🌿 Souheila Yakoubi-Ozel
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Expertise Santé</strong> : Diététique et médecine prophétique</li>
                      <li>• <strong>Coaching Holistique</strong> : Accompagnement bien-être</li>
                      <li>• <strong>Nutrition Spirituelle</strong> : Alimentation halal thérapeutique</li>
                      <li>• <strong>Sports & Wellness</strong> : Centre sportif mondial féminin</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border-2 border-purple-200">
                  <h3 className="text-xl font-semibold text-purple-700 mb-4 text-center">
                    💜 Psychologie Islamique Halal - Collaboration Unique
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded border border-purple-200">
                      <h4 className="font-medium text-purple-600 mb-2">Approche Juridico-Spirituelle</h4>
                      <p className="text-sm text-gray-600">
                        Hanaé apporte l'expertise juridique islamique pour résoudre les questionnements 
                        religieux et familiaux selon le Fiqh authentique.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded border border-purple-200">
                      <h4 className="font-medium text-purple-600 mb-2">Approche Santé-Holistique</h4>
                      <p className="text-sm text-gray-600">
                        Souheila complète avec son expertise santé pour un accompagnement 
                        psycho-corporel selon la médecine prophétique.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <h4 className="font-semibold text-purple-700 mb-3">
                      🤝 Programmes en Binôme Sœurs Yakoubi-Ozel - Spécialisés Femmes
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="p-3 bg-purple-50 rounded">
                        <strong>Thérapie Familiale Islamique Féminine</strong><br/>
                        450 CHF/séance (2h30)<br/>
                        <span className="text-xs text-purple-600">👩‍👩‍👧‍👦 Exclusivement pour femmes</span>
                      </div>
                      <div className="p-3 bg-purple-50 rounded">
                        <strong>Accompagnement Mariage Halal</strong><br/>
                        350 CHF/séance (2h)<br/>
                        <span className="text-xs text-purple-600">👰 Préparation épouses musulmanes</span>
                      </div>
                      <div className="p-3 bg-purple-50 rounded">
                        <strong>Développement Personnel Spirituel</strong><br/>
                        280 CHF/séance (1h30)<br/>
                        <span className="text-xs text-purple-600">🌸 Épanouissement féminin islamique</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Accès Rapide IA */}
        <div className="mt-12">
          <Card className="border-2 border-yellow-300 bg-yellow-50">
            <CardContent className="text-center py-8">
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">
                🤖 Accès Direct : IA Coaching Halal Souheila
              </h3>
              <p className="text-gray-600 mb-6">
                Pour un coaching immédiat en nutrition et santé, accédez à l'IA développée 
                exclusivement par Souheila pour son domaine d'expertise.
              </p>
              <Link href="/ia-coaching-halal">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3">
                  🚀 Accéder à l'IA Coaching Halal
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 text-center space-x-4">
          <Link href="/sante-souheila-yakoubi">
            <Button variant="outline" size="lg">
              ← Espace Santé Souheila
            </Button>
          </Link>
          <Link href="/sports-haut-niveau">
            <Button variant="outline" size="lg">
              Sports Haut Niveau
            </Button>
          </Link>
          <Link href="/ced-halal-home">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Retour Écosystème CED
            </Button>
          </Link>
        </div>
      </div>

      {/* Copyright Protection */}
      <div className="mt-16 py-8 border-t-2 border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-lg font-medium">
            © Yakoubi Yamina - CED HalalTech™ • Jurisprudence Islamique Hanaé-Dénise Ozel
          </p>
          <p className="text-gray-500 text-sm mt-2">
            🇨🇭 Expertise juridique islamique authentique • Données hébergées en Suisse • Conforme RGPD & LPD
          </p>
          <p className="text-purple-600 text-sm mt-2 font-medium">
            Collaboration sœurs Yakoubi-Ozel : Excellence en Jurisprudence, Finance et Psychologie Islamique Halal
          </p>
        </div>
      </div>
    </div>
  );
}