import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Star, User, MessageCircle, Download, Copy } from 'lucide-react';

export function IslamicCitationTemplate() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <Card className="border-2 border-emerald-500 bg-gradient-to-r from-emerald-50 to-blue-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-emerald-600" />
              <div>
                <CardTitle className="text-2xl text-emerald-800">
                  🕌 Modèle de Citation Islamique Respectueuse
                </CardTitle>
                <p className="text-sm text-gray-600">
                  (Coran, Sunna, Salafs, Savants)
                </p>
              </div>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Télécharger Modèle
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* 1. Verset du Coran */}
      <Card className="border-l-4 border-l-emerald-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-emerald-600" />
            <span>📖 Verset du Coran</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg mb-4">
            <blockquote className="border-l-4 border-l-emerald-500 pl-4">
              <p className="font-bold text-emerald-800 mb-2">Verset coranique :</p>
              <p className="text-emerald-700 italic mb-2">
                "Et dis : « La vérité émane de votre Seigneur. »."
              </p>
              <p className="text-sm font-medium text-emerald-600">
                — <strong>Sourate Al-Kahf (18:29)</strong>
              </p>
            </blockquote>
          </div>
          
          <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
            <span className="text-blue-600 font-bold text-sm">🔹</span>
            <p className="text-sm text-blue-700">
              <strong>Note :</strong> Toujours mentionner <strong>le nom de la sourate</strong> et <strong>le numéro du verset</strong>.
            </p>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => copyToClipboard(`> **Verset coranique :**  
> _"Et dis : « La vérité émane de votre Seigneur. »."_  
> — **Sourate Al-Kahf (18:29)**`)}
              className="flex items-center gap-2"
            >
              <Copy className="h-4 w-4" />
              Copier le modèle
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 2. Hadith authentique */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Star className="h-6 w-6 text-blue-600" />
            <span>🌟 Hadith authentique</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-4">
            <blockquote className="border-l-4 border-l-blue-500 pl-4">
              <p className="font-bold text-blue-800 mb-2">Parole du Prophète ﷺ :</p>
              <p className="text-blue-700 italic mb-2">
                "Certes, les actes ne valent que par les intentions."
              </p>
              <p className="text-sm font-medium text-blue-600">
                — <strong>Rapporté par Al-Bukhari, n°1</strong> et <strong>Muslim, n°1907</strong>
              </p>
            </blockquote>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <p className="font-bold text-blue-800 mb-2 flex items-center gap-2">
              <span className="text-blue-600">🔹</span>
              Note : Toujours préciser :
            </p>
            <ul className="space-y-1 text-sm text-blue-700 ml-6">
              <li>• La <strong>chaîne d'authenticité</strong> (Bukhari, Muslim, etc.)</li>
              <li>• Le <strong>numéro du hadith</strong>, si possible</li>
              <li>• Éviter d'écrire "citation du Prophète" seule : dire plutôt <strong>"Parole prophétique"</strong> ou <strong>"Hadith rapporté par..."</strong></li>
            </ul>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => copyToClipboard(`> **Parole du Prophète ﷺ :**  
> _"Certes, les actes ne valent que par les intentions."_  
> — **Rapporté par Al-Bukhari, n°1** et **Muslim, n°1907**`)}
              className="flex items-center gap-2"
            >
              <Copy className="h-4 w-4" />
              Copier le modèle
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 3. Parole d'un savant */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <User className="h-6 w-6 text-purple-600" />
            <span>👳‍♂️ Parole d'un savant ou salaf</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg mb-4">
            <blockquote className="border-l-4 border-l-purple-500 pl-4">
              <p className="font-bold text-purple-800 mb-2">
                Parole de Ibn Taymiyya رحمه الله :
              </p>
              <p className="text-purple-700 italic">
                "Il n'y a aucun bonheur dans ce bas-monde sans Tawḥîd."
              </p>
            </blockquote>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
            <p className="font-bold text-purple-800 mb-2 flex items-center gap-2">
              <span className="text-purple-600">🔹</span>
              Note :
            </p>
            <ul className="space-y-1 text-sm text-purple-700 ml-2">
              <li>• Ajouter <strong>rahimahoullah</strong> (رحمه الله) ou <strong>rahimahâ Allah</strong> si la personne est décédée</li>
              <li>• Utiliser des termes comme :</li>
            </ul>
            <div className="ml-4 mt-2 flex flex-wrap gap-2">
              <Badge variant="outline" className="text-purple-600">Parole rapportée</Badge>
              <Badge variant="outline" className="text-purple-600">Maxime</Badge>
              <Badge variant="outline" className="text-purple-600">Conseil</Badge>
              <Badge variant="outline" className="text-purple-600">Avis de savant</Badge>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => copyToClipboard(`> **Parole de Ibn Taymiyya رحمه الله :**  
> _"Il n'y a aucun bonheur dans ce bas-monde sans Tawḥîd."_`)}
              className="flex items-center gap-2"
            >
              <Copy className="h-4 w-4" />
              Copier le modèle
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 4. Rappel islamique */}
      <Card className="border-l-4 border-l-amber-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <MessageCircle className="h-6 w-6 text-amber-600" />
            <span>📌 Rappel islamique (sans source directe)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mb-4">
            <blockquote className="border-l-4 border-l-amber-500 pl-4">
              <p className="font-bold text-amber-800 mb-2">Rappel utile :</p>
              <p className="text-amber-700 italic">
                "Allah ne regarde pas vos corps ni vos apparences, mais Il regarde vos cœurs et vos actions."
              </p>
            </blockquote>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-300 p-4 rounded-lg">
            <p className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
              <span className="text-yellow-600">🟡</span>
              Attention :
            </p>
            <p className="text-sm text-yellow-700 mb-2">
              Si ce n'est pas confirmé comme hadith sahih, ne pas l'attribuer directement au Prophète ﷺ. Utiliser plutôt :
            </p>
            <ul className="space-y-1 text-sm text-yellow-700 ml-4">
              <li>• "Il est rapporté que..."</li>
              <li>• "Certains savants ont dit que..."</li>
              <li>• "On trouve dans les enseignements..." etc.</li>
            </ul>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => copyToClipboard(`> **Rappel utile :**  
> _"Allah ne regarde pas vos corps ni vos apparences, mais Il regarde vos cœurs et vos actions."_`)}
              className="flex items-center gap-2"
            >
              <Copy className="h-4 w-4" />
              Copier le modèle
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Résumé : Formules recommandées */}
      <Card className="border-2 border-green-500 bg-gradient-to-r from-green-50 to-emerald-50">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-green-800">
            ✅ Résumé : Formules recommandées
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-green-300">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-green-300 p-3 text-left font-bold text-green-800">Type de contenu</th>
                  <th className="border border-green-300 p-3 text-left font-bold text-green-800">Formule recommandée</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-green-300 p-3 font-medium text-green-700">📖 Verset</td>
                  <td className="border border-green-300 p-3 text-green-700">"Verset coranique — Sourate X, verset Y"</td>
                </tr>
                <tr className="bg-green-25">
                  <td className="border border-green-300 p-3 font-medium text-green-700">🌟 Hadith</td>
                  <td className="border border-green-300 p-3 text-green-700">"Parole du Prophète ﷺ — Rapporté par..."</td>
                </tr>
                <tr>
                  <td className="border border-green-300 p-3 font-medium text-green-700">👳‍♂️ Parole d'un savant</td>
                  <td className="border border-green-300 p-3 text-green-700">"Parole de [Nom] رحمه الله"</td>
                </tr>
                <tr className="bg-green-25">
                  <td className="border border-green-300 p-3 font-medium text-green-700">📌 Rappel général</td>
                  <td className="border border-green-300 p-3 text-green-700">"Rappel islamique" ou "Conseil spirituel"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Copyright */}
      <Card className="border-l-4 border-l-gray-500 bg-gray-50">
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">🔐 Copyright (à inclure en bas de page)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white border border-gray-200 p-4 rounded-lg">
            <div className="bg-gray-100 p-3 rounded font-mono text-sm">
              <code className="text-gray-800">
                &lt;footer&gt;<br />
                © Yakoubi Yamina – Tous droits réservés | All rights reserved | جميع الحقوق محفوظة | 版权所有<br />
                &lt;/footer&gt;
              </code>
            </div>
          </div>
          
          <div className="mt-4 flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => copyToClipboard(`<footer>
© Yakoubi Yamina – Tous droits réservés | All rights reserved | جميع الحقوق محفوظة | 版权所有
</footer>`)}
              className="flex items-center gap-2"
            >
              <Copy className="h-4 w-4" />
              Copier le footer
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Note d'utilisation */}
      <div className="text-center py-6 bg-emerald-50 rounded-lg border border-emerald-200">
        <p className="text-sm text-emerald-700 mb-2">
          📄 <strong>Ce modèle est prêt à être utilisé dans :</strong>
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="outline" className="text-emerald-600">Fichiers .md</Badge>
          <Badge variant="outline" className="text-emerald-600">Articles</Badge>
          <Badge variant="outline" className="text-emerald-600">Cours</Badge>
          <Badge variant="outline" className="text-emerald-600">GitHub</Badge>
          <Badge variant="outline" className="text-emerald-600">Notion</Badge>
          <Badge variant="outline" className="text-emerald-600">VS Code</Badge>
          <Badge variant="outline" className="text-emerald-600">CED & IA PrettyhowQ</Badge>
        </div>
      </div>
    </div>
  );
}