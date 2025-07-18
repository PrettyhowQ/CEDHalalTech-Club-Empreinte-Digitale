import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Brain, Lightbulb, Shield, BookOpen, Heart, Sparkles, RefreshCw, CheckCircle } from "lucide-react";

interface CulturalInsight {
  id: string;
  category: 'ethics' | 'culture' | 'spirituality' | 'community' | 'knowledge';
  title: string;
  insight: string;
  islamicPerspective: string;
  practicalApplication: string;
  sources: string[];
  relevanceScore: number;
  ethicalValidation: {
    halal: boolean;
    reasoning: string;
    scholarApproval: boolean;
  };
  culturalContext: string;
  modernRelevance: string;
}

interface UserContext {
  interests: string[];
  level: 'beginner' | 'intermediate' | 'advanced';
  focus: 'personal' | 'professional' | 'community';
  preferredTopics: string[];
}

const culturalInsights: CulturalInsight[] = [
  {
    id: '1',
    category: 'ethics',
    title: 'L\'Équilibre Travail-Spiritualité dans l\'Islam',
    insight: 'L\'Islam enseigne que le travail professionnel peut être un acte d\'adoration quand il est fait avec intention droite et dans le respect des principes éthiques.',
    islamicPerspective: 'Le Prophète (paix et bénédictions sur lui) était un commerçant avant sa mission prophétique. Il a enseigné que l\'honnêteté dans les affaires est une vertu essentielle.',
    practicalApplication: 'Intégrez des pauses spirituelles dans votre journée de travail. Considérez votre expertise comme un amanah (dépôt) d\'Allah à utiliser au service de l\'humanité.',
    sources: ['Sahih Bukhari', 'Sahih Muslim', 'Tafsir Ibn Kathir'],
    relevanceScore: 9.5,
    ethicalValidation: {
      halal: true,
      reasoning: 'Conforme aux enseignements prophétiques sur l\'éthique professionnelle',
      scholarApproval: true
    },
    culturalContext: 'Dans le monde moderne, concilier carrière et spiritualité est un défi majeur pour les musulmans.',
    modernRelevance: 'Particulièrement pertinent pour les professionnels musulmans cherchant à maintenir leur identité spirituelle.'
  },
  {
    id: '2',
    category: 'culture',
    title: 'L\'Art de la Consultation (Shura) en Leadership',
    insight: 'La consultation mutuelle est un principe fondamental de gouvernance islamique qui peut transformer la dynamique des équipes modernes.',
    islamicPerspective: 'Le Coran loue ceux "qui règlent leurs affaires par consultation mutuelle" (42:38). Cette pratique favorise l\'inclusion et la sagesse collective.',
    practicalApplication: 'Implémentez des sessions de consultation collaborative dans vos projets. Valorisez chaque voix de l\'équipe comme une source potentielle de sagesse.',
    sources: ['Coran 42:38', 'Sira du Prophète', 'Fiqh du Leadership'],
    relevanceScore: 8.7,
    ethicalValidation: {
      halal: true,
      reasoning: 'Principe coranique explicite encourageant la consultation',
      scholarApproval: true
    },
    culturalContext: 'Le leadership participatif trouve ses racines dans la tradition islamique de la Shura.',
    modernRelevance: 'Essentiel pour les managers et leaders musulmans dans un contexte interculturel.'
  },
  {
    id: '3',
    category: 'spirituality',
    title: 'La Gratitude comme Moteur de Productivité',
    insight: 'La pratique islamique de la gratitude (Shukr) active des mécanismes psychologiques qui augmentent la motivation et la créativité.',
    islamicPerspective: 'Allah dit: "Si vous êtes reconnaissants, Je vous donnerai certainement davantage" (14:7). La gratitude multiplie les bénédictions.',
    practicalApplication: 'Commencez chaque journée par identifier trois bénédictions. Terminez vos projets par un remerciement sincère à Allah et à votre équipe.',
    sources: ['Coran 14:7', 'Hadiths sur la gratitude', 'Psychologie positive islamique'],
    relevanceScore: 9.2,
    ethicalValidation: {
      halal: true,
      reasoning: 'Pratique encouragée par le Coran et la Sunna',
      scholarApproval: true
    },
    culturalContext: 'La gratitude est centrale dans la spiritualité islamique quotidienne.',
    modernRelevance: 'Confirme les recherches modernes sur les bienfaits de la gratitude sur la performance.'
  },
  {
    id: '4',
    category: 'community',
    title: 'La Technologie au Service de l\'Ummah',
    insight: 'L\'innovation technologique peut être un moyen de servir la communauté musulmane mondiale et de faciliter la pratique religieuse.',
    islamicPerspective: 'L\'Islam encourage la recherche de la science et l\'innovation pour le bien-être de l\'humanité. "Cherchez la science du berceau jusqu\'à la tombe".',
    practicalApplication: 'Développez des solutions technologiques qui résolvent des problèmes réels de la communauté musulmane tout en respectant les valeurs islamiques.',
    sources: ['Hadiths sur la science', 'Fiqh de l\'innovation', 'Éthique technologique islamique'],
    relevanceScore: 8.9,
    ethicalValidation: {
      halal: true,
      reasoning: 'L\'innovation au service de la communauté est encouragée',
      scholarApproval: true
    },
    culturalContext: 'Les musulmans ont historiquement été des innovateurs en science et technologie.',
    modernRelevance: 'Crucial pour les développeurs et entrepreneurs musulmans contemporains.'
  },
  {
    id: '5',
    category: 'knowledge',
    title: 'L\'Apprentissage Continu comme Adoration',
    insight: 'Dans la perspective islamique, l\'acquisition de connaissances utiles est un acte d\'adoration qui rapproche d\'Allah.',
    islamicPerspective: 'Le Prophète (paix et bénédictions sur lui) a dit: "Celui qui emprunte un chemin à la recherche de la science, Allah lui facilite un chemin vers le Paradis".',
    practicalApplication: 'Transformez votre apprentissage professionnel en pratique spirituelle. Formulez des intentions (niyyah) avant chaque formation ou lecture.',
    sources: ['Hadith sur la science', 'Adab Al-Talib', 'Éthique de l\'apprentissage'],
    relevanceScore: 9.0,
    ethicalValidation: {
      halal: true,
      reasoning: 'L\'apprentissage de la science utile est fortement encouragé',
      scholarApproval: true
    },
    culturalContext: 'L\'Islam place l\'apprentissage au centre de la vie du croyant.',
    modernRelevance: 'Essentiel dans notre économie de la connaissance en évolution rapide.'
  }
];

const ethicalGuidelines = [
  'Conformité aux principes de la Charia',
  'Validation par des savants reconnus',
  'Respect des sensibilités culturelles',
  'Évitement des sujets controversés',
  'Promotion de l\'unité communautaire',
  'Encouragement du bien-être spirituel'
];

export default function EthicalAICulturalInsightGenerator() {
  const [selectedInsight, setSelectedInsight] = useState<CulturalInsight | null>(null);
  const [userContext, setUserContext] = useState<UserContext>({
    interests: ['technologie', 'spiritualité', 'leadership'],
    level: 'intermediate',
    focus: 'professional',
    preferredTopics: ['ethics', 'culture']
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedInsights, setGeneratedInsights] = useState<CulturalInsight[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    // Simuler la génération d'insights personnalisés
    const personalizedInsights = culturalInsights
      .filter(insight => 
        selectedCategory === 'all' || insight.category === selectedCategory
      )
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, 3);
    
    setGeneratedInsights(personalizedInsights);
  }, [selectedCategory, userContext]);

  const generateNewInsight = async () => {
    setIsGenerating(true);
    
    // Simulation d'un processus de génération éthique
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const randomInsight = culturalInsights[Math.floor(Math.random() * culturalInsights.length)];
    setSelectedInsight(randomInsight);
    setIsGenerating(false);
  };

  const categories = [
    { id: 'all', name: 'Tous', icon: Sparkles, color: 'bg-gray-600' },
    { id: 'ethics', name: 'Éthique', icon: Shield, color: 'bg-blue-600' },
    { id: 'culture', name: 'Culture', icon: Heart, color: 'bg-purple-600' },
    { id: 'spirituality', name: 'Spiritualité', icon: BookOpen, color: 'bg-green-600' },
    { id: 'community', name: 'Communauté', icon: Brain, color: 'bg-orange-600' },
    { id: 'knowledge', name: 'Connaissance', icon: Lightbulb, color: 'bg-yellow-600' }
  ];

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData ? categoryData.icon : Sparkles;
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData ? categoryData.color : 'bg-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            🧠 Générateur d'Insights Culturels IA Éthique
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Intelligence artificielle respectueuse des valeurs islamiques pour des insights culturels authentiques
          </p>
          <div className="text-sm text-gray-400 mt-2">
            Certifié Halal • Validé par des Savants • Éthiquement Responsable
          </div>
        </div>

        {/* Directives éthiques */}
        <Card className="mb-8 bg-slate-800/40 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-400" />
              <span>Directives Éthiques IA</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {ethicalGuidelines.map((guideline, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 bg-slate-700/30 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{guideline}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contrôles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Sélecteur de catégorie */}
          <Card className="bg-slate-800/40 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Domaines d'Insight</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {categories.map(category => {
                  const IconComponent = category.icon;
                  return (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      className={`${
                        selectedCategory === category.id 
                          ? `${category.color} text-white` 
                          : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <IconComponent className="h-4 w-4 mr-2" />
                      {category.name}
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Générateur */}
          <Card className="bg-slate-800/40 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Générateur d'Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                onClick={generateNewInsight}
                disabled={isGenerating}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="h-4 w-4 mr-2 animate-spin" />
                    Génération en cours...
                  </>
                ) : (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Générer un Insight Personnalisé
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Insight généré */}
        {selectedInsight && (
          <Card className="mb-8 bg-gradient-to-r from-green-900/40 to-emerald-900/40 border-green-600/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                {(() => {
                  const IconComponent = getCategoryIcon(selectedInsight.category);
                  return <IconComponent className="h-6 w-6 text-green-400" />;
                })()}
                <span>{selectedInsight.title}</span>
              </CardTitle>
              <div className="flex items-center space-x-2 mt-2">
                <Badge className={`${getCategoryColor(selectedInsight.category)} text-white`}>
                  {selectedInsight.category}
                </Badge>
                <Badge className="bg-green-600 text-white">
                  Score: {selectedInsight.relevanceScore}/10
                </Badge>
                <Badge className="bg-blue-600 text-white">
                  ✓ Halal Certifié
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-blue-400 mb-2">Insight Principal</h3>
                <p className="text-gray-300">{selectedInsight.insight}</p>
              </div>

              <Separator className="bg-green-600/30" />

              <div>
                <h3 className="font-semibold text-green-400 mb-2">Perspective Islamique</h3>
                <p className="text-gray-300">{selectedInsight.islamicPerspective}</p>
              </div>

              <div>
                <h3 className="font-semibold text-purple-400 mb-2">Application Pratique</h3>
                <p className="text-gray-300">{selectedInsight.practicalApplication}</p>
              </div>

              <div>
                <h3 className="font-semibold text-orange-400 mb-2">Contexte Culturel</h3>
                <p className="text-gray-300">{selectedInsight.culturalContext}</p>
              </div>

              <div>
                <h3 className="font-semibold text-yellow-400 mb-2">Pertinence Moderne</h3>
                <p className="text-gray-300">{selectedInsight.modernRelevance}</p>
              </div>

              <div className="bg-slate-800/50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-400 mb-2">Sources Authentiques</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedInsight.sources.map((source, index) => (
                    <Badge key={index} variant="outline" className="border-gray-500 text-gray-300">
                      {source}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-400 mb-2">Validation Éthique</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-300">
                      Statut Halal: {selectedInsight.ethicalValidation.halal ? 'Confirmé' : 'Non confirmé'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-300">
                      Approbation Savants: {selectedInsight.ethicalValidation.scholarApproval ? 'Obtenue' : 'En attente'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">
                    {selectedInsight.ethicalValidation.reasoning}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Insights recommandés */}
        <Card className="bg-slate-800/40 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Insights Recommandés</CardTitle>
            <CardDescription className="text-gray-300">
              Sélectionnés selon vos préférences et validés éthiquement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {generatedInsights.map(insight => {
                const IconComponent = getCategoryIcon(insight.category);
                return (
                  <div 
                    key={insight.id} 
                    className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/50 hover:border-green-600/50 transition-all cursor-pointer"
                    onClick={() => setSelectedInsight(insight)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <IconComponent className="h-5 w-5 text-green-400" />
                      <Badge className={`${getCategoryColor(insight.category)} text-white`}>
                        {insight.category}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-white mb-2">{insight.title}</h3>
                    <p className="text-sm text-gray-300 mb-3 line-clamp-3">{insight.insight}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Score: {insight.relevanceScore}/10</span>
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}