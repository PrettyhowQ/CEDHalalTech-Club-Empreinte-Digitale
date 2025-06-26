import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Download, Star, CheckCircle, Globe, Users } from 'lucide-react';

export function IslamicFoundationsDocument() {
  return (
    <div className="space-y-8">
      {/* En-tête Document */}
      <Card className="border-2 border-emerald-500 bg-gradient-to-r from-emerald-50 to-blue-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-emerald-600" />
              <div>
                <CardTitle className="text-2xl text-emerald-800">
                  🕌 Les Fondements de l'Islam
                </CardTitle>
                <p className="text-sm text-gray-600">
                  selon le Coran, la Sunna, les Salafs et l'Ijmāʿ
                </p>
              </div>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Télécharger PDF
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* 1. Le Coran */}
      <Card className="border-l-4 border-l-emerald-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <span className="text-2xl">📘</span>
            <span>1. Le Coran – Parole d'Allah</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600" />
              Révélé au Prophète Muhammad ﷺ en arabe
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600" />
              Source principale de législation islamique
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600" />
              Inaltéré, mémorisé, récité dans toutes les prières
            </li>
          </ul>
          
          <div className="bg-emerald-50 border-l-4 border-l-emerald-500 p-4 rounded-r-lg">
            <p className="font-bold text-emerald-800 mb-2">Verset de référence :</p>
            <p className="text-sm text-emerald-700 font-arabic mb-1">
              "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ"
            </p>
            <p className="text-sm text-emerald-700">
              <em>"C'est Nous qui avons fait descendre le Rappel, et c'est Nous qui en sommes gardiens."</em>
              <br />
              <strong>— Sourate Al-Hijr (15:9)</strong>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 2. La Sunna */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <span className="text-2xl">🌟</span>
            <span>2. La Sunna – Voie du Prophète ﷺ</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-blue-600" />
              Paroles, actions, approbations du Prophète Muhammad ﷺ
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-blue-600" />
              Explique, détaille et complète le Coran
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-blue-600" />
              Se compose de <strong>hadiths</strong> authentiques
            </li>
          </ul>
          
          <div className="bg-blue-50 border-l-4 border-l-blue-500 p-4 rounded-r-lg">
            <p className="font-bold text-blue-800 mb-2">Verset de référence :</p>
            <p className="text-sm text-blue-700 font-arabic mb-1">
              "وَأَطِيعُوا اللَّهَ وَالرَّسُولَ لَعَلَّكُمْ تُرْحَمُونَ"
            </p>
            <p className="text-sm text-blue-700">
              <em>"Et obéissez à Allah et au Messager afin qu'il vous soit fait miséricorde."</em>
              <br />
              <strong>— Sourate Âl-Imrân (3:132)</strong>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 3. Les Salaf */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <span className="text-2xl">👣</span>
            <span>3. La Voie des Pieux Prédécesseurs (السلف الصالح)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-700">
            Compréhension des <strong>3 premières générations</strong> de l'islam :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-800">1. Les Compagnons</h4>
              <p className="text-sm text-purple-700">(الصحابة - Sahaba)</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-800">2. Les Successeurs</h4>
              <p className="text-sm text-purple-700">(التابعون - Tābiʿīn)</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-800">3. Successeurs des Successeurs</h4>
              <p className="text-sm text-purple-700">(تابع التابعين - Tābiʿ at-Tābiʿīn)</p>
            </div>
          </div>
          
          <div className="bg-purple-50 border-l-4 border-l-purple-500 p-4 rounded-r-lg">
            <p className="font-bold text-purple-800 mb-2">Hadith prophétique :</p>
            <p className="text-sm text-purple-700 font-arabic mb-1">
              "خير الناس قرني ثم الذين يلونهم ثم الذين يلونهم"
            </p>
            <p className="text-sm text-purple-700">
              <em>"Les meilleurs des gens sont ma génération, puis ceux qui les suivent, puis ceux qui les suivent."</em>
              <br />
              <strong>— Rapporté par al-Bukhari & Muslim</strong>
            </p>
            <p className="text-sm text-purple-600 mt-2">
              ✅ Leur compréhension est <strong>la plus pure</strong>, exempte de philosophie ou d'innovation.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 4. L'Ijmâ' */}
      <Card className="border-l-4 border-l-amber-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <span className="text-2xl">🤝</span>
            <span>4. Le Consensus (الإجماع - Ijmāʿ)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-amber-600" />
              Accord unanime des savants musulmans sur une question religieuse
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-amber-600" />
              Source juridique <strong>fiable</strong> après le Coran et la Sunna
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-amber-600" />
              Protège l'unité de la communauté
            </li>
          </ul>
          
          <div className="bg-amber-50 border-l-4 border-l-amber-500 p-4 rounded-r-lg">
            <p className="font-bold text-amber-800 mb-2">Citation :</p>
            <p className="text-sm text-amber-700">
              <strong>Imâm al-Shafiʿî :</strong><br />
              <em>"Le consensus des savants de la communauté est une preuve sur laquelle on se base."</em>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 5. Les 4 Écoles */}
      <Card className="border-l-4 border-l-indigo-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <span className="text-2xl">🏛️</span>
            <span>5. Les Quatre Écoles Juridiques Sunnites (المذاهب الأربعة)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-indigo-300">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="border border-indigo-300 p-3 text-left font-bold text-indigo-800">École</th>
                  <th className="border border-indigo-300 p-3 text-left font-bold text-indigo-800">Fondateur</th>
                  <th className="border border-indigo-300 p-3 text-left font-bold text-indigo-800">Région principale</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-indigo-300 p-3 font-bold text-indigo-700">Hanafite</td>
                  <td className="border border-indigo-300 p-3">Imâm Abū Ḥanīfa (Iraq)</td>
                  <td className="border border-indigo-300 p-3">Turquie, Balkans, Asie centrale, Inde</td>
                </tr>
                <tr className="bg-indigo-25">
                  <td className="border border-indigo-300 p-3 font-bold text-indigo-700">Mâlikite</td>
                  <td className="border border-indigo-300 p-3">Imâm Mālik (Médine)</td>
                  <td className="border border-indigo-300 p-3">Maghreb, Afrique de l'Ouest</td>
                </tr>
                <tr>
                  <td className="border border-indigo-300 p-3 font-bold text-indigo-700">Shafiʿite</td>
                  <td className="border border-indigo-300 p-3">Imâm Ash-Shāfiʿī (Égypte)</td>
                  <td className="border border-indigo-300 p-3">Égypte, Indonésie, Yémen</td>
                </tr>
                <tr className="bg-indigo-25">
                  <td className="border border-indigo-300 p-3 font-bold text-indigo-700">Hanbalite</td>
                  <td className="border border-indigo-300 p-3">Imâm Aḥmad ibn Ḥanbal (Bagdad)</td>
                  <td className="border border-indigo-300 p-3">Arabie Saoudite, Golfe</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 space-y-3">
            <p className="font-bold text-indigo-800">✅ Ces quatre écoles :</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Star className="h-4 w-4 text-indigo-600" />
                Suivent les <strong>mêmes sources</strong> : Coran, Sunna, Ijmāʿ, Qiyās (analogie)
              </li>
              <li className="flex items-center gap-2">
                <Star className="h-4 w-4 text-indigo-600" />
                Sont toutes <strong>valables et respectées</strong>
              </li>
              <li className="flex items-center gap-2">
                <Star className="h-4 w-4 text-indigo-600" />
                Diffèrent parfois dans les détails (fiqh), <strong>jamais dans les fondements</strong> ('aqīda)
              </li>
            </ul>
          </div>

          <div className="bg-indigo-50 border-l-4 border-l-indigo-500 p-4 rounded-r-lg mt-4">
            <p className="font-bold text-indigo-800 mb-2">Citation :</p>
            <p className="text-sm text-indigo-700">
              <strong>Ibn Taymiyya رحمه الله :</strong><br />
              <em>"Les quatre imams sont dans la guidée. Celui qui suit l'un d'eux est sur la voie de l'islam."</em>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Résumé Méthodologie */}
      <Card className="border-2 border-green-500 bg-gradient-to-r from-green-50 to-emerald-50">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-green-800">
            ✅ Résumé : La Méthodologie Sunnite Authentique
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            <div className="text-center p-4 bg-white rounded-lg border border-green-200">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
              <h4 className="font-bold text-emerald-700">📖 Coran</h4>
              <p className="text-xs">Parole d'Allah</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-green-200">
              <Star className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <h4 className="font-bold text-blue-700">🌟 Sunna</h4>
              <p className="text-xs">Explication prophétique</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-green-200">
              <Users className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <h4 className="font-bold text-purple-700">👣 Salafs</h4>
              <p className="text-xs">Compréhension des premières générations</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-green-200">
              <Globe className="h-8 w-8 mx-auto mb-2 text-amber-600" />
              <h4 className="font-bold text-amber-700">🤝 Ijmāʿ</h4>
              <p className="text-xs">Consensus des savants</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-green-200">
              <CheckCircle className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
              <h4 className="font-bold text-indigo-700">🏛️ Madhāhib</h4>
              <p className="text-xs">Méthodes d'interprétation (fiqh)</p>
            </div>
          </div>

          <div className="bg-green-100 border border-green-300 rounded-lg p-4">
            <p className="text-sm text-green-700">
              ⚠️ Suivre une école juridique ne signifie pas <strong>imiter aveuglément</strong>, 
              mais adopter une <strong>méthode fiable</strong> pour comprendre l'islam correctement.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Recommandations */}
      <Card className="border-l-4 border-l-gray-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <span className="text-2xl">📌</span>
            <span>Recommandations</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-gray-600" />
              Étudie avec un enseignant compétent
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-gray-600" />
              Lis les ouvrages des savants reconnus
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-gray-600" />
              Évite les innovations (bidʿa) et les interprétations individuelles non fondées
            </li>
          </ul>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">📚 Ressources utiles :</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Riyâdh as-Sâlihîn – Imâm Nawawî</li>
              <li>• Al-Uṣūl ath-Thalātha – Imâm Muhammad ibn Abd al-Wahhāb</li>
              <li>• Al-Muwatta – Imâm Mālik</li>
              <li>• Al-Risālah – Imâm Ash-Shāfiʿî</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Copyright */}
      <div className="text-center py-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          📝 <strong>Copyright :</strong><br />
          © Yakoubi Yamina – Tous droits réservés | All rights reserved | جميع الحقوق محفوظة | 版权所有
        </p>
      </div>
    </div>
  );
}