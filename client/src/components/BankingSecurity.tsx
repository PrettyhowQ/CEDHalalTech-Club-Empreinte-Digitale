import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { 
  Shield,
  Lock,
  Eye,
  EyeOff,
  Smartphone,
  Fingerprint,
  Key,
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap,
  Activity,
  Globe,
  History,
  Settings,
  Download,
  Upload,
  Wifi,
  WifiOff,
  MapPin,
  Calendar,
  CreditCard,
  Bell
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CEDFooter } from './CEDFooter';

interface SecurityEvent {
  id: string;
  type: 'login' | 'transaction' | 'settings' | 'suspicious' | 'blocked';
  description: string;
  timestamp: Date;
  location: string;
  device: string;
  ipAddress: string;
  risk: 'low' | 'medium' | 'high' | 'critical';
  status: 'success' | 'failed' | 'blocked' | 'pending';
}

interface TwoFactorMethod {
  id: string;
  name: string;
  type: 'sms' | 'email' | 'authenticator' | 'biometric' | 'hardware';
  description: string;
  icon: any;
  isEnabled: boolean;
  isRecommended: boolean;
  setupComplexity: 'easy' | 'medium' | 'advanced';
  securityLevel: number;
}

interface DeviceSession {
  id: string;
  deviceName: string;
  deviceType: 'mobile' | 'desktop' | 'tablet';
  browser: string;
  location: string;
  lastActive: Date;
  ipAddress: string;
  isCurrentDevice: boolean;
  isTrusted: boolean;
}

const securityEvents: SecurityEvent[] = [
  {
    id: '1',
    type: 'login',
    description: 'Connexion réussie avec authentification 2FA',
    timestamp: new Date('2024-12-24T09:15:00'),
    location: 'Genève, Suisse',
    device: 'iPhone 15 Pro Max',
    ipAddress: '85.218.xxx.xxx',
    risk: 'low',
    status: 'success'
  },
  {
    id: '2',
    type: 'transaction',
    description: 'Virement international CHF 25,000 → EUR',
    timestamp: new Date('2024-12-24T08:45:00'),
    location: 'Genève, Suisse',
    device: 'iPhone 15 Pro Max',
    ipAddress: '85.218.xxx.xxx',
    risk: 'medium',
    status: 'success'
  },
  {
    id: '3',
    type: 'suspicious',
    description: 'Tentative de connexion depuis nouvelle localisation',
    timestamp: new Date('2024-12-23T23:30:00'),
    location: 'Dubaï, UAE',
    device: 'Chrome Linux',
    ipAddress: '185.224.xxx.xxx',
    risk: 'high',
    status: 'blocked'
  },
  {
    id: '4',
    type: 'settings',
    description: 'Modification paramètres 2FA',
    timestamp: new Date('2024-12-23T14:20:00'),
    location: 'Genève, Suisse',
    device: 'MacBook Pro M4',
    ipAddress: '85.218.xxx.xxx',
    risk: 'medium',
    status: 'success'
  },
  {
    id: '5',
    type: 'blocked',
    description: 'Transaction bloquée - Pattern inhabituel détecté',
    timestamp: new Date('2024-12-22T16:10:00'),
    location: 'Paris, France',
    device: 'Unknown Device',
    ipAddress: '92.168.xxx.xxx',
    risk: 'critical',
    status: 'blocked'
  }
];

const twoFactorMethods: TwoFactorMethod[] = [
  {
    id: 'biometric',
    name: 'Biométrie (Face ID / Touch ID)',
    type: 'biometric',
    description: 'Authentification par empreinte digitale ou reconnaissance faciale',
    icon: Fingerprint,
    isEnabled: true,
    isRecommended: true,
    setupComplexity: 'easy',
    securityLevel: 95
  },
  {
    id: 'authenticator',
    name: 'Application Authenticator',
    type: 'authenticator',
    description: 'Google Authenticator, Microsoft Authenticator, ou Authy',
    icon: Smartphone,
    isEnabled: true,
    isRecommended: true,
    setupComplexity: 'medium',
    securityLevel: 90
  },
  {
    id: 'sms',
    name: 'SMS Sécurisé',
    type: 'sms',
    description: 'Code de vérification par SMS chiffré',
    icon: Bell,
    isEnabled: false,
    isRecommended: false,
    setupComplexity: 'easy',
    securityLevel: 70
  },
  {
    id: 'hardware',
    name: 'Clé de Sécurité Hardware',
    type: 'hardware',
    description: 'YubiKey ou clé FIDO2 physique',
    icon: Key,
    isEnabled: false,
    isRecommended: true,
    setupComplexity: 'advanced',
    securityLevel: 98
  }
];

const deviceSessions: DeviceSession[] = [
  {
    id: '1',
    deviceName: 'iPhone 15 Pro Max CED',
    deviceType: 'mobile',
    browser: 'Safari iOS',
    location: 'Genève, Suisse',
    lastActive: new Date(),
    ipAddress: '85.218.xxx.xxx',
    isCurrentDevice: true,
    isTrusted: true
  },
  {
    id: '2',
    deviceName: 'MacBook Pro M4 Max',
    deviceType: 'desktop',
    browser: 'Chrome 120',
    location: 'Genève, Suisse',
    lastActive: new Date('2024-12-24T08:30:00'),
    ipAddress: '85.218.xxx.xxx',
    isCurrentDevice: false,
    isTrusted: true
  },
  {
    id: '3',
    deviceName: 'iPad Pro M4',
    deviceType: 'tablet',
    browser: 'Safari iPadOS',
    location: 'Zurich, Suisse',
    lastActive: new Date('2024-12-23T19:45:00'),
    ipAddress: '85.220.xxx.xxx',
    isCurrentDevice: false,
    isTrusted: true
  }
];

export function BankingSecurity() {
  const [showPassword, setShowPassword] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'overview' | '2fa' | 'devices' | 'activity'>('overview');

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'failed': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'blocked': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const handleVerification = async () => {
    setIsVerifying(true);
    // Simulation vérification 2FA
    setTimeout(() => {
      setIsVerifying(false);
      setVerificationCode('');
      alert('Authentification 2FA réussie !');
    }, 2000);
  };

  const toggleTwoFactor = (methodId: string) => {
    // Simulation activation/désactivation 2FA
    alert(`Configuration 2FA pour ${methodId} mise à jour`);
  };

  const revokeSession = (sessionId: string) => {
    alert(`Session ${sessionId} révoquée avec succès`);
  };

  const securityScore = Math.round(
    twoFactorMethods.filter(m => m.isEnabled).reduce((acc, m) => acc + m.securityLevel, 0) / 
    twoFactorMethods.length
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Sécurité Bancaire CED Bank
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Protection maximale selon standards bancaires internationaux
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Shield className="h-3 w-3 mr-1" />
              PCI DSS Niveau 1
            </Badge>
            <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
              <Lock className="h-3 w-3 mr-1" />
              Cryptage AES-256
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              <Zap className="h-3 w-3 mr-1" />
              Anti-fraude IA
            </Badge>
          </div>
        </motion.div>

        {/* Score de Sécurité Global */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="border-2 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-blue-800 dark:text-blue-200">
                <Shield className="h-6 w-6" />
                Score de Sécurité Global
              </CardTitle>
              <CardDescription>
                Évaluation en temps réel de votre niveau de protection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="p-4 bg-blue-50 dark:bg-blue-900/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{securityScore}%</div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Sécurité Globale</p>
                    <Progress value={securityScore} className="mt-2" />
                  </div>
                </Card>

                <Card className="p-4 bg-green-50 dark:bg-green-900/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {twoFactorMethods.filter(m => m.isEnabled).length}
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">Méthodes 2FA Actives</p>
                  </div>
                </Card>

                <Card className="p-4 bg-indigo-50 dark:bg-indigo-900/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">
                      {deviceSessions.filter(d => d.isTrusted).length}
                    </div>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300">Appareils Fiables</p>
                  </div>
                </Card>

                <Card className="p-4 bg-purple-50 dark:bg-purple-900/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Uptime Sécurité</p>
                  </div>
                </Card>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Navigation Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700">
            {[
              { id: 'overview', name: 'Vue d\'ensemble', icon: Activity },
              { id: '2fa', name: 'Authentification 2FA', icon: Lock },
              { id: 'devices', name: 'Appareils Connectés', icon: Smartphone },
              { id: 'activity', name: 'Activité Sécurité', icon: History }
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={selectedTab === tab.id ? "default" : "ghost"}
                onClick={() => setSelectedTab(tab.id as any)}
                className={selectedTab === tab.id ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.name}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Vue d'ensemble */}
        {selectedTab === 'overview' && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Protections Actives */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    Protections Actives
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: 'Cryptage End-to-End', status: 'active', level: 'AES-256' },
                    { name: 'Authentification 2FA', status: 'active', level: 'Multi-facteurs' },
                    { name: 'Détection Fraude IA', status: 'active', level: 'Temps réel' },
                    { name: 'Géofencing', status: 'active', level: 'Zones autorisées' },
                    { name: 'Biométrie', status: 'active', level: 'Face ID / Touch ID' },
                    { name: 'Session Timeout', status: 'active', level: '15 minutes' }
                  ].map((protection, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="font-medium">{protection.name}</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800">{protection.level}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Alertes Récentes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    Alertes Sécurité Récentes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {securityEvents.slice(0, 4).map((event, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 border rounded-lg">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          event.risk === 'critical' ? 'bg-red-500' :
                          event.risk === 'high' ? 'bg-orange-500' :
                          event.risk === 'medium' ? 'bg-yellow-500' :
                          'bg-green-500'
                        }`} />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{event.description}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge className={getRiskColor(event.risk)} variant="outline">
                              {event.risk}
                            </Badge>
                            <Badge className={getStatusColor(event.status)} variant="outline">
                              {event.status}
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            {event.timestamp.toLocaleString('fr-FR')} • {event.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>
        )}

        {/* Authentification 2FA */}
        {selectedTab === '2fa' && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-blue-600" />
                  Configuration Authentification 2FA
                </CardTitle>
                <CardDescription>
                  Renforcez la sécurité de votre compte avec l'authentification à deux facteurs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {twoFactorMethods.map((method, index) => (
                    <motion.div
                      key={method.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                    >
                      <Card className={`border-2 ${method.isEnabled ? 'border-green-200 bg-green-50 dark:bg-green-900/10' : 'border-gray-200'}`}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className={`p-3 rounded-lg ${method.isEnabled ? 'bg-green-100 dark:bg-green-900/30' : 'bg-gray-100 dark:bg-gray-800'}`}>
                                <method.icon className={`h-6 w-6 ${method.isEnabled ? 'text-green-600' : 'text-gray-500'}`} />
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="font-bold">{method.name}</h3>
                                  {method.isRecommended && (
                                    <Badge className="bg-blue-100 text-blue-800">Recommandé</Badge>
                                  )}
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{method.description}</p>
                                <div className="flex items-center gap-3">
                                  <Badge variant="outline" className="text-xs">
                                    Sécurité: {method.securityLevel}%
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    Setup: {method.setupComplexity === 'easy' ? 'Facile' : 
                                             method.setupComplexity === 'medium' ? 'Moyen' : 'Avancé'}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                variant={method.isEnabled ? "outline" : "default"}
                                size="sm"
                                onClick={() => toggleTwoFactor(method.id)}
                                className={method.isEnabled ? "border-red-300 text-red-600 hover:bg-red-50" : "bg-green-600 hover:bg-green-700"}
                              >
                                {method.isEnabled ? 'Désactiver' : 'Activer'}
                              </Button>
                              {method.isEnabled && (
                                <Button variant="ghost" size="sm">
                                  <Settings className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Test 2FA */}
                <Card className="mt-6 border-2 border-blue-200 bg-blue-50 dark:bg-blue-900/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-800 dark:text-blue-200">
                      Test d'Authentification 2FA
                    </CardTitle>
                    <CardDescription>
                      Vérifiez que votre 2FA fonctionne correctement
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      <Input
                        placeholder="Code de vérification 6 chiffres"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        maxLength={6}
                        className="max-w-xs"
                      />
                      <Button 
                        onClick={handleVerification}
                        disabled={verificationCode.length !== 6 || isVerifying}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        {isVerifying ? (
                          <>
                            <Clock className="h-4 w-4 mr-2 animate-spin" />
                            Vérification...
                          </>
                        ) : (
                          'Vérifier'
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* Appareils Connectés */}
        {selectedTab === 'devices' && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-indigo-600" />
                  Gestion des Appareils Connectés
                </CardTitle>
                <CardDescription>
                  Surveillez et gérez tous les appareils ayant accès à votre compte
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {deviceSessions.map((session, index) => (
                    <motion.div
                      key={session.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                    >
                      <Card className={`border-2 ${session.isCurrentDevice ? 'border-green-200 bg-green-50 dark:bg-green-900/10' : session.isTrusted ? 'border-blue-200' : 'border-orange-200'}`}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className={`p-3 rounded-lg ${
                                session.isCurrentDevice ? 'bg-green-100 dark:bg-green-900/30' : 
                                session.isTrusted ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-orange-100 dark:bg-orange-900/30'
                              }`}>
                                {session.deviceType === 'mobile' && <Smartphone className="h-6 w-6" />}
                                {session.deviceType === 'desktop' && <Settings className="h-6 w-6" />}
                                {session.deviceType === 'tablet' && <Smartphone className="h-6 w-6" />}
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="font-bold">{session.deviceName}</h3>
                                  {session.isCurrentDevice && (
                                    <Badge className="bg-green-100 text-green-800">Appareil Actuel</Badge>
                                  )}
                                  {session.isTrusted && !session.isCurrentDevice && (
                                    <Badge className="bg-blue-100 text-blue-800">Fiable</Badge>
                                  )}
                                </div>
                                <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                                  <p>{session.browser} • {session.deviceType}</p>
                                  <div className="flex items-center gap-2">
                                    <MapPin className="h-3 w-3" />
                                    <span>{session.location}</span>
                                    <span>•</span>
                                    <span>{session.ipAddress}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Clock className="h-3 w-3" />
                                    <span>Dernière activité: {session.lastActive.toLocaleString('fr-FR')}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {!session.isCurrentDevice && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => revokeSession(session.id)}
                                  className="border-red-300 text-red-600 hover:bg-red-50"
                                >
                                  Révoquer
                                </Button>
                              )}
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* Activité Sécurité */}
        {selectedTab === 'activity' && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <History className="h-5 w-5 text-purple-600" />
                  Journal d'Activité Sécurité
                </CardTitle>
                <CardDescription>
                  Historique complet de tous les événements de sécurité
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {securityEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                    >
                      <Card className="border-l-4 border-l-blue-500">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-bold">{event.description}</h3>
                                <Badge className={getRiskColor(event.risk)}>
                                  Risque {event.risk}
                                </Badge>
                                <Badge className={getStatusColor(event.status)}>
                                  {event.status === 'success' ? 'Réussi' :
                                   event.status === 'failed' ? 'Échoué' :
                                   event.status === 'blocked' ? 'Bloqué' :
                                   'En attente'}
                                </Badge>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600 dark:text-gray-300">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4" />
                                  <span>{event.timestamp.toLocaleString('fr-FR')}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4" />
                                  <span>{event.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Smartphone className="h-4 w-4" />
                                  <span>{event.device}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Globe className="h-4 w-4" />
                                  <span>{event.ipAddress}</span>
                                </div>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-center mt-6">
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Exporter Journal Complet
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        )}
      </div>
      
      <CEDFooter />
    </div>
  );
}