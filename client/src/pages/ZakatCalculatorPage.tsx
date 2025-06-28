import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
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
  Users
} from 'lucide-react';
import Footer from '@/components/Footer';

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
        {/* Widget Accès Rapide - Design EXACT de l'image */}
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Header avec recherche */}
            <div className="bg-gray-50 p-4 border-b border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-sm">Club Empreinte Digitale</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-xs font-medium text-blue-600">Accès Rapide</span>
                    </div>
                    <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">Live</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Rechercher..." 
                  className="w-full bg-white border border-gray-300 rounded-lg pl-8 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400">🔍</div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="divide-y divide-gray-100">
              {/* CED Bank */}
              <div className="bg-blue-600 text-white p-4 flex items-center justify-between hover:bg-blue-700 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                    <Banknote className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">CED Bank ⭐</h4>
                    <p className="text-xs opacity-90">0% intérêt • 100% halal</p>
                  </div>
                </div>
                <div className="text-lg">→</div>
              </div>

              {/* Zakat Calculator - Active/Highlighted */}
              <div className="bg-emerald-600 text-white p-4 flex items-center justify-between hover:bg-emerald-700 transition-colors cursor-pointer relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400"></div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                    <Calculator className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Zakat Calculator</h4>
                    <p className="text-xs opacity-90">Multi-devises instantané</p>
                  </div>
                </div>
                <div className="text-lg">→</div>
              </div>

              {/* Formations Pro */}
              <div className="bg-purple-600 text-white p-4 flex items-center justify-between hover:bg-purple-700 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                    <Star className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Formations Pro ⭐</h4>
                    <p className="text-xs opacity-90">156 cours disponibles</p>
                  </div>
                </div>
                <div className="text-lg">→</div>
              </div>

              {/* Mode Prière */}
              <div className="bg-red-600 text-white p-4 flex items-center justify-between hover:bg-red-700 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                    <Heart className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Mode Prière</h4>
                    <p className="text-xs opacity-90">Sync satellitaire GPS</p>
                  </div>
                </div>
                <div className="text-lg">→</div>
              </div>

              {/* TechForAll */}
              <div className="bg-teal-600 text-white p-4 flex items-center justify-between hover:bg-teal-700 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">TechForAll</h4>
                    <p className="text-xs opacity-90">Dons technologiques</p>
                  </div>
                </div>
                <div className="text-lg">→</div>
              </div>
            </div>

            {/* Footer Stats */}
            <div className="bg-gray-50 p-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                <span className="font-medium">2,847 utilisateurs actifs</span>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 text-gray-500">⏰</div>
                  <span>Temps réel</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs">💪</span>
                <span className="text-xs text-gray-500">Renforcement Adaptatif</span>
              </div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="bg-white p-4 flex gap-2">
              <button className="flex-1 bg-emerald-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
                <div className="w-4 h-4">📈</div>
                Commencer
              </button>
              <button className="bg-gray-100 text-gray-700 text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                <div className="w-6 h-6 flex items-center justify-center">⚙️</div>
              </button>
              <button className="bg-orange-400 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-orange-500 transition-colors">
                <div className="w-6 h-6 flex items-center justify-center">🎤</div>
              </button>
            </div>
          </div>
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
        </div>
      </div>

      <Footer />
    </div>
  );
}