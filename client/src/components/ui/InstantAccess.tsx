import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  CreditCard, 
  GraduationCap, 
  Calculator,
  Heart,
  Building2,
  ArrowRight,
  Star,
  Clock
} from 'lucide-react';
import { Link } from 'wouter';

export function InstantAccess() {
  const instantActions = [
    {
      title: 'CED Bank',
      subtitle: '0% intérêt • 100% halal',
      icon: CreditCard,
      href: '/ced-bank',
      color: 'from-blue-600 to-blue-700',
      hot: true
    },
    {
      title: 'Zakat Calculator',
      subtitle: 'Multi-devises instantané',
      icon: Calculator,
      href: '/zakat-calculator',
      color: 'from-green-600 to-green-700',
      hot: false
    },
    {
      title: 'Formations Pro',
      subtitle: '156 cours disponibles',
      icon: GraduationCap,
      href: '/formations',
      color: 'from-purple-600 to-purple-700',
      hot: true
    },
    {
      title: 'Mode Prière',
      subtitle: 'Sync satellitaire GPS',
      icon: Heart,
      href: '/mode-priere',
      color: 'from-rose-600 to-rose-700',
      hot: false
    },
    {
      title: 'TechForAll',
      subtitle: 'Dons technologiques',
      icon: Building2,
      href: '/techforall',
      color: 'from-emerald-600 to-emerald-700',
      hot: false
    }
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <Card className="w-72 bg-white/95 backdrop-blur-sm shadow-xl border-2">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="h-4 w-4 text-blue-600" />
            <span className="font-semibold text-sm">Accès Rapide</span>
            <Badge variant="secondary" className="text-xs">Live</Badge>
          </div>
          
          <div className="space-y-2">
            {instantActions.map((action, index) => (
              <Link key={index} href={action.href}>
                <div className={`p-3 rounded-lg bg-gradient-to-r ${action.color} text-white cursor-pointer hover:scale-105 transition-all duration-200 group`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <action.icon className="h-4 w-4" />
                      <div>
                        <div className="font-medium text-sm flex items-center gap-1">
                          {action.title}
                          {action.hot && <Star className="h-3 w-3 fill-current" />}
                        </div>
                        <div className="text-xs opacity-90">{action.subtitle}</div>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className="flex items-center justify-between text-xs text-gray-600">
              <span>2,847 utilisateurs actifs</span>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>Temps réel</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}