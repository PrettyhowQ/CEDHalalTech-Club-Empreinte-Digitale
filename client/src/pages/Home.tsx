import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { FormationsSection } from '@/components/sections/FormationsSection';
import { ChatIARPSection } from '@/components/sections/ChatIARPSection';
import { ModulesSection } from '@/components/sections/ModulesSection';
import { GenerateursSection } from '@/components/sections/GenerateursSection';
import { AcademieSection } from '@/components/sections/AcademieSection';
import { RechercheSection } from '@/components/sections/RechercheSection';
import { MentoratSection } from '@/components/sections/MentoratSection';
import { CommunauteSection } from '@/components/sections/CommunauteSection';
import { AutomatisationSection } from '@/components/sections/AutomatisationSection';
import { EspaceSanteSection } from '@/components/sections/EspaceSanteSection';
import { PlanningFormationsSection } from '@/components/sections/PlanningFormationsSection';
import { EntreprisesSection } from '@/components/sections/EntreprisesSection';
import { SimulateurBTSSection } from '@/components/sections/SimulateurBTSSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { EcosystemSection } from '@/components/sections/EcosystemSection';
import { IAEthiqueSection } from '@/components/sections/IAEthiqueSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { AnalyticsDashboard } from '@/components/sections/AnalyticsDashboard';
import { ImpactEnvironnementalSection } from '@/components/sections/ImpactEnvironnementalSection';
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
        <GenerateursSection />
        <AcademieSection />
        <RechercheSection />
        <MentoratSection />
        <CommunauteSection />
        <AutomatisationSection />
        <EspaceSanteSection />
        <PlanningFormationsSection />
        <EntreprisesSection />
        <SimulateurBTSSection />
        <PortfolioSection />
        <EcosystemSection />
        <IAEthiqueSection />
        <ImpactEnvironnementalSection />
        <TestimonialsSection />
        <AnalyticsDashboard />
      </main>
      <Footer />
      <VoiceAssistant />
    </div>
  );
}
