import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Globe, 
  Download, 
  Check, 
  Wifi, 
  WifiOff,
  ChevronLeft,
  X
} from "lucide-react";

interface LanguagePack {
  id: string;
  name: string;
  nativeName: string;
  code: string;
  flag: string;
  size: string;
  sizeBytes: number;
  isSelected: boolean;
  isDownloaded: boolean;
  isDownloading: boolean;
  downloadProgress: number;
  priority: 'essential' | 'popular' | 'standard';
  region: string;
}

const languagePacks: LanguagePack[] = [
  {
    id: 'ar',
    name: 'Arabe',
    nativeName: 'العربية',
    code: 'ar',
    flag: '🇸🇦',
    size: '231 MB',
    sizeBytes: 231,
    isSelected: false,
    isDownloaded: true,
    isDownloading: false,
    downloadProgress: 100,
    priority: 'essential',
    region: 'Moyen-Orient'
  },
  {
    id: 'en',
    name: 'English',
    nativeName: 'English',
    code: 'en',
    flag: '🇬🇧',
    size: '96 MB',
    sizeBytes: 96,
    isSelected: false,
    isDownloaded: true,
    isDownloading: false,
    downloadProgress: 100,
    priority: 'essential',
    region: 'International'
  },
  {
    id: 'fr',
    name: 'Français',
    nativeName: 'Français',
    code: 'fr',
    flag: '🇫🇷',
    size: '41 MB',
    sizeBytes: 41,
    isSelected: true,
    isDownloaded: true,
    isDownloading: false,
    downloadProgress: 100,
    priority: 'essential',
    region: 'Europe/Afrique'
  },
  {
    id: 'id',
    name: 'Indonesian',
    nativeName: 'Indonesian',
    code: 'id',
    flag: '🇮🇩',
    size: '34 MB',
    sizeBytes: 34,
    isSelected: false,
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
    priority: 'popular',
    region: 'Asie Sud-Est'
  },
  {
    id: 'tr',
    name: 'Türkçe',
    nativeName: 'Türkçe',
    code: 'tr',
    flag: '🇹🇷',
    size: '18 MB',
    sizeBytes: 18,
    isSelected: false,
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
    priority: 'popular',
    region: 'Europe/Asie'
  },
  {
    id: 'ur',
    name: 'اردو',
    nativeName: 'اردو',
    code: 'ur',
    flag: '🇵🇰',
    size: '66 MB',
    sizeBytes: 66,
    isSelected: false,
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
    priority: 'popular',
    region: 'Asie du Sud'
  },
  {
    id: 'bn',
    name: 'বাংলা',
    nativeName: 'বাংলা',
    code: 'bn',
    flag: '🇧🇩',
    size: '15 MB',
    sizeBytes: 15,
    isSelected: false,
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
    priority: 'popular',
    region: 'Asie du Sud'
  },
  {
    id: 'ru',
    name: 'Русский',
    nativeName: 'Русский',
    code: 'ru',
    flag: '🇷🇺',
    size: '20 MB',
    sizeBytes: 20,
    isSelected: false,
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
    priority: 'standard',
    region: 'Europe/Asie'
  },
  {
    id: 'es',
    name: 'Español',
    nativeName: 'Español',
    code: 'es',
    flag: '🇪🇸',
    size: '31 MB',
    sizeBytes: 31,
    isSelected: false,
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
    priority: 'standard',
    region: 'Europe/Amériques'
  },
  {
    id: 'fa',
    name: 'فارسی',
    nativeName: 'فارسی',
    code: 'fa',
    flag: '🇮🇷',
    size: '10 MB',
    sizeBytes: 10,
    isSelected: false,
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
    priority: 'standard',
    region: 'Moyen-Orient'
  },
  {
    id: 'hi',
    name: 'हिन्दी',
    nativeName: 'हिन्दी',
    code: 'hi',
    flag: '🇮🇳',
    size: '20 MB',
    sizeBytes: 20,
    isSelected: false,
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
    priority: 'standard',
    region: 'Asie du Sud'
  },
  {
    id: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    code: 'de',
    flag: '🇩🇪',
    size: '11 MB',
    sizeBytes: 11,
    isSelected: false,
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
    priority: 'standard',
    region: 'Europe'
  },
  {
    id: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    code: 'pt',
    flag: '🇵🇹',
    size: '12 MB',
    sizeBytes: 12,
    isSelected: false,
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
    priority: 'standard',
    region: 'Europe/Amériques'
  },
  {
    id: 'zh',
    name: '中文',
    nativeName: '中文',
    code: 'zh',
    flag: '🇨🇳',
    size: '16 MB',
    sizeBytes: 16,
    isSelected: false,
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
    priority: 'standard',
    region: 'Asie de l\'Est'
  },
  {
    id: 'ug',
    name: 'Uygur',
    nativeName: 'ئۇيغۇرچە',
    code: 'ug',
    flag: '🇨🇳',
    size: '23 MB',
    sizeBytes: 23,
    isSelected: false,
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
    priority: 'standard',
    region: 'Asie Centrale'
  },
  {
    id: 'tg',
    name: 'Тоҷикӣ',
    nativeName: 'Тоҷикӣ',
    code: 'tg',
    flag: '🇹🇯',
    size: '5 MB',
    sizeBytes: 5,
    isSelected: false,
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
    priority: 'standard',
    region: 'Asie Centrale'
  }
];

export function MobileLanguageSelector() {
  const [currentView, setCurrentView] = useState<'selector' | 'download'>('selector');
  const [languages, setLanguages] = useState(languagePacks);
  const [isOfflineMode, setIsOfflineMode] = useState(false);

  const handleLanguageSelect = (languageId: string) => {
    setLanguages(prev => prev.map(lang => ({
      ...lang,
      isSelected: lang.id === languageId
    })));
  };

  const handleDownload = (languageId: string) => {
    setLanguages(prev => prev.map(lang => 
      lang.id === languageId 
        ? { ...lang, isDownloading: true, downloadProgress: 0 }
        : lang
    ));

    // Simulate download progress
    const interval = setInterval(() => {
      setLanguages(prev => prev.map(lang => {
        if (lang.id === languageId && lang.isDownloading) {
          const newProgress = Math.min(lang.downloadProgress + 10, 100);
          if (newProgress === 100) {
            clearInterval(interval);
            return { 
              ...lang, 
              isDownloading: false, 
              isDownloaded: true, 
              downloadProgress: 100 
            };
          }
          return { ...lang, downloadProgress: newProgress };
        }
        return lang;
      }));
    }, 300);
  };

  const selectedLanguage = languages.find(lang => lang.isSelected);
  const downloadedLanguages = languages.filter(lang => lang.isDownloaded);
  const totalDownloadedSize = downloadedLanguages.reduce((sum, lang) => sum + lang.sizeBytes, 0);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'essential': return 'bg-green-100 text-green-800';
      case 'popular': return 'bg-blue-100 text-blue-800';
      case 'standard': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (currentView === 'selector') {
    return (
      <div className="max-w-md mx-auto bg-gray-900 text-white min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <button onClick={() => setCurrentView('selector')} className="text-green-400">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-semibold text-center flex-1">L'École CED Academy</h1>
          <div className="w-6"></div>
        </div>

        {/* Language Change Header */}
        <div className="p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
            <Globe className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Changement de langue</h2>
          <p className="text-gray-400 text-sm">Sélectionnez votre langue d'apprentissage</p>
        </div>

        {/* Language List */}
        <div className="px-4 space-y-3">
          {languages.map((language) => (
            <button
              key={language.id}
              onClick={() => handleLanguageSelect(language.id)}
              className={`w-full p-4 rounded-lg border transition-all ${
                language.isSelected 
                  ? 'border-green-500 bg-green-500/10' 
                  : 'border-gray-600 bg-gray-800 hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{language.flag}</span>
                  <div className="text-left">
                    <div className="font-medium">
                      {language.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {language.nativeName}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {language.isDownloaded && (
                    <Check className="h-5 w-5 text-green-500" />
                  )}
                  <Badge className={getPriorityColor(language.priority)}>
                    {language.priority === 'essential' ? 'Essentiel' : 
                     language.priority === 'popular' ? 'Populaire' : 'Standard'}
                  </Badge>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Offline Download Button */}
        <div className="p-4 mt-6">
          <button
            onClick={() => setCurrentView('download')}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <WifiOff className="h-5 w-5" />
            Surfez sans Internet
          </button>
        </div>

        {/* Footer */}
        <div className="p-4 text-center text-xs text-gray-500">
          <p>École CED Academy utilise Google pour vous assurer qu'il existe des résultats pertinents.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <button onClick={() => setCurrentView('selector')} className="text-green-400">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-semibold text-center flex-1">Surfez sans Internet</h1>
        <button onClick={() => setCurrentView('selector')} className="text-gray-400">
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Offline Mode Header */}
      <div className="p-6 text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
          <WifiOff className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-xl font-semibold mb-2">Langues disponibles pour téléchargement</h2>
        <p className="text-gray-400 text-sm">
          Téléchargées: {downloadedLanguages.length} • Total: {totalDownloadedSize} MB
        </p>
      </div>

      {/* Download Statistics */}
      <div className="px-4 mb-4">
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Espace utilisé</span>
            <span className="text-sm font-medium">{totalDownloadedSize} MB / 2 GB</span>
          </div>
          <Progress value={(totalDownloadedSize / 2000) * 100} className="h-2" />
        </div>
      </div>

      {/* Language Download List */}
      <div className="px-4 space-y-3">
        {languages.map((language) => (
          <div
            key={language.id}
            className="bg-gray-800 rounded-lg p-4 border border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Download className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="font-medium flex items-center gap-2">
                    <span className="text-lg">{language.flag}</span>
                    {language.nativeName}
                  </div>
                  <div className="text-sm text-gray-400">
                    {language.region}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">{language.size}</div>
                {language.isDownloaded ? (
                  <div className="text-xs text-green-500 flex items-center gap-1">
                    <Check className="h-3 w-3" />
                    Téléchargé
                  </div>
                ) : language.isDownloading ? (
                  <div className="w-16">
                    <Progress value={language.downloadProgress} className="h-1" />
                    <div className="text-xs text-blue-400 mt-1">
                      {language.downloadProgress}%
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleDownload(language.id)}
                    className="text-xs text-green-400 hover:text-green-300"
                  >
                    Télécharger
                  </button>
                )}
              </div>
            </div>

            {language.isDownloading && (
              <div className="mt-3">
                <Progress value={language.downloadProgress} className="h-2" />
                <div className="text-xs text-gray-400 mt-1">
                  Téléchargement en cours... {language.downloadProgress}%
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 mt-6 text-center text-xs text-gray-500">
        <p>Les packs de langues permettent l'utilisation hors ligne de l'École CED Academy</p>
      </div>
    </div>
  );
}