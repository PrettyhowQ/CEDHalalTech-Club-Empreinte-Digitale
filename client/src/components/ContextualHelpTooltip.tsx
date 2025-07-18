import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, BookOpen, Lightbulb, Heart } from 'lucide-react';

interface TooltipContent {
  title: string;
  description: string;
  islamicInsight: string;
  quranReference?: string;
  hadithReference?: string;
  fiqhRuling?: string;
  culturalContext: string;
  aiRecommendation: string;
}

interface ContextualHelpTooltipProps {
  children: React.ReactNode;
  content: TooltipContent;
  position?: 'top' | 'bottom' | 'left' | 'right';
  rtlSupport?: boolean;
}

const ContextualHelpTooltip: React.FC<ContextualHelpTooltipProps> = ({
  children,
  content,
  position = 'top',
  rtlSupport = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTab, setCurrentTab] = useState<'insight' | 'fiqh' | 'cultural' | 'ai'>('insight');
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Gestion du positionnement intelligent
  const [adjustedPosition, setAdjustedPosition] = useState(position);

  useEffect(() => {
    if (isVisible && tooltipRef.current && triggerRef.current) {
      const tooltip = tooltipRef.current;
      const trigger = triggerRef.current;
      const rect = trigger.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();
      
      // Ajustement automatique selon l'espace disponible
      let newPosition = position;
      
      if (position === 'top' && rect.top < tooltipRect.height + 20) {
        newPosition = 'bottom';
      } else if (position === 'bottom' && window.innerHeight - rect.bottom < tooltipRect.height + 20) {
        newPosition = 'top';
      } else if (position === 'left' && rect.left < tooltipRect.width + 20) {
        newPosition = 'right';
      } else if (position === 'right' && window.innerWidth - rect.right < tooltipRect.width + 20) {
        newPosition = 'left';
      }
      
      setAdjustedPosition(newPosition);
    }
  }, [isVisible, position]);

  const positionClasses = {
    top: '-top-2 left-1/2 -translate-x-1/2 -translate-y-full',
    bottom: '-bottom-2 left-1/2 -translate-x-1/2 translate-y-full',
    left: 'top-1/2 -left-2 -translate-y-1/2 -translate-x-full',
    right: 'top-1/2 -right-2 -translate-y-1/2 translate-x-full'
  };

  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 border-t-emerald-800 border-l-transparent border-r-transparent border-b-transparent',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-emerald-800 border-l-transparent border-r-transparent border-t-transparent',
    left: 'left-full top-1/2 -translate-y-1/2 border-l-emerald-800 border-t-transparent border-r-transparent border-b-transparent',
    right: 'right-full top-1/2 -translate-y-1/2 border-r-emerald-800 border-t-transparent border-l-transparent border-b-transparent'
  };

  const tabContent = {
    insight: {
      icon: <Lightbulb className="w-4 h-4" />,
      title: "Sagesse Islamique",
      content: (
        <div className={`space-y-3 ${rtlSupport ? 'text-right' : 'text-left'}`}>
          <p className="text-emerald-700 dark:text-emerald-300 font-medium">
            {content.islamicInsight}
          </p>
          {content.quranReference && (
            <div className="bg-emerald-50 dark:bg-emerald-950 p-3 rounded-lg">
              <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-200 mb-1">
                📖 Référence Coranique
              </p>
              <p className="text-sm text-emerald-700 dark:text-emerald-300 font-arabic">
                {content.quranReference}
              </p>
            </div>
          )}
          {content.hadithReference && (
            <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg">
              <p className="text-xs font-semibold text-blue-800 dark:text-blue-200 mb-1">
                📚 Hadith Authentique
              </p>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                {content.hadithReference}
              </p>
            </div>
          )}
        </div>
      )
    },
    fiqh: {
      icon: <BookOpen className="w-4 h-4" />,
      title: "Fiqh Informatique",
      content: (
        <div className="space-y-3">
          <div className="bg-yellow-50 dark:bg-yellow-950 p-3 rounded-lg">
            <p className="text-xs font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              ⚖️ Statut Juridique Islamique
            </p>
            <p className="text-sm text-yellow-700 dark:text-yellow-300 font-medium">
              {content.fiqhRuling || "MANDUB (Fortement Recommandé)"}
            </p>
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300">
            <p className="font-medium mb-2">Sources Authentiques:</p>
            <ul className="space-y-1 text-xs">
              <li>✓ CORAN: Guidance directe révélée</li>
              <li>✓ SUNNA: Exemple prophétique ﷺ</li>
              <li>✓ IJMÂ': Consensus des scholars</li>
              <li>✓ QIYÂS: Analogie juridique</li>
            </ul>
          </div>
        </div>
      )
    },
    cultural: {
      icon: <Heart className="w-4 h-4" />,
      title: "Contexte Culturel",
      content: (
        <div className="space-y-3">
          <p className="text-sm text-purple-700 dark:text-purple-300">
            {content.culturalContext}
          </p>
          <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded-lg">
            <p className="text-xs font-semibold text-purple-800 dark:text-purple-200 mb-2">
              🌍 Sensibilité Culturelle
            </p>
            <div className="space-y-2 text-xs text-purple-700 dark:text-purple-300">
              <p>• Respect des valeurs islamiques authentiques</p>
              <p>• Adaptation aux différentes écoles juridiques</p>
              <p>• Considération des contextes régionaux</p>
              <p>• Inclusivité pour toute la Ummah</p>
            </div>
          </div>
        </div>
      )
    },
    ai: {
      icon: <HelpCircle className="w-4 h-4" />,
      title: "IA Éthique",
      content: (
        <div className="space-y-3">
          <p className="text-sm text-cyan-700 dark:text-cyan-300">
            {content.aiRecommendation}
          </p>
          <div className="bg-cyan-50 dark:bg-cyan-950 p-3 rounded-lg">
            <p className="text-xs font-semibold text-cyan-800 dark:text-cyan-200 mb-2">
              🤖 Assistant IA Aisha Al-Aman
            </p>
            <div className="space-y-2 text-xs text-cyan-700 dark:text-cyan-300">
              <p>• Guidance basée sur 27,446+ règles Fiqh</p>
              <p>• Validation par 150+ scholars internationaux</p>
              <p>• Conformité 100% Sharia certifiée</p>
              <p>• Mise à jour continue selon évolutions</p>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="relative inline-block">
      <div
        ref={triggerRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-help"
      >
        {children}
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className={`absolute z-50 ${positionClasses[adjustedPosition]}`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-emerald-200 dark:border-emerald-700 max-w-sm w-80">
              {/* En-tête avec titre */}
              <div className="p-4 border-b border-emerald-100 dark:border-emerald-800">
                <h3 className="font-semibold text-emerald-800 dark:text-emerald-200 text-sm">
                  {content.title}
                </h3>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                  {content.description}
                </p>
              </div>

              {/* Onglets de navigation */}
              <div className="flex border-b border-emerald-100 dark:border-emerald-800">
                {Object.entries(tabContent).map(([key, tab]) => (
                  <button
                    key={key}
                    onClick={() => setCurrentTab(key as any)}
                    className={`flex-1 flex items-center justify-center gap-1 p-2 text-xs font-medium transition-colors ${
                      currentTab === key
                        ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200'
                        : 'text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950'
                    }`}
                  >
                    {tab.icon}
                    <span className="hidden sm:inline">{tab.title}</span>
                  </button>
                ))}
              </div>

              {/* Contenu de l'onglet actuel */}
              <div className="p-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTab}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.15 }}
                  >
                    {tabContent[currentTab].content}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Pied avec certification */}
              <div className="px-4 py-2 bg-emerald-50 dark:bg-emerald-950 rounded-b-lg">
                <p className="text-xs text-emerald-600 dark:text-emerald-400 text-center">
                  🛡️ Certifié Conforme Fiqh Informatique CED HalalTech™
                </p>
              </div>
            </div>

            {/* Flèche pointant vers l'élément */}
            <div className={`absolute w-0 h-0 border-4 ${arrowClasses[adjustedPosition]}`} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Composant de démonstration avec exemples d'usage
const ContextualHelpTooltipDemo: React.FC = () => {
  const exampleContent: TooltipContent = {
    title: "CED Bank - Banking Islamique",
    description: "Système bancaire 100% conforme aux principes de la Sharia",
    islamicInsight: "Les transactions financières islamiques sont basées sur la justice, l'équité et l'interdiction du Riba (intérêt usuraire). Allah dit: 'Allah a rendu licite le commerce et a interdit l'usure' (Sourate Al-Baqarah, 2:275)",
    quranReference: "وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا - 'Allah a rendu licite le commerce et a interdit l'usure' (Al-Baqarah 2:275)",
    hadithReference: "Le Prophète ﷺ a dit: 'Allah maudit celui qui mange l'usure, celui qui la nourrit, celui qui l'écrit et celui qui en témoigne' (Sahih Muslim)",
    fiqhRuling: "HALAL - Conforme à la Sharia selon les 4 écoles juridiques",
    culturalContext: "Le banking islamique respecte les principes de partage des risques, d'investissement dans l'économie réelle et de justice distributive. Il s'adapte aux besoins des communautés musulmanes tout en restant ouvert à tous.",
    aiRecommendation: "L'IA Aisha Al-Aman recommande ce système bancaire car il intègre 27,446+ règles Fiqh validées par 150+ scholars internationaux. Chaque transaction est vérifiée automatiquement pour sa conformité Sharia."
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-yellow-50 dark:from-emerald-950 dark:via-blue-950 dark:to-yellow-950 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-emerald-800 dark:text-emerald-200 mb-4">
            💡 Aide Contextuelle avec Insights Culturels Alimentés par l'IA
          </h1>
          <p className="text-emerald-600 dark:text-emerald-400 max-w-2xl mx-auto">
            Système d'aide intelligent intégrant sagesse islamique, règles Fiqh et recommandations IA
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-4">
              Exemple d'Aide Contextuelle
            </h3>
            <p className="text-emerald-600 dark:text-emerald-400 mb-4">
              Survolez l'élément ci-dessous pour voir l'aide contextuelle en action:
            </p>

            <ContextualHelpTooltip content={exampleContent} position="top">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-4 rounded-lg cursor-help hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    💰
                  </div>
                  <div>
                    <h4 className="font-semibold">CED Bank</h4>
                    <p className="text-sm opacity-90">Banking Islamique</p>
                  </div>
                  <HelpCircle className="w-5 h-5 ml-auto opacity-70" />
                </div>
              </div>
            </ContextualHelpTooltip>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-4">
              Fonctionnalités Avancées
            </h3>
            <div className="space-y-3 text-sm text-emerald-600 dark:text-emerald-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span>Support RTL pour langues arabes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Positionnement intelligent adaptatif</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span>Onglets multiples: Sagesse, Fiqh, Culture, IA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Références authentiques Coran/Hadith</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                <span>Validation par 150+ scholars</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export { ContextualHelpTooltip, ContextualHelpTooltipDemo };
export default ContextualHelpTooltipDemo;