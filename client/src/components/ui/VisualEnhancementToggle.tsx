import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, RotateCcw } from 'lucide-react';

export function VisualEnhancementToggle() {
  const [enhancementsEnabled, setEnhancementsEnabled] = useState(() => {
    const saved = localStorage.getItem('visual_enhancements_enabled');
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('visual_enhancements_enabled', JSON.stringify(enhancementsEnabled));
    
    // Appliquer ou retirer les améliorations visuelles
    const body = document.body;
    const root = document.documentElement;
    
    if (enhancementsEnabled) {
      body.classList.add('enhanced-visuals');
    } else {
      body.classList.remove('enhanced-visuals');
    }
  }, [enhancementsEnabled]);

  const toggleEnhancements = () => {
    setEnhancementsEnabled(!enhancementsEnabled);
  };

  const resetToDefault = () => {
    setEnhancementsEnabled(false);
  };

  return (
    <Card className="fixed bottom-4 right-4 z-50 w-64">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Palette className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium">Mode Visuel</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={resetToDefault}
            className="h-6 w-6 p-0"
            title="Revenir au design original"
          >
            <RotateCcw className="h-3 w-3" />
          </Button>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-600">Original</span>
          <Button
            variant={enhancementsEnabled ? "default" : "outline"}
            size="sm"
            onClick={toggleEnhancements}
            className="h-8 px-3 text-xs"
          >
            {enhancementsEnabled ? 'Amélioré' : 'Standard'}
          </Button>
          <span className="text-xs text-gray-600">Amélioré</span>
        </div>
        
        <p className="text-xs text-gray-500 mt-2">
          {enhancementsEnabled 
            ? 'Fond dégradé animé, effets visuels et particules activés'
            : 'Design original simple et épuré'
          }
        </p>
      </CardContent>
    </Card>
  );
}