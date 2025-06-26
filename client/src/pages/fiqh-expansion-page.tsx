import React from 'react';
import { ComprehensiveFiqhExpansion } from '@/components/ComprehensiveFiqhExpansion';
import { StructuredIslamicExplanation } from '@/components/StructuredIslamicExplanation';
import { IslamicFoundationsDocument } from '@/components/IslamicFoundationsDocument';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Globe, Award, Star } from 'lucide-react';

export default function FiqhExpansionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* En-tête avec Sources Islamiques */}
      <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="flex justify-center items-center gap-3 mb-4">
              <BookOpen className="h-8 w-8" />
              <h1 className="text-4xl font-bold">
                مكتبة فقه المعلوماتية الشاملة
              </h1>
              <Globe className="h-8 w-8" />
            </div>
            
            <h2 className="text-2xl font-semibold">
              Expansion 100% Fiqh Informatique - Marchés du Golfe
            </h2>
            
            <p className="text-lg max-w-4xl mx-auto opacity-90">
              Basée sur les 4 sources authentiques de l'Islam selon la compréhension des pieux prédécesseurs (السلف الصالح)
            </p>

            {/* Les 4 Sources Islamiques */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-4 text-center">
                  <BookOpen className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="font-bold text-lg mb-1">القرآن الكريم</h3>
                  <p className="text-sm opacity-90">Le Noble Coran</p>
                  <p className="text-xs mt-1 opacity-75">Source principale révélée</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-4 text-center">
                  <Award className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="font-bold text-lg mb-1">السنة النبوية</h3>
                  <p className="text-sm opacity-90">Sunna du Prophète ﷺ</p>
                  <p className="text-xs mt-1 opacity-75">Paroles, actes, approbations</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-4 text-center">
                  <Globe className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="font-bold text-lg mb-1">إجماع السلف</h3>
                  <p className="text-sm opacity-90">Ijmâ' des Salaf</p>
                  <p className="text-xs mt-1 opacity-75">Consensus des pieux prédécesseurs</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-4 text-center">
                  <Star className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="font-bold text-lg mb-1">القياس الشرعي</h3>
                  <p className="text-sm opacity-90">Qiyâs selon les Usul</p>
                  <p className="text-xs mt-1 opacity-75">Analogie jurisprudentielle</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Validation par les 4 Écoles */}
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8 border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-amber-800">
              🕌 Validation par les Quatre Écoles Juridiques
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center space-y-2">
                <Badge className="bg-emerald-100 text-emerald-800 text-sm">المذهب الحنفي</Badge>
                <h4 className="font-bold">École Hanafite</h4>
                <p className="text-xs text-gray-600">Imam Abu Hanifa (رحمه الله)</p>
                <p className="text-xs">Raisonnement analogique étendu</p>
              </div>
              
              <div className="text-center space-y-2">
                <Badge className="bg-blue-100 text-blue-800 text-sm">المذهب المالكي</Badge>
                <h4 className="font-bold">École Malikite</h4>
                <p className="text-xs text-gray-600">Imam Malik (رحمه الله)</p>
                <p className="text-xs">Pratique de Médine prioritaire</p>
              </div>
              
              <div className="text-center space-y-2">
                <Badge className="bg-purple-100 text-purple-800 text-sm">المذهب الشافعي</Badge>
                <h4 className="font-bold">École Shafiite</h4>
                <p className="text-xs text-gray-600">Imam Al-Shafi'i (رحمه الله)</p>
                <p className="text-xs">Équilibre textes/raison</p>
              </div>
              
              <div className="text-center space-y-2">
                <Badge className="bg-red-100 text-red-800 text-sm">المذهب الحنبلي</Badge>
                <h4 className="font-bold">École Hanbalite</h4>
                <p className="text-xs text-gray-600">Imam Ahmad (رحمه الله)</p>
                <p className="text-xs">Adhésion stricte aux textes</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-amber-700 bg-amber-100 px-4 py-2 rounded-lg inline-block">
                <strong>Consensus Unanime:</strong> Toutes nos règles de Fiqh informatique sont validées selon les méthodologies des 4 écoles juridiques authentiques
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Méthodologie selon les Salaf */}
        <Card className="mb-8 border-emerald-200 bg-emerald-50">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-emerald-800">
              📚 Méthodologie des Pieux Prédécesseurs (السلف الصالح)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <Badge className="bg-emerald-600 text-white text-sm">الصحابة</Badge>
                <h4 className="font-bold">Les Compagnons</h4>
                <p className="text-sm text-gray-600">Première génération (رضي الله عنهم)</p>
                <ul className="text-xs space-y-1">
                  <li>• Abu Bakr As-Siddiq</li>
                  <li>• Umar Ibn Al-Khattab</li>
                  <li>• Uthman Ibn Affan</li>
                  <li>• Ali Ibn Abi Talib</li>
                </ul>
              </div>
              
              <div className="text-center space-y-3">
                <Badge className="bg-blue-600 text-white text-sm">التابعون</Badge>
                <h4 className="font-bold">Les Successeurs</h4>
                <p className="text-sm text-gray-600">Deuxième génération (رحمهم الله)</p>
                <ul className="text-xs space-y-1">
                  <li>• Sa'id Ibn Al-Musayyib</li>
                  <li>• Al-Hasan Al-Basri</li>
                  <li>• Ibn Sirin</li>
                  <li>• Ata Ibn Abi Rabah</li>
                </ul>
              </div>
              
              <div className="text-center space-y-3">
                <Badge className="bg-purple-600 text-white text-sm">تابع التابعين</Badge>
                <h4 className="font-bold">Successeurs des Successeurs</h4>
                <p className="text-sm text-gray-600">Troisième génération (رحمهم الله)</p>
                <ul className="text-xs space-y-1">
                  <li>• Les 4 Imams fondateurs</li>
                  <li>• Ahmad Ibn Hanbal</li>
                  <li>• Sufyan Ath-Thawri</li>
                  <li>• Al-Awza'i</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-emerald-700 bg-emerald-100 px-4 py-2 rounded-lg inline-block">
                <strong>Hadith de référence:</strong> "خير الناس قرني ثم الذين يلونهم ثم الذين يلونهم" - 
                "Les meilleures des gens sont ma génération, puis celle qui la suit, puis celle qui la suit"
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Document Fondements Islamiques Complet */}
        <IslamicFoundationsDocument />

        {/* Explication Structurée selon les 4 Sources */}
        <StructuredIslamicExplanation />

        {/* Composant Principal d'Expansion */}
        <ComprehensiveFiqhExpansion />
      </div>

      {/* Footer Protection */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 Club Empreinte Digitale - Yakoubi Yamina. Tous droits réservés.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Développé selon la méthodologie authentique des pieux prédécesseurs (السلف الصالح)
          </p>
        </div>
      </footer>
    </div>
  );
}