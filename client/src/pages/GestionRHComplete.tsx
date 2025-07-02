import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  Calculator, 
  FileText, 
  Clock, 
  Heart, 
  Shield, 
  Star,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Award,
  TrendingUp,
  Settings,
  CheckCircle
} from 'lucide-react';

interface Employee {
  id: string;
  nom: string;
  prenom: string;
  poste: string;
  departement: string;
  salaireBrut: number;
  salaireNet: number;
  statut: 'permanent' | 'essai' | 'consultant';
  dateEmbauche: string;
  localisation: string;
  email: string;
  telephone: string;
  competences: string[];
  performance: number;
  formationsFiqh: string[];
  certifications: string[];
}

export default function GestionRHComplete() {
  const [selectedEmployee, setSelectedEmployee] = useState<string>('');
  const [activeTab, setActiveTab] = useState('overview');

  const employees: Employee[] = [
    {
      id: 'yamina-yakoubi',
      nom: 'Yakoubi',
      prenom: 'Yamina',
      poste: 'Directrice Générale',
      departement: 'Direction',
      salaireBrut: 180000,
      salaireNet: 142800,
      statut: 'permanent',
      dateEmbauche: '2024-01-01',
      localisation: 'Genève, Suisse',
      email: 'yamina@ced-bank.ch',
      telephone: '+41 79 XXX XX XX',
      competences: ['Leadership', 'Fiqh Informatique', 'Banking Halal', 'Stratégie'],
      performance: 100,
      formationsFiqh: ['Fiqh Banking Master', 'Leadership Islamique', 'Gouvernance Sharia'],
      certifications: ['AAOIFI Certified', 'IFSB Compliance', 'Halal Finance Expert']
    },
    {
      id: 'souheila-yakoubi-ozel',
      nom: 'Yakoubi-Ozel',
      prenom: 'Souheila',
      poste: 'Responsable Santé & Héritière',
      departement: 'Santé',
      salaireBrut: 95000,
      salaireNet: 78500,
      statut: 'permanent',
      dateEmbauche: '2024-03-15',
      localisation: 'Lausanne, Suisse',
      email: 'souheila@ced-sante.ch',
      telephone: '+41 78 XXX XX XX',
      competences: ['Télémédecine Halal', 'Médecine Prophétique', 'Gestion Équipe'],
      performance: 98,
      formationsFiqh: ['Médecine Islamique', 'Fiqh Médical', 'Bioéthique Islamique'],
      certifications: ['Medical Islamic Ethics', 'Halal Healthcare', 'Sharia Medicine']
    },
    {
      id: 'hanae-denise-ozel',
      nom: 'Ozel',
      prenom: 'Hanaé-Denise',
      poste: 'Responsable Juridique & Héritière',
      departement: 'Juridique',
      salaireBrut: 92000,
      salaireNet: 76140,
      statut: 'permanent',
      dateEmbauche: '2024-03-15',
      localisation: 'Berne, Suisse',
      email: 'hanae@ced-legal.ch',
      telephone: '+41 77 XXX XX XX',
      competences: ['Droit Islamique', 'Contrats Halal', 'Fiches Paie', 'Compliance'],
      performance: 97,
      formationsFiqh: ['Fiqh Muamalat', 'Droit Islamique Moderne', 'Contrats Conformes'],
      certifications: ['Islamic Law Specialist', 'Sharia Compliance', 'Halal Contracts']
    },
    {
      id: 'brahim-manager',
      nom: 'Manager',
      prenom: 'Brahim',
      poste: 'Responsable TechForAll',
      departement: 'Logistique',
      salaireBrut: 75000,
      salaireNet: 62250,
      statut: 'permanent',
      dateEmbauche: '2024-06-01',
      localisation: 'Costa del Sol, Espagne',
      email: 'brahim@techforall.ch',
      telephone: '+34 6XX XXX XXX',
      competences: ['Économie Circulaire', 'Gestion Boutique', 'Donations Tech'],
      performance: 94,
      formationsFiqh: ['Commerce Islamique', 'Économie Halal', 'Gestion Équitable'],
      certifications: ['Halal Commerce', 'Circular Economy', 'Tech Donations']
    },
    {
      id: 'yakoubi-karim',
      nom: 'Yakoubi',
      prenom: 'Karim',
      poste: 'Logistique Europe',
      departement: 'Logistique',
      salaireBrut: 68000,
      salaireNet: 56440,
      statut: 'permanent',
      dateEmbauche: '2024-04-10',
      localisation: 'Paris, France',
      email: 'karim@ced-logistics.fr',
      telephone: '+33 6 XX XX XX XX',
      competences: ['Logistique Internationale', 'Supply Chain', 'Douanes'],
      performance: 92,
      formationsFiqh: ['Transport Halal', 'Commerce International', 'Logistics Ethics'],
      certifications: ['International Logistics', 'Halal Supply Chain', 'EU Customs']
    },
    {
      id: 'yakoubi-aziz',
      nom: 'Yakoubi',
      prenom: 'Aziz',
      poste: 'Logistique Suisse',
      departement: 'Logistique',
      salaireBrut: 72000,
      salaireNet: 59760,
      statut: 'permanent',
      dateEmbauche: '2024-04-10',
      localisation: 'Berne, Suisse',
      email: 'aziz@ced-logistics.ch',
      telephone: '+41 76 XXX XX XX',
      competences: ['Logistique Locale', 'Gestion Stock', 'Distribution'],
      performance: 93,
      formationsFiqh: ['Stockage Halal', 'Distribution Éthique', 'Warehouse Management'],
      certifications: ['Swiss Logistics', 'Halal Warehousing', 'Distribution Ethics']
    }
  ];

  const departements = [
    { name: 'Direction', count: 1, budget: 180000, color: 'bg-purple-100 text-purple-800' },
    { name: 'Santé', count: 1, budget: 95000, color: 'bg-rose-100 text-rose-800' },
    { name: 'Juridique', count: 1, budget: 92000, color: 'bg-amber-100 text-amber-800' },
    { name: 'Logistique', count: 3, budget: 215000, color: 'bg-blue-100 text-blue-800' }
  ];

  const totalSalaireBrut = employees.reduce((sum, emp) => sum + emp.salaireBrut, 0);
  const totalSalaireNet = employees.reduce((sum, emp) => sum + emp.salaireNet, 0);
  const averagePerformance = Math.round(employees.reduce((sum, emp) => sum + emp.performance, 0) / employees.length);

  const formatSalaire = (amount: number) => {
    return new Intl.NumberFormat('fr-CH', {
      style: 'currency',
      currency: 'CHF'
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-3">
            <Users className="h-12 w-12" />
            Gestion RH Complète CED
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            👥 Système RH 100% Conforme Code du Travail Suisse & Fiqh 👥
          </p>
          <div className="flex justify-center gap-4 text-sm mb-6">
            <Badge className="bg-green-100 text-green-800">
              ✅ {employees.length} Employés Actifs
            </Badge>
            <Badge className="bg-blue-100 text-blue-800">
              💰 {formatSalaire(totalSalaireBrut/12)}/mois
            </Badge>
            <Badge className="bg-purple-100 text-purple-800">
              🎯 {averagePerformance}% Performance Moyenne
            </Badge>
          </div>
        </div>

        {/* Vue d'ensemble */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white border-green-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-green-700 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Équipe Total
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-800">{employees.length}</div>
              <p className="text-sm text-green-600">Collaborateurs</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-blue-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-700 flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Masse Salariale
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-800">{formatSalaire(totalSalaireBrut/12)}</div>
              <p className="text-sm text-blue-600">Brut mensuel</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-purple-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-purple-700 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-800">{averagePerformance}%</div>
              <p className="text-sm text-purple-600">Moyenne équipe</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-amber-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-amber-700 flex items-center gap-2">
                <Award className="h-5 w-5" />
                Formations Fiqh
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-amber-800">100%</div>
              <p className="text-sm text-amber-600">Certifiés</p>
            </CardContent>
          </Card>
        </div>

        {/* Départements */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-slate-800 flex items-center gap-2">
              <Settings className="h-6 w-6" />
              Répartition par Départements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {departements.map((dept, index) => (
                <div key={index} className="text-center">
                  <Badge className={`${dept.color} mb-2`}>
                    {dept.name}
                  </Badge>
                  <div className="text-lg font-bold text-slate-800">{dept.count} personnes</div>
                  <div className="text-sm text-slate-600">{formatSalaire(dept.budget/12)}/mois</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Liste des Employés */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="payroll">Fiches de Paie</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="formations">Formations</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {employees.map((employee) => (
                <Card key={employee.id} className="bg-white hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg text-slate-900">
                          {employee.prenom} {employee.nom}
                        </CardTitle>
                        <p className="text-slate-600">{employee.poste}</p>
                        <Badge className={
                          employee.departement === 'Direction' ? 'bg-purple-100 text-purple-800' :
                          employee.departement === 'Santé' ? 'bg-rose-100 text-rose-800' :
                          employee.departement === 'Juridique' ? 'bg-amber-100 text-amber-800' :
                          'bg-blue-100 text-blue-800'
                        }>
                          {employee.departement}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">
                          {formatSalaire(employee.salaireBrut)}
                        </div>
                        <div className="text-xs text-slate-500">Brut annuel</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-slate-400" />
                        <span>{employee.localisation}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-slate-400" />
                        <span>{employee.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        <span>Embauché le {new Date(employee.dateEmbauche).toLocaleDateString('fr-FR')}</span>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-700 text-sm mb-2">Compétences:</h4>
                        <div className="flex flex-wrap gap-1">
                          {employee.competences.slice(0, 3).map((comp, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {comp}
                            </Badge>
                          ))}
                          {employee.competences.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{employee.competences.length - 3} autres
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-semibold">{employee.performance}% Performance</span>
                        </div>
                        <Badge className={
                          employee.statut === 'permanent' ? 'bg-green-100 text-green-800' :
                          employee.statut === 'essai' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }>
                          {employee.statut}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="payroll">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-6 w-6" />
                  Fiches de Paie Automatisées
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Employé</th>
                        <th className="text-right p-2">Salaire Brut</th>
                        <th className="text-right p-2">Cotisations</th>
                        <th className="text-right p-2">Salaire Net</th>
                        <th className="text-center p-2">Statut</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employees.map((employee) => {
                        const cotisations = employee.salaireBrut - employee.salaireNet;
                        return (
                          <tr key={employee.id} className="border-b hover:bg-slate-50">
                            <td className="p-2">
                              <div>
                                <div className="font-semibold">{employee.prenom} {employee.nom}</div>
                                <div className="text-slate-500 text-xs">{employee.poste}</div>
                              </div>
                            </td>
                            <td className="text-right p-2 font-semibold">
                              {formatSalaire(employee.salaireBrut)}
                            </td>
                            <td className="text-right p-2 text-red-600">
                              -{formatSalaire(cotisations)}
                            </td>
                            <td className="text-right p-2 font-bold text-green-600">
                              {formatSalaire(employee.salaireNet)}
                            </td>
                            <td className="text-center p-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mx-auto" />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr className="bg-slate-100 font-bold">
                        <td className="p-2">TOTAL MENSUEL</td>
                        <td className="text-right p-2">{formatSalaire(totalSalaireBrut/12)}</td>
                        <td className="text-right p-2 text-red-600">
                          -{formatSalaire((totalSalaireBrut - totalSalaireNet)/12)}
                        </td>
                        <td className="text-right p-2 text-green-600">
                          {formatSalaire(totalSalaireNet/12)}
                        </td>
                        <td className="text-center p-2">
                          <Badge className="bg-green-100 text-green-800">Conforme</Badge>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {employees.map((employee) => (
                <Card key={employee.id} className="bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg">{employee.prenom} {employee.nom}</CardTitle>
                    <p className="text-slate-600">{employee.poste}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className={`text-4xl font-bold ${
                        employee.performance >= 95 ? 'text-green-600' :
                        employee.performance >= 85 ? 'text-blue-600' :
                        'text-yellow-600'
                      }`}>
                        {employee.performance}%
                      </div>
                      <p className="text-slate-500">Score Performance</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-700 text-sm">Certifications Fiqh:</h4>
                      {employee.certifications.map((cert, index) => (
                        <Badge key={index} variant="outline" className="text-xs mr-1 mb-1">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="formations">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {employees.map((employee) => (
                <Card key={employee.id} className="bg-white">
                  <CardHeader>
                    <CardTitle className="text-lg">{employee.prenom} {employee.nom}</CardTitle>
                    <p className="text-slate-600">{employee.poste}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-emerald-700 text-sm mb-2 flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          Formations Fiqh Complétées:
                        </h4>
                        <ul className="space-y-1">
                          {employee.formationsFiqh.map((formation, index) => (
                            <li key={index} className="text-sm text-slate-600 flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-green-600" />
                              {formation}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-blue-700 text-sm mb-2 flex items-center gap-2">
                          <Star className="h-4 w-4" />
                          Certifications Professionnelles:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {employee.certifications.map((cert, index) => (
                            <Badge key={index} className="text-xs bg-blue-100 text-blue-800">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer Protection */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            © 2025 Club Empreinte Digitale - Yakoubi Yamina. Tous droits réservés.
            <br />
            Système RH conforme Code du Travail Suisse & Fiqh Informatique.
          </p>
        </div>
      </div>
    </div>
  );
}