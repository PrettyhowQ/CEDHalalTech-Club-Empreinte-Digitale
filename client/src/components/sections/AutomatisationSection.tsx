import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Zap, Workflow, Bot, Shield, Database, Code, MessageSquare, CheckCircle, Settings, Cpu } from 'lucide-react';

interface AutomationTool {
  id: string;
  category: string;
  name: string;
  description: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  integration: string;
  icon: string;
  features: string[];
  pricing: string;
  useCases: string[];
  compatibility: string[];
  setup: string;
  benefits: string[];
}

interface AutomationWorkflow {
  id: string;
  name: string;
  description: string;
  tools: string[];
  complexity: 'Simple' | 'Moyen' | 'Complexe';
  timeToSetup: string;
  impact: string;
  steps: string[];
  prerequisites: string[];
  category: string;
}

const automationTools: AutomationTool[] = [
  {
    id: 'zapier',
    category: 'Automatisation No-Code',
    name: 'Zapier',
    description: 'Connecte +5000 apps (Google, Notion, Gmail…)',
    level: 'Débutant',
    integration: 'Planning, IA, Email, CRM',
    icon: '🔄',
    features: ['5000+ intégrations', 'Interface glisser-déposer', 'Triggers multiples', 'Webhooks avancés'],
    pricing: 'Gratuit - 749$/mois',
    useCases: ['Synchronisation calendrier', 'Notifications automatiques', 'CRM automation', 'Email marketing'],
    compatibility: ['Google Workspace', 'Microsoft 365', 'Slack', 'Notion'],
    setup: '15 minutes',
    benefits: ['Gain temps 80%', 'Réduction erreurs 95%', 'Productivité équipe +60%']
  },
  {
    id: 'make',
    category: 'Automatisation No-Code',
    name: 'Make (ex-Integromat)',
    description: 'Scénarios visuels complexes, plus personnalisable que Zapier',
    level: 'Intermédiaire',
    integration: 'Email IA + Formulaires',
    icon: '⚙️',
    features: ['Scénarios visuels', 'Logique conditionnelle', 'Boucles et itérations', 'API REST native'],
    pricing: 'Gratuit - 299$/mois',
    useCases: ['Workflows complexes', 'Traitement données', 'API customisées', 'Logique métier'],
    compatibility: ['OpenAI API', 'Google Sheets', 'Airtable', 'Webhooks'],
    setup: '45 minutes',
    benefits: ['Flexibilité maximale', 'Workflows avancés', 'Intégration IA native']
  },
  {
    id: 'n8n',
    category: 'Automatisation Code',
    name: 'n8n',
    description: 'Open source, automation auto-hébergée (RGPD Friendly)',
    level: 'Avancé',
    integration: 'Version Suisse RGPD',
    icon: '💻',
    features: ['Open source', 'Auto-hébergement', 'Conformité RGPD', 'API REST complète'],
    pricing: 'Gratuit (open source)',
    useCases: ['Hébergement Suisse', 'Compliance RGPD', 'Données sensibles', 'Workflows sécurisés'],
    compatibility: ['Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
    setup: '2-4 heures',
    benefits: ['Contrôle total données', 'Conformité maximale', 'Pas de limites']
  },
  {
    id: 'autogpt',
    category: 'Agent IA',
    name: 'AutoGPT / GPT-Engineer',
    description: 'Agent autonome avec objectifs et mémoire',
    level: 'Avancé',
    integration: 'Super IARP + Coach IA',
    icon: '🧠',
    features: ['IA autonome', 'Mémoire persistante', 'Objectifs complexes', 'Auto-amélioration'],
    pricing: 'Open source + coûts API',
    useCases: ['Coaching personnalisé', 'Recherche autonome', 'Planification projets', 'Apprentissage adaptatif'],
    compatibility: ['OpenAI GPT-4', 'Pinecone', 'LangChain', 'ChromaDB'],
    setup: '1-2 jours',
    benefits: ['Autonomie complète', 'Apprentissage continu', 'Personnalisation poussée']
  },
  {
    id: 'crewai',
    category: 'Agent IA',
    name: 'CrewAI / LangGraph',
    description: 'Organisation d\'agents IA collaboratifs',
    level: 'Avancé',
    integration: 'Apprentissage structuré',
    icon: '👥',
    features: ['Agents collaboratifs', 'Orchestration workflows', 'Rôles spécialisés', 'Communication inter-agents'],
    pricing: 'Open source + coûts API',
    useCases: ['Équipes IA virtuelles', 'Projets collaboratifs', 'Recherche multi-domaines', 'Résolution problèmes complexes'],
    compatibility: ['LangChain', 'OpenAI', 'Anthropic', 'Hugging Face'],
    setup: '2-3 jours',
    benefits: ['Intelligence collective', 'Spécialisation rôles', 'Efficacité équipe IA']
  },
  {
    id: 'openai-langchain',
    category: 'API & Intégrations',
    name: 'OpenAI API + LangChain',
    description: 'Intégrer tous les GPTs (écriture, analyse, etc.)',
    level: 'Avancé',
    integration: 'Super IARP Pro',
    icon: '📡',
    features: ['API complète OpenAI', 'Framework LangChain', 'Memory management', 'Agents tools'],
    pricing: 'Pay-per-use API',
    useCases: ['Génération contenu', 'Analyse documents', 'Chat intelligent', 'Traduction temps réel'],
    compatibility: ['Python', 'JavaScript', 'REST API', 'WebSockets'],
    setup: '3-5 heures',
    benefits: ['Puissance GPT-4', 'Flexibilité totale', 'Intégration native']
  },
  {
    id: 'swiss-hosting',
    category: 'Éthique & RGPD',
    name: 'Swiss hosting + GDPR proxies',
    description: 'Hébergement en Suisse, traitement sécurisé',
    level: 'Expert',
    integration: 'Conforme RGPD + Éthique',
    icon: '🔐',
    features: ['Hosting Suisse', 'Chiffrement bout-en-bout', 'Conformité RGPD', 'Audit sécurité'],
    pricing: 'Sur mesure enterprise',
    useCases: ['Données sensibles', 'Compliance totale', 'Souveraineté données', 'Audit trail complet'],
    compatibility: ['Cloud suisse', 'VPN sécurisés', 'Kubernetes', 'Monitoring avancé'],
    setup: '1-2 semaines',
    benefits: ['Conformité 100%', 'Souveraineté données', 'Sécurité maximale']
  }
];

const automationWorkflows: AutomationWorkflow[] = [
  {
    id: 'smart-onboarding',
    name: 'Onboarding Intelligent Apprenants',
    description: 'Parcours d\'accueil personnalisé avec IA pour nouveaux apprenants',
    tools: ['Zapier', 'OpenAI API', 'Google Workspace', 'Notion'],
    complexity: 'Moyen',
    timeToSetup: '2-3 heures',
    impact: 'Taux engagement +85%',
    category: 'Éducation',
    steps: [
      'Inscription détectée via webhook',
      'Analyse profil avec IA',
      'Génération parcours personnalisé',
      'Envoi email de bienvenue adapté',
      'Création espace Notion personnalisé',
      'Planification premier RDV mentor'
    ],
    prerequisites: ['Comptes API configurés', 'Templates de contenu', 'Base données apprenants']
  },
  {
    id: 'content-generation',
    name: 'Génération Contenu Cours Automatique',
    description: 'Création automatique de contenu pédagogique adapté au niveau',
    tools: ['Make', 'OpenAI GPT-4', 'Google Docs', 'Airtable'],
    complexity: 'Complexe',
    timeToSetup: '1-2 jours',
    impact: 'Productivité création +200%',
    category: 'Contenu',
    steps: [
      'Analyse besoins formation',
      'Génération plan de cours IA',
      'Création contenu multimodal',
      'Adaptation niveau apprenant',
      'Intégration ressources existantes',
      'Publication automatique plateforme'
    ],
    prerequisites: ['Accès GPT-4', 'Base connaissances', 'Templates pédagogiques']
  },
  {
    id: 'mentor-matching',
    name: 'Matching Mentor-Apprenant IA',
    description: 'Algorithme intelligent de correspondance mentor/apprenant optimal',
    tools: ['CrewAI', 'PostgreSQL', 'Zapier', 'Calendar API'],
    complexity: 'Complexe',
    timeToSetup: '3-5 jours',
    impact: 'Satisfaction mentoring +95%',
    category: 'Mentorat',
    steps: [
      'Analyse profils apprenants',
      'Évaluation expertise mentors',
      'Calcul compatibilité IA',
      'Proposition matches optimaux',
      'Planification sessions automatique',
      'Suivi performance relation'
    ],
    prerequisites: ['Base données complète', 'Algorithme ML', 'Intégrations calendrier']
  },
  {
    id: 'analytics-dashboard',
    name: 'Dashboard Analytics Temps Réel',
    description: 'Tableaux de bord intelligents avec insights IA automatiques',
    tools: ['n8n', 'PostgreSQL', 'Grafana', 'OpenAI API'],
    complexity: 'Complexe',
    timeToSetup: '1 semaine',
    impact: 'Décisions data-driven +300%',
    category: 'Analytics',
    steps: [
      'Collecte données multi-sources',
      'Traitement temps réel',
      'Analyse patterns IA',
      'Génération insights automatiques',
      'Alertes proactives',
      'Recommandations optimisation'
    ],
    prerequisites: ['Infrastructure data', 'Modèles ML', 'Dashboards configurés']
  }
];

const automationStats = {
  totalTools: 16,
  activeWorkflows: 24,
  timesSaved: 1247,
  errorReduction: 94,
  productivityGain: 186,
  integrations: 156
};

export function AutomatisationSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const categories = ['all', 'Automatisation No-Code', 'Automatisation Code', 'Agent IA', 'API & Intégrations', 'Éthique & RGPD'];
  const levels = ['all', 'Débutant', 'Intermédiaire', 'Avancé', 'Expert'];
  
  const filteredTools = automationTools.filter(tool => {
    const categoryMatch = selectedCategory === 'all' || tool.category === selectedCategory;
    const levelMatch = selectedLevel === 'all' || tool.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Débutant': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermédiaire': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Avancé': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Expert': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Simple': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Moyen': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Complexe': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="automatisation" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-full">
              <Zap className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Automatisation IA Avancée
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Écosystème d'automatisation intelligent pour Club Empreinte Digitale & Super IARP Pro
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Workflow className="h-5 w-5 text-indigo-500" />
              <span className="font-semibold">24 workflows actifs</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Bot className="h-5 w-5 text-purple-500" />
              <span className="font-semibold">16 outils intégrés</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Shield className="h-5 w-5 text-green-500" />
              <span className="font-semibold">Conforme RGPD</span>
            </div>
          </div>
        </motion.div>

        <Tabs defaultValue="outils" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="outils" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Outils
            </TabsTrigger>
            <TabsTrigger value="workflows" className="flex items-center gap-2">
              <Workflow className="h-4 w-4" />
              Workflows
            </TabsTrigger>
            <TabsTrigger value="performance" className="flex items-center gap-2">
              <Cpu className="h-4 w-4" />
              Performance
            </TabsTrigger>
            <TabsTrigger value="integration" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Intégration
            </TabsTrigger>
          </TabsList>

          <TabsContent value="outils" className="space-y-8">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <div className="mb-4">
                <div className="flex flex-wrap justify-center gap-2 mb-2">
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
                <div className="flex flex-wrap justify-center gap-2">
                  {levels.map((level) => (
                    <Button
                      key={level}
                      variant={selectedLevel === level ? 'secondary' : 'outline'}
                      onClick={() => setSelectedLevel(level)}
                      size="sm"
                    >
                      {level === 'all' ? 'Tous niveaux' : level}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {filteredTools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredTool(tool.id)}
                  onHoverEnd={() => setHoveredTool(null)}
                >
                  <Card className={`h-full transition-all duration-300 ${
                    hoveredTool === tool.id ? 'shadow-2xl scale-105' : 'shadow-lg'
                  }`}>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{tool.icon}</span>
                          <Badge variant="outline">{tool.category}</Badge>
                        </div>
                        <Badge className={getLevelColor(tool.level)}>
                          {tool.level}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{tool.name}</CardTitle>
                      <CardDescription className="text-base">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Intégration CED & IARP :</h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400">
                          ✅ {tool.integration}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Fonctionnalités clés :</h4>
                        <ul className="space-y-1">
                          {tool.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Cas d'usage :</h4>
                        <div className="flex flex-wrap gap-1">
                          {tool.useCases.slice(0, 3).map((useCase, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {useCase}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-semibold">Setup :</span> {tool.setup}
                        </div>
                        <div>
                          <span className="font-semibold">Pricing :</span> {tool.pricing}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Bénéfices :</h4>
                        <div className="space-y-1">
                          {tool.benefits.map((benefit, idx) => (
                            <div key={idx} className="text-sm text-green-600 dark:text-green-400">
                              📈 {benefit}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="workflows" className="space-y-6">
            {automationWorkflows.map((workflow, index) => (
              <motion.div
                key={workflow.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-2">
                        <Badge className={getComplexityColor(workflow.complexity)}>
                          {workflow.complexity}
                        </Badge>
                        <Badge variant="outline">{workflow.category}</Badge>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-sm text-indigo-600">
                          {workflow.timeToSetup}
                        </div>
                        <div className="text-xs text-gray-500">Setup</div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{workflow.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{workflow.description}</p>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Outils utilisés :</h4>
                        <div className="flex flex-wrap gap-1">
                          {workflow.tools.map((tool, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Impact :</h4>
                        <div className="text-sm font-semibold text-green-600">
                          📊 {workflow.impact}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm">Étapes du workflow :</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {workflow.steps.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-5 h-5 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </div>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Prérequis :</h4>
                      <div className="flex flex-wrap gap-1">
                        {workflow.prerequisites.map((prereq, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {prereq}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="performance" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            >
              <Card className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900 dark:to-indigo-800">
                <Zap className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-indigo-600 mb-2">{automationStats.timesSaved}h</div>
                <div className="text-gray-600 dark:text-gray-300">Temps économisé/mois</div>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-green-600 mb-2">{automationStats.errorReduction}%</div>
                <div className="text-gray-600 dark:text-gray-300">Réduction erreurs</div>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800">
                <Database className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-purple-600 mb-2">+{automationStats.productivityGain}%</div>
                <div className="text-gray-600 dark:text-gray-300">Gain productivité</div>
              </Card>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Workflow className="h-6 w-6 text-indigo-600" />
                  Performance Workflows
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Workflows actifs</span>
                    <span className="font-bold text-indigo-600">{automationStats.activeWorkflows}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Intégrations configurées</span>
                    <span className="font-bold text-purple-600">{automationStats.integrations}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Taux de réussite</span>
                    <span className="font-bold text-green-600">99.7%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Temps moyen traitement</span>
                    <span className="font-bold text-blue-600">2.3s</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Bot className="h-6 w-6 text-purple-600" />
                  Impact IA
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Personnalisation automatique</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Adaptation contenu par apprenant</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Prédiction besoins formation</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Anticipation 94% précision</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Optimisation continue</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Auto-amélioration workflows</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Analytics prédictives</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Insights temps réel</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="integration" className="space-y-8">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Code className="h-6 w-6 text-indigo-600" />
                Guide d'Intégration Rapide
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Débutants (No-Code)</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="font-semibold">1. Zapier Setup</div>
                      <div className="text-sm text-gray-600">Connectez Google Workspace + Notion</div>
                      <div className="text-xs text-green-600">⏱️ 15 minutes</div>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="font-semibold">2. Templates prêts</div>
                      <div className="text-sm text-gray-600">Workflows pré-configurés CED</div>
                      <div className="text-xs text-blue-600">⏱️ 5 minutes</div>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <div className="font-semibold">3. Test & Activation</div>
                      <div className="text-sm text-gray-600">Validation automatique</div>
                      <div className="text-xs text-purple-600">⏱️ 10 minutes</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Avancés (Code + IA)</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <div className="font-semibold">1. n8n Self-hosted</div>
                      <div className="text-sm text-gray-600">Infrastructure Suisse RGPD</div>
                      <div className="text-xs text-orange-600">⏱️ 2-4 heures</div>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4">
                      <div className="font-semibold">2. Agents IA Custom</div>
                      <div className="text-sm text-gray-600">CrewAI + LangChain integration</div>
                      <div className="text-xs text-red-600">⏱️ 2-3 jours</div>
                    </div>
                    <div className="border-l-4 border-indigo-500 pl-4">
                      <div className="font-semibold">3. API complète</div>
                      <div className="text-sm text-gray-600">OpenAI + PostgreSQL + Redis</div>
                      <div className="text-xs text-indigo-600">⏱️ 1 semaine</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-green-600" />
                Conformité RGPD & Éthique
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🇨🇭</div>
                  <div className="font-semibold">Hébergement Suisse</div>
                  <div className="text-sm text-gray-600">Données en Suisse uniquement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔒</div>
                  <div className="font-semibold">Chiffrement E2E</div>
                  <div className="text-sm text-gray-600">AES-256 + TLS 1.3</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">✅</div>
                  <div className="font-semibold">Audit Trail</div>
                  <div className="text-sm text-gray-600">Traçabilité complète</div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8">
            <h3 className="text-2xl font-bold mb-4">
              Automatisez votre écosystème IA éthique
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Déployez des workflows intelligents conformes RGPD en quelques clics
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary">
                Démarrer l'automatisation
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-indigo-600">
                Consulter expert
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}