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
import ModePriere from "@/pages/ModePriere";
import DubaiInvestments from "@/pages/DubaiInvestments";
import DubaiWealthCRM from "@/pages/DubaiWealthCRM";
import NotFound from "@/pages/not-found";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <Switch>
      {/* Public routes */}
      <Route path="/formations" component={Formations} />
      <Route path="/formations/:category" component={Formations} />
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
      <Route path="/ced-bank" component={BanqueDigitale} />
      <Route path="/banking" component={BanqueDigitale} />
      <Route path="/app-bancaire" component={AppBancaireMobile} />
      <Route path="/mobile-banking" component={AppBancaireMobile} />
      <Route path="/ced-bank-app" component={AppBancaireMobile} />
      <Route path="/telecharger-app" component={AppBancaireMobile} />
      <Route path="/parrainage" component={ParrainageCED} />
      <Route path="/referral" component={ParrainageCED} />
      <Route path="/ambassadeur" component={ParrainageCED} />
      <Route path="/convertisseur" component={CurrencyConverter} />
      <Route path="/currency-converter" component={CurrencyConverter} />
      <Route path="/change-devises" component={CurrencyConverter} />
      <Route path="/convertisseur-instantane" component={InstantCurrencyConverter} />
      <Route path="/instant-converter" component={InstantCurrencyConverter} />
      <Route path="/convertisseur-premium" component={InstantCurrencyConverter} />
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
      <Route path="/investissements-islamiques" component={IslamicInvestments} />
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
      
      {/* Protected routes for authenticated users */}
      {isAuthenticated && !isLoading && (
        <>
          <Route path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </>
      )}
      
      {/* Landing page for non-authenticated users */}
      {(!isAuthenticated || isLoading) && (
        <Route path="/" component={Landing} />
      )}
      
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
