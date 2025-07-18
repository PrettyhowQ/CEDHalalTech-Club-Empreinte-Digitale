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
import { InteractiveLanguageSelector } from '@/components/ui/InteractiveLanguageSelector';
import { useLanguage } from '@/context/LanguageContext';
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
import { FloatingQuickAccess } from '@/components/ui/FloatingQuickAccess';

export default function Home() {
  const { currentLanguage, setLanguage } = useLanguage();
  
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
        {/* ACCÈS DIRECT PLATEFORMES PRETTYHOWQ HALALTECH™ */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* SECTION PRIORITAIRE - PLATEFORMES PRETTYHOWQ HALALTECH™ */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 mb-8 text-white shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <div className="text-center flex-1">
                  <h2 className="text-3xl font-bold mb-2">🌙 PrettyhowQ HalalTech™</h2>
                  <p className="text-lg opacity-90">Écosystème d'IA Éthique et Formation Halal</p>
                </div>
                
                <div className="ml-6">
                  <InteractiveLanguageSelector
                    currentLanguage={currentLanguage.code}
                    onLanguageChange={setLanguage}
                    variant="compact"
                    showGreeting={true}
                    showAudioSupport={true}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">🎬</div>
                  <h3 className="font-bold mb-2">WebTV IA PrettyhowQ</h3>
                  <p className="text-sm mb-3 opacity-80">Chaîne YouTube automatisée 250K+ abonnés</p>
                  <Link href="/webtv-prettyhowq">
                    <Button size="sm" className="bg-white text-green-600 hover:bg-gray-100 w-full">
                      Voir WebTV
                    </Button>
                  </Link>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">🌙</div>
                  <h3 className="font-bold mb-2">HalalTech Website</h3>
                  <p className="text-sm mb-3 opacity-80">Formation IA éthique multilingue FR/EN/AR</p>
                  <Link href="/halaltech">
                    <Button size="sm" className="bg-white text-green-600 hover:bg-gray-100 w-full">
                      HalalTech
                    </Button>
                  </Link>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">🤲</div>
                  <h3 className="font-bold mb-2">Assistant IA Spirituel</h3>
                  <p className="text-sm mb-3 opacity-80">Guidance conforme Tawhid et Maslaha</p>
                  <Link href="/assistant-spirituel">
                    <Button size="sm" className="bg-white text-green-600 hover:bg-gray-100 w-full">
                      Assistant IA
                    </Button>
                  </Link>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">🎓</div>
                  <h3 className="font-bold mb-2">Formations Halal</h3>
                  <p className="text-sm mb-3 opacity-80">25+ cours certifiés PrettyhowQ HalalTech™</p>
                  <Link href="/formations-halal">
                    <Button size="sm" className="bg-white text-green-600 hover:bg-gray-100 w-full">
                      Formations
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

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
                <h2 className="text-xl font-bold mb-3">🕌 Banking Golfe Premium</h2>
                <p className="text-sm mb-4">Investisseurs & Grosses Fortunes</p>
                <Link href="/premium-dashboard">
                  <Button size="sm" className="bg-white text-amber-600 hover:bg-gray-100 text-sm px-4 py-2">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Investisseurs
                  </Button>
                </Link>
              </div>
            </div>

            {/* NOUVELLES PLATEFORMES PRETTYHOWQ HALALTECH™ */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 mb-8 text-white shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <div className="text-center flex-1">
                  <h2 className="text-3xl font-bold mb-2">🌙 PrettyhowQ HalalTech™</h2>
                  <p className="text-lg opacity-90">Écosystème d'IA Éthique et Formation Halal</p>
                </div>
                
                {/* Sélecteur de langue interactif */}
                <div className="ml-6">
                  <InteractiveLanguageSelector
                    currentLanguage={currentLanguage.code}
                    onLanguageChange={setLanguage}
                    variant="compact"
                    showGreeting={true}
                    showAudioSupport={true}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">🎬</div>
                  <h3 className="font-bold mb-2">WebTV IA PrettyhowQ</h3>
                  <p className="text-sm mb-3 opacity-80">Chaîne YouTube automatisée 250K+ abonnés</p>
                  <Link href="/webtv-prettyhowq">
                    <Button size="sm" className="bg-white text-green-600 hover:bg-gray-100 w-full">
                      Voir WebTV
                    </Button>
                  </Link>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">🌙</div>
                  <h3 className="font-bold mb-2">HalalTech Website</h3>
                  <p className="text-sm mb-3 opacity-80">Formation IA éthique multilingue FR/EN/AR</p>
                  <Link href="/halaltech">
                    <Button size="sm" className="bg-white text-green-600 hover:bg-gray-100 w-full">
                      HalalTech
                    </Button>
                  </Link>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">🤲</div>
                  <h3 className="font-bold mb-2">Assistant IA Spirituel</h3>
                  <p className="text-sm mb-3 opacity-80">Guidance conforme Tawhid et Maslaha</p>
                  <Link href="/assistant-spirituel">
                    <Button size="sm" className="bg-white text-green-600 hover:bg-gray-100 w-full">
                      Assistant IA
                    </Button>
                  </Link>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">🎓</div>
                  <h3 className="font-bold mb-2">Formations Halal</h3>
                  <p className="text-sm mb-3 opacity-80">25+ cours certifiés PrettyhowQ HalalTech™</p>
                  <Link href="/formations-halal">
                    <Button size="sm" className="bg-white text-green-600 hover:bg-gray-100 w-full">
                      Formations
                    </Button>
                  </Link>
                </div>
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
                <p className="text-sm mb-2">Assurance Islamique Complète</p>
                <p className="text-sm mb-4">Couverture famille 45+ membres</p>
                <Link href="/al-aman-takaful">
                  <Button size="sm" className="bg-white text-violet-600 hover:bg-gray-100 text-sm px-4 py-2">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Al-Aman CED
                  </Button>
                </Link>
              </div>
            </div>

            {/* RECONNAISSANCE & PORTFOLIO PROFESSIONNEL */}
            <div className="bg-gradient-to-r from-yellow-600 to-orange-700 rounded-3xl p-8 mb-8 text-white shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">🏆 CV & Portfolio Professionnel</h2>
                <p className="text-lg opacity-90">Par la grâce d'Allah, présentation complète Yakoubi Yamina</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Link href="/portfolio-premium" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">📋</div>
                  <h4 className="font-bold mb-2">CV/Portfolio Premium</h4>
                  <p className="text-sm opacity-90">Présentation professionnelle complète</p>
                </Link>

                <Link href="/certifications-validations" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">🏅</div>
                  <h4 className="font-bold mb-2">Certifications</h4>
                  <p className="text-sm opacity-90">ISO 27001, FINMA, AAOIFI validés</p>
                </Link>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <h4 className="font-bold mb-2">Swiss Fintech Award</h4>
                  <p className="text-sm opacity-90">"Best Islamic Innovation" 2024</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">🌍</div>
                  <h4 className="font-bold mb-2">Recognition Globale</h4>
                  <p className="text-sm opacity-90">847,592 utilisateurs, 67 pays</p>
                </div>
              </div>
            </div>

            {/* 🎨 FONCTIONNALITÉS UI/UX ISLAMIQUES RÉVOLUTIONNAIRES 2025 */}
            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 rounded-3xl p-8 mb-8 text-white shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">🎨 UI/UX Islamiques Révolutionnaires</h2>
                <p className="text-lg opacity-90">Innovation technologique respectant 100% valeurs islamiques authentiques</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <Link href="/enhanced-cultural-micro-interactions" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">✨</div>
                  <h4 className="font-bold mb-2">Micro-Interactions</h4>
                  <p className="text-sm opacity-90">Culturellement sensibles</p>
                </Link>

                <Link href="/animated-islamic-geometric-loading" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">🕌</div>
                  <h4 className="font-bold mb-2">Loading Géométrique</h4>
                  <p className="text-sm opacity-90">Motifs islamiques animés</p>
                </Link>

                <Link href="/accessibility-voice-guidance" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">🔊</div>
                  <h4 className="font-bold mb-2">Guidance Vocale</h4>
                  <p className="text-sm opacity-90">Accessibilité avancée</p>
                </Link>

                <Link href="/contextual-cultural-learning" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">📚</div>
                  <h4 className="font-bold mb-2">Tooltips Culturels</h4>
                  <p className="text-sm opacity-90">Apprentissage contextuel</p>
                </Link>

                <Link href="/dynamic-multilingual-transitions" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">🌐</div>
                  <h4 className="font-bold mb-2">Transitions Multilingues</h4>
                  <p className="text-sm opacity-90">Animations dynamiques</p>
                </Link>
              </div>
            </div>

            {/* SECTION SUPPLÉMENTAIRE POUR AUTRES FONCTIONNALITÉS */}
            <div className="bg-gradient-to-r from-amber-600 to-yellow-700 rounded-3xl p-8 mb-8 text-white shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">🌙 Fonctionnalités Halal Complètes</h2>
                <p className="text-lg opacity-90">Innovations technologiques 100% conformes Fiqh informatique</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Link href="/formations-halal-ced" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">📚</div>
                  <h4 className="font-bold mb-2">Formations Halal</h4>
                  <p className="text-sm opacity-90">Cours certifiés conformes</p>
                </Link>

                <Link href="/bibliotheque-icones-halal" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">🎨</div>
                  <h4 className="font-bold mb-2">Icônes Halal</h4>
                  <p className="text-sm opacity-90">Bibliothèque complète</p>
                </Link>

                <Link href="/super-iarp-pro" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">🤖</div>
                  <h4 className="font-bold mb-2">Super IARP Pro</h4>
                  <p className="text-sm opacity-90">IA éthique complète</p>
                </Link>

                <Link href="/test-complet-55-modules" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">🧪</div>
                  <h4 className="font-bold mb-2">Centre Test</h4>
                  <p className="text-sm opacity-90">Validation modules</p>
                </Link>
              </div>
            </div>

            {/* INNOVATIONS FUTURES */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 mb-8 text-white shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">🚀 Innovations Futures CED</h2>
                <p className="text-lg opacity-90">Technologies Révolutionnaires en Développement</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/quantum-halal-trading" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">⚛️</div>
                  <h4 className="font-bold mb-2 text-lg">Quantum Halal Trading</h4>
                  <p className="text-sm opacity-90">Premier trading quantique conforme Sharia</p>
                </Link>

                <Link href="/neural-islamic-banking" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">🧠</div>
                  <h4 className="font-bold mb-2 text-lg">Neural Islamic Banking</h4>
                  <p className="text-sm opacity-90">IA spirituelle pour conseil financier</p>
                </Link>

                <Link href="/metaverse-hajj" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">🕋</div>
                  <h4 className="font-bold mb-2 text-lg">Metaverse Hajj</h4>
                  <p className="text-sm opacity-90">Pèlerinage virtuel immersif</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTIONS PRINCIPALES */}
        <HeroSection />
        <CEDBankSection />
        <CitadelleMusulmanSection />
        <ChatIARPSection />
        <FormationsSection />
        <AcademieSection />
        <AutomatisationSection />
        <EntreprisesSection />
        <ProgrammingLanguagesSection />
        <EspaceSanteSection />
        <SimulateurBTSSection />
        <ModulesSection />
        <GenerateursSection />
        <RechercheSection />
        <MentoratSection />
        <CommunauteSection />
        <PlanningFormationsSection />
        <RealTimeMonitoringSection />
        <PortfolioSection />
        <EcosystemSection />
        <AnalyticsDashboard />
        <FeaturedToolsSection />
        <IAEthiqueSection />
        <ImpactEnvironnementalSection />
        <TestimonialsSection />
      </main>

      <ThemeCustomizer />
      <VoiceAssistant />
      <ContextualHelp />
      <PerformanceMonitor />
      <FloatingQuickAccess />
      <Footer />
    </div>
  );
}