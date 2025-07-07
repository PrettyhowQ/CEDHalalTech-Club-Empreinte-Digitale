import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Users, Globe, Heart, TrendingUp, Award, MapPin, Calendar, Target } from 'lucide-react';

const CommunityImpactVisualizationDashboard = () => {
  const [selectedRegion, setSelectedRegion] = useState('global');
  const [timeFrame, setTimeFrame] = useState('monthly');
  const [impactCategory, setImpactCategory] = useState('all');

  // Données d'impact communautaire
  const globalImpactData = {
    totalMembers: 847592,
    activeMosques: 2847,
    countriesReached: 67,
    charitableActions: 294756,
    knowledgeShared: 156834,
    prayersSupported: 1847293,
    familiesHelped: 48572,
    youthEducated: 89456
  };

  const regionalData = {
    global: {
      name: "Impact Mondial",
      members: 847592,
      growth: "+23.4%",
      primaryActions: [
        { action: "Prières collectives organisées", count: 15847, icon: "🕌" },
        { action: "Cours islamiques dispensés", count: 8924, icon: "📚" },
        { action: "Familles aidées financièrement", count: 4856, icon: "🤝" },
        { action: "Jeunes formés aux valeurs", count: 12847, icon: "👥" }
      ]
    },
    maghreb: {
      name: "Maghreb & Afrique du Nord",
      members: 234567,
      growth: "+19.8%",
      primaryActions: [
        { action: "Iftar communautaires Ramadan", count: 2847, icon: "🌙" },
        { action: "Écoles coraniques soutenues", count: 456, icon: "📖" },
        { action: "Puits construits (Sadaqah Jariyah)", count: 23, icon: "💧" },
        { action: "Orphelins parrainés", count: 789, icon: "👶" }
      ]
    },
    golfe: {
      name: "Pays du Golfe",
      members: 189234,
      growth: "+31.2%",
      primaryActions: [
        { action: "Programmes Hajj facilités", count: 1234, icon: "🕋" },
        { action: "Centres islamiques financés", count: 89, icon: "🏛️" },
        { action: "Bourses étudiants islamiques", count: 567, icon: "🎓" },
        { action: "Technologies halal développées", count: 234, icon: "💻" }
      ]
    },
    europe: {
      name: "Europe & Amérique",
      members: 156789,
      growth: "+27.6%",
      primaryActions: [
        { action: "Centres culturels islamiques", count: 67, icon: "🏢" },
        { action: "Programmes intégration", count: 234, icon: "🤲" },
        { action: "Cours langue arabe", count: 456, icon: "📝" },
        { action: "Événements interreligieux", count: 123, icon: "🕊️" }
      ]
    },
    asie: {
      name: "Asie & Océanie",
      members: 267002,
      growth: "+25.1%",
      primaryActions: [
        { action: "Mosquées restaurées", count: 145, icon: "🕌" },
        { action: "Programmes micro-finance halal", count: 2345, icon: "💰" },
        { action: "Formations commerce éthique", count: 678, icon: "📊" },
        { action: "Réseaux solidaires créés", count: 234, icon: "🔗" }
      ]
    }
  };

  const impactCategories = [
    {
      id: 'education',
      title: 'Éducation Islamique',
      icon: <Award className="w-6 h-6" />,
      color: 'bg-blue-500',
      metrics: {
        coursesCompleted: 45789,
        studentsGraduated: 12456,
        scholarsCertified: 234,
        knowledgeHours: 234567
      }
    },
    {
      id: 'charity',
      title: 'Action Caritative',
      icon: <Heart className="w-6 h-6" />,
      color: 'bg-green-500',
      metrics: {
        zakatDistributed: '2.4M CHF',
        familiesSupported: 8924,
        emergencyAid: 156,
        sustainableProjects: 67
      }
    },
    {
      id: 'community',
      title: 'Renforcement Communautaire',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-purple-500',
      metrics: {
        eventsOrganized: 1247,
        volunteersActive: 5678,
        partnershipsFormed: 234,
        communitiesUnited: 89
      }
    },
    {
      id: 'spiritual',
      title: 'Développement Spirituel',
      icon: <Target className="w-6 h-6" />,
      color: 'bg-orange-500',
      metrics: {
        prayersSupported: 1847293,
        dhikrSessions: 45678,
        quranStudyGroups: 567,
        spiritualMentoring: 1234
      }
    }
  ];

  const currentRegion = regionalData[selectedRegion as keyof typeof regionalData];

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            📊 Community Impact Visualization Dashboard
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Visualisez l'impact réel de notre communauté musulmane mondiale
          </p>
          <p className="text-sm text-gray-500">
            "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ" - "Entraidez-vous dans l'accomplissement des bonnes œuvres"
          </p>
        </div>

        {/* Global Impact Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg">
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">{formatNumber(globalImpactData.totalMembers)}</div>
              <div className="text-sm opacity-90">Membres Actifs</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg">
            <CardContent className="p-4 text-center">
              <Globe className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">{globalImpactData.countriesReached}</div>
              <div className="text-sm opacity-90">Pays Touchés</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-lg">
            <CardContent className="p-4 text-center">
              <Heart className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">{formatNumber(globalImpactData.charitableActions)}</div>
              <div className="text-sm opacity-90">Actions Caritatives</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">{formatNumber(globalImpactData.knowledgeShared)}</div>
              <div className="text-sm opacity-90">Savoirs Partagés</div>
            </CardContent>
          </Card>
        </div>

        {/* Regional Selector */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {Object.entries(regionalData).map(([key, region]) => (
            <Button
              key={key}
              variant={selectedRegion === key ? "default" : "outline"}
              onClick={() => setSelectedRegion(key)}
              className={selectedRegion === key ? 'bg-blue-600 text-white' : ''}
            >
              <MapPin className="w-4 h-4 mr-2" />
              {region.name}
            </Button>
          ))}
        </div>

        {/* Regional Impact Details */}
        <Card className="mb-8 bg-white shadow-lg border-2 border-blue-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl text-blue-700 flex items-center gap-2">
                <Globe className="w-6 h-6" />
                Impact Régional: {currentRegion.name}
              </CardTitle>
              <Badge className="bg-green-100 text-green-800 text-lg px-3 py-1">
                {currentRegion.growth} croissance
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentRegion.primaryActions.map((action, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-4xl mb-3">{action.icon}</div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {formatNumber(action.count)}
                  </div>
                  <div className="text-sm text-gray-600">{action.action}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <div className="text-lg text-blue-700 font-semibold mb-2">
                {formatNumber(currentRegion.members)} membres engagés dans cette région
              </div>
              <Progress value={75} className="h-3 max-w-md mx-auto" />
              <p className="text-sm text-gray-600 mt-2">Objectif annuel: 75% atteint</p>
            </div>
          </CardContent>
        </Card>

        {/* Impact Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {impactCategories.map((category) => (
            <Card key={category.id} className="shadow-lg border-2 border-gray-200 hover:border-blue-300 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(category.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-xl font-bold text-gray-800 mb-1">
                        {typeof value === 'string' ? value : formatNumber(value as number)}
                      </div>
                      <div className="text-xs text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Monthly Timeline */}
        <Card className="mb-8 bg-white shadow-lg border-2 border-indigo-200">
          <CardHeader>
            <CardTitle className="text-2xl text-indigo-700 flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              Évolution Mensuelle de l'Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">📈</div>
                <div className="text-2xl font-bold text-green-600 mb-1">+23.4%</div>
                <div className="text-sm text-gray-600">Croissance Membres</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-2xl font-bold text-blue-600 mb-1">94.7%</div>
                <div className="text-sm text-gray-600">Objectifs Atteints</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-2xl font-bold text-purple-600 mb-1">4.9/5</div>
                <div className="text-sm text-gray-600">Satisfaction Communauté</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Stories */}
        <Card className="mb-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Award className="w-6 h-6" />
              Histoires de Réussite Marquantes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl mb-2">🏥</div>
                <h4 className="font-bold mb-2">Hôpital Islamique - Maroc</h4>
                <p className="text-sm opacity-90">
                  Construction complète financée par la communauté CED - 50,000 patients traités
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl mb-2">🎓</div>
                <h4 className="font-bold mb-2">Institut Islamic Sciences - Dubai</h4>
                <p className="text-sm opacity-90">
                  Formation de 1,200+ scholars certifiés selon méthodologie authentique
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl mb-2">💧</div>
                <h4 className="font-bold mb-2">Projet Eau Pure - Afrique</h4>
                <p className="text-sm opacity-90">
                  67 puits forés offrant eau potable à 25,000+ personnes (Sadaqah Jariyah)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Future Goals */}
        <Card className="bg-white shadow-lg border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-700 flex items-center gap-2">
              <Target className="w-6 h-6" />
              Objectifs 2025 - Vision d'Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">1M+</div>
                <div className="text-sm text-gray-600">Membres Communauté</div>
                <Progress value={85} className="mt-2 h-2" />
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">100</div>
                <div className="text-sm text-gray-600">Pays Présence</div>
                <Progress value={67} className="mt-2 h-2" />
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">500K</div>
                <div className="text-sm text-gray-600">Actions Caritatives/An</div>
                <Progress value={59} className="mt-2 h-2" />
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-2">10M CHF</div>
                <div className="text-sm text-gray-600">Fonds Solidarité</div>
                <Progress value={24} className="mt-2 h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>© 2025 Club Empreinte Digitale - Yakoubi Yamina | CED HalalTech™</p>
          <p>Community Impact Visualization Dashboard - 100% Conforme Coran & Sunna</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityImpactVisualizationDashboard;