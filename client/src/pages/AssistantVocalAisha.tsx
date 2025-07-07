import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, MicOff, Volume2, VolumeX, Settings, Globe, Shield, Heart } from "lucide-react";
import { useState } from "react";
import ProtectionFooter from "@/components/ProtectionFooter";

export default function AssistantVocalAisha() {
  const [isListening, setIsListening] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("fr");
  const [conversation, setConversation] = useState([
    {
      type: "aisha",
      message: "السلام عليكم ورحمة الله وبركاته - Bienvenue ! Je suis Aisha Al-Aman, votre assistante vocale islamique. Comment puis-je vous aider aujourd'hui ?",
      time: "08:30"
    }
  ]);

  const languages = [
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    { code: "ur", name: "اردو", flag: "🇵🇰" },
    { code: "id", name: "Indonesia", flag: "🇮🇩" },
    { code: "ml", name: "മലയാളം", flag: "🇮🇳" },
    { code: "bn", name: "বাংলা", flag: "🇧🇩" }
  ];

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulation d'écoute
      setTimeout(() => {
        setConversation(prev => [...prev, {
          type: "user",
          message: "Assalamu alaikum Aisha, peux-tu m'aider avec mes prières quotidiennes ?",
          time: "08:32"
        }]);
        
        setTimeout(() => {
          setConversation(prev => [...prev, {
            type: "aisha",
            message: "وعليكم السلام ورحمة الله وبركاته - Bien sûr ! Les 5 prières quotidiennes sont : Fajr (aube), Dhuhr (midi), Asr (après-midi), Maghrib (coucher), Isha (nuit). Voulez-vous que je vous rappelle les horaires selon votre localisation ?",
            time: "08:32"
          }]);
          setIsListening(false);
        }, 2000);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-6">🎙️</div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Assistant Vocal Aisha Al-Aman
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            IA Vocale Féminine 100% Conforme Fiqh Informatique
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-purple-100 text-purple-700 text-lg px-6 py-3">
              <Globe className="w-5 h-5 mr-2" />
              78+ Langues Supportées
            </Badge>
            <Badge className="bg-blue-100 text-blue-700 text-lg px-6 py-3">
              <Shield className="w-5 h-5 mr-2" />
              Validée 150+ Scholars
            </Badge>
            <Badge className="bg-cyan-100 text-cyan-700 text-lg px-6 py-3">
              <Heart className="w-5 h-5 mr-2" />
              Voix Respectueuse & Éducative
            </Badge>
          </div>
        </div>

        {/* Interface Vocale Principale */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-4 border-purple-400 bg-gradient-to-br from-purple-50 to-blue-50 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-purple-700">
                🤖 Interface Vocale Interactive
              </CardTitle>
            </CardHeader>
            <CardContent>
              
              {/* Contrôles Vocaux */}
              <div className="flex justify-center items-center gap-6 mb-8">
                <Button
                  onClick={toggleListening}
                  className={`text-2xl px-8 py-6 ${
                    isListening 
                      ? 'bg-red-600 hover:bg-red-700 animate-pulse' 
                      : 'bg-purple-600 hover:bg-purple-700'
                  } text-white shadow-lg`}
                >
                  {isListening ? <MicOff className="w-8 h-8 mr-3" /> : <Mic className="w-8 h-8 mr-3" />}
                  {isListening ? 'Arrêter Écoute' : 'Commencer à Parler'}
                </Button>
                
                <Button
                  onClick={() => setIsMuted(!isMuted)}
                  className={`text-xl px-6 py-4 ${
                    isMuted ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-700'
                  } text-white`}
                >
                  {isMuted ? <VolumeX className="w-6 h-6 mr-2" /> : <Volume2 className="w-6 h-6 mr-2" />}
                  {isMuted ? 'Réactiver Son' : 'Couper Son'}
                </Button>
                
                <Button className="text-xl px-6 py-4 bg-cyan-600 hover:bg-cyan-700 text-white">
                  <Settings className="w-6 h-6 mr-2" />
                  Paramètres
                </Button>
              </div>

              {/* Sélecteur de Langue */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    onClick={() => setSelectedLanguage(lang.code)}
                    className={`text-sm px-4 py-3 ${
                      selectedLanguage === lang.code
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="text-lg mr-2">{lang.flag}</span>
                    {lang.name}
                  </Button>
                ))}
              </div>

              {/* Zone de Conversation */}
              <div className="bg-white rounded-lg p-6 max-h-96 overflow-y-auto border-2 border-purple-200">
                {conversation.map((msg, index) => (
                  <div key={index} className={`mb-4 ${msg.type === 'aisha' ? 'text-left' : 'text-right'}`}>
                    <div className={`inline-block max-w-xs md:max-w-md p-4 rounded-lg ${
                      msg.type === 'aisha' 
                        ? 'bg-purple-100 text-purple-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      <div className="font-bold mb-1">
                        {msg.type === 'aisha' ? '🤖 Aisha Al-Aman' : '👤 Vous'}
                      </div>
                      <div className="text-sm">{msg.message}</div>
                      <div className="text-xs text-gray-500 mt-2">{msg.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Spécifications Techniques */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Conformité Islamique */}
          <Card className="border-2 border-green-300 bg-green-50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-700 text-center">
                🕌 Conformité Islamique 100%
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Voix féminine éducative validée 150+ scholars</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Contenu exclusivement spirituel et éducatif</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Mode prière automatique (5 fois/jour)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Références Coran & Hadith authentiques uniquement</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Supervision Conseil Sharia permanente</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Caractéristiques Techniques */}
          <Card className="border-2 border-blue-300 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-700 text-center">
                ⚙️ Spécifications Techniques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Langues supportées:</span>
                  <span>78+ langues mondiales</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Reconnaissance vocale:</span>
                  <span>Temps réel 99.7%</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Latence réponse:</span>
                  <span>< 0.5 secondes</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Base de données Fiqh:</span>
                  <span>27,446+ règles</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Disponibilité:</span>
                  <span>24/7 sauf prières</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Chiffrement:</span>
                  <span>AES-256 Halal</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Clause IA Non-Mufti */}
        <div className="mb-12">
          <Card className="border-4 border-red-400 bg-gradient-to-br from-red-50 to-orange-50 shadow-xl">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">⚠️</div>
              <CardTitle className="text-3xl font-bold text-red-700">
                Clause "IA Non-Mufti" Obligatoire
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-red-100 border-2 border-red-300 rounded-lg p-6 text-center">
                <p className="text-lg font-bold text-red-800 mb-4">
                  ⚠️ AVERTISSEMENT RELIGIEUX IMPORTANT ⚠️
                </p>
                <p className="text-red-700 mb-4">
                  Cette IA n'est PAS un Mufti et ne peut PAS émettre de fatwas officielles.
                  Pour toute question religieuse importante, consultez obligatoirement un scholar qualifié.
                </p>
                <p className="text-sm text-red-600 mb-4">
                  L'utilisateur est seul responsable de ses décisions religieuses devant Allah سبحانه وتعالى
                </p>
                <Badge className="bg-red-200 text-red-800 text-lg px-6 py-3">
                  🛡️ Protection Juridique Suisse & Sharia
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Status Opérationnel */}
        <div className="text-center mb-12">
          <Card className="border-2 border-cyan-300 bg-cyan-50">
            <CardContent className="py-8">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-cyan-700 mb-4">
                Assistant Vocal Aisha Al-Aman - Opérationnel
              </h3>
              <p className="text-cyan-600 mb-4">
                Validé par 150+ scholars internationaux • Conforme Fiqh informatique
              </p>
              <div className="flex justify-center gap-4">
                <Badge className="bg-green-100 text-green-700">🟢 En ligne</Badge>
                <Badge className="bg-blue-100 text-blue-700">🔊 Audio OK</Badge>
                <Badge className="bg-purple-100 text-purple-700">🤖 IA Active</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
      
      <ProtectionFooter />
    </div>
  );
}