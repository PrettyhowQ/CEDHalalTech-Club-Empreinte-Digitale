import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  CreditCard, 
  Shield, 
  Building2, 
  Car, 
  Home,
  Globe,
  Crown,
  Star,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

interface FamilyMember {
  id: string;
  name: string;
  role: string;
  location: string;
  accounts: {
    professional?: number;
    personal?: number;
    currency: string;
  };
  insurance: {
    coverage: number;
    type: string;
  };
  card: string;
  status: 'active' | 'pending' | 'setup';
  children?: FamilyMember[];
}

const familyMembers: FamilyMember[] = [
  {
    id: 'yamina',
    name: 'Yakoubi Yamina',
    role: 'Présidente & Fondatrice',
    location: 'Direction Générale',
    accounts: {
      professional: 2500000,
      personal: 0,
      currency: 'CHF'
    },
    insurance: {
      coverage: 5000000,
      type: 'Al-Aman Premium'
    },
    card: 'Royale Platinum Unlimited',
    status: 'active'
  },
  {
    id: 'aziz',
    name: 'Yakoubi Aziz',
    role: 'Responsable Logistique Suisse',
    location: 'Berne, Suisse',
    accounts: {
      professional: 250000,
      personal: 150000,
      currency: 'CHF'
    },
    insurance: {
      coverage: 800000,
      type: 'Al-Aman Famille'
    },
    card: 'Gold Business + Personal',
    status: 'active',
    children: [
      {
        id: 'aziz-family',
        name: 'Famille Aziz (Épouse + Enfants)',
        role: 'Famille Protégée',
        location: 'Berne, Suisse',
        accounts: {
          personal: 200000,
          currency: 'CHF'
        },
        insurance: {
          coverage: 400000,
          type: 'Protection Familiale'
        },
        card: 'Silver Familiales',
        status: 'active'
      }
    ]
  },
  {
    id: 'karim',
    name: 'Yakoubi Karim',
    role: 'Responsable Europe',
    location: 'Luxembourg',
    accounts: {
      professional: 200000,
      personal: 120000,
      currency: 'EUR'
    },
    insurance: {
      coverage: 750000,
      type: 'Al-Aman International'
    },
    card: 'Platinum Business Europe',
    status: 'active',
    children: [
      {
        id: 'karim-family',
        name: 'Famille Karim Complète',
        role: 'Famille Européenne',
        location: 'Luxembourg',
        accounts: {
          personal: 180000,
          currency: 'EUR'
        },
        insurance: {
          coverage: 500000,
          type: 'Protection Résidence'
        },
        card: 'Silver Premium',
        status: 'active'
      }
    ]
  },
  {
    id: 'farid',
    name: 'Yakoubi Farid',
    role: 'Directeur Garage Luxe',
    location: 'Dubaï, EAU',
    accounts: {
      professional: 500000,
      personal: 300000,
      currency: 'AED'
    },
    insurance: {
      coverage: 1000000,
      type: 'Premium Véhicules Luxe'
    },
    card: 'Business Platinum Dubaï',
    status: 'pending'
  }
];

export function FamilyBankingSystem() {
  const [selectedMember, setSelectedMember] = useState<FamilyMember | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  const totalPatrimony = familyMembers.reduce((total, member) => {
    const memberTotal = (member.accounts.professional || 0) + (member.accounts.personal || 0);
    const childrenTotal = member.children?.reduce((childTotal, child) => 
      childTotal + (child.accounts.personal || 0), 0) || 0;
    return total + memberTotal + childrenTotal;
  }, 0);

  const totalInsurance = familyMembers.reduce((total, member) => {
    const memberInsurance = member.insurance.coverage;
    const childrenInsurance = member.children?.reduce((childTotal, child) => 
      childTotal + child.insurance.coverage, 0) || 0;
    return total + memberInsurance + childrenInsurance;
  }, 0);

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('fr-CH', {
      style: 'currency',
      currency: currency === 'AED' ? 'USD' : currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* En-tête Système Familial */}
      <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-600 rounded-full">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl text-blue-800">Système Familial CED Bank</CardTitle>
                <p className="text-blue-600">Réseau Bancaire Yakoubi - Protection Complète</p>
              </div>
            </div>
            <Badge className="bg-green-600 text-white px-4 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              Système Actif
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg border border-blue-100">
              <div className="text-2xl font-bold text-blue-600">{familyMembers.length}</div>
              <div className="text-sm text-gray-600">Membres Principaux</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-green-100">
              <div className="text-2xl font-bold text-green-600">CHF {(totalPatrimony / 1000000).toFixed(1)}M</div>
              <div className="text-sm text-gray-600">Patrimoine Total</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-purple-100">
              <div className="text-2xl font-bold text-purple-600">CHF {(totalInsurance / 1000000).toFixed(1)}M</div>
              <div className="text-sm text-gray-600">Assurances Cumulées</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-orange-100">
              <div className="text-2xl font-bold text-orange-600">45+</div>
              <div className="text-sm text-gray-600">Personnes Protégées</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="branches">Branches Familiales</TabsTrigger>
          <TabsTrigger value="services">Services Premium</TabsTrigger>
          <TabsTrigger value="expansion">Expansion</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {familyMembers.map((member) => (
              <Card key={member.id} className="hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedMember(member)}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {member.name === 'Yakoubi Yamina' && <Crown className="h-5 w-5 text-yellow-600" />}
                      <h3 className="font-semibold">{member.name}</h3>
                    </div>
                    <Badge variant={member.status === 'active' ? 'default' : member.status === 'pending' ? 'secondary' : 'outline'}>
                      {member.status === 'active' ? 'Actif' : member.status === 'pending' ? 'En cours' : 'Configuration'}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Globe className="h-3 w-3" />
                    {member.location}
                  </p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Comptes:</span>
                    <span className="font-semibold">
                      {formatCurrency((member.accounts.professional || 0) + (member.accounts.personal || 0), member.accounts.currency)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Assurance:</span>
                    <span className="font-semibold text-green-600">
                      {formatCurrency(member.insurance.coverage, 'CHF')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Carte:</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{member.card}</span>
                  </div>
                  {member.children && (
                    <div className="pt-2 border-t">
                      <span className="text-xs text-gray-500">+ {member.children.length} membre(s) famille</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="branches" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-blue-600" />
                  Branche Suisse - Logistique
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Responsable:</span>
                  <span className="font-semibold">Yakoubi Aziz</span>
                </div>
                <div className="flex justify-between">
                  <span>Localisation:</span>
                  <span>Berne, Suisse</span>
                </div>
                <div className="flex justify-between">
                  <span>Patrimoine Branche:</span>
                  <span className="font-semibold text-green-600">CHF 600,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Protection Famille:</span>
                  <span className="font-semibold">CHF 1,200,000</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-purple-600" />
                  Branche Europe - Expansion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Responsable:</span>
                  <span className="font-semibold">Yakoubi Karim</span>
                </div>
                <div className="flex justify-between">
                  <span>Localisation:</span>
                  <span>Luxembourg</span>
                </div>
                <div className="flex justify-between">
                  <span>Patrimoine Branche:</span>
                  <span className="font-semibold text-green-600">EUR 500,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Protection Famille:</span>
                  <span className="font-semibold">EUR 1,250,000</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-orange-600" />
                  Branche Dubaï - Luxe Auto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Responsable:</span>
                  <span className="font-semibold">Yakoubi Farid</span>
                </div>
                <div className="flex justify-between">
                  <span>Localisation:</span>
                  <span>Dubaï, EAU</span>
                </div>
                <div className="flex justify-between">
                  <span>Patrimoine Prévu:</span>
                  <span className="font-semibold text-green-600">AED 800,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Statut:</span>
                  <Badge variant="secondary">En développement</Badge>
                </div>
                <div className="text-sm text-gray-600">
                  Spécialité: Ferrari, Lamborghini, Rolls-Royce, Bentley
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-600" />
                  Réseau Familial Élargi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Neveux/Nièces:</span>
                  <span className="font-semibold">15+ membres</span>
                </div>
                <div className="flex justify-between">
                  <span>Petits-enfants:</span>
                  <span className="font-semibold">25+ enfants</span>
                </div>
                <div className="flex justify-between">
                  <span>Protection Individuelle:</span>
                  <span className="font-semibold">CHF 75,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Éducation Garantie:</span>
                  <span className="font-semibold">CHF 25,000</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="services" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  Assurances Al-Aman Takaful
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Home className="h-4 w-4 text-green-600" />
                    <span className="font-medium">Assurance Habitation</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">
                    Résidences principales et secondaires - Couverture totale
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Car className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">Assurance Automobile</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">
                    Véhicules personnels et professionnels - Assistance 24/7
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-purple-600" />
                    <span className="font-medium">Assurance Vie & Santé</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">
                    Couverture internationale - Protection revenus
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-green-600" />
                  Services Bancaires Premium
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-600" />
                    <span className="font-medium">Gestion Centralisée</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">
                    Supervision Yamina - Virements familiaux gratuits
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">Investissements Halal</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">
                    Portefeuilles diversifiés - Conformité Sharia
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-green-600" />
                    <span className="font-medium">Conseil Patrimonial</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">
                    Conseillers dédiés - Planification succession
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="expansion" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Plan d'Expansion Familiale</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-600">Implantations Actuelles</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Suisse - Siège Berne (Aziz)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Luxembourg - Bureau Europe (Karim)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-orange-600" />
                      <span>Dubaï - Garage Luxe (Farid) - En cours</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-600">Implantations Futures</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-blue-600" />
                      <span>France - Bureau Paris</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-blue-600" />
                      <span>Allemagne - Expansion DACH</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-blue-600" />
                      <span>Arabie Saoudite - Partenariats</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-blue-600" />
                      <span>Maroc - Retour origines</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-3">Vision 2025-2030</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">Empire</div>
                    <div className="text-sm text-gray-600">Multi-continental</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">Transmission</div>
                    <div className="text-sm text-gray-600">Générationnelle</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">Leadership</div>
                    <div className="text-sm text-gray-600">Bancaire Islamique</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Actions Rapides */}
      <Card>
        <CardHeader>
          <CardTitle>Actions Familiales Rapides</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button className="h-12 flex-col gap-1">
              <Users className="h-4 w-4" />
              <span className="text-xs">Nouveau Membre</span>
            </Button>
            <Button variant="outline" className="h-12 flex-col gap-1">
              <Shield className="h-4 w-4" />
              <span className="text-xs">Assurance</span>
            </Button>
            <Button variant="outline" className="h-12 flex-col gap-1">
              <CreditCard className="h-4 w-4" />
              <span className="text-xs">Cartes</span>
            </Button>
            <Button variant="outline" className="h-12 flex-col gap-1">
              <Building2 className="h-4 w-4" />
              <span className="text-xs">Rapport Familial</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}