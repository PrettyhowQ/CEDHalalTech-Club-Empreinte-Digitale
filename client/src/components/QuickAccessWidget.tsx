import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Calculator,
  CreditCard,
  Star,
  Heart,
  Users,
  TrendingUp,
  Search,
  Settings,
  Mic
} from 'lucide-react';
import { Link, useLocation } from 'wouter';

interface QuickAccessWidgetProps {
  currentPage?: string;
}

export default function QuickAccessWidget({ currentPage }: QuickAccessWidgetProps) {
  const [location] = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  const menuItems = [
    {
      id: 'ced-bank',
      title: 'CED Bank ⭐',
      subtitle: '0% intérêt • 100% halal',
      icon: CreditCard,
      href: '/ced-bank',
      color: 'bg-blue-600 hover:bg-blue-700',
      isActive: location.includes('/ced-bank')
    },
    {
      id: 'zakat-calculator',
      title: 'Zakat Calculator',
      subtitle: 'Multi-devises instantané',
      icon: Calculator,
      href: '/zakat-calculator',
      color: 'bg-emerald-600 hover:bg-emerald-700',
      isActive: location.includes('/zakat-calculator')
    },
    {
      id: 'formations-pro',
      title: 'Formations Pro ⭐',
      subtitle: '156 cours disponibles',
      icon: Star,
      href: '/formations',
      color: 'bg-purple-600 hover:bg-purple-700',
      isActive: location.includes('/formations')
    },
    {
      id: 'mode-priere',
      title: 'Mode Prière',
      subtitle: 'Sync satellitaire GPS',
      icon: Heart,
      href: '/mode-priere',
      color: 'bg-red-600 hover:bg-red-700',
      isActive: location.includes('/mode-priere')
    },
    {
      id: 'techforall',
      title: 'TechForAll',
      subtitle: 'Dons technologiques',
      icon: Users,
      href: '/techforall',
      color: 'bg-teal-600 hover:bg-teal-700',
      isActive: location.includes('/techforall')
    }
  ];

  const filteredItems = menuItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      {/* Header avec recherche */}
      <CardHeader className="bg-gray-50 p-4 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-800 text-sm">Club Empreinte Digitale</h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-blue-600">Accès Rapide</span>
              </div>
              <Badge className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">Live</Badge>
            </div>
          </div>
        </div>
        <div className="relative">
          <Input
            type="text"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg pl-8 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" />
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {/* Menu Items */}
        <div className="divide-y divide-gray-100">
          {filteredItems.map((item) => (
            <Link key={item.id} href={item.href}>
              <div 
                className={`
                  ${item.color} text-white p-4 flex items-center justify-between transition-colors cursor-pointer relative
                  ${item.isActive ? 'ring-2 ring-yellow-400 ring-inset' : ''}
                `}
              >
                {item.isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400"></div>
                )}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="text-xs opacity-90">{item.subtitle}</p>
                  </div>
                </div>
                <div className="text-lg">→</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="bg-gray-50 p-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
            <span className="font-medium">2,847 utilisateurs actifs</span>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 text-gray-500">⏰</div>
              <span>Temps réel</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs">💪</span>
            <span className="text-xs text-gray-500">Renforcement Adaptatif</span>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '75%'}}></div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="bg-white p-4 flex gap-2">
          <Link href="/dashboard" className="flex-1">
            <button className="w-full bg-emerald-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Commencer
            </button>
          </Link>
          <Link href="/settings">
            <button className="bg-gray-100 text-gray-700 text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
              <Settings className="w-6 h-6" />
            </button>
          </Link>
          <Link href="/voice-banking-arabic">
            <button className="bg-orange-400 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-orange-500 transition-colors">
              <Mic className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </CardContent>
    </div>
  );
}