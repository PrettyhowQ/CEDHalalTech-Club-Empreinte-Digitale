import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, TrendingUp, Heart, Smile } from 'lucide-react';

const InclusiveEmojiMoodTracker = () => {
  const [currentMood, setCurrentMood] = useState('');
  const [moodHistory, setMoodHistory] = useState<Array<{
    date: string;
    mood: string;
    emoji: string;
    spiritualNote?: string;
    gratitude?: string;
  }>>([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  // Emojis inclusifs pour différentes humeurs spirituelles
  const moodCategories = {
    spiritual: {
      title: "États Spirituels",
      color: "bg-purple-500",
      moods: [
        { id: 'peaceful', emoji: '🕊️', label: 'Paisible', description: 'Paix intérieure (Sakina)' },
        { id: 'grateful', emoji: '🤲', label: 'Reconnaissant', description: 'Alhamdulillah pour tout' },
        { id: 'hopeful', emoji: '🌅', label: 'Plein d\'espoir', description: 'Confiance en Allah' },
        { id: 'contemplative', emoji: '🤔', label: 'Contemplatif', description: 'Réflexion profonde' },
        { id: 'blessed', emoji: '✨', label: 'Béni', description: 'Sentiment de baraka' },
        { id: 'seeking', emoji: '🔍', label: 'En quête', description: 'Recherche spirituelle' }
      ]
    },
    emotional: {
      title: "États Émotionnels",
      color: "bg-pink-500",
      moods: [
        { id: 'joyful', emoji: '😊', label: 'Joyeux', description: 'Joie pure du cœur' },
        { id: 'calm', emoji: '😌', label: 'Calme', description: 'Sérénité intérieure' },
        { id: 'content', emoji: '😇', label: 'Satisfait', description: 'Contentement (Qana\'a)' },
        { id: 'loving', emoji: '💚', label: 'Aimant', description: 'Amour fi Allah' },
        { id: 'thoughtful', emoji: '🤗', label: 'Bienveillant', description: 'Compassion active' },
        { id: 'determined', emoji: '💪', label: 'Déterminé', description: 'Volonté forte' }
      ]
    },
    challenging: {
      title: "Moments Difficiles",
      color: "bg-orange-500",
      moods: [
        { id: 'patient', emoji: '⏳', label: 'Patient', description: 'Sabr dans l\'épreuve' },
        { id: 'resilient', emoji: '🌱', label: 'Résilient', description: 'Force dans la difficulté' },
        { id: 'seeking-help', emoji: '🤲', label: 'Cherche aide', description: 'Se tourner vers Allah' },
        { id: 'learning', emoji: '📚', label: 'Apprenant', description: 'Tirer des leçons' },
        { id: 'hopeful-future', emoji: '🌈', label: 'Espoir futur', description: 'Après la difficulté, facilité' },
        { id: 'trusting', emoji: '🛡️', label: 'Confiant', description: 'Tawakkul complet' }
      ]
    },
    energetic: {
      title: "États Énergétiques",
      color: "bg-yellow-500",
      moods: [
        { id: 'motivated', emoji: '🚀', label: 'Motivé', description: 'Élan pour le bien' },
        { id: 'enthusiastic', emoji: '🔥', label: 'Enthousiaste', description: 'Passion positive' },
        { id: 'productive', emoji: '⚡', label: 'Productif', description: 'Actif dans l\'obéissance' },
        { id: 'creative', emoji: '🎨', label: 'Créatif', description: 'Innovation halal' },
        { id: 'social', emoji: '👥', label: 'Social', description: 'Connexion communautaire' },
        { id: 'generous', emoji: '🎁', label: 'Généreux', description: 'Envie de donner' }
      ]
    }
  };

  // Versets et hadiths correspondant aux humeurs
  const spiritualQuotes = {
    peaceful: "وَمَنْ أَعْرَضَ عَن ذِكْرِي فَإِنَّ لَهُ مَعِيشَةً ضَنكًا - Sourate 20:124",
    grateful: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ - Si vous êtes reconnaissants, Je vous donnerai davantage - Sourate 14:7",
    patient: "وَبَشِّرِ الصَّابِرِينَ - Et annonce la bonne nouvelle aux patients - Sourate 2:155",
    hopeful: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا - Avec la difficulté vient certes la facilité - Sourate 94:6"
  };

  const addMoodEntry = (categoryId: string, moodId: string, emoji: string, label: string) => {
    const newEntry = {
      date: selectedDate,
      mood: moodId,
      emoji: emoji,
      spiritualNote: '',
      gratitude: ''
    };
    
    const existingIndex = moodHistory.findIndex(entry => entry.date === selectedDate);
    if (existingIndex >= 0) {
      const updated = [...moodHistory];
      updated[existingIndex] = newEntry;
      setMoodHistory(updated);
    } else {
      setMoodHistory([...moodHistory, newEntry]);
    }
    
    setCurrentMood(moodId);
  };

  const getMoodStats = () => {
    const last7Days = Array.from({length: 7}, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      return date.toISOString().split('T')[0];
    });

    const recentMoods = moodHistory.filter(entry => last7Days.includes(entry.date));
    
    // Analyser les tendances
    const spiritualMoods = recentMoods.filter(entry => 
      ['peaceful', 'grateful', 'hopeful', 'contemplative', 'blessed'].includes(entry.mood)
    ).length;
    
    const positiveMoods = recentMoods.filter(entry => 
      ['joyful', 'calm', 'content', 'loving', 'motivated'].includes(entry.mood)
    ).length;

    return {
      totalEntries: recentMoods.length,
      spiritualPercentage: Math.round((spiritualMoods / Math.max(recentMoods.length, 1)) * 100),
      positivePercentage: Math.round((positiveMoods / Math.max(recentMoods.length, 1)) * 100),
      streak: calculateStreak()
    };
  };

  const calculateStreak = () => {
    let streak = 0;
    const today = new Date();
    
    for (let i = 0; i < 30; i++) {
      const checkDate = new Date(today);
      checkDate.setDate(checkDate.getDate() - i);
      const dateString = checkDate.toISOString().split('T')[0];
      
      if (moodHistory.some(entry => entry.date === dateString)) {
        streak++;
      } else {
        break;
      }
    }
    
    return streak;
  };

  const getTodaysMood = () => {
    const today = new Date().toISOString().split('T')[0];
    return moodHistory.find(entry => entry.date === today);
  };

  const stats = getMoodStats();
  const todaysMood = getTodaysMood();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            😊 Inclusive Emoji-Based Mood Tracker
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Suivez votre état émotionnel et spirituel avec des emojis inclusifs
          </p>
          <p className="text-sm text-gray-500">
            "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ" - "Nous faisons descendre du Coran ce qui est guérison et miséricorde"
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg">
            <CardContent className="p-4 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">{stats.streak}</div>
              <div className="text-sm opacity-90">Jours Consécutifs</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-400 to-violet-500 text-white shadow-lg">
            <CardContent className="p-4 text-center">
              <Heart className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">{stats.spiritualPercentage}%</div>
              <div className="text-sm opacity-90">États Spirituels</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg">
            <CardContent className="p-4 text-center">
              <Smile className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">{stats.positivePercentage}%</div>
              <div className="text-sm opacity-90">Humeurs Positives</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-400 to-cyan-500 text-white shadow-lg">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">{stats.totalEntries}</div>
              <div className="text-sm opacity-90">Entrées 7 jours</div>
            </CardContent>
          </Card>
        </div>

        {/* Today's Mood Status */}
        {todaysMood && (
          <Card className="mb-8 bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-xl">
            <CardContent className="p-6 text-center">
              <div className="text-6xl mb-4">{todaysMood.emoji}</div>
              <div className="text-2xl font-bold mb-2">Humeur d'aujourd'hui enregistrée</div>
              <div className="text-lg opacity-90">
                {Object.values(moodCategories)
                  .flatMap(cat => cat.moods)
                  .find(mood => mood.id === todaysMood.mood)?.label}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Date Selector */}
        <Card className="mb-8 bg-white shadow-lg border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Sélectionner une Date
            </CardTitle>
          </CardHeader>
          <CardContent>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-3 border rounded-lg text-lg"
              max={new Date().toISOString().split('T')[0]}
            />
          </CardContent>
        </Card>

        {/* Mood Categories */}
        <div className="space-y-6">
          {Object.entries(moodCategories).map(([categoryId, category]) => (
            <Card key={categoryId} className="shadow-lg border-2 border-white/50 backdrop-blur-sm bg-white/95">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {category.moods.map((mood) => {
                    const isSelected = currentMood === mood.id;
                    const hasEntry = moodHistory.some(entry => 
                      entry.date === selectedDate && entry.mood === mood.id
                    );
                    
                    return (
                      <Button
                        key={mood.id}
                        variant={isSelected || hasEntry ? "default" : "outline"}
                        onClick={() => addMoodEntry(categoryId, mood.id, mood.emoji, mood.label)}
                        className={`h-24 flex flex-col gap-2 p-4 transition-all hover:scale-105 ${
                          isSelected || hasEntry ? category.color + ' text-white' : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="text-2xl">{mood.emoji}</div>
                        <div className="text-xs text-center font-medium">{mood.label}</div>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mood History Visualization */}
        <Card className="mt-8 bg-white shadow-lg border-2 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Historique des 7 Derniers Jours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({length: 7}, (_, i) => {
                const date = new Date();
                date.setDate(date.getDate() - (6 - i));
                const dateString = date.toISOString().split('T')[0];
                const dayEntry = moodHistory.find(entry => entry.date === dateString);
                
                return (
                  <div key={i} className="text-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="text-xs text-gray-600 mb-2">
                      {date.toLocaleDateString('fr-FR', { weekday: 'short' })}
                    </div>
                    <div className="text-2xl mb-2">
                      {dayEntry ? dayEntry.emoji : '⬜'}
                    </div>
                    <div className="text-xs text-gray-500">
                      {date.getDate()}/{date.getMonth() + 1}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Spiritual Guidance */}
        <Card className="mt-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-4">🤲</div>
            <p className="text-lg font-medium mb-2">
              "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ"
            </p>
            <p className="text-sm opacity-90 mb-4">
              "Et quiconque place sa confiance en Allah, Il lui suffit" - Sourate 65:3
            </p>
            <p className="text-xs opacity-75">
              Chaque état émotionnel est une occasion de se rapprocher d'Allah et de grandir spirituellement
            </p>
          </CardContent>
        </Card>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>© 2025 Club Empreinte Digitale - Yakoubi Yamina | CED HalalTech™</p>
          <p>Inclusive Emoji-Based Mood Tracker - 100% Conforme Coran & Sunna</p>
        </div>
      </div>
    </div>
  );
};

export default InclusiveEmojiMoodTracker;