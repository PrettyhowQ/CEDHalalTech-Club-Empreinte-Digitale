import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap, Code, Database, Brain, Settings, Workflow, CheckCircle, Star } from 'lucide-react'

export default function PresentationN8N() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isTyping, setIsTyping] = useState(true)

  const features = [
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Workflows Visuels",
      description: "Interface drag & drop intuitive pour créer des automatisations complexes sans code"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "400+ Intégrations",
      description: "Connexions vers APIs, emails, bases de données, services IA et bien plus"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "JavaScript Support",
      description: "Expressions dynamiques et logique personnalisée avec JavaScript natif"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Auto-hébergeable",
      description: "Déploiement Docker sur Render, AWS, ou serveur personnel pour contrôle total"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "IA Compatible",
      description: "Intégration native OpenAI, LangChain, agents intelligents personnalisés"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Triggers Avancés",
      description: "Programmation cron, webhooks, événements temps réel automatisés"
    }
  ]

  const useCases = [
    {
      icon: "🤖",
      title: "Orchestration Écosystème PrettyhowQ™",
      description: "Coordination automatique IA, micro-learning, finance islamique en temps réel",
      benefit: "Efficacité +300%"
    },
    {
      icon: "🧠",
      title: "Agents IA Personnalisés GPT",
      description: "Création assistants intelligents conformes valeurs islamiques authentiques",
      benefit: "Conformité 100%"
    },
    {
      icon: "🎓",
      title: "Formations Certifiantes Automatisées",
      description: "Génération PDF, envoi emails, scoring, validation scholars automatiques",
      benefit: "Temps divisé par 10"
    },
    {
      icon: "📝",
      title: "Rédaction & Publication Automatique",
      description: "Content automatique Notion, Figma, GitHub selon standards CED",
      benefit: "Productivité x5"
    },
    {
      icon: "👁️",
      title: "Surveillance Usage IA Responsable",
      description: "Monitoring conformité Sharia, détection dérives, alerts préventives",
      benefit: "Risques -95%"
    }
  ]

  const architecture = [
    {
      phase: "Phase 1",
      title: "Architecture Foundation",
      steps: [
        "Déploiement n8n sur Render Pro (7$/mois)",
        "Configuration base données PostgreSQL",
        "Intégration API CED HalalTech™",
        "Setup webhooks sécurisés"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Agents IA Spécialisés",
      steps: [
        "Agent Super IARP Pro automatisé",
        "Assistant formations islamiques",
        "Bot conformité Sharia temps réel",
        "IA monitoring usage éthique"
      ]
    },
    {
      phase: "Phase 3",
      title: "Intégration Écosystème", 
      steps: [
        "Connexion CED Bank workflows",
        "Automatisation Al-Aman Takaful",
        "TechForAll inventory management",
        "Institut Academy certifications"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      {/* Header PrettyhowQ */}
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-2xl font-bold">💬</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">PrettyhowQ™ Super IARP Pro</h1>
              <p className="text-purple-600 font-semibold">Présentation Spécialisée n8n</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-purple-900 mb-2">Assalamu alaykum ! 🤲</h3>
                <p className="text-gray-700 leading-relaxed">
                  Je suis <strong>PrettyhowQ™ Super IARP Pro</strong>, votre assistant IA spécialisé dans l'écosystème technologique islamique. 
                  Permettez-moi de vous présenter <strong>n8n</strong> - une révolution pour l'automatisation de votre écosystème CED HalalTech™.
                </p>
                <div className="mt-4 flex items-center space-x-2 text-sm text-purple-600">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                  </div>
                  <span>Analyse en cours des besoins d'automatisation...</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="mb-8">
          <nav className="flex space-x-1 bg-white p-1 rounded-xl shadow-sm">
            {[
              { id: 'overview', label: 'Vue d\'ensemble', icon: <Workflow className="w-4 h-4" /> },
              { id: 'features', label: 'Fonctionnalités', icon: <Zap className="w-4 h-4" /> },
              { id: 'usecases', label: 'Cas d\'usage CED', icon: <Brain className="w-4 h-4" /> },
              { id: 'architecture', label: 'Architecture', icon: <Settings className="w-4 h-4" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content Sections */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Qu'est-ce que n8n ?</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong>n8n (n-eight-n)</strong> est une plateforme open-source d'automatisation de workflows, 
                  comparable à Zapier ou Make, mais avec une flexibilité et un contrôle incomparables.
                </p>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-900 mb-2">Pourquoi n8n pour CED HalalTech™ ?</h3>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Auto-hébergeable = contrôle total de vos données</li>
                    <li>• Open-source = transparence et conformité Sharia</li>
                    <li>• 400+ intégrations natives</li>
                    <li>• Support JavaScript avancé</li>
                    <li>• Compatible IA (OpenAI, LangChain)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Comparaison Plateforme</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Critère</th>
                      <th className="text-center py-2">n8n</th>
                      <th className="text-center py-2">Zapier</th>
                      <th className="text-center py-2">Make</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-b">
                      <td className="py-2">Coût</td>
                      <td className="text-center"><span className="text-green-600 font-semibold">7$/mois</span></td>
                      <td className="text-center"><span className="text-red-600">20$/mois+</span></td>
                      <td className="text-center"><span className="text-orange-600">9$/mois+</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Contrôle données</td>
                      <td className="text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                      <td className="text-center"><span className="text-red-600">❌</span></td>
                      <td className="text-center"><span className="text-red-600">❌</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Open Source</td>
                      <td className="text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                      <td className="text-center"><span className="text-red-600">❌</span></td>
                      <td className="text-center"><span className="text-red-600">❌</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">IA Native</td>
                      <td className="text-center"><CheckCircle className="w-5 h-5 text-green-600 mx-auto" /></td>
                      <td className="text-center"><span className="text-orange-600">Limité</span></td>
                      <td className="text-center"><span className="text-orange-600">Limité</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'features' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'usecases' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <div className="flex items-start space-x-6">
                  <div className="text-4xl flex-shrink-0">{useCase.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{useCase.title}</h3>
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                        {useCase.benefit}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">🎯 Impact Projeté CED HalalTech™</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">85%</div>
                  <div className="text-purple-100">Réduction temps manuel</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">300%</div>
                  <div className="text-purple-100">Amélioration productivité</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-purple-100">Surveillance automatique</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'architecture' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Roadmap d'Implémentation</h2>
              <div className="space-y-6">
                {architecture.map((phase, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-lg font-bold text-gray-900">{phase.phase}</h3>
                        <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                          {phase.title}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {phase.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-center space-x-2 text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Nœuds Clés Recommandés</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <Code className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold">OpenAI GPT</div>
                      <div className="text-xs text-gray-500">IA conversations</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                      <Database className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold">PostgreSQL</div>
                      <div className="text-xs text-gray-500">Base données</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                      <Workflow className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold">HTTP Request</div>
                      <div className="text-xs text-gray-500">API CED</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Budget Prévisionnel</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Render Pro (n8n)</span>
                    <span className="font-semibold">7$/mois</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">PostgreSQL</span>
                    <span className="font-semibold">Inclus</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Intégration</span>
                    <span className="font-semibold">0$ (DIY)</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center font-bold text-lg">
                      <span>Total mensuel</span>
                      <span className="text-green-600">7$/mois</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 text-white text-center mt-8"
        >
          <h2 className="text-3xl font-bold mb-4">Prêt à Révolutionner votre Écosystème ?</h2>
          <p className="text-purple-100 text-lg mb-6">
            Laissez PrettyhowQ™ vous guider dans l'implémentation de n8n pour une automatisation islamiquement conforme
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Démarrer Architecture</span>
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 flex items-center justify-center space-x-2">
              <Settings className="w-5 h-5" />
              <span>Configurer Nœuds</span>
            </button>
          </div>
        </motion.div>

        {/* Footer PrettyhowQ */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Présenté par <strong>PrettyhowQ™ Super IARP Pro</strong> • Écosystème CED HalalTech™</p>
          <p>🤲 Barakallahu fik pour votre confiance • جزاك الله خيراً</p>
        </div>
      </div>
    </div>
  )
}