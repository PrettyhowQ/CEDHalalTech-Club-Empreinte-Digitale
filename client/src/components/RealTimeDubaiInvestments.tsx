import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { 
  Building2, 
  TrendingUp, 
  DollarSign, 
  Users, 
  MapPin,
  Clock,
  BarChart3,
  Target,
  Home,
  Zap,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

interface DonationData {
  timestamp: Date;
  amount: number;
  donorCount: number;
  project: string;
  location: string;
}

interface PropertyMarketData {
  area: string;
  currentPrice: number;
  priceChange24h: number;
  priceChangePercent: number;
  volume24h: number;
  completionRate: number;
  roi12m: number;
  demand: 'high' | 'medium' | 'low';
}

export function RealTimeDubaiInvestments() {
  const [donations, setDonations] = useState<DonationData[]>([]);
  const [marketData, setMarketData] = useState<PropertyMarketData[]>([]);
  const [totalRaised, setTotalRaised] = useState(0);
  const [activeProjects, setActiveProjects] = useState(0);
  const [averageROI, setAverageROI] = useState(0);

  // Simulation temps réel des dons
  useEffect(() => {
    const generateRealTimeDonation = () => {
      const projects = [
        { name: 'Al-Noor Residence', location: 'Dubai South' },
        { name: 'Barakah Gardens', location: 'Dubai Investment Park' },
        { name: 'Masjid Al-Hikmah Complex', location: 'Dubai Silicon Oasis' },
        { name: 'Green Valley Homes', location: 'Dubailand' }
      ];
      
      const randomProject = projects[Math.floor(Math.random() * projects.length)];
      const donationAmount = Math.random() * 50000 + 5000; // Entre 5K et 55K AED
      
      const newDonation: DonationData = {
        timestamp: new Date(),
        amount: donationAmount,
        donorCount: Math.floor(Math.random() * 5) + 1,
        project: randomProject.name,
        location: randomProject.location
      };

      setDonations(prev => [newDonation, ...prev.slice(0, 9)]); // Garder les 10 derniers
      setTotalRaised(prev => prev + donationAmount);
    };

    // Génération initiale
    for (let i = 0; i < 5; i++) {
      setTimeout(() => generateRealTimeDonation(), i * 2000);
    }

    // Mise à jour continue
    const interval = setInterval(generateRealTimeDonation, 15000 + Math.random() * 30000);
    return () => clearInterval(interval);
  }, []);

  // Données marché immobilier Dubai
  useEffect(() => {
    const dubaiAreas: PropertyMarketData[] = [
      {
        area: 'Dubai Marina',
        currentPrice: 1450000,
        priceChange24h: 15420,
        priceChangePercent: 1.08,
        volume24h: 12500000,
        completionRate: 89,
        roi12m: 14.2,
        demand: 'high'
      },
      {
        area: 'Downtown Dubai',
        currentPrice: 1950000,
        priceChange24h: -8750,
        priceChangePercent: -0.45,
        volume24h: 18200000,
        completionRate: 95,
        roi12m: 11.8,
        demand: 'high'
      },
      {
        area: 'Dubai South',
        currentPrice: 850000,
        priceChange24h: 23100,
        priceChangePercent: 2.79,
        volume24h: 6800000,
        completionRate: 72,
        roi12m: 18.5,
        demand: 'high'
      },
      {
        area: 'Dubai Investment Park',
        currentPrice: 675000,
        priceChange24h: 12800,
        priceChangePercent: 1.93,
        volume24h: 4200000,
        completionRate: 78,
        roi12m: 16.3,
        demand: 'medium'
      },
      {
        area: 'Dubai Silicon Oasis',
        currentPrice: 720000,
        priceChange24h: 8600,
        priceChangePercent: 1.21,
        volume24h: 3100000,
        completionRate: 85,
        roi12m: 15.7,
        demand: 'medium'
      }
    ];

    setMarketData(dubaiAreas);
    setActiveProjects(4);
    setAverageROI(15.3);
  }, []);

  // Mise à jour marché en temps réel
  useEffect(() => {
    const updateMarketData = () => {
      setMarketData(prev => prev.map(area => ({
        ...area,
        priceChange24h: area.priceChange24h + (Math.random() - 0.5) * 5000,
        priceChangePercent: area.priceChangePercent + (Math.random() - 0.5) * 0.5,
        volume24h: area.volume24h + (Math.random() - 0.5) * 500000
      })));
    };

    const interval = setInterval(updateMarketData, 45000); // Mise à jour toutes les 45s
    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', { 
      style: 'currency', 
      currency: 'AED',
      minimumFractionDigits: 0 
    }).format(amount);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  };

  return (
    <div className="space-y-6">
      {/* Métriques principales temps réel */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600">Total Collecté</p>
                <p className="text-2xl font-bold text-green-800">
                  {formatCurrency(totalRaised)}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600">Projets Actifs</p>
                <p className="text-2xl font-bold text-blue-800">{activeProjects}</p>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Building2 className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600">ROI Moyen</p>
                <p className="text-2xl font-bold text-purple-800">{averageROI}%</p>
              </div>
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-600">Donateurs</p>
                <p className="text-2xl font-bold text-orange-800">
                  {donations.reduce((sum, d) => sum + d.donorCount, 0)}
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Flux temps réel des dons */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-500" />
            Dons en Temps Réel
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {donations.map((donation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">{donation.project}</p>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {donation.location}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">
                    {formatCurrency(donation.amount)}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {formatTime(donation.timestamp)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Marché immobilier Dubai */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-500" />
            Marché Immobilier Dubai - Temps Réel
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {marketData.map((area, index) => (
              <div key={area.area} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <Home className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold">{area.area}</h4>
                      <p className="text-sm text-gray-600">Prix moyen propriété</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold">{formatCurrency(area.currentPrice)}</p>
                    <div className={`flex items-center gap-1 text-sm ${
                      area.priceChangePercent >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {area.priceChangePercent >= 0 ? (
                        <ArrowUp className="h-4 w-4" />
                      ) : (
                        <ArrowDown className="h-4 w-4" />
                      )}
                      {area.priceChangePercent.toFixed(2)}% (24h)
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Volume 24h</p>
                    <p className="font-bold">{(area.volume24h / 1000000).toFixed(1)}M AED</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Construction</p>
                    <div className="mt-1">
                      <Progress value={area.completionRate} className="h-2" />
                      <p className="text-xs mt-1">{area.completionRate}%</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">ROI 12 mois</p>
                    <p className="font-bold text-green-600">{area.roi12m}%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Demande</p>
                    <Badge className={`${
                      area.demand === 'high' ? 'bg-red-500' :
                      area.demand === 'medium' ? 'bg-orange-500' : 'bg-gray-500'
                    } text-white`}>
                      {area.demand === 'high' ? 'Forte' : 
                       area.demand === 'medium' ? 'Moyenne' : 'Faible'}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Opportunités d'investissement */}
      <Card className="border-2 border-yellow-200 bg-yellow-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-yellow-800">
            <Target className="h-5 w-5" />
            Opportunités Stratégiques - Action Immédiate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg border border-yellow-200">
              <h4 className="font-bold text-yellow-800 mb-2">⭐ Dubai South - Tendance Haussière</h4>
              <p className="text-sm text-gray-700 mb-3">
                Prix en hausse de +2.79% sur 24h. Zone en développement rapide avec nouveau métro en construction.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Potentiel ROI: 18.5%</span>
                <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                  Investir Maintenant
                </Button>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg border border-yellow-200">
              <h4 className="font-bold text-yellow-800 mb-2">💎 Dubai Investment Park - Sous-évalué</h4>
              <p className="text-sm text-gray-700 mb-3">
                Prix attractifs avec croissance stable +1.93%. Zone résidentielle familiale recherchée.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Potentiel ROI: 16.3%</span>
                <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                  Analyser l'Opportunité
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}