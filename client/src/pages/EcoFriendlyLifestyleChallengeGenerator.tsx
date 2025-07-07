import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Leaf, Droplets, Recycle, Sun, TreePine, Shield, Award, Calendar } from 'lucide-react';

const EcoFriendlyLifestyleChallengeGenerator = () => {
  const [selectedCategory, setSelectedCategory] = useState('water');
  const [userLevel, setUserLevel] = useState(2);
  const [activeChallenges, setActiveChallenges] = useState<string[]>([]);
  const [completedChallenges, setCompletedChallenges] = useState<string[]>(['water-saving-1']);

  // Défis écologiques halal basés sur les enseignements islamiques
  const ecoCategories = {
    water: {
      title: "Conservation de l'Eau",
      icon: <Droplets className="w-6 h-6" />,
      color: "bg-blue-500",
      verse: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ",
      translation: "Nous avons fait de l'eau toute chose vivante - Sourate 21:30",
      principle: "Anti-Israf (Non-gaspillage)",
      challenges: [
        {
          id: 'water-saving-1',
          title: 'Ablutions Éco-responsables',
          description: 'Réduire consommation eau pour ablutions selon Sunna',
          difficulty: 'Facile',
          duration: '7 jours',
          impact: 'Économie 50L/semaine',
          hadith: 'Sahih Bukhari 201',
          xp: 100,
          tips: [
            'Fermer robinet entre lavages',
            'Utiliser récipient mesuré',
            'Suivre exemple prophétique (1 Mudd)'
          ]
        },
        {
          id: 'water-saving-2',
          title: 'Récupération Eau de Pluie',
          description: 'Installer système collecte eau pluie (Sadaqah Jariyah)',
          difficulty: 'Moyen',
          duration: '30 jours',
          impact: 'Économie 200L/mois',
          verse: 'Sourate 16:65',
          xp: 300,
          tips: [
            'Gouttières vers réservoirs',
            'Filtration naturelle',
            'Usage jardinage/nettoyage'
          ]
        },
        {
          id: 'water-saving-3',
          title: 'Fontaine Communautaire',
          description: 'Organiser projet fontaine publique quartier',
          difficulty: 'Difficile',
          duration: '90 jours',
          impact: 'Bénéfice 1000+ personnes',
          hadith: 'Sahih Bukhari 2449',
          xp: 800,
          tips: [
            'Coordination mairie',
            'Financement participatif',
            'Maintenance durable'
          ]
        }
      ]
    },
    energy: {
      title: "Énergies Renouvelables",
      icon: <Sun className="w-6 h-6" />,
      color: "bg-yellow-500",
      verse: "وَسَخَّرَ لَكُمُ الشَّمْسَ وَالْقَمَرَ",
      translation: "Il a mis à votre service le soleil et la lune - Sourate 14:33",
      principle: "Utilisation Responsable Ressources",
      challenges: [
        {
          id: 'solar-1',
          title: 'Panneaux Solaires Mosquée',
          description: 'Installation énergie solaire lieu de culte',
          difficulty: 'Moyen',
          duration: '60 jours',
          impact: 'Autonomie énergétique 80%',
          community: 'Projet communautaire',
          xp: 500,
          tips: [
            'Étude faisabilité',
            'Subventions disponibles',
            'Formation entretien'
          ]
        },
        {
          id: 'led-conversion',
          title: 'Conversion LED Complète',
          description: 'Remplacer toutes ampoules par LED efficaces',
          difficulty: 'Facile',
          duration: '14 jours',
          impact: 'Réduction 70% consommation',
          investment: '200-500 CHF',
          xp: 200,
          tips: [
            'Calcul ROI rapide',
            'Éclairage chaleureux',
            'Recyclage anciennes ampoules'
          ]
        },
        {
          id: 'smart-home',
          title: 'Maison Intelligente Halal',
          description: 'Automatisation éco-responsable selon horaires prières',
          difficulty: 'Difficile',
          duration: '120 jours',
          impact: 'Optimisation 40% énergie',
          tech: 'IoT + IA',
          xp: 900,
          tips: [
            'Capteurs intelligents',
            'Programmation prières',
            'Contrôle vocal halal'
          ]
        }
      ]
    },
    waste: {
      title: "Réduction Déchets",
      icon: <Recycle className="w-6 h-6" />,
      color: "bg-green-500",
      verse: "وَلَا تُبَذِّرْ تَبْذِيرًا",
      translation: "Et ne gaspille pas avec prodigalité - Sourate 17:26",
      principle: "Zero Waste Islamique",
      challenges: [
        {
          id: 'composting',
          title: 'Compostage Domestique',
          description: 'Transformer déchets organiques en engrais naturel',
          difficulty: 'Facile',
          duration: '21 jours',
          impact: 'Réduction 30% déchets',
          benefit: 'Jardinage fertile',
          xp: 150,
          tips: [
            'Bac compostage balcon',
            'Vers de terre option',
            'Matières équilibrées'
          ]
        },
        {
          id: 'plastic-free',
          title: 'Mois Sans Plastique',
          description: 'Éliminer plastique usage unique 30 jours',
          difficulty: 'Moyen',
          duration: '30 jours',
          impact: 'Zéro plastique jetable',
          alternatives: 'Matériaux naturels',
          xp: 400,
          tips: [
            'Sacs tissu réutilisables',
            'Contenants verre/métal',
            'Achats vrac priorité'
          ]
        },
        {
          id: 'repair-cafe',
          title: 'Café Réparation Communautaire',
          description: 'Organiser ateliers réparation objets cassés',
          difficulty: 'Difficile',
          duration: '90 jours',
          impact: 'Réparation 200+ objets',
          community: 'Esprit Ta\'awun',
          xp: 700,
          tips: [
            'Experts bénévoles',
            'Outils partagés',
            'Formation skills'
          ]
        }
      ]
    },
    nature: {
      title: "Protection Nature",
      icon: <TreePine className="w-6 h-6" />,
      color: "bg-emerald-500",
      verse: "وَالْأَرْضَ وَضَعَهَا لِلْأَنَامِ",
      translation: "Et la terre, Il l'a établie pour les créatures - Sourate 55:10",
      principle: "Khilafah Environnementale",
      challenges: [
        {
          id: 'tree-planting',
          title: 'Plantation Arbres (Sadaqah Jariyah)',
          description: 'Planter 10 arbres fruitiers pour communauté',
          difficulty: 'Moyen',
          duration: '45 jours',
          impact: 'Ombre & fruits décennies',
          reward: 'Récompense continue',
          xp: 600,
          tips: [
            'Espèces locales adaptées',
            'Saison plantation optimale',
            'Entretien long terme'
          ]
        },
        {
          id: 'bee-garden',
          title: 'Jardin Abeilles Halal',
          description: 'Créer espace mellifère pour pollinisateurs',
          difficulty: 'Facile',
          duration: '60 jours',
          impact: 'Biodiversité locale +',
          honey: 'Miel naturel possible',
          xp: 350,
          tips: [
            'Plantes mellifères variées',
            'Floraison étalée année',
            'Zéro pesticides'
          ]
        },
        {
          id: 'wildlife-shelter',
          title: 'Refuge Faune Urbaine',
          description: 'Aménager abris oiseaux/hérissons jardin',
          difficulty: 'Facile',
          duration: '30 jours',
          impact: 'Habitat protégé créé',
          creatures: 'Respect création Allah',
          xp: 250,
          tips: [
            'Nichoirs multi-espèces',
            'Points eau permanents',
            'Zones refuges naturelles'
          ]
        }
      ]
    }
  };

  const currentCategory = ecoCategories[selectedCategory as keyof typeof ecoCategories];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Facile': return 'bg-green-100 text-green-800';
      case 'Moyen': return 'bg-yellow-100 text-yellow-800';
      case 'Difficile': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const startChallenge = (challengeId: string) => {
    if (!activeChallenges.includes(challengeId)) {
      setActiveChallenges([...activeChallenges, challengeId]);
    }
  };

  const completeChallenge = (challengeId: string) => {
    setCompletedChallenges([...completedChallenges, challengeId]);
    setActiveChallenges(activeChallenges.filter(id => id !== challengeId));
  };

  const getProgressStats = () => {
    const totalChallenges = Object.values(ecoCategories).reduce((sum, cat) => sum + cat.challenges.length, 0);
    const completedCount = completedChallenges.length;
    const progressPercent = (completedCount / totalChallenges) * 100;
    
    return { totalChallenges, completedCount, progressPercent };
  };

  const { totalChallenges, completedCount, progressPercent } = getProgressStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            🌱 Eco-Friendly Lifestyle Challenge Generator Halal
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Défis écologiques selon les enseignements du Coran et de la Sunna
          </p>
          <p className="text-sm text-gray-500">
            "وَمَا مِن دَابَّةٍ فِي الْأَرْضِ إِلَّا عَلَى اللَّهِ رِزْقُهَا" - "Il n'y a aucun être vivant sur terre dont Allah ne pourvoie à la subsistance"
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8 bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-xl">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">{completedCount}</div>
                <div className="text-sm opacity-90">Défis Accomplis</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">{activeChallenges.length}</div>
                <div className="text-sm opacity-90">En Cours</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">{Math.round(progressPercent)}%</div>
                <div className="text-sm opacity-90">Progression Globale</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Niveau {userLevel}</div>
                <div className="text-sm opacity-90">Éco-Musulman</div>
              </div>
            </div>
            <div className="mt-4">
              <Progress value={progressPercent} className="h-3 bg-white/20" />
            </div>
          </CardContent>
        </Card>

        {/* Category Selector */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {Object.entries(ecoCategories).map(([key, category]) => (
            <Button
              key={key}
              variant={selectedCategory === key ? "default" : "outline"}
              onClick={() => setSelectedCategory(key)}
              className={`flex items-center gap-2 ${
                selectedCategory === key ? category.color + ' text-white' : ''
              }`}
            >
              {category.icon}
              {category.title}
            </Button>
          ))}
        </div>

        {/* Category Header */}
        <Card className="mb-8 bg-white shadow-lg border-2 border-emerald-200">
          <CardHeader>
            <div className="text-center">
              <div className="text-6xl mb-4">{selectedCategory === 'water' ? '💧' : selectedCategory === 'energy' ? '☀️' : selectedCategory === 'waste' ? '♻️' : '🌳'}</div>
              <CardTitle className="text-3xl text-emerald-700 mb-2">
                {currentCategory.title}
              </CardTitle>
              <div className="bg-emerald-50 p-4 rounded-lg max-w-2xl mx-auto">
                <p className="text-lg font-medium text-emerald-800 mb-2">
                  {currentCategory.verse}
                </p>
                <p className="text-sm text-emerald-600 mb-2">
                  {currentCategory.translation}
                </p>
                <Badge className="bg-emerald-100 text-emerald-800">
                  Principe: {currentCategory.principle}
                </Badge>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentCategory.challenges.map((challenge) => {
            const isCompleted = completedChallenges.includes(challenge.id);
            const isActive = activeChallenges.includes(challenge.id);
            
            return (
              <Card key={challenge.id} className={`shadow-lg border-2 transition-all duration-300 ${
                isCompleted ? 'border-green-300 bg-green-50' : 
                isActive ? 'border-blue-300 bg-blue-50' :
                'border-gray-200 bg-white hover:border-emerald-300'
              }`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getDifficultyColor(challenge.difficulty)}>
                      {challenge.difficulty}
                    </Badge>
                    <Badge className={`${currentCategory.color} text-white`}>
                      +{challenge.xp} XP
                    </Badge>
                  </div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    {isCompleted && <Shield className="w-5 h-5 text-green-500" />}
                    {isActive && <Calendar className="w-5 h-5 text-blue-500" />}
                    {challenge.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{challenge.description}</p>
                  
                  {/* Challenge Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Durée:</span>
                      <span className="font-medium">{challenge.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Impact:</span>
                      <span className="font-medium text-green-600">{challenge.impact}</span>
                    </div>
                    {(challenge as any).investment && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Investissement:</span>
                        <span className="font-medium">{(challenge as any).investment}</span>
                      </div>
                    )}
                  </div>

                  {/* Islamic Reference */}
                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="text-sm text-gray-700">
                      {challenge.hadith && (
                        <div className="flex items-center gap-2 mb-1">
                          <Award className="w-4 h-4 text-yellow-500" />
                          <span className="font-medium">Hadith:</span> {challenge.hadith}
                        </div>
                      )}
                      {(challenge as any).verse && (
                        <div className="flex items-center gap-2 mb-1">
                          <Award className="w-4 h-4 text-purple-500" />
                          <span className="font-medium">Verset:</span> {(challenge as any).verse}
                        </div>
                      )}
                      {(challenge as any).community && (
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-blue-500" />
                          <span className="font-medium">Communautaire:</span> {(challenge as any).community}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tips */}
                  <div className="mb-4">
                    <h5 className="font-medium text-sm mb-2 text-gray-700">Conseils pratiques:</h5>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {challenge.tips.map((tip, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <Button
                    onClick={() => isActive ? completeChallenge(challenge.id) : startChallenge(challenge.id)}
                    disabled={isCompleted}
                    className={`w-full ${
                      isCompleted ? 'bg-green-500 hover:bg-green-600' :
                      isActive ? 'bg-blue-500 hover:bg-blue-600' :
                      currentCategory.color + ' hover:opacity-90'
                    }`}
                  >
                    {isCompleted ? '✅ Défi Accompli - Barakallahu feek' :
                     isActive ? '🎯 Marquer comme Terminé' :
                     '🚀 Commencer le Défi'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Environmental Impact Summary */}
        <Card className="mb-8 bg-gradient-to-br from-green-400 to-emerald-500 text-white">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Leaf className="w-6 h-6" />
              Impact Environnemental Cumulé
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold mb-2">2,847</div>
                <div className="text-sm opacity-90">Litres Eau Économisés</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold mb-2">156</div>
                <div className="text-sm opacity-90">kg CO2 Évités</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold mb-2">47</div>
                <div className="text-sm opacity-90">Arbres Plantés</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold mb-2">89%</div>
                <div className="text-sm opacity-90">Déchets Recyclés</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Inspirational Quote */}
        <Card className="bg-gradient-to-r from-emerald-600 to-green-600 text-white">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-4">🌍</div>
            <p className="text-lg font-medium mb-2">
              "مَا مِنْ مُسْلِمٍ يَغْرِسُ غَرْسًا أَوْ يَزْرَعُ زَرْعًا فَيَأْكُلُ مِنْهُ طَيْرٌ أَوْ إِنْسَانٌ أَوْ بَهِيمَةٌ إِلَّا كَانَ لَهُ بِهِ صَدَقَةٌ"
            </p>
            <p className="text-sm opacity-90 mb-4">
              "Aucun musulman ne plante un arbre ou ne cultive une terre dont mangent un oiseau, 
              un être humain ou une bête, sans que cela ne lui soit compté comme une aumône" - Sahih Bukhari
            </p>
            <p className="text-xs opacity-75">
              Chaque geste écologique est une adoration et une récompense continue
            </p>
          </CardContent>
        </Card>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>© 2025 Club Empreinte Digitale - Yakoubi Yamina | CED HalalTech™</p>
          <p>Eco-Friendly Lifestyle Challenge Generator Halal - 100% Conforme Coran & Sunna</p>
        </div>
      </div>
    </div>
  );
};

export default EcoFriendlyLifestyleChallengeGenerator;