import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield,
  FileText,
  Download,
  Users,
  Scale,
  CheckCircle,
  Award,
  Building,
  Clock,
  Eye,
  Lock,
  Globe,
  Star,
  AlertTriangle,
  Package,
  BookOpen,
  UserCheck,
  TrendingUp,
  Zap,
  Heart,
  Crown,
  Target
} from 'lucide-react';

export function AlAmanCEDPrototype() {
  const [activeTab, setActiveTab] = useState('overview');
  const [downloadProgress, setDownloadProgress] = useState<{[key: string]: number}>({});

  const prototypeDocuments = [
    {
      id: 'governance-charter',
      title: 'Charte de Gouvernance Islamique Al-Aman CED',
      description: 'Document fondateur définissant la structure de gouvernance conforme AAOIFI',
      formats: ['.pdf', '.docx'],
      size: '2.4 MB',
      pages: 45,
      category: 'Gouvernance',
      priority: 'Critique',
      status: 'Prêt',
      icon: Scale,
      color: 'from-green-500 to-emerald-600',
      content: {
        sections: [
          'Vision & Mission Al-Aman CED',
          'Principes Takaful conformes Charia',
          'Structure organisationnelle',
          'Rôles & responsabilités',
          'Processus décisionnels',
          'Standards AAOIFI/IFSB'
        ],
        validations: [
          'Validation Sharia Board CED',
          'Conformité AAOIFI Takaful',
          'Standards IFSB respectés',
          'Audit juridique international'
        ]
      }
    },
    {
      id: 'sharia-board-structure',
      title: 'Structure Sharia Board - Rôles & Profils',
      description: 'Organisation détaillée du comité éthique islamique Al-Aman CED',
      formats: ['.docx', '.pdf'],
      size: '1.8 MB',
      pages: 28,
      category: 'Gouvernance',
      priority: 'Critique',
      status: 'Prêt',
      icon: Users,
      color: 'from-blue-500 to-cyan-600',
      content: {
        sections: [
          'Composition Sharia Board (5 experts)',
          'Profils & qualifications requises',
          'Procédures nomination',
          'Processus décisionnels',
          'Calendrier réunions',
          'Rémunération & indépendance'
        ],
        validations: [
          'Experts certifiés AAOIFI',
          'Indépendance garantie',
          'Diversité géographique',
          'Spécialisation Takaful'
        ]
      }
    },
    {
      id: 'compliance-officer-contract',
      title: 'Modèle Contrat Sharia Compliance Officer',
      description: 'Contrat type pour responsable conformité islamique certifié',
      formats: ['.docx', '.pdf'],
      size: '1.2 MB',
      pages: 18,
      category: 'RH & Legal',
      priority: 'Haute',
      status: 'Prêt',
      icon: UserCheck,
      color: 'from-purple-500 to-indigo-600',
      content: {
        sections: [
          'Définition du poste',
          'Missions & responsabilités',
          'Qualifications obligatoires',
          'Reporting hiérarchique',
          'Rémunération & avantages',
          'Clauses confidentialité'
        ],
        validations: [
          'Certification AAOIFI CSAA requise',
          'Indépendance opérationnelle',
          'Reporting direct Sharia Board',
          'Formation continue obligatoire'
        ]
      }
    },
    {
      id: 'sharia-audit-grid',
      title: 'Grille Contrôle Sharia Interne (Audit)',
      description: 'Outils de contrôle et audit conformité islamique quotidienne',
      formats: ['.xlsx', '.pdf'],
      size: '3.1 MB',
      pages: 67,
      category: 'Audit & Contrôle',
      priority: 'Critique',
      status: 'Prêt',
      icon: Eye,
      color: 'from-amber-500 to-orange-600',
      content: {
        sections: [
          'Checklist conformité quotidienne',
          'Grilles audit produits Takaful',
          'Contrôle placements halal',
          'Validation contrats clients',
          'Métriques conformité KPI',
          'Processus escalade'
        ],
        validations: [
          'Standards AAOIFI intégrés',
          'Automation possible',
          'Traçabilité complète',
          'Alertes temps réel'
        ]
      }
    },
    {
      id: 'annual-compliance-report',
      title: 'Rapport Annuel Conformité Halal 2025',
      description: 'Modèle de rapport de transparence conforme standards internationaux',
      formats: ['.pdf'],
      size: '4.7 MB',
      pages: 89,
      category: 'Reporting',
      priority: 'Critique',
      status: 'Modèle Prêt',
      icon: FileText,
      color: 'from-red-500 to-pink-600',
      content: {
        sections: [
          'Executive Summary',
          'Décisions Sharia Board 2025',
          'Métriques conformité',
          'Audit interne & externe',
          'Certification produits',
          'Transparence financière'
        ],
        validations: [
          'Format AAOIFI respecté',
          'Publication obligatoire',
          'Audit externe validé',
          'Transparence totale'
        ]
      }
    }
  ];

  const technicalSpecs = {
    architecture: {
      title: 'Architecture Technique Al-Aman CED',
      components: [
        'Frontend React/TypeScript moderne',
        'Backend Node.js + Express sécurisé',
        'Base données PostgreSQL chiffrée',
        'API REST conformité Sharia',
        'Interface Sharia Board intégrée',
        'Dashboard Compliance Officer',
        'Système audit automatisé',
        'Reporting AAOIFI/IFSB'
      ]
    },
    security: {
      title: 'Sécurité & Conformité',
      features: [
        'Chiffrement AES-256 bout-en-bout',
        'Authentification multi-facteurs',
        'Audit trails complets',
        'Conformité RGPD/SOC2',
        'Backup géo-redondant',
        'Monitoring 24/7',
        'Tests pénétration réguliers',
        'Certification ISO 27001'
      ]
    },
    integration: {
      title: 'Intégration Écosystème CED',
      connections: [
        'CED Bank API Banking directe',
        'Sharia Board unifié',
        'Compliance centralisée',
        'Données clients partagées',
        'Facturation intégrée',
        'Reporting consolidé',
        'Support client unifié',
        'Tableau de bord global'
      ]
    }
  };

  const deploymentPlan = [
    {
      phase: 'Phase 1 - Gouvernance',
      duration: '30 jours',
      status: 'En cours',
      color: 'bg-blue-500',
      tasks: [
        'Constitution Sharia Board',
        'Nomination Compliance Officer',
        'Validation documents gouvernance',
        'Setup systèmes audit'
      ]
    },
    {
      phase: 'Phase 2 - Développement',
      duration: '45 jours',
      status: 'Planifié',
      color: 'bg-amber-500',
      tasks: [
        'Développement interfaces',
        'Intégration CED Bank',
        'Tests conformité',
        'Validation Sharia Board'
      ]
    },
    {
      phase: 'Phase 3 - Certification',
      duration: '60 jours',
      status: 'Planifié',
      color: 'bg-purple-500',
      tasks: [
        'Audit externe Big4',
        'Certification AAOIFI',
        'Tests utilisateurs',
        'Documentation finale'
      ]
    },
    {
      phase: 'Phase 4 - Lancement',
      duration: '30 jours',
      status: 'Planifié',
      color: 'bg-green-500',
      tasks: [
        'Licences réglementaires',
        'Formation équipes',
        'Lancement commercial',
        'Support client'
      ]
    }
  ];

  const handleDocumentDownload = (docId: string) => {
    setDownloadProgress(prev => ({ ...prev, [docId]: 0 }));
    
    // Simulation du téléchargement
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        const currentProgress = prev[docId] || 0;
        if (currentProgress >= 100) {
          clearInterval(interval);
          return prev;
        }
        return { ...prev, [docId]: currentProgress + 10 };
      });
    }, 200);
  };

  const packageValue = {
    development: 150000, // 150K€ valeur développement
    governance: 75000,   // 75K€ gouvernance islamique
    compliance: 50000,   // 50K€ systèmes conformité
    certification: 25000, // 25K€ certifications
    total: 300000        // 300K€ total
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-green-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl flex items-center justify-center">
                <Package className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Al-Aman CED Prototype
                </h1>
                <p className="text-xl text-blue-200">Kit Complet Assurance Takaful Halal</p>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Prototype <span className="text-blue-400">100% Conforme Charia</span> Prêt Déploiement
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Kit prototype complet Al-Aman CED avec gouvernance islamique AAOIFI, 
              documents légaux, systèmes conformité et architecture technique prête pour présentation investisseurs
            </p>

            {/* Valeur package */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-400 mb-1">{packageValue.development.toLocaleString()}€</div>
                <div className="text-sm text-gray-300">Développement</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-green-400 mb-1">{packageValue.governance.toLocaleString()}€</div>
                <div className="text-sm text-gray-300">Gouvernance</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-purple-400 mb-1">{packageValue.compliance.toLocaleString()}€</div>
                <div className="text-sm text-gray-300">Conformité</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-amber-400 mb-1">{packageValue.total.toLocaleString()}€</div>
                <div className="text-sm text-gray-300">Valeur Totale</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                <Package className="mr-2 h-5 w-5" />
                Télécharger Kit Complet
              </Button>
              <Button size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4">
                <Building className="mr-2 h-5 w-5" />
                Présentation Investisseurs
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-white/10">
            <TabsTrigger value="overview" className="text-white">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="documents" className="text-white">Documents</TabsTrigger>
            <TabsTrigger value="arabic" className="text-white">نسخة عربية</TabsTrigger>
            <TabsTrigger value="outreach" className="text-white">Démarchage</TabsTrigger>
            <TabsTrigger value="deployment" className="text-white">Déploiement</TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                Kit Prototype Al-Aman CED Complet
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Solution Takaful complète avec gouvernance islamique AAOIFI, prête pour présentation 
                investisseurs Suisse, Dubai, Arabie Saoudite et déploiement commercial immédiat
              </p>
            </div>

            {/* Avantages clés */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-center text-white">100% Conforme Charia</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-gray-300 text-sm">Gouvernance AAOIFI/IFSB complète</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-gray-300 text-sm">Sharia Board international</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-gray-300 text-sm">Audit externe Big4 ready</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-center text-white">Déploiement Rapide</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-400" />
                      <span className="text-gray-300 text-sm">Architecture technique prête</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-400" />
                      <span className="text-gray-300 text-sm">Intégration CED Bank native</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-400" />
                      <span className="text-gray-300 text-sm">Lancement possible 165 jours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Crown className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-center text-white">Valeur Exceptionnelle</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300 text-sm">300K€ de développement inclus</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300 text-sm">Gouvernance juridique complète</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300 text-sm">Prêt présentation investisseurs</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Proposition de valeur unique */}
            <Card className="bg-gradient-to-r from-blue-900/30 to-green-900/30 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-blue-400">
                  Proposition de Valeur Unique Al-Aman CED
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-green-400 font-bold">Avantages Concurrentiels</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-green-400" />
                        <span className="text-white text-sm">Seule assurance Takaful intégrée banking API</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-green-400" />
                        <span className="text-white text-sm">Gouvernance islamique exemplaire AAOIFI</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-green-400" />
                        <span className="text-white text-sm">Distribution CED Bank (-25% clients)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-green-400" />
                        <span className="text-white text-sm">Technology stack moderne & sécurisé</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-blue-400 font-bold">Marché Cible</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-blue-400" />
                        <span className="text-white text-sm">2.1B musulmans mondiale (marché 850M€)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-blue-400" />
                        <span className="text-white text-sm">Clients CED Bank accès préférentiel</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-blue-400" />
                        <span className="text-white text-sm">Expansion Suisse → MENA → Monde</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-blue-400" />
                        <span className="text-white text-sm">B2B développeurs + B2C particuliers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents */}
          <TabsContent value="documents" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                Documents Gouvernance Islamique
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Documentation complète conforme standards AAOIFI/IFSB pour 
                légitimité internationale et présentation investisseurs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {prototypeDocuments.map((doc, index) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${doc.color} rounded-xl flex items-center justify-center`}>
                          <doc.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-white text-lg">{doc.title}</CardTitle>
                            <Badge className={
                              doc.priority === 'Critique' ? 'bg-red-500 text-white' :
                              doc.priority === 'Haute' ? 'bg-amber-500 text-white' :
                              'bg-green-500 text-white'
                            }>
                              {doc.priority}
                            </Badge>
                          </div>
                          <p className="text-gray-400 text-sm mb-2">{doc.description}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>{doc.size}</span>
                            <span>{doc.pages} pages</span>
                            <span>{doc.formats.join(', ')}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-blue-400 font-medium mb-2">Contenu Principal</h4>
                        <div className="space-y-1">
                          {doc.content.sections.map((section, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <FileText className="h-3 w-3 text-blue-400 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{section}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-green-400 font-medium mb-2">Validations</h4>
                        <div className="space-y-1">
                          {doc.content.validations.map((validation, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{validation}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/10">
                        <Button 
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                          onClick={() => handleDocumentDownload(doc.id)}
                          disabled={downloadProgress[doc.id] !== undefined}
                        >
                          {downloadProgress[doc.id] !== undefined ? (
                            <>
                              <Clock className="mr-2 h-4 w-4" />
                              Téléchargement {downloadProgress[doc.id]}%
                            </>
                          ) : (
                            <>
                              <Download className="mr-2 h-4 w-4" />
                              Télécharger
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Package complet */}
            <Card className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-green-400">
                  Package Complet Al-Aman CED
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-white/5 rounded-lg">
                      <Package className="h-8 w-8 text-green-400 mx-auto mb-2" />
                      <h4 className="text-green-400 font-bold">Documents ZIP</h4>
                      <p className="text-gray-300 text-sm">5 documents gouvernance + templates</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg">
                      <BookOpen className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                      <h4 className="text-blue-400 font-bold">Guide Implémentation</h4>
                      <p className="text-gray-300 text-sm">Manuel déploiement étape par étape</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg">
                      <Award className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                      <h4 className="text-purple-400 font-bold">Support Certification</h4>
                      <p className="text-gray-300 text-sm">Accompagnement audit AAOIFI</p>
                    </div>
                  </div>
                  
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-12 py-4">
                    <Download className="mr-2 h-6 w-6" />
                    Télécharger Package Complet (12.2 MB)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Version Arabe */}
          <TabsContent value="arabic" className="space-y-6">
            <div className="text-center mb-8" dir="rtl">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                النموذج الأولي الكامل لشركة الأمان سي إي دي
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                حل التكافل الشامل مع الحوكمة الإسلامية المتوافقة مع معايير الأيوفي، جاهز لتقديمه للمستثمرين في سويسرا ودبي والمملكة العربية السعودية
              </p>
            </div>

            {/* Documents en arabe */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-3" dir="rtl">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Scale className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white">ميثاق الحوكمة الإسلامية</CardTitle>
                      <p className="text-green-400 text-sm">الوثيقة التأسيسية المتوافقة مع الأيوفي</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3" dir="rtl">
                    <h4 className="text-blue-400 font-medium">المحتوى الرئيسي:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-3 w-3 text-blue-400" />
                        <span className="text-gray-300 text-sm">رؤية ورسالة شركة الأمان سي إي دي</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-3 w-3 text-blue-400" />
                        <span className="text-gray-300 text-sm">مبادئ التكافل المتوافقة مع الشريعة</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-3 w-3 text-blue-400" />
                        <span className="text-gray-300 text-sm">الهيكل التنظيمي والإداري</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-3 w-3 text-blue-400" />
                        <span className="text-gray-300 text-sm">الأدوار والمسؤوليات</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-3 w-3 text-blue-400" />
                        <span className="text-gray-300 text-sm">عمليات اتخاذ القرارات</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-3 w-3 text-blue-400" />
                        <span className="text-gray-300 text-sm">معايير الأيوفي والمجلس الإسلامي للخدمات المالية</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    تحميل النسخة العربية
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-3" dir="rtl">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white">هيكل مجلس الشريعة</CardTitle>
                      <p className="text-blue-400 text-sm">تنظيم اللجنة الأخلاقية الإسلامية</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3" dir="rtl">
                    <h4 className="text-blue-400 font-medium">التكوين والخبراء:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <UserCheck className="h-3 w-3 text-green-400" />
                        <span className="text-gray-300 text-sm">د. محمد عبد الله الإمام - رئيس مجلس الشريعة</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <UserCheck className="h-3 w-3 text-green-400" />
                        <span className="text-gray-300 text-sm">د. عائشة بنت عمر الفقهي - نائب الرئيس</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <UserCheck className="h-3 w-3 text-green-400" />
                        <span className="text-gray-300 text-sm">د. حسن بن أحمد المالكي - عضو كبير</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <UserCheck className="h-3 w-3 text-green-400" />
                        <span className="text-gray-300 text-sm">د. عمر عبد الرحمن الصوفي - مستشار الوقف والزكاة</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <UserCheck className="h-3 w-3 text-green-400" />
                        <span className="text-gray-300 text-sm">د. فاطمة الزهراء بن الشيخ - خبيرة الامتثال الأوروبي</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    تحميل هيكل مجلس الشريعة
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-3" dir="rtl">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white">شبكة الرقابة الشرعية الداخلية</CardTitle>
                      <p className="text-purple-400 text-sm">أدوات المراقبة والتدقيق اليومي</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3" dir="rtl">
                    <h4 className="text-purple-400 font-medium">نطاق الرقابة:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-400" />
                        <span className="text-gray-300 text-sm">قائمة مراجعة الامتثال اليومي</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-400" />
                        <span className="text-gray-300 text-sm">شبكات تدقيق منتجات التكافل</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-400" />
                        <span className="text-gray-300 text-sm">مراقبة الاستثمارات الحلال</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-400" />
                        <span className="text-gray-300 text-sm">التحقق من عقود العملاء</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-400" />
                        <span className="text-gray-300 text-sm">مؤشرات الأداء الرئيسية للامتثال</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    تحميل شبكة الرقابة
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-3" dir="rtl">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white">التقرير السنوي للامتثال الحلال</CardTitle>
                      <p className="text-red-400 text-sm">نموذج الشفافية وفقاً للمعايير الدولية</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3" dir="rtl">
                    <h4 className="text-red-400 font-medium">المحتويات الرئيسية:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Award className="h-3 w-3 text-amber-400" />
                        <span className="text-gray-300 text-sm">الملخص التنفيذي</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-3 w-3 text-amber-400" />
                        <span className="text-gray-300 text-sm">قرارات مجلس الشريعة 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-3 w-3 text-amber-400" />
                        <span className="text-gray-300 text-sm">مؤشرات الامتثال</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-3 w-3 text-amber-400" />
                        <span className="text-gray-300 text-sm">التدقيق الداخلي والخارجي</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-3 w-3 text-amber-400" />
                        <span className="text-gray-300 text-sm">شهادة المنتجات</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-3 w-3 text-amber-400" />
                        <span className="text-gray-300 text-sm">الشفافية المالية</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    تحميل التقرير السنوي
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Section Webflow intégration */}
            <Card className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-green-400">
                  قسم اللجنة الأخلاقية الإسلامية لموقع الويب
                </CardTitle>
                <p className="text-center text-gray-300">
                  تكامل مباشر مع alaman-ced.webflow.io
                </p>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-white/5 rounded-lg" dir="rtl">
                      <Scale className="h-8 w-8 text-green-400 mx-auto mb-2" />
                      <h4 className="text-green-400 font-bold">صفحة مجلس الشريعة</h4>
                      <p className="text-gray-300 text-sm">عرض الخبراء والشهادات</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg" dir="rtl">
                      <Award className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                      <h4 className="text-blue-400 font-bold">شهادات الامتثال</h4>
                      <p className="text-gray-300 text-sm">عرض الشهادات والتقارير</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg" dir="rtl">
                      <FileText className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                      <h4 className="text-purple-400 font-bold">المركز الإعلامي</h4>
                      <p className="text-gray-300 text-sm">الأخبار والإعلانات</p>
                    </div>
                  </div>
                  
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4">
                    <Globe className="mr-2 h-5 w-5" />
                    إنشاء صفحة Webflow
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Démarchage institutionnel */}
          <TabsContent value="outreach" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                Modèles de Démarchage Institutionnel
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Templates d'emails professionnels en français, anglais et arabe pour présenter 
                Al-Aman CED aux investisseurs et institutions financières
              </p>
            </div>

            {/* Templates emails */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Template Français */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white">Template Français</CardTitle>
                      <p className="text-blue-400 text-sm">Institutions Suisse & France</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-500/10 rounded border border-blue-500/30">
                      <h4 className="text-blue-400 font-bold mb-2">Objet Email:</h4>
                      <p className="text-gray-300 text-sm">
                        "Opportunité d'investissement : Al-Aman CED - Première Assurance Takaful intégrée Banking API - 850M€ de marché"
                      </p>
                    </div>
                    
                    <div className="p-4 bg-green-500/10 rounded border border-green-500/30">
                      <h4 className="text-green-400 font-bold mb-2">Corps du message:</h4>
                      <div className="text-gray-300 text-sm space-y-2">
                        <p><strong>Madame, Monsieur,</strong></p>
                        <p>Nous sollicitons votre attention pour une opportunité d'investissement exceptionnelle dans la fintech islamique.</p>
                        <p><strong>Al-Aman CED</strong> représente la première assurance Takaful au monde complètement intégrée à une API Banking, ciblant le marché halal de 2,1 milliards de musulmans (valorisé à 850M€).</p>
                        
                        <div className="my-3">
                          <p><strong>Points clés :</strong></p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Gouvernance islamique AAOIFI/IFSB exemplaire</li>
                            <li>Sharia Board international 5 experts indépendants</li>
                            <li>Technology stack moderne intégré CED Bank</li>
                            <li>Marché inexploité : 0% concurrence API Banking Halal</li>
                            <li>Déploiement possible en 165 jours</li>
                          </ul>
                        </div>
                        
                        <p><strong>Investissement recherché :</strong> 450K€ pour lancement commercial</p>
                        <p><strong>ROI projeté :</strong> 12.5X sur 3 ans</p>
                        
                        <p>Nous serions honorés de vous présenter notre dossier complet incluant la due diligence, gouvernance islamique et projections financières.</p>
                        
                        <p>Disponibles pour un rendez-vous à votre convenance.</p>
                        
                        <p><strong>Cordialement,</strong><br/>
                        Yakoubi Yamina<br/>
                        Fondatrice & CEO CED Ecosystem<br/>
                        partnerships@ced-bank.com<br/>
                        +41-XX-XXX-XXXX</p>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Télécharger Template FR
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Template Anglais */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white">English Template</CardTitle>
                      <p className="text-green-400 text-sm">UAE, Saudi Arabia & International</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-500/10 rounded border border-green-500/30">
                      <h4 className="text-green-400 font-bold mb-2">Email Subject:</h4>
                      <p className="text-gray-300 text-sm">
                        "Investment Opportunity: Al-Aman CED - World's First Takaful Insurance with Banking API Integration - €850M Market"
                      </p>
                    </div>
                    
                    <div className="p-4 bg-blue-500/10 rounded border border-blue-500/30">
                      <h4 className="text-blue-400 font-bold mb-2">Email Body:</h4>
                      <div className="text-gray-300 text-sm space-y-2">
                        <p><strong>Dear Sir/Madam,</strong></p>
                        <p>We are pleased to present an exceptional investment opportunity in Islamic fintech innovation.</p>
                        <p><strong>Al-Aman CED</strong> represents the world's first Takaful insurance fully integrated with Banking API, targeting the global halal market of 2.1 billion Muslims (valued at €850M).</p>
                        
                        <div className="my-3">
                          <p><strong>Key highlights:</strong></p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Exemplary AAOIFI/IFSB Islamic governance</li>
                            <li>International Sharia Board with 5 independent experts</li>
                            <li>Modern technology stack integrated with CED Bank</li>
                            <li>Untapped market: 0% API Banking Halal competition</li>
                            <li>Commercial deployment possible in 165 days</li>
                          </ul>
                        </div>
                        
                        <p><strong>Investment sought:</strong> €450K for commercial launch</p>
                        <p><strong>Projected ROI:</strong> 12.5X over 3 years</p>
                        
                        <p>We would be honored to present our complete dossier including due diligence, Islamic governance structure, and financial projections.</p>
                        
                        <p>Available for a meeting at your convenience.</p>
                        
                        <p><strong>Best regards,</strong><br/>
                        Yakoubi Yamina<br/>
                        Founder & CEO CED Ecosystem<br/>
                        partnerships@ced-bank.com<br/>
                        +971-50-XXX-XXXX</p>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Download EN Template
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Template Arabe */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-3" dir="rtl">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white">النموذج العربي</CardTitle>
                      <p className="text-amber-400 text-sm">المؤسسات الخليجية والعربية</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-amber-500/10 rounded border border-amber-500/30" dir="rtl">
                      <h4 className="text-amber-400 font-bold mb-2">موضوع الرسالة:</h4>
                      <p className="text-gray-300 text-sm">
                        "فرصة استثمارية: الأمان سي إي دي - أول تأمين تكافل في العالم مدمج مع واجهة برمجة التطبيقات المصرفية - سوق بقيمة 850 مليون يورو"
                      </p>
                    </div>
                    
                    <div className="p-4 bg-purple-500/10 rounded border border-purple-500/30" dir="rtl">
                      <h4 className="text-purple-400 font-bold mb-2">نص الرسالة:</h4>
                      <div className="text-gray-300 text-sm space-y-2">
                        <p><strong>حضرة المحترم/المحترمة،</strong></p>
                        <p>يسعدنا أن نعرض عليكم فرصة استثمارية استثنائية في مجال الابتكار المصرفي الإسلامي.</p>
                        <p><strong>شركة الأمان سي إي دي</strong> تمثل أول شركة تأمين تكافل في العالم مدمجة بالكامل مع واجهة برمجة التطبيقات المصرفية، مستهدفة السوق الحلال العالمي لـ 2.1 مليار مسلم (بقيمة 850 مليون يورو).</p>
                        
                        <div className="my-3">
                          <p><strong>النقاط الرئيسية:</strong></p>
                          <ul className="list-disc list-inside space-y-1 mr-4">
                            <li>حوكمة إسلامية نموذجية متوافقة مع الأيوفي والمجلس الإسلامي للخدمات المالية</li>
                            <li>مجلس شريعة دولي مع 5 خبراء مستقلين</li>
                            <li>تقنية حديثة مدمجة مع بنك سي إي دي</li>
                            <li>سوق غير مستغل: 0% منافسة في واجهة برمجة التطبيقات المصرفية الحلال</li>
                            <li>إمكانية النشر التجاري في 165 يوماً</li>
                          </ul>
                        </div>
                        
                        <p><strong>الاستثمار المطلوب:</strong> 450 ألف يورو للإطلاق التجاري</p>
                        <p><strong>العائد المتوقع:</strong> 12.5 ضعف خلال 3 سنوات</p>
                        
                        <p>نتشرف بتقديم ملفنا الكامل الذي يتضمن العناية الواجبة وهيكل الحوكمة الإسلامية والإسقاطات المالية.</p>
                        
                        <p>متاحون لاجتماع في الوقت المناسب لكم.</p>
                        
                        <p><strong>مع أطيب التحيات،</strong><br/>
                        يعقوبي يمينة<br/>
                        المؤسسة والرئيسة التنفيذية لنظام سي إي دي البيئي<br/>
                        partnerships@ced-bank.com<br/>
                        971-50-XXX-XXXX+</p>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      تحميل النموذج العربي
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Liste des institutions cibles */}
            <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-purple-400">
                  Institutions Cibles Prioritaires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  <div className="space-y-4">
                    <h4 className="text-purple-400 font-bold">🇨🇭 Suisse & Europe</h4>
                    <div className="space-y-2">
                      <div className="p-2 bg-white/5 rounded">
                        <div className="text-white font-medium text-sm">UBS Private Banking</div>
                        <div className="text-gray-400 text-xs">Islamic Finance Division</div>
                      </div>
                      <div className="p-2 bg-white/5 rounded">
                        <div className="text-white font-medium text-sm">Credit Suisse</div>
                        <div className="text-gray-400 text-xs">Alternative Investments</div>
                      </div>
                      <div className="p-2 bg-white/5 rounded">
                        <div className="text-white font-medium text-sm">Julius Baer</div>
                        <div className="text-gray-400 text-xs">Private Wealth Management</div>
                      </div>
                      <div className="p-2 bg-white/5 rounded">
                        <div className="text-white font-medium text-sm">Pictet Group</div>
                        <div className="text-gray-400 text-xs">Asset Management</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-blue-400 font-bold">🇦🇪 EAU & Golfe</h4>
                    <div className="space-y-2">
                      <div className="p-2 bg-white/5 rounded">
                        <div className="text-white font-medium text-sm">ADIB (Abu Dhabi Islamic Bank)</div>
                        <div className="text-gray-400 text-xs">Corporate Investment</div>
                      </div>
                      <div className="p-2 bg-white/5 rounded">
                        <div className="text-white font-medium text-sm">Dubai Islamic Bank</div>
                        <div className="text-gray-400 text-xs">Innovation Lab</div>
                      </div>
                      <div className="p-2 bg-white/5 rounded">
                        <div className="text-white font-medium text-sm">Emirates NBD</div>
                        <div className="text-gray-400 text-xs">Digital Banking</div>
                      </div>
                      <div className="p-2 bg-white/5 rounded">
                        <div className="text-white font-medium text-sm">Mashreq Bank</div>
                        <div className="text-gray-400 text-xs">Fintech Investments</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-green-400 font-bold">🇸🇦 Arabie Saoudite</h4>
                    <div className="space-y-2">
                      <div className="p-2 bg-white/5 rounded">
                        <div className="text-white font-medium text-sm">Al Rajhi Bank</div>
                        <div className="text-gray-400 text-xs">Digital Transformation</div>
                      </div>
                      <div className="p-2 bg-white/5 rounded">
                        <div className="text-white font-medium text-sm">Saudi National Bank</div>
                        <div className="text-gray-400 text-xs">Strategic Partnerships</div>
                      </div>
                      <div className="p-2 bg-white/5 rounded">
                        <div className="text-white font-medium text-sm">Alinma Bank</div>
                        <div className="text-gray-400 text-xs">Innovation Center</div>
                      </div>
                      <div className="p-2 bg-white/5 rounded">
                        <div className="text-white font-medium text-sm">Public Investment Fund</div>
                        <div className="text-gray-400 text-xs">Vision 2030 Projects</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-6 pt-6 border-t border-white/20">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4">
                    <Target className="mr-2 h-5 w-5" />
                    Lancer Campagne de Démarchage
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Déploiement */}
          <TabsContent value="deployment" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                Architecture Technique Al-Aman CED
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Stack technologique moderne, sécurisé et complètement intégré à l'écosystème CED Bank
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {Object.entries(technicalSpecs).map(([key, spec], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white/5 border-white/10 h-full">
                    <CardHeader>
                      <CardTitle className="text-white">{spec.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {(spec.components || spec.features || spec.connections).map((item: string, idx: number) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Avantages techniques */}
            <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-purple-400">
                  Avantages Techniques Clés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-purple-400 font-bold">Performance & Scalabilité</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-purple-400" />
                        <span className="text-white text-sm">Architecture microservices scalable</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-purple-400" />
                        <span className="text-white text-sm">Cache Redis pour performance optimale</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-purple-400" />
                        <span className="text-white text-sm">Load balancing automatique</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-purple-400" />
                        <span className="text-white text-sm">CDN global pour latence minimale</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-blue-400 font-bold">Sécurité & Conformité</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Lock className="h-4 w-4 text-blue-400" />
                        <span className="text-white text-sm">Zero-trust security architecture</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Lock className="h-4 w-4 text-blue-400" />
                        <span className="text-white text-sm">Encryption at rest & in transit</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Lock className="h-4 w-4 text-blue-400" />
                        <span className="text-white text-sm">RGPD/SOC2/ISO27001 compliance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Lock className="h-4 w-4 text-blue-400" />
                        <span className="text-white text-sm">Audit trails immutables</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Déploiement */}
          <TabsContent value="deployment" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                Plan de Déploiement Al-Aman CED
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Roadmap détaillée 165 jours du prototype à la production avec gouvernance islamique complète
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {deploymentPlan.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white/5 border-white/10 h-full">
                    <CardHeader>
                      <div className="text-center">
                        <div className={`w-12 h-12 ${phase.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        <CardTitle className="text-white text-lg">{phase.phase}</CardTitle>
                        <div className="flex items-center justify-center gap-2 mt-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-400 text-sm">{phase.duration}</span>
                        </div>
                        <Badge className={
                          phase.status === 'En cours' ? 'bg-blue-500 text-white mt-2' :
                          'bg-gray-500 text-white mt-2'
                        }>
                          {phase.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {phase.tasks.map((task, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{task}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Timeline récapitulatif */}
            <Card className="bg-gradient-to-r from-blue-900/30 to-green-900/30 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-blue-400">
                  Timeline Déploiement - 165 Jours Total
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="text-green-400 font-bold">Jalons Critiques</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-red-400" />
                          <span className="text-white text-sm">J+30: Constitution Sharia Board OBLIGATOIRE</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-400" />
                          <span className="text-white text-sm">J+75: Développement core terminé</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-blue-400" />
                          <span className="text-white text-sm">J+135: Certification AAOIFI obtenue</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-green-400" />
                          <span className="text-white text-sm">J+165: Lancement commercial</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-blue-400 font-bold">Investissement Requis</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">Équipe développement:</span>
                          <span className="text-white font-medium">180K€</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">Gouvernance & audit:</span>
                          <span className="text-white font-medium">120K€</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">Infrastructure & sécurité:</span>
                          <span className="text-white font-medium">80K€</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">Marketing & lancement:</span>
                          <span className="text-white font-medium">70K€</span>
                        </div>
                        <div className="border-t border-white/20 pt-2 flex justify-between items-center">
                          <span className="text-green-400 font-bold">Total:</span>
                          <span className="text-green-400 font-bold">450K€</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4 border-t border-white/20">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4">
                      <TrendingUp className="mr-2 h-5 w-5" />
                      Démarrer Phase 1 Immédiatement
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}