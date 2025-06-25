import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Award, 
  CheckCircle, 
  Clock,
  Star,
  Phone,
  Mail,
  Globe,
  Book,
  Shield,
  FileText,
  Calendar,
  AlertCircle,
  Zap,
  Eye,
  Download
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Scholar {
  id: string;
  name: string;
  arabicName: string;
  title: string;
  institution: string;
  country: string;
  specialization: string[];
  experience: number;
  certifications: string[];
  languages: string[];
  availability: 'online' | 'busy' | 'offline';
  contactMethods: string[];
  hourlyRate: number;
  currency: string;
  timezone: string;
  photoUrl?: string;
  bio: string;
  fatwasIssued: number;
  projectsSupervised: number;
  averageResponseTime: number; // en heures
}

interface ShariaRuling {
  id: string;
  scholarId: string;
  topic: string;
  question: string;
  ruling: 'halal' | 'haram' | 'makruh' | 'mubah' | 'mustahab';
  evidence: string[];
  conditions: string[];
  dateIssued: Date;
  validUntil?: Date;
  category: 'banking' | 'investment' | 'insurance' | 'technology' | 'operations';
  confidenceLevel: number;
  consensusLevel: 'unanimous' | 'majority' | 'individual';
  implementationStatus: 'pending' | 'implemented' | 'monitoring';
}

interface GovernanceMeeting {
  id: string;
  date: Date;
  type: 'monthly' | 'emergency' | 'quarterly_audit' | 'annual_review';
  participants: string[];
  agenda: string[];
  decisions: string[];
  rulings: string[];
  nextMeeting: Date;
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  meetingNotes?: string;
  recordingUrl?: string;
}

export default function ShariaGovernanceBoard() {
  const [scholars, setScholars] = useState<Scholar[]>([]);
  const [rulings, setRulings] = useState<ShariaRuling[]>([]);
  const [meetings, setMeetings] = useState<GovernanceMeeting[]>([]);
  const [selectedScholar, setSelectedScholar] = useState<string>('');
  const [consultationRequest, setConsultationRequest] = useState<string>('');
  const { toast } = useToast();

  useEffect(() => {
    // Conseil Sharia permanent de CED Bank
    const shariaBoard: Scholar[] = [
      {
        id: 'scholar-1',
        name: 'Dr. Ahmed Al-Mahmoud',
        arabicName: 'د. أحمد المحمود',
        title: 'Président du Conseil Sharia',
        institution: 'AAOIFI - Accounting and Auditing Organization for Islamic Financial Institutions',
        country: 'Bahrain',
        specialization: ['Islamic Banking', 'Financial Jurisprudence', 'Sukuk', 'Modern Finance'],
        experience: 25,
        certifications: ['AAOIFI Certified', 'PhD Islamic Economics', 'Al-Azhar Graduate'],
        languages: ['Arabic', 'English', 'French'],
        availability: 'online',
        contactMethods: ['video_call', 'phone', 'email', 'whatsapp'],
        hourlyRate: 500,
        currency: 'USD',
        timezone: 'GMT+3',
        bio: 'Expert reconnu mondialement en finance islamique avec 25 ans d\'expérience. Ancien conseiller de la Banque Islamique de Développement.',
        fatwasIssued: 847,
        projectsSupervised: 156,
        averageResponseTime: 2
      },
      {
        id: 'scholar-2',
        name: 'Prof. Fatima Al-Zahra',
        arabicName: 'أ.د. فاطمة الزهراء',
        title: 'Vice-Présidente - Spécialiste Transactions',
        institution: 'Islamic University of Madinah',
        country: 'Saudi Arabia',
        specialization: ['Modern Transactions', 'Digital Finance', 'Cryptocurrency', 'FinTech'],
        experience: 18,
        certifications: ['PhD Sharia', 'IFSB Expert', 'Madinah University Professor'],
        languages: ['Arabic', 'English', 'Urdu'],
        availability: 'online',
        contactMethods: ['video_call', 'email', 'phone'],
        hourlyRate: 450,
        currency: 'USD',
        timezone: 'GMT+3',
        bio: 'Pionnière dans l\'adaptation de la Sharia aux technologies financières modernes. Auteure de 15 livres sur la finance islamique digitale.',
        fatwasIssued: 623,
        projectsSupervised: 89,
        averageResponseTime: 1.5
      },
      {
        id: 'scholar-3',
        name: 'Sheikh Omar Ibn Rashid',
        arabicName: 'الشيخ عمر بن راشد',
        title: 'Membre - Innovation & Blockchain',
        institution: 'Dubai Islamic Economics Institute',
        country: 'UAE',
        specialization: ['Blockchain', 'Smart Contracts', 'DeFi', 'Innovation'],
        experience: 15,
        certifications: ['Islamic Economics PhD', 'Blockchain Expert', 'CIFE Certified'],
        languages: ['Arabic', 'English', 'Persian'],
        availability: 'online',
        contactMethods: ['video_call', 'whatsapp', 'email'],
        hourlyRate: 400,
        currency: 'USD',
        timezone: 'GMT+4',
        bio: 'Expert en innovation financière islamique et technologies blockchain. Consultant pour plusieurs banques centrales du Golfe.',
        fatwasIssued: 445,
        projectsSupervised: 67,
        averageResponseTime: 3
      },
      {
        id: 'scholar-4',
        name: 'Dr. Yusuf Al-Qaradawi Jr.',
        arabicName: 'د. يوسف القرضاوي الابن',
        title: 'Membre - Conformité Globale',
        institution: 'Qatar Islamic Bank',
        country: 'Qatar',
        specialization: ['Global Compliance', 'International Standards', 'Risk Management'],
        experience: 12,
        certifications: ['PhD Islamic Law', 'AAOIFI Auditor', 'Risk Management Expert'],
        languages: ['Arabic', 'English', 'German'],
        availability: 'online',
        contactMethods: ['video_call', 'phone', 'email'],
        hourlyRate: 350,
        currency: 'USD',
        timezone: 'GMT+3',
        bio: 'Spécialisé dans la conformité Sharia à l\'échelle internationale. Fils du célèbre scholar Yusuf Al-Qaradawi.',
        fatwasIssued: 298,
        projectsSupervised: 45,
        averageResponseTime: 4
      },
      {
        id: 'scholar-5',
        name: 'Prof. Abdullah Al-Mani',
        arabicName: 'أ.د. عبدالله المانع',
        title: 'Membre - Audit & Supervision',
        institution: 'Kuwait Finance House',
        country: 'Kuwait',
        specialization: ['Sharia Audit', 'Internal Controls', 'Supervision', 'Compliance'],
        experience: 20,
        certifications: ['PhD Comparative Jurisprudence', 'Internal Audit Expert', 'KFH Senior Advisor'],
        languages: ['Arabic', 'English'],
        availability: 'online',
        contactMethods: ['video_call', 'phone', 'email'],
        hourlyRate: 380,
        currency: 'USD',
        timezone: 'GMT+3',
        bio: 'Expert en audit Sharia avec 20 ans d\'expérience chez Kuwait Finance House. Spécialiste des contrôles internes islamiques.',
        fatwasIssued: 534,
        projectsSupervised: 112,
        averageResponseTime: 2.5
      }
    ];

    setScholars(shariaBoard);

    // Rulings récents
    const recentRulings: ShariaRuling[] = [
      {
        id: 'ruling-1',
        scholarId: 'scholar-1',
        topic: 'DeFi Staking Protocols',
        question: 'حكم المشاركة في بروتوكولات الـ DeFi للحصول على عوائد؟',
        ruling: 'mubah',
        evidence: ['Quran 2:275', 'Hadith Bukhari 2067', 'AAOIFI Standard 17'],
        conditions: ['Absence de ribâ', 'Partage réel des risques', 'Actifs sous-jacents licites'],
        dateIssued: new Date('2024-12-01'),
        category: 'technology',
        confidenceLevel: 95,
        consensusLevel: 'majority',
        implementationStatus: 'implemented'
      },
      {
        id: 'ruling-2',
        scholarId: 'scholar-2',
        topic: 'Blockchain Transaction Fees',
        question: 'ما حكم رسوم المعاملات في البلوك تشين؟',
        ruling: 'halal',
        evidence: ['Principle of Ujrah', 'Service provision legitimacy'],
        conditions: ['Frais proportionnels au service', 'Transparence complète', 'Pas de gharar excessif'],
        dateIssued: new Date('2024-11-28'),
        category: 'technology',
        confidenceLevel: 98,
        consensusLevel: 'unanimous',
        implementationStatus: 'implemented'
      },
      {
        id: 'ruling-3',
        scholarId: 'scholar-3',
        topic: 'Automatic Zakat Distribution',
        question: 'هل يجوز توزيع الزكاة آلياً عبر الذكاء الاصطناعي؟',
        ruling: 'mustahab',
        evidence: ['Efficiency in distribution', 'Reaching deserving recipients', 'Transparency'],
        conditions: ['Supervision humaine', 'Vérification des bénéficiaires', 'Audit régulier'],
        dateIssued: new Date('2024-12-10'),
        category: 'operations',
        confidenceLevel: 90,
        consensusLevel: 'majority',
        implementationStatus: 'monitoring'
      }
    ];

    setRulings(recentRulings);

    // Réunions programmées
    const upcomingMeetings: GovernanceMeeting[] = [
      {
        id: 'meeting-1',
        date: new Date('2025-01-15T14:00:00'),
        type: 'monthly',
        participants: ['scholar-1', 'scholar-2', 'scholar-3', 'scholar-4', 'scholar-5'],
        agenda: [
          'Revue conformité produits Q4 2024',
          'Validation nouveaux protocoles DeFi',
          'Audit trimestriel opérations',
          'Planification formation équipe'
        ],
        decisions: [],
        rulings: [],
        nextMeeting: new Date('2025-02-15T14:00:00'),
        status: 'scheduled'
      },
      {
        id: 'meeting-2',
        date: new Date('2025-01-30T16:00:00'),
        type: 'quarterly_audit',
        participants: ['scholar-1', 'scholar-5'],
        agenda: [
          'Audit complet Q4 2024',
          'Rapport conformité Sharia',
          'Recommandations améliorations',
          'Certification AAOIFI renewal'
        ],
        decisions: [],
        rulings: [],
        nextMeeting: new Date('2025-04-30T16:00:00'),
        status: 'scheduled'
      }
    ];

    setMeetings(upcomingMeetings);
  }, []);

  const requestConsultation = async () => {
    if (!selectedScholar || !consultationRequest.trim()) {
      toast({
        title: "معلومات ناقصة",
        description: "يرجى اختيار عالم وكتابة السؤال",
        variant: "destructive"
      });
      return;
    }

    const scholar = scholars.find(s => s.id === selectedScholar);
    if (!scholar) return;

    // Simulation de demande consultation
    toast({
      title: "تم إرسال طلب الاستشارة",
      description: `سيتم الرد من ${scholar.arabicName} خلال ${scholar.averageResponseTime} ساعات`,
    });

    setConsultationRequest('');
    setSelectedScholar('');
  };

  const getRulingColor = (ruling: string) => {
    const colors = {
      halal: 'bg-green-100 text-green-800',
      haram: 'bg-red-100 text-red-800',
      makruh: 'bg-orange-100 text-orange-800',
      mubah: 'bg-blue-100 text-blue-800',
      mustahab: 'bg-purple-100 text-purple-800'
    };
    return colors[ruling as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getRulingArabic = (ruling: string) => {
    const rulings = {
      halal: 'حلال',
      haram: 'حرام',
      makruh: 'مكروه',
      mubah: 'مباح',
      mustahab: 'مستحب'
    };
    return rulings[ruling as keyof typeof rulings] || 'غير محدد';
  };

  const getAvailabilityIcon = (availability: string) => {
    switch (availability) {
      case 'online': return <div className="w-3 h-3 bg-green-500 rounded-full"></div>;
      case 'busy': return <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>;
      case 'offline': return <div className="w-3 h-3 bg-gray-500 rounded-full"></div>;
      default: return <div className="w-3 h-3 bg-gray-300 rounded-full"></div>;
    }
  };

  const totalScholars = scholars.length;
  const activeScholars = scholars.filter(s => s.availability === 'online').length;
  const totalRulings = rulings.length;
  const avgResponseTime = scholars.reduce((sum, s) => sum + s.averageResponseTime, 0) / scholars.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-gold-500 rounded-lg flex items-center justify-center">
              <Users className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">هيئة الرقابة الشرعية</h1>
              <h2 className="text-2xl font-semibold text-emerald-600">Conseil de Gouvernance Sharia</h2>
              <p className="text-gray-600">Supervision permanente - Certification AAOIFI - Standards internationaux</p>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-emerald-600">{totalScholars}</div>
              <div className="text-sm text-gray-600">Scholars Résidents</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-green-600">{activeScholars}</div>
              <div className="text-sm text-gray-600">En Ligne Maintenant</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-blue-600">{totalRulings}</div>
              <div className="text-sm text-gray-600">Rulings Récents</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-purple-600">{avgResponseTime.toFixed(1)}h</div>
              <div className="text-sm text-gray-600">Temps Réponse Moyen</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="scholars" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="scholars">العلماء المقيمون</TabsTrigger>
            <TabsTrigger value="rulings">الفتاوى الحديثة</TabsTrigger>
            <TabsTrigger value="meetings">الاجتماعات</TabsTrigger>
            <TabsTrigger value="consultation">الاستشارة</TabsTrigger>
          </TabsList>

          {/* Scholars résidents */}
          <TabsContent value="scholars" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {scholars.map((scholar) => (
                <Card key={scholar.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-gold-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {scholar.name.split(' ')[1]?.charAt(0) || scholar.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <CardTitle className="text-lg">{scholar.name}</CardTitle>
                          <p className="text-sm text-gray-600">{scholar.arabicName}</p>
                          <p className="text-xs text-emerald-600">{scholar.title}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        {getAvailabilityIcon(scholar.availability)}
                        <div className="text-xs text-gray-600 mt-1">
                          {scholar.availability === 'online' ? 'En ligne' : 
                           scholar.availability === 'busy' ? 'Occupé' : 'Hors ligne'}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">{scholar.bio}</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Institution:</span>
                          <div className="font-medium">{scholar.institution}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Expérience:</span>
                          <div className="font-medium">{scholar.experience} ans</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Fatwas émises:</span>
                          <div className="font-medium text-green-600">{scholar.fatwasIssued}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Projets supervisés:</span>
                          <div className="font-medium text-blue-600">{scholar.projectsSupervised}</div>
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-gray-600 mb-2">Spécialisations:</div>
                        <div className="flex flex-wrap gap-1">
                          {scholar.specialization.map((spec, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-gray-600 mb-2">Certifications:</div>
                        <div className="flex flex-wrap gap-1">
                          {scholar.certifications.map((cert, index) => (
                            <Badge key={index} className="bg-gold-100 text-gold-800 text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-xs">
                        <div>
                          <span className="text-gray-600">Tarif:</span>
                          <div className="font-medium">${scholar.hourlyRate}/h</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Réponse:</span>
                          <div className="font-medium">{scholar.averageResponseTime}h</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Fuseau:</span>
                          <div className="font-medium">{scholar.timezone}</div>
                        </div>
                      </div>

                      <div className="flex gap-2 pt-3 border-t">
                        <Button size="sm" className="flex-1">
                          <Phone className="h-4 w-4 mr-2" />
                          Contacter
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          Planifier
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Rulings récents */}
          <TabsContent value="rulings" className="space-y-6">
            <div className="space-y-4">
              {rulings.map((ruling) => {
                const scholar = scholars.find(s => s.id === ruling.scholarId);
                
                return (
                  <Card key={ruling.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{ruling.topic}</CardTitle>
                          <p className="text-sm text-gray-600">
                            بواسطة {scholar?.arabicName} - {ruling.dateIssued.toLocaleDateString('ar-SA')}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge className={getRulingColor(ruling.ruling)}>
                            {getRulingArabic(ruling.ruling)}
                          </Badge>
                          <div className="text-xs text-gray-600 mt-1">
                            ثقة: {ruling.confidenceLevel}%
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold mb-2">السؤال:</h4>
                          <p className="text-sm">{ruling.question}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">الأدلة الشرعية:</h4>
                          <div className="flex flex-wrap gap-1">
                            {ruling.evidence.map((evidence, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {evidence}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">الشروط والضوابط:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            {ruling.conditions.map((condition, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <CheckCircle className="h-3 w-3 text-green-500" />
                                {condition}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Catégorie:</span>
                            <div className="font-medium">{ruling.category}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Consensus:</span>
                            <div className="font-medium">{ruling.consensusLevel}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Statut:</span>
                            <Badge variant="outline" className="text-xs">
                              {ruling.implementationStatus}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Réunions */}
          <TabsContent value="meetings" className="space-y-6">
            <div className="space-y-4">
              {meetings.map((meeting) => (
                <Card key={meeting.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">
                          {meeting.type === 'monthly' ? 'Réunion Mensuelle' :
                           meeting.type === 'quarterly_audit' ? 'Audit Trimestriel' :
                           meeting.type === 'annual_review' ? 'Revue Annuelle' : 'Réunion d\'Urgence'}
                        </CardTitle>
                        <p className="text-sm text-gray-600">
                          {meeting.date.toLocaleDateString('fr-FR')} à {meeting.date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                      <Badge className={
                        meeting.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                        meeting.status === 'in_progress' ? 'bg-green-100 text-green-800' :
                        meeting.status === 'completed' ? 'bg-gray-100 text-gray-800' :
                        'bg-red-100 text-red-800'
                      }>
                        {meeting.status === 'scheduled' ? 'Planifiée' :
                         meeting.status === 'in_progress' ? 'En cours' :
                         meeting.status === 'completed' ? 'Terminée' : 'Annulée'}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Participants:</h4>
                        <div className="flex flex-wrap gap-2">
                          {meeting.participants.map((participantId) => {
                            const scholar = scholars.find(s => s.id === participantId);
                            return scholar ? (
                              <div key={participantId} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">
                                    {scholar.name.charAt(0)}
                                  </span>
                                </div>
                                <span className="text-sm">{scholar.arabicName}</span>
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Ordre du jour:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {meeting.agenda.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-4 pt-3 border-t">
                        <Button size="sm" disabled={meeting.status !== 'scheduled'}>
                          <Eye className="h-4 w-4 mr-2" />
                          Rejoindre
                        </Button>
                        <Button variant="outline" size="sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          Calendrier
                        </Button>
                        {meeting.status === 'completed' && (
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Rapport
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Consultation */}
          <TabsContent value="consultation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  طلب استشارة شرعية - Demande de Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">اختيار العالم - Choisir un Scholar</label>
                    <select
                      value={selectedScholar}
                      onChange={(e) => setSelectedScholar(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md"
                    >
                      <option value="">-- اختر عالماً --</option>
                      {scholars.filter(s => s.availability === 'online').map((scholar) => (
                        <option key={scholar.id} value={scholar.id}>
                          {scholar.arabicName} - {scholar.title} (${scholar.hourlyRate}/h)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">السؤال الشرعي - Question</label>
                    <textarea
                      value={consultationRequest}
                      onChange={(e) => setConsultationRequest(e.target.value)}
                      placeholder="اكتب سؤالك الشرعي هنا... / Écrivez votre question ici..."
                      className="w-full p-3 border border-gray-300 rounded-md h-32"
                      dir="rtl"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg text-center">
                      <Clock className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                      <div className="text-sm font-medium text-blue-800">Réponse Rapide</div>
                      <div className="text-xs text-blue-600">1-4 heures</div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg text-center">
                      <Shield className="h-6 w-6 text-green-500 mx-auto mb-2" />
                      <div className="text-sm font-medium text-green-800">Confidentiel</div>
                      <div className="text-xs text-green-600">Sécurisé</div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg text-center">
                      <Award className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                      <div className="text-sm font-medium text-purple-800">Certifié</div>
                      <div className="text-xs text-purple-600">AAOIFI</div>
                    </div>
                  </div>

                  <Button onClick={requestConsultation} className="w-full" size="lg">
                    <FileText className="h-5 w-5 mr-2" />
                    إرسال طلب الاستشارة
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>خدمات الاستشارة المتاحة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="font-semibold text-emerald-800 mb-2">استشارة فورية</div>
                    <p className="text-sm text-gray-600 mb-3">
                      أسئلة بسيطة مع إجابة خلال ساعات قليلة
                    </p>
                    <div className="text-lg font-bold text-emerald-600">مجاناً</div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="font-semibold text-blue-800 mb-2">استشارة مفصلة</div>
                    <p className="text-sm text-gray-600 mb-3">
                      تحليل شامل مع أدلة وتوصيات مفصلة
                    </p>
                    <div className="text-lg font-bold text-blue-600">$200-500</div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="font-semibold text-purple-800 mb-2">مراجعة منتج</div>
                    <p className="text-sm text-gray-600 mb-3">
                      تقييم كامل للمنتجات المالية الجديدة
                    </p>
                    <div className="text-lg font-bold text-purple-600">$1000-3000</div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="font-semibold text-orange-800 mb-2">تدريب فريق</div>
                    <p className="text-sm text-gray-600 mb-3">
                      Formation complète équipe sur principes islamiques
                    </p>
                    <div className="text-lg font-bold text-orange-600">$5000/jour</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p className="mb-2">
            © 2025 CED Bank - هيئة الرقابة الشرعية المعتمدة - Yakoubi Yamina
          </p>
          <p>
            🕌 Conseil Sharia Permanent - Certification AAOIFI - Standards Internationaux
          </p>
        </div>
      </div>
    </div>
  );
}