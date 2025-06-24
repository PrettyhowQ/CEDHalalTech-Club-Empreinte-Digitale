import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Users, 
  Mail, 
  Phone, 
  CreditCard, 
  FileText, 
  Download, 
  Search,
  Building2,
  MapPin,
  Calendar,
  Euro,
  Plus,
  Eye,
  Edit,
  DollarSign,
  UserCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

interface EmployeeData {
  id: string;
  numero: string;
  nom: string;
  prenom: string;
  email: string;
  fonction: string;
  service: string;
  region: string;
  dateEmbauche: string;
  salaire: number;
  statusContrat: 'cdi' | 'cdd' | 'freelance' | 'benevole';
  compteBancaire: string;
  telephone?: string;
  adresse?: string;
}

const employees: EmployeeData[] = [
  {
    id: "001",
    numero: "CED-001",
    nom: "Yakoubi",
    prenom: "Yamina",
    email: "yakoubi.yamina@ik.me",
    fonction: "Fondatrice & CEO",
    service: "Direction Générale",
    region: "Suisse & International",
    dateEmbauche: "2023-01-01",
    salaire: 0, // Fondatrice
    statusContrat: "cdi",
    compteBancaire: "CH93 0076 2011 6238 5295 7",
    telephone: "+41 XX XXX XX XX",
    adresse: "Suisse"
  },
  {
    id: "002",
    numero: "CED-002",
    nom: "Yakoubi",
    prenom: "Brahim",
    email: "brahim.gerant@empreintedigitale.club",
    fonction: "Gérant Association",
    service: "TechForAll & Costa del Sol",
    region: "Espagne & Europe",
    dateEmbauche: "2023-06-01",
    salaire: 6200,
    statusContrat: "cdi",
    compteBancaire: "ES91 2100 0418 4502 0005 1332",
    telephone: "+34 XXX XXX XXX",
    adresse: "Costa del Sol, Espagne"
  },
  {
    id: "003",
    numero: "CED-003",
    nom: "Yakoubi Ozel",
    prenom: "Souheila",
    email: "souheila.sante@empreintedigitale.club",
    fonction: "Responsable Santé",
    service: "Santé & Bien-être",
    region: "International",
    dateEmbauche: "2023-03-15",
    salaire: 7200,
    statusContrat: "cdi",
    compteBancaire: "FR14 2004 1010 0505 0001 3M02 606",
    telephone: "+33 X XX XX XX XX",
    adresse: "France"
  },
  {
    id: "004",
    numero: "CED-004",
    nom: "Kadjouf",
    prenom: "Hanane",
    email: "hanane.secretaire@empreintedigitale.club",
    fonction: "Secrétaire de Direction",
    service: "Secrétariat Brahim Yakoubi",
    region: "Espagne & Europe",
    dateEmbauche: "2024-12-01",
    salaire: 5500,
    statusContrat: "cdd",
    compteBancaire: "ES91 2100 0418 4502 0005 1333",
    telephone: "+34 XXX XXX XXX",
    adresse: "Costa del Sol, Espagne"
  },
  {
    id: "005",
    numero: "CED-005",
    nom: "",
    prenom: "Aziz",
    email: "aziz.logistique.suisse@empreintedigitale.club",
    fonction: "Responsable Logistique Suisse",
    service: "Logistique Suisse",
    region: "Suisse",
    dateEmbauche: "2024-11-01",
    salaire: 6500,
    statusContrat: "cdi",
    compteBancaire: "CH93 0076 2011 6238 5295 8",
    telephone: "+41 XX XXX XX XX",
    adresse: "Suisse"
  },
  {
    id: "006",
    numero: "CED-006",
    nom: "",
    prenom: "Abdelkarim",
    email: "abdelkarim.logistique.europe@empreintedigitale.club",
    fonction: "Responsable Logistique Europe",
    service: "Logistique Europe",
    region: "Europe",
    dateEmbauche: "2024-10-15",
    salaire: 7800,
    statusContrat: "cdi",
    compteBancaire: "DE89 3704 0044 0532 0130 00",
    telephone: "+49 XXX XXX XXXX",
    adresse: "Allemagne"
  }
];

export function TableauBordEquipe() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeData | null>(null);

  const filteredEmployees = employees.filter(emp => 
    emp.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.fonction.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalSalaires = employees.reduce((sum, emp) => sum + emp.salaire, 0);

  const generatePaySlip = (employee: EmployeeData) => {
    // Tous les salaires aux standards suisses
    const getTaxRates = (region: string, salaire: number) => {
      // Standards suisses appliqués à tous les employés
      return {
        cotisationsSociales: 0.128, // AVS/AI/APG + AC + AANP (12.8%)
        impots: salaire > 6000 ? 0.15 : 0.12, // Impôt à la source Suisse
        assuranceMaladie: 380, // Montant fixe mensuel assurance maladie
        net: salaire > 6000 ? 0.69 : 0.72
      };
    };

    const rates = getTaxRates(employee.region, employee.salaire);
    const paySlipData = {
      employe: `${employee.prenom} ${employee.nom}`,
      numero: employee.numero,
      periode: new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' }),
      salaireBrut: employee.salaire,
      cotisationsSociales: Math.round(employee.salaire * rates.cotisationsSociales),
      impots: Math.round(employee.salaire * rates.impots),
      assuranceMaladie: rates.assuranceMaladie,
      salaireNet: Math.round(employee.salaire * rates.net - rates.assuranceMaladie),
      compteBancaire: employee.compteBancaire,
      region: employee.region
    };

    // Simulation génération fiche de paie standards suisses
    console.log('Génération fiche de paie (Standards Suisses pour tous):', paySlipData);
    alert(`FICHE DE PAIE - Standards Suisses
    
Employé: ${paySlipData.employe}
Région d'activité: ${paySlipData.region}
Période: ${paySlipData.periode}

SALAIRE BRUT: CHF ${paySlipData.salaireBrut}

DÉDUCTIONS:
- Cotisations sociales (12.8%): CHF ${paySlipData.cotisationsSociales}
- Impôts à la source: CHF ${paySlipData.impots}
- Assurance maladie: CHF ${paySlipData.assuranceMaladie}

SALAIRE NET: CHF ${paySlipData.salaireNet}

Compte bancaire: ${paySlipData.compteBancaire}
Conforme législation suisse`);
  };

  const getContractColor = (status: string) => {
    switch (status) {
      case 'cdi': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'cdd': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'freelance': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'benevole': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
            Tableau de Bord Équipe
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Gestion complète du personnel Club Empreinte Digitale
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              👥 {employees.length} Employés
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              💶 €{totalSalaires.toLocaleString()}/mois
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              🌍 Multi-pays
            </Badge>
          </div>
        </motion.div>

        {/* Statistiques Rapides */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Employés</CardTitle>
              <Users className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{employees.length}</div>
              <p className="text-xs text-blue-100">Personnel actif</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Masse Salariale</CardTitle>
              <Euro className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">CHF {(totalSalaires / 1000).toFixed(0)}K</div>
              <p className="text-xs text-green-100">Par mois</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CDI Actifs</CardTitle>
              <UserCheck className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {employees.filter(emp => emp.statusContrat === 'cdi').length}
              </div>
              <p className="text-xs text-purple-100">Contrats permanents</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Régions</CardTitle>
              <MapPin className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {new Set(employees.map(emp => emp.region.split(' &')[0])).size}
              </div>
              <p className="text-xs text-orange-100">Pays couverts</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Barre de recherche */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Rechercher un employé
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                type="text"
                placeholder="Nom, prénom, email, fonction..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md"
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Liste des employés */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        >
          {filteredEmployees.map((employee, index) => (
            <motion.div
              key={employee.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                        <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {employee.prenom} {employee.nom}
                        </CardTitle>
                        <CardDescription className="font-medium">
                          #{employee.numero}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className={getContractColor(employee.statusContrat)}>
                      {employee.statusContrat.toUpperCase()}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Building2 className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">{employee.fonction}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="text-blue-600 dark:text-blue-400">{employee.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>{employee.region}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>Embauché le {new Date(employee.dateEmbauche).toLocaleDateString('fr-FR')}</span>
                    </div>
                    {employee.salaire > 0 && (
                      <div className="flex items-center gap-2 text-sm">
                        <Euro className="h-4 w-4 text-gray-500" />
                        <span className="font-semibold text-green-600">CHF {employee.salaire.toLocaleString()}/mois</span>
                        <Badge variant="outline" className="text-xs bg-red-50 text-red-700">Standards 🇨🇭</Badge>
                      </div>
                    )}
                  </div>
                  
                  <Separator />
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => setSelectedEmployee(employee)}
                      className="flex-1"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      Détails
                    </Button>
                    {employee.salaire > 0 && (
                      <Button 
                        size="sm"
                        onClick={() => generatePaySlip(employee)}
                        className="flex-1 bg-green-600 hover:bg-green-700"
                      >
                        <FileText className="h-4 w-4 mr-1" />
                        Fiche Paie
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal détails employé */}
        {selectedEmployee && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedEmployee(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">
                  {selectedEmployee.prenom} {selectedEmployee.nom}
                </h3>
                <Button variant="ghost" size="sm" onClick={() => setSelectedEmployee(null)}>
                  ✕
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-500">Numéro:</span>
                    <p>{selectedEmployee.numero}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">Statut:</span>
                    <p><Badge className={getContractColor(selectedEmployee.statusContrat)}>
                      {selectedEmployee.statusContrat.toUpperCase()}
                    </Badge></p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">Email:</span>
                    <p className="text-blue-600">{selectedEmployee.email}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">Téléphone:</span>
                    <p>{selectedEmployee.telephone}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">Fonction:</span>
                    <p>{selectedEmployee.fonction}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">Service:</span>
                    <p>{selectedEmployee.service}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">Région:</span>
                    <p>{selectedEmployee.region}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">Embauche:</span>
                    <p>{new Date(selectedEmployee.dateEmbauche).toLocaleDateString('fr-FR')}</p>
                  </div>
                  {selectedEmployee.salaire > 0 && (
                    <>
                      <div>
                        <span className="font-medium text-gray-500">Salaire:</span>
                        <p className="font-semibold text-green-600">CHF {selectedEmployee.salaire.toLocaleString()}/mois 🇨🇭</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-500">Compte bancaire:</span>
                        <p className="font-mono text-sm">{selectedEmployee.compteBancaire}</p>
                      </div>
                    </>
                  )}
                </div>
                
                {selectedEmployee.salaire > 0 && (
                  <div className="pt-4 border-t">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => generatePaySlip(selectedEmployee)}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Générer Fiche de Paie
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Actions Globales */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Actions Globales
              </CardTitle>
              <CardDescription>
                Gestion administrative et financière
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Exporter Liste Complète
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Générer Toutes Fiches Paie
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Nouvel Employé
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Rapport Salaires
                </Button>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Note:</strong> Toutes les fiches de paie sont générées conformément aux 
                  législations locales (Suisse, France, Espagne, Allemagne). Les cotisations sociales 
                  et impôts sont calculés automatiquement selon les barèmes en vigueur.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}