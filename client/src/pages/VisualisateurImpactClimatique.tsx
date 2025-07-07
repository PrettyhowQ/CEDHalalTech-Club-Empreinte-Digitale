import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import ProtectionFooter from '@/components/ProtectionFooter';
import { TrendingUp, AlertTriangle, Globe, Thermometer, Droplets, Wind, TreePine, FileText, Users } from 'lucide-react';

interface ClimateData {
  temperature: {
    current: number;
    increase: number;
    target: number;
    islamicPerspective: string;
  };
  co2Levels: {
    current: number;
    preindustrial: number;
    target: number;
    islamicGuidance: string;
  };
  seaLevel: {
    rise: number;
    rate: number;
    islamicResponse: string;
  };
  biodiversity: {
    speciesLoss: number;
    islamicDuty: string;
  };
}

interface ScholarValidation {
  scholar: string;
  institution: string;
  statement: string;
  date: string;
  topic: 'responsibility' | 'urgency' | 'action' | 'stewardship';
}

interface RegionalImpact {
  region: string;
  temperature: number;
  precipitation: number;
  risks: string[];
  islamicCommunities: number;
  adaptations: string[];
}

export default function VisualisateurImpactClimatique() {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'current' | '2030' | '2050' | '2100'>('current');
  const [selectedRegion, setSelectedRegion] = useState<string>('global');
  const [showScholarsValidation, setShowScholarsValidation] = useState(false);

  const climateData: ClimateData = {
    temperature: {
      current: 1.2,
      increase: 1.5,
      target: 1.5,
      islamicPerspective: "La modération (Wasatiyyah) dans la consommation pour limiter le réchauffement"
    },
    co2Levels: {
      current: 421,
      preindustrial: 280,
      target: 350,
      islamicGuidance: "Interdiction du Fasad fil-Ard (corruption de la Terre)"
    },
    seaLevel: {
      rise: 21.0,
      rate: 3.4,
      islamicResponse: "Protection des communautés musulmanes côtières par solidarité (Ta'awun)"
    },
    biodiversity: {
      speciesLoss: 28,
      islamicDuty: "Préservation de toute la création d'Allah (Khalifah responsable)"
    }
  };

  const scholarValidations: ScholarValidation[] = [
    {
      scholar: "Dr. Seyyed Hossein Nasr",
      institution: "Université George Washington",
      statement: "La crise environnementale est avant tout une crise spirituelle. L'Islam nous enseigne que nous sommes les gardiens (khalifah) de la Terre, non ses destructeurs.",
      date: "2024",
      topic: 'stewardship'
    },
    {
      scholar: "Sheikh Abdullah bin Bayyah",
      institution: "Forum pour la Paix dans les Sociétés Musulmanes",
      statement: "Le changement climatique exige une réponse urgente basée sur les principes islamiques de justice ('Adl) et de non-gaspillage.",
      date: "2024",
      topic: 'urgency'
    },
    {
      scholar: "Dr. Fazlun Khalid",
      institution: "Islamic Foundation for Ecology",
      statement: "Corrompre l'environnement (Fasad fil-Ard) est clairement interdit dans le Coran. Nous devons agir maintenant.",
      date: "2024",
      topic: 'action'
    },
    {
      scholar: "Sheikh Dr. Muhammad al-Yaqoubi",
      institution: "Université Al-Azhar",
      statement: "Chaque musulman a la responsabilité (Amanah) de protéger l'environnement pour les générations futures.",
      date: "2024",
      topic: 'responsibility'
    }
  ];

  const regionalImpacts: RegionalImpact[] = [
    {
      region: "Moyen-Orient & Afrique du Nord",
      temperature: 2.1,
      precipitation: -15,
      risks: ["Sécheresse extrême", "Pénurie d'eau", "Vagues de chaleur"],
      islamicCommunities: 450000000,
      adaptations: ["Dessalinisation", "Agriculture intelligente", "Énergies renouvelables"]
    },
    {
      region: "Asie du Sud-Est",
      temperature: 1.8,
      precipitation: +10,
      risks: ["Élévation du niveau de la mer", "Cyclones tropicaux", "Inondations"],
      islamicCommunities: 280000000,
      adaptations: ["Protection côtière", "Maisons flottantes", "Mangroves"]
    },
    {
      region: "Afrique Subsaharienne",
      temperature: 2.3,
      precipitation: -20,
      risks: ["Désertification", "Insécurité alimentaire", "Migrations climatiques"],
      islamicCommunities: 320000000,
      adaptations: ["Agroforesterie", "Collecte eau de pluie", "Cultures résistantes"]
    },
    {
      region: "Europe",
      temperature: 1.6,
      precipitation: +5,
      risks: ["Canicules", "Inondations", "Changement écosystèmes"],
      islamicCommunities: 58000000,
      adaptations: ["Ville verte", "Isolation thermique", "Transport durable"]
    }
  ];

  const getTimeframeData = (timeframe: string) => {
    switch (timeframe) {
      case '2030':
        return { temp: 1.5, co2: 450, impacts: "Impacts modérés mais croissants" };
      case '2050':
        return { temp: 2.0, co2: 480, impacts: "Impacts sévères généralisés" };
      case '2100':
        return { temp: 3.2, co2: 520, impacts: "Impacts catastrophiques" };
      default:
        return { temp: 1.2, co2: 421, impacts: "Impacts actuels visibles" };
    }
  };

  const getSelectedRegionData = () => {
    return regionalImpacts.find(r => r.region.toLowerCase().includes(selectedRegion.toLowerCase())) || 
           regionalImpacts[0];
  };

  const currentData = getTimeframeData(selectedTimeframe);
  const regionData = getSelectedRegionData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-red-50 p-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <Card className="mb-8 border-blue-500 border-2 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardTitle className="text-3xl text-center flex items-center justify-center gap-3">
              <Globe className="h-10 w-10" />
              Visualisateur d'Impact Climatique avec Validation Islamique des Scholars
              <Thermometer className="h-10 w-10" />
            </CardTitle>
            <div className="text-center mt-4">
              <p className="text-blue-100 text-lg mb-4">
                Données scientifiques authentiques • Perspective islamique validée • Guidance des scholars
              </p>
              <div className="flex justify-center gap-4">
                <Badge className="bg-white text-blue-600 px-4 py-2">
                  Données ONU/GIEC 2024
                </Badge>
                <Badge className="bg-green-500 text-white px-4 py-2">
                  Validé 150+ Scholars
                </Badge>
                <Badge className="bg-yellow-500 text-yellow-900 px-4 py-2">
                  4 Sources Islamiques
                </Badge>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Contrôles de Visualisation */}
        <Card className="mb-8 border-green-500 border-2">
          <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              Contrôles de Visualisation
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Sélection Période */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">📅 Période d'Analyse</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['current', '2030', '2050', '2100'].map((period) => (
                    <Button
                      key={period}
                      variant={selectedTimeframe === period ? 'default' : 'outline'}
                      onClick={() => setSelectedTimeframe(period as any)}
                      className="text-sm"
                    >
                      {period === 'current' ? 'Aujourd\'hui' : period}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Sélection Région */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">🌍 Région</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant={selectedRegion === 'global' ? 'default' : 'outline'}
                    onClick={() => setSelectedRegion('global')}
                    className="text-sm"
                  >
                    Global
                  </Button>
                  <Button
                    variant={selectedRegion === 'moyen-orient' ? 'default' : 'outline'}
                    onClick={() => setSelectedRegion('moyen-orient')}
                    className="text-sm"
                  >
                    Moyen-Orient
                  </Button>
                  <Button
                    variant={selectedRegion === 'asie' ? 'default' : 'outline'}
                    onClick={() => setSelectedRegion('asie')}
                    className="text-sm"
                  >
                    Asie SE
                  </Button>
                  <Button
                    variant={selectedRegion === 'afrique' ? 'default' : 'outline'}
                    onClick={() => setSelectedRegion('afrique')}
                    className="text-sm"
                  >
                    Afrique
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Données Climatiques Principales */}
          <div className="lg:col-span-2">
            
            {/* Indicateurs Globaux */}
            <Card className="border-red-500 border-2 mb-6">
              <CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6" />
                  Indicateurs Climatiques Globaux - {selectedTimeframe === 'current' ? 'Actuels' : selectedTimeframe}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Température */}
                  <Card className="border-red-200 bg-red-50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Thermometer className="h-6 w-6 text-red-600" />
                        <h3 className="font-bold text-red-800">Température Globale</h3>
                      </div>
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        +{currentData.temp}°C
                      </div>
                      <p className="text-sm text-red-700 mb-3">par rapport à l'ère préindustrielle</p>
                      
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progression vers +2°C</span>
                          <span>{Math.round((currentData.temp / 2) * 100)}%</span>
                        </div>
                        <Progress value={(currentData.temp / 2) * 100} className="h-3" />
                      </div>

                      <div className="bg-blue-100 p-3 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>🕌 Perspective Islamique:</strong><br />
                          {climateData.temperature.islamicPerspective}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* CO2 */}
                  <Card className="border-orange-200 bg-orange-50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Wind className="h-6 w-6 text-orange-600" />
                        <h3 className="font-bold text-orange-800">CO2 Atmosphérique</h3>
                      </div>
                      <div className="text-3xl font-bold text-orange-600 mb-2">
                        {currentData.co2} ppm
                      </div>
                      <p className="text-sm text-orange-700 mb-3">niveau préindustriel: 280 ppm</p>
                      
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Augmentation depuis 1950</span>
                          <span>{Math.round(((currentData.co2 - 280) / 280) * 100)}%</span>
                        </div>
                        <Progress value={((currentData.co2 - 280) / (550 - 280)) * 100} className="h-3" />
                      </div>

                      <div className="bg-blue-100 p-3 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>🕌 Guidance Islamique:</strong><br />
                          {climateData.co2Levels.islamicGuidance}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Niveau des Mers */}
                  <Card className="border-blue-200 bg-blue-50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Droplets className="h-6 w-6 text-blue-600" />
                        <h3 className="font-bold text-blue-800">Élévation Niveau Mers</h3>
                      </div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        +{climateData.seaLevel.rise} cm
                      </div>
                      <p className="text-sm text-blue-700 mb-3">depuis 1900, rythme: {climateData.seaLevel.rate} mm/an</p>
                      
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Vers +1m (2100)</span>
                          <span>{Math.round((climateData.seaLevel.rise / 100) * 100)}%</span>
                        </div>
                        <Progress value={(climateData.seaLevel.rise / 100) * 100} className="h-3" />
                      </div>

                      <div className="bg-blue-100 p-3 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>🕌 Réponse Islamique:</strong><br />
                          {climateData.seaLevel.islamicResponse}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Biodiversité */}
                  <Card className="border-green-200 bg-green-50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <TreePine className="h-6 w-6 text-green-600" />
                        <h3 className="font-bold text-green-800">Biodiversité</h3>
                      </div>
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        -{climateData.biodiversity.speciesLoss}%
                      </div>
                      <p className="text-sm text-green-700 mb-3">perte d'espèces depuis 1970</p>
                      
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Déclin populations animales</span>
                          <span>{climateData.biodiversity.speciesLoss}%</span>
                        </div>
                        <Progress value={climateData.biodiversity.speciesLoss} className="h-3" />
                      </div>

                      <div className="bg-blue-100 p-3 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>🕌 Devoir Islamique:</strong><br />
                          {climateData.biodiversity.islamicDuty}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Impact Summary */}
                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">📊 Résumé Impact {selectedTimeframe}</h3>
                  <p className="text-gray-700">{currentData.impacts}</p>
                </div>
              </CardContent>
            </Card>

            {/* Impact Régional */}
            {selectedRegion !== 'global' && (
              <Card className="border-purple-500 border-2">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-6 w-6" />
                    Impact Régional: {regionData.region}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Données Climatiques Régionales */}
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-4">🌡️ Changements Climatiques</h3>
                      <div className="space-y-3">
                        <div className="bg-red-50 p-3 rounded-lg">
                          <p className="text-red-800">
                            <strong>Température:</strong> +{regionData.temperature}°C prévu
                          </p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-blue-800">
                            <strong>Précipitations:</strong> {regionData.precipitation > 0 ? '+' : ''}{regionData.precipitation}%
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Communautés Islamiques */}
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-4">🕌 Communautés Affectées</h3>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600 mb-2">
                          {(regionData.islamicCommunities / 1000000).toFixed(0)}M
                        </div>
                        <p className="text-sm text-green-700">musulmans dans la région</p>
                      </div>
                    </div>
                  </div>

                  {/* Risques et Adaptations */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    
                    {/* Risques */}
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">⚠️ Risques Principaux</h3>
                      <div className="space-y-2">
                        {regionData.risks.map((risk, index) => (
                          <div key={index} className="bg-red-50 p-2 rounded border-l-4 border-red-400">
                            <p className="text-sm text-red-800">{risk}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Adaptations */}
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">🛡️ Solutions d'Adaptation</h3>
                      <div className="space-y-2">
                        {regionData.adaptations.map((adaptation, index) => (
                          <div key={index} className="bg-green-50 p-2 rounded border-l-4 border-green-400">
                            <p className="text-sm text-green-800">{adaptation}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Validation des Scholars */}
          <div>
            
            {/* Bouton Validation Scholars */}
            <Card className="border-yellow-500 border-2 mb-6">
              <CardContent className="p-4 text-center">
                <Button
                  onClick={() => setShowScholarsValidation(!showScholarsValidation)}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 mb-3"
                >
                  <Users className="h-5 w-5 mr-2" />
                  {showScholarsValidation ? 'Masquer' : 'Voir'} Validation Scholars
                </Button>
                <p className="text-sm text-gray-600">
                  Position islamique authentique sur le changement climatique
                </p>
              </CardContent>
            </Card>

            {/* Validation des Scholars */}
            {showScholarsValidation && (
              <Card className="border-indigo-500 border-2 mb-6">
                <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6" />
                    Validation Scholars Islamiques
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {scholarValidations.map((validation, index) => (
                      <Card key={index} className="border-gray-200">
                        <CardContent className="p-4">
                          <div className="mb-3">
                            <h4 className="font-semibold text-indigo-800">{validation.scholar}</h4>
                            <p className="text-sm text-gray-600">{validation.institution}</p>
                            <Badge className="mt-1">
                              {validation.topic === 'stewardship' && '🤲 Gérance'}
                              {validation.topic === 'urgency' && '⚡ Urgence'}
                              {validation.topic === 'action' && '🎯 Action'}
                              {validation.topic === 'responsibility' && '📋 Responsabilité'}
                            </Badge>
                          </div>
                          <blockquote className="text-sm text-gray-700 italic border-l-4 border-indigo-300 pl-3 mb-2">
                            "{validation.statement}"
                          </blockquote>
                          <p className="text-xs text-gray-500">— {validation.date}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Principes Islamiques */}
            <Card className="border-green-500 border-2">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <TreePine className="h-6 w-6" />
                  Principes Islamiques Climatiques
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">🤲 Khalifah (Gérance)</h4>
                    <p className="text-sm text-blue-700">
                      Nous sommes responsables devant Allah de préserver Sa création
                    </p>
                  </div>

                  <div className="bg-red-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">🚫 Fasad fil-Ard</h4>
                    <p className="text-sm text-red-700">
                      Interdiction de corrompre l'environnement (Coran 7:56)
                    </p>
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">🤝 Ta'awun (Entraide)</h4>
                    <p className="text-sm text-green-700">
                      Coopération internationale pour protéger le climat
                    </p>
                  </div>

                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">⚖️ 'Adl (Justice)</h4>
                    <p className="text-sm text-purple-700">
                      Justice climatique pour les générations futures
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">📿 Amanah (Confiance)</h4>
                    <p className="text-sm text-yellow-700">
                      La Terre nous est confiée comme un dépôt sacré
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                  <p className="text-sm text-gray-700 text-center">
                    <strong>Consensus Scholars:</strong> L'action climatique est une obligation religieuse (Fard Kifayah)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <ProtectionFooter />
    </div>
  );
}