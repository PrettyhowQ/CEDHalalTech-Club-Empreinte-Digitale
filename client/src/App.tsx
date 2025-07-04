import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/context/LanguageContext";
import { VoiceProvider } from "@/context/VoiceContext";
// import { useAuth } from "@/hooks/useAuth";
import Footer from "@/components/Footer";
import { lazy } from "react";

// Pages
import Home from "@/pages/HomeFixed";
import Landing from "@/pages/Landing";
import Formations from "@/pages/Formations";
import Planning from "@/pages/Planning";
import Dashboard from "@/pages/Dashboard";
import CoachingMobile from "@/pages/CoachingMobile";
import Contact from "@/pages/Contact";
import APropos from "@/pages/APropos";
import FAQ from "@/pages/FAQ";
import Portfolio from "@/pages/Portfolio";
import Temoignages from "@/pages/Temoignages";
import Previsionnel from "@/pages/Previsionnel";
import CatalogueFormations from "@/pages/CatalogueFormations";
import AnalyseStrategique from "@/pages/AnalyseStrategique";
import NutritionSouheila from "@/pages/NutritionSouheila";
import TechnologiesAvancees from "@/pages/TechnologiesAvancees";
import FinancialDashboard from "@/pages/FinancialDashboard";
import BanqueDigitale from "@/pages/BanqueDigitale";
import AppBancaireMobile from "@/pages/AppBancaireMobile";
import ParrainageCED from "@/pages/ParrainageCED";
import CurrencyConverter from "@/pages/CurrencyConverter";
import CryptoWallet from "@/pages/CryptoWallet";
import TransactionHistory from "@/pages/TransactionHistory";
import BudgetPlanner from "@/pages/BudgetPlanner";
import CryptoDonations from "@/pages/CryptoDonations";
import VirtualCards from "@/pages/VirtualCards";
import AIAdvisor from "@/pages/AIAdvisor";
import HalalCashback from "@/pages/HalalCashback";
import IslamicInvestments from "@/pages/IslamicInvestments";
import MetaverseNFT from "@/pages/MetaverseNFT";
import DeveloperAPI from "@/pages/DeveloperAPI";
import PremiumDashboard from "@/pages/PremiumDashboard";
import InstantCurrencyConverter from "@/pages/CurrencyConverter";
import FormationPayment from "@/pages/FormationPayment";
import AppDownload from "@/pages/AppDownload";
import TechForAll from "@/pages/TechForAll";
import CostaDelSol from "@/pages/CostaDelSol";
import YakoubiStore from "@/pages/YakoubiStore";
import CostaDelSolWebsite from "@/pages/CostaDelSolWebsite";
import PortfolioMobilePage from "@/pages/PortfolioMobilePage";
import PortfolioWebClassiquePage from "@/pages/PortfolioWebClassiquePage";
import TechForAllLanding from "@/pages/TechForAllLanding";
import VueEnsemble from "@/pages/VueEnsemble";
import ContactComplet from "@/pages/ContactComplet";
import TableauBordEquipePage from "@/pages/TableauBordEquipe";
import TechForAllDashboardPage from "@/pages/TechForAllDashboard";
import PaySlipGeneratorPage from "@/pages/PaySlipGenerator";
import LogisticsAppPage from "@/pages/LogisticsApp";
import CEDBankAccountCreationPage from "@/pages/CEDBankAccountCreation";
import AlAmanTakafulInsurancePage from "@/pages/AlAmanTakafulInsurance";
import InnovationRoadmapPage from "@/pages/InnovationRoadmap";
import EmployeeTrainingPlatformPage from "@/pages/EmployeeTrainingPlatform";
import MobileProfessionalSuitePage from "@/pages/MobileProfessionalSuite";
import QuranListeningAppPage from "@/pages/QuranListeningApp";
import EcologicalConstructionDonationsPage from "@/pages/EcologicalConstructionDonations";
import ShariaBoardCompliancePage from "@/pages/ShariaBoardCompliance";
import BankingSecurityPage from "@/pages/BankingSecurity";
import APIManagementPage from "@/pages/APIManagement";
import APIManagementTest from "@/pages/APIManagementTest";
import NativeAppsTestSimple from "@/pages/NativeAppsTestSimple";
import MobileNativeAppsPage from "@/pages/MobileNativeApps";
import AnalyticsAvanceesPage from "@/pages/AnalyticsAdvancees";
import IntegrationsStrategiquesPage from "@/pages/IntegrationsStrategiques";
import TechForAllDocuments from "@/pages/TechForAllDocuments";
import DreamSimulator from "@/pages/DreamSimulator";
import AIGeneratorsMobile from "@/pages/AIGeneratorsMobile";
import MarineEquipmentCatalog from "@/pages/MarineEquipmentCatalog";
import BoutiqueSolidaireTechForAll from "@/pages/BoutiqueSolidaireTechForAll";
import RecyclingSimulator from "@/pages/RecyclingSimulator";
import YakoubiCEDAccount from "@/pages/YakoubiCEDAccount";
import ModePriere from "@/pages/ModePriere";
import DubaiInvestments from "@/pages/DubaiInvestments";
import DubaiWealthCRM from "@/pages/DubaiWealthCRM";
import CEDBankCardsPage from "@/pages/CEDBankCards";
import SouheilaBankAccountPage from "@/pages/SouheilaBankAccount";
import CostaDelSolBankAccountPage from "@/pages/CostaDelSolBankAccount";
import CEDBankPage from "@/pages/CEDBank";
import DonationSystemPage from "@/pages/DonationSystem";
import AlAmanCEDComparisonPage from "@/pages/AlAmanCEDComparison";
import AlAmanCEDLaunchStrategyPage from "@/pages/AlAmanCEDLaunchStrategy";
import CitadelleMusulmanPage from "@/pages/CitadelleMusulman";
import { CEDCodePlatform } from "@/components/CEDCodePlatform";
import { CEDBankingAPI } from "@/components/CEDBankingAPI";
import { DeveloperLanding } from "@/components/DeveloperLanding";
import { DeveloperDashboard } from "@/components/DeveloperDashboard";
import { HalalPlatformComparison } from "@/components/HalalPlatformComparison";
import { IslamicMarketPartnership } from "@/components/IslamicMarketPartnership";
import { IslamicGovernance } from "@/components/IslamicGovernance";
import { AlAmanCEDPrototype } from "@/components/AlAmanCEDPrototype";
import { CEDReplitPlatform } from "@/components/CEDReplitPlatform";
import HRTestPage from "@/pages/HRTestPage";
import HRSimplePage from "@/pages/HRSimplePage";

import HRManagement from "@/pages/HRManagement";
import ContractGeneratorPage from "@/pages/ContractGeneratorPage";
import LogisticsMobilePage from "@/pages/LogisticsMobilePage";
import TechForAllIntegrationPage from "@/pages/TechForAllIntegrationPage";
import AlAmanCEDInsurancePage from "@/pages/AlAmanCEDInsurancePage";
import QuranListeningPage from "@/pages/QuranListeningPage";
import { SimpleCoran } from "@/components/SimpleCoran";
import QuranLiveRecitationPage from "@/pages/QuranLiveRecitationPage";
import GaragesHalal from "@/pages/GaragesHalal";
import SystemDiagnosticsPage from "@/pages/SystemDiagnosticsPage";
import PremiumArabicSchoolPage from "@/pages/PremiumArabicSchoolPage";
import TraducteurPage from "@/pages/traducteur-page";
import ArabicAITeacherPage from "@/pages/arabic-ai-teacher-page";
import ArabicWritingLearnerPage from "@/pages/arabic-writing-learner-page";
import IslamicBankingComparisonPage from "@/pages/IslamicBankingComparisonPage";
import VoiceBankingArabicPage from "@/pages/VoiceBankingArabicPage";
import ZakatCalculatorPage from "@/pages/ZakatCalculatorPage";
import ShariaAdvisorPage from "@/pages/ShariaAdvisorPage";
import BlockchainTradePage from "@/pages/BlockchainTradePage";
import CryptoShariaPage from "@/pages/CryptoShariaPage";
import IslamicDeFiPage from "@/pages/IslamicDeFiPage";
import AEDChannelPage from "@/pages/AEDChannelPage";
import TestDashboardPage from "@/pages/TestDashboardPage";
import ShariaComplianceAnalysisPage from "@/pages/ShariaComplianceAnalysisPage";
import ShariaGovernancePage from "@/pages/ShariaGovernancePage";
import PurificationSystemPage from "@/pages/PurificationSystemPage";
import OperationalCompliancePage from "@/pages/OperationalCompliancePage";
import IslamicAuditPage from "@/pages/IslamicAuditPage";
import Sharia100CompletePage from "@/pages/Sharia100CompletePage";
import SatellitePrayerSyncPage from "@/pages/SatellitePrayerSyncPage";
import ParentAccountsPage from "@/pages/ParentAccountsPage";
import AdvancedLearningPlatformPage from "@/pages/AdvancedLearningPlatformPage";
import FiqhInformatiqueGuidePage from "@/pages/FiqhInformatiqueGuidePage";
import FiqhExpansionPage from "@/pages/fiqh-expansion-page";
import OnlineEducationComparisonPage from "@/pages/OnlineEducationComparisonPage";
import EducationComparisonPage from "@/pages/EducationComparisonPage";
import TechForAllAssociationPage from "@/pages/TechForAllAssociationPage";
import CostaDelSolBoutiquePage from "@/pages/CostaDelSolBoutiquePage";
import DocumentsLegauxAutomatiquesPage from "@/pages/DocumentsLegauxAutomatiquesPage";
import LogistiqueEquipementsPage from "@/pages/LogistiqueEquipementsPage";
import ExportModulesPage from "@/pages/export-modules-page";
import LanguageLearningPage from "@/pages/language-learning-page";
import FamilyBankingPage from "@/pages/family-banking";
import ArabicInterface from "@/pages/ArabicInterface";
import InstitutCEDAcademyPage from "@/pages/InstitutCEDAcademyPage";
import ArabicMultilingualTranslator from "@/pages/ArabicMultilingualTranslator";
import FiqhInformatique from "@/pages/FiqhInformatique";
import FiqhInformatiqueBibliothequePage from "@/pages/FiqhInformatiqueBibliothequePage";
import ManuelFiqhPage from "@/pages/ManuelFiqhPage";
import SuperIARPProPage from "@/pages/SuperIARPProPage";
import EspaceSantePage from "@/pages/EspaceSantePage";
import AIAdvisorPage from "@/pages/AIAdvisor";
import QuranReaderPage from "@/pages/QuranReaderPage";
import MobileNativeAppsRobustPage from "@/pages/MobileNativeAppsRobustPage";
import NotFound from "@/pages/not-found";
import WebTVPrettyhowQ from "@/pages/WebTVPrettyhowQ";
import HalalTechWebsite from "@/pages/HalalTechWebsite";
import AssistantIASpiritual from "@/pages/AssistantIASpiritual";
import PlateformeFormationsHalal from "@/pages/PlateformeFormationsHalal";
import InteractiveLanguagePage from "@/pages/InteractiveLanguagePage";
import IslamicThemesPage from "@/pages/IslamicThemesPage";
import ComptabiliteIslamique from "@/pages/ComptabiliteIslamique";
import ImmobilierIslamique from "@/pages/ImmobilierIslamique";
import EcosystemePolesHalal from "@/pages/EcosystemePolesHalal";
import CedVoieHalalHome from "@/pages/CedHalalHome";
import NavigationComplete from "@/pages/NavigationComplete";
import LocalisationVisuelle from "@/pages/LocalisationVisuelle";
import Localisation52Modules from "@/pages/Localisation52Modules";
import FiqhCompliancePage from "@/pages/FiqhCompliancePage";
import CommunityFiqhGuidelinesPage from "@/pages/CommunityFiqhGuidelinesPage";
import SpiritualMotivationMicroInteractionsPage from "@/pages/SpiritualMotivationMicroInteractionsPage";
import TestingCenterPage from "@/pages/TestingCenterPage";
import CharteFiqhIAHalalSimple from "@/pages/CharteFiqhIAHalalSimple";
import CloudHalal from "@/pages/CloudHalal";
import FiqhInformatiqueComplet from "@/pages/FiqhInformatiqueComplet";
import ThemesIslamiquesPersonnalisables from "@/pages/ThemesIslamiquesPersonnalisables";
import DiagnosticEcosystemeRevolutionnaire from "@/pages/DiagnosticEcosystemeRevolutionnaire";
import GestionRHComplete from "@/pages/GestionRHComplete";
import MultilingualVoiceAssistant from "@/pages/MultilingualVoiceAssistant";
import GamifiedLearningPath from "@/pages/GamifiedLearningPath";
import BibliothequeNumeriqueFiqh from "@/pages/BibliothequeNumeriqueFiqh";
import FiqhIA3456Regles from "@/pages/FiqhIA3456Regles";
import MotivationSpirituelleApp from "@/pages/MotivationSpirituelleApp";
import PlanificationSuccessorale50Ans from "@/pages/PlanificationSuccessorale50Ans";
import EquipeDeveloppementWebHalal from "@/pages/EquipeDeveloppementWebHalal";
import ConvertisseurDeviseZakat from "@/pages/ConvertisseurDeviseZakat";
import ResponsiveAccessibilityMode from "@/pages/ResponsiveAccessibilityMode";
import InteractiveSpiritualJourneyMoodTracker from "@/pages/InteractiveSpiritualJourneyMoodTracker";
import LecteurCoranComplet from "@/pages/LecteurCoranComplet";
import MethodesApprentissageIslamiqueTech from "@/pages/MethodesApprentissageIslamiqueTech";
import MethodologieEtudiantsIslamiqueTech from "@/pages/MethodologieEtudiantsIslamiqueTech";
import FinanceIslamiqueHalal from "@/pages/FinanceIslamiqueHalal";
import VoieHalal52 from "@/pages/VoieHalal52";
import PhilosophieHumiliteIslamique from "@/pages/PhilosophieHumiliteIslamique";
import HommageScholarsIslamiques from "@/pages/HommageScholarsIslamiques";
import SystemeDuaaTransactions from "@/pages/SystemeDuaaTransactions";
import AmourFiAllahAuthentique from "@/pages/AmourFiAllahAuthentique";
import BlockchainFiqhRules from "@/pages/BlockchainFiqhRules";
// Lazy load diagnostic components
const EcosystemDiagnosticsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
            🌙 Diagnostic Écosystème CED
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-2">
            La Meilleure Expérience Utilisateur de ce Siècle - Jamais Égalée
          </p>
          <div className="mt-8 p-8 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 text-white rounded-3xl shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">Score Global: 99/100</h2>
            <p className="text-xl">Excellence Révolutionnaire - Performance Transcendante</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function Router() {
  // const { isAuthenticated, isLoading } = useAuth();
  const isAuthenticated = false;
  const isLoading = false;

  return (
    <Switch>
      {/* Public routes */}
      <Route path="/formations" component={Formations} />
      <Route path="/formations/:category" component={Formations} />
      <Route path="/formations-paiement" component={FormationPayment} />
      <Route path="/inscription-formations" component={FormationPayment} />
      <Route path="/paiement-formations" component={FormationPayment} />
      <Route path="/ressources" component={Formations} />
      <Route path="/boutique" component={Portfolio} />
      <Route path="/ia-ethique" component={APropos} />
      <Route path="/planning" component={Planning} />
      <Route path="/previsionnel" component={Previsionnel} />
      <Route path="/finance" component={Previsionnel} />
      <Route path="/catalogue" component={CatalogueFormations} />
      <Route path="/formations-catalogue" component={CatalogueFormations} />
      <Route path="/analyse-strategique" component={AnalyseStrategique} />
      <Route path="/viabilite" component={AnalyseStrategique} />
      <Route path="/nutrition" component={NutritionSouheila} />
      <Route path="/nutrition-souheila" component={NutritionSouheila} />
      <Route path="/coaching" component={CoachingMobile} />
      <Route path="/technologies-avancees" component={TechnologiesAvancees} />
      <Route path="/futur" component={TechnologiesAvancees} />
      <Route path="/innovations" component={TechnologiesAvancees} />
      <Route path="/financier" component={FinancialDashboard} />
      <Route path="/revenus" component={FinancialDashboard} />
      <Route path="/chiffres" component={FinancialDashboard} />
      <Route path="/dashboard-financier" component={FinancialDashboard} />
      <Route path="/banque" component={BanqueDigitale} />
      <Route path="/banque-digitale" component={BanqueDigitale} />
      <Route path="/ced-bank" component={CEDBankPage} />
      <Route path="/banking" component={BanqueDigitale} />
      <Route path="/app-bancaire" component={AppBancaireMobile} />
      <Route path="/mobile-banking" component={AppBancaireMobile} />
      <Route path="/ced-bank-app" component={AppBancaireMobile} />
      <Route path="/telecharger-app" component={AppDownload} />
      <Route path="/download-app" component={AppDownload} />
      <Route path="/app-download" component={AppDownload} />
      <Route path="/telechargement" component={AppDownload} />
      <Route path="/techforall" component={TechForAll} />
      <Route path="/boutique-solidaire" component={TechForAll} />
      <Route path="/dons-materiels" component={TechForAll} />
      <Route path="/systeme-donation" component={DonationSystemPage} />
      <Route path="/donation-automatique" component={DonationSystemPage} />
      <Route path="/donation-moteurs" component={DonationSystemPage} />
      <Route path="/donation-informatique" component={DonationSystemPage} />
      <Route path="/donation-climatisation" component={DonationSystemPage} />
      <Route path="/donation-clims-pro" component={DonationSystemPage} />
      <Route path="/donation-hvac" component={DonationSystemPage} />
      <Route path="/costa-del-sol" component={CostaDelSol} />
      <Route path="/app-costa-del-sol" component={CostaDelSol} />
      <Route path="/logistique-mobile" component={CostaDelSol} />
      <Route path="/boutique-yakoubi" component={YakoubiStore} />
      <Route path="/yakoubi-store" component={YakoubiStore} />
      <Route path="/boutique-costa-del-sol" component={YakoubiStore} />
      <Route path="/costa-del-sol-website" component={CostaDelSolWebsite} />
      <Route path="/site-costa-del-sol" component={CostaDelSolWebsite} />
      <Route path="/techforall-landing" component={TechForAllLanding} />
      <Route path="/accueil-techforall" component={TechForAllLanding} />
      <Route path="/home-techforall" component={TechForAllLanding} />
      <Route path="/documents-techforall" component={TechForAllDocuments} />
      <Route path="/jstor-techforall" component={TechForAllDocuments} />
      <Route path="/pack-documents" component={TechForAllDocuments} />
      <Route path="/simulateur-evasion" component={DreamSimulator} />
      <Route path="/ambiances-reve" component={DreamSimulator} />
      <Route path="/dream-simulator" component={DreamSimulator} />
      <Route path="/generateurs-ia" component={AIGeneratorsMobile} />
      <Route path="/ai-generators" component={AIGeneratorsMobile} />
      <Route path="/mobile-ia-tools" component={AIGeneratorsMobile} />
      <Route path="/materiel-marin" component={MarineEquipmentCatalog} />
      <Route path="/equipement-peche" component={MarineEquipmentCatalog} />
      <Route path="/marine-equipment" component={MarineEquipmentCatalog} />
      <Route
        path="/boutique-solidaire"
        component={BoutiqueSolidaireTechForAll}
      />
      <Route
        path="/informatique-solidaire"
        component={BoutiqueSolidaireTechForAll}
      />
      <Route path="/techforall-shop" component={BoutiqueSolidaireTechForAll} />
      <Route path="/simulateur-recyclage" component={RecyclingSimulator} />
      <Route path="/recyclage-impact" component={RecyclingSimulator} />
      <Route path="/recycling-simulator" component={RecyclingSimulator} />
      <Route path="/compte-yakoubi" component={YakoubiCEDAccount} />
      <Route path="/yakoubi-ced-bank" component={YakoubiCEDAccount} />
      <Route path="/brahim-yakoubi-compte" component={YakoubiCEDAccount} />
      <Route path="/parrainage" component={ParrainageCED} />
      <Route path="/referral" component={ParrainageCED} />
      <Route path="/ambassadeur" component={ParrainageCED} />
      <Route path="/convertisseur" component={CurrencyConverter} />
      <Route path="/currency-converter" component={CurrencyConverter} />
      <Route path="/change-devises" component={CurrencyConverter} />
      <Route
        path="/convertisseur-instantane"
        component={InstantCurrencyConverter}
      />
      <Route path="/instant-converter" component={InstantCurrencyConverter} />
      <Route
        path="/convertisseur-premium"
        component={InstantCurrencyConverter}
      />
      <Route path="/wallet" component={CryptoWallet} />
      <Route path="/crypto-wallet" component={CryptoWallet} />
      <Route path="/portefeuille-crypto" component={CryptoWallet} />
      <Route path="/transactions" component={TransactionHistory} />
      <Route path="/historique" component={TransactionHistory} />
      <Route path="/transaction-history" component={TransactionHistory} />
      <Route path="/budget" component={BudgetPlanner} />
      <Route path="/budget-planner" component={BudgetPlanner} />
      <Route path="/planificateur-budget" component={BudgetPlanner} />
      <Route path="/crypto-donations" component={CryptoDonations} />
      <Route path="/donations-crypto" component={CryptoDonations} />
      <Route path="/dubai-crypto" component={CryptoDonations} />
      <Route path="/virtual-cards" component={VirtualCards} />
      <Route path="/cartes-virtuelles" component={VirtualCards} />
      <Route path="/ai-advisor" component={AIAdvisor} />
      <Route path="/conseiller-ia" component={AIAdvisor} />
      <Route path="/halal-cashback" component={HalalCashback} />
      <Route path="/cashback-halal" component={HalalCashback} />
      <Route path="/islamic-investments" component={IslamicInvestments} />
      <Route
        path="/investissements-islamiques"
        component={IslamicInvestments}
      />
      <Route path="/metaverse-nft" component={MetaverseNFT} />
      <Route path="/nft-halal" component={MetaverseNFT} />
      <Route path="/developer-api" component={DeveloperAPI} />
      <Route path="/api-developpeur" component={DeveloperAPI} />
      <Route path="/premium-dashboard" component={PremiumDashboard} />
      <Route path="/dashboard-premium" component={PremiumDashboard} />
      <Route path="/fonctionnalites-premium" component={PremiumDashboard} />
      <Route path="/mode-priere" component={ModePriere} />
      <Route path="/prayer-mode" component={ModePriere} />
      <Route path="/salah" component={ModePriere} />
      <Route path="/dubai-investments" component={DubaiInvestments} />
      <Route path="/investissements-dubai" component={DubaiInvestments} />
      <Route path="/immobilier-dubai" component={DubaiInvestments} />
      <Route path="/dubai-wealth-crm" component={DubaiWealthCRM} />
      <Route path="/fortunes-dubai" component={DubaiWealthCRM} />
      <Route path="/crm-donateurs" component={DubaiWealthCRM} />
      <Route path="/ced-bank-cards" component={CEDBankCardsPage} />
      <Route path="/cartes-ced" component={CEDBankCardsPage} />
      <Route path="/yakoubi-cards" component={CEDBankCardsPage} />
      <Route path="/souheila-bank" component={SouheilaBankAccountPage} />
      <Route path="/compte-souheila" component={SouheilaBankAccountPage} />
      <Route path="/nutrition-bank" component={SouheilaBankAccountPage} />
      <Route
        path="/costa-del-sol-bank"
        component={CostaDelSolBankAccountPage}
      />
      <Route
        path="/compte-costa-del-sol"
        component={CostaDelSolBankAccountPage}
      />
      <Route path="/brahim-bank" component={CostaDelSolBankAccountPage} />
      <Route path="/alaman-ced-comparison" component={AlAmanCEDComparisonPage} />
      <Route path="/assurance-dubai" component={AlAmanCEDComparisonPage} />
      <Route path="/takaful-comparison" component={AlAmanCEDComparisonPage} />
      <Route path="/alaman-ced-launch" component={AlAmanCEDLaunchStrategyPage} />
      <Route path="/strategie-lancement" component={AlAmanCEDLaunchStrategyPage} />
      <Route path="/go-to-market" component={AlAmanCEDLaunchStrategyPage} />
      <Route path="/citadelle-musulman" component={CitadelleMusulmanPage} />
      <Route path="/douaas" component={CitadelleMusulmanPage} />
      <Route path="/priere" component={CitadelleMusulmanPage} />
      <Route path="/qibla" component={CitadelleMusulmanPage} />
      <Route path="/ced-code" component={CEDCodePlatform} />
      <Route path="/code-platform" component={CEDCodePlatform} />
      <Route path="/developpement" component={CEDCodePlatform} />
      <Route path="/programmation" component={CEDCodePlatform} />
      <Route path="/formation-code" component={CEDCodePlatform} />
      <Route path="/api-banking" component={CEDBankingAPI} />
      <Route path="/api-halal" component={CEDBankingAPI} />
      <Route path="/sdk-banking" component={CEDBankingAPI} />
      <Route path="/developers" component={CEDBankingAPI} />
      <Route path="/developer-landing" component={DeveloperLanding} />
      <Route path="/investisseurs" component={DeveloperLanding} />
      <Route path="/developer-dashboard" component={DeveloperDashboard} />
      <Route path="/dashboard-dev" component={DeveloperDashboard} />
      <Route path="/comparison-halal" component={HalalPlatformComparison} />
      <Route path="/analyse-concurrentielle" component={HalalPlatformComparison} />
      <Route path="/positioning" component={HalalPlatformComparison} />
      <Route path="/alliance-islamique" component={IslamicMarketPartnership} />
      <Route path="/partenariat-strategique" component={IslamicMarketPartnership} />
      <Route path="/consortium-halal" component={IslamicMarketPartnership} />
      <Route path="/gouvernance-islamique" component={IslamicGovernance} />
      <Route path="/sharia-board" component={IslamicGovernance} />
      <Route path="/conformite-halal" component={IslamicGovernance} />
      <Route path="/al-aman-ced-prototype" component={AlAmanCEDPrototype} />
      <Route path="/kit-prototype" component={AlAmanCEDPrototype} />
      <Route path="/prototype-takaful" component={AlAmanCEDPrototype} />
      <Route path="/ced-cloud-platform" component={CEDReplitPlatform} />
      <Route path="/platform-deploy" component={CEDReplitPlatform} />
      <Route path="/cloud-hosting" component={CEDReplitPlatform} />
      <Route path="/cloud-ced" component={CEDReplitPlatform} />
      <Route path="/vue-ensemble" component={VueEnsemble} />
      <Route path="/contact-complet" component={ContactComplet} />
      <Route path="/contacts-equipe" component={ContactComplet} />
      <Route path="/equipe-complete" component={ContactComplet} />
      
      {/* Système RH et Code du Travail */}
      <Route path="/rh-management" component={HRSimplePage} />
      <Route path="/ressources-humaines" component={HRSimplePage} />
      <Route path="/gestion-rh" component={HRManagement} />
      <Route path="/hr-management" component={HRManagement} />
      <Route path="/code-travail-suisse" component={HRSimplePage} />
      <Route path="/contrats-travail" component={HRSimplePage} />
      <Route path="/droit-travail" component={HRSimplePage} />
      <Route path="/ia-juridique" component={HRSimplePage} />
      <Route path="/consultation-juridique" component={HRSimplePage} />
      <Route path="/salaires-equipe" component={HRSimplePage} />
      <Route path="/periode-essai" component={HRSimplePage} />
      <Route path="/hr-test" component={HRTestPage} />
      <Route path="/test-rh" component={HRTestPage} />
      <Route path="/tableau-bord-equipe" component={TableauBordEquipePage} />
      <Route path="/gestion-equipe" component={TableauBordEquipePage} />
      <Route path="/fiches-paie" component={PaySlipGeneratorPage} />
      <Route path="/generateur-fiches-paie" component={PaySlipGeneratorPage} />
      <Route path="/payslip-generator" component={PaySlipGeneratorPage} />
      <Route path="/app-logistique" component={LogisticsAppPage} />
      <Route path="/logistics-app" component={LogisticsAppPage} />
      <Route path="/mobile-logistique" component={LogisticsAppPage} />
      <Route path="/ced-bank-comptes" component={CEDBankAccountCreationPage} />
      <Route path="/comptes-bancaires" component={CEDBankAccountCreationPage} />
      <Route path="/bank-accounts" component={CEDBankAccountCreationPage} />
      <Route path="/al-aman-takaful" component={AlAmanTakafulInsurancePage} />
      <Route path="/assurance-takaful" component={AlAmanTakafulInsurancePage} />
      <Route path="/takaful-insurance" component={AlAmanTakafulInsurancePage} />
      <Route path="/innovation-roadmap" component={InnovationRoadmapPage} />
      <Route path="/roadmap-innovation" component={InnovationRoadmapPage} />
      <Route path="/technologies-futures" component={InnovationRoadmapPage} />
      <Route path="/formation-employes" component={EmployeeTrainingPlatformPage} />
      <Route path="/employee-training" component={EmployeeTrainingPlatformPage} />
      <Route path="/formations-continues" component={EmployeeTrainingPlatformPage} />
      <Route path="/suite-mobile-pro" component={MobileProfessionalSuitePage} />
      <Route path="/mobile-professional" component={MobileProfessionalSuitePage} />
      <Route path="/iphone-pro-max" component={MobileProfessionalSuitePage} />
      <Route path="/coran-ecoute" component={QuranListeningAppPage} />
      <Route path="/quran-listening" component={QuranListeningAppPage} />
      <Route path="/saint-coran" component={QuranListeningAppPage} />
      
      {/* Récitation Coran en direct */}
      <Route path="/coran-direct" component={QuranLiveRecitationPage} />
      <Route path="/quran-live" component={QuranLiveRecitationPage} />
      <Route path="/recitation-direct" component={QuranLiveRecitationPage} />
      <Route path="/mecque-direct" component={QuranLiveRecitationPage} />
      <Route path="/medine-direct" component={QuranLiveRecitationPage} />
      <Route path="/live-quran-stream" component={QuranLiveRecitationPage} />
      
      {/* École Arabe Premium */}
      <Route path="/ecole-arabe-premium" component={PremiumArabicSchoolPage} />
      <Route path="/arabic-school" component={PremiumArabicSchoolPage} />
      <Route path="/tajwid-courses" component={PremiumArabicSchoolPage} />
      <Route path="/recitateurs" component={PremiumArabicSchoolPage} />
      
      {/* Diagnostic système */}
      <Route path="/diagnostic-systeme" component={SystemDiagnosticsPage} />
      <Route path="/system-diagnostics" component={SystemDiagnosticsPage} />
      <Route path="/verification-complete" component={SystemDiagnosticsPage} />
      <Route path="/tests-fonctionnalites" component={SystemDiagnosticsPage} />
      
      <Route path="/construction-ecologique" component={EcologicalConstructionDonationsPage} />
      <Route path="/logements-sociaux" component={EcologicalConstructionDonationsPage} />
      <Route path="/dons-construction" component={EcologicalConstructionDonationsPage} />
      <Route path="/conseil-sharia" component={ShariaBoardCompliancePage} />
      <Route path="/conformite-aaoifi" component={ShariaBoardCompliancePage} />
      <Route path="/securite-bancaire" component={BankingSecurityPage} />
      <Route path="/authentification-2fa" component={BankingSecurityPage} />
      <Route path="/gestion-apis" component={APIManagementPage} />
      <Route path="/apis-management" component={APIManagementPage} />
      <Route path="/api-management" component={APIManagementPage} />
      <Route path="/management-apis" component={APIManagementPage} />
      <Route path="/tech-apis" component={APIManagementPage} />
      <Route path="/api-tech" component={APIManagementPage} />
      <Route path="/test-api-management" component={APIManagementTest} />
      <Route path="/apps-natives" component={MobileNativeAppsRobustPage} />
      <Route path="/applications-natives" component={MobileNativeAppsRobustPage} />
      <Route path="/native-apps" component={MobileNativeAppsRobustPage} />
      <Route path="/mobile-apps" component={MobileNativeAppsRobustPage} />
      <Route path="/mobile-ios-android" component={MobileNativeAppsRobustPage} />
      <Route path="/ios-android-apps" component={MobileNativeAppsRobustPage} />
      <Route path="/tech-mobile" component={MobileNativeAppsRobustPage} />
      <Route path="/mobile-tech" component={MobileNativeAppsRobustPage} />
      <Route path="/test-native-apps" component={MobileNativeAppsRobustPage} />
      <Route path="/analytics-avancees" component={AnalyticsAvanceesPage} />
      <Route path="/intelligence-artificielle" component={AnalyticsAvanceesPage} />
      <Route path="/integrations-strategiques" component={IntegrationsStrategiquesPage} />
      <Route path="/partenaires-apis" component={IntegrationsStrategiquesPage} />
      <Route path="/techforall-dashboard" component={TechForAllDashboardPage} />
      <Route path="/dashboard-techforall" component={TechForAllDashboardPage} />
      <Route path="/boutique-solidaire-dashboard" component={TechForAllDashboardPage} />
      <Route path="/contact" component={Contact} />
      <Route path="/a-propos" component={APropos} />
      <Route path="/faq" component={FAQ} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/portfolio-mobile" component={PortfolioMobilePage} />
      <Route path="/portfolio-yakoubi-yamina" component={PortfolioMobilePage} />
      <Route path="/portfolio-web" component={PortfolioWebClassiquePage} />
      <Route path="/portfolio-classique" component={PortfolioWebClassiquePage} />
      <Route path="/yakoubi-yamina-portfolio" component={PortfolioWebClassiquePage} />
      <Route path="/mobile-portfolio" component={PortfolioMobilePage} />
      <Route path="/contract-generator" component={ContractGeneratorPage} />
      <Route path="/generateur-contrats" component={ContractGeneratorPage} />
      <Route path="/contrats-travail" component={ContractGeneratorPage} />
      <Route path="/institut-ced-academy" component={InstitutCEDAcademyPage} />
      <Route path="/institut-ced" component={InstitutCEDAcademyPage} />
      <Route path="/ced-academy" component={InstitutCEDAcademyPage} />
      <Route path="/ia-financiere" component={AIAdvisorPage} />
      <Route path="/ai-financial" component={AIAdvisorPage} />
      <Route path="/conseil-ia-sharia" component={AIAdvisorPage} />
      <Route path="/ecoute-coran" component={QuranListeningPage} />
      <Route path="/quran-listening" component={QuranListeningPage} />
      <Route path="/recitateurs-coran" component={QuranListeningPage} />
      <Route path="/coran-live" component={QuranLiveRecitationPage} />
      <Route path="/quran-live" component={QuranLiveRecitationPage} />
      <Route path="/lecteur-coran" component={SimpleCoran} />
      <Route path="/simple-coran" component={SimpleCoran} />
      <Route path="/quran-reader" component={SimpleCoran} />
      <Route path="/coran-tajweed" component={SimpleCoran} />
      <Route path="/lecture-coran" component={SimpleCoran} />
      
      {/* Lecteur Coran Complet avec 114 sourates */}
      <Route path="/lecteur-coran-complet" component={LecteurCoranComplet} />
      <Route path="/coran-complet" component={LecteurCoranComplet} />
      <Route path="/holy-quran-reader" component={LecteurCoranComplet} />
      <Route path="/lecteur-coran-114-sourates" component={LecteurCoranComplet} />
      <Route path="/recitation-coran-complete" component={LecteurCoranComplet} />
      <Route path="/temoignages" component={Temoignages} />
      <Route path="/formations/programmation" component={Formations} />
      <Route path="/formations/dietetique" component={Formations} />
      <Route path="/formations/ia-domains" component={Formations} />
      <Route path="/formations/certifications" component={Formations} />
      <Route path="/chat" component={Formations} />
      <Route path="/aide" component={FAQ} />
      
      {/* Guide Fiqh Informatique - Routes multiples */}
      <Route path="/fiqh-informatique" component={FiqhInformatiqueGuidePage} />
      <Route path="/fiqh-informatique-guide" component={FiqhInformatiqueGuidePage} />
      <Route path="/guide-fiqh" component={FiqhInformatiqueGuidePage} />
      <Route path="/fiqh-tech" component={FiqhInformatiqueGuidePage} />
      <Route path="/regles-halal-tech" component={FiqhInformatiqueGuidePage} />
      <Route path="/islamic-tech-rules" component={FiqhInformatiqueGuidePage} />
      <Route path="/fiqh-expansion" component={FiqhExpansionPage} />
      <Route path="/fiqh-100-expansion" component={FiqhExpansionPage} />
      
      <Route path="/docs" component={FAQ} />
      <Route path="/status" component={Contact} />
      <Route path="/communaute" component={Temoignages} />
      <Route path="/gouvernance" component={APropos} />
      <Route path="/legal/confidentialite" component={FAQ} />
      <Route path="/legal/conditions" component={FAQ} />
      <Route path="/legal/cookies" component={FAQ} />

      {/* Nouvelles fonctionnalités CED Bank */}
      <Route path="/voice-banking-arabic" component={VoiceBankingArabicPage} />
      <Route path="/banking-vocal-arabe" component={VoiceBankingArabicPage} />
      <Route path="/zakat-calculator" component={ZakatCalculatorPage} />
      <Route path="/calculateur-zakat" component={ZakatCalculatorPage} />
      <Route path="/sharia-advisor" component={ShariaAdvisorPage} />
      <Route path="/blockchain-trade" component={BlockchainTradePage} />
      <Route path="/trade-finance" component={BlockchainTradePage} />
      <Route path="/crypto-sharia" component={CryptoShariaPage} />
      <Route path="/conformite-crypto" component={CryptoShariaPage} />
      <Route path="/islamic-defi" component={IslamicDeFiPage} />
      <Route path="/defi-islamique" component={IslamicDeFiPage} />
      
      {/* Canal AED Alimentation */}
      <Route path="/aed-channel" component={AEDChannelPage} />
      <Route path="/canal-aed" component={AEDChannelPage} />
      <Route path="/aed-alimentation" component={AEDChannelPage} />
      
      {/* Dashboard de test */}
      <Route path="/test-dashboard" component={TestDashboardPage} />
      <Route path="/dashboard-test" component={TestDashboardPage} />
      
      {/* Analyse conformité Sharia */}
      <Route path="/sharia-compliance-100" component={ShariaComplianceAnalysisPage} />
      <Route path="/conformite-sharia-100" component={ShariaComplianceAnalysisPage} />
      <Route path="/analyse-conformite-complete" component={ShariaComplianceAnalysisPage} />
      
      {/* Modules conformité 100% */}
      <Route path="/sharia-governance" component={ShariaGovernancePage} />
      <Route path="/conseil-sharia-permanent" component={ShariaGovernancePage} />
      <Route path="/purification-system" component={PurificationSystemPage} />
      <Route path="/systeme-purification" component={PurificationSystemPage} />
      <Route path="/operational-compliance" component={OperationalCompliancePage} />
      <Route path="/conformite-operationnelle" component={OperationalCompliancePage} />
      <Route path="/islamic-audit" component={IslamicAuditPage} />
      <Route path="/audit-islamique" component={IslamicAuditPage} />
      
      {/* Système complet 100% */}
      <Route path="/sharia-100-complete" component={Sharia100CompletePage} />
      <Route path="/systeme-sharia-complet" component={Sharia100CompletePage} />
      <Route path="/conformite-complete" component={Sharia100CompletePage} />
      
      {/* Synchronisation prière satellitaire */}
      <Route path="/satellite-prayer-sync" component={SatellitePrayerSyncPage} />
      <Route path="/synchronisation-priere" component={SatellitePrayerSyncPage} />
      <Route path="/prayer-satellite" component={SatellitePrayerSyncPage} />
      
      {/* Comptes famille */}
      <Route path="/parent-accounts" component={ParentAccountsPage} />
      <Route path="/comptes-parents" component={ParentAccountsPage} />
      <Route path="/famille-yakoubi" component={ParentAccountsPage} />
      
      {/* Comparaison banques */}
      <Route path="/banking-comparison" component={IslamicBankingComparisonPage} />
      <Route path="/comparaison-banques" component={IslamicBankingComparisonPage} />
      <Route path="/concurrence-islamique" component={IslamicBankingComparisonPage} />
      
      {/* Plateforme formations avancées */}
      <Route path="/advanced-learning" component={AdvancedLearningPlatformPage} />
      <Route path="/formations-avancees" component={AdvancedLearningPlatformPage} />
      <Route path="/academy-international" component={AdvancedLearningPlatformPage} />
      <Route path="/classes-virtuelles" component={AdvancedLearningPlatformPage} />
      
      {/* Guide Fiqh Informatique */}
      <Route path="/fiqh-informatique" component={FiqhInformatiqueGuidePage} />
      <Route path="/fiqh-guide" component={FiqhInformatiqueGuidePage} />
      <Route path="/islamic-tech-guide" component={FiqhInformatiqueGuidePage} />
      <Route path="/halal-learning" component={FiqhInformatiqueGuidePage} />
      
      {/* Expansion Fiqh 100% pour Golfe */}
      <Route path="/fiqh-expansion" component={FiqhExpansionPage} />
      <Route path="/fiqh-100" component={FiqhExpansionPage} />
      <Route path="/golfe-formations" component={FiqhExpansionPage} />
      <Route path="/dubai-formations" component={FiqhExpansionPage} />
      <Route path="/arabie-saoudite-formations" component={FiqhExpansionPage} />
      <Route path="/expansion-golfe" component={FiqhExpansionPage} />
      
      {/* Export Modules Dubaï & Arabie Saoudite */}
      <Route path="/export-modules" component={ExportModulesPage} />
      <Route path="/modules-export" component={ExportModulesPage} />
      <Route path="/dubai-export" component={ExportModulesPage} />
      <Route path="/saudi-export" component={ExportModulesPage} />
      <Route path="/golfe-export" component={ExportModulesPage} />
      
      {/* École de Langues et Traducteur */}
      <Route path="/language-learning" component={LanguageLearningPage} />
      <Route path="/ecole-langues" component={LanguageLearningPage} />
      <Route path="/langues" component={LanguageLearningPage} />
      <Route path="/arabe-litteraire" component={LanguageLearningPage} />
      <Route path="/anglais-international" component={LanguageLearningPage} />
      <Route path="/italien-culture" component={LanguageLearningPage} />
      <Route path="/echange-linguistique" component={LanguageLearningPage} />
      <Route path="/traducteur" component={TraducteurPage} />
      <Route path="/translator" component={TraducteurPage} />
      <Route path="/app-traduction" component={TraducteurPage} />
      <Route path="/interface-arabe" component={ArabicInterface} />
      <Route path="/arabic-interface" component={ArabicInterface} />
      <Route path="/institut-ced" component={ArabicInterface} />
      <Route path="/fiqh-informatique" component={FiqhInformatique} />
      <Route path="/fiqh-guide" component={FiqhInformatique} />
      <Route path="/islamic-tech-rules" component={FiqhInformatique} />
      <Route path="/bibliotheque-fiqh" component={FiqhInformatiqueBibliothequePage} />
      <Route path="/fiqh-bibliotheque" component={FiqhInformatiqueBibliothequePage} />
      <Route path="/fiches-fiqh" component={FiqhInformatiqueBibliothequePage} />
      <Route path="/procedures-islamiques" component={FiqhInformatiqueBibliothequePage} />
      <Route path="/islamic-procedures" component={FiqhInformatiqueBibliothequePage} />
      <Route path="/manuel-fiqh" component={ManuelFiqhPage} />
      <Route path="/manuel-fiqh-informatique" component={ManuelFiqhPage} />
      <Route path="/guide-complet-fiqh" component={ManuelFiqhPage} />
      <Route path="/fiqh-handbook" component={ManuelFiqhPage} />
      <Route path="/islamic-tech-handbook" component={ManuelFiqhPage} />
      <Route path="/super-iarp-pro" component={SuperIARPProPage} />
      <Route path="/super-ia" component={SuperIARPProPage} />
      <Route path="/iarp-pro" component={SuperIARPProPage} />
      <Route path="/ai-responsable" component={SuperIARPProPage} />
      <Route path="/prettyhowq-ai" component={SuperIARPProPage} />
      <Route path="/traducteur-multilingue" component={ArabicMultilingualTranslator} />
      <Route path="/multilingual-translator" component={ArabicMultilingualTranslator} />
      <Route path="/traducteur-arabe" component={ArabicMultilingualTranslator} />
      
      {/* Espace Santé - Souheila Yakoubi-Ozel */}
      <Route path="/espace-sante" component={EspaceSantePage} />
      <Route path="/sante-souheila" component={EspaceSantePage} />
      <Route path="/nutrition-coaching" component={EspaceSantePage} />
      <Route path="/souheila-yakoubi-ozel" component={EspaceSantePage} />
      
      <Route path="/professeur-arabe-ia" component={ArabicAITeacherPage} />
      <Route path="/arabic-ai-teacher" component={ArabicAITeacherPage} />
      <Route path="/ia-arabe" component={ArabicAITeacherPage} />
      <Route path="/ecriture-arabe" component={ArabicWritingLearnerPage} />
      <Route path="/arabic-writing" component={ArabicWritingLearnerPage} />
      <Route path="/calligraphie-arabe" component={ArabicWritingLearnerPage} />
      
      {/* Comparaison écoles en ligne */}
      <Route path="/education-comparison" component={EducationComparisonPage} />
      <Route path="/comparaison-ecoles" component={EducationComparisonPage} />
      <Route path="/online-schools" component={EducationComparisonPage} />
      <Route path="/concurrence-education" component={EducationComparisonPage} />
      <Route path="/platform-comparison" component={EducationComparisonPage} />
      <Route path="/fiqh-platforms" component={EducationComparisonPage} />
      
      {/* TechForAll Association */}
      <Route path="/techforall" component={TechForAllAssociationPage} />
      <Route path="/tech-for-all" component={TechForAllAssociationPage} />
      <Route path="/association" component={TechForAllAssociationPage} />
      <Route path="/dons-solidaires" component={TechForAllAssociationPage} />
      
      {/* Costa del Sol Boutique */}
      <Route path="/costa-del-sol" component={CostaDelSolBoutiquePage} />
      <Route path="/boutique" component={CostaDelSolBoutiquePage} />
      <Route path="/boutique-solidaire" component={CostaDelSolBoutiquePage} />
      <Route path="/shop" component={CostaDelSolBoutiquePage} />
      
      {/* Documents légaux automatiques */}
      <Route path="/documents-legaux" component={DocumentsLegauxAutomatiquesPage} />
      <Route path="/recu-fiscal" component={DocumentsLegauxAutomatiquesPage} />
      <Route path="/documents-automatiques" component={DocumentsLegauxAutomatiquesPage} />
      <Route path="/tax-documents" component={DocumentsLegauxAutomatiquesPage} />
      
      {/* Logistique équipements */}
      <Route path="/logistique" component={LogistiqueEquipementsPage} />
      <Route path="/equipements" component={LogistiqueEquipementsPage} />
      <Route path="/attribution-materiel" component={LogistiqueEquipementsPage} />
      <Route path="/macena-letter" component={LogistiqueEquipementsPage} />

      {/* Système Bancaire Familial */}
      <Route path="/family-banking" component={FamilyBankingPage} />
      <Route path="/banking-familial" component={FamilyBankingPage} />
      <Route path="/comptes-famille" component={FamilyBankingPage} />

      {/* Nouvelles fonctionnalités PrettyhowQ HalalTech™ */}
      <Route path="/webtv-prettyhowq" component={WebTVPrettyhowQ} />
      <Route path="/webtv-ia" component={WebTVPrettyhowQ} />
      <Route path="/youtube-automatise" component={WebTVPrettyhowQ} />
      <Route path="/television-ia" component={WebTVPrettyhowQ} />
      <Route path="/prettyhowq-tv" component={WebTVPrettyhowQ} />
      
      <Route path="/halaltech-website" component={HalalTechWebsite} />
      <Route path="/halaltech" component={HalalTechWebsite} />
      <Route path="/formations-halal" component={HalalTechWebsite} />
      <Route path="/plateforme-halal" component={HalalTechWebsite} />
      <Route path="/ia-ethique" component={HalalTechWebsite} />
      <Route path="/formations-fiqh" component={HalalTechWebsite} />
      
      <Route path="/selecteur-langue" component={HalalTechWebsite} />
      <Route path="/language-selector" component={HalalTechWebsite} />
      <Route path="/langues-interactives" component={HalalTechWebsite} />
      <Route path="/multilingual" component={HalalTechWebsite} />
      
      <Route path="/assistant-ia-spiritual" component={AssistantIASpiritual} />
      <Route path="/assistant-spirituel" component={AssistantIASpiritual} />
      <Route path="/ia-islamique" component={AssistantIASpiritual} />
      <Route path="/chatbot-spiritual" component={AssistantIASpiritual} />
      <Route path="/aide-spirituelle" component={AssistantIASpiritual} />
      
      <Route path="/plateforme-formations-halal" component={PlateformeFormationsHalal} />
      <Route path="/formations-certifiees" component={PlateformeFormationsHalal} />
      <Route path="/plateforme-education" component={PlateformeFormationsHalal} />
      <Route path="/academy-halal" component={PlateformeFormationsHalal} />
      <Route path="/certifications-prettyhowq" component={PlateformeFormationsHalal} />
      
      {/* Thèmes islamiques personnalisables */}
      <Route path="/themes-islamiques" component={IslamicThemesPage} />
      <Route path="/islamic-themes" component={IslamicThemesPage} />
      <Route path="/themes" component={IslamicThemesPage} />
      <Route path="/personalisation" component={IslamicThemesPage} />
      
      {/* Diagnostic écosystème */}
      <Route path="/diagnostic" component={EcosystemDiagnosticsPage} />
      <Route path="/ecosystem-diagnostic" component={EcosystemDiagnosticsPage} />
      <Route path="/analyse-complete" component={EcosystemDiagnosticsPage} />
      <Route path="/performance" component={EcosystemDiagnosticsPage} />
      
      {/* Fiqh Informatique complet */}
      <Route path="/fiqh-informatique" component={FiqhCompliancePage} />
      <Route path="/fiqh-compliance" component={FiqhCompliancePage} />
      <Route path="/islamic-ethics" component={FiqhCompliancePage} />
      <Route path="/halal-development" component={FiqhCompliancePage} />
      <Route path="/ethical-coding" component={FiqhCompliancePage} />
      
      {/* Community Fiqh Guidelines */}
      <Route path="/community-fiqh-guidelines" component={CommunityFiqhGuidelinesPage} />
      <Route path="/community-guidelines" component={CommunityFiqhGuidelinesPage} />
      <Route path="/fiqh-community" component={CommunityFiqhGuidelinesPage} />
      <Route path="/collaborative-fiqh" component={CommunityFiqhGuidelinesPage} />
      
      {/* Spiritual Motivation Micro-Interactions */}
      <Route path="/spiritual-motivation" component={SpiritualMotivationMicroInteractionsPage} />
      <Route path="/micro-interactions" component={SpiritualMotivationMicroInteractionsPage} />
      <Route path="/spiritual-micro" component={SpiritualMotivationMicroInteractionsPage} />
      <Route path="/motivation-spirituelle" component={SpiritualMotivationMicroInteractionsPage} />
      <Route path="/dhikr-interactif" component={SpiritualMotivationMicroInteractionsPage} />
      
      {/* Testing Center */}
      <Route path="/test-center" component={TestingCenterPage} />
      <Route path="/testing-center" component={TestingCenterPage} />
      <Route path="/centre-test" component={TestingCenterPage} />
      <Route path="/test-fonctionnalites" component={TestingCenterPage} />
      <Route path="/tous-tester" component={TestingCenterPage} />
      
      {/* Charte Fiqh & IA Halal */}
      <Route path="/charte-fiqh-ia-halal" component={CharteFiqhIAHalalSimple} />
      <Route path="/charte-prettyhowq" component={CharteFiqhIAHalalSimple} />
      <Route path="/certification-halal" component={CharteFiqhIAHalalSimple} />
      <Route path="/fiqh-chart" component={CharteFiqhIAHalalSimple} />

      {/* Main home page accessible to everyone */}
      <Route path="/" component={CedVoieHalalHome} />
      <Route path="/ced-halal-home" component={CedVoieHalalHome} />
      <Route path="/ecosysteme-ced" component={CedVoieHalalHome} />
      <Route path="/home-original" component={Home} />
      
      {/* Protected routes for authenticated users */}
      {isAuthenticated && !isLoading && (
        <>
          <Route path="/dashboard" component={Dashboard} />
        </>
      )}

      {/* Cloud Halal */}
      <Route path="/cloud-halal" component={CloudHalal} />
      <Route path="/cloud-100-halal" component={CloudHalal} />
      <Route path="/halal-cloud" component={CloudHalal} />
      <Route path="/infrastructure-islamique" component={CloudHalal} />
      
      {/* Comptabilité Islamique */}
      <Route path="/comptabilite-islamique" component={ComptabiliteIslamique} />
      <Route path="/islamic-accounting" component={ComptabiliteIslamique} />
      <Route path="/comptabilite-halal" component={ComptabiliteIslamique} />
      <Route path="/gestion-comptable" component={ComptabiliteIslamique} />
      
      {/* Immobilier Islamique */}
      <Route path="/immobilier-islamique" component={ImmobilierIslamique} />
      <Route path="/islamic-real-estate" component={ImmobilierIslamique} />
      <Route path="/immobilier-halal" component={ImmobilierIslamique} />
      <Route path="/gestion-immobiliere" component={ImmobilierIslamique} />
      
      {/* Écosystème Pôles Halal */}
      <Route path="/ecosysteme-poles-halal" component={EcosystemePolesHalal} />
      <Route path="/halal-ecosystem" component={EcosystemePolesHalal} />
      <Route path="/poles-halal" component={EcosystemePolesHalal} />
      <Route path="/interconnexion-halal" component={EcosystemePolesHalal} />
      
      {/* Navigation Complète */}
      <Route path="/navigation-complete" component={NavigationComplete} />
      <Route path="/ou-est-tout" component={NavigationComplete} />
      <Route path="/localisation" component={NavigationComplete} />
      <Route path="/map" component={NavigationComplete} />
      
      {/* Localisation Visuelle */}
      <Route path="/localisation-visuelle" component={LocalisationVisuelle} />
      <Route path="/ca-se-trouve-ou" component={LocalisationVisuelle} />
      <Route path="/recherche-visuelle" component={LocalisationVisuelle} />
      
      {/* 53 Modules CED HalalTech™ */}
      <Route path="/52-modules" component={Localisation52Modules} />
      <Route path="/tous-modules" component={Localisation52Modules} />
      <Route path="/coran-et-modules" component={Localisation52Modules} />
      
      {/* Nouvelles Fonctionnalités Révolutionnaires CED */}
      <Route path="/fiqh-informatique-complet" component={FiqhInformatiqueComplet} />
      <Route path="/fiqh-complet" component={FiqhInformatiqueComplet} />
      <Route path="/4-sources-islamiques" component={FiqhInformatiqueComplet} />
      <Route path="/fiqh-system" component={FiqhInformatiqueComplet} />
      
      <Route path="/themes-islamiques-personnalisables" component={ThemesIslamiquesPersonnalisables} />
      <Route path="/themes-spirituels" component={ThemesIslamiquesPersonnalisables} />
      <Route path="/personnalisation" component={ThemesIslamiquesPersonnalisables} />
      <Route path="/8-themes" component={ThemesIslamiquesPersonnalisables} />
      
      <Route path="/diagnostic-ecosysteme-revolutionnaire" component={DiagnosticEcosystemeRevolutionnaire} />
      <Route path="/diagnostic-99" component={DiagnosticEcosystemeRevolutionnaire} />
      <Route path="/score-revolutionnaire" component={DiagnosticEcosystemeRevolutionnaire} />
      <Route path="/performance-ced" component={DiagnosticEcosystemeRevolutionnaire} />
      
      <Route path="/gestion-rh-complete" component={GestionRHComplete} />
      <Route path="/rh-complete" component={GestionRHComplete} />
      <Route path="/equipe-ced" component={GestionRHComplete} />
      <Route path="/hr-management" component={GestionRHComplete} />
      
      {/* Assistant Vocal Multilingue Éthique */}
      <Route path="/assistant-vocal-multilingue" component={MultilingualVoiceAssistant} />
      <Route path="/voice-assistant" component={MultilingualVoiceAssistant} />
      <Route path="/aisha-al-aman" component={MultilingualVoiceAssistant} />
      <Route path="/ia-vocale-ethique" component={MultilingualVoiceAssistant} />
      <Route path="/multilingual-voice" component={MultilingualVoiceAssistant} />
      
      {/* Parcours Gamifié FinTech Islamique */}
      <Route path="/parcours-gamifie" component={GamifiedLearningPath} />
      <Route path="/gamified-learning" component={GamifiedLearningPath} />
      <Route path="/fintech-gaming" component={GamifiedLearningPath} />
      <Route path="/apprentissage-jeu" component={GamifiedLearningPath} />
      <Route path="/islamic-gaming-learning" component={GamifiedLearningPath} />
      
      {/* Bibliothèque Fiqh Informatique */}
      <Route path="/bibliotheque-fiqh-informatique" component={BibliothequeNumeriqueFiqh} />
      <Route path="/fiqh-library" component={BibliothequeNumeriqueFiqh} />
      <Route path="/islamic-tech-rules" component={BibliothequeNumeriqueFiqh} />
      <Route path="/23456-regles-islamiques" component={BibliothequeNumeriqueFiqh} />
      <Route path="/bibliotheque-numerique-fiqh" component={BibliothequeNumeriqueFiqh} />
      
      {/* Fiqh IA - 3456 Règles Intelligence Artificielle */}
      <Route path="/fiqh-ia-3456-regles" component={FiqhIA3456Regles} />
      <Route path="/intelligence-artificielle-islam" component={FiqhIA3456Regles} />
      <Route path="/ai-islamic-rules" component={FiqhIA3456Regles} />
      <Route path="/fiqh-artificial-intelligence" component={FiqhIA3456Regles} />
      
      {/* Motivation Spirituelle Micro-Interactions */}
      <Route path="/motivation-spirituelle" component={MotivationSpirituelleApp} />
      <Route path="/spiritual-motivation" component={MotivationSpirituelleApp} />
      <Route path="/micro-interactions-spirituelles" component={MotivationSpirituelleApp} />
      <Route path="/dhikr-motivation" component={MotivationSpirituelleApp} />
      <Route path="/motivation-micro-interactions" component={MotivationSpirituelleApp} />
      
      {/* Planification Successorale 50+ Ans */}
      <Route path="/planification-successorale-50-ans" component={PlanificationSuccessorale50Ans} />
      <Route path="/succession-planning" component={PlanificationSuccessorale50Ans} />
      <Route path="/heritage-familial-50ans" component={PlanificationSuccessorale50Ans} />
      <Route path="/souheila-hanae-heritage" component={PlanificationSuccessorale50Ans} />
      <Route path="/generations-futures-ced" component={PlanificationSuccessorale50Ans} />
      
      {/* Équipe Développement Web Halal */}
      <Route path="/equipe-developpement-web-halal" component={EquipeDeveloppementWebHalal} />
      <Route path="/dev-team-halal" component={EquipeDeveloppementWebHalal} />
      <Route path="/langages-halal-certifies" component={EquipeDeveloppementWebHalal} />
      <Route path="/visual-studio-code-halal" component={EquipeDeveloppementWebHalal} />
      <Route path="/github-halal" component={EquipeDeveloppementWebHalal} />
      <Route path="/clients-prestige-cartier-lv" component={EquipeDeveloppementWebHalal} />
      
      {/* Convertisseur Devises & Zakat */}
      <Route path="/convertisseur-devise-zakat" component={ConvertisseurDeviseZakat} />
      <Route path="/currency-converter-zakat" component={ConvertisseurDeviseZakat} />
      <Route path="/calculateur-zakat-halal" component={ConvertisseurDeviseZakat} />
      <Route path="/outils-financiers-halal" component={ConvertisseurDeviseZakat} />
      <Route path="/widgets-sites-prestige" component={ConvertisseurDeviseZakat} />
      
      {/* Mode Accessibilité Islamique */}
      <Route path="/mode-accessibilite-islamique" component={ResponsiveAccessibilityMode} />
      <Route path="/responsive-accessibility-mode" component={ResponsiveAccessibilityMode} />
      <Route path="/accessibilite-contraste-islam" component={ResponsiveAccessibilityMode} />
      <Route path="/high-contrast-islamic" component={ResponsiveAccessibilityMode} />
      <Route path="/accessibility-islamic-mode" component={ResponsiveAccessibilityMode} />
      
      {/* Suivi Spirituel Interactif */}
      <Route path="/suivi-spirituel-interactif" component={InteractiveSpiritualJourneyMoodTracker} />
      <Route path="/interactive-spiritual-journey" component={InteractiveSpiritualJourneyMoodTracker} />
      <Route path="/mood-tracker-spirituel" component={InteractiveSpiritualJourneyMoodTracker} />
      <Route path="/journey-spiritual-gentle" component={InteractiveSpiritualJourneyMoodTracker} />
      <Route path="/spiritual-mood-tracker" component={InteractiveSpiritualJourneyMoodTracker} />

      {/* Méthodes Apprentissage Islamique Tech */}
      <Route path="/methodes-apprentissage-islamique-tech" component={MethodesApprentissageIslamiqueTech} />
      <Route path="/islamic-learning-methods" component={MethodesApprentissageIslamiqueTech} />
      <Route path="/apprentissage-tech-halal" component={MethodesApprentissageIslamiqueTech} />
      <Route path="/methodes-tech-islamique" component={MethodesApprentissageIslamiqueTech} />
      <Route path="/halal-tech-learning" component={MethodesApprentissageIslamiqueTech} />

      {/* Méthodologie Étudiants Islamique Tech */}
      <Route path="/methodologie-etudiants-islamique-tech" component={MethodologieEtudiantsIslamiqueTech} />
      <Route path="/islamic-students-methodology" component={MethodologieEtudiantsIslamiqueTech} />
      <Route path="/methodologie-sciences-islamiques" component={MethodologieEtudiantsIslamiqueTech} />
      <Route path="/fiqh-informatique-pratique" component={MethodologieEtudiantsIslamiqueTech} />
      <Route path="/dev-web-islamique" component={MethodologieEtudiantsIslamiqueTech} />

      {/* Finance Islamique 100% Halal */}
      <Route path="/finance-islamique-halal" component={FinanceIslamiqueHalal} />
      <Route path="/islamic-finance-100-halal" component={FinanceIslamiqueHalal} />
      <Route path="/finance-sharia-compliant" component={FinanceIslamiqueHalal} />
      <Route path="/instruments-financiers-islamiques" component={FinanceIslamiqueHalal} />
      <Route path="/halal-banking-investments" component={FinanceIslamiqueHalal} />
      <Route path="/sukuk-murabaha-takaful" component={FinanceIslamiqueHalal} />

      {/* Voie Halal 52 - Programme Transformation */}
      <Route path="/voie-halal-52" component={VoieHalal52} />
      <Route path="/voie-halal" component={VoieHalal52} />
      
      {/* Philosophie Humilité Islamique */}
      <Route path="/philosophie-humilite-islamique" component={PhilosophieHumiliteIslamique} />
      <Route path="/enseignement-humilite-islamique" component={PhilosophieHumiliteIslamique} />
      <Route path="/sagesse-humilite-islamique" component={PhilosophieHumiliteIslamique} />
      <Route path="/humilite-elevation" component={PhilosophieHumiliteIslamique} />
      <Route path="/tawadu-islamic" component={PhilosophieHumiliteIslamique} />
      <Route path="/spiritual-elevation" component={PhilosophieHumiliteIslamique} />
      <Route path="/bi-kudrati-allah" component={PhilosophieHumiliteIslamique} />
      
      {/* Hommage Scholars Islamiques */}
      <Route path="/hommage-scholars-islamiques" component={HommageScholarsIslamiques} />
      <Route path="/scholars-islamic" component={HommageScholarsIslamiques} />
      <Route path="/savants-islam" component={HommageScholarsIslamiques} />
      <Route path="/montagnes-science" component={HommageScholarsIslamiques} />
      <Route path="/zakat-scholars" component={HommageScholarsIslamiques} />
      <Route path="/albani-ibn-taymiyyah" component={HommageScholarsIslamiques} />
      
      {/* Système Du'a Transactions */}
      <Route path="/systeme-duaa-transactions" component={SystemeDuaaTransactions} />
      <Route path="/duaa-automatique" component={SystemeDuaaTransactions} />
      <Route path="/prayer-transactions" component={SystemeDuaaTransactions} />
      <Route path="/scholars-duaa-system" component={SystemeDuaaTransactions} />
      <Route path="/automatic-prayer" component={SystemeDuaaTransactions} />
      
      {/* Amour Fi-Allah Authentique */}
      <Route path="/amour-fi-allah-authentique" component={AmourFiAllahAuthentique} />
      <Route path="/love-fi-allah" component={AmourFiAllahAuthentique} />
      <Route path="/amour-authentique" component={AmourFiAllahAuthentique} />
      <Route path="/spiritual-love" component={AmourFiAllahAuthentique} />
      <Route path="/love-prophet-allah" component={AmourFiAllahAuthentique} />
      
      {/* Garages Halal Network */}
      <Route path="/garages-halal" component={GaragesHalal} />
      <Route path="/garages-halal-network" component={GaragesHalal} />
      <Route path="/garage-halal" component={GaragesHalal} />
      <Route path="/automotive-halal" component={GaragesHalal} />
      
      {/* Blockchain Fiqh Rules */}
      <Route path="/blockchain-fiqh-rules" component={BlockchainFiqhRules} />
      <Route path="/blockchain-fiqh" component={BlockchainFiqhRules} />
      <Route path="/crypto-fiqh" component={BlockchainFiqhRules} />
      <Route path="/blockchain-islamic" component={BlockchainFiqhRules} />
      <Route path="/regles-blockchain" component={BlockchainFiqhRules} />
      <Route path="/sabil-al-halal" component={VoieHalal52} />
      <Route path="/programme-52-etapes" component={VoieHalal52} />
      <Route path="/transformation-halal" component={VoieHalal52} />
      <Route path="/univers-ethique-prospere" component={VoieHalal52} />

      {/* Alternative landing page */}
      <Route path="/landing" component={Landing} />

      {/* 404 fallback */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <VoiceProvider>
          <TooltipProvider>
            <div className="min-h-screen flex flex-col">
              <main className="flex-1">
                <Router />
              </main>
              <Footer />
            </div>
            <Toaster />
          </TooltipProvider>
        </VoiceProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
