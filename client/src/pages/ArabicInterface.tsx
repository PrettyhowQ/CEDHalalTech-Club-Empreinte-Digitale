import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Languages, 
  Keyboard, 
  BookOpen, 
  Smile, 
  Home,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const menuItems = [
  { id: 'accueil', label: 'الصفحة الرئيسية', icon: Home, frenchLabel: 'Accueil' },
  { id: 'niveau1', label: 'المستوى الأول', frenchLabel: 'Niveau 1' },
  { id: 'niveau2', label: 'المستوى الثاني', frenchLabel: 'Niveau 2' },
  { id: '100verbes', label: '100 فعل عربي', frenchLabel: '100 verbes arabes' },
  { id: 'niveau3', label: 'المستوى الثالث', frenchLabel: 'Niveau 3' },
  { id: 'niveau4', label: 'المستوى الرابع', frenchLabel: 'Niveau 4' },
  { id: 'niveau5', label: 'المستوى الخامس', frenchLabel: 'Niveau 5' },
  { id: 'niveau6', label: 'المستوى السادس', frenchLabel: 'Niveau 6' },
  { id: 'bonus', label: 'إضافات', frenchLabel: 'Bonus' },
  { id: 'coachings', label: 'التدريب والتصحيحات', frenchLabel: 'Coachings et corrections' },
  { id: 'aide', label: 'المساعدة', frenchLabel: 'Aide' },
  { id: 'credits', label: 'شراء الرصيد', frenchLabel: 'Achat de crédits' },
  { id: 'traduction', label: 'تطبيق الترجمة', frenchLabel: 'App de Traduction' },
];

const languages = [
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

export default function ArabicInterface() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('ar');
  const [targetLang, setTargetLang] = useState('fr');
  const [isTranslating, setIsTranslating] = useState(false);

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    
    setIsTranslating(true);
    try {
      // Simuler la traduction - en production, utiliser l'API de traduction
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (sourceText.includes('Institut club empreinte digitale')) {
        setTranslatedText('معهد النادي الرقمي');
      } else {
        setTranslatedText(`[Traduction ${sourceLang} → ${targetLang}] ${sourceText}`);
      }
    } catch (error) {
      console.error('Erreur de traduction:', error);
    } finally {
      setIsTranslating(false);
    }
  };

  const swapLanguages = () => {
    const tempLang = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(tempLang);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 to-cyan-500" dir="rtl">
      {/* Header avec logo et navigation */}
      <div className="bg-cyan-400 px-4 py-3">
        <div className="flex items-center justify-between mb-4">
          <div className="text-white text-lg font-bold">19:27</div>
          <div className="flex items-center space-x-2 text-white">
            <span className="text-sm">67%</span>
            <div className="w-6 h-3 border border-white rounded-sm">
              <div className="w-4 h-full bg-green-400 rounded-sm"></div>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-4">
          <div className="text-white text-sm opacity-90">...ut-anwar.learnybox.com</div>
        </div>

        <div className="flex items-center justify-center mb-6">
          <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
            <div className="text-white text-center">
              <div className="text-lg font-bold">نور الأنوار</div>
              <div className="text-sm opacity-90">Illuminez-vous par l'arabe</div>
            </div>
          </div>
        </div>

        <Button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-white text-cyan-600 hover:bg-gray-100 mb-4"
          size="sm"
        >
          <Menu className="h-4 w-4 mr-2" />
          القائمة
        </Button>
      </div>

      {/* Menu déroulant */}
      {isMenuOpen && (
        <div className="bg-cyan-400 px-4 pb-4">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="text-white hover:text-cyan-100 cursor-pointer py-2">
                  <div className="flex items-center">
                    <item.icon className="h-4 w-4 ml-2" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                </div>
                <ChevronDown className="h-4 w-4 text-white opacity-70" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section de traduction */}
      <div className="p-4">
        <div className="bg-orange-400 rounded-t-3xl p-6 shadow-lg">
          {/* Icônes d'outils */}
          <div className="flex items-center justify-center space-x-4 mb-6" dir="ltr">
            <div className="bg-white rounded-lg p-3 shadow-md">
              <Languages className="h-6 w-6 text-gray-700" />
            </div>
            <div className="bg-white rounded-lg p-3 shadow-md">
              <Keyboard className="h-6 w-6 text-gray-700" />
            </div>
            <div className="bg-white rounded-lg p-3 shadow-md">
              <BookOpen className="h-6 w-6 text-gray-700" />
            </div>
            <div className="bg-white rounded-lg p-3 shadow-md">
              <Smile className="h-6 w-6 text-gray-700" />
            </div>
          </div>

          {/* Zone de traduction */}
          <div className="bg-white rounded-lg p-4 space-y-4">
            <div>
              <Textarea
                placeholder="نص للترجمة"
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
                className="min-h-[100px] text-right border-gray-200"
                dir="rtl"
              />
            </div>

            <div className="border-t border-gray-200 pt-4">
              <Textarea
                placeholder="الترجمة"
                value={translatedText}
                readOnly
                className="min-h-[100px] text-right border-gray-200 bg-gray-50"
                dir={targetLang === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>

            {/* Sélecteur de langues */}
            <div className="flex items-center justify-center space-x-4" dir="ltr">
              <select
                value={sourceLang}
                onChange={(e) => setSourceLang(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>

              <Button
                onClick={swapLanguages}
                variant="ghost"
                size="sm"
                className="px-2"
              >
                ⇄
              </Button>

              <select
                value={targetLang}
                onChange={(e) => setTargetLang(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Bouton de traduction */}
          <Button
            onClick={handleTranslate}
            disabled={isTranslating || !sourceText.trim()}
            className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold"
          >
            {isTranslating ? 'جاري الترجمة...' : 'ترجم النص'}
          </Button>
        </div>
      </div>

      {/* Section exemple avec Institut CED */}
      <div className="px-4 pb-6">
        <Card className="bg-white shadow-lg">
          <CardContent className="p-4">
            <div className="text-center space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <div className="text-lg font-semibold text-gray-800" dir="ltr">
                  Institut club empreinte digitale
                </div>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <div className="text-lg font-semibold text-gray-800" dir="rtl">
                  معهد النادي الرقمي
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4" dir="ltr">
                <Badge variant="outline" className="text-blue-600 border-blue-600">
                  Français
                </Badge>
                <span className="text-gray-400">⇄</span>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  العربية
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer de protection */}
      <div className="bg-cyan-600 text-white text-center py-3 text-xs">
        <div dir="ltr">
          © 2025 Institut CED - معهد النادي الرقمي
        </div>
        <div className="mt-1" dir="ltr">
          Yakoubi Yamina - جميع الحقوق محفوظة
        </div>
      </div>
    </div>
  );
}