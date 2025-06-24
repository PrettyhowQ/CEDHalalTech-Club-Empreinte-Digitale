import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Shield, 
  Heart, 
  Car, 
  Home, 
  Briefcase, 
  CheckCircle, 
  Euro,
  Calendar,
  Phone,
  Mail,
  MapPin,
  FileText,
  Clock,
  Star,
  Crown,
  Building2,
  Users,
  Globe
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CEDFooter } from './CEDFooter';

interface TakafulPolicy {
  policyId: string;
  employeId: string;
  nom: string;
  prenom: string;
  fonction: string;
  policyType: 'vie' | 'sante' | 'automobile' | 'habitation' | 'responsabilite' | 'voyage' | 'invalidite';
  coverage: number;
  monthlyContribution: number;
  status: 'active' | 'pending' | 'suspended';
  startDate: string;
  endDate: string;
  beneficiaires: string[];
  shariahCompliant: boolean;
  premiumTier: 'basic' | 'premium' | 'executive' | 'director';
}

interface DirectorAccount {
  accountId: string;
  accountType: 'professionnel' | 'personnel';
  nom: string;
  fonction: string;
  benefits: string[];
  privileges: string[];
  bankAccount: {
    accountNumber: string;
    iban: string;
    accountType: string;
    monthlyLimit: number;
  };
  takafulCoverage: {
    total: number;
    policies: string[];
  };
}

const employeePolicies: TakafulPolicy[] = [
  {
    policyId: 'ALM-CED-002-VIE',
    employeId: 'CED-002',
    nom: 'Yakoubi',
    prenom: 'Brahim',
    fonction: 'Gérant Association',
    policyType: 'vie',
    coverage: 500000,
    monthlyContribution: 125,
    status: 'active',
    startDate: '2024-06-24',
    endDate: '2025-06-24',
    beneficiaires: ['Famille Yakoubi'],
    shariahCompliant: true,
    premiumTier: 'executive'
  },
  {
    policyId: 'ALM-CED-002-SANTE',
    employeId: 'CED-002',
    nom: 'Yakoubi',
    prenom: 'Brahim',
    fonction: 'Gérant Association',
    policyType: 'sante',
    coverage: 100000,
    monthlyContribution: 85,
    status: 'active',
    startDate: '2024-06-24',
    endDate: '2025-06-24',
    beneficiaires: ['Brahim Yakoubi'],
    shariahCompliant: true,
    premiumTier: 'executive'
  },
  {
    policyId: 'ALM-CED-003-VIE',
    employeId: 'CED-003',
    nom: 'Yakoubi Ozel',
    prenom: 'Souheila',
    fonction: 'Responsable Santé',
    policyType: 'vie',
    coverage: 600000,
    monthlyContribution: 140,
    status: 'active',
    startDate: '2024-06-24',
    endDate: '2025-06-24',
    beneficiaires: ['Famille Yakoubi Ozel'],
    shariahCompliant: true,
    premiumTier: 'premium'
  },
  {
    policyId: 'ALM-CED-004-VIE',
    employeId: 'CED-004',
    nom: 'Kadjouf',
    prenom: 'Hanane',
    fonction: 'Secrétaire Direction',
    policyType: 'vie',
    coverage: 350000,
    monthlyContribution: 95,
    status: 'pending',
    startDate: '2024-06-24',
    endDate: '2025-06-24',
    beneficiaires: ['Famille Kadjouf'],
    shariahCompliant: true,
    premiumTier: 'basic'
  },
  {
    policyId: 'ALM-CED-005-VIE',
    employeId: 'CED-005',
    nom: '',
    prenom: 'Aziz',
    fonction: 'Logistique Suisse',
    policyType: 'vie',
    coverage: 400000,
    monthlyContribution: 110,
    status: 'active',
    startDate: '2024-06-24',
    endDate: '2025-06-24',
    beneficiaires: ['Famille Aziz'],
    shariahCompliant: true,
    premiumTier: 'premium'
  },
  {
    policyId: 'ALM-CED-006-VIE',
    employeId: 'CED-006',
    nom: '',
    prenom: 'Abdelkarim',
    fonction: 'Logistique Europe',
    policyType: 'vie',
    coverage: 450000,
    monthlyContribution: 120,
    status: 'active',
    startDate: '2024-06-24',
    endDate: '2025-06-24',
    beneficiaires: ['Famille Abdelkarim'],
    shariahCompliant: true,
    premiumTier: 'premium'
  }
];

const directorAccounts: DirectorAccount[] = [
  {
    accountId: 'CED-DIR-001-PRO',
    accountType: 'professionnel',
    nom: 'Yakoubi Yamina',
    fonction: 'Directrice & Fondatrice Club Empreinte Digitale',
    benefits: [
      'Compte illimité CED Bank Royal',
      'Carte Platinum World Elite',
      'Conciergerie 24/7 internationale',
      'Assurance voyage premium',
      'Protection juridique internationale',
      'Conseiller financier dédié',
      'Accès salons VIP mondiaux',
      'Service chauffeur prioritaire'
    ],
    privileges: [
      'Autorisation toutes transactions',
      'Accès comptes de l\'organisation',
      'Gestion équipe bancaire',
      'Validation virements importants',
      'Administration Takaful collective',
      'Représentation officielle CED'
    ],
    bankAccount: {
      accountNumber: 'CED240001001-PRO',
      iban: 'CH91 0483 5012 3456 7890 1',
      accountType: 'CED Royal Business',
      monthlyLimit: 0 // Illimité
    },
    takafulCoverage: {
      total: 2000000,
      policies: ['Vie', 'Santé', 'Responsabilité Civile', 'Protection Entreprise', 'Cyber-risques']
    }
  },
  {
    accountId: 'CED-DIR-001-PERS',
    accountType: 'personnel',
    nom: 'Yakoubi Yamina',
    fonction: 'Directrice & Fondatrice Club Empreinte Digitale',
    benefits: [
      'Compte personnel CED Bank Royal',
      'Carte Black exclusive',
      'Épargne halal premium 4% annuel',
      'Investissements Sharia premium',
      'Assurance famille complète',
      'Protection patrimoine',
      'Service bancaire privé',
      'Gestion fortune éthique'
    ],
    privileges: [
      'Accès services exclusifs',
      'Priorité absolue support',
      'Produits sur mesure',
      'Conditions privilégiées',
      'Conseil patrimonial dédié',
      'Succession planifiée'
    ],
    bankAccount: {
      accountNumber: 'CED240001001-PERS',
      iban: 'CH91 0483 5012 3456 7891 1',
      accountType: 'CED Royal Personal',
      monthlyLimit: 500000
    },
    takafulCoverage: {
      total: 1500000,
      policies: ['Vie Personnelle', 'Santé Premium', 'Habitation', 'Automobile', 'Voyage']
    }
  }
];

export function AlAmanTakafulInsurance() {
  const [selectedPolicy, setSelectedPolicy] = useState<TakafulPolicy | null>(null);
  const [selectedDirectorAccount, setSelectedDirectorAccount] = useState<DirectorAccount | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const getPolicyTypeColor = (type: string) => {
    switch (type) {
      case 'vie': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'sante': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'automobile': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'habitation': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'voyage': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'suspended': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const activatePolicy = (policyId: string) => {
    setIsProcessing(true);
    setTimeout(() => {
      alert(`Police Takaful activée !\n\nPolice: ${policyId}\nCouverture Sharia conforme\nContributions mensuelles automatiques`);
      setIsProcessing(false);
    }, 2000);
  };

  const processGroupInsurance = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const totalCoverage = employeePolicies.reduce((sum, policy) => sum + policy.coverage, 0);
      const totalContributions = employeePolicies.reduce((sum, policy) => sum + policy.monthlyContribution, 0);
      alert(`Assurance collective Al-Aman activée !\n\nCouverture totale: CHF ${totalCoverage.toLocaleString()}\nContributions mensuelles: CHF ${totalContributions}\nTous employés protégés`);
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
            Al-Aman CED Takaful
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Assurance islamique complète pour Club Empreinte Digitale
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
              🛡️ Takaful Sharia
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              👥 Protection Collective
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              🌟 Couverture Premium
            </Badge>
          </div>
        </motion.div>

        {/* Comptes Direction */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Crown className="h-6 w-6 text-yellow-600" />
            Comptes Direction - Yakoubi Yamina
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {directorAccounts.map((account, index) => (
              <motion.div
                key={account.accountId}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full border-2 border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
                          <Crown className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-yellow-800 dark:text-yellow-200">
                            Compte {account.accountType.charAt(0).toUpperCase() + account.accountType.slice(1)}
                          </CardTitle>
                          <CardDescription className="font-medium">
                            {account.nom} - {account.fonction}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                        Directrice
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Building2 className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">{account.bankAccount.accountNumber}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Shield className="h-4 w-4 text-gray-500" />
                        <span className="font-semibold text-green-600">
                          Takaful: CHF {account.takafulCoverage.total.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Euro className="h-4 w-4 text-gray-500" />
                        <span>
                          Limite: {account.bankAccount.monthlyLimit === 0 ? 'Illimitée' : `CHF ${account.bankAccount.monthlyLimit.toLocaleString()}`}
                        </span>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Avantages Exclusifs:</h4>
                      <div className="grid grid-cols-1 gap-1 text-xs">
                        {account.benefits.slice(0, 4).map((benefit, i) => (
                          <div key={i} className="flex items-center gap-1">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => setSelectedDirectorAccount(account)}
                      className="w-full border-yellow-300 text-yellow-700 hover:bg-yellow-100"
                    >
                      <FileText className="h-4 w-4 mr-1" />
                      Voir Détails Complets
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Statistiques */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Polices Actives</CardTitle>
              <Shield className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {employeePolicies.filter(pol => pol.status === 'active').length + 2}
              </div>
              <p className="text-xs text-emerald-100">Direction + Équipe</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Couverture Totale</CardTitle>
              <Euro className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                CHF {(employeePolicies.reduce((sum, pol) => sum + pol.coverage, 0) + 3500000).toLocaleString()}
              </div>
              <p className="text-xs text-blue-100">Protection complète</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Contributions</CardTitle>
              <Calendar className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                CHF {(employeePolicies.reduce((sum, pol) => sum + pol.monthlyContribution, 0) + 450).toLocaleString()}
              </div>
              <p className="text-xs text-purple-100">Par mois</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conformité</CardTitle>
              <CheckCircle className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">100%</div>
              <p className="text-xs text-orange-100">Sharia compliant</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Polices Employés */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        >
          {employeePolicies.map((policy, index) => (
            <motion.div
              key={policy.policyId}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                        <Shield className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {policy.prenom} {policy.nom}
                        </CardTitle>
                        <CardDescription className="font-medium">
                          {policy.fonction}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className={getStatusColor(policy.status)}>
                      {policy.status === 'active' ? 'Active' : 
                       policy.status === 'pending' ? 'En attente' : 'Suspendue'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">{policy.policyId}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="h-4 w-4 text-gray-500" />
                      <span className="font-semibold text-green-600">
                        CHF {policy.coverage.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Euro className="h-4 w-4 text-gray-500" />
                      <span>CHF {policy.monthlyContribution}/mois</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>Jusqu'au {new Date(policy.endDate).toLocaleDateString('fr-FR')}</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <Badge className={getPolicyTypeColor(policy.policyType)} variant="outline">
                      {policy.policyType.charAt(0).toUpperCase() + policy.policyType.slice(1)}
                    </Badge>
                    {policy.shariahCompliant && (
                      <Badge variant="outline" className="ml-2 text-xs text-green-600">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Halal
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => setSelectedPolicy(policy)}
                      className="flex-1"
                    >
                      <FileText className="h-4 w-4 mr-1" />
                      Détails
                    </Button>
                    {policy.status !== 'active' && (
                      <Button 
                        size="sm"
                        onClick={() => activatePolicy(policy.policyId)}
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
                <Shield className="h-5 w-5" />
                Administration Takaful Al-Aman CED
              </CardTitle>
              <CardDescription>
                Gestion assurance islamique collective Club Empreinte Digitale
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button 
                  onClick={processGroupInsurance}
                  disabled={isProcessing}
                  className="h-auto p-4 flex flex-col items-center gap-2 bg-emerald-600 hover:bg-emerald-700"
                >
                  {isProcessing ? (
                    <>
                      <Clock className="h-6 w-6 animate-spin" />
                      <span className="text-sm">Activation...</span>
                    </>
                  ) : (
                    <>
                      <Users className="h-6 w-6" />
                      <span className="text-sm">Activer Tout</span>
                    </>
                  )}
                </Button>
                
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Heart className="h-6 w-6" />
                  <span className="text-sm">Santé Collective</span>
                </Button>
                
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <FileText className="h-6 w-6" />
                  <span className="text-sm">Rapports Takaful</span>
                </Button>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-emerald-800 dark:text-emerald-200 mb-1">
                      Principes Takaful & Avantages Premium
                    </h4>
                    <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-3">
                      Al-Aman CED Takaful respecte strictement les principes islamiques : 
                      mutualité, transparence, partage des risques selon la Sharia. 
                      Supervisé par notre conseil Sharia et certifié AAOIFI/IFSB.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div>
                        <strong>Couvertures Spéciales Direction:</strong>
                        <ul className="mt-1 space-y-0.5">
                          <li>• Protection cyber-risques</li>
                          <li>• Responsabilité dirigeant</li>
                          <li>• Défense recours</li>
                          <li>• Assistance juridique internationale</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Services Exclusifs:</strong>
                        <ul className="mt-1 space-y-0.5">
                          <li>• Rapatriement sanitaire premium</li>
                          <li>• Seconde opinion médicale</li>
                          <li>• Assistance voyage 24/7</li>
                          <li>• Protection famille étendue</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Modal Détails Police */}
        {selectedPolicy && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedPolicy(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">
                  Police Takaful - {selectedPolicy.prenom} {selectedPolicy.nom}
                </h3>
                <Button variant="ghost" size="sm" onClick={() => setSelectedPolicy(null)}>
                  ✕
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-500">Numéro police:</span>
                    <p className="font-mono">{selectedPolicy.policyId}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">Type:</span>
                    <p><Badge className={getPolicyTypeColor(selectedPolicy.policyType)}>
                      {selectedPolicy.policyType.charAt(0).toUpperCase() + selectedPolicy.policyType.slice(1)}
                    </Badge></p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">Couverture:</span>
                    <p className="font-semibold text-green-600">CHF {selectedPolicy.coverage.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">Contribution:</span>
                    <p>CHF {selectedPolicy.monthlyContribution}/mois</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">Début:</span>
                    <p>{new Date(selectedPolicy.startDate).toLocaleDateString('fr-FR')}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">Fin:</span>
                    <p>{new Date(selectedPolicy.endDate).toLocaleDateString('fr-FR')}</p>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <span className="font-medium text-gray-500">Bénéficiaires:</span>
                  <div className="mt-1">
                    {selectedPolicy.beneficiaires.map((beneficiaire, i) => (
                      <Badge key={i} variant="outline" className="mr-1 mb-1">
                        {beneficiaire}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Modal Détails Compte Directrice */}
        {selectedDirectorAccount && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedDirectorAccount(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Crown className="h-5 w-5 text-yellow-600" />
                  Compte {selectedDirectorAccount.accountType} - {selectedDirectorAccount.nom}
                </h3>
                <Button variant="ghost" size="sm" onClick={() => setSelectedDirectorAccount(null)}>
                  ✕
                </Button>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      Informations Bancaires
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-500">Compte:</span>
                        <p className="font-mono">{selectedDirectorAccount.bankAccount.accountNumber}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">IBAN:</span>
                        <p className="font-mono text-xs">{selectedDirectorAccount.bankAccount.iban}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Type:</span>
                        <p className="font-semibold">{selectedDirectorAccount.bankAccount.accountType}</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Couverture Takaful
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-500">Total:</span>
                        <p className="font-semibold text-green-600">
                          CHF {selectedDirectorAccount.takafulCoverage.total.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <span className="text-gray-500">Polices:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selectedDirectorAccount.takafulCoverage.policies.map((policy, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {policy}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-emerald-700">Avantages Exclusifs</h4>
                    <div className="space-y-1 text-sm">
                      {selectedDirectorAccount.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700">Privilèges Direction</h4>
                    <div className="space-y-1 text-sm">
                      {selectedDirectorAccount.privileges.map((privilege, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Star className="h-3 w-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span>{privilege}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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