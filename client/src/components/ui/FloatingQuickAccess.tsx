import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  X, 
  Youtube, 
  GraduationCap, 
  MessageCircle, 
  BookOpen,
  ChevronUp,
  ChevronDown
} from 'lucide-react';

export function FloatingQuickAccess() {
  const [isOpen, setIsOpen] = useState(false);
  
  const platforms = [
    {
      id: 'webtv',
      name: 'WebTV IA PrettyhowQ',
      description: 'Chaîne YouTube automatisée 250K+ abonnés',
      href: '/webtv-prettyhowq',
      icon: '🎬',
      color: 'from-red-500 to-red-600',
      lucideIcon: Youtube
    },
    {
      id: 'halaltech',
      name: 'HalalTech Website',
      description: 'Formation IA éthique multilingue FR/EN/AR',
      href: '/halaltech',
      icon: '🌙',
      color: 'from-green-500 to-emerald-600',
      lucideIcon: BookOpen
    },
    {
      id: 'assistant',
      name: 'Assistant IA Spirituel',
      description: 'Guidance conforme Tawhid et Maslaha',
      href: '/assistant-spirituel',
      icon: '🤲',
      color: 'from-blue-500 to-blue-600',
      lucideIcon: MessageCircle
    },
    {
      id: 'formations',
      name: 'Formations Halal',
      description: '25+ cours certifiés PrettyhowQ HalalTech™',
      href: '/formations-halal',
      icon: '🎓',
      color: 'from-purple-500 to-purple-600',
      lucideIcon: GraduationCap
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Bouton principal */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-2xl border-2 border-white flex items-center justify-center text-white font-bold"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <div className="flex flex-col items-center">
              <Sparkles className="h-5 w-5 mb-1" />
              <span className="text-xs">🌙</span>
            </div>
          )}
        </Button>
      </motion.div>

      {/* Menu des plateformes */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-80"
          >
            <Card className="shadow-2xl border-2 border-green-200 dark:border-green-800 bg-white/95 backdrop-blur-sm dark:bg-gray-900/95">
              <CardContent className="p-4">
                <div className="text-center mb-4">
                  <h3 className="font-bold text-lg text-green-700 dark:text-green-300">
                    🌙 PrettyhowQ HalalTech™
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Accès rapide aux plateformes
                  </p>
                </div>
                
                <div className="space-y-3">
                  {platforms.map((platform, index) => (
                    <motion.div
                      key={platform.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link href={platform.href}>
                        <Button
                          variant="ghost"
                          className="w-full h-auto p-3 justify-start hover:bg-green-50 dark:hover:bg-green-900/20"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex items-center gap-3 w-full">
                            <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${platform.color} flex items-center justify-center text-white shadow-md`}>
                              <span className="text-lg">{platform.icon}</span>
                            </div>
                            <div className="flex-1 text-left">
                              <div className="font-semibold text-sm text-gray-900 dark:text-white">
                                {platform.name}
                              </div>
                              <div className="text-xs text-gray-600 dark:text-gray-300 leading-tight">
                                {platform.description}
                              </div>
                            </div>
                            <ChevronUp className="h-4 w-4 text-gray-400" />
                          </div>
                        </Button>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Support de 14+ langues avec drapeaux culturels
                    </p>
                    <div className="flex justify-center gap-1 mt-2">
                      <span className="text-sm">🇫🇷🇸🇦🇹🇷🇮🇩🇵🇰🇲🇾🇧🇩</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}