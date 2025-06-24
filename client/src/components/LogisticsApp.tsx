import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Smartphone, 
  Package, 
  Truck, 
  MapPin, 
  QrCode,
  FileText,
  Bell,
  Users,
  Calendar,
  Activity,
  Download,
  Send,
  CheckCircle,
  Clock,
  AlertTriangle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CEDFooter } from './CEDFooter';

interface LogisticsTask {
  id: string;
  type: 'reception' | 'preparation' | 'expedition' | 'inventaire';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  title: string;
  description: string;
  dueDate: string;
  assignedTo: string;
  status: 'pending' | 'in_progress' | 'completed';
  location: string;
}

interface PaySlipNotification {
  id: string;
  month: string;
  amount: number;
  status: 'new' | 'viewed' | 'downloaded';
  date: string;
}

const logisticsTasks: LogisticsTask[] = [
  {
    id: 'T001',
    type: 'reception',
    priority: 'high',
    title: 'Réception lot smartphones',
    description: '120 iPhone 12 reconditionnés',
    dueDate: '2024-06-25',
    assignedTo: 'Aziz',
    status: 'pending',
    location: 'Entrepôt Suisse'
  },
  {
    id: 'T002',
    type: 'preparation',
    priority: 'medium',
    title: 'Préparation commande Espagne',
    description: '45 ordinateurs portables pour Costa del Sol',
    dueDate: '2024-06-24',
    assignedTo: 'Abdelkarim',
    status: 'in_progress',
    location: 'Centre Europe'
  },
  {
    id: 'T003',
    type: 'expedition',
    priority: 'urgent',
    title: 'Expédition urgente',
    description: 'Livraison association caritative Lyon',
    dueDate: '2024-06-24',
    assignedTo: 'Brahim',
    status: 'pending',
    location: 'Costa del Sol'
  }
];

const paySlipNotifications: PaySlipNotification[] = [
  {
    id: 'PS001',
    month: 'Juin 2024',
    amount: 6500,
    status: 'new',
    date: '2024-06-24'
  },
  {
    id: 'PS002',
    month: 'Mai 2024',
    amount: 6500,
    status: 'viewed',
    date: '2024-05-24'
  }
];

export function LogisticsApp() {
  const [activeTab, setActiveTab] = useState('tasks');
  const [notifications, setNotifications] = useState(paySlipNotifications);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'in_progress': return <Clock className="h-4 w-4 text-blue-600" />;
      case 'pending': return <AlertTriangle className="h-4 w-4 text-orange-600" />;
      default: return null;
    }
  };

  const downloadPaySlip = (notificationId: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === notificationId 
          ? { ...notif, status: 'downloaded' as const }
          : notif
      )
    );
    alert('Fiche de paie téléchargée dans vos documents');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Smartphone className="h-8 w-8 text-blue-400" />
            <h1 className="text-3xl md:text-4xl font-bold">
              App Logistique Pro
            </h1>
          </div>
          <p className="text-gray-300 mb-4">
            Interface mobile intégrée pour l'équipe logistique
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-blue-900 text-blue-200">
              📱 iPhone Pro Max 1TB
            </Badge>
            <Badge variant="secondary" className="bg-green-900 text-green-200">
              🔄 Sync Temps Réel
            </Badge>
            <Badge variant="secondary" className="bg-purple-900 text-purple-200">
              🔐 Sécurisé
            </Badge>
          </div>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-800 mb-8">
              <TabsTrigger value="tasks" className="data-[state=active]:bg-blue-600">
                <Package className="h-4 w-4 mr-2" />
                Tâches
              </TabsTrigger>
              <TabsTrigger value="payslips" className="data-[state=active]:bg-green-600">
                <FileText className="h-4 w-4 mr-2" />
                Fiches Paie
              </TabsTrigger>
              <TabsTrigger value="scanner" className="data-[state=active]:bg-purple-600">
                <QrCode className="h-4 w-4 mr-2" />
                Scanner
              </TabsTrigger>
              <TabsTrigger value="team" className="data-[state=active]:bg-orange-600">
                <Users className="h-4 w-4 mr-2" />
                Équipe
              </TabsTrigger>
            </TabsList>

            {/* Tâches Logistiques */}
            <TabsContent value="tasks" className="space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Tâches Logistiques Actives
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {logisticsTasks.filter(t => t.status !== 'completed').length} tâches en cours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {logisticsTasks.map((task, index) => (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-gray-700 p-4 rounded-lg"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(task.status)}
                          <h3 className="font-medium text-white">{task.title}</h3>
                        </div>
                        <Badge className={getPriorityColor(task.priority)}>
                          {task.priority.toUpperCase()}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-3">{task.description}</p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {task.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(task.dueDate).toLocaleDateString('fr-FR')}
                          </span>
                        </div>
                        <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Marquer fait
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Fiches de Paie */}
            <TabsContent value="payslips" className="space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Mes Fiches de Paie
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Documents disponibles sur votre smartphone
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {notifications.map((notif, index) => (
                    <motion.div
                      key={notif.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-gray-700 p-4 rounded-lg"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-600 rounded-lg">
                            <FileText className="h-4 w-4" />
                          </div>
                          <div>
                            <h3 className="font-medium text-white">{notif.month}</h3>
                            <p className="text-sm text-gray-300">
                              CHF {notif.amount.toLocaleString()}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {notif.status === 'new' && (
                            <Badge className="bg-red-600 text-white">Nouveau</Badge>
                          )}
                          {notif.status === 'downloaded' && (
                            <Badge className="bg-green-600 text-white">Téléchargé</Badge>
                          )}
                          <Button 
                            size="sm"
                            onClick={() => downloadPaySlip(notif.id)}
                            disabled={notif.status === 'downloaded'}
                          >
                            <Download className="h-3 w-3 mr-1" />
                            PDF
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Scanner QR */}
            <TabsContent value="scanner" className="space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <QrCode className="h-5 w-5" />
                    Scanner Logistique
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Scanner codes-barres et QR codes pour traçabilité
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center py-12">
                  <div className="space-y-6">
                    <div className="w-48 h-48 mx-auto bg-gray-700 rounded-lg flex items-center justify-center">
                      <QrCode className="h-24 w-24 text-gray-500" />
                    </div>
                    <p className="text-gray-300">
                      Pointez votre caméra vers un code QR ou code-barres
                    </p>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      Activer Caméra
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Équipe */}
            <TabsContent value="team" className="space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Statut Équipe
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Vue d'ensemble temps réel de l'équipe logistique
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: 'Aziz', role: 'Logistique Suisse', status: 'active', tasks: 3 },
                    { name: 'Abdelkarim', role: 'Logistique Europe', status: 'active', tasks: 2 },
                    { name: 'Brahim', role: 'Gérant Costa del Sol', status: 'break', tasks: 1 }
                  ].map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-gray-700 p-4 rounded-lg flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          member.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                        }`}></div>
                        <div>
                          <h3 className="font-medium text-white">{member.name}</h3>
                          <p className="text-sm text-gray-300">{member.role}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-300">{member.tasks} tâches</p>
                        <Badge variant="outline" className="border-gray-600 text-gray-300">
                          {member.status === 'active' ? 'En ligne' : 'Pause'}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* iPhone Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    Configuration iPhone Pro Max
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Synchronisation automatique avec tous les systèmes CED
                  </p>
                </div>
                <Smartphone className="h-12 w-12 text-blue-400" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <CEDFooter />
    </div>
  );
}