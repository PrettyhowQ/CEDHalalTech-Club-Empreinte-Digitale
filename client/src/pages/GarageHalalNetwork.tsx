import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone, Mail, Star, CheckCircle, Clock, Users, Wrench, Car, Shield } from "lucide-react";

export default function GarageHalalNetwork() {
  const garages = [
    {
      id: 1,
      name: "Garage Farid Auto Halal",
      city: "Genève",
      address: "Route de Meyrin 147, 1214 Vernier",
      phone: "+41 22 788 5050",
      email: "farid@garages-halal.ch",
      rating: 4.9,
      reviews: 287,
      services: ["Réparation", "Entretien", "Carrosserie", "Pneus", "Diagnostic"],
      specialties: ["Mercedes-Benz", "BMW", "Audi", "Volkswagen"],
      priceRange: "150-200 CHF/h",
      openHours: "08:00-18:00 (Lun-Ven), 08:00-16:00 (Sam)",
      prayerRoom: true,
      halalFinancing: true,
      muslimStaff: true,
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      name: "Garage Barakah Lausanne",
      city: "Lausanne",
      address: "Avenue de Sévelin 32, 1004 Lausanne",
      phone: "+41 21 625 4040",
      email: "lausanne@garages-halal.ch",
      rating: 4.8,
      reviews: 193,
      services: ["Mécanique", "Électronique", "Climatisation", "Freins", "Transmission"],
      specialties: ["Toyota", "Honda", "Nissan", "Hyundai"],
      priceRange: "120-180 CHF/h",
      openHours: "07:30-18:30 (Lun-Ven), 08:00-15:00 (Sam)",
      prayerRoom: true,
      halalFinancing: true,
      muslimStaff: true,
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      name: "Garage Tawfiq Berne",
      city: "Berne",
      address: "Industriestrasse 25, 3012 Bern",
      phone: "+41 31 302 7070",
      email: "berne@garages-halal.ch",
      rating: 4.7,
      reviews: 156,
      services: ["Révision", "Contrôle technique", "Peinture", "Sellerie", "Vitrage"],
      specialties: ["Ford", "Opel", "Peugeot", "Renault"],
      priceRange: "140-190 CHF/h",
      openHours: "08:00-17:30 (Lun-Ven), 09:00-14:00 (Sam)",
      prayerRoom: true,
      halalFinancing: true,
      muslimStaff: true,
      image: "/api/placeholder/400/250"
    }
  ];

  const certificationProcess = [
    {
      step: 1,
      title: "Audit Conformité Islamique",
      description: "Vérification des pratiques commerciales selon les principes halal",
      icon: <Shield className="h-6 w-6" />
    },
    {
      step: 2,
      title: "Formation Équipe",
      description: "Sensibilisation aux valeurs islamiques et respect des horaires de prière",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: 3,
      title: "Aménagement Espace Prière",
      description: "Installation d'un espace dédié aux ablutions et à la prière",
      icon: <MapPin className="h-6 w-6" />
    },
    {
      step: 4,
      title: "Certification Finale",
      description: "Attribution du label Garage Halal Network avec suivi qualité",
      icon: <CheckCircle className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Car className="h-10 w-10 text-emerald-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Garage Halal Network
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            🚗 Premier réseau de garages automobiles 100% conformes aux valeurs islamiques en Suisse
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="outline" className="bg-emerald-100 text-emerald-800 border-emerald-300">
              <CheckCircle className="h-4 w-4 mr-1" />
              Financement sans Riba
            </Badge>
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
              <Clock className="h-4 w-4 mr-1" />
              Respect horaires prière
            </Badge>
            <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-300">
              <Users className="h-4 w-4 mr-1" />
              Équipe musulmane certifiée
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="garages" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="garages">Nos Garages</TabsTrigger>
            <TabsTrigger value="services">Services Halal</TabsTrigger>
            <TabsTrigger value="certification">Certification</TabsTrigger>
          </TabsList>

          {/* Onglet Garages */}
          <TabsContent value="garages">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {garages.map((garage) => (
                <Card key={garage.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-emerald-400 to-cyan-400 relative">
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <Car className="h-16 w-16 text-white" />
                    </div>
                    <Badge className="absolute top-4 right-4 bg-emerald-600">
                      <Star className="h-3 w-3 mr-1" />
                      {garage.rating}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {garage.name}
                      <Badge variant="outline">{garage.city}</Badge>
                    </CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-1 mb-2">
                        <MapPin className="h-4 w-4" />
                        {garage.address}
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span>{garage.reviews} avis</span>
                        <span>{garage.priceRange}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      {/* Services */}
                      <div>
                        <h4 className="font-medium mb-2">Services principaux</h4>
                        <div className="flex flex-wrap gap-1">
                          {garage.services.slice(0, 3).map((service, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Spécialités */}
                      <div>
                        <h4 className="font-medium mb-2">Marques spécialisées</h4>
                        <div className="flex flex-wrap gap-1">
                          {garage.specialties.slice(0, 2).map((brand, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {brand}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Certifications Halal */}
                      <div className="flex gap-4 text-sm">
                        {garage.prayerRoom && (
                          <div className="flex items-center gap-1 text-emerald-600">
                            <CheckCircle className="h-4 w-4" />
                            Salle prière
                          </div>
                        )}
                        {garage.halalFinancing && (
                          <div className="flex items-center gap-1 text-blue-600">
                            <Shield className="h-4 w-4" />
                            Finance halal
                          </div>
                        )}
                      </div>

                      {/* Contact */}
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <Phone className="h-4 w-4 mr-1" />
                          Appeler
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Mail className="h-4 w-4 mr-1" />
                          Email
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet Services */}
          <TabsContent value="services">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Services Techniques */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-emerald-600" />
                    Services Techniques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Révision complète selon constructeur</li>
                    <li>• Diagnostic électronique avancé</li>
                    <li>• Réparation mécanique toutes marques</li>
                    <li>• Entretien préventif personnalisé</li>
                    <li>• Contrôle technique préparatoire</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Financement Halal */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    Financement Islamique
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 0% Riba - Conformité Sharia complète</li>
                    <li>• Murabaha pour achats véhicules</li>
                    <li>• Ijara pour location long terme</li>
                    <li>• Paiement échelonné sans intérêt</li>
                    <li>• Certification AAOIFI validée</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Valeurs Islamiques */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    Valeurs Islamiques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Équipe formée aux valeurs islamiques</li>
                    <li>• Espace ablutions et prière aménagé</li>
                    <li>• Respect strict horaires Salat</li>
                    <li>• Service clientèle bienveillant</li>
                    <li>• Tarification transparente et juste</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Statistiques */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Réseau en Expansion</CardTitle>
                <CardDescription>Statistiques et objectifs 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600">3</div>
                    <div className="text-sm text-gray-600">Garages opérationnels</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">636</div>
                    <div className="text-sm text-gray-600">Clients satisfaits</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">98%</div>
                    <div className="text-sm text-gray-600">Taux satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">12</div>
                    <div className="text-sm text-gray-600">Expansion prévue 2025</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Certification */}
          <TabsContent value="certification">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Processus de certification */}
              <Card>
                <CardHeader>
                  <CardTitle>Processus de Certification Halal</CardTitle>
                  <CardDescription>
                    4 étapes rigoureuses pour garantir la conformité islamique
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {certificationProcess.map((step) => (
                      <div key={step.step} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                            {step.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium">Étape {step.step}: {step.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Critères de conformité */}
              <Card>
                <CardHeader>
                  <CardTitle>Critères de Conformité</CardTitle>
                  <CardDescription>
                    Standards islamiques respectés dans nos garages
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Financement Islamique</h4>
                        <p className="text-sm text-gray-600">
                          Aucun prêt avec intérêt (Riba). Uniquement Murabaha et Ijara conformes Sharia.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Respect des Prières</h4>
                        <p className="text-sm text-gray-600">
                          Suspension service durant Salat, espace ablutions et prière disponible.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Éthique Commerciale</h4>
                        <p className="text-sm text-gray-600">
                          Transparence totale, tarification juste, service clientèle bienveillant.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Formation Continue</h4>
                        <p className="text-sm text-gray-600">
                          Équipe sensibilisée aux valeurs islamiques et formation technique continue.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                    <h4 className="font-medium text-emerald-800 mb-2">Supervision Religieuse</h4>
                    <p className="text-sm text-emerald-700">
                      Chaque garage est supervisé par un comité de scholars islamiques pour garantir 
                      la conformité permanente aux principes halal.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}