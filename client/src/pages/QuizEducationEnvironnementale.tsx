import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import ProtectionFooter from '@/components/ProtectionFooter';
import { CheckCircle, XCircle, BookOpen, Award, Star, Leaf } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  ayah?: string;
  source?: string;
  explanation: string;
  category: 'ecology' | 'sustainability' | 'conservation' | 'responsibility';
}

export default function QuizEducationEnvironnementale() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const questions: Question[] = [
    {
      id: 1,
      question: "Selon le Coran, quelle est notre responsabilité envers la Terre ?",
      options: [
        "Exploiter toutes ses ressources",
        "Être khalifah (gérants responsables)",
        "L'ignorer complètement",
        "La posséder entièrement"
      ],
      correct: 1,
      ayah: "وَهُوَ الَّذِي جَعَلَكُمْ خَلَائِفَ الْأَرْضِ",
      source: "Sourate Al-An'am (6:165)",
      explanation: "Allah nous a désignés comme khalifah (gérants) de la Terre, avec la responsabilité de la préserver et non de la détruire.",
      category: 'responsibility'
    },
    {
      id: 2,
      question: "Que dit l'Islam sur le gaspillage (Israf) ?",
      options: [
        "C'est autorisé si on est riche",
        "C'est strictement interdit",
        "C'est recommandé",
        "C'est neutre"
      ],
      correct: 1,
      ayah: "وَلَا تُسْرِفُوا ۚ إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ",
      source: "Sourate Al-A'raf (7:31)",
      explanation: "Allah interdit clairement l'israf (gaspillage) et dit qu'Il n'aime pas ceux qui gaspillent.",
      category: 'sustainability'
    },
    {
      id: 3,
      question: "Comment le Prophète ﷺ traitait-il les animaux ?",
      options: [
        "Avec indifférence",
        "Avec cruauté",
        "Avec compassion et protection",
        "Seulement les animaux utiles"
      ],
      correct: 2,
      source: "Sahih Bukhari",
      explanation: "Le Prophète ﷺ a enseigné la compassion envers tous les animaux. Il a dit qu'une femme est entrée en Enfer pour avoir enfermé un chat sans le nourrir.",
      category: 'conservation'
    },
    {
      id: 4,
      question: "Quelle récompense Allah promet-Il pour planter un arbre ?",
      options: [
        "Aucune récompense",
        "Récompense seulement si c'est profitable",
        "Sadaqah (aumône) à chaque fois qu'on en mange",
        "Récompense seulement une fois"
      ],
      correct: 2,
      source: "Sahih Muslim",
      explanation: "Le Prophète ﷺ a dit : 'Il n'y a pas un musulman qui plante un arbre dont mangent un homme, un animal ou un oiseau, sans que cela ne soit compté comme une sadaqah.'",
      category: 'ecology'
    },
    {
      id: 5,
      question: "Selon l'Islam, corrompre l'environnement (fasad fil-ard) est :",
      options: [
        "Permis en cas de nécessité",
        "Strictement interdit",
        "Recommandé pour le progrès",
        "Neutre"
      ],
      correct: 1,
      ayah: "وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا",
      source: "Sourate Al-A'raf (7:56)",
      explanation: "Allah interdit explicitement de corrompre la Terre après qu'Il l'ait rendue bonne et équilibrée.",
      category: 'ecology'
    },
    {
      id: 6,
      question: "Quelle est l'attitude islamique envers l'eau ?",
      options: [
        "Gaspiller est autorisé",
        "Économiser même en abondance",
        "Utiliser sans limite",
        "L'ignorer"
      ],
      correct: 1,
      source: "Sunan Ibn Majah",
      explanation: "Le Prophète ﷺ a dit de ne pas gaspiller l'eau même si on se trouve au bord d'une rivière qui coule.",
      category: 'sustainability'
    },
    {
      id: 7,
      question: "Les énergies renouvelables sont-elles compatibles avec l'Islam ?",
      options: [
        "Non, c'est une innovation",
        "Oui, elles préservent la création d'Allah",
        "Seulement l'énergie solaire",
        "C'est interdit"
      ],
      correct: 1,
      explanation: "Les énergies renouvelables respectent le principe de préservation de la création d'Allah et évitent la pollution.",
      category: 'sustainability'
    },
    {
      id: 8,
      question: "Comment l'Islam considère-t-il le recyclage ?",
      options: [
        "Innovation blâmable",
        "Obligation religieuse de préservation",
        "Perte de temps",
        "Facultatif"
      ],
      correct: 1,
      explanation: "Le recyclage s'inscrit dans le principe islamique de non-gaspillage et de préservation des ressources d'Allah.",
      category: 'conservation'
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...userAnswers, selectedAnswer];
      setUserAnswers(newAnswers);
      
      if (selectedAnswer === questions[currentQuestion].correct) {
        setScore(score + 1);
      }

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setQuizCompleted(false);
    setUserAnswers([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return "Macha Allah ! Excellence في العلم البيئي";
    if (percentage >= 75) return "Très bien ! Barak Allahu fik";
    if (percentage >= 60) return "Bien ! Continue l'apprentissage";
    return "Révise les sources islamiques environnementales";
  };

  const getCategoryStats = () => {
    const categories = ['ecology', 'sustainability', 'conservation', 'responsibility'];
    return categories.map(cat => {
      const catQuestions = questions.filter(q => q.category === cat);
      const correctAnswers = catQuestions.reduce((acc, q, index) => {
        const questionIndex = questions.findIndex(quest => quest.id === q.id);
        return acc + (userAnswers[questionIndex] === q.correct ? 1 : 0);
      }, 0);
      
      return {
        category: cat,
        score: correctAnswers,
        total: catQuestions.length,
        percentage: (correctAnswers / catQuestions.length) * 100
      };
    });
  };

  if (quizCompleted) {
    const categoryStats = getCategoryStats();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 p-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-green-500 border-2 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
              <CardTitle className="text-3xl text-center flex items-center justify-center gap-3">
                <Award className="h-10 w-10" />
                Quiz Complété - Éducation Environnementale Islamique
                <Leaf className="h-10 w-10" />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-green-600 mb-4">
                  {score}/{questions.length}
                </div>
                <div className="text-2xl text-gray-700 mb-4">
                  {getScoreMessage()}
                </div>
                <div className="text-xl text-emerald-600">
                  Score: {Math.round((score / questions.length) * 100)}%
                </div>
              </div>

              {/* Statistiques par catégorie */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {categoryStats.map((stat, index) => (
                  <Card key={index} className="border-emerald-200">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-emerald-700 mb-2 capitalize">
                        {stat.category === 'ecology' && '🌍 Écologie Coranique'}
                        {stat.category === 'sustainability' && '♻️ Durabilité Islamique'}
                        {stat.category === 'conservation' && '🌿 Conservation Sunna'}
                        {stat.category === 'responsibility' && '🤲 Responsabilité Khalifah'}
                      </h3>
                      <div className="flex justify-between mb-2">
                        <span>{stat.score}/{stat.total}</span>
                        <span>{Math.round(stat.percentage)}%</span>
                      </div>
                      <Progress value={stat.percentage} className="h-2" />
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Certificat */}
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg border-2 border-green-300 mb-6">
                <h3 className="text-xl font-bold text-green-800 mb-4 text-center">
                  🏆 Certificat d'Éducation Environnementale Islamique
                </h3>
                <div className="text-center">
                  <p className="text-green-700 mb-2">
                    Certifie que l'étudiant a complété avec succès le quiz
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Conforme aux enseignements du Coran et de la Sunna • Validé par les scholars
                  </p>
                  <Badge className="bg-green-500 text-white px-4 py-2">
                    Certificat CED HalalTech™ Environnemental
                  </Badge>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={resetQuiz} className="bg-green-600 hover:bg-green-700 px-8 py-3">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Refaire le Quiz
                </Button>
                <Button variant="outline" className="px-8 py-3">
                  <Star className="h-5 w-5 mr-2" />
                  Partager Résultat
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <ProtectionFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="border-green-500 border-2 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <CardTitle className="text-2xl text-center flex items-center justify-center gap-3">
              <BookOpen className="h-8 w-8" />
              Quiz Éducation Environnementale Islamique Interactive
              <Leaf className="h-8 w-8" />
            </CardTitle>
            <div className="text-center mt-4">
              <p className="text-green-100 mb-2">
                Questions basées sur le Coran, la Sunna et les enseignements authentiques
              </p>
              <div className="flex justify-center items-center gap-4">
                <Badge className="bg-white text-green-600">
                  Question {currentQuestion + 1}/{questions.length}
                </Badge>
                <div className="flex-1 max-w-md">
                  <Progress 
                    value={((currentQuestion + 1) / questions.length) * 100} 
                    className="h-3 bg-green-200"
                  />
                </div>
                <Badge className="bg-yellow-500 text-yellow-900">
                  Score: {score}/{currentQuestion + (showResult ? 1 : 0)}
                </Badge>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-8">
            {!showResult ? (
              <div>
                <div className="mb-6">
                  <Badge className="mb-4">
                    {questions[currentQuestion].category === 'ecology' && '🌍 Écologie Coranique'}
                    {questions[currentQuestion].category === 'sustainability' && '♻️ Durabilité Islamique'}
                    {questions[currentQuestion].category === 'conservation' && '🌿 Conservation Sunna'}
                    {questions[currentQuestion].category === 'responsibility' && '🤲 Responsabilité Khalifah'}
                  </Badge>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {questions[currentQuestion].question}
                  </h2>
                </div>

                <div className="space-y-3 mb-8">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                        selectedAnswer === index
                          ? 'border-green-500 bg-green-50 text-green-800'
                          : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                      }`}
                    >
                      <span className="font-medium mr-3">
                        {String.fromCharCode(65 + index)}.
                      </span>
                      {option}
                    </button>
                  ))}
                </div>

                <div className="text-center">
                  <Button
                    onClick={handleNextQuestion}
                    disabled={selectedAnswer === null}
                    className="bg-green-600 hover:bg-green-700 px-8 py-3 disabled:opacity-50"
                  >
                    {currentQuestion === questions.length - 1 ? 'Terminer le Quiz' : 'Question Suivante'}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="mb-6">
                  {selectedAnswer === questions[currentQuestion].correct ? (
                    <div className="text-green-600">
                      <CheckCircle className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Correct ! Macha Allah</h3>
                    </div>
                  ) : (
                    <div className="text-red-600">
                      <XCircle className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Incorrect</h3>
                      <p className="text-gray-600 mb-2">
                        La bonne réponse était : <strong>{questions[currentQuestion].options[questions[currentQuestion].correct]}</strong>
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-6 text-left">
                  <h4 className="font-bold text-blue-800 mb-3">Explication islamique :</h4>
                  {questions[currentQuestion].ayah && (
                    <div className="mb-4 p-4 bg-green-100 rounded-lg">
                      <p className="text-xl text-green-800 text-center font-arabic mb-2">
                        {questions[currentQuestion].ayah}
                      </p>
                      <p className="text-sm text-green-600 text-center">
                        {questions[currentQuestion].source}
                      </p>
                    </div>
                  )}
                  <p className="text-gray-700">{questions[currentQuestion].explanation}</p>
                  {questions[currentQuestion].source && !questions[currentQuestion].ayah && (
                    <p className="text-sm text-blue-600 mt-2">
                      <strong>Source :</strong> {questions[currentQuestion].source}
                    </p>
                  )}
                </div>

                {currentQuestion < questions.length - 1 && (
                  <Button
                    onClick={handleNextQuestion}
                    className="bg-green-600 hover:bg-green-700 px-8 py-3"
                  >
                    Question Suivante
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      <ProtectionFooter />
    </div>
  );
}