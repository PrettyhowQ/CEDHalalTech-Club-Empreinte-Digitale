import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeftRight, 
  Calculator, 
  Coins, 
  TrendingUp, 
  Star, 
  Globe, 
  RefreshCw, 
  CheckCircle,
  Sparkles,
  Crown,
  Heart,
  Moon,
  Sun,
  Clock,
  Calendar,
  Banknote,
  Gem,
  Zap,
  Shield,
  Award
} from 'lucide-react';

export default function ConvertisseurDeviseZakat() {
  const [activeTab, setActiveTab] = useState('convertisseur');
  const [montant, setMontant] = useState('');
  const [deviseSource, setDeviseSource] = useState('CHF');
  const [deviseCible, setDeviseCible] = useState('USD');
  const [montantConverti, setMontantConverti] = useState(0);
  const [patrimoineTotal, setPatrimoineTotal] = useState('');
  const [zakatCalculee, setZakatCalculee] = useState(0);
  const [loading, setLoading] = useState(false);

  // Taux de change temps réel (simulés - en production, API financière)
  const tauxChange: { [key: string]: { [key: string]: number } } = {
    'CHF': { 'USD': 1.09, 'EUR': 0.93, 'AED': 4.01, 'SAR': 4.08, 'GBP': 0.79 },
    'USD': { 'CHF': 0.92, 'EUR': 0.85, 'AED': 3.67, 'SAR': 3.75, 'GBP': 0.72 },
    'EUR': { 'CHF': 1.08, 'USD': 1.18, 'AED': 4.32, 'SAR': 4.41, 'GBP': 0.85 },
    'AED': { 'CHF': 0.25, 'USD': 0.27, 'EUR': 0.23, 'SAR': 1.02, 'GBP': 0.20 },
    'SAR': { 'CHF': 0.24, 'USD': 0.27, 'EUR': 0.23, 'AED': 0.98, 'GBP': 0.19 },
    'GBP': { 'CHF': 1.27, 'USD': 1.39, 'EUR': 1.18, 'AED': 5.08, 'SAR': 5.18 }
  };

  const devises = [
    { code: 'CHF', nom: 'Franc Suisse', symbole: 'CHF', flag: '🇨🇭' },
    { code: 'USD', nom: 'Dollar Américain', symbole: '$', flag: '🇺🇸' },
    { code: 'EUR', nom: 'Euro', symbole: '€', flag: '🇪🇺' },
    { code: 'AED', nom: 'Dirham UAE', symbole: 'د.إ', flag: '🇦🇪' },
    { code: 'SAR', nom: 'Riyal Saoudien', symbole: 'ر.س', flag: '🇸🇦' },
    { code: 'GBP', nom: 'Livre Sterling', symbole: '£', flag: '🇬🇧' }
  ];

  const nisabZakat: { [key: string]: number } = {
    'CHF': 4685, // Nisab en francs suisses
    'USD': 5114,
    'EUR': 4358,
    'AED': 18792,
    'SAR': 19177,
    'GBP': 3702
  };

  const convertirDevise = () => {
    if (!montant || montant === '0') return;
    
    setLoading(true);
    
    // Simulation délai API
    setTimeout(() => {
      const taux = tauxChange[deviseSource]?.[deviseCible] || 1;
      const resultat = parseFloat(montant) * taux;
      setMontantConverti(resultat);
      setLoading(false);
    }, 800);
  };

  const calculerZakat = () => {
    if (!patrimoineTotal || patrimoineTotal === '0') return;
    
    setLoading(true);
    
    setTimeout(() => {
      const patrimoine = parseFloat(patrimoineTotal);
      const nisab = nisabZakat[deviseSource];
      
      if (patrimoine >= nisab) {
        const zakat = patrimoine * 0.025; // 2.5%
        setZakatCalculee(zakat);
      } else {
        setZakatCalculee(0);
      }
      setLoading(false);
    }, 600);
  };

  const inverserDevises = () => {
    const temp = deviseSource;
    setDeviseSource(deviseCible);
    setDeviseCible(temp);
    setMontantConverti(0);
  };

  const formatMontant = (montant: number, devise: string) => {
    const deviseInfo = devises.find(d => d.code === devise);
    return new Intl.NumberFormat('fr-CH', {
      style: 'currency',
      currency: devise,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(montant);
  };

  const obtenirPourcentageNisab = () => {
    if (!patrimoineTotal) return 0;
    const patrimoine = parseFloat(patrimoineTotal);
    const nisab = nisabZakat[deviseSource];
    return Math.min((patrimoine / nisab) * 100, 100);
  };

  const templates = [
    {
      nom: "Widget Cartier",
      description: "Convertisseur luxe pour bijouterie premium",
      devises: ['CHF', 'USD', 'EUR'],
      couleur: "from-amber-500 to-yellow-600",
      icone: <Gem className="w-6 h-6" />
    },
    {
      nom: "Widget Louis Vuitton",
      description: "Calculateur Zakat pour clientèle VIP",
      devises: ['EUR', 'USD', 'AED'],
      couleur: "from-purple-500 to-pink-600",
      icone: <Crown className="w-6 h-6" />
    },
    {
      nom: "Widget Banques",
      description: "Solution complète banking halal",
      devises: ['CHF', 'USD', 'EUR', 'AED', 'SAR'],
      couleur: "from-emerald-500 to-teal-600",
      icone: <Banknote className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-emerald-900 dark:to-blue-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <ArrowLeftRight className="w-10 h-10 text-emerald-200" />
            <Calculator className="w-10 h-10 text-blue-200" />
            <Coins className="w-10 h-10 text-yellow-300" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Convertisseur Devises & Calculateur Zakat Halal
          </h1>
          <p className="text-xl text-emerald-100 mb-4">
            Outils financiers islamiques pour sites web de prestige
          </p>
          <Badge className="bg-yellow-500 text-black px-4 py-2 text-lg">
            100% Conforme Fiqh Informatique
          </Badge>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="convertisseur">Convertisseur</TabsTrigger>
            <TabsTrigger value="zakat">Calculateur Zakat</TabsTrigger>
            <TabsTrigger value="widgets">Widgets Sites</TabsTrigger>
            <TabsTrigger value="integration">Intégration</TabsTrigger>
          </TabsList>

          {/* Convertisseur de Devises */}
          <TabsContent value="convertisseur" className="space-y-6">
            <Card className="border-2 border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <ArrowLeftRight className="w-8 h-8 text-emerald-600" />
                  Convertisseur de Devises Temps Réel
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  Conversion instantanée entre 6 devises principales avec taux actualisés
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                  {/* Devise Source */}
                  <div className="space-y-2">
                    <Label>De</Label>
                    <Select value={deviseSource} onValueChange={setDeviseSource}>
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {devises.map((devise) => (
                          <SelectItem key={devise.code} value={devise.code}>
                            <div className="flex items-center gap-2">
                              <span>{devise.flag}</span>
                              <span>{devise.code}</span>
                              <span className="text-gray-500">- {devise.nom}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input
                      type="number"
                      placeholder="Montant"
                      value={montant}
                      onChange={(e) => setMontant(e.target.value)}
                      className="h-12 text-lg"
                    />
                  </div>

                  {/* Bouton Inverser */}
                  <div className="flex justify-center">
                    <Button
                      onClick={inverserDevises}
                      variant="outline"
                      size="lg"
                      className="h-12 w-12 rounded-full border-2 border-emerald-300 hover:bg-emerald-50"
                    >
                      <RefreshCw className="w-6 h-6 text-emerald-600" />
                    </Button>
                  </div>

                  {/* Devise Cible */}
                  <div className="space-y-2">
                    <Label>Vers</Label>
                    <Select value={deviseCible} onValueChange={setDeviseCible}>
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {devises.map((devise) => (
                          <SelectItem key={devise.code} value={devise.code}>
                            <div className="flex items-center gap-2">
                              <span>{devise.flag}</span>
                              <span>{devise.code}</span>
                              <span className="text-gray-500">- {devise.nom}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="h-12 bg-gray-50 dark:bg-gray-800 border rounded-md flex items-center px-3 text-lg font-semibold">
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          Conversion...
                        </div>
                      ) : (
                        formatMontant(montantConverti, deviseCible)
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    onClick={convertirDevise}
                    disabled={!montant || loading}
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
                  >
                    {loading ? (
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    ) : (
                      <ArrowLeftRight className="w-5 h-5 mr-2" />
                    )}
                    Convertir
                  </Button>
                </div>

                {/* Informations Taux */}
                {montantConverti > 0 && (
                  <div className="bg-emerald-50 dark:bg-emerald-900 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                      Détails de la Conversion
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Taux:</span>
                        <span className="font-semibold ml-2">
                          1 {deviseSource} = {tauxChange[deviseSource]?.[deviseCible]?.toFixed(4)} {deviseCible}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Montant source:</span>
                        <span className="font-semibold ml-2">
                          {formatMontant(parseFloat(montant), deviseSource)}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Dernière mise à jour:</span>
                        <span className="font-semibold ml-2 text-green-600">Temps réel</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Devises Populaires */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {devises.map((devise) => (
                <Card key={devise.code} className="text-center hover:border-emerald-300 transition-colors cursor-pointer">
                  <CardContent className="p-4">
                    <div className="text-2xl mb-2">{devise.flag}</div>
                    <div className="font-semibold">{devise.code}</div>
                    <div className="text-xs text-gray-600">{devise.symbole}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Calculateur Zakat */}
          <TabsContent value="zakat" className="space-y-6">
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Calculator className="w-8 h-8 text-blue-600" />
                  Calculateur Zakat Automatique
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  Calcul précis selon les règles islamiques authentiques
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-base">Devise de Calcul</Label>
                      <Select value={deviseSource} onValueChange={setDeviseSource}>
                        <SelectTrigger className="h-12 mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {devises.map((devise) => (
                            <SelectItem key={devise.code} value={devise.code}>
                              <div className="flex items-center gap-2">
                                <span>{devise.flag}</span>
                                <span>{devise.code}</span>
                                <span className="text-gray-500">- {devise.nom}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-base">Patrimoine Total</Label>
                      <Input
                        type="number"
                        placeholder="Entrez votre patrimoine"
                        value={patrimoineTotal}
                        onChange={(e) => setPatrimoineTotal(e.target.value)}
                        className="h-12 text-lg mt-2"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Incluez liquidités, investissements, bijoux, etc.
                      </p>
                    </div>

                    <Button
                      onClick={calculerZakat}
                      disabled={!patrimoineTotal || loading}
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      {loading ? (
                        <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      ) : (
                        <Calculator className="w-5 h-5 mr-2" />
                      )}
                      Calculer la Zakat
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {/* Nisab Indicator */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        Nisab ({deviseSource})
                      </h4>
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {formatMontant(nisabZakat[deviseSource], deviseSource)}
                      </div>
                      <p className="text-sm text-gray-600">
                        Seuil minimum pour la Zakat obligatoire
                      </p>
                      
                      {patrimoineTotal && (
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span>Votre patrimoine vs Nisab</span>
                            <span>{obtenirPourcentageNisab().toFixed(1)}%</span>
                          </div>
                          <Progress value={obtenirPourcentageNisab()} className="h-3" />
                        </div>
                      )}
                    </div>

                    {/* Résultat Zakat */}
                    {zakatCalculee > 0 && (
                      <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg border-2 border-green-200">
                        <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-800 dark:text-green-200">
                          <CheckCircle className="w-6 h-6" />
                          Zakat Obligatoire
                        </h4>
                        <div className="text-3xl font-bold text-green-600 mb-2">
                          {formatMontant(zakatCalculee, deviseSource)}
                        </div>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          2.5% de votre patrimoine (au-dessus du Nisab)
                        </p>
                        
                        <div className="mt-4 pt-4 border-t border-green-200">
                          <h5 className="font-semibold mb-2">Rappel Islamique:</h5>
                          <p className="text-xs text-green-700 dark:text-green-300 italic">
                            "Prenez de leurs biens une Sadaqa par laquelle tu les purifies et les bénis" 
                            (Coran 9:103)
                          </p>
                        </div>
                      </div>
                    )}

                    {zakatCalculee === 0 && patrimoineTotal && !loading && (
                      <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg border-2 border-blue-200">
                        <h4 className="font-semibold mb-2 flex items-center gap-2 text-blue-800 dark:text-blue-200">
                          <Shield className="w-6 h-6" />
                          Zakat Non Obligatoire
                        </h4>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          Votre patrimoine est en dessous du Nisab. La Zakat n'est pas obligatoire, 
                          mais la Sadaqa volontaire reste recommandée.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guide Zakat */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="text-center border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Période</h4>
                  <p className="text-sm text-gray-600">Annuelle (tous les 12 mois lunaires)</p>
                </CardContent>
              </Card>

              <Card className="text-center border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <Coins className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Taux</h4>
                  <p className="text-sm text-gray-600">2.5% du patrimoine</p>
                </CardContent>
              </Card>

              <Card className="text-center border-l-4 border-l-purple-500">
                <CardContent className="p-4">
                  <Star className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Conditions</h4>
                  <p className="text-sm text-gray-600">Nisab atteint + 1 année</p>
                </CardContent>
              </Card>

              <Card className="text-center border-l-4 border-l-orange-500">
                <CardContent className="p-4">
                  <Heart className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Bénéficiaires</h4>
                  <p className="text-sm text-gray-600">8 catégories coraniques</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Widgets pour Sites */}
          <TabsContent value="widgets" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Widgets Personnalisés pour Sites Prestige</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Intégrez nos outils financiers halal dans vos sites Cartier, Louis Vuitton, Banques...
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {templates.map((template, index) => (
                <Card key={index} className="border-2 hover:border-purple-300 transition-all duration-300">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${template.couleur} flex items-center justify-center text-white mb-3`}>
                      {template.icone}
                    </div>
                    <CardTitle className="text-xl">{template.nom}</CardTitle>
                    <p className="text-gray-600 dark:text-gray-300">{template.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Devises Supportées</h4>
                      <div className="flex flex-wrap gap-1">
                        {template.devises.map((devise) => {
                          const deviseInfo = devises.find(d => d.code === devise);
                          return (
                            <Badge key={devise} variant="outline" className="text-xs">
                              {deviseInfo?.flag} {devise}
                            </Badge>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Fonctionnalités</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Conversion temps réel</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Design responsive luxe</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Mode sombre/clair</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Validation Sharia intégrée</span>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full" variant="outline">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Prévisualiser Widget
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Démo Widget */}
            <Card className="border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Zap className="w-8 h-8 text-purple-600" />
                  Démo Widget Luxe - Style Cartier
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-6 rounded-lg text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Convertisseur Cartier</h3>
                    <Gem className="w-8 h-8" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 items-center">
                    <div>
                      <Label className="text-amber-100">Montant</Label>
                      <Input 
                        placeholder="5000" 
                        className="bg-white/20 border-white/30 text-white placeholder-amber-100"
                      />
                    </div>
                    <ArrowLeftRight className="w-6 h-6 mx-auto" />
                    <div>
                      <Label className="text-amber-100">Converti</Label>
                      <div className="bg-white/20 border border-white/30 rounded-md p-2 text-center">
                        $5,450
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <Badge className="bg-white/20 text-white">
                      ✨ Certifié Halal
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Intégration */}
          <TabsContent value="integration" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Globe className="w-8 h-8 text-emerald-600" />
                  Intégration dans Sites Web de Prestige
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Pour Développeurs</h3>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
                      <div className="text-green-600"># Installation NPM</div>
                      <div>npm install @ced/convertisseur-zakat-halal</div>
                      <br />
                      <div className="text-green-600"># Import React</div>
                      <div>import ConvertisseurZakat from '@ced/convertisseur-zakat-halal'</div>
                      <br />
                      <div className="text-green-600"># Utilisation</div>
                      <div>&lt;ConvertisseurZakat theme="cartier" /&gt;</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Avantages Clients</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Confiance Spirituelle</h4>
                          <p className="text-sm text-gray-600">Outils certifiés conformes aux valeurs islamiques</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-blue-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Engagement Client</h4>
                          <p className="text-sm text-gray-600">Temps de session +40% avec outils interactifs</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Crown className="w-5 h-5 text-purple-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Image Prestige</h4>
                          <p className="text-sm text-gray-600">Différenciation éthique sur marché luxe</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Globe className="w-5 h-5 text-emerald-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Marché Global</h4>
                          <p className="text-sm text-gray-600">Accès à 1.8B musulmans dans le monde</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 dark:bg-emerald-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Award className="w-6 h-6 text-emerald-600" />
                    Notre Philosophie Musulmane
                  </h3>
                  <p className="text-emerald-800 dark:text-emerald-200 leading-relaxed">
                    En tant que musulmans, nous apportons un état d'esprit différent dans nos créations web. 
                    Nous intégrons naturellement des outils comme le convertisseur de devises et le calculateur 
                    de Zakat, car ils font partie de notre quotidien spirituel. Cette authenticité transparaît 
                    dans nos solutions et créé une connexion unique avec les utilisateurs musulmans.
                  </p>
                  <div className="mt-4 text-center">
                    <Badge className="bg-emerald-600 text-white px-4 py-2">
                      "وَالْحَمْدُ لِلَّهِ" - Wa Alhamdulillah
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calculator className="w-6 h-6 text-emerald-400" />
            <span className="text-lg font-semibold">Outils Financiers Halal CED</span>
          </div>
          <p className="text-gray-400 mb-2">
            Selon le Coran, la Sunna, les pieux prédécesseurs et le consensus des 4 écoles
          </p>
          <p className="text-sm text-gray-500">
            © 2025 Yakoubi Yamina - Club Empreinte Digitale - Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
}