import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Languages, 
  Volume2,
  Copy,
  Download,
  ArrowLeftRight,
  BookOpen,
  Globe,
  Mic,
  Pause,
  Play
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const languages = [
  // Langues principales
  { code: 'ar', name: 'العربية', nameEn: 'Arabic', flag: '🇸🇦', rtl: true },
  { code: 'fr', name: 'Français', nameEn: 'French', flag: '🇫🇷', rtl: false },
  { code: 'en', name: 'English', nameEn: 'English', flag: '🇺🇸', rtl: false },
  { code: 'es', name: 'Español', nameEn: 'Spanish', flag: '🇪🇸', rtl: false },
  
  // Langues européennes
  { code: 'de', name: 'Deutsch', nameEn: 'German', flag: '🇩🇪', rtl: false },
  { code: 'it', name: 'Italiano', nameEn: 'Italian', flag: '🇮🇹', rtl: false },
  { code: 'pt', name: 'Português', nameEn: 'Portuguese', flag: '🇵🇹', rtl: false },
  { code: 'ru', name: 'Русский', nameEn: 'Russian', flag: '🇷🇺', rtl: false },
  { code: 'nl', name: 'Nederlands', nameEn: 'Dutch', flag: '🇳🇱', rtl: false },
  
  // Langues asiatiques
  { code: 'zh', name: '中文', nameEn: 'Chinese', flag: '🇨🇳', rtl: false },
  { code: 'ja', name: '日本語', nameEn: 'Japanese', flag: '🇯🇵', rtl: false },
  { code: 'ko', name: '한국어', nameEn: 'Korean', flag: '🇰🇷', rtl: false },
  { code: 'hi', name: 'हिन्दी', nameEn: 'Hindi', flag: '🇮🇳', rtl: false },
  { code: 'ur', name: 'اردو', nameEn: 'Urdu', flag: '🇵🇰', rtl: true },
  { code: 'fa', name: 'فارسی', nameEn: 'Persian', flag: '🇮🇷', rtl: true },
  { code: 'tr', name: 'Türkçe', nameEn: 'Turkish', flag: '🇹🇷', rtl: false },
  
  // Langues africaines
  { code: 'sw', name: 'Kiswahili', nameEn: 'Swahili', flag: '🇹🇿', rtl: false },
  { code: 'am', name: 'አማርኛ', nameEn: 'Amharic', flag: '🇪🇹', rtl: false },
  { code: 'ha', name: 'Hausa', nameEn: 'Hausa', flag: '🇳🇬', rtl: false },
  
  // Langues du Maghreb/Moyen-Orient
  { code: 'he', name: 'עברית', nameEn: 'Hebrew', flag: '🇮🇱', rtl: true },
  { code: 'ku', name: 'کوردی', nameEn: 'Kurdish', flag: '🏴', rtl: true },
  
  // Langues d'Asie du Sud-Est
  { code: 'id', name: 'Bahasa Indonesia', nameEn: 'Indonesian', flag: '🇮🇩', rtl: false },
  { code: 'ms', name: 'Bahasa Melayu', nameEn: 'Malay', flag: '🇲🇾', rtl: false },
  { code: 'th', name: 'ไทย', nameEn: 'Thai', flag: '🇹🇭', rtl: false },
  { code: 'vi', name: 'Tiếng Việt', nameEn: 'Vietnamese', flag: '🇻🇳', rtl: false },
];

const islamicPhrases = [
  { ar: 'بسم الله الرحمن الرحيم', fr: 'Au nom d\'Allah, le Tout Miséricordieux, le Très Miséricordieux', en: 'In the name of Allah, the Most Gracious, the Most Merciful' },
  { ar: 'الحمد لله رب العالمين', fr: 'Louange à Allah, Seigneur de l\'univers', en: 'Praise be to Allah, Lord of all the worlds' },
  { ar: 'لا إله إلا الله محمد رسول الله', fr: 'Il n\'y a de divinité qu\'Allah et Muhammad est Son messager', en: 'There is no god but Allah and Muhammad is His messenger' },
  { ar: 'أستغفر الله العظيم', fr: 'Je demande pardon à Allah le Magnifique', en: 'I seek forgiveness from Allah the Almighty' },
  { ar: 'سبحان الله وبحمده', fr: 'Gloire et louange à Allah', en: 'Glory and praise to Allah' },
  { ar: 'الله أكبر', fr: 'Allah est le plus Grand', en: 'Allah is the Greatest' },
  { ar: 'إن شاء الله', fr: 'Si Allah le veut', en: 'God willing' },
  { ar: 'ما شاء الله', fr: 'Ce qu\'Allah a voulu', en: 'What Allah has willed' },
  { ar: 'بارك الله فيكم', fr: 'Qu\'Allah vous bénisse', en: 'May Allah bless you' },
  { ar: 'جزاكم الله خيرا', fr: 'Qu\'Allah vous récompense en bien', en: 'May Allah reward you with good' },
];

export default function ArabicMultilingualTranslator() {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('ar');
  const [targetLang, setTargetLang] = useState('fr');
  const [isTranslating, setIsTranslating] = useState(false);
  const [selectedPhrase, setSelectedPhrase] = useState<any>(null);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { toast } = useToast();

  const getLanguageByCode = (code: string) => languages.find(lang => lang.code === code);
  const sourceLangObj = getLanguageByCode(sourceLang);
  const targetLangObj = getLanguageByCode(targetLang);

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    
    setIsTranslating(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Chercher dans les phrases islamiques prédéfinies
      const islamicMatch = islamicPhrases.find(phrase => 
        phrase.ar.includes(sourceText.trim()) || 
        phrase.fr.includes(sourceText.trim()) || 
        phrase.en.includes(sourceText.trim())
      );
      
      if (islamicMatch) {
        if (targetLang === 'ar') setTranslatedText(islamicMatch.ar);
        else if (targetLang === 'fr') setTranslatedText(islamicMatch.fr);
        else if (targetLang === 'en') setTranslatedText(islamicMatch.en);
        else setTranslatedText(`[Traduction ${sourceLang} → ${targetLang}] ${sourceText}`);
      } else {
        // Quelques traductions personnalisées pour CED
        const cedTranslations: { [key: string]: { [key: string]: string } } = {
          'Institut club empreinte digitale': {
            ar: 'معهد النادي الرقمي',
            en: 'Digital Footprint Club Institute',
            es: 'Instituto Club Huella Digital',
            de: 'Institut Digitaler Fußabdruck Club',
            tr: 'Dijital İz Kulübü Enstitüsü'
          },
          'معهد النادي الرقمي': {
            fr: 'Institut club empreinte digitale',
            en: 'Digital Footprint Club Institute',
            es: 'Instituto Club Huella Digital',
            de: 'Institut Digitaler Fußabdruck Club',
            tr: 'Dijital İz Kulübü Enstitüsü'
          },
          'CED Academy': {
            ar: 'أكاديمية النادي الرقمي',
            en: 'CED Academy',
            es: 'Academia CED',
            de: 'CED Akademie',
            tr: 'CED Akademisi'
          }
        };
        
        const customTranslation = cedTranslations[sourceText.trim()]?.[targetLang];
        if (customTranslation) {
          setTranslatedText(customTranslation);
        } else {
          setTranslatedText(`[Traduction ${sourceLang} → ${targetLang}] ${sourceText}`);
        }
      }
      
      toast({
        title: "Traduction terminée",
        description: `Texte traduit de ${sourceLangObj?.nameEn} vers ${targetLangObj?.nameEn}`,
      });
    } catch (error) {
      console.error('Erreur de traduction:', error);
      toast({
        title: "Erreur de traduction",
        description: "Impossible de traduire le texte",
        variant: "destructive",
      });
    } finally {
      setIsTranslating(false);
    }
  };

  const swapLanguages = () => {
    const tempLang = sourceLang;
    const tempText = sourceText;
    setSourceLang(targetLang);
    setTargetLang(tempLang);
    setSourceText(translatedText);
    setTranslatedText(tempText);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copié",
      description: "Texte copié dans le presse-papiers",
    });
  };

  const speakText = (text: string, lang: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang === 'ar' ? 'ar-SA' : lang;
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesis.speak(utterance);
    }
  };

  const startListening = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.lang = sourceLang === 'ar' ? 'ar-SA' : sourceLang;
      recognition.onstart = () => setIsListening(true);
      recognition.onresult = (event: any) => {
        setSourceText(event.results[0][0].transcript);
        setIsListening(false);
      };
      recognition.onerror = () => setIsListening(false);
      recognition.start();
    }
  };

  const insertPhrase = (phrase: any) => {
    setSelectedPhrase(phrase);
    if (sourceLang === 'ar') setSourceText(phrase.ar);
    else if (sourceLang === 'fr') setSourceText(phrase.fr);
    else if (sourceLang === 'en') setSourceText(phrase.en);
    else setSourceText(phrase.ar);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 to-cyan-600" dir="rtl">
      {/* Header */}
      <div className="bg-cyan-500 text-white p-6 text-center">
        <div className="flex items-center justify-center mb-4">
          <Languages className="h-8 w-8 mr-3" />
          <h1 className="text-2xl font-bold">مترجم متعدد اللغات</h1>
        </div>
        <p className="text-cyan-100">Traducteur Multilingue Arabe - CED Academy</p>
        <Badge className="mt-2 bg-green-500 text-white">
          {languages.length} langues supportées
        </Badge>
      </div>

      <div className="container mx-auto p-4 space-y-6">
        {/* Sélecteurs de langues */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center" dir="ltr">
              <Globe className="h-5 w-5 mr-2" />
              Sélection des langues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center" dir="ltr">
              <div className="space-y-2">
                <label className="text-sm font-medium">Langue source</label>
                <Select value={sourceLang} onValueChange={setSourceLang}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        {lang.flag} {lang.name} ({lang.nameEn})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={swapLanguages}
                  variant="outline"
                  size="sm"
                  className="h-10 w-10 p-0"
                >
                  <ArrowLeftRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Langue cible</label>
                <Select value={targetLang} onValueChange={setTargetLang}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        {lang.flag} {lang.name} ({lang.nameEn})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Zone de traduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Texte source */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span dir="ltr">{sourceLangObj?.flag} {sourceLangObj?.name}</span>
                <div className="flex space-x-2">
                  <Button onClick={startListening} variant="outline" size="sm" disabled={isListening}>
                    <Mic className={`h-4 w-4 ${isListening ? 'text-red-500' : ''}`} />
                  </Button>
                  <Button 
                    onClick={() => speakText(sourceText, sourceLang)} 
                    variant="outline" 
                    size="sm"
                    disabled={!sourceText || isSpeaking}
                  >
                    {isSpeaking ? <Pause className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder={sourceLang === 'ar' ? 'اكتب النص هنا...' : 'Tapez votre texte ici...'}
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
                className={`min-h-[200px] ${sourceLangObj?.rtl ? 'text-right' : 'text-left'}`}
                dir={sourceLangObj?.rtl ? 'rtl' : 'ltr'}
              />
              <div className="flex justify-between mt-4">
                <Button onClick={() => copyToClipboard(sourceText)} variant="outline" size="sm">
                  <Copy className="h-4 w-4 mr-2" />
                  Copier
                </Button>
                <span className="text-sm text-gray-500">{sourceText.length} caractères</span>
              </div>
            </CardContent>
          </Card>

          {/* Texte traduit */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span dir="ltr">{targetLangObj?.flag} {targetLangObj?.name}</span>
                <div className="flex space-x-2">
                  <Button 
                    onClick={() => speakText(translatedText, targetLang)} 
                    variant="outline" 
                    size="sm"
                    disabled={!translatedText}
                  >
                    <Volume2 className="h-4 w-4" />
                  </Button>
                  <Button onClick={() => copyToClipboard(translatedText)} variant="outline" size="sm">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="La traduction apparaîtra ici..."
                value={translatedText}
                readOnly
                className={`min-h-[200px] bg-gray-50 ${targetLangObj?.rtl ? 'text-right' : 'text-left'}`}
                dir={targetLangObj?.rtl ? 'rtl' : 'ltr'}
              />
              <Button
                onClick={handleTranslate}
                disabled={isTranslating || !sourceText.trim()}
                className="w-full mt-4 bg-cyan-600 hover:bg-cyan-700 text-white"
              >
                {isTranslating ? 'Traduction en cours...' : 'Traduire'}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Phrases islamiques prédéfinies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center" dir="ltr">
              <BookOpen className="h-5 w-5 mr-2" />
              Phrases islamiques courantes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {islamicPhrases.map((phrase, index) => (
                <Button
                  key={index}
                  onClick={() => insertPhrase(phrase)}
                  variant="outline"
                  className="p-4 h-auto text-left justify-start"
                >
                  <div>
                    <div className="font-arabic text-right mb-1" dir="rtl">{phrase.ar}</div>
                    <div className="text-sm text-gray-600">{phrase.fr}</div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Statistiques */}
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-600">{languages.length}</div>
                <div className="text-sm text-gray-600">Langues</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Halal</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Disponible</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">∞</div>
                <div className="text-sm text-gray-600">Gratuit</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer de protection */}
      <div className="bg-cyan-700 text-white text-center py-4 mt-8">
        <div className="text-sm" dir="ltr">
          © 2025 Institut CED - معهد النادي الرقمي - Traducteur Multilingue
        </div>
        <div className="text-xs mt-1 opacity-80" dir="ltr">
          Yakoubi Yamina - جميع الحقوق محفوظة - Protection Propriété Intellectuelle
        </div>
      </div>
    </div>
  );
}