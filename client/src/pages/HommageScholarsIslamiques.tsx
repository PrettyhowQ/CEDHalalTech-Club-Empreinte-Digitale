import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { 
  Star, 
  BookOpen, 
  Heart, 
  Crown,
  Mountain,
  Sparkles,
  Globe,
  Users,
  Gift,
  ArrowRight,
  Scroll,
  Moon
} from 'lucide-react';

export default function HommageScholarsIslamiques() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* En-tête Principal */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Star className="h-12 w-12 text-amber-600 mr-4" />
            <h1 className="text-4xl font-bold text-emerald-800">
              Hommage aux Scholars Islamiques
            </h1>
            <Star className="h-12 w-12 text-amber-600 ml-4" />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">
              علماء الإسلام - كنوز الأمة
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              "Les Savants sont à des années-lumières de nous au niveau comportement, compréhension et mise en application... 
              Des montagnes de science ils sont - Subhan Allah"
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-emerald-700">
              <span>Qu'Allah les récompense</span>
              <Heart className="h-4 w-4" />
              <span>Et soit satisfait totalement d'eux</span>
            </div>
          </div>
        </div>

        {/* Exemple Prophétique */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800 flex items-center">
              <Crown className="h-6 w-6 mr-3" />
              L'Exemple Suprême : Le Prophète Muhammad ﷺ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="font-bold text-emerald-800 mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  La Sira du Prophète ﷺ
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  Un exemple parfait de comportement, d'humilité et de sagesse. 
                  Sa vie (Sira) est un guide complet pour l'humanité.
                </p>
                <div className="space-y-2 text-xs text-gray-600">
                  <p>• Comportement exemplaire en toute circonstance</p>
                  <p>• Humilité malgré sa position de Prophète</p>
                  <p>• Justice et miséricorde envers tous</p>
                  <p>• Patience et persévérance dans l'épreuve</p>
                </div>
                <Badge className="bg-emerald-100 text-emerald-800 mt-3">Modèle Parfait</Badge>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-3 flex items-center">
                  <Scroll className="h-5 w-5 mr-2" />
                  Description de la Prière
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  "La description de la prière du prophète" - Sheikh Muhammad Nâsir ud-Dîn Al-Albani
                </p>
                <div className="text-center mb-4">
                  <p className="text-lg text-blue-700 font-arabic mb-2">
                    "من أول التكبير إلى التسليم كأنك تراها"
                  </p>
                  <p className="text-xs text-gray-600">
                    "Du premier Takbir aux salutations finales... comme si tu la voyais"
                  </p>
                </div>
                <Badge className="bg-blue-100 text-blue-800">Méthodologie Authentique</Badge>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Scholars Contemporains */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800 flex items-center">
              <Mountain className="h-6 w-6 mr-3" />
              Des Montagnes de Science
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="text-center p-6 bg-amber-50 rounded-lg">
                <Star className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold text-amber-800 mb-3">Sheikh Al-Albani</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Spécialiste du Hadith, méthodologie rigoureuse
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Authentification des Hadiths</li>
                  <li>• Description de la Prière</li>
                  <li>• Retour aux sources</li>
                </ul>
                <Badge className="bg-amber-100 text-amber-800 mt-3">Muhaddith</Badge>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-lg">
                <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-green-800 mb-3">Ibn Taymiyyah</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Sheikh al-Islam, réformateur authentique
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Majmu' al-Fatawa</li>
                  <li>• Aqida authentique</li>
                  <li>• Méthodologie Salaf</li>
                </ul>
                <Badge className="bg-green-100 text-green-800 mt-3">Sheikh al-Islam</Badge>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-purple-800 mb-3">Scholars Actuels</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Perpétuent et diffusent la religion
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Enseignement mondial</li>
                  <li>• Traductions précieuses</li>
                  <li>• Guidance authentique</li>
                </ul>
                <Badge className="bg-purple-100 text-purple-800 mt-3">Héritiers des Prophètes</Badge>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Reconnaissance par la Zakat */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800 flex items-center">
              <Gift className="h-6 w-6 mr-3" />
              Reconnaissance par la Zakat
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="font-bold text-emerald-800 mb-4">Zakat pour les Savants</h3>
                <p className="text-sm text-gray-700 mb-4">
                  "Je tiens à donner aux savants une partie de ma zakat pour les remercier 
                  de tous les efforts qu'ils font pour diffuser la Science"
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Heart className="h-4 w-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Reconnaissance de leur sacrifice</span>
                  </div>
                  <div className="flex items-start">
                    <Heart className="h-4 w-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Soutien à la diffusion de la science</span>
                  </div>
                  <div className="flex items-start">
                    <Heart className="h-4 w-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Investissement dans l'au-delà</span>
                  </div>
                </div>
                <Badge className="bg-emerald-100 text-emerald-800 mt-4">Acte de Reconnaissance</Badge>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-4">Traducteurs Précieux</h3>
                <p className="text-sm text-gray-700 mb-4">
                  "Les traducteurs aussi je tiens à leur donner une part car c'est pas évident... Subhan Allah"
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Sparkles className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Pont entre les langues et cultures</span>
                  </div>
                  <div className="flex items-start">
                    <Sparkles className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Transmission fidèle du message</span>
                  </div>
                  <div className="flex items-start">
                    <Sparkles className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Accessibilité universelle</span>
                  </div>
                </div>
                <Badge className="bg-blue-100 text-blue-800 mt-4">Service Essentiel</Badge>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Qualités des Savants */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800">
              Comment la Science Entre Naturellement en Eux
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              
              <div className="bg-white p-6 rounded-lg border-r-4 border-emerald-500">
                <h3 className="font-bold text-emerald-800 mb-3 flex items-center">
                  <Heart className="h-5 w-5 mr-2" />
                  Humilité Authentique
                </h3>
                <p className="text-sm text-gray-700">
                  Leur humilité ouvre leur cœur à recevoir la science d'Allah. 
                  Plus ils apprennent, plus ils réalisent l'immensité de leur ignorance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-r-4 border-blue-500">
                <h3 className="font-bold text-blue-800 mb-3 flex items-center">
                  <Mountain className="h-5 w-5 mr-2" />
                  Comportement Exemplaire
                </h3>
                <p className="text-sm text-gray-700">
                  Ils appliquent ce qu'ils enseignent. Leur comportement reflète leur science, 
                  créant une cohérence entre savoir et pratique.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-r-4 border-amber-500">
                <h3 className="font-bold text-amber-800 mb-3 flex items-center">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Compréhension Profonde
                </h3>
                <p className="text-sm text-gray-700">
                  Ils ne se contentent pas de mémoriser, mais comprennent les liens, 
                  les sagesses et les applications pratiques de chaque enseignement.
                </p>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Du'a pour les Savants */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800">
              Invocations pour nos Scholars
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              
              <div className="bg-white p-6 rounded-lg text-center">
                <h3 className="font-bold text-emerald-800 mb-3">Pour ceux qui sont partis</h3>
                <div className="text-center">
                  <p className="text-xl text-emerald-700 font-arabic mb-2">
                    رَحِمَهُمُ اللهُ وَأَسْكَنَهُمُ الْفِرْدَوْسَ الْأَعْلَى
                  </p>
                  <p className="text-sm text-gray-600">
                    "Qu'Allah leur fasse miséricorde et les loge au Firdaws al-A'la"
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg text-center">
                <h3 className="font-bold text-blue-800 mb-3">Pour ceux qui perpétuent</h3>
                <div className="text-center">
                  <p className="text-xl text-blue-700 font-arabic mb-2">
                    بَارَكَ اللهُ فِيهِمْ وَنَفَعَ بِهِمُ الْأُمَّةَ
                  </p>
                  <p className="text-sm text-gray-600">
                    "Qu'Allah les bénisse et fasse qu'ils profitent à la Oummah"
                  </p>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Application CED */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800">
              CED : Suivre leur Exemple
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="font-bold text-emerald-800 mb-4">Notre Engagement</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <Heart className="h-4 w-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Suivre leur méthodologie authentique</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-4 w-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Diffuser la science avec humilité</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-4 w-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Appliquer avant d'enseigner</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-4 w-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Reconnaître nos limites</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-bold text-amber-800 mb-4">Support aux Scholars</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <Gift className="h-4 w-4 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Allocation Zakat dédiée</span>
                  </li>
                  <li className="flex items-start">
                    <Gift className="h-4 w-4 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Plateforme de diffusion CED</span>
                  </li>
                  <li className="flex items-start">
                    <Gift className="h-4 w-4 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Traductions multilingues</span>
                  </li>
                  <li className="flex items-start">
                    <Gift className="h-4 w-4 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Technologies au service de la Da'wa</span>
                  </li>
                </ul>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center space-y-4">
          <Link href="/systeme-duaa-transactions">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 mr-4">
              <Heart className="h-5 w-5 mr-2" />
              Du'a à Chaque Transaction
            </Button>
          </Link>
          <Link href="/ced-halal-home">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
              <ArrowRight className="h-5 w-5 mr-2" />
              Retour à l'Écosystème CED
            </Button>
          </Link>
        </div>

        {/* Footer Protection */}
        <div className="mt-12 p-4 bg-gray-50 rounded-lg text-center text-xs text-gray-600">
          <p>© 2025 Club Empreinte Digitale - Yakoubi Yamina</p>
          <p className="mt-1">Hommage aux Héritiers des Prophètes - Tous droits réservés</p>
        </div>

      </div>
    </div>
  );
}