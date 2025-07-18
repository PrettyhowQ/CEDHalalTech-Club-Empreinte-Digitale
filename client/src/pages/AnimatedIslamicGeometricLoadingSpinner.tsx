import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader, Star, Circle, Square, Triangle, Shield, BookOpen, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function AnimatedIslamicGeometricLoadingSpinner() {
  const [currentPattern, setCurrentPattern] = useState('octagon');
  const [isLoading, setIsLoading] = useState(true);
  const [completedCycles, setCompletedCycles] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCompletedCycles(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const startSpinner = (pattern: string) => {
    setCurrentPattern(pattern);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
            ⭐ Animated Islamic Geometric Loading Spinner
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Spinners de chargement inspirés de l'art géométrique islamique traditionnel authentique
          </p>
          <div className="text-sm text-gray-400 mt-2 font-arabic">
            الهندسة الإسلامية المتحركة - Islamic Geometric Animation
          </div>
        </div>

        {/* Section Validation Fiqh Informatique */}
        <Card className="mb-8 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border-cyan-600/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Shield className="h-6 w-6 text-cyan-400" />
              <span>Validation Fiqh Informatique - Art Géométrique</span>
              <Badge className="bg-cyan-600">100% HALAL</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-800/30 p-4 rounded-lg">
                <h4 className="font-semibold text-cyan-400 mb-2">📖 Source 1 - Coran</h4>
                <p className="text-sm text-gray-300">"وَخَلَقَ كُلَّ شَيْءٍ فَقَدَّرَهُ تَقْدِيرًا"</p>
                <p className="text-xs text-gray-400 mt-1">Sourate Al-Furqan v.2 - Création avec mesure</p>
              </div>
              <div className="bg-slate-800/30 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">🌙 Source 2 - Sunna</h4>
                <p className="text-sm text-gray-300">Art géométrique encouragé par la tradition</p>
                <p className="text-xs text-gray-400 mt-1">Hadith - Beauté et harmonie dans la création</p>
              </div>
              <div className="bg-slate-800/30 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-400 mb-2">👥 Source 3 - Ijmâ'</h4>
                <p className="text-sm text-gray-300">Consensus scholars - Art abstrait permis</p>
                <p className="text-xs text-gray-400 mt-1">4 écoles juridiques - Géométrie authentique</p>
              </div>
              <div className="bg-slate-800/30 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-400 mb-2">⚖️ Source 4 - Qiyâs</h4>
                <p className="text-sm text-gray-300">Analogie avec art mosquées traditionnelles</p>
                <p className="text-xs text-gray-400 mt-1">Patterns Alhambra → Interface numérique</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="spinners" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-slate-800">
            <TabsTrigger value="spinners" className="data-[state=active]:bg-cyan-600">
              ⭐ Spinners
            </TabsTrigger>
            <TabsTrigger value="patterns" className="data-[state=active]:bg-cyan-600">
              🔷 Patterns
            </TabsTrigger>
            <TabsTrigger value="customization" className="data-[state=active]:bg-cyan-600">
              🎨 Customisation
            </TabsTrigger>
            <TabsTrigger value="code" className="data-[state=active]:bg-cyan-600">
              💻 Code
            </TabsTrigger>
          </TabsList>

          <TabsContent value="spinners">
            <div className="space-y-6">
              {/* Section Démo Live */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">🎯 Démo Interactive Spinners Islamiques</CardTitle>
                  <CardDescription>Cliquez sur les patterns pour voir les animations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Spinner 1 - Octogone Classique */}
                    <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 p-6 rounded-xl border border-cyan-500/30 text-center">
                      <div className="w-24 h-24 mx-auto mb-4 relative">
                        <div className={`w-full h-full border-4 border-cyan-400 rounded-full animate-spin ${currentPattern === 'octagon' && isLoading ? 'opacity-100' : 'opacity-50'}`}>
                          <div className="absolute inset-2 border-2 border-blue-400 rounded-full animate-pulse"></div>
                          <div className="absolute inset-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce"></div>
                        </div>
                      </div>
                      <h3 className="font-bold text-white mb-2">Octogone Classique</h3>
                      <p className="text-sm text-gray-300 mb-3">Pattern traditionnel mosquées</p>
                      <Button 
                        size="sm" 
                        onClick={() => startSpinner('octagon')}
                        className="bg-cyan-600 hover:bg-cyan-700 w-full"
                      >
                        Tester Pattern
                      </Button>
                    </div>

                    {/* Spinner 2 - Étoile 8 Branches */}
                    <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-6 rounded-xl border border-green-500/30 text-center">
                      <div className="w-24 h-24 mx-auto mb-4 relative">
                        <div className={`w-full h-full ${currentPattern === 'star8' && isLoading ? 'animate-spin' : ''}`}>
                          <Star className={`w-full h-full text-green-400 ${currentPattern === 'star8' && isLoading ? 'animate-pulse' : 'opacity-50'}`} />
                          <div className="absolute inset-2">
                            <Star className={`w-full h-full text-emerald-400 ${currentPattern === 'star8' && isLoading ? 'animate-ping' : 'opacity-30'}`} />
                          </div>
                        </div>
                      </div>
                      <h3 className="font-bold text-white mb-2">Étoile 8 Branches</h3>
                      <p className="text-sm text-gray-300 mb-3">Symbole Rub el Hizb authentique</p>
                      <Button 
                        size="sm" 
                        onClick={() => startSpinner('star8')}
                        className="bg-green-600 hover:bg-green-700 w-full"
                      >
                        Tester Pattern
                      </Button>
                    </div>

                    {/* Spinner 3 - Motif Tessellation */}
                    <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-500/30 text-center">
                      <div className="w-24 h-24 mx-auto mb-4 relative">
                        <div className={`w-full h-full grid grid-cols-3 gap-1 ${currentPattern === 'tessellation' && isLoading ? 'animate-pulse' : ''}`}>
                          {[...Array(9)].map((_, i) => (
                            <div 
                              key={i}
                              className={`bg-gradient-to-r from-purple-400 to-pink-400 rounded-sm ${
                                currentPattern === 'tessellation' && isLoading 
                                  ? 'animate-bounce opacity-100' 
                                  : 'opacity-50'
                              }`}
                              style={{ animationDelay: `${i * 100}ms` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                      <h3 className="font-bold text-white mb-2">Tessellation Cordoba</h3>
                      <p className="text-sm text-gray-300 mb-3">Motif Andalousie historique</p>
                      <Button 
                        size="sm" 
                        onClick={() => startSpinner('tessellation')}
                        className="bg-purple-600 hover:bg-purple-700 w-full"
                      >
                        Tester Pattern
                      </Button>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-white">Pattern Actuel: {currentPattern}</h4>
                        <p className="text-sm text-gray-400">Cycles complétés: {completedCycles}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-cyan-400 font-arabic">سُبْحَانَ اللَّهِ وَبِحَمْدِهِ</p>
                        <p className="text-xs text-gray-400">Gloire à Allah dans Sa création</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-cyan-600/50">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center space-x-2">
                      <Circle className="h-6 w-6 text-cyan-400" />
                      <span>Spinners Circulaires</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-gray-300">
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-600/20 transition-all">
                        <div className="w-8 h-8 border-2 border-cyan-400 rounded-full animate-spin border-t-transparent"></div>
                        <span>Cercle Classique Halal</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-600/20 transition-all">
                        <div className="w-8 h-8 border-2 border-blue-400 rounded-full animate-pulse"></div>
                        <span>Pulsation Spirituelle</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-600/20 transition-all">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce"></div>
                        <span>Rebond Harmonieux</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-600/50">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center space-x-2">
                      <Square className="h-6 w-6 text-green-400" />
                      <span>Patterns Géométriques</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-gray-300">
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-600/20 transition-all">
                        <div className="w-8 h-8 bg-green-400 animate-spin transform rotate-45"></div>
                        <span>Carré Rotatif Islamique</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-600/20 transition-all">
                        <Triangle className="w-8 h-8 text-emerald-400 animate-pulse" />
                        <span>Triangle Sacré</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-600/20 transition-all">
                        <Star className="w-8 h-8 text-yellow-400 animate-spin" />
                        <span>Étoile Traditionnelle</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="patterns">
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">🔷 Bibliothèque Patterns Islamiques</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-spin"></div>
                      <h4 className="font-semibold text-white">Cercle Al-Andalus</h4>
                      <p className="text-xs text-gray-400">Inspiration Cordoue</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 relative">
                        <div className="absolute inset-0 bg-green-400 transform rotate-45 animate-spin"></div>
                        <div className="absolute inset-2 bg-emerald-400 transform -rotate-45 animate-pulse"></div>
                      </div>
                      <h4 className="font-semibold text-white">Carré Fatimide</h4>
                      <p className="text-xs text-gray-400">Époque d'or islamique</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3">
                        <Star className="w-full h-full text-yellow-400 animate-spin" />
                      </div>
                      <h4 className="font-semibold text-white">Étoile Abbasside</h4>
                      <p className="text-xs text-gray-400">Baghdad classique</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 grid grid-cols-2 gap-1">
                        <div className="bg-purple-400 animate-pulse"></div>
                        <div className="bg-pink-400 animate-bounce"></div>
                        <div className="bg-pink-400 animate-bounce"></div>
                        <div className="bg-purple-400 animate-pulse"></div>
                      </div>
                      <h4 className="font-semibold text-white">Mosaïque Ottoman</h4>
                      <p className="text-xs text-gray-400">Istanbul traditionnel</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="customization">
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">🎨 Personnalisation Culturelle</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-4">Couleurs Authentiques</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                          <span className="text-gray-300">Vert Islamique Classique</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-300">Bleu Andalousie</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                          <span className="text-gray-300">Or Masjid</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-300">Pourpre Ottoman</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-4">Vitesses Animation</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Loader className="w-6 h-6 text-gray-400 animate-spin" style={{animationDuration: '3s'}} />
                          <span className="text-gray-300">Contemplation (3s)</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Loader className="w-6 h-6 text-gray-400 animate-spin" style={{animationDuration: '1s'}} />
                          <span className="text-gray-300">Standard (1s)</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Loader className="w-6 h-6 text-gray-400 animate-spin" style={{animationDuration: '0.5s'}} />
                          <span className="text-gray-300">Rapide (0.5s)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="code">
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">💻 Implémentation Technique</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-cyan-400 mb-2">CSS Keyframes Islamiques</h4>
                      <pre className="text-xs text-gray-300 bg-slate-800 p-3 rounded overflow-x-auto">
{`@keyframes islamic-spin {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
  100% { transform: rotate(360deg) scale(1); }
}

.islamic-spinner {
  animation: islamic-spin 2s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
  background: conic-gradient(from 0deg, #10b981, #3b82f6, #10b981);
}`}
                      </pre>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-400 mb-2">React Component</h4>
                      <pre className="text-xs text-gray-300 bg-slate-800 p-3 rounded overflow-x-auto">
{`const IslamicSpinner = ({ pattern = 'octagon', size = 'md' }) => {
  const sizes = { sm: 'w-8 h-8', md: 'w-12 h-12', lg: 'w-16 h-16' };
  
  return (
    <div className={\`islamic-spinner \${sizes[size]} rounded-full border-4 border-green-500\`}>
      <div className="islamic-inner-pattern animate-pulse"></div>
    </div>
  );
};`}
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
            "وَفِي كُلِّ شَيْءٍ لَهُ آيَةٌ تَدُلُّ عَلَى أَنَّهُ وَاحِدٌ"
          </p>
          <p className="text-gray-300">
            Spinners géométriques inspirés de l'art islamique traditionnel authentique
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Validation Fiqh informatique selon 4 sources - Art abstrait géométrique MANDUB
          </p>
        </div>
      </div>
    </div>
  );
}