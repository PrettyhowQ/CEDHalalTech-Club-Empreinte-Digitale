import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Play, 
  Pause, 
  Volume2, 
  BookOpen, 
  Users, 
  Crown, 
  Star,
  Clock,
  CheckCircle,
  Award,
  Video,
  Headphones,
  MessageCircle,
  Calendar,
  Globe,
  Heart,
  Mic,
  Download,
  ArrowRight,
  Zap
} from 'lucide-react';

interface Recitator {
  id: string;
  name: string;
  nameArabic: string;
  country: string;
  specialty: string;
  students: number;
  rating: number;
  image: string;
  price: number;
  currency: string;
  description: string;
  courses: Course[];
}

interface Course {
  id: string;
  title: string;
  titleArabic: string;
  duration: string;
  lessons: number;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  price: number;
  description: string;
  features: string[];
}

export function PremiumArabicSchool() {
  const [selectedRecitator, setSelectedRecitator] = useState<string>('');
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [currentTab, setCurrentTab] = useState<'overview' | 'recitators' | 'courses' | 'live'>('overview');

  const recitators: Recitator[] = [
    {
      id: 'mishary-alafasy',
      name: 'Mishary Rashid Al-Afasy',
      nameArabic: 'مشاري راشد العفاسي',
      country: 'Kuwait',
      specialty: 'Récitation & Tajwid',
      students: 15420,
      rating: 4.9,
      image: '/api/placeholder/150/150',
      price: 299,
      currency: 'CHF',
      description: 'Récitateur koweïtien renommé mondialement, expert en Tajwid et récitation mélodieuse du Coran.',
      courses: [
        {
          id: 'tajwid-basics',
          title: 'Fondamentaux du Tajwid',
          titleArabic: 'أساسيات التجويد',
          duration: '12 semaines',
          lessons: 24,
          level: 'Débutant',
          price: 199,
          description: 'Apprenez les règles fondamentales du Tajwid avec Mishary Al-Afasy',
          features: ['Sessions live hebdomadaires', 'Correction personnalisée', 'Certificat authentifié']
        },
        {
          id: 'advanced-recitation',
          title: 'Récitation Avancée',
          titleArabic: 'التلاوة المتقدمة',
          duration: '20 semaines',
          lessons: 40,
          level: 'Avancé',
          price: 399,
          description: 'Perfectionnez votre récitation avec les techniques avancées',
          features: ['Masterclass privées', 'Enregistrements personnalisés', 'Mentorat individuel']
        }
      ]
    },
    {
      id: 'abdul-rahman-sudais',
      name: 'Abdul Rahman Al-Sudais',
      nameArabic: 'عبد الرحمن السديس',
      country: 'Saudi Arabia',
      specialty: 'Imam Masjid Al-Haram',
      students: 22100,
      rating: 5.0,
      image: '/api/placeholder/150/150',
      price: 399,
      currency: 'CHF',
      description: 'Imam de la Grande Mosquée de La Mecque, voix légendaire connue dans le monde entier.',
      courses: [
        {
          id: 'mecca-style',
          title: 'Style de La Mecque',
          titleArabic: 'أسلوب مكة المكرمة',
          duration: '16 semaines',
          lessons: 32,
          level: 'Intermédiaire',
          price: 299,
          description: 'Apprenez le style unique de récitation de La Mecque',
          features: ['Live depuis La Mecque', 'Histoire du Haram', 'Connexion spirituelle']
        }
      ]
    },
    {
      id: 'saad-al-ghamidi',
      name: 'Saad Al-Ghamidi',
      nameArabic: 'سعد الغامدي',
      country: 'Saudi Arabia',
      specialty: 'Récitation émotionnelle',
      students: 18750,
      rating: 4.8,
      image: '/api/placeholder/150/150',
      price: 249,
      currency: 'CHF',
      description: 'Récitateur saoudien célèbre pour sa récitation émouvante et spirituelle.',
      courses: [
        {
          id: 'emotional-recitation',
          title: 'Récitation Émotionnelle',
          titleArabic: 'التلاوة العاطفية',
          duration: '10 semaines',
          lessons: 20,
          level: 'Intermédiaire',
          price: 179,
          description: 'Développez l\'émotion et la spiritualité dans votre récitation',
          features: ['Techniques d\'émotion', 'Méditation coranique', 'Impact spirituel']
        }
      ]
    }
  ];

  const liveStreams = [
    {
      id: 'mecca-live',
      title: 'Direct La Mecque - Haram Sharif',
      url: 'https://www.youtube.com/live/rgl7MTvsioM?si=YRl4Wfgz-YxNwJsF',
      status: 'live',
      viewers: 245672,
      language: 'Arabe'
    },
    {
      id: 'tajwid-lessons',
      title: 'Cours Tajwid Complets',
      url: 'https://www.youtube.com/watch?v=wO2DRVC-g9w&list=PLDGSJOlM3XL8aPMnm4riNMab33Jnra0hz',
      status: 'playlist',
      lessons: 25,
      language: 'Arabe/Français'
    }
  ];

  const pricing = {
    monthly: {
      basic: { price: 29, features: ['Accès cours de base', 'Support communauté', 'Certificats'] },
      premium: { price: 99, features: ['Tous les cours', 'Sessions live', 'Correction personnalisée', 'Certificats Premium'] },
      vip: { price: 299, features: ['Accès VIP total', 'Mentorat 1-à-1', 'Accès aux Récitateurs', 'Certificat Authentifié'] }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Crown className="h-12 w-12 text-yellow-400" />
              <h1 className="text-5xl font-bold">École Arabe Premium</h1>
            </div>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Apprenez l'arabe et la récitation du Coran avec les plus grands récitateurs du monde. 
              Formation personnalisée, certification authentique, expérience sans publicité.
            </p>
            
            {/* Live Badge */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <Badge className="bg-red-500 text-white px-4 py-2 text-lg animate-pulse">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  EN DIRECT - La Mecque
                </div>
              </Badge>
              <Badge className="bg-green-500 text-white px-4 py-2 text-lg">
                245,672 spectateurs
              </Badge>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-lg font-semibold"
                onClick={() => setCurrentTab('live')}
              >
                <Play className="mr-3 h-6 w-6" />
                Regarder en Direct
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg"
                onClick={() => setCurrentTab('recitators')}
              >
                <Users className="mr-3 h-6 w-6" />
                Nos Récitateurs
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8">
            {[
              { id: 'overview', label: 'Aperçu', icon: BookOpen },
              { id: 'live', label: 'Direct & Cours', icon: Video },
              { id: 'recitators', label: 'Récitateurs', icon: Users },
              { id: 'courses', label: 'Formations', icon: Award }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setCurrentTab(tab.id as any)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 transition-colors ${
                  currentTab === tab.id
                    ? 'border-emerald-500 text-emerald-600'
                    : 'border-transparent text-gray-600 hover:text-emerald-600'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Overview Tab */}
        {currentTab === 'overview' && (
          <div className="space-y-12">
            
            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">
                    <Crown className="h-12 w-12 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Récitateurs Authentiques</h3>
                  <p className="text-gray-600">
                    Apprenez directement avec les plus grands récitateurs du monde arabe
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">
                    <Video className="h-12 w-12 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Sessions Live</h3>
                  <p className="text-gray-600">
                    Cours en direct depuis La Mecque, Médine et autres lieux saints
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">
                    <Award className="h-12 w-12 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Certification</h3>
                  <p className="text-gray-600">
                    Obtenez des certificats authentifiés reconnus internationalement
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Pricing */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-8">Plans d'Abonnement</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {Object.entries(pricing.monthly).map(([plan, details]) => (
                  <Card key={plan} className={plan === 'premium' ? 'border-emerald-500 border-2' : ''}>
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-2">
                        {plan === 'basic' && <BookOpen className="h-8 w-8 text-blue-500" />}
                        {plan === 'premium' && <Star className="h-8 w-8 text-emerald-500" />}
                        {plan === 'vip' && <Crown className="h-8 w-8 text-yellow-500" />}
                      </div>
                      <CardTitle className="capitalize">{plan}</CardTitle>
                      <div className="text-3xl font-bold">
                        {details.price} CHF<span className="text-sm text-gray-500">/mois</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {details.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant={plan === 'premium' ? 'default' : 'outline'}>
                        Choisir {plan}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Live Tab */}
        {currentTab === 'live' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Diffusions Live & Cours</h2>
            
            {liveStreams.map(stream => (
              <Card key={stream.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{stream.title}</h3>
                      <p className="text-gray-600">Langue: {stream.language}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      {stream.status === 'live' && (
                        <Badge className="bg-red-500 text-white animate-pulse">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            LIVE
                          </div>
                        </Badge>
                      )}
                      {stream.viewers && (
                        <div className="text-sm text-gray-600">
                          {stream.viewers.toLocaleString()} spectateurs
                        </div>
                      )}
                      {stream.lessons && (
                        <div className="text-sm text-gray-600">
                          {stream.lessons} leçons
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Embedded YouTube */}
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src={stream.url.includes('live') 
                        ? stream.url.replace('youtube.com/live/', 'youtube.com/embed/') 
                        : stream.url.replace('youtube.com/watch?v=', 'youtube.com/embed/').split('&')[0]
                      }
                      title={stream.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      Ajouter aux favoris
                    </Button>
                    <Button className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Voir sur YouTube
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Recitators Tab */}
        {currentTab === 'recitators' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Nos Récitateurs Experts</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recitators.map(recitator => (
                <Card key={recitator.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={recitator.image} 
                      alt={recitator.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-yellow-500 text-black">
                        <Star className="h-3 w-3 mr-1" />
                        {recitator.rating}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-semibold">{recitator.name}</h3>
                      <p className="text-lg text-emerald-600 font-arabic">{recitator.nameArabic}</p>
                      <p className="text-sm text-gray-600">{recitator.country} • {recitator.specialty}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-600">
                        <Users className="h-4 w-4 inline mr-1" />
                        {recitator.students.toLocaleString()} étudiants
                      </div>
                      <div className="text-lg font-bold text-emerald-600">
                        {recitator.price} {recitator.currency}
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">{recitator.description}</p>
                    
                    <div className="space-y-2">
                      <Button 
                        className="w-full" 
                        onClick={() => setSelectedRecitator(recitator.id)}
                      >
                        Voir les cours
                      </Button>
                      <Button variant="outline" className="w-full">
                        Session d'essai gratuite
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Courses Tab */}
        {currentTab === 'courses' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Formations Disponibles</h2>
            
            {recitators.map(recitator => (
              <div key={recitator.id} className="space-y-4">
                <h3 className="text-2xl font-semibold flex items-center gap-3">
                  <img src={recitator.image} alt={recitator.name} className="w-12 h-12 rounded-full" />
                  Cours avec {recitator.name}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {recitator.courses.map(course => (
                    <Card key={course.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle>{course.title}</CardTitle>
                            <p className="text-emerald-600 font-arabic">{course.titleArabic}</p>
                          </div>
                          <Badge variant="outline">{course.level}</Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4" />
                            {course.lessons} leçons
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{course.description}</p>
                        
                        <div className="space-y-2 mb-4">
                          {course.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-emerald-600">
                            {course.price} CHF
                          </div>
                          <Button>
                            S'inscrire maintenant
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer with No Ads Promise */}
      <div className="bg-emerald-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="h-8 w-8 text-yellow-400" />
            <h3 className="text-2xl font-bold">Expérience Premium Sans Publicité</h3>
          </div>
          <p className="text-emerald-100 text-lg">
            Concentrez-vous sur votre apprentissage spirituel sans aucune distraction publicitaire. 
            Notre engagement : une expérience pure et authentique.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PremiumArabicSchool;