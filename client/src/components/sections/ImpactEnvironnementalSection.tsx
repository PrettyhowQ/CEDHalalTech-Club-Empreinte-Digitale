import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Leaf, TreePine, Zap, Recycle, Globe, TrendingDown, Award, Target, Lightbulb, BarChart3 } from 'lucide-react';

interface EnvironmentalMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  target: number;
  improvement: number;
  status: 'En cours' | 'Atteint' | 'Dépassé';
  category: 'Énergie' | 'Carbone' | 'Ressources' | 'Innovation';
  description: string;
  lastUpdate: string;
}

interface GreenInitiative {
  id: string;
  title: string;
  description: string;
  status: 'Actif' | 'Planifié' | 'Complété';
  impact: string;
  timeline: string;
  budget: number;
  category: 'IA Verte' | 'Efficacité Énergétique' | 'Économie Circulaire' | 'Éducation';
  sdgTargets: string[];
  partners: string[];
  results: string[];
}

interface CarbonData {
  year: number;
  totalEmissions: number;
  offsetEmissions: number;
  netEmissions: number;
  target: number;
  projects: number;
}

const environmentalMetrics: EnvironmentalMetric[] = [
  {
    id: 'carbon-neutrality',
    name: 'Neutralité Carbone',
    value: 8.9,
    unit: '/10',
    target: 9.5,
    improvement: 23,
    status: 'En cours',
    category: 'Carbone',
    description: 'Score de neutralité carbone certifié par organismes indépendants',
    lastUpdate: '2025-06-15'
  },
  {
    id: 'energy-efficiency',
    name: 'Efficacité Énergétique IA',
    value: 76,
    unit: '%',
    target: 85,
    improvement: 34,
    status: 'En cours',
    category: 'Énergie',
    description: 'Réduction consommation énergétique modèles IA vs benchmarks standard',
    lastUpdate: '2025-06-14'
  },
  {
    id: 'renewable-energy',
    name: 'Énergie Renouvelable',
    value: 94,
    unit: '%',
    target: 100,
    improvement: 18,
    status: 'En cours',
    category: 'Énergie',
    description: 'Pourcentage infrastructure alimentée par énergies renouvelables',
    lastUpdate: '2025-06-13'
  },
  {
    id: 'circular-economy',
    name: 'Économie Circulaire',
    value: 67,
    unit: '%',
    target: 80,
    improvement: 42,
    status: 'En cours',
    category: 'Ressources',
    description: 'Matériaux et ressources réutilisés ou recyclés',
    lastUpdate: '2025-06-12'
  },
  {
    id: 'green-innovation',
    name: 'Innovations Vertes',
    value: 156,
    unit: 'projets',
    target: 200,
    improvement: 89,
    status: 'En cours',
    category: 'Innovation',
    description: 'Projets IA développés pour solutions environnementales',
    lastUpdate: '2025-06-15'
  },
  {
    id: 'biodiversity-impact',
    name: 'Impact Biodiversité',
    value: 9.2,
    unit: '/10',
    target: 9.0,
    improvement: 15,
    status: 'Dépassé',
    category: 'Ressources',
    description: 'Score impact positif sur préservation biodiversité',
    lastUpdate: '2025-06-10'
  }
];

const greenInitiatives: GreenInitiative[] = [
  {
    id: 'ai-carbon-optimization',
    title: 'Optimisation Carbone des Modèles IA',
    description: 'Développement d\'algorithmes IA optimisés pour réduire l\'empreinte carbone de 60% tout en maintenant les performances.',
    status: 'Actif',
    impact: 'Réduction 2,400 tonnes CO2/an',
    timeline: '2024-2026',
    budget: 1800000,
    category: 'IA Verte',
    sdgTargets: ['ODD 7: Énergie propre', 'ODD 13: Action climatique'],
    partners: ['MIT Energy Initiative', 'Google DeepMind', 'ETH Zurich'],
    results: ['Réduction 45% consommation énergétique', 'Modèles 3x plus efficaces', '12 brevets déposés']
  },
  {
    id: 'green-datacenter-geneva',
    title: 'Datacenter Vert de Genève',
    description: 'Infrastructure cloud 100% alimentée par énergies renouvelables avec système de refroidissement passif innovant.',
    status: 'Actif',
    impact: 'Infrastructure carbone-négative',
    timeline: '2023-2025',
    budget: 3200000,
    category: 'Efficacité Énergétique',
    sdgTargets: ['ODD 7: Énergie propre', 'ODD 9: Innovation', 'ODD 11: Villes durables'],
    partners: ['SIG Genève', 'CERN', 'Université de Genève'],
    results: ['100% énergie renouvelable', 'Refroidissement passif 80%', 'Excédent énergétique redistribué']
  },
  {
    id: 'circular-hardware-program',
    title: 'Programme Matériel Circulaire',
    description: 'Initiative de réutilisation et recyclage du matériel informatique avec partenaires locaux et internationaux.',
    status: 'Actif',
    impact: '89% matériel réutilisé/recyclé',
    timeline: '2024-2027',
    budget: 450000,
    category: 'Économie Circulaire',
    sdgTargets: ['ODD 12: Consommation responsable', 'ODD 8: Travail décent'],
    partners: ['Ecosystem France', 'Recytech Suisse', 'Dell Technologies'],
    results: ['2,400 équipements traités', '156 tonnes déchets évités', '89 emplois créés']
  },
  {
    id: 'climate-education-global',
    title: 'Éducation Climat IA Mondiale',
    description: 'Formation de 100,000+ professionnels aux solutions IA pour défis climatiques dans 50 pays.',
    status: 'Actif',
    impact: '100,000+ personnes formées',
    timeline: '2023-2026',
    budget: 2100000,
    category: 'Éducation',
    sdgTargets: ['ODD 4: Éducation', 'ODD 13: Action climatique', 'ODD 17: Partenariats'],
    partners: ['UNESCO', 'PNUD', 'Union Européenne', 'Fondation Gates'],
    results: ['78,000 personnes formées', '156 projets climat lancés', '34 pays participants']
  }
];

const carbonData: CarbonData[] = [
  { year: 2022, totalEmissions: 1200, offsetEmissions: 800, netEmissions: 400, target: 600, projects: 12 },
  { year: 2023, totalEmissions: 980, offsetEmissions: 1100, netEmissions: -120, target: 300, projects: 24 },
  { year: 2024, totalEmissions: 750, offsetEmissions: 1400, netEmissions: -650, target: 0, projects: 36 },
  { year: 2025, totalEmissions: 620, offsetEmissions: 1800, netEmissions: -1180, target: -500, projects: 48 }
];

export function ImpactEnvironnementalSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  const categories = ['all', 'Carbone', 'Énergie', 'Ressources', 'Innovation'];
  
  const filteredMetrics = selectedCategory === 'all' 
    ? environmentalMetrics 
    : environmentalMetrics.filter(m => m.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Atteint': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Dépassé': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'En cours': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'IA Verte': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Efficacité Énergétique': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Économie Circulaire': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Éducation': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="impact-environnemental" className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-900 dark:to-emerald-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-full">
              <Leaf className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Impact Environnemental Positif
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            IA responsable et durable avec impact carbone négatif certifié
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <TrendingDown className="h-5 w-5 text-green-500" />
              <span className="font-semibold">Carbone négatif</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Zap className="h-5 w-5 text-blue-500" />
              <span className="font-semibold">94% énergie verte</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <TreePine className="h-5 w-5 text-emerald-500" />
              <span className="font-semibold">156 projets verts</span>
            </div>
          </div>
        </motion.div>

        <Tabs defaultValue="metriques" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="metriques" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Métriques
            </TabsTrigger>
            <TabsTrigger value="initiatives" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Initiatives
            </TabsTrigger>
            <TabsTrigger value="carbone" className="flex items-center gap-2">
              <TrendingDown className="h-4 w-4" />
              Carbone
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              Certifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="metriques" className="space-y-8">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  {category === 'all' ? 'Toutes catégories' : category}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMetrics.map((metric, index) => (
                <motion.div
                  key={metric.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredMetric(metric.id)}
                  onHoverEnd={() => setHoveredMetric(null)}
                >
                  <Card className={`h-full transition-all duration-300 ${
                    hoveredMetric === metric.id ? 'shadow-2xl scale-105' : 'shadow-lg'
                  }`}>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className={getStatusColor(metric.status)}>
                          {metric.status}
                        </Badge>
                        <div className="text-right">
                          <div className="text-xs text-gray-500">Amélioration</div>
                          <div className="text-sm font-bold text-green-600">+{metric.improvement}%</div>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{metric.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {metric.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-1">
                          {metric.value}{metric.unit}
                        </div>
                        <div className="text-sm text-gray-500">
                          Objectif: {metric.target}{metric.unit}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progression vers objectif</span>
                          <span>{Math.round((metric.value / metric.target) * 100)}%</span>
                        </div>
                        <Progress value={(metric.value / metric.target) * 100} className="h-2" />
                      </div>

                      <div className="text-xs text-gray-500 text-center">
                        Dernière mise à jour: {new Date(metric.lastUpdate).toLocaleDateString('fr-FR')}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="initiatives" className="space-y-6">
            {greenInitiatives.map((initiative, index) => (
              <motion.div
                key={initiative.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-2">
                        <Badge className={getCategoryColor(initiative.category)}>
                          {initiative.category}
                        </Badge>
                        <Badge className={getStatusColor(initiative.status)}>
                          {initiative.status}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-green-600">
                          {(initiative.budget / 1000000).toFixed(1)}M €
                        </div>
                        <div className="text-sm text-gray-500">Budget</div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{initiative.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{initiative.description}</p>

                    <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <span className="font-semibold">Impact:</span> {initiative.impact}
                      </div>
                      <div>
                        <span className="font-semibold">Timeline:</span> {initiative.timeline}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Objectifs ODD :</h4>
                      <div className="flex flex-wrap gap-1">
                        {initiative.sdgTargets.map((target, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {target}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Partenaires :</h4>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {initiative.partners.join(', ')}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Résultats obtenus :</h4>
                      <ul className="space-y-1">
                        {initiative.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="carbone" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800">
                <TrendingDown className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-green-600 mb-2">-1,180</div>
                <div className="text-gray-600 dark:text-gray-300">Tonnes CO2 (2025)</div>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
                <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-blue-600 mb-2">94%</div>
                <div className="text-gray-600 dark:text-gray-300">Énergie renouvelable</div>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800">
                <Recycle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-purple-600 mb-2">67%</div>
                <div className="text-gray-600 dark:text-gray-300">Économie circulaire</div>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900 dark:to-emerald-800">
                <TreePine className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-emerald-600 mb-2">48</div>
                <div className="text-gray-600 dark:text-gray-300">Projets carbone 2025</div>
              </Card>
            </motion.div>

            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6">Évolution Empreinte Carbone</h3>
              <div className="space-y-4">
                {carbonData.map((data, index) => (
                  <div key={data.year} className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{data.year}</span>
                      <span className={`font-bold ${data.netEmissions < 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {data.netEmissions > 0 ? '+' : ''}{data.netEmissions} tonnes CO2
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500">Émissions totales</div>
                        <div className="font-semibold">{data.totalEmissions} tonnes</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Compensation</div>
                        <div className="font-semibold text-green-600">{data.offsetEmissions} tonnes</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Projets actifs</div>
                        <div className="font-semibold">{data.projects}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="certifications" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Award className="h-6 w-6 text-green-600" />
                  Certifications Environnementales
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">ISO 14001:2015 - Management Environnemental</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Certification système management environnemental</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Carbon Trust Standard</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Réduction continue empreinte carbone</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">B-Corp Certification</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Entreprise à impact social et environnemental</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">EU Ecolabel</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Label écologique européen services numériques</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Target className="h-6 w-6 text-blue-600" />
                  Objectifs 2030
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Neutralité carbone absolue</span>
                    <Badge className="bg-green-100 text-green-800">2025</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>100% énergie renouvelable</span>
                    <Badge className="bg-blue-100 text-blue-800">2025</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Économie circulaire 95%</span>
                    <Badge className="bg-purple-100 text-purple-800">2027</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Impact biodiversité +10%</span>
                    <Badge className="bg-emerald-100 text-emerald-800">2028</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>500 projets verts actifs</span>
                    <Badge className="bg-orange-100 text-orange-800">2030</Badge>
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8">
            <h3 className="text-2xl font-bold mb-4">
              Rejoignez la révolution IA durable
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Développez des solutions IA responsables pour un avenir plus vert
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary">
                Découvrir nos projets verts
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-green-600">
                Calculer votre impact
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}