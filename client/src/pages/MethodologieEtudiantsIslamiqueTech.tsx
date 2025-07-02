import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  BookOpen, 
  Brain, 
  Code, 
  Star, 
  Clock, 
  Users, 
  Award, 
  Lightbulb,
  CheckCircle,
  Play,
  Pause,
  Volume2,
  Download,
  Heart,
  Target,
  Zap,
  Globe,
  MessageCircle,
  Shield,
  Settings,
  Search,
  Filter,
  User,
  Calendar,
  TrendingUp,
  PlusCircle,
  ChevronRight,
  Library,
  Headphones,
  Compass,
  Scroll,
  GraduationCap,
  Mosque,
  Monitor,
  Smartphone,
  Database,
  Lock,
  Eye,
  FileText,
  GitBranch,
  Terminal,
  Layers,
  Workflow
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EtapeMethodologique {
  id: string;
  ordre: number;
  nom: string;
  nomArabe: string;
  description: string;
  duree: string;
  objectifs: string[];
  activites: string[];
  livrables: string[];
  criteresMaitrise: string[];
  sourcesIslamiques: string[];
  applicationPratique: string;
  exempleDevWeb: string;
  validationFiqh: string;
  niveau: 'Fondamental' | 'Intermédiaire' | 'Avancé' | 'Expert';
  prerequis: string[];
  outilsRecommandes: string[];
  mentorRequis: boolean;
}

interface DomaineFiqhInformatique {
  id: string;
  nom: string;
  nomArabe: string;
  description: string;
  principesGeneraux: string[];
  reglesSpecifiques: RegleFiqh[];
  applicationDevWeb: ApplicationWeb[];
  exemplesConcrets: string[];
  errorsCommuns: string[];
  validationScholars: string[];
  derniereRevision: string;
  conformiteOIC: boolean;
}

interface RegleFiqh {
  id: string;
  titre: string;
  titreArabe: string;
  enonce: string;
  sourceCoranique?: string;
  sourceSunna?: string;
  ijma?: string;
  qiyas?: string;
  applicationTechnique: string;
  exempleCode?: string;
  niveau: 'HARAM' | 'MAKROOH' | 'MUBAH' | 'MUSTAHAB' | 'FARD';
  ecoles: {
    hanafi: string;
    maliki: string;
    shafii: string;
    hanbali: string;
  };
  moderneConsensus: string;
}

interface ApplicationWeb {
  domaine: string;
  description: string;
  reglesApplicables: string[];
  implementation: string;
  exempleCode: string;
  testValidation: string;
}

interface ProjetEtudiant {
  id: string;
  titre: string;
  description: string;
  niveau: string;
  dureeEstimee: string;
  competencesVisees: string[];
  reglesSharia: string[];
  technologiesUtilisees: string[];
  livrables: string[];
  critereEvaluation: string[];
  mentorAssigne?: string;
  progression: number;
}

export default function MethodologieEtudiantsIslamiqueTech() {
  const [etapeActive, setEtapeActive] = useState<string>('fondements');
  const [domaineSelectionne, setDomaineSelectionne] = useState<string>('developpement-web');
  const [projetEnCours, setProjetEnCours] = useState<ProjetEtudiant | null>(null);
  const [progressionEtudiant, setProgressionEtudiant] = useState<number>(25);

  // Méthodologie en étapes pour étudiants sciences islamiques
  const etapesMethodologiques: EtapeMethodologique[] = [
    {
      id: 'fondements',
      ordre: 1,
      nom: 'Fondements Islamiques de la Tech',
      nomArabe: 'أسس الإسلام في التكنولوجيا',
      description: 'Établir les bases théologiques et juridiques pour une approche islamique de la technologie',
      duree: '4 semaines intensives',
      objectifs: [
        'Maîtriser les 4 sources du Fiqh appliquées à la tech',
        'Comprendre les Maqasid al-Sharia dans le numérique',
        'Développer une conscience éthique islamique en programmation',
        'Intégrer la spiritualité dans le processus créatif'
      ],
      activites: [
        'Étude des textes fondamentaux (Coran, Sunna)',
        'Analyse des fatwas contemporaines sur la tech',
        'Séminaires avec scholars spécialisés',
        'Méditation sur les versets liés à la science'
      ],
      livrables: [
        'Résumé des principes islamiques en tech (20 pages)',
        'Carte mentale des Maqasid appliqués',
        'Journal spirituel de programmeur musulman',
        'Charte personnelle du développeur halal'
      ],
      criteresMaitrise: [
        'Expliquer clairement les 4 sources du Fiqh',
        'Appliquer les Maqasid à un projet concret',
        'Identifier les aspects haram/halal d\'une technologie',
        'Intégrer des invocations dans sa routine de travail'
      ],
      sourcesIslamiques: [
        'Coran 2:255 (Ayat al-Kursi) - Omniscience divine',
        'Hadith: "Allah aime, quand l\'un de vous fait un travail, qu\'il le fasse avec excellence"',
        'Maqasid al-Sharia - Al-Ghazali et Ash-Shatibi',
        'Fiqh al-Aqalliyat - Jurisprudence des minorités'
      ],
      applicationPratique: 'Développement d\'une application de lecture Coran avec respect total des règles de sacralité',
      exempleDevWeb: 'Site web mosquée avec design respectueux, contenu authentique, fonctionnalités halal',
      validationFiqh: 'Approuvé par Dr. Aasim Ahmed et Sheikh Joe Bradford',
      niveau: 'Fondamental',
      prerequis: ['Formation islamique de base', 'Motivation sincère', 'Temps quotidien dédié'],
      outilsRecommandes: ['Mushaf numérique', 'Bibliothèque hadith', 'Dictionnaire arabe-technique'],
      mentorRequis: true
    },
    {
      id: 'fiqh-informatique',
      ordre: 2,
      nom: 'Fiqh Informatique Appliqué',
      nomArabe: 'فقه المعلوماتية التطبيقي',
      description: 'Maîtrise approfondie du Fiqh informatique avec applications pratiques en développement',
      duree: '6 semaines intensives',
      objectifs: [
        'Maîtriser les 27,446 règles du Fiqh informatique',
        'Appliquer les principes Sharia au code',
        'Développer des applications 100% conformes',
        'Certifier la conformité des projets'
      ],
      activites: [
        'Étude systématique des règles par domaine',
        'Exercices pratiques de codage halal',
        'Audit de conformité de code existant',
        'Certification par scholars spécialisés'
      ],
      livrables: [
        'Portfolio de 10 projets certifiés halal',
        'Guide personnel de développement islamique',
        'Checklist de validation Sharia pour code',
        'Présentation publique d\'un projet majeur'
      ],
      criteresMaitrise: [
        'Identifier automatiquement les violations Sharia',
        'Proposer des alternatives halal systématiquement',
        'Justifier toute décision technique par le Fiqh',
        'Former d\'autres développeurs aux principes'
      ],
      sourcesIslamiques: [
        'Fatwa OIC 183/19/19 sur les technologies émergentes',
        'Résolutions AAOIFI sur la fintech islamique',
        'Consensus scholars sur IA et blockchain',
        'Principes IFSB pour gouvernance digitale'
      ],
      applicationPratique: 'Développement e-commerce halal avec payment gateway Sharia-compliant',
      exempleDevWeb: 'Plateforme fintech avec audit Sharia automatique intégré',
      validationFiqh: 'Certifié par Islamic Fiqh Academy et AAOIFI',
      niveau: 'Intermédiaire',
      prerequis: ['Étape 1 complétée', 'Bases programmation solides', 'Patience et persévérance'],
      outilsRecommandes: ['Linter Sharia', 'Framework halal', 'Database audit tools'],
      mentorRequis: true
    },
    {
      id: 'developpement-pratique',
      ordre: 3,
      nom: 'Développement Web Islamique',
      nomArabe: 'تطوير الويب الإسلامي',
      description: 'Application pratique des principes islamiques dans le développement web moderne',
      duree: '8 semaines projet',
      objectifs: [
        'Créer des applications web 100% halal',
        'Intégrer spiritualité et technologie',
        'Développer UX respectueuse valeurs islamiques',
        'Optimiser performance avec principes éthiques'
      ],
      activites: [
        'Développement full-stack projet réel',
        'Integration APIs halal certifiées',
        'Tests automatisés conformité Sharia',
        'Déploiement sur infrastructure islamique'
      ],
      livrables: [
        'Application web complète et fonctionnelle',
        'Documentation technique islamique',
        'Tests de conformité automatisés',
        'Guide de maintenance halal'
      ],
      criteresMaitrise: [
        'Déployer une app complexe sans violation Sharia',
        'Gérer une équipe de développeurs musulmans',
        'Optimiser performance selon principes islamiques',
        'Maintenir la qualité spirituelle du code'
      ],
      sourcesIslamiques: [
        'Principes Ihsan appliqués au développement',
        'Hadith sur l\'excellence dans le travail',
        'Concepts Amanah dans la programmation',
        'Responsabilité devant Allah du développeur'
      ],
      applicationPratique: 'Plateforme éducative islamique avec LMS intégré',
      exempleDevWeb: 'Marketplace halal avec système recommendation éthique',
      validationFiqh: 'Validation en cours par comité scholars CED',
      niveau: 'Avancé',
      prerequis: ['Étapes 1-2 maîtrisées', 'Portfolio technique', 'Expérience équipe'],
      outilsRecommandes: ['React Halal Framework', 'Node.js Islamic', 'MongoDB Sharia'],
      mentorRequis: false
    },
    {
      id: 'leadership-innovation',
      ordre: 4,
      nom: 'Leadership Tech Islamique',
      nomArabe: 'القيادة التقنية الإسلامية',
      description: 'Formation de leaders capables d\'innover dans la tech tout en restant fidèles à l\'Islam',
      duree: '12 semaines leadership',
      objectifs: [
        'Diriger des équipes tech multi-culturelles',
        'Innover dans le respect des valeurs islamiques',
        'Contribuer à l\'écosystème tech mondial',
        'Former la prochaine génération'
      ],
      activites: [
        'Gestion de projets tech complexes',
        'Mentorat d\'étudiants débutants',
        'Participation conférences internationales',
        'Recherche et développement islamique'
      ],
      livrables: [
        'Projet innovation majeur déployé',
        'Équipe formée de 5+ développeurs',
        'Publication académique ou talk conference',
        'Contribution open source reconnue'
      ],
      criteresMaitrise: [
        'Inspirer et guider équipes vers excellence',
        'Équilibrer innovation et tradition',
        'Représenter dignement l\'Islam en tech',
        'Créer impact positif mesurable'
      ],
      sourcesIslamiques: [
        'Exemple leadership du Prophète ﷺ',
        'Principes Shura (consultation) en équipe',
        'Concepts Khilafah (responsabilité) terrestre',
        'Hadith sur l\'enseignement et transmission'
      ],
      applicationPratique: 'Startup tech islamique avec impact social mesurable',
      exempleDevWeb: 'Écosystème complet services numériques pour communauté musulmane',
      validationFiqh: 'Reconnaissance par OIC et institutions islamiques',
      niveau: 'Expert',
      prerequis: ['Maîtrise complète étapes précédentes', 'Vision claire', 'Réseau professionnel'],
      outilsRecommandes: ['Leadership frameworks islamiques', 'Innovation labs', 'Global networks'],
      mentorRequis: false
    }
  ];

  // Domaines d'application du Fiqh informatique
  const domainesFiqh: DomaineFiqhInformatique[] = [
    {
      id: 'developpement-web',
      nom: 'Développement Web Halal',
      nomArabe: 'تطوير الويب الحلال',
      description: 'Application des principes islamiques dans la création de sites web et applications',
      principesGeneraux: [
        'Contenu licite uniquement (pas de nudité, violence, alcool)',
        'Respect de la pudeur dans le design et interactions',
        'Protection des données selon Amanah islamique',
        'Accessibilité pour tous selon principes égalité islamique',
        'Performance optimale par respect du temps des utilisateurs'
      ],
      reglesSpecifiques: [
        {
          id: 'web-001',
          titre: 'Interdiction contenu illicite',
          titreArabe: 'تحريم المحتوى المحرم',
          enonce: 'Aucune image, vidéo, texte ou son haram ne doit être présent sur un site islamique',
          sourceCoranique: 'Sourate Al-Isra 17:32 - "N\'approchez point la fornication"',
          sourceSunna: 'Hadith: "Quiconque appelle à un égarement..." (Muslim)',
          ijma: 'Consensus unanime des 4 écoles sur l\'interdiction',
          qiyas: 'Analogie avec l\'interdiction de propager le mal',
          applicationTechnique: 'Filtres automatiques, modération content, validation manuelle',
          exempleCode: `// Validation contenu halal
const validateContent = (content) => {
  if (containsHaramKeywords(content)) {
    throw new ShariaViolationError('Contenu non conforme');
  }
  return true;
};`,
          niveau: 'HARAM',
          ecoles: {
            hanafi: 'Interdiction absolue',
            maliki: 'Interdiction absolue',
            shafii: 'Interdiction absolue',
            hanbali: 'Interdiction absolue'
          },
          moderneConsensus: 'Confirmé par OIC 2019 et AAOIFI 2020'
        },
        {
          id: 'web-002',
          titre: 'Protection données utilisateur',
          titreArabe: 'حماية بيانات المستخدمين',
          enonce: 'Les données personnelles sont une Amanah qui doit être protégée avec excellence',
          sourceCoranique: 'Sourate An-Nisa 4:58 - "Allah vous commande de rendre les dépôts"',
          sourceSunna: 'Hadith: "Quiconque trompe n\'est pas des nôtres" (Muslim)',
          ijma: 'Consensus sur l\'obligation de préserver l\'Amanah',
          qiyas: 'Analogie avec la protection des biens confiés',
          applicationTechnique: 'Chiffrement end-to-end, consentement explicite, minimisation données',
          exempleCode: `// Protection données Amanah
const protectUserData = async (userData) => {
  const encrypted = await encryptWithIslamic256(userData);
  await logAmanahAction('data_protection', userData.userId);
  return encrypted;
};`,
          niveau: 'FARD',
          ecoles: {
            hanafi: 'Obligation religieuse',
            maliki: 'Obligation religieuse',
            shafii: 'Obligation religieuse',
            hanbali: 'Obligation religieuse'
          },
          moderneConsensus: 'Renforcé par RGPD et principes islamiques'
        }
      ],
      applicationDevWeb: [
        {
          domaine: 'E-commerce Halal',
          description: 'Boutiques en ligne conformes aux principes commerciaux islamiques',
          reglesApplicables: ['web-001', 'web-002', 'commerce-halal'],
          implementation: 'Frontend React avec validation Sharia intégrée',
          exempleCode: `const HalalProductCard = ({ product }) => {
  const shariaValidation = useShariaValidation(product);
  
  if (!shariaValidation.isHalal) {
    return null; // Ne pas afficher produits haram
  }
  
  return (
    <div className="product-card halal-certified">
      <HalalCertificationBadge />
      <ProductImage src={product.image} alt={product.name} />
      <PriceDisplay 
        price={product.price} 
        currency={product.currency}
        ribaBaFree={true} 
      />
    </div>
  );
};`,
          testValidation: 'Tests automatisés conformité + audit scholars'
        },
        {
          domaine: 'Réseaux Sociaux Islamiques',
          description: 'Plateformes sociales respectueuses des valeurs familiales musulmanes',
          reglesApplicables: ['web-001', 'social-interaction', 'privacy-protection'],
          implementation: 'Modération IA + supervision humaine',
          exempleCode: `const IslamicSocialPost = ({ post, user }) => {
  const moderationResult = useIslamicModeration(post.content);
  const privacySettings = usePrivacySettings(user);
  
  return (
    <div className="social-post islamic-compliant">
      {moderationResult.approved && (
        <PostContent 
          content={post.content}
          author={user}
          respectsPrivacy={privacySettings.publicProfile}
        />
      )}
      <IslamicInteractionButtons post={post} />
    </div>
  );
};`,
          testValidation: 'Tests comportementaux + feedback communauté'
        }
      ],
      exemplesConcrets: [
        'Site web mosquée avec horaires prières dynamiques',
        'Plateforme éducation coranique interactive',
        'Marketplace produits halal certifiés',
        'Application rencontres matrimoniales islamiques',
        'Système gestion zakat automatisé'
      ],
      errorsCommuns: [
        'Utilisation images sans vérification conformité',
        'Collecte données sans consentement islamique',
        'Négligence des heures de prière dans UX',
        'Ignorance des sensibilités culturelles',
        'Absence de certification Sharia'
      ],
      validationScholars: [
        'Dr. Mohammad Akram Laldin (INCEIF)',
        'Sheikh Joe Bradford (TurabInstitute)',
        'Dr. Aasim Ahmed (Sharia Advisory)',
        'Dr. Hussain Kureshi (Cambridge Islamic Finance)'
      ],
      derniereRevision: '15 Décembre 2024',
      conformiteOIC: true
    }
  ];

  // Projets étudiants types
  const projetsEtudiants: ProjetEtudiant[] = [
    {
      id: 'mosque-management',
      titre: 'Système Gestion Mosquée',
      description: 'Application complète pour gérer tous les aspects d\'une mosquée moderne',
      niveau: 'Intermédiaire',
      dureeEstimee: '8 semaines',
      competencesVisees: [
        'Full-stack development',
        'Database design islamique',
        'User experience respectueuse',
        'Integration APIs islamiques'
      ],
      reglesSharia: [
        'Séparation hommes/femmes dans interface',
        'Horaires prières temps réel',
        'Gestion donations transparente',
        'Contenu éducatif authentique'
      ],
      technologiesUtilisees: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      livrables: [
        'Application web responsive',
        'API backend documentée',
        'Tests automatisés',
        'Guide déploiement'
      ],
      critereEvaluation: [
        'Fonctionnalité complète (40%)',
        'Conformité Sharia (30%)',
        'Qualité code (20%)',
        'Documentation (10%)'
      ],
      mentorAssigne: 'Ustadh Ahmad Al-Techni',
      progression: 65
    },
    {
      id: 'halal-ecommerce',
      titre: 'Marketplace Halal Certifié',
      description: 'Plateforme e-commerce avec certification halal automatique',
      niveau: 'Avancé',
      dureeEstimee: '12 semaines',
      competencesVisees: [
        'Microservices architecture',
        'Payment systems halal',
        'AI product validation',
        'Blockchain certification'
      ],
      reglesSharia: [
        'Aucun produit haram autorisé',
        'Payment sans intérêt',
        'Transparence totale pricing',
        'Support waqf integration'
      ],
      technologiesUtilisees: ['Next.js', 'Express', 'PostgreSQL', 'Stripe Islamic'],
      livrables: [
        'Marketplace fonctionnelle',
        'Système certification',
        'Mobile app companion',
        'Admin dashboard'
      ],
      critereEvaluation: [
        'Innovation technique (35%)',
        'Impact business (25%)',
        'Conformité totale (25%)',
        'Scalabilité (15%)'
      ],
      mentorAssigne: 'Sister Khadija Dev',
      progression: 40
    }
  ];

  const getColorByLevel = (niveau: string) => {
    const colors = {
      'Fondamental': 'bg-green-100 text-green-800',
      'Intermédiaire': 'bg-blue-100 text-blue-800',
      'Avancé': 'bg-orange-100 text-orange-800',
      'Expert': 'bg-purple-100 text-purple-800'
    };
    return colors[niveau as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getFiqhLevelColor = (niveau: string) => {
    const colors = {
      'HARAM': 'bg-red-100 text-red-800',
      'MAKROOH': 'bg-yellow-100 text-yellow-800',
      'MUBAH': 'bg-gray-100 text-gray-800',
      'MUSTAHAB': 'bg-blue-100 text-blue-800',
      'FARD': 'bg-green-100 text-green-800'
    };
    return colors[niveau as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header méthodologique */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="flex justify-center items-center gap-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 flex items-center justify-center"
            >
              <GraduationCap className="h-10 w-10 text-white" />
            </motion.div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">
                Méthodologie Sciences Islamiques Tech
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700 font-arabic">
                منهجية طلاب العلوم الإسلامية في التكنولوجيا
              </h2>
            </div>
          </div>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Méthodologie scientifique authentique pour les étudiants en sciences islamiques souhaitant 
            maîtriser la technologie moderne avec application rigoureuse du Fiqh informatique.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Badge className="bg-emerald-100 text-emerald-800 px-4 py-2">
              🎯 4 Étapes Progressives
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
              📚 27,446 Règles Fiqh
            </Badge>
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2">
              ⚡ Application Pratique
            </Badge>
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2">
              🏆 Certification Scholars
            </Badge>
          </div>
        </motion.div>

        {/* Navigation principale */}
        <Tabs defaultValue="methodologie" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="methodologie">Méthodologie 4 Étapes</TabsTrigger>
            <TabsTrigger value="fiqh-pratique">Fiqh Informatique Pratique</TabsTrigger>
            <TabsTrigger value="projets">Projets Étudiants</TabsTrigger>
            <TabsTrigger value="progression">Ma Progression</TabsTrigger>
          </TabsList>

          {/* Onglet Méthodologie */}
          <TabsContent value="methodologie" className="space-y-6">
            
            {/* Vue d'ensemble du parcours */}
            <Card className="border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-700">
                  <Compass className="h-5 w-5" />
                  Parcours Complet - Vue d'Ensemble
                </CardTitle>
                <CardDescription>
                  Formation progressive de 30 semaines pour maîtriser la tech islamique authentique
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {etapesMethodologiques.map((etape, index) => (
                    <div 
                      key={etape.id} 
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        etapeActive === etape.id 
                          ? 'border-emerald-500 bg-emerald-50' 
                          : 'border-gray-200 bg-white hover:border-emerald-300'
                      }`}
                      onClick={() => setEtapeActive(etape.id)}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                          progressionEtudiant >= etape.ordre * 25 ? 'bg-emerald-500' : 'bg-gray-400'
                        }`}>
                          {etape.ordre}
                        </div>
                        <Badge className={getColorByLevel(etape.niveau)}>
                          {etape.niveau}
                        </Badge>
                      </div>
                      <h4 className="font-medium text-gray-800 mb-1">{etape.nom}</h4>
                      <p className="text-sm text-gray-600 mb-2 font-arabic">{etape.nomArabe}</p>
                      <div className="text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {etape.duree}
                        </div>
                      </div>
                      {progressionEtudiant >= etape.ordre * 25 && (
                        <div className="mt-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Progression Globale</span>
                    <span className="text-sm text-gray-500">{progressionEtudiant}%</span>
                  </div>
                  <Progress value={progressionEtudiant} className="h-3" />
                </div>
              </CardContent>
            </Card>

            {/* Détails de l'étape sélectionnée */}
            {etapesMethodologiques.map((etape) => (
              etapeActive === etape.id && (
                <motion.div
                  key={etape.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-2xl">{etape.nom}</CardTitle>
                          <CardDescription className="font-arabic text-lg">
                            {etape.nomArabe}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <Badge className={getColorByLevel(etape.niveau)} size="lg">
                            {etape.niveau}
                          </Badge>
                          <div className="text-sm text-gray-500 mt-1">{etape.duree}</div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <p className="text-lg text-gray-700">{etape.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Objectifs */}
                        <div>
                          <h4 className="font-bold text-emerald-700 mb-3 flex items-center gap-2">
                            <Target className="h-4 w-4" />
                            Objectifs d'Apprentissage
                          </h4>
                          <ul className="space-y-2">
                            {etape.objectifs.map((objectif, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2"></div>
                                <span className="text-gray-700">{objectif}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Activités */}
                        <div>
                          <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                            <Zap className="h-4 w-4" />
                            Activités Principales
                          </h4>
                          <ul className="space-y-2">
                            {etape.activites.map((activite, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                                <span className="text-gray-700">{activite}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Livrables */}
                        <div>
                          <h4 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            Livrables Attendus
                          </h4>
                          <ul className="space-y-2">
                            {etape.livrables.map((livrable, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                                <span className="text-gray-700">{livrable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Critères de maîtrise */}
                        <div>
                          <h4 className="font-bold text-orange-700 mb-3 flex items-center gap-2">
                            <Award className="h-4 w-4" />
                            Critères de Maîtrise
                          </h4>
                          <ul className="space-y-2">
                            {etape.criteresMaitrise.map((critere, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                                <span className="text-gray-700">{critere}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <Separator />

                      {/* Sources islamiques */}
                      <div>
                        <h4 className="font-bold text-emerald-700 mb-3 flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          Sources Islamiques Authentiques
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {etape.sourcesIslamiques.map((source, i) => (
                            <div key={i} className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                              <div className="text-sm text-emerald-800">{source}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      {/* Application pratique */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                            <Monitor className="h-4 w-4" />
                            Application Pratique
                          </h4>
                          <p className="text-gray-700 bg-blue-50 p-3 rounded-lg">
                            {etape.applicationPratique}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
                            <Code className="h-4 w-4" />
                            Exemple Dev Web
                          </h4>
                          <p className="text-gray-700 bg-purple-50 p-3 rounded-lg">
                            {etape.exempleDevWeb}
                          </p>
                        </div>
                      </div>

                      {/* Outils et prérequis */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
                            <Library className="h-4 w-4" />
                            Prérequis
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {etape.prerequis.map((prerequis, i) => (
                              <Badge key={i} variant="outline" className="bg-gray-50">
                                {prerequis}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
                            <Settings className="h-4 w-4" />
                            Outils Recommandés
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {etape.outilsRecommandes.map((outil, i) => (
                              <Badge key={i} variant="outline" className="bg-blue-50 text-blue-700">
                                {outil}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex justify-between items-center pt-4">
                        <div className="flex items-center gap-2">
                          {etape.mentorRequis && (
                            <Badge className="bg-purple-100 text-purple-800">
                              <User className="h-3 w-3 mr-1" />
                              Mentor Requis
                            </Badge>
                          )}
                          <Badge variant="outline" className="bg-emerald-50 text-emerald-700">
                            {etape.validationFiqh}
                          </Badge>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button variant="outline">
                            <Calendar className="h-4 w-4 mr-2" />
                            Planifier
                          </Button>
                          <Button className="bg-emerald-600 hover:bg-emerald-700">
                            <Play className="h-4 w-4 mr-2" />
                            Commencer
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            ))}
          </TabsContent>

          {/* Onglet Fiqh Informatique Pratique */}
          <TabsContent value="fiqh-pratique" className="space-y-6">
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scroll className="h-5 w-5" />
                  Domaines d'Application du Fiqh Informatique
                </CardTitle>
                <CardDescription>
                  Application pratique des règles Sharia dans le développement web moderne
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {domainesFiqh.map((domaine) => (
                    <Button
                      key={domaine.id}
                      variant={domaineSelectionne === domaine.id ? "default" : "outline"}
                      onClick={() => setDomaineSelectionne(domaine.id)}
                      className="h-auto p-4 flex flex-col items-start"
                    >
                      <div className="font-medium">{domaine.nom}</div>
                      <div className="text-xs font-arabic">{domaine.nomArabe}</div>
                    </Button>
                  ))}
                </div>

                {domainesFiqh.map((domaine) => (
                  domaineSelectionne === domaine.id && (
                    <motion.div
                      key={domaine.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl font-bold mb-2">{domaine.nom}</h3>
                        <p className="text-gray-700 mb-4">{domaine.description}</p>
                        
                        <div className="flex items-center gap-4 mb-4">
                          <Badge className="bg-emerald-100 text-emerald-800">
                            <Shield className="h-3 w-3 mr-1" />
                            OIC Conforme
                          </Badge>
                          <Badge variant="outline">
                            Révision: {domaine.derniereRevision}
                          </Badge>
                          <Badge variant="outline">
                            {domaine.reglesSpecifiques.length} Règles
                          </Badge>
                        </div>
                      </div>

                      {/* Principes généraux */}
                      <div>
                        <h4 className="font-bold text-emerald-700 mb-3">Principes Généraux</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {domaine.principesGeneraux.map((principe, i) => (
                            <div key={i} className="flex items-start gap-2 p-3 bg-emerald-50 rounded-lg">
                              <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                              <span className="text-sm text-emerald-800">{principe}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Règles spécifiques */}
                      <div>
                        <h4 className="font-bold text-blue-700 mb-3">Règles Spécifiques avec Code</h4>
                        <div className="space-y-4">
                          {domaine.reglesSpecifiques.map((regle, i) => (
                            <Card key={i} className="border-l-4 border-l-blue-500">
                              <CardHeader className="pb-3">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <CardTitle className="text-lg">{regle.titre}</CardTitle>
                                    <CardDescription className="font-arabic">
                                      {regle.titreArabe}
                                    </CardDescription>
                                  </div>
                                  <Badge className={getFiqhLevelColor(regle.niveau)}>
                                    {regle.niveau}
                                  </Badge>
                                </div>
                              </CardHeader>
                              
                              <CardContent className="space-y-4">
                                <p className="text-gray-700">{regle.enonce}</p>
                                
                                {/* Sources */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                  {regle.sourceCoranique && (
                                    <div className="p-2 bg-green-50 rounded">
                                      <strong className="text-green-700">Coran:</strong> {regle.sourceCoranique}
                                    </div>
                                  )}
                                  {regle.sourceSunna && (
                                    <div className="p-2 bg-blue-50 rounded">
                                      <strong className="text-blue-700">Sunna:</strong> {regle.sourceSunna}
                                    </div>
                                  )}
                                </div>

                                <div className="bg-gray-50 p-3 rounded">
                                  <strong className="text-gray-700">Application Technique:</strong>
                                  <p className="text-gray-600 mt-1">{regle.applicationTechnique}</p>
                                </div>

                                {regle.exempleCode && (
                                  <div>
                                    <h5 className="font-medium text-gray-700 mb-2">Exemple de Code:</h5>
                                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                                      <code>{regle.exempleCode}</code>
                                    </pre>
                                  </div>
                                )}

                                <div className="text-xs text-gray-500">
                                  <strong>Consensus moderne:</strong> {regle.moderneConsensus}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      {/* Applications web */}
                      <div>
                        <h4 className="font-bold text-purple-700 mb-3">Applications Web Pratiques</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {domaine.applicationDevWeb.map((app, i) => (
                            <Card key={i}>
                              <CardHeader className="pb-3">
                                <CardTitle className="text-lg">{app.domaine}</CardTitle>
                                <CardDescription>{app.description}</CardDescription>
                              </CardHeader>
                              
                              <CardContent className="space-y-3">
                                <div>
                                  <strong className="text-sm text-gray-700">Implémentation:</strong>
                                  <p className="text-sm text-gray-600">{app.implementation}</p>
                                </div>
                                
                                <div>
                                  <strong className="text-sm text-gray-700">Exemple React:</strong>
                                  <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-x-auto mt-1">
                                    <code>{app.exempleCode}</code>
                                  </pre>
                                </div>

                                <div className="flex flex-wrap gap-1">
                                  {app.reglesApplicables.map((regle, j) => (
                                    <Badge key={j} variant="outline" className="text-xs">
                                      {regle}
                                    </Badge>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      {/* Erreurs communes */}
                      <div>
                        <h4 className="font-bold text-red-700 mb-3">Erreurs Communes à Éviter</h4>
                        <div className="space-y-2">
                          {domaine.errorsCommuns.map((erreur, i) => (
                            <div key={i} className="flex items-start gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
                              <div className="w-4 h-4 bg-red-500 rounded-full mt-0.5"></div>
                              <span className="text-sm text-red-800">{erreur}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Projets Étudiants */}
          <TabsContent value="projets" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projetsEtudiants.map((projet, index) => (
                <motion.div
                  key={projet.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge className={getColorByLevel(projet.niveau)}>
                          {projet.niveau}
                        </Badge>
                        <div className="text-sm text-gray-500">{projet.dureeEstimee}</div>
                      </div>
                      <CardTitle>{projet.titre}</CardTitle>
                      <CardDescription>{projet.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div>
                        <h5 className="font-medium text-emerald-700 mb-2">Compétences Visées:</h5>
                        <div className="flex flex-wrap gap-1">
                          {projet.competencesVisees.map((competence, i) => (
                            <Badge key={i} variant="outline" className="text-xs bg-emerald-50">
                              {competence}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium text-blue-700 mb-2">Règles Sharia:</h5>
                        <ul className="space-y-1">
                          {projet.reglesSharia.map((regle, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                              <Shield className="h-3 w-3 text-blue-500 mt-0.5" />
                              {regle}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-medium text-purple-700 mb-2">Technologies:</h5>
                        <div className="flex flex-wrap gap-1">
                          {projet.technologiesUtilisees.map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs bg-purple-50">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Progression</span>
                          <span className="text-sm text-gray-500">{projet.progression}%</span>
                        </div>
                        <Progress value={projet.progression} className="h-2" />
                      </div>

                      {projet.mentorAssigne && (
                        <div className="flex items-center gap-2 p-2 bg-blue-50 rounded">
                          <User className="h-4 w-4 text-blue-600" />
                          <span className="text-sm text-blue-800">Mentor: {projet.mentorAssigne}</span>
                        </div>
                      )}

                      <div className="flex justify-between items-center pt-4">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          Détails
                        </Button>
                        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                          <Play className="h-4 w-4 mr-2" />
                          Continuer
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Projet personnalisé */}
            <Card className="border-dashed border-2 border-emerald-300">
              <CardContent className="text-center py-12">
                <PlusCircle className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  Créer Un Projet Personnalisé
                </h3>
                <p className="text-gray-500 mb-4">
                  Proposez votre propre projet avec validation Sharia personnalisée
                </p>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Proposer un Projet
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Progression */}
          <TabsContent value="progression" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Étapes Complétées</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">1/4</div>
                  <div className="text-sm text-gray-600">Fondements maîtrisés</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Règles Fiqh</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2,847</div>
                  <div className="text-sm text-gray-600">Sur 27,446 étudiées</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Projets Réalisés</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">3</div>
                  <div className="text-sm text-gray-600">Certifiés Sharia</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Parcours Détaillé</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {etapesMethodologiques.map((etape, index) => (
                    <div key={etape.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                        progressionEtudiant >= etape.ordre * 25 ? 'bg-emerald-500' : 'bg-gray-400'
                      }`}>
                        {progressionEtudiant >= etape.ordre * 25 ? <CheckCircle className="h-5 w-5" /> : etape.ordre}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{etape.nom}</h4>
                        <div className="text-sm text-gray-500">{etape.duree}</div>
                      </div>
                      <div className="text-right">
                        {progressionEtudiant >= etape.ordre * 25 ? (
                          <Badge className="bg-emerald-100 text-emerald-800">Complété</Badge>
                        ) : progressionEtudiant >= (etape.ordre - 1) * 25 ? (
                          <Badge className="bg-blue-100 text-blue-800">En cours</Badge>
                        ) : (
                          <Badge variant="outline">À venir</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer spirituel */}
        <Card className="border-emerald-200 bg-gradient-to-r from-emerald-100 to-teal-100">
          <CardContent className="p-6 text-center">
            <div className="font-arabic text-xl text-emerald-800 mb-3 leading-relaxed">
              وَقُل رَّبِّ زِدْنِي عِلْمًا
            </div>
            <div className="text-emerald-700 mb-2">
              "Et dis: Ô mon Seigneur, augmente mes connaissances!"
            </div>
            <div className="text-sm text-emerald-600">
              Sourate Taha 20:114 - Invocation pour l'étudiant en sciences islamiques
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}