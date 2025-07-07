import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { BookOpen, Brain, Heart, Zap, Star, Crown, Sparkles, Target } from "lucide-react";

export default function MethodologieSciencesIslamiques() {
  const [etapeActive, setEtapeActive] = useState("Apprendre");
  const [progressionGlobale, setProgressionGlobale] = useState(68);
  const [niveauMaitrise, setNiveauMaitrise] = useState("Étudiant Intermédiaire");
  const [specialiteActive, setSpecialiteActive] = useState("Coran & Tajweed");

  const quatreEtapes = {
    "Apprendre": {
      icone: "📚",
      couleur: "from-blue-500 to-cyan-500",
      description: "Acquisition méthodique des connaissances islamiques selon sources authentiques",
      versetCle: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
      traduction: "Et dis : Ô mon Seigneur, accroît mes connaissances",
      source: "Sourate Taha 20:114",
      methodes: [
        {
          nom: "Lecture Structurée",
          description: "Étudier Coran, Hadiths Sahih, ouvrages scholars selon ordre progressif",
          outils: ["Mushaf avec traduction", "Sahih Bukhari/Muslim", "Tafsir Ibn Kathir"],
          duree: "2-4h/jour",
          niveau: "Débutant à Avancé"
        },
        {
          nom: "Mémorisation Authentique",
          description: "Hifz Coran et Hadiths prioritaires avec Tajweed correct",
          outils: ["Audio récitateurs authentiques", "Applications Hifz", "Supervision Sheikh"],
          duree: "1-2h/jour",
          niveau: "Tous niveaux"
        },
        {
          nom: "Apprentissage Arabe Coranique",
          description: "Maîtrise langue arabe pour compréhension directe sources",
          outils: ["Grammaire Nahw", "Morphologie Sarf", "Dictionnaires classiques"],
          duree: "3-5h/semaine",
          niveau: "Essentiel pour Avancés"
        }
      ],
      planification: {
        quotidien: "30min Coran + 30min Hadith + 30min Fiqh",
        hebdomadaire: "2h Sira + 2h Aqida + 1h Révisions",
        mensuel: "Évaluation progression + Ajustement programme"
      }
    },
    "Comprendre": {
      icone: "🧠",
      couleur: "from-purple-500 to-pink-500", 
      description: "Assimilation profonde et contextualisation des enseignements selon méthodologie Salaf",
      versetCle: "أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ",
      traduction: "Ne méditent-ils donc pas sur le Coran ?",
      source: "Sourate Muhammad 47:24",
      methodes: [
        {
          nom: "Tadabbur Guidé",
          description: "Réflexion profonde sur versets avec Tafsir authentiques",
          outils: ["Tafsir Tabari", "Tafsir Qurtubi", "Tafsir Sa'di"],
          duree: "45min/jour",
          niveau: "Intermédiaire"
        },
        {
          nom: "Contextualisation Historique",
          description: "Comprendre circonstances révélation et application prophétique",
          outils: ["Asbab an-Nuzul", "Sira authentique", "Histoire Sahabas"],
          duree: "1h/semaine",
          niveau: "Avancé"
        },
        {
          nom: "Liens Intercepts",
          description: "Connecter versets, hadiths et applications pratiques",
          outils: ["Concordances", "Index thématiques", "Mind mapping"],
          duree: "30min/jour",
          niveau: "Tous niveaux"
        }
      ],
      competences: {
        analyse: "Décortiquer textes avec méthodes exégétiques classiques",
        synthese: "Relier enseignements pour vision holistique islam",
        critique: "Distinguer sources authentiques des innovations"
      }
    },
    "Méditer": {
      icone: "🤲",
      couleur: "from-green-500 to-emerald-500",
      description: "Intériorisation spirituelle et transformation personnelle par contemplation authentique",
      versetCle: "الَّذِينَ يَذْكُرُونَ اللَّهَ قِيَامًا وَقُعُودًا وَعَلَىٰ جُنُوبِهِمْ",
      traduction: "Ceux qui invoquent Allah debout, assis et couchés sur leurs côtés",
      source: "Sourate Al-Imran 3:191",
      methodes: [
        {
          nom: "Dhikr Contemplatif",
          description: "Récitation consciente avec présence cœur et esprit",
          outils: ["Adhkar authentiques", "Wird quotidien", "Compte-dhikr"],
          duree: "Variable selon capacité",
          niveau: "Essentiel tous niveaux"
        },
        {
          nom: "Qiyam & Tahajjud",
          description: "Prières nocturnes pour proximité divine et purification âme",
          outils: ["Portions Coran", "Du'a prophétiques", "Atmosphère sacrée"],
          duree: "20min-2h selon possibilité",
          niveau: "Recommandé Intermédiaire+"
        },
        {
          nom: "Muraqaba Islamique",
          description: "Méditation sur Grandeur Allah et conscience permanente Sa présence",
          outils: ["99 Noms Allah", "Contemplation création", "Examen conscience"],
          duree: "15-30min/jour",
          niveau: "Avancé avec supervision"
        }
      ],
      fruits: {
        spirituels: "Khushu' prière, proximité Allah, paix intérieure",
        caracteriel: "Patience, humilité, générosité, véracité",
        comportemental: "Discipline personnelle, priorités claires, détachement dunya"
      }
    },
    "Appliquer": {
      icone: "⚡",
      couleur: "from-orange-500 to-red-500",
      description: "Mise en pratique concrète et transmission selon exemple prophétique authentique",
      versetCle: "وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُمْ عَنْهُ فَانتَهُوا",
      traduction: "Ce que le Messager vous donne, prenez-le; et ce qu'il vous interdit, abstenez-vous en",
      source: "Sourate Al-Hashr 59:7",
      methodes: [
        {
          nom: "Mise Pratique Progressive",
          description: "Application graduelle enseignements dans vie quotidienne",
          outils: ["Planning Ibadah", "Tracker habitudes", "Rappels spirituels"],
          duree: "Intégré au quotidien",
          niveau: "Dès débutant"
        },
        {
          nom: "Da'wah Sage",
          description: "Transmission connaissances avec sagesse et belles manières",
          outils: ["Formations da'wah", "Supports pédagogiques", "Mentorat"],
          duree: "Selon opportunités",
          niveau: "Intermédiaire+"
        },
        {
          nom: "Exemplarité Comportementale",
          description: "Incarner valeurs islamiques pour inspiration entourage",
          outils: ["Akhlaq prophétique", "Auto-évaluation", "Feedback communauté"],
          duree: "Mode de vie permanent",
          niveau: "Objectif de tous"
        }
      ],
      domaines: {
        personnel: "Adoration, caractère, relations familiales, habitudes",
        social: "Da'wah, entraide, justice, leadership communautaire",
        professionnel: "Éthique travail, halal/haram, impact positif société"
      }
    }
  };

  const specialitesIslamiques = [
    {
      nom: "Coran & Tajweed",
      icone: "📖",
      description: "Lecture, mémorisation et compréhension Saint Coran",
      niveaux: ["Débutant", "Hafiz", "Qari", "Mufassir"],
      dureeFormation: "2-10 ans selon objectif",
      certifications: ["Ijaza Hifz", "Ijaza Qira'at", "Tafsir"]
    },
    {
      nom: "Hadith & Sira",
      icone: "📚",
      description: "Sciences tradition prophétique et biographie authentique",
      niveaux: ["Étudiant", "Muhaddith", "Hafiz Hadith", "Scholar"],
      dureeFormation: "3-15 ans",
      certifications: ["Sahih Bukhari", "Kutub Sitta", "Isnad"]
    },
    {
      nom: "Fiqh & Usul",
      icone: "⚖️",
      description: "Jurisprudence islamique et méthodologie légale",
      niveaux: ["Novice", "Taleb", "Faqih", "Mujtahid"],
      dureeFormation: "5-20 ans",
      certifications: ["Madhab", "Qada", "Ifta"]
    },
    {
      nom: "Aqida & Kalam",
      icone: "🌟",
      description: "Croyance islamique et théologie défensive",
      niveaux: ["Apprenant", "Étudiant", "Mutakallim", "Imam"],
      dureeFormation: "2-8 ans",
      certifications: ["Aqida Salafiyya", "Refutation Bid'ah"]
    },
    {
      nom: "Langue Arabe",
      icone: "🔤",
      description: "Grammaire, morphologie et littérature arabe classique",
      niveaux: ["Alphabet", "Phrases", "Textes", "Littérature"],
      dureeFormation: "1-5 ans",
      certifications: ["Nahw", "Sarf", "Balagha"]
    },
    {
      nom: "Da'wah & Khutba",
      icone: "🎙️",
      description: "Prédication islamique et art oratoire",
      niveaux: ["Débutant", "Actif", "Khatib", "Da'i"],
      dureeFormation: "1-3 ans",
      certifications: ["Khutba", "Communication", "Leadership"]
    }
  ];

  const planningOptimal = {
    quotidien: {
      fajr: "30min - Coran + Du'a + Dhikr matinal",
      matinee: "45min - Étude Hadith ou Fiqh selon planning",
      dhuhr: "15min - Révision + méditation courte",
      asr: "30min - Arabe ou spécialité choisie",
      maghrib: "20min - Sira ou Aqida",
      isha: "45min - Approfondissement sujet jour + Istighfar",
      tahajjud: "Variable - Prière + méditation + du'a personnelles"
    },
    hebdomadaire: {
      dimanche: "Focus Coran - Hifz + Tadabbur + Tafsir",
      lundi: "Hadith & Sira - Étude traditions authentiques",
      mardi: "Fiqh pratique - Applications quotidiennes",
      mercredi: "Aqida & défense foi - Renforcement croyance",
      jeudi: "Langue arabe - Grammaire et vocabulaire",
      vendredi: "Da'wah & communauté - Préparation Khutba",
      samedi: "Révisions & synthèse - Consolidation acquis"
    },
    mensuel: {
      semaine1: "Acquisition nouvelles connaissances",
      semaine2: "Approfondissement et compréhension", 
      semaine3: "Méditation et intériorisation",
      semaine4: "Application pratique et évaluation"
    }
  };

  const niveauxMaitrise = [
    { niveau: "Débutant Sincère", icone: "🌱", couleur: "text-green-500", description: "Bases solides et intention pure" },
    { niveau: "Étudiant Assidu", icone: "📚", couleur: "text-blue-500", description: "Régularité et méthode établies" },
    { niveau: "Chercheur Éclairé", icone: "🔍", couleur: "text-purple-500", description: "Compréhension approfondie sources" },
    { niveau: "Pratiquant Exemplaire", icone: "⭐", couleur: "text-yellow-500", description: "Application concrète quotidienne" },
    { niveau: "Transmetteur Sage", icone: "🎓", couleur: "text-orange-500", description: "Da'wah et enseignement responsable" },
    { niveau: "Guide Spirituel", icone: "🌟", couleur: "text-pink-500", description: "Leadership et conseil communautaire" },
    { niveau: "Scholar Reconnu", icone: "👑", couleur: "text-red-500", description: "Autorité scientifique authentifiée" },
    { niveau: "Héritier Prophètes", icone: "💎", couleur: "text-indigo-500", description: "Excellence spirituelle et savoir" }
  ];

  const etapeActuelle = quatreEtapes[etapeActive];

  const progresserEtape = () => {
    const etapes = Object.keys(quatreEtapes);
    const indexActuel = etapes.indexOf(etapeActive);
    const prochainIndex = (indexActuel + 1) % etapes.length;
    setEtapeActive(etapes[prochainIndex]);
    setProgressionGlobale(prev => Math.min(100, prev + 8));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Principal */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full mb-6">
            <BookOpen className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            Méthodologie Optimale d'Apprentissage des Sciences Islamiques
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Apprendre • Comprendre • Méditer • Appliquer sa Religion selon Coran & Sunna
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <Badge className="bg-amber-100 text-amber-700 text-lg px-4 py-2">
              <BookOpen className="w-5 h-5 mr-2" />
              {niveauMaitrise}
            </Badge>
            <Badge className="bg-orange-100 text-orange-700 text-lg px-4 py-2">
              <Target className="w-5 h-5 mr-2" />
              {progressionGlobale}% Maîtrise
            </Badge>
            <Badge className="bg-red-100 text-red-700 text-lg px-4 py-2">
              <Star className="w-5 h-5 mr-2" />
              Étape: {etapeActive}
            </Badge>
          </div>
        </div>

        {/* Vue d'ensemble des 4 Étapes */}
        <Card className="border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 mb-8">
          <CardHeader>
            <CardTitle className="text-center text-amber-700">
              🎯 Les 4 Étapes Fondamentales de l'Apprentissage Islamique
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              {Object.entries(quatreEtapes).map(([nom, etape]) => (
                <Card 
                  key={nom}
                  className={`border-2 cursor-pointer transition-all ${
                    etapeActive === nom ? 'border-yellow-400 bg-yellow-50 shadow-lg scale-105' : 'border-gray-200 hover:shadow-md'
                  }`}
                  onClick={() => setEtapeActive(nom)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-4xl mb-3">{etape.icone}</div>
                    <h3 className="font-bold text-lg mb-2">{nom}</h3>
                    <p className="text-sm text-gray-600 mb-3">{etape.description}</p>
                    {etapeActive === nom && (
                      <Badge className="bg-yellow-200 text-yellow-800">Actuel</Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="methodologie" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="methodologie">📚 Méthodologie</TabsTrigger>
            <TabsTrigger value="specialites">🎓 Spécialités</TabsTrigger>
            <TabsTrigger value="planning">📅 Planning</TabsTrigger>
            <TabsTrigger value="progression">📈 Progression</TabsTrigger>
            <TabsTrigger value="guidance">🧭 Guidance</TabsTrigger>
          </TabsList>

          {/* Onglet Méthodologie */}
          <TabsContent value="methodologie">
            <div className="space-y-8">
              {/* Étape Active Détaillée */}
              <Card className={`border-2 bg-gradient-to-r ${etapeActuelle.couleur} bg-opacity-10`}>
                <CardHeader>
                  <div className="text-center">
                    <div className="text-6xl mb-4">{etapeActuelle.icone}</div>
                    <CardTitle className="text-3xl mb-4">Étape: {etapeActive}</CardTitle>
                    <p className="text-lg text-gray-700 mb-4">{etapeActuelle.description}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Verset Fondateur */}
                  <div className="p-6 bg-blue-100 rounded-lg border-2 border-blue-300 mb-6">
                    <h4 className="font-bold text-blue-800 mb-3 text-center">🕌 Verset Fondateur</h4>
                    <p className="text-2xl text-blue-900 font-semibold mb-3 text-center arabic-text">
                      {etapeActuelle.versetCle}
                    </p>
                    <p className="text-lg text-blue-700 italic text-center mb-2">
                      "{etapeActuelle.traduction}"
                    </p>
                    <p className="text-sm text-blue-600 text-center">{etapeActuelle.source}</p>
                  </div>

                  {/* Méthodes Détaillées */}
                  <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    {etapeActuelle.methodes.map((methode, index) => (
                      <Card key={index} className="border hover:shadow-lg transition-all">
                        <CardHeader>
                          <CardTitle className="text-lg text-amber-700">{methode.nom}</CardTitle>
                          <p className="text-gray-600">{methode.description}</p>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div>
                              <h5 className="font-semibold text-sm text-gray-700">Outils Recommandés:</h5>
                              <ul className="text-xs text-gray-600">
                                {methode.outils.map((outil, idx) => (
                                  <li key={idx}>• {outil}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-blue-600">⏰ {methode.duree}</span>
                              <Badge variant="outline" className="text-xs">{methode.niveau}</Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Section Spécifique selon Étape */}
                  {etapeActive === "Apprendre" && (
                    <Card className="border-2 border-green-200 bg-green-50">
                      <CardHeader>
                        <CardTitle className="text-green-700">📋 Planification Étape Apprentissage</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="p-4 bg-white rounded">
                            <h5 className="font-bold text-blue-600 mb-2">📅 Quotidien</h5>
                            <p className="text-sm text-gray-700">{etapeActuelle.planification.quotidien}</p>
                          </div>
                          <div className="p-4 bg-white rounded">
                            <h5 className="font-bold text-purple-600 mb-2">📆 Hebdomadaire</h5>
                            <p className="text-sm text-gray-700">{etapeActuelle.planification.hebdomadaire}</p>
                          </div>
                          <div className="p-4 bg-white rounded">
                            <h5 className="font-bold text-orange-600 mb-2">📊 Mensuel</h5>
                            <p className="text-sm text-gray-700">{etapeActuelle.planification.mensuel}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {etapeActive === "Comprendre" && (
                    <Card className="border-2 border-purple-200 bg-purple-50">
                      <CardHeader>
                        <CardTitle className="text-purple-700">🧠 Compétences Développées</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-3 gap-4">
                          {Object.entries(etapeActuelle.competences).map(([competence, description]) => (
                            <div key={competence} className="p-4 bg-white rounded">
                              <h5 className="font-bold text-purple-600 mb-2 capitalize">{competence}</h5>
                              <p className="text-sm text-gray-700">{description}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {etapeActive === "Méditer" && (
                    <Card className="border-2 border-green-200 bg-green-50">
                      <CardHeader>
                        <CardTitle className="text-green-700">🌟 Fruits de la Méditation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-3 gap-4">
                          {Object.entries(etapeActuelle.fruits).map(([domaine, description]) => (
                            <div key={domaine} className="p-4 bg-white rounded">
                              <h5 className="font-bold text-green-600 mb-2 capitalize">{domaine}</h5>
                              <p className="text-sm text-gray-700">{description}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {etapeActive === "Appliquer" && (
                    <Card className="border-2 border-orange-200 bg-orange-50">
                      <CardHeader>
                        <CardTitle className="text-orange-700">🎯 Domaines d'Application</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-3 gap-4">
                          {Object.entries(etapeActuelle.domaines).map(([domaine, description]) => (
                            <div key={domaine} className="p-4 bg-white rounded">
                              <h5 className="font-bold text-orange-600 mb-2 capitalize">{domaine}</h5>
                              <p className="text-sm text-gray-700">{description}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  <div className="text-center mt-6">
                    <Button 
                      onClick={progresserEtape}
                      className="bg-amber-600 hover:bg-amber-700 text-xl px-8 py-3"
                    >
                      ✓ Valider Étape {etapeActive} et Progresser
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Onglet Spécialités */}
          <TabsContent value="specialites">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialitesIslamiques.map((specialite, index) => (
                <Card 
                  key={index} 
                  className={`border-2 cursor-pointer transition-all ${
                    specialiteActive === specialite.nom ? 'border-amber-400 bg-amber-50 shadow-lg' : 'border-gray-200 hover:shadow-md'
                  }`}
                  onClick={() => setSpecialiteActive(specialite.nom)}
                >
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-3">{specialite.icone}</div>
                    <CardTitle className="text-lg text-amber-700">{specialite.nom}</CardTitle>
                    <p className="text-sm text-gray-600">{specialite.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-sm text-gray-700 mb-1">Niveaux de Progression:</h5>
                        <div className="flex flex-wrap gap-1">
                          {specialite.niveaux.map((niveau, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {niveau}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-sm">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-600">⏱️ Formation:</span>
                          <span className="font-medium">{specialite.dureeFormation}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-sm text-gray-700 mb-1">Certifications:</h5>
                        <div className="flex flex-wrap gap-1">
                          {specialite.certifications.map((cert, idx) => (
                            <Badge key={idx} className="bg-green-100 text-green-700 text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {specialiteActive === specialite.nom && (
                        <Button className="w-full bg-amber-600 hover:bg-amber-700 mt-4">
                          🎯 Choisir cette Spécialité
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet Planning */}
          <TabsContent value="planning">
            <div className="space-y-8">
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-center text-blue-700">
                    📅 Planning Optimal d'Étude Islamique
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="quotidien" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                      <TabsTrigger value="quotidien">📅 Quotidien</TabsTrigger>
                      <TabsTrigger value="hebdomadaire">📆 Hebdomadaire</TabsTrigger>
                      <TabsTrigger value="mensuel">📊 Mensuel</TabsTrigger>
                    </TabsList>

                    <TabsContent value="quotidien">
                      <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(planningOptimal.quotidien).map(([moment, activite]) => (
                          <div key={moment} className="p-4 bg-white rounded border border-blue-200">
                            <h4 className="font-bold text-blue-600 mb-2 capitalize">{moment}</h4>
                            <p className="text-sm text-gray-700">{activite}</p>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="hebdomadaire">
                      <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(planningOptimal.hebdomadaire).map(([jour, focus]) => (
                          <div key={jour} className="p-4 bg-white rounded border border-blue-200">
                            <h4 className="font-bold text-blue-600 mb-2 capitalize">{jour}</h4>
                            <p className="text-sm text-gray-700">{focus}</p>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="mensuel">
                      <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(planningOptimal.mensuel).map(([periode, objectif]) => (
                          <div key={periode} className="p-4 bg-white rounded border border-blue-200">
                            <h4 className="font-bold text-blue-600 mb-2 capitalize">{periode}</h4>
                            <p className="text-sm text-gray-700">{objectif}</p>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Onglet Progression */}
          <TabsContent value="progression">
            <div className="space-y-8">
              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-center text-purple-700">
                    📈 Niveaux de Maîtrise Sciences Islamiques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {niveauxMaitrise.map((niveau, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg border text-center transition-all ${
                          niveau.niveau === niveauMaitrise ? 'border-purple-400 bg-purple-100' : 'border-gray-200 bg-white'
                        }`}
                      >
                        <div className="text-3xl mb-2">{niveau.icone}</div>
                        <div className={`font-bold ${niveau.couleur} mb-1`}>{niveau.niveau}</div>
                        <div className="text-xs text-gray-600">{niveau.description}</div>
                        {niveau.niveau === niveauMaitrise && (
                          <Badge className="mt-2 bg-purple-200 text-purple-800">Actuel</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-center text-green-700">
                    🎯 Progression dans les 4 Étapes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.keys(quatreEtapes).map((etape, index) => {
                      const progression = etape === etapeActive ? 75 : 
                                       Object.keys(quatreEtapes).indexOf(etape) < Object.keys(quatreEtapes).indexOf(etapeActive) ? 100 : 25;
                      
                      return (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-800">
                              {quatreEtapes[etape].icone} {etape}
                            </span>
                            <span className="text-sm font-bold text-green-600">{progression}%</span>
                          </div>
                          <Progress value={progression} className="h-3" />
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Onglet Guidance */}
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
                        <h4 className="font-bold text-yellow-600 mb-2">🌅 Conseil Prioritaire</h4>
                        <p className="text-sm text-gray-700">
                          "Concentrez-vous sur l'étape '{etapeActive}' avec discipline quotidienne. 
                          La constance dans petites actions vaut mieux que l'intensité sporadique."
                        </p>
                      </div>
                      
                      <div className="p-4 bg-white rounded border border-yellow-200">
                        <h4 className="font-bold text-blue-600 mb-2">📖 Lecture Recommandée</h4>
                        <p className="text-sm text-gray-700">
                          "Pour votre niveau '{niveauMaitrise}', étudiez 'Riyad as-Salihin' 
                          15min/jour pour application pratique des hadiths authentiques."
                        </p>
                      </div>
                      
                      <div className="p-4 bg-white rounded border border-yellow-200">
                        <h4 className="font-bold text-green-600 mb-2">🤲 Du'â Étudiant</h4>
                        <p className="text-sm text-gray-700 arabic-text mb-1">
                          رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          "Seigneur, élargis ma poitrine et facilite ma tâche"
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-white rounded border border-yellow-200">
                        <h4 className="font-bold text-purple-600 mb-2">⭐ Objectif Prochain</h4>
                        <p className="text-sm text-gray-700">
                          "Visez niveau 'Chercheur Éclairé' en maîtrisant méthodologie Tadabbur 
                          et mémorisation 20 hadiths Nawawi dans les 3 prochains mois."
                        </p>
                      </div>
                      
                      <div className="p-4 bg-white rounded border border-yellow-200">
                        <h4 className="font-bold text-pink-600 mb-2">💝 Motivation Prophétique</h4>
                        <p className="text-sm text-gray-700">
                          "Les scholars sont héritiers des Prophètes. Votre apprentissage sincère 
                          des sciences islamiques est acte d'adoration récompensé par Allah."
                        </p>
                      </div>
                      
                      <div className="p-4 bg-white rounded border border-yellow-200">
                        <h4 className="font-bold text-orange-600 mb-2">⚡ Action Immédiate</h4>
                        <p className="text-sm text-gray-700">
                          "Aujourd'hui : Récitez Sourate Al-Fatiha avec Tadabbur complet, 
                          réfléchissez 5min sur chaque verset et notez une leçon pratique."
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-cyan-200 bg-cyan-50">
                <CardHeader>
                  <CardTitle className="text-center text-cyan-700">
                    💎 Conseils des Savants pour l'Apprentissage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-white rounded border border-cyan-200">
                      <h4 className="font-bold text-cyan-600 mb-2">🧙‍♂️ Imam Ibn Taymiyyah</h4>
                      <p className="text-sm text-cyan-700 italic">
                        "La science sans action est comme un arbre sans fruits. 
                        Appliquez ce que vous apprenez avant de chercher plus."
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded border border-cyan-200">
                      <h4 className="font-bold text-cyan-600 mb-2">📚 Imam An-Nawawi</h4>
                      <p className="text-sm text-cyan-700 italic">
                        "Celui qui emprunte le chemin de la science, 
                        Allah lui facilite un chemin vers le Paradis."
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
          <Link href="/interactive-eco-warrior-progress">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              🌱 Retour Eco-Warrior Progress
            </Button>
          </Link>
          <Link href="/ced-halal-home">
            <Button variant="outline" size="lg">
              🏠 Écosystème CED
            </Button>
          </Link>
        </div>
      </div>

      {/* Copyright Protection */}
      <div className="mt-16 py-8 border-t-2 border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-lg font-medium">
            © Yakoubi Yamina - CED HalalTech™ • Méthodologie Optimale Sciences Islamiques
          </p>
          <p className="text-gray-500 text-sm mt-2">
            📚 Apprendre • Comprendre • Méditer • Appliquer • Méthodologie Authentique
          </p>
          <p className="text-amber-600 text-sm mt-2 font-medium">
            Formation Complète selon Coran & Sunna • Guidance Spirituelle Intégrée
          </p>
        </div>
      </div>
    </div>
  );
}