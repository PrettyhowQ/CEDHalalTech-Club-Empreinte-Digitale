import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ViabilityAnalysis } from '@/components/analytics/ViabilityAnalysis';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { ThemeCustomizer } from '@/components/ui/ThemeCustomizer';

export default function AnalyseStrategique() {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <ParticleBackground />
      <Header />
      <ThemeCustomizer />
      
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ViabilityAnalysis />
      </main>
      
      <Footer />
    </div>
  );
}