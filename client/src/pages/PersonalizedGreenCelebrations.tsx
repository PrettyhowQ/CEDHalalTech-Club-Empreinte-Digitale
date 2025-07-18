import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { PartyPopper, Star, Trophy, Heart, Sparkles, TreePine, Droplets, Sun } from "lucide-react";

export default function PersonalizedGreenCelebrations() {
  const [celebrationActive, setCelebrationActive] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState(null);
  const [confettiAnimation, setConfettiAnimation] = useState(false);

  const celebrationsPersonnalisees = [
    {
      type: "Milestone Écologique",
      titre: "100 Jours Sans Gaspillage!",
      description: "Félicitations! Vous avez respecté l'interdiction d'Isrâf pendant 100 jours consécutifs",
      versetCelebration: "وَلَا تُسْرِفُوا إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ",
      traduction: "Ne gaspillez point, Allah n'aime pas les gaspilleurs",
      icone: "🎉",
      animation: "bounce",
      couleur: "from-green-400 to-blue-500",
      recompenseXP: 500,
      badgeSpecial: "Anti-Isrâf Master"
    },
    {
      type: "Sadaqah Jariyah Environnementale",
      titre: "50 Arbres Plantés - Sadaqah Continue!",
      description: "Chaque arbre planté continuera à donner des fruits et purifier l'air - Sadaqah Jariyah éternelle",
      versetCelebration: "مَنْ أَحْيَا أَرْضًا مَيْتَةً فَهِيَ لَهُ",
      traduction: "Qui fait revivre une terre morte, elle lui appartient",
      icone: "🌳",
      animation: "pulse",
      couleur: "from-green-500 to-emerald-600",
      recompenseXP: 750,
      badgeSpecial: "Gardien Forêt Islamique"
    },
    {
      type: "Économie Eau Prophétique",
      titre: "Suivre la Sunna des Ablutions!",
      description: "Vous avez économisé 1000L d'eau en suivant l'exemple prophétique des ablutions économes",
      versetCelebration: "وَأَنزَلْنَا مِنَ السَّمَاءِ مَاءً طَهُورًا",
      traduction: "Nous avons fait descendre du ciel une eau pure",
      icone: "💧",
      animation: "wave",
      couleur: "from-blue-400 to-cyan-500",
      recompenseXP: 300,
      badgeSpecial: "Maître Eau Prophétique"
    },
    {
      type: "Protection Création Allah",
      titre: "Défenseur de la Biodiversité!",
      description: "Votre engagement a protégé 25 espèces animales conformément aux enseignements islamiques",
      versetCelebration: "وَمَا مِنْ دَابَّةٍ فِي الْأَرْضِ إِلَّا عَلَى اللَّهِ رِزْقُهَا",
      traduction: "Il n'y a point de bête sur terre qu'incombe à Allah sa subsistance",
      icone: "🦋",
      animation: "fly",
      couleur: "from-purple-400 to-pink-500",
      recompenseXP: 600,
      badgeSpecial: "Protecteur Création Divine"
    }
  ];

  const animationsCelebration = {
    fireworks: "🎆🎇✨🌟💫⭐🎉🎊",
    nature: "🌿🍃🌱🌳🌸🌺🦋🐝",
    islamic: "☪️🕌📿💎✨🌙⭐💚",
    water: "💧🌊💙🔵💎✨🌈☔"
  };

  const niveauxCelebration = [
    {
      niveau: "Bronze Khalifa",
      seuil: 100,
      couleur: "from-yellow-600 to-orange-600",
      animation: "bounce",
      message: "Premiers pas vers gérance responsable!"
    },
    {
      niveau: "Argent Steward",
      seuil: 500,
      couleur: "from-gray-400 to-gray-600",
      animation: "pulse",
      message: "Excellence dans protection environnement!"
    },
    {
      niveau: "Or Gardien",
      seuil: 1000,
      couleur: "from-yellow-400 to-yellow-600",
      animation: "glow",
      message: "Maîtrise complète écologie islamique!"
    },
    {
      niveau: "Diamant Khalifa Suprême",
      seuil: 2000,
      couleur: "from-blue-400 to-purple-600",
      animation: "rainbow",
      message: "Exemple ultime de Khalifa environnemental!"
    }
  ];

  const declencheCelebration = (achievement) => {
    setCurrentAchievement(achievement);
    setCelebrationActive(true);
    setConfettiAnimation(true);
    
    // Animation audio spirituelle (si supportée)
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(`Macha Allah! ${achievement.titre}`);
      utterance.lang = 'fr-FR';
      speechSynthesis.speak(utterance);
    }
    
    setTimeout(() => {
      setConfettiAnimation(false);
      setCelebrationActive(false);
    }, 5000);
  };

  useEffect(() => {
    // Démo automatique des célébrations
    const interval = setInterval(() => {
      const randomCelebration = celebrationsPersonnalisees[Math.floor(Math.random() * celebrationsPersonnalisees.length)];
      declencheCelebration(randomCelebration);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animation Confetti */}
      {confettiAnimation && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl animate-bounce">🎉</div>
          </div>
          <div className="absolute top-20 left-20 text-4xl animate-pulse">✨</div>
          <div className="absolute top-32 right-32 text-4xl animate-spin">🌟</div>
          <div className="absolute bottom-20 left-32 text-4xl animate-bounce">💚</div>
          <div className="absolute bottom-32 right-20 text-4xl animate-pulse">🕌</div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        {/* Header Principal */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mb-6">
            <PartyPopper className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Personalized Green Habit Célébration Animations
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Célébrations Islamiques Personnalisées pour Habitudes Écologiques
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <Badge className="bg-purple-100 text-purple-700 text-lg px-4 py-2">
              <Star className="w-5 h-5 mr-2" />
              Animations Spirituelles
            </Badge>
            <Badge className="bg-green-100 text-green-700 text-lg px-4 py-2">
              <TreePine className="w-5 h-5 mr-2" />
              Conformité Coran & Sunna
            </Badge>
            <Badge className="bg-blue-100 text-blue-700 text-lg px-4 py-2">
              <Sparkles className="w-5 h-5 mr-2" />
              Récompenses Personnalisées
            </Badge>
          </div>
        </div>

        {/* Modal Célébration Active */}
        {celebrationActive && currentAchievement && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
            <Card className="w-full max-w-2xl mx-4 border-4 border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50 shadow-2xl animate-pulse">
              <CardHeader className="text-center">
                <div className="text-8xl mb-4 animate-bounce">{currentAchievement.icone}</div>
                <CardTitle className="text-3xl text-yellow-700 mb-4">
                  {currentAchievement.titre}
                </CardTitle>
                <Badge className={`text-xl px-6 py-3 bg-gradient-to-r ${currentAchievement.couleur} text-white`}>
                  +{currentAchievement.recompenseXP} XP • {currentAchievement.badgeSpecial}
                </Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-700 mb-6">{currentAchievement.description}</p>
                
                <div className="p-6 bg-blue-100 rounded-lg border-2 border-blue-300 mb-6">
                  <h4 className="font-bold text-blue-800 mb-3">🕌 Verset de Célébration</h4>
                  <p className="text-xl text-blue-900 font-semibold mb-2 arabic-text">{currentAchievement.versetCelebration}</p>
                  <p className="text-sm text-blue-700 italic">"{currentAchievement.traduction}"</p>
                </div>
                
                <Button 
                  onClick={() => setCelebrationActive(false)}
                  className="bg-green-600 hover:bg-green-700 text-white text-xl px-8 py-4"
                >
                  ✨ Alhamdulillah - Continuer ✨
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        <Tabs defaultValue="celebrations" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="celebrations">🎉 Célébrations Live</TabsTrigger>
            <TabsTrigger value="types">🎭 Types Animations</TabsTrigger>
            <TabsTrigger value="niveaux">🏆 Niveaux Progression</TabsTrigger>
            <TabsTrigger value="personnalisation">⚙️ Personnalisation</TabsTrigger>
          </TabsList>

          {/* Onglet Célébrations Live */}
          <TabsContent value="celebrations">
            <div className="grid md:grid-cols-2 gap-6">
              {celebrationsPersonnalisees.map((celebration, index) => (
                <Card key={index} className="border-2 border-purple-200 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="text-center">
                      <div className="text-6xl mb-4 animate-pulse">{celebration.icone}</div>
                      <CardTitle className="text-xl text-purple-700 mb-2">
                        {celebration.titre}
                      </CardTitle>
                      <Badge className="bg-purple-100 text-purple-600">
                        {celebration.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center mb-4">{celebration.description}</p>
                    
                    <div className="p-3 bg-blue-50 rounded border border-blue-200 mb-4">
                      <p className="text-sm text-blue-800 font-medium mb-1">Fondement Islamique :</p>
                      <p className="text-xs text-blue-700 arabic-text mb-1">{celebration.versetCelebration}</p>
                      <p className="text-xs text-blue-600 italic">"{celebration.traduction}"</p>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <Badge className="bg-green-100 text-green-700">
                        +{celebration.recompenseXP} XP
                      </Badge>
                      <Badge className="bg-yellow-100 text-yellow-700">
                        {celebration.badgeSpecial}
                      </Badge>
                    </div>
                    
                    <Button 
                      onClick={() => declencheCelebration(celebration)}
                      className="w-full bg-purple-600 hover:bg-purple-700"
                    >
                      🎉 Déclencher Célébration
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet Types Animations */}
          <TabsContent value="types">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-700">🌿 Animations Nature Islamique</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded">
                      <h4 className="font-semibold text-green-600 mb-2">Plantation Sadaqah Jariyah</h4>
                      <div className="text-2xl mb-2">🌱➡️🌳➡️🍎➡️🌳</div>
                      <p className="text-sm text-gray-600">Animation croissance arbre avec fruits pour aumône continue</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded">
                      <h4 className="font-semibold text-green-600 mb-2">Protection Biodiversité</h4>
                      <div className="text-2xl mb-2">🦋🐝🐛🌸🌺</div>
                      <p className="text-sm text-gray-600">Cercle de vie protégé selon enseignements prophétiques</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-700">💧 Animations Eau Prophétique</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded">
                      <h4 className="font-semibold text-blue-600 mb-2">Ablutions Économes</h4>
                      <div className="text-2xl mb-2">🚿➡️💧➡️🤲➡️🕌</div>
                      <p className="text-sm text-gray-600">Suivre exemple prophétique économie eau</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded">
                      <h4 className="font-semibold text-blue-600 mb-2">Purification Spirituelle</h4>
                      <div className="text-2xl mb-2">💧✨🌈💎🧮</div>
                      <p className="text-sm text-gray-600">Eau pure = Purification corps et âme</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-700">🕌 Animations Spirituelles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 rounded">
                      <h4 className="font-semibold text-purple-600 mb-2">Dhikr Environnemental</h4>
                      <div className="text-2xl mb-2">📿☪️✨🌙⭐</div>
                      <p className="text-sm text-gray-600">Rappel d'Allah dans actions écologiques</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded">
                      <h4 className="font-semibold text-purple-600 mb-2">Barakah Actions Vertes</h4>
                      <div className="text-2xl mb-2">🤲💚✨🕌📖</div>
                      <p className="text-sm text-gray-600">Bénédiction divine dans gestes écologiques</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-yellow-700">🏆 Animations Récompenses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-50 rounded">
                      <h4 className="font-semibold text-yellow-600 mb-2">Niveaux Khalifa</h4>
                      <div className="text-2xl mb-2">🕌💎🏆⭐🌟</div>
                      <p className="text-sm text-gray-600">Évolution gérance responsable terre</p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded">
                      <h4 className="font-semibold text-yellow-600 mb-2">Badges Islamiques</h4>
                      <div className="text-2xl mb-2">🛡️📜🎖️💫✨</div>
                      <p className="text-sm text-gray-600">Reconnaissance conformité religieuse</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Onglet Niveaux Progression */}
          <TabsContent value="niveaux">
            <div className="space-y-6">
              {niveauxCelebration.map((niveau, index) => (
                <Card key={index} className="border-2 border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${niveau.couleur} flex items-center justify-center`}>
                          <Trophy className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{niveau.niveau}</h3>
                          <p className="text-gray-600">{niveau.message}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-700">{niveau.seuil} XP</div>
                        <Badge className="bg-gray-100 text-gray-600">
                          Animation: {niveau.animation}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet Personnalisation */}
          <TabsContent value="personnalisation">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-cyan-200">
                <CardHeader>
                  <CardTitle className="text-cyan-700">⚙️ Préférences Célébrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded">
                      <h4 className="font-semibold mb-2">🔊 Audio Spirituel</h4>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Dhikr</Button>
                        <Button size="sm" variant="outline">Takbir</Button>
                        <Button size="sm" variant="outline">Tahmid</Button>
                      </div>
                    </div>
                    <div className="p-4 border rounded">
                      <h4 className="font-semibold mb-2">🎨 Style Animation</h4>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Classique</Button>
                        <Button size="sm" variant="outline">Moderne</Button>
                        <Button size="sm" variant="outline">Islamique</Button>
                      </div>
                    </div>
                    <div className="p-4 border rounded">
                      <h4 className="font-semibold mb-2">⏰ Fréquence</h4>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Immédiate</Button>
                        <Button size="sm" variant="outline">Quotidienne</Button>
                        <Button size="sm" variant="outline">Hebdomadaire</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-700">📊 Statistiques Célébrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                      <span>Total Célébrations Déclenchées</span>
                      <Badge className="bg-green-100 text-green-700">247</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                      <span>Badges Islamiques Obtenus</span>
                      <Badge className="bg-blue-100 text-blue-700">18</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                      <span>Niveau Khalifa Actuel</span>
                      <Badge className="bg-purple-100 text-purple-700">Argent</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                      <span>Sadaqah Jariyah Validées</span>
                      <Badge className="bg-yellow-100 text-yellow-700">89</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Navigation */}
        <div className="mt-12 text-center space-x-4">
          <Link href="/multilingual-environmental-storytelling">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              🌍 Storytelling Environnemental Multilingue
            </Button>
          </Link>
          <Link href="/interactive-eco-warrior-progress">
            <Button variant="outline" size="lg">
              📊 Retour Progress Bar
            </Button>
          </Link>
        </div>
      </div>

      {/* Copyright Protection */}
      <div className="mt-16 py-8 border-t-2 border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-lg font-medium">
            © Yakoubi Yamina - CED HalalTech™ • Personalized Green Habit Célébration Animations
          </p>
          <p className="text-gray-500 text-sm mt-2">
            🎉 Célébrations Islamiques Authentiques • Conformité 100% Coran & Sunna
          </p>
          <p className="text-purple-600 text-sm mt-2 font-medium">
            Animations Spirituelles Personnalisées • Récompenses Écologiques Halal
          </p>
        </div>
      </div>
    </div>
  );
}