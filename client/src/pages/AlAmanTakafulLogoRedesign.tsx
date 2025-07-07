import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, XCircle, Shield, Moon, Star, Zap } from "lucide-react";
import LogosCED from "@/components/LogosCED";
import ProtectionFooter from "@/components/ProtectionFooter";

export default function AlAmanTakafulLogoRedesign() {
  const conformeSymboles = [
    { icon: Shield, nom: "Bouclier", signification: "Protection & sécurité", conforme: true },
    { icon: Moon, nom: "Croissant", signification: "Identité musulmane (culturelle)", conforme: true },
    { nom: "🧩", signification: "Calligraphie arabe", description: "Esthétique & éthique", conforme: true },
    { nom: "🌱", signification: "Feuille ou arbre", description: "Régénération, solidarité", conforme: true },
    { nom: "🕋", signification: "Symbole géométrique inspiré de l'islam", description: "Sobriété & conformité", conforme: true },
    { nom: "🔷", signification: "Hexagone / Octogone", description: "Figure géométrique neutre", conforme: true }
  ];

  const alternatives = [
    "🤝 Une main solidaire",
    "💧 Une goutte (pour rahma)",
    "🌙 Un demi-cercle protecteur", 
    "🔤 Symbole islamique stylisé (lettre 'ح' pour حماية - protection)"
  ];

  const elementsLogo = [
    "Bouclier de protection principal avec dégradé vert islamique",
    "Croissant islamique central remplaçant la croix",
    "Étoile à 8 branches (symbole islamique authentique)",
    "Motifs géométriques de protection aux quatre coins",
    "Calligraphie stylisée 'حماية' (Protection) en arabe",
    "Texte 🛡️ AL-AMAN TAKAFUL™ avec symbole bouclier"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
            🛡️ Al-Aman Takaful™ - Logo Redessiné
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Logo d'assurance islamique redessiné selon les principes de conformité Sharia - 
            Intégration de symboles islamiques authentiques et éléments de protection
          </p>
          <Badge variant="outline" className="bg-emerald-100 text-emerald-700 border-emerald-300">
            ✅ 100% Conforme aux Valeurs Islamiques
          </Badge>
        </div>

        {/* Comparaison Avant/Après */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Ancien Logo (Non-Conforme) */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader className="text-center">
              <CardTitle className="text-red-700 flex items-center justify-center gap-2">
                <XCircle className="w-6 h-6" />
                Ancien Logo (Non-Conforme)
              </CardTitle>
              <CardDescription>
                Logo précédent avec éléments remplacés par des symboles islamiques
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="bg-white p-6 rounded-lg border-2 border-red-200">
                <div className="text-6xl mb-4">❌</div>
                <p className="text-red-600 font-semibold">Croix médicale présente</p>
                <p className="text-sm text-red-500">Symbole remplacé par des alternatives conformes</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-red-700">Améliorations apportées :</h4>
                <ul className="text-sm text-red-600 space-y-1 text-left">
                  <li>• Nouveau design plus adapté</li>
                  <li>• Symboles islamiques intégrés</li>
                  <li>• Identité Takaful renforcée</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Nouveau Logo (Conforme) */}
          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader className="text-center">
              <CardTitle className="text-emerald-700 flex items-center justify-center gap-2">
                <CheckCircle className="w-6 h-6" />
                Nouveau Logo (Conforme)
              </CardTitle>
              <CardDescription>
                Logo redessiné avec symboles islamiques authentiques
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="bg-white p-6 rounded-lg border-2 border-emerald-200">
                <LogosCED variant="takaful" size="lg" className="mx-auto" />
                <p className="text-emerald-600 font-semibold mt-4">Symboles islamiques intégrés</p>
                <p className="text-sm text-emerald-500">100% conforme Sharia</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-emerald-700">Améliorations apportées :</h4>
                <ul className="text-sm text-emerald-600 space-y-1 text-left">
                  {elementsLogo.map((element, index) => (
                    <li key={index}>• {element}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Symboles Conformes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">✅ Symboles Conformes pour Assurance Islamique</CardTitle>
            <CardDescription className="text-center">
              Alternatives recommandées selon les principes islamiques
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {conformeSymboles.map((symbole, index) => (
                <div key={index} className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                  <div className="text-center space-y-2">
                    {symbole.icon ? (
                      <symbole.icon className="w-8 h-8 mx-auto text-emerald-600" />
                    ) : (
                      <div className="text-3xl">{symbole.nom}</div>
                    )}
                    <h4 className="font-semibold text-emerald-700">
                      {symbole.icon ? symbole.nom : symbole.signification}
                    </h4>
                    <p className="text-sm text-emerald-600">
                      {symbole.signification || symbole.description}
                    </p>
                    <Badge className="bg-emerald-100 text-emerald-700">
                      ✅ Conforme
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alternatives Recommandées */}
        <Card>
          <CardHeader>
            <CardTitle>🎨 Alternatives Spécifiquement Recommandées</CardTitle>
            <CardDescription>
              Symboles de remplacement pour la croix dans le contexte Takaful
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {alternatives.map((alternative, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg border border-teal-200">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-teal-700">{alternative}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Validation Religieuse */}
        <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
          <CardHeader>
            <CardTitle className="text-center text-emerald-700">
              🕌 Validation Religieuse Complète
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Star className="w-8 h-8 mx-auto text-yellow-500" />
                <h4 className="font-semibold">Conformité Sharia</h4>
                <p className="text-sm text-gray-600">Respect des principes islamiques authentiques</p>
              </div>
              <div className="space-y-2">
                <Zap className="w-8 h-8 mx-auto text-emerald-500" />
                <h4 className="font-semibold">Innovation Respectueuse</h4>
                <p className="text-sm text-gray-600">Design moderne préservant identité islamique</p>
              </div>
              <div className="space-y-2">
                <Shield className="w-8 h-8 mx-auto text-blue-500" />
                <h4 className="font-semibold">Protection Authentique</h4>
                <p className="text-sm text-gray-600">Symboles de protection selon tradition islamique</p>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="bg-white p-6 rounded-lg border border-emerald-200">
              <h3 className="text-lg font-semibold text-emerald-700 mb-4">
                🎯 Mission Al-Aman Takaful™
              </h3>
              <p className="text-gray-700 leading-relaxed">
                "Offrir une protection financière authentiquement islamique à travers des produits Takaful 
                conformes aux principes de Sharia, en utilisant une identité visuelle respectueuse 
                des valeurs et sensibilités de la communauté musulmane mondiale."
              </p>
              <div className="mt-4">
                <Badge className="bg-emerald-100 text-emerald-700">
                  حماية إسلامية أصيلة - Protection Islamique Authentique
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer de Protection */}
        <ProtectionFooter />
      </div>
    </div>
  );
}