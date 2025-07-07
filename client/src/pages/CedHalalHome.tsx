import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import ProtectionFooter from '@/components/ProtectionFooter';
import LogosCED from '@/components/LogosCED';
import { 
  Globe, 
  Building, 
  Shield, 
  Calculator,
  Home,
  PlayCircle,
  Car,
  Users,
  CheckCircle,
  TrendingUp,
  Banknote,
  Star,
  Crown,
  Headphones,
  Heart,
  Scale
} from 'lucide-react';

export default function CedVoieHalalHome() {
  const patrimoineStats = {
    total: "19,245,750.00",
    zakat_annuelle: "481,278.75",
    couverture_takaful: "8,950,000.00",
    proprietes: 25,
    services_actifs: 7,
    pays_operationnels: 4
  };

  const servicesVoieHalal = [
    {
      nom: "CED Bank",
      status: "Opérationnel",
      icon: Banknote,
      color: "from-blue-600 to-indigo-700",
      patrimoine: "19.24M CHF",
      description: "Banking halal multi-devises",
      href: "/ced-bank"
    },
    {
      nom: "Al-Aman Takaful",
      status: "Opérationnel", 
      icon: Shield,
      color: "from-green-600 to-emerald-700",
      patrimoine: "8.95M CHF",
      description: "Assurance islamique famille",
      href: "/al-aman-takaful"
    },
    {
      nom: "Immobilier Islamique",
      status: "Opérationnel",
      icon: Home,
      color: "from-purple-600 to-violet-700",
      patrimoine: "15.75M CHF",
      description: "Propriétés halal certifiées",
      href: "/immobilier-islamique"
    },
    {
      nom: "Comptabilité Islamique",
      status: "Opérationnel",
      icon: Calculator,
      color: "from-emerald-600 to-green-700",
      patrimoine: "Système complet",
      description: "Double entrée Sharia AAOIFI",
      href: "/comptabilite-islamique"
    },
    {
      nom: "WebTV Halal",
      status: "Développement",
      icon: PlayCircle,
      color: "from-orange-600 to-red-700",
      patrimoine: "Q3 2025",
      description: "Contenu islamique authentique",
      href: "/webtv-halal"
    },
    {
      nom: "Garages Halal",
      status: "Planifié",
      icon: Car,
      color: "from-gray-600 to-slate-700",
      patrimoine: "2026",
      description: "Service auto communautaire",
      href: "/garages-halal"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      
      {/* Header Réseau Économique */}
      <div className="bg-gradient-to-r from-emerald-800 to-blue-800 text-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
              <Heart className="h-8 w-8 sm:h-10 w-10 lg:h-12 w-12 text-yellow-400" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Réseau Économique 100% Halal
              </h1>
              <Heart className="h-8 w-8 sm:h-10 w-10 lg:h-12 w-12 text-yellow-400" />
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-100 mb-3 sm:mb-4 leading-relaxed max-w-4xl mx-auto px-2">
              "Un réseau économique 100% halal, pensé pour les cœurs sincères qui veulent entreprendre avec foi, éthique et excellence."
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-blue-100 mb-2 px-2">
              Club Empreinte Digitale - CED Voie du HALAL | Écosystème Éthique & Prospère
            </p>
            <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm flex-wrap">
              <Badge className="bg-yellow-500 text-yellow-900 px-2 py-1">
                Dirigeante: Yakoubi Yamina
              </Badge>
              <Badge className="bg-green-500 text-green-900 px-2 py-1">
                Pionnière Francophone
              </Badge>
              <Badge className="bg-blue-500 text-blue-900 px-2 py-1">
                100% Conforme Sharia
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* BOUTON CHARTE ÉCOLOGIQUE - IMMÉDIATEMENT VISIBLE */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 py-4 sm:py-6 lg:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/halal-eco-system">
            <Button className="text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 bg-white hover:bg-gray-100 text-green-700 font-bold border-2 sm:border-4 border-yellow-400 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all rounded-xl sm:rounded-2xl w-full sm:w-auto">
              <span className="text-2xl sm:text-3xl lg:text-4xl mr-2 sm:mr-4">🌍</span>
              <span className="hidden sm:inline">CHARTE ÉCOLOGIQUE ISLAMIQUE CED</span>
              <span className="sm:hidden">CHARTE ÉCOLOGIQUE CED</span>
              <span className="text-2xl sm:text-3xl lg:text-4xl ml-2 sm:ml-4">🌱</span>
            </Button>
          </Link>
          <p className="text-white text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 font-semibold px-2">
            6 Piliers écologie islamique • 8 Technologies vertes halal • Fatwas environnementales officielles
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Centre de Test Prioritaire */}
        <Card className="mb-8 border-4 border-orange-400 bg-gradient-to-r from-orange-50 to-red-50">
          <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
            <CardTitle className="text-2xl flex items-center gap-3">
              <span className="text-3xl">🧪</span>
              Centre de Test Complet - 55 Modules CED HalalTech™
            </CardTitle>
            <p className="text-orange-100 mt-2">
              Testez toutes les fonctionnalités de l'écosystème • Interface unifiée • Validation complète
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg text-orange-800 mb-3">
                  🎯 Fonctionnalités de Test
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Tous les 55 modules en un seul endroit
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Filtrage par catégorie et recherche
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Statistiques en temps réel
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Accès direct à chaque fonctionnalité
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg text-orange-800 mb-3">
                  📊 Statistiques Globales
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-100 p-3 rounded-lg text-center">
                    <p className="text-2xl font-bold text-green-800">50+</p>
                    <p className="text-sm text-green-600">Opérationnels</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg text-center">
                    <p className="text-2xl font-bold text-blue-800">25</p>
                    <p className="text-sm text-blue-600">Catégories</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-lg text-center">
                    <p className="text-2xl font-bold text-purple-800">165+</p>
                    <p className="text-sm text-purple-600">Fonctionnalités</p>
                  </div>
                  <div className="bg-orange-100 p-3 rounded-lg text-center">
                    <p className="text-2xl font-bold text-orange-800">100%</p>
                    <p className="text-sm text-orange-600">Sharia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center space-y-4">
              <Link href="/test-55-modules">
                <Button className="text-xl px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white border-3 border-yellow-400 shadow-lg hover:shadow-xl transition-all">
                  <span className="text-2xl mr-3">🧪</span>
                  Commencer les Tests des 55 Modules
                  <span className="text-2xl ml-3">🚀</span>
                </Button>
              </Link>
              
              <Link href="/ux-revolutionnaire">
                <Button className="text-xl px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-3 border-yellow-400 shadow-lg hover:shadow-xl transition-all">
                  <span className="text-2xl mr-3">🎨</span>
                  UX Révolutionnaire - 4 Fonctionnalités Avancées
                  <span className="text-2xl ml-3">✨</span>
                </Button>
              </Link>
              
              <Link href="/web-tv-halal">
                <Button className="text-xl px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white border-3 border-yellow-400 shadow-lg hover:shadow-xl transition-all">
                  <span className="text-2xl mr-3">📺</span>
                  Web TV Halal - Regarder en Direct
                  <span className="text-2xl ml-3">🔴</span>
                </Button>
              </Link>
              
              <Link href="/formations-environnement-halal">
                <Button className="text-xl px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white border-3 border-yellow-400 shadow-lg hover:shadow-xl transition-all">
                  <span className="text-2xl mr-3">🌱</span>
                  Formations Environnement Halal - Coran & Science
                  <span className="text-2xl ml-3">📚</span>
                </Button>
              </Link>
              
              <Link href="/logos-officiels-ced">
                <Button className="text-xl px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-3 border-yellow-400 shadow-lg hover:shadow-xl transition-all">
                  <span className="text-2xl mr-3">🛡️</span>
                  Logos Officiels CED - Copyright Intégré
                  <span className="text-2xl ml-3">©️</span>
                </Button>
              </Link>
              
              <Link href="/al-aman-takaful-logo-redesign">
                <Button className="text-xl px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white border-3 border-yellow-400 shadow-lg hover:shadow-xl transition-all">
                  <span className="text-2xl mr-3">🛡️</span>
                  Logo Al-Aman Takaful™ Redessiné
                  <span className="text-2xl ml-3">✅</span>
                </Button>
              </Link>
              
              <Link href="/logos-ecosysteme-complet">
                <Button className="text-xl px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-3 border-yellow-400 shadow-lg hover:shadow-xl transition-all">
                  <span className="text-2xl mr-3">🏢</span>
                  Collection Logos Écosystème Complet
                  <span className="text-2xl ml-3">🎨</span>
                </Button>
              </Link>
              
              <Link href="/sante-souheila-yakoubi">
                <Button className="text-xl px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-3 border-yellow-400 shadow-lg hover:shadow-xl transition-all">
                  <span className="text-2xl mr-3">🌿</span>
                  Espace Santé Souheila-iness Yakoubi-Ozel
                  <span className="text-2xl ml-3">💚</span>
                </Button>
              </Link>
              
              <Link href="/sports-haut-niveau">
                <Button className="text-xl px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white border-3 border-yellow-400 shadow-lg hover:shadow-xl transition-all">
                  <span className="text-2xl mr-3">🏆</span>
                  Sports de Haut Niveau & Sport-Études
                  <span className="text-2xl ml-3">⚽</span>
                </Button>
              </Link>
              
              <Link href="/ia-coaching-halal">
                <Button className="text-xl px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-3 border-yellow-400 shadow-lg hover:shadow-xl transition-all">
                  <span className="text-2xl mr-3">🤖</span>
                  IA Coaching Halal - Propriété Souheila
                  <span className="text-2xl ml-3">💜</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Métriques Écosystème Éthique */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          <Card className="bg-white/80 backdrop-blur border-2 border-emerald-200">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-2xl text-emerald-800 mb-2">
                {patrimoineStats.total} CHF
              </h3>
              <p className="text-gray-600">Patrimoine Total Consolidé</p>
              <p className="text-xs text-emerald-600 mt-1">Famille Yakoubi (9 membres)</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur border-2 border-blue-200">
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-2xl text-blue-800 mb-2">
                {patrimoineStats.zakat_annuelle} CHF
              </h3>
              <p className="text-gray-600">Zakat Annuelle (2.5%)</p>
              <p className="text-xs text-blue-600 mt-1">Redistribution communauté</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur border-2 border-purple-200">
            <CardContent className="p-6 text-center">
              <Shield className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-2xl text-purple-800 mb-2">
                {patrimoineStats.couverture_takaful} CHF
              </h3>
              <p className="text-gray-600">Couverture Takaful</p>
              <p className="text-xs text-purple-600 mt-1">Assurance islamique famille</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur border-2 border-orange-200">
            <CardContent className="p-6 text-center">
              <Building className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-2xl text-orange-800 mb-2">
                {patrimoineStats.services_actifs}
              </h3>
              <p className="text-gray-600">Services Opérationnels</p>
              <p className="text-xs text-orange-600 mt-1">Interconnectés via API</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur border-2 border-green-200">
            <CardContent className="p-6 text-center">
              <Globe className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-2xl text-green-800 mb-2">
                {patrimoineStats.pays_operationnels}
              </h3>
              <p className="text-gray-600">Pays Opérationnels</p>
              <p className="text-xs text-green-600 mt-1">Suisse, UAE, Luxembourg, +1</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur border-2 border-indigo-200">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
              <h3 className="font-bold text-2xl text-indigo-800 mb-2">
                7
              </h3>
              <p className="text-gray-600">Scholars Conseil Chariah</p>
              <p className="text-xs text-indigo-600 mt-1">Validation permanente</p>
            </CardContent>
          </Card>
        </div>

        {/* Services Voie Halal 52 */}
        <Card className="mb-12">
          <CardHeader className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
            <CardTitle className="text-2xl flex items-center gap-3">
              <Star className="h-8 w-8" />
              🌟 Voie Halal : Bâtir un Univers Éthique & Prospère
            </CardTitle>
            <p className="text-emerald-100 mt-2">
              طريق الحلال – لبناء عالم أخلاقي ومزدهر | Étapes vers une réussite alignée avec tes valeurs
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesVoieHalal.map((service, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`bg-gradient-to-r ${service.color} p-4 text-white`}>
                    <div className="flex items-center gap-3 mb-2">
                      <service.icon className="h-6 w-6" />
                      <h3 className="font-bold">{service.nom}</h3>
                      <Badge className={`ml-auto ${
                        service.status === 'Opérationnel' ? 'bg-green-100 text-green-800' :
                        service.status === 'Développement' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {service.status}
                      </Badge>
                    </div>
                    <p className="text-sm opacity-90">{service.description}</p>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600">Valeur:</span>
                      <span className="font-bold text-lg">{service.patrimoine}</span>
                    </div>
                    <Link href={service.href}>
                      <Button 
                        className="w-full" 
                        variant={service.status === 'Opérationnel' ? 'default' : 'outline'}
                        disabled={service.status === 'Planifié'}
                      >
                        {service.status === 'Opérationnel' ? 'Accéder' :
                         service.status === 'Développement' ? 'Voir Progression' :
                         'Bientôt'}
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Accès Rapide */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800">Accès Rapide - Voie Halal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/ecosysteme-poles-halal">
                <Button className="w-full h-16 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white">
                  <Globe className="h-5 w-5 mr-2" />
                  Écosystème Complet
                </Button>
              </Link>
              <Link href="/comptabilite-islamique">
                <Button className="w-full h-16 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                  <Calculator className="h-5 w-5 mr-2" />
                  Comptabilité Halal
                </Button>
              </Link>
              <Link href="/immobilier-islamique">
                <Button className="w-full h-16 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white">
                  <Home className="h-5 w-5 mr-2" />
                  Immobilier Halal
                </Button>
              </Link>
              <Link href="/modules-ced">
                <Button className="w-full h-16 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
                  <Headphones className="h-5 w-5 mr-2" />
                  🎵 Coran Audio + Modules CED
                </Button>
              </Link>
              <Link href="/assistant-vocal-multilingue">
                <Button className="w-full h-16 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                  <span className="text-lg mr-2">🎤</span>
                  Assistant Vocal Aisha Al-Aman
                </Button>
              </Link>
              <Link href="/parcours-gamifie">
                <Button className="w-full h-16 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white">
                  <span className="text-lg mr-2">🎮</span>
                  Parcours Gamifié FinTech
                </Button>
              </Link>
              <Link href="/bibliotheque-fiqh-informatique">
                <Button className="w-full h-16 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
                  <span className="text-lg mr-2">📚</span>
                  23,456 Règles Fiqh Tech
                </Button>
              </Link>
              <Link href="/motivation-spirituelle">
                <Button className="w-full h-16 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white">
                  <span className="text-lg mr-2">💜</span>
                  Motivation Spirituelle
                </Button>
              </Link>
              <Link href="/sagesse-ced-halaltech">
                <Button className="w-full h-16 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white">
                  <Heart className="h-5 w-5 mr-2" />
                  Sagesse CED HalalTech™
                </Button>
              </Link>
              <Link href="/halal-security">
                <Button className="w-full h-16 bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 text-white">
                  <Shield className="h-5 w-5 mr-2" />
                  🛡️ HalalSecurity
                </Button>
              </Link>
              <Link href="/enseignement-humilite-islamique">
                <Button className="w-full h-16 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white">
                  <Heart className="h-5 w-5 mr-2" />
                  Enseignement de l'Humilité
                </Button>
              </Link>
              <Link href="/certificats-halaltech">
                <Button className="w-full h-16 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white">
                  <span className="text-lg mr-2">🎓</span>
                  Diplômes & Certificats HalalTech™
                </Button>
              </Link>
              <Link href="/test-55-modules">
                <Button className="w-full h-16 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white border-2 border-yellow-400">
                  <span className="text-lg mr-2">🧪</span>
                  Test Complet 55 Modules CED
                </Button>
              </Link>
              <Link href="/analyse-concurrentielle">
                <Button className="w-full h-16 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                  <span className="text-lg mr-2">📊</span>
                  Analyse Concurrentielle
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Section Supervision Savante */}
        <Card className="mb-12 bg-gradient-to-r from-green-50 to-emerald-50 border-4 border-green-300">
          <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <CardTitle className="text-2xl flex items-center gap-3">
              <span className="text-3xl">📜</span>
              Supervision Savante & Protection Juridique
            </CardTitle>
            <p className="text-green-100 mt-2">
              Charte islamique officielle • Clause "IA Non-Mufti" • Présentation scholars et madhhab
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <Link href="/charte-supervision-savante">
                <Button className="w-full h-20 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-2 border-green-400 flex flex-col justify-center">
                  <span className="text-2xl mb-1">📜</span>
                  <span className="text-sm font-bold">Charte Supervision</span>
                  <span className="text-xs">Islamique Officielle</span>
                </Button>
              </Link>

              <Link href="/clause-ia-non-mufti">
                <Button className="w-full h-20 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white border-2 border-red-400 flex flex-col justify-center">
                  <span className="text-2xl mb-1">⚠️</span>
                  <span className="text-sm font-bold">Clause "IA Non-Mufti"</span>
                  <span className="text-xs">Protection Juridique</span>
                </Button>
              </Link>

              <Link href="/presentation-scholar">
                <Button className="w-full h-20 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-2 border-purple-400 flex flex-col justify-center">
                  <span className="text-2xl mb-1">🎓</span>
                  <span className="text-sm font-bold">Présentation Scholar</span>
                  <span className="text-xs">UI/UX + Madhhab</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Section Al-Amana Auto Halal - Monopole Mondial */}
        <Card className="mb-12 bg-gradient-to-r from-emerald-50 to-green-50 border-4 border-emerald-400">
          <CardHeader className="bg-gradient-to-r from-emerald-600 to-green-600 text-white">
            <CardTitle className="text-2xl flex items-center gap-3">
              <img 
                src="@assets/08657603-AD72-44C6-951C-F7A18E37B12D_1751825648264.png" 
                alt="Al-Amana Auto Halal Logo" 
                className="h-12 w-12 object-contain bg-white rounded-full p-1"
              />
              🚘 Al-Amana Auto Halal – Yakoubi Farid
            </CardTitle>
            <p className="text-emerald-100 mt-2">
              MONOPOLE MONDIAL • Premier garage automobile 100% halal • Standards HalalTech™ validés Dubaï 🇦🇪 • Données garanties Genève 🇨🇭
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <Link href="/garages-halal">
                <Button className="w-full h-20 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white border-2 border-emerald-400 flex flex-col justify-center">
                  <span className="text-2xl mb-1">🚗</span>
                  <span className="text-sm font-bold">Réseau Garages</span>
                  <span className="text-xs">Certification Halal</span>
                </Button>
              </Link>

              <Link href="/garages-halal">
                <Button className="w-full h-20 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-2 border-blue-400 flex flex-col justify-center">
                  <span className="text-2xl mb-1">💎</span>
                  <span className="text-sm font-bold">Voitures Prestige</span>
                  <span className="text-xs">Mercedes • BMW • Audi</span>
                </Button>
              </Link>

              <Link href="/garages-halal">
                <Button className="w-full h-20 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-2 border-purple-400 flex flex-col justify-center">
                  <img 
                    src="@assets/58D70CD1-EF23-48DA-909D-FFDB14104DE1_1751826407654.png" 
                    alt="CED Bank Logo" 
                    className="h-8 w-8 object-contain mb-1 bg-white rounded p-1"
                  />
                  <span className="text-sm font-bold">CED Bank Intégré</span>
                  <span className="text-xs">Financement 0% Riba</span>
                </Button>
              </Link>

              <Link href="/garages-halal">
                <Button className="w-full h-20 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white border-2 border-orange-400 flex flex-col justify-center">
                  <img 
                    src="@assets/620CEEAC-1C3D-47C2-9ABB-DAD0A286B304_1751826407654.png" 
                    alt="Al-Aman Assurance Logo" 
                    className="h-8 w-8 object-contain mb-1 bg-white rounded p-1"
                  />
                  <span className="text-sm font-bold">Al-Aman Takaful</span>
                  <span className="text-xs">Assurance Islamique</span>
                </Button>
              </Link>

              <Link href="/garages-halal">
                <Button className="w-full h-20 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white border-2 border-yellow-400 flex flex-col justify-center">
                  <span className="text-2xl mb-1">🕌</span>
                  <span className="text-sm font-bold">Équipe Musulmane</span>
                  <span className="text-xs">Respect horaires prière</span>
                </Button>
              </Link>

              <Link href="/analyse-concurrentielle-complete">
                <Button className="w-full h-20 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white border-2 border-pink-400 flex flex-col justify-center">
                  <span className="text-2xl mb-1">🏆</span>
                  <span className="text-sm font-bold">Monopole Mondial</span>
                  <span className="text-xs">Aucun concurrent</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Section 5 Nouvelles Fonctionnalités Révolutionnaires */}
        <Card className="mb-12 bg-gradient-to-r from-pink-50 to-purple-50 border-4 border-pink-300">
          <CardHeader className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
            <CardTitle className="text-2xl flex items-center gap-3">
              <span className="text-3xl">🚀</span>
              5 Nouvelles Fonctionnalités Révolutionnaires CED HalalTech™
            </CardTitle>
            <p className="text-pink-100 mt-2">
              Technologies de pointe • Intelligence artificielle avancée • Alternatives conformes à l'éthique islamique mondiale
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <Link href="/tendances-tech-halal-temps-reel">
                <Button className="w-full h-20 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-2 border-blue-400 flex flex-col justify-center">
                  <span className="text-2xl mb-1">📈</span>
                  <span className="text-sm font-bold">Tendances Tech Halal</span>
                  <span className="text-xs">Temps Réel</span>
                </Button>
              </Link>

              <Link href="/accessibilite-inclusive-multilingue">
                <Button className="w-full h-20 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-2 border-green-400 flex flex-col justify-center">
                  <span className="text-2xl mb-1">🎯</span>
                  <span className="text-sm font-bold">Accessibilité Inclusive</span>
                  <span className="text-xs">Guide Vocal Multilingue</span>
                </Button>
              </Link>

              <Link href="/reconnaissance-vocale-islamique">
                <Button className="w-full h-20 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-2 border-purple-400 flex flex-col justify-center">
                  <span className="text-2xl mb-1">🎤</span>
                  <span className="text-sm font-bold">Reconnaissance Vocale</span>
                  <span className="text-xs">Islamique Avancée</span>
                </Button>
              </Link>

              <Link href="/analyse-predictive-marche-halal">
                <Button className="w-full h-20 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white border-2 border-orange-400 flex flex-col justify-center">
                  <span className="text-2xl mb-1">🔮</span>
                  <span className="text-sm font-bold">Analyse Prédictive</span>
                  <span className="text-xs">Marché Halal IA</span>
                </Button>
              </Link>

              <Link href="/gestion-communautaire-musulmane">
                <Button className="w-full h-20 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white border-2 border-teal-400 flex flex-col justify-center">
                  <span className="text-2xl mb-1">🕌</span>
                  <span className="text-sm font-bold">Communauté Musulmane</span>
                  <span className="text-xs">Gestion Globale</span>
                </Button>
              </Link>

            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg">
              <p className="text-center text-gray-800 font-medium">
                ⚡ <strong>Exclusivité CED HalalTech™</strong> - Premières au monde dans la technologie islamique • 
                Alternatives conformes à l'éthique islamique • Conformité Sharia 100%
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section Innovations Uniques CED */}
        <Card className="mb-12 bg-gradient-to-r from-cyan-50 to-blue-50 border-4 border-cyan-300">
          <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
            <CardTitle className="text-2xl flex items-center gap-3">
              <span className="text-3xl">💎</span>
              Innovations Uniques - Aucun Concurrent au Monde
            </CardTitle>
            <p className="text-cyan-100 mt-2">
              Fonctionnalités révolutionnaires 100% halal • Développées exclusivement par CED HalalTech™ • Monopole technologique confirmé
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <Link href="/hajj-savings-planner">
                <Button className="w-full h-20 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white border-2 border-emerald-400 flex flex-col justify-center">
                  <span className="text-2xl mb-1">🕋</span>
                  <span className="text-sm font-bold">Hajj Savings Planner</span>
                  <span className="text-xs">Épargne pèlerinage 0% riba</span>
                </Button>
              </Link>

              <Link href="/nikah-financial-planning">
                <Button className="w-full h-20 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white border-2 border-rose-400 flex flex-col justify-center">
                  <span className="text-2xl mb-1">💍</span>
                  <span className="text-sm font-bold">Nikah Planning</span>
                  <span className="text-xs">Mariage islamique complet</span>
                </Button>
              </Link>

              <Link href="/analyse-concurrentielle-complete">
                <Button className="w-full h-20 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white border-2 border-yellow-400 flex flex-col justify-center">
                  <span className="text-2xl mb-1">🏆</span>
                  <span className="text-sm font-bold">Domination Marché</span>
                  <span className="text-xs">Analyse concurrentielle</span>
                </Button>
              </Link>

              <Link href="/web-tv-halal">
                <Button className="w-full h-20 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-2 border-purple-400 flex flex-col justify-center relative">
                  <img 
                    src="@assets/1C5E68B4-F28D-4FFE-91DD-6EDF1476DE79_1751825949295.png" 
                    alt="Web TV Halal Logo" 
                    className="h-8 w-8 object-contain mb-1 bg-white rounded p-1"
                  />
                  <span className="text-sm font-bold">Web TV Halal</span>
                  <span className="text-xs">6 chaînes islamiques</span>
                </Button>
              </Link>

              <Link href="/super-iarp-pro">
                <Button className="w-full h-20 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-2 border-blue-400 flex flex-col justify-center">
                  <span className="text-2xl mb-1">🤖</span>
                  <span className="text-sm font-bold">Super IARP Pro</span>
                  <span className="text-xs">IA validée 150+ scholars</span>
                </Button>
              </Link>

              <Link href="/centre-test-complet">
                <Button className="w-full h-20 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white border-2 border-orange-400 flex flex-col justify-center">
                  <span className="text-2xl mb-1">🧪</span>
                  <span className="text-sm font-bold">Centre Test Complet</span>
                  <span className="text-xs">55 modules testables</span>
                </Button>
              </Link>
            </div>
            
            {/* Boutons d'Action Principaux */}
            <div className="mt-8 space-y-4">
              {/* Bouton Déploiement Mondial */}
              <div className="text-center">
                <Link href="/deployment-mondial">
                  <Button className="text-2xl px-12 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white border-4 border-yellow-400 shadow-2xl hover:shadow-3xl transition-all rounded-xl">
                    <span className="text-3xl mr-4">🚀</span>
                    Déploiement Mondial CED HalalTech™
                    <span className="text-3xl ml-4">🌍</span>
                  </Button>
                </Link>
                <p className="text-sm text-gray-600 mt-2">
                  Position dominante confirmée • Monopole technologique • Prêt pour expansion mondiale
                </p>
              </div>
              
              {/* Bouton Charte Écologique */}
              <div className="text-center">
                <Link href="/halal-eco-system">
                  <Button className="text-xl px-10 py-5 bg-gradient-to-r from-green-600 via-emerald-600 to-cyan-600 hover:from-green-700 hover:via-emerald-700 hover:to-cyan-700 text-white border-4 border-green-400 shadow-xl hover:shadow-2xl transition-all rounded-xl">
                    <span className="text-2xl mr-3">🌍</span>
                    Charte Écologique Islamique CED
                    <span className="text-2xl ml-3">🌱</span>
                  </Button>
                </Link>
                <p className="text-sm text-gray-600 mt-2">
                  6 Piliers écologie islamique • Technologies vertes halal • Fatwas environnementales officielles
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section Logos Officiels CED avec Copyright Intégré */}
        <Card className="mb-8 border-purple-500 border-2 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <CardTitle className="text-2xl text-center flex items-center justify-center gap-3">
              <span className="text-3xl">🛡️</span>
              Logos Officiels CED HalalTech™ - Copyright Intégré
              <span className="text-3xl">©️</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
              <p className="text-red-800 font-semibold text-center">
                ⚖️ Tous les logos incluent automatiquement le copyright © Yakoubi Yamina
              </p>
              <p className="text-red-700 text-sm text-center mt-1">
                Usage exclusivement réservé à l'écosystème CED • Reproduction interdite sans autorisation
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6">
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg border shadow-md mb-2">
                  <LogosCED variant="primary" size="medium" showCopyright={true} />
                </div>
                <p className="text-sm font-semibold text-purple-700">Logo Principal CED</p>
                <p className="text-xs text-gray-600">Croissant & Étoile Islamique</p>
              </div>

              <div className="text-center">
                <div className="bg-white p-4 rounded-lg border shadow-md mb-2">
                  <LogosCED variant="bank" size="medium" showCopyright={true} />
                </div>
                <p className="text-sm font-semibold text-blue-700">CED Bank</p>
                <p className="text-xs text-gray-600">Services Bancaires Halal</p>
              </div>

              <div className="text-center">
                <div className="bg-white p-4 rounded-lg border shadow-md mb-2">
                  <LogosCED variant="academy" size="medium" showCopyright={true} />
                </div>
                <p className="text-sm font-semibold text-purple-700">CED Academy</p>
                <p className="text-xs text-gray-600">Formations Islamiques</p>
              </div>

              <div className="text-center">
                <div className="bg-white p-4 rounded-lg border shadow-md mb-2">
                  <LogosCED variant="takaful" size="medium" showCopyright={true} />
                </div>
                <p className="text-sm font-semibold text-green-700">Al-Aman Takaful</p>
                <p className="text-xs text-gray-600">Assurance Islamique</p>
              </div>

              <div className="text-center">
                <div className="bg-white p-4 rounded-lg border shadow-md mb-2">
                  <LogosCED variant="halaltech" size="medium" showCopyright={true} />
                </div>
                <p className="text-sm font-semibold text-emerald-700">HalalTech™</p>
                <p className="text-xs text-gray-600">Innovation Tech Halal</p>
              </div>

              <div className="text-center">
                <div className="bg-white p-4 rounded-lg border shadow-md mb-2">
                  <LogosCED variant="eco" size="medium" showCopyright={true} />
                </div>
                <p className="text-sm font-semibold text-green-700">Eco Halal</p>
                <p className="text-xs text-gray-600">Écologie Islamique</p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/logos-officiels-ced">
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 text-lg">
                  <span className="mr-2">🖼️</span>
                  Voir Tous les Logos & Télécharger SVG
                  <span className="ml-2">📥</span>
                </Button>
              </Link>
            </div>

            <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
              <p className="text-yellow-800 text-sm text-center">
                <strong>Format SVG Vectoriel</strong> • Qualité optimale toutes tailles • 
                <strong>Copyright automatiquement intégré</strong> • Conformité RGPD/LPD 🇨🇭
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Actions Rapides */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800">Actions Rapides CED</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Link href="/halal-eco-system">
                    <Button className="w-full h-20 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white text-lg font-bold border-4 border-green-400 shadow-xl">
                      <span className="text-3xl mr-3">🌍</span>
                      🌱 CHARTE ÉCOLOGIQUE ISLAMIQUE CED
                      <span className="text-3xl ml-3">🌱</span>
                    </Button>
                  </Link>
                  <Link href="/protection-licence">
                    <Button className="w-full h-16 bg-gradient-to-r from-gray-700 to-slate-800 hover:from-gray-800 hover:to-slate-900 text-white">
                      <Shield className="h-5 w-5 mr-2" />
                      🛡️ Protection & Licence CED
                    </Button>
                  </Link>
                  <Link href="/mentions-legales">
                    <Button className="w-full h-16 bg-gradient-to-r from-slate-600 to-zinc-700 hover:from-slate-700 hover:to-zinc-800 text-white">
                      <Scale className="h-5 w-5 mr-2" />
                      ⚖️ Mentions Légales
                    </Button>
                  </Link>
                  <Link href="/hommage-scholars-islamiques">
                    <Button className="w-full h-16 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                      <Star className="h-5 w-5 mr-2" />
                      Hommage aux Scholars
                    </Button>
                  </Link>
                  <Link href="/systeme-duaa-transactions">
                    <Button className="w-full h-16 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                      <Heart className="h-5 w-5 mr-2" />
                      Du'a à Chaque Transaction
                    </Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  <Link href="/amour-fi-allah-authentique">
                    <Button className="w-full h-16 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white">
                      <Heart className="h-5 w-5 mr-2" />
                      Amour Fi-Allah Authentique
                    </Button>
                  </Link>
                  <Link href="/blockchain-fiqh-rules">
                    <Button className="w-full h-16 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                      <Shield className="h-5 w-5 mr-2" />
                      Blockchain & Fiqh Rules
                    </Button>
                  </Link>
                  <Link href="/planification-successorale-50-ans">
                    <Button className="w-full h-16 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white">
                      <span className="text-lg mr-2">👑</span>
                      Héritage 50+ Ans
                    </Button>
                  </Link>
                  <Link href="/ca-se-trouve-ou">
                    <Button className="w-full h-16 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Ça Se Trouve Où ?
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800">Certifications & Validations</CardTitle>
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
      
      {/* Footer de Protection et Licence */}
      <ProtectionFooter />
    </div>
  );
}