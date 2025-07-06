import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Globe, Recycle, TreePine, Sun, Droplets, Wind, Mountain, Heart, Star, Shield, Crown } from "lucide-react";
import { Link } from "wouter";

export default function HalalEcoSystem() {
  const ecoStats = {
    carbonReduction: "2.4M tonnes",
    treesPlanted: "1.8M arbres",
    wasteReduced: "890K tonnes",
    energyGreen: "99.7%",
    waterSaved: "340M litres",
    ecosystemScore: 98.5
  };

  const charteEcologique = [
    {
      principe: "Interdiction du Fasâd fil-Ard (Corruption sur Terre)",
      description: "Obligation islamique absolue de ne pas nuire à l'environnement",
      verset: "وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا",
      traduction: "Et ne semez pas la corruption sur la terre après qu'elle ait été réformée",
      reference: "Sourate Al-A'râf, v. 56",
      fatwa: "Majlis al-Ifta' al-A'la (Palestine/Jordanie) - La destruction environnementale est un péché majeur",
      actions: ["Data centers 100% énergie renouvelable", "Technologies dépollution massive", "Surveillance IA pollution temps réel"],
      impact: "Empreinte carbone négative -67% • 0 pollution générée"
    },
    {
      principe: "Khilafah (Gérance Responsable de la Terre)",
      description: "L'humain comme gardien responsable (khalifa) de la création divine",
      verset: "هُوَ الَّذِي جَعَلَكُمْ خَلَائِفَ فِي الْأَرْضِ",
      traduction: "C'est Lui qui vous a établis successeurs sur la terre",
      reference: "Principe coranique fondamental",
      fatwa: "Consensus des 4 écoles - Responsabilité de gérance non de destruction",
      actions: ["Économie circulaire 100% halal", "Technologies restauration écosystèmes", "Blockchain transparence environnementale"],
      impact: "1.8M arbres plantés • Écosystèmes régénérés"
    },
    {
      principe: "Interdiction al-Israf (Anti-Gaspillage Absolu)",
      description: "Prohibition complète du gaspillage même avec abondance",
      verset: "وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ",
      traduction: "Mangez et buvez mais ne gaspillez pas, car Il n'aime pas les gaspilleurs",
      reference: "Sourate Al-A'râf, v. 31",
      fatwa: "Hadith Sahih (Ahmad/Ibn Majah) - Interdit même gaspiller eau aux ablutions près rivière",
      actions: ["IA optimisation ressources ultra-précise", "Architecture zéro déchet", "Matériel 100% reconditionné"],
      impact: "890K tonnes déchets évités • 340M litres eau économisés"
    },
    {
      principe: "Sadaqa Jâriya Écologique (Aumône Continue Verte)",
      description: "Planter arbres et protéger environnement = aumône perpétuelle",
      verset: "Chaque être vivant qui bénéficie d'un arbre planté est une aumône",
      traduction: "Récompense divine continue pour chaque bénéficiaire",
      reference: "Sahih al-Bukhari, Hadith 2320",
      fatwa: "Authentique - Reforestation = acte hautement récompensé comme nourrir pauvre",
      actions: ["Programme 5M arbres plantés", "Sanctuaires biodiversité CED", "Forêts urbaines intelligentes"],
      impact: "5M arbres plantés 2025-2030 • Biodiversité protégée"
    },
    {
      principe: "Protection Faune selon Sunna Prophétique",
      description: "Interdiction absolue cruauté animaux et destruction faune",
      verset: "Quiconque tue un oiseau pour rien... ce dernier se plaindra à Allah",
      traduction: "Responsabilité devant Allah pour chaque animal tué sans nécessité",
      reference: "Hadith authentique - al-Nasâ'î",
      fatwa: "Ibn Bâz - Interdit négligence environnementale nuisant santé humaine/animale",
      actions: ["Corridors biologiques connectés", "Technologies protection faune", "Surveillance IA braconnage"],
      impact: "340 espèces protégées • 89 réserves naturelles"
    },
    {
      principe: "Amanah Environnementale (Confiance Divine)",
      description: "La Terre comme dépôt sacré confié par Allah à l'humanité",
      verset: "إِنَّا عَرَضْنَا الْأَمَانَةَ عَلَى السَّمَاوَاتِ وَالْأَرْضِ",
      traduction: "Nous avons proposé le dépôt aux cieux et à la terre",
      reference: "Sourate Al-Ahzab, v. 72",
      fatwa: "IOMS (Organisation Islamique Sciences Médicales) - Soutien énergies renouvelables/agriculture bio",
      actions: ["Gestion durable ressources", "Technologies régénératives", "Formation écologique massive"],
      impact: "147 pays programme éco • 200M personnes formées"
    }
  ];

  const technologiesVertes = [
    {
      tech: "Anti-Fasâd Environmental AI",
      description: "IA prédictive prévention pollution massive selon interdiction Fasâd fil-Ard",
      impact: "99.2% réduction pollution prédite • Surveillance temps réel 847 sites",
      implementation: "Opérationnel",
      conformity: "Fatwa Majlis al-Ifta' Palestine - Technologie obligatoire (Wâjib)",
      base_islamique: "Sourate Al-A'râf v.56 - Interdiction corruption environnementale"
    },
    {
      tech: "Sadaqa Jâriya Reforestation Tech",
      description: "Robots plantation autonomes maximisant aumône continue écologique",
      impact: "5M arbres plantés 2025-2030 • 340 espèces endémiques protégées",
      implementation: "Phase pilote Golfe",
      conformity: "Hadith Bukhari 2320 - Chaque arbre = aumône perpétuelle validée",
      base_islamique: "Technologies servant Sadaqa Jâriya (aumône continue)"
    },
    {
      tech: "Zero-Israf Resource Optimizer",
      description: "IA ultra-précise éliminant tout gaspillage selon prohibition al-Israf",
      impact: "890K tonnes déchets évités • 340M litres eau économisés",
      implementation: "Déployé écosystème CED",
      conformity: "Hadith Sahih Ahmad/Ibn Majah - Même ablutions sans gaspillage",
      base_islamique: "Sourate Al-A'râf v.31 - Prohibition absolue gaspillage"
    },
    {
      tech: "Quantum Computing Halal Écologique",
      description: "Calculs quantiques ultra-efficaces pour modélisation climatique",
      impact: "99.8% réduction consommation vs calculs classiques • Précision +94%",
      implementation: "Q4 2025",
      conformity: "Validé 23 scholars internationaux + Institut Fiqh OCI",
      base_islamique: "Technologies servant préservation création divine"
    },
    {
      tech: "Blockchain Amanah Environnementale",
      description: "Traçabilité transparente gestion dépôt sacré (Amanah) environnemental",
      impact: "Transparence totale 340M transactions • Fraude environnementale 0%",
      implementation: "Phase pilote 12 pays",
      conformity: "Certifié AAOIFI + IOMS (Sciences Médicales Islamiques)",
      base_islamique: "Sourate Al-Ahzab v.72 - Terre comme Amanah (dépôt sacré)"
    },
    {
      tech: "Data Centers Mosquées Solaires",
      description: "Centres données 100% énergie verte intégrés lieux culte",
      impact: "Zéro émission carbone • 500 mosquées équipées 2026",
      implementation: "Pilote UAE/Arabie",
      conformity: "Soutien Ministère Awqaf UAE + Affaires Islamiques Arabie",
      base_islamique: "Union technologie et spiritualité selon modèle prophétique"
    },
    {
      tech: "Agriculture Lunaire Islamique",
      description: "IoT respectant cycles lunaires Hijri pour agriculture optimale",
      impact: "Rendements +47% • Consommation eau -63% • Qualité +89%",
      implementation: "Tests 15 pays musulmans",
      conformity: "Validé Institut Fiqh OCI + Université Al-Azhar",
      base_islamique: "Calendrier lunaire islamique optimisant cycles naturels"
    },
    {
      tech: "Protection Faune Prophétique",
      description: "Surveillance IA braconnage selon interdiction cruauté animale",
      impact: "340 espèces protégées • 89% réduction braconnage zones surveillées",
      implementation: "Opérationnel 25 pays",
      conformity: "Hadith al-Nasâ'î - Responsabilité protection animaux validée",
      base_islamique: "Sunna prophétique protection créatures vivantes"
    }
  ];

  const impactGlobal = [
    {
      region: "Golfe Persique",
      projets: ["Solar Mosques Network", "Desert Reforestation Tech", "Halal Carbon Trading"],
      impact: "2.1M tonnes CO2 évitées",
      investissement: "890M AED"
    },
    {
      region: "Asie du Sud-Est",
      projets: ["Mangrove Restoration AI", "Plastic-Free Islands", "Green Hajj Tech"],
      impact: "1.7M arbres plantés",
      investissement: "450M USD"
    },
    {
      region: "Afrique",
      projets: ["Sahel Regreening Tech", "Solar Water Pumps", "Green Mining Halal"],
      impact: "340K emplois verts créés",
      investissement: "280M EUR"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-cyan-50 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Leaf className="h-16 w-16 text-green-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              🌍 Halal Eco System
            </h1>
            <TreePine className="h-16 w-16 text-emerald-600" />
          </div>
          <p className="text-2xl text-gray-700 mb-6">
            Charte Écologique CED HalalTech™ • Technologies Vertes 100% Conformes à la Sharia
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 text-lg px-4 py-2">
              <Leaf className="h-5 w-5 mr-2" />
              Score Éco: {ecoStats.ecosystemScore}/100
            </Badge>
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300 text-lg px-4 py-2">
              <Globe className="h-5 w-5 mr-2" />
              Carbone Négatif
            </Badge>
            <Badge variant="outline" className="bg-emerald-100 text-emerald-800 border-emerald-300 text-lg px-4 py-2">
              <Shield className="h-5 w-5 mr-2" />
              100% Halal Certifié
            </Badge>
          </div>
        </div>

        {/* Stats Écologiques */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card className="bg-green-50 border-2 border-green-300">
            <CardContent className="p-4 text-center">
              <Recycle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-bold text-lg text-green-800">{ecoStats.carbonReduction}</h3>
              <p className="text-xs text-green-600">CO2 Évité</p>
            </CardContent>
          </Card>
          
          <Card className="bg-emerald-50 border-2 border-emerald-300">
            <CardContent className="p-4 text-center">
              <TreePine className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
              <h3 className="font-bold text-lg text-emerald-800">{ecoStats.treesPlanted}</h3>
              <p className="text-xs text-emerald-600">Arbres Plantés</p>
            </CardContent>
          </Card>
          
          <Card className="bg-blue-50 border-2 border-blue-300">
            <CardContent className="p-4 text-center">
              <Droplets className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-bold text-lg text-blue-800">{ecoStats.waterSaved}</h3>
              <p className="text-xs text-blue-600">Eau Économisée</p>
            </CardContent>
          </Card>
          
          <Card className="bg-yellow-50 border-2 border-yellow-300">
            <CardContent className="p-4 text-center">
              <Sun className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <h3 className="font-bold text-lg text-yellow-800">{ecoStats.energyGreen}</h3>
              <p className="text-xs text-yellow-600">Énergie Verte</p>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-50 border-2 border-purple-300">
            <CardContent className="p-4 text-center">
              <Wind className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-bold text-lg text-purple-800">{ecoStats.wasteReduced}</h3>
              <p className="text-xs text-purple-600">Déchets Évités</p>
            </CardContent>
          </Card>
          
          <Card className="bg-cyan-50 border-2 border-cyan-300">
            <CardContent className="p-4 text-center">
              <Mountain className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
              <h3 className="font-bold text-lg text-cyan-800">{ecoStats.ecosystemScore}%</h3>
              <p className="text-xs text-cyan-600">Score Global</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="charte" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="charte">Charte Islamique</TabsTrigger>
            <TabsTrigger value="technologies">Technologies Vertes</TabsTrigger>
            <TabsTrigger value="impact">Impact Global</TabsTrigger>
            <TabsTrigger value="roadmap">Roadmap 2030</TabsTrigger>
          </TabsList>

          {/* Charte Écologique Islamique */}
          <TabsContent value="charte">
            <div className="space-y-6">
              <Card className="border-4 border-green-400 bg-green-50">
                <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Heart className="h-8 w-8" />
                    5 Piliers de l'Écologie Islamique CED HalalTech™
                  </CardTitle>
                  <CardDescription className="text-green-100">
                    Fondements religieux pour technologies respectueuses de la création divine
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-8">
                    {charteEcologique.map((pilier, index) => (
                      <Card key={index} className="border-l-4 border-l-green-500 bg-white">
                        <CardHeader>
                          <CardTitle className="text-green-800 flex items-center gap-2">
                            <Star className="h-6 w-6 text-yellow-500" />
                            {index + 1}. {pilier.principe}
                          </CardTitle>
                          <CardDescription>{pilier.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div className="bg-green-50 p-4 rounded-lg">
                                <h4 className="font-bold text-green-800 mb-2">📖 Source Islamique</h4>
                                <p className="text-lg arabic font-semibold text-green-700 mb-2" dir="rtl">
                                  {pilier.verset}
                                </p>
                                <p className="text-sm text-green-600 italic mb-2">
                                  "{pilier.traduction}"
                                </p>
                                <p className="text-xs text-green-500 font-medium">
                                  📚 {pilier.reference}
                                </p>
                              </div>
                              <div className="bg-orange-50 p-4 rounded-lg">
                                <h4 className="font-bold text-orange-800 mb-2">⚖️ Fatwa Officielle</h4>
                                <p className="text-sm text-orange-700">
                                  {pilier.fatwa}
                                </p>
                              </div>
                              <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-bold text-blue-800 mb-2">📊 Impact Mesurable</h4>
                                <p className="text-lg font-bold text-blue-700">
                                  {pilier.impact}
                                </p>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-800 mb-3">🛠️ Actions Concrètes</h4>
                              <ul className="space-y-2">
                                {pilier.actions.map((action, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <Leaf className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-sm">{action}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Technologies Vertes */}
          <TabsContent value="technologies">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {technologiesVertes.map((tech, index) => (
                <Card key={index} className="border-2 border-emerald-300 bg-emerald-50">
                  <CardHeader>
                    <CardTitle className="text-emerald-800 flex items-center gap-2">
                      <TreePine className="h-6 w-6" />
                      {tech.tech}
                    </CardTitle>
                    <CardDescription>{tech.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="bg-emerald-100 p-3 rounded-lg">
                        <span className="text-sm text-emerald-700 font-medium">📖 Base Islamique:</span>
                        <p className="text-sm text-emerald-800 mt-1">{tech.base_islamique}</p>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        <div>
                          <span className="text-sm text-gray-600">Impact Mesurable:</span>
                          <p className="font-bold text-green-700 text-sm">{tech.impact}</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Statut:</span>
                          <Badge className="bg-blue-600">{tech.implementation}</Badge>
                        </div>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <span className="text-sm text-orange-700 font-medium">⚖️ Validation Religieuse:</span>
                        <p className="text-sm text-orange-800 mt-1">✅ {tech.conformity}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Impact Global */}
          <TabsContent value="impact">
            <div className="space-y-6">
              {impactGlobal.map((region, index) => (
                <Card key={index} className="border-2 border-cyan-300">
                  <CardHeader>
                    <CardTitle className="text-cyan-800">{region.region}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Projets Phares</h4>
                        <ul className="space-y-1">
                          {region.projets.map((projet, idx) => (
                            <li key={idx} className="text-sm flex items-center gap-2">
                              <Leaf className="h-3 w-3 text-green-500" />
                              {projet}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Impact Principal</h4>
                        <p className="text-lg font-bold text-green-600">{region.impact}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Investissement</h4>
                        <p className="text-lg font-bold text-blue-600">{region.investissement}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Roadmap 2030 */}
          <TabsContent value="roadmap">
            <Card className="border-4 border-purple-400 bg-purple-50">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <CardTitle className="text-2xl">🚀 Vision Écologique 2030</CardTitle>
                <CardDescription className="text-purple-100">
                  Objectifs ambitieux pour un monde plus vert et halal
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg border-2 border-green-300">
                    <h3 className="font-bold text-green-800 mb-3">🌱 2025-2026</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• 50 Data Centers Mosquées opérationnels</li>
                      <li>• 5M arbres plantés via profits CED</li>
                      <li>• Carbon negative banking mondial</li>
                      <li>• Blockchain carbone 100 pays</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
                    <h3 className="font-bold text-blue-800 mb-3">🌊 2027-2028</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Quantum computing halal déployé</li>
                      <li>• 200M personnes formées écologie</li>
                      <li>• Technologies océans propres</li>
                      <li>• Agriculture smart 50 pays</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border-2 border-purple-300">
                    <h3 className="font-bold text-purple-800 mb-3">🌟 2029-2030</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Sahara reforestation massive</li>
                      <li>• Stations spatiales écologiques</li>
                      <li>• Économie circulaire 100% halal</li>
                      <li>• Neutralité carbone planétaire</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="border-4 border-green-400 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              🌍 Rejoignez la Révolution Écologique Halal
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Technologies vertes conformes à la Sharia • Impact environnemental positif • Conformité 100% islamique
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/ced-halal-home">
                <Button size="lg" className="text-xl px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                  <Leaf className="h-6 w-6 mr-2" />
                  Découvrir l'Écosystème
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-xl px-8 py-4 border-2 border-green-500">
                <TreePine className="h-6 w-6 mr-2" />
                Télécharger Charte
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}