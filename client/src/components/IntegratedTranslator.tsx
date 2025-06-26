import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Languages, ArrowUpDown, Copy, Volume2, Book } from 'lucide-react';

interface TranslatorProps {
  className?: string;
}

export function IntegratedTranslator({ className = "" }: TranslatorProps) {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('français');
  const [targetLang, setTargetLang] = useState('arabe');
  const [isTranslating, setIsTranslating] = useState(false);

  const languages = [
    { code: 'ar', name: 'Arabe', nativeName: 'العربية' },
    { code: 'fr', name: 'Français', nativeName: 'Français' },
    { code: 'en', name: 'Anglais', nativeName: 'English' },
    { code: 'es', name: 'Espagnol', nativeName: 'Español' },
    { code: 'de', name: 'Allemand', nativeName: 'Deutsch' },
    { code: 'it', name: 'Italien', nativeName: 'Italiano' },
    { code: 'tr', name: 'Turc', nativeName: 'Türkçe' },
    { code: 'ur', name: 'Ourdou', nativeName: 'اردو' },
  ];

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    
    setIsTranslating(true);
    
    // Simulation de traduction (à remplacer par une vraie API)
    setTimeout(() => {
      if (sourceLang === 'français' && targetLang === 'arabe') {
        setTranslatedText('معهد النادي الرقمي');
      } else if (sourceLang === 'arabe' && targetLang === 'français') {
        setTranslatedText('Institut Club Empreinte Digitale');
      } else {
        setTranslatedText(`Traduction de "${sourceText}" vers ${targetLang}`);
      }
      setIsTranslating(false);
    }, 1000);
  };

  const swapLanguages = () => {
    const tempLang = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(tempLang);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={`bg-gradient-to-br from-cyan-400 to-teal-500 min-h-screen ${className}`}>
      {/* Header */}
      <div className="bg-cyan-400 p-4">
        <div className="flex items-center gap-2 text-white">
          <Book className="h-6 w-6" />
          <span className="text-lg font-bold">Institut Club Empreinte Digitale</span>
        </div>
        <p className="text-cyan-100 text-sm">Illuminez-vous par l'arabe</p>
      </div>

      {/* Menu Button */}
      <div className="p-4">
        <Button 
          variant="outline" 
          className="bg-white/90 text-gray-700 border-gray-300"
        >
          ☰ Menu
        </Button>
      </div>

      {/* Navigation */}
      <div className="px-4 mb-8">
        <div className="flex items-center gap-2 text-white mb-6">
          <span>🏠</span>
          <span>Accueil</span>
        </div>
        
        {/* Level Navigation */}
        <div className="space-y-3 text-white">
          {['Niveau 1', 'Niveau 2', '100 verbes arabes', 'Niveau 3', 'Niveau 4', 'Niveau 5', 'Niveau 6'].map((level, index) => (
            <div key={index} className="flex items-center justify-between cursor-pointer hover:text-cyan-200">
              <span>{level}</span>
              <span>▼</span>
            </div>
          ))}
          
          <div className="space-y-2 mt-6">
            <div className="text-white cursor-pointer hover:text-cyan-200">Bonus ▼</div>
            <div className="text-white cursor-pointer hover:text-cyan-200">Coachings et corrections</div>
            <div className="flex items-center gap-2 text-white cursor-pointer hover:text-cyan-200">
              <span>ℹ️</span>
              <span>Aide</span>
            </div>
            <div className="text-white cursor-pointer hover:text-cyan-200">Achat de crédits</div>
          </div>
        </div>
      </div>

      {/* Translator Section */}
      <div className="px-4">
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-t-lg p-4">
          <div className="flex justify-center gap-4 mb-4">
            <Button size="sm" className="bg-white text-gray-700 hover:bg-gray-100">
              <Languages className="h-4 w-4" />
            </Button>
            <Button size="sm" className="bg-white text-gray-700 hover:bg-gray-100">
              <span>⌨️</span>
            </Button>
            <Button size="sm" className="bg-white text-gray-700 hover:bg-gray-100">
              <Book className="h-4 w-4" />
            </Button>
            <Button size="sm" className="bg-white text-gray-700 hover:bg-gray-100">
              <span>😊</span>
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-b-lg p-6">
          {/* Source Text */}
          <div className="mb-4">
            <Textarea
              placeholder="Texte à traduire"
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
              className="min-h-[120px] text-lg"
              dir={sourceLang === 'arabe' ? 'rtl' : 'ltr'}
            />
          </div>

          {/* Translated Text */}
          <div className="mb-4">
            <Textarea
              placeholder="Traduction"
              value={translatedText}
              readOnly
              className="min-h-[120px] text-lg bg-gray-50"
              dir={targetLang === 'arabe' ? 'rtl' : 'ltr'}
            />
          </div>

          {/* Language Selection */}
          <div className="flex items-center justify-between mb-6">
            <Select value={sourceLang} onValueChange={setSourceLang}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.name.toLowerCase()}>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button 
              size="sm" 
              variant="ghost" 
              onClick={swapLanguages}
              className="mx-2"
            >
              <ArrowUpDown className="h-4 w-4" />
            </Button>

            <Select value={targetLang} onValueChange={setTargetLang}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.name.toLowerCase()}>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Translate Button */}
          <Button 
            onClick={handleTranslate}
            disabled={isTranslating || !sourceText.trim()}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg"
          >
            {isTranslating ? 'Traduction en cours...' : 'Traduire le texte'}
          </Button>

          {/* Action Buttons */}
          {translatedText && (
            <div className="flex gap-2 mt-4">
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => copyToClipboard(translatedText)}
              >
                <Copy className="h-4 w-4 mr-1" />
                Copier
              </Button>
              <Button 
                size="sm" 
                variant="outline"
              >
                <Volume2 className="h-4 w-4 mr-1" />
                Écouter
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Institut CED Example */}
      <div className="px-4 mt-6">
        <div className="bg-white/10 rounded-lg p-4 text-white">
          <h3 className="font-bold mb-2">Exemple :</h3>
          <div className="text-center p-4 bg-white/20 rounded">
            <p className="text-lg">Institut Club Empreinte Digitale</p>
            <p className="text-xl mt-2" dir="rtl">معهد النادي الرقمي</p>
          </div>
        </div>
      </div>
    </div>
  );
}