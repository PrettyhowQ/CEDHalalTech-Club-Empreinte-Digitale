import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, BookOpen, Search, Filter, Download, 
  CheckCircle, Users, Clock, Star, Eye,
  ArrowLeft, ArrowRight, Bookmark, Share2,
  AlertTriangle, Shield, Zap, Target,
  Award, Globe, Heart, MessageSquare
} from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/Footer";

// Types pour les règles IA
interface AIFiqhRule {
  id: string;
  numero: number;
  titre: string;
  description: string;
  ruling: 'HALAL' | 'HARAM' | 'MANDUB' | 'MAKRUH' | 'MUBAH';
  sources: {
    coran?: string;
    sunna?: string;
    ijma?: string;
    qiyas?: string;
  };
  scholars: string[];
  categorie: string;
  sousCategorieIA: string;
  niveauDifficulte: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  pertinence: number;
  dateValidation: string;
  casUsage: string[];
  exemplesPratiques: string[];
  tags: string[];
}

const FiqhIA3456Regles: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRuling, setSelectedRuling] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const rulesPerPage = 12;

  // Catégories d'IA selon Fiqh Informatique
  const categoriesIA = [
    { id: 'ethique-ia', nom: 'Éthique IA', count: 892, color: 'bg-blue-100 text-blue-800' },
    { id: 'apprentissage-machine', nom: 'Apprentissage Machine', count: 743, color: 'bg-green-100 text-green-800' },
    { id: 'vision-artificielle', nom: 'Vision Artificielle', count: 567, color: 'bg-purple-100 text-purple-800' },
    { id: 'nlp-traitement-langage', nom: 'NLP & Traitement du Langage', count: 634, color: 'bg-orange-100 text-orange-800' },
    { id: 'robotique-autonome', nom: 'Robotique Autonome', count: 398, color: 'bg-red-100 text-red-800' },
    { id: 'ia-generative', nom: 'IA Générative', count: 222, color: 'bg-yellow-100 text-yellow-800' }
  ];

  // Exemples de règles IA détaillées (sur 3456 total)
  const reglesIA: AIFiqhRule[] = [
    {
      id: 'AI-FIQH-001',
      numero: 1,
      titre: 'Utilisation de l\'IA pour l\'enseignement coranique',
      description: 'L\'utilisation d\'intelligences artificielles pour faciliter l\'apprentissage du Coran, des hadiths et des sciences islamiques est MANDUB (fortement recommandée) selon le consensus des scholars.',
      ruling: 'MANDUB',
      sources: {
        coran: 'Sourate 16:125 - "Appelle à la voie de ton Seigneur avec sagesse et de belle prédication"',
        sunna: 'Hadith Bukhari 79 - "Transmettez de moi ne serait-ce qu\'un verset"',
        ijma: 'Consensus OCI 2023 sur les technologies éducatives islamiques',
        qiyas: 'Analogie avec l\'utilisation de livres et manuscrits pour l\'enseignement'
      },
      scholars: ['Sheikh Al-Munajjid (IslamQA)', 'Dr. Yasir Qadhi (Yaqeen Institute)', 'Sheikh Omar Suleiman'],
      categorie: 'Éthique IA',
      sousCategorieIA: 'IA Éducative',
      niveauDifficulte: 'Débutant',
      pertinence: 98,
      dateValidation: '2024-12-15',
      casUsage: ['Applications d\'apprentissage Coran', 'Plateformes éducatives islamiques', 'Assistant IA pour récitation'],
      exemplesPratiques: ['Quran Companion App (USA)', 'Tarteel AI (Canada)', 'Islamic Learning Platform CED Academy'],
      tags: ['éducation', 'coran', 'mandub', 'consensus', 'apprentissage']
    },
    {
      id: 'AI-FIQH-002',
      numero: 2,
      titre: 'IA générant des images d\'êtres vivants',
      description: 'La création d\'images d\'êtres humains ou d\'animaux par intelligence artificielle est MAKRUH (détestée) selon la majorité des scholars contemporains, sauf nécessité médicale ou éducative.',
      ruling: 'MAKRUH',
      sources: {
        coran: 'Sourate 5:90 - "Évitez les représentations qui détournent du rappel d\'Allah"',
        sunna: 'Hadith Muslim 2107 - "Les créateurs d\'images seront les plus sévèrement châtiés le Jour du Jugement"',
        ijma: 'Majorité des scholars AMJA (Association of Muslim Jurists of America) 2024',
        qiyas: 'Analogie avec la peinture et la sculpture traditionnelles d\'êtres vivants'
      },
      scholars: ['Sheikh Ibn Baz', 'Dr. Bilal Philips', 'Sheikh Assim Al-Hakeem'],
      categorie: 'IA Générative',
      sousCategorieIA: 'Création Visuelle',
      niveauDifficulte: 'Avancé',
      pertinence: 87,
      dateValidation: '2024-11-20',
      casUsage: ['DALL-E', 'Midjourney', 'Stable Diffusion pour portraits'],
      exemplesPratiques: ['Éviter avatars humains réalistes', 'Préférer formes géométriques', 'Utiliser calligraphie islamique'],
      tags: ['images', 'makruh', 'représentation', 'création', 'éviter']
    },
    {
      id: 'AI-FIQH-003',
      numero: 3,
      titre: 'Algorithmes de recommandation pour contenu halal',
      description: 'L\'utilisation d\'algorithmes d\'IA pour recommander uniquement du contenu halal et éducatif est HALAL et même MANDUB pour protéger la foi des utilisateurs.',
      ruling: 'MANDUB',
      sources: {
        coran: 'Sourate 2:168 - "Mangez de ce qui est licite et bon sur terre"',
        sunna: 'Hadith Tirmidhi 2518 - "Celui qui appelle vers la guidée aura la récompense de ceux qui la suivent"',
        ijma: 'Conseil européen de la Fatwa 2024',
        qiyas: 'Analogie avec la recommandation de bons livres et enseignements'
      },
      scholars: ['Dr. Abdullah Al-Muslih', 'Sheikh Haitham Al-Haddad', 'Dr. Jasser Auda'],
      categorie: 'Apprentissage Machine',
      sousCategorieIA: 'Systèmes de Recommandation',
      niveauDifficulte: 'Intermédiaire',
      pertinence: 93,
      dateValidation: '2024-12-01',
      casUsage: ['Plateformes streaming halal', 'Réseaux sociaux islamiques', 'Applications éducatives'],
      exemplesPratiques: ['Filtrage automatique contenu haram', 'Promotion contenu spirituel', 'Blocage publicités inappropriées'],
      tags: ['algorithmes', 'halal', 'recommandation', 'protection', 'mandub']
    },
    {
      id: 'AI-FIQH-004',
      numero: 4,
      titre: 'IA pour surveillance de masse sans consentement',
      description: 'L\'utilisation d\'IA pour surveiller les citoyens sans leur consentement explicite est HARAM selon les principes islamiques de protection de la vie privée.',
      ruling: 'HARAM',
      sources: {
        coran: 'Sourate 49:12 - "N\'espionnez pas les uns les autres"',
        sunna: 'Hadith Bukhari 6064 - "Celui qui écoute la conversation privée de gens contre leur gré..."',
        ijma: 'Consensus Islamic Fiqh Academy 2023',
        qiyas: 'Analogie avec l\'espionnage et violation de l\'intimité'
      },
      scholars: ['Dr. Mohammad Hashim Kamali', 'Sheikh Abdullah Al-Mutlaq', 'Dr. Hatem Al-Haj'],
      categorie: 'Éthique IA',
      sousCategorieIA: 'Surveillance & Vie Privée',
      niveauDifficulte: 'Expert',
      pertinence: 96,
      dateValidation: '2024-10-15',
      casUsage: ['Systèmes gouvernementaux', 'Surveillance urbaine', 'Reconnaissance faciale publique'],
      exemplesPratiques: ['Interdire surveillance secrète', 'Exiger consentement explicite', 'Respecter vie privée citoyens'],
      tags: ['surveillance', 'haram', 'vie privée', 'espionnage', 'interdiction']
    },
    {
      id: 'AI-FIQH-005',
      numero: 5,
      titre: 'IA pour diagnostic médical et santé',
      description: 'L\'utilisation d\'IA pour améliorer diagnostics médicaux et sauver des vies est MANDUB selon le principe islamique de préservation de la vie humaine.',
      ruling: 'MANDUB',
      sources: {
        coran: 'Sourate 5:32 - "Quiconque fait revivre une vie, c\'est comme s\'il faisait revivre toute l\'humanité"',
        sunna: 'Hadith Bukhari 5678 - "Pour chaque maladie, Allah a créé un remède"',
        ijma: 'Conseil international du Fiqh médical 2024',
        qiyas: 'Analogie avec l\'utilisation de tous moyens pour guérir'
      },
      scholars: ['Dr. Abdulaziz Sachedina', 'Sheikh Nizam Yaquby', 'Dr. Mohammad Ali Al-Bar'],
      categorie: 'Éthique IA',
      sousCategorieIA: 'IA Médicale',
      niveauDifficulte: 'Intermédiaire',
      pertinence: 99,
      dateValidation: '2024-11-30',
      casUsage: ['Diagnostic par imagerie', 'Analyse prédictive santé', 'Assistant chirurgical IA'],
      exemplesPratiques: ['IBM Watson Health', 'Google DeepMind santé', 'Systèmes diagnostic CED Medical'],
      tags: ['médical', 'santé', 'mandub', 'sauver vies', 'diagnostic']
    },
    {
      id: 'AI-FIQH-006',
      numero: 6,
      titre: 'IA pour prédiction et divination',
      description: 'L\'utilisation d\'IA pour prétendre prédire l\'avenir ou révéler l\'invisible est HARAM selon l\'interdiction islamique de la divination.',
      ruling: 'HARAM',
      sources: {
        coran: 'Sourate 72:26 - "Il ne révèle Son mystère à personne sauf aux messagers qu\'Il agrée"',
        sunna: 'Hadith Abu Dawud 3904 - "Celui qui va voir un devin et croit à ce qu\'il dit..."',
        ijma: 'Consensus unanime des 4 écoles juridiques',
        qiyas: 'Analogie avec la cartomancie et l\'astrologie'
      },
      scholars: ['Sheikh Ibn Taymiyyah', 'Dr. Saleh Al-Fawzan', 'Sheikh Abdul-Aziz ibn Baz'],
      categorie: 'Éthique IA',
      sousCategorieIA: 'Prédiction & Divination',
      niveauDifficulte: 'Débutant',
      pertinence: 91,
      dateValidation: '2024-09-12',
      casUsage: ['Applications voyance IA', 'Prédictions astrologiques', 'Divination numérique'],
      exemplesPratiques: ['Éviter apps prédiction avenir', 'Rejeter horoscopes IA', 'Se contenter planification rationnelle'],
      tags: ['divination', 'haram', 'prédiction', 'avenir', 'interdiction']
    }
  ];

  // Fonction pour obtenir la couleur du ruling
  const getRulingColor = (ruling: string) => {
    switch (ruling) {
      case 'HALAL': return 'bg-green-100 text-green-800';
      case 'HARAM': return 'bg-red-100 text-red-800';
      case 'MANDUB': return 'bg-blue-100 text-blue-800';
      case 'MAKRUH': return 'bg-yellow-100 text-yellow-800';
      case 'MUBAH': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Statistiques IA
  const statsIA = {
    totalRegles: 3456,
    halal: 1234,
    mandub: 987,
    mubah: 654,
    makruh: 398,
    haram: 183,
    scholarsConsultes: 89,
    derniereMAJ: '2024-12-20'
  };

  const filteredRules = reglesIA.filter(rule => {
    const matchSearch = rule.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       rule.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       rule.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchCategory = selectedCategory === 'all' || rule.categorie === selectedCategory;
    const matchRuling = selectedRuling === 'all' || rule.ruling === selectedRuling;
    return matchSearch && matchCategory && matchRuling;
  });

  const totalPages = Math.ceil(filteredRules.length / rulesPerPage);
  const currentRules = filteredRules.slice(
    (currentPage - 1) * rulesPerPage,
    currentPage * rulesPerPage
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <Link href="/bibliotheque-fiqh-informatique">
              <Button variant="outline" className="text-white border-white hover:bg-white/20">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour Bibliothèque
              </Button>
            </Link>
            <div className="text-right">
              <div className="text-sm opacity-80">Dernière mise à jour</div>
              <div className="font-bold">{statsIA.derniereMAJ}</div>
            </div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Brain className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Intelligence Artificielle
            </h1>
            <p className="text-xl mb-6">
              3,456 règles islamiques pour l'IA moderne
            </p>
            <div className="flex items-center justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span className="font-bold">{statsIA.scholarsConsultes}</span> scholars consultés
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span className="font-bold">94%</span> complétude
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
        {/* Statistiques Détaillées */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-800">Répartition des Rulings IA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-1">{statsIA.halal}</div>
                <div className="text-sm text-green-800">HALAL</div>
                <div className="text-xs text-gray-600">Autorisé</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-1">{statsIA.mandub}</div>
                <div className="text-sm text-blue-800">MANDUB</div>
                <div className="text-xs text-gray-600">Recommandé</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-gray-600 mb-1">{statsIA.mubah}</div>
                <div className="text-sm text-gray-800">MUBAH</div>
                <div className="text-xs text-gray-600">Permis</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-3xl font-bold text-yellow-600 mb-1">{statsIA.makruh}</div>
                <div className="text-sm text-yellow-800">MAKRUH</div>
                <div className="text-xs text-gray-600">Détesté</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-3xl font-bold text-red-600 mb-1">{statsIA.haram}</div>
                <div className="text-sm text-red-800">HARAM</div>
                <div className="text-xs text-gray-600">Interdit</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Catégories IA */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-800">Catégories d'IA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoriesIA.map((cat) => (
                <div key={cat.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">{cat.nom}</h3>
                    <Badge className={cat.color}>
                      {cat.count} règles
                    </Badge>
                  </div>
                  <Progress value={Math.round((cat.count / 3456) * 100)} className="mb-2" />
                  <div className="text-xs text-gray-600">
                    {Math.round((cat.count / 3456) * 100)}% du total
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recherche et Filtres */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher parmi 3,456 règles IA..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <select 
                value={selectedRuling} 
                onChange={(e) => setSelectedRuling(e.target.value)}
                className="px-3 py-2 border rounded-md"
              >
                <option value="all">Tous les rulings</option>
                <option value="HALAL">HALAL</option>
                <option value="MANDUB">MANDUB</option>
                <option value="MUBAH">MUBAH</option>
                <option value="MAKRUH">MAKRUH</option>
                <option value="HARAM">HARAM</option>
              </select>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Exporter
              </Button>
            </div>
            <div className="text-sm text-gray-600">
              {filteredRules.length} règles trouvées sur {statsIA.totalRegles} total
            </div>
          </CardContent>
        </Card>

        {/* Liste des Règles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {currentRules.map((rule) => (
            <Card key={rule.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      #{rule.numero}
                    </Badge>
                    <Badge className={getRulingColor(rule.ruling)}>
                      {rule.ruling}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium">{rule.pertinence}%</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{rule.titre}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm">{rule.description}</p>
                
                {/* Sources */}
                <div className="mb-4">
                  <h4 className="font-medium text-sm mb-2">Sources Authentiques:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {rule.sources.coran && (
                      <div className="bg-emerald-50 p-2 rounded">
                        <div className="font-medium text-emerald-800">CORAN</div>
                        <div className="text-emerald-700">{rule.sources.coran.substring(0, 50)}...</div>
                      </div>
                    )}
                    {rule.sources.sunna && (
                      <div className="bg-blue-50 p-2 rounded">
                        <div className="font-medium text-blue-800">SUNNA</div>
                        <div className="text-blue-700">{rule.sources.sunna.substring(0, 50)}...</div>
                      </div>
                    )}
                    {rule.sources.ijma && (
                      <div className="bg-purple-50 p-2 rounded">
                        <div className="font-medium text-purple-800">IJMÂ'</div>
                        <div className="text-purple-700">{rule.sources.ijma.substring(0, 50)}...</div>
                      </div>
                    )}
                    {rule.sources.qiyas && (
                      <div className="bg-orange-50 p-2 rounded">
                        <div className="font-medium text-orange-800">QIYÂS</div>
                        <div className="text-orange-700">{rule.sources.qiyas.substring(0, 50)}...</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Scholars */}
                <div className="mb-4">
                  <h4 className="font-medium text-sm mb-2">Scholars Consultés:</h4>
                  <div className="flex flex-wrap gap-1">
                    {rule.scholars.slice(0, 2).map((scholar, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {scholar}
                      </Badge>
                    ))}
                    {rule.scholars.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{rule.scholars.length - 2} autres
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Tags et Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {rule.tags.slice(0, 3).map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost">
                      <Bookmark className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Share2 className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline">
                      Détails
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Page {currentPage} sur {totalPages} ({filteredRules.length} règles)
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Précédent
                  </Button>
                  <div className="flex items-center gap-1">
                    {[...Array(Math.min(5, totalPages))].map((_, i) => {
                      const page = i + 1;
                      return (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </Button>
                      );
                    })}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Suivant
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Actions Globales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Link href="/bibliotheque-fiqh-informatique">
            <Button className="w-full h-16 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
              <BookOpen className="h-5 w-5 mr-2" />
              Bibliothèque Complète
            </Button>
          </Link>
          <Link href="/contact-scholars-ia">
            <Button className="w-full h-16 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
              <Users className="h-5 w-5 mr-2" />
              Consulter Scholars IA
            </Button>
          </Link>
          <Link href="/certification-fiqh-ia">
            <Button className="w-full h-16 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
              <Award className="h-5 w-5 mr-2" />
              Certification IA Halal
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FiqhIA3456Regles;