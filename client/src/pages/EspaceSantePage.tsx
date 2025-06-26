import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Activity, Apple, Dumbbell, Calendar, User, Phone, Mail, Star, Clock, Award, Stethoscope } from 'lucide-react';
import { Link } from 'wouter';

export default function EspaceSantePage() {
  const services = [
    {
      title: "Nutrition Personnalisée",
      description: "Plans alimentaires sur mesure selon vos objectifs",
      icon: Apple,
      price: "99 CHF/mois",
      features: ["Bilan nutritionnel", "Menus hebdomadaires", "Suivi personnalisé", "Recettes halal"]
    },
    {
      title: "Coaching Sportif",
      description: "Programmes d'entraînement adaptés à tous niveaux",
      icon: Dumbbell,
      price: "149 CHF/mois",
      features: ["Séances individuelles", "Plans d'entraînement", "Suivi de progression", "Motivation quotidienne"]
    },
    {
      title: "Suivi Bien-être",
      description: "Accompagnement global pour votre santé",
      icon: Heart,
      price: "199 CHF/mois",
      features: ["Consultation mensuelle", "Analyses de santé", "Conseils préventifs", "Suivi médical"]
    },
    {
      title: "Consultation Premium",
      description: "Rendez-vous privilégié avec Souheila",
      icon: Stethoscope,
      price: "299 CHF/séance",
      features: ["Consultation 1h", "Bilan complet", "Plan personnalisé", "Suivi prioritaire"]
    }
  ];

  const testimonials = [
    {
      name: "Fatima Al-Zahra",
      location: "Genève, Suisse",
      text: "Souheila m'a aidée à retrouver une alimentation équilibrée tout en respectant mes principes islamiques. Excellente approche !",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      location: "Dubaï, EAU",
      text: "Le coaching sportif de Souheila est exceptionnel. J'ai perdu 15kg en 6 mois avec ses conseils personnalisés.",
      rating: 5
    },
    {
      name: "Khadija Benali",
      location: "Casablanca, Maroc",
      text: "Approche holistique remarquable. Souheila comprend parfaitement les besoins des femmes musulmanes.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
              <Heart className="text-white text-3xl" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Espace Santé CED
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Dirigé par <strong>Souheila Yakoubi-Ozel</strong>
          </p>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Co-Directrice • Experte Santé & Nutrition
          </Badge>
        </div>

        {/* Présentation Souheila */}
        <Card className="mb-12 border-pink-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-pink-500 to-rose-600 text-white">
            <CardTitle className="flex items-center text-2xl">
              <User className="mr-3" />
              Souheila Yakoubi-Ozel
            </CardTitle>
            <CardDescription className="text-pink-100">
              Co-Directrice Secteur Santé • Experte Nutrition & Bien-être
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <Award className="mr-2 text-pink-600" />
                  Expertise & Qualifications
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Nutritionniste certifiée</li>
                  <li>• Coach en bien-être holistique</li>
                  <li>• Spécialiste nutrition halal</li>
                  <li>• Formation médecine préventive</li>
                  <li>• 8+ années d'expérience</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <Activity className="mr-2 text-pink-600" />
                  Approche Unique
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Nutrition conforme aux principes islamiques</li>
                  <li>• Programmes personnalisés</li>
                  <li>• Suivi médical intégré</li>
                  <li>• Approche corps-esprit</li>
                  <li>• Prévention et bien-être durable</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Nos Services Santé
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-pink-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="text-pink-600 text-2xl" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="text-2xl font-bold text-pink-600 mt-2">
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <Heart className="w-4 h-4 text-pink-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-pink-600 hover:bg-pink-700">
                    Réserver
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Planning & Contact */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-pink-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 text-pink-600" />
                Horaires de Consultation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Lundi - Vendredi</span>
                  <span>8h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Samedi</span>
                  <span>9h00 - 16h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Dimanche</span>
                  <span>Sur rendez-vous</span>
                </div>
                <div className="mt-4 p-3 bg-pink-50 rounded-lg">
                  <p className="text-sm text-pink-700">
                    <Clock className="inline w-4 h-4 mr-1" />
                    Consultations d'urgence disponibles 24h/7j
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-pink-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="mr-2 text-pink-600" />
                Contact Direct
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-pink-600 mr-3" />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-gray-600">+41 79 XXX XX XX</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-pink-600 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">souheila@ced-sante.ch</p>
                  </div>
                </div>
                <Button className="w-full bg-pink-600 hover:bg-pink-700">
                  Prendre Rendez-vous
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Témoignages */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Témoignages Patients
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-pink-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Commencez Votre Transformation Santé
          </h2>
          <p className="text-xl mb-6">
            Rejoignez des centaines de patients satisfaits avec Souheila Yakoubi-Ozel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
              Consultation Gratuite
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
              Voir les Programmes
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}