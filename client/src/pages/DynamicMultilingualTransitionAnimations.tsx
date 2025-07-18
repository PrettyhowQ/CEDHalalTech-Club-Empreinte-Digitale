import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Languages, ArrowRight, Zap, Shield, BookOpen, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function DynamicMultilingualTransitionAnimations() {
  const [currentLanguage, setCurrentLanguage] = useState('fr');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [completedTransitions, setCompletedTransitions] = useState(0);
  const [animationType, setAnimationType] = useState('fade');

  const languages = [
    { code: 'fr', name: 'Français', greeting: 'Assalamu alaykum', dir: 'ltr', color: 'from-blue-500 to-indigo-500' },
    { code: 'ar', name: 'العربية', greeting: 'السلام عليكم', dir: 'rtl', color: 'from-green-500 to-emerald-500' },
    { code: 'en', name: 'English', greeting: 'Peace be upon you', dir: 'ltr', color: 'from-purple-500 to-pink-500' },
    { code: 'tr', name: 'Türkçe', greeting: 'Selam aleyküm', dir: 'ltr', color: 'from-red-500 to-orange-500' },
    { code: 'ur', name: 'اردو', greeting: 'السلام علیکم', dir: 'rtl', color: 'from-yellow-500 to-amber-500' },
    { code: 'id', name: 'Bahasa', greeting: 'Assalamu\'alaikum', dir: 'ltr', color: 'from-teal-500 to-cyan-500' },
    { code: 'bn', name: 'বাংলা', greeting: 'আসসালামু আলাইকুম', dir: 'ltr', color: 'from-violet-500 to-purple-500' },
    { code: 'ms', name: 'Melayu', greeting: 'Assalamualaikum', dir: 'ltr', color: 'from-pink-500 to-rose-500' }
  ];

  const animations = [
    { type: 'fade', name: 'Fade Spirituel', description: 'Transition douce respectueuse' },
    { type: 'slide', name: 'Slide Culturel', description: 'Glissement directionnel RTL/LTR' },
    { type: 'flip', name: 'Flip Harmonieux', description: 'Retournement 3D élégant' },
    { type: 'zoom', name: 'Zoom Bienveillant', description: 'Agrandissement centré' },
    { type: 'wave', name: 'Vague Islamique', description: 'Ondulation géométrique' }
  ];

  const performTransition = (newLang: string, newAnimation: string) => {
    setIsTransitioning(true);
    setAnimationType(newAnimation);
    
    setTimeout(() => {
      setCurrentLanguage(newLang);
      setCompletedTransitions(prev => prev + 1);
      setIsTransitioning(false);
    }, 800);
  };

  const getCurrentLanguageData = () => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
            🌍 Dynamic Multilingual Transition Animations
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Animations de transition multilingues dynamiques respectant les directions RTL/LTR islamiques
          </p>
          <div className="text-sm text-gray-400 mt-2 font-arabic">
            الحركات الانتقالية المتعددة اللغات - Multilingual Islamic Transitions
          </div>
        </div>

        {/* Section Validation Fiqh Informatique */}
        <Card className="mb-8 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border-blue-600/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Shield className="h-6 w-6 text-blue-400" />
              <span>Validation Fiqh Informatique - Transitions Multilingues</span>
              <Badge className="bg-blue-600">100% HALAL</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-800/30 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">📖 Source 1 - Coran</h4>
                <p className="text-sm text-gray-300">"وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا"</p>
                <p className="text-xs text-gray-400 mt-1">Sourate Al-Hujurat v.13 - Peuples et tribus</p>
              </div>
              <div className="bg-slate-800/30 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-400 mb-2">🌙 Source 2 - Sunna</h4>
                <p className="text-sm text-gray-300">Respect diversité linguistique</p>
                <p className="text-xs text-gray-400 mt-1">Hadith - Communication universelle</p>
              </div>
              <div className="bg-slate-800/30 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-400 mb-2">👥 Source 3 - Ijmâ'</h4>
                <p className="text-sm text-gray-300">Consensus - Accessibilité linguistique</p>
                <p className="text-xs text-gray-400 mt-1">4 écoles - Communication inclusive</p>
              </div>
              <div className="bg-slate-800/30 p-4 rounded-lg">
                <h4 className="font-semibold text-cyan-400 mb-2">⚖️ Source 4 - Qiyâs</h4>
                <p className="text-sm text-gray-300">Analogie avec polyglottisme Prophète ﷺ</p>
                <p className="text-xs text-gray-400 mt-1">Communication adaptée → Interface adaptée</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="demo" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-slate-800">
            <TabsTrigger value="demo" className="data-[state=active]:bg-blue-600">
              🎬 Démo Live
            </TabsTrigger>
            <TabsTrigger value="animations" className="data-[state=active]:bg-blue-600">
              ✨ Animations
            </TabsTrigger>
            <TabsTrigger value="languages" className="data-[state=active]:bg-blue-600">
              🌍 Langues
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-blue-600">
              ⚙️ Configuration
            </TabsTrigger>
          </TabsList>

          <TabsContent value="demo">
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">🎯 Zone de Démonstration Interactive</CardTitle>
                  <CardDescription>Testez les transitions multilingues avec animations respectueuses</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Zone de démonstration principale */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Interface de transition */}
                    <div className="space-y-6">
                      <div 
                        className={`relative h-64 rounded-xl border-2 overflow-hidden transition-all duration-800 ${
                          isTransitioning ? 'scale-105 shadow-2xl' : 'scale-100'
                        }`}
                        style={{ 
                          background: `linear-gradient(135deg, ${getCurrentLanguageData().color})`,
                          direction: getCurrentLanguageData().dir 
                        }}
                      >
                        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-800 ${
                          isTransitioning 
                            ? animationType === 'fade' ? 'opacity-0' 
                              : animationType === 'slide' ? `transform ${getCurrentLanguageData().dir === 'rtl' ? 'translate-x-full' : '-translate-x-full'}` 
                              : animationType === 'flip' ? 'transform rotateY-180' 
                              : animationType === 'zoom' ? 'transform scale-0' 
                              : 'transform scale-110 rotate-12'
                            : 'opacity-100 transform translate-x-0 rotateY-0 scale-100 rotate-0'
                        }`}>
                          <div className="text-center">
                            <div className="text-6xl mb-4">🕌</div>
                            <h3 className="text-3xl font-bold text-white mb-2">
                              {getCurrentLanguageData().name}
                            </h3>
                            <p className="text-xl text-white/90 font-arabic">
                              {getCurrentLanguageData().greeting}
                            </p>
                          </div>
                        </div>
                        
                        {/* Overlay d'animation */}
                        {isTransitioning && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <div className="text-white text-center">
                              <Sparkles className="w-8 h-8 mx-auto animate-spin mb-2" />
                              <p className="text-sm">Transition {animationType}...</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Contrôles de langues */}
                      <div className="grid grid-cols-4 gap-2">
                        {languages.slice(0, 8).map((lang) => (
                          <Button
                            key={lang.code}
                            onClick={() => performTransition(lang.code, animationType)}
                            disabled={isTransitioning || currentLanguage === lang.code}
                            className={`text-xs p-2 h-auto ${
                              currentLanguage === lang.code 
                                ? 'bg-blue-600 hover:bg-blue-700' 
                                : 'bg-slate-700 hover:bg-slate-600'
                            }`}
                          >
                            <div className="text-center">
                              <div className="text-sm font-bold">{lang.name}</div>
                              <div className="text-xs opacity-75">{lang.code.toUpperCase()}</div>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Contrôles d'animation */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-white mb-4">🎭 Types d'Animation</h4>
                        <div className="space-y-2">
                          {animations.map((anim) => (
                            <div 
                              key={anim.type}
                              className={`p-3 rounded-lg cursor-pointer transition-all ${
                                animationType === anim.type 
                                  ? 'bg-blue-600/30 border border-blue-500' 
                                  : 'bg-slate-700/30 hover:bg-slate-600/30'
                              }`}
                              onClick={() => setAnimationType(anim.type)}
                            >
                              <div className="flex items-center space-x-3">
                                <Zap className="w-5 h-5 text-blue-400" />
                                <div>
                                  <h5 className="font-medium text-white">{anim.name}</h5>
                                  <p className="text-sm text-gray-400">{anim.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-slate-700/30 p-4 rounded-lg">
                        <h4 className="font-semibold text-white mb-3">📊 Statistiques</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-300">Langue actuelle:</span>
                            <span className="text-blue-400">{getCurrentLanguageData().name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Direction:</span>
                            <span className="text-green-400">{getCurrentLanguageData().dir.toUpperCase()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Animation:</span>
                            <span className="text-purple-400">{animations.find(a => a.type === animationType)?.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Transitions:</span>
                            <span className="text-yellow-400">{completedTransitions}</span>
                          </div>
                        </div>
                      </div>

                      <Button 
                        onClick={() => performTransition(
                          languages[Math.floor(Math.random() * languages.length)].code,
                          animations[Math.floor(Math.random() * animations.length)].type
                        )}
                        disabled={isTransitioning}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Transition Aléatoire Islamique
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="animations">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {animations.map((anim) => (
                  <Card key={anim.type} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center space-x-2">
                        <Zap className="h-5 w-5 text-blue-400" />
                        <span>{anim.name}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm mb-4">{anim.description}</p>
                      <div className="space-y-2 text-xs text-gray-400">
                        <div className="flex justify-between">
                          <span>Durée:</span>
                          <span>800ms</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Timing:</span>
                          <span>ease-in-out</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Support RTL:</span>
                          <span className="text-green-400">✓</span>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        onClick={() => performTransition(currentLanguage, anim.type)}
                        disabled={isTransitioning}
                        className="w-full mt-3 bg-blue-600 hover:bg-blue-700"
                      >
                        Tester
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="languages">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {languages.map((lang) => (
                  <Card key={lang.code} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <div 
                          className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r ${lang.color} flex items-center justify-center`}
                        >
                          <Globe className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-bold text-white">{lang.name}</h3>
                        <p className="text-sm text-gray-400 mb-2">{lang.code.toUpperCase()}</p>
                        <p className="text-sm text-gray-300 font-arabic">{lang.greeting}</p>
                        <Badge className="mt-2" variant={lang.dir === 'rtl' ? 'default' : 'secondary'}>
                          {lang.dir.toUpperCase()}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">⚙️ Configuration Animations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Durée (ms)</label>
                        <input type="range" min="200" max="2000" defaultValue="800" className="w-full" />
                        <div className="text-xs text-gray-400 mt-1">200ms - 2000ms</div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Timing Function</label>
                        <select className="w-full bg-slate-700 text-white p-2 rounded">
                          <option>ease-in-out</option>
                          <option>linear</option>
                          <option>ease-in</option>
                          <option>ease-out</option>
                          <option>cubic-bezier(0.25, 0.46, 0.45, 0.94)</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Support RTL auto</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Feedback haptic</span>
                        <input type="checkbox" className="rounded" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">🌍 Préférences Culturelles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Langue par défaut</label>
                        <select className="w-full bg-slate-700 text-white p-2 rounded">
                          <option value="fr">Français</option>
                          <option value="ar">العربية</option>
                          <option value="en">English</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Salutations islamiques</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Direction automatique</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Animations respectueuses</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8 p-6 bg-slate-800/30 rounded-lg border border-slate-600">
          <p className="text-gray-400 mb-2 font-arabic">
            "وَمِنْ آيَاتِهِ خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافُ أَلْسِنَتِكُمْ وَأَلْوَانِكُمْ"
          </p>
          <p className="text-gray-300">
            "Parmi Ses signes: la création des cieux et de la terre et la diversité de vos langues et couleurs"
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Validation Fiqh informatique selon 4 sources - Transitions multilingues MANDUB
          </p>
        </div>
      </div>
    </div>
  );
}