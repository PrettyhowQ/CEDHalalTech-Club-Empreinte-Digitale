import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap,
  Users,
  Video,
  Calendar,
  Clock,
  Globe,
  Award,
  BookOpen,
  CheckCircle,
  Star,
  Play,
  FileText,
  MessageCircle,
  User,
  Shield,
  Zap,
  Building2,
  DollarSign,
  Eye,
  Target,
  Lightbulb,
  Monitor
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  titleArabic: string;
  category: 'ai-ethics' | 'islamic-finance' | 'tech-halal' | 'data-science' | 'cybersecurity' | 'blockchain';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  duration: number; // heures
  price: {
    local: number; // Prix pour la région locale (Suisse/Europe)
    gulf: number; // Prix pour le Golfe (UAE, Arabie Saoudite, etc.)
    global: number; // Prix pour le reste du monde
  };
  currency: string;
  format: 'virtual-class' | 'self-paced' | 'hybrid' | 'group-project';
  maxStudents: number;
  language: string[];
  instructor: {
    name: string;
    nameArabic: string;
    credentials: string[];
    university: string;
    rating: number;
  };
  certification: {
    provider: string;
    accredited: boolean;
    recognizedBy: string[];
    halalCertified: boolean;
  };
  schedule: {
    startDate: Date;
    endDate: Date;
    weeklyHours: number;
    timezone: string;
  };
  features: string[];
  featuresArabic: string[];
  prerequisites: string[];
  examRequired: boolean;
  groupWork: boolean;
  fiqhCompliant: boolean;
  description: string;
  descriptionArabic: string;
}

interface VirtualClass {
  id: string;
  courseId: string;
  title: string;
  instructor: string;
  date: Date;
  duration: number;
  maxParticipants: number;
  currentParticipants: number;
  type: 'lecture' | 'workshop' | 'exam' | 'group-discussion';
  recordingAvailable: boolean;
  region: 'global' | 'gulf' | 'europe' | 'asia';
}

export default function AdvancedLearningPlatform() {
  const [selectedTab, setSelectedTab] = useState('courses');
  const [selectedRegion, setSelectedRegion] = useState('global');

  const courses: Course[] = [
    {
      id: 'ai-ethics-advanced',
      title: 'Intelligence Artificielle Éthique Avancée',
      titleArabic: 'الذكاء الاصطناعي الأخلاقي المتقدم',
      category: 'ai-ethics',
      level: 'advanced',
      duration: 120,
      price: {
        local: 2500,
        gulf: 5000,
        global: 3500
      },
      currency: 'CHF',
      format: 'virtual-class',
      maxStudents: 25,
      language: ['Français', 'Arabe', 'Anglais'],
      instructor: {
        name: 'Dr. Amina Hassan',
        nameArabic: 'د. أمينة حسن',
        credentials: ['PhD Computer Science MIT', 'Certified Islamic Scholar', 'IEEE Senior Member'],
        university: 'MIT & Al-Azhar University',
        rating: 4.9
      },
      certification: {
        provider: 'CED Academy International',
        accredited: true,
        recognizedBy: ['MIT', 'Stanford', 'Al-Azhar', 'KAUST', 'AUB'],
        halalCertified: true
      },
      schedule: {
        startDate: new Date('2025-07-01'),
        endDate: new Date('2025-09-30'),
        weeklyHours: 10,
        timezone: 'UTC+1 (CET)'
      },
      features: [
        'Classes virtuelles interactives 3D',
        'Projets pratiques avec IA réelle',
        'Mentorat personnalisé 1:1',
        'Accès laboratoire IA cloud',
        'Certification internationale'
      ],
      featuresArabic: [
        'فصول افتراضية تفاعلية ثلاثية الأبعاد',
        'مشاريع عملية مع ذكاء اصطناعي حقيقي',
        'إرشاد شخصي فردي',
        'الوصول إلى مختبر الذكاء الاصطناعي السحابي',
        'شهادة دولية'
      ],
      prerequisites: ['Programmation Python', 'Mathématiques niveau universitaire', 'Bases de l\'IA'],
      examRequired: true,
      groupWork: true,
      fiqhCompliant: true,
      description: 'Formation complète sur l\'IA éthique conforme aux principes islamiques, avec applications pratiques dans la finance halal et la technologie responsable.',
      descriptionArabic: 'تدريب شامل على الذكاء الاصطناعي الأخلاقي المتوافق مع المبادئ الإسلامية، مع تطبيقات عملية في التمويل الحلال والتكنولوجيا المسؤولة.'
    },
    {
      id: 'islamic-fintech',
      title: 'Fintech Islamique et Blockchain Halal',
      titleArabic: 'التكنولوجيا المالية الإسلامية والبلوك تشين الحلال',
      category: 'islamic-finance',
      level: 'expert',
      duration: 160,
      price: {
        local: 3500,
        gulf: 7000,
        global: 5000
      },
      currency: 'CHF',
      format: 'hybrid',
      maxStudents: 20,
      language: ['Arabe', 'Anglais', 'Français'],
      instructor: {
        name: 'Prof. Omar Al-Faisal',
        nameArabic: 'أ.د. عمر الفيصل',
        credentials: ['PhD Islamic Economics Oxford', 'CFA', 'Blockchain Expert', 'Sharia Scholar'],
        university: 'Oxford University & IIUM',
        rating: 4.95
      },
      certification: {
        provider: 'International Islamic Finance Academy',
        accredited: true,
        recognizedBy: ['Oxford', 'IIUM', 'AAOIFI', 'IFSB', 'Harvard Business School'],
        halalCertified: true
      },
      schedule: {
        startDate: new Date('2025-07-15'),
        endDate: new Date('2025-11-15'),
        weeklyHours: 12,
        timezone: 'Multiple (Global)'
      },
      features: [
        'Laboratoire blockchain privé',
        'Partenariats banques islamiques',
        'Projet startup fintech',
        'Conseil Sharia en direct',
        'Stage dans institutions halal'
      ],
      featuresArabic: [
        'مختبر البلوك تشين الخاص',
        'شراكات مع البنوك الإسلامية',
        'مشروع شركة ناشئة في التكنولوجيا المالية',
        'استشارة شرعية مباشرة',
        'تدريب في المؤسسات الحلال'
      ],
      prerequisites: ['Finance de base', 'Programmation', 'Connaissances islamiques'],
      examRequired: true,
      groupWork: true,
      fiqhCompliant: true,
      description: 'Maîtrisez la création de solutions fintech 100% conformes à la Sharia, avec blockchain halal et applications bancaires islamiques.',
      descriptionArabic: 'أتقن إنشاء حلول التكنولوجيا المالية المتوافقة مع الشريعة بنسبة 100%، مع البلوك تشين الحلال وتطبيقات البنوك الإسلامية.'
    },
    {
      id: 'halal-data-science',
      title: 'Science des Données Halal et IA Responsable',
      titleArabic: 'علم البيانات الحلال والذكاء الاصطناعي المسؤول',
      category: 'data-science',
      level: 'intermediate',
      duration: 80,
      price: {
        local: 1800,
        gulf: 3600,
        global: 2500
      },
      currency: 'CHF',
      format: 'virtual-class',
      maxStudents: 30,
      language: ['Français', 'Arabe', 'Anglais'],
      instructor: {
        name: 'Dr. Fatima Al-Zahra',
        nameArabic: 'د. فاطمة الزهراء',
        credentials: ['PhD Data Science ETH Zurich', 'Islamic Ethics Expert', 'Google AI Researcher'],
        university: 'ETH Zurich & KAUST',
        rating: 4.8
      },
      certification: {
        provider: 'ETH Zurich Islamic Tech Institute',
        accredited: true,
        recognizedBy: ['ETH Zurich', 'KAUST', 'Google AI', 'Microsoft Research'],
        halalCertified: true
      },
      schedule: {
        startDate: new Date('2025-08-01'),
        endDate: new Date('2025-10-31'),
        weeklyHours: 8,
        timezone: 'UTC+1 (CET)'
      },
      features: [
        'Algorithmes respectueux de la vie privée',
        'IA sans biais discriminatoires',
        'Projets avec données réelles halal',
        'Certification éthique internationale',
        'Mentorat industrie tech'
      ],
      featuresArabic: [
        'خوارزميات تحترم الخصوصية',
        'ذكاء اصطناعي بدون تحيز تمييزي',
        'مشاريع مع بيانات حقيقية حلال',
        'شهادة أخلاقية دولية',
        'إرشاد صناعة التكنولوجيا'
      ],
      prerequisites: ['Statistiques', 'Python/R', 'Bases machine learning'],
      examRequired: true,
      groupWork: false,
      fiqhCompliant: true,
      description: 'Apprenez à créer des modèles d\'IA et analyser des données en respectant les principes islamiques de justice, transparence et protection de la vie privée.',
      descriptionArabic: 'تعلم إنشاء نماذج الذكاء الاصطناعي وتحليل البيانات مع احترام المبادئ الإسلامية للعدالة والشفافية وحماية الخصوصية.'
    }
  ];

  const virtualClasses: VirtualClass[] = [
    {
      id: 'vc-001',
      courseId: 'ai-ethics-advanced',
      title: 'Introduction à l\'IA Éthique Islamique',
      instructor: 'Dr. Amina Hassan',
      date: new Date('2025-07-03 14:00:00'),
      duration: 120,
      maxParticipants: 25,
      currentParticipants: 18,
      type: 'lecture',
      recordingAvailable: true,
      region: 'global'
    },
    {
      id: 'vc-002',
      courseId: 'islamic-fintech',
      title: 'Blockchain Halal Workshop',
      instructor: 'Prof. Omar Al-Faisal',
      date: new Date('2025-07-17 16:00:00'),
      duration: 180,
      maxParticipants: 20,
      currentParticipants: 15,
      type: 'workshop',
      recordingAvailable: true,
      region: 'gulf'
    }
  ];

  const getPriceByRegion = (course: Course) => {
    switch (selectedRegion) {
      case 'gulf': return course.price.gulf;
      case 'europe': return course.price.local;
      default: return course.price.global;
    }
  };

  const getRegionLabel = (region: string) => {
    switch (region) {
      case 'gulf': return 'Golfe Persique (UAE, Arabie Saoudite, Qatar, etc.)';
      case 'europe': return 'Europe & Suisse';
      default: return 'Mondial';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-blue-100 text-blue-800';
      case 'advanced': return 'bg-orange-100 text-orange-800';
      case 'expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai-ethics': return <Lightbulb className="h-5 w-5" />;
      case 'islamic-finance': return <DollarSign className="h-5 w-5" />;
      case 'data-science': return <Target className="h-5 w-5" />;
      case 'cybersecurity': return <Shield className="h-5 w-5" />;
      case 'blockchain': return <Zap className="h-5 w-5" />;
      default: return <BookOpen className="h-5 w-5" />;
    }
  };

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
              <h1 className="text-4xl font-bold">أكاديمية الانطباع الرقمي العالمية</h1>
              <h2 className="text-2xl text-blue-600">CED Academy International</h2>
              <p className="text-gray-600">Formations en ligne mondiales 100% Halal - Certifications prestigieuses</p>
            </div>
          </div>
        </div>

        {/* Sélection région et prix */}
        <Card className="mb-8 bg-gradient-to-r from-green-500 to-blue-500 text-white">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Tarification Mondiale Adaptée</h3>
                <p className="text-sm opacity-90">Prix ajustés selon votre région pour un accès équitable</p>
              </div>
              <div className="flex gap-2">
                {['global', 'gulf', 'europe'].map((region) => (
                  <Button
                    key={region}
                    variant={selectedRegion === region ? "secondary" : "outline"}
                    onClick={() => setSelectedRegion(region)}
                    className={selectedRegion === region ? 'bg-white text-blue-600' : 'text-white border-white hover:bg-white hover:text-blue-600'}
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    {getRegionLabel(region)}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Catalogue Formations
            </TabsTrigger>
            <TabsTrigger value="virtual-classes" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              Classes Virtuelles
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              Certifications
            </TabsTrigger>
            <TabsTrigger value="fiqh-compliance" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Conformité Fiqh
            </TabsTrigger>
          </TabsList>

          {/* Catalogue des formations */}
          <TabsContent value="courses" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="border-2 hover:border-blue-500 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(course.category)}
                        <Badge className={getLevelColor(course.level)}>
                          {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">
                          {getPriceByRegion(course)} {course.currency}
                        </div>
                        <div className="text-xs text-gray-500">{course.duration}h de formation</div>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <p className="text-sm text-blue-600 font-medium">{course.titleArabic}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600">{course.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span>{course.schedule.weeklyHours}h/semaine</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span>Max {course.maxStudents}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">{course.instructor.name}</div>
                            <div className="text-xs text-gray-500">{course.instructor.nameArabic}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3 w-3 ${i < Math.floor(course.instructor.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                          <span className="text-xs ml-1">{course.instructor.rating}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-sm font-medium">Caractéristiques:</div>
                        <div className="space-y-1">
                          {course.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-xs">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {course.language.map((lang) => (
                          <Badge key={lang} variant="outline" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                        {course.fiqhCompliant && (
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            <Shield className="h-3 w-3 mr-1" />
                            100% Halal
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1">
                          S'inscrire
                        </Button>
                        <Button variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Classes virtuelles */}
          <TabsContent value="virtual-classes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-6 w-6" />
                  Classes Virtuelles Programmées
                </CardTitle>
                <p className="text-gray-600">Sessions interactives en temps réel avec instructeurs experts</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {virtualClasses.map((vclass) => (
                    <div key={vclass.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Video className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{vclass.title}</h3>
                              <p className="text-sm text-gray-600">Instructeur: {vclass.instructor}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-6 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{vclass.date.toLocaleDateString('fr-FR')}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{vclass.duration} min</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{vclass.currentParticipants}/{vclass.maxParticipants}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Badge variant={vclass.recordingAvailable ? "default" : "secondary"}>
                            {vclass.recordingAvailable ? "Enregistré" : "Live uniquement"}
                          </Badge>
                          <Button>
                            <Play className="h-4 w-4 mr-2" />
                            Rejoindre
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Certifications */}
          <TabsContent value="certifications" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 text-yellow-600" />
                    <div>
                      <CardTitle className="text-yellow-800">Certifications Internationales</CardTitle>
                      <p className="text-sm text-yellow-700">Reconnues mondialement</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">MIT & Stanford Partnership</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Al-Azhar University Recognition</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">IEEE Professional Certification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">AAOIFI Islamic Finance Certificate</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Shield className="h-8 w-8 text-green-600" />
                    <div>
                      <CardTitle className="text-green-800">Conformité Halal 100%</CardTitle>
                      <p className="text-sm text-green-700">Validé par scholars</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Conseil Sharia permanent</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Fiqh informatique respecté</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Contenu vérifié 24/7</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Séparation homme/femme optionnelle</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Globe className="h-8 w-8 text-blue-600" />
                    <div>
                      <CardTitle className="text-blue-800">Accès Mondial</CardTitle>
                      <p className="text-sm text-blue-700">Plus de 195 pays</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Fuseau horaire adaptatif</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Support multilingue 24/7</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Tarification régionale équitable</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Connexion satellite disponible</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Conformité Fiqh */}
          <TabsContent value="fiqh-compliance" className="space-y-6">
            <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
              <CardContent className="p-8">
                <div className="text-center">
                  <Shield className="h-16 w-16 mx-auto mb-4 text-white" />
                  <h2 className="text-3xl font-bold mb-4">فقه الحاسوب والتكنولوجيا</h2>
                  <h3 className="text-xl mb-2">Fiqh de l'Informatique et de la Technologie</h3>
                  <p className="text-lg opacity-90 mb-4">
                    Toutes nos formations respectent strictement les principes islamiques
                  </p>
                  <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Accéder au Guide Fiqh Complet
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-green-600" />
                    Principes Respectés
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold">Protection de la Vie Privée</h4>
                      <p className="text-sm text-gray-600">Aucune collecte de données personnelles non nécessaires</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">Justice et Équité</h4>
                      <p className="text-sm text-gray-600">Accès équitable aux formations pour tous</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold">Transparence Totale</h4>
                      <p className="text-sm text-gray-600">Contenu et méthodes d'évaluation clairement définis</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold">Séparation Homme/Femme</h4>
                      <p className="text-sm text-gray-600">Salles virtuelles séparées disponibles sur demande</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-blue-600" />
                    Conseil Sharia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800">5 Scholars Résidents</h4>
                      <p className="text-sm text-green-700">Surveillance continue du contenu</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Dr. Ahmad Al-Qasimi (Al-Azhar)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Sheikh Omar Al-Dimashqi (Damas)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Dr. Fatima Bennani (Rabat)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Prof. Abdullah Al-Turki (Médine)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Dr. Hassan Al-Maliki (Kuala Lumpur)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p className="mb-2">
            © 2025 CED Academy International - Formations mondiales 100% Halal - Yakoubi Yamina
          </p>
          <p>
            🎓 Excellence académique - Certifications prestigieuses - Accès équitable mondial
          </p>
        </div>
      </div>
    </div>
  );
}