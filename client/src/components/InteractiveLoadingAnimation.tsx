import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveLoadingAnimation: React.FC = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState('Initialisation');

  const phases = [
    'Initialisation (بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم)',
    'Chargement Conformité Sharia...',
    'Validation Fiqh Informatique...',
    'Activation Bénédictions...',
    'Finalisation (الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِين)'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        const phaseIndex = Math.floor((newProgress / 100) * phases.length);
        setCurrentPhase(phases[Math.min(phaseIndex, phases.length - 1)]);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  // Motifs géométriques islamiques
  const GeometricPattern = () => (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      className="absolute inset-0 mx-auto"
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      {/* Étoile à 8 branches islamique */}
      <motion.path
        d="M100,20 L120,60 L160,60 L130,90 L140,130 L100,110 L60,130 L70,90 L40,60 L80,60 Z"
        fill="none"
        stroke="url(#islamicGradient)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Cercles concentriques */}
      {[40, 60, 80].map((radius, index) => (
        <motion.circle
          key={radius}
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="url(#islamicGradient)"
          strokeWidth="1"
          opacity={0.3}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.3, duration: 1 }}
        />
      ))}
      
      <defs>
        <linearGradient id="islamicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="50%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#eab308" />
        </linearGradient>
      </defs>
    </motion.svg>
  );

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-emerald-50 via-blue-50 to-yellow-50 dark:from-emerald-950 dark:via-blue-950 dark:to-yellow-950 z-50 flex flex-col items-center justify-center">
      {/* Titre avec calligraphie */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold text-emerald-800 dark:text-emerald-200 mb-2">
          🕌 CED HalalTech™ Loading
        </h2>
        <p className="text-lg text-emerald-600 dark:text-emerald-400 font-arabic">
          بِسْمِ اللَّهِ نَبْدَأ
        </p>
      </motion.div>

      {/* Animation géométrique */}
      <div className="relative w-48 h-48 mb-8">
        <GeometricPattern />
        
        {/* Pourcentage au centre */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-700 dark:text-emerald-300">
              {Math.round(loadingProgress)}%
            </div>
            <div className="text-sm text-emerald-600 dark:text-emerald-400">
              إن شاء الله
            </div>
          </div>
        </motion.div>
      </div>

      {/* Barre de progression avec motifs islamiques */}
      <div className="w-80 mb-6">
        <div className="h-3 bg-emerald-100 dark:bg-emerald-900 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-500 via-blue-500 to-yellow-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${loadingProgress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        {/* Phase actuelle */}
        <motion.p
          key={currentPhase}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-3 text-emerald-700 dark:text-emerald-300 font-medium"
        >
          {currentPhase}
        </motion.p>
      </div>

      {/* Du'a de bénédiction */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center max-w-md"
      >
        <p className="text-sm text-emerald-600 dark:text-emerald-400 italic">
          "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا"
        </p>
        <p className="text-xs text-emerald-500 dark:text-emerald-500 mt-1">
          "Ô Allah, bénis-nous dans ce que Tu nous as accordé"
        </p>
      </motion.div>

      {/* Particules bénies */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveLoadingAnimation;