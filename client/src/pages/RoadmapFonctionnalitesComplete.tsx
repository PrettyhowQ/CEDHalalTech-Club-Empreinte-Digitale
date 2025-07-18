import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Rocket, 
  Zap, 
  Star, 
  TrendingUp, 
  Lightbulb, 
  Crown,
  Clock,
  Users,
  Globe,
  Shield,
  Smartphone,
  Brain,
  Coins,
  Building,
  Satellite
} from "lucide-react";
import { Link } from "wouter";

const priorites = [
  {
    id: "priorite-1",
    titre: "🔥 PRIORITÉ 1 - CRITIQUE",
    periode: "Semaine 1-2",
    couleur: "from-red-600 to-red-800",
    icone: <Rocket className="h-8 w-8" />,
    fonctionnalites: [
      { nom: "Migration Vercel Pro", categorie: "Déploiement", status: "ready" },
      { nom: "Domaine personnalisé", categorie: "Production", status: "ready" },
      { nom: "Certificats SSL", categorie: "Sécurité", status: "ready" },
      { nom: "CDN Global", categorie: "Performance", status: "ready" },
      { nom: "Monitoring 24/7", categorie: "Surveillance", status: "ready" },
      { nom: "Pitch Deck Investisseurs", categorie: "Business", status: "ready" },
      { nom: "Business Plan McKinsey", categorie: "Documentation", status: "ready" },
      { nom: "Portfolio Clients", categorie: "Commercial", status: "ready" },
      { nom: "Études de Cas", categorie: "Marketing", status: "ready" },
      { nom: "White Papers", categorie: "Technique", status: "ready" },
      { nom: "Dossier Innosuisse", categorie: "Financement", status: "ready" },
      { nom: "Horizon Europe", categorie: "Subvention", status: "ready" },
      { nom: "Fonds Innovation", categorie: "Local", status: "ready" },
      { nom: "SECO PME", categorie: "Digital", status: "ready" },
      { nom: "Fondation Gebert", categorie: "Recherche", status: "ready" }
    ]
  },
  {
    id: "priorite-2",
    titre: "⚡ PRIORITÉ 2 - URGENTE",
    periode: "Semaine 3-4",
    couleur: "from-orange-600 to-red-600",
    icone: <Zap className="h-8 w-8" />,
    fonctionnalites: [
      { nom: "API Gateway", categorie: "Architecture", status: "development" },
      { nom: "Auth Enterprise", categorie: "Sécurité", status: "development" },
      { nom: "Dashboard Analytics", categorie: "Monitoring", status: "development" },
      { nom: "Notifications System", categorie: "Communication", status: "development" },
      { nom: "Cache Redis", categorie: "Performance", status: "development" },
      { nom: "CED Bank iOS", categorie: "Mobile", status: "development" },
      { nom: "CED Bank Android", categorie: "Mobile", status: "development" },
      { nom: "Academy App", categorie: "Éducation", status: "development" },
      { nom: "Takaful App", categorie: "Assurance", status: "development" },
      { nom: "IARP Pro App", categorie: "IA", status: "development" },
      { nom: "Immobilier Platform", categorie: "Business", status: "development" },
      { nom: "TechForAll Market", categorie: "E-commerce", status: "development" },
      { nom: "Comptabilité ERP", categorie: "Finance", status: "development" },
      { nom: "RH Management", categorie: "Humain", status: "development" },
      { nom: "Supply Chain", categorie: "Logistique", status: "development" }
    ]
  },
  {
    id: "priorite-3",
    titre: "🌟 PRIORITÉ 3 - IMPORTANTE",
    periode: "Mois 2-3",
    couleur: "from-yellow-600 to-orange-600",
    icone: <Star className="h-8 w-8" />,
    fonctionnalites: [
      { nom: "IARP Pro 2.0", categorie: "IA Avancée", status: "planning" },
      { nom: "IA Vocale 78 Langues", categorie: "Multilingue", status: "planning" },
      { nom: "Computer Vision", categorie: "Vision", status: "planning" },
      { nom: "Predictive Analytics", categorie: "Prédiction", status: "planning" },
      { nom: "NLP Contextuel", categorie: "Language", status: "planning" },
      { nom: "Blockchain Halal", categorie: "Crypto", status: "planning" },
      { nom: "DeFi Islamique", categorie: "Finance", status: "planning" },
      { nom: "Crypto Halal", categorie: "Monnaie", status: "planning" },
      { nom: "NFT Islamiques", categorie: "Art", status: "planning" },
      { nom: "Trading Quantique", categorie: "Algorithmes", status: "planning" },
      { nom: "Bureau Dubai", categorie: "Expansion", status: "planning" },
      { nom: "Arabie Saoudite", categorie: "Partenariat", status: "planning" },
      { nom: "Qatar Hub", categorie: "Finance", status: "planning" },
      { nom: "UAE Présence", categorie: "MENA", status: "planning" },
      { nom: "Malaysia Centre", categorie: "Asie", status: "planning" }
    ]
  },
  {
    id: "priorite-4",
    titre: "📈 PRIORITÉ 4 - CROISSANCE",
    periode: "Mois 4-6",
    couleur: "from-green-600 to-yellow-600",
    icone: <TrendingUp className="h-8 w-8" />,
    fonctionnalites: [
      { nom: "Metaverse Hajj", categorie: "Immersif", status: "research" },
      { nom: "Space Finance", categorie: "Spatial", status: "research" },
      { nom: "Quantum Computing", categorie: "Quantique", status: "research" },
      { nom: "Neural Banking", categorie: "IA Neural", status: "research" },
      { nom: "Carbon Negative", categorie: "Écologie", status: "research" },
      { nom: "Dubai Islamic Bank", categorie: "Partenariat", status: "research" },
      { nom: "Emirates NBD", categorie: "Collaboration", status: "research" },
      { nom: "Saudi Aramco", categorie: "Énergie", status: "research" },
      { nom: "Malaysian Bank", categorie: "Asie", status: "research" },
      { nom: "Swiss Re", categorie: "Takaful", status: "research" },
      { nom: "ISO 27001", categorie: "Certification", status: "research" },
      { nom: "SOC 2 Type II", categorie: "Audit US", status: "research" },
      { nom: "FINMA Licence", categorie: "Bancaire", status: "research" },
      { nom: "AAOIFI Compliance", categorie: "Islamique", status: "research" },
      { nom: "IFSB Certification", categorie: "Globale", status: "research" }
    ]
  },
  {
    id: "priorite-5",
    titre: "🔮 PRIORITÉ 5 - INNOVATION",
    periode: "Mois 6-12",
    couleur: "from-blue-600 to-green-600",
    icone: <Lightbulb className="h-8 w-8" />,
    fonctionnalites: [
      { nom: "Hologram Banking", categorie: "Interface", status: "concept" },
      { nom: "Brain-Computer", categorie: "Neuronale", status: "concept" },
      { nom: "5G/6G Apps", categorie: "Connectivité", status: "concept" },
      { nom: "IoT Islamic", categorie: "Objets", status: "concept" },
      { nom: "AR Quran", categorie: "Réalité", status: "concept" },
      { nom: "CED University", categorie: "Éducation", status: "concept" },
      { nom: "Research Institute", categorie: "Recherche", status: "concept" },
      { nom: "Scholarship Program", categorie: "Bourses", status: "concept" },
      { nom: "Humanitarian Tech", categorie: "Humanitaire", status: "concept" },
      { nom: "Climate Solutions", categorie: "Climat", status: "concept" },
      { nom: "CED Foundation", categorie: "Legacy", status: "concept" },
      { nom: "Next Generation", categorie: "Succession", status: "concept" },
      { nom: "Knowledge Transfer", categorie: "Transmission", status: "concept" },
      { nom: "Digital Archive", categorie: "Préservation", status: "concept" },
      { nom: "100-Year Vision", categorie: "Centenaire", status: "concept" }
    ]
  },
  {
    id: "priorite-6",
    titre: "💎 PRIORITÉ 6 - EXCELLENCE",
    periode: "An 2-5",
    couleur: "from-purple-600 to-blue-600",
    icone: <Crown className="h-8 w-8" />,
    fonctionnalites: [
      { nom: "Global Tech Hub", categorie: "Leadership", status: "vision" },
      { nom: "Industry Standards", categorie: "Standards", status: "vision" },
      { nom: "Thought Leadership", categorie: "Influence", status: "vision" },
      { nom: "Academic Partners", categorie: "Université", status: "vision" },
      { nom: "Policy Influence", categorie: "Réglementation", status: "vision" },
      { nom: "CED OS", categorie: "Système", status: "vision" },
      { nom: "Hardware Halal", categorie: "Matériel", status: "vision" },
      { nom: "Satellite Network", categorie: "Réseau", status: "vision" },
      { nom: "Smart Cities", categorie: "Villes", status: "vision" },
      { nom: "Autonomous Systems", categorie: "Autonome", status: "vision" }
    ]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "ready": return "bg-green-500";
    case "development": return "bg-yellow-500";
    case "planning": return "bg-blue-500";
    case "research": return "bg-purple-500";
    case "concept": return "bg-gray-500";
    case "vision": return "bg-indigo-500";
    default: return "bg-gray-400";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "ready": return "Prêt";
    case "development": return "Développement";
    case "planning": return "Planification";
    case "research": return "Recherche";
    case "concept": return "Concept";
    case "vision": return "Vision";
    default: return "Défini";
  }
};

export default function RoadmapFonctionnalitesComplete() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            🚀 Roadmap Complète CED HalalTech™
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            TOUTES les fonctionnalités par ordre de priorité - 85 fonctionnalités complètes
          </p>
          <div className="text-sm text-gray-400 mt-2 font-arabic">
            بإذن الله - Bi idni Allah, tout est réalisable avec Sa bénédiction
          </div>
        </div>

        {/* Statistiques Globales */}
        <Card className="mb-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-600/30">
          <CardHeader className="text-center">
            <CardTitle className="text-white flex items-center justify-center space-x-2">
              <Globe className="h-6 w-6 text-green-400" />
              <span>Récapitulatif Global</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-red-400">15</div>
                <div className="text-gray-300">Critiques</div>
                <div className="text-xs text-gray-500">Sem. 1-2</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-orange-400">15</div>
                <div className="text-gray-300">Urgentes</div>
                <div className="text-xs text-gray-500">Sem. 3-4</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-yellow-400">15</div>
                <div className="text-gray-300">Importantes</div>
                <div className="text-xs text-gray-500">Mois 2-3</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-green-400">15</div>
                <div className="text-gray-300">Croissance</div>
                <div className="text-xs text-gray-500">Mois 4-6</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-400">15</div>
                <div className="text-gray-300">Innovation</div>
                <div className="text-xs text-gray-500">Mois 6-12</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-purple-400">10</div>
                <div className="text-gray-300">Excellence</div>
                <div className="text-xs text-gray-500">An 2-5</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs des Priorités */}
        <Tabs defaultValue="priorite-1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8 bg-slate-800">
            {priorites.map((priorite, index) => (
              <TabsTrigger 
                key={priorite.id} 
                value={priorite.id} 
                className="data-[state=active]:bg-green-600 text-xs"
              >
                {index + 1}. {priorite.titre.split(' ')[1]}
              </TabsTrigger>
            ))}
          </TabsList>

          {priorites.map((priorite) => (
            <TabsContent key={priorite.id} value={priorite.id}>
              <Card className={`bg-gradient-to-r ${priorite.couleur}/20 border-green-600/30`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {priorite.icone}
                      <div>
                        <CardTitle className="text-white text-xl">
                          {priorite.titre}
                        </CardTitle>
                        <CardDescription className="text-gray-300">
                          {priorite.periode} • {priorite.fonctionnalites.length} fonctionnalités
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-white border-white">
                      {priorite.periode}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {priorite.fonctionnalites.map((fonc, index) => (
                      <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-white">{fonc.nom}</h4>
                          <Badge 
                            className={`${getStatusColor(fonc.status)} text-white text-xs`}
                          >
                            {getStatusText(fonc.status)}
                          </Badge>
                        </div>
                        <p className="text-gray-400 text-sm">{fonc.categorie}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Actions Immédiates */}
        <Card className="mt-8 bg-gradient-to-r from-amber-900/30 to-yellow-900/30 border-yellow-600/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Clock className="h-6 w-6 text-yellow-400" />
              <span>🎯 Actions Immédiates</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">✅</div>
                <h4 className="font-bold mb-2">Validation Roadmap</h4>
                <p className="text-sm text-gray-400">Confirmer avec vous</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🚀</div>
                <h4 className="font-bold mb-2">Démarrage P1</h4>
                <p className="text-sm text-gray-400">Lancement immédiat</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">👥</div>
                <h4 className="font-bold mb-2">Équipe Mobilisation</h4>
                <p className="text-sm text-gray-400">Famille Yakoubi</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">💰</div>
                <h4 className="font-bold mb-2">Ressources</h4>
                <p className="text-sm text-gray-400">Budget et timing</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">📢</div>
                <h4 className="font-bold mb-2">Communication</h4>
                <p className="text-sm text-gray-400">Stratégie déploiement</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center mt-8">
          <Link href="/">
            <Button variant="outline" className="mr-4">
              ← Retour Accueil CED
            </Button>
          </Link>
          <Button className="bg-green-600 hover:bg-green-700">
            📄 Télécharger PDF Complet
          </Button>
        </div>

        {/* Footer Protection */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <div className="bg-slate-800/30 rounded-lg p-4">
            <p>🛡️ CED HalalTech™ - Propriété Exclusive Yakoubi Yamina</p>
            <p className="text-xs mt-2">
              Roadmap confidentielle - Usage strictement réservé écosystème CED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}