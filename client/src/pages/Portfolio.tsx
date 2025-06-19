import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Award, 
  BookOpen, 
  Users, 
  Globe, 
  TrendingUp,
  Lightbulb,
  Heart,
  Target,
  Zap,
  Star,
  Calendar,
  MapPin,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Code,
  Palette,
  Rocket,
  Shield
} from 'lucide-react';

export default function Portfolio() {
  const achievements = [
    {
      year: '2025',
      title: 'Fondation du Club Empreinte Digitale',
      description: 'Création de la plateforme d\'apprentissage IA éthique avec 34,221+ apprenants actifs',
      category: 'Entrepreneuriat'
    },
    {
      year: '2024',
      title: 'Développement de PrettyhowQ',
      description: 'Technologie IA éthique propriétaire respectant la vie privée et les valeurs humaines',
      category: 'Innovation'
    },
    {
      year: '2023',
      title: 'Vision IA Éthique Mondiale',
      description: 'Conceptualisation d\'un écosystème solidaire pour l\'éducation IA responsable',
      category: 'Leadership'
    }
  ];

  const projects = [
    {
      title: 'Club Empreinte Digitale',
      description: 'Plateforme d\'apprentissage IA éthique avec écosystème solidaire intégré',
      technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'IA Éthique'],
      features: [
        '34,221+ apprenants actifs',
        '78 langues supportées',
        '10 domaines IA couverts',
        'Support 24/7 multilingue'
      ],
      status: 'En production',
      impact: 'Révolution de l\'éducation IA accessible'
    },
    {
      title: 'PrettyhowQ - Technologie IA Éthique',
      description: 'Système d\'IA propriétaire respectant la vie privée et personnalisant l\'apprentissage',
      technologies: ['Machine Learning', 'Privacy-First AI', 'Ethical Computing'],
      features: [
        'Apprentissage adaptatif personnalisé',
        'Protection des données garantie',
        'Transparence algorithmique',
        'Biais minimisés'
      ],
      status: 'Innovation continue',
      impact: 'Standard de l\'IA éthique responsable'
    },
    {
      title: 'Application Mobile de Coaching',
      description: 'App complète "Mon coach sportif à emporter partout" avec Souheila Yakoubi-Ozel',
      technologies: ['React Native', 'Nutrition AI', 'Geolocation', 'Real-time Sync'],
      features: [
        '70+ sports de 5 continents',
        'Programmes nutrition personnalisés',
        'Horloge mondiale satellite',
        'Timer Pomodoro intégré'
      ],
      status: 'Déployé',
      impact: 'Santé et bien-être accessibles'
    }
  ];

  const skills = [
    { category: 'Leadership', items: ['Vision Stratégique', 'Management d\'Équipe', 'Innovation', 'Entrepreneuriat'] },
    { category: 'IA Éthique', items: ['Machine Learning Responsable', 'Gouvernance IA', 'Biais Algorithmiques', 'Privacy-First'] },
    { category: 'Technologie', items: ['Full-Stack Development', 'Architecture Systèmes', 'DevOps', 'Sécurité'] },
    { category: 'Éducation', items: ['Pédagogie Numérique', 'Apprentissage Adaptatif', 'Accessibilité', 'Multilinguisme'] }
  ];

  const values = [
    {
      icon: Heart,
      title: 'IA au Service de l\'Humanité',
      description: 'Développer une intelligence artificielle qui respecte et amplifie les valeurs humaines'
    },
    {
      icon: Globe,
      title: 'Accessibilité Universelle',
      description: 'Rendre l\'éducation IA accessible à tous, sans barrière linguistique ou économique'
    },
    {
      icon: Shield,
      title: 'Éthique et Transparence',
      description: 'Garantir une gouvernance transparente et une protection totale des données'
    },
    {
      icon: Users,
      title: 'Écosystème Solidaire',
      description: 'Créer une communauté mondiale d\'apprentissage et d\'entraide'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Profil */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-6 shadow-2xl">
              <span className="text-white font-bold text-4xl">YY</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">Yakoubi Yamina</h1>
            <p className="text-2xl text-purple-600 font-semibold mb-4">
              Fondatrice & CEO - Club Empreinte Digitale
            </p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Visionnaire de l'IA éthique et pionnière de l'éducation accessible. 
              Créatrice de PrettyhowQ et leader d'un écosystème solidaire transformant 
              l'apprentissage de l'intelligence artificielle à l'échelle mondiale.
            </p>
          </div>
          
          {/* Contact rapide */}
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" size="lg">
              <Mail className="h-5 w-5 mr-2" />
              contact@empreintedigitale.club
            </Button>
            <Button variant="outline" size="lg">
              <MapPin className="h-5 w-5 mr-2" />
              Genève, Suisse
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2 text-lg">
              <Brain className="h-5 w-5 mr-2" />
              IA Éthique
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-lg">
              <Rocket className="h-5 w-5 mr-2" />
              Innovation Pédagogique
            </Badge>
            <Badge className="bg-green-100 text-green-800 px-4 py-2 text-lg">
              <Users className="h-5 w-5 mr-2" />
              Leadership Inspirant
            </Badge>
          </div>
        </motion.div>

        {/* Statistiques d'impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl font-bold text-center mb-8">Impact Mondial</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">34,221+</div>
                  <div className="text-purple-100">Apprenants Actifs</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">78</div>
                  <div className="text-purple-100">Langues Supportées</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">10</div>
                  <div className="text-purple-100">Domaines IA</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">2.98M€</div>
                  <div className="text-purple-100">Objectif Revenus 2025</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Valeurs fondamentales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Valeurs & Vision</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Projets majeurs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Projets & Réalisations</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </div>
                    <Badge variant={project.status === 'En production' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Technologies & Compétences</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <h4 className="font-semibold mb-2 text-green-700">Impact: {project.impact}</h4>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Caractéristiques Clés</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-amber-500" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Parcours professionnel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Parcours & Réalisations</h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-l-4 border-l-purple-500">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                        <Calendar className="h-8 w-8 text-purple-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary">{achievement.year}</Badge>
                        <Badge variant="outline">{achievement.category}</Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Compétences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Expertise & Compétences</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-blue-600" />
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Vision 2025 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardContent className="pt-8 pb-8">
              <Lightbulb className="h-16 w-16 text-amber-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Vision 2025 & Au-delà</h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
                "Transformer l'éducation mondiale en créant un écosystème d'IA éthique accessible à tous. 
                Notre objectif : 100,000 apprenants actifs d'ici fin 2025, contribuant à une société 
                où l'intelligence artificielle sert l'humanité avec responsabilité et bienveillance."
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Rejoindre la Mission
                </Button>
                <Button variant="outline" size="lg">
                  <Mail className="h-5 w-5 mr-2" />
                  Collaborer Ensemble
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}