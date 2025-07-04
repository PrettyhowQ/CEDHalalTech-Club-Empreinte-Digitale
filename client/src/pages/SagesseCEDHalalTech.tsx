import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { 
  Heart, 
  Star, 
  ArrowRight, 
  BookOpen, 
  Shield, 
  Sparkles,
  Quote,
  Crown,
  Lightbulb
} from 'lucide-react';

export default function SagesseCEDHalalTech() {
  const principesSpirituels = [
    {
      principe: "Intelligence du Cœur",
      description: "Une approche holistique unissant raison et spiritualité",
      verset: "وَأَنزَلَ اللَّهُ عَلَيْكَ الْكِتَابَ وَالْحِكْمَةَ",
      traduction: "Et Allah a fait descendre sur toi le Livre et la Sagesse",
      icon: Heart,
      color: "from-rose-500 to-pink-600"
    },
    {
      principe: "Foi Technologique",
      description: "Innovation guidée par les valeurs islamiques authentiques",
      verset: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
      traduction: "Et quiconque craint Allah, Il lui donnera une issue",
      icon: Shield,
      color: "from-blue-500 to-indigo-600"
    },
    {
      principe: "Élévation des Âmes",
      description: "Technologie au service de l'épanouissement spirituel",
      verset: "وَنَرْفَعُ دَرَجَاتٍ مَّن نَّشَاءُ",
      traduction: "Nous élevons en degrés qui Nous voulons",
      icon: Star,
      color: "from-emerald-500 to-green-600"
    },
    {
      principe: "Protection Générations",
      description: "Héritage technologique préservant les valeurs islamiques",
      verset: "وَالَّذِينَ آمَنُوا وَاتَّبَعَتْهُمْ ذُرِّيَّتُهُم بِإِيمَانٍ",
      traduction: "Ceux qui croient et que leur descendance a suivis dans la foi",
      icon: Crown,
      color: "from-purple-500 to-violet-600"
    }
  ];

  const applicationsConcretes = [
    {
      domaine: "Super IARP Pro",
      application: "IA éthique respectant la pudeur et la dignité humaine",
      impact: "Formation spirituelle authentique",
      icon: Lightbulb
    },
    {
      domaine: "CED Bank",
      application: "Finance halal 0% riba avec mode prière intégré",
      impact: "Prospérité économique licite",
      icon: Shield
    },
    {
      domaine: "Institut CED Academy",
      application: "Éducation islamique moderne et accessible",
      impact: "Transmission du savoir authentique",
      icon: BookOpen
    },
    {
      domaine: "TechForAll",
      application: "Économie solidaire conforme à la Zakat",
      impact: "Justice sociale technologique",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Header avec Citation Principale */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Quote className="h-12 w-12 text-emerald-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Sagesse CED HalalTech™
            </h1>
            <Quote className="h-12 w-12 text-blue-600 rotate-180" />
          </div>
          
          {/* Sagesse Inspirante */}
          <Card className="bg-gradient-to-r from-emerald-100 to-blue-100 border-2 border-emerald-300 shadow-xl mb-6">
            <CardContent className="p-8">
              <blockquote className="text-2xl font-semibold text-gray-800 mb-4 leading-relaxed">
                « Quand l'intelligence du cœur se lie à la foi, naît une technologie qui élève les âmes et protège les générations. »
              </blockquote>
              <div className="flex items-center justify-center gap-2">
                <Badge className="bg-emerald-600 text-white px-4 py-2">
                  <Crown className="h-4 w-4 mr-2" />
                  Yakoubi Yamina
                </Badge>
                <Badge className="bg-blue-600 text-white px-4 py-2">
                  CED HalalTech™
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Hadith Authentique */}
          <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-300 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <p className="text-xl font-semibold text-gray-800 mb-2">
                  « Celui à qui Allah veut du bien, Il lui ouvre la compréhension du Dīn. »
                </p>
                <p className="text-lg text-amber-800 font-medium" dir="rtl">
                  مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ
                </p>
              </div>
              <Badge className="bg-amber-600 text-white px-4 py-2">
                <BookOpen className="h-4 w-4 mr-2" />
                Sahih al-Bukhari, Muslim
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Les 4 Principes Philosophiques */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center gap-3">
            <Sparkles className="h-8 w-8 text-emerald-600" />
            Les 4 Piliers de la Sagesse CED
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principesSpirituels.map((principe, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${principe.color}`}>
                      <principe.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xl text-gray-800">{principe.principe}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{principe.description}</p>
                  
                  {/* Verset Coranique */}
                  <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
                    <p className="text-lg font-semibold text-gray-800 mb-2 text-right" dir="rtl">
                      {principe.verset}
                    </p>
                    <p className="text-sm text-emerald-700 italic">
                      {principe.traduction}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Applications Concrètes */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center gap-3">
            <Star className="h-8 w-8 text-blue-600" />
            Applications Concrètes dans l'Écosystème
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applicationsConcretes.map((app, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur border-2 border-blue-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <app.icon className="h-6 w-6 text-blue-600" />
                    <span className="text-xl text-gray-800">{app.domaine}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1">Application :</h4>
                      <p className="text-gray-600">{app.application}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1">Impact :</h4>
                      <p className="text-emerald-700 font-medium">{app.impact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Engagement CED HalalTech™ */}
        <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300 mb-8">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Enseignement CED HalalTech™
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Nous nous engageons à développer une technologie qui honore Allah ﷻ, 
              respecte la Sunna du Prophète ﷺ, et contribue au bien-être de la Oummah mondiale. 
              Chaque innovation est guidée par cette philosophie d'excellence spirituelle et technique.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-emerald-600 text-white px-4 py-2">
                100% Halal Certifié
              </Badge>
              <Badge className="bg-blue-600 text-white px-4 py-2">
                Conformité Sharia
              </Badge>
              <Badge className="bg-purple-600 text-white px-4 py-2">
                Innovation Éthique
              </Badge>
              <Badge className="bg-rose-600 text-white px-4 py-2">
                Protection Générations
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/super-iarp-pro">
            <Button className="w-full h-16 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
              <Lightbulb className="h-5 w-5 mr-2" />
              Super IARP Pro
            </Button>
          </Link>
          
          <Link href="/voie-halal">
            <Button className="w-full h-16 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white">
              <Star className="h-5 w-5 mr-2" />
              Voie Halal
            </Button>
          </Link>
          
          <Link href="/ced-halal-home">
            <Button className="w-full h-16 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              <ArrowRight className="h-5 w-5 mr-2" />
              Retour Écosystème CED
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-emerald-200 text-center text-sm text-gray-600">
          <p className="mb-2">© 2025 Club Empreinte Digitale - Yakoubi Yamina</p>
          <p className="mb-2">🌟 Philosophie CED HalalTech™ - Intelligence du Cœur & Foi Technologique</p>
          <p className="text-xs text-gray-500">
            « Une technologie qui élève les âmes et protège les générations »
          </p>
        </div>
      </div>
    </div>
  );
}