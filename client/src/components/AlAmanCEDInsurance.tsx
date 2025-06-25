import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  Heart, 
  Home, 
  Car, 
  Plane, 
  Building, 
  Users, 
  FileText, 
  CheckCircle, 
  Star,
  Globe,
  Phone,
  Mail,
  MapPin,
  Calculator,
  CreditCard,
  Clock,
  AlertTriangle,
  Banknote,
  TrendingUp,
  Award
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface InsurancePolicy {
  id: string;
  type: 'family' | 'health' | 'property' | 'business' | 'travel' | 'life';
  name: string;
  description: string;
  monthlyPremium: number;
  coverage: number;
  features: string[];
  halalCompliant: boolean;
  status: 'active' | 'pending' | 'draft';
  startDate: Date;
  beneficiaries: string[];
}

interface FamilyMember {
  id: string;
  name: string;
  relationship: string;
  age: number;
  healthStatus: 'excellent' | 'good' | 'fair' | 'needs_attention';
  coverage: string[];
  premium: number;
}

export function AlAmanCEDInsurance() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPolicy, setSelectedPolicy] = useState<string>('');
  const { toast } = useToast();

  const familyMembers: FamilyMember[] = [
    {
      id: 'yamina',
      name: 'Yakoubi Yamina',
      relationship: 'Assurée principale',
      age: 45,
      healthStatus: 'excellent',
      coverage: ['Santé Premium', 'Vie', 'Responsabilité civile', 'Protection juridique'],
      premium: 850
    },
    {
      id: 'souheila',
      name: 'Souheila Yakoubi-Ozel',
      relationship: 'Fille - Héritière Santé',
      age: 25,
      healthStatus: 'excellent',
      coverage: ['Santé Premium', 'Responsabilité professionnelle', 'Maternité'],
      premium: 420
    },
    {
      id: 'hanae',
      name: 'Hanaé-Denise Ozel',
      relationship: 'Fille - Héritière Juridique',
      age: 22,
      healthStatus: 'excellent',
      coverage: ['Santé Premium', 'Études supérieures', 'Responsabilité civile'],
      premium: 380
    },
    {
      id: 'brahim',
      name: 'Brahim Yakoubi',
      relationship: 'Gestionnaire TechForAll',
      age: 35,
      healthStatus: 'good',
      coverage: ['Santé Standard', 'Accidents du travail', 'Costa del Sol'],
      premium: 520
    }
  ];

  const insurancePolicies: InsurancePolicy[] = [
    {
      id: 'family-premium',
      type: 'family',
      name: 'Al-Aman CED Famille Premium',
      description: 'Couverture complète pour toute la famille Yakoubi',
      monthlyPremium: 2170,
      coverage: 5000000,
      features: [
        'Santé illimitée monde entier',
        'Couverture maternité et pédiatrie',
        'Médecine alternative halal',
        'Urgences 24/7 avec hélicoptère',
        'Soins dentaires et optique premium',
        'Psychologie islamique',
        'Check-ups annuels complets',
        'Pharmacie halal certifiée'
      ],
      halalCompliant: true,
      status: 'active',
      startDate: new Date('2025-01-01'),
      beneficiaries: ['Yakoubi Yamina', 'Souheila Yakoubi-Ozel', 'Hanaé-Denise Ozel']
    },
    {
      id: 'property-comprehensive',
      type: 'property',
      name: 'Al-Aman CED Patrimoine',
      description: 'Protection complète des biens immobiliers et mobiliers',
      monthlyPremium: 1200,
      coverage: 15000000,
      features: [
        'Résidences principales et secondaires',
        'Biens mobiliers de luxe',
        'Œuvres d\'art et bijoux',
        'Équipements informatiques CED',
        'Responsabilité civile propriétaire',
        'Protection juridique immobilière',
        'Catastrophes naturelles',
        'Vol et vandalisme'
      ],
      halalCompliant: true,
      status: 'active',
      startDate: new Date('2025-01-01'),
      beneficiaries: ['Famille Yakoubi']
    },
    {
      id: 'business-ced',
      type: 'business',
      name: 'Al-Aman CED Entreprise',
      description: 'Couverture professionnelle écosystème CED complet',
      monthlyPremium: 2800,
      coverage: 25000000,
      features: [
        'Responsabilité civile professionnelle',
        'Cyber-sécurité et données',
        'Interruption d\'activité',
        'Équipements et matériels',
        'Responsabilité dirigeant',
        'Protection juridique business',
        'Employés et équipes',
        'Propriété intellectuelle'
      ],
      halalCompliant: true,
      status: 'active',
      startDate: new Date('2025-01-01'),
      beneficiaries: ['Club Empreinte Digitale SA']
    },
    {
      id: 'travel-vip',
      type: 'travel',
      name: 'Al-Aman CED Voyage VIP',
      description: 'Assurance voyage haut de gamme mondiale',
      monthlyPremium: 450,
      coverage: 2000000,
      features: [
        'Monde entier sans limite',
        'Rapatriement médical',
        'Annulation voyage business',
        'Bagages et effets personnels',
        'Responsabilité civile étrangère',
        'Assistance juridique internationale',
        'Sports et loisirs',
        'Hajj et Omra spécialisée'
      ],
      halalCompliant: true,
      status: 'active',
      startDate: new Date('2025-01-01'),
      beneficiaries: ['Famille Yakoubi']
    },
    {
      id: 'life-legacy',
      type: 'life',
      name: 'Al-Aman CED Héritage',
      description: 'Assurance vie et transmission patrimoniale islamique',
      monthlyPremium: 1800,
      coverage: 8000000,
      features: [
        'Capital décès famille',
        'Rente éducation filles',
        'Succession islamique planifiée',
        'Protection créanciers',
        'Fiscalité optimisée',
        'Gestion patrimoine',
        'Donation vivant',
        'Waqf et fondation'
      ],
      halalCompliant: true,
      status: 'active',
      startDate: new Date('2025-01-01'),
      beneficiaries: ['Souheila Yakoubi-Ozel', 'Hanaé-Denise Ozel']
    }
  ];

  const totalMonthlyPremium = insurancePolicies.reduce((acc, policy) => acc + policy.monthlyPremium, 0);
  const totalCoverage = insurancePolicies.reduce((acc, policy) => acc + policy.coverage, 0);

  const handlePolicyUpdate = (policyId: string) => {
    toast({
      title: "Police mise à jour",
      description: `Police ${policyId} mise à jour avec succès`,
    });
  };

  const handleClaimSubmission = () => {
    toast({
      title: "Sinistre déclaré",
      description: "Votre déclaration a été transmise. Un expert vous contactera sous 2h.",
    });
  };

  const getHealthStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-100 text-green-800';
      case 'good': return 'bg-blue-100 text-blue-800';
      case 'fair': return 'bg-yellow-100 text-yellow-800';
      case 'needs_attention': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPolicyIcon = (type: string) => {
    switch (type) {
      case 'family': return <Heart className="h-5 w-5" />;
      case 'health': return <Shield className="h-5 w-5" />;
      case 'property': return <Home className="h-5 w-5" />;
      case 'business': return <Building className="h-5 w-5" />;
      case 'travel': return <Plane className="h-5 w-5" />;
      case 'life': return <Star className="h-5 w-5" />;
      default: return <Shield className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Al-Aman CED */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-emerald-800">Al-Aman CED</h1>
              <p className="text-emerald-600">Assurance Takaful Islamique Premium</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-sm">
            <Badge className="bg-green-500 text-white">100% Halal</Badge>
            <Badge className="bg-blue-500 text-white">AAOIFI Certifié</Badge>
            <Badge className="bg-purple-500 text-white">Suisse Premium</Badge>
            <Badge className="bg-gold-500 text-white">5★ Service</Badge>
          </div>
        </div>

        {/* Vue d'ensemble rapide */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="h-8 w-8 text-emerald-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-emerald-600">{insurancePolicies.length}</div>
              <div className="text-sm text-gray-600">Polices Actives</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Banknote className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">
                {(totalCoverage / 1000000).toFixed(0)}M CHF
              </div>
              <div className="text-sm text-gray-600">Couverture Totale</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <CreditCard className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">
                {totalMonthlyPremium.toLocaleString()} CHF
              </div>
              <div className="text-sm text-gray-600">Prime Mensuelle</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-600">{familyMembers.length}</div>
              <div className="text-sm text-gray-600">Bénéficiaires</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="policies">Mes Polices</TabsTrigger>
            <TabsTrigger value="family">Famille</TabsTrigger>
            <TabsTrigger value="claims">Sinistres</TabsTrigger>
            <TabsTrigger value="contact">Contact VIP</TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Résumé de Protection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span>Couverture Santé Famille</span>
                      <Badge className="bg-green-500">Active</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span>Protection Patrimoine</span>
                      <Badge className="bg-blue-500">Active</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span>Assurance Entreprise CED</span>
                      <Badge className="bg-purple-500">Active</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                      <span>Voyage et Déplacements</span>
                      <Badge className="bg-yellow-500">Active</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Avantages Premium
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">Conseiller dédié 24/7</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">Traitement prioritaire sinistres</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">Médecine douce halal</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">Rapatriement jet privé</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">Concierge médical</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Actions rapides */}
            <Card>
              <CardHeader>
                <CardTitle>Actions Rapides</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="h-16 flex flex-col gap-2" onClick={handleClaimSubmission}>
                    <AlertTriangle className="h-5 w-5" />
                    Déclarer un Sinistre
                  </Button>
                  <Button variant="outline" className="h-16 flex flex-col gap-2">
                    <Calculator className="h-5 w-5" />
                    Simuler Extension
                  </Button>
                  <Button variant="outline" className="h-16 flex flex-col gap-2">
                    <Phone className="h-5 w-5" />
                    Urgence Médicale
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mes Polices */}
          <TabsContent value="policies" className="space-y-6">
            {insurancePolicies.map((policy) => (
              <Card key={policy.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-blue-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
                        {getPolicyIcon(policy.type)}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{policy.name}</CardTitle>
                        <p className="text-sm text-gray-600">{policy.description}</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">{policy.status}</Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Détails Financiers</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Prime mensuelle:</span>
                          <span className="font-medium">{policy.monthlyPremium.toLocaleString()} CHF</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Couverture maximale:</span>
                          <span className="font-medium">{(policy.coverage / 1000000).toFixed(1)}M CHF</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Début contrat:</span>
                          <span className="font-medium">{policy.startDate.toLocaleDateString('fr-CH')}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Garanties Incluses</h4>
                      <div className="space-y-1">
                        {policy.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {policy.features.length > 4 && (
                          <div className="text-sm text-gray-500">
                            +{policy.features.length - 4} autres garanties
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Bénéficiaires</h4>
                      <div className="space-y-2">
                        {policy.beneficiaries.map((beneficiary, index) => (
                          <div key={index} className="text-sm p-2 bg-gray-50 rounded">
                            {beneficiary}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button size="sm" onClick={() => handlePolicyUpdate(policy.id)}>
                      Modifier Police
                    </Button>
                    <Button size="sm" variant="outline">
                      Télécharger Contrat
                    </Button>
                    <Button size="sm" variant="outline">
                      Historique Sinistres
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Famille */}
          <TabsContent value="family" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {familyMembers.map((member) => (
                <Card key={member.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{member.name}</CardTitle>
                          <p className="text-sm text-gray-600">{member.relationship}</p>
                        </div>
                      </div>
                      <Badge className={getHealthStatusColor(member.healthStatus)}>
                        {member.healthStatus}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Âge:</span>
                          <div className="font-medium">{member.age} ans</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Prime mensuelle:</span>
                          <div className="font-medium">{member.premium} CHF</div>
                        </div>
                      </div>

                      <div>
                        <span className="text-gray-500 text-sm">Couvertures actives:</span>
                        <div className="mt-2 space-y-1">
                          {member.coverage.map((cover, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm">{cover}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          Carnet Santé
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          Rendez-vous
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Sinistres */}
          <TabsContent value="claims" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Déclarer un Nouveau Sinistre
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Type de sinistre</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner le type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="health">Santé / Médical</SelectItem>
                        <SelectItem value="property">Dommages matériels</SelectItem>
                        <SelectItem value="travel">Voyage / Annulation</SelectItem>
                        <SelectItem value="liability">Responsabilité civile</SelectItem>
                        <SelectItem value="business">Professionnel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Date du sinistre</Label>
                    <Input type="date" />
                  </div>
                </div>
                
                <div>
                  <Label>Description détaillée</Label>
                  <textarea 
                    className="w-full p-3 border rounded-lg" 
                    rows={4}
                    placeholder="Décrivez les circonstances du sinistre..."
                  />
                </div>

                <div className="flex gap-3">
                  <Button onClick={handleClaimSubmission}>
                    Déclarer le Sinistre
                  </Button>
                  <Button variant="outline">
                    Joindre Documents
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Historique des Sinistres</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Aucun sinistre déclaré</p>
                  <p className="text-sm">Félicitations pour votre excellent dossier !</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact VIP */}
          <TabsContent value="contact" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Urgences 24/7
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start text-red-600 bg-red-50 hover:bg-red-100">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    URGENCE MÉDICALE: +41 800 XXX XXX
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    Assistance voyage: +41 800 XXX XXX
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Shield className="h-4 w-4 mr-2" />
                    Sinistres urgents: +41 800 XXX XXX
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    Conseiller VIP Dédié
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-lg">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Ahmed Al-Mansouri</h4>
                      <p className="text-sm text-gray-600">Conseiller Senior Famille Yakoubi</p>
                      <p className="text-sm text-emerald-600">Disponible 8h-20h, 7j/7</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span>+41 22 XXX XX XX (ligne directe)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span>ahmed.almansouri@alaman-ced.ch</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>Bureau Genève - Rue du Rhône 45</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Réseau International Al-Aman CED
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-600">Suisse</h4>
                      <p className="text-sm text-gray-600">Siège social Genève</p>
                      <p className="text-sm">+41 22 XXX XX XX</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-600">Émirats Arabes Unis</h4>
                      <p className="text-sm text-gray-600">Bureau Dubaï</p>
                      <p className="text-sm">+971 4 XXX XXXX</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-600">Arabie Saoudite</h4>
                      <p className="text-sm text-gray-600">Bureau Riyad</p>
                      <p className="text-sm">+966 11 XXX XXXX</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer avec protection Yakoubi Yamina */}
      <div className="mt-16 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
        <div className="max-w-4xl mx-auto">
          <p className="mb-2">
            © 2025 Al-Aman CED Takaful - Yakoubi Yamina, Fondatrice et Dirigeante Unique
          </p>
          <p className="mb-2">
            Assurance Islamique Premium - 100% Conforme Sharia - AAOIFI Certifié
          </p>
          <p>
            Siège social: Genève, Suisse | Licences: FINMA, DIFC, SAMA | Tous droits réservés
          </p>
          <p className="mt-2 text-red-500 font-medium">
            🔒 Propriété intellectuelle exclusive Yakoubi Yamina - Reproduction strictement interdite
          </p>
        </div>
      </div>
    </div>
  );
}