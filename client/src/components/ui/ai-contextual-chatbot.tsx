import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { MessageCircle, Send, Mic, Volume2, X, Bot, User, Globe, Heart, Book, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  language?: string;
  category?: 'general' | 'fiqh' | 'technical' | 'spiritual' | 'banking';
  confidence?: number;
}

interface Language {
  code: string;
  name: string;
  nameNative: string;
  direction: 'ltr' | 'rtl';
  flag: string;
}

const supportedLanguages: Language[] = [
  { code: 'fr', name: 'French', nameNative: 'Français', direction: 'ltr', flag: '🇫🇷' },
  { code: 'ar', name: 'Arabic', nameNative: 'العربية', direction: 'rtl', flag: '🇸🇦' },
  { code: 'en', name: 'English', nameNative: 'English', direction: 'ltr', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', nameNative: 'Español', direction: 'ltr', flag: '🇪🇸' },
  { code: 'tr', name: 'Turkish', nameNative: 'Türkçe', direction: 'ltr', flag: '🇹🇷' },
  { code: 'ur', name: 'Urdu', nameNative: 'اردو', direction: 'rtl', flag: '🇵🇰' },
  { code: 'fa', name: 'Persian', nameNative: 'فارسی', direction: 'rtl', flag: '🇮🇷' },
  { code: 'id', name: 'Indonesian', nameNative: 'Bahasa Indonesia', direction: 'ltr', flag: '🇮🇩' }
];

const quickSuggestions = {
  fr: [
    "Comment utiliser CED Bank sans Riba ?",
    "Quelles sont les règles Fiqh pour l'IA ?",
    "Comment calculer la Zakat ?",
    "Horaires de prière aujourd'hui",
    "Formation en développement web halal"
  ],
  ar: [
    "كيف أستخدم بنك CED بدون ربا؟",
    "ما هي قواعد الفقه للذكاء الاصطناعي؟",
    "كيف أحسب الزكاة؟",
    "أوقات الصلاة اليوم",
    "تدريب في تطوير الويب الحلال"
  ],
  en: [
    "How to use CED Bank without Riba?",
    "What are Fiqh rules for AI?",
    "How to calculate Zakat?",
    "Prayer times today",
    "Halal web development training"
  ]
};

interface AIContextualChatbotProps {
  className?: string;
  contextualInfo?: {
    currentPage?: string;
    userRole?: string;
    userPreferences?: any;
  };
}

export function AIContextualChatbot({ className, contextualInfo }: AIContextualChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(supportedLanguages[0]);
  const [isTyping, setIsTyping] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message based on language
      const welcomeMessages = {
        fr: "Assalamu Alaykum ! Je suis Aisha Al-Aman, votre assistante IA islamique. Comment puis-je vous aider aujourd'hui ?",
        ar: "السلام عليكم! أنا عائشة الأمان، مساعدتك الذكية الإسلامية. كيف يمكنني مساعدتك اليوم؟",
        en: "Assalamu Alaykum! I'm Aisha Al-Aman, your Islamic AI assistant. How can I help you today?"
      };

      setMessages([{
        id: '1',
        role: 'assistant',
        content: welcomeMessages[selectedLanguage.code as keyof typeof welcomeMessages] || welcomeMessages.fr,
        timestamp: new Date(),
        language: selectedLanguage.code,
        category: 'general',
        confidence: 100
      }]);
    }
  }, [isOpen, selectedLanguage]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage,
      timestamp: new Date(),
      language: selectedLanguage.code
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response with contextual understanding
    setTimeout(() => {
      const aiResponse = generateContextualResponse(inputMessage, selectedLanguage.code, contextualInfo);
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponse.content,
        timestamp: new Date(),
        language: selectedLanguage.code,
        category: aiResponse.category,
        confidence: aiResponse.confidence
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);

      // Text-to-speech if enabled
      if (voiceEnabled) {
        speakMessage(aiResponse.content, selectedLanguage.code);
      }
    }, 1500);
  };

  const generateContextualResponse = (message: string, language: string, context?: any) => {
    const responses = {
      fr: {
        banking: {
          content: "Pour utiliser CED Bank sans Riba, tous nos produits respectent strictement la Sharia. Nous proposons des comptes courants gratuits, des financements Murabaha pour l'immobilier, et des investissements Sukuk. Voulez-vous plus de détails sur un produit spécifique ?",
          category: 'banking' as const,
          confidence: 95
        },
        fiqh: {
          content: "Selon notre équipe de 150+ scholars, l'IA éthique Aisha Al-Aman respecte 27,446+ règles Fiqh informatique. Elle ne remplace pas un Mufti mais guide selon les 4 sources islamiques authentiques (Coran, Sunna, Ijmâ', Qiyâs). Comment puis-je vous aider avec le Fiqh ?",
          category: 'fiqh' as const,
          confidence: 98
        },
        prayer: {
          content: "Aujourd'hui, les horaires de prière pour votre localisation sont automatiquement calculés. Activez les notifications dans vos paramètres pour recevoir les rappels. Souhaitez-vous que je configure le mode prière qui adapte l'interface ?",
          category: 'spiritual' as const,
          confidence: 90
        },
        default: {
          content: "Je comprends votre question. En tant qu'IA islamique certifiée, je peux vous aider avec le banking halal, les formations CED Academy, les règles Fiqh informatique, ou toute question spirituelle. Précisez votre besoin insha'Allah.",
          category: 'general' as const,
          confidence: 85
        }
      },
      ar: {
        banking: {
          content: "لاستخدام بنك CED بدون ربا، جميع منتجاتنا تتبع الشريعة الإسلامية بدقة. نقدم حسابات جارية مجانية، وتمويل المرابحة للعقارات، واستثمارات الصكوك. هل تريد تفاصيل أكثر عن منتج معين؟",
          category: 'banking' as const,
          confidence: 95
        },
        fiqh: {
          content: "وفقاً لفريق 150+ عالماً، الذكاء الاصطناعي الأخلاقي عائشة الأمان يتبع 27,446+ قاعدة فقه معلوماتي. لا تحل محل المفتي ولكن ترشد وفق المصادر الإسلامية الأربعة الصحيحة (القرآن، السنة، الإجماع، القياس). كيف يمكنني مساعدتك في الفقه؟",
          category: 'fiqh' as const,
          confidence: 98
        },
        prayer: {
          content: "اليوم، مواقيت الصلاة لموقعك محسوبة تلقائياً. فعّل التنبيهات في إعداداتك لتلقي التذكيرات. هل تريد أن أقوم بإعداد وضع الصلاة الذي يكيف الواجهة؟",
          category: 'spiritual' as const,
          confidence: 90
        },
        default: {
          content: "أفهم سؤالك. كوني ذكاء اصطناعي إسلامي معتمد، يمكنني مساعدتك في البنوك الحلال، تدريبات أكاديمية CED، قواعد الفقه المعلوماتي، أو أي سؤال روحاني. حدد حاجتك إن شاء الله.",
          category: 'general' as const,
          confidence: 85
        }
      },
      en: {
        banking: {
          content: "To use CED Bank without Riba, all our products strictly follow Sharia principles. We offer free current accounts, Murabaha financing for real estate, and Sukuk investments. Would you like more details about a specific product?",
          category: 'banking' as const,
          confidence: 95
        },
        fiqh: {
          content: "According to our team of 150+ scholars, the ethical AI Aisha Al-Aman follows 27,446+ Islamic IT Fiqh rules. She doesn't replace a Mufti but guides according to the 4 authentic Islamic sources (Quran, Sunnah, Ijma', Qiyas). How can I help you with Fiqh?",
          category: 'fiqh' as const,
          confidence: 98
        },
        prayer: {
          content: "Today, prayer times for your location are automatically calculated. Enable notifications in your settings to receive reminders. Would you like me to set up prayer mode that adapts the interface?",
          category: 'spiritual' as const,
          confidence: 90
        },
        default: {
          content: "I understand your question. As a certified Islamic AI, I can help you with halal banking, CED Academy training, Islamic IT Fiqh rules, or any spiritual question. Please specify your need insha'Allah.",
          category: 'general' as const,
          confidence: 85
        }
      }
    };

    const langResponses = responses[language as keyof typeof responses] || responses.fr;
    
    if (message.toLowerCase().includes('bank') || message.toLowerCase().includes('riba') || message.toLowerCase().includes('بنك')) {
      return langResponses.banking;
    } else if (message.toLowerCase().includes('fiqh') || message.toLowerCase().includes('فقه') || message.toLowerCase().includes('sharia')) {
      return langResponses.fiqh;
    } else if (message.toLowerCase().includes('prayer') || message.toLowerCase().includes('صلاة') || message.toLowerCase().includes('prière')) {
      return langResponses.prayer;
    } else {
      return langResponses.default;
    }
  };

  const speakMessage = (text: string, language: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'ar' ? 'ar-SA' : language === 'fr' ? 'fr-FR' : 'en-US';
      speechSynthesis.speak(utterance);
    }
  };

  const startListening = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.lang = selectedLanguage.code === 'ar' ? 'ar-SA' : selectedLanguage.code === 'fr' ? 'fr-FR' : 'en-US';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
      };

      recognition.start();
    }
  };

  const getCategoryIcon = (category?: string) => {
    switch (category) {
      case 'fiqh': return <Book className="w-4 h-4 text-emerald-600" />;
      case 'banking': return <Heart className="w-4 h-4 text-blue-600" />;
      case 'spiritual': return <Heart className="w-4 h-4 text-purple-600" />;
      case 'technical': return <Settings className="w-4 h-4 text-amber-600" />;
      default: return <Bot className="w-4 h-4 text-gray-600" />;
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-br from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        title="Assistant IA Islamique"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className={cn("fixed bottom-6 right-6 w-96 h-[32rem] bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col z-50", className)}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold">Aisha Al-Aman</h3>
            <p className="text-xs opacity-90">Assistant IA Islamique</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <select
            value={selectedLanguage.code}
            onChange={(e) => {
              const lang = supportedLanguages.find(l => l.code === e.target.value);
              if (lang) setSelectedLanguage(lang);
            }}
            className="text-xs bg-white/20 border border-white/30 rounded px-2 py-1 text-white"
          >
            {supportedLanguages.map(lang => (
              <option key={lang.code} value={lang.code} className="text-gray-900">
                {lang.flag} {lang.nameNative}
              </option>
            ))}
          </select>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setVoiceEnabled(!voiceEnabled)}
            className="text-white hover:bg-white/20 p-1"
          >
            <Volume2 className={cn("w-4 h-4", voiceEnabled && "text-yellow-300")} />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/20 p-1"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4" dir={selectedLanguage.direction}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex gap-3",
              message.role === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            {message.role === 'assistant' && (
              <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
                {getCategoryIcon(message.category)}
              </div>
            )}
            
            <div
              className={cn(
                "max-w-[80%] p-3 rounded-lg text-sm",
                message.role === 'user'
                  ? "bg-emerald-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              )}
            >
              <p className="leading-relaxed">{message.content}</p>
              
              {message.role === 'assistant' && (
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-xs opacity-70">
                    {message.confidence}% confiance
                  </span>
                  <span className="text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString(selectedLanguage.code)}
                  </span>
                </div>
              )}
            </div>
            
            {message.role === 'user' && (
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </div>
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Suggestions */}
      {messages.length <= 1 && (
        <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Suggestions rapides :</p>
          <div className="flex flex-wrap gap-1">
            {(quickSuggestions[selectedLanguage.code as keyof typeof quickSuggestions] || quickSuggestions.fr).slice(0, 3).map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setInputMessage(suggestion)}
                className="text-xs px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder={selectedLanguage.direction === 'rtl' ? 'اكتب رسالتك...' : 'Tapez votre message...'}
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            dir={selectedLanguage.direction}
          />
          
          <Button
            onClick={startListening}
            variant="outline"
            size="sm"
            disabled={isListening}
            className={cn("p-2", isListening && "animate-pulse bg-red-100 dark:bg-red-900")}
          >
            <Mic className="w-4 h-4" />
          </Button>
          
          <Button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            className="bg-emerald-500 hover:bg-emerald-600 text-white p-2"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
          ⚠️ IA non-Mufti - Consultez un scholar pour les fatwas religieuses
        </p>
      </div>
    </div>
  );
}