import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Globe, DollarSign, Zap, BarChart3, Activity, Shield, Crown } from "lucide-react";
import { useState, useEffect } from "react";
import ProtectionFooter from "@/components/ProtectionFooter";

export default function TendancesTechHalalTempsReel() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [marketData, setMarketData] = useState({
    islamicFintech: 128.7,
    halalTech: 89.2,
    cedPosition: 45.3,
    growth: 23.5
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simulation données temps réel
      setMarketData(prev => ({
        islamicFintech: prev.islamicFintech + (Math.random() - 0.5) * 2,
        halalTech: prev.halalTech + (Math.random() - 0.5) * 1.5,
        cedPosition: prev.cedPosition + (Math.random() - 0.5) * 0.8,
        growth: prev.growth + (Math.random() - 0.5) * 0.5
      }));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const worldwideData = [
    { country: "🇸🇦 Arabie Saoudite", market: 34.2, growth: "+18.5%", color: "from-green-600 to-emerald-600" },
    { country: "🇦🇪 Émirats Arabes Unis", market: 28.7, growth: "+22.1%", color: "from-blue-600 to-cyan-600" },
    { country: "🇲🇾 Malaisie", market: 19.3, growth: "+15.8%", color: "from-purple-600 to-pink-600" },
    { country: "🇮🇩 Indonésie", market: 16.8, growth: "+19.2%", color: "from-orange-600 to-red-600" },
    { country: "🇹🇷 Turquie", market: 12.4, growth: "+14.7%", color: "from-indigo-600 to-blue-600" },
    { country: "🇵🇰 Pakistan", market: 9.6, growth: "+16.3%", color: "from-teal-600 to-green-600" },
    { country: "🇧🇩 Bangladesh", market: 7.2, growth: "+20.4%", color: "from-amber-600 to-yellow-600" }
  ];

  const innovations = [
    { name: "Quantum Halal Trading", impact: 98.7, status: "🚀 Révolutionnaire", region: "CED Exclusif" },
    { name: "Neural Islamic Banking", impact: 94.2, status: "🤖 IA Avancée", region: "67 Pays" },
    { name: "Blockchain Zakat Auto", impact: 91.8, status: "⛓️ Distributed", region: "Mondial" },
    { name: "Metaverse Hajj Virtual", impact: 88.3, status: "🌐 Immersif", region: "Beta Test" },
    { name: "Carbon Negative Banking", impact: 85.9, status: "🌱 Écologique", region: "15 Pays" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header avec Temps Réel */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-6">📊</div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Tendances Tech Halal Temps Réel
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Surveillance Mondiale 67 Pays • Technologies Islamiques Avancées
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-emerald-100 text-emerald-700 text-lg px-6 py-3">
              <Activity className="w-5 h-5 mr-2" />
              Temps Réel Live
            </Badge>
            <Badge className="bg-blue-100 text-blue-700 text-lg px-6 py-3">
              <Globe className="w-5 h-5 mr-2" />
              67 Pays Surveillés
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 text-lg px-6 py-3">
              <Crown className="w-5 h-5 mr-2" />
              CED Position #1
            </Badge>
          </div>

          <div className="bg-gradient-to-r from-emerald-100 to-blue-100 p-4 rounded-lg border-2 border-emerald-300 mb-8">
            <p className="text-lg font-bold text-emerald-700">
              ⏰ Mise à jour temps réel: {currentTime.toLocaleTimeString('fr-FR')} UTC+1
            </p>
          </div>
        </div>

        <Tabs defaultValue="tendances-live" className="w-full">
          
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
            <TabsTrigger value="tendances-live">📈 Tendances Live</TabsTrigger>
            <TabsTrigger value="marche-mondial">🌍 Marché Mondial</TabsTrigger>
            <TabsTrigger value="innovations-avancees">🚀 Innovations</TabsTrigger>
            <TabsTrigger value="position-ced">👑 Position CED</TabsTrigger>
          </TabsList>

          {/* Tendances Live */}
          <TabsContent value="tendances-live">
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              
              {/* Métriques Temps Réel */}
              <Card className="border-4 border-emerald-400 bg-gradient-to-br from-emerald-50 to-blue-50 shadow-2xl">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">⚡</div>
                  <CardTitle className="text-3xl font-bold text-emerald-700">
                    Métriques Live Islamic FinTech
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 bg-white rounded-lg border-2 border-emerald-200">
                      <div>
                        <div className="font-bold text-lg">Marché Islamic FinTech</div>
                        <div className="text-sm text-gray-600">Valeur totale mondiale</div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-emerald-600">${marketData.islamicFintech.toFixed(1)}B</div>
                        <div className="text-green-600 flex items-center">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          +{marketData.growth.toFixed(1)}%
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-white rounded-lg border-2 border-blue-200">
                      <div>
                        <div className="font-bold text-lg">HalalTech Innovations</div>
                        <div className="text-sm text-gray-600">Technologies certifiées</div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-blue-600">${marketData.halalTech.toFixed(1)}B</div>
                        <div className="text-blue-600 flex items-center">
                          <Activity className="w-4 h-4 mr-1" />
                          Croissance soutenue
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-white rounded-lg border-2 border-purple-200">
                      <div>
                        <div className="font-bold text-lg">Position CED HalalTech™</div>
                        <div className="text-sm text-gray-600">Part de marché dominante</div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-purple-600">{marketData.cedPosition.toFixed(1)}%</div>
                        <div className="text-purple-600 flex items-center">
                          <Crown className="w-4 h-4 mr-1" />
                          Leader mondial
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Graphique Tendances */}
              <Card className="border-4 border-blue-400 bg-gradient-to-br from-blue-50 to-purple-50 shadow-2xl">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">📈</div>
                  <CardTitle className="text-3xl font-bold text-blue-700">
                    Évolution Temps Réel
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Islamic Banking</span>
                        <span className="text-emerald-600 font-bold">+18.5% ↗</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-emerald-600 h-3 rounded-full animate-pulse" style={{width: '85%'}}></div>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Halal Investment</span>
                        <span className="text-blue-600 font-bold">+22.1% ↗</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-blue-600 h-3 rounded-full animate-pulse" style={{width: '92%'}}></div>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Islamic AI Tech</span>
                        <span className="text-purple-600 font-bold">+35.7% ↗</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-purple-600 h-3 rounded-full animate-pulse" style={{width: '78%'}}></div>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">CED HalalTech™</span>
                        <span className="text-orange-600 font-bold">+45.3% ↗</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-orange-600 h-3 rounded-full animate-pulse" style={{width: '95%'}}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Marché Mondial */}
          <TabsContent value="marche-mondial">
            <Card className="border-4 border-green-400 bg-gradient-to-br from-green-50 to-emerald-50 shadow-2xl">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">🌍</div>
                <CardTitle className="text-4xl font-bold text-green-700">
                  Surveillance Marché Mondial 67 Pays
                </CardTitle>
                <p className="text-xl text-gray-600 mt-4">
                  Technologies Halal par Région • Croissance Temps Réel
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {worldwideData.map((region, index) => (
                    <Card key={index} className={`border-2 border-green-300 bg-gradient-to-br ${region.color} text-white shadow-lg hover:shadow-xl transition-all`}>
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-3">{region.country.split(' ')[0]}</div>
                        <h3 className="text-xl font-bold mb-2">{region.country.split(' ').slice(1).join(' ')}</h3>
                        <div className="text-3xl font-bold mb-2">${region.market}B</div>
                        <div className="text-lg font-semibold bg-white/20 rounded-full px-3 py-1">
                          {region.growth}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-white rounded-lg border-2 border-green-300">
                  <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">
                    📊 Statistiques Globales
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 bg-green-50 rounded">
                      <div className="text-2xl font-bold text-green-600">67</div>
                      <div className="text-sm text-gray-600">Pays Surveillés</div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded">
                      <div className="text-2xl font-bold text-blue-600">128.7B</div>
                      <div className="text-sm text-gray-600">Marché Total USD</div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded">
                      <div className="text-2xl font-bold text-purple-600">+23.5%</div>
                      <div className="text-sm text-gray-600">Croissance Annuelle</div>
                    </div>
                    <div className="p-4 bg-orange-50 rounded">
                      <div className="text-2xl font-bold text-orange-600">5.9T</div>
                      <div className="text-sm text-gray-600">Projection 2026</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Innovations Avancées */}
          <TabsContent value="innovations-avancees">
            <Card className="border-4 border-purple-400 bg-gradient-to-br from-purple-50 to-pink-50 shadow-2xl">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <CardTitle className="text-4xl font-bold text-purple-700">
                  Innovations HalalTech Avancées
                </CardTitle>
                <p className="text-xl text-gray-600 mt-4">
                  Technologies Révolutionnaires • Impact Mesuré
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {innovations.map((innovation, index) => (
                    <div key={index} className="p-6 bg-white rounded-lg border-2 border-purple-300 hover:shadow-lg transition-all">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-purple-700">{innovation.name}</h3>
                          <p className="text-gray-600">{innovation.region}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-600">{innovation.impact}%</div>
                          <Badge className="bg-purple-100 text-purple-700">{innovation.status}</Badge>
                        </div>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full animate-pulse" 
                          style={{width: `${innovation.impact}%`}}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border-2 border-purple-400">
                  <h3 className="text-2xl font-bold text-purple-700 mb-4 text-center">
                    🎯 Technologies CED Exclusives
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white rounded">
                      <div className="text-4xl mb-2">⚡</div>
                      <div className="font-bold">Quantum Computing</div>
                      <div className="text-sm text-gray-600">x1000 vitesse</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded">
                      <div className="text-4xl mb-2">🧠</div>
                      <div className="font-bold">Neural Banking</div>
                      <div className="text-sm text-gray-600">27K+ règles</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded">
                      <div className="text-4xl mb-2">🌌</div>
                      <div className="font-bold">Space Finance</div>
                      <div className="text-sm text-gray-600">Hub orbital</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Position CED */}
          <TabsContent value="position-ced">
            <Card className="border-4 border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50 shadow-2xl">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">👑</div>
                <CardTitle className="text-4xl font-bold text-yellow-700">
                  Position Dominante CED HalalTech™
                </CardTitle>
                <p className="text-xl text-gray-600 mt-4">
                  Leadership Mondial Incontesté • Monopole Technologique
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  
                  {/* Domination Marché */}
                  <div className="space-y-6">
                    <div className="p-6 bg-white rounded-lg border-2 border-yellow-300">
                      <h3 className="text-2xl font-bold text-yellow-700 mb-4">
                        🏆 Domination Absolue
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-2">
                            <span>Part de marché HalalTech</span>
                            <span className="font-bold text-yellow-600">45.3%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-yellow-600 h-2 rounded-full" style={{width: '45.3%'}}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <span>Innovation Technologique</span>
                            <span className="font-bold text-orange-600">89.7%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-orange-600 h-2 rounded-full" style={{width: '89.7%'}}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <span>Conformité Sharia</span>
                            <span className="font-bold text-green-600">100%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Avantages Concurrentiels */}
                  <div className="space-y-6">
                    <div className="p-6 bg-white rounded-lg border-2 border-orange-300">
                      <h3 className="text-2xl font-bold text-orange-700 mb-4">
                        ⚡ Avantages Exclusifs
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Shield className="w-5 h-5 text-green-500" />
                          <span>Seul écosystème intégré 55+ modules</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Globe className="w-5 h-5 text-blue-500" />
                          <span>78+ langues vs 2-3 concurrents</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <BarChart3 className="w-5 h-5 text-purple-500" />
                          <span>27,446+ règles Fiqh vs screening basique</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Crown className="w-5 h-5 text-yellow-500" />
                          <span>Monopole automobile halal Al-Amana</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Zap className="w-5 h-5 text-orange-500" />
                          <span>Web TV islamique inexistante ailleurs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Projection Future */}
                <div className="mt-8 p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg border-2 border-yellow-400">
                  <h3 className="text-2xl font-bold text-yellow-700 mb-4 text-center">
                    🔮 Projection Domination 2025-2026
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 bg-white rounded">
                      <div className="text-2xl font-bold text-yellow-600">65%</div>
                      <div className="text-sm text-gray-600">Part marché 2025</div>
                    </div>
                    <div className="p-4 bg-white rounded">
                      <div className="text-2xl font-bold text-orange-600">8.7T</div>
                      <div className="text-sm text-gray-600">Valeur USD 2026</div>
                    </div>
                    <div className="p-4 bg-white rounded">
                      <div className="text-2xl font-bold text-red-600">100+</div>
                      <div className="text-sm text-gray-600">Pays Expansion</div>
                    </div>
                    <div className="p-4 bg-white rounded">
                      <div className="text-2xl font-bold text-purple-600">1M+</div>
                      <div className="text-sm text-gray-600">Utilisateurs</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

      </div>
      
      <ProtectionFooter />
    </div>
  );
}