import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Trophy, Target, Timer, Users, Star, Zap, Heart, Apple, Book, Award } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function SportsHautNiveau() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const categoriesSports = [
    {
      nom: "Sports Olympiques d'Été",
      icon: <Trophy className="h-8 w-8 text-yellow-600" />,
      count: 28,
      sports: ["Athlétisme", "Natation", "Gymnastique", "Cyclisme", "Tennis", "Football", "Basketball", "Volleyball", "Boxe", "Judo", "Taekwondo", "Escrime", "Tir à l'arc", "Aviron", "Badminton", "Tennis de table", "Haltérophilie", "Lutte", "Hockey sur gazon", "Handball", "Water-polo", "Triathlon", "Golf", "Rugby à 7", "Escalade sportive", "Skateboard", "Surf", "Karaté"]
    },
    {
      nom: "Sports Olympiques d'Hiver", 
      icon: <Target className="h-8 w-8 text-blue-600" />,
      count: 15,
      sports: ["Ski alpin", "Ski de fond", "Saut à ski", "Combiné nordique", "Biathlon", "Snowboard", "Hockey sur glace", "Patinage artistique", "Patinage de vitesse", "Short-track", "Curling", "Bobsleigh", "Luge", "Skeleton", "Ski freestyle"]
    },
    {
      nom: "Sports de Combat",
      icon: <Zap className="h-8 w-8 text-red-600" />,
      count: 12,
      sports: ["Boxe anglaise", "Kickboxing", "Muay Thaï", "MMA", "Judo", "Jiu-jitsu brésilien", "Karaté", "Taekwondo", "Kung Fu", "Krav Maga", "Capoeira", "Sambo"]
    }
  ];

  const sportDetails = {
    "Athlétisme": {
      disciplines: ["Sprint (100m, 200m, 400m)", "Demi-fond (800m, 1500m)", "Fond (5000m, 10000m, Marathon)", "Haies", "Saut en hauteur", "Saut en longueur", "Saut à la perche", "Lancer du poids", "Lancer du disque", "Lancer du javelot", "Lancer du marteau"],
      nutrition: {
        preEntrainement: "Flocons d'avoine + miel + dattes + amandes (2h avant)",
        postEntrainement: "Protéine whey halal + banane + eau de coco",
        hydratation: "3-4L d'eau/jour + électrolytes naturels",
        supplements: "Créatine halal, BCAA, vitamines B-complex"
      },
      entrainement: {
        frequence: "6 jours/semaine",
        duree: "2-3h/séance",
        periodisation: "Macrocycle annuel, mésocycles 4 semaines, microcycles hebdomadaires",
        recuperation: "1 jour repos complet, massage, étirements, sommeil 8-9h"
      },
      competitions: {
        locales: "Championnats cantonaux suisses",
        nationales: "Championnats de Suisse, Mémorial Athletissima",
        internationales: "Diamond League, Championnats d'Europe, Jeux Olympiques",
        calendrier: "Saison outdoor: Mai-Septembre, Saison indoor: Décembre-Mars"
      },
      materiel: "Pointes d'athlétisme spécialisées, textile technique, chronomètre GPS",
      cout: "8'000-15'000 CHF/an (entraînement + compétitions + matériel)"
    },
    "Natation": {
      disciplines: ["Nage libre (50m à 1500m)", "Dos crawlé", "Brasse", "Papillon", "4 nages individuel", "Relais", "Eau libre", "Natation synchronisée"],
      nutrition: {
        preEntrainement: "Banane + dattes + eau de coco (30-45min avant)",
        postEntrainement: "Shake protéiné + fruits + glucides complexes",
        hydratation: "4-5L d'eau/jour minimum",
        supplements: "Protéine whey, créatine, oméga-3, magnésium"
      },
      entrainement: {
        frequence: "10-12 séances/semaine (2 séances/jour)",
        duree: "1.5-2h/séance piscine + musculation",
        volume: "60-80km/semaine pour élite",
        recuperation: "Étirements, massage, bains froids/chauds"
      },
      competitions: {
        locales: "Championnats régionaux, Meeting de Genève",
        nationales: "Championnats de Suisse, Trophée International",
        internationales: "Meeting Mare Nostrum, Championnats d'Europe, Jeux Olympiques",
        calendrier: "Saison courte: Octobre-Avril, Saison longue: Mai-Août"
      },
      materiel: "Maillots tech, lunettes, plaquettes, palmes, pull-buoy",
      cout: "12'000-20'000 CHF/an (piscine + coach + compétitions)"
    },
    "Football": {
      disciplines: ["Football 11", "Futsal", "Football de plage", "Football féminin"],
      nutrition: {
        preEntrainement: "Pâtes complètes + légumes + viande halal (3h avant)",
        postEntrainement: "Recovery drink + fruits + protéines",
        hydratation: "500ml/h d'effort + électrolytes",
        supplements: "Créatine, BCAA, vitamines, probiotiques"
      },
      entrainement: {
        frequence: "5-6 fois/semaine",
        duree: "1.5-2h/séance",
        composants: "Technique, tactique, physique, mental",
        recuperation: "Étirements, massage, cryothérapie"
      },
      competitions: {
        locales: "Challenge League, Promotion League",
        nationales: "Super League, Coupe de Suisse",
        internationales: "Champions League, Europa League, Coupes du Monde",
        calendrier: "Saison: Juillet-Mai avec pause hivernale"
      },
      materiel: "Chaussures à crampons, protège-tibias, maillots, ballons",
      cout: "5'000-25'000 CHF/an selon niveau (amateur à professionnel)"
    }
  };

  const programmesEntrainement = [
    {
      nom: "Programme Elite Performance",
      niveau: "Compétition Internationale",
      duree: "12 mois",
      prix: "2'500 CHF/mois",
      inclut: ["Coach personnel", "Plan nutrition Souheila", "Suivi médical", "Analyse vidéo", "Préparation mentale", "Matériel technique"]
    },
    {
      nom: "Programme Talent Development", 
      niveau: "Compétition Nationale",
      duree: "6 mois",
      prix: "1'200 CHF/mois",
      inclut: ["Entraînement groupe", "Nutrition sportive", "Tests physiques", "Compétitions", "Matériel de base"]
    },
    {
      nom: "Programme Sport-Études",
      niveau: "Jeunes Espoirs",
      duree: "Année scolaire",
      prix: "800 CHF/mois",
      inclut: ["Horaires adaptés", "Soutien scolaire", "Entraînement", "Suivi nutrition", "Encadrement éducatif"]
    }
  ];

  const filteredSports = categoriesSports.map(categorie => ({
    ...categorie,
    sports: categorie.sports.filter(sport => 
      sport.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(categorie => categorie.sports.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Trophy className="h-16 w-16 text-yellow-600 mr-4" />
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Sports de Haut Niveau CED
              </h1>
              <h2 className="text-3xl font-semibold text-gray-700 mt-2">
                Excellence Sportive & Diététique Halal
              </h2>
              <p className="text-xl text-gray-600 mt-2 max-w-4xl mx-auto">
                🏆 55+ Disciplines Olympiques | 🥗 Nutrition Souheila Yakoubi-Ozel | 📚 Formation Sport-Études | 🎯 Performance Elite
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Star className="h-5 w-5 mr-2" />
              55+ Sports Olympiques
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Heart className="h-5 w-5 mr-2" />
              Nutrition Prophétique
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Target className="h-5 w-5 mr-2" />
              Formation Elite
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Book className="h-5 w-5 mr-2" />
              Sport-Études Intégré
            </Badge>
          </div>

          {/* Recherche */}
          <div className="max-w-md mx-auto mb-8">
            <Input
              placeholder="Rechercher un sport..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-lg"
            />
          </div>
        </div>

        <Tabs defaultValue="sports" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-4">
            <TabsTrigger value="sports">Catalogue Sports</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition Sportive</TabsTrigger>
            <TabsTrigger value="programmes">Programmes Elite</TabsTrigger>
            <TabsTrigger value="sport-etudes">Sport-Études</TabsTrigger>
          </TabsList>

          {/* Catalogue Sports */}
          <TabsContent value="sports">
            <div className="space-y-6">
              {filteredSports.map((categorie, index) => (
                <Card key={index} className="border-2 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-700 flex items-center">
                      {categorie.icon}
                      <span className="ml-3">{categorie.nom}</span>
                      <Badge variant="secondary" className="ml-auto">
                        {categorie.sports.length} sports
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                      {categorie.sports.map((sport, i) => (
                        <Button
                          key={i}
                          variant="outline"
                          className="h-auto p-3 text-left justify-start hover:bg-blue-50"
                          onClick={() => {
                            // Simuler sélection sport pour détails
                            console.log("Sport sélectionné:", sport);
                          }}
                        >
                          <div>
                            <div className="font-medium text-sm">{sport}</div>
                            {sportDetails[sport] && (
                              <div className="text-xs text-gray-500 mt-1">
                                {sportDetails[sport].disciplines?.length || 0} disciplines
                              </div>
                            )}
                          </div>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Détails sports populaires */}
              <div className="grid md:grid-cols-1 gap-6">
                {Object.entries(sportDetails).slice(0, 3).map(([sport, details]) => (
                  <Card key={sport} className="border-2 border-green-200">
                    <CardHeader>
                      <CardTitle className="text-xl text-green-700 flex items-center">
                        <Trophy className="h-6 w-6 mr-2" />
                        {sport} - Programme Complet
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">🎯 Disciplines</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {details.disciplines.slice(0, 4).map((disc, i) => (
                              <li key={i}>• {disc}</li>
                            ))}
                            {details.disciplines.length > 4 && (
                              <li className="text-blue-600">+ {details.disciplines.length - 4} autres...</li>
                            )}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">🍽️ Nutrition</h4>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p><strong>Pré:</strong> {details.nutrition.preEntrainement.slice(0, 30)}...</p>
                            <p><strong>Post:</strong> {details.nutrition.postEntrainement.slice(0, 30)}...</p>
                            <p><strong>Hydratation:</strong> {details.nutrition.hydratation}</p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">💪 Entraînement</h4>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p><strong>Fréquence:</strong> {details.entrainement.frequence}</p>
                            <p><strong>Durée:</strong> {details.entrainement.duree}</p>
                            <p className="text-xs">{details.entrainement.recuperation}</p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">🏆 Compétitions</h4>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p><strong>Coût annuel:</strong></p>
                            <p className="text-lg font-bold text-green-600">{details.cout}</p>
                            <Button size="sm" className="mt-2 w-full">
                              Voir Programme Complet
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Nutrition Sportive */}
          <TabsContent value="nutrition">
            <div className="grid md:grid-cols-1 gap-6">
              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-700 flex items-center">
                    <Apple className="h-8 w-8 mr-3" />
                    Nutrition Sportive avec Souheila-iness Yakoubi-Ozel
                  </CardTitle>
                  <CardDescription>
                    Plans nutritionnels personnalisés selon médecine prophétique et science moderne
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-700 text-lg">🥗 Plans Nutrition Sport</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-green-50 rounded border border-green-200">
                          <h4 className="font-medium text-green-700">Plan Endurance</h4>
                          <p className="text-sm text-gray-600">Marathon, cyclisme, triathlon</p>
                          <p className="text-lg font-bold text-green-600">180 CHF/mois</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded border border-blue-200">
                          <h4 className="font-medium text-blue-700">Plan Force/Puissance</h4>
                          <p className="text-sm text-gray-600">Haltérophilie, sprint, sports combat</p>
                          <p className="text-lg font-bold text-blue-600">200 CHF/mois</p>
                        </div>
                        <div className="p-3 bg-purple-50 rounded border border-purple-200">
                          <h4 className="font-medium text-purple-700">Plan Sports Équipe</h4>
                          <p className="text-sm text-gray-600">Football, basketball, handball</p>
                          <p className="text-lg font-bold text-purple-600">160 CHF/mois</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-700 text-lg">🌿 Suppléments Halal</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between border-b pb-1">
                          <span>Protéine Whey Halal Premium</span>
                          <span className="font-semibold">89 CHF</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span>Créatine Monohydrate Pure</span>
                          <span className="font-semibold">45 CHF</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span>BCAA 2:1:1 Naturel</span>
                          <span className="font-semibold">52 CHF</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span>Miel de Sidr Pre-Workout</span>
                          <span className="font-semibold">78 CHF</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span>Recovery Complex Post-Effort</span>
                          <span className="font-semibold">67 CHF</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span>Électrolytes Naturels</span>
                          <span className="font-semibold">32 CHF</span>
                        </div>
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Commander Pack Complet
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-700 text-lg">📋 Suivi Personnalisé</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                          <h4 className="font-medium text-yellow-700">Consultation Initiale</h4>
                          <p className="text-sm text-gray-600">Bilan complet + plan nutrition</p>
                          <p className="text-sm">120 minutes</p>
                          <p className="text-lg font-bold text-yellow-600">250 CHF</p>
                        </div>
                        <div className="p-3 bg-orange-50 rounded border border-orange-200">
                          <h4 className="font-medium text-orange-700">Suivi Mensuel</h4>
                          <p className="text-sm text-gray-600">Ajustements + analyses</p>
                          <p className="text-sm">60 minutes</p>
                          <p className="text-lg font-bold text-orange-600">120 CHF</p>
                        </div>
                        <div className="p-3 bg-red-50 rounded border border-red-200">
                          <h4 className="font-medium text-red-700">Support WhatsApp</h4>
                          <p className="text-sm text-gray-600">Questions quotidiennes</p>
                          <p className="text-sm">24/7 disponible</p>
                          <p className="text-lg font-bold text-red-600">80 CHF/mois</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Programmes Elite */}
          <TabsContent value="programmes">
            <div className="grid md:grid-cols-1 gap-6">
              {programmesEntrainement.map((programme, index) => (
                <Card key={index} className="border-2 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-700 flex items-center justify-between">
                      <div className="flex items-center">
                        <Award className="h-6 w-6 mr-2" />
                        {programme.nom}
                      </div>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        {programme.niveau}
                      </Badge>
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Durée: {programme.duree} • Prix: <span className="font-bold text-blue-600">{programme.prix}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-3">📦 Ce programme inclut :</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {programme.inclut.map((item, i) => (
                            <div key={i} className="flex items-center text-gray-600 text-sm">
                              <span className="text-green-500 mr-2">✓</span>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-700">🎯 Objectifs du programme :</h4>
                        <div className="text-gray-600 text-sm space-y-1">
                          {programme.niveau === "Compétition Internationale" && (
                            <>
                              <p>• Qualification Jeux Olympiques/Championnats du Monde</p>
                              <p>• Performance elite avec coach personnel</p>
                              <p>• Suivi médical et scientifique complet</p>
                              <p>• Nutrition optimisée par Souheila</p>
                            </>
                          )}
                          {programme.niveau === "Compétition Nationale" && (
                            <>
                              <p>• Podiums championnats nationaux</p>
                              <p>• Développement technique avancé</p>
                              <p>• Préparation compétitions internationales</p>
                              <p>• Formation mentale de champion</p>
                            </>
                          )}
                          {programme.niveau === "Jeunes Espoirs" && (
                            <>
                              <p>• Concilier excellence scolaire et sportive</p>
                              <p>• Développement harmonieux jeune athlète</p>
                              <p>• Bases techniques solides</p>
                              <p>• Prévention blessures et surmenage</p>
                            </>
                          )}
                        </div>
                        
                        <Button className="w-full mt-4">
                          Candidater à ce Programme
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Sport-Études */}
          <TabsContent value="sport-etudes">
            <div className="space-y-6">
              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-700 flex items-center">
                    <Book className="h-8 w-8 mr-3" />
                    Programme Sport-Études CED HalalTech™
                  </CardTitle>
                  <CardDescription>
                    Formation complète alliant excellence académique et performance sportive selon valeurs islamiques
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-gray-700 text-lg mb-4">🏫 Cursus Académique</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-purple-50 rounded border border-purple-200">
                          <h4 className="font-medium text-purple-700">Collège Sport-Études (11-15 ans)</h4>
                          <p className="text-sm text-gray-600">Programme suisse + 15h sport/semaine</p>
                          <p className="text-lg font-bold text-purple-600">1'200 CHF/mois</p>
                        </div>
                        <div className="p-3 bg-indigo-50 rounded border border-indigo-200">
                          <h4 className="font-medium text-indigo-700">Gymnase Sport-Études (16-19 ans)</h4>
                          <p className="text-sm text-gray-600">Maturité + 20h sport/semaine</p>
                          <p className="text-lg font-bold text-indigo-600">1'500 CHF/mois</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded border border-blue-200">
                          <h4 className="font-medium text-blue-700">Université Partenariat (18+ ans)</h4>
                          <p className="text-sm text-gray-600">Bachelor/Master + sport elite</p>
                          <p className="text-lg font-bold text-blue-600">800 CHF/mois</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-700 text-lg mb-4">⚽ Sports Proposés</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="space-y-1">
                          <p className="font-medium text-gray-700">Sports Individuels :</p>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Athlétisme</li>
                            <li>• Natation</li>
                            <li>• Tennis</li>
                            <li>• Gymnastique</li>
                            <li>• Arts martiaux</li>
                            <li>• Cyclisme</li>
                          </ul>
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium text-gray-700">Sports Collectifs :</p>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Football</li>
                            <li>• Basketball</li>
                            <li>• Volleyball</li>
                            <li>• Handball</li>
                            <li>• Hockey sur glace</li>
                            <li>• Rugby</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 bg-green-50 rounded border border-green-200">
                        <h4 className="font-medium text-green-700 mb-2">🌟 Valeurs Islamiques Intégrées :</h4>
                        <ul className="text-green-600 text-sm space-y-1">
                          <li>• Éthique sportive selon enseignements prophétiques</li>
                          <li>• Respect des horaires de prière</li>
                          <li>• Alimentation 100% halal</li>
                          <li>• Développement caractère et humilité</li>
                          <li>• Entraide et esprit d'équipe (Ta'awun)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded">
                      <div className="text-3xl font-bold text-blue-600">150+</div>
                      <div className="text-gray-600">Athlètes formés</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded">
                      <div className="text-3xl font-bold text-green-600">89%</div>
                      <div className="text-gray-600">Réussite académique</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded">
                      <div className="text-3xl font-bold text-yellow-600">25</div>
                      <div className="text-gray-600">Médailles nationales</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 text-center">
          <Link href="/sante-souheila-yakoubi">
            <Button variant="outline" size="lg" className="mr-4">
              ← Espace Santé Souheila
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
      <div className="mt-16 py-8 border-t-2 border-blue-200 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Yakoubi Yamina - CED HalalTech™ | Sports de Haut Niveau & Nutrition Souheila-iness Yakoubi-Ozel
            <br />
            🇨🇭 Données hébergées en Suisse • Conforme RGPD & LPD • Formation selon valeurs islamiques authentiques
          </p>
        </div>
      </div>
    </div>
  );
}