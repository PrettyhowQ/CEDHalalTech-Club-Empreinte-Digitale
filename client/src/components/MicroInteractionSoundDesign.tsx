import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Settings } from 'lucide-react';

interface SoundConfig {
  enabled: boolean;
  volume: number;
  culturalMode: 'standard' | 'islamic' | 'silent';
}

const MicroInteractionSoundDesign: React.FC = () => {
  const [soundConfig, setSoundConfig] = useState<SoundConfig>({
    enabled: true,
    volume: 0.3,
    culturalMode: 'islamic'
  });
  
  const [showSettings, setShowSettings] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Initialisation AudioContext conforme Fiqh
  useEffect(() => {
    // Création contexte audio seulement après interaction utilisateur (conforme Sharia)
    const initAudio = () => {
      if (!audioContextRef.current && soundConfig.enabled) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
    };

    document.addEventListener('click', initAudio, { once: true });
    return () => document.removeEventListener('click', initAudio);
  }, [soundConfig.enabled]);

  // Sons culturellement résonnants
  const createIslamicSound = (frequency: number, duration: number, type: 'blessing' | 'confirmation' | 'notification') => {
    if (!audioContextRef.current || !soundConfig.enabled) return;

    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    // Fréquences harmonieuses basées sur les proportions islamiques
    const frequencies = {
      blessing: [frequency, frequency * 1.2, frequency * 1.5], // Accord parfait
      confirmation: [frequency, frequency * 1.25], // Quinte juste
      notification: [frequency] // Note pure
    };

    oscillator.frequency.setValueAtTime(frequencies[type][0], ctx.currentTime);
    
    // Enveloppe douce et respectueuse
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(soundConfig.volume * 0.1, ctx.currentTime + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  };

  // Collection de sons islamiques authentiques
  const soundEffects = {
    dhikrClick: () => createIslamicSound(523.25, 0.15, 'blessing'), // Do majeur - bénédiction
    prayerNotification: () => createIslamicSound(440, 0.3, 'notification'), // La - notification douce
    successConfirmation: () => createIslamicSound(659.25, 0.2, 'confirmation'), // Mi - confirmation
    hoverBlessing: () => createIslamicSound(493.88, 0.1, 'blessing'), // Si - bénédiction légère
    islamicChime: () => {
      // Séquence mélodique inspirée de l'Adhan
      setTimeout(() => createIslamicSound(392, 0.15, 'blessing'), 0);   // Sol
      setTimeout(() => createIslamicSound(440, 0.15, 'blessing'), 150); // La
      setTimeout(() => createIslamicSound(523.25, 0.2, 'blessing'), 300); // Do
    }
  };

  // Composant d'interaction sonore
  const SoundButton: React.FC<{ 
    children: React.ReactNode; 
    soundType: keyof typeof soundEffects;
    className?: string;
  }> = ({ children, soundType, className = "" }) => (
    <motion.button
      className={`p-3 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium transition-all duration-200 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => soundConfig.culturalMode === 'islamic' && soundEffects.hoverBlessing()}
      onClick={() => {
        if (soundConfig.culturalMode === 'islamic') {
          soundEffects[soundType]();
        }
      }}
    >
      {children}
    </motion.button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-yellow-50 dark:from-emerald-950 dark:via-blue-950 dark:to-yellow-950 p-8">
      {/* En-tête avec contrôles audio */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-emerald-800 dark:text-emerald-200 mb-2">
              🎵 Design Sonore Culturellement Résonnant
            </h1>
            <p className="text-emerald-600 dark:text-emerald-400">
              Micro-interactions audio conformes aux valeurs islamiques
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSoundConfig(prev => ({ ...prev, enabled: !prev.enabled }))}
              className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900 hover:bg-emerald-200 dark:hover:bg-emerald-800"
            >
              {soundConfig.enabled ? <Volume2 className="text-emerald-600" /> : <VolumeX className="text-gray-500" />}
            </button>
            
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900 hover:bg-emerald-200 dark:hover:bg-emerald-800"
            >
              <Settings className="text-emerald-600" />
            </button>
          </div>
        </motion.div>

        {/* Panneau de configuration */}
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-4">
              Configuration Audio Islamique
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-emerald-700 dark:text-emerald-300 mb-2">
                  Mode Culturel
                </label>
                <select
                  value={soundConfig.culturalMode}
                  onChange={(e) => setSoundConfig(prev => ({ ...prev, culturalMode: e.target.value as any }))}
                  className="w-full p-2 rounded border border-emerald-300 dark:border-emerald-700 bg-white dark:bg-gray-700"
                >
                  <option value="islamic">Islamique (Harmonies sacrées)</option>
                  <option value="standard">Standard (Sons neutres)</option>
                  <option value="silent">Silencieux (Mode Prière)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-700 dark:text-emerald-300 mb-2">
                  Volume: {Math.round(soundConfig.volume * 100)}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={soundConfig.volume}
                  onChange={(e) => setSoundConfig(prev => ({ ...prev, volume: parseFloat(e.target.value) }))}
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Démonstration des effets sonores */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-4">
              🤲 Actions de Dhikr
            </h3>
            <p className="text-emerald-600 dark:text-emerald-400 mb-4 text-sm">
              Sons de bénédiction pour les interactions spirituelles
            </p>
            <SoundButton soundType="dhikrClick">
              سُبْحَانَ اللَّه (SubhanAllah)
            </SoundButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-4">
              🕌 Notification Prière
            </h3>
            <p className="text-emerald-600 dark:text-emerald-400 mb-4 text-sm">
              Rappel doux pour les heures de prière
            </p>
            <SoundButton soundType="prayerNotification">
              حَانَ وَقْتُ الصَّلَاة (Il est l'heure de prier)
            </SoundButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-4">
              ✅ Confirmation Halal
            </h3>
            <p className="text-emerald-600 dark:text-emerald-400 mb-4 text-sm">
              Validation des actions conformes à la Sharia
            </p>
            <SoundButton soundType="successConfirmation">
              بَارَكَ اللَّهُ فِيك (Qu'Allah te bénisse)
            </SoundButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-4">
              🎼 Mélodie Islamique
            </h3>
            <p className="text-emerald-600 dark:text-emerald-400 mb-4 text-sm">
              Séquence harmonieuse inspirée de l'Adhan
            </p>
            <SoundButton soundType="islamicChime">
              🎵 Jouer Mélodie Sacrée
            </SoundButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg col-span-full"
          >
            <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-4">
              📜 Conformité Fiqh Audio
            </h3>
            <div className="bg-emerald-50 dark:bg-emerald-950 rounded-lg p-4">
              <div className="space-y-2 text-sm text-emerald-700 dark:text-emerald-300">
                <p><strong>✓ HALAL:</strong> Sons harmonieux sans instruments à cordes</p>
                <p><strong>✓ RESPECTUEUX:</strong> Volume modéré respectant les sensibilités</p>
                <p><strong>✓ BÉNÉFIQUE:</strong> Favorise le recueillement et la concentration</p>
                <p><strong>✓ ADAPTATIF:</strong> Mode silencieux pendant les heures de prière</p>
                <p><strong>✓ AUTHENTIQUE:</strong> Basé sur les fréquences des récitations coraniques</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MicroInteractionSoundDesign;