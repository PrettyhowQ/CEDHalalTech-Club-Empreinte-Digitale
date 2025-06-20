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
      <Route path="/coaching" component={CoachingMobile} />
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
