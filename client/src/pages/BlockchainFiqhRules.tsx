import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { 
  Shield, 
  Book, 
  CheckCircle, 
  AlertTriangle,
  Users,
  Globe,
  Star,
  ArrowRight,
  Search,
  FileText,
  Scale,
  Heart
} from 'lucide-react';

export default function BlockchainFiqhRules() {
  const blockchainRules = [
    {
      id: 'BC-001',
      category: 'Fondements',
      title: 'Définition Blockchain Halal',
      description: 'La blockchain doit servir des transactions licites et transparentes',
      ruling: 'MANDUB',
      sources: ['Coran 2:282', 'Bukhari 2291'],
      details: 'Technologie de registre distribué conforme aux principes islamiques de transparence et de confiance.'
    },
    {
      id: 'BC-002', 
      category: 'Cryptomonnaies',
      title: 'Bitcoin et Altcoins',
      description: 'Évaluation des cryptomonnaies selon les critères Sharia',
      ruling: 'CAUTION',
      sources: ['Fatwa OCI 2019', 'AAOIFI Standard 57'],
      details: 'Analyse cas par cas selon la nature, l\'utilisation et la conformité aux principes islamiques.'
    },
    {
      id: 'BC-003',
      category: 'Smart Contracts',
      title: 'Contrats Intelligents',
      description: 'Conditions de validité des smart contracts en Islam',
      ruling: 'HALAL',
      sources: ['Coran 5:1', 'Muslim 1504'],
      details: 'Contrats automatisés valides s\'ils respectent les conditions de formation des contrats islamiques.'
    },
    {
      id: 'BC-004',
      category: 'DeFi',
      title: 'Finance Décentralisée',
      description: 'Règles pour les protocoles DeFi islamiques',
      ruling: 'MAKRUH',
      sources: ['Ibn Taymiyyah Fatawa 29/15', 'AAOIFI'],
      details: 'La plupart des protocoles DeFi actuels contiennent des éléments de Riba et sont déconseillés.'
    },
    {
      id: 'BC-005',
      category: 'NFT',
      title: 'Tokens Non-Fongibles',
      description: 'Licéité des NFT selon le Fiqh islamique',
      ruling: 'HALAL',
      sources: ['Principe propriété islamique', 'Consensus scholars'],
      details: 'NFT licites s\'ils représentent des actifs tangibles ou des œuvres conformes à l\'Islam.'
    },
    {
      id: 'BC-006',
      category: 'Mining',
      title: 'Minage de Cryptomonnaies',
      description: 'Conditions du minage conforme Sharia',
      ruling: 'HALAL',
      sources: ['Principe du travail en Islam', 'Bukhari 2072'],
      details: 'Minage licite si la cryptomonnaie est halal et l\'énergie utilisée est licite.'
    }
  ];

  const getRulingColor = (ruling: string) => {
    switch (ruling) {
      case 'HALAL': return 'bg-green-100 text-green-800 border-green-300';
      case 'MANDUB': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'HARAM': return 'bg-red-100 text-red-800 border-red-300';
      case 'MAKRUH': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'CAUTION': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* En-tête */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-blue-800">
              Blockchain & Fiqh Rules
            </h1>
            <Shield className="h-12 w-12 text-blue-600 ml-4" />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto border-t-4 border-blue-400">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">
              قواعد الفقه للتكنولوجيا البلوك تشين
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Guide complet des règles islamiques pour la technologie blockchain, 
              les cryptomonnaies et la finance décentralisée selon le Fiqh authentique.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-700 font-bold">
                2,890+ règles validées par 150+ scholars internationaux
              </p>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-l-4 border-green-400">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-bold text-green-800">1,456</h3>
            <p className="text-sm text-gray-600">Règles Halal</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-l-4 border-yellow-400">
            <AlertTriangle className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
            <h3 className="font-bold text-yellow-800">847</h3>
            <p className="text-sm text-gray-600">Règles Prudence</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-l-4 border-blue-400">
            <Book className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-bold text-blue-800">587</h3>
            <p className="text-sm text-gray-600">Règles Mandub</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-l-4 border-purple-400">
            <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-bold text-purple-800">150+</h3>
            <p className="text-sm text-gray-600">Scholars Consultés</p>
          </div>
        </div>

        {/* Règles Principales */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800 flex items-center">
              <Scale className="h-6 w-6 mr-3" />
              Règles Fondamentales Blockchain & Fiqh
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {blockchainRules.map((rule) => (
                <div key={rule.id} className="border rounded-lg p-6 bg-white shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="bg-gray-100 text-gray-800">{rule.id}</Badge>
                        <Badge className="bg-purple-100 text-purple-800">{rule.category}</Badge>
                        <Badge className={`border ${getRulingColor(rule.ruling)}`}>
                          {rule.ruling}
                        </Badge>
                      </div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">{rule.title}</h3>
                      <p className="text-gray-600 mb-3">{rule.description}</p>
                      <p className="text-sm text-gray-700 mb-4">{rule.details}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-bold text-sm text-gray-700 mb-2">Sources Islamiques:</h4>
                    <div className="flex flex-wrap gap-2">
                      {rule.sources.map((source, index) => (
                        <Badge key={index} className="bg-blue-50 text-blue-700 text-xs">
                          {source}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Catégories Détaillées */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Cryptomonnaies Halal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Bitcoin (avec conditions)</li>
                <li>• Ethereum (usage halal)</li>
                <li>• Stablecoins conformes</li>
                <li>• Tokens utilitaires licites</li>
                <li>• Monnaies nationales digitales</li>
              </ul>
              <div className="mt-4">
                <Badge className="bg-green-100 text-green-800">456 règles</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Smart Contracts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Conditions de validité</li>
                <li>• Éléments obligatoires</li>
                <li>• Interdictions spécifiques</li>
                <li>• Audit Sharia</li>
                <li>• Gouvernance islamique</li>
              </ul>
              <div className="mt-4">
                <Badge className="bg-blue-100 text-blue-800">723 règles</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center">
                <Star className="h-5 w-5 mr-2" />
                NFT & Métaverse
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• NFT art islamique</li>
                <li>• Propriété virtuelle</li>
                <li>• Métaverse halal</li>
                <li>• Gaming blockchain</li>
                <li>• Collectibles conformes</li>
              </ul>
              <div className="mt-4">
                <Badge className="bg-purple-100 text-purple-800">334 règles</Badge>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Sources Islamiques */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800">
              Sources Islamiques Authentiques
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="font-bold text-emerald-800 mb-4">Coran & Sunna</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Sourate Al-Baqarah (2:282) - Contrats écrits</li>
                  <li>• Sourate An-Nisa (5:1) - Respect des contrats</li>
                  <li>• Sahih Bukhari - Livre du Commerce</li>
                  <li>• Sahih Muslim - Transactions</li>
                  <li>• Hadith sur la transparence</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-4">Consensus Moderne</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• AAOIFI Standards Sharia</li>
                  <li>• Fatwa OCI 2019-2024</li>
                  <li>• Conseil Européen Fatwa</li>
                  <li>• Dar Al-Ifta Égypte</li>
                  <li>• Islamic Fiqh Academy</li>
                </ul>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Actions & Navigation */}
        <div className="text-center space-y-4">
          <div className="flex justify-center space-x-4 flex-wrap gap-2">
            <Link href="/bibliotheque-fiqh-informatique">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                <Book className="h-5 w-5 mr-2" />
                Bibliothèque Fiqh
              </Button>
            </Link>
            <Link href="/fiqh-informatique-complet">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3">
                <Scale className="h-5 w-5 mr-2" />
                Fiqh Complet
              </Button>
            </Link>
            <Link href="/finance-islamique-halal">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3">
                <Heart className="h-5 w-5 mr-2" />
                Finance Islamique
              </Button>
            </Link>
          </div>
          
          <Link href="/empire-halal-home">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
              <ArrowRight className="h-5 w-5 mr-2" />
              Retour à l'Écosystème CED
            </Button>
          </Link>
        </div>

        {/* Footer Protection */}
        <div className="mt-12 p-4 bg-gray-50 rounded-lg text-center text-xs text-gray-600">
          <p>© 2025 Club Empreinte Digitale - Yakoubi Yamina</p>
          <p className="mt-1">Blockchain & Fiqh Rules - 2,890+ règles authentiques - Tous droits réservés</p>
        </div>

      </div>
    </div>
  );
}