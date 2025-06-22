import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { 
  Code, 
  Play, 
  Save, 
  Share2, 
  Users, 
  Bot, 
  Terminal, 
  FileCode, 
  Globe, 
  Zap,
  Brain,
  Rocket,
  Monitor,
  Database,
  Cloud,
  GitBranch,
  BookOpen,
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export function CEDCodePlatform() {
  const [activeTab, setActiveTab] = useState('overview');
  const [codeContent, setCodeContent] = useState(`<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Premier Site CED</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            padding: 50px;
        }
        .container { 
            background: rgba(255,255,255,0.1);
            padding: 30px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🌟 Bienvenue sur CED Code Platform</h1>
        <p>Ma première création avec l'éditeur CED !</p>
        <button onclick="alert('Félicitations ! Vous maîtrisez les bases.')">
            Cliquer ici
        </button>
    </div>
</body>
</html>`);
  
  const [isRunning, setIsRunning] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');

  const languages = [
    { id: 'html', name: 'HTML/CSS/JS', icon: Globe, color: 'from-orange-500 to-red-600' },
    { id: 'python', name: 'Python', icon: Code, color: 'from-blue-500 to-cyan-600' },
    { id: 'javascript', name: 'Node.js', icon: Zap, color: 'from-yellow-500 to-green-600' },
    { id: 'react', name: 'React.js', icon: Monitor, color: 'from-cyan-500 to-blue-600' },
    { id: 'database', name: 'SQL/NoSQL', icon: Database, color: 'from-purple-500 to-pink-600' }
  ];

  const features = [
    {
      icon: Code,
      title: 'Éditeur Professionnel',
      description: 'Syntaxe highlighting, auto-complétion, détection erreurs',
      status: 'active'
    },
    {
      icon: Bot,
      title: 'Assistant IA CED',
      description: 'Aide contextuelle, génération code, debugging intelligent',
      status: 'active'
    },
    {
      icon: Play,
      title: 'Exécution Temps Réel',
      description: 'Test immédiat, preview live, serveur cloud intégré',
      status: 'active'
    },
    {
      icon: Users,
      title: 'Collaboration Live',
      description: 'Édition simultanée, partage projets, pair programming',
      status: 'active'
    },
    {
      icon: Cloud,
      title: 'Hébergement Automatique',
      description: 'Déploiement 1-clic, domaines gratuits, SSL inclus',
      status: 'active'
    },
    {
      icon: GitBranch,
      title: 'Contrôle Version',
      description: 'Git intégré, historique complet, branches multiples',
      status: 'premium'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Site Web Personnel',
      description: 'Créez votre portfolio professionnel',
      language: 'HTML/CSS/JS',
      difficulty: 'Débutant',
      duration: '2h',
      students: 1247,
      rating: 4.8
    },
    {
      id: 2,
      title: 'API REST avec Python',
      description: 'Backend pour applications mobiles',
      language: 'Python',
      difficulty: 'Intermédiaire',
      duration: '4h',
      students: 893,
      rating: 4.9
    },
    {
      id: 3,
      title: 'App React Native',
      description: 'Application mobile cross-platform',
      language: 'React',
      difficulty: 'Avancé',
      duration: '8h',
      students: 567,
      rating: 4.7
    }
  ];

  const runCode = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 2000);
  };

  const askAI = () => {
    if (aiPrompt.trim()) {
      // Simulation réponse IA
      setCodeContent(prevCode => 
        prevCode + `\n/* 🤖 Assistant CED: ${aiPrompt} */\n/* Code généré automatiquement */`
      );
      setAiPrompt('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CED Code Platform
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plateforme de développement cloud intégrée pour former les développeurs de demain
          </p>
          <div className="flex justify-center gap-3 mt-4">
            <Badge className="bg-amber-500 text-white px-3 py-1">À venir 2026/2027</Badge>
            <Badge className="bg-green-500 text-white px-3 py-1">IA Intégrée</Badge>
            <Badge className="bg-blue-500 text-white px-3 py-1">Cloud Native</Badge>
            <Badge className="bg-purple-500 text-white px-3 py-1">Temps Réel</Badge>
          </div>
          
          {/* Annonce recherche partenaires */}
          <Card className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300">
            <CardContent className="p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="h-5 w-5 text-amber-600" />
                <h3 className="text-lg font-bold text-amber-800">Recherche Partenaires & Investisseurs</h3>
              </div>
              <p className="text-amber-700 mb-3">
                Rejoignez la révolution de l'éducation tech éthique. Partenariat stratégique disponible avant lancement.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div className="text-center p-2 bg-white rounded border border-amber-200">
                  <div className="font-bold text-amber-700">Investissement 0€</div>
                  <div className="text-gray-600">Financement partenarial</div>
                </div>
                <div className="text-center p-2 bg-white rounded border border-amber-200">
                  <div className="font-bold text-amber-700">ROI 2026</div>
                  <div className="text-gray-600">Retour garanti</div>
                </div>
                <div className="text-center p-2 bg-white rounded border border-amber-200">
                  <div className="font-bold text-amber-700">Marché Unique</div>
                  <div className="text-gray-600">Code éthique/halal</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="editor">Éditeur Code</TabsTrigger>
            <TabsTrigger value="projects">Projets Guidés</TabsTrigger>
            <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview" className="space-y-6">
            {/* Langages supportés */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCode className="h-5 w-5" />
                  Langages et Technologies Supportés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {languages.map((lang, index) => (
                    <motion.div
                      key={lang.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all cursor-pointer">
                        <CardContent className="p-4 text-center">
                          <div className={`w-12 h-12 bg-gradient-to-r ${lang.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                            <lang.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="font-bold text-sm">{lang.name}</h3>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fonctionnalités principales */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-center text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="text-center">
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <Badge 
                        className={
                          feature.status === 'active' ? 'bg-green-500 text-white' :
                          'bg-amber-500 text-white'
                        }
                      >
                        {feature.status === 'active' ? 'Disponible' : 'Premium'}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Projection marché et partenariats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-r from-blue-100 to-purple-100">
                <CardHeader>
                  <CardTitle className="text-center">Projection Marché 2026-2029</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-blue-700 mb-2">450-900K€</div>
                      <div className="text-sm text-blue-600">Investment MVP</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-3xl font-bold text-green-700 mb-2">25-40M€</div>
                      <div className="text-sm text-green-600">CA Année 3</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-purple-700 mb-2">350M€</div>
                      <div className="text-sm text-purple-600">Marché tech éthique</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-amber-700 mb-2">18-24 mois</div>
                      <div className="text-sm text-amber-600">Break-even</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-100 to-emerald-100">
                <CardHeader>
                  <CardTitle className="text-center">Opportunités Partenariat</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div>
                        <div className="font-bold text-green-700">Financement Complet</div>
                        <div className="text-sm text-gray-600">Partenaire tech principal</div>
                      </div>
                      <Badge className="bg-green-500 text-white">70% parts</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div>
                        <div className="font-bold text-blue-700">Co-investissement</div>
                        <div className="text-sm text-gray-600">Infrastructure partagée</div>
                      </div>
                      <Badge className="bg-blue-500 text-white">40% parts</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div>
                        <div className="font-bold text-purple-700">Mécénat Tech</div>
                        <div className="text-sm text-gray-600">Vision éthique partagée</div>
                      </div>
                      <Badge className="bg-purple-500 text-white">15% parts</Badge>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
                    <Users className="mr-2 h-4 w-4" />
                    Proposer Partenariat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Éditeur de code */}
          <TabsContent value="editor" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Éditeur */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      Éditeur CED
                    </span>
                    <div className="flex gap-2">
                      <Button size="sm" onClick={runCode} disabled={isRunning}>
                        <Play className="h-4 w-4 mr-1" />
                        {isRunning ? 'Exécution...' : 'Exécuter'}
                      </Button>
                      <Button size="sm" variant="outline">
                        <Save className="h-4 w-4 mr-1" />
                        Sauver
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={codeContent}
                    onChange={(e) => setCodeContent(e.target.value)}
                    className="min-h-[400px] font-mono text-sm"
                    placeholder="Tapez votre code ici..."
                  />
                </CardContent>
              </Card>

              {/* Preview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Monitor className="h-5 w-5" />
                    Aperçu Temps Réel
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg p-4 bg-white min-h-[400px]">
                    {isRunning ? (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                          <p>Exécution du code...</p>
                        </div>
                      </div>
                    ) : (
                      <iframe
                        srcDoc={codeContent}
                        className="w-full h-full min-h-[350px] border-0"
                        title="Preview"
                      />
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Assistant IA */}
            <Card className="bg-gradient-to-r from-purple-50 to-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-purple-600" />
                  Assistant IA CED
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="Demandez à l'IA : 'Crée un bouton animé' ou 'Debug ce code'..."
                    className="flex-1"
                  />
                  <Button onClick={askAI} disabled={!aiPrompt.trim()}>
                    <Brain className="h-4 w-4 mr-1" />
                    Demander
                  </Button>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  💡 L'IA peut : générer du code, corriger des erreurs, expliquer concepts, optimiser performances
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projets guidés */}
          <TabsContent value="projects" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                    <CardHeader>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <p className="text-sm text-gray-600">{project.description}</p>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{project.language}</span>
                        <Badge variant="outline">{project.difficulty}</Badge>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Durée:</span>
                          <span className="font-medium">{project.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Étudiants:</span>
                          <span className="font-medium">{project.students.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Note:</span>
                          <span className="font-medium">⭐ {project.rating}</span>
                        </div>
                      </div>

                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Commencer le projet
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-green-100 to-blue-100">
              <CardHeader>
                <CardTitle className="text-center">Parcours d'Apprentissage CED</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-bold">Débutant</h3>
                    <p className="text-sm text-gray-600">HTML, CSS, bases JavaScript</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Code className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-bold">Intermédiaire</h3>
                    <p className="text-sm text-gray-600">React, Node.js, APIs REST</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Rocket className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-bold">Avancé</h3>
                    <p className="text-sm text-gray-600">Architecture, DevOps, IA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Collaboration */}
          <TabsContent value="collaboration" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Collaboration Temps Réel
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-medium">Ahmed (Vous)</span>
                      <Badge className="bg-green-500 text-white">Propriétaire</Badge>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="font-medium">Sarah</span>
                      <Badge className="bg-blue-500 text-white">Éditeur</Badge>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="font-medium">Mohamed</span>
                      <Badge className="bg-purple-500 text-white">Lecteur</Badge>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Share2 className="mr-2 h-4 w-4" />
                    Inviter collaborateurs
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5" />
                    Chat Développeurs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                    <div className="p-2 bg-gray-50 rounded">
                      <div className="text-xs text-gray-500">Sarah - 14:32</div>
                      <div className="text-sm">Le composant Button est prêt ✅</div>
                    </div>
                    <div className="p-2 bg-blue-50 rounded ml-4">
                      <div className="text-xs text-gray-500">Vous - 14:35</div>
                      <div className="text-sm">Parfait ! Je teste l'intégration</div>
                    </div>
                    <div className="p-2 bg-gray-50 rounded">
                      <div className="text-xs text-gray-500">Mohamed - 14:38</div>
                      <div className="text-sm">Le design est superbe 🎨</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Input placeholder="Tapez votre message..." className="flex-1" />
                    <Button size="sm">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-amber-100 to-orange-100">
              <CardHeader>
                <CardTitle className="text-center">Fonctionnalités Pro Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Édition simultanée multi-curseurs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Synchronisation temps réel</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Gestion des conflits intelligente</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Historique des modifications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Commentaires sur le code</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Déploiement collaboratif</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}