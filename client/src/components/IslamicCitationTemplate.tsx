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
                  Conforme au Coran, à la Sunna, à la compréhension des salafs et à l'ijmâʿ 
                  (consensus des 4 écoles : chaféite, hanbalite, malikite, hanafite)
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
              <li>• Toujours citer la <strong>source</strong> (Bukhari, Muslim, etc.)</li>
              <li>• Éviter le terme "citation" seul → utiliser <strong>"hadith"</strong> ou <strong>"parole prophétique"</strong></li>
              <li>• Si doute sur l'authenticité : dire « Il est rapporté que… »</li>
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
              <li>• Toujours accompagner du terme <strong>rahimahoullah</strong> (رحمه الله) ou <strong>rahimahâ Allah</strong> (pour une femme)</li>
              <li>• Si le savant est vivant : utiliser <strong>حفظه الله</strong> (ḥafaẓahu Allāh)</li>
              <li>• Éviter d'attribuer au Prophète ﷺ sans preuve</li>
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
              <span className="text-yellow-600">🔸</span>
              Attention :
            </p>
            <p className="text-sm text-yellow-700 mb-2">
              Si ce n'est pas confirmé comme <strong>hadith sahîh</strong>, <strong>ne pas l'attribuer directement au Prophète ﷺ</strong>
            </p>
            <p className="text-sm text-yellow-700 mb-2">Employer plutôt :</p>
            <ul className="space-y-1 text-sm text-yellow-700 ml-4">
              <li>• "Il est dit que..."</li>
              <li>• "Les savants ont rappelé que..."</li>
              <li>• "Selon certains enseignements islamiques..."</li>
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

      {/* À éviter / À privilégier */}
      <Card className="border-l-4 border-l-red-500">
        <CardHeader>
          <CardTitle className="text-xl text-red-800">📘 À éviter dans un contexte islamique</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-3">❌ Dire simplement :</h4>
              <ul className="space-y-2 text-red-700">
                <li>• "Citation du Prophète"</li>
                <li>• "Citation islamique" (sans précision)</li>
                <li>• "Selon l'Islam" sans source</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-3">✅ À privilégier :</h4>
              <ul className="space-y-2 text-green-700">
                <li>• "Verset coranique"</li>
                <li>• "Hadith sahîh"</li>
                <li>• "Parole d'un compagnon"</li>
                <li>• "Avis d'un savant reconnu"</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bonus IA */}
      <Card className="border-2 border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="text-xl text-blue-800">🧠 Bonus : IA & Respect de la source islamique</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-blue-700 mb-4">
            PrettyhowQ IA peut générer des rappels islamique authentifiés et sourcés.
            Chaque citation passe par un filtre : <strong>Coran – Sunna – Salaf – Ijmâʿ</strong>.
          </p>
          
          <div className="bg-blue-100 border border-blue-200 p-4 rounded-lg mb-4">
            <h4 className="font-bold text-blue-800 mb-2">✅ Utilisable pour :</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <Badge variant="outline" className="text-blue-600">Articles</Badge>
              <Badge variant="outline" className="text-blue-600">Plateformes éducatives</Badge>
              <Badge variant="outline" className="text-blue-600">Fichiers .md VS Code</Badge>
              <Badge variant="outline" className="text-blue-600">Applications mobiles</Badge>
              <Badge variant="outline" className="text-blue-600">Générateurs CED & IA</Badge>
              <Badge variant="outline" className="text-blue-600">GitHub/Notion</Badge>
            </div>
          </div>
          
          <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
            <p className="text-blue-600 font-arabic text-lg">
              وفقك الله في هذه المهمة الجميلة لنقل المعرفة بوضوح وأمانة
            </p>
            <p className="text-sm text-blue-700 mt-2">
              Qu'Allah te facilite dans cette belle mission de transmission claire et fidèle du savoir 🕊️
            </p>
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