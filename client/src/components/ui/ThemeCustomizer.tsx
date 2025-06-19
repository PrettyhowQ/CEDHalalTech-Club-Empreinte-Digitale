import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Sparkles, Heart, Sun, Moon, Leaf, Rainbow, Star, RotateCcw } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ThemeConfig {
  id: string;
  name: string;
  mood: string;
  icon: React.ReactNode;
  gradient: string;
  particles: string;
  glowColor: string;
  textColor: string;
  secondaryText: string;
  accentColor: string;
}

const themes: ThemeConfig[] = [
  {
    id: 'original',
    name: 'Original',
    mood: 'Simplicité',
    icon: <RotateCcw className="h-4 w-4" />,
    gradient: 'white',
    particles: 'rgba(59, 130, 246, 0.6)',
    glowColor: 'rgba(59, 130, 246, 0.3)',
    textColor: 'rgb(17, 24, 39)',
    secondaryText: 'rgb(55, 65, 81)',
    accentColor: 'rgb(147, 51, 234)'
  },
  {
    id: 'sunset',
    name: 'Coucher de Soleil',
    mood: 'Chaleureux',
    icon: <Sun className="h-4 w-4" />,
    gradient: 'linear-gradient(-45deg, #ff9a9e, #fecfef, #fecfef, #fecfef)',
    particles: 'rgba(255, 154, 158, 0.8)',
    glowColor: 'rgba(255, 154, 158, 0.4)',
    textColor: 'rgb(255, 255, 255)',
    secondaryText: 'rgba(255, 255, 255, 0.8)',
    accentColor: 'rgb(255, 215, 0)'
  },
  {
    id: 'ocean',
    name: 'Océan Profond',
    mood: 'Sérénité',
    icon: <Moon className="h-4 w-4" />,
    gradient: 'linear-gradient(-45deg, #667eea, #764ba2, #667eea, #764ba2)',
    particles: 'rgba(102, 126, 234, 0.7)',
    glowColor: 'rgba(102, 126, 234, 0.5)',
    textColor: 'rgb(255, 255, 255)',
    secondaryText: 'rgba(255, 255, 255, 0.8)',
    accentColor: 'rgb(0, 255, 255)'
  },
  {
    id: 'forest',
    name: 'Forêt Émeraude',
    mood: 'Nature',
    icon: <Leaf className="h-4 w-4" />,
    gradient: 'linear-gradient(-45deg, #11998e, #38ef7d, #11998e, #38ef7d)',
    particles: 'rgba(56, 239, 125, 0.8)',
    glowColor: 'rgba(17, 153, 142, 0.5)',
    textColor: 'rgb(255, 255, 255)',
    secondaryText: 'rgba(255, 255, 255, 0.9)',
    accentColor: 'rgb(255, 255, 0)'
  },
  {
    id: 'sparkle',
    name: 'Paillettes Dorées',
    mood: 'Élégance',
    icon: <Sparkles className="h-4 w-4" />,
    gradient: 'linear-gradient(-45deg, #f7971e, #ffd200, #f7971e, #ffd200)',
    particles: 'rgba(255, 210, 0, 0.9)',
    glowColor: 'rgba(247, 151, 30, 0.6)',
    textColor: 'rgb(255, 255, 255)',
    secondaryText: 'rgba(255, 255, 255, 0.9)',
    accentColor: 'rgb(255, 215, 0)'
  },
  {
    id: 'neon',
    name: 'Fluo Électrique',
    mood: 'Énergie',
    icon: <Star className="h-4 w-4" />,
    gradient: 'linear-gradient(-45deg, #00ff00, #ff00ff, #00ffff, #ffff00)',
    particles: 'rgba(0, 255, 0, 0.8)',
    glowColor: 'rgba(255, 0, 255, 0.6)',
    textColor: 'rgb(255, 255, 255)',
    secondaryText: 'rgba(255, 255, 255, 0.9)',
    accentColor: 'rgb(0, 255, 255)'
  },
  {
    id: 'ivory',
    name: 'Ivoire Doux',
    mood: 'Douceur',
    icon: <Heart className="h-4 w-4" />,
    gradient: 'linear-gradient(-45deg, #ffecd2, #fcb69f, #ffecd2, #fcb69f)',
    particles: 'rgba(252, 182, 159, 0.7)',
    glowColor: 'rgba(255, 236, 210, 0.5)',
    textColor: 'rgb(139, 69, 19)',
    secondaryText: 'rgba(139, 69, 19, 0.8)',
    accentColor: 'rgb(205, 133, 63)'
  },
  {
    id: 'rainbow',
    name: 'Arc-en-ciel',
    mood: 'Joie',
    icon: <Rainbow className="h-4 w-4" />,
    gradient: 'linear-gradient(-45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
    particles: 'rgba(255, 0, 0, 0.7)',
    glowColor: 'rgba(148, 0, 211, 0.5)',
    textColor: 'rgb(255, 255, 255)',
    secondaryText: 'rgba(255, 255, 255, 0.9)',
    accentColor: 'rgb(255, 255, 255)'
  }
];

export function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('selected_theme');
    return saved || 'original';
  });

  useEffect(() => {
    applyTheme(currentTheme);
    localStorage.setItem('selected_theme', currentTheme);
  }, [currentTheme]);

  const applyTheme = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    if (!theme) return;

    const root = document.documentElement;
    const body = document.body;

    // Appliquer les variables CSS personnalisées
    root.style.setProperty('--theme-gradient', theme.gradient);
    root.style.setProperty('--theme-particles', theme.particles);
    root.style.setProperty('--theme-glow', theme.glowColor);
    root.style.setProperty('--theme-text', theme.textColor);
    root.style.setProperty('--theme-text-secondary', theme.secondaryText);
    root.style.setProperty('--theme-accent', theme.accentColor);

    // Gérer les classes spéciales
    if (themeId === 'original') {
      body.classList.remove('enhanced-visuals');
    } else {
      body.classList.add('enhanced-visuals');
    }

    // Ajouter classe spéciale pour les effets pailletés
    if (themeId === 'sparkle' || themeId === 'neon') {
      body.classList.add('sparkle-effect');
    } else {
      body.classList.remove('sparkle-effect');
    }
  };

  const selectTheme = (themeId: string) => {
    setCurrentTheme(themeId);
    
    // Fermer automatiquement le panel après sélection pour voir l'effet
    setTimeout(() => {
      setIsOpen(false);
    }, 800);
    
    // Feedback visuel
    const theme = themes.find(t => t.id === themeId);
    if (theme && 'vibrate' in navigator) {
      navigator.vibrate?.(50);
    }
  };

  return (
    <>
      {/* Bouton flottant pour ouvrir */}
      <div className="fixed bottom-4 left-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:scale-110 transition-all animate-pulse"
          title="Personnaliser les couleurs"
        >
          <Palette className="h-5 w-5" />
        </Button>
        {!isOpen && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
            Changer de thème
          </div>
        )}
      </div>

      {/* Panel de personnalisation */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-purple-600" />
                  Personnalisez Votre Ambiance
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-xs bg-blue-50 hover:bg-blue-100"
                  >
                    Voir l'effet
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </Button>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Choisissez un thème qui correspond à votre humeur et à votre sensibilité. 
                <span className="font-medium text-purple-600">Cliquez pour voir l'effet immédiatement !</span>
              </p>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {themes.map((theme) => (
                  <div
                    key={theme.id}
                    onClick={() => selectTheme(theme.id)}
                    className={`cursor-pointer p-4 rounded-lg border-2 transition-all hover:scale-105 relative group ${
                      currentTheme === theme.id 
                        ? 'border-purple-500 bg-purple-50 ring-2 ring-purple-200' 
                        : 'border-gray-200 hover:border-purple-300 hover:shadow-lg'
                    }`}
                  >
                    {/* Aperçu du thème */}
                    <div
                      className="w-full h-20 rounded-lg mb-3 flex items-center justify-center"
                      style={{
                        background: theme.gradient,
                        backgroundSize: '400% 400%',
                        animation: theme.id !== 'original' ? 'gradient-shift 3s ease infinite' : 'none'
                      }}
                    >
                      <div className="text-white text-xl font-bold drop-shadow-lg">
                        {theme.icon}
                      </div>
                    </div>
                    
                    {/* Informations du thème */}
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {theme.name}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {theme.mood}
                      </Badge>
                    </div>
                    
                    {/* Indicateur de sélection */}
                    {currentTheme === theme.id && (
                      <div className="absolute top-2 right-2">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Badge "Cliquez ici" pour l'interactivité */}
                    <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Badge variant="secondary" className="text-xs px-2 py-1">
                        Cliquer pour appliquer
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Conseils */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">💡 Conseils</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• <strong>Matin :</strong> Essayez "Coucher de Soleil" ou "Ivoire Doux"</li>
                  <li>• <strong>Travail :</strong> "Océan Profond" favorise la concentration</li>
                  <li>• <strong>Créativité :</strong> "Fluo Électrique" ou "Arc-en-ciel" stimulent</li>
                  <li>• <strong>Détente :</strong> "Forêt Émeraude" apaise naturellement</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}