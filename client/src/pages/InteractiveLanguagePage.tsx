import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { InteractiveLanguageSelector } from '@/components/ui/InteractiveLanguageSelector';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, Volume2, VolumeX, Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InteractiveLanguagePage() {
  const { currentLanguage, setLanguage, translations, isRTL } = useLanguage();
  const [demoVariant, setDemoVariant] = useState<'compact' | 'full' | 'floating'>('full');

  const features = [
    {
      icon: '🌍',
      title: translations.features || 'Fonctionnalités',
      description: 'Support de 14+ langues avec respect culturel et religieux'
    },
    {
      icon: '🎵',
      title: translations.voice_enabled || 'Audio intégré',
      description: 'Salutations vocales culturelles automatiques'
    },
    {
      icon: '🕌',
      title: translations.islamic_context || 'Contexte islamique',
      description: 'Langues avec patrimoine et contexte religieux'
    },
    {
      icon: '🔄',
      title: 'RTL/LTR',
      description: 'Support bidirectionnel pour arabe, persan, ourdou'
    }
  ];

  const stats = [
    { label: 'Langues supportées', value: '14+', icon: '🌐' },
    { label: 'Régions mondiales', value: '8', icon: '🗺️' },
    { label: 'Utilisateurs actifs', value: '45K+', icon: '👥' },
    { label: 'Traductions précises', value: '99.8%', icon: '✅' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      <main className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête de page */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <Globe className="h-12 w-12 text-green-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {translations.select_language || 'Sélecteur de Langue Interactif'}
              </h1>
            </motion.div>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              🌙 PrettyhowQ HalalTech™ - Expérience multilingue avec drapeaux emoji culturels
            </p>
            
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                {translations.current_language || 'Langue actuelle'}: {currentLanguage.nativeName}
              </Badge>
              <Badge variant="outline">
                Direction: {currentLanguage.direction.toUpperCase()}
              </Badge>
              {currentLanguage.religiousContext && (
                <Badge variant="outline" className="border-amber-300 text-amber-700 dark:border-amber-600 dark:text-amber-400">
                  <Heart className="h-3 w-3 mr-1" />
                  Contexte islamique
                </Badge>
              )}
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center border-green-200 dark:border-green-800 hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-green-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Sélecteur de variant */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold mb-4">Choisir le style d'affichage :</h3>
            <div className="flex justify-center gap-2">
              {(['compact', 'full', 'floating'] as const).map((variant) => (
                <Button
                  key={variant}
                  variant={demoVariant === variant ? 'default' : 'outline'}
                  onClick={() => setDemoVariant(variant)}
                  className="capitalize"
                >
                  {variant}
                </Button>
              ))}
            </div>
          </div>

          {/* Démonstration du sélecteur */}
          <motion.div
            key={demoVariant}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12"
          >
            <InteractiveLanguageSelector
              currentLanguage={currentLanguage.code}
              onLanguageChange={setLanguage}
              variant={demoVariant}
              showGreeting={true}
              showAudioSupport={true}
            />
          </motion.div>

          {/* Fonctionnalités */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-green-200 dark:border-green-800 hover:shadow-lg transition-all hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Salutation culturelle */}
          <Card className="border-2 border-green-300 dark:border-green-700 mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-2xl">{currentLanguage.flag}</span>
                <span>Salutation Culturelle</span>
                <Volume2 className="h-5 w-5 text-green-600" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg p-6" dir={currentLanguage.direction}>
                <div className="text-2xl font-bold text-green-700 dark:text-green-300 mb-2">
                  {currentLanguage.culturalGreeting}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Région: {currentLanguage.region} • Langue: {currentLanguage.nativeName}
                </div>
                {currentLanguage.religiousContext && (
                  <div className="text-sm text-amber-700 dark:text-amber-400 mt-2 flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    {currentLanguage.religiousContext}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Integration PrettyhowQ HalalTech */}
          <Card className="border-2 border-emerald-300 dark:border-emerald-700">
            <CardHeader>
              <CardTitle className="text-center">
                🌙 Intégration PrettyhowQ HalalTech™
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Ce sélecteur de langue est intégré dans tout l'écosystème CED pour une expérience utilisateur respectueuse des cultures et conforme aux principes islamiques.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
                    <div className="text-lg mb-2">🎬</div>
                    <div className="font-medium">WebTV IA</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Contenu multilingue</div>
                  </div>
                  
                  <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-lg p-4">
                    <div className="text-lg mb-2">🌙</div>
                    <div className="font-medium">HalalTech</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Formation IA éthique</div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
                    <div className="text-lg mb-2">🤲</div>
                    <div className="font-medium">Assistant IA</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Guidance spirituelle</div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4">
                    <div className="text-lg mb-2">🎓</div>
                    <div className="font-medium">Formations</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Certifications halal</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}