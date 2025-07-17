import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Lightbulb, 
  Globe, 
  TrendingUp, 
  Palette, 
  MessageCircle, 
  Volume2, 
  Eye, 
  Settings, 
  Star,
  CheckCircle,
  Moon,
  Sun
} from 'lucide-react';

// Demo Islamic Tooltip Component
export const IslamicTooltipDemo = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div className="space-y-4">
      <div className="relative inline-block">
        <Button 
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="bg-green-600 hover:bg-green-700"
        >
          🕌 Guidance Spirituelle
        </Button>
        {showTooltip && (
          <div className="absolute top-full left-0 mt-2 p-3 bg-white dark:bg-gray-800 border border-green-200 rounded-lg shadow-lg z-10 min-w-[300px]">
            <div className="text-sm font-semibold text-green-700">Référence Coranique</div>
            <div className="text-right arabic-text text-green-600 my-2">
              وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا
            </div>
            <div className="text-xs text-gray-600">
              "Et quiconque craint Allah, Il lui donnera une issue"
              <br />
              <span className="font-semibold">Sourate At-Talaq, verset 2</span>
            </div>
            <div className="mt-2 flex gap-1">
              <Badge variant="secondary" className="text-xs">Français</Badge>
              <Badge variant="secondary" className="text-xs">Arabe</Badge>
              <Badge variant="secondary" className="text-xs">Authentique</Badge>
            </div>
          </div>
        )}
      </div>
      <div className="text-sm text-gray-600">
        ✨ Survolez le bouton pour voir la guidance spirituelle avec références coraniques
      </div>
    </div>
  );
};

// Demo Accessibility Mode Component
export const AccessibilityModeDemo = () => {
  const [settings, setSettings] = useState({
    fontSize: 'medium',
    theme: 'islamic-green',
    rtl: false,
    contrast: 'normal'
  });

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <Button
          size="sm"
          variant={settings.fontSize === 'large' ? 'default' : 'outline'}
          onClick={() => setSettings({...settings, fontSize: 'large'})}
        >
          <Eye className="w-4 h-4 mr-2" />
          Grande Police
        </Button>
        <Button
          size="sm"
          variant={settings.theme === 'islamic-gold' ? 'default' : 'outline'}
          onClick={() => setSettings({...settings, theme: 'islamic-gold'})}
        >
          <Palette className="w-4 h-4 mr-2" />
          Thème Or
        </Button>
        <Button
          size="sm"
          variant={settings.rtl ? 'default' : 'outline'}
          onClick={() => setSettings({...settings, rtl: !settings.rtl})}
        >
          <Globe className="w-4 h-4 mr-2" />
          RTL Arabe
        </Button>
        <Button
          size="sm"
          variant={settings.contrast === 'high' ? 'default' : 'outline'}
          onClick={() => setSettings({...settings, contrast: 'high'})}
        >
          <Settings className="w-4 h-4 mr-2" />
          Contraste+
        </Button>
      </div>
      <Card className={`${settings.fontSize === 'large' ? 'text-lg' : ''} ${settings.rtl ? 'text-right' : ''}`}>
        <CardContent className="p-4">
          <div className={`font-semibold ${settings.theme === 'islamic-gold' ? 'text-yellow-600' : 'text-green-600'}`}>
            {settings.rtl ? 'إمكانية الوصول الإسلامية' : 'Accessibilité Islamique'}
          </div>
          <div className="text-sm text-gray-600 mt-2">
            {settings.rtl ? 'واجهة متجاوبة مع الثقافة الإسلامية' : 'Interface respectueuse de la culture islamique'}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Demo Progress Visualization Component
export const ProgressVisualizationDemo = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [points, setPoints] = useState(350);

  const levels = [
    { id: 1, name: 'Étudiant Débutant', nameAr: 'طالب مبتدئ', min: 0, color: 'emerald' },
    { id: 2, name: 'Chercheur Assidu', nameAr: 'باحث مجتهد', min: 500, color: 'blue' },
    { id: 3, name: 'Savant en Formation', nameAr: 'عالم في التكوين', min: 1500, color: 'purple' }
  ];

  const progress = Math.min((points / 500) * 100, 100);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold text-emerald-600">Niveau {currentLevel}</div>
          <div className="text-sm text-gray-600">{levels[currentLevel - 1]?.name}</div>
          <div className="text-xs text-right arabic-text text-emerald-500">
            {levels[currentLevel - 1]?.nameAr}
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-emerald-600">{points}</div>
          <div className="text-xs text-gray-500">Points XP</div>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Progression vers niveau suivant</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex gap-2">
        <Button 
          size="sm" 
          onClick={() => setPoints(p => p + 50)}
          className="bg-emerald-600 hover:bg-emerald-700"
        >
          +50 Points
        </Button>
        <Button 
          size="sm" 
          variant="outline"
          onClick={() => setCurrentLevel(Math.min(3, currentLevel + 1))}
        >
          <Star className="w-4 h-4 mr-2" />
          Niveau +
        </Button>
      </div>
    </div>
  );
};

// Demo Islamic Color Palette Component
export const IslamicColorPaletteDemo = () => {
  const [selectedPalette, setSelectedPalette] = useState('classic');

  const palettes = {
    classic: {
      name: 'Vert Islamique Classique',
      nameAr: 'الأخضر الإسلامي التقليدي',
      colors: ['#059669', '#0d9488', '#eab308', '#f59e0b']
    },
    andalusi: {
      name: 'Bleu Andalou',
      nameAr: 'الأزرق الأندلسي',
      colors: ['#0ea5e9', '#0284c7', '#7c3aed', '#a855f7']
    },
    persian: {
      name: 'Rose Persan',
      nameAr: 'الوردي الفارسي',
      colors: ['#ec4899', '#be185d', '#059669', '#0d9488']
    },
    moroccan: {
      name: 'Terre Marocaine',
      nameAr: 'تراب مغربي',
      colors: ['#ea580c', '#dc2626', '#059669', '#eab308']
    }
  };

  const currentPalette = palettes[selectedPalette];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2">
        {Object.entries(palettes).map(([key, palette]) => (
          <Button
            key={key}
            size="sm"
            variant={selectedPalette === key ? 'default' : 'outline'}
            onClick={() => setSelectedPalette(key)}
            className="text-xs"
          >
            {palette.name.split(' ')[0]}
          </Button>
        ))}
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="font-semibold mb-2">{currentPalette.name}</div>
          <div className="text-right arabic-text text-sm text-gray-600 mb-3">
            {currentPalette.nameAr}
          </div>
          <div className="flex gap-2">
            {currentPalette.colors.map((color, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-lg border-2 border-gray-200 flex-shrink-0"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
          <div className="mt-3 text-xs text-gray-600">
            🎨 Palette inspirée de l'art islamique traditionnel
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Demo AI Contextual Chatbot Component
export const AIContextualChatbotDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'السلام عليكم! Je suis Aisha Al-Aman, votre assistante IA conforme aux valeurs islamiques. Comment puis-je vous aider aujourd\'hui?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickQuestions = [
    "Comment utiliser CED Bank sans Riba ?",
    "Règles Fiqh pour l'IA ?",
    "Calculer la Zakat",
    "Horaires de prière"
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      role: 'user' as const,
      content: inputMessage,
      timestamp: new Date()
    };

    const response = {
      role: 'assistant' as const,
      content: `Excellente question! Selon les règles du Fiqh informatique, voici ma réponse conforme à la Sharia concernant: "${inputMessage}". Cette réponse est validée par nos 150+ scholars internationaux.`,
      timestamp: new Date()
    };

    setMessages([...messages, newMessage, response]);
    setInputMessage('');
  };

  return (
    <div className="space-y-4">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-cyan-600 hover:bg-cyan-700"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        {isOpen ? 'Fermer' : 'Ouvrir'} Aisha Al-Aman IA
      </Button>

      {isOpen && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                🤖
              </div>
              Aisha Al-Aman - Assistant IA Éthique
            </CardTitle>
            <CardDescription className="text-xs">
              Conforme à 100% aux valeurs islamiques - Validé par 150+ scholars
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="h-32 overflow-y-auto space-y-2 border rounded p-2 bg-gray-50">
              {messages.slice(-2).map((msg, index) => (
                <div key={index} className={`text-xs ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-2 rounded max-w-[80%] ${
                    msg.role === 'user' 
                      ? 'bg-cyan-600 text-white' 
                      : 'bg-white border border-gray-200'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Posez votre question..."
                className="flex-1 text-xs px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <Button size="sm" onClick={handleSendMessage}>
                <Send className="w-3 h-3" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-1">
              {quickQuestions.map((q, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant="outline"
                  onClick={() => setInputMessage(q)}
                  className="text-xs h-8"
                >
                  {q.split(' ').slice(0, 2).join(' ')}...
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};