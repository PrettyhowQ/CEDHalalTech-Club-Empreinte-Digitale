import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  Lock,
  Coins,
  BarChart3,
  RefreshCw,
  Star,
  CheckCircle,
  AlertTriangle,
  Clock,
  Globe,
  Activity,
  Percent,
  ArrowUpDown,
  Target,
  Heart,
  Gem,
  Building
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DeFiProtocol {
  id: string;
  name: string;
  arabicName: string;
  type: 'lending' | 'exchange' | 'staking' | 'insurance' | 'savings' | 'investment';
  tvl: number; // Total Value Locked
  apy: number; // Annual Percentage Yield
  shariaCompliant: boolean;
  shariaScore: number;
  description: string;
  features: string[];
  risks: string[];
  minimumDeposit: number;
  currency: string;
  lockPeriod?: number; // en jours
  islamicStructure: 'mudaraba' | 'musharaka' | 'wakala' | 'murabaha' | 'ijarah' | 'takaful';
  validator: string;
  lastAudit: Date;
  totalUsers: number;
  averageReturn: number;
}

interface UserPosition {
  protocolId: string;
  amount: number;
  currency: string;
  entryDate: Date;
  currentValue: number;
  profit: number;
  status: 'active' | 'pending' | 'completed';
  nextReward: Date;
}

interface ShariaValidation {
  protocolId: string;
  validator: string;
  status: 'approved' | 'conditional' | 'rejected';
  validFrom: Date;
  validUntil: Date;
  conditions: string[];
  fatwaReference: string;
}

export function IslamicDeFiProtocols() {
  const [protocols, setProtocols] = useState<DeFiProtocol[]>([]);
  const [userPositions, setUserPositions] = useState<UserPosition[]>([]);
  const [validations, setValidations] = useState<ShariaValidation[]>([]);
  const [selectedProtocol, setSelectedProtocol] = useState<string>('');
  const [depositAmount, setDepositAmount] = useState<number>(0);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const { toast } = useToast();

  useEffect(() => {
    // Simulation de protocoles DeFi islamiques
    const defiData: DeFiProtocol[] = [
      {
        id: 'halal-vault',
        name: 'Halal Vault',
        arabicName: 'خزانة حلال',
        type: 'savings',
        tvl: 45600000,
        apy: 8.5,
        shariaCompliant: true,
        shariaScore: 98,
        description: 'Coffre-fort numérique basé sur la Mudaraba pour l\'épargne islamique sécurisée',
        features: ['Épargne conforme Sharia', 'Profits partagés', 'Pas de frais cachés', 'Retrait flexible'],
        risks: ['Risque de marché', 'Fluctuation des profits'],
        minimumDeposit: 100,
        currency: 'USD',
        lockPeriod: 30,
        islamicStructure: 'mudaraba',
        validator: 'AAOIFI Certified Scholar',
        lastAudit: new Date('2024-12-01'),
        totalUsers: 12450,
        averageReturn: 7.8
      },
      {
        id: 'musharaka-pool',
        name: 'Musharaka Investment Pool',
        arabicName: 'صندوق المشاركة الاستثماري',
        type: 'investment',
        tvl: 128500000,
        apy: 12.3,
        shariaCompliant: true,
        shariaScore: 95,
        description: 'Fonds d\'investissement basé sur la Musharaka avec partage des profits et pertes',
        features: ['Investissement participatif', 'Diversification Halal', 'Gestion professionnelle', 'Transparence totale'],
        risks: ['Risque d\'investissement', 'Partage des pertes', 'Volatilité des marchés'],
        minimumDeposit: 1000,
        currency: 'USD',
        lockPeriod: 90,
        islamicStructure: 'musharaka',
        validator: 'Dubai Islamic Finance Institute',
        lastAudit: new Date('2024-11-20'),
        totalUsers: 8920,
        averageReturn: 11.7
      },
      {
        id: 'wakala-trading',
        name: 'Wakala Trading Protocol',
        arabicName: 'بروتوكول الوكالة للتداول',
        type: 'exchange',
        tvl: 67300000,
        apy: 6.8,
        shariaCompliant: true,
        shariaScore: 92,
        description: 'Plateforme de trading décentralisée basée sur le contrat de Wakala',
        features: ['Trading conforme Sharia', 'Frais transparents', 'Exécution automatique', 'Multi-actifs'],
        risks: ['Risque de contrepartie', 'Volatilité des prix', 'Risque technologique'],
        minimumDeposit: 50,
        currency: 'USD',
        islamicStructure: 'wakala',
        validator: 'IFSB Approved',
        lastAudit: new Date('2024-12-10'),
        totalUsers: 23780,
        averageReturn: 6.2
      },
      {
        id: 'takaful-shield',
        name: 'Takaful Insurance Shield',
        arabicName: 'درع التأمين التكافلي',
        type: 'insurance',
        tvl: 34200000,
        apy: 4.5,
        shariaCompliant: true,
        shariaScore: 97,
        description: 'Protection DeFi basée sur les principes du Takaful islamique',
        features: ['Assurance mutuelle', 'Contribution équitable', 'Indemnisation rapide', 'Gouvernance communautaire'],
        risks: ['Risque de sinistres élevés', 'Risque de liquidité'],
        minimumDeposit: 25,
        currency: 'USD',
        lockPeriod: 365,
        islamicStructure: 'takaful',
        validator: 'Malaysia Islamic Finance Council',
        lastAudit: new Date('2024-11-30'),
        totalUsers: 15600,
        averageReturn: 4.1
      },
      {
        id: 'sukuk-yield',
        name: 'Digital Sukuk Yield Farm',
        arabicName: 'مزرعة عوائد الصكوك الرقمية',
        type: 'staking',
        tvl: 89750000,
        apy: 9.2,
        shariaCompliant: true,
        shariaScore: 96,
        description: 'Génération de rendements via staking de tokens Sukuk numériques',
        features: ['Rendements Sukuk', 'Staking flexible', 'Actifs sous-jacents réels', 'Distribution automatique'],
        risks: ['Risque de l\'actif sous-jacent', 'Risque de liquidité', 'Risque de slashing'],
        minimumDeposit: 500,
        currency: 'USD',
        lockPeriod: 180,
        islamicStructure: 'ijarah',
        validator: 'Bahrain Sharia Board',
        lastAudit: new Date('2024-12-05'),
        totalUsers: 7340,
        averageReturn: 8.9
      },
      {
        id: 'murabaha-finance',
        name: 'Murabaha Trade Finance',
        arabicName: 'تمويل التجارة بالمرابحة',
        type: 'lending',
        tvl: 156800000,
        apy: 7.6,
        shariaCompliant: true,
        shariaScore: 94,
        description: 'Financement commercial décentralisé basé sur la Murabaha',
        features: ['Financement commercial', 'Marge bénéficiaire fixe', 'Pas d\'intérêts', 'Garanties réelles'],
        risks: ['Risque de crédit', 'Risque de défaut', 'Risque de marché'],
        minimumDeposit: 2000,
        currency: 'USD',
        lockPeriod: 120,
        islamicStructure: 'murabaha',
        validator: 'Kuwait Finance House Sharia Board',
        lastAudit: new Date('2024-11-25'),
        totalUsers: 4580,
        averageReturn: 7.2
      }
    ];

    setProtocols(defiData);

    // Simulation positions utilisateur
    const userPos: UserPosition[] = [
      {
        protocolId: 'halal-vault',
        amount: 5000,
        currency: 'USD',
        entryDate: new Date('2024-10-15'),
        currentValue: 5340,
        profit: 340,
        status: 'active',
        nextReward: new Date('2025-01-15')
      },
      {
        protocolId: 'musharaka-pool',
        amount: 10000,
        currency: 'USD',
        entryDate: new Date('2024-09-01'),
        currentValue: 11250,
        profit: 1250,
        status: 'active',
        nextReward: new Date('2025-02-01')
      }
    ];

    setUserPositions(userPos);

    // Simulation validations Sharia
    const shariaVals: ShariaValidation[] = defiData.map(protocol => ({
      protocolId: protocol.id,
      validator: protocol.validator,
      status: 'approved' as const,
      validFrom: new Date('2024-01-01'),
      validUntil: new Date('2025-12-31'),
      conditions: ['Audit trimestriel requis', 'Conformité AAOIFI', 'Pas d\'intérêts composés'],
      fatwaReference: `Fatwa-${protocol.id.toUpperCase()}-2024`
    }));

    setValidations(shariaVals);
  }, []);

  const depositToProtocol = async (protocolId: string) => {
    if (depositAmount < 1) {
      toast({
        title: "مبلغ غير صحيح",
        description: "يرجى إدخال مبلغ صحيح للإيداع",
        variant: "destructive"
      });
      return;
    }

    const protocol = protocols.find(p => p.id === protocolId);
    if (!protocol) return;

    if (depositAmount < protocol.minimumDeposit) {
      toast({
        title: "مبلغ أقل من الحد الأدنى",
        description: `الحد الأدنى للإيداع هو ${protocol.minimumDeposit} ${protocol.currency}`,
        variant: "destructive"
      });
      return;
    }

    // Simulation de dépôt
    const newPosition: UserPosition = {
      protocolId: protocolId,
      amount: depositAmount,
      currency: protocol.currency,
      entryDate: new Date(),
      currentValue: depositAmount,
      profit: 0,
      status: 'pending',
      nextReward: new Date(Date.now() + (protocol.lockPeriod || 30) * 24 * 60 * 60 * 1000)
    };

    setUserPositions(prev => [...prev, newPosition]);
    setDepositAmount(0);

    toast({
      title: "تم الإيداع بنجاح",
      description: `تم إيداع ${depositAmount} ${protocol.currency} في ${protocol.arabicName}`,
    });

    // Simulation activation après quelques secondes
    setTimeout(() => {
      setUserPositions(prev => 
        prev.map(pos => 
          pos.protocolId === protocolId && pos.status === 'pending'
            ? { ...pos, status: 'active' as const }
            : pos
        )
      );
    }, 3000);
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      lending: Building,
      exchange: ArrowUpDown,
      staking: Coins,
      insurance: Shield,
      savings: Gem,
      investment: TrendingUp
    };
    return icons[type as keyof typeof icons] || Activity;
  };

  const getTypeName = (type: string) => {
    const names = {
      lending: 'الإقراض',
      exchange: 'التبادل',
      staking: 'التخزين',
      insurance: 'التأمين',
      savings: 'الادخار',
      investment: 'الاستثمار'
    };
    return names[type as keyof typeof names] || type;
  };

  const getStructureName = (structure: string) => {
    const names = {
      mudaraba: 'مضاربة',
      musharaka: 'مشاركة',
      wakala: 'وكالة',
      murabaha: 'مرابحة',
      ijarah: 'إجارة',
      takaful: 'تكافل'
    };
    return names[structure as keyof typeof names] || structure;
  };

  const getScoreColor = (score: number) => {
    if (score >= 95) return 'text-green-600';
    if (score >= 90) return 'text-blue-600';
    if (score >= 85) return 'text-yellow-600';
    return 'text-red-600';
  };

  const formatAmount = (amount: number, currency: string) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(1)}K`;
    }
    return `$${amount.toFixed(2)}`;
  };

  const filteredProtocols = protocols.filter(protocol => {
    if (selectedFilter === 'all') return true;
    return protocol.type === selectedFilter;
  });

  const totalTVL = protocols.reduce((sum, protocol) => sum + protocol.tvl, 0);
  const averageAPY = protocols.reduce((sum, protocol) => sum + protocol.apy, 0) / protocols.length;
  const totalUsers = protocols.reduce((sum, protocol) => sum + protocol.totalUsers, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">بروتوكولات التمويل اللامركزي الإسلامي</h1>
              <h2 className="text-2xl font-semibold text-purple-600">Islamic DeFi Protocols</h2>
              <p className="text-gray-600">تمويل لامركزي متوافق مع الشريعة - عوائد حلال مضمونة</p>
            </div>
          </div>
        </div>

        {/* Statistiques globales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{formatAmount(totalTVL, 'USD')}</div>
              <div className="text-xs text-gray-600">إجمالي القيمة المؤمنة</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{averageAPY.toFixed(1)}%</div>
              <div className="text-xs text-gray-600">متوسط العائد السنوي</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{totalUsers.toLocaleString()}</div>
              <div className="text-xs text-gray-600">إجمالي المستخدمين</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-emerald-600">{protocols.length}</div>
              <div className="text-xs text-gray-600">بروتوكول نشط</div>
            </CardContent>
          </Card>
        </div>

        {/* Filtres */}
        <div className="flex gap-2 mb-6 flex-wrap">
          <Button
            variant={selectedFilter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedFilter('all')}
          >
            الكل
          </Button>
          <Button
            variant={selectedFilter === 'savings' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedFilter('savings')}
          >
            الادخار
          </Button>
          <Button
            variant={selectedFilter === 'investment' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedFilter('investment')}
          >
            الاستثمار
          </Button>
          <Button
            variant={selectedFilter === 'lending' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedFilter('lending')}
          >
            الإقراض
          </Button>
          <Button
            variant={selectedFilter === 'staking' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedFilter('staking')}
          >
            التخزين
          </Button>
          <Button
            variant={selectedFilter === 'insurance' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedFilter('insurance')}
          >
            التأمين
          </Button>
          <Button
            variant={selectedFilter === 'exchange' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedFilter('exchange')}
          >
            التبادل
          </Button>
        </div>

        <Tabs defaultValue="protocols" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="protocols">البروتوكولات</TabsTrigger>
            <TabsTrigger value="portfolio">المحفظة</TabsTrigger>
            <TabsTrigger value="validation">التحقق الشرعي</TabsTrigger>
          </TabsList>

          {/* Liste des protocoles */}
          <TabsContent value="protocols" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProtocols.map((protocol) => {
                const Icon = getTypeIcon(protocol.type);
                const validation = validations.find(v => v.protocolId === protocol.id);
                
                return (
                  <Card key={protocol.id} className="overflow-hidden">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-emerald-500 rounded-lg flex items-center justify-center">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{protocol.name}</CardTitle>
                            <p className="text-sm text-gray-600">{protocol.arabicName}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-green-100 text-green-800 mb-1">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            حلال
                          </Badge>
                          <div className="text-xs text-gray-600">{getTypeName(protocol.type)}</div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-sm text-gray-700">{protocol.description}</p>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-purple-50 rounded-lg">
                            <div className="text-xl font-bold text-purple-800">{protocol.apy}%</div>
                            <div className="text-xs text-purple-600">عائد سنوي</div>
                          </div>
                          <div className="text-center p-3 bg-green-50 rounded-lg">
                            <div className="text-xl font-bold text-green-800">{formatAmount(protocol.tvl, 'USD')}</div>
                            <div className="text-xs text-green-600">قيمة مؤمنة</div>
                          </div>
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">النظام الشرعي:</span>
                            <Badge variant="outline">{getStructureName(protocol.islamicStructure)}</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">نقاط الشريعة:</span>
                            <span className={`font-bold ${getScoreColor(protocol.shariaScore)}`}>
                              {protocol.shariaScore}/100
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">الحد الأدنى:</span>
                            <span>{formatAmount(protocol.minimumDeposit, protocol.currency)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">فترة القفل:</span>
                            <span>{protocol.lockPeriod || 0} يوم</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="text-xs text-gray-600">المزايا الرئيسية:</div>
                          <div className="flex flex-wrap gap-1">
                            {protocol.features.slice(0, 3).map((feature, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {validation && (
                          <div className="p-2 bg-green-50 border border-green-200 rounded text-xs">
                            <div className="flex items-center gap-1 text-green-800">
                              <Shield className="h-3 w-3" />
                              <span className="font-medium">معتمد شرعياً</span>
                            </div>
                            <div className="text-green-600">
                              {validation.validator} - {validation.fatwaReference}
                            </div>
                          </div>
                        )}

                        <div className="pt-3 border-t">
                          <div className="grid grid-cols-2 gap-2">
                            <Input
                              type="number"
                              placeholder="المبلغ"
                              value={depositAmount || ''}
                              onChange={(e) => setDepositAmount(parseFloat(e.target.value) || 0)}
                              className="text-sm"
                            />
                            <Button 
                              size="sm"
                              onClick={() => depositToProtocol(protocol.id)}
                              disabled={depositAmount < protocol.minimumDeposit}
                            >
                              إيداع
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Portfolio utilisateur */}
          <TabsContent value="portfolio" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    ملخص المحفظة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-800">
                        ${userPositions.reduce((sum, pos) => sum + pos.currentValue, 0).toLocaleString()}
                      </div>
                      <div className="text-sm text-blue-600">القيمة الحالية</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-800">
                        ${userPositions.reduce((sum, pos) => sum + pos.profit, 0).toLocaleString()}
                      </div>
                      <div className="text-sm text-green-600">إجمالي الأرباح</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-800">
                        {((userPositions.reduce((sum, pos) => sum + pos.profit, 0) / 
                           userPositions.reduce((sum, pos) => sum + pos.amount, 0)) * 100).toFixed(1)}%
                      </div>
                      <div className="text-sm text-purple-600">عائد إجمالي</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-800">{userPositions.length}</div>
                      <div className="text-sm text-orange-600">مراكز نشطة</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {userPositions.map((position, index) => {
                      const protocol = protocols.find(p => p.id === position.protocolId);
                      if (!protocol) return null;

                      const profitPercentage = (position.profit / position.amount) * 100;
                      
                      return (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-emerald-500 rounded-lg flex items-center justify-center">
                                <Coins className="h-4 w-4 text-white" />
                              </div>
                              <div>
                                <div className="font-medium">{protocol.arabicName}</div>
                                <div className="text-sm text-gray-600">{getStructureName(protocol.islamicStructure)}</div>
                              </div>
                            </div>
                            <Badge className={position.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                              {position.status === 'active' ? 'نشط' : position.status === 'pending' ? 'معلق' : 'مكتمل'}
                            </Badge>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-gray-600">المبلغ الأصلي:</span>
                              <div className="font-medium">${position.amount.toLocaleString()}</div>
                            </div>
                            <div>
                              <span className="text-gray-600">القيمة الحالية:</span>
                              <div className="font-medium">${position.currentValue.toLocaleString()}</div>
                            </div>
                            <div>
                              <span className="text-gray-600">الربح:</span>
                              <div className={`font-medium ${position.profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                ${position.profit.toLocaleString()} ({profitPercentage.toFixed(2)}%)
                              </div>
                            </div>
                            <div>
                              <span className="text-gray-600">المكافأة التالية:</span>
                              <div className="font-medium">{position.nextReward.toLocaleDateString('ar-SA')}</div>
                            </div>
                          </div>

                          <div className="mt-3 pt-3 border-t">
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-600">
                                تاريخ الدخول: {position.entryDate.toLocaleDateString('ar-SA')}
                              </span>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  تفاصيل
                                </Button>
                                {position.status === 'active' && (
                                  <Button variant="outline" size="sm">
                                    سحب
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {userPositions.length === 0 && (
                      <div className="text-center py-12">
                        <Coins className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-600 mb-2">لا توجد مراكز نشطة</h3>
                        <p className="text-gray-500">ابدأ الاستثمار في البروتوكولات الحلال</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Validation Sharia */}
          <TabsContent value="validation" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {validations.map((validation) => {
                const protocol = protocols.find(p => p.id === validation.protocolId);
                if (!protocol) return null;

                return (
                  <Card key={validation.protocolId}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-green-500" />
                        {protocol.arabicName}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">حالة التحقق:</span>
                          <Badge className="bg-green-100 text-green-800">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            معتمد
                          </Badge>
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">المدقق الشرعي:</span>
                            <span className="font-medium">{validation.validator}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">مرجع الفتوى:</span>
                            <span className="font-medium">{validation.fatwaReference}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">صالح حتى:</span>
                            <span className="font-medium">{validation.validUntil.toLocaleDateString('ar-SA')}</span>
                          </div>
                        </div>

                        <div>
                          <div className="text-sm text-gray-600 mb-2">الشروط والضوابط:</div>
                          <div className="space-y-1">
                            {validation.conditions.map((condition, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-3 w-3 text-green-500" />
                                <span>{condition}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-3 bg-green-50 rounded-lg">
                          <div className="flex items-center gap-2 text-green-800">
                            <Star className="h-4 w-4" />
                            <span className="font-medium">نقاط الامتثال: {protocol.shariaScore}/100</span>
                          </div>
                          <p className="text-xs text-green-600 mt-1">
                            متوافق بالكامل مع معايير AAOIFI والهيئات الشرعية المعتمدة
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p className="mb-2">
            © 2025 CED Bank - بروتوكولات التمويل اللامركزي الإسلامي - Yakoubi Yamina
          </p>
          <p>
            ⚡ DeFi حلال - عوائد شرعية - بروتوكولات معتمدة من الهيئات الإسلامية
          </p>
        </div>
      </div>
    </div>
  );
}