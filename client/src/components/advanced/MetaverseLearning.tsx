import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Users, 
  Zap, 
  Eye, 
  Gamepad2, 
  Headphones,
  Monitor,
  Wifi,
  Star,
  Rocket,
  Layers,
  Radio
} from 'lucide-react';

interface MetaverseWorld {
  id: string;
  name: string;
  theme: string;
  participants: number;
  difficulty: string;
  technology: string;
  uniqueFeature: string;
}

interface AvatarCustomization {
  style: string;
  abilities: string[];
  accessories: string[];
}

export function MetaverseLearning() {
  const [currentWorld, setCurrentWorld] = useState<string>('quantum-lab');
  const [isInMetaverse, setIsInMetaverse] = useState(false);
  const [avatarData, setAvatarData] = useState<AvatarCustomization>({
    style: 'Professional Learner',
    abilities: ['Quantum Thinking', 'Holographic Memory', 'Time Dilation Focus'],
    accessories: ['Neural Crown', 'Knowledge Crystals', 'Wisdom Aura']
  });

  const metaverseWorlds: MetaverseWorld[] = [
    {
      id: 'quantum-lab',
      name: 'Laboratoire Quantique',
      theme: 'Physique & IA Avancée',
      participants: 1247,
      difficulty: 'Expert',
      technology: 'Holographie Quantique',
      uniqueFeature: 'Manipulation d\'atomes virtuels en temps réel'
    },
    {
      id: 'digital-ethics-forum',
      name: 'Forum Éthique Digitale',
      theme: 'Philosophie IA & Société',
      participants: 892,
      difficulty: 'Intermédiaire',
      technology: 'Débat IA Collaboratif',
      uniqueFeature: 'Simulation de dilemmes éthiques réels'
    },
    {
      id: 'neural-network-city',
      name: 'Cité des Réseaux de Neurones',
      theme: 'Architecture IA Immersive',
      participants: 2156,
      difficulty: 'Avancé',
      technology: 'Visualisation 4D',
      uniqueFeature: 'Navigation dans l\'esprit d\'une IA'
    },
    {
      id: 'sustainable-future',
      name: 'Futur Durable 2050',
      theme: 'Écologie & Technologies Vertes',
      participants: 1683,
      difficulty: 'Tous niveaux',
      technology: 'Simulation Climatique',
      uniqueFeature: 'Impact environnemental en temps réel'
    }
  ];

  const getWorldIcon = (id: string) => {
    switch (id) {
      case 'quantum-lab': return <Zap className="h-5 w-5 text-purple-600" />;
      case 'digital-ethics-forum': return <Users className="h-5 w-5 text-blue-600" />;
      case 'neural-network-city': return <Monitor className="h-5 w-5 text-green-600" />;
      case 'sustainable-future': return <Globe className="h-5 w-5 text-emerald-600" />;
      default: return <Gamepad2 className="h-5 w-5 text-gray-600" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Expert': return 'bg-red-100 text-red-800';
      case 'Avancé': return 'bg-orange-100 text-orange-800';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800';
      case 'Tous niveaux': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <motion.div
          animate={{ 
            rotateY: isInMetaverse ? 360 : 0,
            scale: isInMetaverse ? [1, 1.1, 1] : 1
          }}
          transition={{ duration: 3, repeat: isInMetaverse ? Infinity : 0 }}
          className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center"
        >
          <Globe className="h-10 w-10 text-white" />
        </motion.div>
        
        <div>
          <h2 className="text-3xl font-bold text-white drop-shadow-lg">
            Métavers Éducatif CED
          </h2>
          <p className="text-white/80 drop-shadow-lg">
            Premiers mondes virtuels d'apprentissage IA éthique immersif
          </p>
        </div>

        <Button 
          onClick={() => setIsInMetaverse(!isInMetaverse)}
          className={isInMetaverse ? 'bg-purple-600 hover:bg-purple-700' : 'bg-cyan-600 hover:bg-cyan-700'}
        >
          {isInMetaverse ? (
            <>
              <Radio className="h-4 w-4 mr-2" />
              Connecté au Métavers
            </>
          ) : (
            <>
              <Rocket className="h-4 w-4 mr-2" />
              Entrer dans le Métavers
            </>
          )}
        </Button>
      </div>

      {/* Mondes Disponibles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metaverseWorlds.map((world) => (
          <motion.div
            key={world.id}
            whileHover={{ scale: 1.02 }}
            onClick={() => setCurrentWorld(world.id)}
          >
            <Card className={`cursor-pointer transition-all ${
              currentWorld === world.id 
                ? 'border-cyan-500 shadow-lg shadow-cyan-500/25' 
                : 'border-gray-200 hover:border-cyan-300'
            }`}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getWorldIcon(world.id)}
                    <span className="text-lg">{world.name}</span>
                  </div>
                  <Badge className={getDifficultyColor(world.difficulty)}>
                    {world.difficulty}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700 text-sm">{world.theme}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-500" />
                    <span>{world.participants.toLocaleString()} participants</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {world.technology}
                  </Badge>
                </div>

                <div className="text-sm">
                  <span className="font-medium text-cyan-600">Exclusivité: </span>
                  <span className="text-gray-700">{world.uniqueFeature}</span>
                </div>

                {currentWorld === world.id && isInMetaverse && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pt-3 border-t space-y-2"
                  >
                    <Button size="sm" className="w-full">
                      <Rocket className="h-3 w-3 mr-2" />
                      Téléporter
                    </Button>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Avatar & Personnalisation */}
      {isInMetaverse && (
        <Card className="border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-purple-600" />
              Avatar & Capacités Métavers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Style Avatar</h4>
                <p className="text-sm text-purple-600 font-medium">{avatarData.style}</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Capacités Spéciales</h4>
                <div className="flex flex-wrap gap-1">
                  {avatarData.abilities.map((ability, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {ability}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Accessoires</h4>
                <div className="flex flex-wrap gap-1">
                  {avatarData.accessories.map((accessory, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {accessory}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Technologies Révolutionnaires */}
      <Card className="border-2 border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Layers className="h-5 w-5 text-cyan-600" />
            Innovations Métavers CED - Exclusivités Mondiales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Immersion Quantique
              </h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Hologrammes 8K tactiles</li>
                <li>• Physique quantique simulée</li>
                <li>• Temps relatif modulable</li>
                <li>• Téléportation instantanée</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Conscience Collective
              </h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Apprentissage partagé en temps réel</li>
                <li>• Mémoire collective accessible</li>
                <li>• Résolution collaborative de problèmes</li>
                <li>• Synesthésie numérique</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                <Headphones className="h-4 w-4" />
                Sens Augmentés
              </h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Audio spatial 360° quantique</li>
                <li>• Retour haptique moléculaire</li>
                <li>• Odorat numérique éducatif</li>
                <li>• Synesthésie apprentissage</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}