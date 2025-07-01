import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { 
  BookOpen, 
  Headphones, 
  Volume2, 
  Star, 
  Globe,
  Heart,
  Play,
  Download,
  Languages
} from 'lucide-react';

export function QuranAccessSection() {
  const reciters = [
    {
      id: 'mishary',
      name: 'مشاري العفاسي',
      nameEn: 'Mishary Al-Afasy',
      country: 'الكويت',
      style: 'حدر',
      popularity: 98,
      featured: true
    },
    {
      id: 'sudais',
      name: 'عبد الرحمن السديس',
      nameEn: 'Abdul Rahman Al-Sudais',
      country: 'السعودية',
      style: 'ترتيل',
      popularity: 95,
      featured: true
    },
    {
      id: 'shuraim',
      name: 'سعود الشريم',
      nameEn: 'Saud Al-Shuraim',
      country: 'السعودية',
      style: 'ترتيل',
      popularity: 92,
      featured: true
    },
    {
      id: 'ghamdi',
      name: 'سعد الغامدي',
      nameEn: 'Saad Al-Ghamdi',
      country: 'السعودية',
      style: 'ترتيل',
      popularity: 90,
      featured: true
    }
  ];

  const quickAccess = [
    {
      title: 'Lecteur Coran Complet',
      description: 'Interface complète avec 8+ récitateurs authentiques',
      href: '/lecteur-coran',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-600',
      features: ['Traductions', 'Tajweed', 'Audio HD']
    },
    {
      title: 'Écoute en Direct',
      description: 'Stream live depuis La Mecque et Médine',
      href: '/quran-live',
      icon: Volume2,
      color: 'from-blue-500 to-cyan-600',
      features: ['Live 24/7', 'Haute qualité', 'Sans pub']
    },
    {
      title: 'Récitation Multilingue',
      description: 'Traductions simultanées en 78+ langues',
      href: '/quran-multilingue',
      icon: Languages,
      color: 'from-purple-500 to-indigo-600',
      features: ['78 langues', 'Phonétique', 'Sens']
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-emerald-800 bg-clip-text text-transparent">
              Récitateurs du Saint Coran
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accès direct aux récitateurs les plus renommés avec interface intuitive et fonctionnalités avancées
          </p>
          <Badge className="mt-4 bg-green-100 text-green-800 px-4 py-2">
            🕌 100% Halal Certifié
          </Badge>
        </motion.div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {quickAccess.map((access, index) => (
            <motion.div
              key={access.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link href={access.href}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 hover:border-green-300">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${access.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <access.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-green-700 transition-colors">
                      {access.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{access.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {access.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800">
                      <Play className="h-4 w-4 mr-2" />
                      Accéder Maintenant
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Featured Reciters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="bg-white/80 backdrop-blur-sm border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-green-800 flex items-center justify-center gap-3">
                <Star className="h-6 w-6 text-yellow-500 fill-current" />
                Récitateurs Vedettes
                <Star className="h-6 w-6 text-yellow-500 fill-current" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {reciters.map((reciter, index) => (
                  <motion.div
                    key={reciter.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Headphones className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-green-800 mb-1">{reciter.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{reciter.nameEn}</p>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {reciter.country}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {reciter.style}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{reciter.popularity}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Link href="/lecteur-coran">
                  <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-lg px-8">
                    <Headphones className="h-5 w-5 mr-2" />
                    Écouter Maintenant
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { label: 'Récitateurs', value: '8+', icon: Headphones },
            { label: 'Langues', value: '78+', icon: Globe },
            { label: 'Qualité', value: 'HD', icon: Volume2 },
            { label: 'Utilisateurs', value: '50K+', icon: Heart }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center p-4 bg-white/60 rounded-lg backdrop-blur-sm">
              <stat.icon className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-800">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}