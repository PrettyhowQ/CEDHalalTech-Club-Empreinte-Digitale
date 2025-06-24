import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Shield,
  CheckCircle,
  AlertTriangle,
  FileText,
  Clock,
  Users,
  Globe,
  Scale,
  Eye,
  Download,
  Stamp,
  BookOpen,
  Building,
  Award,
  Lock,
  Zap,
  TrendingUp,
  Calendar,
  Archive
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CEDFooter } from './CEDFooter';

interface ShariaScholar {
  id: string;
  name: string;
  arabicName: string;
  title: string;
  institution: string;
  specialization: string[];
  country: string;
  experience: number;
  certifications: string[];
  photo: string;
  isChairman: boolean;
}

interface ComplianceRule {
  id: string;
  category: 'banking' | 'insurance' | 'investment' | 'zakat' | 'general';
  title: string;
  description: string;
  shariaReference: string;
  implementationStatus: 'implemented' | 'in-progress' | 'pending' | 'under-review';
  priority: 'critical' | 'high' | 'medium' | 'low';
  lastReview: Date;
  nextReview: Date;
  approvedBy: string[];
}

interface RegulatoryFramework {
  id: string;
  authority: string;
  country: string;
  framework: string;
  status: 'compliant' | 'pending' | 'in-progress' | 'non-compliant';
  lastAudit: Date;
  nextAudit: Date;
  requirements: string[];
  gaps: string[];
}

const shariaBoard: ShariaScholar[] = [
  {
    id: 'dr-hussein-hamid',
    name: 'Dr. Hussein Hamid Hassan',
    arabicName: 'د. حسين حامد حسن',
    title: 'Chairman Sharia Board',
    institution: 'Al-Azhar University',
    specialization: ['Islamic Banking', 'Takaful', 'Financial Jurisprudence'],
    country: 'Egypt',
    experience: 25,
    certifications: ['AAOIFI Certified', 'IFSB Member', 'Al-Azhar Graduate'],
    photo: '/api/placeholder/64/64',
    isChairman: true
  },
  {
    id: 'dr-abdul-sattar',
    name: 'Dr. Abdul Sattar Abu Ghuddah',
    arabicName: 'د. عبد الستار أبو غدة',
    title: 'Senior Sharia Advisor',
    institution: 'Dar Al-Istithmar',
    specialization: ['Islamic Finance', 'Sukuk', 'Investment'],
    country: 'Syria',
    experience: 30,
    certifications: ['AAOIFI Board Member', 'IFA Certified'],
    photo: '/api/placeholder/64/64',
    isChairman: false
  },
  {
    id: 'dr-mohd-daud',
    name: 'Dr. Mohd Daud Bakar',
    arabicName: 'د. محمد داود بكر',
    title: 'Sharia Advisor',
    institution: 'International Centre for Education in Islamic Finance',
    specialization: ['Takaful', 'Risk Management', 'Digital Finance'],
    country: 'Malaysia',
    experience: 22,
    certifications: ['Bank Negara Malaysia', 'IFSB Council'],
    photo: '/api/placeholder/64/64',
    isChairman: false
  }
];

const complianceRules: ComplianceRule[] = [
  {
    id: 'no-riba-banking',
    category: 'banking',
    title: 'Prohibition of Riba (Interest)',
    description: 'Tous les produits bancaires doivent être exempts d\'intérêts conformément aux principes islamiques',
    shariaReference: 'Quran 2:275-279, Hadith Bukhari 2086',
    implementationStatus: 'implemented',
    priority: 'critical',
    lastReview: new Date('2024-12-01'),
    nextReview: new Date('2025-03-01'),
    approvedBy: ['dr-hussein-hamid', 'dr-abdul-sattar']
  },
  {
    id: 'mudarabah-investment',
    category: 'investment',
    title: 'Mudarabah Investment Structures',
    description: 'Tous les investissements doivent suivre les structures Mudarabah ou Musharakah approuvées',
    shariaReference: 'Fiqh Academy Resolution 13/2/125',
    implementationStatus: 'implemented',
    priority: 'critical',
    lastReview: new Date('2024-11-15'),
    nextReview: new Date('2025-02-15'),
    approvedBy: ['dr-abdul-sattar', 'dr-mohd-daud']
  },
  {
    id: 'takaful-compliance',
    category: 'insurance',
    title: 'Takaful Insurance Model',
    description: 'Assurance basée sur la coopération mutuelle et le partage des risques conforme Sharia',
    shariaReference: 'AAOIFI Standard FAS 12',
    implementationStatus: 'implemented',
    priority: 'critical',
    lastReview: new Date('2024-12-10'),
    nextReview: new Date('2025-03-10'),
    approvedBy: ['dr-mohd-daud', 'dr-hussein-hamid']
  },
  {
    id: 'zakat-calculation',
    category: 'zakat',
    title: 'Automated Zakat Calculation',
    description: 'Calcul automatique et distribution de la Zakat selon les règles islamiques',
    shariaReference: 'Quran 9:60, Fiqh Zakat Contemporary',
    implementationStatus: 'in-progress',
    priority: 'high',
    lastReview: new Date('2024-12-15'),
    nextReview: new Date('2025-01-15'),
    approvedBy: ['dr-hussein-hamid']
  },
  {
    id: 'halal-screening',
    category: 'investment',
    title: 'Halal Investment Screening',
    description: 'Filtrage automatique des investissements selon les critères Sharia',
    shariaReference: 'AAOIFI Sharia Standard 21',
    implementationStatus: 'in-progress',
    priority: 'high',
    lastReview: new Date('2024-12-20'),
    nextReview: new Date('2025-02-20'),
    approvedBy: ['dr-abdul-sattar']
  }
];

const regulatoryFrameworks: RegulatoryFramework[] = [
  {
    id: 'finma-switzerland',
    authority: 'FINMA',
    country: 'Switzerland',
    framework: 'Swiss Banking Act & FinIA',
    status: 'in-progress',
    lastAudit: new Date('2024-10-01'),
    nextAudit: new Date('2025-04-01'),
    requirements: [
      'Banking License Application',
      'Capital Requirements (CHF 10M minimum)',
      'Governance Framework',
      'Risk Management Systems',
      'Anti-Money Laundering (AML)',
      'Data Protection (LPD compliance)'
    ],
    gaps: [
      'Final banking license pending',
      'Enhanced KYC procedures',
      'Liquidity reporting automation'
    ]
  },
  {
    id: 'cbuae-uae',
    authority: 'CBUAE',
    country: 'UAE',
    framework: 'Islamic Banking Regulation',
    status: 'pending',
    lastAudit: new Date('2024-11-01'),
    nextAudit: new Date('2025-05-01'),
    requirements: [
      'Islamic Banking License',
      'Sharia Governance Framework',
      'Capital Adequacy Ratio (12%)',
      'Liquidity Coverage Ratio',
      'Stress Testing',
      'Consumer Protection'
    ],
    gaps: [
      'Sharia governance documentation',
      'Local board establishment',
      'Regulatory capital increase'
    ]
  },
  {
    id: 'sama-saudi',
    authority: 'SAMA',
    country: 'Saudi Arabia',
    framework: 'Banking Control Law & Takaful',
    status: 'pending',
    lastAudit: new Date('2024-09-01'),
    nextAudit: new Date('2025-03-01'),
    requirements: [
      'Banking Operations License',
      'Takaful License',
      'Saudization Requirements',
      'Islamic Finance Compliance',
      'Cybersecurity Framework',
      'Financial Technology Sandbox'
    ],
    gaps: [
      'Local partnership establishment',
      'Technology infrastructure audit',
      'Saudization plan submission'
    ]
  },
  {
    id: 'aaoifi-standards',
    authority: 'AAOIFI',
    country: 'International',
    framework: 'Islamic Financial Standards',
    status: 'compliant',
    lastAudit: new Date('2024-12-01'),
    nextAudit: new Date('2025-06-01'),
    requirements: [
      'Sharia Standards Compliance',
      'Accounting Standards (FAS)',
      'Governance Standards (GS)',
      'Auditing Standards (GSIFI)',
      'Ethics Standards'
    ],
    gaps: []
  }
];

export function ShariaBoardCompliance() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showCertification, setShowCertification] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'implemented': case 'compliant': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'under-review': case 'non-compliant': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const filteredRules = selectedCategory === 'all' 
    ? complianceRules 
    : complianceRules.filter(rule => rule.category === selectedCategory);

  const complianceScore = Math.round(
    (complianceRules.filter(r => r.implementationStatus === 'implemented').length / complianceRules.length) * 100
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Conseil Sharia & Conformité AAOIFI
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Certification islamique complète par des érudits reconnus mondialement
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
              <Shield className="h-3 w-3 mr-1" />
              AAOIFI Compliant
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Award className="h-3 w-3 mr-1" />
              IFSB Standards
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Stamp className="h-3 w-3 mr-1" />
              Audité Indépendamment
            </Badge>
          </div>
        </motion.div>

        {/* Score de Conformité Global */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="border-2 border-emerald-200 dark:border-emerald-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-emerald-800 dark:text-emerald-200">
                <TrendingUp className="h-6 w-6" />
                Score de Conformité Sharia Global
              </CardTitle>
              <CardDescription>
                Évaluation en temps réel de la conformité aux standards islamiques
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="p-4 bg-emerald-50 dark:bg-emerald-900/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">{complianceScore}%</div>
                    <p className="text-sm text-emerald-700 dark:text-emerald-300">Conformité Globale</p>
                    <Progress value={complianceScore} className="mt-2" />
                  </div>
                </Card>

                <Card className="p-4 bg-green-50 dark:bg-green-900/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {complianceRules.filter(r => r.implementationStatus === 'implemented').length}
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">Règles Implémentées</p>
                  </div>
                </Card>

                <Card className="p-4 bg-blue-50 dark:bg-blue-900/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{shariaBoard.length}</div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Érudits Conseil</p>
                  </div>
                </Card>

                <Card className="p-4 bg-purple-50 dark:bg-purple-900/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {regulatoryFrameworks.filter(f => f.status === 'compliant').length}
                    </div>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Autorités Conformes</p>
                  </div>
                </Card>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Conseil Sharia */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Users className="h-6 w-6 text-emerald-600" />
                Conseil Sharia International
              </CardTitle>
              <CardDescription>
                Érudits islamiques reconnus mondialement supervisent tous nos produits financiers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {shariaBoard.map((scholar, index) => (
                  <motion.div
                    key={scholar.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card className={`h-full ${scholar.isChairman ? 'border-2 border-gold ring-2 ring-yellow-200' : ''}`}>
                      <CardContent className="p-6">
                        <div className="text-center mb-4">
                          <img 
                            src={scholar.photo} 
                            alt={scholar.name}
                            className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-emerald-200"
                          />
                          {scholar.isChairman && (
                            <Badge className="bg-yellow-100 text-yellow-800 mb-2">
                              <Award className="h-3 w-3 mr-1" />
                              Chairman
                            </Badge>
                          )}
                          <h3 className="font-bold text-lg">{scholar.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{scholar.arabicName}</p>
                          <p className="text-sm font-semibold text-emerald-600">{scholar.title}</p>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Institution</p>
                            <p className="text-sm font-medium">{scholar.institution}</p>
                          </div>
                          
                          <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Spécialisations</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {scholar.specialization.map((spec, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {spec}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <p className="text-xs text-gray-500">Pays</p>
                              <p className="font-medium">{scholar.country}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Expérience</p>
                              <p className="font-medium">{scholar.experience} ans</p>
                            </div>
                          </div>
                          
                          <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Certifications</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {scholar.certifications.map((cert, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {cert}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Règles de Conformité */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Scale className="h-6 w-6 text-emerald-600" />
                Règles de Conformité Sharia
              </CardTitle>
              <CardDescription>
                Standards islamiques appliqués à tous nos produits et services
              </CardDescription>
              
              {/* Filtres */}
              <div className="flex flex-wrap gap-2 mt-4">
                {['all', 'banking', 'insurance', 'investment', 'zakat', 'general'].map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                  >
                    {category === 'all' ? 'Toutes' : 
                     category === 'banking' ? 'Bancaire' :
                     category === 'insurance' ? 'Assurance' :
                     category === 'investment' ? 'Investissement' :
                     category === 'zakat' ? 'Zakat' :
                     'Général'}
                  </Button>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredRules.map((rule, index) => (
                  <motion.div
                    key={rule.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card className="border-l-4 border-l-emerald-500">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-bold text-lg">{rule.title}</h3>
                              <Badge className={getStatusColor(rule.implementationStatus)}>
                                {rule.implementationStatus === 'implemented' ? 'Implémenté' :
                                 rule.implementationStatus === 'in-progress' ? 'En cours' :
                                 rule.implementationStatus === 'pending' ? 'En attente' :
                                 'Sous révision'}
                              </Badge>
                              <Badge className={getPriorityColor(rule.priority)} variant="outline">
                                {rule.priority === 'critical' ? 'Critique' :
                                 rule.priority === 'high' ? 'Élevé' :
                                 rule.priority === 'medium' ? 'Moyen' :
                                 'Faible'}
                              </Badge>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">{rule.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-gray-500 font-medium">Référence Sharia</p>
                                <p className="text-emerald-600">{rule.shariaReference}</p>
                              </div>
                              <div>
                                <p className="text-gray-500 font-medium">Approuvé par</p>
                                <div className="flex flex-wrap gap-1">
                                  {rule.approvedBy.map((scholarId, i) => {
                                    const scholar = shariaBoard.find(s => s.id === scholarId);
                                    return scholar ? (
                                      <Badge key={i} variant="secondary" className="text-xs">
                                        {scholar.name.split(' ').slice(-1)[0]}
                                      </Badge>
                                    ) : null;
                                  })}
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                Dernière révision: {rule.lastReview.toLocaleDateString('fr-FR')}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                Prochaine révision: {rule.nextReview.toLocaleDateString('fr-FR')}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-2">
                            {rule.implementationStatus === 'implemented' ? (
                              <CheckCircle className="h-6 w-6 text-green-500" />
                            ) : (
                              <AlertTriangle className="h-6 w-6 text-yellow-500" />
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Cadres Réglementaires */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Building className="h-6 w-6 text-emerald-600" />
                Conformité Réglementaire Internationale
              </CardTitle>
              <CardDescription>
                Respect des autorités financières dans tous nos marchés d'opération
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {regulatoryFrameworks.map((framework, index) => (
                  <motion.div
                    key={framework.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-bold text-lg">{framework.authority}</h3>
                            <p className="text-sm text-gray-600">{framework.country}</p>
                          </div>
                          <Badge className={getStatusColor(framework.status)}>
                            {framework.status === 'compliant' ? 'Conforme' :
                             framework.status === 'in-progress' ? 'En cours' :
                             framework.status === 'pending' ? 'En attente' :
                             'Non conforme'}
                          </Badge>
                        </div>
                        <p className="text-sm font-medium text-emerald-600">{framework.framework}</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Exigences</h4>
                          <div className="space-y-1">
                            {framework.requirements.map((req, i) => (
                              <div key={i} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{req}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {framework.gaps.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-2 text-sm text-orange-600">Écarts à combler</h4>
                            <div className="space-y-1">
                              {framework.gaps.map((gap, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm">
                                  <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                  <span>{gap}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 pt-2 border-t">
                          <div>
                            <p>Dernier audit</p>
                            <p className="font-medium">{framework.lastAudit.toLocaleDateString('fr-FR')}</p>
                          </div>
                          <div>
                            <p>Prochain audit</p>
                            <p className="font-medium">{framework.nextAudit.toLocaleDateString('fr-FR')}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Certification Panel */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-8"
        >
          <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-emerald-800 dark:text-emerald-200">
                <Stamp className="h-6 w-6" />
                Certification Sharia Officielle
              </CardTitle>
              <CardDescription className="text-lg">
                Attestation de conformité aux standards islamiques internationaux
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-6">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border-2 border-emerald-300 shadow-lg">
                  <div className="text-emerald-600 mb-4">
                    <Stamp className="h-16 w-16 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-200 mb-2">
                    CERTIFICAT DE CONFORMITÉ SHARIA
                  </h3>
                  <p className="text-lg mb-4">Club Empreinte Digitale - CED Bank</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                    Certifie que tous les produits et services financiers sont conformes aux principes islamiques
                    selon les standards AAOIFI et sous supervision du Conseil Sharia International
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-emerald-600 font-bold text-xl">{complianceScore}%</div>
                      <p className="text-sm">Conformité</p>
                    </div>
                    <div className="text-center">
                      <div className="text-emerald-600 font-bold text-xl">{shariaBoard.length}</div>
                      <p className="text-sm">Érudits</p>
                    </div>
                    <div className="text-center">
                      <div className="text-emerald-600 font-bold text-xl">2025</div>
                      <p className="text-sm">Certifié</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center gap-4">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      <Download className="h-4 w-4 mr-2" />
                      Télécharger Certificat
                    </Button>
                    <Button variant="outline" onClick={() => setShowCertification(true)}>
                      <Eye className="h-4 w-4 mr-2" />
                      Voir Détails
                    </Button>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  <p>Valide jusqu'au: 31 décembre 2025</p>
                  <p>Numéro de certification: CED-SHARIA-2025-001</p>
                  <p>Autorité émettrice: AAOIFI en partenariat avec le Conseil Sharia CED</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
      
      <CEDFooter />
    </div>
  );
}