import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  BookOpen, 
  Languages, 
  GraduationCap, 
  Users, 
  CreditCard,
  Menu,
  ChevronDown,
  ArrowRight,
  FileText,
  MessageCircle,
  ShoppingCart,
  Play
} from 'lucide-react';

const niveauxContent = {
  1: [
    'Manuel du niveau 1',
    'Présentation de la langue arabe',
    'Premiers pas dans la lecture',
    'La vocalisation',
    'Dictée de la vocalisation',
    'Le soukoune',
    'La prolongation',
    'Dictée de la prolongation',
    'Le tanwine',
    'Dictée avec le tanwine',
    'La lettre bâ\'',
    'Dictée de la lettre bâ\'',
    'La lettre kâf',
    'Dictée de la lettre kâf',
    'La lettre tâ\'',
    'La lettre tâ\' al-marbouta',
    'Dictée de la lettre tâ',
    'Exercice de lecture 1',
    'La lettre râ\''
  ],
  2: [
    'Manuel du niveau 2',
    'Lectures et exercices oraux',
    'Faire connaissance 1',
    'Pratique 1',
    'Faire connaissance 2',
    'Faire connaissance 3',
    'Pratique 2',
    'Faire connaissance 4',
    'Pratique 4',
    'Faire connaissance 5',
    'Faire connaissance 6',
    'Pratique 5',
    'Faire connaissance 7',
    'Pratique 6',
    'Faire connaissance 8',
    'Faire connaissance 9',
    'Pratique 7',
    'Faire connaissance 10',
    'Pratique 8'
  ]
};

const specialSections = [
  { title: 'La vie du prophète', accessible: true },
  { title: 'Tajwid', accessible: true },
  { title: 'Groupe WhatsApp', accessible: true },
  { title: 'Divers', accessible: true },
  { title: 'Achat de crédits', accessible: true },
  { title: 'Classes en ligne', accessible: true },
  { title: 'App de Traduction', accessible: true }
];

export default function ArabicInterface() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedNiveau, setSelectedNiveau] = useState<number | null>(null);
  const [expandedNiveau, setExpandedNiveau] = useState<number | null>(null);
  const [sourceText, setSourceText] = useState('Institut club empreinte digitale');
  const [translatedText, setTranslatedText] = useState('معهد النادي الرقمي');

  const toggleNiveau = (niveau: number) => {
    setExpandedNiveau(expandedNiveau === niveau ? null : niveau);
  };

  const handleTranslate = () => {
    if (sourceText === 'Institut club empreinte digitale') {
      setTranslatedText('معهد النادي الرقمي');
    } else if (sourceText === 'معهد النادي الرقمي') {
      setTranslatedText('Institut club empreinte digitale');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 to-cyan-600">
      {/* Header turquoise avec logo */}
      <div className="bg-cyan-500 text-white p-4 text-center">
        <div className="flex items-center justify-center mb-2">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold">NUR UL ANWAR</h1>
            <p className="text-xs text-cyan-100">Illuminez-vous par l'arabe</p>
          </div>
        </div>
      </div>

      {/* Menu hamburger */}
      <div className="bg-cyan-500 px-4 pb-2">
        <Button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          variant="outline"
          size="sm"
          className="bg-white text-cyan-600 border-white hover:bg-cyan-50"
        >
          <Menu className="h-4 w-4 mr-2" />
          Menu
        </Button>
      </div>

      {/* Navigation principale */}
      {isMenuOpen && (
        <div className="bg-cyan-500 text-white px-4 pb-4 space-y-1" dir="ltr">
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-cyan-400 py-2"
          >
            <Home className="h-4 w-4 mr-3" />
            🏠 Accueil
          </Button>
          
          {[1, 2, 3, 4, 5, 6].map((niveau) => (
            <div key={niveau}>
              <Button
                onClick={() => toggleNiveau(niveau)}
                variant="ghost"
                className="w-full justify-between text-white hover:bg-cyan-400 py-2"
              >
                <span>Niveau {niveau}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${
                  expandedNiveau === niveau ? 'rotate-180' : ''
                }`} />
              </Button>
            </div>
          ))}
          
          <Button
            variant="ghost"
            className="w-full justify-between text-white hover:bg-cyan-400 py-2"
          >
            <span>100 verbes arabes</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-between text-white hover:bg-cyan-400 py-2"
          >
            <span>Niveau 3</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-between text-white hover:bg-cyan-400 py-2"
          >
            <span>Niveau 4</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-between text-white hover:bg-cyan-400 py-2"
          >
            <span>Niveau 5</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-between text-white hover:bg-cyan-400 py-2"
          >
            <span>Niveau 6</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-between text-white hover:bg-cyan-400 py-2"
          >
            <span>Bonus</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-cyan-400 py-2"
          >
            Coachings et corrections
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-cyan-400 py-2"
          >
            <MessageCircle className="h-4 w-4 mr-3" />
            Aide
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-cyan-400 py-2"
          >
            Achat de crédits
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-cyan-400 py-2"
          >
            <Languages className="h-4 w-4 mr-3" />
            💬 App de Traduction
          </Button>
        </div>
      )}

      {/* Contenu principal */}
      <div className="p-4 space-y-4">
        {/* Vue par défaut - Sommaire de la formation */}
        {!selectedNiveau && (
          <Card className="bg-white shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <FileText className="h-5 w-5 mr-2" />
                📋 Sommaire de la formation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Introduction */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">Introduction</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-orange-200 text-orange-800 text-xs">Accessible</Badge>
                    <span className="text-xs text-gray-500 ml-2">💬 3 commentaires</span>
                  </div>
                </div>
                <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Niveaux 1-6 */}
              {[1, 2, 3, 4, 5, 6].map((niveau) => (
                <div key={niveau} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">Niveau {niveau}</div>
                    <Badge className="bg-orange-200 text-orange-800 text-xs mt-1">Accessible</Badge>
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-cyan-500 hover:bg-cyan-600 text-white"
                    onClick={() => setSelectedNiveau(niveau)}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}

              {/* 100 verbes arabes */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">100 verbes arabes</div>
                  <Badge className="bg-orange-200 text-orange-800 text-xs mt-1">Accessible</Badge>
                </div>
                <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Sections spéciales */}
              {specialSections.map((section, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">{section.title}</div>
                    <Badge className="bg-orange-200 text-orange-800 text-xs mt-1">
                      {section.accessible ? 'Accessible' : 'Verrouillé'}
                    </Badge>
                  </div>
                  <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Vue détaillée d'un niveau */}
        {selectedNiveau && (
          <Card className="bg-white shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <span>Niveau {selectedNiveau}</span>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSelectedNiveau(null)}
                >
                  Retour
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {niveauxContent[selectedNiveau as keyof typeof niveauxContent]?.map((item, index) => (
                <div key={index} className="flex items-center p-2 bg-gray-50 rounded">
                  <FileText className="h-4 w-4 mr-3 text-gray-500" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Module de traduction intégré style orange */}
        <div className="bg-orange-400 p-4 rounded-lg">
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-center mb-4 space-x-4">
              <Button variant="outline" size="sm">
                <Languages className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                😊
              </Button>
            </div>
            
            <div className="space-y-3">
              <Input
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
                className="text-center"
                placeholder="Institut club empreinte digitale"
              />
              
              <div className="h-px bg-gray-200"></div>
              
              <div className="text-center text-lg font-arabic bg-gray-50 p-3 rounded" dir="rtl">
                {translatedText}
              </div>
              
              <div className="text-center text-sm text-gray-600">
                Français ⇄ Arabe
              </div>
            </div>
          </div>
          
          <Button 
            className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium"
            onClick={handleTranslate}
          >
            Traduire le texte
          </Button>
        </div>
      </div>

      {/* Footer de protection */}
      <div className="bg-cyan-700 text-white text-center py-4 mt-8">
        <div className="text-sm">
          © 2025 Institut CED - معهد النادي الرقمي - NUR UL ANWAR
        </div>
        <div className="text-xs mt-1 opacity-80">
          Yakoubi Yamina - Protection Propriété Intellectuelle
        </div>
      </div>
    </div>
  );
}