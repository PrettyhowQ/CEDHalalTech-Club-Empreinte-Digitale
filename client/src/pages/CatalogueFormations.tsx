import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FormationCatalog } from '@/components/catalog/FormationCatalog';
import { MarketDemandWidget } from '@/components/catalog/MarketDemandWidget';
import { ViabilityAnalysis } from '@/components/analytics/ViabilityAnalysis';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { ThemeCustomizer } from '@/components/ui/ThemeCustomizer';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { BarChart3, Search, Target } from 'lucide-react';

export default function CatalogueFormations() {
  const [activeView, setActiveView] = useState<'catalog' | 'analysis' | 'market'>('catalog');

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <ParticleBackground />
      <Header />
      <ThemeCustomizer />
      
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Navigation entre les vues */}
          <div className="flex justify-center gap-4">
            <Button
              variant={activeView === 'catalog' ? 'default' : 'outline'}
              onClick={() => setActiveView('catalog')}
            >
              <Search className="h-4 w-4 mr-2" />
              Catalogue Formations
            </Button>
            <Button
              variant={activeView === 'analysis' ? 'default' : 'outline'}
              onClick={() => setActiveView('analysis')}
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Analyse Stratégique
            </Button>
            <Button
              variant={activeView === 'market' ? 'default' : 'outline'}
              onClick={() => setActiveView('market')}
            >
              <Target className="h-4 w-4 mr-2" />
              Veille Marché
            </Button>
          </div>

          {/* Contenu selon la vue sélectionnée */}
          {activeView === 'catalog' && <FormationCatalog />}
          {activeView === 'analysis' && <ViabilityAnalysis />}
          {activeView === 'market' && <MarketDemandWidget />}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}