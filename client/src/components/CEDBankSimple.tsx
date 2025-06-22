import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Shield, 
  Globe, 
  Smartphone, 
  Users, 
  Star,
  DollarSign,
  Heart,
  ArrowRight,
  CheckCircle,
  Laptop,
  MapPin,
  Target
} from 'lucide-react';

export function CEDBankSimple() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="flex justify-center items-center gap-4">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 flex items-center justify-center"
            >
              <Building2 className="h-10 w-10 text-white" />
            </motion.div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
              CED Bank International
            </h1>
          </div>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            La première banque digitale mondiale respectant les principes islamiques avec 
            <span className="font-bold text-green-600"> 0% d'intérêts</span>, mode prière automatique et boussole Qibla intégrée
          </p>
          
          <div className="flex justify-center gap-3 flex-wrap">
            <Badge className="bg-green-500 text-white px-4 py-2 text-lg">
              🇨🇭 Siège Suisse
            </Badge>
            <Badge className="bg-blue-500 text-white px-4 py-2 text-lg">
              🇦🇪 Hub Dubaï
            </Badge>
            <Badge className="bg-purple-500 text-white px-4 py-2 text-lg">
              ✅ Halal Certifié
            </Badge>
          </div>
        </motion.div>

        {/* Services principaux */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full hover:shadow-xl transition-all border-2 border-green-200">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center text-green-800">
                  Interface Web Banking
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">
                  Comptes multi-devises CHF, AED, USD avec cartes virtuelles et physiques
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Transferts internationaux gratuits</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Protection anti-découvert totale</span>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Ouvrir un Compte
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full hover:shadow-xl transition-all border-2 border-blue-200">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center text-blue-800">
                  Application Mobile
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">
                  App iOS/Android avec mode prière automatique et boussole Qibla GPS
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <Target className="h-4 w-4 text-blue-600" />
                    <span>Mode prière automatique</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span>Boussole Qibla direction Mecque</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Télécharger l'App
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full hover:shadow-xl transition-all border-2 border-purple-200">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center text-purple-800">
                  Programme Parrainage
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">
                  Récompenses exclusives et investissements immobiliers à Dubaï
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <DollarSign className="h-4 w-4 text-purple-600" />
                    <span>Jusqu'à 5% cash back sur parrainages</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Building2 className="h-4 w-4 text-purple-600" />
                    <span>Accès projets immobiliers Dubaï</span>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Devenir Ambassadeur
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Section TechForAll */}
        <Card className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 border-2 border-green-300">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-green-800">
              Partenariat CED Bank × TechForAll
            </CardTitle>
            <p className="text-center text-gray-700">
              Association d'aide aux expatriés par la donation technologique solidaire
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* TechForAll Association */}
              <Card className="border-2 border-green-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center text-green-800">
                    TechForAll Association
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-gray-600">
                    Aide aux expatriés et personnes éloignées de l'emploi avec matériel professionnel reconditionné
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Laptop className="h-4 w-4 text-green-600" />
                      <span>MacBook Pro, PC, tablettes</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Users className="h-4 w-4 text-green-600" />
                      <span>2,500+ équipements donnés</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => window.location.href = '/techforall'}
                  >
                    Découvrir TechForAll
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Boutique Solidaire */}
              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center text-purple-800">
                    Boutique Solidaire
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-gray-600">
                    Équipements IT reconditionnés à prix solidaires
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      <span>MacBook Pro M4 Max - 3,699€</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      <span>Paiement 0% intérêt CED Bank</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() => window.location.href = '/boutique-solidaire'}
                  >
                    Boutique Solidaire
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Costa del Sol */}
              <Card className="border-2 border-orange-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center text-orange-800">
                    Costa del Sol Hub
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-gray-600">
                    Centre de reconditionnement et distribution géré par B. Yakoubi
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-4 w-4 text-orange-600" />
                      <span>1,240+ équipements traités</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Globe className="h-4 w-4 text-orange-600" />
                      <span>Suivi GPS temps réel</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    onClick={() => window.location.href = '/costa-del-sol'}
                  >
                    App Logistique
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Statistiques */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-center text-xl">Statistiques Conformité Charia</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-3xl font-bold text-green-700 mb-2">0%</div>
                <div className="text-sm text-green-600">Taux d'intérêt</div>
                <div className="text-xs text-gray-500 mt-1">Interdit par l'Islam</div>
              </div>
              
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-3xl font-bold text-blue-700 mb-2">5x</div>
                <div className="text-sm text-blue-600">Prières/jour</div>
                <div className="text-xs text-gray-500 mt-1">Mode automatique</div>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="text-3xl font-bold text-purple-700 mb-2">GPS</div>
                <div className="text-sm text-purple-600">Qibla précise</div>
                <div className="text-xs text-gray-500 mt-1">Direction Mecque</div>
              </div>
              
              <div className="text-center p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="text-3xl font-bold text-amber-700 mb-2">100%</div>
                <div className="text-sm text-amber-600">Halal Certifié</div>
                <div className="text-xs text-gray-500 mt-1">Audit mensuel</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}