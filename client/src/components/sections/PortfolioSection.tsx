import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ExternalLink, 
  Github, 
  Play, 
  Users, 
  Award,
  Zap,
  Globe,
  Code,
  Palette,
  BookOpen,
  Briefcase,
  Heart,
  Mail
} from 'lucide-react';

const portfolioCategories = ["Tous", "IA & Tech", "Éducation", "Environnement", "Business", "Créatif"];

const portfolioProjects = [
  {
    id: 1,
    title: "Club Empreinte Digitale",
    description: "Plateforme d'apprentissage IA éthique avec 34,221+ apprenants actifs dans 78 langues",
    category: "IA & Tech",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "OpenAI"],
    metrics: {
      users: "34,221",
      languages: "78",
      impact: "8.9/10"
    },
    status: "En ligne",
    featured: true,
    links: {
      live: "https://club-empreinte-digitale.replit.app",
      github: "#"
    }
  },
  {
    id: 2,
    title: "Super IARP Pro",
    description: "Assistant IA révolutionnaire avec 8 modules spécialisés et génération intelligente",
    category: "IA & Tech",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["OpenAI GPT-4", "Machine Learning", "NLP", "Speech Recognition"],
    metrics: {
      modules: "8",
      generators: "12",
      accuracy: "97%"
    },
    status: "Actif",
    featured: true,
    links: {
      live: "#chat-iarp",
      demo: "#"
    }
  },
  {
    id: 3,
    title: "PrettyhowQ Technology",
    description: "Technologie IA propriétaire pour l'apprentissage adaptatif et personnalisé",
    category: "IA & Tech",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Machine Learning", "Deep Learning", "Python", "TensorFlow"],
    metrics: {
      algorithms: "25+",
      efficiency: "+340%",
      patents: "3"
    },
    status: "Breveté",
    featured: true,
    links: {
      documentation: "#",
      research: "#"
    }
  },
  {
    id: 4,
    title: "Formations IA Responsable",
    description: "Catalogue de 28+ cours certifiants sur l'intelligence artificielle éthique",
    category: "Éducation",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Pédagogie Adaptative", "Gamification", "Analytics", "Certification"],
    metrics: {
      courses: "28+",
      completion: "89%",
      satisfaction: "4.8/5"
    },
    status: "Disponible",
    featured: false,
    links: {
      live: "/formations",
      certificates: "#"
    }
  },
  {
    id: 5,
    title: "Boutique Solidaire",
    description: "Marketplace éco-responsable avec produits durables et impact social",
    category: "Environnement",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["E-commerce", "Blockchain", "Carbon Tracking", "React"],
    metrics: {
      products: "500+",
      impact: "12T CO2",
      partners: "50+"
    },
    status: "Bêta",
    featured: false,
    links: {
      live: "#boutique",
      impact: "#"
    }
  },
  {
    id: 6,
    title: "Costa del Sol Project",
    description: "Initiative internationale d'innovation durable et technologie verte",
    category: "Environnement",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Solar Energy", "IoT", "Data Analytics", "Sustainability"],
    metrics: {
      countries: "12",
      energy: "2.5MW",
      communities: "25"
    },
    status: "En cours",
    featured: false,
    links: {
      live: "#costa-del-sol",
      progress: "#"
    }
  },
  {
    id: 7,
    title: "Générateurs IA Créatifs",
    description: "Suite de 12 outils intelligents pour automatiser les tâches créatives",
    category: "Créatif",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["OpenAI API", "Creative AI", "Automation", "UX/UI"],
    metrics: {
      tools: "12",
      templates: "500+",
      users: "5,000+"
    },
    status: "Opérationnel",
    featured: false,
    links: {
      live: "#generateurs",
      showcase: "#"
    }
  },
  {
    id: 8,
    title: "Analytics Dashboard",
    description: "Tableau de bord intelligent avec métriques temps réel et insights IA",
    category: "Business",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["React", "D3.js", "Real-time Data", "Machine Learning"],
    metrics: {
      datapoints: "1M+",
      insights: "50+",
      accuracy: "94%"
    },
    status: "Live",
    featured: false,
    links: {
      live: "#analytics",
      api: "#"
    }
  }
];

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "Tous" 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory);

  const featuredProjects = portfolioProjects.filter(project => project.featured);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En ligne":
      case "Actif":
      case "Live":
      case "Opérationnel":
        return "bg-green-100 text-green-800";
      case "Bêta":
      case "En cours":
        return "bg-yellow-100 text-yellow-800";
      case "Breveté":
      case "Disponible":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 hover:from-purple-200 hover:to-pink-200 mb-4">
            <Award className="w-4 h-4 mr-2" />
            Portfolio Professionnel
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Projets & Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez mes projets d'innovation technologique, d'IA éthique et d'impact social 
            avec plus de 34,221 utilisateurs touchés mondialement.
          </p>
        </div>

        {/* Projets en vedette */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🌟 Projets Phares
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-2 border-purple-100">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg mb-2 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="ml-2">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  {/* Métriques */}
                  <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-bold text-purple-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {project.links.live && (
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Voir
                      </Button>
                    )}
                    {project.links.github && (
                      <Button size="sm" variant="outline">
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {portfolioCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Grille de tous les projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                project.featured ? 'ring-2 ring-purple-200' : ''
              }`}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge className={getStatusColor(project.status)} variant="secondary">
                    {project.status}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm mb-1">{project.title}</CardTitle>
                <Badge variant="outline" className="w-fit text-xs">
                  {project.category}
                </Badge>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-xs mb-3 line-clamp-2">{project.description}</p>
                
                {/* Métriques compactes */}
                <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                  {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="text-center bg-gray-50 rounded px-2 py-1">
                      <div className="font-semibold text-purple-600">{value}</div>
                      <div className="text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    {project.links.live && <ExternalLink className="w-3 h-3 text-gray-400" />}
                    {project.links.github && <Github className="w-3 h-3 text-gray-400" />}
                  </div>
                  <span className="text-xs text-gray-500">
                    {project.technologies.length} techs
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistiques globales */}
        <div className="mt-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Impact Global du Portfolio
            </h3>
            <p className="text-gray-600">
              Ensemble, ces projets touchent des milliers d'utilisateurs et créent un impact positif mesurable
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600">34,221+</div>
              <div className="text-sm text-gray-600">Utilisateurs Actifs</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-200 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600">78</div>
              <div className="text-sm text-gray-600">Langues Supportées</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600">8</div>
              <div className="text-sm text-gray-600">Projets Majeurs</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-200 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-yellow-600">8.9/10</div>
              <div className="text-sm text-gray-600">Impact Environnemental</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Intéressé par une collaboration ou un projet similaire ?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Mail className="w-5 h-5 mr-2" />
              Me Contacter
            </Button>
            <Button size="lg" variant="outline">
              <Github className="w-5 h-5 mr-2" />
              Voir sur GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}