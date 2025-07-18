import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Users, DollarSign, Globe, Shield, Zap, Target, Award } from "lucide-react";

export default function InvestorPitchDeck() {
  const marketData = {
    tam: "5.9T USD",
    sam: "890B USD", 
    som: "12.4B USD",
    growth: "+18.3% CAGR",
    users: "1.8B Muslims worldwide"
  };

  const competitiveAdvantages = [
    "Seul écosystème 100% Sharia compliant validé 150+ scholars",
    "Monopole IA éthique respectant Tawhid et Maslaha",
    "Premier banking islamique 0% Riba multi-devises",
    "Coverage 78+ langues vs 2-3 chez concurrents",
    "Infrastructure cloud halal souveraine unique",
    "27,446+ règles Fiqh informatique propriétaires"
  ];

  const financials = [
    { year: "2025", revenue: "2.8M CHF", users: "1.2M", valuation: "25M CHF" },
    { year: "2026", revenue: "8.5M CHF", users: "3.1M", valuation: "75M CHF" },
    { year: "2027", revenue: "18.2M CHF", users: "5.8M", valuation: "180M CHF" },
    { year: "2028", revenue: "35.7M CHF", users: "9.4M", valuation: "350M CHF" },
    { year: "2029", revenue: "65.3M CHF", users: "15.2M", valuation: "650M CHF" }
  ];

  const fundingRounds = [
    {
      round: "Seed",
      amount: "2M CHF",
      valuation: "15M CHF",
      investors: "Islamic VCs, Family Offices Golfe",
      use: "MVP completion, team expansion"
    },
    {
      round: "Series A",
      amount: "8M CHF", 
      valuation: "45M CHF",
      investors: "Tier 1 VCs, Strategic Islamic banks",
      use: "Product scaling, international expansion"
    },
    {
      round: "Series B",
      amount: "25M CHF",
      valuation: "150M CHF", 
      investors: "Growth funds, Sovereign wealth funds",
      use: "Global dominance, acquisitions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Cover Slide */}
        <div className="text-center mb-8 p-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl text-white shadow-2xl">
          <h1 className="text-5xl font-bold mb-4">CED HalalTech™</h1>
          <p className="text-xl mb-6">The World's First Complete Islamic Fintech Ecosystem</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">847,592</div>
              <div className="text-sm opacity-90">Active Users</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">67</div>
              <div className="text-sm opacity-90">Countries</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">$5.9T</div>
              <div className="text-sm opacity-90">Market Opportunity</div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="problem" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="problem">Problem</TabsTrigger>
            <TabsTrigger value="solution">Solution</TabsTrigger>
            <TabsTrigger value="market">Market</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
            <TabsTrigger value="funding">Funding</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>

          <TabsContent value="problem" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
                <CardTitle className="text-2xl">🎯 The Problem We Solve</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h3 className="font-bold text-lg mb-2">1.8 Billion Muslims Underserved</h3>
                      <p className="text-gray-600">No comprehensive Islamic fintech ecosystem exists that combines banking, education, AI, and compliance in one platform.</p>
                    </div>
                    
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h3 className="font-bold text-lg mb-2">Riba-based Financial Systems</h3>
                      <p className="text-gray-600">Traditional banks offer interest-based products conflicting with Islamic principles, forcing Muslims into compromised financial decisions.</p>
                    </div>
                    
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h3 className="font-bold text-lg mb-2">Fragmented Islamic Services</h3>
                      <p className="text-gray-600">Existing solutions are scattered across different providers with inconsistent Sharia compliance and poor user experience.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 p-6 rounded-lg text-center">
                      <div className="text-4xl font-bold text-red-600">$890B</div>
                      <div className="text-sm text-gray-600 mt-2">Addressable Islamic Finance Market</div>
                    </div>
                    
                    <div className="bg-orange-50 p-6 rounded-lg text-center">
                      <div className="text-4xl font-bold text-orange-600">0</div>
                      <div className="text-sm text-gray-600 mt-2">Complete Sharia-compliant ecosystems</div>
                    </div>
                    
                    <div className="bg-yellow-50 p-6 rounded-lg text-center">
                      <div className="text-4xl font-bold text-yellow-600">78%</div>
                      <div className="text-sm text-gray-600 mt-2">Muslims seeking ethical alternatives</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="solution" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                <CardTitle className="text-2xl">✨ Our Revolutionary Solution</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 border rounded-xl">
                    <div className="text-4xl mb-4">🏦</div>
                    <h3 className="font-bold mb-2">CED Bank</h3>
                    <p className="text-sm text-gray-600">0% Riba banking with Murabaha, Ijara, Musharaka products</p>
                  </div>
                  
                  <div className="text-center p-6 border rounded-xl">
                    <div className="text-4xl mb-4">🤖</div>
                    <h3 className="font-bold mb-2">Super IARP Pro</h3>
                    <p className="text-sm text-gray-600">AI assistant respecting Tawhid and Maslaha principles</p>
                  </div>
                  
                  <div className="text-center p-6 border rounded-xl">
                    <div className="text-4xl mb-4">🛡️</div>
                    <h3 className="font-bold mb-2">Al-Aman Takaful</h3>
                    <p className="text-sm text-gray-600">Islamic insurance covering 45+ family members</p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-4">Unique Competitive Advantages:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {competitiveAdvantages.map((advantage, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Shield className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="market" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                <CardTitle className="text-2xl">📈 Market Opportunity</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-blue-50 rounded-xl">
                      <Globe className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-blue-600">{marketData.tam}</div>
                      <div className="text-sm text-gray-600">Total Addressable Market</div>
                      <div className="text-sm text-blue-600 mt-2">Global Islamic Finance</div>
                    </div>
                    
                    <div className="text-center p-6 bg-cyan-50 rounded-xl">
                      <Target className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-cyan-600">{marketData.sam}</div>
                      <div className="text-sm text-gray-600">Serviceable Addressable Market</div>
                      <div className="text-sm text-cyan-600 mt-2">Digital Islamic Finance</div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-green-50 rounded-xl">
                      <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-green-600">{marketData.som}</div>
                      <div className="text-sm text-gray-600">Serviceable Obtainable Market</div>
                      <div className="text-sm text-green-600 mt-2">Our 5-year target</div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <span>Market Growth Rate</span>
                        <Badge className="bg-green-100 text-green-800">{marketData.growth}</Badge>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <span>Target Demographics</span>
                        <Badge className="bg-blue-100 text-blue-800">{marketData.users}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="business" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                <CardTitle className="text-2xl">💰 Business Model & Projections</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid gap-6">
                  <div className="grid md:grid-cols-5 gap-4">
                    {financials.map((year) => (
                      <div key={year.year} className="text-center p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg">
                        <div className="text-lg font-bold text-purple-600">{year.year}</div>
                        <div className="text-2xl font-bold text-indigo-600 my-2">{year.revenue}</div>
                        <div className="text-sm text-gray-600">{year.users} users</div>
                        <div className="text-sm text-purple-600 font-semibold mt-1">{year.valuation}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 border rounded-lg">
                      <h4 className="font-bold mb-4 flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-green-500" />
                        Revenue Streams
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div>• Banking transaction fees (40%)</div>
                        <div>• Premium subscriptions (25%)</div>
                        <div>• Education certifications (20%)</div>
                        <div>• Takaful premiums (10%)</div>
                        <div>• B2B enterprise licenses (5%)</div>
                      </div>
                    </div>

                    <div className="p-6 border rounded-lg">
                      <h4 className="font-bold mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-500" />
                        Customer Acquisition
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div>• CAC: $12 (industry avg: $45)</div>
                        <div>• LTV: $890 (7.4x LTV/CAC)</div>
                        <div>• Organic growth: 65%</div>
                        <div>• Viral coefficient: 2.3</div>
                        <div>• Retention: 94% monthly</div>
                      </div>
                    </div>

                    <div className="p-6 border rounded-lg">
                      <h4 className="font-bold mb-4 flex items-center gap-2">
                        <Award className="h-5 w-5 text-purple-500" />
                        Key Metrics
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div>• Gross margin: 78%</div>
                        <div>• Monthly churn: 6%</div>
                        <div>• NPS Score: 89</div>
                        <div>• Daily active users: 65%</div>
                        <div>• Revenue per user: $156/year</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="funding" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-500 to-green-500 text-white">
                <CardTitle className="text-2xl">💎 Funding Strategy</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {fundingRounds.map((round, idx) => (
                    <div key={idx} className="p-6 border rounded-xl bg-gradient-to-r from-emerald-50 to-green-50">
                      <div className="grid md:grid-cols-4 gap-4 items-center">
                        <div>
                          <div className="text-lg font-bold text-emerald-600">{round.round}</div>
                          <div className="text-sm text-gray-600">Round</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-600">{round.amount}</div>
                          <div className="text-sm text-gray-600">Funding</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-emerald-600">{round.valuation}</div>
                          <div className="text-sm text-gray-600">Valuation</div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{round.investors}</div>
                          <div className="text-xs text-gray-600">{round.use}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-yellow-50 rounded-lg">
                  <h4 className="font-bold text-yellow-800 mb-4">🎯 Current Funding Round: Seed</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-2xl font-bold text-yellow-600 mb-2">2M CHF</div>
                      <div className="text-sm text-gray-600 mb-4">Seeking for product completion and team expansion</div>
                      <div className="space-y-2 text-sm">
                        <div>• 40% Product development & engineering</div>
                        <div>• 30% Team expansion (10+ developers)</div>
                        <div>• 20% Regulatory compliance & certifications</div>
                        <div>• 10% Marketing & user acquisition</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-white rounded-lg">
                        <div className="text-lg font-bold">Use of Funds</div>
                        <div className="text-sm text-gray-600 mt-2">18-month runway to profitability</div>
                      </div>
                      <div className="p-4 bg-white rounded-lg">
                        <div className="text-lg font-bold">Expected ROI</div>
                        <div className="text-sm text-gray-600 mt-2">25x return potential by exit</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                <CardTitle className="text-2xl">👥 Leadership Team</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="p-6 border rounded-xl">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                          YY
                        </div>
                        <div>
                          <div className="font-bold text-lg">Yakoubi Yamina</div>
                          <div className="text-sm text-gray-600">Founder & CEO</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 space-y-2">
                        <div>• Visionary leader Islamic fintech innovation</div>
                        <div>• 15+ years experience financial services</div>
                        <div>• Deep expertise Sharia compliance</div>
                        <div>• Fluent 5+ languages, global perspective</div>
                      </div>
                    </div>

                    <div className="p-6 border rounded-xl">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                          MK
                        </div>
                        <div>
                          <div className="font-bold text-lg">Malik Ketar</div>
                          <div className="text-sm text-gray-600">CTO & Head of Development</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 space-y-2">
                        <div>• Full-stack architect React/Node.js/PostgreSQL</div>
                        <div>• Specialized Islamic UI/UX design</div>
                        <div>• 10+ years enterprise software</div>
                        <div>• Led teams building scalable platforms</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 bg-blue-50 rounded-xl">
                      <h4 className="font-bold text-blue-800 mb-4">🏆 Advisory Board</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span>Islamic Scholars</span>
                          <Badge className="bg-blue-100 text-blue-800">150+ Global</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Fintech Veterans</span>
                          <Badge className="bg-green-100 text-green-800">12 Senior</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Regulatory Experts</span>
                          <Badge className="bg-purple-100 text-purple-800">8 Specialists</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Tech Industry Leaders</span>
                          <Badge className="bg-orange-100 text-orange-800">15 Advisors</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-green-50 rounded-xl">
                      <h4 className="font-bold text-green-800 mb-4">📈 Team Growth Plan</h4>
                      <div className="space-y-3 text-sm">
                        <div>• Engineering: 25 developers by 2026</div>
                        <div>• Compliance: 15 Sharia specialists</div>
                        <div>• Product: 10 UX/UI designers</div>
                        <div>• Business: 20 sales & partnerships</div>
                        <div>• Operations: 15 customer success</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-8 text-center p-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Islamic Finance?</h2>
          <p className="text-xl mb-6">Join us in building the world's first complete halal fintech ecosystem</p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              <DollarSign className="mr-2 h-5 w-5" />
              Invest Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Zap className="mr-2 h-5 w-5" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}