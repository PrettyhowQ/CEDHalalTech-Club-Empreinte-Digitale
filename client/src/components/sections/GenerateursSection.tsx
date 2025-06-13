import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  FileText, 
  Presentation, 
  Calculator,
  Calendar,
  BookOpen,
  Briefcase,
  Code,
  Palette,
  Mail,
  Lightbulb,
  Target,
  Users,
  Zap,
  Rocket
} from 'lucide-react';

const generateurs = [
  {
    id: 'cv-generator',
    icon: FileText,
    title: "Générateur de CV",
    description: "Créez un CV professionnel adapté à votre secteur",
    category: "Professionnel",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    inputs: ["Nom complet", "Poste visé", "Expériences", "Compétences"],
    placeholder: "Ex: Développeur Full-Stack avec 3 ans d'expérience..."
  },
  {
    id: 'presentation-generator',
    icon: Presentation,
    title: "Générateur de Présentations",
    description: "Créez des slides professionnelles en quelques clics",
    category: "Business",
    color: "text-green-600",
    bgColor: "bg-green-50",
    inputs: ["Sujet", "Audience", "Durée", "Objectifs"],
    placeholder: "Ex: Présentation sur l'IA éthique pour dirigeants..."
  },
  {
    id: 'business-plan',
    icon: Calculator,
    title: "Business Plan Intelligent",
    description: "Générateur de plans d'affaires détaillés",
    category: "Entrepreneuriat",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    inputs: ["Concept", "Marché cible", "Budget", "Objectifs"],
    placeholder: "Ex: Startup tech dans l'éducation environnementale..."
  },
  {
    id: 'planning-generator',
    icon: Calendar,
    title: "Planificateur Intelligent",
    description: "Créez des plannings optimisés automatiquement",
    category: "Productivité",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    inputs: ["Projet", "Échéances", "Ressources", "Priorités"],
    placeholder: "Ex: Lancement de plateforme e-learning en 3 mois..."
  },
  {
    id: 'course-generator',
    icon: BookOpen,
    title: "Créateur de Cours",
    description: "Générez des programmes pédagogiques complets",
    category: "Éducation",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    inputs: ["Matière", "Niveau", "Durée", "Objectifs pédagogiques"],
    placeholder: "Ex: Cours d'introduction à l'IA responsable..."
  },
  {
    id: 'proposal-generator',
    icon: Briefcase,
    title: "Générateur de Propositions",
    description: "Créez des propositions commerciales percutantes",
    category: "Commercial",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    inputs: ["Client", "Service", "Budget", "Délais"],
    placeholder: "Ex: Proposition de formation IA pour entreprise..."
  },
  {
    id: 'code-generator',
    icon: Code,
    title: "Assistant Code",
    description: "Générateur de code intelligent multi-langages",
    category: "Développement",
    color: "text-red-600",
    bgColor: "bg-red-50",
    inputs: ["Langage", "Fonctionnalité", "Framework", "Spécifications"],
    placeholder: "Ex: API REST en Node.js pour gestion utilisateurs..."
  },
  {
    id: 'design-generator',
    icon: Palette,
    title: "Générateur de Design",
    description: "Créez des designs et palettes de couleurs",
    category: "Créatif",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    inputs: ["Type de design", "Style", "Couleurs", "Public cible"],
    placeholder: "Ex: Logo pour club environnemental, style moderne..."
  },
  {
    id: 'email-generator',
    icon: Mail,
    title: "Templates Email",
    description: "Générateur d'emails professionnels personnalisés",
    category: "Communication",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    inputs: ["Objet", "Destinataire", "Contexte", "Ton souhaité"],
    placeholder: "Ex: Email de suivi après formation IA éthique..."
  },
  {
    id: 'idea-generator',
    icon: Lightbulb,
    title: "Générateur d'Idées",
    description: "Brainstorming intelligent pour projets innovants",
    category: "Innovation",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    inputs: ["Domaine", "Contraintes", "Objectifs", "Ressources"],
    placeholder: "Ex: Idées pour réduire l'impact carbone numérique..."
  },
  {
    id: 'strategy-generator',
    icon: Target,
    title: "Stratégies Marketing",
    description: "Créez des stratégies marketing digitales",
    category: "Marketing",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    inputs: ["Produit/Service", "Cible", "Budget", "Canaux"],
    placeholder: "Ex: Stratégie pour promouvoir formation IA responsable..."
  },
  {
    id: 'team-generator',
    icon: Users,
    title: "Optimiseur d'Équipe",
    description: "Formations d'équipes et répartition des tâches",
    category: "Management",
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    inputs: ["Projet", "Compétences requises", "Disponibilités", "Objectifs"],
    placeholder: "Ex: Équipe pour développer plateforme IA éthique..."
  }
];

const categories = ["Tous", "Professionnel", "Business", "Éducation", "Développement", "Créatif", "Communication"];

export function GenerateursSection() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [activeGenerator, setActiveGenerator] = useState<string | null>(null);
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [generatedContent, setGeneratedContent] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);

  const filteredGenerateurs = selectedCategory === "Tous" 
    ? generateurs 
    : generateurs.filter(gen => gen.category === selectedCategory);

  const handleGenerate = async (generatorId: string) => {
    setIsGenerating(true);
    
    // Simulation de génération (vous pouvez intégrer OpenAI ici)
    setTimeout(() => {
      const generator = generateurs.find(g => g.id === generatorId);
      setGeneratedContent(`Contenu généré pour ${generator?.title}:\n\nBasé sur vos inputs:\n${Object.entries(inputs).map(([key, value]) => `• ${key}: ${value}`).join('\n')}\n\n[Contenu détaillé généré par IA...]`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200 mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Générateurs Intelligents
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Boîte à Outils IA Créative
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            12 générateurs intelligents pour automatiser vos tâches créatives et professionnelles
            avec l'assistance de Super IARP Pro.
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Grille des générateurs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredGenerateurs.map((generator) => {
            const IconComponent = generator.icon;
            const isActive = activeGenerator === generator.id;
            
            return (
              <Card 
                key={generator.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  isActive ? 'ring-2 ring-blue-500 shadow-lg' : ''
                }`}
                onClick={() => setActiveGenerator(isActive ? null : generator.id)}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 ${generator.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 ${generator.color}`} />
                  </div>
                  <CardTitle className="text-lg mb-2">{generator.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {generator.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{generator.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {generator.inputs.length} paramètres
                    </span>
                    <Button size="sm" variant={isActive ? "default" : "outline"}>
                      {isActive ? "Configuré" : "Utiliser"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Interface de génération */}
        {activeGenerator && (
          <Card className="mb-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Rocket className="w-6 h-6 text-blue-600" />
                Générateur Actif: {generateurs.find(g => g.id === activeGenerator)?.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {generateurs.find(g => g.id === activeGenerator)?.inputs.map((input, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {input}
                  </label>
                  <Input
                    placeholder={`Entrez ${input.toLowerCase()}...`}
                    value={inputs[input] || ''}
                    onChange={(e) => setInputs(prev => ({ ...prev, [input]: e.target.value }))}
                    className="w-full"
                  />
                </div>
              ))}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Détails supplémentaires
                </label>
                <Textarea
                  placeholder={generateurs.find(g => g.id === activeGenerator)?.placeholder}
                  value={inputs['details'] || ''}
                  onChange={(e) => setInputs(prev => ({ ...prev, details: e.target.value }))}
                  rows={3}
                  className="w-full"
                />
              </div>

              <div className="flex gap-4">
                <Button 
                  onClick={() => handleGenerate(activeGenerator)}
                  disabled={isGenerating}
                  className="flex-1"
                >
                  {isGenerating ? "Génération en cours..." : "Générer avec IA"}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setActiveGenerator(null)}
                >
                  Fermer
                </Button>
              </div>

              {generatedContent && (
                <div className="mt-6 p-4 bg-white rounded-lg border">
                  <h4 className="font-semibold mb-3">Résultat généré :</h4>
                  <pre className="whitespace-pre-wrap text-sm text-gray-700">
                    {generatedContent}
                  </pre>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Besoin d'un générateur personnalisé ? Super IARP Pro peut créer n'importe quel outil sur mesure.
          </p>
          <Button variant="outline" size="lg">
            Demander un générateur personnalisé
          </Button>
        </div>
      </div>
    </section>
  );
}