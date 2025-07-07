import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { Users, Trophy, Star, Target, Zap, Crown, Shield, Sword, Heart } from "lucide-react";

export default function HalalTechCommunityGamification() {
  const [equipeUtilisateur, setEquipeUtilisateur] = useState("Gardiens Verts");
  const [pointsEquipe, setPointsEquipe] = useState(15847);
  const [rangUtilisateur, setRangUtilisateur] = useState("Khalifa Argent");
  const [defisActifs, setDefisActifs] = useState(3);

  const equipesEcologiques = [
    {
      nom: "🌳 Gardiens Verts",
      membres: 12847,
      points: 2456789,
      rang: 1,
      specialite: "Plantation & Reforestation",
      leader: "Fatima Al-Zahra (Maroc)",
      couleur: "from-green-500 to-emerald-600",
      badge: "👑",
      mission: "Planter 1 million d'arbres Sadaqah Jariyah"
    },
    {
      nom: "💧 Protecteurs Eau Pure",
      membres: 9876,
      points: 2234567,
      rang: 2,
      specialite: "Conservation Eau Prophétique",
      leader: "Ahmad Ibn Saleh (Jordanie)",
      couleur: "from-blue-500 to-cyan-600",
      badge: "💎",
      mission: "Économiser 10M litres eau selon Sunna"
    },
    {
      nom: "☀️ Énergies Renouvelables Halal",
      membres: 8765,
      points: 1987654,
      rang: 3,
      specialite: "Technologies Vertes Islamiques",
      leader: "Aisha Mansour (UAE)",
      couleur: "from-yellow-500 to-orange-600",
      badge: "⚡",
      mission: "Alimenter 1000 mosquées en énergie solaire"
    },
    {
      nom: "♻️ Économie Circulaire Ummah",
      membres: 7654,
      points: 1765432,
      rang: 4,
      specialite: "Zero Waste & Recycling",
      leader: "Omar Benzakour (Algérie)",
      couleur: "from-purple-500 to-pink-600",
      badge: "🔄",
      mission: "Éliminer 500K tonnes déchets plastique"
    },
    {
      nom: "🐝 Biodiversité Création Allah",
      membres: 6543,
      points: 1543210,
      rang: 5,
      specialite: "Protection Faune & Flore",
      leader: "Zeinab Rahman (Bangladesh)",
      couleur: "from-pink-500 to-rose-600",
      badge: "🦋",
      mission: "Protéger 100 espèces menacées"
    }
  ];

  const defisCollaboratifs = [
    {
      titre: "🌍 Ramadan Vert 2025",
      description: "Défi communautaire pendant le mois sacré : réduction 30% empreinte carbone",
      progression: 76,
      participants: 45678,
      recompense: "Badge Ramadan Éco-Spirituel + 5000 XP",
      tempsRestant: "14 jours",
      versetMotivation: "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ",
      traduction: "Entraidez-vous dans l'accomplissement des bonnes œuvres et de la piété",
      statut: "Actif"
    },
    {
      titre: "🌳 1 Million d'Arbres Sadaqah",
      description: "Objectif mondial : planter 1 million d'arbres avec intention Sadaqah Jariyah",
      progression: 67,
      participants: 89234,
      recompense: "Couronne Gardien Forêt Islamique + 10000 XP",
      tempsRestant: "3 mois",
      versetMotivation: "مَنْ أَحْيَا أَرْضًا مَيْتَةً فَهِيَ لَهُ",
      traduction: "Qui fait revivre une terre morte, elle lui appartient",
      statut: "Actif"
    },
    {
      titre: "💧 Économie Eau Prophétique Globale",
      description: "Suivre exemple prophétique ablutions : économiser 10M litres eau collectivement",
      progression: 84,
      participants: 67890,
      recompense: "Maître Eau Prophétique + Visite Zamzam VIP",
      tempsRestant: "1 mois",
      versetMotivation: "وَأَنزَلْنَا مِنَ السَّمَاءِ مَاءً طَهُورًا",
      traduction: "Nous avons fait descendre du ciel une eau pure",
      statut: "Bientôt terminé"
    },
    {
      titre: "🕌 Mosquées Zéro Carbone",
      description: "Transformer 1000 mosquées en centres écologiques modèles",
      progression: 23,
      participants: 12456,
      recompense: "Architecte Mosquée Verte + Hajj Écologique",
      tempsRestant: "6 mois",
      versetMotivation: "إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ",
      traduction: "Ne fréquentent les mosquées d'Allah que ceux qui croient en Allah",
      statut: "Nouveau"
    }
  ];

  const systemeRangs = [
    { rang: "Éveil Écologique", icone: "🌱", couleur: "text-green-500", seuilXP: 0 },
    { rang: "Khalifa Bronze", icone: "🥉", couleur: "text-yellow-600", seuilXP: 1000 },
    { rang: "Khalifa Argent", icone: "🥈", couleur: "text-gray-500", seuilXP: 5000 },
    { rang: "Khalifa Or", icone: "🥇", couleur: "text-yellow-500", seuilXP: 15000 },
    { rang: "Maître Gardien", icone: "👑", couleur: "text-purple-600", seuilXP: 35000 },
    { rang: "Sage Environnemental", icone: "🧙‍♂️", couleur: "text-blue-600", seuilXP: 75000 },
    { rang: "Champion Création Allah", icone: "⭐", couleur: "text-cyan-500", seuilXP: 150000 },
    { rang: "Légende Éco-Islamique", icone: "💎", couleur: "text-pink-500", seuilXP: 300000 }
  ];

  const recompensesCommunautaires = [
    {
      nom: "Visite La Mecque Éco-Spirituelle",
      description: "Voyage offert pour leaders environnementaux musulmans",
      requis: "100,000 XP équipe + 50 défis complétés",
      gagnants: 12,
      valeur: "15,000 CHF",
      icone: "🕌"
    },
    {
      nom: "Scholarship CED Academy Complète",
      description: "Formation complète gratuite toutes spécialités",
      requis: "50,000 XP personnel + certification Fiqh Environnemental",
      gagnants: 156,
      valeur: "5,000 CHF",
      icone: "🎓"
    },
    {
      nom: "Jardin Sadaqah Personnalisé",
      description: "Création jardin écologique à votre nom comme Sadaqah Jariyah",
      requis: "25,000 XP + 100 arbres plantés",
      gagnants: 234,
      valeur: "3,000 CHF",
      icone: "🌺"
    },
    {
      nom: "Matériel Écologique Premium",
      description: "Kit complet technologies vertes pour domicile",
      requis: "15,000 XP + 20 défis environnementaux",
      gagnants: 567,
      valeur: "2,000 CHF",
      icone: "📦"
    }
  ];

  const leaderboardMondial = [
    { position: 1, nom: "Fatima Al-Zahra", pays: "🇲🇦 Maroc", points: 89765, equipe: "Gardiens Verts" },
    { position: 2, nom: "Ahmad Ibn Saleh", pays: "🇯🇴 Jordanie", points: 87234, equipe: "Protecteurs Eau" },
    { position: 3, nom: "Aisha Mansour", pays: "🇦🇪 UAE", points: 85432, equipe: "Énergies Renouvelables" },
    { position: 4, nom: "Omar Benzakour", pays: "🇩🇿 Algérie", points: 83456, equipe: "Économie Circulaire" },
    { position: 5, nom: "Zeinab Rahman", pays: "🇧🇩 Bangladesh", points: 81234, equipe: "Biodiversité" },
    { position: 6, nom: "Hassan Al-Turki", pays: "🇸🇦 Arabie Saoudite", points: 79876, equipe: "Gardiens Verts" },
    { position: 7, nom: "Khadija Benali", pays: "🇹🇳 Tunisie", points: 78543, equipe: "Protecteurs Eau" },
    { position: 8, nom: "Yusuf Ibrahim", pays: "🇲🇾 Malaisie", points: 76789, equipe: "Énergies Renouvelables" },
    { position: 9, nom: "Maryam Qureshi", pays: "🇵🇰 Pakistan", points: 75432, equipe: "Économie Circulaire" },
    { position: 10, nom: "Amina Diallo", pays: "🇸🇳 Sénégal", points: 74567, equipe: "Biodiversité" }
  ];

  const rejoindreEquipe = (equipe) => {
    setEquipeUtilisateur(equipe.nom);
    setPointsEquipe(prev => prev + 500); // Bonus pour rejoindre équipe
  };

  const rejoindreDef = (defi) => {
    setDefisActifs(prev => prev + 1);
    setPointsEquipe(prev => prev + 200); // Bonus participation défi
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Principal */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full mb-6">
            <Users className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            Halal Tech Community Collaboration Gamification
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Communauté Mondiale • Gamification Islamique • Impact Environnemental Collectif
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <Badge className="bg-purple-100 text-purple-700 text-lg px-4 py-2">
              <Users className="w-5 h-5 mr-2" />
              245K+ Membres Actifs
            </Badge>
            <Badge className="bg-blue-100 text-blue-700 text-lg px-4 py-2">
              <Trophy className="w-5 h-5 mr-2" />
              5 Équipes Mondiales
            </Badge>
            <Badge className="bg-green-100 text-green-700 text-lg px-4 py-2">
              <Target className="w-5 h-5 mr-2" />
              12M+ Actions Écologiques
            </Badge>
          </div>
        </div>

        {/* Statut Utilisateur */}
        <Card className="border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50 mb-8">
          <CardHeader>
            <CardTitle className="text-center text-purple-700">
              🏆 Votre Profil Éco-Warrior Islamique
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-white rounded border">
                <div className="text-3xl mb-2">👤</div>
                <div className="text-lg font-bold text-purple-600">{rangUtilisateur}</div>
                <div className="text-sm text-gray-600">Rang Actuel</div>
              </div>
              <div className="p-4 bg-white rounded border">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-lg font-bold text-blue-600">{pointsEquipe.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Points XP</div>
              </div>
              <div className="p-4 bg-white rounded border">
                <div className="text-3xl mb-2">🛡️</div>
                <div className="text-lg font-bold text-green-600">{equipeUtilisateur}</div>
                <div className="text-sm text-gray-600">Équipe</div>
              </div>
              <div className="p-4 bg-white rounded border">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-lg font-bold text-orange-600">{defisActifs}</div>
                <div className="text-sm text-gray-600">Défis Actifs</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="equipes" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="equipes">🛡️ Équipes</TabsTrigger>
            <TabsTrigger value="defis">🎯 Défis</TabsTrigger>
            <TabsTrigger value="leaderboard">🏆 Classement</TabsTrigger>
            <TabsTrigger value="recompenses">💎 Récompenses</TabsTrigger>
            <TabsTrigger value="spirituel">🕌 Dimension Spirituelle</TabsTrigger>
          </TabsList>

          {/* Onglet Équipes */}
          <TabsContent value="equipes">
            <div className="space-y-6">
              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-center text-green-700">
                    🌍 5 Équipes Mondiales Écologiques Islamiques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
                    {equipesEcologiques.map((equipe, index) => (
                      <Card key={index} className={`border-2 hover:shadow-lg transition-all ${
                        equipeUtilisateur === equipe.nom ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200'
                      }`}>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${equipe.couleur} flex items-center justify-center text-2xl mr-4`}>
                                {equipe.badge}
                              </div>
                              <div>
                                <CardTitle className="text-lg">{equipe.nom}</CardTitle>
                                <p className="text-sm text-gray-600">{equipe.specialite}</p>
                              </div>
                            </div>
                            <Badge className={`text-lg px-3 py-1 ${
                              equipe.rang === 1 ? 'bg-yellow-200 text-yellow-800' :
                              equipe.rang === 2 ? 'bg-gray-200 text-gray-800' :
                              equipe.rang === 3 ? 'bg-orange-200 text-orange-800' :
                              'bg-blue-200 text-blue-800'
                            }`}>
                              #{equipe.rang}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">👥 Membres:</span>
                              <span className="font-bold">{equipe.membres.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">⚡ Points:</span>
                              <span className="font-bold text-green-600">{equipe.points.toLocaleString()}</span>
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-gray-600 mb-1">👑 Leader: {equipe.leader}</p>
                              <p className="text-xs text-blue-600 italic">Mission: {equipe.mission}</p>
                            </div>
                            
                            {equipeUtilisateur === equipe.nom ? (
                              <Badge className="w-full justify-center bg-green-100 text-green-700 py-2">
                                ✓ Votre Équipe Actuelle
                              </Badge>
                            ) : (
                              <Button 
                                onClick={() => rejoindreEquipe(equipe)}
                                className="w-full bg-blue-600 hover:bg-blue-700"
                              >
                                🚀 Rejoindre Équipe
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Onglet Défis */}
          <TabsContent value="defis">
            <div className="space-y-6">
              {defisCollaboratifs.map((defi, index) => (
                <Card key={index} className="border-2 border-blue-200 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-blue-700">{defi.titre}</CardTitle>
                      <Badge className={
                        defi.statut === "Actif" ? "bg-green-100 text-green-700" :
                        defi.statut === "Bientôt terminé" ? "bg-yellow-100 text-yellow-700" :
                        "bg-blue-100 text-blue-700"
                      }>
                        {defi.statut}
                      </Badge>
                    </div>
                    <p className="text-gray-600">{defi.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Progression */}
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progression Globale</span>
                          <span>{defi.progression}%</span>
                        </div>
                        <Progress value={defi.progression} className="h-4" />
                      </div>

                      {/* Fondement Spirituel */}
                      <div className="p-4 bg-blue-50 rounded border border-blue-200">
                        <h4 className="font-bold text-blue-800 mb-2">🕌 Fondement Islamique</h4>
                        <p className="text-lg text-blue-900 font-semibold mb-1 arabic-text">{defi.versetMotivation}</p>
                        <p className="text-sm text-blue-700 italic">"{defi.traduction}"</p>
                      </div>

                      {/* Statistiques */}
                      <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div className="p-3 bg-gray-50 rounded">
                          <div className="text-2xl font-bold text-purple-600">{defi.participants.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">Participants</div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded">
                          <div className="text-2xl font-bold text-green-600">{defi.recompense.split('+')[1]}</div>
                          <div className="text-sm text-gray-600">Récompense XP</div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded">
                          <div className="text-2xl font-bold text-orange-600">{defi.tempsRestant}</div>
                          <div className="text-sm text-gray-600">Temps Restant</div>
                        </div>
                      </div>

                      <Button 
                        onClick={() => rejoindreDef(defi)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                      >
                        🎯 Rejoindre ce Défi Collaboratif
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet Leaderboard */}
          <TabsContent value="leaderboard">
            <div className="space-y-8">
              <Card className="border-2 border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-center text-yellow-700">
                    🏆 Top 10 Champions Environnementaux Mondiaux
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {leaderboardMondial.map((joueur, index) => (
                      <div key={index} className={`flex items-center justify-between p-4 rounded-lg border ${
                        index < 3 ? 'bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-300' : 'bg-gray-50 border-gray-200'
                      }`}>
                        <div className="flex items-center space-x-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                            index === 0 ? 'bg-yellow-500' :
                            index === 1 ? 'bg-gray-400' :
                            index === 2 ? 'bg-orange-500' :
                            'bg-blue-500'
                          }`}>
                            {joueur.position}
                          </div>
                          <div>
                            <div className="font-semibold">{joueur.nom}</div>
                            <div className="text-sm text-gray-600">{joueur.pays}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg">{joueur.points.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">{joueur.equipe}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Système de Rangs */}
              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-center text-purple-700">
                    ⭐ Système de Rangs Éco-Warrior Islamique
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {systemeRangs.map((rang, index) => (
                      <div key={index} className={`p-4 rounded-lg border text-center ${
                        rang.rang === rangUtilisateur ? 'border-purple-400 bg-purple-50' : 'border-gray-200 bg-gray-50'
                      }`}>
                        <div className="text-3xl mb-2">{rang.icone}</div>
                        <div className={`font-bold ${rang.couleur}`}>{rang.rang}</div>
                        <div className="text-sm text-gray-600">{rang.seuilXP.toLocaleString()} XP</div>
                        {rang.rang === rangUtilisateur && (
                          <Badge className="mt-2 bg-purple-100 text-purple-700">Actuel</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Onglet Récompenses */}
          <TabsContent value="recompenses">
            <div className="grid md:grid-cols-2 gap-6">
              {recompensesCommunautaires.map((recompense, index) => (
                <Card key={index} className="border-2 border-cyan-200 hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <div className="text-6xl mb-4">{recompense.icone}</div>
                    <CardTitle className="text-xl text-cyan-700">{recompense.nom}</CardTitle>
                    <div className="text-2xl font-bold text-green-600">{recompense.valeur}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center mb-4">{recompense.description}</p>
                    
                    <div className="p-3 bg-yellow-50 rounded border border-yellow-200 mb-4">
                      <h4 className="font-semibold text-yellow-700 mb-1">Conditions Requises:</h4>
                      <p className="text-sm text-yellow-800">{recompense.requis}</p>
                    </div>
                    
                    <div className="text-center">
                      <Badge className="bg-green-100 text-green-700 mb-3">
                        ✓ {recompense.gagnants} personnes l'ont déjà obtenue
                      </Badge>
                      <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                        🎯 Viser cette Récompense
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet Dimension Spirituelle */}
          <TabsContent value="spirituel">
            <div className="space-y-8">
              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-center text-green-700">
                    🕌 Fondements Islamiques de la Collaboration Environnementale
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-white rounded border border-green-200">
                        <h4 className="font-bold text-green-600 mb-2">🤝 Ta'âwun (Entraide)</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          "Entraidez-vous dans l'accomplissement des bonnes œuvres et de la piété"
                        </p>
                        <p className="text-xs text-blue-600">Sourate Al-Mâ'idah 5:2</p>
                      </div>
                      
                      <div className="p-4 bg-white rounded border border-green-200">
                        <h4 className="font-bold text-blue-600 mb-2">🕌 Ummah (Communauté Unie)</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          "Cette communauté qui est la vôtre est une communauté unique"
                        </p>
                        <p className="text-xs text-blue-600">Sourate Al-Anbiyâ' 21:92</p>
                      </div>
                      
                      <div className="p-4 bg-white rounded border border-green-200">
                        <h4 className="font-bold text-purple-600 mb-2">🌍 Khalifah (Gérance Collective)</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          "C'est Lui qui vous a fait succéder sur la terre"
                        </p>
                        <p className="text-xs text-blue-600">Sourate Fâtir 35:39</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-white rounded border border-green-200">
                        <h4 className="font-bold text-orange-600 mb-2">💚 Hasanât Jamâ'iyyah (Bonnes Actions Collectives)</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Chaque action environnementale collective multiplie les récompenses spirituelles
                        </p>
                      </div>
                      
                      <div className="p-4 bg-white rounded border border-green-200">
                        <h4 className="font-bold text-cyan-600 mb-2">🌱 Sadaqah Jariyah Écologique</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Actions environnementales qui continuent à bénéficier après la mort
                        </p>
                      </div>
                      
                      <div className="p-4 bg-white rounded border border-green-200">
                        <h4 className="font-bold text-pink-600 mb-2">🤲 Du'â Environnemental</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          "Rabbi, bénis nos efforts pour protéger Ta création"
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-center text-blue-700">
                    📊 Impact Spirituel Communautaire Mesurable
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 bg-white rounded border">
                      <div className="text-3xl mb-2">🤲</div>
                      <div className="text-2xl font-bold text-green-600">12.4M</div>
                      <div className="text-sm text-gray-600">Du'â environnementales récitées</div>
                    </div>
                    <div className="p-4 bg-white rounded border">
                      <div className="text-3xl mb-2">🌳</div>
                      <div className="text-2xl font-bold text-blue-600">890K</div>
                      <div className="text-sm text-gray-600">Sadaqah Jariyah plantées</div>
                    </div>
                    <div className="p-4 bg-white rounded border">
                      <div className="text-3xl mb-2">🕌</div>
                      <div className="text-2xl font-bold text-purple-600">2,456</div>
                      <div className="text-sm text-gray-600">Mosquées partenaires éco</div>
                    </div>
                    <div className="p-4 bg-white rounded border">
                      <div className="text-3xl mb-2">📖</div>
                      <div className="text-2xl font-bold text-orange-600">156K</div>
                      <div className="text-sm text-gray-600">Versets récités actions vertes</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Navigation */}
        <div className="mt-12 text-center space-x-4">
          <Link href="/mindful-wellness-constellation">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              🌟 Constellation Map Wellness
            </Button>
          </Link>
          <Link href="/multilingual-environmental-storytelling">
            <Button variant="outline" size="lg">
              🌍 Retour Storytelling
            </Button>
          </Link>
        </div>
      </div>

      {/* Copyright Protection */}
      <div className="mt-16 py-8 border-t-2 border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-lg font-medium">
            © Yakoubi Yamina - CED HalalTech™ • Halal Tech Community Collaboration Gamification
          </p>
          <p className="text-gray-500 text-sm mt-2">
            🎮 Gamification Islamique Environnementale • Communauté Mondiale • Impact Collaboratif
          </p>
          <p className="text-purple-600 text-sm mt-2 font-medium">
            Ta'âwun Écologique • Ummah Environnementale • Khalifah Collective Responsable
          </p>
        </div>
      </div>
    </div>
  );
}