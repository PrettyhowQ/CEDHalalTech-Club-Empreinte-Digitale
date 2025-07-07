import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { CheckCircle, Star, Crown, Heart, Users, Globe, Target, Zap, TreePine } from "lucide-react";
import ProtectionFooter from "@/components/ProtectionFooter";

export default function CedHalalHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header Principal */}
        <div className="text-center mb-16">
          <div className="text-8xl mb-6">🕌</div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Club Empreinte Digitale
          </h1>
          <p className="text-3xl text-gray-600 mb-8">
            CED HalalTech™ • Premier Écosystème Technologique Islamique Mondial
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Badge className="bg-emerald-100 text-emerald-700 text-xl px-6 py-3">
              <Star className="w-6 h-6 mr-2" />
              100% Conforme Sharia
            </Badge>
            <Badge className="bg-blue-100 text-blue-700 text-xl px-6 py-3">
              <Users className="w-6 h-6 mr-2" />
              245K+ Membres Mondiaux
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 text-xl px-6 py-3">
              <Globe className="w-6 h-6 mr-2" />
              78+ Langues Supportées
            </Badge>
          </div>
        </div>

        {/* Section Équipe Dirigeante */}
        <div className="mb-16">
          <Card className="border-4 border-emerald-400 bg-gradient-to-br from-emerald-50 to-blue-50 shadow-2xl">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">👑</div>
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Équipe Dirigeante CED HalalTech™
              </CardTitle>
              <p className="text-xl text-gray-600 mt-4">
                Leadership Féminin • Excellence Islamique • Innovation Technologique
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <Link href="/sante-souheila-yakoubi">
                  <Button className="text-xl px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white border-3 border-yellow-400 shadow-lg hover:shadow-xl transition-all w-full">
                    <span className="text-2xl mr-3">🌿</span>
                    Espace Santé Souheila-iness Yakoubi-Ozel
                    <span className="text-2xl ml-3">💜</span>
                  </Button>
                </Link>
                
                <Link href="/ia-coaching-halal">
                  <Button className="text-xl px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white border-3 border-yellow-400 shadow-lg hover:shadow-xl transition-all w-full">
                    <span className="text-2xl mr-3">🤖</span>
                    IA Coaching Halal - Propriété Souheila
                    <span className="text-2xl ml-3">💜</span>
                  </Button>
                </Link>
                
                <Link href="/jurisprudence-hanae-ozel">
                  <Button className="text-xl px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-3 border-yellow-400 shadow-lg hover:shadow-xl transition-all w-full">
                    <span className="text-2xl mr-3">⚖️</span>
                    Jurisprudence & Finance - Hanaé-Dénise
                    <span className="text-2xl ml-3">👩‍⚖️</span>
                  </Button>
                </Link>
                
                <Link href="/malik-ketar-developpement">
                  <Button className="text-xl px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-3 border-yellow-400 shadow-lg hover:shadow-xl transition-all w-full">
                    <span className="text-2xl mr-3">💻</span>
                    Développement Web & Coaching - Malik
                    <span className="text-2xl ml-3">🏃‍♂️</span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section Nouvelles Fonctionnalités Révolutionnaires */}
        <div className="mb-16">
          <Card className="border-4 border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50 shadow-2xl">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Fonctionnalités Révolutionnaires 2025
              </CardTitle>
              <p className="text-xl text-gray-600 mt-4">
                Innovation Environnementale • Wellness Islamique • Méthodologie Sciences Islamiques
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/interactive-eco-warrior-progress">
                  <Card className="border-2 border-green-300 hover:border-green-500 transition-all hover:shadow-lg cursor-pointer bg-gradient-to-br from-green-50 to-emerald-50">
                    <CardContent className="p-6 text-center">
                      <div className="text-5xl mb-3">📊</div>
                      <h3 className="text-xl font-bold text-green-700 mb-2">Interactive Eco-Warrior Progress Bar</h3>
                      <p className="text-sm text-gray-600">Suivi spirituel et environnemental selon Coran & Sunna</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/personalized-green-celebrations">
                  <Card className="border-2 border-purple-300 hover:border-purple-500 transition-all hover:shadow-lg cursor-pointer bg-gradient-to-br from-purple-50 to-pink-50">
                    <CardContent className="p-6 text-center">
                      <div className="text-5xl mb-3">🎉</div>
                      <h3 className="text-xl font-bold text-purple-700 mb-2">Personalized Green Célébrations</h3>
                      <p className="text-sm text-gray-600">Animations islamiques pour habitudes écologiques</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/multilingual-environmental-storytelling">
                  <Card className="border-2 border-blue-300 hover:border-blue-500 transition-all hover:shadow-lg cursor-pointer bg-gradient-to-br from-blue-50 to-cyan-50">
                    <CardContent className="p-6 text-center">
                      <div className="text-5xl mb-3">🌍</div>
                      <h3 className="text-xl font-bold text-blue-700 mb-2">Multilingual Environmental Storytelling</h3>
                      <p className="text-sm text-gray-600">Histoires environnementales islamiques 78+ langues</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/halal-tech-community-gamification">
                  <Card className="border-2 border-indigo-300 hover:border-indigo-500 transition-all hover:shadow-lg cursor-pointer bg-gradient-to-br from-indigo-50 to-purple-50">
                    <CardContent className="p-6 text-center">
                      <div className="text-5xl mb-3">🎮</div>
                      <h3 className="text-xl font-bold text-indigo-700 mb-2">Halal Tech Community Gamification</h3>
                      <p className="text-sm text-gray-600">Collaboration communautaire islamique gamifiée</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/mindful-wellness-constellation">
                  <Card className="border-2 border-pink-300 hover:border-pink-500 transition-all hover:shadow-lg cursor-pointer bg-gradient-to-br from-pink-50 to-rose-50">
                    <CardContent className="p-6 text-center">
                      <div className="text-5xl mb-3">🌟</div>
                      <h3 className="text-xl font-bold text-pink-700 mb-2">Mindful Wellness Constellation Map</h3>
                      <p className="text-sm text-gray-600">Cartographie spirituelle bien-être holistique</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/methodologie-sciences-islamiques">
                  <Card className="border-2 border-amber-300 hover:border-amber-500 transition-all hover:shadow-lg cursor-pointer bg-gradient-to-br from-amber-50 to-orange-50">
                    <CardContent className="p-6 text-center">
                      <div className="text-5xl mb-3">📚</div>
                      <h3 className="text-xl font-bold text-amber-700 mb-2">Méthodologie Sciences Islamiques</h3>
                      <p className="text-sm text-gray-600">Apprendre • Comprendre • Méditer • Appliquer</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section Actions Rapides */}
        <div className="mb-16">
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-blue-700">
                ⚡ Actions Rapides CED HalalTech™
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/ced-bank-mobile">
                  <Button className="text-lg px-6 py-3 bg-green-600 hover:bg-green-700 text-white">
                    🏦 CED Bank Mobile
                  </Button>
                </Link>
                <Link href="/institut-ced-academy">
                  <Button className="text-lg px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white">
                    🎓 Institut CED Academy
                  </Button>
                </Link>
                <Link href="/super-iarp-pro">
                  <Button className="text-lg px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white">
                    🤖 Super IARP Pro
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certification Conformité */}
        <div className="mb-16">
          <Card className="border-2 border-emerald-200 bg-emerald-50">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">✅</div>
              <CardTitle className="text-3xl font-bold text-emerald-700">
                Certification Conformité Islamique 100%
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-bold text-emerald-800 mb-2">Conseil Chariah</h3>
                  <p className="text-sm text-gray-600 mb-2">7 scholars internationaux</p>
                  <Badge className="bg-emerald-100 text-emerald-800">Validé 100%</Badge>
                </div>

                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Star className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-blue-800 mb-2">Standards AAOIFI</h3>
                  <p className="text-sm text-gray-600 mb-2">Normes financières islamiques</p>
                  <Badge className="bg-blue-100 text-blue-800">Certifié</Badge>
                </div>

                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Crown className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-bold text-purple-800 mb-2">4 Madhabs</h3>
                  <p className="text-sm text-gray-600 mb-2">Hanafi, Maliki, Shafi'i, Hanbali</p>
                  <Badge className="bg-purple-100 text-purple-800">Conforme</Badge>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg text-center">
                <p className="text-lg font-bold text-yellow-800 mb-2">
                  "Incha Allah bi hawllilah"
                </p>
                <p className="text-sm text-gray-700">
                  Premier réseau économique 100% halal de l'espace francophone - CED Voie du HALAL
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  © 2025 Club Empreinte Digitale - Yakoubi Yamina
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Footer de Protection et Licence */}
      <ProtectionFooter />
    </div>
  );
}