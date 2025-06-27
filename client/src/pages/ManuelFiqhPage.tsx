import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Download, 
  Share2, 
  Globe,
  Users,
  Award,
  CheckCircle,
  Star,
  Heart,
  Eye,
  Clock,
  FileText,
  Bookmark,
  Search,
  ChevronRight,
  Shield,
  Lightbulb,
  Target,
  Smartphone,
  Brain,
  Code,
  CreditCard,
  Lock,
  Zap
} from 'lucide-react';
import Footer from '@/components/Footer';

const tableOfContents = [
  { id: 'introduction', title: 'Introduction au Fiqh Informatique', icon: BookOpen, level: 1 },
  { id: 'sources', title: 'Les 4 Sources Islamiques Authentiques', icon: Shield, level: 1 },
  { id: 'developpement', title: 'Développement d\'Applications', icon: Smartphone, level: 1 },
  { id: 'intelligence-artificielle', title: 'Intelligence Artificielle & IA', icon: Brain, level: 1 },
  { id: 'blockchain', title: 'Blockchain & Cryptomonnaies', icon: Code, level: 1 },
  { id: 'confidentialite', title: 'Confidentialité & Protection des Données', icon: Lock, level: 1 },
  { id: 'fintech', title: 'Technologies Financières (FinTech)', icon: CreditCard, level: 1 },
  { id: 'machine-learning', title: 'Machine Learning & Big Data', icon: Brain, level: 1 },
  { id: 'cybersecurite', title: 'Cybersécurité & Hacking Éthique', icon: Shield, level: 1 },
  { id: 'commerce', title: 'Commerce Électronique', icon: Globe, level: 1 },
  { id: 'faq', title: 'Questions Fréquentes', icon: Lightbulb, level: 1 },
  { id: 'references', title: 'Références & Bibliographie', icon: FileText, level: 1 }
];

const regionalStats = [
  { region: 'Golfe', countries: ['UAE', 'Arabie Saoudite', 'Qatar', 'Koweït', 'Bahreïn'], students: '2.1M', color: 'bg-blue-100 text-blue-800' },
  { region: 'Maghreb', countries: ['Maroc', 'Tunisie', 'Algérie'], students: '1.8M', color: 'bg-green-100 text-green-800' },
  { region: 'Afrique Sub.', countries: ['Nigeria', 'Sénégal', 'Mali'], students: '3.2M', color: 'bg-purple-100 text-purple-800' },
  { region: 'Asie Sud-Est', countries: ['Indonésie', 'Malaisie', 'Brunei'], students: '4.5M', color: 'bg-orange-100 text-orange-800' },
  { region: 'Europe/Amériques', countries: ['France', 'UK', 'USA', 'Canada'], students: '1.2M', color: 'bg-cyan-100 text-cyan-800' }
];

const chapterPreviews = [
  {
    id: 'developpement',
    title: 'Développement d\'Applications',
    status: 'MANDUB',
    summary: 'Guide complet pour développer des applications mobiles et web conformes à la Sharia',
    keyPoints: [
      'Conditions de licéité pour les apps',
      'Applications recommandées vs à éviter',
      'Intention pure (Niyyah) dans le développement',
      'Sources islamiques et validations scholars'
    ],
    readTime: 15,
    difficulty: 'Intermédiaire'
  },
  {
    id: 'intelligence-artificielle',
    title: 'Intelligence Artificielle & IA',
    status: 'HALAL',
    summary: 'Utilisation éthique de l\'IA selon les principes islamiques',
    keyPoints: [
      'L\'IA comme outil créé par Allah',
      'Supervision humaine requise',
      'Applications bénéfiques encouragées',
      'Éviter les biais discriminatoires'
    ],
    readTime: 12,
    difficulty: 'Avancé'
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Cryptomonnaies',
    status: 'HALAL',
    summary: 'Blockchain licite, cryptomonnaies sous conditions',
    keyPoints: [
      'Transparence et immutabilité',
      'Éviter spéculation excessive (Gharar)',
      'Smart contracts islamiques',
      'Stablecoins recommandées'
    ],
    readTime: 18,
    difficulty: 'Expert'
  },
  {
    id: 'cybersecurite',
    title: 'Cybersécurité & Hacking Éthique',
    status: 'MANDUB',
    summary: 'Protection des systèmes comme préservation des biens (Hifz al-Mal)',
    keyPoints: [
      'Hacking éthique avec autorisation',
      'Protection de la communauté',
      'Audit de sécurité conforme',
      'Formation en cybersécurité'
    ],
    readTime: 14,
    difficulty: 'Avancé'
  }
];

export default function ManuelFiqhPage() {
  const [selectedChapter, setSelectedChapter] = useState('introduction');
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'HALAL': return 'bg-green-100 text-green-800';
      case 'HARAM': return 'bg-red-100 text-red-800';
      case 'MANDUB': return 'bg-blue-100 text-blue-800';
      case 'MAKRUH': return 'bg-yellow-100 text-yellow-800';
      case 'MUBAH': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-cyan-50">
      {/* Header */}
      <motion.div 
        className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <BookOpen className="h-16 w-16" />
            <div className="text-left">
              <h1 className="text-5xl font-bold">Manuel Complet</h1>
              <h2 className="text-3xl font-semibold opacity-90">Fiqh Informatique</h2>
            </div>
          </div>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Guide Officiel Club Empreinte Digitale - Accessible à tous les étudiants musulmans du monde entier
          </p>
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <span>5 Régions Mondiales</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>12.8M+ Étudiants</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span>100% Halal Certifié</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              <span>12 Chapitres Complets</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8">
        {/* Statistics Régionales */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Couverture Mondiale - Étudiants Musulmans par Région
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {regionalStats.map((region, index) => (
              <Card key={region.region} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mx-auto mb-2 ${region.color}`}>
                    <Globe className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{region.region}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-800 mb-2">{region.students}</div>
                  <div className="text-xs text-gray-600 space-y-1">
                    {region.countries.map(country => (
                      <div key={country}>{country}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Table des Matières */}
        <motion.div 
          className="mb-12 bg-white rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FileText className="h-8 w-8 text-emerald-600" />
            Table des Matières
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tableOfContents.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-200"
                onClick={() => setSelectedChapter(item.id)}
                whileHover={{ x: 5 }}
              >
                <item.icon className="h-5 w-5 text-emerald-600" />
                <span className="font-medium text-gray-700">{index + 1}. {item.title}</span>
                <ChevronRight className="h-4 w-4 text-gray-400 ml-auto" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Aperçu des Chapitres */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Aperçu des Chapitres Clés
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {chapterPreviews.map((chapter, index) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-emerald-500">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className={`${getStatusColor(chapter.status)} text-xs font-semibold`}>
                        {chapter.status}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{chapter.readTime} min</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-800">
                      {chapter.title}
                    </CardTitle>
                    <p className="text-sm text-gray-600">{chapter.summary}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Points clés :</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {chapter.keyPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t">
                        <Badge variant="outline" className="text-xs">
                          {chapter.difficulty}
                        </Badge>
                        <Button size="sm" className="text-xs bg-emerald-600 hover:bg-emerald-700">
                          <BookOpen className="h-3 w-3 mr-1" />
                          Lire Chapitre
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Validation selon les 4 Sources */}
        <motion.div 
          className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-3">
            <Shield className="h-8 w-8 text-emerald-600" />
            Validation selon les 4 Sources Islamiques Authentiques
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-2 border-green-200">
              <CardHeader>
                <div className="text-4xl mb-2">📖</div>
                <CardTitle className="text-green-800">Coran</CardTitle>
                <p className="text-xs text-green-600">Source Suprême</p>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold mb-2">Versets clés :</div>
                  <ul className="space-y-1 text-xs">
                    <li>• Al-Baqarah (2:275)</li>
                    <li>• Al-Jumu'ah (62:10)</li>
                    <li>• An-Nisa (4:29)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-200">
              <CardHeader>
                <div className="text-4xl mb-2">☪️</div>
                <CardTitle className="text-blue-800">Sunna</CardTitle>
                <p className="text-xs text-blue-600">Guidance Prophétique</p>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold mb-2">Hadiths authentiques :</div>
                  <ul className="space-y-1 text-xs">
                    <li>• Sahih Bukhari</li>
                    <li>• Sahih Muslim</li>
                    <li>• Sunan Abu Dawud</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-purple-200">
              <CardHeader>
                <div className="text-4xl mb-2">🤝</div>
                <CardTitle className="text-purple-800">Ijmâ'</CardTitle>
                <p className="text-xs text-purple-600">Consensus Scholars</p>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold mb-2">Institutions :</div>
                  <ul className="space-y-1 text-xs">
                    <li>• Académie Fiqh OCI</li>
                    <li>• AAOIFI</li>
                    <li>• Dar al-Ifta</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-orange-200">
              <CardHeader>
                <div className="text-4xl mb-2">⚖️</div>
                <CardTitle className="text-orange-800">Qiyâs</CardTitle>
                <p className="text-xs text-orange-600">Analogie Juridique</p>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold mb-2">Principes :</div>
                  <ul className="space-y-1 text-xs">
                    <li>• Maslaha (intérêt public)</li>
                    <li>• Maqâsid Sharia</li>
                    <li>• Analogies métiers</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div 
          className="text-center bg-white rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Accédez au Manuel Complet
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Plus de 50 pages de contenu détaillé, validé par 150+ scholars internationaux, 
            accessible gratuitement à tous les étudiants musulmans du monde entier.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <BookOpen className="h-5 w-5 mr-2" />
              Lire en Ligne
            </Button>
            <Button size="lg" variant="outline">
              <Download className="h-5 w-5 mr-2" />
              Télécharger PDF
            </Button>
            <Button size="lg" variant="outline">
              <Share2 className="h-5 w-5 mr-2" />
              Partager
            </Button>
            <Button size="lg" variant="outline">
              <Bookmark className="h-5 w-5 mr-2" />
              Sauvegarder
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">50+</div>
                <div className="text-sm text-gray-600">Pages de contenu</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">150+</div>
                <div className="text-sm text-gray-600">Scholars validés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">12</div>
                <div className="text-sm text-gray-600">Chapitres détaillés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">100%</div>
                <div className="text-sm text-gray-600">Halal certifié</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}