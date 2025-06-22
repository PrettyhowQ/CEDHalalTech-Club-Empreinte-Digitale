import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen,
  Clock,
  Compass,
  Calendar,
  Star,
  Shield,
  Heart,
  Navigation,
  MapPin,
  Zap
} from 'lucide-react';
import { Link } from 'wouter';

export function CitadelleMusulmanSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 flex items-center justify-center"
            >
              <BookOpen className="h-8 w-8 text-white" />
            </motion.div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
                La Citadelle du Musulman
              </h2>
              <p className="text-xl text-gray-600 mt-2">
                Spiritualité & Protection - Al-Aman CED
              </p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Votre compagnon spirituel quotidien intégré à votre assurance Takaful. 
            Douaas, prières, Qibla et calendrier islamique pour une vie bénie et protégée.
          </p>
        </motion.div>

        {/* Fonctionnalités principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Douaas contextuelles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-green-200">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg text-green-800">Douaas Contextuelles</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  9 invocations adaptées à vos situations quotidiennes et d'assurance
                </p>
                <div className="space-y-2">
                  <Badge className="bg-green-100 text-green-800 text-xs">Voyage & Hajj</Badge>
                  <Badge className="bg-blue-100 text-blue-800 text-xs">Maison bénie</Badge>
                  <Badge className="bg-purple-100 text-purple-800 text-xs">Travail halal</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Horaires prières */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-blue-200">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg text-blue-800">Horaires Prières</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Gestion intelligente du temps autour des 5 prières quotidiennes
                </p>
                <div className="space-y-2">
                  <div className="text-lg font-bold text-blue-700">15:42</div>
                  <div className="text-sm text-blue-600">Prochaine: Asr</div>
                  <Badge className="bg-green-100 text-green-800 text-xs">Mode Jumma vendredi</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Boussole Qibla */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-purple-200">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Compass className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg text-purple-800">Boussole Qibla</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Direction précise de la Kaaba depuis votre position
                </p>
                <div className="space-y-2">
                  <div className="text-lg font-bold text-purple-700">285° NW</div>
                  <div className="text-sm text-purple-600">2,145 km de Makkah</div>
                  <div className="flex justify-center">
                    <Navigation className="h-6 w-6 text-purple-500" style={{ transform: 'rotate(285deg)' }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Calendrier islamique */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-amber-200">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg text-amber-800">Calendrier Islamique</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Dates Hijri et événements islamiques importants
                </p>
                <div className="space-y-2">
                  <div className="text-sm font-bold text-amber-700">15 Jumada Al-Thani 1446</div>
                  <div className="text-xs text-amber-600">22 Décembre 2024</div>
                  <Badge className="bg-yellow-100 text-yellow-800 text-xs">Hajj dans 186 jours</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Intégration avec Al-Aman CED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-300">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-green-800">
                🤝 Spiritualité & Protection Unifiées
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="text-center p-4 bg-white rounded-lg">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-green-800 mb-2">Protection Voyage Hajj</h3>
                  <p className="text-sm text-gray-600">
                    Douaas du voyageur + Assurance Hajj/Omra spécialisée avec guide spirituel inclus
                  </p>
                </div>

                <div className="text-center p-4 bg-white rounded-lg">
                  <Heart className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-blue-800 mb-2">Foyer Béni & Protégé</h3>
                  <p className="text-sm text-gray-600">
                    Douaas d'entrée/sortie + Al-Aman Home Secure Takaful pour votre maison
                  </p>
                </div>

                <div className="text-center p-4 bg-white rounded-lg">
                  <Zap className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-bold text-purple-800 mb-2">Travail Halal & Sécurisé</h3>
                  <p className="text-sm text-gray-600">
                    Douaas professionnelles + Al-Aman Business Halal Pro pour votre activité
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-lg font-medium text-gray-700 mb-4">
                  La première solution au monde qui unit protection spirituelle et matérielle
                </p>
                <div className="flex justify-center gap-4">
                  <Badge className="bg-green-100 text-green-800 px-3 py-1">100% Halal</Badge>
                  <Badge className="bg-blue-100 text-blue-800 px-3 py-1">Certifié Charia</Badge>
                  <Badge className="bg-purple-100 text-purple-800 px-3 py-1">Standards Suisses</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Exemples de douaas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Aperçu des Invocations Intégrées
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Douaa voyage */}
            <Card className="border-l-4 border-green-500">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <CardTitle className="text-lg text-green-800">Douaa du Voyage</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg border-r-4 border-green-500">
                    <div className="text-right text-lg leading-relaxed arabic-text" dir="rtl">
                      سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "Gloire à Celui qui a mis ceci à notre service alors que nous n'étions pas capables de les dominer..."
                  </p>
                  <div className="flex items-center gap-2 text-xs text-purple-700">
                    <Shield className="h-3 w-3" />
                    <span>Lié à Al-Aman CED Voyage & Hajj Protection</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Douaa maison */}
            <Card className="border-l-4 border-blue-500">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-lg text-blue-800">Douaa de la Maison</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg border-r-4 border-blue-500">
                    <div className="text-right text-lg leading-relaxed arabic-text" dir="rtl">
                      بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "Au nom d'Allah nous entrons, au nom d'Allah nous sortons..."
                  </p>
                  <div className="flex items-center gap-2 text-xs text-purple-700">
                    <Shield className="h-3 w-3" />
                    <span>Lié à Al-Aman CED Home Secure Takaful</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-green-600 to-purple-600 text-white inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Découvrez La Citadelle du Musulman
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Une expérience spirituelle unique intégrée à votre protection Takaful
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/citadelle-musulman">
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Explorer les Douaas
                  </Button>
                </Link>
                <Link href="/alaman-ced-comparison">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                    <Shield className="mr-2 h-5 w-5" />
                    Découvrir Al-Aman CED
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}