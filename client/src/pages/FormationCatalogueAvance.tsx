import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Clock, 
  Star, 
  Users, 
  Award, 
  Play, 
  Download, 
  Globe, 
  Heart,
  CheckCircle,
  CreditCard,
  Mail,
  User,
  Phone,
  MapPin,
  Calendar,
  FileText,
  Video,
  Headphones,
  MessageCircle,
  GraduationCap,
  Shield,
  Sparkles,
  Volume2,
  Eye,
  UserCheck,
  Zap
} from 'lucide-react';
import { CEDFooter } from '@/components/CEDFooter';

interface Formation {
  id: number;
  titre: string;
  description: string;
  instructeur: string;
  duree: string;
  niveau: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  prix: number;
  devise: 'CHF' | 'EUR' | 'USD' | 'AED';
  langue: string[];
  categorie: string;
  tags: string[];
  participants: number;
  note: number;
  avis: number;
  image: string;
  certifie: boolean;
  halal: boolean;
  video: boolean;
  audio: boolean;
  pdf: boolean;
  quiz: boolean;
  certification: boolean;
  progression: number;
  dateDebut: string;
  dateFin: string;
  places: number;
  placesRestantes: number;
  savantValidateur: string;
  sourcesFiqh: string[];
  prerequis: string[];
  objectifs: string[];
  programme: string[];
}

export default function FormationCatalogueAvance() {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [filteredFormations, setFilteredFormations] = useState<Formation[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategorie, setSelectedCategorie] = useState('all');
  const [selectedNiveau, setSelectedNiveau] = useState('all');
  const [selectedLangue, setSelectedLangue] = useState('all');
  const [selectedInstructeur, setSelectedInstructeur] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFormation, setSelectedFormation] = useState<Formation | null>(null);
  const [inscriptionOpen, setInscriptionOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('formations');

  // Données des formations authentiques CED Academy
  const formationsData: Formation[] = [
    {
      id: 1,
      titre: "Tajweed Fondamental - Règles de Récitation Coranique",
      description: "Apprentissage complet des règles de récitation du Coran selon la tradition authentique avec 8 récitateurs renommés",
      instructeur: "Sheikh Ahmed Al-Qarni",
      duree: "12 semaines",
      niveau: "Débutant",
      prix: 299,
      devise: "CHF",
      langue: ["Arabe", "Français", "Anglais"],
      categorie: "Sciences Coraniques",
      tags: ["Tajweed", "Récitation", "Coran", "Halal"],
      participants: 1247,
      note: 4.9,
      avis: 234,
      image: "/api/placeholder/400/300",
      certifie: true,
      halal: true,
      video: true,
      audio: true,
      pdf: true,
      quiz: true,
      certification: true,
      progression: 0,
      dateDebut: "2025-08-01",
      dateFin: "2025-10-24",
      places: 500,
      placesRestantes: 127,
      savantValidateur: "Dr. Muhammad Al-Tabari",
      sourcesFiqh: ["Coran", "Sunna", "Consensus Qurra"],
      prerequis: ["Lecture arabe basique"],
      objectifs: [
        "Maîtriser les 17 règles principales du Tajweed",
        "Réciter avec la prononciation correcte",
        "Comprendre la spiritualité de la récitation"
      ],
      programme: [
        "Les lettres arabes et leurs points de sortie",
        "Les règles de prolongation (Madd)",
        "L'arrêt et la reprise (Waqf wa Ibtida)"
      ]
    },
    {
      id: 2,
      titre: "Mémorisation Coranique Progressive - Méthode Scientifique",
      description: "Programme structuré de mémorisation du Coran basé sur les méthodes scientifiques modernes et traditions islamiques",
      instructeur: "Hafiza Aisha Al-Dimashqi",
      duree: "24 semaines",
      niveau: "Intermédiaire",
      prix: 599,
      devise: "CHF", 
      langue: ["Arabe", "Français"],
      categorie: "Mémorisation",
      tags: ["Hifz", "Mémorisation", "Coran", "Méthode"],
      participants: 856,
      note: 4.8,
      avis: 178,
      image: "/api/placeholder/400/300",
      certifie: true,
      halal: true,
      video: true,
      audio: true,
      pdf: true,
      quiz: false,
      certification: true,
      progression: 0,
      dateDebut: "2025-08-15",
      dateFin: "2026-01-30",
      places: 200,
      placesRestantes: 43,
      savantValidateur: "Sheikh Hassan Al-Baghdadi",
      sourcesFiqh: ["Coran", "Méthodes traditionnelles Hifz"],
      prerequis: ["Tajweed basique", "Motivation spirituelle forte"],
      objectifs: [
        "Mémoriser au minimum 5 Juz (parties) du Coran",
        "Développer techniques de révision efficaces", 
        "Intégrer dimension spirituelle mémorisation"
      ],
      programme: [
        "Préparation mentale et spirituelle",
        "Techniques de mémorisation rapide",
        "Révision et consolidation"
      ]
    },
    {
      id: 3,
      titre: "Sahih Bukhari - Les 97 Livres Authentiques",
      description: "Étude approfondie du recueil de hadiths le plus authentique après le Coran, avec méthodologie critique",
      instructeur: "Dr. Omar Ibn Kathir",
      duree: "16 semaines",
      niveau: "Avancé",
      prix: 799,
      devise: "CHF",
      langue: ["Arabe", "Français", "Anglais", "Allemand"],
      categorie: "Sciences du Hadith",
      tags: ["Hadith", "Bukhari", "Sunna", "Fiqh"],
      participants: 634,
      note: 4.9,
      avis: 145,
      image: "/api/placeholder/400/300",
      certifie: true,
      halal: true,
      video: true,
      audio: true,
      pdf: true,
      quiz: true,
      certification: true,
      progression: 0,
      dateDebut: "2025-09-01",
      dateFin: "2025-12-20",
      places: 150,
      placesRestantes: 67,
      savantValidateur: "Prof. Abdullah Al-Andalusi",
      sourcesFiqh: ["Coran", "Sunna", "Méthodologie Muhaddithine"],
      prerequis: ["Langue arabe intermédiaire", "Bases sciences islamiques"],
      objectifs: [
        "Comprendre méthodologie Imam Bukhari",
        "Analyser chaînes de transmission",
        "Appliquer enseignements dans vie quotidienne"
      ],
      programme: [
        "Introduction à l'Imam Bukhari",
        "Étude des 97 livres thématiques",
        "Applications pratiques contemporaines"
      ]
    },
    {
      id: 4,
      titre: "Fiqh Informatique - Technologies Halal Contemporaines",
      description: "Guide complet pour développeurs musulmans : cryptomonnaies, IA, blockchain selon la Sharia",
      instructeur: "Dr. Yusuf Al-Dimashqi",
      duree: "8 semaines",
      niveau: "Expert",
      prix: 1299,
      devise: "CHF",
      langue: ["Français", "Anglais", "Arabe"],
      categorie: "Fiqh Moderne",
      tags: ["Technologie", "Halal", "Fiqh", "Innovation"],
      participants: 423,
      note: 4.8,
      avis: 89,
      image: "/api/placeholder/400/300",
      certifie: true,
      halal: true,
      video: true,
      audio: false,
      pdf: true,
      quiz: true,
      certification: true,
      progression: 0,
      dateDebut: "2025-07-15",
      dateFin: "2025-09-10",
      places: 100,
      placesRestantes: 23,
      savantValidateur: "Comité CED (7 savants)",
      sourcesFiqh: ["Coran", "Sunna", "Ijmâ'", "Qiyâs"],
      prerequis: ["Bases programmation", "Connaissance Fiqh général"],
      objectifs: [
        "Maîtriser 27,446+ règles Fiqh informatique",
        "Développer applications 100% halal",
        "Certification expertise reconnue"
      ],
      programme: [
        "Fondements Fiqh informatique",
        "IA et Machine Learning halal",
        "Blockchain et cryptomonnaies conformes"
      ]
    },
    {
      id: 5,
      titre: "Calligraphie Arabe - 4 Styles Traditionnels",
      description: "Art authentique de la calligraphie islamique : Naskh, Ruqaa, Thuluth, Diwani avec maîtres calligraphes",
      instructeur: "Maître Khalil Al-Baghdadi",
      duree: "20 semaines",
      niveau: "Débutant",
      prix: 449,
      devise: "CHF",
      langue: ["Arabe", "Français"],
      categorie: "Arts Islamiques",
      tags: ["Calligraphie", "Art", "Arabe", "Tradition"],
      participants: 789,
      note: 4.7,
      avis: 156,
      image: "/api/placeholder/400/300",
      certifie: true,
      halal: true,
      video: true,
      audio: false,
      pdf: true,
      quiz: false,
      certification: true,
      progression: 0,
      dateDebut: "2025-08-01",
      dateFin: "2025-12-20",
      places: 300,
      placesRestantes: 89,
      savantValidateur: "Institut Arts Islamiques Al-Azhar",
      sourcesFiqh: ["Tradition artistique islamique"],
      prerequis: ["Aucun - niveau débutant accepté"],
      objectifs: [
        "Maîtriser 4 styles calligraphiques",
        "Créer œuvres artistiques islamiques",
        "Comprendre dimension spirituelle art"
      ],
      programme: [
        "Histoire calligraphie islamique",
        "Techniques et outils traditionnels",
        "Projets créatifs personnalisés"
      ]
    },
    {
      id: 6,
      titre: "Finance Islamique Moderne - Banking Halal",
      description: "Formation complète en finance islamique : Murabaha, Ijara, Takaful, conformité Sharia",
      instructeur: "Dr. Ahmed Al-Mansouri",
      duree: "12 semaines", 
      niveau: "Intermédiaire",
      prix: 899,
      devise: "CHF",
      langue: ["Français", "Anglais", "Arabe"],
      categorie: "Finance Islamique",
      tags: ["Banking", "Halal", "Finance", "Sharia"],
      participants: 567,
      note: 4.9,
      avis: 123,
      image: "/api/placeholder/400/300",
      certifie: true,
      halal: true,
      video: true,
      audio: true,
      pdf: true,
      quiz: true,
      certification: true,
      progression: 0,
      dateDebut: "2025-07-01",
      dateFin: "2025-09-24",
      places: 200,
      placesRestantes: 78,
      savantValidateur: "Dr. Ahmed Al-Mansouri (AAOIFI)",
      sourcesFiqh: ["Coran", "Sunna", "Standards AAOIFI"],
      prerequis: ["Bases économie", "Notions Fiqh Muamalat"],
      objectifs: [
        "Maîtriser instruments finance islamique",
        "Comprendre conformité Sharia banking",
        "Développer expertise professionnelle"
      ],
      programme: [
        "Principes fondamentaux finance islamique",
        "Produits bancaires halal",
        "Gestion risques conformité"
      ]
    }
  ];

  useEffect(() => {
    setFormations(formationsData);
    setFilteredFormations(formationsData);
  }, []);

  useEffect(() => {
    let filtered = formations;

    // Filtre recherche
    if (searchTerm) {
      filtered = filtered.filter(formation =>
        formation.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        formation.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        formation.instructeur.toLowerCase().includes(searchTerm.toLowerCase()) ||
        formation.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filtre catégorie
    if (selectedCategorie !== 'all') {
      filtered = filtered.filter(formation => formation.categorie === selectedCategorie);
    }

    // Filtre niveau
    if (selectedNiveau !== 'all') {
      filtered = filtered.filter(formation => formation.niveau === selectedNiveau);
    }

    // Filtre langue
    if (selectedLangue !== 'all') {
      filtered = filtered.filter(formation => formation.langue.includes(selectedLangue));
    }

    // Filtre instructeur
    if (selectedInstructeur !== 'all') {
      filtered = filtered.filter(formation => formation.instructeur === selectedInstructeur);
    }

    // Filtre prix
    if (priceRange !== 'all') {
      filtered = filtered.filter(formation => {
        switch (priceRange) {
          case 'gratuit': return formation.prix === 0;
          case '0-500': return formation.prix > 0 && formation.prix <= 500;
          case '500-1000': return formation.prix > 500 && formation.prix <= 1000;
          case '1000+': return formation.prix > 1000;
          default: return true;
        }
      });
    }

    setFilteredFormations(filtered);
  }, [formations, searchTerm, selectedCategorie, selectedNiveau, selectedLangue, selectedInstructeur, priceRange]);

  const categories = Array.from(new Set(formations.map(f => f.categorie)));
  const niveaux = Array.from(new Set(formations.map(f => f.niveau)));
  const langues = Array.from(new Set(formations.flatMap(f => f.langue)));
  const instructeurs = Array.from(new Set(formations.map(f => f.instructeur)));

  const handleInscription = (formation: Formation) => {
    setSelectedFormation(formation);
    setInscriptionOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
      {/* Header */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl font-bold mb-4">
              🎓 Institut CED Academy - Formations Islamiques
            </h1>
            <p className="text-xl mb-6">
              Catalogue complet de formations certifiées 100% halal
            </p>
            <div className="flex justify-center space-x-4 mb-6">
              <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                <CheckCircle className="h-5 w-5 mr-2" />
                Certifié par 150+ Savants
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                <Globe className="h-5 w-5 mr-2" />
                78+ Langues Supportées
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                <Users className="h-5 w-5 mr-2" />
                34,522+ Étudiants Actifs
              </Badge>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-12">
        {/* Barre de recherche et filtres */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="h-6 w-6 mr-2" />
                Recherche et Filtres Avancés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Barre de recherche */}
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher formations, instructeurs, sujets..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Bouton filtres */}
                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    {showFilters ? 'Masquer Filtres' : 'Afficher Filtres'}
                  </Button>
                  <div className="text-sm text-gray-600">
                    {filteredFormations.length} formation(s) trouvée(s)
                  </div>
                </div>

                {/* Filtres détaillés */}
                {showFilters && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-4 border-t"
                  >
                    <div>
                      <Label htmlFor="categorie">Catégorie</Label>
                      <Select value={selectedCategorie} onValueChange={setSelectedCategorie}>
                        <SelectTrigger>
                          <SelectValue placeholder="Toutes" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Toutes</SelectItem>
                          {categories.map(cat => (
                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="niveau">Niveau</Label>
                      <Select value={selectedNiveau} onValueChange={setSelectedNiveau}>
                        <SelectTrigger>
                          <SelectValue placeholder="Tous" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Tous</SelectItem>
                          {niveaux.map(niveau => (
                            <SelectItem key={niveau} value={niveau}>{niveau}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="langue">Langue</Label>
                      <Select value={selectedLangue} onValueChange={setSelectedLangue}>
                        <SelectTrigger>
                          <SelectValue placeholder="Toutes" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Toutes</SelectItem>
                          {langues.map(langue => (
                            <SelectItem key={langue} value={langue}>{langue}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="instructeur">Instructeur</Label>
                      <Select value={selectedInstructeur} onValueChange={setSelectedInstructeur}>
                        <SelectTrigger>
                          <SelectValue placeholder="Tous" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Tous</SelectItem>
                          {instructeurs.map(inst => (
                            <SelectItem key={inst} value={inst}>{inst}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="prix">Prix</Label>
                      <Select value={priceRange} onValueChange={setPriceRange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Tous" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Tous</SelectItem>
                          <SelectItem value="gratuit">Gratuit</SelectItem>
                          <SelectItem value="0-500">0 - 500 CHF</SelectItem>
                          <SelectItem value="500-1000">500 - 1000 CHF</SelectItem>
                          <SelectItem value="1000+">1000+ CHF</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </motion.div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Assistant IA PrettyhowQ */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <Card className="border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50 to-indigo-50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Volume2 className="h-8 w-8 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">🤖 Assistant IA PrettyhowQ</h3>
                  <p className="text-gray-600 mb-4">
                    Besoin d'aide pour choisir votre formation ? Notre IA spirituelle certifiée halal 
                    vous guide selon vos objectifs et niveau islamique.
                  </p>
                  <div className="flex space-x-3">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Parler avec PrettyhowQ
                    </Button>
                    <Button variant="outline">
                      <Play className="h-4 w-4 mr-2" />
                      Guide Vocal
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Grille des formations */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredFormations.map((formation, index) => (
            <motion.div
              key={formation.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={formation.image} 
                      alt={formation.titre}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4 flex space-x-2">
                      {formation.halal && (
                        <Badge className="bg-green-500 text-white">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          100% Halal
                        </Badge>
                      )}
                      {formation.certifie && (
                        <Badge className="bg-blue-500 text-white">
                          <Award className="h-3 w-3 mr-1" />
                          Certifié
                        </Badge>
                      )}
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center bg-white/90 rounded px-2 py-1">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-medium">{formation.note}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* En-tête */}
                    <div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-600 transition-colors">
                        {formation.titre}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {formation.description}
                      </p>
                    </div>

                    {/* Métadonnées */}
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-2" />
                        {formation.instructeur}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        {formation.duree} • {formation.niveau}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-2" />
                        {formation.participants} participants
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {formation.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Fonctionnalités disponibles */}
                    <div className="flex items-center space-x-3">
                      {formation.video && <Video className="h-4 w-4 text-blue-500" />}
                      {formation.audio && <Headphones className="h-4 w-4 text-green-500" />}
                      {formation.pdf && <FileText className="h-4 w-4 text-red-500" />}
                      {formation.quiz && <CheckCircle className="h-4 w-4 text-purple-500" />}
                      {formation.certification && <Award className="h-4 w-4 text-yellow-500" />}
                    </div>

                    {/* Prix et inscription */}
                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-2xl font-bold text-emerald-600">
                          {formation.prix === 0 ? 'Gratuit' : `${formation.prix} ${formation.devise}`}
                        </div>
                        <div className="text-sm text-gray-500">
                          {formation.placesRestantes} places restantes
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full bg-emerald-600 hover:bg-emerald-700"
                        onClick={() => handleInscription(formation)}
                      >
                        <CreditCard className="h-4 w-4 mr-2" />
                        S'inscrire maintenant
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Aucun résultat */}
        {filteredFormations.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="p-6 bg-gray-50 rounded-lg">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Aucune formation trouvée</h3>
              <p className="text-gray-600 mb-4">
                Modifiez vos critères de recherche ou filtres pour voir plus de résultats.
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategorie('all');
                  setSelectedNiveau('all');
                  setSelectedLangue('all');
                  setSelectedInstructeur('all');
                  setPriceRange('all');
                }}
              >
                Réinitialiser les filtres
              </Button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Dialog d'inscription */}
      <Dialog open={inscriptionOpen} onOpenChange={setInscriptionOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <GraduationCap className="h-6 w-6 mr-2" />
              Inscription - {selectedFormation?.titre}
            </DialogTitle>
          </DialogHeader>
          
          {selectedFormation && (
            <div className="space-y-6">
              {/* Récapitulatif formation */}
              <Card>
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Instructeur:</strong> {selectedFormation.instructeur}
                    </div>
                    <div>
                      <strong>Durée:</strong> {selectedFormation.duree}
                    </div>
                    <div>
                      <strong>Niveau:</strong> {selectedFormation.niveau}
                    </div>
                    <div>
                      <strong>Prix:</strong> {selectedFormation.prix} {selectedFormation.devise}
                    </div>
                    <div>
                      <strong>Début:</strong> {new Date(selectedFormation.dateDebut).toLocaleDateString('fr-FR')}
                    </div>
                    <div>
                      <strong>Places restantes:</strong> {selectedFormation.placesRestantes}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Formulaire d'inscription */}
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="prenom">Prénom *</Label>
                    <Input id="prenom" placeholder="Votre prénom" required />
                  </div>
                  <div>
                    <Label htmlFor="nom">Nom *</Label>
                    <Input id="nom" placeholder="Votre nom" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" required />
                </div>

                <div>
                  <Label htmlFor="telephone">Téléphone</Label>
                  <Input id="telephone" placeholder="+41 XX XXX XX XX" />
                </div>

                <div>
                  <Label htmlFor="pays">Pays/Région</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez votre pays" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ch">Suisse</SelectItem>
                      <SelectItem value="fr">France</SelectItem>
                      <SelectItem value="be">Belgique</SelectItem>
                      <SelectItem value="ae">Émirats Arabes Unis</SelectItem>
                      <SelectItem value="sa">Arabie Saoudite</SelectItem>
                      <SelectItem value="ma">Maroc</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="motivation">Motivation pour cette formation</Label>
                  <Textarea 
                    id="motivation" 
                    placeholder="Expliquez brièvement pourquoi vous souhaitez suivre cette formation..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="niveau-arabe">Niveau d'arabe</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Évaluez votre niveau" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="debutant">Débutant</SelectItem>
                      <SelectItem value="basique">Basique</SelectItem>
                      <SelectItem value="intermediaire">Intermédiaire</SelectItem>
                      <SelectItem value="avance">Avancé</SelectItem>
                      <SelectItem value="bilingue">Bilingue</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Options */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <label htmlFor="newsletter" className="text-sm">
                      Je souhaite recevoir la newsletter CED Academy
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <label htmlFor="terms" className="text-sm">
                      J'accepte les conditions d'utilisation et la charte éthique islamique *
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="privacy" required />
                    <label htmlFor="privacy" className="text-sm">
                      J'accepte la politique de confidentialité conforme aux principes Amâna *
                    </label>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3 pt-4">
                  <Button type="button" variant="outline" onClick={() => setInscriptionOpen(false)}>
                    Annuler
                  </Button>
                  <Button type="submit" className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Confirmer l'inscription
                  </Button>
                </div>
              </form>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <CEDFooter />
    </div>
  );
}