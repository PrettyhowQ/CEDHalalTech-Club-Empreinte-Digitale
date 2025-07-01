import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { 
  Play, 
  Lock, 
  CheckCircle, 
  Clock, 
  Users, 
  Star, 
  Download,
  FileText,
  Video,
  Headphones,
  Code,
  Shield,
  Globe,
  Zap,
  Award,
  BookOpen,
  Target,
  Lightbulb,
  Settings,
  Database,
  Server,
  Smartphone,
  Eye,
  Heart,
  Filter,
  Search,
  UserCheck,
  Sparkles
} from 'lucide-react';
import { CEDFooter } from '@/components/CEDFooter';

interface Module {
  id: number;
  titre: string;
  description: string;
  duree: string;
  lecons: Lecon[];
  ordre: number;
  prerequis: string[];
  objectifs: string[];
  locked: boolean;
}

interface Lecon {
  id: number;
  titre: string;
  type: 'video' | 'texte' | 'quiz' | 'audio' | 'pratique';
  duree: number;
  contenu: string;
  urlVideo?: string;
  urlAudio?: string;
  ressources: string[];
  completed: boolean;
  locked: boolean;
  ordre: number;
  noteMinimale: number;
}

export default function FormationDeveloppementWebHalal() {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [selectedLecon, setSelectedLecon] = useState<Lecon | null>(null);
  const [progressionGlobale, setProgressionGlobale] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const formation = {
    id: 1,
    titre: "Développement Web Halal & Sécurisé 100%",
    description: "Formation complète pour développer des applications web conformes aux valeurs islamiques avec sécurité renforcée et respect de la Sharia.",
    instructeur: "Sheikh Mohammad Al-Qarni",
    instructeurBio: "Expert en Fiqh informatique avec 15+ ans d'expérience en développement web. Diplômé de l'Université Islamique de Médine en Sciences Religieuses et MIT en Computer Science.",
    duree: "12 semaines",
    niveau: "Intermédiaire",
    prix: 599,
    devise: "CHF",
    categorie: "Développement Web",
    langue: ["français", "arabe", "anglais"],
    tags: ["web", "halal", "sécurité", "développement", "fiqh"],
    participants: 234,
    note: 4.8,
    avis: 67,
    image: "/api/placeholder/800/400",
    certifie: true,
    halal: true,
    dateDebut: "2025-08-15",
    dateFin: "2025-11-07",
    places: 50,
    placesRestantes: 16,
    savantValidateur: "Dr. Ahmed Al-Mansouri (AAOIFI)",
    sourcesFiqh: ["Coran", "Sunna", "Standards AAOIFI", "Fiqh moderne"],
    certification: {
      nom: "Développeur Web Halal Certifié",
      validite: "2 ans",
      renouvellement: "Formation continue requise",
      reconnaissance: ["AAOIFI", "CED Academy", "Islamic Tech Institute"]
    }
  };

  const modules: Module[] = [
    {
      id: 1,
      titre: "Fondements du Développement Web Halal",
      description: "Introduction aux principes islamiques du développement web et conformité Sharia",
      duree: "2 semaines",
      ordre: 1,
      locked: false,
      prerequis: ["Bases HTML/CSS", "Notions JavaScript"],
      objectifs: [
        "Comprendre les principes Fiqh appliqués au web",
        "Identifier les éléments haram à éviter",
        "Maîtriser l'architecture web islamique"
      ],
      lecons: [
        {
          id: 1,
          titre: "Introduction au Fiqh Informatique Web",
          type: "video",
          duree: 45,
          contenu: "Principes fondamentaux de la conformité islamique dans le développement web",
          urlVideo: "/api/placeholder/video/intro-fiqh-web",
          ressources: ["Guide Fiqh Web PDF", "Références Coran/Sunna"],
          completed: false,
          locked: false,
          ordre: 1,
          noteMinimale: 70
        },
        {
          id: 2,
          titre: "Éléments Haram à Éviter Absolument",
          type: "texte",
          duree: 30,
          contenu: "Liste exhaustive des contenus et fonctionnalités interdites selon la Sharia",
          ressources: ["Checklist Conformité", "Exemples Pratiques"],
          completed: false,
          locked: false,
          ordre: 2,
          noteMinimale: 80
        },
        {
          id: 3,
          titre: "Architecture Web Respectueuse",
          type: "pratique",
          duree: 60,
          contenu: "Conception d'architecture web respectant la pudeur et l'éthique islamique",
          ressources: ["Templates Halal", "Guidelines UI/UX"],
          completed: false,
          locked: false,
          ordre: 3,
          noteMinimale: 75
        }
      ]
    },
    {
      id: 2,
      titre: "HTML/CSS Conforme à l'Islam",
      description: "Structure et style respectueux des valeurs islamiques",
      duree: "2 semaines",
      ordre: 2,
      locked: false,
      prerequis: ["Module 1 complété"],
      objectifs: [
        "Créer structures HTML respectueuses",
        "Appliquer CSS sans éléments haram",
        "Implémenter responsive design modeste"
      ],
      lecons: [
        {
          id: 4,
          titre: "HTML Sémantique et Respectueux",
          type: "video",
          duree: 40,
          contenu: "Structuration HTML respectant la hiérarchie et la modestie islamique",
          urlVideo: "/api/placeholder/video/html-halal",
          ressources: ["Templates HTML", "Exemples Pratiques"],
          completed: false,
          locked: false,
          ordre: 1,
          noteMinimale: 70
        },
        {
          id: 5,
          titre: "CSS et Design Pudique",
          type: "pratique",
          duree: 90,
          contenu: "Techniques CSS pour un design élégant sans séduction",
          ressources: ["Framework CSS Halal", "Couleurs Recommandées"],
          completed: false,
          locked: false,
          ordre: 2,
          noteMinimale: 75
        },
        {
          id: 6,
          titre: "Responsive Design Modeste",
          type: "video",
          duree: 50,
          contenu: "Adaptation multi-écrans respectant la pudeur",
          urlVideo: "/api/placeholder/video/responsive-halal",
          ressources: ["Breakpoints Halal", "Media Queries"],
          completed: false,
          locked: false,
          ordre: 3,
          noteMinimale: 70
        }
      ]
    },
    {
      id: 3,
      titre: "JavaScript Éthique et Sécurisé",
      description: "Programmation JavaScript conforme aux principes islamiques",
      duree: "3 semaines",
      ordre: 3,
      locked: false,
      prerequis: ["Module 2 complété"],
      objectifs: [
        "Développer JavaScript sans haram",
        "Implémenter sécurité renforcée",
        "Gérer interactions respectueuses"
      ],
      lecons: [
        {
          id: 7,
          titre: "JavaScript Fundamentals Halal",
          type: "video",
          duree: 60,
          contenu: "Programmation JavaScript respectant l'éthique islamique",
          urlVideo: "/api/placeholder/video/js-halal",
          ressources: ["ES6+ Halal Guide", "Best Practices"],
          completed: false,
          locked: false,
          ordre: 1,
          noteMinimale: 75
        },
        {
          id: 8,
          titre: "Sécurité et Protection Données",
          type: "pratique",
          duree: 120,
          contenu: "Implémentation sécurité conforme au principe Amâna",
          ressources: ["Security Checklist", "OWASP Halal"],
          completed: false,
          locked: false,
          ordre: 2,
          noteMinimale: 80
        },
        {
          id: 9,
          titre: "APIs et Intégrations Éthiques",
          type: "pratique",
          duree: 90,
          contenu: "Consommation APIs externes avec filtrage halal",
          ressources: ["API Guidelines", "Filtering Techniques"],
          completed: false,
          locked: false,
          ordre: 3,
          noteMinimale: 75
        }
      ]
    },
    {
      id: 4,
      titre: "Backend et Bases de Données Halal",
      description: "Développement serveur conforme à la Sharia avec sécurité maximale",
      duree: "3 semaines",
      ordre: 4,
      locked: false,
      prerequis: ["Module 3 complété"],
      objectifs: [
        "Configurer serveur sécurisé halal",
        "Gérer bases données conformes",
        "Implémenter authentification islamique"
      ],
      lecons: [
        {
          id: 10,
          titre: "Node.js et Express Halal",
          type: "video",
          duree: 75,
          contenu: "Configuration serveur respectant les principes islamiques",
          urlVideo: "/api/placeholder/video/nodejs-halal",
          ressources: ["Server Setup Guide", "Middleware Halal"],
          completed: false,
          locked: false,
          ordre: 1,
          noteMinimale: 75
        },
        {
          id: 11,
          titre: "Bases de Données Conformes",
          type: "pratique",
          duree: 100,
          contenu: "Modélisation et gestion données respectant la vie privée",
          ressources: ["DB Schema Halal", "Privacy Patterns"],
          completed: false,
          locked: false,
          ordre: 2,
          noteMinimale: 80
        },
        {
          id: 12,
          titre: "Authentification et Autorisation",
          type: "pratique",
          duree: 90,
          contenu: "Systèmes auth respectant l'identité islamique",
          ressources: ["Auth Patterns", "JWT Halal"],
          completed: false,
          locked: false,
          ordre: 3,
          noteMinimale: 80
        }
      ]
    },
    {
      id: 5,
      titre: "Applications Mobiles Halal",
      description: "Développement mobile conforme aux valeurs islamiques",
      duree: "2 semaines",
      ordre: 5,
      locked: false,
      prerequis: ["Module 4 complété"],
      objectifs: [
        "Développer apps mobiles halal",
        "Intégrer fonctionnalités islamiques",
        "Optimiser pour communauté musulmane"
      ],
      lecons: [
        {
          id: 13,
          titre: "React Native Halal Development",
          type: "video",
          duree: 80,
          contenu: "Développement mobile cross-platform islamique",
          urlVideo: "/api/placeholder/video/react-native-halal",
          ressources: ["RN Halal Templates", "Islamic Components"],
          completed: false,
          locked: false,
          ordre: 1,
          noteMinimale: 75
        },
        {
          id: 14,
          titre: "Fonctionnalités Islamiques Intégrées",
          type: "pratique",
          duree: 120,
          contenu: "Implémentation Qibla, horaires prière, calendrier hijri",
          ressources: ["Islamic APIs", "Prayer Components"],
          completed: false,
          locked: false,
          ordre: 2,
          noteMinimale: 80
        }
      ]
    }
  ];

  useEffect(() => {
    // Calculer progression globale
    const totalLecons = modules.reduce((acc, module) => acc + module.lecons.length, 0);
    const leconsCompleted = modules.reduce((acc, module) => 
      acc + module.lecons.filter(lecon => lecon.completed).length, 0
    );
    setProgressionGlobale((leconsCompleted / totalLecons) * 100);
  }, [modules]);

  const handleStartLecon = (lecon: Lecon) => {
    setSelectedLecon(lecon);
  };

  const handleCompleteLecon = (leconId: number) => {
    // Marquer la leçon comme terminée
    // En pratique, ceci ferait un appel API
    console.log(`Leçon ${leconId} terminée`);
  };

  const getModuleProgress = (module: Module) => {
    const completed = module.lecons.filter(l => l.completed).length;
    return (completed / module.lecons.length) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
      {/* Header Formation */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Badge className="bg-white/20 text-white">
                  <Shield className="h-4 w-4 mr-1" />
                  100% Halal Certifié
                </Badge>
                <Badge className="bg-white/20 text-white">
                  <Award className="h-4 w-4 mr-1" />
                  Certification Reconnue
                </Badge>
              </div>
              
              <h1 className="text-4xl font-bold mb-4">
                {formation.titre}
              </h1>
              
              <p className="text-xl mb-6 opacity-90">
                {formation.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{formation.duree}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>{formation.participants} étudiants</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Niveau {formation.niveau}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5" />
                  <span>{formation.note}/5 ({formation.avis} avis)</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                  <Play className="h-5 w-5 mr-2" />
                  Commencer la formation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <FileText className="h-5 w-5 mr-2" />
                  Télécharger Syllabus
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Progression Actuelle</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Progression globale</span>
                      <span>{Math.round(progressionGlobale)}%</span>
                    </div>
                    <Progress value={progressionGlobale} className="h-3" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-2xl font-bold">5</div>
                      <div className="opacity-80">Modules</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">14</div>
                      <div className="opacity-80">Leçons</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">16h</div>
                      <div className="opacity-80">Durée totale</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">599</div>
                      <div className="opacity-80">CHF</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="curriculum">Programme</TabsTrigger>
            <TabsTrigger value="instructor">Instructeur</TabsTrigger>
            <TabsTrigger value="certification">Certification</TabsTrigger>
            <TabsTrigger value="community">Communauté</TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Description détaillée */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="h-6 w-6 mr-2" />
                      À propos de cette formation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <p className="text-lg text-gray-700 mb-4">
                        Cette formation révolutionnaire vous apprend à développer des applications web 
                        entièrement conformes aux valeurs islamiques. Chaque aspect du développement 
                        est examiné sous le prisme du Fiqh pour garantir une conformité totale à la Sharia.
                      </p>
                      
                      <h4 className="text-lg font-semibold mb-3">Ce que vous apprendrez :</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Principes fondamentaux du Fiqh appliqués au développement web</li>
                        <li>Identification et évitement des éléments haram dans le code</li>
                        <li>Techniques de sécurité renforcée respectant le principe Amâna</li>
                        <li>Développement d'interfaces respectueuses de la pudeur islamique</li>
                        <li>Intégration de fonctionnalités islamiques (Qibla, horaires prière)</li>
                        <li>Gestion de bases de données conformes à l'éthique islamique</li>
                        <li>Déploiement sécurisé et maintenance halal</li>
                      </ul>

                      <h4 className="text-lg font-semibold mb-3 mt-6">Prérequis :</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Connaissances de base en HTML, CSS et JavaScript</li>
                        <li>Notions générales de Fiqh islamique</li>
                        <li>Motivation à développer selon les valeurs islamiques</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Technologies utilisées */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code className="h-6 w-6 mr-2" />
                      Technologies et Outils Halal
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { name: "HTML5 Sémantique", icon: "🏗️" },
                        { name: "CSS3 Pudique", icon: "🎨" },
                        { name: "JavaScript ES6+", icon: "⚡" },
                        { name: "Node.js Secure", icon: "🛡️" },
                        { name: "React Halal", icon: "⚛️" },
                        { name: "MongoDB Conforme", icon: "🍃" },
                        { name: "Express.js", icon: "🚀" },
                        { name: "Islamic APIs", icon: "🕌" }
                      ].map((tech, index) => (
                        <div key={index} className="text-center p-4 border border-gray-200 rounded-lg">
                          <div className="text-2xl mb-2">{tech.icon}</div>
                          <div className="text-sm font-medium">{tech.name}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Informations formation */}
                <Card>
                  <CardHeader>
                    <CardTitle>Informations Formation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Prix :</span>
                      <span className="font-semibold">{formation.prix} {formation.devise}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durée :</span>
                      <span className="font-semibold">{formation.duree}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Début :</span>
                      <span className="font-semibold">{new Date(formation.dateDebut).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Places restantes :</span>
                      <span className="font-semibold text-orange-600">{formation.placesRestantes}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Langues :</span>
                      <div className="flex space-x-1">
                        {formation.langue.map(lang => (
                          <Badge key={lang} variant="outline">{lang}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Certification */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="h-5 w-5 mr-2" />
                      Certification
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                        <Award className="h-8 w-8 text-emerald-600" />
                      </div>
                      <h4 className="font-semibold">{formation.certification.nom}</h4>
                      <p className="text-sm text-gray-600">
                        Certifié par {formation.savantValidateur}
                      </p>
                      <p className="text-xs text-gray-500">
                        Validité : {formation.certification.validite}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Conformité Sharia */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      Conformité Sharia
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span className="text-sm">100% Halal Certifié</span>
                      </div>
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span className="text-sm">Validé par 7 Savants</span>
                      </div>
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span className="text-sm">Conforme 4 Sources</span>
                      </div>
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span className="text-sm">Aucun Contenu Haram</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Programme détaillé */}
          <TabsContent value="curriculum">
            <div className="space-y-6">
              {modules.map((module, index) => (
                <motion.div
                  key={module.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`${module.locked ? 'opacity-60' : ''}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                            {module.locked ? (
                              <Lock className="h-6 w-6 text-gray-400" />
                            ) : (
                              <span className="font-bold text-emerald-600">{module.ordre}</span>
                            )}
                          </div>
                          <div>
                            <CardTitle className="text-xl">{module.titre}</CardTitle>
                            <p className="text-gray-600">{module.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500 mb-1">{module.duree}</div>
                          <div className="text-sm font-medium">{getModuleProgress(module).toFixed(0)}% terminé</div>
                          <Progress value={getModuleProgress(module)} className="w-24 h-2 mt-1" />
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold mb-2">Prérequis</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {module.prerequis.map((prereq, i) => (
                              <li key={i}>• {prereq}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="lg:col-span-2">
                          <h4 className="font-semibold mb-2">Objectifs d'apprentissage</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {module.objectifs.map((objectif, i) => (
                              <li key={i} className="flex items-start">
                                <Target className="h-4 w-4 mr-2 mt-0.5 text-emerald-500 flex-shrink-0" />
                                {objectif}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Leçons ({module.lecons.length})</h4>
                        {module.lecons.map((lecon, leconIndex) => (
                          <div 
                            key={lecon.id}
                            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-emerald-300 transition-colors"
                          >
                            <div className="flex items-center space-x-4">
                              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100">
                                {lecon.type === 'video' && <Video className="h-4 w-4 text-blue-600" />}
                                {lecon.type === 'texte' && <FileText className="h-4 w-4 text-green-600" />}
                                {lecon.type === 'audio' && <Headphones className="h-4 w-4 text-purple-600" />}
                                {lecon.type === 'pratique' && <Code className="h-4 w-4 text-orange-600" />}
                                {lecon.type === 'quiz' && <CheckCircle className="h-4 w-4 text-red-600" />}
                              </div>
                              <div>
                                <h5 className="font-medium">{lecon.titre}</h5>
                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                  <span>{lecon.duree} min</span>
                                  <span>Note minimale: {lecon.noteMinimale}%</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              {lecon.completed && (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                              )}
                              <Button 
                                size="sm" 
                                variant="outline"
                                disabled={lecon.locked}
                                onClick={() => handleStartLecon(lecon)}
                              >
                                {lecon.locked ? (
                                  <Lock className="h-4 w-4" />
                                ) : lecon.completed ? (
                                  <Eye className="h-4 w-4" />
                                ) : (
                                  <Play className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Instructeur */}
          <TabsContent value="instructor">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-emerald-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <UserCheck className="h-16 w-16 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{formation.instructeur}</h3>
                    <p className="text-gray-600 mb-4">Expert Fiqh Informatique</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>4.9/5 (156 avis)</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Users className="h-4 w-4 text-blue-500" />
                        <span>2,847 étudiants</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <BookOpen className="h-4 w-4 text-green-500" />
                        <span>12 formations</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="text-xl font-semibold mb-4">À propos de l'instructeur</h4>
                    <div className="prose text-gray-700">
                      <p className="mb-4">
                        {formation.instructeurBio}
                      </p>
                      
                      <h5 className="font-semibold mb-2">Expertise :</h5>
                      <ul className="list-disc list-inside space-y-1 mb-4">
                        <li>15+ années d'expérience en développement web</li>
                        <li>Diplômé de l'Université Islamique de Médine</li>
                        <li>Master Computer Science du MIT</li>
                        <li>Spécialiste en sécurité informatique halal</li>
                        <li>Consultant AAOIFI pour standards tech islamiques</li>
                      </ul>

                      <h5 className="font-semibold mb-2">Certifications :</h5>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Expert Fiqh Informatique</Badge>
                        <Badge>Certified Ethical Hacker</Badge>
                        <Badge>AWS Solutions Architect</Badge>
                        <Badge>Islamic Banking Certified</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Certification */}
          <TabsContent value="certification">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-6 w-6 mr-2" />
                    Certificat de Fin de Formation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                      <Award className="h-12 w-12 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold">{formation.certification.nom}</h3>
                    <p className="text-gray-600">
                      Reconnu par les institutions islamiques internationales
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center p-3 bg-gray-50 rounded">
                        <div className="font-semibold">Validité</div>
                        <div className="text-gray-600">{formation.certification.validite}</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded">
                        <div className="font-semibold">Renouvellement</div>
                        <div className="text-gray-600">Formation continue</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reconnaissances Officielles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {formation.certification.reconnaissance.map((org, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="font-medium">{org}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                    <h4 className="font-semibold text-emerald-800 mb-2">Avantages du certificat :</h4>
                    <ul className="text-sm text-emerald-700 space-y-1">
                      <li>• Reconnaissance internationale</li>
                      <li>• Accès réseau développeurs halal</li>
                      <li>• Opportunités emploi spécialisées</li>
                      <li>• Formation continue privilégiée</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Communauté */}
          <TabsContent value="community">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 mr-2" />
                    Communauté d'Apprentissage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-600">{formation.participants}</div>
                      <div className="text-gray-600">Étudiants inscrits</div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-xl font-bold">89%</div>
                        <div className="text-xs text-gray-600">Taux complétion</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold">4.8</div>
                        <div className="text-xs text-gray-600">Note moyenne</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold">156</div>
                        <div className="text-xs text-gray-600">Projets finaux</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold">Forums et Support</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Forum questions techniques - 24/7</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Sessions live hebdomadaires</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Groupes d'étude régionaux</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span>Mentorat avec diplômés</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Témoignages Récents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Ahmed Al-Rashid",
                        role: "Développeur Full-Stack",
                        comment: "Formation exceptionnelle qui m'a permis de développer selon mes valeurs islamiques. Le contenu est très détaillé.",
                        rating: 5
                      },
                      {
                        name: "Fatima Benali",
                        role: "CTO Startup",
                        comment: "Enfin une formation qui respecte nos principes ! J'ai pu appliquer directement dans mon entreprise.",
                        rating: 5
                      },
                      {
                        name: "Omar Ibn Kathir",
                        role: "Consultant Tech",
                        comment: "Sheikh Al-Qarni explique parfaitement les aspects Fiqh. Très recommandée pour développeurs musulmans.",
                        rating: 5
                      }
                    ].map((testimonial, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                            <UserCheck className="h-4 w-4 text-emerald-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-sm">{testimonial.name}</div>
                            <div className="text-xs text-gray-600">{testimonial.role}</div>
                          </div>
                          <div className="flex space-x-1 ml-auto">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 text-yellow-500 fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-700">{testimonial.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Dialog leçon */}
      <Dialog open={!!selectedLecon} onOpenChange={() => setSelectedLecon(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              {selectedLecon?.type === 'video' && <Video className="h-5 w-5 mr-2" />}
              {selectedLecon?.type === 'texte' && <FileText className="h-5 w-5 mr-2" />}
              {selectedLecon?.type === 'audio' && <Headphones className="h-5 w-5 mr-2" />}
              {selectedLecon?.type === 'pratique' && <Code className="h-5 w-5 mr-2" />}
              {selectedLecon?.titre}
            </DialogTitle>
          </DialogHeader>
          
          {selectedLecon && (
            <div className="space-y-6">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Contenu de la leçon : {selectedLecon.titre}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Durée : {selectedLecon.duree} minutes
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Description</h4>
                <p className="text-gray-700">{selectedLecon.contenu}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Ressources</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedLecon.ressources.map((ressource, index) => (
                    <Button key={index} variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      {ressource}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t">
                <div className="text-sm text-gray-600">
                  Note minimale requise : {selectedLecon.noteMinimale}%
                </div>
                <Button 
                  onClick={() => handleCompleteLecon(selectedLecon.id)}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Marquer comme terminé
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <CEDFooter />
    </div>
  );
}