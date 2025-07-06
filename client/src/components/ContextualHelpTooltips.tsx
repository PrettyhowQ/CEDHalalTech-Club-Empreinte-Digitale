import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HelpCircle, Info, BookOpen, Heart, Star, Gift, Home, Volume2 } from 'lucide-react';

interface TooltipContent {
  title: string;
  description: string;
  culturalNote?: string;
  arabicTitle?: string;
  islamicReference?: string;
  audioGuide?: string;
}

interface ContextualTooltipProps {
  content: TooltipContent;
  position: 'top' | 'bottom' | 'left' | 'right';
  trigger: React.ReactNode;
  culturalSensitive?: boolean;
}

const tooltipData: Record<string, TooltipContent> = {
  banking: {
    title: "CED Bank - Banking Islamique",
    arabicTitle: "بنك سي إي دي - الخدمات المصرفية الإسلامية",
    description: "Système bancaire 100% conforme aux principes de la Sharia, sans intérêt (riba), avec supervision religieuse permanente.",
    culturalNote: "Notre système respecte strictement l'interdiction du riba selon le Coran et la Sunna.",
    islamicReference: "Coran 2:275 - Allah a permis le commerce et interdit l'usure",
    audioGuide: "Écoutez l'explication complète en français et arabe"
  },
  education: {
    title: "Institut CED Academy",
    arabicTitle: "معهد أكاديمية سي إي دي",
    description: "Plateforme d'apprentissage avec formations certifiées Fiqh informatique, cours d'arabe coranique et sciences islamiques.",
    culturalNote: "Toutes nos formations sont validées par 150+ scholars internationaux selon la méthodologie des Salaf.",
    islamicReference: "Hadith: 'Celui à qui Allah veut du bien, Il lui donne la compréhension de la religion'",
    audioGuide: "Guide vocal multilingue disponible"
  },
  insurance: {
    title: "Al-Aman Takaful",
    arabicTitle: "الأمان تكافل",
    description: "Assurance islamique basée sur les principes de solidarité mutuelle (Takaful) conformes à la Sharia.",
    culturalNote: "Le Takaful est conforme aux enseignements islamiques de solidarité et d'entraide entre musulmans.",
    islamicReference: "Principe coranique de Ta'awun (entraide) - Coran 5:2",
    audioGuide: "Explication des principes Takaful"
  },
  donation: {
    title: "TechForAll - Économie Solidaire",
    arabicTitle: "تيك فور أول - الاقتصاد التضامني",
    description: "Plateforme de dons technologiques et construction écologique conforme aux valeurs de Sadaqa et Zakat.",
    culturalNote: "Inspiré des principes islamiques de générosité et de partage des richesses.",
    islamicReference: "Hadith: 'La Sadaqa ne diminue jamais la richesse'",
    audioGuide: "Impact social et spirituel expliqué"
  }
};

const ContextualTooltip = ({ content, position, trigger, culturalSensitive = true }: ContextualTooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
      case 'bottom':
        return 'top-full left-1/2 transform -translate-x-1/2 mt-2';
      case 'left':
        return 'right-full top-1/2 transform -translate-y-1/2 mr-2';
      case 'right':
        return 'left-full top-1/2 transform -translate-y-1/2 ml-2';
      default:
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
    }
  };

  const speakContent = () => {
    if (isPlaying) return;
    
    setIsPlaying(true);
    const textToSpeak = `${content.title}. ${content.description}. ${content.culturalNote || ''}`;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'fr-FR';
    utterance.rate = 0.8;
    utterance.onend = () => setIsPlaying(false);
    speechSynthesis.speak(utterance);
  };

  const speakArabic = () => {
    if (!content.arabicTitle || isPlaying) return;
    
    setIsPlaying(true);
    const utterance = new SpeechSynthesisUtterance(content.arabicTitle);
    utterance.lang = 'ar-SA';
    utterance.rate = 0.7;
    utterance.onend = () => setIsPlaying(false);
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-help"
      >
        {trigger}
      </div>
      
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`absolute z-50 ${getPositionClasses()} w-80 animate-in fade-in-0 zoom-in-95 duration-200`}
        >
          <Card className="border-2 border-yellow-300 bg-white shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <Info className="h-5 w-5" />
                {content.title}
              </CardTitle>
              {content.arabicTitle && (
                <div className="text-right text-yellow-200 text-sm font-semibold" dir="rtl">
                  {content.arabicTitle}
                </div>
              )}
            </CardHeader>
            
            <CardContent className="p-4 space-y-3">
              <p className="text-gray-700 text-sm leading-relaxed">
                {content.description}
              </p>
              
              {culturalSensitive && content.culturalNote && (
                <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded">
                  <div className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-green-800 text-xs">
                      <strong>Sensibilité Culturelle:</strong> {content.culturalNote}
                    </p>
                  </div>
                </div>
              )}
              
              {content.islamicReference && (
                <div className="bg-blue-50 border border-blue-200 p-3 rounded">
                  <div className="flex items-start gap-2">
                    <BookOpen className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-blue-800 text-xs">
                      <strong>Référence Islamique:</strong> {content.islamicReference}
                    </p>
                  </div>
                </div>
              )}
              
              {content.audioGuide && (
                <div className="flex gap-2 pt-2">
                  <Button
                    onClick={speakContent}
                    disabled={isPlaying}
                    size="sm"
                    className="bg-blue-500 hover:bg-blue-600 text-white text-xs"
                  >
                    <Volume2 className="h-3 w-3 mr-1" />
                    {isPlaying ? 'Lecture...' : 'Écouter'}
                  </Button>
                  
                  {content.arabicTitle && (
                    <Button
                      onClick={speakArabic}
                      disabled={isPlaying}
                      size="sm"
                      className="bg-amber-500 hover:bg-amber-600 text-white text-xs"
                    >
                      <Volume2 className="h-3 w-3 mr-1" />
                      عربي
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default function ContextualHelpTooltips() {
  const [activeHelp, setActiveHelp] = useState<string | null>(null);
  const [helpInteractions, setHelpInteractions] = useState(0);

  const incrementInteraction = () => {
    setHelpInteractions(prev => prev + 1);
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <HelpCircle className="h-8 w-8" />
              Tooltips d'Aide Contextuelle Culturellement Sensibles
              <Star className="h-8 w-8 text-yellow-300" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            
            {/* Services CED avec Tooltips */}
            <Card className="mb-8 border border-emerald-300">
              <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-6 w-6" />
                  Services CED avec Aide Contextuelle
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  
                  <ContextualTooltip
                    content={tooltipData.banking}
                    position="top"
                    culturalSensitive={true}
                    trigger={
                      <Button 
                        onMouseEnter={incrementInteraction}
                        className="w-full h-24 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 text-white font-bold flex flex-col items-center gap-2"
                      >
                        <Home className="h-8 w-8" />
                        <span>CED Bank</span>
                        <HelpCircle className="h-4 w-4 opacity-60" />
                      </Button>
                    }
                  />

                  <ContextualTooltip
                    content={tooltipData.education}
                    position="top"
                    culturalSensitive={true}
                    trigger={
                      <Button 
                        onMouseEnter={incrementInteraction}
                        className="w-full h-24 bg-gradient-to-r from-blue-400 to-indigo-400 hover:from-blue-500 hover:to-indigo-500 text-white font-bold flex flex-col items-center gap-2"
                      >
                        <BookOpen className="h-8 w-8" />
                        <span>Institut CED</span>
                        <HelpCircle className="h-4 w-4 opacity-60" />
                      </Button>
                    }
                  />

                  <ContextualTooltip
                    content={tooltipData.insurance}
                    position="top"
                    culturalSensitive={true}
                    trigger={
                      <Button 
                        onMouseEnter={incrementInteraction}
                        className="w-full h-24 bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white font-bold flex flex-col items-center gap-2"
                      >
                        <Star className="h-8 w-8" />
                        <span>Al-Aman</span>
                        <HelpCircle className="h-4 w-4 opacity-60" />
                      </Button>
                    }
                  />

                  <ContextualTooltip
                    content={tooltipData.donation}
                    position="top"
                    culturalSensitive={true}
                    trigger={
                      <Button 
                        onMouseEnter={incrementInteraction}
                        className="w-full h-24 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-bold flex flex-col items-center gap-2"
                      >
                        <Gift className="h-8 w-8" />
                        <span>TechForAll</span>
                        <HelpCircle className="h-4 w-4 opacity-60" />
                      </Button>
                    }
                  />
                </div>
              </CardContent>
            </Card>

            {/* Différents Types de Tooltips */}
            <Card className="mb-8 border border-purple-300">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-6 w-6" />
                  Exemples de Positionnement et Sensibilité
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Positions Différentes
                    </h3>
                    
                    <div className="flex justify-center">
                      <ContextualTooltip
                        content={{
                          title: "Aide en Haut",
                          description: "Tooltip positionné au-dessus de l'élément avec sensibilité culturelle islamique.",
                          culturalNote: "Position respectant les pratiques de lecture arabe."
                        }}
                        position="top"
                        trigger={
                          <Badge className="bg-blue-500 text-white px-4 py-2 cursor-help">
                            Tooltip Haut
                          </Badge>
                        }
                      />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <ContextualTooltip
                        content={{
                          title: "Aide à Gauche",
                          description: "Positionnement adapté pour lecture RTL arabe.",
                          arabicTitle: "المساعدة على اليسار"
                        }}
                        position="left"
                        trigger={
                          <Badge className="bg-green-500 text-white px-4 py-2 cursor-help">
                            Gauche
                          </Badge>
                        }
                      />
                      
                      <ContextualTooltip
                        content={{
                          title: "Aide à Droite",
                          description: "Position droite avec support complet arabe.",
                          arabicTitle: "المساعدة على اليمين"
                        }}
                        position="right"
                        trigger={
                          <Badge className="bg-orange-500 text-white px-4 py-2 cursor-help">
                            Droite
                          </Badge>
                        }
                      />
                    </div>
                    
                    <div className="flex justify-center">
                      <ContextualTooltip
                        content={{
                          title: "Aide en Bas",
                          description: "Tooltip en position basse avec références islamiques complètes.",
                          islamicReference: "Exemple d'intégration culturelle respectueuse."
                        }}
                        position="bottom"
                        trigger={
                          <Badge className="bg-purple-500 text-white px-4 py-2 cursor-help">
                            Tooltip Bas
                          </Badge>
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Statistiques d'Utilisation
                    </h3>
                    
                    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span>Interactions d'aide:</span>
                        <Badge className="bg-blue-500 text-white">
                          {helpInteractions}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span>Mode culturel:</span>
                        <Badge className="bg-green-500 text-white">
                          Activé
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span>Support arabe:</span>
                        <Badge className="bg-purple-500 text-white">
                          Complet
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guide d'Utilisation */}
            <Card className="border border-yellow-300">
              <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6" />
                  Guide d'Utilisation Culturellement Adapté
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">Fonctionnalités:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Titres bilingues français/arabe</li>
                      <li>• Références islamiques authentiques</li>
                      <li>• Support audio multilingue</li>
                      <li>• Positionnement RTL-compatible</li>
                      <li>• Sensibilité culturelle intégrée</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">Utilisation:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Survolez les éléments pour aide</li>
                      <li>• Cliquez "Écouter" pour audio français</li>
                      <li>• Cliquez "عربي" pour audio arabe</li>
                      <li>• Support automatique RTL</li>
                      <li>• Citations coraniques intégrées</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Citation Islamique Finale */}
            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl border-2 border-indigo-300">
              <div className="text-center">
                <div className="text-lg font-semibold text-indigo-800 mb-2">
                  "وَقُل رَّبِّ زِدْنِي عِلْمًا"
                </div>
                <div className="text-sm text-indigo-600 italic">
                  "Et dis: Ô mon Seigneur, accroît mes connaissances!" - Coran 20:114
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  L'aide contextuelle facilite l'apprentissage selon l'éthique islamique
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}