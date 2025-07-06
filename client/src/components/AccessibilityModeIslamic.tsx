import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { 
  Eye, 
  Volume2, 
  Type, 
  Palette, 
  Sun, 
  Moon, 
  Accessibility,
  Home,
  BookOpen,
  Settings
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  fontSize: number;
  voiceEnabled: boolean;
  rtlSupport: boolean;
  colorTheme: 'islamic-green' | 'masjid-gold' | 'night-mode' | 'high-contrast';
  reducedMotion: boolean;
  keyboardNavigation: boolean;
}

const IslamicTheme = {
  'islamic-green': {
    name: 'Vert Islamique',
    primary: 'bg-emerald-900 text-white',
    secondary: 'bg-emerald-100 text-emerald-900',
    accent: 'bg-yellow-500 text-yellow-900',
    background: 'bg-emerald-50'
  },
  'masjid-gold': {
    name: 'Or de Mosquée',
    primary: 'bg-amber-900 text-white',
    secondary: 'bg-amber-100 text-amber-900',
    accent: 'bg-emerald-600 text-white',
    background: 'bg-amber-50'
  },
  'night-mode': {
    name: 'Mode Nuit Paisible',
    primary: 'bg-slate-900 text-white',
    secondary: 'bg-slate-800 text-slate-100',
    accent: 'bg-green-500 text-white',
    background: 'bg-slate-950'
  },
  'high-contrast': {
    name: 'Contraste Élevé',
    primary: 'bg-black text-white border-4 border-white',
    secondary: 'bg-white text-black border-4 border-black',
    accent: 'bg-yellow-400 text-black border-2 border-black',
    background: 'bg-gray-100'
  }
};

export default function AccessibilityModeIslamic() {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    fontSize: 16,
    voiceEnabled: false,
    rtlSupport: false,
    colorTheme: 'islamic-green',
    reducedMotion: false,
    keyboardNavigation: true
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const currentTheme = IslamicTheme[settings.colorTheme];

  useEffect(() => {
    // Appliquer les paramètres d'accessibilité au document
    const root = document.documentElement;
    
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (settings.largeText) {
      root.style.fontSize = `${settings.fontSize}px`;
    }

    if (settings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0s');
    } else {
      root.style.removeProperty('--animation-duration');
    }

    // Support RTL pour l'arabe
    if (settings.rtlSupport) {
      root.setAttribute('dir', 'rtl');
    } else {
      root.setAttribute('dir', 'ltr');
    }

  }, [settings]);

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const speakText = (text: string) => {
    if (!settings.voiceEnabled) return;
    
    setIsPlaying(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = settings.rtlSupport ? 'ar-SA' : 'fr-FR';
    utterance.rate = 0.8;
    utterance.onend = () => setIsPlaying(false);
    speechSynthesis.speak(utterance);
  };

  const resetToDefaults = () => {
    setSettings({
      highContrast: false,
      largeText: false,
      fontSize: 16,
      voiceEnabled: false,
      rtlSupport: false,
      colorTheme: 'islamic-green',
      reducedMotion: false,
      keyboardNavigation: true
    });
  };

  return (
    <div className={`min-h-screen p-6 transition-all duration-300 ${currentTheme.background}`}>
      <div className="max-w-6xl mx-auto space-y-6">
        
        <Card className={`border-2 ${settings.highContrast ? 'border-black' : 'border-emerald-300'}`}>
          <CardHeader className={currentTheme.primary}>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Accessibility className="h-8 w-8" />
              {settings.rtlSupport ? 'وضع الوصول الإسلامي' : 'Mode Accessibilité Islamique'}
              <Home className="h-8 w-8" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            
            {/* Contrôles Visuels */}
            <Card className={`mb-6 ${settings.highContrast ? 'border-2 border-black' : ''}`}>
              <CardHeader className={currentTheme.secondary}>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-6 w-6" />
                  {settings.rtlSupport ? 'الإعدادات البصرية' : 'Paramètres Visuels'}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                
                {/* Thème Islamique */}
                <div>
                  <label className="block text-lg font-semibold mb-3">
                    {settings.rtlSupport ? 'الموضوع الإسلامي' : 'Thème Islamique'}
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {Object.entries(IslamicTheme).map(([key, theme]) => (
                      <Button
                        key={key}
                        onClick={() => updateSetting('colorTheme', key)}
                        className={`h-20 text-sm font-medium transition-all ${
                          settings.colorTheme === key 
                            ? `${theme.primary} ring-4 ring-yellow-400` 
                            : `${theme.secondary} hover:scale-105`
                        }`}
                      >
                        {theme.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Contraste et Texte */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                      <label className="font-medium">
                        {settings.rtlSupport ? 'تباين عالي' : 'Contraste Élevé'}
                      </label>
                      <Switch
                        checked={settings.highContrast}
                        onCheckedChange={(checked) => updateSetting('highContrast', checked)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                      <label className="font-medium">
                        {settings.rtlSupport ? 'نص كبير' : 'Texte Agranди'}
                      </label>
                      <Switch
                        checked={settings.largeText}
                        onCheckedChange={(checked) => updateSetting('largeText', checked)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium mb-3">
                      {settings.rtlSupport ? 'حجم الخط' : 'Taille de Police'}
                    </label>
                    <div className="space-y-3">
                      <Slider
                        value={[settings.fontSize]}
                        onValueChange={(value) => updateSetting('fontSize', value[0])}
                        min={12}
                        max={24}
                        step={2}
                        className="w-full"
                      />
                      <div className="text-center text-sm text-gray-600">
                        {settings.fontSize}px
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contrôles Audio et Langue */}
            <Card className={`mb-6 ${settings.highContrast ? 'border-2 border-black' : ''}`}>
              <CardHeader className={currentTheme.secondary}>
                <CardTitle className="flex items-center gap-2">
                  <Volume2 className="h-6 w-6" />
                  {settings.rtlSupport ? 'الصوت واللغة' : 'Audio et Langue'}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                      <label className="font-medium">
                        {settings.rtlSupport ? 'تفعيل الصوت' : 'Guidance Vocale'}
                      </label>
                      <Switch
                        checked={settings.voiceEnabled}
                        onCheckedChange={(checked) => updateSetting('voiceEnabled', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                      <label className="font-medium">
                        {settings.rtlSupport ? 'دعم العربية (RTL)' : 'Support Arabe (RTL)'}
                      </label>
                      <Switch
                        checked={settings.rtlSupport}
                        onCheckedChange={(checked) => updateSetting('rtlSupport', checked)}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={() => speakText(settings.rtlSupport ? 
                        'أهلاً وسهلاً بكم في النظام الإسلامي للوصول الرقمي' : 
                        'Bienvenue dans le système d\'accessibilité islamique CED'
                      )}
                      disabled={!settings.voiceEnabled || isPlaying}
                      className={`w-full ${currentTheme.accent}`}
                    >
                      <Volume2 className="h-5 w-5 mr-2" />
                      {settings.rtlSupport ? 'اختبار الصوت' : 'Test Audio'}
                    </Button>

                    <Badge className={`w-full justify-center py-2 ${currentTheme.primary}`}>
                      {settings.rtlSupport ? 
                        'يدعم اللغة العربية والفرنسية' : 
                        'Support Arabe et Français'
                      }
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation et Mouvements */}
            <Card className={`mb-6 ${settings.highContrast ? 'border-2 border-black' : ''}`}>
              <CardHeader className={currentTheme.secondary}>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-6 w-6" />
                  {settings.rtlSupport ? 'التنقل والحركة' : 'Navigation et Mouvement'}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                    <label className="font-medium">
                      {settings.rtlSupport ? 'تقليل الحركة' : 'Réduire les Animations'}
                    </label>
                    <Switch
                      checked={settings.reducedMotion}
                      onCheckedChange={(checked) => updateSetting('reducedMotion', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                    <label className="font-medium">
                      {settings.rtlSupport ? 'التنقل بلوحة المفاتيح' : 'Navigation Clavier'}
                    </label>
                    <Switch
                      checked={settings.keyboardNavigation}
                      onCheckedChange={(checked) => updateSetting('keyboardNavigation', checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={resetToDefaults}
                className={`px-8 py-3 ${currentTheme.secondary}`}
              >
                <Settings className="h-5 w-5 mr-2" />
                {settings.rtlSupport ? 'إعادة تعيين' : 'Réinitialiser'}
              </Button>

              <Button
                onClick={() => speakText(settings.rtlSupport ? 
                  'تم حفظ إعدادات الوصول الإسلامي بنجاح' : 
                  'Paramètres d\'accessibilité islamique sauvegardés'
                )}
                className={`px-8 py-3 ${currentTheme.primary}`}
              >
                <BookOpen className="h-5 w-5 mr-2" />
                {settings.rtlSupport ? 'حفظ الإعدادات' : 'Sauvegarder'}
              </Button>
            </div>

            {/* Citation Islamique */}
            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl border-2 border-indigo-300">
              <div className="text-center">
                <div className="text-lg font-semibold text-indigo-800 mb-2">
                  "وَمَا جَعَلَ عَلَيْكُمْ فِي الدِّينِ مِنْ حَرَجٍ"
                </div>
                <div className="text-sm text-indigo-600 italic">
                  "Il ne vous a imposé aucune gêne dans la religion" - Coran 22:78
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  L'Islam facilite l'accès à la connaissance pour tous
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}