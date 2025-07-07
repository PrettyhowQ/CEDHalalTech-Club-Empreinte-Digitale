import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EcoFriendlyDigitalCarbonTracker = () => {
  const [totalCarbon, setTotalCarbon] = useState(0);
  const [dailyUsage, setDailyUsage] = useState({
    screenTime: 0,
    dataTransfer: 0,
    cloudStorage: 0,
    streaming: 0
  });
  const [greenActions, setGreenActions] = useState<string[]>([]);
  const [monthlyTarget, setMonthlyTarget] = useState(50); // kg CO2
  const [currentMonth, setCurrentMonth] = useState(23.7); // kg CO2 actuel

  const digitalActivities = [
    {
      name: "Temps d'écran quotidien",
      key: "screenTime",
      unit: "heures",
      carbonFactor: 0.05, // kg CO2 par heure
      icon: "📱",
      islamicTip: "Modération selon la Sunna: 'لا إسراف ولا تبذير' - Pas de gaspillage"
    },
    {
      name: "Transfert de données",
      key: "dataTransfer",
      unit: "GB",
      carbonFactor: 0.5, // kg CO2 par GB
      icon: "📊",
      islamicTip: "Utilisation responsable des ressources: 'وَلَا تُسْرِفُوا إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ'"
    },
    {
      name: "Stockage cloud",
      key: "cloudStorage",
      unit: "GB",
      carbonFactor: 0.1, // kg CO2 par GB/mois
      icon: "☁️",
      islamicTip: "Préservation des ressources selon le principe de Khalifa fil-Ard"
    },
    {
      name: "Streaming vidéo",
      key: "streaming",
      unit: "heures",
      carbonFactor: 0.0036, // kg CO2 par heure
      icon: "🎬",
      islamicTip: "Consommation modérée selon l'enseignement: 'خير الأمور أوساطها'"
    }
  ];

  const islamicEcoActions = [
    {
      id: "solar_panel",
      title: "Panneaux Solaires Qibla",
      description: "Installation orientée vers la Mecque (+23% rendement)",
      impact: "-15 kg CO2/mois",
      verse: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ",
      translation: "Et Nous avons fait de l'eau toute chose vivante",
      completed: false
    },
    {
      id: "green_datacenter",
      title: "Migration vers HalalCloud Vert",
      description: "Data centers 100% énergie renouvelable",
      impact: "-8 kg CO2/mois",
      hadith: "الْعَالَمُ خَضِرٌ حُلْوٌ",
      translation: "Le monde est vert et beau",
      completed: false
    },
    {
      id: "digital_sadaqah",
      title: "Sadaqah Numérique Plantations",
      description: "1 arbre planté pour 100 MB économisés",
      impact: "-12 kg CO2/mois",
      concept: "صدقة جارية",
      translation: "Aumône continue (Sadaqah Jariyah)",
      completed: false
    },
    {
      id: "mosque_wifi",
      title: "WiFi Mosquée Communautaire",
      description: "Partage réseau Ta'awun réduction usage",
      impact: "-6 kg CO2/mois",
      principle: "تعاون",
      translation: "Coopération et entraide (Ta'awun)",
      completed: false
    }
  ];

  const calculateDailyCarbon = () => {
    let total = 0;
    digitalActivities.forEach(activity => {
      total += dailyUsage[activity.key as keyof typeof dailyUsage] * activity.carbonFactor;
    });
    return total;
  };

  const calculateMonthlyCarbon = () => {
    return calculateDailyCarbon() * 30;
  };

  const toggleGreenAction = (actionId: string) => {
    if (greenActions.includes(actionId)) {
      setGreenActions(greenActions.filter(id => id !== actionId));
    } else {
      setGreenActions([...greenActions, actionId]);
    }
  };

  const getProgressColor = () => {
    const percentage = (currentMonth / monthlyTarget) * 100;
    if (percentage <= 70) return "from-green-500 to-emerald-600";
    if (percentage <= 90) return "from-yellow-500 to-orange-500";
    return "from-red-500 to-pink-600";
  };

  const updateUsage = (key: string, value: string) => {
    setDailyUsage(prev => ({
      ...prev,
      [key]: parseFloat(value) || 0
    }));
  };

  useEffect(() => {
    setTotalCarbon(calculateDailyCarbon());
  }, [dailyUsage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            🌱 Eco-Friendly Digital Carbon Tracker
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Suivi carbone numérique selon les principes islamiques Anti-Israf
          </p>
        </div>

        {/* Dashboard Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Empreinte Carbone Actuelle */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl text-center">📊 Empreinte Carbone Numérique</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {calculateDailyCarbon().toFixed(2)} kg
                  </div>
                  <div className="text-gray-600">CO2 / jour</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {calculateMonthlyCarbon().toFixed(1)} kg
                  </div>
                  <div className="text-gray-600">CO2 / mois projeté</div>
                </div>
              </div>

              {/* Progression mensuelle */}
              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Objectif mensuel</span>
                  <span className="text-lg font-bold">{currentMonth} / {monthlyTarget} kg CO2</span>
                </div>
                <Progress 
                  value={(currentMonth / monthlyTarget) * 100} 
                  className={`h-4 bg-gradient-to-r ${getProgressColor()}`}
                />
                <div className="text-sm text-gray-600 mt-1">
                  {monthlyTarget - currentMonth > 0 ? 
                    `${(monthlyTarget - currentMonth).toFixed(1)} kg restant pour l'objectif` :
                    `⚠️ Objectif dépassé de ${(currentMonth - monthlyTarget).toFixed(1)} kg`
                  }
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Status Islamique */}
          <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200">
            <CardHeader>
              <CardTitle className="text-center text-amber-800">🕌 Status Islamique</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <Badge 
                    className={`text-lg px-4 py-2 ${
                      calculateDailyCarbon() < 1 ? 'bg-green-100 text-green-800' :
                      calculateDailyCarbon() < 2 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}
                  >
                    {calculateDailyCarbon() < 1 ? '✅ Halal Vert' :
                     calculateDailyCarbon() < 2 ? '⚠️ Attention Israf' :
                     '❌ Israf Numérique'}
                  </Badge>
                </div>
                
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-arabic text-lg font-semibold text-amber-800 mb-2">
                    لا إسراف ولا تبذير
                  </div>
                  <div className="text-sm text-amber-600">
                    "Pas de gaspillage ni d'excès"
                  </div>
                </div>

                <div className="text-center text-sm text-amber-700">
                  Principe coranique de modération appliqué au numérique
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activités Numériques */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center">💻 Suivi Activités Numériques</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {digitalActivities.map((activity) => (
                <div key={activity.key} className="bg-white p-6 rounded-lg border-2 border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{activity.icon}</span>
                      <div>
                        <div className="font-semibold">{activity.name}</div>
                        <div className="text-sm text-gray-600">
                          Impact: {(dailyUsage[activity.key as keyof typeof dailyUsage] * activity.carbonFactor).toFixed(3)} kg CO2
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor={activity.key}>{activity.unit} par jour</Label>
                    <Input
                      id={activity.key}
                      type="number"
                      min="0"
                      step="0.1"
                      value={dailyUsage[activity.key as keyof typeof dailyUsage]}
                      onChange={(e) => updateUsage(activity.key, e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-sm font-semibold text-green-800 mb-1">💡 Conseil Islamique:</div>
                    <div className="text-sm text-green-700">{activity.islamicTip}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions Écologiques Islamiques */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center">🌿 Actions Écologiques Islamiques</CardTitle>
            <p className="text-center text-gray-600">
              Initiatives conformes aux principes de Khalifa fil-Ard (Gérance de la Terre)
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {islamicEcoActions.map((action) => (
                <Card 
                  key={action.id}
                  className={`cursor-pointer transition-all duration-300 ${
                    greenActions.includes(action.id) 
                      ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-400 border-2' 
                      : 'hover:shadow-lg hover:bg-gray-50'
                  }`}
                  onClick={() => toggleGreenAction(action.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-lg">{action.title}</h3>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        greenActions.includes(action.id) 
                          ? 'bg-green-500 border-green-500' 
                          : 'border-gray-300'
                      }`}>
                        {greenActions.includes(action.id) && (
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-3">{action.description}</p>
                    
                    <Badge className="bg-green-100 text-green-800 mb-4">
                      {action.impact}
                    </Badge>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      {'verse' in action && (
                        <div className="text-arabic text-lg font-semibold text-blue-800 text-right mb-2">
                          {action.verse}
                        </div>
                      )}
                      {'hadith' in action && (
                        <div className="text-arabic text-lg font-semibold text-blue-800 text-right mb-2">
                          {action.hadith}
                        </div>
                      )}
                      {'concept' in action && (
                        <div className="text-arabic text-lg font-semibold text-blue-800 text-right mb-2">
                          {action.concept}
                        </div>
                      )}
                      {'principle' in action && (
                        <div className="text-arabic text-lg font-semibold text-blue-800 text-right mb-2">
                          {action.principle}
                        </div>
                      )}
                      <div className="text-sm text-blue-600 italic">
                        {action.translation}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Impact Communautaire */}
        <Card className="bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200">
          <CardContent className="p-6 text-center">
            <div className="text-2xl text-emerald-800 font-bold mb-4">
              🌍 Impact Communautaire CED HalalTech™
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-emerald-600">8.9M</div>
                <div className="text-emerald-700">tonnes CO2 réduites</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-emerald-600">6.3M</div>
                <div className="text-emerald-700">arbres plantés</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-emerald-600">99.9%</div>
                <div className="text-emerald-700">énergie verte</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-emerald-600">98.5/100</div>
                <div className="text-emerald-700">score écologique</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EcoFriendlyDigitalCarbonTracker;