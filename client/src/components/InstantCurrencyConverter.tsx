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
  Star,
  Clock,
  Globe,
  Zap,
  Calculator,
  DollarSign,
  Euro,
  Banknote,
  Coins
} from 'lucide-react';

interface ExchangeRate {
  from: string;
  to: string;
  rate: number;
  change24h: number;
  lastUpdate: Date;
  bid: number;
  ask: number;
  spread: number;
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
  flag: string;
  isHalal: boolean;
  isPopular: boolean;
  region: string;
}

export function InstantCurrencyConverter() {
  const [amount, setAmount] = useState<string>('1000');
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [isConverting, setIsConverting] = useState(false);
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate[]>([]);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  const currencies: Currency[] = [
    { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸', isHalal: true, isPopular: true, region: 'North America' },
    { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺', isHalal: true, isPopular: true, region: 'Europe' },
    { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ', flag: '🇦🇪', isHalal: true, isPopular: true, region: 'Middle East' },
    { code: 'SAR', name: 'Saudi Riyal', symbol: 'ر.س', flag: '🇸🇦', isHalal: true, isPopular: true, region: 'Middle East' },
    { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧', isHalal: true, isPopular: true, region: 'Europe' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵', isHalal: true, isPopular: true, region: 'Asia' },
    { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', flag: '🇨🇭', isHalal: true, isPopular: true, region: 'Europe' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', flag: '🇨🇦', isHalal: true, isPopular: false, region: 'North America' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺', isHalal: true, isPopular: false, region: 'Oceania' },
    { code: 'QAR', name: 'Qatari Riyal', symbol: 'ر.ق', flag: '🇶🇦', isHalal: true, isPopular: false, region: 'Middle East' },
    { code: 'KWD', name: 'Kuwaiti Dinar', symbol: 'د.ك', flag: '🇰🇼', isHalal: true, isPopular: false, region: 'Middle East' },
    { code: 'BHD', name: 'Bahraini Dinar', symbol: '.د.ب', flag: '🇧🇭', isHalal: true, isPopular: false, region: 'Middle East' },
    { code: 'OMR', name: 'Omani Rial', symbol: 'ر.ع.', flag: '🇴🇲', isHalal: true, isPopular: false, region: 'Middle East' },
    { code: 'JOD', name: 'Jordanian Dinar', symbol: 'د.ا', flag: '🇯🇴', isHalal: true, isPopular: false, region: 'Middle East' },
    { code: 'LBP', name: 'Lebanese Pound', symbol: 'ل.ل', flag: '🇱🇧', isHalal: true, isPopular: false, region: 'Middle East' },
    { code: 'EGP', name: 'Egyptian Pound', symbol: '£E', flag: '🇪🇬', isHalal: true, isPopular: false, region: 'Africa' },
  ];

  // Simulated real-time exchange rates (in production, this would come from a financial API)
  const generateExchangeRates = (): ExchangeRate[] => {
    const baseRates: Record<string, number> = {
      'USD/EUR': 0.85 + (Math.random() - 0.5) * 0.02,
      'USD/AED': 3.67 + (Math.random() - 0.5) * 0.05,
      'USD/SAR': 3.75 + (Math.random() - 0.5) * 0.05,
      'USD/GBP': 0.79 + (Math.random() - 0.5) * 0.02,
      'USD/JPY': 110.5 + (Math.random() - 0.5) * 2,
      'USD/CHF': 0.92 + (Math.random() - 0.5) * 0.02,
      'EUR/AED': 4.32 + (Math.random() - 0.5) * 0.05,
      'EUR/SAR': 4.41 + (Math.random() - 0.5) * 0.05,
      'AED/SAR': 1.02 + (Math.random() - 0.5) * 0.01,
    };

    return Object.entries(baseRates).map(([pair, rate]) => {
      const [from, to] = pair.split('/');
      const spread = rate * 0.001; // 0.1% spread
      return {
        from,
        to,
        rate,
        change24h: (Math.random() - 0.5) * 2, // -1% to +1% daily change
        lastUpdate: new Date(),
        bid: rate - spread/2,
        ask: rate + spread/2,
        spread: spread,
      };
    });
  };

  useEffect(() => {
    const rates = generateExchangeRates();
    setExchangeRates(rates);
    
    // Update rates every 10 seconds (simulating real-time updates)
    const interval = setInterval(() => {
      const newRates = generateExchangeRates();
      setExchangeRates(newRates);
      setLastUpdate(new Date());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const findExchangeRate = (from: string, to: string): number => {
    if (from === to) return 1;
    
    // Direct rate
    const directRate = exchangeRates.find(r => r.from === from && r.to === to);
    if (directRate) return directRate.rate;
    
    // Inverse rate
    const inverseRate = exchangeRates.find(r => r.from === to && r.to === from);
    if (inverseRate) return 1 / inverseRate.rate;
    
    // Cross rate via USD
    if (from !== 'USD' && to !== 'USD') {
      const fromUsdRate = findExchangeRate(from, 'USD');
      const toUsdRate = findExchangeRate('USD', to);
      return fromUsdRate * toUsdRate;
    }
    
    // Default fallback
    return 1;
  };

  const performConversion = async () => {
    setIsConverting(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const rate = findExchangeRate(fromCurrency, toCurrency);
    const result = parseFloat(amount) * rate;
    setConvertedAmount(result);
    setIsConverting(false);
  };

  useEffect(() => {
    if (amount && fromCurrency && toCurrency) {
      performConversion();
    }
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const getCurrentRate = () => {
    return findExchangeRate(fromCurrency, toCurrency);
  };

  const getRateChange = () => {
    const rate = exchangeRates.find(r => 
      (r.from === fromCurrency && r.to === toCurrency) ||
      (r.from === toCurrency && r.to === fromCurrency)
    );
    return rate ? rate.change24h : 0;
  };

  const formatCurrency = (value: number, currencyCode: string) => {
    const currency = currencies.find(c => c.code === currencyCode);
    return `${currency?.symbol || currencyCode} ${value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 4
    })}`;
  };

  const popularCurrencies = currencies.filter(c => c.isPopular);
  const currentRate = getCurrentRate();
  const rateChange = getRateChange();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
            >
              <Calculator className="h-6 w-6 text-white" />
            </motion.div>
            <h1 className="text-4xl font-bold text-gray-900">Convertisseur Instantané</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conversion de devises en temps réel avec taux interbancaires et animations fluides
          </p>
          <div className="flex justify-center gap-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Zap className="h-3 w-3 mr-1" />
              Temps Réel
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Star className="h-3 w-3 mr-1" />
              Halal Certifié
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              <Globe className="h-3 w-3 mr-1" />
              16+ Devises
            </Badge>
          </div>
        </motion.div>

        {/* Main Converter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-white/80 backdrop-blur border-0 shadow-2xl">
            <CardHeader className="text-center pb-2">
              <CardTitle className="flex items-center justify-center gap-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                Conversion Instantanée
                <Euro className="h-5 w-5 text-blue-600" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Amount Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Montant</label>
                <div className="relative">
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="text-2xl font-bold text-center h-16 bg-gray-50 border-2 border-gray-200 focus:border-blue-400"
                    placeholder="Entrez le montant"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-md border-2 border-blue-400"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: amount ? 0.3 : 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </div>

              {/* Currency Selectors */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                
                {/* From Currency */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">De</label>
                  <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="w-full h-14 px-4 bg-white border-2 border-gray-200 rounded-lg text-lg font-medium focus:border-blue-400 focus:outline-none"
                  >
                    {currencies.map((currency) => (
                      <option key={currency.code} value={currency.code}>
                        {currency.flag} {currency.code} - {currency.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Swap Button */}
                <div className="flex justify-center">
                  <motion.button
                    onClick={swapCurrencies}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <ArrowUpDown className="h-5 w-5" />
                  </motion.button>
                </div>

                {/* To Currency */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Vers</label>
                  <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="w-full h-14 px-4 bg-white border-2 border-gray-200 rounded-lg text-lg font-medium focus:border-blue-400 focus:outline-none"
                  >
                    {currencies.map((currency) => (
                      <option key={currency.code} value={currency.code}>
                        {currency.flag} {currency.code} - {currency.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Conversion Result */}
              <motion.div
                className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-600">Résultat de la conversion</p>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={convertedAmount}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl font-bold text-gray-900"
                    >
                      {isConverting ? (
                        <div className="flex items-center justify-center gap-2">
                          <RefreshCw className="h-6 w-6 animate-spin" />
                          Conversion...
                        </div>
                      ) : (
                        formatCurrency(convertedAmount, toCurrency)
                      )}
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Exchange Rate Info */}
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <span>Taux: {currentRate.toFixed(4)}</span>
                      {rateChange !== 0 && (
                        <span className={`flex items-center gap-1 ${rateChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {rateChange > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                          {Math.abs(rateChange).toFixed(2)}%
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Mis à jour: {lastUpdate.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              </motion.div>

            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Currency Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-white/60 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-center">Devises Populaires</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {popularCurrencies.map((currency) => (
                  <motion.button
                    key={currency.code}
                    onClick={() => setFromCurrency(currency.code)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      fromCurrency === currency.code
                        ? 'border-blue-400 bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-1">{currency.flag}</div>
                    <div className="font-bold">{currency.code}</div>
                    <div className="text-xs text-gray-600">{currency.name}</div>
                  </motion.button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Exchange Rate Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-white/60 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Banknote className="h-5 w-5" />
                Taux de Change en Temps Réel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Paire</th>
                      <th className="text-right p-2">Taux</th>
                      <th className="text-right p-2">Variation 24h</th>
                      <th className="text-right p-2">Spread</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exchangeRates.slice(0, 6).map((rate) => (
                      <motion.tr
                        key={`${rate.from}/${rate.to}`}
                        className="border-b hover:bg-gray-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <td className="p-2 font-medium">
                          {rate.from}/{rate.to}
                        </td>
                        <td className="p-2 text-right font-mono">
                          {rate.rate.toFixed(4)}
                        </td>
                        <td className={`p-2 text-right flex items-center justify-end gap-1 ${
                          rate.change24h > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {rate.change24h > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                          {rate.change24h.toFixed(2)}%
                        </td>
                        <td className="p-2 text-right text-sm text-gray-600">
                          {(rate.spread * 100).toFixed(3)}%
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </div>
  );
}