import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mic, MicOff, Volume2, VolumeX, Eye, Settings, Navigation, Play, Square } from 'lucide-react';

const AccessibilityVoiceNavigationFeature = () => {
  const [isListening, setIsListening] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<Array<{
    id: string;
    command: string;
    action: string;
    timestamp: Date;
    success: boolean;
  }>>([]);
  const [recognitionSupported, setRecognitionSupported] = useState(false);
  const [currentPage, setCurrentPage] = useState('Accueil CED');
  const [voiceLanguage, setVoiceLanguage] = useState('fr-FR');
  
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  // Commandes vocales en français et arabe
  const voiceCommands = {
    'fr-FR': {
      navigation: {
        'aller à l\'accueil': { action: 'navigate', target: '/', description: 'Page d\'accueil' },
        'ouvrir le tableau de bord': { action: 'navigate', target: '/central-dashboard', description: 'Tableau de bord central' },
        'voir mes formations': { action: 'navigate', target: '/institut-ced-academy', description: 'Institut CED Academy' },
        'ouvrir le lecteur coran': { action: 'navigate', target: '/lecteur-coran', description: 'Lecteur Coran' },
        'aller aux paramètres': { action: 'navigate', target: '/settings', description: 'Paramètres' },
        'voir mes finances': { action: 'navigate', target: '/ced-bank', description: 'CED Bank' },
        'ouvrir l\'assistant': { action: 'navigate', target: '/super-iarp-pro', description: 'Assistant IA' }
      },
      actions: {
        'augmenter le volume': { action: 'volume', direction: 'up', description: 'Volume +' },
        'diminuer le volume': { action: 'volume', direction: 'down', description: 'Volume -' },
        'mode sombre': { action: 'theme', target: 'dark', description: 'Thème sombre' },
        'mode clair': { action: 'theme', target: 'light', description: 'Thème clair' },
        'lire cette page': { action: 'read', target: 'page', description: 'Lecture de page' },
        'arrêter la lecture': { action: 'stop', target: 'speech', description: 'Arrêt lecture' },
        'répéter': { action: 'repeat', target: 'last', description: 'Répéter dernier' }
      },
      accessibility: {
        'augmenter la taille': { action: 'font-size', direction: 'increase', description: 'Police +' },
        'diminuer la taille': { action: 'font-size', direction: 'decrease', description: 'Police -' },
        'contraste élevé': { action: 'contrast', target: 'high', description: 'Contraste élevé' },
        'contraste normal': { action: 'contrast', target: 'normal', description: 'Contraste normal' },
        'navigation clavier': { action: 'keyboard-nav', target: 'enable', description: 'Navigation clavier' },
        'aide vocale': { action: 'voice-help', target: 'enable', description: 'Guide vocal' }
      },
      islamic: {
        'heure de prière': { action: 'prayer-time', target: 'current', description: 'Heure prière' },
        'direction qibla': { action: 'qibla', target: 'show', description: 'Direction Mecque' },
        'réciter al fatiha': { action: 'recite', target: 'al-fatiha', description: 'Récitation Fatiha' },
        'dhikr du matin': { action: 'dhikr', target: 'morning', description: 'Dhikr matinal' },
        'dua avant repas': { action: 'dua', target: 'meal', description: 'Dua repas' }
      }
    },
    'ar-SA': {
      navigation: {
        'اذهب إلى الرئيسية': { action: 'navigate', target: '/', description: 'الصفحة الرئيسية' },
        'افتح لوحة التحكم': { action: 'navigate', target: '/central-dashboard', description: 'لوحة التحكم' },
        'شاهد دوراتي': { action: 'navigate', target: '/institut-ced-academy', description: 'معهد الأكاديمية' },
        'افتح قارئ القرآن': { action: 'navigate', target: '/lecteur-coran', description: 'قارئ القرآن' },
        'اذهب إلى الإعدادات': { action: 'navigate', target: '/settings', description: 'الإعدادات' }
      },
      islamic: {
        'وقت الصلاة': { action: 'prayer-time', target: 'current', description: 'وقت الصلاة' },
        'اتجاه القبلة': { action: 'qibla', target: 'show', description: 'اتجاه مكة' },
        'اقرأ الفاتحة': { action: 'recite', target: 'al-fatiha', description: 'تلاوة الفاتحة' },
        'أذكار الصباح': { action: 'dhikr', target: 'morning', description: 'أذكار الصباح' },
        'دعاء الطعام': { action: 'dua', target: 'meal', description: 'دعاء الطعام' }
      }
    }
  };

  // Messages de réponse vocale
  const voiceResponses = {
    'fr-FR': {
      listening: "Je vous écoute...",
      commandReceived: "Commande reçue : ",
      commandExecuted: "Commande exécutée avec succès",
      commandFailed: "Désolé, je n'ai pas pu exécuter cette commande",
      navigationSuccess: "Navigation vers ",
      commandNotRecognized: "Commande non reconnue. Dites 'aide' pour voir les commandes disponibles",
      voiceHelp: "Voici les commandes disponibles : navigation, actions, accessibilité, et islamiques"
    },
    'ar-SA': {
      listening: "أستمع إليك...",
      commandReceived: "تم استلام الأمر : ",
      commandExecuted: "تم تنفيذ الأمر بنجاح",
      commandFailed: "عذراً، لم أتمكن من تنفيذ هذا الأمر",
      navigationSuccess: "الانتقال إلى ",
      commandNotRecognized: "أمر غير معروف. قل 'مساعدة' لرؤية الأوامر المتاحة",
      voiceHelp: "إليك الأوامر المتاحة : التنقل، الإجراءات، إمكانية الوصول، والإسلامية"
    }
  };

  // Initialisation de la reconnaissance vocale
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setRecognitionSupported(true);
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = voiceLanguage;

      recognitionRef.current.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result: any) => result.transcript)
          .join('');

        setCurrentCommand(transcript);

        if (event.results[event.results.length - 1].isFinal) {
          processVoiceCommand(transcript.toLowerCase().trim());
        }
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Erreur reconnaissance vocale:', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    // Initialisation synthèse vocale
    if ('speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [voiceLanguage]);

  const speak = (text: string) => {
    if (isVoiceEnabled && synthRef.current) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = voiceLanguage;
      utterance.rate = 0.9;
      utterance.pitch = 1;
      synthRef.current.speak(utterance);
    }
  };

  const startListening = () => {
    if (recognitionRef.current && recognitionSupported) {
      setIsListening(true);
      setCurrentCommand('');
      recognitionRef.current.start();
      speak(voiceResponses[voiceLanguage as keyof typeof voiceResponses].listening);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const processVoiceCommand = (command: string) => {
    const commands = voiceCommands[voiceLanguage as keyof typeof voiceCommands];
    let commandFound = false;
    let actionPerformed = '';

    // Recherche dans toutes les catégories de commandes
    for (const [category, categoryCommands] of Object.entries(commands)) {
      for (const [commandText, commandData] of Object.entries(categoryCommands)) {
        if (command.includes(commandText)) {
          commandFound = true;
          actionPerformed = executeCommand(commandData);
          break;
        }
      }
      if (commandFound) break;
    }

    // Ajouter à l'historique
    const historyEntry = {
      id: Date.now().toString(),
      command: command,
      action: actionPerformed || 'Non reconnue',
      timestamp: new Date(),
      success: commandFound
    };

    setCommandHistory(prev => [historyEntry, ...prev.slice(0, 9)]);

    // Réponse vocale
    if (commandFound) {
      speak(voiceResponses[voiceLanguage as keyof typeof voiceResponses].commandExecuted);
    } else {
      speak(voiceResponses[voiceLanguage as keyof typeof voiceResponses].commandNotRecognized);
    }
  };

  const executeCommand = (commandData: any) => {
    switch (commandData.action) {
      case 'navigate':
        setCurrentPage(commandData.description);
        speak(`${voiceResponses[voiceLanguage as keyof typeof voiceResponses].navigationSuccess}${commandData.description}`);
        return `Navigation vers ${commandData.description}`;
      
      case 'volume':
        const newVolume = commandData.direction === 'up' ? 'augmenté' : 'diminué';
        speak(`Volume ${newVolume}`);
        return `Volume ${newVolume}`;
      
      case 'theme':
        speak(`Thème ${commandData.target} activé`);
        return `Thème ${commandData.target}`;
      
      case 'read':
        speak('Lecture de la page en cours');
        return 'Lecture de page';
      
      case 'prayer-time':
        const now = new Date();
        const timeString = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
        speak(`Il est actuellement ${timeString}. La prochaine prière sera bientôt.`);
        return 'Information heure de prière';
      
      case 'qibla':
        speak('Direction de la Qibla affichée');
        return 'Direction Qibla';
      
      case 'recite':
        speak('Récitation en cours');
        return 'Récitation';
      
      case 'dhikr':
        speak('Dhikr du matin: Subhan Allah, Alhamdulillah, Allahu Akbar');
        return 'Dhikr matinal';
      
      case 'dua':
        speak('Bismillah - Au nom d\'Allah');
        return 'Dua';
      
      default:
        return commandData.description;
    }
  };

  const getCommandsByCategory = (category: string) => {
    const commands = voiceCommands[voiceLanguage as keyof typeof voiceCommands];
    return Object.entries(commands[category as keyof typeof commands] || {});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            🎤 Accessibility Voice Navigation Feature
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Navigation vocale accessible et inclusive pour tous les utilisateurs
          </p>
          <p className="text-sm text-gray-500">
            "وَمَن كَانَ فِي هَٰذِهِ أَعْمَىٰ فَهُوَ فِي الْآخِرَةِ أَعْمَىٰ" - "Celui qui est aveugle ici-bas sera aveugle dans l'au-delà"
          </p>
        </div>

        {/* Voice Control Panel */}
        <Card className="mb-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-xl">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Voice Control */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Contrôle Vocal</h3>
                <div className="space-y-3">
                  <Button
                    onClick={isListening ? stopListening : startListening}
                    disabled={!recognitionSupported}
                    className={`w-full h-16 text-lg ${
                      isListening 
                        ? 'bg-red-500 hover:bg-red-600' 
                        : 'bg-green-500 hover:bg-green-600'
                    }`}
                  >
                    {isListening ? (
                      <>
                        <MicOff className="w-6 h-6 mr-2" />
                        Arrêter l'écoute
                      </>
                    ) : (
                      <>
                        <Mic className="w-6 h-6 mr-2" />
                        Commencer l'écoute
                      </>
                    )}
                  </Button>
                  
                  <Button
                    onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
                    variant="outline"
                    className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30"
                  >
                    {isVoiceEnabled ? (
                      <>
                        <Volume2 className="w-5 h-5 mr-2" />
                        Audio Activé
                      </>
                    ) : (
                      <>
                        <VolumeX className="w-5 h-5 mr-2" />
                        Audio Désactivé
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Language Selection */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Langue</h3>
                <div className="space-y-2">
                  <Button
                    onClick={() => setVoiceLanguage('fr-FR')}
                    variant={voiceLanguage === 'fr-FR' ? 'secondary' : 'outline'}
                    className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30"
                  >
                    🇫🇷 Français
                  </Button>
                  <Button
                    onClick={() => setVoiceLanguage('ar-SA')}
                    variant={voiceLanguage === 'ar-SA' ? 'secondary' : 'outline'}
                    className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30"
                  >
                    🇸🇦 العربية
                  </Button>
                </div>
              </div>

              {/* Status */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Statut</h3>
                <div className="space-y-3">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <div className="text-sm opacity-90 mb-1">Page Actuelle</div>
                    <div className="font-medium">{currentPage}</div>
                  </div>
                  <div className="bg-white/20 p-3 rounded-lg">
                    <div className="text-sm opacity-90 mb-1">Reconnaissance</div>
                    <Badge className={recognitionSupported ? 'bg-green-500' : 'bg-red-500'}>
                      {recognitionSupported ? 'Supportée' : 'Non supportée'}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Command Display */}
            {isListening && (
              <div className="mt-6 bg-white/10 p-4 rounded-lg">
                <div className="text-center">
                  <div className="text-sm opacity-90 mb-2">Commande en cours :</div>
                  <div className="text-lg font-medium min-h-[1.5rem]">
                    {currentCommand || "En attente..."}
                  </div>
                  <div className="mt-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full mx-auto animate-pulse"></div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Command Categories */}
          <div className="lg:col-span-2 space-y-6">
            {/* Navigation Commands */}
            <Card className="shadow-lg border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="w-5 h-5" />
                  Commandes de Navigation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {getCommandsByCategory('navigation').map(([command, data]) => (
                    <div key={command} className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-medium text-sm text-blue-700">"{command}"</div>
                      <div className="text-xs text-gray-600 mt-1">{data.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Islamic Commands */}
            <Card className="shadow-lg border-2 border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Commandes Islamiques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {getCommandsByCategory('islamic').map(([command, data]) => (
                    <div key={command} className="p-3 bg-emerald-50 rounded-lg">
                      <div className="font-medium text-sm text-emerald-700">"{command}"</div>
                      <div className="text-xs text-gray-600 mt-1">{data.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Accessibility Commands */}
            {voiceLanguage === 'fr-FR' && (
              <Card className="shadow-lg border-2 border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Commandes d'Accessibilité
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {getCommandsByCategory('accessibility').map(([command, data]) => (
                      <div key={command} className="p-3 bg-purple-50 rounded-lg">
                        <div className="font-medium text-sm text-purple-700">"{command}"</div>
                        <div className="text-xs text-gray-600 mt-1">{data.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Command History Sidebar */}
          <div className="space-y-6">
            {/* Command History */}
            <Card className="shadow-lg border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Historique Commandes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {commandHistory.length > 0 ? (
                    commandHistory.map((entry) => (
                      <div key={entry.id} className={`p-2 rounded-lg ${
                        entry.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                      }`}>
                        <div className="text-sm font-medium">
                          "{entry.command}"
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          {entry.action} - {entry.timestamp.toLocaleTimeString()}
                        </div>
                        <Badge className={`text-xs ${
                          entry.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {entry.success ? '✅ Succès' : '❌ Échec'}
                        </Badge>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500 text-center py-4">
                      Aucune commande récente
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Actions Rapides
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button
                    onClick={() => speak('Test de la synthèse vocale. Assalamu alaikum.')}
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    size="sm"
                  >
                    <Volume2 className="w-4 h-4 mr-2" />
                    Test Audio
                  </Button>
                  <Button
                    onClick={() => processVoiceCommand('heure de prière')}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                    size="sm"
                  >
                    <Star className="w-4 h-4 mr-2" />
                    Heure Prière
                  </Button>
                  <Button
                    onClick={() => processVoiceCommand('lire cette page')}
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white"
                    size="sm"
                  >
                    <Volume2 className="w-4 h-4 mr-2" />
                    Lire Page
                  </Button>
                  <Button
                    onClick={() => {
                      setCommandHistory([]);
                      speak('Historique effacé');
                    }}
                    variant="outline"
                    className="w-full"
                    size="sm"
                  >
                    <Square className="w-4 h-4 mr-2" />
                    Effacer Historique
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Accessibility Features */}
            <Card className="shadow-lg border-2 border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Fonctionnalités
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Navigation vocale complète</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Commandes islamiques</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Support multilingue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Réponses vocales</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Historique commandes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Instructions */}
        <Card className="mt-8 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Comment utiliser la navigation vocale</h3>
            <p className="text-sm opacity-90 mb-4">
              Cliquez sur "Commencer l'écoute" et prononcez clairement vos commandes. 
              L'assistant vocal vous guidera dans votre navigation.
            </p>
            <p className="text-xs opacity-75">
              Technologie développée selon les principes d'inclusion et d'accessibilité universelle
            </p>
          </CardContent>
        </Card>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>© 2025 Club Empreinte Digitale - Yakoubi Yamina | CED HalalTech™</p>
          <p>Accessibility Voice Navigation Feature - 100% Conforme Coran & Sunna</p>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityVoiceNavigationFeature;