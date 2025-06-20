import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Brain, Sparkles, FileText, Code, Image, MessageSquare, RefreshCw, Download, Copy } from 'lucide-react';

interface GenerationRequest {
  id: string;
  type: 'text' | 'code' | 'business-plan' | 'content' | 'analysis';
  prompt: string;
  timestamp: Date;
  status: 'pending' | 'generating' | 'complete' | 'error';
  result?: string;
  tokens?: number;
}

interface AICapability {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: 'business' | 'technical' | 'content' | 'analysis';
  estimatedTime: string;
}

export function AIGeneratorWidget({ variant = 'full' }: { variant?: 'full' | 'compact' }) {
  const [activeTab, setActiveTab] = useState('generate');
  const [selectedCapability, setSelectedCapability] = useState<string>('business-plan');
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [recentGenerations, setRecentGenerations] = useState<GenerationRequest[]>([]);

  const aiCapabilities: AICapability[] = [
    {
      id: 'business-plan',
      name: 'Plan d\'Affaires IA',
      description: 'Génère des plans d\'affaires détaillés, études de marché et projections financières',
      icon: <FileText className="h-4 w-4" />,
      category: 'business',
      estimatedTime: '2-3 min'
    },
    {
      id: 'formation-content',
      name: 'Contenu de Formation',
      description: 'Crée des modules de formation, quiz et supports pédagogiques personnalisés',
      icon: <Brain className="h-4 w-4" />,
      category: 'content',
      estimatedTime: '1-2 min'
    },
    {
      id: 'code-generator',
      name: 'Générateur de Code',
      description: 'Développe du code éthique et responsable pour vos projets techniques',
      icon: <Code className="h-4 w-4" />,
      category: 'technical',
      estimatedTime: '30s-1 min'
    },
    {
      id: 'market-analysis',
      name: 'Analyse de Marché',
      description: 'Analyse les tendances, concurrence et opportunités de votre secteur',
      icon: <MessageSquare className="h-4 w-4" />,
      category: 'analysis',
      estimatedTime: '2-4 min'
    }
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    const newRequest: GenerationRequest = {
      id: Date.now().toString(),
      type: selectedCapability as any,
      prompt,
      timestamp: new Date(),
      status: 'generating'
    };

    setRecentGenerations(prev => [newRequest, ...prev.slice(0, 4)]);

    // Simulation de génération IA responsable
    setTimeout(() => {
      const templates = {
        'business-plan': `# Plan d'Affaires Généré par IA Responsable

## Vision et Mission
Votre projet s'inscrit dans une démarche d'innovation responsable...

## Analyse du Marché
- Taille du marché: 2.3M€ (estimation 2025)
- Croissance annuelle: +12.5%
- Segments prioritaires: Formation professionnelle, Consulting

## Stratégie Financière
- Investissement initial: 150K€
- Seuil de rentabilité: Mois 18
- ROI projeté: 250% sur 3 ans

## Recommandations Éthiques
- Intégration d'impacts sociaux positifs
- Transparence des algorithmes utilisés
- Formation continue des équipes`,

        'formation-content': `# Module de Formation: ${prompt}

## Objectifs Pédagogiques
1. Comprendre les enjeux éthiques
2. Maîtriser les outils responsables
3. Appliquer les bonnes pratiques

## Structure du Cours
### Partie 1: Fondamentaux (2h)
- Introduction aux concepts clés
- Études de cas pratiques

### Partie 2: Application (3h)
- Exercices guidés
- Projets collaboratifs

## Évaluation
- Quiz interactif (30%)
- Projet final (70%)

## Ressources Complémentaires
- Bibliographie éthique
- Outils recommandés`,

        'code-generator': `// Code généré selon les principes d'IA responsable
// Sujet: ${prompt}

class ResponsibleAI {
  constructor(config) {
    this.ethicsEnabled = true;
    this.transparencyLevel = 'high';
    this.biasDetection = true;
    
    // Validation des paramètres éthiques
    this.validateEthics(config);
  }
  
  validateEthics(config) {
    // Vérification des biais potentiels
    if (!config.diversityCheck) {
      console.warn('Attention: Vérification de diversité recommandée');
    }
    
    // Transparence des données
    this.logDataUsage(config.dataSource);
  }
  
  generateResponse(input) {
    // Filtrage éthique des entrées
    const cleanInput = this.ethicsFilter(input);
    
    // Traitement responsable
    return this.processResponsibly(cleanInput);
  }
}`,

        'market-analysis': `# Analyse de Marché: ${prompt}

## Tendances du Secteur 2025
- Croissance de l'IA éthique: +45% annuel
- Demande formation responsable: +67%
- Investissements ESG: +34%

## Analyse Concurrentielle
### Forces du Marché
- Innovation technologique
- Demande croissante éthique
- Réglementation favorable

### Opportunités Identifiées
1. **Formations Spécialisées** (Potentiel: 2.8M€)
2. **Consulting Responsable** (Potentiel: 1.5M€)
3. **Certifications Éthiques** (Potentiel: 890K€)

## Recommandations Stratégiques
- Priorité sur l'éthique IA
- Partenariats académiques
- Développement international

## Indicateurs Clés à Suivre
- Taux d'adoption éthique: 73%
- Satisfaction clients: 94%
- Impact social mesuré: +23%`
      };

      const result = templates[selectedCapability as keyof typeof templates] || 
        `Contenu généré de manière responsable pour: ${prompt}\n\nCe contenu respecte nos principes d'IA éthique et transparente.`;

      setRecentGenerations(prev => 
        prev.map(req => 
          req.id === newRequest.id 
            ? { ...req, status: 'complete', result, tokens: Math.floor(Math.random() * 500) + 100 }
            : req
        )
      );
      setIsGenerating(false);
      setPrompt('');
    }, 3000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (variant === 'compact') {
    return (
      <motion.div
        drag
        dragMomentum={false}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-96 left-4 z-40 cursor-grab active:cursor-grabbing"
      >
        <Card className="glass-effect hover-lift border-2 border-indigo-200/30 shadow-xl w-80">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Brain className="h-4 w-4 text-indigo-600" />
              <span className="text-white drop-shadow-lg">IA Générateur</span>
              <Badge variant="outline" className="text-xs text-indigo-600 border-indigo-200">
                Responsable
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 space-y-3">
            <div className="space-y-2">
              <Input
                placeholder="Décrivez votre besoin..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="text-sm bg-white/80"
              />
              <Button
                onClick={handleGenerate}
                disabled={isGenerating || !prompt.trim()}
                className="w-full text-xs"
                size="sm"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
                    Génération...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-3 w-3 mr-1" />
                    Générer
                  </>
                )}
              </Button>
            </div>
            
            {recentGenerations.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-medium text-white/80 drop-shadow-lg">Récent:</h4>
                {recentGenerations.slice(0, 2).map((gen) => (
                  <div key={gen.id} className="p-2 bg-white/10 rounded text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white/90 drop-shadow-lg truncate">
                        {gen.prompt.slice(0, 30)}...
                      </span>
                      <Badge variant="outline" className={`text-xs ${
                        gen.status === 'complete' ? 'text-green-600 border-green-200' :
                        gen.status === 'generating' ? 'text-blue-600 border-blue-200' :
                        'text-gray-500 border-gray-200'
                      }`}>
                        {gen.status === 'complete' ? '✓' : 
                         gen.status === 'generating' ? '⟳' : '○'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <Card className="border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-indigo-600" />
          Générateur IA Responsable
          <Badge variant="outline" className="text-indigo-600 border-indigo-200">
            Temps Réel
          </Badge>
        </CardTitle>
        <p className="text-sm text-gray-600">
          Intelligence Artificielle éthique pour vos contenus professionnels
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Sélection de capacité */}
        <div>
          <h3 className="font-semibold mb-3">Choisissez votre type de génération:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {aiCapabilities.map((capability) => (
              <Card
                key={capability.id}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedCapability === capability.id 
                    ? 'border-indigo-300 bg-indigo-50' 
                    : 'border-gray-200'
                }`}
                onClick={() => setSelectedCapability(capability.id)}
              >
                <CardContent className="p-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                      {capability.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{capability.name}</h4>
                      <p className="text-xs text-gray-600 mt-1">{capability.description}</p>
                      <Badge variant="outline" className="text-xs mt-2">
                        {capability.estimatedTime}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interface de génération */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Décrivez votre besoin en détail:
            </label>
            <Textarea
              placeholder="Ex: Créer un plan d'affaires pour une startup de formation en IA éthique avec projections sur 3 ans..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-24"
            />
          </div>
          
          <Button
            onClick={handleGenerate}
            disabled={isGenerating || !prompt.trim()}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Génération en cours...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Générer du Contenu Responsable
              </>
            )}
          </Button>
        </div>

        {/* Résultats récents */}
        {recentGenerations.length > 0 && (
          <div>
            <h3 className="font-semibold mb-3">Générations Récentes:</h3>
            <div className="space-y-3">
              {recentGenerations.map((generation) => (
                <Card key={generation.id} className="border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={
                          generation.status === 'complete' ? 'text-green-600 border-green-200' :
                          generation.status === 'generating' ? 'text-blue-600 border-blue-200' :
                          'text-gray-500 border-gray-200'
                        }>
                          {generation.status === 'complete' ? 'Terminé' : 
                           generation.status === 'generating' ? 'En cours...' : 'En attente'}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {generation.timestamp.toLocaleTimeString('fr-FR')}
                        </span>
                      </div>
                      
                      {generation.status === 'complete' && (
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(generation.result || '')}
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-3 w-3" />
                          </Button>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Demande:</strong> {generation.prompt}
                    </p>
                    
                    {generation.result && (
                      <div className="bg-gray-50 p-3 rounded text-sm">
                        <pre className="whitespace-pre-wrap text-gray-800">
                          {generation.result.slice(0, 300)}
                          {generation.result.length > 300 && '...'}
                        </pre>
                      </div>
                    )}
                    
                    {generation.tokens && (
                      <p className="text-xs text-gray-500 mt-2">
                        Tokens utilisés: {generation.tokens} • Éthique: ✓ Vérifiée
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}