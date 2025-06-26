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
    'Livre de Médine Tome 1 - الدرس الأول',
    'Livre de Médine Tome 1 - الدرس الثاني', 
    'Livre de Médine Tome 1 - الدرس الثالث',
    'Livre de Médine Tome 1 - الدرس الرابع',
    'Livre de Médine Tome 1 - الدرس الخامس',
    'Livre de Médine Tome 1 - الدرس السادس',
    'Livre de Médine Tome 1 - الدرس السابع',
    'Livre de Médine Tome 1 - الدرس الثامن',
    'Livre de Médine Tome 1 - الدرس التاسع',
    'Livre de Médine Tome 1 - الدرس العاشر',
    'Livre de Médine Tome 1 - الدرس الحادي عشر',
    'Livre de Médine Tome 1 - الدرس الثاني عشر',
    'Livre de Médine Tome 1 - الدرس الثالث عشر',
    'Livre de Médine Tome 1 - الدرس الرابع عشر',
    'Livre de Médine Tome 1 - الدرس الخامس عشر',
    'Livre de Médine Tome 1 - الدرس السادس عشر',
    'Livre de Médine Tome 1 - الدرس السابع عشر',
    'Livre de Médine Tome 1 - الدرس الثامن عشر',
    'Livre de Médine Tome 1 - الدرس التاسع عشر'
  ],
  2: [
    'Livre de Médine Tome 2 - الدرس الأول',
    'Livre de Médine Tome 2 - الدرس الثاني',
    'Livre de Médine Tome 2 - الدرس الثالث',
    'Livre de Médine Tome 2 - الدرس الرابع',
    'Livre de Médine Tome 2 - الدرس الخامس',
    'Livre de Médine Tome 2 - الدرس السادس',
    'Livre de Médine Tome 2 - الدرس السابع',
    'Livre de Médine Tome 2 - الدرس الثامن',
    'Livre de Médine Tome 2 - الدرس التاسع',
    'Livre de Médine Tome 2 - الدرس العاشر',
    'Livre de Médine Tome 2 - الدرس الحادي عشر',
    'Livre de Médine Tome 2 - الدرس الثاني عشر',
    'Livre de Médine Tome 2 - الدرس الثالث عشر',
    'Livre de Médine Tome 2 - الدرس الرابع عشر',
    'Livre de Médine Tome 2 - الدرس الخامس عشر',
    'Livre de Médine Tome 2 - الدرس السادس عشر',
    'Livre de Médine Tome 2 - الدرس السابع عشر',
    'Livre de Médine Tome 2 - الدرس الثامن عشر',
    'Livre de Médine Tome 2 - الدرس التاسع عشر'
  ],
  3: [
    'Livre de Médine Tome 3 - الدرس الأول',
    'Livre de Médine Tome 3 - الدرس الثاني',
    'Livre de Médine Tome 3 - الدرس الثالث',
    'Livre de Médine Tome 3 - الدرس الرابع',
    'Livre de Médine Tome 3 - الدرس الخامس',
    'Livre de Médine Tome 3 - الدرس السادس',
    'Livre de Médine Tome 3 - الدرس السابع',
    'Livre de Médine Tome 3 - الدرس الثامن',
    'Livre de Médine Tome 3 - الدرس التاسع',
    'Livre de Médine Tome 3 - الدرس العاشر',
    'Livre de Médine Tome 3 - الدرس الحادي عشر',
    'Livre de Médine Tome 3 - الدرس الثاني عشر',
    'Livre de Médine Tome 3 - الدرس الثالث عشر',
    'Livre de Médine Tome 3 - الدرس الرابع عشر',
    'Livre de Médine Tome 3 - الدرس الخامس عشر',
    'Livre de Médine Tome 3 - الدرس السادس عشر',
    'Livre de Médine Tome 3 - الدرس السابع عشر',
    'Livre de Médine Tome 3 - الدرس الثامن عشر',
    'Livre de Médine Tome 3 - الدرس التاسع عشر'
  ],
  4: [
    'Livre de Médine Tome 4 - الدرس الأول',
    'Livre de Médine Tome 4 - الدرس الثاني',
    'Livre de Médine Tome 4 - الدرس الثالث',
    'Livre de Médine Tome 4 - الدرس الرابع',
    'Livre de Médine Tome 4 - الدرس الخامس',
    'Livre de Médine Tome 4 - الدرس السادس',
    'Livre de Médine Tome 4 - الدرس السابع',
    'Livre de Médine Tome 4 - الدرس الثامن',
    'Livre de Médine Tome 4 - الدرس التاسع',
    'Livre de Médine Tome 4 - الدرس العاشر',
    'Livre de Médine Tome 4 - الدرس الحادي عشر',
    'Livre de Médine Tome 4 - الدرس الثاني عشر',
    'Livre de Médine Tome 4 - الدرس الثالث عشر',
    'Livre de Médine Tome 4 - الدرس الرابع عشر',
    'Livre de Médine Tome 4 - الدرس الخامس عشر',
    'Livre de Médine Tome 4 - الدرس السادس عشر',
    'Livre de Médine Tome 4 - الدرس السابع عشر',
    'Livre de Médine Tome 4 - الدرس الثامن عشر',
    'Livre de Médine Tome 4 - الدرس التاسع عشر'
  ],
  5: [
    'Livre de Médine Tome 5 - الدرس الأول',
    'Livre de Médine Tome 5 - الدرس الثاني',
    'Livre de Médine Tome 5 - الدرس الثالث',
    'Livre de Médine Tome 5 - الدرس الرابع',
    'Livre de Médine Tome 5 - الدرس الخامس',
    'Livre de Médine Tome 5 - الدرس السادس',
    'Livre de Médine Tome 5 - الدرس السابع',
    'Livre de Médine Tome 5 - الدرس الثامن',
    'Livre de Médine Tome 5 - الدرس التاسع',
    'Livre de Médine Tome 5 - الدرس العاشر',
    'Livre de Médine Tome 5 - الدرس الحادي عشر',
    'Livre de Médine Tome 5 - الدرس الثاني عشر',
    'Livre de Médine Tome 5 - الدرس الثالث عشر',
    'Livre de Médine Tome 5 - الدرس الرابع عشر',
    'Livre de Médine Tome 5 - الدرس الخامس عشر',
    'Livre de Médine Tome 5 - الدرس السادس عشر',
    'Livre de Médine Tome 5 - الدرس السابع عشر',
    'Livre de Médine Tome 5 - الدرس الثامن عشر',
    'Livre de Médine Tome 5 - الدرس التاسع عشر'
  ],
  6: [
    'Livre de Médine Tome 6 - الدرس الأول',
    'Livre de Médine Tome 6 - الدرس الثاني',
    'Livre de Médine Tome 6 - الدرس الثالث',
    'Livre de Médine Tome 6 - الدرس الرابع',
    'Livre de Médine Tome 6 - الدرس الخامس',
    'Livre de Médine Tome 6 - الدرس السادس',
    'Livre de Médine Tome 6 - الدرس السابع',
    'Livre de Médine Tome 6 - الدرس الثامن',
    'Livre de Médine Tome 6 - الدرس التاسع',
    'Livre de Médine Tome 6 - الدرس العاشر',
    'Livre de Médine Tome 6 - الدرس الحادي عشر',
    'Livre de Médine Tome 6 - الدرس الثاني عشر',
    'Livre de Médine Tome 6 - الدرس الثالث عشر',
    'Livre de Médine Tome 6 - الدرس الرابع عشر',
    'Livre de Médine Tome 6 - الدرس الخامس عشر',
    'Livre de Médine Tome 6 - الدرس السادس عشر',
    'Livre de Médine Tome 6 - الدرس السابع عشر',
    'Livre de Médine Tome 6 - الدرس الثامن عشر',
    'Livre de Médine Tome 6 - الدرس التاسع عشر'
  ]
};

const specialSections = [
  { title: 'CED Bank - Banking Halal', accessible: true },
  { title: 'Al-Aman Takaful - Assurance', accessible: true },
  { title: 'TechForAll - Économie Solidaire', accessible: true },
  { title: 'Super IARP Pro - IA Éthique', accessible: true },
  { title: 'Formations Certifiantes', accessible: true },
  { title: 'Fiqh Informatique Complet', accessible: true },
  { title: 'Traducteur Multilingue', accessible: true },
  { title: 'École Arabe CED', accessible: true },
  { title: 'Communauté Mondiale', accessible: true },
  { title: 'Support 24/7 Scholars', accessible: true }
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 to-teal-600">
      {/* Header vert avec logo CED */}
      <div className="bg-emerald-600 text-white p-4 text-center">
        <div className="flex items-center justify-center mb-2">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold">INSTITUT CED</h1>
            <p className="text-xs text-emerald-100">معهد النادي الرقمي</p>
          </div>
        </div>
        <div className="text-xs text-emerald-200">
          Club Empreinte Digitale Academy
        </div>
      </div>

      {/* Menu hamburger */}
      <div className="bg-emerald-600 px-4 pb-2">
        <Button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          variant="outline"
          size="sm"
          className="bg-white text-emerald-600 border-white hover:bg-emerald-50"
        >
          <Menu className="h-4 w-4 mr-2" />
          Menu
        </Button>
      </div>

      {/* Navigation principale */}
      {isMenuOpen && (
        <div className="bg-emerald-600 text-white px-4 pb-4 space-y-1" dir="ltr">
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-emerald-500 py-2"
          >
            <Home className="h-4 w-4 mr-3" />
            🏠 Accueil
          </Button>
          
          {[1, 2, 3, 4, 5, 6].map((niveau) => (
            <div key={niveau}>
              <Button
                onClick={() => toggleNiveau(niveau)}
                variant="ghost"
                className="w-full justify-between text-white hover:bg-emerald-500 py-2"
              >
                <span>📖 Tome {niveau} de Médine</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${
                  expandedNiveau === niveau ? 'rotate-180' : ''
                }`} />
              </Button>
            </div>
          ))}
          
          <Button
            variant="ghost"
            className="w-full justify-between text-white hover:bg-emerald-500 py-2"
          >
            <span>📚 Méthode Médine Complète (6 Tomes)</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-between text-white hover:bg-emerald-500 py-2"
          >
            <span>📝 100 verbes arabes essentiels</span>
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
              {/* Introduction CED */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">Introduction CED Academy</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-green-200 text-green-800 text-xs">100% HALAL</Badge>
                    <span className="text-xs text-gray-500 ml-2">🕌 Fiqh Informatique</span>
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
                    <Badge className="bg-emerald-200 text-emerald-800 text-xs mt-1">Accessible</Badge>
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-emerald-500 hover:bg-emerald-600 text-white"
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
                  <Badge className="bg-emerald-200 text-emerald-800 text-xs mt-1">Accessible</Badge>
                </div>
                <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Sections spéciales */}
              {specialSections.map((section, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">{section.title}</div>
                    <Badge className="bg-emerald-200 text-emerald-800 text-xs mt-1">
                      {section.accessible ? 'Accessible' : 'Verrouillé'}
                    </Badge>
                  </div>
                  <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
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

        {/* Module de traduction intégré style CED */}
        <div className="bg-emerald-400 p-4 rounded-lg">
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
            className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600 text-white font-medium"
            onClick={handleTranslate}
          >
            🌐 Traduire avec CED AI
          </Button>
        </div>
      </div>

      {/* Footer de protection CED */}
      <div className="bg-cyan-700 text-white text-center py-4 mt-8">
        <div className="text-sm">
          © 2025 INSTITUT CED ACADEMY - معهد النادي الرقمي
        </div>
        <div className="text-xs mt-1 opacity-80">
          Club Empreinte Digitale - Yakoubi Yamina - Protection Propriété Intellectuelle
        </div>
        <div className="text-xs mt-1 opacity-60">
          100% Conforme Fiqh Informatique - MANDUB Certifié
        </div>
      </div>
    </div>
  );
}