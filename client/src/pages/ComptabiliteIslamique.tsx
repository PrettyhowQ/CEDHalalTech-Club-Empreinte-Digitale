import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calculator, 
  Building2, 
  FileText, 
  TrendingUp, 
  Shield, 
  Heart,
  DollarSign,
  Calendar,
  Users,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  Building
} from 'lucide-react';

export default function ComptabiliteIslamique() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Données exemples pour démonstration
  const statsEntreprises = {
    total: 15,
    conformes: 14,
    auditEnCours: 1,
    zakatDue: '125,750.00'
  };

  const dernieresTransactions = [
    {
      id: 1,
      numero: 'TXN-2025-001',
      entreprise: 'Halal Market Geneva',
      montant: '15,500.00',
      devise: 'CHF',
      type: 'Murabaha',
      statut: 'halal',
      date: '2025-01-02'
    },
    {
      id: 2,
      numero: 'TXN-2025-002',
      entreprise: 'Islamic Finance Consulting',
      montant: '8,750.00',
      devise: 'CHF',
      type: 'Qard Hassan',
      statut: 'halal',
      date: '2025-01-02'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-emerald-800 mb-4 flex items-center justify-center gap-3">
            <Building className="h-12 w-12" />
            Comptabilité Islamique CED
          </h1>
          <p className="text-xl text-emerald-600">
            Système de gestion comptable 100% conforme à la Sharia
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Basé sur les 4 sources islamiques : Coran • Sunna • Ijmâ' • Qiyâs
          </p>
        </div>

        {/* Navigation par onglets */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="dashboard">Tableau de Bord</TabsTrigger>
            <TabsTrigger value="entreprises">Entreprises</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="zakat">Zakat</TabsTrigger>
            <TabsTrigger value="contrats">Contrats</TabsTrigger>
            <TabsTrigger value="audit">Audit Sharia</TabsTrigger>
          </TabsList>

          {/* Tableau de bord */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <Card className="bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Entreprises</p>
                      <p className="text-3xl font-bold text-emerald-700">{statsEntreprises.total}</p>
                    </div>
                    <Building2 className="h-8 w-8 text-emerald-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Conformes Sharia</p>
                      <p className="text-3xl font-bold text-green-700">{statsEntreprises.conformes}</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Audit en Cours</p>
                      <p className="text-3xl font-bold text-orange-700">{statsEntreprises.auditEnCours}</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Zakat Due (CHF)</p>
                      <p className="text-3xl font-bold text-purple-700">{statsEntreprises.zakatDue}</p>
                    </div>
                    <Heart className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Dernières transactions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Dernières Transactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dernieresTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="bg-green-100 text-green-800">
                            {transaction.numero}
                          </Badge>
                          <span className="font-medium">{transaction.entreprise}</span>
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                          <span>Type: {transaction.type}</span>
                          <span>Date: {transaction.date}</span>
                          <Badge className="bg-emerald-100 text-emerald-800">
                            {transaction.statut}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">{transaction.montant} {transaction.devise}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gestion des entreprises */}
          <TabsContent value="entreprises" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    Entreprises Clientes
                  </span>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    + Nouvelle Entreprise
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div className="space-y-4">
                    <Label htmlFor="nom">Nom de l'entreprise</Label>
                    <Input 
                      id="nom" 
                      placeholder="Ex: Halal Market Geneva"
                      className="border-emerald-200 focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="nomArabe">Nom en arabe (optionnel)</Label>
                    <Input 
                      id="nomArabe" 
                      placeholder="الاسم بالعربية"
                      className="border-emerald-200 focus:border-emerald-500 text-right"
                      dir="rtl"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="typeActivite">Type d'activité</Label>
                    <Select>
                      <SelectTrigger className="border-emerald-200 focus:border-emerald-500">
                        <SelectValue placeholder="Sélectionner le type d'activité" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="alimentation_halal">Alimentation Halal</SelectItem>
                        <SelectItem value="finance_islamique">Finance Islamique</SelectItem>
                        <SelectItem value="education">Éducation</SelectItem>
                        <SelectItem value="textile_halal">Textile Halal</SelectItem>
                        <SelectItem value="cosmetics_halal">Cosmétiques Halal</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="commerce">Commerce</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="devise">Devise principale</Label>
                    <Select>
                      <SelectTrigger className="border-emerald-200 focus:border-emerald-500">
                        <SelectValue placeholder="Sélectionner la devise" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CHF">CHF - Franc Suisse</SelectItem>
                        <SelectItem value="EUR">EUR - Euro</SelectItem>
                        <SelectItem value="USD">USD - Dollar US</SelectItem>
                        <SelectItem value="AED">AED - Dirham Émirati</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="contact@entreprise.com"
                      className="border-emerald-200 focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input 
                      id="telephone" 
                      placeholder="+41 22 123 45 67"
                      className="border-emerald-200 focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-4 md:col-span-2">
                    <Label htmlFor="adresse">Adresse complète</Label>
                    <Textarea 
                      id="adresse" 
                      placeholder="Adresse, ville, pays"
                      className="border-emerald-200 focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="certification">Certification</Label>
                    <Select>
                      <SelectTrigger className="border-emerald-200 focus:border-emerald-500">
                        <SelectValue placeholder="Type de certification" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="certifie_halal">Certifié Halal</SelectItem>
                        <SelectItem value="conforme_sharia">Conforme Sharia</SelectItem>
                        <SelectItem value="aaoifi_compliant">AAOIFI Compliant</SelectItem>
                        <SelectItem value="en_cours">En cours de certification</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="statutShahadah">Statut Shahadah</Label>
                    <Select>
                      <SelectTrigger className="border-emerald-200 focus:border-emerald-500">
                        <SelectValue placeholder="Statut musulman" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="confirme">Confirmé Musulman</SelectItem>
                        <SelectItem value="en_attente">En attente de confirmation</SelectItem>
                        <SelectItem value="non_musulman">Non-musulman</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mt-6 flex gap-4">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Enregistrer
                  </Button>
                  <Button variant="outline">
                    Annuler
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Autres onglets - interfaces simplifiées */}
          <TabsContent value="transactions">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Transactions Comptables
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-500 py-8">
                  Interface de gestion des transactions en développement...
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="zakat">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Calcul de Zakat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-500 py-8">
                  Calculateur de Zakat automatique en développement...
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contrats">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Contrats Islamiques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-500 py-8">
                  Gestion des contrats Murabaha, Ijara, Musharaka en développement...
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audit">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Audit de Conformité Sharia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-500 py-8">
                  Système d'audit automatique en développement...
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-emerald-200 text-center text-sm text-emerald-600">
          <p className="mb-2">© 2025 Club Empreinte Digitale - Yakoubi Yamina</p>
          <p className="mb-2">🕌 Système comptable 100% conforme aux principes islamiques</p>
          <p className="text-xs text-gray-500">
            Certifié selon les 4 sources islamiques authentiques : Coran, Sunna, Ijmâ', Qiyâs
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Validation par 150+ savants islamiques - Standards AAOIFI/IFSB
          </p>
        </div>

      </div>
    </div>
  );
}