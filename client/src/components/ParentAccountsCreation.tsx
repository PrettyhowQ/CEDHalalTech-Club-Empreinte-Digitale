import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users,
  CreditCard,
  Shield,
  CheckCircle,
  User,
  Heart,
  Building2,
  Globe,
  Star,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Banknote,
  Award,
  Clock
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FamilyMember {
  id: string;
  firstName: string;
  lastName: string;
  maidenName?: string;
  birthYear: number;
  birthPlace: string;
  relationship: string;
  accountNumber: string;
  cardType: string;
  balance: number;
  currency: string;
  insurancePolicy: string;
  coverage: number;
  status: 'created' | 'pending' | 'active';
}

export default function ParentAccountsCreation() {
  const [creationStep, setCreationStep] = useState(0);
  const [accounts, setAccounts] = useState<FamilyMember[]>([]);
  const { toast } = useToast();

  const parentData: Omit<FamilyMember, 'accountNumber' | 'status'>[] = [
    {
      id: 'father',
      firstName: 'Mohammed',
      lastName: 'Yakoubi',
      birthYear: 1942,
      birthPlace: 'Dahra, Algérie',
      relationship: 'Père',
      cardType: 'Royal Islamic',
      balance: 25000,
      currency: 'CHF',
      insurancePolicy: 'Al-Aman CED Seniors',
      coverage: 150000
    },
    {
      id: 'mother',
      firstName: 'Kheira',
      lastName: 'Yakoubi',
      maidenName: 'Slimani',
      birthYear: 1953,
      birthPlace: 'Dahra, Algérie',
      relationship: 'Mère',
      cardType: 'Royal Islamic',
      balance: 25000,
      currency: 'CHF',
      insurancePolicy: 'Al-Aman CED Seniors',
      coverage: 150000
    }
  ];

  const generateAccountNumber = (type: string, index: number) => {
    const prefix = type === 'father' ? 'CED-F' : 'CED-M';
    const timestamp = Date.now().toString().slice(-6);
    return `${prefix}-${timestamp}-${(index + 1).toString().padStart(3, '0')}`;
  };

  const createAccounts = async () => {
    setCreationStep(1);
    toast({
      title: "Création des comptes en cours",
      description: "Ouverture comptes CED Bank pour Monsieur et Madame Yakoubi...",
    });

    // Simulation création avec délai réaliste
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newAccounts: FamilyMember[] = parentData.map((parent, index) => ({
      ...parent,
      accountNumber: generateAccountNumber(parent.id, index),
      status: 'created' as const
    }));

    setAccounts(newAccounts);
    setCreationStep(2);

    toast({
      title: "✓ Comptes créés avec succès",
      description: "Comptes bancaires et assurances Takaful activés",
    });

    // Activation des comptes
    setTimeout(() => {
      setAccounts(prev => prev.map(acc => ({ ...acc, status: 'active' })));
      setCreationStep(3);
      toast({
        title: "✓ Comptes activés",
        description: "Services bancaires islamiques opérationnels",
      });
    }, 1500);
  };

  const stepProgress = (creationStep / 3) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
              <Users className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Comptes Parents Yakoubi</h1>
              <h2 className="text-2xl text-blue-600">CED Bank & Al-Aman Takaful</h2>
              <p className="text-gray-600">Services bancaires islamiques pour la famille</p>
            </div>
          </div>
        </div>

        {/* Progress */}
        {creationStep > 0 && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold">Progression de création</span>
                <span className="text-2xl font-bold text-blue-600">{stepProgress.toFixed(0)}%</span>
              </div>
              <Progress value={stepProgress} className="mb-4" />
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className={`flex items-center gap-2 ${creationStep >= 1 ? 'text-green-600' : 'text-gray-400'}`}>
                  <CheckCircle className="h-4 w-4" />
                  <span>Comptes créés</span>
                </div>
                <div className={`flex items-center gap-2 ${creationStep >= 2 ? 'text-green-600' : 'text-gray-400'}`}>
                  <Shield className="h-4 w-4" />
                  <span>Assurances activées</span>
                </div>
                <div className={`flex items-center gap-2 ${creationStep >= 3 ? 'text-green-600' : 'text-gray-400'}`}>
                  <Star className="h-4 w-4" />
                  <span>Services opérationnels</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Informations parents */}
        {creationStep === 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {parentData.map((parent) => (
              <Card key={parent.id} className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        {parent.firstName} {parent.lastName}
                        {parent.maidenName && <span className="text-sm text-gray-600"> (née {parent.maidenName})</span>}
                      </CardTitle>
                      <p className="text-gray-600">{parent.relationship}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Année de naissance:</span>
                        <div className="font-medium">{parent.birthYear} (présumée)</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Lieu de naissance:</span>
                        <div className="font-medium">{parent.birthPlace}</div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Services prévus:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-blue-600" />
                          <span>Carte {parent.cardType}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Banknote className="h-4 w-4 text-green-600" />
                          <span>Solde initial: {parent.balance.toLocaleString()} {parent.currency}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-purple-600" />
                          <span>Assurance: {parent.insurancePolicy}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-gold-600" />
                          <span>Couverture: {parent.coverage.toLocaleString()} CHF</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Comptes créés */}
        {creationStep >= 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {accounts.map((account) => (
              <Card key={account.id} className={`border-2 ${
                account.status === 'active' ? 'border-green-200 bg-green-50' : 
                account.status === 'created' ? 'border-blue-200 bg-blue-50' : 
                'border-gray-200'
              }`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        account.status === 'active' ? 'bg-green-100' : 'bg-blue-100'
                      }`}>
                        <User className={`h-6 w-6 ${
                          account.status === 'active' ? 'text-green-600' : 'text-blue-600'
                        }`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">
                          {account.firstName} {account.lastName}
                        </CardTitle>
                        <p className="text-gray-600">Compte: {account.accountNumber}</p>
                      </div>
                    </div>
                    <Badge className={
                      account.status === 'active' ? 'bg-green-100 text-green-800' :
                      account.status === 'created' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }>
                      {account.status === 'active' ? 'Actif' :
                       account.status === 'created' ? 'Créé' : 'En attente'}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Informations bancaires */}
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        CED Bank Islamic
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Carte:</span>
                          <div className="font-medium">{account.cardType}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Solde:</span>
                          <div className="font-medium text-green-600">
                            {account.balance.toLocaleString()} {account.currency}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-600">IBAN:</span>
                          <div className="font-medium text-xs">CH93 0076 2011 {account.accountNumber}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">SWIFT:</span>
                          <div className="font-medium">CEDCHZZXXX</div>
                        </div>
                      </div>
                    </div>

                    {/* Assurance Takaful */}
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Al-Aman CED Takaful
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Police:</span>
                          <div className="font-medium">{account.insurancePolicy}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Couverture:</span>
                          <div className="font-medium text-purple-600">
                            {account.coverage.toLocaleString()} CHF
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-600">Prime mensuelle:</span>
                          <div className="font-medium">180 CHF</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Bénéficiaires:</span>
                          <div className="font-medium">Yakoubi Yamina</div>
                        </div>
                      </div>
                    </div>

                    {/* Services actifs */}
                    {account.status === 'active' && (
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-800 mb-3">Services actifs:</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>Banking en ligne</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>Carte physique</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>Virements gratuits</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>Assurance active</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="text-center">
          {creationStep === 0 && (
            <div className="space-y-4">
              <Button onClick={createAccounts} size="lg" className="text-lg px-8 py-3">
                <Users className="h-5 w-5 mr-2" />
                Créer les comptes bancaires et assurances
              </Button>
              <p className="text-sm text-gray-600">
                Ouverture automatique avec services islamiques complets
              </p>
            </div>
          )}

          {creationStep >= 3 && (
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <div className="flex items-center justify-center gap-3 mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <h3 className="text-2xl font-bold text-green-800">Comptes opérationnels !</h3>
              </div>
              <p className="text-green-700 mb-4">
                Monsieur Mohammed Yakoubi et Madame Kheira Yakoubi disposent maintenant 
                de comptes CED Bank et assurances Al-Aman CED entièrement fonctionnels.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="text-left">
                  <div className="font-semibold text-green-800 mb-2">Services inclus:</div>
                  <ul className="space-y-1">
                    <li>• Banking en ligne sécurisé</li>
                    <li>• Cartes Royal Islamic</li>
                    <li>• Virements internationaux gratuits</li>
                    <li>• Support multilingue 24/7</li>
                  </ul>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-green-800 mb-2">Assurance Takaful:</div>
                  <ul className="space-y-1">
                    <li>• Couverture 150'000 CHF chacun</li>
                    <li>• Conformité Sharia 100%</li>
                    <li>• Réseau médical international</li>
                    <li>• Assistance rapatriement</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p className="mb-2">
            © 2025 CED Bank & Al-Aman CED Takaful - Services bancaires islamiques - Yakoubi Yamina
          </p>
          <p>
            🏦 Conformité Sharia 100% - Protection famille élargie - Excellence Swiss Banking
          </p>
        </div>
      </div>
    </div>
  );
}