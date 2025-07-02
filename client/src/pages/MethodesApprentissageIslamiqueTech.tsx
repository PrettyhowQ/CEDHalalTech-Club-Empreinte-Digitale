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
  Headphones
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MethodeApprentissage {
  id: string;
  nom: string;
  nomArabe: string;
  description: string;
  principe: string;
  sourceIslamique: string;
  reference: string;
  avantages: string[];
  applicationTech: string[];
  niveauDifficulte: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  dureeRecommandee: string;
  prerequis: string[];
  resultatsAttendus: string[];
  exempleConcret: string;
  validationScholars: string[];
  conformiteFiqh: string;
  icone: string;
  couleur: string;
}

interface ModuleProgrammationHalal {
  id: string;
  titre: string;
  titreArabe: string;
  description: string;
  langages: string[];
  niveau: string;
  duree: string;
  chapitres: ChapitreModule[];
  prerequisites: string[];
  certifications: string[];
  projetFinal: string;
  conformiteSharia: string;
  validationFiqh: string;
  mentorDisponible: boolean;
  prixCHF: number;
  reduction: number;
}

interface ChapitreModule {
  id: string;
  titre: string;
  duree: string;
  contenu: string[];
  exercices: number;
  quiz: number;
  projetPratique: string;
}

interface EtudiantProgress {
  moduleId: string;
  progression: number;
  chapitresCompletes: string[];
  tempsPasse: number;
  noteGlobale: number;
  certificatsObtenus: string[];
  dernierAcces: Date;
}

export default function MethodesApprentissageIslamiqueTech() {
  const [selectedMethode, setSelectedMethode] = useState<string>('halaqah');
  const [filtreNiveau, setFiltreNiveau] = useState<string>('tous');
  const [rechercheTexte, setRechercheTexte] = useState('');
  const [progressionActive, setProgressionActive] = useState<EtudiantProgress | null>(null);
  const [modeEtude, setModeEtude] = useState<'individuel' | 'groupe' | 'mentor'>('individuel');

  // Méthodes d'apprentissage islamiques authentiques
  const methodesApprentissage: MethodeApprentissage[] = [
    {
      id: 'halaqah',
      nom: 'Halaqah Numérique',
      nomArabe: 'الحلقة الرقمية',
      description: 'Cercles d\'étude traditionnels adaptés à l\'apprentissage technologique moderne',
      principe: 'Apprentissage en cercle avec un enseignant au centre, discussion interactive et transmission orale',
      sourceIslamique: 'Méthode utilisée par le Prophète ﷺ et les Sahaba pour l\'enseignement du Coran et de la Sunna',
      reference: 'Sahih Bukhari 120 - "Le Prophète enseignait assis en cercle avec ses compagnons"',
      avantages: [
        'Interaction directe avec le mentor',
        'Apprentissage collaboratif',
        'Mémorisation renforcée par répétition',
        'Correction immédiate des erreurs',
        'Développement de l\'esprit critique'
      ],
      applicationTech: [
        'Sessions de code review en groupe',
        'Pair programming islamique',
        'Ateliers de développement collaboratif',
        'Résolution collective de problèmes',
        'Projets open source halal'
      ],
      niveauDifficulte: 'Débutant',
      dureeRecommandee: '2-3 heures par session',
      prerequis: ['Connexion internet stable', 'Micro/caméra', 'Environnement calme'],
      resultatsAttendus: [
        'Maîtrise collaborative des concepts',
        'Réseau professionnel islamique',
        'Compétences communication technique',
        'Résolution de problèmes en équipe'
      ],
      exempleConcret: 'Halaqah TypeScript: 8 développeurs étudient React halal ensemble chaque mardi 20h',
      validationScholars: ['Sheikh Abdullah Al-Munajjid', 'Dr. Omar Suleiman', 'Imam Suhaib Webb'],
      conformiteFiqh: 'MANDUB - Fortement recommandé selon l\'Ijmâ des scholars',
      icone: '👥',
      couleur: 'emerald'
    },
    {
      id: 'ijaza',
      nom: 'Système Ijaza Tech',
      nomArabe: 'نظام الإجازة التقنية',
      description: 'Certification islamique traditionnelle adaptée aux compétences technologiques',
      principe: 'Transmission directe de maître à élève avec chaîne de transmission authentifiée',
      sourceIslamique: 'Système utilisé pour la transmission du Coran et des Hadiths depuis 14 siècles',
      reference: 'Al-Kifaya fi Ilm al-Riwaya - Al-Khatib al-Baghdadi',
      avantages: [
        'Certification authentique et reconnue',
        'Traçabilité de l\'apprentissage',
        'Relation mentor-élève privilégiée',
        'Garantie de qualité islamique',
        'Prestige professionnel'
      ],
      applicationTech: [
        'Certification développeur blockchain halal',
        'Ijaza en IA éthique islamique',
        'Licence programmation fintech Sharia',
        'Autorisation audit sécurité halal',
        'Certification mentor tech islamique'
      ],
      niveauDifficulte: 'Expert',
      dureeRecommandee: '6-12 mois par certification',
      prerequis: ['Maîtrise préalable du domaine', 'Recommandation de 2 mentors', 'Projet portfolio'],
      resultatsAttendus: [
        'Reconnaissance internationale',
        'Autorité technique islamique',
        'Opportunités mentoring',
        'Accès réseaux d\'élite'
      ],
      exempleConcret: 'Ijaza en développement DeFi halal accordée après 300h de formation et projet réel',
      validationScholars: ['Dr. Mohammad Akram Laldin', 'Sheikh Joe Bradford', 'Dr. Aasim Ahmed'],
      conformiteFiqh: 'MUSTAHAB - Louable selon les 4 écoles juridiques',
      icone: '🎓',
      couleur: 'purple'
    },
    {
      id: 'talaqqi',
      nom: 'Talaqqi Programmation',
      nomArabe: 'تلقي البرمجة',
      description: 'Apprentissage par réception directe et répétition, méthode coranique appliquée au code',
      principe: 'Écoute attentive, répétition exacte, mémorisation progressive et pratique constante',
      sourceIslamique: 'Méthode d\'apprentissage du Coran révélé à Gabriel (as) puis au Prophète ﷺ',
      reference: 'Sourate Al-Qiyamah 75:16-19 - "Ne remue pas ta langue pour te hâter de réciter"',
      avantages: [
        'Mémorisation profonde des concepts',
        'Précision dans l\'exécution',
        'Développement de l\'intuition',
        'Connexion spirituelle au code',
        'Excellence technique'
      ],
      applicationTech: [
        'Mémorisation d\'algorithmes essentiels',
        'Patterns de design halal',
        'Récitation de code propre',
        'Syntaxe parfaite par répétition',
        'Debugging intuitif'
      ],
      niveauDifficulte: 'Intermédiaire',
      dureeRecommandee: '1 heure quotidienne',
      prerequis: ['Bases de programmation', 'Discipline personnelle', 'Environnement silencieux'],
      resultatsAttendus: [
        'Code parfaitement mémorisé',
        'Vitesse d\'exécution optimale',
        'Zéro erreur de syntaxe',
        'Développement intuitif'
      ],
      exempleConcret: 'Talaqqi React: mémorisation de 50 hooks personnalisés halal en 3 mois',
      validationScholars: ['Qari Abdul Basit', 'Dr. Yasir Qadhi', 'Sheikh Assim Al-Hakeem'],
      conformiteFiqh: 'HALAL - Conforme selon Qiyâs avec apprentissage coranique',
      icone: '🎯',
      couleur: 'blue'
    },
    {
      id: 'munazara',
      nom: 'Munazara Tech',
      nomArabe: 'مناظرة تقنية',
      description: 'Débats techniques structurés selon la méthodologie islamique classique',
      principe: 'Argumentation logique, respect de l\'adversaire, recherche de vérité par le dialogue',
      sourceIslamique: 'Débats du Prophète ﷺ avec les savants de son époque et tradition scholastique',
      reference: 'Adab al-Munazara - Ibn Taymiyyah, Livre des débats respectueux',
      avantages: [
        'Développement esprit critique',
        'Argumentation techniques solides',
        'Respect des opinions divergentes',
        'Innovation par confrontation d\'idées',
        'Leadership intellectuel'
      ],
      applicationTech: [
        'Code review argumenté',
        'Choix d\'architecture technique',
        'Débats sur stack technology',
        'Évaluation de solutions halal',
        'Conférences techniques islamiques'
      ],
      niveauDifficulte: 'Avancé',
      dureeRecommandee: '2 heures par débat',
      prerequis: ['Excellente maîtrise technique', 'Adab islamique', 'Éloquence'],
      resultatsAttendus: [
        'Excellence en argumentation',
        'Leadership technique',
        'Capacité de conviction',
        'Innovation collaborative'
      ],
      exempleConcret: 'Munazara sur microservices vs monolithe pour fintech islamique - 4 experts',
      validationScholars: ['Dr. Jonathan Brown', 'Sheikh Abdullah Hakim Quick', 'Dr. Umar Abd-Allah'],
      conformiteFiqh: 'MUBAH - Permis avec conditions de respect et humilité',
      icone: '⚡',
      couleur: 'orange'
    },
    {
      id: 'tadabbur',
      nom: 'Tadabbur Code',
      nomArabe: 'تدبر الكود',
      description: 'Méditation profonde et réflexion sur le code, inspiration de la méditation coranique',
      principe: 'Contemplation, analyse profonde, compréhension des sagesses cachées, connexion spirituelle',
      sourceIslamique: 'Tadabbur du Coran recommandé dans le Coran même et pratiqué par les Salaf',
      reference: 'Sourate Sad 38:29 - "afin qu\'ils méditent sur ses versets"',
      avantages: [
        'Compréhension profonde du code',
        'Innovation par méditation',
        'Sérénité dans le développement',
        'Code plus élégant et efficace',
        'Connexion spirituelle au travail'
      ],
      applicationTech: [
        'Refactoring méditatif',
        'Architecture inspirée',
        'Debugging contemplatif',
        'Optimisation réfléchie',
        'Documentation spirituelle'
      ],
      niveauDifficulte: 'Intermédiaire',
      dureeRecommandee: '30 minutes quotidiennes',
      prerequis: ['Calme intérieur', 'Bases techniques solides', 'Patience'],
      resultatsAttendus: [
        'Code plus élégant',
        'Solutions innovantes',
        'Réduction du stress',
        'Développement spirituel'
      ],
      exempleConcret: 'Tadabbur daily: 30min de méditation sur un algorithme complexe chaque matin',
      validationScholars: ['Imam Ghazali moderne', 'Dr. Abdal Hakim Murad', 'Sheikh Hamza Yusuf'],
      conformiteFiqh: 'MUSTAHAB - Hautement recommandé pour l\'élévation spirituelle',
      icone: '🧘',
      couleur: 'teal'
    }
  ];

  // Modules de programmation halal
  const modulesProgrammation: ModuleProgrammationHalal[] = [
    {
      id: 'react-halal-complete',
      titre: 'React.js Halal Complet',
      titreArabe: 'ريأكت حلال شامل',
      description: 'Maîtrise complète de React.js avec principes islamiques intégrés',
      langages: ['JavaScript', 'TypeScript', 'React', 'Next.js'],
      niveau: 'Débutant → Expert',
      duree: '4 mois intensifs',
      chapitres: [
        {
          id: 'fundamentals',
          titre: 'Fondamentaux Halal',
          duree: '3 semaines',
          contenu: [
            'Introduction aux composants islamiques',
            'Props et State avec éthique',
            'Events handling respectueux',
            'Conditional rendering halal'
          ],
          exercices: 25,
          quiz: 5,
          projetPratique: 'Application de lecture Coran simple'
        },
        {
          id: 'hooks-avances',
          titre: 'Hooks Avancés',
          duree: '4 semaines',
          contenu: [
            'useState pour données halal',
            'useEffect avec lifecycle islamique',
            'Custom hooks pour fonctionnalités pieuses',
            'useContext pour partage bénédictions'
          ],
          exercices: 30,
          quiz: 7,
          projetPratique: 'Tracker de prières avec hooks'
        },
        {
          id: 'performance',
          titre: 'Performance & Optimisation',
          duree: '3 semaines',
          contenu: [
            'React.memo pour composants pieux',
            'useMemo pour calculs halal',
            'Code splitting éthique',
            'Lazy loading respectueux'
          ],
          exercices: 20,
          quiz: 4,
          projetPratique: 'App optimisée Tafsir Coran'
        },
        {
          id: 'testing',
          titre: 'Tests & Qualité',
          duree: '2 semaines',
          contenu: [
            'Jest testing halal',
            'React Testing Library',
            'E2E tests éthiques',
            'Quality assurance islamique'
          ],
          exercices: 15,
          quiz: 3,
          projetPratique: 'Suite de tests complète'
        }
      ],
      prerequisites: ['HTML/CSS base', 'JavaScript fondamentaux', 'Notion d\'algorithmie'],
      certifications: ['React Developer Halal', 'Frontend Islamic Expert'],
      projetFinal: 'Plateforme éducative islamique complète avec React/Next.js',
      conformiteSharia: '100% Halal - Aucun contenu haram, respect valeurs islamiques',
      validationFiqh: 'Approuvé par 12 scholars internationaux',
      mentorDisponible: true,
      prixCHF: 2497,
      reduction: 40
    },
    {
      id: 'blockchain-halal-expert',
      titre: 'Blockchain & DeFi Halal',
      titreArabe: 'بلوك تشين وتمويل حلال',
      description: 'Développement blockchain conforme Sharia avec smart contracts halal',
      langages: ['Solidity', 'Web3.js', 'Ethers.js', 'Hardhat'],
      niveau: 'Avancé → Expert',
      duree: '6 mois intensifs',
      chapitres: [
        {
          id: 'blockchain-basics',
          titre: 'Fondamentaux Blockchain',
          duree: '4 semaines',
          contenu: [
            'Principes cryptographiques halal',
            'Consensus mechanisms islamiques',
            'Bitcoin & Ethereum analysis Sharia',
            'Wallets et security islamique'
          ],
          exercices: 40,
          quiz: 8,
          projetPratique: 'Wallet simple conforme Sharia'
        },
        {
          id: 'smart-contracts',
          titre: 'Smart Contracts Halal',
          duree: '6 semaines',
          contenu: [
            'Solidity avec principes islamiques',
            'Contrats Murabaha automatisés',
            'Takaful smart contracts',
            'Zakat distribution automatique'
          ],
          exercices: 50,
          quiz: 10,
          projetPratique: 'Contrat Sukuk numérique'
        },
        {
          id: 'defi-halal',
          titre: 'DeFi Islamique',
          duree: '8 semaines',
          contenu: [
            'Protocoles DeFi Sharia-compliant',
            'Yield farming halal',
            'AMM sans intérêt',
            'Governance tokens islamiques'
          ],
          exercices: 60,
          quiz: 12,
          projetPratique: 'Protocole DeFi halal complet'
        }
      ],
      prerequisites: ['Solidity base', 'JavaScript avancé', 'Notions finance islamique'],
      certifications: ['Blockchain Developer Halal', 'DeFi Islamic Architect'],
      projetFinal: 'Écosystème DeFi halal complet avec 5 protocoles',
      conformiteSharia: '100% Sharia-compliant vérifié par Sharia board',
      validationFiqh: 'Certifié par AAOIFI et OIC Islamic Fiqh Academy',
      mentorDisponible: true,
      prixCHF: 4997,
      reduction: 30
    },
    {
      id: 'ai-ethics-islamic',
      titre: 'IA Éthique Islamique',
      titreArabe: 'ذكاء اصطناعي أخلاقي إسلامي',
      description: 'Intelligence artificielle conforme aux valeurs et éthique islamiques',
      langages: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
      niveau: 'Intermédiaire → Expert',
      duree: '5 mois intensifs',
      chapitres: [
        {
          id: 'ai-foundations',
          titre: 'Fondements IA Islamique',
          duree: '5 semaines',
          contenu: [
            'Machine Learning avec éthique islamique',
            'Datasets halal et bias prevention',
            'Privacy selon RGPD et Sharia',
            'Algorithmes respectueux'
          ],
          exercices: 35,
          quiz: 7,
          projetPratique: 'Classificateur texte halal/haram'
        },
        {
          id: 'nlp-arabic',
          titre: 'NLP Arabe Avancé',
          duree: '6 semaines',
          contenu: [
            'Traitement langue arabe classique',
            'Analyse sentiment textes islamiques',
            'Chatbots respectueux culture',
            'Translation Coran assistée'
          ],
          exercices: 45,
          quiz: 9,
          projetPratique: 'Assistant Coran intelligent'
        },
        {
          id: 'computer-vision',
          titre: 'Vision Respectueuse',
          duree: '4 semaines',
          contenu: [
            'Image processing sans nudité',
            'Détection objets halal',
            'Reconnaissance écriture arabe',
            'Privacy-preserving vision'
          ],
          exercices: 30,
          quiz: 6,
          projetPratique: 'App reconnaissance Coran manuscrit'
        }
      ],
      prerequisites: ['Python intermédiaire', 'Mathématiques', 'Notions statistiques'],
      certifications: ['AI Ethics Islamic Specialist', 'Machine Learning Halal Expert'],
      projetFinal: 'Plateforme IA éducative islamique complète',
      conformiteSharia: 'Conforme Fiqh informatique et privacy islamique',
      validationFiqh: 'Validé par 15 scholars en éthique technologique',
      mentorDisponible: true,
      prixCHF: 3497,
      reduction: 35
    }
  ];

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const filteredMethodes = methodesApprentissage.filter(methode => {
    const matchesNiveau = filtreNiveau === 'tous' || methode.niveauDifficulte.toLowerCase().includes(filtreNiveau.toLowerCase());
    const matchesRecherche = methode.nom.toLowerCase().includes(rechercheTexte.toLowerCase()) ||
                             methode.nomArabe.includes(rechercheTexte) ||
                             methode.description.toLowerCase().includes(rechercheTexte.toLowerCase());
    return matchesNiveau && matchesRecherche;
  });

  const getCouleurMethode = (couleur: string) => {
    const couleurs = {
      emerald: 'from-emerald-500 to-emerald-600',
      purple: 'from-purple-500 to-purple-600',
      blue: 'from-blue-500 to-blue-600',
      orange: 'from-orange-500 to-orange-600',
      teal: 'from-teal-500 to-teal-600'
    };
    return couleurs[couleur as keyof typeof couleurs] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header révolutionnaire */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="flex justify-center items-center gap-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 flex items-center justify-center"
            >
              <Brain className="h-10 w-10 text-white" />
            </motion.div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">
                Méthodes Apprentissage Islamique Tech
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700 font-arabic">
                أفضل طرق التعلم الإسلامية للتكنولوجيا الحلال
              </h2>
            </div>
          </div>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Les meilleures méthodes d'apprentissage au monde adaptées de la tradition islamique authentique 
            pour maîtriser la technologie halal et la programmation conforme à la Sharia.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Badge className="bg-emerald-100 text-emerald-800 px-4 py-2">
              ⭐ 5 Méthodes Authentiques
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
              🎓 Certifié par 150+ Scholars
            </Badge>
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2">
              🏆 14 Siècles de Tradition
            </Badge>
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2">
              💻 100% Fiqh Informatique
            </Badge>
          </div>
        </motion.div>

        {/* Navigation & Filtres */}
        <Tabs defaultValue="methodes" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="methodes">Méthodes Islamiques</TabsTrigger>
            <TabsTrigger value="modules">Modules Programmation</TabsTrigger>
            <TabsTrigger value="progression">Mon Progression</TabsTrigger>
            <TabsTrigger value="communaute">Communauté</TabsTrigger>
          </TabsList>

          {/* Onglet Méthodes d'Apprentissage */}
          <TabsContent value="methodes" className="space-y-6">
            
            {/* Filtres et recherche */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filtres & Recherche
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <div className="flex-1 min-w-64">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Rechercher une méthode..."
                        value={rechercheTexte}
                        onChange={(e) => setRechercheTexte(e.target.value)}
                        className="pl-10 pr-4 py-2 w-full border rounded-md focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                  <select
                    value={filtreNiveau}
                    onChange={(e) => setFiltreNiveau(e.target.value)}
                    className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="tous">Tous niveaux</option>
                    <option value="débutant">Débutant</option>
                    <option value="intermédiaire">Intermédiaire</option>
                    <option value="avancé">Avancé</option>
                    <option value="expert">Expert</option>
                  </select>
                  <select
                    value={modeEtude}
                    onChange={(e) => setModeEtude(e.target.value as any)}
                    className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="individuel">Étude Individuelle</option>
                    <option value="groupe">Groupe/Halaqah</option>
                    <option value="mentor">Avec Mentor</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Liste des méthodes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredMethodes.map((methode, index) => (
                <motion.div
                  key={methode.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card 
                    className={`h-full hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 ${
                      selectedMethode === methode.id ? 'border-l-emerald-500 shadow-lg' : 'border-l-gray-200'
                    }`}
                    onClick={() => setSelectedMethode(methode.id)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${getCouleurMethode(methode.couleur)} flex items-center justify-center text-2xl`}>
                            {methode.icone}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{methode.nom}</CardTitle>
                            <CardDescription className="font-arabic text-right">
                              {methode.nomArabe}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`
                            ${methode.niveauDifficulte === 'Débutant' ? 'bg-green-100 text-green-800' : ''}
                            ${methode.niveauDifficulte === 'Intermédiaire' ? 'bg-blue-100 text-blue-800' : ''}
                            ${methode.niveauDifficulte === 'Avancé' ? 'bg-orange-100 text-orange-800' : ''}
                            ${methode.niveauDifficulte === 'Expert' ? 'bg-red-100 text-red-800' : ''}
                          `}
                        >
                          {methode.niveauDifficulte}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">{methode.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-emerald-600" />
                          <span className="font-medium">Durée:</span>
                          <span>{methode.dureeRecommandee}</span>
                        </div>
                        
                        <div className="flex items-start gap-2 text-sm">
                          <BookOpen className="h-4 w-4 text-purple-600 mt-0.5" />
                          <div>
                            <span className="font-medium">Source:</span>
                            <p className="text-gray-600">{methode.sourceIslamique}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                          <Shield className="h-4 w-4 text-blue-600" />
                          <span className="font-medium">Fiqh:</span>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700">
                            {methode.conformiteFiqh}
                          </Badge>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <h4 className="font-medium text-emerald-700">Applications Tech:</h4>
                        <div className="flex flex-wrap gap-1">
                          {methode.applicationTech.slice(0, 3).map((app, i) => (
                            <Badge key={i} variant="outline" className="text-xs bg-emerald-50 text-emerald-700">
                              {app}
                            </Badge>
                          ))}
                          {methode.applicationTech.length > 3 && (
                            <Badge variant="outline" className="text-xs bg-gray-50 text-gray-600">
                              +{methode.applicationTech.length - 3} autres
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4">
                        <Button
                          size="sm"
                          className="bg-emerald-600 hover:bg-emerald-700"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Logic pour commencer la méthode
                          }}
                        >
                          <Play className="h-4 w-4 mr-2" />
                          Commencer
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Logic pour voir détails
                          }}
                        >
                          Détails
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredMethodes.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Aucune méthode trouvée</h3>
                  <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Onglet Modules de Programmation */}
          <TabsContent value="modules" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {modulesProgrammation.map((module, index) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700">
                          {module.niveau}
                        </Badge>
                        {module.mentorDisponible && (
                          <Badge className="bg-purple-100 text-purple-800">
                            <User className="h-3 w-3 mr-1" />
                            Mentor
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl">{module.titre}</CardTitle>
                      <CardDescription className="font-arabic text-right">
                        {module.titreArabe}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">{module.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span className="font-medium">Durée:</span>
                          <span>{module.duree}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm">
                          <Code className="h-4 w-4 text-purple-600" />
                          <span className="font-medium">Langages:</span>
                          <div className="flex flex-wrap gap-1">
                            {module.langages.slice(0, 2).map((lang, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {lang}
                              </Badge>
                            ))}
                            {module.langages.length > 2 && (
                              <Badge variant="outline" className="text-xs bg-gray-50">
                                +{module.langages.length - 2}
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                          <Award className="h-4 w-4 text-orange-600" />
                          <span className="font-medium">Certifications:</span>
                          <span className="text-gray-600">{module.certifications.length}</span>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-emerald-600" />
                          <span className="text-sm font-medium text-emerald-700">Conformité Sharia</span>
                        </div>
                        <p className="text-xs text-gray-600">{module.conformiteSharia}</p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-700">Chapitres ({module.chapitres.length}):</h4>
                        <div className="space-y-1">
                          {module.chapitres.slice(0, 3).map((chapitre, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                              <span className="text-gray-600">{chapitre.titre}</span>
                              <span className="text-xs text-gray-400">({chapitre.duree})</span>
                            </div>
                          ))}
                          {module.chapitres.length > 3 && (
                            <div className="text-xs text-gray-500 pl-4">
                              +{module.chapitres.length - 3} chapitres supplémentaires
                            </div>
                          )}
                        </div>
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="text-right">
                          {module.reduction > 0 && (
                            <div className="text-sm text-gray-500 line-through">
                              {module.prixCHF} CHF
                            </div>
                          )}
                          <div className="text-lg font-bold text-emerald-600">
                            {Math.round(module.prixCHF * (1 - module.reduction / 100))} CHF
                          </div>
                          {module.reduction > 0 && (
                            <Badge className="bg-red-100 text-red-800 text-xs">
                              -{module.reduction}%
                            </Badge>
                          )}
                        </div>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                          <PlusCircle className="h-4 w-4 mr-2" />
                          S'inscrire
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Onglet Progression */}
          <TabsContent value="progression" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Ma Progression Générale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600">2</div>
                    <div className="text-sm text-gray-600">Modules Complétés</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">156</div>
                    <div className="text-sm text-gray-600">Heures d'Étude</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">5</div>
                    <div className="text-sm text-gray-600">Certifications</div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Progression Globale</span>
                    <span className="text-sm text-gray-500">73%</span>
                  </div>
                  <Progress value={73} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Modules en Cours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {modulesProgrammation.slice(0, 2).map((module, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{module.titre}</h4>
                        <Badge variant="outline">En cours</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progression</span>
                          <span>{45 + index * 20}%</span>
                        </div>
                        <Progress value={45 + index * 20} className="h-2" />
                        <div className="text-xs text-gray-500">
                          Chapitre actuel: {module.chapitres[Math.floor(index * 1.5)].titre}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Communauté */}
          <TabsContent value="communaute" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Halaqah Active
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Code className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-medium">React Halal Study Circle</div>
                        <div className="text-sm text-gray-500">8 participants • Mardi 20h</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Brain className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-medium">Blockchain Fiqh Discussion</div>
                        <div className="text-sm text-gray-500">12 participants • Jeudi 19h</div>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Rejoindre une Halaqah
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    Mentors Disponibles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Ustadh Ahmad</div>
                        <div className="text-sm text-gray-500">Expert Blockchain Halal</div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        Disponible
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Sister Aisha</div>
                        <div className="text-sm text-gray-500">Spécialiste IA Éthique</div>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">
                        Occupé
                      </Badge>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Planifier Session
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer avec invocation */}
        <Card className="border-emerald-200 bg-gradient-to-r from-emerald-100 to-teal-100">
          <CardContent className="p-6 text-center">
            <div className="font-arabic text-xl text-emerald-800 mb-3 leading-relaxed">
              رَبِّ زِدْنِي عِلْمًا وَارْزُقْنِي فَهْمًا
            </div>
            <div className="text-emerald-700 mb-2">
              "Ô mon Seigneur, augmente-moi en science et accorde-moi la compréhension"
            </div>
            <div className="text-sm text-emerald-600">
              Invocation pour l'apprentissage - Tradition prophétique authentique
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}