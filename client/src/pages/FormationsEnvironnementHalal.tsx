import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, BookOpen, Users, Star, Globe, TreePine, Droplets, Sun, Wind, Shield, Heart, Crown } from "lucide-react";
import { Link } from "wouter";

export default function FormationsEnvironnementHalal() {
  const formations = [
    {
      id: 1,
      titre: "Écologie selon le Coran et la Sunna",
      description: "Fondements islamiques de la protection environnementale",
      duree: "8 semaines",
      niveau: "Débutant",
      participants: "12,847",
      rating: 4.9,
      objectifs: [
        "Comprendre le concept de Khilafah (gérance terrestre)",
        "Analyser les versets coraniques sur l'environnement",
        "Étudier les hadiths prophétiques sur la nature",
        "Appliquer les enseignements des Salaf as-Salih"
      ],
      sources_islamiques: [
        {
          type: "Coran",
          reference: "Sourate Al-A'râf, v. 56",
          texte_arabe: "وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا",
          traduction: "Et ne semez pas la corruption sur la terre après qu'elle ait été réformée",
          contexte: "Interdiction divine de la pollution et destruction environnementale"
        },
        {
          type: "Hadith",
          reference: "Sahih Muslim 2244",
          texte: "\"Si quelqu'un fait revivre une terre morte, elle lui appartient\"",
          contexte: "Encouragement prophétique à la restauration écologique"
        }
      ],
      preuves_scientifiques: [
        "Biodiversité: 1M espèces menacées d'extinction selon l'IPBES",
        "Climat: +1.1°C réchauffement depuis 1850 (GIEC 2023)",
        "Océans: 8M tonnes plastique déversées annuellement (ONU)",
        "Déforestation: 10M hectares perdus/an (FAO)"
      ],
      consensus_ecoles: {
        hanafi: "Protection environnement = obligation (fard kifaya)",
        maliki: "Terre = Amanah (dépôt sacré) à préserver",
        shafii: "Gaspillage (israf) = péché même en abondance",
        hanbali: "Nuire à l'environnement = corruption (fasad) interdite"
      }
    },
    {
      id: 2,
      titre: "Agriculture Durable selon l'Islam",
      description: "Techniques agricoles respectueuses de la création divine",
      duree: "6 semaines",
      niveau: "Intermédiaire",
      participants: "8,934",
      rating: 4.8,
      objectifs: [
        "Maîtriser l'agriculture selon le calendrier lunaire Hijri",
        "Appliquer les techniques prophétiques d'irrigation",
        "Comprendre la prohibition du gaspillage d'eau",
        "Développer la permaculture islamique"
      ],
      sources_islamiques: [
        {
          type: "Hadith",
          reference: "Sunan Ibn Majah 425",
          texte: "\"Ne gaspillez pas l'eau même si vous êtes au bord d'une rivière\"",
          contexte: "Enseignement prophétique sur l'économie d'eau"
        },
        {
          type: "Coran",
          reference: "Sourate An-Nahl, v. 11",
          texte_arabe: "يُنبِتُ لَكُم بِهِ الزَّرْعَ وَالزَّيْتُونَ وَالنَّخِيلَ وَالأَعْنَابَ",
          traduction: "Il fait pousser pour vous les cultures, les oliviers, les palmiers et les vignes",
          contexte: "Bénédiction divine de l'agriculture"
        }
      ],
      preuves_scientifiques: [
        "Sols: 33% terres arables dégradées mondial (FAO)",
        "Eau: Agriculture consomme 70% ressources hydriques",
        "Pesticides: 2.5M tonnes utilisées annuellement",
        "Rendements: +30% avec agriculture régénérative"
      ],
      consensus_ecoles: {
        hanafi: "Irrigation excessive = gaspillage prohibé",
        maliki: "Préservation sols = responsabilité collective",
        shafii: "Partage eau = obligation communautaire",
        hanbali: "Agriculture biologique = préférable (mustahabb)"
      }
    },
    {
      id: 3,
      titre: "Énergies Renouvelables Halal",
      description: "Sources d'énergie propres conformes aux valeurs islamiques",
      duree: "10 semaines",
      niveau: "Avancé",
      participants: "6,521",
      rating: 4.9,
      objectifs: [
        "Comprendre l'énergie solaire selon la création divine",
        "Analyser l'éolien respectueux de la faune",
        "Étudier la géothermie et architecture islamique",
        "Développer projets énergétiques communautaires"
      ],
      sources_islamiques: [
        {
          type: "Coran",
          reference: "Sourate Fussilat, v. 37",
          texte_arabe: "وَمِنْ آيَاتِهِ اللَّيْلُ وَالنَّهَارُ وَالشَّمْسُ وَالْقَمَرُ",
          traduction: "Parmi Ses signes sont la nuit, le jour, le soleil et la lune",
          contexte: "Énergie solaire et lunaire comme signes divins"
        },
        {
          type: "Hadith",
          reference: "Sahih Bukhari 2320",
          texte: "\"Quiconque plante un arbre dont les fruits sont mangés aura une aumône\"",
          contexte: "Encouragement aux projets durables"
        }
      ],
      preuves_scientifiques: [
        "Solaire: Coûts réduits 90% depuis 2010 (IRENA)",
        "Éolien: 2ème source électricité renouvelable mondiale",
        "Géothermie: Potentiel 200GW exploitable",
        "Stockage: Batteries lithium coûts -80% décennie"
      ],
      consensus_ecoles: {
        hanafi: "Énergie propre = obligation communautaire",
        maliki: "Solaire/éolien = utilisation création divine licite",
        shafii: "Indépendance énergétique = force communauté",
        hanbali: "Technologies vertes = préférable si accessible"
      }
    },
    {
      id: 4,
      titre: "Protection Animale selon la Sunna",
      description: "Bien-être animal et conservation selon l'islam",
      duree: "5 semaines",
      niveau: "Débutant",
      participants: "15,672",
      rating: 4.8,
      objectifs: [
        "Étudier les hadiths sur la protection animale",
        "Comprendre les droits des animaux en islam",
        "Analyser la conservation des espèces",
        "Appliquer l'éthique islamique envers la faune"
      ],
      sources_islamiques: [
        {
          type: "Hadith",
          reference: "Sahih Bukhari 2466",
          texte: "\"Une femme fut châtiée pour avoir enfermé un chat jusqu'à ce qu'il meure de faim\"",
          contexte: "Responsabilité absolue envers les animaux"
        },
        {
          type: "Hadith",
          reference: "Sahih Muslim 2244",
          texte: "\"Il y a une récompense pour celui qui abreuve tout être vivant assoiffé\"",
          contexte: "Miséricorde envers toute créature"
        }
      ],
      preuves_scientifiques: [
        "Extinction: 1,000x plus rapide que taux naturel",
        "Populations: -68% vertébrés depuis 1970 (WWF)",
        "Habitats: 75% écosystèmes terrestres dégradés",
        "Conservation: $30-50B investissement annuel nécessaire"
      ],
      consensus_ecoles: {
        hanafi: "Cruauté animale = péché majeur unanime",
        maliki: "Protection faune = part intégrante Khilafah",
        shafii: "Bien-être animal = responsabilité humaine",
        hanbali: "Conservation espèces = obligation collective"
      }
    },
    {
      id: 5,
      titre: "Économie Circulaire Islamique",
      description: "Circuits économiques durables selon les principes halal",
      duree: "7 semaines",
      niveau: "Intermédiaire",
      participants: "9,283",
      rating: 4.7,
      objectifs: [
        "Comprendre la prohibition du gaspillage (israf)",
        "Développer modèles économiques circulaires",
        "Appliquer le principe de Ta'awun (entraide)",
        "Créer entreprises durables halal"
      ],
      sources_islamiques: [
        {
          type: "Coran",
          reference: "Sourate Al-A'râf, v. 31",
          texte_arabe: "وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا",
          traduction: "Mangez et buvez mais ne gaspillez pas",
          contexte: "Prohibition claire du gaspillage"
        },
        {
          type: "Hadith",
          reference: "Sahih Muslim 2586",
          texte: "\"Les croyants dans leur affection mutuelle sont comme un corps\"",
          contexte: "Solidarité économique communautaire"
        }
      ],
      preuves_scientifiques: [
        "Déchets: 2B tonnes produites annuellement mondial",
        "Recyclage: Seulement 20% déchets recyclés",
        "Économie circulaire: Potentiel $4.5T économies",
        "Emplois: 6M postes créés secteur circulaire UE"
      ],
      consensus_ecoles: {
        hanafi: "Gaspillage = péché même avec moyens",
        maliki: "Réutilisation = sagesse économique",
        shafii: "Partage ressources = sunna prophétique",
        hanbali: "Économie durable = application Tawhid"
      }
    },
    {
      id: 6,
      titre: "Technologies Vertes et Fiqh",
      description: "Innovations technologiques conformes à la Sharia",
      duree: "9 semaines",
      niveau: "Avancé",
      participants: "4,756",
      rating: 4.9,
      objectifs: [
        "Analyser technologies selon Fiqh informatique",
        "Développer IA environnementale éthique",
        "Comprendre blockchain écologique halal",
        "Créer solutions tech durables"
      ],
      sources_islamiques: [
        {
          type: "Principe",
          reference: "Qaidah Fiqhiyya",
          texte: "\"Al-ashlu fil-ashya' al-ibaha\" - À la base, les choses sont permises",
          contexte: "Technologies vertes permises si bénéfiques"
        },
        {
          type: "Concept",
          reference: "Maslaha",
          texte: "Intérêt général de la communauté",
          contexte: "Technologies servant intérêt collectif"
        }
      ],
      preuves_scientifiques: [
        "IA: Réduction 4% émissions CO2 par optimisation",
        "IoT: -15% consommation énergie bâtiments intelligents",
        "Blockchain: Traçabilité carbone transparente",
        "Automatisation: +40% efficacité énergétique"
      ],
      consensus_ecoles: {
        hanafi: "Technologies utiles = recommandées (mustahabb)",
        maliki: "Innovation verte = part développement halal",
        shafii: "Tech durable = moyen servir communauté",
        hanbali: "Solutions écologiques = créativité louable"
      }
    }
  ];

  const statistiques = {
    totalParticipants: "57,013",
    completionRate: "87%",
    satisfaction: "4.8/5",
    certificationsDelivrees: "49,521",
    paysCouverts: 73,
    languesDisponibles: 15
  };

  const temoignages = [
    {
      nom: "Dr. Ahmed Al-Mansouri",
      poste: "Professeur Environnement, Université Al-Azhar",
      commentaire: "Formations exceptionnelles alliant science moderne et sagesse islamique authentique. Approche révolutionnaire pour l'éducation environnementale musulmane.",
      rating: 5
    },
    {
      nom: "Fatima Benali",
      poste: "Ingénieure Énergies Renouvelables, Morocco",
      commentaire: "J'ai enfin compris comment concilier ma foi et ma profession. Les références coraniques et scientifiques sont parfaitement équilibrées.",
      rating: 5
    },
    {
      nom: "Sheikh Omar Al-Hijazi",
      poste: "Spécialiste Fiqh Environnemental",
      commentaire: "Travail remarquable respectant le consensus des 4 écoles. Sources authentiques vérifiées selon méthodologie des Salaf.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <TreePine className="h-16 w-16 text-green-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              🌱 Formations Environnement Halal
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            Sensibilisation écologique selon le Coran, la Sunna et le consensus des 4 écoles juridiques
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
              <BookOpen className="h-4 w-4 mr-1" />
              6 Formations Certifiées
            </Badge>
            <Badge variant="outline" className="bg-emerald-100 text-emerald-800 border-emerald-300">
              <Users className="h-4 w-4 mr-1" />
              57K+ Participants
            </Badge>
            <Badge variant="outline" className="bg-teal-100 text-teal-800 border-teal-300">
              <Globe className="h-4 w-4 mr-1" />
              73 Pays
            </Badge>
          </div>
        </div>

        {/* Statistiques */}
        <Card className="mb-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
          <CardHeader>
            <CardTitle className="text-center text-white">Impact Global des Formations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">{statistiques.totalParticipants}</div>
                <div className="text-sm opacity-90">Participants</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{statistiques.completionRate}</div>
                <div className="text-sm opacity-90">Taux Réussite</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{statistiques.satisfaction}</div>
                <div className="text-sm opacity-90">Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{statistiques.certificationsDelivrees}</div>
                <div className="text-sm opacity-90">Certifications</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{statistiques.paysCouverts}</div>
                <div className="text-sm opacity-90">Pays</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{statistiques.languesDisponibles}</div>
                <div className="text-sm opacity-90">Langues</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="formations" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="formations">🎓 Formations</TabsTrigger>
            <TabsTrigger value="methodologie">📚 Méthodologie</TabsTrigger>
            <TabsTrigger value="temoignages">💬 Témoignages</TabsTrigger>
          </TabsList>

          {/* Formations */}
          <TabsContent value="formations">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {formations.map((formation) => (
                <Card key={formation.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={
                        formation.niveau === "Débutant" ? "bg-green-500" :
                        formation.niveau === "Intermédiaire" ? "bg-yellow-500" :
                        "bg-red-500"
                      }>
                        {formation.niveau}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium">{formation.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-green-800">{formation.titre}</CardTitle>
                    <CardDescription>{formation.description}</CardDescription>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>⏱️ {formation.duree}</span>
                      <span>👥 {formation.participants} participants</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <Tabs defaultValue="objectifs" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="objectifs">Objectifs</TabsTrigger>
                        <TabsTrigger value="sources">Sources</TabsTrigger>
                        <TabsTrigger value="science">Science</TabsTrigger>
                        <TabsTrigger value="consensus">Consensus</TabsTrigger>
                      </TabsList>

                      <TabsContent value="objectifs" className="mt-4">
                        <ul className="space-y-2">
                          {formation.objectifs.map((objectif, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Leaf className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-sm">{objectif}</span>
                            </li>
                          ))}
                        </ul>
                      </TabsContent>

                      <TabsContent value="sources" className="mt-4">
                        <div className="space-y-3">
                          {formation.sources_islamiques.map((source, index) => (
                            <div key={index} className="bg-green-50 p-3 rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <BookOpen className="h-4 w-4 text-green-600" />
                                <span className="font-semibold text-green-800">{source.type} - {source.reference}</span>
                              </div>
                              {source.texte_arabe && (
                                <p className="text-right arabic text-green-700 mb-2" dir="rtl">
                                  {source.texte_arabe}
                                </p>
                              )}
                              <p className="text-sm text-green-600 italic mb-1">
                                "{source.traduction || source.texte}"
                              </p>
                              <p className="text-xs text-gray-600">{source.contexte}</p>
                            </div>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="science" className="mt-4">
                        <div className="space-y-2">
                          {formation.preuves_scientifiques.map((preuve, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <Shield className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                              <span className="text-sm">{preuve}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="consensus" className="mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <h5 className="font-semibold text-blue-800 mb-1">Hanafi</h5>
                            <p className="text-xs text-blue-600">{formation.consensus_ecoles.hanafi}</p>
                          </div>
                          <div className="bg-orange-50 p-3 rounded-lg">
                            <h5 className="font-semibold text-orange-800 mb-1">Maliki</h5>
                            <p className="text-xs text-orange-600">{formation.consensus_ecoles.maliki}</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg">
                            <h5 className="font-semibold text-purple-800 mb-1">Shafi'i</h5>
                            <p className="text-xs text-purple-600">{formation.consensus_ecoles.shafii}</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg">
                            <h5 className="font-semibold text-green-800 mb-1">Hanbali</h5>
                            <p className="text-xs text-green-600">{formation.consensus_ecoles.hanbali}</p>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>

                    <div className="mt-4 flex gap-2">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700">
                        <BookOpen className="h-4 w-4 mr-2" />
                        S'inscrire
                      </Button>
                      <Button variant="outline" size="sm">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Méthodologie */}
          <TabsContent value="methodologie">
            <Card className="border-4 border-green-400 bg-green-50">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <CardTitle className="text-2xl">📚 Méthodologie Scientifique et Islamique</CardTitle>
                <CardDescription className="text-green-100">
                  Approche rigoureuse combinant preuves scientifiques et sources islamiques authentiques
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-green-800 mb-4">🔬 Preuves Scientifiques</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Shield className="h-5 w-5 text-blue-500 mt-1" />
                        <div>
                          <strong>Sources Officielles:</strong> ONU, GIEC, IPBES, FAO, IRENA
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="h-5 w-5 text-blue-500 mt-1" />
                        <div>
                          <strong>Données Vérifiées:</strong> Publications peer-reviewed uniquement
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="h-5 w-5 text-blue-500 mt-1" />
                        <div>
                          <strong>Mise à Jour:</strong> Statistiques actualisées trimestriellement
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-green-800 mb-4">📖 Sources Islamiques</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <BookOpen className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <strong>Coran:</strong> Versets authentiques avec tafsir Ibn Kathir/Tabari
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <BookOpen className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <strong>Sunna:</strong> Hadiths Sahih (Bukhari/Muslim) exclusivement
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <BookOpen className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <strong>Salaf:</strong> Compréhension des 3 générations bénies
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-lg border-2 border-green-300">
                  <h3 className="text-xl font-bold text-green-800 mb-4">🏛️ Consensus des 4 Écoles (Ijmâ')</h3>
                  <p className="text-gray-700 mb-4">
                    Chaque formation intègre le consensus unanime des 4 écoles juridiques sunnites sur les questions environnementales:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-bold text-blue-800">Hanafi</h4>
                      <p className="text-xs text-blue-600">Irak, Turquie, Asie Centrale</p>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <h4 className="font-bold text-orange-800">Maliki</h4>
                      <p className="text-xs text-orange-600">Maghreb, Afrique Ouest</p>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <h4 className="font-bold text-purple-800">Shafi'i</h4>
                      <p className="text-xs text-purple-600">Egypte, Asie Sud-Est</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <h4 className="font-bold text-green-800">Hanbali</h4>
                      <p className="text-xs text-green-600">Arabie, Levant</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 mb-4">✅ Validation Scholarly</h3>
                  <p className="text-gray-700">
                    Toutes nos formations sont supervisées par un comité de 25+ scholars internationaux 
                    spécialisés en Fiqh environnemental, garantissant l'authenticité islamique et la 
                    rigueur scientifique de chaque contenu proposé selon la méthodologie des Salaf as-Salih.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Témoignages */}
          <TabsContent value="temoignages">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {temoignages.map((temoignage, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(temoignage.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-green-800 text-lg">{temoignage.nom}</CardTitle>
                    <CardDescription className="text-sm">{temoignage.poste}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 italic">
                      "{temoignage.commentaire}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 border-4 border-emerald-400 bg-emerald-50">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold text-emerald-800 mb-4">
                  🌍 Rejoignez la Révolution Écologique Halal
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  Formations certifiées • Preuves scientifiques • Sources islamiques authentiques • Consensus des 4 écoles
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <Link href="/ced-halal-home">
                    <Button size="lg" className="text-xl px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                      <TreePine className="h-6 w-6 mr-2" />
                      Découvrir l'Écosystème CED
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="text-xl px-8 py-4 border-2 border-green-500">
                    <BookOpen className="h-6 w-6 mr-2" />
                    Commencer une Formation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}