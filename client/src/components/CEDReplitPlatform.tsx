import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Code,
  Rocket,
  Server,
  Database,
  Globe,
  Shield,
  Zap,
  Users,
  GitBranch,
  Terminal,
  Cloud,
  Settings,
  Play,
  Pause,
  RotateCcw,
  Download,
  Upload,
  Monitor,
  Cpu,
  HardDrive,
  Wifi,
  Lock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  BarChart3,
  FileText,
  Package,
  Layers,
  BookOpen,
  DollarSign,
  Star,
  Award,
  Target,
  Compass,
  MapPin,
  Building2,
  CreditCard
} from 'lucide-react';

export function CEDReplitPlatform() {
  const [activeProject, setActiveProject] = useState('ced-bank-main');
  const [deploymentStatus, setDeploymentStatus] = useState<{ [key: string]: string }>({});
  const [isDeploying, setIsDeploying] = useState(false);

  const projectTemplates = [
    {
      id: 'ced-bank-full',
      name: 'CED Bank Complete',
      description: 'Écosystème bancaire islamique complet avec API Banking Halal',
      category: 'fintech',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'OpenAI'],
      complexity: 'enterprise',
      deployTime: '3-5 minutes',
      users: 15847,
      status: 'production',
      pricing: 'premium',
      features: [
        'API Banking Halal 25+ langages',
        'Cartes Gold Yakoubi 6 niveaux',
        'Conformité Charia AAOIFI',
        'Mode prière automatique',
        'Boussole Qibla GPS',
        'Dashboard analytics temps réel',
        'Support multi-devises',
        'Sécurité bancaire niveau 1'
      ]
    },
    {
      id: 'al-aman-takaful',
      name: 'Al-Aman CED Takaful',
      description: 'Première assurance Takaful intégrée API Banking mondiale',
      category: 'insurance',
      tech: ['React', 'TypeScript', 'PostgreSQL', 'Drizzle', 'Framer Motion'],
      complexity: 'advanced',
      deployTime: '2-3 minutes',
      users: 12450,
      status: 'beta',
      pricing: 'professional',
      features: [
        'Gouvernance AAOIFI/IFSB',
        'Sharia Board 5 experts',
        'Compliance européenne',
        'Intégration CED Bank',
        'Templates démarchage trilingue',
        'Documentation arabe complète',
        'Section Webflow ready',
        'Prototype investisseur complet'
      ]
    },
    {
      id: 'ced-formations',
      name: 'Plateforme Formation IA',
      description: 'Système complet formation IA éthique avec assistant IARP',
      category: 'education',
      tech: ['React', 'OpenAI', 'PostgreSQL', 'TanStack Query'],
      complexity: 'intermediate',
      deployTime: '1-2 minutes',
      users: 34222,
      status: 'production',
      pricing: 'standard',
      features: [
        '12 formations IA éthique',
        'Chat IARP multilingue',
        'Système certification',
        'Dashboard apprenant',
        'Suivi progression',
        'Forums communauté',
        'Mentorat expert',
        'Simulation BTS'
      ]
    },
    {
      id: 'techforall-ecosystem',
      name: 'TechForAll Solidaire',
      description: 'Plateforme donation et reconditionnement équipement tech',
      category: 'nonprofit',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      complexity: 'intermediate',
      deployTime: '2 minutes',
      users: 8492,
      status: 'production',
      pricing: 'community',
      features: [
        'Système donation automatisé',
        'Boutique solidaire',
        'Centre logistique Costa del Sol',
        'Avantages fiscaux EU',
        'Suivi GPS livraisons',
        'Reconditionnement certifié',
        'Support expatriés',
        'Partenariat CED Bank'
      ]
    },
    {
      id: 'ced-code-platform',
      name: 'CED Code Platform',
      description: 'Plateforme développement et formation code (2026-2027)',
      category: 'development',
      tech: ['React', 'Monaco Editor', 'Docker', 'Kubernetes'],
      complexity: 'enterprise',
      deployTime: '5-7 minutes',
      users: 0,
      status: 'development',
      pricing: 'enterprise',
      features: [
        'IDE intégré navigateur',
        'Collaboration temps réel',
        'Templates projets',
        'Mentorat seniors',
        'Placement emploi',
        'Certification développeur',
        'Communauté mondiale',
        'Stack moderne complet'
      ]
    },
    {
      id: 'citadelle-musulman',
      name: 'La Citadelle du Musulman',
      description: 'Fonctionnalités spirituelles intégrées banking',
      category: 'spiritual',
      tech: ['React', 'Geolocation API', 'Islamic Calendar'],
      complexity: 'basic',
      deployTime: '1 minute',
      users: 28934,
      status: 'production',
      pricing: 'free',
      features: [
        'Qibla Compass précis',
        'Horaires prières GPS',
        'Calculateur Zakat',
        'Mode prière banking',
        'Calendrier lunaire',
        'Invocations quotidiennes',
        'Rappels spirituels',
        'Interface multilingue'
      ]
    }
  ];

  const deploymentRegions = [
    {
      id: 'europe-west',
      name: 'Europe Ouest',
      location: 'Paris, France',
      latency: '15ms',
      compliance: ['GDPR', 'PCI DSS'],
      pricing: '€0.12/GB',
      status: 'active'
    },
    {
      id: 'middle-east',
      name: 'Moyen-Orient',
      location: 'Dubai, EAU',
      latency: '12ms',
      compliance: ['CBUAE', 'Islamic Banking'],
      pricing: '€0.10/GB',
      status: 'active'
    },
    {
      id: 'asia-southeast',
      name: 'Asie Sud-Est',
      location: 'Singapour',
      latency: '25ms',
      compliance: ['MAS', 'Halal Certification'],
      pricing: '€0.08/GB',
      status: 'planned'
    },
    {
      id: 'north-america',
      name: 'Amérique Nord',
      location: 'New York, USA',
      latency: '45ms',
      compliance: ['SOC 2', 'FINRA'],
      pricing: '€0.15/GB',
      status: 'active'
    }
  ];

  const handleDeploy = async (projectId: string) => {
    setIsDeploying(true);
    setDeploymentStatus(prev => ({ ...prev, [projectId]: 'deploying' }));
    
    // Simulation déploiement
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setDeploymentStatus(prev => ({ ...prev, [projectId]: 'deployed' }));
    setIsDeploying(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'production': return 'bg-green-500';
      case 'beta': return 'bg-blue-500';
      case 'development': return 'bg-yellow-500';
      case 'deployed': return 'bg-green-500';
      case 'deploying': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'free': return 'text-green-600';
      case 'community': return 'text-blue-600';
      case 'standard': return 'text-purple-600';
      case 'professional': return 'text-orange-600';
      case 'premium': return 'text-red-600';
      case 'enterprise': return 'text-gray-900';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">CED Cloud Platform</h1>
                <p className="text-gray-300">Déploiement & hébergement écosystème fintech islamique</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                <CheckCircle className="mr-1 h-3 w-3" />
                99.9% Uptime
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                <Shield className="mr-1 h-3 w-3" />
                FINMA Ready
              </Badge>
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                <Award className="mr-1 h-3 w-3" />
                Sharia Compliant
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-white/5">
            <TabsTrigger value="projects" className="text-white">Projets</TabsTrigger>
            <TabsTrigger value="deploy" className="text-white">Déploiement</TabsTrigger>
            <TabsTrigger value="analytics" className="text-white">Analytics</TabsTrigger>
            <TabsTrigger value="pricing" className="text-white">Pricing</TabsTrigger>
            <TabsTrigger value="enterprise" className="text-white">Enterprise</TabsTrigger>
          </TabsList>

          {/* Projets */}
          <TabsContent value="projects" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Templates Écosystème CED
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Déployez instantanément votre infrastructure fintech islamique avec nos templates 
                pré-configurés conformes AAOIFI et optimisés pour la performance mondiale.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {projectTemplates.map((project) => (
                <Card key={project.id} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-white mb-2">{project.name}</CardTitle>
                        <CardDescription className="text-gray-300">
                          {project.description}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className={`${getStatusColor(project.status)} text-white`}>
                          {project.status}
                        </Badge>
                        <span className={`text-sm font-bold ${getPricingColor(project.pricing)}`}>
                          {project.pricing}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {/* Tech stack */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs border-gray-600 text-gray-300">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Métriques */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-lg font-bold text-white">{project.users.toLocaleString()}</div>
                          <div className="text-xs text-gray-400">Utilisateurs actifs</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-400">{project.deployTime}</div>
                          <div className="text-xs text-gray-400">Temps déploiement</div>
                        </div>
                      </div>

                      {/* Features principales */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-2">Fonctionnalités clés</h4>
                        <div className="space-y-1">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                              <span className="text-xs text-gray-300">{feature}</span>
                            </div>
                          ))}
                          {project.features.length > 3 && (
                            <div className="text-xs text-gray-500">
                              +{project.features.length - 3} autres fonctionnalités
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 pt-2">
                        <Button 
                          size="sm" 
                          className="flex-1 bg-blue-600 hover:bg-blue-700"
                          onClick={() => handleDeploy(project.id)}
                          disabled={isDeploying}
                        >
                          {deploymentStatus[project.id] === 'deploying' ? (
                            <>
                              <Zap className="mr-1 h-3 w-3 animate-spin" />
                              Déploiement...
                            </>
                          ) : deploymentStatus[project.id] === 'deployed' ? (
                            <>
                              <CheckCircle className="mr-1 h-3 w-3" />
                              Déployé
                            </>
                          ) : (
                            <>
                              <Rocket className="mr-1 h-3 w-3" />
                              Déployer
                            </>
                          )}
                        </Button>
                        <Button size="sm" variant="outline" className="border-gray-600">
                          <GitBranch className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-gray-600">
                          <Settings className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Déploiement */}
          <TabsContent value="deploy" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Infrastructure Mondiale
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Déployez dans 4 régions stratégiques avec conformité locale et latence optimisée 
                pour vos utilisateurs fintech islamique.
              </p>
            </div>

            {/* Régions de déploiement */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deploymentRegions.map((region) => (
                <Card key={region.id} className="bg-white/5 border-white/10">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white text-lg">{region.name}</CardTitle>
                      <Badge className={region.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'}>
                        {region.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{region.location}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="text-2xl font-bold text-green-400">{region.latency}</div>
                        <div className="text-xs text-gray-400">Latence moyenne</div>
                      </div>
                      
                      <div>
                        <div className="text-lg font-bold text-blue-400">{region.pricing}</div>
                        <div className="text-xs text-gray-400">Prix par GB/mois</div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-1">Conformité</h4>
                        <div className="space-y-1">
                          {region.compliance.map((cert) => (
                            <Badge key={cert} variant="outline" className="text-xs border-gray-600 text-gray-300">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button 
                        size="sm" 
                        className="w-full"
                        disabled={region.status !== 'active'}
                      >
                        {region.status === 'active' ? 'Déployer ici' : 'Bientôt disponible'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Configuration déploiement */}
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Configuration Déploiement</CardTitle>
                <CardDescription className="text-gray-300">
                  Personnalisez votre environnement de production
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label className="text-gray-300">Nom du projet</Label>
                    <Input 
                      placeholder="mon-projet-ced"
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-gray-300">Template</Label>
                    <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Choisir template" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ced-bank">CED Bank Complete</SelectItem>
                        <SelectItem value="takaful">Al-Aman Takaful</SelectItem>
                        <SelectItem value="formations">Plateforme Formation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-gray-300">Région</Label>
                    <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Choisir région" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="eu-west">Europe Ouest</SelectItem>
                        <SelectItem value="me-dubai">Moyen-Orient</SelectItem>
                        <SelectItem value="na-east">Amérique Nord</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mt-6">
                  <Label className="text-gray-300">Variables d'environnement</Label>
                  <Textarea 
                    placeholder="DATABASE_URL=postgresql://...&#10;OPENAI_API_KEY=sk-...&#10;STRIPE_SECRET_KEY=sk_..."
                    className="mt-2 bg-white/10 border-white/20 text-white font-mono text-sm"
                    rows={4}
                  />
                </div>

                <div className="flex gap-4 mt-6">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Rocket className="mr-2 h-4 w-4" />
                    Déployer en Production
                  </Button>
                  <Button variant="outline" className="border-gray-600">
                    <GitBranch className="mr-2 h-4 w-4" />
                    Créer Staging
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Analytics Performance
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Monitoring temps réel de votre infrastructure fintech avec métriques business et techniques.
              </p>
            </div>

            {/* Métriques globales */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/5 border-white/10">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-400">Utilisateurs Total</p>
                      <p className="text-2xl font-bold text-white">71,011</p>
                      <p className="text-xs text-green-400">+12.5% ce mois</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-400">Uptime</p>
                      <p className="text-2xl font-bold text-white">99.97%</p>
                      <p className="text-xs text-green-400">SLA dépassé</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-400">Latence Moy.</p>
                      <p className="text-2xl font-bold text-white">127ms</p>
                      <p className="text-xs text-green-400">-15ms vs hier</p>
                    </div>
                    <Zap className="h-8 w-8 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-400">Revenus/Mois</p>
                      <p className="text-2xl font-bold text-white">€127K</p>
                      <p className="text-xs text-green-400">+24.3% MoM</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance par projet */}
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Performance par Projet</CardTitle>
                <CardDescription className="text-gray-300">
                  Métriques détaillées de chaque service de l'écosystème CED
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {projectTemplates.slice(0, 4).map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <Code className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{project.name}</h4>
                          <p className="text-sm text-gray-400">{project.users.toLocaleString()} utilisateurs</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-8">
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-400">99.{95 + Math.floor(Math.random() * 5)}%</div>
                          <div className="text-xs text-gray-400">Uptime</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-400">{100 + Math.floor(Math.random() * 100)}ms</div>
                          <div className="text-xs text-gray-400">Latence</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-purple-400">{Math.floor(Math.random() * 50) + 50}%</div>
                          <div className="text-xs text-gray-400">CPU</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-orange-400">€{Math.floor(Math.random() * 50) + 10}K</div>
                          <div className="text-xs text-gray-400">Revenus</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pricing */}
          <TabsContent value="pricing" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Plans CED Cloud
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Choisissez le plan adapté à votre croissance, de la startup à l'enterprise banking internationale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Starter */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Starter</CardTitle>
                  <CardDescription className="text-gray-300">Pour débuter votre fintech</CardDescription>
                  <div className="text-3xl font-bold text-white">Gratuit</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      1 projet actif
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      500 utilisateurs max
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Templates communauté
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Support forum
                    </li>
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    Commencer Gratuitement
                  </Button>
                </CardContent>
              </Card>

              {/* Professional */}
              <Card className="bg-white/5 border-blue-500/50 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white">Populaire</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">Professional</CardTitle>
                  <CardDescription className="text-gray-300">Pour fintech en croissance</CardDescription>
                  <div className="text-3xl font-bold text-white">€49<span className="text-lg text-gray-400">/mois</span></div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      5 projets actifs
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      10K utilisateurs max
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Templates premium
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Support prioritaire
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Analytics avancées
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    Choisir Professional
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Enterprise</CardTitle>
                  <CardDescription className="text-gray-300">Pour banques établies</CardDescription>
                  <div className="text-3xl font-bold text-white">€299<span className="text-lg text-gray-400">/mois</span></div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Projets illimités
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      100K+ utilisateurs
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      White-label complet
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Support dédié 24/7
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Compliance sur mesure
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                    Contacter Ventes
                  </Button>
                </CardContent>
              </Card>

              {/* Custom */}
              <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/50">
                <CardHeader>
                  <CardTitle className="text-white">Sur Mesure</CardTitle>
                  <CardDescription className="text-gray-300">Solution personnalisée</CardDescription>
                  <div className="text-3xl font-bold text-white">Sur Devis</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      Infrastructure dédiée
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      Développement custom
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      Intégration legacy
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      SLA personnalisé
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      Consulting stratégique
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                    Demander Devis
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Enterprise */}
          <TabsContent value="enterprise" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Solutions Enterprise
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Infrastructure bancaire de niveau enterprise avec conformité réglementaire mondiale 
                et support dédié pour institutions financières.
              </p>
            </div>

            {/* Services Enterprise */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white">Infrastructure Dédiée</CardTitle>
                      <CardDescription className="text-gray-300">
                        Serveurs privés avec SLA 99.99%
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Serveurs dédiés multi-régions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Load balancing automatique
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Backup temps réel géo-distribué
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Monitoring 24/7 avec alertes
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white">Conformité Globale</CardTitle>
                      <CardDescription className="text-gray-300">
                        Certifications bancaires internationales
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      FINMA (Suisse) ready
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      CBUAE (EAU) compliant
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      SAMA (Arabie Saoudite) certified
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      PCI DSS Level 1
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white">Support Dédié</CardTitle>
                      <CardDescription className="text-gray-300">
                        Équipe dédiée experts banking
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Account manager personnel
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Support 24/7 téléphone & chat
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Formation équipes sur site
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Consulting stratégique inclus
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white">Développement Sur Mesure</CardTitle>
                      <CardDescription className="text-gray-300">
                        Features custom et intégrations
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      API personnalisées métier
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Intégration systèmes legacy
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      White-label complet
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Modules conformité spécifiques
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Enterprise */}
            <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-white">
                  Prêt pour l'Enterprise ?
                </CardTitle>
                <CardDescription className="text-center text-gray-300">
                  Parlons de vos besoins spécifiques et créons une solution sur mesure
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="text-center space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-white/5 rounded-lg">
                      <CreditCard className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                      <h4 className="text-white font-bold">Devis Gratuit</h4>
                      <p className="text-gray-300 text-sm">Évaluation complète besoins</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg">
                      <Target className="h-8 w-8 text-green-400 mx-auto mb-2" />
                      <h4 className="text-white font-bold">POC 30 jours</h4>
                      <p className="text-gray-300 text-sm">Proof of concept gratuit</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg">
                      <Award className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                      <h4 className="text-white font-bold">SLA Garantie</h4>
                      <p className="text-gray-300 text-sm">99.99% uptime contractuel</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 justify-center">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4">
                      <Building2 className="mr-2 h-5 w-5" />
                      Contacter Enterprise
                    </Button>
                    <Button size="lg" variant="outline" className="border-gray-600 px-8 py-4">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Documentation API
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}