import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import {
  Users,
  Gift,
  Share2,
  Copy,
  Mail,
  MessageSquare,
  Trophy,
  Star,
  Zap,
  TrendingUp,
  DollarSign,
  Target,
  Smartphone
} from 'lucide-react';

interface ReferralReward {
  id: string;
  type: 'cash' | 'formation' | 'premium' | 'sukuk';
  amount: number;
  title: string;
  description: string;
  icon: any;
  color: string;
}

interface ReferredUser {
  id: string;
  name: string;
  email: string;
  status: 'pending' | 'active' | 'completed';
  joinDate: Date;
  reward: number;
  formationsCompleted: number;
}

export function ParrainageBancaire() {
  const [referralCode] = useState('CED-YAMINA-2025');
  const [emailToInvite, setEmailToInvite] = useState('');
  const [copied, setCopied] = useState(false);

  const referralStats = {
    totalReferred: 23,
    activeUsers: 18,
    totalEarned: 1240,
    currentLevel: 'Gold Ambassador',
    nextLevelTarget: 30
  };

  const rewards: ReferralReward[] = [
    {
      id: '1',
      type: 'cash',
      amount: 50,
      title: 'Bonus Inscription',
      description: 'CHF pour chaque nouveau membre',
      icon: DollarSign,
      color: 'green'
    },
    {
      id: '2',
      type: 'formation',
      amount: 100,
      title: 'Formation Offerte',
      description: 'Crédit formation après 3 parrainages',
      icon: Trophy,
      color: 'blue'
    },
    {
      id: '3',
      type: 'premium',
      amount: 12,
      title: 'Mois Premium',
      description: 'Services bancaires premium gratuits',
      icon: Star,
      color: 'purple'
    },
    {
      id: '4',
      type: 'sukuk',
      amount: 500,
      title: 'Investissement Sukuk',
      description: 'Accès privilégié aux obligations islamiques',
      icon: TrendingUp,
      color: 'orange'
    }
  ];

  const referredUsers: ReferredUser[] = [
    {
      id: '1',
      name: 'Ahmed Al-Rashid',
      email: 'ahmed@email.com',
      status: 'active',
      joinDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15),
      reward: 50,
      formationsCompleted: 3
    },
    {
      id: '2',
      name: 'Sarah Benali',
      email: 'sarah@email.com',
      status: 'completed',
      joinDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 32),
      reward: 150,
      formationsCompleted: 8
    },
    {
      id: '3',
      name: 'Omar Khalil',
      email: 'omar@email.com',
      status: 'pending',
      joinDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
      reward: 0,
      formationsCompleted: 0
    }
  ];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareEmail = () => {
    const subject = 'Rejoignez CED Bank - Banque Islamique 0%';
    const body = `Découvrez CED Bank, la première banque digitale islamique à 0% d'intérêts !

Utilisez mon code de parrainage: ${referralCode}

✓ Comptes multi-devises (CHF, AED, USD)
✓ Finance islamique certifiée Charia
✓ 0% frais, 0% intérêts
✓ Formation IA éthique incluse

Téléchargez l'app: https://cedbank.app

Cordialement,
Yakoubi Yamina`;

    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'completed': return 'bg-blue-500';
      case 'pending': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getRewardColor = (color: string) => {
    const colors = {
      green: 'from-green-500 to-emerald-600',
      blue: 'from-blue-500 to-cyan-600',
      purple: 'from-purple-500 to-violet-600',
      orange: 'from-orange-500 to-red-600'
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  return (
    <div className="space-y-6">
      {/* En-tête parrainage */}
      <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Programme de Parrainage CED Bank
              </h2>
              <p className="text-gray-600">
                Invitez vos proches et gagnez des récompenses exclusives
              </p>
            </div>
            <div className="text-center">
              <Badge className="bg-green-100 text-green-800 border-green-300 mb-2">
                {referralStats.currentLevel}
              </Badge>
              <div className="text-2xl font-bold text-green-600">
                {referralStats.totalEarned} CHF
              </div>
              <div className="text-sm text-gray-500">Gains totaux</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-blue-600">{referralStats.totalReferred}</div>
              <div className="text-sm text-gray-600">Parrainés</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-green-600">{referralStats.activeUsers}</div>
              <div className="text-sm text-gray-600">Actifs</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-purple-600">78%</div>
              <div className="text-sm text-gray-600">Taux conversion</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-orange-600">4.9★</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Progression vers {referralStats.nextLevelTarget} parrainages</span>
              <span className="text-sm text-gray-500">{referralStats.totalReferred}/{referralStats.nextLevelTarget}</span>
            </div>
            <Progress value={(referralStats.totalReferred / referralStats.nextLevelTarget) * 100} className="h-3" />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Code de parrainage */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="h-5 w-5 text-blue-600" />
                Partager votre code
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <Input
                  value={referralCode}
                  readOnly
                  className="font-mono text-lg font-bold text-center bg-gray-50"
                />
                <Button onClick={handleCopyCode} variant="outline">
                  <Copy className="h-4 w-4 mr-2" />
                  {copied ? 'Copié!' : 'Copier'}
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Button onClick={handleShareEmail} className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  WhatsApp
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  SMS
                </Button>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-3">Inviter par email</h4>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="email@exemple.com"
                    value={emailToInvite}
                    onChange={(e) => setEmailToInvite(e.target.value)}
                    className="flex-1"
                  />
                  <Button>
                    Inviter
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Liste des parrainés */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-600" />
                Vos parrainés ({referredUsers.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {referredUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(user.status)}`}></div>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-gray-500">
                        {user.joinDate.toLocaleDateString('fr-FR')} • {user.formationsCompleted} formations
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">+{user.reward} CHF</div>
                    <Badge variant={user.status === 'active' ? 'default' : user.status === 'completed' ? 'secondary' : 'outline'}>
                      {user.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Récompenses */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-orange-600" />
                Récompenses disponibles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {rewards.map((reward) => (
                <div key={reward.id} className={`p-4 rounded-xl bg-gradient-to-r ${getRewardColor(reward.color)} text-white`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <reward.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold">{reward.amount} {reward.type === 'cash' ? 'CHF' : reward.type === 'premium' ? 'mois' : ''}</div>
                      <div className="text-sm opacity-90">{reward.title}</div>
                    </div>
                  </div>
                  <div className="text-xs opacity-80">{reward.description}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Objectifs */}
          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-yellow-600" />
                Prochains objectifs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">5 parrainages actifs</span>
                <Badge className="bg-yellow-100 text-yellow-800">+200 CHF</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Statut Platinum</span>
                <Badge className="bg-yellow-100 text-yellow-800">Sukuk Premium</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">50 parrainages</span>
                <Badge className="bg-yellow-100 text-yellow-800">Formation VIP</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}