import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
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
  Zap,
  Utensils,
  Settings,
  Star,
  Award,
  Target,
  Clock,

  Briefcase,
  Code,
  Database,
  ChevronRight
} from 'lucide-react';
import { Link } from 'wouter';

export function AllModulesWidget() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const modules = [
    // PÔLE 1: PILOTAGE & VISION
    { title: 'Dashboard Central CED', icon: TrendingUp, href: '/dashboard', category: 'pilotage', badge: 'Central' },
    { title: 'Analyse Stratégique', icon: Target, href: '/analyse-strategique', category: 'pilotage', badge: 'Stratégie' },
    { title: 'Prévisionnel Financier', icon: Target, href: '/previsionnel', category: 'pilotage', badge: 'Finance' },
    { title: 'Analytics Avancées', icon: TrendingUp, href: '/analytics-avancees', category: 'pilotage', badge: 'IA' },
    { title: 'Vue Ensemble', icon: Globe, href: '/vue-ensemble', category: 'pilotage', badge: 'Global' },

    // PÔLE 2: FORMATIONS & COACHING
    { title: 'Super IARP Pro', icon: Brain, href: '/super-iarp-pro', category: 'formations', badge: 'IA Premium' },
    { title: 'Institut CED Academy', icon: GraduationCap, href: '/institut-ced-academy', category: 'formations', badge: 'Académie' },
    { title: 'Formations Professionnelles', icon: GraduationCap, href: '/formations', category: 'formations', badge: 'Pro' },
    { title: 'Coaching Mobile', icon: Smartphone, href: '/coaching', category: 'formations', badge: 'Mobile' },
    { title: 'École Arabe CED', icon: BookOpen, href: '/interface-arabe', category: 'formations', badge: 'Arabe' },
    { title: 'Traducteur Multilingue', icon: Globe, href: '/traducteur-multilingue', category: 'formations', badge: 'Langues' },
    { title: 'École de Langues', icon: Globe, href: '/language-learning', category: 'formations', badge: 'International' },

    // PÔLE 3: FINANCE & SÉCURITÉ
    { title: 'CED Bank', icon: CreditCard, href: '/ced-bank', category: 'finance', badge: '0% Intérêt' },
    { title: 'Banking Mobile', icon: Smartphone, href: '/mobile-banking', category: 'finance', badge: 'App' },
    { title: 'Canal AED Alimentation', icon: Utensils, href: '/aed-channel', category: 'finance', badge: 'Halal Food' },
    { title: 'Al-Aman Takaful', icon: Shield, href: '/al-aman-takaful', category: 'finance', badge: 'Assurance' },
    { title: 'Calculateur Zakat', icon: Calculator, href: '/zakat-calculator', category: 'finance', badge: 'Multi-devises' },
    { title: 'Convertisseur Devises', icon: Calculator, href: '/convertisseur', category: 'finance', badge: 'Instantané' },
    { title: 'Banking Vocal Arabe', icon: Heart, href: '/voice-banking-arabic', category: 'finance', badge: 'Vocal' },
    { title: 'Blockchain Halal', icon: Database, href: '/blockchain-trade', category: 'finance', badge: 'Blockchain' },
    { title: 'DeFi Islamique', icon: TrendingUp, href: '/islamic-defi', category: 'finance', badge: 'DeFi' },

    // PÔLE 4: TECHNOLOGIES & PLATEFORMES
    { title: 'TechForAll', icon: Building2, href: '/techforall', category: 'tech', badge: 'Solidaire' },
    { title: 'API CED Bank', icon: Code, href: '/api-management', category: 'tech', badge: 'Développeurs' },
    { title: 'Apps Natives', icon: Smartphone, href: '/mobile-native-apps', category: 'tech', badge: 'iOS/Android' },
    { title: 'Intégrations Stratégiques', icon: Database, href: '/integrations-strategiques', category: 'tech', badge: 'Enterprise' },
    { title: 'Générateurs IA', icon: Brain, href: '/generateurs-ia', category: 'tech', badge: 'IA Tools' },
    { title: 'Crypto Halal Engine', icon: Database, href: '/crypto-sharia', category: 'tech', badge: 'Crypto' },

    // PÔLE 5: ÉTHIQUE & SPIRITUALITÉ
    { title: 'Fiqh Informatique', icon: BookOpen, href: '/fiqh-informatique', category: 'ethique', badge: '27,446 Règles' },
    { title: 'Mode Prière', icon: Heart, href: '/mode-priere', category: 'ethique', badge: 'Spirituel' },
    { title: 'Conseil Sharia IA', icon: Shield, href: '/sharia-advisor', category: 'ethique', badge: 'Temps Réel' },
    { title: 'Synchronisation Prière', icon: Clock, href: '/satellite-prayer-sync', category: 'ethique', badge: 'Satellitaire' },
    { title: 'Conformité 100% Sharia', icon: Award, href: '/sharia-100-complete', category: 'ethique', badge: '100% Halal' },

    // PÔLE 6: SOLIDARITÉ & SOCIAL
    { title: 'Système Donation', icon: Heart, href: '/systeme-donation', category: 'social', badge: 'Automatique' },
    { title: 'Boutique Solidaire', icon: Building2, href: '/boutique-solidaire', category: 'social', badge: 'Économie Circulaire' },
    { title: 'Construction Écologique', icon: Building2, href: '/ecological-construction', category: 'social', badge: 'Écologie' },
    { title: 'Costa del Sol', icon: Building2, href: '/costa-del-sol', category: 'social', badge: 'Logistique' },

    // PÔLE 7: UTILISATEURS & SERVICES
    { title: 'Comptes Famille', icon: Users, href: '/family-banking', category: 'users', badge: 'Famille' },
    { title: 'Gestion RH', icon: Briefcase, href: '/hr-management', category: 'users', badge: 'Équipe' },
    { title: 'Logistique Mobile', icon: Smartphone, href: '/logistics-mobile', category: 'users', badge: 'Terrain' },
    { title: 'Générateur Contrats', icon: Briefcase, href: '/contract-generator', category: 'users', badge: 'Légal' },
    { title: 'Paie Automatisée', icon: Calculator, href: '/payslip-generator', category: 'users', badge: 'Salaires' },

    // PÔLE 8: DÉVELOPPEMENT DURABLE
    { title: 'Impact Environnemental', icon: Globe, href: '/impact-environnemental', category: 'durable', badge: 'Écologie' },
    { title: 'Simulateur Recyclage', icon: Globe, href: '/simulateur-recyclage', category: 'durable', badge: 'Recyclage' },
    { title: 'Équipements Marins', icon: Building2, href: '/materiel-marin', category: 'durable', badge: 'Marine' }
  ];

  const categories = [
    { id: 'all', label: 'Tous les modules', count: modules.length },
    { id: 'pilotage', label: 'Pilotage & Vision', count: modules.filter(m => m.category === 'pilotage').length },
    { id: 'formations', label: 'Formations & Coaching', count: modules.filter(m => m.category === 'formations').length },
    { id: 'finance', label: 'Finance & Sécurité', count: modules.filter(m => m.category === 'finance').length },
    { id: 'tech', label: 'Technologies & Plateformes', count: modules.filter(m => m.category === 'tech').length },
    { id: 'ethique', label: 'Éthique & Spiritualité', count: modules.filter(m => m.category === 'ethique').length },
    { id: 'social', label: 'Solidarité & Social', count: modules.filter(m => m.category === 'social').length },
    { id: 'users', label: 'Utilisateurs & Services', count: modules.filter(m => m.category === 'users').length },
    { id: 'durable', label: 'Développement Durable', count: modules.filter(m => m.category === 'durable').length }
  ];

  const filteredModules = modules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         module.badge.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || module.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Card className="w-96 max-h-96 bg-white/95 backdrop-blur-sm shadow-xl border-2">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <span>Tous vos Modules CED</span>
            <Badge variant="secondary">{filteredModules.length}</Badge>
          </CardTitle>
          
          <div className="space-y-2">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Rechercher un module..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-8"
              />
            </div>
            
            <div className="flex gap-1 flex-wrap">
              {categories.slice(0, 4).map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.id)}
                  className="text-xs h-6"
                >
                  {cat.label.split(' ')[0]} ({cat.count})
                </Button>
              ))}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0 max-h-64 overflow-y-auto">
          <div className="space-y-1">
            {filteredModules.map((module, index) => (
              <Link key={index} href={module.href}>
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer group transition-colors">
                  <div className="flex items-center gap-2">
                    <module.icon className="h-4 w-4 text-blue-600" />
                    <div>
                      <div className="font-medium text-sm">{module.title}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Badge variant="secondary" className="text-xs">{module.badge}</Badge>
                    <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {filteredModules.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>Aucun module trouvé</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}