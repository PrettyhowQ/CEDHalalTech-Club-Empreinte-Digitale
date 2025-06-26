import React, { useEffect, useState } from 'react';
import { Zap, CheckCircle } from 'lucide-react';

interface PreloadItem {
  name: string;
  url: string;
  loaded: boolean;
}

export function SmartPreloader() {
  const [preloadItems, setPreloadItems] = useState<PreloadItem[]>([
    { name: 'CED Bank', url: '/ced-bank', loaded: false },
    { name: 'Formations', url: '/formations', loaded: false },
    { name: 'TechForAll', url: '/techforall', loaded: false },
    { name: 'Calculateur Zakat', url: '/zakat-calculator', loaded: false },
    { name: 'Mode Prière', url: '/mode-priere', loaded: false }
  ]);
  
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Préchargement intelligent des pages critiques
    const preloadPages = async () => {
      const criticalRoutes = [
        '/api/courses',
        '/api/analytics/global', 
        '/api/testimonials',
        '/api/products'
      ];

      for (let i = 0; i < criticalRoutes.length; i++) {
        try {
          await fetch(criticalRoutes[i]);
          setProgress(((i + 1) / criticalRoutes.length) * 100);
          
          setPreloadItems(prev => prev.map((item, index) => 
            index === i ? { ...item, loaded: true } : item
          ));
          
          await new Promise(resolve => setTimeout(resolve, 200));
        } catch (error) {
          console.log('Preload skip:', criticalRoutes[i]);
        }
      }
      
      // Cache des assets critiques
      const criticalAssets = [
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjMDA3N0ZGIi8+Cjwvc3ZnPgo='
      ];
      
      await Promise.all(
        criticalAssets.map(src => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = src;
          });
        })
      );
      
      setTimeout(() => setIsVisible(false), 1000);
    };

    preloadPages();
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-[100] flex items-center justify-center">
      <div className="text-center">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
            <Zap className="h-8 w-8 text-white animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Club Empreinte Digitale
          </h2>
          <p className="text-gray-600 mt-2">Optimisation en cours...</p>
        </div>
        
        <div className="w-80 bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="space-y-2">
          {preloadItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <span className="text-gray-600">{item.name}</span>
              {item.loaded ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <div className="h-4 w-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
              )}
            </div>
          ))}
        </div>
        
        <p className="text-xs text-gray-500 mt-4">
          {Math.round(progress)}% • Préparation expérience optimale
        </p>
      </div>
    </div>
  );
}