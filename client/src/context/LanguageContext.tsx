import React, { createContext, useContext, useState, useEffect } from 'react';

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

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  supportedLanguages: Language[];
  translations: Record<string, string>;
  isRTL: boolean;
}

const supportedLanguages: Language[] = [
  {
    code: 'fr',
    name: 'Français',
    nativeName: 'Français',
    flag: '🇫🇷',
    region: 'Europe',
    direction: 'ltr',
    audioSupport: true,
    culturalGreeting: 'Que la paix soit avec vous',
    religiousContext: 'Communauté musulmane croissante'
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    region: 'North America',
    direction: 'ltr',
    audioSupport: true,
    culturalGreeting: 'Peace be upon you',
    religiousContext: 'Growing Islamic community'
  },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇸🇦',
    region: 'Middle East',
    direction: 'rtl',
    audioSupport: true,
    culturalGreeting: 'السلام عليكم ورحمة الله وبركاته',
    religiousContext: 'Language of the Quran'
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    region: 'Europe',
    direction: 'ltr',
    audioSupport: true,
    culturalGreeting: 'La paz sea contigo',
    religiousContext: 'Muslim heritage in Al-Andalus'
  },
  {
    code: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    flag: '🇹🇷',
    region: 'Asia',
    direction: 'ltr',
    audioSupport: true,
    culturalGreeting: 'Selamünaleyküm',
    religiousContext: 'Ottoman Islamic tradition'
  }
];

const defaultLanguage: Language = supportedLanguages[0];

// Traductions de base pour l'interface
const translations: Record<string, Record<string, string>> = {
  fr: {
    welcome: 'Bienvenue',
    features: 'Fonctionnalités',
    about: 'À propos',
    contact: 'Contact',
    login: 'Connexion',
    register: 'Inscription',
    dashboard: 'Tableau de bord',
    profile: 'Profil',
    settings: 'Paramètres',
    logout: 'Déconnexion',
    language: 'Langue',
    theme: 'Thème',
    help: 'Aide',
    search: 'Rechercher',
    save: 'Enregistrer',
    cancel: 'Annuler',
    delete: 'Supprimer',
    edit: 'Modifier',
    add: 'Ajouter',
    view: 'Voir',
    close: 'Fermer',
    open: 'Ouvrir',
    yes: 'Oui',
    no: 'Non',
    loading: 'Chargement...',
    error: 'Erreur',
    success: 'Succès',
    warning: 'Avertissement',
    info: 'Information',
    // Spécifique PrettyhowQ HalalTech
    halaltech: 'HalalTech',
    webtv: 'WebTV IA PrettyhowQ',
    assistant: 'Assistant IA Spirituel',
    formations: 'Formations Halal',
    islamic_banking: 'Banque Islamique',
    takaful: 'Assurance Takaful',
    peace_greeting: 'Que la paix soit avec vous',
    bismillah: 'Au nom d\'Allah',
    alhamdulillah: 'Louange à Allah',
    subhanallah: 'Gloire à Allah',
    allahu_akbar: 'Allah est Le Plus Grand',
    select_language: 'Sélectionner votre langue',
    current_language: 'Langue actuelle',
    voice_enabled: 'Voix activée',
    voice_disabled: 'Voix désactivée'
  },
  en: {
    welcome: 'Welcome',
    features: 'Features',
    about: 'About',
    contact: 'Contact',
    login: 'Login',
    register: 'Register',
    dashboard: 'Dashboard',
    profile: 'Profile',
    settings: 'Settings',
    logout: 'Logout',
    language: 'Language',
    theme: 'Theme',
    help: 'Help',
    search: 'Search',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    add: 'Add',
    view: 'View',
    close: 'Close',
    open: 'Open',
    yes: 'Yes',
    no: 'No',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    warning: 'Warning',
    info: 'Information',
    // Specific PrettyhowQ HalalTech
    halaltech: 'HalalTech',
    webtv: 'WebTV AI PrettyhowQ',
    assistant: 'Spiritual AI Assistant',
    formations: 'Halal Training',
    islamic_banking: 'Islamic Banking',
    takaful: 'Takaful Insurance',
    peace_greeting: 'Peace be upon you',
    bismillah: 'In the name of Allah',
    alhamdulillah: 'Praise be to Allah',
    subhanallah: 'Glory be to Allah',
    allahu_akbar: 'Allah is the Greatest',
    select_language: 'Select your language',
    current_language: 'Current language',
    voice_enabled: 'Voice enabled',
    voice_disabled: 'Voice disabled'
  },
  ar: {
    welcome: 'أهلاً وسهلاً',
    features: 'الميزات',
    about: 'حول',
    contact: 'اتصل بنا',
    login: 'تسجيل الدخول',
    register: 'التسجيل',
    dashboard: 'لوحة التحكم',
    profile: 'الملف الشخصي',
    settings: 'الإعدادات',
    logout: 'تسجيل الخروج',
    language: 'اللغة',
    theme: 'المظهر',
    help: 'المساعدة',
    search: 'البحث',
    save: 'حفظ',
    cancel: 'إلغاء',
    delete: 'حذف',
    edit: 'تعديل',
    add: 'إضافة',
    view: 'عرض',
    close: 'إغلاق',
    open: 'فتح',
    yes: 'نعم',
    no: 'لا',
    loading: 'جاري التحميل...',
    error: 'خطأ',
    success: 'نجح',
    warning: 'تحذير',
    info: 'معلومات',
    // Specific PrettyhowQ HalalTech
    halaltech: 'هلال تك',
    webtv: 'تلفزيون الويب بالذكاء الاصطناعي',
    assistant: 'المساعد الروحي بالذكاء الاصطناعي',
    formations: 'التكوينات الحلال',
    islamic_banking: 'البنوك الإسلامية',
    takaful: 'التكافل',
    peace_greeting: 'السلام عليكم ورحمة الله وبركاته',
    bismillah: 'بسم الله',
    alhamdulillah: 'الحمد لله',
    subhanallah: 'سبحان الله',
    allahu_akbar: 'الله أكبر',
    select_language: 'اختر لغتك',
    current_language: 'اللغة الحالية',
    voice_enabled: 'الصوت مفعّل',
    voice_disabled: 'الصوت معطّل'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(defaultLanguage);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('prettyhowq-language');
    if (savedLanguage) {
      try {
        const parsedLanguage = JSON.parse(savedLanguage);
        setCurrentLanguage(parsedLanguage);
        document.documentElement.dir = parsedLanguage.direction;
        document.documentElement.lang = parsedLanguage.code;
      } catch (error) {
        console.warn('Erreur lors du chargement de la langue sauvegardée:', error);
      }
    }
  }, []);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('prettyhowq-language', JSON.stringify(language));
    document.documentElement.dir = language.direction;
    document.documentElement.lang = language.code;
    
    const event = new CustomEvent('languageChanged', { detail: language });
    window.dispatchEvent(event);
  };

  const currentTranslations = translations[currentLanguage.code] || translations.fr;

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    supportedLanguages,
    translations: currentTranslations,
    isRTL: currentLanguage.direction === 'rtl'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage doit être utilisé dans un LanguageProvider');
  }
  return context;
}

export default LanguageContext;