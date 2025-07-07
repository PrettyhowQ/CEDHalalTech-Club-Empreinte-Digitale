import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const CommunityImpactVisualizationDashboard = () => {
  const [selectedRegion, setSelectedRegion] = useState("global");
  const [selectedTimeframe, setSelectedTimeframe] = useState("monthly");
  const [animationActive, setAnimationActive] = useState(false);

  const globalStats = {
    totalMembers: 847592,
    activeCountries: 67,
    totalProjects: 2847,
    charitableActions: 294756,
    knowledgeShared: 156834,
    prayersSupported: 1847293,
    familiesHelped: 48572,
    youthEducated: 89456
  };

  const regionalData = [
    {
      id: "maghreb",
      name: "Maghreb & Afrique du Nord",
      flag: "🇲🇦",
      members: 234567,
      countries: ["Maroc", "Algérie", "Tunisie", "Libye"],
      projects: 892,
      impact: {
        mosques: 156,
        schools: 89,
        families: 12456,
        sadaqah: "2.1M MAD"
      },
      color: "from-green-500 to-emerald-600"
    },
    {
      id: "gulf",
      name: "Golfe Persique",
      flag: "🇦🇪",
      members: 189234,
      countries: ["UAE", "Arabie Saoudite", "Qatar", "Koweït"],
      projects: 654,
      impact: {
        mosques: 234,
        schools: 156,
        families: 8945,
        sadaqah: "15.7M AED"
      },
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: "europe",
      name: "Europe & Amérique",
      flag: "🇫🇷",
      members: 156789,
      countries: ["France", "Belgique", "Allemagne", "USA", "Canada"],
      projects: 789,
      impact: {
        mosques: 98,
        schools: 67,
        families: 15678,
        sadaqah: "890K EUR"
      },
      color: "from-purple-500 to-violet-600"
    },
    {
      id: "asia",
      name: "Asie & Océanie",
      flag: "🇮🇩",
      members: 267002,
      countries: ["Indonésie", "Malaisie", "Bangladesh", "Pakistan"],
      projects: 512,
      impact: {
        mosques: 345,
        schools: 234,
        families: 23456,
        sadaqah: "45.6M IDR"
      },
      color: "from-orange-500 to-red-600"
    }
  ];

  const islamicPrinciples = [
    {
      principle: "Ta'awun",
      arabic: "تعاون",
      description: "Coopération et entraide mutuelle",
      implementation: "847,592 membres s'entraident quotidiennement",
      verse: "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ",
      translation: "Entraidez-vous dans l'accomplissement des bonnes œuvres et de la piété",
      reference: "Al-Maidah 5:2"
    },
    {
      principle: "Ukhuwah",
      arabic: "أخوة",
      description: "Fraternité islamique universelle",
      implementation: "67 pays unis par la foi et les valeurs communes",
      verse: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ",
      translation: "Les croyants ne sont que des frères",
      reference: "Al-Hujurat 49:10"
    },
    {
      principle: "Ilm",
      arabic: "علم",
      description: "Recherche et partage de la connaissance",
      implementation: "156,834 connaissances partagées ce mois",
      verse: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
      translation: "Et dis: Ô mon Seigneur, accroît mes connaissances",
      reference: "Ta-Ha 20:114"
    }
  ];

  const recentProjects = [
    {
      id: 1,
      title: "Construction Mosquée Digitale 🕌",
      location: "Rabat, Maroc",
      type: "Infrastructure",
      beneficiaries: 2500,
      funding: "450K MAD",
      status: "En cours",
      completion: 78,
      islamicValue: "Bait Allah - Maison d'Allah"
    },
    {
      id: 2,
      title: "École Coranique Tech 📚",
      location: "Dubai, UAE",
      type: "Éducation",
      beneficiaries: 850,
      funding: "1.2M AED",
      status: "Terminé",
      completion: 100,
      islamicValue: "Tahfeedh - Mémorisation du Coran"
    },
    {
      id: 3,
      title: "Centre Formation IA Halal 🤖",
      location: "Kuala Lumpur, Malaisie",
      type: "Technologie",
      beneficiaries: 1200,
      funding: "800K MYR",
      status: "Planifié",
      completion: 25,
      islamicValue: "Itqan - Excellence technologique"
    },
    {
      id: 4,
      title: "Aide Alimentaire Ramadan 🍽️",
      location: "Paris, France",
      type: "Humanitaire",
      beneficiaries: 5000,
      funding: "180K EUR",
      status: "Terminé",
      completion: 100,
      islamicValue: "Zakat - Purification des biens"
    }
  ];

  const animateStats = () => {
    setAnimationActive(true);
    setTimeout(() => setAnimationActive(false), 2000);
  };

  useEffect(() => {
    const interval = setInterval(animateStats, 10000);
    return () => clearInterval(interval);
  }, []);

  const getSelectedRegionData = () => {
    if (selectedRegion === "global") return null;
    return regionalData.find(region => region.id === selectedRegion);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            📊 Community Impact Visualization Dashboard
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Visualisation de l'impact communautaire islamique mondial selon les principes Ta'awun, Ukhuwah et Ilm
          </p>
        </div>

        {/* Statistiques Globales */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className={`bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 transition-all duration-500 ${animationActive ? 'scale-105 shadow-lg' : ''}`}>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {globalStats.totalMembers.toLocaleString()}
              </div>
              <div className="text-blue-700 font-semibold">Membres Actifs</div>
              <div className="text-sm text-blue-600 mt-1">🌍 Communauté Mondiale</div>
            </CardContent>
          </Card>

          <Card className={`bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 transition-all duration-500 ${animationActive ? 'scale-105 shadow-lg' : ''}`}>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{globalStats.activeCountries}</div>
              <div className="text-green-700 font-semibold">Pays Présents</div>
              <div className="text-sm text-green-600 mt-1">🕌 Ummah Unie</div>
            </CardContent>
          </Card>

          <Card className={`bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200 transition-all duration-500 ${animationActive ? 'scale-105 shadow-lg' : ''}`}>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {globalStats.charitableActions.toLocaleString()}
              </div>
              <div className="text-purple-700 font-semibold">Actions Caritatives</div>
              <div className="text-sm text-purple-600 mt-1">🤲 Ta'awun Actif</div>
            </CardContent>
          </Card>

          <Card className={`bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 transition-all duration-500 ${animationActive ? 'scale-105 shadow-lg' : ''}`}>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {globalStats.knowledgeShared.toLocaleString()}
              </div>
              <div className="text-orange-700 font-semibold">Savoirs Partagés</div>
              <div className="text-sm text-orange-600 mt-1">📚 Ilm Diffusé</div>
            </CardContent>
          </Card>
        </div>

        {/* Sélecteur de Région */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center">🗺️ Impact par Région</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button
                variant={selectedRegion === "global" ? "default" : "outline"}
                onClick={() => setSelectedRegion("global")}
                className="px-6 py-3"
              >
                🌍 Vue Globale
              </Button>
              {regionalData.map((region) => (
                <Button
                  key={region.id}
                  variant={selectedRegion === region.id ? "default" : "outline"}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`px-6 py-3 ${selectedRegion === region.id ? `bg-gradient-to-r ${region.color} text-white` : ''}`}
                >
                  {region.flag} {region.name}
                </Button>
              ))}
            </div>

            {/* Détails Région Sélectionnée */}
            {getSelectedRegionData() && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(getSelectedRegionData()!.impact).map(([key, value]) => (
                  <div key={key} className="text-center p-4 bg-white rounded-lg border-2 border-gray-200">
                    <div className="text-2xl font-bold text-gray-800 mb-1">{value}</div>
                    <div className="text-gray-600 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Principes Islamiques */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center">🕌 Principes Islamiques en Action</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {islamicPrinciples.map((principle, index) => (
                <Card key={index} className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-amber-800 mb-2">
                        {principle.principle}
                      </div>
                      <div className="text-2xl text-amber-700 font-semibold mb-2">
                        {principle.arabic}
                      </div>
                      <div className="text-sm text-amber-600">
                        {principle.description}
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg mb-4">
                      <div className="text-sm font-semibold text-amber-800 mb-2">
                        📊 Implémentation:
                      </div>
                      <div className="text-sm text-amber-700">
                        {principle.implementation}
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-arabic text-lg font-bold text-blue-800 text-right mb-2">
                        {principle.verse}
                      </div>
                      <div className="text-sm text-blue-600 italic mb-1">
                        "{principle.translation}"
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 text-xs">
                        {principle.reference}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projets Récents */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center">🚀 Projets Communautaires Récents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {recentProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                      <Badge 
                        className={`${
                          project.status === 'Terminé' ? 'bg-green-100 text-green-800' :
                          project.status === 'En cours' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">📍 Localisation:</span>
                        <span className="font-semibold">{project.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">👥 Bénéficiaires:</span>
                        <span className="font-semibold">{project.beneficiaries.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">💰 Financement:</span>
                        <span className="font-semibold">{project.funding}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Progression</span>
                        <span className="text-sm font-semibold">{project.completion}%</span>
                      </div>
                      <Progress value={project.completion} className="h-2" />
                    </div>

                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <div className="text-sm font-semibold text-emerald-800 mb-1">
                        🕌 Valeur Islamique:
                      </div>
                      <div className="text-sm text-emerald-700">
                        {project.islamicValue}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Impact Temps Réel */}
        <Card className="bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200">
          <CardHeader>
            <CardTitle className="text-center text-emerald-800">⚡ Impact Temps Réel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600">
                  {globalStats.prayersSupported.toLocaleString()}
                </div>
                <div className="text-emerald-700 font-semibold">Prières Supportées</div>
                <div className="text-sm text-emerald-600">🤲 Guidance Spirituelle</div>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-emerald-600">
                  {globalStats.familiesHelped.toLocaleString()}
                </div>
                <div className="text-emerald-700 font-semibold">Familles Aidées</div>
                <div className="text-sm text-emerald-600">👨‍👩‍👧‍👦 Support Familial</div>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-emerald-600">
                  {globalStats.youthEducated.toLocaleString()}
                </div>
                <div className="text-emerald-700 font-semibold">Jeunes Éduqués</div>
                <div className="text-sm text-emerald-600">📚 Formation Islamique</div>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-emerald-600">24/7</div>
                <div className="text-emerald-700 font-semibold">Support Disponible</div>
                <div className="text-sm text-emerald-600">🕌 Service Continu</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CommunityImpactVisualizationDashboard;