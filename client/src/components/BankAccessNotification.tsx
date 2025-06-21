import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  FileCheck, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Download,
  Globe,
  Users
} from 'lucide-react';

interface BankAccessNotificationProps {
  userStatus?: 'pending' | 'approved' | 'rejected' | 'incomplete';
  userName?: string;
}

export function BankAccessNotification({ 
  userStatus = 'approved', 
  userName = 'Utilisateur' 
}: BankAccessNotificationProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusConfig = () => {
    switch (userStatus) {
      case 'approved':
        return {
          icon: CheckCircle,
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          badgeColor: 'bg-green-500',
          title: 'Accès CED Bank Autorisé',
          message: 'Félicitations ! Votre dossier a été approuvé par Yakoubi Yamina. Vous pouvez maintenant accéder à tous les services bancaires.',
          canAccess: true
        };
      case 'pending':
        return {
          icon: Clock,
          color: 'text-orange-600',
          bgColor: 'bg-orange-50',
          borderColor: 'border-orange-200',
          badgeColor: 'bg-orange-500',
          title: 'Dossier en Cours de Validation',
          message: 'Votre demande d\'accès est en cours d\'examen par la direction. Vous recevrez une notification dès validation.',
          canAccess: false
        };
      case 'rejected':
        return {
          icon: XCircle,
          color: 'text-red-600',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          badgeColor: 'bg-red-500',
          title: 'Dossier Non Conforme',
          message: 'Votre dossier nécessite des corrections. Veuillez compléter les informations manquantes.',
          canAccess: false
        };
      case 'incomplete':
        return {
          icon: AlertCircle,
          color: 'text-blue-600',
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          badgeColor: 'bg-blue-500',
          title: 'Dossier Incomplet',
          message: 'Complétez votre profil pour soumettre votre demande d\'accès à CED Bank International.',
          canAccess: false
        };
      default:
        return {
          icon: AlertCircle,
          color: 'text-gray-600',
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200',
          badgeColor: 'bg-gray-500',
          title: 'Statut Inconnu',
          message: 'Contactez le support pour vérifier le statut de votre dossier.',
          canAccess: false
        };
    }
  };

  const config = getStatusConfig();
  const StatusIcon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6"
    >
      <Card className={`${config.borderColor} ${config.bgColor} border-2`}>
        <CardHeader>
          <CardTitle className={`flex items-center gap-3 ${config.color}`}>
            <div className={`w-12 h-12 ${config.bgColor} rounded-full flex items-center justify-center border-2 ${config.borderColor}`}>
              <StatusIcon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold">{config.title}</h3>
              <p className="text-sm font-normal text-gray-600">
                {config.message}
              </p>
            </div>
            <Badge className={`${config.badgeColor} text-white`}>
              {userStatus === 'approved' ? 'Validé YY' : 
               userStatus === 'pending' ? 'En attente' :
               userStatus === 'rejected' ? 'À corriger' : 'Incomplet'}
            </Badge>
          </CardTitle>
        </CardHeader>

        {config.canAccess && (
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button 
                className="bg-green-600 hover:bg-green-700 flex items-center gap-2" 
                onClick={() => window.location.href = '/banque'}
              >
                <Globe className="h-4 w-4" />
                Interface Web
              </Button>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2" 
                onClick={() => window.location.href = '/app-bancaire'}
              >
                <Download className="h-4 w-4" />
                App Mobile
              </Button>
              <Button 
                className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2" 
                onClick={() => window.location.href = '/parrainage'}
              >
                <Users className="h-4 w-4" />
                Parrainage
              </Button>
            </div>

            <div className="mt-4 p-4 bg-green-100 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                <span className="font-bold text-green-800">Services Activés</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Comptes CHF/AED</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Cartes bancaires</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Mode prière auto</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Boussole Qibla</span>
                </div>
              </div>
            </div>
          </CardContent>
        )}

        {!config.canAccess && (
          <CardContent>
            <Alert className={`${config.borderColor} ${config.bgColor}`}>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {userStatus === 'pending' && 
                  "Votre dossier est en cours d'examen par Yakoubi Yamina. Délai habituel : 24-48h ouvrées."
                }
                {userStatus === 'rejected' && 
                  "Contactez le support pour connaître les corrections nécessaires à votre dossier."
                }
                {userStatus === 'incomplete' && 
                  "Complétez votre profil utilisateur et soumettez les documents requis pour l'ouverture de compte."
                }
              </AlertDescription>
            </Alert>

            <div className="mt-4 flex gap-3">
              <Button variant="outline" size="sm">
                <FileCheck className="h-4 w-4 mr-2" />
                Compléter le dossier
              </Button>
              <Button variant="outline" size="sm">
                Contacter le support
              </Button>
            </div>
          </CardContent>
        )}
      </Card>
    </motion.div>
  );
}