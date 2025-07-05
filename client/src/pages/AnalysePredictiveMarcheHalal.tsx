import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, TrendingDown, Target, Globe, BarChart3, PieChart, Activity, Zap, DollarSign, Users } from "lucide-react";

interface MarketPrediction {
  secteur: string;
  valeurActuelle: number;
  predictionQ2: number;
  predictionQ4: number;
  prediction2026: number;
  croissance: number;
  confiance: number;
  facteurs: string[];
  risques: string[];
}

interface RegionAnalysis {
  region: string;
  population: string;
  pib: string;
  croissanceFintech: number;
  opportunites: number;
  maturite: 'Émergent' | 'Croissance' | 'Mature';
  couleur: string;
}

export default function AnalysePredictiveMarcheHalal() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('2025');
  const [selectedRegion, setSelectedRegion] = useState('global');
  const [livePredictions, setLivePredictions] = useState(new Date());

  // Simulation mise à jour temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      setLivePredictions(new Date());
    }, 30000); // Mise à jour toutes les 30 secondes
    return () => clearInterval(interval);
  }, []);

  const predictionsMarche: MarketPrediction[] = [
    {
      secteur: "Islamic Fintech",
      valeurActuelle: 128.7,
      predictionQ2: 142.3,
      predictionQ4: 156.8,
      prediction2026: 187.9,
      croissance: 21.4,
      confiance: 94.2,
      facteurs: [
        "Adoption mobile croissante",
        "Réglementation favorable GCC",
        "Demande produits Sharia-compliant",
        "Innovation blockchain halal"
      ],
      risques: [
        "Volatilité cryptos",
        "Concurrence traditionnelle",
        "Complexité réglementaire"
      ]
    },
    {
      secteur: "Halal E-commerce",
      valeurActuelle: 89.3,
      predictionQ2: 98.7,
      predictionQ4: 108.2,
      prediction2026: 134.5,
      croissance: 18.7,
      confiance: 87.5,
      facteurs: [
        "Certification automatisée",
        "Livraison dernière mile",
        "Marketplace intégrée",
        "Trust & Transparency"
      ],
      risques: [
        "Concurrence Amazon/Ali",
        "Coûts logistiques",
        "Vérification halal"
      ]
    },
    {
      secteur: "Islamic EdTech",
      valeurActuelle: 45.2,
      predictionQ2: 52.8,
      predictionQ4: 61.3,
      prediction2026: 89.7,
      croissance: 25.8,
      confiance: 91.3,
      facteurs: [
        "Demande formation Fiqh",
        "IA éducative avancée",
        "Gamification apprentissage",
        "Certifications reconnues"
      ],
      risques: [
        "Barrière linguistique",
        "Accès internet rural",
        "Validation scholars"
      ]
    },
    {
      secteur: "Halal Healthcare Tech",
      valeurActuelle: 23.1,
      predictionQ2: 27.4,
      predictionQ4: 32.8,
      prediction2026: 52.3,
      croissance: 31.2,
      confiance: 82.7,
      facteurs: [
        "Télémédecine conforme",
        "IA diagnostic éthique",
        "Médecine prophétique",
        "Apps santé familiale"
      ],
      risques: [
        "Réglementation médicale",
        "Privacy concerns",
        "Intégration systèmes"
      ]
    },
    {
      secteur: "Islamic PropTech",
      valeurActuelle: 34.6,
      predictionQ2: 38.9,
      predictionQ4: 43.7,
      prediction2026: 61.2,
      croissance: 19.3,
      confiance: 78.9,
      facteurs: [
        "Financement Murabaha",
        "Smart contracts immobilier",
        "Orientation Qibla tech",
        "Communautés musulmanes"
      ],
      risques: [
        "Cycles immobiliers",
        "Réglementation foncière",
        "Coûts construction"
      ]
    }
  ];

  const analysesRegionales: RegionAnalysis[] = [
    {
      region: "GCC (Golfe)",
      population: "57.4M",
      pib: "$2.1T",
      croissanceFintech: 28.5,
      opportunites: 95,
      maturite: 'Mature',
      couleur: 'green'
    },
    {
      region: "ASEAN (Asie SE)",
      population: "280M musulmans",
      pib: "$3.7T",
      croissanceFintech: 35.2,
      opportunites: 92,
      maturite: 'Croissance',
      couleur: 'blue'
    },
    {
      region: "MENA (Moyen-Orient)",
      population: "421M",
      pib: "$3.8T",
      croissanceFintech: 22.7,
      opportunites: 78,
      maturite: 'Croissance',
      couleur: 'orange'
    },
    {
      region: "Europe Musulmane",
      population: "44M",
      pib: "$1.2T",
      croissanceFintech: 15.8,
      opportunites: 71,
      maturite: 'Émergent',
      couleur: 'purple'
    },
    {
      region: "Afrique Sub-Saharienne",
      population: "248M musulmans",
      pib: "$1.9T",
      croissanceFintech: 42.1,
      opportunites: 89,
      maturite: 'Émergent',
      couleur: 'cyan'
    }
  ];

  const opportunitesInvestissement = [
    {
      titre: "IA Islamique & Machine Learning",
      potentiel: "$12.4B d'ici 2026",
      roi: "340%",
      timeframe: "18-24 mois",
      niveau: "Révolutionnaire",
      couleur: "bg-green-500"
    },
    {
      titre: "Blockchain Halal & DeFi",
      potentiel: "$8.7B d'ici 2026", 
      roi: "285%",
      timeframe: "12-18 mois",
      niveau: "Disruptif",
      couleur: "bg-blue-500"
    },
    {
      titre: "Super Apps Islamiques",
      potentiel: "$15.2B d'ici 2026",
      roi: "425%",
      timeframe: "24-36 mois",
      niveau: "Transformationnel",
      couleur: "bg-purple-500"
    },
    {
      titre: "IoT & Smart Mosques",
      potentiel: "$4.3B d'ici 2026",
      roi: "195%",
      timeframe: "18-30 mois",
      niveau: "Innovant",
      couleur: "bg-orange-500"
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 75) return "text-blue-600";
    if (score >= 60) return "text-orange-600";
    return "text-red-600";
  };

  const getMaturiteColor = (maturite: string) => {
    switch (maturite) {
      case 'Mature': return "bg-green-100 text-green-800";
      case 'Croissance': return "bg-blue-100 text-blue-800";
      case 'Émergent': return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🔮 Analyse Prédictive du Marché Halal
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Intelligence artificielle prédictive • Tendances marché islamique • ROI optimisé
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Badge className="bg-green-100 text-green-800 px-4 py-2">
              <Activity className="h-4 w-4 mr-2" />
              LIVE • {livePredictions.toLocaleTimeString('fr-FR')}
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
              <Target className="h-4 w-4 mr-2" />
              IA Prédictive Avancée
            </Badge>
          </div>
        </div>

        {/* Contrôles de filtrage */}
        <div className="flex justify-center gap-4 mb-8">
          <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025">Projections 2025</SelectItem>
              <SelectItem value="2026">Projections 2026</SelectItem>
              <SelectItem value="2027">Projections 2027</SelectItem>
              <SelectItem value="longterm">Long Terme (2030)</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="global">🌍 Analyse Globale</SelectItem>
              <SelectItem value="gcc">🇸🇦 GCC (Golfe)</SelectItem>
              <SelectItem value="asean">🇲🇾 ASEAN</SelectItem>
              <SelectItem value="mena">🇹🇷 MENA</SelectItem>
              <SelectItem value="europe">🇫🇷 Europe</SelectItem>
              <SelectItem value="africa">🇳🇬 Afrique</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Prédictions sectorielles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {predictionsMarche.map((prediction, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-indigo-200">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg">{prediction.secteur}</span>
                  <Badge className="bg-indigo-100 text-indigo-800">
                    +{prediction.croissance}%
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                
                {/* Valeurs prédictives */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Actuel:</span>
                    <span className="font-bold text-gray-900">${prediction.valeurActuelle}B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Q4 2025:</span>
                    <span className="font-bold text-blue-600">${prediction.predictionQ4}B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">2026:</span>
                    <span className="font-bold text-green-600">${prediction.prediction2026}B</span>
                  </div>
                </div>

                {/* Niveau de confiance */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Confiance IA:</span>
                    <span className={`font-bold ${getScoreColor(prediction.confiance)}`}>
                      {prediction.confiance}%
                    </span>
                  </div>
                  <Progress value={prediction.confiance} className="h-2" />
                </div>

                {/* Facteurs clés */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-green-700">Facteurs positifs:</h4>
                  <ul className="space-y-1">
                    {prediction.facteurs.slice(0, 2).map((facteur, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-center gap-1">
                        <TrendingUp className="h-3 w-3 text-green-500" />
                        {facteur}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Risques */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-red-700">Risques identifiés:</h4>
                  <ul className="space-y-1">
                    {prediction.risques.slice(0, 2).map((risque, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-center gap-1">
                        <TrendingDown className="h-3 w-3 text-red-500" />
                        {risque}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Analyses régionales */}
        <Card className="mb-8 border-2 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Globe className="h-6 w-6 text-purple-600" />
              Analyses Régionales - Opportunités Marché
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {analysesRegionales.map((region, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">{region.region}</h3>
                        <Badge className={getMaturiteColor(region.maturite)}>
                          {region.maturite}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Population:</span>
                          <span className="font-medium">{region.population}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">PIB:</span>
                          <span className="font-medium">{region.pib}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Croissance Fintech:</span>
                          <span className="font-medium text-green-600">+{region.croissanceFintech}%</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Score Opportunités:</span>
                          <span className={`font-bold ${getScoreColor(region.opportunites)}`}>
                            {region.opportunites}/100
                          </span>
                        </div>
                        <Progress value={region.opportunites} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Opportunités d'investissement */}
        <Card className="mb-8 border-2 border-pink-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <DollarSign className="h-6 w-6 text-pink-600" />
              Opportunités d'Investissement Prioritaires
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {opportunitesInvestissement.map((opportunite, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className={`w-3 h-3 rounded-full ${opportunite.couleur} mt-2 animate-pulse`}></div>
                      <div className="flex-1 mx-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-lg text-gray-900">
                            {opportunite.titre}
                          </h3>
                          <Badge className="bg-pink-100 text-pink-800">
                            {opportunite.niveau}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                          <div className="text-center p-3 bg-green-50 rounded-lg">
                            <p className="text-2xl font-bold text-green-600">{opportunite.potentiel}</p>
                            <p className="text-sm text-gray-600">Potentiel Marché</p>
                          </div>
                          <div className="text-center p-3 bg-blue-50 rounded-lg">
                            <p className="text-2xl font-bold text-blue-600">{opportunite.roi}</p>
                            <p className="text-sm text-gray-600">ROI Projeté</p>
                          </div>
                          <div className="text-center p-3 bg-purple-50 rounded-lg">
                            <p className="text-2xl font-bold text-purple-600">{opportunite.timeframe}</p>
                            <p className="text-sm text-gray-600">Délai ROI</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Position CED dans les prédictions */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800 flex items-center gap-3">
              <Zap className="h-6 w-6" />
              Position CED HalalTech™ dans les Prédictions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white rounded-lg">
                <h3 className="text-3xl font-bold text-green-600">$2.8B</h3>
                <p className="text-sm text-gray-600">Valuation Prédite 2026</p>
                <p className="text-xs text-green-500">Croissance 560%</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <h3 className="text-3xl font-bold text-blue-600">50M+</h3>
                <p className="text-sm text-gray-600">Utilisateurs Projetés</p>
                <p className="text-xs text-blue-500">7x croissance actuelle</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <h3 className="text-3xl font-bold text-purple-600">15+</h3>
                <p className="text-sm text-gray-600">Nouveaux Marchés</p>
                <p className="text-xs text-purple-500">Expansion internationale</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <h3 className="text-3xl font-bold text-orange-600">97.2%</h3>
                <p className="text-sm text-gray-600">Confiance IA</p>
                <p className="text-xs text-orange-500">Leadership maintenu</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-green-100 rounded-lg">
              <p className="text-green-800 font-medium text-center">
                🎯 <strong>Prédiction IA :</strong> CED HalalTech™ consolidera sa position de leader mondial 
                avec une croissance exponentielle dans tous les segments analysés d'ici 2026
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}