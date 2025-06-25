import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap,
  Building2,
  Star,
  CheckCircle,
  X,
  Award,
  Globe,
  DollarSign,
  Users,
  Clock,
  Shield,
  Zap,
  Eye,
  Crown,
  Target,
  TrendingUp
} from "lucide-react";

interface OnlineSchool {
  id: string;
  name: string;
  country: string;
  logo: string;
  founded: number;
  students: number; // en millions
  courses: number;
  instructors: number;
  rating: number;
  price: {
    monthly: number;
    annual: number;
    currency: string;
  };
  specializations: string[];
  certifications: string[];
  languages: string[];
  features: {
    liveClasses: boolean;
    selfPaced: boolean;
    groupProjects: boolean;
    mentorship: boolean;
    careerSupport: boolean;
    mobileApp: boolean;
    offlineAccess: boolean;
    certificates: boolean;
    universityCredit: boolean;
    corporatePartnership: boolean;
  };
  strengths: string[];
  weaknesses: string[];
  marketShare: number;
  satisfaction: number;
  completionRate: number;
  employmentRate: number;
  islamicCompliant: boolean;
  fiqhSupport: boolean;
}

export default function OnlineEducationComparison() {
  const [selectedCategory, setSelectedCategory] = useState('overview');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');

  const schools: OnlineSchool[] = [
    {
      id: 'ced-academy',
      name: 'CED Academy International',
      country: 'Suisse',
      logo: '🎓',
      founded: 2024,
      students: 0.15,
      courses: 85,
      instructors: 45,
      rating: 4.95,
      price: {
        monthly: 299,
        annual: 2990,
        currency: 'CHF'
      },
      specializations: [
        'IA Éthique',
        'Fintech Islamique',
        'Data Science Halal',
        'Cybersécurité',
        'Blockchain Halal',
        'Marketing Digital Éthique',
        'Développement Web Responsable'
      ],
      certifications: [
        'MIT Partnership',
        'Stanford Collaboration',
        'Al-Azhar Islamic Certification',
        'ETH Zurich Recognition',
        'Oxford Certificate',
        'IEEE Professional',
        'AAOIFI Islamic Finance'
      ],
      languages: ['Français', 'Arabe', 'Anglais', 'Allemand'],
      features: {
        liveClasses: true,
        selfPaced: true,
        groupProjects: true,
        mentorship: true,
        careerSupport: true,
        mobileApp: true,
        offlineAccess: true,
        certificates: true,
        universityCredit: true,
        corporatePartnership: true
      },
      strengths: [
        '100% conformité Sharia avec scholars résidents',
        'Partenariats prestigieux MIT/Stanford/Al-Azhar',
        'Support Fiqh informatique intégré',
        'Tarification régionale équitable',
        'Excellence Swiss quality',
        'Innovation technologique de pointe'
      ],
      weaknesses: [
        'Nouvelle école (moins d\'historique)',
        'Nombre d\'étudiants encore limité'
      ],
      marketShare: 2.5,
      satisfaction: 98,
      completionRate: 92,
      employmentRate: 95,
      islamicCompliant: true,
      fiqhSupport: true
    },
    {
      id: 'coursera',
      name: 'Coursera',
      country: 'États-Unis',
      logo: '📚',
      founded: 2012,
      students: 118,
      courses: 5400,
      instructors: 275,
      rating: 4.5,
      price: {
        monthly: 59,
        annual: 499,
        currency: 'USD'
      },
      specializations: [
        'Data Science',
        'Computer Science',
        'Business',
        'AI/Machine Learning',
        'Digital Marketing',
        'Cybersecurity',
        'Web Development'
      ],
      certifications: [
        'University Degrees',
        'Google Certificates',
        'IBM Certificates',
        'Meta Certificates',
        'Amazon Certificates'
      ],
      languages: ['Anglais', 'Espagnol', 'Français', 'Chinois'],
      features: {
        liveClasses: false,
        selfPaced: true,
        groupProjects: true,
        mentorship: false,
        careerSupport: true,
        mobileApp: true,
        offlineAccess: true,
        certificates: true,
        universityCredit: true,
        corporatePartnership: true
      },
      strengths: [
        'Plus grande plateforme mondiale',
        'Partenariats universités prestigieuses',
        'Large choix de cours',
        'Prix abordable'
      ],
      weaknesses: [
        'Pas de support islamique',
        'Contenu parfois non-halal',
        'Support limité',
        'Pas de classes live'
      ],
      marketShare: 35,
      satisfaction: 75,
      completionRate: 65,
      employmentRate: 72,
      islamicCompliant: false,
      fiqhSupport: false
    },
    {
      id: 'udacity',
      name: 'Udacity',
      country: 'États-Unis',
      logo: '🚀',
      founded: 2011,
      students: 12,
      courses: 200,
      instructors: 150,
      rating: 4.3,
      price: {
        monthly: 399,
        annual: 3588,
        currency: 'USD'
      },
      specializations: [
        'AI/Machine Learning',
        'Data Science',
        'Autonomous Systems',
        'Cloud Computing',
        'Cybersecurity',
        'Digital Marketing',
        'Programming'
      ],
      certifications: [
        'Nanodegree Programs',
        'Industry Partnerships',
        'Google Cloud',
        'AWS Certifications',
        'Nvidia Certificates'
      ],
      languages: ['Anglais', 'Arabe', 'Chinois'],
      features: {
        liveClasses: true,
        selfPaced: true,
        groupProjects: true,
        mentorship: true,
        careerSupport: true,
        mobileApp: true,
        offlineAccess: false,
        certificates: true,
        universityCredit: false,
        corporatePartnership: true
      },
      strengths: [
        'Focus sur les technologies avancées',
        'Mentorat personnalisé',
        'Projets pratiques réels',
        'Support carrière excellent'
      ],
      weaknesses: [
        'Prix élevé',
        'Pas de conformité islamique',
        'Contenu technique exclusivement',
        'Pas de crédits universitaires'
      ],
      marketShare: 8,
      satisfaction: 82,
      completionRate: 78,
      employmentRate: 85,
      islamicCompliant: false,
      fiqhSupport: false
    },
    {
      id: 'edx',
      name: 'edX',
      country: 'États-Unis',
      logo: '🏛️',
      founded: 2012,
      students: 45,
      courses: 3500,
      instructors: 200,
      rating: 4.4,
      price: {
        monthly: 99,
        annual: 990,
        currency: 'USD'
      },
      specializations: [
        'Computer Science',
        'Data Science',
        'Business',
        'Engineering',
        'Liberal Arts',
        'Sciences',
        'Language Learning'
      ],
      certifications: [
        'Harvard Certificates',
        'MIT Certificates',
        'Berkeley Certificates',
        'IBM Certificates',
        'Microsoft Certificates'
      ],
      languages: ['Anglais', 'Espagnol', 'Français', 'Mandarin'],
      features: {
        liveClasses: false,
        selfPaced: true,
        groupProjects: false,
        mentorship: false,
        careerSupport: false,
        mobileApp: true,
        offlineAccess: true,
        certificates: true,
        universityCredit: true,
        corporatePartnership: true
      },
      strengths: [
        'Cours universitaires gratuits',
        'Prestigieuses universités (Harvard, MIT)',
        'Contenu académique rigoureux',
        'Certifications reconnues'
      ],
      weaknesses: [
        'Interface basique',
        'Pas de support personnalisé',
        'Pas de conformité islamique',
        'Taux d\'abandon élevé'
      ],
      marketShare: 12,
      satisfaction: 70,
      completionRate: 58,
      employmentRate: 68,
      islamicCompliant: false,
      fiqhSupport: false
    },
    {
      id: 'udemy',
      name: 'Udemy',
      country: 'États-Unis',
      logo: '💼',
      founded: 2010,
      students: 64,
      courses: 213000,
      instructors: 75000,
      rating: 4.2,
      price: {
        monthly: 29,
        annual: 240,
        currency: 'USD'
      },
      specializations: [
        'Development',
        'Business',
        'IT & Software',
        'Design',
        'Marketing',
        'Personal Development',
        'Photography'
      ],
      certifications: [
        'Udemy Certificates',
        'Industry Recognition',
        'CPE Credits',
        'PMI PDUs'
      ],
      languages: ['75+ langues'],
      features: {
        liveClasses: false,
        selfPaced: true,
        groupProjects: false,
        mentorship: false,
        careerSupport: false,
        mobileApp: true,
        offlineAccess: true,
        certificates: true,
        universityCredit: false,
        corporatePartnership: false
      },
      strengths: [
        'Plus grand choix de cours',
        'Prix très abordable',
        'Instructeurs diversifiés',
        'Accès à vie aux cours'
      ],
      weaknesses: [
        'Qualité variable',
        'Pas de support structured',
        'Pas de conformité islamique',
        'Certifications peu reconnues'
      ],
      marketShare: 25,
      satisfaction: 68,
      completionRate: 45,
      employmentRate: 55,
      islamicCompliant: false,
      fiqhSupport: false
    },
    {
      id: 'linkedin-learning',
      name: 'LinkedIn Learning',
      country: 'États-Unis',
      logo: '💼',
      founded: 2015,
      students: 27,
      courses: 25000,
      instructors: 1500,
      rating: 4.3,
      price: {
        monthly: 39,
        annual: 359,
        currency: 'USD'
      },
      specializations: [
        'Business Skills',
        'Technology',
        'Creative Skills',
        'Leadership',
        'Software Development',
        'Data Science',
        'Project Management'
      ],
      certifications: [
        'LinkedIn Certificates',
        'Professional Skills',
        'Industry Recognition',
        'CPE Credits'
      ],
      languages: ['Anglais', 'Français', 'Allemand', 'Espagnol'],
      features: {
        liveClasses: false,
        selfPaced: true,
        groupProjects: false,
        mentorship: false,
        careerSupport: true,
        mobileApp: true,
        offlineAccess: true,
        certificates: true,
        universityCredit: false,
        corporatePartnership: true
      },
      strengths: [
        'Intégration LinkedIn profile',
        'Focus compétences professionnelles',
        'Contenu de qualité',
        'Recommandations personnalisées'
      ],
      weaknesses: [
        'Pas de certifications académiques',
        'Pas de conformité islamique',
        'Limité aux soft skills',
        'Pas de projets pratiques'
      ],
      marketShare: 6,
      satisfaction: 76,
      completionRate: 62,
      employmentRate: 71,
      islamicCompliant: false,
      fiqhSupport: false
    }
  ];

  const specializations = [
    'all',
    'Data Science',
    'IA/Machine Learning',
    'Cybersécurité',
    'Développement Web',
    'Finance/Fintech',
    'Marketing Digital',
    'Business/Entrepreneuriat'
  ];

  const filteredSchools = schools.filter(school => {
    if (selectedSpecialization === 'all') return true;
    return school.specializations.some(spec => 
      spec.toLowerCase().includes(selectedSpecialization.toLowerCase()) ||
      selectedSpecialization.toLowerCase().includes(spec.toLowerCase())
    );
  });

  const getComplianceColor = (compliant: boolean) => {
    return compliant ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100';
  };

  const getRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && <Star className="h-4 w-4 fill-yellow-200 text-yellow-400" />}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <Star key={i + fullStars} className="h-4 w-4 text-gray-300" />
        ))}
        <span className="ml-2 font-semibold">{rating.toFixed(1)}</span>
      </div>
    );
  };

  const categories = [
    { id: 'overview', name: 'Vue d\'ensemble', icon: Eye },
    { id: 'features', name: 'Fonctionnalités', icon: Zap },
    { id: 'pricing', name: 'Tarification', icon: DollarSign },
    { id: 'performance', name: 'Performance', icon: TrendingUp },
    { id: 'islamic-compliance', name: 'Conformité Islamique', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">مقارنة منصات التعليم الرقمي العالمية</h1>
              <h2 className="text-2xl text-blue-600">Comparaison Écoles en Ligne Mondiales</h2>
              <p className="text-gray-600">CED Academy vs Leaders mondiaux de l'éducation numérique</p>
            </div>
          </div>
        </div>

        {/* Filtre spécialisations */}
        <Card className="mb-8 bg-gradient-to-r from-green-500 to-blue-500 text-white">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Filtrer par Spécialisation</h3>
                <p className="text-sm opacity-90">Comparez les plateformes selon vos besoins de formation</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec) => (
                  <Button
                    key={spec}
                    variant={selectedSpecialization === spec ? "secondary" : "outline"}
                    onClick={() => setSelectedSpecialization(spec)}
                    className={selectedSpecialization === spec ? 'bg-white text-blue-600' : 'text-white border-white hover:bg-white hover:text-blue-600'}
                  >
                    {spec === 'all' ? 'Toutes' : spec}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                <category.icon className="h-4 w-4" />
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredSchools.map((school) => (
                <Card key={school.id} className={`${school.id === 'ced-academy' ? 'border-2 border-blue-500 bg-blue-50' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{school.logo}</div>
                        <div>
                          <CardTitle className="text-lg">{school.name}</CardTitle>
                          <p className="text-sm text-gray-600">{school.country}</p>
                        </div>
                      </div>
                      {school.id === 'ced-academy' && (
                        <Badge className="bg-blue-100 text-blue-800">
                          <Crown className="h-3 w-3 mr-1" />
                          100% Halal
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Étudiants:</span>
                          <div className="font-semibold">{school.students.toFixed(1)}M</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Cours:</span>
                          <div className="font-semibold">{school.courses.toLocaleString()}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Instructeurs:</span>
                          <div className="font-semibold">{school.instructors.toLocaleString()}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Fondé:</span>
                          <div className="font-semibold">{school.founded}</div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-gray-600 mb-1">Évaluation:</div>
                        {getRatingStars(school.rating)}
                      </div>

                      <div>
                        <div className="text-sm text-gray-600 mb-2">Prix mensuel:</div>
                        <div className="text-xl font-bold text-green-600">
                          {school.price.monthly} {school.price.currency}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium mb-2">Spécialisations principales:</div>
                        <div className="flex flex-wrap gap-1">
                          {school.specializations.slice(0, 3).map((spec) => (
                            <Badge key={spec} variant="outline" className="text-xs">
                              {spec}
                            </Badge>
                          ))}
                          {school.specializations.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{school.specializations.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t">
                        <Badge className={getComplianceColor(school.islamicCompliant)}>
                          {school.islamicCompliant ? 'Halal Certifié' : 'Non Conforme'}
                        </Badge>
                        <div className="text-sm text-gray-600">
                          {school.marketShare}% de marché
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Fonctionnalités */}
          <TabsContent value="features" className="space-y-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Plateforme</th>
                    <th className="text-center p-2">Classes Live</th>
                    <th className="text-center p-2">Auto-rythmé</th>
                    <th className="text-center p-2">Projets Groupe</th>
                    <th className="text-center p-2">Mentorat</th>
                    <th className="text-center p-2">Support Carrière</th>
                    <th className="text-center p-2">App Mobile</th>
                    <th className="text-center p-2">Crédits Univ.</th>
                    <th className="text-center p-2">Support Fiqh</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSchools.map((school) => (
                    <tr key={school.id} className={`border-b ${school.id === 'ced-academy' ? 'bg-blue-50' : ''}`}>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{school.logo}</span>
                          <span className="font-medium">{school.name}</span>
                        </div>
                      </td>
                      <td className="text-center p-2">
                        {school.features.liveClasses ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                      <td className="text-center p-2">
                        {school.features.selfPaced ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                      <td className="text-center p-2">
                        {school.features.groupProjects ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                      <td className="text-center p-2">
                        {school.features.mentorship ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                      <td className="text-center p-2">
                        {school.features.careerSupport ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                      <td className="text-center p-2">
                        {school.features.mobileApp ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                      <td className="text-center p-2">
                        {school.features.universityCredit ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                      <td className="text-center p-2">
                        {school.fiqhSupport ? 
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Tarification */}
          <TabsContent value="pricing" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSchools.map((school) => (
                <Card key={school.id} className={`${school.id === 'ced-academy' ? 'border-2 border-green-500 bg-green-50' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{school.logo}</span>
                        <div>
                          <CardTitle>{school.name}</CardTitle>
                          <p className="text-sm text-gray-600">{school.country}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">
                          {school.price.monthly} {school.price.currency}
                        </div>
                        <div className="text-sm text-gray-600">par mois</div>
                        <div className="text-lg font-semibold text-green-600 mt-2">
                          {school.price.annual} {school.price.currency}/an
                        </div>
                        <div className="text-xs text-gray-500">
                          Économie: {((school.price.monthly * 12 - school.price.annual) / (school.price.monthly * 12) * 100).toFixed(0)}%
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <div className="text-sm font-medium mb-2">Inclus:</div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>{school.courses.toLocaleString()} cours</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>Certificats inclus</span>
                          </div>
                          {school.features.mentorship && (
                            <div className="flex items-center gap-2 text-xs">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              <span>Mentorat personnalisé</span>
                            </div>
                          )}
                          {school.fiqhSupport && (
                            <div className="flex items-center gap-2 text-xs">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              <span>Support Fiqh 24/7</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {school.id === 'ced-academy' && (
                        <div className="bg-green-100 p-3 rounded-lg">
                          <div className="text-sm font-semibold text-green-800 mb-1">Avantages exclusifs:</div>
                          <div className="text-xs text-green-700">
                            • Conformité Sharia 100%<br/>
                            • Scholars résidents<br/>
                            • Support multilingue<br/>
                            • Excellence Swiss Quality
                          </div>
                        </div>
                      )}

                      <Button className="w-full">
                        Voir les détails
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Performance */}
          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredSchools.map((school) => (
                <Card key={school.id} className={`${school.id === 'ced-academy' ? 'border-2 border-blue-500 bg-blue-50' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{school.logo}</span>
                      <div>
                        <CardTitle>{school.name}</CardTitle>
                        <p className="text-sm text-gray-600">Métriques de performance</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Satisfaction étudiants</span>
                          <span className="font-semibold">{school.satisfaction}%</span>
                        </div>
                        <Progress value={school.satisfaction} className="mb-2" />
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Taux de completion</span>
                          <span className="font-semibold">{school.completionRate}%</span>
                        </div>
                        <Progress value={school.completionRate} className="mb-2" />
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Taux d'emploi post-formation</span>
                          <span className="font-semibold">{school.employmentRate}%</span>
                        </div>
                        <Progress value={school.employmentRate} className="mb-2" />
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Part de marché</span>
                          <span className="font-semibold">{school.marketShare}%</span>
                        </div>
                        <Progress value={school.marketShare} className="mb-2" />
                      </div>

                      <div className="pt-4 border-t">
                        <div className="text-sm font-medium mb-2">Points forts:</div>
                        <div className="space-y-1">
                          {school.strengths.slice(0, 3).map((strength, index) => (
                            <div key={index} className="text-xs text-green-700 flex items-start gap-1">
                              <CheckCircle className="h-3 w-3 mt-0.5 flex-shrink-0" />
                              <span>{strength}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Conformité Islamique */}
          <TabsContent value="islamic-compliance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredSchools.map((school) => (
                <Card key={school.id} className={`${school.islamicCompliant ? 'border-2 border-green-500 bg-green-50' : 'border-2 border-red-200 bg-red-50'}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{school.logo}</span>
                        <div>
                          <CardTitle>{school.name}</CardTitle>
                          <p className="text-sm text-gray-600">{school.country}</p>
                        </div>
                      </div>
                      <div className="text-center">
                        {school.islamicCompliant ? (
                          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="h-6 w-6 text-white" />
                          </div>
                        ) : (
                          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                            <X className="h-6 w-6 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className={`p-4 rounded-lg ${school.islamicCompliant ? 'bg-green-100' : 'bg-red-100'}`}>
                        <div className={`text-sm font-semibold mb-2 ${school.islamicCompliant ? 'text-green-800' : 'text-red-800'}`}>
                          Statut Conformité:
                        </div>
                        <div className={`text-lg font-bold ${school.islamicCompliant ? 'text-green-600' : 'text-red-600'}`}>
                          {school.islamicCompliant ? '100% HALAL CERTIFIÉ' : 'NON CONFORME SHARIA'}
                        </div>
                      </div>

                      {school.islamicCompliant ? (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Support Fiqh informatique intégré</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Scholars résidents 24/7</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Contenu vérifié Sharia</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Séparation homme/femme disponible</span>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <X className="h-4 w-4 text-red-500" />
                            <span>Pas de support Fiqh</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <X className="h-4 w-4 text-red-500" />
                            <span>Contenu non vérifié</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <X className="h-4 w-4 text-red-500" />
                            <span>Mixité obligatoire</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <X className="h-4 w-4 text-red-500" />
                            <span>Contenus potentiellement haram</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
              <CardContent className="p-8">
                <div className="text-center">
                  <Shield className="h-16 w-16 mx-auto mb-4 text-white" />
                  <h2 className="text-3xl font-bold mb-4">CED Academy - Seule Plateforme 100% Halal</h2>
                  <p className="text-lg opacity-90 mb-6">
                    La seule école en ligne mondiale offrant une formation complète avec garantie Sharia
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">5</div>
                      <div className="text-sm opacity-90">Scholars Résidents</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm opacity-90">Support Fiqh</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm opacity-90">Contenu Vérifié</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">3</div>
                      <div className="text-sm opacity-90">Langues Support</div>
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
            © 2025 CED Academy International - Comparaison mondiale écoles numériques - Yakoubi Yamina
          </p>
          <p>
            🎓 Excellence académique - Leader conformité Sharia - Formation halal garantie
          </p>
        </div>
      </div>
    </div>
  );
}