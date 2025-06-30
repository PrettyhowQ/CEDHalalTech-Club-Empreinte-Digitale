import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Truck, 
  Package, 
  MapPin, 
  Clock, 
  CheckCircle,
  AlertTriangle,
  Smartphone,
  Users,
  BarChart3,
  Navigation,
  Zap,
  Globe
} from 'lucide-react';

export function LogisticsAppRobust() {
  const logisticsTeam = [
    {
      id: 1,
      name: "Yakoubi Karim",
      role: "Responsable Logistique EU",
      location: "Paris, France",
      phone: "iPhone 15 Pro Max",
      status: "En route",
      deliveries: 12,
      zone: "Europe"
    },
    {
      id: 2,
      name: "Yakoubi Aziz",
      role: "Responsable Logistique CH",
      location: "Berne, Suisse",
      phone: "iPhone 15 Pro Max",
      status: "Disponible",
      deliveries: 8,
      zone: "Suisse"
    },
    {
      id: 3,
      name: "Brahim Costa",
      role: "Coordinateur TechForAll",
      location: "Costa del Sol, Espagne",
      phone: "iPhone 15 Pro Max",
      status: "En préparation",
      deliveries: 15,
      zone: "Espagne"
    }
  ];

  const deliveryStats = {
    totalDeliveries: 847,
    todayDeliveries: 23,
    pendingPickups: 12,
    completedToday: 18,
    averageTime: "2.4h",
    successRate: 98.7
  };

  const vehicles = [
    {
      id: 1,
      type: "Camion 3.5T",
      driver: "Karim",
      location: "Paris 15e",
      status: "En livraison",
      fuel: 78,
      nextMaintenance: "2025-02-15"
    },
    {
      id: 2,
      type: "Fourgon",
      driver: "Aziz",
      location: "Berne Centre",
      status: "Disponible",
      fuel: 92,
      nextMaintenance: "2025-03-01"
    },
    {
      id: 3,
      type: "Utilitaire",
      driver: "Brahim",
      location: "Marbella",
      status: "Chargement",
      fuel: 65,
      nextMaintenance: "2025-02-28"
    }
  ];

  const todayDeliveries = [
    {
      id: 1,
      recipient: "Famille Müller",
      address: "Zürich, Suisse",
      items: "Ordinateur portable HP + Écran",
      status: "Livré",
      time: "14:30",
      driver: "Aziz"
    },
    {
      id: 2,
      recipient: "École Primaire Lyon",
      address: "Lyon, France",
      items: "10 Tablettes éducatives",
      status: "En cours",
      time: "16:45",
      driver: "Karim"
    },
    {
      id: 3,
      recipient: "Association Solidaire",
      address: "Málaga, Espagne",
      items: "Équipements informatiques",
      status: "Programmé",
      time: "18:00",
      driver: "Brahim"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* En-tête */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              App Logistique CED
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Application mobile temps réel pour la gestion logistique TechForAll avec géolocalisation et synchronisation
          </p>
        </div>

        {/* Métriques logistiques */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Total Livraisons</p>
                  <p className="text-3xl font-bold">{deliveryStats.totalDeliveries}</p>
                </div>
                <Package className="h-12 w-12 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Aujourd'hui</p>
                  <p className="text-3xl font-bold">{deliveryStats.todayDeliveries}</p>
                </div>
                <Clock className="h-12 w-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">En attente</p>
                  <p className="text-3xl font-bold">{deliveryStats.pendingPickups}</p>
                </div>
                <AlertTriangle className="h-12 w-12 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-100">Terminées</p>
                  <p className="text-3xl font-bold">{deliveryStats.completedToday}</p>
                </div>
                <CheckCircle className="h-12 w-12 text-yellow-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-100">Temps Moyen</p>
                  <p className="text-3xl font-bold">{deliveryStats.averageTime}</p>
                </div>
                <Navigation className="h-12 w-12 text-indigo-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-500 to-pink-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-100">Taux Succès</p>
                  <p className="text-3xl font-bold">{deliveryStats.successRate}%</p>
                </div>
                <BarChart3 className="h-12 w-12 text-red-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Onglets principaux */}
        <Tabs defaultValue="team" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="team">Équipe</TabsTrigger>
            <TabsTrigger value="vehicles">Véhicules</TabsTrigger>
            <TabsTrigger value="deliveries">Livraisons</TabsTrigger>
            <TabsTrigger value="tracking">Suivi GPS</TabsTrigger>
            <TabsTrigger value="reports">Rapports</TabsTrigger>
          </TabsList>

          <TabsContent value="team" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {logisticsTeam.map((member) => (
                <Card key={member.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <Users className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{member.name}</CardTitle>
                          <Badge variant={member.status === 'Disponible' ? 'default' : 'secondary'}>
                            {member.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Rôle</span>
                        <span className="font-semibold">{member.role}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Zone</span>
                        <span>{member.zone}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Localisation</span>
                        <span>{member.location}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Livraisons/jour</span>
                        <span className="font-semibold text-green-600">{member.deliveries}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Équipement</span>
                        <span>{member.phone}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        Localiser
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Smartphone className="h-4 w-4 mr-1" />
                        Appeler
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vehicles" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {vehicles.map((vehicle) => (
                <Card key={vehicle.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Truck className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{vehicle.type}</CardTitle>
                          <Badge variant={vehicle.status === 'Disponible' ? 'default' : 'secondary'}>
                            {vehicle.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Conducteur</span>
                        <span className="font-semibold">{vehicle.driver}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Position</span>
                        <span>{vehicle.location}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Carburant</span>
                        <span className="font-semibold">{vehicle.fuel}%</span>
                      </div>
                      <Progress value={vehicle.fuel} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>Maintenance</span>
                        <span>{vehicle.nextMaintenance}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        Suivre
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Zap className="h-4 w-4 mr-1" />
                        Diagnostics
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="deliveries" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-6 w-6" />
                  Livraisons du Jour
                </CardTitle>
                <CardDescription>
                  Suivi en temps réel des livraisons TechForAll
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {todayDeliveries.map((delivery) => (
                  <div key={delivery.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className={`p-2 rounded-full ${
                      delivery.status === 'Livré' ? 'bg-green-100 text-green-600' :
                      delivery.status === 'En cours' ? 'bg-blue-100 text-blue-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>
                      <Package className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{delivery.recipient}</h4>
                      <p className="text-sm text-gray-600">{delivery.address}</p>
                      <p className="text-sm text-gray-500">{delivery.items}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={
                        delivery.status === 'Livré' ? 'default' :
                        delivery.status === 'En cours' ? 'secondary' : 'outline'
                      }>
                        {delivery.status}
                      </Badge>
                      <p className="text-sm text-gray-500 mt-1">{delivery.time} - {delivery.driver}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tracking" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Suivi GPS Temps Réel
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Carte GPS Interactive</p>
                      <p className="text-sm text-gray-400">Localisation temps réel équipe</p>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Navigation className="h-4 w-4 mr-2" />
                    Ouvrir Carte Complète
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Statistiques Temps Réel
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Véhicules actifs</span>
                      <span className="font-semibold">3/3</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Distance parcourue</span>
                      <span className="font-semibold">847 km</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Temps moyen livraison</span>
                      <span className="font-semibold">2h 24min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Satisfaction client</span>
                      <span className="font-semibold text-green-600">98.7%</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Rapport Détaillé
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Rapports Logistiques</CardTitle>
                  <CardDescription>
                    Générez des rapports détaillés sur les performances
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">Rapport Quotidien</Button>
                  <Button className="w-full" variant="outline">Performance Équipe</Button>
                  <Button className="w-full" variant="outline">Consommation Carburant</Button>
                  <Button className="w-full" variant="outline">Satisfaction Client</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Synchronisation TechForAll</CardTitle>
                  <CardDescription>
                    Intégration temps réel avec la plateforme
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Dernière sync</span>
                    <Badge variant="default">Il y a 2 min</Badge>
                  </div>
                  <Button className="w-full">
                    <Zap className="h-4 w-4 mr-2" />
                    Synchroniser Maintenant
                  </Button>
                  <Button className="w-full" variant="outline">
                    Voir Historique
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 border-t pt-6">
          <p>© 2025 Club Empreinte Digitale - App Logistique Mobile | Propriété de Yakoubi Yamina</p>
        </div>
      </div>
    </div>
  );
}