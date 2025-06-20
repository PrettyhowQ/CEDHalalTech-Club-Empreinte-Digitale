import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, Calculator, Target, Coins, Users, BookOpen, Building2 } from 'lucide-react';

interface RevenueData {
  year: string;
  formations: number;
  expertComptable: number;
  informatique: number;
  consulting: number;
  certifications: number;
  total: number;
}

interface NewFormation {
  id: string;
  title: string;
  category: string;
  launchDate: string;
  monthlyRevenue: number;
  maxCapacity: number;
  currentEnrollments: number;
  price: number;
}

export function RevenueForecasting() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [newFormations] = useState<NewFormation[]>([
    {
      id: 'expert-comptable',
      title: 'Expert-Comptable Digital',
      category: 'Comptabilité & Finance',
      launchDate: '2025-03-01',
      monthlyRevenue: 285000,
      maxCapacity: 500,
      currentEnrollments: 0,
      price: 2850
    },
    {
      id: 'informatique-entreprise',
      title: 'Expert Informatique Entreprise',
      category: 'Informatique & Systèmes',
      launchDate: '2025-04-01',
      monthlyRevenue: 195000,
      maxCapacity: 300,
      currentEnrollments: 0,
      price: 1950
    },
    {
      id: 'ai-responsible-expert',
      title: 'Expert IA Responsable Certifié',
      category: 'Intelligence Artificielle',
      launchDate: '2025-05-01',
      monthlyRevenue: 350000,
      maxCapacity: 200,
      currentEnrollments: 0,
      price: 3500
    },
    {
      id: 'cybersecurity-specialist',
      title: 'Spécialiste Cybersécurité',
      category: 'Sécurité Informatique',
      launchDate: '2025-06-01',
      monthlyRevenue: 275000,
      maxCapacity: 250,
      currentEnrollments: 0,
      price: 2750
    }
  ]);

  const forecastData: RevenueData[] = [
    {
      year: '2025',
      formations: 2980000,
      expertComptable: 2565000,
      informatique: 1755000,
      consulting: 850000,
      certifications: 420000,
      total: 8570000
    },
    {
      year: '2026',
      formations: 4270000,
      expertComptable: 3420000,
      informatique: 2340000,
      consulting: 1275000,
      certifications: 630000,
      total: 11935000
    },
    {
      year: '2027',
      formations: 5850000,
      expertComptable: 4560000,
      informatique: 3120000,
      consulting: 1785000,
      certifications: 890000,
      total: 16205000
    },
    {
      year: '2028',
      formations: 7650000,
      expertComptable: 5985000,
      informatique: 4095000,
      consulting: 2380000,
      certifications: 1190000,
      total: 21300000
    },
    {
      year: '2029',
      formations: 9800000,
      expertComptable: 7650000,
      informatique: 5265000,
      consulting: 3150000,
      certifications: 1575000,
      total: 27440000
    }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const getGrowthRate = (current: number, previous: number) => {
    return previous > 0 ? ((current - previous) / previous * 100).toFixed(1) : '0';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <TrendingUp className="h-8 w-8 text-green-600" />
            Prévisionnel Chiffre d'Affaires 2025-2029
          </CardTitle>
          <p className="text-gray-600">
            Projections financières pour Club Empreinte Digitale avec nouvelles formations
          </p>
        </CardHeader>
      </Card>

      {/* Graphique principal */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-blue-600" />
            Évolution du Chiffre d'Affaires par Secteur
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={forecastData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M€`} />
                <Tooltip 
                  formatter={(value: number) => [formatCurrency(value), '']}
                  labelFormatter={(label) => `Année ${label}`}
                />
                <Legend />
                <Line type="monotone" dataKey="formations" stroke="#8884d8" strokeWidth={3} name="Formations Existantes" />
                <Line type="monotone" dataKey="expertComptable" stroke="#82ca9d" strokeWidth={3} name="Expert-Comptable" />
                <Line type="monotone" dataKey="informatique" stroke="#ffc658" strokeWidth={3} name="Informatique" />
                <Line type="monotone" dataKey="consulting" stroke="#ff7300" strokeWidth={3} name="Consulting" />
                <Line type="monotone" dataKey="certifications" stroke="#0088fe" strokeWidth={3} name="Certifications" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Métriques clés */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">CA Total 2025</p>
                <p className="text-2xl font-bold text-green-600">{formatCurrency(8570000)}</p>
                <p className="text-xs text-green-500">+187% vs 2024</p>
              </div>
              <Target className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">CA Total 2029</p>
                <p className="text-2xl font-bold text-blue-600">{formatCurrency(27440000)}</p>
                <p className="text-xs text-blue-500">+220% vs 2025</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Apprenants 2025</p>
                <p className="text-2xl font-bold text-purple-600">45,500</p>
                <p className="text-xs text-purple-500">+33% vs 2024</p>
              </div>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Marge Brute</p>
                <p className="text-2xl font-bold text-orange-600">78%</p>
                <p className="text-xs text-orange-500">+5% vs 2024</p>
              </div>
              <Coins className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Nouvelles formations à venir */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-indigo-600" />
            Nouvelles Formations à Venir - 2025
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {newFormations.map((formation) => (
              <Card key={formation.id} className="border border-gray-200 hover:border-indigo-300 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{formation.title}</h3>
                      <p className="text-sm text-gray-600">{formation.category}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {new Date(formation.launchDate).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Prix formation :</span>
                      <span className="font-medium">{formatCurrency(formation.price)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">CA mensuel prévu :</span>
                      <span className="font-medium text-green-600">{formatCurrency(formation.monthlyRevenue)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Capacité max :</span>
                      <span className="font-medium">{formation.maxCapacity} apprenants</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 p-2 bg-blue-50 rounded">
                    <p className="text-xs text-blue-700">
                      <Building2 className="h-3 w-3 inline mr-1" />
                      Formation adaptée aux besoins en entreprise
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tableau détaillé */}
      <Card>
        <CardHeader>
          <CardTitle>Détail Prévisionnel par Année</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Année</th>
                  <th className="text-right p-2">Formations</th>
                  <th className="text-right p-2">Expert-Comptable</th>
                  <th className="text-right p-2">Informatique</th>
                  <th className="text-right p-2">Consulting</th>
                  <th className="text-right p-2">Certifications</th>
                  <th className="text-right p-2 font-bold">Total</th>
                  <th className="text-right p-2">Croissance</th>
                </tr>
              </thead>
              <tbody>
                {forecastData.map((data, index) => (
                  <tr key={data.year} className="border-b hover:bg-gray-50">
                    <td className="p-2 font-medium">{data.year}</td>
                    <td className="p-2 text-right">{formatCurrency(data.formations)}</td>
                    <td className="p-2 text-right">{formatCurrency(data.expertComptable)}</td>
                    <td className="p-2 text-right">{formatCurrency(data.informatique)}</td>
                    <td className="p-2 text-right">{formatCurrency(data.consulting)}</td>
                    <td className="p-2 text-right">{formatCurrency(data.certifications)}</td>
                    <td className="p-2 text-right font-bold text-green-600">{formatCurrency(data.total)}</td>
                    <td className="p-2 text-right">
                      {index > 0 && (
                        <Badge variant="outline" className="text-green-600">
                          +{getGrowthRate(data.total, forecastData[index - 1].total)}%
                        </Badge>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}