import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Heart, 
  Package, 
  Truck, 
  MapPin, 
  TrendingUp, 
  Users, 
  Euro,
  Calendar,
  Activity,
  Target,
  Award,
  Globe,
  BarChart3,
  Laptop,
  Smartphone,
  Monitor,
  HardDrive
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CEDFooter } from './CEDFooter';

interface TechForAllMetrics {
  totalBeneficiaires: number;
  donationsRecues: number;
  equipementsDistribues: number;
  valeursEconomisees: number;
  impactEnvironnemental: {
    co2Evite: number;
    dechetsEvites: number;
  };
  centresLogistiques: {
    costaDelSol: {
      stock: number;
      traitesRecemment: number;
      enAttente: number;
    };
    suisse: {
      stock: number;
      traitesRecemment: number;
      enAttente: number;
    };
    europe: {
      stock: number;
      traitesRecemment: number;
      enAttente: number;
    };
  };
  categoriesEquipements: {
    ordinateurs: { stock: number; distribues: number };
    smartphones: { stock: number; distribues: number };
    tablettes: { stock: number; distribues: number };
    accessoires: { stock: number; distribues: number };
  };
}

const metricsData: TechForAllMetrics = {
  totalBeneficiaires: 8492,
  donationsRecues: 15630,
  equipementsDistribues: 12847,
  valeursEconomisees: 2340000,
  impactEnvironnemental: {
    co2Evite: 1250,
    dechetsEvites: 85000
  },
  centresLogistiques: {
    costaDelSol: {
      stock: 2847,
      traitesRecemment: 234,
      enAttente: 89
    },
    suisse: {
      stock: 1456,
      traitesRecemment: 156,
      enAttente: 45
    },
    europe: {
      stock: 3289,
      traitesRecemment: 298,
      enAttente: 67
    }
  },
  categoriesEquipements: {
    ordinateurs: { stock: 1847, distribues: 5234 },
    smartphones: { stock: 2456, distribues: 3845 },
    tablettes: { stock: 897, distribues: 2156 },
    accessoires: { stock: 2392, distribues: 1612 }
  }
};

export function TechForAllDashboard() {
  const [animatedMetrics, setAnimatedMetrics] = useState({
    beneficiaires: 0,
    donations: 0,
    valeurEconomisee: 0,
    equipements: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedMetrics({
        beneficiaires: metricsData.totalBeneficiaires,
        donations: metricsData.donationsRecues,
        valeurEconomisee: metricsData.valeursEconomisees,
        equipements: metricsData.equipementsDistribues
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const totalStock = Object.values(metricsData.centresLogistiques).reduce((sum, centre) => sum + centre.stock, 0);
  const totalTraites = Object.values(metricsData.centresLogistiques).reduce((sum, centre) => sum + centre.traitesRecemment, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            TechForAll Dashboard
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Vue d'ensemble en temps réel - Association & Boutique Solidaire
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              💚 Impact Social
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              🌱 Développement Durable
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              📱 Technologie Solidaire
            </Badge>
          </div>
        </motion.div>

        {/* Métriques Principales */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bénéficiaires</CardTitle>
              <Users className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {animatedMetrics.beneficiaires.toLocaleString()}
              </div>
              <p className="text-xs text-green-100">
                Personnes aidées
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Donations Reçues</CardTitle>
              <Heart className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {animatedMetrics.donations.toLocaleString()}
              </div>
              <p className="text-xs text-blue-100">
                Équipements donnés
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Valeur Économisée</CardTitle>
              <Euro className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                €{(animatedMetrics.valeurEconomisee / 1000000).toFixed(1)}M
              </div>
              <p className="text-xs text-purple-100">
                Économies générées
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Équipements Distribués</CardTitle>
              <Package className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {animatedMetrics.equipements.toLocaleString()}
              </div>
              <p className="text-xs text-orange-100">
                En circulation
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Centres Logistiques */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
        >
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
                  <MapPin className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <CardTitle>Costa del Sol</CardTitle>
                  <CardDescription>Centre Principal - Espagne</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Stock actuel:</span>
                  <p className="font-bold text-lg">{metricsData.centresLogistiques.costaDelSol.stock}</p>
                </div>
                <div>
                  <span className="text-gray-500">Traités (7j):</span>
                  <p className="font-bold text-lg text-green-600">{metricsData.centresLogistiques.costaDelSol.traitesRecemment}</p>
                </div>
              </div>
              <div>
                <span className="text-gray-500 text-sm">En attente traitement:</span>
                <div className="flex items-center gap-2 mt-1">
                  <Progress value={(metricsData.centresLogistiques.costaDelSol.enAttente / 100) * 100} className="flex-1" />
                  <span className="text-sm font-medium">{metricsData.centresLogistiques.costaDelSol.enAttente}</span>
                </div>
              </div>
              <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700">
                <Activity className="h-4 w-4 mr-2" />
                Gérer Costa del Sol
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
                  <MapPin className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <CardTitle>Logistique Suisse</CardTitle>
                  <CardDescription>Centre Aziz - Suisse</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Stock actuel:</span>
                  <p className="font-bold text-lg">{metricsData.centresLogistiques.suisse.stock}</p>
                </div>
                <div>
                  <span className="text-gray-500">Traités (7j):</span>
                  <p className="font-bold text-lg text-green-600">{metricsData.centresLogistiques.suisse.traitesRecemment}</p>
                </div>
              </div>
              <div>
                <span className="text-gray-500 text-sm">En attente traitement:</span>
                <div className="flex items-center gap-2 mt-1">
                  <Progress value={(metricsData.centresLogistiques.suisse.enAttente / 50) * 100} className="flex-1" />
                  <span className="text-sm font-medium">{metricsData.centresLogistiques.suisse.enAttente}</span>
                </div>
              </div>
              <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                <Activity className="h-4 w-4 mr-2" />
                Contact Aziz
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <CardTitle>Logistique Europe</CardTitle>
                  <CardDescription>Centre Abdelkarim - Europe</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Stock actuel:</span>
                  <p className="font-bold text-lg">{metricsData.centresLogistiques.europe.stock}</p>
                </div>
                <div>
                  <span className="text-gray-500">Traités (7j):</span>
                  <p className="font-bold text-lg text-green-600">{metricsData.centresLogistiques.europe.traitesRecemment}</p>
                </div>
              </div>
              <div>
                <span className="text-gray-500 text-sm">En attente traitement:</span>
                <div className="flex items-center gap-2 mt-1">
                  <Progress value={(metricsData.centresLogistiques.europe.enAttente / 70) * 100} className="flex-1" />
                  <span className="text-sm font-medium">{metricsData.centresLogistiques.europe.enAttente}</span>
                </div>
              </div>
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                <Activity className="h-4 w-4 mr-2" />
                Contact Abdelkarim
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Catégories d'Équipements */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ordinateurs</CardTitle>
              <Laptop className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">{metricsData.categoriesEquipements.ordinateurs.stock}</div>
              <div className="text-xs text-gray-500 mb-2">En stock</div>
              <div className="text-sm">
                <span className="text-green-600 font-medium">{metricsData.categoriesEquipements.ordinateurs.distribues}</span>
                <span className="text-gray-500"> distribués</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Smartphones</CardTitle>
              <Smartphone className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">{metricsData.categoriesEquipements.smartphones.stock}</div>
              <div className="text-xs text-gray-500 mb-2">En stock</div>
              <div className="text-sm">
                <span className="text-green-600 font-medium">{metricsData.categoriesEquipements.smartphones.distribues}</span>
                <span className="text-gray-500"> distribués</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tablettes</CardTitle>
              <Monitor className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">{metricsData.categoriesEquipements.tablettes.stock}</div>
              <div className="text-xs text-gray-500 mb-2">En stock</div>
              <div className="text-sm">
                <span className="text-green-600 font-medium">{metricsData.categoriesEquipements.tablettes.distribues}</span>
                <span className="text-gray-500"> distribués</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Accessoires</CardTitle>
              <HardDrive className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">{metricsData.categoriesEquipements.accessoires.stock}</div>
              <div className="text-xs text-gray-500 mb-2">En stock</div>
              <div className="text-sm">
                <span className="text-green-600 font-medium">{metricsData.categoriesEquipements.accessoires.distribues}</span>
                <span className="text-gray-500"> distribués</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Impact Environnemental */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-green-600" />
                Impact Environnemental
              </CardTitle>
              <CardDescription>
                Contribution au développement durable
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">CO2 évité</span>
                  <span className="text-lg font-bold text-green-600">
                    {metricsData.impactEnvironnemental.co2Evite} tonnes
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Déchets évités</span>
                  <span className="text-lg font-bold text-green-600">
                    {metricsData.impactEnvironnemental.dechetsEvites} kg
                  </span>
                </div>
              </div>
              
              <Separator />
              
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-sm text-green-800 dark:text-green-200">
                  Grâce à TechForAll, nous avons permis d'éviter l'équivalent de 
                  <strong> {(metricsData.impactEnvironnemental.co2Evite / 4.6 * 12).toFixed(0)} </strong>
                  mois de consommation électrique d'un foyer moyen.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                Performance Globale
              </CardTitle>
              <CardDescription>
                Indicateurs de performance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Taux de distribution</span>
                    <span>{((metricsData.equipementsDistribues / metricsData.donationsRecues) * 100).toFixed(1)}%</span>
                  </div>
                  <Progress value={(metricsData.equipementsDistribues / metricsData.donationsRecues) * 100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Objectif annuel</span>
                    <span>{((metricsData.totalBeneficiaires / 10000) * 100).toFixed(1)}%</span>
                  </div>
                  <Progress value={(metricsData.totalBeneficiaires / 10000) * 100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Efficacité logistique</span>
                    <span>87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Performance exceptionnelle avec un taux de satisfaction bénéficiaires de 
                  <strong> 4.9/5</strong> et un délai moyen de traitement de <strong>3.2 jours</strong>.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Actions Rapides */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Actions Rapides
              </CardTitle>
              <CardDescription>
                Gestion et coordination TechForAll
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button className="h-auto p-4 flex flex-col items-center gap-2">
                  <Package className="h-6 w-6" />
                  <span className="text-sm">Nouvelle Donation</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Truck className="h-6 w-6" />
                  <span className="text-sm">Planifier Livraison</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Users className="h-6 w-6" />
                  <span className="text-sm">Nouveau Bénéficiaire</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <BarChart3 className="h-6 w-6" />
                  <span className="text-sm">Rapport Mensuel</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
      
      <CEDFooter />
    </div>
  );
}