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
    'Fondements Islam et Technologie',
    'Fiqh Informatique - Niveau Débutant',
    'Éthique IA selon le Coran',
    'Blockchain Halal - Introduction',
    'Premiers pas en Trading Sharia',
    'Zakat sur crypto-monnaies',
    'DeFi Islamique - Bases',
    'Smart Contracts conformes',
    'FinTech éthique',
    'Banque digitale sans Riba',
    'Assurance Takaful moderne',
    'Investissement ESG Halal',
    'Économie circulaire islamique',
    'Innovation responsable',
    'Tech for Good - Vision islamique',
    'Cybersécurité Halal',
    'Data Privacy selon Sharia',
    'E-commerce éthique',
    'Entrepreneuriat digital Halal'
  ],
  2: [
    'Fiqh Informatique Avancé',
    'IA Éthique - Applications pratiques',
    'Quantum Finance Halal',
    'Métaverse et valeurs islamiques',
    'NFT conformes Sharia',
    'Robotic Process Automation éthique',
    'Consulting tech islamique',
    'Audit conformité digitale',
    'Leadership tech responsable',
    'Innovation sociale digitale',
    'Sustainable FinTech',
    'Islamic PropTech',
    'EdTech conforme Fiqh',
    'HealthTech éthique',
    'AgriTech durable',
    'GreenTech islamique',
    'Social Impact Tech',
    'Inclusive Innovation',
    'Digital Transformation Halal'
  ],
  3: [
    'Expert en Fiqh Technologique',
    'Certification Sharia Tech',
    'Conseil stratégique Islamic Tech',
    'Research & Development Halal',
    'Innovation Labs islamiques',
    'Venture Capital éthique',
    'Tech Due Diligence Sharia',
    'Regulatory Compliance Islamic',
    'International Standards Halal',
    'Cross-border Islamic FinTech',
    'Merger & Acquisition éthique',
    'IPO Sharia Compliance',
    'Corporate Governance Islamic',
    'Sustainable Finance Tech',
    'Impact Investment Tech',
    'ESG Integration Halal',
    'Climate Tech islamique',
    'Circular Economy Digital',
    'Future of Islamic Finance'
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 to-cyan-600">
      {/* Header turquoise avec logo CED */}
      <div className="bg-cyan-500 text-white p-4 text-center">
        <div className="flex items-center justify-center mb-2">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold">INSTITUT CED</h1>
            <p className="text-xs text-cyan-100">معهد النادي الرقمي</p>
          </div>
        </div>
        <div className="text-xs text-cyan-200">
          Club Empreinte Digitale Academy
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