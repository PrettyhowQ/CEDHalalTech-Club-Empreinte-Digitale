import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Globe,
  Heart,
  Laptop,
  Monitor,
  GraduationCap,
  Shield,
  Target,
  Package,
  Rocket,
  Link,
  Mail,
  Users,
  Brain,
  Code,
  Cloud,
  Zap,
  MapPin,
  CheckCircle,
  ExternalLink,
  CreditCard,
  Building,
  FileText,
  Anchor
} from 'lucide-react';

interface ProjectFeature {
  id: string;
  icon: any;
  title: string;
  description: string;
  category: 'hardware' | 'education' | 'security' | 'platform';
}

export function TechForAllLanding() {
  const [animatedTitle, setAnimatedTitle] = useState('');

  const projectFeatures: ProjectFeature[] = [
    {
      id: 'macbook',
      icon: Laptop,
      title: 'MacBook Pro M4 Max',
      description: 'Création & développement éducatif haute performance',
      category: 'hardware'
    },
    {
      id: 'dell',
      icon: Monitor,
      title: 'Dell Precision 7680',
      description: 'IA, cloud, machine learning pour formations avancées',
      category: 'hardware'
    },
    {
      id: 'diplomes',
      icon: GraduationCap,
      title: 'Diplômes IA multilingues',
      description: 'Certifications reconnues en intelligence artificielle',
      category: 'education'
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Hébergement Genève',
      description: 'Données sécurisées en Suisse - RGPD conforme',
      category: 'security'
    }
  ];

  const missionPoints = [
    'Accès démocratisé aux technologies IA',
    'Formation pour femmes, jeunes et exilés',
    'Souveraineté numérique européenne',
    'Éthique et solidarité technologique'
  ];

  const techForAllSections = [
    {
      name: 'TechForAll : Informatique',
      url: '/boutique-solidaire',
      description: 'MacBook, PC, tablettes et smartphones reconditionnés',
      icon: Laptop,
      category: 'Matériel IT',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'TechForAll : Marin',
      url: '/materiel-marin',
      description: 'Moteurs, GPS, sondes et équipement de pêche',
      icon: Anchor,
      category: 'Maritime',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'TechForAll : Générateurs IA',
      url: '/generateurs-ia',
      description: 'Outils d\'automatisation et formulaires intelligents',
      icon: Brain,
      category: 'IA Mobile',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'TechForAll : Documents',
      url: '/pack-documents',
      description: 'Certificats, statuts officiels et partenariats UE',
      icon: FileText,
      category: 'Juridique',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'TechForAll : Évasion',
      url: '/simulateur-evasion',
      description: 'Ambiances de rêve anti-gaspillage et inspiration',
      icon: Heart,
      category: 'Bien-être',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'TechForAll : Logistique',
      url: '/costa-del-sol',
      description: 'Transport, stockage et distribution Costa del Sol',
      icon: MapPin,
      category: 'Transport',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'TechForAll : Simulateur Recyclage',
      url: '/simulateur-recyclage',
      description: 'Impact environnemental en un clic - CO₂, énergie, eau',
      icon: Globe,
      category: 'Écologie',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  useEffect(() => {
    const title = "TechForAll & IA PrettyhowQ";
    let i = 0;
    const timer = setInterval(() => {
      setAnimatedTitle(title.slice(0, i));
      i++;
      if (i > title.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'hardware': return 'bg-blue-100 text-blue-800';
      case 'education': return 'bg-green-100 text-green-800';
      case 'security': return 'bg-red-100 text-red-800';
      case 'platform': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header Révolutionnaire */}
      <header className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center items-center gap-4 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-3xl flex items-center justify-center shadow-2xl"
            >
              <Globe className="h-10 w-10 text-white" />
            </motion.div>
            <div>
              <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 bg-clip-text text-transparent">
                TechForAll
              </h1>
              <div className="text-sm font-bold text-emerald-300 tracking-widest">
                Fondée par Yakoubi Yamina © 2025
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              L'Association Révolutionnaire Anti-Gaspillage
            </h2>
            <div className="flex justify-center gap-8 text-lg font-medium">
              <span className="text-emerald-300">UNIQUE</span>
              <span className="text-teal-300">UNIVERSELLE</span> 
              <span className="text-cyan-300">INDÉPENDANTE</span>
              <span className="text-blue-300">INTELLIGENTE</span>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed"
          >
            La première association mondiale qui révolutionne l'économie circulaire technologique. 
            Inspirée par la philosophie CED Bank : zéro gaspillage, éthique absolue, impact planétaire.
          </motion.p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">

        {/* Mission */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 shadow-2xl border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-3xl text-emerald-800">
                  <Target className="h-10 w-10" />
                  Manifeste de l'Association TechForAll
                </CardTitle>
                <div className="text-emerald-600 font-medium">
                  Une révolution technologique éthique inspirée par CED Bank
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-inner">
                  <blockquote className="text-xl text-gray-800 leading-relaxed italic border-l-4 border-emerald-500 pl-6">
                    "Nous refusons la surconsommation. Nous choisissons l'intelligence. 
                    Chaque équipement sauvé du gaspillage devient un pont vers l'inclusion numérique. 
                    TechForAll n'est pas une association de plus : c'est le modèle d'économie circulaire 
                    que le monde n'a jamais vu."
                  </blockquote>
                  <div className="text-right mt-4 text-emerald-700 font-bold">
                    — Yakoubi Yamina, Fondatrice
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-emerald-800">Nos Principes Uniques</h3>
                    {[
                      "Anti-gaspillage technologique radical",
                      "Éthique bancaire CED intégrée", 
                      "Indépendance totale des lobbies tech",
                      "Intelligence collective au service de tous"
                    ].map((point, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + 0.1 * index }}
                        className="flex items-center gap-3 p-4 bg-emerald-100 rounded-lg"
                      >
                        <CheckCircle className="h-6 w-6 text-emerald-600" />
                        <span className="text-gray-800 font-medium">{point}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-teal-800">Impact Révolutionnaire</h3>
                    {[
                      "0% surconsommation encouragée",
                      "100% matériel donné reconverti",
                      "Financement transparent via CED",
                      "Emplois verts créés localement"
                    ].map((point, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + 0.1 * index }}
                        className="flex items-center gap-3 p-4 bg-teal-100 rounded-lg"
                      >
                        <CheckCircle className="h-6 w-6 text-teal-600" />
                        <span className="text-gray-800 font-medium">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Ce qui nous rend uniques au monde :</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                        <div>
                          <strong className="text-emerald-800">Première association mondiale</strong>
                          <p className="text-sm text-gray-600">À refuser tout financement de l'industrie tech pour préserver son indépendance</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                        <div>
                          <strong className="text-teal-800">Garantie zéro surconsommation</strong>
                          <p className="text-sm text-gray-600">Seule organisation à s'engager formellement contre l'incitation à l'achat</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                        <div>
                          <strong className="text-cyan-800">Partenariat CED Bank exclusif</strong>
                          <p className="text-sm text-gray-600">Financement éthique 0% intérêt pour maximiser l'impact social</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                        <div>
                          <strong className="text-blue-800">Transparence radicale</strong>
                          <p className="text-sm text-gray-600">Traçabilité complète : chaque équipement suivi de la collecte à la redistribution</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                        <div>
                          <strong className="text-purple-800">Intelligence collective</strong>
                          <p className="text-sm text-gray-600">IA éthique au service de l'optimisation des ressources, pas du profit</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
                        <div>
                          <strong className="text-pink-800">Universalité sans frontières</strong>
                          <p className="text-sm text-gray-600">Modèle reproductible mondialement, adaptation locale respectueuse</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Projet Features */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-blue-800">
                  <Package className="h-8 w-8" />
                  Ce que contient ce projet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projectFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + 0.1 * index }}
                      className="p-6 border rounded-xl hover:shadow-lg transition-all bg-gray-50"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <feature.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-lg">{feature.title}</h3>
                            <Badge variant="outline" className={getCategoryColor(feature.category)}>
                              {feature.category}
                            </Badge>
                          </div>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Circuit solidaire */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-green-800">
                  <Heart className="h-8 w-8" />
                  Circuit solidaire TechForAll
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center p-6 bg-white rounded-xl shadow-md"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">1. Dons généreux</h3>
                    <p className="text-gray-600 text-sm">
                      Particuliers et entreprises donnent leur matériel informatique et marin usagé via nos générateurs IA.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-center p-6 bg-white rounded-xl shadow-md"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">2. Reconditionnement expert</h3>
                    <p className="text-gray-600 text-sm">
                      Nos équipes techniques remettent en état, certifient et garantissent chaque équipement donné.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-center p-6 bg-white rounded-xl shadow-md"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">3. Boutique solidaire</h3>
                    <p className="text-gray-600 text-sm">
                      Revente à prix très réduits aux familles, pêcheurs et artisans dans le besoin.
                    </p>
                  </motion.div>
                </div>

                <div className="text-center p-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl">
                  <h4 className="font-bold text-xl text-indigo-800 mb-2">Impact économique et social</h4>
                  <p className="text-indigo-700">
                    Chaque don évite le gaspillage, crée de l'emploi local, finance des formations techniques et équipe des familles à prix solidaires. 
                    C'est un cercle vertueux qui profite à tous.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Explorer nos outils */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Card className="bg-gradient-to-r from-blue-50 to-green-50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-blue-800">
                  <Rocket className="h-8 w-8" />
                  Les 6 sections TechForAll
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Outils principaux */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {techForAllSections.map((section, index) => (
                    <motion.div
                      key={section.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + 0.1 * index }}
                      className="relative text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group overflow-hidden"
                    >
                      {/* Background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      
                      <div className="relative z-10">
                        <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                          <section.icon className="h-8 w-8 text-white" />
                        </div>
                        
                        <Badge variant="outline" className="mb-3 text-xs font-medium">
                          {section.category}
                        </Badge>
                        
                        <h3 className="font-bold text-lg mb-2 text-gray-800">{section.name}</h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{section.description}</p>
                        
                        <Button 
                          onClick={() => {
                            if (section.url.startsWith('http')) {
                              window.open(section.url, '_blank');
                            } else {
                              window.location.href = section.url;
                            }
                          }}
                          className={`w-full bg-gradient-to-r ${section.color} hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-white border-none`}
                        >
                          {section.url.startsWith('http') ? (
                            <>
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Accéder
                            </>
                          ) : (
                            <>
                              <section.icon className="h-4 w-4 mr-2" />
                              Explorer
                            </>
                          )}
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Statistiques d'impact */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-indigo-600">2,500+</div>
                      <div className="text-sm text-gray-600">Équipements reconditionnés</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">125 tonnes</div>
                      <div className="text-sm text-gray-600">CO₂ évité cette année</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">120</div>
                      <div className="text-sm text-gray-600">Familles accompagnées</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">7</div>
                      <div className="text-sm text-gray-600">Sections spécialisées</div>
                    </div>
                  </div>
                </div>

                {/* Boutons d'action principaux */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button 
                    onClick={() => window.open('https://jsitor.com/Y_I4py0a6wc', '_blank')}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Brain className="h-5 w-5 mr-2" />
                    Accéder au Simulateur IA
                  </Button>
                  
                  <Button 
                    onClick={() => window.location.href = 'mailto:contact@techforallfrance.org'}
                    variant="outline"
                    size="lg"
                    className="border-gray-300"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Nous contacter
                  </Button>
                </div>

              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Navigation vers autres modules */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-blue-800">
                  Découvrez l'écosystème TechForAll
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  
                  <Button 
                    onClick={() => window.location.href = '/techforall'}
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center hover:bg-green-50"
                  >
                    <Users className="h-6 w-6 mb-2 text-green-600" />
                    <span className="text-sm">Association TechForAll</span>
                  </Button>
                  
                  <Button 
                    onClick={() => window.location.href = '/costa-del-sol'}
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center hover:bg-orange-50"
                  >
                    <MapPin className="h-6 w-6 mb-2 text-orange-600" />
                    <span className="text-sm">Costa del Sol</span>
                  </Button>
                  
                  <Button 
                    onClick={() => window.location.href = '/boutique-yakoubi'}
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center hover:bg-purple-50"
                  >
                    <Package className="h-6 w-6 mb-2 text-purple-600" />
                    <span className="text-sm">Boutique Solidaire</span>
                  </Button>
                  
                  <Button 
                    onClick={() => window.location.href = '/compte-yakoubi'}
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center hover:bg-blue-50"
                  >
                    <CreditCard className="h-6 w-6 mb-2 text-blue-600" />
                    <span className="text-sm">Compte B. Yakoubi</span>
                  </Button>
                  
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-gray-200 py-8 mt-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="space-y-4"
          >
            <div className="flex justify-center items-center gap-2 text-gray-700">
              <Shield className="h-5 w-5 text-blue-600" />
              <span>Données hébergées en Suisse - RGPD conforme</span>
            </div>
            
            <p className="text-gray-600">
              © Yakoubi Yamina – Tous droits réservés | TechForAll & Empreinte Digitale
            </p>
            
            <div className="flex justify-center gap-4 text-sm">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.location.href = '/mentions-legales'}
              >
                Mentions légales
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.location.href = '/confidentialite'}
              >
                Confidentialité
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.location.href = '/contact'}
              >
                Contact
              </Button>
            </div>
          </motion.div>
        </div>
      </footer>

    </div>
  );
}