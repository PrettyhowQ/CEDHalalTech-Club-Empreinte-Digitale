import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Banknote, Globe, Shield, CheckCircle, Clock, AlertCircle, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function VirementsSWIFT() {
  const [montant, setMontant] = useState("");
  const [devise, setDevise] = useState("CHF");
  const [pays, setPays] = useState("");
  
  const tarifsSWIFT = [
    {
      zone: "Europe SEPA",
      pays: "27 pays UE + Suisse",
      tarif: "5 CHF",
      delai: "1-2 jours ouvrables",
      populaire: true
    },
    {
      zone: "Moyen-Orient",
      pays: "UAE, Arabie Saoudite, Qatar, Koweït",
      tarif: "15 CHF",
      delai: "2-3 jours ouvrables", 
      populaire: true
    },
    {
      zone: "Afrique du Nord",
      pays: "Maroc, Tunisie, Algérie, Égypte",
      tarif: "25 CHF",
      delai: "3-5 jours ouvrables",
      populaire: false
    },
    {
      zone: "Amérique du Nord",
      pays: "États-Unis, Canada",
      tarif: "20 CHF",
      delai: "2-4 jours ouvrables",
      populaire: false
    },
    {
      zone: "Asie",
      pays: "Malaisie, Indonésie, Turquie, Inde",
      tarif: "30 CHF",
      delai: "3-7 jours ouvrables",
      populaire: false
    }
  ];

  const devises = [
    { code: "CHF", nom: "Franc Suisse", taux: "1.00" },
    { code: "EUR", nom: "Euro", taux: "0.93" },
    { code: "USD", nom: "Dollar US", taux: "0.89" },
    { code: "AED", nom: "Dirham UAE", taux: "3.27" },
    { code: "SAR", nom: "Riyal Saoudien", taux: "3.34" },
    { code: "QAR", nom: "Riyal Qatarien", taux: "3.24" },
    { code: "MAD", nom: "Dirham Marocain", taux: "8.92" }
  ];

  const avantagesCED = [
    "Taux de change compétitifs sans marge cachée",
    "0% commission sur les virements famille",
    "Conformité Sharia 100% garantie", 
    "Support multilingue AR/FR/EN",
    "Suivi temps réel de vos virements"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full mr-4">
              <Banknote className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Virements SWIFT CED Bank
              </h1>
              <p className="text-xl text-green-600 dark:text-green-400 mt-2">
                Transferts Internationaux Halal 🌍
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Envoyez de l'argent dans le monde entier avec CED Bank SWIFT - Transferts conformes Sharia 
            vers plus de 200 pays avec taux compétitifs et transparence totale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Formulaire de virement */}
          <Card className="border-green-200 dark:border-green-700">
            <CardHeader className="bg-green-50 dark:bg-green-900/20">
              <CardTitle className="flex items-center text-green-800 dark:text-green-200">
                <Globe className="mr-3 h-6 w-6" />
                Nouveau Virement SWIFT
              </CardTitle>
              <CardDescription>
                Calculez les frais et initiez votre transfert international
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="montant">Montant à envoyer</Label>
                  <Input
                    id="montant"
                    type="number"
                    placeholder="1000"
                    value={montant}
                    onChange={(e) => setMontant(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="devise">Devise</Label>
                  <Select value={devise} onValueChange={setDevise}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {devises.map((dev) => (
                        <SelectItem key={dev.code} value={dev.code}>
                          {dev.code} - {dev.nom}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="pays">Pays de destination</Label>
                <Select value={pays} onValueChange={setPays}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Sélectionnez le pays" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ae">🇦🇪 Émirats Arabes Unis</SelectItem>
                    <SelectItem value="sa">🇸🇦 Arabie Saoudite</SelectItem>
                    <SelectItem value="qa">🇶🇦 Qatar</SelectItem>
                    <SelectItem value="ma">🇲🇦 Maroc</SelectItem>
                    <SelectItem value="tn">🇹🇳 Tunisie</SelectItem>
                    <SelectItem value="fr">🇫🇷 France</SelectItem>
                    <SelectItem value="de">🇩🇪 Allemagne</SelectItem>
                    <SelectItem value="us">🇺🇸 États-Unis</SelectItem>
                    <SelectItem value="my">🇲🇾 Malaisie</SelectItem>
                    <SelectItem value="tr">🇹🇷 Turquie</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {montant && pays && (
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">
                    Récapitulatif du virement
                  </h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Montant envoyé:</span>
                      <span className="font-medium">{montant} {devise}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Frais SWIFT:</span>
                      <span className="font-medium">15 CHF</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taux de change:</span>
                      <span className="font-medium">
                        {devises.find(d => d.code === devise)?.taux || "1.00"}
                      </span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-bold">
                      <span>Total prélevé:</span>
                      <span>{parseFloat(montant) + 15} CHF</span>
                    </div>
                  </div>
                </div>
              )}

              <Button className="w-full bg-green-600 hover:bg-green-700">
                Continuer le virement
              </Button>
            </CardContent>
          </Card>

          {/* Avantages CED */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900 dark:text-white">
                <Shield className="mr-3 h-6 w-6 text-green-500" />
                Avantages CED Bank SWIFT
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {avantagesCED.map((avantage, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{avantage}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center mb-2">
                  <AlertCircle className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="font-semibold text-blue-800 dark:text-blue-200">
                    Conformité Islamique
                  </span>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Tous nos virements SWIFT respectent les principes de la finance islamique. 
                  Aucun intérêt (riba) n'est perçu sur les transferts.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tarifs par zone */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center text-gray-900 dark:text-white">
              Tarifs SWIFT par Zone Géographique
            </CardTitle>
            <CardDescription className="text-center">
              Frais transparents selon la destination de votre virement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tarifsSWIFT.map((zone, index) => (
                <div key={index} className={`p-4 rounded-lg border ${
                  zone.populaire 
                    ? 'border-green-300 bg-green-50 dark:border-green-600 dark:bg-green-900/20' 
                    : 'border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{zone.zone}</h3>
                    {zone.populaire && (
                      <Badge className="bg-green-500 text-xs">Populaire</Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{zone.pays}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600 dark:text-green-400">
                      {zone.tarif}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {zone.delai}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Processus SWIFT */}
        <Card className="mb-8 bg-gradient-to-r from-gray-50 to-green-50 dark:from-gray-800 dark:to-green-900/20">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              Comment Fonctionne un Virement SWIFT CED ?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Initiation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Saisie des coordonnées bancaires du bénéficiaire
                </p>
              </div>
              <div>
                <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Validation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Vérification conformité Sharia et anti-blanchiment
                </p>
              </div>
              <div>
                <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Transmission</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Envoi sécurisé via réseau SWIFT international
                </p>
              </div>
              <div>
                <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 font-bold text-xl">4</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Réception</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Crédit du compte bénéficiaire et notification
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Support SWIFT */}
        <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700">
          <CardHeader className="text-center">
            <CardTitle className="text-green-800 dark:text-green-200">
              Support Virements SWIFT 24/7
            </CardTitle>
            <CardDescription className="text-green-600 dark:text-green-400">
              Équipe spécialisée virements internationaux
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button className="flex items-center bg-green-600 hover:bg-green-700">
                <Phone className="mr-2 h-4 w-4" />
                +41 22 123 45 70
              </Button>
              <Button variant="outline" className="flex items-center border-green-300 text-green-700 hover:bg-green-50 dark:border-green-600 dark:text-green-300">
                <Mail className="mr-2 h-4 w-4" />
                swift@ced-bank.com
              </Button>
            </div>
            <p className="text-sm text-green-600 dark:text-green-400 mt-4">
              Support multilingue • Suivi temps réel • Conformité Sharia garantie
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}