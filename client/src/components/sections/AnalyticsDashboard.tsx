import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Trophy, TrendingUp, Globe } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export function AnalyticsDashboard() {
  const { isAuthenticated } = useAuth();
  
  const { data: userAnalytics } = useQuery({
    queryKey: ['/api/analytics/user'],
    enabled: isAuthenticated,
  });

  const skills = [
    { name: 'IA Responsable', progress: 85, color: 'bg-primary-500' },
    { name: 'Programmation', progress: 72, color: 'bg-secondary-500' },
    { name: 'Éthique Tech', progress: 91, color: 'bg-accent-500' },
    { name: 'Économie Circulaire', progress: 67, color: 'bg-green-500' },
  ];

  if (!isAuthenticated) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Analytics & Progression</h2>
            <p className="text-xl text-gray-300 mb-8">
              Connectez-vous pour voir votre dashboard de progression personnalisé
            </p>
            <a href="/api/login">
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                Se connecter pour voir ses stats
              </Button>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Analytics & Progression</h2>
          <p className="text-xl text-gray-300">
            Suivez vos progrès avec notre dashboard avancé de niveau Coursera
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Learning Progress */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-semibold text-white">Progression XP</CardTitle>
              <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
                <Trophy className="text-white h-5 w-5" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">
                    Niveau {userAnalytics?.user?.level || 7} - Expert IA Éthique
                  </span>
                  <span className="text-sm font-medium text-white">
                    {userAnalytics?.user?.xpPoints || 2847} XP
                  </span>
                </div>
                <Progress 
                  value={64} 
                  className="h-3 bg-gray-700" 
                />
                <div className="text-xs text-gray-400 mt-1">153 XP jusqu'au niveau suivant</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Cours complétés</span>
                  <span className="font-semibold text-primary-400">
                    {userAnalytics?.completedCourses || 24}/{userAnalytics?.totalCourses || 32}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Certifications obtenues</span>
                  <span className="font-semibold text-accent-400">
                    {userAnalytics?.user?.certifications || 3}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Temps d'apprentissage</span>
                  <span className="font-semibold text-secondary-400">
                    {userAnalytics?.user?.learningHours || 127}h
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Skills Radar */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-semibold text-white">Compétences</CardTitle>
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-white h-5 w-5" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-primary-400">{skill.progress}%</span>
                    </div>
                    <Progress 
                      value={skill.progress} 
                      className="h-2 bg-gray-700"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Global Impact */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-semibold text-white">Impact Global</CardTitle>
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <Globe className="text-white h-5 w-5" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">1,245 kg</div>
                  <div className="text-sm text-gray-300">CO₂ évité grâce à vos actions</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-400 mb-1">18</div>
                  <div className="text-sm text-gray-300">Projets IA éthiques soutenus</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-400 mb-1">342</div>
                  <div className="text-sm text-gray-300">Apprenants inspirés</div>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white">
                Voir mon impact détaillé
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
