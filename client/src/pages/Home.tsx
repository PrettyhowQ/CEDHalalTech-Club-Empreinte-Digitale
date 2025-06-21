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
  const [activeFeature, setActiveFeature] = useState('banking');

  const formatCurrency = (amount: number, currency = 'USD') => {
    return new Intl.NumberFormat('fr-FR', { 
      style: 'currency', 
      currency: currency,
      minimumFractionDigits: 0 
    }).format(amount);
  };

  const ecosystemStats = {
    totalWealthTracked: 57.3,
    donationsSecured: 750000,
    projectsActive: 15,
    clientsServed: 34221,
    conversionRate: 57.1,
    networkInfluence: 85.2
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section - CED Bank International */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-green-600 opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Crown className="h-10 w-10 text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  CED Bank International
                </h1>
                <p className="text-xl text-gray-600 mt-2">
                  La première banque digitale 0% intérêts conforme à la finance islamique
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 flex-wrap">
              <Badge className="bg-green-100 text-green-800 px-4 py-2 text-lg">
                🇦🇪 Finance Islamique 100%
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-lg">
                💰 0% Intérêts Garantis
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 px-4 py-2 text-lg">
                🏗️ Philanthropie Dubaï
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-lg border border-gray-200"
              >
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-600">
                  {formatCurrency(ecosystemStats.donationsSecured / 1000)}K
                </h3>
                <p className="text-gray-600">Donations Sécurisées</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-lg border border-gray-200"
              >
                <Crown className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-600">
                  {ecosystemStats.totalWealthTracked} Mds
                </h3>
                <p className="text-gray-600">Fortunes Trackées</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-lg border border-gray-200"
              >
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-600">
                  {ecosystemStats.clientsServed.toLocaleString()}+
                </h3>
                <p className="text-gray-600">Clients Servis</p>
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-4 pt-8">
              <Link href="/banque">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Accéder à CED Bank
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="/dubai-wealth-crm">
                <Button size="lg" variant="outline">
                  <Building2 className="h-5 w-5 mr-2" />
                  Fortunes Dubaï
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services principaux */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Écosystème Financier Islamique Complet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la banque digitale aux investissements philanthropiques, 
              découvrez notre plateforme révolutionnaire conforme à la Charia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* CED Bank Cards */}
            <Link href="/banque" className="block group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CreditCard className="h-12 w-12 text-purple-600" />
                    <Badge className="bg-purple-100 text-purple-800">5 Niveaux</Badge>
                  </div>
                  <CardTitle className="text-2xl text-purple-800">
                    Cartes Bancaires CED
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Essential (5K) → Royal (2M) limites quotidiennes. 
                    Mode prière automatique et boussole Qibla intégrée.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Finance 100% halal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Protection anti-découvert</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Services premium inclus</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Dubai Investments */}
            <Link href="/dubai-investments" className="block group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Building2 className="h-12 w-12 text-orange-600" />
                    <Badge className="bg-orange-100 text-orange-800">Temps Réel</Badge>
                  </div>
                  <CardTitle className="text-2xl text-orange-800">
                    Investissements Dubaï
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Tracking en temps réel de 15 projets immobiliers sociaux 
                    financés par donations philanthropiques.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">2,500 logements programmés</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">ROI social 3.2x mesurable</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Impact communautaire</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Dubai Wealth CRM */}
            <Link href="/dubai-wealth-crm" className="block group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-green-200 bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Crown className="h-12 w-12 text-green-600" />
                    <Badge className="bg-green-100 text-green-800">CRM Elite</Badge>
                  </div>
                  <CardTitle className="text-2xl text-green-800">
                    Fortunes Dubaï
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Suivi stratégique des 7 plus grandes fortunes de Dubaï. 
                    Pavel Durov, Hussain Sajwani, et autres ultra-riches.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">57.3 Mds USD trackés</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Taux conversion 57.1%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Stratégies personnalisées</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Objectifs 2025 */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Stratégie 2025
            </h2>
            <p className="text-xl text-gray-600">
              Objectifs ambitieux pour révolutionner la finance islamique
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-8 bg-white rounded-xl shadow-lg"
            >
              <Target className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-purple-600 mb-2">50M USD</h3>
              <p className="text-gray-600">Donations Cibles</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-8 bg-white rounded-xl shadow-lg"
            >
              <Building2 className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-blue-600 mb-2">2,500</h3>
              <p className="text-gray-600">Logements Livrés</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-8 bg-white rounded-xl shadow-lg"
            >
              <Users className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-green-600 mb-2">100K</h3>
              <p className="text-gray-600">Clients CED Bank</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-8 bg-white rounded-xl shadow-lg"
            >
              <Globe className="h-16 w-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-orange-600 mb-2">15</h3>
              <p className="text-gray-600">Partenaires Premium</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer avec informations Yakoubi Yamina */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Club Empreinte Digitale</h3>
                <p className="text-gray-400">Dirigé par Yakoubi Yamina</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-8 flex-wrap text-sm text-gray-400">
              <span>🇦🇪 Dubaï, Émirats Arabes Unis</span>
              <span>📧 contact@club-empreinte-digitale.com</span>
              <span>🏦 support@cedbank.com</span>
            </div>

            <div className="pt-8 border-t border-gray-800">
              <p className="text-gray-400">
                © 2025 Club Empreinte Digitale - Yakoubi Yamina. Tous droits réservés.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                La révolution de la finance islamique digitale commence ici.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
