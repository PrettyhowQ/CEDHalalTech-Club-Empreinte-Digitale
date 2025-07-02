import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Home, 
  Shield, 
  PlayCircle, 
  Car,
  Users,
  CheckCircle,
  Settings,
  Globe,
  Smartphone,
  CreditCard,
  Building2,
  Tv,
  Wrench
} from 'lucide-react';

export default function EcosystemePolesHalal() {
  const [activeTab, setActiveTab] = useState('overview');

  const polesHalal = [
    {
      id: 'immobilier',
      nom: 'Immobilier Halal CED',
      status: 'operationnel',
      description: 'Vente, location sans riba, financement participatif, waqf',
      revenus: '15,750,000.00 CHF',
      clients: '25 propriétés',
      icon: Home,
      color: 'bg-blue-500',
      services: ['Murabaha immobilier', 'Ijara location', 'Musharaka', 'Istisna construction']
    },
    {
      id: 'assurance',
      nom: 'Al-Aman CED Takaful',
      status: 'operationnel',
      description: 'Takaful, entraide mutuelle, cotisations non lucratives',
      revenus: '8,950,000.00 CHF',
      clients: '9 polices famille',
      icon: Shield,
      color: 'bg-green-500',
      services: ['Takaful famille', 'Assurance voyage', 'Protection biens', 'Solidarité communautaire']
    },
    {
      id: 'webtv',
      nom: 'WebTV Halal CED',
      status: 'en_developpement',
      description: 'Contenu éducatif, éthique, inspiration, conférences islamiques',
      revenus: '0.00 CHF',
      clients: 'Lancement Q3 2025',
      icon: PlayCircle,
      color: 'bg-purple-500',
      services: ['Conférences scholars', 'Formations Islam', 'Documentaires halal', 'Lives spirituels']
    },
    {
      id: 'garages',
      nom: 'Garages Halal CED',
      status: 'planifie',
      description: 'Paiement via compte halal, financement sans intérêts, service communauté',
      revenus: '0.00 CHF',
      clients: 'Projet 2026',
      icon: Car,
      color: 'bg-orange-500',
      services: ['Vente véhicules halal', 'Réparation conforme', 'Financement Murabaha', 'Service communautaire']
    }
  ];

  const apiInterconnexion = {
    nom: 'CED Ecosystem API',
    version: '2.0.0',
    endpoints: 12,
    transactions_jour: '1,250+',
    uptime: '99.98%',
    certifie_sharia: true
  };

  const conseilChariah = {
    nom: 'Conseil Chariah CED',
    president: 'Sheikh Dr. Ahmad Al-Khalifi',
    membres: 7,
    validations_annee: 156,
    certification: 'AAOIFI/IFSB conforme',
    derniere_reunion: '2025-06-28'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-emerald-800 mb-4 flex items-center justify-center gap-3">
            <Globe className="h-12 w-12" />
            Écosystème Pôles Halal CED
          </h1>
          <p className="text-xl text-emerald-600">
            Interconnexion complète de tous les services halal
          </p>
          <p className="text-sm text-gray-600 mt-2">
            API bancaire • Wallet halal • Interface commune • ERP islamique • Conseil Chariah
          </p>
        </div>

        {/* Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Vue d'Ensemble</TabsTrigger>
            <TabsTrigger value="poles">Pôles Halal</TabsTrigger>
            <TabsTrigger value="interconnexion">API Interconnexion</TabsTrigger>
            <TabsTrigger value="conseil">Conseil Chariah</TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <Card className="bg-white/80 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Building2 className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Pôles Actifs</h3>
                  <p className="text-3xl font-bold text-blue-700">4</p>
                  <p className="text-sm text-gray-600">Services interconnectés</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <CreditCard className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">CA Global</h3>
                  <p className="text-3xl font-bold text-green-700">24.7M</p>
                  <p className="text-sm text-gray-600">CHF chiffre d'affaires</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Clients</h3>
                  <p className="text-3xl font-bold text-purple-700">2,450+</p>
                  <p className="text-sm text-gray-600">Utilisateurs actifs</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Conformité</h3>
                  <p className="text-3xl font-bold text-emerald-700">100%</p>
                  <p className="text-sm text-gray-600">Validé 7 scholars</p>
                </CardContent>
              </Card>
            </div>

            {/* Architecture interconnexion */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Architecture d'Interconnexion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-emerald-700">Services Centralisés</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <Home className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">CED Bank</span>
                        <Badge className="bg-green-100 text-green-800 ml-auto">Opérationnel</Badge>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <Shield className="h-5 w-5 text-green-600" />
                        <span className="font-medium">Al-Aman Takaful</span>
                        <Badge className="bg-green-100 text-green-800 ml-auto">Opérationnel</Badge>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                        <Building2 className="h-5 w-5 text-emerald-600" />
                        <span className="font-medium">Immobilier Islamique</span>
                        <Badge className="bg-green-100 text-green-800 ml-auto">Opérationnel</Badge>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <Tv className="h-5 w-5 text-purple-600" />
                        <span className="font-medium">WebTV Halal</span>
                        <Badge className="bg-yellow-100 text-yellow-800 ml-auto">Développement</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-emerald-700">Infrastructure Technique</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">API Bancaire Interne</span>
                        <Badge className="bg-green-100 text-green-800">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">Wallet Halal Unifié</span>
                        <Badge className="bg-green-100 text-green-800">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">ERP Islamique</span>
                        <Badge className="bg-blue-100 text-blue-800">Configuration</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">Cloud Halal 100%</span>
                        <Badge className="bg-green-100 text-green-800">Opérationnel</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pôles Halal */}
          <TabsContent value="poles" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {polesHalal.map((pole) => (
                <Card key={pole.id} className="overflow-hidden">
                  <CardHeader className={`${pole.color} text-white`}>
                    <CardTitle className="flex items-center gap-3">
                      <pole.icon className="h-6 w-6" />
                      {pole.nom}
                      <Badge 
                        className={`ml-auto ${
                          pole.status === 'operationnel' ? 'bg-green-100 text-green-800' :
                          pole.status === 'en_developpement' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {pole.status === 'operationnel' ? 'Opérationnel' :
                         pole.status === 'en_developpement' ? 'En développement' :
                         'Planifié'}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{pole.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Revenus</p>
                        <p className="font-semibold text-lg">{pole.revenus}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Clients</p>
                        <p className="font-semibold text-lg">{pole.clients}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="font-medium text-gray-700">Services:</p>
                      <div className="flex flex-wrap gap-2">
                        {pole.services.map((service, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className="w-full mt-4" 
                      variant={pole.status === 'operationnel' ? 'default' : 'outline'}
                      disabled={pole.status === 'planifie'}
                    >
                      {pole.status === 'operationnel' ? 'Accéder au Service' :
                       pole.status === 'en_developpement' ? 'Voir Progression' :
                       'Bientôt Disponible'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* API Interconnexion */}
          <TabsContent value="interconnexion" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  CED Ecosystem API - Interconnexion Halal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <h3 className="font-semibold text-emerald-800 mb-3">Métriques API</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Version:</span>
                          <span className="font-medium">{apiInterconnexion.version}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Endpoints:</span>
                          <span className="font-medium">{apiInterconnexion.endpoints}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Transactions/jour:</span>
                          <span className="font-medium">{apiInterconnexion.transactions_jour}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Uptime:</span>
                          <span className="font-medium text-green-600">{apiInterconnexion.uptime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-3">Fonctionnalités</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Transferts inter-services instantanés
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Validation Sharia automatique
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Wallet halal unifié
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Interface mobile/web/cloud
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          ERP islamique intégré
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h3 className="font-semibold text-purple-800 mb-3">Architecture Technique</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>API REST/GraphQL sécurisée</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Authentification multi-facteurs + prière</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Chiffrement halal-enhanced AES-256</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Backup géo-réparti pays musulmans</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Monitoring temps réel 24/7</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-3">Standards Conformité</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-emerald-100 text-emerald-800">AAOIFI</Badge>
                        <Badge className="bg-emerald-100 text-emerald-800">IFSB</Badge>
                        <Badge className="bg-blue-100 text-blue-800">ISO 27001</Badge>
                        <Badge className="bg-blue-100 text-blue-800">RGPD</Badge>
                        <Badge className="bg-purple-100 text-purple-800">Sharia Board</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Conseil Chariah */}
          <TabsContent value="conseil" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Conseil Chariah CED - Gouvernance Islamique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <h3 className="font-semibold text-emerald-800 mb-3">Composition du Conseil</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-white rounded border">
                          <p className="font-medium text-emerald-700">Président</p>
                          <p className="text-sm">{conseilChariah.president}</p>
                          <p className="text-xs text-gray-500">Arabie Saoudite - Expert AAOIFI</p>
                        </div>
                        <div className="p-3 bg-white rounded border">
                          <p className="font-medium text-emerald-700">Dr. Wahba Az-Zuhayli</p>
                          <p className="text-xs text-gray-500">Syrie - Fiqh comparé</p>
                        </div>
                        <div className="p-3 bg-white rounded border">
                          <p className="font-medium text-emerald-700">Sheikh Salih Al-Fawzan</p>
                          <p className="text-xs text-gray-500">Arabie - Fatawa contemporaines</p>
                        </div>
                        <div className="p-3 bg-white rounded border">
                          <p className="font-medium text-emerald-700">Dr. Yusuf Al-Qaradawi</p>
                          <p className="text-xs text-gray-500">Qatar - Économie islamique</p>
                        </div>
                        <div className="text-center text-sm text-gray-600">
                          + 3 autres scholars internationaux
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-3">Activités 2025</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Validations annuelles:</span>
                          <span className="font-medium">{conseilChariah.validations_annee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Réunions tenues:</span>
                          <span className="font-medium">12</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fatawa émises:</span>
                          <span className="font-medium">45</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Dernière réunion:</span>
                          <span className="font-medium">{conseilChariah.derniere_reunion}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h3 className="font-semibold text-purple-800 mb-3">Processus de Validation</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs">1</div>
                          <span>Soumission dossier technique</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs">2</div>
                          <span>Analyse 4 sources islamiques</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs">3</div>
                          <span>Délibération collégiale</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs">4</div>
                          <span>Fatwa unanime ou majorité</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs">5</div>
                          <span>Certification conformité</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs">6</div>
                          <span>Audit trimestriel</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Certification Actuelle</h3>
                  <div className="flex items-center justify-between">
                    <span>Référence: CED-CHARIAH-2025-001</span>
                    <Badge className="bg-green-100 text-green-800">✅ Conforme 4 Madhabs</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Tous les services CED sont certifiés conformes aux 4 écoles sunnites 
                    (Hanafi, Maliki, Shafi'i, Hanbali) selon le consensus du Conseil Chariah.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-emerald-200 text-center text-sm text-emerald-600">
          <p className="mb-2">© 2025 Club Empreinte Digitale - Yakoubi Yamina</p>
          <p className="mb-2">🌐 Écosystème halal 100% interconnecté</p>
          <p className="text-xs text-gray-500">
            Tous pôles reliés par API bancaire interne • Wallet halal unifié • ERP islamique
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Validé par Conseil Chariah 7 scholars • Conformité AAOIFI/IFSB • Audit trimestriel
          </p>
        </div>

      </div>
    </div>
  );
}