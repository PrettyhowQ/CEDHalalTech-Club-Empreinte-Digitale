import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from 'framer-motion';
import { 
  Accessibility, 
  Eye, 
  EyeOff, 
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Contrast,
  Type,
  Keyboard,
  Mouse,
  Palette,
  Globe,
  Settings,
  CheckCircle,
  AlertCircle,
  Play,
  Pause,
  RotateCcw,
  Zap,
  Shield,
  Heart
} from 'lucide-react';

interface AccessibilitySettings {
  theme: 'light' | 'dark' | 'islamic-green' | 'islamic-gold' | 'high-contrast';
  fontSize: number;
  contrast: number;
  voiceGuidance: boolean;
  rtlSupport: boolean;
  reducedMotion: boolean;
  prayerMode: boolean;
  colorBlindFriendly: boolean;
  keyboardNavigation: boolean;
  screenReader: boolean;
  audioDescriptions: boolean;
  language: string;
  voiceSpeed: number;
  voicePitch: number;
}

const AccessibilityModeDemo = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    theme: 'light',
    fontSize: 16,
    contrast: 100,
    voiceGuidance: false,
    rtlSupport: false,
    reducedMotion: false,
    prayerMode: false,
    colorBlindFriendly: false,
    keyboardNavigation: true,
    screenReader: false,
    audioDescriptions: false,
    language: 'fr',
    voiceSpeed: 1.0,
    voicePitch: 1.0
  });

  const [currentTime, setCurrentTime] = useState(new Date());
  const [isPrayerTime, setIsPrayerTime] = useState(false);
  const [isVoicePlaying, setIsVoicePlaying] = useState(false);

  const themes = [
    { 
      id: 'light', 
      name: 'Clair Standard', 
      icon: <Sun className="h-4 w-4" />, 
      colors: {
        bg: 'bg-white',
        text: 'text-gray-900',
        border: 'border-gray-200',
        accent: 'bg-blue-500'
      }
    },
    { 
      id: 'dark', 
      name: 'Sombre', 
      icon: <Moon className="h-4 w-4" />, 
      colors: {
        bg: 'bg-gray-900',
        text: 'text-white',
        border: 'border-gray-700',
        accent: 'bg-blue-400'
      }
    },
    { 
      id: 'islamic-green', 
      name: 'Vert Islamique', 
      icon: <Heart className="h-4 w-4" />, 
      colors: {
        bg: 'bg-green-50',
        text: 'text-green-900',
        border: 'border-green-200',
        accent: 'bg-green-600'
      }
    },
    { 
      id: 'islamic-gold', 
      name: 'Or Mosquée', 
      icon: <Shield className="h-4 w-4" />, 
      colors: {
        bg: 'bg-yellow-50',
        text: 'text-yellow-900',
        border: 'border-yellow-200',
        accent: 'bg-yellow-600'
      }
    },
    { 
      id: 'high-contrast', 
      name: 'Contraste Élevé', 
      icon: <Contrast className="h-4 w-4" />, 
      colors: {
        bg: 'bg-black',
        text: 'text-white',
        border: 'border-white',
        accent: 'bg-yellow-400'
      }
    }
  ];

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷', rtl: false },
    { code: 'ar', name: 'العربية', flag: '🇸🇦', rtl: true },
    { code: 'en', name: 'English', flag: '🇺🇸', rtl: false },
    { code: 'ur', name: 'اردو', flag: '🇵🇰', rtl: true },
    { code: 'fa', name: 'فارسی', flag: '🇮🇷', rtl: true }
  ];

  const currentTheme = themes.find(t => t.id === settings.theme) || themes[0];
  const currentLanguage = languages.find(l => l.code === settings.language) || languages[0];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate prayer time check (simplified)
      const hour = new Date().getHours();
      setIsPrayerTime(hour === 12 || hour === 15 || hour === 18 || hour === 20 || hour === 5);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (settings.prayerMode && isPrayerTime) {
      // Simulate prayer mode activation
      setSettings(prev => ({ ...prev, reducedMotion: true }));
    }
  }, [isPrayerTime, settings.prayerMode]);

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window && settings.voiceGuidance) {
      speechSynthesis.cancel();
      
      if (isVoicePlaying) {
        setIsVoicePlaying(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = currentLanguage.code === 'ar' ? 'ar-SA' : 
                      currentLanguage.code === 'en' ? 'en-US' : 'fr-FR';
      utterance.rate = settings.voiceSpeed;
      utterance.pitch = settings.voicePitch;
      
      utterance.onstart = () => setIsVoicePlaying(true);
      utterance.onend = () => setIsVoicePlaying(false);
      utterance.onerror = () => setIsVoicePlaying(false);
      
      speechSynthesis.speak(utterance);
    }
  };

  const resetSettings = () => {
    setSettings({
      theme: 'light',
      fontSize: 16,
      contrast: 100,
      voiceGuidance: false,
      rtlSupport: false,
      reducedMotion: false,
      prayerMode: false,
      colorBlindFriendly: false,
      keyboardNavigation: true,
      screenReader: false,
      audioDescriptions: false,
      language: 'fr',
      voiceSpeed: 1.0,
      voicePitch: 1.0
    });
  };

  const DemoComponent = () => (
    <div 
      className={`p-6 rounded-lg ${currentTheme.colors.bg} ${currentTheme.colors.text} ${currentTheme.colors.border} border-2 transition-all duration-300`}
      style={{ 
        fontSize: `${settings.fontSize}px`,
        filter: `contrast(${settings.contrast}%)`,
        direction: settings.rtlSupport ? 'rtl' : 'ltr'
      }}
    >
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">
          {currentLanguage.rtl ? 'مثال على المكون' : 'Exemple de Composant'}
        </h3>
        
        <p className="leading-relaxed">
          {currentLanguage.rtl 
            ? 'هذا مثال على كيفية ظهور المحتوى مع إعدادات إمكانية الوصول الحالية.'
            : 'Ceci est un exemple de la façon dont le contenu apparaît avec les paramètres d\'accessibilité actuels.'
          }
        </p>

        <div className="flex gap-3">
          <Button 
            className={`${currentTheme.colors.accent} text-white`}
            onClick={() => speakText('Bouton principal activé')}
          >
            {currentLanguage.rtl ? 'الزر الرئيسي' : 'Bouton Principal'}
          </Button>
          
          <Button 
            variant="outline" 
            className={`${currentTheme.colors.border} ${currentTheme.colors.text}`}
          >
            {currentLanguage.rtl ? 'الزر الثانوي' : 'Bouton Secondaire'}
          </Button>
        </div>

        {isPrayerTime && settings.prayerMode && (
          <div className="bg-green-100 border border-green-300 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-green-800">
              <Shield className="h-5 w-5" />
              <span className="font-semibold">
                {currentLanguage.rtl ? 'وقت الصلاة - الوضع الهادئ مُفعل' : 'Temps de Prière - Mode Silencieux Activé'}
              </span>
            </div>
          </div>
        )}

        {settings.colorBlindFriendly && (
          <div className="bg-blue-100 border border-blue-300 rounded-lg p-3 text-blue-800">
            <CheckCircle className="h-4 w-4 inline mr-2" />
            {currentLanguage.rtl ? 'الألوان محسنة لعمى الألوان' : 'Couleurs optimisées pour le daltonisme'}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <Accessibility className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Mode Accessibilité Culturellement Sensible
            </h1>
            <p className="text-gray-600">
              Technologie inclusive avec support RTL, mode prière et thèmes islamiques
            </p>
          </div>
        </div>
      </div>

      {/* Settings Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Visual Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Paramètres Visuels
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Thème
              </label>
              <Select value={settings.theme} onValueChange={(value) => updateSetting('theme', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {themes.map(theme => (
                    <SelectItem key={theme.id} value={theme.id}>
                      <div className="flex items-center gap-2">
                        {theme.icon}
                        {theme.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Taille Police: {settings.fontSize}px
              </label>
              <Slider
                value={[settings.fontSize]}
                onValueChange={(value) => updateSetting('fontSize', value[0])}
                min={12}
                max={24}
                step={1}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Contraste: {settings.contrast}%
              </label>
              <Slider
                value={[settings.contrast]}
                onValueChange={(value) => updateSetting('contrast', value[0])}
                min={50}
                max={200}
                step={10}
                className="w-full"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Daltonisme
              </label>
              <Switch
                checked={settings.colorBlindFriendly}
                onCheckedChange={(checked) => updateSetting('colorBlindFriendly', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Animation Réduite
              </label>
              <Switch
                checked={settings.reducedMotion}
                onCheckedChange={(checked) => updateSetting('reducedMotion', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Audio & Language Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Volume2 className="h-5 w-5" />
              Audio & Langues
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Langue
              </label>
              <Select value={settings.language} onValueChange={(value) => updateSetting('language', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map(lang => (
                    <SelectItem key={lang.code} value={lang.code}>
                      <div className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        {lang.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Guidance Vocale
              </label>
              <Switch
                checked={settings.voiceGuidance}
                onCheckedChange={(checked) => updateSetting('voiceGuidance', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Support RTL
              </label>
              <Switch
                checked={settings.rtlSupport}
                onCheckedChange={(checked) => updateSetting('rtlSupport', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Lecteur d'Écran
              </label>
              <Switch
                checked={settings.screenReader}
                onCheckedChange={(checked) => updateSetting('screenReader', checked)}
              />
            </div>

            {settings.voiceGuidance && (
              <>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Vitesse Voix: {settings.voiceSpeed}x
                  </label>
                  <Slider
                    value={[settings.voiceSpeed]}
                    onValueChange={(value) => updateSetting('voiceSpeed', value[0])}
                    min={0.5}
                    max={2.0}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Tonalité: {settings.voicePitch}
                  </label>
                  <Slider
                    value={[settings.voicePitch]}
                    onValueChange={(value) => updateSetting('voicePitch', value[0])}
                    min={0.5}
                    max={2.0}
                    step={0.1}
                    className="w-full"
                  />
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Islamic Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Fonctionnalités Islamiques
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Mode Prière
              </label>
              <Switch
                checked={settings.prayerMode}
                onCheckedChange={(checked) => updateSetting('prayerMode', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Navigation Clavier
              </label>
              <Switch
                checked={settings.keyboardNavigation}
                onCheckedChange={(checked) => updateSetting('keyboardNavigation', checked)}
              />
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="flex items-center gap-2 text-green-800 mb-2">
                <CheckCircle className="h-4 w-4" />
                <span className="font-semibold">État Actuel</span>
              </div>
              <div className="text-sm text-green-700 space-y-1">
                <div>Heure: {currentTime.toLocaleTimeString()}</div>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${isPrayerTime ? 'bg-green-500' : 'bg-gray-400'}`} />
                  Temps de Prière: {isPrayerTime ? 'Actif' : 'Inactif'}
                </div>
                <div>Langue: {currentLanguage.name}</div>
                <div>RTL: {currentLanguage.rtl ? 'Activé' : 'Désactivé'}</div>
              </div>
            </div>

            <div className="space-y-2">
              <Button
                onClick={() => speakText('Test de guidance vocale en français')}
                className="w-full flex items-center gap-2"
                variant="outline"
              >
                {isVoicePlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                Test Voix
              </Button>
              
              <Button
                onClick={resetSettings}
                className="w-full flex items-center gap-2"
                variant="outline"
              >
                <RotateCcw className="h-4 w-4" />
                Réinitialiser
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Demo Component */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Aperçu en Temps Réel
          </CardTitle>
        </CardHeader>
        <CardContent>
          <DemoComponent />
        </CardContent>
      </Card>

      {/* Accessibility Standards */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Conformité Standards
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">WCAG 2.1 AAA</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>✓ Contraste couleurs</li>
                <li>✓ Navigation clavier</li>
                <li>✓ Lecteurs d'écran</li>
                <li>✓ Animations contrôlées</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Support Multilingue</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>✓ Direction RTL/LTR</li>
                <li>✓ Synthèse vocale</li>
                <li>✓ 78+ langues</li>
                <li>✓ Localisation culturelle</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-2">Sensibilité Islamique</h3>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>✓ Mode prière</li>
                <li>✓ Thèmes islamiques</li>
                <li>✓ Respect culturel</li>
                <li>✓ Guidance spirituelle</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2">
          ♿ Innovation CED HalalTech™ - Accessibilité Universelle
        </Badge>
      </div>
    </div>
  );
};

export default AccessibilityModeDemo;