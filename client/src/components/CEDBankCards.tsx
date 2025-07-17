import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Shield, 
  Star,
  Globe,
  Zap,
  Lock,
  Smartphone,
  Plane,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { CED_BANK_CARDS, type BankCard } from '@/data/cedBankCards';

export function CEDBankCards() {
  const [selectedCard, setSelectedCard] = useState<string>('yakoubi-essential');

  const cedBankCards = CED_BANK_CARDS;

  const formatCurrency = (amount: number, currency = 'AED') => {
    return new Intl.NumberFormat('fr-FR', { 
      style: 'currency', 
      currency: currency,
      minimumFractionDigits: 0 
    }).format(amount);
  };

  const getCardIcon = (tier: string) => {
    switch (tier) {
      case 'standard': return CreditCard;
      case 'gold': return Star;
      case 'platinum': return Star;
      case 'diamond': return Shield;
      case 'royal': return Star;
      default: return CreditCard;
    }
  };

  const selectedCardData = cedBankCards.find(card => card.id === selectedCard);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center items-center gap-4"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <CreditCard className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Cartes CED Bank</h1>
            <p className="text-gray-600">Collection complète Yakoubi - Islamiques 0% intérêt</p>
          </div>
        </motion.div>
      </div>

      {/* Sélecteur de cartes */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {cedBankCards.map((card) => {
          const IconComponent = getCardIcon(card.tier);
          return (
            <motion.div
              key={card.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`cursor-pointer ${selectedCard === card.id ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => setSelectedCard(card.id)}
            >
              <Card className={`h-40 ${card.gradient} text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <CardContent className="relative z-10 p-4 h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <IconComponent className="h-6 w-6" />
                    <Badge className="bg-white/20 text-white border-white/30">
                      {card.tier.toUpperCase()}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{card.name}</h3>
                    <p className="text-sm opacity-90">
                      Limite: {formatCurrency(card.dailyLimit)}/jour
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Détails de la carte sélectionnée */}
      {selectedCardData && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Carte virtuelle */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className={`h-64 ${selectedCardData.gradient} text-white relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10" />
              <CardContent className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedCardData.name}</h2>
                    <p className="opacity-90">CED Bank International</p>
                  </div>
                  <div className="text-right">
                    <Smartphone className="h-8 w-8 mb-2" />
                    <Badge className="bg-white/20 border-white/30">
                      {selectedCardData.type}
                    </Badge>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm opacity-80 mb-1">Numéro de carte</p>
                  <p className="text-xl font-mono tracking-wider">**** **** **** 8429</p>
                </div>
                
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs opacity-80">Valide jusqu'à</p>
                    <p className="font-mono">12/28</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    <span className="text-sm">CED Secured</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Informations détaillées */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Limites & Conditions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Limites */}
                <div>
                  <h4 className="font-bold mb-3">Limites de Transaction</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-600">Limite Quotidienne</p>
                      <p className="text-xl font-bold text-blue-800">
                        {formatCurrency(selectedCardData.dailyLimit)}
                      </p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-600">Limite Mensuelle</p>
                      <p className="text-xl font-bold text-green-800">
                        {formatCurrency(selectedCardData.monthlyLimit)}
                      </p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="text-sm text-purple-600">Retrait ATM</p>
                      <p className="text-xl font-bold text-purple-800">
                        {formatCurrency(selectedCardData.withdrawalLimit)}
                      </p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <p className="text-sm text-orange-600">Frais Annuels</p>
                      <p className="text-xl font-bold text-orange-800">
                        GRATUIT
                      </p>
                    </div>
                  </div>
                </div>

                {/* Devises supportées */}
                <div>
                  <h4 className="font-bold mb-3">Devises Supportées</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCardData.currency.map((curr) => (
                      <Badge key={curr} variant="outline">
                        {curr}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Conditions d'éligibilité */}
                <div>
                  <h4 className="font-bold mb-3">Conditions d'Éligibilité</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Dépôt minimum:</span>
                      <span className="font-bold">
                        {selectedCardData.eligibility.minDeposit === 0 
                          ? 'Aucun' 
                          : formatCurrency(selectedCardData.eligibility.minDeposit)
                        }
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Revenus mensuels min:</span>
                      <span className="font-bold">
                        {selectedCardData.eligibility.minMonthlyIncome === 0 
                          ? 'Aucun' 
                          : formatCurrency(selectedCardData.eligibility.minMonthlyIncome)
                        }
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Approbation requise:</span>
                      <span className="font-bold">
                        {selectedCardData.eligibility.approvalRequired ? 'Oui' : 'Non'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Avantages et fonctionnalités */}
      {selectedCardData && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Avantages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Avantages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {selectedCardData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Fonctionnalités islamiques */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                Conformité Islamique
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {selectedCardData.islamicFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sécurité */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-blue-500" />
                Sécurité
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {selectedCardData.securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-center gap-4">
        <Button size="lg" className="bg-green-600 hover:bg-green-700">
          Demander cette carte
        </Button>
        <Button variant="outline" size="lg">
          Comparer les cartes
        </Button>
      </div>
    </div>
  );
}