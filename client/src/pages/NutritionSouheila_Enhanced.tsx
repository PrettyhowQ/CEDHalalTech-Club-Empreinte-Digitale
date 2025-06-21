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
  FileText,
  Users
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
      targetAudience: ['Professionnels actifs', 'Parents débordés', 'Étudiants'],
      aiFeatures: [
        'Analyse prédictive des habitudes',
        'Recommandations temps réel',
        'Ajustement automatique du plan'
      ],
      souheiaSpecialty: 'Spécialisée dans la nutrition comportementale et l\'accompagnement des troubles alimentaires liés au stress professionnel.'
    },
    {
      id: 'performance-cognitive',
      name: 'Performance Cognitive',
      description: 'Optimisation nutritionnelle pour les performances intellectuelles',
      duration: '6 mois',
      price: 499,
      features: [
        'Plan nutrition cerveau-optimisé',
        'Supplémentation personnalisée',
        'Suivi biomarqueurs',
        'Techniques de neuro-nutrition',
        'Sessions coaching bi-mensuelles'
      ],
      targetAudience: ['Dirigeants', 'Entrepreneurs', 'Chercheurs', 'Créatifs'],
      aiFeatures: [
        'Analyse cognitive en temps réel',
        'Optimisation micronutriments',
        'Prédiction performance mentale'
      ],
      souheiaSpecialty: 'Expertise unique en neuro-nutrition et optimisation des fonctions cognitives par l\'alimentation.'
    },
    {
      id: 'transformation-complete',
      name: 'Transformation Complète',
      description: 'Programme holistique corps-esprit avec suivi médical intégré',
      duration: '12 mois',
      price: 899,
      features: [
        'Bilan nutritionnel complet',
        'Suivi médical partenaire',
        'Coaching lifestyle global',
        'Accès communauté VIP',
        'Séances individuelles mensuelles',
        'Plan famille inclus'
      ],
      targetAudience: ['Transformation majeure', 'Problèmes de santé', 'Approche familiale'],
      aiFeatures: [
        'Modélisation 3D progression',
        'Intégration données médicales',
        'Prévention prédictive'
      ],
      souheiaSpecialty: 'Approche holistique intégrant nutrition, psychologie comportementale et médecine préventive.'
    }
  ];

  const successStories: SuccessStory[] = [
    {
      id: '1',
      name: 'Marie D.',
      age: 34,
      profession: 'Directrice Marketing',
      challenge: 'Stress professionnel, grignotage émotionnel, fatigue chronique',
      results: ['-8kg en 4 mois', '+40% énergie', 'Sommeil récupérateur', 'Confiance retrouvée'],
      testimonial: 'Souheila a complètement transformé ma relation à la nourriture. L\'approche IA m\'a permis de comprendre mes patterns alimentaires et de les corriger durablement.',
      timeframe: '4 mois',
      avatar: '👩‍💼'
    },
    {
      id: '2',
      name: 'Thomas L.',
      age: 28,
      profession: 'Développeur',
      challenge: 'Alimentation déstructurée, manque de concentration, surpoids',
      results: ['-12kg en 6 mois', '+60% concentration', 'Habitudes saines', 'Performance optimisée'],
      testimonial: 'Le programme Performance Cognitive m\'a aidé à optimiser mon alimentation pour mon travail intellectuel. Les résultats sont spectaculaires.',
      timeframe: '6 mois',
      avatar: '👨‍💻'
    },
    {
      id: '3',
      name: 'Sarah & famille',
      age: 42,
      profession: 'Mère de 3 enfants',
      challenge: 'Organisation familiale, alimentation équilibrée pour tous',
      results: ['Famille en meilleure santé', 'Organisation optimisée', 'Budget maîtrisé', 'Enfants éduqués'],
      testimonial: 'Le programme Transformation Complète nous a permis d\'adopter de nouveaux réflexes alimentaires en famille. Souheila a su s\'adapter à nos contraintes.',
      timeframe: '8 mois',
      avatar: '👨‍👩‍👧‍👦'
    }
  ];

  const blogArticles = [
    {
      id: '1',
      title: 'L\'IA au service de l\'alimentation intuitive',
      category: 'Nutrition IA',
      date: '21 Juin 2025',
      excerpt: 'Comment la technologie peut nous aider à retrouver une relation saine avec la nourriture...',
      gradient: 'from-green-400 to-blue-500'
    },
    {
      id: '2',
      title: 'Micronutriments et performance cognitive',
      category: 'Bien-être',
      date: '18 Juin 2025',
      excerpt: 'Les clés nutritionnelles pour optimiser vos capacités intellectuelles au quotidien...',
      gradient: 'from-pink-400 to-purple-500'
    },
    {
      id: '3',
      title: '5 smoothies énergisants pour l\'été',
      category: 'Recettes',
      date: '15 Juin 2025',
      excerpt: 'Recettes rafraîchissantes et nutritives pour maintenir votre énergie pendant les fortes chaleurs...',
      gradient: 'from-yellow-400 to-orange-500'
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation demandée:', formData);
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
                  <Star className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-xl font-bold text-orange-600">98%</p>
                  <p className="text-sm text-gray-600">Satisfaction</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Tabs Navigation */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="programmes">Programmes</TabsTrigger>
              <TabsTrigger value="suivi">Suivi Progrès</TabsTrigger>
              <TabsTrigger value="recommandations">IA Conseils</TabsTrigger>
              <TabsTrigger value="blog">Blog Wellness</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            <TabsContent value="programmes" className="space-y-8">
              {/* Programmes nutrition */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {nutritionPlans.map((plan) => (
                  <Card key={plan.id} className="border-pink-200 hover:shadow-lg transition-shadow relative">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Apple className="h-6 w-6 text-green-600" />
                        {plan.name}
                      </CardTitle>
                      <p className="text-gray-600">{plan.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Badge variant="secondary">{plan.duration}</Badge>
                        <span className="text-2xl font-bold text-green-600">{plan.price}€</span>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Inclus :</h4>
                        <ul className="space-y-1">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="text-sm flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-blue-600">Spécialité Souheila :</h4>
                        <p className="text-sm text-blue-700 italic">{plan.souheiaSpecialty}</p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Public cible :</h4>
                        <div className="flex flex-wrap gap-1">
                          {plan.targetAudience.map((audience, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {audience}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Button 
                          className="w-full"
                          onClick={() => setSelectedPlan(plan.id)}
                        >
                          Choisir ce programme
                        </Button>
                        <AppointmentButton specialist="nutrition" variant="compact" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Consultation gratuite */}
              <Card className="border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Consultation Gratuite avec Souheila
                  </h3>
                  <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                    Découvrez comment notre approche nutrition + IA peut transformer votre relation à l'alimentation. 
                    Première consultation offerte pour évaluer vos besoins personnalisés.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <AppointmentButton specialist="nutrition" />
                    <Button variant="outline" size="lg" className="px-8 py-3">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Chat avec l'IA
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Témoignages */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg text-center">
                  Histoires de Réussite
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {successStories.map((story) => (
                    <Card key={story.id} className="border-green-200 bg-white/90">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-3xl">{story.avatar}</span>
                          <div>
                            <h4 className="font-semibold">{story.name}</h4>
                            <p className="text-sm text-gray-600">{story.profession}, {story.age} ans</p>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium text-sm">Défi initial :</h5>
                            <p className="text-sm text-gray-700">{story.challenge}</p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-sm">Résultats :</h5>
                            <div className="flex flex-wrap gap-1">
                              {story.results.map((result, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {result}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <blockquote className="text-sm italic text-gray-800 border-l-4 border-green-500 pl-3">
                            "{story.testimonial}"
                          </blockquote>
                          
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>Durée: {story.timeframe}</span>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 text-yellow-500" />
                              <span>5/5</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="suivi" className="space-y-6">
              {user ? (
                <ProgressTracker userId={user.id} />
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="font-medium text-gray-900 mb-2">Connectez-vous pour accéder à votre suivi</h3>
                    <p className="text-gray-600 mb-4">
                      Visualisez vos progrès, analysez vos habitudes et recevez des recommandations personnalisées.
                    </p>
                    <Button>Se connecter</Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="recommandations" className="space-y-6">
              {user ? (
                <AIRecommendations userId={user.id} />
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Brain className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="font-medium text-gray-900 mb-2">Recommandations IA Personnalisées</h3>
                    <p className="text-gray-600 mb-4">
                      Connectez-vous pour recevoir des conseils nutrition adaptés à votre profil unique.
                    </p>
                    <Button>Se connecter</Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="blog" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogArticles.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow">
                    <div className={`h-48 bg-gradient-to-r ${article.gradient} rounded-t-lg`}></div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{article.category}</Badge>
                        <span className="text-sm text-gray-500">{article.date}</span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {article.excerpt}
                      </p>
                      <Button variant="outline" size="sm">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Lire l'article
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Newsletter */}
              <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Newsletter Bien-être de Souheila
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Recevez chaque semaine conseils nutrition, recettes santé et insights IA directement dans votre boîte mail.
                    </p>
                    <div className="flex gap-3 max-w-md mx-auto">
                      <Input placeholder="Votre email" />
                      <Button>
                        <FileText className="h-4 w-4 mr-2" />
                        S'abonner
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-6 w-6 text-blue-600" />
                      Demande de Consultation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          placeholder="Nom complet"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                        />
                        <Input
                          placeholder="Email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                        />
                      </div>
                      <Input
                        placeholder="Âge"
                        value={formData.age}
                        onChange={(e) => setFormData(prev => ({...prev, age: e.target.value}))}
                      />
                      <Textarea
                        placeholder="Vos objectifs nutritionnels"
                        value={formData.objectives}
                        onChange={(e) => setFormData(prev => ({...prev, objectives: e.target.value}))}
                      />
                      <Textarea
                        placeholder="Restrictions alimentaires ou problèmes de santé"
                        value={formData.restrictions}
                        onChange={(e) => setFormData(prev => ({...prev, restrictions: e.target.value}))}
                      />
                      <Textarea
                        placeholder="Votre mode de vie (activité, horaires, contraintes)"
                        value={formData.lifestyle}
                        onChange={(e) => setFormData(prev => ({...prev, lifestyle: e.target.value}))}
                      />
                      <Button type="submit" className="w-full">
                        <Calendar className="h-4 w-4 mr-2" />
                        Demander une consultation
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Coordonnées</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <MessageCircle className="h-5 w-5 text-blue-600" />
                        <span>souheila@club-empreinte-digitale.fr</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-green-600" />
                        <span>Consultations du lundi au vendredi</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-purple-600" />
                        <span>Créneaux de 9h à 18h</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Prendre Rendez-vous</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Réservez directement un créneau avec Souheila pour votre consultation personnalisée.
                      </p>
                      <AppointmentButton specialist="nutrition" />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}