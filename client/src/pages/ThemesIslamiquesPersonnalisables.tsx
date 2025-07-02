import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Palette, 
  Moon, 
  Sun, 
  Star, 
  Heart, 
  Crown, 
  Mountain, 
  Waves,
  CheckCircle,
  Download,
  Smartphone,
  Monitor
} from 'lucide-react';

interface IslamicTheme {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  spiritual: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    card: string;
    text: string;
  };
  icon: any;
  preview: string[];
  benefits: string[];
  popularity: number;
}

export default function ThemesIslamiquesPersonnalisables() {
  const [selectedTheme, setSelectedTheme] = useState<string>('kaaba');
  const [devicePreview, setDevicePreview] = useState<'desktop' | 'mobile'>('desktop');

  const islamicThemes: IslamicTheme[] = [
    {
      id: 'kaaba',
      name: 'Kaaba Sacrée',
      nameAr: 'الكعبة المقدسة',
      description: 'Thème inspiré de la Maison Sacrée de La Mecque',
      spiritual: 'Renforce la connexion spirituelle avec le centre de l\'Islam',
      colors: {
        primary: '#1a365d',
        secondary: '#d4af37',
        accent: '#2d3748',
        background: '#f7fafc',
        card: '#ffffff',
        text: '#1a202c'
      },
      icon: Crown,
      preview: ['Noir profond', 'Or sacré', 'Blanc pur'],
      benefits: ['Concentration spirituelle', 'Respect et humilité', 'Élégance islamique'],
      popularity: 95
    },
    {
      id: 'masjid-nabawi',
      name: 'Masjid Nabawi',
      nameAr: 'المسجد النبوي',
      description: 'Couleurs de la Mosquée du Prophète (SAW)',
      spiritual: 'Évoque la sérénité et la paix de Médine',
      colors: {
        primary: '#2d5a27',
        secondary: '#68d391',
        accent: '#38a169',
        background: '#f0fff4',
        card: '#ffffff',
        text: '#1a202c'
      },
      icon: Heart,
      preview: ['Vert Médine', 'Vert clair', 'Blanc nacré'],
      benefits: ['Paix intérieure', 'Sérénité prophétique', 'Harmonie spirituelle'],
      popularity: 92
    },
    {
      id: 'laylat-qadr',
      name: 'Laylat Al-Qadr',
      nameAr: 'ليلة القدر',
      description: 'Nuit du Destin, plus précieuse que mille mois',
      spiritual: 'Rappelle la grandeur de cette nuit bénie',
      colors: {
        primary: '#2d3748',
        secondary: '#805ad5',
        accent: '#553c9a',
        background: '#faf5ff',
        card: '#ffffff',
        text: '#1a202c'
      },
      icon: Moon,
      preview: ['Violet mystique', 'Indigo profond', 'Argent lunaire'],
      benefits: ['Méditation profonde', 'Connexion divine', 'Élévation spirituelle'],
      popularity: 88
    },
    {
      id: 'fajr-sunrise',
      name: 'Fajr Sunrise',
      nameAr: 'فجر الشروق',
      description: 'Aurore de la prière de l\'aube',
      spiritual: 'Symbolise l\'éveil spirituel et la renaissance',
      colors: {
        primary: '#ed8936',
        secondary: '#fbb6ce',
        accent: '#e53e3e',
        background: '#fffaf0',
        card: '#ffffff',
        text: '#1a202c'
      },
      icon: Sun,
      preview: ['Orange aurore', 'Rose tendre', 'Rouge solaire'],
      benefits: ['Énergie matinale', 'Éveil spirituel', 'Motivation divine'],
      popularity: 85
    },
    {
      id: 'sahara-desert',
      name: 'Sahara Éternel',
      nameAr: 'الصحراء الأبدية',
      description: 'Simplicité et pureté du désert arabique',
      spiritual: 'Inspire la contemplation et le détachement',
      colors: {
        primary: '#c05621',
        secondary: '#fed7aa',
        accent: '#ea580c',
        background: '#fefbf3',
        card: '#ffffff',
        text: '#1a202c'
      },
      icon: Mountain,
      preview: ['Sable doré', 'Ocre terre', 'Beige désert'],
      benefits: ['Simplicité', 'Purification', 'Retour aux sources'],
      popularity: 78
    },
    {
      id: 'ocean-tawhid',
      name: 'Océan Tawhid',
      nameAr: 'محيط التوحيد',
      description: 'Immensité de l\'Unicité divine',
      spiritual: 'Évoque l\'infini et l\'unicité d\'Allah',
      colors: {
        primary: '#1e40af',
        secondary: '#93c5fd',
        accent: '#2563eb',
        background: '#eff6ff',
        card: '#ffffff',
        text: '#1a202c'
      },
      icon: Waves,
      preview: ['Bleu océan', 'Azur céleste', 'Blanc écume'],
      benefits: ['Profondeur spirituelle', 'Sérénité', 'Connexion divine'],
      popularity: 82
    },
    {
      id: 'ramadan-nights',
      name: 'Nuits Ramadan',
      nameAr: 'ليالي رمضان',
      description: 'Atmosphère sacrée du mois béni',
      spiritual: 'Rappelle la spiritualité intense du Ramadan',
      colors: {
        primary: '#4c1d95',
        secondary: '#c4b5fd',
        accent: '#7c3aed',
        background: '#f5f3ff',
        card: '#ffffff',
        text: '#1a202c'
      },
      icon: Star,
      preview: ['Violet royal', 'Lavande', 'Blanc étoilé'],
      benefits: ['Recueillement', 'Purification spirituelle', 'Élévation de l\'âme'],
      popularity: 90
    },
    {
      id: 'jannah-gardens',
      name: 'Jardins Jannah',
      nameAr: 'جنات الجنة',
      description: 'Verdure éternelle du Paradis',
      spiritual: 'Évoque la beauté et la récompense divine',
      colors: {
        primary: '#059669',
        secondary: '#a7f3d0',
        accent: '#10b981',
        background: '#ecfdf5',
        card: '#ffffff',
        text: '#1a202c'
      },
      icon: Heart,
      preview: ['Vert paradis', 'Émeraude', 'Blanc perle'],
      benefits: ['Espoir', 'Beauté spirituelle', 'Aspiration divine'],
      popularity: 87
    }
  ];

  const currentTheme = islamicThemes.find(t => t.id === selectedTheme) || islamicThemes[0];

  const applyTheme = (theme: IslamicTheme) => {
    // Applique les couleurs CSS personnalisées
    const root = document.documentElement;
    root.style.setProperty('--primary', theme.colors.primary);
    root.style.setProperty('--secondary', theme.colors.secondary);
    root.style.setProperty('--accent', theme.colors.accent);
    root.style.setProperty('--background', theme.colors.background);
    root.style.setProperty('--card', theme.colors.card);
    root.style.setProperty('--foreground', theme.colors.text);
    
    // Sauvegarde dans localStorage
    localStorage.setItem('ced-islamic-theme', theme.id);
  };

  useEffect(() => {
    // Charge le thème sauvegardé
    const savedTheme = localStorage.getItem('ced-islamic-theme');
    if (savedTheme) {
      setSelectedTheme(savedTheme);
      const theme = islamicThemes.find(t => t.id === savedTheme);
      if (theme) applyTheme(theme);
    }
  }, []);

  const handleThemeSelect = (themeId: string) => {
    setSelectedTheme(themeId);
    const theme = islamicThemes.find(t => t.id === themeId);
    if (theme) applyTheme(theme);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-indigo-800 mb-4 flex items-center justify-center gap-3">
            <Palette className="h-12 w-12" />
            Thèmes Islamiques Personnalisables
          </h1>
          <p className="text-xl text-indigo-600 mb-4">
            🎨 8 Thèmes Spirituels Inspirés des Valeurs Islamiques 🎨
          </p>
          <div className="flex justify-center gap-4 text-sm mb-6">
            <Badge className="bg-indigo-100 text-indigo-800">
              🎭 8 Thèmes Authentiques
            </Badge>
            <Badge className="bg-purple-100 text-purple-800">
              📱 Compatible Mobile & Desktop
            </Badge>
            <Badge className="bg-emerald-100 text-emerald-800">
              ✨ Personnalisation Totale
            </Badge>
          </div>
        </div>

        {/* Aperçu du Thème Sélectionné */}
        <Card className="mb-8 border-2" style={{ borderColor: currentTheme.colors.primary }}>
          <CardHeader style={{ backgroundColor: currentTheme.colors.background }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: currentTheme.colors.primary }}
                >
                  <currentTheme.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl" style={{ color: currentTheme.colors.primary }}>
                    {currentTheme.name}
                  </CardTitle>
                  <p className="text-lg font-arabic" style={{ color: currentTheme.colors.accent }}>
                    {currentTheme.nameAr}
                  </p>
                  <p className="text-gray-600 mt-1">{currentTheme.description}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="font-semibold">{currentTheme.popularity}% Popularité</span>
                </div>
                <Button 
                  onClick={() => handleThemeSelect(currentTheme.id)}
                  style={{ backgroundColor: currentTheme.colors.primary }}
                  className="text-white"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Thème Activé
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent style={{ backgroundColor: currentTheme.colors.card }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2" style={{ color: currentTheme.colors.primary }}>
                  Signification Spirituelle:
                </h4>
                <p className="text-gray-700">{currentTheme.spiritual}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: currentTheme.colors.primary }}>
                  Palette de Couleurs:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentTheme.preview.map((color, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {color}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: currentTheme.colors.primary }}>
                  Bienfaits Spirituels:
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {currentTheme.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: currentTheme.colors.accent }}
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sélecteur de Dispositif */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white rounded-lg p-1 border">
            <Button
              variant={devicePreview === 'desktop' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setDevicePreview('desktop')}
              className="flex items-center gap-2"
            >
              <Monitor className="h-4 w-4" />
              Desktop
            </Button>
            <Button
              variant={devicePreview === 'mobile' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setDevicePreview('mobile')}
              className="flex items-center gap-2"
            >
              <Smartphone className="h-4 w-4" />
              Mobile
            </Button>
          </div>
        </div>

        {/* Grille des Thèmes */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {islamicThemes.map((theme) => {
            const IconComponent = theme.icon;
            const isSelected = selectedTheme === theme.id;
            
            return (
              <Card 
                key={theme.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  isSelected ? 'ring-2 ring-indigo-500 shadow-lg' : ''
                }`}
                onClick={() => handleThemeSelect(theme.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: theme.colors.primary }}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    {isSelected && (
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    )}
                  </div>
                  <CardTitle className="text-lg" style={{ color: theme.colors.primary }}>
                    {theme.name}
                  </CardTitle>
                  <p className="text-sm font-arabic text-gray-600">
                    {theme.nameAr}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">{theme.description}</p>
                  
                  {/* Aperçu des couleurs */}
                  <div className="flex gap-2 mb-4">
                    <div 
                      className="w-6 h-6 rounded-full border-2 border-white shadow"
                      style={{ backgroundColor: theme.colors.primary }}
                      title="Couleur primaire"
                    />
                    <div 
                      className="w-6 h-6 rounded-full border-2 border-white shadow"
                      style={{ backgroundColor: theme.colors.secondary }}
                      title="Couleur secondaire"
                    />
                    <div 
                      className="w-6 h-6 rounded-full border-2 border-white shadow"
                      style={{ backgroundColor: theme.colors.accent }}
                      title="Couleur accent"
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>{theme.popularity}%</span>
                    </div>
                    <Button
                      size="sm"
                      variant={isSelected ? "default" : "outline"}
                      style={isSelected ? { backgroundColor: theme.colors.primary } : {}}
                    >
                      {isSelected ? 'Activé' : 'Choisir'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Actions Avancées */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
            <CardContent className="p-6 text-center">
              <Download className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Exporter Thème</h3>
              <p className="text-blue-100 mb-4">
                Téléchargez votre thème personnalisé
              </p>
              <Button variant="secondary" size="sm">
                Télécharger CSS
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white">
            <CardContent className="p-6 text-center">
              <Palette className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Créer Thème</h3>
              <p className="text-purple-100 mb-4">
                Personnalisez vos propres couleurs
              </p>
              <Button variant="secondary" size="sm">
                Éditeur Avancé
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500 to-green-600 text-white">
            <CardContent className="p-6 text-center">
              <Heart className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Thèmes Communauté</h3>
              <p className="text-emerald-100 mb-4">
                Partagez avec la Ummah
              </p>
              <Button variant="secondary" size="sm">
                Parcourir +127
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer Protection */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Club Empreinte Digitale - Yakoubi Yamina. Tous droits réservés.
            <br />
            Thèmes islamiques authentiques - Protection intellectuelle activée.
          </p>
        </div>
      </div>
    </div>
  );
}