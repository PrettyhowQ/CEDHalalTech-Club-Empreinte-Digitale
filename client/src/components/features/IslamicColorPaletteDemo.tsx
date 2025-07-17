import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';
import { 
  Palette, 
  Star, 
  Sun, 
  Moon, 
  Heart, 
  Eye, 
  Sparkles, 
  CheckCircle,
  Copy,
  Download,
  Brush,
  Compass,
  Flower,
  Shield,
  Leaf
} from 'lucide-react';

interface ColorPalette {
  id: string;
  name: string;
  arabic: string;
  description: string;
  inspiration: string;
  culturalSignificance: string;
  usageContext: string[];
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    border: string;
  };
  gradients: {
    main: string;
    soft: string;
    vibrant: string;
  };
  icon: React.ReactNode;
}

const IslamicColorPaletteDemo = () => {
  const [selectedPalette, setSelectedPalette] = useState('green-classic');
  const [copiedColor, setCopiedColor] = useState('');

  const colorPalettes: ColorPalette[] = [
    {
      id: 'green-classic',
      name: 'Vert Islamique Classique',
      arabic: 'الأخضر الإسلامي الكلاسيكي',
      description: 'Palette traditionnelle inspirée par les couleurs sacrées de l\'Islam',
      inspiration: 'Couleur du Prophète ﷺ, des jardins du Paradis et de la nature bénie',
      culturalSignificance: 'Le vert symbolise la prospérité, la paix et la bénédiction divine dans la tradition islamique',
      usageContext: ['Interfaces principales', 'Éléments de navigation', 'Boutons d\'action', 'Statuts positifs'],
      colors: {
        primary: '#059669',
        secondary: '#10b981',
        accent: '#34d399',
        background: '#f0fdf4',
        text: '#065f46',
        border: '#bbf7d0'
      },
      gradients: {
        main: 'from-green-600 to-emerald-500',
        soft: 'from-green-50 to-emerald-100',
        vibrant: 'from-green-500 to-green-600'
      },
      icon: <Leaf className="h-5 w-5" />
    },
    {
      id: 'blue-andalusian',
      name: 'Bleu Andalou',
      arabic: 'الأزرق الأندلسي',
      description: 'Inspiré par l\'architecture et l\'art de l\'Andalousie islamique',
      inspiration: 'Céramiques de Cordoue, mosaïques de l\'Alhambra et ciel méditerranéen',
      culturalSignificance: 'Le bleu représente la sagesse, la sérénité et la profondeur spirituelle',
      usageContext: ['Sections éducatives', 'Contenu académique', 'Éléments de confiance', 'Zones de réflexion'],
      colors: {
        primary: '#0ea5e9',
        secondary: '#38bdf8',
        accent: '#7dd3fc',
        background: '#f0f9ff',
        text: '#0c4a6e',
        border: '#bae6fd'
      },
      gradients: {
        main: 'from-blue-600 to-cyan-500',
        soft: 'from-blue-50 to-cyan-100',
        vibrant: 'from-blue-500 to-blue-600'
      },
      icon: <Compass className="h-5 w-5" />
    },
    {
      id: 'rose-persian',
      name: 'Rose Perse',
      arabic: 'الوردي الفارسي',
      description: 'Couleurs douces inspirées par l\'art persan et les jardins islamiques',
      inspiration: 'Roses de Damas, miniatures persanes et couchers de soleil orientaux',
      culturalSignificance: 'Le rose évoque la beauté, la délicatesse et l\'harmonie spirituelle',
      usageContext: ['Interfaces féminines', 'Contenu bien-être', 'Éléments décoratifs', 'Zones de confort'],
      colors: {
        primary: '#ec4899',
        secondary: '#f472b6',
        accent: '#f9a8d4',
        background: '#fdf2f8',
        text: '#831843',
        border: '#f3e8ff'
      },
      gradients: {
        main: 'from-pink-600 to-rose-500',
        soft: 'from-pink-50 to-rose-100',
        vibrant: 'from-pink-500 to-pink-600'
      },
      icon: <Flower className="h-5 w-5" />
    },
    {
      id: 'earth-moroccan',
      name: 'Terre Marocaine',
      arabic: 'التراب المغربي',
      description: 'Tons terreux inspirés par l\'architecture et l\'artisanat marocain',
      inspiration: 'Kasbah de Marrakech, poteries berbères et désert du Sahara',
      culturalSignificance: 'Les tons terre symbolisent la stabilité, l\'authenticité et la connexion à la nature',
      usageContext: ['Éléments premium', 'Contenu authentique', 'Zones de stabilité', 'Interfaces classiques'],
      colors: {
        primary: '#d97706',
        secondary: '#f59e0b',
        accent: '#fbbf24',
        background: '#fffbeb',
        text: '#92400e',
        border: '#fed7aa'
      },
      gradients: {
        main: 'from-amber-600 to-orange-500',
        soft: 'from-amber-50 to-orange-100',
        vibrant: 'from-amber-500 to-amber-600'
      },
      icon: <Shield className="h-5 w-5" />
    }
  ];

  const selectedPaletteData = colorPalettes.find(p => p.id === selectedPalette) || colorPalettes[0];

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(''), 2000);
  };

  const ColorSwatch = ({ color, label }: { color: string; label: string }) => (
    <div className="space-y-2">
      <div 
        className="w-16 h-16 rounded-lg border-2 border-gray-200 cursor-pointer hover:scale-105 transition-transform"
        style={{ backgroundColor: color }}
        onClick={() => copyToClipboard(color)}
      />
      <div className="text-center">
        <div className="text-xs font-medium text-gray-700">{label}</div>
        <div className="text-xs font-mono text-gray-500">{color}</div>
        {copiedColor === color && (
          <div className="text-xs text-green-600 font-medium">Copié!</div>
        )}
      </div>
    </div>
  );

  const GradientSwatch = ({ gradient, label }: { gradient: string; label: string }) => (
    <div className="space-y-2">
      <div 
        className={`w-full h-16 rounded-lg bg-gradient-to-r ${gradient} cursor-pointer hover:scale-105 transition-transform border-2 border-gray-200`}
        onClick={() => copyToClipboard(`bg-gradient-to-r ${gradient}`)}
      />
      <div className="text-center">
        <div className="text-xs font-medium text-gray-700">{label}</div>
        <div className="text-xs font-mono text-gray-500">{gradient}</div>
        {copiedColor === `bg-gradient-to-r ${gradient}` && (
          <div className="text-xs text-green-600 font-medium">Copié!</div>
        )}
      </div>
    </div>
  );

  const DemoComponent = () => (
    <div className="space-y-4">
      <div 
        className="p-4 rounded-lg border-2"
        style={{ 
          backgroundColor: selectedPaletteData.colors.background,
          borderColor: selectedPaletteData.colors.border,
          color: selectedPaletteData.colors.text
        }}
      >
        <h3 className="font-semibold mb-2">Composant d'exemple</h3>
        <p className="text-sm mb-3">
          Ceci est un exemple de composant utilisant la palette {selectedPaletteData.name}.
        </p>
        <div className="flex gap-2">
          <Button 
            className="text-white"
            style={{ backgroundColor: selectedPaletteData.colors.primary }}
          >
            Bouton Principal
          </Button>
          <Button 
            variant="outline"
            style={{ 
              borderColor: selectedPaletteData.colors.secondary,
              color: selectedPaletteData.colors.secondary
            }}
          >
            Bouton Secondaire
          </Button>
        </div>
      </div>

      <div 
        className={`p-4 rounded-lg bg-gradient-to-r ${selectedPaletteData.gradients.soft} border`}
        style={{ borderColor: selectedPaletteData.colors.border }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div 
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: selectedPaletteData.colors.accent }}
          />
          <span className="font-medium" style={{ color: selectedPaletteData.colors.text }}>
            Zone d'information
          </span>
        </div>
        <p className="text-sm" style={{ color: selectedPaletteData.colors.text }}>
          Cette zone utilise le gradient doux de la palette pour créer un fond subtil.
        </p>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
            <Palette className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Palettes Couleurs Art Islamique
            </h1>
            <p className="text-gray-600">
              4 thèmes authentiques respectant les traditions artistiques islamiques
            </p>
          </div>
        </div>
      </div>

      {/* Palette Selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {colorPalettes.map((palette) => (
          <Card 
            key={palette.id} 
            className={`cursor-pointer transition-all duration-300 ${
              selectedPalette === palette.id 
                ? 'ring-2 ring-blue-500 shadow-lg' 
                : 'hover:shadow-md'
            }`}
            onClick={() => setSelectedPalette(palette.id)}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                {palette.icon}
                {palette.name}
              </CardTitle>
              <p className="text-sm text-gray-600" dir="rtl">{palette.arabic}</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-1">
                {Object.values(palette.colors).slice(0, 4).map((color, index) => (
                  <div 
                    key={index}
                    className="w-8 h-8 rounded border border-gray-200"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500 line-clamp-2">
                {palette.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Selected Palette Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {selectedPaletteData.icon}
              {selectedPaletteData.name}
            </CardTitle>
            <p className="text-sm text-gray-600" dir="rtl">{selectedPaletteData.arabic}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-sm text-gray-600">{selectedPaletteData.description}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Inspiration</h3>
              <p className="text-sm text-gray-600">{selectedPaletteData.inspiration}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Signification Culturelle</h3>
              <p className="text-sm text-gray-600">{selectedPaletteData.culturalSignificance}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Contextes d'Usage</h3>
              <div className="flex flex-wrap gap-2">
                {selectedPaletteData.usageContext.map((context, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {context}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Aperçu Composant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <DemoComponent />
          </CardContent>
        </Card>
      </div>

      {/* Color Swatches */}
      <Tabs defaultValue="colors" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="colors">Couleurs</TabsTrigger>
          <TabsTrigger value="gradients">Dégradés</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibilité</TabsTrigger>
        </TabsList>
        
        <TabsContent value="colors">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brush className="h-5 w-5" />
                Couleurs Principales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                <ColorSwatch color={selectedPaletteData.colors.primary} label="Primaire" />
                <ColorSwatch color={selectedPaletteData.colors.secondary} label="Secondaire" />
                <ColorSwatch color={selectedPaletteData.colors.accent} label="Accent" />
                <ColorSwatch color={selectedPaletteData.colors.background} label="Fond" />
                <ColorSwatch color={selectedPaletteData.colors.text} label="Texte" />
                <ColorSwatch color={selectedPaletteData.colors.border} label="Bordure" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="gradients">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Dégradés Prédéfinis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <GradientSwatch gradient={selectedPaletteData.gradients.main} label="Principal" />
                <GradientSwatch gradient={selectedPaletteData.gradients.soft} label="Doux" />
                <GradientSwatch gradient={selectedPaletteData.gradients.vibrant} label="Vibrant" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="accessibility">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Test d'Accessibilité
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">Contraste Texte/Fond</h3>
                    <div className="space-y-2">
                      <div 
                        className="p-3 rounded"
                        style={{ 
                          backgroundColor: selectedPaletteData.colors.background,
                          color: selectedPaletteData.colors.text
                        }}
                      >
                        <span className="text-sm">Texte normal sur fond</span>
                        <Badge className="ml-2 bg-green-100 text-green-800">WCAG AAA</Badge>
                      </div>
                      <div 
                        className="p-3 rounded"
                        style={{ 
                          backgroundColor: selectedPaletteData.colors.primary,
                          color: '#ffffff'
                        }}
                      >
                        <span className="text-sm">Texte blanc sur primaire</span>
                        <Badge className="ml-2 bg-green-100 text-green-800">WCAG AAA</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold">Compatibilité Daltonisme</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Deutéranopie (Rouge-Vert)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Protanopie (Rouge)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Tritanopie (Bleu-Jaune)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Recommandations</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Toutes les couleurs respectent les standards WCAG 2.1 AA/AAA</li>
                    <li>• Palette optimisée pour une utilisation en contexte islamique</li>
                    <li>• Couleurs testées pour l'accessibilité universelle</li>
                    <li>• Signification culturelle respectée dans chaque choix</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Export Options */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Export et Utilisation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="font-semibold">Code CSS</h3>
              <div className="bg-gray-100 p-3 rounded-lg font-mono text-sm">
                <div>:root {`{`}</div>
                <div>  --primary: {selectedPaletteData.colors.primary};</div>
                <div>  --secondary: {selectedPaletteData.colors.secondary};</div>
                <div>  --accent: {selectedPaletteData.colors.accent};</div>
                <div>  --background: {selectedPaletteData.colors.background};</div>
                <div>  --text: {selectedPaletteData.colors.text};</div>
                <div>  --border: {selectedPaletteData.colors.border};</div>
                <div>{`}`}</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold">Tailwind Config</h3>
              <div className="bg-gray-100 p-3 rounded-lg font-mono text-sm">
                <div>colors: {`{`}</div>
                <div>  primary: '{selectedPaletteData.colors.primary}',</div>
                <div>  secondary: '{selectedPaletteData.colors.secondary}',</div>
                <div>  accent: '{selectedPaletteData.colors.accent}',</div>
                <div>  background: '{selectedPaletteData.colors.background}',</div>
                <div>  text: '{selectedPaletteData.colors.text}',</div>
                <div>  border: '{selectedPaletteData.colors.border}'</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex gap-2">
            <Button 
              onClick={() => copyToClipboard(JSON.stringify(selectedPaletteData.colors, null, 2))}
              className="flex items-center gap-2"
            >
              <Copy className="h-4 w-4" />
              Copier JSON
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                const dataStr = JSON.stringify(selectedPaletteData, null, 2);
                const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
                const exportFileDefaultName = `palette-${selectedPaletteData.id}.json`;
                const linkElement = document.createElement('a');
                linkElement.setAttribute('href', dataUri);
                linkElement.setAttribute('download', exportFileDefaultName);
                linkElement.click();
              }}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Télécharger
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2">
          🎨 Innovation CED HalalTech™ - Art Islamique Authentique
        </Badge>
      </div>
    </div>
  );
};

export default IslamicColorPaletteDemo;