import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Trophy, Star, Clock, Target, Zap, BookOpen, Heart, Shield, Sparkles, RefreshCw } from "lucide-react";

interface Challenge {
  id: string;
  type: 'quick-quiz' | 'memory-game' | 'word-match' | 'true-false' | 'multiple-choice';
  category: 'quran' | 'hadith' | 'seerah' | 'fiqh' | 'akhlaq' | 'culture';
  difficulty: 'easy' | 'medium' | 'hard';
  title: string;
  description: string;
  question: string;
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
  reward: {
    points: number;
    badge?: string;
    achievement?: string;
  };
  timeLimit: number; // en secondes
  source: string;
}

interface UserProgress {
  level: number;
  totalPoints: number;
  streak: number;
  badgesEarned: string[];
  categoriesCompleted: string[];
  averageScore: number;
  challengesCompleted: number;
}

const challenges: Challenge[] = [
  {
    id: '1',
    type: 'multiple-choice',
    category: 'quran',
    difficulty: 'easy',
    title: 'La Première Révélation',
    description: 'Connaissez-vous la première sourate révélée ?',
    question: 'Quelle est la première sourate qui fut révélée au Prophète Muhammad (paix et bénédictions sur lui) ?',
    options: ['Al-Fatiha', 'Al-Alaq', 'Al-Muddaththir', 'Al-Baqara'],
    correctAnswer: 1,
    explanation: 'Al-Alaq (96) fut la première sourate révélée, commençant par "Iqra" (Lis!), soulignant l\'importance de la lecture et de la connaissance.',
    reward: {
      points: 10,
      badge: 'Étudiant Coranique',
      achievement: 'Première révélation maîtrisée'
    },
    timeLimit: 30,
    source: 'Sahih Bukhari'
  },
  {
    id: '2',
    type: 'true-false',
    category: 'hadith',
    difficulty: 'medium',
    title: 'Les Actes et les Intentions',
    description: 'Un hadith célèbre sur l\'importance de l\'intention',
    question: 'Vrai ou Faux: "Les actes ne valent que par leurs intentions" est un hadith authentique ?',
    correctAnswer: 'true',
    explanation: 'C\'est vrai ! C\'est l\'un des hadiths les plus importants rapporté par Bukhari et Muslim. Il enseigne que la valeur de nos actes dépend de notre intention (niyyah).',
    reward: {
      points: 15,
      badge: 'Maître des Hadiths',
      achievement: 'Intention pure'
    },
    timeLimit: 20,
    source: 'Sahih Bukhari & Muslim'
  },
  {
    id: '3',
    type: 'word-match',
    category: 'culture',
    difficulty: 'easy',
    title: 'Salutations Islamiques',
    description: 'Associez les salutations à leurs significations',
    question: 'Associez "As-salamu alaykum" à sa traduction correcte',
    options: ['Bonjour', 'Que la paix soit sur vous', 'Bonne nuit', 'Au revoir'],
    correctAnswer: 1,
    explanation: 'As-salamu alaykum signifie "Que la paix soit sur vous". C\'est la salutation universelle des musulmans, porteuse de paix et de bénédictions.',
    reward: {
      points: 8,
      badge: 'Ambassadeur de Paix',
      achievement: 'Salutations maîtrisées'
    },
    timeLimit: 25,
    source: 'Adab Islamique'
  },
  {
    id: '4',
    type: 'multiple-choice',
    category: 'seerah',
    difficulty: 'medium',
    title: 'L\'Hégire Historique',
    description: 'L\'émigration du Prophète vers Médine',
    question: 'En quelle année de l\'ère chrétienne a eu lieu l\'Hégire (émigration du Prophète vers Médine) ?',
    options: ['620', '622', '624', '630'],
    correctAnswer: 1,
    explanation: 'L\'Hégire a eu lieu en 622 de l\'ère chrétienne. Cet événement marque le début du calendrier islamique et fut un tournant dans l\'histoire de l\'Islam.',
    reward: {
      points: 20,
      badge: 'Historien de la Seerah',
      achievement: 'Hégire mémorisée'
    },
    timeLimit: 35,
    source: 'Seerah Ibn Hisham'
  },
  {
    id: '5',
    type: 'true-false',
    category: 'fiqh',
    difficulty: 'hard',
    title: 'Les Piliers de l\'Islam',
    description: 'Connaissances fondamentales sur les piliers',
    question: 'Vrai ou Faux: Le Jihad est l\'un des cinq piliers de l\'Islam ?',
    correctAnswer: 'false',
    explanation: 'Faux. Les cinq piliers sont: Shahada (témoignage), Salat (prière), Zakat (aumône), Sawm (jeûne du Ramadan), et Hajj (pèlerinage). Le Jihad est important mais n\'est pas un pilier.',
    reward: {
      points: 25,
      badge: 'Savant du Fiqh',
      achievement: 'Piliers maîtrisés'
    },
    timeLimit: 40,
    source: 'Fiqh des Quatre Écoles'
  },
  {
    id: '6',
    type: 'multiple-choice',
    category: 'akhlaq',
    difficulty: 'easy',
    title: 'Les Nobles Caractères',
    description: 'L\'éthique et la morale islamique',
    question: 'Quelle est la qualité que le Prophète (paix et bénédictions sur lui) a le plus recommandée ?',
    options: ['La générosité', 'La patience', 'La sincérité', 'La compassion'],
    correctAnswer: 2,
    explanation: 'La sincérité (Ikhlas) est fondamentale. Le Prophète a dit: "Allah n\'accepte que les actes sincères". C\'est la base de toute bonne action.',
    reward: {
      points: 12,
      badge: 'Noble Caractère',
      achievement: 'Sincérité reconnue'
    },
    timeLimit: 30,
    source: 'Riyad as-Salihin'
  }
];

const achievements = [
  { id: 'first-win', name: 'Premier Succès', description: 'Réussir votre premier défi', icon: Star },
  { id: 'speed-master', name: 'Maître de Vitesse', description: 'Répondre en moins de 10 secondes', icon: Zap },
  { id: 'knowledge-seeker', name: 'Chercheur de Savoir', description: 'Compléter 10 défis', icon: BookOpen },
  { id: 'perfect-score', name: 'Score Parfait', description: 'Obtenir 100% sur un défi difficile', icon: Trophy },
  { id: 'category-master', name: 'Maître de Catégorie', description: 'Compléter tous les défis d\'une catégorie', icon: Target },
  { id: 'streak-champion', name: 'Champion de Série', description: 'Maintenir une série de 7 victoires', icon: Sparkles }
];

export default function GamifiedIslamicKnowledgeMicroChallenges() {
  const [currentChallenge, setCurrentChallenge] = useState<Challenge | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | number>('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    level: 3,
    totalPoints: 145,
    streak: 4,
    badgesEarned: ['Étudiant Coranique', 'Ambassadeur de Paix'],
    categoriesCompleted: ['culture'],
    averageScore: 78,
    challengesCompleted: 12
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Timer effect
  useEffect(() => {
    if (currentChallenge && timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && currentChallenge && !showResult) {
      handleSubmit();
    }
  }, [timeLeft, currentChallenge, showResult]);

  const startChallenge = (challenge?: Challenge) => {
    const filteredChallenges = challenges.filter(c => 
      (selectedCategory === 'all' || c.category === selectedCategory) &&
      (selectedDifficulty === 'all' || c.difficulty === selectedDifficulty)
    );
    
    const challengeToStart = challenge || filteredChallenges[Math.floor(Math.random() * filteredChallenges.length)];
    setCurrentChallenge(challengeToStart);
    setSelectedAnswer('');
    setShowResult(false);
    setTimeLeft(challengeToStart.timeLimit);
  };

  const handleSubmit = () => {
    if (!currentChallenge) return;
    
    const correct = selectedAnswer === currentChallenge.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      setUserProgress(prev => ({
        ...prev,
        totalPoints: prev.totalPoints + currentChallenge.reward.points,
        streak: prev.streak + 1,
        challengesCompleted: prev.challengesCompleted + 1,
        badgesEarned: currentChallenge.reward.badge && !prev.badgesEarned.includes(currentChallenge.reward.badge)
          ? [...prev.badgesEarned, currentChallenge.reward.badge]
          : prev.badgesEarned
      }));
    } else {
      setUserProgress(prev => ({
        ...prev,
        streak: 0
      }));
    }
  };

  const resetChallenge = () => {
    setCurrentChallenge(null);
    setSelectedAnswer('');
    setShowResult(false);
    setTimeLeft(0);
  };

  const categories = [
    { id: 'all', name: 'Toutes', icon: Sparkles, color: 'bg-gray-600' },
    { id: 'quran', name: 'Coran', icon: BookOpen, color: 'bg-green-600' },
    { id: 'hadith', name: 'Hadith', icon: Star, color: 'bg-blue-600' },
    { id: 'seerah', name: 'Seerah', icon: Heart, color: 'bg-purple-600' },
    { id: 'fiqh', name: 'Fiqh', icon: Shield, color: 'bg-red-600' },
    { id: 'akhlaq', name: 'Akhlaq', icon: Heart, color: 'bg-yellow-600' },
    { id: 'culture', name: 'Culture', icon: Target, color: 'bg-pink-600' }
  ];

  const difficulties = [
    { id: 'all', name: 'Tous niveaux', color: 'bg-gray-600' },
    { id: 'easy', name: 'Facile', color: 'bg-green-600' },
    { id: 'medium', name: 'Moyen', color: 'bg-yellow-600' },
    { id: 'hard', name: 'Difficile', color: 'bg-red-600' }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-600';
      case 'medium': return 'bg-yellow-600';
      case 'hard': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : BookOpen;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'bg-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            🎮 Micro-Défis Gamifiés de Connaissance Islamique
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Apprenez l'Islam de manière ludique avec des défis rapides et enrichissants
          </p>
        </div>

        {/* Progression utilisateur */}
        <Card className="mb-8 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border-purple-600/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Trophy className="h-6 w-6 text-yellow-400" />
              <span>Votre Progression</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-yellow-900/30 rounded-lg">
                <div className="text-3xl font-bold text-yellow-400 mb-1">
                  {userProgress.level}
                </div>
                <div className="text-sm text-gray-300">Niveau</div>
              </div>
              <div className="text-center p-4 bg-green-900/30 rounded-lg">
                <div className="text-3xl font-bold text-green-400 mb-1">
                  {userProgress.totalPoints}
                </div>
                <div className="text-sm text-gray-300">Points Total</div>
              </div>
              <div className="text-center p-4 bg-orange-900/30 rounded-lg">
                <div className="text-3xl font-bold text-orange-400 mb-1">
                  {userProgress.streak}
                </div>
                <div className="text-sm text-gray-300">Série Actuelle</div>
              </div>
              <div className="text-center p-4 bg-blue-900/30 rounded-lg">
                <div className="text-3xl font-bold text-blue-400 mb-1">
                  {userProgress.challengesCompleted}
                </div>
                <div className="text-sm text-gray-300">Défis Complétés</div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-300 mb-2">
                <span>Progression vers le niveau suivant</span>
                <span>65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Badges Récents</h3>
              <div className="flex flex-wrap gap-2">
                {userProgress.badgesEarned.map(badge => (
                  <Badge key={badge} className="bg-yellow-600 text-white">
                    ⭐ {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filtres */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-slate-800/40 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Catégories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {categories.map(category => {
                  const IconComponent = category.icon;
                  return (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      className={`${
                        selectedCategory === category.id 
                          ? `${category.color} text-white` 
                          : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <IconComponent className="h-4 w-4 mr-2" />
                      {category.name}
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/40 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Difficulté</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {difficulties.map(difficulty => (
                  <Button
                    key={difficulty.id}
                    variant={selectedDifficulty === difficulty.id ? "default" : "outline"}
                    className={`${
                      selectedDifficulty === difficulty.id 
                        ? `${difficulty.color} text-white` 
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                    onClick={() => setSelectedDifficulty(difficulty.id)}
                  >
                    {difficulty.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Zone de défi */}
        {!currentChallenge ? (
          <Card className="bg-slate-800/40 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-center">Prêt pour un défi ?</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                onClick={() => startChallenge()}
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4"
              >
                <Zap className="h-6 w-6 mr-2" />
                Commencer un Défi Aléatoire
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border-green-600/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center space-x-2">
                  {(() => {
                    const IconComponent = getCategoryIcon(currentChallenge.category);
                    return <IconComponent className="h-6 w-6 text-green-400" />;
                  })()}
                  <span>{currentChallenge.title}</span>
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge className={`${getCategoryColor(currentChallenge.category)} text-white`}>
                    {currentChallenge.category}
                  </Badge>
                  <Badge className={`${getDifficultyColor(currentChallenge.difficulty)} text-white`}>
                    {currentChallenge.difficulty}
                  </Badge>
                </div>
              </div>
              <CardDescription className="text-gray-300">
                {currentChallenge.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Timer */}
              <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span className="text-white">Temps restant:</span>
                </div>
                <div className={`text-2xl font-bold ${timeLeft <= 10 ? 'text-red-400' : 'text-blue-400'}`}>
                  {timeLeft}s
                </div>
              </div>

              {/* Question */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {currentChallenge.question}
                </h3>
              </div>

              {/* Options */}
              {currentChallenge.options && (
                <div className="space-y-3">
                  {currentChallenge.options.map((option, index) => (
                    <Button
                      key={index}
                      variant={selectedAnswer === index ? "default" : "outline"}
                      className={`w-full text-left p-4 h-auto ${
                        selectedAnswer === index 
                          ? 'bg-green-600 text-white' 
                          : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                      }`}
                      onClick={() => setSelectedAnswer(index)}
                      disabled={showResult}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="font-bold text-lg">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span>{option}</span>
                      </div>
                    </Button>
                  ))}
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={resetChallenge}
                  className="bg-slate-700 text-gray-300 hover:bg-slate-600"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Nouveau Défi
                </Button>
                
                {!showResult && (
                  <Button
                    onClick={handleSubmit}
                    disabled={selectedAnswer === ''}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Valider la Réponse
                  </Button>
                )}
              </div>

              {/* Résultat */}
              {showResult && (
                <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-900/30' : 'bg-red-900/30'}`}>
                  <div className="flex items-center space-x-2 mb-3">
                    {isCorrect ? (
                      <Trophy className="h-6 w-6 text-green-400" />
                    ) : (
                      <BookOpen className="h-6 w-6 text-red-400" />
                    )}
                    <span className={`text-lg font-bold ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                      {isCorrect ? 'Correct !' : 'Incorrect'}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-3">{currentChallenge.explanation}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      Source: {currentChallenge.source}
                    </div>
                    {isCorrect && (
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-yellow-400">
                          +{currentChallenge.reward.points} points
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Défis disponibles */}
        <Card className="mt-8 bg-slate-800/40 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Défis Disponibles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {challenges
                .filter(c => 
                  (selectedCategory === 'all' || c.category === selectedCategory) &&
                  (selectedDifficulty === 'all' || c.difficulty === selectedDifficulty)
                )
                .map(challenge => {
                  const IconComponent = getCategoryIcon(challenge.category);
                  return (
                    <div 
                      key={challenge.id} 
                      className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/50 hover:border-green-600/50 transition-all cursor-pointer"
                      onClick={() => startChallenge(challenge)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <IconComponent className="h-5 w-5 text-green-400" />
                        <div className="flex items-center space-x-2">
                          <Badge className={`${getCategoryColor(challenge.category)} text-white text-xs`}>
                            {challenge.category}
                          </Badge>
                          <Badge className={`${getDifficultyColor(challenge.difficulty)} text-white text-xs`}>
                            {challenge.difficulty}
                          </Badge>
                        </div>
                      </div>
                      <h3 className="font-semibold text-white mb-2">{challenge.title}</h3>
                      <p className="text-sm text-gray-300 mb-3">{challenge.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">
                          <Clock className="h-3 w-3 inline mr-1" />
                          {challenge.timeLimit}s
                        </span>
                        <span className="text-xs text-yellow-400">
                          <Star className="h-3 w-3 inline mr-1" />
                          {challenge.reward.points} pts
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}