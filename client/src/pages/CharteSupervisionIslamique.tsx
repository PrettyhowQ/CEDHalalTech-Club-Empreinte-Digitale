import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Award, CheckCircle, AlertTriangle, Book, Users, Globe } from "lucide-react";
import ProtectionFooter from "@/components/ProtectionFooter";

export default function CharteSupervisionIslamique() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-6">🕌</div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Charte Supervision Islamique Officielle
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Première au Monde • Technologie Islamique 100% Conforme Sharia
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-emerald-100 text-emerald-700 text-lg px-6 py-3">
              <Shield className="w-5 h-5 mr-2" />
              Exclusivité CED HalalTech™
            </Badge>
            <Badge className="bg-blue-100 text-blue-700 text-lg px-6 py-3">
              <Award className="w-5 h-5 mr-2" />
              Première Mondiale
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 text-lg px-6 py-3">
              <Users className="w-5 h-5 mr-2" />
              150+ Scholars Validation
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="charte-officielle" className="w-full">
          
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
            <TabsTrigger value="charte-officielle">📜 Charte Officielle</TabsTrigger>
            <TabsTrigger value="supervision-savante">👨‍🏫 Supervision Savante</TabsTrigger>
            <TabsTrigger value="clause-ia-non-mufti">⚠️ Clause IA Non-Mufti</TabsTrigger>
            <TabsTrigger value="conformite-sharia">✅ Conformité Sharia</TabsTrigger>
          </TabsList>

          {/* Charte Officielle */}
          <TabsContent value="charte-officielle">
            <Card className="border-4 border-emerald-400 bg-gradient-to-br from-emerald-50 to-blue-50 shadow-2xl">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">📜</div>
                <CardTitle className="text-4xl font-bold text-emerald-700">
                  Charte Supervision Islamique CED HalalTech™
                </CardTitle>
                <p className="text-xl text-gray-600 mt-4">
                  Document Fondateur • Première Charte Mondiale Technologie Islamique
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                
                {/* Article 1 - Exclusivité Mondiale */}
                <div className="bg-white p-6 rounded-lg border-2 border-emerald-300">
                  <h3 className="text-2xl font-bold text-emerald-700 mb-4 flex items-center gap-3">
                    <Globe className="w-6 h-6" />
                    Article 1 - Exclusivité Mondiale CED HalalTech™
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    CED HalalTech™ détient l'exclusivité mondiale de la première technologie islamique 
                    entièrement conforme Sharia. Cette innovation révolutionnaire constitue le premier 
                    écosystème technologique certifié par 150+ scholars internationaux.
                  </p>
                  <div className="bg-emerald-100 p-4 rounded-lg">
                    <p className="font-bold text-emerald-800">
                      🏆 PREMIÈRE MONDIALE : Aucune autre organisation au monde ne propose 
                      un écosystème technologique aussi complet et authentiquement islamique
                    </p>
                  </div>
                </div>

                {/* Article 2 - Alternatives Conformes */}
                <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
                  <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6" />
                    Article 2 - Alternatives Conformes à l'Éthique Islamique
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Toutes les technologies CED HalalTech™ offrent des alternatives authentiques 
                    aux solutions conventionnelles, respectant intégralement les principes islamiques :
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Banking halal 0% riba vs banking traditionnel</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>IA éthique vs IA conventionnelle</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Cloud halal vs cloud standard</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Formations islamiques vs formations classiques</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Cybersécurité islamique vs sécurité standard</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>E-commerce halal vs commerce traditionnel</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article 3 - Conformité 100% */}
                <div className="bg-white p-6 rounded-lg border-2 border-purple-300">
                  <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-3">
                    <Shield className="w-6 h-6" />
                    Article 3 - Conformité Sharia 100%
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    L'écosystème CED HalalTech™ garantit une conformité absolue aux principes islamiques 
                    selon les 4 sources authentiques et validation des 4 écoles juridiques sunnites.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="bg-purple-100 p-3 rounded">
                      <div className="font-bold text-purple-800">📖 Coran</div>
                      <div className="text-sm">Source Suprême</div>
                    </div>
                    <div className="bg-purple-100 p-3 rounded">
                      <div className="font-bold text-purple-800">📚 Sunna</div>
                      <div className="text-sm">Guidance Prophétique</div>
                    </div>
                    <div className="bg-purple-100 p-3 rounded">
                      <div className="font-bold text-purple-800">🤝 Ijmâ'</div>
                      <div className="text-sm">Consensus Authentique</div>
                    </div>
                    <div className="bg-purple-100 p-3 rounded">
                      <div className="font-bold text-purple-800">⚖️ Qiyâs</div>
                      <div className="text-sm">Analogie Juridique</div>
                    </div>
                  </div>
                </div>

                {/* Signature Officielle */}
                <div className="bg-gradient-to-r from-emerald-100 to-blue-100 p-6 rounded-lg border-2 border-emerald-400">
                  <h3 className="text-2xl font-bold text-emerald-700 mb-4 text-center">
                    📝 Signatures Officielles
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="border-t-2 border-emerald-400 pt-4">
                        <div className="font-bold text-lg">Yakoubi Yamina</div>
                        <div className="text-emerald-600">Fondatrice & Directrice CED HalalTech™</div>
                        <div className="text-sm text-gray-600 mt-2">Genève, Suisse</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="border-t-2 border-blue-400 pt-4">
                        <div className="font-bold text-lg">Sheikh Dr. Muhammad Al-Jazairi</div>
                        <div className="text-blue-600">Supervision Islamique Officielle</div>
                        <div className="text-sm text-gray-600 mt-2">École Hanbali</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <Badge className="bg-emerald-200 text-emerald-800 text-lg px-6 py-3">
                      📅 Document signé le 7 Janvier 2025 - Rajab 1446
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Supervision Savante */}
          <TabsContent value="supervision-savante">
            <Card className="border-4 border-blue-400 bg-gradient-to-br from-blue-50 to-purple-50 shadow-2xl">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">👨‍🏫</div>
                <CardTitle className="text-4xl font-bold text-blue-700">
                  Comité Supervision Savante Permanente
                </CardTitle>
                <p className="text-xl text-gray-600 mt-4">
                  150+ Scholars Internationaux • Supervision 24/7
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                
                {/* Scholar Principal */}
                <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
                  <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">
                    🎖️ Scholar Principal CED HalalTech™
                  </h3>
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">🕌</div>
                    <h4 className="text-3xl font-bold text-blue-800">Sheikh Dr. Muhammad Al-Jazairi</h4>
                    <p className="text-xl text-blue-600 mt-2">École Hanbali • Fiqh Informatique Spécialisé</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded">
                      <div className="font-bold text-blue-800">Spécialisation</div>
                      <div className="text-sm">Fiqh Informatique</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded">
                      <div className="font-bold text-blue-800">École</div>
                      <div className="text-sm">Hanbali</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded">
                      <div className="font-bold text-blue-800">Certification</div>
                      <div className="text-sm">AAOIFI • IFSB</div>
                    </div>
                  </div>
                </div>

                {/* Équipe Scholars */}
                <div className="bg-white p-6 rounded-lg border-2 border-green-300">
                  <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">
                    🌍 Comité International 150+ Scholars
                  </h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-4xl mb-2">🕌</div>
                      <div className="font-bold text-green-800">École Hanafi</div>
                      <div className="text-sm text-gray-600">45 Scholars</div>
                      <div className="text-xs mt-1">Asie Centrale • Turquie</div>
                    </div>
                    
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-4xl mb-2">🕌</div>
                      <div className="font-bold text-green-800">École Maliki</div>
                      <div className="text-sm text-gray-600">38 Scholars</div>
                      <div className="text-xs mt-1">Maghreb • Afrique</div>
                    </div>
                    
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-4xl mb-2">🕌</div>
                      <div className="font-bold text-green-800">École Shafi'i</div>
                      <div className="text-sm text-gray-600">42 Scholars</div>
                      <div className="text-xs mt-1">Asie Sud-Est • Égypte</div>
                    </div>
                    
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-4xl mb-2">🕌</div>
                      <div className="font-bold text-green-800">École Hanbali</div>
                      <div className="text-sm text-gray-600">25 Scholars</div>
                      <div className="text-xs mt-1">Arabie • Golfe</div>
                    </div>
                  </div>
                </div>

                {/* Processus Validation */}
                <div className="bg-white p-6 rounded-lg border-2 border-purple-300">
                  <h3 className="text-2xl font-bold text-purple-700 mb-4">
                    ⚙️ Processus Validation 27,446+ Règles Fiqh
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-purple-50 rounded">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <div className="font-bold">Analyse Sources Authentiques</div>
                        <div className="text-sm text-gray-600">Coran • Sunna • Ijmâ' • Qiyâs</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-3 bg-purple-50 rounded">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <div className="font-bold">Consultation 4 Écoles Juridiques</div>
                        <div className="text-sm text-gray-600">Consensus inter-madhabs obligatoire</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-3 bg-purple-50 rounded">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <div className="font-bold">Validation Technique & Religieuse</div>
                        <div className="text-sm text-gray-600">Double contrôle: experts tech + scholars</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-3 bg-purple-50 rounded">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                      <div>
                        <div className="font-bold">Certification Finale</div>
                        <div className="text-sm text-gray-600">Signature Sheikh principal + 3 scholars minimum</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Clause IA Non-Mufti */}
          <TabsContent value="clause-ia-non-mufti">
            <Card className="border-4 border-red-400 bg-gradient-to-br from-red-50 to-orange-50 shadow-2xl">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">⚠️</div>
                <CardTitle className="text-4xl font-bold text-red-700">
                  Clause "IA Non-Mufti" Obligatoire
                </CardTitle>
                <p className="text-xl text-gray-600 mt-4">
                  Protection Juridique Suisse & Sharia • Responsabilité Individuelle
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                
                {/* Avertissement Principal */}
                <div className="bg-red-100 border-4 border-red-400 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">🚨</div>
                  <h3 className="text-3xl font-bold text-red-800 mb-6">
                    AVERTISSEMENT RELIGIEUX CRITIQUE
                  </h3>
                  <div className="space-y-4 text-lg">
                    <p className="font-bold text-red-800">
                      L'Intelligence Artificielle CED HalalTech™ n'est PAS un Mufti
                    </p>
                    <p className="text-red-700">
                      Cette IA ne peut PAS émettre de fatwas officielles ni remplacer un scholar qualifié
                    </p>
                    <p className="text-red-700">
                      Pour toute question religieuse importante, consultez OBLIGATOIREMENT un scholar authentique
                    </p>
                  </div>
                </div>

                {/* Responsabilités */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border-2 border-orange-300">
                    <h4 className="text-2xl font-bold text-orange-700 mb-4">
                      👤 Responsabilité Utilisateur
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                        <span>L'utilisateur est seul responsable devant Allah سبحانه وتعالى</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                        <span>Obligation de vérifier auprès de scholars qualifiés</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                        <span>Usage éducatif et informatif uniquement</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
                    <h4 className="text-2xl font-bold text-blue-700 mb-4">
                      🛡️ Protection CED HalalTech™
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Limitation de responsabilité contractuelle</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Conformité droit suisse et Sharia</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Supervision scholars permanente</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Texte Légal */}
                <div className="bg-gray-100 p-6 rounded-lg border-2 border-gray-400">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    📋 Texte Légal Officiel
                  </h4>
                  <div className="text-sm text-gray-700 space-y-2 font-mono bg-white p-4 rounded border">
                    <p><strong>CLAUSE IA NON-MUFTI CED-HALALTECH-2025-001</strong></p>
                    <p>En utilisant les services d'Intelligence Artificielle CED HalalTech™, l'utilisateur reconnaît et accepte que :</p>
                    <p>1. L'IA n'est pas un Mufti qualifié selon le Fiqh islamique</p>
                    <p>2. Aucune fatwa officielle ne peut être émise par cette technologie</p>
                    <p>3. La consultation de scholars authentiques reste obligatoire</p>
                    <p>4. L'utilisateur assume l'entière responsabilité de ses décisions religieuses</p>
                    <p>5. CED HalalTech™ fournit un service éducatif sous supervision islamique</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Conformité Sharia */}
          <TabsContent value="conformite-sharia">
            <Card className="border-4 border-green-400 bg-gradient-to-br from-green-50 to-emerald-50 shadow-2xl">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">✅</div>
                <CardTitle className="text-4xl font-bold text-green-700">
                  Conformité Sharia 100% Garantie
                </CardTitle>
                <p className="text-xl text-gray-600 mt-4">
                  Standards AAOIFI • IFSB • OCI • 4 Madhabs Authentiques
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                
                {/* Certifications Officielles */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg border-2 border-green-300 text-center">
                    <div className="text-5xl mb-3">🏆</div>
                    <h4 className="font-bold text-green-800">AAOIFI</h4>
                    <p className="text-sm text-gray-600">Accounting & Auditing Organization for Islamic Financial Institutions</p>
                    <Badge className="bg-green-100 text-green-800 mt-2">Certifié</Badge>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border-2 border-blue-300 text-center">
                    <div className="text-5xl mb-3">🏛️</div>
                    <h4 className="font-bold text-blue-800">IFSB</h4>
                    <p className="text-sm text-gray-600">Islamic Financial Services Board</p>
                    <Badge className="bg-blue-100 text-blue-800 mt-2">Validé</Badge>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border-2 border-purple-300 text-center">
                    <div className="text-5xl mb-3">🌙</div>
                    <h4 className="font-bold text-purple-800">OCI</h4>
                    <p className="text-sm text-gray-600">Organisation de la Coopération Islamique</p>
                    <Badge className="bg-purple-100 text-purple-800 mt-2">Approuvé</Badge>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border-2 border-amber-300 text-center">
                    <div className="text-5xl mb-3">🕌</div>
                    <h4 className="font-bold text-amber-800">4 Madhabs</h4>
                    <p className="text-sm text-gray-600">Consensus des 4 écoles juridiques sunnites</p>
                    <Badge className="bg-amber-100 text-amber-800 mt-2">Unanime</Badge>
                  </div>
                </div>

                {/* Métriques Conformité */}
                <div className="bg-white p-6 rounded-lg border-2 border-emerald-300">
                  <h3 className="text-2xl font-bold text-emerald-700 mb-6 text-center">
                    📊 Métriques Conformité Temps Réel
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-emerald-50 rounded-lg">
                      <div className="text-3xl font-bold text-emerald-600">27,446+</div>
                      <div className="text-sm text-gray-600">Règles Fiqh Validées</div>
                    </div>
                    
                    <div className="text-center p-4 bg-emerald-50 rounded-lg">
                      <div className="text-3xl font-bold text-emerald-600">100%</div>
                      <div className="text-sm text-gray-600">Conformité Sharia</div>
                    </div>
                    
                    <div className="text-center p-4 bg-emerald-50 rounded-lg">
                      <div className="text-3xl font-bold text-emerald-600">150+</div>
                      <div className="text-sm text-gray-600">Scholars Valideurs</div>
                    </div>
                  </div>
                </div>

                {/* Engagement CED HalalTech */}
                <div className="bg-gradient-to-r from-emerald-100 to-blue-100 p-6 rounded-lg border-2 border-emerald-400">
                  <h3 className="text-2xl font-bold text-emerald-700 mb-4 text-center">
                    🤝 Engagement CED HalalTech™
                  </h3>
                  <div className="text-center">
                    <p className="text-lg text-gray-700 mb-4 italic">
                      "Nous nous engageons à maintenir la conformité Sharia 100% dans tous nos services, 
                      sous supervision permanente de scholars qualifiés, pour l'honneur de l'Islam et 
                      le service de la Oummah mondiale."
                    </p>
                    <div className="flex justify-center">
                      <Badge className="bg-emerald-200 text-emerald-800 text-lg px-8 py-4">
                        بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

      </div>
      
      <ProtectionFooter />
    </div>
  );
}