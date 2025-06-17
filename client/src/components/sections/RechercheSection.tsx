import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { FlaskConical, Microscope, Brain, BookOpen, Users, Globe, Star, TrendingUp, Award, Calendar } from 'lucide-react';

interface ResearchProject {
  id: string;
  title: string;
  description: string;
  status: 'En cours' | 'Publié' | 'En révision' | 'Planifié';
  progress: number;
  domain: string;
  researchers: number;
  publications: number;
  citations: number;
  funding: number;
  duration: string;
  impact: 'Élevé' | 'Moyen' | 'Transformationnel';
  sdg: string[];
  collaborators: string[];
  nextMilestone: string;
}

interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  citations: number;
  type: 'Article' | 'Conférence' | 'Livre' | 'Rapport';
  access: 'Open Access' | 'Payant' | 'Restreint';
  doi: string;
  abstract: string;
  keywords: string[];
}

const researchProjects: ResearchProject[] = [
  {
    id: 'proj-ethical-ai-framework',
    title: 'Framework Universel pour IA Éthique Multilingue',
    description: 'Développement d\'un framework standardisé pour l\'évaluation de l\'éthique IA dans 78 langues et cultures.',
    status: 'En cours',
    progress: 78,
    domain: 'Éthique IA',
    researchers: 47,
    publications: 12,
    citations: 2847,
    funding: 2400000,
    duration: '36 mois',
    impact: 'Transformationnel',
    sdg: ['ODD 4: Éducation', 'ODD 9: Innovation', 'ODD 16: Justice'],
    collaborators: ['Stanford', 'MIT', 'Sorbonne', 'ETH Zurich'],
    nextMilestone: 'Publication framework v2.0 - Juillet 2025'
  },
  {
    id: 'proj-carbon-neutral-ai',
    title: 'IA Carbon-Négative pour Transition Énergétique',
    description: 'Recherche sur les modèles IA optimisés pour réduire l\'empreinte carbone tout en maximisant l\'efficacité.',
    status: 'En cours',
    progress: 65,
    domain: 'IA Verte',
    researchers: 32,
    publications: 8,
    citations: 1923,
    funding: 1800000,
    duration: '24 mois',
    impact: 'Élevé',
    sdg: ['ODD 7: Énergie', 'ODD 13: Climat', 'ODD 15: Biodiversité'],
    collaborators: ['University of Oxford', 'TU Munich', 'University of Tokyo'],
    nextMilestone: 'Prototype IA verte - Septembre 2025'
  },
  {
    id: 'proj-cultural-ai-adaptation',
    title: 'Adaptation Culturelle Intelligente pour IA Globale',
    description: 'Système d\'adaptation automatique des réponses IA selon les contextes culturels et normes sociales.',
    status: 'En révision',
    progress: 89,
    domain: 'IA Culturelle',
    researchers: 28,
    publications: 15,
    citations: 3421,
    funding: 1200000,
    duration: '18 mois',
    impact: 'Élevé',
    sdg: ['ODD 10: Inégalités', 'ODD 11: Villes', 'ODD 16: Justice'],
    collaborators: ['Tsinghua University', 'University of Cape Town', 'Universidad de São Paulo'],
    nextMilestone: 'Publication Nature AI - Août 2025'
  },
  {
    id: 'proj-quantum-ethical-ai',
    title: 'IA Éthique Quantique pour Sécurité Avancée',
    description: 'Exploration des applications quantiques pour renforcer la sécurité et la confidentialité en IA éthique.',
    status: 'Planifié',
    progress: 15,
    domain: 'IA Quantique',
    researchers: 18,
    publications: 2,
    citations: 456,
    funding: 3200000,
    duration: '48 mois',
    impact: 'Transformationnel',
    sdg: ['ODD 9: Innovation', 'ODD 16: Justice', 'ODD 17: Partenariats'],
    collaborators: ['IBM Research', 'Google Quantum AI', 'CERN'],
    nextMilestone: 'Lancement consortium - Octobre 2025'
  }
];

const publications: Publication[] = [
  {
    id: 'pub-multilingual-ethics',
    title: 'Multilingual Ethics in AI: A Cross-Cultural Framework for Responsible Development',
    authors: ['Dr. Yakoubi Yamina', 'Prof. Chen Wei', 'Dr. Sarah Johnson'],
    journal: 'Nature Machine Intelligence',
    year: 2025,
    citations: 1847,
    type: 'Article',
    access: 'Open Access',
    doi: '10.1038/s42256-025-00123-4',
    abstract: 'This paper presents a comprehensive framework for implementing ethical AI across 78 languages and cultural contexts...',
    keywords: ['AI Ethics', 'Multilingual AI', 'Cultural Adaptation', 'Responsible AI']
  },
  {
    id: 'pub-carbon-neutral-models',
    title: 'Carbon-Neutral AI Models: Efficiency Without Compromise',
    authors: ['Dr. Yakoubi Yamina', 'Dr. Klaus Mueller', 'Prof. Takeshi Yamamoto'],
    journal: 'ACM Computing Surveys',
    year: 2024,
    citations: 2341,
    type: 'Article',
    access: 'Open Access',
    doi: '10.1145/3634567.890123',
    abstract: 'We propose novel architectures for AI models that achieve carbon neutrality while maintaining state-of-the-art performance...',
    keywords: ['Green AI', 'Carbon Neutrality', 'Efficient Computing', 'Sustainable AI']
  },
  {
    id: 'pub-ethical-governance',
    title: 'Global Governance Framework for Ethical AI Implementation',
    authors: ['Dr. Yakoubi Yamina', 'Prof. Maria Rodriguez', 'Dr. Ahmed Hassan'],
    journal: 'IEEE Transactions on Technology and Society',
    year: 2024,
    citations: 1923,
    type: 'Article',
    access: 'Open Access',
    doi: '10.1109/TTS.2024.345678',
    abstract: 'This work establishes a governance framework for implementing ethical AI across diverse regulatory environments...',
    keywords: ['AI Governance', 'Ethics Framework', 'Policy Implementation', 'Global Standards']
  }
];

const researchStats = {
  totalProjects: 24,
  activeResearchers: 156,
  totalPublications: 89,
  totalCitations: 23847,
  totalFunding: 12400000,
  impactFactor: 8.9,
  collaboratingUniversities: 48,
  countries: 28
};

export function RechercheSection() {
  const [selectedTab, setSelectedTab] = useState('projets');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Publié': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'En révision': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Planifié': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Transformationnel': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Élevé': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'Moyen': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="recherche" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-full">
              <FlaskConical className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Recherche & Innovation Mondiale
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            À la pointe de la recherche en IA éthique avec 156+ chercheurs dans 28 pays
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Microscope className="h-5 w-5 text-blue-500" />
              <span className="font-semibold">24 projets actifs</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <BookOpen className="h-5 w-5 text-green-500" />
              <span className="font-semibold">89 publications</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <TrendingUp className="h-5 w-5 text-purple-500" />
              <span className="font-semibold">23,847 citations</span>
            </div>
          </div>
        </motion.div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="projets" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Projets de Recherche
            </TabsTrigger>
            <TabsTrigger value="publications" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Publications
            </TabsTrigger>
            <TabsTrigger value="impact" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              Impact Mondial
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projets" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {researchProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <Card className={`h-full transition-all duration-300 ${
                    hoveredProject === project.id ? 'shadow-2xl scale-105' : 'shadow-lg'
                  }`}>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                        <Badge className={getImpactColor(project.impact)}>
                          Impact {project.impact}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progression</span>
                          <span>{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-blue-500" />
                          <span>{project.researchers} chercheurs</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-green-500" />
                          <span>{project.publications} publications</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{project.citations.toLocaleString()} citations</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-purple-500" />
                          <span>{project.duration}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Objectifs ODD :</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.sdg.map((goal, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {goal}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Collaborateurs :</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.collaborators.map((collab, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {collab}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <div className="text-sm font-semibold text-blue-600 mb-2">
                          Financement : {(project.funding / 1000000).toFixed(1)}M €
                        </div>
                        <div className="text-xs text-gray-500">
                          Prochaine étape : {project.nextMilestone}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="publications" className="space-y-8">
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-2">
                          <Badge variant="outline">{pub.type}</Badge>
                          <Badge variant={pub.access === 'Open Access' ? 'default' : 'secondary'}>
                            {pub.access}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-semibold">{pub.citations}</span>
                          <span className="text-xs text-gray-500">citations</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
                      
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {pub.authors.join(', ')} • {pub.journal} • {pub.year}
                      </div>

                      <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">
                        {pub.abstract}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {pub.keywords.map((keyword, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-500">
                          DOI: {pub.doi}
                        </div>
                        <Button size="sm" variant="outline">
                          Lire l'article
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="impact" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
                <FlaskConical className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-blue-600 mb-2">{researchStats.totalProjects}</div>
                <div className="text-gray-600 dark:text-gray-300">Projets de recherche</div>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-green-600 mb-2">{researchStats.activeResearchers}</div>
                <div className="text-gray-600 dark:text-gray-300">Chercheurs actifs</div>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800">
                <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-purple-600 mb-2">{researchStats.totalPublications}</div>
                <div className="text-gray-600 dark:text-gray-300">Publications</div>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800">
                <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-orange-600 mb-2">{researchStats.totalCitations.toLocaleString()}</div>
                <div className="text-gray-600 dark:text-gray-300">Citations totales</div>
              </Card>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Globe className="h-6 w-6 text-blue-600" />
                  Portée Internationale
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Universités collaboratrices</span>
                    <span className="font-bold text-blue-600">{researchStats.collaboratingUniversities}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Pays représentés</span>
                    <span className="font-bold text-green-600">{researchStats.countries}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Financement total</span>
                    <span className="font-bold text-purple-600">{(researchStats.totalFunding / 1000000).toFixed(1)}M €</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Facteur d'impact moyen</span>
                    <span className="font-bold text-orange-600">{researchStats.impactFactor}</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Award className="h-6 w-6 text-purple-600" />
                  Reconnaissance Mondiale
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Prix UNESCO IA Éthique 2024</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Framework universel multilingue</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">ACM SIGAI Award 2024</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Contribution exceptionnelle IA responsable</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">EU AI Excellence Award 2025</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Innovation en IA verte</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Nature Research Highlight 2025</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Article le plus cité en éthique IA</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8">
            <h3 className="text-2xl font-bold mb-4">
              Rejoignez nos programmes de recherche
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Contribuez à l'avancement de l'IA éthique mondiale
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary">
                Proposer un projet
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                Devenir chercheur associé
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}