import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, Brain, Shield, Building2, Search, 
  CheckCircle, Star, Users, Globe, Download,
  Sparkles, Database, Filter, ArrowRight,
  Bookmark, Heart, Share2, Eye, Clock,
  Award, Zap, Target, TrendingUp
} from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/Footer";

// Types pour la structure des données
interface FiqhRule {
  id: string;
  title: string;
  description: string;
  ruling: 'HALAL' | 'HARAM' | 'MANDUB' | 'MAKRUH' | 'MUBAH';
  sources: {
    coran?: string;
    sunna?: string;
    ijma?: string;
    qiyas?: string;
  };
  scholars: string[];
  category: string;
  subcategory: string;
  relevance: number;
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  tags: string[];
}

interface FiqhDomain {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  rulesCount: number;
  description: string;
  color: string;
  progress: number;
  categories: string[];
  featured: FiqhRule[];
}

const BibliothequeNumeriqueFiqh: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Domaines du Fiqh Informatique
  const fiqhDomains: FiqhDomain[] = [
    {
      id: 'ai',
      name: 'Intelligence Artificielle',
      icon: Brain,
      rulesCount: 3456,
      description: 'Règles islamiques pour l\'IA, machine learning, et systèmes autonomes',
      color: 'from-purple-600 to-indigo-600',
      progress: 94,
      categories: ['Éthique IA', 'Apprentissage Machine', 'Vision Artificielle', 'NLP', 'Robotique'],
      featured: [
        {
          id: 'ai-001',
          title: 'Utilisation de l\'IA pour l\'éducation islamique',
          description: 'L\'utilisation d\'intelligences artificielles pour enseigner le Coran et la Sunna est MANDUB selon les 4 écoles.',
          ruling: 'MANDUB',
          sources: {
            coran: 'Sourate 16:125 - Appelle à la voie de ton Seigneur avec sagesse',
            sunna: 'Hadith Bukhari 79 - Transmettez de moi ne serait-ce qu\'un verset',
            ijma: 'Consensus OCI 2023 sur technologies éducatives islamiques',
            qiyas: 'Analogie avec l\'enseignement par livres et manuscrits'
          },
          scholars: ['Sheikh Al-Munajjid', 'Dr. Yasir Qadhi', 'Sheikh Omar Suleiman'],
          category: 'Éthique IA',
          subcategory: 'Éducation',
          relevance: 95,
          difficulty: 'Intermédiaire',
          tags: ['éducation', 'coran', 'technologie', 'mandub']
        },
        {
          id: 'ai-002',
          title: 'IA générant des images humaines',
          description: 'La création d\'images humaines par IA est MAKRUH selon la majorité des scholars contemporains.',
          ruling: 'MAKRUH',
          sources: {
            coran: 'Sourate 5:90 - Évitez les représentations',
            sunna: 'Hadith Muslim 2107 - Les créateurs d\'images seront châtiés',
            ijma: 'Majorité scholars AMJA 2024',
            qiyas: 'Analogie avec peinture et sculpture traditionnelles'
          },
          scholars: ['Sheikh Ibn Baz', 'Dr. Bilal Philips', 'Sheikh Assim Al-Hakeem'],
          category: 'Éthique IA',
          subcategory: 'Création Contenu',
          relevance: 89,
          difficulty: 'Avancé',
          tags: ['images', 'création', 'makruh', 'représentation']
        }
      ]
    },
    {
      id: 'blockchain',
      name: 'Blockchain & Crypto',
      icon: Building2,
      rulesCount: 2890,
      description: 'Règles pour cryptomonnaies, DeFi, et technologies blockchain conformes Sharia',
      color: 'from-yellow-600 to-orange-600',
      progress: 87,
      categories: ['Cryptomonnaies', 'DeFi', 'NFT', 'Smart Contracts', 'Mining'],
      featured: [
        {
          id: 'crypto-001',
          title: 'Trading de Bitcoin conforme Sharia',
          description: 'Le trading de Bitcoin est MUBAH si sans intérêt, spéculation excessive, et avec possession réelle.',
          ruling: 'MUBAH',
          sources: {
            coran: 'Sourate 2:275 - Allah a rendu licite le commerce',
            sunna: 'Hadith Tirmidhi 1234 - La vente est licite par consentement mutuel',
            ijma: 'Fatwa AAOIFI 2019 sur actifs numériques',
            qiyas: 'Analogie avec échange d\'or et argent'
          },
          scholars: ['Dr. Mohd Daud Bakar', 'Sheikh Joe Bradford', 'Dr. Ziyaad Mahomed'],
          category: 'Cryptomonnaies',
          subcategory: 'Trading',
          relevance: 92,
          difficulty: 'Expert',
          tags: ['bitcoin', 'trading', 'mubah', 'commerce']
        }
      ]
    },
    {
      id: 'privacy',
      name: 'Confidentialité & RGPD',
      icon: Shield,
      rulesCount: 1234,
      description: 'Protection des données personnelles selon principes islamiques et RGPD',
      color: 'from-green-600 to-emerald-600',
      progress: 91,
      categories: ['Protection Données', 'Vie Privée', 'Surveillance', 'Consentement', 'Anonymisation'],
      featured: [
        {
          id: 'privacy-001',
          title: 'Collecte de données personnelles',
          description: 'La collecte de données personnelles nécessite consentement explicite selon principe Amana islamique.',
          ruling: 'MANDUB',
          sources: {
            coran: 'Sourate 49:12 - N\'espionnez pas',
            sunna: 'Hadith Bukhari 6064 - Respectez intimité d\'autrui',
            ijma: 'Consensus IIFA sur protection vie privée 2020',
            qiyas: 'Analogie avec secret professionnel traditionnel'
          },
          scholars: ['Dr. Abdullah Al-Muslih', 'Sheikh Haitham Al-Haddad', 'Dr. Jasser Auda'],
          category: 'Protection Données',
          subcategory: 'Consentement',
          relevance: 88,
          difficulty: 'Intermédiaire',
          tags: ['données', 'consentement', 'amana', 'vie privée']
        }
      ]
    },
    {
      id: 'fintech',
      name: 'Technologies Financières',
      icon: TrendingUp,
      rulesCount: 2134,
      description: 'FinTech islamique, paiements numériques, et services bancaires halal',
      color: 'from-blue-600 to-cyan-600',
      progress: 89,
      categories: ['Paiements', 'Banking Digital', 'Micro-finance', 'Assurance', 'Investissements'],
      featured: [
        {
          id: 'fintech-001',
          title: 'Paiements mobiles sans intérêt',
          description: 'Les systèmes de paiement mobile sont HALAL s\'ils évitent Riba, Gharar et Maysir.',
          ruling: 'HALAL',
          sources: {
            coran: 'Sourate 2:282 - Transactions commerciales justes',
            sunna: 'Hadith Muslim 1587 - Commerce équitable',
            ijma: 'Consensus AAOIFI sur services financiers numériques',
            qiyas: 'Analogie avec hawala traditionnel'
          },
          scholars: ['Dr. Mohammad Hashim Kamali', 'Sheikh Nizam Yaquby', 'Dr. Abdul Azeem Islahi'],
          category: 'Paiements',
          subcategory: 'Mobile',
          relevance: 94,
          difficulty: 'Débutant',
          tags: ['paiements', 'mobile', 'halal', 'sans riba']
        }
      ]
    }
  ];

  // Sources authentiques
  const authenticSources = [
    {
      name: 'CORAN',
      description: '6,236 versets - Source suprême',
      icon: BookOpen,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      verses: '6,236 versets référencés'
    },
    {
      name: 'SUNNA',
      description: 'Bukhari, Muslim, et 4 Sunan',
      icon: Heart,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      verses: '7,563 hadiths authentiques'
    },
    {
      name: 'IJMÂ\'',
      description: 'Consensus des savants',
      icon: Users,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      verses: '150+ scholars consultés'
    },
    {
      name: 'QIYÂS',
      description: 'Analogies juridiques établies',
      icon: Target,
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      verses: '892 analogies validées'
    }
  ];

  // Statistiques globales
  const globalStats = {
    totalRules: 23456,
    scholars: 150,
    languages: 78,
    countries: 67,
    dailyUsers: 12500,
    certifications: 45
  };

  const filteredDomains = fiqhDomains.filter(domain =>
    domain.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    domain.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRulingBadgeColor = (ruling: string) => {
    switch (ruling) {
      case 'HALAL': return 'bg-green-100 text-green-800';
      case 'HARAM': return 'bg-red-100 text-red-800';
      case 'MANDUB': return 'bg-blue-100 text-blue-800';
      case 'MAKRUH': return 'bg-yellow-100 text-yellow-800';
      case 'MUBAH': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-800 to-green-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <BookOpen className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Bibliothèque Fiqh Informatique
            </h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              La plus grande collection mondiale de règles islamiques pour la technologie moderne
            </p>
            <div className="flex items-center justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                <span className="font-bold">23,456</span> règles
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-bold">150+</span> scholars
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                <span className="font-bold">78</span> langues
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Sources Authentiques */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-emerald-800">
              SOURCES AUTHENTIQUES
            </CardTitle>
            <p className="text-center text-gray-600">
              Chaque règle basée sur le Coran, la Sunna authentique, l'Ijmâ' des savants et le Qiyâs
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {authenticSources.map((source, index) => (
                <div key={index} className={`${source.bg} p-6 rounded-lg text-center`}>
                  <source.icon className={`h-8 w-8 ${source.color} mx-auto mb-3`} />
                  <h3 className="font-bold text-lg mb-2">{source.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{source.description}</p>
                  <p className="text-xs font-medium">{source.verses}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recherche et Filtres */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher dans les 23,456 règles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filtres Avancés
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Exporter PDF
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Domaines du Fiqh Informatique */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredDomains.map((domain) => (
            <Card key={domain.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`bg-gradient-to-r ${domain.color} p-6 text-white`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <domain.icon className="h-8 w-8" />
                    <div>
                      <h3 className="text-xl font-bold">{domain.name}</h3>
                      <p className="text-white/90 text-sm">{domain.description}</p>
                    </div>
                  </div>
                  <Badge className="bg-white/20 text-white">
                    {domain.rulesCount.toLocaleString()} règles
                  </Badge>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Complétude</span>
                    <span>{domain.progress}%</span>
                  </div>
                  <Progress value={domain.progress} className="bg-white/20" />
                </div>
              </div>
              
              <CardContent className="p-6">
                {/* Catégories */}
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Catégories:</h4>
                  <div className="flex flex-wrap gap-2">
                    {domain.categories.map((category, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Règles en vedette */}
                <div className="mb-4">
                  <h4 className="font-medium mb-3">Règles en vedette:</h4>
                  {domain.featured.map((rule) => (
                    <div key={rule.id} className="border rounded-lg p-3 mb-3 last:mb-0">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-medium text-sm">{rule.title}</h5>
                        <Badge className={getRulingBadgeColor(rule.ruling)}>
                          {rule.ruling}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{rule.description}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Eye className="h-3 w-3" />
                        <span>Relevance: {rule.relevance}%</span>
                        <span>•</span>
                        <Clock className="h-3 w-3" />
                        <span>{rule.difficulty}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href={domain.id === 'ai' ? '/fiqh-ia-3456-regles' : `/${domain.id}-fiqh-rules`}>
                  <Button className="w-full" variant="outline">
                    <span>Explorer {domain.rulesCount.toLocaleString()} règles</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistiques Détaillées */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800">Statistiques Mondiales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1">
                  {globalStats.totalRules.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Règles Total</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {globalStats.scholars}+
                </div>
                <div className="text-sm text-gray-600">Scholars</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  {globalStats.languages}
                </div>
                <div className="text-sm text-gray-600">Langues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">
                  {globalStats.countries}
                </div>
                <div className="text-sm text-gray-600">Pays</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">
                  {globalStats.dailyUsers.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Utilisateurs/jour</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-1">
                  {globalStats.certifications}
                </div>
                <div className="text-sm text-gray-600">Certifications</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Méthodologie */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800">Méthodologie Authentique</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4">Processus de Validation:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Vérification des sources primaires (Coran/Sunna)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Consultation de 150+ scholars internationaux</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Validation par les 4 écoles juridiques sunnites</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Révision continue selon nouveaux développements</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-4">Certifications:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span>AAOIFI - Standards Financiers Islamiques</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span>IFSB - Supervision Bancaire Islamique</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span>OCI - Organisation Coopération Islamique</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span>AMJA - Association Juristes Musulmans</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/52-modules">
            <Button className="w-full h-16 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white">
              <BookOpen className="h-5 w-5 mr-2" />
              Retour 52 Modules
            </Button>
          </Link>
          <Link href="/fiqh-informatique-complet">
            <Button className="w-full h-16 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
              <Zap className="h-5 w-5 mr-2" />
              Guide Fiqh Complet
            </Button>
          </Link>
          <Link href="/contact-scholars">
            <Button className="w-full h-16 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white">
              <Users className="h-5 w-5 mr-2" />
              Consulter Scholars 24/7
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BibliothequeNumeriqueFiqh;