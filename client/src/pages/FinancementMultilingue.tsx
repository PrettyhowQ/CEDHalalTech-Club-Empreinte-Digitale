import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Globe, 
  DollarSign, 
  FileText, 
  Phone, 
  Mail, 
  Building, 
  Flag,
  Download,
  ExternalLink,
  CheckCircle,
  Calendar,
  Banknote,
  Landmark,
  CreditCard
} from 'lucide-react'

interface FundingOpportunity {
  name: string
  nameEn: string
  nameAr: string
  amount: string
  type: string
  deadline: string
  eligibility: string[]
  eligibilityEn: string[]
  eligibilityAr: string[]
  contact: {
    email: string
    phone: string
    website: string
  }
  description: string
  descriptionEn: string
  descriptionAr: string
  documents: string[]
  documentsEn: string[]
  documentsAr: string[]
}

const swissFunding: FundingOpportunity[] = [
  {
    name: "Innosuisse - Start-up",
    nameEn: "Innosuisse - Start-up Grant",
    nameAr: "إنوسويس - منحة الشركات الناشئة",
    amount: "130,000 CHF",
    type: "Subvention",
    deadline: "Applications continues",
    eligibility: [
      "Entreprise technologique innovante",
      "Basée en Suisse",
      "Potentiel de croissance élevé",
      "Équipe qualifiée"
    ],
    eligibilityEn: [
      "Innovative technology company",
      "Based in Switzerland", 
      "High growth potential",
      "Qualified team"
    ],
    eligibilityAr: [
      "شركة تكنولوجيا مبتكرة",
      "مقرها في سويسرا",
      "إمكانات نمو عالية",
      "فريق مؤهل"
    ],
    contact: {
      email: "startup@innosuisse.ch",
      phone: "+41 58 464 19 00",
      website: "https://www.innosuisse.ch"
    },
    description: "Programme de soutien aux start-ups technologiques avec potentiel d'innovation élevé. Financement jusqu'à 130K CHF pour développement produit et commercialisation.",
    descriptionEn: "Support program for tech start-ups with high innovation potential. Funding up to 130K CHF for product development and commercialization.",
    descriptionAr: "برنامج دعم للشركات الناشئة التقنية ذات إمكانيات الابتكار العالية. تمويل يصل إلى 130 ألف فرنك سويسري لتطوير المنتجات والتسويق.",
    documents: [
      "Plan d'affaires détaillé",
      "Étude de marché",
      "CV équipe dirigeante", 
      "Projections financières"
    ],
    documentsEn: [
      "Detailed business plan",
      "Market study",
      "Management team CVs",
      "Financial projections"
    ],
    documentsAr: [
      "خطة عمل مفصلة",
      "دراسة السوق",
      "السير الذاتية لفريق الإدارة",
      "التوقعات المالية"
    ]
  },
  {
    name: "Fonds Innovation Genève",
    nameEn: "Geneva Innovation Fund",
    nameAr: "صندوق الابتكار جنيف",
    amount: "100,000 CHF",
    type: "Prêt/Subvention",
    deadline: "Décembre 2025",
    eligibility: [
      "Entreprise basée à Genève",
      "Secteur technologie/fintech",
      "Création d'emplois locaux",
      "Innovation sociale"
    ],
    eligibilityEn: [
      "Geneva-based company",
      "Technology/fintech sector",
      "Local job creation",
      "Social innovation"
    ],
    eligibilityAr: [
      "شركة مقرها جنيف",
      "قطاع التكنولوجيا/التكنولوجيا المالية",
      "خلق وظائف محلية",
      "الابتكار الاجتماعي"
    ],
    contact: {
      email: "innovation@ge.ch",
      phone: "+41 22 546 82 00",
      website: "https://www.ge.ch/innovation"
    },
    description: "Soutien aux entreprises innovantes genevoises dans le secteur fintech et technologique. Accompagnement personnalisé et financement jusqu'à 100K CHF.",
    descriptionEn: "Support for innovative Geneva companies in fintech and technology sector. Personalized support and funding up to 100K CHF.",
    descriptionAr: "دعم الشركات المبتكرة في جنيف في قطاع التكنولوجيا المالية والتكنولوجيا. دعم مخصص وتمويل يصل إلى 100 ألف فرنك سويسري.",
    documents: [
      "Dossier de candidature",
      "Statuts société",
      "Preuves d'innovation",
      "Budget prévisionnel"
    ],
    documentsEn: [
      "Application file",
      "Company statutes", 
      "Innovation proofs",
      "Budget forecast"
    ],
    documentsAr: [
      "ملف الطلب",
      "النظام الأساسي للشركة",
      "أدلة الابتكار",
      "توقعات الميزانية"
    ]
  }
]

const europeanFunding: FundingOpportunity[] = [
  {
    name: "Horizon Europe - Programme Digital",
    nameEn: "Horizon Europe - Digital Programme",
    nameAr: "هورايزون أوروبا - البرنامج الرقمي",
    amount: "2,500,000 EUR",
    type: "Subvention EU",
    deadline: "Mars 2025",
    eligibility: [
      "Consortium européen (3+ pays)",
      "Innovation technologique",
      "Impact sociétal",
      "Transfert technologique"
    ],
    eligibilityEn: [
      "European consortium (3+ countries)",
      "Technological innovation",
      "Societal impact",
      "Technology transfer"
    ],
    eligibilityAr: [
      "اتحاد أوروبي (3+ دول)",
      "الابتكار التكنولوجي",
      "التأثير المجتمعي",
      "نقل التكنولوجيا"
    ],
    contact: {
      email: "research@ec.europa.eu",
      phone: "+32 2 299 11 11",
      website: "https://ec.europa.eu/horizon-europe"
    },
    description: "Programme phare de l'UE pour la recherche et l'innovation. Financement jusqu'à 2.5M EUR pour projets technologiques collaboratifs européens.",
    descriptionEn: "EU flagship program for research and innovation. Funding up to 2.5M EUR for collaborative European technology projects.",
    descriptionAr: "البرنامج الرائد للاتحاد الأوروبي للبحث والابتكار. تمويل يصل إلى 2.5 مليون يورو للمشاريع التكنولوجية التعاونية الأوروبية.",
    documents: [
      "Proposition de projet",
      "Consortium européen",
      "Budget détaillé",
      "Plan d'impact"
    ],
    documentsEn: [
      "Project proposal",
      "European consortium",
      "Detailed budget", 
      "Impact plan"
    ],
    documentsAr: [
      "اقتراح المشروع",
      "الكونسورتيوم الأوروبي",
      "ميزانية مفصلة",
      "خطة التأثير"
    ]
  },
  {
    name: "FSE+ - Fonds Social Européen Plus",
    nameEn: "ESF+ - European Social Fund Plus",
    nameAr: "الصندوق الاجتماعي الأوروبي بلاس",
    amount: "1,800,000 EUR",
    type: "Cofinancement",
    deadline: "Juin 2025",
    eligibility: [
      "Formation professionnelle",
      "Inclusion sociale",
      "Innovation sociale",
      "Économie numérique"
    ],
    eligibilityEn: [
      "Professional training",
      "Social inclusion",
      "Social innovation",
      "Digital economy"
    ],
    eligibilityAr: [
      "التدريب المهني",
      "الإدماج الاجتماعي",
      "الابتكار الاجتماعي",
      "الاقتصاد الرقمي"
    ],
    contact: {
      email: "esf@ec.europa.eu",
      phone: "+32 2 296 32 40",
      website: "https://ec.europa.eu/esf"
    },
    description: "Soutien aux projets de formation et d'inclusion sociale dans l'économie numérique. Cofinancement jusqu'à 1.8M EUR pour programmes éducatifs innovants.",
    descriptionEn: "Support for training and social inclusion projects in digital economy. Co-financing up to 1.8M EUR for innovative educational programs.",
    descriptionAr: "دعم مشاريع التدريب والإدماج الاجتماعي في الاقتصاد الرقمي. تمويل مشترك يصل إلى 1.8 مليون يورو للبرامج التعليمية المبتكرة.",
    documents: [
      "Projet de formation",
      "Partenariats locaux",
      "Évaluation d'impact",
      "Plan de développement"
    ],
    documentsEn: [
      "Training project",
      "Local partnerships",
      "Impact assessment",
      "Development plan"
    ],
    documentsAr: [
      "مشروع التدريب",
      "الشراكات المحلية",
      "تقييم التأثير",
      "خطة التطوير"
    ]
  }
]

const gulfFunding: FundingOpportunity[] = [
  {
    name: "Abu Dhabi Investment Office",
    nameEn: "Abu Dhabi Investment Office",
    nameAr: "مكتب أبوظبي للاستثمار",
    amount: "5,000,000 USD",
    type: "Investissement Direct",
    deadline: "Applications continues",
    eligibility: [
      "Entreprise fintech islamique",
      "Siège social aux EAU",
      "Création 50+ emplois",
      "Innovation technologique"
    ],
    eligibilityEn: [
      "Islamic fintech company",
      "Headquarters in UAE",
      "Create 50+ jobs",
      "Technological innovation"
    ],
    eligibilityAr: [
      "شركة تكنولوجيا مالية إسلامية",
      "مقر رئيسي في الإمارات",
      "خلق 50+ وظيفة",
      "الابتكار التكنولوجي"
    ],
    contact: {
      email: "invest@adio.gov.ae",
      phone: "+971 2 699 0000",
      website: "https://www.investinabudhabi.gov.ae"
    },
    description: "Programme d'investissement direct pour entreprises fintech conformes à la Sharia. Incentives jusqu'à 5M USD pour établissement aux EAU avec création d'emplois.",
    descriptionEn: "Direct investment program for Sharia-compliant fintech companies. Incentives up to 5M USD for UAE establishment with job creation.",
    descriptionAr: "برنامج الاستثمار المباشر للشركات التكنولوجيا المالية المتوافقة مع الشريعة. حوافز تصل إلى 5 مليون دولار أمريكي للتأسيس في الإمارات مع خلق الوظائف.",
    documents: [
      "Business plan UAE",
      "Certification Sharia",
      "Plan création emplois",
      "Étude impact économique"
    ],
    documentsEn: [
      "UAE business plan",
      "Sharia certification",
      "Job creation plan",
      "Economic impact study"
    ],
    documentsAr: [
      "خطة عمل الإمارات",
      "شهادة الشريعة",
      "خطة خلق الوظائف",
      "دراسة التأثير الاقتصادي"
    ]
  },
  {
    name: "Saudi TAQNIA Fund",
    nameEn: "Saudi TAQNIA Fund",
    nameAr: "صندوق تقنية السعودية",
    amount: "8,000,000 SAR",
    type: "Investissement Strategic",
    deadline: "Septembre 2025",
    eligibility: [
      "Technologies émergentes",
      "Partenariat avec entité saoudienne",
      "Transfert technologique",
      "Conformité Vision 2030"
    ],
    eligibilityEn: [
      "Emerging technologies",
      "Partnership with Saudi entity",
      "Technology transfer",
      "Vision 2030 compliance"
    ],
    eligibilityAr: [
      "التقنيات الناشئة",
      "شراكة مع جهة سعودية",
      "نقل التكنولوجيا",
      "توافق مع رؤية 2030"
    ],
    contact: {
      email: "investment@taqnia.com",
      phone: "+966 11 299 9999",
      website: "https://www.taqnia.com"
    },
    description: "Fonds d'investissement stratégique dans les technologies émergentes alignées sur Vision 2030. Financement jusqu'à 8M SAR avec partenariat technologique.",
    descriptionEn: "Strategic investment fund in emerging technologies aligned with Vision 2030. Funding up to 8M SAR with technology partnership.",
    descriptionAr: "صندوق استثمار استراتيجي في التقنيات الناشئة المتوافقة مع رؤية 2030. تمويل يصل إلى 8 مليون ريال سعودي مع شراكة تقنية.",
    documents: [
      "Dossier Vision 2030",
      "Partenariat local",
      "Transfert technologique",
      "Impact socio-économique"
    ],
    documentsEn: [
      "Vision 2030 file",
      "Local partnership",
      "Technology transfer",
      "Socio-economic impact"
    ],
    documentsAr: [
      "ملف رؤية 2030",
      "الشراكة المحلية",
      "نقل التكنولوجيا",
      "التأثير الاجتماعي الاقتصادي"
    ]
  }
]

export default function FinancementMultilingue() {
  const [activeTab, setActiveTab] = useState('suisse')
  const [selectedLanguage, setSelectedLanguage] = useState('fr')

  const getText = (fr: string, en: string, ar: string) => {
    switch(selectedLanguage) {
      case 'en': return en
      case 'ar': return ar
      default: return fr
    }
  }

  const getArray = (fr: string[], en: string[], ar: string[]) => {
    switch(selectedLanguage) {
      case 'en': return en
      case 'ar': return ar
      default: return fr
    }
  }

  const regions = [
    { id: 'suisse', name: 'Suisse', nameEn: 'Switzerland', nameAr: 'سويسرا', flag: '🇨🇭', data: swissFunding },
    { id: 'europe', name: 'Europe', nameEn: 'Europe', nameAr: 'أوروبا', flag: '🇪🇺', data: europeanFunding },
    { id: 'golfe', name: 'Golfe', nameEn: 'Gulf', nameAr: 'الخليج', flag: '🇦🇪', data: gulfFunding }
  ]

  const currentData = regions.find(r => r.id === activeTab)?.data || []

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header avec sélection de langue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {getText(
                  "Ressources de Financement Multilingues", 
                  "Multilingual Funding Resources",
                  "موارد التمويل متعددة اللغات"
                )}
              </h1>
              <p className="text-gray-600 text-lg">
                {getText(
                  "Opportunités de financement CED HalalTech™ - Suisse, Europe & Golfe",
                  "CED HalalTech™ funding opportunities - Switzerland, Europe & Gulf",
                  "فرص التمويل CED HalalTech™ - سويسرا وأوروبا والخليج"
                )}
              </p>
            </div>
            
            {/* Sélecteur de langue */}
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-gray-400" />
              <select 
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="fr">🇫🇷 Français</option>
                <option value="en">🇺🇸 English</option>
                <option value="ar">🇸🇦 العربية</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Navigation par région */}
        <div className="mb-8">
          <nav className="flex flex-wrap gap-2 bg-white p-2 rounded-xl shadow-sm">
            {regions.map(region => (
              <button
                key={region.id}
                onClick={() => setActiveTab(region.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === region.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <span className="text-xl">{region.flag}</span>
                <span>
                  {getText(region.name, region.nameEn, region.nameAr)}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Statistiques globales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Banknote className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">16.4M</div>
            <div className="text-sm text-gray-600">
              {getText("Total Disponible", "Total Available", "إجمالي متاح")}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Building className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">15+</div>
            <div className="text-sm text-gray-600">
              {getText("Organismes", "Organizations", "المؤسسات")}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Globe className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">3</div>
            <div className="text-sm text-gray-600">
              {getText("Régions", "Regions", "المناطق")}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Flag className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">12+</div>
            <div className="text-sm text-gray-600">
              {getText("Pays", "Countries", "البلدان")}
            </div>
          </div>
        </motion.div>

        {/* Cartes des opportunités */}
        <div className="grid lg:grid-cols-2 gap-8">
          {currentData.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
            >
              {/* Header de la carte */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {getText(opportunity.name, opportunity.nameEn, opportunity.nameAr)}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4" />
                      <span className="font-semibold">{opportunity.amount}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{opportunity.deadline}</span>
                    </span>
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                  {opportunity.type}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6">
                {getText(opportunity.description, opportunity.descriptionEn, opportunity.descriptionAr)}
              </p>

              {/* Critères d'éligibilité */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  {getText("Critères d'éligibilité", "Eligibility Criteria", "معايير الأهلية")}
                </h4>
                <div className="space-y-2">
                  {getArray(opportunity.eligibility, opportunity.eligibilityEn, opportunity.eligibilityAr).map((criteria, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{criteria}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents requis */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  {getText("Documents requis", "Required Documents", "المستندات المطلوبة")}
                </h4>
                <div className="space-y-2">
                  {getArray(opportunity.documents, opportunity.documentsEn, opportunity.documentsAr).map((doc, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  {getText("Contact", "Contact", "للتواصل")}
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <a href={`mailto:${opportunity.contact.email}`} className="text-sm text-blue-600 hover:underline">
                      {opportunity.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{opportunity.contact.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                    <a 
                      href={opportunity.contact.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      {getText("Site officiel", "Official website", "الموقع الرسمي")}
                    </a>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3 mt-6">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span className="text-sm">
                    {getText("Télécharger dossier", "Download application", "تحميل الطلب")}
                  </span>
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guide de candidature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-2xl p-8 text-white text-center mt-8"
        >
          <h2 className="text-3xl font-bold mb-4">
            {getText(
              "Guide Stratégique CED HalalTech™",
              "CED HalalTech™ Strategic Guide", 
              "الدليل الاستراتيجي CED HalalTech™"
            )}
          </h2>
          <p className="text-green-100 text-lg mb-6">
            {getText(
              "Stratégie optimisée pour maximiser vos chances d'obtenir des financements",
              "Optimized strategy to maximize your funding success rate",
              "استراتيجية محسنة لزيادة فرص نجاحك في الحصول على التمويل"
            )}
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-bold mb-3">
                {getText("Phase 1: Préparation", "Phase 1: Preparation", "المرحلة 1: التحضير")}
              </h3>
              <ul className="space-y-2 text-sm text-green-100">
                <li>• {getText("Analyse conformité Sharia", "Sharia compliance analysis", "تحليل الامتثال الشرعي")}</li>
                <li>• {getText("Business plan détaillé", "Detailed business plan", "خطة عمل مفصلة")}</li>
                <li>• {getText("Études de marché", "Market research", "دراسات السوق")}</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-bold mb-3">
                {getText("Phase 2: Candidature", "Phase 2: Application", "المرحلة 2: التطبيق")}
              </h3>
              <ul className="space-y-2 text-sm text-green-100">
                <li>• {getText("Dossiers multilingues", "Multilingual applications", "طلبات متعددة اللغات")}</li>
                <li>• {getText("Partenariats stratégiques", "Strategic partnerships", "الشراكات الاستراتيجية")}</li>
                <li>• {getText("Présentation pitch", "Pitch presentation", "عرض الفكرة")}</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-bold mb-3">
                {getText("Phase 3: Suivi", "Phase 3: Follow-up", "المرحلة 3: المتابعة")}
              </h3>
              <ul className="space-y-2 text-sm text-green-100">
                <li>• {getText("Suivi personnalisé", "Personalized follow-up", "متابعة مخصصة")}</li>
                <li>• {getText("Négociation conditions", "Terms negotiation", "التفاوض على الشروط")}</li>
                <li>• {getText("Mise en œuvre", "Implementation", "التنفيذ")}</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            {getText(
              "Ressources compilées par PrettyhowQ™ Super IARP Pro • Écosystème CED HalalTech™",
              "Resources compiled by PrettyhowQ™ Super IARP Pro • CED HalalTech™ Ecosystem",
              "موارد مجمعة بواسطة PrettyhowQ™ Super IARP Pro • نظام CED HalalTech™ البيئي"
            )}
          </p>
          <p className="mt-2">
            {getText(
              "🤲 Barakallahu fik pour votre confiance • جزاك الله خيراً",
              "🤲 Barakallahu fik for your trust • جزاك الله خيراً", 
              "🤲 بارك الله فيك على ثقتكم • جزاك الله خيراً"
            )}
          </p>
        </div>
      </div>
    </div>
  )
}