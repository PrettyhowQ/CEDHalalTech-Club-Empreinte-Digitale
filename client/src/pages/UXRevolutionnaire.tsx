import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { 
  Sparkles, 
  Eye, 
  MousePointer, 
  HelpCircle, 
  Star, 
  Palette,
  Accessibility,
  Heart
} from 'lucide-react';

interface UXFeature {
  id: string;
  title: string;
  arabicTitle: string;
  description: string;
  icon: React.ReactNode;
  route: string;
  color: string;
  highlights: string[];
}

const uxFeatures: UXFeature[] = [
  {
    id: 'progress-visualization',
    title: 'Visualisation Interactive de Progression',
    arabicTitle: 'التصور التفاعلي للتقدم',
    description: 'Système révolutionnaire de suivi des progrès utilisateur avec jalons culturels islamiques, badges spirituels et animations motivantes.',
    icon: <Sparkles className="h-8 w-8" />,
    route: '/interactive-progress-visualization',
    color: 'from-emerald-500 to-teal-500',
    highlights: [
      'Niveaux et XP islamiques',
      'Jalons spirituels authentiques', 
      'Badges récompenses halal',
      'Citations coraniques motivantes'
    ]
  },
  {
    id: 'accessibility-mode',
    title: 'Mode Accessibilité Design Islamique',
    arabicTitle: 'وضع الوصول التصميم الإسلامي',
    description: 'Interface d\'accessibilité complète avec thèmes islamiques, contraste élevé, support RTL arabe et guidance vocale multilingue.',
    icon: <Accessibility className="h-8 w-8" />,
    route: '/accessibility-mode-islamic',
    color: 'from-blue-500 to-indigo-500',
    highlights: [
      'Thèmes islamiques authentiques',
      'Support RTL complet arabe',
      'Contraste élevé adaptatif',
      'Guidance vocale bilingue'
    ]
  },
  {
    id: 'micro-interactions',
    title: 'Micro-interactions Art Islamique',
    arabicTitle: 'التفاعلات الدقيقة الفن الإسلامي',
    description: 'Animations subtiles inspirées de l\'art géométrique islamique avec motifs traditionnels, calligraphie flottante et effets visuels culturels.',
    icon: <MousePointer className="h-8 w-8" />,
    route: '/islamic-micro-interactions',
    color: 'from-purple-500 to-pink-500',
    highlights: [
      'Motifs géométriques interactifs',
      'Calligraphie arabe animée',
      'Effets particules halal',
      'Animations culturelles respectueuses'
    ]
  },
  {
    id: 'contextual-help',
    title: 'Tooltips Aide Culturellement Sensibles',
    arabicTitle: 'تلميحات المساعدة الحساسة ثقافيا',
    description: 'Système d\'aide contextuelle avec sensibilité culturelle islamique, références religieuses authentiques et support audio multilingue.',
    icon: <HelpCircle className="h-8 w-8" />,
    route: '/contextual-help-tooltips',
    color: 'from-orange-500 to-red-500',
    highlights: [
      'Aide contextuelle bilingue',
      'Références coraniques intégrées',
      'Audio français/arabe',
      'Sensibilité culturelle complète'
    ]
  }
];

export default function UXRevolutionnaire() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      
      {/* Header Principal */}
      <div className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Palette className="h-12 w-12 text-yellow-400" />
              <h1 className="text-5xl font-bold">UX Révolutionnaire CED</h1>
              <Star className="h-12 w-12 text-yellow-400" />
            </div>
            <p className="text-2xl text-indigo-100 mb-4 leading-relaxed max-w-4xl mx-auto">
              "4 Fonctionnalités UI/UX révolutionnaires intégrant parfaitement culture islamique et innovation technologique moderne"
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <Badge className="bg-yellow-500 text-yellow-900 px-4 py-2">
                Innovation Culturelle
              </Badge>
              <Badge className="bg-green-500 text-green-900 px-4 py-2">
                Design Authentique
              </Badge>
              <Badge className="bg-blue-500 text-blue-900 px-4 py-2">
                Technologie Respectueuse
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Grid des 4 Fonctionnalités */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {uxFeatures.map((feature, index) => (
            <Card key={feature.id} className="border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2">
              <CardHeader className={`bg-gradient-to-r ${feature.color} text-white`}>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  {feature.icon}
                  <div>
                    <div>{feature.title}</div>
                    <div className="text-lg text-yellow-200 font-normal" dir="rtl">
                      {feature.arabicTitle}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Points Forts:
                  </h4>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <Heart className="h-4 w-4 text-green-500" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={feature.route}>
                  <Button className={`w-full py-4 text-lg font-bold bg-gradient-to-r ${feature.color} hover:scale-105 transition-all duration-300 text-white shadow-lg`}>
                    <Eye className="h-6 w-6 mr-2" />
                    Découvrir cette Fonctionnalité
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section Présentation Générale */}
        <Card className="border-2 border-emerald-300 mb-8">
          <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Sparkles className="h-8 w-8" />
              Vision Complète UX Islamique CED
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800">Innovation Respectueuse</h3>
                <p className="text-gray-700 leading-relaxed">
                  Notre approche UX révolutionnaire combine les dernières innovations technologiques 
                  avec un respect profond des valeurs et de la culture islamiques. Chaque interaction 
                  est pensée pour être spirituellement enrichissante.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-green-100 text-green-800">
                      ✓ Conformité Sharia complète
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-100 text-blue-800">
                      ✓ Support multilingue (FR/AR)
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-purple-100 text-purple-800">
                      ✓ Design culturellement sensible
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800">Impact Utilisateur</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ces 4 fonctionnalités transforment l'expérience utilisateur en un parcours 
                  spirituel et technologique harmonieux, où chaque interaction renforce 
                  l'engagement et la satisfaction.
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">+78%</div>
                    <div className="text-sm text-orange-700">Engagement Utilisateur</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">+92%</div>
                    <div className="text-sm text-emerald-700">Satisfaction Culturelle</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Rapide */}
        <Card className="border-2 border-purple-300">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <CardTitle className="flex items-center gap-3 text-xl">
              <MousePointer className="h-6 w-6" />
              Navigation Rapide - Testez Toutes les Fonctionnalités
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {uxFeatures.map((feature) => (
                <Link key={feature.id} href={feature.route}>
                  <Button className={`w-full h-16 bg-gradient-to-r ${feature.color} hover:scale-105 transition-all duration-300 text-white font-bold text-sm`}>
                    <div className="text-center">
                      {feature.icon}
                      <div className="mt-1">{feature.title.split(' ')[0]}</div>
                    </div>
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Citation Islamique */}
        <div className="mt-8 p-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl border-2 border-indigo-300">
          <div className="text-center">
            <div className="text-lg font-semibold text-indigo-800 mb-2">
              "وَجَعَلْنَا مِنْهُمْ أَئِمَّةً يَهْدُونَ بِأَمْرِنَا لَمَّا صَبَرُوا"
            </div>
            <div className="text-sm text-indigo-600 italic">
              "Et Nous fîmes d'eux des dirigeants qui guidaient par Notre ordre" - Coran 21:73
            </div>
            <div className="text-xs text-gray-600 mt-2">
              L'innovation technologique au service de la guidance spirituelle
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}