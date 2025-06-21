import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import {
  Building2,
  TrendingUp,
  Shield,
  Star,
  DollarSign,
  Users,
  Calendar,
  Target,
  CheckCircle,
  Globe,
  Heart,
  Award,
  Filter,
  Search,
  Eye,
  Bookmark,
  ArrowRight,
  PieChart,
  BarChart3,
  Clock
} from 'lucide-react';

interface InvestmentOpportunity {
  id: string;
  title: string;
  type: 'sukuk' | 'equity' | 'real_estate' | 'commodity' | 'fund';
  description: string;
  minInvestment: number;
  expectedReturn: number;
  riskLevel: 'low' | 'medium' | 'high';
  duration: string;
  location: string;
  totalValue: number;
  currentFunding: number;
  investors: number;
  shariahCertified: boolean;
  certificationBody: string;
  sponsor: string;
  tags: string[];
  documents: string[];
  nextDividend?: Date;
  maturityDate?: Date;
  status: 'active' | 'fully_funded' | 'upcoming' | 'closed';
}

interface CrowdfundingProject {
  id: string;
  title: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  investors: number;
  daysLeft: number;
  location: string;
  developer: string;
  expectedCompletion: Date;
  projectedReturn: number;
  images: string[];
  updates: number;
  category: 'residential' | 'commercial' | 'mixed_use' | 'infrastructure';
}

export function IslamicMarketplace() {
  const [activeTab, setActiveTab] = useState<'investments' | 'crowdfunding' | 'portfolio' | 'analytics'>('investments');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'sukuk' | 'equity' | 'real_estate' | 'commodity'>('all');

  const [investments] = useState<InvestmentOpportunity[]>([
    {
      id: '1',
      title: 'Dubai Marina Sukuk 2025-2030',
      type: 'sukuk',
      description: 'Obligations islamiques garanties par des actifs immobiliers premium dans Dubai Marina. Rendement fixe de 7.5% annuel.',
      minInvestment: 50000,
      expectedReturn: 7.5,
      riskLevel: 'low',
      duration: '5 ans',
      location: 'Dubai Marina, UAE',
      totalValue: 500000000,
      currentFunding: 425000000,
      investors: 847,
      shariahCertified: true,
      certificationBody: 'Dubai Islamic Economy Development Centre',
      sponsor: 'Emirates NBD Capital',
      tags: ['Sukuk', 'Immobilier', 'Dubai', 'AAA Rating'],
      documents: ['Prospectus', 'Shariah Certificate', 'Asset Valuation'],
      nextDividend: new Date('2025-09-15'),
      maturityDate: new Date('2030-06-21'),
      status: 'active'
    },
    {
      id: '2',
      title: 'Actions Halal Tech Fund',
      type: 'equity',
      description: 'Fonds diversifié d\'actions technologiques conformes à la Charia, incluant des entreprises fintech islamiques émergentes.',
      minInvestment: 25000,
      expectedReturn: 12.3,
      riskLevel: 'medium',
      duration: '3-7 ans',
      location: 'Global',
      totalValue: 100000000,
      currentFunding: 78000000,
      investors: 423,
      shariahCertified: true,
      certificationBody: 'AAOIFI Standards',
      sponsor: 'Al Rajhi Capital',
      tags: ['Technology', 'Fintech', 'Global', 'Growth'],
      documents: ['Fund Factsheet', 'Shariah Compliance', 'Performance Report'],
      status: 'active'
    },
    {
      id: '3',
      title: 'Burj Khalifa District Commercial',
      type: 'real_estate',
      description: 'Investissement direct dans des bureaux premium au cœur du district financier de Dubai, locataires AAA.',
      minInvestment: 100000,
      expectedReturn: 9.2,
      riskLevel: 'medium',
      duration: '10 ans',
      location: 'Downtown Dubai, UAE',
      totalValue: 250000000,
      currentFunding: 187500000,
      investors: 156,
      shariahCertified: true,
      certificationBody: 'Dubai Islamic Affairs Authority',
      sponsor: 'Emaar Properties',
      tags: ['Commercial', 'Prime Location', 'Long-term', 'Stable Income'],
      documents: ['Property Valuation', 'Lease Agreements', 'Due Diligence'],
      status: 'active'
    },
    {
      id: '4',
      title: 'Or Halal Shariah Gold ETF',
      type: 'commodity',
      description: 'ETF adossé à de l\'or physique stocké dans des coffres certifiés halal, alternative aux investissements traditionnels.',
      minInvestment: 5000,
      expectedReturn: 6.8,
      riskLevel: 'low',
      duration: 'Flexible',
      location: 'UAE Gold Reserves',
      totalValue: 75000000,
      currentFunding: 68000000,
      investors: 1247,
      shariahCertified: true,
      certificationBody: 'Dubai Gold & Commodities Exchange',
      sponsor: 'Shariah Gold Holdings',
      tags: ['Gold', 'Commodity', 'Hedge', 'Liquid'],
      documents: ['Gold Certificates', 'Storage Verification', 'Shariah Opinion'],
      status: 'active'
    }
  ]);

  const [crowdfundingProjects] = useState<CrowdfundingProject[]>([
    {
      id: '1',
      title: 'Résidence Al-Noor - Logements Sociaux',
      description: 'Développement de 120 unités de logements abordables conformes aux principes islamiques dans Sharjah.',
      targetAmount: 15000000,
      currentAmount: 12750000,
      investors: 284,
      daysLeft: 45,
      location: 'Sharjah, UAE',
      developer: 'Sharjah Real Estate Corp',
      expectedCompletion: new Date('2026-12-31'),
      projectedReturn: 11.5,
      images: ['render1.jpg', 'location.jpg', 'floorplan.jpg'],
      updates: 8,
      category: 'residential'
    },
    {
      id: '2',
      title: 'Centre Commercial Al-Baraka',
      description: 'Mall moderne avec zone halal dédiée, mosquée intégrée et espaces familiaux, situé à Abu Dhabi.',
      targetAmount: 45000000,
      currentAmount: 31500000,
      investors: 167,
      daysLeft: 78,
      location: 'Abu Dhabi, UAE',
      developer: 'Mubadala Development',
      expectedCompletion: new Date('2027-06-30'),
      projectedReturn: 13.2,
      images: ['mall_exterior.jpg', 'interior.jpg', 'mosque.jpg'],
      updates: 12,
      category: 'commercial'
    },
    {
      id: '3',
      title: 'Campus Universitaire Islamique',
      description: 'Extension du campus de l\'Université Islamique de Dubai avec laboratoires high-tech et bibliothèque.',
      targetAmount: 25000000,
      currentAmount: 8750000,
      investors: 342,
      daysLeft: 120,
      location: 'Academic City, Dubai',
      developer: 'Dubai Academic City Authority',
      expectedCompletion: new Date('2027-09-01'),
      projectedReturn: 8.7,
      images: ['campus.jpg', 'library.jpg', 'labs.jpg'],
      updates: 5,
      category: 'infrastructure'
    }
  ]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'sukuk': return 'bg-blue-100 text-blue-800';
      case 'equity': return 'bg-purple-100 text-purple-800';
      case 'real_estate': return 'bg-green-100 text-green-800';
      case 'commodity': return 'bg-yellow-100 text-yellow-800';
      case 'fund': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-600';
      case 'medium': return 'text-orange-600';
      case 'high': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'fully_funded': return 'bg-blue-100 text-blue-800';
      case 'upcoming': return 'bg-yellow-100 text-yellow-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredInvestments = investments.filter(investment => {
    const matchesSearch = investment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         investment.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || investment.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
            <Building2 className="h-8 w-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Marketplace Investissements Islamiques</h2>
            <p className="text-gray-600">Sukuk, actions halal, immobilier et crowdfunding conforme Charia</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Badge className="bg-green-100 text-green-800">
            <Shield className="h-4 w-4 mr-1" />
            Certifié Charia
          </Badge>
          <Badge className="bg-blue-100 text-blue-800">
            <Star className="h-4 w-4 mr-1" />
            Premium Access
          </Badge>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {[
          { id: 'investments', label: 'Investissements', icon: TrendingUp },
          { id: 'crowdfunding', label: 'Crowdfunding', icon: Users },
          { id: 'portfolio', label: 'Mon Portfolio', icon: PieChart },
          { id: 'analytics', label: 'Analytics', icon: BarChart3 }
        ].map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? 'default' : 'ghost'}
            className={`flex-1 ${activeTab === tab.id ? 'bg-white shadow-sm' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <tab.icon className="h-4 w-4 mr-2" />
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Investments Tab */}
      {activeTab === 'investments' && (
        <div className="space-y-6">
          {/* Search and Filters */}
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Rechercher des investissements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as any)}
              className="px-4 py-2 border rounded-lg bg-white"
            >
              <option value="all">Tous types</option>
              <option value="sukuk">Sukuk</option>
              <option value="equity">Actions</option>
              <option value="real_estate">Immobilier</option>
              <option value="commodity">Matières premières</option>
            </select>
          </div>

          {/* Investment Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredInvestments.map((investment) => (
              <Card key={investment.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{investment.title}</CardTitle>
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge className={getTypeColor(investment.type)}>
                          {investment.type.replace('_', ' ').toUpperCase()}
                        </Badge>
                        <Badge className={getStatusColor(investment.status)}>
                          {investment.status.replace('_', ' ')}
                        </Badge>
                        {investment.shariahCertified && (
                          <Badge className="bg-green-100 text-green-800">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Halal
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-sm">
                        {investment.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Rendement Attendu</p>
                      <p className="text-2xl font-bold text-green-600">{investment.expectedReturn}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Investissement Min.</p>
                      <p className="text-2xl font-bold">${investment.minInvestment.toLocaleString()}</p>
                    </div>
                  </div>

                  {/* Funding Progress */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Financement</span>
                      <span>
                        ${investment.currentFunding.toLocaleString()} / ${investment.totalValue.toLocaleString()}
                      </span>
                    </div>
                    <Progress 
                      value={(investment.currentFunding / investment.totalValue) * 100} 
                      className="h-2"
                    />
                  </div>

                  {/* Additional Info */}
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Risque</p>
                      <p className={`font-semibold ${getRiskColor(investment.riskLevel)}`}>
                        {investment.riskLevel.charAt(0).toUpperCase() + investment.riskLevel.slice(1)}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">Durée</p>
                      <p className="font-semibold">{investment.duration}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Investisseurs</p>
                      <p className="font-semibold">{investment.investors}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {investment.tags.slice(0, 4).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <DollarSign className="h-4 w-4 mr-2" />
                      Investir Maintenant
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Crowdfunding Tab */}
      {activeTab === 'crowdfunding' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {crowdfundingProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <Building2 className="h-16 w-16 text-blue-600" />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Progress */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Financement</span>
                      <span className="font-semibold">
                        {Math.round((project.currentAmount / project.targetAmount) * 100)}%
                      </span>
                    </div>
                    <Progress 
                      value={(project.currentAmount / project.targetAmount) * 100} 
                      className="h-3"
                    />
                    <div className="flex justify-between text-sm mt-1">
                      <span>${project.currentAmount.toLocaleString()}</span>
                      <span className="text-gray-600">${project.targetAmount.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Key Stats */}
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="text-center">
                      <p className="font-bold text-lg">{project.investors}</p>
                      <p className="text-gray-600">Investisseurs</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-lg text-green-600">{project.projectedReturn}%</p>
                      <p className="text-gray-600">ROI Prévu</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-lg text-orange-600">{project.daysLeft}</p>
                      <p className="text-gray-600">Jours restants</p>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Localisation</span>
                      <span className="font-medium">{project.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Développeur</span>
                      <span className="font-medium">{project.developer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Livraison prévue</span>
                      <span className="font-medium">
                        {project.expectedCompletion.toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <Badge className={`${
                    project.category === 'residential' ? 'bg-green-100 text-green-800' :
                    project.category === 'commercial' ? 'bg-blue-100 text-blue-800' :
                    project.category === 'mixed_use' ? 'bg-purple-100 text-purple-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {project.category.replace('_', ' ').toUpperCase()}
                  </Badge>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700">
                      <Heart className="h-4 w-4 mr-2" />
                      Investir
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Portfolio Tab */}
      {activeTab === 'portfolio' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Valeur Portfolio</p>
                    <p className="text-2xl font-bold">$847K</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Rendement YTD</p>
                    <p className="text-2xl font-bold text-green-600">+12.7%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-600">Investissements</p>
                    <p className="text-2xl font-bold">23</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="text-sm text-gray-600">Prochains Dividendes</p>
                    <p className="text-2xl font-bold">$12.3K</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Répartition Portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Sukuk Dubai', value: 340000, percentage: 40, color: 'bg-blue-500' },
                  { name: 'Actions Halal Tech', value: 254000, percentage: 30, color: 'bg-purple-500' },
                  { name: 'Immobilier Dubai', value: 169000, percentage: 20, color: 'bg-green-500' },
                  { name: 'Or Shariah ETF', value: 84000, percentage: 10, color: 'bg-yellow-500' }
                ].map((asset, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{asset.name}</span>
                      <span className="text-gray-600">${asset.value.toLocaleString()} ({asset.percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${asset.color}`}
                        style={{ width: `${asset.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Analytics Tab */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                  Performance Annuelle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">+12.7%</p>
                  <p className="text-sm text-gray-600">vs marché +8.3%</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-blue-600" />
                  Score Shariah
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">98/100</p>
                  <p className="text-sm text-gray-600">Conformité excellente</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-600" />
                  Diversification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-3xl font-bold text-yellow-600">8.5/10</p>
                  <p className="text-sm text-gray-600">Bien diversifié</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}