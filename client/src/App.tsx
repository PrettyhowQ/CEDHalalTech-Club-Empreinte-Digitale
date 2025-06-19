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
import NotFound from "@/pages/not-found";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <Switch>
      {/* Public routes */}
      <Route path="/formations" component={Formations} />
      <Route path="/formations/:category" component={Formations} />
      <Route path="/planning" component={Planning} />
      <Route path="/coaching" component={CoachingMobile} />
      
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
