import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  // Add more languages as needed (up to 78 total)
];

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (languageCode: string) => void;
  supportedLanguages: Language[];
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(SUPPORTED_LANGUAGES[0]);

  useEffect(() => {
    // Detect browser language on initial load
    const browserLang = navigator.language.split('-')[0];
    const savedLang = localStorage.getItem('preferred-language');
    const initialLang = savedLang || browserLang || 'fr';
    
    const language = SUPPORTED_LANGUAGES.find(lang => lang.code === initialLang) || SUPPORTED_LANGUAGES[0];
    setCurrentLanguage(language);
  }, []);

  const setLanguage = (languageCode: string) => {
    const language = SUPPORTED_LANGUAGES.find(lang => lang.code === languageCode);
    if (language) {
      setCurrentLanguage(language);
      localStorage.setItem('preferred-language', languageCode);
      
      // Update document direction for RTL languages
      document.documentElement.dir = isRTL(languageCode) ? 'rtl' : 'ltr';
    }
  };

  const isRTL = (langCode?: string): boolean => {
    const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
    return rtlLanguages.includes(langCode || currentLanguage.code);
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        supportedLanguages: SUPPORTED_LANGUAGES,
        isRTL: isRTL(),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Translation function placeholder - in real app would use i18n library
export function t(key: string, language?: string): string {
  // This is a simplified translation function
  // In production, you'd use a proper i18n library
  const translations: Record<string, Record<string, string>> = {
    'fr': {
      'welcome': 'Bienvenue',
      'courses': 'Formations',
      'resources': 'Ressources',
      'boutique': 'Boutique Solidaire',
      'ethics': 'IA Éthique',
      'start_free': 'Commencer gratuitement',
      'try_chat': 'Essayer Chat IARP',
      'programming': 'Programmation',
      'nutrition': 'Diététique',
      'ai_domains': '10 Domaines IA',
      'certifications': 'Certifications',
    },
    'en': {
      'welcome': 'Welcome',
      'courses': 'Courses',
      'resources': 'Resources',
      'boutique': 'Solidarity Shop',
      'ethics': 'Ethical AI',
      'start_free': 'Start for free',
      'try_chat': 'Try Chat IARP',
      'programming': 'Programming',
      'nutrition': 'Nutrition',
      'ai_domains': '10 AI Domains',
      'certifications': 'Certifications',
    },
    'es': {
      'welcome': 'Bienvenido',
      'courses': 'Cursos',
      'resources': 'Recursos',
      'boutique': 'Tienda Solidaria',
      'ethics': 'IA Ética',
      'start_free': 'Empezar gratis',
      'try_chat': 'Probar Chat IARP',
      'programming': 'Programación',
      'nutrition': 'Dietética',
      'ai_domains': '10 Dominios IA',
      'certifications': 'Certificaciones',
    },
  };

  const lang = language || 'fr';
  return translations[lang]?.[key] || key;
}
