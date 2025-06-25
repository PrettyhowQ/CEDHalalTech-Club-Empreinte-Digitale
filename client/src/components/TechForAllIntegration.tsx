import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  Users, 
  Package, 
  Truck, 
  Heart, 
  Zap, 
  MapPin, 
  Phone,
  CheckCircle,
  Clock,
  AlertTriangle,
  TrendingUp,
  Globe,
  Recycle,
  Home,
  Hammer,
  Droplets
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TechForAllDonation {
  id: string;
  donorName: string;
  donorType: 'individual' | 'company' | 'organization';
  category: 'technology' | 'construction' | 'vehicle' | 'land' | 'irrigation' | 'nautical';
  items: {
    name: string;
    quantity: number;
    estimatedValue: number;
    condition: 'excellent' | 'good' | 'fair' | 'needs_repair';
  }[];
  location: string;
  status: 'pending' | 'validated' | 'collected' | 'distributed' | 'completed';
  assignedLogistics: string;
  collectionDate?: Date;
  distributionTarget: string;
  taxBenefit: number;
  socialImpact: string;
  createdAt: Date;
}

interface LogisticsTeam {
  id: string;
  name: string;
  region: string;
  activeCollections: number;
  totalCollected: number;
  efficiency: number;
  contact: string;
}

export function TechForAllIntegration() {
  const [donations, setDonations] = useState<TechForAllDonation[]>([]);
  const [logisticsTeams, setLogisticsTeams] = useState<LogisticsTeam[]>([]);
  const [syncStatus, setSyncStatus] = useState<'synced' | 'syncing' | 'error'>('synced');
  const { toast } = useToast();

  // Données de démonstration synchronisées avec la logistique
  const sampleDonations: TechForAllDonation[] = [
    {
      id: 'TFA-DON-2025-089',
      donorName: 'Entreprise Tech Genève SA',
      donorType: 'company',
      category: 'technology',
      items: [
        { name: 'Ordinateurs portables Dell', quantity: 15, estimatedValue: 18000, condition: 'good' },
        { name: 'Moniteurs 24"', quantity: 12, estimatedValue: 3600, condition: 'excellent' },
        { name: 'Serveurs IBM', quantity: 3, estimatedValue: 12000, condition: 'good' }
      ],
      location: 'Genève, Suisse',
      status: 'collected',
      assignedLogistics: 'Yakoubi Aziz - Équipe Suisse',
      collectionDate: new Date('2024-12-24'),
      distributionTarget: 'Écoles techniques Afrique',
      taxBenefit: 25200, // 75% de la valeur
      socialImpact: '180 étudiants équipés en informatique',
      createdAt: new Date('2024-12-20')
    },
    {
      id: 'TFA-CON-2025-045',
      donorName: 'Construction Écologique SA',
      donorType: 'company',
      category: 'construction',
      items: [
        { name: 'Matériaux isolants écologiques', quantity: 200, estimatedValue: 35000, condition: 'excellent' },
        { name: 'Panneaux solaires', quantity: 25, estimatedValue: 45000, condition: 'excellent' },
        { name: 'Système récupération eau', quantity: 5, estimatedValue: 15000, condition: 'good' }
      ],
      location: 'Paris, France',
      status: 'validated',
      assignedLogistics: 'Yakoubi Karim - Équipe Europe',
      distributionTarget: 'Logements sociaux Marseille',
      taxBenefit: 71250, // 75% réduction fiscale française
      socialImpact: '25 familles logées écologiquement',
      createdAt: new Date('2024-12-22')
    },
    {
      id: 'TFA-VEH-2025-023',
      donorName: 'Mohammed Al-Rashid',
      donorType: 'individual',
      category: 'vehicle',
      items: [
        { name: 'Camping-car Hymer', quantity: 1, estimatedValue: 85000, condition: 'excellent' },
        { name: 'Remorque équipée', quantity: 1, estimatedValue: 12000, condition: 'good' }
      ],
      location: 'Zurich, Suisse',
      status: 'pending',
      assignedLogistics: 'Yakoubi Aziz - Équipe Suisse',
      distributionTarget: 'Association aide humanitaire',
      taxBenefit: 72750,
      socialImpact: 'Missions humanitaires mobiles',
      createdAt: new Date('2024-12-23')
    }
  ];

  const sampleLogisticsTeams: LogisticsTeam[] = [
    {
      id: 'team-ch',
      name: 'Yakoubi Aziz - Équipe Suisse',
      region: 'Suisse (CH, DE, AT)',
      activeCollections: 8,
      totalCollected: 156,
      efficiency: 97,
      contact: '+41 79 XXX XX XX'
    },
    {
      id: 'team-eu',
      name: 'Yakoubi Karim - Équipe Europe',
      region: 'Europe (FR, ES, IT, BE)',
      activeCollections: 15,
      totalCollected: 287,
      efficiency: 94,
      contact: '+33 6 XX XX XX XX'
    }
  ];

  useEffect(() => {
    setDonations(sampleDonations);
    setLogisticsTeams(sampleLogisticsTeams);
  }, []);

  const syncWithBrahim = async () => {
    setSyncStatus('syncing');
    
    // Simulation synchronisation avec Brahim
    setTimeout(() => {
      setSyncStatus('synced');
      toast({
        title: "Synchronisation TechForAll réussie",
        description: "Données mises à jour avec Brahim Yakoubi",
      });
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': case 'collected': return 'bg-green-100 text-green-800';
      case 'validated': case 'distributed': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'technology': return <Package className="h-5 w-5" />;
      case 'construction': return <Hammer className="h-5 w-5" />;
      case 'vehicle': return <Truck className="h-5 w-5" />;
      case 'land': return <Home className="h-5 w-5" />;
      case 'irrigation': return <Droplets className="h-5 w-5" />;
      case 'nautical': return <Globe className="h-5 w-5" />;
      default: return <Package className="h-5 w-5" />;
    }
  };

  const totalValue = donations.reduce((acc, donation) => 
    acc + donation.items.reduce((itemAcc, item) => itemAcc + item.estimatedValue, 0), 0
  );

  const totalTaxBenefit = donations.reduce((acc, donation) => acc + donation.taxBenefit, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header avec synchronisation */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Recycle className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-emerald-800">TechForAll Integration</h1>
              <p className="text-emerald-600">Synchronisation temps réel avec équipes logistique</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-4">
            <Badge className={syncStatus === 'synced' ? 'bg-green-500' : syncStatus === 'syncing' ? 'bg-yellow-500' : 'bg-red-500'}>
              {syncStatus === 'synced' ? 'Synchronisé' : syncStatus === 'syncing' ? 'Synchronisation...' : 'Erreur'}
            </Badge>
            <Button onClick={syncWithBrahim} disabled={syncStatus === 'syncing'}>
              <Zap className="h-4 w-4 mr-2" />
              Sync avec Brahim
            </Button>
          </div>
        </div>

        {/* Métriques principales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span className="text-sm text-gray-600">Donations Actives</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">{donations.length}</div>
              <div className="text-sm text-green-600">+12 cette semaine</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                <span className="text-sm text-gray-600">Valeur Totale</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {(totalValue / 1000).toFixed(0)}K CHF
              </div>
              <div className="text-sm text-blue-600">Impact social majeur</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">Avantage Fiscal</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {(totalTaxBenefit / 1000).toFixed(0)}K CHF
              </div>
              <div className="text-sm text-green-600">75% déduction</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-purple-500" />
                <span className="text-sm text-gray-600">Bénéficiaires</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">1,250+</div>
              <div className="text-sm text-purple-600">Familles aidées</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="donations" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="donations">Donations</TabsTrigger>
            <TabsTrigger value="logistics">Équipes Logistique</TabsTrigger>
            <TabsTrigger value="impact">Impact Social</TabsTrigger>
          </TabsList>

          {/* Donations */}
          <TabsContent value="donations" className="space-y-6">
            {donations.map((donation) => (
              <Card key={donation.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-blue-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
                        {getCategoryIcon(donation.category)}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{donation.donorName}</CardTitle>
                        <p className="text-sm text-gray-600">Réf: {donation.id}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(donation.status)}>
                      {donation.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Détails donation */}
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold mb-3">Articles donnés:</h4>
                      <div className="space-y-3">
                        {donation.items.map((item, index) => (
                          <div key={index} className="p-3 bg-gray-50 rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                              <span className="font-medium">{item.name}</span>
                              <Badge variant="outline">{item.condition}</Badge>
                            </div>
                            <div className="text-sm text-gray-600 space-y-1">
                              <div>Quantité: {item.quantity}</div>
                              <div>Valeur estimée: {item.estimatedValue.toLocaleString()} CHF</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Informations logistique */}
                    <div>
                      <h4 className="font-semibold mb-3">Logistique:</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">{donation.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">{donation.assignedLogistics}</span>
                        </div>
                        {donation.collectionDate && (
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">
                              Collecté: {donation.collectionDate.toLocaleDateString('fr-CH')}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">{donation.distributionTarget}</span>
                        </div>
                      </div>

                      <div className="mt-4 p-3 bg-green-50 rounded-lg">
                        <div className="text-sm font-medium text-green-800">
                          Avantage fiscal: {donation.taxBenefit.toLocaleString()} CHF
                        </div>
                        <div className="text-xs text-green-600 mt-1">
                          {donation.socialImpact}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button size="sm" variant="outline">
                      <Phone className="h-4 w-4 mr-2" />
                      Contacter donateur
                    </Button>
                    <Button size="sm" variant="outline">
                      <Truck className="h-4 w-4 mr-2" />
                      Planifier collecte
                    </Button>
                    <Button size="sm">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Valider distribution
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Équipes logistique */}
          <TabsContent value="logistics" className="space-y-6">
            {logisticsTeams.map((team) => (
              <Card key={team.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                        <Truck className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{team.name}</h3>
                        <p className="text-gray-600">{team.region}</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      {team.efficiency}% efficacité
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{team.activeCollections}</div>
                      <div className="text-sm text-gray-600">Collectes actives</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{team.totalCollected}</div>
                      <div className="text-sm text-gray-600">Total collecté</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">
                        {team.efficiency}%
                      </div>
                      <div className="text-sm text-gray-600">Taux de réussite</div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <Button size="sm" variant="outline">
                      <Phone className="h-4 w-4 mr-2" />
                      {team.contact}
                    </Button>
                    <Button size="sm" variant="outline">
                      <MapPin className="h-4 w-4 mr-2" />
                      Localisation temps réel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Impact social */}
          <TabsContent value="impact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Impact Social TechForAll 2024-2025</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-emerald-50 rounded-lg">
                    <div className="text-3xl font-bold text-emerald-600">1,250+</div>
                    <div className="text-sm text-gray-600">Familles logées</div>
                    <div className="text-xs text-emerald-500 mt-1">Construction écologique</div>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">3,500+</div>
                    <div className="text-sm text-gray-600">Étudiants équipés</div>
                    <div className="text-xs text-blue-500 mt-1">Matériel informatique</div>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">2.8M CHF</div>
                    <div className="text-sm text-gray-600">Avantages fiscaux</div>
                    <div className="text-xs text-purple-500 mt-1">75% déduction</div>
                  </div>
                  
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-3xl font-bold text-red-600">180 T</div>
                    <div className="text-sm text-gray-600">CO₂ évité</div>
                    <div className="text-xs text-red-500 mt-1">Impact environnemental</div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Répartition par secteur:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span>Construction écologique & logements sociaux</span>
                      <Badge>42%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span>Équipements technologiques éducation</span>
                      <Badge>28%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span>Véhicules et matériel humanitaire</span>
                      <Badge>18%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span>Systèmes irrigation & agriculture</span>
                      <Badge>12%</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}