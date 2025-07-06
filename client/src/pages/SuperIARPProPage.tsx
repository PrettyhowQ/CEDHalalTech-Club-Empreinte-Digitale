import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SupervisionBanner from '@/components/SupervisionBanner';
import { 
  Brain, 
  Zap, 
  Globe,
  Heart,
  Shield,
  Sparkles,
  MessageSquare,
  Send,
  Star,
  CheckCircle,
  Play,
  Book,
  RefreshCw,
  Target,
  Code
} from 'lucide-react';
import Footer from '@/components/Footer';

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
    
    // Simulation de traitement IA
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
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 text-white py-20">
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
      </div>

      <div className="container mx-auto px-4 py-8">
        
        {/* Supervision Banner */}
        <SupervisionBanner showWarning={true} showScholar={true} />
        
        {/* IA PrettyhowQ HalalTech™ */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
              <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                <Brain className="h-8 w-8 text-white" />
              </div>
              🤖 IA PrettyhowQ HalalTech™
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              IARP est également une IA éthique, éducative et compatible avec le Fiqh numérique, 
              intégrant tous les ChatGPT réunis avec une approche 100% conforme aux principes islamiques.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 mb-8">
            <h4 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center gap-3">
              🛡️ Caractéristiques d'une IA PrettyhowQ « Fiqh-compatible »
            </h4>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-emerald-100">
                    <th className="border border-emerald-200 px-4 py-3 text-left text-emerald-800 font-semibold">Caractéristique</th>
                    <th className="border border-emerald-200 px-4 py-3 text-left text-emerald-800 font-semibold">Description</th>
                    <th className="border border-emerald-200 px-4 py-3 text-left text-emerald-800 font-semibold">Exemples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-green-50">
                    <td className="border border-emerald-200 px-4 py-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="font-medium">✅ Contenu licite</span>
                      </div>
                    </td>
                    <td className="border border-emerald-200 px-4 py-3">
                      Pas de nudité, violence, musique haram, discours trompeur
                    </td>
                    <td className="border border-emerald-200 px-4 py-3">
                      Pas d'images IA contraires à l'éthique
                    </td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="border border-emerald-200 px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-purple-600" />
                        <span className="font-medium">🧕 Respect des femmes et de la pudeur numérique</span>
                      </div>
                    </td>
                    <td className="border border-emerald-200 px-4 py-3">
                      Pas de deepfake, pas de manipulation d'images de femmes
                    </td>
                    <td className="border border-emerald-200 px-4 py-3">
                      Filtres sur les visuels générés
                    </td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="border border-emerald-200 px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Brain className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">🧠 Transparence & responsabilité</span>
                      </div>
                    </td>
                    <td className="border border-emerald-200 px-4 py-3">
                      L'IA explique ses sources, ses limites et n'incite pas à la paresse intellectuelle
                    </td>
                    <td className="border border-emerald-200 px-4 py-3">
                      Éducation éthique de l'IA incluse
                    </td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="border border-emerald-200 px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-red-600" />
                        <span className="font-medium">🛑 Protection des données (Amāna)</span>
                      </div>
                    </td>
                    <td className="border border-emerald-200 px-4 py-3">
                      Données protégées, pas de revente ni traçage
                    </td>
                    <td className="border border-emerald-200 px-4 py-3">
                      RGPD + principes islamiques (ḥifẓ al-ʿird)
                    </td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="border border-emerald-200 px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-orange-600" />
                        <span className="font-medium">🤲 Usage utile (Maslaha)</span>
                      </div>
                    </td>
                    <td className="border border-emerald-200 px-4 py-3">
                      L'IA sert à éduquer, inspirer, aider, et pas à distraire ou dominer
                    </td>
                    <td className="border border-emerald-200 px-4 py-3">
                      Éducation, santé, spiritualité, métiers licites
                    </td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="border border-emerald-200 px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Heart className="h-5 w-5 text-indigo-600" />
                        <span className="font-medium">🌙 Spiritualité intégrée (Tarbiyah & niyyah)</span>
                      </div>
                    </td>
                    <td className="border border-emerald-200 px-4 py-3">
                      L'IA rappelle les intentions, les valeurs, le sens de l'action
                    </td>
                    <td className="border border-emerald-200 px-4 py-3">
                      Affirmations + rappel du Tawḥīd dans les prompts
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Fonctionnalités Islamiques Intégrées */}
          <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Fonctionnalités Islamiques Intégrées
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <CardTitle className="text-lg">Conformité Fiqh Informatique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Toutes les réponses respectent les 4 sources islamiques authentiques</p>
              </CardContent>
            </Card>
            
            <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Heart className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <CardTitle className="text-lg">Mode Prière Intégré</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Pause automatique pendant les horaires de prière</p>
              </CardContent>
            </Card>
            
            <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CheckCircle className="h-12 w-12 mx-auto mb-4 text-emerald-600" />
                <CardTitle className="text-lg">Filtrage Halal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Contenu vérifié selon les principes islamiques</p>
              </CardContent>
            </Card>
            
            <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Globe className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <CardTitle className="text-lg">Support Multilingue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">78+ langues incluant l'arabe classique et moderne</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Interface Chat */}
        <div className="mb-12 bg-white rounded-xl shadow-lg p-8">
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
        </div>

        {/* Modèles IA */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Toutes les IA Intégrées
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-sm">Claude 4.0 Sonnet</h4>
                <Badge className="text-xs bg-purple-100 text-purple-800">Anthropic</Badge>
              </div>
              <p className="text-xs text-gray-600">Raisonnement complexe</p>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-sm">GPT-4o</h4>
                <Badge className="text-xs bg-green-100 text-green-800">OpenAI</Badge>
              </div>
              <p className="text-xs text-gray-600">Multimodal avancé</p>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-sm">Gemini Ultra</h4>
                <Badge className="text-xs bg-blue-100 text-blue-800">Google</Badge>
              </div>
              <p className="text-xs text-gray-600">Recherche & Données</p>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-sm">DALL-E 3</h4>
                <Badge className="text-xs bg-pink-100 text-pink-800">OpenAI</Badge>
              </div>
              <p className="text-xs text-gray-600">Génération d'images</p>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-sm">Midjourney v6</h4>
                <Badge className="text-xs bg-indigo-100 text-indigo-800">Midjourney</Badge>
              </div>
              <p className="text-xs text-gray-600">Art créatif</p>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-sm">GitHub Copilot</h4>
                <Badge className="text-xs bg-gray-100 text-gray-800">GitHub</Badge>
              </div>
              <p className="text-xs text-gray-600">Code assistant</p>
            </div>
          </div>
        </div>

        {/* Cas d'usage */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Cas d'Usage Islamiques
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="h-full hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Code className="h-8 w-8 text-emerald-600" />
                  <CardTitle className="text-lg">Développement Halal</CardTitle>
                </div>
                <p className="text-gray-600">Assistance pour créer des applications conformes à la Sharia</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-800">Exemples :</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Validation Fiqh en temps réel</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Architecture islamique</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Tests de conformité</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="h-full hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Book className="h-8 w-8 text-emerald-600" />
                  <CardTitle className="text-lg">Éducation Islamique</CardTitle>
                </div>
                <p className="text-gray-600">Apprentissage personnalisé des sciences islamiques</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-800">Exemples :</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Coran et Tafsir</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Hadiths authentiques</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Fiqh moderne</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="h-full hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Target className="h-8 w-8 text-emerald-600" />
                  <CardTitle className="text-lg">Business Islamique</CardTitle>
                </div>
                <p className="text-gray-600">Conseil pour entreprises conformes aux principes islamiques</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-800">Exemples :</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Finance halal</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Marketing éthique</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Commerce équitable</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="h-full hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="h-8 w-8 text-emerald-600" />
                  <CardTitle className="text-lg">Créativité Responsable</CardTitle>
                </div>
                <p className="text-gray-600">Génération de contenu respectueux des valeurs islamiques</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-800">Exemples :</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Art islamique</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Calligraphie arabe</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Design halal</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-emerald-600 text-white rounded-xl shadow-lg p-8">
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
                <div className="text-2xl font-bold">6+</div>
                <div className="text-sm opacity-80">Modèles IA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm opacity-80">Capacités</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">78+</div>
                <div className="text-sm opacity-80">Langues</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-80">Conforme Fiqh</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}