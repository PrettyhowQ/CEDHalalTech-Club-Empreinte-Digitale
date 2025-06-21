import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, 
  Shield, 
  CheckCircle, 
  Clock,
  Euro,
  DollarSign,
  Banknote,
  User,
  Mail,
  Phone,
  Building,
  Lock,
  Zap,
  Star,
  BookOpen,
  GraduationCap,
  Award,
  ChevronRight,
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Formation {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  price: number;
  currency: string;
  instructor: string;
  category: string;
  modules: number;
  certification: boolean;
  language: string;
  startDate: Date;
  endDate: Date;
  maxStudents: number;
  currentStudents: number;
  rating: number;
  reviews: number;
  tags: string[];
  prerequisites: string[];
  objectives: string[];
  isPopular: boolean;
  discount?: {
    percentage: number;
    validUntil: Date;
  };
}

interface PaymentDetails {
  studentName: string;
  email: string;
  phone: string;
  company?: string;
  vatNumber?: string;
  billingAddress: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  paymentMethod: 'bank_transfer' | 'card' | 'ced_wallet';
  bankAccount?: {
    iban: string;
    swift: string;
    accountHolder: string;
  };
}

export function FormationPaymentSystem() {
  const [selectedFormation, setSelectedFormation] = useState<Formation | null>(null);
  const [paymentStep, setPaymentStep] = useState<'selection' | 'details' | 'payment' | 'confirmation'>('selection');
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    studentName: '',
    email: '',
    phone: '',
    company: '',
    vatNumber: '',
    billingAddress: {
      street: '',
      city: '',
      postalCode: '',
      country: 'France'
    },
    paymentMethod: 'bank_transfer'
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const { toast } = useToast();

  // Formations disponibles avec prix et détails complets
  const formations: Formation[] = [
    {
      id: 'ia-ethique-fondamentaux',
      title: 'Fondamentaux IA Éthique & Responsable',
      description: 'Formation complète sur l\'intelligence artificielle éthique, les algorithmes responsables et l\'impact sociétal de l\'IA',
      duration: '6 semaines',
      level: 'Débutant',
      price: 899,
      currency: 'EUR',
      instructor: 'Dr. Yakoubi Yamina',
      category: 'Intelligence Artificielle',
      modules: 12,
      certification: true,
      language: 'Français',
      startDate: new Date('2025-07-15'),
      endDate: new Date('2025-08-26'),
      maxStudents: 25,
      currentStudents: 18,
      rating: 4.9,
      reviews: 127,
      tags: ['IA Éthique', 'Algorithmes', 'Responsabilité', 'Impact Social'],
      prerequisites: ['Bases en informatique'],
      objectives: [
        'Comprendre les enjeux éthiques de l\'IA',
        'Développer des algorithmes responsables',
        'Évaluer l\'impact sociétal des systèmes IA',
        'Implémenter des pratiques éthiques'
      ],
      isPopular: true,
      discount: {
        percentage: 15,
        validUntil: new Date('2025-07-01')
      }
    },
    {
      id: 'finance-islamique-digitale',
      title: 'Finance Islamique Digitale & Blockchain',
      description: 'Maîtrisez les principes de la finance islamique appliqués aux technologies blockchain et aux cryptomonnaies halal',
      duration: '8 semaines',
      level: 'Intermédiaire',
      price: 1299,
      currency: 'EUR',
      instructor: 'Prof. Ahmed Hassan',
      category: 'Finance Islamique',
      modules: 16,
      certification: true,
      language: 'Français/Arabe',
      startDate: new Date('2025-08-01'),
      endDate: new Date('2025-09-26'),
      maxStudents: 20,
      currentStudents: 12,
      rating: 4.8,
      reviews: 89,
      tags: ['Finance Islamique', 'Blockchain', 'Halal', 'Cryptomonnaies'],
      prerequisites: ['Notions de finance', 'Bases blockchain'],
      objectives: [
        'Comprendre les principes Charia en finance',
        'Analyser les cryptomonnaies halal',
        'Développer des solutions fintech islamiques',
        'Gérer des portefeuilles conformes'
      ],
      isPopular: true
    },
    {
      id: 'nutrition-holistique-souheila',
      title: 'Nutrition Holistique & Bien-être Intégral',
      description: 'Approche complète de la nutrition personnalisée avec Souheila, incluant aspects physiques, mentaux et spirituels',
      duration: '10 semaines',
      level: 'Débutant',
      price: 749,
      currency: 'EUR',
      instructor: 'Souheila Nutritionniste',
      category: 'Santé & Bien-être',
      modules: 20,
      certification: true,
      language: 'Français',
      startDate: new Date('2025-07-20'),
      endDate: new Date('2025-09-28'),
      maxStudents: 30,
      currentStudents: 24,
      rating: 4.9,
      reviews: 156,
      tags: ['Nutrition', 'Bien-être', 'Holistique', 'Santé'],
      prerequisites: ['Aucun'],
      objectives: [
        'Comprendre la nutrition holistique',
        'Créer des plans alimentaires personnalisés',
        'Intégrer bien-être mental et physique',
        'Développer une approche préventive'
      ],
      isPopular: false
    },
    {
      id: 'coaching-sportif-performance',
      title: 'Coaching Sportif & Optimisation Performance',
      description: 'Formation avancée en coaching sportif, préparation physique et optimisation des performances athlétiques',
      duration: '12 semaines',
      level: 'Avancé',
      price: 1599,
      currency: 'EUR',
      instructor: 'Coach Elite Performance',
      category: 'Sport & Performance',
      modules: 24,
      certification: true,
      language: 'Français',
      startDate: new Date('2025-08-15'),
      endDate: new Date('2025-11-07'),
      maxStudents: 15,
      currentStudents: 8,
      rating: 4.7,
      reviews: 67,
      tags: ['Coaching', 'Performance', 'Préparation Physique', 'Athlétisme'],
      prerequisites: ['Expérience en sport', 'Bases physiologie'],
      objectives: [
        'Maîtriser les techniques de coaching',
        'Optimiser les performances sportives',
        'Prévenir les blessures',
        'Développer des programmes d\'entraînement'
      ],
      isPopular: false
    },
    {
      id: 'technologies-avancees-futur',
      title: 'Technologies Avancées & Innovations Futures',
      description: 'Exploration des technologies émergentes : IA quantique, IoT, réalité augmentée, et leur impact sociétal',
      duration: '14 semaines',
      level: 'Expert',
      price: 1899,
      currency: 'EUR',
      instructor: 'Dr. Tech Innovation',
      category: 'Technologies Avancées',
      modules: 28,
      certification: true,
      language: 'Français/Anglais',
      startDate: new Date('2025-09-01'),
      endDate: new Date('2025-12-07'),
      maxStudents: 12,
      currentStudents: 5,
      rating: 4.8,
      reviews: 43,
      tags: ['IA Quantique', 'IoT', 'Réalité Augmentée', 'Innovation'],
      prerequisites: ['Master en informatique', '5+ ans expérience'],
      objectives: [
        'Maîtriser les technologies quantiques',
        'Développer solutions IoT avancées',
        'Créer expériences AR/VR',
        'Anticiper les tendances futures'
      ],
      isPopular: false,
      discount: {
        percentage: 20,
        validUntil: new Date('2025-08-15')
      }
    }
  ];

  // Compte bancaire professionnel CED Bank
  const professionalBankAccount = {
    accountName: 'Club Empreinte Digitale - Formation',
    iban: 'FR76 3000 3035 1200 0372 8944 516',
    swift: 'CEDBFRPP',
    bank: 'CED Bank International',
    accountNumber: 'CED-FORMATION-2025',
    reference: `FORM-${new Date().getFullYear()}-`
  };

  const calculateTotalPrice = (formation: Formation) => {
    let total = formation.price;
    if (formation.discount && new Date() <= formation.discount.validUntil) {
      total = total * (1 - formation.discount.percentage / 100);
    }
    return total;
  };

  const generatePaymentReference = (formation: Formation) => {
    const timestamp = Date.now().toString().slice(-6);
    return `${professionalBankAccount.reference}${formation.id.toUpperCase().slice(0, 6)}-${timestamp}`;
  };

  const handleFormationSelect = (formation: Formation) => {
    setSelectedFormation(formation);
    setPaymentStep('details');
  };

  const handlePaymentSubmit = async () => {
    if (!selectedFormation) return;

    setIsProcessing(true);

    // Simulation du traitement de paiement
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Génération de la référence de paiement
    const paymentReference = generatePaymentReference(selectedFormation);

    setIsProcessing(false);
    setPaymentConfirmed(true);
    setPaymentStep('confirmation');

    toast({
      title: "Inscription confirmée !",
      description: `Votre inscription à "${selectedFormation.title}" a été validée. Référence: ${paymentReference}`,
    });
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Débutant': return 'bg-green-100 text-green-800';
      case 'Intermédiaire': return 'bg-blue-100 text-blue-800';
      case 'Avancé': return 'bg-orange-100 text-orange-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderFormationCard = (formation: Formation) => (
    <motion.div
      key={formation.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="relative"
    >
      <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
        {formation.isPopular && (
          <div className="absolute -top-2 -right-2 z-10">
            <Badge className="bg-yellow-500 text-white">
              <Star className="h-3 w-3 mr-1" />
              Populaire
            </Badge>
          </div>
        )}
        
        {formation.discount && (
          <div className="absolute top-4 left-4 z-10">
            <Badge className="bg-red-500 text-white">
              -{formation.discount.percentage}%
            </Badge>
          </div>
        )}

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-lg mb-2">{formation.title}</CardTitle>
              <p className="text-sm text-gray-600 mb-3">{formation.description}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className={getLevelColor(formation.level)}>
              {formation.level}
            </Badge>
            <Badge variant="outline" className="bg-purple-100 text-purple-800">
              {formation.category}
            </Badge>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {formation.duration}
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {formation.modules} modules
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {formation.currentStudents}/{formation.maxStudents}
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  {formation.discount ? (
                    <>
                      <span className="text-lg font-bold text-green-600">
                        {calculateTotalPrice(formation).toFixed(0)} {formation.currency}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {formation.price} {formation.currency}
                      </span>
                    </>
                  ) : (
                    <span className="text-lg font-bold text-gray-900">
                      {formation.price} {formation.currency}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500">Par participant</p>
              </div>
              
              <div className="text-right">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{formation.rating}</span>
                  <span className="text-xs text-gray-500">({formation.reviews})</span>
                </div>
                {formation.certification && (
                  <div className="flex items-center gap-1 mt-1">
                    <Award className="h-3 w-3 text-blue-500" />
                    <span className="text-xs text-blue-600">Certification</span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Instructeur: {formation.instructor}</p>
              <p className="text-sm text-gray-600">
                Début: {formation.startDate.toLocaleDateString('fr-FR')}
              </p>
            </div>

            <Button 
              onClick={() => handleFormationSelect(formation)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              disabled={formation.currentStudents >= formation.maxStudents}
            >
              {formation.currentStudents >= formation.maxStudents ? (
                'Complet'
              ) : (
                <>
                  S'inscrire maintenant
                  <ChevronRight className="h-4 w-4 ml-1" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const renderPaymentDetails = () => (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Informations de facturation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Nom complet *</label>
            <Input
              value={paymentDetails.studentName}
              onChange={(e) => setPaymentDetails(prev => ({ ...prev, studentName: e.target.value }))}
              placeholder="Votre nom complet"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Email *</label>
            <Input
              type="email"
              value={paymentDetails.email}
              onChange={(e) => setPaymentDetails(prev => ({ ...prev, email: e.target.value }))}
              placeholder="votre@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Téléphone *</label>
            <Input
              value={paymentDetails.phone}
              onChange={(e) => setPaymentDetails(prev => ({ ...prev, phone: e.target.value }))}
              placeholder="+33 1 23 45 67 89"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Entreprise (optionnel)</label>
            <Input
              value={paymentDetails.company}
              onChange={(e) => setPaymentDetails(prev => ({ ...prev, company: e.target.value }))}
              placeholder="Nom de l'entreprise"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Adresse de facturation</h3>
          <div className="grid grid-cols-1 gap-4">
            <Input
              value={paymentDetails.billingAddress.street}
              onChange={(e) => setPaymentDetails(prev => ({ 
                ...prev, 
                billingAddress: { ...prev.billingAddress, street: e.target.value }
              }))}
              placeholder="Adresse"
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                value={paymentDetails.billingAddress.city}
                onChange={(e) => setPaymentDetails(prev => ({ 
                  ...prev, 
                  billingAddress: { ...prev.billingAddress, city: e.target.value }
                }))}
                placeholder="Ville"
              />
              <Input
                value={paymentDetails.billingAddress.postalCode}
                onChange={(e) => setPaymentDetails(prev => ({ 
                  ...prev, 
                  billingAddress: { ...prev.billingAddress, postalCode: e.target.value }
                }))}
                placeholder="Code postal"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button 
            variant="outline" 
            onClick={() => setPaymentStep('selection')}
            className="flex-1"
          >
            Retour
          </Button>
          <Button 
            onClick={() => setPaymentStep('payment')}
            className="flex-1 bg-blue-600 hover:bg-blue-700"
            disabled={!paymentDetails.studentName || !paymentDetails.email || !paymentDetails.phone}
          >
            Continuer vers le paiement
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderPaymentOptions = () => (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Paiement sécurisé
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {selectedFormation && (
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">{selectedFormation.title}</h3>
            <div className="flex justify-between items-center">
              <span>Montant total:</span>
              <span className="text-xl font-bold">
                {calculateTotalPrice(selectedFormation).toFixed(0)} {selectedFormation.currency}
              </span>
            </div>
          </div>
        )}

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <Building className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-green-800">Virement bancaire sécurisé</h3>
              <p className="text-sm text-green-600">Paiement direct sur compte professionnel CED Bank</p>
            </div>
          </div>

          <div className="space-y-3 bg-white p-4 rounded border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Bénéficiaire:</span>
                <p>{professionalBankAccount.accountName}</p>
              </div>
              <div>
                <span className="font-medium">Banque:</span>
                <p>{professionalBankAccount.bank}</p>
              </div>
              <div>
                <span className="font-medium">IBAN:</span>
                <p className="font-mono">{professionalBankAccount.iban}</p>
              </div>
              <div>
                <span className="font-medium">Code SWIFT:</span>
                <p className="font-mono">{professionalBankAccount.swift}</p>
              </div>
            </div>
            
            {selectedFormation && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                <span className="font-medium text-yellow-800">Référence obligatoire:</span>
                <p className="font-mono text-yellow-700 font-bold">
                  {generatePaymentReference(selectedFormation)}
                </p>
                <p className="text-xs text-yellow-600 mt-1">
                  Mentionnez cette référence dans le libellé de votre virement
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Shield className="h-4 w-4" />
          <span>Paiement 100% sécurisé - Traitement sous 24-48h</span>
        </div>

        <div className="flex gap-4">
          <Button 
            variant="outline" 
            onClick={() => setPaymentStep('details')}
            className="flex-1"
          >
            Retour
          </Button>
          <Button 
            onClick={handlePaymentSubmit}
            className="flex-1 bg-green-600 hover:bg-green-700"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Traitement...
              </>
            ) : (
              <>
                Confirmer l'inscription
                <CheckCircle className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderConfirmation = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-2xl mx-auto text-center"
    >
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-8">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Inscription confirmée !
          </h2>
          
          <p className="text-green-700 mb-6">
            Votre inscription à "<strong>{selectedFormation?.title}</strong>" a été validée avec succès.
          </p>

          <div className="bg-white p-4 rounded-lg border mb-6">
            <h3 className="font-medium mb-3">Détails de votre inscription:</h3>
            <div className="space-y-2 text-sm text-left">
              <div className="flex justify-between">
                <span>Formation:</span>
                <span className="font-medium">{selectedFormation?.title}</span>
              </div>
              <div className="flex justify-between">
                <span>Participant:</span>
                <span className="font-medium">{paymentDetails.studentName}</span>
              </div>
              <div className="flex justify-between">
                <span>Email:</span>
                <span className="font-medium">{paymentDetails.email}</span>
              </div>
              <div className="flex justify-between">
                <span>Début de formation:</span>
                <span className="font-medium">
                  {selectedFormation?.startDate.toLocaleDateString('fr-FR')}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Montant payé:</span>
                <span className="font-medium text-green-600">
                  {selectedFormation && calculateTotalPrice(selectedFormation).toFixed(0)} {selectedFormation?.currency}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 justify-center">
              <Mail className="h-4 w-4" />
              <span>Email de confirmation envoyé à {paymentDetails.email}</span>
            </div>
            
            <Button 
              onClick={() => {
                setPaymentStep('selection');
                setSelectedFormation(null);
                setPaymentConfirmed(false);
              }}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Explorer d'autres formations
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
            >
              <GraduationCap className="h-6 w-6 text-white" />
            </motion.div>
            <h1 className="text-4xl font-bold text-gray-900">Formations Professionnelles</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Inscription et paiement direct sur compte bancaire professionnel CED Bank
          </p>
          <div className="flex justify-center gap-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Shield className="h-3 w-3 mr-1" />
              Paiement Sécurisé
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Award className="h-3 w-3 mr-1" />
              Certifications
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              <Zap className="h-3 w-3 mr-1" />
              Accès Immédiat
            </Badge>
          </div>
        </motion.div>

        {/* Content based on current step */}
        <AnimatePresence mode="wait">
          {paymentStep === 'selection' && (
            <motion.div
              key="selection"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {formations.map(renderFormationCard)}
              </div>
            </motion.div>
          )}

          {paymentStep === 'details' && (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              {renderPaymentDetails()}
            </motion.div>
          )}

          {paymentStep === 'payment' && (
            <motion.div
              key="payment"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              {renderPaymentOptions()}
            </motion.div>
          )}

          {paymentStep === 'confirmation' && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              {renderConfirmation()}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}