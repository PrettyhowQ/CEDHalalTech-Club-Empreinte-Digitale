import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  Calendar, 
  DollarSign, 
  FileText, 
  Clock, 
  CheckCircle,
  AlertCircle,
  TrendingUp,
  UserCheck,
  Building,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Award
} from 'lucide-react';

export function HRManagementRobust() {
  const teamMembers = [
    {
      id: 1,
      name: "Yakoubi Yamina",
      role: "Directrice Générale",
      department: "Direction",
      status: "active",
      salary: "CHF 120,000",
      contract: "CDI",
      startDate: "2024-01-01",
      email: "yamina@club-empreinte-digitale.ch",
      phone: "+41 78 123 45 67",
      location: "Suisse",
      responsibilities: "Direction stratégique, supervision générale, décisions finales"
    },
    {
      id: 2,
      name: "Souheila Yakoubi-Ozel",
      role: "Responsable Santé",
      department: "Santé",
      status: "active",
      salary: "CHF 85,000",
      contract: "CDI",
      startDate: "2024-02-01",
      email: "souheila@club-empreinte-digitale.ch",
      phone: "+41 78 234 56 78",
      location: "Suisse",
      responsibilities: "Gestion secteur santé, co-direction, développement médical"
    },
    {
      id: 3,
      name: "Hanaé-Denise Ozel",
      role: "Responsable Juridique",
      department: "Juridique",
      status: "active",
      salary: "CHF 75,000",
      contract: "CDI",
      startDate: "2024-02-15",
      email: "hanae@club-empreinte-digitale.ch",
      phone: "+41 78 345 67 89",
      location: "Suisse",
      responsibilities: "Affaires juridiques, fiches de paie, conformité légale"
    },
    {
      id: 4,
      name: "Brahim Techforall",
      role: "Gestionnaire Opérationnel",
      department: "TechForAll",
      status: "active",
      salary: "CHF 65,000",
      contract: "CDI",
      startDate: "2024-03-01",
      email: "brahim@club-empreinte-digitale.ch",
      phone: "+41 78 456 78 90",
      location: "Costa del Sol",
      responsibilities: "Gestion TechForAll, boutique solidaire, supervision Yakoubi Yamina"
    },
    {
      id: 5,
      name: "Yakoubi Karim",
      role: "Logistique Europe",
      department: "Logistique",
      status: "active",
      salary: "CHF 55,000",
      contract: "CDI",
      startDate: "2024-03-15",
      email: "karim@club-empreinte-digitale.ch",
      phone: "+33 6 12 34 56 78",
      location: "Paris, France",
      responsibilities: "Logistique européenne, gestion entrepôts Paris"
    },
    {
      id: 6,
      name: "Yakoubi Aziz",
      role: "Logistique Suisse",
      department: "Logistique",
      status: "active",
      salary: "CHF 60,000",
      contract: "CDI",
      startDate: "2024-04-01",
      email: "aziz@club-empreinte-digitale.ch",
      phone: "+41 78 567 89 01",
      location: "Berne, Suisse",
      responsibilities: "Logistique Suisse, gestion entrepôts Berne"
    }
  ];

  const totalMonthlyPayroll = teamMembers.reduce((total, member) => {
    const salary = parseInt(member.salary.replace(/[^\d]/g, ''));
    return total + (salary / 12);
  }, 0);

  const departmentStats = teamMembers.reduce((acc, member) => {
    acc[member.department] = (acc[member.department] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const contractStats = teamMembers.reduce((acc, member) => {
    acc[member.contract] = (acc[member.contract] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            🏢 Gestion des Ressources Humaines
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Club Empreinte Digitale - Équipe Complète
          </p>
        </div>

        {/* Statistiques générales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Employés</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teamMembers.length}</div>
              <p className="text-xs text-muted-foreground">
                Équipe complète active
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Masse Salariale</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">CHF {Math.round(totalMonthlyPayroll / 1000)}K</div>
              <p className="text-xs text-muted-foreground">
                Par mois (total annuel: CHF {Math.round(totalMonthlyPayroll * 12 / 1000)}K)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Départements</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Object.keys(departmentStats).length}</div>
              <p className="text-xs text-muted-foreground">
                Secteurs d'activité
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Contrats CDI</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{contractStats.CDI || 0}</div>
              <p className="text-xs text-muted-foreground">
                100% en contrat permanent
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Onglets principaux */}
        <Tabs defaultValue="equipe" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="equipe">Équipe</TabsTrigger>
            <TabsTrigger value="salaires">Salaires</TabsTrigger>
            <TabsTrigger value="departements">Départements</TabsTrigger>
            <TabsTrigger value="contrats">Contrats</TabsTrigger>
          </TabsList>

          <TabsContent value="equipe" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member) => (
                <Card key={member.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <CardDescription className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {member.role}
                        </CardDescription>
                      </div>
                      <Badge variant={member.status === 'active' ? 'default' : 'secondary'}>
                        {member.status === 'active' ? 'Actif' : 'Inactif'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-gray-500" />
                        <span>{member.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-gray-500" />
                        <span>{member.salary}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-gray-500" />
                        <span>{member.contract}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span>{new Date(member.startDate).toLocaleDateString('fr-FR')}</span>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <span className="text-blue-600 dark:text-blue-400">{member.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span>{member.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span>{member.location}</span>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <p className="text-sm font-medium mb-1">Responsabilités:</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                        {member.responsibilities}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="salaires" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Répartition Salariale</CardTitle>
                <CardDescription>Détail des salaires par employé</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{member.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600 dark:text-green-400">{member.salary}</p>
                        <p className="text-xs text-gray-500">annuel</p>
                      </div>
                    </div>
                  ))}
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div>
                      <p className="font-bold text-lg">Total Masse Salariale</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Coût total annuel</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-green-600 dark:text-green-400">
                        CHF {Math.round(totalMonthlyPayroll * 12 / 1000)}K
                      </p>
                      <p className="text-sm text-gray-500">
                        CHF {Math.round(totalMonthlyPayroll / 1000)}K/mois
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="departements" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(departmentStats).map(([dept, count]) => (
                <Card key={dept}>
                  <CardHeader>
                    <CardTitle className="text-lg">{dept}</CardTitle>
                    <CardDescription>{count} employé{count > 1 ? 's' : ''}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {teamMembers
                        .filter(member => member.department === dept)
                        .map(member => (
                          <div key={member.id} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <UserCheck className="h-4 w-4 text-green-500" />
                            <div className="flex-1">
                              <p className="font-medium text-sm">{member.name}</p>
                              <p className="text-xs text-gray-600 dark:text-gray-300">{member.role}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contrats" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Contrats</CardTitle>
                <CardDescription>Statut et détails contractuels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{member.role}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="default" className="mb-1">
                          {member.contract}
                        </Badge>
                        <p className="text-xs text-gray-500">
                          Depuis le {new Date(member.startDate).toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer de protection */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>© 2024 Club Empreinte Digitale - Yakoubi Yamina</p>
            <p>Système RH sécurisé - Conforme RGPD et droit du travail suisse</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HRManagementRobust;