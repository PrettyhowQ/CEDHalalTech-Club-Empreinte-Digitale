import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Car, 
  Wrench, 
  Shield, 
  CheckCircle, 
  Clock, 
  MapPin,
  Phone,
  Star,
  CreditCard,
  Users,
  Settings,
  Award,
  Heart
} from 'lucide-react';

export default function GaragesHalal() {
  const garages = [
    {
      nom: "Garage Al-Aman Genève",
      adresse: "Route de Meyrin 123, 1202 Genève",
      specialites: ["Entretien préventif", "Réparations majeures", "Carrosserie"],
      certification: "100% Halal",
      note: 4.9,
      horaires: "Lu-Ve: 7h-18h | Sa: 8h-16h",
      telephone: "+41 22 123 45 67",
      status: "Opérationnel"
    },
    {
      nom: "Garage Barakah Lausanne", 
      adresse: "Avenue de la Paix 45, 1006 Lausanne",
      specialites: ["Mécanique générale", "Électronique auto", "Pneumatiques"],
      certification: "100% Halal",
      note: 4.8,
      horaires: "Lu-Ve: 8h-17h | Sa: 9h-15h",
      telephone: "+41 21 987 65 43",
      status: "Opérationnel"
    },
    {
      nom: "Garage Tawfiq Berne",
      adresse: "Bernstrasse 78, 3008 Berne", 
      specialites: ["Hybride/Électrique", "Climatisation", "Freinage"],
      certification: "100% Halal",
      note: 4.7,
      horaires: "Lu-Ve: 7h30-18h | Sa: 8h-14h",
      telephone: "+41 31 456 78 90",
      status: "Bientôt ouvert"
    }
  ];

  const services = [
    {
      nom: "Financement Halal",
      description: "Achat véhicule sans riba via Murabaha",
      icone: CreditCard,
      couleur: "text-green-600 bg-green-50"
    },
    {
      nom: "Respect des Prières",
      description: "Interruption services pendant prières obligatoires",
      icone: Clock,
      couleur: "text-blue-600 bg-blue-50"
    },
    {
      nom: "Équipe Musulmane",
      description: "Personnel formé aux valeurs islamiques",
      icone: Users,
      couleur: "text-purple-600 bg-purple-50"
    },
    {
      nom: "Garantie Transparente",
      description: "Devis détaillés sans frais cachés",
      icone: Shield,
      couleur: "text-emerald-600 bg-emerald-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 dark:from-gray-900 dark:via-blue-900 dark:to-emerald-900">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Car className="h-16 w-16 text-blue-200" />
            <h1 className="text-5xl font-bold">
              🚗 Garages Halal Network
            </h1>
            <Wrench className="h-16 w-16 text-emerald-200" />
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-100">
            Service Automobile 100% Conforme aux Valeurs Islamiques
          </h2>
          <p className="text-xl text-emerald-100 max-w-4xl mx-auto">
            Réseau de garages automobiles respectant strictement les principes islamiques : 
            financement sans riba, respect des horaires de prières, équipe musulmane qualifiée
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Services Spéciaux */}
        <Card className="mb-12">
          <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
            <CardTitle className="text-2xl flex items-center gap-3">
              <Star className="h-8 w-8" />
              Services Conformes aux Valeurs Islamiques
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className={`text-center p-6 rounded-lg ${service.couleur}`}>
                  <service.icone className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{service.nom}</h3>
                  <p className="text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Liste des Garages */}
        <Card className="mb-12">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
            <CardTitle className="text-2xl flex items-center gap-3">
              <MapPin className="h-8 w-8" />
              Nos Garages Certifiés Halal
            </CardTitle>
            <p className="text-blue-100 mt-2">
              Réseau en expansion - 3 garages opérationnels en Suisse
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {garages.map((garage, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-gray-50">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl text-gray-800">{garage.nom}</CardTitle>
                      <Badge variant={garage.status === "Opérationnel" ? "default" : "secondary"}>
                        {garage.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(garage.note) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">{garage.note}/5</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">{garage.adresse}</p>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <Phone className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">{garage.telephone}</p>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <Clock className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">{garage.horaires}</p>
                      </div>

                      <div>
                        <p className="font-semibold text-sm text-gray-800 mb-2">Spécialités:</p>
                        <div className="flex flex-wrap gap-2">
                          {garage.specialites.map((specialite, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {specialite}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-emerald-600" />
                        <Badge className="bg-emerald-100 text-emerald-800">
                          {garage.certification}
                        </Badge>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700" size="sm">
                          <Phone className="h-4 w-4 mr-2" />
                          Appeler
                        </Button>
                        <Button variant="outline" className="flex-1" size="sm">
                          <MapPin className="h-4 w-4 mr-2" />
                          Localiser
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Processus de Certification */}
        <Card className="mb-12">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <CardTitle className="text-2xl flex items-center gap-3">
              <CheckCircle className="h-8 w-8" />
              Processus de Certification Halal
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-bold text-blue-800 mb-3">Audit Initial</h3>
                <p className="text-sm text-gray-700">
                  Vérification complète des pratiques commerciales et conformité islamique
                </p>
              </div>

              <div className="text-center p-6 bg-emerald-50 rounded-lg">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-bold text-emerald-800 mb-3">Formation Équipe</h3>
                <p className="text-sm text-gray-700">
                  Formation du personnel aux valeurs islamiques et respect horaires prières
                </p>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-bold text-purple-800 mb-3">Intégration CED Bank</h3>
                <p className="text-sm text-gray-700">
                  Connexion système paiement halal et financement sans riba
                </p>
              </div>

              <div className="text-center p-6 bg-yellow-50 rounded-lg">
                <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="font-bold text-yellow-800 mb-3">Certification</h3>
                <p className="text-sm text-gray-700">
                  Délivrance certificat halal et intégration réseau CED
                </p>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              🚗 Rejoignez le Réseau Garages Halal
            </h3>
            <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">
              Vous êtes garagiste et souhaitez rejoindre notre réseau certifié halal ? 
              Contactez-nous pour découvrir les avantages de la certification CED.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 py-3">
                <Phone className="h-5 w-5 mr-2" />
                Nous Contacter
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3">
                <Settings className="h-5 w-5 mr-2" />
                Demander Certification
              </Button>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Footer Protection */}
      <div className="mt-12 p-6 bg-gray-100 text-center text-sm text-gray-600">
        <p className="mb-2">
          🔒 <strong>Protection Intellectuelle Yakoubi Yamina</strong> - Tous droits réservés
        </p>
        <p>
          Réseau "Garages Halal" développé selon principes islamiques authentiques | 
          Conformité 100% Fiqh informatique validée
        </p>
      </div>

    </div>
  );
}