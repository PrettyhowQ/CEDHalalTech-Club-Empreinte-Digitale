import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Link } from 'wouter';
import { 
  Search,
  FileText,
  Database,
  Code,
  Folder,
  Calculator,
  Building,
  Shield,
  Globe,
  Eye,
  Download,
  Copy,
  CheckCircle,
  MapPin,
  Navigation
} from 'lucide-react';

export default function LocalisationVisuelle() {
  const [searchTerm, setSearchTerm] = useState('');

  const emplacementsSpecifiques = [
    {
      nom: "Données Transactions Réelles",
      path: "base_islamique_comptable/data_reelle/transactions.csv",
      type: "fichier",
      description: "20 transactions halal avec montants réels (2.85M CHF villa, etc.)",
      contenu: "TXN-2025-001 à TXN-2025-020",
      taille: "~2KB",
      icon: FileText,
      color: "bg-green-100 text-green-800"
    },
    {
      nom: "Calculateur Zakat Python",
      path: "base_islamique_comptable/outils_technologiques/zakat_calculator.py",
      type: "script",
      description: "Script Python fonctionnel - calcul automatique Zakat famille Yakoubi",
      contenu: "481,278.75 CHF Zakat annuelle calculée",
      taille: "~15KB",
      icon: Calculator,
      color: "bg-blue-100 text-blue-800"
    },
    {
      nom: "Intégration Écosystème Python",
      path: "base_islamique_comptable/outils_technologiques/integration_ecosysteme_ced.py",
      type: "script",
      description: "Patrimoine consolidé famille Yakoubi (9 membres)",
      contenu: "19,245,750.00 CHF total patrimoine",
      taille: "~12KB",
      icon: Code,
      color: "bg-purple-100 text-purple-800"
    },
    {
      nom: "Base PostgreSQL Schema",
      path: "shared/schema.ts",
      type: "database",
      description: "19 tables (15 comptables + 4 immobilier) avec relations",
      contenu: "entreprises, planComptable, proprietesImmobilieres, etc.",
      taille: "~50KB",
      icon: Database,
      color: "bg-orange-100 text-orange-800"
    },
    {
      nom: "Seeding Données Exemples",
      path: "server/seedComptabiliteIslamique.ts",
      type: "script",
      description: "Insertion automatique données test + propriétés immobilier",
      contenu: "Villa Genève, Appartement Lausanne, Bureau",
      taille: "~25KB",
      icon: Database,
      color: "bg-cyan-100 text-cyan-800"
    },
    {
      nom: "Notes Fiqh Zakat",
      path: "base_islamique_comptable/sources_islamiques/zakat_fiqh_notes.md",
      type: "documentation",
      description: "Sources islamiques authentiques validées 4 madhabs",
      contenu: "Coran 2:43, Hadith Bukhari 1395, consensus scholars",
      taille: "~8KB",
      icon: FileText,
      color: "bg-emerald-100 text-emerald-800"
    },
    {
      nom: "Cadre Intégration Halal",
      path: "base_islamique_comptable/sources_islamiques/cadre_integration_halal.md",
      type: "documentation",
      description: "Architecture technique/juridique/religieuse complète",
      contenu: "AAOIFI/IFSB, 7 scholars, multi-juridictionnel",
      taille: "~20KB",
      icon: Globe,
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      nom: "README Base Islamique",
      path: "base_islamique_comptable/README.md",
      type: "guide",
      description: "Guide complet utilisation système comptable halal",
      contenu: "Instructions Python, métriques, certifications",
      taille: "~6KB",
      icon: FileText,
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      nom: "Empire Économique Complet",
      path: "EMPIRE_ECONOMIQUE_HALAL_COMPLET.md",
      type: "synthèse",
      description: "Document final synthèse empire halal Yakoubi Yamina",
      contenu: "7 étapes accomplies, 43.9M CHF patrimoine total",
      taille: "~25KB",
      icon: FileText,
      color: "bg-red-100 text-red-800"
    },
    {
      nom: "Page Comptabilité Islamique",
      path: "/comptabilite-islamique",
      type: "interface",
      description: "Interface web gestion comptabilité Sharia",
      contenu: "15 comptes, double entrée, calcul Zakat",
      taille: "Interface",
      icon: Calculator,
      color: "bg-green-100 text-green-800"
    },
    {
      nom: "Page Immobilier Islamique",
      path: "/immobilier-islamique",
      type: "interface",
      description: "Gestion propriétés halal avec critères islamiques",
      contenu: "Zones prière, orientation Qibla, proximité mosquées",
      taille: "Interface",
      icon: Building,
      color: "bg-blue-100 text-blue-800"
    },
    {
      nom: "Page Écosystème Pôles",
      path: "/ecosysteme-poles-halal",
      type: "interface",
      description: "Vue d'ensemble interconnexion tous services",
      contenu: "API, Conseil Chariah, WebTV, Garages halal",
      taille: "Interface",
      icon: Globe,
      color: "bg-purple-100 text-purple-800"
    }
  ];

  const filteredEmplacements = emplacementsSpecifiques.filter(item =>
    item.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const raccourcisAcces = [
    { nom: "Test Zakat", commande: "python base_islamique_comptable/outils_technologiques/zakat_calculator.py", icon: Calculator },
    { nom: "Test Intégration", commande: "python base_islamique_comptable/outils_technologiques/integration_ecosysteme_ced.py", icon: Code },
    { nom: "Push DB", commande: "npm run db:push", icon: Database },
    { nom: "Voir Transactions", commande: "cat base_islamique_comptable/data_reelle/transactions.csv", icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header avec recherche */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-indigo-800 mb-4 flex items-center justify-center gap-3">
            <MapPin className="h-12 w-12" />
            Localisation Visuelle - "Ça Se Trouve Où ?"
          </h1>
          <p className="text-xl text-indigo-600 mb-6">
            Trouvez instantanément n'importe quel élément de votre empire halal
          </p>
          
          {/* Barre de recherche */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Chercher : zakat, transaction, immobilier, python..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-center border-2 border-indigo-200 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Raccourcis d'accès rapide */}
        <Card className="mb-8">
          <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <CardTitle className="flex items-center gap-2">
              <Navigation className="h-5 w-5" />
              Raccourcis d'Accès Rapide
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {raccourcisAcces.map((raccourci, index) => (
                <Card key={index} className="border-2 hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => copyToClipboard(raccourci.commande)}>
                  <CardContent className="p-4 text-center">
                    <raccourci.icon className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                    <h3 className="font-semibold mb-2">{raccourci.nom}</h3>
                    <p className="text-xs text-gray-500 font-mono">{raccourci.commande}</p>
                    <Button size="sm" className="mt-2 w-full">
                      <Copy className="h-3 w-3 mr-1" />
                      Copier
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Résultats de recherche / Liste complète */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredEmplacements.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <item.icon className="h-6 w-6 text-indigo-600" />
                    <div>
                      <CardTitle className="text-lg text-gray-800">{item.nom}</CardTitle>
                      <Badge className={`mt-1 ${item.color}`}>
                        {item.type}
                      </Badge>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {item.taille}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <p className="text-xs text-gray-500 mb-1">Contenu:</p>
                  <p className="text-sm font-mono text-gray-700">{item.contenu}</p>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <p className="text-xs text-gray-500 mb-1">Emplacement:</p>
                  <p className="text-sm font-mono text-blue-700 break-all">{item.path}</p>
                </div>

                <div className="flex gap-2">
                  {item.path.startsWith('/') ? (
                    <Link href={item.path}>
                      <Button size="sm" className="flex-1">
                        <Eye className="h-3 w-3 mr-1" />
                        Voir Interface
                      </Button>
                    </Link>
                  ) : (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => copyToClipboard(item.path)}
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      Copier Path
                    </Button>
                  )}
                  
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => copyToClipboard(item.nom + ": " + item.path)}
                  >
                    <Download className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Instructions d'utilisation */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-emerald-800">Instructions d'Accès</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-green-800 mb-2">Fichiers Code</h3>
                <p className="text-sm text-gray-600">
                  Utilisez VS Code ou l'éditeur Replit pour ouvrir les fichiers .ts, .py, .md
                </p>
              </div>

              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Navigation className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-blue-800 mb-2">Interfaces Web</h3>
                <p className="text-sm text-gray-600">
                  Cliquez sur "Voir Interface" pour les pages commençant par "/"
                </p>
              </div>

              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Code className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-purple-800 mb-2">Scripts Python</h3>
                <p className="text-sm text-gray-600">
                  Exécutez les commandes copiées dans le terminal pour tester
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-indigo-200 text-center text-sm text-indigo-600">
          <p className="mb-2">© 2025 Club Empreinte Digitale - Yakoubi Yamina</p>
          <p className="mb-2">🗺️ Localisation visuelle complète de votre empire halal</p>
          <p className="text-xs text-gray-500">
            {filteredEmplacements.length} éléments trouvés
            {searchTerm && ` pour "${searchTerm}"`}
          </p>
        </div>

      </div>
    </div>
  );
}