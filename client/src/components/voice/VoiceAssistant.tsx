import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Mic, MicOff, Send } from 'lucide-react';
import { useVoice } from '@/context/VoiceContext';
import { useLanguage } from '@/context/LanguageContext';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

export function VoiceAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState<any[]>([]);
  const [conversationId, setConversationId] = useState<string | null>(null);
  
  const { isListening, startListening, stopListening, speak, isSupported } = useVoice();
  const { currentLanguage } = useLanguage();

  const chatMutation = useMutation({
    mutationFn: async (data: { message: string; conversationId?: string; language: string }) => {
      const response = await apiRequest('POST', '/api/chat', data);
      return response.json();
    },
    onSuccess: (data) => {
      const newMessages = [
        { role: 'user', content: message, timestamp: new Date().toISOString() },
        { role: 'assistant', content: data.response, timestamp: new Date().toISOString() },
      ];
      
      setConversation(prev => [...prev, ...newMessages]);
      setConversationId(data.conversationId);
      
      // Speak the response
      speak(data.response, currentLanguage.code + '-' + currentLanguage.code.toUpperCase());
      setMessage('');
    },
    onError: (error) => {
      console.error('Chat error:', error);
    },
  });

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    chatMutation.mutate({
      message,
      conversationId: conversationId || undefined,
      language: currentLanguage.code,
    });
  };

  const handleVoiceToggle = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-accent-500 hover:bg-accent-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <Mic className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Floating Voice Assistant */}
      <div className="fixed bottom-6 right-6 z-50">
        <Card className="w-96 shadow-2xl border border-gray-200">
          <CardContent className="p-0">
            {/* Header */}
            <div className="bg-accent-500 text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="font-semibold">Super IARP Pro</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-accent-600 h-8 w-8 p-0"
                >
                  ×
                </Button>
              </div>
              <p className="text-sm text-accent-100 mt-1">
                Assistant IA en {currentLanguage.nativeName}
              </p>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {conversation.length === 0 ? (
                <div className="text-center text-gray-500 mt-8">
                  <Mic className="h-12 w-12 mx-auto mb-4 text-accent-500" />
                  <p>Salut ! Je suis IARP, votre assistant IA responsable.</p>
                  <p className="text-sm mt-2">Tapez votre message ou utilisez la voix.</p>
                </div>
              ) : (
                conversation.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        msg.role === 'user'
                          ? 'bg-accent-500 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                    </div>
                  </div>
                ))
              )}
              
              {chatMutation.isPending && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tapez votre message..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  disabled={chatMutation.isPending}
                  className="flex-1"
                />
                {isSupported && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleVoiceToggle}
                    className={isListening ? 'bg-red-50 border-red-300' : ''}
                  >
                    {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  </Button>
                )}
                <Button 
                  size="sm" 
                  onClick={handleSendMessage}
                  disabled={!message.trim() || chatMutation.isPending}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Header Version for smaller screens */}
      <Button
        className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg text-sm font-medium md:flex items-center space-x-2 transition-colors hidden"
        onClick={() => setIsOpen(true)}
      >
        <Mic className="h-4 w-4" />
        <span>Chat IARP</span>
      </Button>
    </>
  );
}
