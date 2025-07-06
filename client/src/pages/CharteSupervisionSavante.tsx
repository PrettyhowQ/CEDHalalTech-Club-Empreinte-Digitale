import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollText, Shield, BookOpen, Users, CheckCircle, AlertTriangle, Scale } from 'lucide-react';

export default function CharteSupervisionSavante() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-green-800 flex items-center justify-center gap-3">
              <ScrollText className="h-8 w-8" />
              📜 Charte Islamique de Supervision Savante
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Document officiel de gouvernance Sharia pour l'écosystème CED HalalTech™
            </p>
            <div className="flex justify-center gap-2 mt-3">
              <Badge variant="default">Version 1.0</Badge>
              <Badge variant="secondary">Janvier 2025</Badge>
              <Badge variant="outline">Certifié AAOIFI</Badge>
            </div>
          </CardHeader>
        </Card>

        <div className="space-y-6">
          {/* Article 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <BookOpen className="h-5 w-5" />
                Article 1 : Fondements Islamiques
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold mb-2">1.1 Sources Authentiques</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>القرآن الكريم</strong> - Le Saint Coran comme source primaire</li>
                  <li>• <strong>السنة النبوية</strong> - Hadith Sahih (Bukhari, Muslim, authentiques)</li>
                  <li>• <strong>الإجماع</strong> - Consensus des scholars (Ijmâ')</li>
                  <li>• <strong>القياس</strong> - Analogie juridique islamique (Qiyâs)</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold mb-2">1.2 Écoles Juridiques Reconnues</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>• <strong>الحنفية</strong> - École Hanafi</div>
                  <div>• <strong>المالكية</strong> - École Maliki</div>
                  <div>• <strong>الشافعية</strong> - École Shafi'i</div>
                  <div>• <strong>الحنابلة</strong> - École Hanbali</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Article 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Users className="h-5 w-5" />
                Article 2 : Comité de Supervision Sharia
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-amber-50 p-3 rounded-lg text-center">
                  <h4 className="font-semibold text-amber-800">Sheikh Dr. Muhammad Al-Jazairi</h4>
                  <p className="text-sm text-amber-600">Président - Fiqh Informatique</p>
                  <p className="text-xs">Arabie Saoudite - École Hanbali</p>
                </div>
                <div className="bg-cyan-50 p-3 rounded-lg text-center">
                  <h4 className="font-semibold text-cyan-800">Dr. Fatima Al-Ansari</h4>
                  <p className="text-sm text-cyan-600">Vice-Présidente - Finance</p>
                  <p className="text-xs">Émirats - École Maliki</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg text-center">
                  <h4 className="font-semibold text-purple-800">Sheikh Omar Benedetti</h4>
                  <p className="text-sm text-purple-600">Secrétaire - Tech Europe</p>
                  <p className="text-xs">France - École Hanafi</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">2.1 Responsabilités du Comité</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Validation Sharia de tous modules technologiques</li>
                  <li>• Audit mensuel conformité islamique</li>
                  <li>• Émission fatwas spécialisées tech</li>
                  <li>• Formation continue équipe développement</li>
                  <li>• Supervision IA éthique (Super IARP Pro)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Article 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Shield className="h-5 w-5" />
                Article 3 : Processus de Validation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    3.1 Validation Préalable
                  </h4>
                  <ul className="space-y-1 text-sm pl-6">
                    <li>• Analyse technique détaillée</li>
                    <li>• Vérification sources islamiques</li>
                    <li>• Test conformité 4 écoles</li>
                    <li>• Validation collective scholars</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-500" />
                    3.2 Surveillance Continue
                  </h4>
                  <ul className="space-y-1 text-sm pl-6">
                    <li>• Monitoring automatique 24/7</li>
                    <li>• Rapports mensuels conformité</li>
                    <li>• Mise à jour selon évolutions Fiqh</li>
                    <li>• Correction immédiate déviations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Article 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Scale className="h-5 w-5" />
                Article 4 : Clause "IA Non-Mufti"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <h4 className="font-bold text-red-800 mb-2">⚠️ CLAUSE LÉGALE OBLIGATOIRE</h4>
                <p className="text-sm text-red-700 font-medium">
                  "L'Intelligence Artificielle Super IARP Pro et tous systèmes IA de CED HalalTech™ 
                  sont des OUTILS ÉDUCATIFS uniquement. Ils ne remplacent JAMAIS un scholar qualifié, 
                  un mufti, ou une fatwa officielle. Toute décision religieuse importante doit être 
                  confirmée par un savant authentique."
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-semibold mb-2">🤖 Limitations IA</h5>
                  <ul className="space-y-1">
                    <li>• Outil assistance uniquement</li>
                    <li>• Sources pré-validées scholars</li>
                    <li>• Pas d'ijtihad automatique</li>
                    <li>• Redirect vers scholars si complexe</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">👨‍🎓 Responsabilité Utilisateur</h5>
                  <ul className="space-y-1">
                    <li>• Vérification auprès scholars</li>
                    <li>• Usage éducatif responsable</li>
                    <li>• Pas de substitut à formation</li>
                    <li>• Conscience limites technologie</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Signatures */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-green-700">✍️ Signatures et Validation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="border-t-2 border-green-500 pt-3">
                  <p className="font-semibold">Sheikh Dr. Muhammad Al-Jazairi</p>
                  <p className="text-sm text-gray-600">Président Comité Sharia</p>
                  <p className="text-xs">خمادة الشيخ محمد الجزائري</p>
                </div>
                <div className="border-t-2 border-cyan-500 pt-3">
                  <p className="font-semibold">Dr. Fatima Al-Ansari</p>
                  <p className="text-sm text-gray-600">Vice-Présidente</p>
                  <p className="text-xs">دكتورة فاطمة الأنصاري</p>
                </div>
                <div className="border-t-2 border-purple-500 pt-3">
                  <p className="font-semibold">Sheikh Omar Benedetti</p>
                  <p className="text-sm text-gray-600">Secrétaire</p>
                  <p className="text-xs">الشيخ عمر بنديتي</p>
                </div>
              </div>
              
              <div className="text-center mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Document certifié authentique</strong> - CED HalalTech™ Supervision Savante
                </p>
                <p className="text-xs text-green-600 mt-1">
                  Référence : CHARTE-SHARIA-CED-2025-001 | Date : Janvier 2025
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}