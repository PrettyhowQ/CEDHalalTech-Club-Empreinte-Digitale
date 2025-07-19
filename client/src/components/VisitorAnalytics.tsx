import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Users, Globe, Monitor, Shield, TrendingUp, Eye, Calendar, Clock } from 'lucide-react';

interface VisitorStats {
  totalVisitors: number;
  todayVisitors: number;
  weeklyVisitors: number;
  topCountries: { country: string; count: number }[];
  topPages: { page: string; count: number }[];
  deviceStats: { device: string; count: number }[];
  accessLevelStats: { level: string; count: number }[];
}

interface Visitor {
  id: number;
  sessionId: string;
  ipAddress: string | null;
  userAgent: string | null;
  country: string | null;
  city: string | null;
  deviceType: string | null;
  browser: string | null;
  operatingSystem: string | null;
  currentPage: string | null;
  referrer: string | null;
  accessLevel: string | null;
  firstSeen: string;
  lastSeen: string;
}

const VisitorAnalytics = () => {
  const { data: stats, isLoading: statsLoading } = useQuery<VisitorStats>({
    queryKey: ['/api/visitor-stats'],
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  const { data: visitors, isLoading: visitorsLoading } = useQuery<Visitor[]>({
    queryKey: ['/api/visitors'],
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  if (statsLoading || visitorsLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-gray-300 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="text-center p-8">
        <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">Impossible de charger les statistiques des visiteurs</p>
      </div>
    );
  }

  const getAccessLevelColor = (level: string) => {
    switch (level) {
      case 'director': return 'bg-purple-500 text-white';
      case 'family': return 'bg-blue-500 text-white';
      case 'authorized': return 'bg-green-500 text-white';
      case 'guest': return 'bg-gray-500 text-white';
      default: return 'bg-gray-400 text-white';
    }
  };

  const getAccessLevelLabel = (level: string) => {
    switch (level) {
      case 'director': return 'Direction';
      case 'family': return 'Famille';
      case 'authorized': return 'Autorisé';
      case 'guest': return 'Invité';
      default: return level;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          📊 Analytics des Visiteurs CED
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Statistiques détaillées de fréquentation de l'écosystème HalalTech™
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Visiteurs</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">{stats.totalVisitors}</div>
            <p className="text-xs text-muted-foreground">Depuis le lancement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aujourd'hui</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.todayVisitors}</div>
            <p className="text-xs text-muted-foreground">Visiteurs uniques</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cette Semaine</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{stats.weeklyVisitors}</div>
            <p className="text-xs text-muted-foreground">7 derniers jours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taux Activité</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">
              {stats.totalVisitors > 0 ? Math.round((stats.weeklyVisitors / stats.totalVisitors) * 100) : 0}%
            </div>
            <p className="text-xs text-muted-foreground">Visiteurs actifs</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Access Levels */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Niveaux d'Accès
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {stats.accessLevelStats.map((level, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge className={getAccessLevelColor(level.level)}>
                      {getAccessLevelLabel(level.level)}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{level.count}</span>
                    <Progress 
                      value={stats.totalVisitors > 0 ? (level.count / stats.totalVisitors) * 100 : 0} 
                      className="w-20" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Countries */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Pays des Visiteurs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {stats.topCountries.slice(0, 5).map((country, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    {country.country === 'Unknown' ? '🌍 Inconnu' : `🏳️ ${country.country}`}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{country.count}</span>
                    <Progress 
                      value={stats.totalVisitors > 0 ? (country.count / stats.totalVisitors) * 100 : 0} 
                      className="w-20" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Device Types */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Monitor className="h-5 w-5" />
              Types d'Appareils
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {stats.deviceStats.map((device, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    {device.device === 'desktop' ? '💻 Desktop' :
                     device.device === 'mobile' ? '📱 Mobile' :
                     device.device === 'tablet' ? '📱 Tablette' :
                     `🔧 ${device.device}`}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{device.count}</span>
                    <Progress 
                      value={stats.totalVisitors > 0 ? (device.count / stats.totalVisitors) * 100 : 0} 
                      className="w-20" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Pages Populaires
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {stats.topPages.slice(0, 5).map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium truncate">
                    {page.page === '/' ? '🏠 Accueil' : `📄 ${page.page}`}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{page.count}</span>
                    <Progress 
                      value={stats.totalVisitors > 0 ? (page.count / stats.totalVisitors) * 100 : 0} 
                      className="w-20" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Visitors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Visiteurs Récents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {visitors?.slice(0, 10).map((visitor, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Badge className={getAccessLevelColor(visitor.accessLevel || 'guest')}>
                    {getAccessLevelLabel(visitor.accessLevel || 'guest')}
                  </Badge>
                  <div>
                    <p className="text-sm font-medium">
                      {visitor.country ? `🏳️ ${visitor.country}` : '🌍 Pays inconnu'}
                      {visitor.city && ` - ${visitor.city}`}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {visitor.deviceType && `📱 ${visitor.deviceType}`}
                      {visitor.browser && ` • ${visitor.browser}`}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">
                    {visitor.currentPage === '/' ? '🏠 Accueil' : visitor.currentPage || 'Page inconnue'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(visitor.firstSeen).toLocaleString('fr-FR')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VisitorAnalytics;