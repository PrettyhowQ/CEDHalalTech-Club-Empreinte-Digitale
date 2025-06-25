import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Search,
  TrendingUp,
  TrendingDown,
  Clock,
  Star,
  Info,
  Zap,
  Lock,
  Coins,
  BarChart3,
  Filter,
  Download,
  RefreshCw,
  Globe,
  Eye,
  Book
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Cryptocurrency {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  marketCap: number;
  volume24h: number;
  shariaStatus: 'halal' | 'haram' | 'questionable' | 'under_review';
  shariaScore: number;
  lastReview: Date;
  reasons: string[];
  islamicCriteria: {
    noInterest: boolean;
    noGambling: boolean;
    noExcessiveSpeculation: boolean;
    assetBacked: boolean;
    utilityValue: boolean;
    transparentGovernance: boolean;
  };
  fatwaSource?: string;
  alternatives?: string[];
}

interface ShariaAnalysis {
  cryptocurrency: string;
  analysis: string;
  ruling: 'halal' | 'haram' | 'questionable';
  confidence: number;
  scholar: string;
  references: string[];
  timestamp: Date;
  criteriaMet: string[];
  criteriaFailed: string[];
  recommendations: string[];
}

export function CryptoShariaEngine() {
  const [cryptocurrencies, setCryptocurrencies] = useState<Cryptocurrency[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedCrypto, setSelectedCrypto] = useState<string>('');
  const [analysis, setAnalysis] = useState<ShariaAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Simulation de données crypto avec statut Sharia
    const cryptoData: Cryptocurrency[] = [
      {
        id: 'bitcoin',
        symbol: 'BTC',
        name: 'Bitcoin',
        price: 67500,
        change24h: 2.3,
        marketCap: 1340000000000,
        volume24h: 28500000000,
        shariaStatus: 'questionable',
        shariaScore: 65,
        lastReview: new Date('2024-12-01'),
        reasons: ['Spéculation excessive', 'Pas d\'actif sous-jacent tangible', 'Volatilité élevée'],
        islamicCriteria: {
          noInterest: true,
          noGambling: false,
          noExcessiveSpeculation: false,
          assetBacked: false,
          utilityValue: true,
          transparentGovernance: true
        },
        fatwaSource: 'Dar Al-Ifta Egypt',
        alternatives: ['Islamic Gold Dinar', 'Halal DeFi Tokens']
      },
      {
        id: 'ethereum',
        symbol: 'ETH',
        name: 'Ethereum',
        price: 3800,
        change24h: -1.2,
        marketCap: 457000000000,
        volume24h: 16200000000,
        shariaStatus: 'questionable',
        shariaScore: 70,
        lastReview: new Date('2024-11-15'),
        reasons: ['Smart contracts peuvent contenir du ribâ', 'DeFi protocols non conformes'],
        islamicCriteria: {
          noInterest: false,
          noGambling: false,
          noExcessiveSpeculation: true,
          assetBacked: true,
          utilityValue: true,
          transparentGovernance: true
        },
        alternatives: ['Islamic Smart Contract Platforms']
      },
      {
        id: 'islamic-coin',
        symbol: 'ISLM',
        name: 'Islamic Coin',
        price: 0.45,
        change24h: 5.7,
        marketCap: 450000000,
        volume24h: 12000000,
        shariaStatus: 'halal',
        shariaScore: 95,
        lastReview: new Date('2024-12-20'),
        reasons: ['Conforme aux principes islamiques', 'Soutient des projets halal', 'Gouvernance Sharia'],
        islamicCriteria: {
          noInterest: true,
          noGambling: true,
          noExcessiveSpeculation: true,
          assetBacked: true,
          utilityValue: true,
          transparentGovernance: true
        },
        fatwaSource: 'AAOIFI Certified',
        alternatives: []
      },
      {
        id: 'gold-backed-token',
        symbol: 'GBT',
        name: 'Islamic Gold Token',
        price: 65.30,
        change24h: 0.8,
        marketCap: 2300000000,
        volume24h: 45000000,
        shariaStatus: 'halal',
        shariaScore: 92,
        lastReview: new Date('2024-12-18'),
        reasons: ['Adossé à l\'or physique', 'Pas de spéculation', 'Valeur intrinsèque'],
        islamicCriteria: {
          noInterest: true,
          noGambling: true,
          noExcessiveSpeculation: true,
          assetBacked: true,
          utilityValue: true,
          transparentGovernance: true
        },
        fatwaSource: 'Dubai Islamic Authority',
        alternatives: []
      },
      {
        id: 'shiba-inu',
        symbol: 'SHIB',
        name: 'Shiba Inu',
        price: 0.000024,
        change24h: -12.5,
        marketCap: 14200000000,
        volume24h: 890000000,
        shariaStatus: 'haram',
        shariaScore: 15,
        lastReview: new Date('2024-11-30'),
        reasons: ['Pure spéculation', 'Pas de valeur utilitaire', 'Gambling'],
        islamicCriteria: {
          noInterest: true,
          noGambling: false,
          noExcessiveSpeculation: false,
          assetBacked: false,
          utilityValue: false,
          transparentGovernance: false
        },
        fatwaSource: 'Multiple Islamic Scholars',
        alternatives: ['Islamic Coin', 'Gold-backed tokens']
      },
      {
        id: 'sukuk-token',
        symbol: 'SUKUK',
        name: 'Digital Sukuk Token',
        price: 100.50,
        change24h: 0.3,
        marketCap: 850000000,
        volume24h: 23000000,
        shariaStatus: 'halal',
        shariaScore: 98,
        lastReview: new Date('2024-12-22'),
        reasons: ['Basé sur des sukuk réels', 'Revenus conformes Sharia', 'Actifs tangibles'],
        islamicCriteria: {
          noInterest: true,
          noGambling: true,
          noExcessiveSpeculation: true,
          assetBacked: true,
          utilityValue: true,
          transparentGovernance: true
        },
        fatwaSource: 'IFSB Approved',
        alternatives: []
      }
    ];

    setCryptocurrencies(cryptoData);
  }, []);

  const analyzeCrypto = async (cryptoId: string) => {
    setIsAnalyzing(true);
    const crypto = cryptocurrencies.find(c => c.id === cryptoId);
    
    if (!crypto) {
      toast({
        title: "عملة غير موجودة",
        description: "لم يتم العثور على العملة المشفرة المحددة",
        variant: "destructive"
      });
      setIsAnalyzing(false);
      return;
    }

    // Simulation d'analyse IA Sharia
    setTimeout(() => {
      const analysisResult: ShariaAnalysis = {
        cryptocurrency: crypto.name,
        analysis: generateShariaAnalysis(crypto),
        ruling: crypto.shariaStatus as any,
        confidence: crypto.shariaScore,
        scholar: 'د. محمد الطيب - خبير الفقه المالي الرقمي',
        references: [
          'القرآن الكريم - سورة البقرة آية 275',
          'صحيح البخاري - باب بيع الذهب بالذهب',
          'معايير الهيئة الشرعية AAOIFI',
          'فتاوى المجمع الفقهي الإسلامي'
        ],
        timestamp: new Date(),
        criteriaMet: Object.entries(crypto.islamicCriteria)
          .filter(([_, value]) => value)
          .map(([key]) => translateCriteria(key)),
        criteriaFailed: Object.entries(crypto.islamicCriteria)
          .filter(([_, value]) => !value)
          .map(([key]) => translateCriteria(key)),
        recommendations: generateRecommendations(crypto)
      };

      setAnalysis(analysisResult);
      setIsAnalyzing(false);

      toast({
        title: "تم التحليل الشرعي",
        description: `تحليل ${crypto.name} مكتمل - الحكم: ${getShariaRulingArabic(crypto.shariaStatus)}`,
      });
    }, 2000);
  };

  const generateShariaAnalysis = (crypto: Cryptocurrency): string => {
    const analyses = {
      halal: `بعد دراسة شاملة لطبيعة ${crypto.name} وآلية عملها، نجد أنها تتوافق مع أحكام الشريعة الإسلامية. العملة مدعومة بأصول حقيقية وتخدم غرضاً نفعياً واضحاً. لا تحتوي على عناصر ربوية أو مقامرة، وحكمها الشرعي الجواز مع مراعاة ضوابط التداول الإسلامية.`,
      haram: `بناءً على التحليل الشرعي المعمق، نجد أن ${crypto.name} تحتوي على عناصر محرمة شرعاً. تتضمن مخاطر عالية من المقامرة والغرر المفرط، وتفتقر للقيمة الحقيقية أو المنفعة الواضحة. التداول فيها يُعتبر من قبيل المضاربة المحرمة، والحكم الشرعي عدم الجواز.`,
      questionable: `${crypto.name} تقع في منطقة رمادية من الناحية الشرعية. تحتوي على بعض العناصر المتوافقة مع الشريعة وأخرى مشكوك فيها. يُنصح بتجنبها حتى يتم تطويرها لتصبح متوافقة بالكامل مع أحكام الشريعة الإسلامية، أو الانتظار لمزيد من الدراسات الفقهية.`
    };

    return analyses[crypto.shariaStatus] || analyses.questionable;
  };

  const translateCriteria = (key: string): string => {
    const translations = {
      noInterest: 'خالية من الربا',
      noGambling: 'خالية من القمار',
      noExcessiveSpeculation: 'تجنب المضاربة المفرطة',
      assetBacked: 'مدعومة بأصول حقيقية',
      utilityValue: 'لها قيمة نفعية',
      transparentGovernance: 'حوكمة شفافة'
    };
    return translations[key as keyof typeof translations] || key;
  };

  const generateRecommendations = (crypto: Cryptocurrency): string[] => {
    const recommendations = [];

    if (crypto.shariaStatus === 'halal') {
      recommendations.push('يمكن التداول مع مراعاة ضوابط التداول الإسلامية');
      recommendations.push('مناسبة للمحافظ الاستثمارية الحلال');
      recommendations.push('يُنصح بالاستثمار طويل المدى');
    } else if (crypto.shariaStatus === 'haram') {
      recommendations.push('يُنصح بتجنب التداول فيها نهائياً');
      recommendations.push('البحث عن بدائل حلال مماثلة');
      recommendations.push('استشارة عالم شرعي متخصص');
    } else {
      recommendations.push('انتظار مراجعة شرعية إضافية');
      recommendations.push('تجنب الاستثمار حتى التوضيح');
      recommendations.push('متابعة التطورات الفقهية');
    }

    return recommendations;
  };

  const getShariaRulingArabic = (status: string): string => {
    const rulings = {
      halal: 'حلال',
      haram: 'حرام',
      questionable: 'مشكوك فيه',
      under_review: 'قيد المراجعة'
    };
    return rulings[status as keyof typeof rulings] || 'غير محدد';
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'halal': return 'bg-green-100 text-green-800';
      case 'haram': return 'bg-red-100 text-red-800';
      case 'questionable': return 'bg-yellow-100 text-yellow-800';
      case 'under_review': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    if (score >= 50) return 'text-orange-600';
    return 'text-red-600';
  };

  const filteredCryptos = cryptocurrencies.filter(crypto => {
    const matchesSearch = crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || crypto.shariaStatus === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const formatPrice = (price: number): string => {
    if (price < 1) {
      return `$${price.toFixed(6)}`;
    }
    return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const formatMarketCap = (marketCap: number): string => {
    if (marketCap >= 1e12) {
      return `$${(marketCap / 1e12).toFixed(1)}T`;
    }
    if (marketCap >= 1e9) {
      return `$${(marketCap / 1e9).toFixed(1)}B`;
    }
    if (marketCap >= 1e6) {
      return `$${(marketCap / 1e6).toFixed(1)}M`;
    }
    return `$${marketCap.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">محرك الامتثال الشرعي للعملات المشفرة</h1>
              <h2 className="text-2xl font-semibold text-emerald-600">Crypto Sharia Compliance Engine</h2>
              <p className="text-gray-600">تحليل فوري للعملات المشفرة وفقاً لأحكام الشريعة الإسلامية</p>
            </div>
          </div>
        </div>

        {/* Filtres et recherche */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="البحث عن عملة مشفرة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant={selectedFilter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter('all')}
            >
              الكل
            </Button>
            <Button
              variant={selectedFilter === 'halal' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter('halal')}
              className="bg-green-500 hover:bg-green-600"
            >
              حلال
            </Button>
            <Button
              variant={selectedFilter === 'questionable' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter('questionable')}
              className="bg-yellow-500 hover:bg-yellow-600"
            >
              مشكوك
            </Button>
            <Button
              variant={selectedFilter === 'haram' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter('haram')}
              className="bg-red-500 hover:bg-red-600"
            >
              حرام
            </Button>
          </div>
        </div>

        <Tabs defaultValue="list" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="list">قائمة العملات</TabsTrigger>
            <TabsTrigger value="analysis">التحليل الشرعي</TabsTrigger>
            <TabsTrigger value="guidance">الإرشادات الفقهية</TabsTrigger>
          </TabsList>

          {/* Liste des cryptomonnaies */}
          <TabsContent value="list" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCryptos.map((crypto) => (
                <Card key={crypto.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <Coins className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{crypto.symbol}</CardTitle>
                          <p className="text-sm text-gray-600">{crypto.name}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(crypto.shariaStatus)}>
                        {getShariaRulingArabic(crypto.shariaStatus)}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold">{formatPrice(crypto.price)}</span>
                        <div className={`flex items-center gap-1 ${crypto.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {crypto.change24h >= 0 ? (
                            <TrendingUp className="h-4 w-4" />
                          ) : (
                            <TrendingDown className="h-4 w-4" />
                          )}
                          <span className="text-sm font-medium">
                            {crypto.change24h.toFixed(2)}%
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">القيمة السوقية:</span>
                          <div className="font-medium">{formatMarketCap(crypto.marketCap)}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">الحجم 24س:</span>
                          <div className="font-medium">{formatMarketCap(crypto.volume24h)}</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">نقاط الامتثال الشرعي:</span>
                        <div className="flex items-center gap-2">
                          <div className={`text-lg font-bold ${getScoreColor(crypto.shariaScore)}`}>
                            {crypto.shariaScore}/100
                          </div>
                          <Star className={`h-4 w-4 ${crypto.shariaScore >= 90 ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-xs text-gray-600">المعايير الشرعية:</div>
                        <div className="grid grid-cols-3 gap-1">
                          {Object.entries(crypto.islamicCriteria).map(([key, value]) => (
                            <div key={key} className="flex items-center justify-center">
                              {value ? (
                                <CheckCircle className="h-3 w-3 text-green-500" />
                              ) : (
                                <XCircle className="h-3 w-3 text-red-500" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t">
                        <Button 
                          size="sm" 
                          className="w-full"
                          onClick={() => {
                            setSelectedCrypto(crypto.id);
                            analyzeCrypto(crypto.id);
                          }}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          تحليل شرعي مفصل
                        </Button>
                      </div>

                      {crypto.alternatives && crypto.alternatives.length > 0 && crypto.shariaStatus !== 'halal' && (
                        <div className="p-2 bg-blue-50 rounded text-xs">
                          <div className="text-blue-800 font-medium mb-1">بدائل حلال:</div>
                          <div className="text-blue-600">
                            {crypto.alternatives.join(', ')}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCryptos.length === 0 && (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">لا توجد نتائج</h3>
                <p className="text-gray-500">لم يتم العثور على عملات مشفرة تطابق معايير البحث</p>
              </div>
            )}
          </TabsContent>

          {/* Analyse détaillée */}
          <TabsContent value="analysis" className="space-y-6">
            {analysis ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Book className="h-5 w-5" />
                      التحليل الشرعي المفصل
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">{analysis.cryptocurrency}</h3>
                        <Badge className={getStatusColor(analysis.ruling)}>
                          {getShariaRulingArabic(analysis.ruling)}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">درجة الثقة:</span>
                        <div className="flex items-center gap-2">
                          <div className={`text-lg font-bold ${getScoreColor(analysis.confidence)}`}>
                            {analysis.confidence}%
                          </div>
                          <div className="w-24 h-2 bg-gray-200 rounded-full">
                            <div 
                              className={`h-2 rounded-full ${
                                analysis.confidence >= 90 ? 'bg-green-500' :
                                analysis.confidence >= 70 ? 'bg-yellow-500' :
                                analysis.confidence >= 50 ? 'bg-orange-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${analysis.confidence}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm leading-relaxed">{analysis.analysis}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">العالم المراجع:</h4>
                        <p className="text-sm text-gray-600">{analysis.scholar}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">تاريخ التحليل:</h4>
                        <p className="text-sm text-gray-600">
                          {analysis.timestamp.toLocaleDateString('ar-SA')} - 
                          {analysis.timestamp.toLocaleTimeString('ar-SA')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      تفصيل المعايير الشرعية
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">المعايير المتحققة:</h4>
                        <div className="space-y-1">
                          {analysis.criteriaMet.map((criteria, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>{criteria}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {analysis.criteriaFailed.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-red-800 mb-2">المعايير غير المتحققة:</h4>
                          <div className="space-y-1">
                            {analysis.criteriaFailed.map((criteria, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm">
                                <XCircle className="h-4 w-4 text-red-500" />
                                <span>{criteria}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">التوصيات:</h4>
                        <div className="space-y-1">
                          {analysis.recommendations.map((recommendation, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <Info className="h-4 w-4 text-blue-500" />
                              <span>{recommendation}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">المراجع الشرعية:</h4>
                        <div className="space-y-1">
                          {analysis.references.map((reference, index) => (
                            <div key={index} className="text-xs text-gray-600 p-2 bg-gray-50 rounded">
                              {reference}
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        تصدير التحليل
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  {isAnalyzing ? (
                    <div>
                      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-emerald-500 mx-auto mb-4"></div>
                      <h3 className="text-lg font-semibold text-gray-600 mb-2">جاري التحليل الشرعي</h3>
                      <p className="text-gray-500">يتم مراجعة العملة المشفرة وفقاً للمعايير الإسلامية...</p>
                    </div>
                  ) : (
                    <div>
                      <Shield className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-600 mb-2">لم يتم اختيار عملة للتحليل</h3>
                      <p className="text-gray-500">اختر عملة مشفرة من القائمة للحصول على تحليل شرعي مفصل</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Guidance religieuse */}
          <TabsContent value="guidance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Book className="h-5 w-5 text-emerald-500" />
                    الضوابط الشرعية للعملات المشفرة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">المعايير الأساسية للحل</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• خلوها من الربا والفوائد</li>
                        <li>• عدم احتوائها على عناصر القمار</li>
                        <li>• وجود قيمة حقيقية أو منفعة واضحة</li>
                        <li>• الشفافية في الآلية والحوكمة</li>
                        <li>• تجنب المضاربة المفرطة</li>
                        <li>• دعمها بأصول ملموسة أو خدمات حقيقية</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">علامات التحريم</h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• احتواء على آليات ربوية</li>
                        <li>• طبيعة مقامرة أو مضاربة محضة</li>
                        <li>• غموض شديد في الآلية (غرر مفرط)</li>
                        <li>• عدم وجود قيمة حقيقية</li>
                        <li>• استخدام في أنشطة محرمة</li>
                        <li>• انتهاك الضوابط الشرعية الأساسية</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">حالات الاشتباه</h4>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• تطبيق جزئي للمعايير الشرعية</li>
                        <li>• وجود عناصر مشكوك فيها</li>
                        <li>• حاجة لمراجعة فقهية إضافية</li>
                        <li>• تطوير مستمر قد يؤثر على الحكم</li>
                        <li>• اختلاف العلماء في الحكم</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-blue-500" />
                    الفتاوى والآراء الفقهية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                      <h4 className="font-semibold text-blue-800 mb-2">هيئة المحاسبة والمراجعة (AAOIFI)</h4>
                      <p className="text-sm text-blue-700">
                        "العملات المشفرة تحتاج لتقييم فردي حسب طبيعتها وآلية عملها. المعيار الأساسي هو مطابقتها للضوابط الشرعية."
                      </p>
                    </div>

                    <div className="p-4 border-l-4 border-green-500 bg-green-50">
                      <h4 className="font-semibold text-green-800 mb-2">دار الإفتاء المصرية</h4>
                      <p className="text-sm text-green-700">
                        "لا مانع شرعاً من التعامل بالعملات الرقمية بشرط خلوها من المحاذير الشرعية وتحقق الضوابط المعتبرة."
                      </p>
                    </div>

                    <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
                      <h4 className="font-semibold text-purple-800 mb-2">المجمع الفقهي الإسلامي</h4>
                      <p className="text-sm text-purple-700">
                        "يجب دراسة كل عملة مشفرة على حدة وفقاً لخصائصها واستخداماتها ومدى مطابقتها للأحكام الشرعية."
                      </p>
                    </div>

                    <div className="p-4 border-l-4 border-orange-500 bg-orange-50">
                      <h4 className="font-semibold text-orange-800 mb-2">هيئة كبار العلماء - السعودية</h4>
                      <p className="text-sm text-orange-700">
                        "العبرة بالمضمون والحقيقة لا بالشكل والمظهر. العملات المدعومة بأصول حقيقية أولى بالقبول."
                      </p>
                    </div>

                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">نصائح للمستثمر المسلم</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• استشر عالماً متخصصاً قبل الاستثمار</li>
                        <li>• ادرس طبيعة العملة وآلية عملها</li>
                        <li>• تجنب المضاربة المفرطة</li>
                        <li>• اختر العملات ذات القيمة النفعية</li>
                        <li>• راجع التحديثات الفقهية باستمرار</li>
                      </ul>
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
            © 2025 CED Bank - محرك الامتثال الشرعي للعملات المشفرة - Yakoubi Yamina
          </p>
          <p>
            🔐 تحليل فقهي معتمد - ذكاء اصطناعي إسلامي - استشارات شرعية موثوقة
          </p>
        </div>
      </div>
    </div>
  );
}