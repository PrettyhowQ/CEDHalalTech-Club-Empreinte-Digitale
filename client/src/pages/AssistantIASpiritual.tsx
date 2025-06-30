import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MessageCircle,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Star,
  Heart,
  Brain,
  Shield,
  BookOpen,
  Clock,
  Send,
  Bot,
  User,
  Compass,
  Sunrise,
  Moon,
  Calendar,
  Music,
  Play,
  Pause,
  Settings,
  Languages,
  CheckCircle,
  Globe
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  topic?: string;
  islamicSource?: string;
}

interface SpiritualTopic {
  id: string;
  title: string;
  description: string;
  icon: any;
  category: 'dua' | 'hadith' | 'quran' | 'guidance' | 'reminder';
  isRecommended?: boolean;
}

interface PrayerTime {
  name: string;
  time: string;
  isNext: boolean;
}

export default function AssistantIASpiritual() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('fr');
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];

  const spiritualTopics: SpiritualTopic[] = [
    {
      id: 'morning-dhikr',
      title: 'Dhikr du Matin',
      description: 'Invocations recommandées pour commencer la journée',
      icon: Sunrise,
      category: 'dua',
      isRecommended: true
    },
    {
      id: 'quran-verse',
      title: 'Verset du Jour',
      description: 'Méditation sur un verset coranique',
      icon: BookOpen,
      category: 'quran',
      isRecommended: true
    },
    {
      id: 'hadith-wisdom',
      title: 'Hadith et Sagesse',
      description: 'Enseignements prophétiques authentiques',
      icon: Star,
      category: 'hadith'
    },
    {
      id: 'prayer-guidance',
      title: 'Guidance Spirituelle',
      description: 'Conseils pour améliorer sa pratique religieuse',
      icon: Compass,
      category: 'guidance'
    },
    {
      id: 'evening-reminder',
      title: 'Rappel du Soir',
      description: 'Réflexions pour clôturer la journée',
      icon: Moon,
      category: 'reminder'
    },
    {
      id: 'life-challenges',
      title: 'Défis de la Vie',
      description: 'Guidance islamique pour les difficultés quotidiennes',
      icon: Heart,
      category: 'guidance'
    }
  ];

  const prayerTimes: PrayerTime[] = [
    { name: 'Fajr', time: '06:15', isNext: false },
    { name: 'Dhuhr', time: '12:30', isNext: false },
    { name: 'Asr', time: '15:45', isNext: true },
    { name: 'Maghrib', time: '18:20', isNext: false },
    { name: 'Isha', time: '20:00', isNext: false }
  ];

  const initialMessages: Message[] = [
    {
      id: '1',
      type: 'assistant',
      content: 'السلام عليكم ورحمة الله وبركاته\n\nJe suis votre assistant spirituel IA, conçu pour vous accompagner dans votre cheminement spirituel selon les principes du Tawhid et de la Maslaha. Comment puis-je vous aider aujourd\'hui ?',
      timestamp: new Date(),
      topic: 'greeting',
      islamicSource: 'Salutation islamique traditionnelle'
    }
  ];

  useEffect(() => {
    setMessages(initialMessages);
  }, []);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulation de la réponse de l'assistant IA
    setTimeout(() => {
      const response = generateSpiritualResponse(inputMessage);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response.content,
        timestamp: new Date(),
        topic: response.topic,
        islamicSource: response.source
      };
      setMessages(prev => [...prev, assistantMessage]);

      // Synthèse vocale si activée
      if (isVoiceEnabled) {
        speakMessage(response.content);
      }
    }, 1000);
  };

  const generateSpiritualResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('stress') || lowerInput.includes('anxiété') || lowerInput.includes('inquiet')) {
      return {
        content: 'وَمَن يَتَّقِ ٱللَّهَ يَجْعَل لَّهُۥ مَخْرَجًا\n\n"Et quiconque craint Allah, Il lui donnera une issue favorable." (Coran 65:2)\n\nL\'anxiété fait partie des épreuves de cette vie. Le Prophète ﷺ nous a enseigné cette invocation :\n\n"اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ"\n\n"Ô Allah, je cherche refuge auprès de Toi contre l\'anxiété et la tristesse."\n\nRappelez-vous que chaque difficulté cache une sagesse divine et une opportunité de rapprochement avec Allah.',
        topic: 'anxiety-relief',
        source: 'Coran 65:2, Hadith authentique'
      };
    }
    
    if (lowerInput.includes('motivation') || lowerInput.includes('encouragement')) {
      return {
        content: 'فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا\n\n"Certes, avec la difficulté il y a la facilité." (Coran 94:5)\n\nCher frère/sœur, Allah nous rappelle que chaque épreuve est temporaire et qu\'elle est suivie de facilité. Le Prophète ﷺ a dit :\n\n"عَجَبًا لِأَمْرِ الْمُؤْمِنِ"\n\n"Comme l\'affaire du croyant est étonnante ! En toute chose, il y a pour lui du bien."\n\nContinuez vos efforts avec confiance en Allah, car Il connaît votre situation mieux que quiconque.',
        topic: 'motivation',
        source: 'Coran 94:5, Sahih Muslim'
      };
    }
    
    if (lowerInput.includes('pardon') || lowerInput.includes('excuse') || lowerInput.includes('péché')) {
      return {
        content: 'إِنَّ ٱللَّهَ يُحِبُّ ٱلتَّوَّابِينَ وَيُحِبُّ ٱلْمُتَطَهِّرِينَ\n\n"Allah aime ceux qui se repentent et Il aime ceux qui se purifient." (Coran 2:222)\n\nLe repentir (Tawbah) est une miséricorde d\'Allah. Le Prophète ﷺ a dit :\n\n"كُلُّ ابْنِ آدَمَ خَطَّاءٌ، وَخَيْرُ الْخَطَّائِينَ التَّوَّابُونَ"\n\n"Tout fils d\'Adam commet des erreurs, et les meilleurs de ceux qui commettent des erreurs sont ceux qui se repentent."\n\nDemandez sincèrement pardon à Allah, Il est Ar-Rahman (Le Miséricordieux).',
        topic: 'forgiveness',
        source: 'Coran 2:222, Hadith Tirmidhi'
      };
    }
    
    if (lowerInput.includes('gratitude') || lowerInput.includes('merci') || lowerInput.includes('reconnaissance')) {
      return {
        content: 'وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ\n\n"Et lorsque votre Seigneur proclama : \'Si vous êtes reconnaissants, très certainement J\'augmenterai [Mes bienfaits] pour vous.\'" (Coran 14:7)\n\nLa gratitude (Shukr) est le fondement de la spiritualité islamique. Le Prophète ﷺ nous enseigne de dire :\n\n"الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ"\n\n"Louange à Allah, Seigneur des mondes."\n\nPrenez un moment chaque jour pour réfléchir aux innombrables bienfaits d\'Allah dans votre vie.',
        topic: 'gratitude',
        source: 'Coran 14:7, Sunnah du Prophète ﷺ'
      };
    }

    return {
      content: 'Subhan Allah, votre question touche à un aspect important de notre foi. Permettez-moi de réfléchir selon les enseignements islamiques...\n\nD\'après les principes du Tawhid et de la Maslaha, chaque situation a une guidance dans le Coran et la Sunnah. Pouvez-vous préciser votre préoccupation pour que je puisse vous offrir une réponse plus appropriée ?\n\nJe suis là pour vous accompagner dans votre cheminement spirituel, in sha Allah.',
      topic: 'general-guidance',
      source: 'Méthodologie islamique générale'
    };
  };

  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedLanguage === 'ar' ? 'ar-SA' : selectedLanguage === 'en' ? 'en-US' : 'fr-FR';
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesis.speak(utterance);
    }
  };

  const startListening = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.lang = selectedLanguage === 'ar' ? 'ar-SA' : selectedLanguage === 'en' ? 'en-US' : 'fr-FR';
      recognition.onstart = () => setIsListening(true);
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
        setIsListening(false);
      };
      recognition.onerror = () => setIsListening(false);
      recognition.start();
    }
  };

  const handleTopicClick = (topic: SpiritualTopic) => {
    setInputMessage(`Parlez-moi de : ${topic.title}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">
                🤲 Assistant IA Spirituel
              </div>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                Conforme Tawhid & Maslaha
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
              >
                {isVoiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Horaires de prière */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Horaires de Prière
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {prayerTimes.map((prayer, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-2 rounded ${
                        prayer.isNext ? 'bg-green-100 text-green-800 dark:bg-green-900' : ''
                      }`}
                    >
                      <span className="font-medium">{prayer.name}</span>
                      <span>{prayer.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sujets spirituels */}
            <Card>
              <CardHeader>
                <CardTitle>Sujets Spirituels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {spiritualTopics.map((topic) => (
                    <Button
                      key={topic.id}
                      variant="ghost"
                      className="w-full justify-start h-auto p-3"
                      onClick={() => handleTopicClick(topic)}
                    >
                      <div className="flex items-start space-x-3">
                        <topic.icon className="h-5 w-5 mt-0.5 text-purple-600" />
                        <div className="text-left">
                          <div className="font-medium text-sm flex items-center">
                            {topic.title}
                            {topic.isRecommended && (
                              <Star className="h-3 w-3 ml-1 text-yellow-500 fill-current" />
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {topic.description}
                          </div>
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Conformité */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Conformité Islamique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Respect du Tawhid</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Principe de Maslaha</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Sources authentiques</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span>Guidance responsable</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat principal */}
          <div className="lg:col-span-3">
            <Card className="h-[calc(100vh-200px)]">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Conversation Spirituelle
                  </div>
                  <Badge variant="outline" className="bg-green-100 text-green-800">
                    Assistant IA Actif
                  </Badge>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex flex-col h-full">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-4 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-800'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.type === 'assistant' ? (
                            <Bot className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                          ) : (
                            <User className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <div className="whitespace-pre-wrap text-sm">
                              {message.content}
                            </div>
                            {message.islamicSource && (
                              <div className="mt-2 text-xs text-purple-600 bg-purple-50 p-2 rounded">
                                <span className="font-medium">Source : </span>
                                {message.islamicSource}
                              </div>
                            )}
                            <div className="text-xs opacity-70 mt-1">
                              {message.timestamp.toLocaleTimeString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Zone de saisie */}
                <div className="border-t pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 flex items-center space-x-2">
                      <Input
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Posez votre question spirituelle..."
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        className="flex-1"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={startListening}
                        disabled={isListening}
                      >
                        {isListening ? (
                          <MicOff className="h-4 w-4 text-red-500" />
                        ) : (
                          <Mic className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <Button onClick={handleSendMessage} disabled={!inputMessage.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="text-xs text-muted-foreground mt-2 text-center">
                    Assistant IA formé selon les principes islamiques - Pour guidance spirituelle uniquement
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © Yakoubi Yamina – Tous droits réservés | All rights reserved | جميع الحقوق محفوظة
            </p>
            <div className="flex justify-center space-x-4 text-xs">
              <Badge variant="secondary">Conforme Tawhid</Badge>
              <Badge variant="outline">Principe Maslaha</Badge>
              <Badge variant="outline">IA Spirituelle Éthique</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}