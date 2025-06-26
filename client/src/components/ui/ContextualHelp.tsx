import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  HelpCircle, 
  X, 
  Lightbulb, 
  Zap, 
  ChevronRight,
  Star,
  Clock,
  Users
} from 'lucide-react';
import { useLocation } from 'wouter';

interface HelpTip {
  title: string;
  description: string;
  action?: string;
  href?: string;
  priority: 'low' | 'medium' | 'high';
}

export function ContextualHelp() {
  const [location] = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [currentTips, setCurrentTips] = useState<HelpTip[]>([]);

  const helpDatabase: Record<string, HelpTip[]> = {
    '/': [
      {
        title: 'Accès Rapide Optimisé',
        description: 'Utilisez les boutons d\'accès rapide en haut à droite pour naviguer instantanément.',
        priority: 'high'
      },
      {
        title: 'Recherche Intelligente',
        description: 'La barre de recherche comprend le contexte et anticipe vos besoins.',
        priority: 'medium'
      }
    ],
    '/formations': [
      {
        title: 'Filtres Avancés',
        description: 'Combinez catégorie, niveau et recherche pour trouver la formation parfaite.',
        action: 'Essayer les filtres',
        priority: 'high'
      },
      {
        title: 'Certifications Internationales',
        description: 'Chaque formation inclut des certifications reconnues mondialement.',
        priority: 'medium'
      }
    ],
    '/ced-bank': [
      {
        title: 'Banking 100% Halal',
        description: 'Système bancaire sans intérêt, conforme aux principes islamiques.',
        priority: 'high'
      },
      {
        title: 'Sécurité Renforcée',
        description: 'Authentification biométrique et chiffrement de niveau bancaire.',
        priority: 'medium'
      }
    ],
    '/zakat-calculator': [
      {
        title: 'Calcul Automatique',
        description: 'Le calculateur prend en compte tous les types d\'actifs et devises.',
        priority: 'high'
      },
      {
        title: 'Conformité Sharia',
        description: 'Calculs validés par des scholars internationaux.',
        priority: 'medium'
      }
    ]
  };

  useEffect(() => {
    const tips = helpDatabase[location] || helpDatabase['/'];
    setCurrentTips(tips);
    
    // Affichage automatique intelligent basé sur le comportement utilisateur
    const showDelay = location === '/' ? 3000 : 1500;
    const timer = setTimeout(() => {
      if (tips.some(tip => tip.priority === 'high')) {
        setIsVisible(true);
      }
    }, showDelay);

    return () => clearTimeout(timer);
  }, [location]);

  if (!isVisible || currentTips.length === 0) return null;

  const highPriorityTips = currentTips.filter(tip => tip.priority === 'high');
  const displayTips = highPriorityTips.length > 0 ? highPriorityTips : currentTips.slice(0, 2);

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-sm">
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-1 bg-blue-600 rounded-full">
                <Lightbulb className="h-3 w-3 text-white" />
              </div>
              <span className="font-semibold text-sm text-blue-800">Conseils Intelligents</span>
              <Badge variant="secondary" className="text-xs">Live</Badge>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="h-6 w-6 p-0 text-gray-400 hover:text-gray-600"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>

          <div className="space-y-3">
            {displayTips.map((tip, index) => (
              <div key={index} className="p-3 bg-white rounded-lg border border-blue-100">
                <div className="flex items-start gap-2">
                  <Zap className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-gray-900 mb-1">
                      {tip.title}
                    </h4>
                    <p className="text-xs text-gray-600 mb-2">
                      {tip.description}
                    </p>
                    {tip.action && (
                      <Button size="sm" variant="outline" className="text-xs h-6">
                        {tip.action}
                        <ChevronRight className="h-3 w-3 ml-1" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-blue-100">
            <div className="flex items-center gap-3 text-xs text-blue-700">
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                <span>2,847 actifs</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>Temps réel</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="text-xs h-6 text-blue-600"
            >
              Masquer
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}