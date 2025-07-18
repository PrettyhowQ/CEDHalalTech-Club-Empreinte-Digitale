import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HelpCircle, BookOpen, Lightbulb, MessageCircle, Shield, Star, Info } from "lucide-react";
import { useState } from "react";

export default function ContextualCulturalLearningPopups() {
  const [activePopup, setActivePopup] = useState(null);
  const [learnedConcepts, setLearnedConcepts] = useState(0);
  const [currentTopic, setCurrentTopic] = useState('banking');

  const showPopup = (topic: string, concept: string) => {
    setActivePopup({ topic, concept });
    setLearnedConcepts(prev => prev + 1);
  };

  const islamicConcepts = {
    banking: [
      {
        term: "Riba",
        definition: "Intérêt usuraire strictement interdit en Islam",
        source: "Coran 2:275",
        arabic: "الربا",
        example: "CED Bank fonctionne 0% Riba"
      },
      {
        term: "Murabaha",
        definition: "Vente avec marge bénéficiaire transparente",
        source: "Fiqh Maliki",
        arabic: "المرابحة",
        example: "Financement immobilier halal"
      },
      {
        term: "Ijara",
        definition: "Contrat de location-vente islamique",
        source: "Fiqh Hanafi",
        arabic: "الإجارة",
        example: "Leasing automobile conforme"
      }
    ],
    insurance: [
      {
        term: "Takaful",
        definition: "Assurance islamique basée sur la solidarité",
        source: "Principe Ta'awun",
        arabic: "التكافل",
        example: "Al-Aman CED Takaful"
      },
      {
        term: "Gharar",
        definition: "Incertitude excessive à éviter",
        source: "Hadith Sahih Muslim",
        arabic: "الغرر",
        example: "Transparence totale contrats"
      }
    ],
    education: [
      {
        term: "Ilm",
        definition: "Connaissance sacrée en Islam",
        source: "Hadith - Recherche du savoir",
        arabic: "العلم",
        example: "Institut CED Academy"
      },
      {
        term: "Adab",
        definition: "Étiquette et bienséance islamique",
        source: "Tradition prophétique",
        arabic: "الأدب",
        example: "Respect dans l'apprentissage"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
            💡 Contextual Cultural Learning Popups
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Popups d'apprentissage culturel contextuel intégrant sagesse islamique authentique
          </p>
          <div className="text-sm text-gray-400 mt-2 font-arabic">
            النوافذ التعليمية الثقافية الإسلامية - Islamic Cultural Learning Windows
          </div>
        </div>

        {/* Section Validation Fiqh Informatique */}
        <Card className="mb-8 bg-gradient-to-r from-orange-900/40 to-amber-900/40 border-orange-600/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Shield className="h-6 w-6 text-orange-400" />
              <span>Validation Fiqh Informatique - Apprentissage Culturel</span>
              <Badge className="bg-orange-600">100% HALAL</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-800/30 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-400 mb-2">📖 Source 1 - Coran</h4>
                <p className="text-sm text-gray-300">"وَقُل رَّبِّ زِدْنِي عِلْمًا"</p>
                <p className="text-xs text-gray-400 mt-1">Sourate Ta-Ha v.114 - Augmente-moi en science</p>
              </div>
              <div className="bg-slate-800/30 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-400 mb-2">🌙 Source 2 - Sunna</h4>
                <p className="text-sm text-gray-300">طلب العلم فريضة على كل مسلم</p>
                <p className="text-xs text-gray-400 mt-1">Recherche du savoir obligation musulmane</p>
              </div>
              <div className="bg-slate-800/30 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-400 mb-2">👥 Source 3 - Ijmâ'</h4>
                <p className="text-sm text-gray-300">Consensus - Éducation contextuelle permise</p>
                <p className="text-xs text-gray-400 mt-1">4 écoles - Apprentissage adaptatif halal</p>
              </div>
              <div className="bg-slate-800/30 p-4 rounded-lg">
                <h4 className="font-semibold text-red-400 mb-2">⚖️ Source 4 - Qiyâs</h4>
                <p className="text-sm text-gray-300">Analogie avec enseignement traditionnel</p>
                <p className="text-xs text-gray-400 mt-1">Maître → Élève = Interface → Utilisateur</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="demo" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-slate-800">
            <TabsTrigger value="demo" className="data-[state=active]:bg-orange-600">
              🎯 Démo Live
            </TabsTrigger>
            <TabsTrigger value="concepts" className="data-[state=active]:bg-orange-600">
              📚 Concepts
            </TabsTrigger>
            <TabsTrigger value="customization" className="data-[state=active]:bg-orange-600">
              ⚙️ Personnalisation
            </TabsTrigger>
            <TabsTrigger value="integration" className="data-[state=active]:bg-orange-600">
              🔧 Intégration
            </TabsTrigger>
          </TabsList>

          <TabsContent value="demo">
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">🎯 Interface d'Apprentissage Contextuel</CardTitle>
                  <CardDescription>Cliquez sur les éléments pour découvrir les concepts islamiques</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Section Banking */}
                    <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-6 rounded-xl border border-green-500/30">
                      <h3 className="font-bold text-white mb-4">🏦 CED Banking Islamique</h3>
                      <div className="space-y-3">
                        <div 
                          className="flex items-center space-x-2 p-2 rounded cursor-pointer hover:bg-green-600/20 transition-all"
                          onClick={() => showPopup('banking', 'riba')}
                        >
                          <HelpCircle className="h-4 w-4 text-green-400" />
                          <span className="text-gray-300">0% Riba garanti</span>
                        </div>
                        <div 
                          className="flex items-center space-x-2 p-2 rounded cursor-pointer hover:bg-green-600/20 transition-all"
                          onClick={() => showPopup('banking', 'murabaha')}
                        >
                          <Info className="h-4 w-4 text-blue-400" />
                          <span className="text-gray-300">Financement Murabaha</span>
                        </div>
                        <div 
                          className="flex items-center space-x-2 p-2 rounded cursor-pointer hover:bg-green-600/20 transition-all"
                          onClick={() => showPopup('banking', 'ijara')}
                        >
                          <Lightbulb className="h-4 w-4 text-yellow-400" />
                          <span className="text-gray-300">Contrats Ijara</span>
                        </div>
                      </div>
                    </div>

                    {/* Section Insurance */}
                    <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-500/30">
                      <h3 className="font-bold text-white mb-4">🛡️ Al-Aman Takaful</h3>
                      <div className="space-y-3">
                        <div 
                          className="flex items-center space-x-2 p-2 rounded cursor-pointer hover:bg-purple-600/20 transition-all"
                          onClick={() => showPopup('insurance', 'takaful')}
                        >
                          <HelpCircle className="h-4 w-4 text-purple-400" />
                          <span className="text-gray-300">Principe Takaful</span>
                        </div>
                        <div 
                          className="flex items-center space-x-2 p-2 rounded cursor-pointer hover:bg-purple-600/20 transition-all"
                          onClick={() => showPopup('insurance', 'gharar')}
                        >
                          <Info className="h-4 w-4 text-pink-400" />
                          <span className="text-gray-300">Éviter Gharar</span>
                        </div>
                      </div>
                    </div>

                    {/* Section Education */}
                    <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-6 rounded-xl border border-blue-500/30">
                      <h3 className="font-bold text-white mb-4">🎓 Institut CED Academy</h3>
                      <div className="space-y-3">
                        <div 
                          className="flex items-center space-x-2 p-2 rounded cursor-pointer hover:bg-blue-600/20 transition-all"
                          onClick={() => showPopup('education', 'ilm')}
                        >
                          <BookOpen className="h-4 w-4 text-blue-400" />
                          <span className="text-gray-300">Recherche Ilm</span>
                        </div>
                        <div 
                          className="flex items-center space-x-2 p-2 rounded cursor-pointer hover:bg-blue-600/20 transition-all"
                          onClick={() => showPopup('education', 'adab')}
                        >
                          <Star className="h-4 w-4 text-cyan-400" />
                          <span className="text-gray-300">Adab Islamique</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Popup Contextuel */}
                  {activePopup && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setActivePopup(null)}>
                      <div className="bg-slate-800 p-6 rounded-xl border border-orange-500 max-w-md mx-4" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-bold text-white text-lg">📖 Apprentissage Islamique</h3>
                          <Button 
                            size="sm" 
                            onClick={() => setActivePopup(null)}
                            className="bg-red-600 hover:bg-red-700"
                          >
                            ✕
                          </Button>
                        </div>
                        
                        {islamicConcepts[activePopup.topic]?.map(concept => (
                          <div key={concept.term} className="space-y-3">
                            <div className="text-center">
                              <h4 className="font-bold text-orange-400 text-xl">{concept.term}</h4>
                              <p className="text-gray-400 font-arabic text-lg">{concept.arabic}</p>
                            </div>
                            
                            <div className="bg-slate-700/50 p-4 rounded-lg">
                              <h5 className="font-semibold text-white mb-2">Définition:</h5>
                              <p className="text-gray-300 text-sm">{concept.definition}</p>
                            </div>
                            
                            <div className="bg-green-600/20 p-3 rounded-lg">
                              <h5 className="font-semibold text-green-400 mb-1">Source:</h5>
                              <p className="text-gray-300 text-sm">{concept.source}</p>
                            </div>
                            
                            <div className="bg-blue-600/20 p-3 rounded-lg">
                              <h5 className="font-semibold text-blue-400 mb-1">Exemple CED:</h5>
                              <p className="text-gray-300 text-sm">{concept.example}</p>
                            </div>
                          </div>
                        ))}
                        
                        <div className="text-center mt-4">
                          <p className="text-sm text-gray-400 font-arabic">
                            اللهم علمنا ما ينفعنا وانفعنا بما علمتنا
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            "Ô Allah, enseigne-nous ce qui nous profite"
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-white">Apprentissage Actif</h4>
                        <p className="text-sm text-gray-400">Concepts découverts: {learnedConcepts}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-orange-400 font-arabic">بسم الله نبدأ</p>
                        <p className="text-xs text-gray-400">Au nom d'Allah nous commençons</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="concepts">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-600/50">
                  <CardHeader>
                    <CardTitle className="text-white">🏦 Banking Islamique</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="p-3 bg-slate-700/30 rounded">
                        <h4 className="font-semibold text-green-400">Riba (الربا)</h4>
                        <p className="text-gray-300">Intérêt usuraire interdit</p>
                      </div>
                      <div className="p-3 bg-slate-700/30 rounded">
                        <h4 className="font-semibold text-green-400">Murabaha (المرابحة)</h4>
                        <p className="text-gray-300">Vente avec marge transparente</p>
                      </div>
                      <div className="p-3 bg-slate-700/30 rounded">
                        <h4 className="font-semibold text-green-400">Ijara (الإجارة)</h4>
                        <p className="text-gray-300">Location-vente islamique</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-600/50">
                  <CardHeader>
                    <CardTitle className="text-white">🛡️ Assurance Takaful</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="p-3 bg-slate-700/30 rounded">
                        <h4 className="font-semibold text-purple-400">Takaful (التكافل)</h4>
                        <p className="text-gray-300">Solidarité mutuelle</p>
                      </div>
                      <div className="p-3 bg-slate-700/30 rounded">
                        <h4 className="font-semibold text-purple-400">Ta'awun (التعاون)</h4>
                        <p className="text-gray-300">Entraide communautaire</p>
                      </div>
                      <div className="p-3 bg-slate-700/30 rounded">
                        <h4 className="font-semibold text-purple-400">Gharar (الغرر)</h4>
                        <p className="text-gray-300">Incertitude excessive</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border-blue-600/50">
                  <CardHeader>
                    <CardTitle className="text-white">🎓 Éducation Islamique</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="p-3 bg-slate-700/30 rounded">
                        <h4 className="font-semibold text-blue-400">Ilm (العلم)</h4>
                        <p className="text-gray-300">Connaissance sacrée</p>
                      </div>
                      <div className="p-3 bg-slate-700/30 rounded">
                        <h4 className="font-semibold text-blue-400">Adab (الأدب)</h4>
                        <p className="text-gray-300">Étiquette islamique</p>
                      </div>
                      <div className="p-3 bg-slate-700/30 rounded">
                        <h4 className="font-semibold text-blue-400">Tarbiyah (التربية)</h4>
                        <p className="text-gray-300">Éducation spirituelle</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="customization">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">🎨 Styles de Popup</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Position</label>
                        <select className="w-full bg-slate-700 text-white p-2 rounded">
                          <option>Centre écran</option>
                          <option>Coin supérieur droit</option>
                          <option>Côté droit</option>
                          <option>Bas écran</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Animation</label>
                        <select className="w-full bg-slate-700 text-white p-2 rounded">
                          <option>Fade spirituel</option>
                          <option>Slide respectueux</option>
                          <option>Zoom bienveillant</option>
                          <option>Aucune</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Durée affichage</label>
                        <input type="range" min="2" max="15" defaultValue="5" className="w-full" />
                        <div className="text-xs text-gray-400 mt-1">2-15 secondes</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">📚 Contenu Islamique</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Versets coraniques</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Hadiths authentiques</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Texte arabe original</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Exemples pratiques CED</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Invocations de clôture</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="integration">
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">🔧 Intégration Technique</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-400 mb-2">React Hook Custom</h4>
                      <pre className="text-xs text-gray-300 bg-slate-800 p-3 rounded overflow-x-auto">
{`const useIslamicLearningPopup = (concept: string) => {
  const [showPopup, setShowPopup] = useState(false);
  
  const displayLearning = (content: IslamicConcept) => {
    setShowPopup(true);
    // Logique affichage popup contextuel
  };
  
  return { showPopup, displayLearning };
};`}
                      </pre>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-400 mb-2">Déclencheurs Contextuels</h4>
                      <pre className="text-xs text-gray-300 bg-slate-800 p-3 rounded overflow-x-auto">
{`// Auto-trigger sur éléments spécifiques
<button 
  onMouseEnter={() => showLearning('riba')}
  data-islamic-concept="banking"
>
  0% Riba garanti
</button>`}
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8 p-6 bg-slate-800/30 rounded-lg border border-slate-600">
          <p className="text-gray-400 mb-2 font-arabic">
            "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي"
          </p>
          <p className="text-gray-300">
            "Mon Seigneur, ouvre-moi ma poitrine et facilite-moi ma tâche" - Apprentissage contextuel authentique
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Validation Fiqh informatique selon 4 sources - Éducation culturelle MANDUB
          </p>
        </div>
      </div>
    </div>
  );
}