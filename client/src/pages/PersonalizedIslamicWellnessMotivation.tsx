import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PersonalizedIslamicWellnessMotivation = () => {
  const [currentMotivation, setCurrentMotivation] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState("spiritual");
  const [selectedMood, setSelectedMood] = useState("normal");
  const [dailyStreak, setDailyStreak] = useState(7);
  const [totalPoints, setTotalPoints] = useState(1247);
  const [completedToday, setCompletedToday] = useState<string[]>([]);

  const motivationCategories = [
    {
      id: "spiritual",
      name: "🌙 Spirituel",
      color: "from-blue-500 to-indigo-600",
      description: "Rappels Coran, Hadith et Dhikr"
    },
    {
      id: "health",
      name: "💚 Santé",
      color: "from-green-500 to-emerald-600",
      description: "Bien-être selon la médecine prophétique"
    },
    {
      id: "productivity",
      name: "⚡ Productivité",
      color: "from-orange-500 to-red-600",
      description: "Excellence et Itqan dans le travail"
    },
    {
      id: "community",
      name: "🤝 Communauté",
      color: "from-purple-500 to-pink-600",
      description: "Ta'awun et service à l'Ummah"
    }
  ];

  const moodStates = [
    { id: "energetic", name: "Énergique", icon: "⚡", color: "text-orange-600" },
    { id: "peaceful", name: "Paisible", icon: "🌙", color: "text-blue-600" },
    { id: "motivated", name: "Motivé", icon: "🔥", color: "text-red-600" },
    { id: "contemplative", name: "Contemplatif", icon: "🤲", color: "text-purple-600" },
    { id: "grateful", name: "Reconnaissant", icon: "❤️", color: "text-pink-600" },
    { id: "normal", name: "Normal", icon: "😌", color: "text-gray-600" }
  ];

  const motivationDatabase = {
    spiritual: {
      energetic: [
        {
          type: "verse",
          arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
          translation: "Et quiconque craint Allah, Il lui donnera une issue favorable",
          reference: "At-Talaq 65:2",
          action: "Réciter 10 fois SubhanAllah",
          points: 25
        },
        {
          type: "hadith",
          arabic: "أَحَبُّ الْعَمَلِ إِلَى اللَّهِ أَدْوَمُهُ وَإِنْ قَلَّ",
          translation: "L'acte le plus aimé d'Allah est le plus constant, même s'il est petit",
          reference: "Sahih Bukhari",
          action: "Établir une routine spirituelle quotidienne",
          points: 30
        }
      ],
      peaceful: [
        {
          type: "dhikr",
          arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
          translation: "Il n'y a de divinité qu'Allah, Unique, sans associé",
          reference: "Dhikr du soir",
          action: "Méditation 5 minutes avec ce dhikr",
          points: 20
        }
      ],
      contemplative: [
        {
          type: "reflection",
          arabic: "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ",
          translation: "En vérité, dans la création des cieux et de la terre, et dans l'alternance de la nuit et du jour, il y a certes des signes pour les doués d'intelligence",
          reference: "Al-Imran 3:190",
          action: "Contempler la création 10 minutes",
          points: 35
        }
      ]
    },
    health: {
      energetic: [
        {
          type: "prophetic_medicine",
          content: "Utilisez le miel comme remède naturel",
          arabic: "فِيهِ شِفَاءٌ لِلنَّاسِ",
          translation: "Il y a en lui une guérison pour les gens",
          reference: "An-Nahl 16:69",
          action: "Prendre une cuillère de miel à jeun",
          points: 15
        }
      ],
      normal: [
        {
          type: "sunnah_habit",
          content: "Manger avec modération selon la Sunna",
          arabic: "ثُلُثٌ لِطَعَامِهِ وَثُلُثٌ لِشَرَابِهِ وَثُلُثٌ لِنَفَسِهِ",
          translation: "Un tiers pour sa nourriture, un tiers pour sa boisson, et un tiers pour respirer",
          reference: "Hadith At-Tirmidhi",
          action: "Appliquer la règle du tiers aujourd'hui",
          points: 25
        }
      ]
    },
    productivity: {
      motivated: [
        {
          type: "excellence",
          arabic: "إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ",
          translation: "Allah aime que lorsque l'un de vous fait un travail, il le fasse avec excellence",
          reference: "Hadith rapporté par At-Tabarani",
          action: "Choisir une tâche et l'accomplir avec Itqan",
          points: 40
        }
      ],
      energetic: [
        {
          type: "barakah_time",
          content: "Commencer tôt bénit le travail",
          arabic: "اللَّهُمَّ بَارِكْ لِأُمَّتِي فِي بُكُورِهَا",
          translation: "Ô Allah, bénis ma communauté dans son lever matinal",
          reference: "Hadith Abu Dawud",
          action: "Commencer une tâche importante avant 9h",
          points: 30
        }
      ]
    },
    community: {
      grateful: [
        {
          type: "service",
          content: "Aider un frère/sœur en Islam",
          arabic: "مَن كَانَ فِي حَاجَةِ أَخِيهِ كَانَ اللَّهُ فِي حَاجَتِهِ",
          translation: "Celui qui aide son frère, Allah l'aide",
          reference: "Sahih Bukhari",
          action: "Faire un acte de service aujourd'hui",
          points: 50
        }
      ]
    }
  };

  const generateMotivation = () => {
    const categoryData = motivationDatabase[selectedCategory as keyof typeof motivationDatabase];
    if (!categoryData) return;

    const moodData = categoryData[selectedMood as keyof typeof categoryData];
    if (!moodData || moodData.length === 0) {
      // Fallback vers une catégorie par défaut
      const fallbackData = Object.values(categoryData)[0];
      if (fallbackData && fallbackData.length > 0) {
        const randomIndex = Math.floor(Math.random() * fallbackData.length);
        setCurrentMotivation(fallbackData[randomIndex]);
      }
    } else {
      const randomIndex = Math.floor(Math.random() * moodData.length);
      setCurrentMotivation(moodData[randomIndex]);
    }
  };

  const completeAction = () => {
    if (currentMotivation && !completedToday.includes(currentMotivation.action)) {
      setCompletedToday([...completedToday, currentMotivation.action]);
      setTotalPoints(totalPoints + currentMotivation.points);
      
      // Animation de célébration
      const celebration = document.createElement('div');
      celebration.innerHTML = '🎉 +' + currentMotivation.points + ' points!';
      celebration.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #10B981, #059669);
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        font-weight: bold;
        z-index: 1000;
        animation: fadeInOut 2s ease-in-out;
      `;
      
      document.body.appendChild(celebration);
      setTimeout(() => document.body.removeChild(celebration), 2000);
    }
  };

  const getStreakColor = () => {
    if (dailyStreak >= 30) return "from-amber-500 to-yellow-600";
    if (dailyStreak >= 14) return "from-emerald-500 to-green-600";
    if (dailyStreak >= 7) return "from-blue-500 to-indigo-600";
    return "from-gray-500 to-slate-600";
  };

  useEffect(() => {
    generateMotivation();
  }, [selectedCategory, selectedMood]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            ✨ Motivation Spirituelle Personnalisée
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Guidance quotidienne selon Coran, Sunna et votre état spirituel
          </p>
        </div>

        {/* Statistiques Personnelles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{dailyStreak}</div>
              <div className="text-blue-700 font-semibold">Jours Consécutifs</div>
              <Badge className={`mt-2 bg-gradient-to-r ${getStreakColor()} text-white`}>
                {dailyStreak >= 30 ? "🏆 Maîtrise" : 
                 dailyStreak >= 14 ? "🔥 Expert" :
                 dailyStreak >= 7 ? "⭐ Régulier" : "🌱 Débutant"}
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">{totalPoints}</div>
              <div className="text-emerald-700 font-semibold">Points Barakah</div>
              <div className="text-sm text-emerald-600 mt-1">
                Actions spirituelles accomplies
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{completedToday.length}</div>
              <div className="text-purple-700 font-semibold">Actions Aujourd'hui</div>
              <div className="text-sm text-purple-600 mt-1">
                Objectif: 5 actions/jour
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Configuration Personnalisée */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">🎯 Catégorie de Motivation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {motivationCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className={`p-4 h-auto text-center ${
                      selectedCategory === category.id 
                        ? `bg-gradient-to-r ${category.color} text-white` 
                        : ''
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div>
                      <div className="text-lg mb-1">{category.name}</div>
                      <div className="text-xs opacity-80">{category.description}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">😌 État Spirituel Actuel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2">
                {moodStates.map((mood) => (
                  <Button
                    key={mood.id}
                    variant={selectedMood === mood.id ? "default" : "outline"}
                    className={`p-3 text-center ${
                      selectedMood === mood.id ? 'bg-indigo-500 text-white' : ''
                    }`}
                    onClick={() => setSelectedMood(mood.id)}
                  >
                    <div>
                      <div className="text-xl">{mood.icon}</div>
                      <div className="text-xs">{mood.name}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Motivation Actuelle */}
        {currentMotivation && (
          <Card className="mb-8 border-2 border-indigo-200 bg-gradient-to-br from-white to-indigo-50">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="text-3xl text-center">
                🌟 Votre Motivation du Moment
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {/* Contenu Islamique */}
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <div className="text-arabic text-2xl font-bold text-blue-800 text-right mb-4 leading-relaxed">
                  {currentMotivation.arabic}
                </div>
                <div className="text-lg text-blue-700 italic mb-3">
                  "{currentMotivation.translation}"
                </div>
                <Badge className="bg-blue-100 text-blue-800">
                  📖 {currentMotivation.reference}
                </Badge>
              </div>

              {/* Action Recommandée */}
              <div className="bg-emerald-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-emerald-800 mb-3">
                  🎯 Action Recommandée:
                </h3>
                <p className="text-lg text-emerald-700 mb-4">
                  {currentMotivation.action}
                </p>
                
                <div className="flex items-center justify-between">
                  <Badge className="bg-emerald-100 text-emerald-800 text-lg px-4 py-2">
                    +{currentMotivation.points} points Barakah
                  </Badge>
                  
                  <Button
                    onClick={completeAction}
                    disabled={completedToday.includes(currentMotivation.action)}
                    className={`px-6 py-3 text-lg ${
                      completedToday.includes(currentMotivation.action)
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700'
                    }`}
                  >
                    {completedToday.includes(currentMotivation.action) ? 
                      "✅ Accompli" : "🚀 Accomplir"
                    }
                  </Button>
                </div>
              </div>

              {/* Nouvelle Motivation */}
              <div className="text-center">
                <Button
                  onClick={generateMotivation}
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-8 py-3 text-lg"
                >
                  🔄 Nouvelle Motivation
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Actions Complétées Aujourd'hui */}
        {completedToday.length > 0 && (
          <Card className="mb-8 bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200">
            <CardHeader>
              <CardTitle className="text-center text-emerald-800">
                ✅ Actions Accomplies Aujourd'hui
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {completedToday.map((action, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg border-l-4 border-emerald-500">
                    <div className="text-emerald-700">{action}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <Progress 
                  value={(completedToday.length / 5) * 100} 
                  className="h-3 bg-emerald-200"
                />
                <div className="text-sm text-emerald-600 mt-1">
                  {completedToday.length}/5 actions quotidiennes
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Citation Spirituelle */}
        <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
          <CardContent className="p-6 text-center">
            <div className="text-2xl text-amber-800 font-bold mb-4">
              💫 Rappel Spirituel
            </div>
            <div className="text-arabic text-xl font-bold text-amber-700 mb-3">
              وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ
            </div>
            <div className="text-lg text-amber-700 italic mb-2">
              "Et quiconque place sa confiance en Allah, alors Il lui suffit"
            </div>
            <div className="text-sm text-amber-600">
              - Sourate At-Talaq 65:3
            </div>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
      `}</style>
    </div>
  );
};

export default PersonalizedIslamicWellnessMotivation;