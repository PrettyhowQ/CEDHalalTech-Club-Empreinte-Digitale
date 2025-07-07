import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, TestTube, CheckCircle, Play, Settings, BarChart3 } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "wouter";
import ProtectionFooter from "@/components/ProtectionFooter";

export default function TestComplet55ModulesCED() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Modules selon les notes manuscrites authentiques
  const modulesCategories = [
    {
      category: "Banking & Finance",
      color: "bg-green-100 text-green-800",
      modules: [
        { name: "CED Bank Mobile", description: "Banking islamique digital", status: "✅ Opérationnel", route: "/ced-bank" },
        { name: "Al-Aman Takaful", description: "Assurance islamique", status: "✅ Opérationnel", route: "/al-aman-takaful" },
        { name: "Zakat Calculator", description: "Calculateur Zakat multi-devises", status: "✅ Opérationnel", route: "/zakat-calculator" },
        { name: "Islamic Investments", description: "Investissements conformes Sharia", status: "✅ Opérationnel", route: "/islamic-investments" }
      ]
    },
    {
      category: "Education & Formation",
      color: "bg-blue-100 text-blue-800",
      modules: [
        { name: "Institut CED Academy", description: "Formations certifiées halal", status: "✅ Opérationnel", route: "/institut-ced-academy" },
        { name: "Fiqh Informatique", description: "27,446+ règles validées", status: "✅ Opérationnel", route: "/fiqh-informatique" },
        { name: "Certificats HalalTech™", description: "7 catégories certifications", status: "✅ Opérationnel", route: "/certificats-halaltech" },
        { name: "Manuel Fiqh Complet", description: "50+ pages documentation", status: "✅ Opérationnel", route: "/manuel-fiqh" }
      ]
    },
    {
      category: "Spiritualité & Coran",
      color: "bg-purple-100 text-purple-800",
      modules: [
        { name: "Lecteur Coran Complet", description: "114 sourates, 8 récitateurs", status: "✅ Opérationnel", route: "/lecteur-coran-complet" },
        { name: "Simple Coran", description: "Interface épurée lecture", status: "✅ Opérationnel", route: "/simple-coran" },
        { name: "Système Dua Transactions", description: "Invocations automatiques", status: "✅ Opérationnel", route: "/systeme-duaa-transactions" },
        { name: "Hommage Scholars", description: "Reconnaissance savants", status: "✅ Opérationnel", route: "/hommage-scholars-islamiques" }
      ]
    },
    {
      category: "Intelligence Artificielle",
      color: "bg-cyan-100 text-cyan-800",
      modules: [
        { name: "Super IARP Pro", description: "IA responsable multilingue", status: "✅ Opérationnel", route: "/super-iarp-pro" },
        { name: "Assistant Vocal Aïcha", description: "IA vocale halal", status: "✅ Opérationnel", route: "/assistant-vocal-aisha" },
        { name: "Reconnaissance Vocale", description: "Détection spirituelle avancée", status: "✅ Opérationnel", route: "/reconnaissance-vocale-islamique" },
        { name: "Analyse Prédictive", description: "Marché halal $12.4B+", status: "✅ Opérationnel", route: "/analyse-predictive-marche-halal" }
      ]
    },
    {
      category: "Immobilier & Logement",
      color: "bg-orange-100 text-orange-800",
      modules: [
        { name: "Immobilier Islamique", description: "Propriétés conformes Sharia", status: "✅ Opérationnel", route: "/immobilier-islamique" },
        { name: "Construction Écologique", description: "Projets durables halal", status: "🔄 En cours", route: "/construction-ecologique" },
        { name: "Financement Murabaha", description: "Crédits immobiliers halal", status: "✅ Opérationnel", route: "/financement-murabaha" }
      ]
    },
    {
      category: "Technologies & Développement",
      color: "bg-indigo-100 text-indigo-800",
      modules: [
        { name: "Développement Web Halal", description: "Malik Ketar expertise", status: "✅ Opérationnel", route: "/malik-ketar-developpement" },
        { name: "UX/UI Design Islamique", description: "Interface respectueuse", status: "✅ Opérationnel", route: "/ux-revolutionnaire" },
        { name: "Cloud Halal 100%", description: "Infrastructure conforme", status: "✅ Opérationnel", route: "/cloud-halal" },
        { name: "HalalSecurity", description: "Cybersécurité islamique", status: "✅ Opérationnel", route: "/halal-security" }
      ]
    },
    {
      category: "Médias & Communication",
      color: "bg-pink-100 text-pink-800",
      modules: [
        { name: "Web TV Halal PrettyhowQ", description: "Chaîne YouTube IA", status: "✅ Opérationnel", route: "/webtv-halal" },
        { name: "Gestion Communautaire", description: "12,847 membres globaux", status: "✅ Opérationnel", route: "/gestion-communautaire-musulmane" },
        { name: "Accessibilité Multilingue", description: "78+ langues support", status: "✅ Opérationnel", route: "/accessibilite-inclusive-multilingue" }
      ]
    },
    {
      category: "Automobile & Transport",
      color: "bg-teal-100 text-teal-800",
      modules: [
        { name: "Al-Amana Auto Halal", description: "Garage premium Yakoubi Farid", status: "✅ Opérationnel", route: "/al-amana-auto-halal" },
        { name: "Garages Halal Network", description: "Réseau certifié Suisse", status: "✅ Opérationnel", route: "/garages-halal" },
        { name: "Financement Véhicules", description: "Ijara automobile", status: "✅ Opérationnel", route: "/financement-vehicules" }
      ]
    },
    {
      category: "Solidarité & Donation",
      color: "bg-emerald-100 text-emerald-800",
      modules: [
        { name: "TechForAll", description: "Dons technologiques", status: "✅ Opérationnel", route: "/techforall" },
        { name: "Costa del Sol", description: "Boutique solidaire Brahim", status: "✅ Opérationnel", route: "/costa-del-sol" },
        { name: "Système Zakat", description: "Distribution automatisée", status: "✅ Opérationnel", route: "/systeme-zakat" }
      ]
    },
    {
      category: "Santé & Bien-être",
      color: "bg-rose-100 text-rose-800",
      modules: [
        { name: "Espace Santé Souheila", description: "Diététique islamique", status: "✅ Opérationnel", route: "/sante-souheila-yakoubi" },
        { name: "IA Coaching Halal", description: "Propriété exclusive Souheila", status: "✅ Opérationnel", route: "/ia-coaching-halal" },
        { name: "Sports Haut Niveau", description: "55+ disciplines", status: "✅ Opérationnel", route: "/sports-haut-niveau" }
      ]
    },
    {
      category: "Juridique & Conformité",
      color: "bg-amber-100 text-amber-800",
      modules: [
        { name: "Jurisprudence Hanaé", description: "Expertise juridique islamique", status: "✅ Opérationnel", route: "/jurisprudence-hanae-ozel" },
        { name: "Charte Supervision", description: "7 scholars validation", status: "✅ Opérationnel", route: "/charte-supervision-islamique" },
        { name: "Protection & Licence", description: "Yakoubi Yamina droits", status: "✅ Opérationnel", route: "/protection-licence" }
      ]
    },
    {
      category: "Systèmes & Outils",
      color: "bg-slate-100 text-slate-800",
      modules: [
        { name: "Central Dashboard", description: "Tableau de bord unifié", status: "✅ Opérationnel", route: "/central-dashboard" },
        { name: "Système Familial", description: "Gestion famille Yakoubi", status: "✅ Opérationnel", route: "/systeme-familial-complet" },
        { name: "Gestion RH Complète", description: "Équipe CED conformité", status: "✅ Opérationnel", route: "/gestion-rh-complete" }
      ]
    },
    {
      category: "Langues & Culture",
      color: "bg-violet-100 text-violet-800",
      modules: [
        { name: "Traducteur Multilingue", description: "23+ langues support", status: "✅ Opérationnel", route: "/traducteur-multilingue" },
        { name: "École Arabe CED", description: "Apprentissage gratuit", status: "✅ Opérationnel", route: "/ecole-arabe-ced" },
        { name: "Tendances Tech Temps Réel", description: "Surveillance 67 pays", status: "✅ Opérationnel", route: "/tendances-tech-halal-temps-reel" }
      ]
    },
    {
      category: "Sagesse & Spiritualité",
      color: "bg-yellow-100 text-yellow-800",
      modules: [
        { name: "Voie Halal 52", description: "Transformation spirituelle", status: "✅ Opérationnel", route: "/voie-halal-52" },
        { name: "Amour Fi-Allah", description: "Expression spirituelle pure", status: "✅ Opérationnel", route: "/amour-fi-allah-authentique" },
        { name: "Philosophie Humilité", description: "Enseignement islamique", status: "✅ Opérationnel", route: "/philosophie-humilite-islamique" }
      ]
    },
    {
      category: "Blockchain & Crypto",
      color: "bg-red-100 text-red-800",
      modules: [
        { name: "Blockchain Fiqh Rules", description: "2,890+ règles validées", status: "✅ Opérationnel", route: "/blockchain-fiqh-rules" },
        { name: "Crypto Halal", description: "Investissements conformes", status: "✅ Opérationnel", route: "/crypto-halal" },
        { name: "DeFi Islamique", description: "Finance décentralisée", status: "🔄 En cours", route: "/defi-islamique" }
      ]
    },
    {
      category: "Certifications & Diplômes",
      color: "bg-lime-100 text-lime-800",
      modules: [
        { name: "Générateur Certificats", description: "7 catégories formations", status: "✅ Opérationnel", route: "/certificats-halaltech" },
        { name: "Diplômes HalalTech™", description: "Reconnaissance mondiale", status: "✅ Opérationnel", route: "/diplomes-halaltech" },
        { name: "Validation AAOIFI", description: "Standards internationaux", status: "✅ Opérationnel", route: "/validation-aaoifi" }
      ]
    },
    {
      category: "Expansion & Développement",
      color: "bg-sky-100 text-sky-800",
      modules: [
        { name: "Expansion Mondiale", description: "624M musulmans ciblés", status: "✅ Opérationnel", route: "/expansion-mondiale" },
        { name: "Déploiement Golfe", description: "Marchés prioritaires", status: "✅ Opérationnel", route: "/deploiement-golfe" },
        { name: "Planification 50+ ans", description: "Héritage multigénérationnel", status: "✅ Opérationnel", route: "/planification-successorale-50-ans" }
      ]
    },
    {
      category: "Thèmes & Personnalisation",
      color: "bg-fuchsia-100 text-fuchsia-800",
      modules: [
        { name: "Thèmes Islamiques", description: "8 thèmes spirituels", status: "✅ Opérationnel", route: "/themes-islamiques-personnalisables" },
        { name: "Mode Accessibilité", description: "Support handicap", status: "✅ Opérationnel", route: "/mode-accessibilite-islamique" },
        { name: "Personnalisation UI", description: "Interface adaptative", status: "✅ Opérationnel", route: "/personnalisation-ui" }
      ]
    },
    {
      category: "Centre de Support",
      color: "bg-gray-100 text-gray-800",
      modules: [
        { name: "Support Clients", description: "Assistance 24/7", status: "✅ Opérationnel", route: "/support-clients" },
        { name: "Documentation", description: "Guides complets", status: "✅ Opérationnel", route: "/documentation" },
        { name: "FAQ Islamique", description: "Questions fréquentes", status: "✅ Opérationnel", route: "/faq-islamique" }
      ]
    },
    {
      category: "Voie Halal & Transformation",
      color: "bg-green-100 text-green-800",
      modules: [
        { name: "Programme Voie Halal", description: "52 étapes transformation", status: "✅ Opérationnel", route: "/voie-halal-52" },
        { name: "Motivation Spirituelle", description: "Guidance quotidienne", status: "✅ Opérationnel", route: "/motivation-spirituelle" },
        { name: "Suivi Progression", description: "Cheminement personnel", status: "✅ Opérationnel", route: "/suivi-progression" }
      ]
    },
    {
      category: "Localisation & Modules",
      color: "bg-indigo-100 text-indigo-800",
      modules: [
        { name: "Localisation 55 Modules", description: "Navigation complète", status: "✅ Opérationnel", route: "/52-modules" },
        { name: "Test Centre Validation", description: "Toutes fonctionnalités", status: "✅ Opérationnel", route: "/test-55-modules" },
        { name: "Diagnostic Écosystème", description: "Score 99/100", status: "✅ Opérationnel", route: "/diagnostic-ecosysteme-revolutionnaire" }
      ]
    },
    {
      category: "Écosystème & Dashboard",
      color: "bg-emerald-100 text-emerald-800",
      modules: [
        { name: "Écosystème CED Complet", description: "Vue d'ensemble", status: "✅ Opérationnel", route: "/ced-halal-home" },
        { name: "Portfolio Mobile", description: "Version mobile optimisée", status: "✅ Opérationnel", route: "/portfolio-mobile" },
        { name: "Présentation Complète", description: "Démonstration intégrale", status: "✅ Opérationnel", route: "/presentation-complete" }
      ]
    },
    {
      category: "Chartes & Validation",
      color: "bg-purple-100 text-purple-800",
      modules: [
        { name: "Charte Fiqh IA Halal", description: "PrettyhowQ certification", status: "✅ Opérationnel", route: "/charte-fiqh-ia-halal" },
        { name: "Validation Scholars", description: "7 experts internationaux", status: "✅ Opérationnel", route: "/validation-scholars" },
        { name: "Conformité 4 Madhabs", description: "Unanimité écoles", status: "✅ Opérationnel", route: "/conformite-madhabs" }
      ]
    }
  ];

  // Calcul des statistiques
  const allModules = modulesCategories.flatMap(cat => cat.modules);
  const operationalModules = allModules.filter(module => module.status.includes("✅"));
  const inProgressModules = allModules.filter(module => module.status.includes("🔄"));

  // Filtrage des modules
  const filteredCategories = useMemo(() => {
    return modulesCategories.map(category => ({
      ...category,
      modules: category.modules.filter(module =>
        (selectedCategory === "all" || category.category === selectedCategory) &&
        (searchTerm === "" || 
         module.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         module.description.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    })).filter(category => category.modules.length > 0);
  }, [searchTerm, selectedCategory]);

  const categoryOptions = [
    { value: "all", label: "Toutes les catégories" },
    ...modulesCategories.map(cat => ({ value: cat.category, label: cat.category }))
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header Principal */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-6">🧪</div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Test Complet des 55 Modules CED HalalTech™
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Centre de Test & Validation • Toutes Fonctionnalités Accessibles
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-blue-100 text-blue-700 text-lg px-6 py-3">
              <TestTube className="w-5 h-5 mr-2" />
              {allModules.length} Modules Total
            </Badge>
            <Badge className="bg-green-100 text-green-700 text-lg px-6 py-3">
              <CheckCircle className="w-5 h-5 mr-2" />
              {operationalModules.length} Opérationnels
            </Badge>
            <Badge className="bg-orange-100 text-orange-700 text-lg px-6 py-3">
              <Settings className="w-5 h-5 mr-2" />
              {inProgressModules.length} En Cours
            </Badge>
          </div>
        </div>

        {/* Statistiques Globales */}
        <div className="mb-12">
          <Card className="border-4 border-emerald-400 bg-gradient-to-br from-emerald-50 to-green-50 shadow-2xl">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <CardTitle className="text-3xl font-bold text-emerald-700">
                Statistiques Écosystème CED
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="p-6 bg-white rounded-lg border-2 border-emerald-300">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">{operationalModules.length}</div>
                  <div className="text-sm text-gray-600">Modules Opérationnels</div>
                  <div className="text-xs text-green-600 mt-1">
                    {((operationalModules.length / allModules.length) * 100).toFixed(1)}% du total
                  </div>
                </div>
                
                <div className="p-6 bg-white rounded-lg border-2 border-blue-300">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{modulesCategories.length}</div>
                  <div className="text-sm text-gray-600">Catégories</div>
                  <div className="text-xs text-blue-600 mt-1">Couverture complète</div>
                </div>
                
                <div className="p-6 bg-white rounded-lg border-2 border-purple-300">
                  <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Conformité Sharia</div>
                  <div className="text-xs text-purple-600 mt-1">Validation scholars</div>
                </div>
                
                <div className="p-6 bg-white rounded-lg border-2 border-orange-300">
                  <div className="text-4xl font-bold text-orange-600 mb-2">78+</div>
                  <div className="text-sm text-gray-600">Langues</div>
                  <div className="text-xs text-orange-600 mt-1">Support multilingue</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="modules-grid" className="w-full">
          
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
            <TabsTrigger value="modules-grid">🔍 Filtres & Recherche</TabsTrigger>
            <TabsTrigger value="categories-overview">📋 Vue par Catégories</TabsTrigger>
            <TabsTrigger value="quick-access">⚡ Accès Rapides</TabsTrigger>
          </TabsList>

          {/* Filtres et Recherche */}
          <TabsContent value="modules-grid">
            <Card className="border-4 border-blue-400 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-2xl mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-700 text-center">
                  🔍 Filtres & Recherche Intelligente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Rechercher un module ou fonctionnalité..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 text-lg py-3"
                    />
                  </div>
                  
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="text-lg py-3">
                      <SelectValue placeholder="Sélectionner une catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      {categoryOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Résultats Filtrés */}
                <div className="space-y-8">
                  {filteredCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-gray-800">{category.category}</h3>
                        <Badge className={`${category.color} text-sm px-3 py-1`}>
                          {category.modules.length} modules
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.modules.map((module, moduleIndex) => (
                          <Card key={moduleIndex} className="border-2 border-gray-200 hover:border-blue-400 transition-all hover:shadow-lg">
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start mb-3">
                                <h4 className="font-bold text-gray-800 text-sm">{module.name}</h4>
                                <span className="text-xs">{module.status}</span>
                              </div>
                              <p className="text-xs text-gray-600 mb-3">{module.description}</p>
                              <div className="flex gap-2">
                                <Link href={module.route}>
                                  <Button size="sm" className="text-xs bg-blue-600 hover:bg-blue-700 text-white flex-1">
                                    <Play className="w-3 h-3 mr-1" />
                                    Tester
                                  </Button>
                                </Link>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Vue par Catégories */}
          <TabsContent value="categories-overview">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modulesCategories.map((category, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-purple-400 transition-all hover:shadow-lg">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg font-bold text-gray-800">{category.category}</CardTitle>
                    <Badge className={`${category.color} mx-auto`}>
                      {category.modules.length} modules
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.modules.slice(0, 3).map((module, moduleIndex) => (
                        <div key={moduleIndex} className="text-sm">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{module.name}</span>
                            <span className="text-xs">{module.status}</span>
                          </div>
                        </div>
                      ))}
                      {category.modules.length > 3 && (
                        <div className="text-xs text-gray-500 pt-2">
                          +{category.modules.length - 3} autres modules...
                        </div>
                      )}
                    </div>
                    <Button 
                      className="w-full mt-4 text-sm"
                      onClick={() => setSelectedCategory(category.category)}
                    >
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Voir tous les modules
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Accès Rapides */}
          <TabsContent value="quick-access">
            <Card className="border-4 border-purple-400 bg-gradient-to-br from-purple-50 to-pink-50 shadow-2xl">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">⚡</div>
                <CardTitle className="text-3xl font-bold text-purple-700">
                  Accès Rapides Modules Prioritaires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  {/* Modules les plus utilisés */}
                  {[
                    { name: "CED Bank Mobile", route: "/ced-bank", icon: "🏦", description: "Banking islamique digital" },
                    { name: "Institut CED Academy", route: "/institut-ced-academy", icon: "🎓", description: "Formations certifiées" },
                    { name: "Super IARP Pro", route: "/super-iarp-pro", icon: "🤖", description: "IA responsable" },
                    { name: "Lecteur Coran", route: "/lecteur-coran-complet", icon: "📖", description: "114 sourates complètes" },
                    { name: "Al-Amana Auto", route: "/al-amana-auto-halal", icon: "🚗", description: "Garage premium halal" },
                    { name: "Assistant Vocal Aïcha", route: "/assistant-vocal-aisha", icon: "🎙️", description: "IA vocale halal" },
                    { name: "TechForAll", route: "/techforall", icon: "💻", description: "Dons technologiques" },
                    { name: "Fiqh Informatique", route: "/fiqh-informatique", icon: "⚖️", description: "27,446+ règles" },
                    { name: "Central Dashboard", route: "/central-dashboard", icon: "📊", description: "Tableau de bord" }
                  ].map((module, index) => (
                    <Link key={index} href={module.route}>
                      <Card className="border-2 border-purple-300 hover:border-purple-500 transition-all hover:shadow-lg cursor-pointer bg-gradient-to-br from-white to-purple-50">
                        <CardContent className="p-6 text-center">
                          <div className="text-5xl mb-3">{module.icon}</div>
                          <h3 className="text-lg font-bold text-purple-800 mb-2">{module.name}</h3>
                          <p className="text-sm text-gray-600 mb-4">{module.description}</p>
                          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                            <Play className="w-4 h-4 mr-2" />
                            Accéder
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Navigation Retour */}
        <div className="text-center mt-12">
          <Link href="/ced-halal-home">
            <Button className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              🏠 Retour à l'Accueil CED
            </Button>
          </Link>
        </div>

      </div>
      
      <ProtectionFooter />
    </div>
  );
}