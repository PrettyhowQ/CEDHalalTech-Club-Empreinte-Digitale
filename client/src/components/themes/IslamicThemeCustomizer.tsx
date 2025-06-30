import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { 
  Palette, 
  Moon, 
  Sun, 
  Sunset, 
  Mountain, 
  Waves, 
  Flower2,
  Star,
  Heart,
  Sparkles,
  Download,
  Settings,
  RefreshCw,
  Save,
  Eye,
  Smartphone,
  Monitor
} from 'lucide-react';

interface IslamicTheme {
  id: string;
  name: string;
  nameArabic: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    card: string;
  };
  wallpaper: string;
  mood: string;
  timeOfDay: string;
  icon: string;
  calligraphy?: boolean;
  patterns?: boolean;
}

const islamicThemes: IslamicTheme[] = [
  {
    id: 'mecca-gold',
    name: 'Mecca Golden',
    nameArabic: 'مكة الذهبية',
    description: 'Thème doré inspiré de la Kaaba sacrée',
    colors: {
      primary: '#D4AF37',
      secondary: '#B8860B',
      accent: '#FFD700',
      background: 'linear-gradient(135deg, #2C1810 0%, #4A2C1A 100%)',
      text: '#F5E6A3',
      card: 'rgba(212, 175, 55, 0.1)'
    },
    wallpaper: 'url("/api/placeholder/400/800")',
    mood: 'spirituel',
    timeOfDay: 'fajr',
    icon: '🕋',
    calligraphy: true,
    patterns: true
  },
  {
    id: 'medina-green',
    name: 'Medina Emerald',
    nameArabic: 'المدينة الزمردية',
    description: 'Vert émeraude de la Mosquée du Prophète',
    colors: {
      primary: '#006A4E',
      secondary: '#228B22',
      accent: '#32CD32',
      background: 'linear-gradient(135deg, #0F2419 0%, #1A4D3A 100%)',
      text: '#98FB98',
      card: 'rgba(0, 106, 78, 0.1)'
    },
    wallpaper: 'url("/api/placeholder/400/800")',
    mood: 'paisible',
    timeOfDay: 'dhuhr',
    icon: '🕌',
    calligraphy: true,
    patterns: true
  },
  {
    id: 'sunset-maghrib',
    name: 'Sunset Maghrib',
    nameArabic: 'غروب المغرب',
    description: 'Couleurs chaudes du coucher de soleil',
    colors: {
      primary: '#FF6B35',
      secondary: '#FF8E53',
      accent: '#FFB347',
      background: 'linear-gradient(135deg, #2E1065 0%, #7C2D92 50%, #FF6B35 100%)',
      text: '#FFF5EE',
      card: 'rgba(255, 107, 53, 0.1)'
    },
    wallpaper: 'url("/api/placeholder/400/800")',
    mood: 'contemplatif',
    timeOfDay: 'maghrib',
    icon: '🌅',
    calligraphy: true,
    patterns: false
  },
  {
    id: 'night-isha',
    name: 'Night Isha',
    nameArabic: 'ليل العشاء',
    description: 'Bleu profond de la prière nocturne',
    colors: {
      primary: '#191970',
      secondary: '#4169E1',
      accent: '#87CEEB',
      background: 'linear-gradient(135deg, #0C0C2E 0%, #1a1a3e 100%)',
      text: '#E6E6FA',
      card: 'rgba(25, 25, 112, 0.1)'
    },
    wallpaper: 'url("/api/placeholder/400/800")',
    mood: 'méditatif',
    timeOfDay: 'isha',
    icon: '🌙',
    calligraphy: true,
    patterns: true
  },
  {
    id: 'ocean-blue',
    name: 'Ocean Serenity',
    nameArabic: 'هدوء المحيط',
    description: 'Bleu océan pour la sérénité',
    colors: {
      primary: '#006994',
      secondary: '#4A90E2',
      accent: '#7CB9E8',
      background: 'linear-gradient(135deg, #003366 0%, #006994 100%)',
      text: '#E0F7FF',
      card: 'rgba(0, 105, 148, 0.1)'
    },
    wallpaper: 'url("/api/placeholder/400/800")',
    mood: 'serein',
    timeOfDay: 'any',
    icon: '🌊',
    calligraphy: false,
    patterns: true
  },
  {
    id: 'spring-garden',
    name: 'Spring Garden',
    nameArabic: 'حديقة الربيع',
    description: 'Vert printemps et fleurs',
    colors: {
      primary: '#4CAF50',
      secondary: '#8BC34A',
      accent: '#CDDC39',
      background: 'linear-gradient(135deg, #1B5E20 0%, #388E3C 100%)',
      text: '#E8F5E8',
      card: 'rgba(76, 175, 80, 0.1)'
    },
    wallpaper: 'url("/api/placeholder/400/800")',
    mood: 'joyeux',
    timeOfDay: 'duha',
    icon: '🌸',
    calligraphy: false,
    patterns: true
  },
  {
    id: 'royal-purple',
    name: 'Royal Purple',
    nameArabic: 'البنفسج الملكي',
    description: 'Pourpre royal et or',
    colors: {
      primary: '#6A1B9A',
      secondary: '#8E24AA',
      accent: '#BA68C8',
      background: 'linear-gradient(135deg, #4A148C 0%, #6A1B9A 100%)',
      text: '#F3E5F5',
      card: 'rgba(106, 27, 154, 0.1)'
    },
    wallpaper: 'url("/api/placeholder/400/800")',
    mood: 'noble',
    timeOfDay: 'any',
    icon: '👑',
    calligraphy: true,
    patterns: true
  },
  {
    id: 'rose-quartz',
    name: 'Rose Quartz',
    nameArabic: 'كوارتز الورد',
    description: 'Rose doux et chaleureux',
    colors: {
      primary: '#E91E63',
      secondary: '#F06292',
      accent: '#F8BBD9',
      background: 'linear-gradient(135deg, #880E4F 0%, #AD1457 100%)',
      text: '#FCE4EC',
      card: 'rgba(233, 30, 99, 0.1)'
    },
    wallpaper: 'url("/api/placeholder/400/800")',
    mood: 'tendre',
    timeOfDay: 'asr',
    icon: '🌹',
    calligraphy: true,
    patterns: false
  }
];

export function IslamicThemeCustomizer() {
  const [selectedTheme, setSelectedTheme] = useState<IslamicTheme>(islamicThemes[0]);
  const [previewMode, setPreviewMode] = useState(false);
  const [customizations, setCustomizations] = useState({
    opacity: [80],
    fontSize: [16],
    borderRadius: [8],
    animations: true,
    patterns: true,
    calligraphy: true,
    rtlSupport: true
  });

  const applyTheme = (theme: IslamicTheme) => {
    if (previewMode) {
      const root = document.documentElement;
      root.style.setProperty('--theme-primary', theme.colors.primary);
      root.style.setProperty('--theme-secondary', theme.colors.secondary);
      root.style.setProperty('--theme-accent', theme.colors.accent);
      root.style.setProperty('--theme-background', theme.colors.background);
      root.style.setProperty('--theme-text', theme.colors.text);
      root.style.setProperty('--theme-card', theme.colors.card);
    }
  };

  const saveThemePreference = () => {
    localStorage.setItem('ced-theme', JSON.stringify({
      theme: selectedTheme,
      customizations
    }));
  };

  const loadThemePreference = () => {
    const saved = localStorage.getItem('ced-theme');
    if (saved) {
      const { theme, customizations: savedCustomizations } = JSON.parse(saved);
      setSelectedTheme(theme);
      setCustomizations(savedCustomizations);
    }
  };

  useEffect(() => {
    loadThemePreference();
  }, []);

  useEffect(() => {
    if (previewMode) {
      applyTheme(selectedTheme);
    }
  }, [selectedTheme, previewMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
            Thèmes Islamiques CED
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Personnalisez votre expérience selon vos humeurs et moments spirituels
          </p>
          
          {/* Contrôles principaux */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Switch 
                checked={previewMode} 
                onCheckedChange={setPreviewMode}
                id="preview-mode"
              />
              <label htmlFor="preview-mode" className="text-sm font-medium">
                Mode Aperçu
              </label>
            </div>
            <Button onClick={saveThemePreference} className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              Sauvegarder
            </Button>
          </div>
        </div>

        <Tabs defaultValue="themes" className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-12">
            <TabsTrigger value="themes" className="text-base">Thèmes Islamiques</TabsTrigger>
            <TabsTrigger value="customization" className="text-base">Personnalisation</TabsTrigger>
            <TabsTrigger value="preview" className="text-base">Aperçu & Export</TabsTrigger>
          </TabsList>

          <TabsContent value="themes" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {islamicThemes.map((theme) => (
                <Card 
                  key={theme.id} 
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    selectedTheme.id === theme.id ? 'ring-4 ring-blue-500 shadow-2xl' : ''
                  }`}
                  onClick={() => setSelectedTheme(theme)}
                  style={{
                    background: theme.colors.background,
                    borderColor: theme.colors.primary
                  }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="text-4xl">{theme.icon}</div>
                      {selectedTheme.id === theme.id && (
                        <Badge className="bg-blue-500 text-white">
                          <Star className="h-3 w-3 mr-1" />
                          Sélectionné
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg" style={{ color: theme.colors.text }}>
                      {theme.name}
                    </CardTitle>
                    <CardDescription 
                      className="font-arabic text-right"
                      style={{ color: theme.colors.accent }}
                    >
                      {theme.nameArabic}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p 
                      className="text-sm mb-4 leading-relaxed"
                      style={{ color: theme.colors.text }}
                    >
                      {theme.description}
                    </p>
                    
                    {/* Palette de couleurs */}
                    <div className="flex gap-2 mb-4">
                      <div 
                        className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: theme.colors.primary }}
                        title="Couleur primaire"
                      />
                      <div 
                        className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: theme.colors.secondary }}
                        title="Couleur secondaire"
                      />
                      <div 
                        className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: theme.colors.accent }}
                        title="Couleur accent"
                      />
                    </div>
                    
                    {/* Badges informatifs */}
                    <div className="flex flex-wrap gap-2">
                      <Badge 
                        variant="outline" 
                        className="text-xs"
                        style={{ borderColor: theme.colors.accent, color: theme.colors.accent }}
                      >
                        {theme.mood}
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className="text-xs"
                        style={{ borderColor: theme.colors.accent, color: theme.colors.accent }}
                      >
                        {theme.timeOfDay}
                      </Badge>
                      {theme.calligraphy && (
                        <Badge 
                          variant="outline" 
                          className="text-xs"
                          style={{ borderColor: theme.colors.accent, color: theme.colors.accent }}
                        >
                          Calligraphie
                        </Badge>
                      )}
                      {theme.patterns && (
                        <Badge 
                          variant="outline" 
                          className="text-xs"
                          style={{ borderColor: theme.colors.accent, color: theme.colors.accent }}
                        >
                          Motifs
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="customization" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Paramètres visuels */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Paramètres Visuels
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Opacité des cartes: {customizations.opacity[0]}%
                    </label>
                    <Slider
                      value={customizations.opacity}
                      onValueChange={(value) => setCustomizations(prev => ({
                        ...prev,
                        opacity: value
                      }))}
                      max={100}
                      min={10}
                      step={5}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Taille de police: {customizations.fontSize[0]}px
                    </label>
                    <Slider
                      value={customizations.fontSize}
                      onValueChange={(value) => setCustomizations(prev => ({
                        ...prev,
                        fontSize: value
                      }))}
                      max={24}
                      min={12}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Rayon des bordures: {customizations.borderRadius[0]}px
                    </label>
                    <Slider
                      value={customizations.borderRadius}
                      onValueChange={(value) => setCustomizations(prev => ({
                        ...prev,
                        borderRadius: value
                      }))}
                      max={20}
                      min={0}
                      step={2}
                      className="w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Options islamiques */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Options Islamiques
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Animations fluides</label>
                    <Switch
                      checked={customizations.animations}
                      onCheckedChange={(checked) => setCustomizations(prev => ({
                        ...prev,
                        animations: checked
                      }))}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Motifs géométriques islamiques</label>
                    <Switch
                      checked={customizations.patterns}
                      onCheckedChange={(checked) => setCustomizations(prev => ({
                        ...prev,
                        patterns: checked
                      }))}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Calligraphie arabe</label>
                    <Switch
                      checked={customizations.calligraphy}
                      onCheckedChange={(checked) => setCustomizations(prev => ({
                        ...prev,
                        calligraphy: checked
                      }))}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Support RTL (Arabe/Hébreu)</label>
                    <Switch
                      checked={customizations.rtlSupport}
                      onCheckedChange={(checked) => setCustomizations(prev => ({
                        ...prev,
                        rtlSupport: checked
                      }))}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="preview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Aperçu du Thème Sélectionné
                </CardTitle>
                <CardDescription>
                  Prévisualisation en temps réel de votre configuration
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Aperçu mobile et desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Aperçu mobile */}
                  <div className="space-y-4">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      Aperçu Mobile
                    </h3>
                    <div 
                      className="mx-auto w-64 h-96 rounded-3xl border-8 border-gray-300 overflow-hidden shadow-2xl"
                      style={{ background: selectedTheme.colors.background }}
                    >
                      <div className="p-4 h-full">
                        <div 
                          className="rounded-xl p-4 mb-4"
                          style={{ backgroundColor: selectedTheme.colors.card }}
                        >
                          <h4 
                            className="font-bold mb-2"
                            style={{ color: selectedTheme.colors.text }}
                          >
                            {selectedTheme.icon} {selectedTheme.name}
                          </h4>
                          <p 
                            className="text-sm"
                            style={{ color: selectedTheme.colors.accent }}
                          >
                            {selectedTheme.nameArabic}
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <div 
                            className="h-4 rounded"
                            style={{ backgroundColor: selectedTheme.colors.primary, opacity: 0.7 }}
                          />
                          <div 
                            className="h-4 rounded w-3/4"
                            style={{ backgroundColor: selectedTheme.colors.secondary, opacity: 0.7 }}
                          />
                          <div 
                            className="h-4 rounded w-1/2"
                            style={{ backgroundColor: selectedTheme.colors.accent, opacity: 0.7 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Aperçu desktop */}
                  <div className="space-y-4">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Monitor className="h-4 w-4" />
                      Aperçu Desktop
                    </h3>
                    <div 
                      className="w-full h-96 rounded-xl border-4 border-gray-300 overflow-hidden shadow-xl"
                      style={{ background: selectedTheme.colors.background }}
                    >
                      <div className="p-6 h-full">
                        <div 
                          className="rounded-xl p-6 mb-6"
                          style={{ backgroundColor: selectedTheme.colors.card }}
                        >
                          <h4 
                            className="text-2xl font-bold mb-4 flex items-center gap-3"
                            style={{ color: selectedTheme.colors.text }}
                          >
                            {selectedTheme.icon} Club Empreinte Digitale
                          </h4>
                          <p 
                            className="font-arabic text-right text-lg"
                            style={{ color: selectedTheme.colors.accent }}
                          >
                            نادي البصمة الرقمية
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4">
                          <div 
                            className="h-16 rounded-lg"
                            style={{ backgroundColor: selectedTheme.colors.primary, opacity: 0.8 }}
                          />
                          <div 
                            className="h-16 rounded-lg"
                            style={{ backgroundColor: selectedTheme.colors.secondary, opacity: 0.8 }}
                          />
                          <div 
                            className="h-16 rounded-lg"
                            style={{ backgroundColor: selectedTheme.colors.accent, opacity: 0.8 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 mt-8 justify-center">
                  <Button 
                    onClick={() => setPreviewMode(!previewMode)}
                    variant={previewMode ? "default" : "outline"}
                    className="flex items-center gap-2"
                  >
                    <Eye className="h-4 w-4" />
                    {previewMode ? 'Arrêter l\'aperçu' : 'Activer l\'aperçu'}
                  </Button>
                  
                  <Button onClick={saveThemePreference} className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Appliquer le thème
                  </Button>
                  
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Exporter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>© 2024 Club Empreinte Digitale - Yakoubi Yamina</p>
            <p>Système de thèmes islamiques - Personnalisation spirituelle</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IslamicThemeCustomizer;