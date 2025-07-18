import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Users, DollarSign, Target, TrendingUp, CheckCircle, AlertTriangle } from "lucide-react";

export default function PlanActionStrategique() {
  const criticalActions = [
    {
      phase: "Phase 1 - Urgence (7 jours)",
      priority: "CRITIQUE",
      color: "red",
      actions: [
        {
          title: "Finaliser Déploiement Production",
          description: "Vercel Pro + domaine custom + SSL",
          responsible: "Malik + 1 freelance",
          deadline: "J+2",
          budget: "500 CHF",
          impact: "Crédibilité technique immédiate"
        },
        {
          title: "Documentation API Complète",
          description: "OpenAPI + exemples + SDK basic",
          responsible: "Équipe technique",
          deadline: "J+5",
          budget: "300 CHF",
          impact: "Adoption développeurs externes"
        },
        {
          title: "Setup Monitoring 24/7",
          description: "Uptime Robot + alertes + analytics",
          responsible: "DevOps",
          deadline: "J+3",
          budget: "200 CHF",
          impact: "Fiabilité opérationnelle"
        }
      ]
    },
    {
      phase: "Phase 2 - Business Foundation (14 jours)",
      priority: "URGENT",
      color: "orange",
      actions: [
        {
          title: "Enregistrement Entreprise Suisse",
          description: "SA Genève + banque professionnelle",
          responsible: "Yakoubi + expert comptable",
          deadline: "J+10",
          budget: "3,000 CHF",
          impact: "Base légale opérationnelle"
        },
        {
          title: "Programme Early Adopters",
          description: "20 clients beta payants (50 CHF/mois)",
          responsible: "Équipe commerciale",
          deadline: "J+14",
          budget: "1,000 CHF marketing",
          impact: "Premiers revenus + validation"
        },
        {
          title: "Contact Experts Réglementaires",
          description: "3 cabinets fintech + 1 avocat FINMA",
          responsible: "Direction",
          deadline: "J+7",
          budget: "2,000 CHF consultation",
          impact: "Roadmap conformité claire"
        }
      ]
    },
    {
      phase: "Phase 3 - Scale Preparation (30 jours)",
      priority: "IMPORTANT",
      color: "blue",
      actions: [
        {
          title: "Recrutement Équipe Technique",
          description: "2 développeurs seniors + 1 DevOps",
          responsible: "RH + Direction",
          deadline: "J+30",
          budget: "25,000 CHF/mois",
          impact: "Capacité développement x3"
        },
        {
          title: "Pitch Deck Investisseurs",
          description: "Deck professionnel + business plan",
          responsible: "Direction + consultant",
          deadline: "J+21",
          budget: "5,000 CHF",
          impact: "Préparation levée de fonds"
        },
        {
          title: "Demande Licence FinTech",
          description: "Dossier FINMA complet",
          responsible: "Équipe juridique",
          deadline: "J+30",
          budget: "15,000 CHF",
          impact: "Autorisation bancaire légale"
        }
      ]
    }
  ];

  const quickWinsToday = [
    {
      action: "Vérifier status déploiement Vercel",
      time: "30 min",
      priority: "URGENT",
      owner: "Malik"
    },
    {
      action: "Créer compte Stripe pour paiements",
      time: "45 min",
      priority: "URGENT", 
      owner: "Yakoubi"
    },
    {
      action: "Lister 10 prospects early adopters",
      time: "60 min",
      priority: "IMPORTANT",
      owner: "Commercial"
    },
    {
      action: "Rechercher 3 cabinets juridiques fintech",
      time: "90 min",
      priority: "IMPORTANT",
      owner: "Direction"
    }
  ];

  const weeklyMilestones = [
    {
      week: "Semaine 1",
      milestone: "Infrastructure Production",
      deliverables: [
        "Site accessible 24/7 avec monitoring",
        "Documentation API v1.0 publiée",
        "Premier contact prospects identifiés",
        "Experts juridiques contactés"
      ],
      success: "Crédibilité technique établie"
    },
    {
      week: "Semaine 2", 
      milestone: "Foundation Légale",
      deliverables: [
        "Entreprise suisse enregistrée",
        "Compte bancaire professionnel ouvert",
        "Stripe configuré et testé",
        "5 premiers prospects qualifiés"
      ],
      success: "Structure business opérationnelle"
    },
    {
      week: "Semaine 3",
      milestone: "Premiers Clients",
      deliverables: [
        "10 clients beta signés et payants",
        "Feedback produit collecté et analysé",
        "Métriques engagement trackées",
        "Roadmap produit affinée"
      ],
      success: "Product-market fit démontré"
    },
    {
      week: "Semaine 4",
      milestone: "Préparation Scale",
      deliverables: [
        "Processus recrutement défini",
        "Pitch deck investisseurs finalisé",
        "Demande licence FinTech préparée",
        "Partenariats stratégiques identifiés"
      ],
      success: "Prêt pour scaling et levée"
    }
  ];

  const budgetBreakdown = [
    {
      category: "Infrastructure & Tech",
      week1: "500 CHF",
      week2: "300 CHF", 
      week3: "200 CHF",
      week4: "500 CHF",
      total: "1,500 CHF",
      description: "Hosting, monitoring, développement"
    },
    {
      category: "Juridique & Conformité",
      week1: "500 CHF",
      week2: "3,000 CHF",
      week3: "1,000 CHF", 
      week4: "15,000 CHF",
      total: "19,500 CHF",
      description: "Enregistrement, conseils, licences"
    },
    {
      category: "Marketing & Commercial",
      week1: "200 CHF",
      week2: "1,000 CHF",
      week3: "1,500 CHF",
      week4: "2,000 CHF",
      total: "4,700 CHF",
      description: "Prospects, contenu, outils"
    },
    {
      category: "Ressources Humaines",
      week1: "0 CHF",
      week2: "2,000 CHF",
      week3: "3,000 CHF",
      week4: "5,000 CHF",
      total: "10,000 CHF",
      description: "Recrutement, consultants"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            🎯 Plan d'Action Stratégique CED HalalTech™
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Feuille de route concrete pour opérationnaliser l'écosystème en 30 jours
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Badge variant="outline" className="bg-purple-100 text-purple-800">Plan 30 Jours</Badge>
            <Badge variant="outline" className="bg-indigo-100 text-indigo-800">Actions Concrètes</Badge>
            <Badge variant="outline" className="bg-green-100 text-green-800">Results-Driven</Badge>
          </div>
        </div>

        <Tabs defaultValue="actions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="actions">Actions Critiques</TabsTrigger>
            <TabsTrigger value="today">Aujourd'hui</TabsTrigger>
            <TabsTrigger value="milestones">Jalons Hebdo</TabsTrigger>
            <TabsTrigger value="budget">Budget Détaillé</TabsTrigger>
          </TabsList>

          <TabsContent value="actions" className="space-y-6">
            <div className="space-y-8">
              {criticalActions.map((phase, idx) => (
                <Card key={idx} className="shadow-lg">
                  <CardHeader className={`bg-gradient-to-r ${
                    phase.color === 'red' ? 'from-red-500 to-red-600' :
                    phase.color === 'orange' ? 'from-orange-500 to-orange-600' :
                    'from-blue-500 to-blue-600'
                  } text-white`}>
                    <CardTitle className="flex items-center justify-between">
                      <span>{phase.phase}</span>
                      <Badge variant="secondary" className="bg-white/20 text-white">
                        {phase.priority}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Responsable</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Délai</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Budget</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Impact</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {phase.actions.map((action, aIdx) => (
                            <tr key={aIdx} className="hover:bg-gray-50">
                              <td className="px-6 py-4">
                                <div className="font-medium text-gray-900">{action.title}</div>
                                <div className="text-sm text-gray-500">{action.description}</div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                  <Users className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm">{action.responsible}</span>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-orange-500" />
                                  <span className="text-sm font-medium">{action.deadline}</span>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                  <DollarSign className="h-4 w-4 text-green-500" />
                                  <span className="text-sm font-bold">{action.budget}</span>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="text-sm text-gray-600">{action.impact}</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="today" className="space-y-6">
            <Card className="shadow-lg border-l-4 border-red-500">
              <CardHeader className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Actions Immédiates - À Faire Aujourd'hui
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {quickWinsToday.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{item.action}</h4>
                          <Badge 
                            variant={item.priority === "URGENT" ? "destructive" : "default"}
                            className="text-xs"
                          >
                            {item.priority}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {item.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {item.owner}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="milestones" className="space-y-6">
            <div className="grid gap-6">
              {weeklyMilestones.map((week, idx) => (
                <Card key={idx} className="shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      {week.week} - {week.milestone}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Livrables Attendus:</h4>
                        <div className="space-y-2">
                          {week.deliverables.map((deliverable, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-sm">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="font-semibold text-green-800 mb-2">Critère de Succès</div>
                        <div className="text-sm text-green-700">{week.success}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="budget" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Répartition Budgétaire Détaillée (30 jours)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Catégorie</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Semaine 1</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Semaine 2</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Semaine 3</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Semaine 4</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {budgetBreakdown.map((item, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="font-medium text-gray-900">{item.category}</div>
                            <div className="text-sm text-gray-500">{item.description}</div>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium">{item.week1}</td>
                          <td className="px-6 py-4 text-sm font-medium">{item.week2}</td>
                          <td className="px-6 py-4 text-sm font-medium">{item.week3}</td>
                          <td className="px-6 py-4 text-sm font-medium">{item.week4}</td>
                          <td className="px-6 py-4 text-lg font-bold text-green-600">{item.total}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-gray-100">
                      <tr>
                        <td className="px-6 py-4 font-bold">TOTAL GÉNÉRAL</td>
                        <td className="px-6 py-4 font-bold">1,200 CHF</td>
                        <td className="px-6 py-4 font-bold">6,300 CHF</td>
                        <td className="px-6 py-4 font-bold">5,700 CHF</td>
                        <td className="px-6 py-4 font-bold">22,500 CHF</td>
                        <td className="px-6 py-4 text-xl font-bold text-green-700">35,700 CHF</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* ROI Projection */}
            <Card className="shadow-lg border-l-4 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <TrendingUp className="h-5 w-5" />
                  Projection ROI - Retour sur Investissement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">35.7K CHF</div>
                    <div className="text-sm text-gray-600">Investissement 30 jours</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">50K CHF</div>
                    <div className="text-sm text-gray-600">Revenus projetés mois 2</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">140%</div>
                    <div className="text-sm text-gray-600">ROI attendu en 60 jours</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA Final */}
        <div className="mt-8 text-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90">
            <Target className="mr-2 h-5 w-5" />
            Démarrer Exécution Plan Stratégique
          </Button>
        </div>
      </div>
    </div>
  );
}