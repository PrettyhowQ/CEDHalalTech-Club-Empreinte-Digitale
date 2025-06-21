import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { ThemeCustomizer } from '@/components/ui/ThemeCustomizer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AppointmentButton } from '@/components/ui/AppointmentButton';
import { ProgressTracker } from '@/components/ui/ProgressTracker';
import { AIRecommendations } from '@/components/ui/AIRecommendations';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { 
  Heart, 
  Apple, 
  Calendar, 
  Clock, 
  Target, 
  TrendingUp,
  User,
  Award,
  Smartphone,
  Brain,
  CheckCircle,
  Star,
  MessageCircle,
  Camera,
  Zap,
  Activity,
  BookOpen,
  FileText
} from 'lucide-react';

interface NutritionPlan {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  features: string[];
  targetAudience: string[];
  aiFeatures: string[];
  souheiaSpecialty: string;
}

interface SuccessStory {
  id: string;
  name: string;
  age: number;
  profession: string;
  challenge: string;
  results: string[];
  testimonial: string;
  timeframe: string;
  avatar: string;
}

export default function NutritionSouheila() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [activeTab, setActiveTab] = useState('programmes');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    objectives: '',
    restrictions: '',
    lifestyle: ''
  });
  const { user } = useAuth();

  const nutritionPlans: NutritionPlan[] = [
    {
      id: 'equilibre-digital',
      name: 'Équilibre Digital',
      description: 'Programme nutritionnel personnalisé avec suivi digital et IA prédictive',
      duration: '3 mois',
      price: 299,
      features: [
        'Analyse nutritionnelle personnalisée par Souheila',
        'Application mobile dédiée avec IA',
        'Suivi hebdomadaire personnalisé',
        'Recettes adaptées à votre profil',
        'Coaching vidéo mensuel'
      ],
      targetAudience: ['Professionnels occupés', 'Entrepreneurs', 'Télétravail'],
      aiFeatures: [
        'Recommandations automatiques basées sur vos données',
        'Prédiction des besoins nutritionnels',
        'Ajustement intelligent des portions'
      ],
      souheiaSpecialty: 'Nutrition comportementale et équilibre vie pro/perso'
    },
    {
      id: 'performance-cognitive',
      name: 'Performance Cognitive',
      description: 'Optimisation de l\'alimentation pour la performance mentale et la productivité',
      duration: '6 mois',
      price: 499,
      features: [
        'Plan nutrition pour optimiser les fonctions cérébrales',
        'Suivi de l\'impact sur la concentration',
        'Supplémentation intelligente',
        'Coaching intensif avec Souheila',
        'Communauté exclusive'
      ],
      targetAudience: ['Dirigeants', 'Étudiants', 'Créatifs', 'Développeurs'],
      aiFeatures: [
        'Corrélation alimentation-performance cognitive',
        'Optimisation des repas selon l\'agenda',
        'Alertes nutritionnelles intelligentes'
      ],
      souheiaSpecialty: 'Neuro-nutrition et performance mentale'
    },
    {
      id: 'transformation-complete',
      name: 'Transformation Complète',
      description: 'Accompagnement global pour une transformation durable de vos habitudes',
      duration: '12 mois',
      price: 899,
      features: [
        'Bilan complet avec analyses biologiques',
        'Suivi quotidien personnalisé',
        'Sessions coaching individuelles mensuelles',
        'Plan d\'exercices complémentaire',
        'Accès à l\'écosystème CED complet'
      ],
      targetAudience: ['Transformation majeure', 'Objectifs ambitieux', 'Suivi long terme'],
      aiFeatures: [
        'Modélisation prédictive de votre évolution',
        'Adaptation continue du programme',
        'Intelligence artificielle comportementale'
      ],
      souheiaSpecialty: 'Transformation holistique et changement comportemental'
    }
  ];

  const successStories: SuccessStory[] = [
    {
      id: 'marie-entrepreneur',
      name: 'Marie L.',
      age: 34,
      profession: 'CEO Startup Tech',
      challenge: 'Fatigue chronique, grignotage, stress alimentaire',
      results: [
        'Énergie stable toute la journée',
        'Perte de 8kg en 4 mois',
        'Amélioration de la concentration',
        'Meilleur sommeil'
      ],
      testimonial: 'Souheila a transformé ma relation à l\'alimentation. Grâce à l\'IA, j\'ai des recommandations parfaitement adaptées à mon rythme de dirigeante. Je recommande vivement !',
      timeframe: '4 mois',
      avatar: '👩‍💼'
    },
    {
      id: 'thomas-dev',
      name: 'Thomas K.',
      age: 28,
      profession: 'Développeur Full-Stack',
      challenge: 'Alimentation déséquilibrée, performances cognitives en baisse',
      results: [
        'Concentration améliorée de 40%',
        'Élimination des coups de fatigue',
        'Nouvelles habitudes durables',
        'Meilleure productivité'
      ],
      testimonial: 'L\'approche de Souheila combinée à l\'IA prédictive m\'a permis d\'optimiser mon alimentation pour performer au maximum. C\'est révolutionnaire !',
      timeframe: '6 mois',
      avatar: '👨‍💻'
    },
    {
      id: 'sophie-manager',
      name: 'Sophie D.',
      age: 42,
      profession: 'Directrice Marketing',
      challenge: 'Stress, troubles digestifs, équilibre vie pro/perso',
      results: [
        'Stress réduit de 60%',
        'Digestion parfaite',
        'Équilibre retrouvé',
        'Confiance en soi renforcée'
      ],
      testimonial: 'Souheila comprend les défis des femmes actives. Son programme m\'a redonné l\'énergie et la sérénité. L\'application IA est un vrai plus !',
      timeframe: '8 mois',
      avatar: '👩‍💼'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission
    console.log('Demande de consultation:', formData);
  };

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
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center text-4xl">
                👩‍⚕️
              </div>
              <div className="text-left">
                <h1 className="text-4xl font-bold text-white drop-shadow-lg">
                  Nutrition Digitale avec
                </h1>
                <h2 className="text-3xl font-bold text-yellow-300 drop-shadow-lg">
                  Souheila Yakoubi-Ozel
                </h2>
                <p className="text-xl text-white/80 drop-shadow-lg">
                  Experte en Nutrition Comportementale & IA Santé
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-4 text-center">
                  <Heart className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-xl font-bold text-green-600">500+</p>
                  <p className="text-sm text-gray-600">Clients Transformés</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-4 text-center">
                  <Brain className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-xl font-bold text-blue-600">15 ans</p>
                  <p className="text-sm text-gray-600">D'Expertise</p>
                </CardContent>
              </Card>
              <Card className="border-purple-200 bg-purple-50">
                <CardContent className="p-4 text-center">
                  <Smartphone className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-xl font-bold text-purple-600">IA Avancée</p>
                  <p className="text-sm text-gray-600">Suivi Prédictif</p>
                </CardContent>
              </Card>
              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="p-4 text-center">
                  <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-xl font-bold text-orange-600">98%</p>
                  <p className="text-sm text-gray-600">Satisfaction</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* À propos de Souheila */}
          <Card className="border-pink-200 bg-gradient-to-r from-pink-50 to-purple-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                <User className="h-6 w-6 text-pink-600" />
                À propos de Souheila Yakoubi-Ozel
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Expertise & Formation</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Docteur en Sciences de la Nutrition</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Spécialiste en Nutrition Comportementale</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Formatrice en IA appliquée à la Santé</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>15 ans d'expérience clinique</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Approche Innovante</h3>
                  <p className="text-gray-700">
                    Souheila révolutionne la nutrition en combinant son expertise clinique avec 
                    l'intelligence artificielle. Elle développe des programmes personnalisés qui 
                    s'adaptent en temps réel à votre mode de vie et vos objectifs.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Neuro-nutrition</Badge>
                    <Badge variant="secondary">IA Prédictive</Badge>
                    <Badge variant="secondary">Coaching Digital</Badge>
                    <Badge variant="secondary">Bien-être Global</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Plans Nutrition */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white drop-shadow-lg text-center">
              Programmes Nutrition IA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nutritionPlans.map((plan) => (
                <motion.div
                  key={plan.id}
                  whileHover={{ scale: 1.02 }}
                  className={`cursor-pointer ${selectedPlan === plan.id ? 'ring-2 ring-blue-400' : ''}`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{plan.name}</span>
                        <Badge variant="outline" className="text-green-600 border-green-200">
                          {plan.price}€
                        </Badge>
                      </CardTitle>
                      <p className="text-gray-600">{plan.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium">Durée: {plan.duration}</span>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Caractéristiques:</h4>
                        <ul className="space-y-1">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Brain className="h-4 w-4 text-purple-600" />
                          IA Features:
                        </h4>
                        <ul className="space-y-1">
                          {plan.aiFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <Zap className="h-3 w-3 text-purple-600 mt-1 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3 bg-pink-50 rounded-lg border border-pink-200">
                        <h5 className="font-medium text-pink-800 mb-1">Spécialité Souheila:</h5>
                        <p className="text-sm text-pink-700">{plan.souheiaSpecialty}</p>
                      </div>

                      <Button className="w-full">
                        <Apple className="h-4 w-4 mr-2" />
                        Choisir ce programme
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Témoignages de réussite */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white drop-shadow-lg text-center">
              Transformations Réussies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {successStories.map((story) => (
                <Card key={story.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{story.avatar}</span>
                      <div>
                        <CardTitle className="text-lg">{story.name}</CardTitle>
                        <p className="text-sm text-gray-600">{story.profession}, {story.age} ans</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Défi initial:</h4>
                      <p className="text-sm text-gray-700">{story.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Résultats obtenus:</h4>
                      <ul className="space-y-1">
                        {story.results.map((result, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <Star className="h-3 w-3 text-yellow-500" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <MessageCircle className="h-4 w-4 text-blue-600 mb-2" />
                      <p className="text-sm text-blue-800 italic">"{story.testimonial}"</p>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <Badge variant="outline" className="text-purple-600 border-purple-200">
                        {story.timeframe}
                      </Badge>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Formulaire de contact */}
          <Card className="border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                <Calendar className="h-6 w-6 text-green-600" />
                Consultation Gratuite avec Souheila
              </CardTitle>
              <p className="text-center text-gray-600">
                Obtenez votre bilan nutritionnel personnalisé et découvrez comment l'IA peut transformer votre alimentation
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Votre nom complet"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <Input
                  type="number"
                  placeholder="Votre âge"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  required
                />
                <Textarea
                  placeholder="Quels sont vos objectifs nutritionnels ?"
                  value={formData.objectives}
                  onChange={(e) => setFormData({...formData, objectives: e.target.value})}
                  required
                />
                <Textarea
                  placeholder="Restrictions alimentaires ou problèmes de santé"
                  value={formData.restrictions}
                  onChange={(e) => setFormData({...formData, restrictions: e.target.value})}
                />
                <Textarea
                  placeholder="Décrivez votre mode de vie (travail, horaires, activités)"
                  value={formData.lifestyle}
                  onChange={(e) => setFormData({...formData, lifestyle: e.target.value})}
                  required
                />
                <Button type="submit" className="w-full text-lg py-3">
                  <Heart className="h-5 w-5 mr-2" />
                  Réserver ma consultation gratuite
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}