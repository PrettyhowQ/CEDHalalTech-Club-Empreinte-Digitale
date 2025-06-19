import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  Laptop, 
  Smartphone, 
  Globe, 
  Database, 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp,
  Star,
  Users,
  Clock,
  Award,
  Target,
  BookOpen,
  Lightbulb
} from 'lucide-react';

interface ProgrammingLanguage {
  id: string;
  name: string;
  category: 'Web Frontend' | 'Web Backend' | 'Mobile' | 'Data Science' | 'IA/ML' | 'Systèmes' | 'Blockchain' | 'Gaming' | 'IoT' | 'Cybersécurité';
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  popularity: number; // 1-100
  yearCreated: number;
  useCases: string[];
  salary: {
    junior: number;
    senior: number;
    currency: string;
  };
  companies: string[];
  ethicalApplications: string[];
  futureProspects: 'Croissante' | 'Stable' | 'Décroissante';
  learningTime: string;
  prerequisites: string[];
  icon: string;
  description: string;
}

const programmingLanguagesDatabase: ProgrammingLanguage[] = [
  // Web Frontend
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Web Frontend',
    difficulty: 'Débutant',
    popularity: 98,
    yearCreated: 1995,
    useCases: ['Sites web interactifs', 'Applications web', 'Applications mobiles', 'Serveurs Node.js'],
    salary: { junior: 35000, senior: 65000, currency: 'EUR' },
    companies: ['Google', 'Facebook', 'Netflix', 'Airbnb'],
    ethicalApplications: ['Accessibilité web', 'Applications éducatives', 'Plateformes de don'],
    futureProspects: 'Croissante',
    learningTime: '3-6 mois',
    prerequisites: ['HTML', 'CSS'],
    icon: '🟨',
    description: 'Langage incontournable du web moderne, polyvalent et accessible'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Web Frontend',
    difficulty: 'Intermédiaire',
    popularity: 89,
    yearCreated: 2012,
    useCases: ['Applications web complexes', 'Développement d\'équipe', 'Applications Angular/React'],
    salary: { junior: 38000, senior: 70000, currency: 'EUR' },
    companies: ['Microsoft', 'Google', 'Slack', 'Airbnb'],
    ethicalApplications: ['Code plus fiable', 'Réduction des bugs', 'Collaboration équipe'],
    futureProspects: 'Croissante',
    learningTime: '2-4 mois après JS',
    prerequisites: ['JavaScript'],
    icon: '🔷',
    description: 'Version typée de JavaScript pour des applications robustes'
  },
  {
    id: 'react',
    name: 'React',
    category: 'Web Frontend',
    difficulty: 'Intermédiaire',
    popularity: 92,
    yearCreated: 2013,
    useCases: ['Interfaces utilisateur', 'SPA', 'Applications mobiles React Native'],
    salary: { junior: 40000, senior: 75000, currency: 'EUR' },
    companies: ['Facebook', 'Netflix', 'Uber', 'Instagram'],
    ethicalApplications: ['Interfaces accessibles', 'UX inclusive', 'Applications sociales'],
    futureProspects: 'Croissante',
    learningTime: '4-8 mois',
    prerequisites: ['JavaScript', 'HTML', 'CSS'],
    icon: '⚛️',
    description: 'Bibliothèque pour créer des interfaces utilisateur modernes'
  },

  // Web Backend
  {
    id: 'python',
    name: 'Python',
    category: 'Web Backend',
    difficulty: 'Débutant',
    popularity: 95,
    yearCreated: 1991,
    useCases: ['Intelligence artificielle', 'Data science', 'Automatisation', 'Web backend'],
    salary: { junior: 42000, senior: 80000, currency: 'EUR' },
    companies: ['Google', 'NASA', 'Instagram', 'Spotify'],
    ethicalApplications: ['Recherche médicale', 'Éducation', 'Analyse environnementale'],
    futureProspects: 'Croissante',
    learningTime: '2-4 mois',
    prerequisites: ['Logique de base'],
    icon: '🐍',
    description: 'Langage polyvalent, idéal pour débuter et l\'IA'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Web Backend',
    difficulty: 'Intermédiaire',
    popularity: 87,
    yearCreated: 2009,
    useCases: ['APIs REST', 'Applications temps réel', 'Microservices'],
    salary: { junior: 38000, senior: 68000, currency: 'EUR' },
    companies: ['Netflix', 'PayPal', 'Uber', 'LinkedIn'],
    ethicalApplications: ['Applications collaboratives', 'Plateformes éducatives', 'Chat humanitaire'],
    futureProspects: 'Croissante',
    learningTime: '3-6 mois',
    prerequisites: ['JavaScript'],
    icon: '💚',
    description: 'JavaScript côté serveur pour applications rapides'
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Web Backend',
    difficulty: 'Intermédiaire',
    popularity: 85,
    yearCreated: 1995,
    useCases: ['Applications entreprise', 'Android', 'Systèmes distribués'],
    salary: { junior: 40000, senior: 75000, currency: 'EUR' },
    companies: ['Oracle', 'Google', 'Amazon', 'IBM'],
    ethicalApplications: ['Systèmes bancaires sécurisés', 'Applications médicales', 'E-gouvernement'],
    futureProspects: 'Stable',
    learningTime: '6-12 mois',
    prerequisites: ['Programmation orientée objet'],
    icon: '☕',
    description: 'Langage robuste pour applications d\'entreprise'
  },

  // Mobile
  {
    id: 'swift',
    name: 'Swift',
    category: 'Mobile',
    difficulty: 'Intermédiaire',
    popularity: 75,
    yearCreated: 2014,
    useCases: ['Applications iOS', 'macOS', 'watchOS'],
    salary: { junior: 45000, senior: 85000, currency: 'EUR' },
    companies: ['Apple', 'Airbnb', 'Slack', 'LinkedIn'],
    ethicalApplications: ['Apps santé', 'Éducation accessible', 'Applications sociales'],
    futureProspects: 'Croissante',
    learningTime: '4-8 mois',
    prerequisites: ['Programmation orientée objet'],
    icon: '🍎',
    description: 'Langage moderne pour l\'écosystème Apple'
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    category: 'Mobile',
    difficulty: 'Intermédiaire',
    popularity: 78,
    yearCreated: 2011,
    useCases: ['Android', 'Applications multiplateforme', 'Backend'],
    salary: { junior: 42000, senior: 78000, currency: 'EUR' },
    companies: ['Google', 'Pinterest', 'Trello', 'Coursera'],
    ethicalApplications: ['Apps éducatives Android', 'Santé mobile', 'Inclusion numérique'],
    futureProspects: 'Croissante',
    learningTime: '3-6 mois',
    prerequisites: ['Java ou programmation OOP'],
    icon: '🤖',
    description: 'Langage moderne pour Android et plus'
  },

  // Data Science & IA
  {
    id: 'r',
    name: 'R',
    category: 'Data Science',
    difficulty: 'Intermédiaire',
    popularity: 70,
    yearCreated: 1993,
    useCases: ['Analyse statistique', 'Visualisation données', 'Recherche'],
    salary: { junior: 45000, senior: 85000, currency: 'EUR' },
    companies: ['Google', 'Facebook', 'Microsoft', 'Uber'],
    ethicalApplications: ['Recherche médicale', 'Analyse climatique', 'Études sociales'],
    futureProspects: 'Stable',
    learningTime: '4-8 mois',
    prerequisites: ['Statistiques', 'Mathématiques'],
    icon: '📊',
    description: 'Langage spécialisé pour l\'analyse statistique'
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow/Python',
    category: 'IA/ML',
    difficulty: 'Avancé',
    popularity: 88,
    yearCreated: 2015,
    useCases: ['Machine Learning', 'Deep Learning', 'IA éthique'],
    salary: { junior: 55000, senior: 120000, currency: 'EUR' },
    companies: ['Google', 'OpenAI', 'Tesla', 'DeepMind'],
    ethicalApplications: ['IA pour le bien social', 'Diagnostic médical', 'Éducation personnalisée'],
    futureProspects: 'Croissante',
    learningTime: '8-18 mois',
    prerequisites: ['Python', 'Mathématiques', 'Statistiques'],
    icon: '🧠',
    description: 'Framework pour intelligence artificielle éthique'
  },

  // Cybersécurité
  {
    id: 'cybersecurity',
    name: 'Python/Cybersécurité',
    category: 'Cybersécurité',
    difficulty: 'Avancé',
    popularity: 82,
    yearCreated: 1991,
    useCases: ['Tests de pénétration', 'Analyse malware', 'Sécurité réseau'],
    salary: { junior: 50000, senior: 95000, currency: 'EUR' },
    companies: ['CrowdStrike', 'Palo Alto', 'FireEye', 'IBM Security'],
    ethicalApplications: ['Protection données personnelles', 'Sécurité hôpitaux', 'Lutte cybercrime'],
    futureProspects: 'Croissante',
    learningTime: '12-24 mois',
    prerequisites: ['Python', 'Réseaux', 'Systèmes'],
    icon: '🛡️',
    description: 'Spécialisation en sécurité informatique éthique'
  },

  // Blockchain
  {
    id: 'solidity',
    name: 'Solidity',
    category: 'Blockchain',
    difficulty: 'Avancé',
    popularity: 65,
    yearCreated: 2014,
    useCases: ['Smart contracts', 'DeFi', 'NFT éthiques'],
    salary: { junior: 60000, senior: 130000, currency: 'EUR' },
    companies: ['ConsenSys', 'Chainlink', 'Uniswap', 'OpenSea'],
    ethicalApplications: ['Transparence financière', 'Vote électronique', 'Aide humanitaire'],
    futureProspects: 'Croissante',
    learningTime: '6-12 mois',
    prerequisites: ['JavaScript', 'Cryptographie'],
    icon: '⛓️',
    description: 'Développement blockchain responsable'
  },

  // Gaming
  {
    id: 'csharp',
    name: 'C#',
    category: 'Gaming',
    difficulty: 'Intermédiaire',
    popularity: 80,
    yearCreated: 2000,
    useCases: ['Jeux Unity', 'Applications Windows', 'Web ASP.NET'],
    salary: { junior: 40000, senior: 75000, currency: 'EUR' },
    companies: ['Microsoft', 'Unity', 'Epic Games', 'Ubisoft'],
    ethicalApplications: ['Jeux éducatifs', 'Simulations médicales', 'Thérapie par le jeu'],
    futureProspects: 'Stable',
    learningTime: '4-8 mois',
    prerequisites: ['Programmation orientée objet'],
    icon: '🎮',
    description: 'Langage polyvalent pour jeux et applications'
  }
];

const learningPaths = [
  {
    id: 'web-fullstack',
    name: 'Développeur Web Full-Stack',
    duration: '8-12 mois',
    languages: ['HTML/CSS', 'JavaScript', 'React', 'Node.js'],
    difficulty: 'Débutant → Avancé',
    salary: '35k-80k EUR',
    ethicalFocus: 'Accessibilité web et inclusion numérique'
  },
  {
    id: 'ai-ethical',
    name: 'IA Éthique & Data Science',
    duration: '12-18 mois',
    languages: ['Python', 'TensorFlow', 'R'],
    difficulty: 'Intermédiaire → Expert',
    salary: '50k-120k EUR',
    ethicalFocus: 'IA responsable et biais algorithmiques'
  },
  {
    id: 'mobile-inclusive',
    name: 'Développement Mobile Inclusif',
    duration: '6-10 mois',
    languages: ['Swift', 'Kotlin', 'React Native'],
    difficulty: 'Intermédiaire',
    salary: '42k-85k EUR',
    ethicalFocus: 'Applications accessibles et durables'
  },
  {
    id: 'cybersecurity-ethical',
    name: 'Cybersécurité Éthique',
    duration: '12-24 mois',
    languages: ['Python', 'Bash', 'Outils spécialisés'],
    difficulty: 'Avancé → Expert',
    salary: '50k-95k EUR',
    ethicalFocus: 'Protection vie privée et sécurité responsable'
  }
];

export function ProgrammingLanguagesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(programmingLanguagesDatabase.map(lang => lang.category)))];
  const difficulties = ['all', 'Débutant', 'Intermédiaire', 'Avancé', 'Expert'];

  const filteredLanguages = programmingLanguagesDatabase.filter(lang => {
    const categoryMatch = selectedCategory === 'all' || lang.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || lang.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <Code className="inline-block h-12 w-12 text-blue-600 mr-4" />
            Langages de Programmation
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Guide complet des technologies pour devenir développeur éthique. 
            Inspiré des meilleures plateformes comme SoloLearn et Coursera, 
            avec un focus sur l'impact positif et les applications responsables.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Lightbulb className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">70+ Technologies</h3>
              <p className="text-sm text-gray-600">Langages modernes et demandés</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Shield className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Éthique & Responsabilité</h3>
              <p className="text-sm text-gray-600">Focus sur l'impact positif</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <TrendingUp className="h-8 w-8 text-purple-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Perspectives d'Avenir</h3>
              <p className="text-sm text-gray-600">Métiers de demain</p>
            </div>
          </div>
        </motion.div>

        <Tabs defaultValue="langages" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="langages" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Langages
            </TabsTrigger>
            <TabsTrigger value="parcours" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Parcours
            </TabsTrigger>
            <TabsTrigger value="ethique" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Impact Éthique
            </TabsTrigger>
          </TabsList>

          <TabsContent value="langages" className="space-y-8">
            {/* Filtres */}
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="space-y-2">
                <label className="text-sm font-medium">Catégorie :</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      onClick={() => setSelectedCategory(category)}
                      size="sm"
                    >
                      {category === 'all' ? 'Toutes' : category}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Niveau :</label>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map((difficulty) => (
                    <Button
                      key={difficulty}
                      variant={selectedDifficulty === difficulty ? 'default' : 'outline'}
                      onClick={() => setSelectedDifficulty(difficulty)}
                      size="sm"
                    >
                      {difficulty === 'all' ? 'Tous' : difficulty}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Grille des langages */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredLanguages.map((language, index) => (
                <motion.div
                  key={language.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{language.icon}</span>
                          <div>
                            <CardTitle className="text-lg">{language.name}</CardTitle>
                            <Badge variant="secondary">{language.category}</Badge>
                          </div>
                        </div>
                        <Badge 
                          variant={language.difficulty === 'Débutant' ? 'default' : 
                                   language.difficulty === 'Intermédiaire' ? 'secondary' : 'destructive'}
                        >
                          {language.difficulty}
                        </Badge>
                      </div>
                      <CardDescription>{language.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Popularité */}
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Popularité</span>
                          <span>{language.popularity}%</span>
                        </div>
                        <Progress value={language.popularity} className="h-2" />
                      </div>

                      {/* Salaire */}
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="text-sm font-medium mb-1">💰 Salaire moyen</div>
                        <div className="text-sm">
                          Junior: {language.salary.junior.toLocaleString()} {language.salary.currency}
                          <br />
                          Senior: {language.salary.senior.toLocaleString()} {language.salary.currency}
                        </div>
                      </div>

                      {/* Applications éthiques */}
                      <div>
                        <div className="text-sm font-medium mb-2 flex items-center gap-1">
                          <Shield className="h-4 w-4 text-green-500" />
                          Applications éthiques
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {language.ethicalApplications.slice(0, 2).map((app, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Entreprises */}
                      <div>
                        <div className="text-sm font-medium mb-2">🏢 Entreprises</div>
                        <div className="text-xs text-gray-600">
                          {language.companies.slice(0, 3).join(', ')}
                        </div>
                      </div>

                      {/* Temps d'apprentissage */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{language.learningTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span>{language.futureProspects}</span>
                        </div>
                      </div>

                      <Button className="w-full" variant="outline">
                        Commencer l'apprentissage
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="parcours" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {learningPaths.map((path, index) => (
                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-blue-600" />
                        {path.name}
                      </CardTitle>
                      <CardDescription>
                        Durée: {path.duration} • Niveau: {path.difficulty}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="text-sm font-medium mb-2">Technologies à maîtriser:</div>
                        <div className="flex flex-wrap gap-2">
                          {path.languages.map((lang, idx) => (
                            <Badge key={idx} variant="secondary">{lang}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="text-sm font-medium mb-1">💰 Salaire attendu</div>
                        <div className="text-sm">{path.salary}</div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="text-sm font-medium mb-1 flex items-center gap-1">
                          <Shield className="h-4 w-4 text-blue-500" />
                          Focus éthique
                        </div>
                        <div className="text-sm">{path.ethicalFocus}</div>
                      </div>

                      <Button className="w-full">
                        Démarrer ce parcours
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ethique" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    IA Responsable
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Développer des systèmes d'IA éthiques, transparents et sans biais.
                  </p>
                  <ul className="text-xs space-y-1">
                    <li>• Algorithmes équitables</li>
                    <li>• Protection de la vie privée</li>
                    <li>• Transparence des décisions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-blue-600" />
                    Accessibilité Web
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Créer des applications accessibles à tous, y compris aux personnes handicapées.
                  </p>
                  <ul className="text-xs space-y-1">
                    <li>• Standards WCAG</li>
                    <li>• Navigation au clavier</li>
                    <li>• Lecteurs d'écran</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    Impact Social
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Utiliser la technologie pour résoudre des problèmes sociaux et environnementaux.
                  </p>
                  <ul className="text-xs space-y-1">
                    <li>• Applications éducatives</li>
                    <li>• Plateformes d'aide</li>
                    <li>• Solutions durables</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-green-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-center">Manifeste du Développeur Éthique</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Nos engagements :</h4>
                    <ul className="text-sm space-y-1">
                      <li>✓ Créer des technologies inclusives</li>
                      <li>✓ Respecter la vie privée des utilisateurs</li>
                      <li>✓ Lutter contre les biais algorithmiques</li>
                      <li>✓ Promouvoir l'égalité d'accès au numérique</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Notre mission :</h4>
                    <p className="text-sm">
                      Former la nouvelle génération de développeurs conscients de leur impact 
                      et capables de créer un monde numérique plus juste et durable.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}