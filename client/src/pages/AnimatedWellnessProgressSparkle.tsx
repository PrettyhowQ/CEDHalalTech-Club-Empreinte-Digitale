import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Sparkles, Heart, Star, Zap, Crown, Award } from 'lucide-react';

const AnimatedWellnessProgressSparkle = () => {
  const [wellnessScore, setWellnessScore] = useState(0);
  const [animationActive, setAnimationActive] = useState(false);
  const [sparkleElements, setSparkleElements] = useState<Array<{
    id: string;
    x: number;
    y: number;
    delay: number;
    size: number;
  }>>([]);

  const wellnessCategories = [
    {
      id: 'spiritual',
      title: 'Spiritualité',
      icon: <Heart className="w-6 h-6" />,
      color: 'from-pink-400 to-rose-500',
      progress: 85,
      activities: ['Prières quotidiennes', 'Lecture Coran', 'Dhikr'],
      verse: 'Sourate 13:28'
    },
    {
      id: 'physical',
      title: 'Santé Physique',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-green-400 to-emerald-500',
      progress: 72,
      activities: ['Sport halal', 'Alimentation saine', 'Repos suffisant'],
      guidance: 'Corps = Amanah'
    },
    {
      id: 'mental',
      title: 'Bien-être Mental',
      icon: <Star className="w-6 h-6" />,
      color: 'from-blue-400 to-cyan-500',
      progress: 68,
      activities: ['Méditation', 'Gratitude', 'Apprentissage'],
      principle: 'Paix intérieure'
    },
    {
      id: 'social',
      title: 'Relations Sociales',
      icon: <Crown className="w-6 h-6" />,
      color: 'from-purple-400 to-violet-500',
      progress: 91,
      activities: ['Famille', 'Communauté', 'Bienfaisance'],
      concept: 'Ta\'awun'
    }
  ];

  // Animation de particules scintillantes
  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < 20; i++) {
        newSparkles.push({
          id: `sparkle-${Date.now()}-${i}`,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 2,
          size: Math.random() * 0.5 + 0.5
        });
      }
      setSparkleElements(newSparkles);
    };

    if (animationActive) {
      generateSparkles();
      const interval = setInterval(generateSparkles, 3000);
      return () => clearInterval(interval);
    }
  }, [animationActive]);

  // Calcul du score global
  useEffect(() => {
    const totalProgress = wellnessCategories.reduce((sum, cat) => sum + cat.progress, 0);
    const averageScore = Math.round(totalProgress / wellnessCategories.length);
    setWellnessScore(averageScore);
  }, []);

  const triggerCelebration = () => {
    setAnimationActive(true);
    setTimeout(() => setAnimationActive(false), 5000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreEmoji = (score: number) => {
    if (score >= 90) return '🌟';
    if (score >= 80) return '✨';
    if (score >= 70) return '⭐';
    if (score >= 60) return '🌙';
    return '💫';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 relative overflow-hidden">
      {/* Sparkle Animation Layer */}
      {animationActive && (
        <div className="fixed inset-0 pointer-events-none z-20">
          {sparkleElements.map((sparkle) => (
            <div
              key={sparkle.id}
              className="absolute animate-ping"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
                animationDelay: `${sparkle.delay}s`,
                transform: `scale(${sparkle.size})`
              }}
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
          ))}
        </div>
      )}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            ✨ Animated Wellness Progress Sparkle Effect
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Progression du bien-être avec effets visuels spirituels et motivants
          </p>
          <p className="text-sm text-gray-500">
            "وَبَشِّرِ الْمُؤْمِنِينَ" - "Et annonce la bonne nouvelle aux croyants"
          </p>
        </div>

        {/* Score Global Animé */}
        <Card className="mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-indigo-600/20 animate-pulse"></div>
          <CardContent className="p-8 text-center relative z-10">
            <div className="mb-4">
              <div className="text-8xl mb-4 animate-bounce">
                {getScoreEmoji(wellnessScore)}
              </div>
              <div className={`text-6xl font-bold mb-2 ${getScoreColor(wellnessScore)} filter drop-shadow-lg`}>
                {wellnessScore}%
              </div>
              <div className="text-xl opacity-90 mb-4">Score Bien-être Global</div>
              
              {/* Barre de progression principale avec effet scintillant */}
              <div className="relative max-w-md mx-auto">
                <Progress 
                  value={wellnessScore} 
                  className="h-4 bg-white/20" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse rounded-full"></div>
              </div>
            </div>
            
            <Button
              onClick={triggerCelebration}
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Célébrer les Progrès
            </Button>
          </CardContent>
        </Card>

        {/* Catégories de Bien-être avec Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {wellnessCategories.map((category, index) => (
            <Card 
              key={category.id} 
              className="shadow-lg border-2 border-white/50 backdrop-blur-sm bg-white/90 hover:bg-white/95 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <div>
                    <div className="text-xl">{category.title}</div>
                    <div className="text-sm text-gray-600">
                      {category.verse && `📖 ${category.verse}`}
                      {category.guidance && `🤲 ${category.guidance}`}
                      {category.principle && `💎 ${category.principle}`}
                      {category.concept && `🤝 ${category.concept}`}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Barre de progression avec effet brillant */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Progression</span>
                    <Badge className={`bg-gradient-to-r ${category.color} text-white`}>
                      {category.progress}%
                    </Badge>
                  </div>
                  <div className="relative">
                    <Progress value={category.progress} className="h-3" />
                    <div 
                      className="absolute top-0 left-0 h-3 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full animate-pulse"
                      style={{ width: `${category.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Activités avec animations de validation */}
                <div className="space-y-2">
                  {category.activities.map((activity, actIndex) => (
                    <div 
                      key={actIndex}
                      className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-sm">{activity}</span>
                      <div className="ml-auto">
                        <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs animate-bounce">
                          ✓
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Récompenses et Niveaux avec Effets Spéciaux */}
        <Card className="mb-8 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 text-white shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Award className="w-8 h-8 animate-spin" />
              Système de Récompenses Spirituelles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-4xl mb-3 animate-bounce">👑</div>
                <div className="text-xl font-bold mb-2">Niveau 7</div>
                <div className="text-sm opacity-90">Serviteur Dévoué</div>
                <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-300 to-yellow-100 rounded-full animate-pulse" style={{width: '75%'}}></div>
                </div>
              </div>
              
              <div className="text-center bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-4xl mb-3 animate-pulse">💎</div>
                <div className="text-xl font-bold mb-2">2,847</div>
                <div className="text-sm opacity-90">Points Barakah</div>
                <div className="mt-3 flex justify-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300 animate-ping" style={{animationDelay: `${i * 0.2}s`}} />
                  ))}
                </div>
              </div>
              
              <div className="text-center bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-4xl mb-3 animate-bounce">🎁</div>
                <div className="text-xl font-bold mb-2">15 jours</div>
                <div className="text-sm opacity-90">Streak Actuel</div>
                <div className="mt-3">
                  <Badge className="bg-green-500 animate-pulse">
                    🔥 En feu !
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Affirmations Spirituelles Animées */}
        <Card className="bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 text-white">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-4 animate-pulse">🌟</div>
            <div className="space-y-4">
              <p className="text-lg font-medium animate-fade-in">
                "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ"
              </p>
              <p className="text-sm opacity-90">
                "Notre Seigneur ! Accorde-nous belle part ici-bas, et belle part dans l'au-delà ; et protège-nous du châtiment du Feu !"
              </p>
              <div className="flex justify-center gap-2 mt-4">
                {['💚', '💙', '💜', '🤍', '💛'].map((heart, i) => (
                  <span key={i} className="text-2xl animate-bounce" style={{animationDelay: `${i * 0.3}s`}}>
                    {heart}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>© 2025 Club Empreinte Digitale - Yakoubi Yamina | CED HalalTech™</p>
          <p>Animated Wellness Progress Sparkle Effect - 100% Conforme Coran & Sunna</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedWellnessProgressSparkle;