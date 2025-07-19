import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/context/LanguageContext";
import { VoiceProvider } from "@/context/VoiceContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { usePrivateAccess } from "@/hooks/usePrivateAccess";
import PrivateAccessLogin from "@/components/PrivateAccessLogin";
import Home from "@/pages/HomeFixed";

function Router() {
  const { hasAccess } = usePrivateAccess();

  if (!hasAccess) {
    return <PrivateAccessLogin />;
  }

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route>
        <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">CED HalalTech™</h1>
            <p className="text-xl">Écosystème Technologique Islamique Mondial</p>
            <p className="text-lg mt-4">245K+ Membres dans 67 pays</p>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;