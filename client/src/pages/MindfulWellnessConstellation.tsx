import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { Star, Heart, Brain, Zap, Moon, Sun, Sparkles, Crown } from "lucide-react";

export default function MindfulWellnessConstellation() {
  const [constellationActive, setConstellationActive] = useState("Spiritualité");
  const [niveauEveil, setNiveauEveil] = useState(7);
  const [energieVitale, setEnergieVitale] = useState(85);
  const [harmonie, setHarmonie] = useState(92);

  const constellations = {
    "Spiritualité": {
      etoiles: [
        { nom: "Dhikr Quotidien", progression: 95, couleur: "text-green-500", icone: "📿", description: "Rappel d'Allah 5x/jour" },
        { nom: "Lecture Coran", progression: 88, couleur: "text-blue-500", icone: "📖", description: "Récitation quotidienne" },
        { nom: "Du'â Sincères", progression: 92, couleur: "text-purple-500", icone: "🤲", description: "Invocations authentiques" },
        { nom: "Méditation Islamique", progression: 76, couleur: "text-cyan-500", icone: "🧘‍♀️", description: "Contemplation Création Allah" },
        { nom: "Salawat Prophète ﷺ", progression: 94, couleur: "text-pink-500", icone: "💝", description: "Bénédictions sur le Prophète" }
      ],
      centre: { nom: "Taqwa", icone: "🕌", couleur: "text-yellow-500" }
    },
    "Santé Physique": {
      etoiles: [
        { nom: "Nutrition Halal", progression: 89, couleur: "text-green-600", icone: "🥗", description: "Alimentation prophétique" },
        { nom: "Sport Modéré", progression: 82, couleur: "text-blue-600", icone: "🏃‍♀️", description: "Activité physique équilibrée" },
        { nom: "Sommeil Réparateur", progression: 91, couleur: "text-purple-600", icone: "😴", description: "Repos selon Sunna" },
        { nom: "Hydratation Pure", progression: 96, couleur: "text-cyan-600", icone: "💧", description: "Eau bénite régulière" },
        { nom: "Soins Prophétiques", progression: 78, couleur: "text-pink-600", icone: "🌿", description: "Remèdes naturels authentiques" }
      ],
      centre: { nom: "Amanah Corps", icone: "💪", couleur: "text-orange-500" }
    },
    "Équilibre Mental": {
      etoiles: [
        { nom: "Pensées Positives", progression: 87, couleur: "text-yellow-500", icone: "😊", description: "Optimisme islamique" },
        { nom: "Gestion Stress", progression: 83, couleur: "text-red-500", icone: "🧠", description: "Tawakkul & patience" },
        { nom: "Concentration", progression: 90, couleur: "text-indigo-500", icone: "🎯", description: "Focus spirituel" },
        { nom: "Créativité Halal", progression: 85, couleur: "text-teal-500", icone: "🎨", description: "Expression artistique licite" },
        { nom: "Apprentissage Ilm", progression: 93, couleur: "text-lime-500", icone: "📚", description: "Quête connaissance islamique" }
      ],
      centre: { nom: "Sakina", icone: "🧘", couleur: "text-indigo-500" }
    },
    "Relations Sociales": {
      etoiles: [
        { nom: "Famille Islamique", progression: 94, couleur: "text-rose-500", icone: "👪", description: "Liens familiaux renforcés" },
        { nom: "Amitié Fi-Allah", progression: 88, couleur: "text-emerald-500", icone: "🤝", description: "Fraternité authentique" },
        { nom: "Communauté Ummah", progression: 86, couleur: "text-violet-500", icone: "🕌", description: "Engagement communautaire" },
        { nom: "Pardon & Réconciliation", progression: 91, couleur: "text-amber-500", icone: "💚", description: "Clémence prophétique" },
        { nom: "Servir Autrui", progression: 89, couleur: "text-sky-500", icone: "🤲", description: "Aide désintéressée" }
      ],
      centre: { nom: "Rahmah", icone: "❤️", couleur: "text-red-500" }
    },
    "Croissance Personnelle": {
      etoiles: [
        { nom: "Autodiscipline", progression: 84, couleur: "text-slate-600", icone: "⚡", description: "Contrôle Nafs" },
        { nom: "Humilité Tawadu", progression: 92, couleur: "text-stone-600", icone: "🤲", description: "Modestie islamique" },
        { nom: "Patience Sabr", progression: 88, couleur: "text-neutral-600", icone: "⏳", description: "Endurance spirituelle" },
        { nom: "Gratitude Shukr", progression: 95, couleur: "text-orange-600", icone: "🙏", description: "Reconnaissance envers Allah" },
        { nom: "Sagesse Hikmah", progression: 81, couleur: "text-purple-700", icone: "🦉", description: "Perspicacité spirituelle" }
      ],
      centre: { nom: "Tazkiyah", icone: "✨", couleur: "text-purple-500" }
    },
    "Impact Environnemental": {
      etoiles: [
        { nom: "Économie Ressources", progression: 90, couleur: "text-blue-700", icone: "💧", description: "Anti-gaspillage islamique" },
        { nom: "Plantation Sadaqah", progression: 87, couleur: "text-green-700", icone: "🌳", description: "Arbres aumône continue" },
        { nom: "Énergie Propre", progression: 79, couleur: "text-yellow-600", icone: "☀️", description: "Sources renouvelables" },
        { nom: "Transport Éthique", progression: 85, couleur: "text-indigo-600", icone: "🚲", description: "Mobilité responsable" },
        { nom: "Consommation Conscience", progression: 88, couleur: "text-emerald-700", icone: "🛒", description: "Achats réfléchis halal" }
      ],
      centre: { nom: "Khalifah", icone: "🌍", couleur: "text-green-500" }
    }
  };

  const achievementsConstellation = [
    {
      nom: "Étoile Polaire Spirituelle",
      description: "Atteindre 90% dans toutes les étoiles Spiritualité",
      icone: "⭐",
      couleur: "text-yellow-500",
      progression: 89,
      recompense: "Guide Spirituel Certifié + 2000 XP",
      obtenu: false
    },
    {
      nom: "Constellation Parfaite Santé",
      description: "Excellence dans tous domaines santé physique",
      icone: "💎",
      couleur: "text-blue-500",
      progression: 87,
      recompense: "Consultation Gratuite Souheila + 1500 XP",
      obtenu: false
    },
    {
      nom: "Maître Équilibre Mental",
      description: "Harmonie complète esprit et émotions",
      icone: "🧠",
      couleur: "text-purple-500",
      progression: 88,
      recompense: "Session Coaching Personnalisé + 1800 XP",
      obtenu: false
    },
    {
      nom: "Ambassadeur Relations Ummah",
      description: "Excellence dans toutes relations sociales",
      icone: "🤝",
      couleur: "text-green-500",
      progression: 90,
      recompense: "Leadership Communautaire + 2200 XP",
      obtenu: true
    },
    {
      nom: "Sage Développement Personnel",
      description: "Maîtrise croissance spirituelle islamique",
      icone: "🦉",
      couleur: "text-orange-500",
      progression: 88,
      recompense: "Mentor Certifié CED + 2500 XP",
      obtenu: false
    },
    {
      nom: "Gardien Suprême Planète",
      description: "Impact environnemental exemplaire",
      icone: "🌍",
      couleur: "text-cyan-500",
      progression: 86,
      recompense: "Ambassadeur Écologique + 3000 XP",
      obtenu: false
    }
  ];

  const niveauxEveil = [
    { niveau: 1, nom: "Éveil Initial", couleur: "text-gray-500", icone: "🌱" },
    { niveau: 2, nom: "Conscience Spirituelle", couleur: "text-green-500", icone: "🍃" },
    { niveau: 3, nom: "Harmonie Recherchée", couleur: "text-blue-500", icone: "🌊" },
    { niveau: 4, nom: "Équilibre Trouvé", couleur: "text-purple-500", icone: "⚖️" },
    { niveau: 5, nom: "Sagesse Émergente", couleur: "text-orange-500", icone: "🦋" },
    { niveau: 6, nom: "Maîtrise Personnelle", couleur: "text-red-500", icone: "🔥" },
    { niveau: 7, nom: "Illumination Spirituelle", couleur: "text-yellow-500", icone: "✨" },
    { niveau: 8, nom: "Guide pour Autrui", couleur: "text-pink-500", icone: "🌟" },
    { niveau: 9, nom: "Sage Accompli", couleur: "text-indigo-500", icone: "🕌" },
    { niveau: 10, nom: "Être Transcendant", couleur: "text-cyan-500", icone: "💎" }
  ];

  const genererConstellation = (constellation) => {
    const etoiles = constellations[constellation].etoiles;
    const centre = constellations[constellation].centre;
    
    return (
      <div className="relative w-80 h-80 mx-auto">
        {/* Centre de la constellation */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center border-4 border-yellow-400 shadow-lg">
          <div className="text-2xl">{centre.icone}</div>
        </div>
        
        {/* Étoiles autour */}
        {etoiles.map((etoile, index) => {
          const angle = (index * 72) * (Math.PI / 180); // 72 degrés entre chaque étoile
          const rayon = 120;
          const x = rayon * Math.cos(angle);
          const y = rayon * Math.sin(angle);
          
          return (
            <div
              key={index}
              className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-300 shadow-md hover:scale-110 transition-transform cursor-pointer"
              style={{
                left: `calc(50% + ${x}px - 24px)`,
                top: `calc(50% + ${y}px - 24px)`,
                borderColor: etoile.progression >= 90 ? '#10B981' : etoile.progression >= 70 ? '#F59E0B' : '#EF4444'
              }}
              title={`${etoile.nom}: ${etoile.progression}%`}
            >
              <div className="text-lg">{etoile.icone}</div>
            </div>
          );
        })}
        
        {/* Lignes de connexion */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {etoiles.map((_, index) => {
            const angle = (index * 72) * (Math.PI / 180);
            const rayon = 120;
            const x = rayon * Math.cos(angle);
            const y = rayon * Math.sin(angle);
            
            return (
              <line
                key={index}
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${x}px)`}
                y2={`calc(50% + ${y}px)`}
                stroke="#D1D5DB"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.5"
              />
            );
          })}
        </svg>
      </div>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergieVitale(prev => {
        const variation = Math.random() * 10 - 5;
        return Math.max(0, Math.min(100, prev + variation));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Principal */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mb-6">
            <Star className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Mindful Wellness Achievement Constellation Map
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Cartographie Spirituelle • Bien-être Holistique Islamique • Évolution Personnelle
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <Badge className="bg-indigo-100 text-indigo-700 text-lg px-4 py-2">
              <Star className="w-5 h-5 mr-2" />
              Niveau {niveauEveil} : {niveauxEveil[niveauEveil-1]?.nom}
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 text-lg px-4 py-2">
              <Zap className="w-5 h-5 mr-2" />
              {energieVitale}% Énergie Vitale
            </Badge>
            <Badge className="bg-pink-100 text-pink-700 text-lg px-4 py-2">
              <Heart className="w-5 h-5 mr-2" />
              {harmonie}% Harmonie Globale
            </Badge>
          </div>
        </div>

        {/* Tableau de Bord Spirituel */}
        <Card className="border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 mb-8">
          <CardHeader>
            <CardTitle className="text-center text-purple-700">
              🌟 Votre Profil Wellness Islamique
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-white rounded border">
                <div className="text-3xl mb-2">{niveauxEveil[niveauEveil-1]?.icone}</div>
                <div className="text-lg font-bold text-purple-600">{niveauxEveil[niveauEveil-1]?.nom}</div>
                <div className="text-sm text-gray-600">Niveau Éveil Spirituel</div>
              </div>
              <div className="p-4 bg-white rounded border">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-lg font-bold text-blue-600">{energieVitale}%</div>
                <div className="text-sm text-gray-600">Énergie Vitale</div>
              </div>
              <div className="p-4 bg-white rounded border">
                <div className="text-3xl mb-2">❤️</div>
                <div className="text-lg font-bold text-green-600">{harmonie}%</div>
                <div className="text-sm text-gray-600">Harmonie Globale</div>
              </div>
              <div className="p-4 bg-white rounded border">
                <div className="text-3xl mb-2">✨</div>
                <div className="text-lg font-bold text-orange-600">6/6</div>
                <div className="text-sm text-gray-600">Constellations Actives</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="constellations" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="constellations">⭐ Constellations</TabsTrigger>
            <TabsTrigger value="achievements">🏆 Achievements</TabsTrigger>
            <TabsTrigger value="progression">📈 Progression</TabsTrigger>
            <TabsTrigger value="guidance">🧭 Guidance Spirituelle</TabsTrigger>
          </TabsList>

          {/* Onglet Constellations */}
          <TabsContent value="constellations">
            <div className="space-y-8">
              <Card className="border-2 border-indigo-200 bg-indigo-50">
                <CardHeader>
                  <CardTitle className="text-center text-indigo-700">
                    🌌 Sélectionnez Votre Constellation Wellness
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center gap-3 flex-wrap mb-8">
                    {Object.keys(constellations).map((nom) => (
                      <Button
                        key={nom}
                        onClick={() => setConstellationActive(nom)}
                        variant={constellationActive === nom ? "default" : "outline"}
                        className="text-sm px-4 py-2"
                      >
                        {constellations[nom].centre.icone} {nom}
                      </Button>
                    ))}
                  </div>
                  
                  {/* Constellation Visuelle */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-center mb-6 text-indigo-700">
                      {constellations[constellationActive].centre.icone} Constellation {constellationActive}
                    </h3>
                    {genererConstellation(constellationActive)}
                  </div>
                  
                  {/* Détails des Étoiles */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {constellations[constellationActive].etoiles.map((etoile, index) => (
                      <Card key={index} className="border hover:shadow-lg transition-all">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <span className="text-2xl mr-2">{etoile.icone}</span>
                              <span className="font-semibold">{etoile.nom}</span>
                            </div>
                            <Badge className={
                              etoile.progression >= 90 ? "bg-green-100 text-green-700" :
                              etoile.progression >= 70 ? "bg-yellow-100 text-yellow-700" :
                              "bg-red-100 text-red-700"
                            }>
                              {etoile.progression}%
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{etoile.description}</p>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${etoile.progression}%` }}
                            ></div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Onglet Achievements */}
          <TabsContent value="achievements">
            <div className="grid md:grid-cols-2 gap-6">
              {achievementsConstellation.map((achievement, index) => (
                <Card key={index} className={`border-2 transition-all ${
                  achievement.obtenu ? 'border-yellow-300 bg-yellow-50 shadow-lg' : 'border-gray-200 hover:shadow-lg'
                }`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`text-4xl mr-4 ${achievement.obtenu ? '' : 'opacity-50'}`}>
                          {achievement.icone}
                        </div>
                        <div>
                          <CardTitle className={`text-lg ${achievement.couleur}`}>
                            {achievement.nom}
                          </CardTitle>
                          <p className="text-sm text-gray-600">{achievement.description}</p>
                        </div>
                      </div>
                      {achievement.obtenu && (
                        <Badge className="bg-green-100 text-green-700">✓ OBTENU</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progression</span>
                          <span>{achievement.progression}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                            style={{ width: `${achievement.progression}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-blue-50 rounded border border-blue-200">
                        <h4 className="font-semibold text-blue-700 mb-1">🎁 Récompense:</h4>
                        <p className="text-sm text-blue-800">{achievement.recompense}</p>
                      </div>
                      
                      {!achievement.obtenu && (
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">
                          🎯 Progresser vers cet Achievement
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet Progression */}
          <TabsContent value="progression">
            <div className="space-y-8">
              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-center text-green-700">
                    📊 Évolution Globale Wellness Islamique
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {Object.entries(constellations).map(([nom, constellation]) => {
                      const moyenneProgression = constellation.etoiles.reduce((acc, etoile) => acc + etoile.progression, 0) / constellation.etoiles.length;
                      
                      return (
                        <div key={nom} className="p-4 bg-white rounded border">
                          <div className="text-center mb-3">
                            <div className="text-3xl mb-2">{constellation.centre.icone}</div>
                            <h4 className="font-semibold text-gray-800">{nom}</h4>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                            <div 
                              className="bg-gradient-to-r from-green-500 to-blue-500 h-4 rounded-full flex items-center justify-center text-white text-xs font-bold"
                              style={{ width: `${moyenneProgression}%` }}
                            >
                              {Math.round(moyenneProgression)}%
                            </div>
                          </div>
                          <div className="text-xs text-gray-600 text-center">
                            {constellation.etoiles.length} domaines actifs
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Évolution dans le Temps */}
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-center text-blue-700">
                    📈 Historique Progression 30 Derniers Jours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-end justify-center p-4">
                    <div className="text-center text-gray-600">
                      <div className="text-6xl mb-4">📊</div>
                      <p>Graphique de progression détaillé</p>
                      <p className="text-sm">Tendance générale : +12% ce mois</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Onglet Guidance Spirituelle */}
          <TabsContent value="guidance">
            <div className="space-y-8">
              <Card className="border-2 border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-center text-yellow-700">
                    🧭 Guidance Spirituelle Personnalisée
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-white rounded border border-yellow-200">
                        <h4 className="font-bold text-yellow-600 mb-2">🌅 Conseil du Jour</h4>
                        <p className="text-sm text-gray-700">
                          "Commencez votre journée par la gratitude envers Allah. Récitez 3x 'Alhamdulillahi Rabbil Alameen' 
                          avec conscience pour augmenter votre étoile Spiritualité."
                        </p>
                      </div>
                      
                      <div className="p-4 bg-white rounded border border-yellow-200">
                        <h4 className="font-bold text-blue-600 mb-2">🎯 Focus Recommandé</h4>
                        <p className="text-sm text-gray-700">
                          "Votre constellation Santé Physique nécessite attention. Intégrez 20 minutes de marche 
                          après chaque prière pour renforcer votre amanah corporelle."
                        </p>
                      </div>
                      
                      <div className="p-4 bg-white rounded border border-yellow-200">
                        <h4 className="font-bold text-green-600 mb-2">📿 Du'â Wellness</h4>
                        <p className="text-sm text-gray-700 arabic-text mb-1">
                          اللهم أصلح لي ديني وصحتي ونفسي وأهلي
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          "Ô Allah, améliore ma religion, ma santé, mon âme et ma famille"
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-white rounded border border-yellow-200">
                        <h4 className="font-bold text-purple-600 mb-2">🌟 Prochaine Étape</h4>
                        <p className="text-sm text-gray-700">
                          "Pour atteindre niveau 8 'Guide pour Autrui', concentrez-vous sur partage de vos 
                          connaissances wellness avec votre entourage musulman."
                        </p>
                      </div>
                      
                      <div className="p-4 bg-white rounded border border-yellow-200">
                        <h4 className="font-bold text-pink-600 mb-2">💝 Motivation Spirituelle</h4>
                        <p className="text-sm text-gray-700">
                          "Votre parcours wellness est une forme d'adoration. Chaque amélioration personnelle 
                          vous rapproche d'Allah et inspire votre communauté."
                        </p>
                      </div>
                      
                      <div className="p-4 bg-white rounded border border-yellow-200">
                        <h4 className="font-bold text-orange-600 mb-2">⚡ Action Immédiate</h4>
                        <p className="text-sm text-gray-700">
                          "Défi 7 jours : Intégrez 5 minutes de dhikr après chaque repas pour renforcer 
                          connexion spirituelle et conscience alimentaire."
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Wisdom Quotes Islamique */}
              <Card className="border-2 border-cyan-200 bg-cyan-50">
                <CardHeader>
                  <CardTitle className="text-center text-cyan-700">
                    💎 Sagesse Islamique Wellness
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-white rounded border border-cyan-200">
                      <h4 className="font-bold text-cyan-600 mb-2">🕌 Coran sur la Santé</h4>
                      <p className="text-lg text-cyan-900 font-semibold mb-2 arabic-text">
                        وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا
                      </p>
                      <p className="text-sm text-cyan-700 italic">
                        "Mangez et buvez sans commettre d'excès" - Al-A'raf 7:31
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded border border-cyan-200">
                      <h4 className="font-bold text-cyan-600 mb-2">📿 Hadith Wellness</h4>
                      <p className="text-sm text-cyan-700">
                        "Votre corps a des droits sur vous, votre âme a des droits sur vous" 
                        - Sahih Bukhari
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Navigation */}
        <div className="mt-12 text-center space-x-4">
          <Link href="/methodologie-sciences-islamiques">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              📚 Méthodologie Sciences Islamiques
            </Button>
          </Link>
          <Link href="/halal-tech-community-gamification">
            <Button variant="outline" size="lg">
              🎮 Retour Gamification
            </Button>
          </Link>
        </div>
      </div>

      {/* Copyright Protection */}
      <div className="mt-16 py-8 border-t-2 border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-lg font-medium">
            © Yakoubi Yamina - CED HalalTech™ • Mindful Wellness Achievement Constellation Map
          </p>
          <p className="text-gray-500 text-sm mt-2">
            🌟 Cartographie Spirituelle Wellness • Bien-être Holistique Islamique • Évolution Personnelle
          </p>
          <p className="text-indigo-600 text-sm mt-2 font-medium">
            Constellation Spirituelle • Harmonie Corps-Âme-Esprit • Guidance Islamique Authentique
          </p>
        </div>
      </div>
    </div>
  );
}