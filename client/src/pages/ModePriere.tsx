import { PrayerMode } from '@/components/PrayerMode';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar, Satellite } from 'lucide-react';

export default function ModePriere() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mode Prière CED Bank
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre banque digitale respecte vos pratiques religieuses en suspendant 
            automatiquement les services durant les heures de prière. Synchronisé 
            avec le planificateur satellite CED et les calendriers hégirien/grégorien.
          </p>
        </div>

        {/* Intégration avec le système existant */}
        <Card className="mb-6 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-green-50">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-blue-500 rounded-full flex items-center justify-center">
                  <Satellite className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-blue-800 mb-1">Planificateur Satellite</h3>
                <p className="text-sm text-blue-600">Synchronisation temps réel</p>
                <Badge className="bg-green-500 text-white mt-2">Connecté</Badge>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-green-500 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-green-800 mb-1">Calendriers Intégrés</h3>
                <p className="text-sm text-green-600">Hégirien & Grégorien</p>
                <Badge className="bg-blue-500 text-white mt-2">Synchronisé</Badge>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-purple-500 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-purple-800 mb-1">Horaires Précis</h3>
                <p className="text-sm text-purple-600">Calculs astronomiques</p>
                <Badge className="bg-purple-500 text-white mt-2">Actif</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <PrayerMode />
        
        {/* Informations sur la conformité */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
              <div className="text-3xl">☪️</div>
            </div>
            <h2 className="text-2xl font-bold mb-4">
              Technologie Respectueuse de la Foi
            </h2>
            <p className="text-lg text-green-100 mb-6">
              CED Bank est la première banque digitale au monde à intégrer 
              automatiquement les horaires de prière dans ses services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-bold mb-2">Calculs Précis</h3>
                <p className="text-sm text-green-100">
                  Horaires basés sur votre localisation géographique exacte
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-bold mb-2">Validation Religieuse</h3>
                <p className="text-sm text-green-100">
                  Approuvé par les autorités religieuses des Émirats Arabes Unis
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-bold mb-2">Reprise Automatique</h3>
                <p className="text-sm text-green-100">
                  Services rétablis instantanément après chaque prière
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}