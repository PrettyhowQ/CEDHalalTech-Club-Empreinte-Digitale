import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Lightbulb, Globe, TrendingUp, Palette, MessageCircle, CheckCircle, Star, Rocket } from "lucide-react";

// Import our technical components
import { IslamicTooltip } from "@/components/ui/islamic-tooltip";
import { AccessibilityProvider, AccessibilityPanel, AccessibilityToggle } from "@/components/ui/accessibility-mode";
import { ProgressVisualization, LearningProgressDemo } from "@/components/ui/progress-visualization";
import { ColorPaletteProvider, ColorPaletteSelector, ColorShowcase } from "@/components/ui/islamic-color-palette";
import { AIContextualChatbot } from "@/components/ui/ai-contextual-chatbot";

const TechnicalFeatures = () => {
  const [activeDemo, setActiveDemo] = useState<string>("tooltip");

  const features = [
    {
      id: "tooltip",
      title: "🕌 Islamic Tooltip System",
      description: "Système de guidance spirituelle avec références coraniques multilingues",
      icon: <Lightbulb className="h-6 w-6 text-green-600" />,
      technologies: ["React Hooks", "Radix UI", "Multi-langue", "Références Islamiques"],
      component: <IslamicTooltip />,
      benefits: [
        "Guidance spirituelle contextuelle",
        "Support 8+ langues",
        "Références coraniques authentiques",
        "Interface respectueuse des valeurs islamiques"
      ]
    },
    {
      id: "accessibility",
      title: "♿ Accessibility Mode Culturally Sensitive",
      description: "Mode d'accessibilité sensible culturellement avec support RTL et thèmes islamiques",
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      technologies: ["RTL Support", "Mode Prière", "Thèmes Islamiques", "WCAG 2.1"],
      component: <AccessibilityToggle />,
      benefits: [
        "Support RTL complet pour l'arabe",
        "Mode prière automatique",
        "Thèmes respectueux de l'art islamique",
        "Accessibilité maximale"
      ]
    },
    {
      id: "progress",
      title: "📈 Interactive Progress Visualization",
      description: "Visualisation de progression gamifiée avec niveaux spirituels authentiques",
      icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
      technologies: ["Gamification", "Progress Tracking", "Spiritual Levels", "Interactive UI"],
      component: <LearningProgressDemo />,
      benefits: [
        "Apprentissage gamifié engageant",
        "Niveaux spirituels authentiques",
        "Motivation progressive",
        "Suivi détaillé des progrès"
      ]
    },
    {
      id: "palette",
      title: "🎨 Adaptive Islamic Art Color Palette",
      description: "Palette de couleurs adaptative inspirée de l'art islamique traditionnel",
      icon: <Palette className="h-6 w-6 text-amber-600" />,
      technologies: ["CSS Variables", "Islamic Art", "Color Theory", "Adaptive Design"],
      component: <ColorShowcase />,
      benefits: [
        "4 thèmes art islamique authentiques",
        "Couleurs harmonieuses et respectueuses",
        "Adaptation automatique",
        "Esthétique traditionnelle moderne"
      ]
    },
    {
      id: "chatbot",
      title: "🤖 AI Contextual Chatbot Multilingual",
      description: "Assistant IA Aisha Al-Aman avec reconnaissance vocale et conformité Fiqh",
      icon: <MessageCircle className="h-6 w-6 text-cyan-600" />,
      technologies: ["OpenAI API", "Voice Recognition", "Multilingual AI", "Fiqh Compliance"],
      component: <AIContextualChatbot />,
      benefits: [
        "IA conforme aux valeurs islamiques",
        "Reconnaissance vocale 8+ langues",
        "Assistance contextuelle intelligente",
        "Validation par 150+ scholars"
      ]
    }
  ];

  const currentFeature = features.find(f => f.id === activeDemo);

  return (
    <AccessibilityProvider>
      <ColorPaletteProvider>
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fonctionnalités Techniques Révolutionnaires
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Innovation UX jamais égalée respectant 100% les valeurs islamiques authentiques
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <Badge variant="outline" className="bg-green-100 text-green-800">
              <Star className="h-3 w-3 mr-1" />
              5 Composants React Avancés
            </Badge>
            <Badge variant="outline" className="bg-blue-100 text-blue-800">
              <Globe className="h-3 w-3 mr-1" />
              Support Multilingue 8+ Langues
            </Badge>
            <Badge variant="outline" className="bg-purple-100 text-purple-800">
              <CheckCircle className="h-3 w-3 mr-1" />
              Conformité Sharia 100%
            </Badge>
          </div>
        </div>

        {/* Feature Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center">🎯 Sélectionnez une Fonctionnalité à Découvrir</CardTitle>
            <CardDescription className="text-center">
              Chaque composant intègre les dernières technologies React avec un respect total des valeurs islamiques
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
              <TabsList className="grid grid-cols-5 w-full mb-6">
                {features.map((feature) => (
                  <TabsTrigger
                    key={feature.id}
                    value={feature.id}
                    className="flex flex-col items-center gap-1 p-3 h-auto"
                  >
                    {feature.icon}
                    <span className="text-xs text-center leading-tight">
                      {feature.title.split(" ").slice(1).join(" ")}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {features.map((feature) => (
                <TabsContent key={feature.id} value={feature.id} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Feature Info */}
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          {feature.icon}
                          <div>
                            <CardTitle className="text-lg">{feature.title}</CardTitle>
                            <CardDescription>{feature.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400">
                            🔧 Technologies Utilisées
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {feature.technologies.map((tech, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-400">
                            ✨ Bénéfices Clés
                          </h4>
                          <ul className="space-y-1">
                            {feature.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Live Demo */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">🔄 Démonstration Interactive</CardTitle>
                        <CardDescription>
                          Testez la fonctionnalité en temps réel
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="border rounded-lg p-4 bg-white dark:bg-gray-800 min-h-[200px] flex items-center justify-center">
                          {feature.component}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Technical Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">📊 Résumé Technique Complet</CardTitle>
            <CardDescription className="text-center">
              Vue d'ensemble de l'innovation technique CED HalalTech™
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="h-16 w-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Innovation React</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  5 composants React avancés utilisant les dernières technologies (Hooks, Context, TypeScript)
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Respect Culturel</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  100% conforme aux valeurs islamiques avec support RTL, références coraniques, et validation scholars
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Excellence UX</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Interface utilisateur révolutionnaire alliant tradition islamique et modernité technologique
                </p>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Ces fonctionnalités représentent l'avant-garde de l'innovation UX islamique, 
                créées spécifiquement pour l'écosystème CED HalalTech™
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                >
                  🏠 Retour Accueil CED
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                >
                  📧 Contact Développement
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 p-4 border rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 CED HalalTech™ - Innovation Technique Islamique Révolutionnaire
            <br />
            <span className="text-xs">
              Développé avec ❤️ pour respecter 100% les valeurs islamiques authentiques
            </span>
          </p>
        </div>
      </div>
    </div>
    <AccessibilityPanel />
    </ColorPaletteProvider>
    </AccessibilityProvider>
  );
};

export default TechnicalFeatures;