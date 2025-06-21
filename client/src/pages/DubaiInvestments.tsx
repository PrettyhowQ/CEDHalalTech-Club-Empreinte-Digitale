import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { ThemeCustomizer } from '@/components/ui/ThemeCustomizer';
import { RealTimeDubaiInvestments } from '@/components/RealTimeDubaiInvestments';
import { DubaiDonationSystem } from '@/components/DubaiDonationSystem';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Building2, 
  TrendingUp, 
  Globe, 
  Star,
  MapPin,
  Clock
} from 'lucide-react';

export default function DubaiInvestments() {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <ParticleBackground />
      <Header />
      <ThemeCustomizer />
      
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <div className="flex justify-center items-center gap-4 mb-6">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 flex items-center justify-center"
              >
                <Building2 className="h-10 w-10 text-white" />
              </motion.div>
              <div className="text-left">
                <h1 className="text-4xl font-bold text-gray-900">
                  Investissements Dubaï
                </h1>
                <p className="text-lg text-gray-600">Temps Réel</p>
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mb-8">
              <Badge className="bg-blue-500 text-white px-4 py-2 text-lg">
                🇦🇪 Hub Philanthropique
              </Badge>
              <Badge className="bg-green-500 text-white px-4 py-2 text-lg">
                📊 Données Live
              </Badge>
              <Badge className="bg-yellow-500 text-white px-4 py-2 text-lg">
                🏗️ Projets Actifs
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-6 text-center">
                  <Globe className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                  <h3 className="font-bold text-blue-800 mb-2">Marché Global</h3>
                  <p className="text-sm text-blue-600">
                    Suivi temps réel des prix immobiliers dans tous les quartiers de Dubaï
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-3 text-green-600" />
                  <h3 className="font-bold text-green-800 mb-2">ROI Optimisé</h3>
                  <p className="text-sm text-green-600">
                    Identification automatique des meilleures opportunités d'investissement
                  </p>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 bg-yellow-50">
                <CardContent className="p-6 text-center">
                  <Star className="h-8 w-8 mx-auto mb-3 text-yellow-600" />
                  <h3 className="font-bold text-yellow-800 mb-2">Impact Social</h3>
                  <p className="text-sm text-yellow-600">
                    Chaque investissement contribue au logement social et dignité humaine
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Dashboard temps réel */}
          <RealTimeDubaiInvestments />

          {/* Système de dons */}
          <DubaiDonationSystem />

          {/* Alertes et notifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-red-800 mb-2">
                🚨 Alertes Investissement
              </h3>
              <p className="text-red-600">
                Notifications en temps réel pour ne manquer aucune opportunité
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-red-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-red-800 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Hausse Significative
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-red-600" />
                        <span className="font-medium">Dubai South</span>
                      </div>
                      <Badge className="bg-red-500 text-white">+2.79%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-orange-600" />
                        <span className="font-medium">Investment Park</span>
                      </div>
                      <Badge className="bg-orange-500 text-white">+1.93%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Opportunités Limitées
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="font-medium text-green-800">Nouveau projet Al-Barakah</p>
                      <p className="text-green-600">32 unités disponibles - Financement à 67%</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="font-medium text-blue-800">Pré-vente Silicon Oasis</p>
                      <p className="text-blue-600">Réduction 15% - Livraison Q2 2026</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}