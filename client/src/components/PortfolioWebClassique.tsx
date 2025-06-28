import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ExternalLink,
  Github,
  Globe,
  Users,
  Award,
  Building2,
  Briefcase,
  GraduationCap,
  Heart,
  Shield,
  Zap,
  TrendingUp,
  Star,
  Calendar,
  MapPin,
  ChevronRight,
  Code,
  Database,
  Smartphone,
  Lock,
  DollarSign
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CEDFooter } from './CEDFooter';

export function PortfolioWebClassique() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const portfolioData = {
    profile: {
      name: "Yakoubi Yamina",
      title: "Fondatrice & Dirigeante - Club Empreinte Digitale",
      location: "Suisse, Émirats Arabes Unis, Europe",
      description: "Visionnaire technologique spécialisée dans l'innovation fintech islamique et l'écosystème digital éthique. Leader mondial de la conformité Sharia dans la technologie.",
      image: "/api/placeholder/300/300",
      email: "club.empreinte.digitale@gmail.com",
      github: "https://github.com/PrettyhowQ",
      website: "https://ced-platform.replit.app"
    },
    
    experience: [
      {
        company: "Club Empreinte Digitale",
        position: "Fondatrice & CEO",
        period: "2023 - Présent",
        location: "International",
        description: "Direction stratégique de l'écosystème fintech islamique le plus complet au monde",
        achievements: [
          "Création du premier système bancaire digital 100% Sharia-compliant",
          "Développement de l'IA éthique IARP Pro pour 78+ langues",
          "Lancement de TechForAll - économie circulaire technologique",
          "Expansion internationale : Suisse, UAE, Europe, Golfe"
        ]
      },
      {
        company: "CED Bank",
        position: "Directrice Innovation",
        period: "2023 - Présent", 
        location: "Suisse & UAE",
        description: "Supervision technique et conformité Sharia de la plateforme bancaire",
        achievements: [
          "0% intérêt - conformité islamique absolue",
          "Support multi-devises CHF/AED/USD/EUR",
          "Mode prière et boussole Qibla intégrés",
          "15,000+ utilisateurs actifs"
        ]
      },
      {
        company: "Institut CED Academy",
        position: "Directrice Pédagogique",
        period: "2024 - Présent",
        location: "Global",
        description: "Supervision des formations IA éthique et Fiqh informatique",
        achievements: [
          "34,000+ apprenants dans 25+ pays",
          "Certification Fiqh informatique reconnue",
          "Support 78+ langues avec IA multimodale",
          "Partenariat avec scholars islamiques internationaux"
        ]
      }
    ],

    projects: [
      {
        id: 'ced-bank',
        title: 'CED Bank - Banking Digital Halal',
        category: 'FinTech',
        description: 'Première banque digitale 100% conforme Sharia avec fonctionnalités spirituelles',
        image: '/api/placeholder/400/250',
        technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
        features: [
          'Conformité Sharia AAOIFI',
          'Multi-devises CHF/AED/USD/EUR', 
          'Mode prière automatique',
          'Boussole Qibla GPS',
          'Cartes Gold 6 niveaux'
        ],
        metrics: {
          users: '15,847',
          revenue: '2.8M CHF',
          countries: '12',
          rating: '4.9/5'
        },
        status: 'Production',
        url: '/ced-bank',
        github: 'https://github.com/PrettyhowQ'
      },
      {
        id: 'ced-academy',
        title: 'Institut CED Academy',
        category: 'Education',
        description: 'Plateforme formation IA éthique et Fiqh informatique mondiale',
        image: '/api/placeholder/400/250',
        technologies: ['React', 'OpenAI', 'PostgreSQL', 'TanStack Query'],
        features: [
          'IA IARP Pro multilingue',
          'Formations certifiées Fiqh',
          'Support 78+ langues',
          'Mentorat expert',
          'Validation scholars'
        ],
        metrics: {
          users: '34,222',
          courses: '150+',
          countries: '25',
          rating: '4.8/5'
        },
        status: 'Production',
        url: '/formations',
        github: 'https://github.com/PrettyhowQ'
      },
      {
        id: 'al-aman-takaful',
        title: 'Al-Aman CED Takaful',
        category: 'Insurance',
        description: 'Première assurance Takaful intégrée à un écosystème bancaire digital',
        image: '/api/placeholder/400/250',
        technologies: ['React', 'TypeScript', 'PostgreSQL', 'Drizzle'],
        features: [
          'Conformité AAOIFI/IFSB',
          'Sharia Board experts',
          'Intégration CED Bank',
          'Couverture internationale',
          'Documentation trilingue'
        ],
        metrics: {
          users: '8,450',
          coverage: '55M CHF',
          countries: '8',
          rating: '4.7/5'
        },
        status: 'Beta',
        url: '/al-aman-takaful',
        github: 'https://github.com/PrettyhowQ'
      },
      {
        id: 'techforall',
        title: 'TechForAll Association',
        category: 'Social Impact',
        description: 'Plateforme de donation et reconditionnement technologique solidaire',
        image: '/api/placeholder/400/250',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        features: [
          'Donations équipements tech',
          'Reconditionnement certifié',
          'Avantages fiscaux 75%',
          'Logistique internationale',
          'Impact environnemental'
        ],
        metrics: {
          donations: '2,847',
          impact: '89% CO2↓',
          countries: '15',
          rating: '4.9/5'
        },
        status: 'Production',
        url: '/techforall',
        github: 'https://github.com/PrettyhowQ'
      },
      {
        id: 'super-iarp-pro',
        title: 'Super IARP Pro',
        category: 'AI Ethics',
        description: 'IA responsable intégrant toutes les IA existantes avec conformité Fiqh',
        image: '/api/placeholder/400/250',
        technologies: ['OpenAI', 'Claude', 'Gemini', 'React', 'TypeScript'],
        features: [
          'Multi-modèles IA unifiés',
          'Filtrage halal intégré',
          'Mode prière respectueux',
          'Support 78+ langues',
          'Conformité Fiqh 100%'
        ],
        metrics: {
          models: '20+',
          users: '12,650',
          languages: '78',
          rating: '4.8/5'
        },
        status: 'Production',
        url: '/super-iarp-pro',
        github: 'https://github.com/PrettyhowQ'
      },
      {
        id: 'cloud-ced',
        title: 'Cloud CED Platform',
        category: 'Infrastructure',
        description: 'Plateforme cloud déploiement et hébergement écosystème CED',
        image: '/api/placeholder/400/250',
        technologies: ['React', 'Node.js', 'Docker', 'PostgreSQL'],
        features: [
          'Déploiement automatique',
          'Monitoring 99.9% uptime',
          'Conformité FINMA',
          'Backup automatique',
          'Sécurité bancaire'
        ],
        metrics: {
          uptime: '99.9%',
          projects: '70+',
          deployments: '500+',
          rating: '4.9/5'
        },
        status: 'Production',
        url: '/cloud-ced',
        github: 'https://github.com/PrettyhowQ'
      }
    ],

    skills: {
      technical: [
        { name: 'React/TypeScript', level: 95 },
        { name: 'Node.js/Express', level: 90 },
        { name: 'PostgreSQL/Drizzle', level: 88 },
        { name: 'AI/OpenAI Integration', level: 92 },
        { name: 'Fintech Architecture', level: 96 },
        { name: 'Islamic Compliance', level: 98 }
      ],
      business: [
        { name: 'Leadership Stratégique', level: 98 },
        { name: 'Innovation Fintech', level: 95 },
        { name: 'Conformité Sharia', level: 99 },
        { name: 'Développement International', level: 90 },
        { name: 'Gestion Équipe', level: 88 },
        { name: 'Vision Technologique', level: 96 }
      ]
    },

    certifications: [
      'Certification Fiqh Informatique - Scholars Internationaux',
      'Conformité AAOIFI Banking - Dubai',
      'FINMA Swiss Financial Compliance',
      'Islamic Banking Certification - UAE',
      'AI Ethics & Responsible Development',
      'International Business Leadership'
    ],

    achievements: [
      '🏆 Première banque digitale 100% Sharia-compliant au monde',
      '🌍 Expansion 25+ pays avec conformité locale',
      '👥 Communauté 50,000+ utilisateurs fidèles',
      '💰 Chiffre d\'affaires 15M+ CHF écosystème complet',
      '🤖 IA éthique supportant 78+ langues',
      '📚 Formation 34,000+ apprenants certifiés',
      '🔒 Standard sécurité bancaire niveau international',
      '🌱 Impact positif économie circulaire technologique'
    ]
  };

  const ProjectCard = ({ project }: { project: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
      onClick={() => setSelectedProject(project.id)}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4">
            <Badge className={`${
              project.status === 'Production' ? 'bg-green-500' : 
              project.status === 'Beta' ? 'bg-blue-500' : 'bg-yellow-500'
            } text-white`}>
              {project.status}
            </Badge>
          </div>
          <div className="absolute top-4 left-4">
            <Badge variant="secondary">{project.category}</Badge>
          </div>
        </div>
        
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {project.title}
            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-600" />
                <span>{project.metrics.users} utilisateurs</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>{project.metrics.rating}</span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                <ExternalLink className="h-4 w-4 mr-2" />
                Voir projet
              </Button>
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const SkillBar = ({ skill }: { skill: any }) => (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-gray-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header avec photo de profil */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src={portfolioData.profile.image}
                alt={portfolioData.profile.name}
                className="w-64 h-64 rounded-full border-8 border-white/20 shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
                <Building2 className="h-6 w-6" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="text-5xl font-bold mb-4">{portfolioData.profile.name}</h1>
              <h2 className="text-2xl text-blue-100 mb-6">{portfolioData.profile.title}</h2>
              
              <p className="text-lg text-blue-50 mb-8 leading-relaxed">
                {portfolioData.profile.description}
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <MapPin className="h-4 w-4" />
                  <span>{portfolioData.profile.location}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Github className="h-4 w-4" />
                  <span>GitHub/PrettyhowQ</span>
                </div>
              </div>
              
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100"
                  onClick={() => window.open(portfolioData.profile.github, '_blank')}
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                  onClick={() => window.open(`mailto:${portfolioData.profile.email}`)}
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Contact
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="projects">Projets</TabsTrigger>
              <TabsTrigger value="experience">Expérience</TabsTrigger>
              <TabsTrigger value="skills">Compétences</TabsTrigger>
              <TabsTrigger value="achievements">Réalisations</TabsTrigger>
            </TabsList>

            <TabsContent value="projects" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Projets Portfolio</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Découvrez l'écosystème technologique le plus complet au monde pour la finance islamique et l'innovation éthique
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="experience" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Expérience Professionnelle</h2>
              </div>
              
              <div className="space-y-8">
                {portfolioData.experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">{exp.position}</CardTitle>
                            <CardDescription className="text-lg font-medium text-blue-600">
                              {exp.company}
                            </CardDescription>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline">{exp.period}</Badge>
                            <p className="text-sm text-gray-600 mt-1">{exp.location}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="skills" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Compétences</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      Compétences Techniques
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {portfolioData.skills.technical.map((skill, index) => (
                        <SkillBar key={index} skill={skill} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      Compétences Business
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {portfolioData.skills.business.map((skill, index) => (
                        <SkillBar key={index} skill={skill} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {portfolioData.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Shield className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-700">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Réalisations Clés</h2>
                <p className="text-lg text-gray-600">
                  Les accomplissements majeurs de l'écosystème Club Empreinte Digitale
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {portfolioData.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-3xl">{achievement.charAt(0)}</div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium">{achievement.slice(2)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">🏆</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Vision 2030 : Leader Mondial FinTech Islamique
                    </h3>
                    <p className="text-lg text-gray-700">
                      Objectif d'expansion dans 50+ pays avec 1M+ utilisateurs actifs et conformité Sharia universelle
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <CEDFooter />
    </div>
  );
}