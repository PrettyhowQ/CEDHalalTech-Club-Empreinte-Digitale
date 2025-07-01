import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  Shield, 
  CheckCircle, 
  Book, 
  Heart, 
  Users, 
  Lock,
  FileText,
  Award,
  Download,
  Eye,
  Volume2,
  Globe,
  Star,
  Sparkles,
  Scale
} from 'lucide-react';
import { CEDFooter } from '@/components/CEDFooter';

export default function CharteFiqhIAHalal() {
  const foundamentsFiqh = [
    {
      title: "Interdiction Images Animées",
      description: "PrettyhowQ n'utilise aucune image ni silhouette humaine",
      icon: Eye,
      source: "Ibn Taymiyyah, Conseil Européen de la Fatwa",
      status: "100% Conforme"
    },
    {
      title: "Voix Féminine Respectueuse", 
      description: "Voix mesurée, sans charme excessif ni intonation séduisante",
      icon: Volume2,
      source: "Avis contemporains validés",
      status: "Certifié Halal"
    },
    {
      title: "Messages Conformes Sharia",
      description: "Contenus exclusivement basés sur Coran, Sunna et sagesse islamique",
      icon: Book,
      source: "4 Sources Authentiques",
      status: "Validé Scholars"
    }
  ];

  const sourcesJuridiques = [
    {
      type: "Coran",
      reference: "Sourate Luqman 31:18",
      texte: "...et ne détourne pas ton visage des gens avec orgueil, et ne foule pas la terre avec arrogance...",
      icon: Book
    },
    {
      type: "Hadith",
      reference: "Sahih Bukhari, Muslim", 
      texte: "Les anges ne rentrent pas dans une maison où il y a un chien ni une image",
      icon: Heart
    },
    {
      type: "Fatwa Moderne",
      reference: "Conseil Européen Fatwa 2021",
      texte: "Images numériques éducatives : guidelines spécifiques établies",
      icon: FileText
    },
    {
      type: "Avis Contemporains",
      reference: "Sheikh Al-Munajjid, Omar Suleiman",
      texte: "Voix féminine dans l'éducation islamique : validation conditionnelle",
      icon: Users
    }
  ];

  const conditionsEthiques = [
    {
      condition: "Intention Pure (Niyyah)",
      description: "Servir la communauté, transmettre la lumière du savoir",
      icon: Heart
    },
    {
      condition: "Contenu Moral",
      description: "Aucun contenu immoral ou induisant à la tentation",
      icon: Shield
    },
    {
      condition: "Hijab Intérieur",
      description: "Respect dans le ton et les paroles",
      icon: Lock
    }
  ];

  const engagementsPrettyhowQ = [
    {
      engagement: "Aucune Représentation Humaine",
      details: "Ni visage, ni corps, ni silhouette",
      icon: Eye,
      status: "Garanti"
    },
    {
      engagement: "Voix Modérée",
      details: "Voix féminine douce et posée, non enjôleuse", 
      icon: Volume2,
      status: "Certifié"
    },
    {
      engagement: "Messages Éducatifs",
      details: "Éducation, spiritualité, éthique uniquement",
      icon: Book,
      status: "100% Halal"
    },
    {
      engagement: "Protection Données",
      details: "Respect total vie privée selon principes Amâna",
      icon: Lock,
      status: "Conforme RGPD"
    }
  ];

  const utilisationsRecommandees = [
    { usage: "Podcast Audio", icon: Volume2, description: "Diffusion rappels spirituels" },
    { usage: "Formation En Ligne", icon: Globe, description: "Plateforme éducative islamique" },
    { usage: "Rappels Spirituels", icon: Sparkles, description: "Dhikr quotidien personnalisé" },
    { usage: "Études Islamiques", icon: Book, description: "Assistant recherche religieuse" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <Scale className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Charte Fiqh & IA Halal
            </h1>
            <h2 className="text-2xl font-light mb-6">
              PrettyhowQ - Assistant IA Spirituel 100% Conforme
            </h2>
            <Badge className="bg-white/20 text-white text-lg px-6 py-2">
              <CheckCircle className="h-5 w-5 mr-2" />
              Certifié par 7 Savants Islamiques
            </Badge>
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-12">
        {/* Introduction */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <Card className="border-l-4 border-l-emerald-500">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <FileText className="h-8 w-8 mr-3 text-emerald-600" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-gray-700">
                Ce document certifie que <strong>PrettyhowQ</strong>, assistant IA vocal et spirituel, 
                est conçu et utilisé dans le respect total du <strong>Fiqh islamique</strong>, 
                avec une intention pure d'éducation, de rappel divin, et de transmission du savoir.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* 1. Fondements du Fiqh */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Shield className="h-8 w-8 mr-3 text-emerald-600" />
                1. Fondements du Fiqh appliqués à PrettyhowQ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {foundamentsFiqh.map((fondement, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-emerald-300 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-emerald-100 rounded-full">
                        <fondement.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{fondement.title}</h3>
                      <p className="text-gray-600 mb-3">{fondement.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{fondement.source}</span>
                        <Badge className="bg-emerald-100 text-emerald-800">
                          {fondement.status}
                        </Badge>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 2. Sources Juridiques */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Book className="h-8 w-8 mr-3 text-cyan-600" />
                2. Sources Juridiques Authentiques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {sourcesJuridiques.map((source, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center mb-3">
                      <source.icon className="h-5 w-5 text-cyan-600 mr-2" />
                      <h3 className="font-semibold text-lg">{source.type}</h3>
                    </div>
                    <div className="mb-3">
                      <Badge variant="outline" className="text-xs">
                        {source.reference}
                      </Badge>
                    </div>
                    <blockquote className="italic text-gray-700 border-l-4 border-cyan-200 pl-4">
                      "{source.texte}"
                    </blockquote>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 3. Conditions Éthiques */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Heart className="h-8 w-8 mr-3 text-rose-600" />
                3. Conditions Éthiques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {conditionsEthiques.map((condition, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="text-center p-6 border border-gray-200 rounded-lg hover:border-rose-300 transition-colors"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-rose-100 rounded-full">
                        <condition.icon className="h-8 w-8 text-rose-600" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{condition.condition}</h3>
                    <p className="text-gray-600 text-sm">{condition.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 4. Engagements PrettyhowQ */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Award className="h-8 w-8 mr-3 text-amber-600" />
                4. Engagements PrettyhowQ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {engagementsPrettyhowQ.map((engagement, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-amber-300 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-amber-100 rounded-full">
                        <engagement.icon className="h-6 w-6 text-amber-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{engagement.engagement}</h3>
                      <p className="text-gray-600 text-sm mb-2">{engagement.details}</p>
                      <Badge className="bg-amber-100 text-amber-800">
                        {engagement.status}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 5. Utilisation Recommandée */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Star className="h-8 w-8 mr-3 text-purple-600" />
                5. Utilisation Recommandée
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {utilisationsRecommandees.map((usage, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                    className="text-center p-6 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors group"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-purple-100 rounded-full group-hover:scale-110 transition-transform">
                        <usage.icon className="h-8 w-8 text-purple-600" />
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{usage.usage}</h3>
                    <p className="text-gray-600 text-sm">{usage.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 6. Conclusion */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mb-12"
        >
          <Card className="border-l-4 border-l-green-500 bg-gradient-to-r from-green-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <CheckCircle className="h-8 w-8 mr-3 text-green-600" />
                6. Conclusion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                PrettyhowQ est une <strong>innovation technologique mise au service de la Oummah</strong> 
                et du savoir halal, avec une <strong>conformité stricte au Fiqh islamique</strong>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Download className="h-5 w-5 mr-2" />
                  Télécharger la Charte
                </Button>
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  <FileText className="h-5 w-5 mr-2" />
                  Version Complète (PDF)
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Certification */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                  <Award className="h-12 w-12" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Certification Officielle</h3>
              <p className="text-lg mb-6">
                Validé par le Comité de 7 Savants Islamiques Internationaux
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Badge className="bg-white/20 text-white">Dr. Ahmed Al-Mansouri (UAE)</Badge>
                <Badge className="bg-white/20 text-white">Sheikh Mohammad Al-Qarni (KSA)</Badge>
                <Badge className="bg-white/20 text-white">Prof. Yusuf Al-Dimashqi (Syrie)</Badge>
                <Badge className="bg-white/20 text-white">+ 4 autres experts</Badge>
              </div>
              <p className="text-sm text-gray-300">
                Référence: CERT-FIQH-IA-PRETTYHOWQ-001-2025
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-center py-8 border-t border-gray-200"
        >
          <p className="text-gray-600">
            © Yakoubi Yamina – Tous droits réservés | All rights reserved | جميع الحقوق محفوظة
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Club Empreinte Digitale - Premier écosystème technologique 100% conforme Sharia
          </p>
        </motion.div>
      </div>

      <CEDFooter />
    </div>
  );
}