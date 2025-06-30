import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  Lock, 
  Eye, 
  Key, 
  Fingerprint,
  Smartphone,
  AlertTriangle,
  CheckCircle,
  Clock,
  Users,
  Server,
  Zap
} from 'lucide-react';

export function SecurityBankingRobust() {
  const securityMetrics = {
    threatsPrevented: "12,847",
    uptime: "99.98%",
    encryptionLevel: "AES-256",
    complianceScore: 98,
    lastIncident: "Aucun depuis 847 jours"
  };

  const securityFeatures = [
    {
      id: 1,
      name: "Authentification 2FA",
      description: "Double authentification obligatoire pour tous les comptes",
      status: "Actif",
      coverage: 100,
      icon: <Fingerprint className="h-6 w-6" />,
      details: "SMS + App authenticator + Biométrie"
    },
    {
      id: 2,
      name: "Chiffrement End-to-End",
      description: "Toutes les transactions chiffrées AES-256",
      status: "Actif",
      coverage: 100,
      icon: <Lock className="h-6 w-6" />,
      details: "Chiffrement quantum-résistant"
    },
    {
      id: 3,
      name: "Monitoring Temps Réel",
      description: "Surveillance 24/7 des activités suspectes",
      status: "Actif",
      coverage: 100,
      icon: <Eye className="h-6 w-6" />,
      details: "IA détection fraudes avancée"
    },
    {
      id: 4,
      name: "HSM Protection",
      description: "Modules de sécurité matériels pour clés privées",
      status: "Actif",
      coverage: 100,
      icon: <Key className="h-6 w-6" />,
      details: "Certification FIPS 140-2 Level 3"
    },
    {
      id: 5,
      name: "API Security",
      description: "Protection avancée des APIs avec rate limiting",
      status: "Actif",
      coverage: 100,
      icon: <Server className="h-6 w-6" />,
      details: "OAuth 2.0 + JWT + Rate limiting"
    },
    {
      id: 6,
      name: "Mobile App Security",
      description: "Sécurisation apps iOS/Android CED",
      status: "Actif",
      coverage: 100,
      icon: <Smartphone className="h-6 w-6" />,
      details: "Certificate pinning + Anti-tampering"
    }
  ];

  const complianceStandards = [
    { name: "AAOIFI", status: "Certifié", score: 100 },
    { name: "IFSB", status: "Certifié", score: 98 },
    { name: "RGPD", status: "Conforme", score: 100 },
    { name: "LPD Suisse", status: "Conforme", score: 100 },
    { name: "ISO 27001", status: "Certifié", score: 96 },
    { name: "PCI DSS", status: "Level 1", score: 100 }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: "Info",
      message: "Mise à jour sécuritaire déployée avec succès",
      time: "Il y a 2h",
      severity: "low"
    },
    {
      id: 2,
      type: "Sécurité",
      message: "Tentative d'accès non autorisé bloquée",
      time: "Il y a 4h",
      severity: "medium"
    },
    {
      id: 3,
      type: "Maintenance",
      message: "Sauvegarde automatique des données effectuée",
      time: "Il y a 6h",
      severity: "low"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* En-tête */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Sécurité Bancaire CED
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Système de sécurité avancé 100% conforme Sharia avec protection multicouche et surveillance temps réel
          </p>
        </div>

        {/* Métriques de sécurité */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Menaces Bloquées</p>
                  <p className="text-2xl font-bold">{securityMetrics.threatsPrevented}</p>
                </div>
                <Shield className="h-10 w-10 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Disponibilité</p>
                  <p className="text-2xl font-bold">{securityMetrics.uptime}</p>
                </div>
                <Clock className="h-10 w-10 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Chiffrement</p>
                  <p className="text-2xl font-bold">{securityMetrics.encryptionLevel}</p>
                </div>
                <Lock className="h-10 w-10 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-100">Score Conformité</p>
                  <p className="text-2xl font-bold">{securityMetrics.complianceScore}%</p>
                </div>
                <CheckCircle className="h-10 w-10 text-yellow-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-600 to-slate-700 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-200">Dernier Incident</p>
                  <p className="text-lg font-bold">Aucun</p>
                  <p className="text-sm">847 jours</p>
                </div>
                <AlertTriangle className="h-10 w-10 text-gray-300" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Onglets principaux */}
        <Tabs defaultValue="features" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="features">Fonctionnalités</TabsTrigger>
            <TabsTrigger value="compliance">Conformité</TabsTrigger>
            <TabsTrigger value="monitoring">Surveillance</TabsTrigger>
            <TabsTrigger value="reports">Rapports</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feature) => (
                <Card key={feature.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-100 rounded-lg text-red-600">
                          {feature.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{feature.name}</CardTitle>
                          <Badge variant={feature.status === 'Actif' ? 'default' : 'secondary'}>
                            {feature.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{feature.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Couverture</span>
                        <span className="font-semibold">{feature.coverage}%</span>
                      </div>
                      <Progress value={feature.coverage} className="h-2" />
                    </div>

                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">{feature.details}</p>
                    </div>

                    <Button size="sm" className="w-full">
                      <Eye className="h-4 w-4 mr-2" />
                      Voir Détails
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="compliance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceStandards.map((standard, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{standard.name}</span>
                      <Badge variant={standard.score === 100 ? 'default' : 'secondary'}>
                        {standard.status}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Score de conformité</span>
                        <span className="font-semibold">{standard.score}%</span>
                      </div>
                      <Progress value={standard.score} className="h-2" />
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      Voir Certificat
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Alertes Récentes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`p-2 rounded-full ${
                        alert.severity === 'high' ? 'bg-red-100 text-red-600' :
                        alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        <AlertTriangle className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{alert.type}</p>
                        <p className="text-sm text-gray-600">{alert.message}</p>
                        <p className="text-xs text-gray-500">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Activité Utilisateurs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Connexions actives</span>
                      <span className="font-semibold">2,847</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tentatives bloquées</span>
                      <span className="font-semibold text-red-600">34</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Transactions sécurisées</span>
                      <span className="font-semibold text-green-600">18,392</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    Voir Rapport Complet
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Rapports de Sécurité</CardTitle>
                  <CardDescription>
                    Générez des rapports détaillés sur la sécurité bancaire
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">Rapport Mensuel</Button>
                  <Button className="w-full" variant="outline">Audit de Sécurité</Button>
                  <Button className="w-full" variant="outline">Conformité Sharia</Button>
                  <Button className="w-full" variant="outline">Incidents & Résolutions</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Certifications</CardTitle>
                  <CardDescription>
                    Téléchargez les certificats de conformité
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">Certificat AAOIFI</Button>
                  <Button className="w-full" variant="outline">Certificat ISO 27001</Button>
                  <Button className="w-full" variant="outline">Conformité RGPD</Button>
                  <Button className="w-full" variant="outline">Audit Sharia 2025</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 border-t pt-6">
          <p>© 2025 Club Empreinte Digitale - Sécurité Bancaire Avancée | Propriété de Yakoubi Yamina</p>
        </div>
      </div>
    </div>
  );
}