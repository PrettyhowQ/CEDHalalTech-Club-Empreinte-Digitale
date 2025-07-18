import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { Code, Palette, Users, Dumbbell, Monitor, Smartphone, Globe, Star, Trophy, Target, Clock, MapPin } from "lucide-react";

export default function MalikKetarDeveloppement() {
  const specialites = [
    {
      nom: "Développement Web HalalTech™",
      icone: <Code className="w-8 h-8" />,
      couleur: "bg-blue-600",
      description: "Expert développement full-stack conforme valeurs islamiques",
      domaines: ["React/TypeScript", "Node.js Backend", "Database PostgreSQL", "APIs REST/GraphQL"]
    },
    {
      nom: "UX/UI Design Islamique",
      icone: <Palette className="w-8 h-8" />,
      couleur: "bg-purple-600", 
      description: "Interface utilisateur respectueuse de l'esthétique islamique",
      domaines: ["Design System", "Prototypage Figma", "Responsive Design", "Accessibilité Web"]
    },
    {
      nom: "Coaching Sportif Hommes",
      icone: <Dumbbell className="w-8 h-8" />,
      couleur: "bg-green-600",
      description: "Section masculine du Centre Sport Mondial dirigé par Souheila",
      domaines: ["Musculation Halal", "Préparation Physique", "Nutrition Sportive", "Développement Mental"]
    }
  ];

  const projetsWeb = [
    {
      nom: "CED Bank Mobile",
      statut: "Production",
      techno: ["React Native", "TypeScript", "Node.js"],
      description: "Application bancaire islamique 0% Riba",
      url: "/ced-bank-mobile"
    },
    {
      nom: "Institut CED Academy",
      statut: "Production",
      techno: ["React", "PostgreSQL", "Express"],
      description: "Plateforme formations islamiques certifiées",
      url: "/institut-ced-academy"
    },
    {
      nom: "Al-Aman Takaful",
      statut: "Production", 
      techno: ["Vue.js", "Node.js", "MongoDB"],
      description: "Assurance islamique conforme Sharia",
      url: "/al-aman-takaful"
    },
    {
      nom: "TechForAll Platform",
      statut: "Développement",
      techno: ["Next.js", "Prisma", "Stripe"],
      description: "Économie solidaire et dons technologiques",
      url: "/techforall"
    }
  ];

  const programmesCoaching = [
    {
      type: "Force & Endurance Halal",
      duree: "3 mois",
      prix: "250 CHF/mois",
      description: "Développement physique selon valeurs islamiques",
      participants: 156
    },
    {
      type: "Préparation Compétition Elite",
      duree: "6 mois", 
      prix: "400 CHF/mois",
      description: "Excellence sportive masculine haute performance",
      participants: 89
    },
    {
      type: "Coaching Équipe Entrepreneurs",
      duree: "4 mois",
      prix: "350 CHF/mois",
      description: "Forme physique pour entrepreneurs musulmans",
      participants: 234
    }
  ];

  const servicesWeb = [
    {
      service: "Développement Site Web HalalTech™",
      duree: "2-6 mois",
      prix: "15,000-50,000 CHF",
      description: "Sites web complets conformes valeurs islamiques"
    },
    {
      service: "Application Mobile iOS/Android",
      duree: "4-8 mois", 
      prix: "25,000-80,000 CHF",
      description: "Apps natives optimisées performance et UX"
    },
    {
      service: "Consultation UX/UI Design",
      duree: "1-2 semaines",
      prix: "5,000-15,000 CHF",
      description: "Audit et optimisation interfaces utilisateur"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Principal */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-green-600 rounded-full mb-6">
            <Code className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Malik Ketar
          </h1>
          <p className="text-2xl text-gray-600 mb-4">
            Développement Web HalalTech™ • UX/UI Design • Coaching Sportif Hommes
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <Badge className="bg-blue-100 text-blue-700 text-lg px-4 py-2">
              <Code className="w-5 h-5 mr-2" />
              Expert Full-Stack
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 text-lg px-4 py-2">
              <Palette className="w-5 h-5 mr-2" />
              UX/UI Designer
            </Badge>
            <Badge className="bg-green-100 text-green-700 text-lg px-4 py-2">
              <Dumbbell className="w-5 h-5 mr-2" />
              Coach Sportif
            </Badge>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            <strong>Responsable Développement Web HalalTech™</strong> sous supervision de Yakoubi Yamina (Dirigeante Club Empreinte Digitale) • 
            <strong>Époux de Souheila Yakoubi-Ozel</strong> • Directeur Section Masculine Centre Sport Mondial
          </p>
        </div>

        <Tabs defaultValue="developpement" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="developpement">💻 Développement Web</TabsTrigger>
            <TabsTrigger value="design">🎨 UX/UI Design</TabsTrigger>
            <TabsTrigger value="coaching">💪 Coaching Hommes</TabsTrigger>
            <TabsTrigger value="organisation">🏢 Organisation</TabsTrigger>
          </TabsList>

          {/* Onglet Développement Web */}
          <TabsContent value="developpement">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">
                🚀 Projets HalalTech™ en Production
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {projetsWeb.map((projet, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500 hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-xl text-blue-700">{projet.nom}</CardTitle>
                        <Badge className={projet.statut === "Production" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}>
                          {projet.statut}
                        </Badge>
                      </div>
                      <p className="text-gray-600">{projet.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {projet.techno.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Link href={projet.url}>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          Voir le Projet
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-center text-blue-700">
                  💼 Services Développement Web Disponibles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {servicesWeb.map((service, index) => (
                    <div key={index} className="p-4 bg-white rounded border border-blue-200">
                      <h4 className="font-semibold text-blue-600 mb-2">{service.service}</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duree}
                        </div>
                        <div className="text-lg font-bold text-green-600">{service.prix}</div>
                        <p className="text-xs">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet UX/UI Design */}
          <TabsContent value="design">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-700">🎨 Expertise Design System</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 mr-2" />
                      <span>Design conforme valeurs islamiques authentiques</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 mr-2" />
                      <span>Interface responsive tous écrans (mobile-first)</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 mr-2" />
                      <span>Accessibilité WCAG 2.1 AA complète</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 mr-2" />
                      <span>Support RTL pour arabe et langues orientales</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 mr-2" />
                      <span>Composants réutilisables cohérents</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-700">🛠️ Outils & Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Design</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Figma Pro</li>
                        <li>• Adobe Creative Suite</li>
                        <li>• Sketch</li>
                        <li>• Framer</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Développement</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Tailwind CSS</li>
                        <li>• Radix UI</li>
                        <li>• Framer Motion</li>
                        <li>• shadcn/ui</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-center text-green-700">
                  🏆 Projets Design Réalisés - Écosystème CED
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div className="p-4 bg-white rounded">
                    <Monitor className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <h4 className="font-semibold">Interface CED Bank</h4>
                    <p className="text-sm text-gray-600">Banking islamique intuitif</p>
                  </div>
                  <div className="p-4 bg-white rounded">
                    <Smartphone className="w-8 h-8 mx-auto mb-2 text-green-600" />
                    <h4 className="font-semibold">Apps Mobiles</h4>
                    <p className="text-sm text-gray-600">iOS/Android optimisées</p>
                  </div>
                  <div className="p-4 bg-white rounded">
                    <Globe className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                    <h4 className="font-semibold">Écosystème Web</h4>
                    <p className="text-sm text-gray-600">15+ plateformes interconnectées</p>
                  </div>
                  <div className="p-4 bg-white rounded">
                    <Palette className="w-8 h-8 mx-auto mb-2 text-pink-600" />
                    <h4 className="font-semibold">Design System</h4>
                    <p className="text-sm text-gray-600">HalalTech™ unifié</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Coaching Hommes */}
          <TabsContent value="coaching">
            <div className="mb-8">
              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-center text-green-700">
                    🏃‍♂️ Section Masculine - Centre Sport Mondial Halal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-white rounded border border-green-200">
                      <h4 className="font-semibold text-blue-700 mb-3">👫 Coordination avec Section Féminine</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Directrice Générale :</strong> Souheila Yakoubi-Ozel</li>
                        <li>• Programmes coordonnés respectant séparation islamique</li>
                        <li>• Standards d'excellence communs</li>
                        <li>• Philosophie sportive islamique unifiée</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-white rounded border border-green-200">
                      <h4 className="font-semibold text-green-700 mb-3">🏆 Spécialités Coaching Masculin</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Musculation et force fonctionnelle</li>
                        <li>• Préparation mentale compétition</li>
                        <li>• Nutrition sportive halal hommes</li>
                        <li>• Leadership et esprit d'équipe</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {programmesCoaching.map((programme, index) => (
                <Card key={index} className="border-2 border-green-200 hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg text-green-700">{programme.type}</CardTitle>
                    <div className="text-3xl font-bold text-green-600">{programme.prix}</div>
                    <div className="text-sm text-gray-600">({programme.duree})</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center mb-4">{programme.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-1" />
                        {programme.participants} participants
                      </div>
                      <Badge className="bg-green-100 text-green-700">Halal Certifié</Badge>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      S'inscrire Programme
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 border-2 border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-center text-yellow-700">
                  📍 Centre Sportif Physique - Projet Futur
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-yellow-600 mr-2" />
                  <span className="text-yellow-700 font-medium">Genève, Suisse 🇨🇭</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Centre sportif physique en projet avec espaces séparés hommes/femmes respectant valeurs islamiques
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="p-3 bg-blue-50 rounded">
                    <strong>Section Masculine (Malik Ketar)</strong><br/>
                    Musculation • Sports Combat • Préparation Physique
                  </div>
                  <div className="p-3 bg-pink-50 rounded">
                    <strong>Section Féminine (Souheila)</strong><br/>
                    Fitness • Santé • Nutrition • Diététique
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Organisation */}
          <TabsContent value="organisation">
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-center text-gray-700">
                  🏢 Organisation Hiérarchique CED HalalTech™
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Direction Générale */}
                  <div className="p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg border-2 border-yellow-300">
                    <h3 className="text-xl font-bold text-center text-yellow-700 mb-4">
                      🕌 Direction Générale
                    </h3>
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-800">Yakoubi Yamina</h4>
                      <p className="text-yellow-600 font-medium">Dirigeante Unique Club Empreinte Digitale HalalTech™</p>
                      <p className="text-sm text-gray-600 mt-2">
                        Seule personne qui décide de tout • Vision stratégique • Supervision générale
                      </p>
                    </div>
                  </div>

                  {/* Équipe Dirigeante */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                      <h4 className="font-semibold text-pink-700 mb-3">👩‍⚕️ Souheila Yakoubi-Ozel</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Secteur SANTÉ</strong> (domaine d'expertise)</li>
                        <li>• Co-Direction générale</li>
                        <li>• Propriétaire exclusive IA Coaching Halal</li>
                        <li>• Directrice Centre Sport Mondial Féminin</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-700 mb-3">⚖️ Hanaé-Dénise Ozel</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Jurisprudence Islamique</strong></li>
                        <li>• Finance Islamique</li>
                        <li>• Psychologie Islamique Halal pour Femmes</li>
                        <li>• Collaboration privilégiée avec Souheila</li>
                      </ul>
                    </div>
                  </div>

                  {/* Malik Ketar */}
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-3">💻 Malik Ketar (Époux de Souheila)</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div>
                        <strong className="text-blue-600">Développement Web HalalTech™</strong>
                        <ul className="mt-1 space-y-1">
                          <li>• Full-Stack Development</li>
                          <li>• Architecture technique</li>
                          <li>• Supervision projets web</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-purple-600">UX/UI Design</strong>
                        <ul className="mt-1 space-y-1">
                          <li>• Design System HalalTech™</li>
                          <li>• Interface utilisateur</li>
                          <li>• Expérience utilisateur</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-green-600">Coaching Sportif Hommes</strong>
                        <ul className="mt-1 space-y-1">
                          <li>• Section masculine</li>
                          <li>• Coordination avec Souheila</li>
                          <li>• Standards excellence</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Note Importante */}
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-700 mb-2">⚠️ Note Importante</h4>
                    <p className="text-sm text-gray-600">
                      Malik Ketar travaille <strong>sous supervision directe de Yakoubi Yamina</strong> qui reste 
                      la seule dirigeante et décisionnaire du Club Empreinte Digitale HalalTech™. 
                      Toutes les décisions techniques majeures sont validées par la Direction Générale.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Accès Rapide */}
        <div className="mt-12">
          <Card className="border-2 border-yellow-300 bg-yellow-50">
            <CardContent className="text-center py-8">
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">
                🚀 Accès Direct Écosystème CED
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/sante-souheila-yakoubi">
                  <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                    🌿 Espace Santé Souheila
                  </Button>
                </Link>
                <Link href="/jurisprudence-hanae-ozel">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    ⚖️ Jurisprudence Hanaé-Dénise
                  </Button>
                </Link>
                <Link href="/sports-haut-niveau">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    🏆 Sports Haut Niveau
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 text-center space-x-4">
          <Link href="/ia-coaching-halal">
            <Button variant="outline" size="lg">
              IA Coaching Halal
            </Button>
          </Link>
          <Link href="/ced-halal-home">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Retour Écosystème CED
            </Button>
          </Link>
        </div>
      </div>

      {/* Copyright Protection */}
      <div className="mt-16 py-8 border-t-2 border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-lg font-medium">
            © Yakoubi Yamina - CED HalalTech™ • Développement Web & Coaching Malik Ketar
          </p>
          <p className="text-gray-500 text-sm mt-2">
            🇨🇭 Expertise technique HalalTech™ • Données hébergées en Suisse • Conforme RGPD & LPD
          </p>
          <p className="text-green-600 text-sm mt-2 font-medium">
            Supervision Générale : Yakoubi Yamina (Dirigeante Unique Club Empreinte Digitale)
          </p>
        </div>
      </div>
    </div>
  );
}