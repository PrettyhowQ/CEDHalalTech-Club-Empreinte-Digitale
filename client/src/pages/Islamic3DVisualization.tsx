import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Box, Sparkles, Zap, Shield, Star } from "lucide-react";
import Islamic3DScene from "@/components/Islamic3DScene";

export default function Islamic3DVisualization() {
  const [selectedGeometry, setSelectedGeometry] = useState<'star' | 'dome' | 'pattern' | 'calligraphy'>('star');
  const [isAnimated, setIsAnimated] = useState(true);

  const geometries = [
    {
      type: 'star' as const,
      name: 'Étoile Islamique (Khatam)',
      description: 'Étoile à 8 branches représentant la perfection divine',
      significance: 'Symbole de guidance et de protection dans l\'art islamique',
      icon: Star
    },
    {
      type: 'dome' as const,
      name: 'Dôme de Mosquée',
      description: 'Représentation 3D d\'un dôme architectural islamique',
      significance: 'Symbolise la voûte céleste et l\'élévation spirituelle',
      icon: Box
    },
    {
      type: 'pattern' as const,
      name: 'Motif Géométrique',
      description: 'Patterns géométriques complexes inspirés de l\'art islamique',
      significance: 'Représente l\'infini et l\'unité de la création divine',
      icon: Sparkles
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            🕌 Visualisations 3D Islamiques
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Exploration immersive des géométries sacrées et de l'art islamique en trois dimensions
          </p>
          <div className="text-sm text-gray-400 mt-2 font-arabic">
            الهندسة الإسلامية ثلاثية الأبعاد - Islamic 3D Sacred Geometry
          </div>
        </div>

        {/* Certification Fiqh */}
        <Card className="mb-8 bg-gradient-to-r from-green-900/40 to-emerald-900/40 border-green-600/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Shield className="h-6 w-6 text-green-400" />
              <span>Certification Fiqh - Géométrie Sacrée</span>
              <Badge className="bg-green-600">100% HALAL</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-800/30 p-4 rounded-lg">
                <h4 className="font-semibold text-green-400 mb-2">📐 Géométrie Sacrée</h4>
                <p className="text-sm text-gray-300">
                  "وَخَلَقَ كُلَّ شَيْءٍ فَقَدَّرَهُ تَقْدِيرًا" - Sourate Al-Furqan 25:2
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Dieu a créé toute chose selon une mesure déterminée
                </p>
              </div>
              <div className="bg-slate-800/30 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">🎨 Art Islamique</h4>
                <p className="text-sm text-gray-300">
                  Tradition millénaire de l'art géométrique islamique respectée
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Ibn al-Haytham, Al-Jazari - Maîtres de la géométrie
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Panneau de contrôle */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800/40 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-green-400" />
                  <span>Contrôles 3D</span>
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Personnalisez votre expérience visuelle
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Sélecteur de géométrie */}
                <div>
                  <h4 className="font-semibold text-white mb-3">Géométries Sacrées</h4>
                  <div className="space-y-2">
                    {geometries.map((geo) => (
                      <Button
                        key={geo.type}
                        variant={selectedGeometry === geo.type ? "default" : "outline"}
                        className={`w-full justify-start text-left p-3 h-auto ${
                          selectedGeometry === geo.type 
                            ? 'bg-green-600 text-white' 
                            : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                        }`}
                        onClick={() => setSelectedGeometry(geo.type)}
                      >
                        <geo.icon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <div className="text-left">
                          <div className="font-medium">{geo.name}</div>
                          <div className="text-xs opacity-75">{geo.description}</div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Contrôles d'animation */}
                <div>
                  <h4 className="font-semibold text-white mb-3">Animation</h4>
                  <Button
                    variant={isAnimated ? "default" : "outline"}
                    className={`w-full ${
                      isAnimated 
                        ? 'bg-green-600 text-white' 
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                    onClick={() => setIsAnimated(!isAnimated)}
                  >
                    {isAnimated ? 'Arrêter' : 'Animer'} la Rotation
                  </Button>
                </div>

                {/* Informations sur la géométrie sélectionnée */}
                <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="font-semibold text-green-400 mb-2">
                    Signification Spirituelle
                  </h4>
                  <p className="text-sm text-gray-300">
                    {geometries.find(g => g.type === selectedGeometry)?.significance}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Visualisation 3D */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/40 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Box className="h-5 w-5 text-green-400" />
                  <span>Visualisation Interactive</span>
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Explorez les géométries sacrées en 3D
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-slate-900/50 rounded-lg overflow-hidden">
                  <Islamic3DScene
                    geometryType={selectedGeometry}
                    animated={isAnimated}
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-4 text-center text-sm text-gray-400">
                  💡 Utilisez votre souris pour interagir avec la visualisation
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Galerie d'exemples */}
        <Card className="mt-8 bg-slate-800/40 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-green-400" />
              <span>Galerie d'Art Islamique 3D</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {geometries.map((geo) => (
                <div key={geo.type} className="bg-slate-700/30 p-4 rounded-lg">
                  <div className="aspect-square bg-slate-900/50 rounded-lg mb-3 overflow-hidden">
                    <Islamic3DScene
                      geometryType={geo.type}
                      animated={false}
                      className="w-full h-full"
                    />
                  </div>
                  <h4 className="font-semibold text-white mb-1">{geo.name}</h4>
                  <p className="text-sm text-gray-400">{geo.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Informations techniques */}
        <Card className="mt-8 bg-slate-800/40 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Spécifications Techniques</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-green-400 mb-2">Technologie</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>✓ Three.js - Rendu 3D WebGL</li>
                  <li>✓ Géométries procédurales</li>
                  <li>✓ Animations fluides 60fps</li>
                  <li>✓ Responsive design</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-400 mb-2">Compatibilité</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>✓ Tous navigateurs modernes</li>
                  <li>✓ Mobile et desktop</li>
                  <li>✓ Fonctionne hors ligne</li>
                  <li>✓ Performance optimisée</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}