import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  BookOpen, 
  Star, 
  CheckCircle, 
  Shield, 
  Heart, 
  Sparkles,
  Award,
  Building,
  Globe,
  Users,
  Code,
  Database,
  Lock,
  MessageCircle,
  ThumbsUp,
  UserPlus,
  Lightbulb,
  FileText,
  Send,
  Vote,
  TrendingUp,
  Eye,
  Calendar,
  Flag
} from 'lucide-react';

interface CommunityGuideline {
  id: string;
  title: string;
  titleAr: string;
  titleEn: string;
  titleDe: string;
  category: 'development' | 'ethics' | 'community' | 'innovation';
  description: string;
  descriptionAr: string;
  descriptionEn: string;
  descriptionDe: string;
  author: string;
  votes: number;
  status: 'proposed' | 'under_review' | 'approved' | 'implemented';
  priority: 'low' | 'medium' | 'high' | 'critical';
  fiqhCompliance: 'wajib' | 'mandub' | 'mubah' | 'makruh' | 'haram';
  islamicSources: string[];
  createdAt: string;
  lastUpdated: string;
  comments: number;
  implementations: number;
  tags: string[];
}

interface CommunityContribution {
  id: string;
  type: 'guideline' | 'improvement' | 'question' | 'discussion';
  title: string;
  author: string;
  date: string;
  votes: number;
  replies: number;
  status: string;
  priority: string;
}

const communityGuidelines: CommunityGuideline[] = [
  {
    id: 'cg-001',
    title: 'Développement par la Communauté (Shura)',
    titleAr: 'التطوير من خلال المجتمع (الشورى)',
    titleEn: 'Community-Driven Development (Shura)',
    titleDe: 'Gemeinschaftsgetriebene Entwicklung (Shura)',
    category: 'development',
    description: 'Impliquer la communauté musulmane mondiale dans les décisions de développement technologique selon le principe de Shura (consultation).',
    descriptionAr: 'إشراك المجتمع المسلم العالمي في قرارات التطوير التكنولوجي وفقًا لمبدأ الشورى (الاستشارة).',
    descriptionEn: 'Involve the global Muslim community in technological development decisions according to the principle of Shura (consultation).',
    descriptionDe: 'Die globale muslimische Gemeinschaft in technologische Entwicklungsentscheidungen nach dem Prinzip der Shura (Beratung) einbeziehen.',
    author: 'Dr. Ahmed Al-Fiqhi',
    votes: 847,
    status: 'approved',
    priority: 'high',
    fiqhCompliance: 'mandub',
    islamicSources: ['Coran 42:38', 'Hadith Shura', 'Consensus Scholars'],
    createdAt: '2024-12-20',
    lastUpdated: '2024-12-29',
    comments: 156,
    implementations: 23,
    tags: ['shura', 'community', 'consultation', 'islamic-governance']
  },
  {
    id: 'cg-002',
    title: 'Code Source Transparent (Amanah)',
    titleAr: 'كود مصدر شفاف (أمانة)',
    titleEn: 'Transparent Source Code (Amanah)',
    titleDe: 'Transparenter Quellcode (Amanah)',
    category: 'ethics',
    description: 'Obligation de transparence totale du code source comme dépôt sacré (Amanah) confié par la communauté.',
    descriptionAr: 'واجب الشفافية الكاملة للكود المصدري كوديعة مقدسة (أمانة) مأتمنة من المجتمع.',
    descriptionEn: 'Obligation of complete transparency of source code as a sacred trust (Amanah) entrusted by the community.',
    descriptionDe: 'Verpflichtung zur vollständigen Transparenz des Quellcodes als heiliges Vertrauen (Amanah), das von der Gemeinschaft anvertraut wurde.',
    author: 'Imam Hassan Al-Banna Tech',
    votes: 1023,
    status: 'implemented',
    priority: 'critical',
    fiqhCompliance: 'wajib',
    islamicSources: ['Coran 33:72', 'Hadith Amanah', 'Ijma Transparency'],
    createdAt: '2024-12-18',
    lastUpdated: '2024-12-30',
    comments: 289,
    implementations: 45,
    tags: ['transparency', 'amanah', 'trust', 'open-source']
  },
  {
    id: 'cg-003',
    title: 'IA Bénéfique pour l\'Oummah (Maslaha)',
    titleAr: 'الذكاء الاصطناعي المفيد للأمة (مصلحة)',
    titleEn: 'Beneficial AI for the Ummah (Maslaha)',
    titleDe: 'Nützliche KI für die Ummah (Maslaha)',
    category: 'innovation',
    description: 'Développer des IA qui servent l\'intérêt général de la communauté musulmane selon le principe de Maslaha.',
    descriptionAr: 'تطوير الذكاء الاصطناعي الذي يخدم المصلحة العامة للمجتمع المسلم وفقًا لمبدأ المصلحة.',
    descriptionEn: 'Develop AI that serves the general interest of the Muslim community according to the principle of Maslaha.',
    descriptionDe: 'KI entwickeln, die dem allgemeinen Interesse der muslimischen Gemeinschaft nach dem Prinzip der Maslaha dient.',
    author: 'Dr. Fatima Al-Zahra AI',
    votes: 692,
    status: 'under_review',
    priority: 'high',
    fiqhCompliance: 'mandub',
    islamicSources: ['Maslaha Principle', 'Qiyas Modern Tech', 'Scholar Consensus'],
    createdAt: '2024-12-22',
    lastUpdated: '2024-12-30',
    comments: 134,
    implementations: 12,
    tags: ['ai', 'maslaha', 'beneficial', 'ummah']
  },
  {
    id: 'cg-004',
    title: 'Protection des Données Sensibles',
    titleAr: 'حماية البيانات الحساسة',
    titleEn: 'Sensitive Data Protection',
    titleDe: 'Schutz sensibler Daten',
    category: 'ethics',
    description: 'Chiffrement obligatoire et protection renforcée des données personnelles selon les principes islamiques de confidentialité.',
    descriptionAr: 'التشفير الإجباري والحماية المعززة للبيانات الشخصية وفقًا للمبادئ الإسلامية للخصوصية.',
    descriptionEn: 'Mandatory encryption and enhanced protection of personal data according to Islamic principles of confidentiality.',
    descriptionDe: 'Obligatorische Verschlüsselung und verstärkter Schutz persönlicher Daten nach islamischen Prinzipien der Vertraulichkeit.',
    author: 'Cybersec Ummah Team',
    votes: 934,
    status: 'approved',
    priority: 'critical',
    fiqhCompliance: 'wajib',
    islamicSources: ['Privacy Hadith', 'Haram Espionage', 'Data Amanah'],
    createdAt: '2024-12-19',
    lastUpdated: '2024-12-29',
    comments: 203,
    implementations: 38,
    tags: ['security', 'privacy', 'encryption', 'data-protection']
  },
  {
    id: 'cg-005',
    title: 'Interfaces Respectueuses (Haya)',
    titleAr: 'واجهات محترمة (حياء)',
    titleEn: 'Respectful Interfaces (Haya)',
    titleDe: 'Respektvolle Benutzeroberflächen (Haya)',
    category: 'development',
    description: 'Conception d\'interfaces respectant la pudeur islamique et les valeurs familiales traditionnelles.',
    descriptionAr: 'تصميم واجهات تحترم الحياء الإسلامي والقيم العائلية التقليدية.',
    descriptionEn: 'Design interfaces respecting Islamic modesty and traditional family values.',
    descriptionDe: 'Gestaltung von Benutzeroberflächen unter Beachtung islamischer Bescheidenheit und traditioneller Familienwerte.',
    author: 'UI/UX Halal Design',
    votes: 567,
    status: 'proposed',
    priority: 'medium',
    fiqhCompliance: 'mandub',
    islamicSources: ['Haya Principle', 'Modesty Guidelines', 'Family Values'],
    createdAt: '2024-12-25',
    lastUpdated: '2024-12-30',
    comments: 89,
    implementations: 7,
    tags: ['ui-design', 'haya', 'modesty', 'family-friendly']
  }
];

const recentContributions: CommunityContribution[] = [
  {
    id: 'cc-001',
    type: 'guideline',
    title: 'Blockchain Halal pour la Finance Islamique',
    author: 'Omar Al-Blockchain',
    date: '2024-12-30',
    votes: 234,
    replies: 45,
    status: 'En cours de révision',
    priority: 'Élevée'
  },
  {
    id: 'cc-002',
    type: 'improvement',
    title: 'Amélioration des algorithmes de prière',
    author: 'Amina Prayer Tech',
    date: '2024-12-29',
    votes: 189,
    replies: 32,
    status: 'Approuvé',
    priority: 'Critique'
  },
  {
    id: 'cc-003',
    type: 'question',
    title: 'Conformité Sharia pour l\'IoT domestique?',
    author: 'Hassan IoT Expert',
    date: '2024-12-28',
    votes: 156,
    replies: 67,
    status: 'Discussion ouverte',
    priority: 'Moyenne'
  }
];

const languages = [
  { code: 'fr-ar', name: 'Français / العربية', flag: '🇫🇷🇸🇦' },
  { code: 'en-ar', name: 'English / العربية', flag: '🇺🇸🇸🇦' },
  { code: 'de-ar', name: 'Deutsch / العربية', flag: '🇩🇪🇸🇦' },
  { code: 'es-ar', name: 'Español / العربية', flag: '🇪🇸🇸🇦' },
  { code: 'it-ar', name: 'Italiano / العربية', flag: '🇮🇹🇸🇦' },
  { code: 'tr-ar', name: 'Türkçe / العربية', flag: '🇹🇷🇸🇦' },
  { code: 'ur-ar', name: 'اردو / العربية', flag: '🇵🇰🇸🇦' },
  { code: 'id-ar', name: 'Indonesia / العربية', flag: '🇮🇩🇸🇦' }
];

export function CommunityFiqhGuidelines() {
  const [selectedLanguage, setSelectedLanguage] = useState('fr-ar');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [newGuideline, setNewGuideline] = useState({
    title: '',
    description: '',
    category: 'development',
    priority: 'medium'
  });

  const getLanguageContent = (guideline: CommunityGuideline, field: 'title' | 'description') => {
    const langCode = selectedLanguage.split('-')[0];
    switch (langCode) {
      case 'en': return field === 'title' ? guideline.titleEn : guideline.descriptionEn;
      case 'de': return field === 'title' ? guideline.titleDe : guideline.descriptionDe;
      case 'ar': return field === 'title' ? guideline.titleAr : guideline.descriptionAr;
      default: return field === 'title' ? guideline.title : guideline.description;
    }
  };

  const getArabicContent = (guideline: CommunityGuideline, field: 'title' | 'description') => {
    return field === 'title' ? guideline.titleAr : guideline.descriptionAr;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'proposed': return 'bg-yellow-500 text-white';
      case 'under_review': return 'bg-blue-500 text-white';
      case 'approved': return 'bg-green-500 text-white';
      case 'implemented': return 'bg-purple-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low': return 'bg-gray-400 text-white';
      case 'medium': return 'bg-blue-400 text-white';
      case 'high': return 'bg-orange-500 text-white';
      case 'critical': return 'bg-red-600 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getFiqhColor = (ruling: string) => {
    switch (ruling) {
      case 'wajib': return 'bg-red-600 text-white';
      case 'mandub': return 'bg-green-600 text-white';
      case 'mubah': return 'bg-blue-500 text-white';
      case 'makruh': return 'bg-yellow-600 text-black';
      case 'haram': return 'bg-red-800 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'development': return <Code className="h-5 w-5" />;
      case 'ethics': return <Shield className="h-5 w-5" />;
      case 'community': return <Users className="h-5 w-5" />;
      case 'innovation': return <Lightbulb className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  const filteredGuidelines = communityGuidelines.filter(guideline => {
    const categoryMatch = selectedCategory === 'all' || guideline.category === selectedCategory;
    const statusMatch = selectedStatus === 'all' || guideline.status === selectedStatus;
    const searchMatch = searchQuery === '' || 
      guideline.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guideline.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guideline.titleAr.includes(searchQuery) ||
      guideline.titleEn.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && statusMatch && searchMatch;
  });

  const currentLang = languages.find(lang => lang.code === selectedLanguage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900 dark:via-emerald-900 dark:to-teal-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* En-tête avec sélecteur de langue */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Building className="h-12 w-12 text-green-600" />
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Community Fiqh Guidelines
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-arabic text-right">
                  الفقه التكنولوجي المجتمعي - إرشادات التطوير الإسلامي
                </p>
              </div>
            </div>

            {/* Sélecteur de langue */}
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-green-600" />
              <select 
                value={selectedLanguage} 
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-4 py-2 border border-green-300 rounded-lg bg-white dark:bg-gray-800 text-green-800 dark:text-green-200 font-semibold"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Statistiques communautaires */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">12,847</div>
                <div className="text-sm opacity-90">Contributeurs Actifs</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0">
              <CardContent className="p-4 text-center">
                <FileText className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">2,456</div>
                <div className="text-sm opacity-90">Guidelines Créées</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-purple-500 to-violet-500 text-white border-0">
              <CardContent className="p-4 text-center">
                <CheckCircle className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">1,234</div>
                <div className="text-sm opacity-90">Implémentées</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0">
              <CardContent className="p-4 text-center">
                <Globe className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">{currentLang?.name}</div>
                <div className="text-sm opacity-90">Langues Actives</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Onglets principaux */}
        <Tabs defaultValue="guidelines" className="w-full">
          <TabsList className="grid w-full grid-cols-4 h-14 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900">
            <TabsTrigger value="guidelines" className="text-base font-semibold">
              📋 Guidelines
            </TabsTrigger>
            <TabsTrigger value="contribute" className="text-base font-semibold">
              ✍️ Contribuer
            </TabsTrigger>
            <TabsTrigger value="discussions" className="text-base font-semibold">
              💬 Discussions
            </TabsTrigger>
            <TabsTrigger value="community" className="text-base font-semibold">
              👥 Communauté
            </TabsTrigger>
          </TabsList>

          {/* Onglet Guidelines */}
          <TabsContent value="guidelines" className="space-y-6">
            {/* Filtres et recherche */}
            <div className="flex gap-4 flex-wrap mb-6">
              <Input
                placeholder="Rechercher guidelines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="max-w-sm"
              />
              
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-green-300 rounded-lg bg-white dark:bg-gray-800"
              >
                <option value="all">Toutes catégories</option>
                <option value="development">Développement</option>
                <option value="ethics">Éthique</option>
                <option value="community">Communauté</option>
                <option value="innovation">Innovation</option>
              </select>
              
              <select 
                value={selectedStatus} 
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 border border-green-300 rounded-lg bg-white dark:bg-gray-800"
              >
                <option value="all">Tous statuts</option>
                <option value="proposed">Proposé</option>
                <option value="under_review">En révision</option>
                <option value="approved">Approuvé</option>
                <option value="implemented">Implémenté</option>
              </select>
            </div>

            {/* Liste des guidelines */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredGuidelines.map((guideline) => (
                <Card key={guideline.id} className="hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-green-900 border-2 border-green-200 dark:border-green-700">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {getCategoryIcon(guideline.category)}
                        <div className="flex-1">
                          <CardTitle className="text-lg text-green-800 dark:text-green-200">
                            {getLanguageContent(guideline, 'title')}
                          </CardTitle>
                          <CardDescription className="font-arabic text-right text-emerald-600 dark:text-emerald-400 mt-1">
                            {getArabicContent(guideline, 'title')}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge className={getStatusColor(guideline.status)}>
                          {guideline.status.toUpperCase()}
                        </Badge>
                        <Badge className={getFiqhColor(guideline.fiqhCompliance)}>
                          {guideline.fiqhCompliance.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Description */}
                    <div className="space-y-2">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {getLanguageContent(guideline, 'description')}
                      </p>
                      <p className="text-sm font-arabic text-right text-gray-600 dark:text-gray-400 italic">
                        {getArabicContent(guideline, 'description')}
                      </p>
                    </div>
                    
                    {/* Sources islamiques */}
                    <div className="space-y-2">
                      <h5 className="font-semibold text-green-800 dark:text-green-200">
                        Sources islamiques:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {guideline.islamicSources.map((source, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-emerald-300 text-emerald-700">
                            {source}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {guideline.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Métriques et actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          {guideline.votes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          {guideline.comments}
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4" />
                          {guideline.implementations}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Badge className={getPriorityColor(guideline.priority)}>
                          {guideline.priority.toUpperCase()}
                        </Badge>
                        <Button size="sm" variant="outline" className="text-xs">
                          <Eye className="h-3 w-3 mr-1" />
                          Voir
                        </Button>
                      </div>
                    </div>
                    
                    {/* Informations auteur */}
                    <div className="text-xs text-gray-500 dark:text-gray-400 pt-2 border-t">
                      <div className="flex justify-between">
                        <span>Par: {guideline.author}</span>
                        <span>Mis à jour: {guideline.lastUpdated}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet Contribuer */}
          <TabsContent value="contribute" className="space-y-6">
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800 dark:text-green-200 flex items-center gap-3">
                  <UserPlus className="h-8 w-8" />
                  Contribuer aux Guidelines Fiqh Technologique
                </CardTitle>
                <CardDescription className="text-green-600 dark:text-green-300">
                  Proposez de nouvelles guidelines basées sur les sources islamiques authentiques
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="font-semibold text-green-800 dark:text-green-200 mb-2 block">
                        Titre de la Guideline
                      </label>
                      <Input
                        value={newGuideline.title}
                        onChange={(e) => setNewGuideline({...newGuideline, title: e.target.value})}
                        placeholder="Ex: Chiffrement des données selon l'Amanah"
                        className="border-green-300"
                      />
                    </div>
                    
                    <div>
                      <label className="font-semibold text-green-800 dark:text-green-200 mb-2 block">
                        Catégorie
                      </label>
                      <select 
                        value={newGuideline.category}
                        onChange={(e) => setNewGuideline({...newGuideline, category: e.target.value})}
                        className="w-full px-4 py-2 border border-green-300 rounded-lg bg-white dark:bg-gray-800"
                      >
                        <option value="development">Développement</option>
                        <option value="ethics">Éthique</option>
                        <option value="community">Communauté</option>
                        <option value="innovation">Innovation</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="font-semibold text-green-800 dark:text-green-200 mb-2 block">
                        Priorité
                      </label>
                      <select 
                        value={newGuideline.priority}
                        onChange={(e) => setNewGuideline({...newGuideline, priority: e.target.value})}
                        className="w-full px-4 py-2 border border-green-300 rounded-lg bg-white dark:bg-gray-800"
                      >
                        <option value="low">Faible</option>
                        <option value="medium">Moyenne</option>
                        <option value="high">Élevée</option>
                        <option value="critical">Critique</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="font-semibold text-green-800 dark:text-green-200 mb-2 block">
                        Description détaillée
                      </label>
                      <Textarea
                        value={newGuideline.description}
                        onChange={(e) => setNewGuideline({...newGuideline, description: e.target.value})}
                        placeholder="Décrivez votre guideline en détail avec les sources islamiques..."
                        rows={8}
                        className="border-green-300"
                      />
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                      <Send className="h-4 w-4 mr-2" />
                      Soumettre la Guideline
                    </Button>
                  </div>
                </div>
                
                {/* Guide de contribution */}
                <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-4 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" />
                    Guide de Contribution
                  </h3>
                  <div className="space-y-3 text-sm text-blue-700 dark:text-blue-300">
                    <div className="flex items-start gap-2">
                      <span className="font-bold">1.</span>
                      <span>Basez votre guideline sur les 4 sources islamiques authentiques (Coran, Sunna, Ijma', Qiyas)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold">2.</span>
                      <span>Citez les références précises (versets, hadiths, consensus scholars)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold">3.</span>
                      <span>Expliquez l'application pratique dans le développement technologique</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold">4.</span>
                      <span>Respectez la méthodologie des Salaf الصالح (3 premières générations)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Discussions */}
          <TabsContent value="discussions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-800 dark:text-green-200 flex items-center gap-3">
                  <MessageCircle className="h-8 w-8" />
                  Discussions Communautaires Récentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentContributions.map((contribution) => (
                    <div key={contribution.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">
                            {contribution.type === 'guideline' ? '📋' :
                             contribution.type === 'improvement' ? '⚡' :
                             contribution.type === 'question' ? '❓' : '💬'}
                          </Badge>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                            {contribution.title}
                          </h4>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            {contribution.votes}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            {contribution.replies}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <span>Par {contribution.author} le {contribution.date}</span>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">
                            {contribution.status}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Priorité {contribution.priority}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Communauté */}
          <TabsContent value="community" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-800 dark:text-green-200 flex items-center gap-3">
                    <TrendingUp className="h-6 w-6" />
                    Contributeurs Top
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'Dr. Ahmed Al-Fiqhi', contributions: 47, expertise: 'Fiqh Numérique' },
                      { name: 'Imam Hassan Al-Banna Tech', contributions: 35, expertise: 'Transparence Code' },
                      { name: 'Dr. Fatima Al-Zahra AI', contributions: 29, expertise: 'IA Éthique' },
                      { name: 'Cybersec Ummah Team', contributions: 23, expertise: 'Sécurité Données' }
                    ].map((contributor, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div>
                          <div className="font-semibold text-green-800 dark:text-green-200">
                            {contributor.name}
                          </div>
                          <div className="text-sm text-green-600 dark:text-green-400">
                            {contributor.expertise}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-800 dark:text-green-200">
                            {contributor.contributions}
                          </div>
                          <div className="text-xs text-gray-500">contributions</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-800 dark:text-green-200 flex items-center gap-3">
                    <Globe className="h-6 w-6" />
                    Langues Actives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {languages.map((lang) => (
                      <div key={lang.code} className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{lang.flag}</span>
                          <span className="font-medium">{lang.name}</span>
                        </div>
                        <Badge variant="outline" className={lang.code === selectedLanguage ? 'bg-green-100 text-green-800' : ''}>
                          {lang.code === selectedLanguage ? 'Actuelle' : 'Disponible'}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t-2 border-green-300">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building className="h-8 w-8 text-green-600" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Community Fiqh Guidelines - CED
              </h2>
              <Users className="h-8 w-8 text-emerald-600" />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              © 2024 Yakoubi Yamina - Développement Technologique Collaboratif selon l'Islam
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 font-semibold font-arabic">
              والله أعلم - La communauté guidée par la Shura - وبالله التوفيق
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityFiqhGuidelines;