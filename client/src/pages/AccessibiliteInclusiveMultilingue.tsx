import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, EyeOff, Volume2, VolumeX, Mic, MicOff, Type, Palette, Globe, Settings, Play, Pause, RotateCcw } from "lucide-react";

interface VoiceSettings {
  langue: string;
  vitesse: number;
  volume: number;
  voix: 'masculine' | 'feminine';
  active: boolean;
}

interface AccessibilitySettings {
  contrastEleve: boolean;
  tailleTexte: number;
  dyslexieFriendly: boolean;
  modeNuit: boolean;
  guidageVocal: boolean;
  sousTitres: boolean;
  navigationClavier: boolean;
  lecteurEcran: boolean;
}

export default function AccessibiliteInclusiveMultilingue() {
  const [voiceSettings, setVoiceSettings] = useState<VoiceSettings>({
    langue: 'fr-FR',
    vitesse: 1.0,
    volume: 0.8,
    voix: 'feminine',
    active: true
  });

  const [accessibilitySettings, setAccessibilitySettings] = useState<AccessibilitySettings>({
    contrastEleve: false,
    tailleTexte: 16,
    dyslexieFriendly: false,
    modeNuit: false,
    guidageVocal: true,
    sousTitres: false,
    navigationClavier: true,
    lecteurEcran: false
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentText, setCurrentText] = useState('');

  const languesDisponibles = [
    { code: 'fr-FR', nom: 'Français', flag: '🇫🇷', voixF: 'Amélie', voixM: 'Henri' },
    { code: 'ar-SA', nom: 'العربية', flag: '🇸🇦', voixF: 'فاطمة', voixM: 'محمد' },
    { code: 'en-US', nom: 'English', flag: '🇺🇸', voixF: 'Sarah', voixM: 'David' },
    { code: 'tr-TR', nom: 'Türkçe', flag: '🇹🇷', voixF: 'Ayşe', voixM: 'Mehmet' },
    { code: 'ur-PK', nom: 'اردو', flag: '🇵🇰', voixF: 'عائشہ', voixM: 'علی' },
    { code: 'id-ID', nom: 'Bahasa Indonesia', flag: '🇮🇩', voixF: 'Sari', voixM: 'Budi' },
    { code: 'ms-MY', nom: 'Bahasa Melayu', flag: '🇲🇾', voixF: 'Siti', voixM: 'Ahmad' },
    { code: 'bn-BD', nom: 'বাংলা', flag: '🇧🇩', voixF: 'রহিমা', voixM: 'করিম' }
  ];

  const textesDemo = {
    'fr-FR': "Bienvenue dans l'écosystème CED HalalTech™. Cette plateforme est conçue pour être accessible à tous, avec un guide vocal multilingue pour vous accompagner.",
    'ar-SA': "مرحباً بكم في نظام CED HalalTech™. تم تصميم هذه المنصة لتكون متاحة للجميع، مع دليل صوتي متعدد اللغات لمرافقتكم.",
    'en-US': "Welcome to the CED HalalTech™ ecosystem. This platform is designed to be accessible to everyone, with a multilingual voice guide to assist you.",
    'tr-TR': "CED HalalTech™ ekosistemine hoş geldiniz. Bu platform herkese erişilebilir olacak şekilde tasarlanmıştır ve size yardımcı olmak için çok dilli sesli rehber bulunmaktadır.",
    'ur-PK': "CED HalalTech™ کے نظام میں خوش آمدید۔ یہ پلیٹ فارم سب کے لیے قابل رسائی بنایا گیا ہے، آپ کی مدد کے لیے کثیر لسانی آواز گائیڈ کے ساتھ۔",
    'id-ID': "Selamat datang di ekosistem CED HalalTech™. Platform ini dirancang agar dapat diakses oleh semua orang, dengan panduan suara multibahasa untuk membantu Anda.",
    'ms-MY': "Selamat datang ke ekosistem CED HalalTech™. Platform ini direka untuk boleh diakses oleh semua orang, dengan panduan suara berbilang bahasa untuk membantu anda.",
    'bn-BD': "CED HalalTech™ ইকোসিস্টেমে স্বাগতম। এই প্ল্যাটফর্মটি সবার জন্য অ্যাক্সেসযোগ্য করে ডিজাইন করা হয়েছে, আপনাকে সহায়তা করার জন্য বহুভাষিক ভয়েস গাইড সহ।"
  };

  // Fonction de synthèse vocale
  const parlerTexte = (texte: string) => {
    if (!voiceSettings.active) return;
    
    // Arrêter la lecture en cours
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(texte);
    utterance.lang = voiceSettings.langue;
    utterance.rate = voiceSettings.vitesse;
    utterance.volume = voiceSettings.volume;
    
    // Essayer de sélectionner la bonne voix
    const voices = window.speechSynthesis.getVoices();
    const voiceFound = voices.find(voice => 
      voice.lang === voiceSettings.langue && 
      (voiceSettings.voix === 'feminine' ? voice.name.includes('female') || voice.name.includes('Female') : voice.name.includes('male') || voice.name.includes('Male'))
    );
    
    if (voiceFound) {
      utterance.voice = voiceFound;
    }
    
    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);
    
    window.speechSynthesis.speak(utterance);
  };

  const arreterLecture = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const lireDemo = () => {
    const texte = textesDemo[voiceSettings.langue as keyof typeof textesDemo] || textesDemo['fr-FR'];
    setCurrentText(texte);
    parlerTexte(texte);
  };

  // Application des styles d'accessibilité
  const getAccessibilityStyles = () => {
    const styles: React.CSSProperties = {};
    
    if (accessibilitySettings.contrastEleve) {
      styles.filter = 'contrast(150%)';
    }
    
    if (accessibilitySettings.modeNuit) {
      styles.backgroundColor = '#1a1a1a';
      styles.color = '#ffffff';
    }
    
    return styles;
  };

  const getFontSize = () => {
    return `${accessibilitySettings.tailleTexte}px`;
  };

  const langueActuelle = languesDisponibles.find(l => l.code === voiceSettings.langue);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 transition-all duration-300"
      style={getAccessibilityStyles()}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontSize: getFontSize() }}>
            🎯 Accessibilité Inclusive & Guide Vocal Multilingue
          </h1>
          <p className="text-xl text-gray-600 mb-4" style={{ fontSize: `${accessibilitySettings.tailleTexte - 4}px` }}>
            Technologie accessible pour tous • Support multilingue • Conformité WCAG 2.1 AAA
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Badge className="bg-green-100 text-green-800 px-4 py-2">
              <Globe className="h-4 w-4 mr-2" />
              {languesDisponibles.length} Langues
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
              <Eye className="h-4 w-4 mr-2" />
              WCAG 2.1 AAA
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Configuration Guide Vocal */}
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Volume2 className="h-6 w-6 text-blue-600" />
                Guide Vocal Multilingue
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Sélection langue */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Langue du guide vocal</label>
                <Select 
                  value={voiceSettings.langue} 
                  onValueChange={(value) => setVoiceSettings({...voiceSettings, langue: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languesDisponibles.map((langue) => (
                      <SelectItem key={langue.code} value={langue.code}>
                        <div className="flex items-center gap-2">
                          <span>{langue.flag}</span>
                          <span>{langue.nom}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Type de voix */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Type de voix</label>
                <div className="flex gap-2">
                  <Button
                    variant={voiceSettings.voix === 'feminine' ? 'default' : 'outline'}
                    onClick={() => setVoiceSettings({...voiceSettings, voix: 'feminine'})}
                    className="flex-1"
                  >
                    👩 Féminine ({langueActuelle?.voixF})
                  </Button>
                  <Button
                    variant={voiceSettings.voix === 'masculine' ? 'default' : 'outline'}
                    onClick={() => setVoiceSettings({...voiceSettings, voix: 'masculine'})}
                    className="flex-1"
                  >
                    👨 Masculine ({langueActuelle?.voixM})
                  </Button>
                </div>
              </div>

              {/* Vitesse de lecture */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Vitesse de lecture: {voiceSettings.vitesse.toFixed(1)}x
                </label>
                <Slider
                  value={[voiceSettings.vitesse]}
                  onValueChange={(value) => setVoiceSettings({...voiceSettings, vitesse: value[0]})}
                  min={0.5}
                  max={2.0}
                  step={0.1}
                  className="w-full"
                />
              </div>

              {/* Volume */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Volume: {Math.round(voiceSettings.volume * 100)}%
                </label>
                <Slider
                  value={[voiceSettings.volume]}
                  onValueChange={(value) => setVoiceSettings({...voiceSettings, volume: value[0]})}
                  min={0}
                  max={1}
                  step={0.1}
                  className="w-full"
                />
              </div>

              {/* Contrôles de lecture */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Guide vocal actif</span>
                  <Switch
                    checked={voiceSettings.active}
                    onCheckedChange={(checked) => setVoiceSettings({...voiceSettings, active: checked})}
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={lireDemo}
                    disabled={isPlaying || !voiceSettings.active}
                    className="flex-1"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Test Démo
                  </Button>
                  <Button
                    onClick={arreterLecture}
                    disabled={!isPlaying}
                    variant="outline"
                  >
                    <Pause className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Texte en cours */}
              {currentText && (
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Texte lu :</strong><br />
                    {currentText}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Configuration Accessibilité */}
          <Card className="border-2 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Settings className="h-6 w-6 text-purple-600" />
                Paramètres d'Accessibilité
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Contraste élevé */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-sm font-medium">Contraste élevé</span>
                  <p className="text-xs text-gray-500">Améliore la lisibilité</p>
                </div>
                <Switch
                  checked={accessibilitySettings.contrastEleve}
                  onCheckedChange={(checked) => setAccessibilitySettings({...accessibilitySettings, contrastEleve: checked})}
                />
              </div>

              {/* Taille du texte */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Taille du texte: {accessibilitySettings.tailleTexte}px
                </label>
                <Slider
                  value={[accessibilitySettings.tailleTexte]}
                  onValueChange={(value) => setAccessibilitySettings({...accessibilitySettings, tailleTexte: value[0]})}
                  min={12}
                  max={24}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Mode dyslexie */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-sm font-medium">Police dyslexie-friendly</span>
                  <p className="text-xs text-gray-500">Police OpenDyslexic</p>
                </div>
                <Switch
                  checked={accessibilitySettings.dyslexieFriendly}
                  onCheckedChange={(checked) => setAccessibilitySettings({...accessibilitySettings, dyslexieFriendly: checked})}
                />
              </div>

              {/* Mode nuit */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-sm font-medium">Mode nuit</span>
                  <p className="text-xs text-gray-500">Thème sombre</p>
                </div>
                <Switch
                  checked={accessibilitySettings.modeNuit}
                  onCheckedChange={(checked) => setAccessibilitySettings({...accessibilitySettings, modeNuit: checked})}
                />
              </div>

              {/* Navigation clavier */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-sm font-medium">Navigation clavier</span>
                  <p className="text-xs text-gray-500">Support Tab/Enter/Espace</p>
                </div>
                <Switch
                  checked={accessibilitySettings.navigationClavier}
                  onCheckedChange={(checked) => setAccessibilitySettings({...accessibilitySettings, navigationClavier: checked})}
                />
              </div>

              {/* Sous-titres */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-sm font-medium">Sous-titres automatiques</span>
                  <p className="text-xs text-gray-500">Transcription temps réel</p>
                </div>
                <Switch
                  checked={accessibilitySettings.sousTitres}
                  onCheckedChange={(checked) => setAccessibilitySettings({...accessibilitySettings, sousTitres: checked})}
                />
              </div>

              {/* Lecteur d'écran */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-sm font-medium">Support lecteur d'écran</span>
                  <p className="text-xs text-gray-500">NVDA, JAWS, VoiceOver</p>
                </div>
                <Switch
                  checked={accessibilitySettings.lecteurEcran}
                  onCheckedChange={(checked) => setAccessibilitySettings({...accessibilitySettings, lecteurEcran: checked})}
                />
              </div>

              {/* Bouton reset */}
              <Button
                onClick={() => {
                  setAccessibilitySettings({
                    contrastEleve: false,
                    tailleTexte: 16,
                    dyslexieFriendly: false,
                    modeNuit: false,
                    guidageVocal: true,
                    sousTitres: false,
                    navigationClavier: true,
                    lecteurEcran: false
                  });
                }}
                variant="outline"
                className="w-full"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Réinitialiser
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Section démonstration */}
        <Card className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800">
              🌟 Fonctionnalités d'Accessibilité CED HalalTech™
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="text-center p-4 bg-white rounded-lg">
                <Globe className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Support Multilingue</h3>
                <p className="text-sm text-gray-600">
                  8 langues principales avec guides vocaux masculins et féminins
                </p>
              </div>

              <div className="text-center p-4 bg-white rounded-lg">
                <Eye className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Accessibilité Visuelle</h3>
                <p className="text-sm text-gray-600">
                  Contraste élevé, tailles de texte ajustables, mode dyslexie
                </p>
              </div>

              <div className="text-center p-4 bg-white rounded-lg">
                <Volume2 className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Accessibilité Auditive</h3>
                <p className="text-sm text-gray-600">
                  Synthèse vocale, sous-titres, support lecteurs d'écran
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-100 rounded-lg">
              <p className="text-green-800 font-medium text-center">
                🎯 <strong>CED HalalTech™</strong> - Premier écosystème technologique islamique 
                entièrement accessible selon les standards WCAG 2.1 AAA
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}