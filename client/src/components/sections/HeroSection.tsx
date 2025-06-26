import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Mic, Leaf, Code, Brain, Apple, BookOpen } from 'lucide-react';
import { useVoice } from '@/context/VoiceContext';

export function HeroSection() {
  const { speak } = useVoice();
  
  const { data: metrics } = useQuery<{
    totalLearners: number;
    partnerCompanies: string;
    ecoRating: string;
  }>({
    queryKey: ['/api/analytics/global'],
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const handleStartFree = () => {
    // Track analytics event
    fetch('/api/analytics/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        eventType: 'cta_clicked', 
        eventData: { action: 'start_free' } 
      }),
    });
  };

  const handleTryChat = () => {
    speak("Bonjour ! Je suis IARP, votre assistant IA responsable. Comment puis-je vous aider aujourd'hui ?");
    // Track analytics event
    fetch('/api/analytics/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        eventType: 'cta_clicked', 
        eventData: { action: 'try_chat' } 
      }),
    });
  };

  return (
    <section className="relative bg-transparent py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="mb-6">
              <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-100">
                <Leaf className="mr-2 h-3 w-3" />
                IA Responsable & Éthique
              </Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Apprenez l'<span className="text-primary-600">IA Éthique</span> 
              <br />avec <span className="text-accent-500">PrettyhowQ</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Plateforme d'apprentissage multilingue dédiée à l'intelligence artificielle responsable, 
              la technologie durable et l'économie circulaire. Formation accessible en 78 langues.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button 
                size="lg" 
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 text-lg"
                onClick={() => window.location.href = '/generateurs-ia'}
              >
                <Brain className="mr-3 h-5 w-5" />
                Générateur Formations IA
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-indigo-500 hover:border-indigo-600 text-indigo-600 hover:text-indigo-700 px-8 py-4 text-lg"
                onClick={() => window.location.href = '/fiqh-informatique'}
              >
                <Code className="mr-3 h-5 w-5" />
                Fiqh Informatique
              </Button>
            </div>
            
            {/* Nouveau bouton Récitation Coran en direct */}
            <div className="flex justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-4 text-lg shadow-lg"
                onClick={() => window.location.href = '/coran-direct'}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Code className="h-6 w-6" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                  <span>Récitation Coran EN DIRECT</span>
                </div>
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg"
                onClick={handleStartFree}
              >
                <Play className="mr-3 h-5 w-5" />
                Commencer gratuitement
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 px-8 py-4 text-lg"
                onClick={handleTryChat}
              >
                <Mic className="mr-3 h-5 w-5" />
                Essayer Chat IARP
              </Button>
            </div>
            
            {/* Real-time Impact Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">
                  {metrics?.totalLearners?.toLocaleString() || '41,343'}
                </div>
                <div className="text-sm text-gray-600">Apprenants actifs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600">
                  {metrics?.partnerCompanies || '240+'}
                </div>
                <div className="text-sm text-gray-600">Entreprises partenaires</div>
              </div>
              <div className="text-center col-span-2 lg:col-span-1">
                <div className="text-3xl font-bold text-accent-500">
                  {metrics?.ecoRating || '4.8'}/5
                </div>
                <div className="text-sm text-gray-600">Note écologique</div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 mt-12 lg:mt-0">
            <div className="relative">
              {/* Main hero image */}
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=800" 
                alt="Intelligence artificielle éthique et durable" 
                className="rounded-2xl shadow-2xl w-full"
              />
              
              {/* Floating cards showing course topics */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Code className="text-primary-600 h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Programmation</div>
                    <div className="text-xs text-gray-500">32 cours disponibles</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                    <Brain className="text-accent-600 h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">IA Responsable</div>
                    <div className="text-xs text-gray-500">78 langues</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
