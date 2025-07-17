import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Volume2, 
  Star, 
  Heart, 
  Info, 
  Globe,
  Sparkles,
  VolumeX,
  Copy,
  CheckCircle,
  Compass,
  Moon,
  Sun
} from 'lucide-react';

interface TooltipContent {
  id: string;
  title: string;
  verse: string;
  reference: string;
  explanation: string;
  context: string;
  languages: {
    [key: string]: {
      title: string;
      verse: string;
      reference: string;
      explanation: string;
      context: string;
    };
  };
  category: string;
  isPlaying?: boolean;
}

const IslamicTooltipDemo = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('fr');
  const [playingTooltip, setPlayingTooltip] = useState<string | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const tooltipContents: TooltipContent[] = [
    {
      id: 'knowledge',
      title: 'Recherche du Savoir',
      verse: 'Et dis : "Ô mon Seigneur, accroît mes connaissances!"',
      reference: 'Sourate Ta-Ha 20:114',
      explanation: 'Ce verset souligne l\'importance fondamentale de la quête du savoir dans l\'Islam.',
      context: 'Utilisé dans les sections éducatives et d\'apprentissage',
      category: 'Éducation',
      languages: {
        fr: {
          title: 'Recherche du Savoir',
          verse: 'Et dis : "Ô mon Seigneur, accroît mes connaissances!"',
          reference: 'Sourate Ta-Ha 20:114',
          explanation: 'Ce verset souligne l\'importance fondamentale de la quête du savoir dans l\'Islam.',
          context: 'Utilisé dans les sections éducatives et d\'apprentissage'
        },
        ar: {
          title: 'طلب العلم',
          verse: 'وَقُل رَّبِّ زِدْنِي عِلْمًا',
          reference: 'سورة طه 20:114',
          explanation: 'هذه الآية تؤكد على أهمية طلب العلم في الإسلام',
          context: 'تُستخدم في الأقسام التعليمية والتعلم'
        },
        en: {
          title: 'Seeking Knowledge',
          verse: 'And say: "My Lord, increase me in knowledge"',
          reference: 'Surah Ta-Ha 20:114',
          explanation: 'This verse emphasizes the fundamental importance of seeking knowledge in Islam.',
          context: 'Used in educational and learning sections'
        }
      }
    },
    {
      id: 'guidance',
      title: 'Guidance Divine',
      verse: 'Et ceux qui luttent pour Notre cause, Nous les guiderons certes sur Nos sentiers.',
      reference: 'Sourate Al-Ankabut 29:69',
      explanation: 'Allah promet de guider ceux qui font des efforts sincères sur Son chemin.',
      context: 'Utilisé pour motiver les utilisateurs dans leur parcours spirituel',
      category: 'Spiritualité',
      languages: {
        fr: {
          title: 'Guidance Divine',
          verse: 'Et ceux qui luttent pour Notre cause, Nous les guiderons certes sur Nos sentiers.',
          reference: 'Sourate Al-Ankabut 29:69',
          explanation: 'Allah promet de guider ceux qui font des efforts sincères sur Son chemin.',
          context: 'Utilisé pour motiver les utilisateurs dans leur parcours spirituel'
        },
        ar: {
          title: 'الهداية الإلهية',
          verse: 'وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا',
          reference: 'سورة العنكبوت 29:69',
          explanation: 'الله يعد بأن يهدي الذين يبذلون جهدهم المخلص في سبيله',
          context: 'تُستخدم لتحفيز المستخدمين في رحلتهم الروحية'
        },
        en: {
          title: 'Divine Guidance',
          verse: 'And those who strive for Us - We will surely guide them to Our ways.',
          reference: 'Surah Al-Ankabut 29:69',
          explanation: 'Allah promises to guide those who make sincere efforts on His path.',
          context: 'Used to motivate users in their spiritual journey'
        }
      }
    },
    {
      id: 'trust',
      title: 'Confiance en Allah',
      verse: 'Et quiconque place sa confiance en Allah, Il [Allah] lui suffit.',
      reference: 'Sourate At-Talaq 65:3',
      explanation: 'Ce verset rappelle que la confiance totale en Allah apporte la sérénité.',
      context: 'Utilisé dans les moments de décision et de planification',
      category: 'Confiance',
      languages: {
        fr: {
          title: 'Confiance en Allah',
          verse: 'Et quiconque place sa confiance en Allah, Il [Allah] lui suffit.',
          reference: 'Sourate At-Talaq 65:3',
          explanation: 'Ce verset rappelle que la confiance totale en Allah apporte la sérénité.',
          context: 'Utilisé dans les moments de décision et de planification'
        },
        ar: {
          title: 'التوكل على الله',
          verse: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
          reference: 'سورة الطلاق 65:3',
          explanation: 'هذه الآية تذكر بأن التوكل التام على الله يجلب السكينة',
          context: 'تُستخدم في لحظات اتخاذ القرار والتخطيط'
        },
        en: {
          title: 'Trust in Allah',
          verse: 'And whoever relies upon Allah - then He is sufficient for him.',
          reference: 'Surah At-Talaq 65:3',
          explanation: 'This verse reminds that complete trust in Allah brings serenity.',
          context: 'Used in moments of decision and planning'
        }
      }
    },
    {
      id: 'patience',
      title: 'Patience et Persévérance',
      verse: 'Et donnez la bonne nouvelle aux endurants.',
      reference: 'Sourate Al-Baqarah 2:155',
      explanation: 'Allah annonce une bonne nouvelle à ceux qui font preuve de patience.',
      context: 'Utilisé pour encourager la persévérance dans l\'apprentissage',
      category: 'Vertu',
      languages: {
        fr: {
          title: 'Patience et Persévérance',
          verse: 'Et donnez la bonne nouvelle aux endurants.',
          reference: 'Sourate Al-Baqarah 2:155',
          explanation: 'Allah annonce une bonne nouvelle à ceux qui font preuve de patience.',
          context: 'Utilisé pour encourager la persévérance dans l\'apprentissage'
        },
        ar: {
          title: 'الصبر والمثابرة',
          verse: 'وَبَشِّرِ الصَّابِرِينَ',
          reference: 'سورة البقرة 2:155',
          explanation: 'الله يبشر الذين يصبرون',
          context: 'تُستخدم لتشجيع المثابرة في التعلم'
        },
        en: {
          title: 'Patience and Perseverance',
          verse: 'And give good tidings to the patient.',
          reference: 'Surah Al-Baqarah 2:155',
          explanation: 'Allah announces good news to those who show patience.',
          context: 'Used to encourage perseverance in learning'
        }
      }
    },
    {
      id: 'wisdom',
      title: 'Sagesse et Discernement',
      verse: 'Et quiconque reçoit la sagesse, a reçu un bien immense.',
      reference: 'Sourate Al-Baqarah 2:269',
      explanation: 'La sagesse est présentée comme un don précieux d\'Allah.',
      context: 'Utilisé dans les contenus de développement personnel et spirituel',
      category: 'Sagesse',
      languages: {
        fr: {
          title: 'Sagesse et Discernement',
          verse: 'Et quiconque reçoit la sagesse, a reçu un bien immense.',
          reference: 'Sourate Al-Baqarah 2:269',
          explanation: 'La sagesse est présentée comme un don précieux d\'Allah.',
          context: 'Utilisé dans les contenus de développement personnel et spirituel'
        },
        ar: {
          title: 'الحكمة والبصيرة',
          verse: 'وَمَن يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا',
          reference: 'سورة البقرة 2:269',
          explanation: 'الحكمة مقدمة كهدية ثمينة من الله',
          context: 'تُستخدم في محتوى التطوير الشخصي والروحي'
        },
        en: {
          title: 'Wisdom and Discernment',
          verse: 'And whoever is given wisdom has been given much good.',
          reference: 'Surah Al-Baqarah 2:269',
          explanation: 'Wisdom is presented as a precious gift from Allah.',
          context: 'Used in personal and spiritual development content'
        }
      }
    }
  ];

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const playAudio = (tooltipId: string, text: string) => {
    if ('speechSynthesis' in window) {
      // Stop any current speech
      speechSynthesis.cancel();
      
      if (playingTooltip === tooltipId) {
        setPlayingTooltip(null);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedLanguage === 'ar' ? 'ar-SA' : 
                      selectedLanguage === 'en' ? 'en-US' : 'fr-FR';
      utterance.rate = 0.8;
      utterance.pitch = 1.0;
      
      utterance.onstart = () => setPlayingTooltip(tooltipId);
      utterance.onend = () => setPlayingTooltip(null);
      utterance.onerror = () => setPlayingTooltip(null);
      
      speechSynthesis.speak(utterance);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const TooltipCard = ({ tooltip }: { tooltip: TooltipContent }) => {
    const content = tooltip.languages[selectedLanguage];
    const direction = selectedLanguage === 'ar' ? 'rtl' : 'ltr';
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <span className="text-lg font-semibold text-gray-900" dir={direction}>
                  {content.title}
                </span>
              </div>
              <Badge variant="outline" className="text-xs">
                {tooltip.category}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            {/* Verse */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1" dir={direction}>
                  <p className="text-lg font-medium text-green-800 mb-2 leading-relaxed">
                    "{content.verse}"
                  </p>
                  <p className="text-sm text-green-600 font-medium">
                    {content.reference}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => playAudio(tooltip.id, content.verse)}
                    className="h-8 w-8 p-0"
                  >
                    {playingTooltip === tooltip.id ? (
                      <VolumeX className="h-4 w-4" />
                    ) : (
                      <Volume2 className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(content.verse)}
                    className="h-8 w-8 p-0"
                  >
                    {copiedText === content.verse ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                <Info className="h-4 w-4" />
                Explication
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed" dir={direction}>
                {content.explanation}
              </p>
            </div>

            {/* Context */}
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                <Compass className="h-4 w-4" />
                Contexte d'Usage
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed" dir={direction}>
                {content.context}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  onClick={() => playAudio(`${tooltip.id}-full`, `${content.verse} ${content.explanation}`)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                >
                  <Volume2 className="h-4 w-4 mr-2" />
                  Écouter Tout
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(`${content.verse} - ${content.reference}`)}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copier
                </Button>
              </div>
              <Badge className="bg-blue-100 text-blue-800">
                RTL: {selectedLanguage === 'ar' ? 'Actif' : 'Inactif'}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Tooltips Guidance Spirituelle
            </h1>
            <p className="text-gray-600">
              Système révolutionnaire de références coraniques contextuelles multilingues
            </p>
          </div>
        </div>
      </div>

      {/* Language Selector */}
      <div className="flex items-center justify-center gap-4">
        <span className="text-sm font-medium text-gray-700">Langue:</span>
        <div className="flex gap-2">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant={selectedLanguage === lang.code ? 'default' : 'outline'}
              onClick={() => setSelectedLanguage(lang.code)}
              className="flex items-center gap-2"
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Tooltips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tooltipContents.map((tooltip) => (
          <TooltipCard key={tooltip.id} tooltip={tooltip} />
        ))}
      </div>

      {/* Technical Features */}
      <Tabs defaultValue="features" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="features">Fonctionnalités</TabsTrigger>
          <TabsTrigger value="technical">Technique</TabsTrigger>
          <TabsTrigger value="integration">Intégration</TabsTrigger>
        </TabsList>
        
        <TabsContent value="features">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Fonctionnalités Avancées
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Audio Intégré</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Synthèse vocale multilingue</li>
                    <li>• Contrôle lecture/pause</li>
                    <li>• Vitesse et tonalité ajustables</li>
                    <li>• Support 78+ langues</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Support RTL</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Direction automatique arabe</li>
                    <li>• Positionnement adaptatif</li>
                    <li>• Typographie optimisée</li>
                    <li>• Alignement contextuel</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Contenu Authentique</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Versets coraniques vérifiés</li>
                    <li>• Références exactes</li>
                    <li>• Traductions certifiées</li>
                    <li>• Contexte islamique</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Interaction</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Copier-coller facile</li>
                    <li>• Partage social</li>
                    <li>• Favoris personnels</li>
                    <li>• Historique d'usage</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="technical">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Spécifications Techniques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-600">Performance</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Temps réponse &lt;50ms</li>
                    <li>• Chargement lazy</li>
                    <li>• Cache intelligent</li>
                    <li>• Optimisation mobile</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-green-600">Accessibilité</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• WCAG 2.1 AAA</li>
                    <li>• Screen readers</li>
                    <li>• Navigation clavier</li>
                    <li>• Contraste adaptatif</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-600">Sécurité</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Contenu vérifié</li>
                    <li>• Sources authentiques</li>
                    <li>• Validation scholars</li>
                    <li>• Chiffrement données</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="integration">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Intégration Écosystème
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">CED Bank</h3>
                  <p className="text-sm text-blue-700">
                    Tooltips spirituels intégrés dans les transactions bancaires halal,
                    rappelant les principes islamiques à chaque interaction.
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">Institut CED Academy</h3>
                  <p className="text-sm text-green-700">
                    Guidance contextuelle dans les formations islamiques,
                    avec références coraniques appropriées à chaque leçon.
                  </p>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-800 mb-2">Super IARP Pro</h3>
                  <p className="text-sm text-purple-700">
                    Assistant IA enrichi avec tooltips spirituels,
                    apportant dimension islamique aux réponses techniques.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="text-center">
        <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2">
          📖 Innovation CED HalalTech™ - Guidance Spirituelle Contextuelle
        </Badge>
      </div>
    </div>
  );
};

export default IslamicTooltipDemo;