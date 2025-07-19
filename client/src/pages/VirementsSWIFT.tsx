import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Globe, Shield, Clock, DollarSign, MapPin, CheckCircle, Phone, Mail, AlertTriangle } from "lucide-react";
import { useState } from "react";

export default function VirementsSWIFT() {
  const [selectedZone, setSelectedZone] = useState("");
  const [montant, setMontant] = useState("");
  
  const zonesGeographiques = [
    {
      zone: "Zone 1 - Pays du Golfe",
      pays: "UAE, Arabie Saoudite, Qatar, Koweït, Bahreïn, Oman",
      frais: "15 CHF",
      delai: "Même jour",
      couleur: "text-green-500"
    },
    {
      zone: "Zone 2 - Europe & Suisse", 
      pays: "UE, Suisse, Royaume-Uni, Norvège",
      frais: "10 CHF",
      delai: "1-2 jours",
      couleur: "text-blue-500"
    },
    {
      zone: "Zone 3 - Amérique du Nord",
      pays: "USA, Canada",
      frais: "25 CHF", 
      delai: "2-3 jours",
      couleur: "text-purple-500"
    },
    {
      zone: "Zone 4 - Asie-Pacifique",
      pays: "Malaisie, Singapour, Indonésie, Brunei",
      frais: "20 CHF",
      delai: "1-3 jours", 
      couleur: "text-orange-500"
    },
    {
      zone: "Zone 5 - Afrique du Nord",
      pays: "Maroc, Tunisie, Algérie, Égypte",
      frais: "30 CHF",
      delai: "2-4 jours",
      couleur: "text-red-500"
    },
    {
      zone: "Zone 6 - Autres Pays",
      pays: "Tous autres pays du monde",
      frais: "45 CHF", 
      delai: "3-7 jours",
      couleur: "text-gray-500"
    }
  ];

  const avantagesSwift = [
    {
      titre: "Conformité Sharia 100%",
      description: "Tous nos virements respectent strictement les principes islamiques, sans intérêts usuraires",
      icone: Shield,
      couleur: "text-green-500"
    },
    {
      titre: "Réseau SWIFT Mondial", 
      description: "Accès direct au réseau bancaire international SWIFT vers plus de 200 pays",
      icone: Globe,
      couleur: "text-blue-500"
    },
    {
      titre: "Rapidité Garantie",
      description: "Virements express vers les pays du Golfe traités le même jour ouvrable",
      icone: Clock,
      couleur: "text-purple-500"
    },
    {
      titre: "Tarifs Transparents",
      description: "Frais fixes par zone géographique, sans frais cachés ni commissions variables",
      icone: DollarSign,
      couleur: "text-orange-500"
    }
  ];

  const statistiquesVirements = [
    { label: "Virements traités/mois", valeur: "12,847" },
    { label: "Pays couverts", valeur: "200+" }, 
    { label: "Temps moyen", valeur: "2.3 jours" },
    { label: "Taux de réussite", valeur: "99.8%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mr-4">
              <Globe className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Virements SWIFT CED Bank
              </h1>
              <p className="text-xl text-blue-600 dark:text-blue-400 mt-2">
                Transferts Internationaux Halal 🌍
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Effectuez vos virements internationaux en toute conformité avec les principes islamiques. 
            Réseau SWIFT mondial, tarifs transparents et rapidité garantie vers plus de 200 pays.
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {statistiquesVirements.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.valeur}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Zones géographiques et tarifs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center text-gray-900 dark:text-white">
              Tarifs par Zone Géographique
            </CardTitle>
            <CardDescription className="text-center">
              Frais fixes transparents selon la destination de votre virement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {zonesGeographiques.map((zone, index) => (
                <Card key={index} className="border-2 hover:border-blue-300 dark:hover:border-blue-600 transition-colors cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-semibold text-gray-900 dark:text-white">
                        {zone.zone.split(' - ')[1]}
                      </CardTitle>
                      <Badge className={`${zone.couleur} bg-gray-100 dark:bg-gray-700`}>
                        {zone.zone.split(' - ')[0]}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="text-xs text-gray-600 dark:text-gray-300">
                        <MapPin className="h-3 w-3 inline mr-1" />
                        {zone.pays}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-300">Frais:</span>
                        <span className="font-bold text-blue-600 dark:text-blue-400">{zone.frais}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-300">Délai:</span>
                        <span className="font-medium text-green-600 dark:text-green-400">{zone.delai}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Formulaire de virement */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">
                Nouveau Virement International
              </CardTitle>
              <CardDescription>
                Remplissez les informations pour votre transfert halal
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="montant">Montant à envoyer</Label>
                  <Input 
                    id="montant"
                    type="number" 
                    placeholder="1000.00"
                    value={montant}
                    onChange={(e) => setMontant(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="devise">Devise</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="CHF" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CHF">CHF - Franc Suisse</SelectItem>
                      <SelectItem value="EUR">EUR - Euro</SelectItem>
                      <SelectItem value="USD">USD - Dollar US</SelectItem>
                      <SelectItem value="AED">AED - Dirham UAE</SelectItem>
                      <SelectItem value="SAR">SAR - Riyal Saoudien</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="beneficiaire">Nom du bénéficiaire</Label>
                <Input id="beneficiaire" placeholder="Nom complet du destinataire" />
              </div>

              <div>
                <Label htmlFor="iban">IBAN ou numéro de compte</Label>
                <Input id="iban" placeholder="IBAN international ou numéro de compte" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="banque">Banque destinataire</Label>
                  <Input id="banque" placeholder="Nom de la banque" />
                </div>
                <div>
                  <Label htmlFor="swift">Code SWIFT/BIC</Label>
                  <Input id="swift" placeholder="Code SWIFT" />
                </div>
              </div>

              <div>
                <Label htmlFor="zone">Zone géographique</Label>
                <Select value={selectedZone} onValueChange={setSelectedZone}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez la zone de destination" />
                  </SelectTrigger>
                  <SelectContent>
                    {zonesGeographiques.map((zone, index) => (
                      <SelectItem key={index} value={zone.zone}>
                        {zone.zone} - {zone.frais}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="motif">Motif du virement</Label>
                <Textarea 
                  id="motif" 
                  placeholder="Précisez le motif du transfert (famille, business, etc.)"
                  className="resize-none"
                  rows={3}
                />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Valider le virement
              </Button>
            </CardContent>
          </Card>

          {/* Avantages */}
          <div className="space-y-6">
            <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700">
              <CardHeader>
                <CardTitle className="text-green-800 dark:text-green-200 flex items-center">
                  <CheckCircle className="mr-3 h-6 w-6" />
                  Conformité Sharia Garantie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                    Aucun intérêt usuraire (Riba) appliqué
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                    Validation par comité Sharia CED
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                    Contrats conformes Fiqh Mu'amalat
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                    Certification AAOIFI & OIC
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">
                  Nos Avantages SWIFT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {avantagesSwift.map((avantage, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full mr-3 flex-shrink-0">
                        <avantage.icone className={`h-4 w-4 ${avantage.couleur}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">
                          {avantage.titre}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          {avantage.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Avertissements réglementaires */}
        <Card className="mb-8 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700">
          <CardHeader>
            <CardTitle className="flex items-center text-orange-800 dark:text-orange-200">
              <AlertTriangle className="mr-3 h-6 w-6" />
              Informations Importantes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-orange-700 dark:text-orange-300">
              <div>
                <h3 className="font-semibold mb-2">Délais de traitement</h3>
                <ul className="space-y-1 text-xs">
                  <li>• Les délais commencent après validation du dossier complet</li>
                  <li>• Virements reçus avant 14h traités le jour même</li>
                  <li>• Week-ends et jours fériés non comptabilisés</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Documentation requise</h3>
                <ul className="space-y-1 text-xs">
                  <li>• Pièce d'identité valide du donneur d'ordre</li>
                  <li>• Justificatif d'origine des fonds si &gt; 15'000 CHF</li>
                  <li>• Facture ou contrat pour virements commerciaux</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700">
          <CardHeader className="text-center">
            <CardTitle className="text-blue-800 dark:text-blue-200">
              Assistance Virements SWIFT
            </CardTitle>
            <CardDescription className="text-blue-600 dark:text-blue-400">
              Notre équipe spécialisée à votre service
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button className="flex items-center bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 h-4 w-4" />
                +41 22 123 45 70
              </Button>
              <Button variant="outline" className="flex items-center border-blue-300 text-blue-700 hover:bg-blue-50 dark:border-blue-600 dark:text-blue-300">
                <Mail className="mr-2 h-4 w-4" />
                swift@ced-bank.com
              </Button>
            </div>
            <p className="text-sm text-blue-600 dark:text-blue-400 mt-4">
              Disponible 24/7 • Support multilingue • Suivi en temps réel
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}