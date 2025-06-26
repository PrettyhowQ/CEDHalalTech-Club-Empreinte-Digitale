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
import { QuickNavigation } from '@/components/QuickNavigation';
import { PerformanceOptimizer } from '@/components/PerformanceOptimizer';
import { InstantAccess } from '@/components/ui/InstantAccess';
import { SmartPreloader } from '@/components/ui/SmartPreloader';
import { IntuitiveBreadcrumb } from '@/components/ui/IntuitiveBreadcrumb';
import { HeroSection } from '@/components/sections/HeroSection';
import { CEDBankSection } from '@/components/sections/CEDBankSection';
import { CitadelleMusulmanSection } from '@/components/sections/CitadelleMusulmanSection';
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
      <SmartPreloader />
      <ParticleBackground />
      <Header />
      <LiveClock variant="desktop" />
      <QuickAgenda userId="guest" variant="compact" />
      <RealTimeFinanceWidget variant="compact" />
      <AIGeneratorWidget variant="compact" />
      <NutritionWidget variant="compact" />
      <SportWidget variant="compact" />
      <InstantAccess />
      <IntuitiveBreadcrumb />
      <QuickNavigation />
      <main className="relative z-10">
        {/* PRIORITÉ 1 - FONDAMENTAUX ET INTRODUCTION */}
        <HeroSection />
        
        {/* PRIORITÉ 2 - INTERACTION ET FORMATION IA */}
        <ChatIARPSection />
        <FormationsSection />
        <AcademieSection />
        
        {/* GUIDE FIQH INFORMATIQUE - Accès direct */}
        <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Guide Fiqh Informatique</h2>
              <p className="text-xl text-gray-600 mb-8">
                150+ règles technologiques halal • Support scholars 24/7 • Conformité Sharia garantie
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-green-200 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Règles Halal Tech</h3>
                <p className="text-gray-600 text-center mb-6">
                  150+ règles couvrant IA, blockchain, applications mobiles, plateformes d'apprentissage
                </p>
                <div className="text-center">
                  <button 
                    onClick={() => window.location.href = '/fiqh-informatique'}
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Consulter le guide
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-200 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Support Scholars 24/7</h3>
                <p className="text-gray-600 text-center mb-6">
                  Accès permanent aux érudits islamiques pour questions spécialisées technologie
                </p>
                <div className="text-center">
                  <button 
                    onClick={() => window.location.href = '/fiqh-informatique'}
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Poser une question
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-200 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Comparaison Écoles</h3>
                <p className="text-gray-600 text-center mb-6">
                  CED Academy vs Coursera/Udacity/edX - Seule plateforme 100% Sharia compliant
                </p>
                <div className="text-center">
                  <button 
                    onClick={() => window.location.href = '/education-comparison'}
                    className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    Voir comparaison
                  </button>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Leadership Mondial Conformité Sharia</h3>
                <p className="text-lg mb-6">
                  CED Academy - Seule institution certifiée 100% conforme aux principes islamiques
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => window.location.href = '/fiqh-informatique'}
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    📖 Guide complet Fiqh
                  </button>
                  <button 
                    onClick={() => window.location.href = '/advanced-learning'}
                    className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    🎓 Formations certifiées
                  </button>
                  <button 
                    onClick={() => window.location.href = '/education-comparison'}
                    className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    ⚖️ Avantages concurrentiels
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* PRIORITÉ 3 - MOMENT STRATÉGIQUE POUR CED BANK */}
        {/* Après engagement utilisateur avec l'IA et formations */}
        <CEDBankSection />
        
        {/* PRIORITÉ 3.5 - LA CITADELLE DU MUSULMAN */}
        {/* Intégration spirituelle après services bancaires */}
        <CitadelleMusulmanSection />
        
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
