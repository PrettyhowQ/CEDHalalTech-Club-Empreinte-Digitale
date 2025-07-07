import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "wouter";
import { Car, Crown, Shield, Star, Lock, MapPin, CreditCard, CheckCircle, Zap, Globe } from "lucide-react";

export default function AlAmanaAutoHalal() {
  const [vehiculeSelectionne, setVehiculeSelectionne] = useState(null);
  const [modeConnexion, setModeConnexion] = useState(false);
  const [clientCED, setClientCED] = useState(true); // Simuler client CED Bank
  const [demandePersonnalisation, setDemandePersonnalisation] = useState("");

  const vehiculesPrestige = [
    {
      marque: "Mercedes-Maybach",
      modele: "S 680 4MATIC",
      prix: "185,000 CHF",
      financement: "3,200 CHF/mois (Murabaha)",
      image: "🏆",
      options: ["Sellerie Nappa exclusive", "Plaques personnalisées", "Système audio Burmester"],
      disponibilite: "Sur commande - 3 mois",
      certification: "Halal Premium Certified",
      origine: "Import direct Stuttgart"
    },
    {
      marque: "Bentley",
      modele: "Continental GT Speed",
      prix: "290,000 CHF",
      financement: "5,100 CHF/mois (Ijara)",
      image: "👑",
      options: ["Cuir Mulliner bespoke", "Roues 22 pouces exclusives", "Finition carbone"],
      disponibilite: "Série limitée - 6 mois",
      certification: "Royal Halal Edition",
      origine: "Crewe, Angleterre"
    },
    {
      marque: "Rolls-Royce",
      modele: "Phantom VIII",
      prix: "450,000 CHF",
      financement: "8,500 CHF/mois (Murabaha)",
      image: "💎",
      options: ["Galerie personnalisée", "Plafond étoilé bespoke", "Bar réfrigéré cristal"],
      disponibilite: "Ultra-exclusive - 12 mois",
      certification: "Phantom Halal Masterpiece",
      origine: "Goodwood, Angleterre"
    },
    {
      marque: "Ferrari",
      modele: "SF90 Stradale",
      prix: "520,000 CHF",
      financement: "9,800 CHF/mois (Ijara)",
      image: "🔥",
      options: ["Peinture sur mesure", "Intérieur Alcantara", "Pack carbone complet"],
      disponibilite: "Allocation spéciale - 8 mois",
      certification: "Prancing Horse Halal",
      origine: "Maranello, Italie"
    },
    {
      marque: "Lamborghini",
      modele: "Huracán STO",
      prix: "350,000 CHF",
      financement: "6,400 CHF/mois (Murabaha)",
      image: "⚡",
      options: ["Aérodynamique course", "Jantes forgées", "Système échappement Akrapovic"],
      disponibilite: "Performance Edition - 5 mois",
      certification: "Raging Bull Halal",
      origine: "Sant'Agata Bolognese"
    },
    {
      marque: "McLaren",
      modele: "720S Spider",
      prix: "380,000 CHF",
      financement: "7,200 CHF/mois (Ijara)",
      image: "🏁",
      options: ["Toit rétractable électrique", "Freins carbone-céramique", "Suspension adaptative"],
      disponibilite: "McLaren Certified - 4 mois",
      certification: "Speed Halal Certificate",
      origine: "Woking, Angleterre"
    }
  ];

  const servicesExclusifs = [
    {
      service: "Financement Halal Intégré",
      description: "Murabaha et Ijara conformes AAOIFI via CED Bank",
      icone: "🏦",
      avantage: "0% Riba garantie"
    },
    {
      service: "Assurance Al-Aman CED",
      description: "Takaful automobile premium incluse",
      icone: "🛡️",
      avantage: "Couverture complète halal"
    },
    {
      service: "Personnalisation Bespoke",
      description: "Options sur mesure conformes éthique islamique",
      icone: "🎨",
      avantage: "Unique au monde"
    },
    {
      service: "Livraison Sécurisée VIP",
      description: "Transport blindé jusqu'à votre domicile",
      icone: "🚚",
      avantage: "Discrétion absolue"
    },
    {
      service: "Maintenance Concierge",
      description: "Service premium à domicile ou bureau",
      icone: "🔧",
      avantage: "Zéro contrainte"
    },
    {
      service: "Certificat Authenticité Halal",
      description: "Document légal conformité religieuse",
      icone: "📜",
      avantage: "Garantie spirituelle"
    }
  ];

  const localisations = [
    {
      ville: "Genève (Siège)",
      adresse: "Rue du Rhône 42, 1204 Genève",
      contact: "farid.garage@ced-halaltech.com",
      horaires: "Sur rendez-vous uniquement",
      services: "Showroom privé + Test drive sécurisé"
    },
    {
      ville: "Dubai (Bureau)",
      adresse: "DIFC, Gate Village 7, Dubai",
      contact: "dubai.auto@ced-halaltech.com", 
      horaires: "Dimanche-Jeudi 9h-18h",
      services: "Import direct + Customs clearance"
    }
  ];

  const processusAchat = [
    {
      etape: 1,
      titre: "Vérification Compte CED",
      description: "Authentification client banque exclusive",
      duree: "2 minutes"
    },
    {
      etape: 2,
      titre: "Sélection Véhicule",
      description: "Catalogue premium sur commande uniquement",
      duree: "30 minutes"
    },
    {
      etape: 3,
      titre: "Personnalisation Bespoke",
      description: "Options sur mesure avec IA PrettyhowQ",
      duree: "1 heure"
    },
    {
      etape: 4,
      titre: "Financement Halal",
      description: "Murabaha/Ijara via écosystème CED",
      duree: "24 heures"
    },
    {
      etape: 5,
      titre: "Commande & Production",
      description: "Fabrication exclusive selon spécifications",
      duree: "3-12 mois"
    },
    {
      etape: 6,
      titre: "Livraison VIP",
      description: "Transport sécurisé + Certificat Halal",
      duree: "1 jour"
    }
  ];

  const demanderDevis = (vehicule) => {
    setVehiculeSelectionne(vehicule);
    setModeConnexion(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header Exclusif */}
      <div className="relative bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-700 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-black rounded-full mb-6">
            <Car className="w-10 h-10 text-yellow-500" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
            🚘 Al-Amana Auto Halal
          </h1>
          <p className="text-lg md:text-2xl text-gray-900 mb-4 px-4">
            Garage Privé Haut de Gamme • Réservé Clients CED Bank • Genève
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <Badge className="bg-black text-yellow-400 text-sm md:text-lg px-3 md:px-4 py-2">
              <Lock className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Accès </span>Exclusif
            </Badge>
            <Badge className="bg-black text-yellow-400 text-sm md:text-lg px-3 md:px-4 py-2">
              <Star className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
              Sur Commande
            </Badge>
            <Badge className="bg-black text-yellow-400 text-sm md:text-lg px-3 md:px-4 py-2">
              <Shield className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
              100% Halal
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Message Exclusivité */}
        {!clientCED ? (
          <Card className="border-2 border-red-500 bg-red-900 mb-8">
            <CardContent className="p-8 text-center">
              <Lock className="w-16 h-16 mx-auto mb-4 text-red-400" />
              <h2 className="text-3xl font-bold text-red-300 mb-4">Accès Restreint</h2>
              <p className="text-xl text-red-200 mb-6">
                Ce garage est exclusivement réservé aux détenteurs d'un compte CED Bank HalalTech™.
              </p>
              <Link href="/ced-bank-mobile">
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-black text-xl px-8 py-4">
                  Ouvrir un Compte CED Bank
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-2 border-green-500 bg-green-900 mb-8">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-400" />
              <h2 className="text-2xl font-bold text-green-300 mb-2">Bienvenue, Client VIP</h2>
              <p className="text-lg text-green-200">
                Accès confirmé • Compte CED Bank vérifié • Crédit disponible: 2.5M CHF
              </p>
            </CardContent>
          </Card>
        )}

        {clientCED && (
          <Tabs defaultValue="vehicules" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1 mb-8 bg-gray-800">
              <TabsTrigger value="vehicules" className="text-white text-xs sm:text-sm">🚗 <span className="hidden sm:inline">Véhicules</span></TabsTrigger>
              <TabsTrigger value="services" className="text-white text-xs sm:text-sm">🛡️ <span className="hidden sm:inline">Services</span></TabsTrigger>
              <TabsTrigger value="processus" className="text-white text-xs sm:text-sm">📋 <span className="hidden sm:inline">Processus</span></TabsTrigger>
              <TabsTrigger value="localisation" className="text-white text-xs sm:text-sm">📍 <span className="hidden sm:inline">Localisation</span></TabsTrigger>
              <TabsTrigger value="commande" className="text-white text-xs sm:text-sm">💳 <span className="hidden sm:inline">Commander</span></TabsTrigger>
            </TabsList>

            {/* Onglet Véhicules */}
            <TabsContent value="vehicules">
              <div className="mb-8">
                <Card className="border-2 border-yellow-500 bg-gray-900">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl text-yellow-400">
                      🏆 Collection Prestige Exclusive
                    </CardTitle>
                    <p className="text-xl text-gray-300">
                      Véhicules sur commande • Séries limitées • Import direct constructeur
                    </p>
                  </CardHeader>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {vehiculesPrestige.map((vehicule, index) => (
                  <Card key={index} className="border-2 border-gray-700 bg-gray-800 hover:border-yellow-500 transition-all hover:shadow-2xl">
                    <CardHeader className="text-center p-4 md:p-6">
                      <div className="text-6xl md:text-8xl mb-3 md:mb-4">{vehicule.image}</div>
                      <CardTitle className="text-lg md:text-2xl text-yellow-400">{vehicule.marque}</CardTitle>
                      <p className="text-base md:text-xl text-gray-300">{vehicule.modele}</p>
                      <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">{vehicule.prix}</div>
                      <Badge className="bg-yellow-600 text-black text-xs md:text-sm">{vehicule.certification}</Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-yellow-400 mb-2">Options Incluses:</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            {vehicule.options.map((option, idx) => (
                              <li key={idx}>• {option}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 text-xs md:text-sm">
                          <div>
                            <span className="text-yellow-400">Financement:</span>
                            <p className="text-green-400 font-bold text-xs md:text-sm">{vehicule.financement}</p>
                          </div>
                          <div>
                            <span className="text-yellow-400">Disponibilité:</span>
                            <p className="text-gray-300 text-xs md:text-sm">{vehicule.disponibilite}</p>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <p className="text-xs text-gray-400 mb-3">Origine: {vehicule.origine}</p>
                          <Button 
                            onClick={() => demanderDevis(vehicule)}
                            className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-bold"
                          >
                            Demander Devis Personnalisé
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {servicesExclusifs.map((service, index) => (
                  <Card key={index} className="border-2 border-gray-700 bg-gray-800">
                    <CardHeader className="text-center">
                      <div className="text-6xl mb-3">{service.icone}</div>
                      <CardTitle className="text-xl text-yellow-400">{service.service}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <Badge className="bg-green-600 text-white">{service.avantage}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 border-2 border-blue-500 bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-center text-blue-400">
                    🔗 Écosystème Intégré CED HalalTech™
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                    <div className="p-3 md:p-4 bg-gray-800 rounded border border-green-500">
                      <div className="text-3xl md:text-4xl mb-2">🏦</div>
                      <h4 className="font-bold text-green-400 mb-2 text-sm md:text-base">CED Bank</h4>
                      <p className="text-xs md:text-sm text-gray-300">Financement halal Murabaha/Ijara intégré</p>
                    </div>
                    <div className="p-3 md:p-4 bg-gray-800 rounded border border-blue-500">
                      <div className="text-3xl md:text-4xl mb-2">🛡️</div>
                      <h4 className="font-bold text-blue-400 mb-2 text-sm md:text-base">Al-Aman Takaful</h4>
                      <p className="text-xs md:text-sm text-gray-300">Assurance automobile premium halal</p>
                    </div>
                    <div className="p-3 md:p-4 bg-gray-800 rounded border border-purple-500">
                      <div className="text-3xl md:text-4xl mb-2">🤖</div>
                      <h4 className="font-bold text-purple-400 mb-2 text-sm md:text-base">IA PrettyhowQ</h4>
                      <p className="text-xs md:text-sm text-gray-300">Assistant intelligent personnalisation</p>
                    </div>
                    <div className="p-3 md:p-4 bg-gray-800 rounded border border-yellow-500">
                      <div className="text-3xl md:text-4xl mb-2">🔌</div>
                      <h4 className="font-bold text-yellow-400 mb-2 text-sm md:text-base">Électronique Halal</h4>
                      <p className="text-xs md:text-sm text-gray-300">Systèmes audio/navigation conformes Sharia</p>
                    </div>
                  </div>
                  
                  {/* Section Électronique Halal Détaillée */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-yellow-900 to-orange-900 rounded-lg border border-yellow-500">
                    <h4 className="text-2xl font-bold text-yellow-400 text-center mb-6">
                      🔌 Électronique Halal Spécialisée
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-gray-800 p-4 rounded border border-yellow-400">
                        <h5 className="text-lg font-bold text-yellow-300 mb-2">📱 Systèmes Multimédia</h5>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Écrans sans contenu haram</li>
                          <li>• Audio halal exclusivement</li>
                          <li>• Filtres Sharia intégrés</li>
                          <li>• Mode prière automatique</li>
                        </ul>
                      </div>
                      <div className="bg-gray-800 p-4 rounded border border-yellow-400">
                        <h5 className="text-lg font-bold text-yellow-300 mb-2">🗺️ Navigation Islamique</h5>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Localisation mosquées proches</li>
                          <li>• Évitement zones non-halal</li>
                          <li>• Qibla Compass intégré</li>
                          <li>• Horaires prières GPS</li>
                        </ul>
                      </div>
                      <div className="bg-gray-800 p-4 rounded border border-yellow-400">
                        <h5 className="text-lg font-bold text-yellow-300 mb-2">⚡ Dispositifs Connectés</h5>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Chargeurs sans-fil halal</li>
                          <li>• Batteries écologiques</li>
                          <li>• IOT conformité islamique</li>
                          <li>• Certification scholars</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Onglet Processus */}
            <TabsContent value="processus">
              <Card className="border-2 border-yellow-500 bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-center text-yellow-400">
                    📋 Processus d'Achat Exclusif
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {processusAchat.map((etape, index) => (
                      <div key={index} className="flex items-center p-4 bg-gray-800 rounded border border-gray-600">
                        <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-xl mr-6">
                          {etape.etape}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-yellow-400 mb-1">{etape.titre}</h3>
                          <p className="text-gray-300 mb-2">{etape.description}</p>
                          <Badge variant="outline" className="text-green-400 border-green-400">
                            Durée: {etape.duree}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Onglet Localisation */}
            <TabsContent value="localisation">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {localisations.map((lieu, index) => (
                  <Card key={index} className="border-2 border-gray-700 bg-gray-800">
                    <CardHeader>
                      <CardTitle className="text-2xl text-yellow-400 flex items-center">
                        <MapPin className="w-6 h-6 mr-2" />
                        {lieu.ville}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-300">Adresse:</h4>
                        <p className="text-white">{lieu.adresse}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-300">Contact:</h4>
                        <p className="text-yellow-400">{lieu.contact}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-300">Horaires:</h4>
                        <p className="text-white">{lieu.horaires}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-300">Services:</h4>
                        <p className="text-green-400">{lieu.services}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Onglet Commande */}
            <TabsContent value="commande">
              <Card className="border-2 border-yellow-500 bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-center text-yellow-400">
                    🎯 Demande de Véhicule Sur Mesure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className="block text-yellow-400 font-semibold mb-2 text-sm md:text-base">Marque Souhaitée</label>
                        <Select>
                          <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                            <SelectValue placeholder="Sélectionner marque" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mercedes">Mercedes-Maybach</SelectItem>
                            <SelectItem value="bentley">Bentley</SelectItem>
                            <SelectItem value="rolls">Rolls-Royce</SelectItem>
                            <SelectItem value="ferrari">Ferrari</SelectItem>
                            <SelectItem value="lamborghini">Lamborghini</SelectItem>
                            <SelectItem value="mclaren">McLaren</SelectItem>
                            <SelectItem value="autre">Autre (spécifier)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-yellow-400 font-semibold mb-2 text-sm md:text-base">Budget Maximum</label>
                        <Select>
                          <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                            <SelectValue placeholder="Gamme de prix" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="100-200k">100K - 200K CHF</SelectItem>
                            <SelectItem value="200-400k">200K - 400K CHF</SelectItem>
                            <SelectItem value="400-600k">400K - 600K CHF</SelectItem>
                            <SelectItem value="600k+">600K+ CHF</SelectItem>
                            <SelectItem value="unlimited">Budget illimité</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-yellow-400 font-semibold mb-2 text-sm md:text-base">
                        Spécifications Personnalisées
                      </label>
                      <Textarea 
                        className="bg-gray-800 border-gray-600 text-white"
                        placeholder="Décrivez vos souhaits: couleur, intérieur, options, modifications spéciales..."
                        value={demandePersonnalisation}
                        onChange={(e) => setDemandePersonnalisation(e.target.value)}
                        rows={5}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className="block text-yellow-400 font-semibold mb-2 text-sm md:text-base">Mode Financement</label>
                        <Select>
                          <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                            <SelectValue placeholder="Type financement" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cash">Paiement comptant</SelectItem>
                            <SelectItem value="murabaha">Murabaha (achat-revente)</SelectItem>
                            <SelectItem value="ijara">Ijara (location-vente)</SelectItem>
                            <SelectItem value="hybride">Solution hybride</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-yellow-400 font-semibold mb-2 text-sm md:text-base">Délai Souhaité</label>
                        <Select>
                          <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                            <SelectValue placeholder="Urgence livraison" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3mois">3 mois</SelectItem>
                            <SelectItem value="6mois">6 mois</SelectItem>
                            <SelectItem value="12mois">12 mois</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <Button className="bg-yellow-600 hover:bg-yellow-700 text-black text-lg md:text-xl px-8 md:px-12 py-3 md:py-4 w-full sm:w-auto">
                        🚗 Soumettre Demande Exclusive
                      </Button>
                      <p className="text-gray-400 text-xs md:text-sm mt-4 px-4">
                        Un conseiller Al-Amana vous contactera sous 24h pour finaliser votre commande sur mesure
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}

        {/* Navigation */}
        <div className="mt-12 text-center space-x-4">
          <Link href="/ced-bank-mobile">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              🏦 CED Bank Mobile
            </Button>
          </Link>
          <Link href="/al-aman-takaful">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              🛡️ Al-Aman Takaful
            </Button>
          </Link>
          <Link href="/ced-halal-home">
            <Button variant="outline" size="lg" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
              Retour Écosystème CED
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer Exclusif */}
      <div className="mt-16 py-8 border-t-2 border-yellow-500 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <p className="text-yellow-400 text-lg font-medium">
            © Yakoubi Yamina - Al-Amana Auto Halal • Garage Privé Haut de Gamme
          </p>
          <p className="text-gray-400 text-sm mt-2">
            🇨🇭 Genève • 🇦🇪 Dubai • Réservé Clients CED Bank • Sur Commande Uniquement
          </p>
          <p className="text-yellow-500 text-sm mt-2 font-medium">
            Direction: Yakoubi Farid • Écosystème CED HalalTech™ Intégré
          </p>
        </div>
      </div>
    </div>
  );
}