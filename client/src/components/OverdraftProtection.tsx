import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  DollarSign,
  TrendingDown,
  Lock
} from 'lucide-react';

interface OverdraftProtectionProps {
  accountBalance: number;
  currency: string;
  transactionAmount?: number;
  onTransactionBlock?: () => void;
}

export function OverdraftProtection({ 
  accountBalance, 
  currency, 
  transactionAmount = 0,
  onTransactionBlock 
}: OverdraftProtectionProps) {
  const [protectionActive] = useState(true);
  
  const wouldCauseOverdraft = transactionAmount > accountBalance;
  const remainingAfterTransaction = accountBalance - transactionAmount;
  const safetyThreshold = 100; // Seuil de sécurité minimum
  
  const getProtectionStatus = () => {
    if (accountBalance <= 0) {
      return {
        status: 'blocked',
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        icon: XCircle,
        title: 'Compte Bloqué',
        message: 'Solde insuffisant - Aucune transaction autorisée'
      };
    } else if (accountBalance < safetyThreshold) {
      return {
        status: 'warning',
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200',
        icon: AlertTriangle,
        title: 'Solde Critique',
        message: 'Solde faible - Transactions limitées'
      };
    } else {
      return {
        status: 'safe',
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        icon: CheckCircle,
        title: 'Protection Active',
        message: 'Découvert impossible - Compte sécurisé'
      };
    }
  };

  const protectionConfig = getProtectionStatus();
  const ProtectionIcon = protectionConfig.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-4"
    >
      <Card className={`${protectionConfig.borderColor} ${protectionConfig.bgColor} border-2`}>
        <CardHeader>
          <CardTitle className={`flex items-center gap-3 ${protectionConfig.color}`}>
            <div className={`w-12 h-12 ${protectionConfig.bgColor} rounded-full flex items-center justify-center border-2 ${protectionConfig.borderColor}`}>
              <ProtectionIcon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold">{protectionConfig.title}</h3>
              <p className="text-sm font-normal text-gray-600">
                {protectionConfig.message}
              </p>
            </div>
            <Badge className="bg-green-500 text-white">
              <Shield className="h-4 w-4 mr-1" />
              CED Protection
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-white rounded-lg border">
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Solde disponible</span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">
                  {accountBalance.toFixed(2)} {currency}
                </div>
                <div className="text-sm text-gray-500">
                  {accountBalance > safetyThreshold ? 'Sécurisé' : 'Attention'}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Niveau de sécurité</span>
                <span>{Math.max(0, Math.min(100, (accountBalance / 1000) * 100)).toFixed(0)}%</span>
              </div>
              <Progress 
                value={Math.max(0, Math.min(100, (accountBalance / 1000) * 100))} 
                className="h-2"
              />
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Règles de Protection CED Bank
              </h4>
              <div className="space-y-2 text-sm text-blue-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Solde minimum garanti à 0.00 {currency}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Aucun frais de découvert - Impossible par design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Transactions bloquées automatiquement si solde insuffisant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Conforme aux principes de finance islamique</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}