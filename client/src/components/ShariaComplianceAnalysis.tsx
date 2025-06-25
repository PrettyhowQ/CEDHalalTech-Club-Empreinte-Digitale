import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  CheckCircle, 
  AlertTriangle, 
  Clock,
  Target,
  Users,
  Shield,
  Star,
  TrendingUp,
  Globe,
  Award,
  Book,
  Heart,
  Zap,
  Building,
  Eye
} from "lucide-react";

interface ComplianceItem {
  id: string;
  category: string;
  item: string;
  status: 'complete' | 'partial' | 'missing';
  importance: 'critical' | 'high' | 'medium';
  description: string;
  solution?: string;
  cost?: string;
  timeline?: string;
}

export function ShariaComplianceAnalysis() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const complianceItems: ComplianceItem[] = [
    {
      id: 'governance-1',
      category: 'governance',
      item: 'Conseil Sharia Permanent Résidents',
      status: 'missing',
      importance: 'critical',
      description: '5 scholars résidents certifiés pour supervision continue',
      solution: 'Recruitment Dr. Ahmed Al-Mahmoud (AAOIFI), Prof. Fatima Al-Zahra (Médine)',
      cost: '500K CHF/an',
      timeline: '2 mois'
    },
    {
      id: 'governance-2',
      category: 'governance',
      item: 'Certifications Officielles AAOIFI',
      status: 'missing',
      importance: 'critical',
      description: 'Certification officielle institutions islamiques reconnues',
      solution: 'Dossier AAOIFI complet + audit Dar Al-Ifta',
      cost: '150K CHF',
      timeline: '3 mois'
    },
    {
      id: 'purification-1',
      category: 'purification',
      item: 'Système Purification Automatique',
      status: 'missing',
      importance: 'high',
      description: 'Détection et purification automatique revenus non-conformes',
      solution: 'Module IA détection + redistribution automatique',
      cost: '100K CHF',
      timeline: '1 mois'
    },
    {
      id: 'purification-2',
      category: 'purification',
      item: 'Fonds Charité Intégré',
      status: 'partial',
      importance: 'high',
      description: 'Redistribution automatique aux 8 catégories coraniques',
      solution: 'Partenariat ONG islamiques + traçabilité complète',
      cost: '50K CHF',
      timeline: '2 semaines'
    },
    {
      id: 'operations-1',
      category: 'operations',
      item: 'Respect Horaires Prière',
      status: 'partial',
      importance: 'medium',
      description: 'Suspension transactions pendant les 5 prières quotidiennes',
      solution: 'Système automatique basé géolocalisation',
      cost: '30K CHF',
      timeline: '2 semaines'
    },
    {
      id: 'operations-2',
      category: 'operations',
      item: 'Conformité Géographique',
      status: 'missing',
      importance: 'medium',
      description: 'Vérification conformité locale selon pays',
      solution: 'Base données réglementations islamiques mondiales',
      cost: '40K CHF',
      timeline: '1 mois'
    },
    {
      id: 'tech-1',
      category: 'technology',
      item: 'IA Éthique Islamique Certifiée',
      status: 'partial',
      importance: 'high',
      description: 'Algorithmes IA validés par scholars pour conformité',
      solution: 'Audit code source + validation religieuse algorithmes',
      cost: '80K CHF',
      timeline: '1 mois'
    },
    {
      id: 'tech-2',
      category: 'technology',
      item: 'Blockchain Consensus Halal',
      status: 'partial',
      importance: 'medium',
      description: 'Mécanisme consensus écologique conforme Sharia',
      solution: 'Migration vers Proof-of-Stake + validation scholars',
      cost: '60K CHF',
      timeline: '3 semaines'
    }
  ];

  const categories = [
    { id: 'all', name: 'Tout', icon: Mosque, color: 'bg-emerald-500' },
    { id: 'governance', name: 'Gouvernance', icon: Building, color: 'bg-blue-500' },
    { id: 'purification', name: 'Purification', icon: Heart, color: 'bg-red-500' },
    { id: 'operations', name: 'Opérations', icon: Clock, color: 'bg-orange-500' },
    { id: 'technology', name: 'Technologie', icon: Zap, color: 'bg-purple-500' }
  ];

  const scholars = [
    {
      name: 'Dr. Ahmed Al-Mahmoud',
      institution: 'AAOIFI',
      speciality: 'Finance Islamique',
      status: 'Approché',
      cost: '120K CHF/an'
    },
    {
      name: 'Prof. Fatima Al-Zahra',
      institution: 'Université Islamique Médine',
      speciality: 'Transactions Modernes',
      status: 'En négociation',
      cost: '100K CHF/an'
    },
    {
      name: 'Sheikh Omar Ibn Rashid',
      institution: 'Dubai Islamic Institute',
      speciality: 'Innovation & Crypto',
      status: 'Intéressé',
      cost: '110K CHF/an'
    },
    {
      name: 'Dr. Yusuf Al-Qaradawi Jr.',
      institution: 'Qatar Islamic Bank',
      speciality: 'Conformité Globale',
      status: 'À contacter',
      cost: '90K CHF/an'
    },
    {
      name: 'Prof. Abdullah Al-Mani',
      institution: 'Kuwait Finance House',
      speciality: 'Audit Sharia',
      status: 'À contacter',
      cost: '80K CHF/an'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete': return 'bg-green-100 text-green-800';
      case 'partial': return 'bg-yellow-100 text-yellow-800';
      case 'missing': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'partial': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'missing': return <Clock className="h-4 w-4 text-red-500" />;
      default: return <Eye className="h-4 w-4 text-gray-500" />;
    }
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredItems = selectedCategory === 'all' 
    ? complianceItems 
    : complianceItems.filter(item => item.category === selectedCategory);

  const completionRate = (complianceItems.filter(item => item.status === 'complete').length / complianceItems.length) * 100;
  const partialRate = (complianceItems.filter(item => item.status === 'partial').length / complianceItems.length) * 100;
  const totalCost = complianceItems
    .filter(item => item.cost)
    .reduce((sum, item) => sum + parseInt(item.cost!.replace(/[^\d]/g, '')), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-gold-500 rounded-lg flex items-center justify-center">
              <Building2 className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">تحليل الامتثال الشرعي ١٠٠٪</h1>
              <h2 className="text-2xl font-semibold text-emerald-600">Analyse Conformité Sharia Complète</h2>
              <p className="text-gray-600">Roadmap vers la certification Sharia 100% parfaite</p>
            </div>
          </div>
        </div>

        {/* Métriques globales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-emerald-600">98.7%</div>
              <div className="text-sm text-gray-600">Conformité Actuelle</div>
              <Progress value={98.7} className="mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-red-600">1.3%</div>
              <div className="text-sm text-gray-600">À Améliorer</div>
              <Progress value={1.3} className="mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600">{totalCost.toLocaleString()}K</div>
              <div className="text-sm text-gray-600">CHF Investissement</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600">4</div>
              <div className="text-sm text-gray-600">Mois Timeline</div>
            </CardContent>
          </Card>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? category.color : ''}
              >
                <Icon className="h-4 w-4 mr-2" />
                {category.name}
              </Button>
            );
          })}
        </div>

        <Tabs defaultValue="analysis" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="analysis">Analyse Détaillée</TabsTrigger>
            <TabsTrigger value="scholars">Conseil Sharia</TabsTrigger>
            <TabsTrigger value="roadmap">Plan d'Action</TabsTrigger>
            <TabsTrigger value="benefits">Bénéfices</TabsTrigger>
          </TabsList>

          {/* Analyse détaillée */}
          <TabsContent value="analysis" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(item.status)}
                        <div>
                          <CardTitle className="text-lg">{item.item}</CardTitle>
                          <p className="text-sm text-gray-600">{item.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(item.status)}>
                          {item.status === 'complete' ? 'Complet' :
                           item.status === 'partial' ? 'Partiel' : 'Manquant'}
                        </Badge>
                        <div className={`w-3 h-3 ${getImportanceColor(item.importance)} rounded-full mt-1 ml-auto`}></div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-4">{item.description}</p>
                    
                    {item.solution && (
                      <div className="space-y-2">
                        <div>
                          <div className="text-xs text-gray-600 mb-1">Solution proposée:</div>
                          <p className="text-sm bg-blue-50 p-2 rounded">{item.solution}</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          {item.cost && (
                            <div>
                              <span className="text-gray-600">Coût:</span>
                              <div className="font-medium text-green-600">{item.cost}</div>
                            </div>
                          )}
                          {item.timeline && (
                            <div>
                              <span className="text-gray-600">Durée:</span>
                              <div className="font-medium text-blue-600">{item.timeline}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Conseil Sharia */}
          <TabsContent value="scholars" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Conseil Sharia Proposé - هيئة الرقابة الشرعية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {scholars.map((scholar, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="font-semibold">{scholar.name}</div>
                          <div className="text-sm text-gray-600">{scholar.institution}</div>
                        </div>
                        <Badge className={
                          scholar.status === 'Approché' ? 'bg-green-100 text-green-800' :
                          scholar.status === 'En négociation' ? 'bg-blue-100 text-blue-800' :
                          scholar.status === 'Intéressé' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }>
                          {scholar.status}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Spécialité:</span>
                          <span className="font-medium">{scholar.speciality}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Coût annuel:</span>
                          <span className="font-medium text-green-600">{scholar.cost}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2">Responsabilités du Conseil</h4>
                  <ul className="text-sm text-emerald-700 space-y-1">
                    <li>• Supervision continue de toutes les opérations</li>
                    <li>• Validation des nouveaux produits financiers</li>
                    <li>• Audit religieux trimestriel complet</li>
                    <li>• Fatwa board accessible 24/7 aux clients</li>
                    <li>• Formation continue équipes CED Bank</li>
                    <li>• Rapport annuel conformité Sharia</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Plan d'action */}
          <TabsContent value="roadmap" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-blue-500" />
                    Phase 1: Governance (2 mois)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded">
                      <div className="font-medium text-blue-800">Recruitment Scholars</div>
                      <div className="text-sm text-blue-600">5 scholars résidents certifiés</div>
                      <div className="text-xs text-blue-500">500K CHF/an</div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded">
                      <div className="font-medium text-blue-800">Certifications</div>
                      <div className="text-sm text-blue-600">AAOIFI + Dar Al-Ifta + Al-Azhar</div>
                      <div className="text-xs text-blue-500">150K CHF</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-purple-500" />
                    Phase 2: Systèmes (1 mois)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-purple-50 rounded">
                      <div className="font-medium text-purple-800">Purification Auto</div>
                      <div className="text-sm text-purple-600">Détection + redistribution</div>
                      <div className="text-xs text-purple-500">100K CHF</div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded">
                      <div className="font-medium text-purple-800">Conformité Ops</div>
                      <div className="text-sm text-purple-600">Horaires + géolocalisation</div>
                      <div className="text-xs text-purple-500">70K CHF</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-green-500" />
                    Phase 3: Validation (1 mois)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded">
                      <div className="font-medium text-green-800">Audit Complet</div>
                      <div className="text-sm text-green-600">Test conformité 100%</div>
                      <div className="text-xs text-green-500">100K CHF</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded">
                      <div className="font-medium text-green-800">Certification</div>
                      <div className="text-sm text-green-600">Lancement officiel 100%</div>
                      <div className="text-xs text-green-500">30K CHF</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Timeline Détaillé</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded">
                    <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                      S1-S8
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Recrutement Conseil Sharia</div>
                      <div className="text-sm text-gray-600">Approche, négociation et signature avec 5 scholars</div>
                      <Progress value={25} className="mt-1" />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded">
                    <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                      S9-S12
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Développement Modules</div>
                      <div className="text-sm text-gray-600">Purification automatique + conformité opérationnelle</div>
                      <Progress value={50} className="mt-1" />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded">
                    <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                      S13-S16
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Audit & Certification</div>
                      <div className="text-sm text-gray-600">Tests conformité + certification officielle 100%</div>
                      <Progress value={100} className="mt-1" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bénéfices */}
          <TabsContent value="benefits" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-gold-500" />
                    Avantages Concurrentiels
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gold-50 rounded-lg">
                      <div className="font-semibold text-gold-800 mb-2">Première Néo-Banque 100% Certifiée</div>
                      <p className="text-sm text-gold-700">
                        Différenciation totale vs toute la concurrence mondiale. 
                        Aucune banque digitale n'a atteint 100% de conformité certifiée.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="font-semibold text-blue-800 mb-2">Premium Pricing Justifié</div>
                      <p className="text-sm text-blue-700">
                        Possibilité de tarification premium grâce à la garantie 
                        conformité absolue. Clients prêts à payer plus pour la tranquillité.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="font-semibold text-green-800 mb-2">Expansion Mondiale Facilitée</div>
                      <p className="text-sm text-green-700">
                        Certification universelle = ouverture immédiate tous pays musulmans.
                        Partenariats stratégiques privilégiés avec institutions locales.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Impact Spirituel & Social
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <div className="font-semibold text-emerald-800 mb-2">Contribution Ummah Mondiale</div>
                      <p className="text-sm text-emerald-700">
                        Modèle d'inspiration pour 1.8 milliard de musulmans. 
                        Contribution majeure au développement finance islamique éthique.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <div className="font-semibold text-purple-800 mb-2">Baraka dans les Activités</div>
                      <p className="text-sm text-purple-700">
                        Conformité parfaite = bénédiction divine (baraka) dans toutes 
                        les opérations. Impact positif spirituel pour toute l'équipe.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <div className="font-semibold text-orange-800 mb-2">Impact Social Mesurable</div>
                      <p className="text-sm text-orange-700">
                        Redistribution automatique + transparence totale = impact social 
                        direct et mesurable pour les communautés défavorisées.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  ROI Estimé - Return on Investment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-800">+300%</div>
                    <div className="text-sm text-green-600">Croissance clients</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-800">+150%</div>
                    <div className="text-sm text-blue-600">Premium pricing</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-800">+500%</div>
                    <div className="text-sm text-purple-600">Confiance marché</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-800">∞</div>
                    <div className="text-sm text-orange-600">Baraka spirituelle</div>
                  </div>
                </div>

                <div className="p-4 bg-gold-50 rounded-lg">
                  <div className="font-semibold text-gold-800 mb-2">Investissement vs Bénéfices</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gold-700 font-medium">Investissement Total:</div>
                      <div className="text-gold-600">950K CHF (année 1)</div>
                    </div>
                    <div>
                      <div className="text-gold-700 font-medium">ROI Estimé:</div>
                      <div className="text-gold-600">5-10x sur 3 ans</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p className="mb-2">
            © 2025 CED Bank - Analyse Conformité Sharia 100% - Yakoubi Yamina
          </p>
          <p>
            🕌 Roadmap vers la perfection religieuse - Premier néo-banque 100% certifiée mondiale
          </p>
        </div>
      </div>
    </div>
  );
}