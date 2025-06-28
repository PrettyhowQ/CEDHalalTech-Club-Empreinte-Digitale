import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Calculator,
  Coins,
  TrendingUp,
  DollarSign,
  Euro,
  Banknote,
  Star,
  CheckCircle,
  Info,
  Heart,
  Play,
  Book
} from 'lucide-react';
import Footer from '@/components/Footer';
import QuickAccessWidget from '@/components/QuickAccessWidget';

type CurrencyCode = 'CHF' | 'EUR' | 'USD' | 'AED';

export default function ZakatCalculatorPage() {
  const [currency, setCurrency] = useState<CurrencyCode>('CHF');
  const [wealth, setWealth] = useState('');
  const [zakatAmount, setZakatAmount] = useState(0);

  const currencies = [
    { code: 'CHF' as const, symbol: 'CHF', name: 'Franc Suisse', icon: Banknote },
    { code: 'EUR' as const, symbol: '€', name: 'Euro', icon: Euro },
    { code: 'USD' as const, symbol: '$', name: 'Dollar US', icon: DollarSign },
    { code: 'AED' as const, symbol: 'AED', name: 'Dirham UAE', icon: Coins }
  ];

  const nisabValues: Record<CurrencyCode, number> = {
    CHF: 4500,
    EUR: 4200,
    USD: 4800,
    AED: 17640
  };

  const calculateZakat = () => {
    const wealthValue = parseFloat(wealth);
    const nisab = nisabValues[currency];
    
    if (wealthValue >= nisab) {
      const zakat = wealthValue * 0.025; // 2.5%
      setZakatAmount(zakat);
    } else {
      setZakatAmount(0);
    }
  };

  const formatCurrency = (amount: number) => {
    const currencyData = currencies.find(c => c.code === currency);
    return `${amount.toLocaleString('fr-CH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currencyData?.symbol || currency}`;
  };

  const nisab = nisabValues[currency];
  const wealthValue = parseFloat(wealth) || 0;
  const isAboveNisab = wealthValue >= nisab;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <Calculator className="h-16 w-16" />
              <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2">
                <Coins className="h-6 w-6 text-yellow-800" />
              </div>
            </div>
            <div className="text-left">
              <h1 className="text-5xl font-bold">Zakat Calculator</h1>
              <h2 className="text-xl font-semibold opacity-90">Multi-devises instantané</h2>
            </div>
          </div>
          <p className="text-lg opacity-90 max-w-3xl mx-auto mb-8">
            Calculateur Zakat conforme 100% Fiqh informatique avec support multi-devises (CHF, EUR, USD, AED)
          </p>
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>100% Conforme Sharia</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              <span>Multi-devises</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              <span>Calcul Instantané</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Widget Accès Rapide Centralisé */}
        <div className="mb-8 flex justify-center">
          <QuickAccessWidget currentPage="zakat-calculator" />
        </div>

        {/* Calculateur Principal */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Formulaire de calcul */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <Calculator className="h-8 w-8 text-emerald-600" />
                  Calculateur Zakat
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Sélection devise */}
                <div>
                  <Label className="block text-sm font-medium text-gray-700 mb-2">
                    Devise
                  </Label>
                  <Select value={currency} onValueChange={(value: string) => setCurrency(value as CurrencyCode)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sélectionner une devise" />
                    </SelectTrigger>
                    <SelectContent>
                      {currencies.map((curr) => (
                        <SelectItem key={curr.code} value={curr.code}>
                          <div className="flex items-center gap-2">
                            <curr.icon className="h-4 w-4" />
                            <span>{curr.name} ({curr.symbol})</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Montant richesse */}
                <div>
                  <Label className="block text-sm font-medium text-gray-700 mb-2">
                    Richesse totale ({currencies.find(c => c.code === currency)?.symbol})
                  </Label>
                  <Input
                    type="number"
                    placeholder="Entrez votre richesse totale"
                    value={wealth}
                    onChange={(e) => setWealth(e.target.value)}
                    className="text-lg"
                  />
                </div>

                {/* Nisab info */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-blue-800">Nisab actuel</span>
                  </div>
                  <p className="text-blue-700">
                    Le seuil Nisab pour {currency} est de <strong>{formatCurrency(nisab)}</strong>
                  </p>
                  {wealthValue > 0 && (
                    <p className="text-sm mt-2 text-blue-600">
                      {isAboveNisab 
                        ? "✅ Votre richesse dépasse le Nisab, la Zakat est obligatoire" 
                        : "❌ Votre richesse est en dessous du Nisab, pas de Zakat obligatoire"}
                    </p>
                  )}
                </div>

                {/* Bouton calcul */}
                <Button 
                  onClick={calculateZakat}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3"
                  size="lg"
                  disabled={!wealth}
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculer la Zakat
                </Button>
              </CardContent>
            </Card>

            {/* Résultats */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <Coins className="h-8 w-8 text-yellow-600" />
                  Résultat Zakat
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {zakatAmount > 0 ? (
                  <>
                    {/* Montant Zakat */}
                    <div className="text-center bg-emerald-50 p-6 rounded-lg">
                      <h3 className="text-lg font-medium text-emerald-800 mb-2">
                        Votre Zakat annuelle
                      </h3>
                      <p className="text-4xl font-bold text-emerald-600 mb-2">
                        {formatCurrency(zakatAmount)}
                      </p>
                      <p className="text-sm text-emerald-700">
                        2.5% de {formatCurrency(parseFloat(wealth))}
                      </p>
                    </div>

                    {/* Répartition mensuelle */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">
                        Répartition mensuelle (optionnelle)
                      </h4>
                      <p className="text-2xl font-semibold text-gray-700">
                        {formatCurrency(zakatAmount / 12)}
                      </p>
                      <p className="text-sm text-gray-600">par mois</p>
                    </div>

                    {/* Bénéficiaires suggérés */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-800">
                        Bénéficiaires suggérés (conformes Fiqh)
                      </h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Orphelins et veuves</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Familles dans le besoin</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Nouveaux convertis</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Étudiants en sciences islamiques</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <Heart className="h-5 w-5 mr-2" />
                        Distribuer via CED Bank
                      </Button>
                      <Button variant="outline" className="w-full">
                        📱 Partager le calcul
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-600 mb-2">
                      Prêt à calculer
                    </h3>
                    <p className="text-gray-500">
                      Entrez votre richesse totale pour calculer votre Zakat
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Informations Fiqh */}
          <Card className="mt-8 bg-gradient-to-r from-emerald-50 to-teal-50">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800">
                Bases Fiqh de la Zakat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-emerald-800 mb-2">Conditions obligatoires</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Être musulman</li>
                    <li>• Posséder le Nisab pendant 1 an lunaire</li>
                    <li>• Richesse libre de dettes</li>
                    <li>• Richesse productive ou potentiellement productive</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-800 mb-2">Types de richesses</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Liquidités (espèces, comptes)</li>
                    <li>• Or et argent</li>
                    <li>• Marchandises commerciales</li>
                    <li>• Investissements rentables</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="mt-8 text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Calculateur Zakat Professionnel
            </h3>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              Solution complète conforme aux principes islamiques avec support multi-devises et guidance Fiqh intégrée.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <Play className="h-5 w-5 mr-2" />
                Calculer Maintenant
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                <Book className="h-5 w-5 mr-2" />
                Guide Fiqh
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-sm opacity-80">Devises</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2.5%</div>
                  <div className="text-sm opacity-80">Taux Zakat</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-80">Conforme Fiqh</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-80">Disponible</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}