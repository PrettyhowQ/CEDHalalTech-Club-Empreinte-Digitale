import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Search, 
  Zap, 
  CreditCard, 
  GraduationCap, 
  Building2, 
  Shield, 
  Calculator,
  Globe,
  Smartphone,
  Heart,
  TrendingUp,
  Users,
  ChevronRight,
  Star,
  Clock
} from 'lucide-react';
import { Link } from 'wouter';

export function QuickNavigation() {
  const [searchTerm, setSearchTerm] = useState('');

  const quickActions = [
    {
      title: 'Centre de Test',
      icon: Zap,
      description: 'Testez toutes les fonctionnalités',
      href: '/test-center',
      color: 'bg-gradient-to-r from-emerald-600 to-cyan-600',
      badge: 'Nouveau'
    },
    {
      title: 'CED Bank',
      icon: CreditCard,
      description: 'Banking halal complet',
      href: '/ced-bank',
      color: 'bg-blue-600',
      badge: 'Populaire'
    },
    {
      title: 'Formations',
      icon: GraduationCap,
      description: 'Formations professionnelles',
      href: '/formations',
      color: 'bg-purple-600',
      badge: 'Nouveau'
    },
    {
      title: 'TechForAll',
      icon: Building2,
      description: 'Dons technologiques',
      href: '/techforall',
      color: 'bg-green-600',
      badge: 'Impact'
    },
    {
      title: 'Fiqh Informatique',
      icon: Shield,
      description: '27,446+ règles tech halal',
      href: '/fiqh-informatique',
      color: 'bg-teal-600',
      badge: 'Expansion Golfe'
    },
    {
      title: 'Al-Aman Takaful',
      icon: Shield,
      description: 'Assurance islamique',
      href: '/al-aman-takaful',
      color: 'bg-orange-600',
      badge: 'Nouveau'
    },
    {
      title: 'Calculateur Zakat',
      icon: Calculator,
      description: 'Multi-devises instantané',
      href: '/zakat-calculator',
      color: 'bg-indigo-600',
      badge: 'Essentiel'
    },
    {
      title: 'Mode Prière',
      icon: Heart,
      description: 'Synchronisation satellitaire',
      href: '/mode-priere',
      color: 'bg-rose-600',
      badge: 'Spirituel'
    }
  ];

  const popularPages = [
    { name: 'Banking Halal', href: '/ced-bank', visits: '12.4K' },
    { name: 'Formations IA', href: '/formations', visits: '8.7K' },
    { name: 'Convertisseur', href: '/convertisseur', visits: '6.2K' },
    { name: 'TechForAll', href: '/techforall', visits: '5.1K' },
    { name: 'Conseiller IA', href: '/ai-advisor', visits: '4.8K' }
  ];

  const recentUpdates = [
    { feature: 'Super IARP Pro', time: '2h', status: 'Nouvelle version' },
    { feature: 'Banking Vocal Arabe', time: '4h', status: 'Activé' },
    { feature: 'Formations Blockchain', time: '6h', status: 'Disponible' }
  ];

  return (
    <div className="bg-white/95 backdrop-blur-sm border-b shadow-sm mb-6">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Barre de recherche rapide */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Recherche rapide : banking, formations, zakat..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
            <Zap className="h-4 w-4 mr-1" />
            Rechercher
          </Button>
        </div>

        {/* Actions rapides */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
          {quickActions.map((action, index) => (
            <Link key={index} href={action.href}>
              <Card className="hover:shadow-md transition-all duration-200 cursor-pointer group">
                <CardContent className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`p-2 rounded-lg ${action.color} text-white group-hover:scale-110 transition-transform`}>
                      <action.icon className="h-4 w-4" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {action.badge}
                    </Badge>
                  </div>
                  <h4 className="font-semibold text-sm">{action.title}</h4>
                  <p className="text-xs text-gray-600">{action.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Informations contextuelles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Pages populaires */}
          <Card>
            <CardContent className="p-3">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                Pages Populaires
              </h4>
              <div className="space-y-1">
                {popularPages.map((page, index) => (
                  <Link key={index} href={page.href}>
                    <div className="flex items-center justify-between text-xs hover:bg-gray-50 p-1 rounded cursor-pointer">
                      <span>{page.name}</span>
                      <span className="text-gray-500">{page.visits}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Mises à jour récentes */}
          <Card>
            <CardContent className="p-3">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-600" />
                Nouveautés
              </h4>
              <div className="space-y-1">
                {recentUpdates.map((update, index) => (
                  <div key={index} className="text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{update.feature}</span>
                      <span className="text-gray-500">{update.time}</span>
                    </div>
                    <div className="text-green-600">{update.status}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Statistiques rapides */}
          <Card>
            <CardContent className="p-3">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <Users className="h-4 w-4 text-purple-600" />
                Statistiques Live
              </h4>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>Utilisateurs actifs:</span>
                  <span className="font-semibold text-green-600">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span>Formations en cours:</span>
                  <span className="font-semibold text-blue-600">156</span>
                </div>
                <div className="flex justify-between">
                  <span>Transactions aujourd'hui:</span>
                  <span className="font-semibold text-purple-600">1,284</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}