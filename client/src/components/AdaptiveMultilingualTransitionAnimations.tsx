import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Languages, Play, Pause, RotateCcw, Globe, Sparkles } from "lucide-react";

interface Language {
  code: string;
  name: string;
  nativeName: string;
  script: string;
  direction: 'ltr' | 'rtl';
  greeting: string;
  color: string;
}

interface AnimationStyle {
  id: string;
  name: string;
  description: string;
  className: string;
  duration: number;
}

const languages: Language[] = [
  {
    code: 'ar',
    name: 'Arabe',
    nativeName: 'العربية',
    script: 'Arabic',
    direction: 'rtl',
    greeting: 'السلام عليكم',
    color: 'bg-green-600'
  },
  {
    code: 'fr',
    name: 'Français',
    nativeName: 'Français',
    script: 'Latin',
    direction: 'ltr',
    greeting: 'Bonjour',
    color: 'bg-blue-600'
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    script: 'Latin',
    direction: 'ltr',
    greeting: 'Hello',
    color: 'bg-purple-600'
  },
  {
    code: 'ur',
    name: 'Ourdou',
    nativeName: 'اردو',
    script: 'Arabic',
    direction: 'rtl',
    greeting: 'السلام علیکم',
    color: 'bg-orange-600'
  },
  {
    code: 'tr',
    name: 'Turc',
    nativeName: 'Türkçe',
    script: 'Latin',
    direction: 'ltr',
    greeting: 'Selam',
    color: 'bg-red-600'
  },
  {
    code: 'id',
    name: 'Indonésien',
    nativeName: 'Bahasa Indonesia',
    script: 'Latin',
    direction: 'ltr',
    greeting: 'Assalamualaikum',
    color: 'bg-yellow-600'
  },
  {
    code: 'ms',
    name: 'Malais',
    nativeName: 'Bahasa Malaysia',
    script: 'Latin',
    direction: 'ltr',
    greeting: 'Assalamualaikum',
    color: 'bg-indigo-600'
  },
  {
    code: 'fa',
    name: 'Persan',
    nativeName: 'فارسی',
    script: 'Arabic',
    direction: 'rtl',
    greeting: 'سلام علیکم',
    color: 'bg-pink-600'
  }
];

const animationStyles: AnimationStyle[] = [
  {
    id: 'slide',
    name: 'Glissement',
    description: 'Transition fluide par glissement horizontal',
    className: 'transition-transform duration-500 ease-in-out',
    duration: 500
  },
  {
    id: 'fade',
    name: 'Fondu',
    description: 'Apparition/disparition en douceur',
    className: 'transition-opacity duration-700 ease-in-out',
    duration: 700
  },
  {
    id: 'scale',
    name: 'Échelle',
    description: 'Zoom progressif avec rotation',
    className: 'transition-all duration-600 ease-in-out',
    duration: 600
  },
  {
    id: 'flip',
    name: 'Retournement',
    description: 'Effet de carte qui se retourne',
    className: 'transition-transform duration-800 ease-in-out',
    duration: 800
  },
  {
    id: 'wave',
    name: 'Vague',
    description: 'Animation ondulante progressive',
    className: 'transition-all duration-1000 ease-in-out',
    duration: 1000
  }
];

interface ContentTranslation {
  title: string;
  subtitle: string;
  content: string;
  action: string;
}

const content: Record<string, ContentTranslation> = {
  ar: {
    title: 'مرحبا بكم في النظام الإسلامي',
    subtitle: 'تكنولوجيا حلال للمجتمع المسلم',
    content: 'نحن نقدم حلول تقنية متطورة تتوافق مع القيم الإسلامية والشريعة الإسلامية.',
    action: 'ابدأ الآن'
  },
  fr: {
    title: 'Bienvenue dans l\'Écosystème Islamique',
    subtitle: 'Technologie Halal pour la Communauté Musulmane',
    content: 'Nous proposons des solutions technologiques avancées conformes aux valeurs islamiques et à la Charia.',
    action: 'Commencer'
  },
  en: {
    title: 'Welcome to the Islamic Ecosystem',
    subtitle: 'Halal Technology for the Muslim Community',
    content: 'We provide advanced technological solutions compliant with Islamic values and Sharia law.',
    action: 'Get Started'
  },
  ur: {
    title: 'اسلامی نظام میں خوش آمدید',
    subtitle: 'مسلم کمیونٹی کے لیے حلال ٹیکنالوجی',
    content: 'ہم اسلامی اقدار اور شریعت کے مطابق جدید تکنیکی حل فراہم کرتے ہیں۔',
    action: 'شروع کریں'
  },
  tr: {
    title: 'İslami Ekosisteme Hoş Geldiniz',
    subtitle: 'Müslüman Toplum için Helal Teknoloji',
    content: 'İslami değerler ve Şeriat hukuku ile uyumlu gelişmiş teknolojik çözümler sunuyoruz.',
    action: 'Başlayın'
  },
  id: {
    title: 'Selamat Datang di Ekosistem Islam',
    subtitle: 'Teknologi Halal untuk Komunitas Muslim',
    content: 'Kami menyediakan solusi teknologi canggih yang sesuai dengan nilai-nilai Islam dan hukum Syariah.',
    action: 'Mulai Sekarang'
  },
  ms: {
    title: 'Selamat Datang ke Ekosistem Islam',
    subtitle: 'Teknologi Halal untuk Komuniti Muslim',
    content: 'Kami menyediakan penyelesaian teknologi canggih yang mematuhi nilai-nilai Islam dan hukum Syariah.',
    action: 'Mula Sekarang'
  },
  fa: {
    title: 'به اکوسیستم اسلامی خوش آمدید',
    subtitle: 'فناوری حلال برای جامعه مسلمان',
    content: 'ما راه‌حل‌های فناوری پیشرفته مطابق با ارزش‌های اسلامی و شریعت ارائه می‌دهیم.',
    action: 'شروع کنید'
  }
};

export default function AdaptiveMultilingualTransitionAnimations() {
  const [currentLanguage, setCurrentLanguage] = useState('fr');
  const [currentAnimation, setCurrentAnimation] = useState('slide');
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // Animation automatique
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      const currentIndex = languages.findIndex(lang => lang.code === currentLanguage);
      const nextIndex = (currentIndex + 1) % languages.length;
      handleLanguageChange(languages[nextIndex].code);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentLanguage, autoPlay]);

  const handleLanguageChange = (languageCode: string) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setAnimationKey(prev => prev + 1);
    
    setTimeout(() => {
      setCurrentLanguage(languageCode);
      setIsAnimating(false);
    }, animationStyles.find(style => style.id === currentAnimation)?.duration || 500);
  };

  const handleAnimationChange = (animationId: string) => {
    setCurrentAnimation(animationId);
    setAnimationKey(prev => prev + 1);
  };

  const resetAnimation = () => {
    setAnimationKey(prev => prev + 1);
    setIsAnimating(false);
  };

  const currentLang = languages.find(lang => lang.code === currentLanguage);
  const currentContent = content[currentLanguage];
  const currentAnimationStyle = animationStyles.find(style => style.id === currentAnimation);

  const getAnimationClasses = () => {
    const baseClasses = currentAnimationStyle?.className || '';
    
    switch (currentAnimation) {
      case 'slide':
        return `${baseClasses} ${isAnimating ? 'translate-x-full' : 'translate-x-0'}`;
      case 'fade':
        return `${baseClasses} ${isAnimating ? 'opacity-0' : 'opacity-100'}`;
      case 'scale':
        return `${baseClasses} ${isAnimating ? 'scale-0 rotate-180' : 'scale-100 rotate-0'}`;
      case 'flip':
        return `${baseClasses} ${isAnimating ? 'rotateY-180' : 'rotateY-0'}`;
      case 'wave':
        return `${baseClasses} ${isAnimating ? 'translate-y-4 skew-x-12' : 'translate-y-0 skew-x-0'}`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            🌐 Animations de Transition Multilingues Adaptatives
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Transitions fluides et culturellement appropriées pour une expérience utilisateur immersive
          </p>
        </div>

        {/* Contrôles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Sélecteur de langue */}
          <Card className="bg-slate-800/40 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Languages className="h-5 w-5 text-green-400" />
                <span>Langues Disponibles</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {languages.map(lang => (
                  <Button
                    key={lang.code}
                    variant={currentLanguage === lang.code ? "default" : "outline"}
                    className={`text-left ${
                      currentLanguage === lang.code 
                        ? `${lang.color} text-white` 
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                    onClick={() => handleLanguageChange(lang.code)}
                    disabled={isAnimating}
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-xs opacity-75">{lang.nativeName}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sélecteur d'animation */}
          <Card className="bg-slate-800/40 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-blue-400" />
                <span>Styles d'Animation</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {animationStyles.map(style => (
                  <Button
                    key={style.id}
                    variant={currentAnimation === style.id ? "default" : "outline"}
                    className={`w-full text-left ${
                      currentAnimation === style.id 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                    onClick={() => handleAnimationChange(style.id)}
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{style.name}</span>
                      <span className="text-xs opacity-75">{style.description}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contrôles de lecture */}
        <Card className="mb-8 bg-slate-800/40 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Contrôles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => setAutoPlay(!autoPlay)}
                className={`${
                  autoPlay 
                    ? 'bg-green-600 text-white' 
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {autoPlay ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                {autoPlay ? 'Arrêter' : 'Démo Auto'}
              </Button>
              
              <Button
                variant="outline"
                onClick={resetAnimation}
                className="bg-slate-700 text-gray-300 hover:bg-slate-600"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Réinitialiser
              </Button>
              
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-400">
                  Langue actuelle: {currentLang?.name}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Zone de démonstration */}
        <Card className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 border-slate-700 min-h-[400px]">
          <CardContent className="p-8">
            <div
              key={animationKey}
              className={`${getAnimationClasses()} text-center space-y-6`}
              style={{ 
                direction: currentLang?.direction || 'ltr',
                fontFamily: currentLang?.script === 'Arabic' ? 'Noto Sans Arabic, serif' : 'inherit'
              }}
            >
              {/* Salutation */}
              <div className="mb-8">
                <Badge className={`${currentLang?.color} text-white text-lg px-4 py-2`}>
                  {currentLang?.greeting}
                </Badge>
              </div>

              {/* Titre principal */}
              <h2 className="text-4xl font-bold text-white mb-4">
                {currentContent?.title}
              </h2>

              {/* Sous-titre */}
              <h3 className="text-2xl text-green-400 mb-6">
                {currentContent?.subtitle}
              </h3>

              {/* Contenu */}
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                {currentContent?.content}
              </p>

              {/* Action */}
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
              >
                {currentContent?.action}
              </Button>

              {/* Informations techniques */}
              <div className="mt-8 text-sm text-gray-400">
                <p>Direction: {currentLang?.direction?.toUpperCase()}</p>
                <p>Script: {currentLang?.script}</p>
                <p>Animation: {currentAnimationStyle?.name}</p>
                <p>Durée: {currentAnimationStyle?.duration}ms</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Informations sur les langues */}
        <Card className="mt-8 bg-slate-800/40 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Langues Supportées</CardTitle>
            <CardDescription className="text-gray-300">
              Couverture mondiale des principales langues musulmanes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {languages.map(lang => (
                <div 
                  key={lang.code} 
                  className={`p-4 rounded-lg border ${
                    currentLanguage === lang.code
                      ? 'bg-green-900/30 border-green-600/50'
                      : 'bg-slate-700/30 border-slate-600/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white">{lang.name}</h4>
                    <Badge className={`${lang.color} text-white`}>
                      {lang.code.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-lg font-medium mb-1">{lang.nativeName}</p>
                  <p className="text-sm text-gray-400">Script: {lang.script}</p>
                  <p className="text-sm text-gray-400">Direction: {lang.direction.toUpperCase()}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}