import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  Banknote, 
  TrendingUp, 
  Shield, 
  Star, 
  Clock, 
  Users, 
  Award, 
  CheckCircle,
  Building,
  PiggyBank,
  CreditCard,
  Home,
  Car,
  Briefcase,
  Heart,
  Target,
  Zap,
  Globe,
  Calculator,
  Eye,
  FileText,
  Download,
  Upload,
  Smartphone,
  Lock,
  AlertTriangle,
  Info,
  Plus,
  Minus,
  BarChart3,
  LineChart,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Percent,
  DollarSign,
  Euro,
  Coins,
  Landmark,
  Handshake,
  Scale,
  BookOpen,
  Mosque,
  Calendar,
  Bell,
  Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface InstrumentFinancierIslamique {
  id: string;
  nom: string;
  nomArabe: string;
  type: 'Financement' | 'Investissement' | 'Assurance' | 'Trading' | 'Épargne';
  description: string;
  principeSharia: string;
  structure: string;
  avantages: string[];
  risques: string[];
  eligibilite: string[];
  rendementsTypiques: {
    min: number;
    max: number;
    moyen: number;
  };
  dureeMinimum: string;
  montantMinimum: number;
  devise: string[];
  conformiteSharia: {
    certifie: boolean;
    board: string;
    derniereRevision: string;
    fatwa: string;
  };
  disponible: boolean;
  popularite: number;
  exempleCalcul: {
    montant: number;
    duree: string;
    rendement: number;
    details: string;
  };
}

interface PortefeuilleIslamique {
  id: string;
  nom: string;
  type: 'Conservateur' | 'Équilibré' | 'Dynamique' | 'Agressif';
  description: string;
  allocation: {
    sukuk: number;
    actions: number;
    immobilier: number;
    commodites: number;
    liquide: number;
  };
  rendementAnnuel: {
    historique1an: number;
    historique3ans: number;
    historique5ans: number;
    projection: number;
  };
  risque: 'Faible' | 'Modéré' | 'Élevé';
  frais: number;
  montantMinimum: number;
  shariaCompliant: boolean;
}

interface TransactionIslamique {
  id: string;
  date: Date;
  type: 'Achat' | 'Vente' | 'Dividende' | 'Profit' | 'Zakat';
  instrument: string;
  montant: number;
  devise: string;
  statut: 'Exécutée' | 'En attente' | 'Annulée';
  conformiteSharia: boolean;
  reference: string;
}

interface CalculateurZakat {
  actifs: {
    liquidites: number;
    or: number;
    argent: number;
    investissements: number;
    immobilier: number;
    business: number;
  };
  passifs: {
    dettes: number;
    emprunts: number;
  };
  nisab: {
    or: number;
    argent: number;
  };
  tauxZakat: number;
  zakatDue: number;
  eligible: boolean;
}

export default function FinanceIslamiqueHalal() {
  const [instrumentSelectionne, setInstrumentSelectionne] = useState<string>('murabaha');
  const [portefeuilleActif, setPortefeuilleActif] = useState<string>('equilibre');
  const [calculateurZakat, setCalculateurZakat] = useState<CalculateurZakat>({
    actifs: {
      liquidites: 0,
      or: 0,
      argent: 0,
      investissements: 0,
      immobilier: 0,
      business: 0
    },
    passifs: {
      dettes: 0,
      emprunts: 0
    },
    nisab: {
      or: 5847, // CHF équivalent 85g or
      argent: 592 // CHF équivalent 595g argent
    },
    tauxZakat: 2.5,
    zakatDue: 0,
    eligible: false
  });

  // Instruments financiers islamiques disponibles
  const instrumentsFinanciers: InstrumentFinancierIslamique[] = [
    {
      id: 'murabaha',
      nom: 'Murabaha Immobilier',
      nomArabe: 'مرابحة عقارية',
      type: 'Financement',
      description: 'Financement immobilier islamique basé sur la vente avec marge bénéficiaire transparente',
      principeSharia: 'Achat-revente avec profit déclaré, aucun intérêt (riba)',
      structure: 'CED Bank achète le bien puis le revend au client avec paiements échelonnés',
      avantages: [
        '0% intérêt garanti',
        'Propriété immédiate du bien',
        'Marge bénéficiaire fixe et transparente',
        'Protection contre fluctuations taux',
        'Conformité Sharia certifiée'
      ],
      risques: [
        'Engagement ferme d\'achat',
        'Pénalités retard de paiement',
        'Évaluation conservatrice du bien'
      ],
      eligibilite: [
        'Revenu stable minimum 4,500 CHF/mois',
        'Apport personnel 20% minimum',
        'Résidence principale ou investissement halal',
        'Aucun endettement ribawi existant'
      ],
      rendementsTypiques: {
        min: 2.8,
        max: 4.2,
        moyen: 3.5
      },
      dureeMinimum: '5 ans',
      montantMinimum: 100000,
      devise: ['CHF', 'EUR', 'USD'],
      conformiteSharia: {
        certifie: true,
        board: 'AAOIFI + Scholars CED',
        derniereRevision: '15 Décembre 2024',
        fatwa: 'Fatwa 127/2024 - Conformité totale'
      },
      disponible: true,
      popularite: 95,
      exempleCalcul: {
        montant: 500000,
        duree: '20 ans',
        rendement: 3.5,
        details: 'Bien 500K CHF, marge 3.5%, mensualité 2,890 CHF, total 693,600 CHF'
      }
    },
    {
      id: 'ijara',
      nom: 'Ijara Véhicules',
      nomArabe: 'إجارة السيارات',
      type: 'Financement',
      description: 'Location-financement islamique pour véhicules avec option d\'achat',
      principeSharia: 'Contrat de location avec transfert progressif de propriété',
      structure: 'CED Bank possède le véhicule et le loue avec option d\'acquisition finale',
      avantages: [
        'Pas d\'intérêt ribawi',
        'Flexibilité dans les paiements',
        'Maintenance souvent incluse',
        'Option rachat anticipé',
        'Véhicules neufs et d\'occasion'
      ],
      risques: [
        'Responsabilité entretien',
        'Assurance obligatoire',
        'Kilomètrage limité possible'
      ],
      eligibilite: [
        'Revenus réguliers justifiés',
        'Âge minimum 21 ans',
        'Permis de conduire valide',
        'Véhicule usage personnel/professionnel halal'
      ],
      rendementsTypiques: {
        min: 3.2,
        max: 5.8,
        moyen: 4.5
      },
      dureeMinimum: '2 ans',
      montantMinimum: 15000,
      devise: ['CHF', 'EUR'],
      conformiteSharia: {
        certifie: true,
        board: 'Islamic Fiqh Academy',
        derniereRevision: '20 Novembre 2024',
        fatwa: 'Résolution 178/19/19'
      },
      disponible: true,
      popularite: 87,
      exempleCalcul: {
        montant: 35000,
        duree: '5 ans',
        rendement: 4.5,
        details: 'Véhicule 35K CHF, loyer mensuel 695 CHF, option rachat finale 5K CHF'
      }
    },
    {
      id: 'musharaka',
      nom: 'Musharaka Business',
      nomArabe: 'مشاركة تجارية',
      type: 'Investissement',
      description: 'Partenariat d\'investissement avec partage des profits et pertes',
      principeSharia: 'Association en capital avec participation aux résultats',
      structure: 'CED Bank et client investissent conjointement dans un projet rentable',
      avantages: [
        'Partage équitable profits',
        'Participation active encouragée',
        'Diversification des risques',
        'Conformité Sharia naturelle',
        'Potentiel rendements élevés'
      ],
      risques: [
        'Partage des pertes également',
        'Gestion partagée complexe',
        'Liquidité limitée',
        'Due diligence approfondie'
      ],
      eligibilite: [
        'Projet business halal validé',
        'Expérience secteur requise',
        'Plan affaires détaillé',
        'Apport minimum 30%'
      ],
      rendementsTypiques: {
        min: 5.0,
        max: 15.0,
        moyen: 8.5
      },
      dureeMinimum: '3 ans',
      montantMinimum: 50000,
      devise: ['CHF', 'USD', 'EUR'],
      conformiteSharia: {
        certifie: true,
        board: 'OIC Islamic Fiqh Academy',
        derniereRevision: '30 Octobre 2024',
        fatwa: 'Fatwa 183/19/19'
      },
      disponible: true,
      popularite: 78,
      exempleCalcul: {
        montant: 200000,
        duree: '5 ans',
        rendement: 8.5,
        details: 'Partenariat 200K CHF, profit partagé 60/40, ROI estimé 8.5% annuel'
      }
    },
    {
      id: 'sukuk',
      nom: 'Sukuk Souverains',
      nomArabe: 'صكوك سيادية',
      type: 'Investissement',
      description: 'Obligations islamiques adossées à des actifs tangibles gouvernementaux',
      principeSharia: 'Certificats de propriété d\'actifs réels générant des revenus',
      structure: 'Investissement dans actifs gouvernementaux productifs de revenus halal',
      avantages: [
        'Garantie gouvernementale',
        'Revenus réguliers prédictibles',
        'Liquidité élevée',
        'Risque souverain faible',
        'Diversification géographique'
      ],
      risques: [
        'Risque taux d\'intérêt',
        'Risque de change',
        'Risque souverain pays',
        'Liquidité marché secondaire'
      ],
      eligibilite: [
        'Investisseur qualifié',
        'Montant minimum respecté',
        'Connaissance produits financiers',
        'Horizon placement moyen terme'
      ],
      rendementsTypiques: {
        min: 2.5,
        max: 6.5,
        moyen: 4.2
      },
      dureeMinimum: '1 an',
      montantMinimum: 10000,
      devise: ['USD', 'EUR', 'AED', 'MYR'],
      conformiteSharia: {
        certifie: true,
        board: 'AAOIFI Standards',
        derniereRevision: '5 Décembre 2024',
        fatwa: 'Standard Sharia 17'
      },
      disponible: true,
      popularite: 92,
      exempleCalcul: {
        montant: 50000,
        duree: '3 ans',
        rendement: 4.2,
        details: 'Sukuk 50K USD, coupon 4.2% annuel, paiements semestriels'
      }
    },
    {
      id: 'takaful',
      nom: 'Takaful Investissement',
      nomArabe: 'تكافل استثماري',
      type: 'Assurance',
      description: 'Assurance-vie islamique avec composante investissement',
      principeSharia: 'Mutualisation des risques et investissement selon Sharia',
      structure: 'Protection familiale + croissance capital selon principes islamiques',
      avantages: [
        'Protection ET investissement',
        'Participation aux profits',
        'Flexibilité contributions',
        'Héritage conforme Sharia',
        'Couverture médicale incluse'
      ],
      risques: [
        'Performance investissement variable',
        'Frais de gestion',
        'Période engagement longue',
        'Rachat anticipé pénalisant'
      ],
      eligibilite: [
        'Âge 18-65 ans',
        'Questionnaire santé',
        'Revenus réguliers',
        'Bénéficiaires désignés'
      ],
      rendementsTypiques: {
        min: 3.5,
        max: 8.0,
        moyen: 5.5
      },
      dureeMinimum: '10 ans',
      montantMinimum: 2400,
      devise: ['CHF', 'USD', 'EUR'],
      conformiteSharia: {
        certifie: true,
        board: 'AAOIFI Takaful Standards',
        derniereRevision: '25 Novembre 2024',
        fatwa: 'Standard Sharia 26'
      },
      disponible: true,
      popularite: 83,
      exempleCalcul: {
        montant: 500,
        duree: '20 ans',
        rendement: 5.5,
        details: 'Prime 500 CHF/mois, capital garanti 150K CHF, participation profits'
      }
    }
  ];

  // Portefeuilles diversifiés islamiques
  const portefeuilles: PortefeuilleIslamique[] = [
    {
      id: 'conservateur',
      nom: 'Portefeuille Prudent',
      type: 'Conservateur',
      description: 'Croissance stable avec préservation du capital selon principes islamiques',
      allocation: {
        sukuk: 60,
        actions: 15,
        immobilier: 15,
        commodites: 5,
        liquide: 5
      },
      rendementAnnuel: {
        historique1an: 3.8,
        historique3ans: 4.2,
        historique5ans: 3.9,
        projection: 4.5
      },
      risque: 'Faible',
      frais: 0.8,
      montantMinimum: 5000,
      shariaCompliant: true
    },
    {
      id: 'equilibre',
      nom: 'Portefeuille Équilibré',
      type: 'Équilibré',
      description: 'Balance optimale entre sécurité et croissance halal',
      allocation: {
        sukuk: 40,
        actions: 30,
        immobilier: 20,
        commodites: 5,
        liquide: 5
      },
      rendementAnnuel: {
        historique1an: 6.2,
        historique3ans: 7.1,
        historique5ans: 6.8,
        projection: 7.5
      },
      risque: 'Modéré',
      frais: 1.2,
      montantMinimum: 10000,
      shariaCompliant: true
    },
    {
      id: 'dynamique',
      nom: 'Portefeuille Croissance',
      type: 'Dynamique',
      description: 'Croissance agressive avec sélection d\'actifs halal premium',
      allocation: {
        sukuk: 20,
        actions: 50,
        immobilier: 20,
        commodites: 7,
        liquide: 3
      },
      rendementAnnuel: {
        historique1an: 9.5,
        historique3ans: 11.2,
        historique5ans: 10.1,
        projection: 12.0
      },
      risque: 'Élevé',
      frais: 1.5,
      montantMinimum: 25000,
      shariaCompliant: true
    }
  ];

  // Transactions récentes
  const transactionsRecentes: TransactionIslamique[] = [
    {
      id: 'tx001',
      date: new Date('2024-12-20'),
      type: 'Achat',
      instrument: 'Sukuk Malaisie 2027',
      montant: 15000,
      devise: 'USD',
      statut: 'Exécutée',
      conformiteSharia: true,
      reference: 'CED-SK-001'
    },
    {
      id: 'tx002',
      date: new Date('2024-12-18'),
      type: 'Dividende',
      instrument: 'Actions Halal Tech Fund',
      montant: 850,
      devise: 'CHF',
      statut: 'Exécutée',
      conformiteSharia: true,
      reference: 'CED-DIV-047'
    },
    {
      id: 'tx003',
      date: new Date('2024-12-15'),
      type: 'Profit',
      instrument: 'Musharaka Immobilier Dubai',
      montant: 2300,
      devise: 'AED',
      statut: 'Exécutée',
      conformiteSharia: true,
      reference: 'CED-MSH-012'
    }
  ];

  // Calcul automatique Zakat
  useEffect(() => {
    const totalActifs = Object.values(calculateurZakat.actifs).reduce((sum, val) => sum + val, 0);
    const totalPassifs = Object.values(calculateurZakat.passifs).reduce((sum, val) => sum + val, 0);
    const patrimoineNet = totalActifs - totalPassifs;
    
    const nisabMinimum = Math.min(calculateurZakat.nisab.or, calculateurZakat.nisab.argent);
    const eligible = patrimoineNet >= nisabMinimum;
    const zakatDue = eligible ? (patrimoineNet * calculateurZakat.tauxZakat) / 100 : 0;

    setCalculateurZakat(prev => ({
      ...prev,
      eligible,
      zakatDue
    }));
  }, [calculateurZakat.actifs, calculateurZakat.passifs]);

  const formatCurrency = (amount: number, currency: string = 'CHF') => {
    return new Intl.NumberFormat('fr-CH', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getTypeColor = (type: string) => {
    const colors = {
      'Financement': 'bg-blue-100 text-blue-800',
      'Investissement': 'bg-green-100 text-green-800',
      'Assurance': 'bg-purple-100 text-purple-800',
      'Trading': 'bg-orange-100 text-orange-800',
      'Épargne': 'bg-teal-100 text-teal-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getRisqueColor = (risque: string) => {
    const colors = {
      'Faible': 'bg-green-100 text-green-800',
      'Modéré': 'bg-yellow-100 text-yellow-800',
      'Élevé': 'bg-red-100 text-red-800'
    };
    return colors[risque as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Finance Islamique */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="flex justify-center items-center gap-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 flex items-center justify-center"
            >
              <Banknote className="h-10 w-10 text-white" />
            </motion.div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">
                Finance Islamique 100% Halal
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700 font-arabic">
                المالية الإسلامية ١٠٠٪ حلال
              </h2>
            </div>
          </div>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Écosystème financier islamique complet : investissements, financements, assurance Takaful 
            et trading halal certifiés par les plus grands scholars internationaux.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Badge className="bg-emerald-100 text-emerald-800 px-4 py-2">
              🏆 100% Sharia Compliant
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
              🎯 0% Riba Garanti
            </Badge>
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2">
              📊 15+ Instruments Halal
            </Badge>
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2">
              🌍 Multi-devises Global
            </Badge>
          </div>
        </motion.div>

        {/* Statistiques en temps réel */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-emerald-600">2.47B</div>
              <div className="text-sm text-gray-600">CHF Actifs Gérés</div>
              <div className="text-xs text-emerald-600 flex items-center justify-center gap-1 mt-1">
                <ArrowUpRight className="h-3 w-3" />
                +12.4% cette année
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">47,892</div>
              <div className="text-sm text-gray-600">Clients Actifs</div>
              <div className="text-xs text-blue-600 flex items-center justify-center gap-1 mt-1">
                <Users className="h-3 w-3" />
                +15.7% ce mois
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">7.8%</div>
              <div className="text-sm text-gray-600">Rendement Moyen</div>
              <div className="text-xs text-purple-600 flex items-center justify-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                Performance 5 ans
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">150</div>
              <div className="text-sm text-gray-600">Scholars Validation</div>
              <div className="text-xs text-orange-600 flex items-center justify-center gap-1 mt-1">
                <Shield className="h-3 w-3" />
                Certification OIC
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation principale */}
        <Tabs defaultValue="instruments" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="instruments">Instruments Halal</TabsTrigger>
            <TabsTrigger value="portefeuilles">Portefeuilles</TabsTrigger>
            <TabsTrigger value="transactions">Mes Transactions</TabsTrigger>
            <TabsTrigger value="zakat">Calculateur Zakat</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          {/* Onglet Instruments Financiers */}
          <TabsContent value="instruments" className="space-y-6">
            
            {/* Filtres par type */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Instruments Financiers Islamiques
                </CardTitle>
                <CardDescription>
                  Sélection des meilleurs produits financiers 100% conformes à la Sharia
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-3 mb-6">
                  {['Tous', 'Financement', 'Investissement', 'Assurance', 'Trading', 'Épargne'].map((type) => (
                    <Button
                      key={type}
                      variant={type === 'Tous' ? 'default' : 'outline'}
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      {type === 'Financement' && <Home className="h-4 w-4" />}
                      {type === 'Investissement' && <TrendingUp className="h-4 w-4" />}
                      {type === 'Assurance' && <Shield className="h-4 w-4" />}
                      {type === 'Trading' && <BarChart3 className="h-4 w-4" />}
                      {type === 'Épargne' && <PiggyBank className="h-4 w-4" />}
                      {type}
                    </Button>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {instrumentsFinanciers.map((instrument, index) => (
                    <motion.div
                      key={instrument.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card 
                        className={`h-full cursor-pointer transition-all duration-300 hover:shadow-xl ${
                          instrumentSelectionne === instrument.id ? 'border-emerald-500 shadow-lg' : 'border-gray-200'
                        }`}
                        onClick={() => setInstrumentSelectionne(instrument.id)}
                      >
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center">
                                {instrument.type === 'Financement' && <Home className="h-6 w-6 text-white" />}
                                {instrument.type === 'Investissement' && <TrendingUp className="h-6 w-6 text-white" />}
                                {instrument.type === 'Assurance' && <Shield className="h-6 w-6 text-white" />}
                                {instrument.type === 'Trading' && <BarChart3 className="h-6 w-6 text-white" />}
                                {instrument.type === 'Épargne' && <PiggyBank className="h-6 w-6 text-white" />}
                              </div>
                              <div>
                                <CardTitle className="text-lg">{instrument.nom}</CardTitle>
                                <CardDescription className="font-arabic">
                                  {instrument.nomArabe}
                                </CardDescription>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className={getTypeColor(instrument.type)}>
                                {instrument.type}
                              </Badge>
                              <div className="text-sm text-gray-500 mt-1">
                                Popularité: {instrument.popularite}%
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                          <p className="text-gray-700">{instrument.description}</p>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <BookOpen className="h-4 w-4 text-emerald-600" />
                              <span className="font-medium">Principe Sharia:</span>
                            </div>
                            <p className="text-sm text-gray-600 bg-emerald-50 p-2 rounded">
                              {instrument.principeSharia}
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-blue-700">Rendement:</span>
                              <div className="text-blue-600 font-bold">
                                {instrument.rendementsTypiques.min}% - {instrument.rendementsTypiques.max}%
                              </div>
                              <div className="text-xs text-gray-500">
                                Moyen: {instrument.rendementsTypiques.moyen}% annuel
                              </div>
                            </div>
                            <div>
                              <span className="font-medium text-purple-700">Minimum:</span>
                              <div className="text-purple-600 font-bold">
                                {formatCurrency(instrument.montantMinimum)}
                              </div>
                              <div className="text-xs text-gray-500">
                                Durée min: {instrument.dureeMinimum}
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Shield className="h-4 w-4 text-emerald-600" />
                              <span className="text-sm font-medium text-emerald-700">Conformité Sharia</span>
                              {instrument.conformiteSharia.certifie && (
                                <CheckCircle className="h-4 w-4 text-emerald-600" />
                              )}
                            </div>
                            <div className="text-xs text-gray-600">
                              <div>Board: {instrument.conformiteSharia.board}</div>
                              <div>Révision: {instrument.conformiteSharia.derniereRevision}</div>
                            </div>
                          </div>

                          <Separator />

                          <div className="space-y-2">
                            <h5 className="font-medium text-gray-700">Avantages Clés:</h5>
                            <div className="space-y-1">
                              {instrument.avantages.slice(0, 3).map((avantage, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm">
                                  <CheckCircle className="h-3 w-3 text-emerald-500 mt-0.5" />
                                  <span className="text-gray-600">{avantage}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="bg-blue-50 p-3 rounded-lg">
                            <h5 className="font-medium text-blue-700 mb-1">Exemple de Calcul:</h5>
                            <div className="text-sm text-blue-600">
                              {instrument.exempleCalcul.details}
                            </div>
                          </div>

                          <div className="flex justify-between items-center pt-4">
                            <div className="flex items-center gap-2">
                              {instrument.disponible ? (
                                <Badge className="bg-green-100 text-green-800">
                                  Disponible
                                </Badge>
                              ) : (
                                <Badge className="bg-yellow-100 text-yellow-800">
                                  Bientôt
                                </Badge>
                              )}
                              <div className="flex gap-1">
                                {instrument.devise.slice(0, 3).map((dev, i) => (
                                  <Badge key={i} variant="outline" className="text-xs">
                                    {dev}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Calculator className="h-4 w-4 mr-2" />
                                Simuler
                              </Button>
                              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                                <Plus className="h-4 w-4 mr-2" />
                                Souscrire
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Portefeuilles */}
          <TabsContent value="portefeuilles" className="space-y-6">
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  Portefeuilles Diversifiés Islamiques
                </CardTitle>
                <CardDescription>
                  Portefeuilles gérés professionnellement selon les principes de la Sharia
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {portefeuilles.map((portefeuille, index) => (
                    <motion.div
                      key={portefeuille.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card 
                        className={`h-full cursor-pointer transition-all duration-300 hover:shadow-xl ${
                          portefeuilleActif === portefeuille.id ? 'border-emerald-500 shadow-lg' : 'border-gray-200'
                        }`}
                        onClick={() => setPortefeuilleActif(portefeuille.id)}
                      >
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{portefeuille.nom}</CardTitle>
                            <Badge className={getRisqueColor(portefeuille.risque)}>
                              {portefeuille.risque}
                            </Badge>
                          </div>
                          <CardDescription>{portefeuille.description}</CardDescription>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                          
                          {/* Performance */}
                          <div className="text-center p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg">
                            <div className="text-2xl font-bold text-emerald-600">
                              +{portefeuille.rendementAnnuel.projection}%
                            </div>
                            <div className="text-sm text-gray-600">Projection annuelle</div>
                            <div className="text-xs text-gray-500 mt-1">
                              Historique 5 ans: {portefeuille.rendementAnnuel.historique5ans}%
                            </div>
                          </div>

                          {/* Allocation */}
                          <div>
                            <h5 className="font-medium text-gray-700 mb-2">Allocation d'Actifs:</h5>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span>Sukuk</span>
                                <span className="font-medium">{portefeuille.allocation.sukuk}%</span>
                              </div>
                              <Progress value={portefeuille.allocation.sukuk} className="h-2" />
                              
                              <div className="flex items-center justify-between text-sm">
                                <span>Actions Halal</span>
                                <span className="font-medium">{portefeuille.allocation.actions}%</span>
                              </div>
                              <Progress value={portefeuille.allocation.actions} className="h-2" />
                              
                              <div className="flex items-center justify-between text-sm">
                                <span>Immobilier</span>
                                <span className="font-medium">{portefeuille.allocation.immobilier}%</span>
                              </div>
                              <Progress value={portefeuille.allocation.immobilier} className="h-2" />
                              
                              <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mt-2">
                                <div>Commodités: {portefeuille.allocation.commodites}%</div>
                                <div>Liquidités: {portefeuille.allocation.liquide}%</div>
                              </div>
                            </div>
                          </div>

                          {/* Détails investissement */}
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-blue-700">Minimum:</span>
                              <div className="text-blue-600 font-bold">
                                {formatCurrency(portefeuille.montantMinimum)}
                              </div>
                            </div>
                            <div>
                              <span className="font-medium text-purple-700">Frais:</span>
                              <div className="text-purple-600 font-bold">
                                {portefeuille.frais}% annuel
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-emerald-600" />
                            <span className="text-sm text-emerald-700 font-medium">
                              100% Sharia Compliant
                            </span>
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                          </div>

                          <Button 
                            className="w-full bg-emerald-600 hover:bg-emerald-700"
                            onClick={(e) => {
                              e.stopPropagation();
                              // Logic d'investissement
                            }}
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Investir Maintenant
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Transactions */}
          <TabsContent value="transactions" className="space-y-6">
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Historique des Transactions
                </CardTitle>
                <CardDescription>
                  Toutes vos opérations financières islamiques récentes
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {transactionsRecentes.map((transaction, index) => (
                    <motion.div
                      key={transaction.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg p-4 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            transaction.type === 'Achat' ? 'bg-blue-100' :
                            transaction.type === 'Vente' ? 'bg-red-100' :
                            transaction.type === 'Dividende' ? 'bg-green-100' :
                            transaction.type === 'Profit' ? 'bg-emerald-100' :
                            'bg-purple-100'
                          }`}>
                            {transaction.type === 'Achat' && <ArrowUpRight className="h-5 w-5 text-blue-600" />}
                            {transaction.type === 'Vente' && <ArrowDownRight className="h-5 w-5 text-red-600" />}
                            {transaction.type === 'Dividende' && <Coins className="h-5 w-5 text-green-600" />}
                            {transaction.type === 'Profit' && <TrendingUp className="h-5 w-5 text-emerald-600" />}
                            {transaction.type === 'Zakat' && <Heart className="h-5 w-5 text-purple-600" />}
                          </div>
                          
                          <div>
                            <div className="font-medium">{transaction.type} - {transaction.instrument}</div>
                            <div className="text-sm text-gray-500">
                              {transaction.date.toLocaleDateString('fr-FR')} • Ref: {transaction.reference}
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className={`font-bold text-lg ${
                            transaction.type === 'Achat' ? 'text-blue-600' :
                            transaction.type === 'Vente' ? 'text-red-600' :
                            'text-green-600'
                          }`}>
                            {transaction.type === 'Achat' ? '-' : '+'}
                            {formatCurrency(transaction.montant, transaction.devise)}
                          </div>
                          
                          <div className="flex items-center gap-2 mt-1">
                            <Badge 
                              className={
                                transaction.statut === 'Exécutée' ? 'bg-green-100 text-green-800' :
                                transaction.statut === 'En attente' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }
                            >
                              {transaction.statut}
                            </Badge>
                            
                            {transaction.conformiteSharia && (
                              <Badge className="bg-emerald-100 text-emerald-800">
                                <Shield className="h-3 w-3 mr-1" />
                                Halal
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-6">
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger Relevé Complet
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Calculateur Zakat */}
          <TabsContent value="zakat" className="space-y-6">
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Calculateur Zakat Automatique
                </CardTitle>
                <CardDescription>
                  Calcul précis de votre Zakat selon les règles authentiques du Fiqh
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                
                {/* Actifs */}
                <div>
                  <h4 className="font-bold text-emerald-700 mb-4">💰 Vos Actifs (CHF)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Liquidités (Cash, comptes)</label>
                      <input
                        type="number"
                        value={calculateurZakat.actifs.liquidites}
                        onChange={(e) => setCalculateurZakat(prev => ({
                          ...prev,
                          actifs: { ...prev.actifs, liquidites: Number(e.target.value) }
                        }))}
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
                        placeholder="0"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-700">Or et métaux précieux</label>
                      <input
                        type="number"
                        value={calculateurZakat.actifs.or}
                        onChange={(e) => setCalculateurZakat(prev => ({
                          ...prev,
                          actifs: { ...prev.actifs, or: Number(e.target.value) }
                        }))}
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
                        placeholder="0"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-700">Investissements (actions, sukuk)</label>
                      <input
                        type="number"
                        value={calculateurZakat.actifs.investissements}
                        onChange={(e) => setCalculateurZakat(prev => ({
                          ...prev,
                          actifs: { ...prev.actifs, investissements: Number(e.target.value) }
                        }))}
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
                        placeholder="0"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-700">Immobilier locatif</label>
                      <input
                        type="number"
                        value={calculateurZakat.actifs.immobilier}
                        onChange={(e) => setCalculateurZakat(prev => ({
                          ...prev,
                          actifs: { ...prev.actifs, immobilier: Number(e.target.value) }
                        }))}
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
                        placeholder="0"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-700">Valeur business/commerce</label>
                      <input
                        type="number"
                        value={calculateurZakat.actifs.business}
                        onChange={(e) => setCalculateurZakat(prev => ({
                          ...prev,
                          actifs: { ...prev.actifs, business: Number(e.target.value) }
                        }))}
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
                        placeholder="0"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-700">Argent et bijoux</label>
                      <input
                        type="number"
                        value={calculateurZakat.actifs.argent}
                        onChange={(e) => setCalculateurZakat(prev => ({
                          ...prev,
                          actifs: { ...prev.actifs, argent: Number(e.target.value) }
                        }))}
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-emerald-500"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Passifs */}
                <div>
                  <h4 className="font-bold text-red-700 mb-4">💳 Vos Dettes (CHF)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Dettes personnelles</label>
                      <input
                        type="number"
                        value={calculateurZakat.passifs.dettes}
                        onChange={(e) => setCalculateurZakat(prev => ({
                          ...prev,
                          passifs: { ...prev.passifs, dettes: Number(e.target.value) }
                        }))}
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-red-500"
                        placeholder="0"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-700">Emprunts et crédits</label>
                      <input
                        type="number"
                        value={calculateurZakat.passifs.emprunts}
                        onChange={(e) => setCalculateurZakat(prev => ({
                          ...prev,
                          passifs: { ...prev.passifs, emprunts: Number(e.target.value) }
                        }))}
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-red-500"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Résultats */}
                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-emerald-700 mb-4 text-center">📊 Résultats du Calcul Zakat</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        {formatCurrency(Object.values(calculateurZakat.actifs).reduce((sum, val) => sum + val, 0))}
                      </div>
                      <div className="text-sm text-gray-600">Total Actifs</div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">
                        {formatCurrency(Object.values(calculateurZakat.passifs).reduce((sum, val) => sum + val, 0))}
                      </div>
                      <div className="text-sm text-gray-600">Total Dettes</div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-emerald-600">
                        {formatCurrency(Object.values(calculateurZakat.actifs).reduce((sum, val) => sum + val, 0) - 
                                      Object.values(calculateurZakat.passifs).reduce((sum, val) => sum + val, 0))}
                      </div>
                      <div className="text-sm text-gray-600">Patrimoine Net</div>
                    </div>
                  </div>

                  <div className="text-center mt-6">
                    <div className="text-sm text-gray-600 mb-2">
                      Nisab (seuil minimum): {formatCurrency(Math.min(calculateurZakat.nisab.or, calculateurZakat.nisab.argent))}
                    </div>
                    
                    {calculateurZakat.eligible ? (
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-emerald-600">
                          🕌 {formatCurrency(calculateurZakat.zakatDue)}
                        </div>
                        <div className="text-lg text-emerald-700 font-medium">
                          Zakat Due Cette Année
                        </div>
                        <div className="text-sm text-gray-600">
                          Calculé à {calculateurZakat.tauxZakat}% sur le patrimoine net zakatable
                        </div>
                        
                        <div className="flex justify-center gap-4 mt-4">
                          <Button className="bg-emerald-600 hover:bg-emerald-700">
                            <Heart className="h-4 w-4 mr-2" />
                            Payer Zakat
                          </Button>
                          <Button variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Certificat Zakat
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-gray-600">
                          ❌ Pas de Zakat Due
                        </div>
                        <div className="text-lg text-gray-700">
                          Votre patrimoine est en dessous du Nisab
                        </div>
                        <div className="text-sm text-gray-600">
                          Continuez à épargner selon les principes islamiques
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Information Fiqh */}
                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-4">
                    <h5 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Rappel Fiqh - Règles de la Zakat
                    </h5>
                    <div className="text-sm text-blue-800 space-y-1">
                      <div>• La Zakat est due sur le patrimoine détenu pendant une année lunaire complète</div>
                      <div>• Le taux standard est de 2,5% sur les actifs liquides et investissements</div>
                      <div>• Le Nisab correspond à la valeur de 85g d'or ou 595g d'argent</div>
                      <div>• Les dettes peuvent être déduites du patrimoine zakatable</div>
                      <div>• La résidence principale n'est généralement pas soumise à la Zakat</div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Performance */}
          <TabsContent value="performance" className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-600">+847,293</div>
                  <div className="text-sm text-gray-600">Profit Total (CHF)</div>
                  <div className="text-xs text-emerald-600 flex items-center justify-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3" />
                    +18.7% cette année
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">7.8%</div>
                  <div className="text-sm text-gray-600">ROI Annuel Moyen</div>
                  <div className="text-xs text-blue-600 flex items-center justify-center gap-1 mt-1">
                    <Target className="h-3 w-3" />
                    vs 5.2% marché
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">97.3%</div>
                  <div className="text-sm text-gray-600">Trades Positifs</div>
                  <div className="text-xs text-purple-600 flex items-center justify-center gap-1 mt-1">
                    <CheckCircle className="h-3 w-3" />
                    423/435 trades
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">125,847</div>
                  <div className="text-sm text-gray-600">Zakat Payée (CHF)</div>
                  <div className="text-xs text-orange-600 flex items-center justify-center gap-1 mt-1">
                    <Heart className="h-3 w-3" />
                    Depuis création compte
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Performance Portefeuille par Actif</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { nom: 'Sukuk Gouvernementaux', performance: 4.2, allocation: 35 },
                    { nom: 'Actions Halal Tech', performance: 12.8, allocation: 25 },
                    { nom: 'Immobilier REITs', performance: 8.5, allocation: 20 },
                    { nom: 'Commodités Or/Argent', performance: 6.1, allocation: 10 },
                    { nom: 'Cash/Liquidités', performance: 1.8, allocation: 10 }
                  ].map((actif, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium">{actif.nom}</div>
                        <div className="text-sm text-gray-600">Allocation: {actif.allocation}%</div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold ${actif.performance > 5 ? 'text-green-600' : 'text-blue-600'}`}>
                          +{actif.performance}%
                        </div>
                        <div className="text-xs text-gray-500">Annuel</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer islamique */}
        <Card className="border-emerald-200 bg-gradient-to-r from-emerald-100 to-teal-100">
          <CardContent className="p-6 text-center">
            <div className="font-arabic text-xl text-emerald-800 mb-3 leading-relaxed">
              وَمَا أَنفَقْتُم مِّن شَيْءٍ فَهُوَ يُخْلِفُهُ ۖ وَهُوَ خَيْرُ الرَّازِقِينَ
            </div>
            <div className="text-emerald-700 mb-2">
              "Et tout ce que vous dépensez, Il le remplace, et c'est Lui le Meilleur des pourvoyeurs"
            </div>
            <div className="text-sm text-emerald-600">
              Sourate Saba 34:39 - La promesse divine pour ceux qui dépensent dans le bien
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}