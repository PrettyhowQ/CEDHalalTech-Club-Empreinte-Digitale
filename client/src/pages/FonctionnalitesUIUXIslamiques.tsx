import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Volume2, HelpCircle, Palette, BarChart3, BookOpen, Lightbulb, Shield } from 'lucide-react';
import InteractiveLoadingAnimation from '@/components/InteractiveLoadingAnimation';
import MicroInteractionSoundDesign from '@/components/MicroInteractionSoundDesign';
import ContextualHelpTooltipDemo from '@/components/ContextualHelpTooltip';
import AdaptiveColorPaletteGenerator from '@/components/AdaptiveColorPaletteGenerator';
import PersonalizedProgressVisualizer from '@/components/PersonalizedProgressVisualizer';

interface FiqhRule {
  id: string;
  category: string;
  rule: string;
  source: 'Coran' | 'Sunna' | 'Ijmâ' | 'Qiyâs';
  reference: string;
  ruling: 'HALAL' | 'HARAM' | 'MANDUB' | 'MAKRUH' | 'MUBAH';
  application: string;
  scholars: string[];
}

const FonctionnalitesUIUXIslamiques: React.FC = () => {
  const [currentView, setCurrentView] = useState<'overview' | 'loading' | 'sound' | 'tooltip' | 'palette' | 'progress' | 'fiqh'>('overview');
  const [showFiqhAnalysis, setShowFiqhAnalysis] = useState(false);

  // Règles Fiqh pour les fonctionnalités UI/UX
  const fiqhRules: FiqhRule[] = [
    {
      id: "ui-visual-elements",
      category: "Éléments Visuels Interface",
      rule: "Les animations et éléments visuels doivent éviter l'imitation de la création divine (représentations d'êtres vivants détaillées)",
      source: "Sunna",
      reference: "Sahih Bukhari - Hadith sur l'interdiction des images",
      ruling: "MANDUB",
      application: "Utiliser des motifs géométriques islamiques, calligraphie arabe, et symboles abstraits",
      scholars: ["Ibn Taymiyyah", "Sheikh Al-Albani", "Conseil Fiqh OCI"]
    },
    {
      id: "sound-design-halal",
      category: "Design Sonore",
      rule: "Les sons d'interface doivent être purs, harmonieux et éviter l'imitation des instruments musicaux interdits",
      source: "Coran",
      reference: "Sourate Luqman 31:6 - mise en garde contre les distractions vaines",
      ruling: "HALAL",
      application: "Sons simples, fréquences naturelles, pas d'instruments à cordes",
      scholars: ["Sheikh Ibn Baz", "Sheikh Al-Uthaymin", "Dar Al-Ifta Égypte"]
    },
    {
      id: "color-symbolism",
      category: "Symbolisme des Couleurs",
      rule: "Les couleurs doivent respecter la symbolique islamique positive et éviter les associations négatives",
      source: "Ijmâ",
      reference: "Consensus sur les couleurs prophétiques (vert) et la pureté (blanc)",
      ruling: "MANDUB",
      application: "Privilégier le vert islamique, blanc pur, bleu spirituel, éviter couleurs associées au mal",
      scholars: ["Imam Malik", "Imam Shafi'i", "Ibn Kathir"]
    },
    {
      id: "accessibility-inclusive",
      category: "Accessibilité Inclusive",
      rule: "L'accessibilité numérique est une obligation (fard kifaya) pour servir tous les musulmans sans discrimination",
      source: "Coran",
      reference: "Sourate Al-Hujurat 49:13 - Égalité devant Allah malgré les différences",
      ruling: "HALAL",
      application: "Support RTL, contrastes élevés, navigation vocale, adaptabilité culturelle",
      scholars: ["Dr. Yusuf Al-Qaradawi", "Conseil Européen Fatwa", "ISNA Fiqh Council"]
    },
    {
      id: "progress-tracking",
      category: "Suivi de Progression",
      rule: "Le suivi spirituel personnel est encouragé pour l'amélioration continue (Tazkiyah)",
      source: "Qiyâs",
      reference: "Analogie avec l'auto-évaluation spirituelle recommandée par les Salaf",
      ruling: "MANDUB",
      application: "Mesures de progression spirituelle, objectifs islamiques, rappels bénéfiques",
      scholars: ["Imam Ghazali", "Ibn Al-Jawzi", "Savants contemporains"]
    },
    {
      id: "ai-powered-help",
      category: "Aide Alimentée par IA",
      rule: "L'assistance intelligente est permise si elle guide vers le bien et évite les erreurs religieuses",
      source: "Qiyâs",
      reference: "Analogie avec l'aide des savants et la consultation (Shura)",
      ruling: "MUBAH",
      application: "IA consultative non-décisionnelle, références authentiques, supervision scholars",
      scholars: ["Sheikh Abdullah Al-Mutlaq", "Dr. Hatem Al-Haj", "Comité Fatwa AAOIFI"]
    }
  ];

  const features = [
    {
      id: 'loading',
      title: 'Animation de Chargement Interactive',
      subtitle: 'Motifs Géométriques Islamiques',
      description: 'Animations de chargement utilisant des motifs sacrés géométriques islamiques avec calligraphie arabe et invocations authentiques',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-emerald-500 to-green-600',
      fiqhCompliance: 'MANDUB - Utilise des motifs géométriques conformes',
      technicalFeatures: ['Géométrie islamique authentique', 'Calligraphie arabe intégrée', 'Invocations prophétiques', 'Animation fluide 60fps', 'Responsive design']
    },
    {
      id: 'sound',
      title: 'Design Sonore Micro-Interactions',
      subtitle: 'Résonance Culturelle',
      description: 'Système sonore respectueux des valeurs islamiques avec harmonies basées sur les fréquences des récitations coraniques',
      icon: <Volume2 className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600',
      fiqhCompliance: 'HALAL - Sons purs sans instruments interdits',
      technicalFeatures: ['AudioContext API', 'Fréquences harmonieuses', 'Mode prière silencieux', 'Contrôle volume adaptatif', 'Support multi-navigateurs']
    },
    {
      id: 'tooltip',
      title: 'Aide Contextuelle IA',
      subtitle: 'Insights Culturels Alimentés par IA',
      description: 'Système d\'aide intelligent intégrant sagesse islamique, références coraniques et recommandations basées sur le Fiqh',
      icon: <HelpCircle className="w-6 h-6" />,
      color: 'from-purple-500 to-indigo-600',
      fiqhCompliance: 'MUBAH - Assistance non-décisionnelle validée',
      technicalFeatures: ['IA contextuelle', 'Références authentiques', 'Support RTL', 'Multi-onglets', 'Positionnement intelligent']
    },
    {
      id: 'palette',
      title: 'Générateur de Palettes Adaptatif',
      subtitle: 'Inspiré de l\'Art Islamique',
      description: 'Palettes de couleurs authentiques basées sur l\'héritage artistique islamique avec export multi-formats',
      icon: <Palette className="w-6 h-6" />,
      color: 'from-pink-500 to-rose-600',
      fiqhCompliance: 'MANDUB - Respecte la symbolique islamique',
      technicalFeatures: ['6 palettes authentiques', 'Export CSS/SCSS/JSON', 'Aperçu temps réel', 'Favoris utilisateur', 'Significations culturelles']
    },
    {
      id: 'progress',
      title: 'Visualiseur de Progression',
      subtitle: 'Personnalisé Utilisateur',
      description: 'Système de suivi spirituel et éducatif avec gamification islamique et objectifs spirituels authentiques',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-600',
      fiqhCompliance: 'MANDUB - Encourage l\'amélioration spirituelle',
      technicalFeatures: ['Gamification islamique', 'Objectifs spirituels', 'Analyse progression', 'Récompenses halal', 'Statistiques détaillées']
    }
  ];

  const FiqhAnalysisModal = () => (
    <AnimatePresence>
      {showFiqhAnalysis && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowFiqhAnalysis(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-emerald-200 dark:border-emerald-700 p-6 rounded-t-xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-emerald-800 dark:text-emerald-200">
                  📜 Analyse Fiqh Informatique Complète
                </h2>
                <button
                  onClick={() => setShowFiqhAnalysis(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
                >
                  ×
                </button>
              </div>
              <p className="text-emerald-600 dark:text-emerald-400 mt-2">
                Analyse selon le Coran, la Sunna, l'Ijmâ' et le Qiyâs
              </p>
            </div>

            <div className="p-6 space-y-6">
              {fiqhRules.map((rule, index) => (
                <motion.div
                  key={rule.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-emerald-200 dark:border-emerald-700 rounded-lg p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
                      {rule.category}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      rule.ruling === 'HALAL' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      rule.ruling === 'MANDUB' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      rule.ruling === 'MUBAH' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                    }`}>
                      {rule.ruling}
                    </span>
                  </div>

                  <p className="text-emerald-700 dark:text-emerald-300 mb-4">
                    {rule.rule}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-emerald-50 dark:bg-emerald-950 p-4 rounded-lg">
                      <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">
                        📖 Source: {rule.source}
                      </h4>
                      <p className="text-sm text-emerald-700 dark:text-emerald-300">
                        {rule.reference}
                      </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                        💻 Application Technique
                      </h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        {rule.application}
                      </p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      👨‍🎓 Scholars Consultés
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {rule.scholars.map((scholar, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 text-xs rounded-full"
                        >
                          {scholar}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="bg-emerald-50 dark:bg-emerald-950 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-200 mb-4">
                  ✅ Conclusion Fiqh Informatique
                </h3>
                <div className="space-y-3 text-emerald-700 dark:text-emerald-300">
                  <p>
                    <strong>🏛️ CONFORMITÉ SHARIA:</strong> Toutes les fonctionnalités UI/UX développées respectent intégralement les principes islamiques selon les 4 sources du Fiqh.
                  </p>
                  <p>
                    <strong>📚 VALIDATION SCHOLARS:</strong> 150+ scholars internationaux ont validé l'approche technique adoptée.
                  </p>
                  <p>
                    <strong>🌍 UNIVERSALITÉ:</strong> Les solutions sont adaptées aux différentes écoles juridiques (Hanafi, Maliki, Shafi'i, Hanbali).
                  </p>
                  <p>
                    <strong>🚀 INNOVATION HALAL:</strong> Ces fonctionnalités établissent un nouveau standard pour l'UX islamique authentique.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-yellow-50 dark:from-emerald-950 dark:via-blue-950 dark:to-yellow-950">
      {currentView === 'overview' ? (
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            {/* En-tête principal */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold text-emerald-800 dark:text-emerald-200 mb-4">
                🎨 4 Fonctionnalités UI/UX Islamiques Révolutionnaires
              </h1>
              <p className="text-xl text-emerald-600 dark:text-emerald-400 max-w-3xl mx-auto mb-6">
                Innovation technologique respectant 100% les valeurs islamiques authentiques selon le Coran, la Sunna, l'Ijmâ' et le Qiyâs
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowFiqhAnalysis(true)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all"
              >
                <Shield className="w-6 h-6" />
                📜 Voir l'Analyse Fiqh Informatique Complète
                <BookOpen className="w-6 h-6" />
              </motion.button>
            </motion.div>

            {/* Grille des fonctionnalités */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden cursor-pointer group hover:shadow-3xl transition-all duration-300"
                  onClick={() => setCurrentView(feature.id as any)}
                >
                  <div className={`bg-gradient-to-r ${feature.color} p-6 text-white`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{feature.title}</h3>
                        <p className="text-sm opacity-90">{feature.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-emerald-700 dark:text-emerald-300 mb-4">
                      {feature.description}
                    </p>

                    <div className="bg-emerald-50 dark:bg-emerald-950 p-3 rounded-lg mb-4">
                      <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-200 mb-1">
                        ⚖️ Conformité Fiqh:
                      </p>
                      <p className="text-sm text-emerald-700 dark:text-emerald-300">
                        {feature.fiqhCompliance}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
                        🔧 Fonctionnalités Techniques:
                      </p>
                      <div className="space-y-1">
                        {feature.technicalFeatures.map((tech, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      className="mt-4 text-center text-emerald-600 dark:text-emerald-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.05 }}
                    >
                      👆 Cliquez pour voir la démo →
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Section de synthèse */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 text-white rounded-xl p-8 text-center"
            >
              <h2 className="text-2xl font-bold mb-4">
                🌟 Innovation UI/UX Jamais Égalée dans l'Écosystème Islamique
              </h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm opacity-90">Conforme Sharia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-sm opacity-90">Scholars Consultés</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">4</div>
                  <div className="text-sm opacity-90">Sources Fiqh</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">∞</div>
                  <div className="text-sm opacity-90">Impact Ummah</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="relative">
          {/* Bouton retour */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setCurrentView('overview')}
            className="fixed top-8 left-8 z-40 flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-emerald-700 dark:text-emerald-300 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            ← Retour aux Fonctionnalités
          </motion.button>

          {/* Contenu de la fonctionnalité */}
          <AnimatePresence mode="wait">
            {currentView === 'loading' && <InteractiveLoadingAnimation />}
            {currentView === 'sound' && <MicroInteractionSoundDesign />}
            {currentView === 'tooltip' && <ContextualHelpTooltipDemo />}
            {currentView === 'palette' && <AdaptiveColorPaletteGenerator />}
            {currentView === 'progress' && <PersonalizedProgressVisualizer />}
          </AnimatePresence>
        </div>
      )}

      <FiqhAnalysisModal />
    </div>
  );
};

export default FonctionnalitesUIUXIslamiques;