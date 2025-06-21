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
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export function CEDBankSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 flex items-center justify-center"
            >
              <Building2 className="h-10 w-10 text-white" />
            </motion.div>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            CED Bank International
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            La première banque digitale mondiale respectant les principes islamiques avec 
            <span className="font-bold text-green-600"> 0% d'intérêts</span>, mode prière automatique et boussole Qibla intégrée
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-2 border-green-200 hover:shadow-xl transition-all h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => window.location.href = '/banque'}
                >
                  Ouvrir un Compte
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-2 border-blue-200 hover:shadow-xl transition-all h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span>Pause automatique pendant les prières</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span>Boussole Qibla direction Mecque</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.location.href = '/app-bancaire'}
                >
                  Télécharger l'App
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-2 border-purple-200 hover:shadow-xl transition-all h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={() => window.location.href = '/parrainage'}
                >
                  Devenir Ambassadeur
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Spécifications islamiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-green-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Finance Islamique Certifiée - Conforme à la Charia
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              CED Bank International est la première banque digitale mondiale à respecter intégralement 
              les principes de finance islamique, validée par les autorités religieuses des Émirats Arabes Unis.
            </p>
          </div>

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
              <div className="text-3xl font-bold text-amber-700 mb-2">Halal</div>
              <div className="text-sm text-amber-600">Certifié UAE</div>
              <div className="text-xs text-gray-500 mt-1">Conformité Charia</div>
            </div>
          </div>
        </motion.div>

        {/* Validation direction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">YY</span>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-amber-800">Validation Personnelle Requise</h4>
              <p className="text-amber-600">Yakoubi Yamina - Directrice Générale</p>
            </div>
          </div>
          
          <div className="text-center space-y-4">
            <p className="text-gray-700 max-w-2xl mx-auto">
              Chaque demande d'ouverture de compte CED Bank nécessite une validation personnelle du dossier 
              par la direction. Cette approche garantit la qualité de nos services et le respect de nos valeurs éthiques.
            </p>
            
            <div className="flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-600">Dossier complet requis</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="text-gray-600">Validation sous 24-48h</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-600" />
                <span className="text-gray-600">Sécurité maximale</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à Rejoindre la Révolution Bancaire Éthique ?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez une nouvelle façon de gérer vos finances en respectant vos valeurs religieuses 
            et éthiques avec CED Bank International.
          </p>
          
          <div className="flex justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 px-8 py-4"
              onClick={() => window.location.href = '/banque'}
            >
              Découvrir CED Bank
              <Building2 className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4"
              onClick={() => window.location.href = '/financier'}
            >
              Dashboard Financier
              <Star className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}