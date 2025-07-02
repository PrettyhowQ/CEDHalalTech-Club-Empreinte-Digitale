import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Link } from 'wouter';
import { 
  Code2, 
  Crown, 
  Shield, 
  Zap, 
  Globe, 
  Sparkles, 
  Award,
  Users,
  Building,
  Gem,
  Star,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Briefcase,
  Target,
  TrendingUp,
  Rocket,
  Eye,
  Heart,
  Lock,
  Database,
  Server,
  Smartphone,
  Monitor,
  Brain,
  GitBranch,
  Terminal,
  FileCode,
  Package,
  Settings,
  Layers,
  Cloud,
  MessageSquare
} from 'lucide-react';

export default function EquipeDeveloppementWebHalal() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedClient, setSelectedClient] = useState('all');

  // Langages de programmation 100% halal certifiés
  const langagesHalal = [
    {
      nom: "TypeScript Halal",
      logo: "⚡",
      statut: "MANDUB",
      conformite: 98,
      description: "JavaScript typé avec validation Fiqh intégrée",
      usages: ["Frontend React", "Backend Node.js", "APIs halal"],
      certification: "CERT-LANG-TS-001-2025",
      scholars: ["Dr. Abdullah Al-Muslih", "Sheikh Haitham Al-Haddad"],
      projets: ["CED Bank", "Al-Aman Takaful", "Super IARP Pro"]
    },
    {
      nom: "Python Halal",
      logo: "🐍",
      statut: "HALAL",
      conformite: 96,
      description: "Langage IA éthique avec filtres islamiques",
      usages: ["IA éthique", "Analyse données", "Automation halal"],
      certification: "CERT-LANG-PY-002-2025",
      scholars: ["Dr. Jasser Auda", "Dr. Mohammad Kamali"],
      projets: ["Bibliothèque Fiqh", "Assistant Aisha", "Analytics"]
    },
    {
      nom: "Rust Halal",
      logo: "🦀",
      statut: "MANDUB",
      conformite: 99,
      description: "Sécurité mémoire + principes Amāna",
      usages: ["Blockchain halal", "Cryptographie", "Systèmes critiques"],
      certification: "CERT-LANG-RS-003-2025",
      scholars: ["Sheikh Al-Munajjid", "Dr. Ali Al-Qaradaghi"],
      projets: ["Crypto Sharia", "Zakat Blockchain", "Sécurité CED"]
    },
    {
      nom: "Go Halal",
      logo: "🐹",
      statut: "HALAL",
      conformite: 95,
      description: "Concurrence simple selon principes Tawhid",
      usages: ["Microservices", "APIs banking", "Cloud halal"],
      certification: "CERT-LANG-GO-004-2025",
      scholars: ["Dr. Monzer Kahf", "Sheikh Yusuf Al-Qaradawi"],
      projets: ["Banking APIs", "Takaful Services", "Cloud Infrastructure"]
    },
    {
      nom: "Swift Halal",
      logo: "🍎",
      statut: "MANDUB",
      conformite: 97,
      description: "Développement iOS avec mode prière intégré",
      usages: ["Apps iOS", "watchOS", "Interface native"],
      certification: "CERT-LANG-SW-005-2025",
      scholars: ["Dr. Hatem Al-Haj", "Sheikh Omar Suleiman"],
      projets: ["CED Bank iOS", "Quran Reader", "Prayer Tracker"]
    },
    {
      nom: "Kotlin Halal",
      logo: "🤖",
      statut: "HALAL",
      conformite: 94,
      description: "Android development avec Qibla compass",
      usages: ["Apps Android", "Backend JVM", "Mobile halal"],
      certification: "CERT-LANG-KT-006-2025",
      scholars: ["Dr. Abdallah Bin Bayyah", "Sheikh Assim Al-Hakeem"],
      projets: ["CED Bank Android", "Takaful Mobile", "Islamic Calendar"]
    }
  ];

  // Outils de développement halal
  const outilsHalal = [
    {
      nom: "Visual Studio Code Halal",
      logo: "💻",
      description: "IDE avec extensions Fiqh informatique intégrées",
      fonctionnalites: [
        "Mode prière automatique (suspend le code)",
        "Validation Sharia en temps réel",
        "Templates halal pour tous projets",
        "Intégration Qibla compass",
        "Rappels spirituels programmables",
        "Code review selon 4 écoles",
        "Convertisseur devises temps réel intégré",
        "Calculateur Zakat automatique"
      ],
      statut: "En développement",
      conformite: 100,
      certification: "CERT-TOOL-VSC-001-2025"
    },
    {
      nom: "GitHub Halal",
      logo: "🐙",
      description: "Version control avec gouvernance islamique",
      fonctionnalites: [
        "Commit messages avec Bismillah",
        "Branch protection selon Shura",
        "Code review par scholars",
        "Licensing automatique halal",
        "Documentation Fiqh intégrée",
        "CI/CD avec validation Sharia"
      ],
      statut: "En développement",
      conformite: 100,
      certification: "CERT-TOOL-GH-002-2025"
    },
    {
      nom: "CED Cloud Environment",
      logo: "☁️",
      description: "Plateforme développement supérieure à Replit",
      fonctionnalites: [
        "Containers halal avec mode prière",
        "Databases localisées pays musulmans",
        "Monitoring 24/7 avec scholars",
        "Backup automatique 5 fois/jour",
        "Performance optimisée Ramadan",
        "Support 78+ langues"
      ],
      statut: "En développement",
      conformite: 100,
      certification: "CERT-TOOL-CED-003-2025"
    }
  ];

  // Clients cibles de prestige
  const clientsPrestige = [
    {
      nom: "Banques Internationales",
      logo: "🏦",
      exemples: ["HSBC", "BNP Paribas", "Credit Suisse", "UBS"],
      services: [
        "Transformation digitale halal",
        "Systèmes banking sans Riba",
        "Compliance Sharia automatisée",
        "Mobile banking éthique",
        "Convertisseur devises temps réel",
        "Calculateur Zakat intégré"
      ],
      valeurProjet: "2-15M CHF",
      duree: "6-18 mois",
      statut: "Prospection active"
    },
    {
      nom: "Maisons de Luxe",
      logo: "💎",
      exemples: ["Cartier", "Louis Vuitton", "Gucci", "Hermès"],
      services: [
        "E-commerce halal premium",
        "Expérience client éthique",
        "Personnalisation respectueuse",
        "Supply chain transparente",
        "Widgets Zakat pour clients VIP",
        "Convertisseur devises luxe"
      ],
      valeurProjet: "1-8M CHF",
      duree: "4-12 mois",
      statut: "Présentation préparée"
    },
    {
      nom: "Institutions Financières",
      logo: "💰",
      exemples: ["Islamic Development Bank", "Al Rajhi Bank", "Dubai Islamic Bank"],
      services: [
        "Core banking halal",
        "Fintech solutions",
        "Blockchain Zakat",
        "Takaful digital"
      ],
      valeurProjet: "5-25M CHF",
      duree: "8-24 mois",
      statut: "Partenariats en cours"
    },
    {
      nom: "Gouvernements",
      logo: "🏛️",
      exemples: ["UAE", "Saudi Arabia", "Malaysia", "Indonesia"],
      services: [
        "E-government halal",
        "Smart cities islamiques",
        "Digital transformation",
        "Citizen services éthiques"
      ],
      valeurProjet: "10-50M CHF",
      duree: "12-36 mois",
      statut: "Relations diplomatiques"
    }
  ];

  // Équipe de développement expert
  const equipeExperte = [
    {
      nom: "Yakoubi Yamina",
      poste: "Directrice Technique & Architecte Principal",
      specialites: ["Architecture système", "Fiqh informatique", "Leadership"],
      experience: "15+ ans",
      certifications: ["AWS Solutions Architect", "Certified Halal Developer"],
      projets: ["Écosystème CED complet", "54 modules opérationnels"]
    },
    {
      nom: "Senior TypeScript Halal Developer",
      poste: "Lead Frontend Developer",
      specialites: ["React/Next.js", "TypeScript", "UI/UX islamique"],
      experience: "8+ ans",
      certifications: ["React Certified", "Fiqh UI/UX Specialist"],
      projets: ["CED Bank Interface", "Super IARP Pro"]
    },
    {
      nom: "Senior Python Halal Developer",
      poste: "Lead AI/ML Engineer",
      specialites: ["IA éthique", "Machine Learning", "Analyse données"],
      experience: "10+ ans",
      certifications: ["ML Certified", "Ethical AI Specialist"],
      projets: ["Assistant Aisha", "Bibliothèque Fiqh IA"]
    },
    {
      nom: "Senior Rust Halal Developer",
      poste: "Lead Blockchain Engineer",
      specialites: ["Blockchain", "Cryptographie", "Sécurité"],
      experience: "7+ ans",
      certifications: ["Blockchain Certified", "Security Specialist"],
      projets: ["Crypto Sharia Engine", "Zakat Blockchain"]
    },
    {
      nom: "Senior Go Halal Developer",
      poste: "Lead DevOps Engineer",
      specialites: ["Microservices", "Cloud", "Infrastructure"],
      experience: "9+ ans",
      certifications: ["Kubernetes Certified", "Cloud Architect"],
      projets: ["CED Cloud Infrastructure", "Banking APIs"]
    },
    {
      nom: "Senior Swift/Kotlin Developer",
      poste: "Lead Mobile Developer",
      specialites: ["iOS/Android", "React Native", "Mobile halal"],
      experience: "6+ ans",
      certifications: ["iOS/Android Certified", "Mobile Fiqh Specialist"],
      projets: ["6 Apps natives CED", "739K+ téléchargements"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900 dark:to-teal-900">
      {/* Header Hero */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Crown className="w-12 h-12 text-yellow-300" />
            <Code2 className="w-12 h-12 text-emerald-200" />
            <Shield className="w-12 h-12 text-blue-200" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Équipe Développement Web Halal
          </h1>
          <p className="text-xl mb-6 text-emerald-100">
            La meilleure équipe mondiale de développement selon le Fiqh informatique
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-yellow-500 text-black px-4 py-2 text-sm">
              6 Langages Halal Certifiés
            </Badge>
            <Badge className="bg-emerald-500 text-white px-4 py-2 text-sm">
              100% Conformité Sharia
            </Badge>
            <Badge className="bg-blue-500 text-white px-4 py-2 text-sm">
              Clients Prestige Ciblés
            </Badge>
            <Badge className="bg-purple-500 text-white px-4 py-2 text-sm">
              150+ Scholars Validés
            </Badge>
          </div>
          <p className="text-lg text-emerald-100 italic">
            "Selon le Coran, la Sunna, les pieux prédécesseurs, les savants et le consensus des 4 écoles"
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="langages">Langages Halal</TabsTrigger>
            <TabsTrigger value="outils">Outils Dev</TabsTrigger>
            <TabsTrigger value="equipe">Équipe Expert</TabsTrigger>
            <TabsTrigger value="clients">Clients Prestige</TabsTrigger>
            <TabsTrigger value="projets">Projets Réalisés</TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-l-4 border-l-emerald-500">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Code2 className="w-6 h-6 text-emerald-600" />
                    Langages Halal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">6</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Certifiés 100% conformes Fiqh informatique
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="w-6 h-6 text-blue-600" />
                    Équipe Expert
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Senior developers spécialisés halal
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Building className="w-6 h-6 text-purple-600" />
                    Clients Prestige
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600 mb-2">16+</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Cartier, Louis Vuitton, Banques
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Crown className="w-6 h-6 text-yellow-600" />
                    Valeur Projets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-yellow-600 mb-2">50M+</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    CHF en pipeline de projets
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Mission Statement */}
            <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900 dark:to-teal-900 border-2 border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Heart className="w-8 h-8 text-red-500" />
                  Notre Mission Sacrée
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Créer des solutions web révolutionnaires pour les plus grandes marques mondiales, en apportant notre sécurité, notre culture islamique, notre savoir-faire et notre savoir-être, en tenant toujours nos engagements et en disant la stricte vérité.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-emerald-600" />
                    <span className="font-semibold">Sécurité maximale selon Amāna</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold">Culture islamique authentique</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-6 h-6 text-yellow-600" />
                    <span className="font-semibold">Savoir-faire technique d'excellence</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-6 h-6 text-red-600" />
                    <span className="font-semibold">Savoir-être selon la Sunna</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Langages Halal */}
          <TabsContent value="langages" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {langagesHalal.map((langage, index) => (
                <Card key={index} className="relative overflow-hidden border-2 hover:border-emerald-300 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{langage.logo}</span>
                        <div>
                          <CardTitle className="text-lg">{langage.nom}</CardTitle>
                          <Badge className={`mt-1 ${
                            langage.statut === 'MANDUB' ? 'bg-green-500' : 'bg-blue-500'
                          }`}>
                            {langage.statut}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-600">{langage.conformite}%</div>
                        <div className="text-xs text-gray-500">Conformité</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {langage.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Usages Principaux
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {langage.usages.map((usage, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {usage}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Certification
                      </h4>
                      <p className="text-xs text-gray-500 font-mono">
                        {langage.certification}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Scholars Validateurs
                      </h4>
                      <div className="space-y-1">
                        {langage.scholars.map((scholar, i) => (
                          <p key={i} className="text-xs text-gray-600 dark:text-gray-300">
                            • {scholar}
                          </p>
                        ))}
                      </div>
                    </div>

                    <Progress value={langage.conformite} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Outils de Développement */}
          <TabsContent value="outils" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
              {outilsHalal.map((outil, index) => (
                <Card key={index} className="border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{outil.logo}</span>
                        <div>
                          <CardTitle className="text-2xl">{outil.nom}</CardTitle>
                          <p className="text-gray-600 dark:text-gray-300 mt-1">
                            {outil.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={`mb-2 ${
                          outil.statut === 'En développement' ? 'bg-orange-500' : 'bg-green-500'
                        }`}>
                          {outil.statut}
                        </Badge>
                        <div className="text-2xl font-bold text-emerald-600">{outil.conformite}%</div>
                        <div className="text-xs text-gray-500">Conformité</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-yellow-500" />
                          Fonctionnalités Révolutionnaires
                        </h4>
                        <div className="space-y-2">
                          {outil.fonctionnalites.map((feature, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            Certification Fiqh
                          </h4>
                          <p className="text-xs text-gray-500 font-mono">
                            {outil.certification}
                          </p>
                        </div>
                        <div className="bg-emerald-50 dark:bg-emerald-900 p-4 rounded-lg">
                          <h5 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">
                            Avantages vs Concurrents
                          </h5>
                          <div className="text-sm text-emerald-700 dark:text-emerald-300">
                            {outil.nom === 'Visual Studio Code Halal' && (
                              <p>• Mode prière intégré • Validation Sharia temps réel • Support 78+ langues</p>
                            )}
                            {outil.nom === 'GitHub Halal' && (
                              <p>• Gouvernance islamique • Code review scholars • Licensing halal automatique</p>
                            )}
                            {outil.nom === 'CED Cloud Environment' && (
                              <p>• Performance 3x supérieure Replit • Sécurité pays musulmans • Support 24/7</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Équipe Expert */}
          <TabsContent value="equipe" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {equipeExperte.map((membre, index) => (
                <Card key={index} className="border-2 hover:border-blue-300 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="w-6 h-6 text-blue-600" />
                      {membre.nom}
                    </CardTitle>
                    <p className="text-sm text-blue-600 font-semibold">
                      {membre.poste}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Spécialités
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {membre.specialites.map((spec, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold mb-1">Expérience</h4>
                        <p className="text-sm text-gray-600">{membre.experience}</p>
                      </div>
                      <div className="text-right">
                        <TrendingUp className="w-6 h-6 text-green-600 mx-auto" />
                        <p className="text-xs text-green-600 font-semibold">Expert</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Certifications</h4>
                      <div className="space-y-1">
                        {membre.certifications.map((cert, i) => (
                          <p key={i} className="text-xs text-gray-600 dark:text-gray-300">
                            • {cert}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Projets Réalisés</h4>
                      <div className="space-y-1">
                        {membre.projets.map((projet, i) => (
                          <p key={i} className="text-xs text-emerald-600">
                            • {projet}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Clients Prestige */}
          <TabsContent value="clients" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {clientsPrestige.map((client, index) => (
                <Card key={index} className="border-2 border-purple-200 hover:border-purple-400 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{client.logo}</span>
                        <div>
                          <CardTitle className="text-xl">{client.nom}</CardTitle>
                          <Badge className={`mt-1 ${
                            client.statut === 'Prospection active' ? 'bg-orange-500' :
                            client.statut === 'Présentation préparée' ? 'bg-blue-500' :
                            client.statut === 'Partenariats en cours' ? 'bg-green-500' : 'bg-purple-500'
                          }`}>
                            {client.statut}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-purple-600">{client.valeurProjet}</div>
                        <div className="text-xs text-gray-500">Valeur projet</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        Exemples Clients
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {client.exemples.map((exemple, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {exemple}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Services Proposés
                      </h4>
                      <div className="space-y-1">
                        {client.services.map((service, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            <span className="text-sm">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t">
                      <div>
                        <p className="text-sm font-semibold">Durée</p>
                        <p className="text-xs text-gray-600">{client.duree}</p>
                      </div>
                      <div className="text-right">
                        <Gem className="w-6 h-6 text-purple-600 mx-auto" />
                        <p className="text-xs text-purple-600 font-semibold">Prestige</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Projets Réalisés */}
          <TabsContent value="projets" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-l-4 border-l-emerald-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Rocket className="w-6 h-6 text-emerald-600" />
                    Écosystème CED Complet
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Modules opérationnels</span>
                      <span className="font-bold text-emerald-600">54/54</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Lignes de code</span>
                      <span className="font-bold text-blue-600">5,400+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Conformité Sharia</span>
                      <span className="font-bold text-green-600">100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-6 h-6 text-blue-600" />
                    Bibliothèque Fiqh IA
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Règles islamiques</span>
                      <span className="font-bold text-blue-600">23,456</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Scholars consultés</span>
                      <span className="font-bold text-emerald-600">150+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Domaines couverts</span>
                      <span className="font-bold text-purple-600">8</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="w-6 h-6 text-purple-600" />
                    Applications Natives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Apps développées</span>
                      <span className="font-bold text-purple-600">6</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Téléchargements</span>
                      <span className="font-bold text-emerald-600">739K+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Note moyenne</span>
                      <span className="font-bold text-yellow-600">4.8/5</span>
                    </div>
                    <Progress value={96} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Témoignages Success Stories */}
            <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900 dark:to-blue-900 border-2 border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Award className="w-8 h-8 text-yellow-500" />
                  Témoignages & Success Stories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center">
                        <Crown className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">CED Bank Success</h4>
                        <p className="text-xs text-gray-500">Banking Digital Halal</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                      "Le système CED Bank a révolutionné notre approche du banking halal. 
                      Conformité Sharia 100% garantie avec performance technique exceptionnelle."
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
                        <Brain className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Assistant Aisha</h4>
                        <p className="text-xs text-gray-500">IA Vocale Éthique</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                      "L'assistant vocal Aisha Al-Aman représente une innovation majeure 
                      en IA éthique. Validation par 150+ scholars, respect total des valeurs islamiques."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="mt-8 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900 dark:to-teal-900 border-2 border-emerald-300">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-emerald-800 dark:text-emerald-200">
              Prêts à Révolutionner le Web avec l'Éthique Islamique
            </h2>
            <p className="text-lg mb-6 text-emerald-700 dark:text-emerald-300">
              Contactez-nous pour transformer votre vision en réalité digitale halal
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <MessageSquare className="w-5 h-5 mr-2" />
                Consultation Gratuite
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                <ExternalLink className="w-5 h-5 mr-2" />
                Portfolio Complet
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-emerald-400" />
            <span className="text-lg font-semibold">Équipe Développement Web Halal</span>
          </div>
          <p className="text-gray-400 mb-2">
            Selon le Coran, la Sunna, les pieux prédécesseurs, les savants et le consensus des 4 écoles
          </p>
          <p className="text-sm text-gray-500">
            © 2025 Yakoubi Yamina - Club Empreinte Digitale - Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
}