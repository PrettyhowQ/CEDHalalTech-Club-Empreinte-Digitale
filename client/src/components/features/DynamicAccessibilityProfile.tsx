import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { 
  Eye, 
  Ear, 
  Brain, 
  Hand, 
  Heart,
  Settings,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Zap,
  Focus,
  Palette,
  Type,
  MousePointer,
  Keyboard,
  Monitor,
  Headphones,
  MoreHorizontal,
  CheckCircle,
  AlertCircle,
  Info,
  Shield,
  User,
  Star
} from 'lucide-react';

interface AccessibilityNeed {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: 'vision' | 'hearing' | 'motor' | 'cognitive' | 'sensory';
  severity: 'mild' | 'moderate' | 'severe';
  adaptations: string[];
  islamic_considerations: string[];
}

interface AccessibilityProfile {
  user_id: string;
  needs: AccessibilityNeed[];
  preferences: {
    font_size: number;
    contrast: 'normal' | 'high' | 'inverted';
    color_scheme: 'default' | 'protanopia' | 'deuteranopia' | 'tritanopia';
    motion_reduced: boolean;
    audio_descriptions: boolean;
    keyboard_navigation: boolean;
    screen_reader: boolean;
    voice_commands: boolean;
    prayer_mode: boolean;
    islamic_ui: boolean;
    rtl_support: boolean;
  };
  adaptive_features: {
    auto_pause_prayer: boolean;
    high_contrast_mode: boolean;
    large_text_mode: boolean;
    simplified_interface: boolean;
    voice_feedback: boolean;
    haptic_feedback: boolean;
    gesture_controls: boolean;
    eye_tracking: boolean;
  };
}

const DynamicAccessibilityProfile = () => {
  const [currentProfile, setCurrentProfile] = useState<AccessibilityProfile>({
    user_id: 'user_001',
    needs: [],
    preferences: {
      font_size: 16,
      contrast: 'normal',
      color_scheme: 'default',
      motion_reduced: false,
      audio_descriptions: false,
      keyboard_navigation: true,
      screen_reader: false,
      voice_commands: false,
      prayer_mode: true,
      islamic_ui: true,
      rtl_support: false
    },
    adaptive_features: {
      auto_pause_prayer: true,
      high_contrast_mode: false,
      large_text_mode: false,
      simplified_interface: false,
      voice_feedback: false,
      haptic_feedback: false,
      gesture_controls: false,
      eye_tracking: false
    }
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isAssessing, setIsAssessing] = useState(false);
  const [assessmentStep, setAssessmentStep] = useState(0);

  const accessibilityNeeds: AccessibilityNeed[] = [
    {
      id: 'visual_impairment',
      name: 'Déficience visuelle',
      description: 'Difficulté à voir ou cécité complète',
      icon: <Eye className="w-5 h-5" />,
      category: 'vision',
      severity: 'moderate',
      adaptations: ['Lecteur d\'écran', 'Texte large', 'Contraste élevé', 'Navigation clavier'],
      islamic_considerations: ['Audio Coran', 'Descriptions vocales prières', 'Guidance Qibla audio']
    },
    {
      id: 'hearing_impairment',
      name: 'Déficience auditive',
      description: 'Difficulté à entendre ou surdité',
      icon: <Ear className="w-5 h-5" />,
      category: 'hearing',
      severity: 'moderate',
      adaptations: ['Sous-titres', 'Signaux visuels', 'Vibrations', 'Transcription temps réel'],
      islamic_considerations: ['Sous-titres prières', 'Alertes visuelles Adhan', 'Rappels lumineux']
    },
    {
      id: 'motor_impairment',
      name: 'Déficience motrice',
      description: 'Difficulté à utiliser les mains ou bras',
      icon: <Hand className="w-5 h-5" />,
      category: 'motor',
      severity: 'mild',
      adaptations: ['Commandes vocales', 'Eye-tracking', 'Boutons plus grands', 'Gestes simplifiés'],
      islamic_considerations: ['Prières adaptées', 'Qibla automatique', 'Tasbih digital']
    },
    {
      id: 'cognitive_impairment',
      name: 'Déficience cognitive',
      description: 'Difficultés de concentration, mémoire ou apprentissage',
      icon: <Brain className="w-5 h-5" />,
      category: 'cognitive',
      severity: 'mild',
      adaptations: ['Interface simplifiée', 'Rappels', 'Navigation claire', 'Temps étendu'],
      islamic_considerations: ['Rappels prières', 'Coran simplifié', 'Guidance étape par étape']
    },
    {
      id: 'autism_spectrum',
      name: 'Trouble du spectre autistique',
      description: 'Sensibilité sensorielle et préférences de routine',
      icon: <Heart className="w-5 h-5" />,
      category: 'sensory',
      severity: 'moderate',
      adaptations: ['Réduction animations', 'Couleurs apaisantes', 'Routines prévisibles', 'Choix sensoriels'],
      islamic_considerations: ['Horaires prières fixes', 'Ambiance calme', 'Routine spirituelle']
    },
    {
      id: 'color_blindness',
      name: 'Daltonisme',
      description: 'Difficulté à distinguer certaines couleurs',
      icon: <Palette className="w-5 h-5" />,
      category: 'vision',
      severity: 'mild',
      adaptations: ['Palettes adaptées', 'Motifs distinctifs', 'Étiquettes texte', 'Indicateurs non-couleur'],
      islamic_considerations: ['Qibla avec motifs', 'Calendrier accessible', 'Codes visuels alternatifs']
    },
    {
      id: 'dyslexia',
      name: 'Dyslexie',
      description: 'Difficulté de lecture et traitement du texte',
      icon: <Type className="w-5 h-5" />,
      category: 'cognitive',
      severity: 'moderate',
      adaptations: ['Police dyslexie', 'Espacement lignes', 'Lecture audio', 'Surlignage'],
      islamic_considerations: ['Coran audio', 'Traduction vocale', 'Apprentissage adapté']
    }
  ];

  const assessmentQuestions = [
    {
      question: "Avez-vous des difficultés pour voir l'écran ou lire du texte ?",
      category: 'vision',
      adaptations: ['large_text_mode', 'high_contrast_mode', 'screen_reader']
    },
    {
      question: "Avez-vous des difficultés pour entendre les sons ou notifications ?",
      category: 'hearing',
      adaptations: ['audio_descriptions', 'haptic_feedback']
    },
    {
      question: "Avez-vous des difficultés pour utiliser la souris ou le clavier ?",
      category: 'motor',
      adaptations: ['voice_commands', 'gesture_controls', 'keyboard_navigation']
    },
    {
      question: "Préférez-vous une interface simplifiée avec moins d'éléments ?",
      category: 'cognitive',
      adaptations: ['simplified_interface', 'motion_reduced']
    },
    {
      question: "Souhaitez-vous des fonctionnalités spécifiques pour la pratique religieuse ?",
      category: 'islamic',
      adaptations: ['prayer_mode', 'auto_pause_prayer', 'rtl_support']
    }
  ];

  const handleNeedToggle = (needId: string) => {
    setCurrentProfile(prev => ({
      ...prev,
      needs: prev.needs.some(n => n.id === needId)
        ? prev.needs.filter(n => n.id !== needId)
        : [...prev.needs, accessibilityNeeds.find(n => n.id === needId)!]
    }));
  };

  const handlePreferenceChange = (key: string, value: any) => {
    setCurrentProfile(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [key]: value
      }
    }));
  };

  const handleFeatureToggle = (feature: string) => {
    setCurrentProfile(prev => ({
      ...prev,
      adaptive_features: {
        ...prev.adaptive_features,
        [feature]: !prev.adaptive_features[feature as keyof typeof prev.adaptive_features]
      }
    }));
  };

  const startAssessment = () => {
    setIsAssessing(true);
    setAssessmentStep(0);
  };

  const nextAssessmentStep = (answer: boolean) => {
    if (answer) {
      const question = assessmentQuestions[assessmentStep];
      question.adaptations.forEach(adaptation => {
        if (adaptation in currentProfile.adaptive_features) {
          handleFeatureToggle(adaptation);
        }
      });
    }
    
    if (assessmentStep < assessmentQuestions.length - 1) {
      setAssessmentStep(prev => prev + 1);
    } else {
      setIsAssessing(false);
    }
  };

  const getContrastClass = () => {
    switch (currentProfile.preferences.contrast) {
      case 'high': return 'contrast-125 saturate-150';
      case 'inverted': return 'invert hue-rotate-180';
      default: return '';
    }
  };

  const getFontSizeClass = () => {
    if (currentProfile.preferences.font_size >= 20) return 'text-lg';
    if (currentProfile.preferences.font_size >= 18) return 'text-base';
    return 'text-sm';
  };

  const filteredNeeds = selectedCategory === 'all' 
    ? accessibilityNeeds 
    : accessibilityNeeds.filter(need => need.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'Tous', icon: <User className="w-4 h-4" /> },
    { id: 'vision', label: 'Vision', icon: <Eye className="w-4 h-4" /> },
    { id: 'hearing', label: 'Audition', icon: <Ear className="w-4 h-4" /> },
    { id: 'motor', label: 'Motricité', icon: <Hand className="w-4 h-4" /> },
    { id: 'cognitive', label: 'Cognitif', icon: <Brain className="w-4 h-4" /> },
    { id: 'sensory', label: 'Sensoriel', icon: <Heart className="w-4 h-4" /> }
  ];

  return (
    <div className={`max-w-6xl mx-auto p-6 ${getContrastClass()}`}>
      {/* Assessment Modal */}
      {isAssessing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="max-w-lg w-full mx-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Évaluation d'Accessibilité
              </CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  Question {assessmentStep + 1} sur {assessmentQuestions.length}
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{ width: `${((assessmentStep + 1) / assessmentQuestions.length) * 100}%` }}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-lg">
                  {assessmentQuestions[assessmentStep].question}
                </p>
                <div className="flex gap-4">
                  <Button 
                    onClick={() => nextAssessmentStep(true)}
                    className="flex-1"
                  >
                    Oui
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => nextAssessmentStep(false)}
                    className="flex-1"
                  >
                    Non
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className={`text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 ${getFontSizeClass()}`}>
          🔧 Générateur de Profil d'Accessibilité Dynamique
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Créez un profil d'accessibilité personnalisé respectant vos besoins spécifiques 
          et vos valeurs islamiques pour une expérience optimale
        </p>
      </div>

      {/* Quick Assessment */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5" />
            Évaluation Rapide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">
                Répondez à 5 questions pour générer automatiquement votre profil d'accessibilité
              </p>
              <Badge variant="outline" className="text-xs">
                🕌 Respectueux des valeurs islamiques
              </Badge>
            </div>
            <Button onClick={startAssessment} className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Commencer l'évaluation
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Needs Selection */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Besoins d'Accessibilité
              </CardTitle>
              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-1"
                  >
                    {category.icon}
                    {category.label}
                  </Button>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredNeeds.map(need => (
                  <Card 
                    key={need.id} 
                    className={`cursor-pointer transition-all ${
                      currentProfile.needs.some(n => n.id === need.id)
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'hover:border-gray-300'
                    }`}
                    onClick={() => handleNeedToggle(need.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-100 rounded-full">
                          {need.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold">{need.name}</h3>
                            <Badge variant="outline" className="text-xs">
                              {need.severity}
                            </Badge>
                            {currentProfile.needs.some(n => n.id === need.id) && (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{need.description}</p>
                          
                          <div className="space-y-2">
                            <div>
                              <p className="text-xs font-medium text-gray-700">Adaptations:</p>
                              <div className="flex flex-wrap gap-1">
                                {need.adaptations.map(adaptation => (
                                  <Badge key={adaptation} variant="secondary" className="text-xs">
                                    {adaptation}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <p className="text-xs font-medium text-green-700">Considérations islamiques:</p>
                              <div className="flex flex-wrap gap-1">
                                {need.islamic_considerations.map(consideration => (
                                  <Badge key={consideration} variant="outline" className="text-xs border-green-200 text-green-700">
                                    🕌 {consideration}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Settings Panel */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Préférences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Taille de police: {currentProfile.preferences.font_size}px
                </label>
                <Slider
                  value={[currentProfile.preferences.font_size]}
                  onValueChange={(value) => handlePreferenceChange('font_size', value[0])}
                  max={24}
                  min={12}
                  step={1}
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Contraste</label>
                <select 
                  value={currentProfile.preferences.contrast}
                  onChange={(e) => handlePreferenceChange('contrast', e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="normal">Normal</option>
                  <option value="high">Élevé</option>
                  <option value="inverted">Inversé</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Daltonisme</label>
                <select 
                  value={currentProfile.preferences.color_scheme}
                  onChange={(e) => handlePreferenceChange('color_scheme', e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="default">Défaut</option>
                  <option value="protanopia">Protanopie</option>
                  <option value="deuteranopia">Deutéranopie</option>
                  <option value="tritanopia">Tritanopie</option>
                </select>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Réduction d'animations</span>
                  <Switch
                    checked={currentProfile.preferences.motion_reduced}
                    onCheckedChange={(checked) => handlePreferenceChange('motion_reduced', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Descriptions audio</span>
                  <Switch
                    checked={currentProfile.preferences.audio_descriptions}
                    onCheckedChange={(checked) => handlePreferenceChange('audio_descriptions', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Navigation clavier</span>
                  <Switch
                    checked={currentProfile.preferences.keyboard_navigation}
                    onCheckedChange={(checked) => handlePreferenceChange('keyboard_navigation', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Lecteur d'écran</span>
                  <Switch
                    checked={currentProfile.preferences.screen_reader}
                    onCheckedChange={(checked) => handlePreferenceChange('screen_reader', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Fonctionnalités Islamiques
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Mode prière</span>
                <Switch
                  checked={currentProfile.preferences.prayer_mode}
                  onCheckedChange={(checked) => handlePreferenceChange('prayer_mode', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Interface islamique</span>
                <Switch
                  checked={currentProfile.preferences.islamic_ui}
                  onCheckedChange={(checked) => handlePreferenceChange('islamic_ui', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Support RTL (Arabe)</span>
                <Switch
                  checked={currentProfile.preferences.rtl_support}
                  onCheckedChange={(checked) => handlePreferenceChange('rtl_support', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Pause auto prière</span>
                <Switch
                  checked={currentProfile.adaptive_features.auto_pause_prayer}
                  onCheckedChange={() => handleFeatureToggle('auto_pause_prayer')}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Preview Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="w-5 h-5" />
            Aperçu de l'Interface Adaptée
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className={`p-6 border rounded-lg ${getContrastClass()}`}>
            <div className="space-y-4">
              <h2 className={`font-bold ${getFontSizeClass()}`}>
                {currentProfile.preferences.islamic_ui ? '🕌 ' : ''}
                Bienvenue dans CED HalalTech™
              </h2>
              
              <p className={`text-gray-600 ${getFontSizeClass()}`}>
                {currentProfile.preferences.prayer_mode ? 'السلام عليكم - ' : ''}
                Interface adaptée selon vos besoins d'accessibilité
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h3 className={`font-semibold mb-2 ${getFontSizeClass()}`}>
                    {currentProfile.preferences.islamic_ui ? '📚 ' : ''}
                    Formations
                  </h3>
                  <p className={`text-sm ${getFontSizeClass()}`}>
                    Accédez à vos cours
                  </p>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg">
                  <h3 className={`font-semibold mb-2 ${getFontSizeClass()}`}>
                    {currentProfile.preferences.islamic_ui ? '🕌 ' : ''}
                    Prières
                  </h3>
                  <p className={`text-sm ${getFontSizeClass()}`}>
                    {currentProfile.preferences.prayer_mode ? 'Prochaine: Dhuhr 12:15' : 'Horaires disponibles'}
                  </p>
                </div>
                
                <div className="p-3 bg-purple-50 rounded-lg">
                  <h3 className={`font-semibold mb-2 ${getFontSizeClass()}`}>
                    {currentProfile.preferences.islamic_ui ? '💝 ' : ''}
                    Communauté
                  </h3>
                  <p className={`text-sm ${getFontSizeClass()}`}>
                    Rejoignez les discussions
                  </p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                <h4 className={`font-semibold text-yellow-800 mb-1 ${getFontSizeClass()}`}>
                  Adaptations actives:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {currentProfile.needs.map(need => (
                    <Badge key={need.id} variant="secondary" className="text-xs">
                      {need.name}
                    </Badge>
                  ))}
                  {Object.entries(currentProfile.adaptive_features)
                    .filter(([_, enabled]) => enabled)
                    .map(([feature, _]) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature.replace('_', ' ')}
                      </Badge>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center mt-8 p-4 border rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2025 CED HalalTech™ - Générateur de Profil d'Accessibilité Dynamique
          <br />
          <span className="text-xs">
            Accessibilité inclusive respectant les valeurs islamiques et les besoins individuels
          </span>
        </p>
      </div>
    </div>
  );
};

export default DynamicAccessibilityProfile;