import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Activity, Globe, Star, Users, DollarSign, BarChart3, Zap, Shield } from "lucide-react";

interface TrendData {
  nom: string;
  valeur: number;
  evolution: number;
  couleur: string;
  icone: any;
  description: string;
  derniereMaj: string;
}

interface MarketData {
  segment: string;
  valeur: string;
  croissance: number;
  tendance: 'up' | 'down' | 'stable';
  regions: string[];
}

export default function TendancesTechHalalTempsReel() {
  const [tempsReel, setTempsReel] = useState(new Date());
  const [activeTab, setActiveTab] = useState('tendances');

  // Simulation mise à jour temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      setTempsReel(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const tendancesActuelles: TrendData[] = [
    {
      nom: "IA Éthique Islamique",
      valeur: 94.7,
      evolution: +12.3,
      couleur: "green",
      icone: Zap,
      description: "Super IARP Pro & assistants vocaux conformes",
      derniereMaj: "Il y a 2 min"
    },
    {
      nom: "Banking Digital Halal",
      valeur: 89.2,
      evolution: +8.7,
      couleur: "blue",
      icone: Shield,
      description: "CED Bank & solutions 0% Riba",
      derniereMaj: "Il y a 1 min"
    },
    {
      nom: "Blockchain Conforme Sharia",
      valeur: 76.8,
      evolution: +15.2,
      couleur: "purple",
      icone: BarChart3,
      description: "Smart contracts Murabaha & tokenisation",
      derniereMaj: "Il y a 3 min"
    },
    {
      nom: "E-Learning Islamique",
      valeur: 91.5,
      evolution: +6.9,
      couleur: "orange",
      icone: Users,
      description: "Plateformes éducatives & Fiqh informatique",
      derniereMaj: "Temps réel"
    },
    {
      nom: "Fintech Takaful",
      valeur: 68.3,
      evolution: +22.1,
      couleur: "cyan",
      icone: DollarSign,
      description: "Assurance islamique digitale",
      derniereMaj: "Il y a 5 min"
    }
  ];

  const donneesMarche: MarketData[] = [
    {
      segment: "Islamic Fintech Global",
      valeur: "$128.7B",
      croissance: 21.4,
      tendance: 'up',
      regions: ["GCC", "ASEAN", "MENA", "Europe"]
    },
    {
      segment: "Halal E-commerce",
      valeur: "$89.3B", 
      croissance: 18.7,
      tendance: 'up',
      regions: ["Malaisie", "Indonésie", "UAE", "Turquie"]
    },
    {
      segment: "Education Tech Islamique",
      valeur: "$45.2B",
      croissance: 25.8,
      tendance: 'up',
      regions: ["Arabie Saoudite", "Pakistan", "Bangladesh"]
    },
    {
      segment: "Crypto Halal",
      valeur: "$23.1B",
      croissance: 31.2,
      tendance: 'up',
      regions: ["UAE", "Bahreïn", "Malaisie"]
    }
  ];

  const innovationsRecentes = [
    {
      titre: "CED HalalTech™ lance Super IARP Pro",
      description: "IA multilingue 78 langues avec validation 150+ scholars",
      temps: "Il y a 2h",
      impact: "Révolutionnaire",
      couleur: "bg-green-500"
    },
    {
      titre: "Nouvelle réglementation DeFi UAE",
      description: "Cadre légal pour finance décentralisée islamique",
      temps: "Il y a 4h", 
      impact: "Majeur",
      couleur: "bg-blue-500"
    },
    {
      titre: "Partenariat Banque Islamique Malaisie",
      description: "Intégration blockchain dans banking traditionnel",
      temps: "Il y a 6h",
      impact: "Significatif", 
      couleur: "bg-purple-500"
    },
    {
      titre: "Expansion Takaful Digital Indonésie",
      description: "Couverture 50M+ musulmans via plateformes mobiles",
      temps: "Il y a 8h",
      impact: "Important",
      couleur: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Header avec temps réel */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📊 Tendances Technologiques Halal - Temps Réel
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Surveillance mondiale des innovations technologiques islamiques
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Badge className="bg-green-100 text-green-800 px-4 py-2">
              <Activity className="h-4 w-4 mr-2" />
              LIVE • {tempsReel.toLocaleTimeString('fr-FR')}
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
              <Globe className="h-4 w-4 mr-2" />
              67 Pays Surveillés
            </Badge>
          </div>
        </div>

        {/* Navigation onglets */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            <Button
              variant={activeTab === 'tendances' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('tendances')}
              className="mr-2"
            >
              📈 Tendances Live
            </Button>
            <Button
              variant={activeTab === 'marche' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('marche')}
              className="mr-2"
            >
              💰 Données Marché
            </Button>
            <Button
              variant={activeTab === 'innovations' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('innovations')}
            >
              🚀 Innovations
            </Button>
          </div>
        </div>

        {/* Contenu selon onglet actif */}
        {activeTab === 'tendances' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {tendancesActuelles.map((tendance, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <tendance.icone className={`h-5 w-5 text-${tendance.couleur}-600`} />
                      <span className="text-lg">{tendance.nom}</span>
                    </div>
                    <Badge className={`bg-${tendance.couleur}-100 text-${tendance.couleur}-800`}>
                      {tendance.evolution > 0 ? '+' : ''}{tendance.evolution}%
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900">
                        {tendance.valeur}%
                      </span>
                      {tendance.evolution > 0 ? (
                        <TrendingUp className="h-6 w-6 text-green-600" />
                      ) : (
                        <TrendingDown className="h-6 w-6 text-red-600" />
                      )}
                    </div>
                    
                    <Progress 
                      value={tendance.valeur} 
                      className="h-3"
                    />
                    
                    <p className="text-sm text-gray-600">
                      {tendance.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{tendance.derniereMaj}</span>
                      <Activity className="h-3 w-3 animate-pulse text-green-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'marche' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {donneesMarche.map((marche, index) => (
                <Card key={index} className="border-2 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{marche.segment}</span>
                      <Badge className="bg-blue-100 text-blue-800">
                        {marche.tendance === 'up' ? '📈' : marche.tendance === 'down' ? '📉' : '➡️'}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-blue-600">
                          {marche.valeur}
                        </span>
                        <span className="text-lg font-semibold text-green-600">
                          +{marche.croissance}%
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">Régions leaders :</p>
                        <div className="flex flex-wrap gap-1">
                          {marche.regions.map((region, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {region}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'innovations' && (
          <div className="space-y-4">
            {innovationsRecentes.map((innovation, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-3 h-3 rounded-full ${innovation.couleur} mt-2 animate-pulse`}></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-lg text-gray-900">
                          {innovation.titre}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{innovation.impact}</Badge>
                          <span className="text-sm text-gray-500">{innovation.temps}</span>
                        </div>
                      </div>
                      <p className="text-gray-600">
                        {innovation.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Section Position CED */}
        <Card className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800 flex items-center gap-3">
              <Star className="h-6 w-6" />
              Position CED HalalTech™ sur le Marché
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white rounded-lg">
                <h3 className="text-3xl font-bold text-green-600">#1</h3>
                <p className="text-sm text-gray-600">Leader Mondial</p>
                <p className="text-xs text-green-500">55 modules intégrés</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <h3 className="text-3xl font-bold text-blue-600">98/100</h3>
                <p className="text-sm text-gray-600">Score Innovation</p>
                <p className="text-xs text-blue-500">vs 70-78 concurrents</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <h3 className="text-3xl font-bold text-purple-600">27K+</h3>
                <p className="text-sm text-gray-600">Règles Fiqh</p>
                <p className="text-xs text-purple-500">Conformité totale</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <h3 className="text-3xl font-bold text-orange-600">150+</h3>
                <p className="text-sm text-gray-600">Scholars Validation</p>
                <p className="text-xs text-orange-500">Authentification religieuse</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-green-100 rounded-lg">
              <p className="text-green-800 font-medium">
                🎯 <strong>CED HalalTech™</strong> maintient une avance technologique de 3-5 ans 
                sur toute concurrence mondiale dans le secteur de la technologie islamique.
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}