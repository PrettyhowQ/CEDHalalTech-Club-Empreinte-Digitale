import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Brain,
  TrendingUp,
  Shield,
  Target,
  AlertCircle,
  CheckCircle,
  DollarSign,
  PieChart,
  Calendar,
  MessageCircle,
  Sparkles,
  BarChart3,
  Zap,
  Globe,
  Heart,
  Send,
  Mic,
  Camera,
  FileText,
  Star
} from 'lucide-react';

interface AIRecommendation {
  id: string;
  type: 'investment' | 'saving' | 'zakat' | 'optimization' | 'warning';
  title: string;
  description: string;
  confidence: number;
  potentialReturn?: number;
  riskLevel: 'low' | 'medium' | 'high';
  halalCompliant: boolean;
  timeframe: string;
  actionRequired: boolean;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  tags: string[];
  createdAt: Date;
}

interface ConversationMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  attachments?: { type: string; name: string }[];
}

export function AIFinancialAdvisor() {
  const [activeTab, setActiveTab] = useState<'chat' | 'recommendations' | 'analytics'>('chat');
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const [recommendations] = useState<AIRecommendation[]>([
    {
      id: '1',
      type: 'investment',
      title: 'Sukuk Dubai Immobilier - Opportunité Exceptionnelle',
      description: 'Basé sur votre profil et les tendances du marché, nous recommandons un investissement dans les sukuk immobiliers de Dubai. Rendement prévu: 8.5% annuel, conforme Charia.',
      confidence: 94,
      potentialReturn: 85000,
      riskLevel: 'medium',
      halalCompliant: true,
      timeframe: '2-5 ans',
      actionRequired: true,
      priority: 'high',
      tags: ['Dubai', 'Immobilier', 'Sukuk', 'Halal'],
      createdAt: new Date('2025-06-21T10:00:00')
    },
    {
      id: '2',
      type: 'zakat',
      title: 'Optimisation Zakat 2025',
      description: 'Votre Zakat pour 2025 est estimée à $127,500. Nous suggérons de la distribuer en 3 tranches pour optimiser les déductions fiscales et maximiser l\'impact social.',
      confidence: 98,
      riskLevel: 'low',
      halalCompliant: true,
      timeframe: 'Immédiat',
      actionRequired: true,
      priority: 'urgent',
      tags: ['Zakat', 'Fiscalité', 'Don', 'Obligation'],
      createdAt: new Date('2025-06-21T09:30:00')
    },
    {
      id: '3',
      type: 'warning',
      title: 'Alerte: Exposition Crypto Non-Halal',
      description: 'Détection de 12% de votre portefeuille crypto dans des tokens non conformes à la Charia. Recommandation: réallocation vers Islamic Coin et autres cryptos halal.',
      confidence: 89,
      riskLevel: 'high',
      halalCompliant: false,
      timeframe: '1-2 semaines',
      actionRequired: true,
      priority: 'urgent',
      tags: ['Crypto', 'Halal', 'Compliance', 'Risque'],
      createdAt: new Date('2025-06-21T08:45:00')
    },
    {
      id: '4',
      type: 'optimization',
      title: 'Diversification Géographique Recommandée',
      description: 'Votre portefeuille est concentré à 78% sur Dubai. Nous suggérons une diversification vers les marchés halal d\'Asie du Sud-Est pour réduire les risques.',
      confidence: 87,
      potentialReturn: 15000,
      riskLevel: 'medium',
      halalCompliant: true,
      timeframe: '6-12 mois',
      actionRequired: false,
      priority: 'medium',
      tags: ['Diversification', 'Asie', 'Risque', 'Croissance'],
      createdAt: new Date('2025-06-21T07:15:00')
    }
  ]);

  const [conversation] = useState<ConversationMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Bienvenue ! Je suis IARP, votre conseiller financier IA spécialisé en finance islamique. Comment puis-je vous aider aujourd\'hui ?',
      timestamp: new Date('2025-06-21T10:00:00')
    },
    {
      id: '2',
      role: 'user',
      content: 'J\'aimerais optimiser mon portefeuille pour les investissements halal à Dubai',
      timestamp: new Date('2025-06-21T10:02:00')
    },
    {
      id: '3',
      role: 'assistant',
      content: 'Excellent choix ! Dubai offre d\'exceptionnelles opportunités d\'investissement halal. Basé sur votre profil de fortune de $2.8M, je recommande:\n\n1. **Sukuk immobiliers Dubai** (40% - $1.12M)\n2. **Actions conformes Charia** (30% - $840K)\n3. **Islamic Coin et crypto halal** (20% - $560K)\n4. **Liquidités d\'urgence** (10% - $280K)\n\nCette allocation optimise rendement et conformité religieuse. Souhaitez-vous explorer une catégorie spécifique ?',
      timestamp: new Date('2025-06-21T10:05:00')
    }
  ]);

  const getRecommendationIcon = (type: string) => {
    switch (type) {
      case 'investment': return <TrendingUp className="h-5 w-5" />;
      case 'zakat': return <Heart className="h-5 w-5" />;
      case 'warning': return <AlertCircle className="h-5 w-5" />;
      case 'optimization': return <Target className="h-5 w-5" />;
      default: return <Sparkles className="h-5 w-5" />;
    }
  };

  const getRecommendationColor = (type: string) => {
    switch (type) {
      case 'investment': return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'zakat': return 'bg-green-100 text-green-700 border-green-300';
      case 'warning': return 'bg-red-100 text-red-700 border-red-300';
      case 'optimization': return 'bg-orange-100 text-orange-700 border-orange-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setIsTyping(true);
    setMessage('');
    
    // Simulate AI response delay
    setTimeout(() => {
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Assistant IA Financier</h2>
            <p className="text-gray-600">Conseils personnalisés conformes à la Charia par IARP</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            100% Halal
          </Badge>
          <Badge className="bg-blue-100 text-blue-800">
            <Sparkles className="h-3 w-3 mr-1" />
            IA Avancée
          </Badge>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {[
          { id: 'chat', label: 'Conversation IA', icon: MessageCircle },
          { id: 'recommendations', label: 'Recommandations', icon: Target },
          { id: 'analytics', label: 'Analytics Prédictives', icon: BarChart3 }
        ].map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? 'default' : 'ghost'}
            className={`flex-1 ${activeTab === tab.id ? 'bg-white shadow-sm' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <tab.icon className="h-4 w-4 mr-2" />
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Chat Interface */}
      {activeTab === 'chat' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                Conversation avec IARP
              </CardTitle>
              <CardDescription>
                Assistant IA spécialisé en finance islamique et investissements halal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 h-96 overflow-y-auto mb-4">
                {conversation.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-start space-x-2 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <Avatar className="w-8 h-8">
                        {msg.role === 'assistant' ? (
                          <AvatarFallback className="bg-purple-100 text-purple-700">
                            <Brain className="h-4 w-4" />
                          </AvatarFallback>
                        ) : (
                          <AvatarFallback>U</AvatarFallback>
                        )}
                      </Avatar>
                      <div className={`p-3 rounded-lg ${
                        msg.role === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-900'
                      }`}>
                        <p className="whitespace-pre-line">{msg.content}</p>
                        <p className={`text-xs mt-1 ${
                          msg.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {msg.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-purple-100 text-purple-700">
                          <Brain className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex space-x-2">
                <div className="flex-1 relative">
                  <Input
                    placeholder="Posez votre question sur la finance islamique..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="pr-20"
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                    <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                      <Mic className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                      <Camera className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                      <FileText className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <Button onClick={handleSendMessage} className="bg-purple-600 hover:bg-purple-700">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Suggestions Rapides</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                'Optimiser mon Zakat 2025',
                'Investissements Dubai halal',
                'Diversification géographique',
                'Crypto conformes Charia',
                'Planification retraite',
                'Sukuk recommandés',
                'Analyse risques portfolio'
              ].map((suggestion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-full text-left justify-start h-auto p-2"
                  onClick={() => setMessage(suggestion)}
                >
                  <Sparkles className="h-3 w-3 mr-2 text-purple-600" />
                  {suggestion}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Recommendations */}
      {activeTab === 'recommendations' && (
        <div className="space-y-4">
          {recommendations.map((rec) => (
            <Card key={rec.id} className="border-l-4" style={{ borderLeftColor: getPriorityColor(rec.priority) }}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${getRecommendationColor(rec.type)}`}>
                      {getRecommendationIcon(rec.type)}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{rec.title}</CardTitle>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge className={`${getRecommendationColor(rec.type)} text-xs`}>
                          {rec.type.charAt(0).toUpperCase() + rec.type.slice(1)}
                        </Badge>
                        <Badge className={`text-xs ${rec.halalCompliant ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {rec.halalCompliant ? '✓ Halal' : '✗ Non-Halal'}
                        </Badge>
                        <span className="text-sm text-gray-500">Confiance: {rec.confidence}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={`${getPriorityColor(rec.priority)} text-white text-xs`}>
                      {rec.priority.toUpperCase()}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{rec.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {rec.potentialReturn && (
                    <div>
                      <p className="text-sm text-gray-600">Rendement Potentiel</p>
                      <p className="font-semibold text-green-600">+${rec.potentialReturn.toLocaleString()}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-gray-600">Niveau de Risque</p>
                    <p className={`font-semibold ${
                      rec.riskLevel === 'low' ? 'text-green-600' :
                      rec.riskLevel === 'medium' ? 'text-orange-600' : 'text-red-600'
                    }`}>
                      {rec.riskLevel.charAt(0).toUpperCase() + rec.riskLevel.slice(1)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Horizon Temporel</p>
                    <p className="font-semibold">{rec.timeframe}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Créé</p>
                    <p className="font-semibold">{rec.createdAt.toLocaleDateString('fr-FR')}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {rec.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {rec.actionRequired && (
                  <div className="flex space-x-2">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Zap className="h-4 w-4 mr-2" />
                      Appliquer Recommandation
                    </Button>
                    <Button variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Plus de Détails
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Analytics Predictives */}
      {activeTab === 'analytics' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                Prédiction Croissance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">+23.7%</p>
                <p className="text-sm text-gray-600">Croissance prévue 12 mois</p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Sukuk Dubai</span>
                    <span className="text-green-600">+8.5%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Actions Halal</span>
                    <span className="text-green-600">+15.2%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Crypto Halal</span>
                    <span className="text-green-600">+45.8%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                Score de Risque
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">7.2/10</p>
                <p className="text-sm text-gray-600">Risque modéré équilibré</p>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Optimisé pour profil fortune</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="h-5 w-5 mr-2 text-green-600" />
                Impact Zakat Prévu
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">$127.5K</p>
                <p className="text-sm text-gray-600">Zakat 2025 calculée</p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Projets Dubai</span>
                    <span>$63.7K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Éducation</span>
                    <span>$31.9K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Urgences</span>
                    <span>$31.9K</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Analyse Prédictive Portfolio
              </CardTitle>
              <CardDescription>
                Scénarios d'évolution basés sur l'IA et les tendances du marché
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-green-600">Scénario Optimiste</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Portfolio actuel</span>
                      <span className="font-semibold">$2.8M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Dans 12 mois</span>
                      <span className="font-semibold text-green-600">$3.46M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Gain</span>
                      <span className="font-semibold text-green-600">+$660K (+23.7%)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-orange-600">Scénario Réaliste</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Portfolio actuel</span>
                      <span className="font-semibold">$2.8M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Dans 12 mois</span>
                      <span className="font-semibold text-orange-600">$3.08M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Gain</span>
                      <span className="font-semibold text-orange-600">+$280K (+10%)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-red-600">Scénario Pessimiste</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Portfolio actuel</span>
                      <span className="font-semibold">$2.8M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Dans 12 mois</span>
                      <span className="font-semibold text-red-600">$2.52M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Perte</span>
                      <span className="font-semibold text-red-600">-$280K (-10%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}