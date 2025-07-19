import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Activity, TrendingUp, Users, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function AdminAnalyticsButton() {
  // Vérifier si l'utilisateur a accès admin/direction
  const isDirector = typeof window !== 'undefined' && (
    window.location.search.includes('director=yakoubi') || 
    window.location.search.includes('admin=yamina') ||
    window.location.hostname === 'localhost'
  );

  if (!isDirector) {
    return null;
  }

  return (
    <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-2xl">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-6 w-6" />
            <CardTitle className="text-lg font-bold">Analytics Visiteurs</CardTitle>
          </div>
          <Badge className="bg-white text-purple-600 font-bold">
            DIRECTION
          </Badge>
        </div>
        <CardDescription className="text-white/80">
          Dashboard statistiques temps réel - Accès exclusif Direction Yakoubi Yamina
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-white/20 rounded-lg p-2 flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span className="text-sm font-medium">Visiteurs</span>
          </div>
          <div className="bg-white/20 rounded-lg p-2 flex items-center space-x-2">
            <Eye className="h-4 w-4" />
            <span className="text-sm font-medium">Pages vues</span>
          </div>
          <div className="bg-white/20 rounded-lg p-2 flex items-center space-x-2">
            <Activity className="h-4 w-4" />
            <span className="text-sm font-medium">Temps réel</span>
          </div>
        </div>
        
        <Link href="/visitor-analytics">
          <Button className="bg-white text-purple-600 hover:bg-gray-100 font-bold w-full text-base py-3">
            <TrendingUp className="mr-2 h-5 w-5" />
            📊 Accéder aux Analytics Complètes
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}