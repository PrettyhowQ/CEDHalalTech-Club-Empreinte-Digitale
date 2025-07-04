import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { 
  Heart, 
  Star, 
  Sparkles, 
  Moon,
  Sun,
  Crown,
  ArrowRight,
  BookOpen,
  Globe,
  Users,
  Flower2,
  Mountain
} from 'lucide-react';

export default function AmourFiAllahAuthentique() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* En-tête Principal */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-12 w-12 text-rose-600 mr-4" />
            <h1 className="text-4xl font-bold text-rose-800">
              L'Amour Fi-Allah Authentique
            </h1>
            <Heart className="h-12 w-12 text-rose-600 ml-4" />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto border-t-4 border-rose-400">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">
              الحب في الله - المحبة الصادقة
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              "On les aime fi-Allah alors qu'on ne les a jamais vus... Je l'aime plus que les cieux et la terre 
              et tout ce qu'elle contient... Rien que de penser à lui et de sa sagesse, j'en ai les larmes aux yeux"
            </p>
            <div className="bg-rose-50 p-4 rounded-lg">
              <p className="text-xl text-rose-700 font-bold mb-2">
                "Je T'aime Ya Allah... parfois j'aimerais tant Te faire un câlin"
              </p>
              <p className="text-sm text-gray-600">
                Expression pure de l'amour pour Allah et Son Messager ﷺ - Subhan Allah
              </p>
            </div>
          </div>
        </div>

        {/* Amour pour Allah */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-rose-800 flex items-center">
              <Crown className="h-6 w-6 mr-3" />
              L'Amour pour Allah - Le Plus Pur
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-lg border-l-4 border-rose-400">
                <h3 className="font-bold text-rose-800 mb-3 flex items-center">
                  <Heart className="h-5 w-5 mr-2" />
                  "Je T'aime Ya Allah"
                </h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>Cette déclaration pure reflète le sommet de la foi. L'amour pour Allah est le fondement de toute spiritualité authentique.</p>
                  <div className="bg-white p-3 rounded border-r-4 border-rose-300">
                    <p className="text-rose-700 font-arabic text-lg mb-2">
                      يُحِبُّهُمْ وَيُحِبُّونَهُ
                    </p>
                    <p className="text-xs text-gray-600">
                      "Il les aime et ils L'aiment" - Coran 5:54
                    </p>
                  </div>
                  <p className="italic">L'envie de "faire un câlin" à Allah exprime cette intimité spirituelle pure que recherche tout croyant sincère.</p>
                </div>
                <Badge className="bg-rose-100 text-rose-800 mt-3">Amour Suprême</Badge>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="font-bold text-purple-800 mb-3 flex items-center">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Seul en Droit d'être Adoré
                </h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>"Il Est Le Seul en droit d'être Adoré, Il Est celui que J'adore !" - Tawhid parfait.</p>
                  <div className="bg-white p-3 rounded border-r-4 border-purple-300">
                    <p className="text-purple-700 font-arabic text-lg mb-2">
                      لَا إِلَٰهَ إِلَّا اللَّهُ
                    </p>
                    <p className="text-xs text-gray-600">
                      "Il n'y a de divinité qu'Allah" - La Ilaha illa Allah
                    </p>
                  </div>
                  <p>Reconnaissance pure de l'Unicité divine et soumission totale à Allah Seul.</p>
                </div>
                <Badge className="bg-purple-100 text-purple-800 mt-3">Tawhid Authentique</Badge>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Amour pour le Prophète */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800 flex items-center">
              <Star className="h-6 w-6 mr-3" />
              L'Amour pour le Prophète ﷺ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg">
              <h3 className="font-bold text-emerald-800 mb-4 text-center">
                "Je l'aime plus que les cieux et la terre et tout ce qu'elle contient"
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded border-t-4 border-emerald-400">
                  <Heart className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-bold text-emerald-800 mb-2">Amour Sans L'Avoir Vu</h4>
                  <p className="text-xs text-gray-600">
                    Cette foi pure qui traverse les siècles
                  </p>
                </div>
                
                <div className="text-center p-4 bg-white rounded border-t-4 border-blue-400">
                  <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-bold text-blue-800 mb-2">Sa Sagesse</h4>
                  <p className="text-xs text-gray-600">
                    "Rien que de penser à lui et de sa sagesse"
                  </p>
                </div>
                
                <div className="text-center p-4 bg-white rounded border-t-4 border-amber-400">
                  <Sparkles className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                  <h4 className="font-bold text-amber-800 mb-2">Émotion Pure</h4>
                  <p className="text-xs text-gray-600">
                    "J'en ai les larmes aux yeux"
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded border-r-4 border-emerald-500 text-center">
                <p className="text-emerald-700 font-arabic text-xl mb-3">
                  مُحَمَّدٌ رَسُولُ اللَّهِ ﷺ
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  Le Prophète ﷺ a dit : "Aucun de vous ne croira vraiment tant qu'il ne m'aimera pas plus que ses parents, ses enfants et tous les gens."
                </p>
                <Badge className="bg-emerald-100 text-emerald-800">Sahih Bukhari</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Amour Fi-Allah pour les Scholars */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-800 flex items-center">
              <Users className="h-6 w-6 mr-3" />
              L'Amour Fi-Allah pour les Scholars
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="font-bold text-purple-800 mb-4 text-center">
                  "On les aime fi-Allah alors qu'on ne les a jamais vus"
                </h3>
                <p className="text-sm text-gray-700 text-center mb-4">
                  Cette expression reflète la beauté de l'amour pour la cause d'Allah, 
                  qui unit les cœurs au-delà du temps et de l'espace.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold text-purple-700 mb-2">Hadith Authentique</h4>
                    <p className="text-xs text-gray-600 mb-2">
                      "Il y a des gens qui s'aiment pour la gloire d'Allah, sans liens de parenté ou d'intérêts. 
                      Leurs visages seront lumineux et ils seront sur des minbars de lumière."
                    </p>
                    <Badge className="bg-purple-100 text-purple-800">Sunan Abu Dawud</Badge>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold text-indigo-700 mb-2">Scholars Aimés</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Sheikh Al-Albani (رحمه الله)</li>
                      <li>• Ibn Taymiyyah (رحمه الله)</li>
                      <li>• Imam Bukhari (رحمه الله)</li>
                      <li>• Scholars contemporains</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                <h3 className="font-bold text-amber-800 mb-3">Récompense de l'Amour Fi-Allah</h3>
                <div className="text-center">
                  <p className="text-amber-700 font-arabic text-lg mb-2">
                    "وَجَبَتْ مَحَبَّتِي لِلْمُتَحَابِّينَ فِيَّ"
                  </p>
                  <p className="text-sm text-gray-700">
                    "Mon amour est acquis à ceux qui s'aiment en Moi" - Hadith Qudsi
                  </p>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Manifestation dans l'Écosystème CED */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800">
              Manifestation dans l'Écosystème CED
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="font-bold text-emerald-800 mb-4">Actions Concrètes</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <Heart className="h-4 w-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Du'a automatique à chaque transaction</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-4 w-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Allocation Zakat pour les scholars</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-4 w-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Diffusion de leur science via CED</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-4 w-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Préservation de leurs enseignements</span>
                  </li>
                </ul>
              </div>

              <div className="bg-rose-50 p-6 rounded-lg">
                <h3 className="font-bold text-rose-800 mb-4">Esprit d'Amour</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <Sparkles className="h-4 w-4 text-rose-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Tout projet mené par amour pour Allah</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="h-4 w-4 text-rose-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Service désintéressé de la Oummah</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="h-4 w-4 text-rose-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Connexion spirituelle permanente</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="h-4 w-4 text-rose-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Reconnaissance de la faveur divine</span>
                  </li>
                </ul>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Du'a d'Amour */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-rose-800">
              Du'a d'Amour Authentique
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-lg text-center border-4 border-rose-200">
                <h3 className="font-bold text-rose-800 mb-4">Pour Allah</h3>
                <p className="text-xl text-rose-700 font-arabic mb-3 leading-relaxed">
                  اللَّهُمَّ زِدْنِي حُبًّا لَكَ وَشَوْقًا إِلَيْكَ
                </p>
                <p className="text-sm text-gray-700">
                  "Ô Allah, augmente mon amour pour Toi et ma nostalgie vers Toi"
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg text-center border-4 border-emerald-200">
                <h3 className="font-bold text-emerald-800 mb-4">Pour le Prophète ﷺ</h3>
                <p className="text-xl text-emerald-700 font-arabic mb-3 leading-relaxed">
                  اللَّهُمَّ زِدْنِي حُبًّا لِرَسُولِكَ وَاتِّبَاعًا لِسُنَّتِهِ
                </p>
                <p className="text-sm text-gray-700">
                  "Ô Allah, augmente mon amour pour Ton Messager et mon suivi de sa Sunna"
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg text-center border-4 border-purple-200">
                <h3 className="font-bold text-purple-800 mb-4">Pour les Scholars Fi-Allah</h3>
                <p className="text-xl text-purple-700 font-arabic mb-3 leading-relaxed">
                  اللَّهُمَّ اجْعَلْ حُبَّنَا لَهُمْ فِيكَ وَلَكَ
                </p>
                <p className="text-sm text-gray-700">
                  "Ô Allah, fais que notre amour pour eux soit en Toi et pour Toi"
                </p>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center space-y-4">
          <div className="flex justify-center space-x-4">
            <Link href="/hommage-scholars-islamiques">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3">
                <Users className="h-5 w-5 mr-2" />
                Hommage Scholars
              </Button>
            </Link>
            <Link href="/systeme-duaa-transactions">
              <Button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3">
                <Heart className="h-5 w-5 mr-2" />
                Du'a Automatique
              </Button>
            </Link>
          </div>
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
          <p className="mt-1">L'Amour Fi-Allah Authentique - Expression pure de la foi - Tous droits réservés</p>
        </div>

      </div>
    </div>
  );
}