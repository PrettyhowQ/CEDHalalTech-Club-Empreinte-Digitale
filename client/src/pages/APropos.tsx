import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Heart, 
  Globe, 
  Users, 
  Target, 
  Award,
  Lightbulb,
  Shield,
  Zap,
  BookOpen,
  Handshake,
  TrendingUp
} from 'lucide-react';

export default function APropos() {
  const values = [
    {
      icon: Heart,
      title: 'IA Éthique',
      description: 'Développement responsable de l\'intelligence artificielle avec respect des valeurs humaines'
    },
    {
      icon: Globe,
      title: 'Accessibilité Universelle',
      description: 'Formation accessible à tous, dans 78 langues, avec égalité des chances'
    },
    {
      icon: Handshake,
      title: 'Commerce Équitable',
      description: 'Écosystème solidaire intégré favorisant un développement durable et équitable'
    },
    {
      icon: Shield,
      title: 'Transparence',
      description: 'Gouvernance ouverte et transparente avec protection des données personnelles'
    }
  ];

  const achievements = [
    { number: '34,221+', label: 'Apprenants actifs' },
    { number: '78', label: 'Langues supportées' },
    { number: '10', label: 'Domaines IA couverts' },
    { number: '24/7', label: 'Support disponible' }
  ];

  const team = [
    {
      name: 'Yakoubi Yamina',
      role: 'Fondatrice & CEO',
      description: 'Visionnaire de l\'IA éthique et de l\'éducation accessible',
      expertise: ['IA Éthique', 'Innovation Pédagogique', 'Leadership']
    },
    {
      name: 'Souheila Yakoubi-Ozel',
      role: 'Experte Nutrition & Santé',
      description: 'Spécialiste en nutrition sportive et programmes de santé intégrés',
      expertise: ['Nutrition Sportive', 'Coaching Santé', 'Programmes Personnalisés']
    }
  ];

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
              <Brain className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">À propos du Club Empreinte Digitale</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Plateforme d'apprentissage IA éthique avec écosystème solidaire intégré. 
            Formation responsable, commerce équitable et accessibilité universelle.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="pt-8 pb-8">
              <div className="text-center">
                <Target className="h-12 w-12 mx-auto mb-4 text-white" />
                <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
                <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                  Démocratiser l'accès à l'éducation en intelligence artificielle éthique en créant 
                  un écosystème solidaire qui forme, accompagne et connecte les apprenants du monde entier. 
                  Nous croyons en une IA au service de l'humanité, développée avec responsabilité et transparence.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Notre Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Valeurs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Nos Valeurs Fondamentales</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Équipe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Notre Équipe</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium">
                        {member.role}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Technologie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardContent className="pt-8">
              <div className="text-center mb-8">
                <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Propulsé par PrettyhowQ</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Notre plateforme utilise PrettyhowQ, une technologie IA éthique avancée qui 
                  personnalise l'apprentissage tout en respectant la vie privée et les valeurs humaines.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Apprentissage Adaptatif</h3>
                  <p className="text-sm text-gray-600">
                    Parcours personnalisés selon votre rythme et vos objectifs
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Protection des Données</h3>
                  <p className="text-sm text-gray-600">
                    Conformité RGPD et respect strict de votre vie privée
                  </p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Évolution Continue</h3>
                  <p className="text-sm text-gray-600">
                    Mise à jour constante avec les dernières avancées IA
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="pt-8 pb-8">
              <Lightbulb className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Notre Vision 2025</h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-6">
                Devenir la référence mondiale en éducation IA éthique, avec 100,000 apprenants actifs 
                et un écosystème solidaire qui transforme positivement la société grâce à une 
                intelligence artificielle responsable et accessible à tous.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-green-100 text-green-800 px-4 py-2">
                  <Award className="h-4 w-4 mr-2" />
                  Excellence Pédagogique
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                  <Users className="h-4 w-4 mr-2" />
                  Communauté Mondiale
                </Badge>
                <Badge className="bg-purple-100 text-purple-800 px-4 py-2">
                  <Heart className="h-4 w-4 mr-2" />
                  Impact Social Positif
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}