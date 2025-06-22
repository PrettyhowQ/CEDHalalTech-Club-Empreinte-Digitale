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
  FileText
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

  const tools = [
    {
      name: 'Simulateur IA PrettyhowQ',
      url: 'https://jsitor.com/Y_I4py0a6wc',
      description: 'Interface interactive pour découvrir l\'IA éthique',
      icon: Brain
    },
    {
      name: 'Simulateur d\'Évasion',
      url: '/simulateur-evasion',
      description: 'Ambiances de rêve pour nourrir l\'espoir',
      icon: Heart
    },
    {
      name: 'Costa del Sol Logistique',
      url: '/costa-del-sol',
      description: 'Application mobile de gestion logistique',
      icon: MapPin
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
      
      {/* Header */}
      <header className="bg-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center items-center gap-3 mb-4"
          >
            <Globe className="h-12 w-12 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {animatedTitle}
              <span className="animate-pulse">|</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-blue-100"
          >
            Une technologie éthique & solidaire, née du cœur
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
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-blue-800">
                  <Target className="h-8 w-8" />
                  Notre Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  TechForAll est une initiative éducative & humanitaire qui vise à offrir à chaque individu – 
                  femmes, jeunes, exilés – l'accès aux outils du futur : IA, codage, cloud, souveraineté numérique.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {missionPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + 0.1 * index }}
                      className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">{point}</span>
                    </motion.div>
                  ))}
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

        {/* Explorer nos outils */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-gradient-to-r from-blue-50 to-green-50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-blue-800">
                  <Rocket className="h-8 w-8" />
                  Explorer nos outils
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Outils principaux */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {tools.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + 0.1 * index }}
                      className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <tool.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{tool.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                      <Button 
                        onClick={() => {
                          if (tool.url.startsWith('http')) {
                            window.open(tool.url, '_blank');
                          } else {
                            window.location.href = tool.url;
                          }
                        }}
                        className="w-full"
                        variant={index === 0 ? 'default' : 'outline'}
                      >
                        {tool.url.startsWith('http') ? (
                          <>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Accéder
                          </>
                        ) : (
                          <>
                            <Link className="h-4 w-4 mr-2" />
                            Explorer
                          </>
                        )}
                      </Button>
                    </motion.div>
                  ))}
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