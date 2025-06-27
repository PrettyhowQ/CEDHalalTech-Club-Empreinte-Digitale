import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe,
  Heart,
  Shield,
  Sparkles,
  MessageSquare,
  Mic,
  Image,
  Code,
  FileText,
  Calculator,
  Camera,
  Music,
  Video,
  Book,
  Search,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
  Settings,
  Play,
  Pause,
  Volume2,
  Download,
  Upload,
  RefreshCw,
  Send,
  Star,
  Award,
  CheckCircle
} from 'lucide-react';
import Footer from '@/components/Footer';

const aiCapabilities = [
  {
    category: "IA Conversationnelle",
    models: [
      { name: "Claude 4.0 Sonnet", provider: "Anthropic", strength: "Raisonnement complexe", color: "bg-purple-100 text-purple-800" },
      { name: "GPT-4o", provider: "OpenAI", strength: "Multimodal avancé", color: "bg-green-100 text-green-800" },
      { name: "Gemini Ultra", provider: "Google", strength: "Recherche & Données", color: "bg-blue-100 text-blue-800" },
      { name: "LLaMA 3", provider: "Meta", strength: "Open Source", color: "bg-orange-100 text-orange-800" }
    ],
    icon: MessageSquare
  },
  {
    category: "IA Créative",
    models: [
      { name: "DALL-E 3", provider: "OpenAI", strength: "Génération d'images", color: "bg-pink-100 text-pink-800" },
      { name: "Midjourney v6", provider: "Midjourney", strength: "Art créatif", color: "bg-indigo-100 text-indigo-800" },
      { name: "Stable Diffusion XL", provider: "Stability AI", strength: "Images réalistes", color: "bg-cyan-100 text-cyan-800" },
      { name: "Runway ML", provider: "Runway", strength: "Vidéos IA", color: "bg-emerald-100 text-emerald-800" }
    ],
    icon: Image
  },
  {
    category: "IA Développement",
    models: [
      { name: "GitHub Copilot", provider: "GitHub", strength: "Code assistant", color: "bg-gray-100 text-gray-800" },
      { name: "Claude Dev", provider: "Anthropic", strength: "Architecture logicielle", color: "bg-purple-100 text-purple-800" },
      { name: "Codex", provider: "OpenAI", strength: "Génération de code", color: "bg-green-100 text-green-800" },
      { name: "Replit AI", provider: "Replit", strength: "Développement collaboratif", color: "bg-blue-100 text-blue-800" }
    ],
    icon: Code
  },
  {
    category: "IA Audio & Voix",
    models: [
      { name: "ElevenLabs", provider: "ElevenLabs", strength: "Synthèse vocale", color: "bg-yellow-100 text-yellow-800" },
      { name: "Whisper", provider: "OpenAI", strength: "Transcription audio", color: "bg-green-100 text-green-800" },
      { name: "MusicLM", provider: "Google", strength: "Génération musicale", color: "bg-blue-100 text-blue-800" },
      { name: "XTTS", provider: "Coqui", strength: "Clonage vocal", color: "bg-red-100 text-red-800" }
    ],
    icon: Mic
  },
  {
    category: "IA Analyse & Données",
    models: [
      { name: "Claude Analytics", provider: "Anthropic", strength: "Analyse de données", color: "bg-purple-100 text-purple-800" },
      { name: "ChatGPT Analytics", provider: "OpenAI", strength: "Insights business", color: "bg-green-100 text-green-800" },
      { name: "Bard Analytics", provider: "Google", strength: "Recherche approfondie", color: "bg-blue-100 text-blue-800" },
      { name: "Perplexity AI", provider: "Perplexity", strength: "Recherche temps réel", color: "bg-orange-100 text-orange-800" }
    ],
    icon: TrendingUp
  }
];

const islamicFeatures = [
  {
    title: "Conformité Fiqh Informatique",
    description: "Toutes les réponses respectent les 4 sources islamiques authentiques",
    icon: Shield,
    color: "text-green-600"
  },
  {
    title: "Mode Prière Intégré",
    description: "Pause automatique pendant les horaires de prière",
    icon: Heart,
    color: "text-blue-600"
  },
  {
    title: "Filtrage Halal",
    description: "Contenu vérifié selon les principes islamiques",
    icon: CheckCircle,
    color: "text-emerald-600"
  },
  {
    title: "Support Multilingue",
    description: "78+ langues incluant l'arabe classique et moderne",
    icon: Globe,
    color: "text-purple-600"
  }
];

const useCases = [
  {
    title: "Développement Halal",
    description: "Assistance pour créer des applications conformes à la Sharia",
    icon: Code,
    examples: ["Validation Fiqh en temps réel", "Architecture islamique", "Tests de conformité"]
  },
  {
    title: "Éducation Islamique",
    description: "Apprentissage personnalisé des sciences islamiques",
    icon: Book,
    examples: ["Coran et Tafsir", "Hadiths authentiques", "Fiqh moderne"]
  },
  {
    title: "Business Islamique",
    description: "Conseil pour entreprises conformes aux principes islamiques",
    icon: Target,
    examples: ["Finance halal", "Marketing éthique", "Commerce équitable"]
  },
  {
    title: "Créativité Responsable",
    description: "Génération de contenu respectueux des valeurs islamiques",
    icon: Sparkles,
    examples: ["Art islamique", "Calligraphie arabe", "Design halal"]
  }
];

export default function SuperIARPProPage() {
  const [selectedModel, setSelectedModel] = useState('claude-4-sonnet');
  const [userMessage, setUserMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [conversation, setConversation] = useState<Array<{role: string, content: string, timestamp: Date}>>([]);

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;
    
    setIsProcessing(true);
    const newMessage = { role: 'user', content: userMessage, timestamp: new Date() };
    setConversation(prev => [...prev, newMessage]);
    
    // Simulation de traitement IA (à remplacer par vraie API)
    setTimeout(() => {
      const aiResponse = {
        role: 'assistant',
        content: `Réponse intelligente et conforme Fiqh informatique basée sur votre demande : "${userMessage}"`,
        timestamp: new Date()
      };
      setConversation(prev => [...prev, aiResponse]);
      setIsProcessing(false);
    }, 2000);
    
    setUserMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <motion.div 
        className="bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 text-white py-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <Brain className="h-20 w-20" />
              <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2">
                <Sparkles className="h-6 w-6 text-yellow-800" />
              </div>
            </div>
            <div className="text-left">
              <h1 className="text-6xl font-bold">Super IARP Pro</h1>
              <h2 className="text-2xl font-semibold opacity-90">with HeardPower</h2>
            </div>
          </div>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Toutes les IA existantes en une seule : IA Responsable PrettyhowQ - La super-intelligence artificielle 100% conforme au Fiqh informatique
          </p>
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>100% Halal Certifié</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <span>78+ Langues</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              <span>Temps Réel</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              <span>Mode Prière</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8">
        {/* Caractéristiques Islamiques */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Fonctionnalités Islamiques Intégrées
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {islamicFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <feature.icon className={`h-12 w-12 mx-auto mb-4 ${feature.color}`} />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interface Chat */}
        <motion.div 
          className="mb-12 bg-white rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <MessageSquare className="h-8 w-8 text-purple-600" />
            Interface Super IARP Pro
          </h3>
          
          {/* Sélection de modèle */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Modèle IA Principal
            </label>
            <Select value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger className="w-full max-w-md">
                <SelectValue placeholder="Sélectionner un modèle IA" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="claude-4-sonnet">Claude 4.0 Sonnet (Recommandé)</SelectItem>
                <SelectItem value="gpt-4o">GPT-4o Multimodal</SelectItem>
                <SelectItem value="gemini-ultra">Gemini Ultra</SelectItem>
                <SelectItem value="auto-best">Auto (Meilleur modèle)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Zone de conversation */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4 h-64 overflow-y-auto">
            {conversation.length === 0 ? (
              <div className="flex items-center justify-center h-full text-gray-500">
                <div className="text-center">
                  <Brain className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p>Commencez une conversation avec Super IARP Pro</p>
                  <p className="text-sm">100% conforme au Fiqh informatique</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {conversation.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.role === 'user'
                          ? 'bg-purple-600 text-white'
                          : 'bg-white border border-gray-200 text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
                {isProcessing && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 text-gray-800 max-w-xs lg:max-w-md px-4 py-2 rounded-lg">
                      <div className="flex items-center gap-2">
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        <span className="text-sm">Super IARP Pro réfléchit...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Zone de saisie */}
          <div className="flex gap-4">
            <Textarea
              placeholder="Posez votre question à Super IARP Pro (conforme Fiqh informatique)..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              className="flex-1"
              rows={3}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <Button 
              onClick={handleSendMessage}
              disabled={isProcessing || !userMessage.trim()}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        {/* Capacités IA */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Toutes les IA Intégrées
          </h3>
          <div className="space-y-8">
            {aiCapabilities.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50">
                    <CardTitle className="flex items-center gap-3">
                      <category.icon className="h-6 w-6 text-blue-600" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {category.models.map((model, modelIndex) => (
                        <motion.div
                          key={model.name}
                          className="border rounded-lg p-4 hover:shadow-md transition-all duration-200"
                          whileHover={{ y: -2 }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-sm">{model.name}</h4>
                            <Badge className={`text-xs ${model.color}`}>
                              {model.provider}
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-600">{model.strength}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cas d'usage */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Cas d'Usage Islamiques
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <useCase.icon className="h-8 w-8 text-emerald-600" />
                      <CardTitle className="text-lg">{useCase.title}</CardTitle>
                    </div>
                    <p className="text-gray-600">{useCase.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-gray-800">Exemples :</h4>
                      <ul className="space-y-1">
                        {useCase.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center bg-gradient-to-r from-purple-600 to-emerald-600 text-white rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Découvrez la Puissance de Super IARP Pro
          </h3>
          <p className="mb-8 max-w-2xl mx-auto opacity-90">
            L'intelligence artificielle la plus avancée au monde, 100% conforme aux principes islamiques. 
            Toutes les capacités IA réunies avec HeardPower pour une expérience unique.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Play className="h-5 w-5 mr-2" />
              Essayer Maintenant
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Book className="h-5 w-5 mr-2" />
              Documentation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Star className="h-5 w-5 mr-2" />
              Voir Démos
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm opacity-80">Catégories IA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm opacity-80">Modèles intégrés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">78+</div>
                <div className="text-sm opacity-80">Langues supportées</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-80">Conforme Fiqh</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}