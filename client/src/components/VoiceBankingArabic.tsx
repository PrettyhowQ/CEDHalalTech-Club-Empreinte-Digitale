import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mic, 
  Volume2, 
  MicOff,
  Play,
  Pause,
  Phone,
  CreditCard,
  Calculator,
  Clock,
  MapPin,
  Users,
  Headphones,
  Settings,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function VoiceBankingArabic() {
  const [isListening, setIsListening] = useState(false);
  const [currentCommand, setCurrentCommand] = useState('');
  const [selectedDialect, setSelectedDialect] = useState('gulf');
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const { toast } = useToast();

  const dialects = [
    { id: 'gulf', name: 'خليجي', english: 'Gulf Arabic', flag: '🇸🇦' },
    { id: 'egyptian', name: 'مصري', english: 'Egyptian', flag: '🇪🇬' },
    { id: 'levantine', name: 'شامي', english: 'Levantine', flag: '🇸🇾' },
    { id: 'maghrebi', name: 'مغربي', english: 'Maghrebi', flag: '🇲🇦' },
    { id: 'standard', name: 'فصحى', english: 'Modern Standard', flag: '📚' }
  ];

  const voiceCommands = [
    { 
      arabic: 'كم رصيدي؟', 
      english: 'What is my balance?', 
      action: 'balance',
      response: 'رصيدك الحالي هو 15,420 فرنك سويسري'
    },
    { 
      arabic: 'حول ألف فرنك', 
      english: 'Transfer 1000 francs', 
      action: 'transfer',
      response: 'سأقوم بتحويل ألف فرنك. إلى أي حساب تريد التحويل؟'
    },
    { 
      arabic: 'احسب زكاتي', 
      english: 'Calculate my zakat', 
      action: 'zakat',
      response: 'زكاتك المستحقة هذا العام 385 فرنك سويسري'
    },
    { 
      arabic: 'متى الصلاة القادمة؟', 
      english: 'When is the next prayer?', 
      action: 'prayer',
      response: 'صلاة المغرب في الساعة 6:15 مساءً'
    },
    { 
      arabic: 'أين القبلة؟', 
      english: 'Where is Qibla?', 
      action: 'qibla',
      response: 'اتجاه القبلة من موقعك 136 درجة جنوب شرق'
    }
  ];

  const startListening = () => {
    setIsListening(true);
    toast({
      title: "بدء الاستماع",
      description: "تحدث الآن بالعربية..."
    });
    
    // Simulation de reconnaissance vocale
    setTimeout(() => {
      const randomCommand = voiceCommands[Math.floor(Math.random() * voiceCommands.length)];
      setCurrentCommand(randomCommand.arabic);
      setIsListening(false);
      
      // Réponse vocale simulée
      setTimeout(() => {
        if (voiceEnabled) {
          toast({
            title: randomCommand.response,
            description: "تم تنفيذ الأمر بنجاح"
          });
        }
      }, 1000);
    }, 3000);
  };

  const stopListening = () => {
    setIsListening(false);
    setCurrentCommand('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Mic className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">المصرف الصوتي بالعربية</h1>
              <h2 className="text-2xl font-semibold text-emerald-600">Voice Banking Arabic</h2>
              <p className="text-gray-600">Banking vocal avec reconnaissance dialectes arabes</p>
            </div>
          </div>
        </div>

        {/* Interface principale */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center">
              {isListening ? 'جاري الاستماع...' : 'اضغط للتحدث'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-6">
              <Button
                size="lg"
                className={`w-32 h-32 rounded-full ${
                  isListening 
                    ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                    : 'bg-emerald-500 hover:bg-emerald-600'
                }`}
                onClick={isListening ? stopListening : startListening}
              >
                {isListening ? (
                  <MicOff className="h-16 w-16 text-white" />
                ) : (
                  <Mic className="h-16 w-16 text-white" />
                )}
              </Button>
            </div>
            
            {currentCommand && (
              <div className="p-4 bg-blue-50 rounded-lg mb-4">
                <div className="text-lg font-semibold text-blue-800 mb-2">
                  تم سماع: "{currentCommand}"
                </div>
                <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
              </div>
            )}

            <div className="flex justify-center gap-4 mb-6">
              <select
                value={selectedDialect}
                onChange={(e) => setSelectedDialect(e.target.value)}
                className="px-4 py-2 border rounded-lg"
              >
                {dialects.map(dialect => (
                  <option key={dialect.id} value={dialect.id}>
                    {dialect.flag} {dialect.name} ({dialect.english})
                  </option>
                ))}
              </select>
              
              <Button
                variant="outline"
                onClick={() => setVoiceEnabled(!voiceEnabled)}
              >
                {voiceEnabled ? <Volume2 className="h-4 w-4" /> : <Headphones className="h-4 w-4" />}
                {voiceEnabled ? 'صوت مفعل' : 'صوت معطل'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Commandes disponibles */}
        <Card>
          <CardHeader>
            <CardTitle>الأوامر المتاحة - Commandes Disponibles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {voiceCommands.map((command, index) => (
                <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      {command.action === 'balance' && <CreditCard className="h-4 w-4 text-emerald-600" />}
                      {command.action === 'transfer' && <Users className="h-4 w-4 text-emerald-600" />}
                      {command.action === 'zakat' && <Calculator className="h-4 w-4 text-emerald-600" />}
                      {command.action === 'prayer' && <Clock className="h-4 w-4 text-emerald-600" />}
                      {command.action === 'qibla' && <MapPin className="h-4 w-4 text-emerald-600" />}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-lg">{command.arabic}</div>
                      <div className="text-sm text-gray-600">{command.english}</div>
                    </div>
                  </div>
                  <div className="text-sm text-blue-600 bg-blue-50 p-2 rounded">
                    <strong>Réponse:</strong> {command.response}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-xs text-gray-500">
          <p>© 2025 CED Bank - Banking Vocal Arabe - Yakoubi Yamina</p>
        </div>
      </div>
    </div>
  );
}