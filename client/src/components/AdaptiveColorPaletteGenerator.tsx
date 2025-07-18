import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Palette, Copy, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ColorPalette {
  id: string;
  name: string;
  description: string;
  inspiration: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    muted: string;
  };
  culturalSignificance: string;
}

export default function AdaptiveColorPaletteGenerator() {
  const [selectedPalette, setSelectedPalette] = useState<string>('green-classic');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const { toast } = useToast();

  const islamicPalettes: ColorPalette[] = [
    {
      id: 'green-classic',
      name: 'Vert Islamique Classique',
      description: 'Palette traditionnelle inspirée des drapeaux islamiques',
      inspiration: 'Couleur du Prophète ﷺ et symbole de paix',
      colors: {
        primary: '#059669', // Emerald-600
        secondary: '#065f46', // Emerald-800
        accent: '#34d399', // Emerald-400
        background: '#ecfdf5', // Emerald-50
        text: '#064e3b', // Emerald-900
        muted: '#6b7280' // Gray-500
      },
      culturalSignificance: 'Le vert est la couleur sacrée de l\'Islam, associée au Paradis et à la nature bénie d\'Allah'
    },
    {
      id: 'blue-andalusian',
      name: 'Bleu Andalou',
      description: 'Inspiré de l\'architecture islamique d\'Al-Andalus',
      inspiration: 'Mosquées de Cordoue et Granada',
      colors: {
        primary: '#0ea5e9', // Sky-500
        secondary: '#0c4a6e', // Sky-900
        accent: '#7dd3fc', // Sky-300
        background: '#f0f9ff', // Sky-50
        text: '#082f49', // Sky-950
        muted: '#64748b' // Slate-500
      },
      culturalSignificance: 'Bleu céleste évoquant l\'infini divin et la sagesse des scholars andalous'
    },
    {
      id: 'gold-masjid',
      name: 'Or Masjid Nabawi',
      description: 'Dorures des calligraphies et dômes de mosquées',
      inspiration: 'Coupole verte de Médine et art mamlouk',
      colors: {
        primary: '#eab308', // Yellow-500
        secondary: '#713f12', // Yellow-900
        accent: '#fde047', // Yellow-300
        background: '#fefce8', // Yellow-50
        text: '#422006', // Yellow-950
        muted: '#78716c' // Stone-500
      },
      culturalSignificance: 'Or symbolisant la lumière divine et la beauté des arts décoratifs islamiques'
    },
    {
      id: 'rose-persian',
      name: 'Rose Persan',
      description: 'Teintes délicates des miniatures persanes',
      inspiration: 'Art islamique de Perse et roses de Damas',
      colors: {
        primary: '#ec4899', // Pink-500
        secondary: '#831843', // Pink-900
        accent: '#f9a8d4', // Pink-300
        background: '#fdf2f8', // Pink-50
        text: '#500724', // Pink-950
        muted: '#6b7280' // Gray-500
      },
      culturalSignificance: 'Rose évoquant la beauté spirituelle et les jardins paradisiaques'
    },
    {
      id: 'terracotta-morocco',
      name: 'Terre Marocaine',
      description: 'Couleurs chaudes du Maghreb',
      inspiration: 'Architecture de Marrakech et Fès',
      colors: {
        primary: '#ea580c', // Orange-600
        secondary: '#7c2d12', // Orange-900
        accent: '#fed7aa', // Orange-200
        background: '#fff7ed', // Orange-50
        text: '#431407', // Orange-950
        muted: '#78716c' // Stone-500
      },
      culturalSignificance: 'Terre sacrée du Maghreb et chaleur de l\'hospitalité musulmane'
    },
    {
      id: 'purple-ottoman',
      name: 'Pourpre Ottoman',
      description: 'Élégance des cours ottomanes',
      inspiration: 'Palais de Topkapi et céramiques d\'Iznik',
      colors: {
        primary: '#9333ea', // Purple-600
        secondary: '#581c87', // Purple-900
        accent: '#c084fc', // Purple-400
        background: '#faf5ff', // Purple-50
        text: '#3b0764', // Purple-950
        muted: '#6b7280' // Gray-500
      },
      culturalSignificance: 'Pourpre royal symbolisant la noblesse spirituelle et l\'excellence'
    }
  ];

  const selectedPaletteData = islamicPalettes.find(p => p.id === selectedPalette) || islamicPalettes[0];

  const copyColor = (color: string, colorName: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    toast({
      title: 'Couleur copiée !',
      description: `${colorName}: ${color} copié dans votre presse-papiers`,
    });
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const generateCSS = () => {
    const css = `
/* Palette ${selectedPaletteData.name} - CED HalalTech™ */
:root {
  --color-primary: ${selectedPaletteData.colors.primary};
  --color-secondary: ${selectedPaletteData.colors.secondary};
  --color-accent: ${selectedPaletteData.colors.accent};
  --color-background: ${selectedPaletteData.colors.background};
  --color-text: ${selectedPaletteData.colors.text};
  --color-muted: ${selectedPaletteData.colors.muted};
}

/* Classes Tailwind correspondantes */
.bg-islamic-primary { background-color: ${selectedPaletteData.colors.primary}; }
.text-islamic-primary { color: ${selectedPaletteData.colors.primary}; }
.border-islamic-primary { border-color: ${selectedPaletteData.colors.primary}; }
`;
    
    navigator.clipboard.writeText(css);
    toast({
      title: 'CSS généré !',
      description: 'Variables CSS copiées dans votre presse-papiers',
    });
  };

  return (
    <div className="space-y-6">
      {/* Sélecteur de palette */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Palette className="w-5 h-5 text-emerald-600" />
          <h3 className="text-lg font-semibold">Palettes Islamiques Authentiques</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {islamicPalettes.map((palette) => (
            <Button
              key={palette.id}
              variant={selectedPalette === palette.id ? "default" : "outline"}
              onClick={() => setSelectedPalette(palette.id)}
              className="h-auto p-3 flex flex-col gap-2"
            >
              <div className="flex gap-1">
                {Object.values(palette.colors).slice(0, 4).map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <span className="text-xs font-medium">{palette.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Palette sélectionnée */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🎨</span>
            {selectedPaletteData.name}
          </CardTitle>
          <CardDescription>
            {selectedPaletteData.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Inspiration */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🕌 Inspiration Culturelle</h4>
            <p className="text-sm text-gray-700 mb-2">{selectedPaletteData.inspiration}</p>
            <p className="text-xs text-gray-600 italic">{selectedPaletteData.culturalSignificance}</p>
          </div>

          {/* Couleurs */}
          <div className="space-y-4">
            <h4 className="font-semibold">Couleurs de la palette</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(selectedPaletteData.colors).map(([colorName, colorValue]) => (
                <div key={colorName} className="space-y-2">
                  <div
                    className="w-full h-16 rounded-lg border border-gray-200 cursor-pointer hover:scale-105 transition-transform"
                    style={{ backgroundColor: colorValue }}
                    onClick={() => copyColor(colorValue, colorName)}
                  />
                  <div className="text-center">
                    <div className="text-sm font-medium capitalize">{colorName.replace('_', ' ')}</div>
                    <div className="text-xs text-gray-500 font-mono">{colorValue}</div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyColor(colorValue, colorName)}
                      className="mt-1 h-6 px-2"
                    >
                      {copiedColor === colorValue ? (
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button onClick={generateCSS} className="flex-1">
              <Copy className="w-4 h-4 mr-2" />
              Générer CSS
            </Button>
            <Button variant="outline" className="flex-1">
              <Palette className="w-4 h-4 mr-2" />
              Aperçu Live
            </Button>
          </div>

          {/* Preview */}
          <div className="border rounded-lg p-4 space-y-3" style={{ backgroundColor: selectedPaletteData.colors.background }}>
            <h5 className="font-semibold" style={{ color: selectedPaletteData.colors.text }}>
              Aperçu de la palette
            </h5>
            <div 
              className="p-3 rounded" 
              style={{ backgroundColor: selectedPaletteData.colors.primary, color: 'white' }}
            >
              Élément principal (boutons, liens importants)
            </div>
            <div 
              className="p-3 rounded border" 
              style={{ 
                backgroundColor: 'white',
                borderColor: selectedPaletteData.colors.accent,
                color: selectedPaletteData.colors.text 
              }}
            >
              Contenu secondaire avec bordure accent
            </div>
            <p style={{ color: selectedPaletteData.colors.muted }} className="text-sm">
              Texte en sourdine pour informations complémentaires
            </p>
          </div>

          {/* Conformité islamique */}
          <div className="bg-emerald-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-emerald-800 flex items-center gap-2">
              ✅ Conformité Islamique
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-emerald-700">Validation Fiqh :</strong>
                <p className="text-emerald-600">MUBAH - Art islamique traditionnel</p>
              </div>
              <div>
                <strong className="text-emerald-700">Sources :</strong>
                <p className="text-emerald-600">Géométrie sacrée et esthétique halal</p>
              </div>
              <div>
                <strong className="text-emerald-700">Usage recommandé :</strong>
                <p className="text-emerald-600">Interfaces spirituelles et éducatives</p>
              </div>
              <div>
                <strong className="text-emerald-700">Éviter :</strong>
                <p className="text-emerald-600">Contextes non-islamiques ou profanes</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}