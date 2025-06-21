import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LiveClock } from '@/components/ui/LiveClock';
import { QuickAgenda } from '@/components/ui/QuickAgenda';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { ThemeCustomizer } from '@/components/ui/ThemeCustomizer';
import { RealTimeFinanceWidget } from '@/components/ui/RealTimeFinanceWidget';
import { AIGeneratorWidget } from '@/components/ui/AIGeneratorWidget';
import { NutritionWidget } from '@/components/ui/NutritionWidget';
import { SportWidget } from '@/components/ui/SportWidget';
import { HeroSection } from '@/components/sections/HeroSection';
import { CEDBankSection } from '@/components/sections/CEDBankSection';
import { ChatIARPSection } from '@/components/sections/ChatIARPSection';
import { FormationsSection } from '@/components/sections/FormationsSection';
import { AcademieSection } from '@/components/sections/AcademieSection';
import { AutomatisationSection } from '@/components/sections/AutomatisationSection';
import { EntreprisesSection } from '@/components/sections/EntreprisesSection';
import { ProgrammingLanguagesSection } from '@/components/sections/ProgrammingLanguagesSection';
import { EspaceSanteSection } from '@/components/sections/EspaceSanteSection';
import { SimulateurBTSSection } from '@/components/sections/SimulateurBTSSection';
import { ModulesSection } from '@/components/sections/ModulesSection';
import { GenerateursSection } from '@/components/sections/GenerateursSection';
import { RechercheSection } from '@/components/sections/RechercheSection';
import { MentoratSection } from '@/components/sections/MentoratSection';
import { CommunauteSection } from '@/components/sections/CommunauteSection';
import { PlanningFormationsSection } from '@/components/sections/PlanningFormationsSection';
import { RealTimeMonitoringSection } from '@/components/sections/RealTimeMonitoringSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { EcosystemSection } from '@/components/sections/EcosystemSection';
import { IAEthiqueSection } from '@/components/sections/IAEthiqueSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { AnalyticsDashboard } from '@/components/sections/AnalyticsDashboard';
import { ImpactEnvironnementalSection } from '@/components/sections/ImpactEnvironnementalSection';
import { VoiceAssistant } from '@/components/voice/VoiceAssistant';

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <ParticleBackground />
      <Header />
      <LiveClock variant="desktop" />
      <QuickAgenda userId="guest" variant="compact" />
      <RealTimeFinanceWidget variant="compact" />
      <AIGeneratorWidget variant="compact" />
      <NutritionWidget variant="compact" />
      <SportWidget variant="compact" />
      <main className="relative z-10">
        {/* PRIORITÉ 1 - FONDAMENTAUX ET INTRODUCTION */}
        <HeroSection />
        
        {/* PRIORITÉ 2 - INTERACTION ET FORMATION IA */}
        <ChatIARPSection />
        <FormationsSection />
        <AcademieSection />
        
        {/* PRIORITÉ 3 - MOMENT STRATÉGIQUE POUR CED BANK */}
        {/* Après engagement utilisateur avec l'IA et formations */}
        <CEDBankSection />
        
        {/* PRIORITÉ 4 - BUSINESS ET AUTOMATISATION */}
        <AutomatisationSection />
        <EntreprisesSection />
        
        {/* PRIORITÉ 4 - DÉVELOPPEMENT ET COMPÉTENCES */}
        <ProgrammingLanguagesSection />
        
        {/* PRIORITÉ 5 - SANTÉ ET BIEN-ÊTRE */}
        <EspaceSanteSection />
        <SimulateurBTSSection />
        
        {/* PRIORITÉ 6 - FONCTIONNALITÉS AVANCÉES */}
        <ModulesSection />
        <GenerateursSection />
        
        {/* PRIORITÉ 7 - RECHERCHE ET MENTORAT */}
        <RechercheSection />
        <MentoratSection />
        
        {/* PRIORITÉ 8 - COMMUNAUTÉ ET PLANIFICATION */}
        <CommunauteSection />
        <PlanningFormationsSection />
        
        {/* PRIORITÉ 9 - MONITORING ET ANALYTICS */}
        <RealTimeMonitoringSection />
        <AnalyticsDashboard />
        
        {/* PRIORITÉ 10 - PORTFOLIO ET ÉCOSYSTÈME */}
        <PortfolioSection />
        <EcosystemSection />
        
        {/* PRIORITÉ 11 - IA ÉTHIQUE ET IMPACT */}
        <IAEthiqueSection />
        <ImpactEnvironnementalSection />
        
        {/* PRIORITÉ 12 - TÉMOIGNAGES ET VALIDATION SOCIALE */}
        <TestimonialsSection />
      </main>
      <ThemeCustomizer />
      <VoiceAssistant />
      <Footer />
    </div>
  );
}
