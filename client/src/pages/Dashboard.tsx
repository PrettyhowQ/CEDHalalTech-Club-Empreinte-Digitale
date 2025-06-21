import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { VoiceAssistant } from '@/components/voice/VoiceAssistant';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { isUnauthorizedError } from '@/lib/authUtils';
import { 
  Trophy, 
  TrendingUp, 
  Globe, 
  BookOpen, 
  Clock, 
  Star, 
  Award, 
  Target,
  Zap,
  Calendar,
  BarChart3,
  Users,
  Play,
  ChevronRight,
  Download,
  DollarSign
} from 'lucide-react';

function StatCard({ icon: Icon, title, value, subtitle, color = "text-primary-600" }: {
  icon: any;
  title: string;
  value: string | number;
  subtitle: string;
  color?: string;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
            <p className="text-xs text-gray-500">{subtitle}</p>
          </div>
          <div className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center`}>
            <Icon className={`h-6 w-6 ${color}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function SkillProgressCard({ skill, progress, color }: {
  skill: string;
  progress: number;
  color: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">{skill}</span>
        <span className="text-sm text-gray-600">{progress}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
}

function RecentCourseCard({ course, progress }: { course: any; progress?: any }) {
  const progressPercentage = progress?.progress || 0;
  const isCompleted = progress?.completed || false;

  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer">
      <CardContent className="p-4">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
            <BookOpen className="h-6 w-6 text-primary-600" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-gray-900 truncate">{course.title}</h4>
            <p className="text-sm text-gray-600 mb-2">{course.category}</p>
            {progressPercentage > 0 && (
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Progression</span>
                  <span className="text-xs font-medium">{progressPercentage}%</span>
                </div>
                <Progress value={progressPercentage} className="h-1" />
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2">
            {isCompleted && (
              <Badge className="bg-green-100 text-green-600 text-xs">Terminé</Badge>
            )}
            <Button size="sm" variant="ghost" className="p-1">
              <Play className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  const { toast } = useToast();
  const { isAuthenticated, isLoading, user } = useAuth();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast({
        title: "Accès non autorisé",
        description: "Vous devez être connecté pour accéder au dashboard.",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
    }
  }, [isAuthenticated, isLoading, toast]);

  const { data: analytics, isLoading: analyticsLoading } = useQuery({
    queryKey: ['/api/analytics/user'],
    retry: false,
    enabled: isAuthenticated,

  });

  const { data: recentCourses } = useQuery({
    queryKey: ['/api/courses'],
    enabled: isAuthenticated,
  });

  const { data: userProgress } = useQuery({
    queryKey: ['/api/user/progress'],
    enabled: isAuthenticated,
  });

  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              <Skeleton className="h-8 w-64" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-32" />
                ))}
              </div>
              <div className="grid lg:grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-80" />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const skills = [
    { name: 'IA Responsable', progress: 85, color: 'bg-primary-500' },
    { name: 'Programmation', progress: 72, color: 'bg-secondary-500' },
    { name: 'Éthique Tech', progress: 91, color: 'bg-accent-500' },
    { name: 'Économie Circulaire', progress: 67, color: 'bg-green-500' },
    { name: 'Diététique', progress: 54, color: 'bg-purple-500' },
  ];

  const achievements = [
    { 
      title: 'Premier Cours Terminé', 
      description: 'Félicitations ! Vous avez terminé votre premier cours.',
      icon: BookOpen,
      earned: true,
      date: '2025-01-15'
    },
    { 
      title: 'Streamer Débutant', 
      description: 'Terminez 5 cours en une semaine.',
      icon: Zap,
      earned: false,
      progress: 3
    },
    { 
      title: 'Expert IA Éthique', 
      description: 'Obtenez 85% dans tous les cours d\'IA responsable.',
      icon: Trophy,
      earned: true,
      date: '2025-01-10'
    },
    { 
      title: 'Certificat Programmation', 
      description: 'Terminez le parcours de certification en programmation.',
      icon: Award,
      earned: false,
      progress: 75
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Bienvenue, {user?.firstName || 'Apprenant'} ! 👋
            </h1>
            <p className="text-gray-600">
              Voici un aperçu de vos progrès et activités récentes.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              icon={BookOpen}
              title="Cours Terminés"
              value={analytics?.completedCourses || 0}
              subtitle={`sur ${analytics?.totalCourses || 0} disponibles`}
              color="text-primary-600"
            />
            <StatCard
              icon={Trophy}
              title="Points XP"
              value={analytics?.totalXP || 0}
              subtitle={`Niveau ${analytics?.level || 1}`}
              color="text-accent-500"
            />
            <StatCard
              icon={Clock}
              title="Temps d'étude"
              value={`${analytics?.learningHours || 0}h`}
              subtitle="ce mois-ci"
              color="text-secondary-600"
            />
            <StatCard
              icon={Award}
              title="Certifications"
              value={analytics?.certifications || 0}
              subtitle="obtenues"
              color="text-green-600"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Learning Progress */}
            <div className="lg:col-span-2 space-y-6">
              {/* Progress Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary-600" />
                    <span>Progression des Compétences</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <SkillProgressCard 
                        key={index}
                        skill={skill.name}
                        progress={skill.progress}
                        color={skill.color}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Courses */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <BookOpen className="h-5 w-5 text-primary-600" />
                      <span>Formations Récentes</span>
                    </CardTitle>
                    <Button variant="ghost" size="sm">
                      Voir tout
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentCourses?.slice(0, 3).map((course: any) => {
                      const progress = userProgress?.find((p: any) => p.courseId === course.id);
                      return (
                        <RecentCourseCard 
                          key={course.id}
                          course={course}
                          progress={progress}
                        />
                      );
                    }) || (
                      <div className="text-center py-8 text-gray-500">
                        <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                        <p>Aucun cours récent</p>
                        <p className="text-sm">Commencez votre première formation !</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Level Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-accent-500" />
                    <span>Niveau Actuel</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-accent-500 mb-1">
                      Niveau {analytics?.level || 1}
                    </div>
                    <div className="text-sm text-gray-600">Expert IA Éthique</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progression</span>
                      <span>{analytics?.totalXP || 0} / {(analytics?.level || 1) * 1000} XP</span>
                    </div>
                    <Progress value={64} className="h-3" />
                    <div className="text-xs text-gray-500 text-center">
                      153 XP jusqu'au niveau suivant
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-accent-500" />
                    <span>Réalisations</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => {
                      const Icon = achievement.icon;
                      return (
                        <div 
                          key={index}
                          className={`flex items-start space-x-3 p-3 rounded-lg ${
                            achievement.earned ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            achievement.earned ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-400'
                          }`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className={`font-medium text-sm ${
                              achievement.earned ? 'text-green-900' : 'text-gray-900'
                            }`}>
                              {achievement.title}
                            </h4>
                            <p className="text-xs text-gray-600 mb-1">
                              {achievement.description}
                            </p>
                            {achievement.earned ? (
                              <p className="text-xs text-green-600">
                                Obtenu le {achievement.date}
                              </p>
                            ) : achievement.progress !== undefined ? (
                              <div className="space-y-1">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs text-gray-600">Progression</span>
                                  <span className="text-xs">{achievement.progress}%</span>
                                </div>
                                <Progress value={achievement.progress} className="h-1" />
                              </div>
                            ) : (
                              <p className="text-xs text-gray-500">Non obtenu</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Impact Global */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-green-600" />
                    <span>Impact Global</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">1,245 kg</div>
                      <div className="text-sm text-gray-600">CO₂ évité</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent-500 mb-1">18</div>
                      <div className="text-sm text-gray-600">Projets IA éthiques soutenus</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary-600 mb-1">342</div>
                      <div className="text-sm text-gray-600">Apprenants inspirés</div>
                    </div>
                    
                    <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Voir détail impact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CED Bank Access Section */}
          <div className="mt-8">
            <Card className="border-2 border-green-500 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-800">CED Bank International</h3>
                    <p className="text-sm text-green-600">Banque digitale islamique - Accès immédiat après validation</p>
                  </div>
                  <div className="ml-auto">
                    <Badge className="bg-green-500 text-white">Dossier Approuvé</Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg border border-green-200">
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Interface Web Banking</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Comptes multi-devises CHF/AED, cartes virtuelles/physiques
                    </p>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700" 
                      onClick={() => window.location.href = '/banque'}
                    >
                      Ouvrir CED Bank
                    </Button>
                  </div>
                  
                  <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <Download className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Application Mobile</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      App iOS/Android avec mode prière et boussole Qibla
                    </p>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700" 
                      onClick={() => window.location.href = '/app-bancaire'}
                    >
                      Télécharger l'App
                    </Button>
                  </div>
                  
                  <div className="text-center p-4 bg-white rounded-lg border border-purple-200">
                    <div className="w-16 h-16 mx-auto mb-4 bg-purple-500 rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Programme Parrainage</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Récompenses exclusives pour ambassadeurs CED
                    </p>
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700" 
                      onClick={() => window.location.href = '/parrainage'}
                    >
                      Devenir Ambassadeur
                    </Button>
                  </div>
                </div>

                <div className="mt-6 bg-green-100 rounded-lg p-4 border border-green-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">YY</span>
                      </div>
                      <div>
                        <p className="font-bold text-green-800">Statut de validation</p>
                        <p className="text-xs text-green-600">Approuvé par Yakoubi Yamina - Direction</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500 text-white">Accès Autorisé</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-green-700">0%</div>
                      <div className="text-green-600">Taux d'intérêt</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-green-700">Halal</div>
                      <div className="text-green-600">Finance islamique</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-green-700">5x/jour</div>
                      <div className="text-green-600">Mode prière auto</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-green-700">GPS</div>
                      <div className="text-green-600">Qibla Mecca</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Actions Rapides</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-20 flex-col space-y-2">
                    <BookOpen className="h-6 w-6" />
                    <span className="text-sm">Nouveaux Cours</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2">
                    <Download className="h-6 w-6" />
                    <span className="text-sm">Télécharger Certificats</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2">
                    <Calendar className="h-6 w-6" />
                    <span className="text-sm">Planifier Session</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2">
                    <Users className="h-6 w-6" />
                    <span className="text-sm">Rejoindre Communauté</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
      <VoiceAssistant />
    </div>
  );
}
