import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText,
  Download,
  Euro,
  Calculator,
  Building2,
  MapPin,
  Calendar,
  CheckCircle,
  Printer,
  Mail,
  Phone,
  User,
  Shield,
  Award,
  Percent,
  DollarSign
} from "lucide-react";

interface DocumentLegal {
  id: string;
  type: 'recu_fiscal' | 'attestation_don' | 'certificat_conformite' | 'rapport_impact';
  donationId: string;
  donorName: string;
  donorAddress: string;
  donorTaxId: string;
  country: string;
  donationValue: number;
  taxBenefit: number;
  taxSaved: number;
  issuedDate: Date;
  validUntil: Date;
  documentNumber: string;
  status: 'draft' | 'issued' | 'sent' | 'received';
}

interface TaxCalculation {
  country: string;
  donationValue: number;
  taxRate: number;
  maxDeduction: number;
  taxSaved: number;
  remainingCredit: number;
}

export default function DocumentsLegauxAutomatiques() {
  const [selectedTab, setSelectedTab] = useState('generator');
  const [donationValue, setDonationValue] = useState(5000);
  const [selectedCountry, setSelectedCountry] = useState('CH');

  const countries = [
    { 
      code: 'CH', 
      name: 'Suisse', 
      flag: '🇨🇭', 
      taxRate: 75, 
      maxDeduction: 0.20,
      currency: 'CHF',
      legalFramework: 'Loi fédérale sur les déductions fiscales pour dons'
    },
    { 
      code: 'FR', 
      name: 'France', 
      flag: '🇫🇷', 
      taxRate: 66, 
      maxDeduction: 0.20,
      currency: 'EUR',
      legalFramework: 'Article 200 du Code général des impôts'
    },
    { 
      code: 'DE', 
      name: 'Allemagne', 
      flag: '🇩🇪', 
      taxRate: 60, 
      maxDeduction: 0.20,
      currency: 'EUR',
      legalFramework: '§10b EStG - Sonderausgaben'
    },
    { 
      code: 'IT', 
      name: 'Italie', 
      flag: '🇮🇹', 
      taxRate: 65, 
      maxDeduction: 0.10,
      currency: 'EUR',
      legalFramework: 'Decreto legislativo 460/97'
    },
    { 
      code: 'AT', 
      name: 'Autriche', 
      flag: '🇦🇹', 
      taxRate: 50, 
      maxDeduction: 0.10,
      currency: 'EUR',
      legalFramework: 'Einkommensteuergesetz §4a'
    },
    { 
      code: 'ES', 
      name: 'Espagne', 
      flag: '🇪🇸', 
      taxRate: 35, 
      maxDeduction: 0.10,
      currency: 'EUR',
      legalFramework: 'Ley 49/2002 de régimen fiscal'
    }
  ];

  const recentDocuments: DocumentLegal[] = [
    {
      id: 'doc-001',
      type: 'recu_fiscal',
      donationId: 'don-001',
      donorName: 'Entreprise TechCorp SA',
      donorAddress: 'Route de Chêne 15, 1201 Genève, Suisse',
      donorTaxId: 'CHE-123.456.789',
      country: 'CH',
      donationValue: 3200,
      taxBenefit: 75,
      taxSaved: 2400,
      issuedDate: new Date('2025-06-20'),
      validUntil: new Date('2026-04-30'),
      documentNumber: 'TFA-CH-2025-001',
      status: 'issued'
    },
    {
      id: 'doc-002',
      type: 'recu_fiscal',
      donationId: 'don-002',
      donorName: 'Construction Helvetica AG',
      donorAddress: 'Bundesplatz 8, 3000 Berne, Suisse',
      donorTaxId: 'CHE-987.654.321',
      country: 'CH',
      donationValue: 85000,
      taxBenefit: 75,
      taxSaved: 63750,
      issuedDate: new Date('2025-06-18'),
      validUntil: new Date('2026-04-30'),
      documentNumber: 'TFA-CH-2025-002',
      status: 'sent'
    },
    {
      id: 'doc-003',
      type: 'recu_fiscal',
      donationId: 'don-003',
      donorName: 'Famille Dubois',
      donorAddress: '12 Avenue de la République, 69000 Lyon, France',
      donorTaxId: 'FR-12345678901',
      country: 'FR',
      donationValue: 95000,
      taxBenefit: 66,
      taxSaved: 62700,
      issuedDate: new Date('2025-06-15'),
      validUntil: new Date('2026-05-31'),
      documentNumber: 'TFA-FR-2025-001',
      status: 'received'
    }
  ];

  const calculateTax = (value: number, country: string): TaxCalculation => {
    const countryData = countries.find(c => c.code === country);
    if (!countryData) return { country, donationValue: value, taxRate: 0, maxDeduction: 0, taxSaved: 0, remainingCredit: 0 };

    const taxSaved = Math.round(value * countryData.taxRate / 100);
    
    return {
      country: countryData.name,
      donationValue: value,
      taxRate: countryData.taxRate,
      maxDeduction: countryData.maxDeduction,
      taxSaved,
      remainingCredit: 0
    };
  };

  const generateDocumentNumber = (country: string, type: string): string => {
    const year = new Date().getFullYear();
    const seq = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `TFA-${country}-${year}-${seq}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'issued': return 'bg-blue-100 text-blue-800';
      case 'sent': return 'bg-yellow-100 text-yellow-800';
      case 'received': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const currentCalculation = calculateTax(donationValue, selectedCountry);
  const selectedCountryData = countries.find(c => c.code === selectedCountry);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Documents Légaux Automatiques</h1>
              <h2 className="text-2xl text-blue-600">TechForAll Association</h2>
              <p className="text-gray-600">Génération automatique reçus fiscaux et documents légaux</p>
            </div>
          </div>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="generator" className="flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              Générateur
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Documents
            </TabsTrigger>
            <TabsTrigger value="tax-calculator" className="flex items-center gap-2">
              <Percent className="h-4 w-4" />
              Simulateur
            </TabsTrigger>
            <TabsTrigger value="legal-framework" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Cadre Légal
            </TabsTrigger>
          </TabsList>

          {/* Générateur automatique */}
          <TabsContent value="generator" className="space-y-6">
            <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
              <CardContent className="p-8">
                <div className="text-center">
                  <Calculator className="h-16 w-16 mx-auto mb-4 text-white" />
                  <h2 className="text-3xl font-bold mb-4">Générateur Automatique</h2>
                  <p className="text-lg opacity-90 mb-6">
                    Génération instantanée de tous vos documents légaux et reçus fiscaux
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm opacity-90">Automatique</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">25+</div>
                      <div className="text-sm opacity-90">Pays couverts</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">75%</div>
                      <div className="text-sm opacity-90">Déduction max</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">24h</div>
                      <div className="text-sm opacity-90">Délai émission</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-blue-600" />
                    Nouveau Document
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Nom/Entreprise donateur</label>
                      <Input placeholder="Nom complet ou raison sociale" />
                    </div>

                    <div>
                      <label className="text-sm font-medium">Adresse complète</label>
                      <Input placeholder="Adresse, code postal, ville" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Pays</label>
                        <select 
                          className="w-full p-2 border rounded-md"
                          value={selectedCountry}
                          onChange={(e) => setSelectedCountry(e.target.value)}
                        >
                          {countries.map((country) => (
                            <option key={country.code} value={country.code}>
                              {country.flag} {country.name} ({country.taxRate}%)
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium">N° identification fiscale</label>
                        <Input placeholder="N° TVA ou SIRET" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium">Valeur du don ({selectedCountryData?.currency})</label>
                      <Input 
                        type="number" 
                        value={donationValue}
                        onChange={(e) => setDonationValue(Number(e.target.value))}
                        placeholder="5000" 
                      />
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Calcul automatique:</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Taux déduction:</span>
                          <div className="font-semibold text-green-600">{currentCalculation.taxRate}%</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Économie fiscale:</span>
                          <div className="font-semibold text-green-600">
                            {currentCalculation.taxSaved.toLocaleString()} {selectedCountryData?.currency}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium">Documents à générer:</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Reçu fiscal officiel</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Attestation de don</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Certificat de conformité</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Rapport d'impact écologique</span>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full">
                      <FileText className="h-4 w-4 mr-2" />
                      Générer tous les documents
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-orange-600" />
                    Aperçu Reçu Fiscal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 p-6 bg-gray-50 rounded-lg">
                    <div className="text-center mb-6">
                      <div className="font-bold text-lg">TechForAll Association</div>
                      <div className="text-sm text-gray-600">Association à but non lucratif - Siège: Genève, Suisse</div>
                      <div className="text-xs text-gray-500">CHE-XXX.XXX.XXX TVA</div>
                    </div>

                    <div className="border-t border-gray-300 pt-4 mb-4">
                      <div className="text-center font-semibold mb-3">REÇU FISCAL / SPENDENQUITTUNG</div>
                      <div className="text-center text-xs mb-4">
                        Document N°: {generateDocumentNumber(selectedCountry, 'RF')}
                      </div>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-gray-600">Donateur:</span>
                          <div className="font-medium">[Nom donateur]</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Date:</span>
                          <div className="font-medium">{new Date().toLocaleDateString('fr-FR')}</div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-3 rounded border-l-4 border-l-blue-500">
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-800">
                            {donationValue.toLocaleString()} {selectedCountryData?.currency}
                          </div>
                          <div className="text-xs text-blue-600">Valeur du don</div>
                        </div>
                      </div>

                      <div className="bg-green-50 p-3 rounded border-l-4 border-l-green-500">
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-800">
                            {currentCalculation.taxSaved.toLocaleString()} {selectedCountryData?.currency}
                          </div>
                          <div className="text-xs text-green-600">
                            Économie fiscale ({currentCalculation.taxRate}%)
                          </div>
                        </div>
                      </div>

                      <div className="text-xs text-gray-600 border-t pt-3">
                        <div>Cadre légal: {selectedCountryData?.legalFramework}</div>
                        <div>Valable jusqu'au: 30/04/2026</div>
                        <div className="mt-2">
                          Cette association est reconnue d'utilité publique. 
                          Ce don ouvre droit à une réduction d'impôt.
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t text-xs text-center text-gray-500">
                      Document généré automatiquement - Yakoubi Yamina
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Documents émis */}
          <TabsContent value="documents" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {recentDocuments.map((doc) => (
                <Card key={doc.id} className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{doc.donorName}</CardTitle>
                        <p className="text-sm text-gray-600">{doc.documentNumber}</p>
                      </div>
                      <Badge className={getStatusColor(doc.status)}>
                        {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Valeur don:</span>
                          <div className="font-semibold text-blue-600">
                            {doc.donationValue.toLocaleString()} CHF
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-600">Économie fiscale:</span>
                          <div className="font-semibold text-green-600">
                            {doc.taxSaved.toLocaleString()} CHF
                          </div>
                        </div>
                      </div>

                      <div className="text-xs text-gray-600">
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin className="h-3 w-3" />
                          <span>{doc.donorAddress}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="h-3 w-3" />
                          <span>Émis le {doc.issuedDate.toLocaleDateString('fr-FR')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="h-3 w-3" />
                          <span>Valable jusqu'au {doc.validUntil.toLocaleDateString('fr-FR')}</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Télécharger
                        </Button>
                        <Button variant="outline" size="sm">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Printer className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Simulateur fiscal */}
          <TabsContent value="tax-calculator" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-green-600" />
                  Simulateur Avantages Fiscaux
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Montant du don</label>
                      <Input 
                        type="number" 
                        value={donationValue}
                        onChange={(e) => setDonationValue(Number(e.target.value))}
                        placeholder="5000" 
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium">Pays de résidence fiscale</label>
                      <select 
                        className="w-full p-2 border rounded-md"
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                      >
                        {countries.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.flag} {country.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {selectedCountryData && (
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-3">
                          Simulation pour {selectedCountryData.name}
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Montant du don:</span>
                            <span className="font-semibold">{donationValue.toLocaleString()} {selectedCountryData.currency}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Taux de réduction:</span>
                            <span className="font-semibold text-green-600">{selectedCountryData.taxRate}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Plafond déduction:</span>
                            <span className="font-semibold">{(selectedCountryData.maxDeduction * 100)}% revenu</span>
                          </div>
                          <div className="border-t pt-2 flex justify-between">
                            <span className="font-medium">Économie fiscale:</span>
                            <span className="font-bold text-green-600">
                              {currentCalculation.taxSaved.toLocaleString()} {selectedCountryData.currency}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Comparaison par pays</h4>
                    <div className="space-y-3">
                      {countries.map((country) => {
                        const calc = calculateTax(donationValue, country.code);
                        return (
                          <div key={country.code} className="border rounded-lg p-3">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className="text-lg">{country.flag}</span>
                                <span className="font-medium">{country.name}</span>
                              </div>
                              <Badge className="bg-green-100 text-green-800">
                                {country.taxRate}%
                              </Badge>
                            </div>
                            <div className="text-sm text-gray-600">
                              Économie: <span className="font-semibold text-green-600">
                                {calc.taxSaved.toLocaleString()} {country.currency}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cadre légal */}
          <TabsContent value="legal-framework" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countries.map((country) => (
                <Card key={country.code}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{country.flag}</span>
                      <div>
                        <CardTitle>{country.name}</CardTitle>
                        <p className="text-sm text-gray-600">Réduction {country.taxRate}%</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Cadre légal:</h4>
                        <p className="text-xs text-gray-600">{country.legalFramework}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-600">Taux:</span>
                          <div className="font-semibold text-green-600">{country.taxRate}%</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Plafond:</span>
                          <div className="font-semibold">{(country.maxDeduction * 100)}%</div>
                        </div>
                      </div>

                      {country.code === 'CH' && (
                        <div className="bg-green-50 p-3 rounded-lg">
                          <div className="text-xs text-green-800">
                            <strong>Spécificité Suisse:</strong><br/>
                            • Déduction fédérale + cantonale<br/>
                            • Logement social: 75% déductible<br/>
                            • Association siège social reconnu
                          </div>
                        </div>
                      )}

                      {country.code === 'FR' && (
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <div className="text-xs text-blue-800">
                            <strong>Spécificité France:</strong><br/>
                            • Réduction d'impôt 66%<br/>
                            • Plafond 20% revenu imposable<br/>
                            • Report déficit 5 ans
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <div className="mb-4 p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-700 mb-2">
              Yakoubi Yamina – Tous droits réservés | All rights reserved | جميع الحقوق محفوظة | 版权所有
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-2">
              <span>🇪🇺 Conforme RGPD</span>
              <span>🇨🇭 LPD Suisse</span>
              <span>🔒 Hébergement sécurisé Suisse</span>
              <span>🛡️ Données confidentielles protégées</span>
            </div>
            <p className="text-xs text-gray-600 mb-2">
              Projet confidentiel – Traçabilité numérique activée – Usage exclusif réservé à l'écosystème CED & PrettyhowQ
            </p>
            <p className="text-xs text-gray-600">
              Ce projet, son contenu, son code, ses idées, ses visuels, ses textes et sa structure sont la propriété exclusive de Yakoubi Yamina. 
              Toute reproduction, diffusion, extraction, adaptation, modification ou exploitation – totale ou partielle – sans autorisation écrite préalable 
              est strictement interdite et fera l'objet de poursuites judiciaires conformément au Code de la propriété intellectuelle (France / Europe / International).
            </p>
          </div>
          <p className="mb-2">
            © 2025 TechForAll - Documents légaux automatiques - Conformité fiscale européenne - Yakoubi Yamina
          </p>
          <p className="font-semibold text-blue-600">
            📌 Version complète – Système légal opérationnel 📎
          </p>
        </div>
      </div>
    </div>
  );
}