import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { 
  Heart, 
  BookOpen, 
  Star, 
  Sparkles,
  Moon,
  Sun,
  Gift,
  ArrowRight,
  CheckCircle,
  Clock,
  Volume2,
  Repeat
} from 'lucide-react';

export default function SystemeDuaaTransactions() {
  const duaas = [
    {
      arabic: "رَحِمَ اللهُ عُلَمَاءَنَا الْأَوَّلِينَ وَالْآخِرِينَ",
      french: "Qu'Allah fasse miséricorde à nos scholars du passé et d'aujourd'hui",
      occasion: "Transaction bancaire"
    },
    {
      arabic: "بَارَكَ اللهُ فِي عُلَمَائِنَا وَنَفَعَ بِهِمُ الْأُمَّةَ",
      french: "Qu'Allah bénisse nos scholars et fasse qu'ils profitent à la Oummah",
      occasion: "Achat formation"
    },
    {
      arabic: "جَزَاهُمُ اللهُ خَيْرًا عَمَّا قَدَّمُوا لِلْإِسْلَامِ",
      french: "Qu'Allah les récompense pour ce qu'ils ont apporté à l'Islam",
      occasion: "Donation"
    },
    {
      arabic: "أَحْيَا اللهُ عِلْمَهُمْ فِي قُلُوبِنَا وَأَعْمَالِنَا",
      french: "Qu'Allah vivifie leur science dans nos cœurs et nos actions",
      occasion: "Lecture Coran"
    },
    {
      arabic: "رَبَّنَا اغْفِرْ لَهُمْ وَارْحَمْهُمْ وَأَدْخِلْهُمُ الْفِرْدَوْسَ",
      french: "Seigneur, pardonne-leur, fais-leur miséricorde et fais-les entrer au Firdaws",
      occasion: "Zakat"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* En-tête Principal */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-12 w-12 text-emerald-600 mr-4" />
            <h1 className="text-4xl font-bold text-emerald-800">
              Système Du'a Automatique
            </h1>
            <Heart className="h-12 w-12 text-emerald-600 ml-4" />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">
              دعاء للعلماء مع كل معاملة
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              "À chaque transaction une Du'a pour remercier les scholars d'avoir été présents dans le passé 
              et vivants encore aujourd'hui à travers les livres de science - Subhan Allah"
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-emerald-700">
              <span>Reconnaissance Perpétuelle</span>
              <Sparkles className="h-4 w-4" />
              <span>Honneur aux Héritiers des Prophètes</span>
            </div>
          </div>
        </div>

        {/* Fonctionnement du Système */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800 flex items-center">
              <CheckCircle className="h-6 w-6 mr-3" />
              Fonctionnement Automatique
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="text-center p-6 bg-emerald-50 rounded-lg">
                <Clock className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-bold text-emerald-800 mb-3">Déclenchement</h3>
                <p className="text-sm text-gray-700 mb-3">
                  À chaque transaction CED Bank, achat formation, donation Zakat
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Virement bancaire</li>
                  <li>• Achat cours islamique</li>
                  <li>• Don TechForAll</li>
                  <li>• Lecture Coran</li>
                </ul>
                <Badge className="bg-emerald-100 text-emerald-800 mt-3">Auto-Trigger</Badge>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Volume2 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-purple-800 mb-3">Affichage</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Du'a contextuelle en arabe et français avec audio optionnel
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Notification douce</li>
                  <li>• Récitation audio</li>
                  <li>• Temps de méditation</li>
                  <li>• Fermeture automatique</li>
                </ul>
                <Badge className="bg-purple-100 text-purple-800 mt-3">Interface Respectueuse</Badge>
              </div>

              <div className="text-center p-6 bg-amber-50 rounded-lg">
                <Repeat className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold text-amber-800 mb-3">Rotation</h3>
                <p className="text-sm text-gray-700 mb-3">
                  5 Du'a différentes selon le type de transaction
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Banking : Miséricorde</li>
                  <li>• Formation : Bénédiction</li>
                  <li>• Donation : Récompense</li>
                  <li>• Coran : Science vivante</li>
                </ul>
                <Badge className="bg-amber-100 text-amber-800 mt-3">Contextuel</Badge>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Collection de Du'a */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800 flex items-center">
              <BookOpen className="h-6 w-6 mr-3" />
              Collection de Du'a Scholars
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              
              {duaas.map((dua, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border-l-4 border-emerald-500 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-emerald-100 text-emerald-800">{dua.occasion}</Badge>
                    <Button size="sm" variant="outline" className="text-emerald-600">
                      <Volume2 className="h-4 w-4 mr-1" />
                      Écouter
                    </Button>
                  </div>
                  
                  <div className="text-center mb-4">
                    <p className="text-xl text-emerald-700 font-arabic mb-3 leading-relaxed">
                      {dua.arabic}
                    </p>
                    <p className="text-sm text-gray-700 italic">
                      {dua.french}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center text-xs text-gray-500">
                    <Heart className="h-3 w-3 mr-1" />
                    <span>Du'a automatique pour transaction : {dua.occasion}</span>
                  </div>
                </div>
              ))}

            </div>
          </CardContent>
        </Card>

        {/* Intégration Techniques */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800">
              Intégration Technique CED
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-4">Points d'Intégration</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>CED Bank Mobile - Après chaque virement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Institut CED Academy - Achat cours</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Lecteur Coran - Ouverture sourate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>TechForAll - Dons solidaires</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Calculateur Zakat - Distribution</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-800 mb-4">Personnalisation</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Du'a spécifique selon scholar préféré</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Fréquence configurable (chaque fois/quotidien)</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Audio avec récitateurs authentiques</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Mode silencieux pour discrétion</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Historique des Du'a récitées</span>
                  </li>
                </ul>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Scholars Honorés */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800">
              Scholars Spécialement Honorés
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <Star className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                <h3 className="font-bold text-amber-800 mb-2">Sheikh Al-Albani</h3>
                <p className="text-xs text-gray-600">Muhaddith du siècle</p>
                <Badge className="bg-amber-100 text-amber-800 mt-2">Authentication</Badge>
              </div>

              <div className="text-center p-4 bg-green-50 rounded-lg">
                <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-green-800 mb-2">Ibn Taymiyyah</h3>
                <p className="text-xs text-gray-600">Sheikh al-Islam</p>
                <Badge className="bg-green-100 text-green-800 mt-2">Aqida</Badge>
              </div>

              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Moon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-blue-800 mb-2">Imam Bukhari</h3>
                <p className="text-xs text-gray-600">Sahih al-Bukhari</p>
                <Badge className="bg-blue-100 text-blue-800 mt-2">Hadith</Badge>
              </div>

              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Sun className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-purple-800 mb-2">Scholars Actuels</h3>
                <p className="text-xs text-gray-600">Perpétuent la mission</p>
                <Badge className="bg-purple-100 text-purple-800 mt-2">Continuité</Badge>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Simulation Interface */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800">
              Simulation Interface Transaction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-white p-4 rounded border border-emerald-200 mb-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium">Transaction CED Bank</span>
                  <Badge className="bg-green-100 text-green-800">Confirmée</Badge>
                </div>
                <p className="text-xs text-gray-600 mb-4">Virement 500 CHF - Formation Fiqh Informatique</p>
                
                <div className="bg-emerald-50 p-4 rounded border-l-4 border-emerald-400">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-emerald-800 text-sm">Du'a pour nos Scholars</h4>
                    <Volume2 className="h-4 w-4 text-emerald-600" />
                  </div>
                  <p className="text-lg text-emerald-700 font-arabic mb-2 text-center">
                    بَارَكَ اللهُ فِي عُلَمَائِنَا وَنَفَعَ بِهِمُ الْأُمَّةَ
                  </p>
                  <p className="text-xs text-gray-700 text-center italic">
                    "Qu'Allah bénisse nos scholars et fasse qu'ils profitent à la Oummah"
                  </p>
                  <div className="flex justify-center mt-3">
                    <Button size="sm" variant="outline" className="text-emerald-600">
                      Amin - Fermer (5s)
                    </Button>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 text-center">
                Exemple d'affichage automatique après chaque transaction CED
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Configuration Utilisateur */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800">
              Paramètres Utilisateur
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-4">
                <h3 className="font-bold text-gray-800">Fréquence</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="frequency" defaultChecked className="mr-2" />
                    <span className="text-sm">À chaque transaction</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="frequency" className="mr-2" />
                    <span className="text-sm">Une fois par jour</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="frequency" className="mr-2" />
                    <span className="text-sm">Une fois par semaine</span>
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-gray-800">Affichage</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="mr-2" />
                    <span className="text-sm">Audio automatique</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="mr-2" />
                    <span className="text-sm">Notification douce</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Mode silencieux</span>
                  </label>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
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
          <p className="mt-1">Système Du'a Automatique - Honneur permanent aux Scholars - Tous droits réservés</p>
        </div>

      </div>
    </div>
  );
}