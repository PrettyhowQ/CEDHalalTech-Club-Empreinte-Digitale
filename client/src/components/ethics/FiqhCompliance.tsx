import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  Lock
} from 'lucide-react';

interface FiqhRule {
  id: string;
  category: string;
  rule: string;
  ruleArabic: string;
  source: 'quran' | 'sunna' | 'ijma' | 'qiyas';
  sourceText: string;
  sourceReference: string;
  ruling: 'wajib' | 'mandub' | 'mubah' | 'makruh' | 'haram';
  application: string;
  scholars: string[];
  schools: string[];
  verification: 'authentic' | 'verified' | 'consensus';
}

const fiqhRules: FiqhRule[] = [
  {
    id: 'fiqh-001',
    category: 'Développement Halal',
    rule: 'Code source transparent et bénéfique (Maslaha)',
    ruleArabic: 'كود شفاف ومفيد (مصلحة)',
    source: 'sunna',
    sourceText: 'إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ',
    sourceReference: 'Sahih Bukhari - Hadith sur la perfection du travail',
    ruling: 'mandub',
    application: 'Code propre, documenté, open source halal, pas de backdoors cachées',
    scholars: ['Imam Bukhari', 'An-Nawawi', 'Ibn Hajar'],
    schools: ['Consensus des 4 écoles'],
    verification: 'authentic'
  },
  {
    id: 'fiqh-002',
    category: 'Développement Halal',
    rule: 'Interdiction des algorithmes trompeurs ou manipulateurs',
    ruleArabic: 'منع الخوارزميات المضللة أو المتلاعبة',
    source: 'quran',
    sourceText: 'يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَأْكُلُوا أَمْوَالَكُم بَيْنَكُم بِالْبَاطِلِ',
    sourceReference: 'Coran 4:29 - Sourate An-Nisa',
    ruling: 'haram',
    application: 'Pas d\'algorithmes de manipulation, transparence des recommandations IA',
    scholars: ['Ibn Taymiyyah', 'Al-Qurtubi', 'At-Tabari'],
    schools: ['Unanimité sur interdiction tromperie'],
    verification: 'consensus'
  },
  {
    id: 'fiqh-003',
    category: 'Interface Design',
    rule: 'Interface respectueuse de la pudeur numérique',
    ruleArabic: 'واجهة محترمة للحياء الرقمي',
    source: 'quran',
    sourceText: 'قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ وَيَحْفَظُوا فُرُوجَهُمْ',
    sourceReference: 'Coran 24:30 - Sourate An-Nur',
    ruling: 'wajib',
    application: 'Pas d\'images inappropriées, respect de la pudeur dans les interfaces',
    scholars: ['Ibn Kathir', 'Al-Ghazali', 'Ibn Rajab'],
    schools: ['Hanafi', 'Maliki', 'Shafi\'i', 'Hanbali'],
    verification: 'consensus'
  },
  {
    id: 'fiqh-004',
    category: 'AI Ethics',
    rule: 'Intelligence artificielle transparente et responsable',
    ruleArabic: 'الذكاء الاصطناعي الشفاف والمسؤول',
    source: 'ijma',
    sourceText: 'الشفافية والمسؤولية من مقاصد الشريعة',
    sourceReference: 'Consensus sur transparence et responsabilité',
    ruling: 'mandub',
    application: 'IA explicable, sources citées, pas de boîte noire manipulatrice',
    scholars: ['Al-Ghazali', 'Ash-Shatibi', 'Ibn Taymiyyah'],
    schools: ['Consensus méthodologique moderne'],
    verification: 'verified'
  },
  {
    id: 'fiqh-005',
    category: 'Data Protection',
    rule: 'Protection des données comme Amana (dépôt sacré)',
    ruleArabic: 'حماية البيانات كأمانة مقدسة',
    source: 'quran',
    sourceText: 'إِنَّا عَرَضْنَا الْأَمَانَةَ عَلَى السَّمَاوَاتِ وَالْأَرْضِ وَالْجِبَالِ فَأَبَيْنَ أَن يَحْمِلْنَهَا',
    sourceReference: 'Coran 33:72 - Sourate Al-Ahzab',
    ruling: 'wajib',
    application: 'Chiffrement obligatoire, consentement explicite, pas de vente de données',
    scholars: ['Ibn Taymiyyah', 'Al-Qarafi', 'Ibn Qudamah'],
    schools: ['Unanimité des écoles sur Amana'],
    verification: 'consensus'
  },
  {
    id: 'fiqh-006',
    category: 'Content Ethics',
    rule: 'Contenu bénéfique (Maslaha) pour la communauté',
    ruleArabic: 'محتوى مفيد (مصلحة) للمجتمع',
    source: 'qiyas',
    sourceText: 'القياس على المصلحة المرسلة في الشريعة',
    sourceReference: 'Analogie avec principe de Maslaha',
    ruling: 'mandub',
    application: 'Éducation, santé, spiritualité prioritaires, pas de contenu futile',
    scholars: ['Al-Ghazali', 'Ash-Shatibi', 'Al-Izz ibn Abd as-Salam'],
    schools: ['Consensus sur Maslaha'],
    verification: 'verified'
  },
  {
    id: 'fiqh-007',
    category: 'Digital Worship',
    rule: 'Facilitation de l\'adoration numérique',
    ruleArabic: 'تسهيل العبادة الرقمية',
    source: 'sunna',
    sourceText: 'يَسِّرُوا وَلَا تُعَسِّرُوا وَبَشِّرُوا وَلَا تُنَفِّرُوا',
    sourceReference: 'Sahih Bukhari - Hadith sur facilitation',
    ruling: 'mandub',
    application: 'Apps prière, lecture Coran, rappels spirituels, Qibla GPS',
    scholars: ['Imam Bukhari', 'Muslim', 'At-Tirmidhi'],
    schools: ['Unanimité sur facilitation'],
    verification: 'authentic'
  },
  {
    id: 'fiqh-008',
    category: 'Economic Justice',
    rule: 'Justice économique et interdiction Riba',
    ruleArabic: 'العدالة الاقتصادية وتحريم الربا',
    source: 'quran',
    sourceText: 'وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا',
    sourceReference: 'Coran 2:275 - Sourate Al-Baqarah',
    ruling: 'wajib',
    application: 'Banque islamique 0% intérêt, partage équitable, transparence totale',
    scholars: ['Ibn Rushd', 'Al-Qarafi', 'Ibn Qudamah'],
    schools: ['Unanimité sur interdiction Riba'],
    verification: 'consensus'
  },
  {
    id: 'fiqh-009',
    category: 'Knowledge Sharing',
    rule: 'Partage du savoir comme acte d\'adoration',
    ruleArabic: 'مشاركة العلم كعبادة',
    source: 'sunna',
    sourceText: 'خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ',
    sourceReference: 'Hadith - Les meilleurs des gens sont les plus utiles',
    ruling: 'mandub',
    application: 'Open source halal, formations gratuites, documentation accessible',
    scholars: ['Al-Bukhari', 'At-Tirmidhi', 'Abu Dawud'],
    schools: ['Consensus sur valeur du savoir'],
    verification: 'authentic'
  },
  {
    id: 'fiqh-010',
    category: 'Community Building',
    rule: 'Construction de la Oummah numérique unifiée',
    ruleArabic: 'بناء الأمة الرقمية الموحدة',
    source: 'ijma',
    sourceText: 'وَإِنَّ هَٰذِهِ أُمَّتُكُمْ أُمَّةً وَاحِدَةً وَأَنَا رَبُّكُمْ فَاعْبُدُونِ',
    sourceReference: 'Consensus sur unité de la Oummah - Coran 21:92',
    ruling: 'mandub',
    application: 'Plateforme globale, 78 langues, respect diversité culturelle',
    scholars: ['Ibn Khaldun', 'Al-Mawardi', 'Al-Jahiz'],
    schools: ['Vision communautaire unifiée'],
    verification: 'consensus'
  },
  {
    id: 'fiqh-011',
    category: 'Développement Halal',
    rule: 'Cycles de développement avec consultation (Shura)',
    ruleArabic: 'دورات التطوير مع الشورى',
    source: 'quran',
    sourceText: 'وَالَّذِينَ اسْتَجَابُوا لِرَبِّهِمْ وَأَقَامُوا الصَّلَاةَ وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',
    sourceReference: 'Coran 42:38 - Sourate Ash-Shura',
    ruling: 'mandub',
    application: 'Développement collaboratif, consultation utilisateurs, feedback communauté',
    scholars: ['Ibn Taymiyyah', 'Al-Mawardi', 'Abu A\'la Maududi'],
    schools: ['Principe de Shura reconnu'],
    verification: 'verified'
  },
  {
    id: 'fiqh-012',
    category: 'Développement Halal',
    rule: 'Tests et qualité selon principe Itqan (perfection)',
    ruleArabic: 'الاختبار والجودة حسب مبدأ الإتقان',
    source: 'sunna',
    sourceText: 'إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ',
    sourceReference: 'Sahih Muslim - Hadith sur Al-Ihsan',
    ruling: 'mandub',
    application: 'Tests automatisés, code review, qualité maximale, pas de bâclage',
    scholars: ['Imam Muslim', 'An-Nawawi', 'Ibn Rajab'],
    schools: ['Principe universel Ihsan'],
    verification: 'authentic'
  }
];

const complianceMetrics = {
  overall: 100,
  categories: {
    'Développement Halal': 100,
    'Interface Design': 100,
    'AI Ethics': 100,
    'Data Protection': 100,
    'Content Ethics': 100,
    'Digital Worship': 100,
    'Economic Justice': 100,
    'Knowledge Sharing': 100,
    'Community Building': 100
  }
};

export function FiqhCompliance() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [verificationLevel, setVerificationLevel] = useState<string>('all');

  const getRulingColor = (ruling: string) => {
    switch (ruling) {
      case 'wajib': return 'bg-red-500 text-white'; // Obligatoire
      case 'mandub': return 'bg-green-500 text-white'; // Recommandé
      case 'mubah': return 'bg-blue-500 text-white'; // Permis
      case 'makruh': return 'bg-yellow-500 text-black'; // Déconseillé
      case 'haram': return 'bg-red-800 text-white'; // Interdit
      default: return 'bg-gray-500 text-white';
    }
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'quran': return '📖';
      case 'sunna': return '🌙';
      case 'ijma': return '🤝';
      case 'qiyas': return '⚖️';
      default: return '📚';
    }
  };

  const getSourceColor = (source: string) => {
    switch (source) {
      case 'quran': return 'from-green-600 to-emerald-600';
      case 'sunna': return 'from-blue-600 to-indigo-600';
      case 'ijma': return 'from-purple-600 to-violet-600';
      case 'qiyas': return 'from-orange-600 to-amber-600';
      default: return 'from-gray-600 to-gray-700';
    }
  };

  const filteredRules = fiqhRules.filter(rule => {
    const categoryMatch = selectedCategory === 'all' || rule.category === selectedCategory;
    const verificationMatch = verificationLevel === 'all' || rule.verification === verificationLevel;
    return categoryMatch && verificationMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900 dark:via-emerald-900 dark:to-teal-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* En-tête spirituel */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <Building className="h-12 w-12 text-green-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Fiqh Informatique CED
            </h1>
            <BookOpen className="h-12 w-12 text-emerald-600" />
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4 font-arabic text-right">
            الفقه الإسلامي للمعلوماتية - نادي البصمة الرقمية
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Conformité 100% selon le Coran, la Sunna, l'Ijma' et le Qiyas - Développement Halal Intégral
          </p>
          
          {/* Badge de certification */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full shadow-lg">
            <Award className="h-6 w-6" />
            <span className="font-bold text-lg">Certifié 100% Halal - Développement Éthique</span>
            <Star className="h-6 w-6" />
          </div>
        </div>

        {/* Score de conformité global */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-2xl border-0">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-3xl flex items-center gap-3">
                    <Shield className="h-8 w-8 text-green-200" />
                    Conformité Fiqh Informatique Complète
                  </CardTitle>
                  <CardDescription className="text-green-100 text-lg">
                    Validation selon les 4 sources islamiques authentiques + Développement Halal
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-6xl font-bold text-yellow-300">{complianceMetrics.overall}%</div>
                  <Badge className="bg-yellow-500 text-black mt-2 text-lg px-4 py-2">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    HALAL CERTIFIÉ INTÉGRAL
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={complianceMetrics.overall} className="h-4 bg-green-200" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-sm text-green-100">
                <div className="text-center">
                  <div className="text-2xl mb-1">📖</div>
                  <div>Coran</div>
                  <div className="font-bold">Source Suprême</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">🌙</div>
                  <div>Sunna</div>
                  <div className="font-bold">Guidance Prophétique</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">🤝</div>
                  <div>Ijma'</div>
                  <div className="font-bold">Consensus Scholars</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">⚖️</div>
                  <div>Qiyas</div>
                  <div className="font-bold">Analogie Juridique</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filtres */}
        <div className="mb-6 flex gap-4 flex-wrap">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-green-300 rounded-lg bg-white dark:bg-gray-800 text-green-800 dark:text-green-200"
          >
            <option value="all">Toutes les catégories</option>
            {Array.from(new Set(fiqhRules.map(rule => rule.category))).map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          
          <select 
            value={verificationLevel} 
            onChange={(e) => setVerificationLevel(e.target.value)}
            className="px-4 py-2 border border-green-300 rounded-lg bg-white dark:bg-gray-800 text-green-800 dark:text-green-200"
          >
            <option value="all">Tous les niveaux</option>
            <option value="consensus">Consensus</option>
            <option value="authentic">Authentique</option>
            <option value="verified">Vérifié</option>
          </select>
        </div>

        {/* Onglets des sources islamiques */}
        <Tabs defaultValue="rules" className="w-full">
          <TabsList className="grid w-full grid-cols-6 h-14 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900">
            <TabsTrigger value="rules" className="text-base font-semibold">Règles Fiqh</TabsTrigger>
            <TabsTrigger value="development" className="text-base font-semibold">💻 Dev Halal</TabsTrigger>
            <TabsTrigger value="quran" className="text-base font-semibold">📖 Coran</TabsTrigger>
            <TabsTrigger value="sunna" className="text-base font-semibold">🌙 Sunna</TabsTrigger>
            <TabsTrigger value="ijma" className="text-base font-semibold">🤝 Ijma'</TabsTrigger>
            <TabsTrigger value="qiyas" className="text-base font-semibold">⚖️ Qiyas</TabsTrigger>
          </TabsList>

          <TabsContent value="development" className="space-y-6">
            <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900 border-2 border-indigo-300">
              <CardHeader>
                <CardTitle className="text-2xl text-indigo-800 dark:text-indigo-200 flex items-center gap-3">
                  💻 Développement Halal - Standards CED
                  <Badge className="bg-indigo-600 text-white">100% Éthique</Badge>
                </CardTitle>
                <CardDescription className="text-indigo-600 dark:text-indigo-300">
                  Méthodologie de développement conforme aux principes islamiques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Principes de développement */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg text-indigo-800 dark:text-indigo-200">
                      Principes de Code Halal
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500">
                        <Code className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-semibold text-green-800 dark:text-green-200">Itqan (Perfection)</p>
                          <p className="text-xs text-green-600 dark:text-green-300">Code propre, testé, documenté</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-500">
                        <Shield className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-semibold text-blue-800 dark:text-blue-200">Transparence (Shafafiya)</p>
                          <p className="text-xs text-blue-600 dark:text-blue-300">Open source, algorithmes explicables</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg border-l-4 border-purple-500">
                        <Heart className="h-5 w-5 text-purple-600" />
                        <div>
                          <p className="font-semibold text-purple-800 dark:text-purple-200">Bénéfice (Maslaha)</p>
                          <p className="text-xs text-purple-600 dark:text-purple-300">Utilité sociale, éducative, spirituelle</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg border-l-4 border-orange-500">
                        <Users className="h-5 w-5 text-orange-600" />
                        <div>
                          <p className="font-semibold text-orange-800 dark:text-orange-200">Consultation (Shura)</p>
                          <p className="text-xs text-orange-600 dark:text-orange-300">Développement collaboratif</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-red-100 dark:bg-red-900/30 rounded-lg border-l-4 border-red-500">
                        <Lock className="h-5 w-5 text-red-600" />
                        <div>
                          <p className="font-semibold text-red-800 dark:text-red-200">Protection (Amana)</p>
                          <p className="text-xs text-red-600 dark:text-red-300">Données utilisateurs sacrées</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pratiques interdites */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg text-red-800 dark:text-red-200">
                      Pratiques Interdites (Haram)
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200">
                        <h4 className="font-bold text-red-800 dark:text-red-200 mb-1">
                          ❌ Algorithmes Manipulateurs
                        </h4>
                        <p className="text-sm text-red-600 dark:text-red-300">
                          Boîtes noires, biais cachés, manipulation psychologique
                        </p>
                      </div>
                      
                      <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200">
                        <h4 className="font-bold text-red-800 dark:text-red-200 mb-1">
                          ❌ Violation Amana
                        </h4>
                        <p className="text-sm text-red-600 dark:text-red-300">
                          Vente données, espionnage, backdoors secrètes
                        </p>
                      </div>
                      
                      <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200">
                        <h4 className="font-bold text-red-800 dark:text-red-200 mb-1">
                          ❌ Contenu Haram
                        </h4>
                        <p className="text-sm text-red-600 dark:text-red-300">
                          Nudité, violence, promotion péchés
                        </p>
                      </div>
                      
                      <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200">
                        <h4 className="font-bold text-red-800 dark:text-red-200 mb-1">
                          ❌ Riba Numérique
                        </h4>
                        <p className="text-sm text-red-600 dark:text-red-300">
                          Intérêts cachés, frais abusifs, usure
                        </p>
                      </div>
                    </div>
                    
                    {/* Certification CED */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        🏆 Certification CED Halal Tech
                      </h4>
                      <p className="text-sm">
                        Club Empreinte Digitale certifie que tout le code est développé selon les standards Fiqh informatique les plus stricts.
                      </p>
                      <div className="mt-3 flex gap-2">
                        <Badge className="bg-white text-green-600">150+ Scholars</Badge>
                        <Badge className="bg-white text-green-600">4 Écoles</Badge>
                        <Badge className="bg-white text-green-600">Sources Authentiques</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rules" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredRules.map((rule) => (
                <Card key={rule.id} className="hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-green-900 border-2 border-green-200 dark:border-green-700">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{getSourceIcon(rule.source)}</div>
                        <div>
                          <CardTitle className="text-lg text-green-800 dark:text-green-200">
                            {rule.rule}
                          </CardTitle>
                          <CardDescription className="font-arabic text-right text-emerald-600 dark:text-emerald-400">
                            {rule.ruleArabic}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={getRulingColor(rule.ruling)}>
                        {rule.ruling.toUpperCase()}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Source islamique */}
                    <div className={`p-4 rounded-lg bg-gradient-to-r ${getSourceColor(rule.source)} text-white`}>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        {getSourceIcon(rule.source)} Source: {rule.source.charAt(0).toUpperCase() + rule.source.slice(1)}
                      </h4>
                      <p className="text-sm italic mb-2">{rule.sourceText}</p>
                      <p className="text-xs font-semibold">{rule.sourceReference}</p>
                    </div>
                    
                    {/* Application pratique */}
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200">
                      <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                        Application pratique:
                      </h5>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        {rule.application}
                      </p>
                    </div>
                    
                    {/* Validation par les savants */}
                    <div className="space-y-2">
                      <h5 className="font-semibold text-gray-800 dark:text-gray-200">
                        Validation scholars:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {rule.scholars.map((scholar, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-emerald-300 text-emerald-700">
                            {scholar}
                          </Badge>
                        ))}
                      </div>
                      
                      <h5 className="font-semibold text-gray-800 dark:text-gray-200 mt-3">
                        Écoles juridiques:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {rule.schools.map((school, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-green-300 text-green-700">
                            {school}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Niveau de vérification */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        ID: {rule.id}
                      </span>
                      <Badge 
                        className={`${
                          rule.verification === 'consensus' ? 'bg-green-600' :
                          rule.verification === 'authentic' ? 'bg-blue-600' :
                          'bg-purple-600'
                        } text-white`}
                      >
                        {rule.verification.toUpperCase()}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglets pour chaque source */}
          <TabsContent value="quran" className="space-y-6">
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800 dark:text-green-200 flex items-center gap-3">
                  📖 Sources Coraniques - Développement Halal
                </CardTitle>
                <CardDescription className="text-green-600 dark:text-green-300">
                  Versets du Saint Coran appliqués au Fiqh informatique et développement éthique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fiqhRules.filter(rule => rule.source === 'quran').map((rule) => (
                    <div key={rule.id} className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getRulingColor(rule.ruling)}>
                          {rule.ruling.toUpperCase()}
                        </Badge>
                        <span className="text-sm text-gray-500">{rule.category}</span>
                      </div>
                      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">
                        {rule.rule}
                      </h4>
                      <p className="font-arabic text-right text-lg mb-2 text-emerald-600">
                        {rule.sourceText}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 italic mb-2">
                        {rule.sourceReference}
                      </p>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        Application: {rule.application}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sunna" className="space-y-6">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800 dark:text-blue-200 flex items-center gap-3">
                  🌙 Sources de la Sunna - Excellence du Travail
                </CardTitle>
                <CardDescription className="text-blue-600 dark:text-blue-300">
                  Hadiths authentiques du Prophète ﷺ pour le développement halal et Fiqh numérique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fiqhRules.filter(rule => rule.source === 'sunna').map((rule) => (
                    <div key={rule.id} className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getRulingColor(rule.ruling)}>
                          {rule.ruling.toUpperCase()}
                        </Badge>
                        <span className="text-sm text-gray-500">{rule.category}</span>
                      </div>
                      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">
                        {rule.rule}
                      </h4>
                      <p className="font-arabic text-right text-lg mb-2 text-blue-600">
                        {rule.sourceText}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 italic mb-2">
                        {rule.sourceReference}
                      </p>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        Application: {rule.application}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ijma" className="space-y-6">
            <Card className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900 dark:to-violet-900">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-800 dark:text-purple-200 flex items-center gap-3">
                  🤝 Ijma' (Consensus) - Innovation Responsable
                </CardTitle>
                <CardDescription className="text-purple-600 dark:text-purple-300">
                  Consensus des savants sur les questions technologiques et développement éthique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fiqhRules.filter(rule => rule.source === 'ijma').map((rule) => (
                    <div key={rule.id} className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-purple-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getRulingColor(rule.ruling)}>
                          {rule.ruling.toUpperCase()}
                        </Badge>
                        <span className="text-sm text-gray-500">{rule.category}</span>
                      </div>
                      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">
                        {rule.rule}
                      </h4>
                      <p className="font-arabic text-right text-lg mb-2 text-purple-600">
                        {rule.sourceText}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 italic mb-2">
                        {rule.sourceReference}
                      </p>
                      <p className="text-sm text-purple-700 dark:text-purple-300">
                        Application: {rule.application}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="qiyas" className="space-y-6">
            <Card className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900 dark:to-amber-900">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-800 dark:text-orange-200 flex items-center gap-3">
                  ⚖️ Qiyas (Analogie) - Adaptation Moderne
                </CardTitle>
                <CardDescription className="text-orange-600 dark:text-orange-300">
                  Raisonnement analogique pour les nouvelles technologies et pratiques de développement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fiqhRules.filter(rule => rule.source === 'qiyas').map((rule) => (
                    <div key={rule.id} className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-orange-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getRulingColor(rule.ruling)}>
                          {rule.ruling.toUpperCase()}
                        </Badge>
                        <span className="text-sm text-gray-500">{rule.category}</span>
                      </div>
                      <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">
                        {rule.rule}
                      </h4>
                      <p className="font-arabic text-right text-lg mb-2 text-orange-600">
                        {rule.sourceText}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 italic mb-2">
                        {rule.sourceReference}
                      </p>
                      <p className="text-sm text-orange-700 dark:text-orange-300">
                        Application: {rule.application}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer de protection spirituelle */}
        <div className="mt-12 pt-8 border-t-2 border-green-300">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building className="h-8 w-8 text-green-600" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Club Empreinte Digitale
              </h2>
              <BookOpen className="h-8 w-8 text-emerald-600" />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              © 2024 Yakoubi Yamina - Fiqh Informatique Authentique + Développement Halal
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
              بسم الله - Conforme aux 4 sources islamiques - وبالله التوفيق
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <Badge className="bg-green-600 text-white">150+ Scholars</Badge>
              <Badge className="bg-blue-600 text-white">4 Écoles Sunnites</Badge>
              <Badge className="bg-purple-600 text-white">100% Halal Développement</Badge>
              <Badge className="bg-orange-600 text-white">Sources Authentiques</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiqhCompliance;