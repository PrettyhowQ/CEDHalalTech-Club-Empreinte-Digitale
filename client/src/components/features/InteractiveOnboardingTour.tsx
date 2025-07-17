import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Book, 
  Code, 
  Heart, 
  Globe, 
  Shield,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

interface TourStep {
  id: number;
  title: string;
  description: string;
  islamic_principle: string;
  verse_reference: string;
  practical_application: string;
  icon: React.ReactNode;
  color: string;
  duration: number;
}

const InteractiveOnboardingTour = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const tourSteps: TourStep[] = [
    {
      id: 1,
      title: "Bienvenue dans l'Écosystème CED HalalTech™",
      description: "Découvrez une approche technologique guidée par les valeurs islamiques authentiques",
      islamic_principle: "التقوى (At-Taqwa) - La conscience pieuse dans l'innovation",
      verse_reference: "« Et quiconque craint Allah, Il lui donnera une issue » (At-Talaq 65:2)",
      practical_application: "Chaque fonctionnalité est développée avec conscience pieuse et respect des limites divines",
      icon: <Heart className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      duration: 30
    },
    {
      id: 2,
      title: "Apprentissage Technologique Islamique",
      description: "Maîtrisez les technologies modernes selon les principes du Fiqh informatique",
      islamic_principle: "العلم (Al-Ilm) - La recherche du savoir bénéfique",
      verse_reference: "« Et dis: Seigneur, accroît mes connaissances » (Ta-Ha 20:114)",
      practical_application: "Formation en programmation, IA, blockchain avec validation scholars",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600",
      duration: 45
    },
    {
      id: 3,
      title: "Éthique et Responsabilité Numérique",
      description: "Développez des solutions technologiques responsables et bénéfiques",
      islamic_principle: "الخلافة (Al-Khilafah) - Gérance responsable de la terre",
      verse_reference: "« C'est Lui qui a fait de vous les successeurs sur la terre » (Fatir 35:39)",
      practical_application: "Respect de la vie privée, protection des données, impact social positif",
      icon: <Shield className="w-6 h-6" />,
      color: "from-purple-500 to-violet-600",
      duration: 40
    },
    {
      id: 4,
      title: "Innovation Conforme aux Valeurs",
      description: "Créez des innovations technologiques alignées avec les enseignements islamiques",
      islamic_principle: "الإحسان (Al-Ihsan) - L'excellence dans l'adoration et l'action",
      verse_reference: "« Et fais le bien comme Allah t'a fait du bien » (Al-Qasas 28:77)",
      practical_application: "Développement d'applications utiles, éthiques et spirituellement enrichissantes",
      icon: <Star className="w-6 h-6" />,
      color: "from-amber-500 to-orange-600",
      duration: 35
    },
    {
      id: 5,
      title: "Communauté et Partage du Savoir",
      description: "Participez à une communauté mondiale de développeurs musulmans",
      islamic_principle: "الأخوة (Al-Ukhuwah) - La fraternité islamique",
      verse_reference: "« Les croyants ne sont que des frères » (Al-Hujurat 49:10)",
      practical_application: "Collaboration, mentorat, partage d'expériences entre musulmans tech",
      icon: <Globe className="w-6 h-6" />,
      color: "from-teal-500 to-green-600",
      duration: 30
    },
    {
      id: 6,
      title: "Votre Parcours Personnalisé",
      description: "Accédez à un plan de développement adapté à vos objectifs spirituels et techniques",
      islamic_principle: "التدرج (At-Tadarruj) - La progression graduelle",
      verse_reference: "« Celui qui persévère atteindra son but » (Hadith)",
      practical_application: "Parcours personnalisé, badges de progression, certifications authentiques",
      icon: <Book className="w-6 h-6" />,
      color: "from-rose-500 to-pink-600",
      duration: 25
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            if (currentStep < tourSteps.length - 1) {
              setCurrentStep(prev => prev + 1);
              setCompletedSteps(prev => [...prev, currentStep]);
              return 0;
            } else {
              setIsPlaying(false);
              setCompletedSteps(prev => [...prev, currentStep]);
              return 100;
            }
          }
          return prev + (100 / tourSteps[currentStep].duration);
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep, tourSteps]);

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCompletedSteps(prev => [...prev, currentStep]);
      setCurrentStep(prev => prev + 1);
      setProgress(0);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setProgress(0);
    }
  };

  const resetTour = () => {
    setCurrentStep(0);
    setProgress(0);
    setCompletedSteps([]);
    setIsPlaying(false);
  };

  const step = tourSteps[currentStep];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10`} />
        
        <CardHeader className="relative">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-full bg-gradient-to-r ${step.color} text-white`}>
                {step.icon}
              </div>
              <Badge variant="outline" className="text-xs">
                Étape {currentStep + 1} sur {tourSteps.length}
              </Badge>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? 'Pause' : 'Lecture'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={resetTour}
                className="flex items-center gap-1"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </Button>
            </div>
          </div>
          
          <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
          <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
          
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Progression</span>
              <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardHeader>

        <CardContent className="relative space-y-6">
          {/* Principe Islamique */}
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
              🕌 Principe Islamique
            </h4>
            <p className="text-green-700 dark:text-green-300 font-medium mb-2">
              {step.islamic_principle}
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 italic">
              {step.verse_reference}
            </p>
          </div>

          {/* Application Pratique */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
              💡 Application Pratique
            </h4>
            <p className="text-blue-700 dark:text-blue-300">
              {step.practical_application}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-4">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Précédent
            </Button>

            <div className="flex gap-2">
              {tourSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentStep
                      ? 'bg-blue-500'
                      : completedSteps.includes(index)
                      ? 'bg-green-500'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextStep}
              disabled={currentStep === tourSteps.length - 1}
              className="flex items-center gap-2"
            >
              Suivant
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Completion Badge */}
          {completedSteps.length === tourSteps.length && (
            <div className="text-center p-4 bg-green-100 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <h3 className="font-semibold text-green-800 dark:text-green-200">
                  Félicitations ! Tour terminé
                </h3>
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
              </div>
              <p className="text-sm text-green-600 dark:text-green-400">
                Vous avez découvert les principes fondamentaux de l'apprentissage technologique islamique.
                Votre parcours CED HalalTech™ commence maintenant !
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveOnboardingTour;