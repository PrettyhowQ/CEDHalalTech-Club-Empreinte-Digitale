import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MessageSquare, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Send, 
  Heart, 
  BookOpen, 
  Clock, 
  Compass, 
  Star,
  Play,
  Pause,
  RotateCcw,
  Settings,
  Moon,
  Sun,
  User,
  Bot
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  category?: 'spiritual' | 'guidance' | 'reminder' | 'dua' | 'hadith' | 'advice';
  audioUrl?: string;
}

interface SpiritualFeature {
  id: string;
  title: string;
  description: string;
  icon: any;
  category: string;
  isActive: boolean;
}

export default function AssistantIASpiritual() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Assalamu alaykum ! Je suis votre assistant spirituel IA, conçu pour vous accompagner dans votre cheminement islamique tout en respectant les principes du Tawhid, de la sagesse et de la pudeur. Comment puis-je vous aider aujourd\'hui ?',
      timestamp: new Date(),
      category: 'spiritual'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [selectedMode, setSelectedMode] = useState('chat');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const spiritualFeatures: SpiritualFeature[] = [
    {
      id: 'tawhid',
      title: 'Rappels Tawhid',
      description: 'Renforcement de l\'unicité d\'Allah dans la vie quotidienne',
      icon: Star,
      category: 'spiritual',
      isActive: true
    },
    {
      id: 'duas',
      title: 'Duas Authentiques',
      description: 'Invocations selon le Coran et la Sunna',
      icon: Heart,
      category: 'spiritual',
      isActive: true
    },
    {
      id: 'hadiths',
      title: 'Hadiths Guidances',
      description: 'Sagesse prophétique pour les situations actuelles',
      icon: BookOpen,
      category: 'guidance',
      isActive: true
    },
    {
      id: 'prayers',
      title: 'Rappels Prières',
      description: 'Notifications respectueuses pour les 5 prières',
      icon: Clock,
      category: 'reminder',
      isActive: true
    },
    {
      id: 'qibla',
      title: 'Direction Qibla',
      description: 'Orientation vers La Mecque où que vous soyez',
      icon: Compass,
      category: 'guidance',
      isActive: true
    },
    {
      id: 'mental-health',
      title: 'Aide Mentale Islamique',
      description: 'Support émotionnel selon les principes islamiques',
      icon: Heart,
      category: 'advice',
      isActive: true
    }
  ];

  const quickResponses = [
    { text: 'Rappelle-moi une invocation du matin', category: 'dua' },
    { text: 'Comment rester productif en respectant ma spiritualité ?', category: 'advice' },
    { text: 'Quelle est la sagesse derrière cette épreuve ?', category: 'guidance' },
    { text: 'Aide-moi à organiser ma journée autour des prières', category: 'reminder' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    // Simuler une réponse de l'IA
    setTimeout(() => {
      const responses = {
        'dua': 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ\n\n"Allahumma a\'inni ala dhikrika wa shukrika wa husni \'ibadatika"\n\n"Ô Allah, aide-moi à T\'invoquer, à Te remercier et à T\'adorer de la meilleure façon." Cette invocation nous enseigne à demander l\'aide d\'Allah pour rester connecté spirituellement.',
        'productivity': 'Barakallahu fik ! Pour allier productivité et spiritualité :\n\n1. **Commencez par "Bismillah"** - Invoquez Allah avant chaque tâche\n2. **Planifiez autour des 5 prières** - Elles structurent naturellement votre journée\n3. **Intention (Niyyah)** - Purifiez votre intention : travailler pour plaire à Allah\n4. **Pauses dhikr** - 5 minutes de rappel d\'Allah entre les tâches\n5. **Gratitude** - Remerciez Allah pour chaque accomplissement',
        'guidance': 'SubhanAllah, les épreuves sont une miséricorde d\'Allah. Le Prophète ﷺ a dit : "Étonnant est le cas du croyant, toute chose est bien pour lui, et cela n\'est donné qu\'au croyant : s\'il lui arrive un bonheur, il remercie et c\'est un bien pour lui, et s\'il lui arrive un malheur, il patiente et c\'est un bien pour lui."\n\nLes épreuves purifient nos cœurs, nous rapprochent d\'Allah et augmentent notre foi. Elles nous enseignent la patience, l\'humilité et la dépendance envers notre Créateur.',
        'organization': 'Excellente question ! Voici comment organiser votre journée autour des prières :\n\n**Fajr (Aube)** : Planification de la journée + dhikr matinal\n**Dhuhr (Midi)** : Pause spirituelle, réflexion sur la matinée\n**Asr (Après-midi)** : Moment de gratitude et d\'évaluation\n**Maghrib (Coucher)** : Transition travail → famille/repos\n**Isha (Nuit)** : Bilan de la journée + istighfar\n\nChaque prière devient un rappel naturel pour rééquilibrer vos priorités spirituelles et mondaines.'
      };

      let responseContent = responses.productivity; // Réponse par défaut
      let category: Message['category'] = 'advice';

      if (inputMessage.toLowerCase().includes('invocation') || inputMessage.toLowerCase().includes('dua')) {
        responseContent = responses.dua;
        category = 'dua';
      } else if (inputMessage.toLowerCase().includes('épreuve') || inputMessage.toLowerCase().includes('difficulté')) {
        responseContent = responses.guidance;
        category = 'guidance';
      } else if (inputMessage.toLowerCase().includes('organiser') || inputMessage.toLowerCase().includes('prière')) {
        responseContent = responses.organization;
        category = 'reminder';
      }

      const assistantResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: responseContent,
        timestamp: new Date(),
        category
      };

      setMessages(prev => [...prev, assistantResponse]);

      if (voiceEnabled && selectedMode === 'voice') {
        speakMessage(responseContent);
      }
    }, 1000);
  };

  const handleQuickResponse = (responseText: string) => {
    setInputMessage(responseText);
  };

  const startListening = () => {
    setIsListening(true);
    // Simulation de reconnaissance vocale
    setTimeout(() => {
      setInputMessage("Comment puis-je rester connecté spirituellement pendant mes journées chargées ?");
      setIsListening(false);
    }, 3000);
  };

  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'fr-FR';
      utterance.rate = 0.9;
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent">
                🕌 Assistant IA Spirituel & Éthique
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                100% Conforme Sharia
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant={selectedMode === 'chat' ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedMode('chat')}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Chat
              </Button>
              <Button
                variant={selectedMode === 'voice' ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedMode('voice')}
              >
                <Mic className="h-4 w-4 mr-2" />
                Vocal
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setVoiceEnabled(!voiceEnabled)}
              >
                {voiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Panneau des fonctionnalités spirituelles */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Fonctionnalités Spirituelles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {spiritualFeatures.map((feature) => (
                    <div key={feature.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <div className={`p-2 rounded-lg ${feature.isActive ? 'bg-emerald-100 dark:bg-emerald-900' : 'bg-gray-100 dark:bg-gray-800'}`}>
                        <feature.icon className={`h-4 w-4 ${feature.isActive ? 'text-emerald-600' : 'text-gray-400'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{feature.title}</div>
                        <div className="text-xs text-muted-foreground">{feature.description}</div>
                      </div>
                      <Badge variant={feature.isActive ? "secondary" : "outline"} className="text-xs">
                        {feature.isActive ? 'Actif' : 'Inactif'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Réponses rapides */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Suggestions Rapides</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {quickResponses.map((response, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full text-left h-auto p-3 justify-start"
                      onClick={() => handleQuickResponse(response.text)}
                    >
                      <div className="text-xs">{response.text}</div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Zone de chat principale */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center justify-between">
                  <CardTitle>Conversation Spirituelle</CardTitle>
                  <div className="flex items-center space-x-2">
                    {selectedMode === 'voice' && (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        Mode Vocal Activé
                      </Badge>
                    )}
                    {isSpeaking && (
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800 animate-pulse">
                        En Cours de Lecture
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-6">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] rounded-lg p-4 ${
                        message.type === 'user' 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-gray-100 dark:bg-gray-800'
                      }`}>
                        <div className="flex items-start space-x-2">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            message.type === 'user' ? 'bg-emerald-700' : 'bg-emerald-100 dark:bg-emerald-900'
                          }`}>
                            {message.type === 'user' ? (
                              <User className="h-3 w-3 text-white" />
                            ) : (
                              <Bot className="h-3 w-3 text-emerald-600" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                            <div className="flex items-center justify-between mt-2">
                              <div className="text-xs opacity-70">
                                {message.timestamp.toLocaleTimeString('fr-FR', { 
                                  hour: '2-digit', 
                                  minute: '2-digit' 
                                })}
                              </div>
                              {message.category && (
                                <Badge variant="outline" className="text-xs">
                                  {message.category}
                                </Badge>
                              )}
                            </div>
                          </div>
                          {message.type === 'assistant' && voiceEnabled && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => speakMessage(message.content)}
                              className="p-1"
                            >
                              <Volume2 className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              {/* Zone de saisie */}
              <div className="border-t border-gray-200 dark:border-gray-700 p-4 flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 relative">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Posez votre question spirituelle..."
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="pr-20"
                    />
                    {selectedMode === 'voice' && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`absolute right-12 top-1/2 transform -translate-y-1/2 ${isListening ? 'text-red-600' : ''}`}
                        onClick={isListening ? () => setIsListening(false) : startListening}
                      >
                        {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                      </Button>
                    )}
                  </div>
                  
                  <Button onClick={handleSendMessage} disabled={!inputMessage.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                  
                  {isSpeaking && (
                    <Button variant="outline" onClick={stopSpeaking}>
                      <Pause className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                
                {isListening && (
                  <div className="mt-2 text-center">
                    <Badge variant="secondary" className="bg-red-100 text-red-800 animate-pulse">
                      🎤 Écoute en cours... Parlez maintenant
                    </Badge>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>

        {/* Section informative */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-500" />
                Principes Tawhid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li>• Unicité d'Allah dans l'adoration</li>
                <li>• Dépendance totale envers le Créateur</li>
                <li>• Reconnaissance de Sa souveraineté</li>
                <li>• Soumission sincère à Sa volonté</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Heart className="h-5 w-5 mr-2 text-red-500" />
                Sagesse Islamique
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li>• Modération en toute chose</li>
                <li>• Patience dans les épreuves</li>
                <li>• Gratitude dans l'aisance</li>
                <li>• Recherche du savoir bénéfique</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                Pudeur & Maslaha
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li>• Respect des limites islamiques</li>
                <li>• Recherche de l'intérêt général</li>
                <li>• Protection de la dignité</li>
                <li>• Utilisation bénéfique de la technologie</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer avec mentions légales */}
      <div className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © Yakoubi Yamina – Tous droits réservés | All rights reserved | جميع الحقوق محفوظة | 版权所有
            </p>
            <p className="text-xs text-muted-foreground">
              Respect du RGPD | Hébergement suisse | Confidentialité des données | Respect total du Fiqh
            </p>
            <div className="flex justify-center space-x-4 text-xs">
              <Badge variant="secondary">100% Conforme Sharia</Badge>
              <Badge variant="outline">IA Éthique Islamique</Badge>
              <Badge variant="outline">Support Spirituel 24/7</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}