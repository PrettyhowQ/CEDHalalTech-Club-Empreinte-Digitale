import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Smartphone,
  Monitor,
  Download,
  Apple,
  PlaySquare,
  Globe,
  Star,
  TrendingUp,
  Users,
  Building2,
  Award,
  CheckCircle,
  Clock,
  ExternalLink,
  Github,
  Code,
  Database,
  Zap,
  Shield,
  Heart,
  Target,
  BarChart3,
  MapPin,
  Calendar,
  Filter,
  Search,
  ArrowRight,
  Plus,
  Eye,
  Edit
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioProjects, getProjectsByCategory, getProjectsByStatus, getPortfolioStats, type PortfolioProject } from './PortfolioProjectsData';
import { CEDFooter } from './CEDFooter';

interface ProjectFilter {
  category: string;
  status: string;
  priority: string;
  region: string;
}

export function PortfolioMobileApp() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [filters, setFilters] = useState<ProjectFilter>({
    category: 'all',
    status: 'all',
    priority: 'all',
    region: 'all'
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    users: 0,
    countries: 0,
    languages: 0
  });

  const stats = getPortfolioStats();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        projects: stats.totalProjects,
        users: stats.totalUsers,
        countries: stats.totalCountries,
        languages: stats.totalLanguages
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [stats]);

  const categoryIcons = {
    banking: Building2,
    education: Award,
    insurance: Shield,
    solidarity: Heart,
    ai: Zap,
    compliance: CheckCircle,
    health: Heart,
    legal: Shield,
    innovation: Star
  };

  const categoryColors = {
    banking: 'bg-emerald-500',
    education: 'bg-blue-500',
    insurance: 'bg-teal-500',
    solidarity: 'bg-orange-500',
    ai: 'bg-cyan-500',
    compliance: 'bg-amber-500',
    health: 'bg-pink-500',
    legal: 'bg-purple-500',
    innovation: 'bg-indigo-500'
  };

  const statusColors = {
    production: 'bg-green-500',
    development: 'bg-yellow-500',
    planning: 'bg-blue-500',
    completed: 'bg-gray-500'
  };

  const priorityColors = {
    high: 'bg-red-500',
    medium: 'bg-yellow-500',
    low: 'bg-green-500'
  };

  const filteredProjects = portfolioProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = filters.category === 'all' || project.category === filters.category;
    const matchesStatus = filters.status === 'all' || project.status === filters.status;
    const matchesPriority = filters.priority === 'all' || project.priority === filters.priority;
    const matchesRegion = filters.region === 'all' || project.region.some(r => r.toLowerCase().includes(filters.region.toLowerCase()));

    return matchesSearch && matchesCategory && matchesStatus && matchesPriority && matchesRegion;
  });

  const categories = Array.from(new Set(portfolioProjects.map(p => p.category)));
  const statuses = Array.from(new Set(portfolioProjects.map(p => p.status)));
  const priorities = Array.from(new Set(portfolioProjects.map(p => p.priority)));
  const regions = Array.from(new Set(portfolioProjects.flatMap(p => p.region)));

  const ProjectCard = ({ project }: { project: PortfolioProject }) => {
    const CategoryIcon = categoryIcons[project.category];
    
    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Card 
          className="h-full cursor-pointer hover:shadow-lg transition-all"
          onClick={() => setSelectedProject(project)}
        >
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${categoryColors[project.category]}`}>
                  <CategoryIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 mt-1">
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${statusColors[project.status]} text-white`}
                    >
                      {project.status}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${priorityColors[project.priority]} text-white`}
                    >
                      {project.priority}
                    </Badge>
                  </div>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400" />
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {project.description}
            </p>
            
            <div className="space-y-3">
              {project.metrics && (
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {project.metrics.users && (
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {project.metrics.users.toLocaleString()}
                    </div>
                  )}
                  {project.metrics.countries && (
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {project.metrics.countries} pays
                    </div>
                  )}
                  {project.metrics.revenue && (
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {project.metrics.revenue}
                    </div>
                  )}
                  {project.metrics.languages && (
                    <div className="flex items-center gap-1">
                      <Globe className="h-3 w-3" />
                      {project.metrics.languages} langues
                    </div>
                  )}
                </div>
              )}
              
              <div className="flex items-center gap-2">
                {project.compliance.sharia && (
                  <Badge variant="outline" className="text-xs">
                    ✓ Sharia
                  </Badge>
                )}
                {project.compliance.rgpd && (
                  <Badge variant="outline" className="text-xs">
                    ✓ RGPD
                  </Badge>
                )}
                {project.compliance.aaoifi && (
                  <Badge variant="outline" className="text-xs">
                    ✓ AAOIFI
                  </Badge>
                )}
              </div>
              
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
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  const ProjectDetailModal = ({ project }: { project: PortfolioProject }) => {
    const CategoryIcon = categoryIcons[project.category];
    
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        onClick={() => setSelectedProject(null)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-slate-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${categoryColors[project.category]}`}>
                  <CategoryIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {project.description}
                  </p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Status & Priorité</h3>
                  <div className="space-y-2">
                    <Badge className={`${statusColors[project.status]} text-white`}>
                      {project.status}
                    </Badge>
                    <Badge className={`${priorityColors[project.priority]} text-white`}>
                      Priorité {project.priority}
                    </Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Timeline</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {project.timeline}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Régions</h3>
                  <div className="flex flex-wrap gap-1">
                    {project.region.map((region) => (
                      <Badge key={region} variant="outline" className="text-xs">
                        {region}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Équipe</h3>
                  <div className="space-y-1">
                    {project.team.map((member) => (
                      <p key={member} className="text-sm text-gray-600 dark:text-gray-300">
                        • {member}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Conformité</h3>
                  <div className="space-y-1">
                    {project.compliance.sharia && (
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Conforme Sharia
                      </div>
                    )}
                    {project.compliance.rgpd && (
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        RGPD Compliant
                      </div>
                    )}
                    {project.compliance.aaoifi && (
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Standards AAOIFI
                      </div>
                    )}
                    {project.compliance.finma && (
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Conforme FINMA
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {project.metrics && (
                  <div>
                    <h3 className="font-semibold mb-2">Métriques</h3>
                    <div className="space-y-2">
                      {project.metrics.users && (
                        <div className="flex items-center justify-between text-sm">
                          <span>Utilisateurs</span>
                          <span className="font-medium">{project.metrics.users.toLocaleString()}</span>
                        </div>
                      )}
                      {project.metrics.revenue && (
                        <div className="flex items-center justify-between text-sm">
                          <span>Revenus</span>
                          <span className="font-medium">{project.metrics.revenue}</span>
                        </div>
                      )}
                      {project.metrics.countries && (
                        <div className="flex items-center justify-between text-sm">
                          <span>Pays</span>
                          <span className="font-medium">{project.metrics.countries}</span>
                        </div>
                      )}
                      {project.metrics.languages && (
                        <div className="flex items-center justify-between text-sm">
                          <span>Langues</span>
                          <span className="font-medium">{project.metrics.languages}</span>
                        </div>
                      )}
                      {project.metrics.certifications && (
                        <div className="flex items-center justify-between text-sm">
                          <span>Certifications</span>
                          <span className="font-medium">{project.metrics.certifications}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {project.urls && (
                  <div>
                    <h3 className="font-semibold mb-2">Liens</h3>
                    <div className="space-y-2">
                      {project.urls.demo && (
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Eye className="h-4 w-4 mr-2" />
                          Démo
                        </Button>
                      )}
                      {project.urls.documentation && (
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Github className="h-4 w-4 mr-2" />
                          Documentation
                        </Button>
                      )}
                      {project.urls.app && (
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Application
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="features">Fonctionnalités</TabsTrigger>
                <TabsTrigger value="tech">Technologies</TabsTrigger>
                <TabsTrigger value="achievements">Réalisations</TabsTrigger>
                <TabsTrigger value="impact">Impact</TabsTrigger>
              </TabsList>

              <TabsContent value="features" className="mt-4">
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-slate-800 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="tech" className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="achievements" className="mt-4">
                <div className="space-y-3">
                  {project.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-slate-800 rounded-lg">
                      <Star className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="impact" className="mt-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                  <h4 className="font-semibold mb-2">Impact du Projet</h4>
                  <p className="text-gray-700 dark:text-gray-300">{project.impact}</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Header */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              <Smartphone className="h-4 w-4" />
              Portfolio Mobile Yakoubi Yamina
            </motion.div>
            
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Écosystème Club Empreinte Digitale
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez tous mes projets, innovations et réalisations dans l'écosystème 
              technologique le plus avancé conforme aux valeurs islamiques.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { 
              label: 'Projets Totaux', 
              value: animatedStats.projects, 
              icon: Building2,
              color: 'text-blue-600'
            },
            { 
              label: 'Utilisateurs Actifs', 
              value: animatedStats.users.toLocaleString(), 
              icon: Users,
              color: 'text-green-600'
            },
            { 
              label: 'Pays Couverts', 
              value: animatedStats.countries, 
              icon: MapPin,
              color: 'text-purple-600'
            },
            { 
              label: 'Langues Supportées', 
              value: animatedStats.languages, 
              icon: Globe,
              color: 'text-orange-600'
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-4 text-center">
                  <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Filters and Search */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filtres et Recherche
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher des projets, technologies, fonctionnalités..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white dark:bg-slate-800"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Catégorie</label>
                  <select
                    className="w-full p-2 border rounded-lg bg-white dark:bg-slate-800"
                    value={filters.category}
                    onChange={(e) => setFilters({...filters, category: e.target.value})}
                  >
                    <option value="all">Toutes</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Status</label>
                  <select
                    className="w-full p-2 border rounded-lg bg-white dark:bg-slate-800"
                    value={filters.status}
                    onChange={(e) => setFilters({...filters, status: e.target.value})}
                  >
                    <option value="all">Tous</option>
                    {statuses.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Priorité</label>
                  <select
                    className="w-full p-2 border rounded-lg bg-white dark:bg-slate-800"
                    value={filters.priority}
                    onChange={(e) => setFilters({...filters, priority: e.target.value})}
                  >
                    <option value="all">Toutes</option>
                    {priorities.map(priority => (
                      <option key={priority} value={priority}>{priority}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Région</label>
                  <select
                    className="w-full p-2 border rounded-lg bg-white dark:bg-slate-800"
                    value={filters.region}
                    onChange={(e) => setFilters({...filters, region: e.target.value})}
                  >
                    <option value="all">Toutes</option>
                    {regions.slice(0, 10).map(region => (
                      <option key={region} value={region}>{region}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects Grid */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Projets Portfolio ({filteredProjects.length})
            </h2>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Nouveau Projet
            </Button>
          </div>
          
          <AnimatePresence>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Aucun projet trouvé
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Essayez de modifier vos filtres ou votre recherche
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal project={selectedProject} />
        )}
      </AnimatePresence>

      <CEDFooter />
    </div>
  );
}