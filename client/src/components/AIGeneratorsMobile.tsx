import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone,
  Mail,
  Calendar,
  Laptop,
  Monitor,
  Printer,
  Server,
  HardDrive,
  Building,
  User,
  Phone,
  MapPin,
  Plus,
  Send,
  FileText,
  Zap,
  Shield,
  CheckCircle,
  Clock,
  Bot,
  Sparkles,
  Target,
  ArrowRight
} from 'lucide-react';

interface CompanyInfo {
  name: string;
  contact: string;
  email: string;
  phone: string;
}

interface DonationItem {
  id: string;
  type: string;
  brand: string;
  model: string;
  quantity: number;
  unitValue: number;
  location: string;
  postalCode: string;
}

interface EmailType {
  id: string;
  name: string;
  template: string;
  subject: string;
  variables: string[];
}

export function AIGeneratorsMobile() {
  const [activeTab, setActiveTab] = useState('email-generator');
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    name: 'TechCorp SAS',
    contact: 'Jean Dupont',
    email: 'contact@techcorp.fr',
    phone: '01 23 45 67 89'
  });
  
  const [donationItems, setDonationItems] = useState<DonationItem[]>([]);
  const [currentItem, setCurrentItem] = useState<Partial<DonationItem>>({
    type: '',
    brand: '',
    model: '',
    quantity: 1,
    unitValue: 0,
    location: 'Paris',
    postalCode: '75001'
  });

  const [selectedEmailType, setSelectedEmailType] = useState('');
  const [generatedEmail, setGeneratedEmail] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const materialTypes = [
    // Informatique
    'Ordinateur portable',
    'Ordinateur fixe', 
    'Écran',
    'Imprimante',
    'Serveur',
    'Périphérique',
    
    // Équipements marins
    'Moteur hors-bord',
    'Moteur in-bord',
    'GPS marin',
    'Sondeur',
    'Radar',
    'Radio VHF',
    'Pilote automatique',
    'Treuil électrique',
    
    // Matériel hydroélectrique
    'Turbine hydraulique',
    'Générateur hydroélectrique',
    'Régulateur de charge',
    'Onduleur marine',
    'Batterie marine',
    'Panneau solaire marine',
    
    // Outils professionnels hydrauliques
    'Pompe hydraulique',
    'Vérin hydraulique',
    'Compresseur',
    'Groupe électrogène',
    'Poste à souder',
    'Perceuse marine',
    'Meuleuse étanche',
    
    // Équipements de pêche professionnels
    'Chalut',
    'Filet de pêche',
    'Casier à poissons',
    'Glacière professionnelle',
    'Balance de pêche',
    'Sonar de pêche'
  ];

  const emailTypes: EmailType[] = [
    {
      id: 'donation-request',
      name: 'Demande de don',
      subject: 'Partenariat solidaire TechForAll - Don matériel {company}',
      template: `Madame, Monsieur,

Je me permets de vous contacter au nom de l'association TechForAll, reconnue d'utilité publique, pour vous proposer un partenariat solidaire innovant.

NOTRE MISSION
TechForAll facilite l'inclusion numérique des populations défavorisées à travers la collecte et redistribution de matériel informatique reconditionné.

VOTRE AVANTAGE
✓ Déduction fiscale jusqu'à 66% de la valeur du don
✓ Certificat de destruction sécurisée des données  
✓ Rapport d'impact social personnalisé
✓ Valorisation RSE auprès de vos stakeholders

MATÉRIELS RECHERCHÉS
{materials_list}

PROCESSUS SIMPLIFIÉ
1. Évaluation gratuite sur site par nos experts
2. Enlèvement sécurisé par nos équipes Costa del Sol
3. Reconditionnement professionnel dans nos ateliers
4. Test qualité et remise aux normes
5. Redistribution aux familles de pêcheurs et artisans

Je reste à votre disposition pour organiser une présentation personnalisée.

Cordialement,

Yakoubi Yamina
Présidente TechForAll
contact@techforall-europe.org
+41 22 XXX XX XX`,
      variables: ['company', 'materials_list']
    },
    {
      id: 'logistic-coordination',
      name: 'Coordination logistique',
      subject: 'Coordination enlèvement matériel - {company}',
      template: `Bonjour {contact},

Suite à votre accord pour le don de matériel informatique, voici les détails pour la coordination logistique :

MATÉRIELS À COLLECTER
{materials_list}

INFORMATIONS LOGISTIQUES
📍 Adresse : {location}
📞 Contact sur site : {contact} - {phone}
📧 Email : {email}

PLANNING PROPOSÉ
Notre équipe Costa del Sol peut intervenir :
• Mardi 14h-17h
• Mercredi 9h-12h  
• Jeudi 14h-17h

Merci de confirmer le créneau qui vous convient.

L'équipe se présentera avec :
✓ Camion de transport sécurisé
✓ Matériel d'emballage professionnel
✓ Outils de destruction de données certifiés

Nous vous remercions pour votre engagement solidaire.

Cordialement,

Brahim Yakoubi
Responsable Logistique Costa del Sol
logistique@techforall-europe.org`,
      variables: ['contact', 'company', 'materials_list', 'location', 'phone', 'email']
    },
    {
      id: 'confirmation-reception',
      name: 'Confirmation réception',
      subject: 'Confirmation réception don - Reçu fiscal {company}',
      template: `Madame, Monsieur {contact},

Nous accusons réception du don de matériel informatique de votre entreprise {company}.

RÉCAPITULATIF DU DON
{materials_list}

VALEUR TOTALE ESTIMÉE
{total_value}€ (évaluation certifiée)

IMPACT SOCIAL
Votre don permettra d'équiper {beneficiaries} familles de pêcheurs et artisans en précarité, financer {training_hours}h de formation technique et soutenir {jobs_created} emplois locaux à Costa del Sol.

DÉDUCTION FISCALE
Un reçu fiscal sera émis sous 48h permettant une déduction de {tax_deduction}€ sur vos impôts (66% de la valeur du don).

SUIVI TRANSPARENT
Vous recevrez un rapport d'impact trimestriel avec photos et témoignages des bénéficiaires, détaillant l'utilisation concrète de votre don et son impact sur les communautés maritimes.

Nous vous remercions chaleureusement pour votre soutien à notre mission d'inclusion numérique.

Très cordialement,

Yakoubi Yamina
Présidente TechForAll
Reçu fiscal en pièce jointe`,
      variables: ['contact', 'company', 'materials_list', 'total_value', 'beneficiaries', 'training_hours', 'tax_deduction']
    }
  ];

  const addDonationItem = () => {
    if (currentItem.type && currentItem.brand && currentItem.model) {
      const newItem: DonationItem = {
        id: Date.now().toString(),
        type: currentItem.type!,
        brand: currentItem.brand!,
        model: currentItem.model!,
        quantity: currentItem.quantity || 1,
        unitValue: currentItem.unitValue || 0,
        location: currentItem.location || 'Paris',
        postalCode: currentItem.postalCode || '75001'
      };
      
      setDonationItems([...donationItems, newItem]);
      setCurrentItem({
        type: '',
        brand: '',
        model: '',
        quantity: 1,
        unitValue: 0,
        location: 'Paris',
        postalCode: '75001'
      });
    }
  };

  const generateEmail = () => {
    if (!selectedEmailType) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const emailType = emailTypes.find(e => e.id === selectedEmailType);
      if (emailType) {
        let email = emailType.template;
        
        // Replace variables
        email = email.replace(/{company}/g, companyInfo.name);
        email = email.replace(/{contact}/g, companyInfo.contact);
        email = email.replace(/{email}/g, companyInfo.email);
        email = email.replace(/{phone}/g, companyInfo.phone);
        email = email.replace(/{location}/g, `${currentItem.location} ${currentItem.postalCode}`);
        
        // Generate materials list
        const materialsList = donationItems.map(item => 
          `• ${item.quantity}x ${item.type} ${item.brand} ${item.model} (${item.unitValue}€/unité)`
        ).join('\n');
        email = email.replace(/{materials_list}/g, materialsList);
        
        // Calculate values
        const totalValue = donationItems.reduce((sum, item) => sum + (item.quantity * item.unitValue), 0);
        email = email.replace(/{total_value}/g, totalValue.toString());
        email = email.replace(/{tax_deduction}/g, Math.round(totalValue * 0.66).toString());
        email = email.replace(/{beneficiaries}/g, Math.ceil(donationItems.length / 2).toString());
        email = email.replace(/{training_hours}/g, (donationItems.length * 5).toString());
        email = email.replace(/{jobs_created}/g, Math.ceil(donationItems.length / 3).toString());
        
        setGeneratedEmail(email);
      }
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 p-4">
      
      {/* Mobile Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-xl flex items-center justify-center"
          >
            <Bot className="h-6 w-6 text-white" />
          </motion.div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Générateurs IA Responsables
            </h1>
            <p className="text-sm text-gray-600">Outils d'automatisation éthique</p>
          </div>
        </div>
        
        <div className="flex justify-center gap-2 flex-wrap">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            <Shield className="h-3 w-3 mr-1" />
            Éthique
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            <Zap className="h-3 w-3 mr-1" />
            Automatisation
          </Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            <Target className="h-3 w-3 mr-1" />
            Productivité
          </Badge>
        </div>
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="email-generator">Email IA</TabsTrigger>
          <TabsTrigger value="material-manager">Matériel</TabsTrigger>
          <TabsTrigger value="company-info">Entreprise</TabsTrigger>
        </TabsList>

        {/* Company Information */}
        <TabsContent value="company-info">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-blue-600" />
                  Informations Entreprise
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="company-name">Nom de l'entreprise</Label>
                  <Input
                    id="company-name"
                    value={companyInfo.name}
                    onChange={(e) => setCompanyInfo({...companyInfo, name: e.target.value})}
                    placeholder="TechCorp SAS"
                  />
                </div>
                
                <div>
                  <Label htmlFor="contact-name">Contact</Label>
                  <Input
                    id="contact-name"
                    value={companyInfo.contact}
                    onChange={(e) => setCompanyInfo({...companyInfo, contact: e.target.value})}
                    placeholder="Jean Dupont"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={companyInfo.email}
                    onChange={(e) => setCompanyInfo({...companyInfo, email: e.target.value})}
                    placeholder="contact@techcorp.fr"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    value={companyInfo.phone}
                    onChange={(e) => setCompanyInfo({...companyInfo, phone: e.target.value})}
                    placeholder="01 23 45 67 89"
                  />
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">Informations sauvegardées</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Ces données seront utilisées pour personnaliser les emails générés automatiquement.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Material Manager */}
        <TabsContent value="material-manager">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            
            {/* Add Material Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5 text-green-600" />
                  Matériel à donner
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="location">Ville</Label>
                    <Input
                      id="location"
                      value={currentItem.location}
                      onChange={(e) => setCurrentItem({...currentItem, location: e.target.value})}
                      placeholder="Paris"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="postal-code">Code postal</Label>
                    <Input
                      id="postal-code"
                      value={currentItem.postalCode}
                      onChange={(e) => setCurrentItem({...currentItem, postalCode: e.target.value})}
                      placeholder="75001"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="material-type">Type de matériel</Label>
                  <Select value={currentItem.type} onValueChange={(value) => setCurrentItem({...currentItem, type: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      {materialTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="brand">Marque</Label>
                  <Input
                    id="brand"
                    value={currentItem.brand}
                    onChange={(e) => setCurrentItem({...currentItem, brand: e.target.value})}
                    placeholder="Dell, HP, Lenovo..."
                  />
                </div>

                <div>
                  <Label htmlFor="model">Modèle</Label>
                  <Input
                    id="model"
                    value={currentItem.model}
                    onChange={(e) => setCurrentItem({...currentItem, model: e.target.value})}
                    placeholder="Latitude 5520"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="quantity">Quantité</Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      value={currentItem.quantity}
                      onChange={(e) => setCurrentItem({...currentItem, quantity: parseInt(e.target.value)})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="unit-value">Valeur unitaire (€)</Label>
                    <Input
                      id="unit-value"
                      type="number"
                      min="0"
                      value={currentItem.unitValue}
                      onChange={(e) => setCurrentItem({...currentItem, unitValue: parseFloat(e.target.value)})}
                    />
                  </div>
                </div>

                <Button 
                  onClick={addDonationItem}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={!currentItem.type || !currentItem.brand || !currentItem.model}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter le matériel
                </Button>
              </CardContent>
            </Card>

            {/* Materials List */}
            {donationItems.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-600" />
                    Matériels ajoutés ({donationItems.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {donationItems.map((item) => (
                      <div key={item.id} className="p-3 bg-gray-50 rounded-lg border">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <p className="font-medium">{item.quantity}x {item.type}</p>
                            <p className="text-sm text-gray-600">{item.brand} {item.model}</p>
                            <p className="text-xs text-gray-500">{item.location} {item.postalCode}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-green-600">{item.unitValue}€</p>
                            <p className="text-xs text-gray-500">par unité</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="pt-3 border-t bg-blue-50 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Valeur totale estimée:</span>
                        <span className="text-xl font-bold text-blue-600">
                          {donationItems.reduce((sum, item) => sum + (item.quantity * item.unitValue), 0)}€
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        Déduction fiscale possible: {Math.round(donationItems.reduce((sum, item) => sum + (item.quantity * item.unitValue), 0) * 0.66)}€
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

          </motion.div>
        </TabsContent>

        {/* Email Generator */}
        <TabsContent value="email-generator">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            
            {/* Email Type Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-600" />
                  Générateur d'Email IA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email-type">Type d'email</Label>
                  <Select value={selectedEmailType} onValueChange={setSelectedEmailType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Demande de don" />
                    </SelectTrigger>
                    <SelectContent>
                      {emailTypes.map(type => (
                        <SelectItem key={type.id} value={type.id}>{type.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-2">
                  <Button 
                    onClick={generateEmail}
                    disabled={!selectedEmailType || donationItems.length === 0 || isGenerating}
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                  >
                    {isGenerating ? (
                      <>
                        <Clock className="h-4 w-4 mr-2 animate-spin" />
                        Génération IA...
                      </>
                    ) : (
                      <>
                        <Bot className="h-4 w-4 mr-2" />
                        Générer l'email
                      </>
                    )}
                  </Button>
                </div>

                {donationItems.length === 0 && (
                  <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                    <p className="text-sm text-orange-800">
                      <ArrowRight className="h-4 w-4 mr-1 inline" />
                      Ajoutez d'abord du matériel dans l'onglet "Matériel"
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Generated Email */}
            {generatedEmail && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-green-600" />
                    Email généré
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono">
                      {generatedEmail}
                    </pre>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <FileText className="h-4 w-4 mr-2" />
                      Copier
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Send className="h-4 w-4 mr-2" />
                      Envoyer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

          </motion.div>
        </TabsContent>

      </Tabs>

      {/* Footer Integration */}
      <Card className="mt-8 bg-gradient-to-r from-green-100 to-blue-100 border border-green-200">
        <CardContent className="p-6 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Smartphone className="h-6 w-6 text-green-600" />
            <h3 className="text-xl font-bold text-green-800">Application TechForAll Mobile</h3>
          </div>
          <p className="text-green-700 mb-4">
            Cette application facilite la collecte de dons matériels pour éviter le gaspillage 
            et accompagner les familles dans le besoin vers l'inclusion numérique.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              onClick={() => window.location.href = '/techforall'}
              variant="outline"
              className="border-green-300 text-green-700"
            >
              <Building className="h-4 w-4 mr-2" />
              Association TechForAll
            </Button>
            <Button 
              onClick={() => window.location.href = '/simulateur-evasion'}
              variant="outline"
              className="border-blue-300 text-blue-700"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Simulateur d'Évasion
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}