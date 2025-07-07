import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HelpCircle, BookOpen, Globe, Star, Volume2, Info } from 'lucide-react';

const InteractiveCulturalLearningTooltips = () => {
  const [selectedCategory, setSelectedCategory] = useState('islamic-terms');
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [learnedTerms, setLearnedTerms] = useState<string[]>([]);
  const [audioEnabled, setAudioEnabled] = useState(true);

  // Base de données complète de termes culturels islamiques
  const culturalDatabase = {
    'islamic-terms': {
      title: "Termes Islamiques Fondamentaux",
      color: "bg-emerald-500",
      icon: <Star className="w-5 h-5" />,
      terms: {
        'insha-allah': {
          arabic: 'إِنْ شَاءَ اللَّهُ',
          transliteration: 'In sha Allah',
          translation: 'Si Dieu le veut',
          explanation: 'Expression utilisée quand on parle d\'un projet futur, montrant notre dépendance à la volonté d\'Allah',
          usage: 'Je viendrai demain, in sha Allah',
          context: 'Utilisé pour tout plan futur',
          pronunciation: '/in.ʃaː.ʔal.laːh/',
          references: ['Coran 18:23-24']
        },
        'masha-allah': {
          arabic: 'مَا شَاءَ اللَّهُ',
          transliteration: 'Ma sha Allah',
          translation: 'Ce qu\'Allah a voulu',
          explanation: 'Expression d\'admiration et de protection contre le mauvais œil',
          usage: 'Masha Allah, ton enfant est très intelligent',
          context: 'Compliment, admiration',
          pronunciation: '/maː.ʃaː.ʔal.laːh/',
          references: ['Coran 18:39']
        },
        'barakallahu-feek': {
          arabic: 'بَارَكَ اللَّهُ فِيكَ',
          transliteration: 'Barakallahu feek',
          translation: 'Qu\'Allah te bénisse',
          explanation: 'Invocation de bénédiction pour remercier quelqu\'un',
          usage: 'Barakallahu feek pour ton aide',
          context: 'Remerciement islamique',
          pronunciation: '/ba.ra.kal.laː.hu.fiːk/',
          references: ['Tradition prophétique']
        },
        'subhan-allah': {
          arabic: 'سُبْحَانَ اللَّهِ',
          transliteration: 'Subhan Allah',
          translation: 'Gloire à Allah',
          explanation: 'Expression d\'étonnement et de glorification d\'Allah',
          usage: 'Subhan Allah, quelle beauté dans la création!',
          context: 'Émerveillement, surprise',
          pronunciation: '/sub.ħaː.nal.laːh/',
          references: ['Coran - multiple mentions']
        },
        'alhamdulillah': {
          arabic: 'الْحَمْدُ لِلَّهِ',
          transliteration: 'Alhamdulillah',
          translation: 'Louange à Allah',
          explanation: 'Expression de gratitude envers Allah dans toute situation',
          usage: 'Alhamdulillah, tout va bien',
          context: 'Gratitude, satisfaction',
          pronunciation: '/al.ħam.du.lil.laːh/',
          references: ['Coran 1:2']
        }
      }
    },
    'worship-terms': {
      title: "Termes de Culte et Prière",
      color: "bg-purple-500",
      icon: <BookOpen className="w-5 h-5" />,
      terms: {
        'salah': {
          arabic: 'صَلَاة',
          transliteration: 'Salah',
          translation: 'Prière',
          explanation: 'Les cinq prières quotidiennes obligatoires en Islam',
          usage: 'Il est temps de faire la salah',
          context: 'Deuxième pilier de l\'Islam',
          pronunciation: '/sa.laːh/',
          references: ['Coran 2:43', 'Coran 4:103']
        },
        'wudu': {
          arabic: 'وُضُوء',
          transliteration: 'Wudu',
          translation: 'Ablutions',
          explanation: 'Purification rituelle avant la prière',
          usage: 'Je dois faire mes wudu avant la prière',
          context: 'Purification obligatoire',
          pronunciation: '/wu.duːʔ/',
          references: ['Coran 5:6']
        },
        'qibla': {
          arabic: 'قِبْلَة',
          transliteration: 'Qibla',
          translation: 'Direction de la Mecque',
          explanation: 'Direction vers laquelle les musulmans se tournent pour prier',
          usage: 'Où est la qibla dans cette salle?',
          context: 'Orientation pour la prière',
          pronunciation: '/qib.lah/',
          references: ['Coran 2:144']
        },
        'takbir': {
          arabic: 'تَكْبِير',
          transliteration: 'Takbir',
          translation: 'Glorification',
          explanation: 'Dire "Allahu Akbar" pour débuter la prière',
          usage: 'Le takbir ouvre chaque unité de prière',
          context: 'Début de prière',
          pronunciation: '/tak.biːr/',
          references: ['Tradition prophétique']
        },
        'sujud': {
          arabic: 'سُجُود',
          transliteration: 'Sujud',
          translation: 'Prosternation',
          explanation: 'Position de prosternation dans la prière, marque d\'humilité',
          usage: 'Le sujud est la position la plus proche d\'Allah',
          context: 'Position de prière',
          pronunciation: '/su.juːd/',
          references: ['Coran 96:19', 'Hadith Sahih']
        }
      }
    },
    'social-etiquette': {
      title: "Étiquette et Salutations",
      color: "bg-blue-500",
      icon: <Globe className="w-5 h-5" />,
      terms: {
        'assalamu-alaikum': {
          arabic: 'السَّلَامُ عَلَيْكُمْ',
          transliteration: 'As-salamu alaikum',
          translation: 'Que la paix soit sur vous',
          explanation: 'Salutation islamique universelle',
          usage: 'As-salamu alaikum wa rahmatullahi wa barakatuh',
          context: 'Salutation d\'entrée',
          pronunciation: '/as.sa.laː.mu.ʕa.lay.kum/',
          references: ['Coran 24:61', 'Hadith Sahih']
        },
        'wa-alaikum-salam': {
          arabic: 'وَعَلَيْكُمُ السَّلَام',
          transliteration: 'Wa alaikum as-salam',
          translation: 'Et sur vous la paix',
          explanation: 'Réponse à la salutation islamique',
          usage: 'Wa alaikum as-salam wa rahmatullahi wa barakatuh',
          context: 'Réponse à salutation',
          pronunciation: '/wa.ʕa.lay.kum.as.sa.laːm/',
          references: ['Coran 4:86']
        },
        'jazakallahu-khairan': {
          arabic: 'جَزَاكَ اللَّهُ خَيْرًا',
          transliteration: 'Jazakallahu khairan',
          translation: 'Qu\'Allah te récompense en bien',
          explanation: 'Remerciement islamique complet',
          usage: 'Jazakallahu khairan pour ton aide',
          context: 'Remerciement formel',
          pronunciation: '/ja.za.kal.laː.hu.khay.ran/',
          references: ['Tradition prophétique']
        },
        'bismillah': {
          arabic: 'بِسْمِ اللَّهِ',
          transliteration: 'Bismillah',
          translation: 'Au nom d\'Allah',
          explanation: 'Invocation de commencement pour toute action',
          usage: 'Bismillah avant de manger',
          context: 'Début d\'action',
          pronunciation: '/bis.mil.laːh/',
          references: ['Coran 1:1']
        },
        'fi-amanillah': {
          arabic: 'فِي أَمَانِ اللَّهِ',
          transliteration: 'Fi amanillah',
          translation: 'Sous la protection d\'Allah',
          explanation: 'Formule d\'au revoir confiant la personne à Allah',
          usage: 'Fi amanillah, à bientôt!',
          context: 'Séparation, au revoir',
          pronunciation: '/fiː.ʔa.maː.nil.laːh/',
          references: ['Tradition islamique']
        }
      }
    },
    'spiritual-concepts': {
      title: "Concepts Spirituels Avancés",
      color: "bg-indigo-500",
      icon: <HelpCircle className="w-5 h-5" />,
      terms: {
        'taqwa': {
          arabic: 'تَقْوَى',
          transliteration: 'Taqwa',
          translation: 'Piété consciente',
          explanation: 'Conscience constante d\'Allah menant à éviter le péché',
          usage: 'Développer sa taqwa est l\'objectif de chaque musulman',
          context: 'Développement spirituel',
          pronunciation: '/taq.waː/',
          references: ['Coran 2:197', 'Coran 49:13']
        },
        'ihsan': {
          arabic: 'إِحْسَان',
          transliteration: 'Ihsan',
          translation: 'Excellence spirituelle',
          explanation: 'Adorer Allah comme si tu Le vois, car même si tu ne Le vois pas, Lui te voit',
          usage: 'L\'ihsan est le plus haut niveau de foi',
          context: 'Perfection spirituelle',
          pronunciation: '/ʔiħ.saːn/',
          references: ['Hadith Jibril']
        },
        'sabr': {
          arabic: 'صَبْر',
          transliteration: 'Sabr',
          translation: 'Patience endurante',
          explanation: 'Patience active face aux épreuves, avec confiance en Allah',
          usage: 'Avoir du sabr dans l\'adversité',
          context: 'Vertu lors d\'épreuves',
          pronunciation: '/sabr/',
          references: ['Coran 2:155', 'Coran 39:10']
        },
        'tawakkul': {
          arabic: 'تَوَكُّل',
          transliteration: 'Tawakkul',
          translation: 'Confiance en Allah',
          explanation: 'S\'en remettre totalement à Allah après avoir fait les causes',
          usage: 'Avoir tawakkul après avoir planifié',
          context: 'Relation à Allah',
          pronunciation: '/ta.wak.kul/',
          references: ['Coran 65:3', 'Coran 25:58']
        },
        'barakah': {
          arabic: 'بَرَكَة',
          transliteration: 'Barakah',
          translation: 'Bénédiction divine',
          explanation: 'Bénédiction d\'Allah qui multiplie le bien dans quelque chose',
          usage: 'Cette nourriture a de la barakah',
          context: 'Bénédiction divine',
          pronunciation: '/ba.ra.kah/',
          references: ['Coran 7:96', 'Tradition prophétique']
        }
      }
    }
  };

  const currentCategory = culturalDatabase[selectedCategory as keyof typeof culturalDatabase];

  const playAudio = (text: string) => {
    if (audioEnabled && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const markAsLearned = (termId: string) => {
    if (!learnedTerms.includes(termId)) {
      setLearnedTerms([...learnedTerms, termId]);
    }
  };

  const TooltipWrapper = ({ 
    termId, 
    children, 
    term 
  }: { 
    termId: string; 
    children: React.ReactNode; 
    term: any;
  }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
      <div 
        className="relative inline-block"
        onMouseEnter={() => {
          setShowTooltip(true);
          setHoveredElement(termId);
        }}
        onMouseLeave={() => {
          setShowTooltip(false);
          setHoveredElement(null);
        }}
      >
        {children}
        
        {showTooltip && (
          <div className="absolute z-50 w-80 p-4 bg-white border-2 border-blue-200 rounded-lg shadow-xl bottom-full left-1/2 transform -translate-x-1/2 mb-2">
            <div className="space-y-3">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-lg text-blue-700">{term.transliteration}</h4>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => playAudio(term.arabic)}
                  className="h-8 w-8 p-0"
                >
                  <Volume2 className="w-4 h-4" />
                </Button>
              </div>

              {/* Arabic and Translation */}
              <div className="text-center bg-blue-50 p-3 rounded-lg">
                <div className="text-2xl font-bold mb-2 text-blue-800" dir="rtl">
                  {term.arabic}
                </div>
                <div className="text-sm text-blue-600 mb-1">
                  Prononciation: {term.pronunciation}
                </div>
                <div className="font-medium text-blue-700">
                  {term.translation}
                </div>
              </div>

              {/* Explanation */}
              <div className="bg-gray-50 p-3 rounded-lg">
                <h5 className="font-medium text-gray-800 mb-2">Explication:</h5>
                <p className="text-sm text-gray-700">{term.explanation}</p>
              </div>

              {/* Usage Example */}
              <div className="bg-green-50 p-3 rounded-lg">
                <h5 className="font-medium text-green-800 mb-2">Exemple d'usage:</h5>
                <p className="text-sm text-green-700 italic">"{term.usage}"</p>
              </div>

              {/* Context */}
              <div className="bg-yellow-50 p-3 rounded-lg">
                <h5 className="font-medium text-yellow-800 mb-2">Contexte:</h5>
                <p className="text-sm text-yellow-700">{term.context}</p>
              </div>

              {/* References */}
              {term.references && (
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h5 className="font-medium text-purple-800 mb-2">Références:</h5>
                  <div className="text-sm text-purple-700">
                    {term.references.map((ref: string, index: number) => (
                      <span key={index} className="block">{ref}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Button */}
              <Button
                onClick={() => markAsLearned(termId)}
                className={`w-full ${
                  learnedTerms.includes(termId) 
                    ? 'bg-green-500 hover:bg-green-600' 
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {learnedTerms.includes(termId) ? '✅ Maîtrisé' : '📚 Marquer comme Appris'}
              </Button>
            </div>

            {/* Tooltip Arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-200"></div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            📚 Interactive Cultural Learning Tooltips
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Apprentissage culturel islamique interactif avec tooltips intelligents
          </p>
          <p className="text-sm text-gray-500">
            "وَقُل رَّبِّ زِدْنِي عِلْمًا" - "Et dis : Ô mon Seigneur, accroissez mes connaissances"
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-xl">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">{learnedTerms.length}</div>
                <div className="text-sm opacity-90">Termes Maîtrisés</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">
                  {Object.values(culturalDatabase).reduce((sum, cat) => sum + Object.keys(cat.terms).length, 0)}
                </div>
                <div className="text-sm opacity-90">Termes Disponibles</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">
                  {Math.round((learnedTerms.length / Object.values(culturalDatabase).reduce((sum, cat) => sum + Object.keys(cat.terms).length, 0)) * 100)}%
                </div>
                <div className="text-sm opacity-90">Progression</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings */}
        <Card className="mb-8 bg-white shadow-lg border-2 border-indigo-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5" />
              Paramètres d'Apprentissage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Button
                variant={audioEnabled ? "default" : "outline"}
                onClick={() => setAudioEnabled(!audioEnabled)}
                className="flex items-center gap-2"
              >
                <Volume2 className="w-4 h-4" />
                {audioEnabled ? 'Audio Activé' : 'Audio Désactivé'}
              </Button>
              <span className="text-sm text-gray-600">
                Cliquez sur les termes surlignés pour voir les tooltips détaillés
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Category Selector */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {Object.entries(culturalDatabase).map(([key, category]) => (
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

        {/* Interactive Learning Content */}
        <Card className="bg-white shadow-lg border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${currentCategory.color} text-white`}>
                {currentCategory.icon}
              </div>
              {currentCategory.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800">
                Texte d'Exemple avec Tooltips Interactifs
              </h3>
              <div className="text-lg leading-relaxed text-gray-700 space-y-4">
                {selectedCategory === 'islamic-terms' && (
                  <>
                    <p>
                      Chaque musulman commence sa journée en disant{' '}
                      <TooltipWrapper termId="bismillah" term={currentCategory.terms.bismillah}>
                        <span className="bg-blue-200 px-2 py-1 rounded cursor-help hover:bg-blue-300 transition-colors">
                          <strong>Bismillah</strong>
                        </span>
                      </TooltipWrapper>
                      , puis exprime sa gratitude avec{' '}
                      <TooltipWrapper termId="alhamdulillah" term={currentCategory.terms.alhamdulillah}>
                        <span className="bg-green-200 px-2 py-1 rounded cursor-help hover:bg-green-300 transition-colors">
                          <strong>Alhamdulillah</strong>
                        </span>
                      </TooltipWrapper>
                      .
                    </p>
                    <p>
                      Quand nous planifions quelque chose, nous disons{' '}
                      <TooltipWrapper termId="insha-allah" term={currentCategory.terms['insha-allah']}>
                        <span className="bg-purple-200 px-2 py-1 rounded cursor-help hover:bg-purple-300 transition-colors">
                          <strong>In sha Allah</strong>
                        </span>
                      </TooltipWrapper>
                      , et quand nous admirons quelque chose, nous exprimons{' '}
                      <TooltipWrapper termId="masha-allah" term={currentCategory.terms['masha-allah']}>
                        <span className="bg-yellow-200 px-2 py-1 rounded cursor-help hover:bg-yellow-300 transition-colors">
                          <strong>Masha Allah</strong>
                        </span>
                      </TooltipWrapper>
                      .
                    </p>
                  </>
                )}

                {selectedCategory === 'worship-terms' && (
                  <>
                    <p>
                      Avant d'accomplir la{' '}
                      <TooltipWrapper termId="salah" term={currentCategory.terms.salah}>
                        <span className="bg-emerald-200 px-2 py-1 rounded cursor-help hover:bg-emerald-300 transition-colors">
                          <strong>Salah</strong>
                        </span>
                      </TooltipWrapper>
                      , nous devons faire nos{' '}
                      <TooltipWrapper termId="wudu" term={currentCategory.terms.wudu}>
                        <span className="bg-blue-200 px-2 py-1 rounded cursor-help hover:bg-blue-300 transition-colors">
                          <strong>Wudu</strong>
                        </span>
                      </TooltipWrapper>
                      .
                    </p>
                    <p>
                      Nous nous orientons vers la{' '}
                      <TooltipWrapper termId="qibla" term={currentCategory.terms.qibla}>
                        <span className="bg-orange-200 px-2 py-1 rounded cursor-help hover:bg-orange-300 transition-colors">
                          <strong>Qibla</strong>
                        </span>
                      </TooltipWrapper>
                      , commençons par le{' '}
                      <TooltipWrapper termId="takbir" term={currentCategory.terms.takbir}>
                        <span className="bg-red-200 px-2 py-1 rounded cursor-help hover:bg-red-300 transition-colors">
                          <strong>Takbir</strong>
                        </span>
                      </TooltipWrapper>
                      , et nous prosternons en{' '}
                      <TooltipWrapper termId="sujud" term={currentCategory.terms.sujud}>
                        <span className="bg-purple-200 px-2 py-1 rounded cursor-help hover:bg-purple-300 transition-colors">
                          <strong>Sujud</strong>
                        </span>
                      </TooltipWrapper>
                      .
                    </p>
                  </>
                )}

                {selectedCategory === 'social-etiquette' && (
                  <>
                    <p>
                      Nous nous saluons avec{' '}
                      <TooltipWrapper termId="assalamu-alaikum" term={currentCategory.terms['assalamu-alaikum']}>
                        <span className="bg-green-200 px-2 py-1 rounded cursor-help hover:bg-green-300 transition-colors">
                          <strong>As-salamu alaikum</strong>
                        </span>
                      </TooltipWrapper>
                      {' '}et répondons{' '}
                      <TooltipWrapper termId="wa-alaikum-salam" term={currentCategory.terms['wa-alaikum-salam']}>
                        <span className="bg-blue-200 px-2 py-1 rounded cursor-help hover:bg-blue-300 transition-colors">
                          <strong>Wa alaikum as-salam</strong>
                        </span>
                      </TooltipWrapper>
                      .
                    </p>
                    <p>
                      Pour remercier, nous disons{' '}
                      <TooltipWrapper termId="jazakallahu-khairan" term={currentCategory.terms['jazakallahu-khairan']}>
                        <span className="bg-yellow-200 px-2 py-1 rounded cursor-help hover:bg-yellow-300 transition-colors">
                          <strong>Jazakallahu khairan</strong>
                        </span>
                      </TooltipWrapper>
                      {' '}et nous séparons avec{' '}
                      <TooltipWrapper termId="fi-amanillah" term={currentCategory.terms['fi-amanillah']}>
                        <span className="bg-purple-200 px-2 py-1 rounded cursor-help hover:bg-purple-300 transition-colors">
                          <strong>Fi amanillah</strong>
                        </span>
                      </TooltipWrapper>
                      .
                    </p>
                  </>
                )}

                {selectedCategory === 'spiritual-concepts' && (
                  <>
                    <p>
                      Le développement de la{' '}
                      <TooltipWrapper termId="taqwa" term={currentCategory.terms.taqwa}>
                        <span className="bg-indigo-200 px-2 py-1 rounded cursor-help hover:bg-indigo-300 transition-colors">
                          <strong>Taqwa</strong>
                        </span>
                      </TooltipWrapper>
                      {' '}nous mène vers l'{' '}
                      <TooltipWrapper termId="ihsan" term={currentCategory.terms.ihsan}>
                        <span className="bg-pink-200 px-2 py-1 rounded cursor-help hover:bg-pink-300 transition-colors">
                          <strong>Ihsan</strong>
                        </span>
                      </TooltipWrapper>
                      .
                    </p>
                    <p>
                      Dans les épreuves, nous pratiquons le{' '}
                      <TooltipWrapper termId="sabr" term={currentCategory.terms.sabr}>
                        <span className="bg-orange-200 px-2 py-1 rounded cursor-help hover:bg-orange-300 transition-colors">
                          <strong>Sabr</strong>
                        </span>
                      </TooltipWrapper>
                      {' '}et maintenons notre{' '}
                      <TooltipWrapper termId="tawakkul" term={currentCategory.terms.tawakkul}>
                        <span className="bg-teal-200 px-2 py-1 rounded cursor-help hover:bg-teal-300 transition-colors">
                          <strong>Tawakkul</strong>
                        </span>
                      </TooltipWrapper>
                      {' '}en Allah, recherchant Sa{' '}
                      <TooltipWrapper termId="barakah" term={currentCategory.terms.barakah}>
                        <span className="bg-emerald-200 px-2 py-1 rounded cursor-help hover:bg-emerald-300 transition-colors">
                          <strong>Barakah</strong>
                        </span>
                      </TooltipWrapper>
                      .
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Learning Progress */}
            <div className="text-center">
              <h4 className="text-lg font-medium mb-4">Progression dans cette catégorie</h4>
              <div className="max-w-md mx-auto">
                <div className="flex justify-between text-sm mb-2">
                  <span>Termes maîtrisés</span>
                  <span>
                    {Object.keys(currentCategory.terms).filter(termId => learnedTerms.includes(termId)).length} / {Object.keys(currentCategory.terms).length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${currentCategory.color} transition-all duration-300`}
                    style={{
                      width: `${(Object.keys(currentCategory.terms).filter(termId => learnedTerms.includes(termId)).length / Object.keys(currentCategory.terms).length) * 100}%`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="mt-8 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-2">Comment utiliser les tooltips</h3>
            <p className="text-sm opacity-90 mb-4">
              Survolez les termes surlignés pour découvrir leurs significations complètes, 
              écouter la prononciation et comprendre leur usage contextuel
            </p>
            <p className="text-xs opacity-75">
              "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ" - "Chercher la connaissance est une obligation pour chaque musulman"
            </p>
          </CardContent>
        </Card>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>© 2025 Club Empreinte Digitale - Yakoubi Yamina | CED HalalTech™</p>
          <p>Interactive Cultural Learning Tooltips - 100% Conforme Coran & Sunna</p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCulturalLearningTooltips;