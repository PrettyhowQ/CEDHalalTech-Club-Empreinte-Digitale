import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, Users, Crown, Building, Shield, Star,
  Calendar, Clock, TrendingUp, Award, BookOpen,
  Baby, GraduationCap, Briefcase, Home, Globe,
  Lock, Key, Archive, FileText, ChevronRight,
  Sparkles, Target, DollarSign, Zap, Eye, Scale
} from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/Footer";

// Types pour la planification successorale
interface SuccessionPlan {
  generation: number;
  years: string;
  heirs: FamilyMember[];
  assets: Asset[];
  responsibilities: Responsibility[];
  spiritualLegacy: SpiritualElement[];
}

interface FamilyMember {
  id: string;
  name: string;
  role: string;
  currentAge: number;
  projectedLeadership: number;
  specialization: string[];
  assets: string[];
  responsibilities: string[];
}

interface Asset {
  id: string;
  name: string;
  category: 'technology' | 'financial' | 'intellectual' | 'spiritual';
  currentValue: string;
  projectedValue2075: string;
  inheritors: string[];
  conditions: string[];
}

interface Responsibility {
  id: string;
  domain: string;
  description: string;
  assignedTo: string;
  startYear: number;
  duration: string;
}

interface SpiritualElement {
  id: string;
  element: string;
  description: string;
  guardian: string;
  transmission: string;
}

const PlanificationSuccessorale50Ans: React.FC = () => {
  const [selectedGeneration, setSelectedGeneration] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>('overview');

  // Plan successoral multigénérationnel
  const successionPlan: SuccessionPlan[] = [
    {
      generation: 1,
      years: "2025-2045",
      heirs: [
        {
          id: 'souheila',
          name: 'Souheila Yakoubi-Ozel',
          role: 'Co-Directrice Secteur Santé',
          currentAge: 28,
          projectedLeadership: 2035,
          specialization: ['Médecine Prophétique', 'HealthTech Halal', 'Recherche Islamique Santé'],
          assets: ['Espace Santé Souheila', 'CED Medical Center', 'Institut Médecine Prophétique'],
          responsibilities: ['Direction médicale', 'Recherche & développement santé', 'Formation personnel médical']
        },
        {
          id: 'hanae',
          name: 'Hanaé-Denise Ozel',
          role: 'Co-Directrice Secteur Juridique',
          currentAge: 26,
          projectedLeadership: 2037,
          specialization: ['Droit Islamique', 'LegalTech Halal', 'Succession Islamique'],
          assets: ['Juridique Hanaé', 'CED Legal Services', 'Centre Formation Juridique'],
          responsibilities: ['Direction juridique', 'Conformité Sharia', 'Gestion fiches de paie']
        }
      ],
      assets: [
        {
          id: 'ecosystem-ced',
          name: 'Écosystème CED Complet',
          category: 'technology',
          currentValue: '45M CHF',
          projectedValue2075: '2.3B CHF',
          inheritors: ['souheila', 'hanae'],
          conditions: ['Direction conjointe', 'Consensus obligatoire', 'Respect valeurs islamiques']
        },
        {
          id: 'fiqh-library',
          name: 'Bibliothèque Fiqh Informatique',
          category: 'intellectual',
          currentValue: '23,456 règles',
          projectedValue2075: '500K+ règles',
          inheritors: ['souheila', 'hanae'],
          conditions: ['Validation scholars', 'Sources authentiques', 'Transmission intégrale']
        }
      ],
      responsibilities: [
        {
          id: 'resp-1',
          domain: 'Direction Générale',
          description: 'Co-direction harmonieuse selon valeurs familiales',
          assignedTo: 'souheila-hanae',
          startYear: 2035,
          duration: '20 ans minimum'
        }
      ],
      spiritualLegacy: [
        {
          id: 'spirit-1',
          element: 'Motivation Spirituelle',
          description: 'Application dhikr et invocations authentiques',
          guardian: 'souheila',
          transmission: 'Formation continue descendants'
        }
      ]
    },
    {
      generation: 2,
      years: "2045-2075",
      heirs: [
        {
          id: 'future-souheila-1',
          name: 'Premier Enfant Souheila',
          role: 'Héritier Principal Santé',
          currentAge: 0,
          projectedLeadership: 2060,
          specialization: ['IA Médicale Halal', 'Génomique Islamique', 'Nanotechnologie Éthique'],
          assets: ['CED Medical AI', 'Institut Génomique Halal', 'Centre Nanotech Éthique'],
          responsibilities: ['Innovation médicale', 'Recherche génétique éthique', 'Technologies santé futures']
        },
        {
          id: 'future-hanae-1',
          name: 'Premier Enfant Hanaé-Denise',
          role: 'Héritier Principal Juridique',
          currentAge: 0,
          projectedLeadership: 2062,
          specialization: ['Droit Spatial Islamique', 'Régulation IA Halal', 'Gouvernance Quantique'],
          assets: ['CED Space Law', 'Institut Régulation IA', 'Centre Gouvernance Quantique'],
          responsibilities: ['Droit technologies futures', 'Régulation éthique', 'Gouvernance spatiale']
        }
      ],
      assets: [
        {
          id: 'quantum-ecosystem',
          name: 'Écosystème Quantique Halal',
          category: 'technology',
          currentValue: 'En développement',
          projectedValue2075: '50B CHF',
          inheritors: ['future-souheila-1', 'future-hanae-1'],
          conditions: ['Leadership conjoint', 'Innovation éthique', 'Respect traditions islamiques']
        }
      ],
      responsibilities: [
        {
          id: 'resp-2',
          domain: 'Innovation Future',
          description: 'Développement technologies halal avancées',
          assignedTo: 'generation-2',
          startYear: 2060,
          duration: 'Permanent'
        }
      ],
      spiritualLegacy: [
        {
          id: 'spirit-2',
          element: 'Fiqh Informatique Spatial',
          description: 'Extension règles islamiques espace et technologies futures',
          guardian: 'future-hanae-1',
          transmission: 'École spatiale islamique'
        }
      ]
    }
  ];

  // Patrimoine consolidé
  const patrimoineTotal = {
    actuel2025: '45M CHF',
    projection2050: '850M CHF',
    projection2075: '12.5B CHF',
    croissanceAnnuelle: '18.5%'
  };

  // Éléments spirituels à préserver
  const heritageSpiritual = [
    {
      element: 'Bibliothèque Fiqh Informatique',
      status: 'Opérationnel',
      gardien: 'Souheila & Hanaé-Denise',
      transmission: 'Formation descendants + scholars externes'
    },
    {
      element: 'Assistant Vocal Aisha Al-Aman',
      status: 'Opérationnel',
      gardien: 'Souheila (aspects spirituels)',
      transmission: 'Certification scholars + formation technique'
    },
    {
      element: 'Motivation Spirituelle',
      status: 'Opérationnel',
      gardien: 'Hanaé-Denise (aspects juridiques)',
      transmission: 'Mémorisation dhikr + sources authentiques'
    },
    {
      element: 'Parcours Gamifié Islamique',
      status: 'Opérationnel',
      gardien: 'Co-garde',
      transmission: 'Méthodes pédagogiques + contenu religieux'
    }
  ];

  const currentGeneration = successionPlan.find(gen => gen.generation === selectedGeneration);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-800 to-green-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Crown className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Planification Successorale 50+ Ans
            </h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Transmission multigénérationnelle de l'Écosystème CED HalalTech™ pour Souheila & Hanaé-Denise et leurs descendants
            </p>
            <div className="flex items-center justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span className="font-bold">2025-2075+</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-bold">3+ Générations</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                <span className="font-bold">12.5B CHF</span> projection
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Vision Patrimoniale */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800 text-center">
              Vision Patrimoniale Multigénérationnelle
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="p-6 bg-emerald-50 rounded-lg">
                <Crown className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-emerald-800 mb-2">{patrimoineTotal.actuel2025}</div>
                <div className="text-sm text-gray-600">Patrimoine Actuel</div>
                <div className="text-xs text-emerald-600 mt-1">2025</div>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-800 mb-2">{patrimoineTotal.projection2050}</div>
                <div className="text-sm text-gray-600">Projection 25 ans</div>
                <div className="text-xs text-blue-600 mt-1">2050</div>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg">
                <Star className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-purple-800 mb-2">{patrimoineTotal.projection2075}</div>
                <div className="text-sm text-gray-600">Projection 50 ans</div>
                <div className="text-xs text-purple-600 mt-1">2075+</div>
              </div>
              <div className="p-6 bg-yellow-50 rounded-lg">
                <Target className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-yellow-800 mb-2">{patrimoineTotal.croissanceAnnuelle}</div>
                <div className="text-sm text-gray-600">Croissance/An</div>
                <div className="text-xs text-yellow-600 mt-1">Moyenne</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="generations" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="generations">Générations</TabsTrigger>
            <TabsTrigger value="heritage">Héritage Spirituel</TabsTrigger>
            <TabsTrigger value="assets">Patrimoine</TabsTrigger>
            <TabsTrigger value="governance">Gouvernance</TabsTrigger>
          </TabsList>

          <TabsContent value="generations" className="space-y-6">
            {/* Sélecteur de Génération */}
            <Card>
              <CardHeader>
                <CardTitle>Planification par Génération</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  {successionPlan.map((gen) => (
                    <Button
                      key={gen.generation}
                      variant={selectedGeneration === gen.generation ? "default" : "outline"}
                      onClick={() => setSelectedGeneration(gen.generation)}
                      className="flex items-center gap-2"
                    >
                      <span>Génération {gen.generation}</span>
                      <Badge variant="outline">{gen.years}</Badge>
                    </Button>
                  ))}
                </div>

                {currentGeneration && (
                  <div className="space-y-6">
                    {/* Héritiers */}
                    <div>
                      <h3 className="text-lg font-bold mb-4">Héritiers & Responsabilités</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {currentGeneration.heirs.map((heir) => (
                          <Card key={heir.id}>
                            <CardHeader>
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">{heir.name}</CardTitle>
                                <Badge className="bg-emerald-100 text-emerald-800">
                                  {heir.role}
                                </Badge>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                  <span>Leadership prévu:</span>
                                  <span className="font-medium">{heir.projectedLeadership}</span>
                                </div>
                                
                                <div>
                                  <div className="text-sm font-medium mb-2">Spécialisations:</div>
                                  <div className="flex flex-wrap gap-1">
                                    {heir.specialization.map((spec, idx) => (
                                      <Badge key={idx} variant="outline" className="text-xs">
                                        {spec}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>

                                <div>
                                  <div className="text-sm font-medium mb-2">Actifs attribués:</div>
                                  <div className="space-y-1">
                                    {heir.assets.map((asset, idx) => (
                                      <div key={idx} className="text-xs text-gray-600 flex items-center gap-1">
                                        <ChevronRight className="h-3 w-3" />
                                        {asset}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Responsabilités */}
                    <div>
                      <h3 className="text-lg font-bold mb-4">Responsabilités de Génération</h3>
                      <div className="space-y-3">
                        {currentGeneration.responsibilities.map((resp) => (
                          <Card key={resp.id}>
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h4 className="font-medium mb-1">{resp.domain}</h4>
                                  <p className="text-sm text-gray-600 mb-2">{resp.description}</p>
                                  <div className="flex items-center gap-4 text-xs text-gray-500">
                                    <span>Début: {resp.startYear}</span>
                                    <span>Durée: {resp.duration}</span>
                                  </div>
                                </div>
                                <Badge variant="outline">{resp.assignedTo}</Badge>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="heritage" className="space-y-6">
            {/* Héritage Spirituel */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  Héritage Spirituel & Technologique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {heritageSpiritual.map((item, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium">{item.element}</h4>
                          <Badge className="bg-green-100 text-green-800">
                            {item.status}
                          </Badge>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-blue-500" />
                            <span className="text-gray-600">Gardien:</span>
                            <span className="font-medium">{item.gardien}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Archive className="h-4 w-4 text-purple-500 mt-0.5" />
                            <div>
                              <span className="text-gray-600">Transmission:</span>
                              <p className="text-gray-800 mt-1">{item.transmission}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Protocoles de Transmission */}
            <Card>
              <CardHeader>
                <CardTitle>Protocoles de Transmission Spirituelle</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-emerald-50 rounded-lg">
                    <h4 className="font-medium text-emerald-800 mb-2">1. Formation Continue</h4>
                    <p className="text-sm text-emerald-700">
                      Chaque génération doit maîtriser les sources islamiques authentiques (Coran, Sunna, Ijmâ', Qiyâs) 
                      et être formée par les 150+ scholars du réseau CED.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">2. Validation Scholars</h4>
                    <p className="text-sm text-blue-700">
                      Toute innovation technologique doit être validée par le Conseil Sharia avant intégration 
                      dans l'écosystème CED selon les 4 écoles juridiques.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-2">3. Préservation Authenticité</h4>
                    <p className="text-sm text-purple-700">
                      L'application Motivation Spirituelle et tous dhikr doivent conserver leurs sources 
                      authentiques (Sahih Bukhari, Sahih Muslim) sans altération.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assets" className="space-y-6">
            {/* Répartition Patrimoniale */}
            <Card>
              <CardHeader>
                <CardTitle>Répartition Patrimoniale Future</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {successionPlan.map((gen) => (
                    <div key={gen.generation} className="border rounded-lg p-4">
                      <h3 className="font-bold mb-4">Génération {gen.generation} ({gen.years})</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {gen.assets.map((asset) => (
                          <Card key={asset.id}>
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium">{asset.name}</h4>
                                <Badge className={
                                  asset.category === 'technology' ? 'bg-blue-100 text-blue-800' :
                                  asset.category === 'financial' ? 'bg-green-100 text-green-800' :
                                  asset.category === 'intellectual' ? 'bg-purple-100 text-purple-800' :
                                  'bg-yellow-100 text-yellow-800'
                                }>
                                  {asset.category}
                                </Badge>
                              </div>
                              <div className="text-sm space-y-1">
                                <div>Valeur actuelle: <span className="font-medium">{asset.currentValue}</span></div>
                                <div>Projection 2075: <span className="font-medium">{asset.projectedValue2075}</span></div>
                                <div className="pt-2">
                                  <div className="text-xs text-gray-600 mb-1">Conditions:</div>
                                  {asset.conditions.map((condition, idx) => (
                                    <div key={idx} className="text-xs text-gray-700">• {condition}</div>
                                  ))}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="governance" className="space-y-6">
            {/* Structure de Gouvernance */}
            <Card>
              <CardHeader>
                <CardTitle>Structure de Gouvernance Familiale</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center p-6 bg-emerald-50 rounded-lg">
                    <Crown className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">Yakoubi Yamina</h3>
                    <p className="text-emerald-700 mb-4">Dirigeante Fondatrice • Décisionnaire Unique</p>
                    <div className="text-sm text-emerald-600">
                      2025-2035: Direction active • 2035+: Conseil & supervision
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-blue-50 rounded-lg text-center">
                      <Heart className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                      <h4 className="font-bold text-blue-800 mb-2">Souheila Yakoubi-Ozel</h4>
                      <p className="text-blue-700 text-sm mb-3">Co-Directrice Secteur Santé</p>
                      <div className="text-xs text-blue-600 space-y-1">
                        <div>Leadership: 2035-2055</div>
                        <div>Transmission: 2055+</div>
                      </div>
                    </div>

                    <div className="p-6 bg-purple-50 rounded-lg text-center">
                      <Scale className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                      <h4 className="font-bold text-purple-800 mb-2">Hanaé-Denise Ozel</h4>
                      <p className="text-purple-700 text-sm mb-3">Co-Directrice Secteur Juridique</p>
                      <div className="text-xs text-purple-600 space-y-1">
                        <div>Leadership: 2037-2057</div>
                        <div>Transmission: 2057+</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center p-6 bg-yellow-50 rounded-lg">
                    <Baby className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-yellow-800 mb-2">Générations Futures</h3>
                    <p className="text-yellow-700 mb-4">Enfants de Souheila & Hanaé-Denise</p>
                    <div className="text-sm text-yellow-600">
                      2060+: Leadership nouvelle génération • Expansion spatiale & quantique
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Principes de Gouvernance */}
            <Card>
              <CardHeader>
                <CardTitle>Principes de Gouvernance Éternels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded">
                      <BookOpen className="h-5 w-5 text-emerald-600" />
                      <div>
                        <div className="font-medium text-emerald-800">Conformité Sharia</div>
                        <div className="text-xs text-emerald-600">Toutes décisions selon 4 sources authentiques</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded">
                      <Users className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium text-blue-800">Consensus Familial</div>
                        <div className="text-xs text-blue-600">Décisions importantes par accord mutuel</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded">
                      <Shield className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="font-medium text-purple-800">Protection Héritage</div>
                        <div className="text-xs text-purple-600">Préservation valeurs et technologies</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded">
                      <Target className="h-5 w-5 text-yellow-600" />
                      <div>
                        <div className="font-medium text-yellow-800">Innovation Éthique</div>
                        <div className="text-xs text-yellow-600">Développement conforme principes islamiques</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded">
                      <Heart className="h-5 w-5 text-red-600" />
                      <div>
                        <div className="font-medium text-red-800">Transmission Spirituelle</div>
                        <div className="text-xs text-red-600">Formation continue générations futures</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                      <Globe className="h-5 w-5 text-gray-600" />
                      <div>
                        <div className="font-medium text-gray-800">Impact Mondial</div>
                        <div className="text-xs text-gray-600">Expansion écosystème halal global</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Link href="/52-modules">
            <Button className="w-full h-16 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white">
              <Crown className="h-5 w-5 mr-2" />
              CED HalalTech™ 53 Modules
            </Button>
          </Link>
          
          <Link href="/gestion-rh-complete">
            <Button className="w-full h-16 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
              <Users className="h-5 w-5 mr-2" />
              Gestion RH Famille
            </Button>
          </Link>
          
          <Link href="/conseil-sharia">
            <Button className="w-full h-16 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white">
              <Shield className="h-5 w-5 mr-2" />
              Conseil Sharia
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlanificationSuccessorale50Ans;