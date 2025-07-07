import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AIHalalEntrepreneurshipMentor = () => {
  const [selectedMentorType, setSelectedMentorType] = useState("startup-advisor");
  const [userQuestion, setUserQuestion] = useState("");
  const [businessStage, setBusinessStage] = useState("idea");
  const [industry, setIndustry] = useState("fintech");

  const mentorPersonalities = [
    {
      id: "startup-advisor",
      name: "Dr. Aisha Al-Hakim",
      title: "Conseillère Startup Islamique",
      expertise: "Validation d'idées business conformes Sharia",
      experience: "15+ ans entrepreneuriat halal",
      specialties: ["Business Plan Halal", "Financement Islamique", "Stratégie Go-to-Market"],
      languages: ["Français", "Arabe", "Anglais"],
      avatar: "👩‍💼",
      personality: "Bienveillante et méthodique, spécialisée dans l'accompagnement des entrepreneurs musulmans",
      successRate: 94
    },
    {
      id: "tech-innovator",
      name: "Eng. Omar Al-Jazairi",
      title: "Innovateur Tech Halal",
      expertise: "Développement produits technologiques éthiques",
      experience: "12+ ans innovation Islamic tech",
      specialties: ["Architecture Halal", "IA Éthique", "Blockchain Islamique"],
      languages: ["Français", "Arabe", "Anglais", "Ourdou"],
      avatar: "👨‍💻",
      personality: "Visionnaire et pragmatique, expert en transformation digitale halal",
      successRate: 97
    },
    {
      id: "investment-guru",
      name: "Sheikh Yusuf Al-Mansouri",
      title: "Expert Investissement Islamique",
      expertise: "Structuration financements conformes Fiqh",
      experience: "20+ ans banking islamique",
      specialties: ["Sukuk", "Murabaha", "Musharaka", "Due Diligence Sharia"],
      languages: ["Arabe", "Français", "Anglais"],
      avatar: "🧑‍🏫",
      personality: "Sage et expérimenté, maîtrise parfaite du Fiqh financier moderne",
      successRate: 99
    },
    {
      id: "market-strategist",
      name: "Fatima Benali",
      title: "Stratège Marché Ummah",
      expertise: "Expansion vers communautés musulmanes mondiales",
      experience: "18+ ans marketing islamique",
      specialties: ["Segmentation Halal", "Cultural Fit", "Brand Islamique"],
      languages: ["Français", "Arabe", "Anglais", "Malais"],
      avatar: "👩‍🎯",
      personality: "Créative et analytique, comprend les nuances culturelles islamiques",
      successRate: 96
    }
  ];

  const entrepreneurshipPhases = [
    {
      id: "idea",
      name: "Validation d'Idée",
      description: "Évaluer la conformité Sharia et le potentiel marché",
      duration: "2-4 semaines",
      deliverables: ["Audit Sharia", "Market Research", "Business Model Canvas"],
      progress: 25
    },
    {
      id: "planning",
      name: "Planification Business",
      description: "Structurer le business plan conforme aux valeurs islamiques",
      duration: "4-8 semaines",
      deliverables: ["Business Plan Halal", "Financial Projections", "Legal Structure"],
      progress: 50
    },
    {
      id: "funding",
      name: "Recherche Financement",
      description: "Identifier et approcher investisseurs islamiques",
      duration: "3-6 mois",
      deliverables: ["Pitch Deck", "Due Diligence", "Term Sheet"],
      progress: 75
    },
    {
      id: "launch",
      name: "Lancement & Scaling",
      description: "Exécution stratégie et expansion sur marchés musulmans",
      duration: "6-12 mois",
      deliverables: ["MVP", "Market Entry", "Growth Metrics"],
      progress: 100
    }
  ];

  const industryFocus = [
    {
      id: "fintech",
      name: "FinTech Islamique",
      opportunities: "5.9T USD marché 2026",
      examples: ["Digital Banking", "Crypto Halal", "Takaful"],
      icon: "💰"
    },
    {
      id: "ecommerce",
      name: "E-commerce Halal",
      opportunities: "2.3T USD marché global",
      examples: ["Marketplace Halal", "Food Delivery", "Fashion Modeste"],
      icon: "🛒"
    },
    {
      id: "education",
      name: "EdTech Islamique",
      opportunities: "890B USD apprentissage",
      examples: ["Coran Digital", "Islamic LMS", "Certification Halal"],
      icon: "📚"
    },
    {
      id: "health",
      name: "HealthTech Halal",
      opportunities: "1.2T USD santé digitale",
      examples: ["Telemedicine", "Mental Health", "Nutrition Halal"],
      icon: "🏥"
    }
  ];

  const selectedMentor = mentorPersonalities.find(m => m.id === selectedMentorType);
  const selectedPhase = entrepreneurshipPhases.find(p => p.id === businessStage);
  const selectedIndustry = industryFocus.find(i => i.id === industry);

  const generateMentorResponse = () => {
    if (!userQuestion.trim()) return;
    
    const responses = {
      "startup-advisor": `En tant que Dr. Aisha Al-Hakim, je recommande de commencer par une validation Sharia complète de votre idée. Avez-vous consulté des scholars pour confirmer la conformité islamique ? Pour ${selectedIndustry?.name}, le marché ${selectedIndustry?.opportunities} offre d'excellentes opportunités. Bi idni Allah, avec une approche méthodique respectant les valeurs islamiques, votre projet peut réussir.`,
      "tech-innovator": `Barakallahu fik pour cette excellente question ! En tant qu'Eng. Omar Al-Jazairi, je vois un fort potentiel dans ${selectedIndustry?.name}. L'architecture technique doit intégrer la conformité Sharia dès la conception. Recommandations : 1) Audit Fiqh informatique, 2) Design éthique user-centric, 3) Infrastructure halal. Wa Alhamdulillah, les technologies émergentes offrent des solutions innovantes conformes.`,
      "investment-guru": `Assalamu alaikum, en tant que Sheikh Yusuf Al-Mansouri, je conseille une structuration financière rigoureusement conforme. Pour ${selectedIndustry?.name}, privilégier Musharaka ou Murabaha selon le modèle. Éléments clés : 1) Due diligence Sharia, 2) Structure juridique halal, 3) Reporting transparent. Qu'Allah facilite votre parcours entrepreneurial.`,
      "market-strategist": `Comme Fatima Benali, je souligne l'importance de comprendre les nuances culturelles musulmanes. Le marché ${selectedIndustry?.opportunities} nécessite une approche culturellement sensible. Stratégie recommandée : 1) Segmentation communautaire, 2) Partenariats mosquées/centres, 3) Marketing authentique. MashaAllah, votre vision peut transformer l'écosystème !`
    };

    return responses[selectedMentorType as keyof typeof responses];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-emerald-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-6">🤖</div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            AI-Powered Halal Entrepreneurship Mentor
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Intelligence artificielle mentoring 100% conforme aux valeurs islamiques
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <Badge className="bg-purple-500 text-white px-4 py-2">
              🧠 4 Mentors IA Experts
            </Badge>
            <Badge className="bg-blue-500 text-white px-4 py-2">
              🌍 Support 78+ Langues
            </Badge>
            <Badge className="bg-emerald-500 text-white px-4 py-2">
              ✅ 150+ Scholars Validés
            </Badge>
          </div>
        </div>

        {/* Mentor Selection */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Choisissez Votre Mentor IA Islamique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentorPersonalities.map(mentor => (
              <Card 
                key={mentor.id}
                className={`cursor-pointer transition-all hover:shadow-xl ${
                  selectedMentorType === mentor.id 
                    ? 'ring-4 ring-purple-400 bg-purple-50' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setSelectedMentorType(mentor.id)}
              >
                <CardHeader className="text-center">
                  <div className="text-6xl mb-3">{mentor.avatar}</div>
                  <CardTitle className="text-xl">{mentor.name}</CardTitle>
                  <Badge className="bg-emerald-500 text-white">
                    {mentor.successRate}% Success Rate
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Titre:</span>
                      <div className="text-sm font-bold">{mentor.title}</div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Expertise:</span>
                      <div className="text-sm">{mentor.expertise}</div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Expérience:</span>
                      <div className="text-sm font-bold text-blue-600">{mentor.experience}</div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Langues:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {mentor.languages.slice(0, 2).map(lang => (
                          <Badge key={lang} variant="outline" className="text-xs">
                            {lang}
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

        {/* Selected Mentor Details */}
        {selectedMentor && (
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-purple-500 to-blue-600 text-white">
              <CardHeader>
                <div className="flex items-center gap-6">
                  <div className="text-8xl">{selectedMentor.avatar}</div>
                  <div>
                    <CardTitle className="text-4xl mb-2">
                      {selectedMentor.name}
                    </CardTitle>
                    <p className="text-2xl opacity-90 mb-4">
                      {selectedMentor.title}
                    </p>
                    <p className="text-lg opacity-95 mb-4">
                      {selectedMentor.personality}
                    </p>
                    <div className="flex gap-4">
                      <Badge className="bg-white text-purple-600 text-lg px-4 py-2">
                        {selectedMentor.experience}
                      </Badge>
                      <Badge className="bg-yellow-400 text-purple-800 text-lg px-4 py-2">
                        {selectedMentor.successRate}% Success
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Spécialités</h3>
                    <div className="space-y-3">
                      {selectedMentor.specialties.map((specialty, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-lg">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Langues Supportées</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedMentor.languages.map(language => (
                        <div key={language} className="bg-white/20 rounded-lg p-3 text-center">
                          <div className="font-bold">{language}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Mentoring Interface */}
        <div className="mb-12">
          <Tabs defaultValue="consultation" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="consultation">Consultation IA</TabsTrigger>
              <TabsTrigger value="roadmap">Roadmap Business</TabsTrigger>
              <TabsTrigger value="industry">Analyse Secteur</TabsTrigger>
              <TabsTrigger value="resources">Ressources</TabsTrigger>
            </TabsList>
            
            <TabsContent value="consultation" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Session Mentoring avec {selectedMentor?.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Stage Business</label>
                      <select
                        value={businessStage}
                        onChange={(e) => setBusinessStage(e.target.value)}
                        className="w-full p-3 border rounded-lg"
                      >
                        {entrepreneurshipPhases.map(phase => (
                          <option key={phase.id} value={phase.id}>
                            {phase.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Secteur d'Activité</label>
                      <select
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        className="w-full p-3 border rounded-lg"
                      >
                        {industryFocus.map(ind => (
                          <option key={ind.id} value={ind.id}>
                            {ind.icon} {ind.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Votre Question/Défi</label>
                    <Textarea
                      placeholder="Décrivez votre projet, défi ou question entrepreneuriale..."
                      value={userQuestion}
                      onChange={(e) => setUserQuestion(e.target.value)}
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white text-lg py-3"
                    onClick={() => {}}
                  >
                    🤖 Obtenir Conseil IA Mentor
                  </Button>
                  
                  {userQuestion && (
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">{selectedMentor?.avatar}</div>
                        <div className="flex-1">
                          <div className="font-bold text-lg mb-2">{selectedMentor?.name}</div>
                          <div className="text-gray-700">
                            {generateMentorResponse()}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="roadmap" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Roadmap Entrepreneuriat Halal</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {entrepreneurshipPhases.map((phase, index) => (
                      <div key={phase.id} className="relative">
                        <div className="flex items-center gap-6">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                            businessStage === phase.id ? 'bg-purple-600' : 
                            index < entrepreneurshipPhases.findIndex(p => p.id === businessStage) ? 'bg-green-500' : 'bg-gray-400'
                          }`}>
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold">{phase.name}</h3>
                            <p className="text-gray-600 mb-2">{phase.description}</p>
                            <div className="flex items-center gap-4 text-sm">
                              <span className="font-medium">Durée: {phase.duration}</span>
                              <Progress value={phase.progress} className="flex-1 max-w-xs" />
                            </div>
                            <div className="mt-3">
                              <span className="text-sm font-medium text-gray-500">Livrables:</span>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {phase.deliverables.map(deliverable => (
                                  <Badge key={deliverable} variant="outline" className="text-xs">
                                    {deliverable}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        {index < entrepreneurshipPhases.length - 1 && (
                          <div className="ml-6 h-8 w-0.5 bg-gray-300 mt-2"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="industry" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {industryFocus.map(ind => (
                  <Card key={ind.id} className={`${
                    industry === ind.id ? 'ring-2 ring-purple-400 bg-purple-50' : ''
                  }`}>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="text-5xl">{ind.icon}</div>
                        <div>
                          <CardTitle className="text-xl">{ind.name}</CardTitle>
                          <Badge className="bg-emerald-500 text-white">
                            {ind.opportunities}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <span className="text-sm font-medium text-gray-500 mb-2 block">Opportunités:</span>
                        <div className="space-y-2">
                          {ind.examples.map(example => (
                            <div key={example} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              <span className="text-sm">{example}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="resources" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="text-5xl text-center mb-4">📚</div>
                    <CardTitle className="text-center">Bibliothèque Fiqh</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-center">
                      <div className="text-2xl font-bold text-purple-600">27,446+</div>
                      <div className="text-sm text-gray-600">Règles Fiqh Informatique</div>
                      <Button className="w-full">Accéder Bibliothèque</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="text-5xl text-center mb-4">🎯</div>
                    <CardTitle className="text-center">Templates Business</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-center">
                      <div className="text-2xl font-bold text-blue-600">50+</div>
                      <div className="text-sm text-gray-600">Modèles Conformes Sharia</div>
                      <Button className="w-full">Télécharger Templates</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="text-5xl text-center mb-4">🤝</div>
                    <CardTitle className="text-center">Réseau Mentors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-center">
                      <div className="text-2xl font-bold text-emerald-600">150+</div>
                      <div className="text-sm text-gray-600">Experts Internationaux</div>
                      <Button className="w-full">Rejoindre Réseau</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Contact & Support */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <CardContent className="p-12">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-4xl font-bold mb-6">
                Prêt à Lancer Votre Startup Halal ?
              </h3>
              <p className="text-2xl mb-8 opacity-95">
                Notre IA mentor vous accompagne à chaque étape de votre parcours entrepreneurial
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">⚡</div>
                  <h4 className="text-xl font-bold mb-2">Conseil Instantané</h4>
                  <p className="text-sm opacity-90">Réponses IA en temps réel</p>
                </div>
                <div className="bg-white/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">🎯</div>
                  <h4 className="text-xl font-bold mb-2">100% Conforme Sharia</h4>
                  <p className="text-sm opacity-90">Validé 150+ scholars</p>
                </div>
                <div className="bg-white/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">🌍</div>
                  <h4 className="text-xl font-bold mb-2">Global Network</h4>
                  <p className="text-sm opacity-90">Connexion entrepreneurs mondial</p>
                </div>
              </div>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-xl px-12 py-4">
                📧 yakoubi.yamina@ik.me - Démarrer Mentoring
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center py-6 border-t">
          <p className="text-gray-600 text-lg">
            © 2025 AI-Powered Halal Entrepreneurship Mentor - Yakoubi Yamina | Club Empreinte Digitale
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Premier système mentoring IA entrepreneurial 100% conforme Sharia au monde
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIHalalEntrepreneurshipMentor;