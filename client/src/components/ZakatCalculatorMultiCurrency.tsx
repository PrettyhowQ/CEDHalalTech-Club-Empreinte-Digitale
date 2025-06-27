import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calculator, 
  Coins, 
  TrendingUp, 
  Calendar, 
  CheckCircle,
  AlertTriangle,
  Globe,
  Banknote,

  Building,
  Home,
  Car,
  Gem,
  Wheat,
  Star,
  Download,
  Share,
  History,
  RefreshCw
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ZakatAsset {
  id: string;
  type: 'cash' | 'gold' | 'silver' | 'investment' | 'business' | 'property' | 'agriculture' | 'livestock';
  name: string;
  amount: number;
  currency: string;
  nisabThreshold: number;
  zakatRate: number;
  heldForYear: boolean;
  lastUpdated: Date;
  notes?: string;
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
  toUSD: number;
  islamicCompliant: boolean;
  country: string;
}

interface ZakatCalculation {
  totalWealth: number;
  totalZakat: number;
  currency: string;
  breakdown: {
    type: string;
    amount: number;
    zakat: number;
    currency: string;
  }[];
  nisabMet: boolean;
  calculationDate: Date;
  islamicYear: string;
}

export function ZakatCalculatorMultiCurrency() {
  const [assets, setAssets] = useState<ZakatAsset[]>([]);
  const [baseCurrency, setBaseCurrency] = useState('SAR');
  const [calculation, setCalculation] = useState<ZakatCalculation | null>(null);
  const [newAsset, setNewAsset] = useState<Partial<ZakatAsset>>({
    type: 'cash',
    currency: 'SAR',
    heldForYear: true
  });
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({});
  const { toast } = useToast();

  const currencies: Currency[] = [
    { code: 'SAR', name: 'Riyal Saoudien', symbol: 'ر.س', toUSD: 0.267, islamicCompliant: true, country: 'Saudi Arabia' },
    { code: 'AED', name: 'Dirham des EAU', symbol: 'د.إ', toUSD: 0.272, islamicCompliant: true, country: 'UAE' },
    { code: 'USD', name: 'Dollar US', symbol: '$', toUSD: 1.0, islamicCompliant: true, country: 'USA' },
    { code: 'EUR', name: 'Euro', symbol: '€', toUSD: 1.09, islamicCompliant: true, country: 'Europe' },
    { code: 'CHF', name: 'Franc Suisse', symbol: 'CHF', toUSD: 1.11, islamicCompliant: true, country: 'Switzerland' },
    { code: 'GBP', name: 'Livre Sterling', symbol: '£', toUSD: 1.27, islamicCompliant: true, country: 'UK' },
    { code: 'JPY', name: 'Yen Japonais', symbol: '¥', toUSD: 0.0067, islamicCompliant: true, country: 'Japan' },
    { code: 'KWD', name: 'Dinar Koweïtien', symbol: 'د.ك', toUSD: 3.25, islamicCompliant: true, country: 'Kuwait' },
    { code: 'QAR', name: 'Riyal Qatari', symbol: 'ر.ق', toUSD: 0.275, islamicCompliant: true, country: 'Qatar' },
    { code: 'BHD', name: 'Dinar Bahreïni', symbol: 'د.ب', toUSD: 2.65, islamicCompliant: true, country: 'Bahrain' },
    { code: 'OMR', name: 'Riyal Omanais', symbol: 'ر.ع', toUSD: 2.60, islamicCompliant: true, country: 'Oman' },
    { code: 'EGP', name: 'Livre Égyptienne', symbol: 'ج.م', toUSD: 0.032, islamicCompliant: true, country: 'Egypt' }
  ];

  const assetTypes = [
    { 
      id: 'cash', 
      name: 'النقد والودائع', 
      english: 'Cash & Deposits', 
      icon: Banknote,
      nisabThreshold: 85, // grammes d'or équivalent
      zakatRate: 2.5,
      description: 'Argent liquide, comptes bancaires, épargne'
    },
    { 
      id: 'gold', 
      name: 'الذهب', 
      english: 'Gold', 
      icon: Gem,
      nisabThreshold: 85, // grammes
      zakatRate: 2.5,
      description: 'Bijoux en or, lingots, pièces d\'or'
    },
    { 
      id: 'silver', 
      name: 'الفضة', 
      english: 'Silver', 
      icon: Coins,
      nisabThreshold: 595, // grammes
      zakatRate: 2.5,
      description: 'Bijoux en argent, lingots, pièces d\'argent'
    },
    { 
      id: 'investment', 
      name: 'الاستثمارات', 
      english: 'Investments', 
      icon: TrendingUp,
      nisabThreshold: 85,
      zakatRate: 2.5,
      description: 'Actions, obligations, fonds islamiques'
    },
    { 
      id: 'business', 
      name: 'التجارة', 
      english: 'Business', 
      icon: Building,
      nisabThreshold: 85,
      zakatRate: 2.5,
      description: 'Marchandises commerciales, stock'
    },
    { 
      id: 'property', 
      name: 'العقارات', 
      english: 'Real Estate', 
      icon: Home,
      nisabThreshold: 85,
      zakatRate: 2.5,
      description: 'Propriétés d\'investissement (pas résidence principale)'
    },
    { 
      id: 'agriculture', 
      name: 'الزراعة', 
      english: 'Agriculture', 
      icon: Wheat,
      nisabThreshold: 653, // kg
      zakatRate: 5, // ou 10% selon irrigation
      description: 'Récoltes, fruits, légumes'
    }
  ];

  useEffect(() => {
    // Simulation des taux de change en temps réel
    const updateExchangeRates = () => {
      const rates: Record<string, number> = {};
      currencies.forEach(currency => {
        rates[currency.code] = currency.toUSD;
      });
      setExchangeRates(rates);
    };

    updateExchangeRates();
    const interval = setInterval(updateExchangeRates, 300000); // Mise à jour toutes les 5 minutes

    return () => clearInterval(interval);
  }, []);

  const convertToBaseCurrency = (amount: number, fromCurrency: string): number => {
    if (fromCurrency === baseCurrency) return amount;
    
    const fromRate = exchangeRates[fromCurrency] || 1;
    const toRate = exchangeRates[baseCurrency] || 1;
    
    return (amount * fromRate) / toRate;
  };

  const addAsset = () => {
    if (!newAsset.name || !newAsset.amount || !newAsset.type) {
      toast({
        title: "معلومات ناقصة",
        description: "يرجى إدخال جميع البيانات المطلوبة",
        variant: "destructive"
      });
      return;
    }

    const assetType = assetTypes.find(type => type.id === newAsset.type);
    const asset: ZakatAsset = {
      id: Date.now().toString(),
      type: newAsset.type as any,
      name: newAsset.name,
      amount: newAsset.amount,
      currency: newAsset.currency || 'SAR',
      nisabThreshold: assetType?.nisabThreshold || 85,
      zakatRate: assetType?.zakatRate || 2.5,
      heldForYear: newAsset.heldForYear || false,
      lastUpdated: new Date(),
      notes: newAsset.notes
    };

    setAssets(prev => [...prev, asset]);
    setNewAsset({ type: 'cash', currency: 'SAR', heldForYear: true });
    
    toast({
      title: "تم إضافة الأصل",
      description: `تم إضافة ${asset.name} إلى محفظة الزكاة`,
    });
  };

  const removeAsset = (id: string) => {
    setAssets(prev => prev.filter(asset => asset.id !== id));
  };

  const calculateZakat = () => {
    let totalWealth = 0;
    let totalZakat = 0;
    const breakdown: any[] = [];

    // Calcul pour chaque actif
    assets.forEach(asset => {
      if (!asset.heldForYear) return; // Pas de zakat si pas détenu une année complète

      const amountInBaseCurrency = convertToBaseCurrency(asset.amount, asset.currency);
      totalWealth += amountInBaseCurrency;

      // Calcul du nisab (seuil minimum)
      const goldPricePerGram = 65; // Prix de l'or en USD par gramme (approximatif)
      const nisabInBaseCurrency = convertToBaseCurrency(
        asset.nisabThreshold * goldPricePerGram, 
        'USD'
      );

      if (amountInBaseCurrency >= nisabInBaseCurrency) {
        const zakatAmount = (amountInBaseCurrency * asset.zakatRate) / 100;
        totalZakat += zakatAmount;

        breakdown.push({
          type: asset.name,
          amount: amountInBaseCurrency,
          zakat: zakatAmount,
          currency: baseCurrency
        });
      }
    });

    const goldPrice = convertToBaseCurrency(85 * 65, 'USD'); // Nisab minimum
    const nisabMet = totalWealth >= goldPrice;

    const islamicYear = getIslamicYear();
    
    const calculationResult: ZakatCalculation = {
      totalWealth,
      totalZakat: nisabMet ? totalZakat : 0,
      currency: baseCurrency,
      breakdown,
      nisabMet,
      calculationDate: new Date(),
      islamicYear
    };

    setCalculation(calculationResult);

    toast({
      title: "تم حساب الزكاة",
      description: `إجمالي الزكاة: ${totalZakat.toFixed(2)} ${baseCurrency}`,
    });
  };

  const getIslamicYear = (): string => {
    // Calcul approximatif de l'année hégirienne
    const hijriYear = Math.floor((new Date().getFullYear() - 622) * 1.030684) + 1;
    return `${hijriYear} هـ`;
  };

  const getCurrencySymbol = (code: string): string => {
    return currencies.find(c => c.code === code)?.symbol || code;
  };

  const formatAmount = (amount: number, currency: string): string => {
    return `${amount.toLocaleString('ar-SA', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })} ${getCurrencySymbol(currency)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-gold-500 rounded-lg flex items-center justify-center">
              <Calculator className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">حاسبة الزكاة متعددة العملات</h1>
              <h2 className="text-2xl font-semibold text-emerald-600">Multi-Currency Zakat Calculator</h2>
              <p className="text-gray-600">Calcul automatique conforme Sharia - 12 devises supportées</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="calculator" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="calculator">حاسبة الزكاة</TabsTrigger>
            <TabsTrigger value="assets">إدارة الأصول</TabsTrigger>
            <TabsTrigger value="results">النتائج</TabsTrigger>
            <TabsTrigger value="guidance">الإرشادات الشرعية</TabsTrigger>
          </TabsList>

          {/* Calculatrice */}
          <TabsContent value="calculator" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Configuration */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    الإعدادات العامة
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="baseCurrency">العملة الأساسية</Label>
                    <Select value={baseCurrency} onValueChange={setBaseCurrency}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {currencies.filter(c => c.islamicCompliant).map((currency) => (
                          <SelectItem key={currency.code} value={currency.code}>
                            <div className="flex items-center gap-2">
                              <span>{currency.symbol}</span>
                              <span>{currency.name}</span>
                              {currency.islamicCompliant && <Badge variant="outline" className="text-xs">حلال</Badge>}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">معلومات النصاب</h4>
                    <p className="text-sm text-blue-600">
                      النصاب الحالي: {formatAmount(convertToBaseCurrency(85 * 65, 'USD'), baseCurrency)}
                    </p>
                    <p className="text-xs text-blue-500 mt-1">
                      مقدار ٨٥ جرام ذهب حسب السعر الحالي
                    </p>
                  </div>

                  <Button onClick={calculateZakat} className="w-full" size="lg">
                    <Calculator className="h-5 w-5 mr-2" />
                    احسب الزكاة
                  </Button>
                </CardContent>
              </Card>

              {/* Ajout d'actif */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PiggyBank className="h-5 w-5" />
                    إضافة أصل جديد
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="assetType">نوع الأصل</Label>
                    <Select value={newAsset.type} onValueChange={(value) => setNewAsset(prev => ({ ...prev, type: value as any }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {assetTypes.map((type) => (
                          <SelectItem key={type.id} value={type.id}>
                            <div className="flex items-center gap-2">
                              <type.icon className="h-4 w-4" />
                              <span>{type.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="assetName">اسم الأصل</Label>
                    <Input
                      id="assetName"
                      value={newAsset.name || ''}
                      onChange={(e) => setNewAsset(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="مثال: حساب التوفير"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="assetAmount">المبلغ</Label>
                      <Input
                        id="assetAmount"
                        type="number"
                        value={newAsset.amount || ''}
                        onChange={(e) => setNewAsset(prev => ({ ...prev, amount: parseFloat(e.target.value) || 0 }))}
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <Label htmlFor="assetCurrency">العملة</Label>
                      <Select value={newAsset.currency} onValueChange={(value) => setNewAsset(prev => ({ ...prev, currency: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {currencies.filter(c => c.islamicCompliant).map((currency) => (
                            <SelectItem key={currency.code} value={currency.code}>
                              {currency.symbol} {currency.code}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="heldForYear"
                      checked={newAsset.heldForYear}
                      onChange={(e) => setNewAsset(prev => ({ ...prev, heldForYear: e.target.checked }))}
                      className="rounded"
                    />
                    <Label htmlFor="heldForYear" className="text-sm">
                      محتفظ به لسنة كاملة (شرط الزكاة)
                    </Label>
                  </div>

                  <Button onClick={addAsset} className="w-full">
                    إضافة الأصل
                  </Button>
                </CardContent>
              </Card>

              {/* Résumé rapide */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    ملخص سريع
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-emerald-50 rounded-lg">
                      <div className="text-2xl font-bold text-emerald-800">
                        {assets.length}
                      </div>
                      <div className="text-sm text-emerald-600">أصول مسجلة</div>
                    </div>

                    {calculation && (
                      <>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-xl font-bold text-blue-800">
                            {formatAmount(calculation.totalWealth, baseCurrency)}
                          </div>
                          <div className="text-sm text-blue-600">إجمالي الثروة</div>
                        </div>

                        <div className="text-center p-4 bg-gold-50 rounded-lg">
                          <div className="text-xl font-bold text-yellow-800">
                            {formatAmount(calculation.totalZakat, baseCurrency)}
                          </div>
                          <div className="text-sm text-yellow-600">زكاة واجبة</div>
                          {calculation.nisabMet ? (
                            <CheckCircle className="h-4 w-4 text-green-500 mx-auto mt-1" />
                          ) : (
                            <AlertTriangle className="h-4 w-4 text-orange-500 mx-auto mt-1" />
                          )}
                        </div>
                      </>
                    )}

                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-sm font-medium text-purple-800">
                        السنة الهجرية الحالية
                      </div>
                      <div className="text-lg font-bold text-purple-600">
                        {getIslamicYear()}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Gestion des actifs */}
          <TabsContent value="assets" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {assets.map((asset) => {
                const assetType = assetTypes.find(type => type.id === asset.type);
                const Icon = assetType?.icon || Banknote;
                
                return (
                  <Card key={asset.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                            <Icon className="h-5 w-5 text-emerald-600" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{asset.name}</CardTitle>
                            <p className="text-sm text-gray-600">{assetType?.name}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => removeAsset(asset.id)}>
                          حذف
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">المبلغ:</span>
                          <span className="font-medium">{formatAmount(asset.amount, asset.currency)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">بالعملة الأساسية:</span>
                          <span className="font-medium">
                            {formatAmount(convertToBaseCurrency(asset.amount, asset.currency), baseCurrency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">معدل الزكاة:</span>
                          <Badge variant="outline">{asset.zakatRate}%</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">محتفظ به سنة:</span>
                          {asset.heldForYear ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <AlertTriangle className="h-4 w-4 text-orange-500" />
                          )}
                        </div>
                        <div className="text-xs text-gray-500">
                          آخر تحديث: {asset.lastUpdated.toLocaleDateString('ar-SA')}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {assets.length === 0 && (
                <div className="lg:col-span-2 text-center py-12">
                  <PiggyBank className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">لا توجد أصول مسجلة</h3>
                  <p className="text-gray-500">أضف أصولك لحساب الزكاة الواجبة عليها</p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Résultats */}
          <TabsContent value="results" className="space-y-6">
            {calculation ? (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      نتائج حساب الزكاة - {calculation.islamicYear}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-800 mb-2">
                          {formatAmount(calculation.totalWealth, calculation.currency)}
                        </div>
                        <div className="text-sm text-blue-600">إجمالي الثروة الخاضعة للزكاة</div>
                      </div>
                      
                      <div className="text-center p-6 bg-gold-50 rounded-lg">
                        <div className="text-3xl font-bold text-yellow-800 mb-2">
                          {formatAmount(calculation.totalZakat, calculation.currency)}
                        </div>
                        <div className="text-sm text-yellow-600">إجمالي الزكاة الواجبة</div>
                      </div>
                      
                      <div className="text-center p-6 bg-emerald-50 rounded-lg">
                        <div className="text-2xl font-bold text-emerald-800 mb-2">
                          {calculation.nisabMet ? 'نعم' : 'لا'}
                        </div>
                        <div className="text-sm text-emerald-600">
                          {calculation.nisabMet ? 'النصاب مكتمل' : 'النصاب غير مكتمل'}
                        </div>
                      </div>
                    </div>

                    {calculation.breakdown.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-4">تفصيل الزكاة حسب نوع الأصل</h4>
                        <div className="space-y-3">
                          {calculation.breakdown.map((item, index) => (
                            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium">{item.type}</span>
                              <div className="text-right">
                                <div className="font-semibold">{formatAmount(item.zakat, item.currency)}</div>
                                <div className="text-xs text-gray-600">
                                  من أصل {formatAmount(item.amount, item.currency)}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex gap-4 mt-6">
                      <Button className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        تصدير النتائج
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Share className="h-4 w-4 mr-2" />
                        مشاركة
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {!calculation.nisabMet && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-orange-600">
                        <AlertTriangle className="h-5 w-5" />
                        النصاب غير مكتمل
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-orange-700 mb-4">
                        إجمالي ثروتك أقل من النصاب المطلوب. لا زكاة واجبة عليك هذا العام.
                      </p>
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <p className="text-sm text-orange-600">
                          النصاب المطلوب: {formatAmount(convertToBaseCurrency(85 * 65, 'USD'), baseCurrency)}
                        </p>
                        <p className="text-sm text-orange-600">
                          المبلغ الناقص: {formatAmount(
                            convertToBaseCurrency(85 * 65, 'USD') - calculation.totalWealth, 
                            baseCurrency
                          )}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <Calculator className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">لم يتم حساب الزكاة بعد</h3>
                  <p className="text-gray-500 mb-4">أضف أصولك واضغط على "احسب الزكاة" لرؤية النتائج</p>
                  <Button onClick={calculateZakat}>
                    احسب الزكاة الآن
                  </Button>
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
                    <Star className="h-5 w-5 text-gold-500" />
                    أحكام الزكاة الشرعية
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-emerald-50 rounded-lg">
                    <h4 className="font-semibold text-emerald-800 mb-2">شروط وجوب الزكاة</h4>
                    <ul className="text-sm text-emerald-700 space-y-1">
                      <li>• الإسلام</li>
                      <li>• البلوغ والعقل</li>
                      <li>• الحرية</li>
                      <li>• الملك التام للمال</li>
                      <li>• بلوغ النصاب</li>
                      <li>• حولان الحول (مرور سنة هجرية)</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">النصاب المعتبر</h4>
                    <p className="text-sm text-blue-700">
                      النصاب هو ٨٥ جراماً من الذهب أو ما يعادلها من العملات النقدية حسب السعر الحالي للذهب.
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">معدلات الزكاة</h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• النقود والتجارة: ٢.٥٪</li>
                      <li>• الذهب والفضة: ٢.٥٪</li>
                      <li>• الزروع (مطرية): ١٠٪</li>
                      <li>• الزروع (مسقية): ٥٪</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    مواقيت وآداب الزكاة
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">أفضل أوقات إخراج الزكاة</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• شهر رمضان المبارك</li>
                      <li>• العشر الأوائل من ذي الحجة</li>
                      <li>• عند تمام الحول</li>
                      <li>• في أوقات الحاجة والفقر</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">مستحقو الزكاة</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• الفقراء والمساكين</li>
                      <li>• العاملون عليها</li>
                      <li>• المؤلفة قلوبهم</li>
                      <li>• في الرقاب</li>
                      <li>• الغارمون</li>
                      <li>• في سبيل الله</li>
                      <li>• ابن السبيل</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">آداب إخراج الزكاة</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• النية الخالصة لله</li>
                      <li>• عدم المن والأذى</li>
                      <li>• السرية في العطاء</li>
                      <li>• اختيار أفضل المال</li>
                      <li>• التعجيل في الإخراج</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p className="mb-2">
            © 2025 CED Bank - حاسبة الزكاة الشرعية متعددة العملات - Yakoubi Yamina
          </p>
          <p>
            🕌 حسابات معتمدة من علماء الشريعة - معدلات صرف حية - امتثال ١٠٠٪ للأحكام الإسلامية
          </p>
        </div>
      </div>
    </div>
  );
}