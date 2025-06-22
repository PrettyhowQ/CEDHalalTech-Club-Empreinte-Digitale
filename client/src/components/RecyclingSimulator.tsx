import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Recycle,
  Laptop,
  Smartphone,
  Monitor,
  Tablet,
  Leaf,
  Globe,
  Zap,
  Droplets,
  TreePine,
  Factory,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Users,
  Euro,
  Clock,
  MapPin,
  Truck,
  Package,
  Building
} from 'lucide-react';

interface MaterialImpact {
  co2Saved: number; // kg CO2
  energySaved: number; // kWh
  waterSaved: number; // liters
  materialsRecovered: string[];
  recyclingRate: number; // percentage
  landfillDiverted: number; // kg
  jobsCreated: number; // per 1000 units
}

interface RecyclableItem {
  id: string;
  name: string;
  category: 'laptop' | 'smartphone' | 'tablet' | 'monitor' | 'peripheral';
  icon: any;
  weight: number; // kg
  materials: string[];
  avgLifespan: number; // years
  impact: MaterialImpact;
  marketValue: number; // euros
  refurbishRate: number; // percentage that can be refurbished
}

interface SimulationResult {
  totalCO2Saved: number;
  totalEnergySaved: number;
  totalWaterSaved: number;
  totalValue: number;
  totalWeight: number;
  itemsRefurbished: number;
  itemsRecycled: number;
  jobsSupported: number;
  treesEquivalent: number;
  housesEnergized: number;
}

export function RecyclingSimulator() {
  const [selectedItems, setSelectedItems] = useState<{[key: string]: number}>({});
  const [simulationResult, setSimulationResult] = useState<SimulationResult | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [activeView, setActiveView] = useState('simulator');

  const recyclableItems: RecyclableItem[] = [
    {
      id: 'macbook-pro',
      name: 'MacBook Pro',
      category: 'laptop',
      icon: Laptop,
      weight: 2.0,
      materials: ['Aluminium', 'Lithium', 'Cuivre', 'Terres rares', 'Verre'],
      avgLifespan: 7,
      impact: {
        co2Saved: 300,
        energySaved: 1800,
        waterSaved: 25000,
        materialsRecovered: ['85% Aluminium', '95% Lithium', '80% Cuivre'],
        recyclingRate: 78,
        landfillDiverted: 1.8,
        jobsCreated: 0.8
      },
      marketValue: 800,
      refurbishRate: 65
    },
    {
      id: 'iphone-pro',
      name: 'iPhone Pro',
      category: 'smartphone',
      icon: Smartphone,
      weight: 0.24,
      materials: ['Aluminium', 'Lithium', 'Cobalt', 'Tungstène', 'Verre'],
      avgLifespan: 4,
      impact: {
        co2Saved: 70,
        energySaved: 520,
        waterSaved: 8500,
        materialsRecovered: ['80% Aluminium', '95% Lithium', '85% Cobalt'],
        recyclingRate: 82,
        landfillDiverted: 0.22,
        jobsCreated: 1.2
      },
      marketValue: 400,
      refurbishRate: 75
    },
    {
      id: 'ipad-pro',
      name: 'iPad Pro',
      category: 'tablet',
      icon: Tablet,
      weight: 0.68,
      materials: ['Aluminium', 'Lithium', 'Silicium', 'Verre', 'Plastique'],
      avgLifespan: 5,
      impact: {
        co2Saved: 150,
        energySaved: 980,
        waterSaved: 15000,
        materialsRecovered: ['82% Aluminium', '93% Lithium', '75% Verre'],
        recyclingRate: 75,
        landfillDiverted: 0.65,
        jobsCreated: 0.9
      },
      marketValue: 500,
      refurbishRate: 70
    },
    {
      id: 'monitor-4k',
      name: 'Écran 4K 27"',
      category: 'monitor',
      icon: Monitor,
      weight: 6.5,
      materials: ['Aluminium', 'Verre', 'Plastique', 'Cuivre', 'Terres rares'],
      avgLifespan: 8,
      impact: {
        co2Saved: 180,
        energySaved: 1200,
        waterSaved: 18000,
        materialsRecovered: ['78% Aluminium', '85% Verre', '70% Plastique'],
        recyclingRate: 72,
        landfillDiverted: 6.2,
        jobsCreated: 0.6
      },
      marketValue: 200,
      refurbishRate: 60
    },
    {
      id: 'thinkpad-x1',
      name: 'ThinkPad X1',
      category: 'laptop',
      icon: Laptop,
      weight: 1.4,
      materials: ['Carbone', 'Aluminium', 'Lithium', 'Cuivre', 'Magnésium'],
      avgLifespan: 6,
      impact: {
        co2Saved: 280,
        energySaved: 1650,
        waterSaved: 22000,
        materialsRecovered: ['88% Carbone', '85% Aluminium', '92% Lithium'],
        recyclingRate: 80,
        landfillDiverted: 1.3,
        jobsCreated: 0.7
      },
      marketValue: 600,
      refurbishRate: 68
    }
  ];

  const calculateImpact = () => {
    let totalCO2 = 0;
    let totalEnergy = 0;
    let totalWater = 0;
    let totalValue = 0;
    let totalWeight = 0;
    let totalJobs = 0;
    let totalRefurbished = 0;
    let totalRecycled = 0;

    Object.entries(selectedItems).forEach(([itemId, quantity]) => {
      if (quantity > 0) {
        const item = recyclableItems.find(i => i.id === itemId);
        if (item) {
          totalCO2 += item.impact.co2Saved * quantity;
          totalEnergy += item.impact.energySaved * quantity;
          totalWater += item.impact.waterSaved * quantity;
          totalValue += item.marketValue * quantity;
          totalWeight += item.weight * quantity;
          totalJobs += (item.impact.jobsCreated * quantity) / 1000;
          
          const refurbished = Math.floor(quantity * (item.refurbishRate / 100));
          totalRefurbished += refurbished;
          totalRecycled += quantity - refurbished;
        }
      }
    });

    const result: SimulationResult = {
      totalCO2Saved: totalCO2,
      totalEnergySaved: totalEnergy,
      totalWaterSaved: totalWater,
      totalValue: totalValue,
      totalWeight: totalWeight,
      itemsRefurbished: totalRefurbished,
      itemsRecycled: totalRecycled,
      jobsSupported: totalJobs,
      treesEquivalent: Math.round(totalCO2 / 25), // 1 arbre absorbe ~25kg CO2/an
      housesEnergized: Math.round(totalEnergy / 3500) // Consommation moyenne maison/an
    };

    setSimulationResult(result);
    setShowResults(true);
  };

  const resetSimulation = () => {
    setSelectedItems({});
    setSimulationResult(null);
    setShowResults(false);
  };

  const handleQuantityChange = (itemId: string, quantity: number) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemId]: Math.max(0, quantity)
    }));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'laptop': return Laptop;
      case 'smartphone': return Smartphone;
      case 'tablet': return Tablet;
      case 'monitor': return Monitor;
      default: return Package;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'laptop': return 'bg-blue-100 text-blue-800';
      case 'smartphone': return 'bg-green-100 text-green-800';
      case 'tablet': return 'bg-purple-100 text-purple-800';
      case 'monitor': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full flex items-center justify-center"
          >
            <Recycle className="h-8 w-8 text-white" />
          </motion.div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Simulateur de Recyclage
            </h1>
            <p className="text-xl text-gray-700">Impact environnemental en un clic</p>
          </div>
        </div>
        
        <div className="flex justify-center gap-2 flex-wrap">
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            <Leaf className="h-3 w-3 mr-1" />
            Écologique
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            <Globe className="h-3 w-3 mr-1" />
            Impact planétaire
          </Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            <TrendingUp className="h-3 w-3 mr-1" />
            Économie circulaire
          </Badge>
        </div>
      </motion.div>

      <Tabs value={activeView} onValueChange={setActiveView} className="max-w-6xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="simulator">Simulateur</TabsTrigger>
          <TabsTrigger value="impact">Impact Global</TabsTrigger>
        </TabsList>

        {/* Simulator */}
        <TabsContent value="simulator">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Material Selection */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-green-600" />
                    Sélectionner vos équipements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recyclableItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="p-4 border rounded-lg hover:shadow-md transition-all"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <IconComponent className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <Badge variant="outline" className={getCategoryColor(item.category)}>
                                {item.category}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-green-600">{item.marketValue}€</div>
                            <div className="text-xs text-gray-500">{item.weight}kg</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Label htmlFor={`quantity-${item.id}`} className="text-sm">Quantité:</Label>
                          <Input
                            id={`quantity-${item.id}`}
                            type="number"
                            min="0"
                            max="100"
                            value={selectedItems[item.id] || 0}
                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
                            className="w-20"
                          />
                        </div>
                        
                        <div className="mt-2 text-xs text-gray-600">
                          {item.materials.join(', ')}
                        </div>
                      </motion.div>
                    );
                  })}
                  
                  <div className="flex gap-2 pt-4">
                    <Button 
                      onClick={calculateImpact} 
                      className="flex-1 bg-green-600 hover:bg-green-700"
                      disabled={Object.values(selectedItems).every(q => q === 0)}
                    >
                      <Zap className="h-4 w-4 mr-2" />
                      Calculer l'impact
                    </Button>
                    <Button 
                      onClick={resetSimulation}
                      variant="outline"
                    >
                      Reset
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <AnimatePresence>
                {showResults && simulationResult && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-green-800">
                          <Award className="h-5 w-5" />
                          Impact environnemental
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        
                        {/* Key Metrics */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <div className="flex justify-center mb-2">
                              <Globe className="h-6 w-6 text-green-600" />
                            </div>
                            <div className="text-2xl font-bold text-green-600">
                              {simulationResult.totalCO2Saved.toFixed(0)}kg
                            </div>
                            <div className="text-sm text-gray-600">CO₂ évité</div>
                          </div>
                          
                          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <div className="flex justify-center mb-2">
                              <Zap className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="text-2xl font-bold text-blue-600">
                              {simulationResult.totalEnergySaved.toFixed(0)}kWh
                            </div>
                            <div className="text-sm text-gray-600">Énergie économisée</div>
                          </div>
                          
                          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <div className="flex justify-center mb-2">
                              <Droplets className="h-6 w-6 text-cyan-600" />
                            </div>
                            <div className="text-2xl font-bold text-cyan-600">
                              {(simulationResult.totalWaterSaved / 1000).toFixed(1)}m³
                            </div>
                            <div className="text-sm text-gray-600">Eau préservée</div>
                          </div>
                          
                          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <div className="flex justify-center mb-2">
                              <Euro className="h-6 w-6 text-purple-600" />
                            </div>
                            <div className="text-2xl font-bold text-purple-600">
                              {simulationResult.totalValue.toFixed(0)}€
                            </div>
                            <div className="text-sm text-gray-600">Valeur récupérée</div>
                          </div>
                        </div>

                        {/* Equivalences */}
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-medium mb-3 text-gray-800">Équivalences concrètes</h4>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <TreePine className="h-4 w-4 text-green-600" />
                              <span>Équivaut à planter <strong>{simulationResult.treesEquivalent}</strong> arbres</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Factory className="h-4 w-4 text-blue-600" />
                              <span>Alimente <strong>{simulationResult.housesEnergized}</strong> maisons pendant un mois</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Users className="h-4 w-4 text-purple-600" />
                              <span>Soutient <strong>{simulationResult.jobsSupported.toFixed(1)}</strong> emplois verts</span>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-medium mb-3 text-gray-800">Circuit TechForAll</h4>
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span><strong>{simulationResult.itemsRefurbished}</strong> équipements reconditionnés</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Recycle className="h-4 w-4 text-blue-600" />
                              <span><strong>{simulationResult.itemsRecycled}</strong> équipements recyclés</span>
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button 
                              onClick={() => window.location.href = '/generateurs-ia'}
                              className="flex-1"
                              variant="outline"
                            >
                              <ArrowRight className="h-4 w-4 mr-2" />
                              Faire un don
                            </Button>
                            <Button 
                              onClick={() => window.location.href = '/boutique-solidaire'}
                              className="flex-1"
                              variant="outline"
                            >
                              <Laptop className="h-4 w-4 mr-2" />
                              Acheter reconditionné
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>

              {!showResults && (
                <Card className="h-full flex items-center justify-center">
                  <CardContent className="text-center py-12">
                    <Recycle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">
                      Sélectionnez vos équipements et cliquez sur "Calculer l'impact" 
                      pour voir votre contribution environnementale.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        {/* Global Impact */}
        <TabsContent value="impact">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-green-600" />
                Impact global TechForAll 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                  <Globe className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-green-600">125 tonnes</div>
                  <div className="text-sm text-gray-600">CO₂ évité cette année</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <Zap className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-blue-600">580 MWh</div>
                  <div className="text-sm text-gray-600">Énergie économisée</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-purple-600">2,500</div>
                  <div className="text-sm text-gray-600">Équipements traités</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                  <TreePine className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-orange-600">5,000</div>
                  <div className="text-sm text-gray-600">Arbres équivalents</div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Rejoignez le mouvement d'économie circulaire
                </h3>
                <p className="text-gray-700 mb-4">
                  Chaque équipement donné compte. Ensemble, créons un impact positif durable.
                </p>
                
                <div className="flex justify-center gap-4">
                  <Button 
                    onClick={() => window.location.href = '/techforall'}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Building className="h-4 w-4 mr-2" />
                    Découvrir TechForAll
                  </Button>
                  <Button 
                    onClick={() => window.location.href = '/generateurs-ia'}
                    variant="outline"
                  >
                    <Package className="h-4 w-4 mr-2" />
                    Commencer un don
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}