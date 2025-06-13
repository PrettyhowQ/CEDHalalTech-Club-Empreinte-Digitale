import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  PenTool, 
  GraduationCap, 
  Leaf, 
  Briefcase, 
  Code, 
  Search, 
  Heart, 
  Brain 
} from 'lucide-react';

const modules = [
  {
    icon: PenTool,
    title: "IA d'écriture",
    description: "Assistant d'auteur, correcteur, traducteur, créateur de contenu professionnel",
    features: ["Rédaction assistée", "Correction avancée", "Traduction 78 langues", "Optimisation SEO"],
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: GraduationCap,
    title: "Éducation/Tutorat",
    description: "Matières scolaires, langues, soutien scolaire personnalisé et quiz interactifs",
    features: ["Cours adaptatifs", "Quiz intelligents", "Suivi progression", "Support multilingue"],
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: Leaf,
    title: "Environnement & Société",
    description: "Zéro déchet, climat, énergie verte, protection animale et développement durable",
    features: ["Conseils éco-responsables", "Solutions durables", "Impact carbone", "Énergie verte"],
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    icon: Briefcase,
    title: "Productivité & Business",
    description: "Planification stratégique, prise de décision, management et optimisation",
    features: ["Stratégie business", "Gestion projets", "Analyse décisions", "Leadership"],
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: Code,
    title: "Programmation & Dév",
    description: "Copilote de code, générateur, optimiseur, debug et développement full-stack",
    features: ["Code intelligent", "Debug avancé", "Optimisation", "Architecture"],
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    icon: Search,
    title: "Recherche & Analyse",
    description: "Lecture PDF, résumés intelligents, recherche scientifique et synthèse",
    features: ["Analyse documents", "Synthèse rapide", "Recherche académique", "Fact-checking"],
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
  {
    icon: Heart,
    title: "Lifestyle & Coach",
    description: "Sport, nutrition, bien-être, psychologie et développement personnel",
    features: ["Plans nutrition", "Coaching sportif", "Bien-être mental", "Motivation"],
    color: "text-pink-600",
    bgColor: "bg-pink-50"
  },
  {
    icon: Brain,
    title: "IA Éthique",
    description: "Formation responsable, impact sociétal, bonnes pratiques et éthique numérique",
    features: ["Éthique IA", "Impact social", "Gouvernance", "Responsabilité"],
    color: "text-red-600",
    bgColor: "bg-red-50"
  }
];

export function ModulesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-100 mb-4">
            Intelligence Modulaire
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Modules GPT Spécialisés
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Super IARP Pro intègre l'expertise de tous les GPTs spécialisés du monde 
            en un seul assistant intelligent et évolutif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <Card key={index} className="border border-gray-200 hover:border-accent-300 transition-colors group hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 ${module.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`h-6 w-6 ${module.color}`} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {module.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    {module.description}
                  </p>
                  <div className="space-y-2">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-500">
                        <div className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Intelligence Modulaire Évolutive
            </h3>
            <p className="text-accent-100 mb-6 max-w-2xl mx-auto">
              Super IARP Pro identifie automatiquement votre besoin, active le module approprié 
              et adapte son expertise au contexte précis de votre demande.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Détection Intelligente</h4>
                <p className="text-sm text-accent-100">Analyse automatique du contexte</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Activation Modulaire</h4>
                <p className="text-sm text-accent-100">Module expert activé instantanément</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Réponse Personnalisée</h4>
                <p className="text-sm text-accent-100">Expertise adaptée à vos besoins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}