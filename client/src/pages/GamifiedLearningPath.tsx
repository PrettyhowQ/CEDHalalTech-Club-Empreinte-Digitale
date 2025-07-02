import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Trophy, 
  Star, 
  Zap, 
  Target, 
  BookOpen, 
  Award, 
  Crown, 
  Gem,
  TrendingUp,
  Users,
  Calendar,
  CheckCircle,
  Lock,
  Unlock,
  Gift,
  Coins,
  Shield,
  Heart,
  Brain,
  Rocket,
  Clock,
  Flame,
  Lightbulb,
  Medal,
  Sparkles
} from 'lucide-react';

const GamifiedLearningPath = () => {
  const [userLevel, setUserLevel] = useState(7);
  const [userXP, setUserXP] = useState(2450);
  const [totalXP, setTotalXP] = useState(3000);
  const [coinsBalance, setCoinsBalance] = useState(850);
  const [currentStreak, setCurrentStreak] = useState(15);
  const [selectedPath, setSelectedPath] = useState('banking');
  const [completedModules, setCompletedModules] = useState([1, 2, 3, 4, 5, 6, 7]);

  const learningPaths = [
    {
      id: 'banking',
      title: 'Banking Islamique Digital',
      icon: Shield,
      color: 'bg-blue-500',
      modules: 12,
      xp: 1200,
      difficulty: 'Intermédiaire',
      description: 'Maîtrisez les principes bancaires halal et les technologies financières'
    },
    {
      id: 'fintech',
      title: 'FinTech Halal Avancée',
      icon: Rocket,
      color: 'bg-emerald-500',
      modules: 15,
      xp: 1800,
      difficulty: 'Avancé',
      description: 'Blockchain, cryptomonnaies et innovations financières conformes'
    },
    {
      id: 'takaful',
      title: 'Assurance Takaful',
      icon: Heart,
      color: 'bg-purple-500',
      modules: 8,
      xp: 800,
      difficulty: 'Débutant',
      description: 'Principes et gestion des assurances islamiques'
    },
    {
      id: 'investment',
      title: 'Investissements Sharia',
      icon: TrendingUp,
      color: 'bg-orange-500',
      modules: 10,
      xp: 1000,
      difficulty: 'Intermédiaire',
      description: 'Stratégies d\'investissement conformes aux principes islamiques'
    }
  ];

  const achievements = [
    { id: 1, title: 'Premier Pas Halal', desc: 'Terminer le premier module', icon: Star, earned: true, date: '2025-01-15' },
    { id: 2, title: 'Guerrier Fiqh', desc: 'Réussir 10 quiz de conformité', icon: Shield, earned: true, date: '2025-01-20' },
    { id: 3, title: 'Savant Digital', desc: 'Compléter 50 modules', icon: Brain, earned: true, date: '2025-01-25' },
    { id: 4, title: 'Maître Banking', desc: 'Certification Banking Islamique', icon: Crown, earned: true, date: '2025-01-30' },
    { id: 5, title: 'Streaker Discipline', desc: '30 jours consécutifs', icon: Fire, earned: false, progress: 50 },
    { id: 6, title: 'Mentor Communauté', desc: 'Aider 100 apprenants', icon: Users, earned: false, progress: 75 },
    { id: 7, title: 'Innovateur Halal', desc: 'Créer une solution FinTech', icon: Lightbulb, earned: false, progress: 25 }
  ];

  const currentPathModules = [
    { 
      id: 1, 
      title: 'Fondements Banking Islamique', 
      xp: 100, 
      duration: '45 min', 
      completed: true,
      topics: ['Riba vs Profit', 'Murabaha', 'Ijara', 'Musharaka'],
      quiz: true,
      practical: true
    },
    { 
      id: 2, 
      title: 'Technologie Blockchain Halal', 
      xp: 150, 
      duration: '60 min', 
      completed: true,
      topics: ['Smart Contracts Sharia', 'Audit Conformité', 'Consensus Halal'],
      quiz: true,
      practical: true
    },
    { 
      id: 3, 
      title: 'APIs Banking CED', 
      xp: 120, 
      duration: '50 min', 
      completed: true,
      topics: ['REST APIs', 'Authentification', 'Sécurité Fiqh'],
      quiz: true,
      practical: true
    },
    { 
      id: 4, 
      title: 'Mobile Banking UX/UI', 
      xp: 130, 
      duration: '55 min', 
      completed: true,
      topics: ['Design Islamique', 'Accessibilité', 'Mode Prière'],
      quiz: true,
      practical: false
    },
    { 
      id: 5, 
      title: 'Cryptographie Sharia', 
      xp: 180, 
      duration: '70 min', 
      completed: true,
      topics: ['Chiffrement Halal', 'Signatures Digitales', 'PKI Islamique'],
      quiz: true,
      practical: true
    },
    { 
      id: 6, 
      title: 'Compliance AAOIFI/IFSB', 
      xp: 200, 
      duration: '80 min', 
      completed: true,
      topics: ['Standards Internationaux', 'Reporting', 'Audit Sharia'],
      quiz: true,
      practical: false
    },
    { 
      id: 7, 
      title: 'IA Ethics Banking', 
      xp: 160, 
      duration: '65 min', 
      completed: true,
      topics: ['Machine Learning Halal', 'Algorithmes Éthiques', 'Transparence'],
      quiz: true,
      practical: true
    },
    { 
      id: 8, 
      title: 'Payment Systems Halal', 
      xp: 140, 
      duration: '58 min', 
      completed: false,
      topics: ['Gateway Islamique', 'Multi-devises', 'Settlements'],
      quiz: true,
      practical: true,
      locked: false
    },
    { 
      id: 9, 
      title: 'Risk Management Sharia', 
      xp: 170, 
      duration: '72 min', 
      completed: false,
      topics: ['Gharar Analysis', 'Stress Testing', 'Basel III Adapté'],
      quiz: true,
      practical: true,
      locked: false
    },
    { 
      id: 10, 
      title: 'Data Analytics Halal', 
      xp: 190, 
      duration: '75 min', 
      completed: false,
      topics: ['Big Data Ethics', 'Privacy Islamique', 'Insights Sharia'],
      quiz: true,
      practical: true,
      locked: true
    },
    { 
      id: 11, 
      title: 'Cybersecurity Islamique', 
      xp: 220, 
      duration: '85 min', 
      completed: false,
      topics: ['Threat Intelligence', 'Islamic SOC', 'Incident Response'],
      quiz: true,
      practical: true,
      locked: true
    },
    { 
      id: 12, 
      title: 'Projet Final CED Bank', 
      xp: 300, 
      duration: '120 min', 
      completed: false,
      topics: ['App Complete', 'Certification', 'Portfolio'],
      quiz: false,
      practical: true,
      locked: true,
      project: true
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Ahmad Al-Rashid', xp: 15420, level: 28, country: '🇸🇦', avatar: '👨‍💼' },
    { rank: 2, name: 'Fatima Benali', xp: 14850, level: 27, country: '🇲🇦', avatar: '👩‍💻' },
    { rank: 3, name: 'Yakoubi Yamina', xp: 14200, level: 26, country: '🇨🇭', avatar: '👩‍🔬' },
    { rank: 4, name: 'Omar Hussein', xp: 13950, level: 25, country: '🇦🇪', avatar: '👨‍🎓' },
    { rank: 5, name: 'Vous', xp: userXP, level: userLevel, country: '🇫🇷', avatar: '👤', highlight: true }
  ];

  const upcomingRewards = [
    { xp: 3000, reward: '🎯 Badge "Expert Banking"', type: 'badge' },
    { xp: 3500, reward: '💎 50 Coins Bonus', type: 'coins' },
    { xp: 4000, reward: '🏆 Certificat AAOIFI', type: 'certificate' },
    { xp: 5000, reward: '👑 Accès VIP Mentoring', type: 'feature' }
  ];

  const completeModule = (moduleId) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
      const module = currentPathModules.find(m => m.id === moduleId);
      setUserXP(prev => prev + module.xp);
      setCoinsBalance(prev => prev + Math.floor(module.xp / 10));
      
      // Level up logic
      if (userXP + module.xp >= totalXP) {
        setUserLevel(prev => prev + 1);
        setUserXP(0);
        setTotalXP(prev => prev + 500);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="h-12 w-12 text-yellow-500" />
            <h1 className="text-4xl font-bold text-gray-800">
              Parcours Gamifié FinTech Islamique
            </h1>
            <Sparkles className="h-12 w-12 text-purple-500" />
          </div>
          <p className="text-xl text-gray-600 mb-4">
            🎮 <strong>Apprenez en jouant</strong> - Technologies Financières 100% Halal 🎮
          </p>
          <div className="flex items-center justify-center gap-6">
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
              🏆 Niveau {userLevel}
            </Badge>
            <Badge variant="outline" className="bg-blue-100 text-blue-800">
              ⚡ {userXP} XP
            </Badge>
            <Badge variant="outline" className="bg-green-100 text-green-800">
              🪙 {coinsBalance} Coins
            </Badge>
            <Badge variant="outline" className="bg-orange-100 text-orange-800">
              🔥 {currentStreak} jours
            </Badge>
          </div>
        </div>

        {/* Profil et Progress */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          
          {/* Profil */}
          <Card>
            <CardHeader className="text-center">
              <div className="text-6xl mb-2">👤</div>
              <CardTitle>Niveau {userLevel}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progression</span>
                    <span>{userXP}/{totalXP} XP</span>
                  </div>
                  <Progress value={(userXP / totalXP) * 100} className="h-2" />
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-yellow-50 p-2 rounded">
                    <Trophy className="h-4 w-4 mx-auto text-yellow-600 mb-1" />
                    <div className="text-xs font-medium">12 Badges</div>
                  </div>
                  <div className="bg-green-50 p-2 rounded">
                    <Target className="h-4 w-4 mx-auto text-green-600 mb-1" />
                    <div className="text-xs font-medium">85% Réussite</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* XP et Récompenses */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                Prochaines Récompenses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingRewards.map((reward, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                      userXP >= reward.xp ? 'bg-green-500 text-white' : 'bg-gray-200'
                    }`}>
                      {userXP >= reward.xp ? '✓' : reward.xp}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{reward.reward}</p>
                      <p className="text-xs text-gray-500">{reward.xp} XP</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Streak */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Fire className="h-5 w-5 text-orange-500" />
                Discipline Quotidienne
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">{currentStreak}</div>
                <p className="text-sm text-gray-600 mb-4">jours consécutifs</p>
                
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({length: 7}, (_, i) => (
                    <div key={i} className={`h-6 w-6 rounded-sm ${
                      i < 5 ? 'bg-orange-400' : 'bg-gray-200'
                    }`} />
                  ))}
                </div>
                
                <Button size="sm" className="w-full mt-3 bg-orange-500 hover:bg-orange-600">
                  Continuer Série
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Classement */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-500" />
                Classement Global
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {leaderboard.slice(0, 5).map((user) => (
                  <div key={user.rank} className={`flex items-center gap-2 p-2 rounded ${
                    user.highlight ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'
                  }`}>
                    <span className="text-sm font-bold w-6">{user.rank}</span>
                    <span className="text-lg">{user.avatar}</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.country} Niv.{user.level}</p>
                    </div>
                    <span className="text-xs text-gray-400">{user.xp}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Parcours d'apprentissage */}
        <Tabs defaultValue="banking" className="mb-8">
          <TabsList className="grid grid-cols-4 w-full max-w-4xl mx-auto">
            {learningPaths.map(path => (
              <TabsTrigger key={path.id} value={path.id} className="flex items-center gap-2">
                <path.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{path.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {learningPaths.map(path => (
            <TabsContent key={path.id} value={path.id}>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${path.color} text-white`}>
                        <path.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle>{path.title}</CardTitle>
                        <p className="text-gray-600">{path.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{path.difficulty}</Badge>
                      <p className="text-sm text-gray-500 mt-1">{path.modules} modules • {path.xp} XP</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {currentPathModules.map((module) => (
                      <div key={module.id} className={`border rounded-lg p-4 ${
                        module.completed ? 'bg-green-50 border-green-200' : 
                        module.locked ? 'bg-gray-50 border-gray-200 opacity-50' : 
                        'bg-white border-gray-200 hover:border-blue-300'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {module.completed ? (
                              <CheckCircle className="h-6 w-6 text-green-600" />
                            ) : module.locked ? (
                              <Lock className="h-6 w-6 text-gray-400" />
                            ) : (
                              <BookOpen className="h-6 w-6 text-blue-600" />
                            )}
                            
                            <div>
                              <h3 className="font-medium">{module.title}</h3>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <span>⚡ {module.xp} XP</span>
                                <span><Clock className="h-3 w-3 inline mr-1" />{module.duration}</span>
                                {module.quiz && <span>📝 Quiz</span>}
                                {module.practical && <span>💻 Pratique</span>}
                                {module.project && <span>🚀 Projet</span>}
                              </div>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {module.topics.map((topic, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {topic}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            {module.completed && (
                              <Badge className="bg-green-500">Terminé</Badge>
                            )}
                            {!module.locked && !module.completed && (
                              <Button
                                onClick={() => completeModule(module.id)}
                                size="sm"
                                className="bg-blue-500 hover:bg-blue-600"
                              >
                                {module.project ? 'Commencer Projet' : 'Commencer'}
                              </Button>
                            )}
                            {module.locked && (
                              <Badge variant="secondary">Verrouillé</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Achievements */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-500" />
              Achievements & Badges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className={`p-4 border rounded-lg text-center ${
                  achievement.earned ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50 border-gray-200'
                }`}>
                  <achievement.icon className={`h-8 w-8 mx-auto mb-2 ${
                    achievement.earned ? 'text-yellow-600' : 'text-gray-400'
                  }`} />
                  <h3 className="font-medium text-sm mb-1">{achievement.title}</h3>
                  <p className="text-xs text-gray-600 mb-2">{achievement.desc}</p>
                  
                  {achievement.earned ? (
                    <div>
                      <Badge className="bg-yellow-500 mb-1">Obtenu</Badge>
                      <p className="text-xs text-gray-500">{achievement.date}</p>
                    </div>
                  ) : (
                    <div>
                      <Progress value={achievement.progress || 0} className="h-1 mb-2" />
                      <Badge variant="outline">{achievement.progress || 0}%</Badge>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer Protection */}
        <div className="text-center mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            © 2025 <strong>Yakoubi Yamina</strong> - Club Empreinte Digitale CED™ | 
            Parcours Gamifié FinTech Islamique | 
            Tous droits réservés
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default GamifiedLearningPath;