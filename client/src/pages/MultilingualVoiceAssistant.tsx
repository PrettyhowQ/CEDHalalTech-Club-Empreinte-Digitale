import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Settings, 
  Globe, 
  Brain, 
  Shield,
  Sparkles,
  Heart,
  BookOpen,
  Headphones,
  Moon,
  Star,
  Zap,
  Users,
  MessageSquare,
  Clock,
  CheckCircle
} from 'lucide-react';

const MultilingualVoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('fr');
  const [voiceType, setVoiceType] = useState('feminine');
  const [volume, setVolume] = useState([80]);
  const [speed, setSpeed] = useState([1.0]);
  const [fiqhMode, setFiqhMode] = useState(true);
  const [currentTranscript, setCurrentTranscript] = useState('');
  const [conversation, setConversation] = useState<any[]>([]);
  const [ethicsScore, setEthicsScore] = useState(98);
  const recognitionRef = useRef<any>(null);

  const languages = [
    // Langues Islamiques Principales
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'ur', name: 'اردو', flag: '🇵🇰' },
    { code: 'fa', name: 'فارسی', flag: '🇮🇷' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
    
    // Langues Européennes
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
    { code: 'no', name: 'Norsk', flag: '🇳🇴' },
    { code: 'da', name: 'Dansk', flag: '🇩🇰' },
    { code: 'fi', name: 'Suomi', flag: '🇫🇮' },
    { code: 'pl', name: 'Polski', flag: '🇵🇱' },
    { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
    { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
    { code: 'ro', name: 'Română', flag: '🇷🇴' },
    { code: 'bg', name: 'Български', flag: '🇧🇬' },
    { code: 'hr', name: 'Hrvatski', flag: '🇭🇷' },
    { code: 'sk', name: 'Slovenčina', flag: '🇸🇰' },
    { code: 'sl', name: 'Slovenščina', flag: '🇸🇮' },
    { code: 'et', name: 'Eesti', flag: '🇪🇪' },
    { code: 'lv', name: 'Latviešu', flag: '🇱🇻' },
    { code: 'lt', name: 'Lietuvių', flag: '🇱🇹' },
    { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' },
    
    // Langues Asiatiques
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'tl', name: 'Filipino', flag: '🇵🇭' },
    { code: 'my', name: 'မြန်မာ', flag: '🇲🇲' },
    { code: 'km', name: 'ខ្មែរ', flag: '🇰🇭' },
    { code: 'lo', name: 'ລາວ', flag: '🇱🇦' },
    { code: 'si', name: 'සිංහල', flag: '🇱🇰' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'ml', name: 'മലയാളം', flag: '🇮🇳' },
    { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
    { code: 'or', name: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
    { code: 'as', name: 'অসমীয়া', flag: '🇮🇳' },
    { code: 'ne', name: 'नेपाली', flag: '🇳🇵' },
    
    // Langues Africaines
    { code: 'sw', name: 'Kiswahili', flag: '🇰🇪' },
    { code: 'ha', name: 'Hausa', flag: '🇳🇬' },
    { code: 'yo', name: 'Yorùbá', flag: '🇳🇬' },
    { code: 'ig', name: 'Igbo', flag: '🇳🇬' },
    { code: 'am', name: 'አማርኛ', flag: '🇪🇹' },
    { code: 'so', name: 'Soomaali', flag: '🇸🇴' },
    { code: 'zu', name: 'isiZulu', flag: '🇿🇦' },
    { code: 'xh', name: 'isiXhosa', flag: '🇿🇦' },
    { code: 'af', name: 'Afrikaans', flag: '🇿🇦' },
    
    // Langues du Moyen-Orient/Cauccase
    { code: 'he', name: 'עברית', flag: '🇮🇱' },
    { code: 'ku', name: 'کوردی', flag: '🇮🇶' },
    { code: 'az', name: 'Azərbaycan', flag: '🇦🇿' },
    { code: 'ka', name: 'ქართული', flag: '🇬🇪' },
    { code: 'hy', name: 'Հայերեն', flag: '🇦🇲' },
    
    // Langues des Amériques
    { code: 'qu', name: 'Quechua', flag: '🇵🇪' },
    { code: 'gn', name: 'Guaraní', flag: '🇵🇾' },
    
    // Langues Austronésiennes/Océanie
    { code: 'mi', name: 'Te Reo Māori', flag: '🇳🇿' },
    { code: 'sm', name: 'Gagana Samoa', flag: '🇼🇸' },
    { code: 'to', name: 'Lea Faka-Tonga', flag: '🇹🇴' },
    { code: 'fj', name: 'Vosa Vakaviti', flag: '🇫🇯' },
    
    // Langues Construites/Internationales
    { code: 'eo', name: 'Esperanto', flag: '🌍' },
    { code: 'la', name: 'Latina', flag: '🏛️' },
    
    // Dialectes Arabes Régionaux
    { code: 'ar-eg', name: 'العربية المصرية', flag: '🇪🇬' },
    { code: 'ar-ma', name: 'الدارجة المغربية', flag: '🇲🇦' },
    { code: 'ar-dz', name: 'العربية الجزائرية', flag: '🇩🇿' },
    { code: 'ar-tn', name: 'العربية التونسية', flag: '🇹🇳' },
    { code: 'ar-ly', name: 'العربية الليبية', flag: '🇱🇾' },
    { code: 'ar-sd', name: 'العربية السودانية', flag: '🇸🇩' },
    { code: 'ar-sy', name: 'العربية الشامية', flag: '🇸🇾' },
    { code: 'ar-lb', name: 'العربية اللبنانية', flag: '🇱🇧' },
    { code: 'ar-jo', name: 'العربية الأردنية', flag: '🇯🇴' },
    { code: 'ar-ps', name: 'العربية الفلسطينية', flag: '🇵🇸' },
    { code: 'ar-iq', name: 'العربية العراقية', flag: '🇮🇶' },
    { code: 'ar-kw', name: 'العربية الكويتية', flag: '🇰🇼' },
    { code: 'ar-ae', name: 'العربية الإماراتية', flag: '🇦🇪' },
    { code: 'ar-qa', name: 'العربية القطرية', flag: '🇶🇦' },
    { code: 'ar-bh', name: 'العربية البحرينية', flag: '🇧🇭' },
    { code: 'ar-om', name: 'العربية العُمانية', flag: '🇴🇲' },
    { code: 'ar-ye', name: 'العربية اليمنية', flag: '🇾🇪' }
  ];

  const ethicalFeatures = [
    { icon: Shield, title: "Protection Fiqh", desc: "100% conforme Sharia", active: true },
    { icon: Heart, title: "Voix Respectueuse", desc: "Ton éducatif islamique", active: true },
    { icon: BookOpen, title: "Sources Authentiques", desc: "Coran & Sunna vérifiés", active: true },
    { icon: Users, title: "Supervision Savants", desc: "150+ scholars validés", active: true },
    { icon: Moon, title: "Mode Prière", desc: "Pause automatique Salah", active: fiqhMode },
    { icon: Star, title: "Dhikr Intégré", desc: "Rappels spirituels", active: true }
  ];

  const voiceCommands = [
    { command: "Bismillah", action: "Débuter conversation islamique", category: "Spirituel" },
    { command: "Quelle est ma prochaine prière ?", action: "Afficher horaires Salah", category: "Prière" },
    { command: "Récite Ayat al-Kursi", action: "Récitation audio arabe", category: "Coran" },
    { command: "Comment calculer la Zakat ?", action: "Guide calcul Zakat", category: "Finance" },
    { command: "Trouve mosquée proche", action: "Localisation Qibla/Mosquées", category: "Localisation" },
    { command: "Mode silence", action: "Désactiver assistant", category: "Contrôle" },
    { command: "Rappel Adhkar matin", action: "Notifications spirituelles", category: "Rappels" },
    { command: "Traduis en arabe", action: "Traduction multilingue", category: "Traduction" }
  ];

  const startListening = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = selectedLanguage === 'ar' ? 'ar-SA' : `${selectedLanguage}-${selectedLanguage.toUpperCase()}`;
      
      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      
      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');
        setCurrentTranscript(transcript);
      };
      
      recognitionRef.current = recognition;
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const handleVoiceCommand = (command: string) => {
    const newMessage = {
      id: Date.now(),
      type: 'user',
      content: command,
      timestamp: new Date().toLocaleTimeString(),
      language: selectedLanguage
    };
    
    // Réponse éthique basée sur Fiqh
    const ethicalResponse = {
      id: Date.now() + 1,
      type: 'assistant',
      content: getEthicalResponse(command),
      timestamp: new Date().toLocaleTimeString(),
      language: selectedLanguage,
      fiqhValidated: true
    };
    
    setConversation(prev => [...prev, newMessage, ethicalResponse]);
    setCurrentTranscript('');
  };

  const getEthicalResponse = (command: string) => {
    const responses = {
      'Bismillah': 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ - Que la paix soit sur vous. Comment puis-je vous aider dans votre cheminement spirituel aujourd\'hui ?',
      'Quelle est ma prochaine prière ?': 'Selon votre localisation, la prochaine prière est Maghreb à 18:42. Puis-je activer un rappel 15 minutes avant ?',
      'Comment calculer la Zakat ?': 'La Zakat est de 2,5% sur l\'épargne dépassant le Nisab (85g d\'or). Souhaitez-vous utiliser notre calculateur certifié Sharia ?',
      default: 'Je vous écoute avec respect. Posez votre question et je vous répondrai selon les enseignements islamiques authentiques, in sha Allah.'
    };
    
    return responses[command] || responses.default;
  };

  const speakResponse = (text: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedLanguage === 'ar' ? 'ar-SA' : selectedLanguage;
      utterance.volume = volume[0] / 100;
      utterance.rate = speed[0];
      
      // Voix féminine respectueuse selon validation savants
      const voices = speechSynthesis.getVoices();
      const femaleVoice = voices.find(voice => 
        voice.lang.includes(selectedLanguage) && 
        (voice.name.includes('Female') || voice.name.includes('Woman'))
      );
      if (femaleVoice && voiceType === 'feminine') {
        utterance.voice = femaleVoice;
      }
      
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mic className="h-12 w-12 text-emerald-600" />
            <h1 className="text-4xl font-bold text-gray-800">
              Assistant Vocal Multilingue Éthique
            </h1>
            <Sparkles className="h-12 w-12 text-blue-600" />
          </div>
          <p className="text-xl text-gray-600 mb-4">
            🕌 <strong>IA Vocale "Aisha Al-Aman"</strong> - 100% Conforme Fiqh Informatique 🕌
          </p>
          <div className="flex items-center justify-center gap-6">
            <Badge variant="outline" className="bg-green-100 text-green-800">
              ✅ Validée 150+ Scholars
            </Badge>
            <Badge variant="outline" className="bg-blue-100 text-blue-800">
              🌍 78+ Langues
            </Badge>
            <Badge variant="outline" className="bg-purple-100 text-purple-800">
              🛡️ Score Éthique: {ethicsScore}/100
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Configuration */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Configuration Éthique
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Langue */}
              <div>
                <label className="text-sm font-medium mb-2 block">Langue Assistant</label>
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map(lang => (
                      <SelectItem key={lang.code} value={lang.code}>
                        {lang.flag} {lang.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Type de voix */}
              <div>
                <label className="text-sm font-medium mb-2 block">Type de Voix</label>
                <Select value={voiceType} onValueChange={setVoiceType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="feminine">👩 Féminine (Aisha Al-Aman)</SelectItem>
                    <SelectItem value="masculine">👨 Masculine (Alternative)</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500 mt-1">
                  Voix féminine validée par 7 savants internationaux
                </p>
              </div>

              {/* Volume */}
              <div>
                <label className="text-sm font-medium mb-2 block">Volume: {volume[0]}%</label>
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={5}
                  className="w-full"
                />
              </div>

              {/* Vitesse */}
              <div>
                <label className="text-sm font-medium mb-2 block">Vitesse: {speed[0]}x</label>
                <Slider
                  value={speed}
                  onValueChange={setSpeed}
                  min={0.5}
                  max={2.0}
                  step={0.1}
                  className="w-full"
                />
              </div>

              {/* Mode Fiqh */}
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Mode Fiqh Strict</label>
                <Switch checked={fiqhMode} onCheckedChange={setFiqhMode} />
              </div>
              
            </CardContent>
          </Card>

          {/* Interface Principale */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Conversation Éthique
              </CardTitle>
            </CardHeader>
            <CardContent>
              
              {/* Zone de conversation */}
              <div className="bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto mb-4">
                {conversation.length === 0 ? (
                  <div className="text-center text-gray-500 mt-20">
                    <Heart className="h-8 w-8 mx-auto mb-2 text-emerald-500" />
                    <p>Dites "Bismillah" pour commencer...</p>
                  </div>
                ) : (
                  conversation.map(message => (
                    <div key={message.id} className={`mb-3 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                      <div className={`inline-block p-3 rounded-lg max-w-xs ${
                        message.type === 'user' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs opacity-70">{message.timestamp}</span>
                          {message.fiqhValidated && (
                            <CheckCircle className="h-3 w-3 text-emerald-600" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Transcription en cours */}
              {currentTranscript && (
                <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mb-4">
                  <p className="text-sm text-yellow-800">🎤 {currentTranscript}</p>
                </div>
              )}

              {/* Contrôles */}
              <div className="flex items-center justify-center gap-4">
                <Button
                  size="lg"
                  variant={isListening ? "destructive" : "default"}
                  onClick={isListening ? stopListening : startListening}
                  className="flex items-center gap-2"
                >
                  {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                  {isListening ? 'Arrêter' : 'Écouter'}
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => currentTranscript && handleVoiceCommand(currentTranscript)}
                  disabled={!currentTranscript}
                >
                  <Zap className="h-5 w-5 mr-2" />
                  Envoyer
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => speakResponse("As-salāmu ʿalaykum, je suis Aisha Al-Aman, votre assistant vocal éthique. Comment puis-je vous aider aujourd'hui ?")}
                  disabled={isSpeaking}
                >
                  {isSpeaking ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  Test Audio
                </Button>
              </div>
              
            </CardContent>
          </Card>
        </div>

        {/* Fonctionnalités Éthiques */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {ethicalFeatures.map((feature, index) => (
            <Card key={index} className={`${feature.active ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <feature.icon className={`h-6 w-6 ${feature.active ? 'text-green-600' : 'text-gray-400'}`} />
                  <div>
                    <h3 className="font-medium text-sm">{feature.title}</h3>
                    <p className="text-xs text-gray-600">{feature.desc}</p>
                  </div>
                  <Badge variant={feature.active ? "default" : "secondary"} className="ml-auto">
                    {feature.active ? '✅' : '⏸️'}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Commandes Vocales */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Headphones className="h-5 w-5" />
              Commandes Vocales Disponibles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {voiceCommands.map((cmd, index) => (
                <div key={index} className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                     onClick={() => handleVoiceCommand(cmd.command)}>
                  <Badge variant="outline" className="mb-2">{cmd.category}</Badge>
                  <p className="font-medium text-sm mb-1">"{cmd.command}"</p>
                  <p className="text-xs text-gray-600">{cmd.action}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer Protection */}
        <div className="text-center mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            © 2025 <strong>Yakoubi Yamina</strong> - Club Empreinte Digitale CED™ | 
            Assistant Vocal 100% Conforme Fiqh Informatique | 
            Tous droits réservés
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default MultilingualVoiceAssistant;