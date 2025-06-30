import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, ChevronDown, ChevronUp, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  region: string;
  direction: 'ltr' | 'rtl';
  audioSupport: boolean;
  culturalGreeting: string;
  religiousContext?: string;
}

const languages: Language[] = [
  // Core Islamic Languages
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇸🇦',
    region: 'Middle East',
    direction: 'rtl',
    audioSupport: true,
    culturalGreeting: 'السلام عليكم ورحمة الله وبركاته',
    religiousContext: 'Language of the Holy Quran'
  },
  {
    code: 'ur',
    name: 'Urdu',
    nativeName: 'اردو',
    flag: '🇵🇰',
    region: 'South Asia',
    direction: 'rtl',
    audioSupport: true,
    culturalGreeting: 'آداب عرض ہے',
    religiousContext: 'Major Islamic scholarly language'
  },
  {
    code: 'fa',
    name: 'Persian',
    nativeName: 'فارسی',
    flag: '🇮🇷',
    region: 'Central Asia',
    direction: 'rtl',
    audioSupport: true,
    culturalGreeting: 'سلام علیکم',
    religiousContext: 'Classical Islamic literature'
  },
  {
    code: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    flag: '🇹🇷',
    region: 'Turkey',
    direction: 'ltr',
    audioSupport: true,
    culturalGreeting: 'Selamünaleyküm',
    religiousContext: 'Ottoman Islamic heritage'
  },
  
  // European Languages
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    region: 'Europe',
    direction: 'ltr',
    audioSupport: true,
    culturalGreeting: 'Que la paix soit avec vous',
    religiousContext: 'Growing Muslim community'
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    region: 'Global',
    direction: 'ltr',
    audioSupport: true,
    culturalGreeting: 'Peace be upon you',
    religiousContext: 'International Islamic communication'
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    region: 'Europe',
    direction: 'ltr',
    audioSupport: true,
    culturalGreeting: 'Friede sei mit dir',
    religiousContext: 'European Muslim community'
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    region: 'Iberia/Americas',
    direction: 'ltr',
    audioSupport: true,
    culturalGreeting: 'La paz sea contigo',
    religiousContext: 'Andalusian Islamic heritage'
  },
  
  // Asian Languages
  {
    code: 'id',
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
    flag: '🇮🇩',
    region: 'Southeast Asia',
    direction: 'ltr',
    audioSupport: true,
    culturalGreeting: 'Assalamualaikum warahmatullahi wabarakatuh',
    religiousContext: 'Largest Muslim population globally'
  },
  {
    code: 'ms',
    name: 'Malay',
    nativeName: 'Bahasa Melayu',
    flag: '🇲🇾',
    region: 'Southeast Asia',
    direction: 'ltr',
    audioSupport: true,
    culturalGreeting: 'Assalamualaikum',
    religiousContext: 'Islamic majority nation'
  },
  {
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    flag: '🇧🇩',
    region: 'South Asia',
    direction: 'ltr',
    audioSupport: true,
    culturalGreeting: 'আসসালামু আলাইকুম',
    religiousContext: 'Large Muslim population'
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
    region: 'South Asia',
    direction: 'ltr',
    audioSupport: true,
    culturalGreeting: 'आदाब अर्ज़ है',
    religiousContext: 'Significant Muslim minority'
  },
  
  // African Languages
  {
    code: 'sw',
    name: 'Swahili',
    nativeName: 'Kiswahili',
    flag: '🇹🇿',
    region: 'East Africa',
    direction: 'ltr',
    audioSupport: true,
    culturalGreeting: 'Assalamu alaikum',
    religiousContext: 'Islamic influence in East Africa'
  },
  {
    code: 'ha',
    name: 'Hausa',
    nativeName: 'Harshen Hausa',
    flag: '🇳🇬',
    region: 'West Africa',
    direction: 'ltr',
    audioSupport: true,
    culturalGreeting: 'Sannu da zuwa',
    religiousContext: 'Islamic scholarship tradition'
  }
];

interface InteractiveLanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: Language) => void;
  variant?: 'compact' | 'full' | 'floating';
  showGreeting?: boolean;
  showAudioSupport?: boolean;
}

export function InteractiveLanguageSelector({
  currentLanguage = 'en',
  onLanguageChange,
  variant = 'compact',
  showGreeting = true,
  showAudioSupport = true
}: InteractiveLanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [voiceEnabled, setVoiceEnabled] = useState(true);

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[5]; // Default to English
  
  const regions = Array.from(new Set(languages.map(lang => lang.region)));
  
  const filteredLanguages = languages.filter(lang => {
    const matchesRegion = selectedRegion === 'all' || lang.region === selectedRegion;
    const matchesSearch = searchTerm === '' || 
      lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lang.nativeName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const handleLanguageSelect = (language: Language) => {
    onLanguageChange(language);
    setIsOpen(false);
    
    // Apply RTL/LTR direction to document
    document.documentElement.dir = language.direction;
    document.documentElement.lang = language.code;
    
    // Voice greeting if enabled
    if (voiceEnabled && language.audioSupport && showGreeting) {
      speakGreeting(language);
    }
  };

  const speakGreeting = (language: Language) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(language.culturalGreeting);
      utterance.lang = language.code;
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  if (variant === 'compact') {
    return (
      <div className="relative">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 min-w-[120px] justify-between hover:bg-green-50 dark:hover:bg-green-900/20"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">{currentLang.flag}</span>
            <span className="text-sm font-medium">{currentLang.name}</span>
          </div>
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full mt-2 z-50 min-w-[300px] right-0"
            >
              <Card className="shadow-xl border-2 border-green-200 dark:border-green-800">
                <CardContent className="p-4">
                  <div className="grid grid-cols-1 gap-2 max-h-[400px] overflow-y-auto">
                    {languages.slice(0, 8).map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageSelect(language)}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-green-50 dark:hover:bg-green-900/20 text-left w-full ${
                          currentLanguage === language.code ? 'bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700' : ''
                        }`}
                        dir={language.direction}
                      >
                        <span className="text-2xl">{language.flag}</span>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm">{language.name}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-300" dir={language.direction}>
                            {language.nativeName}
                          </div>
                        </div>
                        {language.audioSupport && showAudioSupport && (
                          <Volume2 className="h-3 w-3 text-green-600" />
                        )}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <Card className="w-full max-w-4xl mx-auto shadow-2xl border-2 border-green-200 dark:border-green-800">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Globe className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-bold">🌙 Select Your Language</h3>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setVoiceEnabled(!voiceEnabled)}
                className="flex items-center gap-2"
              >
                {voiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                <span className="text-xs">Voice</span>
              </Button>
            </div>
          </div>

          {/* Current Selection */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-4 mb-6 border border-green-200 dark:border-green-700">
            <div className="flex items-center gap-4" dir={currentLang.direction}>
              <span className="text-4xl">{currentLang.flag}</span>
              <div className="flex-1">
                <div className="font-bold text-lg">{currentLang.name}</div>
                <div className="text-green-700 dark:text-green-300 font-medium" dir={currentLang.direction}>
                  {currentLang.nativeName}
                </div>
                {showGreeting && (
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-1" dir={currentLang.direction}>
                    {currentLang.culturalGreeting}
                  </div>
                )}
                {currentLang.religiousContext && (
                  <Badge variant="secondary" className="mt-2 text-xs bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                    {currentLang.religiousContext}
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Region Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Button
              variant={selectedRegion === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedRegion('all')}
              className="text-xs"
            >
              All Regions
            </Button>
            {regions.map(region => (
              <Button
                key={region}
                variant={selectedRegion === region ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedRegion(region)}
                className="text-xs"
              >
                {region}
              </Button>
            ))}
          </div>

          {/* Language Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredLanguages.map((language) => (
              <motion.button
                key={language.code}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleLanguageSelect(language)}
                className={`flex items-center gap-3 p-4 rounded-xl transition-all text-left w-full border-2 ${
                  currentLanguage === language.code 
                    ? 'bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700 shadow-md' 
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700 hover:shadow-md'
                }`}
                dir={language.direction}
              >
                <span className="text-2xl">{language.flag}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm">{language.name}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300 mb-1" dir={language.direction}>
                    {language.nativeName}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {language.region}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  {language.audioSupport && showAudioSupport && (
                    <Volume2 className="h-3 w-3 text-green-600" />
                  )}
                  {language.direction === 'rtl' && (
                    <Badge variant="outline" className="text-xs px-1 py-0">RTL</Badge>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Footer Info */}
          <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
            <p>🌙 PrettyhowQ HalalTech™ supports {languages.length} languages with cultural respect</p>
            <p className="mt-1">Audio greetings available for supported languages</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Floating variant
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-2xl flex items-center justify-center"
      >
        <span className="text-2xl">{currentLang.flag}</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-72"
          >
            <Card className="shadow-2xl border-2 border-green-200 dark:border-green-800">
              <CardContent className="p-3">
                <div className="grid grid-cols-1 gap-1 max-h-64 overflow-y-auto">
                  {languages.slice(0, 6).map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageSelect(language)}
                      className={`flex items-center gap-2 p-2 rounded-lg transition-all hover:bg-green-50 dark:hover:bg-green-900/20 text-left w-full ${
                        currentLanguage === language.code ? 'bg-green-100 dark:bg-green-900/30' : ''
                      }`}
                      dir={language.direction}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-xs">{language.name}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300" dir={language.direction}>
                          {language.nativeName}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default InteractiveLanguageSelector;