import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, Gift, Sparkles, Home, BookOpen } from 'lucide-react';

interface GeometricPattern {
  id: string;
  name: string;
  animation: string;
  duration: string;
  colors: string[];
}

const IslamicPatterns: GeometricPattern[] = [
  {
    id: 'arabesque',
    name: 'Arabesque Classique',
    animation: 'spin',
    duration: '4s',
    colors: ['#059669', '#0891b2', '#7c3aed']
  },
  {
    id: 'geometric-star',
    name: 'Étoile Géométrique',
    animation: 'pulse',
    duration: '2s',
    colors: ['#dc2626', '#f59e0b', '#10b981']
  },
  {
    id: 'islamic-tile',
    name: 'Carrelage Islamique',
    animation: 'bounce',
    duration: '3s',
    colors: ['#1f2937', '#6366f1', '#ec4899']
  }
];

const IslamicSVGPattern = ({ pattern, isActive }: { pattern: GeometricPattern; isActive: boolean }) => (
  <div className={`relative w-16 h-16 ${isActive ? `animate-${pattern.animation}` : ''}`}>
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      className="transition-all duration-300"
      style={{ animationDuration: pattern.duration }}
    >
      {pattern.id === 'arabesque' && (
        <>
          <defs>
            <linearGradient id="arabesqueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={pattern.colors[0]} />
              <stop offset="50%" stopColor={pattern.colors[1]} />
              <stop offset="100%" stopColor={pattern.colors[2]} />
            </linearGradient>
          </defs>
          <path
            d="M32 8 L48 24 L32 40 L16 24 Z M32 24 L40 32 L32 40 L24 32 Z"
            fill="url(#arabesqueGrad)"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="32" cy="32" r="6" fill="white" opacity="0.8" />
        </>
      )}
      
      {pattern.id === 'geometric-star' && (
        <>
          <defs>
            <radialGradient id="starGrad">
              <stop offset="0%" stopColor={pattern.colors[0]} />
              <stop offset="70%" stopColor={pattern.colors[1]} />
              <stop offset="100%" stopColor={pattern.colors[2]} />
            </radialGradient>
          </defs>
          <polygon
            points="32,4 36,20 52,20 40,30 44,46 32,36 20,46 24,30 12,20 28,20"
            fill="url(#starGrad)"
            stroke="white"
            strokeWidth="1.5"
          />
          <circle cx="32" cy="32" r="4" fill="white" />
        </>
      )}
      
      {pattern.id === 'islamic-tile' && (
        <>
          <defs>
            <pattern id="tilePattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <rect width="16" height="16" fill={pattern.colors[0]} />
              <circle cx="8" cy="8" r="3" fill={pattern.colors[1]} />
            </pattern>
          </defs>
          <rect width="64" height="64" fill="url(#tilePattern)" />
          <rect width="64" height="64" fill="none" stroke={pattern.colors[2]} strokeWidth="2" />
        </>
      )}
    </svg>
  </div>
);

const FloatingCalligraphy = ({ text, isVisible }: { text: string; isVisible: boolean }) => (
  <div className={`absolute top-4 right-4 transition-all duration-1000 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
  }`}>
    <div className="bg-gradient-to-r from-amber-100 to-yellow-100 px-4 py-2 rounded-lg border-2 border-amber-300 shadow-lg">
      <div className="text-amber-800 font-bold text-lg text-right" dir="rtl">
        {text}
      </div>
    </div>
  </div>
);

export default function IslamicMicroInteractions() {
  const [activePattern, setActivePattern] = useState<string | null>(null);
  const [showCalligraphy, setShowCalligraphy] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const calligraphyTexts = [
    'بِسْمِ اللَّهِ',
    'الْحَمْدُ لِلَّهِ',
    'سُبْحَانَ اللَّهِ',
    'أَللَّهُ أَكْبَرُ',
    'لَا إِلَهَ إِلَّا اللَّهُ'
  ];

  const triggerInteraction = (patternId: string, event: React.MouseEvent) => {
    setActivePattern(patternId);
    setInteractionCount(prev => prev + 1);
    
    // Afficher calligraphie aléatoire
    setShowCalligraphy(true);
    
    // Créer effet de particules
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const newParticles = Array.from({ length: 6 }, (_, i) => ({
        id: Date.now() + i,
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      }));
      setParticles(prev => [...prev, ...newParticles]);
    }

    // Reset après animation
    setTimeout(() => {
      setActivePattern(null);
      setShowCalligraphy(false);
    }, 2000);

    // Nettoyer particules
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id < Date.now() - 3000));
    }, 3000);
  };

  const getCurrentCalligraphy = () => {
    return calligraphyTexts[interactionCount % calligraphyTexts.length];
  };

  return (
    <div ref={containerRef} className="relative min-h-screen p-6 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      
      {/* Particules flottantes */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-3 h-3 bg-yellow-400 rounded-full animate-ping"
          style={{
            left: particle.x,
            top: particle.y,
            animationDuration: '1.5s'
          }}
        />
      ))}

      {/* Calligraphie flottante */}
      <FloatingCalligraphy 
        text={getCurrentCalligraphy()} 
        isVisible={showCalligraphy} 
      />

      <div className="max-w-6xl mx-auto space-y-8">
        
        <Card className="border-2 border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50">
          <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Sparkles className="h-8 w-8" />
              Micro-interactions Art Islamique CED
              <Star className="h-8 w-8 text-yellow-300" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            
            {/* Patterns Géométriques Interactifs */}
            <Card className="mb-8 border border-emerald-300">
              <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-6 w-6" />
                  Motifs Géométriques Islamiques Interactifs
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {IslamicPatterns.map((pattern) => (
                    <div key={pattern.id} className="text-center space-y-4">
                      <div className="flex justify-center">
                        <Button
                          onClick={(e) => triggerInteraction(pattern.id, e)}
                          className={`w-24 h-24 rounded-full transition-all duration-300 ${
                            activePattern === pattern.id
                              ? 'scale-110 shadow-2xl bg-gradient-to-r from-yellow-400 to-orange-400'
                              : 'bg-gradient-to-r from-gray-100 to-gray-200 hover:scale-105 hover:shadow-lg'
                          }`}
                        >
                          <IslamicSVGPattern 
                            pattern={pattern} 
                            isActive={activePattern === pattern.id} 
                          />
                        </Button>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-gray-800">{pattern.name}</h3>
                        <p className="text-sm text-gray-600">
                          Cliquez pour déclencher l'animation
                        </p>
                      </div>

                      {activePattern === pattern.id && (
                        <Badge className="animate-bounce bg-gradient-to-r from-green-400 to-blue-400 text-white">
                          Animation Active!
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Boutons avec Effets Hover Islamiques */}
            <Card className="mb-8 border border-purple-300">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6" />
                  Boutons avec Effets Culturels
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  
                  <Button className="h-16 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 hover:scale-105 hover:rotate-1 transition-all duration-300 text-white font-bold">
                    <div className="text-center">
                      <Home className="h-6 w-6 mx-auto mb-1" />
                      <div>CED Bank</div>
                    </div>
                  </Button>

                  <Button className="h-16 bg-gradient-to-r from-blue-400 to-indigo-400 hover:from-blue-500 hover:to-indigo-500 hover:scale-105 hover:-rotate-1 transition-all duration-300 text-white font-bold">
                    <div className="text-center">
                      <BookOpen className="h-6 w-6 mx-auto mb-1" />
                      <div>Institut CED</div>
                    </div>
                  </Button>

                  <Button className="h-16 bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 hover:scale-105 hover:rotate-1 transition-all duration-300 text-white font-bold">
                    <div className="text-center">
                      <Star className="h-6 w-6 mx-auto mb-1" />
                      <div>Al-Aman</div>
                    </div>
                  </Button>

                  <Button className="h-16 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 hover:scale-105 hover:-rotate-1 transition-all duration-300 text-white font-bold">
                    <div className="text-center">
                      <Gift className="h-6 w-6 mx-auto mb-1" />
                      <div>TechForAll</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Animations de Feedback */}
            <Card className="border border-yellow-300">
              <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-6 w-6" />
                  Retours Visuels Culturels
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Statistiques d'Interaction
                    </h3>
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span>Interactions totales:</span>
                        <Badge className="bg-emerald-500 text-white">
                          {interactionCount}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Animation Active
                    </h3>
                    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span>Motif en cours:</span>
                        <Badge className={`${
                          activePattern 
                            ? 'bg-blue-500 animate-pulse' 
                            : 'bg-gray-400'
                        } text-white`}>
                          {activePattern || 'Aucun'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Citation Islamique */}
            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl border-2 border-indigo-300">
              <div className="text-center">
                <div className="text-lg font-semibold text-indigo-800 mb-2">
                  "وَفِي كُلِّ شَيْءٍ لَهُ آيَةٌ تَدُلُّ عَلَىٰ أَنَّهُ وَاحِدٌ"
                </div>
                <div className="text-sm text-indigo-600 italic">
                  "En toute chose il y a un signe qui indique qu'Il est Unique"
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  L'art islamique révèle la beauté de la géométrie divine
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}