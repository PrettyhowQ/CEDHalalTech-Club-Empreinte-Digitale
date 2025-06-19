import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LiveClock } from '@/components/ui/LiveClock';
import { QuickAgenda } from '@/components/ui/QuickAgenda';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { ThemeCustomizer } from '@/components/ui/ThemeCustomizer';
import { HeroSection } from '@/components/sections/HeroSection';
import { FormationsSection } from '@/components/sections/FormationsSection';
import { ChatIARPSection } from '@/components/sections/ChatIARPSection';
import { EcosystemSection } from '@/components/sections/EcosystemSection';
import { IAEthiqueSection } from '@/components/sections/IAEthiqueSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { VoiceAssistant } from '@/components/voice/VoiceAssistant';

export default function Landing() {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <ParticleBackground />
      <Header />
      <LiveClock variant="desktop" />
      <QuickAgenda userId="guest" variant="compact" />
      <main className="relative z-10">
        <HeroSection />
        <FormationsSection />
        <ChatIARPSection />
        <EcosystemSection />
        <IAEthiqueSection />
        <TestimonialsSection />
        
        {/* Call to action for non-authenticated users */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Rejoignez la communauté IA responsable
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Connectez-vous pour accéder à votre dashboard personnalisé, 
              suivre vos progrès et débloquer des fonctionnalités exclusives.
            </p>
            <a href="/api/login">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-colors">
                Commencer gratuitement
              </button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <VoiceAssistant />
      <ThemeCustomizer />
    </div>
  );
}
