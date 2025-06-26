import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  BookOpen, 
  Sparkles, 
  Star,
  ArrowRight,
  Zap,
  Award
} from 'lucide-react';
import { Link } from 'wouter';

export function FeaturedToolsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            Outils Vedettes
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Générateur IA & Guide Fiqh
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos outils phares : le générateur de formations IA le plus avancé 
            et le guide Fiqh informatique le plus complet au monde
          </p>
        </div>

        {/* Featured Tools Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Générateur de Formations IA */}
          <Card className="relative overflow-hidden border-2 border-pink-200 hover:border-pink-300 transition-all duration-300 hover:shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-pink-100 opacity-50"></div>
            <CardHeader className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 bg-pink-600 rounded-full">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <Badge className="bg-pink-600 text-white">
                  <Star className="h-3 w-3 mr-1" />
                  Nouveau
                </Badge>
              </div>
              <CardTitle className="text-2xl text-gray-900 mb-2">
                Générateur Formations IA
              </CardTitle>
              <p className="text-gray-600">
                Créez des formations personnalisées en quelques clics avec notre IA avancée. 
                Supports visuels, quizz, certifications automatiques.
              </p>
            </CardHeader>
            <CardContent className="relative">
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-pink-600" />
                  <span className="text-sm">Génération automatique en 78 langues</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-pink-600" />
                  <span className="text-sm">Certifications reconnues internationalement</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-pink-600" />
                  <span className="text-sm">IA Super IARP Pro intégrée</span>
                </div>
              </div>
              
              <Link href="/generateurs-ia">
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white group-hover:scale-105 transition-transform">
                  Essayer maintenant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Guide Fiqh Informatique */}
          <Card className="relative overflow-hidden border-2 border-indigo-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-indigo-100 opacity-50"></div>
            <CardHeader className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 bg-indigo-600 rounded-full">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <Badge className="bg-indigo-600 text-white">
                  <Star className="h-3 w-3 mr-1" />
                  Exclusif
                </Badge>
              </div>
              <CardTitle className="text-2xl text-gray-900 mb-2">
                Guide Fiqh Informatique
              </CardTitle>
              <p className="text-gray-600">
                Le guide le plus complet au monde avec 150+ règles halal pour la technologie. 
                Validé par 150+ scholars internationaux.
              </p>
            </CardHeader>
            <CardContent className="relative">
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-indigo-600" />
                  <span className="text-sm">150+ règles tech halal détaillées</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-indigo-600" />
                  <span className="text-sm">Validation 4 écoles juridiques sunnites</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-indigo-600" />
                  <span className="text-sm">Support scholars 24/7 disponible</span>
                </div>
              </div>
              
              <Link href="/fiqh-informatique-guide">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white group-hover:scale-105 transition-transform">
                  Consulter le guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">10K+</div>
              <div className="text-sm text-gray-600">Formations générées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">150+</div>
              <div className="text-sm text-gray-600">Règles Fiqh Tech</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">78</div>
              <div className="text-sm text-gray-600">Langues supportées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support scholars</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}