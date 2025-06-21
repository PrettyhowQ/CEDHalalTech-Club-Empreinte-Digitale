import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { 
  Building, 
  Heart, 
  MapPin, 
  Users, 
  TrendingUp,
  Home,
  DollarSign,
  Globe
} from 'lucide-react';

interface DonationProject {
  id: string;
  name: string;
  location: string;
  targetAmount: number;
  currentAmount: number;
  donorsCount: number;
  housingUnits: number;
  completedUnits: number;
  startDate: Date;
  estimatedCompletion: Date;
}

export function DubaiDonationSystem() {
  const [projects] = useState<DonationProject[]>([
    {
      id: '1',
      name: 'Résidence Al-Noor',
      location: 'Dubai South, UAE',
      targetAmount: 2500000,
      currentAmount: 1847000,
      donorsCount: 156,
      housingUnits: 45,
      completedUnits: 28,
      startDate: new Date('2024-06-15'),
      estimatedCompletion: new Date('2025-12-31')
    },
    {
      id: '2',
      name: 'Complex Al-Barakah',
      location: 'Dubai Investment Park',
      targetAmount: 1800000,
      currentAmount: 920000,
      donorsCount: 89,
      housingUnits: 32,
      completedUnits: 12,
      startDate: new Date('2024-09-01'),
      estimatedCompletion: new Date('2026-03-15')
    }
  ]);

  const totalInvested = projects.reduce((sum, project) => sum + project.currentAmount, 0);
  const totalTarget = projects.reduce((sum, project) => sum + project.targetAmount, 0);
  const totalDonors = projects.reduce((sum, project) => sum + project.donorsCount, 0);
  const totalUnits = projects.reduce((sum, project) => sum + project.housingUnits, 0);

  return (
    <div className="space-y-6">
      {/* Vue d'ensemble */}
      <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <Building className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-800">Programme Logement Dubaï</h3>
              <p className="text-sm text-blue-600">Investissement immobilier via dons philanthropiques</p>
            </div>
            <div className="ml-auto">
              <Badge className="bg-blue-500 text-white">🇦🇪 Dubai Hub</Badge>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
              <DollarSign className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-green-600">
                {(totalInvested / 1000000).toFixed(1)}M
              </div>
              <div className="text-sm text-gray-600">AED Investis</div>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
              <Heart className="h-8 w-8 mx-auto mb-2 text-red-500" />
              <div className="text-2xl font-bold text-red-500">{totalDonors}</div>
              <div className="text-sm text-gray-600">Donateurs</div>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
              <Home className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-purple-600">{totalUnits}</div>
              <div className="text-sm text-gray-600">Logements</div>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-blue-600">
                {((totalInvested / totalTarget) * 100).toFixed(0)}%
              </div>
              <div className="text-sm text-gray-600">Progression</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projets individuels */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <MapPin className="h-5 w-5 text-blue-600" />
          Projets Immobiliers Actifs
        </h3>
        
        {projects.map((project) => {
          const progressPercentage = (project.currentAmount / project.targetAmount) * 100;
          const housingProgress = (project.completedUnits / project.housingUnits) * 100;
          
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <Building className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold">{project.name}</h4>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {project.location}
                        </p>
                      </div>
                    </div>
                    <Badge 
                      className={`${progressPercentage >= 100 ? 'bg-green-500' : progressPercentage >= 50 ? 'bg-blue-500' : 'bg-orange-500'} text-white`}
                    >
                      {progressPercentage >= 100 ? 'Financé' : 'En cours'}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Financement */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Financement</span>
                        <span>{progressPercentage.toFixed(1)}%</span>
                      </div>
                      <Progress value={progressPercentage} className="h-2" />
                      <div className="flex justify-between text-sm text-gray-600 mt-1">
                        <span>{(project.currentAmount / 1000000).toFixed(1)}M AED</span>
                        <span>{(project.targetAmount / 1000000).toFixed(1)}M AED</span>
                      </div>
                    </div>

                    {/* Construction */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Construction</span>
                        <span>{housingProgress.toFixed(1)}%</span>
                      </div>
                      <Progress value={housingProgress} className="h-2" />
                      <div className="flex justify-between text-sm text-gray-600 mt-1">
                        <span>{project.completedUnits} unités terminées</span>
                        <span>{project.housingUnits} unités total</span>
                      </div>
                    </div>

                    {/* Métriques */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                      <div className="text-center">
                        <div className="font-bold text-blue-600">{project.donorsCount}</div>
                        <div className="text-xs text-gray-600">Donateurs</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-green-600">
                          {((project.currentAmount / project.donorsCount) / 1000).toFixed(0)}K
                        </div>
                        <div className="text-xs text-gray-600">Don moyen</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-purple-600">
                          {Math.ceil((project.estimatedCompletion.getTime() - Date.now()) / (1000 * 60 * 60 * 24 * 30))}
                        </div>
                        <div className="text-xs text-gray-600">Mois restants</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Impact social */}
      <Card className="border-2 border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <Users className="h-6 w-6" />
            Impact Social & Retour Investissement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-bold text-green-700">Bénéficiaires</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Familles logées:</span>
                  <span className="font-medium">40 familles</span>
                </div>
                <div className="flex justify-between">
                  <span>Personnes bénéficiaires:</span>
                  <span className="font-medium">156 personnes</span>
                </div>
                <div className="flex justify-between">
                  <span>Loyer moyen réduit:</span>
                  <span className="font-medium">-60%</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-bold text-green-700">Retour Donateurs</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Plus-value immobilière:</span>
                  <span className="font-medium text-green-600">+12% annuel</span>
                </div>
                <div className="flex justify-between">
                  <span>Revenus locatifs:</span>
                  <span className="font-medium text-green-600">4.8% annuel</span>
                </div>
                <div className="flex justify-between">
                  <span>Impact social:</span>
                  <span className="font-medium text-blue-600">Inestimable</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white rounded-lg border border-green-200">
            <p className="text-sm text-green-700">
              <strong>Principe CED Bank:</strong> Les dons sont investis dans l'immobilier de qualité à Dubaï. 
              Les revenus locatifs permettent de proposer des logements à prix réduits aux familles nécessiteuses, 
              créant un cycle vertueux d'aide sociale durable.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}