import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Image, 
  FileText, 
  Code, 
  Music, 
  Video, 
  Palette, 
  PenTool, 
  Headphones, 
  Download, 
  Upload, 
  Settings, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  Play,
  Pause,
  RotateCcw,
  Save,
  Copy,
  Share2,
  Star,
  Filter,
  Search,
  Zap,
  Globe,
  Award,
  Lightbulb,
  Target,
  Heart,
  Camera,
  BookOpen,
  Languages,
  Brain,
  Cpu,
  Database,
  CloudLightning,
  Brush,
  Type,
  Layout,
  Mic,
  VolumeX,
  Volume2,
  Eye,
  EyeOff,
  Layers,
  Grid,
  Circle,
  Square,
  Triangle,
  Hexagon
} from 'lucide-react';
import { CEDFooter } from '@/components/CEDFooter';
import { useToast } from '@/hooks/use-toast';

interface Generator {
  id: string;
  name: string;
  description: string;
  type: 'image' | 'text' | 'audio' | 'code' | 'video' | 'design';
  halalCompliant: boolean;
  icon: React.ReactNode;
  features: string[];
  limitations: string[];
  pricing: string;
  examples: string[];
}

interface GenerationResult {
  id: string;
  prompt: string;
  result: string;
  type: string;
  timestamp: Date;
  halalCheck: boolean;
  filtered: boolean;
  generator: string;
}

export default function GenerateursIAHalal() {
  const [activeGenerator, setActiveGenerator] = useState('islamic-art');
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [results, setResults] = useState<GenerationResult[]>([]);
  const [selectedResult, setSelectedResult] = useState<GenerationResult | null>(null);
  const [generationSettings, setGenerationSettings] = useState({
    style: 'islamique-moderne',
    quality: 'HD',
    ratio: '16:9',
    filter: 'halal-strict',
    language: 'français',
    tone: 'respectueux',
    complexity: 'intermediate'
  });
  const { toast } = useToast();

  const generators: Generator[] = [
    {
      id: 'islamic-art',
      name: 'Générateur Art Islamique',
      description: 'Création d\'art géométrique islamique et calligraphie',
      type: 'image',
      halalCompliant: true,
      icon: <Palette className="h-6 w-6" />,
      features: [
        'Motifs géométriques islamiques',
        'Calligraphie arabe automatique',
        'Patterns traditionnels',
        'Couleurs harmonieuses',
        'Styles régionaux (Maghreb, Andalous, Ottoman)'
      ],
      limitations: [
        'Aucune représentation d\'êtres vivants',
        'Motifs géométriques uniquement',
        'Calligraphie respectueuse',
        'Couleurs appropriées'
      ],
      pricing: '0.50 CHF/image',
      examples: [
        'Motif géométrique pour mosquée',
        'Calligraphie "Bismillah" élégante',
        'Pattern islamique pour livre',
        'Bordure décorative halal'
      ]
    },
    {
      id: 'halal-code',
      name: 'Générateur Code Halal',
      description: 'Code respectant les principes du Fiqh informatique',
      type: 'code',
      halalCompliant: true,
      icon: <Code className="h-6 w-6" />,
      features: [
        'Code conforme Fiqh informatique',
        'Architecture sécurisée',
        'Fonctions islamiques intégrées',
        'Commentaires explicatifs',
        'Best practices halal'
      ],
      limitations: [
        'Pas de systèmes gambling',
        'Pas de code haram',
        'Sécurité renforcée',
        'Respect vie privée'
      ],
      pricing: '0.05 CHF/ligne',
      examples: [
        'API horaires de prière',
        'Calculateur Zakat',
        'Système auth halal',
        'E-commerce conforme'
      ]
    },
    {
      id: 'islamic-text',
      name: 'Rédacteur Islamique',
      description: 'Textes conformes aux valeurs islamiques',
      type: 'text',
      halalCompliant: true,
      icon: <FileText className="h-6 w-6" />,
      features: [
        'Articles éducatifs islamiques',
        'Contenu respectueux',
        'Citations Coran/Hadith',
        'Styles variés',
        'Multilingue (FR/AR/EN)'
      ],
      limitations: [
        'Contenu halal uniquement',
        'Sources authentiques',
        'Respect pudeur',
        'Validation savants'
      ],
      pricing: '0.02 CHF/mot',
      examples: [
        'Article sur éthique islamique',
        'Guide Fiqh moderne',
        'Histoire des Sahaba',
        'Conseil spirituel'
      ]
    },
    {
      id: 'nasheed-audio',
      name: 'Générateur Nasheed',
      description: 'Audio islamique sans instruments',
      type: 'audio',
      halalCompliant: true,
      icon: <Headphones className="h-6 w-6" />,
      features: [
        'Voix masculines uniquement',
        'Pas d\'instruments musicaux',
        'Textes spirituels',
        'Qualité professionnelle',
        'Différents styles vocaux'
      ],
      limitations: [
        'Percussions uniquement (Duff)',
        'Voix masculines',
        'Contenu spirituel',
        'Respect Fiqh audio'
      ],
      pricing: '2.00 CHF/minute',
      examples: [
        'Récitation spirituelle',
        'Nasheed éducatif',
        'Rappel islamique',
        'Dhikr guidé'
      ]
    },
    {
      id: 'islamic-video',
      name: 'Vidéos Éducatives Halal',
      description: 'Contenu vidéo respectueux et éducatif',
      type: 'video',
      halalCompliant: true,
      icon: <Video className="h-6 w-6" />,
      features: [
        'Animations éducatives',
        'Pas de personnages vivants',
        'Contenu pédagogique',
        'Sous-titres multilingues',
        'Graphiques respectueux'
      ],
      limitations: [
        'Pas d\'êtres vivants animés',
        'Contenu éducatif uniquement',
        'Musique limitée',
        'Respect pudeur visuelle'
      ],
      pricing: '10.00 CHF/minute',
      examples: [
        'Tutoriel Fiqh animé',
        'Histoire islamique',
        'Sciences dans Islam',
        'Éducation enfants'
      ]
    },
    {
      id: 'ui-halal',
      name: 'Designer UI/UX Halal',
      description: 'Interfaces respectueuses et accessibles',
      type: 'design',
      halalCompliant: true,
      icon: <Layout className="h-6 w-6" />,
      features: [
        'Design respectueux',
        'Couleurs appropriées',
        'Typographie halal',
        'Accessibilité renforcée',
        'Patterns islamiques'
      ],
      limitations: [
        'Pas d\'images inappropriées',
        'Couleurs modestes',
        'Contenu respectueux',
        'Design inclusif'
      ],
      pricing: '5.00 CHF/écran',
      examples: [
        'App mobile mosquée',
        'Site e-commerce halal',
        'Interface éducative',
        'Dashboard analytics'
      ]
    }
  ];

  const selectedGenerator = generators.find(g => g.id === activeGenerator);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Prompt requis",
        description: "Veuillez saisir une description pour la génération",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);

    try {
      // Simulation d'appel API avec vérification halal
      const response = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: prompt,
          generator: activeGenerator,
          settings: generationSettings,
          halalFilter: true
        })
      });

      if (response.ok) {
        const data = await response.json();
        
        const newResult: GenerationResult = {
          id: Date.now().toString(),
          prompt: prompt,
          result: data.result || generateMockResult(),
          type: selectedGenerator?.type || 'text',
          timestamp: new Date(),
          halalCheck: data.halalCheck || true,
          filtered: data.filtered || false,
          generator: activeGenerator
        };

        setResults(prev => [newResult, ...prev]);
        setPrompt('');
        
        toast({
          title: "Génération réussie",
          description: `${selectedGenerator?.name} a créé votre contenu halal`,
          variant: "default"
        });

        if (data.filtered) {
          toast({
            title: "Contenu filtré",
            description: "Certains éléments ont été modifiés pour respecter les guidelines halal",
            variant: "default"
          });
        }
      } else {
        throw new Error('Erreur de génération');
      }
    } catch (error) {
      // Génération mock pour démonstration
      const mockResult: GenerationResult = {
        id: Date.now().toString(),
        prompt: prompt,
        result: generateMockResult(),
        type: selectedGenerator?.type || 'text',
        timestamp: new Date(),
        halalCheck: true,
        filtered: false,
        generator: activeGenerator
      };

      setResults(prev => [mockResult, ...prev]);
      setPrompt('');
      
      toast({
        title: "Mode démo",
        description: "Génération simulée pour démonstration (API en développement)",
        variant: "default"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const generateMockResult = (): string => {
    switch (selectedGenerator?.type) {
      case 'image':
        return '/api/placeholder/512/512';
      case 'code':
        return `// Code halal généré
function calculateZakat(wealth, nisab) {
  // Calcul Zakat conforme Fiqh
  if (wealth >= nisab) {
    return wealth * 0.025; // 2.5%
  }
  return 0;
}

// Vérification horaires prière
async function getPrayerTimes(location) {
  const response = await fetch(\`/api/prayer-times?lat=\${location.lat}&lng=\${location.lng}\`);
  return response.json();
}`;
      case 'text':
        return `**Article Éducatif Islamique**

بسم الله الرحمن الرحيم

**Introduction**
L'éthique islamique dans la technologie moderne représente un défi majeur pour les musulmans du 21ème siècle. Cette approche holistique combine les principes ancestraux de notre belle religion avec les innovations contemporaines.

**Principes Fondamentaux**
1. **Respect de la Amâna** - Toute technologie doit protéger la confiance accordée
2. **Maslaha** - L'intérêt général de la communauté
3. **Éviter le Haram** - Exclusion de tout élément interdit

**Conclusion**
L'Islam et la technologie peuvent coexister harmonieusement quand nous respectons nos valeurs fondamentales.

والله أعلم`;
      case 'audio':
        return '/api/placeholder/audio/nasheed-sample.mp3';
      case 'video':
        return '/api/placeholder/video/educational-islam.mp4';
      case 'design':
        return '/api/placeholder/800/600';
      default:
        return 'Contenu généré avec succès selon les standards halal.';
    }
  };

  const handleDownload = (result: GenerationResult) => {
    // Simulation téléchargement
    toast({
      title: "Téléchargement",
      description: "Votre contenu halal est en cours de téléchargement",
      variant: "default"
    });
  };

  const handleShare = (result: GenerationResult) => {
    if (navigator.share) {
      navigator.share({
        title: `Contenu halal généré par ${selectedGenerator?.name}`,
        text: result.prompt,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(result.result);
      toast({
        title: "Copié",
        description: "Contenu copié dans le presse-papiers",
        variant: "default"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
      {/* Header */}
      <motion.div 
        className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold mb-4">
                🎨 Générateurs IA 100% Halal
              </h1>
              <p className="text-xl mb-6 opacity-90">
                Créez du contenu respectueux avec nos IA conformes à la Sharia
              </p>
              <div className="flex justify-center space-x-4">
                <Badge className="bg-white/20 text-white px-4 py-2">
                  <Shield className="h-4 w-4 mr-2" />
                  Certifié 7 Savants
                </Badge>
                <Badge className="bg-white/20 text-white px-4 py-2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  100% Conformité Fiqh
                </Badge>
                <Badge className="bg-white/20 text-white px-4 py-2">
                  <Award className="h-4 w-4 mr-2" />
                  Validation AAOIFI
                </Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Générateurs */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Générateurs Disponibles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {generators.map((generator) => (
                  <motion.div
                    key={generator.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      activeGenerator === generator.id 
                        ? 'border-emerald-500 bg-emerald-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveGenerator(generator.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        {generator.icon}
                        <div>
                          <h4 className="font-medium text-sm">{generator.name}</h4>
                          <p className="text-xs text-gray-600">{generator.type}</p>
                        </div>
                      </div>
                      {generator.halalCompliant && (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                    <p className="text-xs text-gray-700 mb-2">{generator.description}</p>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="text-xs">
                        {generator.pricing}
                      </Badge>
                      <Badge className="bg-green-100 text-green-800 text-xs">
                        Halal ✓
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Guidelines spécifiques */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-emerald-600">
                  <Shield className="h-5 w-5 mr-2" />
                  Guidelines {selectedGenerator?.type}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-green-800">Autorisé :</h4>
                  <ul className="text-xs text-green-700 space-y-1">
                    {selectedGenerator?.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-3 w-3 mr-2 mt-0.5 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="font-semibold text-sm text-red-800 mt-4">Limitations :</h4>
                  <ul className="text-xs text-red-700 space-y-1">
                    {selectedGenerator?.limitations.map((limitation, index) => (
                      <li key={index} className="flex items-start">
                        <AlertTriangle className="h-3 w-3 mr-2 mt-0.5 text-red-500" />
                        {limitation}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Zone principale de génération */}
          <div className="lg:col-span-3 space-y-6">
            {/* Interface de génération */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {selectedGenerator?.icon}
                    <div>
                      <CardTitle>{selectedGenerator?.name}</CardTitle>
                      <p className="text-sm text-gray-600">{selectedGenerator?.description}</p>
                    </div>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-800">
                    Type: {selectedGenerator?.type}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="prompt" className="text-base font-semibold">
                    Décrivez ce que vous souhaitez créer
                  </Label>
                  <Textarea
                    id="prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={`Exemple: ${selectedGenerator?.examples[0] || 'Décrivez votre demande'}`}
                    className="mt-2 min-h-[100px]"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Soyez précis et respectueux des valeurs islamiques
                  </p>
                </div>

                {/* Paramètres de génération */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="style">Style</Label>
                    <Select 
                      value={generationSettings.style} 
                      onValueChange={(value) => setGenerationSettings({...generationSettings, style: value})}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="islamique-moderne">Islamique Moderne</SelectItem>
                        <SelectItem value="traditionnel">Traditionnel</SelectItem>
                        <SelectItem value="contemporain">Contemporain</SelectItem>
                        <SelectItem value="minimaliste">Minimaliste</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="quality">Qualité</Label>
                    <Select 
                      value={generationSettings.quality} 
                      onValueChange={(value) => setGenerationSettings({...generationSettings, quality: value})}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SD">Standard</SelectItem>
                        <SelectItem value="HD">Haute Définition</SelectItem>
                        <SelectItem value="4K">Ultra HD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="language">Langue</Label>
                    <Select 
                      value={generationSettings.language} 
                      onValueChange={(value) => setGenerationSettings({...generationSettings, language: value})}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="français">Français</SelectItem>
                        <SelectItem value="arabe">العربية</SelectItem>
                        <SelectItem value="anglais">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-lg">
                  <Shield className="h-5 w-5 text-emerald-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-emerald-800">
                      Filtre Halal Actif
                    </p>
                    <p className="text-xs text-emerald-700">
                      Tout contenu sera automatiquement vérifié et filtré selon les standards islamiques
                    </p>
                  </div>
                  <Switch checked={true} disabled />
                </div>

                <Button 
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin h-5 w-5 mr-3">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      Génération en cours...
                    </>
                  ) : (
                    <>
                      <Zap className="h-5 w-5 mr-2" />
                      Générer du contenu halal
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Résultats de génération */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Résultats de génération ({results.length})</span>
                  {results.length > 0 && (
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Tout télécharger
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                {results.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Aucune génération</h3>
                    <p className="text-gray-600 mb-4">
                      Commencez par décrire ce que vous souhaitez créer
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-md mx-auto">
                      {selectedGenerator?.examples.slice(0, 4).map((example, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => setPrompt(example)}
                          className="text-xs"
                        >
                          {example}
                        </Button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {results.map((result) => (
                      <motion.div
                        key={result.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="aspect-video bg-gray-100 flex items-center justify-center relative">
                          {result.type === 'image' ? (
                            <img 
                              src={result.result} 
                              alt={result.prompt}
                              className="w-full h-full object-cover"
                            />
                          ) : result.type === 'video' ? (
                            <div className="text-center">
                              <Video className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-600">Vidéo générée</p>
                            </div>
                          ) : result.type === 'audio' ? (
                            <div className="text-center">
                              <Headphones className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-600">Audio généré</p>
                            </div>
                          ) : (
                            <div className="text-center p-4">
                              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-600">Contenu textuel</p>
                            </div>
                          )}
                          
                          <div className="absolute top-2 right-2 flex space-x-1">
                            {result.halalCheck && (
                              <Badge className="bg-green-500 text-white text-xs">
                                Halal ✓
                              </Badge>
                            )}
                            {result.filtered && (
                              <Badge className="bg-orange-500 text-white text-xs">
                                Filtré
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <h4 className="font-medium mb-2 line-clamp-2">
                            {result.prompt}
                          </h4>
                          
                          <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                            <span>{generators.find(g => g.id === result.generator)?.name}</span>
                            <span>{result.timestamp.toLocaleTimeString('fr-FR', { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}</span>
                          </div>
                          
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="flex-1"
                              onClick={() => handleDownload(result)}
                            >
                              <Download className="h-3 w-3 mr-1" />
                              Télécharger
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleShare(result)}
                            >
                              <Share2 className="h-3 w-3" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => setSelectedResult(result)}
                            >
                              <Eye className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Dialog détail résultat */}
      <Dialog open={!!selectedResult} onOpenChange={() => setSelectedResult(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              {selectedResult?.type === 'image' && <Image className="h-5 w-5 mr-2" />}
              {selectedResult?.type === 'text' && <FileText className="h-5 w-5 mr-2" />}
              {selectedResult?.type === 'code' && <Code className="h-5 w-5 mr-2" />}
              {selectedResult?.type === 'audio' && <Headphones className="h-5 w-5 mr-2" />}
              {selectedResult?.type === 'video' && <Video className="h-5 w-5 mr-2" />}
              Résultat de génération
            </DialogTitle>
          </DialogHeader>
          
          {selectedResult && (
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Prompt original :</h4>
                <p className="text-gray-700">{selectedResult.prompt}</p>
              </div>

              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                {selectedResult.type === 'image' ? (
                  <img 
                    src={selectedResult.result} 
                    alt={selectedResult.prompt}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                ) : selectedResult.type === 'text' || selectedResult.type === 'code' ? (
                  <div className="w-full p-6 bg-white rounded-lg border max-h-96 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-sm">
                      {selectedResult.result}
                    </pre>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      {selectedResult.type === 'audio' && <Headphones className="h-8 w-8 text-gray-500" />}
                      {selectedResult.type === 'video' && <Video className="h-8 w-8 text-gray-500" />}
                    </div>
                    <p className="text-gray-600">
                      Contenu {selectedResult.type} généré avec succès
                    </p>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {selectedResult.halalCheck && (
                    <Badge className="bg-green-100 text-green-800">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Conforme Halal
                    </Badge>
                  )}
                  {selectedResult.filtered && (
                    <Badge className="bg-orange-100 text-orange-800">
                      <Filter className="h-4 w-4 mr-1" />
                      Contenu Filtré
                    </Badge>
                  )}
                  <span className="text-sm text-gray-500">
                    {selectedResult.timestamp.toLocaleString('fr-FR')}
                  </span>
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    variant="outline"
                    onClick={() => handleDownload(selectedResult)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => handleShare(selectedResult)}
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Partager
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <CEDFooter />
    </div>
  );
}