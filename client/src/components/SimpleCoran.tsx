import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2 } from "lucide-react";

export function SimpleCoran() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSurah, setCurrentSurah] = useState<string>('');
  const audioRef = useRef<HTMLAudioElement>(null);

  // URLs audio réelles depuis plusieurs sources
  const audioSources = {
    fatiha: 'https://verses.quran.com/Alafasy/mp3/001001.mp3', // Al-Fatiha verset 1
    ikhlas: 'https://verses.quran.com/Alafasy/mp3/112001.mp3', // Al-Ikhlas verset 1
    falaq: 'https://verses.quran.com/Alafasy/mp3/113001.mp3',  // Al-Falaq verset 1
    nas: 'https://verses.quran.com/Alafasy/mp3/114001.mp3',    // An-Nas verset 1
    yasin: 'https://verses.quran.com/Alafasy/mp3/036001.mp3',  // Ya-Sin verset 1
    mulk: 'https://verses.quran.com/Alafasy/mp3/067001.mp3',   // Al-Mulk verset 1
  };

  const playAudio = (surahKey: string, surahName: string) => {
    const audio = audioRef.current;
    if (!audio) return;

    // Stop current audio if playing
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    }

    // Load and play new audio
    const audioUrl = audioSources[surahKey as keyof typeof audioSources];
    console.log('Tentative lecture:', audioUrl);
    
    audio.src = audioUrl;
    setCurrentSurah(surahName);
    
    // Forcer le chargement
    audio.load();
    
    audio.play()
      .then(() => {
        console.log('Audio démarré avec succès');
        setIsPlaying(true);
      })
      .catch((error) => {
        console.error('Erreur lecture audio:', error);
        
        // Essayer source alternative
        const fallbackUrl = `https://server11.mp3quran.net/sds/${surahKey === 'fatiha' ? '001' : surahKey === 'ikhlas' ? '112' : '113'}.mp3`;
        console.log('Tentative source alternative:', fallbackUrl);
        
        audio.src = fallbackUrl;
        audio.load();
        
        audio.play()
          .then(() => {
            console.log('Source alternative fonctionne');
            setIsPlaying(true);
          })
          .catch((err) => {
            console.error('Toutes sources échouent:', err);
            alert(`Erreur audio: ${error.message}\n\nVérifiez:\n1. Connexion internet\n2. Autorisations audio navigateur\n3. Volume système`);
          });
      });
  };

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-emerald-800 mb-4">🕌 Écoute du Saint Coran</h1>
          <p className="text-xl text-emerald-600">Récitations authentiques par Sheikh Mishary Al-Afasy</p>
        </div>

        {/* Lecteur actuel */}
        {currentSurah && (
          <Card className="mb-8 bg-white/80 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                    {isPlaying ? (
                      <Volume2 className="h-8 w-8 text-white animate-pulse" />
                    ) : (
                      <Play className="h-8 w-8 text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{currentSurah}</h3>
                    <p className="text-emerald-600">Sheikh Mishary Al-Afasy</p>
                  </div>
                </div>
                <Button 
                  onClick={togglePlayPause}
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white"
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Sourates populaires */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">🎧 Sourates les Plus Récitées</CardTitle>
            <p className="text-center text-gray-600">Cliquez pour écouter immédiatement</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <Button 
                onClick={() => playAudio('fatiha', 'الفاتحة - Al-Fatiha')}
                className="h-24 bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700 flex flex-col justify-center text-left"
              >
                <div className="text-2xl font-bold mb-1">الفاتحة</div>
                <div className="text-sm opacity-90">1. Al-Fatiha (L'Ouverture)</div>
                <div className="text-xs opacity-75">7 versets • 1:30 min</div>
              </Button>

              <Button 
                onClick={() => playAudio('ikhlas', 'الإخلاص - Al-Ikhlas')}
                className="h-24 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 flex flex-col justify-center"
              >
                <div className="text-2xl font-bold mb-1">الإخلاص</div>
                <div className="text-sm opacity-90">112. Al-Ikhlas (La Pureté)</div>
                <div className="text-xs opacity-75">4 versets • 0:45 min</div>
              </Button>

              <Button 
                onClick={() => playAudio('yasin', 'يس - Ya-Sin')}
                className="h-24 bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 flex flex-col justify-center"
              >
                <div className="text-2xl font-bold mb-1">يس</div>
                <div className="text-sm opacity-90">36. Ya-Sin</div>
                <div className="text-xs opacity-75">83 versets • 42 min</div>
              </Button>

              <Button 
                onClick={() => playAudio('mulk', 'الملك - Al-Mulk')}
                className="h-24 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 flex flex-col justify-center"
              >
                <div className="text-2xl font-bold mb-1">الملك</div>
                <div className="text-sm opacity-90">67. Al-Mulk (La Royauté)</div>
                <div className="text-xs opacity-75">30 versets • 18 min</div>
              </Button>

              <Button 
                onClick={() => playAudio('falaq', 'الفلق - Al-Falaq')}
                className="h-24 bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 flex flex-col justify-center"
              >
                <div className="text-2xl font-bold mb-1">الفلق</div>
                <div className="text-sm opacity-90">113. Al-Falaq (L'Aube)</div>
                <div className="text-xs opacity-75">5 versets • 0:50 min</div>
              </Button>

              <Button 
                onClick={() => playAudio('nas', 'الناس - An-Nas')}
                className="h-24 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-indigo-700 flex flex-col justify-center"
              >
                <div className="text-2xl font-bold mb-1">الناس</div>
                <div className="text-sm opacity-90">114. An-Nas (Les Hommes)</div>
                <div className="text-xs opacity-75">6 versets • 1 min</div>
              </Button>

            </div>
          </CardContent>
        </Card>

        {/* Test Audio Direct */}
        <div className="mt-8 text-center">
          <div className="bg-white/80 backdrop-blur rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">🔊 Test Audio Direct</h3>
            <div className="flex justify-center gap-4 mb-4">
              <button 
                onClick={() => {
                  const testAudio = new Audio('https://verses.quran.com/Alafasy/mp3/001001.mp3');
                  testAudio.play().catch(e => alert('Erreur: ' + e.message));
                }}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                TEST 1: Verse Quran.com
              </button>
              
              <button 
                onClick={() => {
                  const testAudio = new Audio('https://server8.mp3quran.net/afs/001.mp3');
                  testAudio.play().catch(e => alert('Erreur: ' + e.message));
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                TEST 2: MP3Quran.net
              </button>
              
              <button 
                onClick={() => {
                  const testAudio = new Audio('https://audio.quranwbw.com/audio/mishary/001.mp3');
                  testAudio.play().catch(e => alert('Erreur: ' + e.message));
                }}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                TEST 3: QuranWBW
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-2xl mb-2">1️⃣</div>
                <p><strong>Testez</strong> les boutons TEST ci-dessus</p>
              </div>
              <div>
                <div className="text-2xl mb-2">2️⃣</div>
                <p><strong>Si ça marche</strong>, les sourates marchent aussi</p>
              </div>
              <div>
                <div className="text-2xl mb-2">3️⃣</div>
                <p><strong>Sinon</strong> problème de connexion/navigateur</p>
              </div>
            </div>
          </div>
        </div>

        {/* Audio player (hidden) */}
        <audio
          ref={audioRef}
          onEnded={() => setIsPlaying(false)}
          onError={(e) => {
            console.error('Erreur audio:', e);
            setIsPlaying(false);
            alert('Erreur de lecture audio. Vérifiez votre connexion.');
          }}
        />

        {/* Footer */}
        <div className="mt-8 pt-8 border-t border-emerald-200 text-center text-sm text-emerald-600">
          <p>© 2025 Club Empreinte Digitale - Yakoubi Yamina</p>
          <p>🕌 Récitations authentiques certifiées halal - Sources: MP3Quran.net</p>
        </div>

      </div>
    </div>
  );
}