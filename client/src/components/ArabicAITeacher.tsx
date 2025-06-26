import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MessageCircle, 
  Volume2, 
  BookOpen, 
  CheckCircle, 
  Star,
  Mic,
  Play,
  Pause,
  RotateCcw,
  Award,
  Shield
} from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  titleArabic: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  duration: string;
  completed: boolean;
}

interface AIResponse {
  text: string;
  textArabic: string;
  pronunciation: string;
  explanation: string;
  examples: string[];
}

export function ArabicAITeacher() {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState<AIResponse | null>(null);
  const [currentLesson, setCurrentLesson] = useState<string>('basic-greetings');
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userProgress, setUserProgress] = useState(65);

  const lessons: Lesson[] = [
    {
      id: 'basic-greetings',
      title: 'Salutations de base',
      titleArabic: 'التحيات الأساسية',
      level: 'Débutant',
      duration: '15 min',
      completed: true
    },
    {
      id: 'quran-reading',
      title: 'Lecture du Coran',
      titleArabic: 'قراءة القرآن',
      level: 'Intermédiaire',
      duration: '30 min',
      completed: false
    },
    {
      id: 'tajweed-rules',
      title: 'Règles de Tajwid',
      titleArabic: 'أحكام التجويد',
      level: 'Avancé',
      duration: '45 min',
      completed: false
    }
  ];

  const handleAITeaching = async () => {
    if (!userInput.trim()) return;

    // Simulation de réponse IA selon le Fiqh informatique (règle ai-educational-001: HALAL)
    const mockResponse: AIResponse = {
      text: `Excellent choix ! Voici comment dire "${userInput}" en arabe :`,
      textArabic: userInput === 'Bonjour' ? 'السلام عليكم' : 'مرحبا',
      pronunciation: userInput === 'Bonjour' ? 'As-salamu alaykum' : 'Marhaban',
      explanation: `Cette expression est conforme aux enseignements islamiques et couramment utilisée dans le monde arabe.`,
      examples: [
        'Utilisez "السلام عليكم" pour une salutation respectueuse',
        'Répondez par "وعليكم السلام" (wa alaykum as-salam)',
        'Cette salutation apporte la paix et les bénédictions'
      ]
    };

    setAiResponse(mockResponse);
  };

  const playPronunciation = () => {
    setIsPlaying(true);
    // Simulation de lecture audio
    setTimeout(() => setIsPlaying(false), 2000);
  };

  const startRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <MessageCircle className="h-8 w-8 text-emerald-600" />
          <h1 className="text-3xl font-bold text-gray-800">Professeur d'Arabe IA</h1>
          <div className="flex items-center gap-1">
            <Shield className="h-5 w-5 text-green-600" />
            <Badge className="bg-green-100 text-green-700">Conforme Fiqh</Badge>
          </div>
        </div>
        <p className="text-gray-600" dir="rtl">أستاذ اللغة العربية الذكي - معهد النادي الرقمي</p>
        <p className="text-emerald-600 mt-2">Institut Club Empreinte Digitale • Apprentissage IA Authentique</p>
      </div>

      {/* Validation Fiqh */}
      <Card className="border-green-500 bg-green-50">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <div>
              <h3 className="font-semibold text-green-800">Validé par le Fiqh Informatique</h3>
              <p className="text-green-700 text-sm">
                Règle AI-Educational-001: L'IA peut être utilisée pour l'enseignement religieux et linguistique 
                tant que le contenu reste conforme aux sources islamiques authentiques.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Leçons disponibles */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Leçons disponibles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                  currentLesson === lesson.id
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-gray-200 hover:border-emerald-300'
                }`}
                onClick={() => setCurrentLesson(lesson.id)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-800">{lesson.title}</h4>
                    <p className="text-sm text-gray-600" dir="rtl">{lesson.titleArabic}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {lesson.level}
                      </Badge>
                      <span className="text-xs text-gray-500">{lesson.duration}</span>
                    </div>
                  </div>
                  {lesson.completed && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
              </div>
            ))}
            
            {/* Progression */}
            <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Progression</span>
                <span className="text-sm text-emerald-600">{userProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-emerald-500 h-2 rounded-full transition-all"
                  style={{ width: `${userProgress}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interface principale */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Conversation avec l'IA
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Zone de saisie */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Que souhaitez-vous apprendre ?
              </label>
              <Textarea
                placeholder="Tapez votre question en français..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="min-h-[100px]"
              />
              <div className="flex gap-2 mt-3">
                <Button 
                  onClick={handleAITeaching}
                  disabled={!userInput.trim()}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  Demander à l'IA
                </Button>
                <Button 
                  variant="outline"
                  onClick={startRecording}
                  className={isRecording ? 'bg-red-50 border-red-500' : ''}
                >
                  <Mic className={`h-4 w-4 mr-2 ${isRecording ? 'text-red-500' : ''}`} />
                  {isRecording ? 'Arrêter' : 'Parler'}
                </Button>
              </div>
            </div>

            {/* Réponse de l'IA */}
            {aiResponse && (
              <Card className="border-emerald-200 bg-emerald-50">
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-emerald-800 mb-2">
                        {aiResponse.text}
                      </h4>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <p className="text-3xl font-bold mb-2" dir="rtl">
                          {aiResponse.textArabic}
                        </p>
                        <p className="text-lg text-gray-600 italic">
                          {aiResponse.pronunciation}
                        </p>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={playPronunciation}
                          disabled={isPlaying}
                          className="mt-2"
                        >
                          {isPlaying ? (
                            <Pause className="h-4 w-4 mr-1" />
                          ) : (
                            <Play className="h-4 w-4 mr-1" />
                          )}
                          {isPlaying ? 'Lecture...' : 'Écouter'}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-emerald-700 mb-2">Explication :</h5>
                      <p className="text-emerald-600 mb-3">{aiResponse.explanation}</p>
                      
                      <h5 className="font-medium text-emerald-700 mb-2">Exemples d'usage :</h5>
                      <ul className="space-y-1">
                        {aiResponse.examples.map((example, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5" />
                            <span className="text-emerald-600 text-sm">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Volume2 className="h-4 w-4 mr-1" />
                        Répéter
                      </Button>
                      <Button size="sm" variant="outline">
                        <Award className="h-4 w-4 mr-1" />
                        Quiz
                      </Button>
                      <Button size="sm" variant="outline">
                        <RotateCcw className="h-4 w-4 mr-1" />
                        Nouvelle question
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Certification */}
      <Card className="border-yellow-500 bg-yellow-50">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-yellow-600" />
            <div>
              <h3 className="font-semibold text-yellow-800">Certification en cours</h3>
              <p className="text-yellow-700 text-sm">
                Complétez 80% des leçons pour obtenir votre certificat d'arabe islamique authentique
                délivré par l'Institut Club Empreinte Digitale.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}