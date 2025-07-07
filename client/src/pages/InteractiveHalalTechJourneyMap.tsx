import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const InteractiveHalalTechJourneyMap = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const journeyPhases = [
    {
      id: 0,
      title: "🌱 Découverte Spirituelle",
      description: "Fondements islamiques de la technologie éthique",
      color: "from-green-500 to-emerald-600",
      steps: [
        { id: 1, title: "Comprendre le Fiqh informatique", verse: "وَمَا أُوتِيتُم مِّنَ الْعِلْمِ إِلَّا قَلِيلًا", translation: "Et vous n'avez reçu de la science que peu de choses" },
        { id: 2, title: "Principes Halal Tech", hadith: "إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ", translation: "Allah aime que lorsque l'un de vous fait un travail, il le fasse avec excellence" },
        { id: 3, title: "Éthique IA islamique", concept: "التوازن", translation: "L'équilibre dans l'innovation" }
      ]
    },
    {
      id: 1,
      title: "🛠️ Développement Technique",
      description: "Acquisition des compétences HalalTech™",
      color: "from-blue-500 to-cyan-600",
      steps: [
        { id: 4, title: "Programming Halal", skill: "React/TypeScript", level: "Intermédiaire" },
        { id: 5, title: "Database Islamique", skill: "PostgreSQL conforme", level: "Avancé" },
        { id: 6, title: "Cloud Halal Architecture", skill: "Infrastructure souveraine", level: "Expert" }
      ]
    },
    {
      id: 2,
      title: "🚀 Innovation Collaborative",
      description: "Contribution à l'écosystème CED HalalTech™",
      color: "from-purple-500 to-violet-600",
      steps: [
        { id: 7, title: "Open Source Halal", contribution: "Projets communautaires", impact: "Ummah Tech" },
        { id: 8, title: "Mentorat Spirituel", role: "Guide junior developers", wisdom: "Ilm & Ta'awun" },
        { id: 9, title: "Leadership Éthique", position: "Tech Lead islamique", responsibility: "Amanah numérique" }
      ]
    },
    {
      id: 3,
      title: "🌍 Impact Global",
      description: "Transformation de l'industrie tech mondiale",
      color: "from-orange-500 to-red-600",
      steps: [
        { id: 10, title: "Startup Halal", venture: "Fintech islamique", funding: "Investment halal" },
        { id: 11, title: "Conférences Mondiales", speaking: "Islamic Tech Summit", audience: "10K+ developers" },
        { id: 12, title: "Héritage Numérique", legacy: "Sadaqah Jariyah Tech", eternal: "Benefit après décès" }
      ]
    }
  ];

  const toggleStep = (stepId: number) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(completedSteps.filter(id => id !== stepId));
    } else {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const getProgressPercentage = () => {
    const totalSteps = journeyPhases.reduce((acc, phase) => acc + phase.steps.length, 0);
    return (completedSteps.length / totalSteps) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
            🗺️ Interactive HalalTech Journey Map
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Votre parcours personnalisé vers l'excellence technologique islamique
          </p>
          
          {/* Progress Global */}
          <Card className="mb-8 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold">Progression Globale</span>
                <span className="text-2xl font-bold text-emerald-600">{Math.round(getProgressPercentage())}%</span>
              </div>
              <Progress value={getProgressPercentage()} className="h-3" />
              <div className="mt-2 text-sm text-gray-600">
                {completedSteps.length} étapes complétées sur {journeyPhases.reduce((acc, phase) => acc + phase.steps.length, 0)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Phases */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {journeyPhases.map((phase, index) => (
            <Button
              key={phase.id}
              onClick={() => setCurrentPhase(index)}
              variant={currentPhase === index ? "default" : "outline"}
              className={`px-6 py-3 ${currentPhase === index ? `bg-gradient-to-r ${phase.color} text-white` : ''}`}
            >
              {phase.title}
            </Button>
          ))}
        </div>

        {/* Phase Actuelle */}
        <Card className="mb-8 border-2 border-emerald-200 bg-white/90 backdrop-blur-sm">
          <CardHeader className={`bg-gradient-to-r ${journeyPhases[currentPhase].color} text-white rounded-t-lg`}>
            <CardTitle className="text-3xl text-center">{journeyPhases[currentPhase].title}</CardTitle>
            <p className="text-xl text-center opacity-90">{journeyPhases[currentPhase].description}</p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {journeyPhases[currentPhase].steps.map((step) => (
                <Card 
                  key={step.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    completedSteps.includes(step.id) 
                      ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-emerald-400 border-2' 
                      : 'bg-white hover:bg-gray-50'
                  }`}
                  onClick={() => toggleStep(step.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-lg">{step.title}</h3>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        completedSteps.includes(step.id) 
                          ? 'bg-emerald-500 border-emerald-500' 
                          : 'border-gray-300'
                      }`}>
                        {completedSteps.includes(step.id) && (
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Contenu spécifique selon le type d'étape */}
                    {'verse' in step && (
                      <div className="bg-blue-50 p-4 rounded-lg mb-3">
                        <div className="text-arabic text-lg font-semibold text-blue-800 text-right mb-2">
                          {step.verse}
                        </div>
                        <div className="text-sm text-blue-600 italic">
                          {step.translation}
                        </div>
                      </div>
                    )}

                    {'hadith' in step && (
                      <div className="bg-green-50 p-4 rounded-lg mb-3">
                        <div className="text-arabic text-lg font-semibold text-green-800 text-right mb-2">
                          {step.hadith}
                        </div>
                        <div className="text-sm text-green-600 italic">
                          {step.translation}
                        </div>
                      </div>
                    )}

                    {'skill' in step && (
                      <div className="space-y-2">
                        <Badge variant="secondary" className="text-blue-700">
                          {step.skill}
                        </Badge>
                        <div className="text-sm text-gray-600">
                          Niveau: <span className="font-semibold">{step.level}</span>
                        </div>
                      </div>
                    )}

                    {'contribution' in step && (
                      <div className="space-y-2">
                        <div className="text-sm text-purple-700 font-semibold">
                          {step.contribution}
                        </div>
                        <div className="text-sm text-gray-600">
                          Impact: <span className="italic">{step.impact}</span>
                        </div>
                      </div>
                    )}

                    {'venture' in step && (
                      <div className="space-y-2">
                        <div className="text-sm text-orange-700 font-semibold">
                          {step.venture}
                        </div>
                        <div className="text-sm text-gray-600">
                          Type: <span className="italic">{step.funding}</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Citations Spirituelles */}
        <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
          <CardContent className="p-6 text-center">
            <div className="text-2xl text-amber-800 font-bold mb-4">
              💫 Guidance Spirituelle
            </div>
            <div className="text-lg text-amber-700 italic mb-2">
              "Celui qui suit un chemin en quête de science, Allah lui facilite un chemin vers le Paradis"
            </div>
            <div className="text-sm text-amber-600">
              - Sahih Muslim
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InteractiveHalalTechJourneyMap;