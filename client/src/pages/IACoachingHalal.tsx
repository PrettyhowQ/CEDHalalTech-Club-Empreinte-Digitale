import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Robot, Heart, Target, Brain, Apple, Timer, Users, Star, Trophy, MessageCircle, Mic, Camera } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function IACoachingHalal() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      type: "ai",
      content: "Assalamu Alaikum ! Je suis l'IA Coaching Halal de Souheila-iness Yakoubi-Ozel. Comment puis-je vous aider aujourd'hui dans votre parcours santé et nutrition ?",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);

  const specialitesIA = [
    {
      nom: "Nutrition Sportive Halal",
      description: "Plans alimentaires personnalisés selon médecine prophétique",
      niveau: 98,
      icon: <Apple className="h-8 w-8 text-green-600" />
    },
    {
      nom: "Coaching Diététique",
      description: "Suivi quotidien et conseils nutritionnels authentiques",
      niveau: 96,
      icon: <Heart className="h-8 w-8 text-red-500" />
    },
    {
      nom: "Préparation Physique",
      description: "Programmes d'entraînement selon valeurs islamiques",
      niveau: 94,
      icon: <Target className="h-8 w-8 text-blue-600" />
    },
    {
      nom: "Motivation Spirituelle",
      description: "Accompagnement mental basé sur sagesse islamique",
      niveau: 97,
      icon: <Brain className="h-8 w-8 text-purple-600" />
    }
  ];

  const fonctionnalitesIA = [
    {
      titre: "Chat Intelligent 24/7",
      description: "Réponses instantanées en français, arabe, anglais",
      icone: <MessageCircle className="h-6 w-6" />,
      couleur: "bg-blue-500"
    },
    {
      titre: "Reconnaissance Vocale",
      description: "Interaction naturelle par commandes vocales",
      icone: <Mic className="h-6 w-6" />,
      couleur: "bg-green-500"
    },
    {
      titre: "Analyse Photos Repas",
      description: "Évaluation nutritionnelle par IA vision",
      icone: <Camera className="h-6 w-6" />,
      couleur: "bg-purple-500"
    },
    {
      titre: "Plans Personnalisés",
      description: "Nutrition et entraînement sur mesure",
      icone: <Target className="h-6 w-6" />,
      couleur: "bg-orange-500"
    },
    {
      titre: "Suivi Progrès",
      description: "Métriques détaillées et encouragements",
      icone: <Trophy className="h-6 w-6" />,
      couleur: "bg-yellow-500"
    },
    {
      titre: "Rappels Spirituels",
      description: "Invocations et motivation islamique",
      icone: <Star className="h-6 w-6" />,
      couleur: "bg-indigo-500"
    }
  ];

  const programmesDisponibles = [
    {
      nom: "Perte de Poids Halal",
      duree: "3 mois",
      prix: "180 CHF/mois",
      participants: 1247,
      succes: 87,
      description: "Programme complet selon médecine prophétique"
    },
    {
      nom: "Prise de Masse Muscle",
      duree: "6 mois", 
      prix: "220 CHF/mois",
      participants: 892,
      succes: 92,
      description: "Développement musculaire avec nutrition halal"
    },
    {
      nom: "Préparation Compétition",
      duree: "12 mois",
      prix: "350 CHF/mois",
      participants: 456,
      succes: 94,
      description: "Excellence sportive elite avec Souheila"
    },
    {
      nom: "Santé Féminine",
      duree: "4 mois",
      prix: "200 CHF/mois",
      participants: 2134,
      succes: 89,
      description: "Accompagnement spécialisé femmes musulmanes"
    }
  ];

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        type: "user",
        content: message,
        timestamp: new Date().toLocaleTimeString()
      };
      
      // Simulation réponse IA
      const aiResponse = {
        type: "ai",
        content: `Barakallahu fiki pour votre question ! Selon l'expertise de Souheila-iness Yakoubi-Ozel, voici mes recommandations personnalisées basées sur la médecine prophétique et la science moderne...`,
        timestamp: new Date().toLocaleTimeString()
      };
      
      setChatHistory([...chatHistory, newMessage, aiResponse]);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Robot className="h-16 w-16 text-purple-600 mr-4" />
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                IA Coaching Halal
              </h1>
              <h2 className="text-3xl font-semibold text-gray-700 mt-2">
                Propriété Souheila-iness Yakoubi-Ozel
              </h2>
              <p className="text-xl text-gray-600 mt-2 max-w-4xl mx-auto">
                🤖 Intelligence Artificielle Avancée | 🌿 Expertise Santé & Nutrition | 💬 Assistant 24/7 | 🏆 Coaching Sportif Elite
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Brain className="h-5 w-5 mr-2" />
              IA Propriétaire Souheila
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Heart className="h-5 w-5 mr-2" />
              Médecine Prophétique
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Star className="h-5 w-5 mr-2" />
              Coaching 24/7
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Users className="h-5 w-5 mr-2" />
              4,729+ Utilisateurs
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="chat-ia" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-4">
            <TabsTrigger value="chat-ia">Chat IA Live</TabsTrigger>
            <TabsTrigger value="specialites">Spécialités IA</TabsTrigger>
            <TabsTrigger value="programmes">Programmes</TabsTrigger>
            <TabsTrigger value="proprietaire">Propriétaire</TabsTrigger>
          </TabsList>

          {/* Chat IA Live */}
          <TabsContent value="chat-ia">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Card className="border-2 border-purple-200 h-[600px] flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-700 flex items-center">
                      <MessageCircle className="h-6 w-6 mr-2" />
                      Chat avec IA Coaching Halal
                      <Badge variant="outline" className="ml-auto text-green-600">
                        🟢 En ligne
                      </Badge>
                    </CardTitle>
                    <CardDescription>
                      Assistant IA intelligent basé sur l'expertise de Souheila-iness Yakoubi-Ozel
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="flex-1 bg-gray-50 rounded-lg p-4 mb-4 overflow-y-auto max-h-96">
                      {chatHistory.map((msg, index) => (
                        <div key={index} className={`mb-4 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                          <div className={`inline-block p-3 rounded-lg max-w-xs ${
                            msg.type === 'user' 
                              ? 'bg-purple-600 text-white' 
                              : 'bg-white border border-gray-200'
                          }`}>
                            <p className="text-sm">{msg.content}</p>
                            <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Input
                        placeholder="Posez votre question santé/nutrition..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        className="flex-1"
                      />
                      <Button onClick={sendMessage} className="bg-purple-600 hover:bg-purple-700">
                        Envoyer
                      </Button>
                    </div>
                    
                    <div className="flex gap-2 mt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Mic className="h-4 w-4 mr-1" />
                        Vocal
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Camera className="h-4 w-4 mr-1" />
                        Photo Repas
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-4">
                <Card className="border-2 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-700">🎯 Suggestions IA</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full text-left justify-start">
                        "Plan nutrition post-Ramadan"
                      </Button>
                      <Button variant="outline" size="sm" className="w-full text-left justify-start">
                        "Préparation marathon halal"
                      </Button>
                      <Button variant="outline" size="sm" className="w-full text-left justify-start">
                        "Recettes prophétiques énergétiques"
                      </Button>
                      <Button variant="outline" size="sm" className="w-full text-left justify-start">
                        "Suppléments halal musculation"
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-700">📊 Vos Statistiques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progression Objectif</span>
                          <span>73%</span>
                        </div>
                        <Progress value={73} className="h-2" />
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>• 28 jours de suivi</p>
                        <p>• 89% adhésion programme</p>
                        <p>• -3.2kg perdus sainement</p>
                        <p>• 156 questions IA résolues</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Spécialités IA */}
          <TabsContent value="specialites">
            <div className="grid md:grid-cols-2 gap-6">
              {specialitesIA.map((specialite, index) => (
                <Card key={index} className="border-2 border-purple-200 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {specialite.icon}
                      <div>
                        <CardTitle className="text-xl text-purple-700">{specialite.nom}</CardTitle>
                        <CardDescription className="text-gray-600">{specialite.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Niveau d'expertise IA</span>
                          <span className="font-semibold">{specialite.niveau}%</span>
                        </div>
                        <Progress value={specialite.niveau} className="h-3" />
                      </div>
                      
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-purple-700 text-sm mb-2">Capacités IA avancées :</h4>
                        <ul className="text-purple-600 text-xs space-y-1">
                          <li>• Analyse personnalisée temps réel</li>
                          <li>• Recommandations basées médecine prophétique</li>
                          <li>• Suivi biométrique et adaptation automatique</li>
                          <li>• Motivation spirituelle intégrée</li>
                        </ul>
                      </div>
                      
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        Tester cette spécialité
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {fonctionnalitesIA.map((fonctionnalite, index) => (
                <Card key={index} className="border border-gray-200 hover:shadow-md transition-all">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg text-white ${fonctionnalite.couleur}`}>
                        {fonctionnalite.icone}
                      </div>
                      <h3 className="font-semibold text-gray-700">{fonctionnalite.titre}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{fonctionnalite.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Programmes */}
          <TabsContent value="programmes">
            <div className="grid md:grid-cols-2 gap-6">
              {programmesDisponibles.map((programme, index) => (
                <Card key={index} className="border-2 border-blue-200 hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-700 flex items-center justify-between">
                      {programme.nom}
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        {programme.succes}% succès
                      </Badge>
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {programme.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-700">💰 Prix</h4>
                        <p className="text-2xl font-bold text-green-600">{programme.prix}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700">⏱️ Durée</h4>
                        <p className="text-lg text-gray-600">{programme.duree}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700">👥 Participants</h4>
                        <p className="text-lg text-gray-600">{programme.participants.toLocaleString()}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700">🎯 Réussite</h4>
                        <p className="text-lg text-green-600 font-semibold">{programme.succes}%</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-gray-700">✅ Inclut avec IA :</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Coaching IA personnalisé 24/7</li>
                        <li>• Plans nutrition adaptatifs</li>
                        <li>• Suivi progrès automatique</li>
                        <li>• Support Souheila-iness direct</li>
                        <li>• Groupe privé utilisateurs</li>
                      </ul>
                    </div>
                    
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Commencer ce programme
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Propriétaire */}
          <TabsContent value="proprietaire">
            <div className="grid md:grid-cols-1 gap-6">
              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-700 flex items-center">
                    <Heart className="h-8 w-8 mr-3" />
                    Souheila-iness Yakoubi-Ozel - Propriétaire IA Coaching Halal
                  </CardTitle>
                  <CardDescription>
                    Créatrice et propriétaire exclusive de l'Intelligence Artificielle Coaching Halal
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-gray-700 text-lg mb-4">🧠 Expertise Intégrée dans l'IA</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-green-50 rounded border border-green-200">
                          <h4 className="font-medium text-green-700">Diététique & Nutrition</h4>
                          <p className="text-sm text-gray-600">15+ années d'expérience, formation universitaire</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded border border-blue-200">
                          <h4 className="font-medium text-blue-700">Médecine Prophétique</h4>
                          <p className="text-sm text-gray-600">Spécialiste At-Tibb An-Nabawi authentique</p>
                        </div>
                        <div className="p-3 bg-purple-50 rounded border border-purple-200">
                          <h4 className="font-medium text-purple-700">Coaching Sportif</h4>
                          <p className="text-sm text-gray-600">Préparation athlètes haut niveau</p>
                        </div>
                        <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                          <h4 className="font-medium text-yellow-700">Santé Féminine</h4>
                          <p className="text-sm text-gray-600">Accompagnement spécialisé femmes musulmanes</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-700 text-lg mb-4">🌟 Vision Future Centre Sportif</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-pink-50 rounded border border-pink-200">
                          <h4 className="font-medium text-pink-700 mb-2">🏃‍♀️ Association Centre Sport Mondial Féminin Halal</h4>
                          <p className="text-sm text-gray-600 mb-2">
                            <strong>Directrice :</strong> Souheila-iness Yakoubi-Ozel
                          </p>
                          <ul className="text-xs text-gray-600 space-y-1">
                            <li>• Centre physique spécialisé sport haut niveau</li>
                            <li>• Diététique et nutrition intégrées</li>
                            <li>• Formation sportives selon valeurs islamiques</li>
                            <li>• Excellence féminine mondiale halal</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-blue-50 rounded border border-blue-200">
                          <h4 className="font-medium text-blue-700 mb-2">🏃‍♂️ Section Masculine</h4>
                          <p className="text-sm text-gray-600 mb-2">
                            <strong>Directeur :</strong> Malik Ketar (Époux Souheila)
                          </p>
                          <ul className="text-xs text-gray-600 space-y-1">
                            <li>• Coordination avec section féminine</li>
                            <li>• Programmes élite masculins</li>
                            <li>• Respect séparation islamique</li>
                            <li>• Excellence sportive halal hommes</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-gray-700 text-lg mb-3">💡 En Attendant le Centre Physique :</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-3xl mb-2">🤖</div>
                        <h4 className="font-medium text-gray-700">IA Coaching Disponible</h4>
                        <p className="text-sm text-gray-600">Application directe avec intelligence artificielle</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl mb-2">📱</div>
                        <h4 className="font-medium text-gray-700">Cours en Ligne</h4>
                        <p className="text-sm text-gray-600">Formation immédiate accessible partout</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl mb-2">🎯</div>
                        <h4 className="font-medium text-gray-700">Suivi Personnalisé</h4>
                        <p className="text-sm text-gray-600">Expertise Souheila intégrée dans l'IA</p>
                      </div>
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
          <Link href="/sports-haut-niveau">
            <Button variant="outline" size="lg" className="mr-4">
              Sports Haut Niveau
            </Button>
          </Link>
          <Link href="/ced-halal-home">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Retour Écosystème CED
            </Button>
          </Link>
        </div>
      </div>

      {/* Copyright Protection */}
      <div className="mt-16 py-8 border-t-2 border-purple-200 bg-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Souheila-iness Yakoubi-Ozel - Propriétaire Exclusive IA Coaching Halal | CED HalalTech™
            <br />
            🇨🇭 Données hébergées en Suisse • Conforme RGPD & LPD • Expertise santé selon médecine prophétique authentique
          </p>
        </div>
      </div>
    </div>
  );
}