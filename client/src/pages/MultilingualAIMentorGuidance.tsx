import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Globe, Book, Heart, Star, Volume2, Mic, User, Bot } from 'lucide-react';

const MultilingualAIMentorGuidance = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('fr');
  const [chatMessages, setChatMessages] = useState<Array<{
    id: string;
    type: 'user' | 'mentor';
    content: string;
    language: string;
    timestamp: Date;
    category?: string;
  }>>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [mentorPersonality, setMentorPersonality] = useState('scholar');

  // Langues supportées
  const supportedLanguages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷', rtl: false },
    { code: 'ar', name: 'العربية', flag: '🇸🇦', rtl: true },
    { code: 'en', name: 'English', flag: '🇺🇸', rtl: false },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷', rtl: false },
    { code: 'ur', name: 'اردو', flag: '🇵🇰', rtl: true },
    { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩', rtl: false },
    { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾', rtl: false },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩', rtl: false },
    { code: 'fa', name: 'فارسی', flag: '🇮🇷', rtl: true },
    { code: 'zh', name: '中文', flag: '🇨🇳', rtl: false },
    { code: 'sw', name: 'Kiswahili', flag: '🇹🇿', rtl: false },
    { code: 'ha', name: 'Hausa', flag: '🇳🇬', rtl: false }
  ];

  // Personnalités de mentor IA
  const mentorPersonalities = {
    scholar: {
      name: 'Sheikh Aïcha Al-Aman',
      description: 'Savante islamique spécialisée dans le Fiqh contemporain',
      avatar: '👩‍🏫',
      expertise: ['Fiqh', 'Hadith', 'Tafsir', 'Sciences Islamiques'],
      style: 'Sage et bienveillante'
    },
    spiritual: {
      name: 'Imam Yusuf Al-Hidayah',
      description: 'Guide spirituel pour le développement de l\'âme',
      avatar: '🧙‍♂️',
      expertise: ['Spiritualité', 'Dhikr', 'Purification', 'Développement personnel'],
      style: 'Inspirant et motivant'
    },
    youth: {
      name: 'Ustadha Khadija Al-Shabab',
      description: 'Mentore spécialisée pour la jeunesse musulmane',
      avatar: '👩‍🎓',
      expertise: ['Éducation', 'Jeunesse', 'Famille', 'Société moderne'],
      style: 'Moderne et accessible'
    },
    family: {
      name: 'Umm Maryam Al-Usra',
      description: 'Conseillère en vie familiale islamique',
      avatar: '👩‍👧‍👦',
      expertise: ['Famille', 'Éducation enfants', 'Relations', 'Vie conjugale'],
      style: 'Chaleureuse et pratique'
    }
  };

  // Messages prédéfinis par langue
  const welcomeMessages = {
    fr: "Assalamu alaikum ! Je suis votre mentor IA islamique. Comment puis-je vous guider aujourd'hui ?",
    ar: "السلام عليكم ! أنا مرشدكم الذكي الإسلامي. كيف يمكنني أن أوجهكم اليوم؟",
    en: "Assalamu alaikum! I am your Islamic AI mentor. How can I guide you today?",
    tr: "Selamün aleyküm! Ben İslami AI mentorunuzum. Bugün size nasıl rehberlik edebilirim?",
    ur: "السلام علیکم! میں آپ کا اسلامی AI مرشد ہوں۔ آج میں آپ کی کیسے رہنمائی کر سکتا ہوں؟",
    id: "Assalamu alaikum! Saya mentor AI Islami Anda. Bagaimana saya bisa membimbing Anda hari ini?",
    ms: "Assalamu alaikum! Saya mentor AI Islam anda. Bagaimana saya boleh membimbing anda hari ini?",
    bn: "আসসালামু আলাইকুম! আমি আপনার ইসলামিক AI গুরু। আজ আমি কিভাবে আপনাকে গাইড করতে পারি?",
    fa: "السلام علیکم! من راهنمای هوش مصنوعی اسلامی شما هستم. امروز چگونه می‌توانم شما را راهنمایی کنم؟",
    zh: "色兰！我是您的伊斯兰AI导师。今天我如何为您提供指导？",
    sw: "Assalamu alaikum! Mimi ni mshauri wako wa AI wa Kiislamu. Nawezaje kukuongoza leo?",
    ha: "Assalamu alaikum! Ni mashawarcin AI na Islama. Yaya zan iya jagorantar da ku yau?"
  };

  // Questions suggérées par catégorie
  const suggestedQuestions = {
    fr: {
      spiritual: [
        "Comment améliorer ma relation avec Allah ?",
        "Quelles sont les meilleures invocations quotidiennes ?",
        "Comment développer la spiritualité en famille ?"
      ],
      fiqh: [
        "Quelle est la position islamique sur l'IA ?",
        "Comment calculer correctement la Zakat ?",
        "Les crypto-monnaies sont-elles halal ?"
      ],
      lifestyle: [
        "Comment concilier Islam et vie moderne ?",
        "Conseils pour l'éducation islamique des enfants",
        "Organisation du temps selon la Sunna"
      ]
    },
    ar: {
      spiritual: [
        "كيف أحسن علاقتي بالله؟",
        "ما هي أفضل الأدعية اليومية؟",
        "كيف أطور الروحانية في الأسرة؟"
      ],
      fiqh: [
        "ما موقف الإسلام من الذكاء الاصطناعي؟",
        "كيف أحسب الزكاة بطريقة صحيحة؟",
        "هل العملات الرقمية حلال؟"
      ],
      lifestyle: [
        "كيف أوفق بين الإسلام والحياة العصرية؟",
        "نصائح للتربية الإسلامية للأطفال",
        "تنظيم الوقت حسب السنة"
      ]
    }
  };

  const currentLanguage = supportedLanguages.find(lang => lang.code === selectedLanguage);
  const currentMentor = mentorPersonalities[mentorPersonality as keyof typeof mentorPersonalities];
  const currentQuestions = suggestedQuestions[selectedLanguage as keyof typeof suggestedQuestions] || suggestedQuestions.fr;

  // Initialiser avec message de bienvenue
  useEffect(() => {
    const welcomeMessage = welcomeMessages[selectedLanguage as keyof typeof welcomeMessages] || welcomeMessages.fr;
    setChatMessages([{
      id: '1',
      type: 'mentor',
      content: welcomeMessage,
      language: selectedLanguage,
      timestamp: new Date()
    }]);
  }, [selectedLanguage, mentorPersonality]);

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    // Ajouter message utilisateur
    const userMessage = {
      id: Date.now().toString(),
      type: 'user' as const,
      content: inputMessage,
      language: selectedLanguage,
      timestamp: new Date()
    };

    // Simuler réponse du mentor
    const mentorResponses = {
      fr: [
        "Excellente question ! Selon le Coran et la Sunna authentique...",
        "Barakallahu feek pour cette question. D'après les savants...",
        "Qu'Allah vous récompense. La réponse se trouve dans...",
        "MashaAllah, c'est une préoccupation importante. Les sources indiquent..."
      ],
      ar: [
        "سؤال ممتاز! حسب القرآن والسنة الصحيحة...",
        "بارك الله فيكم لهذا السؤال. حسب العلماء...",
        "أثابكم الله. الجواب يوجد في...",
        "ماشاء الله، هذا اهتمام مهم. المصادر تشير..."
      ]
    };

    const responses = mentorResponses[selectedLanguage as keyof typeof mentorResponses] || mentorResponses.fr;
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    const mentorMessage = {
      id: (Date.now() + 1).toString(),
      type: 'mentor' as const,
      content: randomResponse,
      language: selectedLanguage,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage, mentorMessage]);
    setInputMessage('');
  };

  const startVoiceInput = () => {
    setIsListening(true);
    // Simulation reconnaissance vocale
    setTimeout(() => {
      setIsListening(false);
      setInputMessage("Comment puis-je améliorer ma spiritualité quotidienne ?");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            🤖 Multilingual AI Mentor Guidance System
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Guidance spirituelle intelligente en 78+ langues - 100% conforme Fiqh informatique
          </p>
          <p className="text-sm text-gray-500">
            "وَقُل رَّبِّ زِدْنِي عِلْمًا" - "Et dis : Ô mon Seigneur, accroissez mes connaissances"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar Configuration */}
          <div className="space-y-6">
            {/* Language Selector */}
            <Card className="shadow-lg border-2 border-indigo-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Langue / Language
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {supportedLanguages.map((lang) => (
                    <Button
                      key={lang.code}
                      variant={selectedLanguage === lang.code ? "default" : "outline"}
                      onClick={() => setSelectedLanguage(lang.code)}
                      className={`text-sm h-12 ${selectedLanguage === lang.code ? 'bg-indigo-600' : ''}`}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Mentor Personality */}
            <Card className="shadow-lg border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Mentor IA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(mentorPersonalities).map(([key, mentor]) => (
                    <Button
                      key={key}
                      variant={mentorPersonality === key ? "default" : "outline"}
                      onClick={() => setMentorPersonality(key)}
                      className={`w-full text-left justify-start h-auto p-3 ${
                        mentorPersonality === key ? 'bg-purple-600' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{mentor.avatar}</span>
                        <div>
                          <div className="font-medium">{mentor.name}</div>
                          <div className="text-xs opacity-75">{mentor.style}</div>
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Suggested Questions */}
            <Card className="shadow-lg border-2 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Questions Suggérées
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(currentQuestions).map(([category, questions]) => (
                    <div key={category}>
                      <h4 className="font-medium text-sm text-gray-700 mb-2 capitalize">
                        {category}
                      </h4>
                      <div className="space-y-2">
                        {questions.map((question, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="w-full text-left justify-start h-auto p-2 text-xs"
                            onClick={() => setInputMessage(question)}
                          >
                            {question}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-2 border-indigo-200 h-[800px] flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{currentMentor.avatar}</span>
                    <div>
                      <div className="text-lg">{currentMentor.name}</div>
                      <div className="text-sm text-gray-600">{currentMentor.description}</div>
                    </div>
                  </CardTitle>
                  <div className="flex gap-2">
                    <Badge className="bg-green-100 text-green-800">
                      <span className="mr-1">{currentLanguage?.flag}</span>
                      {currentLanguage?.name}
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800">
                      IA Halal Certifiée
                    </Badge>
                  </div>
                </div>
                
                {/* Mentor Expertise */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {currentMentor.expertise.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              {/* Chat Messages */}
              <CardContent className="flex-1 overflow-y-auto">
                <div className="space-y-4">
                  {chatMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-100 text-gray-800'
                        } ${currentLanguage?.rtl ? 'text-right' : 'text-left'}`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          {message.type === 'mentor' ? (
                            <>
                              <Bot className="w-4 h-4" />
                              <span className="text-sm font-medium">{currentMentor.name}</span>
                            </>
                          ) : (
                            <>
                              <User className="w-4 h-4" />
                              <span className="text-sm font-medium">Vous</span>
                            </>
                          )}
                          <span className="text-xs opacity-75">
                            {message.timestamp.toLocaleTimeString()}
                          </span>
                        </div>
                        <p className="text-sm">{message.content}</p>
                        
                        {message.type === 'mentor' && (
                          <div className="flex items-center gap-2 mt-2">
                            <Button size="sm" variant="ghost" className="h-6 text-xs">
                              <Volume2 className="w-3 h-3 mr-1" />
                              Écouter
                            </Button>
                            <Button size="sm" variant="ghost" className="h-6 text-xs">
                              <Heart className="w-3 h-3 mr-1" />
                              Utile
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Input Area */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder={`Posez votre question en ${currentLanguage?.name}...`}
                    className="flex-1 min-h-[60px]"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage();
                      }
                    }}
                  />
                  <div className="flex flex-col gap-2">
                    <Button
                      onClick={startVoiceInput}
                      variant="outline"
                      className={`h-12 w-12 ${isListening ? 'bg-red-100 text-red-600' : ''}`}
                    >
                      <Mic className="w-5 h-5" />
                    </Button>
                    <Button
                      onClick={sendMessage}
                      className="h-12 w-12 bg-indigo-600 hover:bg-indigo-700"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                
                {isListening && (
                  <div className="mt-2 text-center">
                    <Badge className="bg-red-100 text-red-800 animate-pulse">
                      🎤 Écoute en cours...
                    </Badge>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>

        {/* Disclaimer */}
        <Card className="mt-6 bg-yellow-50 border-2 border-yellow-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="w-5 h-5 text-yellow-600" />
              <span className="font-medium text-yellow-800">Clause IA Non-Mufti</span>
            </div>
            <p className="text-sm text-yellow-700">
              Cette IA est un outil d'assistance éducative. Pour toute fatwa officielle, 
              consultez des savants qualifiés. Toujours vérifier avec sources authentiques.
            </p>
          </CardContent>
        </Card>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>© 2025 Club Empreinte Digitale - Yakoubi Yamina | CED HalalTech™</p>
          <p>Multilingual AI Mentor Guidance System - 100% Conforme Coran & Sunna</p>
        </div>
      </div>
    </div>
  );
};

export default MultilingualAIMentorGuidance;