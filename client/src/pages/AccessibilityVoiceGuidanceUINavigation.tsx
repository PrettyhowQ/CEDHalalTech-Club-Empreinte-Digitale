import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Volume2, VolumeX, Mic, MicOff, Globe, Shield, BookOpen, Headphones } from "lucide-react";
import { useState, useEffect } from "react";

export default function AccessibilityVoiceGuidanceUINavigation() {
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('fr');
  const [voiceSpeed, setVoiceSpeed] = useState(1.0);
  const [isListening, setIsListening] = useState(false);
  const [voiceCommands, setVoiceCommands] = useState(0);

  const speak = (text: string, lang: string = 'fr') => {
    if (!isVoiceEnabled) return;
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'fr' ? 'fr-FR' : lang === 'ar' ? 'ar-SA' : 'en-US';
    utterance.rate = voiceSpeed;
    speechSynthesis.speak(utterance);
  };

  const handleVoiceCommand = (command: string) => {
    setVoiceCommands(prev => prev + 1);
    speak(`Commande exécutée: ${command}`, currentLanguage);
  };

  const languages = [
    { code: 'fr', name: 'Français', voice: 'Guidance française respectueuse' },
    { code: 'ar', name: 'العربية', voice: 'الإرشاد الصوتي المحترم' },
    { code: 'en', name: 'English', voice: 'Respectful English guidance' },
    { code: 'tr', name: 'Türkçe', voice: 'Saygılı Türkçe rehberlik' },
    { code: 'ur', name: 'اردو', voice: 'احترام سے اردو رہنمائی' },
    { code: 'id', name: 'Bahasa', voice: 'Panduan Bahasa yang hormat' },
    { code: 'bn', name: 'বাংলা', voice: 'সম্মানজনক বাংলা গাইড' },
    { code: 'ms', name: 'Melayu', voice: 'Panduan Melayu yang sopan' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
            🔊 Accessibility Voice Guidance for UI Navigation
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Guidance vocale d'accessibilité respectant les sensibilités culturelles musulmanes
          </p>
          <div className="text-sm text-gray-400 mt-2 font-arabic">
            الإرشاد الصوتي المتاح ثقافياً - Culturally Accessible Voice Guidance
          </div>
        </div>

        {/* Section Validation Fiqh Informatique */}
        <Card className="mb-8 bg-gradient-to-r from-purple-900/40 to-pink-900/40 border-purple-600/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Shield className="h-6 w-6 text-purple-400" />
              <span>Validation Fiqh Informatique - Guidance Vocale</span>
              <Badge className="bg-purple-600">100% HALAL</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-800/30 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-400 mb-2">📖 Source 1 - Coran</h4>
                <p className="text-sm text-gray-300">"وَمَا جَعَلَ عَلَيْكُمْ فِي الدِّينِ مِنْ حَرَجٍ"</p>
                <p className="text-xs text-gray-400 mt-1">Sourate Al-Hajj v.78 - Facilitation religieuse</p>
              </div>
              <div className="bg-slate-800/30 p-4 rounded-lg">
                <h4 className="font-semibold text-pink-400 mb-2">🌙 Source 2 - Sunna</h4>
                <p className="text-sm text-gray-300">Aide aux personnes avec besoins spéciaux</p>
                <p className="text-xs text-gray-400 mt-1">Hadith - Faciliter l'accès au savoir</p>
              </div>
              <div className="bg-slate-800/30 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">👥 Source 3 - Ijmâ'</h4>
                <p className="text-sm text-gray-300">Consensus - Technologies d'assistance</p>
                <p className="text-xs text-gray-400 mt-1">4 écoles - Facilitation accès halal</p>
              </div>
              <div className="bg-slate-800/30 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-400 mb-2">⚖️ Source 4 - Qiyâs</h4>
                <p className="text-sm text-gray-300">Analogie avec aide physique traditionnelle</p>
                <p className="text-xs text-gray-400 mt-1">Assistance humaine → Assistance vocale</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="voice-control" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-slate-800">
            <TabsTrigger value="voice-control" className="data-[state=active]:bg-purple-600">
              🎤 Contrôle Vocal
            </TabsTrigger>
            <TabsTrigger value="languages" className="data-[state=active]:bg-purple-600">
              🌍 Langues
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-purple-600">
              ⚙️ Paramètres
            </TabsTrigger>
            <TabsTrigger value="commands" className="data-[state=active]:bg-purple-600">
              📝 Commandes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="voice-control">
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">🎯 Système de Guidance Vocale Respectueuse</CardTitle>
                  <CardDescription>Interface vocale adaptée aux sensibilités culturelles musulmanes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Panneau de Contrôle */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-white text-lg">Contrôles Principaux</h3>
                      
                      <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-white">Guidance Vocale</h4>
                          <p className="text-sm text-gray-400">Activation du système vocal</p>
                        </div>
                        <Button
                          onClick={() => {
                            setIsVoiceEnabled(!isVoiceEnabled);
                            speak(isVoiceEnabled ? "Guidance vocale désactivée" : "Guidance vocale activée, Bismillah");
                          }}
                          className={`${isVoiceEnabled ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'}`}
                        >
                          {isVoiceEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-white">Écoute Commandes</h4>
                          <p className="text-sm text-gray-400">Reconnaissance vocale active</p>
                        </div>
                        <Button
                          onClick={() => {
                            setIsListening(!isListening);
                            handleVoiceCommand(isListening ? "Arrêt écoute" : "Début écoute");
                          }}
                          className={`${isListening ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'}`}
                        >
                          {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                        </Button>
                      </div>

                      <div className="p-4 bg-slate-700/50 rounded-lg">
                        <h4 className="font-medium text-white mb-2">Vitesse de Parole</h4>
                        <input
                          type="range"
                          min="0.5"
                          max="2.0"
                          step="0.1"
                          value={voiceSpeed}
                          onChange={(e) => setVoiceSpeed(parseFloat(e.target.value))}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-gray-400 mt-1">
                          <span>Lent</span>
                          <span>{voiceSpeed}x</span>
                          <span>Rapide</span>
                        </div>
                      </div>
                    </div>

                    {/* Démonstration */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-white text-lg">Test de Navigation</h3>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          onClick={() => speak("Navigation vers CED Bank, votre banque islamique", currentLanguage)}
                          className="bg-green-600 hover:bg-green-700 text-sm"
                          disabled={!isVoiceEnabled}
                        >
                          🏦 Test CED Bank
                        </Button>
                        
                        <Button
                          onClick={() => speak("Accès Institut CED Academy pour formations", currentLanguage)}
                          className="bg-blue-600 hover:bg-blue-700 text-sm"
                          disabled={!isVoiceEnabled}
                        >
                          🎓 Test Academy
                        </Button>
                        
                        <Button
                          onClick={() => speak("Ouverture Al-Aman Takaful assurance", currentLanguage)}
                          className="bg-purple-600 hover:bg-purple-700 text-sm"
                          disabled={!isVoiceEnabled}
                        >
                          🛡️ Test Takaful
                        </Button>
                        
                        <Button
                          onClick={() => speak("TechForAll donations solidaires activé", currentLanguage)}
                          className="bg-emerald-600 hover:bg-emerald-700 text-sm"
                          disabled={!isVoiceEnabled}
                        >
                          🌍 Test TechForAll
                        </Button>
                      </div>

                      <div className="p-4 bg-green-600/20 rounded-lg border border-green-500/30">
                        <h4 className="font-medium text-white mb-2">📊 Statistiques</h4>
                        <div className="space-y-2 text-sm text-gray-300">
                          <div className="flex justify-between">
                            <span>État vocal:</span>
                            <span className={isVoiceEnabled ? "text-green-400" : "text-red-400"}>
                              {isVoiceEnabled ? "Actif" : "Inactif"}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Langue actuelle:</span>
                            <span className="text-purple-400">{languages.find(l => l.code === currentLanguage)?.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Commandes utilisées:</span>
                            <span className="text-blue-400">{voiceCommands}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="languages">
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Globe className="h-6 w-6 text-purple-400" />
                    <span>Support Multilingue Respectueux</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {languages.map((lang) => (
                      <div 
                        key={lang.code}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          currentLanguage === lang.code 
                            ? 'bg-purple-600/30 border-purple-500' 
                            : 'bg-slate-700/30 border-slate-600 hover:border-purple-400'
                        }`}
                        onClick={() => {
                          setCurrentLanguage(lang.code);
                          speak(lang.voice, lang.code);
                        }}
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-2">🗣️</div>
                          <h3 className="font-bold text-white text-sm">{lang.name}</h3>
                          <p className="text-xs text-gray-400 mt-1">{lang.voice}</p>
                          {currentLanguage === lang.code && (
                            <Badge className="mt-2 bg-purple-600">Actuel</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-600/50">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center space-x-2">
                      <Headphones className="h-6 w-6 text-purple-400" />
                      <span>Paramètres Audio</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Volume</label>
                        <input type="range" min="0" max="100" className="w-full" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Tonalité</label>
                        <select className="w-full bg-slate-700 text-white p-2 rounded">
                          <option>Féminine respectueuse</option>
                          <option>Masculine sobre</option>
                          <option>Neutre professionnel</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Mode</label>
                        <select className="w-full bg-slate-700 text-white p-2 rounded">
                          <option>Guidance complète</option>
                          <option>Essentiel uniquement</option>
                          <option>Mode prière (silencieux)</option>
                        </select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border-blue-600/50">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center space-x-2">
                      <Shield className="h-6 w-6 text-blue-400" />
                      <span>Respect Culturel</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Invocations d'ouverture</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Mode prière automatique</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Terminologie islamique</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Bénédictions de fin</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="commands">
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">📝 Commandes Vocales Disponibles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-4">Navigation Principale</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between text-gray-300">
                          <span>"Aller à CED Bank"</span>
                          <span className="text-green-400">✓</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                          <span>"Ouvrir Academy"</span>
                          <span className="text-green-400">✓</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                          <span>"Accès Takaful"</span>
                          <span className="text-green-400">✓</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                          <span>"TechForAll donations"</span>
                          <span className="text-green-400">✓</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                          <span>"Retour accueil"</span>
                          <span className="text-green-400">✓</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-4">Commandes Système</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between text-gray-300">
                          <span>"Aide navigation"</span>
                          <span className="text-blue-400">ℹ️</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                          <span>"Changer langue"</span>
                          <span className="text-blue-400">ℹ️</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                          <span>"Mode prière"</span>
                          <span className="text-purple-400">🤲</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                          <span>"Arrêter guidance"</span>
                          <span className="text-red-400">⏹️</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                          <span>"Répéter dernière"</span>
                          <span className="text-yellow-400">🔄</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8 p-6 bg-slate-800/30 rounded-lg border border-slate-600">
          <p className="text-gray-400 mb-2 font-arabic">
            "وَيَسِّرْ وَلَا تُعَسِّرْ"
          </p>
          <p className="text-gray-300">
            "Facilite et ne complique pas" - Accessibility vocale respectant les valeurs islamiques
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Validation Fiqh informatique selon 4 sources - Facilitation technologique MANDUB
          </p>
        </div>
      </div>
    </div>
  );
}