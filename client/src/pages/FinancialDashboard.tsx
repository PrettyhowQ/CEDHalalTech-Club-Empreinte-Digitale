import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { ThemeCustomizer } from '@/components/ui/ThemeCustomizer';
import { RevenueAnalytics } from '@/components/analytics/RevenueAnalytics';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  DollarSign,
  Target,
  Calendar,
  Users,
  Crown,
  Zap,
  Globe,
  Rocket,
  Star,
  Activity
} from 'lucide-react';

export default function FinancialDashboard() {
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
                className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 flex items-center justify-center"
              >
                <BarChart3 className="h-10 w-10 text-white" />
              </motion.div>
              <div className="text-left">
                <h1 className="text-4xl font-bold text-white drop-shadow-lg">
                  Tableau de Bord Financier
                </h1>
                <h2 className="text-2xl font-bold text-cyan-300 drop-shadow-lg">
                  Club Empreinte Digitale - Performance Temps Réel
                </h2>
                <p className="text-lg text-white/80 drop-shadow-lg">
                  Chiffres d'affaires et métriques en constante évolution
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-4 text-center">
                  <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-xl font-bold text-green-600">2.8M€</p>
                  <p className="text-sm text-gray-600">CA Annuel</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-xl font-bold text-blue-600">+847%</p>
                  <p className="text-sm text-gray-600">Croissance</p>
                </CardContent>
              </Card>
              <Card className="border-purple-200 bg-purple-50">
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-xl font-bold text-purple-600">34,221</p>
                  <p className="text-sm text-gray-600">Apprenants Actifs</p>
                </CardContent>
              </Card>
              <Card className="border-yellow-200 bg-yellow-50">
                <CardContent className="p-4 text-center">
                  <Crown className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <p className="text-xl font-bold text-yellow-600">#1</p>
                  <p className="text-sm text-gray-600">Leader IA Éthique</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Tableau de bord principal */}
          <Tabs defaultValue="revenue" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="revenue">Revenus Temps Réel</TabsTrigger>
              <TabsTrigger value="growth">Croissance</TabsTrigger>
              <TabsTrigger value="forecasting">Prévisions</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
            </TabsList>

            <TabsContent value="revenue" className="space-y-6">
              <RevenueAnalytics />
            </TabsContent>

            <TabsContent value="growth" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      Croissance Mensuelle
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Janvier 2025</span>
                        <Badge className="bg-green-100 text-green-800">+127%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Février 2025</span>
                        <Badge className="bg-blue-100 text-blue-800">+89%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Mars 2025</span>
                        <Badge className="bg-purple-100 text-purple-800">+156%</Badge>
                      </div>
                      <div className="text-center pt-4 border-t">
                        <p className="text-2xl font-bold text-green-600">+847%</p>
                        <p className="text-sm text-gray-600">Croissance annuelle moyenne</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-600" />
                      Acquisition Clients
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-blue-600">1,247</p>
                        <p className="text-sm text-gray-600">Nouveaux clients ce mois</p>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="font-bold text-blue-600">847</p>
                          <p className="text-xs text-gray-600">Étudiants</p>
                        </div>
                        <div>
                          <p className="font-bold text-purple-600">23</p>
                          <p className="text-xs text-gray-600">Entreprises</p>
                        </div>
                        <div>
                          <p className="font-bold text-green-600">377</p>
                          <p className="text-xs text-gray-600">Particuliers</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="forecasting" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-orange-600" />
                      Projections 2025
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-orange-600">12.5M€</p>
                        <p className="text-sm text-gray-600">Chiffre d'affaires prévu fin 2025</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Q2 2025</span>
                          <span className="font-bold">3.2M€</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Q3 2025</span>
                          <span className="font-bold">4.1M€</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Q4 2025</span>
                          <span className="font-bold">5.2M€</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Rocket className="h-5 w-5 text-purple-600" />
                      Objectifs Stratégiques
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">50,000 Apprenants</span>
                          <span className="text-sm">68%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '68%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">1,000 Entreprises</span>
                          <span className="text-sm">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">15M€ Revenus</span>
                          <span className="text-sm">19%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '19%'}}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="performance" className="space-y-6">
              <Card className="border-2 border-gold-200 bg-gradient-to-r from-yellow-50 to-orange-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-center text-gray-900 mb-6 flex items-center justify-center gap-2">
                    <Crown className="h-6 w-6 text-yellow-600" />
                    Performance Exceptionnelle CED
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center space-y-3">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center"
                      >
                        <TrendingUp className="h-10 w-10 text-green-600" />
                      </motion.div>
                      <h4 className="font-bold text-gray-900">Leadership Marché</h4>
                      <p className="text-3xl font-bold text-green-600">#1</p>
                      <p className="text-sm text-gray-700">IA Éthique en France</p>
                    </div>

                    <div className="text-center space-y-3">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center"
                      >
                        <Star className="h-10 w-10 text-blue-600" />
                      </motion.div>
                      <h4 className="font-bold text-gray-900">Satisfaction Client</h4>
                      <p className="text-3xl font-bold text-blue-600">98.7%</p>
                      <p className="text-sm text-gray-700">Note moyenne utilisateurs</p>
                    </div>

                    <div className="text-center space-y-3">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-20 h-20 mx-auto rounded-full bg-purple-100 flex items-center justify-center"
                      >
                        <Zap className="h-10 w-10 text-purple-600" />
                      </motion.div>
                      <h4 className="font-bold text-gray-900">Innovation Technologique</h4>
                      <p className="text-3xl font-bold text-purple-600">8</p>
                      <p className="text-sm text-gray-700">Technologies exclusives mondiales</p>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 text-sm">
                      Croissance Record: +847% en 2024
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <Card className="border-2 border-purple-300 bg-gradient-to-r from-purple-100 to-blue-100">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Rejoignez la Révolution de l'IA Éthique
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                Faites partie de la croissance exceptionnelle du Club Empreinte Digitale.
                Nos formations révolutionnaires transforment carrières et entreprises.
              </p>
              
              <div className="flex justify-center gap-4">
                <Button size="lg" className="px-8 py-3">
                  <Rocket className="h-5 w-5 mr-2" />
                  Commencer Maintenant
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Voir Détails Performance
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