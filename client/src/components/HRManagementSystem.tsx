import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from 'framer-motion';
import { 
  Users, 
  FileText, 
  Scale, 
  Euro, 
  Calendar,
  Clock,
  Shield,
  BookOpen,
  Download,
  Eye,
  Building2,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  AlertTriangle,
  CheckCircle,
  Settings,
  MessageSquare,
  Bot
} from 'lucide-react';

interface Employee {
  id: string;
  name: string;
  role: string;
  salary: number;
  currency: string;
  location: string;
  email: string;
  phone: string;
  startDate: Date;
  trialPeriod: number; // en mois
  contractType: 'CDI' | 'CDD' | 'Freelance' | 'Stage';
  responsibilities: string[];
  skills: string[];
  certifications: string[];
  status: 'active' | 'trial' | 'terminated';
  manager: string;
}

interface LaborLaw {
  id: string;
  title: string;
  category: 'contract' | 'salary' | 'time' | 'rights' | 'obligations' | 'termination';
  country: 'CH' | 'EU' | 'FR' | 'UAE';
  content: string;
  lastUpdated: Date;
  applicability: string[];
  source: string;
}

const employees: Employee[] = [
  {
    id: 'emp-001',
    name: 'Brahim Yakoubi',
    role: 'Directeur TechForAll & Boutique Solidaire',
    salary: 6200,
    currency: 'CHF',
    location: 'Costa del Sol, Espagne',
    email: 'brahim@club-empreinte-digitale.com',
    phone: '+34 XXX XXX XXX',
    startDate: new Date('2024-06-01'),
    trialPeriod: 3,
    contractType: 'CDI',
    responsibilities: [
      'Gestion complète association TechForAll',
      'Direction boutique solidaire Costa del Sol',
      'Collecte et redistribution matériel technologique',
      'Coordination donations construction écologique',
      'Gestion équipe locale Espagne',
      'Supervision secrétaire Kadjouf Hanane'
    ],
    skills: [
      'Gestion associative', 'Logistique donations', 'Management équipe', 
      'Développement durable', 'Relations donateurs', 'Économie solidaire'
    ],
    certifications: ['Management Associations', 'Développement Durable'],
    status: 'active',
    manager: 'Yakoubi Yamina'
  },
  {
    id: 'emp-002',
    name: 'Souheila Yakoubi Ozel',
    role: 'Fille & Héritière Désignée (Santé)',
    salary: 7200,
    currency: 'CHF',
    location: 'Zurich, Suisse',
    email: 'souheila@club-empreinte-digitale.com',
    phone: '+41 44 XXX XXXX',
    startDate: new Date('2024-05-15'),
    trialPeriod: 0, // Pas de période d'essai pour héritière
    contractType: 'CDI',
    responsibilities: [
      'Direction secteur SANTÉ écosystème CED',
      'Développement produits santé et bien-être',
      'Partenariats secteur médical et nutrition',
      'Formation succession direction générale',
      'Préparation transmission futures générations',
      'Co-décisionnaire orientations stratégiques'
    ],
    skills: [
      'Management santé', 'Nutrition', 'Bien-être', 'Leadership', 
      'Vision stratégique', 'Succession familiale', 'Innovation santé'
    ],
    certifications: ['Leadership Familial', 'Management Santé'],
    status: 'active',
    manager: 'Yakoubi Yamina (Mère)'
  },
  {
    id: 'emp-003',
    name: 'Abdelkarim',
    role: 'Développeur Senior Backend',
    salary: 7800,
    currency: 'CHF',
    location: 'Bâle, Suisse',
    email: 'abdelkarim@club-empreinte-digitale.com',
    phone: '+41 61 XXX XXXX',
    startDate: new Date('2024-07-01'),
    trialPeriod: 3,
    contractType: 'CDI',
    responsibilities: [
      'Développement APIs bancaires',
      'Intégration systèmes de paiement',
      'Sécurité applications backend',
      'Optimisation performance bases de données',
      'Mentor développeurs junior',
      'Tests automatisés et CI/CD'
    ],
    skills: [
      'Node.js', 'Python', 'PostgreSQL', 'Redis', 'Kubernetes',
      'API REST/GraphQL', 'Stripe', 'Banking APIs', 'Sécurité'
    ],
    certifications: ['Stripe Developer', 'PostgreSQL Professional'],
    status: 'active',
    manager: 'Brahim Yakoubi'
  },
  {
    id: 'emp-004',
    name: 'Aziz',
    role: 'Expert UI/UX & Frontend',
    salary: 6500,
    currency: 'CHF',
    location: 'Lausanne, Suisse',
    email: 'aziz@club-empreinte-digitale.com',
    phone: '+41 21 XXX XXXX',
    startDate: new Date('2024-07-15'),
    trialPeriod: 3,
    contractType: 'CDI',
    responsibilities: [
      'Design interfaces utilisateur',
      'Expérience client multilingue',
      'Développement frontend React',
      'Tests utilisabilité et A/B testing',
      'Design système et composants',
      'Optimisation mobile et PWA'
    ],
    skills: [
      'Figma', 'Adobe Creative Suite', 'React', 'Tailwind CSS',
      'UX Research', 'Prototypage', 'Animation', 'Accessibilité'
    ],
    certifications: ['Adobe Certified Expert', 'Google UX Design'],
    status: 'active',
    manager: 'Brahim Yakoubi'
  },
  {
    id: 'emp-005',
    name: 'Kadjouf Hanane',
    role: 'Secrétaire de Brahim Yakoubi',
    salary: 5500,
    currency: 'CHF',
    location: 'Costa del Sol, Espagne',
    email: 'hanane@club-empreinte-digitale.com',
    phone: '+34 XXX XXX XXX',
    startDate: new Date('2024-08-01'),
    trialPeriod: 3,
    contractType: 'CDI',
    responsibilities: [
      'Secrétariat personnel de Brahim Yakoubi',
      'Gestion administrative TechForAll',
      'Coordination boutique solidaire Costa del Sol',
      'Organisation agenda et déplacements',
      'Gestion correspondance et communications',
      'Suivi dossiers donations et collectes'
    ],
    skills: [
      'Secrétariat', 'Organisation', 'Communication', 'Gestion administrative',
      'Relations donateurs', 'Logistique', 'Support opérationnel'
    ],
    certifications: ['Secrétariat Professionnel', 'Gestion Administrative'],
    status: 'trial',
    manager: 'Brahim Yakoubi'
  },
  {
    id: 'emp-006',
    name: 'Hanaé Ozel',
    role: 'Fille & Héritière Désignée (Juridique & Paie)',
    salary: 7200,
    currency: 'CHF',
    location: 'Genève, Suisse',
    email: 'hanae@club-empreinte-digitale.com',
    phone: '+41 22 XXX XXXX',
    startDate: new Date('2024-05-15'),
    trialPeriod: 0, // Pas de période d'essai pour héritière
    contractType: 'CDI',
    responsibilities: [
      'Direction secteur JURIDIQUE écosystème CED',
      'Gestion complète fiches de paie équipe',
      'Application Code du travail suisse',
      'Conformité réglementaire et légale',
      'Formation succession direction générale',
      'Préparation transmission futures générations'
    ],
    skills: [
      'Droit du travail', 'Gestion paie', 'Conformité légale', 'Leadership',
      'Vision stratégique', 'Succession familiale', 'Réglementation'
    ],
    certifications: ['Droit du Travail Suisse', 'Leadership Familial'],
    status: 'active',
    manager: 'Yakoubi Yamina (Mère)'
  },
  {
    id: 'emp-007',
    name: 'Yakoubi Karim',
    role: 'Directeur Logistique Européenne',
    salary: 6800,
    currency: 'CHF',
    location: 'Paris, France',
    email: 'karim@club-empreinte-digitale.com',
    phone: '+33 1 XX XX XX XX',
    startDate: new Date('2024-09-01'),
    trialPeriod: 3,
    contractType: 'CDI',
    responsibilities: [
      'Coordination logistique Europe entière',
      'Gestion supply chain TechForAll Europe',
      'Partenariats distributeurs européens',
      'Optimisation flux logistiques',
      'Supervision équipes logistique régionales',
      'Reporting hebdomadaire Yakoubi Yamina'
    ],
    skills: [
      'Logistique internationale', 'Supply Chain', 'Management équipes',
      'Optimisation transport', 'Négociation partenaires', 'Analytics logistique'
    ],
    certifications: ['Supply Chain Management', 'Logistique Internationale'],
    status: 'active',
    manager: 'Yakoubi Yamina'
  },
  {
    id: 'emp-008',
    name: 'Yakoubi Aziz',
    role: 'Directeur Logistique Suisse',
    salary: 6500,
    currency: 'CHF',
    location: 'Berne, Suisse',
    email: 'aziz.logistique@club-empreinte-digitale.com',
    phone: '+41 31 XXX XXXX',
    startDate: new Date('2024-09-01'),
    trialPeriod: 3,
    contractType: 'CDI',
    responsibilities: [
      'Coordination logistique Suisse complète',
      'Gestion entrepôts et distributions',
      'Optimisation circuits livraison Suisse',
      'Supervision équipes locales',
      'Interface avec Yakoubi Karim (Europe)',
      'Standards qualité logistique'
    ],
    skills: [
      'Logistique locale', 'Gestion entrepôts', 'Optimisation routes',
      'Management opérationnel', 'Qualité service', 'Coordination équipes'
    ],
    certifications: ['Logistique Suisse', 'Management Opérationnel'],
    status: 'active',
    manager: 'Yakoubi Yamina'
  }
];

const swissLaborLaws: LaborLaw[] = [
  {
    id: 'ch-contract-001',
    title: 'Code des obligations - Contrat de travail (Art. 319-362)',
    category: 'contract',
    country: 'CH',
    content: `Le contrat de travail est régi par les articles 319 à 362 du Code des obligations suisse (CO).

**Définition (Art. 319 CO):**
Par le contrat de travail, le travailleur s'engage, pour une durée déterminée ou indéterminée, à travailler au service de l'employeur et celui-ci à lui verser un salaire.

**Formation du contrat (Art. 320 CO):**
- Le contrat peut être conclu par écrit ou oralement
- Recommandation forte d'un contrat écrit pour éviter les litiges
- Mention obligatoire de la durée du temps d'essai (max. 3 mois)

**Période d'essai (Art. 335b CO):**
- Maximum 3 mois pour tous les employés
- Possibilité de résiliation immédiate pendant cette période
- Délai de préavis réduit (7 jours)

**Obligations de l'employeur:**
- Verser le salaire convenu (Art. 322 CO)
- Protéger la santé du travailleur (Art. 328 CO)
- Respecter la personnalité du travailleur (Art. 328 CO)
- Fournir les outils de travail nécessaires

**Obligations du travailleur:**
- Exécuter son travail avec fidélité (Art. 321a CO)
- Respecter les instructions de l'employeur
- Garder le secret professionnel (Art. 321a al. 4 CO)
- Éviter la concurrence déloyale`,
    lastUpdated: new Date('2024-01-01'),
    applicability: ['Tous employés CED Bank', 'Contrats CDI', 'Contrats CDD'],
    source: 'Code des obligations suisse (RS 220)'
  },
  {
    id: 'ch-salary-001',
    title: 'Salaire et rémunération en Suisse',
    category: 'salary',
    country: 'CH',
    content: `**Principe général (Art. 322 CO):**
L'employeur doit verser le salaire convenu, et à défaut de convention, le salaire d'usage ou, à défaut d'un tel usage, le salaire équitable.

**Salaire minimum:**
- Pas de salaire minimum fédéral en Suisse
- Certains cantons ont instauré des salaires minimums
- Genève: CHF 23.27/heure (2024)
- Neuchâtel: CHF 20.00/heure (2024)

**13ème salaire:**
- Pas d'obligation légale mais usage fréquent
- Doit être mentionné dans le contrat si applicable
- Versement généralement en décembre

**Déductions autorisées:**
- Cotisations sociales obligatoires (AVS/AI/APG: 5.3%)
- Assurance chômage (AC: 1.1%)
- Prévoyance professionnelle (LPP)
- Assurance accidents

**Protection du salaire:**
- Paiement mensuel au plus tard
- Interdiction de retenues non autorisées
- Protection en cas de faillite de l'employeur`,
    lastUpdated: new Date('2024-01-01'),
    applicability: ['Tous salariés'],
    source: 'Code des obligations suisse, Loi fédérale sur les cotisations'
  },
  {
    id: 'ch-time-001',
    title: 'Temps de travail et vacances (Loi sur le travail)',
    category: 'time',
    country: 'CH',
    content: `**Durée maximale du travail (Art. 9 LTr):**
- 45 heures par semaine pour employés de bureau
- 50 heures par semaine pour autres secteurs
- Pause obligatoire de 15 min après 5h30 de travail

**Heures supplémentaires (Art. 12 LTr):**
- Compensation en temps libre prioritaire
- Majoration de 25% si paiement en espèces
- Maximum 2 heures par jour, sauf cas exceptionnels

**Vacances (Art. 329a CO):**
- Minimum 4 semaines par année civile
- 5 semaines pour employés de moins de 20 ans
- Droit acquis au prorata en cas d'année incomplète
- Report possible sur l'année suivante avec accord

**Jours fériés:**
- Variables selon le canton
- Genève: 11 jours fériés officiels
- Paiement obligatoire si jour férié tombe sur jour de travail

**Congés maladie:**
- Pas de durée légale minimale
- Usage: 3 semaines la 1ère année, puis progression
- Certificat médical dès le 3ème jour généralement

**Maternité/Paternité:**
- Congé maternité: 14 semaines (98 jours)
- Congé paternité: 2 semaines (10 jours)
- 80% du salaire plafonné à CHF 220/jour`,
    lastUpdated: new Date('2024-01-01'),
    applicability: ['Tous employés'],
    source: 'Loi sur le travail (RS 822.11), Code des obligations'
  },
  {
    id: 'ch-termination-001',
    title: 'Résiliation du contrat de travail',
    category: 'termination',
    country: 'CH',
    content: `**Résiliation ordinaire (Art. 335 CO):**

**Délais de préavis:**
- Période d'essai: 7 jours
- 1ère année de service: 1 mois pour la fin d'un mois
- 2ème à 9ème année: 2 mois pour la fin d'un mois
- Dès la 10ème année: 3 mois pour la fin d'un mois

**Résiliation extraordinaire (Art. 337 CO):**
- Justes motifs permettant résiliation immédiate
- Violation grave des obligations contractuelles
- Perte de confiance irrémédiable

**Protection contre licenciement abusif (Art. 336 CO):**
Licenciement abusif notamment pour:
- Opinions politiques, religieuses
- Appartenance syndicale
- Exercice d'une activité syndicale licite
- Réclamation de bonne foi

**Indemnités:**
- Licenciement abusif: max. 6 mois de salaire
- Résiliation en temps inopportun: dommages-intérêts
- Certificat de travail obligatoire et gratuit

**Procédure recommandée:**
1. Entretien préalable avec l'employé
2. Notification écrite avec motifs si demandé
3. Respect des délais de préavis
4. Remise du certificat de travail`,
    lastUpdated: new Date('2024-01-01'),
    applicability: ['Tous types de contrats'],
    source: 'Code des obligations suisse (Art. 335-339)'
  }
];

export function HRManagementSystem() {
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);
  const [activeTab, setActiveTab] = useState('team');
  const [selectedLaw, setSelectedLaw] = useState<LaborLaw | null>(null);

  const totalSalaryBudget = employees.reduce((sum, emp) => sum + emp.salary, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Système RH Club Empreinte Digitale
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-4xl mx-auto">
            Gestion complète des ressources humaines avec conformité au 
            <span className="font-bold text-blue-600"> Code du travail suisse</span> et 
            consultation IA en temps réel
          </p>
          
          <div className="flex justify-center gap-3 flex-wrap">
            <Badge className="bg-blue-500 text-white px-4 py-2 text-lg">
              🇨🇭 Droit Suisse
            </Badge>
            <Badge className="bg-purple-500 text-white px-4 py-2 text-lg">
              🤖 IA Juridique
            </Badge>
            <Badge className="bg-pink-500 text-white px-4 py-2 text-lg">
              📋 Contrats Automatisés
            </Badge>
          </div>
        </motion.div>

        {/* Statistiques */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">{employees.length}</div>
            <p className="text-gray-600 dark:text-gray-300">Employés Actifs</p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">CHF {totalSalaryBudget.toLocaleString()}</div>
            <p className="text-gray-600 dark:text-gray-300">Budget Salaires/Mois</p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">{employees.filter(e => e.status === 'trial').length}</div>
            <p className="text-gray-600 dark:text-gray-300">Période d'Essai</p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <p className="text-gray-600 dark:text-gray-300">Conformité Légale</p>
          </Card>
        </motion.div>

        {/* Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
            <TabsTrigger value="team">Équipe</TabsTrigger>
            <TabsTrigger value="contracts">Contrats</TabsTrigger>
            <TabsTrigger value="labor-law">Code du Travail</TabsTrigger>
            <TabsTrigger value="ai-consultant">IA Juridique</TabsTrigger>
          </TabsList>

          {/* Gestion Équipe */}
          <TabsContent value="team" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {employees.map((employee, index) => (
                  <motion.div
                    key={employee.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="cursor-pointer"
                    onClick={() => setSelectedEmployee(employee)}
                  >
                    <Card className={`transition-all duration-300 ${
                      selectedEmployee.id === employee.id ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                              {employee.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <h3 className="font-bold text-lg">{employee.name}</h3>
                              <p className="text-blue-600 font-semibold">{employee.role}</p>
                              <p className="text-gray-600 dark:text-gray-300 flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {employee.location}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-green-600">
                              {employee.currency} {employee.salary.toLocaleString()}/mois
                            </div>
                            <Badge 
                              className={
                                employee.status === 'active' ? 'bg-green-100 text-green-800' :
                                employee.status === 'trial' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }
                            >
                              {employee.status === 'active' ? 'Actif' :
                               employee.status === 'trial' ? 'Essai' : 'Terminé'}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-semibold">Type contrat:</span> {employee.contractType}
                          </div>
                          <div>
                            <span className="font-semibold">Période d'essai:</span> {employee.trialPeriod} mois
                          </div>
                          <div>
                            <span className="font-semibold">Manager:</span> {employee.manager}
                          </div>
                          <div>
                            <span className="font-semibold">Début:</span> {employee.startDate.toLocaleDateString('fr-FR')}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Détail employé sélectionné */}
              <div className="lg:col-span-1">
                <Card className="sticky top-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Profil Détaillé
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Contact</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-blue-500" />
                          <a href={`mailto:${selectedEmployee.email}`} className="text-blue-600">
                            {selectedEmployee.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-green-500" />
                          <span>{selectedEmployee.phone}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Responsabilités</h4>
                      <div className="space-y-1">
                        {selectedEmployee.responsibilities.map((resp, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Compétences</h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedEmployee.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Certifications</h4>
                      <div className="space-y-1">
                        {selectedEmployee.certifications.map((cert, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <Award className="h-3 w-3 text-yellow-500" />
                            <span>{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Générer Contrat
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Contrats de Travail */}
          <TabsContent value="contracts" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Contrats de Travail Automatisés</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Génération automatique de contrats conformes au droit suisse avec période d'essai
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {employees.map((employee) => (
                <Card key={employee.id} className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-bold">{employee.name}</h3>
                      <p className="text-sm text-gray-600">{employee.role}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Type contrat:</span>
                      <Badge variant="outline">{employee.contractType}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Période d'essai:</span>
                      <span className="font-semibold">{employee.trialPeriod} mois</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Salaire:</span>
                      <span className="font-bold text-green-600">
                        {employee.currency} {employee.salary.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Statut:</span>
                      <Badge className={
                        employee.status === 'active' ? 'bg-green-100 text-green-800' :
                        employee.status === 'trial' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }>
                        {employee.status === 'active' ? 'Actif' :
                         employee.status === 'trial' ? 'En essai' : 'Terminé'}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full" variant="outline">
                      <Eye className="mr-2 h-4 w-4" />
                      Voir Contrat
                    </Button>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Télécharger PDF
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Code du Travail */}
          <TabsContent value="labor-law" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Code du Travail Suisse</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Consultation complète des lois du travail applicables
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {swissLaborLaws.map((law, index) => (
                  <motion.div
                    key={law.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="cursor-pointer hover:shadow-lg transition-all duration-300"
                          onClick={() => setSelectedLaw(law)}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-full ${
                              law.category === 'contract' ? 'bg-blue-100 dark:bg-blue-900' :
                              law.category === 'salary' ? 'bg-green-100 dark:bg-green-900' :
                              law.category === 'time' ? 'bg-purple-100 dark:bg-purple-900' :
                              law.category === 'rights' ? 'bg-orange-100 dark:bg-orange-900' :
                              law.category === 'termination' ? 'bg-red-100 dark:bg-red-900' :
                              'bg-gray-100 dark:bg-gray-800'
                            }`}>
                              <Scale className={`h-6 w-6 ${
                                law.category === 'contract' ? 'text-blue-600' :
                                law.category === 'salary' ? 'text-green-600' :
                                law.category === 'time' ? 'text-purple-600' :
                                law.category === 'rights' ? 'text-orange-600' :
                                law.category === 'termination' ? 'text-red-600' :
                                'text-gray-600'
                              }`} />
                            </div>
                            <div>
                              <h3 className="font-bold text-lg mb-2">{law.title}</h3>
                              <div className="flex gap-2 mb-2">
                                <Badge className="bg-red-500 text-white">🇨🇭 {law.country}</Badge>
                                <Badge variant="outline">
                                  {law.category === 'contract' ? 'Contrats' :
                                   law.category === 'salary' ? 'Salaires' :
                                   law.category === 'time' ? 'Temps de travail' :
                                   law.category === 'rights' ? 'Droits' :
                                   law.category === 'termination' ? 'Résiliation' :
                                   'Obligations'}
                                </Badge>
                              </div>
                              <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {law.content.substring(0, 200)}...
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Détail de la loi sélectionnée */}
              <div className="lg:col-span-1">
                {selectedLaw && (
                  <Card className="sticky top-8">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Article de Loi
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-bold mb-2">{selectedLaw.title}</h4>
                        <div className="flex gap-2 mb-4">
                          <Badge className="bg-red-500 text-white">🇨🇭 {selectedLaw.country}</Badge>
                          <Badge variant="outline">{selectedLaw.category}</Badge>
                        </div>
                      </div>

                      <div className="max-h-96 overflow-y-auto">
                        <div className="whitespace-pre-wrap text-sm leading-relaxed">
                          {selectedLaw.content}
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-2">Applicable à:</h5>
                        <div className="space-y-1">
                          {selectedLaw.applicability.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <p className="text-xs text-gray-500">
                          <strong>Source:</strong> {selectedLaw.source}<br/>
                          <strong>Dernière MAJ:</strong> {selectedLaw.lastUpdated.toLocaleDateString('fr-FR')}
                        </p>
                      </div>

                      <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Télécharger PDF
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          {/* IA Consultant Juridique */}
          <TabsContent value="ai-consultant" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Assistant IA Juridique</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Consultation en temps réel sur le droit du travail suisse et européen
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-blue-600" />
                    Chat Juridique IA
                  </CardTitle>
                  <CardDescription>
                    Posez vos questions sur le droit du travail suisse
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-64 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 overflow-y-auto">
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-white dark:bg-gray-700 rounded-lg p-3 flex-1">
                          <p className="text-sm">
                            Bonjour ! Je suis votre assistant juridique spécialisé en droit du travail suisse. 
                            Comment puis-je vous aider aujourd'hui ?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Posez votre question juridique..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                    />
                    <Button>
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Questions Fréquentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Quelle est la durée maximale de la période d'essai ?",
                    "Comment calculer les délais de préavis ?",
                    "Quels sont les jours fériés obligatoires en Suisse ?",
                    "Comment gérer un licenciement pour justes motifs ?",
                    "Quelles sont les cotisations sociales obligatoires ?",
                    "Droits en cas de maladie pendant l'essai ?"
                  ].map((question, i) => (
                    <Button key={i} variant="outline" className="w-full text-left justify-start h-auto p-3">
                      <div className="text-sm">{question}</div>
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>

            <Card className="p-6">
              <CardHeader>
                <CardTitle>Ressources Légales Disponibles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "Code des obligations (CO)", country: "CH", type: "PDF", size: "2.3 MB" },
                    { name: "Loi sur le travail (LTr)", country: "CH", type: "PDF", size: "1.8 MB" },
                    { name: "Loi sur l'égalité (LEg)", country: "CH", type: "PDF", size: "0.9 MB" },
                    { name: "Convention collective CCT", country: "CH", type: "PDF", size: "1.2 MB" },
                    { name: "Directive européenne temps travail", country: "EU", type: "PDF", size: "1.5 MB" },
                    { name: "Règlement RGPD employés", country: "EU", type: "PDF", size: "2.1 MB" }
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-semibold text-sm">{doc.name}</h4>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {doc.country === 'CH' ? '🇨🇭' : '🇪🇺'} {doc.country}
                          </Badge>
                          <span className="text-xs text-gray-500">{doc.size}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}