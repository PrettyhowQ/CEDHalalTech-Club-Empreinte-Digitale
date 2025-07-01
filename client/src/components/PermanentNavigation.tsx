import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Menu, 
  X,
  CreditCard, 
  GraduationCap, 
  Building2, 
  Shield, 
  Calculator,
  Heart,
  Brain,
  BookOpen,
  Globe,
  Smartphone,
  TrendingUp,
  Users,
  Briefcase,
  Code,
  Database,
  ChevronRight,
  Search,
  Calendar
} from 'lucide-react';
import { Link } from 'wouter';

export function PermanentNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Tous vos modules existants dans votre App.tsx
  const allModules = [
    // Pages principales
    { title: 'Accueil', icon: TrendingUp, href: '/', category: 'Principal' },
    { title: 'Centre de Test', icon: Search, href: '/test-center', category: 'Principal' },
    
    // CORAN ET RÉCITATEURS
    { title: 'Écouter du Coran', icon: BookOpen, href: '/lecteur-coran', category: 'Spirituel' },
    { title: 'Récitateurs Coran', icon: BookOpen, href: '/lecteur-coran', category: 'Spirituel' },
    { title: 'Mishary Al-Afasy', icon: BookOpen, href: '/lecteur-coran?reciter=mishary', category: 'Spirituel' },
    { title: 'Al-Sudais', icon: BookOpen, href: '/lecteur-coran?reciter=sudais', category: 'Spirituel' },
    { title: 'Al-Shuraim', icon: BookOpen, href: '/lecteur-coran?reciter=shuraim', category: 'Spirituel' },
    { title: 'Saad Al-Ghamdi', icon: BookOpen, href: '/lecteur-coran?reciter=ghamdi', category: 'Spirituel' },
    { title: 'Coran Tajweed', icon: BookOpen, href: '/coran-tajweed', category: 'Spirituel' },
    { title: 'Coran Multilingue', icon: Globe, href: '/quran-multilingue', category: 'Spirituel' },
    { title: 'Quran Reader', icon: BookOpen, href: '/quran-reader', category: 'Spirituel' },
    
    { title: 'Formations', icon: GraduationCap, href: '/formations', category: 'Formation' },
    { title: 'Planning', icon: TrendingUp, href: '/planning', category: 'Organisation' },
    { title: 'Dashboard', icon: TrendingUp, href: '/dashboard', category: 'Principal' },
    
    // Finance & Banking
    { title: 'CED Bank', icon: CreditCard, href: '/ced-bank', category: 'Finance' },
    { title: 'Banking Digital', icon: CreditCard, href: '/banque-digitale', category: 'Finance' },
    { title: 'App Bancaire Mobile', icon: Smartphone, href: '/app-bancaire', category: 'Finance' },
    { title: 'Convertisseur Devises', icon: Calculator, href: '/convertisseur', category: 'Finance' },
    { title: 'Calculateur Zakat', icon: Calculator, href: '/zakat-calculator', category: 'Finance' },
    { title: 'Al-Aman Takaful', icon: Shield, href: '/al-aman-takaful', category: 'Finance' },
    { title: 'Banking Vocal Arabe', icon: Heart, href: '/voice-banking-arabic', category: 'Finance' },
    
    // TechForAll & Donations
    { title: 'TechForAll', icon: Building2, href: '/techforall', category: 'Social' },
    { title: 'Système Donation', icon: Heart, href: '/systeme-donation', category: 'Social' },
    { title: 'Costa del Sol', icon: Building2, href: '/costa-del-sol', category: 'Social' },
    { title: 'Boutique Solidaire', icon: Building2, href: '/boutique-solidaire', category: 'Social' },
    
    // IA & Formations
    { title: 'Super IARP Pro', icon: Brain, href: '/super-iarp-pro', category: 'IA' },
    { title: 'Générateurs IA', icon: Brain, href: '/generateurs-ia', category: 'IA' },
    { title: 'Coaching Mobile', icon: Smartphone, href: '/coaching', category: 'Formation' },
    { title: 'Institut CED Academy', icon: GraduationCap, href: '/institut-ced-academy', category: 'Formation' },
    { title: 'Interface Arabe', icon: Globe, href: '/interface-arabe', category: 'Formation' },
    { title: 'Traducteur Multilingue', icon: Globe, href: '/traducteur-multilingue', category: 'Formation' },
    { title: 'École de Langues', icon: Globe, href: '/language-learning', category: 'Formation' },
    
    // Fiqh & Spiritualité
    { title: 'Fiqh Informatique', icon: BookOpen, href: '/fiqh-informatique', category: 'Spirituel' },
    { title: 'Community Fiqh Guidelines', icon: Users, href: '/community-fiqh-guidelines', category: 'Spirituel' },
    { title: 'Spiritual Micro-Interactions', icon: Heart, href: '/spiritual-motivation', category: 'Spirituel' },
    { title: 'Guide Fiqh Complet', icon: BookOpen, href: '/fiqh-informatique-guide', category: 'Spirituel' },
    { title: 'Mode Prière', icon: Heart, href: '/mode-priere', category: 'Spirituel' },
    { title: 'Conseil Sharia IA', icon: Shield, href: '/sharia-advisor', category: 'Spirituel' },
    { title: 'Conformité Sharia 100%', icon: Shield, href: '/sharia-100-complete', category: 'Spirituel' },
    
    // Technologies & APIs
    { title: 'API Management', icon: Code, href: '/api-management', category: 'Tech' },
    { title: 'Apps Natives', icon: Smartphone, href: '/mobile-native-apps', category: 'Tech' },
    { title: 'Blockchain Halal', icon: Database, href: '/blockchain-trade', category: 'Tech' },
    { title: 'Crypto Halal Engine', icon: Database, href: '/crypto-sharia', category: 'Tech' },
    { title: 'DeFi Islamique', icon: TrendingUp, href: '/islamic-defi', category: 'Tech' },
    
    // Gestion & RH
    { title: 'Gestion RH', icon: Briefcase, href: '/hr-management', category: 'Gestion' },
    { title: 'Générateur Contrats', icon: Briefcase, href: '/contract-generator', category: 'Gestion' },
    { title: 'Logistique Mobile', icon: Smartphone, href: '/logistics-mobile', category: 'Gestion' },
    { title: 'Comptes Famille', icon: Users, href: '/family-banking', category: 'Gestion' },
    
    // Analytics & Monitoring
    { title: 'Analytics Avancées', icon: TrendingUp, href: '/analytics-avancees', category: 'Analytics' },
    { title: 'Vue Ensemble', icon: Globe, href: '/vue-ensemble', category: 'Analytics' },
    { title: 'Prévisionnel', icon: TrendingUp, href: '/previsionnel', category: 'Analytics' }
  ];

  const uniqueCategories = new Set(allModules.map(m => m.category));
  const categories = Array.from(uniqueCategories);

  const filteredModules = allModules.filter(module =>
    module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Bouton d'ouverture fixe */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
        size="sm"
      >
        <Menu className="h-4 w-4 mr-2" />
        Tous vos modules ({allModules.length})
      </Button>

      {/* Menu complet */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed left-0 top-0 h-full w-96 bg-white shadow-xl overflow-hidden">
            <div className="p-4 border-b bg-blue-600 text-white">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Navigation CED Complète</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-blue-700"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
                <Input
                  placeholder="Rechercher un module..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-blue-400 text-white placeholder:text-blue-200"
                />
              </div>
            </div>

            <div className="h-full overflow-y-auto pb-20">
              {categories.map(category => {
                const categoryModules = filteredModules.filter(m => m.category === category);
                if (categoryModules.length === 0) return null;

                return (
                  <div key={category} className="p-4 border-b">
                    <h3 className="font-semibold text-sm text-gray-600 mb-3 flex items-center gap-2">
                      {category}
                      <Badge variant="secondary" className="text-xs">
                        {categoryModules.length}
                      </Badge>
                    </h3>
                    
                    <div className="space-y-1">
                      {categoryModules.map((module, index) => (
                        <Link key={index} href={module.href}>
                          <div 
                            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer group transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="flex items-center gap-3">
                              <module.icon className="h-4 w-4 text-blue-600" />
                              <span className="font-medium text-sm">{module.title}</span>
                            </div>
                            <ChevronRight className="h-3 w-3 text-gray-400 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
              
              {filteredModules.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>Aucun module trouvé</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}