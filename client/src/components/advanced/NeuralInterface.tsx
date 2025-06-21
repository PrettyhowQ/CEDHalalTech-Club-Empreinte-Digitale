import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Eye, 
  Waves, 
  Activity, 
  Target, 
  Lightbulb,
  Cpu,
  Heart,
  Ear
} from 'lucide-react';

interface BrainWave {
  type: 'alpha' | 'beta' | 'gamma' | 'theta' | 'delta';
  frequency: number;
  amplitude: number;
  coherence: number;
}

interface CognitiveState {
  focus: number;
  creativity: number;
  stress: number;
  flow: number;
  learning: number;
}

export function NeuralInterface() {
  const [isConnected, setIsConnected] = useState(false);
  const [brainWaves, setBrainWaves] = useState<BrainWave[]>([]);
  const [cognitiveState, setCognitiveState] = useState<CognitiveState>({
    focus: 0,
    creativity: 0,
    stress: 0,
    flow: 0,
    learning: 0
  });
  const [neuralFeedback, setNeuralFeedback] = useState<string>('');

  useEffect(() => {
    if (isConnected) {
      const interval = setInterval(() => {
        // Simulation d'ondes cérébrales en temps réel
        const newWaves: BrainWave[] = [
          {
            type: 'alpha',
            frequency: 8 + Math.random() * 5,
            amplitude: Math.random() * 100,
            coherence: 70 + Math.random() * 30
          },
          {
            type: 'beta',
            frequency: 13 + Math.random() * 17,
            amplitude: Math.random() * 100,
            coherence: 60 + Math.random() * 40
          },
          {
            type: 'gamma',
            frequency: 30 + Math.random() * 70,
            amplitude: Math.random() * 100,
            coherence: 50 + Math.random() * 50
          },
          {
            type: 'theta',
            frequency: 4 + Math.random() * 4,
            amplitude: Math.random() * 100,
            coherence: 80 + Math.random() * 20
          }
        ];
        setBrainWaves(newWaves);

        // État cognitif basé sur les ondes
        setCognitiveState({
          focus: newWaves.find(w => w.type === 'beta')?.coherence || 0,
          creativity: newWaves.find(w => w.type === 'alpha')?.coherence || 0,
          stress: 100 - (newWaves.find(w => w.type === 'alpha')?.amplitude || 50),
          flow: (newWaves.find(w => w.type === 'theta')?.coherence || 0),
          learning: newWaves.find(w => w.type === 'gamma')?.coherence || 0
        });

        // Feedback personnalisé
        const feedback = generateNeuralFeedback(newWaves);
        setNeuralFeedback(feedback);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isConnected]);

  const generateNeuralFeedback = (waves: BrainWave[]): string => {
    const alpha = waves.find(w => w.type === 'alpha')?.coherence || 0;
    const beta = waves.find(w => w.type === 'beta')?.coherence || 0;
    
    if (alpha > 80) return "État optimal pour l'apprentissage créatif détecté";
    if (beta > 85) return "Concentration maximale - moment idéal pour les tâches complexes";
    if (alpha < 40 && beta > 70) return "Niveau de stress élevé - respirations profondes recommandées";
    return "Analysing neural patterns for optimal learning state...";
  };

  const getWaveColor = (type: string) => {
    switch (type) {
      case 'alpha': return 'text-green-600 bg-green-100';
      case 'beta': return 'text-blue-600 bg-blue-100';
      case 'gamma': return 'text-purple-600 bg-purple-100';
      case 'theta': return 'text-orange-600 bg-orange-100';
      case 'delta': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <motion.div
          animate={{ 
            scale: isConnected ? [1, 1.05, 1] : 1,
            opacity: isConnected ? 1 : 0.7
          }}
          transition={{ duration: 2, repeat: isConnected ? Infinity : 0 }}
          className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center"
        >
          <Brain className="h-10 w-10 text-white" />
        </motion.div>
        
        <div>
          <h2 className="text-3xl font-bold text-white drop-shadow-lg">
            Interface Cerveau-Ordinateur
          </h2>
          <p className="text-white/80 drop-shadow-lg">
            Première interface neurale non-invasive pour l'apprentissage optimisé
          </p>
        </div>

        <Button 
          onClick={() => setIsConnected(!isConnected)}
          className={isConnected ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}
        >
          {isConnected ? (
            <>
              <Activity className="h-4 w-4 mr-2" />
              Interface Active
            </>
          ) : (
            <>
              <Brain className="h-4 w-4 mr-2" />
              Activer Interface
            </>
          )}
        </Button>
      </div>

      {isConnected && (
        <>
          {/* État Cognitif */}
          <Card className="border-2 border-pink-200 bg-gradient-to-r from-pink-50 to-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-pink-600" />
                État Cognitif en Temps Réel
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Concentration</span>
                    <span className="text-sm">{cognitiveState.focus.toFixed(0)}%</span>
                  </div>
                  <Progress value={cognitiveState.focus} className="h-2" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Créativité</span>
                    <span className="text-sm">{cognitiveState.creativity.toFixed(0)}%</span>
                  </div>
                  <Progress value={cognitiveState.creativity} className="h-2" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">État de Flow</span>
                    <span className="text-sm">{cognitiveState.flow.toFixed(0)}%</span>
                  </div>
                  <Progress value={cognitiveState.flow} className="h-2" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Capacité d'Apprentissage</span>
                    <span className="text-sm">{cognitiveState.learning.toFixed(0)}%</span>
                  </div>
                  <Progress value={cognitiveState.learning} className="h-2" />
                </div>
              </div>

              {neuralFeedback && (
                <div className="mt-4 p-3 bg-white rounded-lg border border-pink-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium text-sm">Feedback Neural IA</span>
                  </div>
                  <p className="text-sm text-gray-700">{neuralFeedback}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Ondes Cérébrales */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Waves className="h-5 w-5 text-blue-600" />
                Ondes Cérébrales en Temps Réel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {brainWaves.map((wave, index) => (
                  <motion.div
                    key={`${wave.type}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Badge className={getWaveColor(wave.type)}>
                        {wave.type.toUpperCase()}
                      </Badge>
                      <div className="text-sm">
                        <div className="font-medium">{wave.frequency.toFixed(1)} Hz</div>
                        <div className="text-gray-500">Amplitude: {wave.amplitude.toFixed(0)}μV</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{wave.coherence.toFixed(0)}%</div>
                      <div className="text-xs text-gray-500">Cohérence</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {/* Technologies Futuristes */}
      <Card className="border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Cpu className="h-5 w-5 text-purple-600" />
            Technologies Révolutionnaires 2025-2035
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                <Brain className="h-4 w-4" />
                Interface Neurale
              </h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Lecture EEG non-invasive</li>
                <li>• Biofeedback en temps réel</li>
                <li>• Optimisation cognitive automatique</li>
                <li>• Adaptation contenu selon état mental</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Réalité Augmentée
              </h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Hologrammes éducatifs 3D</li>
                <li>• Simulation quantique immersive</li>
                <li>• Manipulation objets virtuels</li>
                <li>• Environnements adaptatifs</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Bien-être Intégré
              </h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Monitoring stress automatique</li>
                <li>• Suggestions pauses optimales</li>
                <li>• Méditation guidée IA</li>
                <li>• Équilibre vie-apprentissage</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}