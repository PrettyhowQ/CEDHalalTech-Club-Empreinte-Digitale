import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { Leaf, Droplets, Sun, Recycle, Heart, Star, Trophy, Target, Zap, TreePine } from "lucide-react";

export default function InteractiveEcoWarriorProgress() {
  const [userLevel, setUserLevel] = useState(7);
  const [totalXP, setTotalXP] = useState(2847);
  const [dailyStreak, setDailyStreak] = useState(23);
  const [monthlyProgress, setMonthlyProgress] = useState(78);

  const niveauxEcoWarrior = [
    { niveau: 1, nom: "Éveil Écologique Halal", xpRequis: 0, couleur: "bg-green-200", icone: "🌱" },
    { niveau: 2, nom: "Gardien de la Création", xpRequis: 500, couleur: "bg-green-300", icone: "🌿" },
    { niveau: 3, nom: "Protecteur Vert Islamique", xpRequis: 1200, couleur: "bg-green-400", icone: "🍃" },
    { niveau: 4, nom: "Éco-Musulman Engagé", xpRequis: 2000, couleur: "bg-green-500", icone: "🌳" },
    { niveau: 5, nom: "Khalifa Environnemental", xpRequis: 3000, couleur: "bg-green-600", icone: "🌲" },
    { niveau: 6, nom: "Ambassadeur Terre Halal", xpRequis: 4500, couleur: "bg-green-700", icone: "🏞️" },
    { niveau: 7, nom: "Maître Écologie Islamique", xpRequis: 6500, couleur: "bg-green-800", icone: "🌍" },
    { niveau: 8, nom: "Champion Durabilité Halal", xpRequis: 9000, couleur: "bg-emerald-800", icone: "💚" },
    { niveau: 9, nom: "Sage Environnemental Islamique", xpRequis: 12000, couleur: "bg-teal-800", icone: "🌺" },
    { niveau: 10, nom: "Gardien Suprême Création Allah", xpRequis: 16000, couleur: "bg-cyan-800", icone: "👑" }
  ];

  const habitudesVertes = [
    {
      nom: "Économie Eau Prophétique",
      description: "Suivre Sunna ablutions économes",
      progression: 89,
      xpJournalier: 25,
      versetCoran: "وَلَا تُسْرِفُوا (Ne gaspillez point) - Al-A'raf 7:31",
      icone: <Droplets className="w-6 h-6 text-blue-500" />
    },
    {
      nom: "Zéro Gaspillage Alimentaire",
      description: "Anti-Israf selon islam authentique",
      progression: 76,
      xpJournalier: 30,
      versetCoran: "وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا (Mangez, buvez sans gaspiller)",
      icone: <Recycle className="w-6 h-6 text-green-500" />
    },
    {
      nom: "Transport Éco-Responsable",
      description: "Moyens transport respectueux environnement",
      progression: 92,
      xpJournalier: 20,
      versetCoran: "وَلَا تُفْسِدُوا فِي الْأَرْضِ (Ne semez pas corruption terre)",
      icone: <Sun className="w-6 h-6 text-yellow-500" />
    },
    {
      nom: "Plantation Sadaqah Jariyah",
      description: "Planter arbres comme aumône continue",
      progression: 95,
      xpJournalier: 45,
      versetCoran: "مَنْ أَحْيَا أَرْضًا مَيْتَةً فَهِيَ لَهُ (Qui fait revivre terre morte)",
      icone: <TreePine className="w-6 h-6 text-green-600" />
    },
    {
      nom: "Énergie Renouvelable Halal",
      description: "Utilisation énergies propres",
      progression: 68,
      xpJournalier: 35,
      versetCoran: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ (De l'eau toute chose vivante)",
      icone: <Zap className="w-6 h-6 text-blue-600" />
    },
    {
      nom: "Consommation Consciente",
      description: "Achats réfléchis conformes islam",
      progression: 84,
      xpJournalier: 28,
      versetCoran: "وَلَا تَقْتُلُوا أَنْفُسَكُمْ (Ne vous nuisez pas)",
      icone: <Heart className="w-6 h-6 text-pink-500" />
    }
  ];

  const recompensesIslamiques = [
    {
      nom: "Badge Khalifa Responsable",
      description: "Gérance responsable Création Allah",
      niveau: 3,
      obtenu: true,
      icone: "🌿",
      versetLie: "Sourate Al-Baqarah 2:30"
    },
    {
      nom: "Certificat Anti-Fasad",
      description: "Protection contre corruption environnementale",
      niveau: 5,
      obtenu: true,
      icone: "🛡️",
      versetLie: "Sourate Al-A'raf 7:56"
    },
    {
      nom: "Couronne Stewardship Islamique",
      description: "Excellence gérance environnementale",
      niveau: 7,
      obtenu: true,
      icone: "👑",
      versetLie: "Sourate Al-Ahzab 33:72"
    },
    {
      nom: "Maître Sadaqah Jariyah Verte",
      description: "Impact environnemental continu",
      niveau: 8,
      obtenu: false,
      icone: "🌳",
      versetLie: "Hadith Sahih Muslim"
    },
    {
      nom: "Gardien Suprême Création",
      description: "Niveau ultime protection environnement",
      niveau: 10,
      obtenu: false,
      icone: "🌍",
      versetLie: "Coran complet appliqué"
    }
  ];

  const progressionAnimee = {
    width: `${((totalXP - niveauxEcoWarrior[userLevel-1]?.xpRequis) / (niveauxEcoWarrior[userLevel]?.xpRequis - niveauxEcoWarrior[userLevel-1]?.xpRequis)) * 100}%`
  };

  useEffect(() => {
    // Animation de progression automatique
    const interval = setInterval(() => {
      setMonthlyProgress(prev => prev < 100 ? prev + 1 : 78);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Principal */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-600 to-blue-600 rounded-full mb-6">
            <Leaf className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Interactive Eco-Warrior Progress Bar
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Suivi Spirituel & Environnemental selon Coran et Sunna Authentique
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <Badge className="bg-green-100 text-green-700 text-lg px-4 py-2">
              <TreePine className="w-5 h-5 mr-2" />
              Niveau {userLevel} : {niveauxEcoWarrior[userLevel-1]?.nom}
            </Badge>
            <Badge className="bg-blue-100 text-blue-700 text-lg px-4 py-2">
              <Star className="w-5 h-5 mr-2" />
              {totalXP} XP Écologique
            </Badge>
            <Badge className="bg-yellow-100 text-yellow-700 text-lg px-4 py-2">
              <Target className="w-5 h-5 mr-2" />
              {dailyStreak} Jours Consecutifs
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="progression" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="progression">📊 Progression Interactive</TabsTrigger>
            <TabsTrigger value="habitudes">🌿 Habitudes Vertes</TabsTrigger>
            <TabsTrigger value="recompenses">🏆 Récompenses Islamiques</TabsTrigger>
            <TabsTrigger value="spirituel">🕌 Fondements Spirituels</TabsTrigger>
          </TabsList>

          {/* Onglet Progression Interactive */}
          <TabsContent value="progression">
            <div className="space-y-8">
              {/* Barre de Progression Principale */}
              <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-green-700">
                    {niveauxEcoWarrior[userLevel-1]?.icone} {niveauxEcoWarrior[userLevel-1]?.nom}
                  </CardTitle>
                  <div className="text-6xl font-bold text-green-600 mb-4">{totalXP} XP</div>
                </CardHeader>
                <CardContent>
                  <div className="relative mb-6">
                    <Progress 
                      value={((totalXP - niveauxEcoWarrior[userLevel-1]?.xpRequis) / (niveauxEcoWarrior[userLevel]?.xpRequis - niveauxEcoWarrior[userLevel-1]?.xpRequis)) * 100} 
                      className="h-8 bg-gray-200"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                      {totalXP - niveauxEcoWarrior[userLevel-1]?.xpRequis} / {niveauxEcoWarrior[userLevel]?.xpRequis - niveauxEcoWarrior[userLevel-1]?.xpRequis} XP
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <p className="text-lg text-gray-600 mb-2">
                      Prochain niveau : <strong>{niveauxEcoWarrior[userLevel]?.nom}</strong>
                    </p>
                    <p className="text-green-600 font-bold">
                      Plus que {niveauxEcoWarrior[userLevel]?.xpRequis - totalXP} XP pour évoluer !
                    </p>
                  </div>

                  {/* Progression Mensuelle */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white rounded border">
                      <h4 className="font-semibold text-blue-600 mb-2">Progression Mensuelle</h4>
                      <Progress value={monthlyProgress} className="h-4 mb-2" />
                      <p className="text-sm text-gray-600">{monthlyProgress}% objectif atteint</p>
                    </div>
                    <div className="p-4 bg-white rounded border">
                      <h4 className="font-semibold text-green-600 mb-2">Série Quotidienne</h4>
                      <div className="text-3xl font-bold text-green-600">{dailyStreak}</div>
                      <p className="text-sm text-gray-600">jours consécutifs</p>
                    </div>
                    <div className="p-4 bg-white rounded border">
                      <h4 className="font-semibold text-yellow-600 mb-2">Actions Aujourd'hui</h4>
                      <div className="text-3xl font-bold text-yellow-600">6/8</div>
                      <p className="text-sm text-gray-600">habitudes accomplies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Échelle des Niveaux */}
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-center text-blue-700">
                    🎯 Échelle Évolution Eco-Warrior Islamique
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {niveauxEcoWarrior.map((niveau, index) => (
                      <div 
                        key={index} 
                        className={`p-4 rounded-lg border-2 transition-all ${
                          niveau.niveau === userLevel 
                            ? 'border-green-500 bg-green-100 shadow-lg scale-105' 
                            : niveau.niveau < userLevel 
                              ? 'border-green-300 bg-green-50' 
                              : 'border-gray-200 bg-gray-50'
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-3xl mb-2">{niveau.icone}</div>
                          <div className="text-sm font-bold text-gray-800">{niveau.nom}</div>
                          <div className="text-xs text-gray-600 mt-1">{niveau.xpRequis} XP</div>
                          {niveau.niveau === userLevel && (
                            <Badge className="mt-2 bg-green-600 text-white">Actuel</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Onglet Habitudes Vertes */}
          <TabsContent value="habitudes">
            <div className="grid md:grid-cols-2 gap-6">
              {habitudesVertes.map((habitude, index) => (
                <Card key={index} className="border-2 border-green-200 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {habitude.icone}
                        <CardTitle className="ml-3 text-lg text-green-700">
                          {habitude.nom}
                        </CardTitle>
                      </div>
                      <Badge className="bg-green-100 text-green-700">
                        +{habitude.xpJournalier} XP/jour
                      </Badge>
                    </div>
                    <p className="text-gray-600">{habitude.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progression</span>
                        <span>{habitude.progression}%</span>
                      </div>
                      <Progress value={habitude.progression} className="h-3" />
                    </div>
                    
                    <div className="p-3 bg-blue-50 rounded border border-blue-200">
                      <p className="text-sm text-blue-800 font-medium mb-1">Fondement Islamique :</p>
                      <p className="text-xs text-blue-700">{habitude.versetCoran}</p>
                    </div>
                    
                    <Button 
                      className="w-full mt-4 bg-green-600 hover:bg-green-700"
                      onClick={() => setTotalXP(prev => prev + habitude.xpJournalier)}
                    >
                      ✓ Valider Action Aujourd'hui
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet Récompenses */}
          <TabsContent value="recompenses">
            <div className="grid md:grid-cols-3 gap-6">
              {recompensesIslamiques.map((recompense, index) => (
                <Card 
                  key={index} 
                  className={`border-2 transition-all ${
                    recompense.obtenu 
                      ? 'border-yellow-300 bg-yellow-50 shadow-lg' 
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <CardHeader className="text-center">
                    <div className={`text-6xl mb-3 ${recompense.obtenu ? '' : 'opacity-40'}`}>
                      {recompense.icone}
                    </div>
                    <CardTitle className={`text-lg ${
                      recompense.obtenu ? 'text-yellow-700' : 'text-gray-500'
                    }`}>
                      {recompense.nom}
                    </CardTitle>
                    <Badge className={recompense.obtenu ? 'bg-yellow-200 text-yellow-800' : 'bg-gray-200 text-gray-600'}>
                      Niveau {recompense.niveau} requis
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-600 mb-3">{recompense.description}</p>
                    <div className="p-2 bg-blue-50 rounded text-center">
                      <p className="text-xs text-blue-600">{recompense.versetLie}</p>
                    </div>
                    {recompense.obtenu && (
                      <Badge className="w-full mt-3 bg-green-100 text-green-700 justify-center">
                        ✓ OBTENU
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet Fondements Spirituels */}
          <TabsContent value="spirituel">
            <div className="space-y-6">
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-center text-blue-700">
                    🕌 Fondements Islamiques de l'Écologie
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-white rounded border border-blue-200">
                        <h4 className="font-bold text-green-600 mb-2">👑 Khalifa (Gérance Responsable)</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          "C'est Lui qui vous a fait succéder (khalâ'if) sur la terre"
                        </p>
                        <p className="text-xs text-blue-600">Sourate Fatir 35:39</p>
                      </div>
                      
                      <div className="p-4 bg-white rounded border border-blue-200">
                        <h4 className="font-bold text-red-600 mb-2">🚫 Interdiction Fasâd (Corruption)</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          "Et ne semez pas la corruption sur la terre après qu'elle ait été réformée"
                        </p>
                        <p className="text-xs text-blue-600">Sourate Al-A'râf 7:56</p>
                      </div>
                      
                      <div className="p-4 bg-white rounded border border-blue-200">
                        <h4 className="font-bold text-purple-600 mb-2">💧 Prohibition Isrâf (Gaspillage)</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          "Mangez et buvez sans commettre d'excès"
                        </p>
                        <p className="text-xs text-blue-600">Sourate Al-A'râf 7:31</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-white rounded border border-blue-200">
                        <h4 className="font-bold text-green-600 mb-2">🌳 Sadaqah Jariyah Environnementale</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          "Si un musulman plante un arbre, ce que mangent les oiseaux, les humains et les animaux sera pour lui une aumône"
                        </p>
                        <p className="text-xs text-blue-600">Sahih Bukhari</p>
                      </div>
                      
                      <div className="p-4 bg-white rounded border border-blue-200">
                        <h4 className="font-bold text-orange-600 mb-2">🐾 Protection Animale</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          "Il y a une récompense pour quiconque abreuve un être vivant assoiffé"
                        </p>
                        <p className="text-xs text-blue-600">Sahih Bukhari</p>
                      </div>
                      
                      <div className="p-4 bg-white rounded border border-blue-200">
                        <h4 className="font-bold text-cyan-600 mb-2">🌍 Amânah (Terre comme Dépôt)</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          "Nous avons proposé le dépôt aux cieux, à la terre et aux montagnes"
                        </p>
                        <p className="text-xs text-blue-600">Sourate Al-Ahzab 33:72</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-center text-green-700">
                    📊 Impact Écologique Mesurable - Bénédictions Allah
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 bg-white rounded border">
                      <div className="text-3xl mb-2">💧</div>
                      <div className="text-2xl font-bold text-blue-600">2,456L</div>
                      <div className="text-sm text-gray-600">Eau économisée ce mois</div>
                    </div>
                    <div className="p-4 bg-white rounded border">
                      <div className="text-3xl mb-2">🌳</div>
                      <div className="text-2xl font-bold text-green-600">89</div>
                      <div className="text-sm text-gray-600">Arbres plantés Sadaqah</div>
                    </div>
                    <div className="p-4 bg-white rounded border">
                      <div className="text-3xl mb-2">♻️</div>
                      <div className="text-2xl font-bold text-purple-600">456kg</div>
                      <div className="text-sm text-gray-600">Déchets évités</div>
                    </div>
                    <div className="p-4 bg-white rounded border">
                      <div className="text-3xl mb-2">⚡</div>
                      <div className="text-2xl font-bold text-yellow-600">1.2T</div>
                      <div className="text-sm text-gray-600">CO2 réduit</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Navigation */}
        <div className="mt-12 text-center space-x-4">
          <Link href="/personalized-green-celebrations">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              🎉 Célébrations Vertes Personnalisées
            </Button>
          </Link>
          <Link href="/ced-halal-home">
            <Button variant="outline" size="lg">
              Retour Écosystème CED
            </Button>
          </Link>
        </div>
      </div>

      {/* Copyright Protection */}
      <div className="mt-16 py-8 border-t-2 border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-lg font-medium">
            © Yakoubi Yamina - CED HalalTech™ • Interactive Eco-Warrior Progress Bar
          </p>
          <p className="text-gray-500 text-sm mt-2">
            🌿 Écologie Islamique Authentique • Conformité 100% Coran & Sunna
          </p>
          <p className="text-green-600 text-sm mt-2 font-medium">
            Suivi Spirituel Environnemental • Gérance Responsable Création Allah
          </p>
        </div>
      </div>
    </div>
  );
}