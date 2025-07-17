import React, { createContext, useContext, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Settings, Eye, Volume2, Type, Globe, Moon, Sun, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  contrast: 'normal' | 'high' | 'extra-high';
  colorScheme: 'light' | 'dark' | 'islamic-green' | 'islamic-gold' | 'high-contrast';
  rightToLeft: boolean;
  voiceGuidance: boolean;
  reducedMotion: boolean;
  culturalMode: 'universal' | 'islamic' | 'arabic';
  prayerMode: boolean;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 'medium',
  contrast: 'normal',
  colorScheme: 'light',
  rightToLeft: false,
  voiceGuidance: false,
  reducedMotion: false,
  culturalMode: 'islamic',
  prayerMode: false
};

const AccessibilityContext = createContext<{
  settings: AccessibilitySettings;
  updateSettings: (settings: Partial<AccessibilitySettings>) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}>({
  settings: defaultSettings,
  updateSettings: () => {},
  isOpen: false,
  setIsOpen: () => {}
});

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load settings from localStorage
    const saved = localStorage.getItem('ced-accessibility-settings');
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    // Save settings to localStorage
    localStorage.setItem('ced-accessibility-settings', JSON.stringify(settings));
    
    // Apply settings to document
    const root = document.documentElement;
    
    // Font size
    root.classList.remove('text-sm', 'text-base', 'text-lg', 'text-xl');
    switch (settings.fontSize) {
      case 'small': root.classList.add('text-sm'); break;
      case 'medium': root.classList.add('text-base'); break;
      case 'large': root.classList.add('text-lg'); break;
      case 'extra-large': root.classList.add('text-xl'); break;
    }
    
    // Color scheme
    root.classList.remove('dark', 'islamic-theme', 'high-contrast-theme');
    if (settings.colorScheme === 'dark') root.classList.add('dark');
    if (settings.colorScheme.includes('islamic')) root.classList.add('islamic-theme');
    if (settings.colorScheme === 'high-contrast') root.classList.add('high-contrast-theme');
    
    // RTL
    root.dir = settings.rightToLeft ? 'rtl' : 'ltr';
    
    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0s');
    } else {
      root.style.removeProperty('--animation-duration');
    }
    
    // Prayer mode
    if (settings.prayerMode) {
      root.classList.add('prayer-mode');
    } else {
      root.classList.remove('prayer-mode');
    }
  }, [settings]);

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  return (
    <AccessibilityContext.Provider value={{ settings, updateSettings, isOpen, setIsOpen }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  return useContext(AccessibilityContext);
}

export function AccessibilityPanel() {
  const { settings, updateSettings, isOpen, setIsOpen } = useAccessibility();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Settings className="w-6 h-6 text-emerald-600" />
              Accessibilité Culturellement Sensible
            </h2>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              ✕
            </Button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Personnalisez votre expérience selon vos besoins et préférences culturelles
          </p>
        </div>

        <div className="p-6 space-y-6">
          {/* Taille du texte */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 font-medium">
              <Type className="w-5 h-5 text-blue-600" />
              Taille du texte
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { value: 'small', label: 'Petit' },
                { value: 'medium', label: 'Moyen' },
                { value: 'large', label: 'Grand' },
                { value: 'extra-large', label: 'Très grand' }
              ].map(option => (
                <Button
                  key={option.value}
                  variant={settings.fontSize === option.value ? 'default' : 'outline'}
                  onClick={() => updateSettings({ fontSize: option.value as any })}
                  className="justify-start"
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Schéma de couleurs */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 font-medium">
              <Palette className="w-5 h-5 text-purple-600" />
              Thème culturel
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { value: 'light', label: '☀️ Clair', desc: 'Thème classique' },
                { value: 'dark', label: '🌙 Sombre', desc: 'Mode nuit' },
                { value: 'islamic-green', label: '🕌 Vert islamique', desc: 'Couleurs spirituelles' },
                { value: 'islamic-gold', label: '✨ Or islamique', desc: 'Élégance dorée' },
                { value: 'high-contrast', label: '👁️ Contraste élevé', desc: 'Visibilité maximale' }
              ].map(option => (
                <Button
                  key={option.value}
                  variant={settings.colorScheme === option.value ? 'default' : 'outline'}
                  onClick={() => updateSettings({ colorScheme: option.value as any })}
                  className="justify-start h-auto p-3 flex-col items-start"
                >
                  <span className="font-medium">{option.label}</span>
                  <span className="text-xs opacity-70">{option.desc}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Options culturelles */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 font-medium">
              <Globe className="w-5 h-5 text-emerald-600" />
              Préférences culturelles
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.rightToLeft}
                  onChange={(e) => updateSettings({ rightToLeft: e.target.checked })}
                  className="rounded border-gray-300"
                />
                <div>
                  <span className="font-medium">Mode droite-à-gauche (RTL)</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Interface adaptée aux langues arabes et persanes
                  </p>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.prayerMode}
                  onChange={(e) => updateSettings({ prayerMode: e.target.checked })}
                  className="rounded border-gray-300"
                />
                <div>
                  <span className="font-medium">Mode Prière 🕌</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Interface épurée pendant les horaires de prière
                  </p>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.voiceGuidance}
                  onChange={(e) => updateSettings({ voiceGuidance: e.target.checked })}
                  className="rounded border-gray-300"
                />
                <div>
                  <span className="font-medium">Guidance vocale</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Assistant vocal conforme aux valeurs islamiques
                  </p>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => updateSettings({ reducedMotion: e.target.checked })}
                  className="rounded border-gray-300"
                />
                <div>
                  <span className="font-medium">Réduire les animations</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Minimise les mouvements pour une meilleure concentration
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Mode culturel */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 font-medium">
              <Globe className="w-5 h-5 text-indigo-600" />
              Contexte culturel
            </label>
            <div className="grid grid-cols-1 gap-2">
              {[
                { value: 'universal', label: '🌍 Universel', desc: 'Interface neutre' },
                { value: 'islamic', label: '☪️ Islamique', desc: 'Références islamiques intégrées' },
                { value: 'arabic', label: '🏛️ Arabe', desc: 'Culture arabe authentique' }
              ].map(option => (
                <Button
                  key={option.value}
                  variant={settings.culturalMode === option.value ? 'default' : 'outline'}
                  onClick={() => updateSettings({ culturalMode: option.value as any })}
                  className="justify-start h-auto p-3 flex items-center gap-3"
                >
                  <div className="text-left">
                    <span className="font-medium block">{option.label}</span>
                    <span className="text-xs opacity-70">{option.desc}</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Eye className="w-4 h-4" />
            <span>
              Ces paramètres respectent les valeurs islamiques et les besoins d'accessibilité universels
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AccessibilityToggle() {
  const { setIsOpen } = useAccessibility();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setIsOpen(true)}
      className="fixed bottom-4 left-4 z-40 bg-white dark:bg-gray-900 shadow-lg"
      title="Paramètres d'accessibilité"
    >
      <Settings className="w-5 h-5" />
    </Button>
  );
}