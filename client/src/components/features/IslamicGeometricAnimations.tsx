import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Settings, 
  Palette,
  Star,
  Hexagon,
  Square,
  Triangle,
  Circle,
  Sparkles
} from 'lucide-react';

interface AnimationPattern {
  id: string;
  name: string;
  arabic_name: string;
  description: string;
  cultural_significance: string;
  complexity: 'simple' | 'medium' | 'complex';
  color_scheme: string[];
  animation_type: 'rotation' | 'scale' | 'morph' | 'flow';
}

const IslamicGeometricAnimations = () => {
  const [selectedPattern, setSelectedPattern] = useState('octagon_star');
  const [isPlaying, setIsPlaying] = useState(true);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [colorScheme, setColorScheme] = useState('classic');
  const [showSettings, setShowSettings] = useState(false);

  const patterns: AnimationPattern[] = [
    {
      id: 'octagon_star',
      name: 'Étoile Octogonale',
      arabic_name: 'نجمة ثمانية (Najma Thamaniya)',
      description: 'Motif classique représentant l\'infini et la perfection divine',
      cultural_significance: 'Symbole de regeneration et de guidance spirituelle',
      complexity: 'medium',
      color_scheme: ['#059669', '#0ea5e9', '#8b5cf6'],
      animation_type: 'rotation'
    },
    {
      id: 'hexagonal_tessellation',
      name: 'Tessellation Hexagonale',
      arabic_name: 'تبليط سداسي (Tablit Sudasi)',
      description: 'Pavage géométrique infini représentant l\'unité dans la diversité',
      cultural_significance: 'Harmonie universelle et interconnexion des croyants',
      complexity: 'complex',
      color_scheme: ['#dc2626', '#ea580c', '#ca8a04'],
      animation_type: 'morph'
    },
    {
      id: 'geometric_mandala',
      name: 'Mandala Géométrique',
      arabic_name: 'دائرة هندسية (Da\'ira Handasiya)',
      description: 'Cercle sacré avec motifs rayonnants symbolisant la création',
      cultural_significance: 'Méditation spirituelle et contemplation divine',
      complexity: 'complex',
      color_scheme: ['#7c3aed', '#db2777', '#059669'],
      animation_type: 'scale'
    },
    {
      id: 'islamic_knot',
      name: 'Nœud Islamique',
      arabic_name: 'عقدة إسلامية (Uqda Islamiya)',
      description: 'Entrelacement sans fin représentant l\'éternité',
      cultural_significance: 'Continuité de la foi et liens entre les musulmans',
      complexity: 'medium',
      color_scheme: ['#0891b2', '#059669', '#7c2d12'],
      animation_type: 'flow'
    },
    {
      id: 'calligraphy_pattern',
      name: 'Motif Calligraphique',
      arabic_name: 'نمط خطي (Namat Khatti)',
      description: 'Géométrie inspirée de la calligraphie arabe',
      cultural_significance: 'Beauté du Coran et sagesse divine',
      complexity: 'simple',
      color_scheme: ['#1e40af', '#059669', '#dc2626'],
      animation_type: 'morph'
    }
  ];

  const colorSchemes = {
    classic: {
      name: 'Classique',
      colors: ['#059669', '#0ea5e9', '#8b5cf6']
    },
    warm: {
      name: 'Chaleureux',
      colors: ['#dc2626', '#ea580c', '#ca8a04']
    },
    cool: {
      name: 'Frais',
      colors: ['#0891b2', '#059669', '#7c2d12']
    },
    royal: {
      name: 'Royal',
      colors: ['#7c3aed', '#db2777', '#059669']
    }
  };

  const currentPattern = patterns.find(p => p.id === selectedPattern) || patterns[0];

  const generateSVGPattern = (pattern: AnimationPattern) => {
    const size = 300;
    const center = size / 2;
    
    switch (pattern.id) {
      case 'octagon_star':
        return (
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={pattern.color_scheme[0]} />
                <stop offset="50%" stopColor={pattern.color_scheme[1]} />
                <stop offset="100%" stopColor={pattern.color_scheme[2]} />
              </linearGradient>
            </defs>
            <g transform={`translate(${center}, ${center})`}>
              {/* Octagon */}
              <polygon
                points="0,-80 56,-56 80,0 56,56 0,80 -56,56 -80,0 -56,-56"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="2"
                className={isPlaying ? 'animate-spin' : ''}
                style={{
                  animationDuration: `${4 / animationSpeed}s`,
                  transformOrigin: 'center'
                }}
              />
              {/* Inner star */}
              <polygon
                points="0,-60 42,-42 60,0 42,42 0,60 -42,42 -60,0 -42,-42"
                fill="url(#gradient1)"
                opacity="0.3"
                className={isPlaying ? 'animate-pulse' : ''}
                style={{
                  animationDuration: `${2 / animationSpeed}s`
                }}
              />
              {/* Center circle */}
              <circle
                cx="0"
                cy="0"
                r="20"
                fill={pattern.color_scheme[1]}
                className={isPlaying ? 'animate-ping' : ''}
                style={{
                  animationDuration: `${3 / animationSpeed}s`
                }}
              />
            </g>
          </svg>
        );
      
      case 'hexagonal_tessellation':
        return (
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <defs>
              <pattern id="hexPattern" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                <polygon
                  points="30,0 52,15 52,37 30,52 8,37 8,15"
                  fill="none"
                  stroke={pattern.color_scheme[0]}
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexPattern)" />
            <g transform={`translate(${center}, ${center})`}>
              {Array.from({length: 6}).map((_, i) => (
                <polygon
                  key={i}
                  points="0,-40 35,-20 35,20 0,40 -35,20 -35,-20"
                  fill={pattern.color_scheme[i % 3]}
                  opacity="0.6"
                  transform={`rotate(${i * 60})`}
                  className={isPlaying ? 'animate-spin' : ''}
                  style={{
                    animationDuration: `${6 / animationSpeed}s`,
                    transformOrigin: 'center'
                  }}
                />
              ))}
            </g>
          </svg>
        );
      
      case 'geometric_mandala':
        return (
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <defs>
              <radialGradient id="radialGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={pattern.color_scheme[0]} />
                <stop offset="50%" stopColor={pattern.color_scheme[1]} />
                <stop offset="100%" stopColor={pattern.color_scheme[2]} />
              </radialGradient>
            </defs>
            <g transform={`translate(${center}, ${center})`}>
              {/* Outer petals */}
              {Array.from({length: 12}).map((_, i) => (
                <path
                  key={i}
                  d="M 0,0 L 0,-100 A 15,15 0 0,1 26,-96 L 0,0 Z"
                  fill="url(#radialGrad)"
                  opacity="0.7"
                  transform={`rotate(${i * 30})`}
                  className={isPlaying ? 'animate-pulse' : ''}
                  style={{
                    animationDuration: `${3 / animationSpeed}s`,
                    animationDelay: `${i * 0.1}s`,
                    transformOrigin: 'center'
                  }}
                />
              ))}
              {/* Inner circle */}
              <circle
                cx="0"
                cy="0"
                r="40"
                fill="none"
                stroke={pattern.color_scheme[1]}
                strokeWidth="2"
                className={isPlaying ? 'animate-spin' : ''}
                style={{
                  animationDuration: `${8 / animationSpeed}s`,
                  transformOrigin: 'center'
                }}
              />
            </g>
          </svg>
        );
      
      case 'islamic_knot':
        return (
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <g transform={`translate(${center}, ${center})`}>
              <path
                d="M -60,-60 Q 0,-100 60,-60 Q 100,0 60,60 Q 0,100 -60,60 Q -100,0 -60,-60"
                fill="none"
                stroke={pattern.color_scheme[0]}
                strokeWidth="8"
                strokeLinecap="round"
                className={isPlaying ? 'animate-pulse' : ''}
                style={{
                  animationDuration: `${4 / animationSpeed}s`
                }}
              />
              <path
                d="M -60,60 Q 0,100 60,60 Q 100,0 60,-60 Q 0,-100 -60,-60 Q -100,0 -60,60"
                fill="none"
                stroke={pattern.color_scheme[1]}
                strokeWidth="6"
                strokeLinecap="round"
                className={isPlaying ? 'animate-spin' : ''}
                style={{
                  animationDuration: `${6 / animationSpeed}s`,
                  transformOrigin: 'center'
                }}
              />
            </g>
          </svg>
        );
      
      case 'calligraphy_pattern':
        return (
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <g transform={`translate(${center}, ${center})`}>
              {/* Stylized Arabic calligraphy-inspired pattern */}
              <path
                d="M -80,0 Q -40,-60 0,-40 Q 40,-20 80,0 Q 40,60 0,40 Q -40,20 -80,0"
                fill={pattern.color_scheme[0]}
                opacity="0.8"
                className={isPlaying ? 'animate-pulse' : ''}
                style={{
                  animationDuration: `${3 / animationSpeed}s`
                }}
              />
              <path
                d="M 0,-80 Q 60,-40 40,0 Q 20,40 0,80 Q -60,40 -40,0 Q -20,-40 0,-80"
                fill={pattern.color_scheme[1]}
                opacity="0.6"
                className={isPlaying ? 'animate-spin' : ''}
                style={{
                  animationDuration: `${5 / animationSpeed}s`,
                  transformOrigin: 'center'
                }}
              />
            </g>
          </svg>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Animation Display */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                {currentPattern.name}
              </CardTitle>
              <p className="text-sm text-gray-600">{currentPattern.arabic_name}</p>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg p-8 flex items-center justify-center min-h-[400px]">
                {generateSVGPattern(currentPattern)}
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Button
                    variant={isPlaying ? "default" : "outline"}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center gap-2"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {isPlaying ? 'Pause' : 'Lecture'}
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={() => setShowSettings(!showSettings)}
                    className="flex items-center gap-2"
                  >
                    <Settings className="w-4 h-4" />
                    Paramètres
                  </Button>
                </div>

                {showSettings && (
                  <div className="space-y-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Vitesse d'animation: {animationSpeed}x
                      </label>
                      <Slider
                        value={[animationSpeed]}
                        onValueChange={(value) => setAnimationSpeed(value[0])}
                        max={3}
                        min={0.5}
                        step={0.1}
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Schéma de couleurs
                      </label>
                      <div className="flex gap-2">
                        {Object.entries(colorSchemes).map(([key, scheme]) => (
                          <Button
                            key={key}
                            variant={colorScheme === key ? "default" : "outline"}
                            size="sm"
                            onClick={() => setColorScheme(key)}
                            className="flex items-center gap-2"
                          >
                            <div className="flex gap-1">
                              {scheme.colors.map((color, i) => (
                                <div
                                  key={i}
                                  className="w-3 h-3 rounded-full"
                                  style={{ backgroundColor: color }}
                                />
                              ))}
                            </div>
                            {scheme.name}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pattern Selection & Info */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Motifs Géométriques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {patterns.map((pattern) => (
                  <div
                    key={pattern.id}
                    className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedPattern === pattern.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedPattern(pattern.id)}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-sm">{pattern.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {pattern.complexity}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 mb-1">{pattern.arabic_name}</p>
                    <p className="text-xs text-gray-500">{pattern.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                Signification Culturelle
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-1">
                    {currentPattern.name}
                  </h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    {currentPattern.cultural_significance}
                  </p>
                </div>
                
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">
                    Art Islamique Traditionnel
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Ces motifs géométriques sont inspirés de l'art islamique traditionnel,
                    reflétant la beauté mathématique et la spiritualité dans l'interface utilisateur.
                  </p>
                </div>
                
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-1">
                    Innovation Respectueuse
                  </h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Intégration moderne de symboles culturels authentiques pour créer 
                    une expérience utilisateur unique et respectueuse des valeurs islamiques.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 p-4 border rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2025 CED HalalTech™ - Micro-animations Géométriques Islamiques
          <br />
          <span className="text-xs">
            Inspiration culturelle authentique pour une expérience utilisateur transcendante
          </span>
        </p>
      </div>
    </div>
  );
};

export default IslamicGeometricAnimations;