import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Lock, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PrivateAccessLoginProps {
  onAccessGranted: () => void;
}

export default function PrivateAccessLogin({ onAccessGranted }: PrivateAccessLoginProps) {
  const [accessCode, setAccessCode] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/verify-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: accessCode }),
      });

      if (response.ok) {
        localStorage.setItem("ced_private_access", "granted");
        localStorage.setItem("ced_access_timestamp", Date.now().toString());
        toast({
          title: "Accès autorisé",
          description: "Bienvenue dans l'écosystème CED HalalTech™ privé",
        });
        onAccessGranted();
      } else {
        toast({
          title: "Code d'accès invalide",
          description: "Veuillez vérifier votre code d'accès",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erreur de connexion",
        description: "Impossible de vérifier le code d'accès",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            CED HalalTech™
          </h1>
          <p className="text-gray-300">Accès Privé Sécurisé</p>
          <div className="text-sm text-gray-400 mt-2 font-arabic">
            نظام آمن للوصول الخاص - Système d'Accès Privé Sécurisé
          </div>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Lock className="h-5 w-5 text-green-400" />
              <span>Code d'Accès Privé</span>
            </CardTitle>
            <CardDescription className="text-gray-300">
              Entrez votre code d'accès pour accéder à l'écosystème complet CED
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="accessCode" className="text-white">
                  Code d'Accès Sécurisé
                </Label>
                <div className="relative">
                  <Input
                    id="accessCode"
                    type={showCode ? "text" : "password"}
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    placeholder="Entrez votre code d'accès privé"
                    className="bg-slate-700 border-slate-600 text-white pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0 hover:bg-slate-600"
                    onClick={() => setShowCode(!showCode)}
                  >
                    {showCode ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                disabled={isLoading || !accessCode.trim()}
              >
                {isLoading ? "Vérification..." : "Accéder à l'Écosystème"}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
              <div className="flex items-center space-x-2 text-green-400 mb-2">
                <Shield className="h-4 w-4" />
                <span className="font-semibold">Protection Maximale</span>
              </div>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Accès strictement limité aux personnes autorisées</li>
                <li>• Codes d'accès avec expiration automatique</li>
                <li>• Traçabilité complète des connexions</li>
                <li>• Conformité RGPD et protection des données</li>
              </ul>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-400">
                © 2025 CED HalalTech™ - Yakoubi Yamina
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Application privée - Accès autorisé uniquement
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}