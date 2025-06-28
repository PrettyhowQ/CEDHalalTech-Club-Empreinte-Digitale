import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone,
  ExternalLink,
  Download,
  Apple,
  PlaySquare,
  Globe,
  Shield,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

interface PortfolioNavigationWidgetProps {
  className?: string;
  compact?: boolean;
}

export function PortfolioNavigationWidget({ 
  className = "",
  compact = false 
}: PortfolioNavigationWidgetProps) {
  
  const handleRedirection = (route: string) => {
    window.open(route, '_blank', 'noopener,noreferrer');
  };

  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border rounded-lg p-4 ${className}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Smartphone className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium">Portfolio Mobile</span>
          </div>
          <Button 
            size="sm" 
            onClick={() => handleRedirection('/portfolio-mobile')}
            className="text-xs"
          >
            Accéder
            <ArrowRight className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 ${className}`}
    >
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Smartphone className="h-5 w-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Portfolio Mobile Yakoubi Yamina
          </h3>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          Découvrez tous mes projets dans l'écosystème Club Empreinte Digitale
        </p>
        
        <div className="flex items-center justify-center gap-2 mb-4">
          <Badge variant="outline" className="text-xs">
            <Shield className="h-3 w-3 mr-1" />
            Version Respectueuse Golfe
          </Badge>
          <Badge variant="outline" className="text-xs">
            70+ Projets
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <Button 
          variant="outline" 
          size="sm" 
          className="h-auto p-3 flex flex-col items-center gap-2"
          onClick={() => handleRedirection('/portfolio-mobile')}
        >
          <Globe className="h-4 w-4" />
          <div className="text-xs text-center">
            <div className="font-medium">PWA</div>
            <div className="text-gray-500">Progressive Web App</div>
          </div>
        </Button>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="h-auto p-3 flex flex-col items-center gap-2"
          onClick={() => handleRedirection('/portfolio-mobile')}
        >
          <Apple className="h-4 w-4" />
          <div className="text-xs text-center">
            <div className="font-medium">iOS</div>
            <div className="text-gray-500">Bientôt disponible</div>
          </div>
        </Button>
      </div>

      <Button 
        className="w-full"
        onClick={() => handleRedirection('/portfolio-mobile')}
      >
        <ExternalLink className="h-4 w-4 mr-2" />
        Accéder au Portfolio Complet
      </Button>
      
      <div className="text-center mt-3">
        <p className="text-xs text-gray-500">
          Interface adaptée pour présentation pays du Golfe
        </p>
      </div>
    </motion.div>
  );
}