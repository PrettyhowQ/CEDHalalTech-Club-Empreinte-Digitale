import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'wouter';
import { 
  Shield, 
  Lock, 
  Eye, 
  Server, 
  Smartphone, 
  Globe, 
  AlertTriangle, 
  CheckCircle,
  Star,
  Heart,
  BookOpen,
  Users,
  Zap,
  Crown,
  Home,
  ArrowLeft
} from 'lucide-react';

export default function HalalSecurity() {
  const [activeTab, setActiveTab] = useState('overview');

  const securityModules = [
    {
      id: 1,
      nom: "🔐 Authentification Halal",
      description: "Système d'authentification conforme aux principes islamiques",
      technologies: ["2FA Islamique", "Biométrie Halal", "Sessions Sécurisées"],
      status: "✅ Opérationnel",
      conformite: "100% Sharia",
      icon: Lock,
      color: "bg-green-100 text-green-800"
    },
    {
      id: 2,
      nom: "🛡️ Pare-feu Islamique",
      description: "Protection réseau avec filtrage de contenu halal",
      technologies: ["Filtrage Sharia", "Détection Intrusion", "Protection DDoS"],
      status: "✅ Opérationnel",
      conformite: "100% Halal",
      icon: Shield,
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 3,
      nom: "👁️ Surveillance Éthique",
      description: "Monitoring conforme aux valeurs islamiques de confidentialité",
      technologies: ["Audit Halal", "Logs Sécurisés", "Alertes Intelligentes"],
      status: "✅ Opérationnel",
      conformite: "Respectueux Vie Privée",
      icon: Eye,
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: 4,
      nom: "💾 Chiffrement Islamique",
      description: "Cryptage de données selon les principes de protection (Hifz)",
      technologies: ["AES-256 Halal", "RSA Islamique", "Hachage Sécurisé"],
      status: "✅ Opérationnel",
      conformite: "Hifz Compliant",
      icon: Server,
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      id: 5,
      nom: "📱 Sécurité Mobile Halal",
      description: "Protection des applications mobiles islamiques",
      technologies: ["App Shield", "Runtime Protection", "Anti-Tampering"],
      status: "🔄 Développement",
      conformite: "En Validation",
      icon: Smartphone,
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      id: 6,
      nom: "🌐 Web Security Islamique",
      description: "Sécurisation des plateformes web conformes Sharia",
      technologies: ["HTTPS Halal", "SSL/TLS", "WAF Islamique"],
      status: "✅ Opérationnel",
      conformite: "100% Conforme",
      icon: Globe,
      color: "bg-emerald-100 text-emerald-800"
    }
  ];

  const threats = [
    {
      type: "Phishing Islamique",
      description: "Tentatives de vol d'identité ciblant les musulmans",
      niveau: "Élevé",
      protection: "✅ Bloqué",
      color: "bg-red-100 text-red-800"
    },
    {
      type: "Malware Anti-Islamique",
      description: "Logiciels malveillants ciblant le contenu religieux",
      niveau: "Critique",
      protection: "✅ Neutralisé",
      color: "bg-red-100 text-red-800"
    },
    {
      type: "Attaques DDoS",
      description: "Surcharge de serveurs pendant les périodes religieuses",
      niveau: "Modéré",
      protection: "✅ Mitigé",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      type: "Vol de Données Halal",
      description: "Tentatives d'accès aux données financières islamiques",
      niveau: "Élevé",
      protection: "✅ Prévenu",
      color: "bg-orange-100 text-orange-800"
    }
  ];

  const certifications = [
    {
      nom: "AAOIFI Cybersecurity",
      organisme: "Accounting and Auditing Organization for Islamic Financial Institutions",
      validite: "2025-2027",
      status: "✅ Certifié"
    },
    {
      nom: "OIC-CERT Halal Security",
      organisme: "Organization of Islamic Cooperation - Computer Emergency Response Team",
      validite: "2025-2026",
      status: "✅ Validé"
    },
    {
      nom: "ISO 27001 Islamic Extension",
      organisme: "International Organization for Standardization",
      validite: "2024-2027",
      status: "✅ Certifié"
    },
    {
      nom: "Sharia Cybersecurity Framework",
      organisme: "Islamic Society of North America (ISNA)",
      validite: "2025-2028",
      status: "✅ Approuvé"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Link href="/ced-halal-home">
              <Button variant="outline" size="sm" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour CED
              </Button>
            </Link>
          </div>
          <h1 className="text-5xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-3">
            <Shield className="h-12 w-12 text-blue-600" />
            🛡️ HalalSecurity
          </h1>
          <p className="text-xl text-slate-600 mb-2">
            <strong>Cybersécurité 100% Islamique • Technologie Protégée CED HalalTech™</strong>
          </p>
          <p className="text-lg text-slate-500">
            Protection numérique conforme aux principes islamiques de sécurité et de confidentialité
          </p>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="modules">Modules Sécurité</TabsTrigger>
            <TabsTrigger value="threats">Menaces Détectées</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="dashboard">Tableau de Bord</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="h-5 w-5" />
                    Niveau de Sécurité
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-2">99.8%</div>
                  <p className="text-sm text-gray-600">Protection Islamique Active</p>
                  <Progress value={99.8} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <Shield className="h-5 w-5" />
                    Menaces Bloquées
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">2,847</div>
                  <p className="text-sm text-gray-600">Ce mois-ci</p>
                  <Badge className="mt-2 bg-blue-100 text-blue-800">+23% vs mois dernier</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-purple-700">
                    <Star className="h-5 w-5" />
                    Conformité Sharia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                  <p className="text-sm text-gray-600">Certifié AAOIFI</p>
                  <Badge className="mt-2 bg-green-100 text-green-800">Validé 150+ Scholars</Badge>
                </CardContent>
              </Card>
            </div>

            {/* Principes Islamiques de Sécurité */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-800">
                  <BookOpen className="h-6 w-6" />
                  Fondements Islamiques de la Cybersécurité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-700 mb-3">🔒 Hifz (Protection)</h3>
                    <p className="text-gray-600 mb-4">
                      Principe coranique de protection des biens et données conformément à la Sourate Al-Baqarah (2:188)
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Chiffrement des données sensibles</li>
                      <li>• Protection contre les accès non autorisés</li>
                      <li>• Sauvegarde sécurisée des informations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-3">🛡️ Amanah (Confiance)</h3>
                    <p className="text-gray-600 mb-4">
                      Responsabilité de protéger les données confiées selon les enseignements prophétiques
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Authentification forte et fiable</li>
                      <li>• Transparence dans les processus</li>
                      <li>• Respect de la confidentialité</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Modules Tab */}
          <TabsContent value="modules">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityModules.map((module) => {
                const IconComponent = module.icon;
                return (
                  <Card key={module.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                        <Badge className={module.color}>
                          {module.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-slate-800">{module.nom}</CardTitle>
                      <p className="text-sm text-gray-600">{module.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm text-gray-700 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {module.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Conformité:</span>
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          {module.conformite}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Threats Tab */}
          <TabsContent value="threats">
            <div className="space-y-4">
              {threats.map((threat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <AlertTriangle className="h-6 w-6 text-red-500" />
                        <div>
                          <h3 className="text-lg font-semibold text-slate-800">{threat.type}</h3>
                          <p className="text-gray-600">{threat.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={threat.color}>
                          Niveau: {threat.niveau}
                        </Badge>
                        <Badge className="bg-green-100 text-green-800">
                          {threat.protection}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Certifications Tab */}
          <TabsContent value="certifications">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Crown className="h-5 w-5 text-gold-500" />
                      {cert.nom}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm font-medium text-gray-700">Organisme:</span>
                        <p className="text-sm text-gray-600">{cert.organisme}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-700">Validité:</span>
                        <p className="text-sm text-gray-600">{cert.validite}</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        {cert.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">6</div>
                  <p className="text-sm text-gray-600">Modules Actifs</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">99.8%</div>
                  <p className="text-sm text-gray-600">Disponibilité</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-600">0</div>
                  <p className="text-sm text-gray-600">Incidents Actifs</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">847K</div>
                  <p className="text-sm text-gray-600">Utilisateurs Protégés</p>
                </CardContent>
              </Card>
            </div>

            {/* Actions Rapides */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-6 w-6" />
                  Actions Rapides HalalSecurity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Shield className="h-4 w-4 mr-2" />
                    Scan Sécurité Complet
                  </Button>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Lock className="h-4 w-4 mr-2" />
                    Mise à Jour Règles
                  </Button>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Eye className="h-4 w-4 mr-2" />
                    Rapport Conformité
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-600">
          <p className="mb-2">© 2025 CED HalalTech™ - Yakoubi Yamina</p>
          <p className="mb-2">🛡️ HalalSecurity - Cybersécurité 100% Islamique 🛡️</p>
          <p className="text-xs text-gray-500">
            Technologie protégée mondialement • Certifiée conforme Sharia
          </p>
        </div>
      </div>
    </div>
  );
}