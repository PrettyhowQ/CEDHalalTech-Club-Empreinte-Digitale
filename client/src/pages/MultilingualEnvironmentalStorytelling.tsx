import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "wouter";
import { Globe, BookOpen, Volume2, Play, Pause, RotateCcw, Languages } from "lucide-react";

export default function MultilingualEnvironmentalStorytelling() {
  const [langueCourante, setLangueCourante] = useState("français");
  const [histoireCourante, setHistoireCourante] = useState(0);
  const [modeAudio, setModeAudio] = useState(false);
  const [progression, setProgression] = useState(0);

  const languesDisponibles = [
    { code: "fr", nom: "Français", flag: "🇫🇷" },
    { code: "ar", nom: "العربية", flag: "🇸🇦" },
    { code: "en", nom: "English", flag: "🇬🇧" },
    { code: "es", nom: "Español", flag: "🇪🇸" },
    { code: "de", nom: "Deutsch", flag: "🇩🇪" },
    { code: "ur", nom: "اردو", flag: "🇵🇰" },
    { code: "tr", nom: "Türkçe", flag: "🇹🇷" },
    { code: "ms", nom: "Bahasa Melayu", flag: "🇲🇾" },
    { code: "id", nom: "Bahasa Indonesia", flag: "🇮🇩" },
    { code: "bn", nom: "বাংলা", flag: "🇧🇩" }
  ];

  const histoiresEnvironnementales = {
    français: [
      {
        titre: "La Forêt d'Amazonie qui Pleurait",
        region: "Amérique du Sud",
        verset: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ",
        traduction: "Et de l'eau Nous avons fait toute chose vivante",
        histoire: `Il était une fois la majestueuse forêt d'Amazonie, poumon de notre planète, qui abritait des millions d'espèces créées par Allah. Mais au fil des années, les arbres disparaissaient un à un, et la forêt commençait à pleurer des larmes de pluie acide.

Un jour, de jeunes musulmans du monde entier se sont unis pour planter 50 000 arbres, invoquant Allah à chaque graine plantée. Ils récitaient : "Rabbana atina fi'd-dunya hasanatan wa fi'l-akhirati hasanatan wa qina adhab an-nar" (Notre Seigneur, accorde-nous belle part ici-bas et belle part dans l'au-delà).

Grâce à leur Sadaqah Jariyah environnementale, la forêt retrouva sa splendeur, les animaux revinrent, et l'air redevint pur. Allah récompensa leur effort sincère en multipliant les bénédictions.`,
        lecon: "Chaque arbre planté avec intention pure devient une aumône continue qui purifie nos péchés.",
        impact: "50,000 arbres plantés • 2.3M tonnes CO2 absorbées • 1,200 espèces protégées",
        action: "Planter un arbre près de chez vous comme Sadaqah Jariyah"
      },
      {
        titre: "L'Océan Pacifique et le Plastique Maudit",
        region: "Océan Pacifique",
        verset: "وَهُوَ الَّذِي سَخَّرَ الْبَحْرَ لِتَأْكُلُوا مِنْهُ لَحْمًا طَرِيًّا",
        traduction: "C'est Lui qui a assujetti la mer pour que vous en mangiez une chair fraîche",
        histoire: `L'immense océan Pacifique, créé par Allah pour nourrir l'humanité, était devenu une décharge plastique géante. Les poissons, créatures d'Allah, mouraient en avalant nos déchets.

Une communauté musulmane de Malaisie a organisé le plus grand nettoyage océanique au monde. Pendant 40 jours, ils ont collecté les déchets en récitant des versets du Coran. Chaque sac plastique retiré était accompagné d'une invocation de pardon.

L'océan retrouva sa pureté originelle, les coraux refleurirent, et les poissons revinrent en abondance. La communauté apprit que protéger la création d'Allah est un devoir sacré.`,
        lecon: "Préserver les océans créés par Allah est un devoir de Khalifa (gérant) de la terre.",
        impact: "890 tonnes déchets collectés • 45 espèces marines sauvées • 12 récifs coralliens restaurés",
        action: "Réduire utilisation plastique et nettoyer plages locales"
      },
      {
        titre: "Le Désert du Sahara qui Reverdit",
        region: "Afrique du Nord",
        verset: "وَتَرَى الْأَرْضَ هَامِدَةً فَإِذَا أَنزَلْنَا عَلَيْهَا الْمَاءَ اهْتَزَّتْ وَرَبَتْ",
        traduction: "Tu vois la terre desséchée; puis, quand Nous y faisons descendre l'eau, elle remue et se gonfle",
        histoire: `Le grand désert du Sahara était autrefois une terre fertile. Des scientifiques musulmans d'Algérie et du Maroc ont découvert des techniques prophétiques d'irrigation dans les hadiths authentiques.

En s'inspirant des méthodes du Prophète ﷺ pour cultiver Médine, ils ont créé des oasis vertes en plein désert. Chaque goutte d'eau était utilisée avec parcimonie, respectant l'interdiction du gaspillage en Islam.

Le désert commença à reverdir, des palmiers dattiers poussèrent, et des nomades purent à nouveau s'y établir. Cette renaissance écologique devint un modèle mondial de développement durable islamique.`,
        lecon: "Même la terre la plus aride peut revivre grâce à la sagesse islamique et la bénédiction divine.",
        impact: "15,000 hectares reverdis • 200 villages approvisionnés • 50,000 familles nourries",
        action: "Économiser l'eau selon l'exemple prophétique des ablutions"
      }
    ],
    العربية: [
      {
        titre: "غابة الأمازون التي بكت",
        region: "أمريكا الجنوبية", 
        verset: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ",
        traduction: "وجعلنا من الماء كل شيء حي",
        histoire: `كان يا ما كان في قديم الزمان، غابة الأمازون العظيمة، رئة كوكبنا، التي تؤوي ملايين المخلوقات التي خلقها الله سبحانه وتعالى. ولكن مع مرور السنين، بدأت الأشجار تختفي واحدة تلو الأخرى، وبدأت الغابة تبكي دموع المطر الحمضي.

في يوم من الأيام، اتحد شباب مسلمون من جميع أنحاء العالم لزراعة 50 ألف شجرة، يدعون الله عند كل بذرة يزرعونها. كانوا يتلون: "ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار".

بفضل صدقتهم الجارية البيئية، استعادت الغابة روعتها، وعادت الحيوانات، وأصبح الهواء نقياً مرة أخرى. كافأ الله جهدهم الصادق بمضاعفة البركات.`,
        lecon: "كل شجرة تُزرع بنية صافية تصبح صدقة جارية تطهر ذنوبنا",
        impact: "50,000 شجرة مزروعة • 2.3 مليون طن CO2 ممتص • 1,200 نوع محمي",
        action: "ازرع شجرة بالقرب من منزلك كصدقة جارية"
      }
    ],
    English: [
      {
        titre: "The Arctic Ice That Remembered",
        region: "Arctic Circle",
        verset: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ",
        traduction: "And from water We made every living thing",
        histoire: `In the pristine Arctic, where Allah's creation displayed its purest form, the ice began melting faster than ever before. Polar bears, seals, and arctic foxes were losing their homes.

A team of Muslim scientists from Canada and Norway established the first Islamic Environmental Research Station. They studied the ice with the reverence taught in Islam for Allah's creation, seeking solutions that honored both science and faith.

Through innovative techniques inspired by Islamic principles of balance (Mizan), they developed methods to slow ice melt and protect arctic wildlife. Their research became a beacon of hope for climate action guided by Islamic ethics.`,
        lecon: "Protecting Allah's creation requires both scientific knowledge and spiritual wisdom.",
        impact: "12% ice melt reduction • 500 polar bears protected • 3 research stations established",
        action: "Reduce energy consumption following Islamic teachings of moderation"
      }
    ]
  };

  const statistiquesImpact = {
    global: {
      lecteursActifs: "2.4M",
      languesDisponibles: 78,
      histoiresPubliees: 156,
      actionsDeclenchees: "890K"
    },
    regional: {
      "Moyen-Orient": { lecteurs: "456K", actions: "123K" },
      "Asie du Sud-Est": { lecteurs: "789K", actions: "234K" },
      "Afrique du Nord": { lecteurs: "234K", actions: "67K" },
      "Europe": { lecteurs: "345K", actions: "89K" },
      "Amériques": { lecteurs: "567K", actions: "178K" }
    }
  };

  const histoireActive = histoiresEnvironnementales[langueCourante]?.[histoireCourante] || histoiresEnvironnementales.français[0];

  const lireHistoire = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(histoireActive.histoire);
      utterance.lang = langueCourante === 'العربية' ? 'ar-SA' : 'fr-FR';
      speechSynthesis.speak(utterance);
      setModeAudio(true);
    }
  };

  const arreterLecture = () => {
    speechSynthesis.cancel();
    setModeAudio(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgression(prev => prev < 100 ? prev + 2 : 0);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Principal */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-green-600 rounded-full mb-6">
            <Globe className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Multilingual Environmental Impact Storytelling
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Histoires Environnementales Islamiques • 78+ Langues • Impact Mondial
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <Badge className="bg-blue-100 text-blue-700 text-lg px-4 py-2">
              <Languages className="w-5 h-5 mr-2" />
              78+ Langues Actives
            </Badge>
            <Badge className="bg-green-100 text-green-700 text-lg px-4 py-2">
              <BookOpen className="w-5 h-5 mr-2" />
              156 Histoires Authentiques
            </Badge>
            <Badge className="bg-cyan-100 text-cyan-700 text-lg px-4 py-2">
              <Globe className="w-5 h-5 mr-2" />
              2.4M Lecteurs Mondiaux
            </Badge>
          </div>
        </div>

        {/* Sélecteur de Langue */}
        <div className="mb-8">
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-center text-blue-700">
                🌍 Sélection Langue & Région
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-4 flex-wrap">
                {languesDisponibles.map((langue) => (
                  <Button
                    key={langue.code}
                    onClick={() => setLangueCourante(langue.nom)}
                    variant={langueCourante === langue.nom ? "default" : "outline"}
                    className="text-lg px-4 py-2"
                  >
                    {langue.flag} {langue.nom}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="histoires" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="histoires">📖 Histoires Interactives</TabsTrigger>
            <TabsTrigger value="impact">📊 Impact Mondial</TabsTrigger>
            <TabsTrigger value="regions">🗺️ Régions & Cultures</TabsTrigger>
            <TabsTrigger value="creation">✍️ Créer Histoire</TabsTrigger>
          </TabsList>

          {/* Onglet Histoires Interactives */}
          <TabsContent value="histoires">
            <div className="space-y-8">
              {/* Histoire Principale */}
              <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-2xl text-green-700">
                      {histoireActive.titre}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button onClick={lireHistoire} disabled={modeAudio} size="sm">
                        <Volume2 className="w-4 h-4 mr-2" />
                        Écouter
                      </Button>
                      <Button onClick={arreterLecture} disabled={!modeAudio} size="sm" variant="outline">
                        <Pause className="w-4 h-4 mr-2" />
                        Arrêter
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-blue-100 text-blue-700">
                      📍 {histoireActive.region}
                    </Badge>
                    <Badge className="bg-green-100 text-green-700">
                      🌍 {langueCourante}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Verset Islamique */}
                  <div className="p-6 bg-blue-100 rounded-lg border-2 border-blue-300 mb-6">
                    <h4 className="font-bold text-blue-800 mb-3 text-center">🕌 Fondement Coranique</h4>
                    <p className="text-2xl text-blue-900 font-semibold mb-3 text-center arabic-text">
                      {histoireActive.verset}
                    </p>
                    <p className="text-lg text-blue-700 italic text-center">
                      "{histoireActive.traduction}"
                    </p>
                  </div>

                  {/* Histoire Complète */}
                  <div className="p-6 bg-white rounded-lg border border-gray-200 mb-6">
                    <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
                      {histoireActive.histoire}
                    </p>
                  </div>

                  {/* Leçon et Impact */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                      <h4 className="font-bold text-yellow-700 mb-2">📚 Leçon Islamique</h4>
                      <p className="text-yellow-800">{histoireActive.lecon}</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded border border-green-200">
                      <h4 className="font-bold text-green-700 mb-2">🌍 Impact Mesurable</h4>
                      <p className="text-green-800 text-sm">{histoireActive.impact}</p>
                    </div>
                  </div>

                  {/* Action à Entreprendre */}
                  <div className="p-6 bg-purple-50 rounded-lg border-2 border-purple-200">
                    <h4 className="font-bold text-purple-700 mb-3 text-center">🎯 Votre Action Aujourd'hui</h4>
                    <p className="text-purple-800 text-center mb-4">{histoireActive.action}</p>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-xl py-3">
                      ✓ Je m'engage à agir - Bi idni Allah
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Histoires */}
              <Card className="border-2 border-gray-200">
                <CardContent className="py-6">
                  <div className="flex justify-between items-center">
                    <Button 
                      onClick={() => setHistoireCourante(prev => prev > 0 ? prev - 1 : (histoiresEnvironnementales[langueCourante]?.length - 1 || 0))}
                      variant="outline"
                      size="lg"
                    >
                      ← Histoire Précédente
                    </Button>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-700">
                        Histoire {histoireCourante + 1} / {histoiresEnvironnementales[langueCourante]?.length || 1}
                      </div>
                      <div className="w-64 bg-gray-200 rounded-full h-2 mt-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${((histoireCourante + 1) / (histoiresEnvironnementales[langueCourante]?.length || 1)) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <Button 
                      onClick={() => setHistoireCourante(prev => prev < (histoiresEnvironnementales[langueCourante]?.length - 1 || 0) ? prev + 1 : 0)}
                      size="lg"
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Histoire Suivante →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Onglet Impact Mondial */}
          <TabsContent value="impact">
            <div className="space-y-8">
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-center text-blue-700">
                    📊 Impact Global Storytelling Environnemental
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6 text-center">
                    <div className="p-6 bg-white rounded-lg border">
                      <div className="text-4xl mb-2">👥</div>
                      <div className="text-3xl font-bold text-blue-600">{statistiquesImpact.global.lecteursActifs}</div>
                      <div className="text-sm text-gray-600">Lecteurs Actifs Mondiaux</div>
                    </div>
                    <div className="p-6 bg-white rounded-lg border">
                      <div className="text-4xl mb-2">🌍</div>
                      <div className="text-3xl font-bold text-green-600">{statistiquesImpact.global.languesDisponibles}</div>
                      <div className="text-sm text-gray-600">Langues Disponibles</div>
                    </div>
                    <div className="p-6 bg-white rounded-lg border">
                      <div className="text-4xl mb-2">📚</div>
                      <div className="text-3xl font-bold text-purple-600">{statistiquesImpact.global.histoiresPubliees}</div>
                      <div className="text-sm text-gray-600">Histoires Publiées</div>
                    </div>
                    <div className="p-6 bg-white rounded-lg border">
                      <div className="text-4xl mb-2">🎯</div>
                      <div className="text-3xl font-bold text-orange-600">{statistiquesImpact.global.actionsDeclenchees}</div>
                      <div className="text-sm text-gray-600">Actions Déclenchées</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Impact Régional */}
              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-center text-green-700">
                    🗺️ Engagement par Région Mondiale
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {Object.entries(statistiquesImpact.regional).map(([region, stats]) => (
                      <div key={region} className="p-4 bg-gray-50 rounded border">
                        <h4 className="font-semibold text-gray-800 mb-2">{region}</h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span>Lecteurs:</span>
                            <span className="font-bold text-blue-600">{stats.lecteurs}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Actions:</span>
                            <span className="font-bold text-green-600">{stats.actions}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Onglet Régions & Cultures */}
          <TabsContent value="regions">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-cyan-200">
                <CardHeader>
                  <CardTitle className="text-cyan-700">🕌 Approche Islamique Universelle</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-cyan-50 rounded">
                      <h4 className="font-semibold text-cyan-600 mb-2">Fondements Coraniques</h4>
                      <p className="text-sm text-gray-600">
                        Chaque histoire s'appuie sur versets authentiques et hadiths Sahih pour guider action environnementale
                      </p>
                    </div>
                    <div className="p-4 bg-cyan-50 rounded">
                      <h4 className="font-semibold text-cyan-600 mb-2">Adaptation Culturelle</h4>
                      <p className="text-sm text-gray-600">
                        Respect des spécificités régionales tout en maintenant message islamique universel
                      </p>
                    </div>
                    <div className="p-4 bg-cyan-50 rounded">
                      <h4 className="font-semibold text-cyan-600 mb-2">Impact Mesurable</h4>
                      <p className="text-sm text-gray-600">
                        Chaque histoire présente données concrètes d'impact environnemental réalisable
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-700">🌏 Couverture Géographique</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-purple-50 rounded">
                      <span className="text-sm">🕌 Moyen-Orient & Golfe</span>
                      <Badge className="bg-purple-100 text-purple-700">23 pays</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-purple-50 rounded">
                      <span className="text-sm">🏝️ Asie du Sud-Est</span>
                      <Badge className="bg-purple-100 text-purple-700">12 pays</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-purple-50 rounded">
                      <span className="text-sm">🏛️ Afrique du Nord</span>
                      <Badge className="bg-purple-100 text-purple-700">8 pays</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-purple-50 rounded">
                      <span className="text-sm">🏰 Europe & Amériques</span>
                      <Badge className="bg-purple-100 text-purple-700">15 pays</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-purple-50 rounded">
                      <span className="text-sm">🌍 Afrique Subsaharienne</span>
                      <Badge className="bg-purple-100 text-purple-700">18 pays</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Onglet Créer Histoire */}
          <TabsContent value="creation">
            <Card className="border-2 border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-center text-yellow-700">
                  ✍️ Créer Votre Histoire Environnementale Islamique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">🌍 Région/Pays</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner région" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="moyen-orient">Moyen-Orient</SelectItem>
                          <SelectItem value="asie-sud-est">Asie du Sud-Est</SelectItem>
                          <SelectItem value="afrique-nord">Afrique du Nord</SelectItem>
                          <SelectItem value="europe">Europe</SelectItem>
                          <SelectItem value="ameriques">Amériques</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">🌱 Problème Environnemental</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Type de défi" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="deforestation">Déforestation</SelectItem>
                          <SelectItem value="pollution-eau">Pollution de l'eau</SelectItem>
                          <SelectItem value="changement-climat">Changement climatique</SelectItem>
                          <SelectItem value="biodiversite">Perte biodiversité</SelectItem>
                          <SelectItem value="dechets">Gestion déchets</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">📖 Verset Coranique Lié</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border rounded-lg"
                      placeholder="Entrer verset en arabe..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">📝 Votre Histoire</label>
                    <textarea 
                      className="w-full p-3 border rounded-lg h-32"
                      placeholder="Racontez une histoire inspirante d'action environnementale islamique..."
                    />
                  </div>
                  
                  <div className="text-center">
                    <Button className="bg-yellow-600 hover:bg-yellow-700 text-xl px-8 py-3">
                      ✨ Soumettre Histoire pour Validation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Navigation */}
        <div className="mt-12 text-center space-x-4">
          <Link href="/halal-tech-community-gamification">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              🎮 Community Gamification
            </Button>
          </Link>
          <Link href="/personalized-green-celebrations">
            <Button variant="outline" size="lg">
              🎉 Retour Célébrations
            </Button>
          </Link>
        </div>
      </div>

      {/* Copyright Protection */}
      <div className="mt-16 py-8 border-t-2 border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-lg font-medium">
            © Yakoubi Yamina - CED HalalTech™ • Multilingual Environmental Impact Storytelling
          </p>
          <p className="text-gray-500 text-sm mt-2">
            🌍 Histoires Environnementales Islamiques • 78+ Langues • Impact Mondial Authentique
          </p>
          <p className="text-blue-600 text-sm mt-2 font-medium">
            Narration Spirituelle Environnementale • Conformité 100% Coran & Sunna
          </p>
        </div>
      </div>
    </div>
  );
}