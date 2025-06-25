# CODE SOURCE COMPLET - Club Empreinte Digitale

## NOUVELLES FONCTIONNALITÉS CRÉÉES

### 1. Guide Fiqh de l'Informatique - FiqhInformatiqueGuide.tsx

```tsx
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search,
  BookOpen,
  MessageCircle,
  Shield,
  CheckCircle,
  AlertTriangle,
  HelpCircle,
  User,
  Clock,
  Star,
  Globe,
  Phone,
  Video,
  FileText,
  Lightbulb
} from "lucide-react";

interface FiqhRule {
  id: string;
  category: 'privacy' | 'ai' | 'finance' | 'social' | 'data' | 'security' | 'general';
  question: string;
  questionArabic: string;
  answer: string;
  answerArabic: string;
  ruling: 'halal' | 'haram' | 'makruh' | 'mandub' | 'mubah';
  evidence: string[];
  scholar: string;
  complexity: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  lastUpdated: Date;
}

interface Scholar {
  id: string;
  name: string;
  nameArabic: string;
  title: string;
  university: string;
  specialization: string[];
  avatar: string;
  rating: number;
  responses: number;
  languages: string[];
  timezone: string;
  available: boolean;
}

export default function FiqhInformatiqueGuide() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('fiqh-rules');

  const fiqhRules: FiqhRule[] = [
    {
      id: 'ai-decision-making',
      category: 'ai',
      question: 'Peut-on utiliser l\'IA pour prendre des décisions financières importantes ?',
      questionArabic: 'هل يمكن استخدام الذكاء الاصطناعي لاتخاذ قرارات مالية مهمة؟',
      answer: 'L\'IA peut être utilisée comme outil d\'aide à la décision, mais la responsabilité finale doit rester humaine. L\'algorithme doit être transparent et exempt de riba (intérêt) et gharar (incertitude excessive).',
      answerArabic: 'يمكن استخدام الذكاء الاصطناعي كأداة مساعدة في اتخاذ القرار، لكن المسؤولية النهائية يجب أن تبقى بشرية. يجب أن تكون الخوارزمية شفافة وخالية من الربا والغرر.',
      ruling: 'halal',
      evidence: [
        'Coran 2:188 - Interdiction de l\'injustice',
        'Hadith - "La transparence dans les transactions"',
        'Principe de maslaha (intérêt public)'
      ],
      scholar: 'Dr. Ahmad Al-Qasimi',
      complexity: 'intermediate',
      tags: ['IA', 'finance', 'décision', 'responsabilité'],
      lastUpdated: new Date('2025-06-20')
    },
    {
      id: 'data-privacy',
      category: 'privacy',
      question: 'Quelle est la position islamique sur la collecte de données personnelles ?',
      questionArabic: 'ما هو الموقف الإسلامي من جمع البيانات الشخصية؟',
      answer: 'La collecte de données doit respecter la vie privée (haram al-bayt). Seules les données nécessaires peuvent être collectées avec consentement explicite. L\'usage doit être licite et bénéfique.',
      answerArabic: 'يجب أن يحترم جمع البيانات الخصوصية (حرمة البيت). يمكن جمع البيانات الضرورية فقط بموافقة صريحة. يجب أن يكون الاستخدام مشروعًا ومفيدًا.',
      ruling: 'halal',
      evidence: [
        'Coran 49:12 - Interdiction de l\'espionnage',
        'Hadith - "Respect de la vie privée"',
        'Principe de la nécessité (darura)'
      ],
      scholar: 'Dr. Fatima Bennani',
      complexity: 'beginner',
      tags: ['données', 'vie privée', 'consentement'],
      lastUpdated: new Date('2025-06-22')
    },
    {
      id: 'cryptocurrency-trading',
      category: 'finance',
      question: 'Le trading de cryptomonnaies est-il halal ?',
      questionArabic: 'هل تداول العملات المشفرة حلال؟',
      answer: 'Le trading de cryptomonnaies peut être halal si : 1) Il n\'y a pas de gharar excessif, 2) Pas de riba, 3) L\'actif a une valeur réelle, 4) Pas de spéculation pure. Bitcoin et Ethereum peuvent être acceptables avec conditions.',
      answerArabic: 'قد يكون تداول العملات المشفرة حلالاً إذا: ١) لا يوجد غرر مفرط، ٢) لا ربا، ٣) للأصل قيمة حقيقية، ٤) ليس مضاربة خالصة. البيتكوين والإيثريوم قد تكون مقبولة بشروط.',
      ruling: 'mubah',
      evidence: [
        'Principe de l\'absence d\'interdiction explicite',
        'Critères de la monnaie en Islam',
        'Éviter gharar et riba'
      ],
      scholar: 'Prof. Omar Al-Faisal',
      complexity: 'advanced',
      tags: ['crypto', 'trading', 'blockchain', 'finance'],
      lastUpdated: new Date('2025-06-25')
    },
    {
      id: 'social-media-usage',
      category: 'social',
      question: 'Quelles sont les règles islamiques pour l\'usage des réseaux sociaux ?',
      questionArabic: 'ما هي القواعد الإسلامية لاستخدام وسائل التواصل الاجتماعي؟',
      answer: 'Les réseaux sociaux sont permis avec modération. Éviter : contenus haram, perte de temps excessive, médisance, exhibitionnisme. Privilégier : partage de savoir utile, da\'wa, connexions familiales.',
      answerArabic: 'وسائل التواصل الاجتماعي مسموحة بالاعتدال. تجنب: المحتوى الحرام، إضاعة الوقت المفرطة، الغيبة، التباهي. فضل: تبادل المعرفة المفيدة، الدعوة، الروابط العائلية.',
      ruling: 'mubah',
      evidence: [
        'Coran 49:11 - Éviter la moquerie',
        'Hadith sur la perte de temps',
        'Principe de l\'utilité (maslaha)'
      ],
      scholar: 'Sheikh Omar Al-Dimashqi',
      complexity: 'beginner',
      tags: ['réseaux sociaux', 'temps', 'contenu', 'modération'],
      lastUpdated: new Date('2025-06-23')
    },
    {
      id: 'cybersecurity-hacking',
      category: 'security',
      question: 'Le hacking éthique est-il permis en Islam ?',
      questionArabic: 'هل القرصنة الأخلاقية مسموحة في الإسلام؟',
      answer: 'Le hacking éthique avec autorisation explicite est permis pour protéger les systèmes. Il faut : 1) Permission du propriétaire, 2) Intention de protection, 3) Pas de dommage, 4) Confidentialité respectée.',
      answerArabic: 'القرصنة الأخلاقية بإذن صريح مسموحة لحماية الأنظمة. يجب: ١) إذن المالك، ٢) نية الحماية، ٣) عدم الضرر، ٤) احترام السرية.',
      ruling: 'halal',
      evidence: [
        'Principe de la prévention du mal',
        'Protection des biens (hifz al-mal)',
        'Intention noble (husn al-qasd)'
      ],
      scholar: 'Dr. Hassan Al-Maliki',
      complexity: 'advanced',
      tags: ['cybersécurité', 'hacking', 'protection', 'autorisation'],
      lastUpdated: new Date('2025-06-24')
    }
  ];

  const scholars: Scholar[] = [
    {
      id: 'ahmad-qasimi',
      name: 'Dr. Ahmad Al-Qasimi',
      nameArabic: 'د. أحمد القاسمي',
      title: 'Professeur de Fiqh Contemporain',
      university: 'Université Al-Azhar',
      specialization: ['IA & Éthique', 'Finance Islamique', 'Technologie'],
      avatar: '👨‍🏫',
      rating: 4.9,
      responses: 1247,
      languages: ['Arabe', 'Anglais', 'Français'],
      timezone: 'UTC+2',
      available: true
    },
    {
      id: 'fatima-bennani',
      name: 'Dr. Fatima Bennani',
      nameArabic: 'د. فاطمة بناني',
      title: 'Spécialiste Droit Numérique Islamique',
      university: 'Université Mohammed V - Rabat',
      specialization: ['Vie Privée', 'Données', 'Droits Numériques'],
      avatar: '👩‍🏫',
      rating: 4.8,
      responses: 892,
      languages: ['Arabe', 'Français', 'Anglais'],
      timezone: 'UTC+1',
      available: true
    },
    {
      id: 'omar-faisal',
      name: 'Prof. Omar Al-Faisal',
      nameArabic: 'أ.د. عمر الفيصل',
      title: 'Expert Finance Islamique & Blockchain',
      university: 'Oxford University',
      specialization: ['Fintech Islamique', 'Blockchain', 'Cryptomonnaies'],
      avatar: '👨‍💼',
      rating: 4.95,
      responses: 2156,
      languages: ['Arabe', 'Anglais', 'Français'],
      timezone: 'UTC+0',
      available: false
    }
  ];

  const filteredRules = fiqhRules.filter(rule => {
    const matchesCategory = selectedCategory === 'all' || rule.category === selectedCategory;
    const matchesSearch = rule.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         rule.questionArabic.includes(searchQuery) ||
                         rule.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getRulingColor = (ruling: string) => {
    switch (ruling) {
      case 'halal': return 'bg-green-100 text-green-800';
      case 'haram': return 'bg-red-100 text-red-800';
      case 'makruh': return 'bg-yellow-100 text-yellow-800';
      case 'mandub': return 'bg-blue-100 text-blue-800';
      case 'mubah': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRulingIcon = (ruling: string) => {
    switch (ruling) {
      case 'halal': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'haram': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'makruh': return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'mandub': return <Star className="h-4 w-4 text-blue-600" />;
      case 'mubah': return <HelpCircle className="h-4 w-4 text-gray-600" />;
      default: return <HelpCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  const categories = [
    { id: 'all', name: 'Toutes', icon: BookOpen },
    { id: 'ai', name: 'Intelligence Artificielle', icon: Lightbulb },
    { id: 'finance', name: 'Finance & Trading', icon: Globe },
    { id: 'privacy', name: 'Vie Privée & Données', icon: Shield },
    { id: 'social', name: 'Réseaux Sociaux', icon: MessageCircle },
    { id: 'security', name: 'Cybersécurité', icon: Shield },
    { id: 'general', name: 'Général', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">فقه الحاسوب والتكنولوجيا</h1>
              <h2 className="text-2xl text-green-600">Fiqh de l'Informatique et de la Technologie</h2>
              <p className="text-gray-600">Guide complet pour un apprentissage 100% Halal</p>
            </div>
          </div>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="fiqh-rules" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Règles Fiqh
            </TabsTrigger>
            <TabsTrigger value="ask-scholar" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Consulter Scholar
            </TabsTrigger>
            <TabsTrigger value="quick-help" className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              Aide Rapide
            </TabsTrigger>
          </TabsList>

          {/* Règles Fiqh */}
          <TabsContent value="fiqh-rules" className="space-y-6">
            {/* Recherche et filtres */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher une question... البحث عن سؤال"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    <category.icon className="h-4 w-4" />
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Résultats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredRules.map((rule) => (
                <Card key={rule.id} className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{rule.question}</CardTitle>
                        <p className="text-sm text-blue-600 mt-1">{rule.questionArabic}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {getRulingIcon(rule.ruling)}
                        <Badge className={getRulingColor(rule.ruling)}>
                          {rule.ruling.charAt(0).toUpperCase() + rule.ruling.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Réponse:</h4>
                        <p className="text-sm text-gray-700">{rule.answer}</p>
                        <p className="text-sm text-blue-700 mt-2 text-right">{rule.answerArabic}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Preuves:</h4>
                        <div className="space-y-1">
                          {rule.evidence.map((evidence, index) => (
                            <div key={index} className="flex items-center gap-2 text-xs">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              <span>{evidence}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-gray-500" />
                          <span className="text-sm font-medium">{rule.scholar}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-xs text-gray-500">
                            {rule.lastUpdated.toLocaleDateString('fr-FR')}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {rule.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Consulter Scholar */}
          <TabsContent value="ask-scholar" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scholars.map((scholar) => (
                <Card key={scholar.id} className={`${scholar.available ? 'border-green-500' : 'border-gray-300'}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{scholar.avatar}</div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{scholar.name}</CardTitle>
                        <p className="text-sm text-blue-600">{scholar.nameArabic}</p>
                        <p className="text-xs text-gray-600">{scholar.title}</p>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${scholar.available ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700">{scholar.university}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3 w-3 ${i < Math.floor(scholar.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                          <span className="text-xs ml-2">{scholar.rating} ({scholar.responses} réponses)</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-2">Spécialisations:</h4>
                        <div className="flex flex-wrap gap-1">
                          {scholar.specialization.map((spec) => (
                            <Badge key={spec} variant="outline" className="text-xs">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {scholar.languages.map((lang) => (
                          <Badge key={lang} className="bg-blue-100 text-blue-800 text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          className="flex-1" 
                          disabled={!scholar.available}
                          variant={scholar.available ? "default" : "secondary"}
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          {scholar.available ? 'Poser Question' : 'Indisponible'}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Video className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Aide Rapide */}
          <TabsContent value="quick-help" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-6 w-6 text-green-600" />
                    Questions Fréquentes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full text-left justify-start text-sm">
                      L'IA peut-elle remplacer la prise de décision humaine ?
                    </Button>
                    <Button variant="ghost" className="w-full text-left justify-start text-sm">
                      Quelle crypto-monnaie est halal ?
                    </Button>
                    <Button variant="ghost" className="w-full text-left justify-start text-sm">
                      Comment protéger sa vie privée en ligne ?
                    </Button>
                    <Button variant="ghost" className="w-full text-left justify-start text-sm">
                      Les NFT sont-ils conformes à la Sharia ?
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-6 w-6 text-blue-600" />
                    Support 24/7
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <strong>Hotline Fiqh:</strong>
                      <p className="text-blue-600">+41 800 FIQH (3444)</p>
                    </div>
                    <div className="text-sm">
                      <strong>WhatsApp Scholar:</strong>
                      <p className="text-green-600">+41 79 123 4567</p>
                    </div>
                    <div className="text-sm">
                      <strong>Email Urgent:</strong>
                      <p className="text-purple-600">fiqh@ced-academy.ch</p>
                    </div>
                    <Button className="w-full">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat Live
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-yellow-600" />
                    Ressources Utiles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full text-left justify-start text-sm">
                      📖 Guide Fiqh Numérique PDF
                    </Button>
                    <Button variant="ghost" className="w-full text-left justify-start text-sm">
                      🎥 Vidéos Explicatives
                    </Button>
                    <Button variant="ghost" className="w-full text-left justify-start text-sm">
                      📚 Bibliothèque Fatwas Tech
                    </Button>
                    <Button variant="ghost" className="w-full text-left justify-start text-sm">
                      🔍 Moteur Recherche Islamique
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p className="mb-2">
            © 2025 CED Academy - Fiqh de l'Informatique - Conseil Sharia 24/7 - Yakoubi Yamina
          </p>
          <p>
            📖 Apprentissage Halal 100% - Scholars résidents permanents - Guidance spirituelle continue
          </p>
        </div>
      </div>
    </div>
  );
}
```

### 2. Plateforme Formations Avancées - AdvancedLearningPlatform.tsx

```tsx
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap,
  Users,
  Video,
  Calendar,
  Clock,
  Globe,
  Award,
  BookOpen,
  CheckCircle,
  Star,
  Play,
  FileText,
  MessageCircle,
  User,
  Shield,
  Zap,
  Building2,
  DollarSign,
  Eye,
  Target,
  Lightbulb,
  Monitor
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  titleArabic: string;
  category: 'ai-ethics' | 'islamic-finance' | 'tech-halal' | 'data-science' | 'cybersecurity' | 'blockchain';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  duration: number; // heures
  price: {
    local: number; // Prix pour la région locale (Suisse/Europe)
    gulf: number; // Prix pour le Golfe (UAE, Arabie Saoudite, etc.)
    global: number; // Prix pour le reste du monde
  };
  currency: string;
  format: 'virtual-class' | 'self-paced' | 'hybrid' | 'group-project';
  maxStudents: number;
  language: string[];
  instructor: {
    name: string;
    nameArabic: string;
    credentials: string[];
    university: string;
    rating: number;
  };
  certification: {
    provider: string;
    accredited: boolean;
    recognizedBy: string[];
    halalCertified: boolean;
  };
  schedule: {
    startDate: Date;
    endDate: Date;
    weeklyHours: number;
    timezone: string;
  };
  features: string[];
  featuresArabic: string[];
  prerequisites: string[];
  examRequired: boolean;
  groupWork: boolean;
  fiqhCompliant: boolean;
  description: string;
  descriptionArabic: string;
}

interface VirtualClass {
  id: string;
  courseId: string;
  title: string;
  instructor: string;
  date: Date;
  duration: number;
  maxParticipants: number;
  currentParticipants: number;
  type: 'lecture' | 'workshop' | 'exam' | 'group-discussion';
  recordingAvailable: boolean;
  region: 'global' | 'gulf' | 'europe' | 'asia';
}

export default function AdvancedLearningPlatform() {
  const [selectedTab, setSelectedTab] = useState('courses');
  const [selectedRegion, setSelectedRegion] = useState('global');

  const courses: Course[] = [
    {
      id: 'ai-ethics-advanced',
      title: 'Intelligence Artificielle Éthique Avancée',
      titleArabic: 'الذكاء الاصطناعي الأخلاقي المتقدم',
      category: 'ai-ethics',
      level: 'advanced',
      duration: 120,
      price: {
        local: 2500,
        gulf: 5000,
        global: 3500
      },
      currency: 'CHF',
      format: 'virtual-class',
      maxStudents: 25,
      language: ['Français', 'Arabe', 'Anglais'],
      instructor: {
        name: 'Dr. Amina Hassan',
        nameArabic: 'د. أمينة حسن',
        credentials: ['PhD Computer Science MIT', 'Certified Islamic Scholar', 'IEEE Senior Member'],
        university: 'MIT & Al-Azhar University',
        rating: 4.9
      },
      certification: {
        provider: 'CED Academy International',
        accredited: true,
        recognizedBy: ['MIT', 'Stanford', 'Al-Azhar', 'KAUST', 'AUB'],
        halalCertified: true
      },
      schedule: {
        startDate: new Date('2025-07-01'),
        endDate: new Date('2025-09-30'),
        weeklyHours: 10,
        timezone: 'UTC+1 (CET)'
      },
      features: [
        'Classes virtuelles interactives 3D',
        'Projets pratiques avec IA réelle',
        'Mentorat personnalisé 1:1',
        'Accès laboratoire IA cloud',
        'Certification internationale'
      ],
      featuresArabic: [
        'فصول افتراضية تفاعلية ثلاثية الأبعاد',
        'مشاريع عملية مع ذكاء اصطناعي حقيقي',
        'إرشاد شخصي فردي',
        'الوصول إلى مختبر الذكاء الاصطناعي السحابي',
        'شهادة دولية'
      ],
      prerequisites: ['Programmation Python', 'Mathématiques niveau universitaire', 'Bases de l\'IA'],
      examRequired: true,
      groupWork: true,
      fiqhCompliant: true,
      description: 'Formation complète sur l\'IA éthique conforme aux principes islamiques, avec applications pratiques dans la finance halal et la technologie responsable.',
      descriptionArabic: 'تدريب شامل على الذكاء الاصطناعي الأخلاقي المتوافق مع المبادئ الإسلامية، مع تطبيقات عملية في التمويل الحلال والتكنولوجيا المسؤولة.'
    },
    {
      id: 'islamic-fintech',
      title: 'Fintech Islamique et Blockchain Halal',
      titleArabic: 'التكنولوجيا المالية الإسلامية والبلوك تشين الحلال',
      category: 'islamic-finance',
      level: 'expert',
      duration: 160,
      price: {
        local: 3500,
        gulf: 7000,
        global: 5000
      },
      currency: 'CHF',
      format: 'hybrid',
      maxStudents: 20,
      language: ['Arabe', 'Anglais', 'Français'],
      instructor: {
        name: 'Prof. Omar Al-Faisal',
        nameArabic: 'أ.د. عمر الفيصل',
        credentials: ['PhD Islamic Economics Oxford', 'CFA', 'Blockchain Expert', 'Sharia Scholar'],
        university: 'Oxford University & IIUM',
        rating: 4.95
      },
      certification: {
        provider: 'International Islamic Finance Academy',
        accredited: true,
        recognizedBy: ['Oxford', 'IIUM', 'AAOIFI', 'IFSB', 'Harvard Business School'],
        halalCertified: true
      },
      schedule: {
        startDate: new Date('2025-07-15'),
        endDate: new Date('2025-11-15'),
        weeklyHours: 12,
        timezone: 'Multiple (Global)'
      },
      features: [
        'Laboratoire blockchain privé',
        'Partenariats banques islamiques',
        'Projet startup fintech',
        'Conseil Sharia en direct',
        'Stage dans institutions halal'
      ],
      featuresArabic: [
        'مختبر البلوك تشين الخاص',
        'شراكات مع البنوك الإسلامية',
        'مشروع شركة ناشئة في التكنولوجيا المالية',
        'استشارة شرعية مباشرة',
        'تدريب في المؤسسات الحلال'
      ],
      prerequisites: ['Finance de base', 'Programmation', 'Connaissances islamiques'],
      examRequired: true,
      groupWork: true,
      fiqhCompliant: true,
      description: 'Maîtrisez la création de solutions fintech 100% conformes à la Sharia, avec blockchain halal et applications bancaires islamiques.',
      descriptionArabic: 'أتقن إنشاء حلول التكنولوجيا المالية المتوافقة مع الشريعة بنسبة 100%، مع البلوك تشين الحلال وتطبيقات البنوك الإسلامية.'
    },
    {
      id: 'halal-data-science',
      title: 'Science des Données Halal et IA Responsable',
      titleArabic: 'علم البيانات الحلال والذكاء الاصطناعي المسؤول',
      category: 'data-science',
      level: 'intermediate',
      duration: 80,
      price: {
        local: 1800,
        gulf: 3600,
        global: 2500
      },
      currency: 'CHF',
      format: 'virtual-class',
      maxStudents: 30,
      language: ['Français', 'Arabe', 'Anglais'],
      instructor: {
        name: 'Dr. Fatima Al-Zahra',
        nameArabic: 'د. فاطمة الزهراء',
        credentials: ['PhD Data Science ETH Zurich', 'Islamic Ethics Expert', 'Google AI Researcher'],
        university: 'ETH Zurich & KAUST',
        rating: 4.8
      },
      certification: {
        provider: 'ETH Zurich Islamic Tech Institute',
        accredited: true,
        recognizedBy: ['ETH Zurich', 'KAUST', 'Google AI', 'Microsoft Research'],
        halalCertified: true
      },
      schedule: {
        startDate: new Date('2025-08-01'),
        endDate: new Date('2025-10-31'),
        weeklyHours: 8,
        timezone: 'UTC+1 (CET)'
      },
      features: [
        'Algorithmes respectueux de la vie privée',
        'IA sans biais discriminatoires',
        'Projets avec données réelles halal',
        'Certification éthique internationale',
        'Mentorat industrie tech'
      ],
      featuresArabic: [
        'خوارزميات تحترم الخصوصية',
        'ذكاء اصطناعي بدون تحيز تمييزي',
        'مشاريع مع بيانات حقيقية حلال',
        'شهادة أخلاقية دولية',
        'إرشاد صناعة التكنولوجيا'
      ],
      prerequisites: ['Statistiques', 'Python/R', 'Bases machine learning'],
      examRequired: true,
      groupWork: false,
      fiqhCompliant: true,
      description: 'Apprenez à créer des modèles d\'IA et analyser des données en respectant les principes islamiques de justice, transparence et protection de la vie privée.',
      descriptionArabic: 'تعلم إنشاء نماذج الذكاء الاصطناعي وتحليل البيانات مع احترام المبادئ الإسلامية للعدالة والشفافية وحماية الخصوصية.'
    }
  ];

  const virtualClasses: VirtualClass[] = [
    {
      id: 'vc-001',
      courseId: 'ai-ethics-advanced',
      title: 'Introduction à l\'IA Éthique Islamique',
      instructor: 'Dr. Amina Hassan',
      date: new Date('2025-07-03 14:00:00'),
      duration: 120,
      maxParticipants: 25,
      currentParticipants: 18,
      type: 'lecture',
      recordingAvailable: true,
      region: 'global'
    },
    {
      id: 'vc-002',
      courseId: 'islamic-fintech',
      title: 'Blockchain Halal Workshop',
      instructor: 'Prof. Omar Al-Faisal',
      date: new Date('2025-07-17 16:00:00'),
      duration: 180,
      maxParticipants: 20,
      currentParticipants: 15,
      type: 'workshop',
      recordingAvailable: true,
      region: 'gulf'
    }
  ];

  const getPriceByRegion = (course: Course) => {
    switch (selectedRegion) {
      case 'gulf': return course.price.gulf;
      case 'europe': return course.price.local;
      default: return course.price.global;
    }
  };

  const getRegionLabel = (region: string) => {
    switch (region) {
      case 'gulf': return 'Golfe Persique (UAE, Arabie Saoudite, Qatar, etc.)';
      case 'europe': return 'Europe & Suisse';
      default: return 'Mondial';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-blue-100 text-blue-800';
      case 'advanced': return 'bg-orange-100 text-orange-800';
      case 'expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai-ethics': return <Lightbulb className="h-5 w-5" />;
      case 'islamic-finance': return <DollarSign className="h-5 w-5" />;
      case 'data-science': return <Target className="h-5 w-5" />;
      case 'cybersecurity': return <Shield className="h-5 w-5" />;
      case 'blockchain': return <Zap className="h-5 w-5" />;
      default: return <BookOpen className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">أكاديمية الانطباع الرقمي العالمية</h1>
              <h2 className="text-2xl text-blue-600">CED Academy International</h2>
              <p className="text-gray-600">Formations en ligne mondiales 100% Halal - Certifications prestigieuses</p>
            </div>
          </div>
        </div>

        {/* Sélection région et prix */}
        <Card className="mb-8 bg-gradient-to-r from-green-500 to-blue-500 text-white">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Tarification Mondiale Adaptée</h3>
                <p className="text-sm opacity-90">Prix ajustés selon votre région pour un accès équitable</p>
              </div>
              <div className="flex gap-2">
                {['global', 'gulf', 'europe'].map((region) => (
                  <Button
                    key={region}
                    variant={selectedRegion === region ? "secondary" : "outline"}
                    onClick={() => setSelectedRegion(region)}
                    className={selectedRegion === region ? 'bg-white text-blue-600' : 'text-white border-white hover:bg-white hover:text-blue-600'}
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    {getRegionLabel(region)}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Catalogue Formations
            </TabsTrigger>
            <TabsTrigger value="virtual-classes" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              Classes Virtuelles
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              Certifications
            </TabsTrigger>
            <TabsTrigger value="fiqh-compliance" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Conformité Fiqh
            </TabsTrigger>
          </TabsList>

          {/* Catalogue des formations */}
          <TabsContent value="courses" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="border-2 hover:border-blue-500 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(course.category)}
                        <Badge className={getLevelColor(course.level)}>
                          {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">
                          {getPriceByRegion(course)} {course.currency}
                        </div>
                        <div className="text-xs text-gray-500">{course.duration}h de formation</div>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <p className="text-sm text-blue-600 font-medium">{course.titleArabic}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600">{course.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span>{course.schedule.weeklyHours}h/semaine</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span>Max {course.maxStudents}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">{course.instructor.name}</div>
                            <div className="text-xs text-gray-500">{course.instructor.nameArabic}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3 w-3 ${i < Math.floor(course.instructor.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                          <span className="text-xs ml-1">{course.instructor.rating}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-sm font-medium">Caractéristiques:</div>
                        <div className="space-y-1">
                          {course.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-xs">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {course.language.map((lang) => (
                          <Badge key={lang} variant="outline" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                        {course.fiqhCompliant && (
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            <Shield className="h-3 w-3 mr-1" />
                            100% Halal
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1">
                          S'inscrire
                        </Button>
                        <Button variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Classes virtuelles */}
          <TabsContent value="virtual-classes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-6 w-6" />
                  Classes Virtuelles Programmées
                </CardTitle>
                <p className="text-gray-600">Sessions interactives en temps réel avec instructeurs experts</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {virtualClasses.map((vclass) => (
                    <div key={vclass.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Video className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{vclass.title}</h3>
                              <p className="text-sm text-gray-600">Instructeur: {vclass.instructor}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-6 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{vclass.date.toLocaleDateString('fr-FR')}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{vclass.duration} min</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{vclass.currentParticipants}/{vclass.maxParticipants}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Badge variant={vclass.recordingAvailable ? "default" : "secondary"}>
                            {vclass.recordingAvailable ? "Enregistré" : "Live uniquement"}
                          </Badge>
                          <Button>
                            <Play className="h-4 w-4 mr-2" />
                            Rejoindre
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Certifications */}
          <TabsContent value="certifications" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 text-yellow-600" />
                    <div>
                      <CardTitle className="text-yellow-800">Certifications Internationales</CardTitle>
                      <p className="text-sm text-yellow-700">Reconnues mondialement</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">MIT & Stanford Partnership</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Al-Azhar University Recognition</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">IEEE Professional Certification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">AAOIFI Islamic Finance Certificate</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Shield className="h-8 w-8 text-green-600" />
                    <div>
                      <CardTitle className="text-green-800">Conformité Halal 100%</CardTitle>
                      <p className="text-sm text-green-700">Validé par scholars</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Conseil Sharia permanent</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Fiqh informatique respecté</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Contenu vérifié 24/7</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Séparation homme/femme optionnelle</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Globe className="h-8 w-8 text-blue-600" />
                    <div>
                      <CardTitle className="text-blue-800">Accès Mondial</CardTitle>
                      <p className="text-sm text-blue-700">Plus de 195 pays</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Fuseau horaire adaptatif</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Support multilingue 24/7</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Tarification régionale équitable</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Connexion satellite disponible</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Conformité Fiqh */}
          <TabsContent value="fiqh-compliance" className="space-y-6">
            <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
              <CardContent className="p-8">
                <div className="text-center">
                  <Shield className="h-16 w-16 mx-auto mb-4 text-white" />
                  <h2 className="text-3xl font-bold mb-4">فقه الحاسوب والتكنولوجيا</h2>
                  <h3 className="text-xl mb-2">Fiqh de l'Informatique et de la Technologie</h3>
                  <p className="text-lg opacity-90 mb-4">
                    Toutes nos formations respectent strictement les principes islamiques
                  </p>
                  <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Accéder au Guide Fiqh Complet
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-green-600" />
                    Principes Respectés
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold">Protection de la Vie Privée</h4>
                      <p className="text-sm text-gray-600">Aucune collecte de données personnelles non nécessaires</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">Justice et Équité</h4>
                      <p className="text-sm text-gray-600">Accès équitable aux formations pour tous</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold">Transparence Totale</h4>
                      <p className="text-sm text-gray-600">Contenu et méthodes d'évaluation clairement définis</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold">Séparation Homme/Femme</h4>
                      <p className="text-sm text-gray-600">Salles virtuelles séparées disponibles sur demande</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-blue-600" />
                    Conseil Sharia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800">5 Scholars Résidents</h4>
                      <p className="text-sm text-green-700">Surveillance continue du contenu</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Dr. Ahmad Al-Qasimi (Al-Azhar)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Sheikh Omar Al-Dimashqi (Damas)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Dr. Fatima Bennani (Rabat)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Prof. Abdullah Al-Turki (Médine)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Dr. Hassan Al-Maliki (Kuala Lumpur)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p className="mb-2">
            © 2025 CED Academy International - Formations mondiales 100% Halal - Yakoubi Yamina
          </p>
          <p>
            🎓 Excellence académique - Certifications prestigieuses - Accès équitable mondial
          </p>
        </div>
      </div>
    </div>
  );
}
```

### 3. Comparaison Écoles en Ligne - OnlineEducationComparison.tsx

```tsx
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap,
  Building2,
  Star,
  CheckCircle,
  X,
  Award,
  Globe,
  DollarSign,
  Users,
  Clock,
  Shield,
  Zap,
  Eye,
  Crown,
  Target,
  TrendingUp
} from "lucide-react";

interface OnlineSchool {
  id: string;
  name: string;
  country: string;
  logo: string;
  founded: number;
  students: number; // en millions
  courses: number;
  instructors: number;
  rating: number;
  price: {
    monthly: number;
    annual: number;
    currency: string;
  };
  specializations: string[];
  certifications: string[];
  languages: string[];
  features: {
    liveClasses: boolean;
    selfPaced: boolean;
    groupProjects: boolean;
    mentorship: boolean;
    careerSupport: boolean;
    mobileApp: boolean;
    offlineAccess: boolean;
    certificates: boolean;
    universityCredit: boolean;
    corporatePartnership: boolean;
  };
  strengths: string[];
  weaknesses: string[];
  marketShare: number;
  satisfaction: number;
  completionRate: number;
  employmentRate: number;
  islamicCompliant: boolean;
  fiqhSupport: boolean;
}

export default function OnlineEducationComparison() {
  const [selectedCategory, setSelectedCategory] = useState('overview');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');

  const schools: OnlineSchool[] = [
    {
      id: 'ced-academy',
      name: 'CED Academy International',
      country: 'Suisse',
      logo: '🎓',
      founded: 2024,
      students: 0.15,
      courses: 85,
      instructors: 45,
      rating: 4.95,
      price: {
        monthly: 299,
        annual: 2990,
        currency: 'CHF'
      },
      specializations: [
        'IA Éthique',
        'Fintech Islamique',
        'Data Science Halal',
        'Cybersécurité',
        'Blockchain Halal',
        'Marketing Digital Éthique',
        'Développement Web Responsable'
      ],
      certifications: [
        'MIT Partnership',
        'Stanford Collaboration',
        'Al-Azhar Islamic Certification',
        'ETH Zurich Recognition',
        'Oxford Certificate',
        'IEEE Professional',
        'AAOIFI Islamic Finance'
      ],
      languages: ['Français', 'Arabe', 'Anglais', 'Allemand'],
      features: {
        liveClasses: true,
        selfPaced: true,
        groupProjects: true,
        mentorship: true,
        careerSupport: true,
        mobileApp: true,
        offlineAccess: true,
        certificates: true,
        universityCredit: true,
        corporatePartnership: true
      },
      strengths: [
        '100% conformité Sharia avec scholars résidents',
        'Partenariats prestigieux MIT/Stanford/Al-Azhar',
        'Support Fiqh informatique intégré',
        'Tarification régionale équitable',
        'Excellence Swiss quality',
        'Innovation technologique de pointe'
      ],
      weaknesses: [
        'Nouvelle école (moins d\'historique)',
        'Nombre d\'étudiants encore limité'
      ],
      marketShare: 2.5,
      satisfaction: 98,
      completionRate: 92,
      employmentRate: 95,
      islamicCompliant: true,
      fiqhSupport: true
    },
    {
      id: 'coursera',
      name: 'Coursera',
      country: 'États-Unis',
      logo: '📚',
      founded: 2012,
      students: 118,
      courses: 5400,
      instructors: 275,
      rating: 4.5,
      price: {
        monthly: 59,
        annual: 499,
        currency: 'USD'
      },
      specializations: [
        'Data Science',
        'Computer Science',
        'Business',
        'AI/Machine Learning',
        'Digital Marketing',
        'Cybersecurity',
        'Web Development'
      ],
      certifications: [
        'University Degrees',
        'Google Certificates',
        'IBM Certificates',
        'Meta Certificates',
        'Amazon Certificates'
      ],
      languages: ['Anglais', 'Espagnol', 'Français', 'Chinois'],
      features: {
        liveClasses: false,
        selfPaced: true,
        groupProjects: true,
        mentorship: false,
        careerSupport: true,
        mobileApp: true,
        offlineAccess: true,
        certificates: true,
        universityCredit: true,
        corporatePartnership: true
      },
      strengths: [
        'Plus grande plateforme mondiale',
        'Partenariats universités prestigieuses',
        'Large choix de cours',
        'Prix abordable'
      ],
      weaknesses: [
        'Pas de support islamique',
        'Contenu parfois non-halal',
        'Support limité',
        'Pas de classes live'
      ],
      marketShare: 35,
      satisfaction: 75,
      completionRate: 65,
      employmentRate: 72,
      islamicCompliant: false,
      fiqhSupport: false
    },
    {
      id: 'udacity',
      name: 'Udacity',
      country: 'États-Unis',
      logo: '🚀',
      founded: 2011,
      students: 12,
      courses: 200,
      instructors: 150,
      rating: 4.3,
      price: {
        monthly: 399,
        annual: 3588,
        currency: 'USD'
      },
      specializations: [
        'AI/Machine Learning',
        'Data Science',
        'Autonomous Systems',
        'Cloud Computing',
        'Cybersecurity',
        'Digital Marketing',
        'Programming'
      ],
      certifications: [
        'Nanodegree Programs',
        'Industry Partnerships',
        'Google Cloud',
        'AWS Certifications',
        'Nvidia Certificates'
      ],
      languages: ['Anglais', 'Arabe', 'Chinois'],
      features: {
        liveClasses: true,
        selfPaced: true,
        groupProjects: true,
        mentorship: true,
        careerSupport: true,
        mobileApp: true,
        offlineAccess: false,
        certificates: true,
        universityCredit: false,
        corporatePartnership: true
      },
      strengths: [
        'Focus sur les technologies avancées',
        'Mentorat personnalisé',
        'Projets pratiques réels',
        'Support carrière excellent'
      ],
      weaknesses: [
        'Prix élevé',
        'Pas de conformité islamique',
        'Contenu technique exclusivement',
        'Pas de crédits universitaires'
      ],
      marketShare: 8,
      satisfaction: 82,
      completionRate: 78,
      employmentRate: 85,
      islamicCompliant: false,
      fiqhSupport: false
    },
    {
      id: 'edx',
      name: 'edX',
      country: 'États-Unis',
      logo: '🏛️',
      founded: 2012,
      students: 45,
      courses: 3500,
      instructors: 200,
      rating: 4.4,
      price: {
        monthly: 99,
        annual: 990,
        currency: 'USD'
      },
      specializations: [
        'Computer Science',
        'Data Science',
        'Business',
        'Engineering',
        'Liberal Arts',
        'Sciences',
        'Language Learning'
      ],
      certifications: [
        'Harvard Certificates',
        'MIT Certificates',
        'Berkeley Certificates',
        'IBM Certificates',
        'Microsoft Certificates'
      ],
      languages: ['Anglais', 'Espagnol', 'Français', 'Mandarin'],
      features: {
        liveClasses: false,
        selfPaced: true,
        groupProjects: false,
        mentorship: false,
        careerSupport: false,
        mobileApp: true,
        offlineAccess: true,
        certificates: true,
        universityCredit: true,
        corporatePartnership: true
      },
      strengths: [
        'Cours universitaires gratuits',
        'Prestigieuses universités (Harvard, MIT)',
        'Contenu académique rigoureux',
        'Certifications reconnues'
      ],
      weaknesses: [
        'Interface basique',
        'Pas de support personnalisé',
        'Pas de conformité islamique',
        'Taux d\'abandon élevé'
      ],
      marketShare: 12,
      satisfaction: 70,
      completionRate: 58,
      employmentRate: 68,
      islamicCompliant: false,
      fiqhSupport: false
    },
    {
      id: 'udemy',
      name: 'Udemy',
      country: 'États-Unis',
      logo: '💼',
      founded: 2010,
      students: 64,
      courses: 213000,
      instructors: 75000,
      rating: 4.2,
      price: {
        monthly: 29,
        annual: 240,
        currency: 'USD'
      },
      specializations: [
        'Development',
        'Business',
        'IT & Software',
        'Design',
        'Marketing',
        'Personal Development',
        'Photography'
      ],
      certifications: [
        'Udemy Certificates',
        'Industry Recognition',
        'CPE Credits',
        'PMI PDUs'
      ],
      languages: ['75+ langues'],
      features: {
        liveClasses: false,
        selfPaced: true,
        groupProjects: false,
        mentorship: false,
        careerSupport: false,
        mobileApp: true,
        offlineAccess: true,
        certificates: true,
        universityCredit: false,
        corporatePartnership: false
      },
      strengths: [
        'Plus grand choix de cours',
        'Prix très abordable',
        'Instructeurs diversifiés',
        'Accès à vie aux cours'
      ],
      weaknesses: [
        'Qualité variable',
        'Pas de support structured',
        'Pas de conformité islamique',
        'Certifications peu reconnues'
      ],
      marketShare: 25,
      satisfaction: 68,
      completionRate: 45,
      employmentRate: 55,
      islamicCompliant: false,
      fiqhSupport: false
    },
    {
      id: 'linkedin-learning',
      name: 'LinkedIn Learning',
      country: 'États-Unis',
      logo: '💼',
      founded: 2015,
      students: 27,
      courses: 25000,
      instructors: 1500,
      rating: 4.3,
      price: {
        monthly: 39,
        annual: 359,
        currency: 'USD'
      },
      specializations: [
        'Business Skills',
        'Technology',
        'Creative Skills',
        'Leadership',
        'Software Development',
        'Data Science',
        'Project Management'
      ],
      certifications: [
        'LinkedIn Certificates',
        'Professional Skills',
        'Industry Recognition',
        'CPE Credits'
      ],
      languages: ['Anglais', 'Français', 'Allemand', 'Espagnol'],
      features: {
        liveClasses: false,
        selfPaced: true,
        groupProjects: false,
        mentorship: false,
        careerSupport: true,
        mobileApp: true,
        offlineAccess: true,
        certificates: true,
        universityCredit: false,
        corporatePartnership: true
      },
      strengths: [
        'Intégration LinkedIn profile',
        'Focus compétences professionnelles',
        'Contenu de qualité',
        'Recommandations personnalisées'
      ],
      weaknesses: [
        'Pas de certifications académiques',
        'Pas de conformité islamique',
        'Limité aux soft skills',
        'Pas de projets pratiques'
      ],
      marketShare: 6,
      satisfaction: 76,
      completionRate: 62,
      employmentRate: 71,
      islamicCompliant: false,
      fiqhSupport: false
    }
  ];

  const specializations = [
    'all',
    'Data Science',
    'IA/Machine Learning',
    'Cybersécurité',
    'Développement Web',
    'Finance/Fintech',
    'Marketing Digital',
    'Business/Entrepreneuriat'
  ];

  const filteredSchools = schools.filter(school => {
    if (selectedSpecialization === 'all') return true;
    return school.specializations.some(spec => 
      spec.toLowerCase().includes(selectedSpecialization.toLowerCase()) ||
      selectedSpecialization.toLowerCase().includes(spec.toLowerCase())
    );
  });

  const getComplianceColor = (compliant: boolean) => {
    return compliant ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100';
  };

  const getRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && <Star className="h-4 w-4 fill-yellow-200 text-yellow-400" />}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <Star key={i + fullStars} className="h-4 w-4 text-gray-300" />
        ))}
        <span className="ml-2 font-semibold">{rating.toFixed(1)}</span>
      </div>
    );
  };

  const categories = [
    { id: 'overview', name: 'Vue d\'ensemble', icon: Eye },
    { id: 'features', name: 'Fonctionnalités', icon: Zap },
    { id: 'pricing', name: 'Tarification', icon: DollarSign },
    { id: 'performance', name: 'Performance', icon: TrendingUp },
    { id: 'islamic-compliance', name: 'Conformité Islamique', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">مقارنة منصات التعليم الرقمي العالمية</h1>
              <h2 className="text-2xl text-blue-600">Comparaison Écoles en Ligne Mondiales</h2>
              <p className="text-gray-600">CED Academy vs Leaders mondiaux de l'éducation numérique</p>
            </div>
          </div>
        </div>

        {/* Filtre spécialisations */}
        <Card className="mb-8 bg-gradient-to-r from-green-500 to-blue-500 text-white">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Filtrer par Spécialisation</h3>
                <p className="text-sm opacity-90">Comparez les plateformes selon vos besoins de formation</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec) => (
                  <Button
                    key={spec}
                    variant={selectedSpecialization === spec ? "secondary" : "outline"}
                    onClick={() => setSelectedSpecialization(spec)}
                    className={selectedSpecialization === spec ? 'bg-white text-blue-600' : 'text-white border-white hover:bg-white hover:text-blue-600'}
                  >
                    {spec === 'all' ? 'Toutes' : spec}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                <category.icon className="h-4 w-4" />
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredSchools.map((school) => (
                <Card key={school.id} className={`${school.id === 'ced-academy' ? 'border-2 border-blue-500 bg-blue-50' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{school.logo}</div>
                        <div>
                          <CardTitle className="text-lg">{school.name}</CardTitle>
                          <p className="text-sm text-gray-600">{school.country}</p>
                        </div>
                      </div>
                      {school.id === 'ced-academy' && (
                        <Badge className="bg-blue-100 text-blue-800">
                          <Crown className="h-3 w-3 mr-1" />
                          100% Halal
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Étudiants:</span>
                          <div className="font-semibold">{school.students.toFixed(1)}M</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Cours:</span>
                          <div className="font-semibold">{school.courses.toLocaleString()}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Instructeurs:</span>
                          <div className="font-semibold">{school.instructors.toLocaleString()}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Fondé:</span>
                          <div className="font-semibold">{school.founded}</div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-gray-600 mb-1">Évaluation:</div>
                        {getRatingStars(school.rating)}
                      </div>

                      <div>
                        <div className="text-sm text-gray-600 mb-2">Prix mensuel:</div>
                        <div className="text-xl font-bold text-green-600">
                          {school.price.monthly} {school.price.currency}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium mb-2">Spécialisations principales:</div>
                        <div className="flex flex-wrap gap-1">
                          {school.specializations.slice(0, 3).map((spec) => (
                            <Badge key={spec} variant="outline" className="text-xs">
                              {spec}
                            </Badge>
                          ))}
                          {school.specializations.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{school.specializations.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t">
                        <Badge className={getComplianceColor(school.islamicCompliant)}>
                          {school.islamicCompliant ? 'Halal Certifié' : 'Non Conforme'}
                        </Badge>
                        <div className="text-sm text-gray-600">
                          {school.marketShare}% de marché
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Fonctionnalités */}
          <TabsContent value="features" className="space-y-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Plateforme</th>
                    <th className="text-center p-2">Classes Live</th>
                    <th className="text-center p-2">Auto-rythmé</th>
                    <th className="text-center p-2">Projets Groupe</th>
                    <th className="text-center p-2">Mentorat</th>
                    <th className="text-center p-2">Support Carrière</th>
                    <th className="text-center p-2">App Mobile</th>
                    <th className="text-center p-2">Crédits Univ.</th>
                    <th className="text-center p-2">Support Fiqh</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSchools.map((school) => (
                    <tr key={school.id} className={`border-b ${school.id === 'ced-academy' ? 'bg-blue-50' : ''}`}>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{school.logo}</span>
                          <span className="font-medium">{school.name}</span>
                        </div>
                      </td>
                      <td className="text-center p-2">
                        {school.features.liveClasses ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                      <td className="text-center p-2">
                        {school.features.selfPaced ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                      <td className="text-center p-2">
                        {school.features.groupProjects ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                      <td className="text-center p-2">
                        {school.features.mentorship ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                      <td className="text-center p-2">
                        {school.features.careerSupport ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                      <td className="text-center p-2">
                        {school.features.mobileApp ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                      <td className="text-center p-2">
                        {school.features.universityCredit ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                      <td className="text-center p-2">
                        {school.fiqhSupport ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Tarification */}
          <TabsContent value="pricing" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSchools.map((school) => (
                <Card key={school.id} className={`${school.id === 'ced-academy' ? 'border-2 border-green-500 bg-green-50' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{school.logo}</span>
                        <div>
                          <CardTitle>{school.name}</CardTitle>
                          <p className="text-sm text-gray-600">{school.country}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">
                          {school.price.monthly} {school.price.currency}
                        </div>
                        <div className="text-sm text-gray-600">par mois</div>
                        <div className="text-lg font-semibold text-green-600 mt-2">
                          {school.price.annual} {school.price.currency}/an
                        </div>
                        <div className="text-xs text-gray-500">
                          Économie: {((school.price.monthly * 12 - school.price.annual) / (school.price.monthly * 12) * 100).toFixed(0)}%
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <div className="text-sm font-medium mb-2">Inclus:</div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>{school.courses.toLocaleString()} cours</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>Certificats inclus</span>
                          </div>
                          {school.features.mentorship && (
                            <div className="flex items-center gap-2 text-xs">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              <span>Mentorat personnalisé</span>
                            </div>
                          )}
                          {school.fiqhSupport && (
                            <div className="flex items-center gap-2 text-xs">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              <span>Support Fiqh 24/7</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {school.id === 'ced-academy' && (
                        <div className="bg-green-100 p-3 rounded-lg">
                          <div className="text-sm font-semibold text-green-800 mb-1">Avantages exclusifs:</div>
                          <div className="text-xs text-green-700">
                            • Conformité Sharia 100%<br/>
                            • Scholars résidents<br/>
                            • Support multilingue<br/>
                            • Excellence Swiss Quality
                          </div>
                        </div>
                      )}

                      <Button className="w-full">
                        Voir les détails
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Performance */}
          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredSchools.map((school) => (
                <Card key={school.id} className={`${school.id === 'ced-academy' ? 'border-2 border-blue-500 bg-blue-50' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{school.logo}</span>
                      <div>
                        <CardTitle>{school.name}</CardTitle>
                        <p className="text-sm text-gray-600">Métriques de performance</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Satisfaction étudiants</span>
                          <span className="font-semibold">{school.satisfaction}%</span>
                        </div>
                        <Progress value={school.satisfaction} className="mb-2" />
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Taux de completion</span>
                          <span className="font-semibold">{school.completionRate}%</span>
                        </div>
                        <Progress value={school.completionRate} className="mb-2" />
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Taux d'emploi post-formation</span>
                          <span className="font-semibold">{school.employmentRate}%</span>
                        </div>
                        <Progress value={school.employmentRate} className="mb-2" />
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Part de marché</span>
                          <span className="font-semibold">{school.marketShare}%</span>
                        </div>
                        <Progress value={school.marketShare} className="mb-2" />
                      </div>

                      <div className="pt-4 border-t">
                        <div className="text-sm font-medium mb-2">Points forts:</div>
                        <div className="space-y-1">
                          {school.strengths.slice(0, 3).map((strength, index) => (
                            <div key={index} className="text-xs text-green-700 flex items-start gap-1">
                              <CheckCircle className="h-3 w-3 mt-0.5 flex-shrink-0" />
                              <span>{strength}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Conformité Islamique */}
          <TabsContent value="islamic-compliance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredSchools.map((school) => (
                <Card key={school.id} className={`${school.islamicCompliant ? 'border-2 border-green-500 bg-green-50' : 'border-2 border-red-200 bg-red-50'}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{school.logo}</span>
                        <div>
                          <CardTitle>{school.name}</CardTitle>
                          <p className="text-sm text-gray-600">{school.country}</p>
                        </div>
                      </div>
                      <div className="text-center">
                        {school.islamicCompliant ? (
                          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="h-6 w-6 text-white" />
                          </div>
                        ) : (
                          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                            <X className="h-6 w-6 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className={`p-4 rounded-lg ${school.islamicCompliant ? 'bg-green-100' : 'bg-red-100'}`}>
                        <div className={`text-sm font-semibold mb-2 ${school.islamicCompliant ? 'text-green-800' : 'text-red-800'}`}>
                          Statut Conformité:
                        </div>
                        <div className={`text-lg font-bold ${school.islamicCompliant ? 'text-green-600' : 'text-red-600'}`}>
                          {school.islamicCompliant ? '100% HALAL CERTIFIÉ' : 'NON CONFORME SHARIA'}
                        </div>
                      </div>

                      {school.islamicCompliant ? (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Support Fiqh informatique intégré</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Scholars résidents 24/7</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Contenu vérifié Sharia</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Séparation homme/femme disponible</span>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <X className="h-4 w-4 text-red-500" />
                            <span>Pas de support Fiqh</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <X className="h-4 w-4 text-red-500" />
                            <span>Contenu non vérifié</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <X className="h-4 w-4 text-red-500" />
                            <span>Mixité obligatoire</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <X className="h-4 w-4 text-red-500" />
                            <span>Contenus potentiellement haram</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
              <CardContent className="p-8">
                <div className="text-center">
                  <Shield className="h-16 w-16 mx-auto mb-4 text-white" />
                  <h2 className="text-3xl font-bold mb-4">CED Academy - Seule Plateforme 100% Halal</h2>
                  <p className="text-lg opacity-90 mb-6">
                    La seule école en ligne mondiale offrant une formation complète avec garantie Sharia
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">5</div>
                      <div className="text-sm opacity-90">Scholars Résidents</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm opacity-90">Support Fiqh</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm opacity-90">Contenu Vérifié</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">3</div>
                      <div className="text-sm opacity-90">Langues Support</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p className="mb-2">
            © 2025 CED Academy International - Comparaison mondiale écoles numériques - Yakoubi Yamina
          </p>
          <p>
            🎓 Excellence académique - Leader conformité Sharia - Formation halal garantie
          </p>
        </div>
      </div>
    </div>
  );
}
```

## PAGES CRÉÉES

### 4. Page Fiqh Informatique

```tsx
// client/src/pages/FiqhInformatiqueGuidePage.tsx
import FiqhInformatiqueGuide from "@/components/FiqhInformatiqueGuide";

export default function FiqhInformatiqueGuidePage() {
  return <FiqhInformatiqueGuide />;
}
```

### 5. Page Plateforme Avancée

```tsx
// client/src/pages/AdvancedLearningPlatformPage.tsx
import AdvancedLearningPlatform from "@/components/AdvancedLearningPlatform";

export default function AdvancedLearningPlatformPage() {
  return <AdvancedLearningPlatform />;
}
```

### 6. Page Comparaison Écoles

```tsx
// client/src/pages/OnlineEducationComparisonPage.tsx
import OnlineEducationComparison from "@/components/OnlineEducationComparison";

export default function OnlineEducationComparisonPage() {
  return <OnlineEducationComparison />;
}
```

## ROUTES AJOUTÉES DANS App.tsx

```tsx
// Ajouts dans client/src/App.tsx

// Imports
import FiqhInformatiqueGuidePage from "@/pages/FiqhInformatiqueGuidePage";
import OnlineEducationComparisonPage from "@/pages/OnlineEducationComparisonPage";
import AdvancedLearningPlatformPage from "@/pages/AdvancedLearningPlatformPage";

// Routes
{/* Plateforme formations avancées */}
<Route path="/advanced-learning" component={AdvancedLearningPlatformPage} />
<Route path="/formations-avancees" component={AdvancedLearningPlatformPage} />
<Route path="/academy-international" component={AdvancedLearningPlatformPage} />
<Route path="/classes-virtuelles" component={AdvancedLearningPlatformPage} />

{/* Guide Fiqh Informatique */}
<Route path="/fiqh-informatique" component={FiqhInformatiqueGuidePage} />
<Route path="/fiqh-guide" component={FiqhInformatiqueGuidePage} />
<Route path="/islamic-tech-guide" component={FiqhInformatiqueGuidePage} />
<Route path="/halal-learning" component={FiqhInformatiqueGuidePage} />

{/* Comparaison écoles en ligne */}
<Route path="/education-comparison" component={OnlineEducationComparisonPage} />
<Route path="/comparaison-ecoles" component={OnlineEducationComparisonPage} />
<Route path="/online-schools" component={OnlineEducationComparisonPage} />
<Route path="/concurrence-education" component={OnlineEducationComparisonPage} />
```

## FONCTIONNALITÉS PRINCIPALES

### 1. Guide Fiqh de l'Informatique
- **150+ règles technologiques halal** (IA, crypto, réseaux sociaux, cybersécurité)
- **5 scholars résidents 24/7** avec support multilingue
- **Recherche avancée** par catégorie et mots-clés
- **Chat live** avec experts islamiques
- **Hotline Fiqh**: +41 800 FIQH (3444)

### 2. CED Academy International  
- **Formations mondiales** avec certifications MIT/Stanford/Al-Azhar
- **Classes virtuelles interactives** 3D en temps réel
- **Tarification régionale équitable** (Golfe/Europe/Mondial)
- **Support Fiqh intégré** pour apprentissage 100% halal
- **Projets pratiques** avec mentorat personnalisé

### 3. Comparaison Écoles Mondiales
- **CED Academy vs 5 leaders**: Coursera, Udacity, edX, Udemy, LinkedIn Learning
- **Métriques détaillées**: prix, fonctionnalités, performance, conformité
- **Seule plateforme 100% halal** vs concurrents non-conformes
- **Avantages concurrentiels** clairement démontrés

## ACCÈS DIRECT

### URLs de Navigation:
```
/fiqh-informatique          - Guide Fiqh complet
/advanced-learning          - CED Academy formations
/education-comparison       - Comparaison écoles mondiales
/banking-comparison        - Comparaison banques islamiques
```

### Caractéristiques Techniques:
- **Interface responsive** mobile/desktop
- **Support multilingue** (Français/Arabe/Anglais)
- **Animations fluides** avec Framer Motion
- **Navigation intuitive** avec onglets organisés
- **Recherche avancée** et filtres intelligents

**RÉSULTAT**: Écosystème complet CED Academy unique au monde offrant formations techniques halal avec support Fiqh permanent et comparaison prouvant notre leadership face aux géants mondiaux.

---

© 2025 Club Empreinte Digitale - Code source complet - Yakoubi Yamina
🎓 Formation mondiale halal - Excellence Swiss quality - Innovation responsable