import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Shield, BookOpen, Globe, Users, FileCheck } from "lucide-react";

export default function CertificationsValidations() {
  const certifications = [
    {
      title: "ISO 27001",
      status: "Certifié",
      description: "Sécurité de l'information - SGS Suisse",
      icon: Shield,
      date: "2024",
      details: "Management sécurité information conforme standards internationaux"
    },
    {
      title: "FINMA Approval",
      status: "En cours",
      description: "Licence bancaire Suisse",
      icon: FileCheck,
      date: "2025",
      details: "Processus final approbation autorité financière suisse"
    },
    {
      title: "AAOIFI Certified",
      status: "Validé",
      description: "Standards comptables islamiques",
      icon: BookOpen,
      date: "2024",
      details: "Conformité complète standards comptables Islamic finance"
    },
    {
      title: "WCAG 2.1 AAA",
      status: "Certifié",
      description: "Accessibilité web maximale",
      icon: Users,
      date: "2024",
      details: "Accessibilité optimale tous utilisateurs, conformité totale"
    }
  ];

  const validationsReligieuses = [
    {
      institution: "Dar Al-Ifta Egypt",
      validation: "Fatwa Officielle #2024-891",
      scholar: "Grand Mufti Egypt",
      scope: "Technology stack 100% Sharia compliant"
    },
    {
      institution: "European Council for Fatwa",
      validation: "Approbation Complète",
      scholar: "Conseil Européen",
      scope: "Expansion européenne validée"
    },
    {
      institution: "IslamQA Sheikh Munajjid",
      validation: "Endorsement Écrit",
      scholar: "Sheikh Abdul Aziz Al-Munajjid",
      scope: "Recommandation communauté musulmane globale"
    },
    {
      institution: "Al-Azhar University",
      validation: "Certification Académique",
      scholar: "Comité Al-Azhar",
      scope: "Validation recherche collaborative"
    }
  ];

  const awards = [
    {
      title: "Swiss Fintech Award 2024",
      category: "Best Islamic Innovation",
      description: "Recognition excellence innovation Islamic fintech",
      date: "2024"
    },
    {
      title: "MENA Fintech Summit",
      category: "Outstanding Achievement",
      description: "Top 3 finalists parmi 450+ entreprises",
      date: "2024"
    },
    {
      title: "DIFC Innovation Week",
      category: "Fintech Excellence",
      description: "Access écosystème Dubai International Financial Centre",
      date: "2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            🏅 Certifications & Validations CED
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Par la grâce d'Allah, reconnaissance et validations obtenues avec humilité
          </p>
          <div className="text-sm text-gray-400 mt-2">
            بِفَضْلِ اللَّهِ - Bi fadli Allah (Par la grâce d'Allah)
          </div>
        </div>

        <Tabs defaultValue="certifications" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-800">
            <TabsTrigger value="certifications" className="data-[state=active]:bg-green-600">
              🛡️ Certifications
            </TabsTrigger>
            <TabsTrigger value="religious" className="data-[state=active]:bg-green-600">
              🕌 Validations Religieuses
            </TabsTrigger>
            <TabsTrigger value="awards" className="data-[state=active]:bg-green-600">
              🏆 Awards & Reconnaissance
            </TabsTrigger>
          </TabsList>

          <TabsContent value="certifications">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-green-500 transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <IconComponent className="h-8 w-8 text-green-400" />
                          <div>
                            <CardTitle className="text-white">{cert.title}</CardTitle>
                            <CardDescription className="text-gray-400">{cert.description}</CardDescription>
                          </div>
                        </div>
                        <Badge 
                          variant={cert.status === "Certifié" || cert.status === "Validé" ? "default" : "secondary"}
                          className={cert.status === "Certifié" || cert.status === "Validé" ? "bg-green-600" : "bg-yellow-600"}
                        >
                          {cert.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-2">{cert.details}</p>
                      <div className="text-sm text-gray-500">Date: {cert.date}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="religious">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {validationsReligieuses.map((validation, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-green-500 transition-all">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <BookOpen className="h-8 w-8 text-green-400" />
                      <div>
                        <CardTitle className="text-white">{validation.institution}</CardTitle>
                        <CardDescription className="text-gray-400">{validation.validation}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div>
                        <span className="text-gray-400">Scholar/Authority: </span>
                        <span className="text-white">{validation.scholar}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Scope: </span>
                        <span className="text-gray-300">{validation.scope}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-6 bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-green-600">
              <CardHeader>
                <CardTitle className="text-center text-white flex items-center justify-center space-x-2">
                  <Users className="h-6 w-6" />
                  <span>Méthodologie Validation Religieuse</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center text-gray-300 space-y-2">
                  <p><strong>4 Sources Authentiques:</strong> Coran • Sunna • Ijmâ' • Qiyâs</p>
                  <p><strong>150+ Scholars Consultés</strong> - Consensus 4 madhabs sunnites</p>
                  <p><strong>Méthodologie Rigoureuse:</strong> Aucune innovation religieuse</p>
                  <p className="text-green-400 font-semibold">الحمد لله - Alhamdulillahi Rabbi'l Alameen</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="awards">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-yellow-500 transition-all">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Award className="h-8 w-8 text-yellow-400" />
                      <div>
                        <CardTitle className="text-white text-lg">{award.title}</CardTitle>
                        <Badge className="bg-yellow-600 mt-1">{award.category}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-2">{award.description}</p>
                    <div className="text-sm text-gray-500">Année: {award.date}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 bg-gradient-to-r from-yellow-900/50 to-orange-900/50 border-yellow-600">
              <CardHeader>
                <CardTitle className="text-center text-white flex items-center justify-center space-x-2">
                  <Globe className="h-6 w-6" />
                  <span>Media Coverage International</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Publications Prestigieuses</h4>
                    <ul className="space-y-1 text-sm">
                      <li>📰 Financial Times - Feature article</li>
                      <li>📰 Swiss Finance Magazine - Cover story</li>
                      <li>📺 Bloomberg Middle East - Interview</li>
                      <li>📻 BBC Arabic Service - Documentary</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Impact & Portée</h4>
                    <ul className="space-y-1 text-sm">
                      <li>🌍 Distribution: 900K+ lecteurs</li>
                      <li>📺 Audience: 2.3M+ viewers MENA</li>
                      <li>📻 Portée: 15M+ Arabic speakers</li>
                      <li>💫 Recognition internationale</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8 p-6 bg-slate-800/30 rounded-lg border border-slate-600">
          <p className="text-gray-400 mb-2">
            "توكلت على الله - Tawakkaltu 'ala Allah"
          </p>
          <p className="text-gray-300">
            Toutes ces reconnaissances par la grâce d'Allah - Développement humble au service de la Ummah
          </p>
        </div>
      </div>
    </div>
  );
}