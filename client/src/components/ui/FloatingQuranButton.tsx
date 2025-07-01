import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { Headphones, Play, Volume2 } from 'lucide-react';

export function FloatingQuranButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link href="/lecteur-coran">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-full shadow-2xl cursor-pointer relative overflow-hidden"
        >
          {/* Bouton principal */}
          <div className="w-16 h-16 flex items-center justify-center relative">
            <Headphones className="h-8 w-8 text-white" />
            
            {/* Animation des ondes sonores */}
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 border-2 border-white rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute inset-0 border-2 border-white rounded-full"
            />
          </div>

          {/* Tooltip élargi */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-xl whitespace-nowrap"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <Play className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">🎧 ÉCOUTER LE CORAN</div>
                    <div className="text-xs opacity-75">Mishary • Al-Sudais • Al-Shuraim</div>
                  </div>
                </div>
                
                {/* Flèche du tooltip */}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Badge notifiant */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
          >
            <Volume2 className="h-2 w-2 text-white" />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}