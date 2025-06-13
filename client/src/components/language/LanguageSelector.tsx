import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Globe, ChevronDown, Search } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { currentLanguage, setLanguage, supportedLanguages } = useLanguage();

  const filteredLanguages = supportedLanguages.filter(
    (lang) =>
      lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lang.nativeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lang.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLanguageSelect = (languageCode: string) => {
    setLanguage(languageCode);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium"
      >
        <Globe className="h-4 w-4" />
        <span>{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown className="h-3 w-3" />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Language Dropdown */}
          <Card className="absolute top-full right-0 mt-2 w-80 z-50 shadow-lg border border-gray-200">
            <CardContent className="p-0">
              {/* Header */}
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Choisir une langue
                </h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher une langue..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Language List */}
              <ScrollArea className="h-64">
                <div className="p-2">
                  {filteredLanguages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageSelect(language.code)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left hover:bg-gray-50 transition-colors ${
                        currentLanguage.code === language.code ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-xl">{language.flag}</span>
                      <div className="flex-1">
                        <div className="font-medium">{language.nativeName}</div>
                        <div className="text-sm text-gray-500">{language.name}</div>
                      </div>
                      {currentLanguage.code === language.code && (
                        <div className="w-2 h-2 bg-primary-500 rounded-full" />
                      )}
                    </button>
                  ))}
                  
                  {filteredLanguages.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <Globe className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                      <p>Aucune langue trouvée</p>
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Footer */}
              <div className="p-4 border-t border-gray-100 bg-gray-50">
                <p className="text-xs text-gray-600 text-center">
                  78 langues supportées • IA multilingue
                </p>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
