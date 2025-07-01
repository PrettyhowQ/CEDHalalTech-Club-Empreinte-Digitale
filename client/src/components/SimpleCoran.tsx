import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2 } from "lucide-react";

export function SimpleCoran() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSurah, setCurrentSurah] = useState<string>('');
  const audioRef = useRef<HTMLAudioElement>(null);

  // URLs audio réelles depuis MP3Quran.net
  const audioSources = {
    fatiha: 'https://server8.mp3quran.net/afs/001.mp3', // Al-Fatiha par Mishary
    ikhlas: 'https://server8.mp3quran.net/afs/112.mp3', // Al-Ikhlas par Mishary
    falaq: 'https://server8.mp3quran.net/afs/113.mp3',  // Al-Falaq par Mishary
    nas: 'https://server8.mp3quran.net/afs/114.mp3',    // An-Nas par Mishary
    yasin: 'https://server8.mp3quran.net/afs/036.mp3',  // Ya-Sin par Mishary
    mulk: 'https://server8.mp3quran.net/afs/067.mp3',   // Al-Mulk par Mishary
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
    audio.src = audioSources[surahKey as keyof typeof audioSources];
    setCurrentSurah(surahName);
    
    audio.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((error) => {
        console.error('Erreur lecture audio:', error);
        alert('Impossible de lire l\'audio. Vérifiez votre connexion internet.');
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

        {/* Instructions */}
        <div className="mt-8 text-center">
          <div className="bg-white/80 backdrop-blur rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">💡 Comment utiliser</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-2xl mb-2">1️⃣</div>
                <p><strong>Cliquez</strong> sur une sourate</p>
              </div>
              <div>
                <div className="text-2xl mb-2">2️⃣</div>
                <p><strong>L'audio se lance</strong> automatiquement</p>
              </div>
              <div>
                <div className="text-2xl mb-2">3️⃣</div>
                <p><strong>Utilisez les contrôles</strong> pour pause/lecture</p>
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