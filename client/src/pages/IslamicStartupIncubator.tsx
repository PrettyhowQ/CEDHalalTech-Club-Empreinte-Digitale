import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const IslamicStartupIncubator = () => {
  const [selectedProgram, setSelectedProgram] = useState("full-incubation");

  const incubationPrograms = [
    {
      id: "full-incubation",
      name: "Incubation Complète HalalTech™",
      duration: "12 mois",
      investment: "50K - 500K CHF",
      equity: "5-15%",
      description: "Programme complet pour startups technologiques islamiques",
      features: [
        "Mentorat experts tech islamique",
        "Financement halal Murabaha/Musharaka",
        "Validation Sharia par 150+ scholars",
        "Accès réseau 847K+ musulmans",
        "Formation Fiqh informatique",
        "Certification AAOIFI/OIC"
      ],
      icon: "🚀",
      color: "from-emerald-500 to-green-600"
    },
    {
      id: "halal-validation",
      name: "Validation Halal Express",
      duration: "3 mois",
      investment: "15K - 50K CHF",
      equity: "2-5%",
      description: "Validation rapide conformité Sharia pour produits existants",
      features: [
        "Audit Fiqh informatique",
        "Certification halal produit",
        "Adaptation interface culturelle",
        "Formation équipe Islamic compliance",
        "Documentation scholars",
        "Label HalalTech™ officiel"
      ],
      icon: "✅",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: "islamic-scaling",
      name: "Expansion Ummah Globale",
      duration: "6 mois",
      investment: "100K - 1M CHF",
      equity: "8-20%",
      description: "Expansion vers 1.8 milliard de musulmans mondiaux",
      features: [
        "Stratégie expansion 67 pays",
        "Localisation culturelle complète",
        "Partenariats banques islamiques",
        "Marketing halal authentique",
        "Distribution mosquées/centres",
        "Support multilingue 78 langues"
      ],
      icon: "🌍",
      color: "from-purple-500 to-violet-600"
    }
  ];

  const currentStartups = [
    {
      name: "ZakatChain",
      category: "Blockchain Islamic Finance",
      stage: "Série A",
      funding: "2.1M CHF",
      description: "Distribution automatique Zakat via blockchain conforme Sharia",
      progress: 78,
      founders: "Ahmed Al-Mansouri, Fatima Benali",
      country: "🇦🇪 UAE",
      traction: "150K+ donateurs actifs"
    },
    {
      name: "HalalFood AI",
      category: "AI Food Technology",
      stage: "Seed",
      funding: "890K CHF", 
      description: "IA reconnaissance ingrédients halal temps réel par caméra",
      progress: 65,
      founders: "Omar Kassem, Aisha Rahman",
      country: "🇫🇷 France",
      traction: "50K+ utilisateurs quotidiens"
    },
    {
      name: "Salah Reminder IoT",
      category: "IoT Spiritual Tech",
      stage: "Pre-seed",
      funding: "320K CHF",
      description: "Objets connectés rappel prières avec Qibla automatique",
      progress: 45,
      founders: "Hassan Al-Turki, Maryam El-Fassi",
      country: "🇸🇦 Arabie Saoudite",
      traction: "25K+ dispositifs vendus"
    },
    {
      name: "Islamic Learning VR",
      category: "VR Education",
      stage: "Pre-seed",
      funding: "560K CHF",
      description: "Réalité virtuelle pour apprentissage Coran et Hajj immersif",
      progress: 52,
      founders: "Yusuf Ibrahim, Khadija Toure",
      country: "🇲🇦 Maroc",
      traction: "15K+ étudiants formés"
    }
  ];

  const mentors = [
    {
      name: "Dr. Sheikh Ahmad Al-Jazairi",
      expertise: "Fiqh Informatique & Blockchain",
      experience: "25+ ans sciences islamiques",
      speciality: "Validation conformité Sharia technologique",
      icon: "👨‍🏫"
    },
    {
      name: "Yakoubi Yamina",
      expertise: "Entrepreneuriat Tech Islamique",
      experience: "15+ ans innovation halal",
      speciality: "Stratégie expansion marchés musulmans",
      icon: "👩‍💼"
    },
    {
      name: "Omar Al-Mansouri",
      expertise: "Financement Islamique Digital",
      experience: "20+ ans banking islamique",
      speciality: "Structuration investissements halal",
      icon: "👨‍💰"
    },
    {
      name: "Dr. Aisha Benali",
      expertise: "IA Éthique & Machine Learning",
      experience: "12+ ans recherche IA",
      speciality: "Développement IA conforme valeurs islamiques",
      icon: "👩‍🔬"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-6">🏢</div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Islamic Startup Incubator CED
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Premier incubateur mondial dédié aux startups technologiques islamiques
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <Badge className="bg-blue-500 text-white px-4 py-2">
              🚀 127 Startups Incubées
            </Badge>
            <Badge className="bg-purple-500 text-white px-4 py-2">
              💰 47.2M CHF Investis
            </Badge>
            <Badge className="bg-emerald-500 text-white px-4 py-2">
              🌍 23 Pays Représentés
            </Badge>
          </div>
        </div>

        {/* Programs Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Programmes d'Incubation HalalTech™
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {incubationPrograms.map(program => (
              <Card 
                key={program.id} 
                className={`bg-gradient-to-br ${program.color} text-white shadow-xl cursor-pointer transform hover:scale-105 transition-all ${selectedProgram === program.id ? 'ring-4 ring-yellow-400' : ''}`}
                onClick={() => setSelectedProgram(program.id)}
              >
                <CardHeader>
                  <div className="text-6xl text-center mb-4">{program.icon}</div>
                  <CardTitle className="text-2xl text-center">
                    {program.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">{program.duration}</div>
                      <div className="text-sm opacity-90">Durée</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{program.equity}</div>
                      <div className="text-sm opacity-90">Equity</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold mb-2">{program.investment}</div>
                    <div className="text-sm opacity-90">Investissement</div>
                  </div>
                  <p className="text-center text-lg opacity-95">
                    {program.description}
                  </p>
                  <div className="space-y-2">
                    {program.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    <div className="text-center text-sm opacity-90">
                      +{program.features.length - 3} autres avantages
                    </div>
                  </div>
                  <Button className="w-full bg-white text-gray-800 hover:bg-gray-100 text-lg py-3">
                    Candidater Maintenant
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Portfolio */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Portfolio Startups Actuelles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentStartups.map((startup, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-gray-800">
                      {startup.name}
                    </CardTitle>
                    <Badge className="bg-emerald-500 text-white">
                      {startup.stage}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="outline">{startup.category}</Badge>
                    <span className="text-lg font-bold text-emerald-600">
                      {startup.funding}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 text-lg">
                    {startup.description}
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Progression</span>
                      <span className="text-sm font-bold">{startup.progress}%</span>
                    </div>
                    <Progress value={startup.progress} className="h-3" />
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <div className="text-sm font-medium text-gray-500">Fondateurs</div>
                      <div className="text-lg">{startup.founders}</div>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <div className="text-sm font-medium text-gray-500">Pays</div>
                        <div className="text-lg">{startup.country}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-500">Traction</div>
                        <div className="text-lg font-bold text-blue-600">{startup.traction}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mentors & Advisors */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Mentors & Conseillers Experts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((mentor, index) => (
              <Card key={index} className="bg-white shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4">{mentor.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{mentor.name}</h3>
                  <Badge className="mb-4 bg-blue-500 text-white">
                    {mentor.expertise}
                  </Badge>
                  <p className="text-gray-600 mb-3">{mentor.experience}</p>
                  <p className="text-sm text-gray-500">
                    {mentor.speciality}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-12">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-4xl font-bold mb-6">
                Prêt à révolutionner la tech islamique ?
              </h3>
              <p className="text-2xl mb-8 opacity-95">
                Rejoignez l'écosystème d'innovation technologique islamique le plus avancé au monde
              </p>
              <div className="flex flex-col lg:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-12 py-4">
                  📝 Postuler Maintenant
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-xl px-12 py-4">
                  📧 yakoubi.yamina@ik.me
                </Button>
              </div>
              <div className="mt-8 text-lg opacity-90">
                Next Demo Day: 15 Mars 2025 | Dubai Islamic Economy Summit
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center py-6 border-t">
          <p className="text-gray-600 text-lg">
            © 2025 Islamic Startup Incubator CED - Yakoubi Yamina | Club Empreinte Digitale
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Premier incubateur technologique islamique conforme Sharia au monde
          </p>
        </div>
      </div>
    </div>
  );
};

export default IslamicStartupIncubator;