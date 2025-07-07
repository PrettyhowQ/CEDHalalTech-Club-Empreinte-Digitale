import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import ProtectionFooter from '@/components/ProtectionFooter';
import { Users, Trophy, Leaf, Target, Award, TrendingUp, Calendar, MapPin } from 'lucide-react';

interface CommunityChallenge {
  id: number;
  title: string;
  description: string;
  islamicPrinciple: string;
  targetReduction: number;
  currentReduction: number;
  participants: number;
  startDate: string;
  endDate: string;
  rewards: string[];
  category: 'transport' | 'energy' | 'waste' | 'water' | 'food';
  status: 'active' | 'completed' | 'upcoming';
}

interface Participant {
  id: number;
  name: string;
  location: string;
  carbonSaved: number;
  rank: number;
  badge: string;
  isCurrentUser?: boolean;
}

export default function DefiCarboneCommunautaire() {
  const [selectedChallenge, setSelectedChallenge] = useState<number>(1);
  const [userContribution, setUserContribution] = useState(125);
  const [communityRank, setCommunityRank] = useState(12);

  const challenges: CommunityChallenge[] = [
    {
      id: 1,
      title: "Défi Transport Vert Ramadan 2025",
      description: "Réduire collectivement 10 tonnes de CO2 en utilisant transports écologiques pendant le mois béni",
      islamicPrinciple: "Ta'awun (entraide) pour préserver la création d'Allah",
      targetReduction: 10000,
      currentReduction: 7450,
      participants: 847,
      startDate: "2025-02-28",
      endDate: "2025-03-29",
      rewards: ["Certificat CED Communautaire", "Plantation d'arbres collective", "Du'a spéciale fin Ramadan"],
      category: 'transport',
      status: 'active'
    },
    {
      id: 2,
      title: "Challenge Énergie Verte Masjid",
      description: "Mosquées participantes visant 15 tonnes CO2 évitées via énergies renouvelables",
      islamicPrinciple: "Préservation des lieux de culte avec technologies halal",
      targetReduction: 15000,
      currentReduction: 12300,
      participants: 156,
      startDate: "2025-01-01",
      endDate: "2025-06-30",
      rewards: ["Certification Masjid Vert", "Système solaire mosquée", "Reconnaissance scholars"],
      category: 'energy',
      status: 'active'
    },
    {
      id: 3,
      title: "Zéro Déchet Familial Islamique",
      description: "1000 familles musulmanes zéro déchet = 25 tonnes CO2 économisées",
      islamicPrinciple: "Application familiale du principe anti-Israf",
      targetReduction: 25000,
      currentReduction: 18750,
      participants: 2341,
      startDate: "2025-01-15",
      endDate: "2025-07-15",
      rewards: ["Guide Famille Écologique", "Kit zéro déchet halal", "Certification CED Famille"],
      category: 'waste',
      status: 'active'
    },
    {
      id: 4,
      title: "Économie d'Eau Communautaire",
      description: "Défi été 2025 : économiser collectivement 1 million de litres d'eau",
      islamicPrinciple: "Préservation de l'eau selon la Sunna prophétique",
      targetReduction: 5000,
      currentReduction: 0,
      participants: 0,
      startDate: "2025-06-01",
      endDate: "2025-08-31",
      rewards: ["Puits en Afrique", "Système récupération eau", "Hadith eau encadré"],
      category: 'water',
      status: 'upcoming'
    }
  ];

  const topParticipants: Participant[] = [
    {
      id: 1,
      name: "Fatima Al-Zahra",
      location: "Genève, Suisse",
      carbonSaved: 450,
      rank: 1,
      badge: "🥇 Champion Carbone"
    },
    {
      id: 2,
      name: "Ahmed Ibn Omar",
      location: "Lyon, France",
      carbonSaved: 380,
      rank: 2,
      badge: "🥈 Gardien Vert"
    },
    {
      id: 3,
      name: "Aisha Bint Said",
      location: "Bruxelles, Belgique",
      carbonSaved: 340,
      rank: 3,
      badge: "🥉 Protecteur Nature"
    },
    {
      id: 12,
      name: "Vous",
      location: "Votre ville",
      carbonSaved: 125,
      rank: 12,
      badge: "🌱 Éco-Musulman",
      isCurrentUser: true
    }
  ];

  const currentChallenge = challenges.find(c => c.id === selectedChallenge) || challenges[0];
  const progressPercentage = (currentChallenge.currentReduction / currentChallenge.targetReduction) * 100;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'transport': return '🚲';
      case 'energy': return '⚡';
      case 'waste': return '♻️';
      case 'water': return '💧';
      case 'food': return '🌾';
      default: return '🌱';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'upcoming': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const calculateDaysRemaining = (endDate: string) => {
    const end = new Date(endDate);
    const now = new Date();
    const diffTime = end.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <Card className="mb-8 border-green-500 border-2 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <CardTitle className="text-3xl text-center flex items-center justify-center gap-3">
              <Users className="h-10 w-10" />
              Défi Carbone Communautaire Islamique
              <Trophy className="h-10 w-10" />
            </CardTitle>
            <div className="text-center mt-4">
              <p className="text-green-100 text-lg">
                Ta'awun (Entraide) pour Réduire l'Empreinte Carbone • Préservation Collective de la Création d'Allah
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <Badge className="bg-white text-green-600 px-4 py-2">
                  {challenges.filter(c => c.status === 'active').length} Défis Actifs
                </Badge>
                <Badge className="bg-yellow-500 text-yellow-900 px-4 py-2">
                  {challenges.reduce((sum, c) => sum + c.participants, 0)} Participants Total
                </Badge>
                <Badge className="bg-blue-500 text-blue-100 px-4 py-2">
                  Votre Rang: #{communityRank}
                </Badge>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Liste des Défis Communautaires */}
          <div className="lg:col-span-2">
            <Card className="border-emerald-500 border-2 mb-6">
              <CardHeader className="bg-gradient-to-r from-emerald-600 to-green-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6" />
                  Défis Communautaires Actifs
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {challenges.map((challenge) => (
                    <Card key={challenge.id} className={`border-2 cursor-pointer transition-all ${
                      selectedChallenge === challenge.id 
                        ? 'border-green-400 bg-green-50 shadow-lg' 
                        : 'border-gray-200 hover:border-green-300'
                    }`} onClick={() => setSelectedChallenge(challenge.id)}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-2xl">{getCategoryIcon(challenge.category)}</span>
                              <h3 className="font-bold text-gray-800">{challenge.title}</h3>
                              <Badge className={getStatusColor(challenge.status)}>
                                {challenge.status === 'active' && 'Actif'}
                                {challenge.status === 'completed' && 'Complété'}
                                {challenge.status === 'upcoming' && 'À venir'}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
                            
                            {/* Principe Islamique */}
                            <div className="bg-blue-50 p-3 rounded-lg mb-3">
                              <p className="text-sm text-blue-800">
                                <strong>🕌 Principe Islamique:</strong> {challenge.islamicPrinciple}
                              </p>
                            </div>

                            {/* Progrès */}
                            {challenge.status === 'active' && (
                              <div className="mb-3">
                                <div className="flex justify-between text-sm mb-2">
                                  <span>Progrès: {challenge.currentReduction} kg CO2</span>
                                  <span>Objectif: {challenge.targetReduction} kg CO2</span>
                                </div>
                                <Progress value={(challenge.currentReduction / challenge.targetReduction) * 100} className="h-3" />
                                <p className="text-xs text-gray-500 mt-1">
                                  {Math.round((challenge.currentReduction / challenge.targetReduction) * 100)}% atteint
                                </p>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4 text-gray-500" />
                              <span className="text-sm">{challenge.participants} participants</span>
                            </div>
                            {challenge.status === 'active' && (
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">{calculateDaysRemaining(challenge.endDate)} jours restants</span>
                              </div>
                            )}
                          </div>
                          
                          {challenge.status === 'active' && (
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Participer
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Détails du Défi Sélectionné */}
            <Card className="border-blue-500 border-2">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6" />
                  Détails: {currentChallenge.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Informations Générales */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">📋 Informations</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Début:</span>
                        <span>{new Date(currentChallenge.startDate).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fin:</span>
                        <span>{new Date(currentChallenge.endDate).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Participants:</span>
                        <span>{currentChallenge.participants}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Catégorie:</span>
                        <span>{getCategoryIcon(currentChallenge.category)} {currentChallenge.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Récompenses */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">🎁 Récompenses</h3>
                    <div className="space-y-2">
                      {currentChallenge.rewards.map((reward, index) => (
                        <div key={index} className="bg-yellow-50 p-2 rounded-lg">
                          <p className="text-sm text-yellow-800">✨ {reward}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Impact Collectif */}
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">🌍 Impact Collectif Prévu</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-green-700">CO2 Évité: <strong>{currentChallenge.targetReduction} kg</strong></p>
                    </div>
                    <div>
                      <p className="text-green-700">Équivalent: <strong>{Math.round(currentChallenge.targetReduction / 2300)} voitures en moins/an</strong></p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Classement et Profil */}
          <div>
            
            {/* Votre Contribution */}
            <Card className="border-purple-500 border-2 mb-6">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6" />
                  Votre Contribution
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-purple-600 mb-2">{userContribution} kg</div>
                  <p className="text-sm text-gray-600">CO2 économisé ce mois</p>
                </div>

                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-1">🚲 Transport Vert</h4>
                    <p className="text-sm text-purple-700">75 kg CO2 évités</p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-1">⚡ Énergie</h4>
                    <p className="text-sm text-green-700">30 kg CO2 évités</p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-1">♻️ Recyclage</h4>
                    <p className="text-sm text-blue-700">20 kg CO2 évités</p>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                  Ajouter Nouvelle Action
                </Button>
              </CardContent>
            </Card>

            {/* Classement Top Participants */}
            <Card className="border-yellow-500 border-2">
              <CardHeader className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-6 w-6" />
                  Top Participants
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  {topParticipants.map((participant) => (
                    <Card key={participant.id} className={`border ${
                      participant.isCurrentUser ? 'border-purple-300 bg-purple-50' : 'border-gray-200'
                    }`}>
                      <CardContent className="p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-lg">#{participant.rank}</span>
                              <div>
                                <p className="font-semibold text-sm">{participant.name}</p>
                                <p className="text-xs text-gray-600 flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  {participant.location}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-green-600">{participant.carbonSaved} kg</p>
                            <p className="text-xs text-gray-500">{participant.badge}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                  <p className="text-center text-yellow-800 text-sm">
                    <strong>🏆 Récompense Communautaire:</strong><br />
                    Top 10 = Certificat spécial + Du'a collective
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <ProtectionFooter />
    </div>
  );
}