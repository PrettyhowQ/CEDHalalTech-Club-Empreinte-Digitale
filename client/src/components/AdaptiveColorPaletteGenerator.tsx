import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Palette, Download, Eye, Shuffle, Heart } from 'lucide-react';

interface ColorPalette {
  name: string;
  description: string;
  islamicSignificance: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    complement: string;
  };
  culturalOrigin: string;
  usage: string[];
}

const AdaptiveColorPaletteGenerator: React.FC = () => {
  const [currentPalette, setCurrentPalette] = useState<ColorPalette | null>(null);
  const [favoritesPalettes, setFavoritesPalettes] = useState<ColorPalette[]>([]);
  const [showExportModal, setShowExportModal] = useState(false);

  // Collection de palettes inspirées de l'art islamique
  const islamicPalettes: ColorPalette[] = [
    {
      name: "Vert Classique Islamique",
      description: "Palette traditionnelle basée sur le vert sacré de l'Islam",
      islamicSignificance: "Le vert est la couleur du Prophète ﷺ et symbolise la nature, la vie et la spiritualité dans l'Islam",
      colors: {
        primary: "#059669", // Vert émeraude
        secondary: "#10b981", // Vert clair
        accent: "#fbbf24", // Or islamique
        background: "#f0fdf4", // Vert très clair
        text: "#064e3b", // Vert foncé
        complement: "#ffffff" // Blanc pur
      },
      culturalOrigin: "Tradition prophétique et art califal",
      usage: ["Mosquées", "Calligraphie", "Céramiques", "Textiles sacrés"]
    },
    {
      name: "Bleu Andalou",
      description: "Inspiré des merveilles architecturales d'Al-Andalus",
      islamicSignificance: "Le bleu représente l'infini divin et la sérénité spirituelle",
      colors: {
        primary: "#0ea5e9", // Bleu ciel
        secondary: "#38bdf8", // Bleu clair
        accent: "#f59e0b", // Ambre
        background: "#f0f9ff", // Bleu très clair
        text: "#0c4a6e", // Bleu marine
        complement: "#fef3c7" // Crème dorée
      },
      culturalOrigin: "Architecture mauresque d'Espagne",
      usage: ["Azulejos", "Fontaines", "Dômes", "Mihrab"]
    },
    {
      name: "Rose Persan",
      description: "Élégance raffinée des jardins persans",
      islamicSignificance: "Le rose évoque la beauté divine et la délicatesse de la création",
      colors: {
        primary: "#ec4899", // Rose vif
        secondary: "#f472b6", // Rose clair
        accent: "#a855f7", // Violet royal
        background: "#fdf2f8", // Rose très pâle
        text: "#831843", // Rose foncé
        complement: "#f3e8ff" // Lavande
      },
      culturalOrigin: "Art miniature persan et jardins d'Isfahan",
      usage: ["Miniatures", "Tapis", "Jardins", "Poésie visuelle"]
    },
    {
      name: "Terre Marocaine",
      description: "Chaleur du Sahara et terre berbère",
      islamicSignificance: "La terre rappelle l'humilité et le retour à Allah, créateur de toute matière",
      colors: {
        primary: "#dc2626", // Rouge terre
        secondary: "#ea580c", // Orange
        accent: "#eab308", // Jaune safran
        background: "#fef7ed", // Beige clair
        text: "#7c2d12", // Marron foncé
        complement: "#fff7ed" // Crème chaude
      },
      culturalOrigin: "Architecture berbère et art saharien",
      usage: ["Tadelakt", "Zellige", "Poterie", "Architecture en pisé"]
    },
    {
      name: "Turquoise Ottoman",
      description: "Splendeur des palais ottomans",
      islamicSignificance: "Le turquoise unit le bleu divin et le vert prophétique",
      colors: {
        primary: "#0891b2", // Turquoise
        secondary: "#06b6d4", // Cyan
        accent: "#f97316", // Orange corail
        background: "#ecfeff", // Turquoise très pâle
        text: "#164e63", // Bleu pétrole
        complement: "#fed7aa" // Pêche
      },
      culturalOrigin: "Empire ottoman et céramiques d'Iznik",
      usage: ["Faïences", "Calligraphie", "Textiles", "Architecture"]
    },
    {
      name: "Violet Mystique",
      description: "Spiritualité des soufis et contemplation divine",
      islamicSignificance: "Le violet symbolise la noblesse spirituelle et la quête mystique",
      colors: {
        primary: "#7c3aed", // Violet royal
        secondary: "#a855f7", // Violet clair
        accent: "#f59e0b", // Or mystique
        background: "#faf5ff", // Violet très pâle
        text: "#581c87", // Violet foncé
        complement: "#fef3c7" // Or pâle
      },
      culturalOrigin: "Tradition soufie et art contemplatif",
      usage: ["Manuscrits", "Méditation", "Textiles nobles", "Calligraphie mystique"]
    }
  ];

  // Génération aléatoire de palette
  const generateRandomPalette = () => {
    const randomPalette = islamicPalettes[Math.floor(Math.random() * islamicPalettes.length)];
    setCurrentPalette(randomPalette);
  };

  // Ajout aux favoris
  const toggleFavorite = (palette: ColorPalette) => {
    setFavoritesPalettes(prev => {
      const exists = prev.find(p => p.name === palette.name);
      if (exists) {
        return prev.filter(p => p.name !== palette.name);
      } else {
        return [...prev, palette];
      }
    });
  };

  // Export des couleurs
  const exportPalette = (format: 'css' | 'json' | 'scss') => {
    if (!currentPalette) return;

    let exportContent = '';
    
    switch (format) {
      case 'css':
        exportContent = `:root {\n${Object.entries(currentPalette.colors).map(([key, value]) => 
          `  --color-${key}: ${value};`
        ).join('\n')}\n}`;
        break;
      case 'json':
        exportContent = JSON.stringify(currentPalette.colors, null, 2);
        break;
      case 'scss':
        exportContent = Object.entries(currentPalette.colors).map(([key, value]) => 
          `$color-${key}: ${value};`
        ).join('\n');
        break;
    }

    const blob = new Blob([exportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentPalette.name.toLowerCase().replace(/\s+/g, '-')}.${format}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Initialisation avec une palette aléatoire
  useEffect(() => {
    generateRandomPalette();
  }, []);

  const ColorSwatch: React.FC<{ color: string; label: string; index: number }> = ({ color, label, index }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={() => navigator.clipboard.writeText(color)}
    >
      <div
        className="w-full h-20 rounded-lg shadow-lg transition-transform group-hover:scale-105"
        style={{ backgroundColor: color }}
      />
      <p className="text-center text-sm font-medium text-emerald-800 dark:text-emerald-200 mt-2">
        {label}
      </p>
      <p className="text-center text-xs text-emerald-600 dark:text-emerald-400 font-mono">
        {color}
      </p>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-yellow-50 dark:from-emerald-950 dark:via-blue-950 dark:to-yellow-950 p-8">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-emerald-800 dark:text-emerald-200 mb-4">
            🎨 Générateur de Palettes Adaptatif Inspiré de l'Art Islamique
          </h1>
          <p className="text-emerald-600 dark:text-emerald-400 max-w-2xl mx-auto">
            Palettes de couleurs authentiques basées sur l'héritage artistique islamique et validées culturellement
          </p>
        </motion.div>

        {/* Contrôles principaux */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={generateRandomPalette}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            <Shuffle className="w-5 h-5" />
            Générer Nouvelle Palette
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowExportModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            <Download className="w-5 h-5" />
            Exporter
          </motion.button>

          {currentPalette && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleFavorite(currentPalette)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all ${
                favoritesPalettes.find(p => p.name === currentPalette.name)
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700'
              }`}
            >
              <Heart className={`w-5 h-5 ${favoritesPalettes.find(p => p.name === currentPalette.name) ? 'fill-current' : ''}`} />
              {favoritesPalettes.find(p => p.name === currentPalette.name) ? 'Favoris ❤️' : 'Ajouter aux Favoris'}
            </motion.button>
          )}
        </div>

        {/* Palette actuelle */}
        {currentPalette && (
          <motion.div
            key={currentPalette.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 mb-8"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Informations sur la palette */}
              <div>
                <h2 className="text-2xl font-bold text-emerald-800 dark:text-emerald-200 mb-4">
                  {currentPalette.name}
                </h2>
                <p className="text-emerald-600 dark:text-emerald-400 mb-6">
                  {currentPalette.description}
                </p>

                <div className="space-y-4">
                  <div className="bg-emerald-50 dark:bg-emerald-950 p-4 rounded-lg">
                    <h3 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">
                      🕌 Signification Islamique
                    </h3>
                    <p className="text-sm text-emerald-700 dark:text-emerald-300">
                      {currentPalette.islamicSignificance}
                    </p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      🏛️ Origine Culturelle
                    </h3>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      {currentPalette.culturalOrigin}
                    </p>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      🎨 Usages Traditionnels
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {currentPalette.usage.map((use, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 text-xs rounded-full"
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Nuancier */}
              <div>
                <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-4">
                  Nuancier (Cliquez pour copier)
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(currentPalette.colors).map(([key, color], index) => (
                    <ColorSwatch
                      key={key}
                      color={color}
                      label={key.charAt(0).toUpperCase() + key.slice(1)}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Aperçu d'application */}
        {currentPalette && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 mb-8"
          >
            <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-6">
              👁️ Aperçu d'Application
            </h3>
            
            <div 
              className="rounded-lg p-6 shadow-inner"
              style={{ backgroundColor: currentPalette.colors.background }}
            >
              <div className="space-y-4">
                <div 
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: currentPalette.colors.primary }}
                >
                  <h4 
                    className="font-semibold text-lg"
                    style={{ color: currentPalette.colors.complement }}
                  >
                    🕌 CED HalalTech™
                  </h4>
                  <p 
                    className="text-sm opacity-90"
                    style={{ color: currentPalette.colors.complement }}
                  >
                    Écosystème technologique islamique
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div 
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: currentPalette.colors.secondary }}
                  >
                    <h5 
                      className="font-medium"
                      style={{ color: currentPalette.colors.text }}
                    >
                      💰 CED Bank
                    </h5>
                  </div>
                  <div 
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: currentPalette.colors.accent }}
                  >
                    <h5 
                      className="font-medium"
                      style={{ color: currentPalette.colors.text }}
                    >
                      🛡️ Al-Aman Takaful
                    </h5>
                  </div>
                </div>

                <p 
                  className="text-sm"
                  style={{ color: currentPalette.colors.text }}
                >
                  Cette palette appliquée à l'interface CED conserve l'authenticité culturelle islamique tout en assurant une excellente lisibilité et accessibilité.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Palettes favorites */}
        {favoritesPalettes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8"
          >
            <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-6">
              ❤️ Palettes Favorites ({favoritesPalettes.length})
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoritesPalettes.map((palette, index) => (
                <motion.div
                  key={palette.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="cursor-pointer group"
                  onClick={() => setCurrentPalette(palette)}
                >
                  <div className="border border-emerald-200 dark:border-emerald-700 rounded-lg p-4 hover:shadow-lg transition-shadow group-hover:border-emerald-400 dark:group-hover:border-emerald-500">
                    <h4 className="font-medium text-emerald-800 dark:text-emerald-200 mb-2">
                      {palette.name}
                    </h4>
                    <div className="grid grid-cols-6 gap-1 mb-3">
                      {Object.values(palette.colors).map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          className="h-6 rounded"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">
                      {palette.culturalOrigin}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Modal d'export */}
        {showExportModal && currentPalette && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowExportModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-4">
                Exporter "{currentPalette.name}"
              </h3>
              
              <div className="space-y-3">
                <button
                  onClick={() => { exportPalette('css'); setShowExportModal(false); }}
                  className="w-full p-3 text-left bg-emerald-50 dark:bg-emerald-950 hover:bg-emerald-100 dark:hover:bg-emerald-900 rounded-lg transition-colors"
                >
                  <div className="font-medium text-emerald-800 dark:text-emerald-200">CSS Variables</div>
                  <div className="text-sm text-emerald-600 dark:text-emerald-400">Format :root pour CSS</div>
                </button>
                
                <button
                  onClick={() => { exportPalette('scss'); setShowExportModal(false); }}
                  className="w-full p-3 text-left bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg transition-colors"
                >
                  <div className="font-medium text-blue-800 dark:text-blue-200">SCSS Variables</div>
                  <div className="text-sm text-blue-600 dark:text-blue-400">Format $variable pour Sass</div>
                </button>
                
                <button
                  onClick={() => { exportPalette('json'); setShowExportModal(false); }}
                  className="w-full p-3 text-left bg-yellow-50 dark:bg-yellow-950 hover:bg-yellow-100 dark:hover:bg-yellow-900 rounded-lg transition-colors"
                >
                  <div className="font-medium text-yellow-800 dark:text-yellow-200">JSON Object</div>
                  <div className="text-sm text-yellow-600 dark:text-yellow-400">Format objet JavaScript</div>
                </button>
              </div>
              
              <button
                onClick={() => setShowExportModal(false)}
                className="w-full mt-4 p-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
              >
                Annuler
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdaptiveColorPaletteGenerator;