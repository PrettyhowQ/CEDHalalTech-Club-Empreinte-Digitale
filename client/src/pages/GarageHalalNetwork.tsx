import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone, Mail, Star, CheckCircle, Clock, Users, Wrench, Car, Shield, CreditCard, Banknote, Eye, Calendar } from "lucide-react";

export default function GarageHalalNetwork() {
  // Voitures de prestige disponibles
  const prestigeCars = [
    {
      id: 1,
      brand: "Mercedes-Benz",
      model: "S-Class 500 4MATIC",
      year: 2024,
      price: 165000,
      type: "Vente",
      mileage: 2500,
      color: "Noir Obsidienne",
      features: ["Cuir Nappa", "Toit Panoramique", "Massage Seats", "Burmester Audio"],
      financing: "Murabaha 0% Riba",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      brand: "BMW",
      model: "X7 M50i",
      year: 2024,
      price: 4500,
      type: "Location/mois",
      mileage: 1200,
      color: "Blanc Alpin",
      features: ["7 Places", "Conduite Autonome", "Harman Kardon", "Toit Sky Lounge"],
      financing: "Ijara Islamique",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      brand: "Audi",
      model: "A8 L 60 TFSI",
      year: 2023,
      price: 128000,
      type: "Vente",
      mileage: 8500,
      color: "Gris Daytona",
      features: ["Quattro", "Matrix LED", "Bang & Olufsen", "Executive Package"],
      financing: "Murabaha Flexible",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      brand: "Lexus",
      model: "LS 500h Hybrid",
      year: 2024,
      price: 3200,
      type: "Location/mois",
      mileage: 800,
      color: "Bleu Sonic",
      features: ["Hybride", "Mark Levinson", "Chauffage/Climatisation", "Kiriko Glass"],
      financing: "Ijara Premium",
      image: "/api/placeholder/400/250"
    }
  ];

  const garages = [
    {
      id: 1,
      name: "Al-Amana Auto Halal – Yakoubi Farid",
      city: "Genève",
      address: "Route de Meyrin 147, 1214 Vernier",
      phone: "+41 22 788 5050",
      email: "farid.yakoubi@al-amana-auto.ch",
      rating: 4.9,
      reviews: 287,
      services: ["Réparation", "Entretien", "Carrosserie", "Pneus", "Diagnostic"],
      specialties: ["Mercedes-Benz", "BMW", "Audi", "Volkswagen"],
      priceRange: "150-200 CHF/h",
      openHours: "08:00-18:00 (Lun-Ven), 08:00-16:00 (Sam)",
      prayerRoom: true,
      halalFinancing: true,
      muslimStaff: true,
      alAmanInsurance: true,
      halalTechStandards: true,
      dubaiValidated: true,
      genevaGuaranteed: true,
      image: "/api/placeholder/400/250",
      description: "🚘 Al-Amana Auto Halal – Yakoubi Farid - Service automobile certifié Halal dirigé par Yakoubi Farid. 🛡️ Données & Éthique garanties à Genève avec standards HalalTech™ validés à Dubaï. Assurance Al-Aman intégrée."
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
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="garages">Nos Garages</TabsTrigger>
            <TabsTrigger value="prestige">Voitures Prestige</TabsTrigger>
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
                        {garage.alAmanInsurance && (
                          <div className="flex items-center gap-1 text-purple-600">
                            <Shield className="h-4 w-4" />
                            Assurance Al-Aman
                          </div>
                        )}
                      </div>

                      {/* Nouvelles certifications HalalTech™ */}
                      {(garage.halalTechStandards || garage.dubaiValidated || garage.genevaGuaranteed) && (
                        <div className="flex flex-wrap gap-2 text-sm">
                          {garage.halalTechStandards && (
                            <div className="flex items-center gap-1 text-cyan-600">
                              <CheckCircle className="h-4 w-4" />
                              Standards HalalTech™
                            </div>
                          )}
                          {garage.dubaiValidated && (
                            <div className="flex items-center gap-1 text-yellow-600">
                              <Star className="h-4 w-4" />
                              Validé à Dubaï 🇦🇪
                            </div>
                          )}
                          {garage.genevaGuaranteed && (
                            <div className="flex items-center gap-1 text-red-600">
                              <Shield className="h-4 w-4" />
                              Garanti à Genève 🇨🇭
                            </div>
                          )}
                        </div>
                      )}

                      {/* Description spéciale pour Al-Amana */}
                      {garage.description && (
                        <div className="p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                          <p className="text-sm text-blue-800 font-medium">{garage.description}</p>
                        </div>
                      )}

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

          {/* Onglet Voitures de Prestige */}
          <TabsContent value="prestige">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                🏆 Collection Voitures de Prestige Al-Amana Auto Halal
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Sélection exclusive de véhicules de luxe avec financement islamique 100% conforme Sharia
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {prestigeCars.map((car) => (
                <Card key={car.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-yellow-200">
                  <div className="h-56 bg-gradient-to-br from-slate-100 to-slate-200 relative">
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <Car className="h-20 w-20 text-slate-600" />
                    </div>
                    <Badge className={`absolute top-4 right-4 ${car.type === 'Vente' ? 'bg-emerald-600' : 'bg-blue-600'}`}>
                      {car.type === 'Vente' ? 
                        <><Banknote className="h-3 w-3 mr-1" />À Vendre</> : 
                        <><Calendar className="h-3 w-3 mr-1" />Location</>
                      }
                    </Badge>
                    <Badge className="absolute top-4 left-4 bg-yellow-600">
                      <Star className="h-3 w-3 mr-1" />
                      Prestige
                    </Badge>
                  </div>

                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div>
                        <div className="text-lg font-bold">{car.brand}</div>
                        <div className="text-sm text-gray-600">{car.model}</div>
                      </div>
                      <Badge variant="outline">{car.year}</Badge>
                    </CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {car.mileage.toLocaleString()} km
                        </span>
                        <span>• {car.color}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      {/* Prix */}
                      <div className="text-center p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border border-yellow-200">
                        <div className="text-2xl font-bold text-yellow-800">
                          {car.price.toLocaleString()} CHF{car.type === 'Location/mois' && '/mois'}
                        </div>
                        <div className="text-sm text-yellow-600">{car.financing}</div>
                      </div>

                      {/* Équipements */}
                      <div>
                        <h4 className="font-medium mb-2">Équipements de série</h4>
                        <div className="flex flex-wrap gap-1">
                          {car.features.map((feature, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Services inclus */}
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-emerald-600">
                          <CheckCircle className="h-4 w-4" />
                          <span>Assurance Al-Aman CED incluse</span>
                        </div>
                        <div className="flex items-center gap-2 text-blue-600">
                          <CreditCard className="h-4 w-4" />
                          <span>Ouverture compte Bank CED gratuite</span>
                        </div>
                        <div className="flex items-center gap-2 text-purple-600">
                          <Shield className="h-4 w-4" />
                          <span>Garantie constructeur + extension halal</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 mt-4">
                        <Button className="flex-1 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700">
                          <Eye className="h-4 w-4 mr-1" />
                          Voir Détails
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Phone className="h-4 w-4 mr-1" />
                          Contacter Farid
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Section financement spécial */}
            <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg border border-emerald-200">
              <h3 className="text-xl font-bold text-center mb-4 text-emerald-800">
                💰 Financement Islamique Exclusif - Yakoubi Farid
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="font-bold text-emerald-600">Murabaha Automobile</div>
                  <div className="text-gray-600">0% Riba • Paiement échelonné</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="font-bold text-blue-600">Ijara Location</div>
                  <div className="text-gray-600">Option d'achat • Flexibilité totale</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="font-bold text-purple-600">Package Complet</div>
                  <div className="text-gray-600">Bank CED + Al-Aman • -15%</div>
                </div>
              </div>
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

              {/* Bank CED - Services Bancaires */}
              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald-600" />
                    Bank CED - Services Bancaires
                  </CardTitle>
                  <CardDescription>
                    Banque islamique 100% conforme Sharia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Ouverture compte CED directement au garage</li>
                    <li>• Carte bancaire CED gratuite première année</li>
                    <li>• Financement véhicule 0% Riba garanti</li>
                    <li>• Virement instantané pour réparations</li>
                    <li>• Épargne Mudaraba sans intérêt</li>
                    <li>• Gestion patrimoine halal intégrée</li>
                  </ul>
                  <div className="mt-4 p-3 bg-emerald-100 rounded-lg">
                    <p className="text-xs text-emerald-800">
                      <strong>Exclusivité Al-Amana Auto Halal :</strong> 
                      Yakoubi Farid certifié conseiller Bank CED pour tous services bancaires islamiques.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Assurance Al-Aman */}
              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-purple-600" />
                    Assurance Al-Aman CED
                  </CardTitle>
                  <CardDescription>
                    Assurance Takaful 100% conforme à la Sharia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Couverture tous risques véhicule</li>
                    <li>• Responsabilité civile Takaful</li>
                    <li>• Assistance dépannage 24/7</li>
                    <li>• Réparation garage agréé halal</li>
                    <li>• Indemnisation selon principes islamiques</li>
                    <li>• Surplus redistribué aux participants</li>
                  </ul>
                  <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                    <p className="text-xs text-purple-800">
                      <strong>Spécial Al-Amana Auto Halal – Yakoubi Farid :</strong> 
                      Réduction de 15% sur tous les contrats Al-Aman CED pour les clients du garage.
                    </p>
                  </div>
                  <div className="mt-2 p-3 bg-emerald-100 rounded-lg">
                    <p className="text-xs text-emerald-800">
                      <strong>🏦 Bank CED :</strong> 
                      Ouverture de compte bancaire islamique directement au garage avec carte CED gratuite et financement véhicule 0% Riba.
                    </p>
                  </div>
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