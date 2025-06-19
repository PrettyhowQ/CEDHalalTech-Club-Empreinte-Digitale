import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Building2, Users, Target, TrendingUp, Award, CheckCircle, Calendar, Briefcase } from 'lucide-react';

interface EnterpriseProgram {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  currency: string;
  category: 'Formation IA' | 'Transformation Digital' | 'Management' | 'Compliance';
  format: 'Sur site' | 'À distance' | 'Hybride';
  maxParticipants: number;
  modules: string[];
  objectives: string[];
  benefits: string[];
  certifications: string[];
  targetAudience: string[];
}

interface CorporateClient {
  id: string;
  name: string;
  industry: string;
  employees: number;
  logo: string;
  programs: string[];
  satisfaction: number;
  results: {
    efficiency: number;
    innovation: number;
    compliance: number;
  };
  testimonial: string;
  contact: string;
}

interface EnterpriseService {
  id: string;
  name: string;
  description: string;
  price: string;
  deliverables: string[];
  timeline: string;
  expertise: string[];
}

const enterprisePrograms: EnterpriseProgram[] = [
  {
    id: 'transformation-ia-entreprise',
    name: 'Transformation IA pour Entreprises',
    description: 'Programme complet d\'intégration de l\'IA dans vos processus métier',
    duration: '3-6 mois',
    price: 15000,
    currency: 'EUR',
    category: 'Formation IA',
    format: 'Hybride',
    maxParticipants: 50,
    modules: [
      'Audit IA de l\'entreprise',
      'Stratégie d\'implémentation IA',
      'Formation équipes techniques',
      'Éthique et gouvernance IA',
      'ROI et mesure d\'impact',
      'Change management IA'
    ],
    objectives: [
      'Intégrer l\'IA dans 80% des processus',
      'Former 100% des équipes clés',
      'Améliorer l\'efficacité de 40%',
      'Assurer la conformité éthique',
      'Créer une culture IA'
    ],
    benefits: [
      'Gain productivité +40%',
      'Réduction coûts -25%',
      'Innovation accélérée +60%',
      'Satisfaction clients +35%',
      'Conformité garantie 100%'
    ],
    certifications: [
      'Certification Enterprise IA Leader',
      'Badge Transformation Digitale',
      'Attestation Éthique IA'
    ],
    targetAudience: [
      'Dirigeants et C-Suite',
      'Directeurs IT et Digital',
      'Managers opérationnels',
      'Équipes techniques',
      'Responsables conformité'
    ]
  },
  {
    id: 'leadership-ia-ethique',
    name: 'Leadership IA Éthique',
    description: 'Former vos dirigeants aux enjeux éthiques de l\'IA',
    duration: '8 semaines',
    price: 8500,
    currency: 'EUR',
    category: 'Management',
    format: 'Sur site',
    maxParticipants: 25,
    modules: [
      'Enjeux éthiques de l\'IA',
      'Frameworks de gouvernance',
      'Prise de décision éthique',
      'Communication stakeholders',
      'Gestion des risques IA',
      'Vision stratégique responsable'
    ],
    objectives: [
      'Développer une vision éthique',
      'Implémenter la gouvernance IA',
      'Prendre des décisions responsables',
      'Communiquer efficacement',
      'Gérer les risques'
    ],
    benefits: [
      'Confiance stakeholders +50%',
      'Réputation renforcée',
      'Conformité réglementaire',
      'Avantage concurrentiel',
      'Culture éthique établie'
    ],
    certifications: [
      'Certification Leader IA Éthique',
      'Badge Gouvernance Responsable'
    ],
    targetAudience: [
      'PDG et Direction Générale',
      'Comité Exécutif',
      'Directeurs métiers',
      'Board members',
      'Responsables RSE'
    ]
  },
  {
    id: 'equipes-techniques-ia',
    name: 'Formation Équipes Techniques IA',
    description: 'Montée en compétences techniques sur l\'IA responsable',
    duration: '12 semaines',
    price: 12000,
    currency: 'EUR',
    category: 'Formation IA',
    format: 'À distance',
    maxParticipants: 30,
    modules: [
      'Machine Learning éthique',
      'Développement IA responsable',
      'Biais et fairness algorithmes',
      'Explicabilité et transparence',
      'Tests et validation IA',
      'Déploiement sécurisé'
    ],
    objectives: [
      'Maîtriser le ML éthique',
      'Développer des IA responsables',
      'Détecter et corriger les biais',
      'Assurer la transparence',
      'Valider rigoureusement'
    ],
    benefits: [
      'Qualité IA améliorée +45%',
      'Biais réduits -70%',
      'Time-to-market -30%',
      'Conformité technique 100%',
      'Innovation responsable'
    ],
    certifications: [
      'Certification Développeur IA Éthique',
      'Badge ML Responsable',
      'Attestation Sécurité IA'
    ],
    targetAudience: [
      'Data Scientists',
      'Développeurs IA/ML',
      'Ingénieurs logiciel',
      'Architectes techniques',
      'DevOps et MLOps'
    ]
  },
  {
    id: 'compliance-rgpd-ia',
    name: 'Compliance RGPD & IA',
    description: 'Assurer la conformité réglementaire de vos solutions IA',
    duration: '6 semaines',
    price: 7500,
    currency: 'EUR',
    category: 'Compliance',
    format: 'Hybride',
    maxParticipants: 20,
    modules: [
      'RGPD et intelligence artificielle',
      'IA Act européen',
      'Audit conformité IA',
      'Documentation légale',
      'Processus de validation',
      'Gestion des incidents'
    ],
    objectives: [
      'Maîtriser le cadre légal',
      'Auditer la conformité',
      'Documenter correctement',
      'Valider la conformité',
      'Gérer les risques légaux'
    ],
    benefits: [
      'Conformité garantie 100%',
      'Risques légaux éliminés',
      'Audits réussis',
      'Documentation complète',
      'Confiance réglementaire'
    ],
    certifications: [
      'Certification Compliance IA',
      'Badge RGPD Expert',
      'Attestation Audit IA'
    ],
    targetAudience: [
      'Responsables conformité',
      'Juristes IT',
      'DPO et privacy officers',
      'Risk managers',
      'Auditeurs internes'
    ]
  }
];

const corporateClients: CorporateClient[] = [
  {
    id: 'airbus',
    name: 'Airbus Defense & Space',
    industry: 'Aéronautique & Défense',
    employees: 35000,
    logo: '✈️',
    programs: ['Transformation IA', 'Leadership Éthique'],
    satisfaction: 96,
    results: {
      efficiency: 42,
      innovation: 65,
      compliance: 100
    },
    testimonial: 'Club Empreinte Digitale nous a accompagnés dans notre transformation IA avec une approche éthique exemplaire. Résultats exceptionnels.',
    contact: 'Marie Dubois, Chief Digital Officer'
  },
  {
    id: 'schneider',
    name: 'Schneider Electric',
    industry: 'Énergie & Automation',
    employees: 128000,
    logo: '⚡',
    programs: ['Équipes Techniques', 'Compliance RGPD'],
    satisfaction: 94,
    results: {
      efficiency: 38,
      innovation: 52,
      compliance: 100
    },
    testimonial: 'Formation exceptionnelle de nos équipes techniques. L\'approche éthique de l\'IA est maintenant au cœur de nos développements.',
    contact: 'Ahmed Ben Ali, Head of AI Innovation'
  },
  {
    id: 'sanofi',
    name: 'Sanofi Pharmaceuticals',
    industry: 'Pharmaceutique',
    employees: 99000,
    logo: '💊',
    programs: ['Leadership Éthique', 'Compliance RGPD'],
    satisfaction: 98,
    results: {
      efficiency: 35,
      innovation: 58,
      compliance: 100
    },
    testimonial: 'L\'expertise en IA éthique de Club Empreinte Digitale est unique. Ils comprennent parfaitement nos enjeux pharmaceutiques.',
    contact: 'Dr. Sarah Martin, VP Digital Health'
  },
  {
    id: 'bnp',
    name: 'BNP Paribas',
    industry: 'Services Financiers',
    employees: 190000,
    logo: '🏦',
    programs: ['Transformation IA', 'Compliance RGPD'],
    satisfaction: 95,
    results: {
      efficiency: 45,
      innovation: 48,
      compliance: 100
    },
    testimonial: 'Partenaire stratégique pour notre transformation IA. Leur approche éthique nous donne un avantage concurrentiel majeur.',
    contact: 'François Dupont, Chief Innovation Officer'
  }
];

const enterpriseServices: EnterpriseService[] = [
  {
    id: 'audit-ia-entreprise',
    name: 'Audit IA & Éthique',
    description: 'Évaluation complète de vos solutions IA et recommandations',
    price: 'À partir de 15 000€',
    deliverables: [
      'Rapport d\'audit complet',
      'Matrice de risques',
      'Plan d\'action prioritaire',
      'Recommandations techniques',
      'Roadmap de mise en conformité'
    ],
    timeline: '4-8 semaines',
    expertise: ['Audit technique', 'Éthique IA', 'Conformité RGPD', 'Risk assessment']
  },
  {
    id: 'consulting-strategique',
    name: 'Consulting Stratégique IA',
    description: 'Accompagnement stratégique pour votre transformation IA',
    price: 'À partir de 25 000€',
    deliverables: [
      'Stratégie IA sur mesure',
      'Business case détaillé',
      'Feuille de route 3 ans',
      'Gouvernance IA',
      'Change management plan'
    ],
    timeline: '8-12 semaines',
    expertise: ['Stratégie digitale', 'Transformation', 'Gouvernance', 'Change management']
  },
  {
    id: 'implementation-ia',
    name: 'Implémentation IA Clés en Main',
    description: 'Développement et déploiement de solutions IA éthiques',
    price: 'À partir de 50 000€',
    deliverables: [
      'Solution IA développée',
      'Documentation technique',
      'Formation équipes',
      'Support post-déploiement',
      'Monitoring et maintenance'
    ],
    timeline: '12-24 semaines',
    expertise: ['Développement IA', 'MLOps', 'Architecture cloud', 'Support technique']
  }
];

export function EntreprisesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');

  const categories = ['all', 'Formation IA', 'Transformation Digital', 'Management', 'Compliance'];
  const formats = ['all', 'Sur site', 'À distance', 'Hybride'];
  
  const filteredPrograms = enterprisePrograms.filter(program => {
    const categoryMatch = selectedCategory === 'all' || program.category === selectedCategory;
    const formatMatch = selectedFormat === 'all' || program.format === selectedFormat;
    return categoryMatch && formatMatch;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Formation IA': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Transformation Digital': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Management': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Compliance': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getFormatColor = (format: string) => {
    switch (format) {
      case 'Sur site': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'À distance': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Hybride': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="entreprises" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-slate-500 to-blue-600 p-4 rounded-full">
              <Building2 className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
            Solutions Entreprises
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Accompagnement sur mesure pour la transformation IA éthique de votre organisation
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Building2 className="h-5 w-5 text-slate-500" />
              <span className="font-semibold">50+ entreprises clientes</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Users className="h-5 w-5 text-blue-500" />
              <span className="font-semibold">2,500+ professionnels formés</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span className="font-semibold">ROI moyen +340%</span>
            </div>
          </div>
        </motion.div>

        <Tabs defaultValue="programmes" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="programmes" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Programmes
            </TabsTrigger>
            <TabsTrigger value="clients" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Nos Clients
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Services
            </TabsTrigger>
            <TabsTrigger value="planning" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Planning
            </TabsTrigger>
          </TabsList>

          <TabsContent value="programmes" className="space-y-8">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <div className="mb-4">
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      onClick={() => setSelectedCategory(category)}
                      size="sm"
                    >
                      {category === 'all' ? 'Toutes catégories' : category}
                    </Button>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {formats.map((format) => (
                    <Button
                      key={format}
                      variant={selectedFormat === format ? 'secondary' : 'outline'}
                      onClick={() => setSelectedFormat(format)}
                      size="sm"
                    >
                      {format === 'all' ? 'Tous formats' : format}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex gap-2">
                          <Badge className={getCategoryColor(program.category)}>
                            {program.category}
                          </Badge>
                          <Badge className={getFormatColor(program.format)}>
                            {program.format}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-slate-600">
                            {program.price.toLocaleString()}€
                          </div>
                          <div className="text-sm text-gray-500">{program.duration}</div>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{program.name}</CardTitle>
                      <CardDescription className="text-base">
                        {program.description}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span>Max {program.maxParticipants} participants</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="h-4 w-4 text-yellow-500" />
                          <span>{program.certifications.length} certifications</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Modules inclus :</h4>
                        <ul className="space-y-1">
                          {program.modules.slice(0, 4).map((module, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                              <span>{module}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Bénéfices clés :</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {program.benefits.slice(0, 4).map((benefit, idx) => (
                            <div key={idx} className="text-sm bg-green-50 text-green-700 p-2 rounded">
                              📈 {benefit}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Public cible :</h4>
                        <div className="flex flex-wrap gap-1">
                          {program.targetAudience.slice(0, 3).map((audience, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {audience}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t flex justify-between items-center">
                        <div className="text-sm">
                          <span className="font-semibold">Format :</span> {program.format}
                        </div>
                        <Button className="bg-slate-600 hover:bg-slate-700">
                          Demander un devis
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="clients" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {corporateClients.map((client, index) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-4xl">{client.logo}</div>
                        <div>
                          <CardTitle className="text-xl">{client.name}</CardTitle>
                          <CardDescription>
                            {client.industry} • {client.employees.toLocaleString()} employés
                          </CardDescription>
                        </div>
                        <div className="ml-auto text-right">
                          <div className="text-2xl font-bold text-green-600">{client.satisfaction}%</div>
                          <div className="text-sm text-gray-500">Satisfaction</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Programmes suivis :</h4>
                        <div className="flex flex-wrap gap-2">
                          {client.programs.map((program, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {program}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-sm">Résultats obtenus :</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Efficacité</span>
                            <div className="flex items-center gap-2">
                              <Progress value={client.results.efficiency} className="w-20" />
                              <span className="text-sm font-semibold">+{client.results.efficiency}%</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Innovation</span>
                            <div className="flex items-center gap-2">
                              <Progress value={client.results.innovation} className="w-20" />
                              <span className="text-sm font-semibold">+{client.results.innovation}%</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Conformité</span>
                            <div className="flex items-center gap-2">
                              <Progress value={client.results.compliance} className="w-20" />
                              <span className="text-sm font-semibold">{client.results.compliance}%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-2">
                          "{client.testimonial}"
                        </p>
                        <p className="text-xs text-gray-500">— {client.contact}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
              {enterpriseServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {service.price}
                      </div>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Livrables :</h4>
                        <ul className="space-y-1">
                          {service.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Expertise :</h4>
                        <div className="flex flex-wrap gap-1">
                          {service.expertise.map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center">
                          <div className="text-sm">
                            <span className="font-semibold">Timeline :</span> {service.timeline}
                          </div>
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            Consulter
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="planning" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Planning Entreprises - Q3 2025</CardTitle>
                <CardDescription>
                  Sessions de formation et programmes en cours pour nos clients entreprises
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="border-l-4 border-l-blue-500">
                      <CardContent className="p-4">
                        <h5 className="font-semibold mb-2">Airbus - Transformation IA</h5>
                        <div className="space-y-1 text-sm">
                          <div>📅 Juillet - Septembre 2025</div>
                          <div>👥 45 participants</div>
                          <div>📍 Toulouse + Remote</div>
                          <div className="text-blue-600 font-semibold">En cours - Semaine 8/12</div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-green-500">
                      <CardContent className="p-4">
                        <h5 className="font-semibold mb-2">Schneider - Équipes Techniques</h5>
                        <div className="space-y-1 text-sm">
                          <div>📅 Août - Octobre 2025</div>
                          <div>👥 28 participants</div>
                          <div>📍 100% Remote</div>
                          <div className="text-green-600 font-semibold">Démarrage imminent</div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-purple-500">
                      <CardContent className="p-4">
                        <h5 className="font-semibold mb-2">Sanofi - Leadership Éthique</h5>
                        <div className="space-y-1 text-sm">
                          <div>📅 Septembre - Novembre 2025</div>
                          <div>👥 20 participants</div>
                          <div>📍 Paris</div>
                          <div className="text-purple-600 font-semibold">Planifié</div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-red-500">
                      <CardContent className="p-4">
                        <h5 className="font-semibold mb-2">BNP Paribas - Compliance</h5>
                        <div className="space-y-1 text-sm">
                          <div>📅 Octobre - Novembre 2025</div>
                          <div>👥 15 participants</div>
                          <div>📍 Hybride</div>
                          <div className="text-red-600 font-semibold">En négociation</div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-yellow-500">
                      <CardContent className="p-4">
                        <h5 className="font-semibold mb-2">Total Energies - Audit IA</h5>
                        <div className="space-y-1 text-sm">
                          <div>📅 Août - Septembre 2025</div>
                          <div>👥 Service consulting</div>
                          <div>📍 La Défense</div>
                          <div className="text-yellow-600 font-semibold">Audit en cours</div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-indigo-500">
                      <CardContent className="p-4">
                        <h5 className="font-semibold mb-2">L'Oréal - Innovation IA</h5>
                        <div className="space-y-1 text-sm">
                          <div>📅 Novembre 2025 - Janvier 2026</div>
                          <div>👥 35 participants</div>
                          <div>📍 Clichy</div>
                          <div className="text-indigo-600 font-semibold">Proposition envoyée</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-slate-500 to-blue-600 text-white p-8">
            <h3 className="text-2xl font-bold mb-4">
              Transformez votre organisation avec l'IA éthique
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Accompagnement sur mesure, expertise reconnue, résultats mesurables
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary">
                Demander une étude
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                Planifier un rendez-vous
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}