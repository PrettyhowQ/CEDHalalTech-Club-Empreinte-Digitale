import { useState, useEffect } from 'react';
import { PortfolioMobileRedirection } from '@/components/PortfolioMobileRedirection';
import { GulfRespectfulInterface } from '@/components/GulfRespectfulInterface';
import { PortfolioMobileApp } from '@/components/PortfolioMobileApp';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Globe, 
  Shield, 
  Eye,
  EyeOff,
  Settings
} from 'lucide-react';

export default function PortfolioMobilePage() {
  const [viewMode, setViewMode] = useState<'auto' | 'gulf' | 'international'>('auto');
  const [isGulfRegion, setIsGulfRegion] = useState(false);

  useEffect(() => {
    // Détection automatique région
    const detectRegion = () => {
      const language = navigator.language || 'en';
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      const gulfLanguages = ['ar', 'ar-SA', 'ar-AE', 'ar-QA', 'ar-KW', 'ar-BH', 'ar-OM'];
      const gulfTimezones = [
        'Asia/Riyadh', 'Asia/Dubai', 'Asia/Qatar', 'Asia/Kuwait', 
        'Asia/Bahrain', 'Asia/Muscat'
      ];
      
      const isGulf = gulfLanguages.some(lang => language.startsWith(lang)) || 
                    gulfTimezones.includes(timezone);
      
      setIsGulfRegion(isGulf);
      
      if (viewMode === 'auto') {
        return isGulf ? 'gulf' : 'international';
      }
      return viewMode;
    };

    detectRegion();
  }, [viewMode]);

  const currentView = viewMode === 'auto' ? (isGulfRegion ? 'gulf' : 'international') : viewMode;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Header avec sélection de vue */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Smartphone className="h-6 w-6 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Portfolio Mobile
                </h1>
              </div>
              
              <Badge variant={currentView === 'gulf' ? 'default' : 'secondary'}>
                {currentView === 'gulf' ? (
                  <>
                    <Shield className="h-3 w-3 mr-1" />
                    Version Respectueuse Golfe
                  </>
                ) : (
                  <>
                    <Globe className="h-3 w-3 mr-1" />
                    Version Internationale
                  </>
                )}
              </Badge>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'auto' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('auto')}
              >
                <Settings className="h-4 w-4 mr-2" />
                Auto
              </Button>
              
              <Button
                variant={viewMode === 'gulf' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('gulf')}
              >
                <Shield className="h-4 w-4 mr-2" />
                Golfe
              </Button>
              
              <Button
                variant={viewMode === 'international' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('international')}
              >
                <Globe className="h-4 w-4 mr-2" />
                International
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu adaptatif */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="redirection" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="redirection">Redirection Apps</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio Complet</TabsTrigger>
            <TabsTrigger value="respectful">Interface Respectueuse</TabsTrigger>
          </TabsList>

          <TabsContent value="redirection" className="mt-6">
            <PortfolioMobileRedirection />
          </TabsContent>

          <TabsContent value="portfolio" className="mt-6">
            <PortfolioMobileApp />
          </TabsContent>

          <TabsContent value="respectful" className="mt-6">
            {currentView === 'gulf' ? (
              <GulfRespectfulInterface />
            ) : (
              <div className="text-center py-12">
                <Globe className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Version Internationale Active
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Interface standard avec toutes les fonctionnalités disponibles
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setViewMode('gulf')}
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Basculer vers Version Respectueuse
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}