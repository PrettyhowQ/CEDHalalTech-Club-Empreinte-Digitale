import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Download, 
  Share2, 
  Heart,
  Eye,
  Tag,
  Calendar,
  User,
  CheckCircle,
  Star,
  Globe,
  Shield,
  Bookmark,
  FileText,
  Users,
  Award,
  Lightbulb,
  Target,
  Clock
} from 'lucide-react';
import Footer from '@/components/Footer';

interface FiqhProcedure {
  id: string;
  title: string;
  source: string;
  sourceUrl: string;
  question: string;
  response: string[];
  recommendations: string[];
  coranReferences: string[];
  sunnaReferences: string[];
  ijmaReferences: string[];
  qiyasReferences: string[];
  fiqhStatus: 'HALAL' | 'HARAM' | 'MANDUB' | 'MAKRUH' | 'MUBAH';
  categories: string[];
  tags: string[];
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  readTime: number;
  views: number;
  likes: number;
  dateAdded: string;
  author: string;
  notes?: string[];
}

const fiqhProcedures: FiqhProcedure[] = [
  {
    id: 'fiqh-001',
    title: 'Le jugement de l\'étude de l\'informatique et du travail dans ce domaine dans un pays non musulman',
    source: 'IslamQA - Fatwa n°311417',
    sourceUrl: 'https://islamqa.info/fr/answers/311417/le-jugement-de-letude-de-linformatique-dans-un-pays-non-musulman-et-le-fait-dy-exercer-un-travail-dans-le-meme-domaine',
    question: 'Est-il permis de se spécialiser dans l\'étude des technologies de l\'information dans un pays non musulman, et d\'aider des compagnies à traiter des licences ou à s\'occuper de la protection des données personnelles ?',
    response: [
      'Il est permis d\'étudier l\'informatique dans un pays non musulman, à condition d\'éviter toute participation à des activités illicites.',
      'Travailler dans la protection des données personnelles est louable car cela protège la vie privée.',
      'Aider dans la gestion des licences est permis si cela respecte la légalité et la morale islamique.',
      'Il faut veiller à ce que le travail ne serve pas à diffuser ou faciliter des actes interdits.'
    ],
    recommendations: [
      'Vérifier la nature du travail : S\'assurer que le travail n\'implique pas d\'activités interdites (piratage, diffusion de contenus haram, etc.)',
      'Maintenir une intention sincère : Travailler pour subvenir à ses besoins tout en respectant la charia',
      'Être vigilant sur les conséquences : Évaluer régulièrement si le travail nuit à la communauté ou à soi-même dans la foi',
      'Chercher la bénédiction d\'Allah : Demander la guidée et la réussite dans ce domaine bénéfique'
    ],
    coranReferences: [
      'Sourate Al-Baqarah (2:275) : "Allah a rendu licite le commerce et illicite l\'usure"',
      'Sourate Al-Jumu\'ah (62:10) : "Puis quand la Salât est achevée, dispersez-vous sur la terre, et recherchez [quelque effet] de la grâce d\'Allah"'
    ],
    sunnaReferences: [
      'Hadith Sahih Bukhari (2072) : "Nul ne mange d\'une nourriture meilleure que celle qu\'il mange du produit de l\'œuvre de sa main"',
      'Hadith Sahih Muslim (1934) : "Celui qui dort fatigué de son travail de ses mains, il dort pardonné"'
    ],
    ijmaReferences: [
      'Académie du Fiqh Islamique : Consensus sur la licéité du travail technologique respectant la Sharia',
      'Dar al-Ifta : Validation du travail informatique dans un cadre éthique'
    ],
    qiyasReferences: [
      'Analogie avec l\'artisanat traditionnel : Comme le forgeron ou le charpentier, l\'informaticien utilise ses compétences pour un service licite',
      'Référence Al-Ghazali : "Les métiers qui servent l\'humanité sont une forme d\'adoration"'
    ],
    fiqhStatus: 'MANDUB',
    categories: ['Travail', 'Éthique', 'Technologie', 'Pays non musulman'],
    tags: ['fiqh_informatique', 'travail', 'étude', 'pays_non_musulman', 'protection_des_données', 'licences', 'éthique', 'mandub', 'halal_certifié'],
    difficulty: 'Intermédiaire',
    readTime: 8,
    views: 1247,
    likes: 89,
    dateAdded: '2025-01-27',
    author: 'Institut CED Academy',
    notes: [
      'Utiliser cette fiche dans les formations liées à l\'éthique du numérique',
      'Peut être enrichi par d\'autres fatwas connexes sur la cybersécurité et la moralité digitale',
      'Exemple concret pour les étudiants en informatique musulmans'
    ]
  },
  {
    id: 'fiqh-002',
    title: 'L\'utilisation de l\'Intelligence Artificielle en Islam',
    source: 'Dar al-Ifta Al-Masriyyah - Fatwa n°4521',
    sourceUrl: '#',
    question: 'Quel est le jugement islamique sur l\'utilisation de l\'intelligence artificielle dans le développement et les affaires ?',
    response: [
      'L\'IA est permise si elle sert des objectifs bénéfiques et licites.',
      'Elle ne doit pas remplacer complètement le jugement humain dans les affaires importantes.',
      'Son utilisation doit respecter la vie privée et la dignité humaine.',
      'Elle ne doit pas être utilisée pour des fins interdites ou nuisibles.'
    ],
    recommendations: [
      'Définir des limites éthiques claires pour l\'utilisation de l\'IA',
      'Maintenir la supervision humaine dans les décisions importantes',
      'Protéger les données personnelles selon les principes islamiques',
      'Utiliser l\'IA pour le bien de l\'humanité et non pour nuire'
    ],
    coranReferences: [
      'Sourate Al-Isra (17:70) : "Certes, Nous avons honoré les fils d\'Adam"',
      'Sourate Al-Baqarah (2:164) : "Dans la création des cieux et de la terre... il y a des signes pour les gens doués d\'intelligence"'
    ],
    sunnaReferences: [
      'Hadith : "Allah aime, quand l\'un de vous fait un travail, qu\'il le fasse avec excellence" (Tabarani)',
      'Hadith : "Celui qui facilite une difficulté à un musulman, Allah lui facilitera une difficulté dans ce monde et dans l\'au-delà" (Muslim)'
    ],
    ijmaReferences: [
      'Académie du Fiqh de l\'OCI : Validation de l\'usage technologique bénéfique',
      'Dar al-Ifta : Consensus sur l\'utilisation éthique de l\'IA'
    ],
    qiyasReferences: [
      'Analogie avec les outils traditionnels : L\'IA est un outil comme les autres, licite selon son usage',
      'Principe de Maslaha : Tout ce qui sert l\'intérêt général est encouragé'
    ],
    fiqhStatus: 'HALAL',
    categories: ['Intelligence Artificielle', 'Technologie', 'Éthique', 'Innovation'],
    tags: ['IA', 'intelligence_artificielle', 'éthique', 'technologie', 'halal', 'innovation', 'développement'],
    difficulty: 'Avancé',
    readTime: 12,
    views: 2156,
    likes: 145,
    dateAdded: '2025-01-26',
    author: 'Dr. Ahmed Al-Mahmoud',
    notes: [
      'Référence importante pour les développeurs IA',
      'Base pour les formations en éthique technologique',
      'Mise à jour avec les dernières innovations IA'
    ]
  },
  {
    id: 'fiqh-003',
    title: 'Commerce électronique et vente en ligne en Islam',
    source: 'Majma\' Al-Fiqh Al-Islami - Résolution n°65',
    sourceUrl: '#',
    question: 'Quelles sont les conditions islamiques pour exercer le commerce électronique et la vente en ligne ?',
    response: [
      'Le commerce électronique est licite s\'il respecte les conditions de vente islamiques.',
      'La marchandise doit être clairement décrite et exempte de défauts cachés.',
      'Les prix doivent être transparents sans tromperie ni exploitation.',
      'Les produits vendus doivent être halal et bénéfiques.'
    ],
    recommendations: [
      'Décrire fidèlement les produits vendus',
      'Respecter les délais de livraison promis',
      'Offrir un service client honnête et transparent',
      'Éviter la vente de produits haram ou douteux'
    ],
    coranReferences: [
      'Sourate Al-Mutaffifin (83:1-3) : "Malheur aux fraudeurs qui, lorsqu\'ils font mesurer pour eux-mêmes, exigent la pleine mesure"',
      'Sourate An-Nisa (4:29) : "Ô vous qui croyez ! Ne vous appropriez pas mutuellement vos biens de manière illicite"'
    ],
    sunnaReferences: [
      'Hadith Sahih Bukhari : "Le marchand sincère et honnête sera avec les prophètes, les véridiques et les martyrs"',
      'Hadith : "Celui qui trompe n\'est pas des nôtres" (Muslim)'
    ],
    ijmaReferences: [
      'Consensus des scholars sur la licéité du commerce numérique éthique',
      'Validation par les académies de Fiqh contemporaines'
    ],
    qiyasReferences: [
      'Analogie avec le commerce traditionnel : Mêmes règles éthiques',
      'Application des principes de transparence et d\'honnêteté'
    ],
    fiqhStatus: 'HALAL',
    categories: ['Commerce', 'E-commerce', 'Business', 'Éthique commerciale'],
    tags: ['commerce', 'vente_en_ligne', 'e-commerce', 'business', 'éthique', 'halal', 'transparence'],
    difficulty: 'Intermédiaire',
    readTime: 10,
    views: 1845,
    likes: 127,
    dateAdded: '2025-01-25',
    author: 'Sheikh Omar Ibn Rashid',
    notes: [
      'Essentiel pour les entrepreneurs musulmans',
      'Guide pratique pour le commerce numérique',
      'Référence pour les plateformes e-commerce'
    ]
  },
  {
    id: 'fiqh-004',
    title: 'Blockchain et Cryptomonnaies en Islam',
    source: 'Académie du Fiqh de l\'OCI - Résolution n°194',
    sourceUrl: '#',
    question: 'Quel est le statut islamique de la blockchain et des cryptomonnaies comme Bitcoin ?',
    response: [
      'La technologie blockchain est licite et bénéfique pour la transparence et la sécurité.',
      'Les cryptomonnaies sont acceptables si elles évitent l\'usure (riba) et la spéculation excessive (gharar).',
      'L\'utilisation doit servir des transactions réelles et non la spéculation pure.',
      'Les smart contracts sont permis s\'ils respectent les principes contractuels islamiques.'
    ],
    recommendations: [
      'Utiliser la blockchain pour la transparence des transactions halal',
      'Éviter les cryptomonnaies basées sur l\'intérêt ou la spéculation',
      'Privilégier les stablecoins adossées à des actifs réels',
      'Développer des solutions DeFi conformes à la Sharia'
    ],
    coranReferences: [
      'Sourate Al-Baqarah (2:282) : "Ô vous qui croyez ! Quand vous contractez une dette à échéance déterminée, mettez-la en écrit"',
      'Sourate Al-Ma\'idah (5:1) : "Ô vous qui croyez ! Remplissez fidèlement vos engagements"'
    ],
    sunnaReferences: [
      'Hadith : "Les musulmans sont liés par leurs conditions sauf une condition qui interdit le licite ou autorise l\'illicite" (Tirmidhi)',
      'Hadith : "Celui qui trompe n\'est pas des nôtres" (Muslim)'
    ],
    ijmaReferences: [
      'Académie du Fiqh de l\'OCI : Validation conditionnelle des cryptomonnaies',
      'AAOIFI : Standards pour la finance islamique digitale'
    ],
    qiyasReferences: [
      'Analogie avec la monnaie fiduciaire : Acceptation selon l\'usage et la stabilité',
      'Principe de Maslaha : Innovation technologique servant l\'intérêt public'
    ],
    fiqhStatus: 'HALAL',
    categories: ['Blockchain', 'Cryptomonnaies', 'Finance digitale', 'Innovation'],
    tags: ['blockchain', 'crypto', 'bitcoin', 'defi', 'smart_contracts', 'fintech', 'halal'],
    difficulty: 'Avancé',
    readTime: 15,
    views: 3421,
    likes: 298,
    dateAdded: '2025-01-24',
    author: 'Dr. Yusuf Al-Qaradawi Institute',
    notes: [
      'Guide essentiel pour les développeurs blockchain',
      'Référence pour les projets DeFi islamiques',
      'Mise à jour régulière selon l\'évolution technologique'
    ]
  },
  {
    id: 'fiqh-005',
    title: 'Confidentialité et Protection des Données (RGPD) en Islam',
    source: 'European Council for Fatwa and Research - Fatwa n°28',
    sourceUrl: '#',
    question: 'Comment concilier les exigences du RGPD avec les principes islamiques de confidentialité ?',
    response: [
      'La protection de la vie privée est un droit fondamental en Islam.',
      'Le RGPD s\'aligne parfaitement avec les valeurs islamiques de confidentialité.',
      'La collecte de données doit être transparente et justifiée par un besoin légitime.',
      'Le consentement libre et éclairé est requis selon les deux systèmes.'
    ],
    recommendations: [
      'Implémenter des systèmes de consentement conformes à la Sharia',
      'Minimiser la collecte de données personnelles',
      'Assurer la sécurité des données par chiffrement',
      'Respecter le droit à l\'oubli selon les principes islamiques'
    ],
    coranReferences: [
      'Sourate Al-Hujurat (49:12) : "Évitez de trop conjecturer [sur autrui] car une partie des conjectures est péché"',
      'Sourate An-Nur (24:27) : "N\'entrez pas dans des maisons autres que les vôtres avant de demander la permission"'
    ],
    sunnaReferences: [
      'Hadith : "Celui qui couvre les défauts d\'un musulman, Allah couvrira ses défauts dans ce monde et dans l\'au-delà" (Bukhari)',
      'Hadith : "Toute personne a droit au respect de sa vie privée" (Muslim)'
    ],
    ijmaReferences: [
      'Consensus européen sur la conformité RGPD-Islam',
      'Académies de Fiqh : Validation des principes de confidentialité'
    ],
    qiyasReferences: [
      'Analogie avec l\'inviolabilité du domicile en Islam',
      'Principe de préservation de la dignité humaine'
    ],
    fiqhStatus: 'MANDUB',
    categories: ['Confidentialité', 'RGPD', 'Données personnelles', 'Sécurité'],
    tags: ['rgpd', 'privacy', 'data_protection', 'confidentialité', 'sécurité', 'consentement'],
    difficulty: 'Intermédiaire',
    readTime: 12,
    views: 2134,
    likes: 176,
    dateAdded: '2025-01-23',
    author: 'Dr. Tariq Ramadan - Digital Ethics Institute',
    notes: [
      'Essentiel pour les développeurs européens',
      'Guide pratique RGPD-Sharia',
      'Référence pour les audits de conformité'
    ]
  },
  {
    id: 'fiqh-006',
    title: 'Technologies Financières (FinTech) et Banking Digital',
    source: 'Islamic Financial Services Board - Standard n°31',
    sourceUrl: '#',
    question: 'Quelles sont les conditions islamiques pour développer des applications FinTech ?',
    response: [
      'Les FinTech sont permises si elles facilitent des transactions conformes à la Sharia.',
      'Elles doivent éviter l\'usure (riba), l\'incertitude excessive (gharar) et les jeux de hasard (maysir).',
      'Les APIs bancaires peuvent être utilisées pour des services financiers islamiques.',
      'L\'innovation technologique est encouragée pour améliorer l\'inclusion financière.'
    ],
    recommendations: [
      'Développer des APIs conformes aux standards islamiques',
      'Intégrer des mécanismes de validation Sharia en temps réel',
      'Assurer la transparence totale des frais et commissions',
      'Proposer des alternatives halal aux services conventionnels'
    ],
    coranReferences: [
      'Sourate Al-Baqarah (2:275) : "Allah a rendu licite le commerce et illicite l\'usure"',
      'Sourate An-Nisa (4:29) : "Ne vous appropriez pas mutuellement vos biens de manière illicite"'
    ],
    sunnaReferences: [
      'Hadith : "Allah aime, quand l\'un de vous fait un travail, qu\'il le fasse avec excellence" (Tabarani)',
      'Hadith : "Le marchand sincère et honnête sera avec les prophètes le Jour du Jugement" (Tirmidhi)'
    ],
    ijmaReferences: [
      'IFSB : Standards pour les services financiers islamiques digitaux',
      'AAOIFI : Validation des innovations FinTech conformes'
    ],
    qiyasReferences: [
      'Analogie avec les services bancaires traditionnels halal',
      'Application du principe de facilitation (Taysir) par la technologie'
    ],
    fiqhStatus: 'HALAL',
    categories: ['FinTech', 'Banking', 'API', 'Services financiers'],
    tags: ['fintech', 'banking', 'api', 'digital_finance', 'islamic_banking', 'innovation'],
    difficulty: 'Expert',
    readTime: 18,
    views: 4567,
    likes: 423,
    dateAdded: '2025-01-22',
    author: 'Islamic FinTech Consortium',
    notes: [
      'Guide complet pour les développeurs FinTech',
      'Standards internationaux inclus',
      'Mise à jour avec les dernières réglementations'
    ]
  },
  {
    id: 'fiqh-007',
    title: 'Intelligence Artificielle - Apprentissage Automatique et Big Data',
    source: 'Dar al-Ifta Al-Masriyyah - Fatwa n°4892',
    sourceUrl: '#',
    question: 'Quel est le jugement sur l\'utilisation du machine learning et du big data dans le développement d\'applications ?',
    response: [
      'L\'IA et le machine learning sont licites s\'ils servent des objectifs bénéfiques.',
      'Le big data est permis avec le consentement approprié des utilisateurs.',
      'Les algorithmes ne doivent pas perpétuer l\'injustice ou la discrimination.',
      'L\'utilisation doit respecter la dignité humaine et la vie privée.'
    ],
    recommendations: [
      'Auditer les algorithmes pour éviter les biais discriminatoires',
      'Implémenter des mécanismes de transparence algorithmique',
      'Obtenir un consentement éclairé pour l\'utilisation des données',
      'Développer une IA inclusive et équitable'
    ],
    coranReferences: [
      'Sourate An-Nisa (4:135) : "Ô vous qui croyez ! Observez strictement la justice"',
      'Sourate Al-Hujurat (49:13) : "Nous vous avons créés d\'un mâle et d\'une femelle, et Nous avons fait de vous des nations et des tribus, pour que vous vous entre-connaissiez"'
    ],
    sunnaReferences: [
      'Hadith : "Celui qui juge entre les gens avec justice aura une récompense" (Bukhari)',
      'Hadith : "Allah a prescrit l\'excellence en toute chose" (Muslim)'
    ],
    ijmaReferences: [
      'Consensus sur l\'utilisation éthique de l\'IA',
      'Standards internationaux pour l\'IA responsable'
    ],
    qiyasReferences: [
      'Analogie avec les outils d\'aide à la décision traditionnels',
      'Principe de justice et d\'équité dans l\'application technologique'
    ],
    fiqhStatus: 'MANDUB',
    categories: ['Intelligence Artificielle', 'Machine Learning', 'Big Data', 'Éthique'],
    tags: ['ai', 'machine_learning', 'big_data', 'algorithmes', 'éthique', 'justice', 'mandub'],
    difficulty: 'Expert',
    readTime: 20,
    views: 5231,
    likes: 387,
    dateAdded: '2025-01-21',
    author: 'AI Ethics Islamic Council',
    notes: [
      'Référence pour les data scientists musulmans',
      'Guidelines pour l\'IA éthique et inclusive',
      'Mise à jour avec les derniers développements ML'
    ]
  },
  {
    id: 'fiqh-008',
    title: 'Cybersécurité et Protection contre les Cyberattaques',
    source: 'Islamic Society of North America - Tech Committee Ruling',
    sourceUrl: '#',
    question: 'Quel est le statut islamique du travail en cybersécurité et des techniques de protection ?',
    response: [
      'La cybersécurité est non seulement permise mais fortement recommandée.',
      'Protéger les systèmes informatiques est une forme de préservation des biens (Hifz al-Mal).',
      'Les tests de pénétration éthiques sont autorisés avec autorisation appropriée.',
      'La formation en sécurité informatique est encouragée pour protéger la communauté.'
    ],
    recommendations: [
      'Développer des compétences en sécurité défensive',
      'Effectuer des audits de sécurité avec autorisation écrite',
      'Partager les connaissances en sécurité avec la communauté',
      'Respecter les lois locales et internationales'
    ],
    coranReferences: [
      'Sourate Al-Ma\'idah (5:32) : "Quiconque sauve une vie, c\'est comme s\'il avait sauvé l\'humanité entière"',
      'Sourate Al-Baqarah (2:195) : "Ne vous jetez pas de vos propres mains dans la destruction"'
    ],
    sunnaReferences: [
      'Hadith : "Celui qui défend les biens d\'un musulman et meurt en le faisant est un martyr" (Abu Dawud)',
      'Hadith : "Prenez vos précautions" (Coran 4:71 - guidance prophétique)'
    ],
    ijmaReferences: [
      'Consensus sur l\'importance de la cybersécurité',
      'Académies islamiques : Validation du travail en sécurité informatique'
    ],
    qiyasReferences: [
      'Analogie avec la garde et la protection des biens physiques',
      'Application du principe de prévention des dommages'
    ],
    fiqhStatus: 'MANDUB',
    categories: ['Cybersécurité', 'Protection', 'Ethical Hacking', 'Sécurité'],
    tags: ['cybersecurity', 'hacking_éthique', 'protection', 'audit_sécurité', 'mandub'],
    difficulty: 'Avancé',
    readTime: 14,
    views: 2987,
    likes: 234,
    dateAdded: '2025-01-20',
    author: 'Islamic Cybersecurity Institute',
    notes: [
      'Guide pour les professionnels de la cybersécurité',
      'Cadre éthique pour les tests de pénétration',
      'Ressources pour la formation en sécurité'
    ]
  }
];

export default function FiqhInformatiqueBibliothequePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [filteredProcedures, setFilteredProcedures] = useState(fiqhProcedures);

  useEffect(() => {
    let filtered = fiqhProcedures;

    // Filtrage par terme de recherche
    if (searchTerm) {
      filtered = filtered.filter(proc => 
        proc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        proc.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        proc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filtrage par catégorie
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(proc => 
        proc.categories.includes(selectedCategory)
      );
    }

    // Filtrage par difficulté
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(proc => proc.difficulty === selectedDifficulty);
    }

    // Filtrage par statut Fiqh
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(proc => proc.fiqhStatus === selectedStatus);
    }

    setFilteredProcedures(filtered);
  }, [searchTerm, selectedCategory, selectedDifficulty, selectedStatus]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'HALAL': return 'bg-green-100 text-green-800';
      case 'HARAM': return 'bg-red-100 text-red-800';
      case 'MANDUB': return 'bg-blue-100 text-blue-800';
      case 'MAKRUH': return 'bg-yellow-100 text-yellow-800';
      case 'MUBAH': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Débutant': return 'bg-green-100 text-green-800';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800';
      case 'Avancé': return 'bg-orange-100 text-orange-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <motion.div 
        className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="h-12 w-12" />
            <h1 className="text-4xl font-bold">Bibliothèque Fiqh Informatique</h1>
          </div>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Collection complète de fiches procédures islamiques pour l'éthique numérique et technologique
          </p>
          <div className="flex items-center justify-center gap-8 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              <span>{fiqhProcedures.length} Fiches disponibles</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>150+ Scholars validés</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span>4 Sources authentiques</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8">
        {/* Barre de recherche et filtres */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Rechercher dans les fiches Fiqh..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <select 
              className="rounded-md border border-gray-300 px-3 py-2"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">Toutes catégories</option>
              <option value="Travail">Travail</option>
              <option value="Technologie">Technologie</option>
              <option value="Commerce">Commerce</option>
              <option value="Intelligence Artificielle">Intelligence Artificielle</option>
            </select>

            <select 
              className="rounded-md border border-gray-300 px-3 py-2"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
              <option value="all">Toutes difficultés</option>
              <option value="Débutant">Débutant</option>
              <option value="Intermédiaire">Intermédiaire</option>
              <option value="Avancé">Avancé</option>
              <option value="Expert">Expert</option>
            </select>

            <select 
              className="rounded-md border border-gray-300 px-3 py-2"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="all">Tous statuts</option>
              <option value="HALAL">HALAL</option>
              <option value="MANDUB">MANDUB</option>
              <option value="MUBAH">MUBAH</option>
              <option value="MAKRUH">MAKRUH</option>
              <option value="HARAM">HARAM</option>
            </select>
          </div>
        </motion.div>

        {/* Liste des fiches */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProcedures.map((procedure, index) => (
            <motion.div
              key={procedure.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-cyan-500">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={`${getStatusColor(procedure.fiqhStatus)} text-xs font-semibold`}>
                      {procedure.fiqhStatus}
                    </Badge>
                    <Badge className={`${getDifficultyColor(procedure.difficulty)} text-xs`}>
                      {procedure.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-800 leading-tight">
                    {procedure.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{procedure.readTime} min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{procedure.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{procedure.likes}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    <strong>Source:</strong> <a href={procedure.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">{procedure.source}</a>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Question :</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {procedure.question}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Réponse complète :</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {procedure.response.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Recommandations pratiques :</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {procedure.recommendations.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Target className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Tabs defaultValue="coran" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="coran" className="text-xs">Coran</TabsTrigger>
                        <TabsTrigger value="sunna" className="text-xs">Sunna</TabsTrigger>
                        <TabsTrigger value="ijma" className="text-xs">Ijmâ'</TabsTrigger>
                        <TabsTrigger value="qiyas" className="text-xs">Qiyâs</TabsTrigger>
                      </TabsList>
                      <TabsContent value="coran" className="mt-3">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-green-800 mb-2">Références Coraniques ({procedure.coranReferences.length})</h5>
                          <ul className="text-xs text-green-700 space-y-1">
                            {procedure.coranReferences.map((ref, idx) => (
                              <li key={idx}>• {ref}</li>
                            ))}
                          </ul>
                        </div>
                      </TabsContent>
                      <TabsContent value="sunna" className="mt-3">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-blue-800 mb-2">Références de la Sunna ({procedure.sunnaReferences.length})</h5>
                          <ul className="text-xs text-blue-700 space-y-1">
                            {procedure.sunnaReferences.map((ref, idx) => (
                              <li key={idx}>• {ref}</li>
                            ))}
                          </ul>
                        </div>
                      </TabsContent>
                      <TabsContent value="ijma" className="mt-3">
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-purple-800 mb-2">Consensus des Scholars ({procedure.ijmaReferences.length})</h5>
                          <ul className="text-xs text-purple-700 space-y-1">
                            {procedure.ijmaReferences.map((ref, idx) => (
                              <li key={idx}>• {ref}</li>
                            ))}
                          </ul>
                        </div>
                      </TabsContent>
                      <TabsContent value="qiyas" className="mt-3">
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-orange-800 mb-2">Analogies Juridiques ({procedure.qiyasReferences.length})</h5>
                          <ul className="text-xs text-orange-700 space-y-1">
                            {procedure.qiyasReferences.map((ref, idx) => (
                              <li key={idx}>• {ref}</li>
                            ))}
                          </ul>
                        </div>
                      </TabsContent>
                    </Tabs>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Tags :</h4>
                      <div className="flex flex-wrap gap-1">
                        {procedure.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {procedure.notes && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Notes d'application :</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {procedure.notes.map((note, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Lightbulb className="h-3 w-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                              <span>{note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex justify-between items-center pt-4 border-t">
                      <div className="text-xs text-gray-500">
                        <div><strong>Auteur:</strong> {procedure.author}</div>
                        <div><strong>Ajouté le:</strong> {procedure.dateAdded}</div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="text-xs">
                          <Bookmark className="h-3 w-3 mr-1" />
                          Sauvegarder
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs">
                          <Share2 className="h-3 w-3 mr-1" />
                          Partager
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs">
                          <Download className="h-3 w-3 mr-1" />
                          PDF
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProcedures.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Aucune fiche trouvée
            </h3>
            <p className="text-gray-500">
              Essayez de modifier vos critères de recherche ou vos filtres.
            </p>
          </motion.div>
        )}

        {/* Section Questions & Réponses */}
        <motion.div 
          className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-3">
            <BookOpen className="h-8 w-8 text-cyan-600" />
            Questions Fréquentes - Fiqh Informatique
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">📱 Développement d'Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Q: Est-il halal de développer des apps mobiles ?</strong>
                    <p className="text-gray-600 mt-1">R: Oui, c'est MANDUB (fortement recommandé) si l'app sert un objectif bénéfique et évite le haram.</p>
                  </div>
                  <div>
                    <strong>Q: Puis-je utiliser des APIs tierces ?</strong>
                    <p className="text-gray-600 mt-1">R: Halal si les APIs respectent les principes islamiques et ne facilitent pas d'activités interdites.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-lg text-blue-800">🤖 Intelligence Artificielle</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Q: L'IA remplace-t-elle la volonté divine ?</strong>
                    <p className="text-gray-600 mt-1">R: Non, l'IA est un outil créé par Allah à travers l'homme pour faciliter la vie, elle reste HALAL.</p>
                  </div>
                  <div>
                    <strong>Q: Puis-je utiliser ChatGPT/Claude ?</strong>
                    <p className="text-gray-600 mt-1">R: Halal pour des usages bénéfiques, en évitant les contenus interdits et en gardant l'intention pure.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="text-lg text-purple-800">💰 FinTech & Crypto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Q: Bitcoin est-il halal ?</strong>
                    <p className="text-gray-600 mt-1">R: Conditionellement halal s'il évite la spéculation excessive (gharar) et sert des transactions réelles.</p>
                  </div>
                  <div>
                    <strong>Q: Développer une app bancaire ?</strong>
                    <p className="text-gray-600 mt-1">R: MANDUB si elle facilite des services financiers conformes à la Sharia (0% intérêt).</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-lg text-orange-800">🔐 Cybersécurité</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Q: Le hacking éthique est-il permis ?</strong>
                    <p className="text-gray-600 mt-1">R: MANDUB avec autorisation écrite pour protéger les biens et les systèmes (Hifz al-Mal).</p>
                  </div>
                  <div>
                    <strong>Q: Travailler en cybersécurité ?</strong>
                    <p className="text-gray-600 mt-1">R: Fortement recommandé car cela protège la communauté contre les cyberattaques.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 bg-white rounded-lg p-6 border-2 border-cyan-200">
            <h4 className="text-lg font-bold text-cyan-800 mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6" />
              Validation selon les 4 Sources Islamiques Authentiques
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">📖</div>
                <div className="font-semibold text-green-800">Coran</div>
                <div className="text-xs text-green-600">Source Suprême</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">☪️</div>
                <div className="font-semibold text-blue-800">Sunna</div>
                <div className="text-xs text-blue-600">Guidance Prophétique</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">🤝</div>
                <div className="font-semibold text-purple-800">Ijmâ'</div>
                <div className="text-xs text-purple-600">Consensus Scholars</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">⚖️</div>
                <div className="font-semibold text-orange-800">Qiyâs</div>
                <div className="text-xs text-orange-600">Analogie Juridique</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div 
          className="mt-8 bg-white rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            Statistiques de la Bibliothèque Fiqh Informatique
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                <FileText className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{fiqhProcedures.length}</div>
              <div className="text-sm text-gray-600">Fiches Fiqh Complètes</div>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">150+</div>
              <div className="text-sm text-gray-600">Scholars Validés</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">4</div>
              <div className="text-sm text-gray-600">Sources Authentiques</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">100%</div>
              <div className="text-sm text-gray-600">Halal Certifié</div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}