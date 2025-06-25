import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Link as ChainIcon, 
  FileText, 
  Shield, 
  Globe, 
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Truck,
  Building,
  CreditCard,
  Users,
  BarChart3,
  Zap,
  Lock,
  Eye,
  Download,
  Upload,
  Star,
  Coins,
  Package,
  Ship,
  Plane
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TradeContract {
  id: string;
  type: 'murabaha' | 'salam' | 'istisna' | 'musharaka' | 'ijarah';
  title: string;
  buyer: string;
  seller: string;
  amount: number;
  currency: string;
  status: 'draft' | 'pending' | 'active' | 'completed' | 'disputed';
  createdAt: Date;
  expiryDate: Date;
  blockchainHash: string;
  shariaCompliant: boolean;
  documents: string[];
  participants: string[];
}

interface BlockchainTransaction {
  id: string;
  contractId: string;
  type: 'creation' | 'update' | 'payment' | 'delivery' | 'completion';
  hash: string;
  timestamp: Date;
  gasUsed: number;
  gasPrice: number;
  status: 'pending' | 'confirmed' | 'failed';
  blockNumber: number;
  shariaValidated: boolean;
}

interface ShariaValidation {
  contractId: string;
  validator: string;
  status: 'approved' | 'rejected' | 'requires_review';
  comments: string;
  timestamp: Date;
  evidences: string[];
}

export function BlockchainTradeFinance() {
  const [contracts, setContracts] = useState<TradeContract[]>([]);
  const [transactions, setTransactions] = useState<BlockchainTransaction[]>([]);
  const [validations, setValidations] = useState<ShariaValidation[]>([]);
  const [newContract, setNewContract] = useState<Partial<TradeContract>>({
    type: 'murabaha',
    currency: 'USD',
    shariaCompliant: false
  });
  const [selectedContract, setSelectedContract] = useState<string>('');
  const [networkStats, setNetworkStats] = useState({
    totalContracts: 1247,
    activeContracts: 328,
    totalVolume: 85420000,
    avgProcessingTime: 12,
    shariaComplianceRate: 98.7,
    gasPrice: 15
  });
  const { toast } = useToast();

  const contractTypes = [
    {
      id: 'murabaha',
      name: 'مرابحة',
      english: 'Murabaha',
      description: 'Cost-plus financing - البيع بالتقسيط مع هامش ربح معلوم',
      icon: CreditCard,
      color: 'bg-green-500'
    },
    {
      id: 'salam',
      name: 'سلم',
      english: 'Salam',
      description: 'Forward sale - دفع الثمن مقدماً والسلعة تسلم لاحقاً',
      icon: Package,
      color: 'bg-blue-500'
    },
    {
      id: 'istisna',
      name: 'استصناع',
      english: 'Istisna',
      description: 'Manufacturing contract - عقد تصنيع أو بناء',
      icon: Building,
      color: 'bg-purple-500'
    },
    {
      id: 'musharaka',
      name: 'مشاركة',
      english: 'Musharaka',
      description: 'Partnership - شراكة في رأس المال والربح',
      icon: Users,
      color: 'bg-orange-500'
    },
    {
      id: 'ijarah',
      name: 'إجارة',
      english: 'Ijarah',
      description: 'Leasing - عقد إيجار أو استئجار',
      icon: Truck,
      color: 'bg-teal-500'
    }
  ];

  const transportModes = [
    { id: 'sea', name: 'النقل البحري', icon: Ship, estimatedDays: '15-30' },
    { id: 'air', name: 'النقل الجوي', icon: Plane, estimatedDays: '2-5' },
    { id: 'land', name: 'النقل البري', icon: Truck, estimatedDays: '5-15' }
  ];

  useEffect(() => {
    // Simulation de données
    const sampleContracts: TradeContract[] = [
      {
        id: 'TC001',
        type: 'murabaha',
        title: 'استيراد معدات طبية من ألمانيا',
        buyer: 'مستشفى الملك فهد',
        seller: 'Siemens Healthcare GmbH',
        amount: 2500000,
        currency: 'EUR',
        status: 'active',
        createdAt: new Date('2024-12-01'),
        expiryDate: new Date('2025-03-01'),
        blockchainHash: '0x1a2b3c4d5e6f7890abcdef123456789',
        shariaCompliant: true,
        documents: ['invoice.pdf', 'certificate.pdf', 'shipping_docs.pdf'],
        participants: ['CED Bank', 'Deutsche Bank', 'Insurance Company']
      },
      {
        id: 'TC002',
        type: 'salam',
        title: 'تجارة القمح الأسترالي',
        buyer: 'شركة المطاحن المتحدة',
        seller: 'Australian Wheat Board',
        amount: 1200000,
        currency: 'USD',
        status: 'pending',
        createdAt: new Date('2024-12-15'),
        expiryDate: new Date('2025-06-15'),
        blockchainHash: '0x9876543210fedcba0987654321',
        shariaCompliant: true,
        documents: ['quality_cert.pdf', 'futures_contract.pdf'],
        participants: ['CED Bank', 'ANZ Bank', 'SGS Inspection']
      }
    ];

    setContracts(sampleContracts);
    
    // Simulation des transactions blockchain
    const sampleTransactions: BlockchainTransaction[] = [
      {
        id: 'TX001',
        contractId: 'TC001',
        type: 'creation',
        hash: '0xabcdef123456789012345678',
        timestamp: new Date('2024-12-01T10:30:00'),
        gasUsed: 180000,
        gasPrice: 15,
        status: 'confirmed',
        blockNumber: 1245789,
        shariaValidated: true
      },
      {
        id: 'TX002',
        contractId: 'TC001',
        type: 'payment',
        hash: '0x987654321abcdef012345678',
        timestamp: new Date('2024-12-02T14:15:00'),
        gasUsed: 95000,
        gasPrice: 12,
        status: 'confirmed',
        blockNumber: 1245832,
        shariaValidated: true
      }
    ];

    setTransactions(sampleTransactions);
  }, []);

  const createContract = async () => {
    if (!newContract.title || !newContract.buyer || !newContract.seller || !newContract.amount) {
      toast({
        title: "معلومات ناقصة",
        description: "يرجى إدخال جميع البيانات المطلوبة",
        variant: "destructive"
      });
      return;
    }

    // Validation Sharia automatique
    const isValid = await validateShariaCompliance(newContract);
    
    const contract: TradeContract = {
      id: `TC${(contracts.length + 1).toString().padStart(3, '0')}`,
      type: newContract.type as any,
      title: newContract.title,
      buyer: newContract.buyer,
      seller: newContract.seller,
      amount: newContract.amount,
      currency: newContract.currency || 'USD',
      status: 'pending',
      createdAt: new Date(),
      expiryDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 jours
      blockchainHash: generateBlockchainHash(),
      shariaCompliant: isValid,
      documents: [],
      participants: ['CED Bank']
    };

    setContracts(prev => [...prev, contract]);
    
    // Créer transaction blockchain
    const transaction: BlockchainTransaction = {
      id: `TX${Date.now()}`,
      contractId: contract.id,
      type: 'creation',
      hash: generateBlockchainHash(),
      timestamp: new Date(),
      gasUsed: Math.floor(Math.random() * 200000 + 100000),
      gasPrice: networkStats.gasPrice,
      status: 'pending',
      blockNumber: 1245000 + Math.floor(Math.random() * 1000),
      shariaValidated: isValid
    };

    setTransactions(prev => [...prev, transaction]);

    // Simulation confirmation blockchain
    setTimeout(() => {
      setTransactions(prev => 
        prev.map(tx => 
          tx.id === transaction.id 
            ? { ...tx, status: 'confirmed' as const }
            : tx
        )
      );
      
      toast({
        title: "عقد ذكي تم إنشاؤه",
        description: `العقد ${contract.id} تم تسجيله على البلوك تشين بنجاح`,
      });
    }, 3000);

    setNewContract({ type: 'murabaha', currency: 'USD', shariaCompliant: false });
  };

  const validateShariaCompliance = async (contractData: Partial<TradeContract>): Promise<boolean> => {
    // Simulation validation Sharia
    const rules = {
      murabaha: contractData.amount && contractData.amount > 0,
      salam: contractData.amount && contractData.amount > 0,
      istisna: contractData.amount && contractData.amount > 0,
      musharaka: contractData.amount && contractData.amount > 0,
      ijarah: contractData.amount && contractData.amount > 0
    };

    return rules[contractData.type as keyof typeof rules] || false;
  };

  const generateBlockchainHash = (): string => {
    return '0x' + Array.from({ length: 64 }, () => 
      Math.floor(Math.random() * 16).toString(16)
    ).join('');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'active': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'disputed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getContractTypeInfo = (type: string) => {
    return contractTypes.find(ct => ct.id === type) || contractTypes[0];
  };

  const formatAmount = (amount: number, currency: string) => {
    return new Intl.NumberFormat('ar-SA', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <ChainIcon className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">تمويل التجارة بالبلوك تشين</h1>
              <h2 className="text-2xl font-semibold text-blue-600">Blockchain Trade Finance</h2>
              <p className="text-gray-600">عقود ذكية شرعية - تمويل تجاري مطابق للأحكام الإسلامية</p>
            </div>
          </div>
        </div>

        {/* Statistiques réseau */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{networkStats.totalContracts}</div>
              <div className="text-xs text-gray-600">إجمالي العقود</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{networkStats.activeContracts}</div>
              <div className="text-xs text-gray-600">عقود نشطة</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">
                ${(networkStats.totalVolume / 1000000).toFixed(1)}M
              </div>
              <div className="text-xs text-gray-600">حجم المعاملات</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">{networkStats.avgProcessingTime}s</div>
              <div className="text-xs text-gray-600">متوسط المعالجة</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-emerald-600">{networkStats.shariaComplianceRate}%</div>
              <div className="text-xs text-gray-600">امتثال شرعي</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{networkStats.gasPrice}</div>
              <div className="text-xs text-gray-600">سعر الغاز</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="contracts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="contracts">العقود الذكية</TabsTrigger>
            <TabsTrigger value="create">إنشاء عقد</TabsTrigger>
            <TabsTrigger value="blockchain">البلوك تشين</TabsTrigger>
            <TabsTrigger value="analytics">التحليلات</TabsTrigger>
          </TabsList>

          {/* Gestion des contrats */}
          <TabsContent value="contracts" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {contracts.map((contract) => {
                const typeInfo = getContractTypeInfo(contract.type);
                const Icon = typeInfo.icon;
                
                return (
                  <Card key={contract.id} className="overflow-hidden">
                    <CardHeader className={`${typeInfo.color} bg-opacity-10`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 ${typeInfo.color} rounded-lg flex items-center justify-center`}>
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{contract.id}</CardTitle>
                            <p className="text-sm text-gray-600">{typeInfo.name}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(contract.status)}>
                          {contract.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{contract.title}</h3>
                      
                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">المشتري:</span>
                          <span>{contract.buyer}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">البائع:</span>
                          <span>{contract.seller}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">المبلغ:</span>
                          <span className="font-medium">
                            {formatAmount(contract.amount, contract.currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">تاريخ الانتهاء:</span>
                          <span>{contract.expiryDate.toLocaleDateString('ar-SA')}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        {contract.shariaCompliant ? (
                          <Badge className="bg-green-100 text-green-800">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            متوافق شرعياً
                          </Badge>
                        ) : (
                          <Badge className="bg-red-100 text-red-800">
                            <AlertTriangle className="h-3 w-3 mr-1" />
                            يحتاج مراجعة
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-xs">
                          <ChainIcon className="h-3 w-3 mr-1" />
                          على البلوك تشين
                        </Badge>
                      </div>

                      <div className="mb-4">
                        <div className="text-xs text-gray-600 mb-1">Hash البلوك تشين:</div>
                        <div className="text-xs font-mono bg-gray-100 p-2 rounded break-all">
                          {contract.blockchainHash}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <Eye className="h-4 w-4 mr-2" />
                          عرض
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {contracts.length === 0 && (
                <div className="lg:col-span-3 text-center py-12">
                  <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">لا توجد عقود ذكية</h3>
                  <p className="text-gray-500">أنشئ عقدك الذكي الأول لبدء التمويل التجاري</p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Création de contrat */}
          <TabsContent value="create" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    إنشاء عقد ذكي جديد
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="contractType">نوع العقد الإسلامي</Label>
                    <Select 
                      value={newContract.type} 
                      onValueChange={(value) => setNewContract(prev => ({ ...prev, type: value as any }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {contractTypes.map((type) => {
                          const Icon = type.icon;
                          return (
                            <SelectItem key={type.id} value={type.id}>
                              <div className="flex items-center gap-2">
                                <Icon className="h-4 w-4" />
                                <div>
                                  <div className="font-medium">{type.name} - {type.english}</div>
                                  <div className="text-xs text-gray-500">{type.description}</div>
                                </div>
                              </div>
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="title">عنوان العقد</Label>
                    <Input
                      id="title"
                      value={newContract.title || ''}
                      onChange={(e) => setNewContract(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="مثال: استيراد معدات طبية"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="buyer">المشتري</Label>
                      <Input
                        id="buyer"
                        value={newContract.buyer || ''}
                        onChange={(e) => setNewContract(prev => ({ ...prev, buyer: e.target.value }))}
                        placeholder="اسم المشتري"
                      />
                    </div>
                    <div>
                      <Label htmlFor="seller">البائع</Label>
                      <Input
                        id="seller"
                        value={newContract.seller || ''}
                        onChange={(e) => setNewContract(prev => ({ ...prev, seller: e.target.value }))}
                        placeholder="اسم البائع"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="amount">مبلغ العقد</Label>
                      <Input
                        id="amount"
                        type="number"
                        value={newContract.amount || ''}
                        onChange={(e) => setNewContract(prev => ({ ...prev, amount: parseFloat(e.target.value) || 0 }))}
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <Label htmlFor="currency">العملة</Label>
                      <Select 
                        value={newContract.currency} 
                        onValueChange={(value) => setNewContract(prev => ({ ...prev, currency: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">دولار أمريكي (USD)</SelectItem>
                          <SelectItem value="EUR">يورو (EUR)</SelectItem>
                          <SelectItem value="SAR">ريال سعودي (SAR)</SelectItem>
                          <SelectItem value="AED">درهم إماراتي (AED)</SelectItem>
                          <SelectItem value="CHF">فرنك سويسري (CHF)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button onClick={createContract} className="w-full" size="lg">
                    <ChainIcon className="h-5 w-5 mr-2" />
                    إنشاء العقد على البلوك تشين
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    التحقق من الامتثال الشرعي
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">معايير التحقق التلقائي</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• خلو من الربا والفوائد</li>
                        <li>• تجنب الغرر المفرط</li>
                        <li>• وضوح الشروط والأحكام</li>
                        <li>• مطابقة المعايير الشرعية AAOIFI</li>
                        <li>• موافقة هيئة الرقابة الشرعية</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">مزايا البلوك تشين الحلال</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• شفافية كاملة في المعاملات</li>
                        <li>• عدم قابلية التلاعب</li>
                        <li>• تنفيذ تلقائي للعقود</li>
                        <li>• تتبع فوري للحالة</li>
                        <li>• أمان مشفر عالي</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">أنواع العقود المدعومة</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm text-purple-700">
                        <div>• مرابحة</div>
                        <div>• سلم</div>
                        <div>• استصناع</div>
                        <div>• مشاركة</div>
                        <div>• إجارة</div>
                        <div>• مضاربة</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Blockchain Explorer */}
          <TabsContent value="blockchain" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChainIcon className="h-5 w-5" />
                  معاملات البلوك تشين الحديثة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((tx) => {
                    const contract = contracts.find(c => c.id === tx.contractId);
                    return (
                      <div key={tx.id} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              tx.status === 'confirmed' ? 'bg-green-100' : 
                              tx.status === 'pending' ? 'bg-yellow-100' : 'bg-red-100'
                            }`}>
                              {tx.status === 'confirmed' ? (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              ) : tx.status === 'pending' ? (
                                <Clock className="h-4 w-4 text-yellow-600" />
                              ) : (
                                <AlertTriangle className="h-4 w-4 text-red-600" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium">{tx.type} - {contract?.title}</div>
                              <div className="text-sm text-gray-600">العقد: {tx.contractId}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">Block #{tx.blockNumber}</div>
                            <div className="text-xs text-gray-600">
                              {tx.timestamp.toLocaleString('ar-SA')}
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Hash:</span>
                            <div className="font-mono text-xs break-all">{tx.hash}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Gas المستخدم:</span>
                            <div>{tx.gasUsed.toLocaleString()}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">سعر Gas:</span>
                            <div>{tx.gasPrice} Gwei</div>
                          </div>
                          <div>
                            <span className="text-gray-600">التكلفة:</span>
                            <div>{((tx.gasUsed * tx.gasPrice) / 1000000000).toFixed(6)} ETH</div>
                          </div>
                        </div>

                        {tx.shariaValidated && (
                          <div className="mt-3 pt-3 border-t">
                            <Badge className="bg-green-100 text-green-800">
                              <Shield className="h-3 w-3 mr-1" />
                              تم التحقق من الامتثال الشرعي
                            </Badge>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    توزيع أنواع العقود
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contractTypes.map((type) => {
                      const count = contracts.filter(c => c.type === type.id).length;
                      const percentage = contracts.length > 0 ? (count / contracts.length) * 100 : 0;
                      return (
                        <div key={type.id} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`w-4 h-4 ${type.color} rounded`}></div>
                            <span className="text-sm">{type.name}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">{count} عقد</div>
                            <div className="text-xs text-gray-600">{percentage.toFixed(1)}%</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    إحصائيات الأداء
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center p-4 bg-emerald-50 rounded-lg">
                      <div className="text-3xl font-bold text-emerald-800">98.7%</div>
                      <div className="text-sm text-emerald-600">معدل الامتثال الشرعي</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-xl font-bold text-blue-800">12s</div>
                        <div className="text-xs text-blue-600">متوسط المعالجة</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-xl font-bold text-purple-800">99.9%</div>
                        <div className="text-xs text-purple-600">وقت التشغيل</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>العقود المكتملة</span>
                        <span className="font-medium">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>معدل رضا العملاء</span>
                        <span className="font-medium">94%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p className="mb-2">
            © 2025 CED Bank - تمويل التجارة بالبلوك تشين الحلال - Yakoubi Yamina
          </p>
          <p>
            ⛓️ عقود ذكية شرعية - بلوك تشين آمن - تمويل تجاري متوافق مع الشريعة الإسلامية
          </p>
        </div>
      </div>
    </div>
  );
}