import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { 
  BookOpen, 
  Headphones, 
  Building,
  GraduationCap,
  Shield,
  Heart,
  Globe,
  Briefcase,
  Users,
  Star,
  Play,
  CreditCard,
  Cloud,
  Smartphone,
  TestTube,
  BarChart3,
  FileText,
  Search
} from 'lucide-react';

export function CentralDashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  const mainServices = [
    {
      id: 'quran',
      title: 'Récitateurs Coran',
      subtitle: '8+ récitateurs authentiques',
      icon: Headphones,
      href: '/lecteur-coran',
      color: 'from-green-600 to-emerald-700',
      category: 'Spirituel',
      description: 'Mishary Al-Afasy, Al-Sudais, Al-Shuraim...',
      isTop: true
    },
    {
      id: 'bank',
      title: 'CED Bank',
      subtitle: 'Banking halal 0% intérêt',
      icon: Building,
      href: '/banque',
      color: 'from-blue-600 to-cyan-700',
      category: 'Finance',
      description: 'Comptes, cartes, virements, épargne',
      isTop: true
    },
    {
      id: 'academy',
      title: 'Institut CED Academy',
      subtitle: 'Formations islamiques certifiées',
      icon: GraduationCap,
      href: '/institut-ced-academy',
      color: 'from-purple-600 to-indigo-700',
      category: 'Éducation',
      description: 'Fiqh, Arabe, IA éthique, Blockchain halal',
      isTop: true
    },
    {
      id: 'insurance',
      title: 'Al-Aman Takaful',
      subtitle: 'Assurance islamique',
      icon: Shield,
      href: '/al-aman-ced-prototype',
      color: 'from-orange-600 to-red-700',
      category: 'Assurance',
      description: 'Couverture famille, santé, véhicules',
      isTop: true
    },
    {
      id: 'techforall',
      title: 'TechForAll',
      subtitle: 'Dons technologiques',
      icon: Heart,
      href: '/techforall',
      color: 'from-pink-600 to-rose-700',
      category: 'Solidaire',
      description: 'Construction écologique, matériel, véhicules'
    },
    {
      id: 'cloud',
      title: 'Cloud Halal 100%',
      subtitle: 'Infrastructure islamique',
      icon: Cloud,
      href: '/cloud-halal',
      color: 'from-teal-600 to-cyan-700',
      category: 'Tech',
      description: 'Data centers Mecque, Médine, Dubaï, KL'
    },
    {
      id: 'portfolio',
      title: 'Portfolio Complet',
      subtitle: 'Projets réalisés',
      icon: Briefcase,
      href: '/portfolio-web',
      color: 'from-gray-600 to-slate-700',
      category: 'Portfolio',
      description: '70+ projets, applications, systèmes'
    },
    {
      id: 'team',
      title: 'Gestion Équipe',
      subtitle: 'RH & Paies',
      icon: Users,
      href: '/tableau-bord-equipe',
      color: 'from-amber-600 to-yellow-700',
      category: 'RH',
      description: 'Fiches paie, contrats, planning'
    }
  ];

  const quickAccess = [
    { name: 'Tests', href: '/test-center', icon: TestTube, color: 'emerald' },
    { name: 'Cartes', href: '/ced-bank-cards', icon: CreditCard, color: 'blue' },
    { name: 'Apps', href: '/apps-natives', icon: Smartphone, color: 'purple' },
    { name: 'Analytics', href: '/analytics-avancees', icon: BarChart3, color: 'orange' },
    { name: 'Fiqh', href: '/fiqh-informatique', icon: FileText, color: 'green' },
    { name: 'Premium', href: '/premium-dashboard', icon: Star, color: 'yellow' }
  ];

  const filteredServices = mainServices.filter(service =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* BOUTON CORAN TRÈS VISIBLE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-8"
        >
          <Link href="/lecteur-coran">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-2xl p-8 shadow-2xl mb-6 cursor-pointer transform transition-all duration-300 hover:shadow-3xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Headphones className="h-8 w-8 text-white" />
                </div>
                <div className="text-left">
                  <h2 className="text-3xl font-bold mb-2">🎧 ÉCOUTER LE CORAN</h2>
                  <p className="text-lg opacity-90">Mishary Al-Afasy • Al-Sudais • Al-Shuraim</p>
                  <p className="text-sm opacity-75">Cliquez ici pour accéder aux récitateurs</p>
                </div>
                <Play className="h-12 w-12 text-white ml-4" />
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Header avec recherche */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent mb-4">
            Tableau de Bord Central CED
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Tout à portée de main - Accès direct à tous vos services
          </p>
          
          {/* Barre de recherche */}
          <div className="relative max-w-md mx-auto mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Rechercher un service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </motion.div>

        {/* Accès rapide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Accès Rapide</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {quickAccess.map((item, index) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`p-4 bg-${item.color}-100 hover:bg-${item.color}-200 rounded-lg text-center cursor-pointer transition-all group`}
                >
                  <item.icon className={`h-8 w-8 text-${item.color}-600 mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                  <span className={`text-sm font-medium text-${item.color}-800`}>{item.name}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Services principaux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Services Principaux</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Link href={service.href}>
                  <Card className={`h-full hover:shadow-xl transition-all duration-300 group cursor-pointer ${service.isTop ? 'ring-2 ring-blue-200' : ''}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                        {service.isTop && (
                          <Badge className="bg-blue-100 text-blue-800">
                            TOP
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg group-hover:text-blue-700 transition-colors">
                        {service.title}
                      </CardTitle>
                      <p className="text-sm text-gray-600">{service.subtitle}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-gray-500 mb-4">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {service.category}
                        </Badge>
                        <Button size="sm" className={`bg-gradient-to-r ${service.color} text-white hover:opacity-90`}>
                          <Play className="h-3 w-3 mr-1" />
                          Ouvrir
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Liens directs populaires */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Raccourcis Populaires</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Mishary Al-Afasy', href: '/lecteur-coran?reciter=mishary' },
              { name: 'CED Bank Mobile', href: '/ced-bank-mobile' },
              { name: 'Formations Halal', href: '/formations' },
              { name: 'Cartes Gold', href: '/ced-bank-cards' },
              { name: 'Cloud Halal', href: '/cloud-halal' },
              { name: 'Super IARP Pro', href: '/super-iarp-pro' }
            ].map((link) => (
              <Link key={link.name} href={link.href}>
                <Badge 
                  variant="outline" 
                  className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors px-3 py-1"
                >
                  {link.name}
                </Badge>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}