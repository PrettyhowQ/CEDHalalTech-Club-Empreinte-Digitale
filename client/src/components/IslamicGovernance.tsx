import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield,
  Users,
  BookOpen,
  CheckCircle,
  Star,
  Globe,
  Award,
  FileText,
  Eye,
  Clock,
  Gavel,
  Heart,
  TrendingUp,
  Lock,
  UserCheck,
  Building,
  Calendar,
  AlertTriangle,
  Zap,
  Target,
  Crown,
  Scale,
  GraduationCap
} from 'lucide-react';

export function IslamicGovernance() {
  const [activeTab, setActiveTab] = useState('sharia-board');
  const [complianceMetrics, setComplianceMetrics] = useState({
    transactionsAudited: 0,
    complianceRate: 0,
    certificationsActive: 0
  });

  // Animation métriques conformité
  useEffect(() => {
    const interval = setInterval(() => {
      setComplianceMetrics(prev => ({
        transactionsAudited: Math.min(prev.transactionsAudited + 500, 150000),
        complianceRate: Math.min(prev.complianceRate + 0.1, 99.8),
        certificationsActive: Math.min(prev.certificationsActive + 1, 12)
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const shariaBoardMembers = [
    {
      name: 'Dr. Muhammad Abdullah Al-Imam',
      title: 'Président Sharia Board',
      expertise: 'Fiqh Al-Muamalat & Finance Islamique',
      credentials: [
        'Docteur Université Al-Azhar',
        'Ex-Conseiller Islamic Development Bank',
        '25+ ans finance islamique',
        'Auteur 15 ouvrages référence'
      ],
      certifications: ['AAOIFI', 'IFSB', 'CIBAFI'],
      country: '🇸🇦 Arabie Saoudite',
      photo: '/api/placeholder/128/128',
      independence: 'Totalement indépendant',
      experience: '25 ans'
    },
    {
      name: 'Dr. Aisha Bint Omar Al-Fiqhi',
      title: 'Vice-Présidente Sharia Board',
      expertise: 'Takaful & Assurance Islamique',
      credentials: [
        'Docteur Université Islamique Médine',
        'Spécialiste Takaful AAOIFI',
        'Consultante BID & CIBAFI',
        'Expert femme finance islamique'
      ],
      certifications: ['AAOIFI', 'IAIS', 'Takaful'],
      country: '🇦🇪 Émirats Arabes Unis',
      photo: '/api/placeholder/128/128',
      independence: 'Totalement indépendante',
      experience: '18 ans'
    },
    {
      name: 'Dr. Hassan Ibn Ahmad Al-Maliki',
      title: 'Membre Senior Sharia Board',
      expertise: 'Banking Digital & Fintech Halal',
      credentials: [
        'Docteur Université Islamique Malaysia',
        'Pioneer Digital Islamic Banking',
        'Consultant Central Banks MENA',
        'Expert blockchain halal'
      ],
      certifications: ['IFSB', 'INCEIF', 'Digital Sharia'],
      country: '🇲🇾 Malaisie',
      photo: '/api/placeholder/128/128',
      independence: 'Totalement indépendant',
      experience: '20 ans'
    },
    {
      name: 'Dr. Omar Abdel Rahman Al-Sufi',
      title: 'Conseiller Waqf & Zakat',
      expertise: 'Waqf Digital & Crowdfunding Islamique',
      credentials: [
        'Docteur Dar Al-Ulum Cairo',
        'Directeur Awqaf Ministry',
        'Expert Waqf digitaux',
        'Spécialiste Zakat tech'
      ],
      certifications: ['Waqf Authority', 'Zakat House', 'AAOIFI'],
      country: '🇪🇬 Égypte',
      photo: '/api/placeholder/128/128',
      independence: 'Totalement indépendant',
      experience: '22 ans'
    },
    {
      name: 'Dr. Fatima Al-Zahra Bencheikh',
      title: 'Experte Conformité Européenne',
      expertise: 'Finance Islamique Europe & Régulation',
      credentials: [
        'Docteur Université Zitouna',
        'Consultante BCE & ESMA',
        'Expert régulation européenne',
        'Passerelle Europe-Monde arabe'
      ],
      certifications: ['ESMA', 'AAOIFI', 'IFSB'],
      country: '🇫🇷 France',
      photo: '/api/placeholder/128/128',
      independence: 'Totalement indépendante',
      experience: '15 ans'
    }
  ];

  const complianceOfficers = [
    {
      name: 'Amina Yasmin Al-Sharif',
      title: 'Chief Sharia Compliance Officer',
      department: 'CED Bank & Al-Aman CED',
      responsibilities: [
        'Supervision quotidienne transactions',
        'Validation contrats & produits',
        'Reporting conformité mensuel',
        'Formation équipes conformité'
      ],
      certifications: ['AAOIFI CSAA', 'CIPA', 'Islamic Finance'],
      experience: '12 ans',
      education: 'Master Finance Islamique INCEIF'
    },
    {
      name: 'Ibrahim Mohammad Al-Tayyib',
      title: 'Senior Compliance Analyst',
      department: 'API Banking & Développeurs',
      responsibilities: [
        'Audit APIs conformité Charia',
        'Validation SDK développeurs',
        'Documentation technique halal',
        'Support développeurs conformité'
      ],
      certifications: ['CSAA', 'Tech Compliance', 'API Security'],
      experience: '8 ans',
      education: 'Master IT & Finance Islamique'
    },
    {
      name: 'Khadija Bint Ali Al-Morabet',
      title: 'Takaful Compliance Manager',
      department: 'Al-Aman CED Insurance',
      responsibilities: [
        'Conformité produits Takaful',
        'Audit fonds Tabarru',
        'Validation surplus distribution',
        'Reporting autorités Takaful'
      ],
      certifications: ['Takaful Professional', 'AAOIFI', 'IAIS'],
      experience: '10 ans',
      education: 'Master Takaful & Risk Management'
    }
  ];

  const halalBankingServices = [
    {
      category: 'Comptes & Cartes',
      services: [
        {
          name: 'Compte Courant CED',
          halal: true,
          description: '0% intérêt, frais transparents, conformité Charia complète',
          features: ['Aucun intérêt', 'Frais fixes transparents', 'Audit Sharia mensuel'],
          target: 'Particuliers & Entreprises'
        },
        {
          name: 'Carte Débit CED Halal',
          halal: true,
          description: 'Carte sans crédit, paiements instantanés, cashback halal',
          features: ['Pas de crédit/découvert', 'Cashback éthique', 'Blocage auto haram'],
          target: 'Tous publics'
        },
        {
          name: 'Carte Prépayée Waqf',
          halal: true,
          description: 'Carte rechargeable, portion automatique Waqf/Zakat',
          features: ['Rechargeable', 'Don automatique', 'Traçabilité Zakat'],
          target: 'Pratiquants actifs'
        }
      ]
    },
    {
      category: 'Financement Halal',
      services: [
        {
          name: 'Qard Hassan (Prêt Bienveillant)',
          halal: true,
          description: 'Microcrédit 0% intérêt pour besoins urgents',
          features: ['0% intérêt', 'Remboursement flexible', 'Aide communautaire'],
          target: 'Situations difficiles'
        },
        {
          name: 'Mourabaha Immobilier',
          halal: true,
          description: 'Achat-revente immobilier conforme Charia',
          features: ['Propriété progressive', 'Marge fixe transparente', 'Pas de pénalités'],
          target: 'Achat résidence'
        },
        {
          name: 'Ijara Véhicules',
          halal: true,
          description: 'Location-vente véhicules avec option achat',
          features: ['Location évolutive', 'Option achat finale', 'Assurance Takaful incluse'],
          target: 'Mobilité halal'
        },
        {
          name: 'Moucharaka Business',
          halal: true,
          description: 'Partenariat financier entreprises, partage profits/pertes',
          features: ['Partenariat équitable', 'Partage risques', 'Conseil business inclus'],
          target: 'Entrepreneurs'
        }
      ]
    },
    {
      category: 'Investissement Éthique',
      services: [
        {
          name: 'Sukuk CED Portfolio',
          halal: true,
          description: 'Obligations islamiques diversifiées, rendement halal',
          features: ['Sukuk certifiés', 'Diversification géographique', 'Liquidité élevée'],
          target: 'Investisseurs conservateurs'
        },
        {
          name: 'Fonds Actions Halal',
          halal: true,
          description: 'Actions entreprises Sharia-compliant uniquement',
          features: ['Screening rigoureux', 'Exclusion secteurs haram', 'Performance éthique'],
          target: 'Investisseurs dynamiques'
        },
        {
          name: 'Crowdfunding Participatif',
          halal: true,
          description: 'Financement participatif projets éthiques',
          features: ['Projets halal uniquement', 'Participation minimale 10€', 'Impact social'],
          target: 'Investissement impact'
        }
      ]
    },
    {
      category: 'Services Communautaires',
      services: [
        {
          name: 'Waqf Digital Platform',
          halal: true,
          description: 'Création et gestion Waqf numériques',
          features: ['Waqf perpétuels', 'Traçabilité blockchain', 'Impact mesurable'],
          target: 'Philanthropes'
        },
        {
          name: 'Zakat Calculator & Pay',
          halal: true,
          description: 'Calcul automatique et versement Zakat',
          features: ['Calcul précis', 'Versement direct', 'Reçu fiscal'],
          target: 'Tous musulmans'
        },
        {
          name: 'Sadaqa Collective',
          halal: true,
          description: 'Dons collectifs pour projets humanitaires',
          features: ['Projets vérifiés', 'Impact temps réel', 'Participation minimale 1€'],
          target: 'Solidarité musulmane'
        }
      ]
    }
  ];

  const governanceStructure = {
    'sharia-board': {
      title: 'Sharia Board - Comité Éthique Islamique',
      description: 'Organe suprême de validation conformité Charia',
      icon: Scale,
      color: 'from-green-500 to-emerald-600'
    },
    'compliance': {
      title: 'Conformité Quotidienne',
      description: 'Application pratique des décisions Sharia Board',
      icon: Shield,
      color: 'from-blue-500 to-cyan-600'
    },
    'services': {
      title: 'Services Banking Halal',
      description: 'Produits financiers 100% conformes Charia',
      icon: Building,
      color: 'from-purple-500 to-indigo-600'
    },
    'audits': {
      title: 'Audits & Certifications',
      description: 'Contrôles réguliers et certifications internationales',
      icon: Award,
      color: 'from-amber-500 to-orange-600'
    }
  };

  const certifications = [
    {
      name: 'AAOIFI Compliance',
      organization: 'Accounting and Auditing Organization for Islamic Financial Institutions',
      scope: 'Standards comptables et audit islamique',
      validity: '2025-2028',
      status: 'Active',
      level: 'Gold Standard'
    },
    {
      name: 'IFSB Framework',
      organization: 'Islamic Financial Services Board',
      scope: 'Régulation et supervision finance islamique',
      validity: '2024-2027',
      status: 'Active',
      level: 'Full Compliance'
    },
    {
      name: 'Malaysia MIFC',
      organization: 'Malaysia International Islamic Financial Centre',
      scope: 'Hub finance islamique internationale',
      validity: '2024-2026',
      status: 'Active',
      level: 'Premier Partner'
    },
    {
      name: 'UAE ADGM',
      organization: 'Abu Dhabi Global Market',
      scope: 'Licence finance islamique EAU',
      validity: '2024-2029',
      status: 'Pending',
      level: 'Category 1'
    },
    {
      name: 'Saudi SAMA',
      organization: 'Saudi Arabian Monetary Authority',
      scope: 'Licence bancaire Arabie Saoudite',
      validity: '2025-2030',
      status: 'Application',
      level: 'Full Banking'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl flex items-center justify-center">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Gouvernance Islamique CED
                </h1>
                <p className="text-xl text-green-200">Conformité Charia • Sharia Board • Banking Halal</p>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              CED Bank & Al-Aman CED : <span className="text-green-400">100% Conformité Charia</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Gouvernance islamique exemplaire avec Sharia Board international, 
              conformité AAOIFI/IFSB et services banking 100% halal certifiés
            </p>

            {/* Métriques conformité temps réel */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20"
              >
                <div className="text-3xl font-bold text-green-400 mb-2">{complianceMetrics.transactionsAudited.toLocaleString()}</div>
                <div className="text-sm text-gray-300">Transactions Auditées</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">{complianceMetrics.complianceRate.toFixed(1)}%</div>
                <div className="text-sm text-gray-300">Taux Conformité Charia</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20"
              >
                <div className="text-3xl font-bold text-amber-400 mb-2">{complianceMetrics.certificationsActive}</div>
                <div className="text-sm text-gray-300">Certifications Actives</div>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4">
                <Scale className="mr-2 h-5 w-5" />
                Validation Sharia Board
              </Button>
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4">
                <Award className="mr-2 h-5 w-5" />
                Certifications AAOIFI
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/10">
            <TabsTrigger value="sharia-board" className="text-white">Sharia Board</TabsTrigger>
            <TabsTrigger value="compliance" className="text-white">Conformité</TabsTrigger>
            <TabsTrigger value="services" className="text-white">Services Halal</TabsTrigger>
            <TabsTrigger value="audits" className="text-white">Audits & Certifications</TabsTrigger>
          </TabsList>

          {/* Sharia Board */}
          <TabsContent value="sharia-board" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                Sharia Board International CED
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                5 experts internationaux indépendants, 98+ années d'expérience combinée, 
                certification AAOIFI/IFSB, validation de tous produits CED Bank & Al-Aman CED
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {shariaBoardMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                          <GraduationCap className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <CardTitle className="text-white text-lg">{member.name}</CardTitle>
                            <Badge className="bg-green-500 text-white text-xs">{member.independence}</Badge>
                          </div>
                          <p className="text-green-400 font-medium">{member.title}</p>
                          <p className="text-gray-400 text-sm">{member.country}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-blue-400 font-medium mb-2">Expertise Principale</h4>
                        <p className="text-blue-300 text-sm">{member.expertise}</p>
                      </div>

                      <div>
                        <h4 className="text-amber-400 font-medium mb-2">Qualifications</h4>
                        <div className="space-y-1">
                          {member.credentials.map((cred, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300 text-xs">{cred}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-3 border-t border-white/10">
                        <div className="flex gap-1">
                          {member.certifications.map((cert, idx) => (
                            <Badge key={idx} className="bg-purple-500 text-white text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                        <div className="text-right">
                          <div className="text-white font-medium text-sm">{member.experience}</div>
                          <div className="text-gray-400 text-xs">Expérience</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Responsabilités Sharia Board conformes AAOIFI */}
            <Card className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-green-400">
                  Responsabilités & Processus Sharia Board (AAOIFI Compliant)
                </CardTitle>
                <p className="text-center text-gray-300">
                  Conformité totale aux standards AAOIFI/IFSB pour légitimité internationale
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <FileText className="h-8 w-8 text-green-400 mx-auto mb-3" />
                    <h4 className="text-green-400 font-bold mb-2">Validation Produits</h4>
                    <p className="text-gray-300 text-sm">
                      Approbation OBLIGATOIRE tous produits CED avant lancement<br/>
                      <span className="text-green-300 font-medium">Standard AAOIFI FH-1</span>
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <Gavel className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                    <h4 className="text-blue-400 font-bold mb-2">Fatwas Internes</h4>
                    <p className="text-gray-300 text-sm">
                      Résolution cas complexes conformité Charia<br/>
                      <span className="text-blue-300 font-medium">Documentation obligatoire</span>
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <Eye className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                    <h4 className="text-purple-400 font-bold mb-2">Rapport Annuel AAOIFI</h4>
                    <p className="text-gray-300 text-sm">
                      Rapport conformité public OBLIGATOIRE<br/>
                      <span className="text-purple-300 font-medium">Standard GSIFI-1</span>
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <Users className="h-8 w-8 text-amber-400 mx-auto mb-3" />
                    <h4 className="text-amber-400 font-bold mb-2">Formation Continue</h4>
                    <p className="text-gray-300 text-sm">
                      Sensibilisation équipes conformité<br/>
                      <span className="text-amber-300 font-medium">Certification requise</span>
                    </p>
                  </div>
                </div>

                {/* Processus décisionnel Sharia Board */}
                <div className="mt-6 p-4 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-lg border border-emerald-500/30">
                  <h4 className="text-center text-lg font-bold text-emerald-400 mb-4">
                    Processus Décisionnel Sharia Board (Norme AAOIFI)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="text-center p-3 bg-white/5 rounded">
                      <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                      <h5 className="text-emerald-400 font-medium text-sm">Soumission Produit</h5>
                      <p className="text-gray-300 text-xs">Documentation complète requise</p>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                      <h5 className="text-blue-400 font-medium text-sm">Analyse Technique</h5>
                      <p className="text-gray-300 text-xs">Examen conformité Charia 15 jours</p>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                      <h5 className="text-purple-400 font-medium text-sm">Vote Collégial</h5>
                      <p className="text-gray-300 text-xs">Décision à l'unanimité requise</p>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded">
                      <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">4</div>
                      <h5 className="text-amber-400 font-medium text-sm">Certification</h5>
                      <p className="text-gray-300 text-xs">Certificat conformité AAOIFI</p>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">5</div>
                      <h5 className="text-green-400 font-medium text-sm">Monitoring</h5>
                      <p className="text-gray-300 text-xs">Suivi continu post-lancement</p>
                    </div>
                  </div>
                </div>

                {/* Exigences légales internationales */}
                <div className="mt-6 p-4 bg-gradient-to-r from-red-900/20 to-pink-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-center text-lg font-bold text-red-400 mb-4">
                    Exigences Légales Internationales OBLIGATOIRES
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <h5 className="text-red-400 font-bold">🇨🇭 Suisse (FINMA)</h5>
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white">Sharia Board indépendant certifié</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white">Rapport conformité public annuel</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white">Audit externe indépendant</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-blue-400 font-bold">🇦🇪 EAU (CBUAE)</h5>
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white">Certification AAOIFI obligatoire</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white">Sharia Compliance Officer désigné</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white">Standards IFSB respectés</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-purple-400 font-bold">🇸🇦 Arabie (SAMA)</h5>
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white">Comité Charia local agréé</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white">Conformité Vision 2030</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white">Certification Takaful distincte</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Conformité */}
          <TabsContent value="compliance" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                Équipe Conformité Sharia CED
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Application quotidienne des décisions Sharia Board par des experts certifiés AAOIFI, 
                supervision continue de toutes opérations CED Bank & Al-Aman CED
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {complianceOfficers.map((officer, index) => (
                <motion.div
                  key={officer.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white/5 border-white/10 h-full">
                    <CardHeader>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-3">
                          <UserCheck className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-white">{officer.name}</CardTitle>
                        <p className="text-blue-400 font-medium">{officer.title}</p>
                        <p className="text-gray-400 text-sm">{officer.department}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-purple-400 font-medium mb-2">Responsabilités</h4>
                        <div className="space-y-1">
                          {officer.responsibilities.map((resp, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300 text-xs">{resp}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 pt-3 border-t border-white/10">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Expérience:</span>
                          <span className="text-white font-medium">{officer.experience}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Formation:</span>
                          <span className="text-white font-medium text-xs">{officer.education}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {officer.certifications.map((cert, idx) => (
                          <Badge key={idx} className="bg-blue-500 text-white text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Processus conformité AAOIFI obligatoire */}
            <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-blue-400">
                  Processus Conformité Quotidienne (Standard AAOIFI GSIFI-6)
                </CardTitle>
                <p className="text-center text-gray-300">
                  Application rigoureuse des décisions Sharia Board selon normes internationales
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <Clock className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <h4 className="text-blue-400 font-bold">Monitoring Temps Réel</h4>
                    <p className="text-gray-300 text-sm">
                      Surveillance 24/7 toutes transactions<br/>
                      <span className="text-blue-300 font-medium">Système automatisé AAOIFI</span>
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <Shield className="h-8 w-8 text-green-400 mx-auto mb-2" />
                    <h4 className="text-green-400 font-bold">Validation Auto OBLIGATOIRE</h4>
                    <p className="text-gray-300 text-sm">
                      Blocage immédiat transactions non-conformes<br/>
                      <span className="text-green-300 font-medium">Seuil tolérance: 0%</span>
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <FileText className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <h4 className="text-purple-400 font-bold">Reporting AAOIFI</h4>
                    <p className="text-gray-300 text-sm">
                      Rapports mensuels Sharia Board OBLIGATOIRES<br/>
                      <span className="text-purple-300 font-medium">Format standard GSIFI</span>
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <Target className="h-8 w-8 text-amber-400 mx-auto mb-2" />
                    <h4 className="text-amber-400 font-bold">Formation Certifiée</h4>
                    <p className="text-gray-300 text-sm">
                      Certification équipes OBLIGATOIRE<br/>
                      <span className="text-amber-300 font-medium">Renouvellement annuel</span>
                    </p>
                  </div>
                </div>

                {/* Exigences spécifiques Sharia Compliance Officer */}
                <div className="mt-6 p-4 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
                  <h4 className="text-center text-lg font-bold text-indigo-400 mb-4">
                    Responsabilités Sharia Compliance Officer (AAOIFI CSAA)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h5 className="text-indigo-400 font-bold">Supervision Quotidienne OBLIGATOIRE</h5>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Validation TOUTES transactions avant exécution</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Contrôle contrats clients conformité Charia</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Monitoring placements fonds Takaful Al-Aman</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Audit API Banking conformité temps réel</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h5 className="text-purple-400 font-bold">Reporting & Documentation</h5>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Rapport mensuel détaillé Sharia Board</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Documentation incidents non-conformité</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Mise à jour politiques selon AAOIFI/IFSB</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Formation continue équipes CED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Qualifications requises Compliance Officer */}
                <div className="mt-4 p-4 bg-gradient-to-r from-amber-900/20 to-orange-900/20 rounded-lg border border-amber-500/30">
                  <h4 className="text-center text-lg font-bold text-amber-400 mb-4">
                    Qualifications OBLIGATOIRES Sharia Compliance Officer
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-white/5 rounded">
                      <GraduationCap className="h-8 w-8 text-amber-400 mx-auto mb-2" />
                      <h5 className="text-amber-400 font-bold">Formation</h5>
                      <p className="text-gray-300 text-sm">Master Finance Islamique + Certification AAOIFI CSAA OBLIGATOIRE</p>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded">
                      <Award className="h-8 w-8 text-green-400 mx-auto mb-2" />
                      <h5 className="text-green-400 font-bold">Expérience</h5>
                      <p className="text-gray-300 text-sm">5+ ans minimum finance islamique + 3+ ans compliance bancaire</p>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded">
                      <UserCheck className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                      <h5 className="text-blue-400 font-bold">Indépendance</h5>
                      <p className="text-gray-300 text-sm">Reporting direct Sharia Board + CEO, pas hiérarchie opérationnelle</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Halal */}
          <TabsContent value="services" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">
                Services Banking 100% Halal CED
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Gamme complète de services financiers islamiques validés par notre Sharia Board, 
                certifiés AAOIFI/IFSB, répondant à tous besoins musulmans
              </p>
            </div>

            {halalBankingServices.map((category, categoryIndex) => (
              <div key={category.category} className="space-y-4">
                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                  <Building className="h-6 w-6 text-purple-400" />
                  {category.category}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.services.map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                    >
                      <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-white">{service.name}</CardTitle>
                            <Badge className="bg-green-500 text-white">
                              ✅ 100% Halal
                            </Badge>
                          </div>
                          <p className="text-gray-300 text-sm">{service.description}</p>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h5 className="text-green-400 font-medium mb-2">Caractéristiques Halal</h5>
                            <div className="space-y-1">
                              {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                                  <span className="text-gray-300 text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex justify-between items-center pt-3 border-t border-white/10">
                            <Badge className="bg-purple-500 text-white">
                              {service.target}
                            </Badge>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                              Découvrir
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Audits & Certifications */}
          <TabsContent value="audits" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">
                Certifications & Audits Internationaux
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Conformité aux plus hauts standards internationaux de finance islamique, 
                audits réguliers par organismes indépendants, transparence totale
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white/5 border-white/10 h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <CardTitle className="text-white">{cert.name}</CardTitle>
                        <Badge className={
                          cert.status === 'Active' ? 'bg-green-500 text-white' :
                          cert.status === 'Pending' ? 'bg-amber-500 text-white' :
                          'bg-blue-500 text-white'
                        }>
                          {cert.status}
                        </Badge>
                      </div>
                      <p className="text-gray-400 text-sm">{cert.organization}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-blue-400 font-medium mb-2">Portée</h4>
                        <p className="text-blue-300 text-sm">{cert.scope}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-gray-400">Validité</div>
                          <div className="text-white font-bold">{cert.validity}</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Niveau</div>
                          <div className="text-white font-bold">{cert.level}</div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/10">
                        <Badge className="bg-amber-500 text-white w-full justify-center">
                          <Award className="mr-1 h-3 w-3" />
                          Certification Internationale
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Structure Audit Interne & Externe OBLIGATOIRE AAOIFI */}
            <Card className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-red-400">
                  Audit Interne & Externe OBLIGATOIRE (Norme AAOIFI)
                </CardTitle>
                <p className="text-center text-gray-300">
                  Conformité INDISPENSABLE pour licences internationales Suisse, EAU, Arabie Saoudite
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  {/* Audit Interne */}
                  <div className="space-y-4">
                    <h4 className="text-red-400 font-bold text-xl flex items-center gap-2">
                      <Eye className="h-6 w-6" />
                      Audit Interne CED (OBLIGATOIRE)
                    </h4>
                    <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
                      <h5 className="text-red-300 font-bold mb-3">Structure Audit Interne Indépendante</h5>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-red-400" />
                          <span className="text-white text-sm font-medium">Cellule audit SÉPARÉE direction opérationnelle</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Reporting direct Sharia Board + Conseil Administration</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Chef Audit Interne certifié AAOIFI (CISA/CIA requis)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Équipe 3+ auditeurs spécialisés finance islamique</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Budget dédié minimum 0.5% chiffre affaires</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/30">
                      <h5 className="text-orange-300 font-bold mb-3">Missions Audit Interne OBLIGATOIRES</h5>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Vérification application décisions Sharia Board</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Contrôle conformité toutes transactions CED Bank</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Audit placements fonds Al-Aman CED Takaful</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Validation API Banking conformité Charia</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Test efficacité contrôles internes</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Rapport trimestriel détaillé OBLIGATOIRE</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Audit Externe */}
                  <div className="space-y-4">
                    <h4 className="text-blue-400 font-bold text-xl flex items-center gap-2">
                      <Award className="h-6 w-6" />
                      Audit Externe Indépendant (OBLIGATOIRE)
                    </h4>
                    <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
                      <h5 className="text-blue-300 font-bold mb-3">Cabinet Audit Externe Certifié</h5>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-blue-400" />
                          <span className="text-white text-sm font-medium">Cabinet INDÉPENDANT certifié AAOIFI obligatoire</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">PwC Islamic Finance / Deloitte Sharia Advisory</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Ernst & Young Islamic Finance / KPMG Halal</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Dar Al Sharia / Amanie Advisors (spécialisés)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Audit ANNUEL minimum (OBLIGATOIRE label)</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
                      <h5 className="text-purple-300 font-bold mb-3">Portée Audit Externe OBLIGATOIRE</h5>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Conformité TOTALE standards AAOIFI/IFSB</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Validation gouvernance Sharia Board</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Audit systèmes compliance automatisés</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Test stress conformité sous charge</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Certification produits individuels</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-purple-400" />
                          <span className="text-white text-sm font-medium">Rapport PUBLIC OBLIGATOIRE (transparence)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Planning audit pré-déploiement */}
                <div className="mt-6 p-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg border border-green-500/30">
                  <h4 className="text-center text-lg font-bold text-green-400 mb-4">
                    Planning Audit PRÉ-DÉPLOIEMENT (Conformité INDISPENSABLE)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-white/5 rounded">
                      <Calendar className="h-8 w-8 text-red-400 mx-auto mb-2" />
                      <h5 className="text-red-400 font-bold">Phase 1 - Immédiat</h5>
                      <p className="text-gray-300 text-sm">
                        Constitution Sharia Board<br/>
                        Nomination Compliance Officer<br/>
                        <span className="text-red-300 font-medium">Durée: 30 jours</span>
                      </p>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded">
                      <Calendar className="h-8 w-8 text-amber-400 mx-auto mb-2" />
                      <h5 className="text-amber-400 font-bold">Phase 2 - Validation</h5>
                      <p className="text-gray-300 text-sm">
                        Audit interne complet<br/>
                        Test tous produits CED<br/>
                        <span className="text-amber-300 font-medium">Durée: 45 jours</span>
                      </p>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded">
                      <Calendar className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                      <h5 className="text-blue-400 font-bold">Phase 3 - Certification</h5>
                      <p className="text-gray-300 text-sm">
                        Audit externe Big4<br/>
                        Certification AAOIFI<br/>
                        <span className="text-blue-300 font-medium">Durée: 60 jours</span>
                      </p>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded">
                      <Calendar className="h-8 w-8 text-green-400 mx-auto mb-2" />
                      <h5 className="text-green-400 font-bold">Phase 4 - Déploiement</h5>
                      <p className="text-gray-300 text-sm">
                        Licences internationales<br/>
                        Lancement commercial<br/>
                        <span className="text-green-300 font-medium">Conformité 100%</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Checklist Conformité Pré-Déploiement */}
            <Card className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border-emerald-500/30">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-emerald-400">
                  Checklist Conformité PRÉ-DÉPLOIEMENT OBLIGATOIRE
                </CardTitle>
                <p className="text-center text-gray-300">
                  Validation 100% TOUS éléments avant lancement commercial CED Bank & Al-Aman CED
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  {/* Gouvernance Sharia */}
                  <div className="space-y-4">
                    <h4 className="text-emerald-400 font-bold text-lg flex items-center gap-2">
                      <Scale className="h-5 w-5" />
                      Gouvernance Sharia OBLIGATOIRE
                    </h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-emerald-500/10 rounded border border-emerald-500/30">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="h-4 w-4 text-red-400" />
                          <span className="text-white font-medium">Constitution Sharia Board</span>
                        </div>
                        <div className="space-y-1 ml-6">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="text-white text-sm">5 experts internationaux indépendants</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="text-white text-sm">Certifications AAOIFI/IFSB validées</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="text-white text-sm">Contrats indépendance signés</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="text-white text-sm">Charte gouvernance adoptée</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-blue-500/10 rounded border border-blue-500/30">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="h-4 w-4 text-red-400" />
                          <span className="text-white font-medium">Sharia Compliance Officer</span>
                        </div>
                        <div className="space-y-1 ml-6">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="text-white text-sm">Nomination officielle effectuée</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="text-white text-sm">Certification AAOIFI CSAA obtenue</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="text-white text-sm">Reporting indépendant configuré</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="text-white text-sm">Systèmes monitoring installés</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Produits & Services */}
                  <div className="space-y-4">
                    <h4 className="text-blue-400 font-bold text-lg flex items-center gap-2">
                      <Building className="h-5 w-5" />
                      Validation Produits OBLIGATOIRE
                    </h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-500/10 rounded border border-green-500/30">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="h-4 w-4 text-red-400" />
                          <span className="text-white font-medium">Services CED Bank</span>
                        </div>
                        <div className="space-y-1 ml-6">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="text-white text-sm">Compte courant 0% validé Sharia Board</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="text-white text-sm">Cartes débit/prépayées certifiées</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="text-white text-sm">Qard Hassan & Mourabaha approuvés</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="text-white text-sm">API Banking conformité validée</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-purple-500/10 rounded border border-purple-500/30">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="h-4 w-4 text-red-400" />
                          <span className="text-white font-medium">Al-Aman CED Takaful</span>
                        </div>
                        <div className="space-y-1 ml-6">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="text-white text-sm">Structure Takaful validée Sharia Board</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="text-white text-sm">Fonds Tabarru & Wakala approuvés</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="text-white text-sm">Distribution surplus certifiée</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="text-white text-sm">Placements halal uniquement</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Audits & Certifications Finales */}
                <div className="mt-6 p-4 bg-gradient-to-r from-red-900/20 to-pink-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-center text-lg font-bold text-red-400 mb-4">
                    Audits & Certifications FINALES (Blocant déploiement)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <h5 className="text-red-400 font-bold flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        Audit Interne Complet
                      </h5>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">100% transactions testées</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Conformité systèmes validée</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Rapport Sharia Board publié</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-amber-400 font-bold flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        Audit Externe Big4
                      </h5>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Cabinet indépendant sélectionné</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Audit complet effectué</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Certificat conformité délivré</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-green-400 font-bold flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        Licences Internationales
                      </h5>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Licence bancaire Suisse FINMA</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Autorisation EAU CBUAE</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-white text-sm">Certification Arabie SAMA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status déploiement */}
                <div className="mt-6 text-center p-6 bg-gradient-to-r from-emerald-900/30 to-green-900/30 rounded-lg border border-emerald-500/30">
                  <h4 className="text-2xl font-bold text-emerald-400 mb-4">
                    STATUS CONFORMITÉ PRÉ-DÉPLOIEMENT
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="p-3 bg-red-500/20 rounded">
                      <div className="text-red-400 font-bold">Phase 1</div>
                      <div className="text-red-300 text-sm">Gouvernance: EN COURS</div>
                    </div>
                    <div className="p-3 bg-amber-500/20 rounded">
                      <div className="text-amber-400 font-bold">Phase 2</div>
                      <div className="text-amber-300 text-sm">Validation: PENDING</div>
                    </div>
                    <div className="p-3 bg-blue-500/20 rounded">
                      <div className="text-blue-400 font-bold">Phase 3</div>
                      <div className="text-blue-300 text-sm">Audit: PENDING</div>
                    </div>
                    <div className="p-3 bg-gray-500/20 rounded">
                      <div className="text-gray-400 font-bold">Phase 4</div>
                      <div className="text-gray-300 text-sm">Déploiement: BLOQUÉ</div>
                    </div>
                  </div>
                  <div className="p-4 bg-red-500/10 rounded border border-red-500/30">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-red-400" />
                      <span className="text-red-400 font-bold">CONFORMITÉ REQUISE AVANT DÉPLOIEMENT</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Tous éléments de gouvernance islamique OBLIGATOIRES doivent être validés 
                      avant tout lancement commercial CED Bank & Al-Aman CED
                    </p>
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