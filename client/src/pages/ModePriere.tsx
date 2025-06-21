import { PrayerMode } from '@/components/PrayerMode';

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
            automatiquement les services durant les heures de prière. Une innovation 
            unique qui allie technologie bancaire moderne et valeurs islamiques.
          </p>
        </div>
        
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