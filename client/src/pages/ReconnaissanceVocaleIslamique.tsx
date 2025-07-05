import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Mic, MicOff, Volume2, Settings, Play, Pause, RotateCcw, MessageSquare, BookOpen, Heart } from "lucide-react";

interface RecognitionResult {
  texte: string;
  langue: string;
  confiance: number;
  categorie: 'dua' | 'verset' | 'hadith' | 'general';
  timestamp: Date;
}

interface VoiceCommand {
  commande: string;
  action: string;
  exemples: string[];
  langues: string[];
}

export default function ReconnaissanceVocaleIslamique() {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('fr-FR');
  const [results, setResults] = useState<RecognitionResult[]>([]);
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    // Vérifier le support de l'API Web Speech
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setIsSupported(true);
      
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = currentLanguage;
      
      recognitionInstance.onresult = (event: any) => {
        const transcript = event.results[event.results.length - 1][0].transcript;
        const confidence = event.results[event.results.length - 1][0].confidence;
        
        if (event.results[event.results.length - 1].isFinal) {
          const newResult: RecognitionResult = {
            texte: transcript,
            langue: currentLanguage,
            confiance: confidence * 100,
            categorie: detecterCategorie(transcript),
            timestamp: new Date()
          };
          
          setResults(prev => [newResult, ...prev.slice(0, 9)]);
        }
      };
      
      recognitionInstance.onerror = (event: any) => {
        console.error('Erreur reconnaissance vocale:', event.error);
        setIsListening(false);
      };
      
      recognitionInstance.onend = () => {
        setIsListening(false);
      };
      
      setRecognition(recognitionInstance);
    }
  }, [currentLanguage]);

  const detecterCategorie = (texte: string): 'dua' | 'verset' | 'hadith' | 'general' => {
    const texteLower = texte.toLowerCase();
    
    // Détection des invocations
    if (texteLower.includes('allahumma') || texteLower.includes('bismillah') || 
        texteLower.includes('subhanallah') || texteLower.includes('alhamdulillah') ||
        texteLower.includes('اللهم') || texteLower.includes('بسم الله')) {
      return 'dua';
    }
    
    // Détection des versets
    if (texteLower.includes('sourate') || texteLower.includes('verset') ||
        texteLower.includes('سورة') || texteLower.includes('آية')) {
      return 'verset';
    }
    
    // Détection des hadiths
    if (texteLower.includes('prophète') || texteLower.includes('hadith') ||
        texteLower.includes('النبي') || texteLower.includes('حديث')) {
      return 'hadith';
    }
    
    return 'general';
  };

  const startListening = () => {
    if (recognition && isSupported) {
      recognition.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  const languesSupportees = [
    { code: 'fr-FR', nom: 'Français', flag: '🇫🇷' },
    { code: 'ar-SA', nom: 'العربية', flag: '🇸🇦' },
    { code: 'en-US', nom: 'English', flag: '🇺🇸' },
    { code: 'tr-TR', nom: 'Türkçe', flag: '🇹🇷' },
    { code: 'ur-PK', nom: 'اردو', flag: '🇵🇰' },
    { code: 'id-ID', nom: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'ms-MY', nom: 'Bahasa Melayu', flag: '🇲🇾' },
    { code: 'bn-BD', nom: 'বাংলা', flag: '🇧🇩' }
  ];

  const commandesVocales: VoiceCommand[] = [
    {
      commande: "Ouvrir CED Bank",
      action: "Navigation vers le banking islamique",
      exemples: ["Aller à CED Bank", "Ouvrir ma banque", "Voir mes comptes"],
      langues: ['fr-FR', 'ar-SA', 'en-US']
    },
    {
      commande: "Lire le Coran",
      action: "Activation du lecteur Coran",
      exemples: ["Réciter sourate Al-Fatiha", "Écouter le Coran", "تلاوة القرآن"],
      langues: ['fr-FR', 'ar-SA', 'tr-TR', 'ur-PK']
    },
    {
      commande: "Calculer Zakat",
      action: "Ouverture calculateur Zakat",
      exemples: ["Combien de Zakat", "Calculate my Zakat", "حساب الزكاة"],
      langues: ['fr-FR', 'ar-SA', 'en-US', 'tr-TR']
    },
    {
      commande: "Mode Prière",
      action: "Activation mode prière automatique",
      exemples: ["C'est l'heure de la prière", "Prayer time", "وقت الصلاة"],
      langues: ['fr-FR', 'ar-SA', 'en-US', 'tr-TR', 'ur-PK']
    }
  ];

  const getCategorieColor = (categorie: string) => {
    switch (categorie) {
      case 'dua': return 'bg-green-100 text-green-800';
      case 'verset': return 'bg-blue-100 text-blue-800';
      case 'hadith': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategorieIcon = (categorie: string) => {
    switch (categorie) {
      case 'dua': return <Heart className="h-4 w-4" />;
      case 'verset': return <BookOpen className="h-4 w-4" />;
      case 'hadith': return <MessageSquare className="h-4 w-4" />;
      default: return <Mic className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎤 Reconnaissance Vocale Islamique Avancée
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Intelligence vocale respectueuse des valeurs islamiques • 8 langues • Commandes halal
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Badge className={`px-4 py-2 ${isSupported ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              <Mic className="h-4 w-4 mr-2" />
              {isSupported ? 'Supporté' : 'Non supporté'}
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
              <Volume2 className="h-4 w-4 mr-2" />
              {languesSupportees.length} Langues
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Interface de reconnaissance */}
          <Card className="border-2 border-emerald-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mic className="h-6 w-6 text-emerald-600" />
                Interface de Reconnaissance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Sélection langue */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Langue de reconnaissance</label>
                <div className="grid grid-cols-2 gap-2">
                  {languesSupportees.map((langue) => (
                    <Button
                      key={langue.code}
                      variant={currentLanguage === langue.code ? 'default' : 'outline'}
                      onClick={() => setCurrentLanguage(langue.code)}
                      className="justify-start text-sm"
                    >
                      <span className="mr-2">{langue.flag}</span>
                      {langue.nom}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Contrôles d'enregistrement */}
              <div className="text-center space-y-4">
                <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center border-4 transition-all ${
                  isListening 
                    ? 'border-red-500 bg-red-50 animate-pulse' 
                    : 'border-emerald-500 bg-emerald-50'
                }`}>
                  {isListening ? (
                    <MicOff className="h-12 w-12 text-red-600" />
                  ) : (
                    <Mic className="h-12 w-12 text-emerald-600" />
                  )}
                </div>
                
                <div className="space-y-2">
                  {isSupported ? (
                    <div className="flex gap-2 justify-center">
                      <Button
                        onClick={startListening}
                        disabled={isListening}
                        className="bg-emerald-600 hover:bg-emerald-700"
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Commencer l'écoute
                      </Button>
                      <Button
                        onClick={stopListening}
                        disabled={!isListening}
                        variant="outline"
                      >
                        <Pause className="h-4 w-4 mr-2" />
                        Arrêter
                      </Button>
                    </div>
                  ) : (
                    <p className="text-red-600 text-sm">
                      Reconnaissance vocale non supportée par votre navigateur
                    </p>
                  )}
                </div>

                {isListening && (
                  <div className="space-y-2">
                    <p className="text-sm text-emerald-600 font-medium">
                      🎤 Écoute en cours...
                    </p>
                    <div className="flex justify-center space-x-1">
                      <div className="w-2 h-8 bg-emerald-500 rounded animate-pulse"></div>
                      <div className="w-2 h-6 bg-emerald-400 rounded animate-pulse" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-10 bg-emerald-500 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-4 bg-emerald-400 rounded animate-pulse" style={{animationDelay: '0.3s'}}></div>
                      <div className="w-2 h-8 bg-emerald-500 rounded animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Résultats de reconnaissance */}
          <Card className="border-2 border-teal-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-3">
                  <MessageSquare className="h-6 w-6 text-teal-600" />
                  Résultats de Reconnaissance
                </span>
                <Button
                  onClick={() => setResults([])}
                  variant="outline"
                  size="sm"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {results.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Mic className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Aucune reconnaissance effectuée</p>
                    <p className="text-sm">Commencez à parler pour voir les résultats</p>
                  </div>
                ) : (
                  results.map((result, index) => (
                    <Card key={index} className="border border-gray-200">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <Badge className={getCategorieColor(result.categorie)}>
                            {getCategorieIcon(result.categorie)}
                            <span className="ml-1 capitalize">{result.categorie}</span>
                          </Badge>
                          <div className="text-right text-xs text-gray-500">
                            <p>{result.timestamp.toLocaleTimeString('fr-FR')}</p>
                            <div className="flex items-center gap-1 mt-1">
                              <span>Confiance:</span>
                              <Progress value={result.confiance} className="w-12 h-2" />
                              <span>{result.confiance.toFixed(0)}%</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-900 font-medium">
                          "{result.texte}"
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Langue: {languesSupportees.find(l => l.code === result.langue)?.nom}
                        </p>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Commandes vocales disponibles */}
        <Card className="mt-8 border-2 border-cyan-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Settings className="h-6 w-6 text-cyan-600" />
              Commandes Vocales Islamiques Disponibles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commandesVocales.map((commande, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2 text-cyan-800">
                      {commande.commande}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {commande.action}
                    </p>
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-gray-700">Exemples :</p>
                      <ul className="space-y-1">
                        {commande.exemples.map((exemple, i) => (
                          <li key={i} className="text-xs text-gray-600 italic">
                            "• {exemple}"
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {commande.langues.map((lang, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {languesSupportees.find(l => l.code === lang)?.flag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section conformité */}
        <Card className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800">
              🕌 Conformité Islamique & Respect des Valeurs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Détection Spirituelle</h3>
                <p className="text-sm text-gray-600">
                  Reconnaissance automatique des invocations, versets et hadiths
                </p>
              </div>

              <div className="text-center p-4 bg-white rounded-lg">
                <Heart className="h-8 w-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Respect des Valeurs</h3>
                <p className="text-sm text-gray-600">
                  Commandes vocales respectueuses des pratiques islamiques
                </p>
              </div>

              <div className="text-center p-4 bg-white rounded-lg">
                <Mic className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Multilingue Authentique</h3>
                <p className="text-sm text-gray-600">
                  Support complet arabe, français, anglais et 5 autres langues
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-100 rounded-lg">
              <p className="text-green-800 font-medium text-center">
                🎯 Première technologie de reconnaissance vocale spécialement conçue 
                pour respecter et honorer les pratiques religieuses islamiques
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}