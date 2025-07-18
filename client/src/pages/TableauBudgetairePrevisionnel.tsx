import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calculator, Euro, CheckCircle, AlertTriangle, Clock } from "lucide-react";

export default function TableauBudgetairePrevisionnel() {
  const budgetData = [
    {
      categorie: "Render Pro (hébergement full stack)",
      coutMensuel: 15,
      statut: "Obligatoire",
      priorite: "critique",
      remarques: "Obligatoire dès la mise en ligne"
    },
    {
      categorie: "GitHub Pro (code privé + visibilité pro)",
      coutMensuel: 4,
      statut: "Recommandé",
      priorite: "importante",
      remarques: "Recommandé pour les repos pro privés"
    },
    {
      categorie: "Figma Pro (design & prototypage)",
      coutMensuel: 12,
      statut: "Utile",
      priorite: "normale",
      remarques: "Utile pour les maquettes officielles"
    },
    {
      categorie: "Norton 360 Pro (sécurité & backup)",
      coutMensuel: 8,
      statut: "Optionnel",
      priorite: "normale",
      remarques: "Optionnel mais conseillé"
    },
    {
      categorie: "Adresse Genève (Regus ou équivalent)",
      coutMensuel: 50,
      statut: "Prioritaire",
      priorite: "critique",
      remarques: "Prioritaire pour crédibilité suisse"
    },
    {
      categorie: "Adresse Europe (auto-entrepreneur/asso)",
      coutMensuel: 10,
      statut: "Reportable",
      priorite: "basse",
      remarques: "Peut être reporté si budget limité"
    },
    {
      categorie: "Adresse Dubaï (bureau virtuel)",
      coutMensuel: 45,
      statut: "Futur",
      priorite: "basse",
      remarques: "À prévoir après financement ou pitch Dubaï"
    },
    {
      categorie: "Nom de domaine (ex: ced-halaltech.org)",
      coutMensuel: 1,
      statut: "Obligatoire",
      priorite: "critique",
      remarques: "Coût annuel (~12 €/an)"
    },
    {
      categorie: "Email professionnel suisse (Infomaniak)",
      coutMensuel: 4,
      statut: "Recommandé",
      priorite: "importante",
      remarques: "Via Infomaniak ou hébergeur suisse RGPD"
    }
  ];

  const getStatusBadge = (statut: string) => {
    switch (statut) {
      case "Obligatoire":
      case "Prioritaire":
        return <Badge className="bg-red-100 text-red-800">{statut}</Badge>;
      case "Recommandé":
        return <Badge className="bg-orange-100 text-orange-800">{statut}</Badge>;
      case "Utile":
        return <Badge className="bg-blue-100 text-blue-800">{statut}</Badge>;
      case "Optionnel":
        return <Badge className="bg-gray-100 text-gray-800">{statut}</Badge>;
      case "Reportable":
      case "Futur":
        return <Badge className="bg-yellow-100 text-yellow-800">{statut}</Badge>;
      default:
        return <Badge variant="outline">{statut}</Badge>;
    }
  };

  const getPrioriteIcon = (priorite: string) => {
    switch (priorite) {
      case "critique":
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case "importante":
        return <CheckCircle className="h-4 w-4 text-orange-500" />;
      case "normale":
        return <Clock className="h-4 w-4 text-blue-500" />;
      case "basse":
        return <Clock className="h-4 w-4 text-gray-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const totalCritique = budgetData
    .filter(item => item.priorite === "critique")
    .reduce((sum, item) => sum + item.coutMensuel, 0);

  const totalImportant = budgetData
    .filter(item => item.priorite === "importante")
    .reduce((sum, item) => sum + item.coutMensuel, 0);

  const totalComplet = budgetData.reduce((sum, item) => sum + item.coutMensuel, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            💰 Tableau Budgétaire Prévisionnel CED HalalTech™
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Analyse détaillée des coûts d'infrastructure pour opérationnalisation complète
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Badge variant="outline" className="bg-green-100 text-green-800">Budget Optimisé</Badge>
            <Badge variant="outline" className="bg-blue-100 text-blue-800">Infrastructure Pro</Badge>
            <Badge variant="outline" className="bg-purple-100 text-purple-800">Scalable</Badge>
          </div>
        </div>

        {/* Résumé Budget */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-lg border-l-4 border-red-500">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                Budget Critique
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">{totalCritique}€/mois</div>
              <p className="text-sm text-gray-600 mt-2">Éléments obligatoires immédiatement</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-l-4 border-orange-500">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                Budget Recommandé
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">{totalCritique + totalImportant}€/mois</div>
              <p className="text-sm text-gray-600 mt-2">Critique + Important pour démarrage professionnel</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-l-4 border-blue-500">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calculator className="h-5 w-5 text-blue-500" />
                Budget Complet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{totalComplet}€/mois</div>
              <p className="text-sm text-gray-600 mt-2">Configuration complète toutes options</p>
            </CardContent>
          </Card>
        </div>

        {/* Tableau Détaillé */}
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Euro className="h-5 w-5 text-green-500" />
              Détail des Coûts par Catégorie
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Catégorie
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Coût mensuel
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Statut
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Priorité
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Remarques
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {budgetData.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {item.categorie}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-green-600">
                          {item.coutMensuel}€
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(item.statut)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          {getPrioriteIcon(item.priorite)}
                          <span className="text-sm capitalize">{item.priorite}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600 max-w-xs">
                          {item.remarques}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Recommandations */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
              <CardTitle>🎯 Stratégie de Déploiement Recommandée</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</div>
                  <div>
                    <div className="font-semibold">Phase Immédiate (70€/mois)</div>
                    <div className="text-sm text-gray-600">Render Pro + Adresse Genève + Domaine + Email</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</div>
                  <div>
                    <div className="font-semibold">Phase Développement (78€/mois)</div>
                    <div className="text-sm text-gray-600">+ GitHub Pro pour visibilité professionnelle</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</div>
                  <div>
                    <div className="font-semibold">Phase Expansion (149€/mois)</div>
                    <div className="text-sm text-gray-600">+ Figma Pro + Norton + Adresses Europe/Dubaï</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <CardTitle>💡 Optimisations Budgétaires</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="font-semibold text-green-800">Économie Annuelle</div>
                  <div className="text-sm text-green-600">Domaine payé annuellement: -12€ vs mensuel</div>
                </div>
                
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="font-semibold text-blue-800">Alternative Gratuite</div>
                  <div className="text-sm text-blue-600">GitHub gratuit possible en phase prototype</div>
                </div>
                
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="font-semibold text-purple-800">Subventions Disponibles</div>
                  <div className="text-sm text-purple-600">Innosuisse: 130K CHF couvrent 18 mois complets</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 text-white hover:opacity-90">
            <Calculator className="mr-2 h-5 w-5" />
            Valider Budget & Commencer Déploiement
          </Button>
        </div>
      </div>
    </div>
  );
}