import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
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
  Heart
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
      <div className="bg-gradient-to-r from-emerald-800 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="h-12 w-12 text-yellow-400" />
              <h1 className="text-5xl font-bold">Réseau Économique 100% Halal</h1>
              <Heart className="h-12 w-12 text-yellow-400" />
            </div>
            <p className="text-2xl text-emerald-100 mb-4 leading-relaxed max-w-4xl mx-auto">
              "Un réseau économique 100% halal, pensé pour les cœurs sincères qui veulent entreprendre avec foi, éthique et excellence."
            </p>
            <p className="text-lg text-blue-100 mb-2">
              Club Empreinte Digitale - CED Voie du HALAL | Écosystème Éthique & Prospère
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <Badge className="bg-yellow-500 text-yellow-900">
                Dirigeante: Yakoubi Yamina
              </Badge>
              <Badge className="bg-green-500 text-green-900">
                Pionnière Francophone
              </Badge>
              <Badge className="bg-blue-500 text-blue-900">
                100% Conforme Sharia
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        
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
              🌟 Voie Halal 52 : Bâtir un Univers Éthique & Prospère
            </CardTitle>
            <p className="text-emerald-100 mt-2">
              طريق الحلال ٥٢ – لبناء عالم أخلاقي ومزدهر | 52 étapes vers une réussite alignée avec tes valeurs
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
            <CardTitle className="text-2xl text-emerald-800">Accès Rapide - Voie Halal 52</CardTitle>
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
              <Link href="/52-modules">
                <Button className="w-full h-16 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
                  <Headphones className="h-5 w-5 mr-2" />
                  🎵 Coran Audio + 52 Modules
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
              <Link href="/philosophie-humilite-islamique">
                <Button className="w-full h-16 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white">
                  <Heart className="h-5 w-5 mr-2" />
                  Philosophie de l'Humilité
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
              <Link href="/amour-fi-allah-authentique">
                <Button className="w-full h-16 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white">
                  <Heart className="h-5 w-5 mr-2" />
                  Amour Fi-Allah Authentique
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
    </div>
  );
}