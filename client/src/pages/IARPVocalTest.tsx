import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Volume2, Send, Mic, Bot, User } from 'lucide-react';

export default function IARPVocalTest() {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState<Array<{role: string, content: string, timestamp: Date}>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      // Nettoyer le texte
      const cleanText = text.replace(/[#*`]/g, '').replace(/\n/g, ' ');
      
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'fr-FR';
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 0.9;
      
      // Utiliser une voix française disponible
      const voices = speechSynthesis.getVoices();
      const frenchVoice = voices.find(voice => voice.lang.startsWith('fr'));
      
      if (frenchVoice) {
        utterance.voice = frenchVoice;
      }
      
      speechSynthesis.speak(utterance);
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    setIsLoading(true);
    
    // Ajouter message utilisateur
    const userMessage = { role: 'user', content: message, timestamp: new Date() };
    setConversation(prev => [...prev, userMessage]);
    
    try {
      // Appel API IARP
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: message,
          language: 'fr'
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        
        // Ajouter réponse IARP
        const iarpMessage = { role: 'assistant', content: data.response, timestamp: new Date() };
        setConversation(prev => [...prev, iarpMessage]);
        
        // LECTURE VOCALE AUTOMATIQUE
        speakText(data.response);
        
      } else {
        throw new Error('Erreur API');
      }
    } catch (error) {
      const errorMsg = { role: 'assistant', content: 'Désolé, une erreur est survenue. Veuillez réessayer.', timestamp: new Date() };
      setConversation(prev => [...prev, errorMsg]);
    }
    
    setMessage('');
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-cyan-800 flex items-center justify-center gap-2">
              <Bot className="h-8 w-8" />
              🎙️ IARP Vocal Test - Écoutez l'IA Parler
            </CardTitle>
            <p className="text-gray-600">Testez la synthèse vocale d'IARP avec OpenAI GPT-4o</p>
          </CardHeader>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Volume2 className="h-5 w-5" />
              Conversation Vocale
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-96 overflow-y-auto mb-4">
              {conversation.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  🔊 Tapez un message ci-dessous pour entendre IARP parler !
                </div>
              ) : (
                conversation.map((msg, index) => (
                  <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-start gap-2 max-w-xs ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <Badge variant={msg.role === 'user' ? 'default' : 'secondary'}>
                        {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                      </Badge>
                      <div className={`p-3 rounded-lg ${msg.role === 'user' ? 'bg-cyan-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
                        <p className="text-sm">{msg.content}</p>
                        {msg.role === 'assistant' && (
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => speakText(msg.content)}
                            className="mt-2 h-6 text-xs"
                          >
                            <Volume2 className="h-3 w-3 mr-1" />
                            Réécouter
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            <div className="flex gap-2">
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tapez votre message pour IARP..."
                className="flex-1"
                rows={3}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!message.trim() || isLoading}
                className="self-end bg-cyan-600 hover:bg-cyan-700"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">✅</div>
                <p className="text-sm text-gray-600">OpenAI GPT-4o Activé</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">🔊</div>
                <p className="text-sm text-gray-600">Synthèse Vocale</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">🛡️</div>
                <p className="text-sm text-gray-600">Filtres Halal</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}