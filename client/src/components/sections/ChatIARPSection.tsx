import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Mic, Check, User, Bot, ChevronDown } from 'lucide-react';
import { useVoice } from '@/context/VoiceContext';
import { useLanguage } from '@/context/LanguageContext';

export function ChatIARPSection() {
  const { speak, isListening, startListening, stopListening, isSupported } = useVoice();
  const { currentLanguage } = useLanguage();
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  const handleTryNow = () => {
    if (isSupported) {
      if (isListening) {
        stopListening();
        setIsVoiceActive(false);
      } else {
        startListening();
        setIsVoiceActive(true);
        speak("Bonjour ! Je suis IARP, votre assistant vocal. Dites quelque chose pour commencer.");
      }
    }
  };

  const features = [
    "Assistant & Coach personnel intelligent et adaptatif",
    "Manager & Gestionnaire pour optimiser votre productivité", 
    "Développeur expert : code, debug, architecture complète",
    "Expert multi-domaines : business, santé, éducation, créativité"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <div className="mb-6">
              <Badge className="bg-accent-100 text-accent-800 hover:bg-accent-100">
                <Mic className="mr-2 h-3 w-3" />
                Assistant IA 24/7
              </Badge>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Super IARP Pro <br />
              <span className="text-accent-500">Assistant IA Évolutif</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Chat IA Responsable PrettyhowQ Pro : Assistant, Coach, Manager, Gestionnaire, 
              Développeur et expert dans tous les domaines. Intelligence modulaire 78 langues.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <Check className="text-primary-600 h-4 w-4" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 text-lg"
              onClick={handleTryNow}
              disabled={!isSupported}
            >
              <Mic className="mr-3 h-5 w-5" />
              {isListening ? 'Arrêter l\'écoute' : 'Essayer maintenant'}
              {!isSupported && ' (Non supporté)'}
            </Button>
          </div>
          
          <div className="mt-12 lg:mt-0">
            {/* Voice interface mockup */}
            <Card className="shadow-2xl border border-gray-100">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isListening || isVoiceActive ? 'animate-pulse' : ''
                  }`}>
                    <Mic className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {isListening ? 'Super IARP Pro en écoute' : 'Super IARP Pro disponible'}
                  </h3>
                  <p className="text-gray-600">
                    {isListening ? 'Parlez maintenant...' : 'Dites "Bonjour" pour commencer'}
                  </p>
                </div>
                
                {/* Conversation example */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <User className="text-gray-600 h-4 w-4" />
                    </div>
                    <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-sm text-gray-700">
                        Comment commencer l'apprentissage de l'IA responsable ?
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 justify-end">
                    <div className="bg-accent-500 rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-sm text-white">
                        En tant que votre Coach IA, je recommande le parcours "Fondamentaux IA Éthique". 
                        Je peux aussi vous aider en tant que Manager pour planifier votre apprentissage.
                      </p>
                    </div>
                    <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center">
                      <Bot className="text-accent-600 h-4 w-4" />
                    </div>
                  </div>
                </div>
                
                {/* Language selector in chat */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Langue active:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900">
                        {currentLanguage.nativeName}
                      </span>
                      <ChevronDown className="text-gray-400 h-3 w-3" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
