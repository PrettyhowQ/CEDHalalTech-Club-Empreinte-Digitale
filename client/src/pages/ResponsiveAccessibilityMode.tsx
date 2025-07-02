import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Eye, 
  Volume2, 
  Accessibility, 
  Palette, 
  Type, 
  MousePointer, 
  Keyboard,
  Zap,
  Moon,
  Sun,
  Settings,
  Save,
  RotateCcw,
  Heart,
  Shield,
  Star
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  islamicTheme: boolean;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  colorScheme: 'light' | 'dark' | 'islamic-green' | 'islamic-gold';
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  voiceGuidance: boolean;
  prayerMode: boolean;
  arabicSupport: boolean;
  rtlSupport: boolean;
}

const ResponsiveAccessibilityMode: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    islamicTheme: true,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0,
    colorScheme: 'islamic-green',
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: true,
    focusIndicators: true,
    voiceGuidance: false,
    prayerMode: false,
    arabicSupport: true,
    rtlSupport: true
  });

  const [previewMode, setPreviewMode] = useState(false);
  const [savedProfiles, setSavedProfiles] = useState<string[]>(['Profil par défaut', 'Vision faible', 'Lecture Coran']);

  // Appliquer les paramètres d'accessibilité
  useEffect(() => {
    if (previewMode) {
      document.documentElement.style.fontSize = `${settings.fontSize}px`;
      document.documentElement.style.lineHeight = settings.lineHeight.toString();
      document.documentElement.style.letterSpacing = `${settings.letterSpacing}px`;
      
      if (settings.highContrast) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }

      if (settings.islamicTheme) {
        document.body.classList.add('islamic-theme');
      } else {
        document.body.classList.remove('islamic-theme');
      }

      if (settings.reducedMotion) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    }
  }, [settings, previewMode]);

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetToDefaults = () => {
    setSettings({
      highContrast: false,
      islamicTheme: true,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: 0,
      colorScheme: 'islamic-green',
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: true,
      focusIndicators: true,
      voiceGuidance: false,
      prayerMode: false,
      arabicSupport: true,
      rtlSupport: true
    });
  };

  const islamicColorSchemes = [
    { value: 'light', label: 'Clair', icon: Sun, colors: ['#ffffff', '#f8f9fa', '#000000'] },
    { value: 'dark', label: 'Sombre', icon: Moon, colors: ['#1a1a1a', '#2d2d2d', '#ffffff'] },
    { value: 'islamic-green', label: 'Vert Islamique', icon: Heart, colors: ['#0d4f3c', '#1a7b5e', '#ffffff'] },
    { value: 'islamic-gold', label: 'Or Islamique', icon: Star, colors: ['#b8860b', '#daa520', '#000000'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-emerald-100 rounded-xl">
              <Accessibility className="h-8 w-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Mode Accessibilité Islamique
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Interface accessible conforme aux principes islamiques - Contraste élevé, support RTL arabe, et fonctionnalités adaptées aux besoins spirituels
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
              <Shield className="h-4 w-4 mr-1" />
              100% Conforme Fiqh
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
              <Heart className="h-4 w-4 mr-1" />
              Accessible à Tous
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Panel de contrôles principaux */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contraste et Thème */}
          <Card className="border-emerald-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-emerald-600" />
                Contraste et Thème Islamique
              </CardTitle>
              <CardDescription>
                Personnalisez l'apparence pour une meilleure lisibilité selon les valeurs islamiques
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>Contraste élevé</span>
                </div>
                <Switch
                  checked={settings.highContrast}
                  onCheckedChange={(checked) => updateSetting('highContrast', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span>Thème islamique</span>
                </div>
                <Switch
                  checked={settings.islamicTheme}
                  onCheckedChange={(checked) => updateSetting('islamicTheme', checked)}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Schéma de couleurs</label>
                <div className="grid grid-cols-2 gap-3">
                  {islamicColorSchemes.map((scheme) => (
                    <Button
                      key={scheme.value}
                      variant={settings.colorScheme === scheme.value ? "default" : "outline"}
                      className="flex items-center gap-2 h-auto p-3"
                      onClick={() => updateSetting('colorScheme', scheme.value)}
                    >
                      <scheme.icon className="h-4 w-4" />
                      <div className="flex-1 text-left">
                        <div className="font-medium">{scheme.label}</div>
                        <div className="flex gap-1 mt-1">
                          {scheme.colors.map((color, i) => (
                            <div
                              key={i}
                              className="w-3 h-3 rounded-full border"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Typographie */}
          <Card className="border-emerald-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Type className="h-5 w-5 text-emerald-600" />
                Typographie et Lisibilité
              </CardTitle>
              <CardDescription>
                Ajustez la taille et l'espacement du texte pour une lecture optimale du Coran et des textes islamiques
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Taille de police: {settings.fontSize}px
                </label>
                <Slider
                  value={[settings.fontSize]}
                  onValueChange={([value]) => updateSetting('fontSize', value)}
                  min={12}
                  max={24}
                  step={1}
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Hauteur de ligne: {settings.lineHeight}
                </label>
                <Slider
                  value={[settings.lineHeight]}
                  onValueChange={([value]) => updateSetting('lineHeight', value)}
                  min={1.2}
                  max={2.0}
                  step={0.1}
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Espacement des lettres: {settings.letterSpacing}px
                </label>
                <Slider
                  value={[settings.letterSpacing]}
                  onValueChange={([value]) => updateSetting('letterSpacing', value)}
                  min={-1}
                  max={3}
                  step={0.5}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>

          {/* Fonctionnalités islamiques spéciales */}
          <Card className="border-emerald-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-emerald-600" />
                Fonctionnalités Islamiques
              </CardTitle>
              <CardDescription>
                Options spécialisées pour la pratique religieuse et la lecture en arabe
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>🕌</span>
                  <div>
                    <div className="font-medium">Mode Prière</div>
                    <div className="text-sm text-gray-500">Interface simplifiée pendant la prière</div>
                  </div>
                </div>
                <Switch
                  checked={settings.prayerMode}
                  onCheckedChange={(checked) => updateSetting('prayerMode', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>العربية</span>
                  <div>
                    <div className="font-medium">Support Arabe</div>
                    <div className="text-sm text-gray-500">Optimisation pour la langue arabe</div>
                  </div>
                </div>
                <Switch
                  checked={settings.arabicSupport}
                  onCheckedChange={(checked) => updateSetting('arabicSupport', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>←</span>
                  <div>
                    <div className="font-medium">Support RTL</div>
                    <div className="text-sm text-gray-500">Lecture de droite à gauche</div>
                  </div>
                </div>
                <Switch
                  checked={settings.rtlSupport}
                  onCheckedChange={(checked) => updateSetting('rtlSupport', checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Navigation et Interaction */}
          <Card className="border-emerald-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MousePointer className="h-5 w-5 text-emerald-600" />
                Navigation et Interaction
              </CardTitle>
              <CardDescription>
                Options pour faciliter la navigation et l'interaction avec l'interface
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  <span>Réduction des animations</span>
                </div>
                <Switch
                  checked={settings.reducedMotion}
                  onCheckedChange={(checked) => updateSetting('reducedMotion', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Keyboard className="h-4 w-4" />
                  <span>Navigation clavier</span>
                </div>
                <Switch
                  checked={settings.keyboardNavigation}
                  onCheckedChange={(checked) => updateSetting('keyboardNavigation', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>Indicateurs de focus</span>
                </div>
                <Switch
                  checked={settings.focusIndicators}
                  onCheckedChange={(checked) => updateSetting('focusIndicators', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4" />
                  <span>Guidance vocale</span>
                </div>
                <Switch
                  checked={settings.voiceGuidance}
                  onCheckedChange={(checked) => updateSetting('voiceGuidance', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Panel de prévisualisation et actions */}
        <div className="space-y-6">
          {/* Aperçu en temps réel */}
          <Card className="border-emerald-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-emerald-600" />
                Aperçu en Temps Réel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Mode aperçu</span>
                <Switch
                  checked={previewMode}
                  onCheckedChange={setPreviewMode}
                />
              </div>

              <div 
                className={`p-4 border rounded-lg transition-all ${
                  settings.highContrast 
                    ? 'bg-black text-white border-white' 
                    : settings.colorScheme === 'islamic-green'
                    ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                    : 'bg-white text-gray-900 border-gray-200'
                }`}
                style={{
                  fontSize: `${settings.fontSize}px`,
                  lineHeight: settings.lineHeight,
                  letterSpacing: `${settings.letterSpacing}px`,
                  direction: settings.rtlSupport ? 'rtl' : 'ltr'
                }}
              >
                <div className="font-bold mb-2">
                  {settings.rtlSupport ? 'بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ' : 'Bismillah Ar-Rahman Ar-Raheem'}
                </div>
                <div className="text-sm">
                  Exemple de texte avec les paramètres actuels d'accessibilité. 
                  Cette prévisualisation vous aide à ajuster l'apparence selon vos besoins.
                </div>
                {settings.rtlSupport && (
                  <div className="text-sm mt-2" dir="rtl">
                    نص تجريبي باللغة العربية لاختبار الدعم من اليمين إلى اليسار
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Profils sauvegardés */}
          <Card className="border-emerald-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-emerald-600" />
                Profils d'Accessibilité
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {savedProfiles.map((profile, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => {
                    // Charger profil
                  }}
                >
                  {profile}
                </Button>
              ))}
              
              <Separator />
              
              <Button variant="outline" className="w-full">
                <Save className="h-4 w-4 mr-2" />
                Sauvegarder ce profil
              </Button>
            </CardContent>
          </Card>

          {/* Actions rapides */}
          <Card className="border-emerald-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-emerald-600" />
                Actions Rapides
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                className="w-full bg-emerald-600 hover:bg-emerald-700"
                onClick={() => {
                  // Appliquer les paramètres
                  setPreviewMode(true);
                }}
              >
                <Eye className="h-4 w-4 mr-2" />
                Appliquer Maintenant
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={resetToDefaults}
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Réinitialiser
              </Button>
              
              <Button variant="outline" className="w-full">
                <Volume2 className="h-4 w-4 mr-2" />
                Test Audio
              </Button>
            </CardContent>
          </Card>

          {/* Statistiques et informations */}
          <Card className="border-emerald-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-sm">Conformité Islamique</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Support RTL</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">✓</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Mode Prière</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">✓</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Thème Islamique</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">✓</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer de protection */}
      <div className="mt-12 text-center text-sm text-gray-500 border-t pt-6">
        <div className="flex items-center justify-center gap-2">
          <Shield className="h-4 w-4" />
          <span>© 2025 Yakoubi Yamina - Mode Accessibilité Islamique CED - Tous droits réservés</span>
        </div>
        <div className="mt-2 flex items-center justify-center gap-4 text-xs">
          <span>🕌 100% Conforme Fiqh Informatique</span>
          <span>♿ Accessible à Tous</span>
          <span>🌍 Support Multilingue</span>
        </div>
      </div>

      {/* Styles CSS pour les thèmes */}
      <style>{`
        .high-contrast {
          filter: contrast(150%);
        }
        
        .islamic-theme {
          --primary: 134 239 172;
          --primary-foreground: 6 78 59;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        body.preview-mode {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ResponsiveAccessibilityMode;