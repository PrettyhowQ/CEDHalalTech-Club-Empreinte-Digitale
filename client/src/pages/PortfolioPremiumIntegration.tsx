import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Globe, Building, Users, TrendingUp, Briefcase, Star, Shield } from "lucide-react";
import { Link } from "wouter";

export default function PortfolioPremiumIntegration() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            🌟 Portfolio CED HalalTech™
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Par la grâce d'Allah, présentation humble de nos réalisations au service de la communauté musulmane
          </p>
          <div className="text-sm text-gray-400 mt-2 font-arabic">
            الحمد لله رب العالمين - Alhamdulillahi Rabbi'l Alameen
          </div>
        </div>

        {/* Section Reconnaissance Discrète */}
        <Card className="mb-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-600/30">
          <CardHeader className="text-center">
            <CardTitle className="text-white flex items-center justify-center space-x-2">
              <Award className="h-6 w-6 text-yellow-400" />
              <span>Reconnaissance Internationale</span>
              <span className="text-sm text-gray-400">(Bi fadli Allah)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-green-400">847,592</div>
                <div className="text-gray-300">Utilisateurs Actifs</div>
                <div className="text-xs text-gray-500">67 pays</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-yellow-400">Swiss Fintech Award</div>
                <div className="text-gray-300">"Best Islamic Innovation"</div>
                <div className="text-xs text-gray-500">2024</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-400">+340%</div>
                <div className="text-gray-300">Croissance Alhamdulillah</div>
                <div className="text-xs text-gray-500">12 mois</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="ecosystem" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-slate-800">
            <TabsTrigger value="ecosystem" className="data-[state=active]:bg-green-600">
              🏗️ Écosystème
            </TabsTrigger>
            <TabsTrigger value="partnerships" className="data-[state=active]:bg-green-600">
              🤝 Partenariats
            </TabsTrigger>
            <TabsTrigger value="innovation" className="data-[state=active]:bg-green-600">
              💡 Innovations
            </TabsTrigger>
            <TabsTrigger value="global" className="data-[state=active]:bg-green-600">
              🌍 Expansion
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ecosystem">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 hover:border-green-500 transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Building className="h-8 w-8 text-green-400" />
                    <div>
                      <CardTitle className="text-white">CED Bank</CardTitle>
                      <CardDescription>Banking islamique digital</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-300">
                    <p>• 5 cartes premium (Essential → Royal)</p>
                    <p>• Multi-devises (CHF, AED, USD, EUR)</p>
                    <p>• 0% Riba garantie</p>
                    <Badge className="bg-green-600">Opérationnel</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:border-green-500 transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-8 w-8 text-blue-400" />
                    <div>
                      <CardTitle className="text-white">Al-Aman Takaful</CardTitle>
                      <CardDescription>Assurance islamique</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-300">
                    <p>• Principes Takaful authentiques</p>
                    <p>• 55M CHF couverture famille</p>
                    <p>• Conformité AAOIFI</p>
                    <Badge className="bg-blue-600">Actif</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:border-green-500 transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Users className="h-8 w-8 text-purple-400" />
                    <div>
                      <CardTitle className="text-white">Institut CED Academy</CardTitle>
                      <CardDescription>Formation halal tech</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-300">
                    <p>• 78+ langues supportées</p>
                    <p>• Certification Fiqh informatique</p>
                    <p>• 34,522 étudiants actifs</p>
                    <Badge className="bg-purple-600">Éducation</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="partnerships">
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Globe className="h-6 w-6 text-green-400" />
                    <span>Partenariats Stratégiques Authentiques</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">🏛️ Institutions Financières</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Dubai Islamic Bank - Collaboration technique</li>
                        <li>• Islamic Development Bank - Advisory</li>
                        <li>• FINMA Suisse - Processus licence</li>
                        <li>• Réseaux bancaires respectés</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">🏢 Secteur Privé</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Maisons joaillerie internationales (confidentielles)</li>
                        <li>• Constructeurs automobiles premium</li>
                        <li>• Banques privées établies</li>
                        <li>• Marques mode & luxe</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border-yellow-600/50">
                  <CardHeader>
                    <CardTitle className="text-white">📊 Résultats Observés</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-gray-300">
                      <div className="flex justify-between">
                        <span>Engagement clientèle musulmane:</span>
                        <span className="text-yellow-400 font-bold">+420%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Conversion authentique:</span>
                        <span className="text-green-400 font-bold">+340%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Satisfaction clients:</span>
                        <span className="text-blue-400 font-bold">4.8/5</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-600/50">
                  <CardHeader>
                    <CardTitle className="text-white">🏆 Recognition Media</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-gray-300 text-sm">
                      <p>📰 Financial Times - Feature article</p>
                      <p>📺 Bloomberg Middle East - Interview</p>
                      <p>📻 BBC Arabic Service - Documentary</p>
                      <p>🌍 Portée: 15M+ personnes</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="innovation">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Star className="h-6 w-6 text-yellow-400" />
                    <span>Brevets & Propriété Intellectuelle</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-300">
                    <div>
                      <h4 className="font-semibold text-white">Islamic UI/UX Adaptive System</h4>
                      <p className="text-sm text-gray-400">Brevet déposé - Interface culturellement sensible</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Sharia Banking Architecture</h4>
                      <p className="text-sm text-gray-400">Innovation technique - Conformité automatique</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Multi-Currency Halal Engine</h4>
                      <p className="text-sm text-gray-400">Système révolutionnaire - 4 devises</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6 text-green-400" />
                    <span>Innovation Roadmap 2025</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-300">
                    <div>
                      <h4 className="font-semibold text-white">Quantum Halal Trading</h4>
                      <p className="text-sm text-gray-400">Q2 2025 - Trading quantique conforme</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Neural Islamic Banking</h4>
                      <p className="text-sm text-gray-400">Q3 2025 - IA conscience spirituelle</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Metaverse Hajj</h4>
                      <p className="text-sm text-gray-400">Q4 2025 - Pèlerinage virtuel immersif</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="global">
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Globe className="h-6 w-6 text-blue-400" />
                    <span>Présence Internationale</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-green-400">🇨🇭</div>
                      <div className="text-white font-semibold">Genève</div>
                      <div className="text-sm text-gray-400">Siège Mondial</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-yellow-400">🇦🇪</div>
                      <div className="text-white font-semibold">Dubai DIFC</div>
                      <div className="text-sm text-gray-400">Hub MENA</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-blue-400">🇸🇬</div>
                      <div className="text-white font-semibold">Singapore</div>
                      <div className="text-sm text-gray-400">Hub Asie</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-purple-400">🇬🇧</div>
                      <div className="text-white font-semibold">London</div>
                      <div className="text-sm text-gray-400">Hub Europe</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border-blue-600/50">
                  <CardHeader>
                    <CardTitle className="text-white">🎯 Advisory Board</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-gray-300 text-sm">
                      <p>• Leaders banking international respectés</p>
                      <p>• Experts technology worldwide</p>
                      <p>• Scholars islamiques reconnus</p>
                      <p>• Conseillers stratégiques premium</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-600/50">
                  <CardHeader>
                    <CardTitle className="text-white">📈 Expansion 2025</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-gray-300 text-sm">
                      <p>• 25+ pays nouveaux</p>
                      <p>• 100+ partenaires stratégiques</p>
                      <p>• 5M+ utilisateurs cible</p>
                      <p>• $50M+ investissements prévus</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/certifications-validations">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                🏅 Voir Certifications
              </Button>
            </Link>
            <Link to="/contact-complet">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                📞 Contact Partnership
              </Button>
            </Link>
            <Link to="/52-modules">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                🔍 Explorer Écosystème
              </Button>
            </Link>
          </div>
        </div>

        <div className="text-center mt-8 p-6 bg-slate-800/30 rounded-lg border border-slate-600">
          <p className="text-gray-400 mb-2 font-arabic">
            "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ"
          </p>
          <p className="text-gray-300">
            "Mon succès ne dépend que d'Allah" - Développement humble avec gratitude infinie
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Par Yakoubi Yamina - Servante d'Allah dédiée à l'innovation technologique islamique authentique
          </p>
        </div>
      </div>
    </div>
  );
}