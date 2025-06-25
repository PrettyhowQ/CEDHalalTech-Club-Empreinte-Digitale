import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Download, FileText, Calculator, Users, Globe, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContractData {
  employeeName: string;
  role: string;
  salary: number;
  currency: string;
  startDate: string;
  trialPeriod: number;
  workLocation: string;
  contractType: string;
  responsibilities: string[];
  benefits: string[];
  workingHours: string;
  vacationDays: number;
  noticePeriod: number;
}

const defaultContracts = {
  'yakoubi-aziz': {
    employeeName: 'Yakoubi Aziz',
    role: 'Responsable Logistique Suisse',
    salary: 6500,
    currency: 'CHF',
    startDate: '2024-07-01',
    trialPeriod: 3,
    workLocation: 'Berne, Suisse',
    contractType: 'CDI',
    responsibilities: [
      'Coordination logistique complète sur territoire suisse',
      'Gestion équipes locales et sous-traitants',
      'Optimisation routes et délais livraison',
      'Supervision entrepôts et stocks',
      'Relation clients et fournisseurs suisses',
      'Reporting hebdomadaire à Yakoubi Yamina',
      'Conformité réglementations douanières CH',
      'Synchronisation TechForAll avec Brahim Yakoubi',
      'Gestion donateurs suisses temps réel',
      'Coordination collectes matériel écologique',
      'Gestion iPhone Pro Max logistique temps réel'
    ],
    benefits: [
      'iPhone Pro Max professionnel avec applications logistique',
      'Véhicule de fonction avec GPS professionnel',
      'Assurance maladie complémentaire Al-Aman CED',
      'Compte bancaire CED Bank avec carte Royal',
      'Formation continue logistique internationale',
      '13ème salaire',
      'Bonus performance trimestriel',
      'Télétravail 2 jours/semaine'
    ],
    workingHours: '42h/semaine (8h30-17h30)',
    vacationDays: 25,
    noticePeriod: 3
  },
  'yakoubi-karim': {
    employeeName: 'Yakoubi Karim',
    role: 'Responsable Logistique Européenne',
    salary: 6800,
    currency: 'CHF',
    startDate: '2024-07-01',
    trialPeriod: 3,
    workLocation: 'Paris, France (Base européenne)',
    contractType: 'CDI',
    responsibilities: [
      'Coordination logistique réseau européen complet',
      'Gestion équipes multiples pays (FR, DE, IT, ES)',
      'Négociation contrats transporteurs internationaux',
      'Supervision hubs logistiques européens',
      'Développement nouvelles routes commerciales',
      'Reporting hebdomadaire à Yakoubi Yamina',
      'Conformité réglementations UE',
      'Synchronisation TechForAll avec Brahim Yakoubi',
      'Gestion donateurs européens temps réel',
      'Coordination collectes matériel construction',
      'Gestion iPhone Pro Max logistique temps réel'
    ],
    benefits: [
      'iPhone Pro Max professionnel avec applications logistique',
      'Véhicule de fonction international',
      'Assurance maladie internationale Al-Aman CED',
      'Compte bancaire CED Bank multi-devises',
      'Frais de déplacement européens',
      '13ème salaire',
      'Bonus performance réseau européen',
      'Logement fonction Paris'
    ],
    workingHours: '42h/semaine (horaires flexibles)',
    vacationDays: 25,
    noticePeriod: 3
  }
};

export function ContractGenerator() {
  const [selectedEmployee, setSelectedEmployee] = useState<string>('');
  const [contractData, setContractData] = useState<ContractData | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleEmployeeSelect = (employeeId: string) => {
    setSelectedEmployee(employeeId);
    if (employeeId && defaultContracts[employeeId as keyof typeof defaultContracts]) {
      setContractData(defaultContracts[employeeId as keyof typeof defaultContracts]);
    }
  };

  const calculateNetSalary = (grossSalary: number) => {
    // Calcul simplifié charges sociales suisses (environ 20-22%)
    const socialCharges = grossSalary * 0.21;
    const netSalary = grossSalary - socialCharges;
    return {
      gross: grossSalary,
      socialCharges,
      net: netSalary,
      yearly: netSalary * 13 // Avec 13ème salaire
    };
  };

  const generateContract = () => {
    if (!contractData) return;
    
    setIsGenerating(true);
    
    setTimeout(() => {
      const contractContent = `
CONTRAT DE TRAVAIL CDI
Club Empreinte Digitale - Écosystème Financier Islamique

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EMPLOYEUR:
Club Empreinte Digitale SA
Dirigeante: Yakoubi Yamina
Adresse: Genève, Suisse
SIREN: CHE-XXX.XXX.XXX

EMPLOYÉ:
Nom: ${contractData.employeeName}
Poste: ${contractData.role}
Lieu de travail: ${contractData.workLocation}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONDITIONS CONTRACTUELLES:

📅 Date de début: ${contractData.startDate}
⏱️ Période d'essai: ${contractData.trialPeriod} mois
💰 Salaire brut: ${contractData.salary} ${contractData.currency}/mois
⏰ Horaires: ${contractData.workingHours}
🏖️ Congés payés: ${contractData.vacationDays} jours/an
📋 Type: ${contractData.contractType}
⚠️ Préavis: ${contractData.noticePeriod} mois

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RESPONSABILITÉS PRINCIPALES:
${contractData.responsibilities.map((resp, index) => `${index + 1}. ${resp}`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AVANTAGES SOCIAUX:
${contractData.benefits.map((benefit, index) => `✓ ${benefit}`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONFORMITÉ LÉGALE:
✓ Code du travail suisse respecté intégralement
✓ Convention collective applicable
✓ Assurance accidents obligatoire
✓ Cotisations AVS/AI/APG automatiques
✓ LPP (2ème pilier) selon réglementation
✓ Assurance maladie Al-Aman CED Takaful

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HIÉRARCHIE ET REPORTING:
Manager direct: Yakoubi Yamina (CEO & Fondatrice)
Reporting: Hebdomadaire + urgences 24/7
Équipe sous supervision: Personnel logistique local

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CLAUSE SPÉCIALE TECHNOLOGIQUE:
iPhone Pro Max professionnel fourni avec:
- Applications logistique temps réel
- Accès CED Bank mobile
- GPS et géolocalisation équipes
- Communication cryptée entreprise
- Supervision flotte véhicules

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Fait à Genève, le ${new Date().toLocaleDateString('fr-CH')}

Signature Employeur:         Signature Employé:
Yakoubi Yamina              ${contractData.employeeName}
CEO Club Empreinte Digitale

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
© 2025 Yakoubi Yamina - Club Empreinte Digitale - Tous droits réservés
Propriété intellectuelle protégée - Reproduction interdite
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `;

      // Création du blob et téléchargement
      const blob = new Blob([contractContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Contrat_${contractData.employeeName.replace(' ', '_')}_${new Date().toISOString().split('T')[0]}.txt`;
      link.click();
      URL.revokeObjectURL(url);

      setIsGenerating(false);
      toast({
        title: "Contrat généré avec succès",
        description: `Contrat de ${contractData.employeeName} téléchargé`,
      });
    }, 1500);
  };

  const generatePayslip = () => {
    if (!contractData) return;
    
    const salaryData = calculateNetSalary(contractData.salary);
    
    const payslipContent = `
FICHE DE PAIE - ${new Date().toLocaleDateString('fr-CH', { month: 'long', year: 'numeric' })}
Club Empreinte Digitale SA - Écosystème Financier Islamique

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EMPLOYÉ: ${contractData.employeeName}
POSTE: ${contractData.role}
MATRICULE: CED-${contractData.employeeName.split(' ')[1].toUpperCase()}-2024

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ÉLÉMENTS DE SALAIRE:

💰 SALAIRE BRUT:                    ${salaryData.gross.toFixed(2)} CHF

CHARGES SOCIALES (21%):
- AVS/AI/APG (5.3%):               ${(salaryData.gross * 0.053).toFixed(2)} CHF
- Assurance chômage (1.1%):        ${(salaryData.gross * 0.011).toFixed(2)} CHF
- LPP 2ème pilier (8.4%):          ${(salaryData.gross * 0.084).toFixed(2)} CHF
- Assurance accidents (1.2%):      ${(salaryData.gross * 0.012).toFixed(2)} CHF
- Impôt à la source (5%):          ${(salaryData.gross * 0.05).toFixed(2)} CHF

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💵 SALAIRE NET MENSUEL:             ${salaryData.net.toFixed(2)} CHF

💎 SALAIRE NET ANNUEL (avec 13ème): ${salaryData.yearly.toFixed(2)} CHF

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AVANTAGES EN NATURE:
📱 iPhone Pro Max professionnel:     400 CHF/mois
🚗 Véhicule de fonction:             600 CHF/mois
🏥 Assurance Al-Aman CED:           280 CHF/mois
🏦 Compte CED Bank Royal:           Gratuit
📚 Formation continue:               200 CHF/mois

VALEUR TOTALE PACKAGE:              ${(salaryData.net + 1480).toFixed(2)} CHF/mois

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

VERSEMENT:
Compte bancaire: CED Bank
IBAN: CH XX XXXX XXXX XXXX XXXX X
Date de versement: 25 de chaque mois

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CUMULS ANNÉE ${new Date().getFullYear()}:
Salaire brut cumulé:               ${(salaryData.gross * 6).toFixed(2)} CHF
Charges sociales cumulées:         ${(salaryData.socialCharges * 6).toFixed(2)} CHF
Salaire net cumulé:                ${(salaryData.net * 6).toFixed(2)} CHF

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONGÉS:
Congés acquis: ${Math.round(contractData.vacationDays / 12 * 6)} jours
Congés pris: 0 jours
Solde restant: ${Math.round(contractData.vacationDays / 12 * 6)} jours

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SERVICE RH: hr@club-empreinte-digitale.com
QUESTIONS PAIE: Hanaé-Denise Ozel (Responsable Juridique & Paie)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
© 2025 Yakoubi Yamina - Club Empreinte Digitale - Tous droits réservés
Document confidentiel - Propriété de l'employé
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `;

    const blob = new Blob([payslipContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Fiche_Paie_${contractData.employeeName.replace(' ', '_')}_${new Date().toISOString().slice(0, 7)}.txt`;
    link.click();
    URL.revokeObjectURL(url);

    toast({
      title: "Fiche de paie générée",
      description: `Fiche de paie de ${contractData.employeeName} téléchargée`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-emerald-800 mb-2">
            Générateur de Contrats RH
          </h1>
          <p className="text-emerald-600">
            Gestion automatisée des contrats et fiches de paie - Responsables Logistique
          </p>
        </div>

        {/* Sélection employé */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Sélection Employé
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedEmployee} onValueChange={handleEmployeeSelect}>
              <SelectTrigger>
                <SelectValue placeholder="Choisir un employé" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yakoubi-aziz">Yakoubi Aziz - Responsable Logistique Suisse</SelectItem>
                <SelectItem value="yakoubi-karim">Yakoubi Karim - Responsable Logistique Européenne</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {contractData && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Informations contractuelles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Informations Contractuelles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Nom complet</Label>
                    <Input value={contractData.employeeName} readOnly />
                  </div>
                  <div>
                    <Label>Poste</Label>
                    <Input value={contractData.role} readOnly />
                  </div>
                  <div>
                    <Label>Salaire brut</Label>
                    <Input value={`${contractData.salary} ${contractData.currency}`} readOnly />
                  </div>
                  <div>
                    <Label>Lieu de travail</Label>
                    <Input value={contractData.workLocation} readOnly />
                  </div>
                  <div>
                    <Label>Date de début</Label>
                    <Input value={contractData.startDate} readOnly />
                  </div>
                  <div>
                    <Label>Période d'essai</Label>
                    <Input value={`${contractData.trialPeriod} mois`} readOnly />
                  </div>
                </div>

                <div>
                  <Label>Responsabilités principales</Label>
                  <Textarea 
                    value={contractData.responsibilities.join('\n• ')} 
                    readOnly 
                    rows={6}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Calcul salaire */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Calcul Salaire Net
                </CardTitle>
              </CardHeader>
              <CardContent>
                {(() => {
                  const salary = calculateNetSalary(contractData.salary);
                  return (
                    <div className="space-y-4">
                      <div className="p-4 bg-emerald-50 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span>Salaire brut mensuel:</span>
                          <span className="font-bold">{salary.gross.toFixed(2)} CHF</span>
                        </div>
                        <div className="flex justify-between mb-2 text-red-600">
                          <span>Charges sociales (21%):</span>
                          <span>-{salary.socialCharges.toFixed(2)} CHF</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between text-lg font-bold text-emerald-700">
                          <span>Salaire net mensuel:</span>
                          <span>{salary.net.toFixed(2)} CHF</span>
                        </div>
                        <div className="flex justify-between text-emerald-600 mt-2">
                          <span>Salaire net annuel (13ème):</span>
                          <span>{salary.yearly.toFixed(2)} CHF</span>
                        </div>
                      </div>

                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Avantages en nature:</h4>
                        <ul className="text-sm space-y-1">
                          <li>📱 iPhone Pro Max: 400 CHF/mois</li>
                          <li>🚗 Véhicule fonction: 600 CHF/mois</li>
                          <li>🏥 Assurance Al-Aman: 280 CHF/mois</li>
                          <li>📚 Formation: 200 CHF/mois</li>
                        </ul>
                        <div className="mt-2 pt-2 border-t font-bold">
                          Package total: {(salary.net + 1480).toFixed(2)} CHF/mois
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </CardContent>
            </Card>

            {/* Avantages */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Avantages Sociaux
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {contractData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Génération Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={generateContract} 
                  disabled={isGenerating}
                  className="w-full"
                >
                  {isGenerating ? 'Génération...' : 'Télécharger Contrat CDI'}
                </Button>
                
                <Button 
                  onClick={generatePayslip} 
                  variant="outline"
                  className="w-full"
                >
                  Télécharger Fiche de Paie
                </Button>

                <div className="text-xs text-gray-500 text-center">
                  Documents conformes au Code du travail suisse
                  <br />
                  Validation juridique Hanaé-Denise Ozel
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}