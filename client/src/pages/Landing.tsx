import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Heart,
  Laptop,
  Smartphone,
  Recycle,
  Users,
  Globe,
  MapPin,
  Building2,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Anchor,
  Sun,
  Download,
  Shield,
  Target,
  Award
} from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">TechForAll</h1>
                <p className="text-sm text-gray-600">Plateforme de donation technologique</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">Connexion</Button>
              <Button className="bg-green-600 hover:bg-green-700">Donner</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="flex justify-center items-center gap-4 mb-8">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-20 h-20 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl flex items-center justify-center"
              >
                <Heart className="h-10 w-10 text-white" />
              </motion.div>
            </div>
            
            <h1 className="text-6xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
              TechForAll
            </h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Plateforme Transformative d'Impact Social
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
              Autonomisation de l'impact social par la donation technologique durable et l'inclusion numérique, 
              avec capacités de suivi en temps réel pour divers types de donations.
            </p>
            
            <div className="flex justify-center gap-4 flex-wrap mb-12">
              <Badge className="bg-green-500 text-white px-6 py-3 text-lg">
                <Recycle className="h-5 w-5 mr-2" />
                Économie Circulaire
              </Badge>
              <Badge className="bg-blue-500 text-white px-6 py-3 text-lg">
                <Users className="h-5 w-5 mr-2" />
                Impact Social
              </Badge>
              <Badge className="bg-purple-500 text-white px-6 py-3 text-lg">
                <Globe className="h-5 w-5 mr-2" />
                Suivi GPS Temps Réel
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Button 
                size="lg"
                className="h-24 bg-green-600 hover:bg-green-700 flex flex-col items-center justify-center"
                onClick={() => window.location.href = '/techforall'}
              >
                <Heart className="h-6 w-6 mb-2" />
                TechForAll Association
              </Button>
              <Button 
                size="lg"
                className="h-24 bg-blue-600 hover:bg-blue-700 flex flex-col items-center justify-center"
                onClick={() => window.location.href = '/ced-bank'}
              >
                <Building2 className="h-6 w-6 mb-2" />
                CED Bank
              </Button>
              <Button 
                size="lg"
                className="h-24 bg-orange-600 hover:bg-orange-700 flex flex-col items-center justify-center"
                onClick={() => window.location.href = '/costa-del-sol'}
              >
                <Sun className="h-6 w-6 mb-2" />
                Costa del Sol
              </Button>
              <Button 
                size="lg"
                className="h-24 bg-purple-600 hover:bg-purple-700 flex flex-col items-center justify-center"
                onClick={() => window.location.href = '/boutique-solidaire'}
              >
                <Laptop className="h-6 w-6 mb-2" />
                Boutique Solidaire
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services principaux */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Écosystème Complet d'Impact Social
            </h2>
            <p className="text-xl text-gray-600">
              Technologies, finance responsable et logistique intégrées
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* TechForAll */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all border-2 border-green-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center text-green-800">
                    TechForAll Association
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-gray-600">
                    Aide aux expatriés et personnes éloignées de l'emploi avec matériel professionnel reconditionné
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Laptop className="h-4 w-4 text-green-600" />
                      <span>MacBook, PC, tablettes reconditionnés</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Anchor className="h-4 w-4 text-green-600" />
                      <span>Équipement marin et GPS</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => window.location.href = '/techforall'}
                  >
                    Découvrir
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* CED Bank */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-all border-2 border-blue-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center text-blue-800">
                    CED Bank International
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-gray-600">
                    Première banque digitale mondiale respectant les principes islamiques
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Shield className="h-4 w-4 text-blue-600" />
                      <span>0% d'intérêts - Halal certifié</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Target className="h-4 w-4 text-blue-600" />
                      <span>Mode prière automatique</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.location.href = '/ced-bank'}
                  >
                    Ouvrir un Compte
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Costa del Sol */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-xl transition-all border-2 border-orange-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Sun className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center text-orange-800">
                    Costa del Sol Hub
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-gray-600">
                    Centre de reconditionnement et hub logistique pour économie circulaire
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="h-4 w-4 text-orange-600" />
                      <span>Gestion collectes temps réel</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Recycle className="h-4 w-4 text-orange-600" />
                      <span>1,240+ équipements traités</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    onClick={() => window.location.href = '/costa-del-sol'}
                  >
                    App Logistique
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Technologies Utilisées
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold">TypeScript/React</h3>
              <p className="text-sm text-gray-600">Frontend responsive</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold">Node.js Express</h3>
              <p className="text-sm text-gray-600">Backend robuste</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold">PostgreSQL</h3>
              <p className="text-sm text-gray-600">Base de données</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold">GPS Temps Réel</h3>
              <p className="text-sm text-gray-600">Suivi donations</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold">Multilingue</h3>
              <p className="text-sm text-gray-600">Interfaces régionales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Rejoignez la Révolution de l'Impact Social
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Participez à l'économie circulaire et contribuez à réduire le gaspillage technologique
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Heart className="h-5 w-5 mr-2" />
              Faire un Don
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <Users className="h-5 w-5 mr-2" />
              Devenir Bénévole
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-green-500" />
                <span className="text-xl font-bold">TechForAll</span>
              </div>
              <p className="text-gray-400">
                Plateforme transformative d'impact social par la donation technologique durable
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/techforall" className="hover:text-white">Association TechForAll</a></li>
                <li><a href="/ced-bank" className="hover:text-white">CED Bank</a></li>
                <li><a href="/costa-del-sol" className="hover:text-white">Costa del Sol</a></li>
                <li><a href="/boutique-solidaire" className="hover:text-white">Boutique Solidaire</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>contact@techforall.org</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+33 1 23 45 67 89</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Costa del Sol, Espagne</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Certifications</h3>
              <ul className="space-y-2 text-gray-400">
                <li>✅ Association à but non lucratif</li>
                <li>✅ ISO 14001 Environnement</li>
                <li>✅ Agrément UE</li>
                <li>✅ Audit transparence</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 TechForAll - Tous droits réservés | Plateforme d'impact social par la technologie durable</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
