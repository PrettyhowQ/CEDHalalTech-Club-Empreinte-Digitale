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
import { PermanentNavigation } from '@/components/PermanentNavigation';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen } from 'lucide-react';
import { PerformanceOptimizer } from '@/components/PerformanceOptimizer';
import { InstantAccess } from '@/components/ui/InstantAccess';
import { SmartPreloader } from '@/components/ui/SmartPreloader';
import { IntuitiveBreadcrumb } from '@/components/ui/IntuitiveBreadcrumb';
import { ContextualHelp } from '@/components/ui/ContextualHelp';
import { PerformanceMonitor } from '@/components/ui/PerformanceMonitor';
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
import { FeaturedToolsSection } from '@/components/sections/FeaturedToolsSection';
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
      <PermanentNavigation />
      <QuickNavigation />
      <main className="relative z-10">
        {/* ACCÈS DIRECT PRINCIPALES FONCTIONNALITÉS */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-6 text-white text-center shadow-2xl">
                <h2 className="text-xl font-bold mb-3">🎓 Formations CED</h2>
                <p className="text-sm mb-4">Programmation, IA, Islamiques</p>
                <Link href="/formations">
                  <Button size="sm" className="bg-white text-blue-600 hover:bg-gray-100 text-sm px-4 py-2">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Formations
                  </Button>
                </Link>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-6 text-white text-center shadow-2xl">
                <h2 className="text-xl font-bold mb-3">🏛️ Institut CED</h2>
                <p className="text-sm mb-4">Plateforme éducative islamique</p>
                <Link href="/arabic-interface">
                  <Button size="sm" className="bg-white text-purple-600 hover:bg-gray-100 text-sm px-4 py-2">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Institut CED
                  </Button>
                </Link>
              </div>

              <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-6 text-white text-center shadow-2xl">
                <h2 className="text-xl font-bold mb-3">👑 Banking Golfe Premium</h2>
                <p className="text-sm mb-4">Investisseurs & Grosses Fortunes</p>
                <Link href="/premium-dashboard">
                  <Button size="sm" className="bg-white text-amber-600 hover:bg-gray-100 text-sm px-4 py-2">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Investisseurs
                  </Button>
                </Link>
              </div>
            </div>

            {/* SECTION SANTÉ & JURIDIQUE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-6 text-white text-center shadow-2xl">
                <h2 className="text-xl font-bold mb-3">🏥 Espace Santé CED</h2>
                <p className="text-sm mb-2">Souheila Yakoubi-Ozel - Co-Directrice</p>
                <p className="text-sm mb-4">Nutrition, Coaching, Bien-être</p>
                <Link href="/espace-sante">
                  <Button size="sm" className="bg-white text-pink-600 hover:bg-gray-100 text-sm px-4 py-2">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Espace Santé
                  </Button>
                </Link>
              </div>
              
              <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl p-6 text-white text-center shadow-2xl">
                <h2 className="text-xl font-bold mb-3">⚖️ Juridique CED</h2>
                <p className="text-sm mb-2">Hanaé-Denise Ozel - Secteur Juridique</p>
                <p className="text-sm mb-4">Contrats, Fiches de paie, Droit</p>
                <Link href="/juridique">
                  <Button size="sm" className="bg-white text-teal-600 hover:bg-gray-100 text-sm px-4 py-2">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Juridique
                  </Button>
                </Link>
              </div>
            </div>

            {/* SECTION TECHFORALL & ASSURANCE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center shadow-2xl">
                <h2 className="text-xl font-bold mb-3">🌍 TechForAll</h2>
                <p className="text-sm mb-2">Brahim - Gestion Opérationnelle</p>
                <p className="text-sm mb-4">Donations Tech, Construction Écologique</p>
                <Link href="/techforall">
                  <Button size="sm" className="bg-white text-green-600 hover:bg-gray-100 text-sm px-4 py-2">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    TechForAll
                  </Button>
                </Link>
              </div>
              
              <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl p-6 text-white text-center shadow-2xl">
                <h2 className="text-xl font-bold mb-3">🛡️ Al-Aman CED Takaful</h2>
                <p className="text-sm mb-2">Assurance Islamique</p>
                <p className="text-sm mb-4">Conformité AAOIFI/IFSB</p>
                <Link href="/al-aman-ced-prototype">
                  <Button size="sm" className="bg-white text-violet-600 hover:bg-gray-100 text-sm px-4 py-2">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Takaful
                  </Button>
                </Link>
              </div>
            </div>

            {/* SECTION LOGISTIQUE ÉQUIPE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-white text-center shadow-2xl">
                <h2 className="text-xl font-bold mb-3">🚚 Logistique Europe</h2>
                <p className="text-sm mb-2">Yakoubi Karim - Paris</p>
                <p className="text-sm mb-4">Distribution & Partenariats EU</p>
                <Link href="/logistique-europe">
                  <Button size="sm" className="bg-white text-blue-600 hover:bg-gray-100 text-sm px-4 py-2">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Europe
                  </Button>
                </Link>
              </div>
              
              <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-6 text-white text-center shadow-2xl">
                <h2 className="text-xl font-bold mb-3">🏔️ Logistique Suisse</h2>
                <p className="text-sm mb-2">Yakoubi Aziz - Berne</p>
                <p className="text-sm mb-4">Opérations CH & Coordination</p>
                <Link href="/logistique-suisse">
                  <Button size="sm" className="bg-white text-red-600 hover:bg-gray-100 text-sm px-4 py-2">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Suisse
                  </Button>
                </Link>
              </div>
            </div>

            {/* ACCÈS PORTFOLIOS */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center shadow-2xl">
                <h2 className="text-2xl font-bold mb-4">☁️ Cloud CED Platform</h2>
                <p className="text-lg mb-6">Stockage sécurisé, déploiement et synchronisation</p>
                <Link href="/cloud-ced">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-6 py-3 font-bold">
                    Accéder au Cloud CED
                  </Button>
                </Link>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white text-center shadow-2xl">
                <h2 className="text-2xl font-bold mb-4">👩‍💼 Portfolio Professionnel</h2>
                <p className="text-lg mb-6">CV et réalisations format web classique</p>
                <Link href="/portfolio-web">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-6 py-3 font-bold">
                    Voir Portfolio Web
                  </Button>
                </Link>
              </div>
            </div>

            {/* SECTION INNOVATIONS FUTURISTES */}
            <div className="bg-gradient-to-r from-gray-800 to-black rounded-2xl p-8 text-white text-center shadow-2xl mb-8">
              <h2 className="text-2xl font-bold mb-4">🚀 Innovations Futuristes CED</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2">⚛️ Quantum Halal Trading</h3>
                  <p className="text-sm">Trading quantique conforme Sharia</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2">🧠 Neural Islamic Banking</h3>
                  <p className="text-sm">IA spirituelle conseil financier</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2">🌌 Metaverse Hajj</h3>
                  <p className="text-sm">Pèlerinage virtuel immersif</p>
                </div>
              </div>
              <Link href="/innovation-roadmap">
                <Button size="lg" className="mt-4 bg-white text-black hover:bg-gray-100">
                  Découvrir le Futur
                </Button>
              </Link>
            </div>

            {/* SECTION SPIRITUELLE - ACCÈS IMMÉDIAT AUX RÉCITATIONS ET CITADELLE */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">🕌 Spiritualité & Invocations Islamiques</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/quran-live-recitation">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-all cursor-pointer text-center">
                    <div className="text-4xl mb-3">📖</div>
                    <h4 className="font-bold mb-2 text-lg">Récitations du Coran</h4>
                    <p className="text-sm opacity-90">8 récitateurs renommés en direct</p>
                  </div>
                </Link>
                
                <Link href="/citadelle-du-musulman">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-all cursor-pointer text-center">
                    <div className="text-4xl mb-3">🛡️</div>
                    <h4 className="font-bold mb-2 text-lg">La Citadelle du Musulman</h4>
                    <p className="text-sm opacity-90">Invocations authentiques quotidiennes</p>
                  </div>
                </Link>

                <Link href="/cloud-ced">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-all cursor-pointer text-center">
                    <div className="text-4xl mb-3">☁️</div>
                    <h4 className="font-bold mb-2 text-lg">Cloud CED</h4>
                    <p className="text-sm opacity-90">Stockage sécurisé & synchronisation</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PRIORITÉ 1 - FONDAMENTAUX ET INTRODUCTION */}
        <HeroSection />
        
        {/* OUTILS VEDETTES - Générateur Formations & Fiqh */}
        <FeaturedToolsSection />
        
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
      <ContextualHelp />
      <PerformanceMonitor />
      <Footer />
    </div>
  );
}
