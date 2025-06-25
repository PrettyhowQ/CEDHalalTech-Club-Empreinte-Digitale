import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  FileText, 
  CheckCircle, 
  AlertTriangle,
  Clock,
  Award,
  Search,
  Download,
  Eye,
  Zap,
  Users,
  Building,
  Globe,
  Target,
  BarChart3,
  Calendar,
  Bookmark,
  Star
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AuditReport {
  id: string;
  title: string;
  auditDate: Date;
  auditor: string;
  institution: string;
  scope: string[];
  findings: AuditFinding[];
  overallScore: number;
  status: 'draft' | 'in_progress' | 'completed' | 'certified';
  compliance: 'full' | 'partial' | 'non_compliant';
  recommendations: string[];
  nextAudit: Date;
  certificationLevel: 'AAOIFI' | 'IFSB' | 'Local' | 'Internal';
}

interface AuditFinding {
  id: string;
  category: 'products' | 'operations' | 'governance' | 'technology' | 'documentation';
  severity: 'critical' | 'high' | 'medium' | 'low';
  title: string;
  description: string;
  evidence: string[];
  recommendation: string;
  status: 'open' | 'in_progress' | 'resolved' | 'accepted_risk';
  deadline: Date;
  responsible: string;
}

interface ComplianceMetric {
  category: string;
  arabicName: string;
  currentScore: number;
  targetScore: number;
  trend: 'improving' | 'stable' | 'declining';
  lastAudit: Date;
  items: {
    name: string;
    status: boolean;
    importance: 'critical' | 'high' | 'medium';
  }[];
}

export default function IslamicAuditSystem() {
  const [auditReports, setAuditReports] = useState<AuditReport[]>([]);
  const [complianceMetrics, setComplianceMetrics] = useState<ComplianceMetric[]>([]);
  const [selectedReport, setSelectedReport] = useState<string>('');
  const [activeFindings, setActiveFindings] = useState<AuditFinding[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Rapports d'audit récents
    const reports: AuditReport[] = [
      {
        id: 'AUDIT-2024-Q4',
        title: 'Audit Trimestriel Q4 2024 - Conformité Complète',
        auditDate: new Date('2024-12-20'),
        auditor: 'Dr. Ahmed Al-Mahmoud',
        institution: 'AAOIFI',
        scope: ['Produits financiers', 'Opérations', 'Gouvernance', 'Technologie'],
        findings: [],
        overallScore: 98.7,
        status: 'completed',
        compliance: 'full',
        recommendations: [
          'Maintenir les standards actuels',
          'Continuer formation équipe',
          'Surveillance continue nouveaux produits'
        ],
        nextAudit: new Date('2025-03-20'),
        certificationLevel: 'AAOIFI'
      },
      {
        id: 'AUDIT-2024-TECH',
        title: 'Audit Technologique - IA et Blockchain',
        auditDate: new Date('2024-12-15'),
        auditor: 'Sheikh Omar Ibn Rashid',
        institution: 'Dubai Islamic Economics Institute',
        scope: ['Intelligence Artificielle', 'Blockchain', 'Smart Contracts', 'DeFi'],
        findings: [
          {
            id: 'FIND-001',
            category: 'technology',
            severity: 'medium',
            title: 'Validation algorithmes IA par scholars',
            description: 'Les algorithmes d\'IA nécessitent une validation formelle par le conseil Sharia',
            evidence: ['Code source analysé', 'Fonctionnement vérifié'],
            recommendation: 'Mettre en place processus validation continue des algorithmes',
            status: 'in_progress',
            deadline: new Date('2025-01-15'),
            responsible: 'Équipe Technique'
          }
        ],
        overallScore: 94.2,
        status: 'completed',
        compliance: 'partial',
        recommendations: [
          'Validation formelle algorithmes IA',
          'Documentation technique complète',
          'Formation équipe sur principes islamiques'
        ],
        nextAudit: new Date('2025-06-15'),
        certificationLevel: 'IFSB'
      },
      {
        id: 'AUDIT-2024-OPS',
        title: 'Audit Opérationnel - Processus et Procédures',
        auditDate: new Date('2024-12-10'),
        auditor: 'Prof. Abdullah Al-Mani',
        institution: 'Kuwait Finance House',
        scope: ['Processus opérationnels', 'Contrôles internes', 'Gestion risques'],
        findings: [
          {
            id: 'FIND-002',
            category: 'operations',
            severity: 'low',
            title: 'Documentation procédures purification',
            description: 'Améliorer la documentation des procédures de purification automatique',
            evidence: ['Processus fonctionnel', 'Documentation partielle'],
            recommendation: 'Compléter la documentation des processus',
            status: 'resolved',
            deadline: new Date('2024-12-30'),
            responsible: 'Équipe Compliance'
          }
        ],
        overallScore: 96.5,
        status: 'completed',
        compliance: 'full',
        recommendations: [
          'Maintenir documentation à jour',
          'Révision trimestrielle processus',
          'Formation continue équipes'
        ],
        nextAudit: new Date('2025-04-10'),
        certificationLevel: 'Local'
      }
    ];

    setAuditReports(reports);

    // Métriques de conformité détaillées
    const metrics: ComplianceMetric[] = [
      {
        category: 'Gouvernance Sharia',
        arabicName: 'الحكومة الشرعية',
        currentScore: 95,
        targetScore: 100,
        trend: 'improving',
        lastAudit: new Date('2024-12-20'),
        items: [
          { name: 'Conseil Sharia permanent', status: true, importance: 'critical' },
          { name: 'Certifications AAOIFI', status: true, importance: 'critical' },
          { name: 'Réunions mensuelles', status: true, importance: 'high' },
          { name: 'Documentation fatwa', status: false, importance: 'medium' }
        ]
      },
      {
        category: 'Produits Financiers',
        arabicName: 'المنتجات المالية',
        currentScore: 98,
        targetScore: 100,
        trend: 'stable',
        lastAudit: new Date('2024-12-15'),
        items: [
          { name: 'Comptes sans intérêts', status: true, importance: 'critical' },
          { name: 'Produits Murabaha', status: true, importance: 'high' },
          { name: 'Sukuk digitaux', status: true, importance: 'high' },
          { name: 'DeFi islamique', status: true, importance: 'medium' }
        ]
      },
      {
        category: 'Opérations',
        arabicName: 'العمليات',
        currentScore: 92,
        targetScore: 100,
        trend: 'improving',
        lastAudit: new Date('2024-12-10'),
        items: [
          { name: 'Suspension prières', status: true, importance: 'high' },
          { name: 'Purification automatique', status: true, importance: 'critical' },
          { name: 'Calendrier hégirien', status: false, importance: 'medium' },
          { name: 'Géolocalisation', status: false, importance: 'medium' }
        ]
      },
      {
        category: 'Technologie',
        arabicName: 'التكنولوجيا',
        currentScore: 88,
        targetScore: 100,
        trend: 'improving',
        lastAudit: new Date('2024-12-05'),
        items: [
          { name: 'IA éthique certifiée', status: false, importance: 'high' },
          { name: 'Blockchain halal', status: true, importance: 'high' },
          { name: 'Smart contracts validés', status: false, importance: 'medium' },
          { name: 'Code source audité', status: true, importance: 'medium' }
        ]
      },
      {
        category: 'Documentation',
        arabicName: 'التوثيق',
        currentScore: 85,
        targetScore: 100,
        trend: 'stable',
        lastAudit: new Date('2024-11-30'),
        items: [
          { name: 'Politiques Sharia', status: true, importance: 'critical' },
          { name: 'Procédures opérationnelles', status: false, importance: 'high' },
          { name: 'Formation employés', status: true, importance: 'medium' },
          { name: 'Manuels utilisateurs', status: false, importance: 'low' }
        ]
      }
    ];

    setComplianceMetrics(metrics);

    // Findings actifs nécessitant attention
    const findings = reports.flatMap(report => report.findings.filter(f => f.status !== 'resolved'));
    setActiveFindings(findings);
  }, []);

  const generateNewAudit = () => {
    const newAudit: AuditReport = {
      id: `AUDIT-${new Date().getFullYear()}-${Date.now()}`,
      title: 'Audit Complet - Conformité Sharia 100%',
      auditDate: new Date(),
      auditor: 'Dr. Ahmed Al-Mahmoud',
      institution: 'AAOIFI',
      scope: ['Tous les domaines'],
      findings: [],
      overallScore: 0,
      status: 'in_progress',
      compliance: 'partial',
      recommendations: [],
      nextAudit: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      certificationLevel: 'AAOIFI'
    };

    setAuditReports(prev => [newAudit, ...prev]);
    
    toast({
      title: "بدء مراجعة شاملة",
      description: "تم بدء مراجعة شاملة للامتثال الشرعي",
    });
  };

  const resolveFinding = (findingId: string) => {
    setActiveFindings(prev => 
      prev.map(finding => 
        finding.id === findingId 
          ? { ...finding, status: 'resolved' as const }
          : finding
      )
    );

    toast({
      title: "تم حل المشكلة",
      description: "تم حل المشكلة وتطبيق التوصيات",
    });
  };

  const getScoreColor = (score: number) => {
    if (score >= 95) return 'text-green-600';
    if (score >= 85) return 'text-yellow-600';
    if (score >= 70) return 'text-orange-600';
    return 'text-red-600';
  };

  const getComplianceColor = (compliance: string) => {
    const colors = {
      full: 'bg-green-100 text-green-800',
      partial: 'bg-yellow-100 text-yellow-800',
      non_compliant: 'bg-red-100 text-red-800'
    };
    return colors[compliance as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getSeverityColor = (severity: string) => {
    const colors = {
      critical: 'bg-red-500',
      high: 'bg-orange-500',
      medium: 'bg-yellow-500',
      low: 'bg-blue-500'
    };
    return colors[severity as keyof typeof colors] || 'bg-gray-500';
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'improving': return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'declining': return <TrendingDown className="h-4 w-4 text-red-500" />;
      default: return <BarChart3 className="h-4 w-4 text-blue-500" />;
    }
  };

  const averageScore = complianceMetrics.reduce((sum, metric) => sum + metric.currentScore, 0) / complianceMetrics.length;
  const totalFindings = activeFindings.length;
  const criticalFindings = activeFindings.filter(f => f.severity === 'critical').length;
  const lastAuditDate = auditReports[0]?.auditDate;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">نظام المراجعة الشرعية</h1>
              <h2 className="text-2xl font-semibold text-green-600">Système d'Audit Islamique</h2>
              <p className="text-gray-600">Audits AAOIFI - Contrôle continu - Certification internationale</p>
            </div>
          </div>
        </div>

        {/* Tableau de bord */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className={`text-3xl font-bold ${getScoreColor(averageScore)}`}>
                {averageScore.toFixed(1)}%
              </div>
              <div className="text-sm text-gray-600">Score Global</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-blue-600">{auditReports.length}</div>
              <div className="text-sm text-gray-600">Audits Réalisés</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-orange-600">{totalFindings}</div>
              <div className="text-sm text-gray-600">Points d'Amélioration</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-red-600">{criticalFindings}</div>
              <div className="text-sm text-gray-600">Critiques</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="metrics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="metrics">المقاييس</TabsTrigger>
            <TabsTrigger value="reports">التقارير</TabsTrigger>
            <TabsTrigger value="findings">النتائج</TabsTrigger>
            <TabsTrigger value="certification">الشهادات</TabsTrigger>
          </TabsList>

          {/* Métriques de conformité */}
          <TabsContent value="metrics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {complianceMetrics.map((metric) => (
                <Card key={metric.category}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{metric.category}</CardTitle>
                        <p className="text-sm text-gray-600">{metric.arabicName}</p>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${getScoreColor(metric.currentScore)}`}>
                          {metric.currentScore}%
                        </div>
                        <div className="flex items-center gap-1">
                          {getTrendIcon(metric.trend)}
                          <span className="text-xs text-gray-600">
                            {metric.trend === 'improving' ? 'En amélioration' :
                             metric.trend === 'declining' ? 'En baisse' : 'Stable'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Progression vers objectif:</span>
                        <span>{metric.targetScore}%</span>
                      </div>
                      <Progress value={metric.currentScore} className="mb-4" />
                      
                      <div className="space-y-2">
                        {metric.items.map((item, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <div className="flex items-center gap-2">
                              {item.status ? (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              ) : (
                                <AlertTriangle className="h-4 w-4 text-orange-500" />
                              )}
                              <span className="text-sm">{item.name}</span>
                            </div>
                            <div className={`w-2 h-2 rounded-full ${
                              item.importance === 'critical' ? 'bg-red-500' :
                              item.importance === 'high' ? 'bg-orange-500' : 'bg-yellow-500'
                            }`}></div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="text-xs text-gray-500 pt-2 border-t">
                        Dernier audit: {metric.lastAudit.toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Rapports d'audit */}
          <TabsContent value="reports" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Rapports d'Audit Récents</h3>
              <Button onClick={generateNewAudit}>
                <FileText className="h-4 w-4 mr-2" />
                Nouvel Audit
              </Button>
            </div>

            <div className="space-y-4">
              {auditReports.map((report) => (
                <Card key={report.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{report.title}</CardTitle>
                        <p className="text-sm text-gray-600">
                          {report.auditor} - {report.institution}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className={`text-xl font-bold ${getScoreColor(report.overallScore)}`}>
                          {report.overallScore}%
                        </div>
                        <Badge className={getComplianceColor(report.compliance)}>
                          {report.compliance === 'full' ? 'Conforme' :
                           report.compliance === 'partial' ? 'Partiel' : 'Non conforme'}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-600 mb-2">Domaines audités:</div>
                        <div className="flex flex-wrap gap-1">
                          {report.scope.map((scope, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {scope}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-gray-600 mb-2">Recommandations principales:</div>
                        <ul className="text-sm space-y-1">
                          {report.recommendations.slice(0, 3).map((rec, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Date audit:</span>
                          <div className="font-medium">{report.auditDate.toLocaleDateString('fr-FR')}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Prochain audit:</span>
                          <div className="font-medium">{report.nextAudit.toLocaleDateString('fr-FR')}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Certification:</span>
                          <Badge className="bg-gold-100 text-gold-800">{report.certificationLevel}</Badge>
                        </div>
                        <div>
                          <span className="text-gray-600">Findings:</span>
                          <div className="font-medium">{report.findings.length} points</div>
                        </div>
                      </div>

                      <div className="flex gap-2 pt-3 border-t">
                        <Button size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          Détails
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Télécharger
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Findings actifs */}
          <TabsContent value="findings" className="space-y-6">
            <div className="space-y-4">
              {activeFindings.map((finding) => (
                <Card key={finding.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 ${getSeverityColor(finding.severity)} rounded-full`}></div>
                        <div>
                          <CardTitle className="text-lg">{finding.title}</CardTitle>
                          <p className="text-sm text-gray-600 capitalize">{finding.category}</p>
                        </div>
                      </div>
                      <Badge className={
                        finding.status === 'open' ? 'bg-red-100 text-red-800' :
                        finding.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                        finding.status === 'resolved' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }>
                        {finding.status === 'open' ? 'Ouvert' :
                         finding.status === 'in_progress' ? 'En cours' :
                         finding.status === 'resolved' ? 'Résolu' : 'Risque accepté'}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">{finding.description}</p>
                      
                      <div>
                        <div className="text-sm text-gray-600 mb-2">Recommandation:</div>
                        <p className="text-sm bg-blue-50 p-3 rounded">{finding.recommendation}</p>
                      </div>

                      <div>
                        <div className="text-sm text-gray-600 mb-2">Preuves:</div>
                        <div className="flex flex-wrap gap-1">
                          {finding.evidence.map((evidence, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {evidence}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Sévérité:</span>
                          <div className="font-medium capitalize">{finding.severity}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Échéance:</span>
                          <div className="font-medium">{finding.deadline.toLocaleDateString('fr-FR')}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Responsable:</span>
                          <div className="font-medium">{finding.responsible}</div>
                        </div>
                      </div>

                      {finding.status !== 'resolved' && (
                        <div className="pt-3 border-t">
                          <Button size="sm" onClick={() => resolveFinding(finding.id)}>
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Marquer comme résolu
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {activeFindings.length === 0 && (
                <Card>
                  <CardContent className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Conformité Parfaite</h3>
                    <p className="text-green-600">Aucun point d'amélioration identifié. Tous les standards sont respectés.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Certifications */}
          <TabsContent value="certification" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-gold-500" />
                    Certifications Obtenues
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border border-gold-200 rounded-lg bg-gold-50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-gold-800">AAOIFI Certified</div>
                        <Badge className="bg-gold-100 text-gold-800">Actif</Badge>
                      </div>
                      <p className="text-sm text-gold-700 mb-2">
                        Certification complète AAOIFI pour toutes les opérations bancaires islamiques
                      </p>
                      <div className="text-xs text-gold-600">
                        Renouvelable: Mars 2025
                      </div>
                    </div>

                    <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-green-800">IFSB Standards</div>
                        <Badge className="bg-green-100 text-green-800">Actif</Badge>
                      </div>
                      <p className="text-sm text-green-700 mb-2">
                        Conformité aux standards IFSB pour institutions financières islamiques
                      </p>
                      <div className="text-xs text-green-600">
                        Renouvelable: Juin 2025
                      </div>
                    </div>

                    <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-blue-800">Local Sharia Board</div>
                        <Badge className="bg-blue-100 text-blue-800">Actif</Badge>
                      </div>
                      <p className="text-sm text-blue-700 mb-2">
                        Conseil Sharia local approuvé par autorités suisses
                      </p>
                      <div className="text-xs text-blue-600">
                        Permanent
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-500" />
                    Certifications en Cours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-yellow-800">OIC Recognition</div>
                        <Badge className="bg-yellow-100 text-yellow-800">En cours</Badge>
                      </div>
                      <p className="text-sm text-yellow-700 mb-3">
                        Reconnaissance par l'Organisation de la Coopération Islamique
                      </p>
                      <Progress value={75} className="mb-2" />
                      <div className="text-xs text-yellow-600">
                        Finalisation prévue: Février 2025
                      </div>
                    </div>

                    <div className="p-4 border border-purple-200 rounded-lg bg-purple-50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-purple-800">Al-Azhar Validation</div>
                        <Badge className="bg-purple-100 text-purple-800">Planifié</Badge>
                      </div>
                      <p className="text-sm text-purple-700 mb-3">
                        Validation par l'Université Al-Azhar du Caire
                      </p>
                      <Progress value={25} className="mb-2" />
                      <div className="text-xs text-purple-600">
                        Début prévu: Mars 2025
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Processus de Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div className="font-semibold text-blue-800">1. Documentation</div>
                    <div className="text-sm text-blue-600">Préparation dossier complet</div>
                  </div>
                  
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Search className="h-6 w-6 text-white" />
                    </div>
                    <div className="font-semibold text-green-800">2. Audit</div>
                    <div className="text-sm text-green-600">Examen par experts</div>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="font-semibold text-purple-800">3. Validation</div>
                    <div className="text-sm text-purple-600">Approbation conseil</div>
                  </div>
                  
                  <div className="text-center p-4 bg-gold-50 rounded-lg">
                    <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="font-semibold text-gold-800">4. Certification</div>
                    <div className="text-sm text-gold-600">Délivrance officielle</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p className="mb-2">
            © 2025 CED Bank - نظام المراجعة الشرعية المعتمد - Yakoubi Yamina
          </p>
          <p>
            🛡️ Audits continus - Certifications internationales - Excellence Sharia
          </p>
        </div>
      </div>
    </div>
  );
}