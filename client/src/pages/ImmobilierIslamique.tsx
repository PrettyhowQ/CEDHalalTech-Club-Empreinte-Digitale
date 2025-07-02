import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Home, 
  Building2, 
  TrendingUp, 
  Calculator, 
  FileText, 
  Shield,
  MapPin,
  DollarSign,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Eye,
  PlusCircle,
  Search,
  Filter,
  Camera,
  Wrench,
  Users
} from 'lucide-react';

export default function ImmobilierIslamique() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Données exemples pour démonstration
  const statsImmobilier = {
    totalProprietes: 25,
    valeursPortefeuille: '15,750,000.00',
    proprietesPour_location: 8,
    proprietesPour_vente: 17,
    revenus_mensuels: '45,500.00',
    zakatDue: '35,250.00'
  };

  const proprietesRecentes = [
    {
      id: 1,
      reference: 'IMM-2025-001',
      type: 'Villa',
      adresse: 'Chemin des Roses 15, Genève',
      prixAchat: '2,850,000.00',
      prixVente: '3,200,000.00',
      statut: 'a_vendre',
      conformiteIslamique: true,
      zonePriere: true,
      proximite_mosquee: true
    },
    {
      id: 2,
      reference: 'IMM-2025-002',
      type: 'Appartement',
      adresse: 'Avenue du Lac 42, Lausanne',
      prixAchat: '1,250,000.00',
      loyerMensuel: '4,500.00',
      statut: 'loue',
      conformiteIslamique: true,
      zonePriere: false,
      proximite_mosquee: false
    }
  ];

  const contratsIslamiques = [
    { type: 'Murabaha Immobilier', description: 'Achat-revente avec marge bénéficiaire transparente' },
    { type: 'Ijara Immobilier', description: 'Location avec option d\'achat conforme Sharia' },
    { type: 'Musharaka', description: 'Partenariat d\'investissement immobilier' },
    { type: 'Istisna', description: 'Contrat de construction sur mesure' },
    { type: 'Bay Salam', description: 'Achat anticipé pour projets futurs' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-blue-800 mb-4 flex items-center justify-center gap-3">
            <Home className="h-12 w-12" />
            Immobilier Islamique CED
          </h1>
          <p className="text-xl text-blue-600">
            Gestion immobilière 100% conforme aux principes islamiques
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Achat • Vente • Location • Financement halal • Contrats Sharia
          </p>
        </div>

        {/* Navigation par onglets */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="dashboard">Tableau de Bord</TabsTrigger>
            <TabsTrigger value="proprietes">Propriétés</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="evaluations">Évaluations</TabsTrigger>
            <TabsTrigger value="contrats">Contrats</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          </TabsList>

          {/* Tableau de bord */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <Card className="bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Propriétés</p>
                      <p className="text-3xl font-bold text-blue-700">{statsImmobilier.totalProprietes}</p>
                    </div>
                    <Building2 className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Valeur Portfolio (CHF)</p>
                      <p className="text-3xl font-bold text-green-700">{statsImmobilier.valeursPortefeuille}</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Revenus Mensuels (CHF)</p>
                      <p className="text-3xl font-bold text-purple-700">{statsImmobilier.revenus_mensuels}</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">À Vendre</p>
                      <p className="text-3xl font-bold text-orange-700">{statsImmobilier.proprietesPour_vente}</p>
                    </div>
                    <Home className="h-8 w-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">En Location</p>
                      <p className="text-3xl font-bold text-cyan-700">{statsImmobilier.proprietesPour_location}</p>
                    </div>
                    <Users className="h-8 w-8 text-cyan-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Zakat Due (CHF)</p>
                      <p className="text-3xl font-bold text-pink-700">{statsImmobilier.zakatDue}</p>
                    </div>
                    <Calculator className="h-8 w-8 text-pink-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Propriétés récentes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Propriétés Récentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {proprietesRecentes.map((propriete) => (
                    <div key={propriete.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="bg-blue-100 text-blue-800">
                            {propriete.reference}
                          </Badge>
                          <span className="font-medium">{propriete.type}</span>
                          <Badge className={`${propriete.statut === 'a_vendre' ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'}`}>
                            {propriete.statut === 'a_vendre' ? 'À vendre' : 'Loué'}
                          </Badge>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-gray-600 flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {propriete.adresse}
                          </p>
                          <div className="flex items-center gap-4 mt-2 text-sm">
                            {propriete.conformiteIslamique && (
                              <Badge className="bg-emerald-100 text-emerald-800">
                                ✓ Conforme Sharia
                              </Badge>
                            )}
                            {propriete.zonePriere && (
                              <Badge className="bg-purple-100 text-purple-800">
                                🤲 Zone Prière
                              </Badge>
                            )}
                            {propriete.proximite_mosquee && (
                              <Badge className="bg-blue-100 text-blue-800">
                                🕌 Proche Mosquée
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">
                          {propriete.statut === 'a_vendre' 
                            ? `${propriete.prixVente} CHF` 
                            : `${propriete.loyerMensuel} CHF/mois`
                          }
                        </div>
                        <div className="text-sm text-gray-500">
                          Achat: {propriete.prixAchat} CHF
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gestion des propriétés */}
          <TabsContent value="proprietes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    Ajouter une Propriété
                  </span>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Nouvelle Propriété
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  <div className="space-y-4">
                    <Label htmlFor="reference">Référence</Label>
                    <Input 
                      id="reference" 
                      placeholder="IMM-2025-XXX"
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="typePropriete">Type de Propriété</Label>
                    <Select>
                      <SelectTrigger className="border-blue-200 focus:border-blue-500">
                        <SelectValue placeholder="Sélectionner le type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="terrain">Terrain</SelectItem>
                        <SelectItem value="appartement">Appartement</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                        <SelectItem value="bureau">Bureau</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="industriel">Industriel</SelectItem>
                        <SelectItem value="agricole">Agricole</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="superficie">Superficie (m²)</Label>
                    <Input 
                      id="superficie" 
                      type="number"
                      placeholder="150"
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-4 md:col-span-2">
                    <Label htmlFor="adresse">Adresse Complète</Label>
                    <Textarea 
                      id="adresse" 
                      placeholder="Rue, numéro, ville, code postal, pays"
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="prixAchat">Prix d'Achat (CHF)</Label>
                    <Input 
                      id="prixAchat" 
                      type="number"
                      placeholder="1250000"
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="prixVente">Prix de Vente (CHF)</Label>
                    <Input 
                      id="prixVente" 
                      type="number"
                      placeholder="1500000"
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="loyerMensuel">Loyer Mensuel (CHF)</Label>
                    <Input 
                      id="loyerMensuel" 
                      type="number"
                      placeholder="4500"
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="typeContrat">Type de Contrat Prévu</Label>
                    <Select>
                      <SelectTrigger className="border-blue-200 focus:border-blue-500">
                        <SelectValue placeholder="Contrat islamique" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="murabaha">Murabaha Immobilier</SelectItem>
                        <SelectItem value="ijara">Ijara (Location)</SelectItem>
                        <SelectItem value="musharaka">Musharaka</SelectItem>
                        <SelectItem value="istisna">Istisna (Construction)</SelectItem>
                        <SelectItem value="bay_salam">Bay Salam</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Caractéristiques islamiques */}
                  <div className="md:col-span-3 space-y-4">
                    <Label className="text-lg font-semibold text-emerald-700">Caractéristiques Islamiques</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="zonePriere" />
                        <Label htmlFor="zonePriere" className="text-sm">Zone de Prière</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="orientationQibla" />
                        <Label htmlFor="orientationQibla" className="text-sm">Orientation Qibla</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="proximiteMosquee" />
                        <Label htmlFor="proximiteMosquee" className="text-sm">Proche Mosquée</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="ecoleIslamique" />
                        <Label htmlFor="ecoleIslamique" className="text-sm">École Islamique</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="certificationHalal" />
                        <Label htmlFor="certificationHalal" className="text-sm">Certification Halal</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="zakatApplicable" />
                        <Label htmlFor="zakatApplicable" className="text-sm">Soumis à Zakat</Label>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-3 space-y-4">
                    <Label htmlFor="descriptifIslamique">Descriptif Conformité Islamique</Label>
                    <Textarea 
                      id="descriptifIslamique" 
                      placeholder="Description des aspects conformes aux principes islamiques (orientation, proximité mosquée, usage licite...)"
                      className="border-blue-200 focus:border-blue-500"
                      rows={3}
                    />
                  </div>
                </div>

                <div className="mt-6 flex gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Enregistrer Propriété
                  </Button>
                  <Button variant="outline">
                    <Camera className="h-4 w-4 mr-2" />
                    Ajouter Photos
                  </Button>
                  <Button variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Documents Légaux
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
                  <TrendingUp className="h-5 w-5" />
                  Transactions Immobilières
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">Module de gestion des transactions en développement...</p>
                  <div className="space-y-2 text-sm text-left max-w-md mx-auto">
                    <p>• Achat/Vente avec contrats Murabaha</p>
                    <p>• Location Ijara conforme Sharia</p>
                    <p>• Financement participatif Musharaka</p>
                    <p>• Suivi paiements et échéances</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="evaluations">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Évaluations Immobilières
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">Système d'évaluation en développement...</p>
                  <div className="space-y-2 text-sm text-left max-w-md mx-auto">
                    <p>• Expertise par professionnels certifiés</p>
                    <p>• Critères de valorisation islamiques</p>
                    <p>• Rapports détaillés conformité Sharia</p>
                    <p>• Historique des prix de marché</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contrats">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Contrats Islamiques Immobiliers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contratsIslamiques.map((contrat, index) => (
                    <Card key={index} className="border-emerald-200">
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-emerald-700 mb-2">{contrat.type}</h3>
                        <p className="text-sm text-gray-600">{contrat.description}</p>
                        <Button size="sm" className="mt-3 bg-emerald-600 hover:bg-emerald-700">
                          Utiliser ce Contrat
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="maintenance">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5" />
                  Maintenance & Rénovations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">Planning maintenance en développement...</p>
                  <div className="space-y-2 text-sm text-left max-w-md mx-auto">
                    <p>• Entretien préventif programmé</p>
                    <p>• Rénovations avec matériaux halal</p>
                    <p>• Main d'œuvre respectant heures de prière</p>
                    <p>• Suivi des coûts et garanties</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-blue-200 text-center text-sm text-blue-600">
          <p className="mb-2">© 2025 Club Empreinte Digitale - Yakoubi Yamina</p>
          <p className="mb-2">🏠 Immobilier 100% conforme aux principes islamiques</p>
          <p className="text-xs text-gray-500">
            Achat • Vente • Location • Financement halal • Contrats Murabaha, Ijara, Musharaka
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Expertise immobilière certifiée Sharia - Standards AAOIFI/IFSB
          </p>
        </div>

      </div>
    </div>
  );
}