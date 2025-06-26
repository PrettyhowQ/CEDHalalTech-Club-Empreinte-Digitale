import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Building2, 
  Landmark, 
  Shield, 
  Cloud, 
  CreditCard, 
  BookOpen, 
  Trophy,
  GraduationCap,
  Target,
  Dumbbell,
  Apple,
  BarChart3,
  Wrench,
  Heart,
  Building,
  Zap,
  DollarSign,
  Users,
  FileSliders,
  Wallet,
  Smartphone,
  Settings,
  Award,
  Phone,
  BookMarked,
  Home,
  MapPin,
  Lock,
  Cpu,
  Globe,
  TrendingUp,
  Search,
  ChevronRight,
  Star,
  PiggyBank
} from 'lucide-react';
import { Link } from 'wouter';

interface ModuleItem {
  id: string;
  title: string;
  description: string;
  icon: any;
  route: string;
  status: 'active' | 'premium' | 'coming-soon';
  category: string;
}

const modules: ModuleItem[] = [
  // PÔLE GOUVERNANCE & DIRECTION
  { id: 'overview', title: 'Vue d\'Ensemble', description: 'Tableau de bord principal', icon: BarChart3, route: '/', status: 'active', category: 'gouvernance' },
  { id: 'premium-dashboard', title: 'Dashboard Premium', description: 'Analyse avancée temps réel', icon: Star, route: '/premium-dashboard', status: 'premium', category: 'gouvernance' },
  { id: 'team-management', title: 'Gestion Équipe', description: 'RH et management complet', icon: Users, route: '/hr-management', status: 'active', category: 'gouvernance' },
  { id: 'payroll', title: 'Fiches de Paie', description: 'Génération automatique', icon: FileSliders, route: '/pay-slip-generator', status: 'active', category: 'gouvernance' },
  { id: 'contacts', title: 'Contacts Complets', description: 'CRM et relations clients', icon: Phone, route: '/contact-complet', status: 'active', category: 'gouvernance' },

  // PÔLE SERVICES FINANCIERS ISLAMIQUES
  { id: 'ced-bank', title: 'CED Bank', description: 'Banque digitale 100% halal', icon: Landmark, route: '/ced-bank', status: 'active', category: 'finance' },
  { id: 'al-aman', title: 'Al-Aman CED Takaful', description: 'Assurance islamique complète', icon: Shield, route: '/al-aman-ced-insurance', status: 'active', category: 'finance' },
  { id: 'gold-cards', title: 'Cartes Gold Yakoubi', description: '5 tiers de cartes premium', icon: CreditCard, route: '/ced-bank-cards', status: 'active', category: 'finance' },
  { id: 'bank-accounts', title: 'CED Bank Comptes', description: 'Comptes familiaux sécurisés', icon: PiggyBank, route: '/family-banking', status: 'active', category: 'finance' },
  { id: 'dubai-investments', title: 'Investissements Dubaï', description: 'Portfolio immobilier Golfe', icon: Building2, route: '/dubai-investments', status: 'active', category: 'finance' },
  { id: 'sharia-advisor', title: 'Conseil Sharia', description: 'Conformité religieuse 24/7', icon: MapPin, route: '/sharia-advisor', status: 'active', category: 'finance' },

  // PÔLE ÉDUCATION & FORMATION
  { id: 'fiqh-guide', title: 'Guide Fiqh Informatique', description: '23,456+ règles tech halal', icon: BookOpen, route: '/fiqh-informatique', status: 'active', category: 'education' },
  { id: 'gulf-expansion', title: 'Expansion Golfe 100%', description: 'Déploiement marchés arabes', icon: Trophy, route: '/fiqh-expansion', status: 'active', category: 'education' },
  { id: 'formations', title: 'Formations', description: 'Catalogue complet certifié', icon: GraduationCap, route: '/formations', status: 'active', category: 'education' },
  { id: 'employee-training', title: 'Formation Employés', description: 'Développement professionnel', icon: Award, route: '/employee-training-platform', status: 'active', category: 'education' },
  { id: 'arabic-interface', title: 'Institut CED Academy', description: 'École arabe 6 volumes Médine', icon: BookMarked, route: '/interface-arabe', status: 'active', category: 'education' },
  { id: 'quran-listening', title: 'Écoute du Coran', description: '8 récitateurs renommés', icon: BookMarked, route: '/quran-listening', status: 'active', category: 'education' },

  // PÔLE BIEN-ÊTRE & SANTÉ
  { id: 'sport-coaching', title: 'Coaching Sport', description: 'Programmes fitness personnalisés', icon: Dumbbell, route: '/coaching-mobile', status: 'active', category: 'wellbeing' },
  { id: 'nutrition', title: 'Nutrition Souheila', description: 'Conseils diététiques experts', icon: Apple, route: '/nutrition-souheila', status: 'active', category: 'wellbeing' },
  { id: 'strategic-analysis', title: 'Analyse Stratégique', description: 'Études de marché avancées', icon: TrendingUp, route: '/analyse-strategique', status: 'active', category: 'wellbeing' },

  // PÔLE TECHNOLOGIE & INNOVATION
  { id: 'ced-cloud', title: 'CED Cloud Platform', description: 'Infrastructure cloud sécurisée', icon: Cloud, route: '/ced-cloud', status: 'active', category: 'technology' },
  { id: 'ai-ethics', title: 'IA Éthique', description: 'Intelligence artificielle responsable', icon: Cpu, route: '/ai-advisor', status: 'active', category: 'technology' },
  { id: 'innovation-roadmap', title: 'Innovation Roadmap', description: 'Feuille de route technologique', icon: Target, route: '/innovation-roadmap', status: 'active', category: 'technology' },
  { id: 'mobile-suite', title: 'Suite Mobile Pro', description: 'Applications natives iOS/Android', icon: Smartphone, route: '/mobile-professional-suite', status: 'active', category: 'technology' },
  { id: 'banking-security', title: 'Sécurité Bancaire', description: 'Protection 2FA avancée', icon: Lock, route: '/banking-security', status: 'active', category: 'technology' },
  { id: 'api-management', title: 'Gestion APIs', description: 'Interface développeur complète', icon: Settings, route: '/api-management', status: 'active', category: 'technology' },
  { id: 'native-apps', title: 'Apps Natives', description: 'Applications mobiles dédiées', icon: Phone, route: '/mobile-native-apps', status: 'active', category: 'technology' },
  { id: 'ai-analytics', title: 'Analytics IA', description: 'Analyse intelligente données', icon: BarChart3, route: '/analytics-avancees', status: 'active', category: 'technology' },
  { id: 'integrations', title: 'Intégrations', description: 'Connectivité écosystème', icon: Globe, route: '/integrations-strategiques', status: 'active', category: 'technology' },

  // PÔLE IMPACT SOCIAL & ENVIRONNEMENTAL
  { id: 'techforall', title: 'TechForAll', description: 'Plateforme donations tech', icon: Heart, route: '/techforall', status: 'active', category: 'social' },
  { id: 'auto-donations', title: 'Donations Automatiques', description: 'Système de dons intelligent', icon: Zap, route: '/donation-system', status: 'active', category: 'social' },
  { id: 'solidarity-shop', title: 'Boutique Solidaire', description: 'Commerce équitable tech', icon: Building, route: '/costa-del-sol', status: 'active', category: 'social' },
  { id: 'ecological-construction', title: 'Construction Écologique', description: 'Habitat durable innovant', icon: Home, route: '/ecological-construction-donations', status: 'active', category: 'social' },
  { id: 'techforall-dashboard', title: 'TechForAll Dashboard', description: 'Suivi impact social', icon: TrendingUp, route: '/techforall-dashboard', status: 'active', category: 'social' },

  // PÔLE LOGISTIQUE & OPÉRATIONS
  { id: 'logistics-app', title: 'App Logistique', description: 'Gestion opérationnelle mobile', icon: Wrench, route: '/logistics-app', status: 'active', category: 'operations' },
  { id: 'payment-processing', title: 'Inscription & Paiement', description: 'Processus automatisé sécurisé', icon: Wallet, route: '/formation-payment', status: 'active', category: 'operations' },
  { id: 'catalog', title: 'Catalogue Complet', description: 'Base de données formations', icon: BookOpen, route: '/catalogue-formations', status: 'active', category: 'operations' },
];

const categories = {
  gouvernance: { name: 'Gouvernance & Direction', color: 'bg-blue-500', count: 0 },
  finance: { name: 'Services Financiers Islamiques', color: 'bg-green-500', count: 0 },
  education: { name: 'Éducation & Formation', color: 'bg-purple-500', count: 0 },
  wellbeing: { name: 'Bien-être & Santé', color: 'bg-orange-500', count: 0 },
  technology: { name: 'Technologie & Innovation', color: 'bg-cyan-500', count: 0 },
  social: { name: 'Impact Social & Environnemental', color: 'bg-pink-500', count: 0 },
  operations: { name: 'Logistique & Opérations', color: 'bg-amber-500', count: 0 },
};

// Calculer le nombre de modules par catégorie
modules.forEach(module => {
  if (categories[module.category as keyof typeof categories]) {
    categories[module.category as keyof typeof categories].count++;
  }
});

export default function UnifiedDashboard() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredModules = modules.filter(module => {
    const matchesCategory = selectedCategory === 'all' || module.category === selectedCategory;
    const matchesSearch = module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         module.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Actif</Badge>;
      case 'premium':
        return <Badge className="bg-yellow-100 text-yellow-800">Premium</Badge>;
      case 'coming-soon':
        return <Badge className="bg-gray-100 text-gray-800">Bientôt</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* En-tête avec titre et statistiques */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Club Empreinte Digitale
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Propulsé par PrettyhowQ
          </p>
          <p className="text-lg text-gray-500">
            Écosystème technologique islamique complet • 40 modules intégrés • 7 pôles thématiques
          </p>
        </div>

        {/* Filtres et recherche */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Rechercher un module..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-12"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                className="h-12"
              >
                Tous ({modules.length})
              </Button>
              {Object.entries(categories).map(([key, category]) => (
                <Button
                  key={key}
                  variant={selectedCategory === key ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(key)}
                  className="h-12"
                >
                  {category.name.split(' ')[0]} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Vue par catégories */}
        {selectedCategory === 'all' ? (
          <div className="space-y-12">
            {Object.entries(categories).map(([key, category]) => {
              const categoryModules = modules.filter(m => m.category === key);
              if (categoryModules.length === 0) return null;

              return (
                <div key={key}>
                  <div className="flex items-center mb-6">
                    <div className={`w-4 h-4 rounded-full ${category.color} mr-4`}></div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {category.name}
                    </h2>
                    <Badge className="ml-4 bg-gray-100 text-gray-800">
                      {category.count} modules
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categoryModules.map((module) => (
                      <Link key={module.id} href={module.route}>
                        <Card className="h-full hover:shadow-lg transition-all duration-200 cursor-pointer group">
                          <CardHeader className="pb-4">
                            <div className="flex items-start justify-between">
                              <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                <module.icon className="w-6 h-6 text-white" />
                              </div>
                              {getStatusBadge(module.status)}
                            </div>
                            <CardTitle className="text-lg group-hover:text-primary-600 transition-colors">
                              {module.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 text-sm mb-4">
                              {module.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500 capitalize">
                                {category.name}
                              </span>
                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredModules.map((module) => {
              const category = categories[module.category as keyof typeof categories];
              return (
                <Link key={module.id} href={module.route}>
                  <Card className="h-full hover:shadow-lg transition-all duration-200 cursor-pointer group">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <module.icon className="w-6 h-6 text-white" />
                        </div>
                        {getStatusBadge(module.status)}
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary-600 transition-colors">
                        {module.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">
                        {module.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 capitalize">
                          {category.name}
                        </span>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        )}

        {/* Statistiques globales */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">40</div>
              <div className="text-gray-600">Modules Intégrés</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">7</div>
              <div className="text-gray-600">Pôles Thématiques</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Conformité Sharia</div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}