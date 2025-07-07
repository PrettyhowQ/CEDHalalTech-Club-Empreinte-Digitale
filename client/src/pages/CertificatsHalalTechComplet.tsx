import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Award, Download, Shield, Star, CheckCircle, Code, Database, Lock } from "lucide-react";
import { useState } from "react";
import ProtectionFooter from "@/components/ProtectionFooter";

export default function CertificatsHalalTechComplet() {
  const [selectedFormation, setSelectedFormation] = useState("python-halal");
  const [studentName, setStudentName] = useState("");
  const [certificateGenerated, setCertificateGenerated] = useState(false);

  const formations = [
    {
      id: "python-halal",
      title: "Python Halal",
      icon: "🐍",
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300",
      textColor: "text-blue-700",
      description: "Programmation Python conforme aux principes islamiques",
      duration: "120 heures",
      modules: 12,
      skills: ["Variables halal", "Fonctions conformes Sharia", "OOP islamique", "APIs Fiqh", "Data Science éthique"],
      certification: "Certificat Python HalalTech™ Level 3"
    },
    {
      id: "ia-ethique",
      title: "IA Éthique",
      icon: "🤖",
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-300",
      textColor: "text-purple-700",
      description: "Intelligence Artificielle respectueuse des valeurs islamiques",
      duration: "150 heures",
      modules: 15,
      skills: ["IA sans biais", "Machine Learning halal", "NLP respectueux", "Vision Computer éthique", "Robotique islamique"],
      certification: "Certificat IA Éthique HalalTech™ Expert"
    },
    {
      id: "cybersecurite-islamique",
      title: "Cybersécurité Islamique",
      icon: "🔒",
      color: "from-red-600 to-orange-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-300",
      textColor: "text-red-700",
      description: "Sécurité informatique selon principes Hifz et Amanah",
      duration: "100 heures",
      modules: 10,
      skills: ["Hifz Data Protection", "Amanah Cryptography", "Islamic Firewall", "Halal Monitoring", "Ethical Hacking"],
      certification: "Certificat Cybersécurité Islamique HalalTech™"
    },
    {
      id: "blockchain-halal",
      title: "Blockchain Halal",
      icon: "⛓️",
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-300",
      textColor: "text-green-700",
      description: "Blockchain conforme Sharia sans spéculation interdite",
      duration: "90 heures",
      modules: 9,
      skills: ["Smart Contracts halal", "DeFi islamique", "NFT conformes", "Mining éthique", "Tokenomics Sharia"],
      certification: "Certificat Blockchain Halal HalalTech™"
    },
    {
      id: "dev-web-halal",
      title: "Développement Web Halal",
      icon: "🌐",
      color: "from-indigo-600 to-blue-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-300",
      textColor: "text-indigo-700",
      description: "Développement web respectant l'éthique islamique",
      duration: "140 heures",
      modules: 14,
      skills: ["HTML/CSS halal", "JavaScript éthique", "React islamique", "Backend Sharia", "UX/UI respectueuse"],
      certification: "Certificat Développement Web Halal HalalTech™"
    },
    {
      id: "fiqh-informatique",
      title: "Fiqh Informatique",
      icon: "📚",
      color: "from-amber-600 to-orange-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-300",
      textColor: "text-amber-700",
      description: "Jurisprudence islamique appliquée à la technologie",
      duration: "200 heures",
      modules: 20,
      skills: ["27,446+ règles Fiqh", "4 écoles juridiques", "Fatwa technologiques", "Conseil Sharia", "Méthodologie authentique"],
      certification: "Certificat Fiqh Informatique HalalTech™ Master"
    },
    {
      id: "arabe-coranique-tech",
      title: "Arabe Coranique Tech",
      icon: "📖",
      color: "from-teal-600 to-cyan-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-300",
      textColor: "text-teal-700",
      description: "Arabe coranique appliqué aux technologies modernes",
      duration: "180 heures",
      modules: 18,
      skills: ["Grammaire coranique", "Morphologie tech", "Terminologie islamique", "Calligraphie numérique", "Traduction IA"],
      certification: "Certificat Arabe Coranique Tech HalalTech™"
    }
  ];

  const generateCertificate = () => {
    if (studentName.trim()) {
      setCertificateGenerated(true);
    }
  };

  const getCurrentFormation = () => {
    return formations.find(f => f.id === selectedFormation) || formations[0];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-6">🏆</div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Certificats & Diplômes HalalTech™
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            7 Formations Techniques Certifiées Conformes Sharia
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-emerald-100 text-emerald-700 text-lg px-6 py-3">
              <Shield className="w-5 h-5 mr-2" />
              100% Conforme Fiqh
            </Badge>
            <Badge className="bg-blue-100 text-blue-700 text-lg px-6 py-3">
              <Award className="w-5 h-5 mr-2" />
              Certificats Professionnels
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 text-lg px-6 py-3">
              <Star className="w-5 h-5 mr-2" />
              Validés 150+ Scholars
            </Badge>
          </div>
        </div>

        <Tabs value={selectedFormation} onValueChange={setSelectedFormation} className="w-full">
          
          {/* Sélecteur de Formations */}
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8">
            {formations.map((formation) => (
              <TabsTrigger
                key={formation.id}
                value={formation.id}
                className="text-xs px-2 py-3 data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
              >
                <span className="text-lg mr-1">{formation.icon}</span>
                <span className="hidden sm:inline">{formation.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Contenu de Chaque Formation */}
          {formations.map((formation) => (
            <TabsContent key={formation.id} value={formation.id}>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                
                {/* Détails de la Formation */}
                <Card className={`border-4 ${formation.borderColor} ${formation.bgColor} shadow-xl`}>
                  <CardHeader className="text-center">
                    <div className="text-6xl mb-4">{formation.icon}</div>
                    <CardTitle className={`text-3xl font-bold bg-gradient-to-r ${formation.color} bg-clip-text text-transparent`}>
                      {formation.title}
                    </CardTitle>
                    <p className="text-lg text-gray-600 mt-2">{formation.description}</p>
                  </CardHeader>
                  <CardContent>
                    
                    {/* Statistiques Formation */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-emerald-600">{formation.duration}</div>
                        <div className="text-sm text-gray-600">Durée Formation</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{formation.modules}</div>
                        <div className="text-sm text-gray-600">Modules</div>
                      </div>
                    </div>

                    {/* Compétences Acquises */}
                    <div className="mb-6">
                      <h4 className="font-bold text-lg mb-3 text-gray-800">🎯 Compétences Certifiées</h4>
                      <div className="space-y-2">
                        {formation.skills.map((skill, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Certification */}
                    <div className="bg-white p-4 rounded-lg border-2 border-emerald-200">
                      <h4 className="font-bold text-lg mb-2 text-emerald-700">🏆 Certification Délivrée</h4>
                      <p className="text-emerald-600 font-semibold">{formation.certification}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Générateur de Certificat */}
                <Card className="border-4 border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50 shadow-xl">
                  <CardHeader className="text-center">
                    <div className="text-6xl mb-4">📜</div>
                    <CardTitle className="text-3xl font-bold text-yellow-700">
                      Générateur de Certificat
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    
                    {!certificateGenerated ? (
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="studentName" className="text-lg font-semibold">
                            Nom de l'Étudiant(e)
                          </Label>
                          <Input
                            id="studentName"
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            placeholder="Entrez votre nom complet"
                            className="text-lg p-4 mt-2"
                          />
                        </div>
                        
                        <Button
                          onClick={generateCertificate}
                          disabled={!studentName.trim()}
                          className="w-full text-xl py-6 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white shadow-lg"
                        >
                          <Award className="w-6 h-6 mr-3" />
                          Générer Certificat HalalTech™
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        
                        {/* Aperçu Certificat */}
                        <div className="bg-white p-8 border-4 border-emerald-400 rounded-lg shadow-lg">
                          <div className="text-center">
                            <div className="text-4xl mb-4">🏆</div>
                            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
                              CERTIFICAT HALALTECH™
                            </h2>
                            <div className="text-lg mb-4">
                              <span className="font-semibold">Certifie que</span>
                            </div>
                            <div className="text-3xl font-bold text-blue-700 mb-4 border-b-2 border-emerald-300 pb-2">
                              {studentName}
                            </div>
                            <div className="text-lg mb-4">
                              <span className="font-semibold">a complété avec succès la formation</span>
                            </div>
                            <div className="text-2xl font-bold text-purple-700 mb-6">
                              {getCurrentFormation().title}
                            </div>
                            
                            {/* Compétences Certifiées */}
                            <div className="text-left mb-6">
                              <h4 className="font-bold text-lg mb-3 text-center">Compétences Certifiées</h4>
                              <div className="grid grid-cols-1 gap-2">
                                {getCurrentFormation().skills.slice(0, 3).map((skill, index) => (
                                  <div key={index} className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>{skill}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Signatures */}
                            <div className="grid grid-cols-2 gap-8 mt-8">
                              <div className="text-center">
                                <div className="border-t-2 border-gray-300 pt-2">
                                  <div className="font-bold">Yakoubi Yamina</div>
                                  <div className="text-sm text-gray-600">Directrice CED HalalTech™</div>
                                </div>
                              </div>
                              <div className="text-center">
                                <div className="border-t-2 border-gray-300 pt-2">
                                  <div className="font-bold">Sheikh Dr. Al-Jazairi</div>
                                  <div className="text-sm text-gray-600">Supervision Islamique</div>
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 text-xs text-gray-500">
                              Certificat ID: HALALTECH-{formation.id.toUpperCase()}-{Date.now()}
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4">
                          <Button className="flex-1 text-lg py-4 bg-green-600 hover:bg-green-700 text-white">
                            <Download className="w-5 h-5 mr-2" />
                            Télécharger PDF
                          </Button>
                          <Button 
                            onClick={() => {
                              setCertificateGenerated(false);
                              setStudentName("");
                            }}
                            className="flex-1 text-lg py-4 bg-gray-600 hover:bg-gray-700 text-white"
                          >
                            Nouveau Certificat
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Protection Juridique */}
        <div className="mb-12">
          <Card className="border-4 border-red-400 bg-gradient-to-br from-red-50 to-orange-50 shadow-xl">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">🛡️</div>
              <CardTitle className="text-3xl font-bold text-red-700">
                Licence HalalTech™ - Usage Exclusivement Halal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-red-100 border-2 border-red-300 rounded-lg p-6 text-center">
                <p className="text-lg font-bold text-red-800 mb-4">
                  🛡️ PROTECTION JURIDIQUE & RELIGIEUSE 🛡️
                </p>
                <p className="text-red-700 mb-4">
                  Les certificats HalalTech™ sont protégés par copyright international et Sharia.
                  Usage exclusivement autorisé pour applications conformes aux valeurs islamiques.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div className="bg-white p-3 rounded">
                    <div className="font-bold text-red-800">🇨🇭 Suisse</div>
                    <div>LPD + Code PI</div>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <div className="font-bold text-red-800">🇪🇺 Europe</div>
                    <div>RGPD Complet</div>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <div className="font-bold text-red-800">🕌 Sharia</div>
                    <div>Fiqh Authentique</div>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <div className="font-bold text-red-800">🌍 International</div>
                    <div>Copyright Global</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Copyright Footer */}
        <div className="text-center mb-8">
          <Card className="border-2 border-gray-300 bg-gray-50">
            <CardContent className="py-6">
              <p className="text-lg font-bold text-gray-800 mb-2">
                © 2025 CED HalalTech™ - Yakoubi Yamina
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Certificats délivrés selon standards internationaux • Conformité Sharia garantie
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <span>🇫🇷 Français</span>
                <span>🇸🇦 العربية</span>
                <span>🇺🇸 English</span>
                <span>🇨🇳 中文</span>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
      
      <ProtectionFooter />
    </div>
  );
}