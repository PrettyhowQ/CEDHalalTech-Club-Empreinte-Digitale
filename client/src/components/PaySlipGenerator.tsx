import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  FileText, 
  Download, 
  Send, 
  Calculator, 
  CheckCircle,
  Euro,
  Calendar,
  User,
  Building2,
  Smartphone,
  Mail
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CEDFooter } from './CEDFooter';

interface PaySlipData {
  employeId: string;
  nom: string;
  prenom: string;
  fonction: string;
  numeroAVS: string;
  salaireBrut: number;
  heuresNormales: number;
  heuresSupplementaires: number;
  primes: number;
  avantagesNature: number;
  deductionsSpeciales: number;
  periode: string;
  compteBancaire: string;
  adresse: string;
  telephone: string;
  email: string;
}

interface CalculatedPaySlip extends PaySlipData {
  cotisationsAVS: number;
  cotisationsAC: number;
  cotisationsAANP: number;
  impotsSource: number;
  assuranceMaladie: number;
  salaireNet: number;
  totalDeductions: number;
}

const employees = [
  { id: 'CED-002', name: 'Brahim Yakoubi', fonction: 'Gérant Association', salaire: 6200 },
  { id: 'CED-003', name: 'Souheila Yakoubi Ozel', fonction: 'Responsable Santé', salaire: 7200 },
  { id: 'CED-004', name: 'Hanane Kadjouf', fonction: 'Secrétaire Direction', salaire: 5500 },
  { id: 'CED-005', name: 'Aziz', fonction: 'Logistique Suisse', salaire: 6500 },
  { id: 'CED-006', name: 'Abdelkarim', fonction: 'Logistique Europe', salaire: 7800 }
];

export function PaySlipGenerator() {
  const [selectedEmployee, setSelectedEmployee] = useState<string>('');
  const [paySlipData, setPaySlipData] = useState<PaySlipData>({
    employeId: '',
    nom: '',
    prenom: '',
    fonction: '',
    numeroAVS: '',
    salaireBrut: 0,
    heuresNormales: 173.33, // 40h/semaine * 52 semaines / 12 mois
    heuresSupplementaires: 0,
    primes: 0,
    avantagesNature: 0,
    deductionsSpeciales: 0,
    periode: new Date().toISOString().slice(0, 7), // YYYY-MM
    compteBancaire: '',
    adresse: '',
    telephone: '',
    email: ''
  });

  const [calculatedPaySlip, setCalculatedPaySlip] = useState<CalculatedPaySlip | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleEmployeeSelect = (employeeId: string) => {
    const employee = employees.find(emp => emp.id === employeeId);
    if (employee) {
      const [prenom, ...nomParts] = employee.name.split(' ');
      setSelectedEmployee(employeeId);
      setPaySlipData(prev => ({
        ...prev,
        employeId: employee.id,
        nom: nomParts.join(' '),
        prenom: prenom,
        fonction: employee.fonction,
        salaireBrut: employee.salaire
      }));
    }
  };

  const calculatePaySlip = (): CalculatedPaySlip => {
    const salaireBrutTotal = paySlipData.salaireBrut + paySlipData.primes + paySlipData.avantagesNature;
    
    // Cotisations sociales suisses 2024
    const cotisationsAVS = Math.round(salaireBrutTotal * 0.0525); // AVS/AI/APG 5.25%
    const cotisationsAC = Math.round(salaireBrutTotal * 0.022); // AC 2.2%
    const cotisationsAANP = Math.round(salaireBrutTotal * 0.006); // AANP 0.6%
    
    // Impôt à la source (estimation Canton de Zurich)
    const impotsSource = salaireBrutTotal > 6000 ? Math.round(salaireBrutTotal * 0.15) : Math.round(salaireBrutTotal * 0.12);
    
    // Assurance maladie obligatoire
    const assuranceMaladie = 380;
    
    const totalDeductions = cotisationsAVS + cotisationsAC + cotisationsAANP + impotsSource + assuranceMaladie + paySlipData.deductionsSpeciales;
    const salaireNet = salaireBrutTotal - totalDeductions;

    return {
      ...paySlipData,
      cotisationsAVS,
      cotisationsAC,
      cotisationsAANP,
      impotsSource,
      assuranceMaladie,
      totalDeductions,
      salaireNet
    };
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    const calculated = calculatePaySlip();
    setCalculatedPaySlip(calculated);
    
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  const generatePDFAndSend = () => {
    if (!calculatedPaySlip) return;
    
    setIsSent(true);
    
    // Simulation génération PDF et envoi SMS
    const pdfContent = `
FICHE DE PAIE SUISSE - ${calculatedPaySlip.periode}
Club Empreinte Digitale SA

EMPLOYÉ: ${calculatedPaySlip.prenom} ${calculatedPaySlip.nom}
Numéro: ${calculatedPaySlip.employeId}
Fonction: ${calculatedPaySlip.fonction}
AVS: ${calculatedPaySlip.numeroAVS}

SALAIRE BRUT: CHF ${calculatedPaySlip.salaireBrut.toLocaleString()}
Heures normales: ${calculatedPaySlip.heuresNormales}h
Heures supplémentaires: ${calculatedPaySlip.heuresSupplementaires}h
Primes: CHF ${calculatedPaySlip.primes}
Avantages en nature: CHF ${calculatedPaySlip.avantagesNature}

DÉDUCTIONS:
- AVS/AI/APG (5.25%): CHF ${calculatedPaySlip.cotisationsAVS}
- AC (2.2%): CHF ${calculatedPaySlip.cotisationsAC}
- AANP (0.6%): CHF ${calculatedPaySlip.cotisationsAANP}
- Impôts à la source: CHF ${calculatedPaySlip.impotsSource}
- Assurance maladie: CHF ${calculatedPaySlip.assuranceMaladie}
- Déductions spéciales: CHF ${calculatedPaySlip.deductionsSpeciales}

TOTAL DÉDUCTIONS: CHF ${calculatedPaySlip.totalDeductions}
SALAIRE NET: CHF ${calculatedPaySlip.salaireNet}

Compte bancaire: ${calculatedPaySlip.compteBancaire}
Conforme législation suisse
    `;

    console.log('PDF généré:', pdfContent);
    
    // Simulation envoi SMS au smartphone
    alert(`Fiche de paie générée et envoyée !

PDF envoyé à: ${calculatedPaySlip.telephone}
Email de confirmation: ${calculatedPaySlip.email}

Le fichier PDF sera disponible dans l'application mobile logistique de l'employé dans quelques minutes.`);

    setTimeout(() => {
      setIsSent(false);
    }, 3000);
  };

  const handleInputChange = (field: keyof PaySlipData, value: string | number) => {
    setPaySlipData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
            Générateur Fiches de Paie Suisse
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Système automatisé conforme législation suisse
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
              🇨🇭 Standards Suisses
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              📱 Envoi Mobile
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              📄 PDF Automatique
            </Badge>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulaire */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Données Employé
                </CardTitle>
                <CardDescription>
                  Sélectionnez un employé et complétez les informations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="employee">Employé</Label>
                  <Select value={selectedEmployee} onValueChange={handleEmployeeSelect}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un employé" />
                    </SelectTrigger>
                    <SelectContent>
                      {employees.map((emp) => (
                        <SelectItem key={emp.id} value={emp.id}>
                          {emp.name} - {emp.fonction}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="prenom">Prénom</Label>
                    <Input
                      id="prenom"
                      value={paySlipData.prenom}
                      onChange={(e) => handleInputChange('prenom', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom</Label>
                    <Input
                      id="nom"
                      value={paySlipData.nom}
                      onChange={(e) => handleInputChange('nom', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fonction">Fonction</Label>
                  <Input
                    id="fonction"
                    value={paySlipData.fonction}
                    onChange={(e) => handleInputChange('fonction', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="numeroAVS">Numéro AVS</Label>
                  <Input
                    id="numeroAVS"
                    placeholder="756.XXXX.XXXX.XX"
                    value={paySlipData.numeroAVS}
                    onChange={(e) => handleInputChange('numeroAVS', e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="salaireBrut">Salaire Brut (CHF)</Label>
                    <Input
                      id="salaireBrut"
                      type="number"
                      value={paySlipData.salaireBrut}
                      onChange={(e) => handleInputChange('salaireBrut', parseInt(e.target.value) || 0)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="periode">Période</Label>
                    <Input
                      id="periode"
                      type="month"
                      value={paySlipData.periode}
                      onChange={(e) => handleInputChange('periode', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="heuresNormales">Heures Normales</Label>
                    <Input
                      id="heuresNormales"
                      type="number"
                      step="0.1"
                      value={paySlipData.heuresNormales}
                      onChange={(e) => handleInputChange('heuresNormales', parseFloat(e.target.value) || 0)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="heuresSupplementaires">Heures Supplémentaires</Label>
                    <Input
                      id="heuresSupplementaires"
                      type="number"
                      step="0.1"
                      value={paySlipData.heuresSupplementaires}
                      onChange={(e) => handleInputChange('heuresSupplementaires', parseFloat(e.target.value) || 0)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="primes">Primes (CHF)</Label>
                    <Input
                      id="primes"
                      type="number"
                      value={paySlipData.primes}
                      onChange={(e) => handleInputChange('primes', parseInt(e.target.value) || 0)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deductionsSpeciales">Déductions Spéciales (CHF)</Label>
                    <Input
                      id="deductionsSpeciales"
                      type="number"
                      value={paySlipData.deductionsSpeciales}
                      onChange={(e) => handleInputChange('deductionsSpeciales', parseInt(e.target.value) || 0)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="compteBancaire">Compte Bancaire</Label>
                  <Input
                    id="compteBancaire"
                    placeholder="IBAN"
                    value={paySlipData.compteBancaire}
                    onChange={(e) => handleInputChange('compteBancaire', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telephone">Téléphone (pour envoi PDF)</Label>
                  <Input
                    id="telephone"
                    placeholder="+41 XX XXX XX XX"
                    value={paySlipData.telephone}
                    onChange={(e) => handleInputChange('telephone', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={paySlipData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>

                <Button 
                  onClick={handleGenerate} 
                  disabled={isGenerating || !paySlipData.nom || !paySlipData.prenom}
                  className="w-full"
                >
                  {isGenerating ? (
                    <>
                      <Calculator className="h-4 w-4 mr-2 animate-spin" />
                      Calcul en cours...
                    </>
                  ) : (
                    <>
                      <Calculator className="h-4 w-4 mr-2" />
                      Calculer Fiche de Paie
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Aperçu et Résultats */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {calculatedPaySlip ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Aperçu Fiche de Paie
                  </CardTitle>
                  <CardDescription>
                    Conforme législation suisse - {calculatedPaySlip.periode}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">
                      {calculatedPaySlip.prenom} {calculatedPaySlip.nom}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {calculatedPaySlip.fonction} - {calculatedPaySlip.employeId}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Salaire Brut:</span>
                      <span className="text-lg font-bold">CHF {calculatedPaySlip.salaireBrut.toLocaleString()}</span>
                    </div>
                    
                    {calculatedPaySlip.primes > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Primes:</span>
                        <span className="text-sm">CHF {calculatedPaySlip.primes.toLocaleString()}</span>
                      </div>
                    )}

                    <Separator />

                    <div className="space-y-2">
                      <h4 className="font-medium text-red-700 dark:text-red-400">Déductions:</h4>
                      <div className="flex justify-between text-sm">
                        <span>AVS/AI/APG (5.25%):</span>
                        <span>CHF {calculatedPaySlip.cotisationsAVS}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>AC (2.2%):</span>
                        <span>CHF {calculatedPaySlip.cotisationsAC}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>AANP (0.6%):</span>
                        <span>CHF {calculatedPaySlip.cotisationsAANP}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Impôts à la source:</span>
                        <span>CHF {calculatedPaySlip.impotsSource}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Assurance maladie:</span>
                        <span>CHF {calculatedPaySlip.assuranceMaladie}</span>
                      </div>
                      {calculatedPaySlip.deductionsSpeciales > 0 && (
                        <div className="flex justify-between text-sm">
                          <span>Déductions spéciales:</span>
                          <span>CHF {calculatedPaySlip.deductionsSpeciales}</span>
                        </div>
                      )}
                    </div>

                    <Separator />

                    <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <span className="font-bold text-lg">Salaire Net:</span>
                      <span className="text-2xl font-bold text-green-600">
                        CHF {calculatedPaySlip.salaireNet.toLocaleString()}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <p>Versement sur: {calculatedPaySlip.compteBancaire}</p>
                      <p>Total déductions: CHF {calculatedPaySlip.totalDeductions}</p>
                    </div>

                    <div className="space-y-3">
                      <Button 
                        onClick={generatePDFAndSend}
                        disabled={isSent}
                        className="w-full bg-green-600 hover:bg-green-700"
                      >
                        {isSent ? (
                          <>
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Envoyé !
                          </>
                        ) : (
                          <>
                            <Smartphone className="h-4 w-4 mr-2" />
                            Générer PDF & Envoyer au Mobile
                          </>
                        )}
                      </Button>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Télécharger
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="flex items-center justify-center h-96">
                  <div className="text-center space-y-4">
                    <FileText className="h-16 w-16 text-gray-400 mx-auto" />
                    <p className="text-gray-500">
                      Sélectionnez un employé et complétez les informations pour générer la fiche de paie
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>

        {/* Information iPhone Pro Max */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-gray-900 to-black text-white border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Équipement iPhone Pro Max Recommandé
              </CardTitle>
              <CardDescription className="text-gray-300">
                Pour une synchronisation optimale de l'équipe
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Configuration Recommandée:</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• iPhone 15 Pro Max - 1TB</li>
                    <li>• Applications logistique intégrées</li>
                    <li>• Synchronisation automatique fiches de paie</li>
                    <li>• Accès sécurisé aux tableaux de bord</li>
                    <li>• Notifications push temps réel</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Équipe à Équiper:</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Yamina (CEO) - Supervision générale</li>
                    <li>• Brahim - Gestion association</li>
                    <li>• Aziz - Application logistique Suisse</li>
                    <li>• Abdelkarim - Application logistique Europe</li>
                    <li>• Souheila - Suivi santé équipe</li>
                    <li>• Hanane - Coordination secrétariat</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Note:</strong> Les fiches de paie PDF seront automatiquement 
                  synchronisées sur les smartphones professionnels via l'application 
                  logistique intégrée. Chaque employé recevra ses documents directement 
                  sur son appareil sécurisé.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
      
      <CEDFooter />
    </div>
  );
}