import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX,
  MessageCircle,
  Headphones,
  Languages,
  Settings,
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  AlertCircle,
  Smartphone,
  Globe
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VoiceCommand {
  id: string;
  arabic: string;
  transliteration: string;
  english: string;
  category: 'balance' | 'transfer' | 'payment' | 'investment' | 'zakat' | 'prayer' | 'help';
  action: string;
  example: string;
  halalCompliant: boolean;
}

interface DialogueEntry {
  id: string;
  timestamp: Date;
  type: 'user' | 'assistant';
  content: string;
  arabic: string;
  confidence: number;
  action?: string;
  status: 'processing' | 'completed' | 'error';
}

export function VoiceBankingArabic() {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedDialect, setSelectedDialect] = useState('gulf');
  const [dialogue, setDialogue] = useState<DialogueEntry[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [micPermission, setMicPermission] = useState<'granted' | 'denied' | 'pending'>('pending');
  const { toast } = useToast();

  const speechRecognition = useRef<any>(null);
  const speechSynthesis = useRef<any>(null);

  const voiceCommands: VoiceCommand[] = [
    {
      id: 'balance',
      arabic: 'ما هو رصيدي؟',
      transliteration: 'Ma huwa rasidi?',
      english: 'What is my balance?',
      category: 'balance',
      action: 'CHECK_BALANCE',
      example: 'رصيدي، كم معي فلوس، ما هو المبلغ المتاح',
      halalCompliant: true
    },
    {
      id: 'transfer',
      arabic: 'أريد تحويل مال',
      transliteration: 'Urid tahwil mal',
      english: 'I want to transfer money',
      category: 'transfer',
      action: 'INITIATE_TRANSFER',
      example: 'حول فلوس، إرسال مبلغ، تحويل مصاري',
      halalCompliant: true
    },
    {
      id: 'payment',
      arabic: 'أريد دفع فاتورة',
      transliteration: 'Urid daf3 fatura',
      english: 'I want to pay a bill',
      category: 'payment',
      action: 'PAY_BILL',
      example: 'دفع فاتورة، سداد حساب، دفع المستحقات',
      halalCompliant: true
    },
    {
      id: 'investment',
      arabic: 'أريد استثمار حلال',
      transliteration: 'Urid istithmar halal',
      english: 'I want halal investment',
      category: 'investment',
      action: 'HALAL_INVESTMENT',
      example: 'استثمار شرعي، صكوك، مرابحة، مضاربة',
      halalCompliant: true
    },
    {
      id: 'zakat',
      arabic: 'احسب زكاتي',
      transliteration: 'Ihsab zakati',
      english: 'Calculate my zakat',
      category: 'zakat',
      action: 'CALCULATE_ZAKAT',
      example: 'زكاة المال، حساب الزكاة، مقدار الزكاة',
      halalCompliant: true
    },
    {
      id: 'prayer',
      arabic: 'متى موعد الصلاة؟',
      transliteration: 'Mata maw3id as-salah?',
      english: 'When is prayer time?',
      category: 'prayer',
      action: 'PRAYER_TIMES',
      example: 'أوقات الصلاة، موعد الأذان، وقت الصلاة',
      halalCompliant: true
    },
    {
      id: 'help',
      arabic: 'مساعدة',
      transliteration: 'Musa3ada',
      english: 'Help',
      category: 'help',
      action: 'SHOW_HELP',
      example: 'مساعدة، كيف أستخدم، شرح، إرشادات',
      halalCompliant: true
    }
  ];

  const arabicDialects = [
    { id: 'gulf', name: 'خليجي', english: 'Gulf Arabic', countries: ['KSA', 'UAE', 'Kuwait', 'Qatar'] },
    { id: 'egyptian', name: 'مصري', english: 'Egyptian Arabic', countries: ['Egypt'] },
    { id: 'levantine', name: 'شامي', english: 'Levantine Arabic', countries: ['Syria', 'Lebanon', 'Jordan'] },
    { id: 'maghrebi', name: 'مغربي', english: 'Maghrebi Arabic', countries: ['Morocco', 'Algeria', 'Tunisia'] },
    { id: 'standard', name: 'فصحى', english: 'Modern Standard Arabic', countries: ['Universal'] }
  ];

  useEffect(() => {
    // Initialiser la reconnaissance vocale
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      speechRecognition.current = new SpeechRecognition();
      speechRecognition.current.lang = 'ar-SA'; // Arabe saoudien par défaut
      speechRecognition.current.continuous = false;
      speechRecognition.current.interimResults = true;

      speechRecognition.current.onstart = () => {
        setIsListening(true);
        toast({
          title: "الاستماع نشط",
          description: "تحدث الآن، CED Bank يستمع إليك",
        });
      };

      speechRecognition.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        const confidence = event.results[0][0].confidence;
        handleVoiceInput(transcript, confidence);
      };

      speechRecognition.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        toast({
          title: "خطأ في التعرف على الصوت",
          description: "حاول مرة أخرى أو تحقق من إعدادات الميكروفون",
          variant: "destructive"
        });
      };

      speechRecognition.current.onend = () => {
        setIsListening(false);
      };
    }

    // Initialiser تركيب الكلام
    if ('speechSynthesis' in window) {
      speechSynthesis.current = window.speechSynthesis;
    }

    // طلب إذن الميكروفون
    navigator.mediaDevices?.getUserMedia({ audio: true })
      .then(() => setMicPermission('granted'))
      .catch(() => setMicPermission('denied'));

  }, []);

  const handleVoiceInput = (transcript: string, confidence: number) => {
    setCurrentCommand(transcript);
    
    // البحث عن الأمر المطابق
    const matchedCommand = voiceCommands.find(cmd => 
      transcript.includes(cmd.arabic) || 
      cmd.example.split('، ').some(example => transcript.includes(example))
    );

    const newDialogue: DialogueEntry = {
      id: Date.now().toString(),
      timestamp: new Date(),
      type: 'user',
      content: transcript,
      arabic: transcript,
      confidence: confidence,
      action: matchedCommand?.action,
      status: 'processing'
    };

    setDialogue(prev => [...prev, newDialogue]);

    if (matchedCommand) {
      processVoiceCommand(matchedCommand, transcript);
    } else {
      // Réponse pour commande non reconnue
      respondInArabic("عذراً، لم أفهم طلبك. يمكنك قول 'مساعدة' لمعرفة الأوامر المتاحة");
    }
  };

  const processVoiceCommand = async (command: VoiceCommand, transcript: string) => {
    let response = '';
    
    switch (command.action) {
      case 'CHECK_BALANCE':
        response = "رصيدك الحالي هو ٢٥,٧٨٠ ريال سعودي. رصيد حلال ١٠٠٪ مع بركة الله";
        break;
      case 'INITIATE_TRANSFER':
        response = "أهلاً وسهلاً. إلى أي حساب تريد التحويل؟ سأحتاج رقم الحساب أو اسم المستفيد";
        break;
      case 'PAY_BILL':
        response = "حاضر، أي فاتورة تريد دفعها؟ كهرباء، مياه، اتصالات، أم فاتورة أخرى؟";
        break;
      case 'HALAL_INVESTMENT':
        response = "ممتاز! لدينا صكوك إسلامية وصناديق حلال. كم المبلغ الذي تريد استثماره؟";
        break;
      case 'CALCULATE_ZAKAT':
        response = "سأحسب زكاتك بإذن الله. إجمالي أموالك هو ٨٥,٤٠٠ ريال. زكاتك الواجبة ٢,١٣٥ ريال";
        break;
      case 'PRAYER_TIMES':
        response = "أوقات الصلاة اليوم: الفجر ٥:١٥، الظهر ١٢:٣٠، العصر ٣:٤٥، المغرب ٦:١٠، العشاء ٧:٤٠";
        break;
      case 'SHOW_HELP':
        response = "يمكنك قول: رصيدي، حول فلوس، ادفع فاتورة، استثمار حلال، احسب زكاتي، أوقات الصلاة";
        break;
      default:
        response = "أعتذر، هذا الطلب غير متاح حالياً. جاري تطوير المزيد من الخدمات";
    }

    // إضافة رد المساعد
    const assistantResponse: DialogueEntry = {
      id: (Date.now() + 1).toString(),
      timestamp: new Date(),
      type: 'assistant',
      content: response,
      arabic: response,
      confidence: 1.0,
      status: 'completed'
    };

    setDialogue(prev => [...prev, assistantResponse]);

    // النطق بالرد
    if (voiceEnabled) {
      respondInArabic(response);
    }
  };

  const respondInArabic = (text: string) => {
    if (speechSynthesis.current && voiceEnabled) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.8;
      utterance.pitch = 1.0;
      
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      speechSynthesis.current.speak(utterance);
    }
  };

  const startListening = () => {
    if (micPermission === 'granted' && speechRecognition.current) {
      speechRecognition.current.start();
    } else {
      toast({
        title: "إذن الميكروفون مطلوب",
        description: "يرجى السماح باستخدام الميكروفون في إعدادات المتصفح",
        variant: "destructive"
      });
    }
  };

  const stopListening = () => {
    if (speechRecognition.current) {
      speechRecognition.current.stop();
    }
  };

  const clearDialogue = () => {
    setDialogue([]);
    setCurrentCommand('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Mic className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">البنك الصوتي بالعربية</h1>
              <h2 className="text-2xl font-semibold text-emerald-600">CED Bank Voice Banking</h2>
              <p className="text-gray-600">Banking vocal islamique - Reconnaissance dialectes arabes</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Interface de conversation */}
          <div className="lg:col-span-2">
            <Card className="h-96">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    محادثة صوتية - Voice Chat
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={clearDialogue}>
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setVoiceEnabled(!voiceEnabled)}
                    >
                      {voiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64 overflow-y-auto bg-gray-50 rounded-lg p-4 mb-4">
                  {dialogue.length === 0 ? (
                    <div className="text-center text-gray-500 mt-20">
                      <Headphones className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>قل "السلام عليكم" لبدء المحادثة</p>
                      <p className="text-sm">Say "As-salamu alaykum" to start</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {dialogue.map((entry) => (
                        <div key={entry.id} className={`flex ${entry.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-xs p-3 rounded-lg ${
                            entry.type === 'user' 
                              ? 'bg-emerald-500 text-white' 
                              : 'bg-white border border-gray-200'
                          }`}>
                            <p className="text-sm font-medium">{entry.arabic}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs opacity-70">
                                {entry.timestamp.toLocaleTimeString('ar-SA')}
                              </span>
                              {entry.confidence && (
                                <Badge variant="outline" className="text-xs">
                                  {Math.round(entry.confidence * 100)}%
                                </Badge>
                              )}
                              {entry.status === 'completed' && <CheckCircle className="h-3 w-3 text-green-500" />}
                              {entry.status === 'error' && <AlertCircle className="h-3 w-3 text-red-500" />}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Contrôles vocaux */}
                <div className="flex items-center justify-center gap-4">
                  <Button
                    size="lg"
                    onClick={isListening ? stopListening : startListening}
                    disabled={micPermission === 'denied'}
                    className={`w-16 h-16 rounded-full ${
                      isListening 
                        ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                        : 'bg-emerald-500 hover:bg-emerald-600'
                    }`}
                  >
                    {isListening ? <MicOff className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
                  </Button>
                  
                  {isSpeaking && (
                    <div className="flex items-center gap-2 text-blue-600">
                      <Volume2 className="h-5 w-5 animate-pulse" />
                      <span className="text-sm">CED Bank يتحدث...</span>
                    </div>
                  )}
                </div>

                {currentCommand && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>سمعت:</strong> {currentCommand}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Paramètres et commandes */}
          <div className="space-y-6">
            {/* Sélection dialecte */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="h-5 w-5" />
                  اللهجة - Dialect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {arabicDialects.map((dialect) => (
                    <div
                      key={dialect.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                        selectedDialect === dialect.id 
                          ? 'border-emerald-500 bg-emerald-50' 
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedDialect(dialect.id)}
                    >
                      <div className="font-medium">{dialect.name}</div>
                      <div className="text-sm text-gray-600">{dialect.english}</div>
                      <div className="text-xs text-gray-500">
                        {dialect.countries.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Commandes disponibles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  الأوامر المتاحة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {voiceCommands.slice(0, 6).map((command) => (
                    <div key={command.id} className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-medium text-sm">{command.arabic}</div>
                      <div className="text-xs text-gray-600">{command.transliteration}</div>
                      <div className="text-xs text-emerald-600">{command.english}</div>
                      {command.halalCompliant && (
                        <Badge variant="outline" className="mt-1 text-xs">حلال ✓</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Statut système */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  حالة النظام
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">إذن الميكروفون</span>
                    <Badge className={micPermission === 'granted' ? 'bg-green-500' : 'bg-red-500'}>
                      {micPermission === 'granted' ? 'مُفعّل' : 'مُعطّل'}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">النطق الصوتي</span>
                    <Badge className={voiceEnabled ? 'bg-green-500' : 'bg-gray-500'}>
                      {voiceEnabled ? 'مُفعّل' : 'مُعطّل'}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">الاستماع النشط</span>
                    <Badge className={isListening ? 'bg-blue-500' : 'bg-gray-500'}>
                      {isListening ? 'يستمع' : 'معطل'}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">الامتثال الشرعي</span>
                    <Badge className="bg-green-500">١٠٠٪ حلال ✓</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Instructions d'utilisation */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-center">كيفية الاستخدام - How to Use</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">اضغط على الميكروفون</h3>
                <p className="text-sm text-gray-600">Click the microphone button to start listening</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">تحدث بوضوح بالعربية</h3>
                <p className="text-sm text-gray-600">Speak clearly in Arabic using natural language</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">استمع للرد الصوتي</h3>
                <p className="text-sm text-gray-600">Listen to the audio response from CED Bank</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p className="mb-2">
            © 2025 CED Bank - Banking Vocal Arabe Islamique - Yakoubi Yamina
          </p>
          <p>
            🎤 Reconnaissance vocale multi-dialectes arabes - 100% conforme Sharia - IA éthique certifiée
          </p>
        </div>
      </div>
    </div>
  );
}