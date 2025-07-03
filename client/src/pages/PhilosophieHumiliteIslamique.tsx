import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { 
  Heart, 
  Star, 
  Sparkles, 
  Crown, 
  Mountain,
  Sun,
  Moon,
  ArrowUp,
  BookOpen,
  Flower2
} from 'lucide-react';

export default function PhilosophieHumiliteIslamique() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* En-tête Principal */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-12 w-12 text-emerald-600 mr-4" />
            <h1 className="text-4xl font-bold text-emerald-800">
              Enseignement de l'Humilité Islamique
            </h1>
            <Heart className="h-12 w-12 text-emerald-600 ml-4" />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">
              التواضع طريق الرفعة
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              "Plus tu acquiers de l'humilité, plus Allah Subhanu wa Ta'ala t'élève en degrés, 
              d'abord ici-bas puis dans l'Au-delà - Incha Allah"
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-emerald-700">
              <span>Bi Kudrati Allah</span>
              <Sparkles className="h-4 w-4" />
              <span>Wa Allahu A'leem bi Kulli Shay'</span>
            </div>
          </div>
        </div>

        {/* Fondements Coraniques */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800 flex items-center">
              <BookOpen className="h-6 w-6 mr-3" />
              Fondements Coraniques & Prophétiques
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="font-bold text-emerald-800 mb-3 flex items-center">
                  <Star className="h-5 w-5 mr-2" />
                  Verset Coranique
                </h3>
                <div className="text-center mb-4">
                  <p className="text-xl text-amber-700 font-arabic mb-2">
                    وَمَن يَتَوَاضَعْ لِلَّهِ يَرْفَعْهُ اللَّهُ
                  </p>
                  <p className="text-sm text-gray-600">
                    "Et celui qui s'humilie pour Allah, Allah l'élève"
                  </p>
                </div>
                <Badge className="bg-emerald-100 text-emerald-800">Coran - Sagesse Éternelle</Badge>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-bold text-amber-800 mb-3 flex items-center">
                  <Crown className="h-5 w-5 mr-2" />
                  Hadith Authentique
                </h3>
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-700 mb-2">
                    "Nul ne s'humilie pour Allah sans qu'Allah ne l'élève"
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    Prophète Muhammad ﷺ - Sahih Muslim
                  </p>
                </div>
                <Badge className="bg-amber-100 text-amber-800">Sunna Authentique</Badge>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Les Degrés d'Élévation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800 flex items-center">
              <Mountain className="h-6 w-6 mr-3" />
              Les Degrés d'Élévation Divine
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Sun className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-blue-800 mb-3">Dunya (Ici-bas)</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Respect et estime des autres</li>
                  <li>• Barakah dans les projets</li>
                  <li>• Guidance divine</li>
                  <li>• Paix intérieure</li>
                </ul>
                <Badge className="bg-blue-100 text-blue-800 mt-3">Récompense Temporelle</Badge>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <ArrowUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-purple-800 mb-3">Transition</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Facilitation de la mort</li>
                  <li>• Bon accueil des anges</li>
                  <li>• Passage serein</li>
                  <li>• Intercession prophétique</li>
                </ul>
                <Badge className="bg-purple-100 text-purple-800 mt-3">Miséricorde Divine</Badge>
              </div>

              <div className="text-center p-6 bg-yellow-50 rounded-lg">
                <Moon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-bold text-yellow-800 mb-3">Akhirah (Au-delà)</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Degrés élevés au Paradis</li>
                  <li>• Proximité d'Allah</li>
                  <li>• Compagnie des Prophètes</li>
                  <li>• Félicité éternelle</li>
                </ul>
                <Badge className="bg-yellow-100 text-yellow-800 mt-3">Récompense Éternelle</Badge>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Application Pratique CED */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800 flex items-center">
              <Flower2 className="h-6 w-6 mr-3" />
              Application dans l'Écosystème CED
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-800 mb-4">Esprit d'Humilité</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <Heart className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Service désintéressé de la communauté musulmane</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Reconnaissance constante des bienfaits d'Allah</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Apprentissage continu et acceptation des conseils</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Simplicité dans les interactions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-bold text-amber-800 mb-4">Élévation Promise</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <Sparkles className="h-4 w-4 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Barakah dans les projets technologiques halal</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="h-4 w-4 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Impact positif global sur la Oummah</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="h-4 w-4 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Guidance divine dans les décisions</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="h-4 w-4 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Succession spirituelle bénie</span>
                  </li>
                </ul>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Invocations Authentiques */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800">
              Invocations pour l'Humilité
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              
              <div className="bg-white p-6 rounded-lg border-r-4 border-emerald-500">
                <h3 className="font-bold text-emerald-800 mb-3">Du'a Quotidien</h3>
                <div className="text-center">
                  <p className="text-xl text-amber-700 font-arabic mb-2">
                    اللَّهُمَّ اجْعَلْنِي مُتَوَاضِعًا وَارْفَعْنِي بِتَوَاضُعِي
                  </p>
                  <p className="text-sm text-gray-600">
                    "Ô Allah, rends-moi humble et élève-moi par mon humilité"
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border-r-4 border-amber-500">
                <h3 className="font-bold text-amber-800 mb-3">Pour les Projets</h3>
                <div className="text-center">
                  <p className="text-xl text-emerald-700 font-arabic mb-2">
                    بِكُدْرَتِ اللهِ وَاللهُ أَعْلَمُ بِكُلِّ شَيْءٍ
                  </p>
                  <p className="text-sm text-gray-600">
                    "Par la puissance d'Allah, et Allah sait mieux toute chose"
                  </p>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Link href="/empire-halal-home">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
              <ArrowUp className="h-5 w-5 mr-2" />
              Retour à l'Écosystème CED
            </Button>
          </Link>
        </div>

        {/* Footer Protection */}
        <div className="mt-12 p-4 bg-gray-50 rounded-lg text-center text-xs text-gray-600">
          <p>© 2025 Club Empreinte Digitale - Yakoubi Yamina</p>
          <p className="mt-1">Enseignement Islamique Authentique - Tous droits réservés</p>
        </div>

      </div>
    </div>
  );
}