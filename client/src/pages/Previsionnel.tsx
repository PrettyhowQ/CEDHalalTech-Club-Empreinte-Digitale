import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RevenueForecasting } from '@/components/sections/RevenueForecasting';
import { RealTimeFinanceWidget } from '@/components/ui/RealTimeFinanceWidget';
import { AIGeneratorWidget } from '@/components/ui/AIGeneratorWidget';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { ThemeCustomizer } from '@/components/ui/ThemeCustomizer';

export default function Previsionnel() {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <ParticleBackground />
      <Header />
      <ThemeCustomizer />
      
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Titre principal */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-4">
              Centre Financier & Prévisionnel
            </h1>
            <p className="text-xl text-white/80 drop-shadow-lg">
              Projections sur 5 ans et outils d'analyse en temps réel
            </p>
          </div>

          {/* Widget financier temps réel */}
          <RealTimeFinanceWidget variant="full" />

          {/* Prévisionnel détaillé */}
          <RevenueForecasting />

          {/* Générateur IA */}
          <AIGeneratorWidget variant="full" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}