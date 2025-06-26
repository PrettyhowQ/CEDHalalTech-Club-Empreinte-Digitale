import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  PenTool, 
  RotateCcw, 
  CheckCircle, 
  Star,
  Award,
  Shield,
  BookOpen,
  Eye,
  Hand,
  Download,
  Palette
} from 'lucide-react';

interface WritingLevel {
  id: string;
  name: string;
  nameArabic: string;
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  letters: string[];
  description: string;
}

interface CalligraphyStyle {
  id: string;
  name: string;
  nameArabic: string;
  description: string;
  complexity: number;
}

export function ArabicWritingLearner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentLevel, setCurrentLevel] = useState<string>('basic-letters');
  const [currentLetter, setCurrentLetter] = useState<string>('ا');
  const [currentStyle, setCurrentStyle] = useState<string>('naskh');
  const [isDrawing, setIsDrawing] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [userProgress, setUserProgress] = useState(25);
  const [currentStroke, setCurrentStroke] = useState(0);

  const writingLevels: WritingLevel[] = [
    {
      id: 'basic-letters',
      name: 'Lettres de base',
      nameArabic: 'الحروف الأساسية',
      difficulty: 'Débutant',
      letters: ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص'],
      description: 'Apprenez les 28 lettres de l\'alphabet arabe'
    },
    {
      id: 'letter-connections',
      name: 'Connexions des lettres',
      nameArabic: 'ربط الحروف',
      difficulty: 'Intermédiaire',
      letters: ['بت', 'تث', 'جح', 'حخ', 'سش', 'صض'],
      description: 'Maîtrisez les connexions entre lettres'
    },
    {
      id: 'words-formation',
      name: 'Formation des mots',
      nameArabic: 'تكوين الكلمات',
      difficulty: 'Intermédiaire',
      letters: ['كتاب', 'مدرسة', 'بيت', 'ماء', 'نور'],
      description: 'Écrivez des mots complets en arabe'
    },
    {
      id: 'quranic-verses',
      name: 'Versets coraniques',
      nameArabic: 'الآيات القرآنية',
      difficulty: 'Avancé',
      letters: ['بِسْمِ اللَّهِ', 'الْحَمْدُ لِلَّهِ', 'رَبِّ الْعَالَمِينَ'],
      description: 'Calligraphie de versets du Coran'
    },
    {
      id: 'advanced-calligraphy',
      name: 'Calligraphie avancée',
      nameArabic: 'الخط المتقدم',
      difficulty: 'Expert',
      letters: ['اللَّهُمَّ صَلِّ وَسَلِّمْ', 'مُحَمَّدٌ رَسُولُ اللَّهِ'],
      description: 'Maîtrise de la calligraphie artistique'
    }
  ];

  const calligraphyStyles: CalligraphyStyle[] = [
    {
      id: 'naskh',
      name: 'Naskh',
      nameArabic: 'نسخ',
      description: 'Style classique pour l\'apprentissage',
      complexity: 1
    },
    {
      id: 'ruqaa',
      name: 'Ruqaa',
      nameArabic: 'رقعة',
      description: 'Style moderne et rapide',
      complexity: 2
    },
    {
      id: 'thuluth',
      name: 'Thuluth',
      nameArabic: 'ثلث',
      description: 'Style élégant et décoratif',
      complexity: 4
    },
    {
      id: 'diwani',
      name: 'Diwani',
      nameArabic: 'ديواني',
      description: 'Style ottoman complexe',
      complexity: 5
    }
  ];

  const currentLevelData = writingLevels.find(level => level.id === currentLevel);
  const currentStyleData = calligraphyStyles.find(style => style.id === currentStyle);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configuration du canvas
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#1f2937';
    ctx.lineWidth = 3;

    // Dessiner la grille d'aide
    if (showGuide) {
      drawGuideLines(ctx, canvas.width, canvas.height);
    }

    // Dessiner le modèle de la lettre
    drawLetterGuide(ctx, currentLetter);
  }, [currentLetter, showGuide]);

  const drawGuideLines = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.save();
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);

    // Lignes horizontales (ligne de base, ligne médiane, etc.)
    const baseLineY = height * 0.7;
    const middleLineY = height * 0.5;
    const topLineY = height * 0.3;

    ctx.beginPath();
    ctx.moveTo(0, baseLineY);
    ctx.lineTo(width, baseLineY);
    ctx.moveTo(0, middleLineY);
    ctx.lineTo(width, middleLineY);
    ctx.moveTo(0, topLineY);
    ctx.lineTo(width, topLineY);
    ctx.stroke();

    // Lignes verticales pour l'espacement
    for (let x = width / 4; x < width; x += width / 4) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    ctx.restore();
  };

  const drawLetterGuide = (ctx: CanvasRenderingContext2D, letter: string) => {
    ctx.save();
    ctx.fillStyle = '#9ca3af';
    ctx.font = `${currentStyleData?.complexity === 1 ? '120px' : '100px'} serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    const canvas = canvasRef.current;
    if (canvas) {
      ctx.fillText(letter, canvas.width / 2, canvas.height / 2);
    }
    
    ctx.restore();
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.strokeStyle = '#059669';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    // Incrémenter le progress si l'utilisateur a terminé le trait
    if (currentStroke < 3) {
      setCurrentStroke(prev => prev + 1);
      setUserProgress(prev => Math.min(prev + 5, 100));
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setCurrentStroke(0);
    
    // Redessiner les guides
    if (showGuide) {
      drawGuideLines(ctx, canvas.width, canvas.height);
      drawLetterGuide(ctx, currentLetter);
    }
  };

  const nextLetter = () => {
    if (!currentLevelData) return;
    
    const currentIndex = currentLevelData.letters.indexOf(currentLetter);
    const nextIndex = (currentIndex + 1) % currentLevelData.letters.length;
    setCurrentLetter(currentLevelData.letters[nextIndex]);
    setCurrentStroke(0);
    clearCanvas();
  };

  const saveProgress = () => {
    // Simulation de sauvegarde
    setUserProgress(prev => Math.min(prev + 10, 100));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <PenTool className="h-8 w-8 text-emerald-600" />
          <h1 className="text-3xl font-bold text-gray-800">Apprentissage Écriture Arabe IA</h1>
          <div className="flex items-center gap-1">
            <Shield className="h-5 w-5 text-green-600" />
            <Badge className="bg-green-100 text-green-700">Conforme Fiqh</Badge>
          </div>
        </div>
        <p className="text-gray-600" dir="rtl">تعلم الكتابة العربية بالذكاء الاصطناعي</p>
        <p className="text-emerald-600 mt-2">Institut Club Empreinte Digitale • Calligraphie Authentique</p>
      </div>

      {/* Validation Fiqh */}
      <Card className="border-green-500 bg-green-50">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <div>
              <h3 className="font-semibold text-green-800">Validé par le Fiqh Informatique</h3>
              <p className="text-green-700 text-sm">
                Règle AI-Educational-003: L'IA pour l'enseignement de l'écriture arabe est HALAL, 
                favorisant la préservation et la transmission de la langue du Coran.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Contrôles */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Paramètres
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Niveau */}
            <div>
              <label className="block text-sm font-medium mb-2">Niveau</label>
              <Select value={currentLevel} onValueChange={setCurrentLevel}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {writingLevels.map((level) => (
                    <SelectItem key={level.id} value={level.id}>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{level.difficulty}</Badge>
                        <span>{level.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Style de calligraphie */}
            <div>
              <label className="block text-sm font-medium mb-2">Style</label>
              <Select value={currentStyle} onValueChange={setCurrentStyle}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {calligraphyStyles.map((style) => (
                    <SelectItem key={style.id} value={style.id}>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {Array.from({ length: style.complexity }).map((_, i) => (
                            <Star key={i} className="h-3 w-3 text-yellow-500" />
                          ))}
                        </div>
                        <span>{style.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Lettre actuelle */}
            <div>
              <label className="block text-sm font-medium mb-2">Lettre/Mot</label>
              <Select value={currentLetter} onValueChange={setCurrentLetter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currentLevelData?.letters.map((letter) => (
                    <SelectItem key={letter} value={letter}>
                      <span className="text-xl" dir="rtl">{letter}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Options */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="showGuide"
                  checked={showGuide}
                  onChange={(e) => setShowGuide(e.target.checked)}
                  className="rounded"
                />
                <label htmlFor="showGuide" className="text-sm">Afficher les guides</label>
              </div>
            </div>

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
              <p className="text-xs text-emerald-600 mt-1">
                Traits réalisés: {currentStroke}/3
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Zone de dessin */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Hand className="h-5 w-5" />
                Zone d'écriture - {currentLetter}
              </CardTitle>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => setShowGuide(!showGuide)}>
                  <Eye className="h-4 w-4 mr-1" />
                  {showGuide ? 'Masquer' : 'Afficher'} guide
                </Button>
                <Button size="sm" variant="outline" onClick={clearCanvas}>
                  <RotateCcw className="h-4 w-4 mr-1" />
                  Effacer
                </Button>
                <Button size="sm" onClick={nextLetter}>
                  Suivant
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-emerald-200 rounded-lg p-4 bg-white">
              <canvas
                ref={canvasRef}
                width={800}
                height={400}
                className="w-full h-96 cursor-crosshair"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
              />
            </div>
            
            {/* Instructions */}
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Instructions :</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
                <div>
                  <p>• Suivez le modèle gris en arrière-plan</p>
                  <p>• Respectez le sens d'écriture (droite à gauche)</p>
                  <p>• Utilisez les lignes guides pour l'alignement</p>
                </div>
                <div>
                  <p>• Commencez par le point de départ traditionnel</p>
                  <p>• Maintenez une pression constante</p>
                  <p>• Pratiquez la fluidité des mouvements</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-4">
              <Button onClick={saveProgress} className="bg-emerald-600 hover:bg-emerald-700">
                <Award className="h-4 w-4 mr-2" />
                Valider l'exercice
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Exporter
              </Button>
              <Button variant="outline">
                <Palette className="h-4 w-4 mr-2" />
                Changer couleur
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Styles de calligraphie */}
      <Card className="border-amber-500 bg-amber-50">
        <CardHeader>
          <CardTitle className="text-amber-800">Styles de Calligraphie Disponibles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            {calligraphyStyles.map((style) => (
              <div
                key={style.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  currentStyle === style.id
                    ? 'border-amber-500 bg-white'
                    : 'border-amber-200 hover:border-amber-300'
                }`}
                onClick={() => setCurrentStyle(style.id)}
              >
                <h4 className="font-semibold text-amber-800">{style.name}</h4>
                <p className="text-lg text-amber-700" dir="rtl">{style.nameArabic}</p>
                <p className="text-sm text-amber-600 mt-1">{style.description}</p>
                <div className="flex mt-2">
                  {Array.from({ length: style.complexity }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}