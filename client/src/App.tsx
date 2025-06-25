import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/context/LanguageContext";
import { VoiceProvider } from "@/context/VoiceContext";
import { useAuth } from "@/hooks/useAuth";

// Pages
import Home from "@/pages/Home";
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
import HRManagementPage from "@/pages/HRManagement";
import ContractGeneratorPage from "@/pages/ContractGeneratorPage";
import LogisticsMobilePage from "@/pages/LogisticsMobilePage";
import TechForAllIntegrationPage from "@/pages/TechForAllIntegrationPage";
import AlAmanCEDInsurancePage from "@/pages/AlAmanCEDInsurancePage";
import QuranListeningPage from "@/pages/QuranListeningPage";
import IslamicBankingComparisonPage from "@/pages/IslamicBankingComparisonPage";
import VoiceBankingArabicPage from "@/pages/VoiceBankingArabicPage";
import ZakatCalculatorPage from "@/pages/ZakatCalculatorPage";
import ShariaAdvisorPage from "@/pages/ShariaAdvisorPage";
import BlockchainTradePage from "@/pages/BlockchainTradePage";
import CryptoShariaPage from "@/pages/CryptoShariaPage";
import IslamicDeFiPage from "@/pages/IslamicDeFiPage";
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
import NotFound from "@/pages/not-found";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

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
      <Route path="/vue-ensemble" component={VueEnsemble} />
      <Route path="/contact-complet" component={ContactComplet} />
      <Route path="/contacts-equipe" component={ContactComplet} />
      <Route path="/equipe-complete" component={ContactComplet} />
      
      {/* Système RH et Code du Travail */}
      <Route path="/rh-management" component={HRManagementPage} />
      <Route path="/ressources-humaines" component={HRManagementPage} />
      <Route path="/gestion-rh" component={HRManagementPage} />
      <Route path="/code-travail-suisse" component={HRManagementPage} />
      <Route path="/contrats-travail" component={HRManagementPage} />
      <Route path="/droit-travail" component={HRManagementPage} />
      <Route path="/ia-juridique" component={HRManagementPage} />
      <Route path="/consultation-juridique" component={HRManagementPage} />
      <Route path="/salaires-equipe" component={HRManagementPage} />
      <Route path="/periode-essai" component={HRManagementPage} />
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
      <Route path="/construction-ecologique" component={EcologicalConstructionDonationsPage} />
      <Route path="/logements-sociaux" component={EcologicalConstructionDonationsPage} />
      <Route path="/dons-construction" component={EcologicalConstructionDonationsPage} />
      <Route path="/conseil-sharia" component={ShariaBoardCompliancePage} />
      <Route path="/conformite-aaoifi" component={ShariaBoardCompliancePage} />
      <Route path="/securite-bancaire" component={BankingSecurityPage} />
      <Route path="/authentification-2fa" component={BankingSecurityPage} />
      <Route path="/gestion-apis" component={APIManagementPage} />
      <Route path="/apis-management" component={APIManagementPage} />
      <Route path="/apps-natives" component={MobileNativeAppsPage} />
      <Route path="/mobile-ios-android" component={MobileNativeAppsPage} />
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
      <Route path="/temoignages" component={Temoignages} />
      <Route path="/formations/programmation" component={Formations} />
      <Route path="/formations/dietetique" component={Formations} />
      <Route path="/formations/ia-domains" component={Formations} />
      <Route path="/formations/certifications" component={Formations} />
      <Route path="/chat" component={Formations} />
      <Route path="/aide" component={FAQ} />
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

      {/* Main home page accessible to everyone */}
      <Route path="/" component={Home} />
      
      {/* Protected routes for authenticated users */}
      {isAuthenticated && !isLoading && (
        <>
          <Route path="/dashboard" component={Dashboard} />
        </>
      )}

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
            <Toaster />
            <Router />
          </TooltipProvider>
        </VoiceProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
