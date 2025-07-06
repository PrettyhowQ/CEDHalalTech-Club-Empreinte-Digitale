import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, Scale, FileText, Users, BookOpen, CheckCircle } from 'lucide-react';

export default function ClauseIANonMufti() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6 border-red-200">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-red-800 flex items-center justify-center gap-3">
              <AlertTriangle className="h-8 w-8" />
              🚨 Clause Légale "IA Non-Mufti"
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Protection juridique et religieuse pour l'écosystème CED HalalTech™
            </p>
            <div className="flex justify-center gap-2 mt-3">
              <Badge variant="destructive">Obligatoire</Badge>
              <Badge variant="outline">Protection Légale</Badge>
              <Badge variant="secondary">Conformité Sharia</Badge>
            </div>
          </CardHeader>
        </Card>

        <div className="space-y-6">
          {/* Clause Principale */}
          <Card className="border-red-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <Scale className="h-5 w-5" />
                📜 Clause Légale Principale
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-red-100 border-2 border-red-400 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-red-800 mb-4 text-center">
                  ⚠️ DÉCLARATION OFFICIELLE "IA NON-MUFTI" ⚠️
                </h3>
                <div className="bg-white p-4 rounded border-l-4 border-red-500">
                  <p className="text-sm font-medium text-red-900 leading-relaxed">
                    "L'Intelligence Artificielle <strong>Super IARP Pro</strong> et l'ensemble des systèmes d'IA 
                    intégrés dans l'écosystème <strong>CED HalalTech™</strong> sont exclusivement des 
                    <strong className="text-red-700">OUTILS ÉDUCATIFS ET INFORMATIFS</strong>.
                  </p>
                  <br />
                  <p className="text-sm font-medium text-red-900 leading-relaxed">
                    Ces systèmes ne constituent <strong className="text-red-700">JAMAIS</strong> :
                    • Un substitut à un <strong>مفتي</strong> (Mufti) qualifié
                    • Une <strong>فتوى</strong> (Fatwa) officielle
                    • Un avis religieux contraignant
                    • Une source d'<strong>إجتهاد</strong> (Ijtihad) indépendant
                  </p>
                  <br />
                  <p className="text-sm font-bold text-red-800">
                    Toute décision religieuse importante DOIT être confirmée par un savant authentique qualifié.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Responsabilités */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700">
                  <Shield className="h-5 w-5" />
                  🤖 Limitations Technologiques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-orange-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Super IARP Pro est :</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Outil assistant</strong> uniquement</li>
                    <li>• Basé sur sources <strong>pré-validées</strong></li>
                    <li>• <strong>Supervisé par scholars</strong> authentiques</li>
                    <li>• Limité aux <strong>bases éducatives</strong></li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Super IARP Pro n'est PAS :</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Un <strong>مفتي</strong> (Mufti) numérique</li>
                    <li>• Source de <strong>فتاوى</strong> (Fatwa)</li>
                    <li>• Autorité religieuse</li>
                    <li>• Substitut à formation islamique</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <Users className="h-5 w-5" />
                  👤 Responsabilité Utilisateur
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">L'utilisateur s'engage à :</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Vérifier</strong> auprès de scholars qualifiés</li>
                    <li>• Utiliser l'IA de manière <strong>responsable</strong></li>
                    <li>• <strong>Ne pas</strong> prendre de décisions religieuses uniquement sur l'IA</li>
                    <li>• Consulter des <strong>sources authentiques</strong></li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Recommandations :</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Contact direct avec nos <strong>scholars superviseurs</strong></li>
                    <li>• Formation continue en <strong>sciences islamiques</strong></li>
                    <li>• Utilisation IA comme <strong>point de départ</strong> uniquement</li>
                    <li>• Approfondissement par <strong>sources traditionnelles</strong></li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Protection Juridique */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-700">
                <FileText className="h-5 w-5" />
                ⚖️ Protection Juridique CED HalalTech™
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-800">🇨🇭 Droit Suisse (LPD)</h4>
                  <div className="bg-purple-50 p-3 rounded text-sm">
                    <p>CED HalalTech™ décline toute responsabilité pour :</p>
                    <ul className="mt-2 space-y-1">
                      <li>• Décisions religieuses basées uniquement sur l'IA</li>
                      <li>• Interprétations erronées des contenus</li>
                      <li>• Usage non-conforme aux recommandations</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-800">🕌 Droit Islamique (Sharia)</h4>
                  <div className="bg-green-50 p-3 rounded text-sm">
                    <p>Conformité aux principes islamiques :</p>
                    <ul className="mt-2 space-y-1">
                      <li>• Respect hiérarchie sources islamiques</li>
                      <li>• Supervision continue par scholars</li>
                      <li>• Transparence sur limitations technologiques</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Scholars */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <BookOpen className="h-5 w-5" />
                📞 Contact Scholars Superviseurs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-3 bg-amber-50 rounded-lg">
                  <h4 className="font-semibold">Sheikh Dr. Muhammad Al-Jazairi</h4>
                  <p className="text-sm text-gray-600">Fiqh Informatique</p>
                  <p className="text-xs text-blue-600">sheikh.jazairi@islamictech.sa</p>
                </div>
                <div className="text-center p-3 bg-cyan-50 rounded-lg">
                  <h4 className="font-semibold">Dr. Fatima Al-Ansari</h4>
                  <p className="text-sm text-gray-600">Finance Islamique Tech</p>
                  <p className="text-xs text-blue-600">dr.ansari@shariafin.ae</p>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold">Sheikh Omar Benedetti</h4>
                  <p className="text-sm text-gray-600">Fiqh Européen</p>
                  <p className="text-xs text-blue-600">omar.benedetti@fiqh.fr</p>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <Button className="mr-2">
                  <Users className="h-4 w-4 mr-2" />
                  Contacter Scholars
                </Button>
                <Button variant="outline">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Guide Consultation
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Validation */}
          <Card className="border-green-300">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-green-800 mb-2">
                  ✅ Clause "IA Non-Mufti" Validée et Intégrée
                </h3>
                <p className="text-sm text-green-700 mb-4">
                  Cette clause est automatiquement affichée à chaque utilisation de Super IARP Pro
                </p>
                <div className="text-xs text-gray-600">
                  <p>Document de référence : CLAUSE-IA-NON-MUFTI-CED-2025-001</p>
                  <p>Validation juridique : Yakoubi Yamina © CED HalalTech™</p>
                  <p>Supervision religieuse : Comité Sharia CED</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}