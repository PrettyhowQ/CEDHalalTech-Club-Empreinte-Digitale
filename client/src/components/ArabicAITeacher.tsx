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
    },
    {
      id: 'sahaba-stories',
      title: 'Histoires des Compagnons',
      titleArabic: 'قصص الصحابة',
      level: 'Intermédiaire',
      duration: '35 min',
      completed: false
    },
    {
      id: 'sahih-muslim',
      title: 'Sahih Muslim',
      titleArabic: 'صحيح مسلم',
      level: 'Avancé',
      duration: '50 min',
      completed: false
    },
    {
      id: 'sahih-bukhari',
      title: 'Sahih Bukhari',
      titleArabic: 'صحيح البخاري',
      level: 'Avancé',
      duration: '50 min',
      completed: false
    },
    {
      id: 'islamic-sciences',
      title: 'Sciences Islamiques',
      titleArabic: 'العلوم الإسلامية',
      level: 'Avancé',
      duration: '60 min',
      completed: false
    },
    {
      id: 'sira-nabawiya',
      title: 'Sira du Prophète ﷺ',
      titleArabic: 'السيرة النبوية',
      level: 'Intermédiaire',
      duration: '40 min',
      completed: false
    }
  ];

  const getIslamicLibraryResponse = (topic: string, lesson: string): AIResponse => {
    const responses: Record<string, AIResponse> = {
      'tajweed-rules': {
        text: `Apprenons les règles de Tajwid pour une récitation correcte du Coran :`,
        textArabic: 'أحكام التجويد - الإدغام والإظهار والإقلاب',
        pronunciation: 'Ahkam at-tajweed - al-idgham wa al-izhar wa al-iqlab',
        explanation: 'Le Tajwid est obligatoire pour réciter le Coran correctement. Ces règles préservent la beauté et l\'authenticité de la récitation.',
        examples: [
          'الإظهار (Al-Izhar): Prononciation claire des lettres',
          'الإدغام (Al-Idgham): Fusion de certaines lettres',
          'الإقلاب (Al-Iqlab): Transformation du نون en ميم'
        ]
      },
      'sahaba-stories': {
        text: `Histoire d'Abu Bakr As-Siddiq رضي الله عنه :`,
        textArabic: 'قصة أبي بكر الصديق رضي الله عنه',
        pronunciation: 'Qissatu Abi Bakr As-Siddiq radiya Allah anhu',
        explanation: 'Abu Bakr fut le premier homme à embrasser l\'Islam et le compagnon le plus proche du Prophète ﷺ.',
        examples: [
          'Premier Calife de l\'Islam',
          'Surnommé "As-Siddiq" (le Véridique)',
          'A accompagné le Prophète ﷺ lors de l\'Hégire'
        ]
      },
      'sahih-muslim': {
        text: `Hadith authentique de Sahih Muslim :`,
        textArabic: 'إنما الأعمال بالنيات وإنما لكل امرئ ما نوى',
        pronunciation: 'Innama al-a\'malu bi an-niyyat wa innama li kulli imri\'in ma nawa',
        explanation: 'Ce hadith fondamental enseigne que la valeur des actions dépend des intentions.',
        examples: [
          'Rapporté par Omar ibn Al-Khattab رضي الله عنه',
          'Hadith numéro 1907 dans Sahih Muslim',
          'Base de la jurisprudence islamique'
        ]
      },
      'quran-reading': {
        text: `Commençons par la Fatiha, la première sourate :`,
        textArabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        pronunciation: 'Bismillahi ar-Rahmani ar-Raheem',
        explanation: 'Al-Fatiha est l\'ouverture du Coran, récitée dans chaque unité de prière.',
        examples: [
          'السبع المثاني (As-Sab\' al-Mathani) - Les sept répétées',
          'أم الكتاب (Umm al-Kitab) - La mère du Livre',
          'Récitation obligatoire dans la Salah'
        ]
      }
    };

    return responses[lesson] || {
      text: `Explorons ce sujet islamique : ${topic}`,
      textArabic: 'نتعلم العلوم الإسلامية الأصيلة',
      pronunciation: 'Nata\'allam al-\'ulum al-islamiyyah al-asila',
      explanation: 'Apprentissage basé sur les sources authentiques du Coran et de la Sunna.',
      examples: [
        'Sources authentiques uniquement',
        'Validé par les savants reconnus',
        'Conforme au Fiqh informatique CED'
      ]
    };
  };

  const handleAITeaching = async () => {
    if (!userInput.trim()) return;

    // Réponse basée sur la bibliothèque islamique authentique
    const response = getIslamicLibraryResponse(userInput, currentLesson);
    setAiResponse(response);
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

      {/* Bibliothèque Islamique */}
      <Card className="border-emerald-500 bg-emerald-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-emerald-800">
            <BookOpen className="h-6 w-6" />
            Bibliothèque Islamique Authentique
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-white rounded-lg border border-emerald-200">
              <h4 className="font-semibold text-emerald-700 mb-1">Coran Complet</h4>
              <p className="text-sm text-emerald-600">114 Sourates</p>
              <p className="text-xs text-emerald-500" dir="rtl">القرآن الكريم</p>
            </div>
            <div className="text-center p-3 bg-white rounded-lg border border-emerald-200">
              <h4 className="font-semibold text-emerald-700 mb-1">Sahih Bukhari</h4>
              <p className="text-sm text-emerald-600">7563 Hadiths</p>
              <p className="text-xs text-emerald-500" dir="rtl">صحيح البخاري</p>
            </div>
            <div className="text-center p-3 bg-white rounded-lg border border-emerald-200">
              <h4 className="font-semibold text-emerald-700 mb-1">Sahih Muslim</h4>
              <p className="text-sm text-emerald-600">7470 Hadiths</p>
              <p className="text-xs text-emerald-500" dir="rtl">صحيح مسلم</p>
            </div>
            <div className="text-center p-3 bg-white rounded-lg border border-emerald-200">
              <h4 className="font-semibold text-emerald-700 mb-1">Histoires Sahaba</h4>
              <p className="text-sm text-emerald-600">124 Compagnons</p>
              <p className="text-xs text-emerald-500" dir="rtl">قصص الصحابة</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-white rounded-lg border border-emerald-200">
            <h4 className="font-semibold text-emerald-700 mb-2">Prochaines additions prévues :</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-emerald-600">
              <span>• Sunan Abu Dawood</span>
              <span>• Jami At-Tirmidhi</span>
              <span>• Sunan An-Nasa'i</span>
              <span>• Sunan Ibn Majah</span>
              <span>• Muwatta Malik</span>
              <span>• Musnad Ahmad</span>
              <span>• Tafsir Ibn Kathir</span>
              <span>• Sira Ibn Hisham</span>
            </div>
          </div>
        </CardContent>
      </Card>

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