import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CoachingApp } from '@/components/mobile/CoachingApp';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { ThemeCustomizer } from '@/components/ui/ThemeCustomizer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Target, 
  Trophy, 
  Heart, 
  Zap, 
  Clock,
  Smartphone,
  Users,
  TrendingUp,
  Award,
  Calendar,
  BarChart3
} from 'lucide-react';

export default function CoachingMobile() {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <ParticleBackground />
      <Header />
      <ThemeCustomizer />
      
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-4xl">
                🏃‍♂️
              </div>
              <div className="text-left">
                <h1 className="text-4xl font-bold text-white drop-shadow-lg">
                  Coaching Sport Digital
                </h1>
                <h2 className="text-3xl font-bold text-blue-300 drop-shadow-lg">
                  IA + Expertise Humaine
                </h2>
                <p className="text-xl text-white/80 drop-shadow-lg">
                  Votre coach personnel intelligent 24h/7j
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-4 text-center">
                  <Activity className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-xl font-bold text-blue-600">50+</p>
                  <p className="text-sm text-gray-600">Sports Disponibles</p>
                </CardContent>
              </Card>
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-xl font-bold text-green-600">10K+</p>
                  <p className="text-sm text-gray-600">Utilisateurs Actifs</p>
                </CardContent>
              </Card>
              <Card className="border-purple-200 bg-purple-50">
                <CardContent className="p-4 text-center">
                  <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-xl font-bold text-purple-600">IA Adaptive</p>
                  <p className="text-sm text-gray-600">Programmes Personnalisés</p>
                </CardContent>
              </Card>
              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="p-4 text-center">
                  <Trophy className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-xl font-bold text-orange-600">95%</p>
                  <p className="text-sm text-gray-600">Objectifs Atteints</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Application de coaching */}
          <Card className="border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                <Activity className="h-8 w-8 text-indigo-600" />
                Application de Coaching en Action
              </CardTitle>
              <p className="text-center text-gray-600">
                Découvrez l'interface complète de votre coach personnel
              </p>
            </CardHeader>
            <CardContent>
              <CoachingApp />
            </CardContent>
          </Card>

          {/* Fonctionnalités clés */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-blue-600" />
                  Programmes Adaptatifs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700">
                  L'IA analyse vos performances en temps réel et adapte automatiquement 
                  vos séances pour optimiser vos résultats.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Cardio Intelligent</Badge>
                  <Badge variant="secondary">Force Progressive</Badge>
                  <Badge variant="secondary">Récupération Optimisée</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-green-600" />
                  Suivi Santé Complet
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700">
                  Monitoring avancé de votre fréquence cardiaque, calories, sommeil 
                  et indicateurs de bien-être.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Cardio Monitoring</Badge>
                  <Badge variant="secondary">Analyse Sommeil</Badge>
                  <Badge variant="secondary">Nutrition Sync</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-6 w-6 text-purple-600" />
                  Expérience Mobile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700">
                  Interface intuitive, coaching vocal, réalité augmentée et 
                  synchronisation multi-appareils.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Offline Mode</Badge>
                  <Badge variant="secondary">AR Training</Badge>
                  <Badge variant="secondary">Coach Vocal</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="border-gradient-to-r from-blue-200 to-purple-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="text-center p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Prêt à transformer votre condition physique ?
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Rejoignez des milliers d'utilisateurs qui ont déjà atteint leurs objectifs 
                grâce à notre coaching IA personnalisé et notre expertise humaine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8 py-3">
                  <Smartphone className="h-5 w-5 mr-2" />
                  Télécharger l'App
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3">
                  <Calendar className="h-5 w-5 mr-2" />
                  Essai Gratuit 7 jours
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}