import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Info, Star, BookOpen, Heart, Volume2, X } from "lucide-react";

interface CulturalTooltip {
  id: string;
  term: string;
  arabic: string;
  definition: string;
  context: string;
  significance: string;
  examples: string[];
  audioUrl?: string;
  category: 'faith' | 'practice' | 'ethics' | 'culture' | 'history';
}

const islamicTerms: CulturalTooltip[] = [
  {
    id: 'bismillah',
    term: 'Bismillah',
    arabic: 'بِسْمِ اللَّهِ',
    definition: 'Au nom d\'Allah - formule d\'invocation',
    context: 'Prononcée avant chaque action importante',
    significance: 'Rappelle la conscience d\'Allah et cherche Sa bénédiction',
    examples: ['Avant de manger', 'Avant de travailler', 'Avant de voyager'],
    category: 'practice'
  },
  {
    id: 'alhamdulillah',
    term: 'Alhamdulillah',
    arabic: 'الْحَمْدُ لِلَّهِ',
    definition: 'Louange à Allah - expression de gratitude',
    context: 'Remerciement pour les bienfaits reçus',
    significance: 'Reconnait Allah comme source de tous les bienfaits',
    examples: ['Après avoir terminé un repas', 'Après une réussite', 'Quotidiennement'],
    category: 'faith'
  },
  {
    id: 'inshallah',
    term: 'Inshallah',
    arabic: 'إِنْ شَاءَ اللَّهُ',
    definition: 'Si Allah le veut - expression de soumission',
    context: 'Utilisé pour les projets futurs',
    significance: 'Rappelle que tout dépend de la volonté divine',
    examples: ['Planifier un voyage', 'Fixer un rendez-vous', 'Espérer une réussite'],
    category: 'faith'
  },
  {
    id: 'mashallah',
    term: 'Mashallah',
    arabic: 'مَا شَاءَ اللَّهُ',
    definition: 'Ce qu\'Allah a voulu - expression d\'admiration',
    context: 'Admiration sans envie ni mauvais œil',
    significance: 'Protège du mauvais œil et reconnaît la volonté divine',
    examples: ['Complimenter un enfant', 'Admirer un succès', 'Voir quelque chose de beau'],
    category: 'culture'
  },
  {
    id: 'barakallahu',
    term: 'Barakallahu fik',
    arabic: 'بَارَكَ اللَّهُ فِيكَ',
    definition: 'Qu\'Allah te bénisse - invocation de bénédiction',
    context: 'Remerciement et invocation pour autrui',
    significance: 'Invoque les bénédictions d\'Allah sur quelqu\'un',
    examples: ['Remercier quelqu\'un', 'Après un service rendu', 'Féliciter'],
    category: 'practice'
  },
  {
    id: 'taqwa',
    term: 'Taqwa',
    arabic: 'تَقْوَى',
    definition: 'Piété, crainte révérencielle d\'Allah',
    context: 'Concept central de la spiritualité islamique',
    significance: 'Guide toutes les actions du musulman',
    examples: ['Éviter les péchés', 'Faire le bien', 'Conscience d\'Allah'],
    category: 'ethics'
  }
];

interface InteractiveTooltipProps {
  children: React.ReactNode;
  termId: string;
}

function InteractiveTooltip({ children, termId }: InteractiveTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLSpanElement>(null);
  
  const term = islamicTerms.find(t => t.id === termId);
  
  if (!term) return <>{children}</>;

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        x: rect.left + rect.width / 2,
        y: rect.top - 10
      });
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'faith': return <Heart className="h-4 w-4" />;
      case 'practice': return <Star className="h-4 w-4" />;
      case 'ethics': return <BookOpen className="h-4 w-4" />;
      default: return <Info className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'faith': return 'bg-red-600';
      case 'practice': return 'bg-green-600';
      case 'ethics': return 'bg-blue-600';
      case 'culture': return 'bg-purple-600';
      case 'history': return 'bg-orange-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative cursor-help underline decoration-dotted decoration-green-400 decoration-2 hover:decoration-solid transition-all duration-200"
      >
        {children}
      </span>
      
      {isOpen && (
        <div
          className="fixed z-50 max-w-sm"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -100%)'
          }}
        >
          <Card className="bg-slate-900/95 backdrop-blur-sm border-green-600/50 shadow-xl">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center space-x-2">
                  {getCategoryIcon(term.category)}
                  <span className="text-lg">{term.term}</span>
                </CardTitle>
                <Badge className={`${getCategoryColor(term.category)} text-white`}>
                  {term.category}
                </Badge>
              </div>
              <CardDescription className="text-gray-300 font-arabic text-xl">
                {term.arabic}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold text-green-400 mb-1">Définition</h4>
                <p className="text-sm text-gray-300">{term.definition}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-400 mb-1">Contexte</h4>
                <p className="text-sm text-gray-300">{term.context}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-400 mb-1">Signification</h4>
                <p className="text-sm text-gray-300">{term.significance}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-orange-400 mb-1">Exemples d'usage</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  {term.examples.map((example, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-green-400">•</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {term.audioUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full bg-green-600/20 border-green-600 text-green-400 hover:bg-green-600/30"
                >
                  <Volume2 className="h-4 w-4 mr-2" />
                  Écouter la prononciation
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}

export default function InteractiveIslamicCulturalTooltips() {
  const [learnedTerms, setLearnedTerms] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Tous', color: 'bg-gray-600' },
    { id: 'faith', name: 'Foi', color: 'bg-red-600' },
    { id: 'practice', name: 'Pratique', color: 'bg-green-600' },
    { id: 'ethics', name: 'Éthique', color: 'bg-blue-600' },
    { id: 'culture', name: 'Culture', color: 'bg-purple-600' },
    { id: 'history', name: 'Histoire', color: 'bg-orange-600' }
  ];

  const filteredTerms = selectedCategory === 'all' 
    ? islamicTerms 
    : islamicTerms.filter(term => term.category === selectedCategory);

  const markAsLearned = (termId: string) => {
    setLearnedTerms(prev => [...prev, termId]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            📚 Tooltips Culturels Islamiques Interactifs
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Apprentissage culturel immersif avec des tooltips intelligents qui s'adaptent à votre niveau
          </p>
          <div className="text-sm text-gray-400 mt-2 font-arabic">
            التعلم الثقافي الإسلامي التفاعلي - Interactive Islamic Cultural Learning
          </div>
        </div>

        {/* Section de filtrage */}
        <Card className="mb-8 bg-slate-800/40 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Catégories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
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
                  {category.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section d'exemple interactif */}
        <Card className="mb-8 bg-slate-800/40 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Exemple Interactif</CardTitle>
            <CardDescription className="text-gray-300">
              Survolez les termes soulignés pour voir les tooltips culturels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                <InteractiveTooltip termId="bismillah">Bismillah</InteractiveTooltip>, 
                je commence mon travail aujourd'hui avec la bénédiction d'Allah. 
                <InteractiveTooltip termId="alhamdulillah">Alhamdulillah</InteractiveTooltip> 
                pour toutes les opportunités qu'Il m'a accordées.
              </p>
              
              <p>
                <InteractiveTooltip termId="inshallah">Inshallah</InteractiveTooltip>, 
                nous terminerons ce projet avec succès. 
                <InteractiveTooltip termId="mashallah">Mashallah</InteractiveTooltip>, 
                quelle belle équipe nous avons !
              </p>
              
              <p>
                <InteractiveTooltip termId="barakallahu">Barakallahu fik</InteractiveTooltip> 
                pour ton aide précieuse. La <InteractiveTooltip termId="taqwa">taqwa</InteractiveTooltip> 
                guide nos décisions dans ce projet.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Dictionnaire des termes */}
        <Card className="bg-slate-800/40 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Dictionnaire Culturel</CardTitle>
            <CardDescription className="text-gray-300">
              Explorez tous les termes disponibles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTerms.map(term => (
                <div 
                  key={term.id} 
                  className={`p-4 rounded-lg border transition-all duration-200 ${
                    learnedTerms.includes(term.id)
                      ? 'bg-green-900/30 border-green-600/50'
                      : 'bg-slate-700/30 border-slate-600/50 hover:border-green-600/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-white">{term.term}</h3>
                    <Badge className={`${getCategoryColor(term.category)} text-white`}>
                      {term.category}
                    </Badge>
                  </div>
                  <p className="text-gray-300 font-arabic text-lg mb-2">{term.arabic}</p>
                  <p className="text-sm text-gray-400 mb-3">{term.definition}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => markAsLearned(term.id)}
                    disabled={learnedTerms.includes(term.id)}
                    className={`w-full ${
                      learnedTerms.includes(term.id)
                        ? 'bg-green-600 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {learnedTerms.includes(term.id) ? '✓ Appris' : 'Marquer comme appris'}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Statistiques d'apprentissage */}
        <Card className="mt-8 bg-slate-800/40 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Progression d'Apprentissage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-900/30 rounded-lg">
                <div className="text-2xl font-bold text-green-400">
                  {learnedTerms.length}/{islamicTerms.length}
                </div>
                <div className="text-sm text-gray-300">Termes appris</div>
              </div>
              <div className="text-center p-4 bg-blue-900/30 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">
                  {Math.round((learnedTerms.length / islamicTerms.length) * 100)}%
                </div>
                <div className="text-sm text-gray-300">Progression</div>
              </div>
              <div className="text-center p-4 bg-purple-900/30 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">
                  {new Set(learnedTerms.map(id => islamicTerms.find(t => t.id === id)?.category)).size}
                </div>
                <div className="text-sm text-gray-300">Catégories maîtrisées</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function getCategoryColor(category: string) {
  switch (category) {
    case 'faith': return 'bg-red-600';
    case 'practice': return 'bg-green-600';
    case 'ethics': return 'bg-blue-600';
    case 'culture': return 'bg-purple-600';
    case 'history': return 'bg-orange-600';
    default: return 'bg-gray-600';
  }
}