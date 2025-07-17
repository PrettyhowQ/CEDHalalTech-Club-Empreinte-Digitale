import React, { createContext, useContext, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Palette, Brush, Eye, Moon, Sun } from 'lucide-react';

interface IslamicColor {
  name: string;
  nameArabic: string;
  hex: string;
  rgb: string;
  description: string;
  culturalSignificance: string;
  usage: string[];
}

interface ColorPalette {
  name: string;
  nameArabic: string;
  description: string;
  colors: IslamicColor[];
  primary: string;
  secondary: string;
  accent: string;
}

const islamicColorPalettes: ColorPalette[] = [
  {
    name: "Vert Islamique Classique",
    nameArabic: "الأخضر الإسلامي التقليدي",
    description: "Palette spirituelle basée sur les couleurs traditionnelles de l'Islam",
    primary: "#059669", // emerald-600
    secondary: "#0d9488", // teal-600
    accent: "#eab308", // yellow-500
    colors: [
      {
        name: "Vert Mosque",
        nameArabic: "أخضر المسجد",
        hex: "#059669",
        rgb: "rgb(5, 150, 105)",
        description: "Vert spirituel principal des mosquées",
        culturalSignificance: "Couleur du Prophète ﷺ et de la nature divine",
        usage: ["backgrounds", "headers", "buttons", "accent"]
      },
      {
        name: "Vert Minaret",
        nameArabic: "أخضر المئذنة",
        hex: "#047857",
        rgb: "rgb(4, 120, 87)",
        description: "Vert foncé des minarets et dômes",
        culturalSignificance: "Stabilité et guidance spirituelle",
        usage: ["text", "borders", "icons"]
      },
      {
        name: "Or Calligraphie",
        nameArabic: "ذهب الخط",
        hex: "#eab308",
        rgb: "rgb(234, 179, 8)",
        description: "Or brillant des calligraphies coraniques",
        culturalSignificance: "Richesse spirituelle et sagesse divine",
        usage: ["highlights", "icons", "decorations"]
      },
      {
        name: "Turquoise Médine",
        nameArabic: "فيروزي المدينة",
        hex: "#0d9488",
        rgb: "rgb(13, 148, 136)",
        description: "Bleu-vert des carreaux de Médine",
        culturalSignificance: "Paix et tranquillité des lieux saints",
        usage: ["secondary", "cards", "borders"]
      }
    ]
  },
  {
    name: "Bleu Andalou",
    nameArabic: "الأزرق الأندلسي",
    description: "Inspiré par l'architecture mauresque d'Al-Andalus",
    primary: "#0ea5e9", // sky-500
    secondary: "#3b82f6", // blue-500
    accent: "#f59e0b", // amber-500
    colors: [
      {
        name: "Bleu Alhambra",
        nameArabic: "أزرق الحمراء",
        hex: "#0ea5e9",
        rgb: "rgb(14, 165, 233)",
        description: "Bleu des fontaines de l'Alhambra",
        culturalSignificance: "Sagesse et contemplation divine",
        usage: ["primary", "headers", "links"]
      },
      {
        name: "Indigo Cordoue",
        nameArabic: "نيلي قرطبة",
        hex: "#3730a3",
        rgb: "rgb(55, 48, 163)",
        description: "Indigo profond des mosquées de Cordoue",
        culturalSignificance: "Méditation et spiritualité profonde",
        usage: ["text", "backgrounds", "accents"]
      },
      {
        name: "Ambre Séville",
        nameArabic: "عنبر إشبيلية",
        hex: "#f59e0b",
        rgb: "rgb(245, 158, 11)",
        description: "Ambre chaud des palais sévillans",
        culturalSignificance: "Hospitalité et générosité islamique",
        usage: ["buttons", "highlights", "decorations"]
      }
    ]
  },
  {
    name: "Rose Persan",
    nameArabic: "الوردي الفارسي",
    description: "Palette délicate inspirée de l'art persan islamique",
    primary: "#ec4899", // pink-500
    secondary: "#a855f7", // purple-500
    accent: "#06b6d4", // cyan-500
    colors: [
      {
        name: "Rose Isfahan",
        nameArabic: "وردي أصفهان",
        hex: "#ec4899",
        rgb: "rgb(236, 72, 153)",
        description: "Rose délicat des tapis d'Isfahan",
        culturalSignificance: "Beauté et raffinement spirituel",
        usage: ["accents", "decorations", "highlights"]
      },
      {
        name: "Violet Shiraz",
        nameArabic: "بنفسجي شيراز",
        hex: "#a855f7",
        rgb: "rgb(168, 85, 247)",
        description: "Violet mystique des poètes de Shiraz",
        culturalSignificance: "Mystique soufie et élévation spirituelle",
        usage: ["secondary", "borders", "icons"]
      },
      {
        name: "Cyan Kashan",
        nameArabic: "سماوي كاشان",
        hex: "#06b6d4",
        rgb: "rgb(6, 182, 212)",
        description: "Cyan lumineux des céramiques de Kashan",
        culturalSignificance: "Pureté et clarté divine",
        usage: ["backgrounds", "cards", "accents"]
      }
    ]
  },
  {
    name: "Terre Marocaine",
    nameArabic: "الطين المغربي",
    description: "Couleurs chaudes du Maroc et du Maghreb",
    primary: "#dc2626", // red-600
    secondary: "#ea580c", // orange-600
    accent: "#059669", // emerald-600
    colors: [
      {
        name: "Rouge Marrakech",
        nameArabic: "أحمر مراكش",
        hex: "#dc2626",
        rgb: "rgb(220, 38, 38)",
        description: "Rouge terre de Marrakech la Rouge",
        culturalSignificance: "Force et vitalité du Maghreb",
        usage: ["primary", "buttons", "emphasis"]
      },
      {
        name: "Orange Fès",
        nameArabic: "برتقالي فاس",
        hex: "#ea580c",
        rgb: "rgb(234, 88, 12)",
        description: "Orange chaleureux des médinas de Fès",
        culturalSignificance: "Chaleur humaine et convivialité",
        usage: ["secondary", "highlights", "warnings"]
      },
      {
        name: "Terracotta Zagora",
        nameArabic: "طين زاكورة",
        hex: "#92400e",
        rgb: "rgb(146, 64, 14)",
        description: "Terre cuite du Sud marocain",
        culturalSignificance: "Simplicité et authenticité nomade",
        usage: ["text", "backgrounds", "borders"]
      }
    ]
  }
];

interface ColorPaletteContextType {
  currentPalette: ColorPalette;
  setPalette: (palette: ColorPalette) => void;
  applyPalette: (palette: ColorPalette) => void;
}

const ColorPaletteContext = createContext<ColorPaletteContextType>({
  currentPalette: islamicColorPalettes[0],
  setPalette: () => {},
  applyPalette: () => {}
});

export function ColorPaletteProvider({ children }: { children: React.ReactNode }) {
  const [currentPalette, setCurrentPalette] = useState(islamicColorPalettes[0]);

  useEffect(() => {
    // Load saved palette from localStorage
    const saved = localStorage.getItem('ced-color-palette');
    if (saved) {
      const savedPalette = islamicColorPalettes.find(p => p.name === saved);
      if (savedPalette) {
        setCurrentPalette(savedPalette);
        applyPalette(savedPalette);
      }
    }
  }, []);

  const setPalette = (palette: ColorPalette) => {
    setCurrentPalette(palette);
    applyPalette(palette);
    localStorage.setItem('ced-color-palette', palette.name);
  };

  const applyPalette = (palette: ColorPalette) => {
    const root = document.documentElement;
    
    // Apply CSS custom properties
    root.style.setProperty('--color-primary', palette.primary);
    root.style.setProperty('--color-secondary', palette.secondary);
    root.style.setProperty('--color-accent', palette.accent);
    
    // Apply individual colors
    palette.colors.forEach((color, index) => {
      root.style.setProperty(`--color-islamic-${index + 1}`, color.hex);
    });
    
    // Update CSS classes dynamically
    root.className = root.className.replace(/islamic-palette-\w+/g, '');
    root.classList.add(`islamic-palette-${palette.name.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <ColorPaletteContext.Provider value={{ currentPalette, setPalette, applyPalette }}>
      {children}
    </ColorPaletteContext.Provider>
  );
}

export function useColorPalette() {
  return useContext(ColorPaletteContext);
}

export function ColorPaletteSelector() {
  const { currentPalette, setPalette } = useColorPalette();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        title="Changer la palette de couleurs"
      >
        <Palette className="w-5 h-5" />
        <span className="hidden sm:inline">Palette Islamique</span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl z-50 min-w-80 max-w-md">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Brush className="w-5 h-5 text-emerald-600" />
              Palettes Art Islamique
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Couleurs inspirées de l'art et l'architecture islamiques
            </p>
          </div>

          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {islamicColorPalettes.map((palette) => (
              <div
                key={palette.name}
                className={cn(
                  "p-3 rounded-lg border-2 cursor-pointer transition-all",
                  currentPalette.name === palette.name
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950"
                    : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                )}
                onClick={() => {
                  setPalette(palette);
                  setIsOpen(false);
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {palette.name}
                  </h4>
                  {currentPalette.name === palette.name && (
                    <Eye className="w-4 h-4 text-emerald-600" />
                  )}
                </div>
                
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 font-arabic" dir="rtl">
                  {palette.nameArabic}
                </p>
                
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  {palette.description}
                </p>

                <div className="flex gap-2">
                  {palette.colors.slice(0, 4).map((color) => (
                    <div
                      key={color.name}
                      className="flex-1 h-8 rounded border border-gray-300 dark:border-gray-600"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750">
            <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
              <Palette className="w-4 h-4" />
              <span>Toutes les couleurs respectent les principes esthétiques islamiques</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function ColorShowcase() {
  const { currentPalette } = useColorPalette();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {currentPalette.name}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 font-arabic" dir="rtl">
          {currentPalette.nameArabic}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          {currentPalette.description}
        </p>
      </div>

      <div className="grid gap-4">
        {currentPalette.colors.map((color) => (
          <div
            key={color.name}
            className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-lg border border-gray-300 dark:border-gray-600 flex-shrink-0"
                style={{ backgroundColor: color.hex }}
              />
              
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {color.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-arabic" dir="rtl">
                  {color.nameArabic}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  {color.description}
                </p>
                
                <div className="mt-2 space-y-1">
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    <strong>Hex:</strong> {color.hex}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    <strong>RGB:</strong> {color.rgb}
                  </p>
                </div>
                
                <div className="mt-2">
                  <p className="text-xs text-blue-800 dark:text-blue-200 font-medium">
                    🏛️ Signification culturelle
                  </p>
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    {color.culturalSignificance}
                  </p>
                </div>
                
                <div className="mt-2">
                  <p className="text-xs text-emerald-800 dark:text-emerald-200 font-medium">
                    🎨 Utilisations recommandées
                  </p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {color.usage.map((use) => (
                      <span
                        key={use}
                        className="text-xs px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}