import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Heart,
  Zap,
  TrendingDown,
  Users,
  DollarSign,
  RefreshCw,
  Eye,
  Download,
  Clock,
  Target,
  Globe,
  Droplets,
  Filter
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SuspiciousTransaction {
  id: string;
  amount: number;
  currency: string;
  source: string;
  destination: string;
  type: 'interest' | 'gambling' | 'alcohol' | 'pork' | 'speculation' | 'uncertain';
  suspicionLevel: number; // 0-100
  detectedAt: Date;
  status: 'detected' | 'investigating' | 'confirmed' | 'purified' | 'cleared';
  evidences: string[];
  purificationAmount?: number;
  distributionPlan?: DistributionPlan;
}

interface DistributionPlan {
  category: string;
  recipients: PurificationRecipient[];
  totalAmount: number;
  distributionDate: Date;
  verificationRequired: boolean;
}

interface PurificationRecipient {
  id: string;
  category: 'poor' | 'needy' | 'zakat_workers' | 'new_muslims' | 'slaves' | 'debtors' | 'fi_sabilillah' | 'travelers';
  name: string;
  location: string;
  amount: number;
  verified: boolean;
  distributedAt?: Date;
  receiptUrl?: string;
}

interface PurificationReport {
  period: string;
  totalSuspicious: number;
  totalPurified: number;
  totalDistributed: number;
  beneficiaries: number;
  complianceRate: number;
  categories: {
    category: string;
    amount: number;
    recipients: number;
  }[];
}

export default function AutomaticPurificationSystem() {
  const [suspiciousTransactions, setSuspiciousTransactions] = useState<SuspiciousTransaction[]>([]);
  const [purificationReports, setPurificationReports] = useState<PurificationReport[]>([]);
  const [systemStatus, setSystemStatus] = useState({
    active: true,
    lastScan: new Date(),
    totalScanned: 15420,
    detectionRate: 0.03, // 0.03% de transactions suspectes
    purificationRate: 98.5,
    responseTime: 1.2 // minutes
  });
  const { toast } = useToast();

  const zakatCategories = [
    { id: 'poor', name: 'الفقراء', english: 'The Poor', percentage: 25, description: 'Ceux qui n\'ont pas les moyens de subsistance' },
    { id: 'needy', name: 'المساكين', english: 'The Needy', percentage: 25, description: 'Ceux dans le besoin urgent' },
    { id: 'zakat_workers', name: 'العاملون عليها', english: 'Zakat Workers', percentage: 10, description: 'Administrateurs et collecteurs de Zakat' },
    { id: 'new_muslims', name: 'المؤلفة قلوبهم', english: 'New Muslims', percentage: 10, description: 'Nouveaux convertis à l\'Islam' },
    { id: 'slaves', name: 'في الرقاب', english: 'Freeing Slaves', percentage: 5, description: 'Libération d\'esclaves (moderne: aide dettes)' },
    { id: 'debtors', name: 'الغارمون', english: 'Debtors', percentage: 10, description: 'Ceux endettés sans faute' },
    { id: 'fi_sabilillah', name: 'في سبيل الله', english: 'In Allah\'s Path', percentage: 10, description: 'Œuvres caritatives et éducation' },
    { id: 'travelers', name: 'ابن السبيل', english: 'Travelers', percentage: 5, description: 'Voyageurs en détresse' }
  ];

  useEffect(() => {
    // Simulation de transactions suspectes détectées
    const suspiciousData: SuspiciousTransaction[] = [
      {
        id: 'SUSP001',
        amount: 1250.00,
        currency: 'CHF',
        source: 'External Bank Transfer',
        destination: 'CED Account #4521',
        type: 'interest',
        suspicionLevel: 95,
        detectedAt: new Date('2024-12-20T14:30:00'),
        status: 'confirmed',
        evidences: ['Source bank offers interest-based products', 'Transfer amount matches quarterly interest', 'Pattern consistent with savings interest'],
        purificationAmount: 1250.00,
        distributionPlan: {
          category: 'Intérêts bancaires détectés',
          recipients: [
            { id: 'REC001', category: 'poor', name: 'Association Al-Nour Genève', location: 'Genève, CH', amount: 312.50, verified: true },
            { id: 'REC002', category: 'needy', name: 'Famille Benali', location: 'Lausanne, CH', amount: 312.50, verified: true },
            { id: 'REC003', category: 'fi_sabilillah', name: 'École Islamique Zurich', location: 'Zurich, CH', amount: 625.00, verified: true }
          ],
          totalAmount: 1250.00,
          distributionDate: new Date('2024-12-21T10:00:00'),
          verificationRequired: true
        }
      },
      {
        id: 'SUSP002',
        amount: 450.75,
        currency: 'EUR',
        source: 'Trading Platform',
        destination: 'CED Account #7889',
        type: 'speculation',
        suspicionLevel: 78,
        detectedAt: new Date('2024-12-19T09:15:00'),
        status: 'investigating',
        evidences: ['High-frequency trading pattern', 'Leverage used in transactions', 'Speculative nature confirmed'],
        purificationAmount: 450.75
      },
      {
        id: 'SUSP003',
        amount: 89.20,
        currency: 'USD',
        source: 'Online Gambling Site',
        destination: 'CED Account #2334',
        type: 'gambling',
        suspicionLevel: 100,
        detectedAt: new Date('2024-12-18T22:45:00'),
        status: 'purified',
        evidences: ['Source identified as gambling platform', 'Transaction history shows betting pattern', 'User confirmed gambling winnings'],
        purificationAmount: 89.20,
        distributionPlan: {
          category: 'Gains de jeux détectés',
          recipients: [
            { id: 'REC004', category: 'poor', name: 'Centre Social Al-Khair', location: 'Berne, CH', amount: 89.20, verified: true, distributedAt: new Date('2024-12-19T08:00:00') }
          ],
          totalAmount: 89.20,
          distributionDate: new Date('2024-12-19T08:00:00'),
          verificationRequired: false
        }
      }
    ];

    setSuspiciousTransactions(suspiciousData);

    // Rapport de purification mensuel
    const monthlyReport: PurificationReport = {
      period: 'Décembre 2024',
      totalSuspicious: 47,
      totalPurified: 8750.45,
      totalDistributed: 8750.45,
      beneficiaries: 156,
      complianceRate: 100,
      categories: [
        { category: 'Intérêts bancaires', amount: 4200.30, recipients: 45 },
        { category: 'Gains spéculatifs', amount: 2800.15, recipients: 38 },
        { category: 'Revenus douteux', amount: 1250.00, recipients: 32 },
        { category: 'Commissions non-conformes', amount: 500.00, recipients: 41 }
      ]
    };

    setPurificationReports([monthlyReport]);
  }, []);

  const investigateTransaction = (transactionId: string) => {
    setSuspiciousTransactions(prev =>
      prev.map(tx =>
        tx.id === transactionId
          ? { ...tx, status: 'investigating' as const }
          : tx
      )
    );

    toast({
      title: "بدء التحقيق",
      description: "تم بدء التحقيق في المعاملة المشبوهة",
    });
  };

  const purifyTransaction = (transactionId: string) => {
    const transaction = suspiciousTransactions.find(tx => tx.id === transactionId);
    if (!transaction) return;

    // Calcul automatique de la distribution selon les 8 catégories
    const totalAmount = transaction.purificationAmount || transaction.amount;
    const recipients: PurificationRecipient[] = zakatCategories.map((category, index) => ({
      id: `REC${Date.now()}-${index}`,
      category: category.id as any,
      name: `Bénéficiaire ${category.english} #${index + 1}`,
      location: 'Suisse',
      amount: (totalAmount * category.percentage) / 100,
      verified: false
    }));

    const distributionPlan: DistributionPlan = {
      category: `Purification ${transaction.type}`,
      recipients,
      totalAmount,
      distributionDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // J+1
      verificationRequired: true
    };

    setSuspiciousTransactions(prev =>
      prev.map(tx =>
        tx.id === transactionId
          ? { 
              ...tx, 
              status: 'purified' as const,
              purificationAmount: totalAmount,
              distributionPlan 
            }
          : tx
      )
    );

    toast({
      title: "تم تطهير المعاملة",
      description: `تم تطهير ${totalAmount} ${transaction.currency} وتوزيعها حسب الضوابط الشرعية`,
    });
  };

  const getStatusColor = (status: string) => {
    const colors = {
      detected: 'bg-yellow-100 text-yellow-800',
      investigating: 'bg-blue-100 text-blue-800',
      confirmed: 'bg-red-100 text-red-800',
      purified: 'bg-green-100 text-green-800',
      cleared: 'bg-gray-100 text-gray-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'detected': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'investigating': return <Eye className="h-4 w-4 text-blue-500" />;
      case 'confirmed': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'purified': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'cleared': return <CheckCircle className="h-4 w-4 text-gray-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    const colors = {
      interest: 'bg-red-500',
      gambling: 'bg-purple-500',
      alcohol: 'bg-orange-500',
      pork: 'bg-pink-500',
      speculation: 'bg-yellow-500',
      uncertain: 'bg-gray-500'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-500';
  };

  const formatAmount = (amount: number, currency: string) => {
    return new Intl.NumberFormat('fr-CH', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Droplets className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">نظام التطهير التلقائي</h1>
              <h2 className="text-2xl font-semibold text-emerald-600">Système de Purification Automatique</h2>
              <p className="text-gray-600">Détection IA - Purification conforme Sharia - Distribution 8 catégories</p>
            </div>
          </div>
        </div>

        {/* Statut système */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                {systemStatus.active ? (
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                ) : (
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                )}
              </div>
              <div className="text-sm font-medium">
                {systemStatus.active ? 'Actif' : 'Inactif'}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{systemStatus.totalScanned.toLocaleString()}</div>
              <div className="text-xs text-gray-600">Transactions Scannées</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">{(systemStatus.detectionRate * 100).toFixed(2)}%</div>
              <div className="text-xs text-gray-600">Taux Détection</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{systemStatus.purificationRate}%</div>
              <div className="text-xs text-gray-600">Taux Purification</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{systemStatus.responseTime}min</div>
              <div className="text-xs text-gray-600">Temps Réponse</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-emerald-600">
                {suspiciousTransactions.filter(tx => tx.status === 'purified').length}
              </div>
              <div className="text-xs text-gray-600">Purifiées Aujourd'hui</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="detection" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="detection">كشف المشبوه</TabsTrigger>
            <TabsTrigger value="purification">التطهير</TabsTrigger>
            <TabsTrigger value="distribution">التوزيع</TabsTrigger>
            <TabsTrigger value="reports">التقارير</TabsTrigger>
          </TabsList>

          {/* Détection */}
          <TabsContent value="detection" className="space-y-6">
            <div className="space-y-4">
              {suspiciousTransactions.map((transaction) => (
                <Card key={transaction.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(transaction.status)}
                        <div>
                          <CardTitle className="text-lg">{transaction.id}</CardTitle>
                          <p className="text-sm text-gray-600">
                            {transaction.source} → {transaction.destination}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(transaction.status)}>
                          {transaction.status === 'detected' ? 'Détecté' :
                           transaction.status === 'investigating' ? 'Investigation' :
                           transaction.status === 'confirmed' ? 'Confirmé' :
                           transaction.status === 'purified' ? 'Purifié' : 'Écarté'}
                        </Badge>
                        <div className={`w-3 h-3 ${getTypeColor(transaction.type)} rounded-full mt-1 ml-auto`}></div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <span className="text-sm text-gray-600">Montant:</span>
                          <div className="font-semibold text-lg">
                            {formatAmount(transaction.amount, transaction.currency)}
                          </div>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">Type:</span>
                          <div className="font-medium capitalize">{transaction.type}</div>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">Suspicion:</span>
                          <div className="font-medium">{transaction.suspicionLevel}%</div>
                          <Progress value={transaction.suspicionLevel} className="mt-1" />
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">Détecté:</span>
                          <div className="font-medium text-xs">
                            {transaction.detectedAt.toLocaleDateString('fr-FR')}
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-gray-600 mb-2">Preuves détectées:</div>
                        <div className="space-y-1">
                          {transaction.evidences.map((evidence, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <AlertTriangle className="h-3 w-3 text-red-500" />
                              <span>{evidence}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-3 border-t">
                        {transaction.status === 'detected' && (
                          <Button size="sm" onClick={() => investigateTransaction(transaction.id)}>
                            <Eye className="h-4 w-4 mr-2" />
                            Investiguer
                          </Button>
                        )}
                        {(transaction.status === 'confirmed' || transaction.status === 'investigating') && (
                          <Button size="sm" onClick={() => purifyTransaction(transaction.id)}>
                            <Droplets className="h-4 w-4 mr-2" />
                            Purifier
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Détails
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Purification */}
          <TabsContent value="purification" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Processus de Purification Automatique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-blue-800">1. Détection IA</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Analyse en temps réel des transactions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Identification sources non-conformes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Classification automatique des risques</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-purple-800">2. Validation Sharia</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Vérification par Conseil Sharia</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Application standards AAOIFI</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Documentation complète des preuves</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-emerald-800">3. Distribution</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Répartition 8 catégories coraniques</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Vérification identité bénéficiaires</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Traçabilité complète des dons</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Types de Revenus Purifiés</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="p-4 border border-red-200 rounded-lg">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mb-3">
                      <DollarSign className="h-4 w-4 text-white" />
                    </div>
                    <div className="font-semibold text-red-800">Intérêts Bancaires</div>
                    <div className="text-sm text-red-600">Revenus d'intérêts détectés automatiquement</div>
                  </div>

                  <div className="p-4 border border-purple-200 rounded-lg">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mb-3">
                      <TrendingDown className="h-4 w-4 text-white" />
                    </div>
                    <div className="font-semibold text-purple-800">Gains de Jeux</div>
                    <div className="text-sm text-purple-600">Profits de gambling et paris</div>
                  </div>

                  <div className="p-4 border border-yellow-200 rounded-lg">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mb-3">
                      <Zap className="h-4 w-4 text-white" />
                    </div>
                    <div className="font-semibold text-yellow-800">Spéculation</div>
                    <div className="text-sm text-yellow-600">Trading haute fréquence et leverage</div>
                  </div>

                  <div className="p-4 border border-orange-200 rounded-lg">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mb-3">
                      <AlertTriangle className="h-4 w-4 text-white" />
                    </div>
                    <div className="font-semibold text-orange-800">Secteurs Haram</div>
                    <div className="text-sm text-orange-600">Alcool, porc, secteurs interdits</div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center mb-3">
                      <Eye className="h-4 w-4 text-white" />
                    </div>
                    <div className="font-semibold text-gray-800">Revenus Incertains</div>
                    <div className="text-sm text-gray-600">Sources douteuses nécessitant investigation</div>
                  </div>

                  <div className="p-4 border border-blue-200 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mb-3">
                      <RefreshCw className="h-4 w-4 text-white" />
                    </div>
                    <div className="font-semibold text-blue-800">Commissions</div>
                    <div className="text-sm text-blue-600">Frais et commissions non-conformes</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Distribution */}
          <TabsContent value="distribution" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  الأصناف الثمانية للزكاة - 8 Catégories de Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {zakatCategories.map((category) => (
                    <div key={category.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="font-semibold">{category.name}</div>
                          <div className="text-sm text-gray-600">{category.english}</div>
                        </div>
                        <Badge variant="outline">{category.percentage}%</Badge>
                      </div>
                      <p className="text-xs text-gray-700">{category.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {suspiciousTransactions
                .filter(tx => tx.distributionPlan)
                .map((transaction) => (
                <Card key={transaction.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Distribution - {transaction.id}
                    </CardTitle>
                    <p className="text-sm text-gray-600">
                      {formatAmount(transaction.distributionPlan!.totalAmount, transaction.currency)}
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {transaction.distributionPlan!.recipients.map((recipient) => (
                        <div key={recipient.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                          <div>
                            <div className="font-medium text-sm">{recipient.name}</div>
                            <div className="text-xs text-gray-600">{recipient.location}</div>
                            <Badge variant="outline" className="text-xs mt-1">
                              {zakatCategories.find(c => c.id === recipient.category)?.name}
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">
                              {formatAmount(recipient.amount, transaction.currency)}
                            </div>
                            {recipient.verified ? (
                              <CheckCircle className="h-4 w-4 text-green-500 ml-auto mt-1" />
                            ) : (
                              <Clock className="h-4 w-4 text-yellow-500 ml-auto mt-1" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Rapports */}
          <TabsContent value="reports" className="space-y-6">
            {purificationReports.map((report, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Rapport de Purification - {report.period}</span>
                    <Badge className="bg-green-100 text-green-800">
                      {report.complianceRate}% Conformité
                    </Badge>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-800">{report.totalSuspicious}</div>
                      <div className="text-sm text-red-600">Transactions Suspectes</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-800">
                        {formatAmount(report.totalPurified, 'CHF')}
                      </div>
                      <div className="text-sm text-blue-600">Montant Purifié</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-800">
                        {formatAmount(report.totalDistributed, 'CHF')}
                      </div>
                      <div className="text-sm text-green-600">Montant Distribué</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-800">{report.beneficiaries}</div>
                      <div className="text-sm text-purple-600">Bénéficiaires</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Répartition par Catégorie</h4>
                    <div className="space-y-3">
                      {report.categories.map((category, catIndex) => (
                        <div key={catIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                          <span className="font-medium">{category.category}</span>
                          <div className="text-right">
                            <div className="font-semibold">{formatAmount(category.amount, 'CHF')}</div>
                            <div className="text-xs text-gray-600">{category.recipients} bénéficiaires</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6 pt-6 border-t">
                    <Button>
                      <Download className="h-4 w-4 mr-2" />
                      Exporter PDF
                    </Button>
                    <Button variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      Détails
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p className="mb-2">
            © 2025 CED Bank - نظام التطهير التلقائي المعتمد - Yakoubi Yamina
          </p>
          <p>
            💧 Purification automatique - Distribution conforme - Transparence totale
          </p>
        </div>
      </div>
    </div>
  );
}