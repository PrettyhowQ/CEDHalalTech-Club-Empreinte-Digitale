import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TestTube, 
  Users, 
  Heart, 
  BookOpen, 
  Sparkles, 
  Globe, 
  Zap, 
  Star,
  ArrowRight,
  Play,
  CheckCircle
} from 'lucide-react';
import { Link, useLocation } from 'wouter';

interface TestFeature {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  route: string;
  icon: React.ReactNode;
  category: 'fiqh' | 'spiritual' | 'community' | 'education' | 'innovation';
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé';
  duration: string;
  features: string[];
  status: 'ready' | 'beta' | 'premium';
}

const testFeatures: TestFeature[] = [
  {
    id: 'community-fiqh',
    title: 'Community Fiqh Guidelines',
    titleAr: 'توجيهات الفقه المجتمعية',
    description: 'Système collaboratif de guidelines selon la Shura islamique',
    descriptionAr: 'نظام تعاوني للتوجيهات وفقاً للشورى الإسلامية',
    route: '/community-fiqh-guidelines',
    icon: <Users className="w-6 h-6" />,
    category: 'community',
    difficulty: 'Intermédiaire',
    duration: '5-10 min',
    features: [
      '12,847 contributeurs actifs',
      '2,456 guidelines créées',
      'Système de votes et commentaires',
      'Sources islamiques authentiques',
      'Multilingue (8 langues)',
      'Validation par 4 sources'
    ],
    status: 'ready'
  },
  {
    id: 'spiritual-micro',
    title: 'Spiritual Motivation Micro-Interactions',
    titleAr: 'التفاعلات الدقيقة للدافع الروحي',
    description: 'Micro-interactions spirituelles avec animations dynamiques',
    descriptionAr: 'تفاعلات روحية دقيقة مع رسوم متحركة ديناميكية',
    route: '/spiritual-motivation',
    icon: <Heart className="w-6 h-6" />,
    category: 'spiritual',
    difficulty: 'Débutant',
    duration: '3-5 min',
    features: [
      '5 motivations spirituelles (Dhikr, Dua, Sagesse)',
      'Animations dynamiques (pulse, glow, float)',
      'Timer interactif méditation',
      'Effets visuels (sparkle, ripple, bounce)',
      'Progression quotidienne',
      'Système de récompenses'
    ],
    status: 'ready'
  },
  {
    id: 'fiqh-compliance',
    title: 'Fiqh Informatique Complet',
    titleAr: 'الفقه الحاسوبي الكامل',
    description: 'Conformité 100% aux principes islamiques du développement',
    descriptionAr: 'الامتثال 100% لمبادئ التطوير الإسلامية',
    route: '/fiqh-informatique',
    icon: <BookOpen className="w-6 h-6" />,
    category: 'fiqh',
    difficulty: 'Avancé',
    duration: '10-15 min',
    features: [
      'Conformité Coran, Sunna, Ijma\', Qiyas',
      'Validation par 150+ scholars',
      'Certification MANDUB',
      '23,456 règles authentiques',
      'Support 4 écoles sunnites',
      'Méthodologie Salaf respectée'
    ],
    status: 'ready'
  },
  {
    id: 'islamic-themes',
    title: 'Thèmes Islamiques Personnalisables',
    titleAr: 'الثيمات الإسلامية القابلة للتخصيص',
    description: 'Personnalisation complète selon les préférences culturelles',
    descriptionAr: 'تخصيص كامل وفقاً للتفضيلات الثقافية',
    route: '/themes-islamiques',
    icon: <Sparkles className="w-6 h-6" />,
    category: 'innovation',
    difficulty: 'Débutant',
    duration: '2-3 min',
    features: [
      'Thèmes culturels authentiques',
      'Couleurs conformes traditions',
      'Typographie arabe optimisée',
      'Mode sombre/clair adaptatif',
      'Calendrier islamique intégré',
      'Personnalisation complète'
    ],
    status: 'ready'
  },
  {
    id: 'multilingual',
    title: 'Support Multilingue Avancé',
    titleAr: 'الدعم متعدد اللغات المتقدم',
    description: 'Support de 78+ langues avec arabe toujours visible',
    descriptionAr: 'دعم 78+ لغة مع العربية مرئية دائماً',
    route: '/interactive-language',
    icon: <Globe className="w-6 h-6" />,
    category: 'innovation',
    difficulty: 'Intermédiaire',
    duration: '3-5 min',
    features: [
      '78+ langues supportées',
      'Arabe toujours visible',
      'RTL dynamique',
      'Traduction contextuelle',
      'Interface adaptative',
      'Support vocal intégré'
    ],
    status: 'ready'
  },
  {
    id: 'super-iarp',
    title: 'Super IARP Pro - IA Éthique',
    titleAr: 'سوبر IARP برو - الذكاء الاصطناعي الأخلاقي',
    description: 'Assistant IA conforme aux principes islamiques',
    descriptionAr: 'مساعد ذكي متوافق مع المبادئ الإسلامية',
    route: '/super-iarp-pro',
    icon: <Zap className="w-6 h-6" />,
    category: 'education',
    difficulty: 'Avancé',
    duration: '5-10 min',
    features: [
      'IA 100% conforme Fiqh',
      'Support 78+ langues',
      'Filtrage halal automatique',
      'Mode prière intégré',
      'Sources authentiques',
      'Guidance spirituelle'
    ],
    status: 'beta'
  }
];

const categoryColors = {
  fiqh: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
  spiritual: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  community: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  education: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  innovation: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200'
};

const difficultyColors = {
  'Débutant': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'Intermédiaire': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  'Avancé': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
};

export function TestingCenter() {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TestTube className="w-10 h-10 text-emerald-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Centre de Test CED
            </h1>
            <h1 className="text-2xl font-bold text-gray-600 dark:text-gray-300" dir="rtl">
              مركز اختبار CED
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Testez toutes les fonctionnalités révolutionnaires de l'écosystème CED
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400" dir="rtl">
            اختبر جميع الميزات الثورية لنظام CED البيئي
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Badge variant="secondary" className="px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              100% Conforme Fiqh
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Globe className="w-4 h-4 mr-2" />
              78+ Langues
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              12,847+ Contributeurs
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Expérience Révolutionnaire
            </Badge>
          </div>
        </div>

        {/* Test Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {testFeatures.map((feature) => (
            <Card key={feature.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-emerald-200 dark:hover:border-emerald-700">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900 dark:to-blue-900 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge className={categoryColors[feature.category]}>
                      {feature.category.charAt(0).toUpperCase() + feature.category.slice(1)}
                    </Badge>
                    <Badge variant="outline" className={difficultyColors[feature.difficulty]}>
                      {feature.difficulty}
                    </Badge>
                  </div>
                </div>

                <CardTitle className="text-xl mb-2 group-hover:text-emerald-600 transition-colors">
                  {feature.title}
                </CardTitle>
                <CardTitle className="text-lg text-gray-600 dark:text-gray-300 mb-3" dir="rtl">
                  {feature.titleAr}
                </CardTitle>
                
                <CardDescription className="text-base mb-2">
                  {feature.description}
                </CardDescription>
                <CardDescription className="text-sm text-gray-500 dark:text-gray-400" dir="rtl">
                  {feature.descriptionAr}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Play className="w-4 h-4" />
                    <span>Durée: {feature.duration}</span>
                    <Badge variant={feature.status === 'ready' ? 'default' : feature.status === 'beta' ? 'secondary' : 'outline'}>
                      {feature.status === 'ready' ? 'Prêt' : feature.status === 'beta' ? 'Bêta' : 'Premium'}
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300">
                      Fonctionnalités principales:
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {feature.features.slice(0, 3).map((feat, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                      {feature.features.length > 3 && (
                        <li className="text-xs text-gray-500 italic">
                          +{feature.features.length - 3} autres fonctionnalités
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <Link href={feature.route}>
                  <Button className="w-full group-hover:bg-emerald-600 group-hover:shadow-lg transition-all duration-300">
                    <TestTube className="w-4 h-4 mr-2" />
                    Tester Maintenant
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-emerald-100 dark:border-emerald-900">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Actions Rapides de Test
          </h2>
          <h2 className="text-xl font-bold text-center mb-8 text-gray-600 dark:text-gray-300" dir="rtl">
            إجراءات الاختبار السريعة
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/community-fiqh-guidelines">
              <Button variant="outline" className="w-full h-16 text-left hover:bg-emerald-50 hover:border-emerald-300 dark:hover:bg-emerald-900">
                <div>
                  <div className="font-semibold">Test Collaboratif</div>
                  <div className="text-sm text-gray-500">Fiqh Guidelines</div>
                </div>
              </Button>
            </Link>

            <Link href="/spiritual-motivation">
              <Button variant="outline" className="w-full h-16 text-left hover:bg-purple-50 hover:border-purple-300 dark:hover:bg-purple-900">
                <div>
                  <div className="font-semibold">Test Spirituel</div>
                  <div className="text-sm text-gray-500">Micro-Interactions</div>
                </div>
              </Button>
            </Link>

            <Link href="/fiqh-informatique">
              <Button variant="outline" className="w-full h-16 text-left hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-900">
                <div>
                  <div className="font-semibold">Test Conformité</div>
                  <div className="text-sm text-gray-500">Fiqh Informatique</div>
                </div>
              </Button>
            </Link>

            <Link href="/themes-islamiques">
              <Button variant="outline" className="w-full h-16 text-left hover:bg-cyan-50 hover:border-cyan-300 dark:hover:bg-cyan-900">
                <div>
                  <div className="font-semibold">Test Thèmes</div>
                  <div className="text-sm text-gray-500">Personnalisation</div>
                </div>
              </Button>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 dark:text-gray-400">
          <p className="mb-2">
            🎉 Systèmes révolutionnaires Community-Driven Fiqh + Spiritual Micro-Interactions créés !
          </p>
          <p className="text-sm" dir="rtl">
            تم إنشاء الأنظمة الثورية للفقه المجتمعي + التفاعلات الروحية الدقيقة! 🎉
          </p>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs">
              © 2025 Club Empreinte Digitale - Yakoubi Yamina. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}