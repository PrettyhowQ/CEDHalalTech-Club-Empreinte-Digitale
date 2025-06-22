import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageSelector } from '@/components/language/LanguageSelector';
import { VoiceAssistant } from '@/components/voice/VoiceAssistant';
import { LiveClock } from '@/components/ui/LiveClock';
import { Brain, Menu, X } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { isAuthenticated, user } = useAuth();
  const { currentLanguage } = useLanguage();

  const navigation = [
    { name: 'Dashboard Premium ⭐', href: '/premium-dashboard', priority: true, premium: true },
    { name: 'CED Bank 🏦', href: '/banque', priority: true },
    { name: 'Cartes Gold Yakoubi 💳', href: '/ced-bank-cards', priority: true, premium: true },
    { name: 'Formations', href: '/formations' },
    { name: 'Inscription & Paiement', href: '/formations-paiement', priority: true },
    { name: 'Catalogue Complet', href: '/catalogue' },
    { name: 'Coaching Sport', href: '/coaching' },
    { name: 'Nutrition Souheila', href: '/nutrition' },
    { name: 'Analyse Stratégique', href: '/analyse-strategique' },
    { name: 'Ressources', href: '/ressources' },
    { name: 'TechForAll', href: '/techforall', priority: true },
    { name: 'Donations Automatiques', href: '/systeme-donation', priority: true },
    { name: 'Boutique Solidaire', href: '/boutique' },
    { name: 'IA Éthique', href: '/ia-ethique' },
    { name: 'Centre Financier', href: '/previsionnel' },
    { name: 'Investissements Dubaï', href: '/dubai-investments' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Brain className="text-white text-lg" />
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-900">Club Empreinte Digitale</h1>
                <p className="text-sm text-accent-500 font-medium">Propulsé par PrettyhowQ</p>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  item.premium
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:from-yellow-600 hover:to-orange-600 shadow-md font-bold'
                    : item.priority 
                      ? 'bg-green-500 text-white rounded-lg hover:bg-green-600 shadow-md'
                      : location === item.href
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <LanguageSelector />
            <VoiceAssistant />
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard">
                  <Button variant="outline" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <a href="/api/logout">
                  <Button variant="ghost" size="sm">
                    Déconnexion
                  </Button>
                </a>
              </div>
            ) : (
              <a href="/api/login">
                <Button size="sm">
                  Connexion
                </Button>
              </a>
            )}
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    location === item.href
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="px-3 py-2">
                <LanguageSelector />
              </div>
              
              <div className="px-3 py-2">
                <VoiceAssistant />
              </div>
              
              <div className="px-3 py-2">
                {isAuthenticated ? (
                  <div className="space-y-2">
                    <Link href="/dashboard">
                      <Button variant="outline" size="sm" className="w-full">
                        Dashboard
                      </Button>
                    </Link>
                    <a href="/api/logout">
                      <Button variant="ghost" size="sm" className="w-full">
                        Déconnexion
                      </Button>
                    </a>
                  </div>
                ) : (
                  <a href="/api/login">
                    <Button size="sm" className="w-full">
                      Connexion
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
