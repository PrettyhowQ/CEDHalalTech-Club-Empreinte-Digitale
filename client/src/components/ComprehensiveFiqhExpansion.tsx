import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Globe, Users, Target, TrendingUp, Award } from 'lucide-react';

interface FiqhCategory {
  id: string;
  nameAr: string;
  nameFr: string;
  currentRules: number;
  targetRules: number;
  priority: 'high' | 'medium' | 'low';
  gulfRelevance: 'critical' | 'important' | 'standard';
  completionRate: number;
  scholars: string[];
  sources: string[];
}

interface GulfMarketData {
  country: string;
  flag: string;
  students: number;
  institutions: number;
  marketSize: string;
  priority: 'primary' | 'secondary';
  languages: string[];
}

const fiqhCategories: FiqhCategory[] = [
  {
    id: 'ai-ml',
    nameAr: 'الذكاء الاصطناعي والتعلم الآلي',
    nameFr: 'IA et Machine Learning',
    currentRules: 4250,
    targetRules: 18500,
    priority: 'high',
    gulfRelevance: 'critical',
    completionRate: 23,
    scholars: ['Dr. Ali Al-Qaradaghi', 'Dr. Mohammad Al-Zuhayli', 'Dr. Abdullah Al-Mutlaq'],
    sources: ['AAOIFI Standards', 'Majma Al-Fiqh Al-Islami', 'Dar Al-Ifta Saudi']
  },
  {
    id: 'blockchain-crypto',
    nameAr: 'البلوك تشين والعملات الرقمية',
    nameFr: 'Blockchain et Cryptomonnaies',
    currentRules: 3850,
    targetRules: 15200,
    priority: 'high',
    gulfRelevance: 'critical',
    completionRate: 25,
    scholars: ['Dr. Monzer Kahf', 'Dr. Hussam Al-Din Musa', 'Dr. Sami Al-Suwailem'],
    sources: ['Islamic Development Bank', 'CIBAFI Guidelines', 'IFSB Standards']
  },
  {
    id: 'iot-sensors',
    nameAr: 'إنترنت الأشياء والاستشعار',
    nameFr: 'IoT et Capteurs',
    currentRules: 2780,
    targetRules: 12400,
    priority: 'high',
    gulfRelevance: 'important',
    completionRate: 22,
    scholars: ['Dr. Ahmad Al-Khalil', 'Dr. Yusuf Al-Qaradawi', 'Dr. Wahba Al-Zuhayli'],
    sources: ['UAE Fatwa Council', 'Kuwait Fatwa House', 'Bahrain Sharia Board']
  },
  {
    id: 'cloud-computing',
    nameAr: 'الحوسبة السحابية',
    nameFr: 'Cloud Computing',
    currentRules: 2150,
    targetRules: 9800,
    priority: 'medium',
    gulfRelevance: 'critical',
    completionRate: 22,
    scholars: ['Dr. Mohammad Taqi Usmani', 'Dr. Abdul Sattar Abu Ghuddah'],
    sources: ['SAMA Guidelines', 'ADGM Regulations', 'DIFC Standards']
  },
  {
    id: 'cybersecurity',
    nameAr: 'الأمن السيبراني',
    nameFr: 'Cybersécurité',
    currentRules: 3250,
    targetRules: 11600,
    priority: 'high',
    gulfRelevance: 'critical',
    completionRate: 28,
    scholars: ['Dr. Ali Al-Salus', 'Dr. Mohammad Al-Ashqar'],
    sources: ['NESA UAE', 'NCA Saudi Arabia', 'Qatar CERT']
  },
  {
    id: 'fintech-banking',
    nameAr: 'التكنولوجيا المالية والمصرفية',
    nameFr: 'FinTech et Banking',
    currentRules: 4680,
    targetRules: 16800,
    priority: 'high',
    gulfRelevance: 'critical',
    completionRate: 28,
    scholars: ['Dr. Mohammad Al-Bashir', 'Dr. Abdul Aziz Al-Fawzan'],
    sources: ['SAMA Fintech', 'CBUAE Regulations', 'QCB Guidelines']
  },
  {
    id: 'data-privacy',
    nameAr: 'خصوصية البيانات والحماية',
    nameFr: 'Données et Confidentialité',
    currentRules: 2890,
    targetRules: 10200,
    priority: 'high',
    gulfRelevance: 'important',
    completionRate: 28,
    scholars: ['Dr. Nazih Hammad', 'Dr. Ali Mohyi Al-Din Al-Qarra Daghi'],
    sources: ['UAE Data Protection Law', 'Saudi PDPL', 'Qatar Data Protection']
  },
  {
    id: 'ecommerce-digital',
    nameAr: 'التجارة الإلكترونية والأعمال الرقمية',
    nameFr: 'E-commerce et Business Digital',
    currentRules: 3596,
    targetRules: 13400,
    priority: 'medium',
    gulfRelevance: 'important',
    completionRate: 27,
    scholars: ['Dr. Sami Al-Homoud', 'Dr. Abdullah Al-Mani'],
    sources: ['Dubai Digital Authority', 'Saudi E-commerce Law', 'Kuwait Digital Gov']
  }
];

const gulfMarkets: GulfMarketData[] = [
  {
    country: 'Émirats Arabes Unis',
    flag: '🇦🇪',
    students: 285000,
    institutions: 127,
    marketSize: '1.2B AED',
    priority: 'primary',
    languages: ['Arabe', 'Anglais', 'Ourdou', 'Hindi']
  },
  {
    country: 'Arabie Saoudite',
    flag: '🇸🇦',
    students: 890000,
    institutions: 289,
    marketSize: '3.8B SAR',
    priority: 'primary',
    languages: ['Arabe', 'Anglais']
  },
  {
    country: 'Qatar',
    flag: '🇶🇦',
    students: 125000,
    institutions: 45,
    marketSize: '680M QAR',
    priority: 'secondary',
    languages: ['Arabe', 'Anglais']
  },
  {
    country: 'Koweït',
    flag: '🇰🇼',
    students: 180000,
    institutions: 67,
    marketSize: '420M KWD',
    priority: 'secondary',
    languages: ['Arabe', 'Anglais']
  },
  {
    country: 'Bahreïn',
    flag: '🇧🇭',
    students: 95000,
    institutions: 38,
    marketSize: '180M BHD',
    priority: 'secondary',
    languages: ['Arabe', 'Anglais']
  },
  {
    country: 'Oman',
    flag: '🇴🇲',
    students: 165000,
    institutions: 52,
    marketSize: '290M OMR',
    priority: 'secondary',
    languages: ['Arabe', 'Anglais']
  }
];

export function ComprehensiveFiqhExpansion() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ai-ml');
  
  const totalCurrentRules = fiqhCategories.reduce((sum, cat) => sum + cat.currentRules, 0);
  const totalTargetRules = fiqhCategories.reduce((sum, cat) => sum + cat.targetRules, 0);
  const overallCompletion = Math.round((totalCurrentRules / totalTargetRules) * 100);
  
  const totalGulfStudents = gulfMarkets.reduce((sum, market) => sum + market.students, 0);
  const totalInstitutions = gulfMarkets.reduce((sum, market) => sum + market.institutions, 0);

  return (
    <div className="space-y-8">
      {/* En-tête Expansion Golfe */}
      <div className="text-center space-y-4">
        <div className="flex justify-center items-center gap-3 mb-4">
          <Globe className="h-8 w-8 text-emerald-600" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Expansion Golfe Persique 2025
          </h1>
          <Globe className="h-8 w-8 text-blue-600" />
        </div>
        
        <h2 className="text-2xl text-gray-700 mb-2">
          توسع أكاديمية CED في دول الخليج العربي
        </h2>
        
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Objectif: Atteindre <strong>100% du Fiqh informatique</strong> pour devenir la référence mondiale 
          des formations en ligne islamiques dans le Golfe Persique.
        </p>
        
        <div className="flex justify-center gap-8 text-sm font-medium">
          <div className="text-center">
            <p className="text-2xl font-bold text-emerald-600">{totalGulfStudents.toLocaleString()}</p>
            <p className="text-gray-600">Étudiants Potentiels</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">{totalInstitutions}</p>
            <p className="text-gray-600">Institutions Partenaires</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">6 Pays</p>
            <p className="text-gray-600">Marchés Ciblés</p>
          </div>
        </div>
      </div>

      {/* Progression Globale */}
      <Card className="border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-emerald-600" />
            Progression vers 100% Fiqh Informatique
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600">{totalCurrentRules.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Règles Actuelles</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">{totalTargetRules.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Objectif 100%</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">{overallCompletion}%</p>
                <p className="text-sm text-gray-600">Complété</p>
              </div>
            </div>
            
            <Progress value={overallCompletion} className="h-4" />
            
            <p className="text-center text-sm text-gray-600">
              <strong>{(totalTargetRules - totalCurrentRules).toLocaleString()} règles</strong> 
              restantes pour atteindre la couverture complète
            </p>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="categories" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="categories">Catégories Fiqh</TabsTrigger>
          <TabsTrigger value="markets">Marchés Golfe</TabsTrigger>
          <TabsTrigger value="roadmap">Roadmap 2025</TabsTrigger>
        </TabsList>

        {/* Onglet Catégories */}
        <TabsContent value="categories" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {fiqhCategories.map((category) => (
              <Card 
                key={category.id} 
                className={`cursor-pointer transition-all ${
                  selectedCategory === category.id 
                    ? 'border-emerald-500 ring-2 ring-emerald-200' 
                    : 'hover:border-emerald-300'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{category.nameFr}</CardTitle>
                      <p className="text-sm text-gray-600 font-arabic">{category.nameAr}</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge 
                        variant={category.priority === 'high' ? 'destructive' : 'secondary'}
                        className="text-xs"
                      >
                        {category.priority === 'high' ? 'Priorité' : 'Standard'}
                      </Badge>
                      <Badge 
                        variant={category.gulfRelevance === 'critical' ? 'default' : 'outline'}
                        className="text-xs"
                      >
                        {category.gulfRelevance === 'critical' ? 'Critique Golfe' : 'Important'}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>{category.currentRules.toLocaleString()} règles</span>
                      <span className="text-gray-600">/ {category.targetRules.toLocaleString()}</span>
                    </div>
                    <Progress value={category.completionRate} className="h-2" />
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>{category.completionRate}% complété</span>
                      <span>{(category.targetRules - category.currentRules).toLocaleString()} restantes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Détails Catégorie Sélectionnée */}
          {selectedCategory && (
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle>
                  Détails: {fiqhCategories.find(c => c.id === selectedCategory)?.nameFr}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Scholars Validateurs</h4>
                    <ul className="text-sm space-y-1">
                      {fiqhCategories.find(c => c.id === selectedCategory)?.scholars.map((scholar, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-emerald-600" />
                          {scholar}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Sources Authentiques</h4>
                    <ul className="text-sm space-y-1">
                      {fiqhCategories.find(c => c.id === selectedCategory)?.sources.map((source, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-blue-600" />
                          {source}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Onglet Marchés Golfe */}
        <TabsContent value="markets" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gulfMarkets.map((market, index) => (
              <Card 
                key={index} 
                className={`${
                  market.priority === 'primary' 
                    ? 'border-emerald-500 bg-emerald-50' 
                    : 'border-blue-300 bg-blue-50'
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="text-2xl">{market.flag}</span>
                      {market.country}
                    </CardTitle>
                    <Badge 
                      variant={market.priority === 'primary' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {market.priority === 'primary' ? 'Priorité 1' : 'Priorité 2'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Étudiants</p>
                        <p className="font-semibold text-emerald-600">
                          {market.students.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Institutions</p>
                        <p className="font-semibold text-blue-600">{market.institutions}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-600 text-sm">Marché</p>
                      <p className="font-semibold text-purple-600">{market.marketSize}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-600 text-xs mb-1">Langues Support</p>
                      <div className="flex flex-wrap gap-1">
                        {market.languages.map((lang, langIndex) => (
                          <Badge key={langIndex} variant="outline" className="text-xs">
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

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-amber-600" />
                Potentiel Total Marché Golfe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-emerald-600">
                    {totalGulfStudents.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">Étudiants Totaux</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">6.57B</p>
                  <p className="text-sm text-gray-600">Marché Total (USD)</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-purple-600">45%</p>
                  <p className="text-sm text-gray-600">Part Marché Cible</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-amber-600">2025-2027</p>
                  <p className="text-sm text-gray-600">Déploiement</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Onglet Roadmap */}
        <TabsContent value="roadmap" className="space-y-6">
          <div className="space-y-6">
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle>Phase 1: Q1-Q2 2025 - Foundation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-emerald-100 text-emerald-800">75,000 règles</Badge>
                    <span className="text-sm">Expansion IA, Blockchain, FinTech (priorité Émirats/Arabie)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-100 text-blue-800">Partenariats</Badge>
                    <span className="text-sm">UAE University, KAUST, Qatar University</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-purple-100 text-purple-800">Certification</Badge>
                    <span className="text-sm">Validation AAOIFI, Majma Al-Fiqh Al-Islami</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle>Phase 2: Q3-Q4 2025 - Expansion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-emerald-100 text-emerald-800">120,000 règles</Badge>
                    <span className="text-sm">IoT, Cybersécurité, Cloud Computing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-100 text-blue-800">Marchés</Badge>
                    <span className="text-sm">Qatar, Koweït, Bahreïn, Oman</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-purple-100 text-purple-800">Localisation</Badge>
                    <span className="text-sm">Support multi-dialectes arabes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle>Phase 3: 2026 - Leadership Mondial</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-emerald-100 text-emerald-800">100% Complet</Badge>
                    <span className="text-sm">Couverture totale Fiqh informatique</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-100 text-blue-800">Innovation</Badge>
                    <span className="text-sm">IA Sharia avancée, Métaverse islamique</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-purple-100 text-purple-800">Position</Badge>
                    <span className="text-sm">Leader mondial incontesté</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <Card className="border-2 border-emerald-500 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <CardContent className="text-center py-8">
          <h3 className="text-2xl font-bold mb-4">
            Rejoignez la Révolution du Fiqh Informatique
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Devenez partenaire de CED Academy dans l'expansion vers 100% du Fiqh informatique
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" size="lg">
              <Users className="h-5 w-5 mr-2" />
              Partenariats Institutionnels
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-emerald-600">
              <BookOpen className="h-5 w-5 mr-2" />
              Catalogue Formations
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}