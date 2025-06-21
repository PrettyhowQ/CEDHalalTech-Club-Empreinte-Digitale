import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DubaiWealthTracker } from '@/components/DubaiWealthTracker';
import { RealTimeDubaiInvestments } from '@/components/RealTimeDubaiInvestments';
import { motion } from 'framer-motion';
import { 
  Crown,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Globe,
  Building2,
  BarChart3,
  Phone,
  Mail,
  Calendar,
  Star
} from 'lucide-react';

export default function DubaiWealthCRM() {
  const [activeTab, setActiveTab] = useState('overview');

  const strategicMetrics = {
    totalWealthTracked: 57.3, // Milliards USD
    contactsEstablished: 4,
    donationsSecured: 750000, // USD
    projectsLinked: 15,
    averageDonation: 187500,
    conversionRate: 57.1,
    networkInfluence: 85.2,
    nextTargets: 3
  };

  const formatCurrency = (amount: number, currency = 'USD') => {
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)}M ${currency}`;
    }
    if (amount >= 1000) {
      return `${(amount / 1000).toFixed(0)}K ${currency}`;
    }
    return `${amount.toLocaleString()} ${currency}`;
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* En-tête stratégique */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="flex items-center justify-center gap-3">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
            <Crown className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Dubai Wealth CRM
            </h1>
            <p className="text-lg text-gray-600">
              Système de Relations Stratégiques - Club Empreinte Digitale
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-6">
          <Badge className="bg-green-100 text-green-800 px-4 py-2">
            🇦🇪 Finance Islamique
          </Badge>
          <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
            💰 Philanthropie Stratégique
          </Badge>
          <Badge className="bg-purple-100 text-purple-800 px-4 py-2">
            🏗️ Immobilier Social Dubaï
          </Badge>
        </div>
      </motion.div>

      {/* Métriques stratégiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Fortune Totale Trackée</p>
                  <p className="text-3xl font-bold">{strategicMetrics.totalWealthTracked} Mds</p>
                  <p className="text-sm text-purple-200">USD - Top 7 Dubaï</p>
                </div>
                <Crown className="h-12 w-12 text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Donations Sécurisées</p>
                  <p className="text-3xl font-bold">{formatCurrency(strategicMetrics.donationsSecured)}</p>
                  <p className="text-sm text-green-200">4 donateurs actifs</p>
                </div>
                <DollarSign className="h-12 w-12 text-green-200" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Taux de Conversion</p>
                  <p className="text-3xl font-bold">{strategicMetrics.conversionRate}%</p>
                  <p className="text-sm text-blue-200">Prospects → Donateurs</p>
                </div>
                <TrendingUp className="h-12 w-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Influence Réseau</p>
                  <p className="text-3xl font-bold">{strategicMetrics.networkInfluence}%</p>
                  <p className="text-sm text-orange-200">Couverture EAU</p>
                </div>
                <Globe className="h-12 w-12 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Système d'onglets principal */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Vue d'ensemble
          </TabsTrigger>
          <TabsTrigger value="wealth-tracker" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Tracker Fortunes
          </TabsTrigger>
          <TabsTrigger value="investments" className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            Investissements
          </TabsTrigger>
          <TabsTrigger value="strategy" className="flex items-center gap-2">
            <Target className="h-4 w-4" />
            Stratégie
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Performances récentes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Performances Cette Semaine
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-green-800">Nouveau Contact Hussain Sajwani</span>
                    <Badge className="bg-green-100 text-green-800">+10.2 Mds</Badge>
                  </div>
                  <p className="text-sm text-green-600 mt-1">Secteur immobilier - DAMAC Properties</p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-blue-800">Donation Sunny Varkey</span>
                    <Badge className="bg-blue-100 text-blue-800">+250K USD</Badge>
                  </div>
                  <p className="text-sm text-blue-600 mt-1">Projet logement étudiant - Phase 2</p>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-purple-800">Partenariat Al Futtaim</span>
                    <Badge className="bg-purple-100 text-purple-800">Stratégique</Badge>
                  </div>
                  <p className="text-sm text-purple-600 mt-1">Infrastructure automobile + social</p>
                </div>
              </CardContent>
            </Card>

            {/* Prochaines actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Actions Prioritaires
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-red-800">Contact Pavel Durov</span>
                    <Badge className="bg-red-100 text-red-800">Urgent</Badge>
                  </div>
                  <p className="text-sm text-red-600 mt-1">Approche via écosystème crypto/tech</p>
                  <Button size="sm" className="mt-2 bg-red-600 hover:bg-red-700">
                    <Phone className="h-4 w-4 mr-2" />
                    Initier contact
                  </Button>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-yellow-800">Follow-up Majid Al Futtaim</span>
                    <Badge className="bg-yellow-100 text-yellow-800">Cette semaine</Badge>
                  </div>
                  <p className="text-sm text-yellow-600 mt-1">Proposer partenariat retail + social</p>
                  <Button size="sm" variant="outline" className="mt-2">
                    <Mail className="h-4 w-4 mr-2" />
                    Envoyer proposition
                  </Button>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-blue-800">Rencontre Yusuf Ali</span>
                    <Badge className="bg-blue-100 text-blue-800">Programmée</Badge>
                  </div>
                  <p className="text-sm text-blue-600 mt-1">Présentation projets logistique sociale</p>
                  <Button size="sm" variant="outline" className="mt-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    Voir agenda
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Impact projection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-purple-600" />
                Projection Impact 2025
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-green-600">50M USD</h3>
                  <p className="text-green-700">Donations Cibles</p>
                  <p className="text-sm text-gray-600 mt-2">Objectif annuel conservative</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-600">2,500</h3>
                  <p className="text-blue-700">Logements Sociaux</p>
                  <p className="text-sm text-gray-600 mt-2">Unités livrées prévues</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-purple-600">15</h3>
                  <p className="text-purple-700">Partenaires Premium</p>
                  <p className="text-sm text-gray-600 mt-2">Réseau fortune consolidé</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wealth-tracker">
          <DubaiWealthTracker />
        </TabsContent>

        <TabsContent value="investments">
          <RealTimeDubaiInvestments />
        </TabsContent>

        <TabsContent value="strategy" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Stratégie d'approche */}
            <Card>
              <CardHeader>
                <CardTitle>Stratégie d'Approche par Profil</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border border-purple-200 rounded-lg">
                  <h4 className="font-bold text-purple-800">Tech Leaders (Durov)</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Approche via innovation, crypto, disruption sociale
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Badge className="bg-purple-100 text-purple-800">Crypto</Badge>
                    <Badge className="bg-purple-100 text-purple-800">Innovation</Badge>
                  </div>
                </div>

                <div className="p-4 border border-green-200 rounded-lg">
                  <h4 className="font-bold text-green-800">Immobilier (Sajwani, Al Futtaim)</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Partenariats directs, co-développement projets
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Badge className="bg-green-100 text-green-800">Développement</Badge>
                    <Badge className="bg-green-100 text-green-800">Partenariat</Badge>
                  </div>
                </div>

                <div className="p-4 border border-blue-200 rounded-lg">
                  <h4 className="font-bold text-blue-800">Retail (Ali, Jagtiani)</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Impact social, logistique humanitaire, emploi
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Badge className="bg-blue-100 text-blue-800">Social</Badge>
                    <Badge className="bg-blue-100 text-blue-800">Logistique</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ROI philanthropique */}
            <Card>
              <CardHeader>
                <CardTitle>ROI Philanthropique Attendu</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Impact Social</span>
                    <span className="font-bold text-green-600">95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Visibilité Médiatique</span>
                    <span className="font-bold text-blue-600">87%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Influence Politique</span>
                    <span className="font-bold text-purple-600">78%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Legacy Building</span>
                    <span className="font-bold text-orange-600">92%</span>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Retour sur Investissement</h4>
                  <p className="text-sm text-gray-600">
                    Chaque dollar investi génère 3.2$ de valeur sociale mesurable, 
                    plus un impact incalculable sur l'image et l'influence.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Feuille de route */}
          <Card>
            <CardHeader>
              <CardTitle>Feuille de Route Stratégique 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-bold text-red-800">Q1 2025</h4>
                    <ul className="text-sm text-red-600 mt-2 space-y-1">
                      <li>• Contact Pavel Durov</li>
                      <li>• Partenariat DAMAC</li>
                      <li>• 3 nouveaux donateurs</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                    <h4 className="font-bold text-yellow-800">Q2 2025</h4>
                    <ul className="text-sm text-yellow-600 mt-2 space-y-1">
                      <li>• Lancement projet phare</li>
                      <li>• 10M$ donations</li>
                      <li>• 500 logements</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-800">Q3 2025</h4>
                    <ul className="text-sm text-blue-600 mt-2 space-y-1">
                      <li>• Expansion Abu Dhabi</li>
                      <li>• 25M$ objectif</li>
                      <li>• 1000 logements</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-bold text-green-800">Q4 2025</h4>
                    <ul className="text-sm text-green-600 mt-2 space-y-1">
                      <li>• 50M$ annuel</li>
                      <li>• 15 partenaires</li>
                      <li>• 2500 logements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}