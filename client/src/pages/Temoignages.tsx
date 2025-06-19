import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  Quote, 
  Users, 
  TrendingUp,
  Heart,
  Globe,
  Award,
  BookOpen,
  Zap,
  Target
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import type { Testimonial } from '@/../../shared/schema';

export default function Temoignages() {
  const { data: testimonials = [], isLoading } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials']
  });

  const stats = [
    { number: '4.9/5', label: 'Note moyenne', icon: Star },
    { number: '34,221+', label: 'Apprenants satisfaits', icon: Users },
    { number: '98%', label: 'Taux de réussite', icon: TrendingUp },
    { number: '78', label: 'Pays représentés', icon: Globe }
  ];

  const categories = [
    { name: 'Formations IA', count: 156, color: 'bg-blue-100 text-blue-800' },
    { name: 'Coaching Mobile', count: 89, color: 'bg-green-100 text-green-800' },
    { name: 'Communauté', count: 67, color: 'bg-purple-100 text-purple-800' },
    { name: 'Support', count: 134, color: 'bg-orange-100 text-orange-800' }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement des témoignages...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Témoignages de Notre Communauté</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Découvrez les expériences inspirantes de nos 34,221+ apprenants dans leur parcours 
            d'apprentissage IA éthique avec le Club Empreinte Digitale.
          </p>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Catégories de témoignages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Témoignages par Catégorie</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Badge key={index} className={`${category.color} px-4 py-2 text-sm`}>
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Témoignages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial: any, index: number) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                          <CardDescription>{testimonial.role}</CardDescription>
                        </div>
                      </div>
                      <Quote className="h-6 w-6 text-blue-400" />
                    </div>
                    
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < testimonial.rating ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">({testimonial.rating}/5)</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{testimonial.course || 'Formation IA Éthique'}</span>
                      <span>
                        {new Date(testimonial.createdAt).toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Témoignages spéciaux - Équipe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Témoignages de l'Équipe</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">YY</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Yakoubi Yamina</h3>
                    <p className="text-purple-600 font-medium">Fondatrice & CEO</p>
                  </div>
                </div>
                <Quote className="h-8 w-8 text-purple-400 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  "Créer le Club Empreinte Digitale était ma vision de démocratiser l'IA éthique. 
                  Voir 34,221+ apprenants transformer leur vie grâce à une technologie responsable 
                  me remplit de fierté. Nous construisons l'avenir de l'éducation IA."
                </p>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-600" />
                  <span className="text-sm text-purple-700">Visionnaire IA Éthique</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">SY</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Souheila Yakoubi-Ozel</h3>
                    <p className="text-green-600 font-medium">Experte Nutrition & Santé</p>
                  </div>
                </div>
                <Quote className="h-8 w-8 text-green-400 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  "Intégrer la nutrition personnalisée dans notre app de coaching mobile révolutionne 
                  l'approche du bien-être. Chaque programme sur 70+ sports est conçu pour optimiser 
                  la santé de nos utilisateurs avec une approche holistique."
                </p>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-green-700">Spécialiste Nutrition Sportive</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardContent className="pt-8 pb-8">
              <Target className="h-16 w-16 text-amber-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Rejoignez Notre Communauté</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                Devenez le prochain témoignage inspirant ! Rejoignez nos 34,221+ apprenants 
                et transformez votre carrière avec l'IA éthique.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Commencer ma Formation
                </Button>
                <Button variant="outline" size="lg">
                  <Zap className="h-5 w-5 mr-2" />
                  Découvrir l'App Mobile
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}