import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Link } from 'wouter';
import { 
  Search,
  BookOpen,
  Headphones,
  Building,
  Calculator,
  Shield,
  Globe,
  Brain,
  CreditCard,
  GraduationCap,
  Heart,
  Scale,
  Truck,
  MapPin,
  Users,
  Settings,
  FileText,
  Database,
  Smartphone,
  Eye,
  ExternalLink,
  CheckCircle,
  Star,
  Zap,
  Clock,
  TrendingUp,
  Car,
  Award
} from 'lucide-react';

export default function Localisation52Modules() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('tous');

  const modules52 = [
    // 🎵 CORAN AUDIO - Module Principal
    {
      id: 1,
      nom: "🎵 Lecteur Coran Audio",
      path: "/lecteur-coran",
      fichier: "client/src/components/SimpleCoran.tsx",
      description: "8 récitateurs renommés avec audio fonctionnel",
      contenu: "Al-Ghamdi, As-Sudais, Al-Ajami, Maher Al-Muaiqly, etc.",
      category: "spirituel",
      status: "✅ Opérationnel",
      icon: Headphones,
      color: "bg-green-100 text-green-800"
    },
    
    // 🏦 BANKING & FINANCE (Modules 2-15)
    {
      id: 2,
      nom: "🏦 CED Bank Mobile",
      path: "/ced-bank",
      fichier: "client/src/pages/CEDBankPage.tsx",
      description: "Banking digital halal 0% Riba",
      contenu: "5 cartes, multi-devises CHF/AED/USD/EUR",
      category: "finance",
      status: "✅ Opérationnel",
      icon: CreditCard,
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 3,
      nom: "🛡️ Al-Aman Takaful",
      path: "/al-aman-takaful",
      fichier: "client/src/pages/AlAmanTakafulPage.tsx",
      description: "Assurance islamique famille",
      contenu: "55M CHF couverture famille Yakoubi",
      category: "finance",
      status: "✅ Opérationnel",
      icon: Shield,
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: 4,
      nom: "📊 Comptabilité Islamique",
      path: "/comptabilite-islamique",
      fichier: "client/src/pages/ComptabiliteIslamique.tsx",
      description: "Système comptable halal complet",
      contenu: "19.24M CHF patrimoine, 481K CHF Zakat",
      category: "finance",
      status: "✅ Opérationnel",
      icon: Calculator,
      color: "bg-emerald-100 text-emerald-800"
    },
    {
      id: 5,
      nom: "🏠 Immobilier Islamique",
      path: "/immobilier-islamique",
      fichier: "client/src/pages/ImmobilierIslamique.tsx",
      description: "Gestion propriétés halal",
      contenu: "Villa Genève 3.2M CHF, orientation Qibla",
      category: "finance",
      status: "✅ Opérationnel",
      icon: Building,
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      id: 6,
      nom: "⚖️ Conseil Sharia",
      path: "/conseil-sharia",
      fichier: "client/src/pages/ConseilSharia.tsx",
      description: "Validation religieuse AAOIFI",
      contenu: "150+ scholars, 4 madhabs validés",
      category: "finance",
      status: "✅ Opérationnel",
      icon: Scale,
      color: "bg-yellow-100 text-yellow-800"
    },
    
    // 🎓 ÉDUCATION (Modules 7-20)
    {
      id: 7,
      nom: "🎓 Institut CED Academy",
      path: "/institut-ced-academy",
      fichier: "client/src/pages/InstitutCEDAcademy.tsx",
      description: "Plateforme éducative mondiale",
      contenu: "34,522 étudiants, 67 pays, 78 langues",
      category: "education",
      status: "✅ Opérationnel",
      icon: GraduationCap,
      color: "bg-cyan-100 text-cyan-800"
    },
    {
      id: 8,
      nom: "🤖 Super IARP Pro",
      path: "/super-iarp-pro",
      fichier: "client/src/pages/SuperIARPPro.tsx",
      description: "IA responsable PrettyhowQ",
      contenu: "78+ langues, Claude 4.0, GPT-4o intégrés",
      category: "education",
      status: "✅ Opérationnel",
      icon: Brain,
      color: "bg-pink-100 text-pink-800"
    },
    {
      id: 9,
      nom: "📖 Manuel Fiqh Informatique",
      path: "/manuel-fiqh",
      fichier: "client/src/pages/ManuelFiqhInformatique.tsx",
      description: "Guide officiel tech halal",
      contenu: "50+ pages, 12 chapitres, 12.8M+ étudiants",
      category: "education",
      status: "✅ Opérationnel",
      icon: BookOpen,
      color: "bg-orange-100 text-orange-800"
    },
    {
      id: 10,
      nom: "🌍 Traducteur Multilingue",
      path: "/traducteur-multilingue",
      fichier: "client/src/pages/TraducteurMultilingue.tsx",
      description: "Traduction arabe 23+ langues",
      contenu: "Support RTL, phrases islamiques",
      category: "education",
      status: "✅ Opérationnel",
      icon: Globe,
      color: "bg-red-100 text-red-800"
    },
    {
      id: 11,
      nom: "💜 Motivation Spirituelle",
      path: "/motivation-spirituelle",
      fichier: "client/src/pages/MotivationSpirituelleApp.tsx",
      description: "Micro-interactions divines multilingues",
      contenu: "Dhikr authentiques, 8 langues, humeurs spirituelles",
      category: "education",
      status: "✅ Opérationnel",
      icon: Heart,
      color: "bg-purple-100 text-purple-800"
    },
    
    // 🏥 SANTÉ & BIEN-ÊTRE (Modules 12-16)
    {
      id: 12,
      nom: "🏥 Espace Santé Souheila",
      path: "/sante-souheila",
      fichier: "client/src/pages/EspaceSanteSouheila.tsx",
      description: "Services médicaux halal",
      contenu: "Médecine prophétique, consultation",
      category: "sante",
      status: "✅ Opérationnel",
      icon: Heart,
      color: "bg-rose-100 text-rose-800"
    },
    
    // ⚖️ JURIDIQUE (Modules 17-21)
    {
      id: 13,
      nom: "⚖️ Juridique Hanaé-Denise",
      path: "/juridique-hanae",
      fichier: "client/src/pages/JuridiqueHanae.tsx",
      description: "Services juridiques conformes",
      contenu: "Contrats halal, succession islamique",
      category: "juridique",
      status: "✅ Opérationnel",
      icon: Scale,
      color: "bg-amber-100 text-amber-800"
    },
    
    // 🚛 LOGISTIQUE (Modules 22-26)
    {
      id: 14,
      nom: "🚛 TechForAll Donation",
      path: "/techforall",
      fichier: "client/src/pages/TechForAll.tsx",
      description: "Économie solidaire technologie",
      contenu: "Dons matériel, construction écologique",
      category: "logistique",
      status: "✅ Opérationnel",
      icon: Truck,
      color: "bg-lime-100 text-lime-800"
    },
    
    // 📱 APPLICATIONS NATIVES (Modules 27-36)
    {
      id: 15,
      nom: "📱 Apps Natives Mobiles",
      path: "/apps-natives",
      fichier: "client/src/pages/MobileNativeApps.tsx",
      description: "6 applications iOS/Android",
      contenu: "739K+ téléchargements, note 4.8/5",
      category: "mobile",
      status: "✅ Opérationnel",
      icon: Smartphone,
      color: "bg-violet-100 text-violet-800"
    },
    
    // 🔧 ADMINISTRATION (Modules 37-46)
    {
      id: 16,
      nom: "👥 RH Management",
      path: "/rh-management",
      fichier: "client/src/pages/HRManagement.tsx",
      description: "Gestion équipe complète",
      contenu: "6 personnes, 542K CHF paie mensuelle",
      category: "admin",
      status: "✅ Opérationnel",
      icon: Users,
      color: "bg-teal-100 text-teal-800"
    },
    
    // 🌐 ÉCOSYSTÈME GLOBAL (Modules 47-53)
    {
      id: 17,
      nom: "🌐 Écosystème Pôles Halal",
      path: "/ecosysteme-poles-halal",
      fichier: "client/src/pages/EcosystemePolesHalal.tsx",
      description: "Interconnexion tous services",
      contenu: "7 pôles, API unifiée, WebTV",
      category: "ecosystem",
      status: "✅ Opérationnel",
      icon: Globe,
      color: "bg-slate-100 text-slate-800"
    },

    // MODULES 17-32 : SPIRITUALITÉ & FIQH
    {
      id: 17,
      nom: "📺 WebTV PrettyhowQ",
      path: "/webtv-prettyhowq",
      description: "Chaîne YouTube automatisée",
      contenu: "250K+ abonnés, contenu tech-éthique",
      category: "media",
      status: "🔄 En cours",
      icon: Eye,
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: 18,
      nom: "☁️ Cloud Halal 100%",
      path: "/cloud-halal",
      description: "Infrastructure 100% conforme",
      contenu: "Data centers La Mecque, Médine, Dubaï",
      category: "tech",
      status: "🔄 En cours",
      icon: Database,
      color: "bg-green-50 text-green-600"
    },
    {
      id: 19,
      nom: "🕌 Mode Prière Automatique",
      path: "/mode-priere",
      description: "Suspension activités 5 prières",
      contenu: "GPS satellitaire, calendrier islamique",
      category: "spirituel",
      status: "✅ Opérationnel",
      icon: MapPin,
      color: "bg-green-100 text-green-800"
    },
    {
      id: 20,
      nom: "📊 Analytics IA Avancées",
      path: "/analytics-ia",
      description: "Métriques performances temps réel",
      contenu: "UX score 94/100, optimisations",
      category: "tech",
      status: "✅ Opérationnel",
      icon: Brain,
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: 21,
      nom: "🤲 Conseil Sharia AAOIFI",
      path: "/conseil-sharia",
      description: "7 scholars résidents 24/7",
      contenu: "Dr. Al-Mahmoud, Prof. Al-Zahra, Sheikh Rashid",
      category: "spirituel",
      status: "✅ Opérationnel",
      icon: Scale,
      color: "bg-green-100 text-green-800"
    },
    {
      id: 22,
      nom: "💧 Système Purification Auto",
      path: "/purification-system",
      description: "Redistribution revenus non-conformes",
      contenu: "IA détection, 8 catégories coraniques",
      category: "spirituel",
      status: "✅ Opérationnel",
      icon: Globe,
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 23,
      nom: "🧭 Boussole Qibla GPS",
      path: "/qibla-compass",
      description: "Direction La Mecque précise",
      contenu: "GPS/GLONASS/Galileo, ±0.2m précision",
      category: "spirituel",
      status: "✅ Opérationnel",
      icon: MapPin,
      color: "bg-green-100 text-green-800"
    },
    {
      id: 24,
      nom: "📅 Calendrier Islamique",
      path: "/calendrier-islamique",
      description: "Hijri complet avec événements",
      contenu: "Ramadan, Hajj, dates importantes",
      category: "spirituel",
      status: "✅ Opérationnel",
      icon: Clock,
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: 25,
      nom: "📖 Hadith Sahih Search",
      path: "/hadith-search",
      description: "Base données Bukhari/Muslim",
      contenu: "7,563 hadiths authentiques indexés",
      category: "spirituel",
      status: "✅ Opérationnel",
      icon: BookOpen,
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      id: 26,
      nom: "🕌 Finder Mosquées Locales",
      path: "/mosquees-finder",
      description: "Localisation mosquées proximité",
      contenu: "25,000+ mosquées mondiales référencées",
      category: "spirituel",
      status: "✅ Opérationnel",
      icon: MapPin,
      color: "bg-emerald-100 text-emerald-800"
    },
    {
      id: 27,
      nom: "💎 Asma Al-Husna 99 Noms",
      path: "/asma-al-husna",
      description: "99 beaux noms Allah avec audio",
      contenu: "Significations, invocations, bienfaits",
      category: "spirituel",
      status: "✅ Opérationnel",
      icon: Star,
      color: "bg-amber-100 text-amber-800"
    },
    {
      id: 28,
      nom: "📿 Dhikr Counter Digital",
      path: "/dhikr-counter",
      description: "Compteur dhikr avec objectifs",
      contenu: "Tasbih, Tahmid, Takbir automatiques",
      category: "spirituel",
      status: "✅ Opérationnel",
      icon: Zap,
      color: "bg-green-100 text-green-800"
    },
    {
      id: 29,
      nom: "🌙 Suhur & Iftar Timer",
      path: "/ramadan-timer",
      description: "Horaires Ramadan précis",
      contenu: "Calendrier jeûne, invocations rupture",
      category: "spirituel",
      status: "✅ Opérationnel",
      icon: Clock,
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      id: 30,
      nom: "🎓 Fiqh Informatique Guide",
      path: "/fiqh-informatique",
      description: "Règles tech islamiques",
      contenu: "27,446+ règles validées 4 madhabs",
      category: "education",
      status: "✅ Opérationnel",
      icon: BookOpen,
      color: "bg-orange-100 text-orange-800"
    },
    {
      id: 31,
      nom: "🌍 Community Guidelines",
      path: "/community-fiqh",
      description: "Directives communauté islamique",
      contenu: "Modération halal, respect valeurs",
      category: "education",
      status: "✅ Opérationnel",
      icon: Users,
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: 32,
      nom: "🔐 Sécurité Bancaire 2FA",
      path: "/security-banking",
      description: "Authentification double conforme",
      contenu: "SMS halal, biométrie islamique",
      category: "tech",
      status: "✅ Opérationnel",
      icon: Shield,
      color: "bg-red-100 text-red-800"
    },

    // MODULES 33-42 : INNOVATIONS TECHNOLOGIQUES
    {
      id: 33,
      nom: "⚡ Quantum Halal Trading",
      path: "/quantum-trading",
      description: "Trading quantique Sharia",
      contenu: "Algorithmes conformes, 0% Riba",
      category: "tech",
      status: "🔄 En cours",
      icon: Zap,
      color: "bg-purple-50 text-purple-600"
    },
    {
      id: 34,
      nom: "🧠 Neural Islamic Banking",
      path: "/neural-banking",
      description: "IA spirituelle conseil financier",
      contenu: "Réseaux neuronaux conformes Fiqh",
      category: "tech",
      status: "🔄 En cours",
      icon: Brain,
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: 35,
      nom: "🕌 Metaverse Hajj",
      path: "/metaverse-hajj",
      description: "Pèlerinage virtuel immersif",
      contenu: "VR/AR La Mecque, rituels authentiques",
      category: "tech",
      status: "🔄 En cours",
      icon: Eye,
      color: "bg-green-50 text-green-600"
    },
    {
      id: 36,
      nom: "⛓️ Blockchain Zakat",
      path: "/blockchain-zakat",
      description: "Distribution transparente automatisée",
      contenu: "Smart contracts conformes Sharia",
      category: "tech",
      status: "🔄 En cours",
      icon: Database,
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      id: 37,
      nom: "🌱 Carbon Negative Banking",
      path: "/carbon-banking",
      description: "Impact environnemental positif",
      contenu: "Reforestation, énergies renouvelables",
      category: "tech",
      status: "🔄 En cours",
      icon: Globe,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      id: 38,
      nom: "🚀 Space Islamic Finance",
      path: "/space-finance",
      description: "Centre financier spatial futuriste",
      contenu: "Station orbitale halal, économie spatiale",
      category: "tech",
      status: "🔄 En cours",
      icon: Star,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      id: 39,
      nom: "🔊 Voice Banking Arabe",
      path: "/voice-banking",
      description: "Commandes vocales arabes",
      contenu: "Reconnaissance dialectes, sécurisé",
      category: "tech",
      status: "✅ Opérationnel",
      icon: Headphones,
      color: "bg-cyan-100 text-cyan-800"
    },
    {
      id: 40,
      nom: "📱 PWA Mobile Suite",
      path: "/pwa-suite",
      description: "Applications web progressives",
      contenu: "Offline-first, performance optimale",
      category: "mobile",
      status: "✅ Opérationnel",
      icon: Smartphone,
      color: "bg-violet-100 text-violet-800"
    },
    {
      id: 41,
      nom: "🌐 API Management",
      path: "/api-management",
      description: "Gestion APIs unifiée",
      contenu: "OAuth2, rate limiting, monitoring",
      category: "tech",
      status: "✅ Opérationnel",
      icon: Settings,
      color: "bg-gray-100 text-gray-800"
    },
    {
      id: 42,
      nom: "📈 Business Intelligence",
      path: "/business-intelligence",
      description: "Tableaux bord décisionnels",
      contenu: "KPIs halal, prédictions conformes",
      category: "admin",
      status: "✅ Opérationnel",
      icon: TrendingUp,
      color: "bg-blue-100 text-blue-800"
    },

    // MODULES 43-52 : SERVICES COMPLÉMENTAIRES
    {
      id: 43,
      nom: "🚗 Garages Halal Network",
      path: "/garages-halal",
      description: "Réseau garages conformes",
      contenu: "Mécanique éthique, 0% Riba financement",
      category: "logistique",
      status: "✅ Opérationnel",
      icon: Car,
      color: "bg-orange-100 text-orange-800"
    },
    {
      id: 44,
      nom: "🏪 Costa del Sol Boutique",
      path: "/costa-del-sol",
      description: "Boutique solidaire Brahim",
      contenu: "Économie circulaire, 75% avantages fiscaux",
      category: "logistique",
      status: "✅ Opérationnel",
      icon: Building,
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      id: 45,
      nom: "👨‍⚕️ Télémédecine Halal",
      path: "/telemedecine-halal",
      description: "Consultations médicales conformes",
      contenu: "Médecine prophétique, respect pudeur",
      category: "sante",
      status: "✅ Opérationnel",
      icon: Heart,
      color: "bg-rose-100 text-rose-800"
    },
    {
      id: 46,
      nom: "⚖️ Contrats Intelligents",
      path: "/smart-contracts",
      description: "Génération contrats halal",
      contenu: "Murabaha, Ijara, Musharaka automatisés",
      category: "juridique",
      status: "✅ Opérationnel",
      icon: FileText,
      color: "bg-amber-100 text-amber-800"
    },
    {
      id: 47,
      nom: "📧 Email Marketing Halal",
      path: "/email-marketing",
      description: "Campagnes conformes RGPD+Sharia",
      contenu: "Templates islamiques, opt-in éthique",
      category: "admin",
      status: "✅ Opérationnel",
      icon: Globe,
      color: "bg-green-100 text-green-800"
    },
    {
      id: 48,
      nom: "📞 Call Center Multilingue",
      path: "/call-center",
      description: "Support client 78 langues",
      contenu: "Agents formés Fiqh, disponible 24/7",
      category: "admin",
      status: "✅ Opérationnel",
      icon: Headphones,
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 49,
      nom: "🎯 CRM Halal Complet",
      path: "/crm-halal",
      description: "Gestion relation client conforme",
      contenu: "Pipeline halal, respect vie privée",
      category: "admin",
      status: "✅ Opérationnel",
      icon: Users,
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: 50,
      nom: "🔄 Système Sauvegarde",
      path: "/backup-system",
      description: "Sauvegardes automatiques sécurisées",
      contenu: "Géo-réplication, chiffrement AES-256",
      category: "tech",
      status: "✅ Opérationnel",
      icon: Database,
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      id: 51,
      nom: "📊 Monitoring Performance",
      path: "/monitoring",
      description: "Surveillance infrastructure temps réel",
      contenu: "Alertes, métriques, uptime 99.99%",
      category: "tech",
      status: "✅ Opérationnel",
      icon: Eye,
      color: "bg-red-100 text-red-800"
    },
    {
      id: 52,
      nom: "🏆 Certification Halal Hub",
      path: "/certification-hub",
      description: "Centre certification finale",
      contenu: "AAOIFI/IFSB/OIC validation complète",
      category: "admin",
      status: "✅ Opérationnel",
      icon: Award,
      color: "bg-gold-100 text-gold-800"
    }
  ];

  const categories = [
    { value: 'tous', label: 'Tous les Modules', count: modules52.length },
    { value: 'spirituel', label: 'Spirituel', count: modules52.filter(m => m.category === 'spirituel').length },
    { value: 'finance', label: 'Finance', count: modules52.filter(m => m.category === 'finance').length },
    { value: 'education', label: 'Éducation', count: modules52.filter(m => m.category === 'education').length },
    { value: 'sante', label: 'Santé', count: modules52.filter(m => m.category === 'sante').length },
    { value: 'juridique', label: 'Juridique', count: modules52.filter(m => m.category === 'juridique').length },
    { value: 'logistique', label: 'Logistique', count: modules52.filter(m => m.category === 'logistique').length },
    { value: 'mobile', label: 'Mobile', count: modules52.filter(m => m.category === 'mobile').length },
    { value: 'admin', label: 'Administration', count: modules52.filter(m => m.category === 'admin').length },
    { value: 'ecosystem', label: 'Écosystème', count: modules52.filter(m => m.category === 'ecosystem').length },
    { value: 'media', label: 'Média', count: modules52.filter(m => m.category === 'media').length },
    { value: 'tech', label: 'Tech', count: modules52.filter(m => m.category === 'tech').length }
  ];

  const filteredModules = modules52.filter(module => {
    const matchesSearch = module.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         module.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         module.contenu.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'tous' || module.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const operationalCount = modules52.filter(m => m.status.includes('✅')).length;
  const inProgressCount = modules52.filter(m => m.status.includes('🔄')).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-indigo-800 mb-4 flex items-center justify-center gap-3">
            <Zap className="h-12 w-12" />
            Les 52 Modules Empire Halal
          </h1>
          <p className="text-xl text-indigo-600 mb-2">
            🎵 <strong>Coran Audio + 51 Autres Modules</strong> 🎵
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <Badge className="bg-green-100 text-green-800">
              ✅ {operationalCount} Opérationnels
            </Badge>
            <Badge className="bg-blue-100 text-blue-800">
              🔄 {inProgressCount} En Cours
            </Badge>
            <Badge className="bg-purple-100 text-purple-800">
              🎯 {modules52.length} Total
            </Badge>
          </div>
        </div>

        {/* Recherche et Filtres */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Chercher : coran, banking, academy, takaful..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map(cat => (
                  <Button
                    key={cat.value}
                    size="sm"
                    variant={categoryFilter === cat.value ? "default" : "outline"}
                    onClick={() => setCategoryFilter(cat.value)}
                    className="text-xs"
                  >
                    {cat.label} ({cat.count})
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Module Spécial Coran Audio */}
        <Card className="mb-8 border-4 border-green-400 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <CardTitle className="text-2xl flex items-center gap-3">
              <Headphones className="h-8 w-8" />
              🎵 CORAN AUDIO - MODULE PRINCIPAL
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-3">🎵 Accès Direct:</h3>
                <Link href="/lecteur-coran">
                  <Button className="w-full h-16 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-lg">
                    <Headphones className="h-6 w-6 mr-3" />
                    Écouter le Coran Maintenant
                  </Button>
                </Link>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Link href="/simple-coran">
                    <Button variant="outline" className="w-full">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Interface Simple
                    </Button>
                  </Link>
                  <Link href="/lecteur-coran-tajweed">
                    <Button variant="outline" className="w-full">
                      <Star className="h-4 w-4 mr-2" />
                      Avec Tajweed
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-800 mb-3">📖 8 Récitateurs Authentiques:</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-white p-2 rounded border">🎵 Saad Al-Ghamdi</div>
                  <div className="bg-white p-2 rounded border">🎵 Abdul Rahman As-Sudais</div>
                  <div className="bg-white p-2 rounded border">🎵 Ahmed Al-Ajami</div>
                  <div className="bg-white p-2 rounded border">🎵 Maher Al-Muaiqly</div>
                  <div className="bg-white p-2 rounded border">🎵 Abdullah Awad Al-Juhani</div>
                  <div className="bg-white p-2 rounded border">🎵 Mishary Rashid Alafasy</div>
                  <div className="bg-white p-2 rounded border">🎵 Abu Bakr Al-Shatri</div>
                  <div className="bg-white p-2 rounded border">🎵 Ali Al-Huthaify</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grille des 52 Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => (
            <Card key={module.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <module.icon className="h-6 w-6 text-indigo-600" />
                    <div>
                      <CardTitle className="text-lg text-gray-800">{module.nom}</CardTitle>
                      <Badge className={`mt-1 ${module.color || 'bg-gray-100 text-gray-800'}`}>
                        {module.category}
                      </Badge>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    #{module.id}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">{module.description}</p>
                
                <div className="bg-gray-50 p-3 rounded-lg mb-3">
                  <p className="text-xs text-gray-500 mb-1">Contenu:</p>
                  <p className="text-sm text-gray-700">{module.contenu}</p>
                </div>

                {module.fichier && (
                  <div className="bg-blue-50 p-3 rounded-lg mb-3">
                    <p className="text-xs text-gray-500 mb-1">Fichier:</p>
                    <p className="text-xs font-mono text-blue-700 break-all">{module.fichier}</p>
                  </div>
                )}

                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">{module.status}</span>
                </div>

                <div className="flex gap-2">
                  {module.path && (
                    <Link href={module.path}>
                      <Button size="sm" className="flex-1">
                        <Eye className="h-3 w-3 mr-1" />
                        Accéder
                      </Button>
                    </Link>
                  )}
                  
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => navigator.clipboard.writeText(module.path || module.fichier || module.nom)}
                  >
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Résumé Final */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-indigo-800">📊 Résumé Empire 52 Modules</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-green-800 mb-2">{operationalCount} Opérationnels</h3>
                <p className="text-sm text-gray-600">
                  Tous modules fonctionnels et testés
                </p>
              </div>

              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Settings className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-blue-800 mb-2">{inProgressCount} En Cours</h3>
                <p className="text-sm text-gray-600">
                  Développement et intégration
                </p>
              </div>

              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Star className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-purple-800 mb-2">100% Halal</h3>
                <p className="text-sm text-gray-600">
                  Conformité Sharia certifiée
                </p>
              </div>

              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <Globe className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-bold text-orange-800 mb-2">78 Langues</h3>
                <p className="text-sm text-gray-600">
                  Support multilingue complet
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-indigo-200 text-center text-sm text-indigo-600">
          <p className="mb-2">© 2025 Club Empreinte Digitale - Yakoubi Yamina</p>
          <p className="mb-2">🎵 Empire Halal 52 Modules - Le Coran au Centre 🎵</p>
          <p className="text-xs text-gray-500">
            {filteredModules.length} modules affichés
            {searchTerm && ` pour "${searchTerm}"`}
            {categoryFilter !== 'tous' && ` dans "${categories.find(c => c.value === categoryFilter)?.label}"`}
          </p>
        </div>

      </div>
    </div>
  );
}