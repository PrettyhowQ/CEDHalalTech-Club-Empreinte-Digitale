import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Play, 
  BookOpen, 
  Banknote, 
  Shield, 
  Smartphone, 
  Globe, 
  Code, 
  Heart,
  Award,
  CheckCircle
} from 'lucide-react';

export default function Modules52CED() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const modules = [
    // Banking & Finance (1-10)
    { id: 1, name: "CED Bank Mobile", category: "banking", icon: <Banknote className="h-5 w-5" />, status: "operational", description: "Banking islamique mobile 100% halal" },
    { id: 2, name: "Al-Aman CED Takaful", category: "banking", icon: <Shield className="h-5 w-5" />, status: "operational", description: "Assurance islamique conforme Sharia" },
    { id: 3, name: "Calculateur Zakat", category: "banking", icon: <Award className="h-5 w-5" />, status: "operational", description: "Calcul automatique Zakat multidevises" },
    { id: 4, name: "Banking Vocal Arabe", category: "banking", icon: <Smartphone className="h-5 w-5" />, status: "operational", description: "Interface vocale banking en arabe" },
    { id: 5, name: "Crypto Sharia Engine", category: "banking", icon: <Code className="h-5 w-5" />, status: "development", description: "Cryptomonnaies conformes Sharia" },
    { id: 6, name: "DeFi Islamique", category: "banking", icon: <Globe className="h-5 w-5" />, status: "development", description: "Finance décentralisée halal" },
    { id: 7, name: "Trade Finance Blockchain", category: "banking", icon: <Code className="h-5 w-5" />, status: "development", description: "Commerce international blockchain" },
    { id: 8, name: "Wealth Management Halal", category: "banking", icon: <Award className="h-5 w-5" />, status: "operational", description: "Gestion patrimoine islamique" },
    { id: 9, name: "Investment Sharia Advisor", category: "banking", icon: <BookOpen className="h-5 w-5" />, status: "operational", description: "Conseil investissement conforme" },
    { id: 10, name: "Sukuk Digital Platform", category: "banking", icon: <Shield className="h-5 w-5" />, status: "development", description: "Plateforme Sukuk numérique" },

    // Education & Formation (11-20)
    { id: 11, name: "Institut CED Academy", category: "education", icon: <BookOpen className="h-5 w-5" />, status: "operational", description: "Formations islamiques certifiées" },
    { id: 12, name: "Fiqh Informatique Complet", category: "education", icon: <Code className="h-5 w-5" />, status: "operational", description: "27,446+ règles Fiqh tech" },
    { id: 13, name: "Manuel Fiqh Tech", category: "education", icon: <BookOpen className="h-5 w-5" />, status: "operational", description: "Guide complet 50+ pages" },
    { id: 14, name: "Arabe Coranique Digital", category: "education", icon: <Globe className="h-5 w-5" />, status: "operational", description: "Apprentissage arabe interactif" },
    { id: 15, name: "Calligraphie Islamique", category: "education", icon: <Heart className="h-5 w-5" />, status: "operational", description: "4 styles traditionnels" },
    { id: 16, name: "Traducteur Multilingue", category: "education", icon: <Globe className="h-5 w-5" />, status: "operational", description: "78+ langues supportées" },
    { id: 17, name: "Parcours Gamifié FinTech", category: "education", icon: <Play className="h-5 w-5" />, status: "operational", description: "Apprentissage gamifié" },
    { id: 18, name: "Certificats HalalTech™", category: "education", icon: <Award className="h-5 w-5" />, status: "operational", description: "Certification professionnelle" },
    { id: 19, name: "Formation Scholars", category: "education", icon: <BookOpen className="h-5 w-5" />, status: "operational", description: "Formation par savants" },
    { id: 20, name: "Bibliothèque Hadith", category: "education", icon: <BookOpen className="h-5 w-5" />, status: "operational", description: "Collection authentique" },

    // Technology & AI (21-30)
    { id: 21, name: "Super IARP Pro", category: "technology", icon: <Code className="h-5 w-5" />, status: "operational", description: "IA éthique GPT-4o halal" },
    { id: 22, name: "Assistant Vocal Aisha", category: "technology", icon: <Smartphone className="h-5 w-5" />, status: "operational", description: "Assistant vocal conforme" },
    { id: 23, name: "Cloud Halal 100%", category: "technology", icon: <Globe className="h-5 w-5" />, status: "operational", description: "Infrastructure cloud islamique" },
    { id: 24, name: "HalalSecurity Suite", category: "technology", icon: <Shield className="h-5 w-5" />, status: "operational", description: "Cybersécurité islamique" },
    { id: 25, name: "Blockchain Halal Network", category: "technology", icon: <Code className="h-5 w-5" />, status: "development", description: "Réseau blockchain conforme" },
    { id: 26, name: "Reconnaissance Vocale", category: "technology", icon: <Smartphone className="h-5 w-5" />, status: "operational", description: "Détection spirituelle avancée" },
    { id: 27, name: "Vision Artificielle Halal", category: "technology", icon: <Code className="h-5 w-5" />, status: "development", description: "IA vision respectueuse" },
    { id: 28, name: "Quantum Computing Halal", category: "technology", icon: <Code className="h-5 w-5" />, status: "research", description: "Informatique quantique" },
    { id: 29, name: "Neural Islamic Banking", category: "technology", icon: <Banknote className="h-5 w-5" />, status: "research", description: "Banking neuronal" },
    { id: 30, name: "Metaverse Hajj", category: "technology", icon: <Globe className="h-5 w-5" />, status: "research", description: "Pèlerinage virtuel immersif" },

    // Community & Social (31-40)
    { id: 31, name: "TechForAll Association", category: "social", icon: <Heart className="h-5 w-5" />, status: "operational", description: "Économie solidaire tech" },
    { id: 32, name: "Gestion Communautaire", category: "social", icon: <Heart className="h-5 w-5" />, status: "operational", description: "12,847 membres actifs" },
    { id: 33, name: "Garages Halal Network", category: "social", icon: <Shield className="h-5 w-5" />, status: "operational", description: "Réseau garages certifiés" },
    { id: 34, name: "Construction Écologique", category: "social", icon: <Heart className="h-5 w-5" />, status: "operational", description: "Logement social durable" },
    { id: 35, name: "Donation Tracker", category: "social", icon: <Award className="h-5 w-5" />, status: "operational", description: "Suivi donations transparent" },
    { id: 36, name: "Système Familial", category: "social", icon: <Heart className="h-5 w-5" />, status: "operational", description: "Gestion famille étendue" },
    { id: 37, name: "Mentorship Network", category: "social", icon: <BookOpen className="h-5 w-5" />, status: "operational", description: "Réseau mentorat scholars" },
    { id: 38, name: "Events Platform", category: "social", icon: <Globe className="h-5 w-5" />, status: "operational", description: "Événements virtuels" },
    { id: 39, name: "Volunteer Management", category: "social", icon: <Heart className="h-5 w-5" />, status: "operational", description: "Gestion bénévoles" },
    { id: 40, name: "Impact Measurement", category: "social", icon: <Award className="h-5 w-5" />, status: "operational", description: "Mesure impact social" },

    // Spiritual & Religious (41-52)
    { id: 41, name: "Lecteur Coran Complet", category: "spiritual", icon: <BookOpen className="h-5 w-5" />, status: "operational", description: "114 sourates, 8 récitateurs" },
    { id: 42, name: "Mode Prière Intelligent", category: "spiritual", icon: <Heart className="h-5 w-5" />, status: "operational", description: "Suspension automatique" },
    { id: 43, name: "Qibla Compass GPS", category: "spiritual", icon: <Globe className="h-5 w-5" />, status: "operational", description: "Direction Mecque précise" },
    { id: 44, name: "Calendrier Islamique", category: "spiritual", icon: <Award className="h-5 w-5" />, status: "operational", description: "Hijri synchronisé" },
    { id: 45, name: "Dhikr & Invocations", category: "spiritual", icon: <Heart className="h-5 w-5" />, status: "operational", description: "Collection authentique" },
    { id: 46, name: "Suivi Spirituel", category: "spiritual", icon: <BookOpen className="h-5 w-5" />, status: "operational", description: "Tracker spiritualité" },
    { id: 47, name: "Motivations Spirituelles", category: "spiritual", icon: <Heart className="h-5 w-5" />, status: "operational", description: "Micro-interactions" },
    { id: 48, name: "Gestion Temps Béni", category: "spiritual", icon: <Award className="h-5 w-5" />, status: "operational", description: "Planification entre prières" },
    { id: 49, name: "Du'a Automatique", category: "spiritual", icon: <Heart className="h-5 w-5" />, status: "operational", description: "Du'a à chaque transaction" },
    { id: 50, name: "Hommage Scholars", category: "spiritual", icon: <BookOpen className="h-5 w-5" />, status: "operational", description: "Reconnaissance savants" },
    { id: 51, name: "Sagesse CED HalalTech™", category: "spiritual", icon: <Award className="h-5 w-5" />, status: "operational", description: "Enseignements spirituels" },
    { id: 52, name: "Amour Fi-Allah", category: "spiritual", icon: <Heart className="h-5 w-5" />, status: "operational", description: "Expression amour spirituel" }
  ];

  const categories = [
    { value: 'all', label: 'Tous les modules' },
    { value: 'banking', label: 'Banking & Finance' },
    { value: 'education', label: 'Éducation & Formation' },
    { value: 'technology', label: 'Technologie & IA' },
    { value: 'social', label: 'Communauté & Social' },
    { value: 'spiritual', label: 'Spirituel & Religieux' }
  ];

  const filteredModules = modules.filter(module => {
    const matchesSearch = module.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         module.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || module.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'bg-green-500';
      case 'development': return 'bg-yellow-500';
      case 'research': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational': return 'Opérationnel';
      case 'development': return 'Développement';
      case 'research': return 'Recherche';
      default: return 'Inconnu';
    }
  };

  const operationalCount = modules.filter(m => m.status === 'operational').length;
  const developmentCount = modules.filter(m => m.status === 'development').length;
  const researchCount = modules.filter(m => m.status === 'research').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 p-4">
      <div className="max-w-7xl mx-auto">
        <Card className="mb-6">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-cyan-800 flex items-center justify-center gap-3">
              <Award className="h-8 w-8" />
              🚀 Les 52 Modules CED HalalTech™
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Écosystème technologique islamique complet - Développement révolutionnaire
            </p>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-green-600">{operationalCount}</div>
              <p className="text-sm text-gray-600">Modules Opérationnels</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-yellow-600">{developmentCount}</div>
              <p className="text-sm text-gray-600">En Développement</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-blue-600">{researchCount}</div>
              <p className="text-sm text-gray-600">En Recherche</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-purple-600">100%</div>
              <p className="text-sm text-gray-600">Conformité Sharia</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher un module..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="md:w-64">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredModules.map((module) => (
            <Card key={module.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {module.icon}
                    <span className="font-medium text-sm">#{module.id}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(module.status)}`}></div>
                    <span className="text-xs text-gray-500">{getStatusText(module.status)}</span>
                  </div>
                </div>
                <CardTitle className="text-base leading-tight">{module.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-3">{module.description}</p>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1" 
                    disabled={module.status !== 'operational'}
                  >
                    {module.status === 'operational' ? (
                      <>
                        <Play className="h-3 w-3 mr-1" />
                        Tester
                      </>
                    ) : (
                      'Bientôt'
                    )}
                  </Button>
                  {module.status === 'operational' && (
                    <Badge variant="secondary" className="px-2">
                      <CheckCircle className="h-3 w-3" />
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredModules.length === 0 && (
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-gray-500">Aucun module trouvé pour cette recherche.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}