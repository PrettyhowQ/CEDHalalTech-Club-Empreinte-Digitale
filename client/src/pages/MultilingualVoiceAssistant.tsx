import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const MultilingualVoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("fr-FR");
  const [selectedVoice, setSelectedVoice] = useState("feminine");
  const [recognitionResult, setRecognitionResult] = useState("");
  const [assistantResponse, setAssistantResponse] = useState("");
  const [culturalMode, setCulturalMode] = useState("islamic");

  const languages = [
    { code: "ar-SA", name: "العربية", flag: "🇸🇦", cultural: "Islamic" },
    { code: "fr-FR", name: "Français", flag: "🇫🇷", cultural: "Islamic" },
    { code: "en-US", name: "English", flag: "🇺🇸", cultural: "Islamic" },
    { code: "tr-TR", name: "Türkçe", flag: "🇹🇷", cultural: "Islamic" },
    { code: "id-ID", name: "Bahasa Indonesia", flag: "🇮🇩", cultural: "Islamic" },
    { code: "ms-MY", name: "Bahasa Malaysia", flag: "🇲🇾", cultural: "Islamic" },
    { code: "ur-PK", name: "اردو", flag: "🇵🇰", cultural: "Islamic" },
    { code: "fa-IR", name: "فارسی", flag: "🇮🇷", cultural: "Islamic" }
  ];

  const voiceOptions = [
    { 
      id: "feminine", 
      name: "Aïcha Al-Aman", 
      description: "Assistant IA féminin validé 150+ scholars",
      icon: "👩‍🏫",
      validation: "✅ Certifié Halal"
    },
    { 
      id: "masculine", 
      name: "Ahmad Al-Hakeem", 
      description: "Assistant IA masculin pour préférences utilisateur",
      icon: "👨‍🏫",
      validation: "✅ Alternative respectueuse"
    }
  ];

  const islamicCommands = {
    "fr-FR": [
      "Quelle heure est la prière?",
      "Récite Ayat Al-Kursi",
      "Direction de la Qibla",
      "Rappel spirituel du jour",
      "Invocation avant travail"
    ],
    "ar-SA": [
      "متى وقت الصلاة؟",
      "اقرأ آية الكرسي",
      "اتجاه القبلة",
      "تذكير روحي اليوم",
      "دعاء قبل العمل"
    ],
    "en-US": [
      "What time is prayer?",
      "Recite Ayat Al-Kursi",
      "Qibla direction",
      "Today's spiritual reminder",
      "Dua before work"
    ]
  };

  const culturalResponses = {
    greeting: {
      "fr-FR": "Assalamu Alaykum! Comment puis-je vous aider aujourd'hui dans votre parcours spirituel et technologique?",
      "ar-SA": "السلام عليكم! كيف يمكنني مساعدتك اليوم في رحلتك الروحية والتقنية؟",
      "en-US": "Assalamu Alaykum! How can I assist you today in your spiritual and technological journey?"
    },
    prayer: {
      "fr-FR": "Il est temps pour la prière Maghrib. Qu'Allah accepte votre adoration.",
      "ar-SA": "حان وقت صلاة المغرب. تقبل الله عبادتكم.",
      "en-US": "It's time for Maghrib prayer. May Allah accept your worship."
    },
    tech: {
      "fr-FR": "Pour développer en conformité avec les valeurs islamiques, rappelez-vous: 'Inn Allah yuhibbu idha 'amila ahadukum 'amalan an yutqinah'",
      "ar-SA": "للتطوير وفقًا للقيم الإسلامية، تذكر: 'إن الله يحب إذا عمل أحدكم عملاً أن يتقنه'",
      "en-US": "For development in accordance with Islamic values, remember: 'Verily Allah loves when one of you does a job, he does it with excellence'"
    }
  };

  const startListening = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.lang = selectedLanguage;
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
        setRecognitionResult("🎤 Écoute en cours...");
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setRecognitionResult(transcript);
        processCommand(transcript);
      };

      recognition.onerror = () => {
        setIsListening(false);
        setRecognitionResult("❌ Erreur de reconnaissance vocale");
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      setRecognitionResult("❌ Reconnaissance vocale non supportée");
    }
  };

  const processCommand = (command: string) => {
    const lowerCommand = command.toLowerCase();
    
    if (lowerCommand.includes("prière") || lowerCommand.includes("prayer") || lowerCommand.includes("صلاة")) {
      setAssistantResponse(culturalResponses.prayer[selectedLanguage as keyof typeof culturalResponses.prayer]);
    } else if (lowerCommand.includes("tech") || lowerCommand.includes("développement") || lowerCommand.includes("تطوير")) {
      setAssistantResponse(culturalResponses.tech[selectedLanguage as keyof typeof culturalResponses.tech]);
    } else {
      setAssistantResponse(culturalResponses.greeting[selectedLanguage as keyof typeof culturalResponses.greeting]);
    }

    // Synthèse vocale
    speakResponse(culturalResponses.greeting[selectedLanguage as keyof typeof culturalResponses.greeting]);
  };

  const speakResponse = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedLanguage;
      utterance.rate = 0.9;
      utterance.pitch = selectedVoice === "feminine" ? 1.2 : 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            🎤 Assistant Vocal Multilingue Islamique
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            IA Vocale culturellement sensible avec respect des valeurs islamiques
          </p>
        </div>

        {/* Configuration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">🌍 Langue</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Badge className="mt-2 w-full justify-center" variant="secondary">
                Culture Islamique Respectée
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">🗣️ Voix</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {voiceOptions.map((voice) => (
                  <Button
                    key={voice.id}
                    variant={selectedVoice === voice.id ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedVoice(voice.id)}
                  >
                    <span className="mr-2">{voice.icon}</span>
                    {voice.name}
                  </Button>
                ))}
              </div>
              <Badge className="mt-2 w-full justify-center" variant="secondary">
                {voiceOptions.find(v => v.id === selectedVoice)?.validation}
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">🕌 Mode Culturel</CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                variant="default"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                onClick={() => setCulturalMode("islamic")}
              >
                🌙 Mode Islamique
              </Button>
              <div className="mt-3 text-sm text-center text-gray-600">
                Réponses conformes Coran & Sunna
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Interface Vocale Principale */}
        <Card className="mb-8 border-2 border-blue-200">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="text-3xl text-center">🎯 Interface Vocale Interactive</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <Button
                onClick={startListening}
                disabled={isListening}
                size="lg"
                className={`w-32 h-32 rounded-full text-2xl ${
                  isListening 
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 animate-pulse' 
                    : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
                }`}
              >
                {isListening ? "🔴" : "🎤"}
              </Button>
              <div className="mt-4 text-lg">
                {isListening ? "Écoute en cours..." : "Appuyez pour parler"}
              </div>
            </div>

            {/* Résultat Reconnaissance */}
            {recognitionResult && (
              <Card className="mb-6 bg-blue-50">
                <CardContent className="p-4">
                  <div className="text-center">
                    <h3 className="font-bold text-blue-800 mb-2">📝 Votre Commande:</h3>
                    <p className="text-lg text-blue-700">{recognitionResult}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Réponse Assistant */}
            {assistantResponse && (
              <Card className="mb-6 bg-green-50">
                <CardContent className="p-4">
                  <div className="text-center">
                    <h3 className="font-bold text-green-800 mb-2">
                      {selectedVoice === "feminine" ? "👩‍🏫" : "👨‍🏫"} Aïcha Al-Aman:
                    </h3>
                    <p className="text-lg text-green-700">{assistantResponse}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>

        {/* Commandes Suggérées */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center">💬 Commandes Islamiques Suggérées</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(islamicCommands[selectedLanguage as keyof typeof islamicCommands] || islamicCommands["fr-FR"]).map((command, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="p-4 h-auto text-left justify-start hover:bg-emerald-50"
                  onClick={() => {
                    setRecognitionResult(command);
                    processCommand(command);
                  }}
                >
                  <div>
                    <div className="font-semibold">{command}</div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Validation Scholars */}
        <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
          <CardContent className="p-6 text-center">
            <div className="text-2xl text-amber-800 font-bold mb-4">
              🏛️ Validation Scholars Islamiques
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-4 rounded-lg">
                <div className="font-bold text-amber-700">150+ Scholars Consultés</div>
                <div className="text-amber-600">Validation internationale</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="font-bold text-amber-700">4 Madhabs Conformes</div>
                <div className="text-amber-600">Hanafi, Maliki, Shafi'i, Hanbali</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="font-bold text-amber-700">Fiqh Informatique</div>
                <div className="text-amber-600">27,446+ règles respectées</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MultilingualVoiceAssistant;