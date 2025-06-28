import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Smartphone,
  Monitor,
  Download,
  ExternalLink,
  Apple,
  PlaySquare,
  Globe,
  QrCode,
  Star,
  Zap,
  Award,
  Users,
  TrendingUp,
  Eye,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  CheckCircle,
  Clock,
  Building2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CEDFooter } from './CEDFooter';

interface PortfolioApp {
  platform: 'pwa' | 'ios' | 'android' | 'web';
  name: string;
  description: string;
  url: string;
  status: 'available' | 'coming_soon' | 'beta';
  icon: any;
  color: string;
  features: string[];
  lastUpdate: string;
  version: string;
  downloads?: number;
  rating?: number;
}

interface ProjectCategory {
  id: string;
  name: string;
  description: string;
  projectCount: number;
  icon: any;
  color: string;
  featured: boolean;
}

export function PortfolioMobileRedirection() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('overview');

  const portfolioApps: PortfolioApp[] = [
    {
      platform: 'pwa',
      name: 'Portfolio Yakoubi PWA',
      description: 'Application Web Progressive multi-plateforme avec fonctionnalités natives',
      url: 'https://portfolio.yakoubi-yamina.app',
      status: 'available',
      icon: Globe,
      color: 'bg-blue-500',
      features: ['Offline Ready', 'Push Notifications', 'App-like Experience', 'Auto-Updates'],
      lastUpdate: '28 Jan 2025',
      version: '2.1.0',
      rating: 4.9
    },
    {
      platform: 'ios',
      name: 'Portfolio Yakoubi iOS',
      description: 'Application native iOS optimisée pour iPhone et iPad',
      url: 'https://apps.apple.com/portfolio-yakoubi-yamina',
      status: 'coming_soon',
      icon: Apple,
      color: 'bg-gray-800',
      features: ['iOS Widgets', 'Siri Shortcuts', 'Face ID', 'Handoff Support'],
      lastUpdate: 'Q2 2025',
      version: '1.0.0',
      downloads: 0
    },
    {
      platform: 'android',
      name: 'Portfolio Yakoubi Android',
      description: 'Application native Android avec Material Design 3',
      url: 'https://play.google.com/store/apps/portfolio-yakoubi',
      status: 'coming_soon',
      icon: PlaySquare,
      color: 'bg-green-500',
      features: ['Material You', 'Android Auto', 'Adaptive Icons', 'Background Sync'],
      lastUpdate: 'Q3 2025',
      version: '1.0.0',
      downloads: 0
    },
    {
      platform: 'web',
      name: 'Portfolio Web Complet',
      description: 'Version web complète avec toutes les fonctionnalités avancées',
      url: 'https://yakoubi-yamina.dev',
      status: 'available',
      icon: Monitor,
      color: 'bg-purple-500',
      features: ['Responsive Design', 'Dark Mode', 'RTL Support', 'Multi-language'],
      lastUpdate: '28 Jan 2025',
      version: '3.0.0',
      rating: 5.0
    }
  ];

  const projectCategories: ProjectCategory[] = [
    {
      id: 'banking',
      name: 'CED Bank Écosystème',
      description: 'Banking digital halal, cartes virtuelles, multi-devises',
      projectCount: 12,
      icon: Building2,
      color: 'bg-emerald-500',
      featured: true
    },
    {
      id: 'education',
      name: 'Institut CED Academy',
      description: 'Formations IA éthique, 78 langues, certifications',
      projectCount: 25,
      icon: Award,
      color: 'bg-blue-500',
      featured: true
    },
    {
      id: 'insurance',
      name: 'Al-Aman CED Takaful',
      description: 'Assurance islamique complète, conformité Sharia',
      projectCount: 8,
      icon: CheckCircle,
      color: 'bg-teal-500',
      featured: true
    },
    {
      id: 'solidarity',
      name: 'TechForAll Solidarité',
      description: 'Dons technologiques, construction écologique',
      projectCount: 15,
      icon: Users,
      color: 'bg-orange-500',
      featured: true
    },
    {
      id: 'ai',
      name: 'Super IARP Pro',
      description: 'IA multimodale éthique, assistance spirituelle',
      projectCount: 6,
      icon: Zap,
      color: 'bg-cyan-500',
      featured: true
    },
    {
      id: 'compliance',
      name: 'Fiqh Informatique',
      description: 'Manuel complet, 150+ règles tech halal',
      projectCount: 4,
      icon: Star,
      color: 'bg-amber-500',
      featured: false
    }
  ];

  const portfolioStats = {
    totalProjects: 70,
    totalUsers: 41343,
    countries: 78,
    languages: 78,
    certifications: 12,
    partnerships: 25
  };

  const handleRedirection = (url: string, platform: string) => {
    // Analytics tracking
    console.log(`Redirection vers ${platform}: ${url}`);
    
    // Open in new tab/window
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const generateQRCode = (url: string) => {
    // Simulation QR Code pour la démo
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Header Section */}
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
              Accédez au Portfolio Complet
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez tous mes projets, compétences et réalisations dans l'écosystème 
              Club Empreinte Digitale via nos applications mobiles et web optimisées.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {[
            { label: 'Projets Totaux', value: portfolioStats.totalProjects, icon: Building2 },
            { label: 'Utilisateurs', value: portfolioStats.totalUsers.toLocaleString(), icon: Users },
            { label: 'Pays', value: portfolioStats.countries, icon: Globe },
            { label: 'Langues', value: portfolioStats.languages, icon: TrendingUp },
            { label: 'Certifications', value: portfolioStats.certifications, icon: Award },
            { label: 'Partenariats', value: portfolioStats.partnerships, icon: Star }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center">
                <CardContent className="p-4">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Platform Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Choisissez Votre Plateforme
            </CardTitle>
            <CardDescription>
              Accédez au portfolio complet sur votre plateforme préférée
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {portfolioApps.map((app) => (
                <motion.div
                  key={app.platform}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="h-full cursor-pointer hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg ${app.color}`}>
                          <app.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {app.name}
                          </h3>
                          <Badge 
                            variant={app.status === 'available' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {app.status === 'available' ? 'Disponible' : 
                             app.status === 'beta' ? 'Bêta' : 'Bientôt'}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        {app.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        {app.features.slice(0, 2).map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-xs">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span>v{app.version}</span>
                        <span>{app.lastUpdate}</span>
                      </div>
                      
                      {app.rating && (
                        <div className="flex items-center gap-1 mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star}
                              className={`h-4 w-4 ${star <= app.rating! ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                          <span className="text-sm ml-2">{app.rating}</span>
                        </div>
                      )}
                      
                      <Button 
                        className="w-full"
                        onClick={() => handleRedirection(app.url, app.platform)}
                        disabled={app.status !== 'available'}
                      >
                        {app.status === 'available' ? (
                          <>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Accéder
                          </>
                        ) : (
                          <>
                            <Clock className="h-4 w-4 mr-2" />
                            Bientôt
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Project Categories Preview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Aperçu des Projets Portfolio
            </CardTitle>
            <CardDescription>
              Découvrez les différentes catégories de projets dans le portfolio complet
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectCategories.map((category) => (
                <motion.div
                  key={category.id}
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${category.color}`}>
                          <category.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {category.name}
                          </h3>
                          {category.featured && (
                            <Badge variant="secondary" className="text-xs">
                              Featured
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        {category.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-blue-600">
                          {category.projectCount} projets
                        </span>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* QR Codes for Quick Access */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <QrCode className="h-5 w-5" />
              Accès Rapide via QR Code
            </CardTitle>
            <CardDescription>
              Scannez pour accéder directement depuis votre mobile
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioApps.filter(app => app.status === 'available').map((app) => (
                <div key={app.platform} className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-3 inline-block">
                    <img 
                      src={generateQRCode(app.url)}
                      alt={`QR Code ${app.name}`}
                      className="w-32 h-32"
                    />
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    {app.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    Scan pour accès direct
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Professional */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Contact Professionnel
            </CardTitle>
            <CardDescription>
              Pour collaborations B2B, partenariats stratégiques et projets d'envergure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button 
                variant="outline" 
                className="h-auto p-4"
                onClick={() => window.open('mailto:yamina.yakoubi@club-empreinte-digitale.org', '_blank')}
              >
                <div className="text-center">
                  <Mail className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-medium">Email Professionnel</div>
                  <div className="text-xs text-gray-500">yamina.yakoubi@club-empreinte-digitale.org</div>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto p-4"
                onClick={() => window.open('https://linkedin.com/in/yakoubi-yamina', '_blank')}
              >
                <div className="text-center">
                  <Linkedin className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-medium">LinkedIn</div>
                  <div className="text-xs text-gray-500">Réseau professionnel</div>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto p-4"
                onClick={() => window.open('https://github.com/yakoubi-yamina', '_blank')}
              >
                <div className="text-center">
                  <Github className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-medium">GitHub</div>
                  <div className="text-xs text-gray-500">Projets techniques</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <CEDFooter />
    </div>
  );
}