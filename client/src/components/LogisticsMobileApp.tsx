import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Truck, 
  MapPin, 
  Clock, 
  Users, 
  Package, 
  AlertTriangle, 
  CheckCircle, 
  Phone, 
  Navigation,
  Heart,
  Building,
  Zap,
  TrendingUp,
  Globe,
  Shield,
  Smartphone,
  Activity
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LogisticsTeamMember {
  id: string;
  name: string;
  role: string;
  location: string;
  status: 'active' | 'break' | 'offline';
  currentDelivery?: string;
  phone: string;
  lastUpdate: Date;
}

interface Delivery {
  id: string;
  recipient: string;
  address: string;
  type: 'donation' | 'pickup' | 'transfer';
  status: 'pending' | 'in_transit' | 'delivered' | 'delayed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  estimatedTime: string;
  assignedTo: string;
  techforallRef?: string;
}

interface Donor {
  id: string;
  name: string;
  type: 'individual' | 'company' | 'organization';
  location: string;
  totalDonations: number;
  lastDonation: Date;
  status: 'active' | 'inactive';
  contact: string;
  specialItems: string[];
}

export function LogisticsMobileApp() {
  const [activeUser, setActiveUser] = useState<'aziz' | 'karim' | 'admin'>('aziz');
  const [currentView, setCurrentView] = useState('dashboard');
  const [realTimeData, setRealTimeData] = useState(true);
  const { toast } = useToast();

  const teamMembers: LogisticsTeamMember[] = [
    {
      id: 'az001',
      name: 'Marc Müller',
      role: 'Chauffeur Senior',
      location: 'Berne Centre',
      status: 'active',
      currentDelivery: 'DL-2025-001',
      phone: '+41 79 XXX XX XX',
      lastUpdate: new Date()
    },
    {
      id: 'az002',
      name: 'Sophie Weber',
      role: 'Coordinatrice',
      location: 'Zurich',
      status: 'active',
      phone: '+41 78 XXX XX XX',
      lastUpdate: new Date()
    },
    {
      id: 'kr001',
      name: 'Jean Dubois',
      role: 'Chef Équipe Paris',
      location: 'Paris 15ème',
      status: 'active',
      currentDelivery: 'DL-2025-005',
      phone: '+33 6 XX XX XX XX',
      lastUpdate: new Date()
    },
    {
      id: 'kr002',
      name: 'Maria Rodriguez',
      role: 'Logistique Madrid',
      location: 'Madrid Centro',
      status: 'break',
      phone: '+34 6XX XXX XXX',
      lastUpdate: new Date()
    }
  ];

  const deliveries: Delivery[] = [
    {
      id: 'DL-2025-001',
      recipient: 'Fondation Aide Genève',
      address: 'Rue du Rhône 15, 1204 Genève',
      type: 'donation',
      status: 'in_transit',
      priority: 'high',
      estimatedTime: '14:30',
      assignedTo: 'Marc Müller',
      techforallRef: 'TFA-DON-2025-089'
    },
    {
      id: 'DL-2025-002',
      recipient: 'École Technique Berne',
      address: 'Bundesplatz 3, 3011 Bern',
      type: 'donation',
      status: 'pending',
      priority: 'medium',
      estimatedTime: '16:00',
      assignedTo: 'Sophie Weber',
      techforallRef: 'TFA-DON-2025-090'
    },
    {
      id: 'DL-2025-005',
      recipient: 'Association Tech Paris',
      address: '123 Avenue République, 75011 Paris',
      type: 'pickup',
      status: 'delivered',
      priority: 'high',
      estimatedTime: '12:00',
      assignedTo: 'Jean Dubois',
      techforallRef: 'TFA-COL-2025-045'
    }
  ];

  const donors: Donor[] = [
    {
      id: 'DON-001',
      name: 'Entreprise Informatique SA',
      type: 'company',
      location: 'Genève',
      totalDonations: 125,
      lastDonation: new Date('2024-12-20'),
      status: 'active',
      contact: 'contact@entreprise-info.ch',
      specialItems: ['Ordinateurs portables', 'Serveurs', 'Équipements réseau']
    },
    {
      id: 'DON-002',
      name: 'Fondation Solidarité Tech',
      type: 'organization',
      location: 'Paris',
      totalDonations: 89,
      lastDonation: new Date('2024-12-18'),
      status: 'active',
      contact: 'dons@solidarite-tech.fr',
      specialItems: ['Matériel construction', 'Outils électriques']
    },
    {
      id: 'DON-003',
      name: 'Mohammed Al-Rashid',
      type: 'individual',
      location: 'Zurich',
      totalDonations: 34,
      lastDonation: new Date('2024-12-15'),
      status: 'active',
      contact: '+41 79 XXX XX XX',
      specialItems: ['Véhicules utilitaires', 'Équipement jardinage']
    }
  ];

  useEffect(() => {
    // Simulation temps réel
    const interval = setInterval(() => {
      if (realTimeData) {
        // Mise à jour simulée des données en temps réel
        console.log('Mise à jour temps réel...');
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [realTimeData]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': case 'delivered': return 'bg-green-100 text-green-800';
      case 'in_transit': case 'break': return 'bg-yellow-100 text-yellow-800';
      case 'pending': case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'delayed': case 'offline': return 'bg-red-100 text-red-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const handleEmergencyCall = () => {
    toast({
      title: "Appel d'urgence",
      description: "Connexion avec Yakoubi Yamina...",
    });
  };

  const syncWithBrahim = () => {
    toast({
      title: "Synchronisation TechForAll",
      description: "Données synchronisées avec Brahim Yakoubi",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* En-tête mobile style iPhone */}
      <div className="bg-black/20 backdrop-blur-lg border-b border-white/10 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Truck className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold">CED Logistics Pro</h1>
              <p className="text-xs text-gray-300">
                {activeUser === 'aziz' ? 'Yakoubi Aziz - Suisse' : 'Yakoubi Karim - Europe'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={realTimeData ? 'bg-green-500' : 'bg-red-500'}>
              <Activity className="h-3 w-3 mr-1" />
              LIVE
            </Badge>
            <Button size="sm" variant="ghost" onClick={handleEmergencyCall}>
              <Phone className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Sélecteur utilisateur */}
      <div className="p-4">
        <div className="flex gap-2 mb-4">
          <Button 
            size="sm" 
            variant={activeUser === 'aziz' ? 'default' : 'outline'}
            onClick={() => setActiveUser('aziz')}
            className="flex-1"
          >
            Aziz (Suisse)
          </Button>
          <Button 
            size="sm" 
            variant={activeUser === 'karim' ? 'default' : 'outline'}
            onClick={() => setActiveUser('karim')}
            className="flex-1"
          >
            Karim (Europe)
          </Button>
        </div>
      </div>

      {/* Navigation principale */}
      <Tabs defaultValue="dashboard" className="px-4">
        <TabsList className="grid w-full grid-cols-4 bg-black/20">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="team">Équipe</TabsTrigger>
          <TabsTrigger value="deliveries">Livraisons</TabsTrigger>
          <TabsTrigger value="donors">Donateurs</TabsTrigger>
        </TabsList>

        {/* Dashboard */}
        <TabsContent value="dashboard" className="space-y-4 mt-6">
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-black/20 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="h-5 w-5 text-emerald-400" />
                  <span className="text-sm text-gray-300">Livraisons Jour</span>
                </div>
                <div className="text-2xl font-bold">
                  {activeUser === 'aziz' ? '12' : '28'}
                </div>
                <div className="text-xs text-green-400">+3 vs hier</div>
              </CardContent>
            </Card>

            <Card className="bg-black/20 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  <span className="text-sm text-gray-300">Équipe Active</span>
                </div>
                <div className="text-2xl font-bold">
                  {activeUser === 'aziz' ? '8' : '15'}
                </div>
                <div className="text-xs text-green-400">100% opérationnel</div>
              </CardContent>
            </Card>

            <Card className="bg-black/20 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="h-5 w-5 text-red-400" />
                  <span className="text-sm text-gray-300">Donateurs</span>
                </div>
                <div className="text-2xl font-bold">
                  {activeUser === 'aziz' ? '156' : '287'}
                </div>
                <div className="text-xs text-blue-400">TechForAll sync</div>
              </CardContent>
            </Card>

            <Card className="bg-black/20 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm text-gray-300">Performance</span>
                </div>
                <div className="text-2xl font-bold">97%</div>
                <div className="text-xs text-green-400">Délais respectés</div>
              </CardContent>
            </Card>
          </div>

          {/* Actions rapides */}
          <Card className="bg-black/20 border-white/10">
            <CardHeader>
              <CardTitle className="text-lg">Actions Rapides</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button onClick={syncWithBrahim} className="w-full justify-start" variant="outline">
                <Zap className="h-4 w-4 mr-2" />
                Sync avec Brahim TechForAll
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Navigation className="h-4 w-4 mr-2" />
                Optimiser Routes Jour
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Rapport Incident
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Équipe */}
        <TabsContent value="team" className="space-y-4 mt-6">
          {teamMembers
            .filter(member => 
              activeUser === 'aziz' ? member.id.startsWith('az') : member.id.startsWith('kr')
            )
            .map((member) => (
            <Card key={member.id} className="bg-black/20 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-gray-300">{member.role}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(member.status)}>
                    {member.status}
                  </Badge>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>{member.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span>{member.phone}</span>
                  </div>
                  {member.currentDelivery && (
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-gray-400" />
                      <span>Livraison: {member.currentDelivery}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 mt-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Phone className="h-3 w-3 mr-1" />
                    Appeler
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    Localiser
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Livraisons */}
        <TabsContent value="deliveries" className="space-y-4 mt-6">
          {deliveries
            .filter(delivery => 
              activeUser === 'aziz' 
                ? delivery.assignedTo.includes('Müller') || delivery.assignedTo.includes('Weber')
                : delivery.assignedTo.includes('Dubois') || delivery.assignedTo.includes('Rodriguez')
            )
            .map((delivery) => (
            <Card key={delivery.id} className="bg-black/20 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${getPriorityColor(delivery.priority)}`} />
                    <span className="font-semibold">{delivery.id}</span>
                  </div>
                  <Badge className={getStatusColor(delivery.status)}>
                    {delivery.status}
                  </Badge>
                </div>

                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-300">Destinataire:</span>
                    <br />
                    <span className="font-medium">{delivery.recipient}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                    <span>{delivery.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span>ETA: {delivery.estimatedTime}</span>
                  </div>
                  {delivery.techforallRef && (
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-gray-400" />
                      <span className="text-blue-400">TechForAll: {delivery.techforallRef}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 mt-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Navigation className="h-3 w-3 mr-1" />
                    Itinéraire
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Valider
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Donateurs */}
        <TabsContent value="donors" className="space-y-4 mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Donateurs TechForAll</h2>
            <Button size="sm" onClick={syncWithBrahim}>
              <Zap className="h-3 w-3 mr-1" />
              Sync Brahim
            </Button>
          </div>

          {donors
            .filter(donor => 
              activeUser === 'aziz' 
                ? donor.location.includes('Genève') || donor.location.includes('Zurich') || donor.location.includes('Bern')
                : donor.location.includes('Paris') || donor.location.includes('Madrid') || donor.location.includes('Milan')
            )
            .map((donor) => (
            <Card key={donor.id} className="bg-black/20 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{donor.name}</h3>
                      <p className="text-sm text-gray-300">{donor.type}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(donor.status)}>
                    {donor.status}
                  </Badge>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>{donor.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-gray-400" />
                    <span>{donor.totalDonations} donations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span>Dernier: {donor.lastDonation.toLocaleDateString('fr-CH')}</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-gray-300">Spécialités:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {donor.specialItems.slice(0, 2).map((item, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Phone className="h-3 w-3 mr-1" />
                    Contacter
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Package className="h-3 w-3 mr-1" />
                    Planifier
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Footer fixe */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/20 backdrop-blur-lg border-t border-white/10 p-4">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-green-400" />
            <span>Sécurisé CED</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-blue-400" />
            <span>Sync TechForAll</span>
          </div>
          <div className="flex items-center gap-2">
            <Smartphone className="h-4 w-4 text-purple-400" />
            <span>iPhone Pro Max</span>
          </div>
        </div>
      </div>
    </div>
  );
}