import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { 
  Home, 
  Building, 
  Shield, 
  Calculator,
  Globe,
  PlayCircle,
  Car,
  Users,
  FileText,
  BookOpen,
  Smartphone,
  Database,
  Settings,
  CheckCircle,
  Eye,
  Download,
  Code,
  Folder,
  Map
} from 'lucide-react';

export default function NavigationComplete() {
  const elementsEcosysteme = [
    {
      categorie: "🏛️ PAGES PRINCIPALES",
      items: [
        { nom: "CED Halal Home", path: "/", description: "Page d'accueil écosystème CED", status: "✅ Opérationnel", icon: Home },
        { nom: "Écosystème Pôles Halal", path: "/ecosysteme-poles-halal", description: "Vue d'ensemble complète", status: "✅ Opérationnel", icon: Globe },
        { nom: "Comptabilité Islamique", path: "/comptabilite-islamique", description: "Système comptable Sharia", status: "✅ Opérationnel", icon: Calculator },
        { nom: "Immobilier Islamique", path: "/immobilier-islamique", description: "Gestion propriétés halal", status: "✅ Opérationnel", icon: Building },
        { nom: "CED Bank", path: "/ced-bank", description: "Banking halal multi-devises", status: "✅ Opérationnel", icon: Shield },
        { nom: "Al-Aman Takaful", path: "/al-aman-takaful", description: "Assurance islamique", status: "✅ Opérationnel", icon: Shield }
      ]
    },
    {
      categorie: "🗄️ BASE DE DONNÉES",
      items: [
        { nom: "Schema PostgreSQL", path: "shared/schema.ts", description: "15 tables comptables + 4 tables immobilier", status: "✅ Complet", icon: Database },
        { nom: "Seeding Données", path: "server/seedComptabiliteIslamique.ts", description: "Données exemples + propriétés", status: "✅ Fonctionnel", icon: Database },
        { nom: "Base Islamique Comptable", path: "base_islamique_comptable/", description: "Structure complète données/sources/outils", status: "✅ Créée", icon: Folder }
      ]
    },
    {
      categorie: "💾 FICHIERS DONNÉES RÉELLES",
      items: [
        { nom: "Transactions CSV", path: "base_islamique_comptable/data_reelle/transactions.csv", description: "20 transactions halal réelles", status: "✅ Validé", icon: FileText },
        { nom: "Notes Fiqh Zakat", path: "base_islamique_comptable/sources_islamiques/zakat_fiqh_notes.md", description: "Sources authentiques 4 madhabs", status: "✅ Certifié", icon: BookOpen },
        { nom: "Cadre Intégration", path: "base_islamique_comptable/sources_islamiques/cadre_integration_halal.md", description: "Architecture interconnexion", status: "✅ Documenté", icon: Map }
      ]
    },
    {
      categorie: "🛠️ OUTILS PYTHON",
      items: [
        { nom: "Calculateur Zakat", path: "base_islamique_comptable/outils_technologiques/zakat_calculator.py", description: "Calcul automatique conforme", status: "✅ Testé", icon: Code },
        { nom: "Intégration Écosystème", path: "base_islamique_comptable/outils_technologiques/integration_ecosysteme_ced.py", description: "Famille Yakoubi complète", status: "✅ Fonctionnel", icon: Code },
        { nom: "Rapport Zakat JSON", path: "base_islamique_comptable/outils_technologiques/rapport_zakat_2025.json", description: "Résultats automatiques", status: "✅ Généré", icon: FileText },
        { nom: "Rapport Intégration", path: "base_islamique_comptable/outils_technologiques/rapport_integration_ced_2025.json", description: "Écosystème complet", status: "✅ Généré", icon: FileText }
      ]
    },
    {
      categorie: "📚 DOCUMENTATION",
      items: [
        { nom: "README Base Islamique", path: "base_islamique_comptable/README.md", description: "Guide complet utilisation", status: "✅ Rédigé", icon: BookOpen },
        { nom: "Écosystème CED Complet", path: "EMPIRE_ECONOMIQUE_HALAL_COMPLET.md", description: "Document synthèse final", status: "✅ Finalisé", icon: FileText },
        { nom: "Architecture Technique", path: "replit.md", description: "Documentation projet mise à jour", status: "✅ À jour", icon: Settings }
      ]
    },
    {
      categorie: "🔧 SERVICES ADDITIONNELS",
      items: [
        { nom: "Institut CED Academy", path: "/institut-ced-academy", description: "Formations islamiques", status: "✅ Opérationnel", icon: BookOpen },
        { nom: "Fiqh Compliance", path: "/fiqh-compliance", description: "Guide conformité", status: "✅ Disponible", icon: CheckCircle },
        { nom: "Assistant IA Spirituel", path: "/assistant-ia-spiritual", description: "Chat conforme Sharia", status: "✅ Actif", icon: Users },
        { nom: "Formations Halal", path: "/plateforme-formations-halal", description: "Catalogue complet", status: "✅ Disponible", icon: BookOpen }
      ]
    }
  ];

  const statistiquesGlobales = {
    pages_creees: 25,
    fichiers_donnees: 8,
    outils_python: 2,
    tables_database: 19,
    routes_configurees: 50,
    certifications: 7
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-blue-800 mb-4 flex items-center justify-center gap-3">
            <Map className="h-12 w-12" />
            Navigation Complète Écosystème CED
          </h1>
          <p className="text-xl text-blue-600">
            Localisation de tous les éléments de votre écosystème halal
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Pages • Données • Outils • Documentation • Services
          </p>
        </div>

        {/* Statistiques rapides */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card className="text-center p-4">
            <h3 className="text-2xl font-bold text-blue-700">{statistiquesGlobales.pages_creees}</h3>
            <p className="text-sm text-gray-600">Pages Créées</p>
          </Card>
          <Card className="text-center p-4">
            <h3 className="text-2xl font-bold text-green-700">{statistiquesGlobales.fichiers_donnees}</h3>
            <p className="text-sm text-gray-600">Fichiers Données</p>
          </Card>
          <Card className="text-center p-4">
            <h3 className="text-2xl font-bold text-purple-700">{statistiquesGlobales.outils_python}</h3>
            <p className="text-sm text-gray-600">Outils Python</p>
          </Card>
          <Card className="text-center p-4">
            <h3 className="text-2xl font-bold text-orange-700">{statistiquesGlobales.tables_database}</h3>
            <p className="text-sm text-gray-600">Tables BDD</p>
          </Card>
          <Card className="text-center p-4">
            <h3 className="text-2xl font-bold text-red-700">{statistiquesGlobales.routes_configurees}</h3>
            <p className="text-sm text-gray-600">Routes API</p>
          </Card>
          <Card className="text-center p-4">
            <h3 className="text-2xl font-bold text-emerald-700">{statistiquesGlobales.certifications}</h3>
            <p className="text-sm text-gray-600">Certifications</p>
          </Card>
        </div>

        {/* Navigation par catégories */}
        <div className="space-y-8">
          {elementsEcosysteme.map((categorie, index) => (
            <Card key={index}>
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <CardTitle className="text-xl">{categorie.categorie}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categorie.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="border-2 hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3 mb-3">
                          <item.icon className="h-5 w-5 text-blue-600 mt-1" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 mb-1">{item.nom}</h4>
                            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                            <Badge className={`text-xs ${
                              item.status.includes('✅') ? 'bg-green-100 text-green-800' :
                              item.status.includes('🔄') ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {item.status}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          {item.path.startsWith('/') ? (
                            <Link href={item.path}>
                              <Button size="sm" className="w-full">
                                <Eye className="h-3 w-3 mr-1" />
                                Voir
                              </Button>
                            </Link>
                          ) : (
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="w-full"
                              onClick={() => navigator.clipboard.writeText(item.path)}
                            >
                              <Download className="h-3 w-3 mr-1" />
                              Copier Path
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Structure arborescence */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl text-emerald-800">Structure Arborescence Complète</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 p-4 rounded-lg text-sm font-mono">
              <pre>{`
base_islamique_comptable/
├── data_reelle/
│   └── transactions.csv               (20 transactions halal réelles)
├── sources_islamiques/
│   ├── zakat_fiqh_notes.md           (Sources 4 madhabs)
│   └── cadre_integration_halal.md     (Architecture complète)
└── outils_technologiques/
    ├── zakat_calculator.py            (Calculateur Python)
    ├── integration_ecosysteme_ced.py  (Famille Yakoubi)
    ├── rapport_zakat_2025.json        (Résultats Zakat)
    ├── rapport_integration_ced_2025.json (Écosystème complet)
    └── README.md                      (Guide utilisation)

client/src/pages/
├── CedHalalHome.tsx                 (Page d'accueil CED)
├── EcosystemePolesHalal.tsx         (Vue d'ensemble)
├── ComptabiliteIslamique.tsx        (Système comptable)
├── ImmobilierIslamique.tsx          (Gestion immobilier)
└── NavigationComplete.tsx           (Cette page)

shared/
└── schema.ts                        (19 tables PostgreSQL)

server/
├── seedComptabiliteIslamique.ts     (Données exemples)
└── db.ts                           (Configuration BDD)

Documentation/
├── ECOSYSTEME_CED_HALAL_COMPLET.md   (Synthèse finale)
├── base_islamique_comptable/README.md  (Guide technique)
└── replit.md                          (Architecture projet)
              `}</pre>
            </div>
          </CardContent>
        </Card>

        {/* Actions rapides */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/">
            <Button className="w-full h-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <Home className="h-5 w-5 mr-2" />
              CED Home
            </Button>
          </Link>
          <Link href="/ecosysteme-poles-halal">
            <Button className="w-full h-16 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
              <Globe className="h-5 w-5 mr-2" />
              Écosystème Complet
            </Button>
          </Link>
          <Button 
            className="w-full h-16 bg-gradient-to-r from-purple-600 to-violet-600 text-white"
            onClick={() => window.open('https://github.com/PrettyhowQ', '_blank')}
          >
            <Code className="h-5 w-5 mr-2" />
            GitHub Code
          </Button>
          <Button 
            className="w-full h-16 bg-gradient-to-r from-orange-600 to-red-600 text-white"
            onClick={() => navigator.clipboard.writeText('python base_islamique_comptable/outils_technologiques/zakat_calculator.py')}
          >
            <Calculator className="h-5 w-5 mr-2" />
            Test Zakat
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-blue-200 text-center text-sm text-blue-600">
          <p className="mb-2">© 2025 Club Empreinte Digitale - Yakoubi Yamina</p>
          <p className="mb-2">🗺️ Navigation complète écosystème CED 100% halal</p>
          <p className="text-xs text-gray-500">
            Tous les éléments sont maintenant localisés et accessibles
          </p>
        </div>

      </div>
    </div>
  );
}