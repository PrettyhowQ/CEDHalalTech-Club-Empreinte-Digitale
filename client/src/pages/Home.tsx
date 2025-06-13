import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { FormationsSection } from '@/components/sections/FormationsSection';
import { ChatIARPSection } from '@/components/sections/ChatIARPSection';
import { ModulesSection } from '@/components/sections/ModulesSection';
import { EcosystemSection } from '@/components/sections/EcosystemSection';
import { IAEthiqueSection } from '@/components/sections/IAEthiqueSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { AnalyticsDashboard } from '@/components/sections/AnalyticsDashboard';
import { VoiceAssistant } from '@/components/voice/VoiceAssistant';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FormationsSection />
        <ChatIARPSection />
        <ModulesSection />
        <EcosystemSection />
        <IAEthiqueSection />
        <TestimonialsSection />
        <AnalyticsDashboard />
      </main>
      <Footer />
      <VoiceAssistant />
    </div>
  );
}
