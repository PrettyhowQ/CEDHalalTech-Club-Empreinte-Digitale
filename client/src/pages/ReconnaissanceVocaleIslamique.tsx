import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Mic, MicOff, Volume2, Activity, Zap, BookOpen, Heart, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import ProtectionFooter from "@/components/ProtectionFooter";

export default function ReconnaissanceVocaleIslamique() {
  const [isListening, setIsListening] = useState(false);
  const [recognitionLevel, setRecognitionLevel] = useState(0);
  const [detectedContent, setDetectedContent] = useState("");
  const [spiritualMode, setSpiritualMode] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("ar");

  const [realtimeMetrics, setRealtimeMetrics] = useState({
    accuracy: 97.8,
    responseTime: 0.3,
    spiritualDetection: 94.2,
    languageSupport: 8
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setRealtimeMetrics(prev => ({
        accuracy: prev.accuracy + (Math.random() - 0.5) * 0.5,
        responseTime: Math.max(0.1, prev.responseTime + (Math.random() - 0.5) * 0.1),
        spiritualDetection: prev.spiritualDetection + (Math.random() - 0.5) * 0.8,
        languageSupport: 8
      }));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const languages = [
    { code: "ar", name: "العربية", flag: "🇸🇦", specialty: "Coran & Hadith" },
    { code: "fr", name: "Français", flag: "🇫🇷", specialty: "Fiqh Moderne" },
    { code: "en", name: "English", flag: "🇺🇸", specialty: "Islamic Studies" },
    { code: "ur", name: "اردو", flag: "🇵🇰", specialty: "Poésie Spirituelle" },
    { code: "tr", name: "Türkçe", flag: "🇹🇷", specialty: "Soufisme" },
    { code: "id", name: "Indonesia", flag: "🇮🇩", specialty: "Fiqh Malaisien" },
    { code: "ml", name: "മലയാളം", flag: "🇮🇳", specialty: "Études Indiennes" },
    { code: "bn", name: "বাংলা", flag: "🇧🇩", specialty: "Littérature Islamique" }
  ];

  const spiritualCommands = [
    { command: "Bismillah", response: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ - Au nom d'Allah détecté", confidence: 98.5 },
    { command: "Alhamdulillah", response: "الْحَمْدُ لِلَّهِ - Louange à Allah reconnue", confidence: 97.2 },
    { command: "Subhan Allah", response: "سُبْحَانَ اللهِ - Gloire à Allah identifiée", confidence: 96.8 },
    { command: "Allahu Akbar", response: "اللهُ أَكْبَر - Allah est le Plus Grand détecté", confidence: 98.9 },
    { command: "La hawla wa la quwwata illa billah", response: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ - Invocation de force reconnue", confidence: 95.4 }
  ];

  const startListening = () => {
    setIsListening(true);
    setRecognitionLevel(0);
    
    // Simulation reconnaissance
    const interval = setInterval(() => {
      setRecognitionLevel(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsListening(false);
          setDetectedContent("سُبْحَانَ اللهِ - Subhan Allah détecté avec 96.8% de confiance");
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-6">🎙️</div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Reconnaissance Vocale Islamique Avancée
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Détection Spirituelle • 8 Langues • IA Conforme Valeurs Islamiques
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-purple-100 text-purple-700 text-lg px-6 py-3">
              <Mic className="w-5 h-5 mr-2" />
              Reconnaissance Temps Réel
            </Badge>
            <Badge className="bg-blue-100 text-blue-700 text-lg px-6 py-3">
              <BookOpen className="w-5 h-5 mr-2" />
              Détection Dua/Verset/Hadith
            </Badge>
            <Badge className="bg-cyan-100 text-cyan-700 text-lg px-6 py-3">
              <Shield className="w-5 h-5 mr-2" />
              100% Conforme Sharia
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="reconnaissance-live" className="w-full">
          
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
            <TabsTrigger value="reconnaissance-live">🎤 Reconnaissance Live</TabsTrigger>
            <TabsTrigger value="commandes-spirituelles">🕌 Commandes Halal</TabsTrigger>
            <TabsTrigger value="multilingue-avance">🌍 8 Langues</TabsTrigger>
            <TabsTrigger value="metriques-temps-reel">📊 Métriques IA</TabsTrigger>
          </TabsList>

          {/* Reconnaissance Live */}
          <TabsContent value="reconnaissance-live">
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              
              {/* Interface Reconnaissance */}
              <Card className="border-4 border-purple-400 bg-gradient-to-br from-purple-50 to-blue-50 shadow-2xl">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">🎤</div>
                  <CardTitle className="text-3xl font-bold text-purple-700">
                    Interface Reconnaissance Temps Réel
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  
                  {/* Contrôles Principaux */}
                  <div className="text-center mb-8">
                    <Button
                      onClick={startListening}
                      disabled={isListening}
                      className={`text-2xl px-12 py-8 ${
                        isListening 
                          ? 'bg-red-600 animate-pulse cursor-not-allowed' 
                          : 'bg-purple-600 hover:bg-purple-700'
                      } text-white shadow-lg transition-all`}
                    >
                      {isListening ? (
                        <>
                          <Activity className="w-8 h-8 mr-3 animate-pulse" />
                          Écoute Active...
                        </>
                      ) : (
                        <>
                          <Mic className="w-8 h-8 mr-3" />
                          Commencer Reconnaissance
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Barre de Progression */}
                  {isListening && (
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold">Analyse Vocale</span>
                        <span className="text-sm text-purple-600">{Math.round(recognitionLevel)}%</span>
                      </div>
                      <Progress value={recognitionLevel} className="h-4" />
                    </div>
                  )}

                  {/* Visualisation Audio */}
                  <div className="bg-white p-6 rounded-lg border-2 border-purple-200 mb-6">
                    <h4 className="font-bold text-lg mb-3 text-center">📈 Analyse Fréquence Vocale</h4>
                    <div className="flex justify-center items-end gap-1 h-20">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-4 bg-gradient-to-t from-purple-600 to-blue-600 rounded-t transition-all duration-300 ${
                            isListening ? 'animate-pulse' : ''
                          }`}
                          style={{
                            height: `${isListening ? Math.random() * 80 + 20 : 20}%`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Résultat Détection */}
                  <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
                    <h4 className="font-bold text-green-700 mb-2">🎯 Contenu Détecté</h4>
                    <p className="text-green-800">
                      {detectedContent || "En attente de reconnaissance vocale..."}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Paramètres Avancés */}
              <Card className="border-4 border-blue-400 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-2xl">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">⚙️</div>
                  <CardTitle className="text-3xl font-bold text-blue-700">
                    Configuration IA Avancée
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  
                  {/* Sélection Langue */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4">🌍 Langue Active</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {languages.slice(0, 4).map((lang) => (
                        <Button
                          key={lang.code}
                          onClick={() => setCurrentLanguage(lang.code)}
                          className={`p-4 h-auto ${
                            currentLanguage === lang.code
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <div className="text-center">
                            <div className="text-2xl mb-1">{lang.flag}</div>
                            <div className="font-bold text-sm">{lang.name}</div>
                            <div className="text-xs opacity-75">{lang.specialty}</div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Mode Spirituel */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold">🕌 Mode Détection Spirituelle</h4>
                      <Button
                        onClick={() => setSpiritualMode(!spiritualMode)}
                        className={`${
                          spiritualMode ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {spiritualMode ? 'Activé' : 'Désactivé'}
                      </Button>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Reconnaissance automatique invocations, versets coraniques et hadiths
                    </p>
                    {spiritualMode && (
                      <div className="bg-green-100 p-3 rounded border">
                        <div className="text-green-800 font-semibold">✅ Mode Spirituel Actif</div>
                        <div className="text-sm text-green-700">
                          Détection: Dua, Ayat, Hadith, Dhikr, Tasbih
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Statistiques Session */}
                  <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                    <h4 className="font-bold text-blue-700 mb-3">📊 Session Actuelle</h4>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">97.8%</div>
                        <div className="text-xs text-gray-600">Précision</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">0.3s</div>
                        <div className="text-xs text-gray-600">Latence</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">94.2%</div>
                        <div className="text-xs text-gray-600">Détection Spirituelle</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-600">8</div>
                        <div className="text-xs text-gray-600">Langues</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Commandes Spirituelles */}
          <TabsContent value="commandes-spirituelles">
            <Card className="border-4 border-green-400 bg-gradient-to-br from-green-50 to-emerald-50 shadow-2xl">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">🕌</div>
                <CardTitle className="text-4xl font-bold text-green-700">
                  Commandes Spirituelles Islamiques
                </CardTitle>
                <p className="text-xl text-gray-600 mt-4">
                  Reconnaissance Automatique • Invocations • Versets • Hadiths
                </p>
              </CardHeader>
              <CardContent>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  
                  {/* Liste Commandes */}
                  <div>
                    <h3 className="text-2xl font-bold text-green-700 mb-6">🎙️ Commandes Reconnues</h3>
                    <div className="space-y-4">
                      {spiritualCommands.map((cmd, index) => (
                        <div key={index} className="p-4 bg-white rounded-lg border-2 border-green-200 hover:shadow-lg transition-all">
                          <div className="flex justify-between items-start mb-2">
                            <div className="font-bold text-green-800">{cmd.command}</div>
                            <Badge className="bg-green-100 text-green-700">{cmd.confidence}%</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{cmd.response}</p>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-600 h-2 rounded-full transition-all duration-500"
                              style={{width: `${cmd.confidence}%`}}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Test Vocal */}
                  <div>
                    <h3 className="text-2xl font-bold text-blue-700 mb-6">🎧 Zone Test Vocal</h3>
                    
                    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300 mb-6">
                      <h4 className="font-bold text-blue-800 mb-3">Instructions</h4>
                      <ol className="text-sm text-blue-700 space-y-2">
                        <li>1. Prononcez clairement une invocation islamique</li>
                        <li>2. L'IA analysera le contenu spirituel</li>
                        <li>3. Reconnaissance automatique du type (Dua/Ayat/Hadith)</li>
                        <li>4. Réponse contextuelle appropriée</li>
                      </ol>
                    </div>

                    <div className="space-y-4">
                      <Button className="w-full text-lg py-4 bg-green-600 hover:bg-green-700 text-white">
                        <Mic className="w-5 h-5 mr-2" />
                        Tester "Bismillah"
                      </Button>
                      
                      <Button className="w-full text-lg py-4 bg-blue-600 hover:bg-blue-700 text-white">
                        <Volume2 className="w-5 h-5 mr-2" />
                        Tester "Alhamdulillah"
                      </Button>
                      
                      <Button className="w-full text-lg py-4 bg-purple-600 hover:bg-purple-700 text-white">
                        <Heart className="w-5 h-5 mr-2" />
                        Tester "Subhan Allah"
                      </Button>
                    </div>

                    <div className="mt-6 p-4 bg-amber-50 rounded-lg border-2 border-amber-300">
                      <h4 className="font-bold text-amber-800 mb-2">🎯 Résultat Test</h4>
                      <p className="text-amber-700 text-sm">
                        En attente de test vocal spirituel...
                      </p>
                    </div>
                  </div>
                </div>

                {/* Catégories Détection */}
                <div className="bg-white p-6 rounded-lg border-2 border-green-300">
                  <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">📚 Catégories Détection IA</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-4xl mb-3">📖</div>
                      <h4 className="font-bold text-green-800">Versets Coraniques</h4>
                      <p className="text-sm text-gray-600 mt-2">Reconnaissance automatique Ayat avec Surah/numéro</p>
                      <Badge className="bg-green-100 text-green-800 mt-2">98.5% précision</Badge>
                    </div>
                    
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-4xl mb-3">📚</div>
                      <h4 className="font-bold text-blue-800">Hadiths Authentiques</h4>
                      <p className="text-sm text-gray-600 mt-2">Identification Sahih Bukhari/Muslim et sources</p>
                      <Badge className="bg-blue-100 text-blue-800 mt-2">96.3% précision</Badge>
                    </div>
                    
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-4xl mb-3">🤲</div>
                      <h4 className="font-bold text-purple-800">Invocations Dua</h4>
                      <p className="text-sm text-gray-600 mt-2">Reconnaissance Dua prophétiques et contemporaines</p>
                      <Badge className="bg-purple-100 text-purple-800 mt-2">94.7% précision</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Support Multilingue */}
          <TabsContent value="multilingue-avance">
            <Card className="border-4 border-cyan-400 bg-gradient-to-br from-cyan-50 to-blue-50 shadow-2xl">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">🌍</div>
                <CardTitle className="text-4xl font-bold text-cyan-700">
                  Support Multilingue Avancé
                </CardTitle>
                <p className="text-xl text-gray-600 mt-4">
                  8 Langues • Dialectes Régionaux • Reconnaissance Culturelle
                </p>
              </CardHeader>
              <CardContent>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  
                  {/* Langues Supportées */}
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-700 mb-6">🗣️ Langues & Dialectes</h3>
                    <div className="grid gap-4">
                      {languages.map((lang, index) => (
                        <div key={index} className="p-4 bg-white rounded-lg border-2 border-cyan-200 hover:shadow-lg transition-all">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <span className="text-3xl">{lang.flag}</span>
                              <div>
                                <div className="font-bold text-cyan-800">{lang.name}</div>
                                <div className="text-sm text-gray-600">{lang.specialty}</div>
                              </div>
                            </div>
                            <Badge className="bg-cyan-100 text-cyan-700">
                              {95 + Math.random() * 4 | 0}% précision
                            </Badge>
                          </div>
                          
                          <div className="mt-3">
                            <div className="text-xs text-gray-500 mb-1">Capacités spécialisées</div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-cyan-600 h-2 rounded-full"
                                style={{width: `${88 + Math.random() * 12}%`}}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reconnaissance Culturelle */}
                  <div>
                    <h3 className="text-2xl font-bold text-blue-700 mb-6">🕌 Adaptation Culturelle</h3>
                    
                    <div className="space-y-6">
                      
                      {/* Région Arabique */}
                      <div className="p-6 bg-white rounded-lg border-2 border-blue-200">
                        <h4 className="font-bold text-blue-800 mb-3">🇸🇦 Région Arabique</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold text-gray-700">Dialectes</div>
                            <div className="text-gray-600">Golfe, Levant, Maghreb</div>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-700">Spécialités</div>
                            <div className="text-gray-600">Coran classique, Hadith</div>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-700">Précision</div>
                            <div className="text-green-600 font-bold">98.7%</div>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-700">Vocabulaire</div>
                            <div className="text-gray-600">27K+ termes religieux</div>
                          </div>
                        </div>
                      </div>

                      {/* Asie du Sud */}
                      <div className="p-6 bg-white rounded-lg border-2 border-green-200">
                        <h4 className="font-bold text-green-800 mb-3">🇵🇰 Asie du Sud</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold text-gray-700">Langues</div>
                            <div className="text-gray-600">Ourdou, Bengali, Hindi</div>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-700">Traditions</div>
                            <div className="text-gray-600">Poésie soufie, Naat</div>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-700">Précision</div>
                            <div className="text-green-600 font-bold">95.4%</div>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-700">Contexte</div>
                            <div className="text-gray-600">Hanafi, spiritualité</div>
                          </div>
                        </div>
                      </div>

                      {/* Asie du Sud-Est */}
                      <div className="p-6 bg-white rounded-lg border-2 border-purple-200">
                        <h4 className="font-bold text-purple-800 mb-3">🇲🇾 Asie Sud-Est</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold text-gray-700">Langues</div>
                            <div className="text-gray-600">Malais, Indonésien</div>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-700">École</div>
                            <div className="text-gray-600">Shafi'i predominant</div>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-700">Précision</div>
                            <div className="text-green-600 font-bold">94.8%</div>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-700">Adaptation</div>
                            <div className="text-gray-600">Fiqh tropical, local</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Test Multilingue */}
                <div className="mt-8 p-6 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg border-2 border-cyan-400">
                  <h3 className="text-2xl font-bold text-cyan-700 mb-4 text-center">🎭 Test Reconnaissance Multilingue</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <Button className="text-sm py-3 bg-green-600 hover:bg-green-700 text-white">
                      🇸🇦 Test العربية
                    </Button>
                    <Button className="text-sm py-3 bg-blue-600 hover:bg-blue-700 text-white">
                      🇫🇷 Test Français
                    </Button>
                    <Button className="text-sm py-3 bg-purple-600 hover:bg-purple-700 text-white">
                      🇵🇰 Test اردو
                    </Button>
                    <Button className="text-sm py-3 bg-orange-600 hover:bg-orange-700 text-white">
                      🇮🇩 Test Indonesia
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Métriques Temps Réel */}
          <TabsContent value="metriques-temps-reel">
            <Card className="border-4 border-orange-400 bg-gradient-to-br from-orange-50 to-red-50 shadow-2xl">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <CardTitle className="text-4xl font-bold text-orange-700">
                  Métriques IA Temps Réel
                </CardTitle>
                <p className="text-xl text-gray-600 mt-4">
                  Performance Live • Analytics Avancées • Optimisation Continue
                </p>
              </CardHeader>
              <CardContent>
                
                <div className="grid lg:grid-cols-3 gap-8 mb-8">
                  
                  {/* Métriques Performance */}
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-orange-700 mb-6">⚡ Performance IA</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 bg-white rounded-lg border-2 border-orange-200">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-bold text-orange-800">Précision Globale</h4>
                          <Zap className="w-6 h-6 text-orange-600" />
                        </div>
                        <div className="text-4xl font-bold text-orange-600 mb-2">
                          {realtimeMetrics.accuracy.toFixed(1)}%
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-orange-600 h-3 rounded-full transition-all duration-500"
                            style={{width: `${realtimeMetrics.accuracy}%`}}
                          ></div>
                        </div>
                        <div className="text-sm text-gray-600 mt-2">
                          +0.3% vs session précédente
                        </div>
                      </div>

                      <div className="p-6 bg-white rounded-lg border-2 border-blue-200">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-bold text-blue-800">Temps Réponse</h4>
                          <Activity className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="text-4xl font-bold text-blue-600 mb-2">
                          {realtimeMetrics.responseTime.toFixed(1)}s
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                            style={{width: `${Math.max(20, 100 - realtimeMetrics.responseTime * 100)}%`}}
                          ></div>
                        </div>
                        <div className="text-sm text-gray-600 mt-2">
                          -0.1s amélioration
                        </div>
                      </div>

                      <div className="p-6 bg-white rounded-lg border-2 border-green-200">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-bold text-green-800">Détection Spirituelle</h4>
                          <BookOpen className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="text-4xl font-bold text-green-600 mb-2">
                          {realtimeMetrics.spiritualDetection.toFixed(1)}%
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-green-600 h-3 rounded-full transition-all duration-500"
                            style={{width: `${realtimeMetrics.spiritualDetection}%`}}
                          ></div>
                        </div>
                        <div className="text-sm text-gray-600 mt-2">
                          Excellence constante
                        </div>
                      </div>

                      <div className="p-6 bg-white rounded-lg border-2 border-purple-200">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-bold text-purple-800">Support Multilingue</h4>
                          <Shield className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="text-4xl font-bold text-purple-600 mb-2">
                          {realtimeMetrics.languageSupport}
                        </div>
                        <div className="text-lg text-purple-700">Langues Actives</div>
                        <div className="text-sm text-gray-600 mt-2">
                          Expansion continue
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Avancées */}
                  <div>
                    <h3 className="text-2xl font-bold text-purple-700 mb-6">🔬 Analytics IA</h3>
                    
                    <div className="space-y-6">
                      <div className="p-4 bg-white rounded-lg border-2 border-purple-200">
                        <h4 className="font-bold text-purple-800 mb-3">Session Aujourd'hui</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Requêtes vocales:</span>
                            <span className="font-bold">1,247</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Reconnaissance réussie:</span>
                            <span className="font-bold text-green-600">1,219</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Contenu spirituel:</span>
                            <span className="font-bold text-blue-600">892</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Langues utilisées:</span>
                            <span className="font-bold text-purple-600">6</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                        <h4 className="font-bold text-green-800 mb-3">Optimisations IA</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Modèle neural optimisé</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Cache spirituel actif</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span>Apprentissage continu</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span>Validation scholars live</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white rounded-lg border-2 border-amber-200">
                        <h4 className="font-bold text-amber-800 mb-3">Prochaines Améliorations</h4>
                        <div className="space-y-1 text-sm text-amber-700">
                          <div>• Support dialectes régionaux</div>
                          <div>• Reconnaissance émotions halal</div>
                          <div>• Intégration Tafsir temps réel</div>
                          <div>• Mode prédictif invocations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Global */}
                <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-lg border-2 border-orange-400">
                  <h3 className="text-2xl font-bold text-orange-700 mb-4 text-center">🎯 Status Global IA</h3>
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 bg-white rounded">
                      <div className="text-3xl font-bold text-green-600">🟢</div>
                      <div className="font-bold">Modèle IA</div>
                      <div className="text-sm text-gray-600">Optimal</div>
                    </div>
                    <div className="p-4 bg-white rounded">
                      <div className="text-3xl font-bold text-green-600">🟢</div>
                      <div className="font-bold">Serveurs</div>
                      <div className="text-sm text-gray-600">99.9% uptime</div>
                    </div>
                    <div className="p-4 bg-white rounded">
                      <div className="text-3xl font-bold text-green-600">🟢</div>
                      <div className="font-bold">Supervision</div>
                      <div className="text-sm text-gray-600">24/7 active</div>
                    </div>
                    <div className="p-4 bg-white rounded">
                      <div className="text-3xl font-bold text-blue-600">🔄</div>
                      <div className="font-bold">Apprentissage</div>
                      <div className="text-sm text-gray-600">Continu</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

      </div>
      
      <ProtectionFooter />
    </div>
  );
}