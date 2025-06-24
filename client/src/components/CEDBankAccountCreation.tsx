import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Building2, 
  CreditCard, 
  CheckCircle, 
  User, 
  Shield, 
  Euro,
  Calendar,
  Key,
  Smartphone,
  Mail,
  MapPin,
  FileText,
  Clock,
  Star
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CEDFooter } from './CEDFooter';

interface EmployeeBankAccount {
  employeId: string;
  nom: string;
  prenom: string;
  fonction: string;
  salaire: number;
  accountNumber: string;
  iban: string;
  bic: string;
  accountType: 'halal_essential' | 'halal_premium' | 'halal_business' | 'halal_executive' | 'halal_royal';
  status: 'pending' | 'approved' | 'active';
  monthlyAutoTransfer: boolean;
  cardType: string;
  createdDate: string;
  lastSalaryTransfer: string;
}

const employees = [
  {
    id: 'CED-002',
    nom: 'Yakoubi',
    prenom: 'Brahim',
    fonction: 'Gérant Association',
    salaire: 6200,
    region: 'Espagne & Europe',
    email: 'brahim.gerant@empreintedigitale.club',
    phone: '+34 XXX XXX XXX'
  },
  {
    id: 'CED-003',
    nom: 'Yakoubi Ozel',
    prenom: 'Souheila',
    fonction: 'Responsable Santé',
    salaire: 7200,
    region: 'International',
    email: 'souheila.sante@empreintedigitale.club',
    phone: '+33 X XX XX XX XX'
  },
  {
    id: 'CED-004',
    nom: 'Kadjouf',
    prenom: 'Hanane',
    fonction: 'Secrétaire Direction',
    salaire: 5500,
    region: 'Espagne & Europe',
    email: 'hanane.secretaire@empreintedigitale.club',
    phone: '+34 XXX XXX XXX'
  },
  {
    id: 'CED-005',
    nom: '',
    prenom: 'Aziz',
    fonction: 'Logistique Suisse',
    salaire: 6500,
    region: 'Suisse',
    email: 'aziz.logistique.suisse@empreintedigitale.club',
    phone: '+41 XX XXX XX XX'
  },
  {
    id: 'CED-006',
    nom: '',
    prenom: 'Abdelkarim',
    fonction: 'Logistique Europe',
    salaire: 7800,
    region: 'Europe',
    email: 'abdelkarim.logistique.europe@empreintedigitale.club',
    phone: '+49 XXX XXX XXXX'
  }
];

const bankAccounts: EmployeeBankAccount[] = [
  {
    employeId: 'CED-002',
    nom: 'Yakoubi',
    prenom: 'Brahim',
    fonction: 'Gérant Association',
    salaire: 6200,
    accountNumber: 'CED240001002',
    iban: 'CH91 0483 5012 3456 7890 2',
    bic: 'CEDBCHZZ',
    accountType: 'halal_business',
    status: 'active',
    monthlyAutoTransfer: true,
    cardType: 'CED Business Halal',
    createdDate: '2024-06-24',
    lastSalaryTransfer: '2024-06-01'
  },
  {
    employeId: 'CED-003',
    nom: 'Yakoubi Ozel',
    prenom: 'Souheila',
    fonction: 'Responsable Santé',
    salaire: 7200,
    accountNumber: 'CED240001003',
    iban: 'CH91 0483 5012 3456 7890 3',
    bic: 'CEDBCHZZ',
    accountType: 'halal_premium',
    status: 'active',
    monthlyAutoTransfer: true,
    cardType: 'CED Premium Halal',
    createdDate: '2024-06-24',
    lastSalaryTransfer: '2024-06-01'
  },
  {
    employeId: 'CED-004',
    nom: 'Kadjouf',
    prenom: 'Hanane',
    fonction: 'Secrétaire Direction',
    salaire: 5500,
    accountNumber: 'CED240001004',
    iban: 'CH91 0483 5012 3456 7890 4',
    bic: 'CEDBCHZZ',
    accountType: 'halal_essential',
    status: 'pending',
    monthlyAutoTransfer: true,
    cardType: 'CED Essential Halal',
    createdDate: '2024-06-24',
    lastSalaryTransfer: 'N/A'
  },
  {
    employeId: 'CED-005',
    nom: '',
    prenom: 'Aziz',
    fonction: 'Logistique Suisse',
    salaire: 6500,
    accountNumber: 'CED240001005',
    iban: 'CH91 0483 5012 3456 7890 5',
    bic: 'CEDBCHZZ',
    accountType: 'halal_business',
    status: 'approved',
    monthlyAutoTransfer: true,
    cardType: 'CED Business Halal',
    createdDate: '2024-06-24',
    lastSalaryTransfer: 'N/A'
  },
  {
    employeId: 'CED-006',
    nom: '',
    prenom: 'Abdelkarim',
    fonction: 'Logistique Europe',
    salaire: 7800,
    accountNumber: 'CED240001006',
    iban: 'CH91 0483 5012 3456 7890 6',
    bic: 'CEDBCHZZ',
    accountType: 'halal_executive',
    status: 'approved',
    monthlyAutoTransfer: true,
    cardType: 'CED Executive Halal',
    createdDate: '2024-06-24',
    lastSalaryTransfer: 'N/A'
  }
];

export function CEDBankAccountCreation() {
  const [selectedAccount, setSelectedAccount] = useState<EmployeeBankAccount | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const getAccountTypeColor = (type: string) => {
    switch (type) {
      case 'halal_essential': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'halal_premium': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'halal_business': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'halal_executive': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'halal_royal': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'approved': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const activateAccount = (accountId: string) => {
    setIsProcessing(true);
    setTimeout(() => {
      // Simulation activation
      alert(`Compte CED Bank activé pour ${accountId}\nVirement automatique mensuel configuré\nCarte bancaire Halal en cours d'expédition`);
      setIsProcessing(false);
    }, 2000);
  };

  const processSalaryTransfer = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const totalTransfers = bankAccounts.reduce((sum, account) => sum + account.salaire, 0);
      alert(`Virements salaires effectués !\n\nTotal transféré: CHF ${totalTransfers.toLocaleString()}\n${bankAccounts.length} comptes crédités\nConforme réglementation bancaire suisse`);
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            CED Bank - Comptes Employés
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Comptes bancaires halal avec virements automatiques
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
              🏛️ Banking Halal
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              🔄 Virements Auto
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              🇨🇭 Conforme Suisse
            </Badge>
          </div>
        </motion.div>

        {/* Statistiques */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Comptes Actifs</CardTitle>
              <Building2 className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {bankAccounts.filter(acc => acc.status === 'active').length}
              </div>
              <p className="text-xs text-emerald-100">Sur {bankAccounts.length} total</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Virements Mensuels</CardTitle>
              <Euro className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                CHF {bankAccounts.reduce((sum, acc) => sum + acc.salaire, 0).toLocaleString()}
              </div>
              <p className="text-xs text-blue-100">Total automatique</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cartes Halal</CardTitle>
              <CreditCard className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{bankAccounts.length}</div>
              <p className="text-xs text-purple-100">0% intérêt</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conformité</CardTitle>
              <Shield className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">100%</div>
              <p className="text-xs text-orange-100">Sharia compliant</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Liste des Comptes */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        >
          {bankAccounts.map((account, index) => (
            <motion.div
              key={account.employeId}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                        <Building2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {account.prenom} {account.nom}
                        </CardTitle>
                        <CardDescription className="font-medium">
                          {account.fonction}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className={getStatusColor(account.status)}>
                      {account.status === 'active' ? 'Actif' : 
                       account.status === 'approved' ? 'Approuvé' : 'En attente'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CreditCard className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">{account.accountNumber}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Key className="h-4 w-4 text-gray-500" />
                      <span className="font-mono text-xs">{account.iban}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Euro className="h-4 w-4 text-gray-500" />
                      <span className="font-semibold text-green-600">CHF {account.salaire.toLocaleString()}/mois</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>Dernier virement: {account.lastSalaryTransfer}</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <Badge className={getAccountTypeColor(account.accountType)} variant="outline">
                      {account.cardType}
                    </Badge>
                    {account.monthlyAutoTransfer && (
                      <Badge variant="outline" className="ml-2 text-xs">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Auto
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => setSelectedAccount(account)}
                      className="flex-1"
                    >
                      <FileText className="h-4 w-4 mr-1" />
                      Détails
                    </Button>
                    {account.status !== 'active' && (
                      <Button 
                        size="sm"
                        onClick={() => activateAccount(account.employeId)}
                        disabled={isProcessing}
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Activer
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Actions Globales */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Euro className="h-5 w-5" />
                Gestion Salaires & Virements
              </CardTitle>
              <CardDescription>
                Administration bancaire automatisée CED Bank
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button 
                  onClick={processSalaryTransfer}
                  disabled={isProcessing}
                  className="h-auto p-4 flex flex-col items-center gap-2 bg-emerald-600 hover:bg-emerald-700"
                >
                  {isProcessing ? (
                    <>
                      <Clock className="h-6 w-6 animate-spin" />
                      <span className="text-sm">Traitement...</span>
                    </>
                  ) : (
                    <>
                      <Euro className="h-6 w-6" />
                      <span className="text-sm">Virer Salaires</span>
                    </>
                  )}
                </Button>
                
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <CreditCard className="h-6 w-6" />
                  <span className="text-sm">Gérer Cartes</span>
                </Button>
                
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <FileText className="h-6 w-6" />
                  <span className="text-sm">Relevés Bancaires</span>
                </Button>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-emerald-800 dark:text-emerald-200 mb-1">
                      Conformité Bancaire Halal & Avantages Premium
                    </h4>
                    <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-3">
                      Tous les comptes sont conformes aux principes de la finance islamique : 
                      0% intérêt, pas de spéculation, investissements éthiques uniquement. 
                      Supervisé par notre comité Sharia et conforme aux standards AAOIFI.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div>
                        <strong>Avantages Exclusifs:</strong>
                        <ul className="mt-1 space-y-0.5">
                          <li>• Accès prioritaire services CED</li>
                          <li>• Réductions partenaires halal</li>
                          <li>• Conseiller financier dédié</li>
                          <li>• Investissements conformes Sharia</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Services Premium:</strong>
                        <ul className="mt-1 space-y-0.5">
                          <li>• Carte Platinum sans limite</li>
                          <li>• Assurance santé internationale</li>
                          <li>• Protection juridique incluse</li>
                          <li>• Support famille 24/7</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Modal Détails Compte */}
        {selectedAccount && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedAccount(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">
                  Compte CED Bank - {selectedAccount.prenom} {selectedAccount.nom}
                </h3>
                <Button variant="ghost" size="sm" onClick={() => setSelectedAccount(null)}>
                  ✕
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-500">Numéro de compte:</span>
                    <p className="font-mono">{selectedAccount.accountNumber}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">Type de compte:</span>
                    <p><Badge className={getAccountTypeColor(selectedAccount.accountType)}>
                      {selectedAccount.cardType}
                    </Badge></p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">IBAN:</span>
                    <p className="font-mono text-xs">{selectedAccount.iban}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">BIC/SWIFT:</span>
                    <p className="font-mono">{selectedAccount.bic}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">Salaire mensuel:</span>
                    <p className="font-semibold text-green-600">CHF {selectedAccount.salaire.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">Statut:</span>
                    <p><Badge className={getStatusColor(selectedAccount.status)}>
                      {selectedAccount.status === 'active' ? 'Actif' : 
                       selectedAccount.status === 'approved' ? 'Approuvé' : 'En attente'}
                    </Badge></p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">Ouverture:</span>
                    <p>{new Date(selectedAccount.createdDate).toLocaleDateString('fr-FR')}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">Dernier virement:</span>
                    <p>{selectedAccount.lastSalaryTransfer}</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
                    Services Inclus & Avantages
                  </h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Virement automatique mensuel</li>
                    <li>• Carte bancaire halal sans frais</li>
                    <li>• Application mobile CED Bank</li>
                    <li>• Support client 24/7 multilingue</li>
                    <li>• Relevés électroniques sécurisés</li>
                    <li>• Assurance voyage incluse</li>
                    <li>• Cashback halal sur achats éthiques</li>
                    <li>• Accès salons VIP aéroports</li>
                    <li>• Conciergerie personnalisée</li>
                    <li>• Protection anti-fraude avancée</li>
                    <li>• Virements internationaux gratuits</li>
                    <li>• Compte épargne halal 3% annuel</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
      
      <CEDFooter />
    </div>
  );
}