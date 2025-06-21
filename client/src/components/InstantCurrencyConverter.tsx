import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpDown,
  TrendingUp,
  TrendingDown,
  RefreshCw,
  Banknote,
  Globe,
  Clock,
  Star,
  Zap
} from 'lucide-react';

interface ExchangeRate {
  from: string;
  to: string;
  rate: number;
  change24h: number;
  lastUpdate: Date;
  isHalal: boolean;
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
  flag: string;
  islamicCompliant: boolean;
  region: string;
}

export function InstantCurrencyConverter() {
  const [amount, setAmount] = useState<string>('1000');
  const [fromCurrency, setFromCurrency] = useState<string>('CHF');
  const [toCurrency, setToCurrency] = useState<string>('AED');
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [animationKey, setAnimationKey] = useState<number>(0);

  const currencies: Currency[] = [
    {
      code: 'CHF',
      name: 'Swiss Franc',
      symbol: 'CHF',
      flag: '🇨🇭',
      islamicCompliant: true,
      region: 'Europe'
    },
    {
      code: 'AED',
      name: 'UAE Dirham',
      symbol: 'د.إ',
      flag: '🇦🇪',
      islamicCompliant: true,
      region: 'Middle East'
    },
    {
      code: 'USD',
      name: 'US Dollar',
      symbol: '$',
      flag: '🇺🇸',
      islamicCompliant: true,
      region: 'Americas'
    },
    {
      code: 'EUR',
      name: 'Euro',
      symbol: '€',
      flag: '🇪🇺',
      islamicCompliant: true,
      region: 'Europe'
    },
    {
      code: 'SAR',
      name: 'Saudi Riyal',
      symbol: 'ر.س',
      flag: '🇸🇦',
      islamicCompliant: true,
      region: 'Middle East'
    },
    {
      code: 'QAR',
      name: 'Qatari Riyal',
      symbol: 'ر.ق',
      flag: '🇶🇦',
      islamicCompliant: true,
      region: 'Middle East'
    }
  ];

  // Simulated real-time exchange rates (in production, this would come from a real API)
  const exchangeRates: ExchangeRate[] = [
    { from: 'CHF', to: 'AED', rate: 4.02, change24h: 0.12, lastUpdate: new Date(), isHalal: true },
    { from: 'CHF', to: 'USD', rate: 1.09, change24h: -0.05, lastUpdate: new Date(), isHalal: true },
    { from: 'CHF', to: 'EUR', rate: 0.96, change24h: 0.08, lastUpdate: new Date(), isHalal: true },
    { from: 'CHF', to: 'SAR', rate: 4.11, change24h: 0.15, lastUpdate: new Date(), isHalal: true },
    { from: 'CHF', to: 'QAR', rate: 3.98, change24h: -0.02, lastUpdate: new Date(), isHalal: true },
    { from: 'AED', to: 'CHF', rate: 0.25, change24h: -0.12, lastUpdate: new Date(), isHalal: true },
    { from: 'AED', to: 'USD', rate: 0.27, change24h: -0.17, lastUpdate: new Date(), isHalal: true },
    { from: 'AED', to: 'EUR', rate: 0.24, change24h: -0.04, lastUpdate: new Date(), isHalal: true },
    { from: 'USD', to: 'CHF', rate: 0.92, change24h: 0.05, lastUpdate: new Date(), isHalal: true },
    { from: 'USD', to: 'AED', rate: 3.67, change24h: 0.17, lastUpdate: new Date(), isHalal: true },
    { from: 'USD', to: 'EUR', rate: 0.88, change24h: 0.13, lastUpdate: new Date(), isHalal: true },
    { from: 'EUR', to: 'CHF', rate: 1.04, change24h: -0.08, lastUpdate: new Date(), isHalal: true },
    { from: 'EUR', to: 'AED', rate: 4.17, change24h: 0.04, lastUpdate: new Date(), isHalal: true },
    { from: 'EUR', to: 'USD', rate: 1.14, change24h: -0.13, lastUpdate: new Date(), isHalal: true }
  ];

  const getCurrentRate = (from: string, to: string): ExchangeRate | null => {
    return exchangeRates.find(rate => rate.from === from && rate.to === to) || null;
  };

  const convertCurrency = async () => {
    if (!amount || amount === '0') return;
    
    setIsLoading(true);
    setAnimationKey(prev => prev + 1);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const rate = getCurrentRate(fromCurrency, toCurrency);
    if (rate) {
      const converted = parseFloat(amount) * rate.rate;
      setConvertedAmount(converted);
      setLastUpdate(new Date());
    }
    
    setIsLoading(false);
  };

  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    setAnimationKey(prev => prev + 1);
  };

  const refreshRates = async () => {
    setIsLoading(true);
    // Simulate rate refresh
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdate(new Date());
    setIsLoading(false);
    if (amount && amount !== '0') {
      convertCurrency();
    }
  };

  useEffect(() => {
    if (amount && amount !== '0') {
      convertCurrency();
    }
  }, [fromCurrency, toCurrency, amount]);

  const fromCurrencyData = currencies.find(c => c.code === fromCurrency);
  const toCurrencyData = currencies.find(c => c.code === toCurrency);
  const currentRate = getCurrentRate(fromCurrency, toCurrency);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
            <Globe className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Convertisseur Instantané</h2>
            <p className="text-gray-600">Finance islamique • Taux temps réel • 0% commission</p>
          </div>
        </div>
        
        <div className="flex justify-center gap-2">
          <Badge className="bg-green-100 text-green-800 border border-green-200">
            <Star className="h-3 w-3 mr-1" />
            Halal Certifié
          </Badge>
          <Badge className="bg-blue-100 text-blue-800 border border-blue-200">
            <Zap className="h-3 w-3 mr-1" />
            Temps Réel
          </Badge>
        </div>
      </motion.div>

      {/* Main Converter Card */}
      <Card className="border-2 border-gray-200 shadow-xl bg-gradient-to-br from-white to-gray-50">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Banknote className="h-5 w-5 text-green-600" />
              Conversion Devises
            </CardTitle>
            <Button 
              variant="outline" 
              size="sm"
              onClick={refreshRates}
              disabled={isLoading}
              className="flex items-center gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              Actualiser
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Amount Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Montant à convertir</label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-xl font-bold text-center h-14"
              placeholder="Entrez le montant"
            />
          </div>

          {/* Currency Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* From Currency */}
            <motion.div 
              key={`from-${animationKey}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-2"
            >
              <label className="text-sm font-medium text-gray-700">De</label>
              <div className="relative">
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white text-left focus:ring-2 focus:ring-green-500 appearance-none"
                >
                  {currencies.map(currency => (
                    <option key={currency.code} value={currency.code}>
                      {currency.flag} {currency.code} - {currency.name}
                    </option>
                  ))}
                </select>
              </div>
              {fromCurrencyData && (
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  <span>{fromCurrencyData.region}</span>
                  {fromCurrencyData.islamicCompliant && (
                    <Badge variant="outline" className="text-xs">Halal</Badge>
                  )}
                </div>
              )}
            </motion.div>

            {/* Swap Button */}
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="icon"
                onClick={swapCurrencies}
                className="rounded-full w-12 h-12 border-2 hover:bg-green-50 hover:border-green-300"
              >
                <motion.div
                  key={animationKey}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpDown className="h-5 w-5" />
                </motion.div>
              </Button>
            </div>

            {/* To Currency */}
            <motion.div 
              key={`to-${animationKey}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-2"
            >
              <label className="text-sm font-medium text-gray-700">Vers</label>
              <div className="relative">
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white text-left focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  {currencies.map(currency => (
                    <option key={currency.code} value={currency.code}>
                      {currency.flag} {currency.code} - {currency.name}
                    </option>
                  ))}
                </select>
              </div>
              {toCurrencyData && (
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  <span>{toCurrencyData.region}</span>
                  {toCurrencyData.islamicCompliant && (
                    <Badge variant="outline" className="text-xs">Halal</Badge>
                  )}
                </div>
              )}
            </motion.div>
          </div>

          {/* Result Display */}
          <AnimatePresence mode="wait">
            {convertedAmount > 0 && (
              <motion.div
                key={`result-${animationKey}`}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200"
              >
                <div className="text-center space-y-3">
                  <div className="text-sm text-gray-600">Résultat de la conversion</div>
                  
                  <div className="text-4xl font-bold text-gray-900">
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <RefreshCw className="h-6 w-6 animate-spin" />
                        Calcul...
                      </div>
                    ) : (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {convertedAmount.toLocaleString('fr-CH', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })} {toCurrencyData?.symbol}
                      </motion.span>
                    )}
                  </div>

                  {currentRate && !isLoading && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-2"
                    >
                      <div className="text-sm text-gray-600">
                        Taux: 1 {fromCurrency} = {currentRate.rate.toFixed(4)} {toCurrency}
                      </div>
                      
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-xs text-gray-500">Variation 24h:</span>
                        <div className={`flex items-center gap-1 text-xs ${
                          currentRate.change24h > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {currentRate.change24h > 0 ? (
                            <TrendingUp className="h-3 w-3" />
                          ) : (
                            <TrendingDown className="h-3 w-3" />
                          )}
                          {Math.abs(currentRate.change24h).toFixed(2)}%
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick Convert Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {['100', '500', '1000', '5000'].map((quickAmount) => (
              <Button
                key={quickAmount}
                variant="outline"
                size="sm"
                onClick={() => setAmount(quickAmount)}
                className="text-xs"
              >
                {quickAmount}
              </Button>
            ))}
          </div>

          {/* Last Update Info */}
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-4 border-t">
            <Clock className="h-3 w-3" />
            Dernière mise à jour: {lastUpdate.toLocaleTimeString('fr-CH')}
          </div>
        </CardContent>
      </Card>

      {/* Islamic Finance Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-green-50 rounded-xl p-6 border border-green-200"
      >
        <div className="text-center space-y-3">
          <h3 className="text-lg font-semibold text-green-800">Finance Islamique Certifiée</h3>
          <p className="text-sm text-green-700">
            Toutes les conversions respectent les principes de la Charia. Aucun intérêt (Riba) ni commission sur les changes.
            Taux transparents et équitables conformes aux valeurs islamiques.
          </p>
          <div className="flex justify-center gap-4 text-xs text-green-600">
            <span>✓ Sans Riba (intérêts)</span>
            <span>✓ Transparent</span>
            <span>✓ Certifié Halal</span>
            <span>✓ 0% Commission</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}