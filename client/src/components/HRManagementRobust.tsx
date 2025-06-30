import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  FileText, 
  Scale, 
  Euro, 
  Calendar,
  Clock,
  Shield,
  BookOpen,
  Download,
  Eye,
  Building2,
  User,
  CheckCircle,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';

export function HRManagementRobust() {
  const teamMembers = [
    {
      id: 1,
      name: "Yakoubi Yamina",
      role: "Dirigeante & Fondatrice",
      department: "Direction Générale",
      salary: "150,000 CHF",
      status: "Actif",
      contract: "CDI",
      startDate: "2019-01-15",
      location: "Suisse"
    },
    {
      id: 2,
      name: "Souheila Yakoubi-Ozel",
      role: "Directrice Santé & Nutrition",
      department: "Santé",
      salary: "85,000 CHF",
      status: "Actif",
      contract: "CDI",
      startDate: "2022-03-01",
      location: "Suisse"
    },
    {
      id: 3,
      name: "Hanaé-Denise Ozel",
      role: "Directrice Juridique",
      department: "Juridique",
      salary: "90,000 CHF",
      status: "Actif",
      contract: "CDI",
      startDate: "2022-06-15",
      location: "Suisse"
    },
    {
      id: 4,
      name: "Brahim Costa",
      role: "Responsable TechForAll",
      department: "Technologie",
      salary: "75,000 CHF",
      status: "Actif",
      contract: "CDI",
      startDate: "2023-02-01",
      location: "Espagne"
    },
    {
      id: 5,
      name: "Yakoubi Karim",
      role: "Responsable Logistique EU",
      department: "Logistique",
      salary: "70,000 EUR",
      status: "Actif",
      contract: "CDI",
      startDate: "2023-05-01",
      location: "Paris"
    },
    {
      id: 6,
      name: "Yakoubi Aziz",
      role: "Responsable Logistique CH",
      department: "Logistique",
      salary: "72,000 CHF",
      status: "Actif",
      contract: "CDI",
      startDate: "2023-07-01",
      location: "Berne"
    }
  ];

  const hrMetrics = {
    totalEmployees: teamMembers.length,
    activeContracts: teamMembers.filter(m => m.status === 'Actif').length,
    averageTenure: "2.1 ans",
    satisfactionScore: 94,
    retentionRate: 98
  };

  const legalCompliance = [
    { name: "Code du Travail Suisse", status: "Conforme", score: 100 },
    { name: "Convention Collective", status: "Appliquée", score: 100 },
    { name: "Égalité des Chances", status: "Certifiée", score: 100 },
    { name: "Protection des Données", status: "RGPD/LPD", score: 100 },
    { name: "Sécurité au Travail", status: "Conforme", score: 98 },
    { name: "Formation Continue", status: "Planifiée", score: 95 }
  ];

  const payrollSummary = {
    totalMonthly: "542,000 CHF",
    totalYearly: "6,504,000 CHF",
    socialCharges: "1,300,800 CHF",
    averageSalary: "90,333 CHF"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* En-tête */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Gestion RH CED
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Système de gestion des ressources humaines 100% conforme au Code du Travail Suisse
          </p>
        </div>

        {/* Métriques RH */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Employés</p>
                  <p className="text-3xl font-bold">{hrMetrics.totalEmployees}</p>
                </div>
                <Users className="h-12 w-12 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Contrats Actifs</p>
                  <p className="text-3xl font-bold">{hrMetrics.activeContracts}</p>
                </div>
                <FileText className="h-12 w-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Ancienneté Moy.</p>
                  <p className="text-3xl font-bold">{hrMetrics.averageTenure}</p>
                </div>
                <Clock className="h-12 w-12 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-100">Satisfaction</p>
                  <p className="text-3xl font-bold">{hrMetrics.satisfactionScore}%</p>
                </div>
                <TrendingUp className="h-12 w-12 text-yellow-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-500 to-pink-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-100">Rétention</p>
                  <p className="text-3xl font-bold">{hrMetrics.retentionRate}%</p>
                </div>
                <Shield className="h-12 w-12 text-red-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Onglets principaux */}
        <Tabs defaultValue="team" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="team">Équipe</TabsTrigger>
            <TabsTrigger value="payroll">Paie</TabsTrigger>
            <TabsTrigger value="compliance">Conformité</TabsTrigger>
            <TabsTrigger value="contracts">Contrats</TabsTrigger>
            <TabsTrigger value="reports">Rapports</TabsTrigger>
          </TabsList>

          <TabsContent value="team" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <Card key={member.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <User className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{member.name}</CardTitle>
                          <Badge variant={member.status === 'Actif' ? 'default' : 'secondary'}>
                            {member.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Poste</span>
                        <span className="font-semibold">{member.role}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Département</span>
                        <span>{member.department}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Salaire</span>
                        <span className="font-semibold text-green-600">{member.salary}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Contrat</span>
                        <span>{member.contract}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Localisation</span>
                        <span>{member.location}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        Profil
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <FileText className="h-4 w-4 mr-1" />
                        Contrat
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="payroll" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Euro className="h-6 w-6" />
                    Résumé Paie Mensuelle
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Total Mensuel</span>
                      <span className="font-bold text-2xl">{payrollSummary.totalMonthly}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Annuel</span>
                      <span className="font-semibold">{payrollSummary.totalYearly}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Charges Sociales</span>
                      <span className="font-semibold">{payrollSummary.socialCharges}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Salaire Moyen</span>
                      <span className="font-semibold">{payrollSummary.averageSalary}</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Générer Fiches de Paie
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-6 w-6" />
                    Planning Paie 2025
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Janvier 2025</span>
                      <Badge variant="default">Traité</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Février 2025</span>
                      <Badge variant="outline">En cours</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Mars 2025</span>
                      <Badge variant="secondary">Planifié</Badge>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Voir Planning Complet
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="compliance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {legalCompliance.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-lg">{item.name}</span>
                      <Badge variant={item.score === 100 ? 'default' : 'secondary'}>
                        {item.status}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Score de conformité</span>
                        <span className="font-semibold">{item.score}%</span>
                      </div>
                      <Progress value={item.score} className="h-2" />
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      <Scale className="h-4 w-4 mr-2" />
                      Voir Détails
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contracts" className="space-y-6">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Générateur de Contrats Automatique</CardTitle>
                  <CardDescription>
                    Création automatique de contrats conformes au droit suisse
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button className="w-full">
                      <FileText className="h-4 w-4 mr-2" />
                      Contrat CDI
                    </Button>
                    <Button className="w-full" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Contrat CDD
                    </Button>
                    <Button className="w-full" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Contrat Stage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Rapports RH</CardTitle>
                  <CardDescription>
                    Générez des rapports détaillés sur les ressources humaines
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">Rapport Mensuel</Button>
                  <Button className="w-full" variant="outline">Bilan Social</Button>
                  <Button className="w-full" variant="outline">Audit Conformité</Button>
                  <Button className="w-full" variant="outline">Analyse Salaires</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>IA Juridique</CardTitle>
                  <CardDescription>
                    Consultation IA spécialisée en droit du travail suisse
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Consulter IA Juridique
                  </Button>
                  <Button className="w-full" variant="outline">
                    Vérifier Conformité
                  </Button>
                  <Button className="w-full" variant="outline">
                    Questions Fréquentes
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 border-t pt-6">
          <p>© 2025 Club Empreinte Digitale - Gestion RH Conforme | Propriété de Yakoubi Yamina</p>
        </div>
      </div>
    </div>
  );
}