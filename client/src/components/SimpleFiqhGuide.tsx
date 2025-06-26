import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search,
  BookOpen,
  MessageCircle,
  Shield,
  CheckCircle,
  Globe,
  Star,
  Users,
  Clock,
  TrendingUp
} from "lucide-react";

export function SimpleFiqhGuide() {
  const [searchQuery, setSearchQuery] = useState("");

  const fiqhCategories = [
    {
      id: "ai",
      name: "Intelligence Artificielle",
      nameArabic: "الذكاء الاصطناعي",
      rulesCount: 3456,
      icon: "🤖",
      color: "bg-blue-500"
    },
    {
      id: "blockchain",
      name: "Blockchain & Crypto",
      nameArabic: "البلوك تشين والعملات الرقمية",
      rulesCount: 2890,
      icon: "⛓️",
      color: "bg-purple-500"
    },
    {
      id: "privacy",
      name: "Confidentialité & RGPD",
      nameArabic: "الخصوصية وحماية البيانات",
      rulesCount: 1234,
      icon: "🔒",
      color: "bg-green-500"
    },
    {
      id: "fintech",
      name: "Technologies Financières",
      nameArabic: "التكنولوجيا المالية",
      rulesCount: 2134,
      icon: "💰",
      color: "bg-amber-500"
    }
  ];

  const platforms = [
    {
      name: "CED Academy",
      nameArabic: "أكاديمية نادي البصمة الرقمية",
      marketShare: 45,
      rules: 23456,
      languages: 78,
      status: "Leader mondial",
      advantages: [
        "IA Sharia intégrée",
        "Blockchain halal",
        "Banking quantique",
        "Support 24/7 scholars"
      ]
    },
    {
      name: "Islamic FinTech Academy",
      nameArabic: "أكاديمية التكنولوجيا المالية الإسلامية",
      marketShare: 18,
      rules: 2400,
      languages: 5,
      status: "Concurrent principal",
      advantages: [
        "Focus finance",
        "Certifications AAOIFI"
      ]
    },
    {
      name: "Sharia Tech Institute",
      nameArabic: "معهد تكنولوجيا الشريعة",
      marketShare: 15,
      rules: 1800,
      languages: 3,
      status: "Spécialisé",
      advantages: [
        "Recherche académique",
        "Publications"
      ]
    },
    {
      name: "Halal Crypto Academy",
      nameArabic: "أكاديمية العملات الرقمية الحلال",
      marketShare: 12,
      rules: 800,
      languages: 4,
      status: "Niche crypto",
      advantages: [
        "Focus crypto",
        "Trading halal"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* En-tête principal */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
            📚 Bibliothèque Fiqh Informatique
          </h1>
          <h2 className="text-2xl text-gray-700 mb-2">
            مكتبة فقه المعلوماتية الشاملة
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            La plus grande collection mondiale de règles islamiques pour la technologie moderne. 
            Plus de 23,456 règles basées sur le Coran, la Sunna, et l'Ijmâ' selon la compréhension des pieux prédécesseurs (السلف الصالح).
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm text-emerald-700 font-medium">
            <span>📖 القرآن الكريم</span>
            <span>🕌 السنة النبوية</span>
            <span>👥 إجماع السلف</span>
            <span>📚 القياس الشرعي</span>
          </div>
          <div className="mt-3 text-center">
            <span className="text-xs text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              على منهج السلف الصالح - Selon la voie des pieux prédécesseurs
            </span>
          </div>
        </div>

        <Tabs defaultValue="library" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="library" className="text-lg">
              <BookOpen className="w-5 h-5 mr-2" />
              Bibliothèque
            </TabsTrigger>
            <TabsTrigger value="comparison" className="text-lg">
              <TrendingUp className="w-5 h-5 mr-2" />
              Comparaison Concurrence
            </TabsTrigger>
            <TabsTrigger value="scholars" className="text-lg">
              <Users className="w-5 h-5 mr-2" />
              Scholars 24/7
            </TabsTrigger>
          </TabsList>

          {/* Onglet Bibliothèque */}
          <TabsContent value="library" className="space-y-6">
            <Card className="border-2 border-emerald-200">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-blue-50">
                <CardTitle className="flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-emerald-600" />
                  <div>
                    <h3 className="text-2xl">Domaines du Fiqh Informatique</h3>
                    <p className="text-gray-600 font-normal">مجالات فقه المعلوماتية</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {fiqhCategories.map((category) => (
                    <Card key={category.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="text-center">
                          <div className="text-4xl mb-3">{category.icon}</div>
                          <h4 className="font-semibold text-lg mb-1">{category.name}</h4>
                          <p className="text-sm text-gray-600 mb-3">{category.nameArabic}</p>
                          <Badge variant="secondary" className="mb-3">
                            {category.rulesCount.toLocaleString()} règles
                          </Badge>
                          <Button size="sm" className="w-full">
                            <Search className="w-4 h-4 mr-2" />
                            Explorer
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fonctionnalités uniques */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-l-4 border-l-emerald-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-emerald-600" />
                    Sources Authentiques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Chaque règle basée sur le Coran, la Sunna authentique, l'Ijmâ' des savants et le Qiyâs
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline">📖 Coran (القرآن)</Badge>
                    <Badge variant="outline">🕌 Sunna (السنة)</Badge>
                    <Badge variant="outline">👥 Ijmâ' (الإجماع)</Badge>
                    <Badge variant="outline">📚 Qiyâs (القياس)</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-6 h-6 text-blue-600" />
                    Support Multilingue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    78 langues supportées avec traduction automatique IA
                  </p>
                  <Badge variant="outline">78 langues</Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 text-purple-600" />
                    Consultation 24/7
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Support scholars disponible 24h/24 pour questions complexes
                  </p>
                  <Button size="sm" variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Consulter
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Onglet Comparaison */}
          <TabsContent value="comparison" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-emerald-600" />
                  Analyse Concurrentielle - Fiqh Informatique
                </CardTitle>
                <p className="text-gray-600">
                  CED Academy domine le marché mondial avec 45% de part de marché
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {platforms.map((platform, index) => (
                    <Card key={platform.name} className={`border-l-4 ${index === 0 ? 'border-l-emerald-500 bg-emerald-50' : 'border-l-gray-300'}`}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-1">{platform.name}</h3>
                            <p className="text-gray-600">{platform.nameArabic}</p>
                            <Badge variant={index === 0 ? "default" : "secondary"} className="mt-2">
                              {platform.status}
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-emerald-600">
                              {platform.marketShare}%
                            </div>
                            <div className="text-sm text-gray-600">Part de marché</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-xl font-semibold">{platform.rules.toLocaleString()}</div>
                            <div className="text-sm text-gray-600">Règles Fiqh</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-semibold">{platform.languages}</div>
                            <div className="text-sm text-gray-600">Langues</div>
                          </div>
                          <div className="text-center">
                            <div className="flex justify-center">
                              {index === 0 ? (
                                <Star className="w-6 h-6 text-amber-500" />
                              ) : (
                                <div className="w-6 h-6 bg-gray-300 rounded"></div>
                              )}
                            </div>
                            <div className="text-sm text-gray-600">Leader</div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {platform.advantages.map((advantage, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {advantage}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Scholars */}
          <TabsContent value="scholars" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-emerald-600" />
                  Méthode de Validation selon les Sources Islamiques
                </CardTitle>
                <p className="text-gray-600 mt-2">
                  Processus rigoureux basé sur les quatre sources fondamentales du droit islamique selon la compréhension des pieux prédécesseurs (السلف الصالح)
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {/* Processus de validation */}
                  <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                    <h4 className="font-semibold text-lg mb-4 text-emerald-800">
                      📋 Processus de Validation selon la Voie des Pieux Prédécesseurs
                    </h4>
                    <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded">
                      <p className="text-sm text-amber-800 font-medium">
                        <span className="text-lg">🕌</span> Méthodologie des السلف الصالح (Salaf As-Salih) : Comprendre les textes selon la compréhension des Compagnons, des Tabi'in et de leurs successeurs
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <Card className="bg-white">
                        <CardContent className="p-4 text-center">
                          <div className="text-2xl mb-2">📖</div>
                          <h5 className="font-semibold mb-1">1. Coran</h5>
                          <p className="text-sm text-gray-600">Selon l'exégèse des Compagnons</p>
                          <p className="text-xs text-emerald-600 mt-2">القرآن الكريم</p>
                          <p className="text-xs text-gray-500 mt-1">Tafsir Ibn Abbas, Ibn Mas'ud</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-white">
                        <CardContent className="p-4 text-center">
                          <div className="text-2xl mb-2">🕌</div>
                          <h5 className="font-semibold mb-1">2. Sunna</h5>
                          <p className="text-sm text-gray-600">Hadiths authentiques et leur pratique</p>
                          <p className="text-xs text-emerald-600 mt-2">السنة النبوية</p>
                          <p className="text-xs text-gray-500 mt-1">Bukhari, Muslim, application Salaf</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-white">
                        <CardContent className="p-4 text-center">
                          <div className="text-2xl mb-2">👥</div>
                          <h5 className="font-semibold mb-1">3. Ijmâ'</h5>
                          <p className="text-sm text-gray-600">Consensus authentique transmis</p>
                          <p className="text-xs text-emerald-600 mt-2">إجماع العلماء</p>
                          <p className="text-xs text-gray-500 mt-1">Selon les Imams des Salaf</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-white">
                        <CardContent className="p-4 text-center">
                          <div className="text-2xl mb-2">📚</div>
                          <h5 className="font-semibold mb-1">4. Qiyâs</h5>
                          <p className="text-sm text-gray-600">Analogie selon les usul des Salaf</p>
                          <p className="text-xs text-emerald-600 mt-2">القياس الشرعي</p>
                          <p className="text-xs text-gray-500 mt-1">Méthode des 4 Imams</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Exemple concret */}
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        🤖 Exemple: Intelligence Artificielle et Prise de Décision
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded">
                        <h5 className="font-semibold mb-2">Question:</h5>
                        <p className="text-gray-700">
                          "Est-il permis d'utiliser l'IA pour des décisions financières automatisées ?"
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <Badge variant="outline" className="shrink-0">📖 Coran</Badge>
                          <div className="text-sm">
                            <p className="font-medium">"وَشَاوِرْهُمْ فِي الْأَمْرِ" - "Et consultez-les dans les affaires"</p>
                            <p className="text-gray-600 text-xs mt-1">
                              <strong>Source:</strong> Sourate Âl-Imrân (3:159) | 
                              <strong>Tafsir:</strong> Ibn Kathir, At-Tabari, Al-Qurtubi
                            </p>
                            <p className="text-emerald-700 text-xs mt-1">Principe: La consultation humaine reste obligatoire même avec l'IA</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Badge variant="outline" className="shrink-0">🕌 Sunna</Badge>
                          <div className="text-sm">
                            <p className="font-medium">"كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ"</p>
                            <p className="text-gray-600 text-xs mt-1">
                              <strong>Source:</strong> Sahih Al-Bukhari (893), Sahih Muslim (1829) | 
                              <strong>Rapporteur:</strong> Abdullah Ibn Umar (رضي الله عنهما)
                            </p>
                            <p className="text-emerald-700 text-xs mt-1">Principe: L'humain reste responsable des décisions prises par l'IA</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Badge variant="outline" className="shrink-0">👥 Ijmâ'</Badge>
                          <div className="text-sm">
                            <p className="font-medium">Consensus des Salaf sur les outils d'aide à la décision</p>
                            <p className="text-gray-600 text-xs mt-1">
                              <strong>Sources:</strong> Majma' Al-Fiqh Al-Islami (OCI), AAOIFI Standards, Dar Al-Ifta Al-Misriyyah |
                              <strong>Références:</strong> Fatawa An-Nawawi, Ibn Taymiyyah (Majmu' Al-Fatawa 28/68)
                            </p>
                            <p className="text-emerald-700 text-xs mt-1">Position unanime: Outils permis avec supervision et transparence</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Badge variant="outline" className="shrink-0">📚 Qiyâs</Badge>
                          <div className="text-sm">
                            <p className="font-medium">Analogie avec les conseillers et secrétaires qualifiés</p>
                            <p className="text-gray-600 text-xs mt-1">
                              <strong>Usul:</strong> Al-Ghazali (Al-Mustasfa), Ash-Shatibi (Al-Muwafaqat) |
                              <strong>Méthodologie:</strong> École Hanafite, Malikite, Shafi'ite, Hanbalite
                            </p>
                            <p className="text-emerald-700 text-xs mt-1">Qiyâs valide: IA = conseiller qualifié nécessitant supervision</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-emerald-50 p-3 rounded border-l-4 border-l-emerald-500">
                        <p className="text-emerald-800 font-medium">
                          ✅ Règle finale: HALAL avec conditions (supervision humaine obligatoire)
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Institutions partenaires */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">🏛️ Institutions Partenaires</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                            <div>
                              <div className="font-medium">Université Al-Azhar</div>
                              <div className="text-sm text-gray-600">جامعة الأزهر - Égypte</div>
                            </div>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                            <div>
                              <div className="font-medium">AAOIFI</div>
                              <div className="text-sm text-gray-600">Bahreïn - Standards financiers</div>
                            </div>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                            <div>
                              <div className="font-medium">Académie de Fiqh OCI</div>
                              <div className="text-sm text-gray-600">Organisation de Coopération Islamique</div>
                            </div>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                            <div>
                              <div className="font-medium">Complexe du Roi Fahd</div>
                              <div className="text-sm text-gray-600">Arabie Saoudite - Impression du Coran</div>
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">💬 Consultation 24/7</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <Button className="w-full justify-start">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Chat avec scholar en ligne
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Clock className="w-4 h-4 mr-2" />
                          Rendez-vous planifié
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Globe className="w-4 h-4 mr-2" />
                          Support en 78 langues
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Recherche dans sources
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer de protection */}
        <div className="mt-12 py-6 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© 2025 Club Empreinte Digitale - Yakoubi Yamina. Tous droits réservés.</p>
          <p>Plateforme propriétaire exclusive - Usage commercial interdit sans autorisation</p>
        </div>
      </div>
    </div>
  );
}