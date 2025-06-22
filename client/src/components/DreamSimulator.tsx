import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Waves,
  Sun,
  Mountain,
  TreePine,
  Palmtree,
  Snowflake,
  Bird,
  Fish,
  Heart,
  Star,
  MapPin,
  Camera,
  Volume2,
  Play,
  Pause,
  RotateCcw,
  Share2,
  Download,
  Eye,
  Compass,
  Anchor
} from 'lucide-react';

interface Ambiance {
  id: string;
  name: string;
  description: string;
  location: string;
  icon: any;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  sounds: string[];
  elements: string[];
  inspiration: string;
  benefits: string[];
}

export function DreamSimulator() {
  const [currentAmbiance, setCurrentAmbiance] = useState<Ambiance | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const ambiances: Ambiance[] = [
    {
      id: 'canaries',
      name: 'Îles Canaries',
      description: 'Plages dorées et eaux cristallines de l\'archipel volcanique',
      location: 'Espagne, Océan Atlantique',
      icon: Palmtree,
      colors: {
        primary: 'from-yellow-400 to-orange-500',
        secondary: 'from-blue-400 to-cyan-500',
        accent: 'from-green-300 to-emerald-400',
        background: 'from-orange-100 via-yellow-50 to-blue-100'
      },
      sounds: ['Vagues douces', 'Mouettes', 'Vent tropical', 'Guitare espagnole'],
      elements: ['Sable fin', 'Palmiers', 'Volcans', 'Villages blancs'],
      inspiration: 'Un paradis accessible où rêver d\'un nouveau départ',
      benefits: ['Détente profonde', 'Motivation', 'Espoir', 'Sérénité']
    },
    {
      id: 'maldives',
      name: 'Maldives',
      description: 'Lagons turquoise et bungalows sur pilotis',
      location: 'Océan Indien',
      icon: Waves,
      colors: {
        primary: 'from-cyan-400 to-blue-500',
        secondary: 'from-teal-300 to-green-400',
        accent: 'from-white to-blue-100',
        background: 'from-blue-50 via-cyan-50 to-teal-50'
      },
      sounds: ['Vagues cristallines', 'Dauphins', 'Silence tropical', 'Ukulélé'],
      elements: ['Eau turquoise', 'Poissons colorés', 'Coraux', 'Bungalows'],
      inspiration: 'L\'évasion ultime vers la paix intérieure',
      benefits: ['Méditation', 'Clarté mentale', 'Paix', 'Ressourcement']
    },
    {
      id: 'norwegian-fjords',
      name: 'Fjords Norvégiens',
      description: 'Majestueuses falaises et aurores boréales',
      location: 'Norvège, Scandinavie',
      icon: Mountain,
      colors: {
        primary: 'from-indigo-500 to-purple-600',
        secondary: 'from-green-400 to-teal-500',
        accent: 'from-pink-300 to-purple-400',
        background: 'from-slate-100 via-blue-50 to-indigo-100'
      },
      sounds: ['Écho des montagnes', 'Cascades', 'Vent nordique', 'Silence glacial'],
      elements: ['Fjords profonds', 'Aurores boréales', 'Neige éternelle', 'Chalets'],
      inspiration: 'La force tranquille des grands espaces',
      benefits: ['Force intérieure', 'Perspective', 'Courage', 'Détermination']
    },
    {
      id: 'bali',
      name: 'Bali Mystique',
      description: 'Temples sacrés et rizières en terrasses',
      location: 'Indonésie, Asie du Sud-Est',
      icon: TreePine,
      colors: {
        primary: 'from-green-500 to-emerald-600',
        secondary: 'from-yellow-400 to-orange-500',
        accent: 'from-purple-400 to-pink-500',
        background: 'from-green-50 via-yellow-50 to-orange-50'
      },
      sounds: ['Gamelan balinais', 'Oiseaux tropicaux', 'Rivières', 'Mantras'],
      elements: ['Rizières', 'Temples hindous', 'Jungle tropicale', 'Singes'],
      inspiration: 'Harmonie spirituelle et connexion à la nature',
      benefits: ['Équilibre', 'Spiritualité', 'Créativité', 'Harmonie']
    },
    {
      id: 'sahara-oasis',
      name: 'Oasis du Sahara',
      description: 'Dunes dorées et palmiers verdoyants',
      location: 'Afrique du Nord',
      icon: Sun,
      colors: {
        primary: 'from-amber-400 to-yellow-600',
        secondary: 'from-orange-500 to-red-500',
        accent: 'from-green-400 to-emerald-500',
        background: 'from-yellow-100 via-orange-50 to-red-50'
      },
      sounds: ['Vent du désert', 'Chameaux', 'Musique berbère', 'Silence infini'],
      elements: ['Dunes de sable', 'Oasis verdoyantes', 'Étoiles brillantes', 'Caravanes'],
      inspiration: 'Découvrir la beauté dans la simplicité',
      benefits: ['Résilience', 'Contemplation', 'Patience', 'Sagesse']
    },
    {
      id: 'costa-del-sol',
      name: 'Costa del Sol',
      description: 'Riviera andalouse et villages blancs',
      location: 'Andalousie, Espagne',
      icon: Anchor,
      colors: {
        primary: 'from-blue-500 to-indigo-600',
        secondary: 'from-yellow-400 to-orange-500',
        accent: 'from-white to-gray-100',
        background: 'from-blue-50 via-yellow-50 to-white'
      },
      sounds: ['Flamenco', 'Vagues méditerranéennes', 'Guitares', 'Cloches d\'église'],
      elements: ['Ports de pêche', 'Villages blancs', 'Oliveraies', 'Terrasses'],
      inspiration: 'Là où TechForAll aide concrètement les familles',
      benefits: ['Solidarité', 'Espoir réel', 'Communauté', 'Action']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    // Démarrer avec les Canaries
    setCurrentAmbiance(ambiances[0]);
    
    return () => clearInterval(timer);
  }, []);

  const playAmbiance = (ambiance: Ambiance) => {
    setCurrentAmbiance(ambiance);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetSimulation = () => {
    setIsPlaying(false);
    setCurrentAmbiance(ambiances[0]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
      
      {/* Background Animation */}
      {currentAmbiance && (
        <div className={`fixed inset-0 bg-gradient-to-br ${currentAmbiance.colors.background} opacity-60 pointer-events-none`}>
          <div className="absolute inset-0">
            {isPlaying && (
              <>
                {/* Particules flottantes */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-30"
                    initial={{ x: Math.random() * window.innerWidth, y: window.innerHeight + 10 }}
                    animate={{ 
                      y: -10,
                      x: Math.random() * window.innerWidth
                    }}
                    transition={{
                      duration: Math.random() * 10 + 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto p-6 space-y-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center items-center gap-3">
            <motion.div
              animate={{ rotate: isPlaying ? [0, 360] : 0 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 rounded-2xl flex items-center justify-center"
            >
              <Compass className="h-8 w-8 text-white" />
            </motion.div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Simulateur d'Évasion TechForAll
            </h1>
          </div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Des ambiances de rêve pour nourrir l'espoir et la motivation des personnes dans le besoin
          </p>
          <div className="flex justify-center gap-2">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Heart className="h-3 w-3 mr-1" />
              Bien-être
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Star className="h-3 w-3 mr-1" />
              Motivation
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              <Eye className="h-3 w-3 mr-1" />
              Évasion
            </Badge>
          </div>
        </motion.div>

        {/* Current Ambiance Display */}
        {currentAmbiance && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentAmbiance.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-2xl overflow-hidden">
                <CardHeader className={`bg-gradient-to-r ${currentAmbiance.colors.primary} text-white relative`}>
                  <div className="absolute inset-0 opacity-20">
                    {isPlaying && (
                      <motion.div
                        animate={{ 
                          backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="w-full h-full bg-gradient-to-br from-white/20 to-transparent"
                      />
                    )}
                  </div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        <currentAmbiance.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl font-bold">{currentAmbiance.name}</CardTitle>
                        <p className="text-white/90 flex items-center gap-2 mt-2">
                          <MapPin className="h-4 w-4" />
                          {currentAmbiance.location}
                        </p>
                      </div>
                    </div>
                    
                    {/* Controls */}
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="text-white/80 text-sm font-mono"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {currentTime.toLocaleTimeString('fr-FR')}
                      </motion.div>
                      <Button
                        onClick={togglePlayPause}
                        variant="outline"
                        size="sm"
                        className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                      >
                        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                      <Button
                        onClick={resetSimulation}
                        variant="outline"
                        size="sm"
                        className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                      >
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-8 space-y-6">
                  
                  {/* Description */}
                  <div className="text-center">
                    <p className="text-xl text-gray-700 mb-4">{currentAmbiance.description}</p>
                    <p className="text-lg font-medium text-blue-600 italic">"{currentAmbiance.inspiration}"</p>
                  </div>

                  {/* Elements Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    
                    {/* Sons */}
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <Volume2 className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                      <h3 className="font-semibold mb-2">Sons</h3>
                      <div className="space-y-1">
                        {currentAmbiance.sounds.map((sound, index) => (
                          <motion.p 
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isPlaying ? [0.5, 1, 0.5] : 0.5 }}
                            transition={{ delay: index * 0.5, duration: 2, repeat: Infinity }}
                            className="text-sm text-gray-600"
                          >
                            {sound}
                          </motion.p>
                        ))}
                      </div>
                    </div>

                    {/* Éléments visuels */}
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <Camera className="h-8 w-8 mx-auto mb-3 text-green-600" />
                      <h3 className="font-semibold mb-2">Paysages</h3>
                      <div className="space-y-1">
                        {currentAmbiance.elements.map((element, index) => (
                          <p key={index} className="text-sm text-gray-600">{element}</p>
                        ))}
                      </div>
                    </div>

                    {/* Bienfaits */}
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <Heart className="h-8 w-8 mx-auto mb-3 text-red-600" />
                      <h3 className="font-semibold mb-2">Bienfaits</h3>
                      <div className="space-y-1">
                        {currentAmbiance.benefits.map((benefit, index) => (
                          <Badge key={index} variant="outline" className="text-xs m-1">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <Share2 className="h-8 w-8 mx-auto mb-3 text-purple-600" />
                      <h3 className="font-semibold mb-2">Partager</h3>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm" className="w-full">
                          <Download className="h-4 w-4 mr-2" />
                          Capture
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          <Share2 className="h-4 w-4 mr-2" />
                          Partager
                        </Button>
                      </div>
                    </div>

                  </div>

                  {/* Progress Indicator */}
                  {isPlaying && (
                    <div className="mt-6">
                      <div className="flex justify-center items-center gap-2 mb-2">
                        <Bird className="h-5 w-5 text-blue-600" />
                        <span className="text-sm text-gray-600">Session en cours</span>
                        <Fish className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div 
                          className={`h-2 rounded-full bg-gradient-to-r ${currentAmbiance.colors.primary}`}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 30, ease: "linear" }}
                        />
                      </div>
                    </div>
                  )}

                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Ambiances Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ambiances.map((ambiance, index) => (
            <motion.div
              key={ambiance.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              onClick={() => playAmbiance(ambiance)}
              className={`cursor-pointer transition-all duration-300 ${
                currentAmbiance?.id === ambiance.id 
                  ? 'transform scale-105 shadow-xl' 
                  : 'hover:scale-102 hover:shadow-lg'
              }`}
            >
              <Card className={`overflow-hidden ${
                currentAmbiance?.id === ambiance.id ? 'ring-2 ring-blue-500' : ''
              }`}>
                <CardHeader className={`bg-gradient-to-r ${ambiance.colors.primary} text-white h-32 relative`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className={`w-full h-full bg-gradient-to-br ${ambiance.colors.secondary}`} />
                  </div>
                  <div className="relative z-10 flex items-center justify-between h-full">
                    <div>
                      <h3 className="text-xl font-bold">{ambiance.name}</h3>
                      <p className="text-white/80 text-sm">{ambiance.location}</p>
                    </div>
                    <ambiance.icon className="h-8 w-8" />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-gray-600 text-sm mb-3">{ambiance.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      {ambiance.benefits.slice(0, 2).map((benefit, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      size="sm" 
                      variant={currentAmbiance?.id === ambiance.id ? "default" : "outline"}
                    >
                      {currentAmbiance?.id === ambiance.id ? (
                        isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* TechForAll Message */}
        <Card className="bg-gradient-to-r from-green-100 to-blue-100 border border-green-200">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-green-600" />
              <h3 className="text-2xl font-bold text-green-800">Un Moment d'Évasion pour Tous</h3>
            </div>
            <p className="text-green-700 mb-6 text-lg">
              TechForAll offre ces moments de rêve et d'espoir aux personnes en difficulté. 
              Chaque don, chaque formation, chaque ordinateur reconditionné évite le gaspillage 
              et contribue à construire un avenir meilleur pour les familles dans le besoin.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">2,500+</div>
                <div className="text-sm text-gray-600">Équipements sauvés du gaspillage</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">85%</div>
                <div className="text-sm text-gray-600">Réduction déchets électroniques</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-600">120</div>
                <div className="text-sm text-gray-600">Familles accompagnées</div>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button 
                onClick={() => window.location.href = '/techforall'}
                className="bg-green-600 hover:bg-green-700"
              >
                <Heart className="h-4 w-4 mr-2" />
                Rejoindre TechForAll
              </Button>
              <Button 
                onClick={() => window.location.href = '/costa-del-sol'}
                variant="outline"
                className="border-blue-300 text-blue-700"
              >
                <Anchor className="h-4 w-4 mr-2" />
                Costa del Sol
              </Button>
              <Button 
                onClick={() => window.location.href = '/compte-yakoubi'}
                variant="outline"
                className="border-orange-300 text-orange-700"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Nos Actions
              </Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}