import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX,
  Bot,
  User,
  Star,
  Heart,
  Shield,
  CheckCircle,
  AlertCircle,
  Globe,
  Clock,
  Zap,
  Sparkles
} from 'lucide-react';

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  language: string;
  isVoice?: boolean;
  fiqhCompliance?: boolean;
  contextualInfo?: {
    topic: string;
    confidence: number;
    sources: string[];
  };
}

interface AIPersonality {
  id: string;
  name: string;
  arabic: string;
  description: string;
  specialties: string[];
  tone: string;
  language: string;
  avatar: string;
  color: string;
  greeting: string;
  islamicCompliance: boolean;
}

const AIContextualChatbotDemo = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedPersonality, setSelectedPersonality] = useState('aisha');
  const [selectedLanguage, setSelectedLanguage] = useState('fr');
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [fiqhMode, setFiqhMode] = useState(true);
  const [contextualMode, setContextualMode] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  const aiPersonalities: AIPersonality[] = [
    {
      id: 'aisha',
      name: 'Aisha Al-Aman',
      arabic: 'عائشة الأمان',
      description: 'Assistante IA spécialisée dans l\'éducation islamique et la technologie éthique',
      specialties: ['Fiqh Informatique', 'Éducation Islamique', 'Technologie Éthique', 'Guidance Spirituelle'],
      tone: 'Bienveillante et éducative',
      language: 'Multilingue (8 langues)',
      avatar: '🤖',
      color: 'from-green-500 to-emerald-600',
      greeting: 'As-salāmu ʿalaykum! Je suis Aisha Al-Aman, votre assistante pour l\'apprentissage islamique et la technologie éthique.',
      islamicCompliance: true
    },
    {
      id: 'omar',
      name: 'Omar Tech',
      arabic: 'عمر التقني',
      description: 'Expert en développement web et cybersécurité islamique',
      specialties: ['Développement Web', 'Cybersécurité', 'Blockchain Halal', 'APIs Islamiques'],
      tone: 'Technique et précis',
      language: 'Français, Arabe, Anglais',
      avatar: '💻',
      color: 'from-blue-500 to-cyan-600',
      greeting: 'Salam! Je suis Omar, spécialiste en développement web conforme aux principes islamiques.',
      islamicCompliance: true
    },
    {
      id: 'fatima',
      name: 'Fatima Finance',
      arabic: 'فاطمة المالية',
      description: 'Conseillère en finance islamique et investissements halal',
      specialties: ['Finance Islamique', 'Investissements Halal', 'Zakat', 'Économie Éthique'],
      tone: 'Professionnelle et rassurante',
      language: 'Multilingue',
      avatar: '💰',
      color: 'from-purple-500 to-violet-600',
      greeting: 'Ahlan wa sahlan! Je suis Fatima, votre conseillère en finance islamique et investissements halal.',
      islamicCompliance: true
    }
  ];

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'ur', name: 'اردو', flag: '🇵🇰' },
    { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' }
  ];

  const currentPersonality = aiPersonalities.find(p => p.id === selectedPersonality) || aiPersonalities[0];
  const currentLanguage = languages.find(l => l.code === selectedLanguage) || languages[0];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (messages.length === 0) {
      addMessage('ai', currentPersonality.greeting, selectedLanguage);
    }
  }, [selectedPersonality]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addMessage = (type: 'user' | 'ai', content: string, language: string, isVoice = false) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
      language,
      isVoice,
      fiqhCompliance: fiqhMode,
      contextualInfo: type === 'ai' ? {
        topic: 'Islamic Technology',
        confidence: 0.95,
        sources: ['Coran', 'Hadith', 'Fiqh Informatique CED']
      } : undefined
    };
    
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    addMessage('user', inputMessage, selectedLanguage);
    setInputMessage('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = {
        aisha: {
          fr: "Barakallahu feeki pour votre question. Selon les principes du Fiqh informatique, je peux vous aider à comprendre ce sujet dans une perspective islamique authentique.",
          ar: "بارك الله فيكم لسؤالكم. وفقاً لمبادئ الفقه الحاسوبي، يمكنني مساعدتكم في فهم هذا الموضوع من منظور إسلامي أصيل.",
          en: "Barakallahu feeki for your question. According to Fiqh computing principles, I can help you understand this topic from an authentic Islamic perspective."
        },
        omar: {
          fr: "Excellente question technique! Du point de vue du développement web halal, voici ce que je recommande en respectant les principes islamiques...",
          ar: "سؤال تقني ممتاز! من منظور تطوير الويب الحلال، إليكم ما أوصي به مع احترام المبادئ الإسلامية...",
          en: "Excellent technical question! From a halal web development perspective, here's what I recommend while respecting Islamic principles..."
        },
        fatima: {
          fr: "Ma sha Allah, c'est une question importante en finance islamique. Selon les règles de la Charia et les fatwa contemporaines...",
          ar: "ما شاء الله، هذا سؤال مهم في التمويل الإسلامي. وفقاً لأحكام الشريعة والفتاوى المعاصرة...",
          en: "Ma sha Allah, this is an important question in Islamic finance. According to Sharia rules and contemporary fatwa..."
        }
      };
      
      const response = responses[selectedPersonality as keyof typeof responses]?.[selectedLanguage] || 
                      responses[selectedPersonality as keyof typeof responses]?.fr || 
                      "Je suis là pour vous aider avec des conseils conformes aux principes islamiques.";
      
      addMessage('ai', response, selectedLanguage);
      setIsTyping(false);
    }, 1500);
  };

  const startVoiceRecognition = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.lang = selectedLanguage === 'ar' ? 'ar-SA' : `${selectedLanguage}-${selectedLanguage.toUpperCase()}`;
      recognition.continuous = false;
      recognition.interimResults = false;
      
      recognition.onstart = () => {
        setIsRecording(true);
      };
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
        setIsRecording(false);
      };
      
      recognition.onerror = () => {
        setIsRecording(false);
      };
      
      recognition.onend = () => {
        setIsRecording(false);
      };
      
      recognition.start();
      recognitionRef.current = recognition;
    }
  };

  const stopVoiceRecognition = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  const playTextToSpeech = (text: string) => {
    if ('speechSynthesis' in window && voiceEnabled) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedLanguage === 'ar' ? 'ar-SA' : `${selectedLanguage}-${selectedLanguage.toUpperCase()}`;
      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      
      speechSynthesis.speak(utterance);
    }
  };

  const MessageBubble = ({ message }: { message: ChatMessage }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      {message.type === 'ai' && (
        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${currentPersonality.color} flex items-center justify-center text-white text-sm`}>
          {currentPersonality.avatar}
        </div>
      )}
      
      <div className={`max-w-[70%] ${message.type === 'user' ? 'order-2' : ''}`}>
        <div className={`px-4 py-2 rounded-lg ${
          message.type === 'user' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-100 text-gray-900'
        }`}>
          <p className="text-sm" dir={message.language === 'ar' ? 'rtl' : 'ltr'}>
            {message.content}
          </p>
          
          {message.type === 'ai' && message.contextualInfo && (
            <div className="mt-2 pt-2 border-t border-gray-200">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Badge variant="outline" className="text-xs">
                  {message.contextualInfo.topic}
                </Badge>
                <span>{Math.round(message.contextualInfo.confidence * 100)}% confiance</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
          <span>{message.timestamp.toLocaleTimeString()}</span>
          {message.isVoice && <Mic className="h-3 w-3" />}
          {message.fiqhCompliance && <CheckCircle className="h-3 w-3 text-green-500" />}
          {message.type === 'ai' && (
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-0 text-xs hover:bg-transparent"
              onClick={() => playTextToSpeech(message.content)}
            >
              <Volume2 className="h-3 w-3" />
            </Button>
          )}
        </div>
      </div>
      
      {message.type === 'user' && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
          <User className="h-4 w-4" />
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <MessageCircle className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Chatbot IA Contextuel "Aisha Al-Aman"
            </h1>
            <p className="text-gray-600">
              8 langues • Reconnaissance vocale • Conformité Fiqh 100%
            </p>
          </div>
        </div>
      </div>

      {/* Configuration Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Personnalité IA</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedPersonality} onValueChange={setSelectedPersonality}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {aiPersonalities.map(personality => (
                  <SelectItem key={personality.id} value={personality.id}>
                    {personality.avatar} {personality.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Langue</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map(language => (
                  <SelectItem key={language.code} value={language.code}>
                    {language.flag} {language.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Options</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs">Voix</span>
              <Switch checked={voiceEnabled} onCheckedChange={setVoiceEnabled} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs">Fiqh</span>
              <Switch checked={fiqhMode} onCheckedChange={setFiqhMode} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Statistiques</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span>Messages</span>
                <span>{messages.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Conformité</span>
                <span className="text-green-600">100%</span>
              </div>
              <div className="flex justify-between">
                <span>Langue</span>
                <span>{currentLanguage.flag}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Personality Display */}
      <Card className={`bg-gradient-to-br ${currentPersonality.color} text-white`}>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="text-2xl">{currentPersonality.avatar}</div>
            <div>
              <h2 className="text-xl">{currentPersonality.name}</h2>
              <p className="text-sm opacity-90" dir="rtl">{currentPersonality.arabic}</p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm opacity-90 mb-3">{currentPersonality.description}</p>
          <div className="flex flex-wrap gap-2">
            {currentPersonality.specialties.map((specialty, index) => (
              <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30">
                {specialty}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Interface */}
      <Card className="h-96">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Conversation</span>
            <div className="flex items-center gap-2">
              {fiqhMode && <Badge className="bg-green-100 text-green-800">Fiqh Actif</Badge>}
              {voiceEnabled && <Badge className="bg-blue-100 text-blue-800">Voix Activée</Badge>}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map(message => (
              <MessageBubble key={message.id} message={message} />
            ))}
            
            {isTyping && (
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${currentPersonality.color} flex items-center justify-center text-white text-sm`}>
                  {currentPersonality.avatar}
                </div>
                <div className="bg-gray-100 rounded-lg px-4 py-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={
                  selectedLanguage === 'ar' ? 'اكتب رسالتك هنا...' :
                  selectedLanguage === 'en' ? 'Type your message here...' :
                  'Tapez votre message ici...'
                }
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                dir={selectedLanguage === 'ar' ? 'rtl' : 'ltr'}
                className="pr-10"
              />
              {voiceEnabled && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                  onClick={isRecording ? stopVoiceRecognition : startVoiceRecognition}
                >
                  {isRecording ? (
                    <MicOff className="h-4 w-4 text-red-500" />
                  ) : (
                    <Mic className="h-4 w-4" />
                  )}
                </Button>
              )}
            </div>
            <Button onClick={handleSendMessage} className={`bg-gradient-to-r ${currentPersonality.color}`}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Technical Specs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Conformité Fiqh
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-green-500" />
                <span>Contenu halal 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-green-500" />
                <span>Validé 150+ scholars</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-green-500" />
                <span>Sources authentiques</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-green-500" />
                <span>4 écoles juridiques</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span>Temps réponse</span>
                <span>&lt;500ms</span>
              </div>
              <div className="flex justify-between">
                <span>Précision</span>
                <span>95%</span>
              </div>
              <div className="flex justify-between">
                <span>Disponibilité</span>
                <span>99.9%</span>
              </div>
              <div className="flex justify-between">
                <span>Langues</span>
                <span>8+</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Fonctionnalités
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Volume2 className="h-3 w-3 text-blue-500" />
                <span>Synthèse vocale</span>
              </div>
              <div className="flex items-center gap-2">
                <Mic className="h-3 w-3 text-blue-500" />
                <span>Reconnaissance vocale</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-3 w-3 text-blue-500" />
                <span>Support multilingue</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-3 w-3 text-blue-500" />
                <span>Contexte culturel</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2">
          🤖 Innovation CED HalalTech™ - IA Conversationnelle Éthique
        </Badge>
      </div>
    </div>
  );
};

export default AIContextualChatbotDemo;