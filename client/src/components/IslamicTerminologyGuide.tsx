import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertTriangle, BookOpen, Shield } from 'lucide-react';

export function IslamicTerminologyGuide() {
  return (
    <div className="space-y-6">
      {/* En-tête */}
      <Card className="border-2 border-emerald-500 bg-gradient-to-r from-emerald-50 to-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-emerald-800">
            <BookOpen className="h-8 w-8" />
            ✅ A-t-on le droit de dire « citation » en islam ?
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Réponse courte */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="text-xl text-green-800">📌 Réponse courte :</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-green-700 font-medium">
            <strong>Oui</strong>, on peut utiliser le mot "citation" pour désigner un hadith, verset, 
            ou parole d'un savant, à condition de préciser clairement la source et ne pas confondre 
            cela avec la Révélation divine.
          </p>
        </CardContent>
      </Card>

      {/* Détails et précisions */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="text-xl text-blue-800">🧭 Détails et précisions :</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* 1. Le mot citation est neutre */}
          <div>
            <h3 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              1. ✔️ Le mot "citation" est neutre en soi
            </h3>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="font-semibold text-blue-800 mb-2">En arabe, on utilise des termes équivalents comme :</p>
              <ul className="space-y-2 text-blue-700">
                <li>• <span className="font-arabic text-lg">نقل</span> (naql = transmission)</li>
                <li>• <span className="font-arabic text-lg">قول</span> (qawl = parole)</li>
                <li>• <span className="font-arabic text-lg">استشهاد</span> (istishhād = se référer à)</li>
                <li>• <span className="font-arabic text-lg">اقتباس</span> (iqtibās = citation)</li>
              </ul>
            </div>

            <div className="border-l-4 border-l-blue-400 pl-4">
              <p className="text-blue-700">
                Le mot "citation" en français signifie simplement : 
                <strong>"Reproduire fidèlement ce qu'a dit une personne".</strong>
              </p>
              <p className="text-blue-600 mt-2">
                ➡️ Donc, tant que tu précises la source, il n'y a pas de mal à employer 
                le mot "citation" dans un texte, un enseignement ou une discussion.
              </p>
            </div>
          </div>

          {/* 2. À ne pas faire */}
          <div>
            <h3 className="font-bold text-red-700 mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              2. ⚠️ À ne pas faire :
            </h3>
            
            <div className="bg-red-50 p-4 rounded-lg space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold">❌</span>
                <p className="text-red-700">
                  Ne pas dire « citation » à la place de "Allah a dit" ou "le Prophète a dit" 
                  sans citer clairement l'origine.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold">❌</span>
                <p className="text-red-700">
                  Ne pas mélanger une parole divine (verset) avec des paroles humaines.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold">❌</span>
                <p className="text-red-700">
                  Ne pas attribuer un hadith sans vérifier son authenticité (sahih, hasan, etc.).
                </p>
              </div>
            </div>
          </div>

          {/* 3. Exemples corrects */}
          <div>
            <h3 className="font-bold text-green-700 mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              3. 📝 Exemples corrects :
            </h3>
            
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <p className="font-semibold text-green-800 mb-2">✅ Hadith (citation prophétique) :</p>
                <blockquote className="border-l-4 border-l-green-500 pl-4 text-green-700">
                  <p className="italic">"Les actions ne valent que par les intentions."</p>
                  <p className="text-sm font-medium mt-2">— Rapporté par al-Bukhari et Muslim</p>
                </blockquote>
              </div>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <p className="font-semibold text-green-800 mb-2">✅ Citation d'un savant :</p>
                <blockquote className="border-l-4 border-l-green-500 pl-4 text-green-700">
                  <p className="font-medium">Ibn al-Qayyim رحمه الله a dit :</p>
                  <p className="italic">"Les cœurs ne vivent que par la lumière du rappel d'Allah."</p>
                </blockquote>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Le respect des sources */}
      <Card className="border-l-4 border-l-amber-500">
        <CardHeader>
          <CardTitle className="text-xl text-amber-800 flex items-center gap-2">
            <Shield className="h-6 w-6" />
            🛡️ Le respect des sources en islam
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-amber-700 mb-4">Dans la tradition islamique, ce qui compte, c'est :</p>
          
          <ul className="space-y-2 mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-amber-600" />
              <span className="text-amber-700">La <strong>fidélité à la source</strong> (pas de déformation)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-amber-600" />
              <span className="text-amber-700">La <strong>précision</strong> (authenticité, chaîne de transmission)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-amber-600" />
              <span className="text-amber-700">L'<strong>intention</strong> (transmettre la vérité, non pas s'exhiber)</span>
            </li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-l-amber-500 p-4 rounded-r-lg">
            <p className="font-bold text-amber-800 mb-2">Le Prophète ﷺ a dit :</p>
            <p className="text-amber-700 italic">
              "Que celui qui ment sciemment à mon sujet prenne sa place en Enfer."
            </p>
            <p className="text-sm text-amber-600 mt-2">— Sahih al-Bukhari</p>
          </div>
        </CardContent>
      </Card>

      {/* Conclusion */}
      <Card className="border-2 border-green-500 bg-gradient-to-r from-green-50 to-emerald-50">
        <CardHeader>
          <CardTitle className="text-xl text-green-800">✅ Conclusion</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white border border-green-200 p-4 rounded-lg">
            <p className="font-bold text-green-800 mb-3">
              ✔️ Oui, tu peux dire « citation », à condition de :
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-green-700">Respecter la source (Coran, hadith, savant)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-green-700">Ne pas confondre avec la révélation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-green-700">Ne pas attribuer une parole au Prophète ﷺ sans preuve</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Formule recommandée */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="text-xl text-purple-800">📜 Formule islamiquement correcte recommandée :</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
            <div className="bg-white p-4 rounded border-l-4 border-l-purple-500">
              <p className="font-bold text-purple-800 mb-2">📜 Citation (parole rapportée) :</p>
              <p className="italic text-purple-700 mb-2">"..."</p>
              <p className="text-sm text-purple-600">
                — Prophète Muhammad ﷺ, rapporté par al-Bukhari, n°...
              </p>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-purple-100 rounded-lg">
            <p className="text-sm text-purple-700">
              <strong>Note :</strong> Cette formule respecte la tradition islamique en précisant 
              clairement la nature de la citation et sa source authentique.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Copyright */}
      <div className="text-center py-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          © Yakoubi Yamina – Tous droits réservés | Guide terminologique authentique selon les sources islamiques
        </p>
      </div>
    </div>
  );
}