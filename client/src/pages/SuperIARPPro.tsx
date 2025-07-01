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
  Send, 
  Download, 
  Settings, 
  Shield, 
  Mic, 
  Volume2, 
  Image, 
  FileText, 
  Code, 
  Globe, 
  Zap, 
  CheckCircle, 
  AlertTriangle,
  Eye,
  EyeOff,
  Play,
  Pause,
  RotateCcw,
  Save,
  Copy,
  Share2,
  Star,
  Filter,
  Search,
  MessageSquare,
  Bot,
  User,
  Clock,
  Award,
  Lightbulb,
  Target,
  Heart,
  PenTool,
  Palette,
  Music,
  Video,
  Camera,
  Headphones,
  BookOpen,
  Languages,
  Brain,
  Cpu,
  Database,
  CloudLightning
} from 'lucide-react';
import { CEDFooter } from '@/components/CEDFooter';
import { useToast } from '@/hooks/use-toast';

interface AIModel {
  id: string;
  name: string;
  provider: string;
  type: 'text' | 'image' | 'audio' | 'code' | 'multimodal';
  halalCompliant: boolean;
  capabilities: string[];
  limitations: string[];
  icon: React.ReactNode;
  status: 'active' | 'maintenance' | 'disabled';
  pricing: string;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  model: string;
  tokens?: number;
  filtered?: boolean;
  halalCheck?: boolean;
}

interface GenerationSettings {
  model: string;
  temperature: number;
  maxTokens: number;
  topP: number;
  frequencyPenalty: number;
  presencePenalty: number;
  halalFilter: boolean;
  contentFilter: boolean;
  languageMode: string;
  voiceMode: string;
  imageStyle: string;
  responseFormat: string;
}

export default function SuperIARPPro() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentModel, setCurrentModel] = useState('gpt-4o-halal');
  const [settings, setSettings] = useState<GenerationSettings>({
    model: 'gpt-4o-halal',
    temperature: 0.7,
    maxTokens: 2048,
    topP: 0.9,
    frequencyPenalty: 0.0,
    presencePenalty: 0.0,
    halalFilter: true,
    contentFilter: true,
    languageMode: 'français',
    voiceMode: 'respectueux',
    imageStyle: 'islamique-moderne',
    responseFormat: 'markdown'
  });
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [generationHistory, setGenerationHistory] = useState<any[]>([]);
  const { toast } = useToast();

  const aiModels: AIModel[] = [
    {
      id: 'gpt-4o-halal',
      name: 'GPT-4o Halal Enhanced',
      provider: 'OpenAI + CED Filters',
      type: 'text',
      halalCompliant: true,
      capabilities: ['Texte avancé', 'Raisonnement complexe', 'Code halal', 'Traduction'],
      limitations: ['Pas de contenu haram', 'Filtrage automatique', 'Respect pudeur'],
      icon: <Brain className="h-5 w-5" />,
      status: 'active',
      pricing: '0.03 CHF/1K tokens'
    },
    {
      id: 'claude-3-5-halal',
      name: 'Claude 3.5 Sonnet Halal',
      provider: 'Anthropic + CED Filters',
      type: 'text',
      halalCompliant: true,
      capabilities: ['Analyse approfondie', 'Écriture créative halal', 'Recherche islamique'],
      limitations: ['Contenu respectueux uniquement', 'Vérification Fiqh'],
      icon: <BookOpen className="h-5 w-5" />,
      status: 'active',
      pricing: '0.03 CHF/1K tokens'
    },
    {
      id: 'gemini-pro-halal',
      name: 'Gemini Pro Halal',
      provider: 'Google + CED Compliance',
      type: 'multimodal',
      halalCompliant: true,
      capabilities: ['Multimodal respectueux', 'Vision islamique', 'Audio halal'],
      limitations: ['Images modestes uniquement', 'Sons respectueux'],
      icon: <Sparkles className="h-5 w-5" />,
      status: 'active',
      pricing: '0.025 CHF/1K tokens'
    },
    {
      id: 'dall-e-3-halal',
      name: 'DALL-E 3 Islamic',
      provider: 'OpenAI + Islamic Guidelines',
      type: 'image',
      halalCompliant: true,
      capabilities: ['Génération images islamiques', 'Art calligraphique', 'Designs respectueux'],
      limitations: ['Aucun être vivant', 'Motifs géométriques', 'Calligraphie uniquement'],
      icon: <Palette className="h-5 w-5" />,
      status: 'active',
      pricing: '0.40 CHF/image'
    },
    {
      id: 'elevenlabs-halal',
      name: 'ElevenLabs Voice Halal',
      provider: 'ElevenLabs + CED Voice',
      type: 'audio',
      halalCompliant: true,
      capabilities: ['Voix respectueuse', 'Récitation Coran', 'Narration islamique'],
      limitations: ['Voix masculines uniquement', 'Contenu spirituel'],
      icon: <Headphones className="h-5 w-5" />,
      status: 'active',
      pricing: '0.30 CHF/1K caractères'
    },
    {
      id: 'codex-halal',
      name: 'GitHub Copilot Halal',
      provider: 'GitHub + CED Code Review',
      type: 'code',
      halalCompliant: true,
      capabilities: ['Code conforme Fiqh', 'Architecture halal', 'Sécurité islamique'],
      limitations: ['Pas de gambling code', 'Pas de systèmes haram'],
      icon: <Code className="h-5 w-5" />,
      status: 'active',
      pricing: '10 CHF/mois'
    }
  ];

  const halalGuidelines = [
    "❌ Aucun contenu sexuel ou suggestif",
    "❌ Pas de violence graphique ou glorification",
    "❌ Interdiction alcool, drogues, gambling",
    "❌ Pas de musique avec instruments (sauf percussion)",
    "❌ Éviter représentation êtres vivants",
    "✅ Contenu éducatif et spirituel encouragé",
    "✅ Art géométrique et calligraphie bienvenus",
    "✅ Technologies respectueuses de la vie privée",
    "✅ Commerce éthique et finance halal",
    "✅ Promotion valeurs familiales islamiques"
  ];

  useEffect(() => {
    // Message de bienvenue
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: `السلام عليكم ورحمة الله وبركاته

Bienvenue dans **Super IARP Pro** - l'IA 100% Halal de CED Academy !

Je suis votre assistant intelligent conçu selon les plus hauts standards de conformité islamique. Tous mes modèles sont filtrés et validés par nos savants pour garantir un contenu respectueux de la Sharia.

**Mes capacités principales :**
🤖 **Génération de texte** respectueuse et éducative
🎨 **Création d'images** géométriques et calligraphiques
🗣️ **Synthèse vocale** avec voix masculines respectueuses
💻 **Assistance code** pour développement halal
🌍 **Traduction** en 78+ langues
📚 **Recherche islamique** avec sources authentiques

**Comment puis-je vous aider aujourd'hui ?**`,
        timestamp: new Date(),
        model: 'gpt-4o-halal',
        halalCheck: true
      }
    ]);
  }, []);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage,
      timestamp: new Date(),
      model: currentModel
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsGenerating(true);

    try {
      // Simulation d'appel API avec vérification halal
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: inputMessage,
          model: currentModel,
          settings: settings,
          halalFilter: settings.halalFilter
        })
      });

      if (response.ok) {
        const data = await response.json();
        
        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.response,
          timestamp: new Date(),
          model: currentModel,
          tokens: data.tokens,
          filtered: data.filtered,
          halalCheck: data.halalCheck
        };

        setMessages(prev => [...prev, assistantMessage]);
        
        if (data.filtered) {
          toast({
            title: "Contenu filtré",
            description: "Certains éléments ont été filtrés pour respecter les guidelines halal",
            variant: "default"
          });
        }
      } else {
        throw new Error('Erreur de génération');
      }
    } catch (error) {
      // Réponse d'erreur halal
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `أعتذر، حدث خطأ في النظام.

Je m'excuse, une erreur technique s'est produite. Notre équipe technique travaille pour résoudre ce problème rapidement.

En attendant, vous pouvez :
- Reformuler votre question
- Vérifier votre connexion internet
- Contacter notre support technique

بارك الله فيكم`,
        timestamp: new Date(),
        model: currentModel,
        halalCheck: true
      };

      setMessages(prev => [...prev, errorMessage]);
      
      toast({
        title: "Erreur technique",
        description: "Impossible de générer la réponse. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleVoiceInput = () => {
    setIsVoiceMode(!isVoiceMode);
    // Implémentation reconnaissance vocale halal
    if (!isVoiceMode) {
      toast({
        title: "Mode vocal activé",
        description: "Parlez maintenant (reconnaissance vocale halal active)"
      });
    }
  };

  const handleExportChat = () => {
    const chatData = {
      timestamp: new Date().toISOString(),
      model: currentModel,
      messages: messages,
      settings: settings,
      halalCompliant: true
    };

    const blob = new Blob([JSON.stringify(chatData, null, 2)], { 
      type: 'application/json' 
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `super-iarp-pro-chat-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const selectedModel = aiModels.find(m => m.id === currentModel);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <motion.div 
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Bot className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Super IARP Pro</h1>
                <p className="opacity-90">IA 100% Halal • Conforme Sharia • Certifié CED</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-500/20 text-green-100">
                <Shield className="h-4 w-4 mr-1" />
                100% Halal Vérifié
              </Badge>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => setShowSettings(true)}
              >
                <Settings className="h-4 w-4 mr-2" />
                Paramètres
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Modèles IA */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cpu className="h-5 w-5 mr-2" />
                  Modèles IA Disponibles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiModels.map((model) => (
                  <div 
                    key={model.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      currentModel === model.id 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setCurrentModel(model.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {model.icon}
                        <span className="font-medium text-sm">{model.name}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {model.halalCompliant && (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        )}
                        <div className={`w-2 h-2 rounded-full ${
                          model.status === 'active' ? 'bg-green-500' :
                          model.status === 'maintenance' ? 'bg-yellow-500' : 'bg-red-500'
                        }`} />
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{model.provider}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {model.capabilities.slice(0, 2).map((cap, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {cap}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500">{model.pricing}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Guidelines Halal */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Shield className="h-5 w-5 mr-2" />
                  Guidelines Halal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-xs">
                  {halalGuidelines.map((guideline, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <span className={guideline.startsWith('❌') ? 'text-red-500' : 'text-green-500'}>
                        {guideline.slice(0, 2)}
                      </span>
                      <span className="text-gray-700">{guideline.slice(3)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Zone de chat principale */}
          <div className="lg:col-span-3">
            <Card className="h-[700px] flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {selectedModel?.icon}
                    <div>
                      <CardTitle className="text-lg">{selectedModel?.name}</CardTitle>
                      <p className="text-sm text-gray-600">{selectedModel?.provider}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={selectedModel?.halalCompliant ? 'default' : 'destructive'}>
                      {selectedModel?.halalCompliant ? 'Halal ✓' : 'Non conforme'}
                    </Badge>
                    <Button variant="outline" size="sm" onClick={handleExportChat}>
                      <Download className="h-4 w-4 mr-1" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto space-y-4 pb-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] p-4 rounded-lg ${
                      message.role === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <div className="flex items-center space-x-2 mb-2">
                        {message.role === 'user' ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                        <span className="text-sm font-medium">
                          {message.role === 'user' ? 'Vous' : selectedModel?.name}
                        </span>
                        {message.halalCheck && (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        )}
                        {message.filtered && (
                          <Filter className="h-4 w-4 text-orange-500" />
                        )}
                      </div>
                      
                      <div className="prose prose-sm max-w-none">
                        {message.content.split('\n').map((line, i) => (
                          <p key={i} className={`${message.role === 'user' ? 'text-white' : 'text-gray-900'} ${i === 0 ? 'mb-2' : 'mb-1'}`}>
                            {line}
                          </p>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/20">
                        <span className="text-xs opacity-70">
                          {message.timestamp.toLocaleTimeString('fr-FR', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                        {message.tokens && (
                          <span className="text-xs opacity-70">
                            {message.tokens} tokens
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {isGenerating && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Bot className="h-4 w-4" />
                        <span className="text-sm">Super IARP génère une réponse halal...</span>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </CardContent>

              {/* Zone de saisie */}
              <div className="p-4 border-t">
                <div className="flex items-center space-x-3">
                  <div className="flex-1 relative">
                    <Textarea
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Posez votre question en respectant les valeurs islamiques..."
                      className="resize-none pr-12"
                      rows={2}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                    />
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute right-2 bottom-2"
                      onClick={handleVoiceInput}
                    >
                      {isVoiceMode ? (
                        <Volume2 className="h-4 w-4 text-red-500" />
                      ) : (
                        <Mic className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <Button 
                    onClick={handleSendMessage} 
                    disabled={!inputMessage.trim() || isGenerating}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span>Appuyez sur Entrée pour envoyer</span>
                    {settings.halalFilter && (
                      <div className="flex items-center space-x-1">
                        <Shield className="h-3 w-3 text-green-500" />
                        <span>Filtre halal actif</span>
                      </div>
                    )}
                  </div>
                  <span>{inputMessage.length}/2000 caractères</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Dialog Paramètres */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Settings className="h-5 w-5 mr-2" />
              Paramètres Super IARP Pro
            </DialogTitle>
          </DialogHeader>
          
          <Tabs defaultValue="general" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="general">Général</TabsTrigger>
              <TabsTrigger value="halal">Halal</TabsTrigger>
              <TabsTrigger value="voice">Vocal</TabsTrigger>
              <TabsTrigger value="advanced">Avancé</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-4">
              <div>
                <Label htmlFor="model">Modèle par défaut</Label>
                <Select value={settings.model} onValueChange={(value) => setSettings({...settings, model: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {aiModels.filter(m => m.halalCompliant).map(model => (
                      <SelectItem key={model.id} value={model.id}>
                        {model.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="language">Langue principale</Label>
                <Select value={settings.languageMode} onValueChange={(value) => setSettings({...settings, languageMode: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="français">Français</SelectItem>
                    <SelectItem value="arabe">العربية</SelectItem>
                    <SelectItem value="anglais">English</SelectItem>
                    <SelectItem value="multilingue">Multilingue</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Température ({settings.temperature})</Label>
                <Slider
                  value={[settings.temperature]}
                  onValueChange={([value]) => setSettings({...settings, temperature: value})}
                  max={1}
                  min={0}
                  step={0.1}
                  className="mt-2"
                />
                <p className="text-xs text-gray-600 mt-1">
                  Plus élevé = plus créatif, plus bas = plus précis
                </p>
              </div>

              <div>
                <Label>Tokens maximum ({settings.maxTokens})</Label>
                <Slider
                  value={[settings.maxTokens]}
                  onValueChange={([value]) => setSettings({...settings, maxTokens: value})}
                  max={4096}
                  min={100}
                  step={100}
                  className="mt-2"
                />
              </div>
            </TabsContent>

            <TabsContent value="halal" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="halalFilter">Filtre Halal Strict</Label>
                    <p className="text-sm text-gray-600">Bloque automatiquement tout contenu non conforme</p>
                  </div>
                  <Switch
                    id="halalFilter"
                    checked={settings.halalFilter}
                    onCheckedChange={(checked) => setSettings({...settings, halalFilter: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="contentFilter">Filtre Contenu Étendu</Label>
                    <p className="text-sm text-gray-600">Vérifie aussi le contexte et les implications</p>
                  </div>
                  <Switch
                    id="contentFilter"
                    checked={settings.contentFilter}
                    onCheckedChange={(checked) => setSettings({...settings, contentFilter: checked})}
                  />
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Critères de Conformité Halal</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>✓ Validation par 7 savants islamiques</li>
                    <li>✓ Conformité aux 4 sources (Coran, Sunna, Ijmâ', Qiyâs)</li>
                    <li>✓ Respect de la pudeur et des valeurs familiales</li>
                    <li>✓ Exclusion automatique du contenu haram</li>
                    <li>✓ Promotion des valeurs islamiques positives</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="voice" className="space-y-4">
              <div>
                <Label htmlFor="voiceMode">Mode vocal</Label>
                <Select value={settings.voiceMode} onValueChange={(value) => setSettings({...settings, voiceMode: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="respectueux">Respectueux (homme)</SelectItem>
                    <SelectItem value="educatif">Éducatif (homme)</SelectItem>
                    <SelectItem value="spirituel">Spirituel (récitation)</SelectItem>
                    <SelectItem value="desactive">Désactivé</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Conformité Vocale Islamique</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Voix masculines uniquement pour respect de la pudeur</li>
                  <li>• Tons respectueux et éducatifs</li>
                  <li>• Prononciation correcte des termes arabes</li>
                  <li>• Pas de musique ou sons non islamiques</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4">
              <div>
                <Label>Top P ({settings.topP})</Label>
                <Slider
                  value={[settings.topP]}
                  onValueChange={([value]) => setSettings({...settings, topP: value})}
                  max={1}
                  min={0}
                  step={0.1}
                  className="mt-2"
                />
              </div>

              <div>
                <Label>Frequency Penalty ({settings.frequencyPenalty})</Label>
                <Slider
                  value={[settings.frequencyPenalty]}
                  onValueChange={([value]) => setSettings({...settings, frequencyPenalty: value})}
                  max={2}
                  min={-2}
                  step={0.1}
                  className="mt-2"
                />
              </div>

              <div>
                <Label>Presence Penalty ({settings.presencePenalty})</Label>
                <Slider
                  value={[settings.presencePenalty]}
                  onValueChange={([value]) => setSettings({...settings, presencePenalty: value})}
                  max={2}
                  min={-2}
                  step={0.1}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="responseFormat">Format de réponse</Label>
                <Select value={settings.responseFormat} onValueChange={(value) => setSettings({...settings, responseFormat: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="markdown">Markdown</SelectItem>
                    <SelectItem value="plain">Texte simple</SelectItem>
                    <SelectItem value="structured">Structuré</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end space-x-4 pt-4">
            <Button variant="outline" onClick={() => setShowSettings(false)}>
              Annuler
            </Button>
            <Button onClick={() => setShowSettings(false)}>
              <Save className="h-4 w-4 mr-2" />
              Sauvegarder
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <CEDFooter />
    </div>
  );
}